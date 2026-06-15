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
  Target,
  TrendingUp,
  BarChart3,
  Clock,
  DollarSign,
  Search,
  Shield,
  FileText,
  XCircle,
  AlertCircle,
  Layers,
  ClipboardCheck,
  Calculator,
  Users,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-dcaa-is", label: "What DCAA Is and Who Gets Audited" },
  { id: "four-audit-types", label: "The Four Types of DCAA Audits" },
  { id: "sf1408-pre-award", label: "The SF 1408 Pre-Award Audit" },
  { id: "incurred-cost-submission", label: "Incurred Cost Submissions" },
  { id: "2025-rule-changes", label: "2025 Rule Changes That Affect You" },
  { id: "common-findings", label: "The Most Common Deficiencies" },
  { id: "accounting-system", label: "Building a DCAA-Ready Accounting System" },
  { id: "software-options", label: "Software That Passes the Test" },
  { id: "pre-audit-checklist", label: "Your Pre-Audit Action Checklist" },
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

export default function DcaaAuditSmallBusinessPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-amber-50 to-white">
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
            <span className="text-stone-900 font-medium">DCAA Audit Small Business</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            DCAA Audit Preparation:{" "}
            <span className="gradient-text">What Small Business Contractors Must Know</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The Defense Contract Audit Agency reviewed <strong className="text-stone-700">$599.8 billion</strong> in
            contract costs in fiscal year 2024 and found $15.9 billion in exceptions. Most of those weren't large
            defense primes gaming the system — they were contractors who didn't know what "adequate accounting" actually
            required. Here's how to avoid being one of them.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 15, 2026</span>
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
                  <span className="text-xs font-bold text-blue-500 w-5 shrink-0">
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
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-dcaa-is" number="01" title="What DCAA Is and Who Gets Audited" />

            <p className="text-stone-700 leading-relaxed">
              The Defense Contract Audit Agency (DCAA) is the federal government's primary watchdog for contractor
              accounting. It operates under the Department of Defense but also supports other agencies like NASA,
              DHS, and the Department of Energy when requested. Its core job: verify that costs charged to the
              government are allowable, allocable, and reasonable under FAR Part 31 — the federal cost principles
              that govern what the government will actually pay for.
            </p>

            <p className="text-stone-700 leading-relaxed">
              If you only pursue firm-fixed-price contracts, DCAA rarely touches you. The agency's primary mandate
              covers cost-reimbursable contracts, time-and-materials (T&M) contracts, and labor-hour contracts —
              anywhere the final cost to the government isn't locked in up front. The government takes on more risk
              under these contract types, so it requires more visibility into how you spend its money.
            </p>

            <p className="text-stone-700 leading-relaxed">
              That said, DCAA can and does audit contractors pursuing cost-type work even before a contract is
              awarded. A pre-award accounting system audit is a standard part of the procurement process for
              many cost-reimbursable contracts above the simplified acquisition threshold. If your system
              doesn't pass, the contracting officer may not award you the contract — full stop.
            </p>

            <Callout icon={BarChart3} color="blue" title="DCAA FY2024 by the numbers">
              <p>
                In fiscal year 2024, DCAA examined <strong>$599.8 billion</strong> in contract costs, identified{" "}
                <strong>$15.9 billion</strong> in audit exceptions, and achieved <strong>$5.1 billion</strong> in
                net savings for the government — a return of <strong>$7.20 for every dollar</strong> the agency
                spent on audits. DCAA issued 2,465 audit reports and supported 421 fraud cases that recovered{" "}
                <strong>$227.3 million</strong>. The forward pricing audit alone generated an $11.70:$1 ROI.
                These numbers explain why the government invests heavily in this audit function.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Small businesses often assume DCAA only chases the large defense primes. That's wrong. DCAA
              has specific audit programs targeting smaller contractors, particularly those receiving SBIR/STTR
              awards, cost-type contracts under DARPA, NIH, or DoD programs, and contractors moving from
              fixed-price to cost-reimbursable work. If you're growing your federal footprint and adding
              cost-type contracts, DCAA is coming eventually. Prepare now, not after the notification letter arrives.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="four-audit-types" number="02" title="The Four Types of DCAA Audits" />

            <p className="text-stone-700 leading-relaxed">
              DCAA doesn't run one kind of audit. There are four distinct types, each triggered at a different
              point in the contract lifecycle. Knowing which one applies to your situation tells you exactly
              what to prepare for.
            </p>

            <div className="my-8 space-y-4">
              {/* Audit type 1 */}
              <div className="border border-stone-200 rounded-xl p-5 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Search className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Pre-Award Accounting System Audit (SF 1408)</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Triggered before a cost-reimbursable or T&M contract is awarded. DCAA evaluates whether your
                      accounting system is designed to track government contract costs in compliance with FAR Part 31
                      and DFARS 252.242-7006. This is a pass/fail review — the contracting officer uses the result
                      to determine if you're eligible for the award at all.
                    </p>
                  </div>
                </div>
              </div>

              {/* Audit type 2 */}
              <div className="border border-stone-200 rounded-xl p-5 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Incurred Cost Audit</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Happens after the fiscal year ends. If you have cost-reimbursable contracts, you must submit
                      an Incurred Cost Submission (ICS) within six months of your fiscal year-end under FAR 52.216-7.
                      DCAA then audits this submission to reconcile your provisional billing rates against your actual
                      costs and determine final rates. The incurred cost audit ROI for the government is $3.50:$1.
                    </p>
                  </div>
                </div>
              </div>

              {/* Audit type 3 */}
              <div className="border border-stone-200 rounded-xl p-5 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Forward Pricing Audit</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Performed before a contract is awarded or modified when the proposed cost exceeds certain
                      thresholds. DCAA evaluates whether your cost estimates for future work are current, accurate,
                      and complete. Direct labor rates, overhead rates, fringe benefits — all of it gets scrutinized.
                      The government uses this audit to negotiate a fair price. Its ROI is the highest of any audit
                      type: <strong>$11.70 for every dollar spent</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Audit type 4 */}
              <div className="border border-stone-200 rounded-xl p-5 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Labor Floor Check (Real-Time Labor Audit)</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      DCAA auditors show up — sometimes unannounced — and interview employees about their time
                      charges. They're verifying that the hours billed to government contracts match what employees
                      actually worked. Previously called MAARS 6 audits, these floor checks can happen at any time
                      during contract performance. A poor result can put your entire contract portfolio at risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              You won't necessarily face all four. Your exposure depends on which contract types you hold and
              how much risk the government is taking on. But the accounting system requirements that support
              you through all of them are essentially the same — so building the right foundation once covers
              you across the board.
            </p>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="sf1408-pre-award" number="03" title="The SF 1408 Pre-Award Audit" />

            <p className="text-stone-700 leading-relaxed">
              Standard Form 1408 is the checklist DCAA uses to evaluate your accounting system before you're
              awarded a cost-type contract. It's not a financial audit in the traditional sense — auditors
              aren't reconciling your books. They're determining whether your <em>system design</em> is capable
              of producing the data the government needs to oversee the contract.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Three regulatory sources define what "adequate" means: <strong>DFARS 252.242-7006</strong> (which
              lists 18 specific criteria for DoD contracts), <strong>SF 1408 itself</strong> (the pre-award design
              checklist), and <strong>FAR Part 31</strong> (the cost principles governing what costs are allowable,
              allocable, and reasonable). You need to satisfy all three frameworks simultaneously.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The SF 1408 evaluates six broad areas:
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">SF 1408 Area</th>
                    <th className="text-left p-3 rounded-tr-lg font-semibold">What Auditors Are Checking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-800">Cost segregation</td>
                    <td className="p-3 text-stone-600">Direct vs. indirect costs clearly separated; no commingling</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <td className="p-3 font-medium text-stone-800">Job cost accumulation</td>
                    <td className="p-3 text-stone-600">Costs tracked by individual contract, project, or task order</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-800">Indirect rate identification</td>
                    <td className="p-3 text-stone-600">Overhead, G&A, and fringe benefit pools clearly defined and consistently applied</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <td className="p-3 font-medium text-stone-800">Accounting basis</td>
                    <td className="p-3 text-stone-600">Accrual-based accounting (cash basis fails this requirement)</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-800">Labor distribution</td>
                    <td className="p-3 text-stone-600">Daily timesheets with supervisor review and employee certification</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 font-medium text-stone-800 rounded-bl-lg">Audit trail</td>
                    <td className="p-3 text-stone-600 rounded-br-lg">Complete, traceable documentation from source to ledger</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="The 'DCAA approved' myth">
              <p>
                DCAA does not "approve" accounting systems. What DCAA does is issue an audit opinion — adequate
                or inadequate — to the contracting officer. The contracting officer then decides whether to
                award. If your system is found inadequate, you can fix the deficiencies and request a follow-up
                review. But a negative opinion can delay or kill an award while your competition waits. Don't
                confuse a vendor claiming "DCAA approved" software with your system actually being audit-ready.
                The software is a tool. Your documented processes, written policies, and consistent execution
                are what DCAA actually evaluates.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              One critical point about cash-basis accounting: if you're currently tracking income and expenses
              on a cash basis (when money actually moves), you must convert to accrual before you can pass SF 1408.
              Accrual accounting records revenue when earned and expenses when incurred — not when cash changes hands.
              This is a non-negotiable DCAA requirement and frequently surprises small businesses that have used
              cash-basis bookkeeping since day one.
            </p>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="incurred-cost-submission" number="04" title="Incurred Cost Submissions" />

            <p className="text-stone-700 leading-relaxed">
              If you hold a cost-reimbursable contract with the FAR clause 52.216-7 (Allowable Cost and Payment),
              you're required to file an Incurred Cost Submission (ICS) each year — within six months of your
              fiscal year end. Miss that deadline and you're technically in contract noncompliance, which can
              trigger a demand for reimbursement of all provisional payments until final rates are established.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The ICS reconciles the provisional billing rates you used during the year (what you billed the
              government month-to-month) against your actual costs. If your actual overhead rate was lower
              than what you provisionally billed, you owe the government a refund. If it was higher, the
              government owes you more. The ICS is how that settlement happens.
            </p>

            <p className="text-stone-700 leading-relaxed">
              DCAA uses the ICS adequacy checklist to determine if your submission is complete enough to audit.
              An inadequate submission gets kicked back — and the clock doesn't restart. You've still burned
              time while your submission sat in a queue. The checklist requires schedules covering direct costs
              by contract, indirect cost pools and bases, fringe benefit costs, subcontract costs, and a
              reconciliation of total costs to your general ledger. It's not simple, but it's predictable.
              Run the checklist before you submit.
            </p>

            <Callout icon={DollarSign} color="emerald" title="Voluntary deletions: a smart move">
              <p>
                In FY2024, contractors submitted voluntary deletions totaling <strong>$4.2 billion</strong> across
                1,229 incurred cost submissions — costs that contractors themselves identified as unallowable and
                removed before DCAA had to flag them. This matters for two reasons. First, DCAA views voluntary
                deletions favorably — they signal an adequate internal control environment. Second, if DCAA finds
                unallowable costs you missed, you're subject to penalties of up to 100% of the disallowed amount
                under FAR 42.709. Proactively removing unallowable costs protects both your relationship with
                the agency and your wallet.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">Not sure if you're DCAA-ready?</h3>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                    CapturePilot's Quick Checker reviews your certifications, contract history, and compliance
                    readiness in minutes. Know where you stand before a contracting officer asks.
                  </p>
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    Check your eligibility free <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="2025-rule-changes" number="05" title="2025 Rule Changes That Affect You" />

            <p className="text-stone-700 leading-relaxed">
              Two significant changes took effect in 2025 that every government contractor with cost-type
              work needs to understand.
            </p>

            <p className="text-stone-700 leading-relaxed">
              <strong>The material weakness change.</strong> On January 17, 2025, a final rule amending DFARS
              took effect, implementing Section 806 of the National Defense Authorization Act for FY2021. The
              rule formally replaced the term "significant deficiency" with "material weakness" in contractor
              business system audits. This isn't just a terminology tweak. A material weakness is defined as a
              deficiency, or combination of deficiencies, that represents a substantial probability that a
              material misstatement of contract costs won't be prevented or detected on a timely basis.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The practical effect: DCAA issued a memorandum on May 13, 2025 providing revised audit guidance
              aligned with this new standard. Auditors are now moving detailed procedures into risk assessment
              sections, signaling a more deliberate risk-based approach. High-risk areas get more scrutiny;
              lower-risk areas may get less. For small businesses with adequate systems, this can mean faster
              audits. For businesses with gaps, the focus is now sharper.
            </p>

            <p className="text-stone-700 leading-relaxed">
              <strong>The staffing reality.</strong> DCAA headcount has been declining despite investments in
              audit automation and AI tools. The practical consequence: incurred cost audit backlogs persist,
              which can mean your ICS sits unaudited for years. That may sound like a relief, but it creates
              a different risk — open years with unsettled indirect rates create accounting uncertainty that
              can complicate future proposals, line of credit applications, and M&A due diligence. Getting
              audited and having rates finalized is actually in your interest.
            </p>

            <Callout icon={Lightbulb} color="sky" title="Risk-based auditing: what it means for you">
              <p>
                DCAA's shift to risk-based auditing means your audit experience depends heavily on your
                compliance history. Contractors with documented deficiencies, late ICS submissions, or
                previous adverse findings will attract more scrutiny. Contractors with clean records, timely
                submissions, and strong internal controls may find audits faster and less invasive. The
                investment in building a solid compliance program pays forward — each clean audit makes the
                next one easier.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-findings" number="06" title="The Most Common Deficiencies" />

            <p className="text-stone-700 leading-relaxed">
              DCAA deficiencies cluster around a handful of recurring problems. Knowing the pattern lets you
              fix these before an auditor finds them.
            </p>

            <div className="my-8 space-y-5">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Timekeeping violations</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Timekeeping irregularities have led to more DCAA criminal investigations than any other
                    accounting system anomaly. The issues are almost always the same: employees completing
                    timesheets days or weeks after the fact rather than daily, supervisors making unauthorized
                    corrections to subordinates' timesheets, employees not recording uncompensated overtime,
                    and no written timekeeping policy. DCAA wants daily completion, employee certification,
                    and a documented correction process with supervisor authorization and reason codes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Inadequate direct/indirect cost segregation</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Many small businesses — especially those that started with commercial work — don't maintain
                    a clear separation between costs that are direct to a specific contract and costs that
                    benefit multiple contracts (indirect). When these get lumped together, your billing is
                    inaccurate, your indirect rates are wrong, and you're in violation of FAR Part 31. The fix
                    requires a chart of accounts redesigned around the direct/indirect distinction, not
                    commercial cost categories.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Unallowable costs buried in overhead</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    FAR Part 31 lists specific costs the government will not reimburse: entertainment, certain
                    marketing costs, fines and penalties, alcohol, lobbying expenses, and more. When these costs
                    flow through overhead pools without being identified and excluded, they get billed to
                    government contracts — and that's a material finding. The solution is a consistent process
                    for flagging and segregating unallowable costs before they enter your indirect pools.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">No written policies and procedures</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    DCAA doesn't just evaluate what you do — it evaluates whether you can prove what you
                    do consistently. If your timekeeping practices, cost classification rules, and indirect
                    rate calculation methods only exist in someone's head, the audit will find them
                    inadequate. You need written procedures for every key compliance area, and those
                    procedures need to match your actual practice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Cash-basis accounting</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Using cash-basis accounting is an automatic failure on SF 1408. Accrual accounting is
                    required. Small businesses that started on QuickBooks with cash-basis settings and never
                    converted often discover this problem only when they're deep into the proposal process
                    for their first cost-type contract.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="accounting-system" number="07" title="Building a DCAA-Ready Accounting System" />

            <p className="text-stone-700 leading-relaxed">
              A DCAA-compliant accounting system isn't a single piece of software — it's a combination of
              the right software, a properly structured chart of accounts, documented policies, and consistent
              employee behavior. Here's what you need to build.
            </p>

            <div className="my-8 grid gap-4">
              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-blue-700">01</span>
                  </div>
                  <h3 className="font-bold text-stone-900">Restructure your chart of accounts</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Create distinct account codes for each direct cost category (labor, materials, subcontracts,
                  ODCs) and each indirect cost pool (fringe, overhead, G&A). Every transaction should code
                  to one and only one account. The government needs to be able to trace any cost from your
                  invoice back through your records to a source document — receipt, timesheet, subcontract
                  invoice — without ambiguity.
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-emerald-700">02</span>
                  </div>
                  <h3 className="font-bold text-stone-900">Implement a job costing structure</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Every contract — and every contract line item number (CLIN) if required — needs its own
                  job code. Costs accumulate at the job level. This lets you produce contract-level cost
                  reports that reconcile directly to what you've billed the government. If your accounting
                  system can't produce a cost report by contract showing direct labor, materials, and applied
                  indirect costs, it's not ready.
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-amber-700">03</span>
                  </div>
                  <h3 className="font-bold text-stone-900">Establish and document indirect rate pools</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Define your indirect cost pools (fringe benefits, overhead, G&A), what costs belong in
                  each, and the allocation base for each pool. Apply these pools consistently. Your written
                  indirect rate plan should describe the pools, bases, and calculation methodology — and
                  it should match exactly what your accounting system is actually doing. Inconsistency
                  between your documented methodology and your actual practice is a DCAA finding.
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-violet-700">04</span>
                  </div>
                  <h3 className="font-bold text-stone-900">Build a daily timekeeping process</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Every employee who charges time to government contracts must complete a timesheet daily —
                  not weekly, not at month-end. Each timesheet must be certified by the employee, reviewed
                  and approved by a supervisor, and any corrections must be made using an authorized process
                  with a reason code, not by overwriting the original entry. This is the single highest-risk
                  area in any DCAA audit. Build the process before you have your first cost-type contract.
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-sky-700">05</span>
                  </div>
                  <h3 className="font-bold text-stone-900">Identify and exclude unallowable costs</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Create a written policy listing FAR Part 31 unallowable costs. Train the people who code
                  transactions. Set up specific general ledger accounts for unallowable costs so they can
                  never be swept into indirect pools. Review these accounts regularly. When you submit your
                  ICS, proactively exclude these costs as voluntary deletions — it signals compliance and
                  avoids penalties.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="software-options" number="08" title="Software That Passes the Test" />

            <p className="text-stone-700 leading-relaxed">
              No software is inherently "DCAA compliant." DCAA audits your practices, not your software.
              But some accounting platforms are built with government contracting requirements in mind,
              making compliance significantly easier to maintain. Here's how the major options stack up
              for small businesses:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">Software</th>
                    <th className="text-left p-3 font-semibold">Best For</th>
                    <th className="text-left p-3 rounded-tr-lg font-semibold">Key Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-800">Deltek Costpoint</td>
                    <td className="p-3 text-stone-600">Mid-to-large contractors ($10M+ revenue)</td>
                    <td className="p-3 text-stone-600">Full-featured, high cost, significant implementation effort</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <td className="p-3 font-medium text-stone-800">Unanet GovCon</td>
                    <td className="p-3 text-stone-600">Growing small businesses ($1M–$20M)</td>
                    <td className="p-3 text-stone-600">Cloud-based, good balance of features vs. complexity</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 font-medium text-stone-800">WrkPlan</td>
                    <td className="p-3 text-stone-600">Early-stage small contractors</td>
                    <td className="p-3 text-stone-600">Purpose-built for small GovCon, lower cost entry point</td>
                  </tr>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <td className="p-3 font-medium text-stone-800">eFAACT</td>
                    <td className="p-3 text-stone-600">QuickBooks users who need a bridge solution</td>
                    <td className="p-3 text-stone-600">Integrates with QuickBooks, adds GovCon-specific reporting</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 font-medium text-stone-800 rounded-bl-lg">QuickBooks (alone)</td>
                    <td className="p-3 text-stone-600">Not suitable as a standalone solution</td>
                    <td className="p-3 text-stone-600 rounded-br-lg">Meets some SF 1408 criteria but requires significant add-ons and policy infrastructure to pass</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              QuickBooks is the most common accounting system for small businesses, but it doesn't pass an
              SF 1408 pre-award audit on its own. It lacks job cost accumulation by contract line item,
              doesn't enforce daily timekeeping, and doesn't natively identify unallowable costs. You can
              make QuickBooks work with the right add-ons, documented policies, and a GovCon-savvy accountant
              — but it requires meaningful setup and ongoing discipline. If you're planning to pursue cost-type
              contracts with any regularity, a purpose-built platform is a better long-term investment.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The software conversation is also a distraction from what actually matters: your people and your
              processes. DCAA auditors interview employees. They ask whether your timekeeping policy is
              followed in practice. They look for evidence that your written procedures match your actual
              behavior. No software vendor can give you that. Training, enforcement, and culture do.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">Track your compliance readiness alongside your pipeline</h3>
                  <p className="text-stone-300 text-sm mb-4 leading-relaxed">
                    CapturePilot's pipeline and intelligence tools help you track which opportunities require
                    DCAA-compliant accounting, so you know exactly which contracts will trigger an audit —
                    before you submit a proposal.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={SIGNUP_URL}
                      className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-stone-100 transition-colors"
                    >
                      Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 bg-white/10 text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors"
                    >
                      Book a strategy call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pre-audit-checklist" number="09" title="Your Pre-Audit Action Checklist" />

            <p className="text-stone-700 leading-relaxed">
              Whether you're preparing for a pre-award SF 1408 review or getting ready to submit an incurred
              cost proposal, this checklist covers the essentials. Work through it before any DCAA contact,
              not during.
            </p>

            <div className="my-8 space-y-3">
              {[
                {
                  label: "Accounting basis",
                  detail: "Confirm you're on accrual-based accounting. If on cash basis, initiate conversion before any cost-type proposal.",
                },
                {
                  label: "Chart of accounts",
                  detail: "Verify direct and indirect cost accounts are clearly separated. No mixed accounts that serve both purposes.",
                },
                {
                  label: "Job cost structure",
                  detail: "Every contract has its own job code. Cost accumulation is tracked by contract, not just by cost category.",
                },
                {
                  label: "Indirect rate pools",
                  detail: "Document fringe, overhead, and G&A pools. Confirm the pools, bases, and methodology are in writing and match the system.",
                },
                {
                  label: "Unallowable cost accounts",
                  detail: "Review FAR Part 31.205 for the unallowable cost list. Confirm you have accounts for these costs and they're excluded from indirect pools.",
                },
                {
                  label: "Timekeeping policy",
                  detail: "Written policy exists requiring daily timesheet completion. Correction procedures are documented. Employees have been trained.",
                },
                {
                  label: "Timekeeping practice",
                  detail: "Verify employees actually complete timesheets daily. Pull a sample from the last 30 days and confirm dates of completion.",
                },
                {
                  label: "Written procedures manual",
                  detail: "You have documented procedures for labor charging, cost classification, billing, and indirect rate calculation.",
                },
                {
                  label: "ICS readiness (if applicable)",
                  detail: "If you hold cost-type contracts, know your ICS due date. Build the required schedules from your accounting system before the deadline.",
                },
                {
                  label: "Voluntary deletion review",
                  detail: "Before submitting an ICS, run a review of indirect pool costs for unallowable items. Remove them as voluntary deletions.",
                },
                {
                  label: "Employee awareness",
                  detail: "Employees who charge time to government contracts understand why daily timekeeping is required and what happens in a floor check.",
                },
                {
                  label: "Outside advisor review",
                  detail: "A GovCon CPA or compliance consultant has reviewed your system in the last 12 months. Fresh eyes catch what internal reviews miss.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{item.label}</p>
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              A professional mock audit — where a GovCon accountant or consultant walks through your system
              the same way a DCAA auditor would — is worth doing at least once before your first real DCAA
              engagement. It will surface gaps that look invisible from inside and cost far less than a
              failed pre-award review or a material weakness finding on a live contract.
            </p>
          </div>

          {/* Related reading */}
          <div className="animate-on-scroll mt-16">
            <div className="border-t border-stone-200 pt-12">
              <h2 className="text-xl font-black text-stone-900 mb-6">Related Reading</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog/federal-contract-types-explained",
                    title: "FFP, T&M, IDIQ: What These Contract Types Mean for You",
                    desc: "Understanding which contract types trigger DCAA requirements and how to think about the tradeoffs.",
                  },
                  {
                    href: "/blog/government-contract-pricing-strategies",
                    title: "Government Contract Pricing: Strategies to Win Without Losing Money",
                    desc: "How indirect rates, cost pools, and overhead affect your pricing — and why DCAA compliance makes pricing more accurate.",
                  },
                  {
                    href: "/blog/past-performance-government-contracts",
                    title: "Past Performance in Government Contracts",
                    desc: "How to build a track record that supports future proposal submissions, including cost-type work.",
                  },
                  {
                    href: "/blog/capture-management-process",
                    title: "The Capture Management Process",
                    desc: "How to qualify opportunities earlier — including knowing which ones require DCAA-ready accounting before you bid.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all"
                  >
                    <FileText className="w-5 h-5 text-stone-400 group-hover:text-blue-600 shrink-0 mt-0.5 transition-colors" />
                    <div>
                      <p className="font-semibold text-sm text-stone-800 group-hover:text-blue-700 transition-colors mb-1">
                        {link.title}
                      </p>
                      <p className="text-xs text-stone-500 leading-relaxed">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll mt-12">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 mb-4">
                  <Zap className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-stone-900 mb-3">
                  Know what's coming before DCAA does
                </h3>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  CapturePilot helps you track the opportunities in your pipeline — including which contract
                  types will trigger DCAA requirements, which certifications keep you in the running, and
                  what your compliance posture looks like against the contracts you're pursuing.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
                  >
                    Check your eligibility free <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/features/intelligence"
                    className="inline-flex items-center gap-2 bg-white border border-stone-300 text-stone-700 font-bold text-sm px-6 py-3 rounded-full hover:border-stone-400 transition-colors"
                  >
                    See the Intelligence features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
