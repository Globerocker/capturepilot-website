"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  ChevronRight,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  XCircle,
  DollarSign,
  AlertCircle,
  Gavel,
  TrendingDown,
  ListChecks,
  BarChart3,
  RefreshCw,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-it-matters-now", label: "Why This Topic Is Urgent in 2025–2026" },
  { id: "what-is-t4c", label: "What Termination for Convenience Actually Means" },
  { id: "default-vs-convenience", label: "Default vs. Convenience: Critical Differences" },
  { id: "first-72-hours", label: "Your First 72 Hours After a Termination Notice" },
  { id: "what-you-can-recover", label: "What Costs You Can Actually Recover" },
  { id: "settlement-proposal", label: "How to Build Your Settlement Proposal" },
  { id: "challenging-the-termination", label: "When and How to Challenge a Termination" },
  { id: "protect-pipeline", label: "Protecting Your Pipeline After a T4C" },
  { id: "prevention", label: "How to Reduce Your Termination Risk" },
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

export default function GovernmentContractTerminationPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">Contract Termination</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Gavel className="w-4 h-4" /> Advanced
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Termination for Convenience:{" "}
            <span className="gradient-text">
              What Every Government Contractor Must Know When the Agency Pulls the Plug
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            In 2025, over 13,000 federal contracts were terminated — many without warning. The
            government has an unrestricted right to cancel your contract at any time for any
            reason. What separates contractors who recover from this and those who go under is
            knowing exactly what to do in the first 72 hours and how to fight for every dollar
            you&apos;re owed.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 4, 2026</span>
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
        <div className="max-w-4xl mx-auto prose-custom">

          {/* Section 1 */}
          <SectionHeading id="why-it-matters-now" number="01" title="Why This Topic Is Urgent in 2025–2026" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              This isn&apos;t a theoretical risk. Between early 2025 and mid-2025, federal agencies
              terminated over 13,440 contracts and restructured or canceled work with a combined
              &ldquo;base and all options value&rdquo; exceeding $71 billion. Contractors in D.C., Virginia,
              and California faced the largest dollar exposure. But even smaller terminations —
              a $400,000 services contract canceled mid-performance — can destroy a small
              business that planned its year around that revenue.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The driver in this cycle was the Department of Government Efficiency (DOGE) push to
              cut federal spending. As of February 2025, 2,425 contract awards had been terminated
              for convenience, with 205 additional contracts hit with stop-work orders. USAID was
              the hardest-hit agency, seeing most of its contract portfolio frozen or canceled. The
              Department of Education and FEMA followed close behind.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              But DOGE isn&apos;t the only reason terminations happen. They occur during every
              administration when budgets change, missions shift, programs get reorganized, or
              technology makes a solution obsolete. If you have more than one federal contract,
              you will eventually face a termination for convenience. The question is whether
              you&apos;ll be prepared.
            </p>
          </div>

          <Callout icon={BarChart3} color="red" title="Scale of 2025 Terminations">
            Over 13,440 contracts terminated by mid-2025. 2,425 contract awards explicitly coded
            as &ldquo;termination for convenience&rdquo; as of February 25, 2025. 1,107 companies affected
            across 4,478 individual actions. $71 billion in base and all-options contract value
            canceled or restructured. Source: GovSpend, GovConFeed, Bloomberg Government.
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="what-is-t4c" number="02" title="What Termination for Convenience Actually Means" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The federal government holds a right that no commercial customer has: the right to
              cancel a contract at any time, for any reason, simply by deciding it&apos;s in the
              government&apos;s interest to stop. This is called &ldquo;termination for convenience,&rdquo; and
              it&apos;s authorized under FAR Part 49. Every standard government contract above the
              simplified acquisition threshold ($250,000) contains a termination for convenience
              clause — either FAR 52.249-2 for fixed-price contracts or FAR 52.249-6 for
              cost-reimbursement vehicles.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The clause is straightforward: the contracting officer can terminate all or part of
              a contract by issuing written notice. There&apos;s no requirement to prove wrongdoing on
              your part, no duty to exhaust alternatives, and no obligation to complete the work
              instead. The government just has to decide termination serves its interest.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              What you get in return is the right to fair compensation — not the profits you would
              have made on the uncompleted work, but recovery of your actual costs plus a reasonable
              profit on what you did complete. Understanding exactly what &ldquo;fair compensation&rdquo;
              covers is where most contractors leave significant money on the table.
            </p>
          </div>

          <Callout icon={FileText} color="blue" title="The Key FAR Provisions">
            <strong>FAR 52.249-2</strong> — Standard T4C clause for fixed-price contracts above $250K.<br />
            <strong>FAR 52.249-4</strong> — Simplified T4C clause for contracts at or below the simplified acquisition threshold.<br />
            <strong>FAR Part 49</strong> — Governs all termination procedures, settlement rights, and TCO authorities.<br />
            <strong>FAR 49.201(a)</strong> — Requires that settlement &ldquo;should compensate the contractor fairly for the work done and the preparations made for the terminated portions.&rdquo;<br />
            <strong>FAR 49.206</strong> — Settlement proposal requirements and the 1-year deadline.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="default-vs-convenience" number="03" title="Default vs. Convenience: Critical Differences" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              These are not the same thing, and confusing them is an expensive mistake. A
              termination for default is the government&apos;s contractual right to cancel because
              you failed to perform — you missed a delivery date, failed a quality standard,
              or breached a material term. Under FAR 49.4, a default termination can make you
              liable for the government&apos;s excess reprocurement costs. That means if the agency
              has to hire someone else at a higher price to finish what you started, you pay the
              difference.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A termination for convenience carries no such liability. You stop work, submit a
              settlement proposal, and recover allowable costs. The financial exposure runs
              entirely the other direction — the government owes you money.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The critical legal escape hatch: if the agency terminates you for default but the
              failure was caused by circumstances beyond your control and without your fault or
              negligence — called &ldquo;excusable delay&rdquo; under FAR 49.401 — the termination must be
              converted to a termination for convenience. Supply chain disruptions, government-caused
              delays, natural disasters, and similar events qualify. If you&apos;ve received a default
              termination and believe excusable causes apply, get a government contracts attorney
              involved immediately. The conversion from default to convenience can eliminate six
              figures in excess cost liability.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-200 my-8 animate-on-scroll">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="px-5 py-3 text-left font-bold">Factor</th>
                  <th className="px-5 py-3 text-left font-bold">Termination for Convenience</th>
                  <th className="px-5 py-3 text-left font-bold">Termination for Default</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cause", "Government&apos;s interest — no fault required", "Contractor failure to perform"],
                  ["Government&apos;s liability", "Fair compensation for costs + profit on work done", "None — government is the aggrieved party"],
                  ["Contractor&apos;s liability", "None", "Excess reprocurement costs + damages"],
                  ["Settlement proposal", "Yes — within 1 year", "Not applicable"],
                  ["Lost profits on unfinished work", "Not recoverable", "Not applicable"],
                  ["Challenge path", "Bad faith / abuse of discretion (high bar)", "Excusable delay / factual disputes"],
                  ["Contract work record", "No negative past performance implication", "Can damage CPARS and future awards"],
                ].map(([factor, convenience, defaultRow], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-5 py-3 font-semibold text-stone-900">{factor}</td>
                    <td className="px-5 py-3 text-emerald-700"
                      dangerouslySetInnerHTML={{ __html: convenience }}
                    />
                    <td className="px-5 py-3 text-red-700"
                      dangerouslySetInnerHTML={{ __html: defaultRow }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <SectionHeading id="first-72-hours" number="04" title="Your First 72 Hours After a Termination Notice" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Speed and documentation determine how much you recover. The actions you take —
              and fail to take — in the first few days after receiving a termination notice
              directly affect the size of your settlement. Here&apos;s the sequence that matters.
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                step: "1",
                title: "Stop work immediately",
                body: "FAR 52.249-2 requires you to stop work on the terminated portion the moment you receive notice. Do not continue incurring costs you can&apos;t justify. If termination is partial, continue performing on any remaining scope and document that separation carefully.",
              },
              {
                step: "2",
                title: "Stop placing subcontracts",
                body: "Cancel purchase orders and subcontract work related to the terminated scope. You&apos;re allowed to recover subcontractor settlements, but you need to act quickly to minimize those costs — the government won&apos;t pay for costs you ran up after receiving notice.",
              },
              {
                step: "3",
                title: "Notify the Termination Contracting Officer (TCO)",
                body: "Advise the TCO immediately of any special circumstances that prevent an immediate work stoppage. Document everything in writing. The TCO handles your settlement, not your original contracting officer — understand who you&apos;re now dealing with.",
              },
              {
                step: "4",
                title: "Protect government property",
                body: "Any government-furnished equipment, materials, or data in your possession must be identified, inventoried, and protected. You&apos;re liable for loss or damage. Submit an inventory list within 120 days.",
                highlight: true,
              },
              {
                step: "5",
                title: "Begin documenting costs",
                body: "Pull every invoice, labor record, purchase order, and overhead allocation related to this contract. Your settlement is only as strong as your documentation. Costs you can&apos;t substantiate won&apos;t be paid.",
              },
              {
                step: "6",
                title: "Consult a government contracts attorney",
                body: "Not later than week one. Settlement negotiations with the government are not like commercial negotiations — there are specific FAR rules, precedents, and timelines that govern every aspect. An attorney experienced in T4C settlements pays for themselves many times over.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`flex gap-4 p-5 rounded-xl border ${
                  item.highlight
                    ? "bg-amber-50 border-amber-200"
                    : "bg-stone-50 border-stone-200"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                  <p
                    className="text-sm text-stone-600"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Clock} color="amber" title="The 120-Day Inventory Deadline">
            Inventory disposal schedules must be submitted within 120 days of the termination
            effective date. This is a hard deadline under FAR 49.206-3. Missing it can complicate
            your settlement and create disputes over property accountability. Set a calendar
            reminder the day you receive the notice.
          </Callout>

          {/* Section 5 */}
          <SectionHeading id="what-you-can-recover" number="05" title="What Costs You Can Actually Recover" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 49.201(a) establishes the overarching principle: fair compensation. That&apos;s a
              broader standard than the FAR Part 31 cost principles that normally govern
              allowability. In a termination settlement, you can argue that an otherwise
              unallowable cost is still recoverable because disallowing it would be unfair.
              That argument doesn&apos;t work in normal contract performance, but it does in T4C
              settlements — and experienced practitioners use it regularly.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Here&apos;s what typically falls in and out of a settlement:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <p className="font-bold text-emerald-900">Generally Recoverable</p>
              </div>
              <ul className="space-y-2 text-sm text-emerald-800">
                {[
                  "Direct costs incurred before termination notice",
                  "Indirect costs (overhead, G&A) allocable to terminated work",
                  "Reasonable profit on work actually performed",
                  "Subcontractor settlement costs",
                  "Demobilization and wind-down costs",
                  "Employee severance related to terminated scope",
                  "Settlement preparation costs (attorney fees, accounting)",
                  "Costs of inventorying and protecting government property",
                  "Storage and transportation of termination inventory",
                  "Some continuing post-termination costs if unavoidable",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <p className="font-bold text-red-900">Generally Not Recoverable</p>
              </div>
              <ul className="space-y-2 text-sm text-red-800">
                {[
                  "Lost profits on the unexecuted portion of the contract",
                  "Anticipatory profit (what you expected to earn)",
                  "Costs incurred after the termination stop-work date",
                  "Costs not allocable to the terminated contract",
                  "Unreasonable or excessive wind-down expenses",
                  "Profit if the contractor would have taken a loss on full performance",
                  "Costs specifically prohibited by FAR Part 31 (unless fair compensation argument applies)",
                  "Settlement costs for unrelated contracts or overhead items",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The profit limitation is the one that surprises most contractors. If the agency
              terminates a $5 million contract after you&apos;ve completed $1 million in work, you
              don&apos;t get to recover the $2 million in profits you projected on the remaining $4
              million. You get profit on the $1 million you performed — period. That&apos;s a
              fundamental feature of the T4C regime, not a negotiating position the TCO has
              flexibility on.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              There&apos;s one important exception: if the contract would have resulted in a loss had
              you performed the full scope, the TCO will actually reduce your settlement by the
              anticipated loss percentage. The government won&apos;t let you profit from a termination
              that saved you from losing money. This loss-adjusted calculation makes your cost
              accounting records critical.
            </p>
          </div>

          <Callout icon={DollarSign} color="emerald" title="The Fair Compensation Override">
            Even if a cost is technically unallowable under FAR Part 31 (like certain interest
            costs or entertainment expenses), you can argue for recovery in a T4C settlement
            under the &ldquo;fair compensation&rdquo; standard of FAR 49.201(a). Document why disallowance
            would be unfair given the specific facts of your situation. This argument doesn&apos;t
            always succeed, but experienced practitioners include it regularly — and it costs
            nothing to assert in your proposal narrative.
          </Callout>

          {/* Section 6 */}
          <SectionHeading id="settlement-proposal" number="06" title="How to Build Your Settlement Proposal" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              You have one year from the termination effective date to submit your settlement
              proposal to the TCO (FAR 49.206-1 and 49.303-1). Miss that deadline and you
              may forfeit your right to recovery entirely. The TCO can extend the deadline —
              request an extension in writing if you need it — but don&apos;t rely on that. File
              on time.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 49.206-2 establishes two acceptable approaches:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-6 animate-on-scroll">
            <div className="border border-stone-200 rounded-2xl p-5 bg-stone-50">
              <p className="font-bold text-stone-900 mb-2">Inventory Basis (Preferred)</p>
              <p className="text-sm text-stone-600 mb-3">
                Required under FAR 49.206-2(a) when feasible. You itemize all materials, work
                in process, finished goods, tooling, and direct costs by category. More work to
                prepare, but often yields a larger settlement because you capture costs at the
                line-item level that get buried in the total cost approach.
              </p>
              <p className="text-xs text-stone-500">Best for: manufacturing, construction, complex R&amp;D</p>
            </div>
            <div className="border border-stone-200 rounded-2xl p-5 bg-stone-50">
              <p className="font-bold text-stone-900 mb-2">Total Cost Basis</p>
              <p className="text-sm text-stone-600 mb-3">
                Permitted under FAR 49.206-2(b) when inventory-based approach is impractical.
                You aggregate total allowable costs incurred, add allocated indirect costs,
                deduct the value of deliverables already accepted and paid, and calculate
                settlement profit on the net.
              </p>
              <p className="text-xs text-stone-500">Best for: services, professional services, IT support</p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Regardless of approach, your proposal needs a detailed narrative that explains
              each cost element, connects it to the terminated contract, cites the applicable
              FAR authority, and addresses any items the government might question. A bare
              numbers spreadsheet will be questioned on every line. A narrative that preemptively
              explains the basis for each cost significantly accelerates settlement.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Negotiation follows proposal submission. The TCO will review, respond with
              questions or counterproposals, and you&apos;ll negotiate to a final agreement.
              If you can&apos;t agree, you can convert the dispute into a claim under the
              Contract Disputes Act and appeal to either the Armed Services Board of Contract
              Appeals (ASBCA), the Civilian Board of Contract Appeals (CBCA), or the Court
              of Federal Claims. That path is slower and more expensive — skilled negotiation
              at the TCO level produces better outcomes for most small businesses.
            </p>
          </div>

          <Callout icon={ListChecks} color="sky" title="Settlement Proposal Checklist">
            <ul className="space-y-1">
              <li>✓ Cover page: contract number, termination date, total claimed, contact info</li>
              <li>✓ Narrative: factual background, basis for each cost element, FAR citations</li>
              <li>✓ Cost summary schedule: organized by FAR-recognized categories</li>
              <li>✓ Direct labor: hours, rates, supporting payroll records</li>
              <li>✓ Direct materials: invoices, purchase orders, receiving documents</li>
              <li>✓ Subcontractor settlements: amounts, supporting subcontract T4C docs</li>
              <li>✓ Indirect costs: overhead rate, G&amp;A rate, basis and calculation</li>
              <li>✓ Profit calculation: percentage, basis, justification</li>
              <li>✓ Settlement expenses: attorney/accounting fees for proposal prep</li>
              <li>✓ Credits: progress payments received, advance payments, accepted deliverables</li>
            </ul>
          </Callout>

          {/* CTA 1 */}
          <div className="my-10 animate-on-scroll">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <p className="text-sm font-semibold text-blue-200 mb-2">Track Your Contracts</p>
              <h3 className="text-2xl font-black mb-3">
                Know where every contract stands before the termination notice arrives
              </h3>
              <p className="text-blue-100 mb-6 text-sm max-w-xl">
                CapturePilot&apos;s{" "}
                <Link href="/features/pipeline" className="underline hover:text-white">
                  pipeline management
                </Link>{" "}
                and{" "}
                <Link href="/features/intelligence" className="underline hover:text-white">
                  contract intelligence
                </Link>{" "}
                tools give you early warning signals on at-risk awards — budget cuts, agency
                reorganizations, program restructurings — so you&apos;re never blindsided.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading id="challenging-the-termination" number="07" title="When and How to Challenge a Termination" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              You cannot challenge a termination for convenience simply because you disagree with
              the agency&apos;s decision. Courts and boards consistently hold that the government&apos;s
              T4C right is broad and discretionary — second-guessing the contracting officer&apos;s
              business judgment doesn&apos;t create a viable claim.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Two grounds can succeed, though neither is easy:
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            <div className="border-l-4 border-red-500 pl-5 py-1">
              <p className="font-bold text-stone-900 mb-1">Bad Faith</p>
              <p className="text-sm text-stone-600">
                You must show by clear and convincing evidence that the agency terminated your
                contract specifically to harm you — not just that the decision was poor, unfair,
                or politically motivated. Bad faith claims rarely succeed. Courts require proof
                of actual malice, not mere impropriety. If the agency terminated thousands of
                contracts under a broad efficiency initiative, proving your specific termination
                was motivated by malice is nearly impossible.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-5 py-1">
              <p className="font-bold text-stone-900 mb-1">Abuse of Discretion</p>
              <p className="text-sm text-stone-600">
                You can argue the agency lacked the authority to terminate, failed to follow
                required procedures, or the termination was legally improper in some specific
                way. This is a narrower legal argument than bad faith, but it&apos;s also more
                concrete. Procedural failures — like an unsigned notice, improper delegation of
                TCO authority, or violation of a specific contract provision — can create
                viable challenges.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              One practical path that&apos;s often overlooked: if the agency terminated you for
              convenience but you have evidence that the actual motivation was your protected
              whistleblower activity, an EEO complaint, or another legally prohibited basis,
              you may have claims under different statutes entirely. A government contracts
              attorney who also understands employment law can identify these angles.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The most common dispute in T4C cases isn&apos;t whether the termination was valid —
              it&apos;s whether the settlement amount is adequate. Disputes over cost allowability,
              indirect rate application, and profit percentage are where contractors most
              frequently need to push back. File a claim under the Contract Disputes Act if
              you and the TCO can&apos;t agree. The statutory interest rate on CDA claims accrues
              from the date you submit the claim — that&apos;s free money for taking a reasonable
              dispute to a formal resolution.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="red" title="Don't Sit on a Dispute">
            The Contract Disputes Act has a 6-year statute of limitations for claims. But
            practically, the longer you wait after a failed settlement negotiation, the harder it
            becomes to reconstruct cost records and find witnesses. If you can&apos;t reach agreement
            with the TCO within 90–120 days of proposal submission, escalate formally. File the
            CDA claim. The clock on your statutory interest starts running immediately.
          </Callout>

          {/* Section 8 */}
          <SectionHeading id="protect-pipeline" number="08" title="Protecting Your Pipeline After a T4C" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              A termination for convenience does not damage your CPARS record — or it shouldn&apos;t.
              Under FAR 42.1503, past performance ratings should reflect contractor performance,
              not government decisions to terminate for convenience. If you receive a negative
              rating citing the T4C, dispute it through the CPARS system immediately. Document
              that the termination was at the government&apos;s election, not due to performance
              failure.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              When you&apos;re bidding new work post-termination, disclose the T4C proactively in
              your past performance section. Agencies will find it in PPIRS regardless. Burying
              it looks worse than addressing it directly. A brief factual explanation — &ldquo;this
              contract was terminated for convenience by the agency when the program was
              restructured; all deliverables prior to termination were accepted without issue&rdquo;
              — is far better than a blank entry or an evasive one.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              More importantly, use the termination as a forcing function to diversify your
              contract base. The contractors who survived the 2025 termination wave intact were
              those with revenue spread across multiple agencies and vehicles. A single contract
              representing 60–80% of your revenue isn&apos;t a business — it&apos;s a single point of
              failure that the government can eliminate with one memo.
            </p>
          </div>

          <Callout icon={RefreshCw} color="violet" title="Pipeline Health After a Termination">
            Use your{" "}
            <Link href="/features/pipeline" className="underline font-medium">
              contract pipeline
            </Link>{" "}
            to immediately assess revenue concentration risk. If one contract was more than 40%
            of your projected revenue, your bid activity should shift into high gear. Identify
            new opportunities in the same agency (budget still exists, often just redirected),
            adjacent agencies, and new NAICS codes you&apos;re qualified to compete under.
            CapturePilot&apos;s{" "}
            <Link href="/features/matching" className="underline font-medium">
              opportunity matching
            </Link>{" "}
            surfaces relevant openings across all federal procurement channels — including
            SAM.gov, agency-specific portals, and upcoming solicitations from{" "}
            <Link href="/features/intelligence" className="underline font-medium">
              procurement forecasts
            </Link>
            .
          </Callout>

          {/* CTA 2 */}
          <div className="my-10 animate-on-scroll">
            <div className="bg-stone-900 rounded-2xl p-8 text-white">
              <p className="text-sm font-semibold text-stone-400 mb-2">Rebuild Fast</p>
              <h3 className="text-2xl font-black mb-3">
                Check your eligibility for set-asides you haven&apos;t been targeting
              </h3>
              <p className="text-stone-300 mb-6 text-sm max-w-xl">
                A termination is a good time to recalibrate. Run our free Quick Checker to
                see which certifications — 8(a), SDVOSB, WOSB, HUBZone — you qualify for
                and could be winning set-aside work with immediately.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="prevention" number="09" title="How to Reduce Your Termination Risk" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              You can&apos;t eliminate termination risk — the government&apos;s right to terminate for
              convenience is absolute and contractual. But you can reduce the probability and
              limit the damage. Here&apos;s what experienced contractors do differently.
            </p>
          </div>

          <div className="space-y-6 my-8 animate-on-scroll">
            {[
              {
                icon: BarChart3,
                title: "Monitor budget and program signals",
                body: "Contracts don't usually get terminated without warning signs. Watch for continuing resolutions, agency reorganization announcements, GAO reports critical of your program, and congressional testimony that questions the program's value. CapturePilot's intelligence feed tracks these signals at the program level.",
              },
              {
                icon: Shield,
                title: "Maintain strong cost accounting",
                body: "Your settlement recovery is only as good as your records. Contractors with poor timekeeping, inconsistent overhead allocation, and incomplete purchase documentation consistently receive smaller settlements — not because the costs didn't happen, but because they can't prove them.",
              },
              {
                icon: TrendingDown,
                title: "Diversify your contract base",
                body: "No single contract should represent more than 30–40% of your annual revenue. Spread across multiple agencies, contract vehicles, and program types. IDIQs and BPAs that cover multiple task orders are more resilient than a single large contract — see our guide to IDIQ contracts.",
              },
              {
                icon: FileText,
                title: "Keep a termination settlement file for every active contract",
                body: "From day one of contract performance, maintain a running file that includes all costs incurred, deliverables completed, materials purchased, and subcontracts placed. If you ever receive a termination notice, that file is the foundation of your settlement proposal — and it's far easier to build in real time than reconstruct months later.",
              },
              {
                icon: AlertCircle,
                title: "Understand your early termination costs before you bid",
                body: "Some contracts are more termination-vulnerable than others. A multi-year services contract where you'd staff up to full performance by month three carries significant termination exposure in the base year. Price that risk into your bid — and know your settlement exposure before you commit.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-stone-50 animate-on-scroll">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              One more thing. If you&apos;re doing significant work under any major policy-sensitive
              program — one that&apos;s subject to political scrutiny, budget battles, or congressional
              opposition — build a contingency plan before you need it. Identify your cost
              exposure at various termination points: month 3, month 6, month 12. Know what
              you&apos;d claim, what you could recover, and how long your cash flow can sustain a
              settlement process that takes 6–18 months to resolve.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Also: read the{" "}
              <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-700 hover:underline font-medium">
                bid/no-bid decision framework
              </Link>{" "}
              before you pursue any large single contract. The termination risk of a program
              is one of the factors that should feed into your pursuit decision. A $10 million
              contract on a politically vulnerable program with two years remaining may not
              be the right use of your proposal resources.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Related reading:{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline font-medium">
                Managing Your Government Contract Pipeline
              </Link>
              ,{" "}
              <Link href="/blog/federal-budget-continuing-resolution" className="text-blue-700 hover:underline font-medium">
                How Continuing Resolutions Affect Your Contracts
              </Link>
              , and{" "}
              <Link href="/blog/cpars-contractor-performance" className="text-blue-700 hover:underline font-medium">
                CPARS: How Contractor Performance Ratings Shape Future Awards
              </Link>
              .
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="The Bottom Line">
            Termination for convenience is the government exercising a contractual right — not
            a judgment on your performance. Your job is to stop work correctly, document
            everything, submit a thorough settlement proposal within 12 months, and negotiate
            from a position of knowledge. Contractors who understand the FAR settlement regime
            recover significantly more than those who accept the government&apos;s first offer or
            miss the filing window entirely. The system is designed to make you whole — but
            you have to work it.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 animate-on-scroll">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <p className="text-sm font-semibold text-blue-200 mb-2">Built for GovCon</p>
              <h3 className="text-2xl font-black mb-3">
                CapturePilot gives you the intelligence to see what&apos;s coming
              </h3>
              <p className="text-blue-100 mb-6 text-sm max-w-xl">
                Monitor your active contracts for termination risk signals. Build a diversified
                pipeline across agencies and vehicles. Track procurement forecasts so you&apos;re
                never dependent on a single award. Book a strategy call with our team to see
                how to apply these tools to your specific situation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/60 text-white font-bold px-6 py-3 rounded-xl transition-colors border border-white/20"
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
