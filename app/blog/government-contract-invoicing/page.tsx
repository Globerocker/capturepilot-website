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
  FileText,
  Clock,
  Zap,
  Shield,
  BarChart3,
  AlertCircle,
  Building2,
  TrendingUp,
  Receipt,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "invoicing-skill", label: "Why Getting Paid Is Its Own Skill Set" },
  { id: "ipp-vs-wawf", label: "IPP vs. WAWF: Two Systems, Two Worlds" },
  { id: "proper-invoice", label: "The 10 Elements of a Proper Invoice (FAR 52.232-25)" },
  { id: "prompt-payment", label: "How the Prompt Payment Act Protects Your Cash Flow" },
  { id: "ipp-process", label: "Submitting Through IPP: Step-by-Step" },
  { id: "wawf-process", label: "Submitting Through WAWF: DoD Contract Invoicing" },
  { id: "contract-types", label: "Billing by Contract Type: FFP, T&M, Cost-Plus" },
  { id: "common-mistakes", label: "Invoicing Mistakes That Delay Payment" },
  { id: "invoicing-process", label: "Building a Billing Process That Scales" },
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

export default function GovernmentContractInvoicingPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-emerald-50 to-white">
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
            <span className="text-stone-900 font-medium">Government Contract Invoicing</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Receipt className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Invoice a Government Agency:{" "}
            <span className="gradient-text">Getting Paid on Federal Contracts</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Winning a government contract is hard. Getting paid on one should not be — but the
            federal invoicing process trips up more small businesses than any other part of
            contracting. The rules are specific, the systems are non-intuitive, and a single missing
            field resets your 30-day payment clock to zero.{" "}
            <strong className="text-stone-700">Here is exactly how to bill a federal agency correctly, fast, and every time.</strong>
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 15, 2026</span>
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
            id="invoicing-skill"
            number="01"
            title="Why Getting Paid Is Its Own Skill Set"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal agencies do not pay invoices. They pay <em>proper</em> invoices. That
              distinction — a legal one rooted in FAR Subpart 32.9 — matters because a single
              missing data element does not result in a partial payment or a follow-up request from
              your contracting officer. It results in your invoice being rejected outright and
              returned to you, and your 30-day payment clock starting over from zero.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For a small business operating on thin margins or managing subcontractor payrolls,
              that delay is not a paperwork inconvenience — it is a cash-flow problem. The
              government spent $753 billion on contracts in FY2024 according to USASpending.gov.
              That money flows out through invoicing systems that have specific requirements most
              new contractors discover the hard way.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The good news: the system is learnable. There are two primary invoicing platforms —
              one for civilian agencies, one for DoD — and each has a defined process. Master them
              once and billing becomes a routine, not a headache.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "30 days", label: "Standard federal payment deadline (Prompt Payment Act)", icon: Clock },
                { stat: "7 days", label: "Time agency has to reject a defective invoice", icon: AlertCircle },
                { stat: "14 days", label: "Construction contract progress payment deadline", icon: Building2 },
                { stat: "4.75%", label: "Prompt Payment interest rate Jul–Dec 2026", icon: TrendingUp },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              One more thing worth knowing upfront: the government is legally required to pay you
              interest if it is late. The Prompt Payment Act is not optional guidance — it is
              statute. If your invoice is proper and the agency misses the deadline, interest
              accrues automatically at the Treasury rate. You do not even have to ask for it.
              The law is on your side. But you have to submit a compliant invoice first.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="New contractor? Start here before billing.">
            Before you can submit your first invoice, you need an active{" "}
            <strong>SAM.gov registration</strong> with current banking information for electronic
            funds transfer. The government pays via EFT only in most cases — and the banking
            details on file in SAM are what get used. Verify your SAM registration is current and
            your banking information is accurate before your first contract deliverable is due.
            A lapsed SAM registration can halt payment even on a legitimate invoice.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="ipp-vs-wawf"
            number="02"
            title="IPP vs. WAWF: Two Systems, Two Worlds"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government runs two separate electronic invoicing ecosystems. Which one
              you use depends entirely on who you are contracting with.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">IPP (Invoice Processing Platform)</th>
                    <th className="text-left p-4 rounded-tr-xl font-semibold">WAWF (Wide Area Workflow)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Used for",
                      ipp: "Civilian federal agencies (EPA, GSA, HHS, DHS, Treasury, etc.)",
                      wawf: "Department of Defense contracts and subcontracts",
                    },
                    {
                      feature: "Operated by",
                      ipp: "Bureau of the Fiscal Service, U.S. Treasury",
                      wawf: "Defense Finance and Accounting Service (DFAS) via PIEE",
                    },
                    {
                      feature: "Access URL",
                      ipp: "ipp.gov",
                      wawf: "piee.eb.mil (WAWF is a module within PIEE)",
                    },
                    {
                      feature: "Governing regulation",
                      ipp: "FAR 52.232-25 (Prompt Payment) + agency-specific clauses",
                      wawf: "DFARS 252.232-7003 + 252.232-7006",
                    },
                    {
                      feature: "Required for",
                      ipp: "Most civilian agencies unless waiver granted",
                      wawf: "All DoD contracts — mandatory, no exceptions",
                    },
                    {
                      feature: "Document types",
                      ipp: "Invoices, credit memos",
                      wawf: "Invoices, receiving reports, cost vouchers, Invoice 2in1, combo docs",
                    },
                    {
                      feature: "Three-way match",
                      ipp: "Contract + PO + invoice",
                      wawf: "Contract + receiving report + invoice (strict)",
                    },
                    {
                      feature: "Cost to contractors",
                      ipp: "Free",
                      wawf: "Free",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-800 border-b border-stone-100">
                        {row.feature}
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.ipp}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.wawf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your contract will specify which system to use. Look for the invoicing clause — FAR
              52.232-25 will be present on civilian contracts and often references IPP. DoD
              contracts will include DFARS 252.232-7003 and 252.232-7006, which require WAWF.
              If you hold contracts with both civilian agencies and DoD, you will use both systems.
              They are not interchangeable.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One important nuance on IPP: some civilian agencies have agency-specific invoicing
              requirements layered on top of IPP. The EPA, for example, includes clause
              1552.232-70 in its contracts, which adds additional required fields. Always read
              your contract&apos;s invoicing section — do not assume standard FAR language covers
              everything.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="proper-invoice"
            number="03"
            title="The 10 Elements of a Proper Invoice (FAR 52.232-25)"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              FAR 52.232-25 defines exactly what makes an invoice &ldquo;proper.&rdquo; Miss one
              element and the billing office must return the invoice within 7 days — with a written
              explanation of what is missing. Your payment clock restarts when you resubmit. These
              10 elements are required on every invoice for federal contracts:
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  num: "01",
                  title: "Invoice date",
                  desc: "The date you submit the invoice. This starts the payment clock — the date matters legally. Never leave it blank or use a past date.",
                },
                {
                  num: "02",
                  title: "Invoice number",
                  desc: "A unique identifier you assign. Sequential numbering by contract is standard practice. The government needs this to track the payment in their system and to reference the invoice if there is a question.",
                },
                {
                  num: "03",
                  title: "Contract number",
                  desc: "The full contract number exactly as it appears on your contract. Include any order number if you are billing against a task order or delivery order under an IDIQ vehicle.",
                },
                {
                  num: "04",
                  title: "Description of work or deliverable",
                  desc: "A clear description of the supplies delivered or services performed. Reference the contract line item number (CLIN) for each item you are billing. Vague descriptions like \"services rendered\" are insufficient and will trigger rejection.",
                },
                {
                  num: "05",
                  title: "Quantity and unit price",
                  desc: "For supplies: unit count, unit of measure, and unit price. For services: hours or period of performance billed. For T&M contracts: labor categories, hours by category, and applicable rates from the contract.",
                },
                {
                  num: "06",
                  title: "Extended price",
                  desc: "The total invoice amount, calculated correctly. Math errors are a surprisingly common rejection reason. Verify your totals before submission.",
                },
                {
                  num: "07",
                  title: "Payment terms",
                  desc: "The payment terms specified in your contract. If you offer a prompt payment discount (e.g., 2/10 net 30), include it here. Most small businesses do not offer discounts, but the field must still reflect the contract terms.",
                },
                {
                  num: "08",
                  title: "Name and address of your company",
                  desc: "Must match exactly what is in SAM.gov. If your legal name has changed and SAM has not been updated, you will have a mismatch that triggers rejection.",
                },
                {
                  num: "09",
                  title: "Taxpayer Identification Number (TIN)",
                  desc: "Your EIN or SSN (for sole proprietors). This must match the TIN registered in SAM.gov. A mismatch here does not just delay payment — it flags your invoice for compliance review.",
                },
                {
                  num: "10",
                  title: "Name and phone of billing contact",
                  desc: "A specific person at your company who can answer questions about the invoice. The government will call this number if there is any issue. An unresponsive billing contact is one of the fastest ways to extend payment timelines unnecessarily.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
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
              Your contract may require additional information beyond these 10 elements — evidence
              of delivery, acceptance documentation, certified cost breakdowns for cost-type
              contracts, or agency-specific forms. The contract&apos;s invoicing clause is the
              definitive list. Read it before your first billing cycle.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If you are on a{" "}
              <Link href="/blog/gsa-schedule-guide" className="text-blue-700 underline font-medium">
                GSA Schedule contract
              </Link>
              , your invoicing requirements are similar but task orders under the schedule will
              each have their own specific delivery instructions. Treat each task order as its own
              mini-contract for invoicing purposes.
            </p>
          </div>

          <Callout icon={CheckCircle2} color="emerald" title="Pre-submission invoice checklist">
            Before submitting any federal invoice, verify:
            <ul className="space-y-1 mt-2">
              {[
                "Invoice date is today (or the actual submission date)",
                "Invoice number is unique and matches your internal tracking",
                "Contract number and order number are exact — including hyphens and zeros",
                "CLIN numbers match the deliverables listed",
                "Hours and rates match the contract exactly for T&M work",
                "Math is correct (extended prices and totals)",
                "Your company name matches SAM.gov exactly",
                "TIN matches SAM.gov registration",
                "Billing contact name and direct phone are current",
                "Required attachments (acceptance docs, timesheets, reports) are included",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Check your set-aside eligibility before you pursue more work</h3>
                <p className="text-emerald-100 text-sm">
                  Before spending hours on proposals, know which set-aside programs your business
                  qualifies for. CapturePilot&apos;s Quick Checker maps your size, certifications,
                  and NAICS codes to available opportunities in minutes.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="flex-shrink-0 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors flex items-center gap-2 text-sm"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="prompt-payment"
            number="04"
            title="How the Prompt Payment Act Protects Your Cash Flow"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Prompt Payment Act (31 U.S.C. Chapter 39) requires federal agencies to pay
              contractors within specific deadlines. When they miss those deadlines, they owe you
              interest — automatically, without you asking for it. This is not a complaint process.
              It is a statutory right.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  label: "Standard services/supplies",
                  deadline: "30 days",
                  note: "After receipt of proper invoice OR acceptance of goods/services, whichever is later",
                  color: "bg-blue-50 border-blue-200",
                  textColor: "text-blue-700",
                },
                {
                  label: "Construction progress payments",
                  deadline: "14 days",
                  note: "After receipt of invoice for a progress payment — faster than standard timeline",
                  color: "bg-emerald-50 border-emerald-200",
                  textColor: "text-emerald-700",
                },
                {
                  label: "Construction final payment",
                  deadline: "30 days",
                  note: "Including retainage release — same timeline as standard contracts",
                  color: "bg-stone-50 border-stone-200",
                  textColor: "text-stone-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border ${item.color} animate-on-scroll`}
                >
                  <p className="text-xs font-semibold text-stone-500 mb-2">{item.label}</p>
                  <p className={`text-3xl font-black ${item.textColor} mb-2`}>{item.deadline}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The interest clock starts the day after the payment was due. The rate is tied to the
              Treasury&apos;s Prompt Payment rate, which is reset every six months. For contracts
              where payment was late in 2026:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-semibold text-stone-700">Period</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Annual Interest Rate</th>
                    <th className="text-left p-3 font-semibold text-stone-700">Daily Rate (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: "January 1 – June 30, 2026", rate: "4.125%", daily: "~0.01129% / day" },
                    { period: "July 1 – December 31, 2025", rate: "4.625%", daily: "~0.01267% / day" },
                    { period: "July 1 – December 31, 2026", rate: "4.75%", daily: "~0.01301% / day" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 text-stone-700 border-b border-stone-100">{row.period}</td>
                      <td className="p-3 text-stone-700 font-semibold border-b border-stone-100">{row.rate}</td>
                      <td className="p-3 text-stone-500 border-b border-stone-100">{row.daily}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              On a $50,000 invoice that runs 20 days late at the 4.75% rate, the government owes
              you roughly $130 in interest. That may not sound like much — but if you have
              multiple contracts and payments are routinely slow, this adds up. More importantly,
              the existence of the penalty mechanism incentivizes agencies to pay on time. Knowing
              the rule exists changes how you follow up on late payments.
            </p>
            <p className="text-stone-600 leading-relaxed">
              There is one important catch: the 30-day clock does not start until the agency
              receives a <em>proper</em> invoice. An invoice returned for missing elements restarts
              the clock on the day you resubmit a corrected version. This is the real cost of
              invoice deficiencies — not rejection itself, but the weeks of delay that compound
              from it.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Invoice returned? Act within 24 hours.">
            When the billing office returns your invoice, they must provide a written explanation
            of what was wrong. Fix only what they flagged — do not change other elements of the
            invoice — and resubmit immediately. Do not wait until the next billing cycle. Every
            day you delay after receiving a rejection is a day your payment clock is not running.
            Track your rejections too: if the same field gets rejected twice, your invoice
            template has a structural problem that will cost you on every future contract.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="ipp-process"
            number="05"
            title="Submitting Through IPP: Step-by-Step"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The Invoice Processing Platform (IPP) at ipp.gov is the Treasury&apos;s centralized
              invoicing hub for most civilian federal agencies. Registration is free and one-time.
              Once you are set up, billing through IPP is faster than paper by a significant
              margin.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Register at IPP.gov",
                  desc: "Go to ipp.gov and create an account. You will need your UEI (Unique Entity Identifier from SAM.gov), your company EIN, and banking information for EFT payments. IPP will verify your identity against your SAM registration. If there is a mismatch between your SAM data and what you enter, registration will fail — fix SAM first.",
                },
                {
                  step: "02",
                  title: "Link to your contracting agency",
                  desc: "After registration, your agency's contracting office or finance team will link your account to the specific contract. You may receive a notification from the agency's IPP administrator, or you may need to contact your contracting officer's representative (COR) to initiate the link. Some agencies handle this during contract award; others wait until you request billing access.",
                },
                {
                  step: "03",
                  title: "Locate your purchase order in IPP",
                  desc: "Once linked, your contract and any associated purchase orders will appear in your IPP dashboard. Always invoice against the specific PO or order number — not the base contract number alone. IPP imports PO data from agency finance systems, so the line items should match your contract CLINs.",
                },
                {
                  step: "04",
                  title: "Create and submit your invoice",
                  desc: "Select the purchase order, click Create Invoice, and fill in all required fields: invoice number, invoice date, line item descriptions, quantities, and amounts. Attach any required supporting documentation (acceptance certificates, technical reports, progress documentation). Submit — IPP sends it directly to the agency's billing office for review.",
                },
                {
                  step: "05",
                  title: "Track payment status",
                  desc: "IPP shows real-time payment status. You can see whether your invoice is under review, approved, scheduled for payment, or rejected. The system sends email notifications at key status changes. Check your status 7-10 business days after submission — if you see no movement, contact the billing office.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-100 bg-stone-50 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              IPP&apos;s helpdesk is reachable at IPPCustomerSupport@fiscal.treasury.gov or
              (866) 973-3131. If you are having registration issues or cannot locate your PO in
              the system, they can typically resolve it within one business day. Do not let an
              IPP access problem delay your billing — call the helpdesk immediately.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Important exception: a contracting officer can authorize invoicing outside of IPP
              if electronic submission would be &ldquo;unduly burdensome.&rdquo; This is rare,
              and you must get written confirmation from the contracting officer. Without that
              written authorization, paper invoices submitted to civilian agencies will be returned.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="wawf-process"
            number="06"
            title="Submitting Through WAWF: DoD Contract Invoicing"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Wide Area Workflow (WAWF) is the Department of Defense&apos;s procure-to-pay
              platform. It is accessed through PIEE (Procurement Integrated Enterprise Environment)
              at piee.eb.mil. WAWF is not optional on DoD contracts — DFARS 252.232-7003 makes
              electronic submission mandatory, and DFARS 252.232-7006 defines the routing
              information your invoice must include.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The core concept in WAWF is the <strong>three-way match</strong>: before DoD pays,
              the system verifies that the contract, the receiving report (confirming the
              government received what you delivered), and your invoice all align. If any of the
              three disagree, payment halts until the discrepancy is resolved. Understanding this
              helps you anticipate where delays come from.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: FileText,
                  title: "Document types in WAWF",
                  desc: "WAWF uses several invoice document types depending on your contract type. For services not requiring physical shipment, the Invoice 2in1 (invoice + receiving report combined in one document) is most common for small businesses. For supply contracts, you submit a separate Invoice and a Receiving Report. For cost-type contracts including cost-plus and T&M, you submit a Cost Voucher. Your contract's DFARS 252.232-7006 clause will specify which type to use — check it before logging in.",
                },
                {
                  icon: Building2,
                  title: "Routing Data Table (RDT)",
                  desc: "Every WAWF invoice requires routing codes — DoDAACs (Department of Defense Activity Address Codes) that tell the system where to route the invoice for review and payment. These codes are listed in your contract in the WAWF Payment Instructions clause (typically in Section G or an attachment). Common codes include the Pay DoDAAC (which finance office pays you), Issue By DoDAAC, Admin DoDAAC, and Inspect By DoDAAC. Enter them exactly — wrong routing codes send your invoice to the wrong office and delay payment by weeks.",
                },
                {
                  icon: Shield,
                  title: "Acceptance vs. inspection",
                  desc: "On many DoD contracts, the government inspector and the acceptance authority are different people. An invoice that shows inspection complete but acceptance pending will sit in the queue until acceptance is recorded. If your invoice has been sitting for more than 15 days with no movement, call your COR to check whether acceptance has been recorded in WAWF. This is one of the most common — and most preventable — payment delays on DoD contracts.",
                },
                {
                  icon: Zap,
                  title: "Signing authority in PIEE",
                  desc: "To submit invoices in WAWF/PIEE, you need a Vendor/Contractor access role and a digital certificate or PKI credential. Register at piee.eb.mil and request the Vendor role. Supervisor approval within PIEE is required — build in time for this during contract kickoff, not when your first invoice is due. If you wait until you have a billable period to get set up in PIEE, you will delay your first payment by weeks.",
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

            <p className="text-stone-600 leading-relaxed">
              One practical advice for new DoD contractors: request a WAWF walkthrough from your
              contracting officer&apos;s representative at contract kickoff. Most CORs will
              spend 30 minutes helping you set up routing and submit a test invoice. This is
              standard — they want you billing correctly as much as you do.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track your contracts, milestones, and billing cycles in one place
                </h3>
                <p className="text-stone-500 text-sm">
                  CapturePilot&apos;s pipeline management keeps each contract&apos;s billing
                  schedule, deliverable dates, and key contacts organized — so you never miss
                  a billing cycle or let a Prompt Payment clock slip.
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

          {/* Section 7 */}
          <SectionHeading
            id="contract-types"
            number="07"
            title="Billing by Contract Type: FFP, T&M, Cost-Plus"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              What you invoice — and how you support it — depends on your{" "}
              <Link
                href="/blog/federal-contract-types-explained"
                className="text-blue-700 underline font-medium"
              >
                contract type
              </Link>
              . The invoicing requirements are meaningfully different across the main types.
              Getting them confused is a fast path to rejection.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-emerald-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  Firm Fixed Price (FFP)
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The simplest invoicing scenario. You invoice for the price agreed in the
                  contract against each CLIN, upon delivery or at the schedule specified in
                  the contract. No cost backup is required — the price is fixed. Your invoice
                  simply confirms what was delivered, when, and at what price. The main risk
                  here is invoicing before acceptance: an FFP invoice submitted before the
                  COR records acceptance will be returned. Confirm acceptance first, then bill.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  Time and Materials (T&M) and Labor Hour (LH)
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  T&M invoicing requires labor category breakdowns by the rate classes specified
                  in your contract. You bill hours worked per category at the applicable rates,
                  plus materials at cost (with or without a handling fee, as specified in the
                  contract). Timesheets or equivalent labor records are typically required as
                  attachments. The rates you bill must match the labor category rates in your
                  contract exactly — overcharging a single category, even by mistake, triggers
                  audit risk. Under FAR 52.216-7, T&M invoices are typically submitted monthly.
                </p>
              </div>

              <div className="border-l-4 border-violet-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  Cost-Reimbursement (CPFF, CPAF, CPIF)
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Cost-type contracts are the most documentation-intensive to invoice. You submit
                  a cost voucher (on DoD contracts through WAWF; on civilian contracts through
                  whatever the contract specifies) showing allowable, allocable, and reasonable
                  costs incurred. Categories include direct labor, direct materials, subcontract
                  costs, other direct costs (ODCs), and indirect costs (overhead, G&A) at the
                  rates established in your accounting system and negotiated with the government.
                  DCAA-compliant accounting is effectively required to invoice on cost-type
                  contracts without significant risk. See our{" "}
                  <Link href="/blog/dcaa-audit-small-business" className="text-blue-700 underline">
                    DCAA audit guide
                  </Link>{" "}
                  for the accounting requirements.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  IDIQ Task Orders
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  On{" "}
                  <Link href="/blog/idiq-contracts-explained" className="text-blue-700 underline">
                    IDIQ contract vehicles
                  </Link>
                  , you invoice against the individual task order, not the base IDIQ. Each task
                  order has its own contract type, CLINs, period of performance, and invoicing
                  instructions. A common mistake: using the base IDIQ contract number on invoices
                  when the correct number is the task order number. Always invoice against the
                  specific task order. Many IDIQs also have separate billing offices per task
                  order — verify each time.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="common-mistakes"
            number="08"
            title="Invoicing Mistakes That Delay Payment"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These are the actual reasons invoices get returned. Each one resets your Prompt
              Payment clock. A single billing cycle with two rounds of rejection can push payment
              back 45-60 days on what should have been a 30-day invoice.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Invoicing before acceptance",
                  desc: "On most service contracts, you cannot bill until the government formally accepts the deliverable. If your COR has not recorded acceptance in the agency's system, your invoice will be rejected. Follow up with your COR to confirm acceptance before submitting — especially on milestone-based FFP contracts.",
                  severity: "high",
                },
                {
                  title: "Wrong contract or order number",
                  desc: "Using the base contract number instead of the task order number, or transposing digits, routes your invoice to the wrong place or triggers a mismatch. The invoice is returned and you start over. Copy contract numbers directly from the signed contract — never type them from memory.",
                  severity: "high",
                },
                {
                  title: "SAM.gov registration expired",
                  desc: "Your SAM registration must be active at the time you invoice. Many agencies run automated checks against SAM before processing payment. A lapsed registration halts payment even on a technically perfect invoice. SAM registrations expire annually — set a renewal reminder 60 days before expiration.",
                  severity: "high",
                },
                {
                  title: "CLIN descriptions don't match the contract",
                  desc: "The description of work on your invoice must correspond to actual CLINs in the contract. Billing for work described differently than how the contract defines it — even if the work was identical — triggers rejection. Use the CLIN language from the contract, not your own description.",
                  severity: "medium",
                },
                {
                  title: "Missing required attachments",
                  desc: "Many contracts require proof of delivery, inspection records, or COR sign-off before billing. If these attachments are missing, the billing office cannot process the invoice. Read your contract's invoicing section at award to know exactly what must accompany every submission.",
                  severity: "medium",
                },
                {
                  title: "Billing over the funded amount",
                  desc: "On incrementally funded contracts, you can only invoice up to the amount that has been obligated — even if the total contract value is higher. Submitting an invoice that exceeds the current funded amount will be rejected. Track your funded ceiling separately from your total contract ceiling.",
                  severity: "medium",
                },
                {
                  title: "Wrong WAWF document type",
                  desc: "Submitting a standard invoice in WAWF when a Cost Voucher is required (or vice versa) results in rejection. The WAWF document type is specified in DFARS 252.232-7006. Check it for every new contract.",
                  severity: "medium",
                },
              ].map((mistake, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border ${
                    mistake.severity === "high"
                      ? "border-red-200 bg-red-50"
                      : "border-amber-200 bg-amber-50"
                  } animate-on-scroll`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle
                      className={`w-4 h-4 ${
                        mistake.severity === "high" ? "text-red-600" : "text-amber-600"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        mistake.severity === "high" ? "text-red-600" : "text-amber-600"
                      }`}
                    >
                      {mistake.severity === "high" ? "High Impact" : "Common"}
                    </span>
                  </div>
                  <p
                    className={`font-bold mb-2 ${
                      mistake.severity === "high" ? "text-red-900" : "text-amber-900"
                    }`}
                  >
                    {mistake.title}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      mistake.severity === "high" ? "text-red-800" : "text-amber-800"
                    }`}
                  >
                    {mistake.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              If you experience repeated rejections on the same contract, ask for a meeting with
              the contracting officer or billing office. They will often walk through their
              internal checklist with you. One 20-minute call can prevent months of back-and-forth.
            </p>
          </div>

          <Callout icon={DollarSign} color="sky" title="What to do when a payment is genuinely late">
            If your invoice is proper and payment is more than 30 days overdue, you have two
            options. First, contact the designated billing office in writing and ask for a
            payment status update — this creates a paper trail. Second, if you believe interest
            penalties are owed, note it in your communication. The government is required to pay
            interest automatically, but documenting the delay protects you if there is a dispute.
            For larger amounts, FAR 33.103 provides a formal disputes process — though for
            invoicing issues, a direct conversation with the contracting officer resolves most
            situations before escalation.
          </Callout>

          {/* Section 9 */}
          <SectionHeading
            id="invoicing-process"
            number="09"
            title="Building a Billing Process That Scales"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              When you have one contract, manual invoicing is manageable. When you have three or
              five — each with different contract types, billing offices, systems, and submission
              schedules — an ad-hoc process breaks down. Build structure from your first contract.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: FileText,
                  title: "Create a billing setup sheet for every contract at award",
                  desc: "When you sign a contract, capture the following in a standard document: contract number and order numbers, invoicing system (IPP or WAWF), billing office contact and email, COR name and phone, billing period and submission schedule, required attachments for each invoice, WAWF DoDAAC routing codes (for DoD), funded ceiling vs. total ceiling, and any agency-specific invoicing clauses. This takes 20 minutes at award and saves hours over the contract life.",
                },
                {
                  icon: Clock,
                  title: "Set billing cycle reminders at contract kickoff",
                  desc: "Most contracts specify when you can bill — monthly, upon milestones, or upon delivery. Put these dates in your calendar the day you sign the contract. A missed billing period on a monthly-invoiced contract means waiting another 30 days to bill — and another 30 days to get paid. Consistent billing cadence is one of the highest-leverage cash flow improvements a small contractor can make.",
                },
                {
                  icon: BarChart3,
                  title: "Track funded amounts separately from total contract value",
                  desc: "On incrementally funded contracts (common in government, particularly on cost-type and some T&M vehicles), the funded amount is the only amount you can legally bill against. When a contract modification adds funding, update your billing tracker immediately. Running a simple spreadsheet with funded amount, billed to date, and available balance keeps you from accidentally over-billing.",
                },
                {
                  icon: Shield,
                  title: "Segregate invoicing from accounting",
                  desc: "For DCAA compliance on cost-type contracts, your accounting records and invoices must be reconcilable. Use accounting software (Unanet, Deltek, or even QuickBooks with a govcon chart of accounts) from day one. Reconstructing records for an audit is expensive; building them correctly from the start is not. See our guide to",
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
                    {item.title === "Segregate invoicing from accounting" ? (
                      <p className="text-sm text-stone-600 leading-relaxed">
                        For DCAA compliance on cost-type contracts, your accounting records and
                        invoices must be reconcilable. Use accounting software (Unanet, Deltek,
                        or even QuickBooks with a govcon chart of accounts) from day one.
                        Reconstructing records for an audit is expensive; building them correctly
                        from the start is not. See our guide to{" "}
                        <Link
                          href="/blog/dcaa-audit-small-business"
                          className="text-blue-700 underline"
                        >
                          DCAA audit preparation
                        </Link>{" "}
                        for the accounting system requirements before you pursue cost-plus work.
                      </p>
                    ) : (
                      <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Cash flow predictability on government contracts comes directly from billing
              discipline. The firms that struggle with government cash flow — despite having
              good contracts — are almost always the ones with inconsistent billing schedules,
              invoice errors that push payment back 2-3 weeks per cycle, and no visibility into
              where each invoice stands. These are process problems, not contract problems.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                pipeline management
              </Link>{" "}
              tracks your active contracts from award through closeout — including billing
              milestones, deliverable dates, and funded ceilings. Combined with the{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                contract intelligence
              </Link>{" "}
              that shows you modification history and option exercise dates, you get a full
              picture of each contract&apos;s billing status without maintaining a separate
              spreadsheet for every award.
            </p>
          </div>

          <Callout icon={Lightbulb} color="violet" title="What about subcontractor pass-through billing?">
            If you are a prime contractor billing your customer for subcontractor work, the rules
            depend on your contract type. On FFP contracts, subcontractor costs are embedded in
            your fixed price — there is nothing to pass through. On T&M and cost-plus contracts,
            you bill subcontractor costs as a direct cost line, typically at cost (or cost plus a
            specified handling fee). Your contract will specify the markup, if any, and whether
            you need to attach subcontractor invoices. Always flow down the same invoicing and
            record-keeping requirements to your subs via your{" "}
            <Link
              href="/blog/small-business-subcontracting-plan"
              className="underline font-medium"
            >
              subcontract agreements
            </Link>{" "}
            — your DCAA audit will check whether your subcontractor documentation is audit-ready,
            not just your own records.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="text-center max-w-2xl mx-auto">
              <DollarSign className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-black mb-4">
                Win more contracts. Get paid faster.
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                CapturePilot helps small government contractors find the right opportunities,
                build stronger proposals, and manage every active contract from award to
                closeout — including billing schedules, modification tracking, and pipeline visibility.
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
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors text-sm"
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
                  href: "/blog/federal-contract-types-explained",
                  title: "Federal Contract Types Explained: FFP, T&M, IDIQ, and Which to Pursue",
                  category: "Getting Started",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  title: "DCAA Audit Preparation: What Small Business Contractors Must Know",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline: From Discovery to Award",
                  category: "Strategy",
                },
                {
                  href: "/blog/idiq-contracts-explained",
                  title: "IDIQ Contracts Explained: How to Get on a Multi-Year Contract Vehicle",
                  category: "Vehicles",
                },
                {
                  href: "/blog/government-contract-closeout",
                  title: "Government Contract Closeout: How to Finish a Contract and Get Your Final Payment",
                  category: "Strategy",
                },
                {
                  href: "/blog/far-clauses-small-business",
                  title: "Key FAR Clauses Every Small Business Contractor Must Know",
                  category: "Getting Started",
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
