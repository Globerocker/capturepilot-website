import Link from "next/link";
import type { Metadata } from "next";
import {
  Star, ArrowRight, CheckCircle2, Target, FileText,
  BarChart3, Users, Shield, Heart, TrendingUp,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

export const metadata: Metadata = {
  title: "CapturePilot for Women-Owned Businesses — WOSB & EDWOSB Contracts",
  description: "Find WOSB and EDWOSB set-aside government contracts for your women-owned business. AI-powered matching with 40,000+ federal opportunities.",
};

export default function WomenOwnedPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 border border-pink-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <Star className="w-4 h-4" /> Women-Owned Small Business Program
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Federal Contracts<br />
            Set Aside for <span className="gradient-text">You.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10">
            The government reserves 5% of all federal contracting dollars for women-owned small businesses.
            CapturePilot finds every WOSB and EDWOSB opportunity that matches your company.
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
      <section className="py-16 px-6 bg-pink-50 border-y border-pink-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-pink-700">5%</p>
            <p className="text-sm text-stone-600">Federal WOSB Goal</p>
          </div>
          <div>
            <p className="text-3xl font-black text-pink-700">$7M</p>
            <p className="text-sm text-stone-600">Sole Source Limit (Mfg)</p>
          </div>
          <div>
            <p className="text-3xl font-black text-pink-700">83</p>
            <p className="text-sm text-stone-600">Eligible NAICS Groups</p>
          </div>
          <div>
            <p className="text-3xl font-black text-pink-700">40K+</p>
            <p className="text-sm text-stone-600">Opportunities Scanned</p>
          </div>
        </div>
      </section>

      {/* WOSB vs EDWOSB */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            Two Programs, One Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-2xl p-8 border border-pink-200">
              <div className="inline-block bg-pink-100 text-pink-700 border border-pink-200 rounded-full px-3 py-1 text-xs font-bold mb-4">WOSB</div>
              <h3 className="text-xl font-bold mb-3">Women-Owned Small Business</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />At least 51% owned by women</li>
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />Managed by women on day-to-day basis</li>
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />Set-asides in underrepresented NAICS</li>
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />Sole source up to $4.5M (services)</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
              <div className="inline-block bg-purple-100 text-purple-700 border border-purple-200 rounded-full px-3 py-1 text-xs font-bold mb-4">EDWOSB</div>
              <h3 className="text-xl font-bold mb-3">Economically Disadvantaged WOSB</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />All WOSB requirements plus...</li>
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Personal net worth under $750K</li>
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Access to MORE set-aside categories</li>
                <li className="flex items-start gap-2 text-sm text-stone-600"><CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />Sole source up to $7M (manufacturing)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            Tools Built for Women Business Owners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "WOSB/EDWOSB Matching", desc: "Every opportunity is checked against your certifications. We highlight the ones where your set-aside gives you an edge." },
              { icon: FileText, title: "AI Proposal Writer", desc: "Generate a proposal first draft from the solicitation. Technical approach, staffing plan, past performance — a strong starting point to customize." },
              { icon: BarChart3, title: "Market Intelligence", desc: "See total spending in your industry, top agencies, and trending contract types. Know where the money is going." },
              { icon: Users, title: "Partner & Mentor Search", desc: "Find teaming partners, mentor-protege relationships, and JV candidates from SAM-registered companies." },
              { icon: Shield, title: "Eligibility Screening", desc: "Instantly check if your certifications match each opportunity's requirements. No more reading fine print." },
              { icon: TrendingUp, title: "Pipeline Tracking", desc: "Track opportunities from discovery to award. Kanban board keeps your team organized." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-stone-200">
                <div className="w-12 h-12 bg-pink-50 border border-pink-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-pink-600" />
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

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-12 h-12 text-pink-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Start Winning the Contracts<br />Reserved for Your Business
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Free for 30 days. See every WOSB and EDWOSB opportunity that matches your company.
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
