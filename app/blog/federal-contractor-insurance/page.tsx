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
  Shield,
  DollarSign,
  FileText,
  Clock,
  Building2,
  Target,
  BarChart3,
  Zap,
  Lock,
  Truck,
  Users,
  Star,
  XCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-insurance-matters", label: "Why Insurance Is a Contract Requirement, Not Optional" },
  { id: "far-part-28", label: "FAR Part 28: The Legal Framework for Contractor Insurance" },
  { id: "six-types", label: "The Seven Insurance Types Every Contractor Must Know" },
  { id: "minimum-amounts", label: "Minimum Coverage Amounts by Contract Type" },
  { id: "construction-bonding", label: "Construction Contracts: Bonding and the Miller Act" },
  { id: "professional-cyber", label: "Professional Services and IT: E&O and Cyber Coverage" },
  { id: "getting-covered", label: "How to Get the Right Coverage Without Overpaying" },
  { id: "proposal-certificates", label: "Certificates of Insurance and Proposal Requirements" },
  { id: "common-mistakes", label: "Insurance Mistakes That Kill Contracts" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
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

export default function FederalContractorInsurancePage() {
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
            <span className="text-stone-900 font-medium">Government Contractor Insurance Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contractor Insurance:{" "}
            <span className="gradient-text">What Coverage You Actually Need to Win</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Every federal solicitation lists insurance requirements. Get them wrong and your
            proposal is non-responsive before an evaluator reads a word.{" "}
            <strong className="text-stone-700">FAR Part 28</strong> sets the floor — but agencies
            routinely require more. Here&apos;s what you need, what the rules actually say, and how
            to get coverage without paying for things you don&apos;t need.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 16, 2026</span>
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
            id="why-insurance-matters"
            number="01"
            title="Why Insurance Is a Contract Requirement, Not Optional"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Insurance is not a box to check after you win a contract. It&apos;s a threshold
              requirement baked into the solicitation itself. If you don&apos;t have the coverage
              levels the agency specifies, your proposal is non-responsive — and non-responsive
              proposals don&apos;t get evaluated. They get discarded.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              There&apos;s a second problem that trips up contractors who do get coverage: the
              certificate of insurance has to be in hand before you start work. Not when you get
              around to it. Before day one. Miss that window and the contracting officer can stop
              your work order or, in worst cases, issue a cure notice that puts your entire contract
              in jeopardy.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The good news is that the rules aren&apos;t complicated once you understand them.
              FAR Part 28 sets the federal floor. Agency supplements and solicitation clauses layer
              on top. Know the framework, get the right policy, and insurance becomes a one-time
              setup — not an ongoing scramble before every new award.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "FAR 28.307-2", label: "Sets minimum liability coverage amounts", icon: FileText },
                { stat: "$500K", label: "Min general liability per occurrence (FAR floor)", icon: DollarSign },
                { stat: "$150K", label: "Miller Act threshold for bonding on construction", icon: Building2 },
                { stat: "30 days", label: "Typical advance notice required for cancellation", icon: Clock },
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
              The coverage levels the government requires often look low compared to what commercial
              clients demand. But &quot;low&quot; is relative. A small business paying $1,800 per year for
              general liability might need to step up to a $1 million policy to meet agency
              requirements — and that can mean a different policy or an endorsement, not just a
              higher premium.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Understanding what you need before you respond to a solicitation is what separates
              contractors who are proposal-ready from those who scramble after they win. Use
              CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-blue-700 underline font-medium">
                proposal tools
              </Link>{" "}
              to flag compliance requirements — including insurance clauses — during opportunity
              review.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="far-part-28"
            number="02"
            title="FAR Part 28: The Legal Framework for Contractor Insurance"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Federal Acquisition Regulation&apos;s Part 28 covers all bonds, insurance, and
              indemnification requirements across federal contracts. Two clauses matter most for the
              typical small business contractor.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  clause: "FAR 52.228-5",
                  name: "Insurance — Work on a Government Installation",
                  when: "Fixed-price contracts for work performed on government property",
                  what: "Requires the contractor to maintain insurance during performance and provide certificates to the contracting officer before starting work. The government is not liable for damages to contractor property.",
                },
                {
                  clause: "FAR 52.228-7",
                  name: "Insurance — Liability to Third Persons",
                  when: "Cost-reimbursement contracts (the government reimburses allowable insurance costs)",
                  what: "Requires the contractor to carry and maintain adequate insurance to cover third-party liability. Allowable insurance costs can be billed as overhead on cost-type contracts.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 rounded-lg px-3 py-1.5 flex-shrink-0">
                      <p className="text-blue-700 font-mono text-xs font-bold">{item.clause}</p>
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 mb-1">{item.name}</p>
                      <p className="text-xs text-stone-500 mb-2">
                        <strong>When it applies:</strong> {item.when}
                      </p>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.what}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The actual minimum dollar amounts live in <strong>FAR 28.307-2</strong>. This is the
              table contracting officers reference when writing insurance requirements into
              solicitations, and it&apos;s the floor you must meet at minimum. Most agencies set
              higher limits — especially DoD, VA, and DHS — but you have to know the baseline to
              understand when agency requirements are standard versus elevated.
            </p>

            <Callout icon={Lightbulb} color="blue" title="Always read Section H and Section I of every solicitation">
              Insurance requirements are typically found in{" "}
              <strong>Section H</strong> (Special Contract Requirements) or{" "}
              <strong>Section I</strong> (Contract Clauses) of an RFP. Never rely on the FAR
              minimums alone — agencies incorporate higher limits, additional coverage types, and
              specific endorsement requirements through these sections. If you&apos;re unsure what
              a clause requires, call the contracting officer before the solicitation closes, not
              after award.
            </Callout>

            <p className="text-stone-600 leading-relaxed">
              One more clause worth knowing: <strong>FAR 52.228-3</strong> (Workers&apos;
              Compensation Insurance) is incorporated when a contract requires performance in a
              state where the contractor might not automatically be covered by state law. If
              you&apos;re working across state lines, confirm your workers&apos; comp policy covers
              all states where employees will perform work.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="six-types"
            number="03"
            title="The Seven Insurance Types Every Contractor Must Know"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Not every federal contract requires every type of insurance. But you need to understand
              all seven so you know which apply to your work — and so you can spot a solicitation that
              asks for something unusual before you bid.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  icon: Shield,
                  num: "01",
                  title: "Commercial General Liability (CGL)",
                  tags: ["Almost always required"],
                  desc: "Covers bodily injury and property damage claims from third parties arising from your work. This is the most commonly required coverage in federal solicitations. FAR 28.307-2(c) sets a $500,000 per-occurrence floor for bodily injury — but most agencies require $1 million to $2 million. Your CGL policy also needs to name the government as an additional insured on most construction and services contracts.",
                },
                {
                  icon: Users,
                  num: "02",
                  title: "Workers' Compensation & Employer's Liability",
                  tags: ["Required for employees"],
                  desc: "Workers' comp is mandatory in virtually every state once you have employees, and federal contracts reinforce this. FAR 28.307-2(a) requires compliance with applicable state workers' comp laws, with a $100,000 per-accident floor for employer's liability coverage (FAR 28.307-2(b)). If you have 1099 subcontractors doing the work, confirm whether your policy — and the contract — requires them to carry their own.",
                },
                {
                  icon: Truck,
                  num: "03",
                  title: "Commercial Auto Liability",
                  tags: ["Required when vehicles are used"],
                  desc: "FAR 28.307-2(d) sets the minimum at $200,000 per person / $500,000 per occurrence for bodily injury, and $20,000 per occurrence for property damage. If employees use personal vehicles for contract work, you need hired and non-owned auto coverage added to your commercial policy — standard personal auto policies don't cover business use on government work.",
                },
                {
                  icon: Star,
                  num: "04",
                  title: "Professional Liability (Errors & Omissions)",
                  tags: ["Required for professional services"],
                  desc: "Covers claims arising from errors, omissions, or negligent acts in professional services — consulting, engineering, IT, accounting, legal work. This is not part of the FAR minimums for general contracts, but most professional services solicitations specifically require it. Common limits are $1 million per claim / $2 million aggregate. IT contracts frequently require $2 million to $5 million depending on the sensitivity of the systems involved.",
                },
                {
                  icon: Lock,
                  num: "05",
                  title: "Cyber Liability Insurance",
                  tags: ["Growing requirement — especially DoD"],
                  desc: "Not explicitly mandated by FAR Part 28, but becoming a standard clause in agency solicitations — particularly DoD contracts where DFARS 252.204-7012 requires safeguarding Covered Defense Information and 72-hour cyber incident reporting. Covers data breach response costs, ransomware, business interruption, and third-party liability. If you handle Controlled Unclassified Information (CUI) or operate IT systems on government networks, expect agencies to require cyber coverage of $1 million or more. Costs typically run $1,500–$5,000/year for a $1M policy at the small business level.",
                },
                {
                  icon: Truck,
                  num: "06",
                  title: "Defense Base Act (DBA) Insurance",
                  tags: ["Required for overseas contracts"],
                  desc: "A statutory requirement — not optional — for any U.S. government contractor employing workers outside the United States on military bases or government contracts, under 42 U.S.C. § 1651. The DBA extends workers' compensation benefits to employees injured or killed overseas. FAR 52.228-3 triggers this clause. Failure to obtain DBA coverage results in fines, possible contract loss, and eliminates standard legal defenses in lawsuits. If you pursue DoD, DoS, or USAID work involving overseas performance, DBA coverage is mandatory before your first employee lands.",
                },
                {
                  icon: Building2,
                  num: "07",
                  title: "Umbrella / Excess Liability",
                  tags: ["Common on larger contracts"],
                  desc: "Provides additional limits above your CGL, auto, and employer's liability policies. If an agency requires $5 million in general liability but your underlying policy only goes to $2 million, an umbrella policy fills the gap — usually at a lower per-dollar cost than extending the underlying policy. Commonly required on larger construction contracts, facility management awards, and security services contracts where government liability exposure is high.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-blue-600">{item.num}</span>
                      <p className="font-bold text-stone-900">{item.title}</p>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Check your proposal readiness before you bid</h3>
                <p className="text-blue-100 text-sm">
                  CapturePilot flags insurance requirements, bonding thresholds, and compliance
                  clauses in every opportunity so you know exactly what you need before you commit
                  to a pursuit.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm whitespace-nowrap"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="minimum-amounts"
            number="04"
            title="Minimum Coverage Amounts by Contract Type"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              FAR 28.307-2 is your baseline. Agencies regularly require higher limits — and they
              can. The table below shows what the regulation mandates versus what you typically see
              in the field. Use it as a starting point, not an ending point.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl font-semibold">Coverage Type</th>
                    <th className="text-left p-4 font-semibold">FAR Minimum</th>
                    <th className="text-left p-4 rounded-tr-xl font-semibold">Typical Field Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Workers' Compensation",
                      far: "Per applicable state law",
                      field: "Per state law + employer's liability",
                    },
                    {
                      type: "Employer's Liability",
                      far: "$100,000 per accident",
                      field: "$100,000–$500,000 per accident",
                    },
                    {
                      type: "General Liability (bodily injury)",
                      far: "$500,000 per occurrence",
                      field: "$1M–$2M per occurrence / $2M–$4M aggregate",
                    },
                    {
                      type: "Auto Liability (bodily injury)",
                      far: "$200,000/person; $500,000/occurrence",
                      field: "$1M combined single limit",
                    },
                    {
                      type: "Auto Liability (property damage)",
                      far: "$20,000 per occurrence",
                      field: "Usually bundled into combined single limit",
                    },
                    {
                      type: "Professional Liability",
                      far: "Not specified — solicitation-dependent",
                      field: "$1M–$5M per claim / aggregate",
                    },
                    {
                      type: "Cyber Liability",
                      far: "Not specified — DFARS/solicitation-dependent",
                      field: "$1M–$5M (DoD often requires $5M)",
                    },
                    {
                      type: "Umbrella / Excess",
                      far: "Not specified",
                      field: "$5M–$10M on large construction/services",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-800 border-b border-stone-100">
                        {row.type}
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.far}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.field}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="The agency can always require more than FAR minimums">
              FAR 28.307-2 is the regulatory floor, not the ceiling. Contracting officers routinely
              insert higher limits through solicitation clauses — particularly on high-value, high-risk,
              or sensitive contracts. Always read the solicitation&apos;s insurance requirements
              section before getting a quote. Getting a policy based on FAR minimums and then
              learning the agency wants $5 million in cyber coverage can delay your award by weeks.
            </Callout>

            <p className="text-stone-600 leading-relaxed">
              The easiest way to manage coverage across multiple pursuits is to maintain a
              &quot;base&quot; policy that meets FAR minimums, then purchase endorsements or umbrella
              coverage when a specific opportunity requires higher limits. Many carriers that
              specialize in government contractors offer modular policies designed exactly for
              this approach.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="construction-bonding"
            number="05"
            title="Construction Contracts: Bonding and the Miller Act"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Construction contracts come with a completely separate layer of requirements that go
              beyond insurance: performance bonds and payment bonds, mandated by the{" "}
              <strong>Miller Act (40 U.S.C. §§ 3131–3134)</strong>. These are not optional and
              not waivable on federal construction contracts above the threshold.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              {[
                {
                  icon: Shield,
                  title: "Performance Bond",
                  amount: "100% of contract value",
                  threshold: "Required on contracts above $150,000",
                  what: "Guarantees the contractor will complete the project according to contract terms. If the contractor defaults, the surety steps in to complete the work or compensate the government.",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                },
                {
                  icon: DollarSign,
                  title: "Payment Bond",
                  amount: "100% of contract value",
                  threshold: "Required on contracts above $150,000",
                  what: "Guarantees the contractor will pay subcontractors, suppliers, and laborers. Protects subs and suppliers who can't file mechanics' liens against government property.",
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                },
              ].map((bond, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${bond.color} animate-on-scroll`}>
                  <div className="flex items-center gap-3 mb-3">
                    <bond.icon className={`w-6 h-6 ${bond.iconColor}`} />
                    <h3 className="font-black text-stone-900">{bond.title}</h3>
                  </div>
                  <p className="text-2xl font-black text-stone-900 mb-1">{bond.amount}</p>
                  <p className="text-xs text-stone-500 mb-3">{bond.threshold}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{bond.what}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Bonding is different from insurance. Insurance transfers risk to an insurer for
              losses you can&apos;t foresee. A surety bond is a three-party agreement where the
              surety backs your ability to perform — and if you fail, the surety pays out but then
              seeks repayment from you. Sureties are not charities. They want to see your financial
              statements, backlog, work-in-progress schedule, bank references, and sometimes
              personal financial information before writing a bond.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For contracts between <strong>$150,000 and $350,000</strong>, the contracting officer
              may accept alternatives to standard bonds: irrevocable letters of credit, U.S. bonds
              or notes, or certified checks. Above $350,000, full surety bonds are the standard.
            </p>

            <Callout icon={Lightbulb} color="sky" title="Get your bonding capacity established before you pursue construction work">
              Bonding capacity — the total dollar value of contracts a surety will bond for you —
              is determined well before the solicitation closes. If you wait until you win to apply
              for bonding, you&apos;ll lose the contract. Work with a surety agent{" "}
              <em>before</em> you start bidding on construction. A surety relationship takes 30 to
              90 days to establish, and your capacity will grow as you build a track record.
              Construction contractors also need standard insurance: CGL, auto, workers&apos; comp,
              and builder&apos;s risk on projects where the government doesn&apos;t provide property
              coverage.
            </Callout>

            <p className="text-stone-600 leading-relaxed">
              If you&apos;re targeting{" "}
              <Link
                href="/blog/construction-government-contracts"
                className="text-blue-700 underline font-medium"
              >
                federal construction contracts
              </Link>
              , the SBA&apos;s{" "}
              <strong>Surety Bond Guarantee Program</strong> can help small businesses obtain
              bonding by guaranteeing up to 90% of the surety&apos;s loss on contracts up to
              $9 million (up to $14 million when a federal contracting officer certifies the
              guarantee is needed). The fee is 0.6% of the contract price for performance and
              payment bonds — bid bonds are free. In FY2025 the program hit a record $10.6 billion
              in total contract value supported, a 15% jump over the prior year, with over 2,200
              small businesses assisted. If your bonding history is thin, this program is the
              fastest path to getting on construction solicitations above the $150,000 threshold.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="professional-cyber"
            number="06"
            title="Professional Services and IT: E&O and Cyber Coverage"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              If your work is knowledge-based — consulting, engineering, software development,
              financial analysis, legal or accounting services — general liability alone won&apos;t
              satisfy most federal clients. Professional liability (also called Errors &amp; Omissions
              or E&amp;O) covers claims arising from your advice, your deliverables, or your failure
              to perform a professional service correctly.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government buys more services than any other type of contract — well over
              half of annual procurement spending. If you&apos;re in the{" "}
              <Link
                href="/blog/it-government-contracts"
                className="text-blue-700 underline font-medium"
              >
                IT contracting space
              </Link>
              , or providing any form of management consulting, you will encounter E&amp;O
              requirements in the solicitation. Standard limits run $1 million per claim and
              $2 million aggregate — but agencies with sensitive systems regularly require $2 to
              $5 million.
            </p>

            <div className="bg-stone-900 rounded-2xl p-6 my-8 animate-on-scroll">
              <h3 className="text-white font-black text-lg mb-4">Cyber Coverage: What the DoD Now Expects</h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                CMMC Phase 1 took effect November 10, 2025, requiring DoD contractors to self-assess
                against CMMC Level 1 or Level 2 and affirm compliance in the Supplier Performance
                Risk System (SPRS). Phase 2 — which would have required third-party C3PAO
                assessments — was suspended by the Department of War on{" "}
                <strong className="text-white">July 13, 2026</strong>, pending a 60-day reform
                review. DFARS 252.204-7012 remains fully in effect regardless: contractors handling
                Covered Defense Information must safeguard CUI and report cyber incidents to
                DIBNet within 72 hours. Separately, many DoD solicitations now independently
                require cyber liability insurance for contracts involving IT systems, networks, or
                CUI. The typical structure:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "First-party coverage",
                    desc: "Costs you incur from a breach: forensics, notification, credit monitoring, public relations, ransomware response",
                  },
                  {
                    label: "Third-party liability",
                    desc: "Claims from others harmed by your breach — including the government agency if compromised data flows from your systems",
                  },
                  {
                    label: "Business interruption",
                    desc: "Lost revenue and extra expense when a cyber incident takes your systems offline and you can't perform on the contract",
                  },
                  {
                    label: "Regulatory defense",
                    desc: "Legal costs for defending investigations under CMMC, HIPAA, or other data regulations that apply to your contract",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold text-sm">{item.label}: </span>
                      <span className="text-stone-400 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-stone-400 text-sm mt-4">
                If you&apos;re pursuing{" "}
                <Link href="/blog/cmmc-compliance-dod-contractors" className="text-blue-400 underline">
                  CMMC-scoped contracts
                </Link>
                , cyber insurance is not a substitute for compliance — but it&apos;s an increasingly
                expected parallel requirement. Cyber insurers are now requiring documented NIST
                800-171 controls as a condition for coverage, meaning CMMC compliance and
                insurability are functionally linked. Budget $1,500–$5,000 per year for a $1 million
                cyber policy depending on your IT profile, revenue, and security posture.
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed">
              One coverage type that&apos;s easy to miss: <strong>Technology E&amp;O</strong>. If you
              develop, sell, or support software or technology products, standard professional
              liability may exclude technology-related claims. You may need a Technology E&amp;O
              policy or a combined Tech E&amp;O and cyber policy — increasingly sold together by
              carriers serving the government IT market.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="getting-covered"
            number="07"
            title="How to Get the Right Coverage Without Overpaying"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The government contracting insurance market is specialized. A carrier that writes
              great policies for restaurants or retail won&apos;t necessarily understand that you
              need specific endorsements, that the government is not a standard &quot;additional
              insured,&quot; or that your contract requires 30-day cancellation notice. Work with a
              broker or agent who specifically writes government contractor insurance — they know
              how to structure policies that meet FAR and agency-supplement requirements without
              overbuilding.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  step: "01",
                  title: "Build your coverage baseline first",
                  desc: "General liability + workers' comp + auto covers 80% of what federal solicitations require. Get these in place before you chase your first contract. Expect $800–$2,000/year for GL alone at a $1M/$2M limit for most non-construction small businesses; construction firms run higher. Workers' comp varies by industry and state but averages $254/month for GCs.",
                },
                {
                  step: "02",
                  title: "Read every solicitation before bidding",
                  desc: "Section H and Section I will list specific limits, endorsements, and requirements. Note them before you bid — not after. Some solicitations require government additional insured status or waiver of subrogation.",
                },
                {
                  step: "03",
                  title: "Add professional liability when you cross into services",
                  desc: "If any part of your contract involves professional judgment, advice, or deliverables — get E&O. Add cyber if you're handling government data or operating IT systems. Don't add these for work that doesn't need them.",
                },
                {
                  step: "04",
                  title: "Establish bonding capacity for construction early",
                  desc: "Contact a surety agent 90 days before you plan to bid your first construction project. Prepare two to three years of financial statements. Surety underwriting takes time and your bonding capacity grows over time.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <span className="text-2xl font-black text-blue-100 select-none">{item.step}</span>
                  <h3 className="font-black text-stone-900 text-base mb-2 mt-1">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Callout icon={DollarSign} color="emerald" title="What government contractor insurance actually costs">
              For a small service or IT contractor doing less than $2M in annual revenue:{" "}
              <strong>
                $800–$1,700/year for CGL at $1M per occurrence / $2M aggregate
              </strong>{" "}
              (national average is approximately $79–$142/month depending on trade). Workers&apos;
              comp varies by industry — office work runs $0.30–$0.60 per $100 of payroll;
              construction averages $254/month ($3,054/year). Professional liability for consulting
              or IT typically adds $900–$3,000/year. Cyber liability adds $1,500–$5,000 depending
              on revenue, data handled, and security posture. These are real operating costs —
              factor them into your overhead rate for cost-reimbursement proposals, or into your{" "}
              <Link href="/blog/price-to-win-government-contracts" className="underline font-medium">
                price-to-win analysis
              </Link>{" "}
              for fixed-price bids.
            </Callout>

            <p className="text-stone-600 leading-relaxed">
              Look for carriers with experience in government contractor markets: Travelers, CNA,
              Hartford, and specialized markets like AIG or Chubb for professional lines. For small
              businesses, insurtech platforms that bundle CGL, professional liability, and cyber
              into a single policy can reduce administrative overhead and sometimes cost less than
              buying each line separately. Compare multiple quotes — premiums in this market vary
              more than most business owners expect.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="proposal-certificates"
            number="08"
            title="Certificates of Insurance and Proposal Requirements"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Winning a contract isn&apos;t the end of the insurance process — it&apos;s the
              beginning of the documentation phase. Before your contracting officer can issue
              a notice to proceed, you&apos;ll need to provide proof of coverage. That means a
              <strong> certificate of insurance</strong>, almost always on{" "}
              <strong>ACORD Form 25</strong>, naming the correct government entity and showing all
              required coverage types and limits.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  icon: CheckCircle2,
                  text: "ACORD 25 is the standard certificate form. Your carrier issues it — don't create your own.",
                  good: true,
                },
                {
                  icon: CheckCircle2,
                  text: "The certificate must name the contracting agency as the certificate holder, using the exact legal name from the contract.",
                  good: true,
                },
                {
                  icon: CheckCircle2,
                  text: "If the contract requires additional insured status for the government, your carrier adds an endorsement — not a note on the certificate.",
                  good: true,
                },
                {
                  icon: CheckCircle2,
                  text: "FAR contracts typically require 30 days written notice to the contracting officer before cancellation. Your policy must include this endorsement.",
                  good: true,
                },
                {
                  icon: XCircle,
                  text: "Do not submit a certificate with expiration dates inside the contract period of performance. Get a renewal in place before your policy lapses.",
                  good: false,
                },
                {
                  icon: XCircle,
                  text: "Do not assume the certificate showing 'General Liability: $1M/$2M' satisfies a clause that requires 'each occurrence $2M, aggregate $4M.' Read carefully.",
                  good: false,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <item.icon
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      item.good ? "text-emerald-500" : "text-red-500"
                    }`}
                  />
                  <p className="text-sm text-stone-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Some contracts require you to maintain coverage throughout the entire period of
              performance, including any option years exercised. Set a calendar reminder 90 days
              before policy expiration so you&apos;re not scrambling for a renewal when an option
              year is about to start. A gap in coverage — even a single day — can trigger a cure
              notice and give the contracting officer grounds to terminate for default.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If your insurance requirements change during a contract — you add employees, expand
              to a new work site, or the government exercises an option that changes the scope —
              update your certificates and notify the contracting officer. Proactive communication
              on coverage changes is far better than being caught with inadequate coverage during
              a contract audit.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl bg-stone-900 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-white text-xl font-black mb-2">
                  Track compliance requirements across every pursuit
                </h3>
                <p className="text-stone-400 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-400 underline">
                    pipeline tools
                  </Link>{" "}
                  let you log insurance requirements, bonding thresholds, and certificate deadlines
                  for every active opportunity — so nothing falls through the cracks between bid
                  and award.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors text-sm whitespace-nowrap"
              >
                Start free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="common-mistakes"
            number="09"
            title="Insurance Mistakes That Kill Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Most insurance problems in government contracting are avoidable. They happen because
              contractors treat insurance as an afterthought instead of a pre-bid checklist item.
              Here are the mistakes that actually cost contractors work — and their fixes.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  mistake: "Relying on FAR minimums when the agency requires more",
                  fix: "Read Section H and I of every solicitation. Flag insurance clauses before you decide to bid, not after award.",
                  severity: "high",
                },
                {
                  mistake: "Getting coverage after winning instead of before",
                  fix: "Maintain a base policy year-round. When an agency requires higher limits, get the endorsement or umbrella policy within days of award — not weeks.",
                  severity: "high",
                },
                {
                  mistake: "Letting the policy lapse between contracts",
                  fix: "Keep coverage continuous. Set renewal reminders 90 days out. A lapse in the middle of a contract period of performance can trigger termination for default.",
                  severity: "high",
                },
                {
                  mistake: "Missing the additional insured endorsement",
                  fix: "When the solicitation requires the government to be named as additional insured, that requires a specific endorsement from your carrier — not a note on the certificate. Confirm with your broker before award.",
                  severity: "medium",
                },
                {
                  mistake: "Not carrying hired and non-owned auto coverage",
                  fix: "If employees ever drive personal vehicles for contract work, standard commercial auto won't cover it. Add hired and non-owned auto to your policy. It's inexpensive.",
                  severity: "medium",
                },
                {
                  mistake: "Submitting certificates with wrong entity names",
                  fix: "The certificate holder name must match the contracting agency exactly as listed in the contract. A certificate that says 'US Army' for a contract with 'U.S. Army Corps of Engineers' can be rejected.",
                  severity: "medium",
                },
                {
                  mistake: "Assuming CGL covers professional work",
                  fix: "General liability specifically excludes professional services errors. If you provide advice, deliverables, or technical services, you need professional liability — CGL will not respond to those claims.",
                  severity: "medium",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border animate-on-scroll"
                  style={{
                    borderColor: item.severity === "high" ? "#fca5a5" : "#d1d5db",
                    backgroundColor: item.severity === "high" ? "#fff7f7" : "#fafaf9",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <XCircle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        item.severity === "high" ? "text-red-500" : "text-amber-500"
                      }`}
                    />
                    <div>
                      <p className="font-bold text-stone-900 mb-1 text-sm">{item.mistake}</p>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-stone-600 leading-relaxed">{item.fix}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Target} color="emerald" title="Use insurance as a competitive signal">
              Most small businesses treat insurance as a cost. Smart contractors treat it as a
              differentiator. If your policy limits exceed what the solicitation requires —
              and you mention that in your management or past performance volume — you signal
              financial stability and risk management maturity. Some agencies, particularly in
              construction and high-value services, take contractor financial strength into account
              during technical evaluation. Don&apos;t just meet the floor. Know why the floor
              exists and what exceeding it communicates.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you&apos;re building out your compliance infrastructure alongside your contracting
              strategy, the{" "}
              <Link
                href="/resources/bid-checklist"
                className="text-blue-700 underline font-medium"
              >
                CapturePilot bid checklist
              </Link>{" "}
              includes insurance documentation as one of its pre-submission verification items.
              Use it every time before you submit a proposal — the compliance sections alone prevent
              the most common technical deficiencies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For a broader look at what compliance looks like across the full proposal process, see
              our guide on{" "}
              <Link
                href="/blog/government-proposal-compliance-matrix"
                className="text-blue-700 underline font-medium"
              >
                building a compliance matrix
              </Link>{" "}
              — the structure that makes sure every solicitation requirement gets addressed before
              you submit.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The bottom line on government contractor insurance: get it in place before you start
              bidding, keep it current throughout your contract, and read every solicitation&apos;s
              insurance section before you commit to a pursuit. The coverage is not expensive
              relative to the revenue it protects. The cost of a gap — a non-responsive proposal,
              a work stop, or a default termination — is.
            </p>
          </div>

          {/* Final CTA */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white animate-on-scroll">
            <div className="text-center">
              <h3 className="text-2xl font-black mb-3">Ready to pursue your first federal contract?</h3>
              <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
                CapturePilot matches your business profile — including certifications, NAICS codes,
                and size standard — to real federal opportunities, flags compliance requirements in
                each solicitation, and helps you build proposals that pass the compliance matrix.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SIGNUP_URL}
                  className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="flex items-center justify-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
