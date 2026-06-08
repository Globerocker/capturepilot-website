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
  FileText,
  DollarSign,
  Calculator,
  Target,
  Zap,
  BarChart3,
  XCircle,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-cost-volume", label: "What the Cost Volume Actually Is" },
  { id: "building-blocks", label: "The Five Building Blocks of a Cost Volume" },
  { id: "direct-labor", label: "Direct Labor: Rates, Categories, and Hours" },
  { id: "indirect-rates", label: "Indirect Rates: Fringe, Overhead, and G&A" },
  { id: "wrap-rate", label: "Calculating Your Wrap Rate Correctly" },
  { id: "other-direct-costs", label: "Other Direct Costs: Travel, Materials, Subs" },
  { id: "profit-and-fee", label: "Profit and Fee: What's Reasonable" },
  { id: "basis-of-estimate", label: "The Basis of Estimate: Your Pricing Narrative" },
  { id: "tina-threshold", label: "TINA and Certified Cost Data: When It Applies" },
  { id: "common-mistakes", label: "Common Cost Volume Mistakes That Kill Proposals" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function CostVolumeGovernmentProposalPage() {
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
            <span className="text-stone-900 font-medium">Cost Volume</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Write the Cost Volume{" "}
            <span className="gradient-text">of a Government Proposal</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The technical volume wins the contract on paper. The cost volume wins it in reality.
            Pricing too high loses to a cheaper competitor. Pricing too low loses money — or flags
            your bid as unrealistic. This guide shows you how to build a cost volume that is{" "}
            <strong className="text-stone-700">defensible, compliant, and competitive</strong>.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 8, 2026</span>
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
            id="what-is-cost-volume"
            number="01"
            title="What the Cost Volume Actually Is"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most small businesses obsess over the technical volume. They write beautifully about
              their approach, their team, their past performance. Then they throw together a
              spreadsheet the night before the proposal is due and call it pricing. That approach
              loses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The cost volume — also called the pricing volume or price proposal — is a separate,
              standalone section of your government proposal that documents{" "}
              <strong>how you arrived at every dollar you&apos;re asking the government to pay you</strong>.
              It is not just a total number. It is an audit-ready breakdown of labor, indirect
              costs, materials, subcontractor costs, and profit — supported by a narrative that
              justifies every assumption.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For competitive negotiated procurements under{" "}
              <strong>FAR Part 15</strong>, the cost volume is evaluated independently of your
              technical volume. Evaluators perform cost realism analysis — they assess whether your
              price reflects a realistic understanding of what the work actually costs. Price too
              low and they&apos;ll question whether you understand the requirement. Price too high
              and a competitor beats you on value.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Getting the cost volume right requires three things working together: compliant
              structure, defensible numbers, and a clear narrative. Most proposals fail on the
              third. The math can be right and still fail if the evaluator can&apos;t trace how
              you got there.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  stat: "FAR Part 15",
                  label: "Governs competitive negotiated proposals and cost realism analysis",
                  icon: Shield,
                },
                {
                  stat: "$2.5M",
                  label: "TINA threshold requiring certified cost data (as of Oct 1, 2025)",
                  icon: DollarSign,
                },
                {
                  stat: "5–10%",
                  label: "Typical profit / fee range on federal contracts",
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-on-scroll bg-white rounded-2xl border border-stone-200 p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <div className="text-2xl font-black text-stone-900 mb-1">{item.stat}</div>
                  <div className="text-xs text-stone-500 leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="building-blocks"
            number="02"
            title="The Five Building Blocks of a Cost Volume"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Every government cost volume has the same fundamental structure, regardless of agency
              or contract type. The solicitation will specify exact formatting requirements — follow
              those first. But the underlying components are always these five:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  number: "1",
                  title: "Direct Labor",
                  description:
                    "The base compensation paid to employees who directly perform the contract work. Broken out by labor category, hours per period, and hourly rate.",
                  color: "bg-blue-50 border-blue-200",
                  numColor: "bg-blue-600",
                },
                {
                  number: "2",
                  title: "Indirect Rates",
                  description:
                    "Fringe benefits, overhead, and G&A — costs that support the business but can't be assigned to a single contract. Applied as percentages on top of direct costs.",
                  color: "bg-violet-50 border-violet-200",
                  numColor: "bg-violet-600",
                },
                {
                  number: "3",
                  title: "Other Direct Costs (ODCs)",
                  description:
                    "Expenses directly attributable to the contract but outside labor: travel, materials, equipment, consultants, software licenses.",
                  color: "bg-emerald-50 border-emerald-200",
                  numColor: "bg-emerald-600",
                },
                {
                  number: "4",
                  title: "Subcontractor Costs",
                  description:
                    "Pass-through costs from teaming partners or specialty subs. Each sub's pricing is usually attached as a separate proposal or quote.",
                  color: "bg-amber-50 border-amber-200",
                  numColor: "bg-amber-600",
                },
                {
                  number: "5",
                  title: "Profit / Fee",
                  description:
                    "Your margin, applied after all costs. Government distinguishes between fee (cost-plus contracts) and profit (fixed-price contracts), but both represent your return above cost.",
                  color: "bg-sky-50 border-sky-200",
                  numColor: "bg-sky-600",
                },
              ].map((block) => (
                <div
                  key={block.number}
                  className={`animate-on-scroll rounded-2xl border p-5 ${block.color} flex gap-4`}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${block.numColor} text-white font-black text-sm flex items-center justify-center flex-shrink-0`}
                  >
                    {block.number}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{block.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{block.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The solicitation&apos;s Section L will specify which of these categories to include
              and in what format — sometimes as a government-provided Excel template, sometimes as
              a free-form spreadsheet, sometimes through the solicitation management system. Read
              Section L before you build anything.
            </p>

            <Callout icon={Lightbulb} color="blue" title="Align your cost volume to your technical volume">
              If your technical proposal staffs three Senior Engineers at 2,000 hours each, your
              cost volume must show three Senior Engineers at 2,000 hours each. Evaluators
              cross-reference the volumes. Inconsistencies between your staffing plan and your
              pricing don&apos;t just look sloppy — they trigger questions about which one is real.
              Use{" "}
              <Link href="/features/proposals" className="underline hover:text-blue-800">
                CapturePilot&apos;s proposal tools
              </Link>{" "}
              to keep both volumes synchronized from a single source of truth.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="direct-labor"
            number="03"
            title="Direct Labor: Rates, Categories, and Hours"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Direct labor is the engine of your cost volume. It&apos;s usually the largest cost
              element, and it&apos;s the one agencies scrutinize most during cost realism analysis.
              Get this wrong — either the rates or the hours — and you&apos;re in trouble.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Your labor section needs to show three things for each person or category:{" "}
              <strong>who they are</strong> (labor category or title),{" "}
              <strong>what they cost</strong> (base hourly rate), and{" "}
              <strong>how long they&apos;ll work</strong> (hours by period of performance). That&apos;s it.
              Everything else flows from those inputs.
            </p>

            <h3 className="text-xl font-black text-stone-900 mt-8 mb-4">
              Setting Your Labor Rates
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Your rates need to be defensible — meaning you can back them up with data. There are
              three sources government evaluators recognize as legitimate:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                {
                  title: "Current payroll data",
                  desc: "If you already employ the person in that role, your actual salary is the cleanest evidence you can provide.",
                },
                {
                  title: "Bureau of Labor Statistics (BLS) Occupational Employment Statistics",
                  desc: "The BLS publishes median wages by occupation and metropolitan area. Free, government-sourced, hard to argue with.",
                },
                {
                  title: "Commercial salary surveys",
                  desc: "Data from Salary.com, Glassdoor, or industry-specific surveys. Acceptable, but make sure the source is reputable and current.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-600 text-sm leading-relaxed">
                    <strong className="text-stone-800">{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-stone-600 leading-relaxed mb-4">
              If the solicitation covers services under the{" "}
              <strong>Service Contract Act (SCA)</strong> — which applies to many support service
              contracts — your rates must meet the applicable Wage Determination minimums. These
              are published on SAM.gov per location and occupation code. Missing an SCA wage
              determination is one of the most common and most preventable cost volume errors.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Executive Order 14026 sets the federal contractor minimum wage at{" "}
              <strong>$17.75 per hour</strong> (effective January 1, 2025) for covered contracts.
              This is a floor, not a target — skilled technical workers will cost far more.
              But if any of your proposed rates fall below this number, your proposal can be
              rejected for non-responsibility.
            </p>

            <h3 className="text-xl font-black text-stone-900 mt-8 mb-4">
              Estimating Hours
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Hours are how you translate your staffing plan into dollars. The number of hours
              needs to match the technical reality — not be inflated to hit a revenue target, and
              not be artificially reduced to win on price. Either approach creates problems.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              A standard full-time equivalent (FTE) in government contracting is{" "}
              <strong>1,880 billable hours per year</strong> — 2,080 hours in a year minus 10
              federal holidays and 10 days of PTO. Some contracts use 2,080 directly; check the
              solicitation. Part-time roles, phased staffing, and option years all change the
              calculation. Document your assumptions explicitly.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Hours and rates must tell the same story">
              If you propose a Senior Systems Engineer at $85/hour but bill only 400 hours per
              year, evaluators will ask whether that person can realistically sustain the required
              deliverable pace. Conversely, if you propose 2,000 hours for a consultant role that
              clearly requires site visits, factor in non-billable travel time. Your basis of
              estimate should explain both numbers.
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-black mb-2">Are you eligible for the contracts you&apos;re targeting?</h3>
                <p className="text-blue-100 text-sm">
                  Before you write the cost volume, make sure you qualify. Check your certifications
                  and set-aside eligibility in under 60 seconds.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="indirect-rates"
            number="04"
            title="Indirect Rates: Fringe, Overhead, and G&A Explained"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Indirect costs are real costs — they just can&apos;t be pinned to a single contract.
              Every business has them. The government recognizes this and allows you to recover
              them through indirect rate structures. But the rates must be calculated correctly,
              applied in the right order, and consistent with how you actually run your business.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              There are three standard indirect rate pools:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-lg font-semibold">Rate Pool</th>
                    <th className="text-left p-4 font-semibold">What It Covers</th>
                    <th className="text-left p-4 font-semibold">Applied To</th>
                    <th className="text-left p-4 rounded-tr-lg font-semibold">Typical Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      pool: "Fringe Benefits",
                      covers: "FICA, health insurance, 401(k), paid leave, workers' comp",
                      appliedTo: "Direct labor wages",
                      range: "25–35%",
                    },
                    {
                      pool: "Overhead",
                      covers: "Facilities, indirect supervision, equipment depreciation, utilities for project delivery",
                      appliedTo: "Direct labor + fringe",
                      range: "30–60%",
                    },
                    {
                      pool: "G&A (General & Administrative)",
                      covers: "Executive salaries, accounting, legal, IT, business development",
                      appliedTo: "Total cost input (direct + overhead)",
                      range: "8–15%",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="p-4 font-bold text-stone-800 border-b border-stone-100">
                        {row.pool}
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">
                        {row.covers}
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">
                        {row.appliedTo}
                      </td>
                      <td className="p-4 font-mono text-stone-800 border-b border-stone-100">
                        {row.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your indirect rates should come from your actual accounting data — typically your
              most recent fiscal year actuals, projected forward for any anticipated changes. If
              you&apos;re a new company without historical data, you&apos;ll need to build
              projected rates based on your business plan and budget. Be prepared to defend them
              with supporting schedules.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Established contractors doing significant DoD work often have{" "}
              <strong>Forward Pricing Rate Agreements (FPRAs)</strong> or Forward Pricing Rate
              Recommendations (FPRRs) negotiated with DCAA. If you have one, use those rates —
              they are pre-negotiated and carry significant credibility with contracting officers.
              Small businesses without FPRAs should document their rate derivation clearly.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="wrap-rate"
            number="05"
            title="Calculating Your Wrap Rate Correctly"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The wrap rate is the single number that tells you the fully burdened cost of one
              hour of labor on a government contract. It stacks your indirect rates sequentially
              on top of your base wage. Understanding how to calculate it — and the extremely
              common mistake that inflates it — is essential.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The most expensive math mistake in government contracting">
              Contractors routinely apply indirect rates additively instead of sequentially.
              They add 25% fringe + 40% overhead + 10% G&A = 75%, then multiply base labor
              by 1.75. Wrong. Each rate compounds on the previous total. The correct method
              applies each rate to the running subtotal, not to the original base.
            </Callout>

            <h3 className="text-xl font-black text-stone-900 mt-8 mb-4">
              Step-by-Step Wrap Rate Calculation
            </h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Using a base wage of $50.00/hour and typical indirect rates:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  step: "1",
                  label: "Base Hourly Wage",
                  formula: "$50.00",
                  result: "$50.00",
                  desc: "Starting point — direct labor rate",
                },
                {
                  step: "2",
                  label: "Apply Fringe (25%)",
                  formula: "$50.00 × 1.25",
                  result: "$62.50",
                  desc: "Benefits loaded onto base wage",
                },
                {
                  step: "3",
                  label: "Apply Overhead (40%)",
                  formula: "$62.50 × 1.40",
                  result: "$87.50",
                  desc: "Overhead on labor + fringe subtotal",
                },
                {
                  step: "4",
                  label: "Apply G&A (10%)",
                  formula: "$87.50 × 1.10",
                  result: "$96.25",
                  desc: "G&A on the running cost total",
                },
                {
                  step: "5",
                  label: "Apply Profit (8%)",
                  formula: "$96.25 × 1.08",
                  result: "$103.95",
                  desc: "Final billable rate to the government",
                },
              ].map((row) => (
                <div
                  key={row.step}
                  className="flex items-center gap-4 bg-stone-50 rounded-xl border border-stone-200 p-4"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                    {row.step}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-stone-900 text-sm">{row.label}</p>
                    <p className="text-xs text-stone-500">{row.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-stone-400">{row.formula}</p>
                    <p className="font-black text-stone-900 font-mono">{row.result}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your wrap rate multiplier in this example is{" "}
              <strong className="font-mono">2.079</strong> — meaning every $1.00 of base labor
              becomes $2.08 in fully burdened billing rate. That is the number you use when an
              agency asks for your wrap rate in a sources sought or RFI response.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The order of operations matters. Always apply fringe first (it burdens base labor),
              then overhead (it burdens the fringe-loaded cost), then G&A (it burdens the
              overhead-loaded total). Applying G&A before overhead, or skipping fringe and folding
              it into overhead, produces different numbers — and inconsistency between your
              narrative and your math will trigger questions from a DCAA auditor.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="other-direct-costs"
            number="06"
            title="Other Direct Costs: Travel, Materials, and Subcontractors"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Other Direct Costs (ODCs) are contract-specific expenses outside of labor. They get
              their own line items, their own supporting documentation, and in many cases, their
              own G&A application. What counts as an ODC varies by contract, but the most common
              categories are:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Layers,
                  title: "Travel",
                  body: "Air, hotel, per diem, ground transport. Always priced at GSA per diem rates unless the solicitation specifies otherwise. Cite the relevant GSA city/county rate in your basis of estimate.",
                },
                {
                  icon: BarChart3,
                  title: "Materials and Supplies",
                  body: "Hardware, software licenses, consumables. Get vendor quotes. Attach them as supporting documentation. Cost-plus contracts in particular require competitive quotes or sole-source justification above the simplified acquisition threshold.",
                },
                {
                  icon: Users,
                  title: "Subcontractors",
                  body: "Each sub should provide a separate cost proposal or firm quote. Attach it to your cost volume. You typically apply G&A on pass-through subcontractor costs — but not overhead, since you're not managing their direct labor.",
                },
                {
                  icon: Calculator,
                  title: "Consultants and Independent Contractors",
                  body: "Treated like subs — direct costs with G&A applied. Have a signed statement of work or consulting agreement ready. DCAA will ask for it on any audit.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-on-scroll bg-white rounded-2xl border border-stone-200 p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <h4 className="font-bold text-stone-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The key discipline with ODCs is documentation. Every line item needs a source:{" "}
              a vendor quote, a GSA schedule rate, a government-published per diem table,
              a previous contract invoice. ODC costs without supporting data are the first thing
              cut during negotiations. Don&apos;t give evaluators a reason to reduce your number.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Travel costs deserve special attention. Under{" "}
              <strong>FAR 31.205-46</strong>, only the amount that would be allowable under GSA
              travel regulations (the Federal Travel Regulation) is reimbursable. If you propose
              business-class flights when the regulation requires coach, that overage is
              unallowable. Build your travel budget on the FTR from day one.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="profit-and-fee"
            number="07"
            title="Profit and Fee: What's Reasonable"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Government contracts are not charities. The government expects contractors to earn
              a fair profit. But &quot;fair&quot; is a loaded word in this context — agencies use
              structured profit analysis tools to evaluate whether your proposed profit is
              justified by the risk you&apos;re taking.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The DoD uses the{" "}
              <strong>Weighted Guidelines Method</strong> (DFARS 215.404-70) to develop a
              pre-negotiation profit objective. Civilian agencies use similar weighted approaches
              under FAR 15.404-4. Both consider factors including contract type, technical risk,
              contractor investment, and use of cost-efficient practices.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-lg font-semibold">Contract Type</th>
                    <th className="text-left p-4 font-semibold">Risk Level</th>
                    <th className="text-left p-4 rounded-tr-lg font-semibold">Typical Fee/Profit Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Firm Fixed Price (FFP)",
                      risk: "Highest — you bear all cost overrun risk",
                      fee: "8–15%",
                    },
                    {
                      type: "Fixed Price Incentive (FPI)",
                      risk: "High — risk shared with ceiling price",
                      fee: "7–12%",
                    },
                    {
                      type: "Cost Plus Fixed Fee (CPFF)",
                      risk: "Low — government bears cost risk",
                      fee: "5–10%",
                    },
                    {
                      type: "Cost Plus Incentive Fee (CPIF)",
                      risk: "Low to moderate",
                      fee: "5–12% (base + incentive)",
                    },
                    {
                      type: "Time & Materials (T&M)",
                      risk: "Moderate — baked into hourly rates",
                      fee: "Embedded in wrap rate",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-semibold text-stone-800 border-b border-stone-100">
                        {row.type}
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.risk}</td>
                      <td className="p-4 font-mono font-bold text-blue-700 border-b border-stone-100">
                        {row.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you&apos;re a small business on a fixed-price contract with no CPARS history and
              no government-furnished equipment or facilities, your risk is higher — and a higher
              fee is justified. If you&apos;re on a cost-plus contract where the government
              validates your actual costs every year, your risk is lower. Let the contract type
              drive your fee logic, not a desire to hit a revenue target.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              There&apos;s a FAR ceiling on fees for cost-type contracts: CPFF contracts cap fee
              at{" "}
              <strong>10% of estimated cost</strong> for research contracts and{" "}
              <strong>15% for other contracts</strong> (FAR 15.404-4(c)(4)(i)). FFP contracts
              have no regulatory fee ceiling, but a proposed profit of 25% on a service contract
              will raise eyebrows.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="Price to win — but don't price yourself out of margin">
              The goal isn't the lowest possible number. It's the lowest price that lets you
              perform the work without cutting corners. Proposals that win by underpricing then
              fail on performance — and a failed contract does more damage to your past
              performance record than a loss ever would. Use{" "}
              <Link href="/features/intelligence" className="underline hover:text-emerald-800">
                competitive intelligence
              </Link>{" "}
              to understand what incumbents and competitors charge before you finalize your price.
            </Callout>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="basis-of-estimate"
            number="08"
            title="The Basis of Estimate: Your Pricing Narrative"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The basis of estimate (BOE) is the written narrative that explains how you arrived
              at every number in your cost spreadsheet. Most small businesses treat it as an
              afterthought. It shouldn&apos;t be. The BOE is what transforms a spreadsheet into
              a defensible proposal — and it&apos;s the document a DCAA auditor or contracting
              officer reads when they want to understand your pricing assumptions.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              A complete BOE addresses each major cost element separately:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  heading: "Labor BOE",
                  content:
                    "For each labor category: explain how you determined the rate (BLS data, payroll records, salary surveys), how you estimated the hours (task-based analysis, analogous historical data, engineering judgment), and any escalation factors applied to future option years.",
                },
                {
                  heading: "Indirect Rate BOE",
                  content:
                    "Show the derivation of each rate from actual cost pool data. For a new company, show the projected cost pools and base from your budget. Explain any significant deviations from prior-year rates.",
                },
                {
                  heading: "ODC BOE",
                  content:
                    "For each ODC line, cite your source. 'Travel estimated at 2 trips per quarter × $650 airfare per GSA city-pair rates, $XX lodging per FTR, $XX per diem' is defensible. 'Travel: $20,000' is not.",
                },
                {
                  heading: "Subcontractor BOE",
                  content:
                    "Reference the attached sub proposal or quote. Note whether the sub is a small business for subcontracting plan credit. If the sub is sole-source, explain why.",
                },
                {
                  heading: "Fee / Profit BOE",
                  content:
                    "State the proposed percentage and tie it to contract type, risk, and any relevant Weighted Guidelines factors. Don't just write '8% fee' — explain why 8% is appropriate given the performance risks.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-on-scroll border-l-4 border-blue-400 pl-5 py-2"
                >
                  <h4 className="font-bold text-stone-900 mb-1">{item.heading}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The BOE must reconcile with your spreadsheet. If your narrative says you&apos;re
              proposing 3 FTEs at 1,880 hours each, the spreadsheet must show 5,640 total labor
              hours. Any disconnect between the narrative and the numbers will be flagged — and
              in a best-and-final-offer (BAFO) situation, you won&apos;t get a chance to fix it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The most common BOE failure: no narrative at all. Some small businesses submit a
              spreadsheet with no explanatory text and expect the numbers to speak for themselves.
              They don&apos;t. An evaluator without context for your numbers will apply government
              cost realism adjustments — usually downward — and evaluate you on their adjusted
              number, not yours.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-50 rounded-2xl border border-stone-200 p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Build proposals that win — not just qualify
                </h3>
                <p className="text-stone-500 text-sm">
                  CapturePilot&apos;s proposal tools help you structure compliant cost volumes,
                  track requirements across volumes, and manage the entire submission from pipeline
                  to award.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Start free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="tina-threshold"
            number="09"
            title="TINA and Certified Cost Data: When It Applies"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The <strong>Truth in Negotiations Act (TINA)</strong>, now codified as the
              Truthful Cost or Pricing Data Act, requires that contractors submitting proposals
              above a certain dollar threshold provide certified cost or pricing data — and certify
              that the data is{" "}
              <strong>accurate, complete, and current</strong> as of the date of price agreement.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The threshold matters because certifying inaccurate data creates criminal liability.
              A contractor that submits cost data it knows is outdated or incomplete — or that
              fails to disclose information that would have changed the government&apos;s
              negotiated price — faces defective pricing claims, penalties, and potential
              debarment.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-lg font-semibold">Effective Date</th>
                    <th className="text-left p-4 font-semibold">TINA Threshold</th>
                    <th className="text-left p-4 rounded-tr-lg font-semibold">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      date: "Pre-2018",
                      threshold: "$750,000",
                      source: "Historical baseline",
                    },
                    {
                      date: "July 1, 2018",
                      threshold: "$2,000,000",
                      source: "FY2018 NDAA",
                    },
                    {
                      date: "October 1, 2025",
                      threshold: "$2,500,000",
                      source: "Inflationary adjustment",
                    },
                    {
                      date: "July 1, 2026 (pending)",
                      threshold: "$10,000,000",
                      source: "FY2026 NDAA, Section 1804(c)",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.date}</td>
                      <td className="p-4 font-mono font-bold text-blue-700 border-b border-stone-100">
                        {row.threshold}
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              As of today (June 2026), the threshold is{" "}
              <strong>$2.5 million</strong>. The FY2026 NDAA raises it to $10 million for
              contracts entered into after June 30, 2026 — a significant change that will
              eliminate the certified data requirement for a large swath of mid-size government
              contracts. But until that date, the $2.5M threshold applies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Even below the TINA threshold, you&apos;re still required to provide{" "}
              <strong>data other than certified cost or pricing data</strong> (FAR 15.403-3).
              This includes commercial pricing, catalog prices, market surveys, or other
              information sufficient to allow the contracting officer to establish price
              reasonableness. The certification requirement goes away at lower values, but the
              obligation to support your price does not.
            </p>

            <Callout icon={Shield} color="sky" title="TINA exceptions apply to some contracts">
              Certified cost data is NOT required when: the award is based on adequate price
              competition (two or more competing offers), the award is for a commercial item
              (FAR Part 12), or the price is set by law or regulation. Many small business
              contracts — particularly set-aside competitions with multiple offers — qualify
              under the competition exception. Confirm with your contracting officer before
              spending time building a certified data package you may not need.
            </Callout>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="common-mistakes"
            number="10"
            title="Common Cost Volume Mistakes That Kill Proposals"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most cost volume failures come from a handful of repeating errors. Some are
              mechanical. Some are strategic. All of them are avoidable.
            </p>

            <div className="space-y-5 my-8">
              {[
                {
                  icon: XCircle,
                  color: "text-red-500",
                  bg: "bg-red-50 border-red-200",
                  title: "Additive instead of sequential indirect rate application",
                  body: "The most common math error in government pricing. Adding fringe + overhead + G&A percentages then multiplying by base labor is wrong. Apply each rate to the running total. The difference can be hundreds of thousands of dollars on a multi-year contract.",
                },
                {
                  icon: XCircle,
                  color: "text-red-500",
                  bg: "bg-red-50 border-red-200",
                  title: "Labor categories that don't match the solicitation",
                  body: "If the RFP asks for 'Software Engineer II' and you price 'Senior Developer,' an evaluator may not be able to evaluate your cost realism. Use the labor categories and skill levels specified in the PWS. If the solicitation doesn't specify categories, use clear, defensible titles tied to BLS or industry standards.",
                },
                {
                  icon: XCircle,
                  color: "text-red-500",
                  bg: "bg-red-50 border-red-200",
                  title: "Missing escalation for multi-year contracts",
                  body: "Labor costs increase over time. If you propose the same hourly rate in year 1 and year 5, evaluators will question whether you've accounted for salary increases, inflation, and SCA wage determination updates. Typical escalation rates are 2–4% per year — document your assumption.",
                },
                {
                  icon: XCircle,
                  color: "text-red-500",
                  bg: "bg-red-50 border-red-200",
                  title: "No supporting documentation for ODCs",
                  body: "Travel budget built from memory instead of GSA per diem rates. Materials costs without vendor quotes. Equipment depreciation without an asset schedule. Every ODC line item needs a source document. If you can't point to one, you can't defend the number.",
                },
                {
                  icon: XCircle,
                  color: "text-red-500",
                  bg: "bg-red-50 border-red-200",
                  title: "Disconnects between volumes",
                  body: "Your technical volume says the work will be performed in Washington, D.C. Your cost volume uses rates for a lower-cost market. Your technical volume proposes a team lead on-site 100% of the time; your travel budget shows zero site visits. These disconnects are an evaluator's red flag.",
                },
                {
                  icon: XCircle,
                  color: "text-red-500",
                  bg: "bg-red-50 border-red-200",
                  title: "Pricing the minimum to win instead of what the work costs",
                  body: "Agencies perform cost realism analysis specifically because low prices that don't reflect realistic costs are a risk — not a benefit. A price that is unrealistically low will be adjusted upward during realism analysis, and you may lose to a higher bidder who appears more credible. Know the difference between 'price to win' and 'underbid to win.'",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`animate-on-scroll rounded-2xl border p-5 ${item.bg} flex gap-4`}
                >
                  <item.icon className={`w-5 h-5 ${item.color} mt-0.5 flex-shrink-0`} />
                  <div>
                    <p className="font-bold text-stone-900 mb-1 text-sm">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-black text-stone-900 mt-10 mb-4">
              The Cost Volume Review Checklist
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Before you submit, walk through this list. Every item should have a yes.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                "Section L formatting requirements followed exactly",
                "Labor categories match the solicitation",
                "Hours reconcile with the technical staffing plan",
                "Rates supported by BLS data, payroll records, or surveys",
                "SCA wage determinations applied where required",
                "Minimum wage ($17.75/hr) floor respected",
                "Indirect rates applied sequentially, not additively",
                "All ODCs have source documentation attached",
                "Travel priced at GSA FTR rates",
                "Subcontractor proposals attached",
                "Option year escalation applied",
                "BOE narrative reconciles with every spreadsheet total",
                "Fee percentage justified in BOE",
                "TINA threshold assessed — certified data if required",
                "Volumes cross-checked for consistency",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-stone-600">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you&apos;re working on proposals regularly, the pipeline management tools in{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                CapturePilot
              </Link>{" "}
              let you track where each opportunity stands in the cost volume build — so nothing
              falls through the cracks the night before a due date. The{" "}
              <Link href="/features/proposals" className="text-blue-600 hover:underline">
                proposals module
              </Link>{" "}
              connects your cost assumptions directly to your technical staffing plan, eliminating
              the most common disconnect evaluators cite.
            </p>
          </div>

          {/* Related posts */}
          <div className="animate-on-scroll mt-16 pt-10 border-t border-stone-200">
            <h3 className="text-xl font-black text-stone-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/technical-volume-government-proposal",
                  title: "Writing a Winning Technical Volume",
                  category: "Proposals",
                },
                {
                  href: "/blog/government-proposal-compliance-matrix",
                  title: "How to Build a Compliance Matrix",
                  category: "Proposals",
                },
                {
                  href: "/blog/government-rfp-response-guide",
                  title: "How to Respond to a Government RFP",
                  category: "Proposals",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group bg-stone-50 rounded-2xl border border-stone-200 p-5 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xs font-bold text-blue-600 mb-2 block">
                    {post.category}
                  </span>
                  <span className="font-semibold text-stone-900 group-hover:text-blue-700 transition-colors text-sm leading-snug block">
                    {post.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 mt-3 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll mt-12 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 p-10 text-white text-center">
            <Zap className="w-10 h-10 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-black mb-3">
              Ready to build proposals that win?
            </h3>
            <p className="text-blue-100 text-sm max-w-lg mx-auto mb-6">
              CapturePilot helps small businesses find the right opportunities, build compliant
              proposals, and track every bid from discovery to award. Start with a free strategy
              call and see what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-400 transition-colors border border-blue-400"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
