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
  Clock,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  AlertCircle,
  Building2,
  CreditCard,
  Banknote,
  FileText,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-cash-gap", label: "The Cash Gap No One Warns You About" },
  { id: "prompt-payment-act", label: "Your Legal Rights: The Prompt Payment Act" },
  { id: "accelerated-payments", label: "Accelerated Payments: The 15-Day Program" },
  { id: "progress-payments", label: "Progress Payments: Getting Cash Before the Invoice" },
  { id: "financing-options", label: "Contract Financing Options for Small Businesses" },
  { id: "invoice-factoring", label: "Invoice Factoring: Selling Your Receivables" },
  { id: "assignment-of-claims", label: "Assignment of Claims Act: The Legal Framework" },
  { id: "cash-flow-forecasting", label: "Cash Flow Forecasting for Government Work" },
  { id: "subcontractor-cash", label: "Managing Subcontractor Cash Flow" },
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

export default function GovernmentContractCashFlowPage() {
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
            <span className="text-stone-900 font-medium">Government Contract Cash Flow</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <DollarSign className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Cash Flow:{" "}
            <span className="gradient-text">How to Survive 30–90 Day Payment Cycles</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            You win a $500,000 federal contract. You hire staff, buy materials, start work — and
            then wait two months to see a dollar. The government&apos;s payment cycle is the number
            one reason profitable small businesses fail in government contracting.{" "}
            <strong className="text-stone-700">
              Here is how the system works, what rights you have, and how to keep your business
              running while you wait.
            </strong>
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 7, 2026</span>
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
            id="the-cash-gap"
            number="01"
            title="The Cash Gap No One Warns You About"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA attributes roughly 82% of small business failures to cash flow problems —
              not bad products, not weak sales, not incompetent management. Cash flow. And the
              federal government&apos;s payment structure is uniquely capable of creating a
              catastrophic cash gap even on contracts you are winning and delivering on time.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Here is the mechanics of it. You sign a contract in month one. You start incurring
              costs: payroll, materials, subcontractors, travel. Your first billing cycle closes
              at the end of month one. You submit a proper invoice. The Prompt Payment Act gives
              the government 30 days to pay. In practice, 45–60 days is typical due to approval
              workflows, acceptance processing, and accounting backlogs. By the time money hits
              your account, you are 60–90 days into spending real cash.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              On a $500,000 annual contract, that gap is $40,000–$80,000 of costs you need to
              float before the first dollar comes in. On a $2 million contract with a three-person
              subcontracting team, it can be significantly more. Most small business owners do not
              model this before they bid — and the contracts that kill companies are often the
              ones they were genuinely excited to win.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "30 days", label: "Statutory payment deadline (Prompt Payment Act)", icon: Clock },
                { stat: "45–60", label: "Actual days to payment in practice", icon: AlertCircle },
                { stat: "85%", label: "Progress payment rate for small businesses (FAR)", icon: TrendingUp },
                { stat: "15 days", label: "Accelerated payment goal for small business primes", icon: Zap },
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

            <p className="text-stone-600 leading-relaxed mb-4">
              The commercial contracting world handles this differently. A private-sector client
              who takes 45 days to pay might accept a late fee or a revised payment schedule after
              one conversation. The federal government does not negotiate payment timing — it follows
              statutory schedules and internal processes that run at the government&apos;s pace, not yours.
            </p>
            <p className="text-stone-600 leading-relaxed">
              That said, the system is not hostile to contractors. There are legal protections,
              dedicated financing programs, and structural tools designed specifically for this
              problem. The contractors who succeed long-term understand all of them before they
              sign their first contract.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Model your cash gap before you bid, not after.">
            Before submitting any significant proposal, run a simple cash flow model: estimated
            monthly costs × 2 months of float = minimum working capital required. If your bank
            account cannot cover that gap without stress, you need a financing plan in place
            before contract award — not after. Financing arranged post-award takes time, and you
            will start incurring costs the day work begins regardless of when financing closes.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="prompt-payment-act"
            number="02"
            title="Your Legal Rights: The Prompt Payment Act"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Prompt Payment Act (31 U.S.C. Chapter 39) is federal statute, not agency
              policy. It sets mandatory payment deadlines for the government and requires automatic
              interest penalties when those deadlines are missed. Understanding it changes how you
              manage your receivables.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The core rule: once the government receives a{" "}
              <Link href="/blog/government-contract-invoicing" className="text-blue-700 underline font-medium">
                proper invoice
              </Link>{" "}
              — one that meets all the requirements of FAR 52.232-25 — it has 30 days to pay.
              Construction progress payments have a 14-day deadline. If the government pays late,
              interest accrues automatically from day 31. You do not have to claim it. The payment
              system generates it.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl font-semibold">Contract Type</th>
                    <th className="text-left p-4 font-semibold">Payment Deadline</th>
                    <th className="text-left p-4 rounded-tr-xl font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Supplies and services",
                      deadline: "30 days",
                      notes: "After receipt of proper invoice OR acceptance of goods/services, whichever is later",
                    },
                    {
                      type: "Construction — progress payments",
                      deadline: "14 days",
                      notes: "Faster timeline specifically for construction progress billing",
                    },
                    {
                      type: "Construction — final payment",
                      deadline: "30 days",
                      notes: "Includes retainage release — same as standard timeline",
                    },
                    {
                      type: "Meat, fish, and perishables",
                      deadline: "7 days",
                      notes: "Specialized timeline for perishable goods delivery contracts",
                    },
                    {
                      type: "Utility services",
                      deadline: "30 days",
                      notes: "Or per utility tariff schedule, whichever is earlier",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-800 border-b border-stone-100">{row.type}</td>
                      <td className="p-4 font-bold text-blue-700 border-b border-stone-100">{row.deadline}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The Prompt Payment interest rate is reset by the Treasury Department every six
              months. For January 1 through June 30, 2026, the rate was 4.125% annually. For
              July 1 through December 31, 2026, it is 4.75% annually. On a $100,000 invoice that
              runs 20 days late, that is roughly $260 in automatic interest the government owes you
              — small on one invoice, meaningful across a portfolio.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              There is one critical nuance: the 30-day clock does not start until the government
              receives a <em>proper</em> invoice. A defective invoice — one missing a required
              field, submitted through the wrong system, or not matching the contract&apos;s data —
              gets returned. The clock starts over when you resubmit. This is not a technicality.
              For a $200,000 invoice, two rounds of rejection adds 30–45 days to your actual
              payment timeline.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The practical takeaway: treat invoice compliance as a revenue function. Every error
              costs you cash that you have already spent. Build your invoice template from the
              contract&apos;s invoicing clause — not from a generic accounts receivable form —
              and verify it against the FAR 52.232-25 checklist before submitting anything.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="accelerated-payments"
            number="03"
            title="Accelerated Payments: The 15-Day Program"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most small business contractors do not know this program exists. Section 873 of the
              FY2020 National Defense Authorization Act required federal agencies to establish a
              goal of paying small business prime contractors within 15 days of receiving a proper
              invoice — cutting the standard 30-day window in half. A final FAR rule implementing
              this became effective March 16, 2023.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The key word is &ldquo;goal.&rdquo; The 15-day accelerated payment requirement is
              aspirational, not mandatory — agencies are expected to meet it to the fullest extent
              permitted by law, but missing it does not trigger the same automatic interest as a
              missed 30-day deadline. Still, this program matters because many agencies have
              operationalized it, and small businesses that submit clean invoices through the
              correct system often see payment in 15–20 days in practice.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: CheckCircle2,
                  title: "Who qualifies",
                  desc: "Any small business prime contractor on a federal contract. The agency applies the accelerated payment policy automatically — you do not have to request it. Your small business status is verified through SAM.gov. Contracts held by large businesses that subcontract to small businesses also fall under this program, but the pass-through is governed by FAR 52.232-40.",
                },
                {
                  icon: Zap,
                  title: "How to maximize it",
                  desc: "Submit invoices immediately at the end of your billing period — not a week later. Every day you wait before submitting is a day you add to your payment timeline. Use the correct invoicing system (IPP for civilian, WAWF for DoD) and ensure your invoice is complete and error-free on the first submission. Agencies running the 15-day program cannot start the clock until they have a proper invoice.",
                },
                {
                  icon: Building2,
                  title: "Agency participation",
                  desc: "Not all agencies have implemented the program equally. GSA and DoD have been most aggressive about accelerating payments to small businesses. Some civilian agencies still default to the 30-day cycle unless you proactively follow up with your contracting officer about the accelerated payment policy. Ask at contract kickoff whether the agency participates.",
                },
                {
                  icon: Shield,
                  title: "The subcontractor pass-through",
                  desc: "When a large business prime receives accelerated payment under this program, FAR 52.232-40 requires them to pass accelerated payment through to their small business subcontractors. The prime must pay subs within 15 days of receiving payment from the government — without charging the sub any fees or passing along costs for the acceleration. If you are a sub, this is a right you can enforce.",
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
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={Lightbulb} color="blue" title="Ask your CO about the accelerated payment program at kickoff.">
            During your post-award kickoff meeting, ask specifically: &ldquo;Does this agency
            participate in the accelerated payment program for small business primes?&rdquo; If
            yes, ask what their current average payment time is and whether there are any invoice
            formatting preferences that help them process faster. Contracting officers appreciate
            contractors who engage proactively on billing — it reduces their administrative burden
            too.
          </Callout>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Find opportunities that match your certifications and cash position</h3>
                <p className="text-blue-100 text-sm">
                  CapturePilot&apos;s Quick Checker maps your size, certifications, and NAICS
                  codes to opportunities where you have the strongest advantage — including
                  set-asides designed for businesses at your revenue level.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="progress-payments"
            number="04"
            title="Progress Payments: Getting Cash Before the Invoice"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Progress payments are different from ordinary invoices. They are advance payments
              the government makes during contract performance — before a deliverable is complete
              or accepted — based on costs you have incurred. For long-duration contracts with
              significant upfront costs, progress payments are the primary tool for managing cash
              flow.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              They are governed by FAR Subpart 32.5 and the FAR 52.232-16 contract clause.
              Under the standard FAR clause, the government pays 80% of incurred costs for large
              businesses. Small businesses get a better deal: 85% under the standard FAR clause,
              and up to 90% on Department of Defense contracts under DFARS 232.501-1. That 5–10
              point improvement represents real cash on a large contract.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl font-semibold">Business Size</th>
                    <th className="text-left p-4 font-semibold">FAR Progress Payment Rate</th>
                    <th className="text-left p-4 rounded-tr-xl font-semibold">DFARS Rate (DoD)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "Small business", far: "85% of incurred costs", dfars: "90% of incurred costs" },
                    { size: "Large business", far: "80% of incurred costs", dfars: "80% of incurred costs" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-800 border-b border-stone-100">{row.size}</td>
                      <td className="p-4 text-stone-700 border-b border-stone-100">{row.far}</td>
                      <td className="p-4 font-semibold text-emerald-700 border-b border-stone-100">{row.dfars}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Progress payments are not available on every contract. They are most common on
              fixed-price contracts over $1.5 million with a period of performance exceeding six
              months — essentially, large, long-duration procurement. You will typically see them
              on major construction projects,{" "}
              <Link href="/blog/it-government-contracts" className="text-blue-700 underline font-medium">
                large IT development contracts
              </Link>
              , and significant manufacturing contracts. They are rare on service contracts under
              the simplified acquisition threshold.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The mechanics: you submit a progress payment request (not a regular invoice) at
              the agreed frequency — monthly is standard. The government advances a percentage of
              your cumulative incurred costs, with adjustments for prior payments. Progress
              payments are liquidated (repaid) from your final invoices — the government
              deducts them from the amount owed when deliverables are accepted and billed.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One important constraint: progress payments require you to maintain an accounting
              system capable of tracking costs by contract. If your books cannot produce a
              credible incurred-cost report, you cannot submit progress payment requests. Before
              pursuing contracts where progress payments are material to your cash position, ensure
              your accounting is structured to support them. See our{" "}
              <Link href="/blog/dcaa-audit-small-business" className="text-blue-700 underline font-medium">
                DCAA audit guide
              </Link>{" "}
              for the accounting system requirements.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="financing-options"
            number="05"
            title="Contract Financing Options for Small Businesses"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              When you cannot close the cash gap through invoice timing and accelerated payments
              alone, external financing is the next tool. Three options dominate the government
              contractor financing market: SBA loans designed specifically for contract performance,
              asset-based lending against your receivables, and invoice factoring. Each has a
              different structure, cost, and fit.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-emerald-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <Banknote className="w-5 h-5 text-emerald-600" />
                  SBA Contract CAPLine
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-2">
                  The SBA&apos;s Contract CAPLine is a revolving line of credit specifically for
                  financing the direct labor and material costs of assigned government contracts.
                  Maximum loan amount: $5 million. Loans are typically structured as revolving
                  credit that you draw down as costs are incurred and repay as contract invoices
                  are paid. Interest rates are tied to prime plus a spread negotiated with the
                  lender. SBA guarantees up to 85% of loans under $150,000 and 75% above that,
                  which makes approval easier for small businesses without extensive collateral.
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Best fit: businesses with multiple ongoing contracts that need a flexible line
                  they can draw on and repay repeatedly, rather than a one-time lump sum.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  SBA 7(a) Working Capital Loan
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-2">
                  The standard SBA 7(a) program, maxing at $5 million, can be used for working
                  capital — including covering the cash flow gap during contract performance. Unlike
                  the Contract CAPLine, a 7(a) loan is not contract-specific. It funds your
                  general business operations, which means you can use it across multiple contracts
                  and for expenses that are not direct contract costs. Repayment terms extend up
                  to 10 years for working capital.
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Best fit: businesses that need general-purpose working capital rather than
                  contract-specific financing, or that cannot easily tie costs to individual
                  contracts.
                </p>
              </div>

              <div className="border-l-4 border-violet-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-violet-600" />
                  Asset-Based Revolving Line of Credit
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-2">
                  Commercial banks and specialty lenders offer revolving lines of credit secured
                  by your accounts receivable. Government receivables are highly attractive
                  collateral because federal agencies do not default — lenders know payment is
                  coming. Advance rates on government receivables typically run 80–90% of the
                  invoice face value. Interest rates are generally lower than SBA loans because
                  the collateral quality is high.
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Best fit: businesses with established revenue who want lower-cost flexible
                  financing and have a banking relationship that can support a secured line.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-600" />
                  Invoice Factoring
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-2">
                  Factoring means selling your government invoices to a third-party factoring
                  company at a discount. The factor advances 80–95% of the invoice face value
                  immediately — often within 1–3 business days — then collects directly from
                  the government agency when the invoice is paid. The factor keeps the remaining
                  percentage minus their fee (typically 1–5% per 30-day period).
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Best fit: businesses that need fast access to cash, have not yet established
                  a banking relationship, or want to avoid debt on their balance sheet. Higher
                  effective cost than bank financing but faster and more accessible.
                </p>
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track contracts, billing cycles, and cash milestones in one place
                </h3>
                <p className="text-stone-500 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-700 underline">
                    pipeline management
                  </Link>{" "}
                  keeps your active contracts, billing schedules, and funded ceilings organized —
                  so you always know when to invoice, what you have billed, and what is outstanding.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="flex-shrink-0 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors flex items-center gap-2 text-sm"
              >
                Start free 30-day trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="invoice-factoring"
            number="06"
            title="Invoice Factoring: Selling Your Receivables"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Government invoice factoring deserves its own section because it is uniquely well-
              suited to federal contracting, and many small businesses do not realize it is a
              legitimate, commonly used tool — not a sign of financial distress.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The government is the most creditworthy customer in the world. When you factor a
              government receivable, the factoring company is effectively lending against a
              guaranteed payment. Default risk is near zero. That is why factoring companies
              that specialize in government contractors offer better advance rates and lower
              fees than they do for commercial receivables.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  label: "Advance rate",
                  value: "80%–95%",
                  note: "Of invoice face value, received within 1–3 business days",
                  color: "bg-emerald-50 border-emerald-200",
                  textColor: "text-emerald-700",
                },
                {
                  label: "Factoring fee",
                  value: "1%–5%",
                  note: "Of invoice face value per 30-day period until the government pays",
                  color: "bg-blue-50 border-blue-200",
                  textColor: "text-blue-700",
                },
                {
                  label: "Processing time",
                  value: "1–3 days",
                  note: "From invoice submission to cash in your account",
                  color: "bg-violet-50 border-violet-200",
                  textColor: "text-violet-700",
                },
                {
                  label: "Reserve release",
                  value: "5%–20%",
                  note: "Held back and returned to you after the government pays the factor",
                  color: "bg-amber-50 border-amber-200",
                  textColor: "text-amber-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border ${item.color} animate-on-scroll`}
                >
                  <p className="text-xs font-semibold text-stone-500 mb-2">{item.label}</p>
                  <p className={`text-3xl font-black ${item.textColor} mb-2`}>{item.value}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              To illustrate the cost: if your government invoice is $100,000 and the factor
              charges 2% per 30 days, and the government pays in 30 days, you receive $80,000–
              $95,000 immediately and the factor keeps $2,000 when the invoice is paid. You
              net $78,000–$93,000 instead of $100,000 — but you had the money 25 days earlier,
              which funded your payroll and materials for the next billing cycle.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The real cost of factoring is not the fee itself — it is the compounding effect
              if you factor every invoice on every contract indefinitely. Factor one or two
              invoices to get through a gap while you build working capital, and the math is
              favorable. Use it as a permanent cash substitute and the cost of revenue starts
              to erode your margins in ways that show up on the{" "}
              <Link href="/blog/government-contract-pricing-strategies" className="text-blue-700 underline font-medium">
                price-to-win analysis
              </Link>{" "}
              for future bids.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="assignment-of-claims"
            number="07"
            title="Assignment of Claims Act: The Legal Framework"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Invoice factoring on government contracts requires compliance with the Assignment
              of Claims Act (41 U.S.C. 6305). This is the federal statute that authorizes
              contractors to assign their right to payment under a federal contract to a third
              party — including a bank or factoring company.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Without a compliant assignment, the government does not have legal authority to
              pay the factoring company directly. The assignment process is administrative — it
              does not require the contracting officer&apos;s approval, but it does require formal
              written notice to three specific parties.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  num: "01",
                  title: "Notify the contracting officer",
                  desc: "Written notice to the CO responsible for the contract. Include the name and address of the assignee (the factoring company or bank), the date of the assignment, and a copy of the assignment agreement. The CO records the assignment in the contract file.",
                },
                {
                  num: "02",
                  title: "Notify the surety (if applicable)",
                  desc: "If your contract required a performance or payment bond, the surety must receive written notice of the assignment. This protects the surety's interest in the contract payments. If there is no bond, this step does not apply.",
                },
                {
                  num: "03",
                  title: "Notify the disbursing officer",
                  desc: "The paying office responsible for contract payments must receive notice so payments get redirected to the factor. For DoD contracts, this is typically the Defense Finance and Accounting Service (DFAS) disbursing office specified in your contract. For civilian contracts, it is the designated billing office in your contract.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">{item.num}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Government contracting officers handle Assignment of Claims filings routinely — it
              is a standard administrative action, not a red flag. The factoring company you work
              with will typically provide a template notice and walk you through the process.
              Reputable government-specialized factoring companies handle dozens of these per week.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One practical note: the assignment applies to a specific contract. If you want to
              factor invoices across multiple contracts, you need a separate assignment on each
              one. Some factoring companies set up a master facility that handles multiple
              contracts under a single credit arrangement, but the formal assignment notices still
              go out per contract.
            </p>
          </div>

          <Callout icon={Shield} color="emerald" title="Your contract cannot prohibit factoring.">
            The Assignment of Claims Act supersedes any contract clause that would otherwise
            restrict a contractor from assigning payment rights. Even if a contract says it
            cannot be assigned without agency consent, that restriction cannot legally prevent
            you from assigning payment rights to a qualified financial institution. The agency
            must process a compliant assignment. If a contracting officer tells you otherwise,
            cite 41 U.S.C. 6305 directly.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="cash-flow-forecasting"
            number="08"
            title="Cash Flow Forecasting for Government Work"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The cash gap problem is manageable when you can see it coming. Most small
              contractors run into trouble because they manage cash reactively — checking their
              account when a payroll is due, not projecting forward three months. Government
              contracting makes a proactive cash flow model genuinely achievable because the
              payment schedule is more predictable than almost any commercial customer.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              You know your contract&apos;s billing period. You know the approximate payment
              timeline. You know when major cost milestones happen. With those three inputs, you
              can build a 13-week cash flow model that shows exactly when gaps will occur, how
              large they will be, and how much financing you need to cover them.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Map your cost timing by contract",
                  desc: "List every contract. For each, identify when major costs occur — payroll cycles, subcontractor payment dates, material purchases, travel. Most costs happen weekly or monthly. Map them against your billing period end dates and expected invoice submission dates.",
                },
                {
                  step: "02",
                  title: "Estimate payment timing realistically",
                  desc: "Use your actual historical payment data, not the contractual 30 days. If the agency that issued your contract typically pays in 45 days, use 45 days. If you are on the DoD accelerated payment program and consistently see 15-day payments, use 20 days to be conservative. Build your forecast on reality, not optimism.",
                },
                {
                  step: "03",
                  title: "Calculate the peak gap",
                  desc: "The peak cash gap is the maximum negative difference between cumulative costs incurred and cumulative cash received at any point in your forecast. This is the number you need to cover through working capital, a credit line, or financing. On a new contract, the peak gap is almost always in months two and three.",
                },
                {
                  step: "04",
                  title: "Model contract award timing variability",
                  desc: "If you are actively pursuing new contracts, build your forecast with a range of award dates — early, on-schedule, and late. A contract that slips three months delays your first invoice by three months, but your pursuit and overhead costs keep running. This scenario modeling prevents you from bidding yourself into a cash crisis if multiple contracts award late.",
                },
                {
                  step: "05",
                  title: "Review and update weekly",
                  desc: "A cash flow forecast is only useful if it reflects current reality. Update your model every week with actual receipts and disbursements. If your gap is growing faster than expected, you have more time to arrange financing when you catch it in week three than in week nine.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-100 bg-stone-50 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                pipeline view
              </Link>{" "}
              tracks active contract milestones, option exercise dates, and billing periods —
              giving you the inputs you need to build this model without digging through contract
              folders. Combine it with your accounting system to get a complete picture of costs
              incurred versus revenue collected at any point.
            </p>
          </div>

          <Callout icon={TrendingUp} color="sky" title="Sequence your bids around your cash capacity.">
            The biggest cash flow trap is winning too fast. Three significant contracts starting
            within 60 days of each other can create a gap larger than your entire working capital
            reserve — even if each contract is individually profitable. Use your{" "}
            <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-700 underline font-medium">
              bid/no-bid decision framework
            </Link>{" "}
            to pace your pursuit calendar so contract start dates are staggered. A contract you
            defer by two months is not a lost opportunity — it is often a survival decision.
          </Callout>

          {/* Section 9 */}
          <SectionHeading
            id="subcontractor-cash"
            number="09"
            title="Managing Subcontractor Cash Flow"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              If you use subcontractors, your cash flow problem compounds. You owe your subs
              payment on their terms — typically net 30 from invoice receipt — but you may not
              receive payment from the government for another 30–45 days. Running a prime
              contract with significant subcontracting means you are fronting money not just
              for your own labor and overhead, but for everyone else&apos;s too.
            </p>

            <p className="text-stone-600 leading-relaxed mb-6">
              Several mechanisms exist to manage this, both in how you structure your subcontracts
              and how you use FAR protections.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: FileText,
                  title: 'Build "pay when paid" provisions carefully',
                  desc: "Many prime contractors include pay-when-paid or pay-if-paid clauses in their subcontracts, which condition subcontractor payment on receipt of payment from the government. These clauses are enforceable in most jurisdictions — but check your state laws. A pay-when-paid clause does not eliminate your obligation to pay; it delays it until you receive government payment. If your agency is on the accelerated payment program and participates, this cascade can work in everyone's favor.",
                },
                {
                  icon: Shield,
                  title: "Flow down the accelerated payment requirement",
                  desc: "FAR 52.232-40 requires prime contractors who receive accelerated payment from the government to pass those accelerated payments through to their small business subcontractors without additional fees. If you are a prime and your subs qualify, you are legally required to pay them within 15 days of receiving your government payment — if you committed to this as a condition of the accelerated payment. Honor it. The SBA and contracting officers take violations seriously.",
                },
                {
                  icon: BarChart3,
                  title: "Model sub payment obligations separately",
                  desc: "In your cash flow forecast, track your sub payment obligations as a separate category from your own internal costs. They have different timing, different amounts, and different consequences for late payment (strained relationships and potential contract performance issues). Knowing your sub payment obligation for each upcoming week gives you specific cash needs to plan around.",
                },
                {
                  icon: CheckCircle2,
                  title: "Build adequate float into subcontract pricing",
                  desc: "When pricing your prime proposal, build the cost of carrying sub receivables into your overhead rate or G&A. The cost of financing a subcontractor payment gap is a real cost of doing business. Many primes under-price this and end up essentially providing 60-day interest-free loans to their subs with no margin to cover the carry cost.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you are a subcontractor yourself, not the prime, your leverage is different but
              your rights are real. Large prime contractors are required under the{" "}
              <Link href="/blog/small-business-subcontracting-plan" className="text-blue-700 underline font-medium">
                small business subcontracting requirements
              </Link>{" "}
              to pay their small business subs per FAR 52.242-5. If a prime contractor
              routinely delays payment to your firm beyond what your subcontract requires, you
              can report the violation to the SBA. Patterns of late subcontractor payments
              affect a prime&apos;s past performance record — something they take seriously when
              their contract renewals are at stake.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The cleanest approach for subcontractors: build a small cash cushion specifically
              for government work before you take on a large subcontract. Six weeks of operating
              expenses in reserve — not your entire working capital, but a dedicated government
              contract buffer — gives you enough runway to survive the payment cycle without
              stress-financing every invoice.
            </p>
          </div>

          <Callout icon={DollarSign} color="violet" title="The real competitive advantage is cash discipline.">
            Contractors who have solved their cash flow problem can pursue larger opportunities,
            accept more aggressive payment terms as a competitive differentiator, and absorb
            payment delays without operational disruption. Contractors who have not solved it
            avoid larger contracts, under-staff for fear of cash gap, and sometimes lose work
            they could have won because they cannot afford to wait to get paid. Cash management
            is not a finance department problem — it is a growth strategy.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="text-center max-w-2xl mx-auto">
              <BarChart3 className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-black mb-4">
                Win better contracts. Manage them smarter.
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                CapturePilot gives small government contractors the tools to find the right
                opportunities, track active contracts and billing cycles, and build proposals
                that win — so you can grow your federal revenue without outrunning your
                cash position.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-stone-100 pt-12">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/government-contract-invoicing",
                  title: "How to Invoice a Government Agency: Getting Paid on Federal Contracts",
                  category: "Getting Started",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  title: "DCAA Audit Preparation: What Small Business Contractors Must Know",
                  category: "Strategy",
                },
                {
                  href: "/blog/sba-loans-government-contractors",
                  title: "SBA Loans for Government Contractors: 7(a), Contract Financing, and How to Use Them",
                  category: "Getting Started",
                },
                {
                  href: "/blog/government-contract-pricing-strategies",
                  title: "Government Contract Pricing: Strategies to Win Without Losing Money",
                  category: "Proposals",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline: From Discovery to Award",
                  category: "Strategy",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits Before They Start",
                  category: "Strategy",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group p-5 rounded-xl border border-stone-200 hover:border-blue-200 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xs text-blue-600 font-medium">{post.category}</span>
                  <p className="text-sm font-bold text-stone-900 mt-1 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-1 text-blue-600 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read guide <ArrowRight className="w-3 h-3" />
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
