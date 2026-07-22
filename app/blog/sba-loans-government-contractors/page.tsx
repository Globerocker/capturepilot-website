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
  Zap,
  Building2,
  CreditCard,
  XCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "cash-flow-problem", label: "The Cash Flow Problem No One Warns You About" },
  { id: "why-contractors-borrow", label: "Why Winning a Contract Creates a Capital Need" },
  { id: "sba-7a", label: "SBA 7(a) Loans: The Foundation for Most Contractors" },
  { id: "caplines", label: "SBA CAPLines: The Tool Built for Contract Financing" },
  { id: "express-loans", label: "SBA Express Loans: Speed Over Maximum Dollars" },
  { id: "invoice-factoring", label: "Invoice Factoring: Fast but Expensive" },
  { id: "comparison", label: "Comparison: Which Financing Tool for Which Situation" },
  { id: "award-letter", label: "Using Your Contract Award Letter to Qualify" },
  { id: "application-process", label: "The Application Process: What to Expect" },
  { id: "strategic-timing", label: "When to Apply: Strategic Timing for Contractors" },
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

export default function SbaLoansGovernmentContractorsPage() {
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
            <span className="text-stone-900 font-medium">SBA Loans for Government Contractors</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Award className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SBA Loans for Government Contractors:{" "}
            <span className="gradient-text">7(a), Contract Financing, and How to Use Them</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Winning a federal contract is only half the battle. The government pays in 30 to 90 days,
            but your costs start the moment you sign. SBA loans — including the{" "}
            <strong className="text-stone-700">7(a) program, CAPLines, and Express loans</strong> — are
            built specifically to bridge that gap. Here&apos;s how to use them.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 22, 2026</span>
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
            id="cash-flow-problem"
            number="01"
            title="The Cash Flow Problem No One Warns You About"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              You spent six months pursuing a contract. You wrote the proposal, won the award, and
              signed the paperwork. Then reality hits: you need to hire staff before your first
              invoice, buy equipment before work begins, and set up systems before the government
              will pay you a dollar. The contract is real. The cash isn&apos;t here yet.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This is the mobilization problem, and it catches more small contractors off guard than
              almost any other aspect of federal contracting. The government&apos;s standard payment
              window is net 30 days after a proper invoice — but in practice, many agencies take 45
              to 90 days to process and pay. Meanwhile, your employees need to be paid weekly or
              bi-weekly, your suppliers want their money on delivery, and your overhead costs don&apos;t
              pause while you wait for the first check.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The financing tools that close this gap are real, accessible, and designed specifically
              for small businesses. The SBA approved 77,600 7(a) loans totaling $37 billion in fiscal
              year 2025 — and combined with the 504 program, deployed a record $45 billion to more
              than 85,000 small businesses, the highest total in agency history. A meaningful share of
              that went to government contractors using these exact instruments to fund mobilization,
              bridge payment cycles, and grow their federal revenue.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$37B", label: "SBA 7(a) loans approved in FY2025", icon: DollarSign },
                { stat: "77,600", label: "Individual loans approved in FY2025", icon: BarChart3 },
                { stat: "$5M", label: "Maximum SBA 7(a) loan per borrower", icon: Target },
                { stat: "30–90", label: "Days typical government payment cycle", icon: Clock },
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
              This guide covers the main financing options available to small business government
              contractors — the SBA 7(a) program, CAPLines, Express loans, and invoice factoring —
              along with how to apply, when to apply, and how your contract award can actually
              strengthen your application.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="why-contractors-borrow"
            number="02"
            title="Why Winning a Contract Creates a Capital Need"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Not every business has a cash gap problem. A pure consulting firm with two employees
              and no overhead might be able to start a contract and wait for the first payment. But
              most government contractors — staffing firms, IT service providers, construction
              companies, facility maintenance operators, security companies — carry real costs from
              day one that can&apos;t wait 60 days for reimbursement.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Common Mobilization Costs</h3>
            <div className="space-y-3 mb-8">
              {[
                {
                  cost: "Hiring and onboarding staff",
                  detail: "Recruiting fees, background checks, security clearance processing, benefits enrollment. On a $500K services contract, you might spend $20,000–$40,000 before a single hour of work is billed.",
                  icon: Award,
                },
                {
                  cost: "Equipment and materials",
                  detail: "Tools, vehicles, IT hardware, specialized gear. Construction and facility maintenance contracts often require six figures of equipment before a shovel hits the ground.",
                  icon: Building2,
                },
                {
                  cost: "Insurance and bonding",
                  detail: "Many contracts require performance bonds, payment bonds, and increased liability coverage. Bonding alone can require collateral that ties up working capital.",
                  icon: Shield,
                },
                {
                  cost: "Secure IT infrastructure",
                  detail: "DoD and civilian agency contracts increasingly require CMMC-compliant environments, encrypted systems, and specific software. Setup costs can be substantial.",
                  icon: Zap,
                },
                {
                  cost: "Subcontractor deposits",
                  detail: "If your performance depends on subs, many will require upfront mobilization payments or deposits before they commit their own resources.",
                  icon: FileText,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200 animate-on-scroll"
                >
                  <item.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.cost}</p>
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-stone-900 mb-4">The Ongoing Cash Cycle Problem</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Mobilization is a one-time hit. The ongoing problem is the payment cycle. You invoice
              monthly (or sometimes more frequently), the agency processes the invoice, and payment
              arrives somewhere between 30 and 90 days later depending on the agency&apos;s internal
              processes, whether your invoice was submitted correctly, and whether the contracting
              officer&apos;s approval chain is functioning normally.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              On a $1 million annual contract, that payment lag means you have $83,000 to $250,000
              in work delivered but not yet collected at any given time. Your payroll doesn&apos;t care.
              Your suppliers don&apos;t care. If you&apos;re growing and winning new contracts simultaneously,
              the cash gap compounds across multiple awards.
            </p>

            <Callout icon={Info} color="blue" title="The Gap Is Predictable — Which Makes It Financeable">
              Unlike most business cash flow problems, the government contractor&apos;s gap is
              predictable, documented, and backed by a creditworthy payer: the U.S. government.
              Lenders and the SBA recognize this. A signed contract award letter from a federal
              agency is not a hope — it&apos;s an obligation. That changes your financing options
              significantly compared to a business selling to commercial customers.
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="my-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Know what contracts you&apos;re eligible to win</h3>
                <p className="text-blue-100 text-sm">
                  Before you need financing, you need the right contracts in your pipeline.
                  CapturePilot&apos;s Quick Checker verifies your eligibility — certifications, size
                  status, SAM registration — in under 60 seconds.
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

          {/* Section 3 */}
          <SectionHeading
            id="sba-7a"
            number="03"
            title="SBA 7(a) Loans: The Foundation for Most Government Contractors"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA 7(a) program is the agency&apos;s flagship lending product and the one most
              government contractors turn to first. The SBA does not lend money directly — it
              guarantees a portion of loans made by approved lenders (banks, credit unions, CDFIs),
              which reduces the lender&apos;s risk and makes them willing to approve borrowers they
              might otherwise pass on.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For most 7(a) loans, the SBA guarantees 75% to 85% of the loan amount. That guarantee
              is what makes these loans achievable for small businesses that don&apos;t have years of
              bank relationships or extensive collateral. You&apos;re still borrowing from a private
              lender, but the government is co-signing.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Current Loan Limits and Rates</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The standard 7(a) loan maximum is $5 million per borrower. As of May 2026, the SBA
              doubled the cumulative limit for combined 7(a) and 504 loans to $10 million — meaning
              a manufacturer could access up to $10 million total across both programs. For most
              service contractors, the operative ceiling remains $5 million per 7(a) loan.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Interest rates are tied to a base rate (prime rate or SOFR) plus a lender spread. As
              of mid-2026, approximate variable rates range from roughly 9.75% for loans over $350K
              down to 13.25% for loans under $50K. Fixed rates run slightly higher. The SBA caps
              the maximum spread a lender can charge above the base rate, which keeps 7(a) rates
              more competitive than most unsecured commercial loans.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="text-left p-3 font-bold border border-blue-600">Loan Size</th>
                    <th className="text-left p-3 font-bold border border-blue-600">Approx. Variable Rate</th>
                    <th className="text-left p-3 font-bold border border-blue-600">Approx. Fixed Rate</th>
                    <th className="text-left p-3 font-bold border border-blue-600">SBA Guarantee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "Up to $50,000", variable: "~13.25%", fixed: "~14.75%", guarantee: "85% (≤$150K)" },
                    { size: "$50,001–$150,000", variable: "~12.75%", fixed: "~13.25%", guarantee: "85%" },
                    { size: "$150,001–$350,000", variable: "~11.25–12.75%", fixed: "~12.75%", guarantee: "75%" },
                    { size: "$350,001–$5M", variable: "~9.75%", fixed: "~11.75%", guarantee: "75%" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 font-medium text-stone-900">{row.size}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.variable}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.fixed}</td>
                      <td className="p-3 border border-stone-200 font-bold text-blue-700">{row.guarantee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-stone-600 text-sm italic mb-6">
              Rates as of mid-2026, based on WSJ Prime Rate of 6.75% plus SBA maximum spreads. Variable
              rates change with the prime rate. SBA guarantees 85% on loans $150K and under, 75% on
              loans above $150K. Express loans carry a 50% guarantee. Verify current rates with an
              SBA-approved lender before applying.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">What You Can Use 7(a) Funds For</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "Working capital", desc: "Bridge payroll, overhead, and supplier payments while awaiting government invoices" },
                { label: "Equipment purchases", desc: "Vehicles, machinery, IT hardware, specialized tools required to perform contract work" },
                { label: "Business acquisition", desc: "Buy out a competitor or partner to grow your federal contracting capacity" },
                { label: "Real estate", desc: "Purchase or renovate office, warehouse, or operations space tied to contract performance" },
                { label: "Refinancing existing debt", desc: "Consolidate higher-interest debt into a single lower-rate SBA loan" },
                { label: "Contract startup costs", desc: "Mobilization expenses before your first invoice can be submitted" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 animate-on-scroll">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-0.5">{item.label}</p>
                    <p className="text-xs text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-stone-900 mb-4">2025–2026 Program Changes to Know</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA tightened 7(a) eligibility in mid-2025. Key changes include a higher minimum
              credit score requirement, stricter ownership and citizenship documentation, the return
              of guarantee fees (which had been waived during COVID-era relief), and the elimination
              of merchant cash advance refinancing. If you were approved under older standards, be
              aware your renewal may face additional scrutiny.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One positive change: starting FY2026 (October 2025 onward), the SBA waives guarantee
              fees for loans of $950,000 or less issued to small manufacturers in NAICS sectors 31–33.
              If you do any manufacturing work under your federal contracts, confirm whether this
              waiver applies before you pay the fee.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="caplines"
            number="04"
            title="SBA CAPLines: The Tool Built for Contract Financing"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most contractors don&apos;t know CAPLines exist. They should. CAPLines are a family of
              revolving and non-revolving credit lines under the 7(a) umbrella, designed specifically
              for businesses with cyclical or short-term working capital needs. The maximum is $5
              million and maturity is capped at 10 years.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For government contractors, the most relevant variant is the <strong>Contract
              CAPLine</strong>. It finances the costs of one or more specific contracts — including
              overhead and G&A expenses allocable to those contracts. The loan amount is calculated
              based on your contract costs: for a contract with a single payment at completion, the
              maximum is the sum of estimated contract costs. For contracts with multiple payments,
              the SBA allows up to 20% over your greatest projected cash deficit period.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Contract CAPLine</h3>
                </div>
                <p className="text-sm text-blue-800 mb-3">
                  Finances direct costs of one or more specific federal contracts.
                </p>
                <ul className="space-y-2">
                  {[
                    "Tied to a specific contract or set of contracts",
                    "Covers labor, materials, and allocable overhead",
                    "Up to $5M, max 10-year maturity",
                    "Revolves as you invoice and collect",
                    "Eligibility matches standard 7(a) requirements",
                    "Must demonstrate ability to perform the contract",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-900">Seasonal CAPLine</h3>
                </div>
                <p className="text-sm text-emerald-800 mb-3">
                  For contractors with predictable seasonal peaks in workload.
                </p>
                <ul className="space-y-2">
                  {[
                    "Covers seasonal increases in accounts receivable",
                    "Useful for construction, landscaping, HVAC contractors",
                    "Must have been in business for at least 1 year",
                    "Must have verifiable seasonal pattern",
                    "Up to $5M, max 10-year maturity",
                    "Can complement a Contract CAPLine",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The key difference between a Contract CAPLine and a standard 7(a) term loan is
              structure. A term loan gives you a lump sum and you repay it over time. A Contract
              CAPLine is a revolving line: you draw against it as you incur costs, repay it as
              invoices are collected, and draw again for the next billing cycle. For ongoing
              contracts that repeat monthly, this is significantly more efficient than a term loan.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One practical note: CAPLine approval requires you to demonstrate your ability to
              complete the specific contract(s) you&apos;re financing. A lender will want to see not
              just financial capacity but technical and operational track record. Having documented{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-600 hover:underline">
                past performance
              </Link>{" "}
              on similar contracts helps your CAPLine application as much as it helps your proposals.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="express-loans"
            number="05"
            title="SBA Express Loans: Speed Over Maximum Dollars"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SBA Express loans trade a lower guarantee (50%, versus 75–85% for standard 7(a)) for
              dramatically faster processing. The SBA responds to applications within 36 hours,
              versus weeks or months for standard 7(a) underwriting. The current maximum is $500,000.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For government contractors, Express loans are most useful in two scenarios. First,
              when you need capital quickly to respond to a short-fuse opportunity and don&apos;t have
              time for the full 7(a) process. Second, when your capital need is modest enough that
              $500,000 covers it and you want to avoid the documentation burden of a standard
              application.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-900 border border-stone-200">Feature</th>
                    <th className="text-left p-3 font-bold text-stone-900 border border-stone-200">Standard 7(a)</th>
                    <th className="text-left p-3 font-bold text-stone-900 border border-stone-200">Express Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Maximum loan", standard: "$5 million", express: "$500,000" },
                    { feature: "SBA guarantee", standard: "75–85%", express: "50%" },
                    { feature: "SBA response time", standard: "Weeks to months", express: "36 hours" },
                    { feature: "Documentation burden", standard: "Full underwriting package", express: "Lender-driven, lighter" },
                    { feature: "Best for", standard: "Larger capital needs, equipment, real estate", express: "Fast working capital under $500K" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 font-medium text-stone-900">{row.feature}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.standard}</td>
                      <td className="p-3 border border-stone-200 text-blue-700 font-medium">{row.express}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={Lightbulb} color="amber" title="Start With Express if You Need Capital Fast">
              If you just won a contract and need working capital in days rather than weeks,
              call an SBA Preferred Lender and ask specifically about Express. The 36-hour SBA
              response doesn&apos;t mean funding arrives in 36 hours — the lender still needs to
              underwrite — but it removes the SBA bottleneck and can cut overall timelines
              significantly. Preferred Lenders can also approve Express loans without sending them
              to the SBA at all, using delegated authority.
            </Callout>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="invoice-factoring"
            number="06"
            title="Invoice Factoring: Fast but Expensive"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Invoice factoring is not an SBA product, but it&apos;s worth understanding because many
              contractors use it — and some use it incorrectly, creating problems for their SBA
              eligibility down the road.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Factoring works like this: you submit an invoice to the government for $100,000. A
              factoring company buys that invoice from you immediately, advancing you 80–95% of the
              face value ($80,000–$95,000). When the government pays the invoice, the factor collects
              the full $100,000 and remits the remaining balance minus their fee. The factoring fee
              typically runs 1–4% per month — which sounds reasonable until you calculate the
              effective annual rate: at 2% per month on a 60-day receivable, your effective APR
              exceeds 24%.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  point: "Speed: funding in 24–72 hours",
                  type: "pro",
                  detail: "Factoring companies can advance funds almost immediately after reviewing your government invoice. No SBA approval, no bank underwriting.",
                },
                {
                  point: "No debt on your balance sheet",
                  type: "pro",
                  detail: "Factoring is technically a sale of an asset (your receivable), not a loan. It doesn't add liabilities, which can matter if you're managing covenants or bonding ratios.",
                },
                {
                  point: "Qualification based on government's credit, not yours",
                  type: "pro",
                  detail: "Factors care primarily about the creditworthiness of your customer — and the U.S. government is about as creditworthy as it gets. This makes factoring accessible to newer companies.",
                },
                {
                  point: "Effective cost is very high",
                  type: "con",
                  detail: "The effective APR on factored invoices frequently runs 30–60%+ once you account for monthly fees on slow-paying agencies. This is significantly more expensive than SBA loan rates.",
                },
                {
                  point: "UCC-1 lien can block SBA financing",
                  type: "con",
                  detail: "Factoring companies typically file a blanket lien (UCC-1) on your receivables. That lien can prevent you from qualifying for SBA loans or lines of credit until it's released. Plan sequentially.",
                },
                {
                  point: "Customer relationships can be affected",
                  type: "con",
                  detail: "Factoring companies may contact your government agency to verify the invoice and confirm payment directions. Some contracting officers are surprised by third-party collection contact.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-4 rounded-xl border ${
                    item.type === "pro"
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-rose-50 border-rose-200"
                  } animate-on-scroll`}
                >
                  {item.type === "pro" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-bold text-stone-900 mb-0.5 text-sm">{item.point}</p>
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The right way to think about factoring: it&apos;s a bridge, not a strategy. Use it when
              you need capital immediately and have no SBA facility in place. Use SBA products when
              you have time to apply. The cost difference between 10% (SBA) and 40%+ (factoring) is
              dramatic over the life of a multi-year contract.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-12 rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-black text-stone-900 mb-2">
                  Build the pipeline that makes lenders say yes
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  A strong contract pipeline — active awards, recurring revenue, upcoming opportunities —
                  is one of the most powerful things you can show an SBA lender. CapturePilot tracks
                  every opportunity from discovery to award so your pipeline is always current.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/features/pipeline"
                    className="inline-flex items-center gap-2 border border-blue-300 text-blue-700 font-medium px-5 py-2.5 rounded-xl hover:bg-blue-100 transition-colors text-sm"
                  >
                    See pipeline management
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="comparison"
            number="07"
            title="Comparison: Which Financing Tool for Which Situation"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              No single financing product is right for every situation. Here&apos;s how to match
              your capital need to the right tool.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="text-left p-3 font-bold border border-blue-600">Situation</th>
                    <th className="text-left p-3 font-bold border border-blue-600">Best Tool</th>
                    <th className="text-left p-3 font-bold border border-blue-600">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      situation: "Mobilization costs on a new contract",
                      tool: "7(a) term loan or Contract CAPLine",
                      why: "Structured repayment as revenue flows in; Contract CAPLine revolves with billing cycle",
                    },
                    {
                      situation: "Ongoing working capital across multiple contracts",
                      tool: "Contract CAPLine or 7(a) line of credit",
                      why: "Revolving structure matches your recurring invoice cycle",
                    },
                    {
                      situation: "Equipment purchase for contract performance",
                      tool: "SBA 7(a) term loan or 504 loan",
                      why: "Longer repayment terms keep monthly payments manageable; 504 for larger equipment/real estate",
                    },
                    {
                      situation: "Capital needed in days, not weeks",
                      tool: "SBA Express (≤$500K) or invoice factoring",
                      why: "Express has 36-hour SBA turnaround; factoring can fund in 24–72 hours",
                    },
                    {
                      situation: "Working capital under $500K, quick ramp-up",
                      tool: "SBA Express loan",
                      why: "Faster approval, adequate limit, lower cost than factoring",
                    },
                    {
                      situation: "Invoice already submitted, payment delayed",
                      tool: "Invoice factoring (short-term)",
                      why: "Advances against a specific outstanding invoice; doesn't require loan qualification",
                    },
                    {
                      situation: "Buying a government contracting business",
                      tool: "SBA 7(a) standard loan",
                      why: "Business acquisition is an eligible use; up to $5M with longer amortization",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 text-stone-700">{row.situation}</td>
                      <td className="p-3 border border-stone-200 font-bold text-blue-700">{row.tool}</td>
                      <td className="p-3 border border-stone-200 text-stone-600 text-xs">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={Info} color="sky" title="You Can Stack Products — But Sequence Matters">
              A Contract CAPLine for your current contract and a 7(a) term loan for equipment can
              coexist, subject to combined limits. What you cannot do easily is hold a factoring
              company&apos;s UCC-1 blanket lien on your receivables while trying to open a CAPLine.
              If you&apos;re moving from factoring to SBA financing, get the lien released first.
            </Callout>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="award-letter"
            number="08"
            title="Using Your Contract Award Letter to Qualify"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The single most powerful document in a government contractor&apos;s SBA loan application
              is the contract award letter — or for IDIQs, the task order. This document demonstrates
              something commercial borrowers can&apos;t show: a specific, legally binding, government-backed
              obligation to pay you a defined amount for defined work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Lenders and the SBA treat this very differently from a sales forecast or pipeline
              projection. A signed government contract is not a hope — it&apos;s a contractual
              obligation from a counterparty that will not go bankrupt. That fundamentally reduces
              the lender&apos;s repayment risk.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">What to Include With Your Award Letter</h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "The contract award document",
                  detail: "The signed Standard Form 1449 (for commercial items) or DD Form 1155 (DoD), or equivalent. Include the full contract including all attachments and modifications.",
                },
                {
                  step: "02",
                  title: "Contract cost breakdown",
                  detail: "Your detailed cost structure for performing the work — labor, materials, overhead, G&A. This shows the lender how much capital you actually need and supports the loan sizing.",
                },
                {
                  step: "03",
                  title: "Payment schedule and invoicing terms",
                  detail: "What payment terms does the contract specify? Monthly invoicing? Milestone payments? Progress payments? The payment schedule maps to the loan repayment projection.",
                },
                {
                  step: "04",
                  title: "Past performance evidence",
                  detail: "Documentation of contracts you've successfully performed before. Demonstrates your ability to execute, not just your ability to win. CPARS ratings are ideal; client letters work too.",
                },
                {
                  step: "05",
                  title: "Current pipeline summary",
                  detail: "A brief summary of other active contracts and upcoming bids. Lenders want to see that the contract you're financing isn't your only revenue source.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For a Contract CAPLine specifically, you&apos;ll also need to demonstrate your technical
              and financial ability to perform the contract on time and within budget. The SBA and
              lender want confidence that the receivables they&apos;re financing will actually be
              generated — that you won&apos;t default on performance and leave the contract unpaid.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If you&apos;re pursuing a{" "}
              <Link href="/blog/idiq-contracts-explained" className="text-blue-600 hover:underline">
                task order under an IDIQ vehicle
              </Link>
              , bring the task order itself, not just the master contract. Lenders need to see the
              specific funded obligation, not just your placement on a vehicle that could issue
              zero task orders.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="application-process"
            number="09"
            title="The Application Process: What to Expect"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The SBA does not take your application directly. You apply through an SBA-approved
              lender — a bank, credit union, or Community Development Financial Institution (CDFI)
              that has been approved to originate SBA-guaranteed loans. The SBA maintains a lender
              directory and a tool called Lender Match at sba.gov that connects you with local
              lenders interested in your loan type.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  phase: "Phase 1: Preparation (1–2 weeks)",
                  steps: [
                    "Gather 2–3 years of business tax returns and current financials",
                    "Prepare a business plan or executive summary with financial projections",
                    "Compile your contract award documentation and cost breakdown",
                    "Pull your personal credit report and understand your credit score",
                    "Check that your SAM.gov registration is current and active",
                  ],
                },
                {
                  phase: "Phase 2: Lender Selection and Pre-Qualification (1 week)",
                  steps: [
                    "Use SBA Lender Match or contact SBA Preferred Lenders directly",
                    "Have initial conversations with 2–3 lenders to compare appetite and speed",
                    "Confirm whether the lender has experience with government contractor loans",
                    "Ask specifically about Contract CAPLines — not all lenders offer every product",
                  ],
                },
                {
                  phase: "Phase 3: Full Application (2–4 weeks)",
                  steps: [
                    "Submit SBA Form 1919 (borrower information) and Form 1920 (lender eligibility)",
                    "Provide personal financial statements for all owners with 20%+ ownership",
                    "Submit all supporting documentation including contract award letter",
                    "Lender underwrites and packages for SBA review (standard 7(a)) or approves directly (Preferred Lender Program)",
                  ],
                },
                {
                  phase: "Phase 4: SBA Review and Approval (varies by product)",
                  steps: [
                    "Express: SBA responds within 36 hours",
                    "Standard 7(a) via Preferred Lender: lender approves using delegated authority, faster",
                    "Standard 7(a) via regular lender: SBA review takes 5–10 business days typical",
                    "Approval issues conditional commitment letter; closing follows",
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-200 animate-on-scroll">
                  <h3 className="font-bold text-stone-900 mb-4">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="rose" title="One Mistake That Derails Applications">
              Ownership and citizenship documentation is where many applications stall in 2025–2026.
              The SBA now requires stricter verification that all direct and indirect owners with
              20%+ stakes are U.S. citizens or nationals. If your company has investors, minority
              owners, or a complex ownership structure, clarify this before you apply — not mid-underwriting.
            </Callout>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="strategic-timing"
            number="10"
            title="When to Apply: Strategic Timing for Government Contractors"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Timing your SBA application correctly can mean the difference between having capital
              when you need it and scrambling to factor invoices at 40% APR. The common mistake
              is waiting until you&apos;ve won a contract to start thinking about financing.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The right time to establish an SBA credit facility is <em>before</em> you win. Once
              you have an active credit line in place, you can draw against it immediately upon
              contract award. Trying to open a CAPLine after you&apos;ve already signed the contract
              and need to hire next week is like buying car insurance after the accident.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  timing: "12+ months before you need capital",
                  action: "Build your banking relationship",
                  detail: "Open a business checking account with an SBA Preferred Lender, run payroll through it, and establish a track record. Lenders lend to borrowers they know. A cold application from an unknown company gets more scrutiny than an application from an existing customer.",
                  icon: Building2,
                  color: "blue",
                },
                {
                  timing: "6–9 months before capital need",
                  action: "Apply for a small facility before you need a large one",
                  detail: "A smaller SBA line of credit — even $100K–$250K — establishes your credit profile with an SBA lender and makes it easier to increase the facility later. Don't wait until you need $1M for your first SBA relationship.",
                  icon: TrendingUp,
                  color: "emerald",
                },
                {
                  timing: "When you receive a contract award",
                  action: "Draw on existing facility or apply with the award letter",
                  detail: "If you have a CAPLine in place, draw immediately for mobilization. If you're applying fresh, the award letter is your strongest document. Apply to multiple lenders simultaneously — you're not committed until you sign loan documents.",
                  icon: Award,
                  color: "blue",
                },
                {
                  timing: "Between contract awards",
                  action: "Build financial documentation for the next application",
                  detail: "Keep clean financial statements, tax returns filed on time, and CPARS ratings documented. Every time you perform well on a contract, collect evidence. That documentation stream is what makes your next loan application easier.",
                  icon: FileText,
                  color: "sky",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-stone-50 border border-stone-200 animate-on-scroll"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className={`w-5 h-5 ${
                      item.color === "emerald" ? "text-emerald-600" :
                      item.color === "sky" ? "text-sky-600" :
                      "text-blue-600"
                    }`} />
                    <div>
                      <p className="text-xs text-stone-500 font-medium uppercase tracking-wide">{item.timing}</p>
                      <p className="font-bold text-stone-900">{item.action}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-stone-900 mb-4">The Pipeline Connection</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              One thing that separates contractors who get SBA financing from those who struggle is
              a well-documented pipeline. A lender who sees only one contract — the one you&apos;re
              asking them to finance — is looking at a business that might have no revenue next year.
              A lender who sees an active pipeline of three contracts in progress and five in pursuit
              sees a business with sustainable cash flow potential.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Use{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                CapturePilot&apos;s pipeline management
              </Link>{" "}
              to track your active contracts and opportunities in a format you can share with lenders.
              A professional pipeline report — not a spreadsheet, a structured view of your
              government work — signals that you run your business with discipline. Lenders notice that.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The best government contractors treat financing as infrastructure, not emergency response.
              They maintain SBA relationships, keep their books clean, and document their past
              performance continuously — so when a major contract lands, the money is already positioned.
              That&apos;s how you mobilize in days instead of scrambling for weeks.
            </p>

            <Callout icon={CreditCard} color="emerald" title="SCORE Can Connect You With Free Mentoring Before You Apply">
              The SBA&apos;s SCORE program pairs you with retired executives who can review your
              financials, help you prepare your application, and recommend SBA lenders with
              experience in government contracting. SCORE mentoring is free and available in every
              state. If you&apos;ve never applied for an SBA loan, a SCORE session before you apply
              is worth the time.
            </Callout>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-10 border-t border-stone-200">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/government-contract-invoicing",
                  title: "How to Invoice a Government Agency: Getting Paid on Federal Contracts",
                  tag: "Getting Started",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline: From Discovery to Award",
                  tag: "Strategy",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
                  tag: "Proposals",
                },
                {
                  href: "/blog/base-year-option-year-contracts",
                  title: "Base Year + Option Years: How Multi-Year Government Contracts Actually Work",
                  tag: "Getting Started",
                },
                {
                  href: "/blog/government-contracting-for-startups",
                  title: "Government Contracting for Startups: Is Federal Revenue Right for You?",
                  tag: "Getting Started",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  title: "DCAA Audit Preparation: What Small Business Government Contractors Must Know",
                  tag: "Strategy",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex flex-col p-5 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xs font-medium text-blue-600 mb-2">{article.tag}</span>
                  <span className="text-sm font-bold text-stone-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {article.title}
                  </span>
                  <span className="mt-2 text-blue-500 flex items-center gap-1 text-xs font-medium">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white text-center animate-on-scroll">
            <DollarSign className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-3">
              Win the contracts that make your SBA application easy
            </h2>
            <p className="text-stone-300 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
              A strong government contract pipeline is your best argument to any SBA lender.
              CapturePilot finds, tracks, and scores every opportunity that matches your certifications
              and NAICS codes — so you always know what&apos;s worth pursuing. Try it free for 30 days.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3 rounded-xl transition-colors"
              >
                Start your free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white font-medium px-7 py-3 rounded-xl transition-colors"
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
