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
  Target,
  Clock,
  XCircle,
  Shield,
  BarChart3,
  Zap,
  Scale,
  Gavel,
  TrendingUp,
  DollarSign,
  AlertCircle,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-it-is", label: "What a Government Contract Protest Actually Is" },
  { id: "when-to-protest", label: "When a Protest Is Worth Filing" },
  { id: "three-forums", label: "The Three Forums: Agency, GAO, and COFC" },
  { id: "gao-process", label: "The GAO Protest Process Step by Step" },
  { id: "winnable-grounds", label: "The Most Winnable Protest Grounds" },
  { id: "automatic-stay", label: "The Automatic Stay: Your Most Powerful Tool" },
  { id: "debriefing", label: "Getting the Debriefing Right First" },
  { id: "common-mistakes", label: "Mistakes That Kill a Winnable Protest" },
  { id: "cost-benefit", label: "The Cost-Benefit Decision" },
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

export default function GovernmentContractProtestPage() {
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
            <span className="text-stone-900 font-medium">Government Contract Protests</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Scale className="w-4 h-4" /> Advanced Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Protests:{" "}
            <span className="gradient-text">
              When, Why, and How to File One
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            You lost a contract you should have won. The evaluation looks wrong, the award decision
            makes no sense, or the agency clearly favored a competitor. You have rights — and a
            formal process to exercise them. Here's how bid protests actually work, and when
            they're worth pursuing.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 25, 2026</span>
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
            <SectionHeading id="what-it-is" number="01" title="What a Government Contract Protest Actually Is" />

            <p className="text-stone-700 leading-relaxed">
              A government contract protest — also called a bid protest — is a formal objection to
              a federal procurement decision. You're challenging either how the competition was
              structured before an award (a pre-award protest) or how the agency evaluated
              proposals and selected a winner (a post-award protest). The challenge goes to one
              of three venues: the contracting agency itself, the Government Accountability Office
              (GAO), or the U.S. Court of Federal Claims (COFC).
            </p>

            <p className="text-stone-700 leading-relaxed">
              The protest system exists because competition is the legal foundation of federal
              procurement. Under <strong>41 U.S.C. § 3301</strong> and the Competition in
              Contracting Act (CICA), agencies are required to use full and open competition
              except in narrow circumstances. When a contractor believes that requirement was
              violated — through improper sole-source awards, biased evaluations, unstated
              criteria, or procedural errors — a protest is the mechanism for accountability.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The numbers tell you the system has teeth. In fiscal year 2025, the GAO received
              1,688 protest cases. Of those resolved on the merits, 14% were sustained. More
              telling is the <strong>effectiveness rate: 52%</strong> — meaning roughly half of
              all protesters obtained some form of relief, either through a GAO decision in their
              favor or the agency voluntarily taking corrective action rather than defending the
              procurement. That's not a long shot. That's even odds.
            </p>

            <Callout icon={BarChart3} color="blue" title="FY 2025 GAO bid protest statistics">
              <p>
                <strong>1,688</strong> total cases filed (down from FY 2024) ·{" "}
                <strong>14%</strong> sustain rate (protests resolved on the merits) ·{" "}
                <strong>52%</strong> effectiveness rate (relief obtained through sustain or
                voluntary corrective action) · <strong>100 days</strong> maximum decision
                timeline · <strong>$500</strong> filing fee. Source: GAO Bid Protest Annual
                Report to Congress, FY 2025.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              A protest is not a lawsuit against the government in the traditional sense. At the
              GAO level, it's an administrative proceeding. GAO's decisions are technically
              recommendations — the agency can override them, though that's rare in practice.
              The Court of Federal Claims issues binding orders. Understanding that distinction
              matters when you're deciding which forum to use.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="when-to-protest" number="02" title="When a Protest Is Worth Filing" />

            <p className="text-stone-700 leading-relaxed">
              Not every loss warrants a protest. Most losses happen because a competitor had a
              stronger proposal. Filing a protest over a legitimate competitive loss wastes your
              money, strains your relationship with the contracting officer, and clogs the
              system. The question to ask first: <em>is there a specific, documentable legal
              or procedural error, or does something just feel wrong?</em>
            </p>

            <p className="text-stone-700 leading-relaxed">
              "Feeling wrong" is not a protest ground. But the following situations often are:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: AlertCircle,
                  title: "Award defies the evaluation criteria",
                  desc: "The winner scored lower on technical factors but won on price, in a competition where technical merit was supposed to outweigh price.",
                },
                {
                  icon: XCircle,
                  title: "Your proposal was misread",
                  desc: "The debriefing reveals the agency criticized you for something your proposal explicitly addressed. The record doesn't match what you submitted.",
                },
                {
                  icon: Shield,
                  title: "Unstated criteria were applied",
                  desc: "The agency evaluated on factors not disclosed in the solicitation — a requirement for specific software, a geographic preference, an experience threshold that wasn't listed.",
                },
                {
                  icon: Building2,
                  title: "Improper sole-source award",
                  desc: "The agency bypassed competition entirely and awarded directly to a contractor without adequate justification under FAR 6.302.",
                },
                {
                  icon: Target,
                  title: "Small business rules were violated",
                  desc: "A set-aside went to a firm that doesn't meet the size standard, or an 8(a) award went to a participant that had graduated from the program.",
                },
                {
                  icon: FileText,
                  title: "Solicitation was defective",
                  desc: "The RFP contained ambiguous requirements, conflicting instructions, or incorporated terms that violated the FAR — and the agency proceeded anyway.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <div className="font-bold text-stone-900 text-sm mb-1">{item.title}</div>
                  <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The most important word in protest analysis is <em>documented</em>. Your protest
              has to be grounded in the agency's record — the evaluation materials, the source
              selection decision, the debriefing notes. You can't allege that the CO favored a
              competitor based on a hunch. You need something in the paper trail that supports it.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Pre-award protests are different. They challenge solicitation defects before you've
              invested in a full proposal. These are often worth filing even on a cost-benefit
              basis because the ask is clear: fix the solicitation or re-compete. The downside
              risk is low. If you spot an RFP with ambiguous requirements or a set-aside
              designation that looks wrong, a pre-award protest is an efficient correction tool.
            </p>

            <Callout icon={Lightbulb} color="amber" title="The debriefing is your evidence">
              <p>
                Before deciding whether to protest a post-award loss, request a debriefing. For
                civilian agency contracts, you have <strong>3 business days</strong> after
                notification of award to request a debriefing under FAR 15.505-15.506. For DoD
                contracts, enhanced debriefing rights under DFARS give you additional opportunity
                to submit follow-up questions. The debriefing reveals the agency's evaluation
                record — which is the raw material for any protest argument. Don't skip it.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="three-forums" number="03" title="The Three Forums: Agency, GAO, and COFC" />

            <p className="text-stone-700 leading-relaxed">
              You have three choices for where to file. Each has different costs, timelines,
              procedural rules, and strategic implications. The right forum depends on what
              you're trying to accomplish, how quickly you need a decision, and how much
              you're willing to spend.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Forum
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Filing fee
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Decision timeline
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Automatic stay?
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Decision binding?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      forum: "Agency-level",
                      fee: "None",
                      timeline: "35 days (expected)",
                      stay: "Yes, if timely filed",
                      binding: "No (agency decides its own case)",
                    },
                    {
                      forum: "GAO",
                      fee: "$500 via EPDS",
                      timeline: "100 calendar days (statutory maximum)",
                      stay: "Yes — automatic under CICA",
                      binding: "No (recommendations only; rarely overridden)",
                    },
                    {
                      forum: "Court of Federal Claims (COFC)",
                      fee: "$402 + attorney fees",
                      timeline: "Variable; months to over a year",
                      stay: "No — must file for TRO separately",
                      binding: "Yes (federal court order)",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border border-stone-200 font-semibold text-stone-800">
                        {row.forum}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">{row.fee}</td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">{row.timeline}</td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">{row.stay}</td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">{row.binding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              <strong>Agency-level protests</strong> are the fastest and cheapest option.
              Under FAR 33.103, you file directly with the contracting officer, or request an
              independent review by a higher-level agency official. The agency is expected to
              resolve the protest within 35 days. The obvious limitation: the agency is judging
              its own procurement. Some agencies handle these fairly; others are essentially
              rubber stamps. The strategic value is often in preserving your GAO timeline —
              filing an agency protest and then escalating to GAO if you lose keeps your options
              open.
            </p>

            <p className="text-stone-700 leading-relaxed">
              <strong>GAO protests</strong> are the workhorse of the federal protest system.
              The process is structured, the timeline is fixed at 100 days, the $500 fee is
              accessible, and the automatic stay under CICA is a powerful tool (more on that
              below). GAO's decisions are technically recommendations, but agencies follow them
              in the overwhelming majority of cases. For most small businesses, GAO is the
              right forum.
            </p>

            <p className="text-stone-700 leading-relaxed">
              <strong>Court of Federal Claims protests</strong> are for situations where you
              need a binding court order, where the contract value justifies the legal costs,
              or where GAO has already ruled against you and you want a second opinion. COFC
              protests require litigation counsel, involve discovery and briefing schedules,
              and can take a year or more to resolve. The absence of an automatic stay is a
              significant practical disadvantage — without a preliminary injunction, contract
              performance can continue while your case is pending, which often moots the relief
              you're seeking.
            </p>

            <Callout icon={Scale} color="violet" title="You can file in multiple forums, with limits">
              <p>
                You can file at the agency level and then at the GAO if the agency denies your
                protest. You can also file at COFC after a GAO loss. What you cannot do is have
                pending protests at both GAO and COFC simultaneously on the same matter —
                GAO will dismiss a protest if a COFC case involving the same procurement is
                already active.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Know what you&apos;re eligible for before you bid
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Many protests stem from set-aside eligibility issues — awards to firms that
                  don't qualify, or missed opportunities because your own certifications weren't
                  current. CapturePilot's Quick Checker confirms your eligibility in under 2
                  minutes.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="gao-process" number="04" title="The GAO Protest Process Step by Step" />

            <p className="text-stone-700 leading-relaxed">
              The GAO protest process moves fast. Once you file, the clock starts and it doesn't
              stop. Miss a filing window by a single day and your protest is dismissed regardless
              of its merits. Here's exactly how the process works from filing to decision.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "File through EPDS within your deadline",
                  body: "All GAO protests must be filed through GAO's Electronic Protest Docketing System (EPDS). The $500 filing fee is mandatory. For post-award protests, you must file within 10 days of when you knew or should have known the basis for your protest — typically the debriefing date. For pre-award protests, the deadline is 10 days after the solicitation flaw was or should have been apparent. These deadlines are jurisdictional. GAO will dismiss a late protest even if the underlying argument is strong.",
                },
                {
                  step: "02",
                  title: "Automatic stay goes into effect",
                  body: "Once the agency receives notice from GAO that a timely protest has been filed, contract award is stayed (or ongoing performance is suspended) under CICA. The stay remains in place for the duration of the protest unless the agency head issues a stay override — which requires a written determination that urgent and compelling circumstances significantly affecting the national interest won't permit waiting. Overrides are uncommon.",
                },
                {
                  step: "03",
                  title: "Agency files its report (within 30 days)",
                  body: "The agency has 30 days to submit a report to GAO defending the procurement. The report includes the evaluation record, source selection documents, agency legal memorandum, and any other relevant materials. This is the record you'll be arguing against — and it's also the record that often reveals whether your protest arguments hold up.",
                },
                {
                  step: "04",
                  title: "You file comments on the agency report (within 10 days)",
                  body: "You have 10 days after receiving the agency report to file your comments. This is your substantive response to the agency's defense. It's where you identify specific errors in the evaluation record, challenge the agency's legal arguments, and point to the documents that support your position. Don't treat this as a formality — this is the core of your case.",
                },
                {
                  step: "05",
                  title: "Supplemental protests (if new information appears)",
                  body: "If the agency report reveals new grounds for protest that weren't apparent from the debriefing, you can file a supplemental protest within 10 days of discovering that information. This is a critical safeguard — agencies sometimes withhold information at the debriefing stage that only surfaces in the protest record.",
                },
                {
                  step: "06",
                  title: "GAO issues its decision (by day 100)",
                  body: "GAO must issue a decision within 100 calendar days. The decision is publicly available on GAO's website. If GAO sustains your protest, it will typically recommend corrective action: a new evaluation, a re-solicitation, termination of the award, or some other remedy. The agency is expected to comply within 60 days.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              One nuance that trips up many protesters: the effectiveness rate of 52% includes
              cases where the agency took voluntary corrective action — often before GAO even
              issued a decision. Agencies sometimes conclude, after filing their report and
              seeing the protest arguments laid out formally, that defending the procurement
              is not worth it. They withdraw the award, re-evaluate, and correct the issue.
              That outcome counts as effective for the protester, even though GAO never ruled
              on the merits.
            </p>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="winnable-grounds" number="05" title="The Most Winnable Protest Grounds" />

            <p className="text-stone-700 leading-relaxed">
              GAO's FY 2025 annual report identified the three grounds most likely to result
              in a sustained protest: unreasonable technical evaluations, unreasonable cost or
              price evaluations, and unreasonable rejection of a proposal. These aren't abstract
              categories — each maps to specific, identifiable errors in the evaluation record.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  rank: "01",
                  title: "Unreasonable technical evaluation",
                  icon: Target,
                  color: "bg-blue-50 border-blue-200",
                  badgeColor: "bg-blue-100 text-blue-700",
                  examples: [
                    "Assigning you a weakness for a feature your proposal explicitly described — and the evaluation record shows the evaluator didn't read section 3.2 of your technical volume",
                    "Crediting the awardee for capabilities that aren't in their proposal (a real FY 2025 case involved an awardee credited for staffing an 11-month period when they only proposed 9 months of staff)",
                    "Disparate treatment — the same technical approach was rated a strength in the awardee's proposal but ignored or rated neutral in yours",
                    "Applying unstated evaluation criteria, such as requiring an 'innovative' approach when the solicitation said nothing about innovation",
                  ],
                },
                {
                  rank: "02",
                  title: "Unreasonable cost or price evaluation",
                  icon: DollarSign,
                  color: "bg-emerald-50 border-emerald-200",
                  badgeColor: "bg-emerald-100 text-emerald-700",
                  examples: [
                    "Failing to conduct a proper price realism analysis when one was required by the solicitation",
                    "Accepting an awardee's price as realistic despite being significantly below the independent government cost estimate with no documented analysis",
                    "Inconsistent application of cost realism methodology between offerors",
                    "Failing to identify and assess unbalanced pricing that was mathematically unbalanced under FAR 15.404-1(g)",
                  ],
                },
                {
                  rank: "03",
                  title: "Unreasonable rejection of proposal",
                  icon: XCircle,
                  color: "bg-red-50 border-red-200",
                  badgeColor: "bg-red-100 text-red-700",
                  examples: [
                    "Excluding your proposal for a technical deficiency that the solicitation didn't clearly identify as a disqualifying requirement",
                    "Applying a 'go/no-go' criterion that wasn't identified as pass/fail in the RFP",
                    "Rejecting a proposal as late based on an ambiguous deadline provision — particularly when the agency's own system had technical issues",
                    "Disqualifying a small business for alleged size standard non-compliance without referring the matter to SBA for a formal size determination",
                  ],
                },
              ].map((ground) => (
                <div key={ground.rank} className={`rounded-2xl border ${ground.color} overflow-hidden`}>
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-200">
                    <span className={`text-xs font-black px-2 py-0.5 rounded-full ${ground.badgeColor}`}>
                      #{ground.rank} MOST SUSTAINED
                    </span>
                    <ground.icon className="w-4 h-4 text-stone-600" />
                    <h3 className="font-bold text-stone-900">{ground.title}</h3>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {ground.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Beyond these top three, additional grounds that regularly succeed include unjustified
              sole-source awards where competition was required, improper set-aside designations
              (or failures to set aside when the Rule of Two was met), flawed best-value tradeoff
              analysis, and past performance evaluation errors.
            </p>

            <p className="text-stone-700 leading-relaxed">
              One area to watch in 2025 and beyond: GAO implemented an enhanced pleading standard
              requiring protesters to provide "credible allegations supported by evidence" to
              survive a request for dismissal. Vague allegations that the evaluation was unfair,
              without specific factual support tied to the evaluation record, are getting dismissed
              at higher rates. Your protest needs to point to specific documents, specific
              discrepancies, and specific violations.
            </p>

            <Callout icon={TrendingUp} color="sky" title="Intelligence before you bid, not after">
              <p>
                The best protest intelligence is gathered before the RFP closes, not after you
                lose. CapturePilot's{" "}
                <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                  market intelligence tools
                </Link>{" "}
                let you research the incumbent contractor, the agency's historical evaluation
                patterns, and past protests on similar contracts — so you understand the
                competitive landscape before you invest in a proposal. See our guide on{" "}
                <Link href="/blog/incumbent-advantage-government-contracts" className="text-blue-700 underline font-medium">
                  how to beat the incumbent
                </Link>{" "}
                for the strategic approach.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="automatic-stay" number="06" title="The Automatic Stay: Your Most Powerful Tool" />

            <p className="text-stone-700 leading-relaxed">
              The automatic stay is what makes a GAO protest genuinely powerful. When you file
              a timely protest at GAO, contract performance is stopped. The award is frozen.
              The incumbent keeps performing under their existing contract (or performance hasn't
              started yet). This remains in place for up to 100 days while the protest proceeds.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The timing rules for triggering the stay are specific. Under CICA (31 U.S.C. § 3553),
              the stay takes effect if your protest is filed either within <strong>10 days of
              contract award</strong> or within <strong>5 days of the debriefing date offered
              to you</strong> — whichever is later. Filing a day late forfeits the stay even
              if the protest itself is still timely.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                Stay deadline timeline (post-award)
              </h3>
              <div className="space-y-3">
                {[
                  {
                    day: "Day 0",
                    event: "Contract award notice received",
                    note: "Your 10-day clock starts now",
                  },
                  {
                    day: "Day 0–3",
                    event: "Request debriefing (civilian agency: 3 business days; DoD: governed by DFARS)",
                    note: "Requesting the debriefing extends your stay window to 5 days after the debriefing date",
                  },
                  {
                    day: "Day 5–10",
                    event: "Debriefing occurs",
                    note: "For DoD contracts: submit follow-up questions within 2 days to access enhanced debriefing",
                  },
                  {
                    day: "Within 5 days of debriefing",
                    event: "File at GAO to trigger automatic stay",
                    note: "This is your hard deadline for the stay — missing this means performance continues",
                  },
                  {
                    day: "Day 1–100 (from filing)",
                    event: "Stay in effect; agency report, comments, and GAO decision",
                    note: "Agency can request override only for urgent national interest reasons",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-white rounded-xl border border-stone-100">
                    <div className="shrink-0 min-w-[120px]">
                      <span className="text-xs font-bold text-blue-600">{item.day}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{item.event}</p>
                      <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The stay override is worth understanding. An agency head can override the stay
              by issuing a written determination that performance is urgently necessary in the
              national interest and can't wait for the protest to resolve. In practice, overrides
              are uncommon — the documentation burden is high, and agencies are reluctant to
              invite scrutiny of both the procurement and the override decision. When overrides
              do happen, they're concentrated in defense and intelligence contracts where
              operational urgency is genuine.
            </p>

            <p className="text-stone-700 leading-relaxed">
              If you're at the Court of Federal Claims instead of GAO, there is no automatic
              stay. You must separately move for a temporary restraining order or preliminary
              injunction, which requires demonstrating immediate irreparable harm, likelihood
              of success on the merits, the balance of hardships, and public interest factors.
              That's a higher bar than the automatic stay, which takes effect simply by filing
              on time.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-900 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 shrink-0 mt-1 text-blue-400" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Track every loss — your protest window closes fast
                </h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  The 10-day protest clock starts the moment you receive award notification.
                  CapturePilot's pipeline tools log every bid decision and can flag upcoming
                  protest deadlines so you don't miss your window.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="debriefing" number="07" title="Getting the Debriefing Right First" />

            <p className="text-stone-700 leading-relaxed">
              The debriefing is not a consolation meeting. It's your primary intelligence-gathering
              opportunity before deciding whether to protest. How you conduct the debriefing
              determines how strong your protest will be — or whether you'll discover that a
              protest isn't warranted after all.
            </p>

            <p className="text-stone-700 leading-relaxed">
              You're entitled to a post-award debriefing under FAR 15.506 for negotiated
              acquisitions. The agency must provide it. The debriefing should include: your
              overall evaluated price or cost, your technical rating, the awardee's overall
              price or cost and technical rating, the source selection rationale, and the
              strengths and weaknesses of your proposal. What the agency cannot withhold: the
              final evaluation scores.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "Request the debriefing in writing, immediately",
                  body: "Send the debriefing request to the contracting officer via email within 3 business days of award notification (civilian) or the timeframe specified in your solicitation. The clock for your stay window may run from the debriefing date offered — so get the request in fast.",
                },
                {
                  title: "Prepare specific questions in advance",
                  body: "Don't walk in blind. Prepare a list of specific questions about each evaluation factor. Ask for your scores on every sub-factor. Ask for the strengths and weaknesses they documented. Ask for a comparison to the awardee's scores where the FAR permits disclosure. Generic questions get generic answers.",
                },
                {
                  title: "Record everything",
                  body: "Take detailed notes or request that the debriefing be conducted in writing. Many agencies now conduct debriefings via written responses to submitted questions. Written debriefings are better for protest purposes because they create an unambiguous record of what the agency said.",
                },
                {
                  title: "Use DoD's enhanced debriefing rights if available",
                  body: "Under DFARS 215.506-70, DoD contractors have the right to submit written follow-up questions to the debriefing within 2 business days. The agency must respond within 5 business days. This mechanism can surface evaluation details that weren't in the initial debriefing. Critical timing note: under recent Federal Circuit precedent, your 5-day stay window runs from the debriefing date, not the date the follow-up responses come back — so file your protest before the enhanced debriefing process closes if performance is already starting.",
                },
                {
                  title: "Separate the evaluation from the outcome",
                  body: "The debriefing reveals how you were evaluated. That's different from whether you should have won. Evaluate the evaluation. If your technical score was lower because an evaluator missed a key section of your proposal, that's a protest ground. If your technical score was genuinely lower because the awardee submitted a better technical approach, that isn't.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-700 font-black text-sm">{String(i + 1)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="The debriefing timing trap">
              <p>
                In 2025, GAO clarified a timing trap that catches contractors who follow agency
                instructions rather than the FAR. If you submit follow-up questions after a DoD
                enhanced debriefing and the agency takes longer than 5 days to respond, your
                5-day protest window for the automatic stay still starts from the debriefing date
                — not the date you receive the agency's responses. Follow the regulatory timeline,
                not the agency's informal schedule. When in doubt, file the protest before the
                follow-up process closes.
              </p>
            </Callout>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="08" title="Mistakes That Kill a Winnable Protest" />

            <p className="text-stone-700 leading-relaxed">
              The protest rules are procedural in the most unforgiving sense. Strong substantive
              arguments fail because of technical defects in how they were raised or when they
              were filed. Here are the mistakes that turn winnable protests into dismissals.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  wrong: "Filing after the 10-day deadline",
                  right: "Count the days from when you knew or should have known the basis for your protest — not from when you finished researching it. The standard is objective: a reasonably diligent protester would have known. If the debriefing revealed the problem on day 1, your clock started on day 1.",
                },
                {
                  wrong: "Raising new protest grounds after the initial filing without a basis",
                  right: "Supplemental protest grounds must be raised within 10 days of when the information supporting them first became available. Grounds that could have been raised in the initial filing but weren't will be dismissed as untimely supplements.",
                },
                {
                  wrong: "Filing vague allegations without tying them to the record",
                  right: "Under GAO's 2025 enhanced pleading standard, your protest must include credible allegations supported by evidence. 'The evaluation was unfair' without specific citations to the evaluation record is no longer sufficient to survive a motion to dismiss.",
                },
                {
                  wrong: "Assuming you need to win to get value from the protest",
                  right: "Voluntary agency corrective action — which accounts for a significant portion of the 52% effectiveness rate — typically happens before GAO issues a decision. An agency that reviews its record, sees a defensible mistake, and corrects it rather than defending the protest is a protest success. You don't need a formal sustain.",
                },
                {
                  wrong: "Protesting the award amount or business judgment without a legal hook",
                  right: "GAO will not substitute its judgment for the agency's on matters of technical merit or business judgment. You need a legal error — the agency didn't follow its own evaluation criteria, applied an unstated standard, ignored something in your proposal. 'They should have scored us higher' is not a protest ground without showing a specific, documentable procedural or legal violation.",
                },
                {
                  wrong: "Not requesting a protective order for sensitive pricing information",
                  right: "The agency report will contain the awardee's pricing and technical details. If you're represented by counsel, they can view protected materials under a GAO protective order — which is often where the most useful protest ammunition lives. Unrepresented protesters can only see the redacted record.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="flex items-start gap-3 px-5 py-3 bg-red-50 border-b border-stone-200">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-red-700">{item.wrong}</p>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-3 bg-emerald-50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-800">{item.right}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              One underappreciated mistake: protesting against an agency with which you have
              ongoing business, without a genuine basis, and burning the relationship. Contracting
              officers are human beings. A meritless protest is noticed, and it affects how you're
              perceived on future procurements at that agency. Reserve protests for situations
              where the evidence supports a real legal claim.
            </p>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="cost-benefit" number="09" title="The Cost-Benefit Decision" />

            <p className="text-stone-700 leading-relaxed">
              Filing a protest is not free. Even at GAO where the $500 filing fee is minimal,
              the real cost is attorney fees. A well-prepared GAO protest by experienced
              government contracts counsel typically costs between $15,000 and $75,000 depending
              on complexity. Court of Federal Claims litigation starts higher and has no ceiling.
            </p>

            <p className="text-stone-700 leading-relaxed">
              That cost calculus only makes sense relative to the contract value, the strength
              of your protest grounds, and what you're realistically trying to accomplish. Here
              is how to think through it:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Scenario
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Likely worth protesting?
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Strategic rationale
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      scenario: "Contract value $5M+, clear evaluation error documented in debriefing",
                      worth: "Yes",
                      rationale: "Attorney fees are a small percentage of contract value; documented error makes sustain or corrective action likely",
                    },
                    {
                      scenario: "Contract value $500K–$5M, specific legal ground identified",
                      worth: "Case by case",
                      rationale: "Attorney fees are significant relative to contract value; weigh protest strength and probability of corrective action",
                    },
                    {
                      scenario: "Contract value under $250K",
                      worth: "Rarely",
                      rationale: "Legal costs likely exceed realistic recovery; consider whether agency-level protest (no attorney required) is sufficient",
                    },
                    {
                      scenario: "Pre-award protest challenging solicitation defect",
                      worth: "Often yes",
                      rationale: "Cost is lower (narrower scope), remedy is clear (solicitation amendment), and you preserve your ability to compete if the fix occurs",
                    },
                    {
                      scenario: "Strategic protest on a recompete to maintain incumbent",
                      worth: "Sometimes",
                      rationale: "Stay extends your performance period by up to 100 days; legitimate only if there's a real legal ground, not just to delay",
                    },
                    {
                      scenario: "General feeling the evaluation was unfair, no specific legal error",
                      worth: "No",
                      rationale: "Without a documented, specific legal hook, the protest will be dismissed or denied; you'll pay attorney fees with no recovery",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border border-stone-200 text-stone-700">{row.scenario}</td>
                      <td className={`px-4 py-3 border border-stone-200 font-semibold ${row.worth === "Yes" ? "text-emerald-700" : row.worth === "No" ? "text-red-600" : "text-amber-700"}`}>
                        {row.worth}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600 text-xs leading-relaxed">
                        {row.rationale}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              If you win — or the agency takes corrective action — and the re-evaluation results
              in your award, you may be entitled to recover bid and proposal preparation costs
              under <strong>FAR 33.104(h)</strong>. You can also recover protest costs including
              attorney fees if GAO sustains the protest on grounds that are independent of the
              corrective action. This changes the cost-benefit math significantly on larger
              contracts.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The most important discipline is this: evaluate each protest opportunity the same
              way you evaluate a bid opportunity. Use objective criteria.{" "}
              <Link href="/blog/pwin-probability-of-win" className="text-blue-700 hover:underline font-medium">
                Probability of win analysis
              </Link>{" "}
              applies here too — what's the realistic probability of corrective action or sustain,
              what's the value of the recovery, what's the cost to pursue it? Document your
              decision the same way you document a bid/no-bid decision. And use the intelligence
              from every protest, win or lose, to improve your proposals on future procurements.
            </p>

            <Callout icon={Gavel} color="emerald" title="When protest intelligence improves future bids">
              <p>
                Regardless of outcome, a protest gives you access to the full agency evaluation
                record — your scores, the awardee's scores, and the source selection rationale.
                That's more competitive intelligence than you'd ever get otherwise. Contractors
                who review the protected record carefully come away with a detailed map of what
                the agency actually valued, how they evaluated it, and where proposals like yours
                need to be stronger. See our guide on{" "}
                <Link href="/blog/government-contract-win-rate" className="text-blue-700 underline font-medium">
                  improving your government contract win rate
                </Link>{" "}
                for how to apply that intelligence systematically.
              </p>
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Win more contracts before you need to protest
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  The best protest strategy is writing proposals that don't give evaluators
                  room for error. CapturePilot's proposal tools, opportunity matching, and
                  market intelligence help you compete more effectively — so you're winning
                  on merit, not fighting over losses.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-black text-stone-900 text-xl mb-6">Related reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/government-rfp-response-guide",
                  title: "How to Respond to a Government RFP",
                  desc: "A clean proposal record reduces your protest exposure. Step-by-step for writing compliant, competitive responses.",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  title: "Government Contract Win Rates",
                  desc: "What realistic win rates look like and the systematic improvements that actually move the number.",
                },
                {
                  href: "/blog/incumbent-advantage-government-contracts",
                  title: "How to Beat the Incumbent",
                  desc: "Understanding how incumbents win unfair advantages — and how to counter them strategically and legally.",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance in Government Contracts",
                  desc: "Past performance evaluation is one of the top protest grounds. Build a record that's hard to score down.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 transition-colors mb-1 text-sm">
                    {post.title}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 text-blue-600 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-3 h-3" />
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
