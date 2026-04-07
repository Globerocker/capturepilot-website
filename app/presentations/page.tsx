"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Shield,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  XCircle,
  AlertCircle,
  CheckCircle2,
  Search,
  Target,
  FileText,
  Zap,
  CalendarCheck,
  BarChart3,
  Clock,
} from "lucide-react";

const TOTAL_SLIDES = 14;

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
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-stone-800" />
          <div className="absolute bottom-8 right-20 w-16 h-16 border-r border-b border-stone-800" />
        </section>

        {/* ===== SLIDE 2: The Number ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full text-center">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-12 font-medium">
              The Opportunity
            </p>
            <p className="stat-number text-8xl md:text-[10rem] font-extralight text-emerald-500 leading-none mb-12">
              $700B+
            </p>
            <p className="text-xl md:text-2xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
              The U.S. government spends over $700 billion on contracts every year.
            </p>
          </div>
        </section>

        {/* ===== SLIDE 3: The Set-Aside ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full text-center">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-12 font-medium">
              Small Business Advantage
            </p>
            <p className="stat-number text-8xl md:text-[10rem] font-extralight text-emerald-500 leading-none mb-12">
              40%+
            </p>
            <p className="text-xl md:text-2xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Set aside specifically for small and mid-size businesses.
            </p>
            <p className="text-stone-500 text-lg font-light tracking-wide">
              Construction. IT. Engineering. Telecom. Facility Services.
            </p>
          </div>
        </section>

        {/* ===== SLIDE 4: The Stability ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full text-center">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-12 font-medium">
              Contract Stability
            </p>
            <p className="stat-number text-7xl md:text-[9rem] font-extralight text-emerald-500 leading-none mb-12">
              5-10 Years
            </p>
            <p className="text-xl md:text-2xl text-stone-400 font-light max-w-3xl mx-auto leading-relaxed">
              Average contract duration with option years. Recurring, predictable
              revenue backed by the federal government.
            </p>
          </div>
        </section>

        {/* ===== SLIDE 5: The Problem ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full">
            <p className="text-red-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Problem
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Federal contracts aren&apos;t won by{" "}
              <span className="text-red-400">capability alone.</span>
            </h2>
            <div className="w-20 h-px bg-red-400/50 mb-16" />
            <div className="flex flex-col gap-5">
              {[
                "No federal capture team",
                "No agency relationships",
                "Complex proposal & compliance process",
                "Long sales cycles (6-18 months)",
                "Internal bandwidth focused on commercial work",
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
                  <p className="text-stone-300 text-lg font-light">{problem}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 p-6 border border-stone-800 rounded-xl bg-stone-900/50">
              <p className="text-stone-400 text-center text-base">
                This is why{" "}
                <span className="text-red-400 font-medium">90%</span> of
                qualified contractors never enter the federal market.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 6: The Cost of Building Internally ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-3xl mx-auto px-8 w-full">
            <p className="text-red-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Cost
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Building an internal capture team{" "}
              <span className="text-red-400">isn&apos;t cheap.</span>
            </h2>
            <div className="w-20 h-px bg-red-400/50 mb-16" />
            <div className="bg-stone-900 border border-red-500/20 rounded-2xl p-8 md:p-10">
              <div className="space-y-5 mb-10">
                {[
                  { role: "Capture Manager", cost: "$120K+" },
                  { role: "Proposal Manager", cost: "$100K+" },
                  { role: "BD Support", cost: "$80K+" },
                  { role: "Tools & Software", cost: "$15K+" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-stone-800"
                  >
                    <span className="text-stone-400 text-lg">{item.role}</span>
                    <span className="text-stone-300 font-mono text-lg">
                      {item.cost}/yr
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-red-500/10 rounded-xl p-8 text-center mb-6">
                <p className="text-stone-400 text-sm mb-2">Total Cost</p>
                <p className="text-red-400 text-5xl md:text-6xl font-light">
                  $315K+
                  <span className="text-xl text-stone-500">/year</span>
                </p>
              </div>
              <p className="text-stone-500 text-base text-center italic">
                Plus 6-12 months to hire and ramp.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 7: A Better Way ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-3xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              A Better Way
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Partner with us{" "}
              <span className="text-emerald-500">instead.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />
            <div className="bg-stone-900 border-2 border-emerald-500/40 rounded-2xl p-8 md:p-10 shadow-lg shadow-emerald-500/5">
              <div className="space-y-5 mb-10">
                {[
                  { label: "Monthly Retainer", value: "$3,500", suffix: "/mo" },
                  { label: "Success Fee", value: "5%", suffix: " on wins only" },
                  { label: "Commitment", value: "12", suffix: " months" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-stone-800"
                  >
                    <span className="text-stone-400 text-lg">{item.label}</span>
                    <span className="text-emerald-400 font-mono text-lg">
                      {item.value}
                      <span className="text-stone-500 text-sm">{item.suffix}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-8 text-center mb-6">
                <p className="text-stone-400 text-sm mb-2">Annual Investment</p>
                <p className="stat-number text-emerald-500 text-5xl md:text-6xl font-light">
                  $42K
                  <span className="text-xl text-stone-500">/year</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl px-6 py-3">
                  <p className="text-emerald-400 text-lg font-medium text-center">
                    Save $273K+
                  </p>
                </div>
              </div>
            </div>
            <p className="text-stone-400 text-center text-base mt-10 font-light">
              Operational in 30 days. Aligned incentives.
            </p>
          </div>
        </section>

        {/* ===== SLIDE 8: What We Do For You ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-3xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Your outsourced{" "}
              <span className="text-emerald-500">federal capture department.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />
            <div className="bg-stone-900 border border-emerald-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="text-emerald-500 text-lg font-medium tracking-wide">
                  We Handle
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  "Opportunity sourcing & qualification",
                  "Capture strategy & positioning",
                  "Agency communication (email, fax, phone)",
                  "Proposal outlines & compliance",
                  "Pipeline management",
                  "SAM.gov registration support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-stone-300 text-lg font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 p-6 border border-stone-800 rounded-xl bg-stone-900/50">
              <p className="text-stone-400 text-center text-base">
                You focus on{" "}
                <span className="text-white font-medium">
                  technical delivery, pricing, and execution.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 9: Our Software Advantage ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Software Advantage
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Powered by{" "}
              <span className="text-emerald-500">CapturePilot</span> —
            </h2>
            <p className="text-xl text-stone-400 font-light mb-4">
              our proprietary intelligence platform.
            </p>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />
            <div className="flex flex-col gap-5">
              {[
                { icon: Search, title: "Smart Matching", desc: "40,000+ opportunities scanned daily" },
                { icon: Target, title: "Competitor Intelligence", desc: "Who wins what in your space" },
                { icon: FileText, title: "AI Proposal Drafting", desc: "First drafts in minutes" },
                { icon: Zap, title: "Eligibility Engine", desc: "Instant set-aside qualification" },
                { icon: BarChart3, title: "Real-Time Pipeline", desc: "Every deal tracked end-to-end" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-stone-900 border border-stone-800 rounded-xl p-6 flex items-center gap-6 hover:border-emerald-500/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SLIDE 10: Software + Team = Unfair Advantage ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-5xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Software + Team ={" "}
              <span className="text-emerald-500">Unfair Advantage.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 flex flex-col items-center text-center">
                <p className="text-stone-500 text-xs uppercase tracking-[0.2em] mb-6">
                  Traditional Consultants
                </p>
                <p className="text-stone-400 text-base leading-relaxed mb-6">
                  Recommendations only.
                </p>
                <p className="text-red-400 text-sm font-medium">You do the work.</p>
              </div>
              <div className="bg-stone-900 border-2 border-emerald-500/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg shadow-emerald-500/5">
                <p className="text-emerald-400 text-xs uppercase tracking-[0.2em] mb-6">
                  Americurial + CapturePilot
                </p>
                <p className="text-white text-base font-medium leading-relaxed mb-6">
                  Software finds.<br />
                  Team executes.<br />
                  You deliver.
                </p>
                <p className="text-emerald-400 text-sm font-medium">
                  Full stack. Aligned incentives.
                </p>
              </div>
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 flex flex-col items-center text-center">
                <p className="text-stone-500 text-xs uppercase tracking-[0.2em] mb-6">
                  SaaS Platforms
                </p>
                <p className="text-stone-400 text-base leading-relaxed mb-6">
                  Dashboard only.
                </p>
                <p className="text-red-400 text-sm font-medium">Figure it out yourself.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 11: The Process ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-5xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Process
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              A proven path to{" "}
              <span className="text-emerald-500">federal revenue.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />
            <div className="relative">
              <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/50 via-emerald-500/30 to-emerald-500/50" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { phase: "Phase 1", time: "Month 1-3", title: "Pipeline Creation" },
                  { phase: "Phase 2", time: "Month 3-6", title: "Active Bidding" },
                  { phase: "Phase 3", time: "Month 6-12", title: "First Awards" },
                  { phase: "Phase 4", time: "Month 12+", title: "Portfolio Growth" },
                ].map((phase, i) => (
                  <div key={i} className="relative">
                    <div className="hidden md:flex w-6 h-6 rounded-full bg-emerald-500 border-4 border-stone-950 mx-auto mb-6 relative z-10 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 hover:border-emerald-500/20 transition-all text-center">
                      <p className="text-emerald-500 text-xs tracking-[0.2em] uppercase mb-1">
                        {phase.phase}
                      </p>
                      <p className="text-stone-500 text-xs font-mono mb-4">{phase.time}</p>
                      <h4 className="text-white font-medium text-xl">{phase.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14 p-6 border border-stone-800 rounded-xl bg-stone-900/50">
              <p className="text-stone-400 text-center text-base">
                <Clock className="w-4 h-4 inline-block mr-2 text-emerald-500" />
                Federal sales cycles are longer — but the revenue is{" "}
                <span className="text-white font-medium">stable and recurring.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ===== SLIDE 12: Who We Work With ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-3xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Who We Work With
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              We&apos;re{" "}
              <span className="text-emerald-500">selective.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />
            <div className="flex flex-col gap-6">
              {[
                "Established 5+ years with $2M+ revenue",
                "Veteran-owned businesses (SDVOSB / VOSB)",
                "Zero or lapsed federal bidding history",
                "IT, Infrastructure, Construction, Logistics, or Environmental Services",
                "Leadership buy-in for a 12+ month commitment",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-stone-900 border border-stone-800 rounded-xl p-6 flex items-center gap-5 hover:border-emerald-500/20 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <p className="text-stone-300 text-lg font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SLIDE 13: What to Expect ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full">
            <p className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What to Expect
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
              Your first{" "}
              <span className="text-emerald-500">12 months.</span>
            </h2>
            <div className="w-20 h-px bg-emerald-500/50 mb-16" />
            <div className="space-y-6">
              {[
                { month: "Month 1", milestone: "SAM registered, pipeline built", color: "text-blue-400", barColor: "bg-blue-500", width: "25%" },
                { month: "Month 3", milestone: "Active Sources Sought responses", color: "text-amber-400", barColor: "bg-amber-500", width: "50%" },
                { month: "Month 6", milestone: "First proposals submitted", color: "text-emerald-400", barColor: "bg-emerald-500", width: "75%" },
                { month: "Month 12", milestone: "First contract awards expected", color: "text-emerald-300", barColor: "bg-emerald-400", width: "100%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-emerald-500/20 transition-all"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-shrink-0 w-20">
                      <span className={`${item.color} text-sm font-mono font-medium`}>
                        {item.month}
                      </span>
                    </div>
                    <p className="text-white text-lg font-light">{item.milestone}</p>
                  </div>
                  <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.barColor} rounded-full opacity-70`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SLIDE 14: Next Steps ===== */}
        <section
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
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
                { step: "01", title: "Book a 15-20 minute intro call", desc: "We learn your business and assess fit" },
                { step: "02", title: "We analyze your market", desc: "Free opportunity analysis for your NAICS codes" },
                { step: "03", title: "Your federal pipeline starts in 30 days", desc: "Operational within the first month" },
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
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-700 ml-auto flex-shrink-0 group-hover:text-emerald-500 transition-colors" />
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <a
                href="https://meetings-na2.hubspot.com/americurial/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8 hover:bg-emerald-500/20 transition-all group"
              >
                <CalendarCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-400 font-medium">Book your intro call</span>
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
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-stone-800" />
          <div className="absolute bottom-8 right-20 w-16 h-16 border-r border-b border-stone-800" />
        </section>
      </div>
    </>
  );
}
