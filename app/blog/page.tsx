"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import {
  BookOpen, ArrowRight, Clock, Search, Sparkles, Compass, Shield, Award,
  TrendingUp, FileText, Wrench, Building2, BarChart3, Target,
} from "lucide-react";

/* ─── Category styling ──────────────────────────────────────────── */
type CategoryKey =
  | "Getting Started"
  | "Set-Asides"
  | "Proposals"
  | "Strategy"
  | "Marketing"
  | "Vehicles"
  | "Intelligence"
  | "Tools";

interface CategoryStyle {
  icon: React.ElementType;
  border: string;
  bg: string;
  text: string;
  badge: string;
  iconBg: string;
}

const CATEGORY_STYLES: Record<CategoryKey, CategoryStyle> = {
  "Getting Started":  { icon: Compass,    border: "border-l-emerald-500", bg: "bg-emerald-50/40", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800 border-emerald-200", iconBg: "bg-emerald-100 text-emerald-600" },
  "Set-Asides":       { icon: Shield,     border: "border-l-purple-500",  bg: "bg-purple-50/40",  text: "text-purple-700",  badge: "bg-purple-100 text-purple-800 border-purple-200",   iconBg: "bg-purple-100 text-purple-600" },
  "Proposals":        { icon: FileText,   border: "border-l-blue-500",    bg: "bg-blue-50/40",    text: "text-blue-700",    badge: "bg-blue-100 text-blue-800 border-blue-200",         iconBg: "bg-blue-100 text-blue-600" },
  "Strategy":         { icon: Target,     border: "border-l-amber-500",   bg: "bg-amber-50/40",   text: "text-amber-700",   badge: "bg-amber-100 text-amber-800 border-amber-200",      iconBg: "bg-amber-100 text-amber-600" },
  "Marketing":        { icon: Sparkles,   border: "border-l-pink-500",    bg: "bg-pink-50/40",    text: "text-pink-700",    badge: "bg-pink-100 text-pink-800 border-pink-200",         iconBg: "bg-pink-100 text-pink-600" },
  "Vehicles":         { icon: Building2,  border: "border-l-teal-500",    bg: "bg-teal-50/40",    text: "text-teal-700",    badge: "bg-teal-100 text-teal-800 border-teal-200",         iconBg: "bg-teal-100 text-teal-600" },
  "Intelligence":     { icon: BarChart3,  border: "border-l-indigo-500",  bg: "bg-indigo-50/40",  text: "text-indigo-700",  badge: "bg-indigo-100 text-indigo-800 border-indigo-200",   iconBg: "bg-indigo-100 text-indigo-600" },
  "Tools":            { icon: Wrench,     border: "border-l-stone-500",   bg: "bg-stone-50/40",   text: "text-stone-700",   badge: "bg-stone-100 text-stone-800 border-stone-200",      iconBg: "bg-stone-200 text-stone-700" },
};

interface Post {
  slug: string;
  title: string;
  category: CategoryKey;
  readTime: string;
  description: string;
  /** Optional: surface in top hero strip. */
  featured?: boolean;
}

/* ─── All 30 published blog posts ───────────────────────────────── */
const POSTS: Post[] = [
  // Getting Started (8)
  { slug: "government-contracting-101", title: "Government Contracting 101: Complete Beginner's Guide", category: "Getting Started", readTime: "15 min", description: "Everything you need to know about selling to the federal government. NAICS codes, SAM.gov, set-asides, contract types, and step-by-step instructions.", featured: true },
  { slug: "how-to-find-government-contracts-small-business", title: "How to Find Government Contracts as a Small Business (2026)", category: "Getting Started", readTime: "18 min", description: "Step-by-step playbook to find federal contracts you can actually win. SAM.gov, Sources Sought, set-asides, and the tools that cut 20 hours of search per week.", featured: true },
  { slug: "naics-codes-explained", title: "NAICS Codes Explained: Find the Right Codes for Your Business", category: "Getting Started", readTime: "10 min", description: "What NAICS codes are, why they matter, how to find yours, and the top codes for small business government contractors." },
  { slug: "sam-registration-guide", title: "SAM.gov Registration: Step-by-Step Guide (2026)", category: "Getting Started", readTime: "12 min", description: "Complete walkthrough of SAM.gov registration. Prerequisites, 8-step process, common issues, and renewal requirements." },
  { slug: "best-naics-codes-small-business", title: "The 10 Best NAICS Codes for Small Business Contractors", category: "Getting Started", readTime: "9 min", description: "The NAICS codes that consistently produce the most small-business federal awards — by volume, win-rate, and size-standard friendliness." },
  { slug: "federal-contract-types-explained", title: "Federal Contract Types Explained: FFP, T&M, IDIQ, and Which to Pursue", category: "Getting Started", readTime: "11 min", description: "Firm-fixed-price, time-and-materials, cost-plus, IDIQ — what each contract type means for risk, margin, and how you bid." },
  { slug: "federal-contracting-certifications", title: "Federal Contracting Certifications: Which Ones Actually Help You Win", category: "Getting Started", readTime: "10 min", description: "8(a), SDVOSB, WOSB, HUBZone, EDWOSB — what each certification unlocks, who qualifies, and the order to pursue them in." },
  { slug: "subcontracting-government-contracts", title: "Subcontracting on Government Contracts: Your First Step Into Federal", category: "Getting Started", readTime: "8 min", description: "Why subcontracting is the fastest way to build past performance. How to find primes, position yourself, and avoid the worst teaming agreements." },
  { slug: "federal-contracting-action-plan", title: "Your 90-Day Federal Contracting Action Plan", category: "Getting Started", readTime: "14 min", description: "Week-by-week roadmap to land your first federal contract in 90 days. Built from real small-business case studies." },
  { slug: "micro-purchase-threshold", title: "Micro-Purchase Threshold: The Easiest Way to Start Selling to the Government", category: "Getting Started", readTime: "7 min", description: "How $10K micro-purchases let you skip the whole proposal grind, build past performance fast, and get federal revenue flowing." },

  // Set-Asides (6)
  { slug: "set-aside-programs", title: "Government Set-Aside Programs: Your Unfair Advantage", category: "Set-Asides", readTime: "12 min", description: "Complete guide to 8(a), SDVOSB, WOSB, EDWOSB, HUBZone, and SDB set-aside programs with eligibility requirements.", featured: true },
  { slug: "sdvosb-contracts-guide", title: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses", category: "Set-Asides", readTime: "13 min", description: "Service-Disabled Veteran-Owned Small Business contracts — sole-source up to $5M, top buying agencies, and the VetCert filing path." },
  { slug: "wosb-certification-guide", title: "WOSB Certification: How Women-Owned Businesses Win Federal Contracts", category: "Set-Asides", readTime: "11 min", description: "Women-Owned Small Business + EDWOSB programs. Eligibility, the SBA certification process, and how to find WOSB-only contracts." },
  { slug: "8a-sole-source-contracts", title: "8(a) Sole-Source Contracts: The Fastest Path to Federal Revenue", category: "Set-Asides", readTime: "12 min", description: "How 8(a) firms can win sole-source contracts up to $4.5M without competition. Eligibility, the 9-year clock, and capture strategy." },
  { slug: "hubzone-program-guide", title: "HUBZone Program: How Location Can Win You Government Contracts", category: "Set-Asides", readTime: "10 min", description: "HUBZone certification, designated tract map, employee residency rules, and the contracts reserved exclusively for HUBZone firms." },
  { slug: "small-business-set-aside-threshold", title: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know", category: "Set-Asides", readTime: "8 min", description: "The exact dollar thresholds that trigger small-business set-asides under the Rule of Two — and how to position your bid around them." },

  // Proposals (5)
  { slug: "proposal-writing-tips", title: "10 Government Proposal Writing Tips That Actually Win Contracts", category: "Proposals", readTime: "14 min", description: "Proven tips from compliance matrices to pricing strategy. Plus how AI can help you draft faster.", featured: true },
  { slug: "government-proposal-compliance-matrix", title: "How to Build a Compliance Matrix for Government Proposals", category: "Proposals", readTime: "9 min", description: "The single most important artifact in your proposal — what goes in it, how to format it, and why missing requirements gets you eliminated." },
  { slug: "government-rfp-response-guide", title: "How to Respond to a Government RFP: Step-by-Step for First-Timers", category: "Proposals", readTime: "16 min", description: "Reading the RFP, building the outline, writing each section, pricing, packaging, and submission — without the rookie mistakes." },
  { slug: "past-performance-government-contracts", title: "Past Performance in Government Contracts: Why It Matters and How to Build It", category: "Proposals", readTime: "11 min", description: "Past performance can be 30% of your evaluation score. How to build it from zero, document it correctly, and present it in proposals." },
  { slug: "government-contract-pricing-strategies", title: "Government Contract Pricing: Strategies to Win Without Losing Money", category: "Proposals", readTime: "13 min", description: "Cost-plus, fixed-price, and competitive pricing — including price-to-win analysis and how to avoid the unprofitable contract trap." },

  // Strategy (3)
  { slug: "sources-sought-notice", title: "Sources Sought Notices: How to Get In Early and Shape the RFP", category: "Strategy", readTime: "10 min", description: "Sources Sought responses are the highest-leverage capture activity in federal contracting. Why, when, and exactly what to write." },
  { slug: "government-contract-teaming-agreement", title: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts", category: "Strategy", readTime: "11 min", description: "Prime/sub teaming, joint ventures, mentor-protégé — when to team, who to team with, and the contract clauses that protect you." },
  { slug: "government-contract-win-rate", title: "Government Contract Win Rates: What's Realistic and How to Improve Yours", category: "Strategy", readTime: "9 min", description: "Industry benchmark win rates, why most firms lose, and the bid/no-bid discipline that doubles your hit rate." },

  // Marketing (2)
  { slug: "capability-statement-guide", title: "How to Write a Capability Statement That Wins Contracts", category: "Marketing", readTime: "10 min", description: "The 6 essential sections, design tips, common mistakes, and how AI can build yours in minutes." },
  { slug: "capability-statement-examples", title: "Capability Statement Examples: What Good (and Bad) Ones Look Like", category: "Marketing", readTime: "8 min", description: "Side-by-side examples of strong vs weak capability statements — and the specific design + content moves that win meetings." },

  // Vehicles (2)
  { slug: "gsa-schedule-guide", title: "GSA Schedule Contracts: Is a GSA Schedule Right for Your Business?", category: "Vehicles", readTime: "12 min", description: "GSA MAS schedules cost $25K+ to get on and 6-12 months. The math on whether the access is worth it for your business model." },
  { slug: "idiq-contracts-explained", title: "IDIQ Contracts Explained: How to Get on a Multi-Year Contract Vehicle", category: "Vehicles", readTime: "10 min", description: "Indefinite-Delivery / Indefinite-Quantity contracts — how task orders work, why they're a steady revenue base, and how to bid your way onto one." },

  // Intelligence (1)
  { slug: "federal-spending-trends-2026", title: "Federal Spending Trends 2026: Where the Government Is Investing", category: "Intelligence", readTime: "11 min", description: "Where the biggest federal-budget growth is happening this year — by agency, NAICS, and program area — so you can position ahead of it." },

  // Tools (1)
  { slug: "sam-gov-search-tips", title: "SAM.gov Search Tips: Stop Wasting Time and Find Real Opportunities", category: "Tools", readTime: "9 min", description: "The non-obvious SAM.gov search techniques that cut your daily search time from 90 minutes to 10 — without missing relevant opps." },
];

/* ─── JSON-LD ────────────────────────────────────────────────────── */
const BASE = "https://www.capturepilot.com";
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "CapturePilot Blog — Government Contracting Guides & Strategies",
  description: "Practical, practitioner-written guides for small businesses breaking into federal government contracting.",
  url: `${BASE}/blog`,
  isPartOf: { "@type": "WebSite", name: "CapturePilot", url: BASE },
  publisher: { "@type": "Organization", name: "CapturePilot", logo: { "@type": "ImageObject", url: `${BASE}/logo.png` } },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: POSTS.length,
    itemListElement: POSTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/blog/${p.slug}`,
      name: p.title,
    })),
  },
};

/* ─── Page ───────────────────────────────────────────────────────── */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | CategoryKey>("All");
  const [query, setQuery] = useState("");

  const categoriesWithCounts = useMemo(() => {
    const counts = new Map<CategoryKey, number>();
    for (const p of POSTS) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([cat, n]) => ({ cat, n }));
  }, []);

  const featured = useMemo(() => POSTS.filter(p => p.featured).slice(0, 3), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => {
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (q && !`${p.title} ${p.description}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [activeCategory, query]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <SiteNav />
      <main className="pt-16">
        {/* ─── Hero ─── */}
        <section className="py-16 md:py-20 px-6 bg-stone-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-50" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" /> {POSTS.length} GovCon Guides · Updated 2026
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              The Government Contracting<br />
              <span className="text-emerald-400">Playbook</span>
            </h1>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-8">
              Practical, practitioner-written guides for small businesses breaking into federal contracting. No fluff, no AI slop — just what actually works.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search guides — NAICS, SDVOSB, RFP…"
                  className="w-full pl-11 pr-4 py-3 bg-stone-900 border border-stone-700 rounded-full text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Category pills ─── */}
        <section className="sticky top-[6.5rem] z-30 bg-white/95 backdrop-blur-lg border-b border-stone-100 py-3 px-6">
          <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === "All"
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              All <span className="opacity-60 ml-1">{POSTS.length}</span>
            </button>
            {categoriesWithCounts.map(({ cat, n }) => {
              const style = CATEGORY_STYLES[cat];
              const Icon = style.icon;
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    active
                      ? `${style.badge} ${style.text.replace('text-', 'border-').replace('-700', '-400')} shadow-sm`
                      : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  <Icon className={`w-3 h-3 ${active ? "" : "opacity-60"}`} />
                  {cat}
                  <span className="opacity-60">{n}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ─── Featured strip (only shown on All view + no query) ─── */}
        {activeCategory === "All" && !query && (
          <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-stone-50 to-white">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-4 h-4 text-amber-500" />
                <h2 className="text-xs uppercase tracking-widest font-bold text-stone-600">Most-Read Guides</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {featured.map((post, i) => {
                  const style = CATEGORY_STYLES[post.category];
                  const Icon = style.icon;
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-stone-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                      {/* Visual hero */}
                      <div className={`h-32 ${style.bg} relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                          backgroundSize: '24px 24px',
                          color: 'currentColor',
                        }} />
                        <div className={`relative w-16 h-16 rounded-2xl ${style.iconBg} flex items-center justify-center shadow-md`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                          Top #{i + 1}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${style.badge}`}>
                            {post.category}
                          </span>
                          <span className="text-xs text-stone-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-stone-900 group-hover:text-stone-700 mb-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-sm text-stone-500 leading-relaxed mb-4 flex-1">
                          {post.description}
                        </p>
                        <span className="text-sm font-bold text-emerald-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read article <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─── Main grid ─── */}
        <section className="py-12 md:py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-10 h-10 text-stone-300 mx-auto mb-3" />
                <p className="text-stone-600 font-medium">No guides found.</p>
                <p className="text-sm text-stone-400 mt-1">Try a different search or category.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs uppercase tracking-widest font-bold text-stone-600">
                    {activeCategory === "All" ? "All Guides" : activeCategory}
                    <span className="ml-2 text-stone-400">· {filtered.length}</span>
                  </p>
                  {(activeCategory !== "All" || query) && (
                    <button
                      type="button"
                      onClick={() => { setActiveCategory("All"); setQuery(""); }}
                      className="text-xs font-bold text-stone-500 hover:text-stone-700 transition-colors"
                    >
                      Reset filter →
                    </button>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((post) => {
                    const style = CATEGORY_STYLES[post.category];
                    const Icon = style.icon;
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={`group bg-white rounded-2xl border border-stone-200 border-l-4 ${style.border} p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-10 h-10 rounded-xl ${style.iconBg} flex items-center justify-center`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-xs text-stone-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${style.badge} mb-3`}>
                          {post.category}
                        </span>
                        <h2 className="text-base font-bold text-stone-900 group-hover:text-stone-700 mb-2 leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-sm text-stone-500 leading-relaxed mb-4 flex-1">
                          {post.description}
                        </p>
                        <span className={`text-sm font-bold ${style.text} inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                          Read article <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ─── CTA strip ─── */}
        <section className="py-16 px-6 bg-stone-50 border-t border-stone-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest font-bold text-emerald-600 mb-3">Free Tool</p>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
              Reading is great. Winning is better.
            </h2>
            <p className="text-stone-600 mb-8 max-w-xl mx-auto">
              Run our free 30-second Quick Checker. Get your NAICS codes, SAM.gov status, set-aside eligibility, and live matching contracts.
            </p>
            <Link
              href="https://app.capturepilot.com/check"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-all hover:scale-105"
            >
              Run Free Check <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
