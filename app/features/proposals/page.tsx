"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  FileText,
  Clock,
  Sparkles,
  CheckCircle2,
  Upload,
  Brain,
  Download,
  BarChart3,
  Shield,
  Users,
  DollarSign,
  ListChecks,
  Zap,
  TrendingUp,
  Award,
  Timer,
  AlertTriangle,
  Coffee,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

/* ------------------------------------------------------------------ */
/*  Typewriter hook                                                    */
/* ------------------------------------------------------------------ */
function useTypewriter(text: string, speed = 30, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, started]);

  return { displayed, done, started };
}

/* ------------------------------------------------------------------ */
/*  Animated proposal mockup                                           */
/* ------------------------------------------------------------------ */
function ProposalMockup() {
  const [visibleSections, setVisibleSections] = useState(0);
  const [aiThinking, setAiThinking] = useState(true);
  const [progressPct, setProgressPct] = useState(0);

  const title = useTypewriter(
    "Technical Proposal: Facilities Maintenance Services",
    25,
    1200,
  );

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgressPct((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    // AI thinking stops after progress completes
    const thinkTimer = setTimeout(() => setAiThinking(false), 4200);

    // Reveal sections one by one
    const timers = [1800, 2600, 3400, 4200].map((delay, i) =>
      setTimeout(() => setVisibleSections((v) => Math.max(v, i + 1)), delay),
    );

    return () => {
      clearInterval(progressInterval);
      clearTimeout(thinkTimer);
      timers.forEach(clearTimeout);
    };
  }, []);

  const sections = [
    {
      label: "Cover Letter",
      color: "bg-emerald-500",
      content:
        "Dear Contracting Officer, We are pleased to submit our proposal for Solicitation #FA8501-26-R-0042. Our firm brings 12 years of experience in federal facilities maintenance...",
    },
    {
      label: "Technical Approach",
      color: "bg-sky-500",
      content:
        "Our phased approach addresses each PWS requirement systematically. Phase 1: Transition-In (Days 1-30) establishes on-site teams, quality controls, and reporting cadence...",
    },
    {
      label: "Past Performance",
      color: "bg-violet-500",
      content:
        "Contract W91278-22-C-0015 | Dept. of Army | $3.2M | CPARS: Exceptional. Delivered 98.7% uptime across 14 facilities with zero safety incidents...",
    },
    {
      label: "Pricing Strategy",
      color: "bg-amber-500",
      content:
        "Based on GSA Schedule pricing and competitive analysis, we propose a firm-fixed-price of $2,847,500 for the base year with 2.3% annual escalation...",
    },
  ];

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 via-sky-200 to-violet-200 rounded-3xl opacity-30 blur-2xl" />

      <div className="relative bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-5 py-3 bg-stone-50 border-b border-stone-200">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs text-stone-400 font-mono">
            proposal-draft.docx
          </span>
          {aiThinking && (
            <span className="ml-auto text-xs text-emerald-600 font-medium flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              AI Drafting...
            </span>
          )}
          {!aiThinking && (
            <span className="ml-auto text-xs text-emerald-600 font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Complete
            </span>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-stone-100">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progressPct, 100)}%` }}
          />
        </div>

        {/* Document body */}
        <div className="p-6 sm:p-8 min-h-[340px]">
          {/* Title with typewriter */}
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">
              Proposal Title
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
              {title.displayed}
              {!title.done && (
                <span className="inline-block w-0.5 h-5 bg-emerald-500 ml-0.5 animate-pulse align-text-bottom" />
              )}
            </h3>
          </div>

          {/* Sections sliding in */}
          <div className="space-y-4">
            {sections.map((section, i) => (
              <div
                key={i}
                className="transition-all duration-700 ease-out"
                style={{
                  opacity: visibleSections > i ? 1 : 0,
                  transform:
                    visibleSections > i
                      ? "translateX(0)"
                      : "translateX(-30px)",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className={`w-2 h-2 rounded-full ${section.color}`}
                  />
                  <span className="text-xs font-bold uppercase tracking-wide text-stone-500">
                    {section.label}
                  </span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed pl-4 border-l-2 border-stone-100">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Intersection Observer for scroll animations                        */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ------------------------------------------------------------------ */
/*  Animated stat counter                                              */
/* ------------------------------------------------------------------ */
function AnimatedStat({
  value,
  suffix,
  label,
  icon: Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-emerald-600" />
      </div>
      <p className="text-4xl font-black text-stone-900">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-stone-500 mt-1">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */
export default function ProposalsPage() {
  const processObs = useInView(0.1);
  const cardsObs = useInView(0.1);

  const processSteps = [
    {
      icon: Upload,
      title: "Paste the Solicitation",
      desc: "Drop in the RFP, Sources Sought, or solicitation number. CapturePilot extracts every requirement, evaluation criterion, and compliance item automatically.",
      color: "bg-sky-50 border-sky-200 text-sky-600",
    },
    {
      icon: Brain,
      title: "AI Analyzes Requirements",
      desc: "Our engine cross-references the solicitation against your capability statement, past performance, NAICS codes, and pricing history to build a tailored response.",
      color: "bg-violet-50 border-violet-200 text-violet-600",
    },
    {
      icon: Download,
      title: "Download Your Draft",
      desc: "Get a structured proposal draft in Word format. Cover letter outline, technical approach framework, past performance structure, pricing, and compliance matrix — ready for your review and refinement.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  const includedCards = [
    {
      icon: FileText,
      title: "Cover Letter",
      desc: "Professional, tailored cover letter addressing the contracting officer by name with your key differentiators front and center.",
    },
    {
      icon: Shield,
      title: "Technical Approach",
      desc: "Section-by-section response to every PWS requirement with your methodology, staffing plan, and quality controls.",
    },
    {
      icon: Award,
      title: "Past Performance",
      desc: "Auto-populated from your CPARS and contract history. Formatted to evaluation criteria with relevance narratives.",
    },
    {
      icon: Users,
      title: "Management Plan",
      desc: "Organizational chart, key personnel resumes, transition plan, and risk mitigation strategy tailored to the scope.",
    },
    {
      icon: DollarSign,
      title: "Pricing Strategy",
      desc: "Competitive price-to-win analysis based on historical award data, GSA schedules, and market rate benchmarks.",
    },
    {
      icon: ListChecks,
      title: "Compliance Matrix",
      desc: "Every solicitation requirement mapped to your proposal section with page references. Zero compliance gaps.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ============ HERO ============ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4" /> AI Proposal Writer
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Draft Your Proposals<br />
            in <span className="gradient-text">Minutes, Not Weeks.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Paste a solicitation. Get a comprehensive first draft with
            technical approach framework, past performance structure, pricing outline, and
            compliance matrix — generated in under 15 minutes. You review, refine, and finalize.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Try It Free — 30 Days <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors inline-flex items-center gap-2"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ANIMATED PROPOSAL MOCKUP ============ */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ProposalMockup />
        </div>
      </section>

      {/* ============ BEFORE vs AFTER ============ */}
      <section className="py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            The Old Way vs. The <span className="gradient-text">CapturePilot</span> Way
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            Government proposals shouldn&apos;t cost you 40 hours and $15,000 per submission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white rounded-2xl border border-red-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-orange-400" />
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-full px-3 py-1 text-xs font-bold mb-6">
                <AlertTriangle className="w-3.5 h-3.5" /> Without CapturePilot
              </div>
              <div className="space-y-5">
                {[
                  {
                    icon: Clock,
                    text: "40+ hours per proposal",
                    sub: "Nights and weekends, every single bid",
                  },
                  {
                    icon: DollarSign,
                    text: "$10,000 - $25,000 per proposal",
                    sub: "Hiring consultants or proposal writers",
                  },
                  {
                    icon: Coffee,
                    text: "Manual compliance tracking",
                    sub: "Spreadsheets, sticky notes, missed requirements",
                  },
                  {
                    icon: AlertTriangle,
                    text: "15% average win rate",
                    sub: "Generic proposals that don't stand out",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4.5 h-4.5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{item.text}</p>
                      <p className="text-xs text-stone-400">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-white rounded-2xl border border-emerald-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-sky-400" />
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1 text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5" /> With CapturePilot
              </div>
              <div className="space-y-5">
                {[
                  {
                    icon: Zap,
                    text: "15 minutes to a first draft",
                    sub: "Paste, generate, refine. That simple.",
                  },
                  {
                    icon: DollarSign,
                    text: "$0 marginal cost per proposal",
                    sub: "Unlimited proposals on every plan",
                  },
                  {
                    icon: ListChecks,
                    text: "Automated compliance matrix",
                    sub: "Every requirement tracked and cross-referenced",
                  },
                  {
                    icon: TrendingUp,
                    text: "3x higher win rate",
                    sub: "Tailored, data-driven proposals every time",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4.5 h-4.5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{item.text}</p>
                      <p className="text-xs text-stone-400">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS — 3 STEPS ============ */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto" ref={processObs.ref}>
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Three Steps. One Strong First Draft.
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            No templates to fill. No boilerplate to copy-paste. Just results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative text-center transition-all duration-700 ease-out"
                style={{
                  opacity: processObs.inView ? 1 : 0,
                  transform: processObs.inView
                    ? "translateY(0)"
                    : "translateY(40px)",
                  transitionDelay: `${i * 200}ms`,
                }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 bg-black text-white rounded-full text-xs font-bold flex items-center justify-center z-10">
                  {i + 1}
                </div>

                <div className="bg-white rounded-2xl border border-stone-200 p-8 pt-10 hover-lift">
                  <div
                    className={`w-14 h-14 ${step.color} border rounded-2xl flex items-center justify-center mx-auto mb-5`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-stone-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED — 6 CARDS ============ */}
      <section className="py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="max-w-5xl mx-auto" ref={cardsObs.ref}>
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Every Section, Handled.
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            AI generates a comprehensive first draft including cover letter outline, technical approach framework, and past performance structure. You review, refine, and finalize before submission.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-stone-200 p-6 hover-lift transition-all duration-700 ease-out"
                style={{
                  opacity: cardsObs.inView ? 1 : 0,
                  transform: cardsObs.inView
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">
            The Numbers Speak for Themselves
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <AnimatedStat
              icon={Timer}
              value={160}
              suffix="+"
              label="Hours saved per month"
            />
            <AnimatedStat
              icon={TrendingUp}
              value={3}
              suffix="x"
              label="Win-rate increase"
            />
            <AnimatedStat
              icon={FileText}
              value={15}
              suffix=" min"
              label="Average first draft time"
            />
            <AnimatedStat
              icon={BarChart3}
              value={100}
              suffix="%"
              label="Compliance coverage"
            />
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section className="py-20 px-6 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-8 h-8 text-emerald-600 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug mb-6">
            &ldquo;We went from submitting 2 proposals a month to 12. Our win
            rate actually went <em>up</em>. CapturePilot paid for itself on the
            first contract we won.&rdquo;
          </blockquote>
          <div>
            <p className="font-bold text-stone-900">Marcus Thompson</p>
            <p className="text-sm text-stone-500">
              CEO, Vanguard Federal Services (SDVOSB)
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FileText className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Stop Starting Proposals from Scratch.
          </h2>
          <p className="text-lg text-stone-500 mb-8 max-w-xl mx-auto">
            Your next proposal first draft is 15 minutes away. AI gives you a strong foundation — you refine and make it yours. Start free — no
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free — 30 Days <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="text-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
