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
  Zap,
  TrendingUp,
  FileText,
  Clock,
  BarChart3,
  Layers,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-it-matters", label: "Why Contract Type Is a Strategic Decision" },
  { id: "firm-fixed-price", label: "Firm-Fixed-Price (FFP): The Government's Default" },
  { id: "time-and-materials", label: "Time-and-Materials and Labor-Hour Contracts" },
  { id: "cost-reimbursement", label: "Cost-Reimbursement Contracts: What They Actually Require" },
  { id: "idiq-explained", label: "IDIQ, BPA, and Indefinite-Delivery Vehicles" },
  { id: "major-vehicles", label: "Major IDIQ Vehicles and GWACs to Know" },
  { id: "which-to-pursue", label: "Which Contract Types to Target First" },
  { id: "reading-solicitations", label: "Reading a Solicitation for Contract Type" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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

export default function FederalContractTypesPage() {
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
            <span className="text-stone-900 font-medium">Federal Contract Types Explained</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Federal Contract Types:{" "}
            <span className="gradient-text">FFP, T&amp;M, IDIQ, and Which to Pursue</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government spent{" "}
            <strong className="text-stone-700">$773.68 billion on contracts in FY2024</strong>.
            Every dollar flowed through one of a handful of contract structures — and which type
            governs your work determines your risk, your cash flow, and whether you even qualify to
            bid. Here&apos;s what each type means and how to choose where to focus.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 9, 2026</span>
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
            id="why-it-matters"
            number="01"
            title="Why Contract Type Is a Strategic Decision"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most small businesses treat contract type as a clerical detail — something the
              government decides and you accept. That&apos;s backwards. The contract type determines
              who absorbs cost overruns, whether you need a DCAA-compliant accounting system, how
              you structure your pricing, and whether you&apos;re even eligible to compete. A firm
              built around fixed-price work is structurally unprepared to win a cost-reimbursement
              contract. And a firm that focuses on open solicitations and ignores IDIQ vehicles is
              competing for a fraction of the market.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government uses contract type as a risk-allocation tool. The more
              uncertainty in a requirement, the more cost risk the government wants to share with
              itself — which means the contract type shifts from fixed-price toward
              cost-reimbursement. The more clearly a requirement is defined, the more the
              government pushes risk onto the contractor through a firm-fixed-price structure.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              FAR Part 16 — the section of the Federal Acquisition Regulation that governs contract
              types — establishes a clear preference: use firm-fixed-price whenever you can. Every
              deviation from FFP requires written justification. That preference shapes which types
              dominate the market and which ones you&apos;ll encounter most often.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$773.68B", label: "Total federal contract awards in FY2024", icon: DollarSign },
                { stat: "$176.1B", label: "Awards to small businesses in FY2024", icon: Target },
                { stat: "78,677", label: "Small businesses that received awards", icon: BarChart3 },
                { stat: "FAR 16", label: "The regulation that governs all contract types", icon: FileText },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Contract types also affect your pipeline strategy. IDIQs and GWACs — multi-year
              vehicles that issue task orders over time — deliver predictable revenue once you&apos;re
              on the vehicle. Standalone contracts compete for a single award. Your{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                capture pipeline
              </Link>{" "}
              should reflect a mix of both: quick standalone wins to build past performance and IDIQ
              vehicle pursuits to build long-term revenue stability.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="firm-fixed-price"
            number="02"
            title="Firm-Fixed-Price (FFP): The Government's Default"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A firm-fixed-price contract is exactly what the name says: the price is set at
              award, and it doesn&apos;t change regardless of what the work actually costs you.
              If your costs run higher than estimated, you absorb the loss. If you find
              efficiencies that reduce your costs, you keep the difference. The government pays
              the agreed amount and has no visibility into your actual costs.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              FAR 16.202 requires FFP when the contracting officer can establish a fair and
              reasonable price at the outset and the risk of performance cost variation is
              minimal. For commercial products and commercial services, FFP is not just
              preferred — it&apos;s the required contract type under FAR 12.207 unless the
              agency obtains a waiver.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              FFP is the most common contract type in the federal market and the most accessible
              for small businesses. You don&apos;t need a DCAA-auditable accounting system to
              perform FFP work. You price to win and execute efficiently. This makes FFP the
              logical starting point for most small business entrants.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Characteristic</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What It Means for You</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        label: "Risk allocation",
                        detail: "100% on the contractor. If you underprice, you lose money. Period.",
                      },
                      {
                        label: "Accounting requirements",
                        detail: "No DCAA-compliant accounting system required. Standard bookkeeping works.",
                      },
                      {
                        label: "Cash flow",
                        detail: "Progress payments or milestone payments can be negotiated. Invoice upon delivery.",
                      },
                      {
                        label: "Best suited for",
                        detail: "Clearly defined requirements: products, defined services, construction with known scope.",
                      },
                      {
                        label: "FAR authority",
                        detail: "FAR 16.202. Required for commercial items under FAR 12.207.",
                      },
                      {
                        label: "Profit potential",
                        detail: "Uncapped. Execute efficiently and you keep everything above cost.",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-medium text-stone-800">{row.label}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-snug">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Variants of FFP exist. Fixed-Price with Economic Price Adjustment (FP-EPA) allows
              price adjustments tied to specific indices — like a labor rate index or commodity
              price — to protect both parties from long-duration inflation risk. You&apos;ll see
              FP-EPA in multi-year service contracts where labor market shifts could significantly
              affect performance cost. Fixed-Price Incentive Fee (FPIF) contracts set a target
              cost and target profit, with adjustments based on actual cost performance — rewarding
              efficiency and penalizing overruns beyond a ceiling price.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For most small businesses, the standard FFP is where to start. Price it well,
              perform it efficiently, and use the past performance to pursue larger FFP or hybrid
              contracts. Our{" "}
              <Link
                href="/blog/government-contract-pricing-strategies"
                className="text-blue-700 underline font-medium"
              >
                government contract pricing strategies guide
              </Link>{" "}
              covers how to price FFP contracts competitively without underbidding yourself into
              a loss.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="The FFP Pricing Trap">
            New contractors often win their first FFP contract and lose money on it. They price
            to beat incumbents without fully accounting for indirect costs: fringe benefits,
            overhead, G&amp;A expenses, and the cost of proposal writing itself. Build a complete
            cost model before you bid any FFP contract — not just direct labor. One unprofitable
            contract can strain cash flow enough to threaten the business before you land the
            next win.
          </Callout>

          {/* Section 3 */}
          <SectionHeading
            id="time-and-materials"
            number="03"
            title="Time-and-Materials and Labor-Hour Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Time-and-materials (T&amp;M) contracts pay you an agreed hourly rate for labor —
              including profit and overhead baked into the rate — plus actual material costs at
              cost. The government pays for hours worked and materials consumed. Unlike FFP, cost
              uncertainty shifts partially back to the government: if the work takes longer than
              expected, the government pays more (up to a ceiling).
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              FAR 16.601 is explicit: T&amp;M contracts may only be used when it is not possible
              at the time of placing the contract to estimate accurately the extent or duration of
              the work, or to anticipate costs with reasonable confidence. The contracting officer
              must prepare a written determination and findings justifying why FFP or another type
              is not suitable. T&amp;M is not a convenience — it&apos;s a documented exception.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Labor-hour (LH) contracts work identically to T&amp;M but without materials —
              purely labor at negotiated fixed rates. Both structures set labor rates by category
              (e.g., Senior Engineer at $185/hour, Junior Analyst at $95/hour) in the contract.
              That labor rate includes your direct labor cost, fringe, overhead, and profit. It
              doesn&apos;t change during performance — only the number of hours billed varies.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Where T&M Appears Most Often",
                  desc: "Professional services with variable scope: cybersecurity assessments, software development sprints, engineering analysis, and IT support. Any professional service where the government can't fully define how much work will emerge from a discovery phase is a strong T&M candidate. DoD uses T&M heavily for engineering and technical studies where scope evolves during execution.",
                },
                {
                  icon: DollarSign,
                  title: "How Your Rates Are Negotiated",
                  desc: "Labor rates in T&M proposals are evaluated for reasonableness — the contracting officer compares your rates against market surveys, Bureau of Labor Statistics data, or a government-established rate card. Burdened rates (direct labor + fringe + overhead + G&A + profit) need to be competitive but also defensible. Undercutting on T&M rates can be just as damaging as on FFP if your actuals exceed the rate.",
                },
                {
                  icon: AlertTriangle,
                  title: "The Ceiling Price Risk",
                  desc: "Every T&M contract has a ceiling — the maximum the government will pay. FAR 16.601(b)(1) requires contracting officers to set a ceiling at the time of award. If you approach the ceiling before completing the work, you need a modification to increase it. Running into ceilings without flagging them in advance can result in the government disputing hours over ceiling. Track your burn rate against the ceiling weekly, not monthly.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              T&amp;M task orders under IDIQ vehicles are common in IT and professional services —
              the IDIQ sets up pre-negotiated labor categories and rates, and individual task orders
              authorize specific hours. Getting onto an IDIQ vehicle with pre-negotiated T&amp;M
              rates positions you for fast task order awards without full re-competition each time.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <Zap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Check Which Contract Vehicles You Qualify For
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Answer a few quick questions about your business — certifications, NAICS codes,
              revenue. Our Quick Checker identifies the IDIQ vehicles and contract types where
              you have the strongest competitive position.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">Free, no account required</p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="cost-reimbursement"
            number="04"
            title="Cost-Reimbursement Contracts: What They Actually Require"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Cost-reimbursement contracts pay your allowable, allocable, and reasonable costs —
              plus a fee. The government assumes most cost risk. If the work costs more than
              estimated, the government pays (up to a ceiling). If it costs less, the government
              pays less. This structure shifts risk toward the government and requires the
              government to trust that your costs are real, accurately tracked, and properly
              categorized.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              That trust has a price: a DCAA-compliant accounting system. The Defense Contract
              Audit Agency audits cost-reimbursement contracts to verify that the costs you bill
              are allowable under FAR Part 31, properly allocated between contracts and overhead,
              and tracked in a system with adequate internal controls. If your accounting system
              doesn&apos;t meet DCAA standards, you cannot win a cost-reimbursement contract.
              In practice, most small businesses need to set up compliant systems before pursuing
              this work — not after award.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The most common cost-reimbursement types you&apos;ll encounter as a small business
              are Cost-Plus-Fixed-Fee (CPFF) and Cost-Plus-Award-Fee (CPAF). CPFF pays your costs
              plus a predetermined fixed dollar fee that doesn&apos;t change based on performance.
              CPAF pays your costs plus an award fee determined by a periodic performance evaluation
              — it creates profit incentive while maintaining government cost risk absorption.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Type</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Fee Structure</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Best Used When</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">FAR Reference</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "CPFF",
                        fee: "Fixed dollar amount set at award; doesn't adjust with performance",
                        when: "Scope is highly uncertain; R&D; exploratory studies",
                        far: "FAR 16.306",
                      },
                      {
                        type: "CPAF",
                        fee: "Base fee + award fee determined by periodic government evaluation",
                        when: "Performance quality matters but can't be measured precisely in advance",
                        far: "FAR 16.305",
                      },
                      {
                        type: "CPIF",
                        fee: "Target fee adjusts based on actual vs. target cost outcomes",
                        when: "Cost reduction incentives are meaningful; longer duration work",
                        far: "FAR 16.304",
                      },
                      {
                        type: "Cost-No-Fee",
                        fee: "No profit allowed; costs reimbursed only",
                        when: "Nonprofit or educational institution performing research",
                        far: "FAR 16.302",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-bold text-blue-700">{row.type}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-snug">{row.fee}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-snug">{row.when}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs font-mono">{row.far}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              DCAA compliance requires segregating direct from indirect costs, tracking costs by
              contract, maintaining timekeeping records that trace individual hours to specific
              contracts, and producing interim cost reports. Tools like Deltek Costpoint, Unanet,
              or even purpose-configured QuickBooks can satisfy DCAA requirements — but your
              setup must be reviewed and approved before award, not patched together after.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For most early-stage small businesses, cost-reimbursement contracts are not the
              right starting point. The accounting infrastructure cost and the complexity of
              proposal preparation make them harder to win and harder to manage. Most firms
              move into cost-reimbursement work after establishing themselves on FFP or T&amp;M
              contracts, then invest in DCAA compliance as R&amp;D or defense work opens up.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Cost-Plus Does Not Mean Cost-Unlimited">
            A common misconception: cost-reimbursement contracts don&apos;t give you a blank check.
            Every cost-reimbursable contract has an estimated cost ceiling — and the government is
            under no legal obligation to fund beyond it. FAR 32.704 requires contractors to
            notify the contracting officer when costs approach 75% of the estimated cost ceiling.
            Exceeding the ceiling without a modification means you&apos;re performing work at your
            own risk. Budget carefully and flag ceiling issues early.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="idiq-explained"
            number="05"
            title="IDIQ, BPA, and Indefinite-Delivery Vehicles"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Indefinite-Delivery, Indefinite-Quantity (IDIQ) contracts are ordering frameworks —
              not standalone contracts. The IDIQ itself is a vehicle that establishes a minimum
              guaranteed order and a maximum ceiling over the contract period. Individual task
              orders or delivery orders placed against the IDIQ define the actual work, schedule,
              price, and place of performance.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The government must guarantee at least the minimum purchase. If you&apos;re on
              an IDIQ with a $50,000 minimum and a $10 million ceiling, the government is
              obligated to order at least $50,000 during the base period. Beyond that minimum,
              nothing is guaranteed — but every task order is a direct revenue opportunity with
              no re-competition if you&apos;re on a single-award vehicle, or limited competition
              among only the contract holders on a multiple-award vehicle.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              IDIQs are powerful because they separate the competition from the delivery. You
              compete once (hard) to get on the vehicle, then compete within the vehicle (much
              easier — smaller pool, pre-negotiated terms, known agency relationships) for every
              task order. For IT services, professional services, and staffing, IDIQ vehicles
              are where the recurring revenue lives.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Layers,
                  title: "Single-Award vs. Multiple-Award IDIQs",
                  desc: "Single-award IDIQs go to one contractor who gets all task orders under that vehicle — maximum revenue concentration, minimal ongoing competition. Multiple-award IDIQs (MACs) place multiple contractors on the vehicle and require 'fair opportunity' competition among holders for each task order. MACs are far more common. Most GWACs, GSSAs, and agency-specific IDIQs are multiple-award. On a MAC, your win rate per task order matters — being on the vehicle is the floor, not the ceiling.",
                },
                {
                  icon: Building2,
                  title: "Blanket Purchase Agreements (BPAs)",
                  desc: "BPAs are informal IDIQs established under FAR Part 13 or under GSA Schedule contracts. Traditional BPAs — direct agency-to-contractor arrangements — are capped at the simplified acquisition threshold of $250,000. Schedule BPAs, established off a GSA MAS contract, have no fixed ceiling and often run into the tens of millions. They work exactly like IDIQs: the BPA sets the terms and rates, individual calls authorize specific work. Once you hold a BPA, you get repeat purchase orders without re-competing each time.",
                },
                {
                  icon: TrendingUp,
                  title: "Indefinite-Delivery / Definite-Quantity (IDIQ Variant)",
                  desc: "Some vehicles are structured as Definite-Quantity contracts — the government specifies an exact quantity at award (e.g., 5,000 units delivered over 18 months) but leaves the delivery schedule open. These appear more in product and manufacturing contexts. The structure prevents the government from ordering zero while giving scheduling flexibility. Less common than true IDIQs, but worth recognizing in solicitations.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Use{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                CapturePilot&apos;s intelligence tools
              </Link>{" "}
              to identify which IDIQ vehicles in your NAICS code are generating the most task
              order activity — and which vehicles have upcoming on-ramps where you can compete
              for a spot. Getting onto the right vehicle at the right time is one of the highest-
              leverage strategic moves in federal contracting. Learn more about managing your
              pursuit pipeline in our{" "}
              <Link
                href="/blog/government-contract-pipeline-management"
                className="text-blue-700 underline font-medium"
              >
                pipeline management guide
              </Link>
              .
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="major-vehicles"
            number="06"
            title="Major IDIQ Vehicles and GWACs to Know"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Government-Wide Acquisition Contracts (GWACs) are IDIQ vehicles that any federal
              agency can use — not just the sponsoring agency. This makes GWACs high-value targets:
              a single on-ramp win opens the door to task orders from dozens of agencies over five
              to ten years. GWACs for IT and professional services are where most of the federal
              market consolidation is happening in 2025-2026.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Understanding the major vehicles helps you decide where to invest proposal resources.
              Each vehicle has different pools, evaluation criteria, and task order volumes.
              Spreading effort across five vehicles without the past performance to win any of them
              is a common early mistake.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Vehicle</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Ceiling</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Focus Area</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Small Business Pools</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        vehicle: "OASIS+",
                        ceiling: "Uncapped",
                        area: "Professional, management & technical services",
                        sb: "8(a), SDVOSB, HUBZone, WOSB dedicated pools",
                      },
                      {
                        vehicle: "Alliant 2",
                        ceiling: "$82.5B",
                        area: "IT and emerging tech (AI, RPA, distributed ledger)",
                        sb: "Alliant 2 Small Business (separate vehicle)",
                      },
                      {
                        vehicle: "CIO-SP4",
                        ceiling: "$40B",
                        area: "Health IT and cybersecurity (NITAAC/NIH)",
                        sb: "Small business and 8(a) small business pools",
                      },
                      {
                        vehicle: "Polaris",
                        ceiling: "$5B+",
                        area: "IT services — exclusively for small businesses",
                        sb: "SB, WOSB, HUBZone, SDVOSB pools",
                      },
                      {
                        vehicle: "GSA MAS",
                        ceiling: "No ceiling",
                        area: "Broad goods and services (Schedule-based)",
                        sb: "SB set-asides and BPAs available on all schedules",
                      },
                      {
                        vehicle: "SeaPort-NxG",
                        ceiling: "$40B",
                        area: "Navy engineering and technical services",
                        sb: "Open to all SB types; SDVOSB and 8(a) preferred",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-bold text-blue-700">{row.vehicle}</td>
                        <td className="px-5 py-3 font-medium text-stone-800">{row.ceiling}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-snug">{row.area}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-snug">{row.sb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              OASIS+ is managed by GSA and has become the dominant professional services vehicle
              across the federal government. It operates through separate pools by business size
              and socioeconomic certification — meaning an SDVOSB competes only against other
              SDVOSBs for on-ramp spots and task orders within the SDVOSB pool. The pools have
              no ceiling on task order volume, which makes OASIS+ one of the highest-upside
              vehicles in the market for certified small businesses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              CIO-SP4 is managed by NIH&apos;s NITAAC program and covers health IT and
              cybersecurity. As of early 2026, award decisions were still in process after an
              extended evaluation period. CIO-SP3 was extended through April 2026 to bridge the
              gap. If you&apos;re in health IT, tracking CIO-SP4 awards and on-ramp opportunities
              is essential.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For IT companies specifically, Polaris — GSA&apos;s small-business-exclusive GWAC —
              is a high-priority target. It has separate pools for women-owned, HUBZone, and
              SDVOSB small businesses, with on-ramp opportunities that GSA announces periodically.
              Getting on Polaris positions you for IT task orders government-wide without competing
              against large primes.
            </p>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="IDIQ On-Ramps: When the Door Opens">
            Most IDIQ vehicles don&apos;t accept new contractors after initial award — you missed
            the on-ramp if you weren&apos;t ready. But many large vehicles hold periodic on-ramps
            to add contractors. OASIS+, GSA MAS, and Polaris all conduct ongoing or periodic
            on-ramps. Track these using SAM.gov presolicitation notices filtered by your NAICS
            codes and the vehicle names. Getting on-ramp notification 6-12 months in advance
            gives you time to prepare a competitive response. CapturePilot&apos;s{" "}
            <Link href="/features/matching" className="underline font-medium">
              contract matching
            </Link>{" "}
            flags vehicle on-ramps alongside standalone opportunities.
          </Callout>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">Track the Vehicles That Match Your Business</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot maps your NAICS codes and certifications against active IDIQ vehicles
              and GWACs — showing you where on-ramp opportunities align with your current profile
              and past performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="bg-transparent text-white border border-stone-600 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Strategy Call
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-4">No credit card required for the free trial.</p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="which-to-pursue"
            number="07"
            title="Which Contract Types to Target First"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              There&apos;s a practical sequencing that makes sense for most small business entrants
              into federal contracting. It&apos;s not a rigid prescription — your industry and
              certifications shape it — but it reflects the typical risk/complexity profile at each
              stage.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Start with FFP standalone contracts under $250K",
                  desc: "Fixed-price standalone contracts below the simplified acquisition threshold have the least administrative burden and fastest award timelines. The government can award these quickly without full FAR competition processes. No DCAA accounting. No elaborate proposal. Strong past performance from these contracts is the currency you need for everything that comes next. Micro-purchase orders (under $10,000) are even faster — agencies can award them with a credit card and no competition.",
                },
                {
                  step: "02",
                  title: "Build T&M capacity for professional services",
                  desc: "Once you have two to three FFP contracts with documented past performance, you're positioned for T&M professional services work. Set up a basic timekeeping system, negotiate defensible labor categories for your staff, and start responding to T&M solicitations in your NAICS. T&M contracts are common under IDIQ task orders — building T&M experience prepares you for vehicle work.",
                },
                {
                  step: "03",
                  title: "Pursue a GSA Schedule",
                  desc: "A GSA MAS contract is a foundational IDIQ vehicle that opens Schedule BPA opportunities and positions you for eBuy RFQs with SDVOSB, WOSB, or HUBZone set-asides. The application process takes 3-6 months, but once awarded, a GSA Schedule significantly expands your buyer base without the cost of full proposal competition for each order. Think of it as the easiest high-value vehicle to get on.",
                },
                {
                  step: "04",
                  title: "Target agency-specific IDIQ vehicles in your focus agencies",
                  desc: "Once you have past performance and a GSA Schedule, look at agency-specific IDIQ vehicles in the 1-3 agencies you've decided to concentrate on. Agency-specific vehicles have smaller pools than GWACs — your competition for task orders is narrower. VA, DoD, DHS, and HHS all run agency-specific IDIQ vehicles for services they buy repeatedly.",
                },
                {
                  step: "05",
                  title: "Compete for GWACs when past performance is strong enough",
                  desc: "GWACs like OASIS+ and Polaris require substantive past performance to win on-ramp competitions. Most firms pursuing these vehicles have at least three to five years of relevant federal contract performance, multiple clients, and a documented track record of on-time delivery. The investment in a GWAC proposal is significant — concentrate resources here only when you have the past performance to be competitive.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Cost-reimbursement contracts don&apos;t appear in this sequence deliberately — for
              most small businesses, they come later, if at all. R&amp;D organizations, defense
              labs support contractors, and health research firms often need CPFF contracts. If
              that&apos;s your market, invest in DCAA-compliant accounting from day one and
              pursue SBIR/STTR as your entry point.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Your certifications accelerate this sequence. An SDVOSB or 8(a) firm can access
              IDIQ vehicle pools and sole source opportunities that bypass several steps of the
              standard progression. Use our{" "}
              <Link href="/features/quick-checker" className="text-blue-700 underline font-medium">
                Quick Checker
              </Link>{" "}
              to see which certifications you currently qualify for and which vehicle pools they
              unlock.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="The Subcontracting Shortcut">
            One way to accelerate the sequence: subcontract on a large prime&apos;s IDIQ
            vehicle before you win your own. Primes with small business subcontracting plans
            need certified small businesses for T&amp;M task orders regularly. Even a single
            year as a subcontractor on a GWAC vehicle builds the past performance narrative
            you need for your own on-ramp proposal. The work is real, the past performance
            is documentable, and the relationships you build within the prime can lead to
            teaming on future prime bids. Our{" "}
            <Link
              href="/blog/subcontracting-government-contracts"
              className="underline font-medium"
            >
              subcontracting guide
            </Link>{" "}
            covers how to find these opportunities and negotiate teaming agreements.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="reading-solicitations"
            number="08"
            title="Reading a Solicitation for Contract Type"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Every solicitation tells you its contract type if you know where to look. Getting this
              wrong — pricing a T&amp;M solicitation as FFP, or misunderstanding that you&apos;re
              bidding on a task order under an IDIQ vehicle — produces proposals that are
              unresponsive or mispriced. Three documents tell you everything you need.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: FileText,
                  title: "Standard Form 26 or 33 (SF-26 / SF-33): The cover page",
                  desc: "Block 12 on SF-26 and Block 17 on SF-33 typically identify the contract type code. Look for codes like J (FFP), T (T&M), R (CPFF), or U (CPAF). For IDIQ task orders, the SF identifies the task order number and references the parent IDIQ contract. If you see a 'J' number preceding the contract number, you're looking at a delivery order under an existing vehicle.",
                },
                {
                  icon: Clock,
                  title: "Section B: Supplies or Services and Prices",
                  desc: "Section B contains the actual Contract Line Item Numbers (CLINs). The CLIN structure tells you how you'll price the work and how the government will pay. FFP CLINs show a unit price and total price with no labor rate breakdown. T&M CLINs list labor categories with hourly rates and estimated hours. Cost-type CLINs show estimated costs and fee separately. If CLINs show 'FFP' or 'T&M' next to each line, you have a hybrid contract — some requirements are fixed-price, others are time-and-materials.",
                },
                {
                  icon: ShieldCheck,
                  title: "Section H or Section I: Special Contract Requirements or Contract Clauses",
                  desc: "The standard FAR clause for each contract type appears in Section I. FAR 52.216-1 (Type of Contract) identifies the type explicitly. For T&M contracts, look for FAR 52.232-7. For cost-reimbursement, FAR 52.215-2 (Audit and Records — Negotiation) appears, confirming DCAA audit rights. These clauses confirm what you identified in Section B and impose the specific obligations that come with each contract type.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Hybrid contracts are increasingly common. A services contract might be FFP for
              defined recurring tasks (like a monthly report) and T&amp;M for surge or
              unforeseeable requirements. When you see a hybrid CLIN structure, price each type
              carefully with its own cost model — don&apos;t average them together.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For IDIQ task orders specifically, read the parent contract before the task order
              solicitation. The parent contract defines the allowable contract types for task
              orders, the pre-negotiated labor rates (if any), the ceiling, and the ordering
              procedures. Task order solicitations often reference parent contract terms that
              aren&apos;t repeated in the RFP itself — missing those terms produces proposals
              that are non-compliant on structure or pricing format.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If you&apos;re working through a high volume of solicitations, our{" "}
              <Link
                href="/features/proposals"
                className="text-blue-700 underline font-medium"
              >
                proposal tools
              </Link>{" "}
              help you build a compliance matrix from Section L and M requirements —
              including identifying contract type specifications — before you write a word
              of the proposal. See our full guide on{" "}
              <Link
                href="/blog/government-proposal-compliance-matrix"
                className="text-blue-700 underline font-medium"
              >
                building a government proposal compliance matrix
              </Link>
              .
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Find the Right Contracts for Where You Are Today
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot matches your certifications, NAICS codes, and past performance
                profile against the contract types and vehicles where you have the best shot
                at winning — not just a list of everything posted on SAM.gov.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily opportunity matching by contract type and set-aside status",
                  "IDIQ vehicle and on-ramp tracking for your target agencies",
                  "Intelligence on which vehicles generate the most task order volume",
                  "Pipeline management from first search to proposal submission",
                  "Proposal tools with compliance matrix generation",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={SIGNUP_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">No credit card required. Cancel any time.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/idiq-contracts-explained",
                  icon: Layers,
                  title: "IDIQ Contracts Explained",
                  desc: "How to get on a multi-year contract vehicle",
                },
                {
                  href: "/blog/gsa-schedule-guide",
                  icon: Building2,
                  title: "GSA Schedule Contracts",
                  desc: "Is a GSA Schedule right for your business?",
                },
                {
                  href: "/blog/government-contract-pricing-strategies",
                  icon: DollarSign,
                  title: "Government Contract Pricing",
                  desc: "Strategies to win without losing money",
                },
                {
                  href: "/blog/government-proposal-compliance-matrix",
                  icon: FileText,
                  title: "Compliance Matrix Guide",
                  desc: "Build a compliance matrix that wins proposals",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{link.title}</p>
                    <p className="text-xs text-stone-500">{link.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
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
