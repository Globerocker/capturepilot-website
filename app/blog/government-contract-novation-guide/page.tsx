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
  RefreshCw,
  Building2,
  UserCheck,
  ListChecks,
  ArrowLeftRight,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-novation", label: "What Contract Novation Actually Is" },
  { id: "anti-assignment-act", label: "The Anti-Assignment Act: Why You Can't Just Transfer a Contract" },
  { id: "when-required", label: "When Novation Is Required (and When It Isn't)" },
  { id: "documents-required", label: "The FAR 42.1204 Document Checklist" },
  { id: "timeline", label: "How Long the Process Takes" },
  { id: "change-of-name", label: "Change-of-Name Agreements: The Simpler Alternative" },
  { id: "recertification", label: "Recertification and Set-Aside Eligibility" },
  { id: "common-mistakes", label: "Mistakes That Derail Novations" },
  { id: "protect-portfolio", label: "How to Protect Your Contract Portfolio in M&A" },
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
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function GovernmentContractNovationPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">Contract Novation</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Gavel className="w-4 h-4" />
            Advanced GovCon
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-900 mb-6 animate-fade-in-up leading-tight">
            Government Contract Novation: How to Transfer a Federal Contract When Your Business Is Acquired
          </h1>

          <p className="text-xl text-stone-600 mb-8 animate-fade-in-up leading-relaxed">
            Your company gets acquired. Or you buy a contractor with active federal work. Either way, those government contracts don't automatically follow the deal — and the Anti-Assignment Act means you can't just transfer them. Here's what the novation process actually requires, how long it takes, and what goes wrong when contractors don't plan for it.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 animate-fade-in-up">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Published September 13, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>FAR Subpart 42.12</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-10 px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 animate-on-scroll">
            <h2 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4">In This Guide</h2>
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center gap-3 text-stone-700 hover:text-indigo-700 transition-colors group text-sm"
                  >
                    <span className="text-xs font-bold text-stone-400 w-5 shrink-0 group-hover:text-indigo-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                    <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 px-6" ref={articleRef}>
        <div className="max-w-4xl mx-auto prose-stone">

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-is-novation" number="01" title="What Contract Novation Actually Is" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              A novation agreement is a three-party contract between the transferor (original contractor), the transferee (new contractor), and the U.S. government. It formally substitutes one contractor for another on an existing federal contract. Without it, the new entity has no legal standing to perform — or get paid.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The governing regulation is FAR Subpart 42.12. It covers two distinct situations: recognizing a successor in interest (when assets transfer to a new entity) and recording a simple change of name (when the legal entity stays the same but the business renames itself). Novation handles the former; change-of-name agreements handle the latter.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The critical thing to understand: the government doesn't have to approve a novation. Per FAR 42.1204, the contracting officer approves only when it's in the government's best interest. In practice, most legitimate business transfers get approved — but the approval isn't a formality, and the contracting officer has real discretion. A poorly assembled novation package, or a transferee that can't demonstrate it can perform, creates genuine risk.
            </p>

            <Callout icon={Lightbulb} color="blue" title="What a Novation Agreement Does">
              <p>The executed novation agreement binds the transferee to all terms of the original contract, releases the transferor from further performance obligations, and provides the government with a legally enforceable commitment from the new entity. Without it, the transferee is performing work it has no contractual right to perform.</p>
            </Callout>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="anti-assignment-act" number="02" title="The Anti-Assignment Act: Why You Can't Just Transfer a Contract" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The Anti-Assignment Act (41 U.S.C. § 6305) prohibits the transfer of a government contract without prior written consent from the contracting officer. This isn't a bureaucratic formality — it's a federal statute with real teeth. Violating it can make the contract void, expose the transferee to claims it performed work without authorization, and potentially bar both parties from future federal contracting.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The reason the law exists is straightforward: the government chose to contract with a specific entity based on that entity's qualifications, past performance, and capabilities. When a business sells its assets, the successor might be a completely different operation. The government needs the chance to evaluate whether that successor can actually do the work.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              FAR Subpart 42.12 provides the regulatory pathway around this prohibition. Follow it correctly and you get a clean transfer. Skip it — or assume the deal closes and performance continues automatically — and you're exposed.
            </p>

            <Callout icon={AlertTriangle} color="red" title="Real Risk: Unauthorized Assignment">
              <p>If a transferee performs work under a government contract without an executed novation agreement, the government can take the position that no valid contract exists for that performance period. That means no payment obligation, potential recovery of amounts already paid, and a possible suspension or debarment referral. Don't let your M&A attorney tell you this "usually works out" — get the novation in place.</p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="when-required" number="03" title="When Novation Is Required (and When It Isn't)" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The transaction structure determines whether novation is required. This single factor shapes most of the legal and practical complexity in GovCon M&A.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="text-left p-4 font-semibold rounded-tl-xl">Transaction Type</th>
                    <th className="text-left p-4 font-semibold">Novation Required?</th>
                    <th className="text-left p-4 font-semibold rounded-tr-xl">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Asset purchase",
                      required: "Yes",
                      reason: "Contracts don't transfer with assets automatically; a new legal entity is performing",
                      req: true,
                    },
                    {
                      type: "Merger (absorption)",
                      required: "Yes",
                      reason: "The original contracting entity ceases to exist; new entity must be recognized",
                      req: true,
                    },
                    {
                      type: "Stock purchase (target survives)",
                      required: "No — usually",
                      reason: "Legal entity is unchanged; same company continues to hold and perform contracts",
                      req: false,
                    },
                    {
                      type: "Stock purchase (target dissolved post-close)",
                      required: "Yes",
                      reason: "If the acquired entity is merged into the acquirer and dissolved, a novation is needed",
                      req: true,
                    },
                    {
                      type: "Corporate name change only",
                      required: "No",
                      reason: "Use a change-of-name agreement instead — simpler and faster",
                      req: false,
                    },
                    {
                      type: "Internal corporate reorganization",
                      required: "Depends",
                      reason: "If a new legal entity is created and assumes the contracts, yes; if same entity, no",
                      req: null,
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-900 border-b border-stone-100">{row.type}</td>
                      <td className="p-4 border-b border-stone-100">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                          row.req === true ? "bg-red-100 text-red-700" :
                          row.req === false ? "bg-emerald-100 text-emerald-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>
                          {row.req === true ? <XCircle className="w-3 h-3" /> : row.req === false ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {row.required}
                        </span>
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-6">
              Even in a stock purchase where no novation is technically required, contracting officers sometimes expect notification of the ownership change. Many agencies have internal policies requiring written notice. And if the acquired entity's small business status changes as a result of the acquisition — which it often does — there are separate recertification obligations that apply regardless of transaction structure (more on that in Section 7).
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The safest approach: treat every GovCon M&A transaction as requiring legal counsel that understands FAR Subpart 42.12. The wrong assumption about which structure triggers novation has cost buyers months of performance uncertainty.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-white">
            <div className="flex items-start gap-4">
              <UserCheck className="w-8 h-8 shrink-0 mt-1 opacity-80" />
              <div>
                <h3 className="text-xl font-black mb-2">Know Your Eligibility Before the Deal Closes</h3>
                <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                  An acquisition can change your small business status, your set-aside eligibility, and your access to socioeconomic certifications. CapturePilot's Quick Checker runs your current profile against active opportunities so you know exactly where you stand before and after the transaction.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
                >
                  Check your eligibility free
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="documents-required" number="04" title="The FAR 42.1204 Document Checklist" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              FAR 42.1204 specifies what you must submit to the responsible contracting officer when requesting novation recognition. The list is long, and missing any piece delays the entire process. You'll typically need to coordinate across legal, finance, and operations to pull it together.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The standard submission package includes three signed copies of the proposed novation agreement (the form is in FAR 42.1204(d)) plus the following supporting documents:
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  category: "Transaction Documents",
                  items: [
                    "The document describing the proposed transaction (purchase/sale agreement, merger agreement, or memorandum of understanding)",
                    "Bill of sale, if applicable",
                    "Certified list of all affected contracts between transferor and the government",
                  ],
                },
                {
                  category: "Corporate Authority",
                  items: [
                    "Evidence of the transferor's legal authority to enter into the transaction",
                    "Evidence of the transferee's legal authority to enter into the novation agreement",
                    "Certified copies of resolutions of the boards of directors of both transferor and transferee approving the transaction",
                  ],
                },
                {
                  category: "Financial Documentation",
                  items: [
                    "Balance sheet of the transferee as of the date of the last fiscal year (or a recent date if the last fiscal year was more than a year ago)",
                    "Evidence of assets necessary to perform the contracts have been transferred",
                  ],
                },
                {
                  category: "Legal Opinions",
                  items: [
                    "Opinion of legal counsel for the transferor that the transfer was properly authorized under applicable law",
                    "Opinion of legal counsel for the transferee that the transfer was properly authorized under applicable law",
                  ],
                },
                {
                  category: "Capability Demonstration",
                  items: [
                    "Evidence that the transferee assumes all obligations and liabilities of the transferor relevant to the contracts",
                    "Organizational chart of the transferee showing responsible individuals for contract performance",
                  ],
                },
              ].map((group, i) => (
                <div key={i} className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="bg-stone-100 px-4 py-2.5 flex items-center gap-2">
                    <ListChecks className="w-4 h-4 text-indigo-600" />
                    <span className="font-bold text-stone-800 text-sm">{group.category}</span>
                  </div>
                  <div className="p-4 space-y-2">
                    {group.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-6">
              When you have contracts with multiple agencies, you need to submit separate novation packages to each contracting officer (CO) who holds contracts. There's no central novation clearinghouse. If you have 15 contracts spread across DoD, VA, and GSA, you're coordinating with 15 different COs — or more, since a single agency might have multiple COs handling your work.
            </p>

            <Callout icon={Lightbulb} color="amber" title="Practical Tip: Consolidate Under a Lead CO">
              <p>For contractors with many contracts at a single agency (common in DoD), request that the Administrative Contracting Officer (ACO) at a Defense Contract Management Agency (DCMA) office serve as the single point of coordination. DCMA has dedicated novation teams and established processes. Dealing with one experienced CO beats dealing with ten who've never processed a novation before.</p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="timeline" number="05" title="How Long the Process Takes" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Plan for 3 to 6 months. That's the realistic range for a complete novation from submission to executed agreement. Some straightforward packages with a responsive contracting officer close in 60 days. Complex transactions involving dozens of contracts across multiple agencies have taken more than a year.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The FAR imposes no mandatory timeline on the government's review. The American Bar Association has recommended that the government resolve novation requests within 90 days, but this is a recommendation, not a requirement. Contracting officers face no penalty for sitting on a package.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="text-left p-4 font-semibold rounded-tl-xl">Phase</th>
                    <th className="text-left p-4 font-semibold">Who Drives It</th>
                    <th className="text-left p-4 font-semibold rounded-tr-xl">Typical Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { phase: "Identify affected contracts and responsible COs", who: "Transferor/Transferee", duration: "1–2 weeks" },
                    { phase: "Assemble the document package", who: "Legal counsel", duration: "2–4 weeks" },
                    { phase: "Submit packages to each CO", who: "Transferee", duration: "1 week" },
                    { phase: "CO review and legal sufficiency review", who: "Government", duration: "4–12 weeks" },
                    { phase: "Requests for additional information", who: "Both parties", duration: "Variable" },
                    { phase: "CO obtains agency legal review", who: "Government", duration: "2–6 weeks" },
                    { phase: "Novation agreement executed by all parties", who: "All three parties", duration: "1–2 weeks" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-900 border-b border-stone-100">{row.phase}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.who}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-6">
              One timing trap catches a lot of acquirers: the government's fiscal year end is September 30. Submitting a novation package in August or September is asking for trouble. Contracting officers are buried in year-end obligations — they're spending down funds, closing out contracts, and meeting obligation targets. Your novation package lands at the bottom of the pile. Start early or expect to wait until October.
            </p>

            <Callout icon={AlertCircle} color="orange" title="Performance During Pending Novation">
              <p>Here's what most acquirers don't plan for: you close the deal in March, but the novation won't execute until August. Who performs the contracts in the meantime? The standard approach is for the transferor to continue performance under the existing contract while the novation is pending, with the transferee supporting behind the scenes. Some agencies allow interim arrangements, but these require explicit CO coordination — never assume.</p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="change-of-name" number="06" title="Change-of-Name Agreements: The Simpler Alternative" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              If your legal entity doesn't change — only your name does — you don't need a full novation. You need a change-of-name agreement, governed by FAR 42.1205.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The change-of-name process is dramatically simpler. You submit evidence that the legal entity's name has changed (typically the amended articles of incorporation or other state-filed documentation), and the contracting officer issues a bilateral modification to each contract reflecting the new name. No three-party agreement. No financial statements. No legal opinions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="border border-stone-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <ArrowLeftRight className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-stone-900">Novation Agreement</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-stone-600">
                  <li className="flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" /><span>Three-party agreement required</span></li>
                  <li className="flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" /><span>Financial statements, legal opinions</span></li>
                  <li className="flex items-start gap-2"><XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" /><span>3–6+ months processing time</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>Fully transfers contract rights and obligations</span></li>
                </ul>
              </div>
              <div className="border border-stone-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <RefreshCw className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-stone-900">Change-of-Name Agreement</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-stone-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>Bilateral modification to each contract</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>Only needs proof of name change</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>Weeks, not months</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" /><span>Same legal entity continues performing</span></li>
                </ul>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-6">
              The name change also flows through SAM.gov. Update your registration with the new legal name, which generates a new DUNS/UEI mapping if needed, and submit the change-of-name request to each CO holding your contracts. Don't forget to update your GSA Schedule records, CPARS entries, and any active IDIQ vehicle registrations.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="recertification" number="07" title="Recertification and Set-Aside Eligibility" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              This is where acquisitions get complicated for small businesses. When an acquisition occurs, the transferee must recertify its size and socioeconomic status. A January 2026 SBA final rule updated the recertification framework, but the core requirement remains: recertify within 30 days of the qualifying event.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The consequences of a disqualifying recertification are severe. If the transferee no longer qualifies as small after the acquisition, it cannot receive new orders under multiple award contracts that required small business status. On IDIQ vehicles and GSA Schedules, losing your small business status means losing access to set-aside task orders — which may represent the majority of award activity on that vehicle.
            </p>

            <Callout icon={AlertTriangle} color="red" title="Set-Aside Cliff Risk">
              <p>If a large company acquires a small business contractor through an asset purchase, the successor entity — the large company — must recertify as other-than-small after the novation is executed. Existing contracts typically run to completion, but the company can no longer receive new awards, options, or task orders under contracts that require small business status. Run this analysis before the deal closes, not after.</p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-6">
              The analysis gets even more complex for socioeconomic certifications. SDVOSB and VOSB status requires the company to be majority-owned and controlled by a veteran or service-disabled veteran. WOSB requires majority ownership and control by women. 8(a) certification is personal to the program participant. A change in ownership structure can instantly disqualify a company from its most valuable certifications.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              Use CapturePilot's <Link href="/features/intelligence" className="text-indigo-700 font-medium hover:underline">competitive intelligence</Link> tools to map your current set-aside portfolio before any transaction — you need to know exactly which contracts carry set-aside designations and what their base and option year values are. That's the revenue at risk if recertification goes wrong.
            </p>

            <div className="my-8 border border-stone-200 rounded-2xl overflow-hidden">
              <div className="bg-stone-800 text-white px-5 py-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="font-bold text-sm">Post-Acquisition Recertification Checklist</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  "Identify all contracts with small business, SDVOSB, WOSB, 8(a), or HUBZone set-aside designations",
                  "Determine whether the acquiring entity qualifies for each certification post-close",
                  "Recertify size status in SAM.gov within 30 days of the qualifying event",
                  "Notify contracting officers on relevant set-aside contracts of the change",
                  "Assess impact on IDIQ vehicle access and GSA Schedule set-aside ordering",
                  "Consult with SBA on any active 8(a) program agreements — participant status may transfer or terminate",
                  "Update DSBS (Dynamic Small Business Search) profile to reflect accurate certifications",
                  "Review CPARS and past performance records to ensure they attach to the successor entity",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-stone-700">
                    <div className="w-5 h-5 rounded border border-stone-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl border-2 border-indigo-100 bg-indigo-50 p-8">
            <div className="flex items-start gap-4">
              <Building2 className="w-8 h-8 shrink-0 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">Manage Your Pipeline Through the Transition</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  An acquisition creates pipeline disruption. Contracts in novation limbo, set-asides at risk, relationships with COs in flux — CapturePilot's <Link href="/features/pipeline" className="text-indigo-700 font-medium hover:underline">pipeline management</Link> tools help you track every contract through the transition and identify new opportunities that fit your post-close profile.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-700 transition-colors"
                >
                  Start your 30-day free trial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="08" title="Mistakes That Derail Novations" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Most novation problems are predictable. The same mistakes appear repeatedly — and almost all of them trace back to treating the novation as an afterthought rather than a deal condition.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "Starting too late",
                  description: "Many acquirers don't engage on novation until after the deal closes. By then, the transferee is already in legal limbo on any contract where the transferor was the contracting entity. Start the document assembly process during due diligence so you can submit within days of close.",
                  icon: Clock,
                  color: "text-red-500 bg-red-50",
                },
                {
                  title: "Missing contracts in the inventory",
                  description: "The transferee needs a certified list of all contracts being novated. If the transferor's contract management system is disorganized — and many small businesses' systems are — you'll miss active contracts, subcontracts, and purchase orders. Run a USASpending.gov search against the DUNS/UEI to cross-check the transferor's own records.",
                  icon: FileText,
                  color: "text-amber-500 bg-amber-50",
                },
                {
                  title: "Incomplete document packages",
                  description: "Missing a legal opinion or a board resolution stalls the entire review. Contracting officers are not obligated to remind you what's missing — some will simply wait until you follow up. Assign a single point of contact to own the package completeness check before any submission goes out.",
                  icon: AlertCircle,
                  color: "text-orange-500 bg-orange-50",
                },
                {
                  title: "Assuming stock purchase eliminates novation",
                  description: "Stock purchase typically avoids novation — but not always. If the post-closing plan involves merging the target into the acquirer, dissolving the target, or moving contracts to a different legal entity, novation is required. Get a legal opinion specific to the transaction structure.",
                  icon: Gavel,
                  color: "text-indigo-500 bg-indigo-50",
                },
                {
                  title: "Not coordinating with subcontractors",
                  description: "If the transferor held subcontracts under primes where the government isn't a direct party, those subcontracts transfer through commercial contract law, not FAR 42.12. But the prime may have its own flow-down requirements that require novation approval. Audit all subcontracting relationships during due diligence.",
                  icon: ArrowLeftRight,
                  color: "text-sky-500 bg-sky-50",
                },
                {
                  title: "Forgetting OTAs",
                  description: "Other Transaction Agreements (OTAs) are not subject to the FAR, including FAR 42.12. Transfer provisions in OTAs are governed by the specific agreement terms. Most OTA agreements prohibit assignment without agency consent — check each agreement individually.",
                  icon: AlertTriangle,
                  color: "text-violet-500 bg-violet-50",
                },
              ].map((item, i) => (
                <div key={i} className={`flex gap-4 rounded-xl p-5 border border-stone-200`}>
                  <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="protect-portfolio" number="09" title="How to Protect Your Contract Portfolio in M&A" />
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Whether you're the buyer or the seller, the contracts are the asset. They're what you paid for or what you're selling. Protect them like it.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">If you're the seller</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Organize your contract records before you even start the sale process. Know your total contract backlog by contract, the base and option year values, the remaining performance periods, and which COs hold each award. Buyers will require this in due diligence, and disorganized records raise flags and depress valuations.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              Get a representation in the purchase agreement that the buyer will initiate and diligently pursue the novation process. Sellers retain liability under the original contracts until the novation is executed — if the buyer delays and performance lapses, the seller can face claims.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">If you're the buyer</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Build novation risk into your deal timeline and price. A 6-month novation period means 6 months of operating uncertainty on the target's government revenue. Price for it. Require the seller to cooperate with the novation process as a closing condition or post-close obligation, with specific document delivery deadlines.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Before closing, map every contract to its CO and check whether any contracts are in their final option year. A contract expiring during the novation period is revenue at risk — the government won't exercise an option on an unnovated contract if the contracting entity has changed. Flag these in your financial model.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              CapturePilot's <Link href="/features/intelligence" className="text-indigo-700 font-medium hover:underline">intelligence tools</Link> let you research a target's existing contract portfolio, option year structure, and agency relationships before you write the term sheet. That's the right time to do this analysis — not after close.
            </p>

            <Callout icon={BookOpen} color="emerald" title="Related: Managing Your Contract Pipeline">
              <p>
                Once the novation is executed and contracts are properly attributed to the new entity, building a sustainable growth plan means tracking opportunities systematically. See our guide on{" "}
                <Link href="/blog/government-contract-pipeline-management" className="font-medium underline">managing your government contract pipeline</Link>{" "}
                and how to structure your{" "}
                <Link href="/blog/capture-management-process" className="font-medium underline">capture management process</Link>{" "}
                to generate consistent new wins.
              </p>
            </Callout>

            <h3 className="text-xl font-bold text-stone-900 mb-4">After the novation executes</h3>
            <p className="text-stone-700 leading-relaxed mb-6">
              Don't treat the executed novation as the finish line. Update your SAM.gov registration to reflect the transferee entity. Ensure CPARS past performance records are associated with the correct entity — this matters for future source selections. Review any active <Link href="/blog/bid-no-bid-decision-framework" className="text-indigo-700 font-medium hover:underline">bid/no-bid decisions</Link> in your pipeline against your post-acquisition capabilities and set-aside profile. And schedule your annual recertification review — the first annual recertification after an acquisition is when hidden eligibility gaps surface.
            </p>

            <Callout icon={DollarSign} color="sky" title="One More Thing: GSA Schedule Novations">
              <p>GSA Schedules require a separate novation process through GSA's contracting office, in addition to any agency-specific novations. GSA has its own forms and requirements. The GSA Schedule novation typically runs concurrently with other agency novations but is coordinated separately — plan for it explicitly in your post-close task list.</p>
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <h3 className="text-2xl font-black mb-3">Navigate GovCon M&A with Better Intelligence</h3>
            <p className="text-stone-300 text-sm mb-6 leading-relaxed">
              Whether you're evaluating an acquisition target, protecting your contract portfolio through a sale, or rebuilding your pipeline after a transition — CapturePilot gives you the intelligence and tools you need. Book a strategy call and walk through your specific situation with our team.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-100 transition-colors"
              >
                Start your 30-day free trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-stone-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-600 transition-colors"
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related posts */}
          <div className="animate-on-scroll border-t border-stone-100 pt-12">
            <h3 className="text-lg font-black text-stone-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/joint-venture-government-contracts", label: "Small Business Joint Ventures" },
                { href: "/blog/government-contract-pipeline-management", label: "Contract Pipeline Management" },
                { href: "/blog/capture-management-process", label: "Capture Management Process" },
                { href: "/blog/bid-no-bid-decision-framework", label: "Bid/No-Bid Decision Framework" },
                { href: "/blog/government-contract-termination", label: "Termination for Convenience" },
                { href: "/blog/government-contractor-debarment", label: "Contractor Debarment" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 p-4 border border-stone-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all group text-sm font-medium text-stone-700 hover:text-indigo-700"
                >
                  <BookOpen className="w-4 h-4 text-stone-400 group-hover:text-indigo-500" />
                  {link.label}
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 text-indigo-500 transition-opacity" />
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
