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
  FileText,
  Clock,
  Award,
  BarChart3,
  Shield,
  Info,
  Layers,
  XCircle,
  Building2,
  Users,
  Zap,
  Star,
  RefreshCw,
  GitBranch,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-idiq", label: "What an IDIQ Contract Actually Is" },
  { id: "single-vs-multiple", label: "Single Award vs. Multiple Award IDIQs" },
  { id: "gwac-vehicles", label: "GWACs: The Biggest IDIQ Vehicles" },
  { id: "task-order-competition", label: "How Task Order Competition Works" },
  { id: "getting-on-an-idiq", label: "Getting On an IDIQ: Solicitations and Pools" },
  { id: "small-business-pools", label: "Small Business Set-Aside Pools" },
  { id: "pipeline-management", label: "Managing Your Pipeline on a Multi-Award IDIQ" },
  { id: "decision-framework", label: "Should You Pursue an IDIQ? A Framework" },
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

export default function IdiqContractsExplainedPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
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
            <span className="text-stone-900 font-medium">IDIQ Contracts Explained</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            IDIQ Contracts Explained:{" "}
            <span className="gradient-text">How to Get on a Multi-Year Contract Vehicle</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            In FY2025,{" "}
            <strong className="text-stone-700">$72.4 billion in federal spending flowed through IDIQ and GWAC vehicles</strong>{" "}
            — roughly 8.6% of all federal contract awards. NASA SEWP V alone accounted for $11.16 billion
            of that total. These vehicles aren&apos;t a niche strategy. For the agencies that use them,
            they are the primary acquisition channel. Here&apos;s how they work and how you get on them.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>17 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 13, 2026</span>
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
        <div className="max-w-4xl mx-auto">

          {/* Section 1 */}
          <SectionHeading
            id="what-is-idiq"
            number="01"
            title="What an IDIQ Contract Actually Is"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              IDIQ stands for Indefinite Delivery, Indefinite Quantity. That name is the whole
              concept: the government doesn&apos;t commit up front to a specific number of units
              or a fixed scope of work. Instead, it establishes a contract that allows it to order
              whatever it needs — within defined limits — over a fixed period of time. The agency
              sets the terms, negotiates rates, and then places individual orders as requirements emerge.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Think of it this way. A traditional fixed-price contract says: &ldquo;We want 500
              laptops delivered by December 1st.&rdquo; An IDIQ says: &ldquo;We expect to buy
              somewhere between 100 and 10,000 laptops over the next five years. Here are our
              specs and your prices. We&apos;ll order when we need them.&rdquo; The government
              only commits to the minimum guaranteed quantity — often a token amount — and the
              contractor takes on the uncertainty about actual order volume.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The legal framework sits in FAR Subpart 16.5. Under FAR 16.504, every IDIQ must
              specify a minimum quantity the government will order (so the contractor isn&apos;t
              left with a worthless contract), a maximum ceiling above which no orders can be
              placed, and a defined ordering period. Minimum guarantees are often small — sometimes
              as little as $1 — but they establish the contractor&apos;s legal right to at least
              one order.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$72.4B", label: "IDIQ/GWAC spend in FY2025", icon: DollarSign },
                { stat: "8.6%", label: "Share of total federal awards", icon: BarChart3 },
                { stat: "$150M", label: "Single-award IDIQ ceiling (FAR)", icon: Shield },
                { stat: "5–10 yrs", label: "Typical ordering period", icon: Clock },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The government uses IDIQs because they reduce procurement overhead. Instead of
              running a full competition every time a need arises, agencies negotiate once,
              establish a pool of qualified vendors (or a single vendor), and place orders
              quickly. For rapidly evolving requirements — like IT services, professional support,
              or facilities maintenance — IDIQs allow agencies to move at something closer to
              commercial speed.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For contractors, the tradeoff is real. You invest significant resources winning
              a position on the IDIQ base contract. But that position doesn&apos;t guarantee
              revenue. Work only flows when task orders are issued and when you win them. On a
              multiple-award vehicle, you&apos;re competing for every order. The base contract
              win gets you into the room. What you do in the room determines your revenue.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="IDIQ, GWAC, MAC, and BIC: Sorting Out the Acronyms">
            An IDIQ is the contract structure. A GWAC (Government-Wide Acquisition Contract) is
            an IDIQ that any federal agency can use, not just the one that awarded it. A MAC
            (Multiple Award Contract) is an IDIQ with a pool of awardees competing for task
            orders. BIC (Best-In-Class) is the OMB designation for preferred government-wide
            vehicles. So OASIS+ is a GWAC that&apos;s also a MAC and a BIC — all four terms
            apply simultaneously. The underlying contract structure is always IDIQ.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="single-vs-multiple"
            number="02"
            title="Single Award vs. Multiple Award IDIQs"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The most important distinction in IDIQ contracting is not between vehicles or
              agencies — it&apos;s between single-award and multiple-award structures. They
              create fundamentally different competitive environments.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="animate-on-scroll">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <h3 className="font-black text-blue-900 text-sm">Single Award IDIQ</h3>
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed mb-4">
                    One contractor wins the entire contract. All task orders go to that
                    contractor — there is no fair opportunity competition at the order
                    level because there is only one awardee.
                  </p>
                  <ul className="space-y-2 text-xs text-blue-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                      No competition after award — all orders go to you
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                      Typically for specialized, tightly scoped requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      FAR caps these at $150M — larger requirements go multiple-award
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      Highly competitive at the base contract award stage
                    </li>
                  </ul>
                </div>
              </div>

              <div className="animate-on-scroll">
                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                      2+
                    </div>
                    <h3 className="font-black text-indigo-900 text-sm">Multiple Award IDIQ (MAC)</h3>
                  </div>
                  <p className="text-sm text-indigo-800 leading-relaxed mb-4">
                    Multiple contractors win base contract positions. They then compete
                    against each other for individual task orders under the &ldquo;fair
                    opportunity&rdquo; process established in FAR 16.505(b).
                  </p>
                  <ul className="space-y-2 text-xs text-indigo-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      Winning the base contract is step one, not the finish line
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      Smaller competitive pool than open-market for task orders
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      No ceiling cap — SEWP V has a $20B ceiling, OASIS+ higher still
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      Revenue requires consistent task order wins, not just base award
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The $150 million ceiling on single-award IDIQs is a relatively recent change,
              added to FAR 16.504 to push large requirements toward multiple-award vehicles.
              The rationale: requirements large enough to dominate a contractor&apos;s capacity
              should be competed among several vendors to preserve market health and give the
              government ongoing price leverage. Agency heads can exceed $150M for a single award
              but must make a documented determination justifying why the work is too integrated
              or specialized for a pool of contractors.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              In practice, most of the high-profile federal contract vehicles you hear about —
              SEWP, OASIS+, Alliant 2, CIO-SP3, SeaPort NxG — are multiple-award IDIQs.
              The government prefers them for large, multi-year service requirements because
              they maintain competition over time, reduce the risk of vendor lock-in, and
              allow agencies to add scope without re-competing the entire vehicle.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If you&apos;re thinking about IDIQ strategy, your first question should always be:
              is this single or multiple award, and what does that mean for how I generate revenue?
              The strategy is completely different depending on the answer.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-indigo-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Know which vehicles your target agencies use before you bid</h3>
                <p className="text-indigo-100 mb-4 text-sm leading-relaxed">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/intelligence" className="text-white underline font-medium">
                    market intelligence tools
                  </Link>{" "}
                  show you exactly which IDIQ vehicles your target agencies are spending through,
                  which vehicles are open for on-ramps, and which small business pools have the
                  least competition. Start with the right vehicle and save months of wasted effort.
                </p>
                <Link
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="gwac-vehicles"
            number="03"
            title="GWACs: The Biggest IDIQ Vehicles"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Government-Wide Acquisition Contracts take the IDIQ structure and make it
              available to every federal agency, not just the one that competed and awarded
              the contract. A GWAC is managed by a designated agency — usually GSA or NASA —
              and any other agency can place orders against it. That government-wide reach
              is what drives the enormous ceiling values and spending volumes.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here are the vehicles that actually move the money.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  name: "NASA SEWP V",
                  ceiling: "$20B",
                  focus: "IT products, hardware, software, and related services",
                  fy25: "$11.16B",
                  share: "15.4% of all GWAC/IDIQ awards",
                  detail: "The highest-volume GWAC. Products and product-related services only — not pure services. SEWP VI solicitation is in development; SEWP V extended through late 2026.",
                  color: "blue",
                },
                {
                  name: "GSA OASIS+",
                  ceiling: "Uncapped (estimated $90B+)",
                  focus: "Professional services (non-IT): management consulting, logistics, research",
                  fy25: "Significant share, data by domain",
                  share: "GSA's primary professional services GWAC",
                  detail: "Replaced the original OASIS. Base period 5 years, one 5-year option (10 years total). Has dedicated small business pools for 8(a), SDVOSB, HUBZone, WOSB, and unrestricted small business.",
                  color: "emerald",
                },
                {
                  name: "NITAAC CIO-SP3",
                  ceiling: "$20B",
                  focus: "Health IT, cyber, scientific computing, life sciences",
                  fy25: "Major vehicle for HHS and health agencies",
                  share: "Extended through April 2026; CIO-SP4 ($40B) awarded but paused",
                  detail: "Managed by NIH NITAAC. Historically a top vehicle for health IT work. CIO-SP4 at $40B was awarded but is undergoing legal review; CIO-SP3 remains active.",
                  color: "amber",
                },
                {
                  name: "GSA Alliant 2",
                  ceiling: "$75B",
                  focus: "Comprehensive IT services — large, complex federal IT projects",
                  fy25: "Top IT services vehicle for large contractors",
                  share: "Separate unrestricted and small business pools",
                  detail: "Alliant 2 Small Business is the companion vehicle specifically for small businesses. Alliant 3 solicitation is under development. Strong vehicle for enterprise-scale IT modernization work.",
                  color: "sky",
                },
              ].map((v, i) => {
                const borderColors: Record<string, string> = {
                  blue: "border-l-blue-500",
                  emerald: "border-l-emerald-500",
                  amber: "border-l-amber-500",
                  sky: "border-l-sky-500",
                };
                const bgColors: Record<string, string> = {
                  blue: "bg-blue-50",
                  emerald: "bg-emerald-50",
                  amber: "bg-amber-50",
                  sky: "bg-sky-50",
                };
                return (
                  <div
                    key={i}
                    className={`border border-stone-200 border-l-4 ${borderColors[v.color]} rounded-xl p-6 animate-on-scroll`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-black text-stone-900 text-base">{v.name}</h3>
                        <p className="text-sm text-stone-500 mt-0.5">{v.focus}</p>
                      </div>
                      <div className={`${bgColors[v.color]} rounded-lg px-3 py-1.5 text-center flex-shrink-0`}>
                        <p className="text-xs font-bold text-stone-700">Ceiling</p>
                        <p className="text-sm font-black text-stone-900">{v.ceiling}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 mb-3 text-xs">
                      <div className="bg-white border border-stone-100 rounded-lg p-2">
                        <span className="text-stone-400">FY25 context: </span>
                        <span className="text-stone-700 font-medium">{v.fy25}</span>
                      </div>
                      <div className="bg-white border border-stone-100 rounded-lg p-2">
                        <span className="text-stone-400">Market position: </span>
                        <span className="text-stone-700 font-medium">{v.share}</span>
                      </div>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{v.detail}</p>
                  </div>
                );
              })}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Agency-specific IDIQs matter just as much as GWACs. DoD&apos;s SeaPort NxG,
              the Army&apos;s SABER construction contracts, the VA&apos;s T4NG2 — these are
              IDIQ vehicles scoped to a single agency but often represent billions in annual
              spending. If your target agency runs most of its work through its own IDIQ
              vehicle rather than a GWAC, that&apos;s the vehicle you need to be on, regardless
              of how well-known it is nationally.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The way to figure out which vehicles matter for your specific situation: pull
              award data on USASpending.gov filtered to your target agencies and NAICS codes.
              Look at where the awarded dollars actually came from — what vehicle types, which
              specific contracts. That data tells you exactly which vehicles to pursue and which
              to ignore.{" "}
              <Link href="/features/intelligence" className="text-blue-600 underline">
                CapturePilot&apos;s intelligence tools
              </Link>{" "}
              surface this analysis automatically for your target market.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="GWACs vs. Agency-Specific IDIQs: Pick Your Priority">
            GWACs offer access to the entire federal market from one contract. Agency-specific
            IDIQs offer deeper penetration into a specific agency with less competition because
            fewer contractors pursue them. For most small businesses, one well-chosen agency
            IDIQ generates more revenue than a GWAC position with no relationship to back it up.
            Start with the vehicle your best target agency actually uses, not the one with the
            largest ceiling.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="task-order-competition"
            number="04"
            title="How Task Order Competition Works"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Winning a position on a multiple-award IDIQ is the beginning, not the payoff.
              Revenue requires winning task orders. Understanding the task order competition
              process — legally and practically — is what separates contractors who generate
              consistent IDIQ revenue from those who hold a contract and wonder why it&apos;s empty.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              FAR 16.505(b) governs task order placement on multiple-award IDIQs. The rule:
              agencies must provide each awardee a &ldquo;fair opportunity&rdquo; to be
              considered for each order. For orders above the simplified acquisition threshold
              ($250,000), the agency must either compete the order among awardees or document
              a specific exception. The fair opportunity process is lighter than a full FAR 15
              source selection — less formal, faster, with streamlined evaluation criteria —
              but it is still a competition.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Order Value</th>
                    <th className="text-left px-4 py-3 font-semibold">Process Required</th>
                    <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Typical Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "Below $3,500 (micro-purchase)", process: "Direct award — no competition required, agency discretion", timeline: "Same day to 1 week" },
                    { range: "$3,500–$250K (simplified acquisition)", process: "Fair opportunity lite — brief SOW, simplified quotes", timeline: "1–4 weeks" },
                    { range: "$250K–$15M", process: "Full fair opportunity — written RFQ, price + technical evaluation", timeline: "3–8 weeks" },
                    { range: "Above $15M (non-DoD) or $25M (DoD)", process: "Full fair opportunity with written justification for any exceptions; debriefs available on request", timeline: "6–16 weeks" },
                    { range: "Sole source exception (any value)", process: "Written D&F documenting exception (unique qualifications, urgent need, etc.)", timeline: "Varies — often faster than competition" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-900 border-b border-stone-100 text-xs">{row.range}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100 text-xs">{row.process}</td>
                      <td className="px-4 py-3 text-stone-500 border-b border-stone-100 text-xs">{row.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-stone-400 mt-2">Based on FAR 16.505(b) requirements. Thresholds subject to periodic adjustment.</p>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Sole source exceptions exist and they matter. FAR 16.505(b)(2)(i) allows agencies
              to skip fair opportunity when only one awardee can meet the requirement
              (urgent need, unusual and compelling urgency, follow-on requirement, etc.). In
              practice, incumbents win a disproportionate share of sole-source task orders
              because they built the relationship that makes the &ldquo;unique qualifications&rdquo;
              exception defensible. This is the structural advantage of being an incumbent on
              an IDIQ.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Task order competitions use Request for Quotation (RFQ) format rather than the
              Request for Proposal (RFP) format used in open-market competitions. RFQs
              are typically shorter, with less formal technical volume requirements. Evaluation
              criteria are set at the task order level, which means the winning approach on
              one order may look completely different from another, even on the same vehicle.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One critical rule that trips up new IDIQ awardees: you cannot protest the
              award of a task order under $25M (DoD) or $10M (civilian) to the GAO. You can
              protest the base contract award, and you can protest orders that exceed the IDIQ
              ceiling or violate the terms, but routine task order awards have very limited
              protest rights. Know this before you budget for a protest strategy.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="The Minimum Guarantee Won&apos;t Pay Your Bills">
            Most IDIQ minimum guarantees are nominal — some are as low as $1. The government
            is legally required to order at least that amount so the contract isn&apos;t
            illusory. But there is no guarantee of additional orders. Your actual revenue
            depends entirely on the task orders you win. Businesses that confuse the base
            contract award with a revenue commitment are regularly disappointed. Plan your
            financials around what you realistically expect to win in task order competitions,
            not around the contract ceiling.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="getting-on-an-idiq"
            number="05"
            title="Getting On an IDIQ: Solicitations and Pools"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Getting on a multi-award IDIQ requires winning the base contract competition.
              That competition looks similar to a regular federal procurement — there&apos;s a
              solicitation, an evaluation, and awards — but the scale and structure vary
              significantly depending on the vehicle. Here&apos;s how to approach it.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Watch for Solicitations and On-Ramps",
                  desc: "Base contract competitions are posted on SAM.gov like any other solicitation. But IDIQ base contracts are also re-competed and expanded through 'on-ramps' — periodic open seasons where agencies add new contractors to existing vehicles. OASIS+, for example, has on-ramp provisions. Set up SAM.gov alerts for your target vehicles. Missing the solicitation window means waiting for the next on-ramp, which can be years away.",
                },
                {
                  step: "02",
                  title: "Understand the Pool Structure",
                  desc: "Large GWACs are typically divided into pools by NAICS code, service domain, clearance level, or business size. OASIS+ separates pools by labor category domain. Alliant 2 SB has a single small business pool. You bid into specific pools, and task orders against those pools are competed among pool awardees. Read the solicitation carefully — pool selection determines which task orders you can compete for, and choosing the wrong pool is a non-recoverable mistake.",
                },
                {
                  step: "03",
                  title: "Build Your Past Performance to Qualify",
                  desc: "Most IDIQ base competitions use past performance as a primary evaluation factor. The specific requirements vary — OASIS+ used a scoring model; Alliant 2 used a self-scoring approach. What's consistent: you need documented federal past performance in the relevant service domain. Relevant past performance includes prime contracts, significant subcontracts, and sometimes commercial work. Start building your record before you need it.",
                },
                {
                  step: "04",
                  title: "Assemble Your Team Before the Solicitation Opens",
                  desc: "For GWACs, many contractors team with complementary firms to cover pool requirements they don't meet alone. Teaming arrangements must be in place before proposal submission, and the terms matter — some vehicles require the prime to perform minimum percentages of work. Review the solicitation's teaming restrictions before you commit to any partnership structure.",
                },
                {
                  step: "05",
                  title: "Price Strategically for the Base Contract",
                  desc: "Base contract pricing sets the labor rates and ceiling prices that govern all future task orders. Price too high and you'll lose task order competitions to lower-priced pool members. Price too low and you'll lose money or be unable to hire the talent you need. Study the market — look at prior award data, salary surveys, and benchmark against comparable vehicles.",
                },
                {
                  step: "06",
                  title: "Plan for Task Order Pipeline Before You're Even Awarded",
                  desc: "The base contract competition takes 6–18 months. The companies that generate revenue immediately after award are the ones who were already building agency relationships, tracking relevant task orders, and preparing their response infrastructure before award. Don't wait for the contract to start your business development.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 animate-on-scroll">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-stone-50 rounded-xl border border-stone-200 p-5">
                    <p className="font-bold text-stone-900 mb-1 text-sm">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One path that often gets overlooked: subcontracting on existing IDIQ vehicles.
              If a prime contractor holds a position on SEWP V or OASIS+ and you have
              complementary capabilities, they may be willing to partner with you on task
              order bids before you hold your own position. You build past performance,
              understand how the vehicle works from the inside, and establish relationships
              with agencies — all while earning revenue. Many successful IDIQ primes started
              as subs on the same vehicles they later competed for directly.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For more on teaming strategy and how to structure subcontract relationships
              that actually lead to prime positions, see our guide to{" "}
              <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 underline">
                government contract teaming agreements
              </Link>
              .
            </p>
          </div>

          {/* CTA 2 */}
          <div className="bg-stone-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Track every IDIQ task order opportunity in one pipeline</h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Task order competitions move fast and the window to respond is often shorter
                  than full and open procurements. CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-amber-400 underline">
                    pipeline management tools
                  </Link>{" "}
                  let you track task orders across multiple vehicles, set response deadlines,
                  assign team members, and score your probability of win — all in one place.
                </p>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-amber-400 text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-300 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="small-business-pools"
            number="06"
            title="Small Business Set-Aside Pools"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The most powerful feature of modern multi-award IDIQs for small businesses is
              the set-aside pool structure. Rather than competing against all contractors on
              the vehicle, you compete only within your designated pool. A SDVOSB task order
              competed in the SDVOSB pool might draw responses from 8 contractors. The same
              requirement competed in the unrestricted pool might draw 40.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              OASIS+ is the clearest example of how far this has evolved. It has six separate
              pools: unrestricted, 8(a), HUBZone, SDVOSB, WOSB, and small business
              (unrestricted among small businesses). Agencies can direct task orders to any
              pool, including set-aside pools. A contracting officer who wants to meet their
              small business spending goals can route professional services task orders directly
              to the SDVOSB or WOSB pool, creating a competition among a much smaller number
              of qualified firms.
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-8 my-8 animate-on-scroll">
              <h3 className="text-lg font-black text-stone-900 mb-6">IDIQ Set-Aside Pool Advantage</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-black text-indigo-700">8–15</p>
                  <p className="text-sm text-stone-600 mt-1">Typical responses in a set-aside pool task order</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-indigo-700">30–50</p>
                  <p className="text-sm text-stone-600 mt-1">Typical responses in an unrestricted pool task order</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-indigo-700">23%</p>
                  <p className="text-sm text-stone-600 mt-1">Congressional small business spending goal across all agencies</p>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The math is straightforward. If your win rate in open competition is 5%, and
              your win rate in a set-aside pool drops the competition from 40 firms to 10 firms,
              your expected win rate roughly quadruples — not because you got better, but
              because the pool got smaller. That&apos;s the structural advantage that small business
              certifications unlock on IDIQ vehicles.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  cert: "SDVOSB / VOSB",
                  pools: "OASIS+ SDVOSB, Alliant 2 SB (SDVOSB set-aside orders), SeaPort NxG SDVOSB pools, VA-specific vehicles",
                  note: "VA is required to use SDVOSB and VOSB set-asides before any other type",
                },
                {
                  cert: "8(a) Program",
                  pools: "OASIS+ 8(a), 8(a) STARS III, most GWACs have 8(a) provisions, sole-source up to $25M",
                  note: "9-year program window — apply early to maximize the vehicle access period",
                },
                {
                  cert: "HUBZone",
                  pools: "OASIS+ HUBZone, HUBZone set-aside orders across most MACs",
                  note: "Employees and facilities must meet ongoing location requirements to stay certified",
                },
                {
                  cert: "WOSB / EDWOSB",
                  pools: "OASIS+ WOSB, WOSB-set-aside orders on most MACs in eligible NAICS codes",
                  note: "EDWOSB (Economically Disadvantaged) has income and asset caps but accesses more set-asides",
                },
              ].map((item, i) => (
                <div key={i} className="border border-stone-200 rounded-xl p-5 animate-on-scroll">
                  <p className="font-black text-stone-900 text-sm mb-1">{item.cert}</p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">{item.pools}</p>
                  <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                    <p className="text-xs text-amber-800">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you hold one of these certifications and aren&apos;t actively pursuing IDIQ
              vehicles with matching pools, you&apos;re leaving competitive advantage on the
              table. The certification doesn&apos;t apply automatically — you have to specifically
              bid into the set-aside pool on the base contract competition, and task orders
              must be set aside for your category to compete in the smaller pool.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Not sure which certifications your business currently holds or qualifies for?
              Use{" "}
              <Link href="/features/quick-checker" className="text-blue-600 underline">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to get a fast eligibility assessment. It covers SDVOSB, WOSB, HUBZone, 8(a),
              and other set-aside programs and tells you exactly where you stand.
            </p>
          </div>

          <Callout icon={Star} color="sky" title="8(a) STARS III: The GWAC Built for 8(a) Companies">
            8(a) STARS III is a GWAC specifically for IT services, restricted entirely to
            8(a)-certified companies. Ceiling: $50B. If your business is in the 8(a) program
            and provides any kind of IT services, STARS III is one of the highest-priority
            vehicles you can pursue. Competition at the base contract level is still stiff,
            but every task order is competed only among 8(a) firms — a much narrower pool than
            any unrestricted vehicle. Read our guide to{" "}
            <Link href="/blog/8a-sole-source-contracts" className="underline font-medium">
              8(a) contracts
            </Link>{" "}
            for context on how the program works before you pursue STARS III.
          </Callout>

          {/* Section 7 */}
          <SectionHeading
            id="pipeline-management"
            number="07"
            title="Managing Your Pipeline on a Multi-Award IDIQ"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The companies that generate serious revenue from IDIQ vehicles do one thing
              differently from everyone else: they treat task order pursuit as a systematic
              process, not an ad-hoc scramble. Here&apos;s what that looks like in practice.
            </p>

            <div className="space-y-6 mb-8">
              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">1</span>
                  Monitor the vehicle&apos;s task order feed daily
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  Most IDIQs have a designated portal where task order RFQs are posted — GSA
                  eBuy for GSA vehicles, SEWP&apos;s portal for SEWP V, agency-specific systems
                  for many agency IDIQs. Response windows are often 5–15 days for smaller orders.
                  Vendors who aren&apos;t monitoring daily miss opportunities before they even
                  know the window has opened. Set up automated alerts wherever the vehicle posts
                  RFQs and treat the feed as mandatory reading.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">2</span>
                  Score every opportunity before you commit resources
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  Not every task order is worth bidding. Use a consistent{" "}
                  <Link href="/blog/pwin-probability-of-win" className="text-blue-600 underline">
                    probability of win (PWin) framework
                  </Link>{" "}
                  to evaluate each opportunity: Do you have an existing relationship with the
                  requiring office? Does your past performance directly match what they&apos;re
                  asking for? Is the timeline realistic for your capacity? What&apos;s your
                  incumbent situation — are you chasing or defending? Discipline about which
                  opportunities to pursue is what separates contractors with 15% win rates from
                  those with 40% win rates.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">3</span>
                  Build agency relationships before requirements emerge
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  The incumbent advantage on IDIQ task orders is structural. Contracting officers
                  know which pool members have performed well, respond quickly, and require minimal
                  management. The way to get into that group is not to wait for a task order —
                  it&apos;s to build the relationship before the requirement materializes. Attend
                  industry days, respond to sources sought notices, and get on contracting officers&apos;
                  radars. Our guide to{" "}
                  <Link href="/blog/sources-sought-notice" className="text-blue-600 underline">
                    sources sought notices
                  </Link>{" "}
                  covers exactly how to use these early engagement tools effectively.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">4</span>
                  Request debriefs on every loss
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  For task orders above $15M (non-DoD) or $25M (DoD), you have a right to a
                  debrief upon written request. For smaller orders, agencies often provide
                  informal feedback. Always request it. A debrief tells you how the evaluators
                  scored your proposal, what the winning proposal did better, and whether your
                  pricing was competitive. That intelligence compounds over time — contractors
                  who systematically debrief losses improve their win rate measurably.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">5</span>
                  Perform exceptionally to become the incumbent
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  The most durable position in IDIQ contracting is incumbent. When your task
                  order expires, the contracting officer can sole-source the follow-on to you
                  (with proper justification) or compete it in a field where your past performance
                  score is already documented and exemplary. CPARS ratings — the government&apos;s
                  contractor performance assessment system — travel with you across every future
                  competition. A pattern of Exceptional ratings is worth more than any marketing
                  campaign.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              The{" "}
              <Link href="/features/pipeline" className="text-blue-600 underline">
                CapturePilot pipeline tool
              </Link>{" "}
              is built around this workflow — tracking opportunities by vehicle, scoring PWin,
              managing response deadlines, and keeping your team coordinated from discovery
              through award. It replaces the spreadsheet-and-email chaos that most small
              businesses rely on when managing multiple IDIQ vehicles simultaneously.
            </p>
          </div>

          <Callout icon={RefreshCw} color="blue" title="On-Ramps: Your Second Chance to Get On">
            Some IDIQs periodically open &ldquo;on-ramps&rdquo; — competitive rounds that add
            new contractors to existing vehicles without replacing the original awardees. If you
            missed the original solicitation or weren&apos;t ready, watch for on-ramp announcements
            on SAM.gov. OASIS+ has on-ramp provisions written into its structure. Getting on
            during an on-ramp gives you full access to all future task orders in your pool,
            just like original awardees — you&apos;re not disadvantaged for being a later addition.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="decision-framework"
            number="08"
            title="Should You Pursue an IDIQ? A Framework"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Not every business is ready for an IDIQ pursuit — and not every IDIQ is worth
              pursuing. The wrong vehicle wastes months of proposal effort. The right vehicle,
              pursued at the right stage of your business, can generate federal revenue for a
              decade. Work through these questions before you commit.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="animate-on-scroll">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-black text-emerald-900 text-sm">Pursue an IDIQ If...</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-emerald-800">
                    {[
                      "Your target agencies spend heavily through the vehicle you're considering",
                      "You have documented past performance that matches the vehicle's domain",
                      "You hold a small business certification with a matching pool on the vehicle",
                      "You can allocate dedicated BD resources to monitor and respond to task orders",
                      "You have capacity to respond to 3–8 task order RFQs per month",
                      "You've built at least one relationship with a requiring office on the vehicle",
                      "Your pricing model is sustainable at competitive labor rates",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="animate-on-scroll">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <h3 className="font-black text-rose-900 text-sm">Wait Before Pursuing If...</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-rose-800">
                    {[
                      "You have fewer than 2 past performance references in the relevant domain",
                      "You don't know which agencies are the heavy users of the vehicle",
                      "You're still building your first federal contracts through open competition",
                      "You can't commit staff time to systematic task order pursuit",
                      "Your pricing hasn't been tested against federal rate benchmarks",
                      "You have no relationships at the agencies that use the vehicle",
                      "You plan to treat the base contract award as the finish line",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              A practical rule of thumb: if you can&apos;t name at least three agencies you
              know use the vehicle and at least one program office where you have an existing
              relationship, you&apos;re probably not ready to win meaningful task order volume.
              Getting on the contract is the easy part compared to generating revenue from it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For businesses in earlier stages, the most effective path to IDIQ position is
              through subcontracting. Find prime contractors on the vehicle, offer them your
              specific capability, and build the past performance you need to compete for your
              own position. Two or three years of this, executed well, produces the past
              performance portfolio that makes your base contract bid competitive.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  title: "Before IDIQ: Build your past performance foundation",
                  desc: "Win open-market small business set-aside contracts. Every CPARS rating you earn improves your IDIQ base contract proposal. Our guide covers exactly how to build a competitive past performance record.",
                  link: "/blog/past-performance-government-contracts",
                  linkText: "Read the past performance guide",
                },
                {
                  title: "During IDIQ pursuit: Know your contract types",
                  desc: "IDIQ is a delivery ordering mechanism, not a contract type. Task orders under IDIQs can be firm-fixed-price, time-and-materials, or cost-reimbursable. Knowing the differences determines how you price and manage risk.",
                  link: "/blog/federal-contract-types-explained",
                  linkText: "Federal contract types explained",
                },
                {
                  title: "After IDIQ award: Write proposals that win",
                  desc: "Task order proposals are shorter than full RFP responses but still require compliance, technical differentiation, and competitive pricing. The fundamentals of proposal writing apply at every value threshold.",
                  link: "/blog/government-rfp-response-guide",
                  linkText: "Government RFP response guide",
                },
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 border border-stone-200 rounded-xl p-5 animate-on-scroll">
                  <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.desc}</p>
                  <Link href={item.link} className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {item.linkText} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The $72.4 billion flowing through GWACs and IDIQs in FY2025 is real money
              accessible to small businesses — but only to small businesses with a position
              on the right vehicles and the operational discipline to pursue task orders
              systematically. The contract ceiling is not your ceiling. Your ceiling is
              determined by how many task orders you win and perform exceptionally on.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use{" "}
              <Link href="/features/intelligence" className="text-blue-600 underline">
                CapturePilot&apos;s market intelligence
              </Link>{" "}
              to map which vehicles your target agencies use, identify open on-ramps, and
              track task order volume by vehicle and pool. Pair that with the{" "}
              <Link href="/features/matching" className="text-blue-600 underline">
                opportunity matching tools
              </Link>{" "}
              to surface the task orders most aligned with your capabilities — and you&apos;ll
              have a clear picture of exactly where to focus your IDIQ strategy.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 mt-12 text-white animate-on-scroll">
            <div className="text-center max-w-xl mx-auto">
              <GitBranch className="w-10 h-10 text-indigo-200 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">Ready to build your IDIQ pipeline?</h3>
              <p className="text-indigo-100 mb-6 text-sm leading-relaxed">
                CapturePilot tracks task order opportunities across all major IDIQ vehicles,
                scores your probability of win, and helps you write proposals faster. Book a
                strategy call to map out which vehicles make sense for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-500 bg-opacity-40 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-opacity-60 transition-colors border border-indigo-400"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-stone-200">
            <h3 className="text-lg font-black text-stone-900 mb-6">Keep Reading</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: "GSA Schedule Contracts: Is a GSA Schedule Right for Your Business?",
                  href: "/blog/gsa-schedule-guide",
                  cat: "Contract Vehicles",
                },
                {
                  title: "Federal Contract Types: FFP, T&M, IDIQ, and Which to Pursue",
                  href: "/blog/federal-contract-types-explained",
                  cat: "Getting Started",
                },
                {
                  title: "Teaming Agreements: How to Partner Up and Win Bigger Contracts",
                  href: "/blog/government-contract-teaming-agreement",
                  cat: "Strategy",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group border border-stone-200 rounded-xl p-5 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                >
                  <span className="text-xs font-medium text-indigo-600 mb-2 block">{post.cat}</span>
                  <p className="text-sm font-bold text-stone-900 group-hover:text-indigo-700 leading-snug transition-colors">
                    {post.title}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-indigo-600 text-xs font-medium">
                    Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
