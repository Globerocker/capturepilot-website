"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  DollarSign,
  Users,
  Brain,
  FileText,
  Shield,
  TrendingUp,
  ChevronRight,
  Minus,
  Building2,
  Rocket,
  Star,
  BadgeCheck,
  Mic,
  BarChart3,
  Layers,
  Bell,
  Search,
  Handshake,
  Target,
  PenTool,
  Lock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

/* ------------------------------------------------------------------ */
/*  Comparison table data                                              */
/* ------------------------------------------------------------------ */

type RowStatus = "yes" | "no" | "partial";

interface ComparisonRow {
  feature: string;
  cpStatus: RowStatus;
  cpLabel: string;
  otherStatus: RowStatus;
  otherLabel: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "AI Proposal Writer", cpStatus: "yes", cpLabel: "Included", otherStatus: "yes", otherLabel: "Core feature" },
  { feature: "Capability Statement Builder (Voice)", cpStatus: "yes", cpLabel: "Voice-powered", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Smart Matching (proprietary multi-factor)", cpStatus: "yes", cpLabel: "Proprietary multi-factor scoring", otherStatus: "yes", otherLabel: "AI-powered discovery" },
  { feature: "Quick Eligibility Checker", cpStatus: "yes", cpLabel: "Instant check", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Market Intelligence", cpStatus: "yes", cpLabel: "Award + USASpending data", otherStatus: "partial", otherLabel: "Basic intel briefs" },
  { feature: "Deal Pipeline (Kanban)", cpStatus: "yes", cpLabel: "Built-in", otherStatus: "yes", otherLabel: "Capture CRM" },
  { feature: "Partner Search", cpStatus: "yes", cpLabel: "1M+ contractors", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Eligibility / Set-Aside Matching", cpStatus: "yes", cpLabel: "Automatic", otherStatus: "partial", otherLabel: "Basic filters" },
  { feature: "IDIQ / Vehicle Tracking", cpStatus: "yes", cpLabel: "Included", otherStatus: "partial", otherLabel: "Limited" },
  { feature: "Daily Email Alerts", cpStatus: "yes", cpLabel: "Smart scored alerts", otherStatus: "yes", otherLabel: "Available" },
  { feature: "Competitor / Incumbent Intel", cpStatus: "yes", cpLabel: "Award + USASpending", otherStatus: "partial", otherLabel: "Basic data" },
  { feature: "Consulting Support Tier", cpStatus: "yes", cpLabel: "Managed services", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Voice-to-Document", cpStatus: "yes", cpLabel: "Record & generate", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Compliance Matrix Generation", cpStatus: "partial", cpLabel: "Coming soon", otherStatus: "yes", otherLabel: "Automatic" },
  { feature: "Free Tier", cpStatus: "yes", cpLabel: "Yes", otherStatus: "no", otherLabel: "No" },
  { feature: "Flat Pricing (no per-seat)", cpStatus: "yes", cpLabel: "$199/mo flat", otherStatus: "no", otherLabel: "$500+/mo per seat" },
];

/* ------------------------------------------------------------------ */
/*  Why Switch cards                                                   */
/* ------------------------------------------------------------------ */

const WHY_SWITCH_CARDS = [
  {
    icon: DollarSign,
    title: "60% Lower Cost",
    description:
      "GovDash charges $500+ per month per seat with enterprise pricing. CapturePilot is $199/month flat with full team access. For a 3-person team, that is $199/month vs $1,500+/month.",
  },
  {
    icon: Layers,
    title: "Beyond Proposals",
    description:
      "GovDash excels at proposal writing and compliance. But CapturePilot gives you the entire pipeline: eligibility checking, smart matching, capability statements, market intelligence, partner search, and deal tracking.",
  },
  {
    icon: BadgeCheck,
    title: "Capability Statement Builder",
    description:
      "CapturePilot is the only platform with a voice-powered capability statement builder. GovDash focuses on proposals but skips the document that gets you in the door.",
  },
  {
    icon: Users,
    title: "Consulting Tier Available",
    description:
      "Not ready to manage capture yourself? CapturePilot offers a managed consulting tier with a dedicated capture team. GovDash is entirely self-service software.",
  },
];

/* ------------------------------------------------------------------ */
/*  Best For data                                                      */
/* ------------------------------------------------------------------ */

const GOVDASH_BEST_FOR = [
  "Mid-to-large firms with $10M+ revenue",
  "Teams with dedicated proposal writers",
  "Companies submitting 20+ proposals per year",
  "Organizations needing FedRAMP compliance",
  "Firms with existing CRM/Salesforce integration",
  "Defense contractors with CMMC requirements",
];

const CP_BEST_FOR = [
  "Small businesses under $10M revenue",
  "Veteran-owned (SDVOSB) companies",
  "Women-owned (WOSB/EDWOSB) firms",
  "New to government contracting",
  "Solo founders and teams of 1-20",
  "8(a), HUBZone, and SDB certified firms",
];

/* ------------------------------------------------------------------ */
/*  Cross-links                                                        */
/* ------------------------------------------------------------------ */

const CROSS_LINKS = [
  { label: "vs GovWin", href: "/vs/govwin" },
  { label: "vs Sweetspot", href: "/vs/sweetspot" },
  { label: "vs GovTribe", href: "/vs/govtribe" },
  { label: "vs EZGovOpps", href: "/vs/ezgovopps" },
  { label: "vs SAM.gov", href: "/vs/sam-gov" },
];

/* ------------------------------------------------------------------ */
/*  Status icon helper                                                 */
/* ------------------------------------------------------------------ */

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === "yes") return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
  if (status === "no") return <XCircle className="w-5 h-5 text-red-400" />;
  if (status === "partial") return <Minus className="w-5 h-5 text-amber-500" />;
  return null;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VsGovDashPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cpYearly = 199 * 12;
  const gdMonthly = 500;
  const gdYearly = gdMonthly * 12;
  const savings = gdYearly - cpYearly;

  return (
    <>
      <style jsx>{`
        .shimmer-bg {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .hover-lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease forwards; }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <SiteNav />

      <main className="pt-16">
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section
          className="relative overflow-hidden py-24 md:py-32"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/90 to-white/95 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              <Zap className="w-3.5 h-3.5" />
              Competitor Comparison
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              CapturePilot vs{" "}
              <span className="gradient-text">GovDash</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              GovDash builds great proposal tools for large teams. CapturePilot
              gives small businesses the full capture pipeline at 60% lower cost.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-stone-800 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#comparison"
                className="inline-flex items-center justify-center gap-2 bg-stone-100 text-stone-700 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-stone-200 transition-colors"
              >
                See Full Comparison
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  COMPARISON TABLE                                            */}
        {/* ============================================================ */}
        <section id="comparison" className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Feature-by-Feature{" "}
                <span className="text-emerald-400">Comparison</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                How CapturePilot compares to GovDash across the 16 features
                that matter most to small businesses.
              </p>
            </div>

            <div className="bg-stone-900/80 backdrop-blur rounded-2xl border border-stone-700 shadow-2xl overflow-hidden animate-fade-in-up">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-stone-700">
                <div className="px-6 py-4 text-sm font-bold text-stone-400 uppercase tracking-wider">
                  Feature
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center border-x border-emerald-500/30 bg-emerald-500/5 shadow-[inset_0_0_20px_rgba(16,185,129,0.08)]">
                  <span className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                    CapturePilot
                  </span>
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center">
                  <span className="text-stone-400 bg-stone-800 px-3 py-1 rounded-full">
                    GovDash
                  </span>
                </div>
              </div>

              {/* Table rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-b border-stone-800 last:border-b-0 transition-colors duration-200 hover:bg-stone-800/50 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-stone-800/20"
                  }`}
                >
                  <div className="px-6 py-3.5 text-sm font-medium text-stone-300 flex items-center">
                    {row.feature}
                  </div>
                  <div className="px-6 py-3.5 text-sm text-center flex items-center justify-center gap-2 border-x border-emerald-500/10">
                    <StatusIcon status={row.cpStatus} />
                    <span className={row.cpStatus === "yes" ? "text-emerald-400 font-medium" : row.cpStatus === "partial" ? "text-amber-400" : "text-stone-400"}>
                      {row.cpLabel}
                    </span>
                  </div>
                  <div className="px-6 py-3.5 text-sm text-center flex items-center justify-center gap-2">
                    <StatusIcon status={row.otherStatus} />
                    <span className={row.otherStatus === "yes" ? "text-stone-300 font-medium" : row.otherStatus === "partial" ? "text-amber-400" : "text-stone-500"}>
                      {row.otherLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-500 text-center mt-4">
              Comparison based on publicly available information as of April 2026.
              GovDash is a trademark of GovDash, Inc.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WHY SWITCH                                                  */}
        {/* ============================================================ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-white/90 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Why Teams{" "}
                <span className="gradient-text">Choose CapturePilot</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                GovDash raised $30M to build proposal tools for enterprises.
                CapturePilot builds the full pipeline for small businesses.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {WHY_SWITCH_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-2xl p-8 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PRICING COMPARISON                                          */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                The Price{" "}
                <span className="text-emerald-400">Difference</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                GovDash is built for enterprise budgets. CapturePilot delivers
                comparable value at small business pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* GovDash pricing card */}
              <div className="bg-stone-900 border border-stone-700 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-stone-700 text-stone-300 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  GOVDASH
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-stone-500 mb-1">Per seat per month</p>
                  <p className="text-4xl font-extrabold tracking-tight">
                    $500<span className="text-2xl text-stone-500">+</span><span className="text-lg font-medium text-stone-500">/mo</span>
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Per-seat licensing model",
                    "Enterprise sales process required",
                    "No free tier available",
                    "Annual commitments typical",
                    "Add-on costs for modules",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-stone-400">
                      <Minus className="w-4 h-4 text-stone-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-stone-800 rounded-xl p-4 text-center">
                  <p className="text-xs text-stone-500 mb-1">3-person team / year</p>
                  <p className="text-2xl font-extrabold text-stone-300">$18,000+</p>
                </div>
              </div>

              {/* CapturePilot pricing card */}
              <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 border-2 border-emerald-500 rounded-2xl p-8 relative overflow-hidden shadow-lg shadow-emerald-500/20">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  CAPTUREPILOT
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-emerald-400 mb-1">Monthly, cancel anytime</p>
                  <p className="text-4xl font-extrabold tracking-tight">
                    $199<span className="text-lg font-medium text-stone-400">/mo</span>
                  </p>
                  <p className="text-sm text-emerald-400 font-medium mt-1">
                    = ${cpYearly.toLocaleString()}/year
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Full team access included",
                    "Month-to-month flexibility",
                    "Self-service sign-up in minutes",
                    "Free tier to start",
                    "All features included",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-500 rounded-xl p-4 text-center">
                  <p className="text-xs text-emerald-100 mb-1">You save annually (vs 1 seat)</p>
                  <p className="text-2xl font-extrabold text-white">
                    ${savings.toLocaleString()}+
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-300">
                  Save ${savings.toLocaleString()}+ per year by switching to CapturePilot
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BEST FOR                                                    */}
        {/* ============================================================ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Which Is{" "}
                <span className="gradient-text">Right for You?</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                GovDash serves enterprise proposal teams. CapturePilot serves
                small businesses that need the full capture pipeline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-stone-200 rounded-2xl p-8 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-stone-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">GovDash</h3>
                    <p className="text-xs text-stone-400">Best for enterprise proposal teams</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {GOVDASH_BEST_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                      <Star className="w-4 h-4 text-stone-300 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 border-2 border-emerald-200 rounded-2xl p-8 shadow-lg shadow-emerald-100/50 animate-fade-in-up animate-delay-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">CapturePilot</h3>
                    <p className="text-xs text-emerald-600 font-medium">Best for small business</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {CP_BEST_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-emerald-800">
                      <BadgeCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA                                                         */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Ready for the{" "}
              <span className="text-emerald-400">Affordable Alternative?</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              Enterprise proposal tools at enterprise prices are not the only
              option. Get the full capture pipeline for $199/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-600 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CHECK_URL}
                className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 px-8 py-4 rounded-full font-bold text-base hover:border-stone-400 hover:text-white transition-colors"
              >
                Free Eligibility Check <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-6">
              No credit card required. Free tier available. Cancel anytime.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CROSS-LINKS                                                 */}
        {/* ============================================================ */}
        <section className="py-16 bg-white border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-stone-400 uppercase tracking-wider mb-8">
              Explore CapturePilot Features
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Smart Matching", href: "/features/matching", icon: Zap },
                { label: "AI Proposals", href: "/features/proposals", icon: FileText },
                { label: "Capability Statements", href: "/features/capability-statement", icon: BadgeCheck },
                { label: "Pricing", href: "/pricing", icon: DollarSign },
              ].map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center gap-3 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-200 rounded-xl px-4 py-3 transition-all group"
                  >
                    <Icon className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
                    <span className="text-sm font-medium text-stone-600 group-hover:text-emerald-700 transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-emerald-400 ml-auto transition-colors" />
                  </Link>
                );
              })}
            </div>

            <p className="text-center text-xs text-stone-400 mt-10 mb-4">
              Also compare CapturePilot to:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {CROSS_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-stone-500 hover:text-emerald-600 bg-stone-100 hover:bg-emerald-50 px-3 py-1.5 rounded-full transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
