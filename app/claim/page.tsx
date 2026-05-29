"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Building2, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/**
 * Public claim-profile form. Linked from every contractor card on
 * www.capturepilot.com (the bottom "Claim this profile" CTA + the
 * header "Claim profile" pill). Captures: company, UEI, contact name,
 * work email, phone, role at company, and optional brief. POSTs to
 * /api/claim which:
 *   - Validates UEI matches the slug's contractor_profile_pages row
 *   - Inserts a claim_request (creates table if needed) with status='pending'
 *   - Emails andre@capturepilot.com so a human can verify + reach back
 *   - Inserts marketing_leads row (so the existing lead-brief pipeline
 *     fires + the lead lands in HubSpot)
 *
 * On submit, the user sees a confirmation screen. They get a follow-up
 * email within 24h with portal access once we verify they actually
 * represent the company.
 */
export default function ClaimPage() {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <ClaimPageInner />
    </Suspense>
  );
}

function ClaimPageInner() {
  const params = useSearchParams();
  const initialCompany = params?.get("company") || "";
  const slug = params?.get("slug") || "";

  const [form, setForm] = useState({
    company_name: initialCompany,
    uei: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: "",
    capability_note: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // If a slug was passed, try to pre-fill the company name even when the
  // URL didn't include company=. Faster than asking the user to retype.
  useEffect(() => {
    if (slug && !initialCompany) {
      fetch(`https://app.capturepilot.com/api/public/contractor/${encodeURIComponent(slug)}`)
        .then(r => r.ok ? r.json() : null)
        .then(j => {
          if (j?.contractor?.business_name) {
            setForm(f => ({ ...f, company_name: j.contractor.business_name as string }));
          }
        })
        .catch(() => {/* ignore — user will fill manually */});
    }
  }, [slug, initialCompany]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          contractor_slug: slug || null,
          source: "public_claim_form",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `Submission failed (${res.status})`);
      setSuccess(true);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <>
        <SiteNav />
        <div className="h-[104px]" />
        <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="font-black text-3xl sm:text-4xl text-stone-900">Claim received.</h1>
          <p className="text-stone-600 mt-3 leading-relaxed">
            We&rsquo;ll verify your role at <strong>{form.company_name}</strong> against the SAM.gov registration and
            reach you at <strong>{form.email}</strong> within 24 hours with portal access details. No payment required —
            verified contractors get the profile free.
          </p>
          <Link
            href="/contractors"
            className="mt-8 inline-flex items-center gap-2 text-emerald-700 hover:underline text-sm"
          >
            Back to contractor directory <ArrowRight className="w-4 h-4" />
          </Link>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />
      <main className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
        <Link href={slug ? `/contractors/${slug}` : "/contractors"} className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 mb-6">
          ← Back
        </Link>
        <header className="mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 mb-5">
            <Building2 className="w-7 h-7" />
          </div>
          <h1 className="font-black text-3xl sm:text-4xl text-stone-900 leading-tight">
            Claim your contractor profile.
          </h1>
          <p className="text-stone-600 mt-3 leading-relaxed">
            Free for verified contractors. Add your team, capability statement, capture pipeline, and active
            solicitations once we&rsquo;ve confirmed you represent the company on SAM.gov.
          </p>
        </header>

        <form onSubmit={submit} className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-800 inline-flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
            </div>
          )}

          <div>
            <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">
              Company name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={form.company_name}
              onChange={e => setForm(f => ({ ...f, company_name: e.target.value }))}
              placeholder="Legal business name"
              className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">
              UEI <span className="text-stone-400 normal-case font-normal">(Unique Entity ID — 12 chars on SAM.gov)</span>
            </label>
            <input
              type="text"
              value={form.uei}
              maxLength={12}
              onChange={e => setForm(f => ({ ...f, uei: e.target.value.toUpperCase() }))}
              placeholder="e.g. ABC123DEF456"
              className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm font-mono focus:outline-none focus:border-emerald-500"
            />
            <p className="text-xs text-stone-500 mt-1">We&rsquo;ll use this to verify your claim against SAM.gov.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">First name <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                value={form.first_name}
                onChange={e => setForm(f => ({ ...f, first_name: e.target.value }))}
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">Last name <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                value={form.last_name}
                onChange={e => setForm(f => ({ ...f, last_name: e.target.value }))}
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">
              Work email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="you@company.com"
              className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
            />
            <p className="text-xs text-stone-500 mt-1">Must match the company domain — free email (gmail, yahoo) won&rsquo;t verify.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="(555) 123-4567"
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">Your role <span className="text-red-500">*</span></label>
              <select
                required
                value={form.role}
                onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 bg-white"
              >
                <option value="">Select…</option>
                <option value="owner">Owner / Founder</option>
                <option value="ceo">CEO / President</option>
                <option value="bd">Business Development / Capture</option>
                <option value="contracts">Contracts / Procurement</option>
                <option value="marketing">Marketing / Communications</option>
                <option value="other">Other (specify in note)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5 block">
              Capability brief <span className="text-stone-400 normal-case font-normal">(optional, helps us prioritize verification)</span>
            </label>
            <textarea
              rows={3}
              value={form.capability_note}
              onChange={e => setForm(f => ({ ...f, capability_note: e.target.value }))}
              placeholder="What does your company do? Which NAICS codes? Top customer agencies?"
              className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {submitting ? "Submitting…" : "Submit claim"} {!submitting && <ArrowRight className="w-4 h-4" />}
          </button>

          <p className="text-xs text-stone-500 text-center">
            By submitting, you confirm you have authority to claim this profile. We&rsquo;ll verify
            via SAM.gov before activating access.
          </p>
        </form>
      </main>
      <SiteFooter />
    </>
  );
}
