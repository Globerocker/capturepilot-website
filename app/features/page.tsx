"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Target,
  FileText,
  BarChart3,
  Search,
  Zap,
  Shield,
  Mic,
  CheckCircle2,
  Layers,
  Bell,
  Users,
  Award,
  Building2,
  Briefcase,
  TrendingUp,
  Phone,
  Star,
  ChevronRight,
  Play,
  Sparkles,
  Eye,
  GitBranch,
  Check,
  X,
} from "lucide-react";

/* ─── Constants ─── */
const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─── Animated Score Bar ─── */
function ScoreBar({ score, delay, inView }: { score: number; delay: number; inView: boolean }) {
  const color = score >= 80 ? "bg-emerald-500" : score >= 60 ? "bg-amber-500" : "bg-stone-400";
  return (
    <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{
          width: inView ? `${score}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

/* ─── Feature Card Component ─── */
function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  plan,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
  plan: "Free" | "Pro" | "Consulting";
  delay?: number;
}) {
  const planColors = {
    Free: "bg-emerald-100 text-emerald-700",
    Pro: "bg-sky-100 text-sky-700",
    Consulting: "bg-purple-100 text-purple-700",
  };

  const inner = (
    <div
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${planColors[plan]}`}>
          {plan}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-stone-400 text-sm leading-relaxed mb-4">{description}</p>
      {href && (
        <span className="text-emerald-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </div>
  );

  return href ? <Link href={href}>{inner}</Link> : inner;
}

/* ─── Light Feature Card (for dot-grid sections) ─── */
function LightFeatureCard({
  icon: Icon,
  title,
  description,
  href,
  plan,
  delay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
  plan: "Free" | "Pro" | "Consulting";
  delay?: number;
}) {
  const planColors = {
    Free: "bg-emerald-100 text-emerald-700",
    Pro: "bg-sky-100 text-sky-700",
    Consulting: "bg-purple-100 text-purple-700",
  };

  const inner = (
    <div
      className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${planColors[plan]}`}>
          {plan}
        </span>
      </div>
      <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed mb-4">{description}</p>
      {href && (
        <span className="text-emerald-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </div>
  );

  return href ? <Link href={href}>{inner}</Link> : inner;
}

/* ─── Feature Matrix Data ─── */
const FEATURE_MATRIX = [
  { feature: "Quick Company Checker", description: "Instant SAM.gov eligibility assessment", free: true, pro: true, consulting: true },
  { feature: "Smart Matching Engine", description: "AI-scored opportunity matching on 6 dimensions", free: false, pro: true, consulting: true },
  { feature: "AI Proposal Writer", description: "Generate compliant proposal drafts in minutes", free: false, pro: true, consulting: true },
  { feature: "Market Intelligence", description: "Agency spend trends, NAICS analysis, forecasts", free: false, pro: true, consulting: true },
  { feature: "Capability Statement Builder", description: "Voice-to-document with brand color extraction", free: false, pro: true, consulting: true },
  { feature: "Deal Pipeline", description: "Kanban board with stages, notes, and tracking", free: false, pro: true, consulting: true },
  { feature: "Partner Search", description: "1M+ SAM-registered companies, NAICS/cert filters", free: false, pro: true, consulting: true },
  { feature: "Eligibility Check", description: "Set-aside matching and certification verification", free: false, pro: true, consulting: true },
  { feature: "Voice-to-Document", description: "Record yourself, AI writes polished documents", free: false, pro: true, consulting: true },
  { feature: "IDIQ/Vehicle Tracking", description: "Find active contract vehicles in your NAICS", free: false, pro: true, consulting: true },
  { feature: "Competitor Intelligence", description: "Award history, incumbent tracking, win rates", free: false, pro: true, consulting: true },
  { feature: "Daily Email Alerts", description: "Smart notifications for new matching opportunities", free: false, pro: true, consulting: true },
  { feature: "Unlimited Opportunities", description: "Access to 37,000+ federal opportunities", free: false, pro: true, consulting: true },
  { feature: "Dedicated Capture Manager", description: "Personal strategist for your GovCon pipeline", free: false, pro: false, consulting: true },
  { feature: "Managed Proposals", description: "We write and review your proposals end-to-end", free: false, pro: false, consulting: true },
  { feature: "Strategy Calls", description: "Weekly calls with capture management experts", free: false, pro: false, consulting: true },
];

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */

export default function FeaturesPage() {
  const coreRef = useInView(0.15);
  const mockupCards = useInView(0.2);

  return (
    <>
      <SiteNav />

      <style jsx>{`
        .shimmer-bg {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes typewriter-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: typewriter-blink 1s step-end infinite;
        }
        @keyframes growBar {
          from { height: 0; }
          to { height: var(--bar-height); }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 1 — HERO                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 shimmer-bg" />
        <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
              All-in-One GovCon Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in-up animate-delay-100 tracking-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Win Government Contracts</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-400 mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-200 leading-relaxed">
            16 powerful features. One platform.{" "}
            <span className="text-white font-semibold">$199/mo.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Link
              href={SIGNUP_URL}
              className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-8 text-stone-500 text-sm">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 30-day free trial</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 2 — CORE FEATURES (light + dot grid)                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6"
        style={{
          backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-emerald-600 text-sm font-bold tracking-widest uppercase">Core Platform</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mt-3 mb-4">
              The Big Three
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              Three engines that work together to find, analyze, and win federal contracts.
            </p>
          </div>

          {/* ── Smart Matching Engine ── */}
          <div ref={coreRef.ref} className="grid md:grid-cols-2 gap-16 items-center mb-28">
            <div className={`transition-all duration-700 ${coreRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">Feature 01</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2 mb-4">
                Smart Matching Engine
              </h3>
              <p className="text-stone-500 text-lg leading-relaxed mb-6">
                We score every federal opportunity against your profile on 6 dimensions -- NAICS codes,
                set-aside eligibility, geography, contract value, past performance, and deadline urgency.
                Hot matches surface automatically so you never miss a winnable deal.
              </p>
              <ul className="space-y-3 mb-8">
                {["proprietary multi-factor scoring algorithm", "HOT / WARM / COLD classification", "Daily re-scoring as opportunities update"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/features/matching"
                className="text-emerald-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore Matching <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Animated mockup: opportunity cards */}
            <div
              ref={mockupCards.ref}
              className={`transition-all duration-700 delay-200 ${coreRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 space-y-4">
                {[
                  { title: "Janitorial Services — Fort Bragg, NC", score: 94, tier: "HOT", value: "$2.4M" },
                  { title: "Facility Maintenance — Pentagon", score: 78, tier: "WARM", value: "$1.1M" },
                  { title: "Grounds Keeping — NAS Oceana", score: 62, tier: "WARM", value: "$680K" },
                ].map((opp, i) => (
                  <div key={opp.title} className="bg-stone-800/60 rounded-xl p-4 border border-stone-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-semibold truncate pr-4">{opp.title}</span>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                          opp.tier === "HOT"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {opp.tier}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
                      <span>{opp.value}</span>
                      <span className="text-emerald-400 font-bold">{opp.score}%</span>
                    </div>
                    <ScoreBar score={opp.score} delay={i * 300 + 400} inView={mockupCards.inView} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── AI Proposal Writer ── */}
          {(() => {
            const section = useInView(0.15);
            return (
              <div ref={section.ref} className="grid md:grid-cols-2 gap-16 items-center mb-28">
                {/* Animated mockup: document with typewriter */}
                <div className={`order-2 md:order-1 transition-all duration-700 delay-200 ${section.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                  <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-xs text-stone-400">proposal-draft.docx</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-stone-200 rounded-full w-full" />
                      <div className="h-3 bg-stone-200 rounded-full w-5/6" />
                      <div className="h-3 bg-stone-200 rounded-full w-4/6" />
                      <div className="h-3 bg-emerald-100 rounded-full w-full" />
                      <div className="h-3 bg-emerald-100 rounded-full w-3/4" />
                      <div className="flex items-center gap-0.5">
                        <div className="h-3 bg-emerald-200 rounded-full w-2/5" />
                        <div className="w-0.5 h-5 bg-emerald-500 cursor-blink" />
                      </div>
                      <div className="h-3 bg-stone-100 rounded-full w-full opacity-30" />
                      <div className="h-3 bg-stone-100 rounded-full w-2/3 opacity-30" />
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs text-stone-400">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>AI writing Section L response...</span>
                    </div>
                  </div>
                </div>

                <div className={`order-1 md:order-2 transition-all duration-700 ${section.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                  <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">Feature 02</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2 mb-4">
                    AI Proposal Writer
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed mb-6">
                    Upload the solicitation, and our AI drafts a compliant proposal tailored to the evaluation
                    criteria. It pulls from your capability statement, past performance, and team qualifications
                    to produce a polished first draft in minutes -- not weeks.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Section L/M compliance mapping", "Auto-pulls from your company profile", "Export to Word/PDF for final review"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/features/proposals"
                    className="text-emerald-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Explore Proposals <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })()}

          {/* ── Market Intelligence ── */}
          {(() => {
            const section = useInView(0.15);
            return (
              <div ref={section.ref} className="grid md:grid-cols-2 gap-16 items-center">
                <div className={`transition-all duration-700 ${section.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                  <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">Feature 03</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 mt-2 mb-4">
                    Market Intelligence
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed mb-6">
                    See where the money flows. Track agency spending by NAICS, analyze award trends, identify
                    upcoming contract recompetes, and forecast pipeline value. Data sourced from USASpending.gov
                    and SAM.gov award notices.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Agency spend heatmaps by NAICS", "Incumbent tracking and recompete alerts", "5-year award trend analysis"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/features/intelligence"
                    className="text-emerald-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Explore Intelligence <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Animated mockup: bar chart growing */}
                <div className={`transition-all duration-700 delay-200 ${section.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
                  <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-white text-sm font-semibold">Agency Spend by NAICS</span>
                      <span className="text-xs text-stone-500">FY2025</span>
                    </div>
                    <div className="flex items-end gap-3 h-48">
                      {[
                        { label: "DoD", height: 85, value: "$4.2B" },
                        { label: "VA", height: 65, value: "$2.1B" },
                        { label: "GSA", height: 50, value: "$1.6B" },
                        { label: "DHS", height: 40, value: "$980M" },
                        { label: "HHS", height: 30, value: "$720M" },
                        { label: "DoE", height: 22, value: "$540M" },
                      ].map((bar, i) => (
                        <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                          <span className="text-[10px] text-stone-500">{bar.value}</span>
                          <div className="w-full bg-stone-800 rounded-t-md overflow-hidden" style={{ height: "160px" }}>
                            <div
                              className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md transition-all duration-1000 ease-out"
                              style={{
                                height: section.inView ? `${bar.height}%` : "0%",
                                transitionDelay: `${i * 150 + 300}ms`,
                                marginTop: section.inView ? `${100 - bar.height}%` : "100%",
                              }}
                            />
                          </div>
                          <span className="text-[10px] text-stone-500">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 3 — AI-POWERED TOOLS (dark + shimmer)                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-stone-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 shimmer-bg" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">AI-Powered</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
              Smart Tools That Do the Work
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Built-in AI assistants that turn hours of manual effort into minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FileText}
              title="Capability Statement Builder"
              description="Paste a transcript or record your voice, and our AI generates a professional capability statement. Extracts your brand colors automatically and formats to federal standards."
              href="/features/capability-statement"
              plan="Pro"
              delay={0}
            />
            <FeatureCard
              icon={Search}
              title="Quick Company Checker"
              description="Enter any company name or UEI and instantly see their SAM.gov registration status, certifications, NAICS codes, and set-aside eligibility. Free forever -- no login required."
              href="/features/quick-checker"
              plan="Free"
              delay={150}
            />
            <FeatureCard
              icon={Mic}
              title="Voice-to-Document"
              description="Talk through your qualifications, past performance, or key personnel -- our AI transcribes and transforms it into polished, submission-ready prose."
              plan="Pro"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 4 — CAPTURE & PIPELINE (light + dot grid)             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6"
        style={{
          backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 text-sm font-bold tracking-widest uppercase">Capture Management</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mt-3 mb-4">
              Organize Your Pipeline
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              From discovery to submission -- track every opportunity through your capture lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <LightFeatureCard
              icon={Layers}
              title="Deal Pipeline"
              description="Kanban-style board with customizable stages. Drag opportunities from Discovery to Bid/No-Bid to Proposal to Submitted. Add notes, set reminders, and track win probability."
              href="/features/pipeline"
              plan="Pro"
              delay={0}
            />
            <LightFeatureCard
              icon={Users}
              title="Partner Search"
              description="Search 1M+ SAM-registered companies by NAICS, certifications, location, and size standard. Find teaming partners, subcontractors, and mentor-protege matches."
              plan="Pro"
              delay={150}
            />
            <LightFeatureCard
              icon={Shield}
              title="Eligibility Check"
              description="Instantly verify your eligibility for set-aside contracts. We cross-reference your certifications (8(a), HUBZone, SDVOSB, WOSB) against opportunity requirements."
              plan="Pro"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 5 — INTELLIGENCE & TRACKING (dark + shimmer)          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-stone-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 shimmer-bg" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Intelligence Layer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
              Know Before You Compete
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Competitive intelligence and tracking tools that give you an unfair advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={GitBranch}
              title="IDIQ / Contract Vehicle Tracking"
              description="Discover active IDIQ contracts, GWACs, and BPAs in your NAICS codes. See which vehicles are accepting new task orders and which agencies use them most."
              plan="Pro"
              delay={0}
            />
            <FeatureCard
              icon={Eye}
              title="Competitor Intelligence"
              description="Track who wins what. See award history by NAICS, identify incumbents on recompetes, analyze competitor win rates, and find gaps in the competitive landscape."
              plan="Pro"
              delay={150}
            />
            <FeatureCard
              icon={Bell}
              title="Daily Email Alerts"
              description="Get a morning briefing with your top-scored opportunities, new matches, approaching deadlines, and pipeline updates. Smart filtering ensures signal, not noise."
              plan="Pro"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 6 — SUPPORT & SERVICES (light + dot grid)             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6"
        style={{
          backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 text-sm font-bold tracking-widest uppercase">Support</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mt-3 mb-4">
              Help When You Need It
            </h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              From self-service tools to white-glove consulting -- choose your level of support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-stone-200 rounded-2xl p-8 hover-lift animate-fade-in-up">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                  Consulting
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Consulting Support Tier</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-5">
                A dedicated capture management team that works alongside you. We handle opportunity research,
                write and review proposals, develop win strategies, and join your bid/no-bid decisions. Weekly
                strategy calls and full pipeline management included.
              </p>
              <ul className="space-y-2">
                {["Dedicated capture manager", "Managed proposal writing", "Weekly strategy calls", "Custom market research"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-8 hover-lift animate-fade-in-up" style={{ animationDelay: "150ms", opacity: 0 }}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  Free
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Free Tier & Trial</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-5">
                The Quick Company Checker is free forever -- no account needed. Just enter a company name
                and get instant SAM.gov eligibility results. Ready for more? Start a 30-day free trial of
                the full Pro platform with all 16 features unlocked.
              </p>
              <ul className="space-y-2">
                {["Quick Checker free forever", "30-day Pro trial, no credit card", "Full feature access during trial", "Downgrade to Free anytime"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 7 — FEATURE MATRIX (dark)                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-stone-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 shimmer-bg" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Compare Plans</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
              Full Feature Matrix
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Every feature, every plan. See exactly what you get.
            </p>
          </div>

          <div className="bg-stone-900/60 border border-stone-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_80px_80px_100px] md:grid-cols-[1fr_1fr_80px_80px_100px] gap-4 px-6 py-4 border-b border-stone-800 bg-stone-900/80">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Feature</span>
              <span className="hidden md:block text-xs font-bold text-stone-400 uppercase tracking-wider">Description</span>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider text-center">Free</span>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider text-center">Pro</span>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider text-center">Consult</span>
            </div>

            {/* Rows */}
            {FEATURE_MATRIX.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_80px_80px_100px] md:grid-cols-[1fr_1fr_80px_80px_100px] gap-4 px-6 py-4 items-center ${
                  i < FEATURE_MATRIX.length - 1 ? "border-b border-stone-800/50" : ""
                } ${i % 2 === 0 ? "bg-stone-900/30" : ""}`}
              >
                <span className="text-sm font-semibold text-white">{row.feature}</span>
                <span className="hidden md:block text-xs text-stone-500">{row.description}</span>
                <span className="flex justify-center">
                  {row.free ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <X className="w-4 h-4 text-stone-700" />
                  )}
                </span>
                <span className="flex justify-center">
                  {row.pro ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <X className="w-4 h-4 text-stone-700" />
                  )}
                </span>
                <span className="flex justify-center">
                  {row.consulting ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <X className="w-4 h-4 text-stone-700" />
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-stone-500 text-sm">
              <span className="text-white font-semibold">Pro: $199/mo</span> &middot;{" "}
              <span className="text-white font-semibold">Consulting: Custom pricing</span> &middot;{" "}
              <Link href="/pricing" className="text-emerald-400 hover:underline">
                View full pricing details
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 8 — CTA                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6"
        style={{
          backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-stone-500 text-lg mb-10 max-w-2xl mx-auto">
            Start with a free Quick Check, watch a 3-minute demo, or explore our pricing.
            No credit card required for the 30-day trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </Link>
            <Link
              href="/pricing"
              className="border border-stone-300 text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              View Pricing <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/walkthrough"
              className="border border-stone-300 text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Product Walkthrough <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12">
            <Link
              href={CHECK_URL}
              className="text-emerald-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-lg"
            >
              Or try the free Quick Checker now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
