"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Zap, Target, Shield, FileText, BarChart3, Users, ArrowRight,
  CheckCircle2, Clock, Search, Briefcase, Star, Globe, Phone,
  ChevronRight, Layers, Mic, TrendingUp, Check, X, Play,
  Award, Building2, Sparkles, MousePointerClick, BookOpen,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";

/* ─── Animated Counter Hook ─── */
function useCounter(end: number, duration = 2000, prefix = "", suffix = "") {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(eased * end);
            setDisplay(`${prefix}${value.toLocaleString()}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, prefix, suffix]);

  return { ref, display };
}

/* ─── Fade-in-on-scroll wrapper ─── */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Homepage() {
  const stat1 = useCounter(40000, 2200, "", "+");
  const stat2 = useCounter(892, 1800);
  const stat3 = useCounter(2, 1500, "$", ".7B+");
  const stat4 = useCounter(6, 1200, "", "");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes scoreBarFill { from { width: 0%; } to { width: var(--fill); } }
        @keyframes slideInRight { from { opacity:0; transform: translateX(60px); } to { opacity:1; transform: translateX(0); } }
        @keyframes slideInLeft { from { opacity:0; transform: translateX(-60px); } to { opacity:1; transform: translateX(0); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 0 0 rgba(5,150,105,0.3); } 50% { box-shadow: 0 0 0 12px rgba(5,150,105,0); } }
        @keyframes typewriter { from { width: 0; } to { width: 100%; } }
        @keyframes blink { 0%,100% { border-color: transparent; } 50% { border-color: #059669; } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes cardSlide1 { from { opacity:0; transform: translateY(30px); } to { opacity:1; transform: translateY(0); } }
        @keyframes cardSlide2 { from { opacity:0; transform: translateY(30px); } to { opacity:1; transform: translateY(0); } }
        @keyframes cardSlide3 { from { opacity:0; transform: translateY(30px); } to { opacity:1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes checkResult { from { opacity:0; transform: scale(0.8); } to { opacity:1; transform: scale(1); } }
        @keyframes connectorGrow { from { width: 0; } to { width: 100%; } }
        @keyframes heroFloat { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-8px) rotate(0deg); } }
        .score-fill { animation: scoreBarFill 1.5s ease-out forwards; }
        .card-slide-1 { animation: cardSlide1 0.5s ease-out 0.2s both; }
        .card-slide-2 { animation: cardSlide2 0.5s ease-out 0.5s both; }
        .card-slide-3 { animation: cardSlide3 0.5s ease-out 0.8s both; }
        .hero-float { animation: heroFloat 6s ease-in-out infinite; }
        .typing-line { overflow: hidden; white-space: nowrap; border-right: 2px solid #059669; animation: typewriter 2s steps(40) forwards, blink 0.8s step-end infinite; }
        .typing-line-2 { overflow: hidden; white-space: nowrap; border-right: 2px solid #059669; animation: typewriter 2s steps(40) 2.2s forwards, blink 0.8s step-end infinite; width: 0; }
        .typing-line-3 { overflow: hidden; white-space: nowrap; border-right: 2px solid #059669; animation: typewriter 2s steps(40) 4.4s forwards, blink 0.8s step-end infinite; width: 0; }
        .check-result { animation: checkResult 0.4s ease-out forwards; }
        .check-result-2 { animation: checkResult 0.4s ease-out 0.8s forwards; opacity: 0; }
        .check-result-3 { animation: checkResult 0.4s ease-out 1.4s forwards; opacity: 0; }
        .check-result-4 { animation: checkResult 0.4s ease-out 2.0s forwards; opacity: 0; }
        .shimmer-bar { background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%); background-size: 200% 100%; animation: shimmer 2s infinite; }
        .connector-line { animation: connectorGrow 0.8s ease-out forwards; }
      `}</style>

      {/* ================================================================ */}
      {/* NAVIGATION                                                       */}
      {/* ================================================================ */}
      <nav className="fixed top-0 w-full bg-stone-950/80 backdrop-blur-xl border-b border-stone-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="CapturePilot" width={32} height={32} className="rounded-lg invert" />
            <span className="font-bold text-lg tracking-tight text-white">CapturePilot</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/features" className="text-stone-400 hover:text-white transition-colors">Features</Link>
            <Link href="/process" className="text-stone-400 hover:text-white transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-stone-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/vs" className="text-stone-400 hover:text-white transition-colors">Compare</Link>
            <Link href={LOGIN_URL} className="text-stone-400 hover:text-white transition-colors">Login</Link>
            <Link
              href={SIGNUP_URL}
              className="bg-emerald-500 text-white px-5 py-2.5 rounded-full font-bold hover:bg-emerald-400 transition-all hover:scale-105 inline-flex items-center gap-1.5"
            >
              Start Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ================================================================ */}
      {/* 1. HERO                                                          */}
      {/* ================================================================ */}
      <section className="pt-28 pb-24 px-6 relative overflow-hidden bg-stone-950 text-white">
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Subtle bottom gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
                <Shield className="w-4 h-4" /> Built for Veteran-Owned & Small Businesses
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-in-up animate-delay-100">
                Win Government<br />
                Contracts. <span className="text-emerald-400">Faster.</span>
              </h1>

              <p className="text-lg sm:text-xl text-stone-400 max-w-xl mb-10 animate-fade-in-up animate-delay-200 leading-relaxed">
                CapturePilot scans 40,000+ federal opportunities daily and matches them to your business
                with our proprietary matching engine. Stop searching SAM.gov manually. Start winning contracts.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animate-delay-300">
                <Link
                  href={SIGNUP_URL}
                  className="bg-emerald-500 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-emerald-400 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl shadow-emerald-500/20"
                >
                  Start Free — 30 Days <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={CHECK_URL}
                  className="bg-white/10 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/10"
                >
                  <Search className="w-4 h-4" /> Quick Company Check
                </Link>
              </div>

              <p className="text-sm text-stone-500 mt-5">No credit card required. Cancel anytime.</p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-stone-800/60">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <BarChart3 className="w-4 h-4 text-emerald-500" />
                  <span><strong className="text-white">40,000+</strong> Opps Scanned Daily</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span><strong className="text-white">Built</strong> for Veterans</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span><strong className="text-white">30-Day</strong> Free Trial</span>
                </div>
              </div>
            </div>

            {/* Right: Animated Dashboard Preview */}
            <div className="mt-8 lg:mt-0">
              <div className="hero-float">
                <div className="bg-stone-900 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-emerald-500/10 border border-stone-800">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-stone-500 text-xs ml-2 font-mono">app.capturepilot.com/matches</span>
                  </div>

                  {/* Fake opportunity cards */}
                  <div className="space-y-3">
                    {/* Card 1 - HOT */}
                    <div className="card-slide-1 bg-stone-800/80 rounded-xl p-3 sm:p-4 border border-stone-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-xs sm:text-sm font-semibold truncate mr-2">Janitorial Services — Ft. Bragg</span>
                        <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">Hot</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-stone-400 text-xs">Dept of Defense</span>
                        <span className="text-stone-600 text-xs">|</span>
                        <span className="text-emerald-400 text-xs font-medium">$1.2M</span>
                      </div>
                      <div className="w-full bg-stone-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full score-fill" style={{ "--fill": "92%" } as React.CSSProperties} />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-stone-500 text-[10px]">Match Score</span>
                        <span className="text-emerald-400 text-[10px] font-bold">92%</span>
                      </div>
                    </div>

                    {/* Card 2 - HOT */}
                    <div className="card-slide-2 bg-stone-800/80 rounded-xl p-3 sm:p-4 border border-stone-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-xs sm:text-sm font-semibold truncate mr-2">IT Security Assessment — VA</span>
                        <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">Hot</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-stone-400 text-xs">Veterans Affairs</span>
                        <span className="text-stone-600 text-xs">|</span>
                        <span className="text-emerald-400 text-xs font-medium">$850K</span>
                      </div>
                      <div className="w-full bg-stone-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-yellow-400 h-2 rounded-full score-fill" style={{ "--fill": "78%" } as React.CSSProperties} />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-stone-500 text-[10px]">Match Score</span>
                        <span className="text-yellow-400 text-[10px] font-bold">78%</span>
                      </div>
                    </div>

                    {/* Card 3 - WARM */}
                    <div className="card-slide-3 bg-stone-800/80 rounded-xl p-3 sm:p-4 border border-stone-700/50 hidden sm:block">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-xs sm:text-sm font-semibold truncate mr-2">Grounds Maintenance — GSA</span>
                        <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">Warm</span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-stone-400 text-xs">General Services Admin</span>
                        <span className="text-stone-600 text-xs">|</span>
                        <span className="text-emerald-400 text-xs font-medium">$340K</span>
                      </div>
                      <div className="w-full bg-stone-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full score-fill" style={{ "--fill": "61%" } as React.CSSProperties} />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-stone-500 text-[10px]">Match Score</span>
                        <span className="text-blue-400 text-[10px] font-bold">61%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. TRUST BAR                                                     */}
      {/* ================================================================ */}
      <section className="py-8 px-6 bg-stone-50 border-y border-stone-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-stone-400 mb-5 uppercase tracking-widest font-medium">
            Trusted by businesses registered on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 text-stone-400">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="font-bold text-stone-600 text-lg tracking-tight">SAM.gov</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="font-bold text-stone-600 text-lg tracking-tight">SBA</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-bold text-stone-600 text-lg tracking-tight">SDVOSB</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span className="font-bold text-stone-600 text-lg tracking-tight">WOSB</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span className="font-bold text-stone-600 text-lg tracking-tight">8(a)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="font-bold text-stone-600 text-lg tracking-tight">HUBZone</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. PROBLEM -> SOLUTION                                           */}
      {/* ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
              Government contracting is hard enough. Your tools should not make it harder.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: "Spending hours on SAM.gov?",
                solution: "We scan 40,000+ opportunities daily and show you only what matches your NAICS, certifications, and location.",
                icon: Clock,
                stat: "4+ hrs/day saved",
              },
              {
                problem: "Missing deadlines?",
                solution: "Get real-time alerts before opportunities expire. Every match is scored and ranked so you know what to bid on first.",
                icon: Target,
                stat: "Zero missed bids",
              },
              {
                problem: "Don't know where to start?",
                solution: "AI analyzes each opportunity against your profile, drafts proposal outlines, and builds your capability statement.",
                icon: Zap,
                stat: "15 min first drafts",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl p-8 border border-stone-200 hover-lift h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[80px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
                      <item.icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <p className="text-lg font-bold text-red-500 mb-2 line-through decoration-2 opacity-60">{item.problem}</p>
                    <p className="text-base text-stone-600 leading-relaxed mb-4">{item.solution}</p>
                    <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" /> {item.stat}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. FEATURE SHOWCASE 1: SMART MATCHING                            */}
      {/* ================================================================ */}
      <section className="py-24 px-6 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <Reveal>
              <div>
                <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4 block">Smart Matching</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Your Opportunities,<br />
                  <span className="text-emerald-400">Scored & Ranked</span>
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                  Our proprietary engine scores every federal opportunity against your profile using multiple weighted factors.
                  HOT matches surface first so you never waste time on opportunities you can not win.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Industry code & service matching",
                    "Set-aside & certification alignment",
                    "Geographic proximity analysis",
                    "Contract value fit scoring",
                    "Past performance relevance",
                    "Deadline & urgency prioritization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/features/matching"
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group"
                >
                  Learn about Smart Matching <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Right: Animated Mockup */}
            <Reveal delay={200}>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span className="text-stone-400 text-xs font-medium uppercase tracking-wider">Match Results</span>
                  <span className="ml-auto text-emerald-400 text-xs font-bold">3 HOT Matches</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Facility Maintenance — Ft. Hood", agency: "US Army", value: "$2.1M", score: 94, badge: "HOT", badgeColor: "red" },
                    { title: "Building Security Services", agency: "DHS", value: "$890K", score: 87, badge: "HOT", badgeColor: "orange" },
                    { title: "Landscaping & Grounds", agency: "GSA", value: "$420K", score: 73, badge: "HOT", badgeColor: "yellow" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className={`bg-stone-800/60 rounded-xl p-4 border border-stone-700/40 card-slide-${i + 1}`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-white text-sm font-semibold">{card.title}</span>
                        <span className={`text-${card.badgeColor}-400 bg-${card.badgeColor}-500/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}>
                          {card.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-500 text-xs mb-3">
                        <span>{card.agency}</span>
                        <span>|</span>
                        <span className="text-emerald-400 font-medium">{card.value}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-stone-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-emerald-300 h-2 rounded-full score-fill"
                            style={{ "--fill": `${card.score}%` } as React.CSSProperties}
                          />
                        </div>
                        <span className="text-emerald-400 text-xs font-bold w-8 text-right">{card.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. FEATURE SHOWCASE 2: AI PROPOSAL WRITER                        */}
      {/* ================================================================ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Animated Mockup */}
            <Reveal className="order-2 lg:order-1">
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span className="text-stone-500 text-xs font-medium uppercase tracking-wider">AI Proposal Writer</span>
                  <span className="ml-auto flex items-center gap-1 text-emerald-600 text-xs font-bold">
                    <Sparkles className="w-3 h-3" /> Generating...
                  </span>
                </div>
                <div className="bg-white rounded-xl p-5 border border-stone-200 font-mono text-sm space-y-4">
                  <div>
                    <p className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-1">Cover Letter</p>
                    <p className="text-stone-600 typing-line text-xs leading-relaxed">
                      Dear Contracting Officer, we are pleased to submit our proposal for Solicitation W911...
                    </p>
                  </div>
                  <div className="border-t border-stone-100 pt-3">
                    <p className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-1">Technical Approach</p>
                    <p className="text-stone-600 typing-line-2 text-xs leading-relaxed">
                      Our team will deploy a phased implementation strategy leveraging 12 years of experience...
                    </p>
                  </div>
                  <div className="border-t border-stone-100 pt-3">
                    <p className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-1">Past Performance</p>
                    <p className="text-stone-600 typing-line-3 text-xs leading-relaxed">
                      Contract FA8101-22-C-0034: Provided comprehensive facility maintenance services to...
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Copy */}
            <Reveal delay={200} className="order-1 lg:order-2">
              <div>
                <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-4 block">AI Proposal Writer</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Draft Proposals in<br />
                  <span className="gradient-text">15 Minutes</span>
                </h2>
                <p className="text-stone-500 text-lg leading-relaxed mb-8">
                  Stop spending weeks on proposals. Our AI reads the full solicitation, understands the requirements,
                  and generates a tailored first draft with cover letter outline, technical approach framework, and past performance structure. You refine and make it yours.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Reads and analyzes the full solicitation",
                    "Drafts a compliant technical approach framework",
                    "Matches your past performance to requirements",
                    "Exports to Word, PDF, or copy-paste",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/features/proposals"
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors group"
                >
                  Learn about AI Proposals <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. FEATURE SHOWCASE 3: QUICK CHECKER                             */}
      {/* ================================================================ */}
      <section className="py-24 px-6 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <Reveal>
              <div>
                <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4 block">Quick Company Check</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Check Your Eligibility in<br />
                  <span className="text-emerald-400">30 Seconds</span>
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                  Enter any company website and get an instant federal contracting readiness report.
                  We crawl your site, identify your NAICS codes, check SAM.gov registration, and find matching opportunities.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Automatic NAICS code identification",
                    "SAM.gov registration status check",
                    "Matching opportunities preview",
                    "Competitor landscape analysis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/features/quick-checker"
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group mr-6"
                >
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-500 transition-colors"
                >
                  Try It Free <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            {/* Right: Animated Mockup */}
            <Reveal delay={200}>
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-4 h-4 text-emerald-400" />
                  <span className="text-stone-400 text-xs font-medium uppercase tracking-wider">Quick Check</span>
                </div>
                {/* URL input */}
                <div className="bg-stone-800 rounded-xl p-3 flex items-center gap-3 mb-5 border border-stone-700/50">
                  <Globe className="w-4 h-4 text-stone-500" />
                  <span className="text-stone-300 text-sm font-mono">www.acme-services.com</span>
                  <span className="ml-auto bg-emerald-600 text-white text-xs px-3 py-1 rounded-lg font-bold">Check</span>
                </div>
                {/* Results */}
                <div className="space-y-3">
                  <div className="check-result bg-stone-800/60 rounded-xl p-3 border border-stone-700/40 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">SAM.gov Registered</p>
                      <p className="text-stone-500 text-xs">Active entity - UEI: ABC123DEF456</p>
                    </div>
                  </div>
                  <div className="check-result-2 bg-stone-800/60 rounded-xl p-3 border border-stone-700/40 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">4 NAICS Codes Found</p>
                      <p className="text-stone-500 text-xs">561720, 561210, 238220, 236220</p>
                    </div>
                  </div>
                  <div className="check-result-3 bg-stone-800/60 rounded-xl p-3 border border-stone-700/40 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <Target className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">127 Matching Opportunities</p>
                      <p className="text-stone-500 text-xs">23 HOT, 54 WARM, 50 COLD</p>
                    </div>
                  </div>
                  <div className="check-result-4 bg-stone-800/60 rounded-xl p-3 border border-stone-700/40 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">12 Competitors Identified</p>
                      <p className="text-stone-500 text-xs">In your top NAICS within 50 miles</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. HOW IT WORKS                                                  */}
      {/* ================================================================ */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4">
              3 Steps to Your First Contract
            </h2>
            <p className="text-lg text-stone-500 text-center mb-20 max-w-2xl mx-auto">
              No government contracting experience needed. We guide you every step of the way.
            </p>
          </Reveal>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Connector lines (desktop only) */}
            <div className="hidden md:block absolute top-20 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-0.5 bg-stone-200 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-300 connector-line" />
            </div>

            {[
              {
                step: "1",
                title: "Enter Your Website",
                desc: "Our AI crawls your website, identifies your services, finds your NAICS codes, and checks your SAM.gov registration automatically.",
                icon: Globe,
                color: "bg-emerald-50 text-emerald-600 border-emerald-200",
              },
              {
                step: "2",
                title: "See Your Matches",
                desc: "We score every federal opportunity against your profile using our proprietary algorithm. HOT, WARM, and COLD — so you know where to focus.",
                icon: Target,
                color: "bg-emerald-50 text-emerald-600 border-emerald-200",
              },
              {
                step: "3",
                title: "Win Contracts",
                desc: "AI drafts your proposal outline. We build your capability statement. Track your pipeline from discovery to award in one dashboard.",
                icon: Briefcase,
                color: "bg-emerald-50 text-emerald-600 border-emerald-200",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-emerald-200 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100/50">
                    <item.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 font-black text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={600}>
            <div className="text-center mt-16">
              <Link
                href={CHECK_URL}
                className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl shadow-stone-300/30"
              >
                Try It Now — Free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 8. ALL FEATURES GRID                                             */}
      {/* ================================================================ */}
      <section id="features" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
              From finding opportunities to submitting proposals — the complete federal contracting platform.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Smart Matching", desc: "6-factor scoring engine matches opportunities to your NAICS, certifications, location, and past performance.", tag: "Core", href: "/features/matching" },
              { icon: FileText, title: "AI Proposal Writer", desc: "Generate proposal drafts and outlines in 15 minutes. Cover letter, technical approach, past performance — a strong starting point you refine.", tag: "AI", href: "/features/proposals" },
              { icon: BarChart3, title: "Market Intelligence", desc: "See who wins contracts in your industry. Total spend, top agencies, YoY trends — powered by USASpending.", tag: "Intel", href: "/features/intelligence" },
              { icon: Mic, title: "Capability Statement", desc: "Record yourself talking about your business. AI writes your capability statement. Colors extracted from your website.", tag: "AI", href: "/features/capability-statement" },
              { icon: Layers, title: "Deal Pipeline", desc: "Track every opportunity from discovery to award. Kanban board with custom stages, notes, and team collaboration.", tag: "CRM", href: "/features/pipeline" },
              { icon: Users, title: "Partner Search", desc: "Search 1M+ SAM-registered companies for teaming partnerships. Filter by NAICS, certs, location, and revenue.", tag: "Network", href: "#" },
              { icon: Shield, title: "Eligibility Check", desc: "Instantly see if you qualify for each opportunity's set-aside. Know your certs match before you bid.", tag: "Smart", href: "#" },
              { icon: TrendingUp, title: "IDIQ Tracking", desc: "Find active contract vehicles in your industry. Getting on an IDIQ means steady work for years.", tag: "Intel", href: "#" },
              { icon: Search, title: "Quick Company Check", desc: "Enter any website. In 30 seconds: NAICS codes, matching opportunities, SAM status, competitor analysis.", tag: "Free", href: "/features/quick-checker" },
            ].map((feature, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <Link href={feature.href} className="bg-white rounded-2xl p-6 border border-stone-200 hover-lift block group h-full relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">{feature.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-3">{feature.desc}</p>
                  {feature.href !== "#" && (
                    <span className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 9. COMPETITOR COMPARISON                                         */}
      {/* ================================================================ */}
      <section id="compare" className="py-24 px-6 bg-stone-950 text-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4">
              Why Teams Switch to CapturePilot
            </h2>
            <p className="text-lg text-stone-400 text-center mb-16 max-w-2xl mx-auto">
              The only platform built from the ground up for small businesses. Not enterprise tools retrofitted for SMBs.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800">
                      <th className="text-left p-5 text-stone-400 font-medium w-1/3">Feature</th>
                      <th className="p-5 text-center">
                        <span className="text-emerald-400 font-bold">CapturePilot</span>
                      </th>
                      <th className="p-5 text-center">
                        <Link href="/vs/govwin" className="text-stone-400 hover:text-white transition-colors">GovWin</Link>
                      </th>
                      <th className="p-5 text-center">
                        <Link href="/vs/govtribe" className="text-stone-400 hover:text-white transition-colors">GovTribe</Link>
                      </th>
                      <th className="p-5 text-center">
                        <Link href="/vs/sam-gov" className="text-stone-400 hover:text-white transition-colors">SAM.gov</Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "AI Proposal Writer", cp: true, gw: false, gt: false, sam: false },
                      { feature: "Capability Statement Builder", cp: true, gw: false, gt: false, sam: false },
                      { feature: "Smart Match Scoring", cp: true, gw: true, gt: true, sam: false },
                      { feature: "Quick Company Check", cp: true, gw: false, gt: false, sam: false },
                      { feature: "Voice-to-Document", cp: true, gw: false, gt: false, sam: false },
                      { feature: "Built for Small Business", cp: true, gw: false, gt: true, sam: true },
                      { feature: "Free Tier Available", cp: true, gw: false, gt: true, sam: true },
                      { feature: "Starting Price", cp: "$199/mo", gw: "$12K+/yr", gt: "$899/yr", sam: "Free" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-800/50 hover:bg-stone-800/30 transition-colors">
                        <td className="p-5 text-stone-300 font-medium">{row.feature}</td>
                        {[row.cp, row.gw, row.gt, row.sam].map((val, j) => (
                          <td key={j} className="p-5 text-center">
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check className={`w-5 h-5 mx-auto ${j === 0 ? "text-emerald-400" : "text-stone-500"}`} />
                              ) : (
                                <X className="w-5 h-5 mx-auto text-stone-700" />
                              )
                            ) : (
                              <span className={j === 0 ? "text-emerald-400 font-bold" : "text-stone-500"}>{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <Link href="/vs/govwin" className="text-stone-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1">
                CapturePilot vs GovWin <ChevronRight className="w-3 h-3" />
              </Link>
              <Link href="/vs/govtribe" className="text-stone-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1">
                CapturePilot vs GovTribe <ChevronRight className="w-3 h-3" />
              </Link>
              <Link href="/vs/sam-gov" className="text-stone-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1">
                CapturePilot vs SAM.gov <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 10. STATS / SOCIAL PROOF                                         */}
      {/* ================================================================ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-16">
              The Numbers Speak
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ref: stat1.ref, display: stat1.display, label: "Federal Opportunities Scanned Daily", icon: Search },
              { ref: stat2.ref, display: stat2.display, label: "Industry NAICS Codes Covered", icon: Layers },
              { ref: stat3.ref, display: stat3.display, label: "Contract Value Tracked", icon: TrendingUp },
              { ref: stat4.ref, display: stat4.display, label: "Match Scoring Factors", icon: Target },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center group" ref={stat.ref}>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-4xl lg:text-5xl font-black gradient-text mb-2">{stat.display}</p>
                  <p className="text-sm text-stone-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 11. WHO IT'S FOR                                                 */}
      {/* ================================================================ */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4">
              Built for Businesses Like Yours
            </h2>
            <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
              Whether you are a veteran starting out or an established agency, CapturePilot adapts to your needs.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Veteran-Owned",
                desc: "2,276 SDVOSB & VOSB set-aside opportunities waiting. We highlight every veteran-specific contract.",
                href: "/for/veterans",
                gradient: "from-emerald-500 to-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
                text: "text-emerald-600",
              },
              {
                icon: Star,
                title: "Women-Owned",
                desc: "WOSB and EDWOSB set-asides matched automatically. Never miss a women-owned opportunity.",
                href: "/for/women-owned",
                gradient: "from-pink-500 to-pink-600",
                bg: "bg-pink-50",
                border: "border-pink-200",
                text: "text-pink-600",
              },
              {
                icon: Briefcase,
                title: "Small Business",
                desc: "14,332 small business set-aside contracts. SBA 8(a), HUBZone, SDB — all in one place.",
                href: "/for/small-business",
                gradient: "from-blue-500 to-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-200",
                text: "text-blue-600",
              },
              {
                icon: Building2,
                title: "Agencies & Consultants",
                desc: "Manage multiple clients from one dashboard. White-label reports, bulk matching, team access.",
                href: "/for/agencies",
                gradient: "from-amber-500 to-amber-600",
                bg: "bg-amber-50",
                border: "border-amber-200",
                text: "text-amber-600",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link href={item.href} className={`${item.bg} rounded-2xl p-6 border ${item.border} hover-lift block group h-full relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                  <item.icon className={`w-10 h-10 ${item.text} mb-4`} />
                  <h3 className="text-lg font-bold mb-2 group-hover:text-black transition-colors">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-3">{item.desc}</p>
                  <span className={`text-xs font-bold ${item.text} inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity`}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 12. PRICING                                                      */}
      {/* ================================================================ */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-stone-500 text-center mb-16">Start free. Upgrade when you are ready to win.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free */}
            <Reveal>
              <div className="bg-white rounded-2xl p-8 border border-stone-200 hover-lift h-full flex flex-col">
                <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Free</p>
                <p className="text-5xl font-black mb-1">$0</p>
                <p className="text-sm text-stone-400 mb-8">Forever free</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Quick Company Check",
                    "5 opportunity matches",
                    "NAICS code identification",
                    "SAM.gov status check",
                    "Basic eligibility report",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={CHECK_URL} className="w-full bg-stone-100 text-stone-700 py-3.5 rounded-xl font-bold text-sm hover:bg-stone-200 transition-colors block text-center">
                  Try Free
                </Link>
              </div>
            </Reveal>

            {/* Pro */}
            <Reveal delay={150}>
              <div className="bg-black text-white rounded-2xl p-8 border-2 border-emerald-500 relative hover-lift h-full flex flex-col shadow-xl shadow-emerald-500/10">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-5 py-1 rounded-full">Most Popular</div>
                <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">Pro</p>
                <p className="text-5xl font-black mb-1">$199</p>
                <p className="text-sm text-stone-400 mb-8">per month, billed monthly</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Unlimited opportunity matches",
                    "AI Proposal Writer",
                    "Capability Statement Builder",
                    "Market Intelligence dashboard",
                    "Deal Pipeline & CRM",
                    "Partner Search (1M+ companies)",
                    "Email alerts & notifications",
                    "30-day free trial included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={SIGNUP_URL} className="w-full bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors block text-center">
                  Start Free Trial <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </Link>
              </div>
            </Reveal>

            {/* Consulting */}
            <Reveal delay={300}>
              <div className="bg-white rounded-2xl p-8 border border-stone-200 hover-lift h-full flex flex-col">
                <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Consulting</p>
                <p className="text-5xl font-black mb-1">Custom</p>
                <p className="text-sm text-stone-400 mb-8">White-glove capture service</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Everything in Pro",
                    "Dedicated capture manager",
                    "Full proposal writing service",
                    "SAM.gov registration help",
                    "Competitor intelligence reports",
                    "Monthly strategy calls",
                    "Priority support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={CALENDLY_URL} className="w-full bg-stone-100 text-stone-700 py-3.5 rounded-xl font-bold text-sm hover:bg-stone-200 transition-colors block text-center" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 12.5 BACKED BY AMERICURIAL                                       */}
      {/* ================================================================ */}
      <section className="py-20 px-6 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 text-center">
              <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Built & Backed By</p>
              <h2 className="text-2xl sm:text-3xl font-black mb-4">
                You&apos;re Not Just Getting Software.<br />
                You&apos;re Getting a Team.
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                CapturePilot is built by{" "}
                <Link href="https://www.americurial.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                  Americurial LLC
                </Link>
                , a veteran-owned digital agency. We&apos;ve navigated the federal contracting maze ourselves —
                and built CapturePilot so you don&apos;t have to do it alone.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Shield, label: "Veteran-Owned" },
                  { icon: Users, label: "Real Support Team" },
                  { icon: Briefcase, label: "GovCon Expertise" },
                  { icon: Phone, label: "Always Available" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-semibold text-stone-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/process" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                  See Our Process <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-stone-300 hidden sm:inline">|</span>
                <Link href="https://www.americurial.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-stone-500 font-bold hover:text-stone-700 transition-colors">
                  Visit Americurial.com <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 13. FINAL CTA                                                    */}
      {/* ================================================================ */}
      <section className="py-28 px-6 bg-stone-950 text-white relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Ready to <span className="text-emerald-400">Win?</span>
            </h2>
            <p className="text-lg text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Join hundreds of small businesses using CapturePilot to find and win federal contracts.
              Start with a free check. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={SIGNUP_URL}
                className="bg-emerald-500 text-white px-10 py-4 rounded-full text-base font-bold hover:bg-emerald-400 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                Start Free — 30 Days <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CALENDLY_URL}
                className="text-stone-400 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 hover:text-white transition-colors inline-flex items-center gap-2"
                target="_blank" rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" /> Talk to Our Team
              </Link>
            </div>
            <p className="text-sm text-stone-600 mt-6">No credit card required. Cancel anytime. 30-day free trial on all Pro plans.</p>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 14. FOOTER                                                       */}
      {/* ================================================================ */}
      <footer className="py-16 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="CapturePilot" width={28} height={28} className="rounded-lg invert" />
                <span className="font-bold text-white text-sm">CapturePilot</span>
              </div>
              <p className="text-xs leading-relaxed">
                Government contract intelligence for small businesses. Built for veterans.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="font-bold text-white text-sm mb-3">Product</p>
              <div className="space-y-2 text-sm">
                <Link href="/features/matching" className="block hover:text-white transition-colors">Smart Matching</Link>
                <Link href="/features/proposals" className="block hover:text-white transition-colors">AI Proposals</Link>
                <Link href="/features/intelligence" className="block hover:text-white transition-colors">Market Intel</Link>
                <Link href="/features/pipeline" className="block hover:text-white transition-colors">Pipeline</Link>
                <Link href="/features/capability-statement" className="block hover:text-white transition-colors">Capability Statement</Link>
                <Link href="/features/quick-checker" className="block hover:text-white transition-colors">Quick Check</Link>
              </div>
            </div>

            {/* Compare */}
            <div>
              <p className="font-bold text-white text-sm mb-3">Compare</p>
              <div className="space-y-2 text-sm">
                <Link href="/vs/govwin" className="block hover:text-white transition-colors">vs GovWin</Link>
                <Link href="/vs/govtribe" className="block hover:text-white transition-colors">vs GovTribe</Link>
                <Link href="/vs/sam-gov" className="block hover:text-white transition-colors">vs SAM.gov</Link>
              </div>
            </div>

            {/* For */}
            <div>
              <p className="font-bold text-white text-sm mb-3">For</p>
              <div className="space-y-2 text-sm">
                <Link href="/for/veterans" className="block hover:text-white transition-colors">Veteran-Owned</Link>
                <Link href="/for/women-owned" className="block hover:text-white transition-colors">Women-Owned</Link>
                <Link href="/for/small-business" className="block hover:text-white transition-colors">Small Business</Link>
                <Link href="/for/agencies" className="block hover:text-white transition-colors">Agencies</Link>
              </div>
            </div>

            {/* Resources & Company */}
            <div>
              <p className="font-bold text-white text-sm mb-3">Resources</p>
              <div className="space-y-2 text-sm">
                <Link href="/blog/government-contracting-101" className="block hover:text-white transition-colors">GovCon 101</Link>
                <Link href="/resources/quick-checker-guide" className="block hover:text-white transition-colors">Quick Check Guide</Link>
                <Link href={CALENDLY_URL} className="block hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Contact</Link>
                <Link href={`${APP_URL}/privacy`} className="block hover:text-white transition-colors">Privacy</Link>
                <Link href={`${APP_URL}/terms`} className="block hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs space-y-1">
              <p>&copy; {new Date().getFullYear()} CapturePilot. All rights reserved.</p>
              <p className="text-stone-500">
                A product by{" "}
                <Link href="https://www.americurial.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors underline underline-offset-2">
                  Americurial LLC
                </Link>
                {" "}— Veteran-Owned Digital Agency
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <Link href={SIGNUP_URL} className="hover:text-white transition-colors">Start Free Trial</Link>
              <Link href={CHECK_URL} className="hover:text-white transition-colors">Quick Check</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
