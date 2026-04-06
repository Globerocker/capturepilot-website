"use client";

import Link from "next/link";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";
import {
  ArrowRight, CheckCircle2, XCircle, Target, Zap, Shield,
  BarChart3, DollarSign, Building2, Users, FileText, Mic,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

const comparisonRows = [
  { feature: "AI Opportunity Matching", cp: true, other: false },
  { feature: "AI Proposal Writer", cp: true, other: false },
  { feature: "Capability Statement Builder", cp: true, other: false },
  { feature: "Deal Pipeline & CRM", cp: true, other: false },
  { feature: "Competitor & Incumbent Intel", cp: true, other: false },
  { feature: "SAM.gov Integration", cp: true, other: true },
  { feature: "Legislative & Budget Tracking", cp: false, other: true },
  { feature: "BGOV200 Rankings", cp: false, other: true },
  { feature: "Small Business Set-Aside Matching", cp: true, other: false },
  { feature: "Partner Search (1M+ Contractors)", cp: true, other: false },
];

const captureFeatures = [
  {
    icon: Target,
    title: "Smart Matching Algorithm",
    desc: "140-point scoring across NAICS, PSC, set-asides, geography, past performance, and contract value. BGOV gives you a search bar.",
    href: "/features/matching",
  },
  {
    icon: FileText,
    title: "AI Proposal Writer",
    desc: "Generate full proposals in minutes - cover letter, technical approach, and past performance. BGOV has zero proposal tools.",
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

export default function VsBGOV() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
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

      {/* ─── Comparison Table ─── */}
      <section id="comparison" className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Feature-by-Feature Comparison
          </h2>
          <p className="text-lg text-stone-500 text-center mb-12 max-w-2xl mx-auto">
            BGOV is a research terminal. CapturePilot is a capture management platform.
          </p>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-stone-900 text-white text-sm font-bold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center">CapturePilot</div>
              <div className="p-4 text-center">BGOV</div>
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
                  {row.other
                    ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    : <XCircle className="w-5 h-5 text-stone-300" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Built for Capture ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Built for <span className="gradient-text">Capture</span>, Not Just Reading
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            BGOV helps you read about government. CapturePilot helps you win government contracts.
            Every feature is designed around one goal: increasing your probability of win.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {captureFeatures.map((f, i) => (
              <Link key={i} href={f.href} className="bg-white rounded-2xl p-8 border border-stone-200 hover-lift block group">
                <f.icon className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">{f.title}</h3>
                <p className="text-stone-500 leading-relaxed">{f.desc}</p>
                <span className="text-xs font-bold text-emerald-600 mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Comparison ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Pricing: 95% Less. 10x More Useful.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CapturePilot */}
            <div className="bg-black text-white rounded-2xl p-8 border-2 border-emerald-500 relative">
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
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href={SIGNUP_URL} className="w-full bg-emerald-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors block text-center">
                Start Free Trial <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </Link>
            </div>

            {/* BGOV */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Bloomberg Government</p>
              <p className="text-5xl font-black mb-1 text-stone-400">$6-12K<span className="text-lg font-medium">/yr</span></p>
              <p className="text-sm text-stone-400 mb-6">Enterprise pricing &middot; Annual contract required</p>
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
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    {item.has
                      ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      : <XCircle className="w-4 h-4 text-stone-300 mt-0.5 flex-shrink-0" />}
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="w-full bg-stone-100 text-stone-400 py-3 rounded-xl font-bold text-sm text-center cursor-default">
                Contact Sales
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Best For ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Which One Is Right for You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 border border-emerald-200 bg-emerald-50 hover-lift">
              <Users className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Choose CapturePilot if you...</h3>
              <ul className="space-y-2">
                {[
                  "Are a small or mid-size federal contractor",
                  "Want AI to find and score opportunities for you",
                  "Need proposal writing and capture tools",
                  "Want to track competitors and incumbents",
                  "Need set-aside matching (SDVOSB, WOSB, 8(a), HUBZone)",
                  "Want to pay $199/mo instead of $12,000/yr",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 border border-stone-200 bg-stone-50 hover-lift">
              <Building2 className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Choose BGOV if you...</h3>
              <ul className="space-y-2">
                {[
                  "Are a lobbying firm or law practice",
                  "Need to track legislation and regulatory changes",
                  "Want budget forecasting and appropriations data",
                  "Are a Fortune 500 defense contractor",
                  "Have $12K+ per seat for a research terminal",
                  "Do not need capture or proposal tools",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-500">
                    <DollarSign className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 px-6 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Stop Paying Enterprise Prices for Features You Will Never Use
          </h2>
          <p className="text-lg text-stone-400 mb-8">
            CapturePilot gives you the capture tools, AI matching, and proposal writing that BGOV does not offer
            — at a fraction of the cost. Start your free trial today.
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
