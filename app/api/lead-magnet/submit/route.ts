/**
 * POST /api/lead-magnet/submit
 *
 * Load-bearing lead-magnet capture endpoint. Called from landing pages,
 * download gates, and any marketing asset that exchanges a form submission
 * for a PDF / resource download.
 *
 * Input (JSON body):
 *   email            string   required
 *   first_name       string   optional
 *   last_name        string   optional
 *   company_name     string   required
 *   website          string   required  (company website — used for Quick Checker)
 *   sam_registered   boolean  optional
 *   set_asides       string[] optional  (e.g. ["8(a)", "HUBZone"])
 *   hubspot_source   string   optional  (e.g. "field_manual_download")
 *   utm_source       string   optional
 *   utm_medium       string   optional
 *   utm_campaign     string   optional
 *   magnet_key       string   optional  (default: "lead-magnet-submit")
 *
 * Workflow (failure semantics per step):
 *   1. Validate. Hard-reject if email/company_name/website missing.
 *   2. Insert marketing_leads row. HARD FAIL — we cannot lose the lead.
 *   3. Fire Quick Checker on website via /api/analyze-company (background-fire).
 *      Non-blocking — analysis_id returned in response or null on failure.
 *   4. Push to HubSpot via /api/hubspot/sync-lead on the dashboard.
 *      Non-blocking — log failure + continue.
 *   5. Enroll in drip sequence (qc_nurture when analysis_id is available,
 *      otherwise fb_nurture). Non-blocking.
 *   6. Enqueue AI Lead Brief. Non-blocking.
 *   7. Return { ok: true, analysis_id, download_token }.
 *
 * download_token: HMAC-SHA256 signed token (email + 72h expiry) that the
 * asset-delivery page validates before serving the PDF URL.
 *
 * CORS: capturepilot.com, americurial.com, and localhost only.
 */

import { NextRequest, NextResponse } from "next/server";
import { createHash, createHmac } from "node:crypto";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const DASHBOARD_URL =
    process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.capturepilot.com";

// HMAC secret for download tokens. Falls back to SUPABASE_SERVICE_KEY so
// production is always non-empty without an extra env add.
const TOKEN_SECRET =
    process.env.LEAD_MAGNET_TOKEN_SECRET ||
    process.env.SUPABASE_SERVICE_KEY ||
    "insecure-dev-only-secret";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || "";

const ALLOWED_ORIGINS = new Set([
    "https://www.capturepilot.com",
    "https://capturepilot.com",
    "https://americurial.com",
    "https://www.americurial.com",
    "http://localhost:3000",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function corsHeaders(origin: string | null): Record<string, string> {
    const allowed =
        origin && ALLOWED_ORIGINS.has(origin)
            ? origin
            : "https://www.capturepilot.com";
    return {
        "Access-Control-Allow-Origin": allowed,
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        Vary: "Origin",
    };
}

/**
 * HMAC-SHA256 download token. Encodes email + 72h expiry so it can be
 * validated without a DB round-trip on the asset-delivery page.
 */
function issueDownloadToken(email: string): string {
    const expiresAt = Date.now() + 72 * 60 * 60 * 1000;
    const payload = `${email.toLowerCase()}:${expiresAt}`;
    const sig = createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");
    return Buffer.from(`${payload}:${sig}`).toString("base64url");
}

/**
 * Minimal Supabase REST insert — avoids importing the full JS client into
 * the lean website bundle. Returns the error object or null on success.
 */
async function supabaseInsert(
    table: string,
    row: Record<string, unknown>,
): Promise<{ code?: string; message?: string } | null> {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
        return { message: "Supabase not configured" };
    }
    let res: Response;
    try {
        res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
            method: "POST",
            headers: {
                apikey: SUPABASE_SERVICE_KEY,
                Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
                "Content-Type": "application/json",
                Prefer: "return=minimal",
            },
            body: JSON.stringify(row),
            signal: AbortSignal.timeout(10_000),
        });
    } catch (err) {
        return { message: (err as Error).message };
    }
    if (res.ok || res.status === 201) return null;
    const text = await res.text().catch(() => "");
    try {
        const json = JSON.parse(text) as { code?: string; message?: string; details?: string };
        return { code: json.code, message: json.message || json.details || text };
    } catch {
        return { message: text.slice(0, 300) };
    }
}

/**
 * PATCH marketing_leads by email + magnet_key. Swallows stale PostgREST
 * schema cache errors (PGRST204) the same way the dashboard's /api/leads does.
 */
async function supabasePatch(
    table: string,
    filter: Record<string, string>,
    updates: Record<string, unknown>,
): Promise<void> {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return;
    const params = new URLSearchParams(filter).toString();
    let res: Response | null = null;
    try {
        res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params}`, {
            method: "PATCH",
            headers: {
                apikey: SUPABASE_SERVICE_KEY,
                Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updates),
            signal: AbortSignal.timeout(8_000),
        });
    } catch {
        return;
    }
    if (!res.ok) {
        const t = await res.text().catch(() => "");
        const isCacheStale = t.includes("schema cache") || t.includes("PGRST204");
        if (!isCacheStale) {
            console.warn(
                `[lead-magnet/submit] supabase PATCH ${table} non-fatal ${res.status}:`,
                t.slice(0, 200),
            );
        }
    }
}

/** Fetch the lead row id by email + magnet_key for enqueue-lead-brief. */
async function getLeadId(email: string, magnetKey: string): Promise<string | null> {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return null;
    const params = new URLSearchParams({
        email: `eq.${email}`,
        magnet_key: `eq.${magnetKey}`,
        select: "id",
        limit: "1",
    });
    try {
        const res = await fetch(
            `${SUPABASE_URL}/rest/v1/marketing_leads?${params.toString()}`,
            {
                headers: {
                    apikey: SUPABASE_SERVICE_KEY,
                    Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
                },
                signal: AbortSignal.timeout(5_000),
            },
        );
        if (!res.ok) return null;
        const rows = (await res.json()) as Array<{ id: string }>;
        return rows[0]?.id || null;
    } catch {
        return null;
    }
}

// ---------------------------------------------------------------------------
// Route handlers
// ---------------------------------------------------------------------------

export async function OPTIONS(req: NextRequest) {
    return new NextResponse(null, {
        status: 204,
        headers: corsHeaders(req.headers.get("origin")),
    });
}

export async function POST(req: NextRequest) {
    const origin = req.headers.get("origin");
    const headers = corsHeaders(origin);

    // ── 1. Parse + validate ─────────────────────────────────────────────────
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "invalid JSON" }, { status: 400, headers });
    }

    const email = String(body.email ?? "").trim().toLowerCase();
    const firstName = body.first_name ? String(body.first_name).trim().slice(0, 80) : null;
    const lastName = body.last_name ? String(body.last_name).trim().slice(0, 80) : null;
    const companyName = body.company_name ? String(body.company_name).trim().slice(0, 200) : null;
    // Accept both "website" (new contract) and legacy "company_website"
    const websiteRaw = body.website || body.company_website;
    const websiteInput = websiteRaw ? String(websiteRaw).trim().slice(0, 500) : null;
    const samRegistered = Boolean(body.sam_registered ?? false);
    const setAsides: string[] = Array.isArray(body.set_asides)
        ? (body.set_asides as unknown[]).map(s => String(s).trim()).filter(Boolean).slice(0, 10)
        : [];
    const hubspotSource = body.hubspot_source
        ? String(body.hubspot_source).trim().slice(0, 100)
        : "lead_magnet";
    const magnetKey = body.magnet_key
        ? String(body.magnet_key).trim().slice(0, 80)
        : "lead-magnet-submit";
    const utmSource = body.utm_source ? String(body.utm_source).slice(0, 200) : null;
    const utmMedium = body.utm_medium ? String(body.utm_medium).slice(0, 200) : null;
    const utmCampaign = body.utm_campaign ? String(body.utm_campaign).slice(0, 200) : null;

    // Hard validation — all three are required to run the pipeline
    if (!email || !EMAIL_RE.test(email)) {
        return NextResponse.json(
            { error: "valid email is required", field: "email" },
            { status: 400, headers },
        );
    }
    if (!companyName) {
        return NextResponse.json(
            { error: "company_name is required", field: "company_name" },
            { status: 400, headers },
        );
    }
    if (!websiteInput) {
        return NextResponse.json(
            { error: "website is required", field: "website" },
            { status: 400, headers },
        );
    }

    // Normalize + validate the website URL
    let normalizedWebsite = websiteInput;
    if (!normalizedWebsite.startsWith("http://") && !normalizedWebsite.startsWith("https://")) {
        normalizedWebsite = `https://${normalizedWebsite}`;
    }
    try {
        new URL(normalizedWebsite);
    } catch {
        return NextResponse.json(
            { error: "website must be a valid URL", field: "website" },
            { status: 400, headers },
        );
    }

    const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
    const ipHash = ip ? createHash("sha256").update(ip).digest("hex").slice(0, 32) : null;
    const userAgent = req.headers.get("user-agent")?.slice(0, 400) ?? null;
    const referrer = req.headers.get("referer")?.slice(0, 400) ?? null;

    // ── 2. Insert marketing_leads row — HARD FAIL on non-duplicate errors ──
    let isDuplicate = false;
    const insertErr = await supabaseInsert("marketing_leads", {
        email,
        company: companyName,
        magnet_key: magnetKey,
        source: hubspotSource,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        ip_hash: ipHash,
        user_agent: userAgent,
        referrer,
    });

    if (insertErr) {
        const isDup =
            insertErr.code === "23505" ||
            (insertErr.message || "").includes("duplicate key");
        if (isDup) {
            isDuplicate = true;
        } else {
            // Any non-duplicate insert failure is hard. We cannot lose a lead row.
            console.error("[lead-magnet/submit] marketing_leads insert HARD FAIL", insertErr);
            return NextResponse.json(
                {
                    error: "lead capture failed — please try again or email andre@capturepilot.com",
                    debug: (insertErr.message || "").slice(0, 100),
                },
                { status: 500, headers },
            );
        }
    }

    // Patch v2 name columns separately — stale PostgREST schema cache errors
    // are swallowed. The base row is already committed at this point.
    if (firstName || lastName) {
        await supabasePatch(
            "marketing_leads",
            { email: `eq.${email}`, magnet_key: `eq.${magnetKey}` },
            {
                ...(firstName ? { first_name: firstName } : {}),
                ...(lastName ? { last_name: lastName } : {}),
            },
        );
    }

    // ── 3. Fire Quick Checker (background) ─────────────────────────────────
    // POST /api/analyze-company returns analysis_id immediately; the actual
    // pipeline runs async at /api/analyze-company/run/[id]. We fire both
    // requests and capture the id. Non-blocking — failure yields null.
    let analysisId: string | null = null;
    try {
        const qcRes = await fetch(`${DASHBOARD_URL}/api/analyze-company`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                company_name: companyName,
                website: normalizedWebsite,
            }),
            // 12s budget — we only need the id back; the heavy pipeline is async.
            signal: AbortSignal.timeout(12_000),
        });
        if (qcRes.ok) {
            const qcJson = (await qcRes.json()) as { analysis_id?: string };
            analysisId = qcJson.analysis_id || null;
            // Kick the pipeline runner in fire-and-forget mode. This is the
            // same pattern used by the /check page — Vercel keeps the worker
            // alive independently of this request.
            if (analysisId) {
                fetch(`${DASHBOARD_URL}/api/analyze-company/run/${analysisId}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({}),
                }).catch(err =>
                    console.warn(
                        "[lead-magnet/submit] QC run fire-and-forget (non-fatal):",
                        (err as Error).message,
                    ),
                );
            }
        } else {
            const errText = await qcRes.text().catch(() => "");
            console.warn(
                `[lead-magnet/submit] QC analyze-company ${qcRes.status} (non-fatal):`,
                errText.slice(0, 200),
            );
        }
    } catch (err) {
        console.warn("[lead-magnet/submit] QC fire failed (non-fatal):", (err as Error).message);
    }

    // Persist analysis_id on the lead row so downstream consumers can link
    // back to the Quick Checker report.
    if (analysisId) {
        await supabasePatch(
            "marketing_leads",
            { email: `eq.${email}`, magnet_key: `eq.${magnetKey}` },
            { analysis_id: analysisId },
        );
    }

    // ── 4. HubSpot push (non-blocking) ─────────────────────────────────────
    // Proxied through the dashboard so we don't carry the HubSpot token in
    // the website's env. Failure is logged and swallowed.
    void (async () => {
        try {
            const qcUrl = analysisId
                ? `https://app.capturepilot.com/check/${analysisId}`
                : null;

            // Lead-quality classification mirrors classifyLeadQuality in
            // dashboard/src/lib/hubspot-brief.ts.
            const FREE_MAIL_RE = /@(gmail|yahoo|hotmail|outlook|icloud|aol|live|msn|protonmail|proton)\./i;
            const isPersonalEmail = FREE_MAIL_RE.test(email);
            let leadQuality: string;
            if (isPersonalEmail) {
                leadQuality = "FREE_EMAIL_ONLY";
            } else if (samRegistered && setAsides.length >= 1) {
                leadQuality = "HOT_BIZ";
            } else if (samRegistered) {
                leadQuality = "WARM_BIZ";
            } else {
                leadQuality = "COLD_BIZ";
            }

            // Build the Note HTML that will appear in the HubSpot contact
            // timeline — the rep should be able to see the full intake
            // context without leaving CRM.
            const noteLines: string[] = [
                `<p><strong>Lead Magnet Submission — ${companyName}</strong></p>`,
                `<p><strong>Source:</strong> ${hubspotSource}</p>`,
                `<p><strong>SAM Registered:</strong> ${samRegistered ? "Yes" : "No"}</p>`,
            ];
            if (setAsides.length > 0) {
                noteLines.push(`<p><strong>Set-Asides / Certs:</strong> ${setAsides.join(", ")}</p>`);
            }
            if (normalizedWebsite) {
                noteLines.push(`<p><strong>Website:</strong> <a href="${normalizedWebsite}">${normalizedWebsite}</a></p>`);
            }
            if (utmSource || utmMedium || utmCampaign) {
                noteLines.push(
                    `<p><strong>UTM:</strong> source=${utmSource || "—"} · medium=${utmMedium || "—"} · campaign=${utmCampaign || "—"}</p>`,
                );
            }
            if (qcUrl) {
                noteLines.push(
                    `<p><strong>Quick Checker:</strong> <a href="${qcUrl}">${qcUrl}</a></p>`,
                );
            }
            noteLines.push(
                `<hr><p><em>Submitted via ${magnetKey} · ${new Date().toUTCString()}</em></p>`,
            );

            await fetch(`${DASHBOARD_URL}/api/hubspot/sync-lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    first_name: firstName,
                    last_name: lastName,
                    company_name: companyName,
                    website: normalizedWebsite,
                    source: hubspotSource,
                    sam_registered: samRegistered,
                    set_asides: setAsides,
                    lead_quality: leadQuality,
                    quick_checker_url: qcUrl,
                    note_html: noteLines.join(""),
                    utm_source: utmSource,
                    utm_medium: utmMedium,
                    utm_campaign: utmCampaign,
                }),
                signal: AbortSignal.timeout(15_000),
            });

            await supabasePatch(
                "marketing_leads",
                { email: `eq.${email}`, magnet_key: `eq.${magnetKey}` },
                { hubspot_synced_at: new Date().toISOString() },
            );
        } catch (err) {
            console.warn(
                "[lead-magnet/submit] HubSpot push exception (non-fatal):",
                (err as Error).message,
            );
        }
    })();

    // ── 5. Enroll in drip sequence (non-blocking) ──────────────────────────
    // qc_nurture when we have an analysis_id (Quick Checker welcome on day 0),
    // otherwise fb_nurture (standard 90-day sequence).
    void (async () => {
        const contactName = [firstName, lastName].filter(Boolean).join(" ").trim() || undefined;
        const sequenceKey = analysisId ? "qc_nurture" : "fb_nurture";
        try {
            await fetch(`${DASHBOARD_URL}/api/lead-magnet/enqueue-drip`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sequence_key: sequenceKey,
                    email,
                    contact_name: contactName || null,
                }),
                signal: AbortSignal.timeout(8_000),
            });
        } catch (err) {
            console.warn(
                `[lead-magnet/submit] drip enqueue (${sequenceKey}) exception (non-fatal):`,
                (err as Error).message,
            );
        }
    })();

    // ── 6. Enqueue AI Lead Brief (non-blocking) ─────────────────────────────
    // Andre gets a SAM-resolved + opportunity-matched + LLM-scored brief
    // with a phone-call script within ~2 minutes. Same worker-queue pipeline
    // used by /api/leads.
    void (async () => {
        try {
            const leadId = await getLeadId(email, magnetKey);
            if (leadId) {
                await fetch(`${DASHBOARD_URL}/api/admin/lead-brief/enqueue`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ lead_id: leadId }),
                    signal: AbortSignal.timeout(8_000),
                });
            }
        } catch (err) {
            console.warn(
                "[lead-magnet/submit] lead-brief enqueue exception (non-fatal):",
                (err as Error).message,
            );
        }
    })();

    // ── 7. Return success ──────────────────────────────────────────────────
    const downloadToken = issueDownloadToken(email);

    return NextResponse.json(
        {
            ok: true,
            analysis_id: analysisId,
            download_token: downloadToken,
            duplicate: isDuplicate,
        },
        { status: 200, headers },
    );
}
