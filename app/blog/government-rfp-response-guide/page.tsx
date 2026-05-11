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
  Clock,
  Shield,
  DollarSign,
  Users,
  ListChecks,
  XCircle,
  Sparkles,
  TrendingUp,
  Search,
  PenLine,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "bid-no-bid", label: "Before You Open the RFP: The Bid/No-Bid Decision" },
  { id: "rfp-anatomy", label: "Anatomy of a Federal RFP" },
  { id: "section-m-first", label: "Read Section M First — Here's Why" },
  { id: "build-your-response", label: "Building Your Response Structure" },
  { id: "technical-volume", label: "Writing the Technical Volume" },
  { id: "past-performance", label: "Past Performance: Curating the Right Examples" },
  { id: "pricing-your-bid", label: "Pricing Your Bid Without Leaving Money on the Table" },
  { id: "compliance-review", label: "The Compliance Review Before You Submit" },
  { id: "submission-day", label: "Submission Day: What Still Goes Wrong" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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

export default function RFPResponseGuidePage() {
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
            <span className="text-stone-900 font-medium">How to Respond to a Government RFP</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Respond to a Government RFP:{" "}
            <span className="gradient-text">Step-by-Step for First-Timers</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded{" "}
            <strong className="text-stone-700">$773 billion in contracts in FY2024</strong>, with
            more than $183 billion going to small businesses. Responding to an RFP is how you get
            your share — but first-time bidders win only{" "}
            <strong className="text-stone-700">about 3% of the time</strong>. This guide explains
            exactly why that happens and how to beat those odds.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 11, 2026</span>
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
            id="bid-no-bid"
            number="01"
            title="Before You Open the RFP: The Bid/No-Bid Decision"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most first-time government bidders make the same mistake: they find an interesting
              contract on SAM.gov, download the RFP, and spend two weeks writing a proposal before
              they ask the critical question — <em>should we actually bid this?</em> That question
              belongs at the beginning, not at the end.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The bid/no-bid decision is a structured evaluation of whether this particular
              opportunity is worth the effort. A well-prepared federal proposal requires{" "}
              <strong>200 to 500 hours of work</strong> annually if you&apos;re pursuing three to
              five proposals per year at the $100K–$500K range — and complex solicitations can
              exceed 200 hours for a single response. That&apos;s real money, even before you factor
              in outside consultants, graphics, or printing.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Before you commit that time, run through these five filters:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  number: "01",
                  title: "Are you actually eligible?",
                  desc: "Check set-aside designations first. If the contract is set aside for SDVOSB, WOSB, 8(a), or HUBZone firms and you don't hold that certification, you can't bid on the prime. Bidding anyway is not just wasted effort — in some cases it exposes you to misrepresentation liability. Use our Quick Checker to confirm your eligibility in under 3 minutes.",
                },
                {
                  number: "02",
                  title: "Do you have relevant past performance?",
                  desc: "Past performance is an evaluation factor in nearly every competitive federal RFP. Agencies want to see contracts of similar scope, complexity, and dollar value. If you're bidding a $2M IT services contract but your largest relevant past performance is a $50K subcontract, that mismatch will show in your evaluation score — evaluators aren't being unfair, they're reading a pattern.",
                },
                {
                  number: "03",
                  title: "Is there an incumbent — and can you displace them?",
                  desc: "Most federal contracts are recompetes, not new awards. Incumbents win roughly 80% of recompetes at many agencies. That's not a reason to walk away — incumbents get complacent, performance slips, pricing gets bloated — but it's a reason to understand your competitive position before you start writing. Research the incumbent's contract history on USASpending.gov.",
                },
                {
                  number: "04",
                  title: "Do you have the staff and resources to perform?",
                  desc: "Winning a contract you can't deliver creates bigger problems than losing it. Check required clearances, specialized certifications, and staffing requirements against what you actually have. If the contract requires 10 cleared staff and you have 2, performance risk is real and evaluators know how to spot over-promised staffing plans.",
                },
                {
                  number: "05",
                  title: "Is the timeline realistic?",
                  desc: "The minimum proposal response time for competitive acquisitions under FAR Part 15 is 30 days. Some solicitations allow 45 days when agencies are targeting small business participation. If the due date is in 10 days and this is a 150-page RFP, the math is against you. A rushed, incomplete proposal almost always loses.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you can&apos;t answer &quot;yes&quot; to at least three of these five, the smart
              move is to pass and pursue the next opportunity. Your pipeline should have enough
              opportunities that saying no to the wrong ones doesn&apos;t feel like a crisis. That&apos;s
              what{" "}
              <Link href="/features/matching" className="text-blue-700 underline font-medium">
                opportunity matching
              </Link>{" "}
              solves — you find enough qualified leads that each bid/no-bid is a real decision, not
              a default yes.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                {
                  stat: "~3%",
                  label: "Win rate for first-time government bidders",
                  icon: Target,
                },
                {
                  stat: "$183B+",
                  label: "Federal contracts awarded to small businesses in FY2024",
                  icon: DollarSign,
                },
                {
                  stat: "200–500 hrs",
                  label: "Annual proposal effort for 3–5 bids per year",
                  icon: Clock,
                },
                {
                  stat: "30 days",
                  label: "Minimum required proposal response time under FAR Part 15",
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
          </div>

          <Callout icon={Lightbulb} color="blue" title="Register Your Interest on SAM.gov Early">
            When you identify an opportunity you&apos;re planning to bid, formally register interest
            on SAM.gov. This puts you on the agency&apos;s notification list for amendments —
            changes to the solicitation that can alter page limits, deadlines, evaluation criteria,
            or technical requirements. If you don&apos;t register, amendments may be posted without
            you knowing. Proposals evaluated against an unamended RFP are eliminated.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="rfp-anatomy"
            number="02"
            title="Anatomy of a Federal RFP"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal RFPs follow a standard section structure defined by FAR Part 15. Every
              solicitation uses the same letter-based organization, which means once you know the
              anatomy, you can navigate any RFP quickly — regardless of agency or contract type.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Most first-time bidders jump straight to Section C (the work requirements) and start
              writing. That&apos;s the wrong starting point. Here&apos;s what each section contains
              and in what order you should actually read them:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Section</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Contents</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Read It For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        section: "Section B — Supplies / Services",
                        contents: "Contract line items (CLINs), quantities, unit pricing structure, contract type (FFP, T&M, IDIQ), and total estimated contract value.",
                        readFor: "Whether this is a firm-fixed-price, time-and-materials, or IDIQ contract — this determines your pricing approach. Also the total dollar size of the opportunity.",
                      },
                      {
                        section: "Section C — SOW / PWS / SOO",
                        contents: "Statement of Work, Performance Work Statement, or Statement of Objectives. The technical requirements the government needs performed.",
                        readFor: "Exactly what you're being hired to do. Every deliverable, task, and performance standard. Your technical volume must address all of it.",
                      },
                      {
                        section: "Section H — Special Requirements",
                        contents: "Agency-specific clauses: security clearances, key personnel requirements, small business subcontracting plans, transition requirements.",
                        readFor: "Constraints that affect whether you can perform and what your proposal must include. A clearance requirement you can't meet is a showstopper discovered here.",
                      },
                      {
                        section: "Section J — Attachments",
                        contents: "Required forms, certifications, wage determinations, past performance questionnaires, data rights, and exhibit tables.",
                        readFor: "Every document you must submit with your proposal. Missing a required form from Section J is a common hard-fail at the compliance screening stage.",
                      },
                      {
                        section: "Section L — Instructions to Offerors",
                        contents: "How to structure your proposal: volume organization, page limits, font size, margin requirements, file format, submission method, deadline.",
                        readFor: "The rules of the game. Every instruction in Section L is a compliance requirement. Violating any of them — even font size — can get your proposal rejected before it's read.",
                      },
                      {
                        section: "Section M — Evaluation Criteria",
                        contents: "How your proposal will be scored: evaluation factors, sub-factors, relative weights, and basis for award (Best Value Tradeoff or Lowest Price Technically Acceptable).",
                        readFor: "What the evaluators are actually looking for. This is the most important section. Read Section M before you write a single word of your proposal.",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs whitespace-nowrap align-top">{row.section}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed align-top">{row.contents}</td>
                        <td className="px-5 py-3 text-blue-700 text-xs leading-relaxed align-top">{row.readFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The recommended reading order for a new RFP: Section M first, then Section L, then
              Section C, then H, then J, then the rest. That sequence builds your understanding
              from how you&apos;ll be evaluated backward to what you need to write — rather than
              starting with the work and only discovering the evaluation criteria after you&apos;ve
              drafted your approach.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Federal contract types — FFP, T&amp;M, IDIQ — each have different implications for how
              you structure your price volume. If you&apos;re not sure which type to expect or how
              each works, see our guide on{" "}
              <Link
                href="/blog/federal-contract-types-explained"
                className="text-blue-700 underline font-medium"
              >
                federal contract types explained
              </Link>
              .
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <ListChecks className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Find Out Which Set-Asides You Qualify For
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Before you spend hours on an RFP, confirm you&apos;re eligible to bid. Our Quick
              Checker tells you which small business programs you qualify for — in under 3 minutes,
              free.
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
            id="section-m-first"
            number="03"
            title="Read Section M First — Here's Why"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Section M is the scoring rubric. It tells you exactly how the source selection team
              will evaluate every proposal. Reading it first means you know what they&apos;re looking
              for before you write a word. Skipping it until after you&apos;ve drafted your
              approach — which is what most first-time bidders do — means you write a technically
              solid response to the wrong question.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Two things you need to extract from Section M before anything else:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 animate-on-scroll">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-black text-stone-900 text-base mb-2">The Evaluation Method</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Section M will specify one of two approaches:
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-bold text-stone-900 text-xs mb-1">Best Value Tradeoff</p>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      The government can award to a higher-priced offeror if the technical approach is
                      superior enough to justify the premium. Technical quality is your primary lever.
                      Write to impress the evaluators, not just to satisfy the requirement.
                    </p>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-bold text-stone-900 text-xs mb-1">Lowest Price Technically Acceptable (LPTA)</p>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Award goes to the lowest-priced proposal that meets the technical threshold.
                      Exceeding that threshold earns you nothing. Write to meet requirements precisely
                      and price aggressively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 animate-on-scroll">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-black text-stone-900 text-base mb-2">Factor Weights and Order</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Section M lists evaluation factors in order of importance and states their relative
                  weights. A common pattern:
                </p>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {[
                    "Technical Approach — most important factor",
                    "Management Approach — moderately important",
                    "Past Performance — moderately important",
                    "Price / Cost — significant but secondary to technical",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-stone-500 text-xs mt-3">
                  These weights determine where to invest your writing time. Don&apos;t spend 60%
                  of your proposal on past performance if it&apos;s weighted least.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Within each factor, Section M will list sub-factors — and this is where proposals get
              lost. A technical factor might have four sub-factors: technical approach, key
              personnel qualifications, management plan, and quality control. Evaluators score each
              sub-factor independently. A proposal that writes a brilliant technical approach but
              ignores quality control can lose significant points on that sub-factor alone —
              regardless of how strong everything else is.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Build a simple table: one row per evaluation factor and sub-factor, one column for
              the Section M language, and one column for the section of your proposal that will
              address it. This is the foundation of your{" "}
              <Link
                href="/blog/government-proposal-compliance-matrix"
                className="text-blue-700 underline font-medium"
              >
                compliance matrix
              </Link>
              . Every sub-factor needs a visible, labeled response in your proposal — evaluators
              can only score what they can find.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="LPTA vs. Best Value Changes Everything">
            If Section M says LPTA, don&apos;t write a 100-page proposal packed with innovation and
            differentiators. Write a lean, compliant response that clearly meets every technical
            requirement — and then sharpen your pencil on price. The best technical proposal in an
            LPTA competition wins nothing if it&apos;s not the cheapest technically acceptable offer.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="build-your-response"
            number="04"
            title="Building Your Response Structure"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Section L tells you exactly how to structure your response. Follow it precisely.
              Federal proposals are organized into volumes — typically Technical, Management, Past
              Performance, and Price — and each volume has its own page limit, font requirements,
              and submission instructions. These are not suggestions.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s the standard four-volume structure you&apos;ll encounter on most competitive
              federal RFPs:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  vol: "Volume I",
                  title: "Technical Volume",
                  icon: FileText,
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                  weight: "Most heavily weighted in Best Value acquisitions",
                  desc: "Your technical approach to performing the work. How you&apos;ll execute the Statement of Work, what methodologies and processes you&apos;ll use, how you&apos;ll manage risks, and how your tools and systems are suited to the requirement. Evaluators are looking for specificity — not generic claims about your capabilities, but a concrete description of how you will do this specific work.",
                },
                {
                  vol: "Volume II",
                  title: "Management Volume",
                  icon: Users,
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                  weight: "Typically second in importance",
                  desc: "How the project will be managed: team structure, reporting hierarchy, key personnel qualifications, quality control plan, and risk mitigation approach. Key personnel sections require individual resumes that match Section L&apos;s exact format requirements — page limits, required fields, and how qualifications must be presented.",
                },
                {
                  vol: "Volume III",
                  title: "Past Performance Volume",
                  icon: BarChart3,
                  color: "bg-amber-50 border-amber-200",
                  iconColor: "text-amber-600",
                  weight: "Heavily weighted in competitive acquisitions",
                  desc: "Evidence that you&apos;ve done similar work before and done it well. Typically 3–5 contract examples with customer references, scope description, contract value, and performance outcomes. Relevance matters more than quantity — one contract that closely matches the requirement beats five unrelated examples.",
                },
                {
                  vol: "Volume IV",
                  title: "Price / Cost Volume",
                  icon: DollarSign,
                  color: "bg-violet-50 border-violet-200",
                  iconColor: "text-violet-600",
                  weight: "Evaluated independently from technical volumes",
                  desc: "Detailed pricing organized by contract line item (CLIN) as specified in Section B. May require a Basis of Estimate narrative explaining how you developed your pricing. On cost-reimbursement contracts, this volume is subject to cost or pricing data rules — though the FY2026 NDAA raised the certified cost or pricing data threshold from $2M to $10M, effective June 30, 2026.",
                },
              ].map((vol, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border ${vol.color} animate-on-scroll`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <vol.icon className={`w-5 h-5 ${vol.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-stone-500">{vol.vol}</span>
                        <span className="text-xs bg-white border border-stone-200 rounded-full px-2 py-0.5 text-stone-600">
                          {vol.weight}
                        </span>
                      </div>
                      <h3 className="font-black text-stone-900 text-base mb-2">{vol.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{vol.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Some solicitations add volumes for small business subcontracting plans, transition
              planning, security documentation, or data rights certifications. Every required volume
              must be present — a missing volume is typically grounds for rejection at the
              compliance screening stage.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Build your outline from the compliance matrix, not the other way around. Your sections
              should map directly to Section M evaluation factors and sub-factors. Evaluators have a
              scoring sheet — your outline should mirror it. When they go to score &quot;Quality
              Control Plan,&quot; there should be a clearly labeled section in your proposal called
              exactly that.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="technical-volume"
            number="05"
            title="Writing the Technical Volume"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The technical volume is where most competitive proposals are won or lost. It&apos;s
              where you prove you understand the problem, have a credible plan to solve it, and
              bring something to the table that competitors don&apos;t. Generic technical volumes —
              the kind that could apply to any contract — score at the acceptable threshold, not
              above it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Three principles that separate strong technical volumes from weak ones:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6 py-2 animate-on-scroll">
                <h3 className="font-black text-stone-900 text-base mb-2">
                  1. Address the specific requirement, not the general capability
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The statement &quot;Our team has extensive experience in IT infrastructure
                  management&quot; tells an evaluator nothing they can score. The statement &quot;We
                  will deploy a zero-trust network architecture using the NIST SP 800-207
                  framework, beginning with a 30-day discovery phase to map existing access
                  patterns before implementing microsegmentation&quot; tells them exactly what
                  you&apos;ll do. Write about this contract, not about your company in general.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-2 animate-on-scroll">
                <h3 className="font-black text-stone-900 text-base mb-2">
                  2. Show the evaluator where to give you credit
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Use the exact language from Section M evaluation factors as section headers in
                  your technical volume. If Section M says &quot;Technical Approach to Network
                  Infrastructure,&quot; your section should be labeled &quot;Technical Approach to
                  Network Infrastructure&quot; — not &quot;Our Network Solutions.&quot; Evaluators
                  are scored on how quickly and clearly they can assign points. Don&apos;t make them
                  hunt for your response to a specific criterion.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-2 animate-on-scroll">
                <h3 className="font-black text-stone-900 text-base mb-2">
                  3. Lead with your discriminator, not your methodology
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Your discriminator is the one thing you do that your competitors don&apos;t — or
                  don&apos;t do as well. It might be a proprietary tool, a specialized certification,
                  an incumbent relationship with a key technical partner, or a demonstrated track
                  record on this exact type of work. State it clearly in the first paragraph of each
                  major section. Then explain how your methodology delivers on it. Most proposals
                  bury discriminators in appendices or leave them implicit.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Risk management is a subsection that separates experienced bidders from first-timers.
              Evaluators know every project has risks. A proposal that acknowledges the real risks
              on this specific contract — not a boilerplate list of generic risks — and presents
              credible mitigation strategies demonstrates that you&apos;ve actually thought about
              delivery, not just winning.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Respect page limits. Section L will specify a maximum page count for the technical
              volume, and exceeding it can result in rejection. More importantly: evaluators read
              a lot of proposals. Dense, padded technical volumes get surface-level reads. A tight,
              clearly organized volume where every paragraph earns its space is more likely to
              generate the kind of careful evaluation that produces high scores.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-blue-700 underline font-medium">
                proposal management tools
              </Link>{" "}
              include section templates structured around Section M evaluation factors, so your
              technical volume outline starts from the scoring criteria rather than from a generic
              proposal template.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Use the SOW as Your Compliance Checklist for the Technical Volume">
            Print the Statement of Work and highlight every deliverable, reporting requirement, and
            technical task. When you finish drafting your technical volume, go back through the
            highlighted SOW and confirm each item is explicitly addressed. Any SOW requirement
            without a clear response in your proposal is a compliance gap — and possibly a scoring
            gap if it appears as an evaluation sub-factor in Section M.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="past-performance"
            number="06"
            title="Past Performance: Curating the Right Examples"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Past performance is the section where small businesses most often undermine their own
              proposals. The instinct is to show volume — list as many contracts as possible to
              demonstrate breadth. But evaluators aren&apos;t counting contracts. They&apos;re
              assessing relevance: how similar is this work to what you&apos;re bidding?
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Relevance is evaluated across three dimensions: scope (technical similarity), size
              (comparable contract value), and complexity (similar challenges and stakeholders).
              Here&apos;s how to select your examples:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Dimension</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What Evaluators Look For</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Common Mistake</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        dim: "Technical Scope",
                        looks: "Contracts where you performed similar tasks — same NAICS code, same type of work, same deliverables.",
                        mistake: "Listing a contract that's technically unrelated just because the dollar value looks good.",
                      },
                      {
                        dim: "Dollar Value",
                        looks: "Contract value within roughly 0.5x–2x of the opportunity you're bidding. A $500K past performance example doesn't demonstrate capacity for a $5M contract.",
                        mistake: "All examples are significantly smaller than the current opportunity, signaling you haven't performed at this scale.",
                      },
                      {
                        dim: "Recency",
                        looks: "Contracts performed within the last 3–5 years are preferred. Older contracts get lower relevance scores. Performance work completed more recently shows current capability.",
                        mistake: "Leading with strong contracts from 8–10 years ago that overshadow weaker recent examples.",
                      },
                      {
                        dim: "Customer Type",
                        looks: "Federal agency work scores highest. State/local and commercial experience counts but is rated lower for demonstrating federal contracting capability.",
                        mistake: "Listing only commercial contracts when bidding a federal opportunity — they count, but less.",
                      },
                      {
                        dim: "Performance Outcomes",
                        looks: "Specific results: on-time delivery, cost performance, quality metrics, customer satisfaction scores, award fees earned, option years exercised.",
                        mistake: "Vague performance narratives that say 'successfully completed' without any metrics.",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs align-top whitespace-nowrap">{row.dim}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed align-top">{row.looks}</td>
                        <td className="px-5 py-3 text-red-700 text-xs leading-relaxed align-top">{row.mistake}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Past performance questionnaires (PPQs) — often found in Section J — require you to
              list a customer reference who will be contacted directly by the agency. Choose these
              references carefully and reach out to them before you submit. A reference who is
              surprised by an agency call, or who gives a lukewarm review, can drop your past
              performance score significantly even when the underlying work was strong.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              If you&apos;re a new entrant with thin federal past performance, you have options.
              Subcontract history counts if you can document scope, dollar value, and outcomes.
              State and local government contracts are typically acceptable but rated lower. If
              you&apos;re teaming on this bid, your prime or subcontractor&apos;s past performance
              may be available to the team — get written authorization to use it and confirm the
              agency accepts team past performance citations.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For a deeper look at how to build your federal track record from scratch, see our
              guide on{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 underline font-medium"
              >
                past performance in government contracts
              </Link>
              .
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">Track Every Opportunity From Pursuit to Award</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot&apos;s pipeline tools help you manage your active bids, track submission
              deadlines, and build a win history that strengthens every future proposal. Start your
              free trial today.
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
            id="pricing-your-bid"
            number="07"
            title="Pricing Your Bid Without Leaving Money on the Table"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Price is evaluated independently from technical volumes in most federal acquisitions.
              You build the most competitive price volume when you understand what the government
              expects to pay, what your competitors are likely to bid, and what your true cost of
              performance is — in that order.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Four sources that give you price intelligence before you build your cost model:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Search,
                  title: "Prior contract award data on USASpending.gov",
                  desc: "Search USASpending.gov for the incumbent contract and any prior awards under this NAICS code at this agency. Award values, modifications, and option exercise history tell you the government's historical spend pattern and whether the budget has grown or shrunk over time. This is your baseline price anchor.",
                },
                {
                  icon: FileText,
                  title: "Independent Government Cost Estimate (IGCE)",
                  desc: "Some RFPs include or reference an IGCE — the government's own estimate of what the contract should cost. When it's published, use it to validate your cost model. When it's not published, your SAM.gov and USASpending.gov research substitutes for it. Bidding significantly above the IGCE rarely wins; bidding far below it raises performance risk questions.",
                },
                {
                  icon: TrendingUp,
                  title: "Wage determinations (Section J)",
                  desc: "If the contract involves service work covered by the Service Contract Act (SCA), Section J will include a wage determination specifying minimum labor rates. These are legally required minimums — your cost model must reflect them. Bidding below SCA wage rates doesn't just lose; it creates labor law liability.",
                },
                {
                  icon: BarChart3,
                  title: "Competitor pricing from similar awards",
                  desc: "USASpending.gov shows award amounts on competed contracts. FPDS-NG (accessible through SAM.gov's contract data) shows competition data. If you know who your competitors are and can find their prior award values on similar scope, you can estimate their labor rates and overhead structure. That competitive pricing intelligence informs your own positioning.",
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
              The price volume typically requires a breakdown by contract line item (CLIN) as
              defined in Section B, with labor categories, hours, and loaded rates. On
              fixed-price contracts, the government sees only your total price and the CLIN
              breakdown — your internal cost model stays private. On cost-reimbursement contracts,
              the government may request a detailed cost breakdown and Basis of Estimate, and now
              (effective June 30, 2026 under the FY2026 NDAA) certified cost or pricing data is
              required only for contracts over $10M — up from the prior $2M threshold.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Don&apos;t price to win at the expense of profitability. A firm-fixed-price contract
              that you win and can&apos;t perform profitably is worse than a loss. Model your actual
              costs — direct labor, fringe, overhead, G&amp;A, and profit — before you build your
              price volume. The contract you win at too-thin margin can damage your past performance
              record when budget pressure forces you to cut corners on delivery.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For a deeper framework on government contract pricing strategy — including how to
              think about profit margins, wrap rates, and competitive positioning — see our guide
              on{" "}
              <Link
                href="/blog/government-contract-pricing-strategies"
                className="text-blue-700 underline font-medium"
              >
                government contract pricing strategies
              </Link>
              .
            </p>
          </div>

          <Callout icon={Shield} color="emerald" title="Price Realism vs. Price Reasonableness">
            On competitive proposals, the government evaluates two distinct things. Price
            reasonableness means your price isn&apos;t unreasonably high — you&apos;re not
            overcharging. Price realism (on cost-reimbursement contracts) means your price isn&apos;t
            unrealistically low — you can actually perform at the price you quoted. An unrealistically
            low price doesn&apos;t win in a realism analysis; the agency adjusts your probable cost
            upward in their evaluation model, which can push you above competitors who priced
            realistically.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="compliance-review"
            number="08"
            title="The Compliance Review Before You Submit"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The compliance review is the last gate before submission. Its only job: confirm that
              your proposal won&apos;t be rejected on a technicality before an evaluator reads a
              single sentence. Run it at least 48 hours before the deadline — not the morning
              of — so there&apos;s time to fix what you find.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Use two people. One reads from the compliance checklist; one verifies in the
              document. Self-review at this stage is not reliable — you&apos;ve read your own
              proposal too many times to see what&apos;s missing. Here&apos;s the full checklist:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 mb-8 animate-on-scroll">
              <h3 className="font-black text-stone-900 text-base mb-4 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-blue-600" />
                Pre-Submission Compliance Checklist
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    category: "Format Compliance",
                    items: [
                      "Page count is within the Section L limit for each volume",
                      "Font type and size match Section L specifications",
                      "Margins match Section L specifications",
                      "Headers and footers present and correctly formatted",
                      "File naming convention matches Section L instructions",
                      "File format matches Section L requirements (PDF, Word, etc.)",
                    ],
                  },
                  {
                    category: "Content Compliance",
                    items: [
                      "All required volumes are present",
                      "Every Section M factor and sub-factor is addressed",
                      "All Section J forms are completed and included",
                      "Required certifications are current (not expired)",
                      "Key personnel resumes are within the page limit",
                      "Past performance questionnaires are complete",
                    ],
                  },
                  {
                    category: "Submission Mechanics",
                    items: [
                      "Submission is to the correct portal or email address",
                      "Submission deadline is confirmed (date and time, including time zone)",
                      "All amendments have been incorporated",
                      "Required number of copies is being submitted (if physical delivery)",
                      "Solicitation number is on the cover page and in the file name",
                    ],
                  },
                  {
                    category: "Business Representations",
                    items: [
                      "SAM.gov registration is active (check expiration date)",
                      "Set-aside certifications are current",
                      "Representations and certifications are complete in SAM.gov",
                      "Any required acknowledgment of amendments is included",
                    ],
                  },
                ].map((group, i) => (
                  <div key={i}>
                    <p className="font-bold text-stone-900 text-xs mb-2 uppercase tracking-wide">{group.category}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-stone-600">
                          <div className="w-4 h-4 rounded border-2 border-stone-300 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov registration expiration is a common submission killer that catches experienced
              bidders, not just beginners. Registrations expire annually. An expired SAM.gov
              registration means your proposal may be considered non-responsible and eliminated even
              if every other compliance element is perfect. Check your registration status at least
              two weeks before submission and renew if it&apos;s within 60 days of expiration.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Download our full{" "}
              <Link href="/resources/bid-checklist" className="text-blue-700 underline font-medium">
                bid checklist
              </Link>{" "}
              for a printable version you can use at the final review gate. It covers all the
              compliance checkpoints above, plus the post-submission steps: document your submission
              confirmation, store the acknowledgment, and set a calendar reminder for the expected
              award date.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Amendments Can Change the Deadline — Check Them All">
            Solicitation amendments are posted to SAM.gov and emailed only to vendors who registered
            interest. An amendment that moves the deadline by 48 hours can disqualify an on-time
            submission if you didn&apos;t know about it. Check SAM.gov for amendments at least
            every two days on any active bid. When an amendment arrives, update your compliance
            matrix, notify your writing team, and re-check every element that changed.
          </Callout>

          {/* Section 9 */}
          <SectionHeading
            id="submission-day"
            number="09"
            title="Submission Day: What Still Goes Wrong"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Proposal portals go down. File sizes exceed limits. PDFs fail security scans. People
              upload the wrong version. These aren&apos;t hypothetical — they happen on real
              submissions, and they happen most often to teams that submitted at the last minute.
              Build a 24-hour buffer before the actual deadline.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here are the submission-day failures that recur across the industry:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: XCircle,
                  title: "Submission portal problems",
                  desc: "SAM.gov, MAX.gov, and agency-specific portals can experience high traffic near major solicitation deadlines. Multiple contractors submitting simultaneously can cause slowdowns, timeouts, or upload failures. Start your submission process at least 2 hours before the deadline. If the portal fails, immediately email the Contracting Officer to document your attempt and request guidance — courts have occasionally allowed late submissions caused by demonstrable portal failures, but only when the attempt was well-documented.",
                },
                {
                  icon: XCircle,
                  title: "File size exceeds portal limits",
                  desc: "Many government portals cap individual file sizes at 5MB or less. A technical volume with embedded graphics can easily exceed that. Section L usually specifies file size limits — if it doesn't, test your upload before the deadline day. Compress images, reduce embedded graphics resolution, and split oversized volumes if the solicitation permits.",
                },
                {
                  icon: XCircle,
                  title: "Uploading the wrong version",
                  desc: "During the final revision sprint, draft filenames change frequently. The team uploads the 'Final' version that is actually 'Final_v2_EDITED_USE THIS ONE_DO NOT SUBMIT.pdf' from the wrong folder. Maintain a single, clearly named 'SUBMIT' folder that gets populated only at the compliance review stage. Every file in that folder is the one being submitted.",
                },
                {
                  icon: XCircle,
                  title: "Missing the time zone",
                  desc: "Federal solicitation deadlines are almost always Eastern time. If your team is in Mountain or Pacific time and reads a '4:00 PM' deadline as their local time, you submit late. Confirm the time zone explicitly — it&apos;s usually stated in Section L — and put the deadline in Eastern time on your calendar.",
                },
                {
                  icon: XCircle,
                  title: "SAM.gov registration lapsed between kickoff and submission",
                  desc: "Registrations can lapse during a long proposal cycle. A registration that was active when you decided to bid may have expired by submission day. Check it at the start of the proposal cycle, one week before the deadline, and the day before submission.",
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
              After submission, document it. Save the submission confirmation email or portal
              receipt, time-stamped. If the portal doesn&apos;t send a confirmation, take a
              screenshot. If anything goes wrong before the deadline — portal failure, upload
              error, size rejection — contact the Contracting Officer immediately and in writing.
              &quot;I tried to submit but it didn&apos;t work&quot; doesn&apos;t hold up without
              documentation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Then wait. Federal proposal evaluation timelines vary enormously — from two weeks
              for simplified acquisitions to six months or more for major programs. Use the
              evaluation period to debrief internally on your proposal process, pursue other
              opportunities in your pipeline, and build the kind of agency relationships that
              improve your competitive position on the next bid.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Whether you win or lose, request a debrief. Debriefs are your right under FAR Part 15,
              and the feedback is valuable — especially for first-time bidders. Agencies must provide
              a written or oral debrief that covers your strengths and weaknesses under each
              evaluation factor. That information directly improves your next proposal. Most small
              businesses don&apos;t request debriefs. Most experienced contractors always do.
            </p>
          </div>

          <Callout icon={TrendingUp} color="violet" title="Your First Proposal Teaches More Than Any Guide">
            The 3% first-time bidder win rate isn&apos;t just a discouraging statistic — it&apos;s
            a reflection of how much the process improves with repetition. Firms that submit their
            second and third proposals with debrief feedback incorporated win at significantly higher
            rates. The goal for your first RFP response isn&apos;t just to win — it&apos;s to learn
            the process so your second response is meaningfully better. Use{" "}
            <Link href="/features/pipeline" className="text-violet-700 underline font-medium">
              CapturePilot&apos;s pipeline tools
            </Link>{" "}
            to track your proposals, capture your debrief notes, and build institutional knowledge
            that compounds over time.
          </Callout>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Stop Losing to Process. Start Winning on Merit.
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot gives small businesses the tools to find the right opportunities, build
                competitive proposals, and track every bid from pursuit to award.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Opportunity matching tuned to your certifications and NAICS codes",
                  "Proposal management with Section M–aligned section templates",
                  "Compliance tracking so nothing gets missed before submission",
                  "Pipeline management from Sources Sought through award",
                  "Competitive intelligence on incumbents and prior awards",
                  "Capability statement builder for agency marketing",
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

          {/* Related Guides */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/government-proposal-compliance-matrix",
                  icon: ListChecks,
                  title: "Government Proposal Compliance Matrix",
                  desc: "How to build a compliance matrix that prevents fatal RFP errors",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  icon: BarChart3,
                  title: "Past Performance in Government Contracts",
                  desc: "Why past performance matters and how to build it from scratch",
                },
                {
                  href: "/blog/government-contract-pricing-strategies",
                  icon: DollarSign,
                  title: "Government Contract Pricing Strategies",
                  desc: "How to price competitively without sacrificing profitability",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  icon: Search,
                  title: "How to Find Government Contracts",
                  desc: "Complete guide to finding the right opportunities on SAM.gov and beyond",
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
