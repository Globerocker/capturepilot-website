"use client";

import Link from "next/link";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";
import {
  ArrowRight, CheckCircle2, XCircle, Target, Zap, Shield,
  BarChart3, Layers, Users, FileText, Mic, Focus, Search,
  Crosshair, Globe, Minus,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

const comparisonRows = [
  { feature: "AI Opportunity Matching", cp: true, other: false },
  { feature: "AI Proposal Writer", cp: true, other: false },
  { feature: "Capability Statement Builder", cp: true, other: false },
  { feature: "Deal Pipeline & CRM", cp: true, other: false },
  { feature: "Competitor & Incumbent Intel", cp: true, other: "partial" as const },
  { feature: "Federal Contract Coverage", cp: true, other: true },
  { feature: "State & Local Contracts", cp: false, other: true },
  { feature: "Grants Database", cp: false, other: true },
  { feature: "Set-Aside Eligibility Matching", cp: true, other: false },
  { feature: "Partner Search (1M+ Contractors)", cp: true, other: false },
  { feature: "Consulting & Managed Services", cp: true, other: false },
];

const depthFeatures = [
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
    desc: "Generate full proposals with cover letters, technical approach, and past performance sections. HigherGov has no writing tools at all.",
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

export default function VsHigherGov() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
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

      {/* ─── Comparison Table ─── */}
      <section id="comparison" className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Feature-by-Feature Comparison
          </h2>
          <p className="text-lg text-stone-500 text-center mb-12 max-w-2xl mx-auto">
            HigherGov is a search database. CapturePilot is a capture management platform with AI.
          </p>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-stone-900 text-white text-sm font-bold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">CapturePilot</div>
              <div className="p-4 text-center">HigherGov</div>
            </div>

            {comparisonRows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-stone-50"} border-t border-stone-100`}>
                <div className="p-4 font-medium text-stone-700">{row.feature}</div>
                <div className="p-4 flex justify-center">
                  {row.cp
                    ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    : <XCircle className="w-5 h-5 text-stone-300" />}
                </div>
                <div className="p-4 flex justify-center">
                  {row.other === true
                    ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    : row.other === "partial"
                    ? <Minus className="w-5 h-5 text-amber-400" />
                    : <XCircle className="w-5 h-5 text-stone-300" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Depth vs Breadth ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            <span className="gradient-text">Depth</span> vs Breadth
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            HigherGov tries to cover everything: federal, state, local, and grants.
            CapturePilot specializes in federal contracting and gives you the AI-powered tools
            to actually win — not just find — opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* CapturePilot column */}
            <div className="rounded-2xl p-8 border-2 border-emerald-200 bg-emerald-50/50">
              <div className="flex items-center gap-3 mb-6">
                <Crosshair className="w-7 h-7 text-emerald-600" />
                <div>
                  <p className="font-black text-lg">CapturePilot</p>
                  <p className="text-sm text-stone-500">Deep federal specialization</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "AI scores every opportunity against your profile",
                  "Writes proposals and capability statements",
                  "Tracks incumbents and award history",
                  "Matches set-aside eligibility automatically",
                  "Full deal pipeline from discovery to award",
                  "Consulting services for managed clients",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* HigherGov column */}
            <div className="rounded-2xl p-8 border border-stone-200 bg-stone-50">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-7 h-7 text-stone-400" />
                <div>
                  <p className="font-black text-lg">HigherGov</p>
                  <p className="text-sm text-stone-500">Broad but surface-level</p>
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

      {/* ─── Feature Cards ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            What You Get with CapturePilot
          </h2>
          <p className="text-lg text-stone-500 text-center mb-12 max-w-2xl mx-auto">
            Tools built to help you win federal contracts — not just browse them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {depthFeatures.map((f, i) => (
              <Link key={i} href={f.href} className="bg-white rounded-2xl p-6 border border-stone-200 hover-lift block group">
                <div className="flex items-center gap-2 mb-4">
                  <f.icon className="w-5 h-5 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">{f.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
                {f.href !== "#" && (
                  <span className="text-xs font-bold text-emerald-600 mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Comparison ─── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Similar Price. Far More Features.
          </h2>
          <p className="text-lg text-stone-500 text-center mb-12 max-w-2xl mx-auto">
            At the same price point, CapturePilot gives you AI tools, capture management, and consulting
            that HigherGov simply does not offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CapturePilot */}
            <div className="bg-black text-white rounded-2xl p-8 border-2 border-emerald-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">More Features</div>
              <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">CapturePilot Pro</p>
              <p className="text-5xl font-black mb-1">$199<span className="text-lg font-medium text-stone-400">/mo</span></p>
              <p className="text-sm text-stone-400 mb-6">30-day free trial &middot; No contract</p>
              <ul className="space-y-3 mb-8">
                {[
                  "AI opportunity matching (140-point scoring)",
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

      {/* ─── Final CTA ─── */}
      <section className="py-20 px-6 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Go Deep Where It Matters
          </h2>
          <p className="text-lg text-stone-400 mb-8">
            If you are serious about winning federal contracts, you need more than a search engine.
            CapturePilot gives you AI matching, proposal tools, and capture management
            — all purpose-built for federal contractors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL} className="bg-emerald-500 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-600 transition-all hover:scale-105 inline-flex items-center gap-2">
              Start Free — 30 Days <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/#pricing" className="text-stone-400 px-8 py-4 rounded-full text-base font-bold hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
