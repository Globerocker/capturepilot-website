import Link from "next/link";
import type { Metadata } from "next";
import {
  Briefcase, ArrowRight, CheckCircle2, Target, FileText,
  BarChart3, Users, Shield, Layers, TrendingUp, Search, DollarSign,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;
const CALENDLY_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";

export const metadata: Metadata = {
  title: "CapturePilot for Small Businesses — Federal Contract Matching",
  description: "Find small business set-aside federal contracts. 14,000+ SBA, 8(a), HUBZone, and SDB opportunities matched to your company. AI-powered matching.",
};

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <Briefcase className="w-4 h-4" /> 23% of Federal Contracts Go to Small Business
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Big Contracts for<br />
            <span className="gradient-text">Small Businesses.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10">
            The federal government is required to award 23% of all prime contracts to small businesses.
            That&apos;s over $150 billion a year. CapturePilot helps you find your share.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              Start Free — 30 Days <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={CHECK_URL} className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors inline-flex items-center gap-2">
              <Search className="w-4 h-4" /> Check My Company
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-blue-50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-blue-700">14,332+</p>
            <p className="text-sm text-stone-600">SB Set-Aside Opportunities</p>
          </div>
          <div>
            <p className="text-3xl font-black text-blue-700">$150B+</p>
            <p className="text-sm text-stone-600">Annual SB Contract Spend</p>
          </div>
          <div>
            <p className="text-3xl font-black text-blue-700">23%</p>
            <p className="text-sm text-stone-600">Federal SB Goal</p>
          </div>
          <div>
            <p className="text-3xl font-black text-blue-700">$250K</p>
            <p className="text-sm text-stone-600">Simplified Acquisition</p>
          </div>
        </div>
      </section>

      {/* Entry Points */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">
            Where Small Businesses Win
          </h2>
          <p className="text-lg text-stone-500 text-center mb-12 max-w-2xl mx-auto">
            Federal contracting has built-in programs to help small businesses compete. Here&apos;s where to start.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Micro-Purchases", range: "Under $10K", desc: "No formal bidding required. Agencies can buy directly from any small business. Fastest way in.", color: "emerald" },
              { title: "Simplified Acquisition", range: "$10K – $250K", desc: "Reserved exclusively for small businesses. Less paperwork, faster awards.", color: "blue" },
              { title: "8(a) Sole Source", range: "Up to $4.5M", desc: "If you're in the SBA 8(a) program, agencies can award you contracts without competition.", color: "purple" },
              { title: "HUBZone", range: "Up to $4.5M", desc: "10% price evaluation preference. Sole source available. Must be in a qualifying zone.", color: "amber" },
              { title: "SB Set-Aside", range: "Any size", desc: "When two or more small businesses can compete, the contract is set aside. Largest category.", color: "pink" },
              { title: "Subcontracting", range: "Any size", desc: "Large contracts require subcontracting plans. Get on prime contractors' teams.", color: "stone" },
            ].map((item, i) => (
              <div key={i} className={`bg-${item.color}-50 rounded-2xl p-6 border border-${item.color}-200`}>
                <div className={`inline-block bg-${item.color}-100 text-${item.color}-700 border border-${item.color}-200 rounded-full px-3 py-1 text-xs font-bold mb-3`}>{item.range}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            Your Complete Government Contracting Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Smart Matching", desc: "AI scores every opportunity against your NAICS codes, certifications, location, and past performance." },
              { icon: FileText, title: "AI Proposals", desc: "Generate proposal drafts and outlines from solicitations. Cover letter, technical approach, compliance matrix — ready for your review." },
              { icon: BarChart3, title: "Market Intel", desc: "Who wins in your space? Total spend, top agencies, incumbent contractors, YoY trends." },
              { icon: Layers, title: "Deal Pipeline", desc: "Track opportunities from discovery to award. HubSpot-style Kanban board." },
              { icon: Users, title: "Partner Search", desc: "Find teaming partners from 1M+ SAM-registered companies. Filter by certs and NAICS." },
              { icon: Shield, title: "Eligibility Check", desc: "Instant certification matching. Know if you qualify before you spend hours on a bid." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-stone-200 hover-lift">
                <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            $150 Billion in Small Business Contracts.<br />Find Yours.
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Free for 30 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={CALENDLY_URL} className="text-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-50 transition-colors" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
