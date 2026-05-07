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
  FileText,
  DollarSign,
  Target,
  Zap,
  TrendingUp,
  Star,
  Users,
  Clock,
  Award,
  Sparkles,
  BarChart3,
  Shield,
  AlertCircle,
  ThumbsUp,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-it-matters", label: "Why Past Performance Carries More Weight Than You Think" },
  { id: "cpars-explained", label: "CPARS: Your Government Report Card" },
  { id: "rating-scale", label: "The Rating Scale (and What Exceptional Takes)" },
  { id: "neutral-rating", label: "New Contractors: Neutral Is Not Zero" },
  { id: "commercial-counts", label: "Commercial Experience Counts Too" },
  { id: "building-record", label: "How to Build Past Performance From Scratch" },
  { id: "protecting-cpars", label: "Protecting Your CPARS Record" },
  { id: "writing-section", label: "Writing the Past Performance Volume" },
  { id: "intelligence-angle", label: "Using Past Performance Intelligence to Win" },
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

export default function PastPerformanceGovContractsPage() {
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
            <span className="text-stone-900 font-medium">Past Performance Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Past Performance in Government Contracts:{" "}
            <span className="gradient-text">Why It Matters and How to Build It</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Past performance is evaluated in every negotiated federal competition above $250,000 —
            and it typically accounts for{" "}
            <strong className="text-stone-700">20–30% of your overall evaluation score</strong>.
            Here&apos;s how the system works, what agencies actually look for, and how to build a
            record that beats incumbents.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 7, 2026</span>
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
            id="why-it-matters"
            number="01"
            title="Why Past Performance Carries More Weight Than You Think"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government awards roughly $700 billion in contracts every year. Most of
              that money goes to companies the government has worked with before — or companies that
              can prove they&apos;ve done similar work somewhere else. Past performance is how
              contracting officers manage risk. From their perspective, the safest award is the one
              that goes to a contractor who has already solved this problem without blowing the
              budget or missing milestones.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Under FAR 15.305, past performance is a mandatory evaluation factor for all
              negotiated competitive acquisitions expected to exceed the simplified acquisition
              threshold (currently $250,000). When it&apos;s part of the evaluation, agencies must
              consider the currency and relevance of your performance history, the source of the
              information, the context of the work, and your general trends over time. A single
              great rating from ten years ago won&apos;t help much. Consistent strong performance
              on recent, relevant contracts is what moves evaluators.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              In a best-value source selection — which is how most competitive procurements above
              the simplified acquisition threshold are structured — past performance typically
              carries 20–30% of the total evaluation weight. That means on a $5 million contract,
              a marginal past performance rating could cost you as much as a mediocre technical
              proposal. Many contractors focus exclusively on price and technical approach and let
              their past performance section become an afterthought. That&apos;s a mistake.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The stakes are even higher when you realize that past performance data persists.
              CPARS evaluations follow your company for three years after each contract closes —
              six years for construction and architect-engineer work. A bad rating on a 2024
              contract will show up in source selections through 2027. Build your record
              intentionally or inherit the consequences of neglect.
            </p>
          </div>

          <Callout icon={BarChart3} color="blue" title="How Much Past Performance Actually Weighs">
            Approximately 120,000 CPARS evaluations are submitted annually across federal
            agencies. In most best-value source selections, past performance accounts for 20–30% of
            the total evaluation score. Agencies aren&apos;t required to assign a specific
            numerical weight — they can make it equally important as price, or subordinate to
            technical approach — but the FAR requires it to be a factor above $250,000.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="cpars-explained"
            number="02"
            title="CPARS: Your Government Report Card"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              CPARS stands for Contractor Performance Assessment Reporting System. It&apos;s the
              official government database where contracting officers document how you performed
              on every federal contract valued above the reporting threshold. Since January 2019,
              CPARS has absorbed PPIRS (Past Performance Information Retrieval System) — they&apos;re
              now one system at{" "}
              <a
                href="https://www.cpars.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                cpars.gov
              </a>
              . When a contracting officer evaluates your past performance on a new proposal, this
              is where they look.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The thresholds for mandatory CPARS reporting are:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Contract Type</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">CPARS Threshold</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Record Retained</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Services & supplies (most contracts)",
                        threshold: "$250,000+",
                        retention: "3 years post-completion",
                      },
                      {
                        type: "Construction",
                        threshold: "$750,000+",
                        retention: "6 years post-completion",
                      },
                      {
                        type: "Architect-engineer (A-E) services",
                        threshold: "$35,000+",
                        retention: "6 years post-completion",
                      },
                      {
                        type: "Indefinite Delivery contracts (IDIQs)",
                        threshold: "Task orders above applicable threshold",
                        retention: "3 years post-completion",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                      >
                        <td className="px-5 py-3 text-stone-700 font-medium">{row.type}</td>
                        <td className="px-5 py-3 text-stone-600">{row.threshold}</td>
                        <td className="px-5 py-3 text-stone-500">{row.retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your contracting officer initiates the evaluation, typically within 120 days of
              contract completion (and annually on contracts lasting more than one year). They
              rate you across five areas: quality of product or service, schedule adherence,
              cost control, management effectiveness, and regulatory compliance. Each area gets
              its own narrative and adjectival rating.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Here&apos;s what most contractors miss: you have the right to review your CPARS
              evaluation before it&apos;s finalized. Under FAR 42.1503(d), you receive a copy and
              have 14 calendar days to review and submit a comment. This is not optional. Read
              every evaluation. If you disagree, respond in writing. Your comments become part of
              the permanent record and are visible to every source selection official who pulls
              your CPARS in the future.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Starting in 2026, CPARS evaluations under the DoD also incorporate elements of
              cybersecurity compliance — particularly CMMC 2.0 adherence — within the
              &quot;Regulatory Compliance&quot; rating area. If you hold DoD contracts and
              haven&apos;t achieved CMMC certification, expect this to affect your ratings on new
              evaluations.
            </p>
          </div>

          {/* Inline CTA 1 */}
          <div className="my-10 p-6 rounded-2xl border border-blue-200 bg-blue-50 flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-on-scroll">
            <div className="flex-1">
              <p className="font-bold text-blue-900 mb-1">Know your competitive profile before you bid</p>
              <p className="text-sm text-blue-700">
                CapturePilot&apos;s{" "}
                <Link href="/features/quick-checker" className="underline font-medium">
                  Quick Checker
                </Link>{" "}
                reviews your certifications, NAICS codes, and contract history to flag gaps in
                your profile before they cost you an evaluation.
              </p>
            </div>
            <Link
              href={CHECK_URL}
              className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-all whitespace-nowrap inline-flex items-center gap-2"
            >
              Check eligibility free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="rating-scale"
            number="03"
            title="The Rating Scale (and What Exceptional Actually Takes)"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              CPARS uses five adjectival ratings across each evaluation area. The labels sound
              simple. The standards are not. Many contractors who think they&apos;re performing at
              an &quot;Exceptional&quot; level are getting &quot;Satisfactory&quot; because they
              haven&apos;t met the specific criteria the FAR uses to define each level.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  rating: "Exceptional",
                  badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
                  dot: "bg-emerald-500",
                  desc: "Performance meets contractual requirements and exceeds many to the government's benefit. The contractor independently identified and addressed potential problems before they affected mission performance. This isn't just 'no problems' — it requires documented examples of proactive value delivery. Evaluators must justify Exceptional ratings with specific examples.",
                },
                {
                  rating: "Very Good",
                  badge: "bg-sky-100 text-sky-700 border-sky-200",
                  dot: "bg-sky-500",
                  desc: "Performance meets contractual requirements and exceeds some to the government's benefit. Minor problems occur but the contractor takes effective corrective action. This is the realistic ceiling for most contracts where everything went well but the contractor didn't go substantially beyond the SOW.",
                },
                {
                  rating: "Satisfactory",
                  badge: "bg-blue-100 text-blue-700 border-blue-200",
                  dot: "bg-blue-500",
                  desc: "Performance meets contractual requirements. Problems that occur are addressed with standard corrective action. 'Satisfactory' is not a great rating in competition — it means you did what you were paid to do. In a competitive source selection, satisfactory past performance is table stakes, not an advantage.",
                },
                {
                  rating: "Marginal",
                  badge: "bg-amber-100 text-amber-700 border-amber-200",
                  dot: "bg-amber-500",
                  desc: "Performance does not meet some contractual requirements. Problems are not being satisfactorily addressed and government has had to increase oversight. A Marginal rating is a serious flag in source selections. Expect to be asked to explain it in proposals and interviews.",
                },
                {
                  rating: "Unsatisfactory",
                  badge: "bg-rose-100 text-rose-700 border-rose-200",
                  dot: "bg-rose-500",
                  desc: "Performance does not meet contractual requirements and recovery is not likely. Government is considering contract termination. An Unsatisfactory rating is effectively disqualifying in most source selections and can trigger exclusion from certain contract vehicles. Challenge it immediately if you believe it's inaccurate.",
                },
              ].map((item) => (
                <div
                  key={item.rating}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.dot}`} />
                  <div>
                    <span
                      className={`inline-flex text-xs font-bold px-2.5 py-0.5 rounded-full border mb-2 ${item.badge}`}
                    >
                      {item.rating}
                    </span>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The gap between &quot;Very Good&quot; and &quot;Exceptional&quot; matters most in
              competitive environments. Agencies score past performance on a spectrum — an
              Exceptional rating across all five areas puts you materially ahead of a competitor
              with Very Good ratings. If your goal is repeat business and competitive wins, treat
              every contract as if the evaluation were the deliverable.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Practically, this means starting conversations about performance early. Don&apos;t
              wait until the final evaluation. Ask your contracting officer and COR (Contracting
              Officer&apos;s Representative) how things are going at 30, 60, and 90 days. Document
              every problem you identified and resolved before they had to ask. Those are the
              examples that support Exceptional and Very Good ratings — and they won&apos;t appear
              in the evaluation if you don&apos;t surface them.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Ask for Your Interim Evaluation Early">
            On contracts running longer than one year, CPARS requires annual evaluations. Don&apos;t
            treat these as bureaucratic checkboxes. Request a copy, read it carefully, and use the
            14-day response window to add context where the narrative underrepresents your
            performance. The interim evaluations form the evidentiary record for the final rating.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="neutral-rating"
            number="04"
            title="New Contractors: Neutral Is Not Zero"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The most common misconception among companies entering federal contracting: &quot;We
              can&apos;t win because we have no past performance.&quot; That&apos;s not how the
              FAR works.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Under FAR 15.305(a)(2)(iv), an offeror without relevant past performance history —
              or for whom no information is available — may not be evaluated favorably or
              unfavorably on past performance. You receive a neutral rating. In a best-value
              competition, that neutral stands alongside the historical ratings of other offerors.
              You can still win on technical approach, price, and management approach. A neutral
              past performance rating does not disqualify you — it just removes one area where you
              can score points.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This matters most in smaller procurements where agencies are more willing to take a
              chance on new contractors, set-aside competitions with fewer qualified bidders, and
              opportunities where the agency has been burned by the incumbent and wants someone
              fresh. Targeting those situations when you&apos;re building your record is smart
              strategy.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The neutral rating protection also applies when you&apos;re pursuing contracts in a
              new agency or new service area. Even if you have strong CPARS records in one domain,
              if you&apos;re bidding into a completely different requirement, the agency may treat
              the experience as not directly relevant. Relevance — not just volume — is what
              evaluators weigh.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="commercial-counts"
            number="05"
            title="Commercial Experience Counts Too"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              FAR 15.305(a)(2)(ii) explicitly authorizes contracting officers to consider
              Federal, State, local government, <em>and private (commercial)</em> contracts when
              evaluating past performance. That sentence is doing a lot of work for new
              entrants.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              If you&apos;ve delivered IT services to Fortune 500 companies, facility maintenance
              to commercial real estate firms, or staffing services to private sector clients, that
              history has real value in a federal source selection. The key is relevance —
              the scope, complexity, and nature of the work should be comparable to what the
              government is asking for. A janitorial firm that has cleaned 200,000-square-foot
              commercial buildings has genuinely relevant experience for a federal facility
              maintenance contract, even with zero CPARS records.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The challenge is documentation. Commercial clients don&apos;t generate CPARS
              evaluations. You need to document commercial past performance in your proposals with
              reference contacts, project descriptions, scope summaries, and ideally customer
              letters or testimonials. Use the same five dimensions CPARS uses — quality,
              schedule, cost control, management, and regulatory compliance — to frame each
              commercial reference, even if the client didn&apos;t evaluate you on those terms
              explicitly.
            </p>
            <p className="text-stone-600 leading-relaxed">
              State and local government contracts are underrated here. A contract with a city,
              county, or state agency is government work. It follows similar procurement rules,
              involves public accountability, and signals that your firm can operate within
              government processes. Agencies evaluating your past performance know this. Don&apos;t
              bury state and local contracts in a footnote — present them with the same rigor as
              federal work.
            </p>
          </div>

          <Callout icon={Target} color="sky" title="Subcontracting Builds Your CPARS Record Too">
            As of 2022, small businesses can now include past performance ratings earned as
            joint venture participants and as first-tier subcontractors when submitting bids for
            prime contracts. If you&apos;ve subcontracted on federal work, those project
            references belong in your past performance section. Check with your prime contractor
            about whether CPARS evaluations were documented at the subcontractor level for those
            projects.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="building-record"
            number="06"
            title="How to Build Past Performance From Scratch"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              There&apos;s a real path from zero CPARS records to a competitive past performance
              portfolio. It takes 18–24 months of deliberate work. Here&apos;s the sequence that
              actually moves the needle.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Start with micro-purchases and simplified acquisitions",
                  desc: "Contracts under $15,000 (micro-purchase threshold) can be awarded without competition. Simplified acquisitions under $250,000 skip many of the formal evaluation requirements. These are where new contractors get their first federal work. Win a few, perform well, build the relationship. The contracting officer who awards you a $50,000 purchase order is far more likely to consider you for a $500,000 follow-on than a stranger submitting a cold proposal.",
                },
                {
                  step: "02",
                  title: "Subcontract on a prime contract",
                  desc: "Find prime contractors in your space who are looking for qualified subcontractors. The SBA's SubNet database and the dynamic small business search at sam.gov are starting points. When you subcontract on a prime, you gain federal experience, operational familiarity with government contracting requirements, and a documented reference — even if CPARS isn't generated at the sub level, the prime can provide written performance letters.",
                },
                {
                  step: "03",
                  title: "Pursue teaming agreements for early contracts",
                  desc: "Team with an established prime on a set-aside contract where your company is the small business qualifier. As the managing partner in a teaming arrangement targeting your certifications — 8(a), SDVOSB, WOSB, HUBZone — you can win prime contracts with your partner's performance experience backstopping yours. Read our guide on teaming agreements for the mechanics.",
                },
                {
                  step: "04",
                  title: "Target contracts where you're technically superior",
                  desc: "Agencies set aside contracts specifically because they want small businesses. When you compete in your exact domain against other small businesses with similar performance histories, you level the playing field. A neutral past performance rating plus an exceptional technical approach can beat a satisfactory past performance rating plus a mediocre technical approach.",
                },
                {
                  step: "05",
                  title: "Respond to Sources Sought notices early",
                  desc: "Sources Sought notices are the government's way of gauging market interest before a solicitation is issued. Responding with a capability statement and relevant experience lets contracting officers see you before competition starts. It builds awareness of your firm — and sometimes shapes how the RFP is structured and how past performance is weighted.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The order matters. Don&apos;t skip to step four before you&apos;ve built enough
              operational credibility to perform well if you win. The fastest way to destroy your
              CPARS record before it starts is to win a contract you&apos;re not ready to deliver.
              A Marginal or Unsatisfactory rating on your first government contract is extremely
              hard to recover from.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 underline">
                opportunity matching
              </Link>{" "}
              filters contracts by your certifications, NAICS codes, and contract size range —
              so you can focus on the tier of opportunities that actually fits where you are in
              your maturity curve. Bidding contracts you can&apos;t win or can&apos;t perform is
              waste. Matching opportunity size to your current capabilities is how you build a
              record systematically.
            </p>
          </div>

          {/* Inline CTA 2 */}
          <div className="my-10 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-1">
                <Award className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-xl font-black mb-2">
                  Find the contracts that fit your profile right now
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                  CapturePilot matches you to opportunities you can realistically win — based
                  on your certifications, NAICS codes, and experience level. No more cold-searching
                  SAM.gov for hours.
                </p>
                <Link
                  href={SIGNUP_URL}
                  className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-stone-100 transition-all inline-flex items-center gap-2"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <ul className="text-stone-400 text-sm space-y-2 sm:w-56 flex-shrink-0">
                {[
                  "Matched opportunities daily",
                  "Set-aside and NAICS filtering",
                  "Contract size targeting",
                  "Sources Sought alerts",
                  "Pipeline tracking built in",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="protecting-cpars"
            number="07"
            title="Protecting Your CPARS Record"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A single bad CPARS evaluation doesn&apos;t ruin you — but it follows you for three
              years and will generate questions on every proposal you submit. The time to manage
              your CPARS record is during performance, not after you receive a rating you disagree
              with.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Here&apos;s the most important thing most contractors don&apos;t do: build a
              documentation habit throughout the life of every contract. Keep a shared project log
              that records problems encountered, actions taken, resolution timelines, and customer
              feedback. That log is your evidence base when the evaluation comes. Without it,
              you&apos;re asking an evaluator to recall details from 18 months of contract
              performance from memory. You will not like the result.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="px-5 py-4 border-b border-stone-200 bg-stone-100">
                <p className="font-bold text-stone-900 text-sm">Your rights in the CPARS process</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="text-left px-5 py-3 font-bold text-stone-700">Stage</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-700">What You Can Do</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-700">Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        stage: "Draft evaluation released",
                        action: "Review all five rating areas and narratives; submit written comments",
                        deadline: "14 calendar days",
                      },
                      {
                        stage: "Evaluator responds to your comments",
                        action: "Accept the response or escalate to reviewing official",
                        deadline: "Varies by agency",
                      },
                      {
                        stage: "Final evaluation issued",
                        action: "Your comments are permanently attached to the record",
                        deadline: "Permanent",
                      },
                      {
                        stage: "Post-publication dispute",
                        action: "Request modification through reviewing official if new facts emerge",
                        deadline: "3 years from completion",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                      >
                        <td className="px-5 py-3 text-stone-700 font-medium">{row.stage}</td>
                        <td className="px-5 py-3 text-stone-600">{row.action}</td>
                        <td className="px-5 py-3 text-stone-500 font-mono text-xs">{row.deadline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              When you receive a rating you believe is inaccurate, respond specifically and
              factually. Don&apos;t write a defensive narrative about how hard you worked. Write
              a bullet-point rebuttal that ties each disputed rating area to specific documented
              evidence: delivery dates met, problems resolved, customer emails, change order logs.
              Evaluators who see a well-documented contractor response often revise marginal
              ratings upward — not because they feel bad, but because the documentation changes
              the record.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If a Marginal or Unsatisfactory rating is finalized and you believe it&apos;s
              factually wrong, you have escalation options. Contact the Reviewing Official named
              in your CPARS access portal. If that doesn&apos;t resolve it, some agencies allow
              formal appeals. An attorney specializing in government contracts can help you build
              a formal challenge if the stakes are high enough — a bad CPARS on a $2M+ contract
              that will affect your ability to compete for years is worth professional help.
            </p>
          </div>

          <Callout icon={AlertCircle} color="rose" title="Don't Let a Bad Rating Sit Unanswered">
            Contracting officers reading your CPARS during a source selection see both the ratings
            and your comments. A Marginal rating with no response looks like acceptance. A Marginal
            rating with a clear, evidence-based rebuttal signals a contractor who tracks
            performance closely and pushes back on inaccurate assessments. Source selection
            officials use both pieces of information.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="writing-section"
            number="08"
            title="Writing the Past Performance Volume"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most RFPs ask you to submit a past performance volume as part of your proposal.
              This is separate from the CPARS database — you&apos;re constructing a narrative and
              selecting your best references to present. The evaluator will check CPARS on your
              listed contracts independently. Your job is to choose the right contracts to
              highlight and frame them correctly.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Relevance is the first filter. Read the PWS (Performance Work Statement) or SOW
              carefully before you select references. Your best reference is the one with the
              closest match to scope, size, and complexity — not your largest contract or your
              most recent one. A $3M services contract that matches the SOW beats a $15M contract
              in a different domain every time.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  icon: Target,
                  title: "Match scope to the requirement",
                  desc: "For each reference, explicitly state how the scope, scale, and technical requirements match what the agency is buying now. Don't assume evaluators will make that connection — draw it for them with specific language.",
                },
                {
                  icon: Clock,
                  title: "Prioritize currency",
                  desc: "Recent performance (within 3 years) carries more weight than older contracts. A Very Good rating from 18 months ago means more than an Exceptional from 5 years ago. If your strongest references are aging, accelerate your pipeline to generate more current ones.",
                },
                {
                  icon: TrendingUp,
                  title: "Show your problem-solving",
                  desc: "Every contract has problems. Evaluators aren't looking for flawless execution — they're looking for evidence you identified issues early, escalated appropriately, and resolved them without mission impact. Include 1-2 challenge-and-resolution stories in each reference.",
                },
                {
                  icon: Users,
                  title: "Prep your references",
                  desc: "Call your reference contacts before you submit the proposal. Confirm their contact information is current, remind them of the project and your performance, and let them know they may receive an inquiry from a government evaluator. An unprepared reference who can't recall your work is almost as bad as no reference.",
                },
                {
                  icon: FileText,
                  title: "Use the government's format",
                  desc: "Many RFPs provide a specific past performance matrix or table format. Use it exactly. Don't submit a narrative when a table was requested, and don't submit additional contracts beyond what was asked for — it signals you didn't read the instructions.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <item.icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you have both commercial and federal past performance, lead with the federal
              references if the quality is comparable. If your commercial experience is genuinely
              stronger — more relevant scope, better-documented outcomes, higher complexity — put
              it first and explain the parallels in detail. Agencies evaluating commercial past
              performance under FAR 15.305(a)(2)(ii) are required to consider it; your job is to
              make the relevance obvious.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-blue-700 underline">
                proposal tool
              </Link>{" "}
              includes a past performance library where you can store reference summaries, contact
              information, and scope descriptions — organized by NAICS code and contract type so
              you can pull the right references quickly when an RFP drops. Rebuilding your past
              performance section from scratch on every bid is unnecessary and introduces errors.
              Build the library once and reuse it.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="intelligence-angle"
            number="09"
            title="Using Past Performance Intelligence to Win"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              CPARS data isn&apos;t just about your own record. It&apos;s competitive intelligence
              about your competitors and the incumbents you&apos;re trying to displace.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              When you&apos;re evaluating whether to bid on a contract, one of the first questions
              is: who&apos;s the incumbent, and how have they performed? A well-documented
              incumbent with Exceptional CPARS ratings is going to be very hard to beat on past
              performance alone. Your win strategy shifts to price and technical differentiation.
              An incumbent with a Marginal rating — or a string of Satisfactory ratings with
              documented problems — is vulnerable. The agency is looking for an alternative. Your
              past performance section doesn&apos;t need to be exceptional; it just needs to be
              better than what they have.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This is the intelligence work that separates active capture from passive bidding. In
              the months before an RFP drops, you want to know the incumbent&apos;s performance
              history, any contract modifications or terminations, and any agency communications
              about dissatisfaction. That information shapes your entire bid strategy — from how
              you frame your past performance to what you promise in your technical approach.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline">
                market intelligence
              </Link>{" "}
              tracks incumbent contracts by agency, NAICS, and expiration date, so you know
              which opportunities are coming up and what the competitive landscape looks like.
              Pair that with your{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline">
                pipeline
              </Link>{" "}
              to start working opportunities 6–12 months before the RFP — long enough to build
              relationships with program offices and influence how past performance is weighted in
              the evaluation criteria.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For more on the pre-solicitation strategy that precedes past performance work, read
              our guides on{" "}
              <Link
                href="/blog/sources-sought-notice"
                className="text-blue-700 underline"
              >
                Sources Sought notices
              </Link>{" "}
              and the{" "}
              <Link
                href="/blog/government-proposal-compliance-matrix"
                className="text-blue-700 underline"
              >
                proposal compliance matrix
              </Link>
              . Past performance is the foundation — but winning competitive contracts requires a
              strategy that starts months before the evaluation begins.
            </p>
          </div>

          <Callout icon={TrendingUp} color="amber" title="The 2026 NDAA Past Performance Expansion">
            Section 824 of the FY 2026 National Defense Authorization Act directs the DoD to
            issue guidance expanding how past performance is evaluated in defense procurements.
            The stated goal is to provide more pathways for companies with commercial track records
            to demonstrate capability — particularly relevant for defense-adjacent technology
            companies entering the DoD supply chain for the first time. Watch for updated DoD
            procurement guidance in late 2026.
          </Callout>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Build a Past Performance Record That Wins
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot helps you find the right contracts to build your record, track
                competitor performance, and write past performance volumes that resonate with
                evaluators.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Opportunity matching filtered to your contract size and NAICS",
                  "Incumbent intelligence: who has what, and how they're performing",
                  "Past performance library for proposals",
                  "Sources Sought alerts so you get in early",
                  "Pipeline from discovery to award",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={SIGNUP_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">No credit card required. Cancel any time.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/government-proposal-compliance-matrix",
                  icon: FileText,
                  title: "Proposal Compliance Matrix",
                  desc: "Build the compliance framework that keeps proposals from getting thrown out",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  icon: Target,
                  title: "Find Government Contracts",
                  desc: "SAM.gov search strategies and opportunity pipeline building",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  icon: Shield,
                  title: "SDVOSB Contracts Guide",
                  desc: "The complete guide for service-disabled veteran-owned businesses",
                },
                {
                  href: "/blog/sam-gov-search-tips",
                  icon: Building2,
                  title: "SAM.gov Search Tips",
                  desc: "Stop wasting time on SAM.gov and find real opportunities",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{link.title}</p>
                    <p className="text-xs text-stone-500">{link.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
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
