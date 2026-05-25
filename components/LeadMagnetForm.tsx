"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Download, CheckCircle2, Loader2 } from "lucide-react";
import { track } from "@/lib/analytics";

interface LeadMagnetFormProps {
  /** Short key the API stores so we know which magnet was downloaded. */
  magnetKey: string;
  /** Headline shown above the form. */
  title: string;
  /** Sub-headline / 1-sentence value prop. */
  description: string;
  /** Final download URL (PDF / Google Drive / etc.). Only used when not redirecting. */
  downloadUrl: string;
  /** Optional: button copy. */
  ctaLabel?: string;
  /** Optional: success state copy. */
  successLabel?: string;
  /**
   * Optional: extra fields. Standard download form collects first name, last
   * name, work email, company name (all required) and phone (optional). When
   * `collectCompany` is true the company input is rendered as required — the
   * Apollo + HubSpot enrichment pipeline downstream needs a domain or org
   * name to match against. See `dashboard/src/lib/lead-magnets.ts` for the
   * full per-download form spec.
   */
  collectCompany?: boolean;
  /**
   * Optional: when set, the form redirects to this URL on success instead of
   * showing the inline download CTA. Used by /downloads/* pages so the user
   * lands on a clean "check your inbox" thank-you page and trusts that the
   * email is the authoritative delivery channel.
   */
  redirectTo?: string;
}

/**
 * Drop-in email-gate for resource downloads. POSTs to `/api/leads` (the
 * dashboard) which (1) inserts the row, (2) Apollo-enriches the contact when
 * a domain can be extracted from the email, (3) syncs to HubSpot CRM as a
 * Lead with full firmographics, and (4) sends the PDF link via Resend last
 * so the HubSpot contact has phone + title + linkedin before delivery.
 */
export default function LeadMagnetForm({
  magnetKey,
  title,
  description,
  downloadUrl,
  ctaLabel = "Get the Guide — Free",
  successLabel = "Check your inbox — and download below.",
  collectCompany = false,
  redirectTo,
}: LeadMagnetFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setError(null);
    try {
      const res = await fetch("https://app.capturepilot.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          first_name: firstName,
          last_name: lastName,
          company,
          phone,
          magnet: magnetKey,
          source: window.location.pathname,
        }),
      });
      if (!res.ok && res.status !== 409) {
        throw new Error(`HTTP ${res.status}`);
      }
      track("lead_magnet", {
        magnet: magnetKey,
        has_company: Boolean(company),
        has_phone: Boolean(phone),
      });
      if (redirectTo) {
        // Build URL preserving any UTM params on the current page so the
        // thank-you page can attribute the conversion in GA / Meta Pixel.
        const url = new URL(redirectTo, window.location.origin);
        url.searchParams.set("magnet", magnetKey);
        const search = new URLSearchParams(window.location.search);
        for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
          const v = search.get(k);
          if (v) url.searchParams.set(k, v);
        }
        window.location.href = url.toString();
        return;
      }
      setState("success");
    } catch (err) {
      setError((err as Error).message);
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <p className="text-lg font-black text-emerald-900 mb-2">{successLabel}</p>
        <Link
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition-colors"
          onClick={() => track("lead_magnet", { magnet: magnetKey, action: "download_click" })}
        >
          <Download className="w-4 h-4" /> Download Now
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-emerald-100 rounded-lg">
          <Mail className="w-5 h-5 text-emerald-700" />
        </div>
        <div>
          <h3 className="font-black text-stone-900 text-lg leading-tight">{title}</h3>
          <p className="text-sm text-stone-600 mt-1">{description}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            autoComplete="given-name"
            className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            autoComplete="family-name"
            className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
        </div>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          autoComplete="email"
          className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
        />
        {collectCompany && (
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            autoComplete="organization"
            className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
        )}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone (optional)"
          autoComplete="tel"
          className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-60 transition-colors inline-flex items-center justify-center gap-2"
        >
          {state === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
          {ctaLabel}
        </button>
        {error && <p className="text-xs text-rose-600">Could not submit. Try again or email us. ({error})</p>}
        <p className="text-xs text-stone-500 text-center">No spam. Unsubscribe anytime. We never sell your data.</p>
      </div>
    </form>
  );
}
