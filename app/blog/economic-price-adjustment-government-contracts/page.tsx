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
  TrendingUp,
  TrendingDown,
  Clock,
  AlertCircle,
  FileText,
  Target,
  DollarSign,
  Shield,
  BarChart3,
  Layers,
  Calculator,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-epa", label: "What an EPA Clause Actually Does" },
  { id: "three-types", label: "The Three FAR EPA Clause Types" },
  { id: "when-used", label: "When Contracting Officers Use EPA Clauses" },
  { id: "key-thresholds", label: "Key Thresholds, Caps, and Floors" },
  { id: "gsa-fss", label: "EPA on GSA Federal Supply Schedules" },
  { id: "request-epa", label: "How to Request an EPA Clause Before Award" },
  { id: "no-epa", label: "Stuck in a Fixed-Price Contract Without EPA" },
  { id: "tariffs-2025", label: "Tariffs, Inflation, and the 2025-2026 Reality" },
  { id: "proposal-language", label: "EPA Language to Build Into Your Proposals" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    red: "bg-red-50 border-red-200 text-red-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
    violet: "text-violet-600",
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function EconomicPriceAdjustmentPage() {
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
            <span className="text-stone-900 font-medium">Economic Price Adjustment</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Economic Price Adjustment Clauses:{" "}
            <span className="gradient-text">How to Protect Your Margins From Inflation in Federal Contracts</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Steel prices spike 30%. Diesel doubles. Labor rates jump 15% in a year. Without an economic
            price adjustment clause in your contract, you absorb every dollar of that — the government
            doesn&apos;t. Here&apos;s how EPA clauses work, when to ask for one, and how to protect your
            company before you sign.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published November 20, 2026</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 py-8 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "10%", label: "Max EPA increase cap under FAR 52.216-4", icon: TrendingUp },
              { value: "3%", label: "Materiality floor before adjustments trigger", icon: Calculator },
              { value: "6 mo", label: "Min performance period for EPA eligibility", icon: Clock },
              { value: "$250K", label: "Simplified acquisition threshold trigger", icon: DollarSign },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 text-blue-600 mb-1" />
                <p className="text-2xl font-black text-stone-900">{value}</p>
                <p className="text-xs text-stone-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8 pt-8">
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <SectionHeading id="what-is-epa" number="01" title="What an EPA Clause Actually Does" />

          <div className="animate-on-scroll">
            <p>
              Every fixed-price government contract locks in your price at award. That&apos;s great for
              the government — they know exactly what they&apos;ll pay. It can be disastrous for you if
              labor rates, materials costs, or fuel prices move significantly during performance.
            </p>

            <p>
              An Economic Price Adjustment (EPA) clause is a contractual mechanism that allows the stated
              price to move — up or down — when specified market conditions change. It doesn&apos;t remove
              cost risk entirely, but it transfers some of that risk back to the government when changes
              are outside your control.
            </p>

            <p>
              The key word is <em>specified</em>. The clause has to be in your contract before prices
              change. Once costs spike and you&apos;re underwater on a fixed-price deal, you have almost
              no leverage to get the government to adjust. EPA is a pre-award tool, not a post-award
              rescue.
            </p>
          </div>

          <Callout icon={AlertCircle} color="amber" title="The Fundamental Rule">
            <p>
              The government is not obligated to provide price adjustments for inflation, tariffs, or
              material cost increases unless your contract explicitly includes an EPA clause. If the clause
              isn&apos;t there, you assumed the risk when you signed.
            </p>
          </Callout>

          <div className="animate-on-scroll">
            <p>
              EPA clauses are governed by FAR Subpart 16.203. They&apos;re used with fixed-price
              contracts — not cost-reimbursement vehicles, where you bill actual costs regardless. The
              three situations where EPA is authorized: when market or labor conditions are genuinely
              unstable over the performance period, when adjustments are limited to contingencies beyond
              your control, and when adjustments can be made objectively using verifiable external data.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading id="three-types" number="02" title="The Three FAR EPA Clause Types" />

          <div className="animate-on-scroll">
            <p>
              FAR 16.203-4 specifies three standard EPA clauses. Each applies to a different situation,
              and knowing which one fits your contract type is critical when you&apos;re reviewing an RFP
              or negotiating.
            </p>
          </div>

          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">FAR Clause</th>
                  <th className="text-left px-4 py-3 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 font-semibold">When Used</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Adjustment Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-mono text-blue-700 font-medium">FAR 52.216-2</td>
                  <td className="px-4 py-3 text-stone-700">Standard Supplies</td>
                  <td className="px-4 py-3 text-stone-600">Commercial items with published catalog/market prices</td>
                  <td className="px-4 py-3 text-stone-600">Changes to the contractor&apos;s established catalog or market price</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-mono text-blue-700 font-medium">FAR 52.216-3</td>
                  <td className="px-4 py-3 text-stone-700">Semistandard Supplies</td>
                  <td className="px-4 py-3 text-stone-600">Modified commercial items; modifications are minor</td>
                  <td className="px-4 py-3 text-stone-600">Changes to the established price plus a fixed differential for modifications; 10% cap on increases</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-4 py-3 font-mono text-blue-700 font-medium">FAR 52.216-4</td>
                  <td className="px-4 py-3 text-stone-700">Labor and Material</td>
                  <td className="px-4 py-3 text-stone-600">Services or construction with significant labor/material cost exposure</td>
                  <td className="px-4 py-3 text-stone-600">Actual changes in labor rates (including fringes) and material unit prices listed in the contract schedule</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p>
              <strong>FAR 52.216-4</strong> is the workhorse for most service and construction contractors.
              It adjusts based on your actual cost experience — the rates and unit prices get listed in
              your contract schedule at award, and when they change, you can request an adjustment. The
              catch: only the specific labor categories and materials listed in the schedule are covered.
              If your contract schedule doesn&apos;t list it, the clause doesn&apos;t protect it.
            </p>

            <p>
              Beyond the three FAR standards, agencies can also write custom EPA clauses tied to published
              economic indexes — the Bureau of Labor Statistics Employment Cost Index (ECI), the Producer
              Price Index (PPI), or the Consumer Price Index (CPI). These index-based clauses are common
              in multi-year service contracts and require contracting officer documentation in the
              acquisition plan. When a DoD contract uses a PPI-based clause, the DFARS PGI requires the
              clause to specify which PPI revision applies if the index gets restructured.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="GSA Federal Supply Schedule EPA">
            <p>
              GSA has its own EPA framework under GSAM 538.270-4, with four distinct types: fixed
              escalation rates (like a set annual percentage), market or cost index adjustments (using BLS
              Employment Cost Index), established commercial pricing (catalog price changes), and
              unforeseeable significant market shifts. If you hold a GSA MAS contract, your EPA type was
              set during your schedule negotiation — it&apos;s worth reviewing before your next modification.
            </p>
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="when-used" number="03" title="When Contracting Officers Use EPA Clauses" />

          <div className="animate-on-scroll">
            <p>
              Contracting officers don&apos;t include EPA clauses automatically. FAR 16.203-3 requires
              a documented finding before using this contract type. Specifically, the CO must determine
              that the EPA is necessary to protect either the contractor or the government against
              significant fluctuations in labor or material costs — and that including the clause is in
              the government&apos;s interest.
            </p>

            <p>
              That second part matters. The government&apos;s interest argument cuts both ways: EPA
              clauses protect you when costs go up, but they also allow the government to demand a
              downward adjustment when costs fall. Some COs are reluctant to include EPA because it
              creates administrative burden. Others actively prefer it for long-duration contracts because
              it removes the risk premium contractors build into fixed-price bids.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <p className="font-bold text-emerald-800 text-sm">Situations Where EPA Is Common</p>
              </div>
              <ul className="text-sm text-emerald-700 space-y-2">
                <li>• Multi-year service contracts (3-5 years) with significant labor exposure</li>
                <li>• Construction contracts with volatile material costs (steel, lumber, fuel)</li>
                <li>• IT hardware supply contracts where component prices fluctuate</li>
                <li>• Logistics and transportation with diesel price exposure</li>
                <li>• Food service contracts where commodity prices vary seasonally</li>
                <li>• Contracts performed during periods of known market instability</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="font-bold text-red-800 text-sm">Situations Where EPA Is Rarely Used</p>
              </div>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• Short-duration contracts (under 6 months)</li>
                <li>• Contracts below the simplified acquisition threshold ($250K)</li>
                <li>• Purely intellectual or advisory services with stable labor</li>
                <li>• Sealed bid competitions without documented price instability</li>
                <li>• Contracts where pricing is predominantly fixed overhead</li>
                <li>• Sole-source awards at catalog prices with built-in adjustments</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading id="key-thresholds" number="04" title="Key Thresholds, Caps, and Floors" />

          <div className="animate-on-scroll">
            <p>
              EPA clauses don&apos;t adjust for every minor cost change. FAR 52.216-4 builds in both a
              floor and a ceiling to keep the administrative burden reasonable and to filter out normal
              market noise.
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            <div className="rounded-2xl border border-stone-200 p-6 hover-lift transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <span className="text-blue-700 font-black text-sm">3%</span>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">The 3% Materiality Floor</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    No adjustment is made unless the change in rates or unit prices produces a net change
                    of at least 3% of the then-current total contract price. This threshold exists to
                    prevent constant small adjustments. If your labor rates tick up 1%, you can&apos;t file
                    for adjustment — you need to accumulate enough change to cross the 3% threshold
                    before the clause activates. Track the delta from the beginning of performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 hover-lift transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-700 font-black text-sm">10%</span>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">The 10% Cap on Increases</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Aggregate increases to any contract unit price are capped at 10% of the original unit
                    price. There is no cap on decreases — the government can require your price to fall
                    without limit if your costs drop. The cap can be raised above 10%, but only with
                    approval from the chief of the contracting office. In exceptional circumstances —
                    tariff-driven steel price spikes, for example — contractors have successfully
                    negotiated higher caps before award.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 hover-lift transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <span className="text-emerald-700 font-black text-sm">6mo</span>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">The 6-Month Performance Requirement</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Per DFARS 216.203-4, an EPA clause is only appropriate when delivery or performance
                    will not be completed within 6 months of contract award. Short-duration contracts
                    don&apos;t qualify — the assumption is that you can price in short-term cost risk
                    without significant difficulty. For base-year-plus-option contracts, the question is
                    whether the base year alone exceeds 6 months or whether total ordering periods are
                    considered.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 hover-lift transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                  <span className="text-violet-700 font-black text-xs font-bold">SAT</span>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">The Simplified Acquisition Threshold</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The contract value must exceed the simplified acquisition threshold (currently $250,000)
                    for EPA clauses to apply under DFARS rules. Smaller contracts are expected to price
                    with enough margin to absorb typical cost fluctuations. For federal civilian agencies,
                    this threshold still guides best practice even when it&apos;s not a hard rule.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Callout icon={AlertTriangle} color="red" title="The Asymmetry Problem">
            <p>
              EPA clauses are not purely protective. The 10% cap limits your upside relief while
              there&apos;s no floor on downward adjustments. If your material costs drop 20%, the
              government can demand a 20% unit price reduction. Build this into your EPA negotiation
              strategy — you may want to push for symmetric limits or at least understand the full
              downside before agreeing to a clause you think is protecting you.
            </p>
          </Callout>

          {/* Section 5 */}
          <SectionHeading id="gsa-fss" number="05" title="EPA on GSA Federal Supply Schedules" />

          <div className="animate-on-scroll">
            <p>
              If you hold a <Link href="/blog/gsa-schedule-guide" className="text-blue-600 hover:underline">GSA Multiple Award Schedule</Link> contract,
              your economic price adjustment terms were negotiated when GSA awarded your schedule. The
              framework — defined in GSAM 538.270-4 — gives four distinct EPA approaches, and you need
              to know which one is in your contract.
            </p>
          </div>

          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">EPA Type</th>
                  <th className="text-left px-4 py-3 font-semibold">How It Works</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Common For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Fixed Escalation Rate</td>
                  <td className="px-4 py-3 text-stone-600">A set annual percentage increase (e.g., 3% per year) built into the schedule at award</td>
                  <td className="px-4 py-3 text-stone-600">Services with predictable labor cost growth</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Market / Cost Index</td>
                  <td className="px-4 py-3 text-stone-600">Prices tied to BLS Employment Cost Index or similar published index</td>
                  <td className="px-4 py-3 text-stone-600">IT services, professional services, staffing</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Established Commercial Pricing</td>
                  <td className="px-4 py-3 text-stone-600">Your commercial catalog or price list drives adjustments — if your list goes up, your GSA price can go up</td>
                  <td className="px-4 py-3 text-stone-600">Products, hardware, commercial software licenses</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Unforeseeable Market Shifts</td>
                  <td className="px-4 py-3 text-stone-600">Requests submitted to GSA when extraordinary market conditions arise outside the standard EPA mechanism</td>
                  <td className="px-4 py-3 text-stone-600">Commodity-sensitive products during supply disruptions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p>
              An important GSA rule: adjustments triggered by statute, executive order, or regulation
              are explicitly excluded from the EPA category. Changes required by a wage determination
              under the Service Contract Act, for example, are handled through separate mechanisms — not
              your EPA clause.
            </p>

            <p>
              For multi-year GSA contracts, there&apos;s a separate clause — GSAM 552.216-71 — with
              modified terms. If your schedule runs five years and was written under the multi-year
              variant, the adjustment mechanics differ from the standard annual EPA approach. Read the
              specific clause text in your contract, not just the general GSAM description.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading id="request-epa" number="06" title="How to Request an EPA Clause Before Award" />

          <div className="animate-on-scroll">
            <p>
              EPA is almost always a pre-award conversation. By the time you&apos;re performing and
              costs are rising, it&apos;s too late. Your window is during the solicitation phase —
              specifically, in your questions to the contracting officer before proposals are due.
            </p>

            <p>
              The process looks like this:
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                step: "1",
                title: "Review the solicitation for existing EPA language",
                desc: "Before asking for anything, search the RFP for FAR 52.216-2, 52.216-3, 52.216-4, and any agency-specific EPA clause numbers. Some solicitations include EPA by default for long-duration contracts — if yours does, check whether the terms are acceptable or whether you need to negotiate the caps.",
              },
              {
                step: "2",
                title: "Identify your high-risk cost categories",
                desc: "Build a list of the materials and labor categories that represent your biggest cost volatility. For construction: steel, lumber, concrete, diesel. For services: specific labor categories, fringe rates, overhead costs tied to market wages. These are what you need listed in the contract schedule if 52.216-4 applies.",
              },
              {
                step: "3",
                title: "Submit a pre-proposal question",
                desc: "During the question-and-answer period, formally ask whether the agency will consider including a fixed-price-with-EPA contract type given the duration and cost exposure. Cite FAR 16.203 and document the market instability case — recent cost data, PPI trends, specific commodity risk. This creates a record and puts the CO on notice.",
              },
              {
                step: "4",
                title: "Propose EPA in your technical or pricing approach",
                desc: "Some solicitations allow offerors to propose alternative contract types. If the RFP structure permits, explicitly propose a fixed-price-with-EPA and show how the adjustment mechanism would work. Use a known index — BLS PPI for specific commodities, BLS ECI for labor — so the CO can evaluate it objectively.",
              },
              {
                step: "5",
                title: "Negotiate during discussions",
                desc: "If you reach oral or written discussions, use that opportunity to push for EPA inclusion. Come with hard data: cost history, market forecasts, commodity price charts. The CO needs justification to include EPA — your job is to give them that justification in a form they can document.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-5 rounded-2xl border border-stone-200 hover-lift transition-all">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{title}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mid-article CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 my-10 animate-on-scroll">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Know What You&apos;re Walking Into Before You Bid</h3>
                <p className="text-blue-100 text-sm mb-4">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/intelligence" className="text-white underline">contract intelligence</Link>{" "}
                  flags contract duration, type, and pricing risk factors across active opportunities — so
                  you can spot EPA gaps before you bid instead of discovering them mid-performance.
                </p>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-50 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading id="no-epa" number="07" title="Stuck in a Fixed-Price Contract Without EPA" />

          <div className="animate-on-scroll">
            <p>
              You signed a firm-fixed-price contract with no EPA clause. Now costs have spiked. What are
              your options? Fewer than you&apos;d like — but not zero.
            </p>
          </div>

          <div className="space-y-6 my-8 animate-on-scroll">
            <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-900 mb-2">Option 1: Seek an Equitable Adjustment (REA or Claim)</h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                If a government action — a change order, a stop-work order, a delayed government-furnished
                property delivery — contributed to your cost increase, you may have grounds for a Request
                for Equitable Adjustment (REA). This isn&apos;t the same as an EPA claim; it requires
                showing the government&apos;s action caused the cost impact. Pure inflation from market
                forces doesn&apos;t qualify without an EPA clause.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-sky-400 bg-sky-50 p-6">
              <h3 className="font-bold text-sky-900 mb-2">Option 2: Negotiate a Bilateral Contract Modification</h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                Nothing prevents you from proposing a contract modification to add EPA language or
                adjust the price. The government isn&apos;t obligated to agree, but especially on
                long-duration contracts where absorbing your loss could threaten contract performance or
                your company&apos;s solvency, contracting officers sometimes negotiate modifications.
                Document your cost situation with hard data and frame it as a risk management conversation,
                not a complaint.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-violet-400 bg-violet-50 p-6">
              <h3 className="font-bold text-violet-900 mb-2">Option 3: Commercial Impracticability (Rarely Successful)</h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                In extreme cases, contractors have argued that unprecedented cost increases make
                performance commercially impracticable under common law or under FAR 49.401 termination
                for the government&apos;s convenience. Courts and boards of contract appeals apply this
                doctrine narrowly — market price increases alone almost never qualify. This is a last-resort
                legal argument, not a business strategy.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 p-6">
              <h3 className="font-bold text-emerald-900 mb-2">Option 4: Price the Risk Into Future Options</h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                If you&apos;re performing a base year with option years coming up, you have another shot.
                When the government exercises an option, that&apos;s a new pricing opportunity in some
                circumstances — particularly if the option year pricing was left unpriced at the time of
                award. Use your current cost situation to build a stronger case for EPA inclusion in the
                modified contract covering remaining option years.
              </p>
            </div>
          </div>

          <Callout icon={AlertCircle} color="red" title="DoD&apos;s Clear Position on Existing Contracts">
            <p>
              The Department of Defense has stated clearly it won&apos;t pay more to cover unexpected
              inflation costs for existing fixed-price contracts unless those contracts include a price
              adjustment clause. This applies to tariff-driven steel and aluminum price increases, labor
              market tightening, and energy cost spikes. The lesson: EPA is not retroactive. If it&apos;s
              not in your contract now, your only real leverage is renegotiation — and the government
              doesn&apos;t have to say yes.
            </p>
          </Callout>

          {/* Section 8 */}
          <SectionHeading id="tariffs-2025" number="08" title="Tariffs, Inflation, and the 2025-2026 Reality" />

          <div className="animate-on-scroll">
            <p>
              The practical urgency behind EPA clauses intensified sharply in 2025. New tariffs on
              imported steel, aluminum, and a range of other materials hit contractors on existing
              fixed-price contracts with no recourse. Law firms published guidance reminding federal
              construction contractors to check their contracts for EPA language — the ones without it
              were absorbing tariff costs entirely.
            </p>

            <p>
              The Association of General Contractors issued explicit guidance: without an appropriate
              price escalation clause in a firm fixed price contract, spikes in material prices for
              items such as steel and aluminum can be severely problematic. Their recommendation was
              identical to what the FAR has always said — but practitioners needed reminding because
              EPA had been underutilized during the relatively stable 2010s.
            </p>

            <p>
              For contracts currently being negotiated, the picture is different. Agencies on new
              solicitations are more receptive to EPA inclusion than they were five years ago. Contracting
              officers understand that if they don&apos;t include EPA, contractors will price in a
              substantial risk premium — and the government ends up paying more in the base price anyway.
              EPA, properly structured, can actually reduce the government&apos;s total cost on a
              long-duration contract.
            </p>
          </div>

          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Industry</th>
                  <th className="text-left px-4 py-3 font-semibold">Primary Cost Risk</th>
                  <th className="text-left px-4 py-3 font-semibold">Recommended EPA Approach</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Index to Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Construction</td>
                  <td className="px-4 py-3 text-stone-600">Steel, lumber, concrete, fuel</td>
                  <td className="px-4 py-3 text-stone-600">FAR 52.216-4 with specific materials listed in schedule</td>
                  <td className="px-4 py-3 text-stone-600">BLS PPI for Construction</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">IT Services</td>
                  <td className="px-4 py-3 text-stone-600">Labor rates, tech talent market</td>
                  <td className="px-4 py-3 text-stone-600">Index-based clause tied to ECI or GSA wage survey</td>
                  <td className="px-4 py-3 text-stone-600">BLS Employment Cost Index</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Logistics / Transportation</td>
                  <td className="px-4 py-3 text-stone-600">Diesel, driver wages</td>
                  <td className="px-4 py-3 text-stone-600">FAR 52.216-4 with fuel indexed separately</td>
                  <td className="px-4 py-3 text-stone-600">EIA Diesel Retail Price Index</td>
                </tr>
                <tr className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Food Service</td>
                  <td className="px-4 py-3 text-stone-600">Commodity prices, labor</td>
                  <td className="px-4 py-3 text-stone-600">Fixed escalation rate or commodity PPI clause</td>
                  <td className="px-4 py-3 text-stone-600">BLS PPI for Food Manufacturing</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="px-4 py-3 font-medium text-stone-900">Facility Maintenance</td>
                  <td className="px-4 py-3 text-stone-600">Labor, parts, energy</td>
                  <td className="px-4 py-3 text-stone-600">FAR 52.216-4 with comprehensive labor schedule</td>
                  <td className="px-4 py-3 text-stone-600">BLS ECI Service Workers</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 9 */}
          <SectionHeading id="proposal-language" number="09" title="EPA Language to Build Into Your Proposals" />

          <div className="animate-on-scroll">
            <p>
              When a solicitation is silent on contract type or leaves room for offeror input, here&apos;s
              how to frame an EPA request in your proposal without looking like you&apos;re trying to
              game the pricing. The goal is to make the CO&apos;s job easier, not harder.
            </p>
          </div>

          <div className="bg-stone-900 rounded-2xl p-6 my-8 animate-on-scroll">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-stone-400" />
              <p className="text-stone-400 text-xs font-mono uppercase tracking-wider">Sample Proposal Language</p>
            </div>
            <div className="text-sm text-stone-300 leading-relaxed space-y-3 font-mono">
              <p>
                <span className="text-blue-400">PRICING APPROACH — ECONOMIC PRICE ADJUSTMENT:</span>
              </p>
              <p>
                Given the [X]-year period of performance, [Company Name] proposes pricing structured as
                a fixed-price with economic price adjustment (FAR 16.203) for the following labor
                categories and material inputs: [list]. The adjustment mechanism would be tied to the
                [BLS ECI / BLS PPI for X commodity], with a 3% materiality floor consistent with FAR
                52.216-4. This approach protects both the Government and [Company Name] against
                significant labor or material market shifts while removing the risk premium a purely
                firm-fixed-price structure would require us to include.
              </p>
              <p>
                We are prepared to execute under a firm-fixed-price structure at the alternate pricing
                in Attachment X, which includes a risk premium of approximately [X]% to account for
                cost uncertainty over the period of performance.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <p>
              That last paragraph is important. When you present both an EPA price and a FFP price that
              includes the risk premium, you&apos;re showing the CO the cost of not including EPA. That
              framing often moves conversations forward faster than a pure argument for EPA on its merits.
            </p>

            <p>
              Once the clause is in your contract, tracking is everything. Set up a system from day one
              to monitor your actual labor rates and material unit prices against the schedule amounts.
              When the difference crosses the 3% materiality threshold, file your request promptly —
              don&apos;t wait until you&apos;re deep in cost overrun. The{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline">intelligence tools</Link>{" "}
              in CapturePilot can help you track contract terms and flag when thresholds need attention
              across your active portfolio.
            </p>
          </div>

          <Callout icon={CheckCircle2} color="emerald" title="Quick EPA Checklist Before You Sign">
            <ul className="space-y-1">
              <li>✓ Does the solicitation include any FAR 52.216-2, -3, or -4 clause?</li>
              <li>✓ Is the performance period longer than 6 months?</li>
              <li>✓ Does the contract value exceed $250,000?</li>
              <li>✓ Have you identified your top 3-5 volatile cost categories?</li>
              <li>✓ Are those categories listed specifically in the contract schedule?</li>
              <li>✓ Is the 10% cap adequate for your cost risk exposure, or should you negotiate higher?</li>
              <li>✓ Do you have a process to track actual costs against schedule amounts continuously?</li>
              <li>✓ Have you noted the 3% materiality threshold and planned when you&apos;ll file for adjustment?</li>
            </ul>
          </Callout>

          {/* Final CTA */}
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 my-10 animate-on-scroll">
            <div className="text-center">
              <BarChart3 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-stone-900 mb-3">
                Know Your Contract Risk Before You Bid
              </h3>
              <p className="text-stone-600 mb-6 max-w-xl mx-auto">
                CapturePilot analyzes contract duration, type, and pricing structure across federal
                opportunities — helping you spot EPA gaps, build stronger proposals, and protect
                your margins on multi-year awards.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-700 font-bold px-6 py-3 rounded-full border border-stone-200 hover:border-blue-300 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll mt-16 pt-10 border-t border-stone-200">
            <h3 className="text-xl font-black text-stone-900 mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/government-contract-pricing-strategies",
                  title: "Government Contract Pricing Strategies",
                  desc: "How to price fixed-price bids without leaving money on the table",
                },
                {
                  href: "/blog/far-clauses-small-business",
                  title: "Key FAR Clauses Every Small Business Must Know",
                  desc: "The contract clauses that affect your rights and obligations the most",
                },
                {
                  href: "/blog/federal-contract-types-explained",
                  title: "Federal Contract Types Explained",
                  desc: "FFP, T&M, IDIQ, cost-reimbursement — which ones to pursue",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl border border-stone-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <p className="font-bold text-stone-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                    {title}
                  </p>
                  <p className="text-stone-500 text-xs">{desc}</p>
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
