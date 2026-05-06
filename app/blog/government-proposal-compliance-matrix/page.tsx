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
  ClipboardList,
  Target,
  Zap,
  BarChart3,
  Eye,
  RefreshCw,
  Sparkles,
  XCircle,
  ListChecks,
  PenLine,
  Search,
  Clock,
  Shield,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-compliance-fails", label: "Why Compliance Failures Kill Good Proposals" },
  { id: "rfp-sections", label: "The RFP Sections You're Mining" },
  { id: "build-the-matrix", label: "How to Build the Matrix: Step by Step" },
  { id: "matrix-columns", label: "The Columns That Make Your Matrix Work" },
  { id: "color-coding", label: "Color Coding and Status Tracking" },
  { id: "review-process", label: "The Matrix in Pink Team, Red Team, and Final Reviews" },
  { id: "common-mistakes", label: "Common Compliance Mistakes and the Assumptions Behind Them" },
  { id: "automate", label: "When to Automate the Matrix" },
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

export default function ComplianceMatrixPage() {
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
            <span className="text-stone-900 font-medium">Compliance Matrix</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <ClipboardList className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Build a Compliance Matrix{" "}
            <span className="gradient-text">for Government Proposals</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Between <strong className="text-stone-700">30% and 50%</strong> of government proposals
            are rejected before evaluators read a single word of your technical approach — eliminated
            for non-compliance with RFP instructions. A compliance matrix is the tool that prevents
            that from happening to yours.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 6, 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-violet-700 transition-colors py-1"
                >
                  <span className="text-violet-600 font-mono text-xs">
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
            id="why-compliance-fails"
            number="01"
            title="Why Compliance Failures Kill Good Proposals"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Evaluators don&apos;t start by reading your technical approach. They start by checking
              whether you followed the rules. Government proposals go through an initial compliance
              screening before they reach the source selection team — and proposals that fail that
              screening don&apos;t get scored, they get eliminated.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The numbers are stark. Industry data consistently shows that{" "}
              <strong>30–50% of government proposals are rejected outright for non-compliance</strong>{" "}
              with basic RFP guidelines. For first-time bidders, that figure is even higher — more
              than half of first bids fail before anyone evaluates the actual proposal content.
              These aren&apos;t close calls. The disqualifiers are mechanical: wrong page count,
              missing forms, wrong font size, required section not addressed.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The painful part is that these rejections have nothing to do with the quality of your
              solution. A firm with genuinely superior technical capability loses to a mediocre
              competitor because the mediocre competitor counted their pages and included their
              certifications. A compliance matrix closes that gap.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                {
                  stat: "30–50%",
                  label: "Proposals rejected for non-compliance before scoring",
                  icon: XCircle,
                },
                {
                  stat: ">50%",
                  label: "First-time bids eliminated on compliance alone",
                  icon: AlertTriangle,
                },
                {
                  stat: "10–15%",
                  label: "Proposals disqualified for late submission",
                  icon: Clock,
                },
                {
                  stat: "50–60%",
                  label: "Reduction in response time with proposal automation",
                  icon: Zap,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-violet-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              A compliance matrix is exactly what it sounds like: a structured document — usually a
              spreadsheet — that maps every requirement in the RFP to the exact location in your
              proposal where you addressed it. It proves that nothing slipped through. It tells your
              proposal manager which sections are complete, which are at risk, and who owns what.
              And when evaluators use a checklist to score submissions (which many agencies explicitly
              do under FAR Part 15), your matrix is the internal mirror of their external scorecard.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Some agencies even require contractors to submit a compliance matrix as part of the
              proposal package. When that&apos;s the case, a missing or sloppy matrix is itself a
              compliance failure. Even when it&apos;s not required, a well-built matrix is the
              single most reliable way to ensure your proposal survives the first cut.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="Compliance Is the Floor, Not the Ceiling">
            A compliant proposal doesn&apos;t win — it just survives long enough to be evaluated. But
            a non-compliant proposal loses before the competition even begins. The compliance matrix
            is how you make sure that all the time you spent writing a great technical approach
            actually gets read.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="rfp-sections"
            number="02"
            title="The RFP Sections You're Mining"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal RFPs follow a standard structure defined by FAR Part 15. Each section
              contains requirements — and the compliance matrix must cover all of them, not just the
              obvious ones. Most teams get Section L and M right and miss the requirements embedded
              in other sections.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s what each major section contains and what you&apos;re looking for in each:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Section</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Contents</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What to Extract</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        section: "Section C — SOW / PWS / SOO",
                        contents: "Statement of Work, Performance Work Statement, or Statement of Objectives. This is what the government wants done.",
                        extract: "Every deliverable, task, reporting requirement, and technical capability the offeror must address or demonstrate.",
                      },
                      {
                        section: "Section L — Instructions",
                        contents: "Instructions to offerors: how to structure your proposal, page limits, font requirements, volume organization, submission format, deadline.",
                        extract: "Every format rule, page limit, font/margin specification, file format, volume structure, and submission deadline. These are hard compliance rules.",
                      },
                      {
                        section: "Section M — Evaluation Criteria",
                        contents: "How your proposal will be scored: evaluation factors, sub-factors, relative weights, and basis for award.",
                        extract: "Every evaluation factor and sub-factor. Your proposal must address each one explicitly — evaluators can only score what you show them.",
                      },
                      {
                        section: "Section H — Special Contract Requirements",
                        contents: "Agency-specific requirements: security clearances, key personnel clauses, subcontracting plans, transition requirements.",
                        extract: "Any requirement that triggers a deliverable (clearances, plans, certifications, documentation) that belongs in your proposal or in contract execution.",
                      },
                      {
                        section: "Section J — Attachments",
                        contents: "Forms, certifications, wage determinations, data rights clauses, performance metrics, past performance questionnaires.",
                        extract: "Every required form or certification that must be submitted with the proposal. Missing a J attachment is a common hard-fail.",
                      },
                      {
                        section: "Amendments (if any)",
                        contents: "Post-release modifications to the RFP — may change page limits, evaluation criteria, deadlines, or technical requirements.",
                        extract: "Every change from the original solicitation. Amendments supersede the original. Proposals evaluated against the unamended RFP fail.",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-violet-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs whitespace-nowrap align-top">{row.section}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed align-top">{row.contents}</td>
                        <td className="px-5 py-3 text-violet-700 text-xs leading-relaxed align-top">{row.extract}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The two sections that produce the most compliance failures are Section L and the
              attachments in Section J — not because they&apos;re hard to find, but because teams
              treat them as administrative and don&apos;t read them carefully. A Section L
              instruction that says &quot;provide page numbers in the footer of each volume&quot;
              isn&apos;t a suggestion. Neither is &quot;submit no more than 25 pages excluding
              resumes and past performance.&quot;
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Section M deserves its own dedicated compliance pass. Evaluation criteria tell you
              exactly what the scoring team is looking for — and if your proposal doesn&apos;t
              address a sub-factor, evaluators have no basis to give you credit on it, regardless of
              how strong your overall technical approach is. Many proposal teams write a great
              response to the Statement of Work but miss sub-factors buried in Section M that require
              specific evidence (certifications, named personnel, methodology descriptions) the SOW
              never explicitly asked for.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Amendments are the silent killer. When an agency releases a solicitation amendment, it
              can change page limits, extend deadlines, modify evaluation factors, or completely
              revise a section of the PWS. Teams that lock in their compliance matrix before the
              amendment closes and don&apos;t update it are writing to a superseded document. Every
              amendment must trigger a matrix review.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Don't Just Read Section L and M — Read Section H Too">
            Section H (Special Contract Requirements) contains agency-specific clauses that regularly
            generate compliance obligations. Common examples: security clearance requirements (which
            determine whether your key personnel can actually perform), mandatory subcontracting plans
            (which require a specific volume or attachment), and key personnel substitution clauses
            (which may require government approval for any personnel change). Missing these is a
            compliance failure that surfaces at award — not at proposal evaluation, which is even
            more damaging.
          </Callout>

          {/* Section 3 */}
          <SectionHeading
            id="build-the-matrix"
            number="03"
            title="How to Build the Matrix: Step by Step"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Build the compliance matrix on day one of proposal development — not the week before
              submission. The matrix is the scaffolding for your entire proposal structure. If you
              build it late, you&apos;re retrofitting compliance onto a document that was written
              without it, which is exactly the kind of patchwork approach that produces errors.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s the sequence, from RFP release to first draft:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Read the entire solicitation before touching the spreadsheet",
                  desc: "This sounds obvious. Do it anyway. Most compliance failures happen because someone extracted requirements from Section L without reading the PWS, or skimmed Section M without reading the evaluation narrative. You need a mental model of the entire requirement before you can correctly categorize what goes where in your matrix. Budget 3–4 hours for initial solicitation review on a complex RFP.",
                },
                {
                  step: "02",
                  title: "Identify all requirement sources and assign a source code",
                  desc: "List every section of the RFP that contains compliance requirements: Section C (SOW/PWS), Section L (instructions), Section M (evaluation criteria), Section H (special requirements), Section J (attachments), and any amendments. Give each a short source code (C, L, M, H, J, A-01 for amendment 1, etc.) that you'll reference in the matrix. This lets you sort and filter requirements by source during reviews.",
                },
                {
                  step: "03",
                  title: "Extract every requirement — verbatim first, then summarize",
                  desc: "Copy the exact text of each requirement into the matrix before you paraphrase it. Paraphrasing first introduces interpretation errors. Once you have the verbatim text, write a one-line summary in plain English in an adjacent column. This gives you both a precise reference and a scannable summary during team reviews. For Section L, extract every shall, must, will, and specific instruction. For Section M, extract every factor, sub-factor, and evaluation note.",
                },
                {
                  step: "04",
                  title: "Map each requirement to a proposal section",
                  desc: "Assign each extracted requirement to the volume, section, and paragraph of your proposal outline where it will be addressed. This mapping is the core of the matrix. If a requirement doesn't have a home in your outline yet, add it now — don't leave it unmapped and expect to remember it. Requirements that map to multiple proposal sections get a row in the matrix for each section where they need to appear.",
                },
                {
                  step: "05",
                  title: "Assign ownership and due dates",
                  desc: "Every row in the matrix needs a name next to it. The person responsible for drafting that section owns compliance for every requirement mapped to it. Set internal due dates based on your review schedule — typically 7–10 days before submission for technical volumes, 5 days for cost volume and forms. Make the matrix the canonical source for who is writing what.",
                },
                {
                  step: "06",
                  title: "Update the matrix as amendments arrive",
                  desc: "Lock a team member to own amendment tracking. When an amendment drops, that person updates the matrix — adjusting requirement text, adding new requirements, removing superseded ones, and updating any affected mapping. The matrix version should be date-stamped whenever it changes. A matrix that doesn't reflect the latest amendment is more dangerous than no matrix at all.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
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
              The matrix becomes most valuable during the first week of writing. When a proposal
              writer asks &quot;what do I need to cover in this section?&quot; the answer is in
              the matrix — filtered by their assigned section. They don&apos;t need to re-read the
              solicitation. They don&apos;t need to guess. Every requirement their section must
              address is already listed, with the verbatim text and the exact source reference.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For teams using{" "}
              <Link href="/features/proposals" className="text-violet-700 underline font-medium">
                CapturePilot&apos;s proposal management tools
              </Link>
              , the matrix integrates directly with your proposal outline — so requirement mapping,
              owner assignments, and section status are tracked in one place rather than across a
              shared spreadsheet and a separate project management tool.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-violet-50 border border-violet-200 rounded-2xl p-8 text-center animate-on-scroll">
            <ClipboardList className="w-10 h-10 text-violet-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Know Which Contracts You&apos;re Actually Eligible to Pursue
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Before you build a compliance matrix, make sure you&apos;re bidding on contracts your
              certifications qualify you for. Our Quick Checker tells you in under 3 minutes — free.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-violet-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">Free, no account required</p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="matrix-columns"
            number="04"
            title="The Columns That Make Your Matrix Work"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A compliance matrix with the wrong columns is just a busy spreadsheet. The columns you
              include determine whether the matrix is a working tool or a documentation artifact that
              nobody updates. These seven columns are the minimum viable set for a federal proposal:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Column</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What Goes Here</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        col: "Req. ID",
                        what: "Unique sequential number (e.g., L-01, M-03, C-12)",
                        why: "Lets you reference specific requirements in reviews without quoting the full text. 'Red Team comment on M-07' is unambiguous.",
                      },
                      {
                        col: "Source",
                        what: "Exact RFP location: Section, paragraph, page number (e.g., Section L, Para 4.2, p. 31)",
                        why: "When a dispute arises over what the requirement actually says, everyone can go directly to the source. Paraphrasing without source references creates interpretation drift.",
                      },
                      {
                        col: "Requirement Text",
                        what: "Verbatim language from the RFP — copied exactly, not summarized",
                        why: "The verbatim text is the legal standard. Summaries introduce interpretation errors. Keep the full text here; add a one-line plain-English summary in the next column.",
                      },
                      {
                        col: "Summary",
                        what: "One-line plain English description of what's required",
                        why: "Makes the matrix scannable during team standup and reviews. Writers reference the summary; reviewers verify against the verbatim text.",
                      },
                      {
                        col: "Proposal Location",
                        what: "Volume, section, and paragraph where this requirement is addressed",
                        why: "This is the mapping that makes the matrix useful. Every requirement must have a home. 'TBD' is a red flag that becomes a compliance gap.",
                      },
                      {
                        col: "Owner",
                        what: "Name of the person responsible for writing that section",
                        why: "Accountability requires a name, not a team or a role. One person per requirement. If two people share ownership, neither owns it.",
                      },
                      {
                        col: "Status",
                        what: "Not Started / In Progress / Draft Complete / Reviewed / Final",
                        why: "The proposal manager's dashboard. At a glance: which requirements are behind, which are complete, which need review. Color-code this column.",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-violet-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-bold text-violet-700 text-xs whitespace-nowrap align-top">{row.col}</td>
                        <td className="px-5 py-3 text-stone-700 text-xs leading-relaxed align-top">{row.what}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-relaxed align-top">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For larger proposals, add two optional columns that significantly improve review
              quality. A <strong>Compliance Risk</strong> column (High / Medium / Low) flags
              requirements where your team has a known weakness — a Section M sub-factor where your
              past performance is thin, or a Section L format requirement that conflicts with your
              preferred outline structure. A <strong>Evaluator Emphasis</strong> column captures
              any language in Section M indicating which factors are most important (e.g.,
              &quot;Technical/Management is significantly more important than Past Performance&quot;)
              — this helps writers prioritize depth across sections when time is short.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Keep the matrix lean enough to actually use. Every column you add increases the
              maintenance burden. If a column isn&apos;t being checked at every review gate, cut it.
              The goal is a living document that the proposal team actually opens every day — not
              a comprehensive audit trail that sits unread until the proposal is submitted.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Separate matrices for Section L (format compliance) and Section M (evaluation
              compliance) can be useful on very complex proposals — over 50 pages of instructions
              or more than 8 evaluation factors. For most proposals, a single integrated matrix
              with source codes in the &quot;Source&quot; column is sufficient and easier to
              maintain.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Build the Matrix Before the Proposal Outline — Not After">
            Most teams build an outline first, then try to map requirements onto it. That approach
            produces outlines that organize the way the contractor thinks about the solution —
            not the way the evaluator is trained to assess it. Build the compliance matrix first.
            Let the requirements define the structure. Your outline sections should correspond
            directly to what evaluators are looking for, not to your internal narrative preferences.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="color-coding"
            number="05"
            title="Color Coding and Status Tracking"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Color coding isn&apos;t aesthetics. It&apos;s the mechanism that lets a proposal
              manager look at a 200-row spreadsheet and immediately see which requirements are
              at risk. Without it, the Status column requires reading every cell. With a simple
              color scheme, risk is visible at a glance.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  color: "bg-red-100 border-red-300",
                  textColor: "text-red-800",
                  label: "Red — Not Started / Blocked",
                  desc: "Requirement has no draft and is either unassigned or the owner is blocked. Any red row with fewer than 5 days to submission is a potential compliance failure. These get reviewed first in every standup.",
                },
                {
                  color: "bg-amber-100 border-amber-300",
                  textColor: "text-amber-800",
                  label: "Yellow — In Progress / At Risk",
                  desc: "Requirement is being worked but isn't complete. Yellow rows within 48 hours of a review gate need an escalation decision: push the deadline, add a writer, or accept incomplete coverage and document the risk.",
                },
                {
                  color: "bg-blue-100 border-blue-300",
                  textColor: "text-blue-800",
                  label: "Blue — Draft Complete, Awaiting Review",
                  desc: "Writer has submitted a draft but the requirement hasn't been reviewed against the RFP source. Blue is not compliant — it's pending compliance verification. Never submit a proposal with blue rows.",
                },
                {
                  color: "bg-emerald-100 border-emerald-300",
                  textColor: "text-emerald-800",
                  label: "Green — Reviewed and Compliant",
                  desc: "A reviewer (not the original writer) has confirmed that the proposal section addresses the requirement as stated in the RFP. Green means verified compliant — not just written. The difference matters.",
                },
                {
                  color: "bg-stone-100 border-stone-300",
                  textColor: "text-stone-700",
                  label: "Gray — Not Applicable / Waived",
                  desc: "Requirement confirmed not applicable to your proposal (e.g., a subcontracting plan requirement when you're a sole bidder with no subs) or formally waived by the government in writing. Must include a note explaining why.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-4 rounded-xl border-2 ${item.color} animate-on-scroll`}
                >
                  <div className="flex-1">
                    <p className={`font-bold text-sm mb-1 ${item.textColor}`}>{item.label}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Run a daily color report starting two weeks before submission. Count red, yellow, and
              blue rows against your remaining time. If you have 40 yellow rows and 4 days left,
              and each row takes 2 hours to write, you&apos;re looking at 80 writing hours — which
              isn&apos;t possible for most teams. That math forces an explicit decision: which
              requirements are getting cut from the scope, which require a team surge, and which are
              acceptable risks based on their evaluation weight.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The proposal manager owns the color report. Writers are responsible for updating
              their own rows to &quot;Draft Complete&quot; when their draft is ready for review —
              not when they think it&apos;s finished. The distinction: a draft is ready for review
              when it can be read and assessed, not when it&apos;s polished. Reviewers can&apos;t
              review what they don&apos;t have, and a late draft is worse than an early imperfect one.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="'Draft Complete' Is Not 'Compliant'">
            The most dangerous moment in a proposal cycle is when teams treat a completed draft as
            a compliant proposal. Writing that addresses the requirement as you understood it is
            not the same as writing that satisfies the requirement as the RFP stated it. Compliance
            verification requires reading the verbatim requirement text against the draft — not just
            confirming that a draft exists. This is why the Blue status category exists: it separates
            &quot;written&quot; from &quot;verified.&quot;
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="review-process"
            number="06"
            title="The Matrix in Pink Team, Red Team, and Final Reviews"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Proposal reviews exist to catch what writers miss. The compliance matrix makes every
              review more efficient by giving reviewers a structured agenda instead of an open-ended
              reading exercise. Different review gates use the matrix differently:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Eye,
                  title: "Pink Team Review (Early Draft — 50–60% Complete)",
                  desc: "At the pink team stage, the matrix is more important than the prose. Pink team reviewers should check: Is every requirement mapped to a proposal section? Is every section of the proposal traceable back to at least one requirement? Are there any red or blocked rows that signal compliance gaps before writing gets further? The pink team doesn't need polished writing — it needs to confirm the structure will produce a compliant proposal.",
                },
                {
                  icon: Target,
                  title: "Red Team Review (Full Draft — 80–90% Complete)",
                  desc: "By red team, the matrix should be mostly green with a small number of yellow or blue rows. Red team reviewers use the matrix to confirm that each requirement has substantive coverage — not just a mention, but actual responsive content. For Section M sub-factors, reviewers confirm that every evaluation criterion has a clearly labeled, findable response in the proposal. A Section M criterion with no visible response is a scoring gap, not just a compliance issue.",
                },
                {
                  icon: CheckCircle2,
                  title: "Compliance Review (Final — 24–48 Hours Before Submission)",
                  desc: "The compliance review is the last gate before submission. Every row must be green. Every Section L format requirement must be physically verified: count pages, check fonts and margins, confirm headers and footers, verify that all required forms are present and correctly completed. This is a mechanical check, not an editorial one. Use two people — one reads from the matrix, one verifies in the document. Never trust a solo self-review at this stage.",
                },
                {
                  icon: RefreshCw,
                  title: "Amendment Update Review (Ad Hoc)",
                  desc: "Every solicitation amendment triggers an immediate matrix review. Assign one person to compare the amendment against the current matrix, identify changed or new requirements, update affected rows, and alert the section owners whose work is now inconsistent with the revised RFP. This review can't wait until the next scheduled gate — amendments often arrive with short updated deadlines.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One discipline that makes reviews faster: build an explicit cross-reference table in
              your proposal — a page that shows each Section M factor and the proposal sections
              that address it. Many agencies require this as part of the proposal package. Even when
              they don&apos;t, it demonstrates that you organized your proposal around what they&apos;re
              evaluating, not around what was easiest for your team to write. Evaluators notice.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For more on the overall proposal process, including how to structure technical and
              management volumes, see our{" "}
              <Link
                href="/blog/proposal-writing-tips"
                className="text-violet-700 underline font-medium"
              >
                proposal writing tips guide
              </Link>{" "}
              and our deep-dive on{" "}
              <Link
                href="/features/proposals"
                className="text-violet-700 underline font-medium"
              >
                CapturePilot&apos;s proposal management features
              </Link>
              .
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-violet-400" />
            <h3 className="text-2xl font-black mb-3">Manage Your Proposals Without the Spreadsheet Chaos</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot&apos;s proposal tools track compliance requirements, section ownership,
              and review status — so your team spends time writing great responses, not chasing
              spreadsheet updates.
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

          {/* Section 7 */}
          <SectionHeading
            id="common-mistakes"
            number="07"
            title="Common Compliance Mistakes and the Assumptions Behind Them"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Every recurring compliance failure comes from a specific wrong assumption. Understanding
              the assumption matters more than memorizing the failure — because the same assumption
              produces different failures on different solicitations.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: XCircle,
                  title: "Failure: Exceeding page limits",
                  assumption: "Wrong assumption: 'The evaluator will read it anyway — a few extra pages won't matter.' It matters. FAR Part 15 allows agencies to reject proposals that exceed page limits, and many agencies exercise that option without exception. Count pages in your final formatted document, not in your draft text editor, and count them again after formatting.",
                },
                {
                  icon: XCircle,
                  title: "Failure: Missing required forms or certifications",
                  assumption: "Wrong assumption: 'That form is standard — it must already be in our standard proposal package.' Forms change. Size standards change. Certifications expire. The compliance matrix must include every required form from Section J of the specific solicitation, verified against the current solicitation — not from a prior proposal's template. Required forms should be audited by a second person at the compliance review gate.",
                },
                {
                  icon: XCircle,
                  title: "Failure: Not addressing a Section M sub-factor explicitly",
                  assumption: "Wrong assumption: 'We addressed that in the technical approach — they'll see it.' Evaluators score what they can find, not what they can infer. If your response to a Section M sub-factor requires the evaluator to connect dots across different sections, many won't — and you won't get credit. Label responses with the evaluation factor they address. Make compliance visible, not inferential.",
                },
                {
                  icon: XCircle,
                  title: "Failure: Using old templates that pre-date the current solicitation",
                  assumption: "Wrong assumption: 'We've bid this agency before — we can reuse our last proposal as a starting point.' Reuse is efficient. Unadapted reuse is dangerous. Old proposals have old RFP structures, old evaluation criteria, old page limits. Every proposal must be validated against the actual solicitation, not against the last bid. Start with your templates, but run every section through the compliance matrix before writing.",
                },
                {
                  icon: XCircle,
                  title: "Failure: Missing the amendment that changed the deadline",
                  assumption: "Wrong assumption: 'No one told me there was an amendment.' Solicitation amendments are posted to SAM.gov and emailed to registered interested parties — but only to vendors who formally registered interest in the solicitation. If you didn&apos;t register, you may not receive amendment notifications. Check SAM.gov for amendments on every active solicitation at least weekly, and assign someone to own that check.",
                },
                {
                  icon: XCircle,
                  title: "Failure: Key personnel resumes don't match Section L requirements",
                  assumption: "Wrong assumption: 'Our resume format is professional — it'll be fine.' Section L often specifies exactly what a resume must include: format, length (usually 2 pages max), required fields, and how qualifications should be demonstrated. A beautifully formatted resume that's 3 pages long when the instruction says 2 is a compliance failure on every person it applies to.",
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
                    <p className="text-stone-600 text-sm leading-relaxed">{item.assumption}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The common thread: every compliance failure is the result of a shortcut that seemed
              reasonable under time pressure. The compliance matrix doesn&apos;t eliminate time
              pressure. It forces you to see the risk clearly so the shortcut is a deliberate
              choice, not an accidental omission.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For an overview of the complete bid/no-bid decision framework — which happens before
              the compliance matrix, but determines whether you should build one at all — see our
              guide on{" "}
              <Link
                href="/blog/government-contract-win-rate"
                className="text-violet-700 underline font-medium"
              >
                improving your government contract win rate
              </Link>
              .
            </p>
          </div>

          <Callout icon={Shield} color="emerald" title="Compliance is a Team Discipline, Not a Document">
            A compliance matrix doesn&apos;t guarantee compliance — the team using it does. The
            matrix is a tool that requires a proposal manager who enforces it, writers who update it
            honestly, and reviewers who verify it rather than assume. A matrix that gets built on
            day one and opened again at submission is not a working matrix. It should be touched
            every day the proposal is being written.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="automate"
            number="08"
            title="When to Automate the Matrix"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Building a compliance matrix manually for a 100-page RFP takes 8–12 hours. Proposal
              automation tools that parse solicitations and generate compliance matrices automatically
              reduce that to under an hour — and industry data shows they cut total proposal
              response time by <strong>50–60%</strong> across the full cycle. At some proposal
              volume, manual matrix building becomes the bottleneck.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s a framework for deciding when to automate and when a manual process is
              sufficient:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Signal</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Manual Matrix</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Automation Worth Evaluating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        signal: "Number of active proposals at once",
                        manual: "1–2 concurrent proposals",
                        auto: "3 or more concurrent proposals",
                      },
                      {
                        signal: "Proposal frequency",
                        manual: "Fewer than 6 proposals per year",
                        auto: "More than 8–10 proposals per year",
                      },
                      {
                        signal: "RFP complexity",
                        manual: "Under 50 pages, simple section structure",
                        auto: "Over 75 pages, multiple volumes, complex Section M",
                      },
                      {
                        signal: "Team size",
                        manual: "2–3 writers, one proposal manager",
                        auto: "Distributed teams across multiple locations or subcontractors",
                      },
                      {
                        signal: "Time from RFP release to submission",
                        manual: "21+ days",
                        auto: "Under 14 days — short-turn proposals where matrix build time is proportionally large",
                      },
                      {
                        signal: "Amendment frequency",
                        manual: "0–1 amendments per solicitation",
                        auto: "Multiple amendments common — automated re-parsing on each amendment update",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-violet-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs align-top">{row.signal}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed align-top">{row.manual}</td>
                        <td className="px-5 py-3 text-violet-700 text-xs font-medium leading-relaxed align-top">{row.auto}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The other case for automation: consistency. Manual matrix extraction depends on who&apos;s
              doing it and how carefully they read. A tool that programmatically identifies every
              &quot;shall,&quot; &quot;must,&quot; and &quot;will&quot; across a 120-page RFP is
              more systematic than even an experienced proposal professional reading it line by line.
              Human review of the automated output is still required — the tool won&apos;t catch
              every implicit requirement, and it may over-extract formatting notes as substantive
              requirements. But it gives you a complete base to review, not a base to build from scratch.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For small businesses bidding their first few federal contracts, a manual matrix in a
              shared spreadsheet is entirely sufficient. The discipline matters more than the
              tooling at this stage. As you scale — more proposals, faster cycles, larger teams —
              the case for integrated tools grows.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-violet-700 underline font-medium">
                proposal management tools
              </Link>{" "}
              integrate compliance tracking with your pipeline so that requirements from an
              opportunity you&apos;re pursuing flow directly into your proposal workspace — without
              rebuilding the same context in a separate spreadsheet. For teams managing multiple
              active bids, that integration is where the time savings compound most quickly.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Download Our Proposal Compliance Checklist">
            Our{" "}
            <Link
              href="/resources/bid-checklist"
              className="text-sky-700 underline font-medium"
            >
              bid checklist
            </Link>{" "}
            covers the pre-submission compliance check point-by-point: format verification,
            required attachments, Section M coverage, key personnel documentation, and submission
            mechanics. Use it alongside your compliance matrix at the final review gate.
          </Callout>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-violet-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Win More. Lose Less to Process Failures.
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot helps small businesses build disciplined proposal processes — from
                compliance tracking to final submission — so technical strength actually gets evaluated.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Proposal management with built-in compliance tracking",
                  "Requirement mapping from SAM.gov directly to your workspace",
                  "Team assignment and status tracking across all active proposals",
                  "Review gate checklists built on FAR Part 15 requirements",
                  "Intelligence on incumbents and competitive positioning",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
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
                  href: "/blog/proposal-writing-tips",
                  icon: PenLine,
                  title: "Proposal Writing Tips",
                  desc: "How to write technical volumes that score well under FAR Part 15",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  icon: BarChart3,
                  title: "Past Performance in Government Contracts",
                  desc: "Why past performance is the hardest evaluation factor to fake",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  icon: Target,
                  title: "Government Contract Win Rates",
                  desc: "What realistic win rates look like and how to improve yours",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  icon: Search,
                  title: "Find Government Contracts",
                  desc: "Complete guide to entering the federal market as a small business",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-violet-600" />
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
