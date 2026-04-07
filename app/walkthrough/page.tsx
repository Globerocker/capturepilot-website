"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  ScanSearch,
  FileText,
  BarChart3,
  Kanban,
  Trophy,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SIGNUP_URL = "https://app.capturepilot.com/signup";

const STEP_COUNT = 6;
const AUTO_ADVANCE_MS = 5000;

const STEP_LABELS = [
  "Enter Your Website",
  "We Find Your NAICS Codes",
  "40,000+ Opportunities Scored",
  "AI Drafts Your Proposal",
  "Track Your Pipeline",
  "Win Government Contracts",
];

const STEP_ICONS = [Globe, ScanSearch, BarChart3, FileText, Kanban, Trophy];

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useAnimatedCounter(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return value;
}

/* ------------------------------------------------------------------ */
/*  Typewriter hook                                                     */
/* ------------------------------------------------------------------ */
function useTypewriter(text: string, speed: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, active]);
  return displayed;
}

/* ------------------------------------------------------------------ */
/*  Step 1 — Enter Your Website                                        */
/* ------------------------------------------------------------------ */
function StepWebsite({ active }: { active: boolean }) {
  const typed = useTypewriter("www.your-company.com", 80, active);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (!active) {
      setScanProgress(0);
      return;
    }
    const delay = setTimeout(() => {
      let p = 0;
      const iv = setInterval(() => {
        p += 2;
        setScanProgress(Math.min(p, 100));
        if (p >= 100) clearInterval(iv);
      }, 40);
      return () => clearInterval(iv);
    }, 1800);
    return () => clearTimeout(delay);
  }, [active]);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* URL Bar */}
      <div className="w-full max-w-lg">
        <div className="bg-stone-900 border border-stone-700 rounded-xl overflow-hidden shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-800">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 flex-1 bg-stone-800 rounded-lg px-4 py-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-stone-500" />
              <span className="text-emerald-400 font-mono text-sm tracking-wide">
                {typed}
                <span className="animate-pulse text-emerald-300">|</span>
              </span>
            </div>
          </div>
          {/* Scan area */}
          <div className="p-6 flex flex-col items-center gap-4">
            <ScanSearch
              className={`w-12 h-12 text-emerald-400 transition-transform duration-700 ${
                scanProgress > 0 ? "animate-spin-slow" : ""
              }`}
              style={{
                animation:
                  scanProgress > 0 && scanProgress < 100
                    ? "spin 3s linear infinite"
                    : "none",
              }}
            />
            <div className="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <p className="text-stone-400 text-sm">
              {scanProgress < 30
                ? "Connecting..."
                : scanProgress < 70
                ? "Analyzing services & capabilities..."
                : scanProgress < 100
                ? "Identifying industry codes..."
                : "Scan complete!"}
            </p>
          </div>
        </div>
      </div>
      <p className="text-stone-300 text-lg text-center max-w-md leading-relaxed">
        Our AI crawls your website and identifies your business
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 2 — NAICS Codes                                               */
/* ------------------------------------------------------------------ */
const NAICS_CODES = [
  { code: "561720", label: "Janitorial Services", color: "emerald" },
  { code: "541512", label: "IT Support", color: "sky" },
  { code: "236220", label: "Commercial Construction", color: "amber" },
  { code: "561210", label: "Facility Support", color: "violet" },
];

function StepNaics({ active }: { active: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setVisibleCount(0);
      return;
    }
    let count = 0;
    const iv = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= NAICS_CODES.length) clearInterval(iv);
    }, 500);
    return () => clearInterval(iv);
  }, [active]);

  const colorMap: Record<string, string> = {
    emerald: "border-emerald-500/60 bg-emerald-500/10 text-emerald-400",
    sky: "border-sky-500/60 bg-sky-500/10 text-sky-400",
    amber: "border-amber-500/60 bg-amber-500/10 text-amber-400",
    violet: "border-violet-500/60 bg-violet-500/10 text-violet-400",
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-2 gap-4 max-w-md w-full">
        {NAICS_CODES.map((n, i) => (
          <div
            key={n.code}
            className={`border rounded-xl p-4 text-center transition-all duration-500 ${
              colorMap[n.color]
            } ${
              i < visibleCount
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-2xl font-bold font-mono">{n.code}</div>
            <div className="text-sm mt-1 opacity-80">{n.label}</div>
            {i < visibleCount && (
              <div className="mt-2 flex justify-center">
                <Check className="w-5 h-5 text-emerald-400 animate-bounce-once" />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-stone-300 text-lg text-center max-w-md leading-relaxed">
        Industry codes matched automatically from your services
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 3 — Opportunities Scored                                      */
/* ------------------------------------------------------------------ */
const SAMPLE_OPPS = [
  { title: "Janitorial Services", location: "Fort Bragg", score: 94, tier: "HOT" },
  { title: "IT Support Services", location: "Pentagon", score: 78, tier: "WARM" },
  { title: "Facility Maintenance", location: "VA Medical", score: 62, tier: "WARM" },
];

function StepOpportunities({ active }: { active: boolean }) {
  const counter = useAnimatedCounter(40000, 2000, active);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setCardsVisible(false);
      return;
    }
    const t = setTimeout(() => setCardsVisible(true), 1200);
    return () => clearTimeout(t);
  }, [active]);

  const tierColor = (tier: string) =>
    tier === "HOT"
      ? "text-red-400 bg-red-500/15 border-red-500/40"
      : "text-amber-400 bg-amber-500/15 border-amber-500/40";

  const barColor = (tier: string) =>
    tier === "HOT"
      ? "from-red-500 to-orange-500"
      : "from-amber-500 to-yellow-500";

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Counter */}
      <div className="text-center">
        <div className="text-5xl md:text-6xl font-bold text-white font-mono tabular-nums">
          {counter.toLocaleString()}
          <span className="text-emerald-400">+</span>
        </div>
        <p className="text-stone-400 mt-1">Opportunities Scored</p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 w-full max-w-md">
        {SAMPLE_OPPS.map((opp, i) => (
          <div
            key={opp.title}
            className={`bg-stone-900/80 border border-stone-700/60 rounded-xl p-4 transition-all duration-600 ${
              cardsVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-white font-semibold text-sm">
                  {opp.title}
                </div>
                <div className="text-stone-500 text-xs">{opp.location}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold font-mono">
                  {opp.score}
                </span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tierColor(
                    opp.tier
                  )}`}
                >
                  {opp.tier}
                </span>
              </div>
            </div>
            <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${barColor(
                  opp.tier
                )} rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: cardsVisible ? `${opp.score}%` : "0%",
                  transitionDelay: `${i * 200 + 400}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 4 — AI Drafts Your Proposal                                   */
/* ------------------------------------------------------------------ */
const PROPOSAL_SECTIONS = [
  "Cover Letter",
  "Technical Approach",
  "Past Performance",
  "Pricing Strategy",
];

function StepProposal({ active }: { active: boolean }) {
  const [completedSections, setCompletedSections] = useState(0);
  const [writingDots, setWritingDots] = useState("");

  useEffect(() => {
    if (!active) {
      setCompletedSections(0);
      setWritingDots("");
      return;
    }
    let count = 0;
    const iv = setInterval(() => {
      count++;
      setCompletedSections(count);
      if (count >= PROPOSAL_SECTIONS.length) clearInterval(iv);
    }, 900);
    return () => clearInterval(iv);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    let dots = 0;
    const iv = setInterval(() => {
      dots = (dots + 1) % 4;
      setWritingDots(".".repeat(dots));
    }, 300);
    return () => clearInterval(iv);
  }, [active]);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Document */}
      <div className="w-full max-w-sm">
        <div className="bg-stone-900 border border-stone-700 rounded-xl overflow-hidden shadow-2xl">
          {/* Document header */}
          <div className="bg-stone-800/50 px-5 py-3 border-b border-stone-700/60 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-stone-300 text-sm font-medium">
              Proposal_FortBragg_Janitorial.docx
            </span>
          </div>
          {/* Sections */}
          <div className="p-5 space-y-3">
            {PROPOSAL_SECTIONS.map((section, i) => {
              const done = i < completedSections;
              const writing = i === completedSections;
              return (
                <div
                  key={section}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-500 ${
                    done
                      ? "border-emerald-500/40 bg-emerald-500/10"
                      : writing
                      ? "border-sky-500/40 bg-sky-500/10"
                      : "border-stone-700/40 bg-stone-800/30"
                  } ${
                    i <= completedSections
                      ? "opacity-100 translate-y-0"
                      : "opacity-40 translate-y-1"
                  }`}
                >
                  {done ? (
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : writing ? (
                    <Sparkles className="w-5 h-5 text-sky-400 shrink-0 animate-pulse" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border border-stone-600 shrink-0" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      done
                        ? "text-emerald-300"
                        : writing
                        ? "text-sky-300"
                        : "text-stone-500"
                    }`}
                  >
                    {section}
                    {writing && (
                      <span className="text-sky-400 font-mono ml-1">
                        {writingDots}
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-stone-300 text-lg text-center max-w-md leading-relaxed">
        First draft generated in{" "}
        <span className="text-emerald-400 font-bold">15 minutes</span> — ready for your review
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 5 — Track Your Pipeline                                       */
/* ------------------------------------------------------------------ */
const KANBAN_COLUMNS = [
  {
    title: "Discovery",
    color: "sky",
    cards: [
      { id: "d1", name: "VA HVAC Repair", value: "$340K" },
      { id: "d2", name: "Army IT Support", value: "$1.1M" },
    ],
  },
  {
    title: "Bidding",
    color: "amber",
    cards: [{ id: "b1", name: "Navy Janitorial", value: "$820K" }],
  },
  {
    title: "Won",
    color: "emerald",
    cards: [{ id: "w1", name: "Fort Bragg Maint.", value: "$1.2M" }],
  },
];

function StepPipeline({ active }: { active: boolean }) {
  const [showMove, setShowMove] = useState(false);
  const [columnsVisible, setColumnsVisible] = useState(0);

  useEffect(() => {
    if (!active) {
      setShowMove(false);
      setColumnsVisible(0);
      return;
    }
    let c = 0;
    const iv = setInterval(() => {
      c++;
      setColumnsVisible(c);
      if (c >= 3) clearInterval(iv);
    }, 400);
    const moveTimer = setTimeout(() => setShowMove(true), 2500);
    return () => {
      clearInterval(iv);
      clearTimeout(moveTimer);
    };
  }, [active]);

  const colBorder: Record<string, string> = {
    sky: "border-sky-500/30",
    amber: "border-amber-500/30",
    emerald: "border-emerald-500/30",
  };
  const colHeader: Record<string, string> = {
    sky: "text-sky-400",
    amber: "text-amber-400",
    emerald: "text-emerald-400",
  };
  const colDot: Record<string, string> = {
    sky: "bg-sky-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
        {KANBAN_COLUMNS.map((col, ci) => (
          <div
            key={col.title}
            className={`border rounded-xl p-3 bg-stone-900/60 transition-all duration-500 ${
              colBorder[col.color]
            } ${
              ci < columnsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${ci * 150}ms` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${colDot[col.color]}`} />
              <span
                className={`text-xs font-bold uppercase tracking-wider ${colHeader[col.color]}`}
              >
                {col.title}
              </span>
              <span className="text-stone-600 text-xs ml-auto">
                {col.cards.length}
              </span>
            </div>
            <div className="space-y-2">
              {col.cards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-stone-800/80 border border-stone-700/50 rounded-lg p-2.5 transition-all duration-700 ${
                    card.id === "w1"
                      ? "shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                      : ""
                  } ${
                    showMove && card.id === "d1"
                      ? "opacity-50 scale-95"
                      : ""
                  }`}
                >
                  <div className="text-white text-xs font-medium">
                    {card.name}
                  </div>
                  <div className="text-stone-500 text-[10px] mt-0.5">
                    {card.value}
                  </div>
                </div>
              ))}
              {/* Animated moving card */}
              {showMove && col.title === "Bidding" && (
                <div className="bg-sky-500/10 border border-sky-500/30 rounded-lg p-2.5 animate-fade-in-up">
                  <div className="text-sky-300 text-xs font-medium">
                    VA HVAC Repair
                  </div>
                  <div className="text-stone-500 text-[10px] mt-0.5">
                    $340K
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="text-stone-300 text-lg text-center max-w-md leading-relaxed">
        Manage every deal from discovery to award
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 6 — Win Government Contracts                                  */
/* ------------------------------------------------------------------ */
function StepCelebration({ active }: { active: boolean }) {
  const [showAmount, setShowAmount] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    if (!active) {
      setShowAmount(false);
      setShowCta(false);
      return;
    }
    const t1 = setTimeout(() => setShowAmount(true), 400);
    const t2 = setTimeout(() => setShowCta(true), 1200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active]);

  return (
    <div className="flex flex-col items-center gap-8 relative overflow-hidden">
      {/* Confetti */}
      {active && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full opacity-0"
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                backgroundColor: [
                  "#10b981",
                  "#0ea5e9",
                  "#f59e0b",
                  "#ef4444",
                  "#a855f7",
                  "#ec4899",
                  "#14b8a6",
                ][i % 7],
                animation: `confetti-fall ${2 + Math.random() * 3}s ease-in ${
                  Math.random() * 2
                }s forwards`,
              }}
            />
          ))}
        </div>
      )}

      {/* Trophy */}
      <div
        className={`transition-all duration-700 ${
          active ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.3)]">
          <Trophy className="w-10 h-10 text-emerald-400" />
        </div>
      </div>

      {/* Amount */}
      <div
        className={`text-center transition-all duration-700 ${
          showAmount
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90"
        }`}
      >
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          $1.2M
        </div>
        <div className="flex items-center justify-center gap-2 text-emerald-400 text-xl font-semibold">
          <Check className="w-6 h-6" />
          Contract Won
        </div>
      </div>

      {/* Logo + CTA */}
      <div
        className={`flex flex-col items-center gap-5 transition-all duration-700 ${
          showCta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CP</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            CapturePilot
          </span>
        </div>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl text-lg transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
        >
          Start Free — 30 Days
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Walkthrough Page                                              */
/* ------------------------------------------------------------------ */
export default function WalkthroughPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [stepProgress, setStepProgress] = useState(0);

  const goToStep = useCallback(
    (step: number, dir?: "left" | "right") => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setDirection(dir ?? (step > currentStep ? "right" : "left"));
      setTimeout(() => {
        setCurrentStep(step);
        setStepProgress(0);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    },
    [currentStep, isTransitioning]
  );

  const goNext = useCallback(() => {
    const next = (currentStep + 1) % STEP_COUNT;
    goToStep(next, "right");
  }, [currentStep, goToStep]);

  const goPrev = useCallback(() => {
    const prev = (currentStep - 1 + STEP_COUNT) % STEP_COUNT;
    goToStep(prev, "left");
  }, [currentStep, goToStep]);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    setStepProgress(0);
    const startTime = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTO_ADVANCE_MS) * 100, 100);
      setStepProgress(pct);
      if (elapsed >= AUTO_ADVANCE_MS) {
        goNext();
      }
    }, 50);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentStep, isPaused, goNext]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const StepIcon = STEP_ICONS[currentStep];

  const stepComponents = [
    <StepWebsite key="s1" active={currentStep === 0 && !isTransitioning} />,
    <StepNaics key="s2" active={currentStep === 1 && !isTransitioning} />,
    <StepOpportunities key="s3" active={currentStep === 2 && !isTransitioning} />,
    <StepProposal key="s4" active={currentStep === 3 && !isTransitioning} />,
    <StepPipeline key="s5" active={currentStep === 4 && !isTransitioning} />,
    <StepCelebration key="s6" active={currentStep === 5 && !isTransitioning} />,
  ];

  return (
    <div
      className="min-h-screen bg-stone-950 text-white flex flex-col relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="flex h-1">
          {Array.from({ length: STEP_COUNT }).map((_, i) => (
            <div key={i} className="flex-1 bg-stone-800/50">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-200 ease-linear"
                style={{
                  width:
                    i < currentStep
                      ? "100%"
                      : i === currentStep
                      ? `${stepProgress}%`
                      : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Step label */}
      <div className="pt-8 pb-2 flex flex-col items-center gap-2 z-10">
        <div className="flex items-center gap-2 text-stone-500 text-sm font-medium">
          <span className="text-emerald-400 font-mono">
            {String(currentStep + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span>{String(STEP_COUNT).padStart(2, "0")}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          <StepIcon className="w-7 h-7 text-emerald-400" />
          {STEP_LABELS[currentStep]}
        </h2>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-6 py-8 relative z-10">
        <div
          className={`w-full max-w-2xl transition-all duration-300 ease-out ${
            isTransitioning
              ? direction === "right"
                ? "opacity-0 -translate-x-8"
                : "opacity-0 translate-x-8"
              : "opacity-100 translate-x-0"
          }`}
        >
          {stepComponents[currentStep]}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-800/60 hover:bg-stone-700/80 border border-stone-700/40 flex items-center justify-center text-stone-400 hover:text-white transition-all duration-200"
        aria-label="Previous step"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-stone-800/60 hover:bg-stone-700/80 border border-stone-700/40 flex items-center justify-center text-stone-400 hover:text-white transition-all duration-200"
        aria-label="Next step"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Step dots */}
      <div className="pb-6 flex items-center justify-center gap-2.5 z-10">
        {Array.from({ length: STEP_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToStep(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentStep
                ? "w-8 h-2.5 bg-emerald-500"
                : "w-2.5 h-2.5 bg-stone-700 hover:bg-stone-600"
            }`}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px] transition-all duration-1000"
          style={{
            background:
              "radial-gradient(circle, #10b981 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Confetti keyframes injected as style tag */}
      <style>{`
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(calc(100vh + 20px)) rotate(720deg) scale(0.5);
          }
        }
        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        .animate-bounce-once {
          animation: bounce-once 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
