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
  FileText,
  Shield,
  ChevronRight,
  Minus,
  Building2,
  Users,
  Target,
  BarChart3,
  Mic,
  BadgeCheck,
  Rocket,
  Star,
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
  { feature: "Smart Matching (140-point)", cpStatus: "yes", cpLabel: "140-point scoring", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Quick Eligibility Checker", cpStatus: "yes", cpLabel: "Instant check", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Market Intelligence", cpStatus: "yes", cpLabel: "Full intel suite", otherStatus: "yes", otherLabel: "Analyst reports" },
  { feature: "Deal Pipeline (Kanban)", cpStatus: "yes", cpLabel: "Built-in", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Partner Search", cpStatus: "yes", cpLabel: "1M+ contractors", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Eligibility / Set-Aside Matching", cpStatus: "yes", cpLabel: "Automatic", otherStatus: "no", otherLabel: "Not available" },
  { feature: "IDIQ / Vehicle Tracking", cpStatus: "yes", cpLabel: "Included", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Daily Email Alerts", cpStatus: "yes", cpLabel: "Smart scored alerts", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Competitor / Incumbent Intel", cpStatus: "yes", cpLabel: "Award + USASpending", otherStatus: "yes", otherLabel: "BGOV200 rankings" },
  { feature: "Consulting Support Tier", cpStatus: "yes", cpLabel: "Managed services", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Voice-to-Document", cpStatus: "yes", cpLabel: "Record & generate", otherStatus: "no", otherLabel: "Not available" },
  { feature: "Free Tier", cpStatus: "yes", cpLabel: "Yes", otherStatus: "no", otherLabel: "No" },
  { feature: "30-Day Free Trial", cpStatus: "yes", cpLabel: "Yes", otherStatus: "no", otherLabel: "No" },
  { feature: "Flat Pricing (no per-seat)", cpStatus: "yes", cpLabel: "$199/mo flat", otherStatus: "no", otherLabel: "$6K-$12K/yr per seat" },
];

/* ------------------------------------------------------------------ */
/*  Capture feature cards                                              */
/* ------------------------------------------------------------------ */

const CAPTURE_FEATURES = [
  {
    icon: Target,
    title: "Smart Matching Algorithm",
    desc: "140-point scoring across NAICS, PSC, set-asides, geography, past performance, and contract value. BGOV gives you a search bar.",
    href: "/features/matching",
  },
  {
    icon: FileText,
    title: "AI Proposal Writer",
    desc: "Generate full proposals in minutes — cover letter, technical approach, and past performance. BGOV has zero proposal tools.",
    href: "/features/proposals",
  },
  {
    icon: Mic,
    title: "Capability Statement Builder",
    desc: "Record yourself talking about your business and get a professional cap statement. BGOV does not offer anything like this.",
    href: "/features/capability-statement",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Track incumbents, award history, and spend trends by agency. BGOV focuses on legislative tracking that SMBs will never use.",
    href: "/features/intelligence",
  },
];

/* ------------------------------------------------------------------ */
/*  Cross-links                                                        */
/* ------------------------------------------------------------------ */

const CROSS_LINKS = [
  { label: "vs GovWin", href: "/vs/govwin" },
  { label: "vs GovTribe", href: "/vs/govtribe" },
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

export default function VsBGOV() {
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

      <title>CapturePilot vs BGOV (Bloomberg Government) — Compare Features & Pricing | CapturePilot</title>
      <meta
        name="description"
        content="Compare CapturePilot vs Bloomberg Government. BGOV costs $6K-$12K/yr and is built for lobbyists. CapturePilot is built for contractors who want to win contracts at $199/mo."
      />
      <meta name="keywords" content="BGOV alternative, Bloomberg Government vs CapturePilot, government contract software, GovCon tools, federal contracting platform, BGOV pricing" />
      <meta property="og:title" content="CapturePilot vs BGOV — Intelligence Without the Enterprise Price Tag" />
      <meta property="og:description" content="BGOV costs $6K-$12K/yr for legislative tracking. CapturePilot gives you AI capture tools at $199/mo. Free tier available." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://capturepilot.com/vs/bgov" />

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
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
              <Shield className="w-4 h-4" /> CapturePilot vs BGOV
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              Intelligence Without the<br />
              <span className="gradient-text">Enterprise Price Tag</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
              Bloomberg Government costs $6,000-$12,000+ per year and is built for lobbyists and law firms.
              CapturePilot is built for contractors who actually want to <strong className="text-stone-700">win contracts</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
              <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-stone-200">
                Start Free — 30 Days <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#comparison" className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors">
                See Full Comparison
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
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
              Feature-by-Feature <span className="text-emerald-400">Comparison</span>
            </h2>
            <p className="text-lg text-stone-400 text-center mb-12 max-w-2xl mx-auto">
              BGOV is a research terminal. CapturePilot is a capture management platform.
            </p>

            <div className="bg-stone-900/80 backdrop-blur rounded-2xl border border-stone-700 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-stone-700">
                <div className="p-4 text-sm font-bold text-stone-400 uppercase tracking-wider">Feature</div>
                <div className="p-4 text-center border-x border-emerald-500/30 bg-emerald-500/5 shadow-[inset_0_0_20px_rgba(16,185,129,0.08)]">
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">CapturePilot</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-sm font-bold text-stone-400 bg-stone-800 px-3 py-1 rounded-full">BGOV</span>
                </div>
              </div>

              {COMPARISON_ROWS.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-sm border-b border-stone-800 last:border-b-0 transition-colors hover:bg-stone-800/50 ${i % 2 === 0 ? "bg-transparent" : "bg-stone-800/20"}`}>
                  <div className="p-4 font-medium text-stone-300">{row.feature}</div>
                  <div className="p-4 flex items-center justify-center gap-2 border-x border-emerald-500/10">
                    <StatusIcon status={row.cpStatus} />
                    <span className={row.cpStatus === "yes" ? "text-emerald-400 font-medium" : "text-stone-400"}>{row.cpLabel}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center gap-2">
                    <StatusIcon status={row.otherStatus} />
                    <span className={row.otherStatus === "yes" ? "text-stone-300 font-medium" : row.otherStatus === "partial" ? "text-amber-400" : "text-stone-500"}>{row.otherLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-500 text-center mt-4">
              Comparison based on publicly available information as of April 2026.
              Bloomberg Government is a trademark of Bloomberg Industry Group, Inc.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BUILT FOR CAPTURE — light section with dot pattern          */}
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
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
              Built for <span className="gradient-text">Capture</span>, Not Just Reading
            </h2>
            <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
              BGOV helps you read about government. CapturePilot helps you win government contracts.
              Every feature is designed around one goal: increasing your probability of win.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CAPTURE_FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Link key={i} href={f.href} className="bg-white rounded-2xl p-8 border border-stone-200 hover-lift block group shadow-sm">
                    <Icon className="w-8 h-8 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{f.desc}</p>
                    <span className="text-xs font-bold text-emerald-600 mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PRICING COMPARISON — dark section with shimmer              */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
              Pricing: 95% Less. 10x More <span className="text-emerald-400">Useful</span>.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CapturePilot */}
              <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-2xl p-8 border-2 border-emerald-500 relative shadow-lg shadow-emerald-500/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">Recommended</div>
                <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">CapturePilot Pro</p>
                <p className="text-5xl font-black mb-1">$199<span className="text-lg font-medium text-stone-400">/mo</span></p>
                <p className="text-sm text-stone-400 mb-6">$2,388/year &middot; 30-day free trial</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited AI opportunity matching",
                    "AI Proposal Writer",
                    "Capability Statement Builder",
                    "Deal Pipeline & CRM",
                    "Market Intelligence & Incumbents",
                    "Partner Search (1M+ contractors)",
                    "Set-aside eligibility matching",
                    "Email alerts & notifications",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Link href={SIGNUP_URL} className="w-full bg-emerald-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors block text-center">
                  Start Free Trial <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </Link>
              </div>

              {/* BGOV */}
              <div className="bg-stone-900 rounded-2xl p-8 border border-stone-700">
                <p className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-2">Bloomberg Government</p>
                <p className="text-5xl font-black mb-1 text-stone-400">$6-12K<span className="text-lg font-medium">/yr</span></p>
                <p className="text-sm text-stone-500 mb-6">Enterprise pricing &middot; Annual contract required</p>
                <ul className="space-y-3 mb-8">
                  {[
                    { text: "Legislative tracking", has: true },
                    { text: "Budget analysis dashboards", has: true },
                    { text: "BGOV200 contractor rankings", has: true },
                    { text: "AI opportunity matching", has: false },
                    { text: "AI proposal writing", has: false },
                    { text: "Capture management tools", has: false },
                    { text: "Small business set-aside matching", has: false },
                    { text: "Consulting or onboarding support", has: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-400">
                      {item.has
                        ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        : <XCircle className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />}
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="w-full bg-stone-800 text-stone-500 py-3 rounded-xl font-bold text-sm text-center cursor-default">
                  Contact Sales
                </div>
              </div>
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
          <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
              Which One Is <span className="gradient-text">Right for You?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl p-8 border-2 border-emerald-200 bg-emerald-50/50 hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">CapturePilot</h3>
                    <p className="text-xs text-emerald-600 font-medium">Best for contractors</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Are a small or mid-size federal contractor",
                    "Want AI to find and score opportunities for you",
                    "Need proposal writing and capture tools",
                    "Want to track competitors and incumbents",
                    "Need set-aside matching (SDVOSB, WOSB, 8(a), HUBZone)",
                    "Want to pay $199/mo instead of $12,000/yr",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-8 border border-stone-200 bg-white hover-lift">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-stone-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">BGOV</h3>
                    <p className="text-xs text-stone-400">Best for policy & lobbying</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Are a lobbying firm or law practice",
                    "Need to track legislation and regulatory changes",
                    "Want budget forecasting and appropriations data",
                    "Are a Fortune 500 defense contractor",
                    "Have $12K+ per seat for a research terminal",
                    "Do not need capture or proposal tools",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-500">
                      <Star className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
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
            <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Stop Paying Enterprise Prices for Features You Will <span className="text-emerald-400">Never Use</span>
            </h2>
            <p className="text-lg text-stone-400 mb-8">
              CapturePilot gives you the capture tools, AI matching, and proposal writing that BGOV does not offer
              — at a fraction of the cost. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={SIGNUP_URL} className="bg-emerald-500 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-600 transition-all hover:scale-105 inline-flex items-center gap-2">
                Start Free — 30 Days <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={CHECK_URL} className="border border-stone-600 text-stone-300 px-8 py-4 rounded-full text-base font-bold hover:border-stone-400 hover:text-white transition-colors inline-flex items-center gap-2">
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
