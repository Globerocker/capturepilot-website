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
  Target,
  BarChart3,
  Layers,
  Users,
  Mic,
  Crosshair,
  Globe,
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
  { feature: "Free Tier", cpStatus: "yes", cpLabel: "Yes", otherStatus: "partial", otherLabel: "Very limited" },
  { feature: "30-Day Free Trial", cpStatus: "yes", cpLabel: "Yes", otherStatus: "no", otherLabel: "No" },
  { feature: "Flat Pricing (no per-seat)", cpStatus: "yes", cpLabel: "$199/mo flat", otherStatus: "no", otherLabel: "$99-$199/mo per seat" },
];

/* ------------------------------------------------------------------ */
/*  Depth feature cards                                                */
/* ------------------------------------------------------------------ */

const DEPTH_FEATURES = [
  {
    icon: Target,
    title: "140-Point Matching Algorithm",
    desc: "We score every opportunity across NAICS, PSC, set-asides, geography, contract value, past performance, and incumbent risk. HigherGov gives you keyword search.",
    href: "/features/matching",
    tag: "Matching",
  },
  {
    icon: FileText,
    title: "AI Proposal Writer",
    desc: "Generate proposal drafts with cover letter outlines, technical approach frameworks, and past performance structures. HigherGov has no writing tools at all.",
    href: "/features/proposals",
    tag: "AI",
  },
  {
    icon: Mic,
    title: "Capability Statement Builder",
    desc: "Record a voice memo about your business and get a branded capability statement with colors pulled from your website. Unique to CapturePilot.",
    href: "/features/capability-statement",
    tag: "Builder",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Track incumbents, award history, and agency spend trends powered by USASpending data. Know who you are competing against before you bid.",
    href: "/features/intelligence",
    tag: "Intel",
  },
  {
    icon: Layers,
    title: "Deal Pipeline",
    desc: "Kanban board to track opportunities from discovery to award. Custom stages, notes, and team collaboration. HigherGov has no pipeline management.",
    href: "/features/pipeline",
    tag: "CRM",
  },
  {
    icon: Users,
    title: "Partner Search",
    desc: "Search 1M+ SAM-registered contractors for teaming partners. Filter by NAICS, certifications, location, and readiness score.",
    href: "#",
    tag: "Network",
  },
];

/* ------------------------------------------------------------------ */
/*  Cross-links                                                        */
/* ------------------------------------------------------------------ */

const CROSS_LINKS = [
  { label: "vs GovWin", href: "/vs/govwin" },
  { label: "vs GovTribe", href: "/vs/govtribe" },
  { label: "vs BGOV", href: "/vs/bgov" },
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

export default function VsHigherGov() {
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

      <title>CapturePilot vs HigherGov — Deep Federal Focus vs Broad & Shallow | CapturePilot</title>
      <meta
        name="description"
        content="Compare CapturePilot vs HigherGov. HigherGov covers federal, state, local, and grants but goes deep on none. CapturePilot goes all-in on federal with AI tools to help you win."
      />
      <meta name="keywords" content="HigherGov alternative, HigherGov vs CapturePilot, government contract software, GovCon capture tools, federal contracting platform" />
      <meta property="og:title" content="CapturePilot vs HigherGov — Federal Focus Beats Broad & Shallow" />
      <meta property="og:description" content="HigherGov covers everything broadly. CapturePilot goes deep on federal contracting with AI matching, proposals, and capture tools." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://capturepilot.com/vs/highergov" />

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
              <Shield className="w-4 h-4" /> CapturePilot vs HigherGov
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
              Federal Focus Beats<br />
              <span className="gradient-text">Broad & Shallow</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
              HigherGov covers federal, state, local, and grants — but goes deep on none of them.
              CapturePilot goes all-in on federal contracting with AI tools that <strong className="text-stone-700">actually help you win</strong>.
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
              HigherGov is a search database. CapturePilot is a capture management platform with AI.
            </p>

            <div className="bg-stone-900/80 backdrop-blur rounded-2xl border border-stone-700 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-3 border-b border-stone-700">
                <div className="p-4 text-sm font-bold text-stone-400 uppercase tracking-wider">Feature</div>
                <div className="p-4 text-center border-x border-emerald-500/30 bg-emerald-500/5 shadow-[inset_0_0_20px_rgba(16,185,129,0.08)]">
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">CapturePilot</span>
                </div>
                <div className="p-4 text-center">
                  <span className="text-sm font-bold text-stone-400 bg-stone-800 px-3 py-1 rounded-full">HigherGov</span>
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
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  DEPTH vs BREADTH — light section with dot pattern           */}
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
              <span className="gradient-text">Depth</span> vs Breadth
            </h2>
            <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
              HigherGov tries to cover everything: federal, state, local, and grants.
              CapturePilot specializes in federal contracting and gives you the AI-powered tools
              to actually win — not just find — opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* CapturePilot column */}
              <div className="rounded-2xl p-8 border-2 border-emerald-200 bg-emerald-50/50 shadow-lg shadow-emerald-100/50">
                <div className="flex items-center gap-3 mb-6">
                  <Crosshair className="w-7 h-7 text-emerald-600" />
                  <div>
                    <p className="font-black text-lg">CapturePilot</p>
                    <p className="text-sm text-emerald-600 font-medium">Deep federal specialization</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "AI scores every opportunity against your profile",
                    "Drafts proposals and capability statements",
                    "Tracks incumbents and award history",
                    "Matches set-aside eligibility automatically",
                    "Full deal pipeline from discovery to award",
                    "Consulting services for managed clients",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* HigherGov column */}
              <div className="rounded-2xl p-8 border border-stone-200 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-7 h-7 text-stone-400" />
                  <div>
                    <p className="font-black text-lg">HigherGov</p>
                    <p className="text-sm text-stone-400">Broad but surface-level</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Federal, state, and local opportunity search",
                    "Grants database included",
                    "Basic contractor profiles",
                    "No AI matching or scoring",
                    "No proposal or capture tools",
                    "No consulting or managed services",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-500">
                      <Minus className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FEATURE CARDS — dark section with shimmer                   */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
              What You Get with <span className="text-emerald-400">CapturePilot</span>
            </h2>
            <p className="text-lg text-stone-400 text-center mb-12 max-w-2xl mx-auto">
              Tools built to help you win federal contracts — not just browse them.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPTH_FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Link key={i} href={f.href} className="bg-stone-900 border border-stone-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all block group">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-5 h-5 text-emerald-400" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">{f.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">{f.title}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed">{f.desc}</p>
                    {f.href !== "#" && (
                      <span className="text-xs font-bold text-emerald-400 mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PRICING — light section with dot pattern                    */}
        {/* ============================================================ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
              Similar Price. Far More <span className="gradient-text">Features</span>.
            </h2>
            <p className="text-lg text-stone-500 text-center mb-12 max-w-2xl mx-auto">
              At the same price point, CapturePilot gives you AI tools, capture management, and consulting
              that HigherGov simply does not offer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CapturePilot */}
              <div className="bg-black text-white rounded-2xl p-8 border-2 border-emerald-500 relative shadow-lg shadow-emerald-100/30">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">More Features</div>
                <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">CapturePilot Pro</p>
                <p className="text-5xl font-black mb-1">$199<span className="text-lg font-medium text-stone-400">/mo</span></p>
                <p className="text-sm text-stone-400 mb-6">30-day free trial &middot; No contract</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "AI opportunity matching (proprietary multi-factor scoring)",
                    "AI Proposal Writer",
                    "Capability Statement Builder (voice)",
                    "Deal Pipeline & CRM",
                    "Market Intelligence & Incumbents",
                    "Partner Search (1M+ contractors)",
                    "Set-aside eligibility matching",
                    "Consulting add-on available",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Link href={SIGNUP_URL} className="w-full bg-emerald-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors block text-center">
                  Start Free Trial <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </Link>
              </div>

              {/* HigherGov */}
              <div className="bg-white rounded-2xl p-8 border border-stone-200">
                <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">HigherGov</p>
                <p className="text-5xl font-black mb-1 text-stone-400">$99-199<span className="text-lg font-medium">/mo</span></p>
                <p className="text-sm text-stone-400 mb-6">Annual plans available</p>
                <ul className="space-y-3 mb-8">
                  {[
                    { text: "Federal opportunity search", has: true },
                    { text: "State & local contracts", has: true },
                    { text: "Grants database", has: true },
                    { text: "Basic contractor profiles", has: true },
                    { text: "AI opportunity matching", has: false },
                    { text: "AI proposal writing", has: false },
                    { text: "Capture management tools", has: false },
                    { text: "Consulting or managed services", has: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                      {item.has
                        ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        : <XCircle className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />}
                      {item.text}
                    </li>
                  ))}
                </ul>
                <a href="https://highergov.com" target="_blank" rel="noopener noreferrer" className="w-full bg-stone-100 text-stone-400 py-3 rounded-xl font-bold text-sm text-center block cursor-default">
                  Visit HigherGov
                </a>
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
              Go Deep Where It <span className="text-emerald-400">Matters</span>
            </h2>
            <p className="text-lg text-stone-400 mb-8">
              If you are serious about winning federal contracts, you need more than a search engine.
              CapturePilot gives you AI matching, proposal drafting tools, and capture management
              — all purpose-built for federal contractors.
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
