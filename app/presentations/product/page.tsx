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
} from "lucide-react";

const TOTAL_SLIDES = 16;

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook — triggers animation when slide is visible */
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
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

/* ------------------------------------------------------------------ */
/*  Animated bar — fills to `percent` when `animate` is true           */
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
        className={`h-full rounded-full transition-all ease-out ${color}`}
        style={{
          width: animate ? `${percent}%` : "0%",
          transitionDuration: "1.2s",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Presentation Component                                        */
/* ------------------------------------------------------------------ */
export default function ProductPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  /* refs for each slide — used by useSlideInView */
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

  /* ---- navigation helpers ---- */
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

  /* keyboard */
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

  /* scroll observer for current slide tracking */
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

  /* ---- slide theme helper for nav dots ---- */
  const darkSlides = [1, 3, 5, 7, 9, 10, 12, 15];
  const isDark = darkSlides.includes(currentSlide);

  /* ---- animation helper class ---- */
  const fadeUp = (visible: boolean, delay = 0) =>
    ({
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
    }) as React.CSSProperties;

  /* ---- pricing toggle ---- */
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
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
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
      `}</style>

      {/* ============ NAV DOTS ============ */}
      <div className="nav-dots fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i + 1)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === i + 1
                ? "bg-emerald-500 scale-125 shadow-lg shadow-emerald-500/50"
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
        {/* ===================================================================
            SLIDE 1 — TITLE (dark)
        =================================================================== */}
        <section
          ref={s1}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Animated grid */}
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

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/3 rounded-full blur-3xl" />

          {/* Floating emerald glow orb */}
          <div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-emerald-500/8 rounded-full blur-[100px]"
            style={{ animation: "orbFloat 8s ease-in-out infinite" }}
          />

          <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
            <div style={fadeUp(v1, 0)} className="mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-stone-800 rounded-full">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-stone-300 tracking-[0.3em] uppercase text-sm font-light">
                  CapturePilot
                </span>
              </div>
            </div>

            <h1
              style={fadeUp(v1, 150)}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-tight leading-[1.1] mb-8"
            >
              Win Government Contracts.{" "}
              <span className="text-emerald-500 font-light">Faster.</span>
            </h1>

            <p
              style={fadeUp(v1, 300)}
              className="text-xl md:text-2xl text-stone-400 font-light max-w-3xl mx-auto leading-relaxed mb-6"
            >
              The all-in-one platform for finding, qualifying, and winning federal contracts.
            </p>

            <p
              style={fadeUp(v1, 450)}
              className="text-stone-500 text-sm tracking-wider uppercase mb-16"
            >
              Built for veteran-owned and small businesses
            </p>

            <div style={fadeUp(v1, 600)} className="flex flex-col items-center gap-4">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent" />
              <p className="text-stone-600 text-xs tracking-wider">
                Scroll to explore
              </p>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-stone-800" />
          <div className="absolute bottom-8 right-20 w-16 h-16 border-r border-b border-stone-800" />
        </section>

        {/* ===================================================================
            SLIDE 2 — THE PROBLEM (light)
        =================================================================== */}
        <section
          ref={s2}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-5xl mx-auto px-8 w-full">
            <p style={fadeUp(v2, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Problem
            </p>
            <h2
              style={fadeUp(v2, 100)}
              className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight max-w-4xl"
            >
              Finding government contracts{" "}
              <span className="text-stone-400">shouldn&apos;t be this hard.</span>
            </h2>
            <div
              style={fadeUp(v2, 150)}
              className="w-20 h-px bg-emerald-500/50 mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Hours on SAM.gov",
                  desc: "Searching manually through thousands of listings. Copy-pasting into spreadsheets. Missing deadlines.",
                  delay: 200,
                },
                {
                  icon: Target,
                  title: "No way to know what fits",
                  desc: "Which contracts match your NAICS codes? Your set-aside eligibility? Your past performance?",
                  delay: 400,
                },
                {
                  icon: FileText,
                  title: "Proposals take weeks",
                  desc: "Starting from scratch every time. No templates. No intelligence on what the agency wants.",
                  delay: 600,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={fadeUp(v2, item.delay)}
                  className="bg-stone-50 border border-stone-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-stone-900 font-medium text-lg mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={fadeUp(v2, 800)} className="mt-12 text-center">
              <p className="text-stone-400 text-sm">
                This is why <span className="text-red-400 font-medium">90%</span> of qualified small businesses never win a federal contract.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 3 — MEET CAPTUREPILOT (dark) — Dashboard Mockup
        =================================================================== */}
        <section
          ref={s3}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Floating emerald glow orb */}
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-500/6 rounded-full blur-[120px]"
            style={{ animation: "orbFloat 10s ease-in-out infinite" }}
          />

          <div className="max-w-6xl mx-auto px-8 w-full relative z-10">
            <div className="text-center mb-12">
              <p style={fadeUp(v3, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                The Solution
              </p>
              <h2 style={fadeUp(v3, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4">
                One platform.{" "}
                <span className="text-emerald-500">Everything you need.</span>
              </h2>
            </div>

            {/* Fake dashboard mockup */}
            <div
              style={fadeUp(v3, 300)}
              className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
            >
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-800 bg-stone-900/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-stone-700" />
                  <div className="w-3 h-3 rounded-full bg-stone-700" />
                  <div className="w-3 h-3 rounded-full bg-stone-700" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-stone-800 rounded-md px-4 py-1 text-stone-500 text-xs font-mono">
                    app.capturepilot.com/dashboard
                  </div>
                </div>
              </div>

              <div className="flex min-h-[400px]">
                {/* Sidebar */}
                <div className="w-48 border-r border-stone-800 p-4 hidden md:block">
                  <div className="flex items-center gap-2 mb-8">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span className="text-white text-sm font-medium">CapturePilot</span>
                  </div>
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Matches", active: false },
                    { label: "Pipeline", active: false },
                    { label: "Proposals", active: false },
                    { label: "Intelligence", active: false },
                    { label: "Settings", active: false },
                  ].map((nav) => (
                    <div
                      key={nav.label}
                      className={`px-3 py-2 rounded-lg text-sm mb-1 ${
                        nav.active
                          ? "bg-emerald-500/10 text-emerald-500"
                          : "text-stone-500"
                      }`}
                    >
                      {nav.label}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-white text-lg font-medium">Top Matches</h3>
                      <p className="text-stone-500 text-xs">3 new opportunities today</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded-full">
                      Live
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "IT Infrastructure Modernization",
                        agency: "Department of Veterans Affairs",
                        score: 92,
                        badge: "HOT",
                        badgeColor: "bg-red-500",
                        delay: 500,
                      },
                      {
                        title: "Cybersecurity Assessment Services",
                        agency: "Department of Defense",
                        score: 78,
                        badge: "WARM",
                        badgeColor: "bg-amber-500",
                        delay: 800,
                      },
                      {
                        title: "Cloud Migration Support",
                        agency: "General Services Administration",
                        score: 61,
                        badge: "WARM",
                        badgeColor: "bg-amber-500",
                        delay: 1100,
                      },
                    ].map((opp) => (
                      <div
                        key={opp.title}
                        className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-5"
                        style={{
                          animation: v3
                            ? `cardSlideUp 0.7s ease ${opp.delay}ms both`
                            : "none",
                          opacity: v3 ? undefined : 0,
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-white text-sm font-medium">{opp.title}</h4>
                            <p className="text-stone-500 text-xs mt-1">{opp.agency}</p>
                          </div>
                          <span
                            className={`${opp.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}
                          >
                            {opp.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-stone-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{
                                width: v3 ? `${opp.score}%` : "0%",
                                transition: `width 1.2s ease ${opp.delay + 300}ms`,
                              }}
                            />
                          </div>
                          <span className="text-emerald-500 text-xs font-mono font-bold">
                            {opp.score}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 4 — SMART MATCHING (light)
        =================================================================== */}
        <section
          ref={s4}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-6xl mx-auto px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left — text */}
              <div>
                <p style={fadeUp(v4, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Smart Matching
                </p>
                <h2 style={fadeUp(v4, 100)} className="text-3xl md:text-4xl font-extralight text-stone-900 mb-4 leading-tight">
                  40,000+ opportunities.{" "}
                  <span className="text-emerald-600">Only the ones you can win.</span>
                </h2>
                <div style={fadeUp(v4, 150)} className="w-16 h-px bg-emerald-500/50 mb-8" />

                <div className="space-y-5">
                  {[
                    { icon: Search, text: "NAICS code matching against your profile", delay: 200 },
                    { icon: Shield, text: "Set-aside eligibility verification (8(a), SDVOSB, HUBZone)", delay: 300 },
                    { icon: MapPin, text: "Geographic scoring by place of performance", delay: 400 },
                    { icon: Bell, text: "Daily email alerts for new hot matches", delay: 500 },
                  ].map((item) => (
                    <div
                      key={item.text}
                      style={fadeUp(v4, item.delay)}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — mockup */}
              <div style={fadeUp(v4, 300)}>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-stone-900 font-medium text-sm">Your Matches</h3>
                    <span className="text-emerald-600 text-xs font-medium">47 new today</span>
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
                        className="bg-white border border-stone-100 rounded-xl p-4 hover:border-emerald-200 transition-colors duration-300"
                        style={{
                          animation: v4
                            ? `cardSlideUp 0.6s ease ${opp.delay}ms both`
                            : "none",
                          opacity: v4 ? undefined : 0,
                        }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-stone-800 text-sm font-medium">{opp.title}</h4>
                            <div className="flex gap-2 mt-1">
                              <span className="text-stone-400 text-[10px] bg-stone-100 px-1.5 py-0.5 rounded">
                                {opp.naics}
                              </span>
                              <span className="text-emerald-600 text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
                                {opp.set}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${
                              opp.badge === "HOT" ? "bg-red-500" : "bg-amber-500"
                            }`}
                          >
                            {opp.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <ScoreBar percent={opp.score} animate={v4} delay={opp.delay + 300} />
                          <span className="text-emerald-600 text-xs font-mono font-bold w-8 text-right">
                            {opp.score}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 5 — AI PROPOSAL DRAFTS (dark)
        =================================================================== */}
        <section
          ref={s5}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Floating emerald glow orb */}
          <div
            className="absolute top-1/4 right-1/4 w-56 h-56 bg-emerald-500/6 rounded-full blur-[100px]"
            style={{ animation: "orbFloat 9s ease-in-out infinite" }}
          />

          <div className="max-w-5xl mx-auto px-8 w-full relative z-10">
            <div className="text-center mb-12">
              <p style={fadeUp(v5, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                AI Proposals
              </p>
              <h2 style={fadeUp(v5, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                From solicitation to first draft{" "}
                <span className="text-emerald-500">in 15 minutes.</span>
              </h2>
              <p style={fadeUp(v5, 200)} className="text-stone-400 text-lg font-light max-w-2xl mx-auto">
                AI generates your starting point. You refine and make it yours.
              </p>
            </div>

            {/* Document mockup */}
            <div style={fadeUp(v5, 300)} className="max-w-2xl mx-auto">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Doc toolbar */}
                <div className="flex items-center gap-3 px-5 py-3 border-b border-stone-800">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span className="text-white text-sm font-medium">Proposal Draft</span>
                  <span className="text-stone-600 text-xs ml-auto">Auto-saving...</span>
                </div>

                <div className="p-6 space-y-5">
                  {/* Section items */}
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
                        animation: v5
                          ? `cardSlideUp 0.6s ease ${section.delay}ms both`
                          : "none",
                        opacity: v5 ? undefined : 0,
                      }}
                    >
                      {section.done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      ) : section.typing ? (
                        <Loader2
                          className="w-5 h-5 text-emerald-500 flex-shrink-0"
                          style={{ animation: "spin 1.5s linear infinite" }}
                        />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-stone-700 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          section.done
                            ? "text-stone-400 line-through"
                            : section.typing
                              ? "text-white font-medium"
                              : "text-stone-600"
                        }`}
                      >
                        {section.label}
                      </span>
                      {section.typing && (
                        <span className="text-emerald-500 text-xs ml-auto">Generating...</span>
                      )}
                    </div>
                  ))}

                  {/* Typing line */}
                  <div
                    className="mt-6 pt-6 border-t border-stone-800"
                    style={{
                      animation: v5 ? `cardSlideUp 0.6s ease 1800ms both` : "none",
                      opacity: v5 ? undefined : 0,
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
                        style={{ animation: "blink 1s step-end infinite" }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 6 — MARKET INTELLIGENCE (light)
        =================================================================== */}
        <section
          ref={s6}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-6xl mx-auto px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left — chart mockup */}
              <div style={fadeUp(v6, 200)}>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-500">
                  <h3 className="text-stone-900 font-medium text-sm mb-6">
                    Top Agencies by Spend in Your NAICS
                  </h3>
                  <div className="space-y-4">
                    {[
                      { agency: "Dept. of Veterans Affairs", amount: "$2.4B", pct: 92, delay: 400 },
                      { agency: "Dept. of Defense", amount: "$1.8B", pct: 75, delay: 600 },
                      { agency: "GSA", amount: "$1.2B", pct: 55, delay: 800 },
                      { agency: "Dept. of Homeland Security", amount: "$890M", pct: 40, delay: 1000 },
                      { agency: "Dept. of Energy", amount: "$620M", pct: 28, delay: 1200 },
                    ].map((row) => (
                      <div key={row.agency}>
                        <div className="flex justify-between mb-1">
                          <span className="text-stone-700 text-xs">{row.agency}</span>
                          <span className="text-stone-500 text-xs font-mono">{row.amount}</span>
                        </div>
                        <ScoreBar
                          percent={row.pct}
                          animate={v6}
                          delay={row.delay}
                          color="bg-emerald-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Competitor card */}
                  <div
                    className="mt-6 pt-6 border-t border-stone-200"
                    style={fadeUp(v6, 1400)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-4 h-4 text-stone-400" />
                      <span className="text-stone-700 text-xs font-medium">Top Incumbent</span>
                    </div>
                    <div className="bg-white border border-stone-100 rounded-lg p-3 hover:border-emerald-200 transition-colors duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-stone-800 text-sm font-medium">CleanForce Solutions LLC</p>
                          <p className="text-stone-400 text-xs">14 awards | $18.2M total</p>
                        </div>
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div>
                <p style={fadeUp(v6, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                  Market Intelligence
                </p>
                <h2 style={fadeUp(v6, 100)} className="text-3xl md:text-4xl font-extralight text-stone-900 mb-4 leading-tight">
                  Know your market{" "}
                  <span className="text-emerald-600">before you bid.</span>
                </h2>
                <div style={fadeUp(v6, 150)} className="w-16 h-px bg-emerald-500/50 mb-8" />

                <div className="space-y-6">
                  {[
                    "See who wins contracts in your space",
                    "Track agency spending trends year over year",
                    "Identify incumbents and their award history",
                    "Understand competitive landscape before committing",
                  ].map((text, i) => (
                    <div
                      key={text}
                      style={fadeUp(v6, 300 + i * 150)}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <p className="text-stone-600 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 7 — CAPABILITY STATEMENT BUILDER (dark)
        =================================================================== */}
        <section
          ref={s7}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Floating emerald glow orb */}
          <div
            className="absolute top-1/2 left-1/6 w-40 h-40 bg-emerald-500/8 rounded-full blur-[80px]"
            style={{ animation: "orbFloat 7s ease-in-out infinite" }}
          />

          <div className="max-w-5xl mx-auto px-8 w-full relative z-10">
            <div className="text-center mb-12">
              <p style={fadeUp(v7, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Capability Statement
              </p>
              <h2 style={fadeUp(v7, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                Record yourself.{" "}
                <span className="text-emerald-500">AI writes your cap statement.</span>
              </h2>
              <p style={fadeUp(v7, 200)} className="text-stone-400 text-lg font-light max-w-2xl mx-auto">
                Talk about your business for 2 minutes. Get a professional
                capability statement with your brand colors.
              </p>
            </div>

            {/* Mic → Document animation */}
            <div
              style={fadeUp(v7, 400)}
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
            >
              {/* Mic */}
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-stone-900 border-2 border-emerald-500/30 flex items-center justify-center relative">
                  <Mic className="w-10 h-10 text-emerald-500" />
                  {/* Pulse rings */}
                  {v7 && (
                    <>
                      <div
                        className="absolute inset-0 rounded-full border border-emerald-500/30"
                        style={{ animation: "pulseRing 2s ease-out infinite" }}
                      />
                      <div
                        className="absolute inset-0 rounded-full border border-emerald-500/20"
                        style={{
                          animation: "pulseRing 2s ease-out infinite",
                          animationDelay: "0.6s",
                        }}
                      />
                      <div
                        className="absolute inset-0 rounded-full border border-emerald-500/10"
                        style={{
                          animation: "pulseRing 2s ease-out infinite",
                          animationDelay: "1.2s",
                        }}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2">
                <div className="w-12 md:w-24 h-px bg-gradient-to-r from-emerald-500/50 to-emerald-500" />
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </div>

              {/* Document result */}
              <div
                className="bg-stone-900 border border-stone-800 rounded-2xl p-6 w-72 shadow-xl"
                style={{ animation: v7 ? "float 4s ease-in-out infinite" : "none" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span className="text-white text-sm font-medium">Capability Statement</span>
                </div>
                <div className="space-y-3">
                  <div
                    style={{
                      animation: v7 ? "cardSlideUp 0.5s ease 800ms both" : "none",
                      opacity: v7 ? undefined : 0,
                    }}
                  >
                    <p className="text-stone-500 text-[10px] uppercase tracking-wider mb-1">
                      Company
                    </p>
                    <p className="text-white text-sm">Acme Services LLC</p>
                  </div>
                  <div
                    style={{
                      animation: v7 ? "cardSlideUp 0.5s ease 1000ms both" : "none",
                      opacity: v7 ? undefined : 0,
                    }}
                  >
                    <p className="text-stone-500 text-[10px] uppercase tracking-wider mb-1">
                      Core Competencies
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Facility Mgmt", "HVAC", "Janitorial"].map((c) => (
                        <span
                          key={c}
                          className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      animation: v7 ? "cardSlideUp 0.5s ease 1200ms both" : "none",
                      opacity: v7 ? undefined : 0,
                    }}
                  >
                    <p className="text-stone-500 text-[10px] uppercase tracking-wider mb-1">
                      Past Performance
                    </p>
                    <p className="text-stone-400 text-xs">3 contracts | $4.2M total</p>
                  </div>
                  <div
                    className="flex gap-2 pt-2"
                    style={{
                      animation: v7 ? "cardSlideUp 0.5s ease 1400ms both" : "none",
                      opacity: v7 ? undefined : 0,
                    }}
                  >
                    <div className="w-6 h-6 rounded bg-emerald-500" />
                    <div className="w-6 h-6 rounded bg-stone-700" />
                    <div className="w-6 h-6 rounded bg-amber-500" />
                    <span className="text-stone-600 text-[10px] self-center ml-1">
                      Brand colors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 8 — DEAL PIPELINE / KANBAN (light)
        =================================================================== */}
        <section
          ref={s8}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-6xl mx-auto px-8 w-full">
            <div className="text-center mb-12">
              <p style={fadeUp(v8, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Deal Pipeline
              </p>
              <h2 style={fadeUp(v8, 100)} className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                Track every deal from{" "}
                <span className="text-emerald-600">discovery to award.</span>
              </h2>
              <p style={fadeUp(v8, 200)} className="text-stone-400 text-lg font-light">
                Kanban board built for government contracts.
              </p>
            </div>

            {/* Kanban mockup */}
            <div
              style={fadeUp(v8, 300)}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 overflow-x-auto"
            >
              <div className="grid grid-cols-4 gap-4 min-w-[700px]">
                {[
                  {
                    col: "Discovered",
                    color: "bg-stone-400",
                    cards: [
                      { title: "IT Support — USDA", value: "$180K" },
                      { title: "Network Infra — DHS", value: "$320K" },
                    ],
                  },
                  {
                    col: "Reviewing",
                    color: "bg-blue-500",
                    cards: [
                      { title: "Cleaning — VA Medical", value: "$450K" },
                      { title: "Guard Svc — DoD", value: "$210K" },
                    ],
                  },
                  {
                    col: "Bidding",
                    color: "bg-amber-500",
                    cards: [
                      { title: "HVAC Maint — GSA", value: "$890K" },
                    ],
                  },
                  {
                    col: "Won",
                    color: "bg-emerald-500",
                    glow: true,
                    cards: [
                      { title: "Janitorial — Ft Bragg", value: "$1.2M" },
                    ],
                  },
                ].map((column, colIdx) => (
                  <div key={column.col}>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full ${column.color}`} />
                      <span className="text-stone-700 text-sm font-medium">
                        {column.col}
                      </span>
                      <span className="text-stone-400 text-xs ml-auto">
                        {column.cards.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {column.cards.map((card, cardIdx) => (
                        <div
                          key={card.title}
                          className={`bg-white border rounded-xl p-4 transition-all duration-500 hover:shadow-md ${
                            column.glow
                              ? "border-emerald-200 shadow-md shadow-emerald-100"
                              : "border-stone-100 hover:border-emerald-200"
                          }`}
                          style={{
                            animation: v8
                              ? `cardSlideUp 0.5s ease ${400 + colIdx * 200 + cardIdx * 100}ms both`
                              : "none",
                            opacity: v8 ? undefined : 0,
                          }}
                        >
                          <h4 className="text-stone-800 text-sm font-medium mb-2">
                            {card.title}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-stone-400 text-xs">{card.value}</span>
                            {column.glow && (
                              <Award className="w-4 h-4 text-emerald-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated card moving indicator */}
              {v8 && (
                <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-center gap-2">
                  <div className="flex items-center gap-1 text-stone-400 text-xs">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    Drag cards between stages as your capture progresses
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 9 — QUICK COMPANY CHECK (dark)
        =================================================================== */}
        <section
          ref={s9}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Floating emerald glow orb */}
          <div
            className="absolute bottom-1/3 right-1/4 w-52 h-52 bg-emerald-500/6 rounded-full blur-[100px]"
            style={{ animation: "orbFloat 11s ease-in-out infinite" }}
          />

          <div className="max-w-4xl mx-auto px-8 w-full relative z-10">
            <div className="text-center mb-12">
              <p style={fadeUp(v9, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Quick Check
              </p>
              <h2 style={fadeUp(v9, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                Check your eligibility{" "}
                <span className="text-emerald-500">in 30 seconds. Free.</span>
              </h2>
              <p style={fadeUp(v9, 200)} className="text-stone-400 text-lg font-light max-w-2xl mx-auto">
                Enter your website. Get your NAICS codes, SAM status, and matching opportunities instantly.
              </p>
            </div>

            {/* Quick check mockup */}
            <div style={fadeUp(v9, 300)} className="max-w-lg mx-auto">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 shadow-2xl shadow-black/40">
                {/* URL input */}
                <div
                  className="bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 flex items-center gap-3 mb-6"
                  style={{
                    animation: v9 ? "cardSlideUp 0.5s ease 400ms both" : "none",
                    opacity: v9 ? undefined : 0,
                  }}
                >
                  <Globe className="w-4 h-4 text-stone-500 flex-shrink-0" />
                  <span className="text-white text-sm font-mono">
                    acme-services.com
                    <span
                      className="inline-block w-0.5 h-4 bg-emerald-500 ml-0.5 align-middle"
                      style={{ animation: v9 ? "blink 1s step-end infinite" : "none" }}
                    />
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  className="mb-6"
                  style={{
                    animation: v9 ? "cardSlideUp 0.5s ease 700ms both" : "none",
                    opacity: v9 ? undefined : 0,
                  }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-500 text-xs">Analyzing...</span>
                    <span className="text-emerald-500 text-xs font-mono">100%</span>
                  </div>
                  <div className="h-1.5 bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{
                        width: v9 ? "100%" : "0%",
                        transition: "width 2s ease 900ms",
                      }}
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  {[
                    {
                      label: "SAM.gov Registration",
                      value: "Active",
                      icon: CheckCircle2,
                      color: "text-emerald-500",
                      delay: 1200,
                    },
                    {
                      label: "NAICS Codes",
                      value: "561720 | 561730 | 561710",
                      icon: Target,
                      color: "text-emerald-500",
                      delay: 1500,
                    },
                    {
                      label: "Set-Aside Eligibility",
                      value: "SDVOSB, Small Business",
                      icon: Shield,
                      color: "text-emerald-500",
                      delay: 1800,
                    },
                    {
                      label: "Matching Opportunities",
                      value: "47 found",
                      icon: Zap,
                      color: "text-amber-400",
                      delay: 2100,
                    },
                  ].map((result) => (
                    <div
                      key={result.label}
                      className="flex items-center gap-4 bg-stone-800/50 rounded-xl px-4 py-3"
                      style={{
                        animation: v9
                          ? `cardSlideUp 0.5s ease ${result.delay}ms both`
                          : "none",
                        opacity: v9 ? undefined : 0,
                      }}
                    >
                      <result.icon className={`w-5 h-5 ${result.color} flex-shrink-0`} />
                      <div className="flex-1">
                        <p className="text-stone-500 text-[10px] uppercase tracking-wider">
                          {result.label}
                        </p>
                        <p className="text-white text-sm font-medium">{result.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 10 — COMPETITOR COMPARISON (dark) — NEW
        =================================================================== */}
        <section
          ref={s10}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Grid bg */}
          <div className="grid-bg absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
                animation: "gridMove 25s linear infinite",
              }}
            />
          </div>

          {/* Floating emerald glow orb */}
          <div
            className="absolute top-1/3 left-1/3 w-60 h-60 bg-emerald-500/5 rounded-full blur-[120px]"
            style={{ animation: "orbFloat 12s ease-in-out infinite" }}
          />

          <div className="max-w-6xl mx-auto px-4 md:px-8 w-full relative z-10">
            <div className="text-center mb-10">
              <p style={fadeUp(v10, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Comparison
              </p>
              <h2 style={fadeUp(v10, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                See how we{" "}
                <span className="text-emerald-500">compare.</span>
              </h2>
              <p style={fadeUp(v10, 200)} className="text-stone-400 text-base font-light max-w-2xl mx-auto">
                The only platform combining AI tools + consulting support at SMB pricing.
              </p>
            </div>

            {/* Comparison table */}
            <div style={fadeUp(v10, 300)} className="overflow-x-auto -mx-4 px-4">
              <div className="min-w-[800px]">
                {/* Header row */}
                <div
                  className="grid grid-cols-9 gap-0 mb-1"
                  style={{
                    animation: v10 ? "tableRowSlide 0.6s ease 400ms both" : "none",
                    opacity: v10 ? undefined : 0,
                  }}
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

                {/* Data rows */}
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
                      animation: v10 ? `tableRowSlide 0.5s ease ${500 + rowIdx * 120}ms both` : "none",
                      opacity: v10 ? undefined : 0,
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
                  style={{
                    animation: v10 ? `tableRowSlide 0.5s ease ${500 + 8 * 120}ms both` : "none",
                    opacity: v10 ? undefined : 0,
                  }}
                >
                  <div className="p-3 flex items-center">
                    <span className="text-stone-300 text-xs font-bold">Price</span>
                  </div>
                  <div
                    className="p-3 flex items-center justify-center bg-emerald-500/10 border-x border-b border-emerald-500/30 rounded-b-xl"
                    style={{ animation: v10 ? "pulseBorder 3s ease-in-out infinite" : "none" }}
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

        {/* ===================================================================
            SLIDE 11 — PARTNER SEARCH (light) — NEW
        =================================================================== */}
        <section
          ref={s11}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-5xl mx-auto px-8 w-full">
            <div className="text-center mb-12">
              <p style={fadeUp(v11, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Partner Search
              </p>
              <h2 style={fadeUp(v11, 100)} className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                Find teaming partners{" "}
                <span className="text-emerald-600">in seconds.</span>
              </h2>
              <p style={fadeUp(v11, 200)} className="text-stone-400 text-lg font-light max-w-2xl mx-auto">
                Search 1M+ SAM-registered companies. Filter by NAICS, certifications, location.
              </p>
            </div>

            {/* Partner search mockup */}
            <div style={fadeUp(v11, 300)} className="max-w-2xl mx-auto">
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 shadow-sm">
                {/* Search input */}
                <div
                  className="bg-white border border-stone-200 rounded-xl px-4 py-3 flex items-center gap-3 mb-6"
                  style={{
                    animation: v11 ? "cardSlideUp 0.5s ease 400ms both" : "none",
                    opacity: v11 ? undefined : 0,
                  }}
                >
                  <Search className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  <span className="text-stone-800 text-sm font-mono">
                    NAICS 237130 + SDVOSB
                    <span
                      className="inline-block w-0.5 h-4 bg-emerald-500 ml-0.5 align-middle"
                      style={{ animation: v11 ? "blink 1s step-end infinite" : "none" }}
                    />
                  </span>
                  <span className="ml-auto text-stone-400 text-xs">127 results</span>
                </div>

                {/* Company cards */}
                <div className="space-y-4">
                  {[
                    {
                      name: "Iron Ridge Construction LLC",
                      naics: ["237130", "237110"],
                      location: "Virginia Beach, VA",
                      certs: ["SDVOSB", "SB"],
                      samStatus: "Active",
                      delay: 600,
                    },
                    {
                      name: "Patriot Infrastructure Group",
                      naics: ["237130", "237310"],
                      location: "Fayetteville, NC",
                      certs: ["SDVOSB", "8(a)"],
                      samStatus: "Active",
                      delay: 900,
                    },
                    {
                      name: "Summit Civil Partners Inc",
                      naics: ["237130", "238910"],
                      location: "San Antonio, TX",
                      certs: ["SDVOSB"],
                      samStatus: "Active",
                      delay: 1200,
                    },
                  ].map((company) => (
                    <div
                      key={company.name}
                      className="bg-white border border-stone-100 rounded-xl p-5 hover:border-emerald-200 hover:shadow-md transition-all duration-500"
                      style={{
                        animation: v11
                          ? `slideUp 0.6s ease ${company.delay}ms both`
                          : "none",
                        opacity: v11 ? undefined : 0,
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-stone-800 text-sm font-medium flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-stone-400" />
                            {company.name}
                          </h4>
                          <div className="flex items-center gap-1 mt-1 ml-6">
                            <MapPin className="w-3 h-3 text-stone-400" />
                            <span className="text-stone-400 text-xs">{company.location}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                          {company.samStatus}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 ml-6">
                        {company.naics.map((n) => (
                          <span key={n} className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded font-mono">
                            {n}
                          </span>
                        ))}
                        {company.certs.map((c) => (
                          <span key={c} className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 12 — ELIGIBILITY & IDIQ TRACKING (dark) — NEW
        =================================================================== */}
        <section
          ref={s12}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Floating emerald glow orb */}
          <div
            className="absolute top-1/4 left-1/3 w-48 h-48 bg-emerald-500/6 rounded-full blur-[100px]"
            style={{ animation: "orbFloat 9s ease-in-out infinite" }}
          />

          <div className="max-w-6xl mx-auto px-8 w-full relative z-10">
            <div className="text-center mb-12">
              <p style={fadeUp(v12, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Eligibility & Vehicles
              </p>
              <h2 style={fadeUp(v12, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                Know before you bid.{" "}
                <span className="text-emerald-500">Win more often.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT — Instant Eligibility Check */}
              <div
                style={fadeUp(v12, 300)}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">Instant Eligibility Check</h3>
                    <p className="text-stone-500 text-xs">For: Janitorial — Fort Bragg</p>
                  </div>
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
                      style={{
                        animation: v12
                          ? `slideInLeft 0.5s ease ${item.delay}ms both`
                          : "none",
                        opacity: v12 ? undefined : 0,
                      }}
                    >
                      <div
                        style={{
                          animation: v12
                            ? `checkPop 0.4s ease ${item.delay + 200}ms both`
                            : "none",
                          opacity: v12 ? undefined : 0,
                        }}
                      >
                        {item.pass ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                      <span className={`text-sm ${item.pass ? "text-stone-300" : "text-red-300"}`}>
                        {item.label}
                      </span>
                      {!item.pass && (
                        <span className="text-red-400/70 text-[10px] ml-auto uppercase tracking-wider">Action needed</span>
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 pt-4 border-t border-stone-800"
                  style={{
                    animation: v12 ? "cardSlideUp 0.5s ease 1600ms both" : "none",
                    opacity: v12 ? undefined : 0,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-stone-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{
                          width: v12 ? "80%" : "0%",
                          transition: "width 1.5s ease 1800ms",
                        }}
                      />
                    </div>
                    <span className="text-emerald-500 text-xs font-mono font-bold">80%</span>
                  </div>
                  <p className="text-stone-500 text-[10px] mt-2">Eligibility score</p>
                </div>
              </div>

              {/* RIGHT — IDIQ Contract Vehicles */}
              <div
                style={fadeUp(v12, 400)}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">IDIQ Contract Vehicles</h3>
                    <p className="text-stone-500 text-xs">Get on a vehicle = years of steady work</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "GSA MAS (Multiple Award Schedule)", agency: "GSA", value: "$40B+", delay: 600 },
                    { name: "OASIS+ Small Business", agency: "GSA", value: "$60B ceiling", delay: 800 },
                    { name: "SEWP VI", agency: "NASA", value: "$15B", delay: 1000 },
                    { name: "T4NG2", agency: "VA", value: "$12B", delay: 1200 },
                  ].map((vehicle) => (
                    <div
                      key={vehicle.name}
                      className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-4 hover:border-emerald-500/20 transition-colors duration-300"
                      style={{
                        animation: v12
                          ? `slideInRight 0.5s ease ${vehicle.delay}ms both`
                          : "none",
                        opacity: v12 ? undefined : 0,
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-white text-xs font-medium mb-1">{vehicle.name}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded">
                              {vehicle.agency}
                            </span>
                          </div>
                        </div>
                        <span className="text-emerald-400 text-xs font-mono font-bold">{vehicle.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-6 pt-4 border-t border-stone-800 text-center"
                  style={{
                    animation: v12 ? "cardSlideUp 0.5s ease 1500ms both" : "none",
                    opacity: v12 ? undefined : 0,
                  }}
                >
                  <p className="text-stone-500 text-xs">
                    We track <span className="text-emerald-400 font-medium">200+ active vehicles</span> across all agencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 13 — EVERYTHING INCLUDED (light)
        =================================================================== */}
        <section
          ref={s13}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-5xl mx-auto px-8 w-full">
            <div className="text-center mb-16">
              <p style={fadeUp(v13, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                All-in-One
              </p>
              <h2 style={fadeUp(v13, 100)} className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                16 features. One platform.{" "}
                <span className="text-emerald-600">$199/mo.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Target, label: "Smart Matching", delay: 200 },
                { icon: Sparkles, label: "AI Proposals", delay: 300 },
                { icon: BarChart3, label: "Market Intel", delay: 400 },
                { icon: FileText, label: "Cap Statement", delay: 500 },
                { icon: Columns3, label: "Deal Pipeline", delay: 600 },
                { icon: Handshake, label: "Partner Search", delay: 700 },
                { icon: Search, label: "Eligibility Check", delay: 800 },
                { icon: Mail, label: "Email Alerts", delay: 900 },
              ].map((feature) => (
                <div
                  key={feature.label}
                  style={fadeUp(v13, feature.delay)}
                  className="bg-stone-50 border border-stone-100 rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-emerald-100/30 hover:border-emerald-200 transition-all duration-500 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-stone-700 text-sm font-medium">{feature.label}</p>
                </div>
              ))}
            </div>

            <div style={fadeUp(v13, 1100)} className="text-center mt-12">
              <p className="text-stone-400 text-sm">
                30-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 14 — PRICING (light) — ENHANCED
        =================================================================== */}
        <section
          ref={s14}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-4xl mx-auto px-8 w-full">
            <div className="text-center mb-12">
              <p style={fadeUp(v14, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Pricing
              </p>
              <h2 style={fadeUp(v14, 100)} className="text-3xl md:text-5xl font-extralight text-stone-900 mb-4 leading-tight">
                Simple, transparent pricing.
              </h2>

              {/* Yearly toggle */}
              <div style={fadeUp(v14, 200)} className="flex items-center justify-center gap-4 mt-8">
                <span className={`text-sm font-medium transition-colors ${!yearly ? "text-stone-900" : "text-stone-400"}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setYearly(!yearly)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                    yearly ? "bg-emerald-500" : "bg-stone-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                      yearly ? "translate-x-8" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium transition-colors ${yearly ? "text-stone-900" : "text-stone-400"}`}>
                  Yearly
                </span>
                {yearly && (
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Free */}
              <div
                style={fadeUp(v14, 300)}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-8 hover:border-stone-300 transition-all"
              >
                <h3 className="text-stone-900 text-lg font-medium mb-2">Free</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-light text-stone-900">$0</span>
                  <span className="text-stone-400 text-sm">/forever</span>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Quick Company Checker",
                    "5 opportunity matches",
                    "NAICS identification",
                    "Basic eligibility report",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-stone-400 flex-shrink-0" />
                      <span className="text-stone-500 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://app.capturepilot.com/check"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-xl border border-stone-300 text-stone-600 text-sm hover:bg-stone-100 transition-all"
                >
                  Try Quick Check
                </a>
              </div>

              {/* Pro — ENHANCED with glow */}
              <div
                style={fadeUp(v14, 400)}
                className="bg-white border-2 border-emerald-500 rounded-2xl p-8 relative shadow-xl shadow-emerald-100/50"
              >
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ animation: v14 ? "glowPulse 3s ease-in-out infinite" : "none" }}
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg shadow-emerald-500/30">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-stone-900 text-lg font-medium mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-light text-emerald-600">
                    ${yearly ? "159" : "199"}
                  </span>
                  <span className="text-stone-400 text-sm">/month</span>
                </div>
                {yearly && (
                  <p className="text-stone-400 text-xs mb-4">
                    Billed $1,908/year{" "}
                    <span className="text-emerald-600 font-medium">- save $480</span>
                  </p>
                )}
                {!yearly && <div className="mb-6" />}
                <div className="space-y-3 mb-8">
                  {[
                    "Everything in Free",
                    "Unlimited opportunity matches",
                    "AI proposal drafts",
                    "Market intelligence",
                    "Deal pipeline (Kanban)",
                    "Capability statement builder",
                    "Partner & teaming search",
                    "Priority email alerts",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://app.capturepilot.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
                >
                  Start Free Trial
                </a>
                <p className="text-stone-400 text-[10px] text-center mt-3">
                  30-day free trial on both plans. Cancel anytime.
                </p>
              </div>
            </div>

            <div style={fadeUp(v14, 600)} className="text-center mt-10">
              <p className="text-stone-400 text-sm">
                Or work with our consulting team —{" "}
                <span className="text-emerald-600 font-medium">starting at $2,500/mo</span>
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 15 — TRUST & SOCIAL PROOF (dark)
        =================================================================== */}
        <section
          ref={s15}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Floating emerald glow orb */}
          <div
            className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-emerald-500/5 rounded-full blur-[120px]"
            style={{ animation: "orbFloat 10s ease-in-out infinite" }}
          />

          <div className="max-w-4xl mx-auto px-8 w-full relative z-10">
            <div className="text-center mb-16">
              <p style={fadeUp(v15, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Trusted
              </p>
              <h2 style={fadeUp(v15, 100)} className="text-3xl md:text-5xl font-extralight text-white mb-4 leading-tight">
                Built by people who{" "}
                <span className="text-emerald-500">win contracts.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  stat: "37K+",
                  label: "Federal opportunities tracked",
                  icon: Target,
                  delay: 200,
                },
                {
                  stat: "80K+",
                  label: "SAM-registered contractors",
                  icon: Building2,
                  delay: 400,
                },
                {
                  stat: "91K+",
                  label: "Government contacts indexed",
                  icon: Users,
                  delay: 600,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={fadeUp(v15, item.delay)}
                  className="bg-stone-900 border border-stone-800 rounded-2xl p-8 text-center hover:border-emerald-500/20 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="text-3xl font-light text-white mb-2">{item.stat}</p>
                  <p className="text-stone-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <div style={fadeUp(v15, 800)} className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 border border-stone-800 rounded-full">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-stone-400 text-xs">
                  Veteran-founded. Built in America. Data updated daily.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SLIDE 16 — GET STARTED (light)
        =================================================================== */}
        <section
          ref={s16}
          className="slide min-h-screen bg-white flex items-center justify-center relative"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="max-w-3xl mx-auto px-8 w-full text-center">
            <div style={fadeUp(v16, 0)} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-full">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-stone-500 tracking-[0.2em] uppercase text-xs">
                  CapturePilot
                </span>
              </div>
            </div>

            <h2
              style={fadeUp(v16, 100)}
              className="text-3xl md:text-5xl font-extralight text-stone-900 mb-6 leading-tight"
            >
              Ready to win your first{" "}
              <span className="text-emerald-600">government contract?</span>
            </h2>

            <p
              style={fadeUp(v16, 200)}
              className="text-stone-400 text-lg font-light mb-12"
            >
              No credit card required. Cancel anytime.
            </p>

            <div
              style={fadeUp(v16, 400)}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a
                href="https://app.capturepilot.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 text-sm"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://app.capturepilot.com/check"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 transition-all text-sm"
              >
                Check Your Company
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div style={fadeUp(v16, 600)} className="pt-8 border-t border-stone-100">
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
