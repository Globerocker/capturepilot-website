"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  ChevronRight,
  DollarSign,
  Target,
  TrendingUp,
  Search,
  Database,
  BarChart3,
  Building2,
  Zap,
  Globe,
  Activity,
  RefreshCw,
  FileText,
  Eye,
  Filter,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-it-matters", label: "Why Award Tracking Gives You an Unfair Advantage" },
  { id: "big-picture", label: "The $793 Billion Market You're Not Watching" },
  { id: "fpds-gone", label: "FPDS Is Gone — What Replaced It" },
  { id: "usaspending", label: "USASpending.gov: Free Competitive Intelligence" },
  { id: "sam-gov-awards", label: "SAM.gov Contract Award Search: Step-by-Step" },
  { id: "competitor-profile", label: "Building a Competitor Intelligence Profile" },
  { id: "recompetes", label: "Finding Recompetes: Contracts Expiring Soon" },
  { id: "reading-data", label: "What Award Patterns Actually Tell You" },
  { id: "into-pipeline", label: "Turning Award Data Into Your Pipeline" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "rose";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    rose: "bg-rose-50 border-rose-200 text-rose-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    rose: "text-rose-600",
  };
  return (
    <div className={`rounded-2xl border p-6 my-8 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColors[color]}`} />
        <p className="font-bold text-sm">{title}</p>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeading({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-6 pt-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function TrackGovernmentContractAwardsPage() {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll(".animate-on-scroll");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-in-up");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">Track Government Contract Awards</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Database className="w-4 h-4" /> Tools
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Track Government Contract Awards:{" "}
            <span className="gradient-text">USASpending.gov and SAM.gov Guide</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded <strong className="text-stone-700">$793 billion</strong>{" "}
            in contracts in FY2025. Every single award is public record — who won it, how much it was
            worth, which agency paid, and when it expires. Most small businesses never look at this
            data. The ones who do win more bids.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published September 8, 2026</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-stone-600" />
              <h2 className="font-bold text-stone-900">Table of Contents</h2>
            </div>
            <nav className="grid sm:grid-cols-2 gap-2">
              {TOC.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors py-1"
                >
                  <span className="text-blue-600 font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article ref={articleRef} className="px-6 pb-20">
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <SectionHeading id="why-it-matters" number="01" title="Why Award Tracking Gives You an Unfair Advantage" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most small businesses approach government contracting the same way: find an open solicitation on SAM.gov, write a proposal, submit it, wait. That approach puts you in competition with every other firm that found the same listing on the same day. You have no context, no history, and no edge.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Award tracking flips that. When you know who already holds a contract, what they were paid, and when that contract expires, you can do something your competitors can&apos;t: show up before the solicitation drops. You contact the agency. You understand the incumbent. You position your capability statement against what the government already bought, not a generic description of what you sell.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Every unclassified federal contract action above the micro-purchase threshold is a public record — required by law. The data is free, it&apos;s updated frequently, and almost nobody in the small business market uses it systematically. That gap is your opportunity.
            </p>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="The Intel Advantage">
            Contractors who research incumbents and expiring contracts before an RFP drops win at roughly 2–3x the rate of cold responders, according to GovCon industry surveys. The time investment — a few hours per opportunity — pays for itself on a single award.
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="big-picture" number="02" title="The $793 Billion Market You're Probably Not Watching" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The federal government spent approximately <strong>$793 billion</strong> on contracts in fiscal year 2025 — up from $755.1 billion in FY2024. That&apos;s not grants, not transfer payments, not salaries. That&apos;s money paid to private companies for goods and services.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Small businesses captured <strong>$179 billion</strong> of that as prime contractors, representing 27.8% of all federal prime contracting dollars. The statutory goal is 23%. The government exceeded it — again. When you add subcontract awards, the total flowing to small businesses reaches an estimated $273 billion.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              { label: "Total FY2025 contract spending", value: "$793B", sub: "Up from $755.1B in FY2024", color: "blue" },
              { label: "Small business prime contracts", value: "$179B", sub: "27.8% of all federal contract dollars", color: "emerald" },
              { label: "SDVOSB prime contracts", value: "$32.5B", sub: "5% of all prime contract dollars", color: "sky" },
              { label: "8(a) prime contracts", value: "$24.3B", sub: "3.7% — down $1.5B from prior year", color: "amber" },
            ].map((stat) => {
              const borderColors: Record<string, string> = {
                blue: "border-blue-200 bg-blue-50",
                emerald: "border-emerald-200 bg-emerald-50",
                sky: "border-sky-200 bg-sky-50",
                amber: "border-amber-200 bg-amber-50",
              };
              const textColors: Record<string, string> = {
                blue: "text-blue-700",
                emerald: "text-emerald-700",
                sky: "text-sky-700",
                amber: "text-amber-700",
              };
              return (
                <div key={stat.label} className={`rounded-xl border p-5 ${borderColors[stat.color]}`}>
                  <p className={`text-3xl font-black mb-1 ${textColors[stat.color]}`}>{stat.value}</p>
                  <p className="font-semibold text-stone-800 text-sm">{stat.label}</p>
                  <p className="text-stone-500 text-xs mt-1">{stat.sub}</p>
                </div>
              );
            })}
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Small Disadvantaged Businesses (SDBs) received $75.3 billion, or 11.6% of prime contracts — down slightly from 12.27% in FY2024. Service-disabled veteran-owned small businesses (SDVOSBs) received $32.5 billion, and 8(a) firms captured $24.3 billion, a drop of $1.5 billion from the prior year that many practitioners attribute to program graduation and tighter agency budgets.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              These numbers look encouraging on paper. But here&apos;s the catch: the SBA estimates the number of small businesses actively participating in the federal market has declined significantly over the past 15 years. A smaller pool of vendors is splitting a larger pie. That means the competition is increasingly between repeat players — firms that know how to find, track, and pursue opportunities before others even learn they exist.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Who Gets Most of the Small Business Dollars">
            The federal government&apos;s small business dollars are heavily concentrated. The top few hundred small business contractors win a disproportionate share of total awards. Breaking into that group requires acting like them — which means working the data, not waiting for RFPs.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="fpds-gone" number="03" title="FPDS Is Gone — What Replaced It" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              If you&apos;ve been in government contracting for more than a few years, you know FPDS-NG — the Federal Procurement Data System. For decades it was the government&apos;s official repository for contract award data. Contractors used it to research incumbents, track competitors, and identify expiring contracts.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>FPDS.gov was decommissioned on February 24, 2026.</strong> All public-facing FPDS functionality has migrated to SAM.gov. Every contract action that used to live in FPDS is now accessible through SAM.gov&apos;s Contracting section. The underlying data is the same — the same fields, the same contract actions, the same historical records. The interface and access method changed.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For macro-level spending analysis — aggregate spending by agency, geography, object class, or recipient — USASpending.gov remains the primary tool. It pulls from the same underlying federal data systems and presents it through a more interactive, visualization-forward interface. Think of it this way: SAM.gov shows you individual contract records; USASpending.gov shows you the patterns.
            </p>
          </div>

          {/* Tool Comparison Table */}
          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Tool</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold">Account Required</th>
                  <th className="px-4 py-3 text-left font-semibold">Update Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">SAM.gov Contract Awards</td>
                  <td className="px-4 py-3 text-stone-600">Individual contract records, incumbent lookup, modification history</td>
                  <td className="px-4 py-3 text-stone-600">Login.gov account for full access</td>
                  <td className="px-4 py-3 text-stone-600">Near real-time</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">USASpending.gov</td>
                  <td className="px-4 py-3 text-stone-600">Spending analysis, agency trends, recipient profiles, bulk downloads</td>
                  <td className="px-4 py-3 text-stone-600">No account needed for search</td>
                  <td className="px-4 py-3 text-stone-600">Updated on ~2-week cycle</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">FPDS.gov</td>
                  <td className="px-4 py-3 text-stone-600">Decommissioned February 24, 2026</td>
                  <td className="px-4 py-3 text-stone-600">N/A</td>
                  <td className="px-4 py-3 text-stone-600">N/A — legacy system, offline</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Both SAM.gov and USASpending.gov expose APIs for programmatic access, which is how <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">contract intelligence platforms</Link> pull and process award data at scale. If you&apos;re doing occasional research, the browser interfaces are sufficient. If you&apos;re building a systematic pipeline, the APIs let you automate what would otherwise take hours of manual searching each week.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="If You Bookmarked FPDS.gov">
            Those links no longer work. Go to sam.gov and click &quot;Contracting&quot; in the top navigation, then select &quot;Contract Award Data.&quot; Your USASpending.gov bookmarks are still valid — that system has not changed.
          </Callout>

          {/* Section 4 */}
          <SectionHeading id="usaspending" number="04" title="USASpending.gov: Your Free Competitive Intelligence Database" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              USASpending.gov was created under the Digital Accountability and Transparency Act (DATA Act) of 2014. The mandate was simple: every dollar the federal government spends should be publicly trackable. The site covers contracts, grants, loans, direct payments, and other financial assistance — all in one searchable database with no login required.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For contractors, the most valuable section is <strong>Advanced Search</strong>. Set Award Type to &quot;Contracts&quot; and you&apos;ve got access to every unclassified contract action in the federal government&apos;s history, going back decades.
            </p>
          </div>

          {/* Step-by-step */}
          <div className="my-8 space-y-4 animate-on-scroll">
            <h3 className="text-xl font-bold text-stone-900 mb-4">USASpending.gov Advanced Search: Key Filters</h3>
            {[
              {
                step: "01",
                title: "Filter by Award Type → Contracts",
                desc: "Start here. The default view includes grants and other assistance. Narrowing to contracts keeps results relevant.",
              },
              {
                step: "02",
                title: "Filter by Agency or Sub-Agency",
                desc: "Target the specific contracting office that matters to you — not just 'Department of Defense' but 'Army Corps of Engineers' or 'Naval Facilities Engineering Command.'",
              },
              {
                step: "03",
                title: "Filter by Product Service Code (PSC)",
                desc: "PSCs classify what was purchased. Knowing your PSC lets you see every contract in your service category across all agencies. This is how you find markets you didn't know existed.",
              },
              {
                step: "04",
                title: "Filter by Recipient Name or UEI",
                desc: "Search a competitor's company name or Unique Entity Identifier to see every federal contract they hold or have held. This is the fastest way to build a competitor profile.",
              },
              {
                step: "05",
                title: "Filter by Place of Performance",
                desc: "Narrow by state, county, or congressional district. Critical if you have geographic limitations on service delivery.",
              },
              {
                step: "06",
                title: "Set Date Range",
                desc: "For recompete research, search for awards in your target category from 3–5 years ago. Many base-plus-option contracts run 5 years — those are expiring now.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover-lift transition-all">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{s.title}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Beyond search, USASpending.gov offers several purpose-built tools. The <strong>Agency Profiles</strong> section gives you a spending overview for any federal department — total obligations, breakdown by contract type, and top recipients. The <strong>Recipient Profiles</strong> page shows any company&apos;s federal award history in an organized dashboard format.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The site also offers bulk download capability. If you want every IT services contract awarded by DHS in the past three fiscal years, you can download the entire dataset as a CSV. This is how serious BD teams build their market maps.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2">Check Your Set-Aside Eligibility First</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Before you build a pursuit list from award data, make sure you know which set-aside categories you qualify for. SDVOSB, 8(a), HUBZone, and WOSB designations dramatically expand the contract opportunities available to you.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading id="sam-gov-awards" number="05" title="SAM.gov Contract Award Search: Step-by-Step" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              SAM.gov absorbed FPDS in February 2026. The contract award data is now under the &quot;Contracting&quot; tab in the top navigation. A Login.gov account is required for full search functionality — the same account you use to maintain your SAM.gov entity registration.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The interface is more granular than USASpending.gov. Where USASpending is built for broad analysis, SAM.gov&apos;s contract award search is built for record-level access. You can pull the full contract file — base award, all modifications, funding actions, and the complete NAICS and PSC classification — for any individual award.
            </p>
          </div>

          <div className="my-8 space-y-4 animate-on-scroll">
            <h3 className="text-xl font-bold text-stone-900 mb-4">How to Search Contract Award Records on SAM.gov</h3>
            {[
              {
                step: "01",
                title: "Log into SAM.gov with your Login.gov credentials",
                desc: "Navigate to sam.gov and click 'Sign In.' Use your Login.gov account. If you don't have one, create it at login.gov — it takes about five minutes and you'll need it anyway to maintain your entity registration.",
              },
              {
                step: "02",
                title: "Click 'Contracting' in the top navigation",
                desc: "Then select 'Contract Award Data.' You'll land on the contract award search interface, which replaces the old FPDS ezSearch.",
              },
              {
                step: "03",
                title: "Search by contractor name or UEI",
                desc: "Type a company name or their Unique Entity Identifier. Every contract action associated with that entity loads — including modifications and funded amounts. This is your competitor research starting point.",
              },
              {
                step: "04",
                title: "Filter by keyword, agency, or date range",
                desc: "Narrow results by awarding agency, contract type (FFP, T&M, IDIQ, etc.), or award date. Each result card shows total obligated dollars, awarding office, and award date.",
              },
              {
                step: "05",
                title: "Click any Award ID to open the full record",
                desc: "The detail view shows the complete modification and funding history, period of performance, contracting office contact, and set-aside classification. This is the data you need to assess whether a contract is nearing its end of life.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover-lift transition-all">
                <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{s.title}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={CheckCircle2} color="emerald" title="What to Look For in a Contract Record">
            <ul className="space-y-1">
              <li><strong>Period of Performance end date</strong> — when the current contract (including all options) expires</li>
              <li><strong>Total obligated vs. ceiling</strong> — how much has actually been spent vs. the maximum contract value</li>
              <li><strong>Set-aside type</strong> — whether it was competed as a small business set-aside, 8(a) sole source, or full and open</li>
              <li><strong>Contracting office</strong> — who issued the award, so you know who to contact</li>
              <li><strong>Contract type</strong> — FFP, T&amp;M, IDIQ, BPA, or other structure</li>
            </ul>
          </Callout>

          {/* Section 6 */}
          <SectionHeading id="competitor-profile" number="06" title="Building a Competitor Intelligence Profile" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The most valuable use of award data isn&apos;t finding contracts — it&apos;s understanding the companies you&apos;re competing against. Most small business BD teams have no idea what their competitors are actually winning or where their revenue comes from. That information is sitting in public databases, free to access.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Here&apos;s the process. Start with the incumbent on any contract you&apos;re pursuing. Pull their UEI from their SAM.gov entity registration or from the contract record itself. Then search both USASpending.gov and SAM.gov using that UEI.
            </p>
          </div>

          <div className="my-8 rounded-2xl border border-stone-200 overflow-hidden animate-on-scroll">
            <div className="bg-stone-800 text-white px-6 py-4">
              <h3 className="font-bold text-lg">What a Competitor Profile Reveals</h3>
            </div>
            <div className="divide-y divide-stone-200">
              {[
                {
                  icon: DollarSign,
                  title: "Total federal revenue",
                  desc: "How much they make from the government across all agencies. A company doing $5M/year in federal contracts has very different resources than one doing $50M.",
                },
                {
                  icon: Building2,
                  title: "Agency concentration",
                  desc: "Whether they&apos;re a single-agency contractor or diversified. Heavy concentration in one agency means they have deep relationships there — and may be vulnerable everywhere else.",
                },
                {
                  icon: Target,
                  title: "NAICS and PSC specialization",
                  desc: "Which service categories they compete in. This tells you whether they&apos;re a direct competitor or just adjacent to your space.",
                },
                {
                  icon: RefreshCw,
                  title: "Contract renewal rate",
                  desc: "How many of their contracts go to recompete and how many they retain. High retention signals strong past performance and incumbent relationships — expect tough competition.",
                },
                {
                  icon: Globe,
                  title: "Geographic footprint",
                  desc: "Where their work is performed. A competitor that only operates in three states has an obvious weakness in the other 47.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 hover:bg-stone-50 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-900 mb-0.5">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Once you have this picture, you can make an informed <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-600 hover:underline font-medium">bid/no-bid decision</Link> rather than guessing. You know whether the incumbent is entrenched or weak. You know whether the agency has a preference for small business set-asides. You know whether the contract is likely to be recompeted on the same vehicle or rebid as a new acquisition.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              This is what large contractors do as a matter of routine. Their <Link href="/blog/capture-management-process" className="text-blue-600 hover:underline font-medium">capture management teams</Link> build these profiles months before an RFP drops. Small businesses that adopt the same practice compete at a dramatically higher level.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading id="recompetes" number="07" title="Finding Recompetes: Contracts Expiring in the Next 12 Months" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Recompetes are the most actionable intelligence in government contracting. When a contract expires, the government must either sole-source the follow-on (which requires justification), issue a new competitive solicitation, or let the work lapse. Most contracts go to recompete. That&apos;s your window.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The standard federal contract structure is a base year plus up to four option years — a five-year total period of performance. When an agency awarded a contract in FY2020 or FY2021 with a five-year ceiling, those contracts are expiring now or in the next 12 to 18 months. This is not speculation — you can see the exact end dates in the award records.
            </p>
          </div>

          <div className="my-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 animate-on-scroll">
            <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5" />
              How to Find Expiring Contracts in Your Space
            </h3>
            <div className="space-y-3">
              {[
                "Go to USASpending.gov → Advanced Search → Contracts",
                "Set your PSC code(s) to match your service category",
                "Set Award Date range to 4–6 years ago (to find contracts with 5-year periods that are expiring now)",
                "Filter by your target agencies — DoD, VA, DHS, or civilian agencies you know",
                "Sort results by Award Amount descending — focus on the highest-value contracts first",
                "Download the results to a spreadsheet and sort by Period of Performance End Date",
                "Add the contracts expiring within 12 months to your recompete pipeline",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-blue-900 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Once you&apos;ve identified expiring contracts, cross-reference them with SAM.gov to see if a new solicitation has already been posted. Many agencies issue a <Link href="/blog/sources-sought-notice" className="text-blue-600 hover:underline font-medium">sources sought notice</Link> 12–18 months before a major recompete. Responding to that notice puts you in the agency&apos;s awareness before the RFP drops — that&apos;s the position you want to be in.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Also check whether the expiring contract has been awarded as a set-aside. If it was an 8(a) sole-source and the current holder is graduating from the program, the recompete may open to competitive bidding for the first time. If it was full and open competition and the agency has been trying to hit its small business goals, the recompete may get carved out as a set-aside. Both scenarios create opportunity — but you only see them if you&apos;re tracking the data.
            </p>
          </div>

          <Callout icon={Target} color="sky" title="The 18-Month Rule">
            For any contract worth pursuing, start your engagement 18 months before the period of performance ends. Contact the contracting officer to introduce your firm, respond to any sources sought, and request capability briefings if the agency allows them. By the time the RFP drops, you want to be a known quantity, not a new name on a list of bidders.
          </Callout>

          {/* Section 8 */}
          <SectionHeading id="reading-data" number="08" title="What Award Patterns Actually Tell You" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Raw award data has limits. A contract record tells you who won and how much it was worth. It doesn&apos;t tell you why they won, what their proposal looked like, or what the evaluation criteria weighted most heavily. You have to infer that from patterns.
            </p>
          </div>

          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">What You See in the Data</th>
                  <th className="px-4 py-3 text-left font-semibold">What It Means for You</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {[
                  {
                    pattern: "Same firm wins the recompete repeatedly",
                    meaning: "Incumbent advantage is strong here. You need exceptional differentiation or a lower price to displace them. Consider teaming or partnering first.",
                  },
                  {
                    pattern: "Multiple awards to different companies from the same office",
                    meaning: "This office likes competition and has spread work around. Good sign — they&apos;re not locked to one vendor.",
                  },
                  {
                    pattern: "Contracts awarded as 8(a) sole source but company is near graduation",
                    meaning: "That work is likely to go competitive soon. Get positioned now.",
                  },
                  {
                    pattern: "High obligated amount relative to ceiling",
                    meaning: "Agency is spending aggressively on this contract. They have budget and they use it.",
                  },
                  {
                    pattern: "Low obligated amount relative to ceiling",
                    meaning: "Either budget was constrained or the vendor under-delivered. Either way, the recompete may be harder for the incumbent to defend.",
                  },
                  {
                    pattern: "Many modifications with increased ceilings",
                    meaning: "Scope is growing. The agency values this work and keeps adding to it — this is a growing program, worth pursuing aggressively.",
                  },
                ].map((row) => (
                  <tr key={row.pattern} className="even:bg-stone-50 hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-stone-900 text-sm">{row.pattern}</td>
                    <td className="px-4 py-3 text-stone-600 text-sm">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Agency-level patterns matter too. Some contracting offices issue solicitations like clockwork — you can predict almost to the month when the next RFP will drop based on their historical award dates. Others are sporadic. Some agencies consistently award to small businesses at rates above the government average; others just meet the minimum. Knowing this shapes where you invest your BD resources.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">intelligence tools</Link> built for government contractors automate much of this pattern detection — flagging expiring contracts, surfacing incumbent profiles, and alerting you to new agency activity in your target categories. But even manual research using the free government tools gives you a significant edge over competitors who are only reacting to posted solicitations.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  CapturePilot Surfaces This Intelligence Automatically
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Instead of manually pulling data from USASpending.gov and SAM.gov each week, CapturePilot&apos;s <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">Market Intelligence</Link> feature tracks your target agencies, monitors incumbent award history, and alerts you to recompetes before solicitations drop. Try it free for 30 days.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-700 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 font-medium px-5 py-2.5 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="into-pipeline" number="09" title="Turning Award Data Into Your Pipeline" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Data by itself doesn&apos;t win contracts. The question is how you translate award research into active pursuit. Here&apos;s a practical framework for converting what you find into pipeline entries.
            </p>
          </div>

          <div className="my-8 space-y-6 animate-on-scroll">
            {[
              {
                phase: "Research",
                color: "blue",
                steps: [
                  "Identify your top 3 target agencies based on mission alignment and past awards in your NAICS/PSC",
                  "Pull all contracts in your service category from those agencies in the past 5 years",
                  "Flag contracts expiring within 18 months",
                  "Build competitor profiles on the incumbent holders",
                ],
              },
              {
                phase: "Qualify",
                color: "emerald",
                steps: [
                  "Score each opportunity using your bid/no-bid criteria — see the <a href='/blog/bid-no-bid-decision-framework'>Bid/No-Bid framework</a> for a template",
                  "Check set-aside history — can you compete under a program the incumbent couldn't?",
                  "Assess your past performance relevance to this specific contract",
                  "Estimate probability of win (PWin) based on incumbent strength and your differentiation",
                ],
              },
              {
                phase: "Engage",
                color: "amber",
                steps: [
                  "Contact the contracting officer 12–18 months before period of performance end",
                  "Request capability briefings or respond to sources sought when posted",
                  "Attend industry days and pre-solicitation conferences",
                  "Build relationships with the program office (separate from contracting office where appropriate)",
                ],
              },
              {
                phase: "Pursue",
                color: "sky",
                steps: [
                  "Track the solicitation in SAM.gov and set up opportunity alerts",
                  "Begin proposal preparation 60–90 days before expected RFP drop",
                  "Reference your pre-engagement research to write to the agency's known priorities",
                  "Submit and debrief — win or lose, request a <a href='/blog/government-contract-debriefing'>debrief</a> to sharpen your next pursuit",
                ],
              },
            ].map((phase) => {
              const bg: Record<string, string> = {
                blue: "bg-blue-50 border-blue-200",
                emerald: "bg-emerald-50 border-emerald-200",
                amber: "bg-amber-50 border-amber-200",
                sky: "bg-sky-50 border-sky-200",
              };
              const badge: Record<string, string> = {
                blue: "bg-blue-600 text-white",
                emerald: "bg-emerald-600 text-white",
                amber: "bg-amber-600 text-white",
                sky: "bg-sky-600 text-white",
              };
              return (
                <div key={phase.phase} className={`rounded-2xl border p-6 ${bg[phase.color]}`}>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block ${badge[phase.color]}`}>
                    {phase.phase}
                  </span>
                  <ul className="space-y-2 mt-2">
                    {phase.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: step }} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              This process integrates with every other part of your business development operation. Your <Link href="/blog/government-contract-pipeline-management" className="text-blue-600 hover:underline font-medium">pipeline management</Link> tool should have a field for &quot;source&quot; — and &quot;recompete identified via USASpending&quot; should be one of the most common entries if you&apos;re working this data systematically.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">CapturePilot pipeline</Link> tracks opportunities from early market intelligence through award, with built-in stages for pre-RFP engagement, proposal development, and debrief. When you source an opportunity from award data research, it enters the pipeline at the intelligence stage — giving you the longest possible runway to position before the competition even knows the opportunity exists.
            </p>
          </div>

          <Callout icon={Eye} color="rose" title="The Hidden Cost of Waiting for Posted Solicitations">
            By the time a solicitation hits SAM.gov, the agency has typically already decided on the general approach, drafted the technical requirements, and in many cases informally narrowed their preferred awardees through pre-solicitation engagement. Companies that only respond to posted solicitations are competing on terms set by others. Award tracking is how you get into those earlier conversations.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white animate-on-scroll">
            <div className="text-center">
              <h3 className="text-2xl font-black mb-3">Stop Chasing RFPs. Start Owning Your Market.</h3>
              <p className="text-stone-300 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
                CapturePilot monitors USASpending.gov and SAM.gov award data on your behalf, flags recompetes in your target categories, and delivers competitive intelligence on incumbents — so your BD team focuses on winning, not on manual research.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 border border-stone-600 text-white font-medium px-6 py-3 rounded-xl text-sm hover:border-stone-400 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="my-12 animate-on-scroll">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Related Resources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process",
                  desc: "How winning contractors find and pursue deals before the RFP drops.",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  title: "The Bid/No-Bid Decision Framework",
                  desc: "Score your opportunities before you invest proposal resources.",
                },
                {
                  href: "/blog/federal-procurement-forecast-guide",
                  title: "Federal Agency Procurement Forecasts",
                  desc: "How to use agency forecasts to get ahead of opportunities.",
                },
                {
                  href: "/blog/pwin-probability-of-win",
                  title: "Probability of Win (PWin)",
                  desc: "How to score your chances on any pursuit before you bid.",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices",
                  desc: "How to use pre-solicitation notices to shape the RFP.",
                },
                {
                  href: "/blog/sam-gov-search-tips",
                  title: "SAM.gov Search Tips",
                  desc: "Stop wasting time and find real opportunities faster.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="flex items-start gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <FileText className="w-5 h-5 text-stone-400 group-hover:text-blue-600 mt-0.5 flex-shrink-0 transition-colors" />
                  <div>
                    <p className="font-semibold text-stone-900 text-sm group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </p>
                    <p className="text-stone-500 text-xs mt-0.5">{post.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
