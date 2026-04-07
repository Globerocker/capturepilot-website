"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  DollarSign,
  Brain,
  FileText,
  Shield,
  TrendingUp,
  ChevronRight,
  Minus,
  Building2,
  Rocket,
  Star,
  BadgeCheck,
  BarChart3,
  Search,
  Handshake,
  Users,
  Clock,
  Sparkles,
  Target,
  Award,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

/* ------------------------------------------------------------------ */
/*  Matrix data                                                        */
/* ------------------------------------------------------------------ */

type CellStatus = "yes" | "no" | "partial";

interface MatrixRow {
  feature: string;
  cp: CellStatus;
  govwin: CellStatus;
  govtribe: CellStatus;
  bgov: CellStatus;
  highergov: CellStatus;
  federalCompass: CellStatus;
  unison: CellStatus;
  capture2: CellStatus;
  sweetspot: CellStatus;
  govdash: CellStatus;
  samgov: CellStatus;
}

const MATRIX_ROWS: MatrixRow[] = [
  { feature: "AI Proposal Drafts", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "partial", sweetspot: "yes", govdash: "yes", samgov: "no" },
  { feature: "Capability Statement", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "no", sweetspot: "no", govdash: "no", samgov: "no" },
  { feature: "Smart Matching", cp: "yes", govwin: "partial", govtribe: "partial", bgov: "no", highergov: "partial", federalCompass: "partial", unison: "partial", capture2: "no", sweetspot: "yes", govdash: "yes", samgov: "no" },
  { feature: "Quick Checker", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "no", sweetspot: "no", govdash: "no", samgov: "no" },
  { feature: "Market Intel", cp: "yes", govwin: "yes", govtribe: "partial", bgov: "yes", highergov: "yes", federalCompass: "yes", unison: "no", capture2: "no", sweetspot: "partial", govdash: "partial", samgov: "partial" },
  { feature: "Deal Pipeline", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "yes", sweetspot: "yes", govdash: "yes", samgov: "no" },
  { feature: "Partner Search", cp: "yes", govwin: "yes", govtribe: "partial", bgov: "no", highergov: "yes", federalCompass: "partial", unison: "yes", capture2: "no", sweetspot: "no", govdash: "no", samgov: "yes" },
  { feature: "Consulting Support", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "no", sweetspot: "no", govdash: "no", samgov: "no" },
  { feature: "Starting Price", cp: "yes", govwin: "no", govtribe: "partial", bgov: "no", highergov: "partial", federalCompass: "no", unison: "partial", capture2: "partial", sweetspot: "partial", govdash: "no", samgov: "yes" },
  { feature: "Free Tier", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "partial", capture2: "no", sweetspot: "no", govdash: "no", samgov: "yes" },
];

const PRICE_LABELS: Record<string, string> = {
  cp: "$199/mo",
  govwin: "$8K+/yr",
  govtribe: "$600/yr",
  bgov: "$7K+/yr",
  highergov: "$1K+/yr",
  federalCompass: "Custom",
  unison: "Free+",
  capture2: "$99+/mo",
  sweetspot: "Custom",
  govdash: "$500+/mo",
  samgov: "Free",
};

const COMPETITORS = [
  "cp",
  "govwin",
  "govtribe",
  "bgov",
  "highergov",
  "federalCompass",
  "unison",
  "capture2",
  "sweetspot",
  "govdash",
  "samgov",
] as const;

const COMPETITOR_LABELS: Record<string, string> = {
  cp: "CapturePilot",
  govwin: "GovWin",
  govtribe: "GovTribe",
  bgov: "BGOV",
  highergov: "HigherGov",
  federalCompass: "Fed. Compass",
  unison: "Unison",
  capture2: "Capture2",
  sweetspot: "Sweetspot",
  govdash: "GovDash",
  samgov: "SAM.gov",
};

/* ------------------------------------------------------------------ */
/*  Competitor cards                                                    */
/* ------------------------------------------------------------------ */

interface CompetitorCard {
  name: string;
  slug: string;
  tagline: string;
  icon: typeof Building2;
}

const COMPETITOR_CARDS: CompetitorCard[] = [
  { name: "GovWin", slug: "govwin", tagline: "Enterprise intelligence at enterprise prices", icon: Building2 },
  { name: "GovTribe", slug: "govtribe", tagline: "Good search tool, but search isn't enough", icon: Search },
  { name: "BGOV", slug: "bgov", tagline: "Policy intelligence, not capture tools", icon: FileText },
  { name: "HigherGov", slug: "highergov", tagline: "Broad coverage, shallow depth", icon: BarChart3 },
  { name: "Federal Compass", slug: "federal-compass", tagline: "Analytics without action", icon: Target },
  { name: "Unison", slug: "unison", tagline: "Marketplace, not intelligence", icon: Handshake },
  { name: "Capture2Proposal", slug: "capture2proposal", tagline: "Manages proposals, doesn't write them", icon: FileText },
  { name: "Sweetspot AI", slug: "sweetspot", tagline: "AI-native newcomer", icon: Sparkles },
  { name: "GovDash", slug: "govdash", tagline: "AI proposal focus", icon: Brain },
  { name: "SAM.gov", slug: "sam-gov", tagline: "The source, not the solution", icon: Shield },
];

/* ------------------------------------------------------------------ */
/*  Why Teams Switch                                                   */
/* ------------------------------------------------------------------ */

const WHY_SWITCH = [
  {
    icon: Brain,
    title: "AI That Actually Does the Work",
    description:
      "Most platforms stop at search. CapturePilot drafts proposals, builds capability statements, and scores every opportunity against your exact profile automatically.",
  },
  {
    icon: DollarSign,
    title: "Built for SMB Budgets",
    description:
      "At $199/month with a free tier, CapturePilot costs less than most competitors' entry plans. No enterprise sales calls, no annual lock-in, no per-seat fees.",
  },
  {
    icon: Rocket,
    title: "Full Pipeline, One Platform",
    description:
      "From eligibility check to proposal submission, everything lives in one place. No stitching together five tools and three spreadsheets.",
  },
  {
    icon: Users,
    title: "Consulting Tier for Hands-Off Capture",
    description:
      "Not ready to go it alone? Our managed consulting tier gives you a dedicated capture team at a fraction of what a BD hire would cost.",
  },
];

/* ------------------------------------------------------------------ */
/*  Status icon helper                                                 */
/* ------------------------------------------------------------------ */

function CellIcon({ status }: { status: CellStatus }) {
  if (status === "yes") return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
  if (status === "no") return <XCircle className="w-4 h-4 text-red-400" />;
  return <Minus className="w-4 h-4 text-amber-500" />;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VsOverviewPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        .shimmer-bg {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.08) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .hover-lift {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease forwards;
        }
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        .animate-delay-200 {
          animation-delay: 200ms;
        }
        .animate-delay-300 {
          animation-delay: 300ms;
        }
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <SiteNav />

      <main className="pt-16">
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-stone-950">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #a8a29e 1px, transparent 1px), linear-gradient(to bottom, #a8a29e 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 to-stone-950/90 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              <Zap className="w-3.5 h-3.5" />
              Competitor Comparisons
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white animate-fade-in-up animate-delay-100">
              See How CapturePilot{" "}
              <span className="text-emerald-400">Compares</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              We built CapturePilot because existing tools were either too
              expensive, too shallow, or too complicated for small businesses.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-emerald-600 transition-colors"
              >
                Try Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#matrix"
                className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 px-8 py-3.5 rounded-full font-bold text-sm hover:border-stone-400 hover:text-white transition-colors"
              >
                See the Matrix
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  QUICK COMPARISON MATRIX                                     */}
        {/* ============================================================ */}
        <section
          id="matrix"
          className="relative py-24 bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Quick Comparison{" "}
                <span className="gradient-text">Matrix</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                How CapturePilot stacks up against every major GovCon platform
                across the features that matter most.
              </p>
            </div>

            <div className="overflow-x-auto -mx-6 px-6">
              <div className="min-w-[1100px]">
                <div className="bg-stone-950 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="grid grid-cols-12 border-b border-stone-800">
                    <div className="col-span-2 px-4 py-3 text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Feature
                    </div>
                    {COMPETITORS.map((key) => (
                      <div
                        key={key}
                        className={`col-span-1 px-2 py-3 text-xs font-bold text-center ${
                          key === "cp"
                            ? "bg-emerald-500/10 border-x border-emerald-500/30 text-emerald-400"
                            : "text-stone-500"
                        }`}
                      >
                        {COMPETITOR_LABELS[key]}
                      </div>
                    ))}
                  </div>

                  {/* Rows */}
                  {MATRIX_ROWS.map((row, i) => {
                    const isPriceRow = row.feature === "Starting Price";
                    const isFreeTierRow = row.feature === "Free Tier";
                    return (
                      <div
                        key={i}
                        className={`grid grid-cols-12 border-b border-stone-800/50 last:border-b-0 hover:bg-stone-800/30 transition-colors ${
                          i % 2 === 0 ? "bg-transparent" : "bg-stone-900/40"
                        }`}
                      >
                        <div className="col-span-2 px-4 py-3 text-sm font-medium text-stone-300 flex items-center">
                          {row.feature}
                        </div>
                        {COMPETITORS.map((key) => {
                          const status = row[key as keyof MatrixRow] as CellStatus;
                          return (
                            <div
                              key={key}
                              className={`col-span-1 px-2 py-3 flex items-center justify-center ${
                                key === "cp"
                                  ? "border-x border-emerald-500/10 bg-emerald-500/5"
                                  : ""
                              }`}
                            >
                              {isPriceRow ? (
                                <span
                                  className={`text-xs font-medium ${
                                    key === "cp"
                                      ? "text-emerald-400"
                                      : status === "yes"
                                      ? "text-emerald-400"
                                      : status === "partial"
                                      ? "text-amber-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  {PRICE_LABELS[key]}
                                </span>
                              ) : isFreeTierRow ? (
                                <CellIcon status={status} />
                              ) : (
                                <CellIcon status={status} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 text-center mt-4">
              Based on publicly available information as of April 2026. Scroll
              horizontally on mobile. Green = included, amber = partial/limited,
              red = not available.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  COMPETITOR CARDS                                             */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Detailed{" "}
                <span className="text-emerald-400">Comparisons</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Dive deep into how CapturePilot compares to each competitor with
                full feature breakdowns, pricing analysis, and honest
                assessments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPETITOR_CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.slug}
                    href={`/vs/${card.slug}`}
                    className="group bg-stone-900/60 backdrop-blur border border-stone-800 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-stone-900 transition-all duration-300 hover-lift animate-fade-in-up"
                    style={{
                      animationDelay: `${i * 60}ms`,
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-stone-800 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-stone-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">
                          vs {card.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                      {card.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      Read full comparison
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WHY TEAMS SWITCH                                            */}
        {/* ============================================================ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-white/90 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Why Teams{" "}
                <span className="gradient-text">Switch to CapturePilot</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Four reasons small businesses are leaving expensive, fragmented
                tools behind.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {WHY_SWITCH.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-2xl p-8 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  STATS BAR                                                   */}
        {/* ============================================================ */}
        <section className="relative py-16 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "37K+", label: "Opportunities Tracked" },
                { value: "80K+", label: "Contractors Indexed" },
                { value: "$199", label: "Per Month, Flat" },
                { value: "Free", label: "Tier Available" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WHAT YOU GET SECTION                                        */}
        {/* ============================================================ */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-stone-50/90 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Everything You Get With{" "}
                <span className="gradient-text">CapturePilot</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                One platform. One price. Every tool you need to find, qualify,
                and win government contracts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Brain, title: "AI Proposal Writer", desc: "Generate compliant proposal drafts from opportunity requirements in minutes." },
                { icon: BadgeCheck, title: "Capability Statement Builder", desc: "Voice-powered capability statement generation. Record and generate." },
                { icon: Target, title: "Smart Matching Engine", desc: "Proprietary multi-factor algorithm scores every opportunity against your profile." },
                { icon: Zap, title: "Quick Eligibility Checker", desc: "Instant check to see if your business qualifies for any federal opportunity." },
                { icon: BarChart3, title: "Market Intelligence", desc: "Award data, incumbent intel, spending trends, and competitive landscape." },
                { icon: TrendingUp, title: "Deal Pipeline", desc: "Kanban-style pipeline to track opportunities from discovery to submission." },
                { icon: Search, title: "Partner Search", desc: "Search 1M+ SAM-registered contractors to find teaming partners." },
                { icon: Users, title: "Consulting Support", desc: "Managed capture services for businesses that want expert guidance." },
                { icon: Award, title: "Set-Aside Matching", desc: "Automatic matching for 8(a), SDVOSB, WOSB, HUBZone, and SDB set-asides." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-xl p-6 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
                  >
                    <Icon className="w-5 h-5 text-emerald-600 mb-3" />
                    <h3 className="font-bold text-stone-800 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA                                                         */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
          <div className="shimmer-bg absolute inset-0 pointer-events-none" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Try CapturePilot{" "}
              <span className="text-emerald-400">Free</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              Stop paying enterprise prices for tools that were not built for
              you. Start with our free tier and upgrade when you are ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-600 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CHECK_URL}
                className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 px-8 py-4 rounded-full font-bold text-base hover:border-stone-400 hover:text-white transition-colors"
              >
                Free Eligibility Check <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-6">
              No credit card required. Free tier available. Cancel anytime.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CROSS-LINKS                                                 */}
        {/* ============================================================ */}
        <section className="py-16 bg-white border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-stone-400 uppercase tracking-wider mb-8">
              Explore CapturePilot Features
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Smart Matching", href: "/features/matching", icon: Zap },
                { label: "AI Proposals", href: "/features/proposals", icon: FileText },
                { label: "Capability Statements", href: "/features/capability-statement", icon: BadgeCheck },
                { label: "Pricing", href: "/#pricing", icon: DollarSign },
              ].map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center gap-3 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-200 rounded-xl px-4 py-3 transition-all group"
                  >
                    <Icon className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 transition-colors" />
                    <span className="text-sm font-medium text-stone-600 group-hover:text-emerald-700 transition-colors">
                      {link.label}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-emerald-400 ml-auto transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
