"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Trophy,
  Database,
  Zap,
  CheckCircle2,
  XCircle,
  Activity,
  DollarSign,
  Building2,
  FileSearch,
  Radio,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

const AGENCIES = [
  { name: "DoD", spend: 92, color: "bg-emerald-500" },
  { name: "VA", spend: 78, color: "bg-sky-500" },
  { name: "DHS", spend: 65, color: "bg-violet-500" },
  { name: "HHS", spend: 54, color: "bg-amber-500" },
  { name: "GSA", spend: 41, color: "bg-rose-500" },
];

const FEATURES = [
  {
    icon: Building2,
    title: "Agency Spend Analysis",
    desc: "See which agencies spend the most in your NAICS codes. Drill into department-level budgets, historical allocations, and upcoming fiscal year projections so you target the buyers with real money.",
    stat: "24 agencies",
    statLabel: "tracked by NAICS",
  },
  {
    icon: Users,
    title: "Competitor Intelligence",
    desc: "Know exactly who wins contracts in your space. See their win rates, average contract values, set-aside utilization, and teaming patterns. Spot weaknesses and position your bids to win.",
    stat: "156+",
    statLabel: "competitors tracked",
  },
  {
    icon: Trophy,
    title: "Award History",
    desc: "Access past award data, incumbent contractors, contract values, and performance periods. Understand who held the contract before, what they charged, and when it comes up for recompete.",
    stat: "84",
    statLabel: "incumbents identified",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    desc: "Year-over-year spending trends by agency, NAICS, and set-aside type. See which markets are growing, which are shrinking, and where the next wave of opportunities will come from.",
    stat: "5yr",
    statLabel: "trend history",
  },
];

const DATA_SOURCES = [
  { name: "SAM.gov", desc: "40K+ live opportunities", icon: Database },
  { name: "USASpending.gov", desc: "Federal award data", icon: DollarSign },
  { name: "FPDS", desc: "Past performance records", icon: FileSearch },
  { name: "Award Notices", desc: "Incumbent intelligence", icon: Trophy },
];

const COMPARISON = [
  { label: "Find opportunities", guess: "Manually search SAM.gov", intel: "Auto-matched to your profile" },
  { label: "Know competitors", guess: "Google searches, word of mouth", intel: "Win rates, contract history, team data" },
  { label: "Price your bid", guess: "Gut feeling, rough estimates", intel: "Historical award values by NAICS" },
  { label: "Target agencies", guess: "Bid on everything, hope for best", intel: "Focus on top spenders in your space" },
  { label: "Track incumbents", guess: "No idea who has it now", intel: "Incumbent name, value, end date" },
  { label: "Spot trends", guess: "React to what's posted today", intel: "6-18 months early via Sources Sought" },
];

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Custom animations */}
      <style>{`
        @keyframes barGrow {
          from { height: 0%; }
          to { height: var(--bar-height); }
        }
        @keyframes donutFill {
          from { stroke-dashoffset: 251.2; }
          to { stroke-dashoffset: var(--donut-offset); }
        }
        @keyframes trendDraw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @keyframes flowRight {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .bar-animate {
          animation: barGrow 1.2s ease-out forwards;
          height: 0%;
        }
        .donut-animate {
          animation: donutFill 1.5s ease-out 0.5s forwards;
          stroke-dashoffset: 251.2;
        }
        .trend-animate {
          animation: trendDraw 2s ease-out 0.8s forwards;
          stroke-dashoffset: 300;
        }
        .metric-animate {
          animation: countUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .flow-line {
          animation: flowRight 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <BarChart3 className="w-4 h-4" />
            Market Intelligence
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Know Your Market<br />
            <span className="gradient-text">Before You Bid.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Stop guessing. CapturePilot analyzes billions in federal spending data to show you exactly where the money flows, who wins it, and how you can compete.
          </p>
          <div className="mt-8 animate-fade-in-up animate-delay-300">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Dashboard Visualization */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-stone-950 rounded-2xl p-6 sm:p-10 shadow-2xl border border-stone-800 overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 pulse-dot" />
                <span className="text-stone-400 text-sm font-medium">Live Market Intelligence Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 bg-stone-800 px-3 py-1 rounded-full">NAICS 561720</span>
                <span className="text-xs text-stone-500 bg-stone-800 px-3 py-1 rounded-full">FY2026</span>
              </div>
            </div>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "$847M", label: "Total Market", delay: "0.3s" },
                { value: "2,340", label: "Active Contracts", delay: "0.5s" },
                { value: "156", label: "Competitors Tracked", delay: "0.7s" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-stone-900 rounded-xl p-4 sm:p-5 text-center metric-animate"
                  style={{ animationDelay: m.delay }}
                >
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400">{m.value}</p>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bar Chart - Agency Spend */}
              <div className="bg-stone-900 rounded-xl p-5 md:col-span-1">
                <p className="text-sm font-semibold text-stone-300 mb-4">Top Agencies by Spend</p>
                <div className="flex items-end justify-between gap-2 h-40">
                  {AGENCIES.map((a, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div className="w-full relative h-32 flex items-end">
                        <div
                          className={`w-full ${a.color} rounded-t-md bar-animate`}
                          style={{
                            "--bar-height": `${a.spend}%`,
                            animationDelay: `${0.3 + i * 0.15}s`,
                          } as React.CSSProperties}
                        />
                      </div>
                      <span className="text-[10px] text-stone-500 mt-2 font-medium">{a.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut Chart - Market Share */}
              <div className="bg-stone-900 rounded-xl p-5 md:col-span-1 flex flex-col items-center justify-center">
                <p className="text-sm font-semibold text-stone-300 mb-4">Your Market Share</p>
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#292524"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      className="donut-animate"
                      style={{ "--donut-offset": "188.4" } as React.CSSProperties}
                    />
                    <circle
                      cx="50" cy="50" r="40"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      className="donut-animate"
                      style={{
                        "--donut-offset": "213",
                        animationDelay: "0.8s",
                      } as React.CSSProperties}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white">24%</span>
                    <span className="text-[10px] text-stone-500">addressable</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-stone-500">Set-Aside</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                    <span className="text-[10px] text-stone-500">Full & Open</span>
                  </div>
                </div>
              </div>

              {/* Trend Line */}
              <div className="bg-stone-900 rounded-xl p-5 md:col-span-1">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-stone-300">Spending Trend</p>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +18% YoY
                  </span>
                </div>
                <div className="h-32 flex items-end">
                  <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="200" y2="20" stroke="#292524" strokeWidth="0.5" />
                    <line x1="0" y1="40" x2="200" y2="40" stroke="#292524" strokeWidth="0.5" />
                    <line x1="0" y1="60" x2="200" y2="60" stroke="#292524" strokeWidth="0.5" />
                    {/* Gradient fill under the line */}
                    <defs>
                      <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,65 Q25,60 40,55 T80,45 T120,35 T160,22 T200,10 L200,80 L0,80 Z"
                      fill="url(#trendGradient)"
                      className="metric-animate"
                      style={{ animationDelay: "1s" }}
                    />
                    {/* Trend line */}
                    <path
                      d="M0,65 Q25,60 40,55 T80,45 T120,35 T160,22 T200,10"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="300"
                      className="trend-animate"
                    />
                    {/* End dot */}
                    <circle cx="200" cy="10" r="3" fill="#059669" className="metric-animate" style={{ animationDelay: "2.5s" }} />
                  </svg>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-stone-600">FY2022</span>
                  <span className="text-[10px] text-stone-600">FY2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              What You&apos;ll See
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Every data point you need to make smarter bid/no-bid decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-stone-200 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-6 h-6 text-stone-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">{f.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                      <Activity className="w-3 h-3" />
                      {f.stat} {f.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Powered by <span className="gradient-text">Real Data</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              We aggregate and normalize data from every major federal procurement source — so you don&apos;t have to.
            </p>
          </div>

          {/* Data source cards with connecting flow */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {DATA_SOURCES.map((src, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-2xl p-6 border border-stone-200 text-center hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <src.icon className="w-6 h-6 text-stone-700" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{src.name}</h3>
                  <p className="text-xs text-stone-500">{src.desc}</p>
                </div>
              ))}
            </div>

            {/* Flow animation - connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-stone-100 -z-10 mx-16">
              <div className="h-full w-1/3 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flow-line" />
            </div>
          </div>

          {/* Funnel into CapturePilot */}
          <div className="mt-10 flex flex-col items-center">
            <div className="flex items-center gap-2 text-stone-400 mb-4">
              <div className="w-8 h-px bg-stone-300" />
              <Radio className="w-4 h-4 pulse-dot text-emerald-500" />
              <div className="w-8 h-px bg-stone-300" />
            </div>
            <div className="bg-black text-white rounded-2xl px-8 py-4 inline-flex items-center gap-3 shadow-xl">
              <Zap className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="font-bold text-sm">CapturePilot Intelligence Engine</p>
                <p className="text-xs text-stone-400">Aggregated, scored, and delivered to your dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Guessing vs Intelligence */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Guessing vs. <span className="gradient-text">Intelligence-Driven</span> Bidding
            </h2>
            <p className="text-stone-500 text-lg">
              Most small businesses bid blind. You don&apos;t have to.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-stone-100 px-6 py-4 text-sm font-bold text-stone-600">
              <div>Task</div>
              <div className="text-center">Guessing</div>
              <div className="text-center">With CapturePilot</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 px-6 py-4 text-sm items-center ${
                  i < COMPARISON.length - 1 ? "border-b border-stone-100" : ""
                }`}
              >
                <div className="font-medium text-stone-800">{row.label}</div>
                <div className="text-center text-stone-400 flex items-center justify-center gap-2">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 hidden sm:block" />
                  <span className="text-xs sm:text-sm">{row.guess}</span>
                </div>
                <div className="text-center text-stone-700 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 hidden sm:block" />
                  <span className="text-xs sm:text-sm">{row.intel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Stop Bidding Blind.
          </h2>
          <p className="text-lg text-stone-400 mb-8 max-w-xl mx-auto">
            Get the same market intelligence that large defense contractors use — at a fraction of the cost. Free for 30 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SIGNUP_URL}
              className="bg-emerald-500 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-600 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="text-stone-400 px-8 py-4 rounded-full text-base font-bold hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
