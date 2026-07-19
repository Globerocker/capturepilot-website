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
  Users,
  Clock,
  DollarSign,
  Shield,
  XCircle,
  Award,
  FileText,
  Eye,
  Search,
  ClipboardList,
  Zap,
  Flag,
  RefreshCw,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-proposals-fail", label: "Why Proposals Fail Without a Review Process" },
  { id: "what-color-teams-are", label: "What Color Teams Actually Are" },
  { id: "blue-pink-team", label: "Blue Team and Pink Team: Get It Right Early" },
  { id: "red-team", label: "Red Team: The Review That Wins or Loses Contracts" },
  { id: "green-gold-team", label: "Green Team and Gold Team: Pricing and Final Polish" },
  { id: "white-team", label: "White Team: Learning From Every Result" },
  { id: "common-mistakes", label: "Ten Mistakes That Kill Color Team Reviews" },
  { id: "small-business", label: "Small Business: How to Run Reviews Without a Big Team" },
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

export default function ProposalColorTeamsPage() {
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
            <span className="text-stone-900 font-medium">Proposal Color Teams</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Proposal Color Teams:{" "}
            <span className="gradient-text">
              How Winning Contractors Review Bids Before Submission
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The average RFP response takes 33 hours of staff time to produce. Most proposals are
            submitted with no structured review — which is why most proposals lose. Color team
            reviews are the structured process that separates contractors who win consistently from
            the ones who keep finishing second.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 19, 2026</span>
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
            <SectionHeading id="why-proposals-fail" number="01" title="Why Proposals Fail Without a Review Process" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The average federal RFP win rate across all contractors was <strong>45% in 2025</strong> — the
              highest single-year average in five years, according to Bidara&apos;s 2026 RFP Statistics
              report. That sounds encouraging until you look at small businesses specifically: SMB win
              rates average <strong>42%</strong>, compared to 47% for enterprise contractors with 5,000+
              employees. That 5-point gap isn&apos;t about resources or past performance. It&apos;s mostly
              about process.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The contractors winning at the top of that range share one structural habit: they review
              proposals through multiple formal checkpoints before submission. The ones at the bottom
              submit what they wrote. Both groups spent the same 33 hours of staff time. One group
              used that time to build a proposal. The other used it to build a reviewed, scored,
              iterated proposal — and you can usually tell which is which in the first ten pages.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The mechanism of failure for unreviewed proposals is almost always the same. The writers
              are too close to the material to see gaps. Requirements buried in Section L get missed
              because no one built a{" "}
              <Link href="/blog/government-proposal-compliance-matrix" className="text-blue-700 underline font-medium">
                compliance matrix
              </Link>{" "}
              and mapped every one to a specific page. Win themes get stated once and then forgotten
              for the next forty pages. The cost volume says something that contradicts the staffing
              model in the technical volume. Evaluators find all of this. The writers never saw any of it.
            </p>

            <Callout icon={BarChart3} color="sky" title="Structured process = measurable win rate advantage">
              APMP (Association of Proposal Management Professionals) data shows that teams using
              structured review processes have a <strong>7 percentage-point win rate advantage</strong> over
              those without one — and additional maturity in process adds another 7 points on top of that.
              For a small business bidding ten proposals per year, closing that gap means two or three
              additional contract awards.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Color team reviews are the industry-standard answer to this problem. They were
              codified by Shipley Associates — the consulting firm behind the most widely adopted
              proposal methodology in defense contracting — and they&apos;re recognized by APMP as a
              core component of a professional proposal operation. The system assigns a color to each
              stage of review, each with a defined purpose, a defined audience, and a defined point
              in the proposal timeline.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A color team review is not a markup session. It is not asking your business partner to
              &quot;read through this.&quot; It is a structured evaluation of a proposal draft against the
              government&apos;s actual evaluation criteria — simulating what happens when a source
              selection evaluator opens your submission.
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
                  <p className="font-bold text-lg mb-1">Before your next proposal, check your eligibility</p>
                  <p className="text-blue-100 text-sm mb-4">
                    Know which set-aside programs you qualify for before you build a proposal strategy.
                    CapturePilot&apos;s Quick Checker takes under two minutes.
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

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-color-teams-are" number="02" title="What Color Teams Actually Are" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The color team model assigns a distinct name and role to each phase of proposal review.
              The classic sequence runs from Blue through White, though most organizations don&apos;t use
              every stage on every proposal. The ones that matter most — and the ones you should
              understand before your next bid — are these:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 font-bold rounded-tl-lg">Color Team</th>
                    <th className="text-left p-3 font-bold">Draft Stage</th>
                    <th className="text-left p-3 font-bold">Purpose</th>
                    <th className="text-left p-3 font-bold rounded-tr-lg">Timing (30-day RFP)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      color: "Blue",
                      stage: "Pre-RFP / Capture",
                      purpose: "Define win strategy, solution design, and proposal structure before writing begins",
                      timing: "Before RFP release",
                      bg: "bg-blue-50",
                    },
                    {
                      color: "Pink",
                      stage: "20–40% complete",
                      purpose: "Evaluate storyboards and early content; validate compliance and strategy alignment",
                      timing: "Days 1–10",
                      bg: "bg-pink-50",
                    },
                    {
                      color: "Red",
                      stage: "70–90% complete",
                      purpose: "Mock evaluator review — score each section against Section M criteria",
                      timing: "~2 weeks before due",
                      bg: "bg-red-50",
                    },
                    {
                      color: "Green",
                      stage: "Pricing complete",
                      purpose: "Verify cost volume accuracy, competitiveness, and alignment with technical approach",
                      timing: "Before Gold Team",
                      bg: "bg-green-50",
                    },
                    {
                      color: "Gold",
                      stage: "100% complete",
                      purpose: "Executive final check — confirmation, not correction. Language and compliance polish.",
                      timing: "48–72 hours before due",
                      bg: "bg-amber-50",
                    },
                    {
                      color: "White",
                      stage: "Post-submission",
                      purpose: "Lessons learned session after award decision — win or lose",
                      timing: "After award",
                      bg: "bg-stone-50",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={`${row.bg} border-b border-stone-200`}>
                      <td className="p-3 font-bold text-stone-900">{row.color} Team</td>
                      <td className="p-3 text-stone-700">{row.stage}</td>
                      <td className="p-3 text-stone-600">{row.purpose}</td>
                      <td className="p-3 text-stone-600 whitespace-nowrap">{row.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The key design principle: each review has enough runway after it to actually act on
              what it finds. A review with no time for revision is theater. Lohfeld Consulting
              recommends four formal color reviews for each non-pricing volume as the baseline for a
              professional proposal operation. For a small business, even two well-timed reviews
              represent a meaningful improvement over none.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The other structural rule: reviewers should not have written the sections they review.
              Authors cannot see the gaps they are blind to. The entire value of a review comes from
              fresh eyes applying the government&apos;s evaluation criteria to content the reviewer
              hasn&apos;t been staring at for two weeks. That independence is non-negotiable.
            </p>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="blue-pink-team" number="03" title="Blue Team and Pink Team: Get It Right Early" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Most contractors underinvest in early-stage review and overinvest in late-stage
              panic. The Blue Team and Pink Team exist to prevent that.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Blue Team: strategy before writing</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Blue Team happens before the RFP drops — ideally during the capture phase, when
              you&apos;ve been tracking the opportunity, meeting with agency contacts, and forming
              your position. Its job is to get everyone aligned on the win strategy before a single
              word of proposal text gets written.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Blue Team reviewers assess whether your win themes match what the customer actually
              cares about, whether your proposed solution has real discriminators against likely
              competitors, and whether your team is positioned to deliver what you&apos;re claiming.
              It approves storyboards and annotated outlines — not draft prose.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              If you don&apos;t have a formal Blue Team, you should at minimum have a capture
              conversation before kickoff that answers: Why us? Why not them? What does this customer
              actually value, and can we prove we deliver it? CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                competitive intelligence tools
              </Link>{" "}
              help you build that picture before the RFP releases, so your Blue Team isn&apos;t
              starting blind.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Pink Team: early compliance and structure check</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Pink Team reviews storyboards, outlines, and early drafts at 20–40% completion.
              Its focus is structure and compliance — not prose quality. You&apos;re not editing
              sentences. You&apos;re asking: Is the proposal shaped correctly?
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  icon: ClipboardList,
                  title: "Section L compliance",
                  desc: "Does the structure follow the RFP instructions exactly? Are all required sections present and in the specified order? Are page limits and formatting requirements reflected in the outline?",
                },
                {
                  icon: Target,
                  title: "Win theme presence",
                  desc: "Are your win themes woven into the structure — not just stated in the executive summary but echoed throughout each section? Do storyboards show where each discriminator appears?",
                },
                {
                  icon: Flag,
                  title: "Strategy alignment",
                  desc: "Does the proposal structure reflect the Blue Team strategy? If your strategy was to lead with key personnel quality, does the personnel section have the space and prominence to deliver that?",
                },
                {
                  icon: Search,
                  title: "Coverage gaps",
                  desc: "Are any SOW task areas underrepresented or missing? Compare the storyboard to the compliance matrix and identify anything that&apos;s getting a sentence where it needs a page.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Clock} color="amber" title="Timing is everything for the Pink Team">
              GovEagle&apos;s June 2026 color team playbook puts it plainly: &quot;A Pink Team run two days
              before submission is a Red Team in disguise, with no runway to act on findings.&quot; On a
              30-day response period, your Pink Team should happen in the first ten days. If you&apos;re
              finding compliance gaps at day 25, you&apos;re not reviewing a proposal — you&apos;re
              triaging one.
            </Callout>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="red-team" number="04" title="Red Team: The Review That Wins or Loses Contracts" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The Red Team is the most important review in the process. Everything else builds toward
              it or cleans up after it. Run correctly, a Red Team surfaces the gaps, weak
              discriminators, and compliance errors that evaluators would otherwise use to justify a
              lower score — before your proposal is in their hands.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Red Team runs at 70–90% completion, roughly two to three weeks before submission
              on a standard proposal timeline. The reviewers should be people who have not written
              any part of the proposal. Their job is to read it exactly as a government source
              selection evaluator would — scoring each section against Section M criteria, not
              rewriting it.
            </p>

            <Callout icon={AlertTriangle} color="red" title="The single most common Red Team failure">
              Lohfeld Consulting identifies this as the most frequent and damaging mistake in Red
              Team reviews: &quot;Reviewers read the proposal like a novel instead of scoring and rating
              it according to evaluation criteria.&quot; When reviewers read without a rubric, they fall
              back on personal preferences — formatting opinions, prose style, pet phrases. None of
              that improves your evaluator alignment. Reviewers must have Section M in front of them
              and must score each section explicitly before offering any other comments.
            </Callout>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">How to run an effective Red Team</h3>

            <div className="space-y-4 my-6">
              {[
                {
                  step: "01",
                  title: "Give reviewers the RFP",
                  desc: "Every reviewer should arrive having read the full RFP — especially Section L (instructions) and Section M (evaluation criteria). The review should happen with the RFP open. Reviewers who work without the RFP in front of them give you useless feedback.",
                },
                {
                  step: "02",
                  title: "Build a scoring rubric from Section M",
                  desc: "Create a scoring sheet that mirrors the government&apos;s evaluation factors and subfactors from Section M. Every reviewer uses the same sheet. This keeps the review anchored to what actually determines the award — not what each reviewer happens to care about.",
                },
                {
                  step: "03",
                  title: "Score first, comment second",
                  desc: "Reviewers must assign a score (Outstanding / Good / Acceptable / Marginal / Unacceptable or the RFP&apos;s specific language) to each section before writing line comments. The score is the primary deliverable. Comments explain it.",
                },
                {
                  step: "04",
                  title: "Cross-check the compliance matrix",
                  desc: "One reviewer should work through the compliance matrix — verifying that every RFP requirement is addressed, at the right location, with the right volume and depth. See CapturePilot&apos;s guide to building a compliance matrix for a working template.",
                },
                {
                  step: "05",
                  title: "Debrief and prioritize findings",
                  desc: "After individual scoring, run a structured debrief. Identify which findings are consensus (most reviewers agree) vs. individual. Rank findings by impact. Not every comment warrants a rewrite — focus the response plan on items that would move a score from Acceptable to Good, or from Good to Outstanding.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-black text-red-200">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              OST Global Solutions recommends planning for <strong>10 minutes per proposal page</strong> —
              about six pages per hour — as a realistic estimate for reviewers doing serious work.
              A 50-page proposal takes a full workday per reviewer. Schedule accordingly.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The other structural imperative: build in response time. If your Red Team runs one week
              before submission and surfaces three major gaps, your writers need real time to address
              them — not two hours on the night before due. The review is only useful if there&apos;s
              runway to act on it.{" "}
              <Link href="/blog/technical-volume-government-proposal" className="text-blue-700 underline font-medium">
                Strong technical volumes
              </Link>{" "}
              come from writers who received Red Team feedback early enough to integrate it, not paste
              it over existing content.
            </p>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="green-gold-team" number="05" title="Green Team and Gold Team: Pricing and Final Polish" />

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-2">Green Team: pricing that aligns with your technical approach</h3>

            <p className="text-stone-700 leading-relaxed mb-4">
              The Green Team focuses exclusively on the cost volume. Most proposal teams treat pricing
              as a separate workstream — the technical team writes the approach, the pricing team
              builds the cost model, and the two meet only when they&apos;re collated for submission.
              That workflow creates one of the most common and damaging proposal errors: a cost volume
              that contradicts the technical approach.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              If your technical approach describes a six-person team for base operations support, your
              cost volume had better price six people — not four. If your approach commits to
              72-hour response times, your labor model needs the staffing to cover that. Evaluators
              notice when the numbers don&apos;t match the narrative, and a non-aligned cost volume is a
              credibility signal that damages more than just the price score.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h4 className="font-bold text-stone-900 mb-4">Green Team checklist</h4>
              <div className="space-y-2">
                {[
                  "Labor categories and hours align with the technical approach staffing model",
                  "Pricing reflects applicable Service Contract Act or Davis-Bacon wage determinations",
                  "All cost elements required by Section L are present and labeled correctly",
                  "Pricing assumptions are documented and defensible",
                  "Subcontractor pricing is included and consistent with teaming agreements",
                  "Indirect rates are applied consistently across all cost elements",
                  "Total price is competitive given market intelligence on incumbent pricing",
                  "Cost volume narrative explains pricing strategy, not just sums the numbers",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For a deeper breakdown of cost volume structure and strategy,{" "}
              <Link href="/blog/cost-volume-government-proposal" className="text-blue-700 underline font-medium">
                see our guide to writing the cost volume of a government proposal
              </Link>
              . CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-blue-700 underline font-medium">
                proposal tools
              </Link>{" "}
              can help you track the connection between your technical approach commitments and your
              pricing model throughout the development process.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-10">Gold Team: confirm, don&apos;t correct</h3>

            <p className="text-stone-700 leading-relaxed mb-4">
              The Gold Team is an executive-level review of a 100%-complete proposal, 48–72 hours
              before submission. Its mandate is narrow: confirm the proposal is ready. It is not the
              place to reopen strategy debates. It is not a writing session. New comments at the Gold
              Team stage that require significant revision introduce far more risk than they remove —
              every major change at this stage is a potential formatting error, a new contradiction,
              or a missed page limit.
            </p>

            <Callout icon={Shield} color="violet" title="Gold Team scope: what it should and shouldn&apos;t do">
              <strong>Should do:</strong> Executive summary review, final pricing alignment check,
              confirm all required attachments and forms are present, catch any remaining formatting
              or font non-compliance, verify page counts against Section L limits.
              <br /><br />
              <strong>Should not do:</strong> Rewrite win themes, question the technical approach,
              revise labor categories, change pricing strategy, or reopen any decision that was
              resolved at Red Team.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Gold Team attendance should include the capture manager, proposal manager, pricing
              lead, and a senior executive. Keep it small and keep it focused. The goal is a
              clean submission, not a better proposal.
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
                    Manage your pursuits with built-in proposal tools
                  </p>
                  <p className="text-emerald-800 text-sm mb-4">
                    CapturePilot tracks your proposals from opportunity discovery through submission —
                    including compliance coverage, win themes, and pricing alignment.
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

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="white-team" number="06" title="White Team: Learning From Every Result" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The White Team happens after the award decision — win or lose. It&apos;s a structured
              debrief that documents what worked, what didn&apos;t, and what the team would do
              differently on the next pursuit.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Most contractors do White Team reviews for losses. They should do them for wins, too.
              A win built on a disorganized process that happened to score well is not a repeatable
              process — it&apos;s luck that you can&apos;t bank on. White Team reviews build the
              institutional knowledge that makes each proposal cycle a little more efficient than
              the last.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Award,
                  label: "After a win",
                  items: [
                    "What discriminators actually worked?",
                    "Where did the review process catch real problems?",
                    "Which sections required the least revision post-Red Team?",
                    "What content is worth templating for future bids?",
                    "Did the color team timeline hold? Where did it slip?",
                  ],
                  color: "emerald",
                },
                {
                  icon: XCircle,
                  label: "After a loss",
                  items: [
                    "Request a debrief from the contracting officer",
                    "Which evaluation factors drove the lower scores?",
                    "Did our discriminators match what the agency actually valued?",
                    "Where did the review process miss what evaluators flagged?",
                    "Was this a bid we should have qualified differently?",
                  ],
                  color: "red",
                },
              ].map((col, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-5 ${
                    col.color === "emerald"
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <col.icon
                      className={`w-4 h-4 ${
                        col.color === "emerald" ? "text-emerald-600" : "text-red-600"
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
              If the government offers a debrief after a loss, take it. Always. Contracting officers
              are required to provide debriefs on negotiated acquisitions under FAR 15.505 and 15.506,
              and those conversations tell you what evaluators actually saw — not what you think they
              saw. The White Team review should incorporate the debrief findings and update your
              proposal playbook before the next pursuit.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Pairing White Team findings with the{" "}
              <Link href="/blog/government-contract-win-rate" className="text-blue-700 underline font-medium">
                win rate tracking frameworks
              </Link>{" "}
              from our proposals guide helps you identify patterns across multiple pursuits —
              which agencies you score well with, which evaluation factors consistently trip you up,
              and whether your overall win rate is trending in the right direction.
            </p>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="07" title="Ten Mistakes That Kill Color Team Reviews" />

            <p className="text-stone-700 leading-relaxed mb-4">
              A color team process that runs poorly can be worse than no process at all —
              it consumes time that could be spent writing and produces feedback that actively
              misleads the proposal team. These are the ten most common ways color team reviews fail.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  number: "01",
                  title: "Reading instead of scoring",
                  desc: "Reviewers treat the proposal as a document to read rather than a submission to score. Without a rubric tied to Section M, reviewers default to personal preferences — formatting opinions, prose style, pet phrases. None of that improves evaluator alignment.",
                  severity: "Critical",
                },
                {
                  number: "02",
                  title: "No RFP in the room",
                  desc: "Reviewers give feedback without the RFP open in front of them. Comments disconnected from what the government actually asked for are worse than useless — they create false confidence and mislead revision efforts.",
                  severity: "Critical",
                },
                {
                  number: "03",
                  title: "Writers reviewing their own work",
                  desc: "The author cannot see the gaps they&apos;ve been staring at for two weeks. Independence is the entire value of the review. Section leads should not review their own sections.",
                  severity: "Critical",
                },
                {
                  number: "04",
                  title: "Pink Team too late",
                  desc: "A Pink Team at 80% completion is functionally a Red Team — but one with no time to act on structural findings. If you can&apos;t run the Pink Team in the first third of the proposal timeline, skip it and shore up the Red Team instead.",
                  severity: "High",
                },
                {
                  number: "05",
                  title: "Reopening strategy at Gold Team",
                  desc: "Gold Team is a pre-flight check, not a strategy session. Changes at this stage introduce more risk than they resolve. Leadership must commit to Gold Team scope and hold it.",
                  severity: "High",
                },
                {
                  number: "06",
                  title: "Groupthink in the review room",
                  desc: "Reviewers get tired of arguing and reach false consensus. Lohfeld Consulting describes this directly: they succumb to groupthink, and legitimate concerns get diluted. Use written individual scores before any group discussion to preserve independent judgment.",
                  severity: "High",
                },
                {
                  number: "07",
                  title: "No Section M scoring rubric",
                  desc: "Without a rubric, every reviewer applies different standards. One focuses on formatting; another rewrites executive summaries. Build the rubric before the review and give it to every reviewer with the proposal.",
                  severity: "High",
                },
                {
                  number: "08",
                  title: "Ignoring Section M in favor of Section L only",
                  desc: "Compliance reviewers who only check Section L (instructions) frequently miss Section M (evaluation criteria) requirements. Both must be mapped. A proposal that follows every instruction can still fail to score well on the evaluation factors.",
                  severity: "Medium",
                },
                {
                  number: "09",
                  title: "No compliance matrix",
                  desc: "Not building a compliance matrix that maps every RFP requirement to a specific proposal location means gaps go undetected until evaluators find them. The compliance matrix is the backbone of the Pink Team review.",
                  severity: "Medium",
                },
                {
                  number: "10",
                  title: "Ignoring post-submission debrief",
                  desc: "Contractors who skip government debriefs after losses repeat the same mistakes on the next bid. The debrief is the only external signal about how your proposal actually scored — it feeds directly into White Team learning.",
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
                          item.severity === "Critical"
                            ? "bg-red-100 text-red-700"
                            : item.severity === "High"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-stone-100 text-stone-600"
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

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="small-business" number="08" title="Small Business: How to Run Reviews Without a Big Team" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The full six-color model assumes you have a large proposal department with writers,
              pricing analysts, subject-matter experts, and executives who can dedicate full days to
              review. Most small businesses don&apos;t have that. What they do have is enough people
              to run a trimmed-down version that delivers most of the value.
            </p>

            <Callout icon={Lightbulb} color="blue" title="The small business minimum viable review process">
              You need two reviews minimum: a Red Team near-final review (70–90% draft) and a Gold
              Team final check (100% draft, 48 hours before due). Those two gates will catch the
              majority of scoring problems and submission errors. If you can add a Pink Team in the
              first week, do it. If you can&apos;t, at minimum run a compliance matrix review with
              fresh eyes before you start writing, so the structure is right before you fill it in.
            </Callout>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Where to find reviewers when you don&apos;t have a bench</h3>

            <div className="space-y-4 my-6">
              {[
                {
                  icon: Users,
                  title: "Teaming partners",
                  desc: "If you&apos;re teamed with a large prime or other subcontractors, those partner staff have strong motivation to help you win — and they haven&apos;t written the proposal. They can serve as Red Team reviewers with a Section M rubric and the RFP in hand.",
                },
                {
                  icon: Eye,
                  title: "Proposal consultants",
                  desc: "Outsourcing color team reviews to a proposal consultant is standard practice for small businesses, particularly for high-value pursuits. The Bid Lab, OST Global Solutions, Lohfeld Consulting, and Hinz Consulting all offer review services. For a bid worth $1M+, a one-day external Red Team is a sound investment.",
                },
                {
                  icon: RefreshCw,
                  title: "Cross-functional internal reviewers",
                  desc: "Operations staff, finance managers, or senior technical staff who didn&apos;t write the proposal can serve as reviewers. They won&apos;t have the proposal expertise of a trained evaluator, but they will catch clarity problems, internal contradictions, and content that sounds obvious to the writers but confusing to everyone else.",
                },
                {
                  icon: Shield,
                  title: "AI-assisted compliance checking",
                  desc: "68% of proposal teams now use AI tools, according to the Bidara/Loopio 2026 report. AI-assisted compliance checking can partially substitute for a dedicated Pink Team compliance review when staff is limited — catching missing requirements and Section L non-compliance before human reviewers need to spend time on structural issues.",
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

            <p className="text-stone-700 leading-relaxed mb-4">
              The Bid Lab&apos;s guidance applies here: &quot;Make the right team members available instead
              of making the available team members right.&quot; Two good reviewers with the RFP and a
              scoring rubric outperform six reviewers who are reading without a framework.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 underline font-medium">
                capture management process
              </Link>{" "}
              that builds relationships before the RFP drops also identifies potential review
              resources early. If you&apos;re tracking an opportunity six months out, you have time to
              identify reviewers, put them on your calendar, and brief them on the opportunity —
              so when the RFP drops, your Red Team isn&apos;t being recruited in week three.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Before your next proposal, also check whether your{" "}
              <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-700 underline font-medium">
                bid/no-bid decision
              </Link>{" "}
              process is filtering correctly. Running a rigorous color team review on a proposal you
              shouldn&apos;t have bid in the first place is a waste of your best resources. The
              bid/no-bid decision determines which proposals get your full review effort — and which
              ones don&apos;t get your resources at all.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="The compounding effect of process maturity">
              APMP data shows that <strong>41% of APMP members report win rates above 50%</strong>,
              compared to significantly lower averages for non-members. The correlation isn&apos;t
              certification — it&apos;s process maturity. Contractors who systematically apply
              structured review processes, score consistently against Section M criteria, and
              run White Team lessons-learned sessions after every award compound those advantages
              over multiple proposal cycles. The companies winning at 50%+ today built that
              percentage over years of disciplined process — not over a single bid.
            </Callout>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 my-10">
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Build a proposal pipeline worth reviewing
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Color team reviews are only as good as the proposals they review. CapturePilot helps
                small businesses find the right opportunities, track them through the pipeline, and
                build proposals that hold up to evaluator scrutiny — with built-in compliance tracking,
                competitive intelligence, and proposal tools designed for contractors who don&apos;t have
                a 20-person proposal department.
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
                  href: "/blog/government-proposal-compliance-matrix",
                  title: "How to Build a Compliance Matrix for Government Proposals",
                  category: "Proposals",
                },
                {
                  href: "/blog/technical-volume-government-proposal",
                  title: "Writing a Winning Technical Volume for Government Proposals",
                  category: "Proposals",
                },
                {
                  href: "/blog/cost-volume-government-proposal",
                  title: "How to Write the Cost Volume of a Government Proposal",
                  category: "Proposals",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  title: "The Bid/No-Bid Decision Framework: Stopping Bad Pursuits Before They Start",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  title: "Government Contract Win Rates: What&apos;s Realistic and How to Improve Yours",
                  category: "Strategy",
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
