"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Target,
  MapPin,
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
  Search,
  Zap,
  BarChart3,
  CheckCircle2,
  XCircle,
  Scan,
  Brain,
  ListOrdered,
  UserCheck,
  ChevronRight,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

/* ------------------------------------------------------------------ */
/*  Mockup data                                                        */
/* ------------------------------------------------------------------ */

const MOCK_OPPORTUNITIES = [
  {
    title: "Janitorial Services",
    location: "Fort Bragg, NC",
    score: 94,
    tier: "HOT" as const,
    value: "$2.4M",
    naics: "561720",
    agency: "Dept. of the Army",
    setAside: "SDVOSB",
  },
  {
    title: "IT Support Services",
    location: "Pentagon, VA",
    score: 82,
    tier: "HOT" as const,
    value: "$890K",
    naics: "541512",
    agency: "Dept. of Defense",
    setAside: "8(a)",
  },
  {
    title: "Facility Maintenance",
    location: "VA Medical Center, Tampa",
    score: 67,
    tier: "WARM" as const,
    value: "$1.1M",
    naics: "561210",
    agency: "Dept. of Veterans Affairs",
    setAside: "SB",
  },
  {
    title: "Construction Management",
    location: "Naval Station Norfolk, VA",
    score: 45,
    tier: "COLD" as const,
    value: "$5.2M",
    naics: "236220",
    agency: "U.S. Navy",
    setAside: "Full & Open",
  },
  {
    title: "Security Guard Services",
    location: "GSA Building, Atlanta",
    score: 38,
    tier: "COLD" as const,
    value: "$680K",
    naics: "561612",
    agency: "General Services Admin.",
    setAside: "WOSB",
  },
];

const TIER_STYLES = {
  HOT: "bg-red-500/10 text-red-600 border-red-200",
  WARM: "bg-amber-500/10 text-amber-600 border-amber-200",
  COLD: "bg-blue-500/10 text-blue-500 border-blue-200",
};

const SCORE_BAR_COLORS = {
  HOT: "from-red-500 to-orange-400",
  WARM: "from-amber-400 to-yellow-300",
  COLD: "from-blue-400 to-sky-300",
};

/* ------------------------------------------------------------------ */
/*  Scoring factors                                                    */
/* ------------------------------------------------------------------ */

const SCORING_FACTORS = [
  {
    icon: Target,
    title: "NAICS Matching",
    weight: 25,
    color: "bg-emerald-500",
    description:
      "Matches your registered NAICS codes against opportunity requirements. Supports primary and secondary code alignment.",
  },
  {
    icon: ShieldCheck,
    title: "Set-Aside Matching",
    weight: 20,
    color: "bg-sky-500",
    description:
      "Identifies opportunities reserved for your business classifications: 8(a), SDVOSB, HUBZone, WOSB, and more.",
  },
  {
    icon: Award,
    title: "Past Performance",
    weight: 20,
    color: "bg-violet-500",
    description:
      "Evaluates notice types, incumbent data, and Sources Sought signals to gauge your competitive position.",
  },
  {
    icon: MapPin,
    title: "Geographic Matching",
    weight: 15,
    color: "bg-amber-500",
    description:
      "Scores proximity to the place of performance using your registered office locations and service areas.",
  },
  {
    icon: DollarSign,
    title: "Value Fit",
    weight: 15,
    color: "bg-pink-500",
    description:
      "Compares contract value against your revenue history and bonding capacity to ensure realistic pursuit targets.",
  },
  {
    icon: Clock,
    title: "Deadline Scoring",
    weight: 10,
    color: "bg-stone-500",
    description:
      "Prioritizes opportunities with enough lead time for quality proposal development. Early-stage notices score higher.",
  },
];

/* ------------------------------------------------------------------ */
/*  Timeline steps                                                     */
/* ------------------------------------------------------------------ */

const TIMELINE_STEPS = [
  {
    icon: UserCheck,
    title: "Profile Analysis",
    subtitle: "Your DNA, digitized",
    description:
      "We ingest your NAICS codes, certifications, set-aside eligibilities, geographic footprint, past performance history, and revenue range to build a precise matching profile.",
  },
  {
    icon: Scan,
    title: "Opportunity Scanning",
    subtitle: "40,000+ daily, zero effort",
    description:
      "Every day at 02:00 UTC, our pipeline pulls fresh opportunities from SAM.gov, including Sources Sought notices, Presolicitations, and active Solicitations across all agencies.",
  },
  {
    icon: Brain,
    title: "Smart Scoring",
    subtitle: "140-point algorithm",
    description:
      "Each opportunity is scored against your profile using six weighted factors and bonus signals like incumbent risk assessment, notice type priority, and past performance indicators.",
  },
  {
    icon: ListOrdered,
    title: "Ranked Results",
    subtitle: "HOT / WARM / COLD",
    description:
      "Opportunities are classified and ranked so you focus energy on the best-fit contracts first. HOT matches (70+) are your highest probability wins.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MatchingFeaturePage() {
  const [mounted, setMounted] = useState(false);
  const [visibleRows, setVisibleRows] = useState(0);
  const [showBars, setShowBars] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    // stagger opportunity rows
    const timers: NodeJS.Timeout[] = [];
    MOCK_OPPORTUNITIES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleRows((v) => Math.max(v, i + 1)), 600 + i * 350));
    });

    // trigger score bar fills after rows appear
    timers.push(setTimeout(() => setShowBars(true), 600 + MOCK_OPPORTUNITIES.length * 350 + 200));

    // timeline connector animation
    timers.push(setTimeout(() => setTimelineProgress(100), 400));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SiteNav />

      {/* ---- Inline styles for page-specific animations ---- */}
      <style jsx global>{`
        @keyframes scoreBarFill {
          from { width: 0%; }
          to { width: var(--bar-width); }
        }
        .score-bar-fill {
          animation: scoreBarFill 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          width: 0%;
        }
        @keyframes pulseBadge {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .badge-pulse {
          animation: pulseBadge 2s ease-in-out infinite;
        }
        @keyframes slideInRow {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .row-slide-in {
          animation: slideInRow 0.5s ease-out forwards;
        }
        @keyframes growTimeline {
          from { height: 0%; }
          to { height: 100%; }
        }
        .timeline-connector {
          animation: growTimeline 2s ease-out forwards;
          height: 0%;
        }
        @keyframes numberCount {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .number-pop {
          animation: numberCount 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-bg {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <main className="pt-16">
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white py-24 md:py-32">
          {/* subtle grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
                <Zap className="w-3.5 h-3.5" />
                Smart Matching Engine
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
                Stop Searching.{" "}
                <span className="gradient-text">Start Matching.</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-500 leading-relaxed animate-fade-in-up animate-delay-200">
                Our 140-point scoring algorithm analyzes 40,000+ federal
                opportunities daily and surfaces the contracts you can actually
                win &mdash; ranked, scored, and ready to pursue.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-stone-800 transition-colors"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-stone-100 text-stone-700 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-stone-200 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* ---- Animated Dashboard Mockup ---- */}
            <div className="max-w-4xl mx-auto animate-fade-in-up animate-delay-300">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200/60 overflow-hidden">
                {/* Fake title bar */}
                <div className="bg-stone-50 border-b border-stone-200/60 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs text-stone-400 font-medium ml-2">
                      app.capturepilot.com/matches
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live &mdash; Updated 2 min ago
                  </div>
                </div>

                {/* Column headers */}
                <div className="px-6 py-3 border-b border-stone-100 grid grid-cols-12 gap-4 text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  <div className="col-span-4">Opportunity</div>
                  <div className="col-span-1 text-center">NAICS</div>
                  <div className="col-span-1 text-center">Set-Aside</div>
                  <div className="col-span-1 text-right">Value</div>
                  <div className="col-span-3 text-center">Score</div>
                  <div className="col-span-2 text-center">Status</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-stone-100">
                  {MOCK_OPPORTUNITIES.map((opp, i) => (
                    <div
                      key={i}
                      className={`px-6 py-4 grid grid-cols-12 gap-4 items-center transition-all ${
                        i < visibleRows ? "row-slide-in" : "opacity-0"
                      } ${i === 0 ? "bg-red-50/30" : ""}`}
                    >
                      {/* Opportunity info */}
                      <div className="col-span-4">
                        <p className="font-semibold text-sm text-stone-800 truncate">
                          {opp.title}
                        </p>
                        <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          {opp.location}
                        </p>
                        <p className="text-[10px] text-stone-300 mt-0.5">
                          {opp.agency}
                        </p>
                      </div>

                      {/* NAICS */}
                      <div className="col-span-1 text-center">
                        <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                          {opp.naics}
                        </span>
                      </div>

                      {/* Set-Aside */}
                      <div className="col-span-1 text-center">
                        <span className="text-[10px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                          {opp.setAside}
                        </span>
                      </div>

                      {/* Value */}
                      <div className="col-span-1 text-right">
                        <span className="text-sm font-semibold text-stone-700">
                          {opp.value}
                        </span>
                      </div>

                      {/* Score bar */}
                      <div className="col-span-3 flex items-center gap-3">
                        <div className="flex-1 bg-stone-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${SCORE_BAR_COLORS[opp.tier]} ${
                              showBars ? "score-bar-fill" : ""
                            }`}
                            style={
                              { "--bar-width": `${opp.score}%` } as React.CSSProperties
                            }
                          />
                        </div>
                        <span className="text-sm font-bold text-stone-700 w-8 text-right tabular-nums">
                          {opp.score}
                        </span>
                      </div>

                      {/* Tier badge */}
                      <div className="col-span-2 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border ${
                            TIER_STYLES[opp.tier]
                          } ${opp.tier === "HOT" ? "badge-pulse" : ""}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              opp.tier === "HOT"
                                ? "bg-red-500"
                                : opp.tier === "WARM"
                                ? "bg-amber-500"
                                : "bg-blue-400"
                            }`}
                          />
                          {opp.tier}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="bg-stone-50 border-t border-stone-200/60 px-6 py-3 flex items-center justify-between">
                  <p className="text-xs text-stone-400">
                    Showing <span className="font-bold text-stone-600">5</span>{" "}
                    of <span className="font-bold text-stone-600">127</span>{" "}
                    matches
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" /> 10
                      HOT
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" /> 43
                      WARM
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400" /> 74
                      COLD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WITHOUT vs WITH                                             */}
        {/* ============================================================ */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                The Old Way vs.{" "}
                <span className="gradient-text">The CapturePilot Way</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Most small businesses spend 15+ hours per week manually
                searching SAM.gov. Here&apos;s what that looks like &mdash; and
                what it could look like.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Without */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-stone-200 text-stone-500 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  WITHOUT
                </div>
                <h3 className="text-lg font-bold text-stone-400 mb-6 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Manual SAM.gov Searching
                </h3>
                <ul className="space-y-4">
                  {[
                    "Manually search SAM.gov daily with keyword guesswork",
                    "Scroll through 500+ irrelevant results per session",
                    "No scoring — every opportunity looks the same",
                    "Miss Sources Sought notices (your best early signals)",
                    "No incumbent data — bid blind against unknowns",
                    "Waste proposals on contracts you can't win",
                    "15+ hours/week just finding opportunities",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-stone-400"
                    >
                      <XCircle className="w-4 h-4 text-stone-300 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* With */}
              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-200/60 rounded-2xl p-8 relative overflow-hidden shadow-lg shadow-emerald-100/50">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  WITH CAPTUREPILOT
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Smart Matching Engine
                </h3>
                <ul className="space-y-4">
                  {[
                    "Automated daily scans across all SAM.gov notice types",
                    "Only see opportunities matched to YOUR profile",
                    "140-point scoring with HOT/WARM/COLD ranking",
                    "Sources Sought flagged with +20 priority bonus",
                    "Incumbent identification via award notice analysis",
                    "Focus proposals only on high-probability wins",
                    "< 5 minutes/day reviewing your ranked matches",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-emerald-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  HOW MATCHING WORKS — Vertical Timeline                      */}
        {/* ============================================================ */}
        <section id="how-it-works" className="py-24 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                How <span className="gradient-text">Matching</span> Works
              </h2>
              <p className="text-stone-500 max-w-xl mx-auto">
                From profile to ranked results in four automated steps. No
                manual searching required.
              </p>
            </div>

            <div className="relative">
              {/* Animated vertical connector line */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-stone-200">
                <div
                  className="w-full bg-gradient-to-b from-emerald-400 to-sky-400 timeline-connector"
                  style={{ height: `${timelineProgress}%` }}
                />
              </div>

              <div className="space-y-16">
                {TIMELINE_STEPS.map((step, i) => {
                  const Icon = step.icon;
                  const isLeft = i % 2 === 0;
                  return (
                    <div
                      key={i}
                      className={`relative flex items-start gap-8 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Center dot */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-emerald-500 z-10 shadow-sm" />

                      {/* Content card */}
                      <div
                        className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                          isLeft ? "md:pr-0" : "md:pl-0"
                        } animate-fade-in-up`}
                        style={{ animationDelay: `${i * 200}ms`, opacity: 0 }}
                      >
                        <div className="bg-white rounded-xl border border-stone-200 p-6 hover-lift">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                                Step {i + 1}
                              </p>
                              <h3 className="font-bold text-stone-800">
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-xs font-semibold text-stone-400 mb-2">
                            {step.subtitle}
                          </p>
                          <p className="text-sm text-stone-500 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SCORING FACTOR GRID                                         */}
        {/* ============================================================ */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                6 Factors.{" "}
                <span className="gradient-text">140 Points.</span> One Score.
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Every opportunity is evaluated against your profile using six
                weighted factors. The result is a single, actionable score that
                tells you exactly where to focus.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCORING_FACTORS.map((factor, i) => {
                const Icon = factor.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-xl p-6 hover-lift animate-fade-in-up"
                    style={{
                      animationDelay: `${i * 100}ms`,
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-stone-600" />
                      </div>
                      <span className="text-2xl font-extrabold text-stone-200">
                        {factor.weight}%
                      </span>
                    </div>
                    <h3 className="font-bold text-stone-800 mb-1">
                      {factor.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed mb-4">
                      {factor.description}
                    </p>
                    {/* Weight bar */}
                    <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${factor.color} score-bar-fill`}
                        style={
                          {
                            "--bar-width": `${factor.weight * 4}%`,
                            animationDelay: `${0.8 + i * 0.15}s`,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  STATS                                                       */}
        {/* ============================================================ */}
        <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 shimmer-bg" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "40,000+", label: "Opportunities Scanned Daily" },
                { value: "892", label: "NAICS Codes Tracked" },
                { value: "6", label: "Scoring Factors" },
                { value: "Daily", label: "Automated Updates" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="number-pop"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <p className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA                                                         */}
        {/* ============================================================ */}
        <section className="py-24 bg-gradient-to-b from-white to-stone-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Ready to Find Contracts{" "}
              <span className="gradient-text">You Can Win?</span>
            </h2>
            <p className="text-stone-500 text-lg mb-8 max-w-xl mx-auto">
              Stop wasting hours on SAM.gov. Let our matching engine surface your
              best-fit federal opportunities every morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-stone-800 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-600 px-8 py-4 rounded-full font-bold text-base hover:border-stone-400 hover:text-black transition-colors"
              >
                View Pricing <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-stone-400 mt-6">
              No credit card required. Free tier available.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
