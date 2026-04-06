import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight, Shield, Heart, Target, Zap, Users,
  Star, Flag, Award, CheckCircle2, Crosshair,
  TrendingUp, Clock, Globe,
} from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

export const metadata: Metadata = {
  title: "About CapturePilot — Veterans Helping Veterans Win Government Contracts",
  description:
    "Built by veterans, for veterans. CapturePilot levels the playing field so every small business can access the same government contracting intelligence that billion-dollar contractors use.",
  keywords:
    "about capturepilot, veteran owned government contracting software, SDVOSB contracting tool, government contract intelligence",
  openGraph: {
    title: "About CapturePilot — Veterans Helping Veterans Win Government Contracts",
    description:
      "Built by veterans who saw the gap between enterprise contracting tools and the bare-bones SAM.gov experience. We built the platform we wished existed.",
    type: "website",
    url: "https://capturepilot.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-white pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
            <Flag className="w-4 h-4" /> Veteran-Founded &amp; Veteran-Led
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Built by Veterans.<br />
            <span className="gradient-text">For Veterans.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            We served our country. Now we&apos;re on a mission to make sure every
            veteran-owned and small business gets a fair shot at the $700 billion
            federal contracting market.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Join the Mission <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={CALENDLY_URL}
              className="text-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-colors"
              target="_blank"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Origin Story ─── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              We Lived the Problem Before We Solved It
            </h2>
          </div>

          <div className="space-y-8 text-stone-600 leading-relaxed text-lg max-w-3xl mx-auto">
            <p>
              After leaving the military, we did what thousands of veterans do every
              year &mdash; we started a business. And like most veteran-owned small
              businesses, we turned to government contracting. The federal government
              is <em>required</em> to award 23% of contracts to small businesses.
              That&apos;s over $150 billion a year. It should be an open door.
            </p>

            <p>
              Instead, we found a maze. SAM.gov was a wall of cryptic solicitation
              numbers and 200-page RFPs. The &ldquo;tools&rdquo; that existed &mdash;
              GovWin, BGOV, Deltek &mdash; cost $10,000 to $50,000 a year. They were
              built for Fortune 500 defense contractors with entire capture teams, not
              for a five-person company trying to land its first contract.
            </p>

            <p>
              We watched qualified businesses give up. Companies that had the skills,
              the certifications, and the passion &mdash; but not a $300/hour
              consultant to tell them which opportunities to pursue, or a week to
              spend writing a single proposal.
            </p>

            <div className="bg-white border border-stone-200 rounded-2xl p-8 my-12">
              <p className="text-xl font-bold text-stone-900 italic leading-relaxed">
                &ldquo;The billion-dollar contractors had intelligence platforms,
                proposal teams, and decades of relationships. We had a SAM.gov login
                and determination. So we built the platform we wished existed.&rdquo;
              </p>
              <p className="text-sm text-stone-400 mt-4 font-medium">
                &mdash; The CapturePilot founding team
              </p>
            </div>

            <p>
              CapturePilot was born from frustration and built with purpose. We took
              everything we learned &mdash; the scoring models, the incumbent
              research, the proposal frameworks &mdash; and turned it into software
              that any small business can use. No consultants required. No $50K
              software budgets. Just clear intelligence on which contracts you can win
              and the tools to go after them.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Mission ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <Crosshair className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Every qualified small business should have access<br className="hidden sm:block" />
                to the same intelligence that billion-dollar<br className="hidden sm:block" />
                contractors use.
              </h2>
              <p className="text-stone-400 text-lg max-w-2xl mx-auto">
                That&apos;s not a tagline. It&apos;s our north star. Every feature we
                build, every algorithm we tune, every partnership we form is in
                service of that mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Heart,
                title: "Accessibility",
                subtitle: "Affordable for all",
                desc: "Government contracting intelligence shouldn't be locked behind a $50K paywall. We built CapturePilot so that a one-person SDVOSB has the same tools as a billion-dollar prime contractor. Free tier forever. Pro at a price small businesses can actually afford.",
                color: "text-rose-500",
                bg: "bg-rose-50",
              },
              {
                icon: Target,
                title: "Intelligence",
                subtitle: "Data-driven, not guesswork",
                desc: "Every match score, every recommendation, every market insight is backed by real data. We pull from SAM.gov, USASpending, FPDS, and proprietary analysis. No gut feelings. No vague advice. Just clear, quantified intelligence on where to focus your energy.",
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                icon: Zap,
                title: "Speed",
                subtitle: "AI does the heavy lifting",
                desc: "What used to take a consultant 40 hours, CapturePilot does in minutes. AI-powered opportunity matching, proposal drafting, market research, and competitor analysis. You focus on running your business — we handle the capture management busywork.",
                color: "text-amber-500",
                bg: "bg-amber-50",
              },
              {
                icon: Shield,
                title: "Service",
                subtitle: "Veterans serving veterans",
                desc: "We built this for our community. SDVOSB and VOSB opportunities surface first. Set-aside contracts are highlighted. We honor the 3% federal SDVOSB goal and help our fellow veterans claim their share. This isn't just a business — it's a continuation of service.",
                color: "text-emerald-500",
                bg: "bg-emerald-50",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 rounded-2xl p-8 hover-lift"
              >
                <div
                  className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-emerald-600 font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ─── */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">
              The Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              By the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "40K+",
                label: "Federal Opportunities Tracked",
                icon: Globe,
              },
              {
                value: "1M+",
                label: "SAM-Registered Companies",
                icon: Users,
              },
              {
                value: "$2.7B+",
                label: "Contract Value Monitored",
                icon: TrendingUp,
              },
              {
                value: "892",
                label: "NAICS Codes Supported",
                icon: Award,
              },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-4xl sm:text-5xl font-black text-emerald-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-stone-800">
            {[
              {
                icon: Clock,
                label: "Daily Pipeline",
                detail: "New opportunities ingested, scored, and matched every 24 hours",
              },
              {
                icon: Star,
                label: "140-Point Scoring",
                detail:
                  "Multi-factor algorithm: NAICS, PSC, set-aside, geo, value, past performance",
              },
              {
                icon: Shield,
                label: "Veteran-First",
                detail:
                  "SDVOSB & VOSB set-aside contracts prioritized in every match",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{item.label}</p>
                  <p className="text-stone-500 text-xs leading-relaxed mt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What We're Fighting Against ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
              The Landscape
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              The Playing Field Isn&apos;t Level. Yet.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-stone-400">
                Enterprise Tools (GovWin, BGOV, Deltek)
              </h3>
              <ul className="space-y-3">
                {[
                  "$10,000 — $50,000+ per year",
                  "Built for large defense contractors",
                  "Requires dedicated capture team",
                  "Months of onboarding and training",
                  "Complex interfaces designed for specialists",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-stone-400"
                  >
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                CapturePilot
              </div>
              <h3 className="text-xl font-bold mb-4 text-emerald-800">
                Built for Small Businesses
              </h3>
              <ul className="space-y-3">
                {[
                  "Free tier forever — Pro at $199/month",
                  "Built for 1-50 person companies",
                  "AI does the capture management for you",
                  "Enter your website, get matches in 60 seconds",
                  "Simple interface anyone can use",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-emerald-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <Flag className="w-10 h-10 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
            Join the Mission
          </h2>
          <p className="text-lg text-stone-500 mb-4 max-w-xl mx-auto">
            Every day, qualified small businesses miss out on contracts they could
            win because they didn&apos;t know the opportunity existed. We&apos;re
            changing that.
          </p>
          <p className="text-base text-stone-400 mb-10">
            Free for 30 days. No credit card required. See which contracts match
            your business in 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={CHECK_URL}
              className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors inline-flex items-center gap-2"
            >
              Try Quick Checker Free
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-stone-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> No credit
              card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 30-day
              free trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Cancel
              anytime
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
