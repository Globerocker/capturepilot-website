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
  PenTool,
  Eye,
  Workflow,
  ClipboardCheck,
  Layers,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

/* ------------------------------------------------------------------ */
/*  Shimmer CSS                                                        */
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
  { feature: "AI Proposal Writer", capturepilot: "AI drafts proposals", cpStatus: "yes", competitor: "Manages proposals only", compStatus: "no" },
  { feature: "Capability Statement Builder", capturepilot: "Voice input + AI", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Smart Matching Algorithm", capturepilot: "proprietary multi-factor scoring", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Quick Company Checker", capturepilot: "Free eligibility check", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Market Intelligence", capturepilot: "USASpending data", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Deal Pipeline (Kanban CRM)", capturepilot: "Built-in Kanban", cpStatus: "yes", competitor: "Proposal workflow", compStatus: "yes" },
  { feature: "Partner Search", capturepilot: "SAM.gov companies", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Eligibility Check", capturepilot: "Set-aside matching", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "IDIQ/Contract Vehicle Tracking", capturepilot: "Included", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Email Alerts", capturepilot: "Daily notifications", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Competitor Intelligence", capturepilot: "Award history + incumbents", cpStatus: "yes", competitor: "Limited tracking", compStatus: "partial" },
  { feature: "Consulting Support Tier", capturepilot: "Managed service option", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Brand Color Extraction", capturepilot: "From your website", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Voice-to-Document", capturepilot: "Record, AI writes", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Free Tier Available", capturepilot: "Yes", cpStatus: "yes", competitor: "No", compStatus: "no" },
  { feature: "30-Day Free Trial (Pro)", capturepilot: "Yes", cpStatus: "yes", competitor: "Demo only", compStatus: "no" },
  { feature: "Shipley Methodology", capturepilot: "Not needed (AI drafts)", cpStatus: "text", competitor: "Built-in process", compStatus: "yes" },
  { feature: "Starting Price", capturepilot: "$199/mo flat", cpStatus: "text", competitor: "$50-150/user/mo", compStatus: "text" },
];

/* ------------------------------------------------------------------ */
/*  Discovery to Delivery pipeline                                     */
/* ------------------------------------------------------------------ */

const PIPELINE_STEPS = [
  {
    step: 1,
    icon: Search,
    label: "Discover",
    description: "Smart matching finds opportunities from 37K+ federal listings scored against your profile",
    cp: true,
    c2p: false,
  },
  {
    step: 2,
    icon: Target,
    label: "Qualify",
    description: "proprietary multi-factor algorithm scores every opportunity. Eligibility checks match you to set-asides",
    cp: true,
    c2p: false,
  },
  {
    step: 3,
    icon: Eye,
    label: "Intel",
    description: "Competitor intelligence, award history, incumbent analysis, market data from USASpending",
    cp: true,
    c2p: false,
  },
  {
    step: 4,
    icon: FileText,
    label: "Write",
    description: "AI drafts your proposal outline. Voice input builds your capability statement. Brand colors applied",
    cp: true,
    c2p: false,
  },
  {
    step: 5,
    icon: ClipboardCheck,
    label: "Review",
    description: "Color team reviews, compliance matrices, Shipley gates. The process management layer",
    cp: false,
    c2p: true,
  },
  {
    step: 6,
    icon: Rocket,
    label: "Submit",
    description: "Pipeline tracking, deal management, delivery coordination",
    cp: true,
    c2p: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Who Needs What                                                     */
/* ------------------------------------------------------------------ */

const C2P_BEST_FOR = [
  "Proposal shops with 10+ dedicated writers",
  "Established contractors with mature BD processes",
  "Teams that already have opportunity discovery covered",
  "Organizations following formal Shipley methodology",
  "Companies with separate capture and proposal teams",
  "Firms responding to 20+ proposals per quarter",
];

const CP_BEST_FOR = [
  "1-5 person teams doing everything themselves",
  "Veterans entering GovCon for the first time",
  "Companies that need to FIND opportunities, not just manage them",
  "Solo founders who can't hire a proposal team",
  "Lean teams that need AI to punch above their weight",
  "8(a), WOSB, HUBZone, and SDVOSB firms",
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

export default function VsCapture2ProposalPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cpMonthly = 199;
  const cpYearly = cpMonthly * 12;
  const c2pMinSeat = 50;
  const c2pMaxSeat = 150;
  const teamSize = 5;
  const c2pTeamMin = c2pMinSeat * teamSize;
  const c2pTeamMax = c2pMaxSeat * teamSize;
  const c2pTeamMinYearly = c2pTeamMin * 12;
  const c2pTeamMaxYearly = c2pTeamMax * 12;

  return (
    <>
      <SiteNav />
      <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />

      <title>CapturePilot vs Capture2Proposal — Compare Features & Pricing | CapturePilot</title>
      <meta
        name="description"
        content="Compare CapturePilot vs Capture2Proposal. AI drafts your proposals -- not just manages them. Full pipeline from opportunity discovery to submission for $199/mo flat."
      />
      <meta name="keywords" content="Capture2Proposal alternative, Capture2Proposal vs CapturePilot, proposal management software, GovCon proposal tools, AI proposal writer, Shipley methodology alternative" />
      <meta property="og:title" content="CapturePilot vs Capture2Proposal — AI Drafts Your Proposal, Not Just Manages It" />
      <meta property="og:description" content="Full pipeline from discovery to submission. AI-powered proposal drafting, smart matching, and capability statements. $199/mo flat vs per-seat pricing." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://capturepilot.com/vs/capture2proposal" />

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
              <Sparkles className="w-3.5 h-3.5" />
              Competitor Comparison
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white animate-fade-in-up animate-delay-100">
              AI <span className="gradient-text">Drafts</span> Your Proposal.{" "}
              <br className="hidden sm:block" />
              Not Just Manages It.
            </h1>

            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Capture2Proposal helps you manage the proposal process.
              CapturePilot&apos;s AI actually drafts the proposal -- and finds the opportunity in the first place.
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
                See how CapturePilot compares to Capture2Proposal across every capability
                that matters for winning government contracts.
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
                    Capture2Proposal
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
                    <span className={row.compStatus === "yes" ? "text-stone-700 font-medium" : row.compStatus === "partial" ? "text-amber-600 font-medium" : row.compStatus === "no" ? "text-stone-400" : "text-stone-600"}>
                      {row.competitor}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-400 text-center mt-4">
              Comparison based on publicly available information as of April 2026.
              Capture2Proposal is a trademark of its respective owner.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  DISCOVERY TO DELIVERY — Dark section                        */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-900">
          <div className="shimmer-bg pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Discovery to{" "}
                <span className="gradient-text">Delivery</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Capture2Proposal assumes you already found and qualified the opportunity.
                CapturePilot covers the <strong className="text-stone-200">entire pipeline</strong> from finding opportunities to drafting the proposal.
              </p>
            </div>

            <div className="space-y-4">
              {PIPELINE_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl p-6 flex items-start gap-5 animate-fade-in-up ${
                      step.cp && !step.c2p
                        ? "bg-gradient-to-r from-emerald-950/60 to-emerald-900/20 border border-emerald-700/40"
                        : step.c2p && !step.cp
                        ? "bg-stone-800/40 border border-stone-700/30"
                        : "bg-gradient-to-r from-emerald-950/40 to-stone-800/30 border border-emerald-800/30"
                    }`}
                    style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      step.cp ? "bg-emerald-600/20" : "bg-stone-700/50"
                    }`}>
                      <Icon className={`w-6 h-6 ${step.cp ? "text-emerald-400" : "text-stone-500"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          step.cp ? "bg-emerald-600/20 text-emerald-400" : "bg-stone-700/50 text-stone-500"
                        }`}>
                          Step {step.step}
                        </span>
                        <h3 className={`font-bold ${step.cp ? "text-emerald-300" : "text-stone-400"}`}>
                          {step.label}
                        </h3>
                        <div className="flex items-center gap-2 ml-auto">
                          {step.cp && (
                            <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full">
                              CapturePilot
                            </span>
                          )}
                          {step.c2p && (
                            <span className="text-xs font-medium text-stone-400 bg-stone-700/50 px-2 py-0.5 rounded-full">
                              C2P
                            </span>
                          )}
                          {!step.c2p && (
                            <span className="text-xs font-medium text-red-400 bg-red-950/30 px-2 py-0.5 rounded-full">
                              Not in C2P
                            </span>
                          )}
                        </div>
                      </div>
                      <p className={`text-sm leading-relaxed ${step.cp ? "text-emerald-200/60" : "text-stone-500"}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-stone-500 text-sm max-w-xl mx-auto">
                Capture2Proposal covers steps 5-6. CapturePilot covers steps 1-4 and 6 -- the parts most small businesses struggle with.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PRICING — Light with dot grid                                */}
        {/* ============================================================ */}
        <section className="relative py-24">
          <div className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                The Price{" "}
                <span className="gradient-text">Difference</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Capture2Proposal charges per seat -- costs add up fast for growing teams.
                CapturePilot is one flat price that includes AI drafting the proposals you would need separate writers for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* C2P pricing card */}
              <div className="bg-white border border-stone-200 rounded-2xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 bg-stone-300 text-stone-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  CAPTURE2PROPOSAL
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-stone-400 mb-1">Per user, per month</p>
                  <p className="text-4xl font-extrabold text-stone-800 tracking-tight">
                    ${c2pMinSeat}<span className="text-2xl text-stone-400"> - ${c2pMaxSeat}</span><span className="text-lg font-medium text-stone-400">/user/mo</span>
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Per-seat pricing model",
                    "Process management only",
                    "Does NOT write proposals",
                    "No opportunity discovery",
                    "No AI or smart matching",
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
                    ${c2pTeamMinYearly.toLocaleString()} - ${c2pTeamMaxYearly.toLocaleString()}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">+ you still need writers</p>
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
                    = ${cpYearly.toLocaleString()}/year -- AI drafting included
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Full team access included",
                    "AI drafts proposals for you",
                    "Finds opportunities automatically",
                    "Free tier + 30-day Pro trial",
                    "Discovery to submission in one tool",
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
                    ${(c2pTeamMinYearly - cpYearly).toLocaleString()} - ${(c2pTeamMaxYearly - cpYearly).toLocaleString()}
                  </p>
                  <p className="text-xs text-emerald-100 mt-1">+ no need for separate proposal writers</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700">
                  Save up to ${(c2pTeamMaxYearly - cpYearly).toLocaleString()}/year -- and the AI drafts the proposals too
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WHO NEEDS WHAT — Dark section                               */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950">
          <div className="shimmer-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Who Needs{" "}
                <span className="gradient-text">What</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Capture2Proposal was built for 10+ person proposal shops at established contractors.
                CapturePilot was built for lean teams that need to punch above their weight.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* C2P best for */}
              <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-8 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-stone-800 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-stone-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-200">Capture2Proposal</h3>
                    <p className="text-xs text-stone-500">Best for large proposal teams</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {C2P_BEST_FOR.map((item, i) => (
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
                    <p className="text-xs text-emerald-400 font-medium">Best for lean teams</p>
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
                { label: "vs Federal Compass", href: "/vs/federal-compass", icon: Target },
                { label: "vs Unison", href: "/vs/unison", icon: Users },
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
              Stop Managing Proposals.{" "}
              <span className="gradient-text">Start Drafting Them.</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              Let AI find the opportunities, score them, and draft the proposals.
              You focus on relationships and winning -- not process management.
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
