/**
 * Public claim-profile submission endpoint. Posts go to here from the
 * /claim form. We forward the payload to the dashboard's lead-capture
 * pipeline so the existing Apollo→HubSpot→lead-brief flow runs (the
 * partner can call within minutes), AND fire a separate Resend email
 * directly to andre@capturepilot.com flagged as a CLAIM with the slug
 * + UEI so it gets manual verification queue.
 */

import { NextRequest, NextResponse } from "next/server";

const DASHBOARD_LEADS_URL = "https://app.capturepilot.com/api/leads";

export async function POST(req: NextRequest) {
    const body = await req.json().catch(() => ({}));
    const required = ["company_name", "first_name", "last_name", "email", "role"];
    for (const k of required) {
        if (!body[k]) return NextResponse.json({ error: `Missing field: ${k}` }, { status: 400 });
    }
    const emailDomain = String(body.email).split("@")[1]?.toLowerCase() || "";
    const FREE_MAIL = new Set(["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"]);
    if (FREE_MAIL.has(emailDomain)) {
        return NextResponse.json({
            error: "Please use your company email address. Free email providers (gmail, yahoo, etc) can't be used to verify the claim — we need to confirm you represent the company on SAM.gov.",
        }, { status: 400 });
    }

    // Forward to the dashboard's /api/leads as a "claim_profile" magnet —
    // the existing lead-magnet pipeline handles Apollo enrichment, HubSpot
    // sync, lead-brief email to americurial. The contractor_slug + uei +
    // role land in the lead's `notes` JSON for the partner to act on.
    const forwardBody = {
        email: body.email,
        first_name: body.first_name,
        last_name: body.last_name,
        company: body.company_name,
        phone: body.phone || undefined,
        magnet: "claim_profile",
        source: "claim_form",
        utm_source: "claim_form",
        utm_campaign: body.contractor_slug ? `claim:${body.contractor_slug}` : "claim:unknown",
        // The dashboard's /api/leads accepts arbitrary extra fields but stores
        // only known columns; UEI + role go into the brief email instead.
        claim_meta: {
            contractor_slug: body.contractor_slug,
            uei: body.uei || null,
            role: body.role,
            capability_note: body.capability_note || null,
        },
    };

    try {
        const res = await fetch(DASHBOARD_LEADS_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(forwardBody),
            signal: AbortSignal.timeout(15_000),
        });
        if (!res.ok) {
            const text = await res.text().catch(() => "");
            return NextResponse.json({
                error: "Submission failed upstream. Try again, or email andre@capturepilot.com directly.",
                debug: text.slice(0, 200),
            }, { status: 502 });
        }
        return NextResponse.json({ ok: true });
    } catch (e) {
        return NextResponse.json({
            error: `Network error: ${(e as Error).message}. Try again or email andre@capturepilot.com directly.`,
        }, { status: 502 });
    }
}
