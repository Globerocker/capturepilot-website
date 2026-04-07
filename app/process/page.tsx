"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  BarChart3,
  Search,
  FileText,
  Kanban,
  Trophy,
  Phone,
  UserCheck,
  Radar,
  Lightbulb,
  PenTool,
  Handshake,
  Shield,
  Heart,
  Target,
  Headphones,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Users,
  Zap,
  Flag,
  Star,
} from "lucide-react";
import { useState } from "react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

/* ────────────────────── Data ────────────────────── */

const selfServiceSteps = [
  {
    icon: Globe,
    title: "Sign Up & Connect",
    description:
      "Create your account, enter your website URL, and we auto-detect your NAICS codes, certifications, and capabilities. Your profile is built in under 60 seconds.",
    detail: "No manual data entry. Our crawler reads your website and sets up your matching profile automatically.",
  },
  {
    icon: BarChart3,
    title: "Review Your Matches",
    description:
      "Every morning, your dashboard shows freshly scored opportunities pulled from SAM.gov overnight. Each match is rated HOT, WARM, or COLD based on a 140-point scoring algorithm.",
    detail: "NAICS, PSC, set-aside, geography, contract value, past performance -- all factored in.",
  },
  {
    icon: Search,
    title: "Analyze Opportunities",
    description:
      "Dive into any opportunity for AI-powered eligibility checks, competition analysis, incumbent research, and win probability scoring. Know exactly where you stand before you invest time.",
    detail: "See who won the last contract, how many competitors are likely bidding, and what the agency values most.",
  },
  {
    icon: FileText,
    title: "Write Your Proposal",
    description:
      "Our AI Proposal Writer generates tailored, compliant proposals in 15 minutes -- not 15 days. Paste the solicitation, and get a structured response aligned to evaluation criteria.",
    detail: "Capability statements, past performance narratives, and technical approaches -- all generated for you.",
  },
  {
    icon: Kanban,
    title: "Build Your Pipeline",
    description:
      "Track every opportunity from discovery to award on your visual Kanban board. Move deals through stages, set reminders, and never miss a deadline.",
    detail: "Pipeline management built specifically for government capture -- not retrofitted from sales CRM.",
  },
  {
    icon: Trophy,
    title: "Win Contracts",
    description:
      "Submit with confidence, track results, and iterate. Our system learns from outcomes to improve your future match scores and strategy recommendations.",
    detail: "Track your win rate, analyze losses, and continuously improve your capture process.",
  },
];

const consultingSteps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description:
      "Free 30-minute strategy session. We learn your business, goals, certifications, and contracting history. No sales pitch -- just an honest assessment of your federal readiness.",
    detail: "We'll tell you if government contracting is right for you. Not every business is a fit, and we'll be upfront.",
  },
  {
    icon: UserCheck,
    title: "Profile Setup",
    description:
      "Our team builds your CapturePilot profile, verifies your SAM.gov registration, optimizes your NAICS codes, and ensures your certifications are properly reflected.",
    detail: "Most businesses have the wrong NAICS codes or incomplete SAM profiles. We fix that before you miss opportunities.",
  },
  {
    icon: Radar,
    title: "Opportunity Hunting",
    description:
      "Our team identifies and qualifies opportunities daily on your behalf. We filter out the noise and only bring you contracts you can actually win.",
    detail: "We review solicitation documents, check eligibility requirements, and assess competitive landscape before recommending action.",
  },
  {
    icon: Lightbulb,
    title: "Capture Strategy",
    description:
      "For each qualified opportunity, we develop win strategies, competitive analysis, pricing guidance, and teaming partner recommendations.",
    detail: "Every recommendation is backed by data: incumbent history, agency spending patterns, and competitive intelligence.",
  },
  {
    icon: PenTool,
    title: "Proposal Support",
    description:
      "We write or review your proposals, capability statements, and past performance narratives. Full compliance checks and evaluation criteria alignment included.",
    detail: "Our team has reviewed hundreds of federal proposals. We know what evaluators look for and what gets you eliminated.",
  },
  {
    icon: Handshake,
    title: "Ongoing Partnership",
    description:
      "Monthly strategy calls, pipeline reviews, and continuous optimization. We adjust your targeting as the market shifts and your capabilities grow.",
    detail: "Think of us as your outsourced capture team. We grow with you from first contract to eighth-figure pipeline.",
  },
];

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Self-Service: under 60 seconds. Enter your website URL and your profile is auto-generated. Consulting: we schedule a 30-minute discovery call, and your profile is fully configured within 48 hours of that call.",
  },
  {
    q: "Can I switch from Self-Service to Consulting?",
    a: "Absolutely. Many of our consulting clients started on the self-service platform and upgraded when they wanted hands-on support. Your data, matches, and pipeline history all carry over seamlessly.",
  },
  {
    q: "What if I've never done government contracting before?",
    a: "That's exactly who we built this for. The self-service platform walks you through every step, and our resource library covers everything from SAM registration to proposal writing. If you want a guided experience, our consulting team specializes in helping first-time contractors.",
  },
  {
    q: "Do you help with SAM.gov registration?",
    a: "Yes. Our consulting clients get full SAM.gov registration support. For self-service users, we provide step-by-step guides and our Quick Checker tool can verify your current registration status instantly.",
  },
  {
    q: "What's included in the free trial?",
    a: "30 days of full Pro access -- daily opportunity matching, AI proposal writer, pipeline management, competition analysis, and market intelligence. No credit card required. No feature restrictions.",
  },
  {
    q: "How is this different from GovWin or BGOV?",
    a: "Those platforms cost $10,000-$50,000/year and are built for Fortune 500 defense contractors. CapturePilot is built for small businesses at $199/month, with AI that does the heavy lifting so you don't need a dedicated capture team.",
  },
];

const values = [
  { icon: Flag, label: "Veteran-Built", desc: "Founded by veterans who understand the mission" },
  { icon: Heart, label: "Small Business Focused", desc: "Every feature designed for 1-50 person teams" },
  { icon: Target, label: "Results-Driven", desc: "We measure success by contracts you win" },
  { icon: Headphones, label: "Always Available", desc: "Real humans, real support, real answers" },
];

/* ────────────────────── FAQ Item ────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base sm:text-lg font-bold text-stone-900 pr-4 group-hover:text-emerald-700 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-stone-500 leading-relaxed text-sm sm:text-base">{a}</p>
      </div>
    </div>
  );
}

/* ────────────────────── Timeline Step ────────────────────── */

function TimelineStep({
  step,
  index,
  total,
  variant,
}: {
  step: (typeof selfServiceSteps)[number];
  index: number;
  total: number;
  variant: "dark" | "light";
}) {
  const Icon = step.icon;
  const isLast = index === total - 1;
  const isDark = variant === "dark";

  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Vertical connector line */}
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isDark
              ? "bg-emerald-500/10 border border-emerald-500/20"
              : "bg-emerald-50 border border-emerald-200"
          }`}
        >
          <Icon
            className={`w-6 h-6 sm:w-7 sm:h-7 ${
              isDark ? "text-emerald-400" : "text-emerald-600"
            }`}
          />
          <span
            className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center ${
              isDark
                ? "bg-emerald-500 text-stone-950"
                : "bg-emerald-600 text-white"
            }`}
          >
            {index + 1}
          </span>
        </div>
        {!isLast && (
          <div className="relative w-px flex-1 min-h-[2rem]">
            <div
              className={`absolute inset-0 ${
                isDark ? "bg-emerald-500/20" : "bg-emerald-200"
              }`}
            />
            {/* Animated pulse dot */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full animate-pulse ${
                isDark ? "bg-emerald-400/60" : "bg-emerald-400"
              }`}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 sm:pb-12 ${isLast ? "pb-0" : ""}`}>
        <h3
          className={`text-xl sm:text-2xl font-black mb-2 ${
            isDark ? "text-white" : "text-stone-900"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`leading-relaxed mb-3 ${
            isDark ? "text-stone-400" : "text-stone-600"
          }`}
        >
          {step.description}
        </p>
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-stone-500" : "text-stone-400"
          }`}
        >
          {step.detail}
        </p>
      </div>
    </div>
  );
}

/* ────────────────────── Main Page ────────────────────── */

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-32 pb-28 px-6 bg-stone-950 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-5 py-2 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4" /> How It Works
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6 animate-fade-in-up animate-delay-100">
            Your Path to Winning
            <br />
            <span className="gradient-text">Government Contracts</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-400 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Whether you use our platform or work with our team &mdash; we&apos;re
            with you every step. You&apos;re not just getting software.{" "}
            <span className="text-emerald-400 font-semibold">
              You&apos;re getting a team.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={SIGNUP_URL}
              className="bg-white text-stone-900 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              className="text-stone-400 border border-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 hover:text-white transition-all inline-flex items-center gap-2"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TWO PATHS ═══════════════════ */}
      <section className="relative py-28 px-6 bg-stone-50 overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d6d3d1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
              Choose Your Path
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Two Ways to Win
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg">
              Whether you want to run your own capture process or have our experts
              handle it, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Self-Service Card */}
            <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black mb-2">Self-Service Pro</h3>
                <p className="text-emerald-600 font-bold text-sm mb-4">
                  $199/month &middot; 30-day free trial
                </p>
                <p className="text-stone-500 leading-relaxed mb-6">
                  Use the full platform yourself. Daily opportunity matching, AI
                  proposal writer, pipeline management, and competition analysis.
                  Built for teams who want to run their own capture process.
                </p>
                <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-6">
                  Best for: teams who want control and speed
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "AI-powered opportunity matching",
                    "Proposal writer & capability statements",
                    "Pipeline Kanban board",
                    "Competition & incumbent analysis",
                    "Market intelligence dashboard",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={SIGNUP_URL}
                  className="w-full bg-black text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Consulting Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -top-3 right-6 bg-emerald-500 text-stone-950 text-xs font-black px-4 py-1.5 rounded-full">
                White Glove
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Done-For-You Consulting
                </h3>
                <p className="text-emerald-400 font-bold text-sm mb-4">
                  Custom pricing &middot; Free discovery call
                </p>
                <p className="text-stone-400 leading-relaxed mb-6">
                  Our team does the heavy lifting. We find opportunities, develop win
                  strategies, write proposals, and manage your pipeline. You focus on
                  running your business.
                </p>
                <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-6">
                  Best for: busy teams who want expert guidance
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Dedicated capture strategist",
                    "Daily opportunity qualification",
                    "Full proposal writing & review",
                    "Monthly strategy calls & pipeline reviews",
                    "SAM.gov registration & optimization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  className="w-full bg-emerald-500 text-stone-950 px-6 py-3.5 rounded-full text-sm font-black hover:bg-emerald-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SELF-SERVICE PROCESS ═══════════════════ */}
      <section className="relative py-28 px-6 bg-stone-950 overflow-hidden">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(16,185,129,0.03)_50%,transparent_75%)] bg-[length:250%_100%] animate-shimmer pointer-events-none" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3.5 h-3.5" /> Self-Service Path
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Run Your Own Capture Process
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto text-lg">
              From signup to award in six steps. The platform does the heavy lifting
              &mdash; you make the decisions.
            </p>
          </div>

          <div className="space-y-0">
            {selfServiceSteps.map((step, i) => (
              <TimelineStep
                key={i}
                step={step}
                index={i}
                total={selfServiceSteps.length}
                variant="dark"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={SIGNUP_URL}
              className="bg-white text-stone-900 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Your Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONSULTING PROCESS ═══════════════════ */}
      <section className="relative py-28 px-6 bg-white overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.3] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d6d3d1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 border border-stone-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              <Users className="w-3.5 h-3.5" /> Consulting Path
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Let Our Team Handle It
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg">
              White-glove service from discovery to award. We become your outsourced
              capture team.
            </p>
          </div>

          <div className="space-y-0">
            {consultingSteps.map((step, i) => (
              <TimelineStep
                key={i}
                step={step}
                index={i}
                total={consultingSteps.length}
                variant="light"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              className="bg-stone-900 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM BEHIND CAPTUREPILOT ═══════════════════ */}
      <section className="relative py-28 px-6 bg-stone-950 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">
              The Team Behind CapturePilot
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Real People. Real Experience.
              <br />
              <span className="gradient-text">Real Results.</span>
            </h2>
          </div>

          <div className="bg-stone-900/50 border border-stone-800 rounded-3xl p-8 sm:p-12 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
              <p className="text-lg sm:text-xl text-stone-300 leading-relaxed mb-6">
                Built by{" "}
                <Link
                  href="https://www.americurial.com"
                  target="_blank"
                  className="text-emerald-400 font-bold underline underline-offset-4 decoration-emerald-400/30 hover:decoration-emerald-400 transition-colors"
                >
                  Americurial LLC
                </Link>
                , a veteran-owned digital agency that has navigated the federal
                contracting maze firsthand.
              </p>
              <p className="text-stone-400 leading-relaxed mb-8">
                We built CapturePilot because small businesses deserve the same
                intelligence that billion-dollar contractors use. We&apos;ve sat in
                the same chair you&apos;re sitting in &mdash; scrolling through
                SAM.gov, wondering if an opportunity is worth pursuing, trying to
                figure out who won the last contract. We built the tool we wished
                existed and paired it with a team that actually cares whether you
                win.
              </p>
              <Link
                href="https://www.americurial.com"
                target="_blank"
                className="text-emerald-400 text-sm font-bold hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
              >
                Learn about Americurial <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="text-center bg-stone-900/30 border border-stone-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="font-bold text-white text-sm mb-1">{v.label}</p>
                <p className="text-xs text-stone-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Common Questions About Getting Started
            </h2>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-28 px-6 bg-stone-950 overflow-hidden">
        {/* Shimmer */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(16,185,129,0.04)_50%,transparent_75%)] bg-[length:250%_100%] animate-shimmer pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Star className="w-10 h-10 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Start Winning?
          </h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto mb-4">
            Whether you want to run your own capture process or have our team
            handle everything &mdash; we&apos;re ready when you are.
          </p>
          <p className="text-sm text-stone-500 mb-10">
            Free 30-day trial. No credit card required. Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href={SIGNUP_URL}
              className="bg-white text-stone-900 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              className="bg-emerald-500 text-stone-950 px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-400 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> No credit
              card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 30-day free
              trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Cancel
              anytime
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Veteran-owned
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* ─── Shimmer keyframes ─── */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
