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
  FileText,
  ClipboardList,
  Zap,
  Shield,
  XCircle,
  Award,
  Search,
  Scale,
  Map,
  List,
  Eye,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-they-are", label: "What Section L and Section M Actually Are" },
  { id: "reading-section-l", label: "Reading Section L: The Instructions That Govern Your Submission" },
  { id: "reading-section-m", label: "Reading Section M: How the Government Will Score You" },
  { id: "compliance-matrix", label: "Building a Compliance Matrix From L and M Together" },
  { id: "structure-from-m", label: "How to Use Section M to Structure Your Proposal" },
  { id: "lpta-vs-best-value", label: "LPTA vs. Best Value: What Section M Tells You About How to Win" },
  { id: "common-mistakes", label: "Eight Mistakes That Cost Contractors Awards" },
  { id: "small-business", label: "Small Business Application: Making It Work Without a Proposal Team" },
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

export default function SectionLSectionMPage() {
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
            <span className="text-stone-900 font-medium">Section L and Section M</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Section L and Section M:{" "}
            <span className="gradient-text">
              How to Use an RFP&apos;s Own Instructions to Build a Winning Proposal
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Every federal RFP tells you exactly how it will be evaluated. Most contractors skim that
            information and write the proposal they want to write. The contractors who win read Section
            L and Section M first — and then structure every word of their proposal around what the
            government said it&apos;s looking for.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 3, 2026</span>
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
            <SectionHeading id="what-they-are" number="01" title="What Section L and Section M Actually Are" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Federal solicitations above the simplified acquisition threshold of $250,000 for negotiated
              acquisitions follow a standard document structure called the{" "}
              <strong>Uniform Contract Format (UCF)</strong>, defined in FAR 15.204-1. The UCF divides a
              solicitation into four parts and thirteen sections, labeled A through M. Two of those sections
              determine more than any other whether your proposal wins: Section L and Section M.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              They have separate jobs — and conflating them is the first mistake contractors make.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 font-bold rounded-tl-lg">Section</th>
                    <th className="text-left p-3 font-bold">Full Name</th>
                    <th className="text-left p-3 font-bold">FAR Reference</th>
                    <th className="text-left p-3 font-bold rounded-tr-lg">What It Controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-50 border-b border-stone-200">
                    <td className="p-3 font-bold text-stone-900">Section L</td>
                    <td className="p-3 text-stone-700">Instructions, Conditions, and Notices to Offerors</td>
                    <td className="p-3 text-stone-600 font-mono text-xs">FAR 52.215-1</td>
                    <td className="p-3 text-stone-600">How to prepare and submit your proposal — format, page limits, volumes, delivery</td>
                  </tr>
                  <tr className="bg-amber-50 border-b border-stone-200">
                    <td className="p-3 font-bold text-stone-900">Section M</td>
                    <td className="p-3 text-stone-700">Evaluation Factors for Award</td>
                    <td className="p-3 text-stone-600 font-mono text-xs">FAR 15.304</td>
                    <td className="p-3 text-stone-600">How the government will score your proposal — factors, subfactors, weights, and method of award</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Section L tells you the rules of submission. Section M tells you the rules of scoring. You
              need both. A proposal that violates Section L — wrong page count, missing volume, wrong font —
              can be rejected outright before evaluation begins. A proposal that complies perfectly with
              Section L but ignores Section M is technically acceptable and competitively useless.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Under FAR 15.304(d), agencies are required to include price or cost to the government in every
              source selection. Technical quality and past performance are typically also required. FAR
              15.304(c)(3) requires that solicitations disclose the relative importance of all evaluation
              factors — whether one factor is more important than another, or whether they&apos;re roughly
              equal. That disclosure is in Section M. Reading it before you write a single word of your
              proposal is not optional. It&apos;s the baseline.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The UCF only applies above $250K">
              The Uniform Contract Format governs negotiated acquisitions above the simplified acquisition
              threshold. For contracts under $250,000 using simplified acquisition procedures (FAR Part 13),
              agencies have much more flexibility — you may see a combined solicitation/contract form, a
              Request for Quote (RFQ), or a simplified purchase order. Those acquisitions won&apos;t
              always have a labeled Section L or M. The principles still apply; the structure may not.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              It&apos;s also worth noting that Section L content is often a combination of agency-specific
              instructions and incorporated clauses — including FAR 52.215-1 (Instructions to Offerors —
              Competitive Acquisition), which provides standard language about proposal preparation,
              amendments, and late proposals. Agencies then layer their own specific instructions on top of
              or in place of the standard clause provisions. Always read what&apos;s actually there — don&apos;t
              assume the standard language applies unchanged.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              One structural fact most contractors don&apos;t know: upon contract award, Part IV of the UCF —
              which contains Sections K, L, and M — is <strong>not incorporated into the resulting contract</strong>.
              Per FAR 15.204-1, the contracting officer retains Part IV in the contract file. These sections
              exist solely to govern the competition. Once you win, the contract is defined by Parts I-III.
              This is why you cannot rely on Section M language to resolve a post-award performance dispute —
              Section M governed the selection, not the work.
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
                  <p className="font-bold text-lg mb-1">Know your set-aside eligibility before the RFP drops</p>
                  <p className="text-blue-100 text-sm mb-4">
                    Section M often weights set-aside participation and socioeconomic factors. Know exactly
                    which programs you qualify for before you build your proposal strategy.
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
            <SectionHeading id="reading-section-l" number="02" title="Reading Section L: The Instructions That Govern Your Submission" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Section L is the rules of engagement for your submission. Violate them and your proposal
              may be rejected without evaluation — regardless of how strong your technical approach is.
              The GAO has repeatedly upheld agency rejections of proposals that failed to comply with
              Section L requirements, even when those failures were minor in the grand scheme of a
              500-page submission.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Most contractors scan Section L for obvious format requirements — font size, page limits,
              margins — and stop there. That&apos;s not reading Section L. Reading Section L means
              extracting every requirement that governs your submission and converting it into a checklist
              before you start writing.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">What to extract from Section L</h3>

            <div className="space-y-3 my-6">
              {[
                {
                  icon: ClipboardList,
                  title: "Volume structure and page limits",
                  desc: "How many volumes does the RFP require? What is each volume called, and what are the page limits per volume? Are attachments, resumes, and certifications included in the page count or excluded? These numbers become hard constraints before a single word is written.",
                },
                {
                  icon: FileText,
                  title: "Format specifications",
                  desc: "Font type and minimum size (typically 12-point Times New Roman or 11-point Calibri — check what's specified), margin sizes, line spacing, header/footer requirements, and naming conventions for electronic files. DoD solicitations in particular are strict on these. A violation is a technical deficiency, not a stylistic preference.",
                },
                {
                  icon: List,
                  title: "Required content by section",
                  desc: "Section L typically tells you exactly what each proposal volume must contain — and in what order. Technical approach must address the Performance Work Statement task areas in order. Key personnel must include resumes in a specific format. Past performance questionnaires must be submitted by a specified date. This is your content roadmap.",
                },
                {
                  icon: Map,
                  title: "Submission instructions and deadlines",
                  desc: "How must the proposal be delivered — electronic only, hard copy plus electronic, or both? What system (beta.SAM.gov, the agency procurement portal, email, overnight delivery)? Late proposals are almost always rejected. Build in buffer. One missed attachment or submission to the wrong portal is a disqualifier.",
                },
                {
                  icon: Shield,
                  title: "Certifications and representations required",
                  desc: "Section L often requires specific representations — that your pricing is independent, that you have reviewed the solicitation, that your past performance references have been notified. Some must be signed and submitted separately. Missing any one of these can lead to rejection as technically unacceptable.",
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
              The compliance matrix you build from Section L is the backbone of your proposal process.
              Every requirement gets a row. Every row gets a column for the proposal location where it&apos;s
              addressed, and a column for the person responsible. Nothing should be left unaddressed.{" "}
              <Link href="/blog/government-proposal-compliance-matrix" className="text-blue-700 underline font-medium">
                Our guide to building a compliance matrix
              </Link>{" "}
              walks through how to build one that actually works — not just a reference document that
              nobody checks.
            </p>

            <Callout icon={Lightbulb} color="sky" title="Watch for incorporated-by-reference clauses in Section L">
              Agencies frequently incorporate clauses by reference — a citation like &quot;FAR 52.215-1
              applies&quot; without printing the full clause text. These incorporated clauses still carry
              full legal force. If you don&apos;t pull the cited clause from the FAR and read it, you may
              miss requirements that affect your submission. The FAR is freely available at
              acquisition.gov — cross-reference every citation. Note also that FAR Part 15 underwent a
              significant overhaul under FAC 2025-06 (effective October 1, 2025), which reorganized
              Part 15 subparts and renamed &quot;discussions&quot; to &quot;negotiations.&quot; If you are working from
              older guidance or templates, verify citations against the current FAR text.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              One often-missed Section L element: page limit definitions. Some solicitations count a
              page as one side of a standard 8.5" x 11" sheet. Others count each unique page number.
              Still others exclude pages containing only figures or tables. Read the definition explicitly.
              Misunderstanding the counting method has caused contractors to submit proposals that are
              technically over the page limit without realizing it — and the agency to either reject the
              proposal outright or simply stop reading after the stated limit.
            </p>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="reading-section-m" number="03" title="Reading Section M: How the Government Will Score You" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Section M is the government&apos;s scoring rubric — made public. No other aspect of
              federal procurement gives you this kind of transparency into how you&apos;re being judged.
              Most contractors underuse it.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Under FAR 15.304, every Section M must do three things. It must identify the evaluation
              factors and significant subfactors that will be used. It must state the relative importance
              of those factors. And it must indicate whether the evaluation is conducted on a best value
              basis or lowest price technically acceptable (LPTA) basis. Each of those three elements
              changes how you should write your proposal.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">The evaluation factor hierarchy</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Section M organizes evaluation into factors, then subfactors. A typical best-value RFP
              might look like this:
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h4 className="font-bold text-stone-900 mb-4 text-sm">Example Section M structure (best value, technical/past performance/price)</h4>
              <div className="space-y-4">
                {[
                  {
                    factor: "Factor 1: Technical Approach",
                    weight: "Most Important",
                    subfactors: [
                      "1a. Understanding of the Requirement",
                      "1b. Technical Solution and Methodology",
                      "1c. Staffing Plan and Key Personnel",
                      "1d. Management Approach",
                    ],
                    color: "blue",
                  },
                  {
                    factor: "Factor 2: Past Performance",
                    weight: "Equal to Technical",
                    subfactors: [
                      "2a. Relevance of Prior Contracts",
                      "2b. Quality of Performance (CPARS ratings)",
                    ],
                    color: "violet",
                  },
                  {
                    factor: "Factor 3: Price/Cost",
                    weight: "Less Important than Technical and Past Performance combined",
                    subfactors: [
                      "3a. Total Evaluated Price",
                    ],
                    color: "emerald",
                  },
                ].map((row, i) => (
                  <div key={i} className={`rounded-xl border p-4 ${
                    row.color === "blue" ? "bg-blue-50 border-blue-200" :
                    row.color === "violet" ? "bg-violet-50 border-violet-200" :
                    "bg-emerald-50 border-emerald-200"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-stone-900 text-sm">{row.factor}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        row.color === "blue" ? "bg-blue-100 text-blue-700" :
                        row.color === "violet" ? "bg-violet-100 text-violet-700" :
                        "bg-emerald-100 text-emerald-700"
                      }`}>{row.weight}</span>
                    </div>
                    <div className="space-y-1">
                      {row.subfactors.map((sf, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <ChevronRight className="w-3 h-3 text-stone-400 flex-shrink-0" />
                          <span className="text-xs text-stone-600">{sf}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The importance ranking of factors tells you where to concentrate your writing effort.
              When Section M says Technical is more important than Past Performance, which is more
              important than Price — that&apos;s telling you to go deep on your technical approach. Price
              still matters, but marginal technical differentiation is worth more than marginal price
              reduction. Invert that weighting and you&apos;ve built the wrong proposal.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Pay close attention to how subfactors are weighted relative to each other. FAR 15.304(d)
              requires that solicitations disclose whether price is more or less important than technical
              factors, but agencies have flexibility in how they describe subfactor relationships. A
              statement like &quot;Subfactor 1a is the most important subfactor under Factor 1&quot; means your
              understanding of the requirement needs the strongest content in the technical volume —
              not your staffing plan, even if staffing gets more page count.
            </p>

            <Callout icon={BarChart3} color="blue" title="Past performance: the factor most contractors underestimate">
              Past performance is evaluated on two dimensions in most Section M rubrics: relevance
              and quality. Relevance asks whether your prior contracts were similar in scope, complexity,
              and dollar value to the requirement. Quality asks how well you performed — typically
              drawn from CPARS ratings and reference interviews. A contractor with Outstanding CPARS on
              irrelevant contracts scores lower than one with Good CPARS on highly relevant contracts.
              Read the relevance definition in Section M before selecting your past performance references.
              The wrong examples hurt you even if your actual performance was excellent.
            </Callout>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">How adjectival ratings work</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              Most source selections use adjectival ratings to score proposals. The DoD Source
              Selection Procedures (updated in April 2016 and still the primary DoD guidance) defines
              the standard scale as Outstanding, Good, Acceptable, Marginal, and Unacceptable for
              non-cost factors. Understanding what differentiates those ratings tells you exactly what
              evaluators are looking for when they read your proposal.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 font-bold rounded-tl-lg">Rating</th>
                    <th className="text-left p-3 font-bold">What It Means</th>
                    <th className="text-left p-3 font-bold rounded-tr-lg">What Your Proposal Must Show</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      rating: "Outstanding",
                      meaning: "Proposal indicates exceptional approach with significant strengths; very low risk; strengths far outweigh weaknesses",
                      show: "Specific, measurable differentiators — not just that you meet the requirement, but why your approach is better than alternatives",
                      bg: "bg-emerald-50",
                    },
                    {
                      rating: "Good",
                      meaning: "Proposal indicates thorough approach with strengths; few weaknesses; low risk of unsuccessful performance",
                      show: "Clear compliance plus at least one meaningful strength per subfactor that goes beyond minimum requirements",
                      bg: "bg-blue-50",
                    },
                    {
                      rating: "Acceptable",
                      meaning: "Proposal meets minimum requirements; strengths and weaknesses are roughly equal; some risk",
                      show: "Compliance with requirements — but no differentiation. This rating rarely wins a competitive procurement.",
                      bg: "bg-stone-50",
                    },
                    {
                      rating: "Marginal",
                      meaning: "Proposal has significant weaknesses; fails to meet some requirements; high risk",
                      show: "Compliance gaps or approaches the evaluator finds unconvincing — typically triggers a deficiency discussion",
                      bg: "bg-amber-50",
                    },
                    {
                      rating: "Unacceptable",
                      meaning: "Proposal fails to meet requirements; unacceptable risk; award cannot be made",
                      show: "Missing required content, non-compliant approach, or significant errors",
                      bg: "bg-red-50",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={`${row.bg} border-b border-stone-200`}>
                      <td className="p-3 font-bold text-stone-900 whitespace-nowrap">{row.rating}</td>
                      <td className="p-3 text-stone-700 text-xs leading-relaxed">{row.meaning}</td>
                      <td className="p-3 text-stone-600 text-xs leading-relaxed">{row.show}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The practical implication: an Acceptable rating is almost never enough to win a competitive
              best-value source selection. You need to demonstrate strengths — specific, evaluator-recognized
              advantages — to score Good or Outstanding. Section M is the document that tells you what
              strengths the agency is actually looking for. Build your win themes from its subfactors,
              not from your own view of what&apos;s impressive.
            </p>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="compliance-matrix" number="04" title="Building a Compliance Matrix From L and M Together" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The compliance matrix is where Section L and Section M stop being two separate documents
              and become one integrated proposal blueprint. Most contractors build compliance matrices
              from Section L only — tracking whether they&apos;ve followed the submission instructions.
              That catches disqualification risks but misses scoring risks entirely.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A full compliance matrix maps both: every Section L requirement (to avoid rejection) and
              every Section M factor and subfactor (to earn scores). Anything that appears in Section M
              but is not explicitly addressed somewhere in your proposal is a scoring gap — a place where
              evaluators have no evidence to give you credit.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">How to build the matrix</h3>

            <div className="space-y-4 my-6">
              {[
                {
                  step: "01",
                  title: "Read Section L and extract every requirement",
                  desc: "Go line by line. Every sentence that contains 'shall,' 'must,' 'will,' or 'is required' is a requirement. Extract it as a row in your matrix. Include formatting requirements, volume limits, content requirements, and submission instructions.",
                },
                {
                  step: "02",
                  title: "Read Section M and extract every factor and subfactor",
                  desc: "Each factor and subfactor gets its own row. If Section M describes what evaluators look for under each subfactor — specific capabilities, approaches, or evidence they want to see — extract that language too. It&apos;s the closest thing you&apos;ll get to a grading rubric.",
                },
                {
                  step: "03",
                  title: "Map Section M subfactors to Section L content requirements",
                  desc: "Where does Section L tell you to address the content that Section M will evaluate? Usually there&apos;s a direct mapping — Section M's technical approach subfactors correspond to the technical volume sections in Section L. Make that link explicit in your matrix.",
                },
                {
                  step: "04",
                  title: "Assign every row a proposal location and responsible person",
                  desc: "Each requirement must have a specific location in the proposal (volume, section, page range) and a named person responsible for addressing it. Unassigned requirements don&apos;t get addressed. The matrix becomes the project management tool for the proposal team.",
                },
                {
                  step: "05",
                  title: "Add a 'win theme' column for Section M rows",
                  desc: "For each evaluation factor and subfactor, note the win theme or discriminator your proposal will use to achieve a Good or Outstanding rating. This is where proposal strategy meets compliance — not just 'does it exist' but 'does it score well.'",
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

            <Callout icon={Eye} color="violet" title="Use the PWS and SOW as a third input">
              Section L and Section M are your two primary inputs, but the Performance Work Statement
              (PWS) or Statement of Work (SOW) provides a third. Section M often evaluates your
              understanding of and approach to the PWS tasks. Map the PWS task areas to your technical
              volume sections and to the Section M subfactors that evaluate technical approach. Any PWS
              task area not addressed in your technical volume is a scoring gap. Any Section M subfactor
              not supported by specific PWS references is an assertion without evidence.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The compliance matrix is not a document you build and file away. It should be the live
              control document throughout the proposal development process — updated as sections are
              drafted, used to run the{" "}
              <Link href="/blog/proposal-color-teams" className="text-blue-700 underline font-medium">
                Pink Team compliance review
              </Link>
              , and verified at the{" "}
              <Link href="/blog/proposal-color-teams" className="text-blue-700 underline font-medium">
                Red Team review
              </Link>{" "}
              against actual draft content. At Gold Team, the matrix should show every row green
              before you submit.
            </p>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="structure-from-m" number="05" title="How to Use Section M to Structure Your Proposal" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Section M is not just an evaluation document — it&apos;s an organizational tool. The factors
              and subfactors in Section M are a direct signal of what the agency wants to read about, in
              what order, and with what emphasis. The smartest proposal writers use Section M to design
              their document structure, then use Section L to validate that structure against submission
              requirements.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The principle: make it easy for evaluators to find the evidence they need to give you
              credit. Evaluators are reading dozens of proposals under time pressure. If your Section M
              Subfactor 1b content is buried across three different sections of your technical volume with
              no clear signposting, the evaluator either misses it or has to work to find it. Neither
              outcome serves you.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">The mirror structure method</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              The most effective structural approach is to mirror Section M in your proposal organization.
              Each major section of your technical volume corresponds directly to an evaluation factor.
              Each subsection corresponds to a subfactor. Evaluators following Section M can move directly
              to the relevant section in your proposal to find the evidence for each criterion.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h4 className="font-bold text-stone-900 mb-4 text-sm">Mirror structure example</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <p className="font-bold text-stone-900 text-xs mb-3">Section M says:</p>
                  <div className="space-y-2 text-xs text-stone-600">
                    <p><strong>Factor 1: Technical Approach</strong></p>
                    <p className="pl-3">1a. Understanding of the Requirement</p>
                    <p className="pl-3">1b. Technical Solution and Methodology</p>
                    <p className="pl-3">1c. Staffing Plan and Key Personnel</p>
                    <p className="pl-3">1d. Management Approach</p>
                  </div>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                  <p className="font-bold text-stone-900 text-xs mb-3">Your Technical Volume says:</p>
                  <div className="space-y-2 text-xs text-stone-600">
                    <p><strong>Volume I: Technical Approach</strong></p>
                    <p className="pl-3">Section 1: Understanding of the Requirement</p>
                    <p className="pl-3">Section 2: Technical Solution and Methodology</p>
                    <p className="pl-3">Section 3: Staffing Plan and Key Personnel</p>
                    <p className="pl-3">Section 4: Management Approach</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone-500 mt-4">
                The section headers use the same language as Section M. Evaluators find exactly where to
                look. No interpretation required.
              </p>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Some agencies specify their own required structure in Section L — and where that conflicts
              with a pure mirror of Section M, follow Section L. But where Section L gives you latitude
              in how you organize content within a volume or section, use Section M as your organizing
              principle.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Beyond structure, Section M tells you where to invest writing time. If Subfactor 1a
              (Understanding of the Requirement) is the most important subfactor, it deserves your most
              specific, most detailed content — not a paragraph-long affirmation that you&apos;ve read the
              PWS. Outstanding ratings come from specific evidence: named programs, quantified
              performance metrics from prior work, concrete examples of how you&apos;ve handled exactly
              this kind of requirement before.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-blue-700 underline font-medium">
                proposal tools
              </Link>{" "}
              help you track coverage across Section M subfactors throughout the writing process — so
              you can see which factors have strong content and which ones are thin before the Red Team
              finds it.
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
                    Track proposals from opportunity to submission
                  </p>
                  <p className="text-emerald-800 text-sm mb-4">
                    CapturePilot&apos;s pipeline tools track your pursuits, flag upcoming deadlines, and
                    keep your proposal team aligned from the day the RFP drops through submission.
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
            <SectionHeading id="lpta-vs-best-value" number="06" title="LPTA vs. Best Value: What Section M Tells You About How to Win" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Section M will tell you which source selection method the agency is using. That single
              sentence — often easy to miss in a long document — changes the entire proposal strategy.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Under FAR 15.101-1, a <strong>best value tradeoff</strong> allows the agency to select a
              technically superior offer at a higher price, if the additional value justifies the
              difference. Under FAR 15.101-2, an <strong>LPTA</strong> (Lowest Price Technically
              Acceptable) source selection awards to the lowest-priced offer that meets the minimum
              technical requirements. The evaluation method is not a detail — it&apos;s the entire
              decision framework.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 font-bold rounded-tl-lg">Dimension</th>
                    <th className="text-left p-3 font-bold">Best Value Tradeoff</th>
                    <th className="text-left p-3 font-bold rounded-tr-lg">LPTA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      dim: "Goal",
                      best: "Superior overall value — price AND quality",
                      lpta: "Minimum acceptable quality at lowest price",
                      bgBest: "bg-blue-50",
                      bgLpta: "bg-amber-50",
                    },
                    {
                      dim: "Technical strategy",
                      best: "Exceed requirements — demonstrate strengths above and beyond minimum. Higher scores justify higher prices.",
                      lpta: "Meet minimum requirements exactly. Exceeding requirements wastes writing effort and doesn't score better.",
                      bgBest: "bg-blue-50",
                      bgLpta: "bg-amber-50",
                    },
                    {
                      dim: "Price strategy",
                      best: "Price to win — competitive, but sacrifice price to protect technical score. Tradeoffs favor technical.",
                      lpta: "Be the lowest price that passes. There is no bonus for technical superiority.",
                      bgBest: "bg-blue-50",
                      bgLpta: "bg-amber-50",
                    },
                    {
                      dim: "Where to invest proposal writing time",
                      best: "Technical approach, past performance, key personnel — anywhere you can demonstrate strengths",
                      lpta: "Compliance and minimum requirements — focus on not failing, not on winning",
                      bgBest: "bg-blue-50",
                      bgLpta: "bg-amber-50",
                    },
                    {
                      dim: "Typical use cases",
                      best: "Complex, high-risk work where quality matters — IT modernization, professional services, R&D, mission-critical operations",
                      lpta: "Commodity-like services with clear specs — simple support services, straightforward supplies, commoditized labor",
                      bgBest: "bg-blue-50",
                      bgLpta: "bg-amber-50",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-stone-200">
                      <td className="p-3 font-bold text-stone-900 bg-stone-50 w-1/4 text-xs">{row.dim}</td>
                      <td className={`p-3 text-stone-700 text-xs leading-relaxed ${row.bgBest}`}>{row.best}</td>
                      <td className={`p-3 text-stone-700 text-xs leading-relaxed ${row.bgLpta}`}>{row.lpta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Congress has repeatedly pushed DoD to limit LPTA use. The FY2017 and FY2018 NDAAs directed
              DoD to restrict LPTA for specific categories, and DFARS 215.101-2-70 (effective October 2019)
              now prohibits DoD from using LPTA &quot;to the maximum extent practicable&quot; for IT services,
              cybersecurity services, systems engineering and technical assistance, advanced electronic
              testing, knowledge-based professional services, and certain training and logistics services.
              The FY2018 NDAA added an outright prohibition on LPTA for engineering and manufacturing
              development on major defense acquisition programs (MDAPs). If you&apos;re bidding DoD work in
              any of these categories and the solicitation uses LPTA, that could be a protest ground.
            </p>

            <Callout icon={BarChart3} color="sky" title="GAO FY2025 protest statistics: what they tell you about Section M">
              The GAO published its FY2025 bid protest annual report in December 2025: <strong>1,688 protests
              filed</strong> (down 6% from FY2024), a <strong>14% sustain rate</strong>, and a <strong>52% effectiveness
              rate</strong> — meaning in more than half of all protests, the protester obtained some form of
              relief. The top grounds for sustained protests in FY2025 were unreasonable technical
              evaluations and flawed selection decisions. Both grounds trace directly to Section M: the
              government either scored proposals inconsistently with its stated evaluation criteria, or
              made a best-value tradeoff decision that didn&apos;t follow the factor weights it published.
              Section M noncompliance by the government is your strongest protest ground when you lose.
            </Callout>

            <Callout icon={Scale} color="orange" title="Watch for hybrid approaches">
              Some solicitations use a modified best value approach — typically called a tradeoff with
              price as the primary differentiator or a &quot;technically acceptable, best value&quot; evaluation.
              Section M language like &quot;price is the most important factor, but only among technically
              acceptable offers&quot; means you must pass technical, and then price determines the winner.
              That&apos;s functionally LPTA without the name. Read the factor weighting language carefully —
              don&apos;t just look for the words &quot;LPTA&quot; or &quot;best value.&quot;
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For a deeper look at pricing strategy across both source selection types,{" "}
              <Link href="/blog/lpta-vs-best-value" className="text-blue-700 underline font-medium">
                our LPTA vs. best value guide
              </Link>{" "}
              covers how to calculate a competitive price and how to position your technical approach
              depending on which method you&apos;re facing. CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                competitive intelligence tools
              </Link>{" "}
              can pull historical award data to help you estimate what a winning price looks like for a
              specific agency and contract type.
            </p>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="07" title="Eight Mistakes That Cost Contractors Awards" />

            <p className="text-stone-700 leading-relaxed mb-4">
              These aren&apos;t hypothetical risks. They&apos;re patterns that show up in GAO protest
              decisions and agency debriefs — the concrete errors that converted competitive proposals
              into losses.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  number: "01",
                  title: "Treating Section L as the only compliance document",
                  desc: "Following submission instructions perfectly and then ignoring Section M evaluation criteria. The result is a technically compliant proposal that scores Acceptable on every factor — too low to win in any competitive field.",
                  severity: "Critical",
                },
                {
                  number: "02",
                  title: "Missing or wrong page count",
                  desc: "Submitting a proposal that exceeds or misinterprets the Section L page limit. The reverse risk is also real: ambiguous page limit language can sink an entire procurement. In Perimeter Security Partners, LLC (B-422666.4, March 2025), GAO sustained a protest because the Army's RFQ used vague language about what was excluded from the 15-page limit. GAO found the solicitation 'latently ambiguous' and ordered corrective action — meaning the entire competition had to be reopened. Read page limit definitions exactly as written, and if they're unclear, raise an agency question before the Q&A deadline.",
                  severity: "Critical",
                },
                {
                  number: "03",
                  title: "Addressing Section M factors out of order",
                  desc: "Writing a technical volume that doesn't correspond to the Section M subfactor structure. Evaluators assigned to score Subfactor 1b must hunt through your document to find relevant content. What they can't find easily, they discount or miss.",
                  severity: "High",
                },
                {
                  number: "04",
                  title: "Claiming strengths without evidence",
                  desc: "Writing 'Our team has extensive experience with X' instead of 'In Contract Number [####], our team delivered X for [Agency] 14% under budget, as reflected in our CPARS rating of Outstanding.' The first is an assertion. The second is a strength. Evaluators are trained to distinguish them.",
                  severity: "High",
                },
                {
                  number: "05",
                  title: "Wrong past performance references",
                  desc: "Submitting past performance examples that don't match Section M's relevance criteria — wrong scope, wrong dollar range, wrong complexity. Section M typically defines what 'relevant' means. Submit examples that meet that definition, not examples that are impressive by your own standard.",
                  severity: "High",
                },
                {
                  number: "06",
                  title: "Ignoring the factor weight hierarchy",
                  desc: "Spending equal writing effort on all factors regardless of how Section M weights them. When Technical is more important than Past Performance, which is more important than Price, your page count and depth should roughly reflect that hierarchy — not treat each equally.",
                  severity: "High",
                },
                {
                  number: "07",
                  title: "Applying best-value writing strategy to an LPTA solicitation",
                  desc: "Writing an elaborate technical approach full of innovations and enhancements on a Lowest Price Technically Acceptable solicitation. The evaluator doesn't have the authority to give you credit for exceeding minimum requirements. You wrote extra pages for no scoring benefit — and probably priced too high.",
                  severity: "Medium",
                },
                {
                  number: "08",
                  title: "Not reading amendments to Section L and M",
                  desc: "Most solicitations go through multiple amendments before the due date. Each amendment can change page limits, add or remove evaluation subfactors, or modify the definition of 'relevant' past performance. Contractors working from the original RFP and not tracking amendments submit proposals that respond to requirements that no longer exist.",
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

            <p className="text-stone-700 leading-relaxed mb-4">
              If you&apos;ve received a proposal debriefing that cited evaluation findings you didn&apos;t
              expect, most of them trace back to one of these eight patterns. The debrief is the
              government&apos;s best free consulting service — request it every time you lose.{" "}
              <Link href="/blog/government-contract-debriefing" className="text-blue-700 underline font-medium">
                Our guide to government contract debriefings
              </Link>{" "}
              walks through how to request one, what questions to ask, and how to translate the feedback
              into a better proposal on your next pursuit.
            </p>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="small-business" number="08" title="Small Business Application: Making It Work Without a Proposal Team" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Large prime contractors have proposal managers who own Section L and Section M analysis
              from the day the RFP drops. They build the compliance matrix, brief the writing team, and
              run reviews against the matrix throughout development. The approach is correct — the
              question is how a small business with two or three people working the proposal does the
              same thing.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The good news: the core discipline is not resource-intensive. Reading Section L and Section M
              carefully takes a few hours. Building a compliance matrix in a spreadsheet takes another
              few hours. Those hours pay for themselves in the proposal sections they keep from being
              written wrong.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="The minimum viable Section L/M process for small businesses">
              Before you write a single word: (1) Extract every Section L requirement into a
              spreadsheet. (2) Extract every Section M factor and subfactor. (3) Map each Section M item
              to the Section L section that addresses it. (4) Assign each row a section in your proposal
              and a person responsible. That four-step process, done in four hours, gives you a
              proposal blueprint. Everything after that is execution against the blueprint.
            </Callout>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Prioritizing under time constraints</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              When you have limited staff and a compressed response timeline, you can&apos;t apply equal
              effort to everything. Section M gives you the priority list. The most heavily weighted
              factor gets the deepest content and the most writing time. The least weighted factor gets
              minimum compliant coverage.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              This is not a license to be thin — thin content on any factor still risks a Marginal
              rating, which can be disqualifying depending on the agency&apos;s evaluation approach. But it
              does mean that if you have six hours left before submission and an underdeveloped Technical
              Approach section, you spend those hours there — not polishing the Management Approach
              section that carries 10% of the total evaluation weight.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: CheckCircle2,
                  label: "What Section L and M analysis gives you",
                  items: [
                    "A clear proposal structure before writing begins",
                    "Compliance requirements tracked to specific proposal locations",
                    "A scoring target for every evaluation factor",
                    "A prioritized writing schedule based on factor weights",
                    "A basis for the Red Team scoring rubric",
                    "Protection against submission disqualification",
                  ],
                  color: "emerald",
                },
                {
                  icon: XCircle,
                  label: "What it doesn't replace",
                  items: [
                    "Strong win themes grounded in customer knowledge",
                    "Relevant past performance examples",
                    "Specific technical differentiators vs. competitors",
                    "Realistic, competitive pricing",
                    "A structured proposal review process",
                    "Pre-RFP relationship with the agency",
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
              The contractors who develop strong Section L/M analysis skills over multiple proposals
              accumulate another advantage: they get better at qualifying opportunities before they
              commit to writing. Reading Section M on an opportunity you&apos;re considering tells you
              whether the agency&apos;s evaluation criteria actually favor your strengths. A Section M that
              heavily weights past performance in contracts you&apos;ve never performed is a signal to
              reconsider — or to find a teaming partner who fills that gap before you bid alone.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For the{" "}
              <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-700 underline font-medium">
                bid/no-bid decision
              </Link>
              , Section M analysis is one of the most actionable inputs you can have. If the weighted
              factors don&apos;t align with your demonstrated strengths, your probability of win is low
              regardless of how well you write. Using CapturePilot&apos;s{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                pipeline tools
              </Link>{" "}
              to track your past performance profile against the Section M criteria of live opportunities
              helps you invest proposal effort where you actually have a path to win.
            </p>

            <Callout icon={Award} color="sky" title="Section L/M analysis pairs with pre-RFP positioning">
              The most effective use of Section M isn&apos;t reacting to it after the RFP drops — it&apos;s
              using pre-solicitation documents (Sources Sought notices, RFIs, draft RFPs) to anticipate
              what Section M will say. When you can predict the evaluation factors before the final RFP
              releases, you can build your past performance portfolio, adjust your key personnel lineup,
              and develop your technical approach weeks before the proposal clock starts.{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 underline font-medium">
                See our guide to sources sought notices
              </Link>{" "}
              for how to use pre-solicitation intelligence to position for the final competition.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Finally: every proposal you submit — win or lose — is a source of Section L/M intelligence.
              Which evaluation factors did the winning contractor score highest on? The debrief will often
              tell you. Over time, you develop pattern recognition for how specific agencies write their
              Section M language and which factors they consistently prioritize. That institutional
              knowledge compounds. The contractors winning consistently aren&apos;t just reading Section L
              and M correctly. They&apos;re reading it in the context of everything they&apos;ve learned about
              how this specific agency makes award decisions.
            </p>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 my-10">
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Build proposals that match what agencies are actually scoring
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                CapturePilot helps small businesses find the right opportunities, understand the competitive
                landscape before the RFP drops, and build proposals structured around what evaluators
                are scoring — with pipeline tracking, past performance management, competitive intelligence,
                and proposal tools designed for contractors who don&apos;t have a 20-person proposal department.
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
                  href: "/blog/proposal-color-teams",
                  title: "Proposal Color Teams: How Winning Contractors Review Bids Before Submission",
                  category: "Proposals",
                },
                {
                  href: "/blog/lpta-vs-best-value",
                  title: "LPTA vs Best Value: Which Source Selection Method to Expect and How to Win Both",
                  category: "Proposals",
                },
                {
                  href: "/blog/government-contract-debriefing",
                  title: "Government Contract Debriefings: How to Get Feedback After a Loss",
                  category: "Strategy",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits Before They Start",
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
