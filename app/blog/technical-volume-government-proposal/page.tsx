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
  Zap,
  BarChart3,
  Eye,
  Sparkles,
  XCircle,
  PenLine,
  Search,
  Users,
  Shield,
  ClipboardList,
  TrendingUp,
  Award,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-it-is", label: "What the Technical Volume Actually Is" },
  { id: "how-evaluators-read", label: "How Evaluators Read Your Proposal" },
  { id: "technical-approach", label: "Writing a Technical Approach That Scores" },
  { id: "key-personnel", label: "Key Personnel: Resumes That Win Points" },
  { id: "management-approach", label: "Management Approach: Making Execution Believable" },
  { id: "risk-management", label: "Risk Management: Show You've Thought Through Failure" },
  { id: "section-m", label: "Build Around Section M, Not Your Own Outline" },
  { id: "common-mistakes", label: "Common Technical Volume Mistakes" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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

export default function TechnicalVolumeProposalPage() {
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
            <span className="text-stone-900 font-medium">Technical Volume</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <PenLine className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Writing a Winning Technical Volume{" "}
            <span className="gradient-text">for Government Proposals</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Industry-wide win rates hover around{" "}
            <strong className="text-stone-700">10–20%</strong>. Most losses aren&apos;t decided by
            price — they&apos;re decided in the technical volume. Evaluators score what you write,
            not what you know. This is how to write it so they can actually give you credit.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 9, 2026</span>
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
            id="what-it-is"
            number="01"
            title="What the Technical Volume Actually Is"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The technical volume is not a brochure. It&apos;s not your company overview dressed up
              in government language. It&apos;s your binding argument — delivered in writing — that
              you understand exactly what the government needs, you have a specific plan to deliver it,
              and you can prove it with evidence. Evaluators read it as skeptics, not as advocates.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal competitive acquisitions under{" "}
              <strong>FAR Part 15</strong> typically organize proposals into separate volumes:
              Technical, Management, Past Performance, and Cost/Price. The technical volume covers
              your solution — your methodology, technical approach, tools, and innovations. It is
              almost always the highest-weighted evaluation factor. In competitive source selections,
              technical criteria typically account for{" "}
              <strong>40–60% of the total evaluation score</strong>, with past performance taking
              20–30% and price 20–40%.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              That weighting has a direct implication: if technical is worth 50 points and price is
              worth 30, a mediocre technical volume that gets a 25 loses to a strong technical
              volume scoring 45 — even with a lower price. Price rarely overrides a decisive
              technical gap on full-and-open or small business set-aside competitions. The technical
              volume is where most awards are decided.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                {
                  stat: "40–60%",
                  label: "Typical technical factor weight in federal source selections",
                  icon: Target,
                },
                {
                  stat: "10–20%",
                  label: "Industry-wide win rates on competitive federal bids",
                  icon: BarChart3,
                },
                {
                  stat: "5–10 min",
                  label: "Time evaluators spend on initial section review",
                  icon: Eye,
                },
                {
                  stat: "50–60%",
                  label: "Reduction in proposal prep time with structured tools",
                  icon: Zap,
                },
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
              What gets included in the technical volume — and how it&apos;s structured — is dictated
              by <strong>Section L</strong> (instructions to offerors) and <strong>Section M</strong>{" "}
              (evaluation criteria) of the RFP. These two sections, not your own instincts, define
              the technical volume. Your job is to answer what they ask, in the order they ask it,
              with the depth they signal they care about. Deviating from that structure — even if
              your structure makes more logical sense to you — costs you points.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For an overview of the full proposal process and how to approach Section L and M
              systematically, see our guide on{" "}
              <Link
                href="/blog/government-proposal-compliance-matrix"
                className="text-blue-700 underline font-medium"
              >
                building a compliance matrix for government proposals
              </Link>
              . This post focuses specifically on writing the technical content itself.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="The Technical Volume Is a Scoring Instrument">
            Evaluators don&apos;t read your technical volume to be persuaded — they read it to score
            it against a predetermined rubric. Every paragraph should be written with that rubric
            in mind. If a Section M sub-factor asks for &quot;demonstrated experience with cloud
            migration,&quot; the corresponding paragraph in your technical volume needs to demonstrate
            it explicitly — not imply it, not reference it, but state it with evidence. Evaluators
            can only score what they can point to.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="how-evaluators-read"
            number="02"
            title="How Evaluators Read Your Proposal"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Understanding the evaluation process changes how you write. Most proposals are
              evaluated by a Source Selection Evaluation Board (SSEB) — a panel of government
              subject matter experts who score proposals independently, then reconcile their scores.
              Each evaluator receives a copy of your proposal and a scoring rubric tied to Section M.
              They are not reading as a group. They are reading separately, scoring individually,
              and comparing notes afterward.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              That means your proposal has to be self-explanatory to multiple readers with varying
              depth of subject matter expertise. An evaluator who is a program manager might
              understand your technical approach differently than one who is a contracting officer.
              Write for the least-expert evaluator on the panel — clear, concrete, no unexplained
              jargon — and you serve the whole panel.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The three-pass evaluation method is standard at most agencies:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "Pass 1",
                  title: "Compliance Check (2–3 minutes)",
                  desc: "Evaluators confirm the proposal meets basic Section L requirements: page limits, required sections present, correct format. A proposal that fails here is flagged before the scoring team sees it. This is why compliance comes before content.",
                  color: "bg-red-50 border-red-200",
                  textColor: "text-red-700",
                },
                {
                  step: "Pass 2",
                  title: "Content Review (5–8 minutes per section)",
                  desc: "Each evaluator reads for understanding. They are following their scoring sheet — moving through each evaluation factor in order, looking for the evidence that justifies a rating (Outstanding, Good, Acceptable, Marginal, Unacceptable under FAR 15.305). They highlight what they find. What they don't find, they can't score.",
                  color: "bg-amber-50 border-amber-200",
                  textColor: "text-amber-700",
                },
                {
                  step: "Pass 3",
                  title: "Comparative Scoring (3–5 minutes)",
                  desc: "Evaluators assign preliminary ratings and document strengths, weaknesses, and deficiencies. Strengths are specific — they require cited evidence in your proposal. Weaknesses are where your response was vague, unsubstantiated, or incomplete. Deficiencies are where a required element is missing entirely.",
                  color: "bg-emerald-50 border-emerald-200",
                  textColor: "text-emerald-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border-2 ${item.color} animate-on-scroll`}
                >
                  <div className="flex-shrink-0">
                    <span
                      className={`inline-block text-xs font-bold px-2 py-1 rounded-full border ${item.color} ${item.textColor}`}
                    >
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The implication: <strong>write so an evaluator can score your proposal in
              Pass 2 without inferring anything from Pass 1.</strong> Each section should stand
              alone. If your technical approach section references your management section
              (&quot;as described above, our team will...&quot;), an evaluator scoring just the
              technical factor has to flip back to find the context. Many won&apos;t. They&apos;ll
              mark it as insufficient and move on.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Label your sections explicitly with the Section M factor they address. A header
              that reads &quot;Technical Approach — Cloud Migration Methodology (Section M Factor
              2, Sub-factor 2.1)&quot; is not verbose — it&apos;s a navigation tool for the
              evaluator&apos;s scoring sheet. Evaluators working against a 5-factor rubric
              appreciate being able to find each answer without hunting.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <ClipboardList className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Know Which Contracts You&apos;re Actually Eligible to Bid
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Before you write a technical volume, make sure the opportunity fits your certifications
              and size standards. The Quick Checker tells you in under 3 minutes — free.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">Free, no account required</p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="technical-approach"
            number="03"
            title="Writing a Technical Approach That Scores"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The technical approach section is the core of the technical volume. It describes how
              you will perform the work — not that you can perform it, but how. That distinction
              matters. &quot;We have extensive experience in network infrastructure&quot; is a claim.
              &quot;We will deploy a phased migration plan across three network segments using
              zero-downtime cutover techniques validated on our GSA Schedule work for DHS in
              FY2025&quot; is a technical approach. Only one of those statements gives an evaluator
              something to score.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Strong technical approaches share four structural elements:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Target,
                  title: "Understanding of Requirements",
                  desc: "Open by demonstrating that you understand the problem — not just restating the SOW, but showing insight into the agency's context, constraints, and objectives. Reference specifics from the Performance Work Statement. Mention the agency's published strategic goals if they're relevant. Evaluators rate this sub-factor as a proxy for whether you're going to show up and ask basic questions on day one.",
                },
                {
                  icon: FileText,
                  title: "Technical Methodology",
                  desc: "Describe your specific approach: what you will do, in what sequence, using what methods and tools. Use named processes, frameworks, and technologies. If you have a proprietary methodology, name it. If you're using an industry standard (ITIL, NIST CSF, ISO 9001), state it explicitly and explain how it applies. Vague descriptions — 'we will use industry best practices' — score at the Acceptable level at best. Named methodologies tied to specific outcomes score higher.",
                },
                {
                  icon: Shield,
                  title: "Risk Identification and Mitigation",
                  desc: "List the top 3–5 risks for this specific contract and your mitigation for each. This is not boilerplate. It proves you read the SOW carefully enough to understand where execution gets hard. An agency issuing a contract for base operations support at a remote installation wants to know you've thought about supply chain continuity and personnel retention — not generic project risks that apply to any contract.",
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Outcomes",
                  desc: "Wherever possible, tie your methodology to measurable performance outcomes. If the PWS specifies performance thresholds (availability percentage, response time, error rates), your technical approach should describe how your methodology achieves those specific thresholds — not just 'meets requirements.' This is what distinguishes a Good rating from an Outstanding one in FAR source selection language.",
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
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Use graphics deliberately. Flow diagrams showing your work sequence, timelines
              depicting your phase structure, and org charts showing team integration all add
              evaluator comprehension without consuming page count as aggressively as prose.
              Most Section L page limits exclude graphics from their counts — confirm this for
              each solicitation. Where a diagram can communicate a 3-paragraph process in a single
              visual, use the diagram and write one tight paragraph around it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Each major task area in the SOW should have its own subsection in your technical
              approach. If the SOW has six task areas and your technical approach doesn&apos;t
              have six corresponding sections, evaluators scoring by task area will find gaps.
              Mirror the structure of the SOW, not your internal preference for how to present
              the work.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For a deeper look at how{" "}
              <Link
                href="/features/proposals"
                className="text-blue-700 underline font-medium"
              >
                CapturePilot&apos;s proposal tools
              </Link>{" "}
              help you map technical approach sections directly to evaluation factors — and track
              coverage during writing — see the proposals feature overview.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Avoid the 'Shall' Echo">
            A common and costly mistake: restating the SOW requirements verbatim in your technical
            approach, then following each with &quot;we shall comply.&quot; This response style
            produces Acceptable ratings at best — it proves you read the SOW, not that you have a
            plan. Evaluators are looking for your solution, not a recitation of their requirements.
            Transform each SOW requirement into a description of your specific approach to meeting it.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="key-personnel"
            number="04"
            title="Key Personnel: Resumes That Win Points"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Key personnel sections are evaluated separately from technical approach in most
              solicitations. The evaluation factors usually focus on qualifications relevant to the
              specific work — years of experience, certifications, relevant project history —
              not general career accomplishments. A resume that reads like a LinkedIn profile is
              not an evaluated resume.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Section L tells you exactly what each resume must contain: maximum page length
              (usually 2 pages), required fields, and sometimes specific language about how to
              document qualifications. Deviating from those instructions — even if your format is
              more impressive — is a compliance failure that can affect scoring. Read Section L
              before formatting a single resume.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Structure each resume around the Section M evaluation criteria, not the person&apos;s
              career trajectory. Here&apos;s how winning resumes are structured:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Resume Section</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What to Include</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Common Failure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        section: "Proposed Role & Commitment",
                        include: "Name, proposed title on this contract, percentage of time committed (FTE vs. part-time matters to evaluators)",
                        fail: "Listing title without commitment percentage — evaluators assume part-time if unstated",
                      },
                      {
                        section: "Relevant Education & Certifications",
                        include: "Degrees, professional certifications specifically required or desired in Section M. Current active certifications with expiration dates where applicable",
                        fail: "Listing expired certifications, or certifications not relevant to the specific work — evaluators notice when you pad credentials",
                      },
                      {
                        section: "Years of Relevant Experience",
                        include: "Total years in the relevant discipline and sub-disciplines. If Section M requires 5+ years in network security, state the exact number directly — don't make evaluators calculate it from work history",
                        fail: "Burying experience metrics in bullet points — state them in the opening summary where evaluators find them on Pass 2",
                      },
                      {
                        section: "Directly Relevant Project History",
                        include: "3–5 projects most relevant to THIS contract, with: client (agency name where releasable), dollar value, duration, role and responsibilities, outcomes. Use the same language the SOW uses to describe the work",
                        fail: "Generic project descriptions that could apply to any contract. Evaluators need to see relevance — 'large federal agency' instead of 'DHS CISA' hides the credential",
                      },
                      {
                        section: "Availability Statement",
                        include: "Confirmation the person is available for the proposed start date. If they are a current employee, say so. If they require a commitment offer, the RFP usually requires a signed letter of intent",
                        fail: "Omitting availability — evaluators flag this as execution risk, which shows up as a weakness",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs whitespace-nowrap align-top">{row.section}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed align-top">{row.include}</td>
                        <td className="px-5 py-3 text-red-600 text-xs leading-relaxed align-top">{row.fail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The subject matter expert (SME) writing your technical approach and the person
              whose resume is in the proposal should be communicating. Inconsistencies between
              what the technical volume promises and what the resumes can deliver are a common
              weakness finding. If your technical approach describes a CMMI Level 3 process
              environment and your proposed program manager&apos;s resume shows no CMMI experience,
              that gap gets documented.
            </p>
            <p className="text-stone-600 leading-relaxed">
              When a Section M criterion requires a specific certification (active Secret clearance,
              PMP, CISSP), confirm that your proposed person has it before you submit. Proposing
              personnel who don&apos;t meet the stated requirements is a deficiency — not a
              weakness — and deficiencies can disqualify a proposal from the competitive range
              entirely.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Write Resumes for the Evaluation, Not the Person">
            The best career resume and the best proposal resume are not the same document. Career
            resumes tell a story of professional growth. Proposal resumes prove specific qualifications
            for a specific role on a specific contract. Rewrite every resume for each proposal — at
            minimum, the opening summary and project history should be tailored to the evaluation
            criteria. Generic resumes submitted across multiple proposals score lower than targeted
            ones, even for the same individual.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="management-approach"
            number="05"
            title="Management Approach: Making Execution Believable"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The management volume — sometimes included as part of the technical volume, sometimes
              separate depending on Section L — covers how you will run the contract, not what you
              will do technically. Evaluators reading the management approach are answering one
              question: do we believe this company can actually execute what they&apos;ve proposed?
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Common management volume elements and what evaluators are actually looking for in each:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Users,
                  title: "Organizational Chart",
                  desc: "Show the complete team structure from program manager down to task leads, with reporting lines and interface points to the government COR (Contracting Officer's Representative). Make clear who is on-site vs. remote, prime vs. subcontractor. An org chart that requires the reader to count boxes to understand the structure is too complex. If you have subcontractors, show the integration point explicitly — evaluators want to see that you've thought about how the team actually operates.",
                },
                {
                  icon: ClipboardList,
                  title: "Program Management Processes",
                  desc: "Describe your project management methodology — PMP, PMBOK, Agile, or a hybrid — and explain how it applies to this specific contract. Include how you'll handle status reporting, issue escalation, and government touchpoints. If the PWS specifies a weekly status report to the COR, your management approach should describe exactly how that report is structured, who produces it, and how it reflects actual contract status.",
                },
                {
                  icon: TrendingUp,
                  title: "Quality Assurance Plan",
                  desc: "Most RFPs require a Quality Assurance Surveillance Plan (QASP) — the government's tool for measuring your performance. Your Quality Control Plan is your internal mirror: how you will measure yourself before the government does. Describe your QC processes, your internal review cadence, and your corrective action procedures. If you have ISO 9001 certification or a CMMI appraisal, state it and explain how it applies.",
                },
                {
                  icon: Shield,
                  title: "Transition Plan",
                  desc: "If this contract displaces an incumbent, the government cares deeply about continuity of service. A credible transition plan covers: how long transition will take, what knowledge transfer looks like, how you'll identify and retain critical incumbent personnel, and what happens to operations during the transition window. Vague transition plans are a consistent weakness finding. Specific timelines, named activities, and go/no-go decision points score higher.",
                },
                {
                  icon: Award,
                  title: "Subcontractor Integration",
                  desc: "If you have teaming partners or subcontractors, the management approach must explain how they are integrated. Which tasks do they own? How are they managed? What happens if a subcontractor fails to perform? Evaluators treat subcontractor risk as a program risk — show you've managed it, not just disclosed it.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The management approach should be consistent with everything else in the proposal.
              If your technical approach describes a team of 12 specialists and your org chart shows
              8 boxes, the inconsistency is a weakness. If your technical approach commits to daily
              reporting and your management section describes weekly reports, that&apos;s a
              deficiency. Run a consistency check across volumes before submission.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For small businesses bidding on contracts where they plan to team with a larger
              prime or subcontractor, the management approach is where that relationship gets
              defined. Weak teaming structures — where roles are vague and accountability is
              shared — are a frequent source of evaluation weaknesses. Our guide on{" "}
              <Link
                href="/blog/government-contract-teaming-agreement"
                className="text-blue-700 underline font-medium"
              >
                government contract teaming agreements
              </Link>{" "}
              covers how to structure those partnerships before you get to the proposal stage.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">Write Proposals That Actually Get Evaluated</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot&apos;s proposal tools map evaluation factors to your outline, track
              section ownership, and flag gaps before submission — so you stop leaving points on
              the table.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="bg-transparent text-white border border-stone-600 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Strategy Call
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-4">No credit card required for the free trial.</p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="risk-management"
            number="06"
            title="Risk Management: Show You've Thought Through Failure"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Risk management content appears in most technical volumes — either as a dedicated
              subsection or woven through the technical approach. The evaluator&apos;s question
              is binary: does this offeror understand where this contract gets hard, and do they
              have a plan for when it does?
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Risk sections fail in two opposite directions. The first failure: boilerplate risk
              categories (schedule risk, cost risk, personnel risk) with generic mitigations
              (&quot;we will monitor progress against milestones&quot;). This tells the evaluator
              nothing about your understanding of this specific contract. The second failure:
              no risk discussion at all — omitting it entirely on the assumption that acknowledging
              risk is a negative signal. Evaluators don&apos;t score the absence of problems,
              they score your awareness of them.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              A credible risk section structure:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Risk Element</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Low-Scoring (Generic)</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">High-Scoring (Specific)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        element: "Risk Identification",
                        low: "Schedule risk, cost risk, technical risk (stated without specifics)",
                        high: "Named risks tied to the specific PWS tasks: 'Integration with the agency's legacy Oracle ERP creates a data migration risk during Phase 2 cutover'",
                      },
                      {
                        element: "Probability & Impact",
                        low: "Omitted, or High/Medium/Low without justification",
                        high: "Probability and impact rated with a brief rationale — 'Medium probability based on our experience with similar legacy integrations at DoD agencies; High impact if unaddressed'",
                      },
                      {
                        element: "Mitigation",
                        low: "'We will monitor and address issues as they arise'",
                        high: "Specific, named mitigation steps: 'Pre-migration data validation scripts, a 30-day parallel run period, and a go/no-go checkpoint with the COR before final cutover'",
                      },
                      {
                        element: "Residual Risk",
                        low: "Not addressed",
                        high: "After mitigation, state what risk remains and your contingency: 'Residual risk is Low. Contingency: rollback procedure restores prior state within 4 hours if cutover criteria are not met'",
                      },
                      {
                        element: "Government Risk",
                        low: "Focused only on contractor risk",
                        high: "Identify risks the government introduces: delayed access, security clearance processing time, GFE availability. Shows you understand shared responsibility for contract success",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs whitespace-nowrap align-top">{row.element}</td>
                        <td className="px-5 py-3 text-red-600 text-xs leading-relaxed align-top">{row.low}</td>
                        <td className="px-5 py-3 text-emerald-700 text-xs font-medium leading-relaxed align-top">{row.high}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Including government-introduced risks — access delays, GFE availability, clearance
              processing timelines — is a signal that you have executed contracts before and
              understand that performance risk is shared. It also pre-positions you contractually
              if a government-caused delay affects your schedule later. Evaluators who have managed
              contracts recognize this immediately.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For context on how risk assessment connects to your overall bid decisions, see
              our guide on{" "}
              <Link
                href="/blog/pwin-probability-of-win"
                className="text-blue-700 underline font-medium"
              >
                probability of win (PWin) scoring
              </Link>
              . If your risk profile on a given opportunity is too high, the right answer is
              sometimes not to bid — not to write around it.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Risk Discussion Is a Differentiator, Not a Liability">
            Companies that have executed government contracts know where the hard parts are. Companies
            that haven&apos;t — or that are trying to hide their inexperience — write generic risk
            sections or skip them. A specific, credible risk discussion signals operational maturity.
            Evaluators who have managed contracts know the difference immediately. Show your thinking,
            not just your confidence.
          </Callout>

          {/* Section 7 */}
          <SectionHeading
            id="section-m"
            number="07"
            title="Build Around Section M, Not Your Own Outline"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The most productive reframe for technical volume writing: you are not writing a
              document, you are filling out a scoring sheet. Section M is that sheet. Every
              factor and sub-factor in Section M is an empty box that needs a checked answer with
              supporting evidence. Your job is to check every box, visibly, in a way the evaluator
              can find and document.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Most proposals are organized around what the contractor wants to say. Winning proposals
              are organized around what the evaluator needs to score. That shift produces a different
              outline structure. Instead of &quot;Section 3: Our Experience with Cloud Platforms,&quot;
              you write &quot;Technical Factor 2, Sub-factor 2.1: Cloud Platform Architecture and
              Migration Experience.&quot; The evaluator with the scoring sheet can navigate directly
              to their box. The scorer who has to hunt through your preferred structure is more likely
              to miss something — and what they miss, they don&apos;t score.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              How to build your outline from Section M:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Extract every factor and sub-factor from Section M",
                  desc: "List them in evaluation order. Note the relative importance where stated — 'Technical is significantly more important than Past Performance' tells you where to invest writing time. Sub-factors within a factor are usually of equal weight unless specified otherwise.",
                },
                {
                  step: "02",
                  title: "Create a proposal section for each sub-factor",
                  desc: "One section per scoreable element. If Section M has three technical sub-factors, your technical volume has three major sections — labeled with language that maps directly to the Section M text. Evaluators working against the scoring rubric will find each answer without hunting.",
                },
                {
                  step: "03",
                  title: "Identify what evidence each sub-factor requires",
                  desc: "Section M often describes what a high rating looks like. 'Outstanding' under FAR Part 15 means the proposal 'contains strengths that far outweigh any weaknesses,' 'is an exceptional approach,' and demonstrates 'very low risk.' That language tells you what evidence to include: specific accomplishments, validated metrics, named references, proprietary differentiators.",
                },
                {
                  step: "04",
                  title: "Write each section to earn the highest rating your capability supports",
                  desc: "Don't write to Acceptable. Write to Outstanding and let the evaluator decide where you land. Every section should include: your approach (methodology), your evidence (past project data, certifications, metrics), and your differentiator (what you do that others can't or don't). If you can't support all three elements for a given sub-factor, you have an intelligence gap — not a writing problem.",
                },
                {
                  step: "05",
                  title: "Include a compliance cross-reference matrix in the proposal",
                  desc: "A one-page table showing each Section M factor and the proposal section that addresses it. Not all agencies require this, but it's always useful — it guides evaluators directly to your response for each scoring element and signals that you organized your proposal around their evaluation criteria, not your own preferences.",
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
              The other critical use of Section M: word weighting. When Section M says technical
              is &quot;significantly more important&quot; than management, that language is not
              casual — it defines the trade space for the source selection authority. A proposal
              that scores Outstanding on technical but Acceptable on management will beat one that
              scores Good on both, because the evaluation factors are weighted, not averaged equally.
              Allocate your writing time and subject matter expertise proportionally to the weights.
            </p>
            <p className="text-stone-600 leading-relaxed">
              This approach is how{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline font-medium"
              >
                CapturePilot&apos;s intelligence features
              </Link>{" "}
              help teams analyze opportunities — by surfacing evaluation factor data from historical
              solicitations so you know how similar agencies have weighted factors in the past,
              before you commit to a bid.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Section M Changes Between Amendments — Recheck It">
            Solicitation amendments can change evaluation factors, add sub-factors, or shift the
            relative weighting between factors. A proposal team that built their outline from the
            original Section M and didn&apos;t update after an amendment may be writing to the wrong
            scoring rubric. Every amendment must trigger a full Section M re-read and an outline
            update. This is one of the highest-risk failures in proposal management.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="common-mistakes"
            number="08"
            title="Common Technical Volume Mistakes"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              These failures appear consistently across agencies, contract types, and offeror sizes.
              The patterns hold whether you&apos;re bidding an $80,000 simplified acquisition or a
              $50 million IDIQ task order.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: XCircle,
                  title: "Writing to the SOW instead of Section M",
                  desc: "The SOW describes what the government needs. Section M describes how your proposal will be scored. These are related but not identical. Proposals that address every SOW task but miss a Section M sub-factor that asks for something beyond the SOW scope (methodology proof, team qualifications, innovation approach) leave scoring points unclaimed. Always write to Section M — it's the scoring sheet.",
                },
                {
                  icon: XCircle,
                  title: "Using the same proposal twice",
                  desc: "Recycled proposals — adapted from a prior bid to a different agency — consistently underperform custom proposals. Evaluators read dozens of proposals in a competitive range. Agency-specific language, references to the solicitation's specific PWS tasks, and tailored risk discussions are immediately distinguishable from boilerplate. If you're reusing more than 30% of a prior proposal, you're likely leaving points on the table.",
                },
                {
                  icon: XCircle,
                  title: "Understaffing the writing team",
                  desc: "The biggest driver of weak technical volumes is time pressure combined with too few writers. A single technical SME writing the entire volume 48 hours before submission produces Acceptable content at best. Winning technical volumes require subject matter experts writing about their domains, a proposal manager coordinating coverage against Section M, and at least one review cycle with fresh eyes. If you can't staff that, consider whether to bid at all.",
                },
                {
                  icon: XCircle,
                  title: "Unsupported superlatives",
                  desc: "'We are the leading provider of...' — 'Our unique approach delivers...' — 'We have unmatched expertise in...' These phrases are not strengths, they are noise. Evaluators are trained to look past marketing language and find evidence. Every claim needs a citation: a specific contract, a measurable outcome, a named certification, a verifiable reference. Claims without evidence score as marketing.",
                },
                {
                  icon: XCircle,
                  title: "Misaligned graphics",
                  desc: "A graphic that illustrates your company's overall service portfolio but doesn't connect to the specific contract task structure wastes page count and evaluator attention. Every graphic should have a caption that explicitly ties it to an evaluation factor or SOW task. Untethered visuals create ambiguity — which becomes a weakness when evaluators score against the factor.",
                },
                {
                  icon: XCircle,
                  title: "No discriminators against the incumbent",
                  desc: "On recompetes, the incumbent has a structural advantage: the agency knows them, their risks are known quantities, and switching costs are real. A technical volume that doesn't explicitly address why your approach is better than status quo — not just different, but measurably better — doesn't give the source selection authority a basis for change. Research the incumbent's past performance before you write. Use our{' '} intelligence features to find what evaluators have documented about incumbent performance.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-red-100 bg-red-50 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The thread connecting all of these failures is the same: proposals written from the
              inside out — from what the contractor knows and wants to say — rather than from the
              outside in — from what the evaluator needs to score. That inversion is the single
              most reliable improvement available to most proposal teams.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For context on what win rates look like across the federal market and what drives
              improvement in competitive positioning, see our guide on{" "}
              <Link
                href="/blog/government-contract-win-rate"
                className="text-blue-700 underline font-medium"
              >
                government contract win rates
              </Link>
              . The technical volume is the highest-leverage investment in improving those numbers.
            </p>
          </div>

          <Callout icon={Shield} color="emerald" title="Before You Write: Do the Capture Work">
            The best technical volume starts months before the RFP drops. If you&apos;ve attended
            industry days, responded to Sources Sought notices, met with the program office, and
            studied the incumbent — you walk into proposal writing knowing what the agency cares
            about and what the evaluators have seen before. That intelligence shapes a technical
            approach that sounds less like a generic proposal and more like you understand the
            program. For a deeper look at that pre-RFP work, see our guide on{" "}
            <Link
              href="/blog/capture-management-process"
              className="text-blue-700 underline font-medium"
            >
              the capture management process
            </Link>
            .
          </Callout>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Stop Writing Proposals That Almost Win
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot helps small businesses build technical volumes that score — with tools
                for opportunity intelligence, proposal management, and compliance tracking that work
                together from capture through submission.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Section M factor mapping built into your proposal workspace",
                  "Opportunity intelligence on incumbents, past awards, and agency preferences",
                  "Proposal section ownership and review tracking across your team",
                  "Compliance checklists tied to FAR Part 15 source selection standards",
                  "Pipeline management from Sources Sought through award",
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
                  icon: ClipboardList,
                  title: "Government Proposal Compliance Matrix",
                  desc: "Map Section L, M, and C requirements before you write a single word",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  icon: BarChart3,
                  title: "Past Performance in Government Contracts",
                  desc: "Why past performance is the hardest evaluation factor to fake",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  icon: TrendingUp,
                  title: "Government Contract Win Rates",
                  desc: "What realistic win rates look like and how to move yours higher",
                },
                {
                  href: "/blog/capture-management-process",
                  icon: Search,
                  title: "The Capture Management Process",
                  desc: "How winning contractors build the intelligence that makes proposals score",
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
