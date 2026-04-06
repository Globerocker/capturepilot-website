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
  Users,
  FileText,
  Loader2,
  Building2,
  Hash,
  BadgeCheck,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Zap,
  MapPin,
  Star,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

// ─── Animated Mockup ───────────────────────────────────────────────

function AnimatedMockup() {
  const [phase, setPhase] = useState<"idle" | "typing" | "scanning" | "results">("idle");
  const [typedText, setTypedText] = useState("");
  const [scanProgress, setScanProgress] = useState(0);
  const [visibleResults, setVisibleResults] = useState(0);
  const [opportunityCount, setOpportunityCount] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const mockupRef = useRef<HTMLDivElement>(null);

  const TARGET_URL = "www.abcservices.com";

  // Intersection observer to trigger animation on scroll
  useEffect(() => {
    const el = mockupRef.current;
    if (!el || hasPlayed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setHasPlayed(true);
          setPhase("typing");
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasPlayed]);

  // Typing effect
  useEffect(() => {
    if (phase !== "typing") return;
    if (typedText.length >= TARGET_URL.length) {
      const t = setTimeout(() => setPhase("scanning"), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setTypedText(TARGET_URL.slice(0, typedText.length + 1));
    }, 60 + Math.random() * 40);
    return () => clearTimeout(t);
  }, [phase, typedText]);

  // Scanning progress
  useEffect(() => {
    if (phase !== "scanning") return;
    if (scanProgress >= 100) {
      const t = setTimeout(() => setPhase("results"), 400);
      return () => clearTimeout(t);
    }
    const increment = scanProgress < 30 ? 3 : scanProgress < 70 ? 2 : scanProgress < 90 ? 1.5 : 1;
    const t = setTimeout(() => setScanProgress((p) => Math.min(p + increment, 100)), 30);
    return () => clearTimeout(t);
  }, [phase, scanProgress]);

  // Results appearing one by one
  useEffect(() => {
    if (phase !== "results") return;
    if (visibleResults >= 6) return;
    const t = setTimeout(() => setVisibleResults((v) => v + 1), 300);
    return () => clearTimeout(t);
  }, [phase, visibleResults]);

  // Opportunity counter animation
  useEffect(() => {
    if (visibleResults < 5) return;
    if (opportunityCount >= 47) return;
    const t = setTimeout(() => {
      setOpportunityCount((c) => Math.min(c + 1, 47));
    }, 20);
    return () => clearTimeout(t);
  }, [visibleResults, opportunityCount]);

  const resultCards = [
    {
      icon: Building2,
      label: "Company Identified",
      value: "ABC Services LLC",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Hash,
      label: "NAICS Codes Found",
      value: "badges",
      badges: ["561720", "561210", "238220"],
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: BadgeCheck,
      label: "SAM.gov Status",
      value: "Registered",
      check: true,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Award,
      label: "Set-Asides",
      value: "badges",
      badges: ["SDVOSB", "Small Business"],
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Target,
      label: "Matching Opportunities",
      value: "counter",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: Star,
      label: "Top Match",
      value: "card",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  return (
    <div ref={mockupRef} className="w-full max-w-2xl mx-auto">
      {/* Browser chrome */}
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

      {/* App content */}
      <div className="bg-white border-x border-b border-stone-200 rounded-b-2xl p-6 sm:p-8 min-h-[420px]">
        {/* URL Input */}
        <div className="mb-6">
          <label className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 block">
            Enter your company website
          </label>
          <div className="flex items-center border-2 border-stone-200 rounded-xl overflow-hidden focus-within:border-emerald-400 transition-colors">
            <div className="px-3 text-stone-300">
              <Globe className="w-5 h-5" />
            </div>
            <div className="flex-1 py-3 text-base font-mono">
              {phase === "idle" ? (
                <span className="text-stone-300">www.your-company.com</span>
              ) : (
                <span className="text-stone-900">
                  {typedText}
                  {phase === "typing" && (
                    <span className="inline-block w-0.5 h-5 bg-emerald-500 ml-0.5 align-middle animate-pulse" />
                  )}
                </span>
              )}
            </div>
            <button
              className={`px-4 py-3 font-bold text-sm transition-colors ${
                phase === "typing" || phase === "scanning"
                  ? "bg-emerald-500 text-white"
                  : phase === "results"
                  ? "bg-emerald-600 text-white"
                  : "bg-stone-100 text-stone-400"
              }`}
            >
              {phase === "scanning" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Scanning phase */}
        {phase === "scanning" && (
          <div className="space-y-3 animate-fade-in-up">
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
              <span>
                {scanProgress < 30
                  ? "Crawling website..."
                  : scanProgress < 60
                  ? "Identifying services & NAICS codes..."
                  : scanProgress < 85
                  ? "Checking SAM.gov registration..."
                  : "Finding matching opportunities..."}
              </span>
            </div>
            <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-75 ease-linear"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Results phase */}
        {phase === "results" && (
          <div className="space-y-3">
            {resultCards.map((card, i) => {
              if (i >= visibleResults) return null;
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border border-stone-100 bg-stone-50/50 animate-fade-in-up"
                  style={{ animationDuration: "0.35s" }}
                >
                  <div className={`w-9 h-9 rounded-lg ${card.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${card.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-400 font-medium">{card.label}</p>
                    {card.badges ? (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {card.badges.map((b, j) => (
                          <span
                            key={j}
                            className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.bg} ${card.color} border`}
                            style={{
                              borderColor: "currentColor",
                              opacity: 0,
                              animation: `fadeInUp 0.3s ease-out ${j * 150}ms forwards`,
                            }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    ) : card.check ? (
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-sm font-bold text-green-700">{card.value}</span>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </div>
                    ) : card.value === "counter" ? (
                      <p className="text-sm font-black text-amber-700">
                        {opportunityCount} found
                      </p>
                    ) : card.value === "card" ? (
                      <div className="mt-1 p-2 bg-white rounded-lg border border-stone-200 text-xs">
                        <p className="font-bold text-stone-900 truncate">Janitorial Services — Fort Bragg, NC</p>
                        <div className="flex items-center gap-2 mt-1 text-stone-500">
                          <span className="text-emerald-600 font-bold">92% match</span>
                          <span>$1.2M</span>
                          <span>Due Apr 30</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm font-bold text-stone-900">{card.value}</p>
                    )}
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

// ─── FAQ Item ──────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-bold text-stone-900 pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-stone-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-stone-500 text-sm leading-relaxed animate-fade-in-up" style={{ animationDuration: "0.25s" }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────

export default function QuickCheckerPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4" /> Free — No Account Required
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            See Your Government<br />
            Potential in <span className="gradient-text">30 Seconds.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Enter your company website. We crawl it, identify your services,
            check your registrations, and find matching federal contracts — instantly.
          </p>

          <div className="animate-fade-in-up animate-delay-300">
            <Link
              href={CHECK_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-stone-200"
            >
              Check Your Company Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Animated Mockup ─── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedMockup />
        </div>
      </section>

      {/* ─── What You Get ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            What You Get
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            One URL. Six powerful insights. Zero cost.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Hash,
                title: "NAICS Identification",
                desc: "We crawl your website, understand your services, and map them to the exact federal industry codes agencies use to classify contracts.",
                tag: "AI",
              },
              {
                icon: BadgeCheck,
                title: "SAM Registration Check",
                desc: "Instantly verify if your company is registered on SAM.gov — the mandatory step before bidding on any federal contract.",
                tag: "Verify",
              },
              {
                icon: Shield,
                title: "Set-Aside Eligibility",
                desc: "See which set-aside categories you qualify for: SDVOSB, WOSB, HUBZone, 8(a), Small Business, and more.",
                tag: "Smart",
              },
              {
                icon: Target,
                title: "Opportunity Matches",
                desc: "Get a count of live federal opportunities that match your industry codes, certifications, and business profile.",
                tag: "Match",
              },
              {
                icon: Users,
                title: "Competitor Overview",
                desc: "See how many other companies in your area share your NAICS codes and certifications. Know your competitive landscape.",
                tag: "Intel",
              },
              {
                icon: FileText,
                title: "Action Plan",
                desc: "Receive a personalized checklist of next steps — from getting SAM registered to preparing your first bid.",
                tag: "Guide",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-200 hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <card.icon className="w-5 h-5 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── It's Free Callout ─── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-3xl p-10 sm:p-14 border border-emerald-100">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              It&apos;s Completely <span className="gradient-text">Free.</span>
            </h2>
            <p className="text-lg text-stone-500 mb-8 max-w-xl mx-auto">
              No account. No credit card. No catch. Enter your website URL and get
              your full government readiness report in under 30 seconds.
            </p>
            <Link
              href={CHECK_URL}
              className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Run My Free Check <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-stone-400 mt-4">Takes 30 seconds. Results are instant.</p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="bg-white rounded-2xl border border-stone-200 px-6 sm:px-8 divide-stone-200">
            <FAQItem
              q="What do I need to run a check?"
              a="Just your company website URL. We crawl your site to understand your services, then cross-reference SAM.gov and our database of 40,000+ federal opportunities. No login or account required."
            />
            <FAQItem
              q="How accurate are the NAICS codes?"
              a="Our AI analyzes your website content, service descriptions, and industry language to identify relevant NAICS codes. We typically identify 3-8 codes with high accuracy. You can always refine them in the full dashboard."
            />
            <FAQItem
              q="What if my company isn't on SAM.gov?"
              a="That's perfectly fine — and actually one of the most valuable things the checker reveals. We'll show you exactly what steps to take to get registered, which is required before you can bid on any federal contract."
            />
            <FAQItem
              q="Is the opportunity count accurate?"
              a="Yes. We match against live, active opportunities on SAM.gov based on the NAICS codes we identify for your business. The full dashboard lets you see each opportunity in detail with match scores."
            />
            <FAQItem
              q="What happens after I run the check?"
              a="You get your results instantly on screen. From there, you can create a free account to save your results, see detailed opportunity matches, or upgrade to Pro for AI proposal writing and the full platform."
            />
            <FAQItem
              q="Can I check a competitor's company?"
              a="Absolutely. Enter any company website to see their government profile, NAICS codes, and how many opportunities match them. It's a great way to scope out the competitive landscape before you bid."
            />
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to See What You Qualify For?
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Thousands of federal contracts are posted every week. Find out which ones
            match your business — for free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CHECK_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Check Your Company <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={SIGNUP_URL}
              className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors inline-flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" /> Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
