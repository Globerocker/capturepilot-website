"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Check,
  X,
  Minus,
  Sparkles,
  Shield,
  Users,
  Zap,
  Target,
  FileText,
  BarChart3,
  Bell,
  Headphones,
  Building2,
  Award,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Star,
  Search,
  Clock,
  DollarSign,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Calendar,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

/* ------------------------------------------------------------------ */
/*  Pricing tiers                                                      */
/* ------------------------------------------------------------------ */

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description:
      "Check your eligibility and explore government contracting. No credit card required.",
    features: [
      "Quick Checker eligibility scan",
      "5 matched opportunities",
      "NAICS code identification",
      "SAM.gov registration check",
      "Set-aside eligibility analysis",
      "Basic opportunity details",
    ],
    cta: "Start Free",
    ctaHref: SIGNUP_URL,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    badge: "30-Day Free Trial",
    description:
      "Everything you need to find, evaluate, and win government contracts. The complete toolkit.",
    features: [
      "Unlimited matched opportunities",
      "AI Proposal Writer",
      "Market Intelligence dashboard",
      "Capability Statement builder",
      "Pipeline management & tracking",
      "Partner & teaming search",
      "Real-time opportunity alerts",
      "Competitor analysis",
      "Award history & incumbents",
      "Contact & POC database",
      "Priority email support",
      "Export & reporting tools",
    ],
    cta: "Start 30-Day Trial",
    ctaHref: SIGNUP_URL,
    highlighted: true,
  },
  {
    name: "Consulting",
    price: "Custom",
    period: "per engagement",
    description:
      "White-glove service for businesses that want expert help winning government contracts.",
    features: [
      "Everything in Pro",
      "Dedicated capture manager",
      "Full proposal writing service",
      "SAM.gov registration assistance",
      "Custom competitor reports",
      "Monthly strategy calls",
      "Bid/no-bid decision support",
      "Subcontracting opportunities",
      "Capability statement design",
      "Past performance development",
      "Pricing strategy guidance",
      "Post-award transition support",
    ],
    cta: "Book a Strategy Call",
    ctaHref: CALENDLY_URL,
    highlighted: false,
  },
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
  {
    feature: "Quick Checker eligibility scan",
    free: true,
    pro: true,
    consulting: true,
  },
  {
    feature: "NAICS code identification",
    free: true,
    pro: true,
    consulting: true,
  },
  {
    feature: "SAM.gov registration check",
    free: true,
    pro: true,
    consulting: true,
  },
  {
    feature: "Set-aside eligibility analysis",
    free: true,
    pro: true,
    consulting: true,
  },
  {
    feature: "Matched opportunities",
    free: "5",
    pro: "Unlimited",
    consulting: "Unlimited",
  },
  {
    feature: "Opportunity scoring & ranking",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "AI Proposal Writer",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Compliance matrix generation",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Market Intelligence dashboard",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Capability Statement builder",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Pipeline management",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Partner & teaming search",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Real-time opportunity alerts",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Competitor analysis",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Award history & incumbents",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Contact & POC database",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Export & reporting",
    free: false,
    pro: true,
    consulting: true,
  },
  {
    feature: "Dedicated capture manager",
    free: false,
    pro: false,
    consulting: true,
  },
  {
    feature: "Full proposal writing service",
    free: false,
    pro: false,
    consulting: true,
  },
  {
    feature: "SAM.gov registration assistance",
    free: false,
    pro: false,
    consulting: true,
  },
  {
    feature: "Custom competitor reports",
    free: false,
    pro: false,
    consulting: true,
  },
  {
    feature: "Monthly strategy calls",
    free: false,
    pro: false,
    consulting: true,
  },
  {
    feature: "Bid/no-bid decision support",
    free: false,
    pro: false,
    consulting: true,
  },
  {
    feature: "Pricing strategy guidance",
    free: false,
    pro: false,
    consulting: true,
  },
  {
    feature: "Support",
    free: "Community",
    pro: "Priority email",
    consulting: "Dedicated manager",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts, no commitments, and no cancellation fees. Cancel your Pro subscription anytime from your dashboard settings. You'll keep access through the end of your billing period.",
  },
  {
    q: "How does the 30-day free trial work?",
    a: "Sign up for Pro and get full access to every feature for 30 days. No credit card required to start. If you love it, add payment to continue. If not, you'll automatically move to the Free tier.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Yes. Annual billing is $1,990/year (save $398 vs monthly). Contact us or switch to annual billing from your dashboard settings at any time.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex, Discover) and ACH bank transfers for annual plans. Invoicing is available for Consulting engagements.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use Supabase (enterprise-grade PostgreSQL) with row-level security, encrypted data at rest and in transit, and SOC 2-compliant infrastructure. Your business data is never shared or sold.",
  },
  {
    q: "Can I upgrade or downgrade at any time?",
    a: "Yes. Upgrade from Free to Pro instantly and get immediate access to all features. Downgrade at any time — you'll keep Pro access through the end of your current billing period.",
  },
  {
    q: "Do you offer discounts for veteran-owned businesses?",
    a: "Yes. Verified veteran-owned and service-disabled veteran-owned small businesses get 20% off Pro. Contact us with your SDVOSB or VOSB certification and we'll apply the discount.",
  },
  {
    q: "I manage multiple clients. Is there a team or agency plan?",
    a: "Yes. Our consulting portal is built for agencies managing multiple government contractors. Visit our agencies page for details on multi-client management, white-label options, and volume pricing.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Component                                                      */
/* ------------------------------------------------------------------ */

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
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
  const [showComparison, setShowComparison] = useState(false);

  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-stone-50 via-white to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
              Simple Pricing.{" "}
              <span className="text-emerald-600">No Surprises.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Start free. Upgrade when you&apos;re ready. Every plan includes
              access to real federal opportunities from SAM.gov, updated daily.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-4 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {TIERS.map((tier, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl border-2 p-8 flex flex-col transition-all ${
                    tier.highlighted
                      ? "border-emerald-500 shadow-xl shadow-emerald-100 scale-[1.02]"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-black text-stone-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl font-black text-stone-900">
                        {tier.price}
                      </span>
                      <span className="text-stone-500 text-sm">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="flex-1 mb-8">
                    <div className="space-y-3">
                      {tier.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-stone-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={tier.ctaHref}
                    target={tier.ctaHref.startsWith("http") && !tier.ctaHref.includes("app.capturepilot") ? "_blank" : undefined}
                    className={`w-full text-center py-3.5 rounded-full font-bold transition-colors inline-flex items-center justify-center gap-2 ${
                      tier.highlighted
                        ? "bg-black text-white hover:bg-stone-800"
                        : "bg-stone-100 text-stone-800 hover:bg-stone-200"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Annual savings callout */}
            <div className="mt-8 text-center">
              <p className="text-sm text-stone-500">
                Save $398/year with annual billing.{" "}
                <span className="font-bold text-stone-700">
                  $1,990/year
                </span>{" "}
                instead of $2,388.
              </p>
            </div>
          </div>
        </section>

        {/* Feature comparison toggle */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <button
              className="w-full flex items-center justify-center gap-2 py-4 text-stone-700 font-bold hover:text-black transition-colors"
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison
                ? "Hide Feature Comparison"
                : "Show Full Feature Comparison"}
              {showComparison ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {showComparison && (
              <div className="mt-6 bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="text-left p-4 font-bold text-stone-800 min-w-[240px]">
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
            )}
          </div>
        </section>

        {/* For agencies callout */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl bg-purple-50 border border-purple-200">
              <div className="p-4 bg-purple-100 rounded-xl flex-shrink-0">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-black text-stone-900 mb-1">
                  Managing Multiple Clients?
                </h3>
                <p className="text-sm text-stone-600">
                  Our consulting portal lets agencies manage multiple government
                  contractors from a single dashboard. Volume pricing, white-label
                  reports, and dedicated support.
                </p>
              </div>
              <Link
                href="/for/agencies"
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors inline-flex items-center gap-2 flex-shrink-0 whitespace-nowrap"
              >
                For Agencies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <HelpCircle className="w-5 h-5 text-stone-400" />
              <h2 className="text-2xl font-black text-stone-900">
                Pricing FAQ
              </h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-stone-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Start Finding Contracts Today
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              Join thousands of small businesses using CapturePilot to find and
              win government contracts. Start free, upgrade when you&apos;re ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="bg-white text-stone-800 px-8 py-3.5 rounded-full font-bold border border-stone-200 hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book a Demo
                <Calendar className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
