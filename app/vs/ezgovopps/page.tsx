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
  Database,
  BookOpen,
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
  { feature: "AI Proposal Writer", cpStatus: "yes", cpLabel: "Included", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Capability Statement Builder (Voice)", cpStatus: "yes", cpLabel: "Voice-powered", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Smart Matching (proprietary multi-factor)", cpStatus: "yes", cpLabel: "Proprietary multi-factor scoring", otherStatus: "partial", otherLabel: "Keyword alerts" },
  { feature: "Quick Eligibility Checker", cpStatus: "yes", cpLabel: "Instant check", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Market Intelligence", cpStatus: "yes", cpLabel: "Award + USASpending data", otherStatus: "yes", otherLabel: "Analyst-curated intel" },
  { feature: "Deal Pipeline (Kanban)", cpStatus: "yes", cpLabel: "Built-in", otherStatus: "partial", otherLabel: "File cabinet system" },
  { feature: "Partner Search", cpStatus: "yes", cpLabel: "1M+ contractors", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Eligibility / Set-Aside Matching", cpStatus: "yes", cpLabel: "Automatic", otherStatus: "partial", otherLabel: "Manual filters" },
  { feature: "IDIQ / Vehicle Tracking", cpStatus: "yes", cpLabel: "Included", otherStatus: "yes", otherLabel: "48K+ IDIQ database" },
  { feature: "Daily Email Alerts", cpStatus: "yes", cpLabel: "Smart scored alerts", otherStatus: "yes", otherLabel: "Available" },
  { feature: "Competitor / Incumbent Intel", cpStatus: "yes", cpLabel: "Award + USASpending", otherStatus: "yes", otherLabel: "Analyst reports" },
  { feature: "Consulting Support Tier", cpStatus: "yes", cpLabel: "Managed services", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Voice-to-Document", cpStatus: "yes", cpLabel: "Record & generate", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Recompete Intelligence", cpStatus: "partial", cpLabel: "Via award data", otherStatus: "yes", otherLabel: "Analyst-curated" },
  { feature: "Free Tier", cpStatus: "yes", cpLabel: "Yes", otherStatus: "no", otherLabel: "5-day trial only" },
  { feature: "Flat Pricing (no per-seat)", cpStatus: "yes", cpLabel: "$199/mo flat", otherStatus: "no", otherLabel: "$2,695-$5,995/yr" },
];

/* ------------------------------------------------------------------ */
/*  Why Switch cards                                                   */
/* ------------------------------------------------------------------ */

const WHY_SWITCH_CARDS = [
  {
    icon: Brain,
    title: "AI Tools, Not Just Databases",
    description:
      "EZGovOpps gives you a database with analyst notes. CapturePilot gives you AI that writes proposals, builds capability statements, and scores every opportunity against your profile automatically.",
  },
  {
    icon: DollarSign,
    title: "Lower Cost, More Features",
    description:
      "EZGovOpps starts at $2,695/year for 1 user and goes up to $5,995 for 6 users. CapturePilot is $2,388/year with full team access and AI tools that EZGovOpps does not offer.",
  },
  {
    icon: Zap,
    title: "Quick Checker for Instant Qualification",
    description:
      "Before you spend hours researching an opportunity, CapturePilot's Quick Checker tells you instantly if your business qualifies. EZGovOpps requires manual review of every opportunity.",
  },
  {
    icon: Layers,
    title: "Full Capture Pipeline",
    description:
      "EZGovOpps focuses on opportunity discovery and tracking. CapturePilot covers the entire pipeline: discovery, qualification, intelligence, proposals, capability statements, and partner search.",
  },
];

/* ------------------------------------------------------------------ */
/*  Best For data                                                      */
/* ------------------------------------------------------------------ */

const EZGOVOPPS_BEST_FOR = [
  "Companies wanting analyst-curated intelligence",
  "Teams focused on IDIQ and recompete tracking",
  "Firms with experienced BD staff",
  "Organizations wanting manual agency analysis",
  "Companies needing collaboration calendar tools",
  "Teams that prefer human analysis over AI",
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
  { label: "vs GovDash", href: "/vs/govdash" },
  { label: "vs Sweetspot", href: "/vs/sweetspot" },
  { label: "vs GovTribe", href: "/vs/govtribe" },
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

export default function VsEZGovOppsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cpYearly = 199 * 12;
  const ezMin = 2695;
  const ezMax = 5995;

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
              <span className="gradient-text">EZGovOpps</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Analyst-curated intelligence meets AI-powered capture. More
              features, lower cost, full pipeline.
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
                How CapturePilot compares to EZGovOpps across the 16 features
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
                    EZGovOpps
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
              EZGovOpps is a trademark of EZGovOpps.
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
                EZGovOpps offers solid analyst-curated intel. CapturePilot adds
                AI tools that turn intelligence into action.
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
                EZGovOpps charges per-user annual fees without AI tools.
                CapturePilot delivers AI-powered capture at competitive pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* EZGovOpps pricing card */}
              <div className="bg-stone-900 border border-stone-700 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-stone-700 text-stone-300 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  EZGOVOPPS
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-stone-500 mb-1">Annual plans (per user)</p>
                  <p className="text-4xl font-extrabold tracking-tight">
                    ${ezMin.toLocaleString()}<span className="text-2xl text-stone-500"> - ${ezMax.toLocaleString()}</span><span className="text-lg font-medium text-stone-500">/yr</span>
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Per-user pricing tiers",
                    "Annual commitment required",
                    "No free tier (5-day trial only)",
                    "No AI proposal or document tools",
                    "Analyst-curated intel (manual process)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-stone-400">
                      <Minus className="w-4 h-4 text-stone-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-stone-800 rounded-xl p-4 text-center">
                  <p className="text-xs text-stone-500 mb-1">6-user Platinum plan</p>
                  <p className="text-2xl font-extrabold text-stone-300">${ezMax.toLocaleString()}/yr</p>
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
                    "Free tier to start",
                    "AI proposal writer included",
                    "All features included",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-500 rounded-xl p-4 text-center">
                  <p className="text-xs text-emerald-100 mb-1">Full team, all features</p>
                  <p className="text-2xl font-extrabold text-white">
                    ${cpYearly.toLocaleString()}/yr
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-300">
                  Same price range, but with AI proposals, capability statements, and more
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
                EZGovOpps excels at curated intel. CapturePilot turns that
                intelligence into action with AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-stone-200 rounded-2xl p-8 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center">
                    <Database className="w-5 h-5 text-stone-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">EZGovOpps</h3>
                    <p className="text-xs text-stone-400">Best for analyst-curated intel</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {EZGOVOPPS_BEST_FOR.map((item, i) => (
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
              Ready for{" "}
              <span className="text-emerald-400">AI-Powered Capture?</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              Analyst-curated intel is valuable. But AI that writes your
              proposals and builds your capability statements is a game
              changer. Try CapturePilot free.
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
                { label: "Pricing", href: "/#pricing", icon: DollarSign },
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
