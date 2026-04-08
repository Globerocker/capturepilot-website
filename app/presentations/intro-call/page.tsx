"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  ChevronUp,
  ChevronDown,
  Shield,
  Clock,
  Building2,
  Users,
  Target,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Search,
  FileText,
  BarChart3,
  Layers,
  Handshake,
  Award,
  CircleDollarSign,
  BadgeCheck,
  Briefcase,
  ListChecks,
  HelpCircle,
  TrendingUp,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  Database,
  Eye,
  Mail,
  ClipboardList,
} from "lucide-react";

const TOTAL_SLIDES = 10;

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
export default function IntroCallPresentationPage() {
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

  const darkSlides = [1, 3, 5, 7, 9];
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

  return (
    <>
      {/* ============ GLOBAL STYLES ============ */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          html {
            height: auto !important;
            overflow: visible !important;
          }
          body {
            height: auto !important;
            overflow: visible !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          #print-slides {
            height: auto !important;
            overflow: visible !important;
            scroll-snap-type: none !important;
            display: block !important;
            position: static !important;
          }
          #print-slides > section {
            min-height: 100vh !important;
            height: 100vh !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            break-after: page !important;
            overflow: hidden !important;
            position: relative !important;
          }
          .nav-dots,
          .slide-counter,
          .nav-arrows {
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
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 10px) scale(0.95); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.15); }
          50% { box-shadow: 0 0 40px rgba(16,185,129,0.3); }
        }
        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseBorder {
          0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.2), inset 0 0 20px rgba(16,185,129,0.05); }
          50% { box-shadow: 0 0 40px rgba(16,185,129,0.4), inset 0 0 30px rgba(16,185,129,0.1); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      ` }} />

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
        id="print-slides"
        className="slide-container h-screen overflow-y-scroll print:!h-auto print:!overflow-visible print:!block"
        style={{ scrollSnapType: "y mandatory" }}
      >

        {/* =================================================================
            SLIDE 1 — WELCOME (dark)
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
          <div className="absolute inset-0 opacity-[0.04]">
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
                  Americurial LLC
                </span>
              </div>
            </div>

            <h1
              style={fadeUp(v1, 200)}
              className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-tight leading-[1.05] mb-8"
            >
              Introduction{" "}
              <span className="text-emerald-500 font-light">Call</span>
            </h1>

            <p
              style={fadeUp(v1, 350)}
              className="text-stone-400 text-xl md:text-2xl font-light mb-6 max-w-2xl mx-auto"
            >
              Federal Capture Consulting
            </p>

            <p
              style={fadeUp(v1, 500)}
              className="text-stone-500 text-base font-light mb-20 max-w-xl mx-auto"
            >
              Let&apos;s see if a partnership makes sense.
            </p>

            <div style={fadeUp(v1, 650)} className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900/60 border border-stone-800 rounded-full">
                <Clock className="w-4 h-4 text-emerald-500/70" />
                <span className="text-stone-500 text-sm tracking-wider">~20 minutes</span>
              </div>
            </div>

            <div style={fadeUp(v1, 800)} className="mt-16 flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent" />
              <p className="text-stone-600 text-xs tracking-wider">Scroll to begin</p>
            </div>
          </div>

          <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-stone-800" />
          <div className="absolute bottom-8 right-20 w-20 h-20 border-r border-b border-stone-800" />
        </section>

        {/* =================================================================
            SLIDE 2 — AGENDA (light)
        ================================================================= */}
        <section
          ref={s2}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v2, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Agenda
            </p>
            <h2 style={fadeUp(v2, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-6 leading-tight">
              What we&apos;ll cover{" "}
              <span className="text-stone-400">today</span>
            </h2>
            <div style={fadeUp(v2, 150)} className="w-24 h-px bg-emerald-500/50 mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "Your Business",
                  time: "8 min",
                  desc: "Understanding your company and capabilities",
                  icon: Building2,
                  delay: 200,
                },
                {
                  num: "02",
                  title: "B2G Readiness",
                  time: "4 min",
                  desc: "Assessing your federal contracting potential",
                  icon: Target,
                  delay: 350,
                },
                {
                  num: "03",
                  title: "Our Approach",
                  time: "4 min",
                  desc: "How we help companies enter the federal market",
                  icon: Handshake,
                  delay: 500,
                },
                {
                  num: "04",
                  title: "Next Steps",
                  time: "4 min",
                  desc: "Pricing, fit, and decision",
                  icon: ArrowRight,
                  delay: 650,
                },
              ].map((item) => (
                <div
                  key={item.num}
                  style={fadeUp(v2, item.delay)}
                  className="bg-stone-50/80 backdrop-blur-sm border border-stone-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 group flex items-start gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-emerald-500 font-mono text-sm">{item.num}</span>
                      <h3 className="text-stone-900 font-medium text-xl">{item.title}</h3>
                      <span className="ml-auto text-xs font-mono text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-stone-500 text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={fadeUp(v2, 800)} className="mt-12 text-center">
              <p className="text-stone-400 text-sm italic">
                This is a qualification conversation, not a sales pitch.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 3 — ABOUT YOUR COMPANY (dark)
        ================================================================= */}
        <section
          ref={s3}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/3 left-1/5" size="w-72 h-72" duration={9} />
          <EmeraldOrb className="bottom-1/4 right-1/4" size="w-56 h-56" duration={11} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v3, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Section 1 / Your Business
            </p>
            <h2 style={fadeUp(v3, 100)} className="text-4xl md:text-6xl font-extralight text-white mb-6 leading-tight">
              Tell us about{" "}
              <span className="text-emerald-500">your business.</span>
            </h2>
            <div style={fadeUp(v3, 150)} className="w-24 h-px bg-emerald-500/50 mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Briefcase,
                  question: "What does your company do? Walk me through your core services.",
                  delay: 250,
                },
                {
                  icon: Clock,
                  question: "How long have you been in business?",
                  delay: 350,
                },
                {
                  icon: CircleDollarSign,
                  question: "What's your approximate annual revenue?",
                  delay: 450,
                },
                {
                  icon: Globe,
                  question: "Where do you operate? Which states/regions?",
                  delay: 550,
                },
                {
                  icon: Users,
                  question: "How many employees?",
                  delay: 650,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={fadeUp(v3, item.delay)}
                  className={`bg-stone-900/60 backdrop-blur-sm border border-stone-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-500 group ${
                    idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <p className="text-stone-300 text-base font-light leading-relaxed">
                      {item.question}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={fadeUp(v3, 800)} className="mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900/80 border border-stone-800 rounded-full">
                <MessageCircle className="w-4 h-4 text-emerald-500/70" />
                <span className="text-stone-500 text-sm">
                  Listen actively — this information drives everything.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 4 — EXPERIENCE & GOALS (light)
        ================================================================= */}
        <section
          ref={s4}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v4, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Section 2 / B2G Readiness
            </p>
            <h2 style={fadeUp(v4, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-6 leading-tight">
              Federal contracting{" "}
              <span className="text-stone-400">experience</span>
            </h2>
            <div style={fadeUp(v4, 150)} className="w-24 h-px bg-emerald-500/50 mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: FileText,
                  question: "Have you ever bid on a government contract?",
                  delay: 200,
                },
                {
                  icon: Award,
                  question: "Do you have any federal past performance?",
                  delay: 300,
                },
                {
                  icon: Database,
                  question: "Are you registered on SAM.gov?",
                  delay: 400,
                },
                {
                  icon: BadgeCheck,
                  question: "What certifications do you hold? (SDVOSB, WOSB, 8(a), HUBZone?)",
                  delay: 500,
                },
                {
                  icon: HelpCircle,
                  question: "What made you start looking at government contracting now?",
                  delay: 600,
                },
                {
                  icon: TrendingUp,
                  question: "What would success look like for you in 12 months?",
                  delay: 700,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={fadeUp(v4, item.delay)}
                  className="bg-stone-50/80 backdrop-blur-sm border border-stone-100 rounded-xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-stone-700 text-base leading-relaxed">
                      {item.question}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={fadeUp(v4, 850)} className="mt-10">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-50 border border-amber-200/60 rounded-full">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-amber-700 text-sm font-medium">
                  Key qualification slide — these answers determine fit.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 5 — PAIN POINTS (dark)
        ================================================================= */}
        <section
          ref={s5}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/4 right-1/3" size="w-64 h-64" duration={10} />
          <EmeraldOrb className="bottom-1/3 left-1/4" size="w-48 h-48" duration={7} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v5, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Section 2 / Continued
            </p>
            <h2 style={fadeUp(v5, 100)} className="text-4xl md:text-6xl font-extralight text-white mb-6 leading-tight">
              What&apos;s holding{" "}
              <span className="text-emerald-500">you back?</span>
            </h2>
            <div style={fadeUp(v5, 150)} className="w-24 h-px bg-emerald-500/50 mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: Target,
                  question: "What's been the biggest challenge in exploring federal work?",
                  delay: 250,
                },
                {
                  icon: Users,
                  question: "Do you have anyone internally focused on business development?",
                  delay: 400,
                },
                {
                  icon: Eye,
                  question: "Have you looked at any other tools or consultants?",
                  delay: 550,
                },
                {
                  icon: ShieldCheck,
                  question: "What's your biggest concern about entering this market?",
                  delay: 700,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={fadeUp(v5, item.delay)}
                  className="bg-stone-900/60 backdrop-blur-sm border border-stone-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <p className="text-stone-300 text-lg font-light leading-relaxed pt-1">
                      {item.question}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={fadeUp(v5, 900)} className="mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900/80 border border-stone-800 rounded-full">
                <MessageCircle className="w-4 h-4 text-emerald-500/70" />
                <span className="text-stone-500 text-sm">
                  Let them talk. The more they share, the better we can assess fit.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 6 — OUR MODEL (light)
        ================================================================= */}
        <section
          ref={s6}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v6, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Section 3 / Our Approach
            </p>
            <h2 style={fadeUp(v6, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-6 leading-tight">
              How we{" "}
              <span className="text-stone-400">work</span>
            </h2>
            <div style={fadeUp(v6, 150)} className="w-24 h-px bg-emerald-500/50 mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {[
                {
                  icon: Users,
                  title: "We become your federal capture team",
                  desc: "We find, qualify, and pursue opportunities on your behalf.",
                  delay: 250,
                },
                {
                  icon: Briefcase,
                  title: "You focus on execution",
                  desc: "When we win contracts, you deliver the work.",
                  delay: 450,
                },
                {
                  icon: Handshake,
                  title: "Aligned incentives",
                  desc: "We earn through a success fee — if you don't win, we don't earn.",
                  delay: 650,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={fadeUp(v6, item.delay)}
                  className="bg-stone-50/80 backdrop-blur-sm border border-stone-100 rounded-2xl p-10 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 group text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 mx-auto group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-stone-900 font-medium text-xl mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-base">{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={fadeUp(v6, 800)} className="text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-3">
                <span className="text-stone-400 text-sm">We handle:</span>
                {[
                  "Opportunity Sourcing",
                  "Agency Communications",
                  "Proposal Support",
                  "Pipeline Management",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-stone-600 text-sm bg-stone-100 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 7 — OUR SOFTWARE (dark)
        ================================================================= */}
        <section
          ref={s7}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/4 left-1/3" size="w-80 h-80" duration={8} />
          <EmeraldOrb className="bottom-1/3 right-1/4" size="w-64 h-64" duration={11} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v7, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Section 3 / Technology
            </p>
            <h2 style={fadeUp(v7, 100)} className="text-4xl md:text-6xl font-extralight text-white mb-6 leading-tight">
              Powered by{" "}
              <span className="text-emerald-500">CapturePilot</span>
            </h2>
            <div style={fadeUp(v7, 150)} className="w-24 h-px bg-emerald-500/50 mb-14" />

            <div style={scaleIn(v7, 250)} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
              {[
                { icon: Search, label: "Smart Matching" },
                { icon: Sparkles, label: "AI Proposals" },
                { icon: BarChart3, label: "Market Intel" },
                { icon: Layers, label: "Deal Pipeline" },
                { icon: Eye, label: "Competitor Intel" },
                { icon: CheckCircle2, label: "Eligibility Check" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/60 backdrop-blur-sm border border-stone-800 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/30 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="text-stone-400 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div style={fadeUp(v7, 500)} className="text-center max-w-3xl mx-auto">
              <p className="text-stone-400 text-lg font-light leading-relaxed">
                Our proprietary platform gives us — and you — a{" "}
                <span className="text-emerald-500">data advantage</span>{" "}
                that no traditional consultant can match.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 8 — PRICING (light)
        ================================================================= */}
        <section
          ref={s8}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v8, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Section 4 / Investment
            </p>
            <h2 style={fadeUp(v8, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-6 leading-tight">
              Transparent{" "}
              <span className="text-stone-400">pricing</span>
            </h2>
            <div style={fadeUp(v8, 150)} className="w-24 h-px bg-emerald-500/50 mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Standard */}
              <div
                style={fadeLeft(v8, 250)}
                className="bg-stone-50/80 backdrop-blur-sm border border-stone-200 rounded-2xl p-10 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 relative"
              >
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    Most Common
                  </span>
                </div>
                <h3 className="text-stone-900 font-medium text-2xl mb-6">Standard</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CircleDollarSign className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">$2,500 &ndash; $3,500/mo retainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-stone-600 text-base">5% success fee on awarded contracts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-stone-600 text-base">12-month minimum</span>
                  </div>
                </div>
                <div className="w-full h-px bg-stone-200 mb-4" />
                <p className="text-stone-400 text-sm">
                  Ideal for single-NAICS companies entering the federal market.
                </p>
              </div>

              {/* Enterprise */}
              <div
                style={fadeRight(v8, 400)}
                className="bg-stone-900 border border-stone-800 rounded-2xl p-10 hover:shadow-xl transition-all duration-500 relative"
              >
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-mono text-stone-400 bg-stone-800 px-3 py-1 rounded-full">
                    Custom
                  </span>
                </div>
                <h3 className="text-white font-medium text-2xl mb-6">Enterprise</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CircleDollarSign className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-stone-200 text-lg font-medium">$5,000+/mo retainer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-stone-400 text-base">5% success fee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-stone-400 text-base">Complex requirements or multiple NAICS focus areas</span>
                  </div>
                </div>
                <div className="w-full h-px bg-stone-800 mb-4" />
                <p className="text-stone-500 text-sm">
                  For companies with diverse capabilities and broader federal ambitions.
                </p>
              </div>
            </div>

            <div style={fadeUp(v8, 600)} className="text-center space-y-3">
              <p className="text-stone-600 text-base">
                The retainer covers our team&apos;s ongoing capture work. The success fee aligns our financial incentives with yours.
              </p>
              <p className="text-stone-400 text-sm">
                Your retainer depends on company size, scope, and expected pursuit volume.
              </p>
            </div>

            <div style={fadeUp(v8, 800)} className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-100 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 text-sm font-medium">
                  Be direct. No hidden fees. They appreciate transparency.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 9 — ARE WE A FIT? (dark)
        ================================================================= */}
        <section
          ref={s9}
          className="slide min-h-screen bg-stone-950 flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DarkGridBg />
          <EmeraldOrb className="top-1/4 right-1/4" size="w-72 h-72" duration={9} />
          <EmeraldOrb className="bottom-1/3 left-1/3" size="w-56 h-56" duration={7} />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1400px] mx-auto">
            <p style={fadeUp(v9, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Section 4 / Qualification
            </p>
            <h2 style={fadeUp(v9, 100)} className="text-4xl md:text-6xl font-extralight text-white mb-6 leading-tight">
              Mutual{" "}
              <span className="text-emerald-500">qualification</span>
            </h2>
            <div style={fadeUp(v9, 150)} className="w-24 h-px bg-emerald-500/50 mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What we need */}
              <div
                style={fadeLeft(v9, 250)}
                className="bg-stone-900/60 backdrop-blur-sm border border-stone-800 rounded-2xl p-10"
              >
                <h3 className="text-white font-medium text-xl mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center">
                    <ListChecks className="w-4 h-4 text-stone-400" />
                  </div>
                  What we need from you
                </h3>
                <div className="space-y-5">
                  {[
                    "Leadership commitment (12+ months)",
                    "Responsive to information requests",
                    "Realistic timeline expectations",
                    "Willingness to invest in SAM registration + capability statement",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-800 flex items-center justify-center mt-0.5">
                        <span className="text-stone-500 text-xs font-mono">{idx + 1}</span>
                      </div>
                      <span className="text-stone-400 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div
                style={fadeRight(v9, 400)}
                className="bg-stone-900/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-10"
                // subtle emerald glow
              >
                <h3 className="text-white font-medium text-xl mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  What you get from us
                </h3>
                <div className="space-y-5">
                  {[
                    "Dedicated capture team",
                    "Daily opportunity monitoring",
                    "All agency communications handled",
                    "Proposal support & strategy",
                    "Monthly pipeline reviews",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <span className="text-stone-300 text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={fadeUp(v9, 650)} className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900/80 border border-emerald-500/20 rounded-full" style={{ animation: "glowPulse 3s ease-in-out infinite" }}>
                <Zap className="w-4 h-4 text-emerald-500" />
                <span className="text-stone-300 text-sm">
                  We&apos;re currently onboarding a maximum of <span className="text-emerald-500 font-semibold">5</span> additional clients.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            SLIDE 10 — NEXT STEPS (light)
        ================================================================= */}
        <section
          ref={s10}
          className="slide min-h-screen bg-white flex items-center justify-center relative overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <DotGridBg />

          <div className="relative z-10 w-full px-16 lg:px-24 max-w-[1200px] mx-auto text-center">
            <p style={fadeUp(v10, 0)} className="text-emerald-500 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Next Steps
            </p>
            <h2 style={fadeUp(v10, 100)} className="text-4xl md:text-6xl font-extralight text-stone-900 mb-6 leading-tight">
              If this{" "}
              <span className="text-emerald-600">feels right</span>
            </h2>
            <div style={fadeUp(v10, 150)} className="w-24 h-px bg-emerald-500/50 mb-16 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {[
                {
                  step: "1",
                  icon: Search,
                  title: "Free Opportunity Analysis",
                  desc: "We analyze your NAICS codes and show you matching federal opportunities.",
                  delay: 250,
                },
                {
                  step: "2",
                  icon: CalendarCheck,
                  title: "60-Minute Strategy Call",
                  desc: "Deep dive into your capabilities, target agencies, and capture plan.",
                  delay: 450,
                },
                {
                  step: "3",
                  icon: Zap,
                  title: "Onboarding",
                  desc: "SAM registration, capability statement, pipeline creation — within 30 days.",
                  delay: 650,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={fadeUp(v10, item.delay)}
                  className="bg-stone-50/80 backdrop-blur-sm border border-stone-100 rounded-2xl p-10 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 group relative"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <span className="text-white text-sm font-bold">{item.step}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-stone-900 font-medium text-xl mb-3">{item.title}</h3>
                    <p className="text-stone-500 text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={fadeUp(v10, 800)} className="mb-14">
              <p className="text-stone-600 text-lg font-light">
                If we both agree there&apos;s a fit, we can start{" "}
                <span className="text-emerald-600 font-medium">immediately</span>.
              </p>
            </div>

            {/* Connecting arrows between steps (desktop only) */}
            <div style={fadeUp(v10, 900)} className="hidden md:flex items-center justify-center gap-2 mb-14 -mt-8">
              <div className="w-24 h-px bg-stone-200" />
              <ArrowRight className="w-4 h-4 text-stone-300" />
              <div className="w-24 h-px bg-stone-200" />
              <ArrowRight className="w-4 h-4 text-stone-300" />
              <div className="w-24 h-px bg-stone-200" />
            </div>

            <div style={fadeUp(v10, 1000)} className="pt-8 border-t border-stone-100">
              <p className="text-stone-400 text-sm">
                <span className="text-stone-600 font-medium">Americurial LLC</span>
                <span className="mx-3 text-stone-200">|</span>
                americurial.com
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
