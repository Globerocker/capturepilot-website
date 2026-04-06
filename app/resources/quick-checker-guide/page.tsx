"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Search,
  Globe,
  CheckCircle2,
  Shield,
  Target,
  Hash,
  BadgeCheck,
  Award,
  Zap,
  Star,
  ChevronDown,
  ChevronUp,
  Building2,
  Loader2,
  Users,
  FileText,
  Clock,
  Eye,
  TrendingUp,
  HelpCircle,
} from "lucide-react";


const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

// ─── Simplified Animated Mockup ───────────────────────────────────

function CheckerMockup() {
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || played) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played) {
          setPlayed(true);
          setPhase("scanning");
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [played]);

  useEffect(() => {
    if (phase !== "scanning") return;
    if (progress >= 100) {
      const t = setTimeout(() => setPhase("done"), 350);
      return () => clearTimeout(t);
    }
    const inc = progress < 40 ? 3 : progress < 80 ? 2 : 1;
    const t = setTimeout(() => setProgress((p) => Math.min(p + inc, 100)), 28);
    return () => clearTimeout(t);
  }, [phase, progress]);

  useEffect(() => {
    if (phase !== "done") return;
    if (revealed >= 4) return;
    const t = setTimeout(() => setRevealed((r) => r + 1), 350);
    return () => clearTimeout(t);
  }, [phase, revealed]);

  const items = [
    { icon: Building2, label: "Company", value: "ABC Services LLC", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Hash, label: "NAICS Codes", value: "561720, 561210, 238220", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: BadgeCheck, label: "SAM.gov", value: "Registered", color: "text-green-600", bg: "bg-green-50" },
    { icon: Target, label: "Matching Opps", value: "47 found", color: "text-amber-600", bg: "bg-amber-50" },
  ];

  return (
    <div ref={ref} className="w-full max-w-xl mx-auto">
      <div className="bg-stone-800 rounded-t-2xl px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-stone-700 rounded-lg px-3 py-1 text-xs text-stone-400 ml-2">
          app.capturepilot.com/check
        </div>
      </div>
      <div className="bg-white border-x border-b border-stone-200 rounded-b-2xl p-6 min-h-[300px]">
        {/* Input bar */}
        <div className="flex items-center border-2 border-stone-200 rounded-xl overflow-hidden mb-5">
          <div className="px-3 text-stone-300"><Globe className="w-5 h-5" /></div>
          <div className="flex-1 py-3 text-sm font-mono text-stone-800">www.abcservices.com</div>
          <button className="px-4 py-3 bg-emerald-500 text-white">
            {phase === "scanning" ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          </button>
        </div>

        {/* Scanning */}
        {phase === "scanning" && (
          <div className="space-y-2 animate-fade-in-up">
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
              <span>
                {progress < 35
                  ? "Crawling website..."
                  : progress < 65
                  ? "Identifying NAICS codes..."
                  : "Finding opportunities..."}
              </span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Results */}
        {phase === "done" && (
          <div className="space-y-2.5">
            {items.map((item, i) => {
              if (i >= revealed) return null;
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-stone-100 bg-stone-50/50 animate-fade-in-up">
                  <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400">{item.label}</p>
                    <p className="text-sm font-bold text-stone-900">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="text-base font-bold text-stone-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-stone-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-stone-500 text-sm leading-relaxed animate-fade-in-up" style={{ animationDuration: "0.25s" }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────

export default function QuickCheckerGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4" /> 100% Free -- No Account Required
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Check Your Government Contract<br />
            Eligibility -- <span className="gradient-text">Free.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Find out if your business qualifies for federal contracts in under
            30 seconds. No sign-up required. Just enter your website.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={CHECK_URL}
              className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-stone-200"
            >
              Check My Eligibility Now <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-stone-400">Takes 30 seconds. Instant results.</p>
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section className="py-6 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
                  {["JD", "SM", "KL", "RB"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-600 font-medium">
              Join <span className="font-bold text-stone-900">500+</span> businesses who&apos;ve checked their eligibility
            </p>
          </div>
        </div>
      </section>

      {/* ─── Mockup ─── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <CheckerMockup />
        </div>
      </section>

      {/* ─── What You'll Learn ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            What You&apos;ll Learn About Your Business
          </h2>
          <p className="text-lg text-stone-500 text-center mb-14 max-w-2xl mx-auto">
            One URL tells us everything we need to assess your government readiness.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Hash, title: "NAICS Codes", desc: "We identify the exact federal industry codes that match your services so you know which contracts to target.", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: BadgeCheck, title: "SAM.gov Status", desc: "Instantly verify whether your company is registered on SAM.gov, the mandatory requirement for federal bidding.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Target, title: "Matching Opportunities", desc: "See how many live federal contracts match your profile right now, with real data from SAM.gov.", color: "text-amber-600", bg: "bg-amber-50" },
              { icon: Shield, title: "Set-Aside Eligibility", desc: "Discover which set-aside categories you qualify for: SDVOSB, WOSB, HUBZone, 8(a), and Small Business.", color: "text-purple-600", bg: "bg-purple-50" },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-200 hover-lift text-center">
                <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mx-auto mb-4`}>
                  <card.icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3 Steps ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Globe,
                title: "Enter Your Website",
                desc: "Just paste your company URL. No account, no sign-up, no credit card. We handle the rest.",
              },
              {
                step: "2",
                icon: Eye,
                title: "Get Your Analysis",
                desc: "Our AI crawls your site, identifies your services, checks SAM.gov, and maps your NAICS codes in seconds.",
              },
              {
                step: "3",
                icon: Star,
                title: "See Your Opportunities",
                desc: "Instantly see how many federal contracts match your business, which set-asides you qualify for, and your next steps.",
              },
            ].map((s, i) => (
              <div key={i} className="text-center relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-stone-200 to-transparent translate-x-1/2" />
                )}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6 relative">
                  <s.icon className="w-10 h-10 text-emerald-600" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href={CHECK_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Your Free Check <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why Free ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-3xl p-10 sm:p-14 border border-emerald-100">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Why Is It <span className="gradient-text">Free?</span>
            </h2>
            <p className="text-lg text-stone-500 mb-4 max-w-xl mx-auto">
              We believe every small business deserves to know if government
              contracting is a real opportunity for them -- before investing
              time or money.
            </p>
            <p className="text-base text-stone-500 mb-8 max-w-xl mx-auto">
              The Quick Checker is our way of giving back. If you want to go
              deeper with AI-powered matching, proposals, and pipeline
              management, you can upgrade later.
            </p>
            <Link
              href={CHECK_URL}
              className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Run My Free Check <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            <h2 className="text-3xl sm:text-4xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 px-6 sm:px-8">
            <FAQItem
              q="Is it really free?"
              a="Yes, 100%. No credit card, no account, no trial that expires. Enter your website URL and get your full government readiness report instantly. We built the Quick Checker as a free tool for every small business."
            />
            <FAQItem
              q="Do I need a SAM.gov registration to use it?"
              a="No. The checker works whether or not you're registered on SAM.gov. In fact, it will tell you if you are registered — and if you're not, it will explain exactly how to get started."
            />
            <FAQItem
              q="How accurate is the analysis?"
              a="Our AI analyzes your website content, service descriptions, and industry language to identify NAICS codes and match opportunities. We cross-reference live SAM.gov data for real-time accuracy. Most businesses see 3-8 relevant NAICS codes identified."
            />
            <FAQItem
              q="What data do you collect?"
              a="We only crawl publicly available information from your website. We don't store personal data or require any login. Your results are shown on screen and not shared with anyone."
            />
            <FAQItem
              q="What should I do after getting my results?"
              a="If you're not on SAM.gov, register first — it's free and required for federal contracting. If you are registered, create a free CapturePilot account to see detailed opportunity matches, build your capability statement, and start bidding."
            />
            <FAQItem
              q="Can I use this for a competitor's company?"
              a="Absolutely. Enter any company website to see their government profile and how many opportunities match them. It's a great way to understand the competitive landscape before you bid."
            />
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Your Government Contracts Are Waiting.
          </h2>
          <p className="text-lg text-stone-500 mb-8 max-w-xl mx-auto">
            Thousands of federal contracts are posted every week. Find out which
            ones your business qualifies for -- in 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CHECK_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Check My Eligibility <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={SIGNUP_URL}
              className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors inline-flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" /> Start Free Trial
            </Link>
          </div>
          <p className="text-sm text-stone-400 mt-6">
            Join 500+ businesses who&apos;ve already checked their eligibility.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
