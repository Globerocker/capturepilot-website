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
  Users,
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
  Target,
  Search,
  Mail,
  Mic,
  Palette,
  Headphones,
  ShoppingCart,
  AlertTriangle,
  Network,
  Store,
  Eye,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

/* ------------------------------------------------------------------ */
/*  Shimmer CSS                                                        */
/* ------------------------------------------------------------------ */

const shimmerCSS = `
.shimmer-bg {
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.dot-grid {
  background-image: radial-gradient(circle, #e7e5e4 1px, transparent 1px);
  background-size: 24px 24px;
}
.glow-border {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.15), 0 0 60px rgba(16, 185, 129, 0.05);
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.15); }
  50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.3); }
}
.animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
`;

/* ------------------------------------------------------------------ */
/*  Comparison table data                                              */
/* ------------------------------------------------------------------ */

type RowStatus = "yes" | "no" | "partial" | "text";

interface ComparisonRow {
  feature: string;
  capturepilot: string;
  cpStatus: RowStatus;
  competitor: string;
  compStatus: RowStatus;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "AI Proposal Writer", capturepilot: "Included", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Capability Statement Builder", capturepilot: "Voice input + AI", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Smart Matching Algorithm", capturepilot: "proprietary multi-factor scoring", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Quick Company Checker", capturepilot: "Free eligibility check", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Market Intelligence", capturepilot: "USASpending data", cpStatus: "yes", competitor: "Limited insights", compStatus: "partial" },
  { feature: "Deal Pipeline (Kanban CRM)", capturepilot: "Built-in", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Partner Search", capturepilot: "SAM.gov companies", cpStatus: "yes", competitor: "Marketplace model", compStatus: "yes" },
  { feature: "Eligibility Check", capturepilot: "Set-aside matching", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "IDIQ/Contract Vehicle Tracking", capturepilot: "Included", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Email Alerts", capturepilot: "Daily notifications", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Competitor Intelligence", capturepilot: "Award history + incumbents", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Consulting Support Tier", capturepilot: "Managed service option", cpStatus: "yes", competitor: "Advisory services", compStatus: "partial" },
  { feature: "Brand Color Extraction", capturepilot: "From your website", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Voice-to-Document", capturepilot: "Record, AI writes", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Free Tier Available", capturepilot: "Yes", cpStatus: "yes", competitor: "Freemium (limited)", compStatus: "partial" },
  { feature: "30-Day Free Trial (Pro)", capturepilot: "Yes", cpStatus: "yes", competitor: "Not available", compStatus: "no" },
  { feature: "Starting Price", capturepilot: "$199/mo flat", cpStatus: "text", competitor: "$200-600/mo", compStatus: "text" },
];

/* ------------------------------------------------------------------ */
/*  Platform vs Marketplace cards                                      */
/* ------------------------------------------------------------------ */

const MODEL_CARDS = [
  {
    icon: Brain,
    title: "CapturePilot: Your Intelligence Engine",
    points: [
      "AI scores every opportunity against YOUR profile",
      "proprietary multi-factor algorithm surfaces only what you can win",
      "AI drafts YOUR proposals and capability statements",
      "Pipeline tracks YOUR deals from discovery to award",
      "The platform works FOR you, not against you",
    ],
    side: "cp" as const,
  },
  {
    icon: Store,
    title: "Unison: A Marketplace",
    points: [
      "You compete with every other vendor for visibility",
      "Buyers browse and choose -- you hope to be found",
      "Teaming is the product, not intelligence",
      "Advisory services available but separate",
      "You're one profile among thousands",
    ],
    side: "other" as const,
  },
];

/* ------------------------------------------------------------------ */
/*  Marketplace Risk items                                             */
/* ------------------------------------------------------------------ */

const MARKETPLACE_RISKS = [
  {
    icon: ShoppingCart,
    title: "Pay-to-Play Dynamics",
    description: "In a marketplace model, visibility often correlates with how much you pay. Premium placement, featured profiles, promoted listings -- all cost extra. Your competitors are right next to you, bidding for the same attention.",
  },
  {
    icon: Users,
    title: "Competing for Attention",
    description: "On Unison, you are one vendor among thousands. Buyers browse through profiles like a catalog. With CapturePilot, there is no competition for visibility -- the AI works exclusively for you, finding and qualifying opportunities that match your capabilities.",
  },
  {
    icon: AlertTriangle,
    title: "Dependency on the Platform",
    description: "Marketplace models create dependency. If Unison changes its algorithm, raises prices, or favors competitors, your pipeline is affected. CapturePilot gives you direct intelligence from SAM.gov and USASpending -- data you control.",
  },
  {
    icon: Network,
    title: "Teaming Is Not a Strategy",
    description: "Unison's core value proposition is connecting primes with subs. But teaming is one tactic, not a capture strategy. CapturePilot gives you the full pipeline: find opportunities, score them, understand the competition, and draft the proposal.",
  },
];

/* ------------------------------------------------------------------ */
/*  Value comparison                                                   */
/* ------------------------------------------------------------------ */

const VALUE_ITEMS = [
  { label: "AI Proposal Writer", icon: FileText },
  { label: "Capability Statement Builder", icon: BadgeCheck },
  { label: "140-Point Smart Matching", icon: Target },
  { label: "Deal Pipeline CRM", icon: BarChart3 },
  { label: "Competitor Intelligence", icon: Eye },
  { label: "Partner Search (SAM.gov)", icon: Search },
  { label: "Daily Email Alerts", icon: Mail },
  { label: "Voice-to-Document", icon: Mic },
  { label: "Brand Color Extraction", icon: Palette },
  { label: "Market Intelligence", icon: TrendingUp },
  { label: "Consulting Support Tier", icon: Headphones },
  { label: "Free Eligibility Checker", icon: Shield },
];

/* ------------------------------------------------------------------ */
/*  Status icon helper                                                 */
/* ------------------------------------------------------------------ */

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === "yes") return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
  if (status === "no") return <XCircle className="w-5 h-5 text-red-400" />;
  if (status === "partial") return <Minus className="w-5 h-5 text-amber-500" />;
  return null;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VsUnisonPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SiteNav />
      <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />

      <title>CapturePilot vs Unison — Compare Features & Pricing | CapturePilot</title>
      <meta
        name="description"
        content="Compare CapturePilot vs Unison. AI-powered government contract intelligence vs a vendor marketplace. Smart matching, AI proposals, and capability statements -- all for $199/mo."
      />
      <meta name="keywords" content="Unison alternative, Unison vs CapturePilot, government contract software, GovCon marketplace alternative, federal contracting platform, teaming platform" />
      <meta property="og:title" content="CapturePilot vs Unison — Intelligence, Not a Marketplace" />
      <meta property="og:description" content="Your AI intelligence engine vs a vendor marketplace. Smart matching, AI proposals, and capability statements built for small businesses." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.capturepilot.com/vs/unison" />

      <main className="pt-16">
        {/* ============================================================ */}
        {/*  HERO — Dark section with shimmer                            */}
        {/* ============================================================ */}
        <section className="relative overflow-hidden bg-stone-950 py-28 md:py-36">
          <div className="shimmer-bg pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up animate-pulse-glow">
              <Zap className="w-3.5 h-3.5" />
              Competitor Comparison
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white animate-fade-in-up animate-delay-100">
              Intelligence,{" "}
              <span className="gradient-text">Not a Marketplace</span>
            </h1>

            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              Unison connects buyers and sellers in a marketplace.
              CapturePilot is your personal AI engine that finds, scores, and helps you win government contracts.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-emerald-500 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#comparison"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/20 transition-colors"
              >
                See Full Comparison
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  COMPARISON TABLE — Light section with dot grid               */}
        {/* ============================================================ */}
        <section id="comparison" className="relative py-24">
          <div className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Feature-by-Feature{" "}
                <span className="gradient-text">Comparison</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                See how CapturePilot compares to Unison across every feature
                that matters for winning government contracts.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden animate-fade-in-up">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200">
                <div className="px-6 py-4 text-sm font-bold text-stone-500 uppercase tracking-wider">
                  Feature
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center">
                  <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    CapturePilot
                  </span>
                </div>
                <div className="px-6 py-4 text-sm font-bold text-center">
                  <span className="text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    Unison
                  </span>
                </div>
              </div>

              {/* Table rows */}
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-b border-stone-100 last:border-b-0 transition-colors duration-200 hover:bg-stone-50/60 ${
                    i % 2 === 0 ? "bg-white" : "bg-stone-50/30"
                  }`}
                >
                  <div className="px-6 py-4 text-sm font-medium text-stone-700 flex items-center">
                    {row.feature}
                  </div>
                  <div className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2 bg-emerald-50/20">
                    <StatusIcon status={row.cpStatus} />
                    <span className={row.cpStatus === "yes" ? "text-emerald-700 font-medium" : "text-stone-600"}>
                      {row.capturepilot}
                    </span>
                  </div>
                  <div className="px-6 py-4 text-sm text-center flex items-center justify-center gap-2">
                    <StatusIcon status={row.compStatus} />
                    <span className={row.compStatus === "yes" ? "text-stone-700 font-medium" : row.compStatus === "partial" ? "text-amber-600 font-medium" : row.compStatus === "no" ? "text-stone-400" : "text-stone-600"}>
                      {row.competitor}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-400 text-center mt-4">
              Comparison based on publicly available information as of April 2026.
              Unison is a trademark of its respective owner.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  PLATFORM VS MARKETPLACE — Dark section                      */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-900">
          <div className="shimmer-bg pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Platform vs{" "}
                <span className="gradient-text">Marketplace</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                CapturePilot is your personal intelligence engine.
                Unison is a marketplace where you compete for visibility. Fundamentally different models.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {MODEL_CARDS.map((card, i) => {
                const Icon = card.icon;
                const isCp = card.side === "cp";
                return (
                  <div
                    key={i}
                    className={`rounded-2xl p-8 hover-lift animate-fade-in-up ${
                      isCp
                        ? "bg-gradient-to-br from-emerald-950/80 to-emerald-900/40 border-2 border-emerald-700/50 glow-border"
                        : "bg-stone-800/60 border border-stone-700/50"
                    }`}
                    style={{ animationDelay: `${i * 150}ms`, opacity: 0 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isCp ? "bg-emerald-600/20" : "bg-stone-700/50"
                    }`}>
                      <Icon className={`w-6 h-6 ${isCp ? "text-emerald-400" : "text-stone-400"}`} />
                    </div>
                    <h3 className={`text-lg font-bold mb-4 ${isCp ? "text-emerald-300" : "text-stone-300"}`}>
                      {card.title}
                    </h3>
                    <ul className="space-y-3">
                      {card.points.map((point, pi) => (
                        <li key={pi} className={`flex items-start gap-3 text-sm ${isCp ? "text-emerald-200/70" : "text-stone-500"}`}>
                          {isCp ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          ) : (
                            <Minus className="w-4 h-4 text-stone-600 mt-0.5 shrink-0" />
                          )}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  WHAT YOU GET — Light with dot grid                           */}
        {/* ============================================================ */}
        <section className="relative py-24">
          <div className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                What You Get for{" "}
                <span className="gradient-text">$199/mo</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                One flat price. No per-seat charges. No marketplace fees.
                Every tool you need to find, qualify, and win government contracts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {VALUE_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium text-stone-700">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Unison pricing */}
              <div className="bg-white border border-stone-200 rounded-2xl p-8 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 bg-stone-300 text-stone-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  UNISON
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-stone-400 mb-1">Paid tiers</p>
                  <p className="text-4xl font-extrabold text-stone-800 tracking-tight">
                    $200<span className="text-2xl text-stone-400"> - $600</span><span className="text-lg font-medium text-stone-400">/mo</span>
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Marketplace listing fees",
                    "Premium placement costs extra",
                    "Advisory services billed separately",
                    "Limited free tier",
                    "Teaming focused -- not full pipeline",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-stone-500">
                      <Minus className="w-4 h-4 text-stone-300 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CapturePilot pricing */}
              <div className="bg-gradient-to-br from-emerald-50 to-sky-50 border-2 border-emerald-300 rounded-2xl p-8 relative overflow-hidden shadow-xl shadow-emerald-100/50 glow-border">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                  CAPTUREPILOT
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-emerald-600 mb-1">Flat rate, cancel anytime</p>
                  <p className="text-4xl font-extrabold text-stone-800 tracking-tight">
                    $199<span className="text-lg font-medium text-stone-400">/mo</span>
                  </p>
                  <p className="text-sm text-emerald-600 font-medium mt-1">
                    Everything included. No hidden fees.
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Full team access included",
                    "AI drafts proposals for you",
                    "proprietary multi-factor smart matching",
                    "Free tier + 30-day Pro trial",
                    "Complete pipeline: discover to deliver",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  MARKETPLACE RISK — Dark section                              */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950">
          <div className="shimmer-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                The Marketplace{" "}
                <span className="gradient-text">Risk</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Marketplaces work for the platform, not for you. Here is why an AI engine
                that works exclusively for your business is fundamentally better.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {MARKETPLACE_RISKS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-8 hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-900/30 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-lg font-bold text-stone-200 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-emerald-950/50 border border-emerald-800/50 rounded-full px-6 py-3">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-400">
                  With CapturePilot, the AI works FOR you -- not the marketplace
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CROSS-LINKS — Light with dot grid                           */}
        {/* ============================================================ */}
        <section className="relative py-16 border-t border-stone-100">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative max-w-4xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-stone-400 uppercase tracking-wider mb-8">
              More Comparisons
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "vs GovWin", href: "/vs/govwin", icon: BarChart3 },
                { label: "vs Federal Compass", href: "/vs/federal-compass", icon: Target },
                { label: "vs Capture2Proposal", href: "/vs/capture2proposal", icon: FileText },
                { label: "vs HigherGov", href: "/vs/highergov", icon: TrendingUp },
              ].map((link, i) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center gap-3 bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-200 rounded-xl px-4 py-3 transition-all group"
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

        {/* ============================================================ */}
        {/*  CTA — Dark section with shimmer                             */}
        {/* ============================================================ */}
        <section className="relative py-24 bg-stone-950">
          <div className="shimmer-bg pointer-events-none absolute inset-0" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
              Your AI Engine,{" "}
              <span className="gradient-text">Not a Catalog Listing</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              Stop competing for visibility on a marketplace.
              Get an AI-powered platform that finds opportunities, scores them, and drafts your proposals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-500 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CHECK_URL}
                className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 px-8 py-4 rounded-full font-bold text-base hover:border-stone-400 hover:text-white transition-colors"
              >
                Free Company Check <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-stone-600 mt-6">
              No credit card required. Free tier available. Cancel anytime.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
