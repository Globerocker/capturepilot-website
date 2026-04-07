import Link from "next/link";
import type { Metadata } from "next";
import {
  Shield, ArrowRight, CheckCircle2, Target, FileText,
  BarChart3, Users, Star, Award, TrendingUp,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

export const metadata: Metadata = {
  title: "CapturePilot for Veteran-Owned Businesses — SDVOSB & VOSB Contracts",
  description: "Find SDVOSB and VOSB set-aside government contracts matched to your veteran-owned business. 2,276+ veteran set-aside opportunities. AI-powered matching.",
};

export default function VeteransPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <Shield className="w-4 h-4" /> Built by Veterans, for Veterans
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Your Service Earned<br />
            You an <span className="gradient-text">Advantage.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10">
            The federal government sets aside billions in contracts exclusively for veteran-owned businesses.
            CapturePilot finds the ones that match your company — automatically.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              Start Free — 30 Days <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={CHECK_URL} className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors inline-flex items-center gap-2">
              Check My Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-emerald-700">2,276+</p>
            <p className="text-sm text-stone-600">SDVOSB/VOSB Set-Asides</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-700">$4.5M</p>
            <p className="text-sm text-stone-600">8(a) Sole Source Limit</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-700">3%</p>
            <p className="text-sm text-stone-600">Federal SDVOSB Goal</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-700">892</p>
            <p className="text-sm text-stone-600">Industry Codes Covered</p>
          </div>
        </div>
      </section>

      {/* What We Do For Veterans */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            How CapturePilot Helps Veterans Win
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            We built this platform because too many veteran-owned businesses miss opportunities they&apos;re perfectly qualified for.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "SDVOSB & VOSB Matching", desc: "We flag every opportunity with a veteran set-aside. Your matches surface SDVOSB, VOSB, and VA-specific contracts first." },
              { icon: FileText, title: "AI Proposal Writer", desc: "Turn a solicitation into a proposal first draft in minutes. Technical approach framework, past performance structure, compliance matrix — a strong starting point you refine." },
              { icon: BarChart3, title: "Incumbent Intelligence", desc: "See who currently holds the contract, what they charged, and when it expires. Know your competition before you bid." },
              { icon: Users, title: "Team Partner Search", desc: "Find mentor-protege partners, JV candidates, and subcontractors from 1M+ SAM-registered companies." },
              { icon: Star, title: "Capability Statement Builder", desc: "Record yourself talking about your business. AI writes your capability statement with your brand colors and logo." },
              { icon: TrendingUp, title: "Early Pipeline Alerts", desc: "Get notified about Sources Sought and RFIs 6-18 months before solicitation. Shape requirements before the bid drops." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-200">
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Set-Aside Types */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            Veteran Set-Asides We Track
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { code: "SDVOSB", name: "Service-Disabled Veteran-Owned Small Business", desc: "Sole source up to $4.5M. Federal goal: 3% of all contracts." },
              { code: "VOSB", name: "Veteran-Owned Small Business", desc: "VA-specific set-asides for verified veteran-owned firms." },
              { code: "8(a)", name: "SBA 8(a) Business Development", desc: "9-year program. Sole source contracts up to $4.5M (goods) / $7M (manufacturing)." },
              { code: "HUBZone", name: "Historically Underutilized Business Zone", desc: "10% price evaluation preference. Sole source up to $4.5M." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-stone-200">
                <div className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1 text-xs font-bold mb-3">{item.code}</div>
                <h3 className="font-bold mb-1">{item.name}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Award className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            You Served Your Country.<br />Now Let Your Country Work for You.
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Start finding veteran set-aside contracts matched to your business. Free for 30 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={CALENDLY_URL} className="text-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-50 transition-colors" target="_blank">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
