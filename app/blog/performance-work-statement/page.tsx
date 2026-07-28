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
  FileText,
  Shield,
  XCircle,
  Award,
  BarChart2,
  ClipboardList,
  Zap,
  AlertCircle,
  CheckSquare,
  Layers,
  Search,
  TrendingUp,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-pws", label: "What Is a Performance Work Statement — and Why It Exists" },
  { id: "pws-sow-soo", label: "PWS vs. SOW vs. SOO: The Three Documents You'll Encounter" },
  { id: "seven-elements", label: "The Seven Core Elements of Every PWS" },
  { id: "qasp", label: "The QASP: How the Government Will Watch You Work" },
  { id: "reading-pws", label: "How to Read a PWS Before You Write Your Proposal" },
  { id: "quality-control-plan", label: "Writing Your Quality Control Plan to Match the PWS" },
  { id: "performance-pricing", label: "Performance-Based Pricing: Incentives and Deductions" },
  { id: "common-mistakes", label: "Common PWS Mistakes That Cost Contractors Points" },
  { id: "pre-rfp-intelligence", label: "Getting Ahead of the PWS Before the RFP Drops" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet" | "orange";
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
    orange: "bg-orange-50 border-orange-200 text-orange-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
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

export default function PerformanceWorkStatementPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-violet-50 to-white">
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
            <span className="text-stone-900 font-medium">Performance Work Statement</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Performance Work Statement:{" "}
            <span className="gradient-text">
              A Contractor&apos;s Guide to Understanding and Responding
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            A PWS tells you what the government wants achieved — not how to do it. That shift from
            activities to outcomes is the whole game. Most contractors read a PWS and write a
            proposal about what they will do. Winning contractors read the same document and write
            about what will get done. Here&apos;s the difference in practice.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 28, 2026</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-24" ref={articleRef}>
        {/* Table of Contents */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-10 animate-on-scroll">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-stone-500" />
            <h2 className="font-bold text-stone-700 text-sm uppercase tracking-wider">
              In This Article
            </h2>
          </div>
          <ol className="space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-3 text-sm text-stone-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="text-xs font-bold text-stone-400 group-hover:text-blue-400 mt-0.5 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="what-is-pws"
            number="01"
            title="What Is a Performance Work Statement — and Why It Exists"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The Federal Acquisition Regulation defines a Performance Work Statement at FAR 2.101
            as &quot;a statement of work for performance-based acquisitions that describes the required
            results in clear, specific and objective terms with measurable outcomes.&quot; Read that
            again slowly. Required <em>results</em>. Measurable <em>outcomes</em>. Not methods.
            Not procedures. Not hours logged.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The federal government moved toward performance-based service acquisition (PBSA) for
            a simple reason: prescriptive contracts were generating bad results at high cost.
            When an agency told a facilities contractor exactly how many times per week to clean
            a building, they got compliance with the cleaning schedule — not necessarily a clean
            building. When they shifted to a PWS that required the building to meet cleanliness
            standards measured through periodic inspections, contractors had to actually deliver
            the outcome. A 1998 OFPP study found performance-based contracts produced roughly{" "}
            <strong>15% cost savings</strong> and nearly <strong>20% higher customer satisfaction</strong>{" "}
            compared to traditional requirements-based approaches.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            FAR Subpart 37.6 and FAR 37.602 lay out the operational framework. The Office
            of Federal Procurement Policy has pushed performance-based methods for service contracts
            since OFPP Policy Letter 91-2 in 1991. Today, performance-based acquisition is the
            <em> preferred method</em> for service contracts — not just encouraged but the required
            default that agencies must justify deviating from. A 2026 White House Executive Order
            directed agencies to accelerate the shift toward outcome-based contracting, citing
            continued evidence of savings and improved operational performance.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            For you as a contractor, this shift matters. A PWS gives you latitude the old SOW
            never did. You decide <em>how</em> to achieve the performance standards. That&apos;s an
            opportunity to bring efficiency, innovation, and your specific strengths to the work —
            if you know how to read the document and respond to it properly.
          </p>

          <Callout icon={Target} color="blue" title="PWS in Plain Terms">
            <p>
              A Performance Work Statement describes what the government needs accomplished and
              how success will be measured. Your proposal must demonstrate that you understand
              those outcomes, that you have a credible plan to achieve them, and that you can
              sustain that performance under surveillance. The <em>how</em> is your competitive
              advantage — own it.
            </p>
          </Callout>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="pws-sow-soo"
            number="02"
            title="PWS vs. SOW vs. SOO: The Three Documents You'll Encounter"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            RFPs come with one of three work description formats, and which one you&apos;re reading
            changes your entire proposal approach. Confusing them is a common and costly mistake.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Statement of Work (SOW)</strong> — the traditional format. Prescriptive.
            The government tells you exactly how to do the job: specific tasks, procedures,
            staffing levels, frequencies, tools. Your proposal responds to each task. You don&apos;t
            get to innovate — you get to prove you can follow directions. SOWs still appear on
            research and development contracts, highly regulated requirements, and situations
            where the government wants procedural control.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Performance Work Statement (PWS)</strong> — outcome-based. The government
            defines what must be achieved and the standards against which it will be measured.
            You decide the approach. Your proposal wins by demonstrating a credible, efficient
            method to hit those standards. Most service contracts today use PWS format.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Statement of Objectives (SOO)</strong> — the highest-level format.
            The government defines broad objectives without specifying performance standards.
            You draft the PWS as part of your proposal. This approach is used when the agency
            wants contractor innovation to define not just the solution but the measurement
            framework. Responding to an SOO is the most complex and the biggest competitive
            opportunity — your proposed performance standards can differentiate you significantly.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Dimension</th>
                  <th className="text-left px-4 py-3 font-semibold">SOW</th>
                  <th className="text-left px-4 py-3 font-semibold">PWS</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">SOO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Government specifies", "How to do the work", "What outcomes to achieve", "High-level objectives only"],
                  ["Contractor specifies", "Nothing — follow the script", "The approach to achieving outcomes", "The PWS and the approach"],
                  ["Performance standards", "Compliance with procedures", "Measurable outcome thresholds", "Contractor proposes the standards"],
                  ["Innovation opportunity", "Very low", "Moderate", "High"],
                  ["Proposal complexity", "Moderate", "Moderate–High", "High"],
                  ["Common use cases", "R&D, regulated processes", "Most service contracts", "Complex, innovation-driven work"],
                  ["QASP written by", "Government", "Government", "Contractor (proposed)"],
                ].map(([dim, sow, pws, soo], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">{dim}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{sow}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100 font-medium text-violet-700">{pws}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{soo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-6">
            When an RFP contains an SOO, read it alongside the instructions in Section L carefully.
            You&apos;ll typically be required to include a contractor-proposed PWS as a separate
            attachment to your technical proposal. That document becomes part of your contract
            if you win — every standard you propose, you&apos;ll be held to.
          </p>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="seven-elements"
            number="03"
            title="The Seven Core Elements of Every PWS"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            FAR 37.601 defines five characteristics a contract must have to qualify as
            performance-based. It must: describe requirements as results rather than methods;
            include measurable performance standards; include a QASP; include procedures for
            price reductions when performance falls short; and include performance incentives
            where appropriate. Every element of the PWS exists to satisfy one or more of these
            five criteria.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Not every PWS is formatted identically, but every well-written one contains the same
            substantive elements. Learning to find these regardless of document structure is how
            you read quickly and respond accurately.
          </p>

          <div className="space-y-5 my-8 animate-on-scroll">
            {[
              {
                num: "01",
                title: "Scope and Background",
                body: "Establishes what the contract covers and the context behind the requirement. Read this to understand the mission. Why does this work exist? What problem does it solve? A proposal that demonstrates mission understanding before getting to tasks wins points from evaluators who know the program.",
              },
              {
                num: "02",
                title: "Performance Objectives and Tasks",
                body: "Describes the specific work functions and outcomes required. Unlike an SOW task list, PWS tasks are defined by what must result, not by what the contractor must do. Each task will link to a performance standard.",
              },
              {
                num: "03",
                title: "Performance Standards",
                body: "The measurable thresholds that define success. These are the most important lines in the entire document. They might be expressed as response time requirements (\"all priority 1 tickets resolved within 4 hours\"), accuracy rates (\"99.5% invoice accuracy\"), or availability targets (\"system uptime 99.9% monthly\"). Your entire technical approach must be built around hitting these.",
              },
              {
                num: "04",
                title: "Acceptable Quality Levels (AQLs)",
                body: "The AQL is the maximum allowable variance from a performance standard before the government will reject a service — expressed as a number, a percentage, or a quantity per units inspected. A performance standard might require 98% on-time delivery; the AQL might be 95%. Below 95%, the government can apply deductions, issue cure notices, or take other remedies. AQLs appear in the PWS Performance Requirements Summary (PRS) or the attached QASP.",
              },
              {
                num: "05",
                title: "Inspection and Acceptance Criteria",
                body: "Describes how and when the government will measure whether you met the standards. Random sampling, 100% inspection, periodic reporting, third-party audits — the method matters. If the agency will randomly sample 10% of deliverables, your quality process needs to ensure every deliverable is compliant, not just the ones you think will be checked.",
              },
              {
                num: "06",
                title: "Government-Furnished Property and Information",
                body: "Lists what the government will provide — facilities, equipment, data, access, clearances. Critical for pricing. If the government is furnishing office space, you don't price it in. If they're not furnishing equipment you assumed they would, your cost estimate is wrong.",
              },
              {
                num: "07",
                title: "Special Requirements",
                body: "Security clearances, certifications, licenses, compliance frameworks, key personnel requirements. These are often pass/fail in evaluation. Missing a mandatory special requirement eliminates your proposal regardless of how strong everything else is.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100 hover-lift"
              >
                <div className="text-2xl font-black text-stone-200 flex-shrink-0 w-10">{num}</div>
                <div>
                  <div className="font-bold text-stone-800 mb-1">{title}</div>
                  <div className="text-stone-600 text-sm leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={AlertTriangle} color="amber" title="The AQL Is Your Real Target, Not the Performance Standard">
            <p>
              Contractors often write proposals promising to hit the performance standard exactly.
              That&apos;s backwards. The performance standard is the ideal. The AQL is the floor.
              Your Quality Control Plan should be designed to stay consistently above the AQL
              even when conditions aren&apos;t perfect — not to hit the standard on a good day.
              Evaluators who understand PBSA know the difference and will score your QCP accordingly.
            </p>
          </Callout>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl mb-2">Know the Performance Standards Before the RFP Drops</h3>
              <p className="text-violet-100 mb-4">
                CapturePilot&apos;s intelligence features surface prior contracts for the same requirement —
                including historical PWS language, performance standards, and surveillance methods.
                You can read the old PWS while the new one is still being drafted.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-5 py-2.5 rounded-lg hover:bg-violet-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/features/intelligence"
                  className="inline-flex items-center gap-2 bg-violet-500 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-violet-400 transition-colors text-sm"
                >
                  See intelligence features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="qasp"
            number="04"
            title="The QASP: How the Government Will Watch You Work"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The Quality Assurance Surveillance Plan is the government&apos;s monitoring playbook.
            FAR 37.604 requires agencies to develop a QASP for performance-based acquisitions.
            It specifies exactly how they&apos;ll verify whether you&apos;re hitting the performance
            standards in the PWS. You need to understand it as well as your own quality control plan.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            FAR 46.401 requires QASPs to be prepared in conjunction with the statement of work.
            FAR 37.601 lists a QASP as one of the five defining characteristics every performance-based
            contract must have. The QASP typically lives as an attachment to the PWS or is incorporated
            by reference in the solicitation. Sometimes it&apos;s provided in the RFP; sometimes it&apos;s
            developed post-award. When it&apos;s attached to the solicitation, read it before you
            write a single word of your proposal — it tells you exactly what the government is
            going to measure and how.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The QASP will specify:
          </p>

          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "Which performance standards are subject to surveillance",
              "The surveillance method for each standard (100% inspection, random sampling, periodic review, contractor self-reporting)",
              "How often surveillance will occur (daily, weekly, monthly, per deliverable)",
              "Who conducts surveillance (Contracting Officer Representative, third-party inspector)",
              "How deficiencies are documented and reported",
              "The consequence schedule — what happens when performance falls below the AQL",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-stone-700 leading-relaxed mb-4">
            The Contracting Officer Representative (COR) is typically the person who executes
            the QASP day-to-day. They&apos;re your primary working-level government contact on a
            PBSA contract. A healthy relationship with the COR is operationally important —
            they&apos;re the ones who document whether you&apos;re performing.
          </p>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-800 mb-4">QASP Surveillance Methods — What Each Means for You</h3>
            <div className="space-y-4">
              {[
                {
                  method: "100% Inspection",
                  risk: "High",
                  riskColor: "text-red-600 bg-red-50",
                  meaning: "Every deliverable or service instance is inspected. Your quality process must be right every time, not on average. Common on small-volume, high-stakes requirements.",
                },
                {
                  method: "Random Sampling",
                  risk: "Moderate",
                  riskColor: "text-amber-600 bg-amber-50",
                  meaning: "A statistically valid sample is inspected. You don't know which instances will be checked. The practical implication: treat every deliverable as if it will be inspected.",
                },
                {
                  method: "Periodic Review",
                  risk: "Moderate",
                  riskColor: "text-amber-600 bg-amber-50",
                  meaning: "The government reviews performance at set intervals — monthly, quarterly. Your reporting systems must accurately capture performance data between reviews.",
                },
                {
                  method: "Contractor Self-Report",
                  risk: "Lower",
                  riskColor: "text-emerald-600 bg-emerald-50",
                  meaning: "You report your own performance data and the government spot-checks. Common on larger, complex contracts. Requires robust internal metrics tracking. Under-reporting is a contract integrity issue.",
                },
                {
                  method: "Customer Feedback",
                  risk: "Variable",
                  riskColor: "text-blue-600 bg-blue-50",
                  meaning: "End users rate satisfaction directly. Proactive relationship management matters as much as technical execution. One unhappy stakeholder with access to the COR can affect your record.",
                },
              ].map(({ method, risk, riskColor, meaning }) => (
                <div key={method} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-36">
                    <div className="font-semibold text-stone-800 text-sm">{method}</div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${riskColor}`}>
                      {risk} exposure
                    </span>
                  </div>
                  <div className="text-stone-600 text-sm leading-relaxed">{meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="reading-pws"
            number="05"
            title="How to Read a PWS Before You Write Your Proposal"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Most contractors read a PWS like a task list. They go section by section, match
            their capabilities to the requirements, and start writing. That produces an adequate
            proposal. It rarely produces a winning one.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Read the PWS differently. Start with the performance standards and work backwards.
            Every standard is a question: what could go wrong that would cause us to miss this?
            What&apos;s our approach to making sure we hit this consistently? Which of our past
            performance examples demonstrates we can do this?
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Then read the QASP against the standards. The surveillance method tells you what the
            government is most worried about measuring. If they&apos;re doing 100% inspection on
            a particular deliverable, that&apos;s the one where quality failures have historically
            hurt them. Address it specifically in your technical approach.
          </p>

          <div className="bg-stone-900 text-white rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-lg mb-4 text-white">PWS Read-Through Protocol</h3>
            <div className="space-y-3">
              {[
                {
                  step: "Read the scope and background first — understand the mission",
                  detail: "What problem is the agency solving? What happens if the contractor fails? Context shapes every section that follows.",
                },
                {
                  step: "Extract every performance standard into a table",
                  detail: "Standard | Metric | AQL | Surveillance Method | Frequency. This becomes your proposal compliance matrix.",
                },
                {
                  step: "Flag all special requirements as pass/fail checkboxes",
                  detail: "Security clearances, certifications, key personnel qualifications. Confirm you can meet every one before proceeding.",
                },
                {
                  step: "Map GFP and GFI to your cost estimate",
                  detail: "Every item the government furnishes is one less thing you price. Missing GFP inflates your price unnecessarily.",
                },
                {
                  step: "Identify ambiguities — and submit questions",
                  detail: "Every PWS has unclear language. Submit questions during the Q&A period. The government's answers become part of the solicitation and level the playing field.",
                },
                {
                  step: "Cross-reference the QASP against every performance standard",
                  detail: "If a standard has no QASP entry, ask about it. Standards that aren't being measured are still in your contract.",
                },
              ].map(({ step, detail }) => (
                <div key={step} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">{step}</div>
                    <div className="text-stone-400 text-xs mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Your{" "}
            <Link
              href="/blog/government-proposal-compliance-matrix"
              className="text-blue-600 hover:underline font-medium"
            >
              compliance matrix
            </Link>{" "}
            for a PWS-based proposal is built around performance standards rather than
            task requirements. Every row maps a standard to your proposed approach, your
            measurement method, your fallback when performance dips, and your reference
            past performance example. That structure gives evaluators exactly what they
            need to rate your technical volume.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The Q&amp;A period is underused. Most small businesses skip it or ask surface-level
            questions. Ask about ambiguous performance standards — specifically, ask how the
            government interprets the standard and what measurement methodology they plan to use
            in the QASP. The answers shape your entire approach and you get them before your
            competitors do.
          </p>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="quality-control-plan"
            number="06"
            title="Writing Your Quality Control Plan to Match the PWS"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Every PWS-based contract requires you to submit a Quality Control Plan (QCP) with your
            proposal — or as a post-award deliverable within a defined number of days after award.
            When it&apos;s a proposal requirement, it&apos;s evaluated and scored. A weak QCP is
            a significant technical vulnerability.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The QCP and the QASP are mirror documents. The QASP describes how the government
            will verify your performance. The QCP describes how you will ensure your own
            performance meets the standards before the government checks. An evaluator reading
            both together should see that your internal controls cover the ground the government
            will surveil — and then some.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Your QCP needs to address each performance standard in the PWS. For each one, answer:
          </p>

          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "What internal metric do we track to monitor performance against this standard?",
              "How frequently do we measure it?",
              "Who is responsible for tracking and reporting it?",
              "What is our internal threshold for escalation (above the AQL, so we catch problems early)?",
              "What corrective action process kicks in when performance approaches the AQL?",
              "How do we document and report performance data to the COR?",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                <CheckSquare className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Callout icon={Shield} color="emerald" title="Set Your Internal Threshold Above the AQL">
            <p className="mb-2">
              If the AQL is 95% on-time delivery, set your internal escalation threshold at 97%.
              That two-point buffer gives you time to identify and fix problems before you fall
              below the government&apos;s acceptable level. Evaluators who understand PBSA look
              for this — it signals operational maturity, not just compliance.
            </p>
            <p>
              The best QCPs include trend monitoring: if on-time delivery is slipping from 99%
              to 98% to 97% over three reporting periods, that trend triggers intervention before
              the AQL is breached, not after.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            Designate a Quality Control Manager by name in your QCP if the PWS allows it.
            A named QCM with relevant credentials and experience adds credibility the
            government can verify. If the position is a key personnel slot, the QCM will
            be evaluated directly.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Past performance on similar contracts matters here too. If you can reference your
            QCP methodology from a current contract where you&apos;ve maintained a strong CPARS
            rating — include it. See our guide to{" "}
            <Link
              href="/blog/cpars-contractor-performance"
              className="text-blue-600 hover:underline font-medium"
            >
              how CPARS ratings are scored
            </Link>{" "}
            to understand what the government records about your quality performance on
            performance-based contracts.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-8 my-10 animate-on-scroll">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl text-emerald-900 mb-2">
                Start Your 30-Day Free Trial
              </h3>
              <p className="text-emerald-800 mb-4 text-sm">
                CapturePilot&apos;s proposal features help you build compliance matrices, track
                performance standards, and structure QCPs that evaluators score highly. See how
                it works for your team.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="performance-pricing"
            number="07"
            title="Performance-Based Pricing: Incentives and Deductions"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Performance-based contracts often include financial consequences tied to performance
            — either positive (award fees, incentive fees) or negative (deductions for falling
            below AQLs). How you price these into your cost model matters both for your margin
            and for how the government evaluates your price realism.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Award Fee contracts (CPAF)</strong> — A base fee plus an award fee pool
            the government distributes based on their subjective evaluation of your performance
            each award period. The RFP will specify what percentage of the total fee is at risk.
            If 30% of your fee is in the award pool, model your expected performance realistically
            and don&apos;t price assuming you&apos;ll earn 100% — most contracts average
            somewhere between 70% and 85% of the available pool.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Incentive Fee contracts (CPIF)</strong> — A more formulaic approach where
            fee adjusts based on objective performance targets. If you hit the target cost and
            performance level, you earn a set fee. Underrun costs or exceed performance targets
            and you earn more. Overrun costs or miss performance targets and your fee drops.
            These contracts reward efficiency and execution discipline.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Deduction provisions on FFP contracts</strong> — Fixed-price performance-
            based contracts often include a deduction schedule rather than an incentive structure.
            If you fall below specific AQLs, the government reduces your payment by a defined
            percentage. These aren&apos;t penalties — they&apos;re price adjustments reflecting
            the fact that you didn&apos;t deliver what was contracted. Understand the deduction
            schedule before you sign.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                label: "CPAF",
                full: "Cost Plus Award Fee",
                risk: "Cost risk on government",
                when: "Complex, hard-to-measure performance",
                color: "bg-blue-50 border-blue-100 text-blue-700",
              },
              {
                label: "CPIF",
                full: "Cost Plus Incentive Fee",
                risk: "Shared cost risk",
                when: "Well-defined targets, objective metrics",
                color: "bg-violet-50 border-violet-100 text-violet-700",
              },
              {
                label: "FFP+Deductions",
                full: "Fixed Price with Deductions",
                risk: "Cost risk on contractor",
                when: "Clear requirements, measurable standards",
                color: "bg-emerald-50 border-emerald-100 text-emerald-700",
              },
            ].map(({ label, full, risk, when, color }) => (
              <div key={label} className={`rounded-2xl border p-5 ${color}`}>
                <div className="text-2xl font-black mb-1">{label}</div>
                <div className="text-xs font-semibold mb-2 opacity-80">{full}</div>
                <div className="text-xs mb-1">
                  <strong>Risk:</strong> {risk}
                </div>
                <div className="text-xs">
                  <strong>Used when:</strong> {when}
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            When you price a performance-based contract, build in your quality control costs
            explicitly. The QCM salary, internal audit time, metrics tracking systems, corrective
            action capacity — these aren&apos;t overhead you can ignore. Contractors who cut
            QC costs to win the price often find they spend more managing deficiencies and
            deductions after award than they saved bidding.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            For the full framework on pricing federal contracts to win without losing money, see our
            guide to{" "}
            <Link
              href="/blog/government-contract-pricing-strategies"
              className="text-blue-600 hover:underline font-medium"
            >
              government contract pricing strategies
            </Link>
            .
          </p>
        </div>

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="common-mistakes"
            number="08"
            title="Common PWS Mistakes That Cost Contractors Points"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            After reviewing proposal debriefings across dozens of performance-based acquisitions,
            the same patterns show up repeatedly in losing proposals. Most are avoidable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
            {[
              {
                title: "Describing activities instead of outcomes",
                body: "A PWS measures what gets done, not what activities you perform. Writing 'we will hold weekly status meetings' doesn't address a performance standard that measures system availability. Map every proposal claim to a performance standard.",
              },
              {
                title: "Generic QCPs with no standard-specific content",
                body: "Reusing a boilerplate QCP that describes a quality management philosophy without addressing the specific performance standards in this PWS is a reliable way to earn an Acceptable rather than Outstanding rating on your management approach.",
              },
              {
                title: "Missing or misreading AQLs",
                body: "Proposing to meet the performance standard when the government measures against the AQL misaligns your technical approach with reality. If the AQL is 95% and you're building a process that delivers 96% on a good day, you have no buffer for an off month.",
              },
              {
                title: "Failing to address surveillance method in your QCP",
                body: "If the QASP uses random sampling, your QCP should explain how your quality process produces consistent results across all deliverables. If it uses customer feedback, your relationship management approach matters as much as your technical execution.",
              },
              {
                title: "Proposing key personnel who aren't actually available",
                body: "On a PWS-based contract, key personnel are often evaluated and written into the contract. If your named QCM leaves before performance starts, you need a contracting officer approval to replace them. Propose people who will actually be on the contract.",
              },
              {
                title: "Not asking questions during the Q&A period",
                body: "Ambiguous performance standards are a risk you carry into performance. Getting a written government interpretation before submission locks in a favorable reading — or at minimum clarifies what they actually meant before you commit to delivering against it.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-red-50 border border-red-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <div className="font-bold text-red-800 text-sm">{title}</div>
                </div>
                <div className="text-red-700 text-xs leading-relaxed">{body}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The most systemic mistake is treating a PWS proposal like a SOW proposal.
            Compliance checklists and task-by-task responses miss the entire point of
            performance-based acquisition. The government already knows what tasks are involved.
            They want to know that you understand what success looks like and that you have
            a credible, managed approach to delivering it.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Use our guide to{" "}
            <Link
              href="/blog/government-contract-debriefing"
              className="text-blue-600 hover:underline font-medium"
            >
              government contract debriefings
            </Link>{" "}
            to learn how to extract actionable PWS-specific feedback from a loss —
            agencies are required to tell you what the technical weaknesses were, and
            that information is worth more than almost any pre-proposal research.
          </p>
        </div>

        {/* Section 9 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="pre-rfp-intelligence"
            number="09"
            title="Getting Ahead of the PWS Before the RFP Drops"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The best time to engage with a PWS is before it&apos;s final — while you can still
            influence it. Sources sought notices and draft RFPs are opportunities to read the
            government&apos;s initial thinking on performance standards and shape them toward
            your strengths. Most contractors skip this step.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            When a sources sought notice drops, look for any attached PWS or performance
            description, even if it&apos;s labeled as preliminary. Read it against the prior
            contract PWS if you can find it. Has the government tightened performance standards?
            Added new QASP requirements? Changed the surveillance method? Each of those changes
            signals what went wrong on the prior contract — and what they&apos;re prioritizing now.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            When draft RFPs are posted with a comment period, submit substantive written comments
            on performance standards that are ambiguous or unachievable. Government acquisition
            teams read these comments. If you can cite industry benchmarks showing that a proposed
            AQL is more stringent than what the market can deliver, your comment can result in a
            revised standard that reflects a realistic level you can hit — and competitors who
            bid on the final RFP without reading the draft miss that context entirely.
          </p>

          <Callout icon={Search} color="sky" title="Pre-PWS Intelligence Checklist">
            <ul className="space-y-1.5">
              {[
                "Pull the prior contract from USASpending.gov and FPDS — find who ran it and at what price",
                "Search SAM.gov for the prior solicitation to read the historical PWS",
                "Check if a sources sought was issued — read any attached work descriptions carefully",
                "Attend the industry day if one is scheduled — agencies often present draft performance standards",
                "Request the prior CPARS ratings on the existing contract from the COR if you have a relationship",
                "Submit written comments on draft PWS language during the comment period",
                "Watch for the QASP attachment — it's often released with the draft RFP but removed from the final",
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-sky-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            The historical PWS is often available through the prior solicitation on SAM.gov,
            or through a FOIA request if the prior contract is more than a few years old.
            Reading it tells you more about this requirement than any market research you could
            do from scratch. The performance standards that have persisted across recompetes
            are the non-negotiable ones. The standards that changed are the ones where the
            incumbent struggled.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            CapturePilot&apos;s{" "}
            <Link
              href="/features/intelligence"
              className="text-blue-600 hover:underline font-medium"
            >
              market intelligence features
            </Link>{" "}
            pull historical contract data, incumbent performance records, and prior solicitation
            details so you can build this picture faster. When a PWS-based opportunity enters
            your{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
              pipeline
            </Link>
            , you can see who ran the prior contract, what the historical performance standards
            looked like, and whether the incumbent had documented quality issues.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Performance-based contracting rewards preparation more than almost any other
            acquisition approach. The contractors who win consistently on PBSA contracts aren&apos;t
            the ones who write the most polished prose — they&apos;re the ones who understand
            the performance standards well enough to promise specifically what the government
            needs and credibly demonstrate that they can deliver it. Get that right and the
            writing almost takes care of itself.
          </p>
        </div>

        {/* Conclusion CTA */}
        <div className="bg-gradient-to-r from-stone-900 to-violet-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Layers className="w-8 h-8 flex-shrink-0 mt-1 text-violet-300" />
            <div>
              <h3 className="font-black text-xl mb-2">
                Build Proposals That Win on Performance Standards
              </h3>
              <p className="text-stone-300 mb-4 text-sm">
                CapturePilot gives you the intelligence to understand what the government&apos;s
                performance standards mean in practice — before you commit to delivering against
                them. Book a strategy call to see how it works for your contract categories.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-lg hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/features/proposals"
                  className="inline-flex items-center gap-2 bg-violet-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-violet-500 transition-colors text-sm"
                >
                  See proposal features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Keep Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/technical-volume-government-proposal",
                title: "Writing a Winning Technical Volume for Government Proposals",
                category: "Proposals",
              },
              {
                href: "/blog/government-proposal-compliance-matrix",
                title: "How to Build a Compliance Matrix for Government Proposals",
                category: "Proposals",
              },
              {
                href: "/blog/government-contract-debriefing",
                title: "Government Contract Debriefings: How to Get Feedback After a Loss",
                category: "Strategy",
              },
              {
                href: "/blog/past-performance-government-contracts",
                title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
                category: "Proposals",
              },
            ].map(({ href, title, category }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-stone-50 hover:bg-violet-50 border border-stone-100 hover:border-violet-200 rounded-xl p-5 transition-all hover-lift"
              >
                <div className="text-xs font-semibold text-violet-600 mb-2">{category}</div>
                <div className="text-sm font-semibold text-stone-800 group-hover:text-violet-700 leading-snug">
                  {title}
                </div>
                <div className="flex items-center gap-1 mt-3 text-xs text-violet-500 font-medium">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
