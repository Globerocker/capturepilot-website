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
  Brain,
  FileText,
  Shield,
  TrendingUp,
  ChevronRight,
  Minus,
  Rocket,
  Star,
  BadgeCheck,
  Mic,
  BarChart3,
  Layers,
  Search,
  Target,
  Users,
  Crosshair,
  PenTool,
  Trophy,
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
  { feature: "Smart Matching (proprietary multi-factor)", cpStatus: "yes", cpLabel: "proprietary multi-factor scoring", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Quick Eligibility Checker", cpStatus: "yes", cpLabel: "Instant check", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Market Intelligence", cpStatus: "yes", cpLabel: "Full intel suite", otherStatus: "partial", otherLabel: "Basic search data" },
  { feature: "Deal Pipeline (Kanban)", cpStatus: "yes", cpLabel: "Built-in", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Partner Search", cpStatus: "yes", cpLabel: "1M+ contractors", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Eligibility / Set-Aside Matching", cpStatus: "yes", cpLabel: "Automatic", otherStatus: "no", otherLabel: "Not available" },
  { feature: "IDIQ / Vehicle Tracking", cpStatus: "yes", cpLabel: "Included", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Daily Email Alerts", cpStatus: "yes", cpLabel: "Smart scored alerts", otherStatus: "yes", otherLabel: "Keyword alerts" },
  { feature: "Competitor / Incumbent Intel", cpStatus: "yes", cpLabel: "Award + USASpending", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Consulting Support Tier", cpStatus: "yes", cpLabel: "Managed services", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Voice-to-Document", cpStatus: "yes", cpLabel: "Record & generate", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Free Tier", cpStatus: "yes", cpLabel: "Yes", otherStatus: "yes", otherLabel: "Limited free plan" },
  { feature: "30-Day Free Trial", cpStatus: "yes", cpLabel: "Yes", otherStatus: "no", otherLabel: "No" },
  { feature: "Flat Pricing (no per-seat)", cpStatus: "yes", cpLabel: "$199/mo flat", otherStatus: "no", otherLabel: "Starting at $50/mo" },
];

/* ------------------------------------------------------------------ */
/*  Pipeline steps                                                     */
/* ------------------------------------------------------------------ */

const PIPELINE_STEPS = [
  { icon: Search, label: "Find Opportunities", cp: "AI-matched to your profile", other: "Manual keyword search" },
  { icon: Crosshair, label: "Qualify & Score", cp: "proprietary multi-factor scoring engine", other: "Not available" },
  { icon: PenTool, label: "Draft Proposals", cp: "AI-generated proposal drafts", other: "Not available" },
  { icon: Trophy, label: "Win Contracts", cp: "Full capture support", other: "You are on your own" },
];

/* ------------------------------------------------------------------ */
/*  Feature cards                                                      */
/* ------------------------------------------------------------------ */

const FEATURE_CARDS = [
  {
    icon: Brain,
    title: "AI Proposal Writer",
    description:
      "Generate compliant, tailored proposal drafts in minutes. Our AI reads the solicitation, understands evaluation criteria, and drafts Section L/M-ready response frameworks.",
    href: "/features/proposals",
  },
  {
    icon: FileText,
    title: "Capability Statement Builder",
    description:
      "Create professional capability statements with AI assistance or paste a transcript. Export PDF-ready documents that make contracting officers take notice.",
    href: "/features/capability-statement",
  },
  {
    icon: Target,
    title: "140-Point Smart Matching",
    description:
      "Our deterministic scoring engine evaluates NAICS, PSC, set-aside, geography, contract value, past performance, and incumbent risk to surface your best-fit opportunities.",
    href: "/features/matching",
  },
  {
    icon: BarChart3,
    title: "Deal Pipeline & Intelligence",
    description:
      "Track opportunities from discovery to award. Monitor incumbents, award history, competitive landscape, and market trends in one dashboard.",
    href: "/features/pipeline",
  },
];

/* ------------------------------------------------------------------ */
/*  Cross-links                                                        */
/* ------------------------------------------------------------------ */

const CROSS_LINKS = [
  { label: "vs GovWin", href: "/vs/govwin" },
  { label: "vs BGOV", href: "/vs/bgov" },
  { label: "vs HigherGov", href: "/vs/highergov" },
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

export default function VsGovTribePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
      `}</style>

      <SiteNav />

      <title>CapturePilot vs GovTribe — Search vs Full Capture Platform | CapturePilot</title>
      <meta
        name="description"
        content="Compare CapturePilot vs GovTribe. GovTribe helps you search. CapturePilot helps you win. AI proposals, proprietary multi-factor matching, deal pipeline, and consulting support included."
      />
      <meta name="keywords" content="GovTribe alternative, GovTribe vs CapturePilot, government contract search, GovCon capture tools, federal contracting platform" />
      <meta property="og:title" content="CapturePilot vs GovTribe — Stop Searching. Start Winning." />
      <meta property="og:description" content="GovTribe is a search tool. CapturePilot is a complete capture management platform with AI. Free tier available." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.capturepilot.com/vs/govtribe" />

      <main className="pt-16">
        {/* ============================================================ */}
        {/*  HERO — light section with dot pattern                       */}
        {/* ============================================================ */}
        <section
          className="relative overflow-hidden py-24 md:py-32"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/90 to-white/95 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 text-sm text-stone-600 mb-8 shadow-sm">
              <Layers className="w-4 h-4" />
              Competitor Comparison
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6 leading-[1.1]">
              CapturePilot vs{" "}
              <span className="gradient-text">GovTribe</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto mb-4 leading-relaxed">
              GovTribe helps you <span className="font-semibold text-stone-900">search</span>.{" "}
              CapturePilot helps you <span className="font-semibold text-stone-900">win</span>.
            </p>
            <p className="text-base text-stone-500 max-w-2xl mx-auto mb-10">
              Both platforms index federal opportunities. Only one gives you the AI tools,
              scoring engine, and capture pipeline to actually close deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Winning Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#comparison"
                className="border border-stone-300 text-stone-700 px-8 py-3.5 rounded-full font-bold hover:bg-stone-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                See Full Comparison <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  COMPARISON TABLE — dark section with shimmer                 */}
        {/* ============================================================ */}
        <section id="comparison" className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Feature-by-Feature <span className="text-emerald-400">Comparison</span>
              </h2>
              <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                GovTribe is a solid search tool. CapturePilot is a complete capture management platform.
              </p>
            </div>

            <div className="bg-stone-900/80 backdrop-blur rounded-2xl border border-stone-700 shadow-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 gap-4 py-4 px-4 md:px-6 border-b border-stone-700">
                <div className="text-sm font-bold text-stone-400 uppercase tracking-wider">
                  Feature
                </div>
                <div className="text-center border-x border-emerald-500/30 bg-emerald-500/5 shadow-[inset_0_0_20px_rgba(16,185,129,0.08)] rounded-t-lg">
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                    CapturePilot
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-stone-400">GovTribe</span>
                </div>
              </div>

              {/* Table rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 py-3.5 px-4 md:px-6 border-b border-stone-800 last:border-b-0 transition-colors duration-200 hover:bg-stone-800/50 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-stone-800/20"
                  }`}
                >
                  <div className="text-sm font-medium text-stone-300 flex items-center">{row.feature}</div>
                  <div className="text-sm text-center flex items-center justify-center gap-2 border-x border-emerald-500/10">
                    <StatusIcon status={row.cpStatus} />
                    <span className={row.cpStatus === "yes" ? "text-emerald-400 font-medium" : "text-stone-400"}>
                      {row.cpLabel}
                    </span>
                  </div>
                  <div className="text-sm text-center flex items-center justify-center gap-2">
                    <StatusIcon status={row.otherStatus} />
                    <span className={row.otherStatus === "yes" ? "text-stone-300 font-medium" : row.otherStatus === "partial" ? "text-amber-400" : "text-stone-500"}>
                      {row.otherLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-stone-500 mt-6">
              GovTribe pricing as of April 2026. Subject to change.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SEARCH vs CAPTURE PIPELINE — light section with dot pattern */}
        {/* ============================================================ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-4">
                Search vs. <span className="gradient-text">Capture</span>
              </h2>
              <p className="text-stone-600 text-lg max-w-3xl mx-auto">
                GovTribe stops at discovery. CapturePilot covers the entire capture lifecycle —
                from finding the right opportunities to submitting winning proposals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* CapturePilot Pipeline */}
              <div className="bg-white rounded-2xl border-2 border-emerald-200 p-8 shadow-lg shadow-emerald-100/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">CapturePilot</h3>
                    <p className="text-sm text-emerald-600 font-medium">Full Capture Pipeline</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {PIPELINE_STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-stone-900 text-sm">{step.label}</p>
                          <p className="text-sm text-emerald-600">{step.cp}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* GovTribe Stops Here */}
              <div className="bg-white rounded-2xl border border-stone-200 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-500 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">GovTribe</h3>
                    <p className="text-sm text-stone-400 font-medium">Search Only</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {PIPELINE_STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              i === 0
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-stone-50 text-stone-300"
                            }`}
                          >
                            {i === 0 ? <Icon className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          </div>
                        </div>
                        <div>
                          <p className={`font-semibold text-sm ${i === 0 ? "text-stone-900" : "text-stone-400"}`}>
                            {step.label}
                          </p>
                          <p className={`text-sm ${i === 0 ? "text-stone-500" : "text-stone-300"}`}>
                            {i === 0 ? step.other : "Not available"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                  <p className="text-sm text-amber-700 font-medium">
                    GovTribe is a search tool — it helps you find contracts but leaves the
                    hard part (qualifying, writing, winning) entirely up to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FEATURE DEEP-DIVE — dark section with shimmer               */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                What CapturePilot Has That GovTribe <span className="text-emerald-400">Does Not</span>
              </h2>
              <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                These are the tools that turn opportunity awareness into contract wins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {FEATURE_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={i}
                    href={card.href}
                    className="bg-stone-900 border border-stone-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 group block"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-stone-800 group-hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-300 mb-5">
                      <Icon className="w-7 h-7 text-stone-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{card.title}</h3>
                    <p className="text-stone-400 leading-relaxed mb-5">{card.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BEST FOR — light section with dot pattern                   */}
        {/* ============================================================ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-white/90 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-4">
                Which One Is Right for You?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* GovTribe Best For */}
              <div className="bg-white rounded-2xl border border-stone-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-6 h-6 text-stone-500" />
                  <h3 className="text-xl font-bold text-stone-900">GovTribe is best if...</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "You just need a SAM.gov search alternative",
                    "You already have a capture process and team",
                    "Budget is your primary concern",
                    "You only need to browse and track opportunities",
                    "You have in-house proposal writers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-stone-500" />
                        </div>
                      </div>
                      <span className="text-stone-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm text-stone-500">
                    <span className="font-semibold text-stone-700">Starting at $50/mo</span> —
                    Good for research and monitoring.
                  </p>
                </div>
              </div>

              {/* CapturePilot Best For */}
              <div className="bg-white rounded-2xl border-2 border-black p-8 relative">
                <div className="absolute -top-3 right-6">
                  <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <Star className="w-3 h-3" /> Recommended
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-bold text-stone-900">CapturePilot is best if...</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "You want AI to find AND qualify opportunities for you",
                    "You need help drafting compliant proposals",
                    "You are a small business competing against larger firms",
                    "You want a complete capture pipeline in one tool",
                    "You need expert consulting support on demand",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        </div>
                      </div>
                      <span className="text-stone-700 text-sm leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm text-stone-500">
                    <span className="font-semibold text-stone-700">Starting at $199/mo</span> —
                    Everything you need to win, not just search.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA — dark section with shimmer                             */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl p-12 md:p-16 relative overflow-hidden border border-stone-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.08),transparent_50%)]" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Stop Searching. Start <span className="text-emerald-400">Winning</span>.
                </h2>
                <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
                  Join small businesses using CapturePilot to find, qualify, and win
                  government contracts — with AI-powered proposal drafting and expert support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={SIGNUP_URL}
                    className="bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    Start Free Today <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={CHECK_URL}
                    className="border border-stone-600 text-stone-300 px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Free Eligibility Check <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-stone-500 text-sm mt-6">
                  Free tier available. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CROSS-LINKS — light section                                 */}
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

            {/* Other comparisons */}
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
