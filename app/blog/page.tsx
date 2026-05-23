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
  // Getting Started (10)
  { slug: "government-contracting-101", title: "Government Contracting 101: A Real Beginner's Guide", category: "Getting Started", readTime: "15 min", description: "If you've never sold to the government before, start here. We cover NAICS codes, SAM.gov, set-asides, and contract types in plain English, without the acronym soup.", featured: true },
  { slug: "how-to-find-government-contracts-small-business", title: "How Small Businesses Actually Find Government Contracts", category: "Getting Started", readTime: "18 min", description: "Most people open SAM.gov, get overwhelmed, and quit. Here's what works instead, including the daily search habits we use ourselves.", featured: true },
  { slug: "naics-codes-explained", title: "NAICS Codes, Explained Without the Headache", category: "Getting Started", readTime: "10 min", description: "What a NAICS code actually is, how to find the right ones for your business, and which codes the government spends the most money under." },
  { slug: "sam-registration-guide", title: "Getting Registered on SAM.gov (Without Losing a Week)", category: "Getting Started", readTime: "12 min", description: "SAM.gov registration is the gatekeeper for everything else. Here's the order to do it in, what trips most people up, and how to fix the common errors." },
  { slug: "best-naics-codes-small-business", title: "The NAICS Codes Where Small Businesses Actually Win", category: "Getting Started", readTime: "9 min", description: "Not every NAICS code is worth chasing. These are the ones where small firms win the most contracts, with the friendliest size standards." },
  { slug: "federal-contract-types-explained", title: "FFP, T&M, IDIQ: What These Contract Types Mean for You", category: "Getting Started", readTime: "11 min", description: "Fixed-price means you eat any overrun. Cost-plus means you don't. We break down what each contract type costs you in risk and what it pays in margin." },
  { slug: "federal-contracting-certifications", title: "Which Certifications Are Worth Actually Filing For", category: "Getting Started", readTime: "10 min", description: "There are seven main certifications. Some take a weekend to apply for, some take a year. Here's which ones move the needle and the order to chase them." },
  { slug: "subcontracting-government-contracts", title: "Why Subcontracting First Is Usually Smarter", category: "Getting Started", readTime: "8 min", description: "Bidding as a prime when you have no past performance is a long shot. Subcontracting under one is how most firms get their first federal revenue." },
  { slug: "federal-contracting-action-plan", title: "A 90-Day Plan to Land Your First Federal Contract", category: "Getting Started", readTime: "14 min", description: "Week-by-week, what to actually do. Drawn from the firms we've watched go from zero to their first award in three months." },
  { slug: "micro-purchase-threshold", title: "Micro-Purchases: The Sneaky-Easy Way In", category: "Getting Started", readTime: "7 min", description: "Anything under $10K can skip the whole RFP grind. Most beginners never hear about this, even though it's how a lot of veteran-owned firms got their first contract." },

  // Set-Asides (6)
  { slug: "set-aside-programs", title: "Set-Aside Programs and Why They Exist", category: "Set-Asides", readTime: "12 min", description: "The government carves out billions for small, veteran-owned, women-owned, and disadvantaged businesses. Here's who qualifies for what.", featured: true },
  { slug: "sdvosb-contracts-guide", title: "SDVOSB Contracts: What Veteran-Owned Firms Should Know", category: "Set-Asides", readTime: "13 min", description: "If you're SDVOSB-verified, agencies can hand you contracts up to $5M without a competition. We walk through who buys the most and how to get certified." },
  { slug: "wosb-certification-guide", title: "Getting WOSB Certified (and Why It's Worth It)", category: "Set-Asides", readTime: "11 min", description: "Women-owned firms have their own slice of federal contracting. Here's how to qualify, what the paperwork actually looks like, and where to find WOSB-only contracts." },
  { slug: "8a-sole-source-contracts", title: "The 8(a) Sole-Source Path: Fastest Route to Federal Revenue", category: "Set-Asides", readTime: "12 min", description: "If you qualify for 8(a), the government can award you up to $4.5M without anyone else bidding. The catch: you only have nine years to use the program." },
  { slug: "hubzone-program-guide", title: "HUBZone: When Your Address Is Your Edge", category: "Set-Asides", readTime: "10 min", description: "If your office and most of your employees live in a HUBZone tract, you qualify for a category of contracts almost nobody else can touch." },
  { slug: "small-business-set-aside-threshold", title: "The Dollar Thresholds That Trigger Set-Asides", category: "Set-Asides", readTime: "8 min", description: "When two or more small businesses can do the work, the contract has to be set aside for small businesses. We cover the exact dollar limits and how to use them." },

  // Proposals (5)
  { slug: "proposal-writing-tips", title: "10 Things That Actually Make a Federal Proposal Win", category: "Proposals", readTime: "14 min", description: "Most proposals lose not because they're bad, but because they miss a single requirement. Here's what experienced bidders pay attention to.", featured: true },
  { slug: "government-proposal-compliance-matrix", title: "The Compliance Matrix: Boring But Decisive", category: "Proposals", readTime: "9 min", description: "Skip the compliance matrix and your proposal gets thrown out in the first pass, no matter how good the technical writing is. Here's how to build one." },
  { slug: "government-rfp-response-guide", title: "Responding to Your First Federal RFP", category: "Proposals", readTime: "16 min", description: "Reading the RFP, building the outline, pricing it, packaging it, getting it submitted on time. A walkthrough for people doing this for the first time." },
  { slug: "past-performance-government-contracts", title: "Past Performance: How to Build It From Zero", category: "Proposals", readTime: "11 min", description: "Past performance can be a third of your evaluation score. If you don't have it yet, here's how firms in your shoes have built it." },
  { slug: "government-contract-pricing-strategies", title: "Pricing a Federal Bid Without Going Broke", category: "Proposals", readTime: "13 min", description: "The cheapest bid usually loses (or wins and bleeds money). We cover what reasonable pricing looks like and how to defend it." },

  // Strategy (3)
  { slug: "sources-sought-notice", title: "Sources Sought: The Highest-Leverage Thing Most Firms Skip", category: "Strategy", readTime: "10 min", description: "Responding to a Sources Sought notice takes maybe four hours and can shape the eventual RFP in your favor. Most small businesses never bother." },
  { slug: "government-contract-teaming-agreement", title: "Teaming Up Without Getting Screwed", category: "Strategy", readTime: "11 min", description: "Prime/sub partnerships open up contracts you can't win alone, but the agreement matters. We cover the clauses that actually protect you." },
  { slug: "government-contract-win-rate", title: "What a Realistic Win Rate Looks Like", category: "Strategy", readTime: "9 min", description: "If you're winning one in ten, you're doing fine. Here's why most firms lose and the bid/no-bid habits that improve your numbers." },

  // Marketing (2)
  { slug: "capability-statement-guide", title: "Writing a Capability Statement That Gets Read", category: "Marketing", readTime: "10 min", description: "Six sections, one page, no fluff. We cover what to include, the common mistakes, and how to make sure yours actually gets opened." },
  { slug: "capability-statement-examples", title: "Capability Statement Examples (the Good and the Embarrassing)", category: "Marketing", readTime: "8 min", description: "Side-by-side comparisons of capability statements that work and ones that don't, with notes on what makes the difference." },

  // Vehicles (2)
  { slug: "gsa-schedule-guide", title: "Is a GSA Schedule Actually Worth the Hassle?", category: "Vehicles", readTime: "12 min", description: "Getting on a GSA Schedule takes six to twelve months and costs real money. We do the math on when it's worth it and when it isn't." },
  { slug: "idiq-contracts-explained", title: "IDIQ Contracts and Why Primes Love Them", category: "Vehicles", readTime: "10 min", description: "Indefinite-quantity vehicles can give you years of steady task orders, but getting on one is a different game than winning a single RFP. Here's how the math works." },

  // Intelligence (1)
  { slug: "federal-spending-trends-2026", title: "Where Federal Money Is Actually Going in 2026", category: "Intelligence", readTime: "11 min", description: "Which agencies grew their budgets, which NAICS codes saw the biggest jumps, and where small-business contracting is genuinely accelerating." },

  // Tools (1)
  { slug: "sam-gov-search-tips", title: "SAM.gov Search Tips That Save Hours", category: "Tools", readTime: "9 min", description: "SAM.gov's native search is rough. These are the specific tricks we use to cut a 90-minute daily review down to about ten minutes." },
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
              <BookOpen className="w-4 h-4" /> {POSTS.length} guides · written by people who do this work
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
              How federal contracting<br />
              <span className="text-emerald-400">actually works</span>
            </h1>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-8">
              The stuff we wish someone had told us when we started bidding on federal contracts. NAICS codes, certifications, RFPs, pricing, the lot.
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
                <h2 className="text-xs uppercase tracking-widest font-bold text-stone-600">Start with these</h2>
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
            <p className="text-xs uppercase tracking-widest font-bold text-emerald-600 mb-3">Free, no signup</p>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
              Want to skip ahead and see what fits you?
            </h2>
            <p className="text-stone-600 mb-8 max-w-xl mx-auto">
              Drop in your website. In about 30 seconds you'll see your NAICS codes, your SAM.gov status, the set-asides you qualify for, and the contracts that match.
            </p>
            <Link
              href="https://app.capturepilot.com/check"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition-all hover:scale-105"
            >
              Try the free check <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
