"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Check,
  X,
  Minus,
  Search,
  Target,
  FileText,
  Trophy,
  Sparkles,
  BarChart3,
  Shield,
  Users,
  Zap,
  Brain,
  Rocket,
  ChevronRight,
  Star,
  ArrowUpRight,
  Crosshair,
  PenTool,
  TrendingUp,
  Layers,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

/* ------------------------------------------------------------------ */
/*  Scroll-triggered fade-in hook                                      */
/* ------------------------------------------------------------------ */
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/*  Comparison row component                                           */
/* ------------------------------------------------------------------ */
function ComparisonRow({
  feature,
  cp,
  gt,
  delay,
}: {
  feature: string;
  cp: string | boolean;
  gt: string | boolean;
  delay: number;
}) {
  const { ref, visible } = useFadeIn(0.1);

  const renderValue = (val: string | boolean, isCP: boolean) => {
    if (val === true)
      return (
        <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold">
          <Check className="w-5 h-5" /> Yes
        </span>
      );
    if (val === false)
      return (
        <span className="inline-flex items-center gap-1.5 text-stone-400">
          <X className="w-5 h-5" /> No
        </span>
      );
    if (val === "Basic")
      return (
        <span className="inline-flex items-center gap-1.5 text-amber-500 font-medium">
          <Minus className="w-5 h-5" /> Basic
        </span>
      );
    return (
      <span className={isCP ? "font-semibold text-stone-900" : "text-stone-600"}>
        {val}
      </span>
    );
  };

  return (
    <div
      ref={ref}
      className={`grid grid-cols-3 gap-4 py-4 px-4 md:px-6 border-b border-stone-100 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-sm md:text-base font-medium text-stone-700">{feature}</div>
      <div className="text-sm md:text-base text-center">{renderValue(cp, true)}</div>
      <div className="text-sm md:text-base text-center">{renderValue(gt, false)}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pipeline step component                                            */
/* ------------------------------------------------------------------ */
function PipelineStep({
  icon: Icon,
  label,
  cpStatus,
  gtStatus,
  index,
}: {
  icon: React.ElementType;
  label: string;
  cpStatus: string;
  gtStatus: string;
  index: number;
}) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-stone-900">{label}</p>
        <div className="flex gap-4 mt-1 text-sm">
          <span className="text-emerald-600 font-medium">{cpStatus}</span>
          <span className="text-stone-400">{gtStatus}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature card component                                             */
/* ------------------------------------------------------------------ */
function FeatureCard({
  icon: Icon,
  title,
  description,
  link,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  delay: number;
}) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-xl hover:border-stone-300 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-stone-50 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-300 mb-5">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-600 leading-relaxed mb-5">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-3 transition-all duration-300"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
export default function VsGovTribePage() {
  const heroFade = useFadeIn(0.05);
  const tableFade = useFadeIn(0.1);
  const pipelineFade = useFadeIn(0.1);
  const bestForFade = useFadeIn(0.1);
  const ctaFade = useFadeIn(0.1);

  const comparisonData: { feature: string; cp: string | boolean; gt: string | boolean }[] = [
    { feature: "AI Proposal Writer", cp: true, gt: false },
    { feature: "Capability Statement Builder", cp: true, gt: false },
    { feature: "Smart Matching Algorithm", cp: true, gt: false },
    { feature: "Quick Checker", cp: true, gt: false },
    { feature: "Contract Search", cp: true, gt: true },
    { feature: "Award History", cp: true, gt: true },
    { feature: "Market Intelligence", cp: true, gt: "Basic" },
    { feature: "Deal Pipeline", cp: true, gt: false },
    { feature: "Consulting Support", cp: true, gt: false },
    { feature: "Starting Price", cp: "$199/mo", gt: "$50/mo" },
    { feature: "Free Tier", cp: true, gt: true },
  ];

  const pipelineSteps = [
    {
      icon: Search,
      label: "Find Opportunities",
      cpStatus: "CapturePilot: AI-matched",
      gtStatus: "GovTribe: Manual search",
    },
    {
      icon: Crosshair,
      label: "Qualify & Score",
      cpStatus: "CapturePilot: 140-point scoring",
      gtStatus: "GovTribe: Not available",
    },
    {
      icon: PenTool,
      label: "Write Proposals",
      cpStatus: "CapturePilot: AI-generated",
      gtStatus: "GovTribe: Not available",
    },
    {
      icon: Trophy,
      label: "Win Contracts",
      cpStatus: "CapturePilot: Full support",
      gtStatus: "GovTribe: You're on your own",
    },
  ];

  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.03),transparent_50%)]" />
          <div
            ref={heroFade.ref}
            className={`relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center transition-all duration-1000 ${
              heroFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 text-sm text-stone-600 mb-8 shadow-sm">
              <Layers className="w-4 h-4" />
              Competitor Comparison
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6 leading-[1.1]">
              CapturePilot vs{" "}
              <span className="bg-gradient-to-r from-stone-600 to-stone-400 bg-clip-text text-transparent">
                GovTribe
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto mb-4 leading-relaxed">
              GovTribe helps you <span className="font-semibold text-stone-900">search</span>.{" "}
              CapturePilot helps you <span className="font-semibold text-stone-900">win</span>.
            </p>
            <p className="text-base text-stone-500 max-w-2xl mx-auto mb-10">
              Both platforms index federal opportunities. Only one gives you the AI tools,
              scoring engine, and capture pipeline to actually close deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Winning Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#comparison"
                className="border border-stone-300 text-stone-700 px-8 py-3.5 rounded-full font-bold hover:bg-stone-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                See Full Comparison <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section id="comparison" className="py-20 px-6">
          <div
            ref={tableFade.ref}
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              tableFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-4">
                Feature-by-Feature Comparison
              </h2>
              <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                GovTribe is a solid search tool. CapturePilot is a complete capture management platform.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 gap-4 py-4 px-4 md:px-6 bg-stone-50 border-b border-stone-200">
                <div className="text-sm font-bold text-stone-500 uppercase tracking-wider">
                  Feature
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-stone-900 bg-black text-white px-3 py-1 rounded-full">
                    CapturePilot
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-stone-500">GovTribe</span>
                </div>
              </div>

              {/* Table rows */}
              {comparisonData.map((row, i) => (
                <ComparisonRow
                  key={row.feature}
                  feature={row.feature}
                  cp={row.cp}
                  gt={row.gt}
                  delay={i * 80}
                />
              ))}
            </div>

            <p className="text-center text-sm text-stone-400 mt-6">
              GovTribe pricing as of April 2026. Subject to change.
            </p>
          </div>
        </section>

        {/* ── Search vs Capture Pipeline ── */}
        <section className="py-20 px-6 bg-stone-50">
          <div
            ref={pipelineFade.ref}
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              pipelineFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-4">
                Search vs. Capture
              </h2>
              <p className="text-stone-600 text-lg max-w-3xl mx-auto">
                GovTribe stops at discovery. CapturePilot covers the entire capture lifecycle &mdash;
                from finding the right opportunities to submitting winning proposals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* CapturePilot Pipeline */}
              <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">CapturePilot</h3>
                    <p className="text-sm text-emerald-600 font-medium">Full Capture Pipeline</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {pipelineSteps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <step.icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-stone-900 text-sm">{step.label}</p>
                        <p className="text-sm text-emerald-600">{step.cpStatus.replace("CapturePilot: ", "")}</p>
                      </div>
                      {i < pipelineSteps.length - 1 && (
                        <div className="hidden" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* GovTribe Stops Here */}
              <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-500 flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">GovTribe</h3>
                    <p className="text-sm text-stone-400 font-medium">Search Only</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {pipelineSteps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            i === 0
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-stone-50 text-stone-300"
                          }`}
                        >
                          {i === 0 ? (
                            <step.icon className="w-4 h-4" />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                      <div>
                        <p
                          className={`font-semibold text-sm ${
                            i === 0 ? "text-stone-900" : "text-stone-400"
                          }`}
                        >
                          {step.label}
                        </p>
                        <p className={`text-sm ${i === 0 ? "text-stone-500" : "text-stone-300"}`}>
                          {i === 0
                            ? "Manual keyword search"
                            : "Not available"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                  <p className="text-sm text-amber-700 font-medium">
                    GovTribe is a search tool &mdash; it helps you find contracts but leaves the
                    hard part (qualifying, writing, winning) entirely up to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature Deep-Dive Cards ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-4">
                What CapturePilot Has That GovTribe Doesn&apos;t
              </h2>
              <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                These are the tools that turn opportunity awareness into contract wins.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                icon={Sparkles}
                title="AI Proposal Writer"
                description="Generate compliant, tailored proposals in minutes. Our AI reads the solicitation, understands evaluation criteria, and writes Section L/M-ready responses."
                link="/features/proposals"
                delay={0}
              />
              <FeatureCard
                icon={FileText}
                title="Capability Statement Builder"
                description="Create professional capability statements with AI assistance or paste a transcript. Export PDF-ready documents that make contracting officers take notice."
                link="/features/capability-statement"
                delay={150}
              />
              <FeatureCard
                icon={Target}
                title="140-Point Smart Matching"
                description="Our deterministic scoring engine evaluates NAICS, PSC, set-aside, geography, contract value, past performance, and incumbent risk to surface your best-fit opportunities."
                link="/features/matching"
                delay={300}
              />
              <FeatureCard
                icon={BarChart3}
                title="Deal Pipeline & Intelligence"
                description="Track opportunities from discovery to award. Monitor incumbents, award history, competitive landscape, and market trends in one dashboard."
                link="/features/pipeline"
                delay={450}
              />
            </div>
          </div>
        </section>

        {/* ── Best For Section ── */}
        <section className="py-20 px-6 bg-stone-50">
          <div
            ref={bestForFade.ref}
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              bestForFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900 mb-4">
                Which One Is Right for You?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* GovTribe Best For */}
              <div className="bg-white rounded-2xl border border-stone-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-6 h-6 text-stone-500" />
                  <h3 className="text-xl font-bold text-stone-900">GovTribe is best if&hellip;</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "You just need a SAM.gov search alternative",
                    "You already have a capture process and team",
                    "Budget is your primary concern",
                    "You only need to browse and track opportunities",
                    "You have in-house proposal writers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-stone-500" />
                        </div>
                      </div>
                      <span className="text-stone-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm text-stone-500">
                    <span className="font-semibold text-stone-700">Starting at $50/mo</span> &mdash;
                    Good for research and monitoring.
                  </p>
                </div>
              </div>

              {/* CapturePilot Best For */}
              <div className="bg-white rounded-2xl border-2 border-black p-8 relative">
                <div className="absolute -top-3 right-6">
                  <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <Star className="w-3 h-3" /> Recommended
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-bold text-stone-900">CapturePilot is best if&hellip;</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "You want AI to find AND qualify opportunities for you",
                    "You need help writing compliant proposals",
                    "You're a small business competing against larger firms",
                    "You want a complete capture pipeline in one tool",
                    "You need expert consulting support on demand",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                      </div>
                      <span className="text-stone-700 text-sm leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm text-stone-500">
                    <span className="font-semibold text-stone-700">Starting at $199/mo</span> &mdash;
                    Everything you need to win, not just search.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6">
          <div
            ref={ctaFade.ref}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              ctaFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-br from-stone-900 to-black rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_50%)]" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Stop Searching. Start Winning.
                </h2>
                <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
                  Join small businesses using CapturePilot to find, qualify, and win
                  government contracts &mdash; with AI-powered proposals and expert support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={SIGNUP_URL}
                    className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-stone-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    Start Free Today <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/features/matching"
                    className="border border-stone-600 text-stone-300 px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    See How Matching Works <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-stone-500 text-sm mt-6">
                  Free tier available. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
