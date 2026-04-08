"use client";

import {
  Search,
  Target,
  FileText,
  Zap,
  CheckCircle2,
  XCircle,
  Minus,
  ArrowRight,
  Shield,
  Globe,
  TrendingUp,
  BarChart3,
  Mic,
  Columns3,
  Users,
  Bell,
  Sparkles,
  Clock,
  Check,
  MapPin,
  Award,
  ExternalLink,
  Building2,
  Handshake,
  Mail,
  Layers,
  CircleDollarSign,
  BadgeCheck,
  Database,
  Inbox,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static score bar (no animation)                                    */
/* ------------------------------------------------------------------ */
function ScoreBar({
  percent,
  color = "bg-emerald-500",
}: {
  percent: number;
  color?: string;
}) {
  return (
    <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Print Page                                                    */
/* ------------------------------------------------------------------ */
export default function ProductPresentationPrintPage() {
  return (
    <>
      {/* ============ PRINT STYLES ============ */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page {
            margin: 0;
            size: landscape;
          }
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          html, body {
            height: auto !important;
            overflow: visible !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-hidden {
            display: none !important;
          }
        }
      `,
        }}
      />

      {/* ============ TOP BAR (hidden in print) ============ */}
      <div className="print-hidden fixed top-4 right-4 z-50 flex gap-2">
        <a
          href="/presentations/product"
          className="bg-stone-200 text-stone-700 px-4 py-2 rounded-lg text-sm hover:bg-stone-300 transition-colors"
        >
          &larr; Interactive Version
        </a>
        <button
          onClick={() => window.print()}
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors"
        >
          Print / Save PDF
        </button>
      </div>

      {/* ================================================================= */}
      {/*  SLIDE 1 -- TITLE (dark)                                          */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        {/* grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-500/8 rounded-full blur-[120px]" />

        {/* emerald grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 text-center w-full px-16 lg:px-24">
          <div className="mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-stone-800 rounded-full">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-stone-300 tracking-[0.3em] uppercase text-sm font-light">
                CapturePilot
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-tight leading-[1.05] mb-10">
            Win Government Contracts.{" "}
            <span className="text-emerald-500 font-light">Faster.</span>
          </h1>

          <p className="text-stone-500 text-sm tracking-[0.25em] uppercase mb-20">
            Built for veteran-owned and small businesses
          </p>
        </div>

        <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-stone-800" />
        <div className="absolute bottom-8 right-20 w-20 h-20 border-r border-b border-stone-800" />
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 2 -- THE PROBLEM (light)                                   */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            The Problem
          </p>
          <h2 className="text-4xl md:text-6xl font-extralight text-stone-900 mb-6 leading-tight">
            This shouldn&apos;t be{" "}
            <span className="text-stone-400">this hard.</span>
          </h2>
          <div className="w-24 h-px bg-emerald-500/50 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Clock,
                title: "Hours on SAM.gov",
                desc: "Manual searches. Missed deadlines.",
              },
              {
                icon: Target,
                title: "No way to qualify",
                desc: "Which contracts actually fit you?",
              },
              {
                icon: FileText,
                title: "Proposals take weeks",
                desc: "Starting from scratch. Every time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-stone-50/80 border border-stone-100 rounded-2xl p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-stone-900 font-medium text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-stone-400 text-base">
              <span className="text-red-400 font-semibold text-2xl">90%</span>{" "}
              <span className="text-stone-500">
                of qualified small businesses never win a federal contract.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 3 -- THE SOLUTION (dark)                                   */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
          <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            The Solution
          </p>
          <h2 className="text-4xl md:text-7xl font-extralight text-white mb-6">
            One platform.{" "}
            <span className="text-emerald-500">Everything you need.</span>
          </h2>
          <div className="w-24 h-px bg-emerald-500/30 mx-auto mb-20" />

          <div className="grid grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {[
              { word: "Find", icon: Search },
              { word: "Qualify", icon: Target },
              { word: "Win", icon: Award },
            ].map((item) => (
              <div key={item.word} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-9 h-9 text-emerald-500" />
                </div>
                <p className="text-white text-3xl font-light">{item.word}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-0 max-w-[700px] mx-auto mt-[-80px] mb-[-20px] pointer-events-none">
            <div className="flex-1" />
            <ArrowRight className="w-6 h-6 text-emerald-500/30" />
            <div className="flex-1" />
            <ArrowRight className="w-6 h-6 text-emerald-500/30" />
            <div className="flex-1" />
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 4 -- SMART MATCHING (light)                                */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Smart Matching
              </p>
              <h2 className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                40,000+ opportunities.{" "}
                <span className="text-emerald-600">Only yours.</span>
              </h2>
              <div className="w-16 h-px bg-emerald-500/50 mb-8" />
              <p className="text-stone-500 text-base">
                Scored daily against your NAICS, set-asides, location, and past
                performance.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-stone-900 font-medium">Your Matches</h3>
                  <span className="text-emerald-600 text-sm font-medium">
                    47 new today
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Janitorial Services -- Fort Bragg",
                      naics: "561720",
                      score: 94,
                      badge: "HOT",
                      set: "SDVOSB",
                    },
                    {
                      title: "Grounds Maintenance -- JBSA",
                      naics: "561730",
                      score: 82,
                      badge: "HOT",
                      set: "SB",
                    },
                    {
                      title: "Custodial Services -- Pentagon",
                      naics: "561720",
                      score: 67,
                      badge: "WARM",
                      set: "8(a)",
                    },
                    {
                      title: "Pest Control -- NAS Pensacola",
                      naics: "561710",
                      score: 54,
                      badge: "WARM",
                      set: "SDVOSB",
                    },
                  ].map((opp) => (
                    <div
                      key={opp.title}
                      className="bg-white border border-stone-100 rounded-xl p-5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-stone-800 text-sm font-medium">
                            {opp.title}
                          </h4>
                          <div className="flex gap-2 mt-1.5">
                            <span className="text-stone-400 text-[10px] bg-stone-100 px-2 py-0.5 rounded font-mono">
                              {opp.naics}
                            </span>
                            <span className="text-emerald-600 text-[10px] bg-emerald-50 px-2 py-0.5 rounded font-medium">
                              {opp.set}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white ${
                            opp.badge === "HOT" ? "bg-red-500" : "bg-amber-500"
                          }`}
                        >
                          {opp.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <ScoreBar percent={opp.score} />
                        <span className="text-emerald-600 text-sm font-mono font-bold w-10 text-right">
                          {opp.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 5 -- SET-ASIDE MATCHING (dark)                             */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
          <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Set-Aside Matching
          </p>
          <h2 className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
            Contracts reserved{" "}
            <span className="text-emerald-500">for you.</span>
          </h2>
          <p className="text-stone-500 text-base mb-16">
            We match your certifications to set-aside requirements
            automatically.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {[
              {
                code: "SDVOSB",
                name: "Service-Disabled Veteran",
                color: "from-emerald-500/20 to-emerald-500/5",
                border: "border-emerald-500/30",
              },
              {
                code: "WOSB",
                name: "Women-Owned Small Business",
                color: "from-purple-500/20 to-purple-500/5",
                border: "border-purple-500/30",
              },
              {
                code: "8(a)",
                name: "SBA 8(a) Program",
                color: "from-blue-500/20 to-blue-500/5",
                border: "border-blue-500/30",
              },
              {
                code: "HUBZone",
                name: "Historically Underutilized",
                color: "from-amber-500/20 to-amber-500/5",
                border: "border-amber-500/30",
              },
            ].map((badge) => (
              <div
                key={badge.code}
                className={`bg-gradient-to-b ${badge.color} border ${badge.border} rounded-2xl p-8 text-center`}
              >
                <div className="w-16 h-16 rounded-full bg-stone-900/50 border border-stone-700/50 flex items-center justify-center mx-auto mb-5">
                  <Shield className="w-7 h-7 text-emerald-400" />
                </div>
                <p className="text-white text-xl font-semibold mb-2">
                  {badge.code}
                </p>
                <p className="text-stone-500 text-xs">{badge.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 inline-flex items-center gap-2 px-6 py-3 bg-stone-900 border border-stone-800 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-stone-400 text-sm">
              Auto-filters opportunities to your eligibility
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 6 -- AI PROPOSAL DRAFTS (dark)                             */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                AI Proposals
              </p>
              <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                First draft in{" "}
                <span className="text-emerald-500">15 minutes.</span>
              </h2>
              <p className="text-stone-500 text-base">
                AI generates. You refine.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <div className="flex items-center gap-3 px-5 py-3 border-b border-stone-800">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span className="text-white text-sm font-medium">
                    Proposal Draft
                  </span>
                  <span className="text-stone-600 text-xs ml-auto">
                    Auto-saving...
                  </span>
                </div>

                <div className="p-8 space-y-5">
                  {[
                    { label: "Cover Letter", done: true },
                    { label: "Executive Summary", done: true },
                    {
                      label: "Technical Approach",
                      done: false,
                      typing: true,
                    },
                    { label: "Past Performance", done: false },
                    { label: "Staffing Plan", done: false },
                    { label: "Pricing Volume", done: false },
                  ].map((section) => (
                    <div
                      key={section.label}
                      className="flex items-center gap-4"
                    >
                      {section.done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      ) : section.typing ? (
                        <Sparkles className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-stone-700 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          section.done
                            ? "text-stone-400 line-through"
                            : section.typing
                              ? "text-white font-medium"
                              : "text-stone-600"
                        }`}
                      >
                        {section.label}
                      </span>
                      {section.typing && (
                        <span className="text-emerald-500 text-xs ml-auto">
                          Generating...
                        </span>
                      )}
                    </div>
                  ))}

                  <div className="mt-6 pt-6 border-t border-stone-800">
                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-3">
                      Technical Approach -- Section 3.1
                    </p>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      Our team will leverage proven methodologies in facilities
                      maintenance to deliver comprehensive janitorial services
                      across all designated buildings
                      <span className="inline-block w-0.5 h-4 bg-emerald-500 ml-1 align-middle" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 7 -- MARKET INTELLIGENCE (light)                           */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
                <h3 className="text-stone-900 font-medium mb-8">
                  Top Agencies by Spend
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      agency: "Dept. of Veterans Affairs",
                      amount: "$2.4B",
                      pct: 92,
                    },
                    {
                      agency: "Dept. of Defense",
                      amount: "$1.8B",
                      pct: 75,
                    },
                    { agency: "GSA", amount: "$1.2B", pct: 55 },
                    {
                      agency: "Dept. of Homeland Security",
                      amount: "$890M",
                      pct: 40,
                    },
                    {
                      agency: "Dept. of Energy",
                      amount: "$620M",
                      pct: 28,
                    },
                  ].map((row) => (
                    <div key={row.agency}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-stone-700 text-sm">
                          {row.agency}
                        </span>
                        <span className="text-stone-500 text-sm font-mono">
                          {row.amount}
                        </span>
                      </div>
                      <ScoreBar percent={row.pct} color="bg-emerald-500" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-4 h-4 text-stone-400" />
                    <span className="text-stone-700 text-sm font-medium">
                      Top Incumbent
                    </span>
                  </div>
                  <div className="bg-white border border-stone-100 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-stone-800 font-medium">
                          CleanForce Solutions LLC
                        </p>
                        <p className="text-stone-400 text-sm">
                          14 awards | $18.2M total
                        </p>
                      </div>
                      <TrendingUp className="w-5 h-5 text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Market Intelligence
              </p>
              <h2 className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                Know your market{" "}
                <span className="text-emerald-600">before you bid.</span>
              </h2>
              <div className="w-16 h-px bg-emerald-500/50 mb-8" />

              <div className="space-y-5">
                {[
                  "Track agency spending trends",
                  "Identify incumbents and their history",
                  "Understand competitive landscape",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-stone-600 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 8 -- CAPABILITY STATEMENT (light)                          */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Capability Statement
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
              Record yourself.{" "}
              <span className="text-emerald-600">Get a cap statement.</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {/* Mic */}
            <div className="relative flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-stone-100 border-2 border-emerald-500/30 flex items-center justify-center">
                <Mic className="w-12 h-12 text-emerald-600" />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2">
              <div className="w-16 md:w-28 h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500" />
              <ArrowRight className="w-6 h-6 text-emerald-500" />
            </div>

            {/* Document result */}
            <div className="bg-white border border-stone-200 rounded-2xl p-8 w-80 shadow-xl">
              <div className="flex items-center gap-2 mb-5">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span className="text-stone-900 font-medium">
                  Capability Statement
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-stone-400 text-[10px] uppercase tracking-wider mb-1">
                    Company
                  </p>
                  <p className="text-stone-900 text-sm font-medium">
                    Acme Services LLC
                  </p>
                </div>
                <div>
                  <p className="text-stone-400 text-[10px] uppercase tracking-wider mb-1">
                    Core Competencies
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["Facility Mgmt", "HVAC", "Janitorial"].map((c) => (
                      <span
                        key={c}
                        className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="w-6 h-6 rounded bg-emerald-500" />
                  <div className="w-6 h-6 rounded bg-stone-300" />
                  <div className="w-6 h-6 rounded bg-amber-500" />
                  <span className="text-stone-400 text-[10px] self-center ml-1">
                    Brand colors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 9 -- VOICE-TO-DOCUMENT (dark)                              */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
          <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Voice-to-Document
          </p>
          <h2 className="text-4xl md:text-7xl font-extralight text-white mb-4 leading-tight">
            Talk.{" "}
            <span className="text-emerald-500">We write.</span>
          </h2>
          <p className="text-stone-500 text-base mb-16">
            Paste a transcript or upload an MP3. AI creates your document.
          </p>

          {/* Waveform -> Processing -> Document flow */}
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {/* Static waveform bars */}
            <div className="flex items-end gap-1 h-16">
              {[12, 20, 32, 40, 28, 36, 16, 24, 34, 20, 28, 12].map(
                (h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-emerald-500 rounded-full"
                    style={{ height: `${h}px` }}
                  />
                )
              )}
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2">
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500" />
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </div>

            {/* AI Processing */}
            <div className="w-20 h-20 rounded-2xl bg-stone-900 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Sparkles className="w-8 h-8 text-emerald-500" />
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2">
              <div className="w-12 md:w-20 h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500" />
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Document */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 w-52">
              <FileText className="w-6 h-6 text-emerald-500 mb-3" />
              <div className="space-y-2">
                <div className="h-2 bg-stone-700 rounded-full w-full" />
                <div className="h-2 bg-stone-700 rounded-full w-4/5" />
                <div className="h-2 bg-stone-700 rounded-full w-3/4" />
                <div className="h-2 bg-emerald-500/20 rounded-full w-2/3" />
              </div>
              <p className="text-emerald-400 text-[10px] mt-3 uppercase tracking-wider">
                Complete
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 10 -- DEAL PIPELINE (light)                                */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Deal Pipeline
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
              Discovery to{" "}
              <span className="text-emerald-600">award.</span>
            </h2>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 overflow-x-auto">
            <div className="grid grid-cols-4 gap-6 min-w-[800px]">
              {[
                {
                  col: "Discovered",
                  color: "bg-stone-400",
                  cards: [
                    { title: "IT Support -- USDA", value: "$180K" },
                    { title: "Network Infra -- DHS", value: "$320K" },
                  ],
                },
                {
                  col: "Reviewing",
                  color: "bg-blue-500",
                  cards: [
                    { title: "Cleaning -- VA Medical", value: "$450K" },
                    { title: "Guard Svc -- DoD", value: "$210K" },
                  ],
                },
                {
                  col: "Bidding",
                  color: "bg-amber-500",
                  cards: [{ title: "HVAC Maint -- GSA", value: "$890K" }],
                },
                {
                  col: "Won",
                  color: "bg-emerald-500",
                  glow: true,
                  cards: [
                    { title: "Janitorial -- Ft Bragg", value: "$1.2M" },
                  ],
                },
              ].map((column) => (
                <div key={column.col}>
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${column.color}`}
                    />
                    <span className="text-stone-700 font-medium">
                      {column.col}
                    </span>
                    <span className="text-stone-400 text-xs ml-auto">
                      {column.cards.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {column.cards.map((card) => (
                      <div
                        key={card.title}
                        className={`bg-white border rounded-xl p-5 ${
                          column.glow
                            ? "border-emerald-200 shadow-md shadow-emerald-100"
                            : "border-stone-100"
                        }`}
                      >
                        <h4 className="text-stone-800 text-sm font-medium mb-2">
                          {card.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-stone-400 text-xs">
                            {card.value}
                          </span>
                          {column.glow && (
                            <Award className="w-4 h-4 text-emerald-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 11 -- QUICK CHECKER (light)                                */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Quick Check
              </p>
              <h2 className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                Eligible in{" "}
                <span className="text-emerald-600">30 seconds. Free.</span>
              </h2>
              <p className="text-stone-500 text-base">
                Enter your website. Get NAICS codes, SAM status, and matches
                instantly.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm">
                {/* URL input */}
                <div className="bg-white border border-stone-200 rounded-xl px-5 py-4 flex items-center gap-3 mb-6">
                  <Globe className="w-5 h-5 text-stone-400 flex-shrink-0" />
                  <span className="text-stone-800 text-sm font-mono">
                    acme-services.com
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-500 text-xs">Complete</span>
                    <span className="text-emerald-600 text-xs font-mono">
                      100%
                    </span>
                  </div>
                  <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  {[
                    {
                      label: "SAM.gov Registration",
                      value: "Active",
                      icon: CheckCircle2,
                      color: "text-emerald-600",
                    },
                    {
                      label: "NAICS Codes",
                      value: "561720 | 561730 | 561710",
                      icon: Target,
                      color: "text-emerald-600",
                    },
                    {
                      label: "Set-Aside Eligibility",
                      value: "SDVOSB, Small Business",
                      icon: Shield,
                      color: "text-emerald-600",
                    },
                    {
                      label: "Matching Opportunities",
                      value: "47 found",
                      icon: Zap,
                      color: "text-amber-500",
                    },
                  ].map((result) => (
                    <div
                      key={result.label}
                      className="flex items-center gap-4 bg-white border border-stone-100 rounded-xl px-5 py-4"
                    >
                      <result.icon
                        className={`w-5 h-5 ${result.color} flex-shrink-0`}
                      />
                      <div className="flex-1">
                        <p className="text-stone-400 text-[10px] uppercase tracking-wider">
                          {result.label}
                        </p>
                        <p className="text-stone-800 text-sm font-medium">
                          {result.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 12 -- PARTNER SEARCH (light)                               */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Partner Search
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
              Find teaming partners{" "}
              <span className="text-emerald-600">instantly.</span>
            </h2>
          </div>

          <div className="max-w-[1000px] mx-auto">
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm">
              {/* Search */}
              <div className="bg-white border border-stone-200 rounded-xl px-5 py-4 flex items-center gap-3 mb-6">
                <Search className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <span className="text-stone-800 text-sm font-mono">
                  NAICS 237130 + SDVOSB
                </span>
                <span className="ml-auto text-stone-400 text-sm">
                  127 results
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Iron Ridge Construction LLC",
                    location: "Virginia Beach, VA",
                    certs: ["SDVOSB", "SB"],
                  },
                  {
                    name: "Patriot Infrastructure Group",
                    location: "Fayetteville, NC",
                    certs: ["SDVOSB", "8(a)"],
                  },
                  {
                    name: "Summit Civil Partners Inc",
                    location: "San Antonio, TX",
                    certs: ["SDVOSB"],
                  },
                ].map((company) => (
                  <div
                    key={company.name}
                    className="bg-white border border-stone-100 rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-stone-800 font-medium flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-stone-400" />
                          {company.name}
                        </h4>
                        <div className="flex items-center gap-1 mt-1 ml-6">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          <span className="text-stone-400 text-xs">
                            {company.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        {company.certs.map((c) => (
                          <span
                            key={c}
                            className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 13 -- EMAIL ALERTS (dark)                                  */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Email Alerts
              </p>
              <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                Never miss{" "}
                <span className="text-emerald-500">a deadline.</span>
              </h2>
              <p className="text-stone-500 text-base">
                Daily alerts for new HOT matches. Weekly digests. Deadline
                reminders.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Inbox className="w-5 h-5 text-emerald-500" />
                  <span className="text-white font-medium">Inbox</span>
                  <span className="text-emerald-500 text-xs bg-emerald-500/10 px-2 py-0.5 rounded-full ml-auto">
                    3 new
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      subject:
                        "HOT Match: Janitorial Services -- Fort Bragg",
                      preview: "Score: 94% | SDVOSB | Deadline: Apr 15",
                      time: "2m ago",
                      hot: true,
                    },
                    {
                      subject:
                        "New Match: Grounds Maintenance -- JBSA",
                      preview: "Score: 82% | Small Business | $450K",
                      time: "1h ago",
                      hot: false,
                    },
                    {
                      subject:
                        "Deadline Reminder: Cloud Migration -- GSA",
                      preview: "Proposal due in 3 days",
                      time: "3h ago",
                      hot: false,
                    },
                  ].map((email) => (
                    <div
                      key={email.subject}
                      className={`bg-stone-800/50 border rounded-xl p-5 ${
                        email.hot
                          ? "border-emerald-500/30"
                          : "border-stone-700/50"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Mail
                            className={`w-4 h-4 flex-shrink-0 ${
                              email.hot
                                ? "text-emerald-500"
                                : "text-stone-500"
                            }`}
                          />
                          <span className="text-white text-sm font-medium">
                            {email.subject}
                          </span>
                        </div>
                        <span className="text-stone-600 text-xs flex-shrink-0 ml-3">
                          {email.time}
                        </span>
                      </div>
                      <p className="text-stone-500 text-xs ml-6">
                        {email.preview}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <Bell className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-stone-500 text-xs">
                    Configured to your matching profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 14 -- ELIGIBILITY & IDIQ (light)                           */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Eligibility & Vehicles
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
              Know before you bid.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            {/* LEFT -- Eligibility Check */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-stone-900 font-medium">
                  Instant Eligibility
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { label: "NAICS Match", pass: true },
                  { label: "Set-Aside Eligible", pass: true },
                  { label: "Location Match", pass: true },
                  { label: "Value Fit", pass: true },
                  { label: "Security Clearance", pass: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    {item.pass ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                    <span
                      className={`text-sm ${
                        item.pass ? "text-stone-700" : "text-red-500"
                      }`}
                    >
                      {item.label}
                    </span>
                    {!item.pass && (
                      <span className="text-red-400/70 text-[10px] ml-auto uppercase tracking-wider">
                        Action needed
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200">
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="text-emerald-600 text-sm font-mono font-bold">
                    80%
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT -- IDIQ Vehicles */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-stone-900 font-medium">
                  IDIQ Contract Vehicles
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  { name: "GSA MAS", agency: "GSA", value: "$40B+" },
                  {
                    name: "OASIS+ Small Business",
                    agency: "GSA",
                    value: "$60B",
                  },
                  { name: "SEWP VI", agency: "NASA", value: "$15B" },
                  { name: "T4NG2", agency: "VA", value: "$12B" },
                ].map((vehicle) => (
                  <div
                    key={vehicle.name}
                    className="bg-white border border-stone-100 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-stone-800 text-sm font-medium">
                          {vehicle.name}
                        </h4>
                        <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">
                          {vehicle.agency}
                        </span>
                      </div>
                      <span className="text-emerald-600 text-sm font-mono font-bold">
                        {vehicle.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200 text-center">
                <p className="text-stone-500 text-xs">
                  We track{" "}
                  <span className="text-emerald-600 font-medium">
                    200+ active vehicles
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 15 -- DATA SOURCES (dark)                                  */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
          <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Data Sources
          </p>
          <h2 className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
            Powered by{" "}
            <span className="text-emerald-500">federal data.</span>
          </h2>
          <p className="text-stone-500 text-base mb-16">
            Aggregated daily. Scored automatically.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-3 gap-8 max-w-[900px] w-full">
              {[
                {
                  name: "SAM.gov",
                  desc: "37K+ opportunities",
                  icon: Globe,
                },
                {
                  name: "USASpending.gov",
                  desc: "Award & budget data",
                  icon: CircleDollarSign,
                },
                {
                  name: "FPDS.gov",
                  desc: "Past contract awards",
                  icon: Database,
                },
              ].map((source) => (
                <div
                  key={source.name}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <source.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <p className="text-white text-lg font-medium mb-1">
                    {source.name}
                  </p>
                  <p className="text-stone-500 text-sm">{source.desc}</p>
                </div>
              ))}
            </div>

            {/* Flowing arrows */}
            <div className="flex items-center gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-emerald-500/40 to-emerald-500" />
              <div className="w-px h-12 bg-gradient-to-b from-emerald-500/40 to-emerald-500" />
              <div className="w-px h-12 bg-gradient-to-b from-emerald-500/40 to-emerald-500" />
            </div>

            {/* CapturePilot funnel */}
            <div className="bg-stone-900 border-2 border-emerald-500/30 rounded-2xl px-12 py-6 inline-flex items-center gap-4">
              <Shield className="w-8 h-8 text-emerald-500" />
              <div className="text-left">
                <p className="text-white text-lg font-medium">CapturePilot</p>
                <p className="text-stone-500 text-sm">
                  Your intelligence engine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 16 -- COMPETITOR COMPARISON (dark)                         */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-12 lg:px-20 max-w-[1600px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Comparison
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
              See how we{" "}
              <span className="text-emerald-500">compare.</span>
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-9 gap-0 mb-1">
                <div className="p-3 text-stone-500 text-xs font-medium uppercase tracking-wider">
                  Feature
                </div>
                <div className="p-3 text-center rounded-t-xl bg-emerald-500/10 border-t-2 border-x border-emerald-500/50 border-stone-800">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    CapturePilot
                  </span>
                </div>
                {[
                  "GovWin",
                  "GovTribe",
                  "BGOV",
                  "HigherGov",
                  "Sweetspot",
                  "GovDash",
                  "EZGovOpps",
                ].map((name) => (
                  <div key={name} className="p-3 text-center">
                    <span className="text-stone-500 text-[10px] font-medium uppercase tracking-wider">
                      {name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rows */}
              {[
                {
                  feature: "AI Proposal Drafts",
                  cp: true,
                  values: [false, false, false, false, true, true, false],
                },
                {
                  feature: "Capability Statement",
                  cp: true,
                  values: [false, false, false, false, false, false, false],
                },
                {
                  feature: "Smart Matching",
                  cp: true,
                  values: [
                    "partial",
                    "partial",
                    false,
                    "partial",
                    true,
                    true,
                    false,
                  ],
                },
                {
                  feature: "Quick Checker (Free)",
                  cp: true,
                  values: [false, false, false, false, false, false, false],
                },
                {
                  feature: "Market Intelligence",
                  cp: true,
                  values: [
                    true,
                    "partial",
                    true,
                    true,
                    "partial",
                    "partial",
                    true,
                  ],
                },
                {
                  feature: "Deal Pipeline",
                  cp: true,
                  values: [false, false, false, false, true, true, false],
                },
                {
                  feature: "Consulting Support",
                  cp: true,
                  values: [false, false, false, false, false, false, false],
                },
                {
                  feature: "Voice-to-Document",
                  cp: true,
                  values: [false, false, false, false, false, false, false],
                },
              ].map((row, rowIdx) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-9 gap-0 ${
                    rowIdx % 2 === 0 ? "bg-stone-900/30" : ""
                  }`}
                >
                  <div className="p-3 flex items-center">
                    <span className="text-stone-300 text-xs font-medium">
                      {row.feature}
                    </span>
                  </div>
                  <div className="p-3 flex items-center justify-center bg-emerald-500/5 border-x border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  {row.values.map((val, i) => (
                    <div
                      key={i}
                      className="p-3 flex items-center justify-center"
                    >
                      {val === true ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500/60" />
                      ) : val === "partial" ? (
                        <Minus className="w-4 h-4 text-amber-400/70" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400/50" />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Price row */}
              <div className="grid grid-cols-9 gap-0 mt-1 border-t border-stone-800">
                <div className="p-3 flex items-center">
                  <span className="text-stone-300 text-xs font-bold">
                    Price
                  </span>
                </div>
                <div className="p-3 flex items-center justify-center bg-emerald-500/10 border-x border-b border-emerald-500/30 rounded-b-xl">
                  <span className="text-emerald-400 text-sm font-bold">
                    $199/mo
                  </span>
                </div>
                {[
                  "$8K+/yr",
                  "$600/yr",
                  "$7K+/yr",
                  "$1K+/yr",
                  "Custom",
                  "$500+/mo",
                  "$2.7K+/yr",
                ].map((price, i) => (
                  <div
                    key={i}
                    className="p-3 flex items-center justify-center"
                  >
                    <span className="text-stone-500 text-[11px] font-mono">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 17 -- EVERYTHING INCLUDED (light)                          */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              All-in-One
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
              16 features.{" "}
              <span className="text-emerald-600">$199/mo.</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full">
                Save 20% with yearly -- $159/mo
              </span>
              <span className="text-stone-400 text-sm">
                30-day free trial included
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {[
              { icon: Target, label: "Smart Matching" },
              { icon: Shield, label: "Set-Aside Match" },
              { icon: Sparkles, label: "AI Proposals" },
              { icon: BarChart3, label: "Market Intel" },
              { icon: FileText, label: "Cap Statement" },
              { icon: Mic, label: "Voice-to-Doc" },
              { icon: Columns3, label: "Deal Pipeline" },
              { icon: Handshake, label: "Partner Search" },
              { icon: Search, label: "Quick Checker" },
              { icon: Mail, label: "Email Alerts" },
              { icon: BadgeCheck, label: "Eligibility" },
              { icon: Layers, label: "IDIQ Tracking" },
              { icon: Database, label: "Federal Data" },
              { icon: Users, label: "Contact Intel" },
              { icon: TrendingUp, label: "Award History" },
              { icon: Bell, label: "Deadline Alerts" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="bg-stone-50 border border-stone-100 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-stone-700 text-sm font-medium">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 18 -- TRUST (dark)                                         */}
      {/* ================================================================= */}
      <section
        style={{ pageBreakAfter: "always", minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-stone-950 text-white"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Trusted
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
              Built by people who{" "}
              <span className="text-emerald-500">win contracts.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {[
              {
                stat: "37K+",
                label: "Federal opportunities tracked",
                icon: Target,
              },
              {
                stat: "80K+",
                label: "SAM-registered contractors",
                icon: Building2,
              },
              {
                stat: "91K+",
                label: "Government contacts indexed",
                icon: Users,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-10 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-emerald-500" />
                </div>
                <p className="text-4xl font-light text-white mb-2">
                  {item.stat}
                </p>
                <p className="text-stone-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900 border border-stone-800 rounded-full">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-stone-400 text-sm">
                Veteran-founded. Built in America. Updated daily.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/*  SLIDE 19 -- GET STARTED (light)                                  */}
      {/* ================================================================= */}
      <section
        style={{ minHeight: "100vh" }}
        className="flex items-center justify-center relative overflow-hidden bg-white text-stone-900"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-200 rounded-full">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-stone-500 tracking-[0.2em] uppercase text-xs">
                CapturePilot
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-7xl font-extralight text-stone-900 mb-6 leading-tight">
            Ready to win your first{" "}
            <span className="text-emerald-600">government contract?</span>
          </h2>

          <p className="text-stone-400 text-lg font-light mb-14">
            No credit card required. Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://app.capturepilot.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-emerald-500 text-white font-medium text-base"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://app.capturepilot.com/check"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl border border-stone-200 text-stone-700 font-medium text-base"
            >
              Check Your Company
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 border-t border-stone-100">
            <p className="text-stone-400 text-sm">
              CapturePilot -- A product by{" "}
              <span className="text-stone-600 font-medium">
                Americurial LLC
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
