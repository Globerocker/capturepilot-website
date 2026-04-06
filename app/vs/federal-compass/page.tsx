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
  BarChart3,
  Target,
  Search,
  Mail,
  Mic,
  Palette,
  Headphones,
  Eye,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

/* ------------------------------------------------------------------ */
/*  Shimmer CSS (injected via style tag)                               */
/* ------------------------------------------------------------------ */

const shimmerCSS = `
.shimmer-bg {
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.dot-grid {
  background-image: radial-gradient(circle, #e7e5e4 1px, transparent 1px);
  background-size: 24px 24px;
}
.glow-border {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.15), 0 0 60px rgba(16, 185, 129, 0.05);
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.15); }
  50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.3); }
}
.animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
`;

/* ------------------------------------------------------------------ */
/*  Comparison table data                                              */
/* ------------------------------------------------------------------ */

type RowStatus = "yes" | "no" | "partial" | "text";

interface ComparisonRow {
  feature: string;
  capturepilot: string;
  cpStatus: RowStatus;
  competitor: string;
  compStatus: RowStatus;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "AI Proposal Writer", capturepilot: "Included", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Capability Statement Builder", capturepilot: "Voice input + AI", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Smart Matching Algorithm", capturepilot: "140-point scoring", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Quick Company Checker", capturepilot: "Free eligibility check", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Market Intelligence", capturepilot: "USASpending data", cpStatus: "yes", competitor: "Agency spend analysis", compStatus: "yes" },
  { feature: "Deal Pipeline (Kanban CRM)", capturepilot: "Built-in", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Partner Search", capturepilot: "SAM.gov companies", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Eligibility Check", capturepilot: "Set-aside matching", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "IDIQ/Contract Vehicle Tracking", capturepilot: "Included", cpStatus: "yes", competitor: "Contract vehicle mapping", compStatus: "yes" },
  { feature: "Email Alerts", capturepilot: "Daily notifications", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Competitor Intelligence", capturepilot: "Award history + incumbents", cpStatus: "yes", competitor: "Competitor tracking", compStatus: "yes" },
  { feature: "Consulting Support Tier", capturepilot: "Managed service option", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Brand Color Extraction", capturepilot: "From your website", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Voice-to-Document", capturepilot: "Record, AI writes", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Free Tier Available", capturepilot: "Yes", cpStatus: "yes", competitor: "No", compStatus: "no" },
  { feature: "30-Day Free Trial (Pro)", capturepilot: "Yes", cpStatus: "yes", competitor: "No", compStatus: "no" },
  { feature: "Starting Price", capturepilot: "$199/mo flat", cpStatus: "text", competitor: "$500-1,500+/seat/mo", compStatus: "text" },
];

/* ------------------------------------------------------------------ */
/*  Analytics vs Action cards                                          */
/* ------------------------------------------------------------------ */

const GAP_CARDS = [
  {
    icon: Eye,
    title: "Federal Compass: Here's the Data",
    description:
      "Spend dashboards, market maps, and competitive landscapes. You get beautifully visualized intelligence about who's spending what and where. But then what? You still need to find, qualify, write, and submit. That requires a different set of tools entirely.",
    side: "fc" as const,
  },
  {
    icon: Rocket,
    title: "CapturePilot: Here's Your Proposal",
    description:
      "CapturePilot takes you from discovery to delivery. Smart matching finds your opportunities. AI writes your proposal. Voice input builds your capability statement. The pipeline tracks your deals. Intelligence doesn't stop at a dashboard -- it flows into action.",
    side: "cp" as const,
  },
];

/* ------------------------------------------------------------------ */
/*  Best For data                                                      */
/* ------------------------------------------------------------------ */

const FC_BEST_FOR = [
  "Established primes with BD teams of 10+",
  "Companies with $50M+ revenue seeking market analysis",
  "Firms that already have proposal writers on staff",
  "Teams with existing capture management tools",
  "Organizations needing agency-level spend analytics",
  "Companies with dedicated competitive intelligence analysts",
];

const CP_BEST_FOR = [
  "1-5 person teams wearing every hat",
  "Veterans entering GovCon for the first time",
  "Women-owned (WOSB/EDWOSB) small businesses",
  "Solo founders who need to punch above their weight",
  "Companies under $10M that can't afford enterprise tools",
  "8(a), HUBZone, and SDB certified firms",
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

export default function VsFederalCompassPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cpMonthly = 199;
  const cpYearly = cpMonthly * 12;
  const fcMinSeat = 500;
  const fcMaxSeat = 1500;
  const teamSize = 5;
  const fcTeamMin = fcMinSeat * teamSize;
  const fcTeamMax = fcMaxSeat * teamSize;
  const fcTeamMinYearly = fcTeamMin * 12;
  const fcTeamMaxYearly = fcTeamMax * 12;

  return (
    <>
      <SiteNav />
      <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />

      <title>CapturePilot vs Federal Compass — Compare Features & Pricing | CapturePilot</title>
      <meta
        name="description"
        content="Compare CapturePilot vs Federal Compass. Enterprise-grade government contract intelligence without the enterprise price. AI proposal writer, smart matching, and capability statement builder included."
      />
      <meta name="keywords" content="Federal Compass alternative, Federal Compass vs CapturePilot, government contract software, GovCon tools, federal contracting platform, Federal Compass pricing" />
      <meta property="og:title" content="CapturePilot vs Federal Compass — Enterprise Intelligence Without the Enterprise Price" />
      <meta property="og:description" content="AI-powered government contract matching with built-in proposal tools. A fraction of the cost of Federal Compass. Free tier available." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://capturepilot.com/vs/federal-compass" />

      <main className="pt-16">
        {/* ============================================================ */}
        {/*  HERO — Dark section with shimmer                            */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-stone-950 py-28 md:py-36">
          <div className="shimmer-bg pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up animate-pulse-glow">
              <BarChart3 className="w-3.5 h-3.5" />
              Competitor Comparison
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white animate-fade-in-up animate-delay-100">
              Enterprise Intelligence{" "}
              <span className="gradient-text">Without the Enterprise Price</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Federal Compass charges $500-1,500+ per seat per month for analytics dashboards.
              CapturePilot gives you the intelligence <em>and</em> the tools to act on it -- for $199/mo flat.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-emerald-500 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#comparison"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/20 transition-colors"
              >
                See Full Comparison
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  COMPARISON TABLE — Light section with dot grid               */}
        {/* ============================================================ */}
        <section id="comparison" className="relative py-24">
          <div className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Feature-by-Feature{" "}
                <span className="gradient-text">Comparison</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                See how CapturePilot stacks up against Federal Compass across
                every capability that matters for winning government contracts.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden animate-fade-in-up">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200">
                <div className="px-6 py-4 text-sm font-bold text-stone-500 uppercase tracking-wider">
                  Feature
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center">
                  <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    CapturePilot
                  </span>
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center">
                  <span className="text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    Federal Compass
                  </span>
                </div>
              </div>

              {/* Table rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-b border-stone-100 last:border-b-0 transition-colors duration-200 hover:bg-stone-50/60 ${
                    i % 2 === 0 ? "bg-white" : "bg-stone-50/30"
                  }`}
                >
                  <div className="px-6 py-4 text-sm font-medium text-stone-700 flex items-center">
                    {row.feature}
                  </div>
                  <div className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2 bg-emerald-50/20">
                    <StatusIcon status={row.cpStatus} />
                    <span className={row.cpStatus === "yes" ? "text-emerald-700 font-medium" : "text-stone-600"}>
                      {row.capturepilot}
                    </span>
                  </div>
                  <div className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2">
                    <StatusIcon status={row.compStatus} />
                    <span className={row.compStatus === "yes" ? "text-stone-700 font-medium" : row.compStatus === "no" ? "text-stone-400" : "text-stone-600"}>
                      {row.competitor}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-400 text-center mt-4">
              Comparison based on publicly available information as of April 2026.
              Federal Compass is a trademark of its respective owner.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  ANALYTICS VS ACTION — Dark section                          */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-900">
          <div className="shimmer-bg pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Analytics vs{" "}
                <span className="gradient-text">Action</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Federal Compass tells you what is happening in the market.
                CapturePilot helps you <strong className="text-stone-200">do something about it</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {GAP_CARDS.map((card, i) => {
                const Icon = card.icon;
                const isCp = card.side === "cp";
                return (
                  <div
                    key={i}
                    className={`rounded-2xl p-8 hover-lift animate-fade-in-up ${
                      isCp
                        ? "bg-gradient-to-br from-emerald-950/80 to-emerald-900/40 border-2 border-emerald-700/50 glow-border"
                        : "bg-stone-800/60 border border-stone-700/50"
                    }`}
                    style={{ animationDelay: `${i * 150}ms`, opacity: 0 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isCp ? "bg-emerald-600/20" : "bg-stone-700/50"
                    }`}>
                      <Icon className={`w-6 h-6 ${isCp ? "text-emerald-400" : "text-stone-400"}`} />
                    </div>
                    <h3 className={`text-lg font-bold mb-3 ${isCp ? "text-emerald-300" : "text-stone-300"}`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isCp ? "text-emerald-200/70" : "text-stone-500"}`}>
                      {card.description}
                    </p>
                    {isCp && (
                      <div className="mt-6 flex items-center gap-2">
                        <div className="flex gap-1">
                          {[Search, FileText, Mic, Target, Mail].map((StepIcon, si) => (
                            <div key={si} className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                              <StepIcon className="w-4 h-4 text-emerald-400" />
                            </div>
                          ))}
                        </div>
                        <span className="text-xs text-emerald-400 font-medium ml-2">Full pipeline</span>
                      </div>
                    )}
                    {!isCp && (
                      <div className="mt-6 flex items-center gap-2">
                        <div className="flex gap-1">
                          {[BarChart3, Eye, Layers].map((StepIcon, si) => (
                            <div key={si} className="w-8 h-8 rounded-lg bg-stone-700/50 flex items-center justify-center">
                              <StepIcon className="w-4 h-4 text-stone-500" />
                            </div>
                          ))}
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-600 mx-1" />
                        <span className="text-xs text-stone-500 font-medium">Then you need other tools...</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-stone-500 text-sm max-w-xl mx-auto">
                Federal Compass stops at &ldquo;here is the data.&rdquo; CapturePilot continues to &ldquo;here is your proposal, ready to submit.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PRICING COMPARISON — Light with dot grid                    */}
        {/* ============================================================ */}
        <section className="relative py-24">
          <div className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                The Price{" "}
                <span className="gradient-text">Reality</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Federal Compass charges enterprise prices because it was built for enterprise teams.
                Here is what a 5-person team actually pays.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Federal Compass pricing card */}
              <div className="bg-white border border-stone-200 rounded-2xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 bg-stone-300 text-stone-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  FEDERAL COMPASS
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-stone-400 mb-1">Per seat, per month</p>
                  <p className="text-4xl font-extrabold text-stone-800 tracking-tight">
                    ${fcMinSeat}<span className="text-2xl text-stone-400"> - ${fcMaxSeat.toLocaleString()}+</span><span className="text-lg font-medium text-stone-400">/mo</span>
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Per-seat pricing adds up fast",
                    "Enterprise sales process required",
                    "Annual contracts typical",
                    "No free tier or trial",
                    "Analytics only -- no execution tools",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-stone-500">
                      <Minus className="w-4 h-4 text-stone-300 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                  <p className="text-xs text-stone-400 mb-1">5-person team / year</p>
                  <p className="text-2xl font-extrabold text-red-600">
                    ${fcTeamMinYearly.toLocaleString()} - ${fcTeamMaxYearly.toLocaleString()}+
                  </p>
                </div>
              </div>

              {/* CapturePilot pricing card */}
              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 border-2 border-emerald-300 rounded-2xl p-8 relative overflow-hidden shadow-xl shadow-emerald-100/50 glow-border">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  CAPTUREPILOT
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-emerald-600 mb-1">Flat rate, cancel anytime</p>
                  <p className="text-4xl font-extrabold text-stone-800 tracking-tight">
                    $199<span className="text-lg font-medium text-stone-400">/mo</span>
                  </p>
                  <p className="text-sm text-emerald-600 font-medium mt-1">
                    = ${cpYearly.toLocaleString()}/year total
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Full team access included",
                    "Self-service sign-up in minutes",
                    "Month-to-month, no contracts",
                    "Free tier to start today",
                    "Intelligence + execution in one platform",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-600 rounded-xl p-4 text-center">
                  <p className="text-xs text-emerald-100 mb-1">You save annually</p>
                  <p className="text-2xl font-extrabold text-white">
                    ${(fcTeamMinYearly - cpYearly).toLocaleString()} - ${(fcTeamMaxYearly - cpYearly).toLocaleString()}+
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700">
                  Save up to ${(fcTeamMaxYearly - cpYearly).toLocaleString()}+ per year with CapturePilot
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BUILT FOR DIFFERENT TEAMS — Dark section                    */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950">
          <div className="shimmer-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Built for{" "}
                <span className="gradient-text">Different Teams</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Federal Compass was built for established primes with large BD departments.
                CapturePilot was built for the rest of us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Federal Compass best for */}
              <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-8 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-stone-800 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-200">Federal Compass</h3>
                    <p className="text-xs text-stone-500">Best for large primes</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {FC_BEST_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-400">
                      <Star className="w-4 h-4 text-stone-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CapturePilot best for */}
              <div className="bg-gradient-to-br from-emerald-950/60 to-emerald-900/30 border-2 border-emerald-700/50 rounded-2xl p-8 glow-border animate-fade-in-up animate-delay-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">CapturePilot</h3>
                    <p className="text-xs text-emerald-400 font-medium">Best for small business</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {CP_BEST_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-emerald-300/80">
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
        {/*  CROSS-LINKS — Light with dot grid                           */}
        {/* ============================================================ */}
        <section className="relative py-16 border-t border-stone-100">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative max-w-4xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-stone-400 uppercase tracking-wider mb-8">
              More Comparisons
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "vs GovWin", href: "/vs/govwin", icon: BarChart3 },
                { label: "vs Unison", href: "/vs/unison", icon: Users },
                { label: "vs Capture2Proposal", href: "/vs/capture2proposal", icon: FileText },
                { label: "vs HigherGov", href: "/vs/highergov", icon: TrendingUp },
              ].map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center gap-3 bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-200 rounded-xl px-4 py-3 transition-all group"
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
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA — Dark section with shimmer                             */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950">
          <div className="shimmer-bg pointer-events-none absolute inset-0" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Ready for Intelligence{" "}
              <span className="gradient-text">That Takes Action?</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              Stop paying enterprise prices for dashboards you can only look at.
              Get the intelligence and the tools to win -- in one platform, at one price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-500 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CHECK_URL}
                className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 px-8 py-4 rounded-full font-bold text-base hover:border-stone-400 hover:text-white transition-colors"
              >
                Free Company Check <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-stone-600 mt-6">
              No credit card required. Free tier available. Cancel anytime.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
