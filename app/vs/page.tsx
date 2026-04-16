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
const BASE = "https://www.capturepilot.com";

const vsCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "CapturePilot vs Competitors — GovCon Software Comparisons",
  description: "Detailed side-by-side comparisons of CapturePilot against every major government contracting platform.",
  url: `${BASE}/vs`,
  isPartOf: { "@type": "WebSite", name: "CapturePilot", url: BASE },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 11,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "CapturePilot vs GovWin", url: `${BASE}/vs/govwin` },
      { "@type": "ListItem", position: 2, name: "CapturePilot vs GovTribe", url: `${BASE}/vs/govtribe` },
      { "@type": "ListItem", position: 3, name: "CapturePilot vs BGOV", url: `${BASE}/vs/bgov` },
      { "@type": "ListItem", position: 4, name: "CapturePilot vs HigherGov", url: `${BASE}/vs/highergov` },
      { "@type": "ListItem", position: 5, name: "CapturePilot vs Federal Compass", url: `${BASE}/vs/federal-compass` },
      { "@type": "ListItem", position: 6, name: "CapturePilot vs Unison", url: `${BASE}/vs/unison` },
      { "@type": "ListItem", position: 7, name: "CapturePilot vs Capture2Proposal", url: `${BASE}/vs/capture2proposal` },
      { "@type": "ListItem", position: 8, name: "CapturePilot vs Sweetspot AI", url: `${BASE}/vs/sweetspot` },
      { "@type": "ListItem", position: 9, name: "CapturePilot vs GovDash", url: `${BASE}/vs/govdash` },
      { "@type": "ListItem", position: 10, name: "CapturePilot vs EZGovOpps", url: `${BASE}/vs/ezgovopps` },
      { "@type": "ListItem", position: 11, name: "CapturePilot vs SAM.gov", url: `${BASE}/vs/sam-gov` },
    ],
  },
};

const vsHubFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Which CapturePilot alternative is the best for small businesses?", acceptedAnswer: { "@type": "Answer", text: "For small businesses under $10M revenue, none of the established players were built for you. GovWin ($8K-$15K/yr per seat) and BGOV ($6K-$12K/yr) target enterprises. GovTribe ($50+/mo) is search-only. HigherGov ($99-$199/mo) covers federal + state + local broadly but has no AI proposal or capability statement tools. CapturePilot was purpose-built for SMB GovCon at $199/mo flat with a free tier, AI proposal drafting, Quick Checker eligibility, and set-aside matching for SDVOSB, WOSB, 8(a), and HUBZone." } },
    { "@type": "Question", name: "Why are there so many government contracting tools?", acceptedAnswer: { "@type": "Answer", text: "GovCon tooling fragmented because different teams have different jobs. BGOV and GovWin grew out of legislative and defense intelligence for lobbyists and large primes. GovTribe and HigherGov are search databases on top of SAM.gov data. Capture2Proposal and Shipley-style tools manage the proposal workflow. Unison runs a teaming marketplace. Sweetspot and GovDash added AI on top of proposal or search workflows. CapturePilot exists because small businesses needed one platform that covers the whole pipeline — find, qualify, draft, submit — not five stitched-together tools." } },
    { "@type": "Question", name: "What is the cheapest GovCon platform with AI proposal writing?", acceptedAnswer: { "@type": "Answer", text: "As of 2026, CapturePilot at $199/month is the lowest-priced platform that includes AI proposal drafting, with a free tier for eligibility checking and top-5 match preview. GovDash starts at $500+/mo per seat. Sweetspot AI requires a custom-pricing sales call. Capture2Proposal charges $50-$150 per seat per month but manages proposals rather than drafting them with AI. Traditional research tools like GovWin and BGOV charge enterprise prices and do not include AI proposal drafting at all." } },
    { "@type": "Question", name: "Is SAM.gov enough, or do I need a paid tool?", acceptedAnswer: { "@type": "Answer", text: "SAM.gov is the official federal database and is free, but it is raw data — no matching, no scoring, no proposal help, and weak search filtering. Small businesses typically spend 15–25 hours per week sifting through irrelevant listings. A paid layer makes sense once your time is worth more than the subscription. CapturePilot ingests the same SAM.gov data daily but scores 37K+ opportunities against your NAICS / PSC / set-aside / geography profile and surfaces only matches you can realistically win." } },
    { "@type": "Question", name: "Can I switch from GovWin or BGOV to CapturePilot without losing data?", acceptedAnswer: { "@type": "Answer", text: "Yes. CapturePilot indexes the same SAM.gov contract opportunities and supplements them with USASpending.gov award data, SBIR.gov R&D opportunities, and SAM.gov registered-contractor records (1M+) for partner search. You do not need to export watchlists — CapturePilot's smart matching automatically surfaces the opportunities that fit your profile. Existing pursuits can be recreated in the Kanban pipeline in minutes, and onboarding (NAICS + set-aside + states) takes under 10 minutes." } },
  ],
};

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
}

const MATRIX_ROWS: MatrixRow[] = [
  { feature: "AI Proposal Drafts", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "partial", sweetspot: "yes", govdash: "yes" },
  { feature: "Capability Statement", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "no", sweetspot: "no", govdash: "no" },
  { feature: "Smart Matching", cp: "yes", govwin: "partial", govtribe: "partial", bgov: "no", highergov: "partial", federalCompass: "partial", unison: "partial", capture2: "no", sweetspot: "yes", govdash: "yes" },
  { feature: "Quick Checker", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "no", sweetspot: "no", govdash: "no" },
  { feature: "Market Intel", cp: "yes", govwin: "yes", govtribe: "partial", bgov: "yes", highergov: "yes", federalCompass: "yes", unison: "no", capture2: "no", sweetspot: "partial", govdash: "partial" },
  { feature: "Deal Pipeline", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "yes", sweetspot: "yes", govdash: "yes" },
  { feature: "Partner Search", cp: "yes", govwin: "yes", govtribe: "partial", bgov: "no", highergov: "yes", federalCompass: "partial", unison: "yes", capture2: "no", sweetspot: "no", govdash: "no" },
  { feature: "Consulting Support", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "no", capture2: "no", sweetspot: "no", govdash: "no" },
  { feature: "Email Alerts", cp: "yes", govwin: "yes", govtribe: "yes", bgov: "yes", highergov: "yes", federalCompass: "partial", unison: "partial", capture2: "no", sweetspot: "yes", govdash: "yes" },
  { feature: "Free Tier", cp: "yes", govwin: "no", govtribe: "no", bgov: "no", highergov: "no", federalCompass: "no", unison: "partial", capture2: "no", sweetspot: "no", govdash: "no" },
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
};

const COMPETITOR_SLUGS: Record<string, string> = {
  cp: "",
  govwin: "govwin",
  govtribe: "govtribe",
  bgov: "bgov",
  highergov: "highergov",
  federalCompass: "federal-compass",
  unison: "unison",
  capture2: "capture2proposal",
  sweetspot: "sweetspot",
  govdash: "govdash",
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
  { name: "EZGovOpps", slug: "ezgovopps", tagline: "Mid-market intel with analyst curation", icon: Award },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vsCollectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vsHubFaqJsonLd) }} />
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
              <div className="min-w-[1000px]">
                <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
                  {/* Header */}
                  <div className="grid" style={{ gridTemplateColumns: '2fr repeat(10, 1fr)' }}>
                    <div className="px-4 py-4 text-xs font-bold text-stone-400 uppercase tracking-wider border-b border-stone-200">
                      Feature
                    </div>
                    {COMPETITORS.map((key) => {
                      const slug = COMPETITOR_SLUGS[key];
                      const inner = (
                        <div
                          className={`px-2 py-4 text-xs font-bold text-center border-b ${
                            key === "cp"
                              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                              : "border-stone-200 text-stone-500 hover:text-emerald-600 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                          }`}
                        >
                          {COMPETITOR_LABELS[key]}
                          {key === "cp" && (
                            <div className="text-[9px] font-medium text-emerald-500 mt-0.5">You are here</div>
                          )}
                        </div>
                      );
                      return slug ? (
                        <Link key={key} href={`/vs/${slug}`}>{inner}</Link>
                      ) : (
                        <div key={key}>{inner}</div>
                      );
                    })}
                  </div>

                  {/* Rows */}
                  {MATRIX_ROWS.map((row, i) => (
                    <div
                      key={i}
                      className="grid border-b border-stone-100 last:border-b-0 hover:bg-stone-50 transition-colors"
                      style={{ gridTemplateColumns: '2fr repeat(10, 1fr)' }}
                    >
                      <div className="px-4 py-3 text-sm font-medium text-stone-700 flex items-center">
                        {row.feature}
                      </div>
                      {COMPETITORS.map((key) => {
                        const status = row[key as keyof MatrixRow] as CellStatus;
                        const slug = COMPETITOR_SLUGS[key];
                        const cell = (
                          <div
                            className={`px-2 py-3 flex items-center justify-center ${
                              key === "cp"
                                ? "bg-emerald-50/60"
                                : slug ? "cursor-pointer hover:bg-emerald-50/30 transition-colors" : ""
                            }`}
                          >
                            {row.feature === "Starting Price" || row.feature === "Email Alerts" ? (
                              row.feature === "Starting Price" ? (
                                <span className={`text-xs font-semibold ${key === "cp" ? "text-emerald-600" : "text-stone-500"}`}>
                                  {PRICE_LABELS[key]}
                                </span>
                              ) : (
                                <CellIcon status={status} />
                              )
                            ) : (
                              <CellIcon status={status} />
                            )}
                          </div>
                        );
                        return slug ? (
                          <Link key={key} href={`/vs/${slug}`}>{cell}</Link>
                        ) : (
                          <div key={key}>{cell}</div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 text-center mt-6">
              Click any competitor column to see the full comparison. Scroll
              horizontally on mobile. <span className="text-emerald-600">Green</span> = included, <span className="text-amber-500">amber</span> = partial, <span className="text-red-400">red</span> = not available.
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
                { label: "Pricing", href: "/pricing", icon: DollarSign },
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
