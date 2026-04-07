"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Search,
  Target,
  FileText,
  Zap,
  CheckCircle2,
  XCircle,
  Minus,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  Shield,
  Globe,
  TrendingUp,
  BarChart3,
  Mic,
  Columns3,
  Users,
  Bell,
  Sparkles,
  Clock,
  Star,
  Check,
  MapPin,
  Award,
  ExternalLink,
  Loader2,
  Building2,
  BadgeDollarSign,
  Handshake,
  Mail,
  Lock,
  Layers,
  CircleDollarSign,
  BadgeCheck,
  Database,
  AudioWaveform,
  Inbox,
  ArrowDown,
} from "lucide-react";

const TOTAL_SLIDES = 20;

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook                                         */
/* ------------------------------------------------------------------ */
function useSlideInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        else setInView(false);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

/* ------------------------------------------------------------------ */
/*  Animated bar                                                       */
/* ------------------------------------------------------------------ */
function ScoreBar({
  percent,
  animate,
  delay = 0,
  color = "bg-emerald-500",
}: {
  percent: number;
  animate: boolean;
  delay?: number;
  color?: string;
}) {
  return (
    <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{
          width: animate ? `${percent}%` : "0%",
          transition: `width 1.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Background pattern components                                      */
/* ------------------------------------------------------------------ */
function DotGridBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{
        backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
  );
}

function DarkGridBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-100"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  );
}

function EmeraldOrb({
  className = "",
  size = "w-64 h-64",
  duration = 10,
}: {
  className?: string;
  size?: string;
  duration?: number;
}) {
  return (
    <div
      className={`absolute ${size} bg-emerald-500/8 rounded-full blur-[120px] ${className}`}
      style={{ animation: `orbFloat ${duration}s ease-in-out infinite` }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */
export default function ProductPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const s1 = useRef<HTMLElement>(null);
  const s2 = useRef<HTMLElement>(null);
  const s3 = useRef<HTMLElement>(null);
  const s4 = useRef<HTMLElement>(null);
  const s5 = useRef<HTMLElement>(null);
  const s6 = useRef<HTMLElement>(null);
  const s7 = useRef<HTMLElement>(null);
  const s8 = useRef<HTMLElement>(null);
  const s9 = useRef<HTMLElement>(null);
  const s10 = useRef<HTMLElement>(null);
  const s11 = useRef<HTMLElement>(null);
  const s12 = useRef<HTMLElement>(null);
  const s13 = useRef<HTMLElement>(null);
  const s14 = useRef<HTMLElement>(null);
  const s15 = useRef<HTMLElement>(null);
  const s16 = useRef<HTMLElement>(null);
  const s17 = useRef<HTMLElement>(null);
  const s18 = useRef<HTMLElement>(null);
  const s19 = useRef<HTMLElement>(null);
  const s20 = useRef<HTMLElement>(null);

  const v1 = useSlideInView(s1);
  const v2 = useSlideInView(s2);
  const v3 = useSlideInView(s3);
  const v4 = useSlideInView(s4);
  const v5 = useSlideInView(s5);
  const v6 = useSlideInView(s6);
  const v7 = useSlideInView(s7);
  const v8 = useSlideInView(s8);
  const v9 = useSlideInView(s9);
  const v10 = useSlideInView(s10);
  const v11 = useSlideInView(s11);
  const v12 = useSlideInView(s12);
  const v13 = useSlideInView(s13);
  const v14 = useSlideInView(s14);
  const v15 = useSlideInView(s15);
  const v16 = useSlideInView(s16);
  const v17 = useSlideInView(s17);
  const v18 = useSlideInView(s18);
  const v19 = useSlideInView(s19);
  const v20 = useSlideInView(s20);

  /* navigation */
  const scrollToSlide = useCallback((n: number) => {
    const c = containerRef.current;
    if (!c) return;
    const el = c.children[n - 1] as HTMLElement;
    if (el) {
      isScrollingRef.current = true;
      el.scrollIntoView({ behavior: "smooth" });
      setCurrentSlide(n);
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
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Array.from(c.children).indexOf(entry.target as HTMLElement);
            if (idx >= 0) setCurrentSlide(idx + 1);
          }
        });
      },
      { root: c, threshold: 0.5 }
    );
    Array.from(c.children).forEach((child) => obs.observe(child));
    return () => obs.disconnect();
  }, []);

  const darkSlides = [1, 3, 5, 6, 9, 13, 15, 16, 19];
  const isDark = darkSlides.includes(currentSlide);

  const fadeUp = (visible: boolean, delay = 0) =>
    ({
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    }) as React.CSSProperties;

  const fadeLeft = (visible: boolean, delay = 0) =>
    ({
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-40px)",
      transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    }) as React.CSSProperties;

  const fadeRight = (visible: boolean, delay = 0) =>
    ({
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(40px)",
      transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    }) as React.CSSProperties;

  const scaleIn = (visible: boolean, delay = 0) =>
    ({
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.85)",
      transition: `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    }) as React.CSSProperties;

  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* ============ GLOBAL STYLES ============ */}
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
          .nav-dots,
          .slide-counter,
          .nav-arrows {
            display: none !important;
          }
          .grid-bg {
            display: none !important;
          }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.15); }
          50% { box-shadow: 0 0 40px rgba(16,185,129,0.3); }
        }
        @keyframes tableRowSlide {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
        }
        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.2), inset 0 0 20px rgba(16,185,129,0.05); }
          50% { box-shadow: 0 0 40px rgba(16,185,129,0.4), inset 0 0 30px rgba(16,185,129,0.1); }
        }
        @keyframes checkPop {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes waveform {
          0%, 100% { height: 8px; }
          50% { height: 32px; }
        }
        @keyframes waveformSmall {
          0%, 100% { height: 4px; }
          50% { height: 20px; }
        }
        @keyframes notificationSlide {
          from { opacity: 0; transform: translateX(60px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes funnelPulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.05); }
        }
        @keyframes dataFlow {
          0% { opacity: 0; transform: translateY(-20px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes badgePop {
          0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          70% { transform: scale(1.1) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* ============ NAV DOTS ============ */}
      <div className="nav-dots fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i + 1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === i + 1
                ? "bg-emerald-500 scale-150 shadow-lg shadow-emerald-500/50"
                : isDark
                  ? "bg-stone-600 hover:bg-stone-400"
                  : "bg-stone-300 hover:bg-stone-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ============ SLIDE COUNTER ============ */}
      <div
        className={`slide-counter fixed bottom-6 right-6 z-50 font-mono text-sm tracking-wider ${
          isDark ? "text-stone-500" : "text-stone-400"
        }`}
      >
        <span className="text-emerald-500 font-semibold">{currentSlide}</span>
        <span className="mx-1">/</span>
        <span>{TOTAL_SLIDES}</span>
      </div>

      {/* ============ ARROW NAV ============ */}
      <div className="nav-arrows fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        <button
          type="button"
          onClick={goPrev}
          disabled={currentSlide === 1}
          aria-label="Previous slide"
          className={`p-2 rounded-lg backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
            isDark
              ? "bg-stone-800/80 text-stone-400 hover:text-white hover:bg-stone-700"
              : "bg-white/80 text-stone-500 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
          }`}
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={currentSlide === TOTAL_SLIDES}
          aria-label="Next slide"
          className={`p-2 rounded-lg backdrop-blur-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
            isDark
              ? "bg-stone-800/80 text-stone-400 hover:text-white hover:bg-stone-700"
              : "bg-white/80 text-stone-500 hover:text-stone-900 hover:bg-stone-100 border border-stone-200"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* ============ SLIDE CONTAINER ============ */}
      <div
        ref={containerRef}
        className="slide-container h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >

        {/* =================================================================
            SLIDE 1 — TITLE (dark)
        ================================================================= */}
        <section
          ref={s1}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/4 left-1/4" size="w-96 h-96" duration={8} />
          <EmeraldOrb className="bottom-1/4 right-1/4" size="w-80 h-80" duration={12} />
          <EmeraldOrb className="top-1/2 right-1/3" size="w-48 h-48" duration={6} />

          {/* Animated grid overlay */}
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

          <div className="relative z-10 text-center w-full px-16 lg:px-24">
            <div style={fadeUp(v1, 0)} className="mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-stone-800 rounded-full backdrop-blur-sm">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-stone-300 tracking-[0.3em] uppercase text-sm font-light">
                  CapturePilot
                </span>
              </div>
            </div>

            <h1
              style={fadeUp(v1, 200)}
              className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-tight leading-[1.05] mb-10"
            >
              Win Government Contracts.{" "}
              <span className="text-emerald-500 font-light">Faster.</span>
            </h1>

            <p
              style={fadeUp(v1, 400)}
              className="text-stone-500 text-sm tracking-[0.25em] uppercase mb-20"
            >
              Built for veteran-owned and small businesses
            </p>

            <div style={fadeUp(v1, 600)} className="flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent" />
              <p className="text-stone-600 text-xs tracking-wider">Scroll to explore</p>
            </div>
          </div>

          <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-stone-800" />
          <div className="absolute bottom-8 right-20 w-20 h-20 border-r border-b border-stone-800" />
        </section>

        {/* =================================================================
            SLIDE 2 — THE PROBLEM (light)
        ================================================================= */}
        <section
          ref={s2}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <p style={fadeUp(v2, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Problem
            </p>
            <h2 style={fadeUp(v2, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-6 leading-tight">
              This shouldn&apos;t be{" "}
              <span className="text-stone-400">this hard.</span>
            </h2>
            <div style={fadeUp(v2, 150)} className="w-24 h-px bg-emerald-500/50 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: Clock,
                  title: "Hours on SAM.gov",
                  desc: "Manual searches. Missed deadlines.",
                  delay: 250,
                },
                {
                  icon: Target,
                  title: "No way to qualify",
                  desc: "Which contracts actually fit you?",
                  delay: 450,
                },
                {
                  icon: FileText,
                  title: "Proposals take weeks",
                  desc: "Starting from scratch. Every time.",
                  delay: 650,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={fadeUp(v2, item.delay)}
                  className="bg-stone-50/80 backdrop-blur-sm border border-stone-100 rounded-2xl p-10 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-8 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-stone-900 font-medium text-xl mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-base">{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={fadeUp(v2, 900)} className="mt-14 text-center">
              <p className="text-stone-400 text-base">
                <span className="text-red-400 font-semibold text-2xl">90%</span>{" "}
                <span className="text-stone-500">of qualified small businesses never win a federal contract.</span>
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 3 — THE SOLUTION (dark)
        ================================================================= */}
        <section
          ref={s3}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="bottom-1/4 left-1/4" size="w-72 h-72" duration={10} />
          <EmeraldOrb className="top-1/3 right-1/4" size="w-56 h-56" duration={8} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
            <p style={fadeUp(v3, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Solution
            </p>
            <h2 style={fadeUp(v3, 150)} className="text-4xl md:text-7xl font-extralight text-white mb-6">
              One platform.{" "}
              <span className="text-emerald-500">Everything you need.</span>
            </h2>
            <div style={fadeUp(v3, 250)} className="w-24 h-px bg-emerald-500/30 mx-auto mb-20" />

            <div className="grid grid-cols-3 gap-8 max-w-[900px] mx-auto">
              {[
                { word: "Find", icon: Search, delay: 400 },
                { word: "Qualify", icon: Target, delay: 600 },
                { word: "Win", icon: Award, delay: 800 },
              ].map((item, i) => (
                <div key={item.word} style={fadeUp(v3, item.delay)} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6 hover:bg-emerald-500/20 transition-all duration-300">
                    <item.icon className="w-9 h-9 text-emerald-500" />
                  </div>
                  <p className="text-white text-3xl font-light">{item.word}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute" />
                  )}
                </div>
              ))}
            </div>

            {/* Connecting arrows */}
            <div style={fadeUp(v3, 700)} className="flex items-center justify-center gap-0 max-w-[700px] mx-auto mt-[-80px] mb-[-20px] pointer-events-none">
              <div className="flex-1" />
              <ArrowRight className="w-6 h-6 text-emerald-500/30" />
              <div className="flex-1" />
              <ArrowRight className="w-6 h-6 text-emerald-500/30" />
              <div className="flex-1" />
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 4 — SMART MATCHING (light)
        ================================================================= */}
        <section
          ref={s4}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left — text (2 cols) */}
              <div className="lg:col-span-2">
                <p style={fadeUp(v4, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Smart Matching
                </p>
                <h2 style={fadeUp(v4, 100)} className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                  40,000+ opportunities.{" "}
                  <span className="text-emerald-600">Only yours.</span>
                </h2>
                <div style={fadeUp(v4, 150)} className="w-16 h-px bg-emerald-500/50 mb-8" />
                <p style={fadeUp(v4, 200)} className="text-stone-500 text-base">
                  Scored daily against your NAICS, set-asides, location, and past performance.
                </p>
              </div>

              {/* Right — full-width mockup (3 cols) */}
              <div className="lg:col-span-3" style={scaleIn(v4, 300)}>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-stone-900 font-medium">Your Matches</h3>
                    <span className="text-emerald-600 text-sm font-medium">47 new today</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Janitorial Services — Fort Bragg", naics: "561720", score: 94, badge: "HOT", set: "SDVOSB", delay: 500 },
                      { title: "Grounds Maintenance — JBSA", naics: "561730", score: 82, badge: "HOT", set: "SB", delay: 700 },
                      { title: "Custodial Services — Pentagon", naics: "561720", score: 67, badge: "WARM", set: "8(a)", delay: 900 },
                      { title: "Pest Control — NAS Pensacola", naics: "561710", score: 54, badge: "WARM", set: "SDVOSB", delay: 1100 },
                    ].map((opp) => (
                      <div
                        key={opp.title}
                        className="bg-white border border-stone-100 rounded-xl p-5 hover:border-emerald-200 transition-colors duration-300"
                        style={{
                          animation: v4 ? `cardSlideUp 0.7s ease ${opp.delay}ms both` : "none",
                          opacity: v4 ? undefined : 0,
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-stone-800 text-sm font-medium">{opp.title}</h4>
                            <div className="flex gap-2 mt-1.5">
                              <span className="text-stone-400 text-[10px] bg-stone-100 px-2 py-0.5 rounded font-mono">{opp.naics}</span>
                              <span className="text-emerald-600 text-[10px] bg-emerald-50 px-2 py-0.5 rounded font-medium">{opp.set}</span>
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white ${opp.badge === "HOT" ? "bg-red-500" : "bg-amber-500"}`}>
                            {opp.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                          <ScoreBar percent={opp.score} animate={v4} delay={opp.delay + 400} />
                          <span className="text-emerald-600 text-sm font-mono font-bold w-10 text-right">{opp.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 5 — SET-ASIDE MATCHING (dark) — NEW
        ================================================================= */}
        <section
          ref={s5}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/4 right-1/4" size="w-64 h-64" duration={9} />
          <EmeraldOrb className="bottom-1/3 left-1/3" size="w-48 h-48" duration={7} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
            <p style={fadeUp(v5, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Set-Aside Matching
            </p>
            <h2 style={fadeUp(v5, 150)} className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
              Contracts reserved{" "}
              <span className="text-emerald-500">for you.</span>
            </h2>
            <p style={fadeUp(v5, 250)} className="text-stone-500 text-base mb-16">
              We match your certifications to set-aside requirements automatically.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
              {[
                { code: "SDVOSB", name: "Service-Disabled Veteran", color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/30", delay: 400 },
                { code: "WOSB", name: "Women-Owned Small Business", color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30", delay: 600 },
                { code: "8(a)", name: "SBA 8(a) Program", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30", delay: 800 },
                { code: "HUBZone", name: "Historically Underutilized", color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/30", delay: 1000 },
              ].map((badge) => (
                <div
                  key={badge.code}
                  className={`bg-gradient-to-b ${badge.color} border ${badge.border} rounded-2xl p-8 text-center`}
                  style={{
                    animation: v5 ? `badgePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${badge.delay}ms both` : "none",
                    opacity: v5 ? undefined : 0,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-stone-900/50 border border-stone-700/50 flex items-center justify-center mx-auto mb-5">
                    <Shield className="w-7 h-7 text-emerald-400" />
                  </div>
                  <p className="text-white text-xl font-semibold mb-2">{badge.code}</p>
                  <p className="text-stone-500 text-xs">{badge.name}</p>
                </div>
              ))}
            </div>

            <div
              style={fadeUp(v5, 1200)}
              className="mt-14 inline-flex items-center gap-2 px-6 py-3 bg-stone-900 border border-stone-800 rounded-full"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-stone-400 text-sm">Auto-filters opportunities to your eligibility</span>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 6 — AI PROPOSAL DRAFTS (dark)
        ================================================================= */}
        <section
          ref={s6}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/4 right-1/4" size="w-56 h-56" duration={9} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left text */}
              <div className="lg:col-span-2">
                <p style={fadeUp(v6, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  AI Proposals
                </p>
                <h2 style={fadeUp(v6, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                  First draft in{" "}
                  <span className="text-emerald-500">15 minutes.</span>
                </h2>
                <p style={fadeUp(v6, 200)} className="text-stone-500 text-base">
                  AI generates. You refine.
                </p>
              </div>

              {/* Right mockup */}
              <div className="lg:col-span-3" style={scaleIn(v6, 300)}>
                <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-stone-800">
                    <FileText className="w-4 h-4 text-emerald-500" />
                    <span className="text-white text-sm font-medium">Proposal Draft</span>
                    <span className="text-stone-600 text-xs ml-auto">Auto-saving...</span>
                  </div>

                  <div className="p-8 space-y-5">
                    {[
                      { label: "Cover Letter", done: true, delay: 500 },
                      { label: "Executive Summary", done: true, delay: 700 },
                      { label: "Technical Approach", done: false, typing: true, delay: 900 },
                      { label: "Past Performance", done: false, delay: 1200 },
                      { label: "Staffing Plan", done: false, delay: 1400 },
                      { label: "Pricing Volume", done: false, delay: 1600 },
                    ].map((section) => (
                      <div
                        key={section.label}
                        className="flex items-center gap-4"
                        style={{
                          animation: v6 ? `cardSlideUp 0.7s ease ${section.delay}ms both` : "none",
                          opacity: v6 ? undefined : 0,
                        }}
                      >
                        {section.done ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        ) : section.typing ? (
                          <Loader2 className="w-5 h-5 text-emerald-500 flex-shrink-0" style={{ animation: "spin 1.5s linear infinite" }} />
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-stone-700 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${section.done ? "text-stone-400 line-through" : section.typing ? "text-white font-medium" : "text-stone-600"}`}>
                          {section.label}
                        </span>
                        {section.typing && (
                          <span className="text-emerald-500 text-xs ml-auto">Generating...</span>
                        )}
                      </div>
                    ))}

                    <div
                      className="mt-6 pt-6 border-t border-stone-800"
                      style={{
                        animation: v6 ? `cardSlideUp 0.7s ease 1800ms both` : "none",
                        opacity: v6 ? undefined : 0,
                      }}
                    >
                      <p className="text-stone-400 text-xs uppercase tracking-wider mb-3">
                        Technical Approach — Section 3.1
                      </p>
                      <p className="text-stone-300 text-sm leading-relaxed">
                        Our team will leverage proven methodologies in facilities
                        maintenance to deliver comprehensive janitorial services
                        across all designated buildings
                        <span
                          className="inline-block w-0.5 h-4 bg-emerald-500 ml-1 align-middle"
                          style={{ animation: "blink 1.2s step-end infinite" }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 7 — MARKET INTELLIGENCE (light)
        ================================================================= */}
        <section
          ref={s7}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left — chart mockup (3 cols) */}
              <div className="lg:col-span-3" style={scaleIn(v7, 200)}>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500">
                  <h3 className="text-stone-900 font-medium mb-8">Top Agencies by Spend</h3>
                  <div className="space-y-5">
                    {[
                      { agency: "Dept. of Veterans Affairs", amount: "$2.4B", pct: 92, delay: 400 },
                      { agency: "Dept. of Defense", amount: "$1.8B", pct: 75, delay: 600 },
                      { agency: "GSA", amount: "$1.2B", pct: 55, delay: 800 },
                      { agency: "Dept. of Homeland Security", amount: "$890M", pct: 40, delay: 1000 },
                      { agency: "Dept. of Energy", amount: "$620M", pct: 28, delay: 1200 },
                    ].map((row) => (
                      <div key={row.agency}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-stone-700 text-sm">{row.agency}</span>
                          <span className="text-stone-500 text-sm font-mono">{row.amount}</span>
                        </div>
                        <ScoreBar percent={row.pct} animate={v7} delay={row.delay} color="bg-emerald-500" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-stone-200" style={fadeUp(v7, 1400)}>
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-4 h-4 text-stone-400" />
                      <span className="text-stone-700 text-sm font-medium">Top Incumbent</span>
                    </div>
                    <div className="bg-white border border-stone-100 rounded-xl p-4 hover:border-emerald-200 transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-stone-800 font-medium">CleanForce Solutions LLC</p>
                          <p className="text-stone-400 text-sm">14 awards | $18.2M total</p>
                        </div>
                        <TrendingUp className="w-5 h-5 text-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — text (2 cols) */}
              <div className="lg:col-span-2">
                <p style={fadeUp(v7, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Market Intelligence
                </p>
                <h2 style={fadeUp(v7, 100)} className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                  Know your market{" "}
                  <span className="text-emerald-600">before you bid.</span>
                </h2>
                <div style={fadeUp(v7, 150)} className="w-16 h-px bg-emerald-500/50 mb-8" />

                <div className="space-y-5">
                  {[
                    "Track agency spending trends",
                    "Identify incumbents and their history",
                    "Understand competitive landscape",
                  ].map((text, i) => (
                    <div key={text} style={fadeUp(v7, 300 + i * 150)} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className="text-stone-600 text-sm">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 8 — CAPABILITY STATEMENT (light)
        ================================================================= */}
        <section
          ref={s8}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="text-center mb-14">
              <p style={fadeUp(v8, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Capability Statement
              </p>
              <h2 style={fadeUp(v8, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
                Record yourself.{" "}
                <span className="text-emerald-600">Get a cap statement.</span>
              </h2>
            </div>

            {/* Mic -> Document animation */}
            <div style={fadeUp(v8, 300)} className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
              {/* Mic */}
              <div className="relative flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-stone-100 border-2 border-emerald-500/30 flex items-center justify-center relative">
                  <Mic className="w-12 h-12 text-emerald-600" />
                  {v8 && (
                    <>
                      <div className="absolute inset-0 rounded-full border border-emerald-500/30" style={{ animation: "pulseRing 2s ease-out infinite" }} />
                      <div className="absolute inset-0 rounded-full border border-emerald-500/20" style={{ animation: "pulseRing 2s ease-out infinite", animationDelay: "0.6s" }} />
                      <div className="absolute inset-0 rounded-full border border-emerald-500/10" style={{ animation: "pulseRing 2s ease-out infinite", animationDelay: "1.2s" }} />
                    </>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2" style={fadeUp(v8, 500)}>
                <div className="w-16 md:w-28 h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500" />
                <ArrowRight className="w-6 h-6 text-emerald-500" />
              </div>

              {/* Document result */}
              <div
                className="bg-white border border-stone-200 rounded-2xl p-8 w-80 shadow-xl"
                style={{ animation: v8 ? "float 4s ease-in-out infinite" : "none", ...fadeUp(v8, 600) }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <span className="text-stone-900 font-medium">Capability Statement</span>
                </div>
                <div className="space-y-4">
                  <div style={{ animation: v8 ? "cardSlideUp 0.5s ease 800ms both" : "none", opacity: v8 ? undefined : 0 }}>
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider mb-1">Company</p>
                    <p className="text-stone-900 text-sm font-medium">Acme Services LLC</p>
                  </div>
                  <div style={{ animation: v8 ? "cardSlideUp 0.5s ease 1000ms both" : "none", opacity: v8 ? undefined : 0 }}>
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider mb-1">Core Competencies</p>
                    <div className="flex flex-wrap gap-1">
                      {["Facility Mgmt", "HVAC", "Janitorial"].map((c) => (
                        <span key={c} className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2" style={{ animation: v8 ? "cardSlideUp 0.5s ease 1200ms both" : "none", opacity: v8 ? undefined : 0 }}>
                    <div className="w-6 h-6 rounded bg-emerald-500" />
                    <div className="w-6 h-6 rounded bg-stone-300" />
                    <div className="w-6 h-6 rounded bg-amber-500" />
                    <span className="text-stone-400 text-[10px] self-center ml-1">Brand colors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 9 — VOICE-TO-DOCUMENT (dark) — NEW
        ================================================================= */}
        <section
          ref={s9}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/3 left-1/4" size="w-56 h-56" duration={8} />
          <EmeraldOrb className="bottom-1/4 right-1/3" size="w-48 h-48" duration={11} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
            <p style={fadeUp(v9, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Voice-to-Document
            </p>
            <h2 style={fadeUp(v9, 150)} className="text-4xl md:text-7xl font-extralight text-white mb-4 leading-tight">
              Talk.{" "}
              <span className="text-emerald-500">We write.</span>
            </h2>
            <p style={fadeUp(v9, 250)} className="text-stone-500 text-base mb-16">
              Paste a transcript or upload an MP3. AI creates your document.
            </p>

            {/* Waveform -> Processing -> Document flow */}
            <div style={fadeUp(v9, 400)} className="flex items-center justify-center gap-8 md:gap-16">
              {/* Waveform */}
              <div className="flex items-end gap-1 h-16">
                {[0.3, 0.5, 0.8, 1, 0.7, 0.9, 0.4, 0.6, 0.85, 0.5, 0.7, 0.3].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-emerald-500 rounded-full"
                    style={{
                      animation: v9 ? `waveform ${0.8 + i * 0.1}s ease-in-out ${i * 80}ms infinite alternate` : "none",
                      height: v9 ? undefined : "4px",
                    }}
                  />
                ))}
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2" style={fadeUp(v9, 700)}>
                <div className="w-12 md:w-20 h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500" />
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </div>

              {/* AI Processing */}
              <div
                className="w-20 h-20 rounded-2xl bg-stone-900 border border-emerald-500/30 flex items-center justify-center"
                style={{
                  animation: v9 ? "glowPulse 2s ease-in-out infinite" : "none",
                  ...fadeUp(v9, 900),
                }}
              >
                <Sparkles className="w-8 h-8 text-emerald-500" />
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2" style={fadeUp(v9, 1100)}>
                <div className="w-12 md:w-20 h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500" />
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </div>

              {/* Document */}
              <div
                className="bg-stone-900 border border-stone-800 rounded-2xl p-6 w-52"
                style={{
                  animation: v9 ? "float 4s ease-in-out infinite" : "none",
                  ...fadeUp(v9, 1300),
                }}
              >
                <FileText className="w-6 h-6 text-emerald-500 mb-3" />
                <div className="space-y-2">
                  <div className="h-2 bg-stone-700 rounded-full w-full" />
                  <div className="h-2 bg-stone-700 rounded-full w-4/5" />
                  <div className="h-2 bg-stone-700 rounded-full w-3/4" />
                  <div className="h-2 bg-emerald-500/20 rounded-full w-2/3" />
                </div>
                <p className="text-emerald-400 text-[10px] mt-3 uppercase tracking-wider">Complete</p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 10 — DEAL PIPELINE (light)
        ================================================================= */}
        <section
          ref={s10}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="text-center mb-12">
              <p style={fadeUp(v10, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Deal Pipeline
              </p>
              <h2 style={fadeUp(v10, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
                Discovery to{" "}
                <span className="text-emerald-600">award.</span>
              </h2>
            </div>

            <div style={scaleIn(v10, 300)} className="bg-stone-50 border border-stone-200 rounded-2xl p-8 overflow-x-auto">
              <div className="grid grid-cols-4 gap-6 min-w-[800px]">
                {[
                  { col: "Discovered", color: "bg-stone-400", cards: [{ title: "IT Support — USDA", value: "$180K" }, { title: "Network Infra — DHS", value: "$320K" }] },
                  { col: "Reviewing", color: "bg-blue-500", cards: [{ title: "Cleaning — VA Medical", value: "$450K" }, { title: "Guard Svc — DoD", value: "$210K" }] },
                  { col: "Bidding", color: "bg-amber-500", cards: [{ title: "HVAC Maint — GSA", value: "$890K" }] },
                  { col: "Won", color: "bg-emerald-500", glow: true, cards: [{ title: "Janitorial — Ft Bragg", value: "$1.2M" }] },
                ].map((column, colIdx) => (
                  <div key={column.col}>
                    <div className="flex items-center gap-2 mb-5">
                      <div className={`w-2.5 h-2.5 rounded-full ${column.color}`} />
                      <span className="text-stone-700 font-medium">{column.col}</span>
                      <span className="text-stone-400 text-xs ml-auto">{column.cards.length}</span>
                    </div>
                    <div className="space-y-3">
                      {column.cards.map((card, cardIdx) => (
                        <div
                          key={card.title}
                          className={`bg-white border rounded-xl p-5 transition-all duration-500 hover:shadow-md ${
                            column.glow ? "border-emerald-200 shadow-md shadow-emerald-100" : "border-stone-100 hover:border-emerald-200"
                          }`}
                          style={{
                            animation: v10 ? `cardSlideUp 0.6s ease ${500 + colIdx * 200 + cardIdx * 100}ms both` : "none",
                            opacity: v10 ? undefined : 0,
                          }}
                        >
                          <h4 className="text-stone-800 text-sm font-medium mb-2">{card.title}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-stone-400 text-xs">{card.value}</span>
                            {column.glow && <Award className="w-4 h-4 text-emerald-500" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 11 — QUICK CHECKER (light)
        ================================================================= */}
        <section
          ref={s11}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left text */}
              <div className="lg:col-span-2">
                <p style={fadeUp(v11, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Quick Check
                </p>
                <h2 style={fadeUp(v11, 100)} className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                  Eligible in{" "}
                  <span className="text-emerald-600">30 seconds. Free.</span>
                </h2>
                <p style={fadeUp(v11, 200)} className="text-stone-500 text-base">
                  Enter your website. Get NAICS codes, SAM status, and matches instantly.
                </p>
              </div>

              {/* Right mockup */}
              <div className="lg:col-span-3" style={scaleIn(v11, 300)}>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm">
                  {/* URL input */}
                  <div
                    className="bg-white border border-stone-200 rounded-xl px-5 py-4 flex items-center gap-3 mb-6"
                    style={{ animation: v11 ? "cardSlideUp 0.6s ease 400ms both" : "none", opacity: v11 ? undefined : 0 }}
                  >
                    <Globe className="w-5 h-5 text-stone-400 flex-shrink-0" />
                    <span className="text-stone-800 text-sm font-mono">
                      acme-services.com
                      <span className="inline-block w-0.5 h-4 bg-emerald-500 ml-0.5 align-middle" style={{ animation: v11 ? "blink 1.2s step-end infinite" : "none" }} />
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="mb-6" style={{ animation: v11 ? "cardSlideUp 0.6s ease 700ms both" : "none", opacity: v11 ? undefined : 0 }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-stone-500 text-xs">Analyzing...</span>
                      <span className="text-emerald-600 text-xs font-mono">100%</span>
                    </div>
                    <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: v11 ? "100%" : "0%", transition: "width 2.5s ease 900ms" }} />
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    {[
                      { label: "SAM.gov Registration", value: "Active", icon: CheckCircle2, color: "text-emerald-600", delay: 1200 },
                      { label: "NAICS Codes", value: "561720 | 561730 | 561710", icon: Target, color: "text-emerald-600", delay: 1500 },
                      { label: "Set-Aside Eligibility", value: "SDVOSB, Small Business", icon: Shield, color: "text-emerald-600", delay: 1800 },
                      { label: "Matching Opportunities", value: "47 found", icon: Zap, color: "text-amber-500", delay: 2100 },
                    ].map((result) => (
                      <div
                        key={result.label}
                        className="flex items-center gap-4 bg-white border border-stone-100 rounded-xl px-5 py-4"
                        style={{ animation: v11 ? `cardSlideUp 0.6s ease ${result.delay}ms both` : "none", opacity: v11 ? undefined : 0 }}
                      >
                        <result.icon className={`w-5 h-5 ${result.color} flex-shrink-0`} />
                        <div className="flex-1">
                          <p className="text-stone-400 text-[10px] uppercase tracking-wider">{result.label}</p>
                          <p className="text-stone-800 text-sm font-medium">{result.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 12 — PARTNER SEARCH (light)
        ================================================================= */}
        <section
          ref={s12}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="text-center mb-12">
              <p style={fadeUp(v12, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Partner Search
              </p>
              <h2 style={fadeUp(v12, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
                Find teaming partners{" "}
                <span className="text-emerald-600">instantly.</span>
              </h2>
            </div>

            <div style={scaleIn(v12, 250)} className="max-w-[1000px] mx-auto">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 shadow-sm">
                {/* Search */}
                <div
                  className="bg-white border border-stone-200 rounded-xl px-5 py-4 flex items-center gap-3 mb-6"
                  style={{ animation: v12 ? "cardSlideUp 0.6s ease 400ms both" : "none", opacity: v12 ? undefined : 0 }}
                >
                  <Search className="w-5 h-5 text-stone-400 flex-shrink-0" />
                  <span className="text-stone-800 text-sm font-mono">
                    NAICS 237130 + SDVOSB
                    <span className="inline-block w-0.5 h-4 bg-emerald-500 ml-0.5 align-middle" style={{ animation: v12 ? "blink 1.2s step-end infinite" : "none" }} />
                  </span>
                  <span className="ml-auto text-stone-400 text-sm">127 results</span>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Iron Ridge Construction LLC", location: "Virginia Beach, VA", certs: ["SDVOSB", "SB"], delay: 600 },
                    { name: "Patriot Infrastructure Group", location: "Fayetteville, NC", certs: ["SDVOSB", "8(a)"], delay: 800 },
                    { name: "Summit Civil Partners Inc", location: "San Antonio, TX", certs: ["SDVOSB"], delay: 1000 },
                  ].map((company) => (
                    <div
                      key={company.name}
                      className="bg-white border border-stone-100 rounded-xl p-5 hover:border-emerald-200 hover:shadow-md transition-all duration-500"
                      style={{ animation: v12 ? `slideUp 0.7s ease ${company.delay}ms both` : "none", opacity: v12 ? undefined : 0 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-stone-800 font-medium flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-stone-400" />
                            {company.name}
                          </h4>
                          <div className="flex items-center gap-1 mt-1 ml-6">
                            <MapPin className="w-3 h-3 text-stone-400" />
                            <span className="text-stone-400 text-xs">{company.location}</span>
                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          {company.certs.map((c) => (
                            <span key={c} className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-medium">{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 13 — EMAIL ALERTS (dark) — NEW
        ================================================================= */}
        <section
          ref={s13}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/3 right-1/4" size="w-56 h-56" duration={9} />
          <EmeraldOrb className="bottom-1/4 left-1/3" size="w-48 h-48" duration={7} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left text */}
              <div className="lg:col-span-2">
                <p style={fadeUp(v13, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Email Alerts
                </p>
                <h2 style={fadeUp(v13, 150)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                  Never miss{" "}
                  <span className="text-emerald-500">a deadline.</span>
                </h2>
                <p style={fadeUp(v13, 250)} className="text-stone-500 text-base">
                  Daily alerts for new HOT matches. Weekly digests. Deadline reminders.
                </p>
              </div>

              {/* Right — notification mockup */}
              <div className="lg:col-span-3" style={scaleIn(v13, 350)}>
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Inbox className="w-5 h-5 text-emerald-500" />
                    <span className="text-white font-medium">Inbox</span>
                    <span className="text-emerald-500 text-xs bg-emerald-500/10 px-2 py-0.5 rounded-full ml-auto">3 new</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        subject: "HOT Match: Janitorial Services — Fort Bragg",
                        preview: "Score: 94% | SDVOSB | Deadline: Apr 15",
                        time: "2m ago",
                        hot: true,
                        delay: 500,
                      },
                      {
                        subject: "New Match: Grounds Maintenance — JBSA",
                        preview: "Score: 82% | Small Business | $450K",
                        time: "1h ago",
                        hot: false,
                        delay: 700,
                      },
                      {
                        subject: "Deadline Reminder: Cloud Migration — GSA",
                        preview: "Proposal due in 3 days",
                        time: "3h ago",
                        hot: false,
                        delay: 900,
                      },
                    ].map((email) => (
                      <div
                        key={email.subject}
                        className={`bg-stone-800/50 border rounded-xl p-5 ${email.hot ? "border-emerald-500/30" : "border-stone-700/50"}`}
                        style={{
                          animation: v13 ? `notificationSlide 0.6s ease ${email.delay}ms both` : "none",
                          opacity: v13 ? undefined : 0,
                        }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Mail className={`w-4 h-4 flex-shrink-0 ${email.hot ? "text-emerald-500" : "text-stone-500"}`} />
                            <span className="text-white text-sm font-medium">{email.subject}</span>
                          </div>
                          <span className="text-stone-600 text-xs flex-shrink-0 ml-3">{email.time}</span>
                        </div>
                        <p className="text-stone-500 text-xs ml-6">{email.preview}</p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-5 flex items-center justify-center gap-2"
                    style={fadeUp(v13, 1200)}
                  >
                    <Bell className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-stone-500 text-xs">Configured to your matching profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 14 — ELIGIBILITY & IDIQ (light)
        ================================================================= */}
        <section
          ref={s14}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="text-center mb-12">
              <p style={fadeUp(v14, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Eligibility & Vehicles
              </p>
              <h2 style={fadeUp(v14, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
                Know before you bid.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
              {/* LEFT — Eligibility Check */}
              <div style={fadeLeft(v14, 300)} className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-stone-900 font-medium">Instant Eligibility</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "NAICS Match", pass: true, delay: 500 },
                    { label: "Set-Aside Eligible", pass: true, delay: 700 },
                    { label: "Location Match", pass: true, delay: 900 },
                    { label: "Value Fit", pass: true, delay: 1100 },
                    { label: "Security Clearance", pass: false, delay: 1300 },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4"
                      style={{ animation: v14 ? `slideInLeft 0.5s ease ${item.delay}ms both` : "none", opacity: v14 ? undefined : 0 }}
                    >
                      <div style={{ animation: v14 ? `checkPop 0.4s ease ${item.delay + 200}ms both` : "none", opacity: v14 ? undefined : 0 }}>
                        {item.pass ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-red-400" />}
                      </div>
                      <span className={`text-sm ${item.pass ? "text-stone-700" : "text-red-500"}`}>{item.label}</span>
                      {!item.pass && <span className="text-red-400/70 text-[10px] ml-auto uppercase tracking-wider">Action needed</span>}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200" style={{ animation: v14 ? "cardSlideUp 0.5s ease 1600ms both" : "none", opacity: v14 ? undefined : 0 }}>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: v14 ? "80%" : "0%", transition: "width 1.8s ease 1800ms" }} />
                    </div>
                    <span className="text-emerald-600 text-sm font-mono font-bold">80%</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — IDIQ Vehicles */}
              <div style={fadeRight(v14, 400)} className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-stone-900 font-medium">IDIQ Contract Vehicles</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "GSA MAS", agency: "GSA", value: "$40B+", delay: 600 },
                    { name: "OASIS+ Small Business", agency: "GSA", value: "$60B", delay: 800 },
                    { name: "SEWP VI", agency: "NASA", value: "$15B", delay: 1000 },
                    { name: "T4NG2", agency: "VA", value: "$12B", delay: 1200 },
                  ].map((vehicle) => (
                    <div
                      key={vehicle.name}
                      className="bg-white border border-stone-100 rounded-xl p-4 hover:border-emerald-200 transition-colors duration-300"
                      style={{ animation: v14 ? `slideInRight 0.5s ease ${vehicle.delay}ms both` : "none", opacity: v14 ? undefined : 0 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-stone-800 text-sm font-medium">{vehicle.name}</h4>
                          <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">{vehicle.agency}</span>
                        </div>
                        <span className="text-emerald-600 text-sm font-mono font-bold">{vehicle.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200 text-center" style={fadeUp(v14, 1400)}>
                  <p className="text-stone-500 text-xs">We track <span className="text-emerald-600 font-medium">200+ active vehicles</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 15 — DATA SOURCES (dark) — NEW
        ================================================================= */}
        <section
          ref={s15}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/4 left-1/3" size="w-64 h-64" duration={10} />
          <EmeraldOrb className="bottom-1/3 right-1/4" size="w-48 h-48" duration={8} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto text-center">
            <p style={fadeUp(v15, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Data Sources
            </p>
            <h2 style={fadeUp(v15, 150)} className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
              Powered by{" "}
              <span className="text-emerald-500">federal data.</span>
            </h2>
            <p style={fadeUp(v15, 250)} className="text-stone-500 text-base mb-16">
              Aggregated daily. Scored automatically.
            </p>

            {/* Source cards flowing into funnel */}
            <div className="flex flex-col items-center gap-8">
              {/* Source cards row */}
              <div className="grid grid-cols-3 gap-8 max-w-[900px] w-full">
                {[
                  { name: "SAM.gov", desc: "37K+ opportunities", icon: Globe, delay: 400 },
                  { name: "USASpending.gov", desc: "Award & budget data", icon: CircleDollarSign, delay: 600 },
                  { name: "FPDS.gov", desc: "Past contract awards", icon: Database, delay: 800 },
                ].map((source) => (
                  <div
                    key={source.name}
                    className="bg-stone-900 border border-stone-800 rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-500"
                    style={{
                      animation: v15 ? `cardSlideUp 0.7s ease ${source.delay}ms both` : "none",
                      opacity: v15 ? undefined : 0,
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <source.icon className="w-7 h-7 text-emerald-500" />
                    </div>
                    <p className="text-white text-lg font-medium mb-1">{source.name}</p>
                    <p className="text-stone-500 text-sm">{source.desc}</p>
                  </div>
                ))}
              </div>

              {/* Flowing arrows */}
              <div style={fadeUp(v15, 1000)} className="flex items-center gap-4">
                <div className="w-px h-12 bg-gradient-to-b from-emerald-500/40 to-emerald-500" />
                <div className="w-px h-12 bg-gradient-to-b from-emerald-500/40 to-emerald-500" />
                <div className="w-px h-12 bg-gradient-to-b from-emerald-500/40 to-emerald-500" />
              </div>

              {/* CapturePilot funnel */}
              <div
                style={fadeUp(v15, 1200)}
                className="bg-stone-900 border-2 border-emerald-500/30 rounded-2xl px-12 py-6 inline-flex items-center gap-4"
              >
                <Shield className="w-8 h-8 text-emerald-500" />
                <div className="text-left">
                  <p className="text-white text-lg font-medium">CapturePilot</p>
                  <p className="text-stone-500 text-sm">Your intelligence engine</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 16 — COMPETITOR COMPARISON (dark)
        ================================================================= */}
        <section
          ref={s16}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/3 left-1/3" size="w-60 h-60" duration={12} />

          <div className="relative z-10 w-full px-12 lg:px-20 max-w-[1600px] mx-auto">
            <div className="text-center mb-10">
              <p style={fadeUp(v16, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Comparison
              </p>
              <h2 style={fadeUp(v16, 100)} className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
                See how we{" "}
                <span className="text-emerald-500">compare.</span>
              </h2>
            </div>

            <div style={fadeUp(v16, 250)} className="overflow-x-auto -mx-4 px-4">
              <div className="min-w-[900px]">
                {/* Header */}
                <div
                  className="grid grid-cols-9 gap-0 mb-1"
                  style={{ animation: v16 ? "tableRowSlide 0.6s ease 400ms both" : "none", opacity: v16 ? undefined : 0 }}
                >
                  <div className="p-3 text-stone-500 text-xs font-medium uppercase tracking-wider">Feature</div>
                  <div className="p-3 text-center rounded-t-xl bg-emerald-500/10 border-t-2 border-x border-emerald-500/50 border-stone-800">
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">CapturePilot</span>
                  </div>
                  {["GovWin", "GovTribe", "BGOV", "HigherGov", "Sweetspot", "GovDash", "EZGovOpps"].map((name) => (
                    <div key={name} className="p-3 text-center">
                      <span className="text-stone-500 text-[10px] font-medium uppercase tracking-wider">{name}</span>
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {[
                  { feature: "AI Proposal Drafts", cp: true, values: [false, false, false, false, true, true, false] },
                  { feature: "Capability Statement", cp: true, values: [false, false, false, false, false, false, false] },
                  { feature: "Smart Matching", cp: true, values: ["partial", "partial", false, "partial", true, true, false] },
                  { feature: "Quick Checker (Free)", cp: true, values: [false, false, false, false, false, false, false] },
                  { feature: "Market Intelligence", cp: true, values: [true, "partial", true, true, "partial", "partial", true] },
                  { feature: "Deal Pipeline", cp: true, values: [false, false, false, false, true, true, false] },
                  { feature: "Consulting Support", cp: true, values: [false, false, false, false, false, false, false] },
                  { feature: "Voice-to-Document", cp: true, values: [false, false, false, false, false, false, false] },
                ].map((row, rowIdx) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-9 gap-0 ${rowIdx % 2 === 0 ? "bg-stone-900/30" : ""}`}
                    style={{
                      animation: v16 ? `tableRowSlide 0.5s ease ${500 + rowIdx * 200}ms both` : "none",
                      opacity: v16 ? undefined : 0,
                    }}
                  >
                    <div className="p-3 flex items-center">
                      <span className="text-stone-300 text-xs font-medium">{row.feature}</span>
                    </div>
                    <div className="p-3 flex items-center justify-center bg-emerald-500/5 border-x border-emerald-500/20">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    {row.values.map((val, i) => (
                      <div key={i} className="p-3 flex items-center justify-center">
                        {val === true ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500/60" />
                        ) : val === "partial" ? (
                          <Minus className="w-4 h-4 text-amber-400/70" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-400/50" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Price row */}
                <div
                  className="grid grid-cols-9 gap-0 mt-1 border-t border-stone-800"
                  style={{ animation: v16 ? `tableRowSlide 0.5s ease ${500 + 8 * 200}ms both` : "none", opacity: v16 ? undefined : 0 }}
                >
                  <div className="p-3 flex items-center">
                    <span className="text-stone-300 text-xs font-bold">Price</span>
                  </div>
                  <div
                    className="p-3 flex items-center justify-center bg-emerald-500/10 border-x border-b border-emerald-500/30 rounded-b-xl"
                    style={{ animation: v16 ? "pulseBorder 3s ease-in-out infinite" : "none" }}
                  >
                    <span className="text-emerald-400 text-sm font-bold">$199/mo</span>
                  </div>
                  {["$8K+/yr", "$600/yr", "$7K+/yr", "$1K+/yr", "Custom", "$500+/mo", "$2.7K+/yr"].map((price, i) => (
                    <div key={i} className="p-3 flex items-center justify-center">
                      <span className="text-stone-500 text-[11px] font-mono">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 17 — EVERYTHING INCLUDED (light)
        ================================================================= */}
        <section
          ref={s17}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
              <p style={fadeUp(v17, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                All-in-One
              </p>
              <h2 style={fadeUp(v17, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
                16 features.{" "}
                <span className="text-emerald-600">$199/mo.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
              {[
                { icon: Target, label: "Smart Matching", delay: 200 },
                { icon: Shield, label: "Set-Aside Match", delay: 300 },
                { icon: Sparkles, label: "AI Proposals", delay: 400 },
                { icon: BarChart3, label: "Market Intel", delay: 500 },
                { icon: FileText, label: "Cap Statement", delay: 600 },
                { icon: Mic, label: "Voice-to-Doc", delay: 700 },
                { icon: Columns3, label: "Deal Pipeline", delay: 800 },
                { icon: Handshake, label: "Partner Search", delay: 900 },
                { icon: Search, label: "Quick Checker", delay: 1000 },
                { icon: Mail, label: "Email Alerts", delay: 1100 },
                { icon: BadgeCheck, label: "Eligibility", delay: 1200 },
                { icon: Layers, label: "IDIQ Tracking", delay: 1300 },
                { icon: Database, label: "Federal Data", delay: 1400 },
                { icon: Users, label: "Contact Intel", delay: 1500 },
                { icon: TrendingUp, label: "Award History", delay: 1600 },
                { icon: Bell, label: "Deadline Alerts", delay: 1700 },
              ].map((feature) => (
                <div
                  key={feature.label}
                  style={fadeUp(v17, feature.delay)}
                  className="bg-stone-50 border border-stone-100 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-emerald-100/30 hover:border-emerald-200 transition-all duration-500 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-stone-700 text-sm font-medium">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 18 — PRICING (light)
        ================================================================= */}
        <section
          ref={s18}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <p style={fadeUp(v18, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Pricing
              </p>
              <h2 style={fadeUp(v18, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-4 leading-tight">
                Simple pricing.
              </h2>

              <div style={fadeUp(v18, 200)} className="flex items-center justify-center gap-4 mt-8">
                <span className={`text-sm font-medium transition-colors ${!yearly ? "text-stone-900" : "text-stone-400"}`}>Monthly</span>
                <button
                  onClick={() => setYearly(!yearly)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${yearly ? "bg-emerald-500" : "bg-stone-300"}`}
                >
                  <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${yearly ? "translate-x-8" : "translate-x-1"}`} />
                </button>
                <span className={`text-sm font-medium transition-colors ${yearly ? "text-stone-900" : "text-stone-400"}`}>Yearly</span>
                {yearly && (
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">Save 20%</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              {/* Free */}
              <div style={fadeLeft(v18, 300)} className="bg-stone-50 border border-stone-200 rounded-2xl p-8 hover:border-stone-300 transition-all">
                <h3 className="text-stone-900 text-xl font-medium mb-2">Free</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-light text-stone-900">$0</span>
                  <span className="text-stone-400 text-sm">/forever</span>
                </div>
                <div className="space-y-3 mb-8">
                  {["Quick Company Checker", "5 opportunity matches", "NAICS identification", "Basic eligibility report"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-stone-400 flex-shrink-0" />
                      <span className="text-stone-500 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://app.capturepilot.com/check" target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-xl border border-stone-300 text-stone-600 text-sm hover:bg-stone-100 transition-all">
                  Try Quick Check
                </a>
              </div>

              {/* Pro */}
              <div style={fadeRight(v18, 400)} className="bg-white border-2 border-emerald-500 rounded-2xl p-8 relative shadow-xl shadow-emerald-100/50">
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ animation: v18 ? "glowPulse 3s ease-in-out infinite" : "none" }} />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg shadow-emerald-500/30">Most Popular</span>
                </div>
                <h3 className="text-stone-900 text-xl font-medium mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-light text-emerald-600">${yearly ? "159" : "199"}</span>
                  <span className="text-stone-400 text-sm">/month</span>
                </div>
                {yearly && (
                  <p className="text-stone-400 text-xs mb-4">Billed $1,908/year <span className="text-emerald-600 font-medium">- save $480</span></p>
                )}
                {!yearly && <div className="mb-6" />}
                <div className="space-y-3 mb-8">
                  {["Everything in Free", "Unlimited matches", "AI proposal drafts", "Market intelligence", "Deal pipeline", "Cap statement builder", "Partner search", "Priority email alerts"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://app.capturepilot.com/signup" target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                  Start Free Trial
                </a>
                <p className="text-stone-400 text-[10px] text-center mt-3">30-day free trial. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 19 — TRUST (dark)
        ================================================================= */}
        <section
          ref={s19}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="bottom-1/4 right-1/3" size="w-56 h-56" duration={10} />
          <EmeraldOrb className="top-1/3 left-1/4" size="w-48 h-48" duration={8} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <p style={fadeUp(v19, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Trusted
              </p>
              <h2 style={fadeUp(v19, 100)} className="text-4xl md:text-6xl font-extralight text-white mb-4 leading-tight">
                Built by people who{" "}
                <span className="text-emerald-500">win contracts.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {[
                { stat: "37K+", label: "Federal opportunities tracked", icon: Target, delay: 250 },
                { stat: "80K+", label: "SAM-registered contractors", icon: Building2, delay: 450 },
                { stat: "91K+", label: "Government contacts indexed", icon: Users, delay: 650 },
              ].map((item) => (
                <div
                  key={item.label}
                  style={fadeUp(v19, item.delay)}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-10 text-center hover:border-emerald-500/20 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <p className="text-4xl font-light text-white mb-2">{item.stat}</p>
                  <p className="text-stone-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <div style={fadeUp(v19, 900)} className="mt-14 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900 border border-stone-800 rounded-full">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-stone-400 text-sm">
                  Veteran-founded. Built in America. Updated daily.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 20 — GET STARTED (light)
        ================================================================= */}
        <section
          ref={s20}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto text-center">
            <div style={fadeUp(v20, 0)} className="mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-200 rounded-full">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-stone-500 tracking-[0.2em] uppercase text-xs">CapturePilot</span>
              </div>
            </div>

            <h2
              style={fadeUp(v20, 150)}
              className="text-4xl md:text-7xl font-extralight text-stone-900 mb-6 leading-tight"
            >
              Ready to win your first{" "}
              <span className="text-emerald-600">government contract?</span>
            </h2>

            <p style={fadeUp(v20, 300)} className="text-stone-400 text-lg font-light mb-14">
              No credit card required. Cancel anytime.
            </p>

            <div style={fadeUp(v20, 500)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://app.capturepilot.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 text-base"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://app.capturepilot.com/check"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 transition-all text-base"
              >
                Check Your Company
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div style={fadeUp(v20, 700)} className="pt-8 border-t border-stone-100">
              <p className="text-stone-400 text-sm">
                CapturePilot — A product by{" "}
                <span className="text-stone-600 font-medium">Americurial LLC</span>
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
