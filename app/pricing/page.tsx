"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Check,
  Minus,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  DollarSign,
  Handshake,
  Sparkles,
  Shield,
  Users,
  Zap,
  Target,
  FileText,
  BarChart3,
  Bell,
  Building2,
  Search,
  Calendar,
  Phone,
  Award,
  TrendingUp,
  Mail,
  Briefcase,
  Clock,
  Star as StarIcon,
} from "lucide-react";


/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;
const CALENDLY_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";

/* ------------------------------------------------------------------ */
/*  Pricing data                                                       */
/* ------------------------------------------------------------------ */

const FREE_FEATURES = [
  "Quick Company Check (unlimited)",
  "50 federal opportunity matches/day",
  "NAICS code identification",
  "Basic company analysis",
];

// Light = federal-only, no AI, but with full competitor + partner intel.
const LIGHT_FEATURES = [
  "200 federal opportunity matches/day",
  "Competitor profiles (80K+ contractors)",
  "Teaming partner search + save",
  "Live SAM.gov passthrough search",
  "5 saved searches with alerts",
  "Daily federal opportunity emails",
];

const PRO_FEATURES = [
  "Unlimited federal opportunity matches",
  "State + county + city opportunities (48 states)",
  "AI Proposal Draft Generator",
  "Per-opportunity AI summaries",
  "AI Capability Statement editor",
  "Competitor + partner profiles",
  "Export CSV / XLSX + PDF",
  "API access + webhooks",
  "5 team seats",
  "Priority support",
];

const CONSULTING_FEATURES = [
  "Everything in Pro",
  "Dedicated capture team assigned to your account",
  "We handle ALL communications with contracting officers (email & fax)",
  "Full proposal writing and review (not just outlines)",
  "SAM.gov registration assistance",
  "Competitor analysis and intelligence reports",
  "Monthly strategy calls and pipeline reviews",
  "We are your B2G representative \u2014 we do the work, you do the job when you win",
];

/* ------------------------------------------------------------------ */
/*  Feature comparison matrix                                          */
/* ------------------------------------------------------------------ */

interface ComparisonRow {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
  consulting: boolean | string;
}

const COMPARISON: ComparisonRow[] = [
  { feature: "Quick Company Check", free: "Unlimited", pro: "Unlimited", consulting: "Unlimited" },
  { feature: "NAICS code identification", free: true, pro: true, consulting: true },
  { feature: "Basic company analysis", free: true, pro: true, consulting: true },
  { feature: "Matched opportunities", free: "5 preview", pro: "Unlimited", consulting: "Unlimited" },
  { feature: "Opportunity scoring & ranking", free: false, pro: true, consulting: true },
  { feature: "AI Proposal Draft Generator", free: false, pro: true, consulting: true },
  { feature: "Market Intelligence dashboard", free: false, pro: true, consulting: true },
  { feature: "Capability Statement Builder", free: false, pro: true, consulting: true },
  { feature: "Deal Pipeline management", free: false, pro: true, consulting: true },
  { feature: "Partner & teaming search", free: false, pro: true, consulting: true },
  { feature: "Email alerts", free: false, pro: true, consulting: true },
  { feature: "Eligibility checks & set-aside analysis", free: false, pro: true, consulting: true },
  { feature: "IDIQ & contract vehicle tracking", free: false, pro: true, consulting: true },
  { feature: "Award history & incumbents", free: false, pro: true, consulting: true },
  { feature: "Contact & POC database", free: false, pro: true, consulting: true },
  { feature: "Export & reporting", free: false, pro: true, consulting: true },
  { feature: "Dedicated capture team", free: false, pro: false, consulting: true },
  { feature: "Contracting officer communications", free: false, pro: false, consulting: true },
  { feature: "Full proposal writing & review", free: false, pro: false, consulting: true },
  { feature: "SAM.gov registration assistance", free: false, pro: false, consulting: true },
  { feature: "Competitor intelligence reports", free: false, pro: false, consulting: true },
  { feature: "Monthly strategy calls", free: false, pro: false, consulting: true },
  { feature: "Support", free: "Community", pro: "Priority", consulting: "Dedicated team" },
];

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly plans cancel anytime from your dashboard \u2014 no contracts, no cancellation fees. You keep access through the end of your billing period.",
  },
  {
    q: "What\u2019s in the free trial?",
    a: "Full Pro features for 14 days. Card required to start (auto-converts to $89/mo Pro on day 15). Cancel anytime before then with zero charge.",
  },
  {
    q: "Can I switch from Pro to Consulting?",
    a: "Yes. Book a qualification call and we\u2019ll assess fit. If we take you on as a consulting client, your Pro subscription transitions seamlessly into the consulting engagement.",
  },
  {
    q: "Do you work with any business?",
    a: "We take consulting clients selectively \u2014 only businesses we believe we can win contracts for. This is why we require a qualification call. For self-service, anyone can use Free or Pro.",
  },
  {
    q: "What if I\u2019m new to government contracting?",
    a: "Perfect \u2014 that\u2019s who we built this for. Our Quick Company Check tells you exactly where you stand, and both Pro and Consulting are designed to guide you from zero to your first federal contract.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Accordion                                                      */
/* ------------------------------------------------------------------ */

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-stone-800 pr-4">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Comparison cell                                                    */
/* ------------------------------------------------------------------ */

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="w-4 h-4 text-emerald-500 mx-auto" />;
  if (value === false)
    return <Minus className="w-4 h-4 text-stone-300 mx-auto" />;
  return (
    <span className="text-sm font-medium text-stone-700">{value}</span>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const w = window as unknown as { fbq?: (...args: unknown[]) => void };
    w.fbq?.("track", "ViewContent", {
      content_name: "Pricing",
      content_category: "pricing",
      content_ids: ["pricing_page"],
    });
  }, []);

  // Prices reflect migration 111 (Pro = $89, Light = $39).
  // Sync source of truth: dashboard/supabase/migrations/111_pro_max_features_agency_tier.sql
  const lightMonthly = 39;
  const lightYearly = 31; // ~$374/yr → $31/mo equivalent
  const lightAnnualTotal = 374;

  const proMonthly = 89;
  const proYearly = 71; // $854/yr → $71/mo equivalent
  const proAnnualTotal = 854;
  const proSavings = 214;

  // Consulting tier stays as a done-for-you option (separate from the SaaS
  // Agency tier in-app). Pricing unchanged.
  const consultMonthly = 2500;
  const consultYearly = 2000;
  const consultAnnualTotal = 24000;
  const consultSavings = 6000;

  const lightPrice = yearly ? lightYearly : lightMonthly;
  const proPrice = yearly ? proYearly : proMonthly;
  const proAnnualTotalDisplayed = proAnnualTotal;
  const consultPrice = yearly ? consultYearly : consultMonthly;

  // FAQ JSON-LD for rich snippets in Google search results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteNav />
      <main className="pt-16">
        {/* ── Hero ── */}
        <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-stone-50 via-white to-white relative overflow-hidden">
          {/* shimmer bg */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/60 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Trial Banner */}
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-6 mb-10 text-left sm:text-center">
              <p className="text-lg font-black text-emerald-800 mb-1">
                14-DAY FREE TRIAL — Full Pro Access
              </p>
              <p className="text-sm text-emerald-700 leading-relaxed">
                Try matching, AI proposals, market intelligence, exports, and the capability statement builder. Card required to start (auto-converts to $89/mo Pro on day 15 unless you cancel).
                <br className="hidden sm:block" />
                Cancel anytime in your dashboard with zero charge during the trial.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
              Simple Pricing.{" "}
              <span className="text-emerald-600">No Surprises.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Start free. Upgrade when you&apos;re ready. Every plan includes
              access to real federal opportunities from SAM.gov, updated daily.
            </p>

            {/* ── Monthly / Yearly Toggle ── */}
            <div className="inline-flex items-center gap-4 bg-stone-100 rounded-full p-1.5">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  !yearly
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-500 hover:text-stone-700"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all inline-flex items-center gap-2 ${
                  yearly
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-500 hover:text-stone-700"
                }`}
              >
                Yearly
                <span className="text-emerald-600 text-xs font-bold">Save 20%</span>
              </button>
            </div>

          </div>
        </section>

        {/* ── Pricing Cards ── */}
        <section className="py-4 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* ─── Free ─── */}
              <div className="relative rounded-2xl border-2 border-stone-200 hover:border-stone-300 p-8 flex flex-col transition-all">
                <div className="mb-6">
                  <h3 className="text-lg font-black text-stone-900 mb-2">Free</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-black text-stone-900">$0</span>
                    <span className="text-stone-500 text-sm">forever</span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Check your eligibility and explore government contracting. No credit card required.
                  </p>
                </div>
                <div className="flex-1 mb-8">
                  <div className="space-y-3">
                    {FREE_FEATURES.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-stone-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={SIGNUP_URL}
                  className="w-full text-center py-3.5 rounded-full font-bold transition-colors inline-flex items-center justify-center gap-2 bg-stone-100 text-stone-800 hover:bg-stone-200"
                >
                  Start Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* ─── Light ─── */}
              <div className="relative rounded-2xl border-2 border-stone-200 hover:border-stone-300 p-8 flex flex-col transition-all">
                <div className="mb-6">
                  <h3 className="text-lg font-black text-stone-900 mb-2">Light</h3>
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className="text-4xl font-black text-stone-900">${lightPrice}</span>
                    <span className="text-stone-500 text-sm">/mo</span>
                  </div>
                  {yearly ? (
                    <p className="text-xs text-emerald-600 font-medium mb-2">
                      Billed ${lightAnnualTotal}/yr &mdash; save ${(lightMonthly * 12) - lightAnnualTotal}
                    </p>
                  ) : (
                    <p className="text-xs text-stone-400 mb-2">
                      or ${lightYearly}/mo billed yearly (save ${(lightMonthly * 12) - lightAnnualTotal}/yr)
                    </p>
                  )}
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Federal-only opportunities + competitor + partner intelligence. No AI, no state/local. Perfect for solo contractors at the start.
                  </p>
                </div>
                <div className="flex-1 mb-8">
                  <div className="space-y-3">
                    {LIGHT_FEATURES.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-stone-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={`${SIGNUP_URL}?plan=light`}
                  className="w-full text-center py-3.5 rounded-full font-bold transition-colors inline-flex items-center justify-center gap-2 bg-stone-900 text-white hover:bg-stone-800"
                >
                  Start 14-Day Light Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-stone-400 text-center mt-2">
                  Card required. Auto-converts to ${lightMonthly}/mo on day 15.
                </p>
              </div>

              {/* ─── Pro ─── */}
              <div className="relative rounded-2xl border-2 border-emerald-500 shadow-xl shadow-emerald-100 scale-[1.02] p-8 flex flex-col transition-all">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular — 14-Day Free Trial
                  </span>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-black text-stone-900">Pro</h3>
                  </div>
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span
                      className="text-4xl font-black text-stone-900 transition-all duration-300"
                      key={proPrice}
                    >
                      ${proPrice}
                    </span>
                    <span className="text-stone-500 text-sm">/mo</span>
                  </div>
                  {yearly && (
                    <p className="text-xs text-emerald-600 font-medium mb-2">
                      Billed ${proAnnualTotalDisplayed.toLocaleString()}/yr &mdash; save ${proSavings}
                    </p>
                  )}
                  {!yearly && (
                    <p className="text-xs text-stone-400 mb-2">
                      or ${proYearly}/mo billed yearly (save ${proSavings}/yr)
                    </p>
                  )}
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Everything you need to find, evaluate, and win government contracts. The complete toolkit.
                  </p>
                </div>
                <div className="flex-1 mb-8">
                  <div className="space-y-3">
                    {PRO_FEATURES.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-stone-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={`${SIGNUP_URL}?plan=pro`}
                  className="w-full text-center py-3.5 rounded-full font-bold transition-colors inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-stone-800"
                >
                  Start 14-Day Pro Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-[11px] text-stone-400 text-center mt-2">
                  Card required. Auto-converts to ${proMonthly}/mo on day 15 unless you cancel.
                </p>
              </div>

              {/* ─── Consulting (HIDDEN — moved to footer CTA below grid)
                   User direction (June 4 2026): Agency/Consulting is enterprise-style
                   pricing that should be quoted via a sales call, not advertised on the
                   public grid. Kept the source below in case we want to re-show it as
                   an explicit "Done-for-you" option later, but flag-off the visible card. */}
              {false && (
              <div className="hidden">
                {/* ─── Consulting ─── */}
              <div className="relative rounded-2xl border-2 border-stone-200 hover:border-stone-300 p-8 flex flex-col transition-all">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-stone-800 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Done-For-You
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-black text-stone-900 mb-2">Consulting</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-sm font-bold text-stone-500">From</span>
                    <span
                      className="text-4xl font-black text-stone-900 transition-all duration-300"
                      key={consultPrice}
                    >
                      ${consultPrice.toLocaleString()}
                    </span>
                    <span className="text-stone-500 text-sm">/mo</span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium mb-1">
                    Custom retainer — quoted on the qualification call
                  </p>
                  {yearly && (
                    <p className="text-xs text-emerald-600 font-medium mb-2">
                      Billed from ${consultAnnualTotal.toLocaleString()}/yr &mdash; save ${consultSavings.toLocaleString()}
                    </p>
                  )}
                  {!yearly && (
                    <p className="text-xs text-stone-400 mb-2">
                      or from ${consultYearly.toLocaleString()}/mo billed yearly (save ${consultSavings.toLocaleString()}/yr)
                    </p>
                  )}
                  <p className="text-xs text-stone-400 italic mb-1">
                    Base retainer scales with company size and capture effort. Exact pricing determined during your qualification call.
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    We only take clients we can actually win deals for. Book a 15-30 minute qualification call to see if we&apos;re a fit.
                  </p>
                </div>
                <div className="flex-1 mb-8">
                  <div className="space-y-3">
                    {CONSULTING_FEATURES.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-stone-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href={CALENDLY_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full text-center py-3.5 rounded-full font-bold transition-colors inline-flex items-center justify-center gap-2 bg-stone-100 text-stone-800 hover:bg-stone-200"
                >
                  Book Qualification Call
                  <Phone className="w-4 h-4" />
                </Link>
              </div>
              </div>
              )}
            </div>

            {/* ── Agency / Consulting footer CTA ── */}
            <div className="mt-12 rounded-2xl border border-stone-200 bg-gradient-to-r from-stone-900 to-stone-800 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 max-w-5xl mx-auto">
              <div className="flex items-start gap-4 min-w-0 flex-1">
                <div className="bg-emerald-500/20 p-3 rounded-xl flex-shrink-0">
                  <Handshake className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-black text-lg leading-tight mb-1">Running federal capture for multiple clients?</p>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Our <strong>Agencies &amp; Consultants</strong> tier gives B2G shops multi-client workspaces, white-glove client portals, white-labeling, bulk proposal generation, and GPT-4o on every AI feature. Custom pricing per client volume.
                  </p>
                </div>
              </div>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-colors flex-shrink-0 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" /> Book a call
              </Link>
            </div>
          </div>
        </section>

        {/* ── Consulting Explainer ── */}
        <section className="py-16 px-6 bg-stone-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-100/80 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-200 text-stone-700 text-sm font-medium mb-4">
                <Handshake className="w-4 h-4" />
                Done-For-You Service
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                Other Agencies Recommend.{" "}
                <span className="text-emerald-600">We Execute.</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                We load the gun, you shoot. Our consulting tier is a full-service
                capture management engagement. We do the work &mdash; you do the
                job when you win.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-stone-900">What We Do</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Handle all contracting officer communications
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Write, review, and submit proposals
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Run competitor analysis and intelligence
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Manage your pipeline and strategy calls monthly
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Assist with SAM.gov registration if needed
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-stone-100 rounded-lg">
                    <Shield className="w-5 h-5 text-stone-600" />
                  </div>
                  <h3 className="font-bold text-stone-900">Why We&apos;re Selective</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  This is NOT self-service. We require a qualification call because
                  we only take clients we believe we can win contracts for. Pricing
                  + scope are tailored to your capture volume on that call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature Comparison Matrix ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
                Detailed Feature Comparison
              </h2>
              <p className="text-stone-600">
                See exactly what&apos;s included in every plan.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <th className="text-left p-4 font-bold text-stone-800 min-w-[260px]">
                        Feature
                      </th>
                      <th className="text-center p-4 font-bold text-stone-800 w-28">
                        Free
                      </th>
                      <th className="text-center p-4 font-bold text-emerald-700 w-28 bg-emerald-50">
                        Pro
                      </th>
                      <th className="text-center p-4 font-bold text-stone-800 w-28">
                        Consulting
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 ${
                          i % 2 === 0 ? "" : "bg-stone-50/50"
                        }`}
                      >
                        <td className="p-4 text-sm text-stone-700">
                          {row.feature}
                        </td>
                        <td className="p-4 text-center">
                          <CellValue value={row.free} />
                        </td>
                        <td className="p-4 text-center bg-emerald-50/30">
                          <CellValue value={row.pro} />
                        </td>
                        <td className="p-4 text-center">
                          <CellValue value={row.consulting} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>


        {/* ── FAQ ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <HelpCircle className="w-5 h-5 text-stone-400" />
              <h2 className="text-2xl font-black text-stone-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-50/30 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Ready to Win Government Contracts?
            </h2>
            <p className="text-lg text-stone-600 mb-10 max-w-xl mx-auto">
              Two paths to federal revenue. Pick the one that fits your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2 text-lg"
              >
                Start Free 30-Day Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={CALENDLY_URL}
                target="_blank" rel="noopener noreferrer"
                className="bg-white text-stone-800 px-8 py-4 rounded-full font-bold border-2 border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2 text-lg"
              >
                Book Qualification Call
                <Phone className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center text-sm text-stone-500">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                Free 30-day trial — all features unlocked
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                No credit card required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500" />
                Cancel anytime
              </span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
