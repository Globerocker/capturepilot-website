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
  Star,
  TrendingUp,
  BarChart3,
  Clock,
  FileText,
  XCircle,
  AlertCircle,
  ClipboardCheck,
  Users,
  Shield,
  Target,
  Award,
  MessageSquare,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-cpars-is", label: "What CPARS Is and Why It Follows You" },
  { id: "evaluation-thresholds", label: "When CPARS Applies: Dollar Thresholds" },
  { id: "rating-scale", label: "The Five-Point Rating Scale" },
  { id: "evaluation-categories", label: "The Six Evaluation Categories" },
  { id: "cpars-process", label: "How the CPARS Process Works" },
  { id: "responding", label: "How to Respond to Your Evaluation" },
  { id: "disputing", label: "Disputing a Negative CPARS Rating" },
  { id: "source-selection", label: "How Past Performance Is Used Against You" },
  { id: "strategies", label: "Strategies to Protect Your CPARS Record" },
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

export default function CparsContractorPerformancePage() {
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
            <span className="text-stone-900 font-medium">CPARS Explained</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <BarChart3 className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            CPARS Explained:{" "}
            <span className="gradient-text">How Contractor Performance Ratings Shape Future Awards</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government files roughly{" "}
            <strong className="text-stone-700">120,000 CPARS evaluations per year</strong>. Every one of them follows a
            contractor into their next bid. One Marginal rating on a contract you thought was routine can cost you the
            next award — and you may not even know it&apos;s there. Here&apos;s everything you need to know about the
            system that tracks your performance across every agency, every dollar, every year.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 animate-fade-in-up animate-delay-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 11 min read
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Published June 16, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Target className="w-4 h-4" /> Strategy
            </span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 py-10 border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Table of Contents</p>
          <ol className="grid sm:grid-cols-2 gap-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors group"
                >
                  <span className="text-xs font-bold text-blue-500 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="group-hover:underline">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Article Body */}
      <article ref={articleRef} className="px-6 py-16">
        <div className="max-w-4xl mx-auto prose-reset">

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-cpars-is" number="01" title="What CPARS Is and Why It Follows You" />
            <p className="text-stone-700 leading-relaxed mb-4">
              CPARS — the Contractor Performance Assessment Reporting System — is the federal government&apos;s official
              report card system for contractors. Every time you complete a significant period of performance on a
              qualifying contract, the contracting officer (CO) fills out a Contractor Performance Assessment Report
              (CPAR) rating your work across several categories. That report then flows automatically into the{" "}
              <strong>Past Performance Information Retrieval System (PPIRS)</strong>, where it becomes part of your
              permanent searchable record.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Think of PPIRS as your federal credit score database. When you submit a proposal on any future contract,
              the source selection team pulls your PPIRS record. They see every CPARS rating you&apos;ve received — from
              every agency, on every contract — going back three years for most civilian contracts and six years for
              defense contracts. A strong record accelerates your path to award. A weak one, or gaps in your record, can
              eliminate you from competition before the technical evaluation even starts.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              CPARS is governed by <strong>FAR Subpart 42.15</strong>, which makes contractor performance reporting
              mandatory government-wide. It&apos;s not optional, it&apos;s not informal feedback, and it&apos;s not
              something you can ignore. The system processes evaluations across all civilian and defense agencies from a
              single web portal at cpars.gov.
            </p>

            <Callout icon={Lightbulb} color="sky" title="The PPIRS Connection">
              CPARS is the input mechanism. PPIRS is the retrieval database. When contracting officers say they&apos;re
              &quot;checking your past performance,&quot; they&apos;re pulling your PPIRS record — which is entirely
              populated by CPARS evaluations. The two systems are linked: a completed CPARS evaluation automatically
              transfers to PPIRS within 14 days of finalization.
            </Callout>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="evaluation-thresholds" number="02" title="When CPARS Applies: Dollar Thresholds" />
            <p className="text-stone-700 leading-relaxed mb-4">
              CPARS doesn&apos;t apply to every contract. The threshold triggers depend on contract type, and knowing
              where the lines fall tells you which contracts will generate a CPAR and which won&apos;t.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Contract Type</th>
                    <th className="px-4 py-3 text-left font-semibold">CPARS Threshold</th>
                    <th className="px-4 py-3 text-left font-semibold">Record Retention</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Services &amp; Supplies (civilian)", "Above Simplified Acquisition Threshold (~$250K)", "3 years after completion"],
                    ["Services &amp; IT (DoD)", "Greater than $1 million", "6 years after completion"],
                    ["Construction", "Greater than $750,000", "6 years after completion"],
                    ["Architect-Engineer (A-E)", "Greater than $35,000", "6 years after completion"],
                    ["Commercial Item contracts", "Greater than $7.5 million", "3 years after completion"],
                  ].map(([type, threshold, retention], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td
                        className="px-4 py-3 border-b border-stone-100 font-medium text-stone-800"
                        dangerouslySetInnerHTML={{ __html: type }}
                      />
                      <td className="px-4 py-3 border-b border-stone-100 text-stone-600">{threshold}</td>
                      <td className="px-4 py-3 border-b border-stone-100 text-stone-600">{retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              A few important nuances. First, evaluations happen <em>annually</em> for contracts longer than one year —
              not just at the end. So a three-year contract generates three CPAR evaluations, each one independent. A
              bad year in year two doesn&apos;t get buried by a good year in year three. Second, contracting officers
              can evaluate contracts below these thresholds at their discretion, so the thresholds define the floor, not
              the ceiling.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The Architect-Engineer Trap">
              A-E contracts have a much lower threshold — $35,000 — than almost any other contract type. If your firm
              does design or engineering work for the government, nearly every contract you touch will generate a CPARS
              record. Build your internal tracking and documentation habits accordingly.
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="rating-scale" number="03" title="The Five-Point Rating Scale" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Every CPAR evaluation uses the same five-level rating scale across all categories. Understanding what each
              rating actually means — and the practical difference between adjacent levels — is critical for both
              performing and managing your record.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  rating: "Exceptional",
                  color: "bg-emerald-50 border-emerald-300",
                  badge: "bg-emerald-100 text-emerald-800",
                  icon: Star,
                  iconColor: "text-emerald-600",
                  definition:
                    "Performance significantly exceeded all contract requirements. Nearly all significant aspects were outstanding. This rating requires narrative justification — COs can't give Exceptional without documented, specific reasons.",
                  practical:
                    "This is gold in a source selection. Evaluators explicitly look for Exceptional ratings as discriminators between otherwise-equal competitors.",
                },
                {
                  rating: "Very Good",
                  color: "bg-blue-50 border-blue-300",
                  badge: "bg-blue-100 text-blue-800",
                  icon: TrendingUp,
                  iconColor: "text-blue-600",
                  definition:
                    "Performance exceeded some contract requirements. There were some areas of notable achievement. Also requires documented justification as of recent policy changes.",
                  practical:
                    "The de facto target for most contractors. A consistent Very Good record across multiple contracts is competitive in most source selections.",
                },
                {
                  rating: "Satisfactory",
                  color: "bg-stone-50 border-stone-300",
                  badge: "bg-stone-100 text-stone-700",
                  icon: CheckCircle2,
                  iconColor: "text-stone-500",
                  definition:
                    "Performance met contract requirements. Problems were minor and corrective actions were effective. The baseline — you delivered what was promised.",
                  practical:
                    "Don't assume Satisfactory is safe. On competitive procurements, a Satisfactory record versus a competitor's Very Good or Exceptional record can be a tiebreaker that goes against you.",
                },
                {
                  rating: "Marginal",
                  color: "bg-amber-50 border-amber-300",
                  badge: "bg-amber-100 text-amber-800",
                  icon: AlertCircle,
                  iconColor: "text-amber-600",
                  definition:
                    "Performance did not meet some requirements. Significant government oversight was required. The contractor failed to perform but corrective measures ultimately brought performance to an acceptable level.",
                  practical:
                    "A single Marginal rating can knock you out of competitive awards for years. Contracting officers are required to document why they&apos;d risk awarding to a contractor with a Marginal in their record.",
                },
                {
                  rating: "Unsatisfactory",
                  color: "bg-red-50 border-red-300",
                  badge: "bg-red-100 text-red-800",
                  icon: XCircle,
                  iconColor: "text-red-600",
                  definition:
                    "Performance did not meet requirements. Serious uncorrected deficiencies. The contractor failed to perform and corrective actions were not effective or were not taken.",
                  practical:
                    "An Unsatisfactory rating is a record-level event. It can trigger termination for default on active contracts and will disqualify you from awards that require a past performance threshold.",
                },
              ].map(({ rating, color, badge, icon: Icon, iconColor, definition, practical }) => (
                <div key={rating} className={`rounded-2xl border-l-4 border p-6 ${color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                    <span className={`text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full ${badge}`}>
                      {rating}
                    </span>
                  </div>
                  <p className="text-sm text-stone-700 mb-2">
                    <strong>Definition:</strong> {definition}
                  </p>
                  <p className="text-sm text-stone-600">
                    <strong>Practical impact:</strong> {practical}
                  </p>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Fewer Exceptional Ratings Than You Think">
              A notable shift has occurred in recent years: agencies now require contracting officers to provide detailed
              written justification for any rating above Satisfactory. This documentation burden has driven a measurable
              decline in Exceptional and Very Good ratings. Many COs default to Satisfactory simply because it requires
              less paperwork. You can&apos;t change that policy — but you can actively help your CO document your
              outstanding performance (more on this in section 09).
            </Callout>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="evaluation-categories" number="04" title="The Six Evaluation Categories" />
            <p className="text-stone-700 leading-relaxed mb-4">
              A CPAR doesn&apos;t give you one overall score. The contracting officer rates you separately in up to six
              categories, depending on contract type. Each category gets its own rating from the five-point scale, plus
              narrative comments.
            </p>

            <div className="grid gap-4 my-8">
              {[
                {
                  num: "1",
                  category: "Technical / Quality of Product or Service",
                  icon: Award,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  desc: "The core deliverable. Did you meet the technical specifications? Was the quality of your work product consistent? This is the most heavily weighted category in most source selections. Schedule slips can sometimes be explained; technical deficiencies rarely can.",
                  applies: "All contracts",
                },
                {
                  num: "2",
                  category: "Cost Control",
                  icon: BarChart3,
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                  desc: "Did you manage your costs relative to the target? Relevant primarily on cost-reimbursement and T&M contracts where actual spending matters. On firm-fixed-price contracts, this category may not apply — but if your proposal was priced well and you delivered on budget, COs sometimes note it positively anyway.",
                  applies: "Cost-reimbursement, T&M contracts",
                },
                {
                  num: "3",
                  category: "Schedule / Timeliness",
                  icon: Clock,
                  color: "border-amber-200 bg-amber-50",
                  iconColor: "text-amber-600",
                  desc: "Did you deliver on time? Did you meet interim milestones? Late deliverables, even by days, can cost you a Satisfactory in this category when you otherwise performed well. Track every milestone, document every government-caused delay, and request contract modifications immediately when government actions push your timeline.",
                  applies: "All contracts",
                },
                {
                  num: "4",
                  category: "Management / Business Relations",
                  icon: Users,
                  color: "border-violet-200 bg-violet-50",
                  iconColor: "text-violet-600",
                  desc: "How well did you communicate? Did you escalate problems proactively or wait until the CO found out on their own? This category measures your business relationship — responsiveness, proactive risk communication, accuracy of invoicing, and general professionalism. Contractors often lose points here by being uncommunicative during problems.",
                  applies: "All contracts",
                },
                {
                  num: "5",
                  category: "Small Business Subcontracting",
                  icon: Target,
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                  desc: "If your contract includes a small business subcontracting plan, the CO will rate your compliance with those commitments. Did you actually use the small business subs you promised? Did you report accurately in eSRS (Electronic Subcontracting Reporting System)? Missing your subcontracting goals can cost you a rating here even if everything else went perfectly.",
                  applies: "Large businesses with subcontracting plans",
                },
                {
                  num: "6",
                  category: "Regulatory Compliance",
                  icon: Shield,
                  color: "border-red-200 bg-red-50",
                  iconColor: "text-red-600",
                  desc: "Did you comply with applicable regulations — Davis-Bacon wages, safety requirements, environmental obligations, cyber requirements? This category catches the contractors who deliver technically but cut corners on compliance. A single OSHA citation or cyber incident can turn an otherwise strong evaluation negative here.",
                  applies: "Construction, certain service contracts",
                },
              ].map(({ num, category, icon: Icon, color, iconColor, desc, applies }) => (
                <div key={num} className={`rounded-2xl border p-6 ${color}`}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-current flex items-center justify-center">
                      <Icon className={`w-4 h-4 ${iconColor}`} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-stone-900 text-sm">{category}</h3>
                        <span className="text-xs text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200">
                          {applies}
                        </span>
                      </div>
                      <p className="text-sm text-stone-700 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 my-12 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">Quick Checker</p>
                <h3 className="text-xl font-black mb-2">Know your set-aside eligibility before your next bid</h3>
                <p className="text-blue-100 text-sm">
                  Before you can build a strong CPARS record, you need contracts to perform on. Check your eligibility
                  for SDVOSB, 8(a), HUBZone, and WOSB set-asides in under 2 minutes.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="cpars-process" number="05" title="How the CPARS Process Works" />
            <p className="text-stone-700 leading-relaxed mb-6">
              The evaluation cycle follows a defined sequence. Knowing the timeline lets you prepare documentation and
              responses at the right moment rather than scrambling after the fact.
            </p>

            <div className="space-y-0 my-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-200" aria-hidden="true" />
              {[
                {
                  step: "1",
                  title: "Evaluation Initiated",
                  timing: "Annually + at contract completion",
                  desc: "The Assessing Official (AO) — typically your program CO or COTR — opens a new evaluation in the CPARS portal. For contracts longer than a year, this happens at each 12-month anniversary of the award date, plus a final evaluation when the contract closes.",
                  icon: FileText,
                },
                {
                  step: "2",
                  title: "Government Completes Draft Rating",
                  timing: "30–60 days from evaluation period end",
                  desc: "The AO enters narrative comments and selects a rating for each applicable category. FAR 42.1503 requires agencies to complete evaluations within 120 days after the end of the evaluation period. In practice, many agencies take the full window.",
                  icon: ClipboardCheck,
                },
                {
                  step: "3",
                  title: "Contractor Notification",
                  timing: "Via CPARS portal email",
                  desc: "You receive an automated email from cpars.gov notifying you that a draft evaluation is available for review. This email goes to your registered CPARS point of contact — make sure that contact is current and actively monitored. A missed notification means a missed response window.",
                  icon: MessageSquare,
                },
                {
                  step: "4",
                  title: "Your 30-Day Response Window",
                  timing: "30 calendar days",
                  desc: "Per FAR 42.1503(b)(6), you have 30 calendar days to review the draft and submit your formal comments. You can concur with the evaluation, non-concur with specific ratings, or provide additional context. This window closes hard — if you miss it, the evaluation proceeds without your input.",
                  icon: Clock,
                },
                {
                  step: "5",
                  title: "Reviewing Official Review",
                  timing: "Required for any dispute",
                  desc: "If you non-concur with any rating, a Reviewing Official (RO) — typically one level above the CO — must review the evaluation. The RO can uphold the rating, modify it, or direct additional documentation. Both your comments and the RO's decision become part of the permanent record.",
                  icon: Users,
                },
                {
                  step: "6",
                  title: "Finalization and Transfer to PPIRS",
                  timing: "Automatic within ~14 days",
                  desc: "Once finalized, the evaluation automatically transfers to PPIRS where it becomes visible to contracting officers running source selections. Your comments and any RO decisions travel with the evaluation — future evaluators see the full picture, including any disputes.",
                  icon: CheckCircle2,
                },
              ].map(({ step, title, timing, desc, icon: Icon }) => (
                <div key={step} className="relative pl-14 pb-8">
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm z-10">
                    {step}
                  </div>
                  <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover-lift">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-blue-600" />
                      <h3 className="font-bold text-stone-900 text-sm">{title}</h3>
                      <span className="ml-auto text-xs text-stone-400 bg-stone-50 px-2 py-0.5 rounded-full border border-stone-100">
                        {timing}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="responding" number="06" title="How to Respond to Your Evaluation" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Most contractors either ignore their CPARS notification or dash off a one-liner when they should be using
              the full 30-day window strategically. Your response becomes a permanent part of the record — it shows up
              in PPIRS right alongside the rating. That means future source selection officials read both the
              government&apos;s narrative and yours.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              When you get the notification, do four things immediately:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  num: "01",
                  title: "Pull your contract documentation",
                  desc: "Gather your delivery receipts, acceptance documentation, milestone completion records, CO emails, and any written acknowledgment of performance issues caused by the government. You need evidence, not memory.",
                  icon: FileText,
                  color: "border-blue-200",
                },
                {
                  num: "02",
                  title: "Compare the narrative to the record",
                  desc: "Read the CO&apos;s narrative carefully. Does it reflect what actually happened? Are there factual inaccuracies? Is any government-caused delay counted against you? These are the gaps you need to address specifically.",
                  icon: ClipboardCheck,
                  color: "border-emerald-200",
                },
                {
                  num: "03",
                  title: "Write a factual, professional response",
                  desc: "General statements accomplish nothing. 'We disagree with this rating' is useless. 'Delivery on line item 0003 occurred on March 4, which was within the government-modified delivery date per Modification P00007 dated February 28' is effective. Attach documentation.",
                  icon: MessageSquare,
                  color: "border-violet-200",
                },
                {
                  num: "04",
                  title: "Formally indicate concur or non-concur",
                  desc: "If you agree with the rating, check concur. If you disagree with any element — even if you think the overall rating is fair — note your specific disagreement in writing. A non-concurrence triggers the mandatory RO review, which at minimum creates a documented record.",
                  icon: CheckCircle2,
                  color: "border-amber-200",
                },
              ].map(({ num, title, desc, icon: Icon, color }) => (
                <div key={num} className={`rounded-2xl border ${color} bg-white p-5 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black text-stone-400">{num}</span>
                    <Icon className="w-4 h-4 text-stone-600" />
                    <h3 className="font-bold text-stone-800 text-sm">{title}</h3>
                  </div>
                  <p
                    className="text-sm text-stone-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="emerald" title="Even Good Ratings Deserve a Response">
              If you receive an Exceptional or Very Good rating, don&apos;t just click concur and move on. Submit a
              brief, professional comment that adds specific detail to the narrative — &quot;We are proud of our
              performance on Task Order 0005, particularly the on-time delivery of the Phase II software integration
              three weeks ahead of the original schedule, achieved without any contract modifications or additional
              funding.&quot; These details help future evaluators see your specific capabilities, not just a
              checkbox-level rating.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              If you want to see how other contractors build their proposal past performance narratives around strong
              CPARS records, see our guide to{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                past performance in government contracts
              </Link>
              .
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="disputing" number="07" title="Disputing a Negative CPARS Rating" />
            <p className="text-stone-700 leading-relaxed mb-4">
              A Marginal or Unsatisfactory rating demands a serious, escalated response. The informal response process
              is step one, but it is not the only tool you have.
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white shadow-sm">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1 text-sm">Step 1: Non-concur and request Reviewing Official review</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Mark your evaluation as non-concur and formally request RO review. The RO is required to review
                    every disputed evaluation — this is not discretionary. Submit your documented response with all
                    supporting evidence attached in the CPARS portal. The RO&apos;s written decision becomes part of the
                    permanent record regardless of outcome.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white shadow-sm">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1 text-sm">Step 2: Submit a formal contract claim under the Contract Disputes Act</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    If the RO upholds the negative rating, your next avenue is a formal claim under the Contract
                    Disputes Act (41 U.S.C. § 7101 et seq.), submitted to the contracting officer for a Contracting
                    Officer&apos;s Final Decision (COFD). This is a legal process — you&apos;re formally asserting a
                    contractual right. Engage a government contracts attorney before filing.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white shadow-sm">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1 text-sm">Step 3: Appeal to Board of Contract Appeals or Court of Federal Claims</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    If the COFD denies your claim, you can appeal to the Armed Services Board of Contract Appeals
                    (ASBCA), Civilian Board of Contract Appeals (CBCA), or the U.S. Court of Federal Claims. Note the
                    critical limitation: courts cannot order the government to change or remove a rating. What they can
                    do is award money damages if you can prove the rating was factually incorrect and caused you to lose
                    an award.
                  </p>
                </div>
              </div>
            </div>

            <Callout icon={AlertTriangle} color="red" title="What Courts Cannot Do">
              Courts and Boards of Contract Appeals have consistently held that they cannot issue injunctive relief
              directing the government to revise or remove a CPARS rating. You can win a damages claim — but the
              underlying rating stays in PPIRS. This is why your response in the initial 30-day window, and at the RO
              review stage, is your most powerful leverage point. Once a rating is finalized and the appeals process
              runs its course, your comments in PPIRS are your only remaining tool.
            </Callout>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="source-selection" number="08" title="How Past Performance Is Used Against You" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Source selection officials use PPIRS records in two distinct ways, and most contractors only prepare for
              one of them.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The first use is the <strong>relevancy filter</strong>. Before evaluating your ratings, evaluators
              determine which contracts in your PPIRS record are relevant to the current requirement. Relevant means
              similar scope, complexity, and dollar value. A $50,000 janitorial contract doesn&apos;t make your past
              performance relevant for a $5 million facility management award. If none of your records are deemed
              relevant, you may receive a &quot;neutral&quot; or &quot;unknown&quot; past performance rating — which
              puts you in a worse competitive position than a contractor with a Satisfactory record.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The second use is the <strong>comparative assessment</strong>. Once relevancy is established, evaluators
              compare your record to other offerors. A source selection advisory council (SSAC) may weight past
              performance alongside technical approach and price. FAR 15.305(a)(2) requires agencies to use past
              performance as an evaluation factor for negotiated procurements above the simplified acquisition
              threshold — and PPIRS is the primary source for that evaluation.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Past Performance Confidence Rating</th>
                    <th className="px-4 py-3 text-left font-semibold">What It Signals to Evaluators</th>
                    <th className="px-4 py-3 text-left font-semibold">Competitive Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Substantial Confidence", "Consistent Exceptional / Very Good records", "Strong advantage — often the deciding factor"],
                    ["Satisfactory Confidence", "Mostly Satisfactory with some Very Good", "Neutral — doesn&apos;t help or hurt significantly"],
                    ["Limited Confidence", "Mix of Satisfactory and Marginal records", "Disadvantage — evaluators note the risk"],
                    ["No Confidence", "Marginal / Unsatisfactory record", "Near-automatic elimination on most awards"],
                    ["Unknown / Neutral", "Insufficient relevant records", "Treated as neutral — can help new entrants, hurts experienced cos"],
                  ].map(([confidence, signals, impact], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border-b border-stone-100 font-medium text-stone-800"
                          dangerouslySetInnerHTML={{ __html: confidence }} />
                      <td className="px-4 py-3 border-b border-stone-100 text-stone-600"
                          dangerouslySetInnerHTML={{ __html: signals }} />
                      <td className="px-4 py-3 border-b border-stone-100 text-stone-600"
                          dangerouslySetInnerHTML={{ __html: impact }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              One more thing worth knowing: agencies can pull PPIRS records on subcontractors, not just prime
              contractors. If you&apos;re teaming as a sub, the prime is likely checking your record before they commit
              to you. A bad CPARS record doesn&apos;t just hurt your direct bids — it affects your ability to get on
              winning teams.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For context on how teams evaluate these kinds of risks in teaming arrangements, see our guide on{" "}
              <Link
                href="/blog/government-contract-teaming-agreement"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                government contract teaming agreements
              </Link>
              . And if you want to understand how win probability is calculated before you even bid, read our explainer
              on{" "}
              <Link
                href="/blog/pwin-probability-of-win"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                probability of win (PWin)
              </Link>
              .
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll rounded-2xl border border-emerald-200 bg-emerald-50 p-8 my-12">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Intelligence</p>
                <h3 className="text-xl font-black text-stone-900 mb-2">Track competitor CPARS records before you bid</h3>
                <p className="text-stone-600 text-sm">
                  CapturePilot&apos;s Intelligence module surfaces past performance patterns for your competitors — so you
                  know before you bid whether you have a past performance advantage or disadvantage.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="shrink-0 bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-800 transition-colors flex items-center gap-2 text-sm"
              >
                Start 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="strategies" number="09" title="Strategies to Protect Your CPARS Record" />
            <p className="text-stone-700 leading-relaxed mb-4">
              The most effective CPARS strategy starts at contract kickoff, not 30 days before the evaluation window
              closes. These are the practices that separate contractors who consistently earn Very Good and Exceptional
              ratings from those who wonder why they keep losing bids.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  icon: FileText,
                  color: "text-blue-600 bg-blue-50",
                  title: "Document every government-caused delay in real time",
                  body: "If the government is late providing GFI (government-furnished information), late approving designs, or slow issuing task orders, document it in writing the day it happens — not in a claim later. Send an email to the CO confirming the delay, the impact on your schedule, and your mitigation plan. That email chain is your evidence when the CO rates your schedule performance as Satisfactory when it should be Very Good.",
                },
                {
                  icon: MessageSquare,
                  color: "text-violet-600 bg-violet-50",
                  title: "Request mid-point informal performance discussions",
                  body: "FAR 42.1503 doesn't require agencies to give you feedback before the formal evaluation — but nothing prevents you from asking. Mid-contract performance reviews are common on larger contracts. Request one. Ask directly: 'Are there any areas where our performance is not meeting your expectations?' A CO who is planning to rate you Marginal six months from now should be raising those concerns today. If they're not, put your concern in writing.",
                },
                {
                  icon: ClipboardCheck,
                  color: "text-emerald-600 bg-emerald-50",
                  title: "Build an internal performance dossier",
                  body: "Assign someone the job of maintaining a running performance file for every active contract: delivery receipts, acceptance notices, positive customer emails, milestone completion records, QA inspection results. When the CPARS evaluation arrives, you should be able to pull a complete dossier in two hours — not two weeks. Contractors who respond well to CPARS evaluations have the documentation ready; those who respond poorly are hunting for it.",
                },
                {
                  icon: TrendingUp,
                  color: "text-amber-600 bg-amber-50",
                  title: "Help your CO write a better evaluation",
                  body: "The documentation burden for above-Satisfactory ratings has pushed many COs toward rating everything Satisfactory by default. You can counteract this by making the CO's job easier. A week before the evaluation period ends, consider sending a brief, professional email summarizing your notable achievements for the evaluation period — with specific, measurable outcomes ('delivered 47 of 50 deliverables ahead of schedule', 'zero rework requests on Phase I deliverables', 'responded to all requests for information within 4 hours'). COs appreciate the prompt, and specific facts translate directly into narrative for higher ratings.",
                },
                {
                  icon: Users,
                  color: "text-sky-600 bg-sky-50",
                  title: "Make your CO look good",
                  body: "This is the part nobody talks about. Contracting officers develop professional reputations partly based on the performance of their contractors. If you make your CO's life easier — proactive communication, zero surprises, smooth invoicing, professional problem resolution — they're more likely to document your exceptional performance because it reflects well on them too. The best CPARS records aren't just earned by performance; they're built through genuine professional relationships.",
                },
                {
                  icon: Shield,
                  color: "text-red-600 bg-red-50",
                  title: "Never miss your small business subcontracting goals",
                  body: "If your contract includes a subcontracting plan, treat the reporting deadlines in eSRS as sacred. A Marginal in the Small Business Subcontracting category because you failed to meet your SB goal — or just failed to report on time — can drag down an otherwise excellent evaluation. Assign specific ownership, set calendar reminders, and confirm eSRS submissions well before the deadline.",
                },
              ].map(({ icon: Icon, color, title, body }) => (
                <div key={title} className="flex gap-4 p-6 rounded-2xl border border-stone-100 bg-white shadow-sm hover-lift">
                  <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2 text-sm">{title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="blue" title="Use CapturePilot to Track Deadlines">
              The single biggest risk to your CPARS record isn&apos;t a bad evaluation — it&apos;s a missed response
              window. CapturePilot&apos;s{" "}
              <Link href="/features/pipeline" className="underline font-semibold">
                pipeline management
              </Link>{" "}
              lets you track evaluation periods, notification deadlines, and response windows across all active
              contracts. When a CPARS evaluation opens, you want a system that flags it — not an inbox you might
              miss.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4 mt-8">
              CPARS performance also connects directly to your win rate on future bids. For a deeper look at how
              evaluators actually score proposal risk,{" "}
              <Link
                href="/blog/government-contract-win-rate"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                see our analysis of government contract win rates
              </Link>
              . And if you&apos;re still building your initial past performance record and competing for your first
              major awards, our guide to{" "}
              <Link
                href="/blog/capture-management-process"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                the capture management process
              </Link>{" "}
              covers how to position yourself before the RFP drops.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              You can also use CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                proposal tools
              </Link>{" "}
              to structure your past performance sections — pulling your strongest CPARS-backed references and framing
              them for maximum relevance against each solicitation&apos;s evaluation criteria. For more proposal
              strategy, see our guides on{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                past performance
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/technical-volume-government-proposal"
                className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
              >
                writing a winning technical volume
              </Link>
              .
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 my-12 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">CapturePilot</p>
                <h3 className="text-xl font-black mb-2">Win more. Track everything. Build a record that closes deals.</h3>
                <p className="text-stone-300 text-sm">
                  From opportunity discovery through proposal delivery and performance tracking, CapturePilot gives
                  small business and veteran-owned contractors the infrastructure that previously only large GovCon
                  firms could afford.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href={SIGNUP_URL}
                  className="bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center gap-2 text-sm"
                >
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="border border-stone-600 text-stone-200 font-bold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors flex items-center gap-2 text-sm text-center justify-center"
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
