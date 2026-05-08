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
  BarChart3,
  AlertCircle,
  Calculator,
  FileText,
  Shield,
  Percent,
  Layers,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-pricing-wins", label: "Why Pricing Wins (and Kills) More Bids Than Anything Else" },
  { id: "contract-types-risk", label: "Contract Types and Who Bears the Risk" },
  { id: "wrap-rates", label: "Wrap Rates: Your Most Important Number" },
  { id: "cost-elements", label: "The Direct Cost Build-Up: Labor, Materials, Other Direct Costs" },
  { id: "indirect-rates", label: "Indirect Rates: Overhead, G&A, and Fringe" },
  { id: "profit-fee", label: "Profit and Fee: What the Government Actually Allows" },
  { id: "price-to-win", label: "Price to Win: Competitive Intelligence Before You Bid" },
  { id: "certified-cost-data", label: "Certified Cost or Pricing Data: The TINA Threshold" },
  { id: "pricing-mistakes", label: "The Six Pricing Mistakes That Cost Contracts" },
  { id: "tools-systems", label: "Systems and Tools That Keep Your Pricing Audit-Ready" },
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function GovernmentContractPricingStrategiesPage() {
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
            <span className="text-stone-900 font-medium">Government Contract Pricing</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <DollarSign className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Pricing:{" "}
            <span className="gradient-text">Strategies to Win Without Losing Money</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Price too high and you lose to a leaner competitor. Price too low and you win a contract
            that bleeds you dry. This guide walks through wrap rates, cost build-ups, profit
            ceilings, and the price-to-win analysis that separates contractors who grow from those
            who{" "}
            <strong className="text-stone-700">survive one contract and fold on the second.</strong>
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 8, 2026</span>
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
            id="why-pricing-wins"
            number="01"
            title="Why Pricing Wins (and Kills) More Bids Than Anything Else"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Technical evaluators score your approach. Pricing determines whether you make it to
              the award table. Even on best-value contracts — where price isn&apos;t the only
              factor — a price that&apos;s materially above your competitors rarely survives source
              selection. Contracting officers have to justify every award decision to auditors,
              inspectors general, and potential protesters. Paying 30% more for an
              &quot;excellent&quot; technical approach over an &quot;acceptable&quot; one is a hard
              argument to make.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The flip side is just as dangerous. Low-price technically acceptable (LPTA)
              procurements dominate service categories — janitorial, guard services, staffing,
              basic IT support. Underpricing to win one of these means you&apos;ve locked yourself
              into a multi-year performance obligation you&apos;ll struggle to staff at the agreed
              rate. Contractors burn out their best people, miss deliverables, collect a bad CPARS
              rating, and then can&apos;t bid competitively on the next opportunity.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Getting pricing right is partly math and partly intelligence work. The math covers
              your costs, rates, and profit. The intelligence covers what the government budgeted,
              what incumbents charged, and what your competitors will likely propose. This guide
              covers both halves.
            </p>
          </div>

          <Callout icon={BarChart3} color="blue" title="Small Business Margin Reality">
            Small business government contractors average roughly <strong>8% net profit
            margins</strong> — compared to 20–24% for larger contractors. The gap comes from
            higher relative overhead, more limited pricing leverage, and less ability to spread
            indirect costs across multiple contracts. Getting your indirect rates right from the
            start is the fastest way to close that gap.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="contract-types-risk"
            number="02"
            title="Contract Types and Who Bears the Risk"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The contract type your agency selects determines which party absorbs cost risk — and
              that directly shapes how you should price. Under{" "}
              <strong className="text-stone-700">FAR Subpart 16.1</strong>, the government is
              supposed to select the contract type that appropriately allocates risk given how
              well-defined the scope is. In practice, agencies strongly prefer fixed-price because
              it makes their budget planning simple and shifts cost overruns onto you.
            </p>

            {/* Contract types comparison table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">
                      Contract Type
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">Who Bears Cost Risk</th>
                    <th className="text-left px-4 py-3 font-semibold">Fee/Profit Cap</th>
                    <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">
                      When Used
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100 bg-white hover:bg-stone-50">
                    <td className="px-4 py-3 font-semibold text-stone-900">
                      Firm Fixed-Price (FFP)
                    </td>
                    <td className="px-4 py-3 text-stone-600">Contractor (100%)</td>
                    <td className="px-4 py-3 text-stone-600">None — you keep all savings</td>
                    <td className="px-4 py-3 text-stone-600">Well-defined scope; ~42% of all federal contract dollars</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50 hover:bg-stone-50">
                    <td className="px-4 py-3 font-semibold text-stone-900">
                      Fixed-Price Incentive (FPI)
                    </td>
                    <td className="px-4 py-3 text-stone-600">Shared (per formula)</td>
                    <td className="px-4 py-3 text-stone-600">Ceiling price negotiated</td>
                    <td className="px-4 py-3 text-stone-600">Production programs with some uncertainty</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-white hover:bg-stone-50">
                    <td className="px-4 py-3 font-semibold text-stone-900">
                      Time &amp; Materials (T&amp;M)
                    </td>
                    <td className="px-4 py-3 text-stone-600">Government (hours * rate)</td>
                    <td className="px-4 py-3 text-stone-600">Profit built into labor rates</td>
                    <td className="px-4 py-3 text-stone-600">Uncertain scope; emergency work; professional services</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50 hover:bg-stone-50">
                    <td className="px-4 py-3 font-semibold text-stone-900">
                      Cost Plus Fixed Fee (CPFF)
                    </td>
                    <td className="px-4 py-3 text-stone-600">Government (costs reimbursed)</td>
                    <td className="px-4 py-3 text-stone-600">10% of estimated cost (15% for R&amp;D)</td>
                    <td className="px-4 py-3 text-stone-600">R&amp;D, highly uncertain scope</td>
                  </tr>
                  <tr className="bg-white hover:bg-stone-50">
                    <td className="px-4 py-3 font-semibold text-stone-900 rounded-bl-lg">
                      IDIQ / Task Orders
                    </td>
                    <td className="px-4 py-3 text-stone-600">Depends on task order type</td>
                    <td className="px-4 py-3 text-stone-600">Set at task order level</td>
                    <td className="px-4 py-3 text-stone-600 rounded-br-lg">Multi-year vehicles (GSA, SEWP, CIO-SP3)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For small businesses, FFP is both the most common opportunity and the greatest
              financial risk. When you win an FFP contract, every dollar you save goes to your
              bottom line — but every cost overrun comes out of your pocket. This is why
              understanding your true cost structure before you bid is non-negotiable.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Cost-type contracts (CPFF, CPIF, CPAF) are worth pursuing for R&amp;D and complex
              technical work, but they require an{" "}
              <strong className="text-stone-700">adequate accounting system</strong> approved by
              the government — typically a DCAA-adequate system. Many small businesses don&apos;t
              have this, which locks them out of cost-type work. If you plan to pursue DoD or
              federal R&amp;D contracts, setting up an adequate accounting system early (
              <Link href="/features/intelligence" className="text-blue-600 hover:underline">
                CapturePilot&apos;s intelligence module flags these requirements by opportunity
              </Link>
              ) is a strategic investment.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="wrap-rates"
            number="03"
            title="Wrap Rates: Your Most Important Number"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Your wrap rate is the multiplier applied to base labor to produce your billable rate.
              It captures everything: fringe benefits, overhead, G&amp;A, and profit. A competitive
              wrap rate typically falls between <strong className="text-stone-700">1.6 and 2.2</strong>{" "}
              times base labor — but the right number depends on your market, contract type, and
              how lean your back office runs.
            </p>

            {/* Wrap rate formula visual */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 my-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-blue-200" />
                <p className="font-bold text-blue-100 text-sm">The Multiplicative Wrap Rate</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Base Labor Rate", example: "$50.00/hr", note: "Your direct salary cost" },
                  { label: "× Fringe (30%)", example: "$65.00/hr", note: "Benefits, FICA, PTO, health insurance" },
                  { label: "× Overhead (40%)", example: "$91.00/hr", note: "Facilities, equipment, direct supervision" },
                  { label: "× G&A (10%)", example: "$100.10/hr", note: "Executive salaries, accounting, BD, HR" },
                  { label: "+ Profit (10%)", example: "$110.11/hr", note: "Your fee — negotiated at award" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between rounded-lg px-4 py-2.5 ${
                      i === 4
                        ? "bg-emerald-500/20 border border-emerald-400/30"
                        : "bg-white/10"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-sm">{row.label}</p>
                      <p className="text-blue-200 text-xs">{row.note}</p>
                    </div>
                    <p className={`font-mono font-bold ${i === 4 ? "text-emerald-300 text-base" : "text-white"}`}>
                      {row.example}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-blue-200 text-xs mt-4">
                Wrap rate = $110.11 / $50.00 = <strong className="text-white">2.20×</strong> base labor
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Two versions of your wrap rate matter for pricing: the <em>cost wrap</em> (base +
              fringe + overhead + G&amp;A, without profit) and the <em>price wrap</em> (everything
              including profit). When you submit T&amp;M rates on an IDIQ vehicle like{" "}
              <Link href="/blog/gsa-schedule-guide" className="text-blue-600 hover:underline">
                GSA Schedule
              </Link>{" "}
              or CIO-SP4, those rates embed your price wrap. You&apos;re committing to those rates
              for the life of the vehicle, so conservative fringe and overhead estimates that leave
              room for growth are smarter than aggressive rates built for year-one economics.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Rates below 1.6× are a warning sign — they often mean indirect costs are being
              underaccounted, which creates audit exposure and margin erosion as the contract
              matures. If DCAA audits your contract and disallows indirect costs you didn&apos;t
              capture in your proposal, you eat that loss.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Audit Risk: Rates Below 1.6×">
            A wrap rate below 1.6× on labor-intensive service contracts almost always means
            something isn&apos;t being captured — typically fringe benefits (FICA, health insurance,
            paid leave), facilities costs, or G&amp;A. When DCAA or a contracting officer performs a
            cost analysis and finds unrecovered costs, it creates questions about the adequacy of
            your estimating system — which can affect future bid eligibility on cost-type work.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="cost-elements"
            number="04"
            title="The Direct Cost Build-Up: Labor, Materials, Other Direct Costs"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Direct costs are costs that can be assigned to a specific contract without
              approximation. They&apos;re the foundation of your cost estimate. Under{" "}
              <strong className="text-stone-700">FAR Part 31</strong>, costs must be reasonable,
              allocable to the contract, and compliant with any applicable Cost Accounting Standards
              (CAS). Every direct cost element needs documentation: a basis of estimate (BOE),
              source data, and a methodology the government can audit.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: DollarSign,
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                  title: "Direct Labor",
                  body: "Your largest cost line on most service contracts. Estimate hours by labor category (LCAT), then apply the loaded hourly rate (base × fringe multiplier). Price senior engineers at senior rates — never blend rates across LCATs to understate costs. Each LCAT should have a corresponding position description and justification for the hours estimate.",
                },
                {
                  icon: Layers,
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                  title: "Materials and Subcontracts",
                  body: "Price materials at vendor quotes, not catalog estimates. If you plan to subcontract significant work, subcontractor costs are a direct cost — include them with a pass-through on your G&A (government allows a G&A rate applied to subcontract costs in most cost structures). Budget a reasonable contingency (5–10%) for materials volatility on long-duration contracts.",
                },
                {
                  icon: FileText,
                  color: "bg-amber-50 border-amber-200",
                  iconColor: "text-amber-600",
                  title: "Other Direct Costs (ODCs)",
                  body: "Travel, lodging, equipment rentals, licenses, communications — any cost the government allows as a direct charge that isn't labor or materials. Price travel at actual expected costs using government per diem rates (M&IE and lodging rates from GSA.gov), not estimates. Government per diem compliance is the most frequently flagged ODC issue in DCAA audits.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-5 ${item.color} animate-on-scroll`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your basis of estimate is as important as the numbers themselves. A bare spreadsheet
              with totals is not adequate documentation. Each cost element needs a source (vendor
              quote, salary survey, historical actuals from a comparable contract, engineering
              judgment) and a clear rationale for the hours and quantities. If you&apos;re ever
              asked to submit certified cost or pricing data, this documentation becomes a legal
              requirement.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">Free Eligibility Check</p>
                <p className="text-xl font-black">See which set-asides cut your competition</p>
                <p className="text-blue-100 text-sm mt-1">
                  Set-aside status directly affects pricing strategy — fewer competitors means less
                  pressure to undercut.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="indirect-rates"
            number="05"
            title="Indirect Rates: Overhead, G&A, and Fringe"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Indirect rates are the percentages applied to direct costs to recover expenses that
              benefit multiple contracts. They&apos;re not estimates — they&apos;re calculated from
              your actual cost structure. And the government can audit them.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Three pools are most common. <strong className="text-stone-700">Fringe</strong> covers
              employee-level benefits (FICA at 7.65%, health insurance, retirement match, paid leave)
              applied as a percentage of direct labor. <strong className="text-stone-700">
              Overhead</strong> covers contract-execution costs that don&apos;t allocate directly to
              a single contract — facilities rent, utilities, equipment depreciation, direct
              supervision. <strong className="text-stone-700">G&amp;A</strong> covers company-level
              costs: executive compensation, accounting, legal, HR, business development, and
              marketing.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Rate Pool</th>
                    <th className="text-left px-4 py-3 font-semibold">Typical Range</th>
                    <th className="text-left px-4 py-3 font-semibold">Applied To</th>
                    <th className="text-left px-4 py-3 rounded-tr-lg font-semibold">Primary Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100 bg-white">
                    <td className="px-4 py-3 font-semibold text-stone-900">Fringe</td>
                    <td className="px-4 py-3 text-stone-600">25–45%</td>
                    <td className="px-4 py-3 text-stone-600">Direct labor dollars</td>
                    <td className="px-4 py-3 text-stone-600">Health benefits, 401k, FICA, PTO accrual</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50/50">
                    <td className="px-4 py-3 font-semibold text-stone-900">Overhead</td>
                    <td className="px-4 py-3 text-stone-600">20–60%</td>
                    <td className="px-4 py-3 text-stone-600">Direct labor + fringe (burdened labor)</td>
                    <td className="px-4 py-3 text-stone-600">Rent, utilities, equipment, supervisory time</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-white">
                    <td className="px-4 py-3 font-semibold text-stone-900">G&amp;A</td>
                    <td className="px-4 py-3 text-stone-600">8–18%</td>
                    <td className="px-4 py-3 text-stone-600">Total cost input (all direct + fringe + OH)</td>
                    <td className="px-4 py-3 text-stone-600">Executive comp, BD, legal, accounting</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Indirect rates that are too high make you uncompetitive. But artificially low
              indirect rates that don&apos;t reflect actual costs will create deficits on cost-type
              contracts — you&apos;ll perform work and not recover the full cost. The strategy is
              to manage your indirect cost pools actively: reduce unallowable costs (entertainment,
              marketing on commercial work), allocate shared costs consistently across all
              contracts, and benchmark your rates against industry data annually.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              As your contract base grows, overhead and G&amp;A rates naturally compress — the
              same fixed costs spread across more revenue. This is why growing contractors are
              often more competitive on margin, not just on volume. If you&apos;re a single-contract
              shop right now, factor that rate compression into your multi-year growth projections
              when building your{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                bid pipeline
              </Link>
              .
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="profit-fee"
            number="06"
            title="Profit and Fee: What the Government Actually Allows"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The FAR actively encourages reasonable profit — the government wants contractors to
              perform efficiently, and that requires financial incentive. But on cost-type contracts,
              fee is capped by statute. Under <strong className="text-stone-700">FAR 15.404-4</strong>,
              the limits are:{" "}
              <strong className="text-stone-700">10% of estimated cost</strong> for most work, and{" "}
              <strong className="text-stone-700">15% of estimated cost</strong> for research and
              development. These caps don&apos;t apply to FFP contracts — you can price whatever
              profit you can win — but in practice, competitive pressure constrains FFP margins just
              as effectively.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  label: "R&D / Experimental",
                  fee: "15% max",
                  note: "CPFF only; applies to cost-type R&D contracts (FAR 15.404-4)",
                  color: "bg-purple-50 border-purple-200 text-purple-900",
                },
                {
                  label: "Other Cost-Type Work",
                  fee: "10% max",
                  note: "CPFF, CPIF, CPAF contracts; statutory cap, not negotiable upward",
                  color: "bg-blue-50 border-blue-200 text-blue-900",
                },
                {
                  label: "Firm Fixed-Price",
                  fee: "No statutory cap",
                  note: "Competitive market sets the ceiling; typical profitable range: 8–20%",
                  color: "bg-emerald-50 border-emerald-200 text-emerald-900",
                },
              ].map((card, i) => (
                <div key={i} className={`rounded-2xl border p-5 ${card.color}`}>
                  <p className="font-bold text-xs uppercase tracking-wide mb-2">{card.label}</p>
                  <p className="text-2xl font-black mb-2">{card.fee}</p>
                  <p className="text-xs leading-relaxed opacity-80">{card.note}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              On FFP contracts, typical net profit margins for small business professional services
              range from <strong className="text-stone-700">8–15%</strong> for mid-market work
              (IT consulting, program management, engineering). Specialty work involving cleared
              personnel, niche technical expertise, or significant intellectual property can
              command 15–30% margins where competition is limited.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              CPFF fees in practice typically land between 6–10% of estimated cost. Even at the
              maximum 10%, that&apos;s your total upside — costs that run over don&apos;t come out
              of your pocket, but you also don&apos;t get a bigger fee for delivering early or
              under budget. Fixed-Fee-Incentive contracts (FPIF) and Cost-Plus-Incentive contracts
              (CPIF) add a sharing formula so exceptional performance earns more — worth pursuing
              when the scope allows.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Profit Isn't Greed — It's Stability">
            Contracting officers use structured profit analysis (FAR 15.404-4 prescribes the
            weighted guidelines method) to arrive at a negotiating position. Going in at 10%
            profit and walking away at 8% is expected. Going in at 5% because you&apos;re afraid
            to look greedy just weakens your starting position and leaves money on the table.
            Price what the work is worth, document your rationale, and negotiate from there.
          </Callout>

          {/* Section 7 */}
          <SectionHeading
            id="price-to-win"
            number="07"
            title="Price to Win: Competitive Intelligence Before You Bid"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Price to Win (PTW) is the process of estimating the highest price that will still
              win the contract — ideally the price just below your strongest competitor. It&apos;s
              not guesswork. It&apos;s an intelligence-driven methodology that combines budget
              research, competitive analysis, and cost modeling.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              PTW is also opportunity-specific. There&apos;s no universal formula. The right PTW
              for a competitive LPTA requirement will look entirely different from a sole-source
              8(a) negotiation or a best-value IDIQ task order. The evaluation method, competitive
              field, and government budget are the three variables that matter most.
            </p>

            {/* PTW Process Steps */}
            <div className="space-y-3 my-8">
              {[
                {
                  step: "01",
                  title: "Find the Government's Budget",
                  body: "Check USASpending.gov for prior award values on the same or similar work. Look at the incumbent contract value, any prior IDIQs in the same area, and any independent government estimates (IGEs) released with the RFP. The IGE is the government's best guess at what the work should cost — it's often within 10–15% of where awards land.",
                },
                {
                  step: "02",
                  title: "Identify and Profile Competitors",
                  body: "Who else will bid? Look at who held the incumbent contract (SAM.gov contract data, FPDS-NG), who responded to prior sources sought notices for this requirement, and who competes in this NAICS/agency combination. Use CapturePilot's intelligence module to pull award history and identify the usual competitors for this contract vehicle.",
                },
                {
                  step: "03",
                  title: "Estimate Competitor Pricing",
                  body: "Large incumbents often have lower overhead rates but higher labor costs (due to benefit packages). Newer small businesses sometimes price aggressively to establish past performance — sometimes too aggressively. Your estimate of a competitor's loaded rate is their public salary data (check LinkedIn, Glassdoor) plus their publicly filed indirect rates if they're large enough to have DCAA rate agreements on file.",
                },
                {
                  step: "04",
                  title: "Model Your Price Range",
                  body: "PTW is a range, not a single number. Build a floor (your minimum profitable price, covering all costs plus a sustainable margin) and a ceiling (the maximum you believe will still be competitive given the evaluation method). Then position within that range based on your confidence in the competitive field and the contract&apos;s strategic value to you.",
                },
                {
                  step: "05",
                  title: "Account for Evaluation Method",
                  body: "On LPTA: price at or slightly below the lowest competitor you've identified. On best-value: you have more room — the question is how much technical differentiation you're delivering and whether evaluators will pay for it. On sole-source 8(a): negotiate to a fair and reasonable price, which is typically the IGE ± 15%.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-stone-50 rounded-2xl border border-stone-200 p-5 animate-on-scroll"
                >
                  <span className="text-2xl font-black text-blue-600 font-mono shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{s.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For a deeper dive into PTW mechanics and scoring methodologies, see our guide on{" "}
              <Link href="/blog/pwin-probability-of-win" className="text-blue-600 hover:underline">
                probability of win (PWin)
              </Link>
              . PTW feeds directly into your PWin score — if your price is above the government
              budget or above what competitors can plausibly beat you on, your probability of win
              is low regardless of how strong your technical approach is.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-12 bg-stone-900 rounded-2xl p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-stone-400 text-sm font-medium mb-1">CapturePilot Intelligence</p>
                <p className="text-xl font-black">
                  Pull award histories and competitor data before you price
                </p>
                <p className="text-stone-400 text-sm mt-1">
                  See what incumbents charged, who won similar contracts, and what the government
                  paid.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                Start free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="certified-cost-data"
            number="08"
            title="Certified Cost or Pricing Data: The TINA Threshold"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Truth in Negotiations Act (TINA), implemented through{" "}
              <strong className="text-stone-700">FAR 15.403-4</strong>, requires contractors to
              submit certified cost or pricing data for certain negotiations. This is not optional —
              it&apos;s a legal obligation, and submitting data you know to be inaccurate or
              incomplete can result in contract price adjustments and potential fraud allegations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-amber-600" />
                  <p className="font-bold text-amber-900 text-sm">Current Threshold</p>
                </div>
                <p className="text-3xl font-black text-amber-900 mb-1">$2.5M</p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Contracts awarded before June 30, 2026 — certified cost data required above this
                  threshold (as adjusted October 1, 2025 per inflationary adjustment)
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <p className="font-bold text-emerald-900 text-sm">New Threshold (FY26 NDAA)</p>
                </div>
                <p className="text-3xl font-black text-emerald-900 mb-1">$10M</p>
                <p className="text-emerald-700 text-xs leading-relaxed">
                  For contracts entered after June 30, 2026 — the FY26 NDAA raised the threshold
                  fourfold, significantly reducing compliance burden for small and mid-size
                  contractors
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              When certified cost data is required, you must certify that to the best of your
              knowledge, the data is accurate, complete, and current as of the date of final
              agreement on price. The government gets a price reduction right if it later discovers
              the data was defective. This is called <em>defective pricing</em> — and it&apos;s one
              of the most common triggers for DCAA audits and contract disputes.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Important exceptions: certified cost data is not required for competitive
              procurements where prices are set by competition, for commercial items under FAR
              Part 12, or for contracts at or below the applicable threshold. Most small business
              contracts under SAP (&lt;$250K) and many set-aside competitions fall below the
              threshold entirely. The $10M threshold effective July 2026 will relieve this burden
              from nearly all small and mid-market contractors.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="pricing-mistakes"
            number="09"
            title="The Six Pricing Mistakes That Cost Contracts"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most pricing failures are preventable. They come from the same handful of errors
              repeated across thousands of proposals every year.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: "01",
                  title: "Pricing for Year One, Not Year Three",
                  body: "Multi-year contracts have escalating costs — labor rates rise, benefits get more expensive, and facilities costs increase. A price that&apos;s profitable in year one can be underwater by year three if you don&apos;t build in realistic escalation (typically 3–5% annually for labor). Government contracts often have fixed annual prices — model the full period of performance, not just the base year.",
                  color: "text-rose-600",
                },
                {
                  num: "02",
                  title: "Ignoring Uncompensated Overtime Risk",
                  body: "FLSA-exempt salaried employees (common in IT and professional services) can work more than 40 hours without overtime pay. If your bid assumes 2,080 hours per year per person, that looks fine on paper — but if the scope requires 2,400 hours of effort, you&apos;re either understaffing the contract or working people unpaid. Build realistic staffing models based on actual scope requirements.",
                  color: "text-amber-600",
                },
                {
                  num: "03",
                  title: "Using Catalog Prices for Materials",
                  body: "Always price materials from vendor quotes, not website catalog prices. Catalog prices include markups that don&apos;t reflect negotiated rates. For recurring purchases, establish blanket purchase agreements (BPAs) or vendor quotes good for 90 days. A 10% swing in materials costs on a large construction or IT hardware contract can eliminate your entire profit margin.",
                  color: "text-blue-600",
                },
                {
                  num: "04",
                  title: "Applying a Single Indirect Rate to All Labor",
                  body: "Not all labor categories carry the same overhead burden. On-site workers at a government facility often have lower overhead (no facilities cost) than off-site home-office staff. Blending these at a single rate misrepresents your cost structure and either overcharges the government for on-site work or undercharges for home-office support.",
                  color: "text-purple-600",
                },
                {
                  num: "05",
                  title: "Not Checking the Competition Before You Price",
                  body: "Pricing in isolation without any competitive intelligence is gambling. You might submit a price that&apos;s 40% above the incumbent&apos;s renewal price because you didn&apos;t check FPDS-NG. Thirty minutes of research on USASpending.gov before you build your cost model is non-optional.",
                  color: "text-emerald-600",
                },
                {
                  num: "06",
                  title: "Zero Profit on Strategic Bids",
                  body: "Bidding at cost to win past performance is a real strategy — but it&apos;s dangerous. If you&apos;re already tight on margin and scope grows (scope creep is constant in government work), a zero-margin bid quickly becomes a loss. The better strategy is minimum acceptable margin (5–7%) on strategic bids, not zero. You can still be competitive and protect your business.",
                  color: "text-stone-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 border border-stone-200 rounded-2xl p-5 hover-lift animate-on-scroll"
                >
                  <span className={`text-2xl font-black font-mono shrink-0 ${item.color}`}>
                    {item.num}
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="tools-systems"
            number="10"
            title="Systems and Tools That Keep Your Pricing Audit-Ready"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Pricing strategy and pricing compliance aren&apos;t the same thing. You can have a
              sophisticated cost model that would never survive a DCAA floor check — because the
              underlying accounting system doesn&apos;t segregate costs by contract, doesn&apos;t
              track labor by job, or mixes allowable and unallowable costs in the same GL accounts.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For small businesses pursuing cost-type or larger fixed-price work, the basics are:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: BarChart3,
                  title: "Cost Accounting System",
                  body: "Deltek Costpoint, Unanet, or even a properly configured QuickBooks can work for basic DCAA adequacy. The key: job costing by contract number, separate accounts for allowable vs. unallowable, and timekeeping that records actual hours to specific projects — not just total hours.",
                },
                {
                  icon: Calculator,
                  title: "Rate Calculation and Updates",
                  body: "Calculate your indirect rates at least quarterly — don't wait for year-end to discover your overhead pool grew 20% because you hired two new project managers. If rates change significantly, update your forward pricing rate agreements (FPRAs) with your cognizant auditor.",
                },
                {
                  icon: FileText,
                  title: "Proposal Pricing Templates",
                  body: "Maintain a standard pricing template for each contract type you pursue — FFP services, T&M, CPFF. Each template should auto-calculate wrapped rates from your current indirect rates, so every proposal starts from your actual cost structure rather than last year's assumptions.",
                },
                {
                  icon: Target,
                  title: "Competitive Intelligence Platform",
                  body: "Manual USASpending lookups are a start, but they don't scale. CapturePilot's intelligence module aggregates award data, identifies incumbents, and surfaces competitor pricing patterns so you can do PTW analysis in minutes rather than hours.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 animate-on-scroll"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className="w-5 h-5 text-blue-600" />
                    <p className="font-bold text-stone-900 text-sm">{card.title}</p>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Pricing your{" "}
              <Link href="/features/proposals" className="text-blue-600 hover:underline">
                proposals
              </Link>{" "}
              well and building your{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                pipeline
              </Link>{" "}
              strategically are connected. If you know which opportunities you&apos;ll pursue six
              months out, you can begin competitive intelligence and develop your BOE well before
              RFP release — rather than scrambling on a 30-day response clock. Early preparation
              almost always produces better pricing.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For new entrants still validating their approach before pricing anything, the{" "}
              <Link href="/features/quick-checker" className="text-blue-600 hover:underline">
                Quick Checker
              </Link>{" "}
              can help you understand which set-aside programs you qualify for — which directly
              affects how many competitors you&apos;ll face, and therefore how much pricing
              leverage you actually have. A contract open only to SDVOSB firms has four to six
              competitors instead of forty. That changes the entire pricing calculus.
            </p>
          </div>

          {/* Related posts */}
          <div className="mt-16 border-t border-stone-200 pt-12 animate-on-scroll">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">
              Related Reading
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/government-proposal-compliance-matrix",
                  title: "How to Build a Compliance Matrix for Government Proposals",
                  cat: "Proposals",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance: Why It Matters and How to Build It",
                  cat: "Proposals",
                },
                {
                  href: "/blog/federal-contract-types-explained",
                  title: "Federal Contract Types Explained: FFP, T&M, IDIQ and Which to Pursue",
                  cat: "Getting Started",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group bg-stone-50 hover:bg-blue-50 border border-stone-200 hover:border-blue-200 rounded-2xl p-4 transition-all"
                >
                  <p className="text-xs text-blue-600 font-semibold mb-1">{post.cat}</p>
                  <p className="text-sm font-bold text-stone-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-blue-600 text-xs font-semibold">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-10 text-white text-center animate-on-scroll">
            <Zap className="w-8 h-8 text-blue-200 mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3">
              Pricing strategy only works with the right intelligence
            </h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
              CapturePilot surfaces incumbent contract data, award histories, and competitor
              patterns so you can price with confidence — not guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Start 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-blue-500/30 hover:bg-blue-500/50 text-white font-bold px-6 py-3 rounded-xl border border-blue-400/40 transition-colors"
              >
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
