"use client";

import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Search,
  Shield,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Zap,
  Globe,
  Building2,
  FileCheck,
  BadgeCheck,
  Target,
  BarChart3,
  MapPin,
  Users,
  Star,
  Award,
  Briefcase,
  HelpCircle,
  Sparkles,
  Lock,
  TrendingUp,
  ListChecks,
  Phone,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const CALENDLY_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "Is this really free?",
    a: "Yes, always. The Quick Checker is 100% free with no hidden fees, no credit card required, and no signup needed. We built it to help small businesses discover their government contracting potential.",
  },
  {
    q: "Do I need a SAM.gov account to use this?",
    a: "No. We check SAM.gov for you automatically. If you're registered, we'll pull your data. If you're not, we'll tell you and show you how to register.",
  },
  {
    q: "What happens with my data?",
    a: "We analyze your publicly available website content to identify your industry codes and capabilities. We don't store personal information or share your data with third parties. Your results are private to you.",
  },
  {
    q: "How accurate is it?",
    a: "We cross-reference SAM.gov, SBA databases, and federal procurement records. NAICS code identification is based on your actual business activities. We typically identify 3-5 relevant codes with over 90% accuracy.",
  },
  {
    q: "Can I save my results?",
    a: "Yes! Create a free CapturePilot account to save your results, track opportunities over time, and get weekly email alerts when new matching contracts are posted.",
  },
  {
    q: "What if my business isn't registered on SAM.gov yet?",
    a: "No problem. We'll still analyze your website, identify your NAICS codes, check set-aside eligibility, and show you matching opportunities. We'll also give you a step-by-step guide to get registered.",
  },
  {
    q: "Does this work for any industry?",
    a: "Yes. The federal government contracts for everything from janitorial services to cybersecurity, construction to consulting. If your business provides a product or service, there are likely federal opportunities for you.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Component                                                      */
/* ------------------------------------------------------------------ */

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-stone-800 pr-4">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated Demo Component                                            */
/* ------------------------------------------------------------------ */

function AnimatedDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  // Trigger on scroll into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  // Step through the animation
  useEffect(() => {
    if (!started) return;
    const timers = [
      setTimeout(() => setStep(1), 400),    // URL typed
      setTimeout(() => setStep(2), 1600),    // Scanning
      setTimeout(() => setStep(3), 3000),    // Company found
      setTimeout(() => setStep(4), 3600),    // SAM status
      setTimeout(() => setStep(5), 4200),    // NAICS codes
      setTimeout(() => setStep(6), 4800),    // Set-asides
      setTimeout(() => setStep(7), 5400),    // Opportunities count
      setTimeout(() => setStep(8), 6200),    // Top match
    ];
    return () => timers.forEach(clearTimeout);
  }, [started]);

  const typedUrl = "www.example-services.com";
  const displayedChars = started
    ? Math.min(typedUrl.length, Math.floor((step >= 1 ? typedUrl.length : 0)))
    : 0;

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      {/* Mock browser chrome */}
      <div className="rounded-2xl border border-stone-700 bg-stone-900 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-stone-800 border-b border-stone-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-8">
            <div className="bg-stone-700 rounded-md px-3 py-1.5 text-xs text-stone-400 text-center font-mono">
              app.capturepilot.com/check
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-5 min-h-[420px]">
          {/* Input field mock */}
          <div className="flex items-center gap-3 bg-stone-800 rounded-xl border border-stone-600 px-4 py-3">
            <Globe className="w-5 h-5 text-stone-500" />
            <span className="font-mono text-sm text-stone-300 flex-1">
              {started ? typedUrl.slice(0, displayedChars) : ""}
              {started && step < 2 && (
                <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse align-middle" />
              )}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 ${
                step >= 2
                  ? "bg-blue-600 text-white"
                  : "bg-stone-700 text-stone-500"
              }`}
            >
              Check
            </span>
          </div>

          {/* Scanning progress */}
          {step >= 2 && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-xs text-stone-400 font-medium">
                  {step >= 3
                    ? "Analysis complete"
                    : "Scanning website and federal databases..."}
                </span>
              </div>
              <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: step >= 3 ? "100%" : "45%" }}
                />
              </div>
            </div>
          )}

          {/* Results */}
          {step >= 3 && (
            <div className="space-y-3">
              {/* Company name */}
              <div className="flex items-center gap-3 p-3 bg-stone-800/60 rounded-xl border border-stone-700 animate-fadeSlideUp">
                <Building2 className="w-5 h-5 text-blue-400" />
                <div className="flex-1">
                  <p className="text-xs text-stone-500 mb-0.5">Company</p>
                  <p className="text-sm font-bold text-white">
                    Example Services LLC
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>

              {/* SAM status */}
              {step >= 4 && (
                <div className="flex items-center gap-3 p-3 bg-stone-800/60 rounded-xl border border-stone-700 animate-fadeSlideUp">
                  <FileCheck className="w-5 h-5 text-emerald-400" />
                  <div className="flex-1">
                    <p className="text-xs text-stone-500 mb-0.5">
                      SAM.gov Status
                    </p>
                    <p className="text-sm font-bold text-emerald-400">
                      Registered — Active
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              )}

              {/* NAICS codes */}
              {step >= 5 && (
                <div className="flex items-center gap-3 p-3 bg-stone-800/60 rounded-xl border border-stone-700 animate-fadeSlideUp">
                  <BadgeCheck className="w-5 h-5 text-amber-400" />
                  <div className="flex-1">
                    <p className="text-xs text-stone-500 mb-1">NAICS Codes</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["561720", "541512", "236220"].map((code, i) => (
                        <span
                          key={code}
                          className="text-xs font-mono font-bold px-2 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          style={{
                            animationDelay: `${i * 150}ms`,
                            animation: "fadeIn 0.3s ease-out forwards",
                          }}
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Set-asides */}
              {step >= 6 && (
                <div className="flex items-center gap-3 p-3 bg-stone-800/60 rounded-xl border border-stone-700 animate-fadeSlideUp">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <div className="flex-1">
                    <p className="text-xs text-stone-500 mb-1">
                      Set-Aside Eligibility
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["SDVOSB", "Small Business"].map((sa) => (
                        <span
                          key={sa}
                          className="text-xs font-bold px-2 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {sa}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
              )}

              {/* Opportunities */}
              {step >= 7 && (
                <div className="flex items-center gap-3 p-3 bg-stone-800/60 rounded-xl border border-emerald-700/50 animate-fadeSlideUp">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <div className="flex-1">
                    <p className="text-xs text-stone-500 mb-0.5">
                      Matching Opportunities
                    </p>
                    <p className="text-lg font-black text-emerald-400">
                      47 <span className="text-sm font-medium text-stone-400">contracts found</span>
                    </p>
                  </div>
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
              )}

              {/* Top match */}
              {step >= 8 && (
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl border border-blue-500/30 animate-fadeSlideUp">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      Top Match
                    </span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      92% match
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white mb-1">
                    Janitorial Services — Fort Bragg, NC
                  </p>
                  <div className="flex items-center gap-3 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Fort Bragg, NC
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> $2.4M ceiling
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function CheckPage() {
  const [url, setUrl] = useState("");

  const handleCheck = () => {
    const trimmed = url.trim();
    if (trimmed) {
      window.location.href = `${CHECK_URL}?url=${encodeURIComponent(trimmed)}`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheck();
  };

  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="relative py-20 md:py-28 px-6 bg-stone-950 overflow-hidden">
          {/* Grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Gradient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Free Eligibility Check
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Check Your Government{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Contract Eligibility
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Enter your company website. Get your NAICS codes, SAM status, and
              matching opportunities in 30 seconds.{" "}
              <span className="text-stone-300 font-medium">
                Free, no signup required.
              </span>
            </p>

            {/* URL Input */}
            <div className="max-w-xl mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your company website"
                    className="w-full pl-12 pr-4 py-4 bg-stone-900 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                </div>
                <button
                  onClick={handleCheck}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-base hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Check Eligibility — Free
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-500">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-stone-600" />
                No signup required
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-600" />
                Results in 30 seconds
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-stone-600" />
                100% free
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  ANIMATED DEMO PREVIEW                                       */}
        {/* ============================================================ */}
        <section className="py-16 md:py-24 px-6 bg-stone-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                See What You&apos;ll Get
              </h2>
              <p className="text-stone-400 max-w-lg mx-auto">
                Here&apos;s a preview of your eligibility report. Real results
                are personalized to your business.
              </p>
            </div>
            <AnimatedDemo />
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WHAT YOU'LL DISCOVER                                        */}
        {/* ============================================================ */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                What You&apos;ll Discover
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto">
                One check. Six answers. Everything you need to know about your
                government contracting potential.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <BadgeCheck className="w-7 h-7 text-amber-500" />,
                  title: "Your NAICS Codes",
                  desc: "We identify your industry classification codes by analyzing your website. Most businesses qualify under 3-5 codes they never knew about.",
                },
                {
                  icon: <FileCheck className="w-7 h-7 text-emerald-500" />,
                  title: "SAM.gov Status",
                  desc: "See if you're registered and active on SAM.gov — the gateway to federal contracting. If not, we'll show you exactly how to register.",
                },
                {
                  icon: <Shield className="w-7 h-7 text-purple-500" />,
                  title: "Set-Aside Eligibility",
                  desc: "Find out which preferential programs you qualify for: 8(a), SDVOSB, WOSB, HUBZone, and more. These give you a massive competitive edge.",
                },
                {
                  icon: <Target className="w-7 h-7 text-blue-500" />,
                  title: "Matching Opportunities",
                  desc: "See real federal contracts from SAM.gov matched to your profile right now. Sorted by match score so you know which to pursue first.",
                },
                {
                  icon: <BarChart3 className="w-7 h-7 text-rose-500" />,
                  title: "Market Overview",
                  desc: "Understand your competitive landscape. See how many contractors are in your space and what agencies are spending in your category.",
                },
                {
                  icon: <ListChecks className="w-7 h-7 text-teal-500" />,
                  title: "Next Steps",
                  desc: "Get a personalized action plan based on your results. Whether you're brand new or experienced, you'll know exactly what to do next.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-stone-200 bg-stone-50 hover:shadow-lg hover:border-stone-300 transition-all group"
                >
                  <div className="p-3 bg-white rounded-xl border border-stone-100 inline-block mb-4 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-black text-stone-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  HOW IT WORKS                                                */}
        {/* ============================================================ */}
        <section className="py-16 md:py-24 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                How It Works
              </h2>
              <p className="text-stone-600">
                Three steps. Thirty seconds. Zero cost.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: "1",
                  icon: <Globe className="w-8 h-8 text-blue-500" />,
                  title: "Enter Your Website",
                  desc: "Paste your company URL. That's all we need. No forms, no phone number, no email required to see your results.",
                },
                {
                  num: "2",
                  icon: <Search className="w-8 h-8 text-amber-500" />,
                  title: "We Analyze Everything",
                  desc: "Our engine scans your website, cross-references SAM.gov, SBA databases, and 37,000+ active federal opportunities in under 30 seconds.",
                },
                {
                  num: "3",
                  icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
                  title: "See Your Results",
                  desc: "Get your NAICS codes, SAM status, set-aside eligibility, matching contracts, and a clear action plan. Save results with a free account.",
                },
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-stone-200" />
                  )}
                  <div className="relative inline-block mb-5">
                    <div className="w-24 h-24 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-stone-900 text-white text-xs font-black rounded-full flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SOCIAL PROOF STATS                                          */}
        {/* ============================================================ */}
        <section className="py-12 px-6 bg-white border-y border-stone-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "37,000+", label: "Active federal opportunities" },
                { stat: "80,000+", label: "Contractors in database" },
                { stat: "< 30 sec", label: "Average check time" },
                { stat: "100%", label: "Free, always" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-black text-stone-900">
                    {s.stat}
                  </p>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WHO IT'S FOR                                                */}
        {/* ============================================================ */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                Built for Businesses Like Yours
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto">
                Whether you&apos;re exploring government contracts for the first
                time or looking to grow your federal pipeline, the Quick Checker
                is your starting point.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <Sparkles className="w-6 h-6 text-blue-500" />,
                  title: "New to GovCon",
                  desc: "Never sold to the government? We'll tell you if you should. See your NAICS codes, check eligibility, and find contracts matched to your capabilities.",
                  tag: "Start here",
                },
                {
                  icon: <Award className="w-6 h-6 text-emerald-500" />,
                  title: "Veteran-Owned",
                  desc: "SDVOSB and VOSB set-asides can give you sole-source access to contracts up to $5M. We'll verify your eligibility and show you matching opportunities.",
                  tag: "SDVOSB eligible",
                },
                {
                  icon: <Star className="w-6 h-6 text-purple-500" />,
                  title: "Women-Owned",
                  desc: "WOSB and EDWOSB programs set aside billions annually. See which contracts are reserved for women-owned businesses in your industry.",
                  tag: "WOSB eligible",
                },
                {
                  icon: <Building2 className="w-6 h-6 text-amber-500" />,
                  title: "Small Business",
                  desc: "23% of all federal contracts are reserved for small businesses. Find out your SBA size standard and see the opportunities in your revenue range.",
                  tag: "SBA verified",
                },
                {
                  icon: <Users className="w-6 h-6 text-rose-500" />,
                  title: "8(a) & HUBZone",
                  desc: "Socially and economically disadvantaged businesses and HUBZone firms get exclusive access. We'll check your status and show available set-asides.",
                  tag: "Priority access",
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
                  title: "Established Contractors",
                  desc: "Already winning contracts? Use the checker to discover new NAICS codes, find upcoming recompetes, and expand into adjacent markets.",
                  tag: "Growth mode",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-stone-50 rounded-xl">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-50 px-2.5 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-stone-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FAQ                                                         */}
        {/* ============================================================ */}
        <section className="py-16 md:py-24 px-6 bg-stone-50">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-10">
              <HelpCircle className="w-5 h-5 text-stone-400" />
              <h2 className="text-2xl md:text-3xl font-black text-stone-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  FINAL CTA — SECOND INPUT                                    */}
        {/* ============================================================ */}
        <section className="py-20 md:py-28 px-6 bg-stone-950 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready? Check Your Eligibility Now.
            </h2>
            <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto">
              Join thousands of small businesses who discovered their government
              contracting potential with CapturePilot.
            </p>

            {/* Second URL input */}
            <div className="max-w-xl mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your company website"
                    className="w-full pl-12 pr-4 py-4 bg-stone-900 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                </div>
                <button
                  onClick={handleCheck}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-base hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Check Eligibility
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-500">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-stone-600" />
                No signup required
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-600" />
                Results in 30 seconds
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-stone-600" />
                100% free
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SOFT CTAs                                                   */}
        {/* ============================================================ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Consulting CTA */}
              <div className="p-8 rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-white hover:shadow-lg transition-all group">
                <div className="p-3 bg-amber-50 rounded-xl inline-block mb-4">
                  <Phone className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Want Us to Find and Win Contracts{" "}
                  <span className="text-amber-600">FOR</span> You?
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  Our managed consulting service handles everything — market
                  research, proposal writing, compliance, and submission.
                  You focus on delivery.
                </p>
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  className="text-sm font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  Book a Qualification Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Pro trial CTA */}
              <div className="p-8 rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-white hover:shadow-lg transition-all group">
                <div className="p-3 bg-blue-50 rounded-xl inline-block mb-4">
                  <Zap className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Want Full Access to{" "}
                  <span className="text-blue-600">All Features</span>?
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  Start your free Pro trial — AI-powered matching, proposal
                  writing, competitor intelligence, and unlimited opportunity
                  tracking. No credit card required.
                </p>
                <Link
                  href={SIGNUP_URL}
                  className="text-sm font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  Start Your Free Pro Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* ============================================================ */}
      {/*  ANIMATIONS (inline style tag)                                */}
      {/* ============================================================ */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}
