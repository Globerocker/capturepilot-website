"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Shield,
  Building2,
  TrendingUp,
  Clock,
  DollarSign,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  XCircle,
  AlertCircle,
  CheckCircle2,
  Search,
  Target,
  FileText,
  MessageSquare,
  Zap,
  Mail,
  CalendarCheck,
  BarChart3,
  Users,
  Briefcase,
  Award,
} from "lucide-react";

const TOTAL_SLIDES = 10;

export default function MasterPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const scrollToSlide = useCallback((slideNumber: number) => {
    const container = containerRef.current;
    if (!container) return;
    const slideEl = container.children[slideNumber - 1] as HTMLElement;
    if (slideEl) {
      isScrollingRef.current = true;
      slideEl.scrollIntoView({ behavior: "smooth" });
      setCurrentSlide(slideNumber);
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  }, []);

  const goNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES) scrollToSlide(currentSlide + 1);
  }, [currentSlide, scrollToSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 1) scrollToSlide(currentSlide - 1);
  }, [currentSlide, scrollToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Scroll observer to track current slide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(container.children).indexOf(
              entry.target as HTMLElement
            );
            if (index >= 0) setCurrentSlide(index + 1);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .slide-container {
            scroll-snap-type: none !important;
            overflow: visible !important;
            height: auto !important;
          }
          .slide {
            min-height: 100vh !important;
            page-break-after: always;
            page-break-inside: avoid;
          }
          .slide .stat-number {
            color: #059669 !important;
          }
          .nav-dots,
          .slide-counter,
          .nav-arrows {
            display: none !important;
          }
          .bg-red-500\\/10,
          .bg-red-900\\/20 {
            background: #fee2e2 !important;
          }
          .grid-bg {
            display: none !important;
          }
        }
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>

      {/* Navigation Dots */}
      <div className="nav-dots fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i + 1)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === i + 1
                ? "bg-emerald-500 scale-125 shadow-lg shadow-emerald-500/50"
                : "bg-stone-600 hover:bg-stone-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="slide-counter fixed bottom-6 right-6 z-50 text-stone-500 font-mono text-sm tracking-wider">
        <span className="text-emerald-500 font-semibold">{currentSlide}</span>
        <span className="mx-1">/</span>
        <span>{TOTAL_SLIDES}</span>
      </div>

      {/* Arrow Navigation */}
      <div className="nav-arrows fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        <button
          type="button"
          onClick={goPrev}
          disabled={currentSlide === 1}
          aria-label="Previous slide"
          className="p-2 rounded-lg bg-stone-800/80 text-stone-400 hover:text-white hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={currentSlide === TOTAL_SLIDES}
          aria-label="Next slide"
          className="p-2 rounded-lg bg-stone-800/80 text-stone-400 hover:text-white hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Container */}
      <div
        ref={containerRef}
        className="slide-container h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {/* ===== SLIDE 1: Title ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Animated Grid Background */}
          <div className="grid-bg absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                animation: "gridMove 20s linear infinite",
              }}
            />
          </div>
          <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
            {/* Logo */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-stone-800 rounded-full">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-stone-300 tracking-[0.3em] uppercase text-sm font-light">
                  Americurial LLC
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight leading-tight mb-8">
              Federal Contracting for{" "}
              <span className="text-emerald-500 font-light">
                Growth Companies
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-400 font-light max-w-3xl mx-auto leading-relaxed mb-16">
              How We Help Contractors Unlock Government Revenue — Without
              Building an Internal Capture Team
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-stone-700 to-transparent" />
              <p className="text-stone-600 text-sm tracking-wider uppercase">
                Americurial LLC — Veteran-Owned Federal Capture Consulting
              </p>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-stone-800" />
          <div className="absolute bottom-8 right-20 w-16 h-16 border-r border-b border-stone-800" />
        </section>

        {/* ===== SLIDE 2: The Opportunity ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-6xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Opportunity
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-2 leading-tight max-w-4xl">
              <span className="text-emerald-500">$700B+</span> in annual
              federal spending.
            </h2>
            <h3 className="text-xl md:text-2xl font-extralight text-stone-400 mb-4 max-w-3xl">
              Most qualified contractors never access it.
            </h3>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stat: "$700B+",
                  label: "Annual Federal Spending",
                  icon: Building2,
                },
                {
                  stat: "40%+",
                  label: "Set Aside for Small Business",
                  icon: TrendingUp,
                },
                {
                  stat: "5-10yr",
                  label: "Average Contract Duration",
                  icon: Clock,
                },
                {
                  stat: "90%",
                  label: "Of Qualified Contractors Never Enter",
                  icon: AlertCircle,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 group"
                >
                  <item.icon className="w-6 h-6 text-stone-600 group-hover:text-emerald-500/50 mb-6 transition-colors" />
                  <p className="stat-number text-4xl md:text-5xl font-light text-emerald-500 mb-3">
                    {item.stat}
                  </p>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-stone-800 rounded-xl bg-stone-900/50">
              <p className="text-stone-400 text-center text-sm">
                The barrier isn&apos;t capability.{" "}
                <span className="text-emerald-500 font-medium">
                  It&apos;s capture infrastructure.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 3: The Problem ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full">
            <p className="text-red-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Problem
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              You can do the work. But federal contracts aren&apos;t won by{" "}
              <span className="text-red-400">capability alone.</span>
            </h2>
            <div className="w-20 h-px bg-red-400/50 mb-16" />

            <div className="flex flex-col gap-4">
              {[
                "No federal capture team",
                "No procurement relationships",
                "Complex proposal & compliance process",
                "Long sales cycles (6-18 months)",
                "Internal bandwidth focused on commercial delivery",
              ].map((problem, i) => (
                <div
                  key={i}
                  className="bg-stone-900 border border-stone-800 rounded-xl p-6 flex items-center gap-5 hover:border-red-500/20 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    {i < 3 ? (
                      <XCircle className="w-5 h-5 text-red-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-400" />
                    )}
                  </div>
                  <p className="text-stone-300 text-lg font-light">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-stone-800 rounded-xl bg-stone-900/50">
              <p className="text-stone-400 text-center text-sm">
                This is why{" "}
                <span className="text-red-400 font-medium">90%</span> of
                qualified contractors never enter the federal market.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 4: What We Do ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-6xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Your outsourced{" "}
              <span className="text-emerald-500">
                federal capture department.
              </span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* We Handle */}
              <div className="bg-stone-900 border border-emerald-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <h3 className="text-emerald-500 text-lg font-medium tracking-wide">
                    We Handle
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    "Opportunity sourcing & qualification",
                    "Capture strategy & positioning",
                    "Agency communications (email, fax & phone)",
                    "Proposal support & compliance",
                    "Competitive positioning",
                    "Pipeline management",
                    "SAM.gov registration support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-stone-300 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* You Handle */}
              <div className="bg-stone-900 border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <h3 className="text-blue-400 text-lg font-medium tracking-wide">
                    You Handle
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    "Technical scope review",
                    "Pricing approval",
                    "Contract execution",
                    "Performance delivery",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-stone-300 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-stone-400 text-xl font-light italic">
                &ldquo;We load the gun.{" "}
                <span className="text-emerald-500 not-italic font-medium">
                  You pull the trigger.
                </span>
                &rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 5: How It Works ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-6xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight max-w-4xl">
              A proven four-phase approach to{" "}
              <span className="text-emerald-500">federal market entry.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />

            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/50 via-emerald-500/30 to-emerald-500/50" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    phase: "Phase 1",
                    title: "Market Entry",
                    time: "Month 1-3",
                    items: [
                      "SAM registration",
                      "NAICS optimization",
                      "Capability statement",
                      "Market analysis",
                    ],
                  },
                  {
                    phase: "Phase 2",
                    title: "Opportunity Capture",
                    time: "Month 3-6",
                    items: [
                      "Daily scanning",
                      "Qualification & scoring",
                      "Agency outreach",
                      "Sources Sought responses",
                    ],
                  },
                  {
                    phase: "Phase 3",
                    title: "Proposal Support",
                    time: "Month 6-12",
                    items: [
                      "Outline development",
                      "Compliance matrix",
                      "Pricing strategy",
                      "Teaming arrangements",
                    ],
                  },
                  {
                    phase: "Phase 4",
                    title: "Execution Support",
                    time: "Month 12+",
                    items: [
                      "Award transition",
                      "Performance monitoring",
                      "Recompete positioning",
                      "Portfolio growth",
                    ],
                  },
                ].map((phase, i) => (
                  <div key={i} className="relative">
                    {/* Phase dot */}
                    <div className="hidden md:flex w-6 h-6 rounded-full bg-emerald-500 border-4 border-stone-950 mx-auto mb-6 relative z-10 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-emerald-500/20 transition-all">
                      <p className="text-emerald-500 text-xs tracking-[0.2em] uppercase mb-1">
                        {phase.phase}
                      </p>
                      <p className="text-stone-500 text-xs font-mono mb-3">
                        {phase.time}
                      </p>
                      <h4 className="text-white font-medium mb-4 text-lg">
                        {phase.title}
                      </h4>
                      <ul className="space-y-2">
                        {phase.items.map((item, j) => (
                          <li
                            key={j}
                            className="text-stone-400 text-sm flex items-start gap-2"
                          >
                            <div className="w-1 h-1 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline bar */}
            <div className="mt-12">
            </div>
          </div>
        </section>

        {/* ===== SLIDE 6: Why This Model Works ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-5xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Why This Model Works
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Enterprise capability without{" "}
              <span className="text-emerald-500">enterprise overhead.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Build Internally */}
              <div className="bg-stone-900 border border-red-500/20 rounded-2xl p-8 relative">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs">
                  High Cost
                </div>
                <h3 className="text-red-400 text-xl font-medium mb-8">
                  Build Internally
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    { role: "Capture Manager", cost: "$120K+" },
                    { role: "Proposal Manager", cost: "$100K+" },
                    { role: "BD Support", cost: "$80K+" },
                    { role: "Tools & Software", cost: "$15K+" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-stone-800"
                    >
                      <span className="text-stone-400">{item.role}</span>
                      <span className="text-stone-300 font-mono">
                        {item.cost}/yr
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-500/10 rounded-xl p-6 text-center mb-4">
                  <p className="text-stone-400 text-sm mb-1">Total Cost</p>
                  <p className="text-red-400 text-4xl font-light">
                    $315K+
                    <span className="text-lg text-stone-500">/year</span>
                  </p>
                </div>
                <p className="text-stone-500 text-sm text-center italic">
                  Plus 6-12 months to hire and ramp
                </p>
              </div>

              {/* Partner With Us */}
              <div className="bg-stone-900 border-2 border-emerald-500/40 rounded-2xl p-8 relative shadow-lg shadow-emerald-500/5">
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                  Recommended
                </div>
                <h3 className="text-emerald-500 text-xl font-medium mb-8">
                  Partner With Us
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      role: "Monthly Retainer",
                      cost: "$3,500",
                      suffix: "/mo",
                    },
                    {
                      role: "Success Fee",
                      cost: "5%",
                      suffix: " on wins only",
                    },
                    {
                      role: "Commitment",
                      cost: "12",
                      suffix: " months",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-stone-800"
                    >
                      <span className="text-stone-400">{item.role}</span>
                      <span className="text-emerald-400 font-mono">
                        {item.cost}
                        <span className="text-stone-500 text-sm">
                          {item.suffix}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-500/10 rounded-xl p-6 text-center mb-4">
                  <p className="text-stone-400 text-sm mb-1">Annual Investment</p>
                  <p className="stat-number text-emerald-500 text-4xl font-light">
                    $42K
                    <span className="text-lg text-stone-500">/year</span>
                  </p>
                </div>
                <p className="text-emerald-400/70 text-sm text-center font-medium">
                  Operational in 30 days
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div />
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 text-center">
                <p className="text-stone-400 text-sm mb-1">You Save</p>
                <p className="stat-number text-emerald-500 text-3xl font-light">
                  $273K+{" "}
                  <span className="text-lg text-stone-500">Year 1</span>
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 border border-stone-800 rounded-xl bg-stone-900/50">
              <p className="text-stone-400 text-center text-sm">
                Our{" "}
                <span className="text-emerald-500 font-medium">
                  5% success fee
                </span>{" "}
                means we only earn more when you win.{" "}
                <span className="text-white">Fully aligned incentives.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 6B: Our Unfair Advantage ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-6xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Unfair Advantage
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight max-w-4xl">
              Consulting expertise powered by{" "}
              <span className="text-emerald-500">proprietary intelligence software.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Left: Software Platform */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-emerald-400 font-medium">CapturePilot Platform</h3>
                    <p className="text-stone-500 text-xs">Proprietary — built in-house</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { feature: "Smart Matching Engine", desc: "Scans 40,000+ federal opportunities daily and scores them against your profile" },
                    { feature: "Competitor Intelligence", desc: "Tracks who wins what in your space — award history, incumbents, spending trends" },
                    { feature: "AI Proposal Drafting", desc: "Generates proposal outlines in minutes — cover letter, technical approach, past performance" },
                    { feature: "Real-Time Pipeline", desc: "Every opportunity tracked from Sources Sought through award — nothing falls through cracks" },
                    { feature: "Eligibility Engine", desc: "Instant set-aside matching — know which contracts you qualify for before you invest time" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b border-stone-800/50 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">{item.feature}</p>
                        <p className="text-stone-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Human Expertise */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-blue-400 font-medium">Dedicated Capture Team</h3>
                    <p className="text-stone-500 text-xs">Veteran-owned — real GovCon experience</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { feature: "Agency Relationship Building", desc: "Direct communication with contracting officers — email, fax, phone" },
                    { feature: "Capture Strategy", desc: "Win themes, competitive positioning, teaming recommendations for each pursuit" },
                    { feature: "Proposal Development", desc: "We outline, structure, and review every proposal before submission" },
                    { feature: "Sources Sought Responses", desc: "Early engagement that shapes RFPs in your favor — highest-value activity in GovCon" },
                    { feature: "Ongoing Pipeline Management", desc: "Weekly pipeline reviews, strategy adjustments, and monthly reporting" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b border-stone-800/50 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">{item.feature}</p>
                        <p className="text-stone-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: vs competitors */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <p className="text-emerald-400 text-sm font-medium mb-4 text-center">Why This Combination Beats Every Alternative</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">Traditional Consultants</p>
                  <p className="text-stone-400 text-sm">Give recommendations.<br />Charge hourly. No software.</p>
                  <p className="text-red-400 text-xs mt-2 font-medium">You still do all the work.</p>
                </div>
                <div className="text-center border-x border-emerald-500/10 px-4">
                  <p className="text-emerald-400 text-xs uppercase tracking-wider mb-2">Americurial + CapturePilot</p>
                  <p className="text-white text-sm font-medium">Software finds opportunities.<br />Team executes the capture.<br />You just deliver the work.</p>
                  <p className="text-emerald-400 text-xs mt-2 font-medium">Full stack. Aligned incentives.</p>
                </div>
                <div className="text-center">
                  <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">SaaS-Only Platforms</p>
                  <p className="text-stone-400 text-sm">Give you a dashboard.<br />No capture team. Self-service.</p>
                  <p className="text-red-400 text-xs mt-2 font-medium">You still need to figure it out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 7: Who We Work With ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Who We Work With
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              We&apos;re selective. We only take clients we can{" "}
              <span className="text-emerald-500">win for.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />

            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 md:p-12">
              <h3 className="text-white text-lg font-medium mb-8 flex items-center gap-3">
                <Users className="w-5 h-5 text-emerald-500" />
                Ideal Client Profile
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    text: "Small & mid-size businesses ($2M+ revenue)",
                    desc: "From growing companies to established firms — we scale with you",
                  },
                  {
                    text: "Veteran-owned businesses (SDVOSB / VOSB)",
                    desc: "Thousands of set-aside contracts reserved specifically for you",
                  },
                  {
                    text: "Zero or lapsed federal bidding history",
                    desc: "Never bid before — or re-entering after years away",
                  },
                  {
                    text: "IT, Infrastructure, Construction, Logistics, or Environmental Services",
                    desc: "Industries with strong federal demand and contract volume",
                  },
                  {
                    text: "Leadership buy-in for a 12+ month commitment",
                    desc: "Federal sales cycles require patience — the payoff is recurring multi-year revenue",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-800/50 transition-all group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.text}</p>
                      <p className="text-stone-500 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 border border-emerald-500/20 rounded-xl bg-emerald-500/5 text-center">
              <p className="text-stone-300 text-lg font-light">
                If you check these boxes,{" "}
                <span className="text-emerald-500 font-medium">
                  we should talk.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 8: Results We Deliver ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-5xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Results We Deliver
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight max-w-4xl">
              What to expect in{" "}
              <span className="text-emerald-500">Year 1.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />

            <div className="space-y-6">
              {[
                {
                  month: "Month 1",
                  title: "Foundation Set",
                  desc: "SAM registered, pipeline built, first opportunities identified",
                  icon: Award,
                  color: "bg-blue-500",
                  textColor: "text-blue-400",
                  width: "25%",
                },
                {
                  month: "Month 3",
                  title: "Active Pursuit",
                  desc: "Active responses to Sources Sought and presolicitations",
                  icon: Search,
                  color: "bg-amber-500",
                  textColor: "text-amber-400",
                  width: "50%",
                },
                {
                  month: "Month 6",
                  title: "Proposals Submitted",
                  desc: "First proposals submitted, agency relationships established",
                  icon: FileText,
                  color: "bg-emerald-500",
                  textColor: "text-emerald-400",
                  width: "75%",
                },
                {
                  month: "Month 12",
                  title: "Contract Awards",
                  desc: "First contract awards expected, recurring revenue pipeline",
                  icon: Briefcase,
                  color: "bg-emerald-400",
                  textColor: "text-emerald-300",
                  width: "100%",
                },
              ].map((phase, i) => (
                <div key={i} className="group">
                  <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-emerald-500/20 transition-all">
                    <div className="flex items-center gap-6 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center flex-shrink-0`}
                      >
                        <phase.icon
                          className={`w-6 h-6 ${phase.textColor}`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-1">
                          <span
                            className={`${phase.textColor} text-sm font-mono`}
                          >
                            {phase.month}
                          </span>
                          <span className="text-white font-medium text-lg">
                            {phase.title}
                          </span>
                        </div>
                        <p className="text-stone-500 text-sm">{phase.desc}</p>
                      </div>
                    </div>
                    <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${phase.color} rounded-full transition-all duration-1000 opacity-70`}
                        style={{ width: phase.width }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-stone-800 rounded-xl bg-stone-900/50">
              <p className="text-stone-400 text-sm text-center">
                <Clock className="w-4 h-4 inline-block mr-2 text-emerald-500" />
                Federal contracts typically run{" "}
                <span className="text-white font-medium">
                  1-5 years with option years
                </span>{" "}
                — creating stable, recurring revenue.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 9: Next Steps ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Subtle grid background */}
          <div className="grid-bg absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Next Steps
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Ready to explore{" "}
              <span className="text-emerald-500">federal revenue?</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Book a 15-20 minute intro call",
                  desc: "We learn your business and assess fit",
                },
                {
                  step: "02",
                  title: "We analyze your market",
                  desc: "Free opportunity analysis for your NAICS codes",
                },
                {
                  step: "03",
                  title: "Start capturing",
                  desc: "Your federal pipeline begins within 30 days",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-stone-900 border border-stone-800 rounded-xl p-6 flex items-center gap-6 hover:border-emerald-500/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <span className="text-emerald-500 font-mono text-lg font-medium">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-700 ml-auto flex-shrink-0 group-hover:text-emerald-500 transition-colors" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <a
                href="https://meetings-na2.hubspot.com/americurial/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8 hover:bg-emerald-500/20 transition-all group"
              >
                <CalendarCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-400 font-medium">
                  Book your intro call
                </span>
                <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-stone-600 text-xs mb-8 tracking-wide">
                meetings-na2.hubspot.com/americurial/intro-call
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-stone-700 to-transparent" />
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-stone-600" />
                  <p className="text-stone-600 text-sm tracking-wider">
                    Americurial LLC — Veteran-Owned Federal Capture Consulting |
                    americurial.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-stone-800" />
          <div className="absolute bottom-8 right-20 w-16 h-16 border-r border-b border-stone-800" />
        </section>
      </div>
    </>
  );
}
