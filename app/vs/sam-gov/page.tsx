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
  Clock,
  Search,
  Target,
  FileText,
  Shield,
  TrendingUp,
  ChevronRight,
  Minus,
  BarChart3,
  Mic,
  Bell,
  Gauge,
  Sparkles,
  Timer,
  AlertTriangle,
  Handshake,
  BadgeCheck,
  DollarSign,
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
  samStatus: RowStatus;
  samLabel: string;
  cpStatus: RowStatus;
  cpLabel: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "AI Proposal Writer", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Included" },
  { feature: "Capability Statement Builder (Voice)", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Voice-powered" },
  { feature: "Smart Matching (140-point)", samStatus: "no", samLabel: "Manual keyword search", cpStatus: "yes", cpLabel: "Auto-matched to profile" },
  { feature: "Quick Eligibility Checker", samStatus: "no", samLabel: "Manual research", cpStatus: "yes", cpLabel: "Instant verification" },
  { feature: "Market Intelligence", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Full intel suite" },
  { feature: "Deal Pipeline (Kanban)", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Built-in" },
  { feature: "Partner Search", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "1M+ contractors" },
  { feature: "Eligibility / Set-Aside Matching", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Automatic" },
  { feature: "IDIQ / Vehicle Tracking", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Included" },
  { feature: "Daily Email Alerts", samStatus: "partial", samLabel: "Basic (often missed)", cpStatus: "yes", cpLabel: "Smart scored alerts" },
  { feature: "Competitor / Incumbent Intel", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Award + USASpending" },
  { feature: "Consulting Support Tier", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Managed services" },
  { feature: "Voice-to-Document", samStatus: "no", samLabel: "Not available", cpStatus: "yes", cpLabel: "Record & generate" },
  { feature: "Free Tier", samStatus: "yes", samLabel: "Completely free", cpStatus: "yes", cpLabel: "Yes" },
  { feature: "30-Day Free Trial", samStatus: "yes", samLabel: "N/A (free)", cpStatus: "yes", cpLabel: "Yes" },
  { feature: "Flat Pricing (no per-seat)", samStatus: "yes", samLabel: "Free", cpStatus: "yes", cpLabel: "$199/mo flat" },
];

/* ------------------------------------------------------------------ */
/*  Cross-links                                                        */
/* ------------------------------------------------------------------ */

const CROSS_LINKS = [
  { label: "vs GovWin", href: "/vs/govwin" },
  { label: "vs GovTribe", href: "/vs/govtribe" },
  { label: "vs BGOV", href: "/vs/bgov" },
  { label: "vs HigherGov", href: "/vs/highergov" },
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
/*  SAM.gov Mockup                                                     */
/* ------------------------------------------------------------------ */

function SamMockup() {
  return (
    <div className="bg-gray-100 border-2 border-gray-300 rounded-lg overflow-hidden shadow-inner w-full">
      <div className="bg-[#1a4480] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="bg-white/20 rounded text-[10px] text-white/80 px-3 py-1 flex-1 font-mono truncate">
          sam.gov/search/?index=opp&sort=-modifiedDate&page=1
        </div>
      </div>

      <div className="bg-[#1a4480] border-t border-white/10 px-4 py-1.5 flex gap-4">
        <span className="text-[9px] text-white/60 uppercase tracking-wider">Home</span>
        <span className="text-[9px] text-white uppercase tracking-wider font-bold border-b border-white pb-0.5">Contract Opportunities</span>
        <span className="text-[9px] text-white/60 uppercase tracking-wider">Entity Info</span>
        <span className="text-[9px] text-white/60 uppercase tracking-wider">Assistance</span>
      </div>

      <div className="p-3 space-y-2">
        <div className="bg-white border border-gray-300 rounded p-2 space-y-1.5">
          <div className="flex gap-1.5">
            <div className="bg-gray-200 rounded px-2 py-1 text-[8px] text-gray-500 flex-1">Keyword search...</div>
            <div className="bg-[#1a4480] text-white rounded px-2 py-1 text-[8px] font-bold">Search</div>
          </div>
          <div className="flex gap-1 flex-wrap">
            {["Posted Date", "Type", "Set-Aside", "NAICS", "State", "Agency"].map((f) => (
              <span key={f} className="bg-gray-200 text-[7px] text-gray-500 px-1.5 py-0.5 rounded">{f} v</span>
            ))}
          </div>
        </div>

        <div className="text-[8px] text-gray-400 px-1">Showing 1 - 25 of 37,842 results</div>

        {[
          { title: "Janitorial Services - Bldg 401-A", status: "Solicitation", date: "Apr 02, 2026" },
          { title: "IT Support Services Multiple Award IDIQ", status: "Presolicitation", date: "Mar 28, 2026" },
          { title: "Grounds Maintenance Fort Liberty", status: "Sources Sought", date: "Apr 01, 2026" },
        ].map((opp, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded p-2 space-y-0.5">
            <div className="text-[9px] font-bold text-[#1a4480] leading-tight">{opp.title}</div>
            <div className="flex gap-2 text-[7px] text-gray-400">
              <span>Type: {opp.status}</span>
              <span>|</span>
              <span>Modified: {opp.date}</span>
            </div>
            <div className="text-[7px] text-gray-400 leading-snug">
              Department of Defense - Army - Mission Installation Contracting...
            </div>
          </div>
        ))}

        <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 rounded p-1.5">
          <AlertTriangle className="w-3 h-3 text-red-400 shrink-0" />
          <span className="text-[8px] text-red-500">No scoring. No match analysis. You must read every listing manually.</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CapturePilot Mockup                                                */
/* ------------------------------------------------------------------ */

function CpMockup() {
  return (
    <div className="bg-white border-2 border-emerald-300 rounded-lg overflow-hidden shadow-lg w-full">
      <div className="bg-stone-900 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="bg-white/10 rounded text-[10px] text-white/80 px-3 py-1 flex-1 font-mono truncate">
          app.capturepilot.com/dashboard
        </div>
      </div>

      <div className="bg-stone-900 border-t border-white/5 px-4 py-1.5 flex gap-4">
        <span className="text-[9px] text-emerald-400 uppercase tracking-wider font-bold">Dashboard</span>
        <span className="text-[9px] text-white/40 uppercase tracking-wider">Pipeline</span>
        <span className="text-[9px] text-white/40 uppercase tracking-wider">Proposals</span>
        <span className="text-[9px] text-white/40 uppercase tracking-wider">Intel</span>
      </div>

      <div className="p-3 space-y-2 bg-stone-50">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "HOT Matches", value: "12", color: "text-red-500" },
            { label: "WARM", value: "47", color: "text-amber-500" },
            { label: "Avg Score", value: "94", color: "text-emerald-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-lg border border-stone-200 p-2 text-center">
              <div className={`text-sm font-extrabold ${s.color}`}>{s.value}</div>
              <div className="text-[7px] text-stone-400">{s.label}</div>
            </div>
          ))}
        </div>

        {[
          { title: "Janitorial Services - Bldg 401-A", score: 112, tier: "HOT", tierColor: "bg-red-500" },
          { title: "Grounds Maintenance Fort Liberty", score: 98, tier: "HOT", tierColor: "bg-red-500" },
          { title: "IT Support Services IDIQ", score: 74, tier: "WARM", tierColor: "bg-amber-500" },
        ].map((opp, i) => (
          <div key={i} className="bg-white rounded-lg border border-stone-200 p-2 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[9px] font-bold text-stone-800 leading-tight flex-1 truncate">{opp.title}</div>
              <span className={`${opp.tierColor} text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full shrink-0`}>
                {opp.tier}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                  style={{ width: `${(opp.score / 140) * 100}%` }}
                />
              </div>
              <span className="text-[8px] font-bold text-emerald-600">{opp.score}/140</span>
            </div>
            <div className="flex gap-1 flex-wrap">
              {["NAICS Match", "Set-Aside", "Geo Fit"].map((tag) => (
                <span key={tag} className="bg-emerald-50 text-emerald-700 text-[6px] font-medium px-1.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 rounded p-1.5">
          <Sparkles className="w-3 h-3 text-emerald-500 shrink-0" />
          <span className="text-[8px] text-emerald-700">Auto-scored & ranked. Only showing opportunities you can win.</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / 40;
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById(`counter-${target}-${suffix}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, hasAnimated]);

  return (
    <span id={`counter-${target}-${suffix}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VsSamGovPage() {
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

      <title>CapturePilot vs SAM.gov Manual Search — Smart Matching on Top of SAM | CapturePilot</title>
      <meta
        name="description"
        content="SAM.gov has the data but terrible UX. CapturePilot adds 140-point scoring, smart matching, AI proposals, and eligibility checks on top of the same SAM.gov data. Save 19+ hours per week."
      />
      <meta name="keywords" content="SAM.gov alternative, SAM.gov search tool, government contract search, SAM.gov matching, federal contracting dashboard, SAM.gov UX, GovCon tools" />
      <meta property="og:title" content="CapturePilot vs SAM.gov — The Intelligence Layer SAM.gov Is Missing" />
      <meta property="og:description" content="Same data, 10x better experience. Smart matching, scoring, and AI proposals built on top of SAM.gov." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://capturepilot.com/vs/sam-gov" />

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

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              <Search className="w-3.5 h-3.5" />
              SAM.gov Intelligence Layer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              SAM.gov Has the Data.{" "}
              <span className="gradient-text">We Make It Work For You.</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              SAM.gov is free and official, but its search is painful. CapturePilot
              is the intelligence layer on top — same data, scored, matched,
              and ready to act on.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-stone-800 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CHECK_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-emerald-100 transition-colors"
              >
                Check Your Eligibility Free
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SIDE-BY-SIDE MOCKUP — dark section with shimmer             */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Same Data,{" "}
                <span className="text-emerald-400">Completely Different Experience</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Both platforms show federal opportunities from SAM.gov.
                One makes you do all the work. The other does it for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* SAM side */}
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                    <Search className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-300">SAM.gov</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider">Manual Search</p>
                  </div>
                </div>
                <SamMockup />
                <p className="text-xs text-stone-500 mt-3 text-center italic">
                  37,000+ results. No scoring. No matching. Good luck.
                </p>
              </div>

              {/* CP side */}
              <div className="animate-fade-in-up animate-delay-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-900 flex items-center justify-center">
                    <Target className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-300">CapturePilot</p>
                    <p className="text-[10px] text-emerald-400 uppercase tracking-wider font-medium">Smart Dashboard</p>
                  </div>
                </div>
                <CpMockup />
                <p className="text-xs text-emerald-400 mt-3 text-center font-medium">
                  Your best matches, scored and ranked. Ready in 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  COMPARISON TABLE — light section with dot pattern           */}
        {/* ============================================================ */}
        <section
          id="comparison"
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Feature-by-Feature{" "}
                <span className="gradient-text">Comparison</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                SAM.gov is a data source. CapturePilot is an intelligence engine
                built on top of that same data.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden animate-fade-in-up">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200">
                <div className="px-6 py-4 text-sm font-bold text-stone-500 uppercase tracking-wider">
                  Feature
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center">
                  <span className="text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    SAM.gov
                  </span>
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center border-x border-emerald-300/50 bg-emerald-50/50 shadow-[inset_0_0_20px_rgba(16,185,129,0.06)]">
                  <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    CapturePilot
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
                  <div className="px-6 py-3.5 text-sm font-medium text-stone-700 flex items-center">
                    {row.feature}
                  </div>
                  <div className="px-6 py-3.5 text-sm text-center flex items-center justify-center gap-2">
                    <StatusIcon status={row.samStatus} />
                    <span className={row.samStatus === "yes" ? "text-stone-700 font-medium" : row.samStatus === "no" ? "text-stone-400" : "text-amber-600 font-medium"}>
                      {row.samLabel}
                    </span>
                  </div>
                  <div className="px-6 py-3.5 text-sm text-center flex items-center justify-center gap-2 border-x border-emerald-200/30">
                    <StatusIcon status={row.cpStatus} />
                    <span className={row.cpStatus === "yes" ? "text-emerald-700 font-medium" : "text-stone-600"}>
                      {row.cpLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-400 text-center mt-4">
              SAM.gov is operated by the U.S. General Services Administration (GSA).
              CapturePilot is not affiliated with or endorsed by SAM.gov or GSA.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WE DON'T REPLACE SAM.GOV — dark section with shimmer       */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="bg-stone-900/80 backdrop-blur border border-stone-700 rounded-2xl p-8 md:p-12 animate-fade-in-up">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Handshake className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                    We Do Not Replace SAM.gov
                  </h2>
                  <p className="text-stone-400">
                    And we never will. Here is why.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  SAM.gov is the <strong className="text-white">official system of record</strong> for
                  federal contract opportunities. You still need it to register your entity,
                  submit bids, and maintain your certifications. That is not going to change.
                </p>
                <p>
                  What CapturePilot does is sit <strong className="text-white">on top</strong> of
                  SAM.gov. We ingest the same data every night, then apply a 140-point scoring
                  algorithm, match opportunities to your profile, and give you an intelligent
                  dashboard instead of a government search page from 2004.
                </p>
                <p>
                  Think of it this way: <strong className="text-white">SAM.gov is the library.
                  CapturePilot is your research assistant</strong> who already read every book and
                  highlighted the chapters that matter to you.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Shield, label: "SAM.gov remains your official registration", color: "text-blue-400", bg: "bg-blue-500/10" },
                  { icon: BarChart3, label: "We add scoring, matching & intelligence", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                  { icon: FileText, label: "Plus proposal tools SAM.gov will never have", color: "text-purple-400", bg: "bg-purple-500/10" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 bg-stone-800/50 rounded-xl border border-stone-700 p-4">
                      <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed font-medium">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  TIME SAVINGS — light section with dot pattern               */}
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
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                The Time You Are{" "}
                <span className="gradient-text">Wasting on SAM.gov</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Most small business owners spend 3-4 hours a day manually searching
                SAM.gov. CapturePilot reduces that to 10 minutes.
              </p>
            </div>

            {/* Time math */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-lg p-8 md:p-12 animate-fade-in-up">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Without */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">SAM.gov Manual</p>
                  <p className="text-5xl font-extrabold text-red-500 tracking-tight">
                    <AnimatedNumber target={4} suffix="hrs" />
                  </p>
                  <p className="text-sm text-stone-500 mt-1">per day searching</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-3">
                  <div className="hidden md:flex items-center gap-2">
                    <div className="h-px w-12 bg-stone-300" />
                    <ArrowRight className="w-5 h-5 text-emerald-500" />
                    <div className="h-px w-12 bg-stone-300" />
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
                    <p className="text-xs font-bold text-emerald-700">With CapturePilot</p>
                  </div>
                </div>

                {/* With */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-emerald-600" />
                  </div>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">CapturePilot</p>
                  <p className="text-5xl font-extrabold text-emerald-600 tracking-tight">
                    <AnimatedNumber target={10} suffix="min" />
                  </p>
                  <p className="text-sm text-stone-500 mt-1">per day reviewing</p>
                </div>
              </div>

              {/* Savings breakdown */}
              <div className="mt-12 pt-8 border-t border-stone-200">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  {[
                    { value: "3.8", unit: "hrs/day", label: "Time saved daily" },
                    { value: "19", unit: "hrs/week", label: "Time saved weekly" },
                    { value: "76", unit: "hrs/month", label: "Time saved monthly" },
                  ].map((stat, i) => (
                    <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                      <p className="text-3xl font-extrabold text-stone-800 tracking-tight">
                        {stat.value} <span className="text-lg text-emerald-600">{stat.unit}</span>
                      </p>
                      <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                  <p className="text-sm text-emerald-800 font-medium">
                    <strong>76 hours/month</strong> is almost <strong>2 full work weeks</strong>.
                    That is time you could spend writing proposals, meeting primes, or actually
                    running your business.
                  </p>
                </div>
              </div>
            </div>

            {/* What you do instead */}
            <div className="grid sm:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Timer, label: "SAM.gov auto-ingested nightly", desc: "37K+ opps scored" },
                { icon: Target, label: "Matched to your NAICS & certs", desc: "140-point scoring" },
                { icon: Bell, label: "Smart alerts for HOT matches", desc: "Never miss a deadline" },
                { icon: Mic, label: "Build cap statements by voice", desc: "Talk, don't type" },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-xl p-4 text-center hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-sm font-bold text-stone-800 mb-1">{card.label}</p>
                    <p className="text-xs text-stone-400">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA — dark section with shimmer                             */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Stop Searching.{" "}
              <span className="text-emerald-400">Start Winning.</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              SAM.gov will always be there. But you do not have to suffer through it
              alone. Let CapturePilot find, score, and surface the contracts you can
              actually win.
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
                className="inline-flex items-center justify-center gap-2 border border-emerald-500/30 text-emerald-400 px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-500/10 transition-colors"
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
                { label: "Quick Checker", href: "/features/quick-checker", icon: Shield },
                { label: "Capability Statement", href: "/features/capability-statement", icon: Mic },
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
