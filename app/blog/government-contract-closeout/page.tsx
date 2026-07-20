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
  Clock,
  DollarSign,
  Shield,
  FileText,
  ClipboardList,
  TrendingUp,
  Zap,
  BarChart3,
  XCircle,
  RefreshCw,
  Award,
  AlertCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "physical-vs-admin", label: "Physical Completion vs. Administrative Closeout" },
  { id: "far-timelines", label: "FAR Closeout Timelines by Contract Type" },
  { id: "contractor-checklist", label: "What You Need to Submit for Closeout" },
  { id: "final-invoice", label: "The Final Invoice: Getting Paid What You Are Owed" },
  { id: "release-of-claims", label: "Release of Claims: What It Means and Why to Sign" },
  { id: "dcaa-audits", label: "DCAA Audits and Indirect Rates: The Biggest Delay" },
  { id: "quick-closeout", label: "Quick Closeout Procedures: How to Speed Things Up" },
  { id: "cpars-performance", label: "CPARS: Your Performance Rating at Closeout" },
  { id: "common-problems", label: "Eight Problems That Delay Final Payment" },
  { id: "next-contract", label: "Using Closeout Data to Win the Next Contract" },
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

export default function GovernmentContractCloseoutPage() {
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
            <span className="text-stone-900 font-medium">Government Contract Closeout</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <ClipboardList className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Closeout:{" "}
            <span className="gradient-text">
              How to Finish a Contract and Get Your Final Payment
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Finishing the work is not the same as finishing the contract. Government contract
            closeout is its own administrative process — and the mistakes contractors make here
            can delay final payment by months or trigger audits that drag on for years. Here is
            exactly what you need to do, in the right order, to close cleanly and get paid.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 20, 2026</span>
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

          {/* ── Section 1 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="physical-vs-admin" number="01" title="Physical Completion vs. Administrative Closeout" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The moment you deliver the final deliverable, complete the last task order, or reach
              the end of the period of performance, you have achieved <strong>physical
              completion</strong>. That is not the end. It is the starting gun for a separate
              administrative process — contract closeout — that must be completed before the
              government can make your final payment and officially retire the contract file.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That distinction matters because the clock starts ticking at physical completion,
              not at your last invoice. The FAR establishes specific time standards for how long
              the government has to complete the closeout process after physical completion — and
              contractors who understand these timelines are in a much better position to follow
              up, escalate, and push a stalled closeout forward.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Contract closeout covers everything that happens between the last day of work and
              the official closure of the contract file: final invoicing, audit reconciliation,
              resolution of any property or patent issues, settlement of indirect cost rates on
              cost-type contracts, and the formal releases that extinguish both parties&apos;
              obligations. Miss a step or submit documents late, and you can push your final
              payment back by months. On cost-reimbursement contracts with open indirect rates,
              delays can stretch to years.
            </p>

            <Callout icon={AlertCircle} color="amber" title="One distinction that trips up new contractors">
              Physical completion and contract completion are not the same thing. Physical
              completion means performance obligations are met. Contract completion — also called
              administrative closeout — means all actions required by the FAR and agency
              procedures are finished, funds are reconciled, and the file is officially closed.
              Your final payment cannot be made until administrative closeout is underway, and the
              release of claims is signed.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Tracking where your active contracts are in this lifecycle is part of running a
              disciplined government contracting operation.{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                CapturePilot&apos;s pipeline tools
              </Link>{" "}
              let you stage contracts through their full lifecycle — including post-performance
              milestones like closeout actions — so nothing slips through the cracks after the
              work is done.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="far-timelines" number="02" title="FAR Closeout Timelines by Contract Type" />

            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 4.804-1 sets the official time standards. The government — specifically the
              contract administration office — is supposed to complete administrative closeout
              within these windows after receiving evidence of physical completion:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 font-bold rounded-tl-lg">Contract Type</th>
                    <th className="text-left p-3 font-bold">Closeout Standard</th>
                    <th className="text-left p-3 font-bold rounded-tr-lg">Why the Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Simplified Acquisition (under $250K)",
                      standard: "When CO receives evidence of receipt and final payment",
                      why: "Minimal admin burden — payment is the signal",
                      bg: "bg-emerald-50",
                    },
                    {
                      type: "Firm-Fixed-Price (non-SAP)",
                      standard: "6 months after physical completion",
                      why: "No indirect rate audit; straightforward final invoice process",
                      bg: "bg-blue-50",
                    },
                    {
                      type: "All Other Contracts (T&M, labor-hour, etc.)",
                      standard: "20 months after the month of physical completion",
                      why: "More complex billing; some audit activity may be required",
                      bg: "bg-amber-50",
                    },
                    {
                      type: "Cost-Reimbursement (indirect rate settlement required)",
                      standard: "36 months after the month of physical completion",
                      why: "DCAA must audit and settle final indirect cost rates before closure",
                      bg: "bg-red-50",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={`${row.bg} border-b border-stone-200`}>
                      <td className="p-3 font-bold text-stone-900">{row.type}</td>
                      <td className="p-3 text-stone-700">{row.standard}</td>
                      <td className="p-3 text-stone-600">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              These are the government&apos;s targets — not guarantees. The GAO has repeatedly
              documented that federal agencies routinely miss these windows. A 2017 GAO report
              found that contracts were not closed on time at the Departments of Defense, Health
              and Human Services, Homeland Security, Justice, and State — and that none of those
              agencies had adequate tracking systems to even measure their own closeout backlog.
              That problem persists. For contractors, the practical implication is that you
              cannot assume the government will drive closeout on schedule. You have to push it.
            </p>

            <Callout icon={Clock} color="sky" title="The 36-month window is an aspiration, not a promise">
              On cost-reimbursement contracts, the 36-month standard depends heavily on DCAA
              completing its incurred cost audit. A 2017 GAO report (GAO-17-738) found that
              DCAA had <strong>14,208 incurred cost proposals</strong> awaiting audit with an
              average wait of <strong>747 days</strong> just to begin an audit. The backlog was
              largely resolved by FY2018 under a statutory 12-month audit completion requirement
              (10 U.S.C. §3842), but audit delays remain a real risk. Submit your incurred cost
              proposal on time — due <strong>June 30</strong> of the year following contract
              performance under FAR 52.216-7 — and follow up with DCAA directly to stay ahead
              of the queue.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For{" "}
              <Link href="/blog/federal-contract-types-explained" className="text-blue-700 underline font-medium">
                FFP contracts
              </Link>
              , the six-month window is usually achievable — if you do your part. Submit your
              final invoice promptly, respond quickly to government requests, and execute the
              release of claims without delay. On those contracts, the bottleneck is almost
              always administrative rather than technical, and a contractor who moves fast through
              the required steps typically gets paid within weeks of physical completion.
            </p>
          </div>

          {/* ── CTA 1 ── */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 my-10 text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Know where you stand before you bid</p>
                  <p className="text-blue-100 text-sm mb-4">
                    CapturePilot&apos;s Quick Checker identifies your set-aside certifications and
                    program eligibility in under two minutes — so you pursue contracts you can
                    actually win and close cleanly.
                  </p>
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                  >
                    Check your eligibility free <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="contractor-checklist" number="03" title="What You Need to Submit for Closeout" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Closeout is not something that happens to you — it is something you actively
              participate in. On contracts above the Simplified Acquisition Threshold ($250,000),
              you have affirmative submission obligations. Waiting for the contracting officer to
              chase you is how closeout stalls.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 4.804-5 identifies what the contract administration office must verify is
              complete before closing a file. Most of these require contractor action:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  icon: DollarSign,
                  title: "Final invoice",
                  desc: "Your final invoice — clearly marked as final — must be submitted and paid. For DoD contracts, this goes through Wide Area Workflow (WAWF). Mark it explicitly as the 'final' invoice; a regular invoice processed as final often creates reconciliation problems.",
                  tag: "Required for all contracts",
                  tagColor: "bg-blue-100 text-blue-700",
                },
                {
                  icon: FileText,
                  title: "Contractor's closing statement (release of claims)",
                  desc: "On contracts over $250,000, you must submit a written statement verifying all work is complete and no additional payments are due beyond what you have claimed. This is the contractor's release — it extinguishes your ability to bring new claims after closeout.",
                  tag: "Required above SAT",
                  tagColor: "bg-amber-100 text-amber-700",
                },
                {
                  icon: ClipboardList,
                  title: "Assignment and release of claims (cost-type contracts)",
                  desc: "On cost-reimbursement, labor-hour, and time-and-materials contracts, you also execute an Assignment and Release of Claims, which confirms no further financial claims exist against the government. This is separate from and in addition to the basic closing statement.",
                  tag: "Cost-type contracts",
                  tagColor: "bg-red-100 text-red-700",
                },
                {
                  icon: Shield,
                  title: "Final patent and royalty reports",
                  desc: "If your contract involved R&D or patentable innovations, you must submit a final patent report. The government must clear it — typically within 60 days of receipt — before the file can close. Royalty reports follow the same requirement if applicable.",
                  tag: "R&D / IP contracts",
                  tagColor: "bg-violet-100 text-violet-700",
                },
                {
                  icon: ClipboardList,
                  title: "Property clearance",
                  desc: "If the government furnished you equipment, materials, or property under the contract (GFP — Government Furnished Property), you must return it or account for it in writing. The property administrator must issue a clearance before the file can close.",
                  tag: "GFP contracts",
                  tagColor: "bg-orange-100 text-orange-700",
                },
                {
                  icon: BarChart3,
                  title: "Subcontractor settlement and release",
                  desc: "On prime contracts, you must demonstrate that you have settled all subcontractor costs and that no subcontractor claims are outstanding. If a subcontractor has pending claims against you, those must be resolved before the prime contract can administratively close.",
                  tag: "Prime contractors",
                  tagColor: "bg-emerald-100 text-emerald-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The contract administration office coordinates all of this and issues a Contract
              Completion Statement once every element is verified. That statement is what triggers
              the contracting officer to officially close the file and process the final payment.
              Without it, the file stays open regardless of how long ago you finished the work.
            </p>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="final-invoice" number="04" title="The Final Invoice: Getting Paid What You Are Owed" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Your final invoice is both a billing document and a signal. When you submit it,
              you are telling the government: this is everything I am owed, work is done, and I
              am ready to close. That signal kicks off the administrative process on the
              government&apos;s side.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A few things must be true for your final invoice to process cleanly:
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h4 className="font-bold text-stone-900 mb-4">Final invoice checklist</h4>
              <div className="space-y-2">
                {[
                  "Clearly labeled as 'Final Invoice' — not a standard invoice that happens to be last",
                  "Submitted through the correct system (WAWF for most DoD contracts, agency-specific portals for civilian agencies)",
                  "Covers all costs incurred and not previously billed, with no pending disputed amounts",
                  "Matches the contract's billing instructions, labor categories, and CLIN structure",
                  "Submitted within the timeframe required by the contract (many contracts specify a final invoice deadline post-completion)",
                  "Any retainage held by the government is addressed — either released or explained",
                  "Reflects any contract modifications, equitable adjustments, or settled claims from the performance period",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              On DoD contracts, Wide Area Workflow (WAWF) is the mandatory electronic invoicing
              system. The final invoice in WAWF should be submitted as an &quot;Invoice and
              Receiving Report (Combo)&quot; or the format your contract specifies — and you must
              select the &quot;Final&quot; designation in the system. A WAWF final invoice that
              is not flagged as final will process as a progress payment and will not trigger
              the closeout sequence.
            </p>

            <Callout icon={AlertTriangle} color="red" title="The retainage trap on cost-type contracts">
              On cost-reimbursement contracts, the government commonly holds back a percentage —
              often 10–15% — as retainage until closeout. That money is not released with your
              penultimate invoice. It requires a separate final invoice specifically requesting
              retainage release, combined with your closing statement. Contractors who submit a
              final invoice but forget to explicitly claim retained amounts leave money on the
              table until they follow up — sometimes years later.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The government has 30 days to pay a proper invoice under the Prompt Payment Act
              (31 U.S.C. § 3901 et seq.). If payment is late, the government owes you interest
              calculated at the Treasury Rate — automatically, without you needing to claim it.
              Track your final invoice submission date and the 30-day clock. If payment does not
              arrive, the interest is accumulating and the contracting officer has an
              administrative problem to resolve.
            </p>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="release-of-claims" number="05" title="Release of Claims: What It Means and Why to Sign" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The release of claims — also called the contractor&apos;s closing statement — is
              the document that says: we have performed all work, we have been paid or have
              claimed everything owed to us, and we release the government from any further
              financial obligations under this contract.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              This is a significant legal act. Once you sign and submit it, your ability to
              bring new claims against the government under that contract is effectively
              extinguished. Most forms include language like: &quot;the contractor certifies that
              all costs billed or unbilled have been accounted for, that there are no outstanding
              claims or disputes, and that the government owes no additional payments.&quot;
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That language is why you should not rush this step. Before you sign:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: "01",
                  title: "Reconcile all invoices",
                  desc: "Pull every invoice you submitted and verify the total matches what the government has paid. Include progress payments, milestone payments, and any equitable adjustments. If there is a discrepancy, resolve it before signing — not after.",
                },
                {
                  step: "02",
                  title: "Confirm all mods are reflected",
                  desc: "If the contract had scope changes or modifications during performance, make sure those modifications are all settled and either paid or reflected in the final invoice. Modifications that were issued but not priced can create claims you would otherwise lose at closeout.",
                },
                {
                  step: "03",
                  title: "Check for unresolved disputes",
                  desc: "If you have any active disputes, REAs (Requests for Equitable Adjustment), or claims under the Contract Disputes Act, document them explicitly before signing the release. Many release forms have carve-out language for identified claims — use it.",
                },
                {
                  step: "04",
                  title: "Verify subcontractor settlements",
                  desc: "On prime contracts, confirm you have settled all subcontractor invoices and that no sub has an outstanding claim against you that might later create liability you cannot recover from the government.",
                },
                {
                  step: "05",
                  title: "Get legal review for large contracts",
                  desc: "On contracts with significant value — particularly cost-reimbursement contracts with complex billing histories — have counsel review the release language before you sign. The cost is minimal relative to what you might be releasing.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-black text-blue-200">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Do not let the release of claims sit. Contracting officers cannot process final
              payment without it, and some officers will not follow up aggressively if the
              ball is in your court. Submit the release promptly once you have verified the
              above — and keep a copy of everything you submit with timestamps.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="dcaa-audits" number="06" title="DCAA Audits and Indirect Rates: The Biggest Delay" />

            <p className="text-stone-700 leading-relaxed mb-4">
              If you have a cost-reimbursement contract, the single most likely cause of a
              delayed closeout is not your paperwork. It is the Defense Contract Audit Agency
              (DCAA) audit process — specifically, the settlement of your final indirect cost
              rates.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Cost-reimbursement contracts reimburse you for allowable direct costs plus
              indirect costs (overhead, G&amp;A, fringe) applied at provisional rates during
              performance. At closeout, DCAA must audit your actual indirect costs for the
              contract period, compare them to the provisional rates you billed, and determine
              final rates. The difference — which can go in either direction — is the
              &quot;rate adjustment,&quot; and it is usually the last thing settled before the
              contract can close.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              An audit is required under FAR for cost-reimbursement contracts above $550,000,
              unless the contracting officer determines available data are adequate for a
              reasonableness determination and documents that rationale in the file. For most
              contracts, the audit happens.
            </p>

            <Callout icon={Clock} color="red" title="DCAA&apos;s incurred cost audit backlog is real">
              DCAA audits incurred cost proposals — the annual submission you file to document
              your actual indirect rates. Your incurred cost proposal for a given year is due
              June 30 of the following year. DCAA has carried a significant backlog of these
              audits: proposals can sit in queue for 18–24 months before an auditor is assigned.
              If your cost-reimbursement contract ended in 2023, DCAA may not complete your
              rate audit until 2025 or 2026 — which means the contract cannot close until then,
              regardless of the 36-month FAR standard.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              What you can control:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  icon: CheckCircle2,
                  title: "Submit your incurred cost proposal on time",
                  desc: "File your incurred cost proposal by June 30 each year. Late submissions increase DCAA's workload and can delay your queue position. The proposal documents your actual indirect costs for each cost accounting period — it is the document DCAA audits.",
                },
                {
                  icon: RefreshCw,
                  title: "Maintain audit-ready records",
                  desc: "DCAA can only audit what you can document. Keep time records, cost records, and indirect cost pool data organized and accessible for at least three years after contract completion. Gaps in records extend audit duration.",
                },
                {
                  icon: TrendingUp,
                  title: "Ask about quick closeout",
                  desc: "FAR 42.708 allows quick closeout without a full DCAA audit when unsettled costs do not exceed the lesser of $1M or 10% of the contract value. DoD raised this to $2M in March 2023 under DFARS 242.708. For eligible contracts, this is the fastest path to closure. More in the next section.",
                },
                {
                  icon: FileText,
                  title: "Follow up with DCAA directly",
                  desc: "DCAA is a government agency, but you can and should communicate with your assigned DCAA auditor. Know who has your incurred cost proposal, know its status, and follow up if it has sat in queue longer than the standard suggests. Contractors who engage proactively tend to move through the audit faster.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="The 120-day completion voucher deadline">
              Once DCAA and the contracting officer settle your final indirect cost rates, FAR
              52.216-7 requires you to submit your <strong>final completion voucher within 120
              days</strong>. Miss that deadline and the contracting officer can unilaterally
              determine the amount due — which rarely works in the contractor&apos;s favor. When
              you hear rates have been settled, treat the 120-day window as a hard deadline and
              submit immediately.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For{" "}
              <Link href="/blog/dcaa-audit-small-business" className="text-blue-700 underline font-medium">
                small businesses navigating DCAA audits
              </Link>
              , the preparation that matters most happens during performance — not at closeout.
              A well-maintained accounting system that separates direct and indirect costs,
              tracks labor by project, and retains backup documentation makes DCAA audits faster
              and less painful at every stage of the contract lifecycle.
            </p>
          </div>

          {/* ── CTA 2 ── */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 my-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg text-emerald-900 mb-1">
                    Track every contract through its full lifecycle
                  </p>
                  <p className="text-emerald-800 text-sm mb-4">
                    CapturePilot&apos;s pipeline keeps your contracts moving from award through
                    closeout — so you never lose track of a final invoice, a pending release, or
                    an overdue DCAA response.
                  </p>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-800 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="quick-closeout" number="07" title="Quick Closeout Procedures: How to Speed Things Up" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Quick closeout is one of the most underused tools in government contracting. FAR
              42.708 authorizes the contracting officer and contractor to negotiate final indirect
              cost rates on a contract-by-contract basis — without waiting for a full DCAA audit
              — when the benefits of waiting do not justify the delay.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>FAR 42.708 threshold (government-wide):</strong> Unsettled direct and
              indirect costs must not exceed the <strong>lesser of $1,000,000 or 10 percent</strong>{" "}
              of the total contract value. The contract must be physically complete and the
              contracting officer must determine that quick closeout serves the government&apos;s
              interest.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>DFARS 242.708 (DoD only — updated March 1, 2023):</strong> DoD raised the
              threshold to <strong>$2 million</strong> in unsettled costs, and additionally gave
              DCMA Administrative Contracting Officers authority to negotiate a quick closeout
              settlement regardless of dollar value or percentage when they determine it is in
              the government&apos;s best interest. This is a significant expansion — on DoD contracts,
              quick closeout is now available across a much wider range of contract sizes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-stone-900 text-sm">When quick closeout makes sense</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Contract value is relatively small",
                    "Provisional rates are close to actual rates — small adjustment expected",
                    "Contractor has adequate records to support a negotiated settlement",
                    "DCAA audit would take longer than the FAR standard allows",
                    "Both parties want to deobligate excess funds promptly",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-stone-700 flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="font-bold text-stone-900 text-sm">When it is less appropriate</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Large contract value with material rate differences",
                    "Significant questioned costs or audit findings pending",
                    "Active disputes or claims between the parties",
                    "Records are insufficient to support a negotiated rate",
                    "Agency policy requires full DCAA audit regardless of contract size",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-stone-700 flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              To request quick closeout, write a letter to the contracting officer and
              administrative contracting officer (ACO) making the case: cite FAR 42.708, note
              the time elapsed since physical completion, compare your provisional rates to
              your actual rates using available data, and propose a negotiated settlement value.
              The government cannot be compelled to use quick closeout, but a well-reasoned
              request with supporting data is often accepted.
            </p>

            <Callout icon={Lightbulb} color="blue" title="Quick closeout is a negotiation">
              When you propose quick closeout, you are opening a negotiation on your final
              indirect rates. If your actual rates were lower than provisional, a quick closeout
              may mean paying back money to the government — which can still be the right choice
              if it gets the contract closed and the final payment processed. If rates ran higher,
              quick closeout gives you a path to recover the difference without waiting years.
              Analyze your actual cost data before proposing — know which direction the
              adjustment runs.
            </Callout>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="cpars-performance" number="08" title="CPARS: Your Performance Rating at Closeout" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Closeout is when your performance evaluation gets finalized in the Contractor
              Performance Assessment Reporting System (CPARS). The contracting officer is
              required to complete a CPARS evaluation for most contracts over $250,000 for
              supplies and services and over $1 million for construction and A&amp;E work.
              The evaluation covers the performance period and is published to a government-wide
              database that source selection officials consult when reviewing{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 underline font-medium">
                past performance
              </Link>{" "}
              on future proposals.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              What this means for you at closeout: the COR (Contracting Officer&apos;s
              Representative) or CO enters their evaluation of your performance across categories
              like quality, schedule, cost control, management, and regulatory compliance.
              You receive a copy and have 14 days to review and add a contractor comment.
              After that, the rating is finalized and becomes part of your permanent record.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h4 className="font-bold text-stone-900 mb-4">CPARS ratings scale — what each level means</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-stone-200">
                      <th className="text-left p-2 font-bold text-stone-900">Rating</th>
                      <th className="text-left p-2 font-bold text-stone-900">What it signals</th>
                      <th className="text-left p-2 font-bold text-stone-900">Impact on future bids</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { rating: "Exceptional", signal: "Performance significantly exceeded all requirements", impact: "Strong positive: source selection officials cite this explicitly", bg: "bg-emerald-50" },
                      { rating: "Very Good", signal: "Performance exceeded requirements", impact: "Positive: the standard target for experienced contractors", bg: "bg-blue-50" },
                      { rating: "Satisfactory", signal: "Met requirements with some minor problems", impact: "Neutral to slightly positive — acceptable but not differentiating", bg: "bg-stone-50" },
                      { rating: "Marginal", signal: "Performance had problems; marginal risk of unsuccessful completion", impact: "Negative: evaluators weigh this heavily in competitive source selections", bg: "bg-amber-50" },
                      { rating: "Unsatisfactory", signal: "Significant problems; unsuccessful completion", impact: "Severe: can preclude award on competitive procurements", bg: "bg-red-50" },
                    ].map((row, i) => (
                      <tr key={i} className={`${row.bg} border-b border-stone-200`}>
                        <td className="p-2 font-bold text-stone-900">{row.rating}</td>
                        <td className="p-2 text-stone-600">{row.signal}</td>
                        <td className="p-2 text-stone-600">{row.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Do not ignore your CPARS review window. If you receive a rating you disagree
              with — especially a Marginal or Unsatisfactory — your contractor comment is the
              only official record of your rebuttal. Write a specific, factual response that
              addresses the specific findings. Avoid defensiveness; use documentation to show
              what actually happened. That comment becomes part of every future evaluation
              official&apos;s view of that rating.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              On a positive note: if the COR completed interim CPARS evaluations during
              performance that rated you Exceptional or Very Good, those ratings carry into
              the closeout evaluation and you can reference them in your CPARS comment to
              create a consistent record. Proactively managing your CPARS record — including
              knowing when evaluations are due — is part of a professional{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 underline font-medium">
                contract pipeline management
              </Link>{" "}
              process.
            </p>
          </div>

          {/* ── Section 9 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-problems" number="09" title="Eight Problems That Delay Final Payment" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Most closeout delays are preventable. These eight problems account for the vast
              majority of stalled contract files.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  number: "01",
                  title: "Final invoice not marked final",
                  desc: "Your last invoice was submitted through WAWF or the agency portal but not designated as 'Final.' The government processes it as a progress payment. The close-out trigger never fires, and neither does your retainage release.",
                  severity: "High",
                },
                {
                  number: "02",
                  title: "Release of claims sitting unsigned",
                  desc: "The contracting officer sent you a closing statement to sign. It went to an inbox and sat. No release, no final payment. Track your closeout correspondence like you track your invoices — with due dates and follow-ups.",
                  severity: "High",
                },
                {
                  number: "03",
                  title: "Outstanding government-furnished property",
                  desc: "You returned the GFP, but never got written confirmation and the property administrator never issued a clearance. Without the clearance, the file cannot close. Follow up in writing until you have the clearance document in hand.",
                  severity: "High",
                },
                {
                  number: "04",
                  title: "Unresolved subcontractor costs",
                  desc: "One of your subcontractors submitted a late invoice or has a disputed amount. Until all subcontractor costs are settled and released, the prime contract cannot administratively close. Build subcontractor closeout into your own closeout schedule.",
                  severity: "High",
                },
                {
                  number: "05",
                  title: "DCAA audit queue delay — no action taken",
                  desc: "Your incurred cost proposal is in DCAA's queue and you have not followed up. Engage your DCAA auditor directly. Ask about the audit status, provide any additional data requested promptly, and proactively raise quick closeout with the CO if the wait is unreasonable.",
                  severity: "Medium",
                },
                {
                  number: "06",
                  title: "Contract modifications not fully priced",
                  desc: "A modification was issued during performance that changed scope, but the equitable adjustment was never negotiated and definitized. That open modification keeps the file from closing. Pursue definitization of all outstanding mods before you submit your final invoice.",
                  severity: "Medium",
                },
                {
                  number: "07",
                  title: "Patent or royalty report not submitted",
                  desc: "If your contract included R&D or IP deliverables, the government must clear your patent report before closing. If you never submitted one, the file is incomplete. Check your contract clauses — particularly if you performed under any research task orders.",
                  severity: "Medium",
                },
                {
                  number: "08",
                  title: "No follow-up after submission",
                  desc: "You submitted everything correctly — and then stopped tracking. Government closeout offices have backlogs. A file that sits unworked is not being actively processed. Email the administrative contracting officer 30 days after your final submission. Email again at 60 days. Contractors who follow up get closed; contractors who wait do not.",
                  severity: "Medium",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="flex-shrink-0 text-center">
                    <span className="text-2xl font-black text-stone-200">{item.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          item.severity === "High"
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 10 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="next-contract" number="10" title="Using Closeout Data to Win the Next Contract" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Contract closeout is administrative work, but it generates data that is strategically
              valuable if you capture it. Most contractors file the closeout documents, collect
              the final payment, and move on. The ones who build durable GovCon operations treat
              closeout as a debrief.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Award,
                  label: "Performance data to capture",
                  items: [
                    "Your CPARS rating and which factors drove it",
                    "Schedule performance — was period of performance met?",
                    "Cost control data — actual vs. proposed on cost-type work",
                    "Deliverable quality feedback from the COR",
                    "Any issues that generated contracting officer correspondence",
                  ],
                  color: "emerald",
                },
                {
                  icon: TrendingUp,
                  label: "Business intelligence to extract",
                  items: [
                    "Total revenue from the contract vs. proposal estimate",
                    "Actual indirect rates vs. provisional — are your rates calibrated?",
                    "Time from physical completion to final payment",
                    "Were there contract modifications? Why were they issued?",
                    "What would you price differently if you bid this again?",
                  ],
                  color: "blue",
                },
              ].map((col, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-5 ${
                    col.color === "emerald"
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-blue-50 border-blue-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <col.icon
                      className={`w-4 h-4 ${
                        col.color === "emerald" ? "text-emerald-600" : "text-blue-600"
                      }`}
                    />
                    <span className="font-bold text-stone-900 text-sm">{col.label}</span>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="text-sm text-stone-700 flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-stone-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Your CPARS rating is a direct input to your{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 underline font-medium">
                past performance narrative
              </Link>{" "}
              in future proposals. Exceptional and Very Good ratings from closed contracts are
              your most valuable proposal assets — they are verifiable, government-generated,
              and impossible for competitors to fabricate. Catalog them systematically, including
              the dollar value, the agency, the NAICS code, and the specific performance factors
              that rated highest. When your proposal team builds the{" "}
              <Link href="/blog/technical-volume-government-proposal" className="text-blue-700 underline font-medium">
                technical volume
              </Link>{" "}
              for the next bid, that record is what they draw from.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Indirect rate data from closeout also feeds your forward pricing. If your actual
              G&amp;A ran 18% while you provisionally billed 21%, your pricing model should
              reflect the actual. Accurate forward pricing makes you more competitive on future
              bids and reduces the rate adjustment exposure at the end of the next contract.
            </p>

            <Callout icon={BarChart3} color="sky" title="Closeout as competitive intelligence">
              When you close a contract, request a final debrief from the contracting officer
              or COR about how the agency viewed your performance — even if CPARS has already
              been completed. Contracting officers will often share context about what worked and
              what they would want to see in a follow-on that CPARS scores alone do not capture.
              That conversation is free market intelligence for your next pursuit with that agency.
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                intelligence tools
              </Link>{" "}
              help you track agency relationships and follow-on opportunities so your closed
              contract becomes the foundation for the next one.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 underline font-medium">
                capture management process
              </Link>{" "}
              for your next opportunity with the same agency starts the moment the current
              contract ends — not when the next RFP drops. Agencies prefer incumbents they know,
              and a contractor who closes cleanly, earns a strong CPARS rating, and maintains
              the relationship post-performance is positioned far better for the follow-on than
              one who went dark after delivering the last deliverable.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Close fast. Close clean. And use what you learn to win the next one.
            </p>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 my-10">
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Manage your contracts from award to closeout
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                CapturePilot tracks your government contracts through every stage of the
                lifecycle — from opportunity matching and proposal development through
                performance milestones and closeout actions. Never miss a final invoice
                deadline, a CPARS review window, or a follow-on opportunity again.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-800 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll border-t border-stone-200 pt-12 mt-8">
            <h3 className="text-lg font-bold text-stone-900 mb-6">Related guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/dcaa-audit-small-business",
                  title: "DCAA Audit Preparation: What Small Business Contractors Must Know",
                  category: "Strategy",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
                  category: "Proposals",
                },
                {
                  href: "/blog/cpars-contractor-performance",
                  title: "CPARS Explained: How Contractor Performance Ratings Shape Future Awards",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline: From Discovery to Award",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-pricing-strategies",
                  title: "Government Contract Pricing: Strategies to Win Without Losing Money",
                  category: "Proposals",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process: How Winning Contractors Find and Win Deals",
                  category: "Strategy",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-blue-600 mb-1 block">{post.category}</span>
                    <span className="text-sm font-medium text-stone-900 group-hover:text-blue-700 transition-colors leading-snug block">
                      {post.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
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
