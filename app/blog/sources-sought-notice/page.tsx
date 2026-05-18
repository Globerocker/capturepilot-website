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
  Search,
  FileText,
  Target,
  Clock,
  TrendingUp,
  XCircle,
  Eye,
  Megaphone,
  Shield,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-it-is", label: "What a Sources Sought Notice Actually Is" },
  { id: "why-it-matters", label: "Why Responding Matters More Than You Think" },
  { id: "finding-notices", label: "How to Find Sources Sought Notices on SAM.gov" },
  { id: "rule-of-two", label: "The Rule of Two: How You Trigger a Set-Aside" },
  { id: "what-to-include", label: "What to Include in Your Response (Step by Step)" },
  { id: "influencing-requirements", label: "How to Actually Shape the Requirement" },
  { id: "common-mistakes", label: "Mistakes That Waste the Opportunity" },
  { id: "follow-up", label: "Following Up After You Respond" },
  { id: "pipeline-strategy", label: "Building a Sources Sought Strategy for Your Pipeline" },
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

export default function SourcesSoughtNoticePage() {
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
            <span className="text-stone-900 font-medium">Sources Sought Notices</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Sources Sought Notices:{" "}
            <span className="gradient-text">
              How to Get In Early and Shape the RFP
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most contractors wait for the RFP. By then, the requirements are locked, the incumbent
            has a head start, and you're competing against a field that's already been selected for.
            Sources Sought notices are the window before all that happens — and most small businesses
            don't use them.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 18, 2026</span>
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
            <SectionHeading id="what-it-is" number="01" title="What a Sources Sought Notice Actually Is" />

            <p className="text-stone-700 leading-relaxed">
              A Sources Sought notice is market research. Full stop. Contracting officers are
              required under <strong>FAR Part 10</strong> to conduct market research before buying
              anything significant, and a Sources Sought notice is one of the primary tools they
              use. They post it to SAM.gov, vendors respond, and the CO uses those responses to
              decide how the competition will be structured.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The notice is not a solicitation. Your response is not a proposal. Under{" "}
              <strong>FAR 15.201</strong>, the government explicitly cannot form a contract
              based on a Sources Sought response — so you're not bidding. You're demonstrating
              capability and influencing acquisition strategy. That distinction matters, because
              it changes what you write and how you write it.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Sources Sought notices go by several names: RFI (Request for Information), market
              survey, presolicitation notice, or simply "sources sought." On SAM.gov, you can
              filter by notice type to find them specifically. The underlying purpose is the same:
              the government is gathering intelligence before committing to a procurement strategy.
            </p>

            <Callout icon={FileText} color="sky" title="Key regulatory basis">
              <p>
                Sources Sought notices are authorized under <strong>FAR Subpart 5.2</strong> (for
                publicizing) and <strong>FAR Part 10</strong> (market research policy). FAR 10.001
                makes market research mandatory for acquisitions above the simplified acquisition
                threshold ($250,000). FAR 15.201 explicitly encourages exchanges with industry
                prior to solicitation issuance.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Most notices give you 15 to 30 days to respond. Some are urgent and give you a week.
              The window is short, which is exactly why{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                automated opportunity monitoring
              </Link>{" "}
              matters — if you're checking SAM.gov manually twice a week, you'll miss half of them
              before you even see they're posted.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="why-it-matters" number="02" title="Why Responding Matters More Than You Think" />

            <p className="text-stone-700 leading-relaxed">
              Here's the honest truth about federal contracting: by the time an RFP hits SAM.gov,
              the most important decisions have already been made. The contracting officer has
              determined whether the work is set aside for small business. The program office has
              shaped the statement of work around capabilities they've already seen demonstrated.
              The evaluation criteria reflect what they already value.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Vendors who engaged during the Sources Sought phase had input on all of that.
              Vendors who waited for the RFP are competing against a requirement that was
              written with someone else in mind.
            </p>

            <p className="text-stone-700 leading-relaxed">
              That's not speculation — it's how acquisition works. Contracting officers are
              humans doing a difficult job under time pressure. When they write requirements,
              they draw on the vendor landscape they're already familiar with. Your Sources
              Sought response gets you into that mental model.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Eye,
                  stat: "Pre-award",
                  label: "Maximum influence window",
                  desc: "Requirements are still being shaped. Your input directly informs the final solicitation.",
                },
                {
                  icon: Target,
                  stat: "Rule of Two",
                  label: "Your response triggers set-asides",
                  desc: "Two capable small businesses responding creates the legal basis for a set-aside designation.",
                },
                {
                  icon: Users,
                  stat: "Brand recall",
                  label: "Your name on the CO's desk",
                  desc: "Contracting officers remember vendors who showed up early. Most of your competition didn't.",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <div className="font-black text-lg text-stone-900 mb-1">{item.stat}</div>
                  <div className="font-semibold text-stone-700 text-sm mb-1">{item.label}</div>
                  <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              There's a compounding effect too. Every Sources Sought response you submit builds a
              paper trail with that agency. You become a known quantity. Contracting officers
              and program managers who recognize your company name from a thoughtful RFI response
              will look at your full proposal differently than a submission from a vendor they've
              never heard of.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="The early mover advantage">
              <p>
                Responding to pre-solicitation notices and submitting feedback to Sources Sought
                or RFIs lets you influence RFP terms before they're finalized. Vendors who engage
                during market research can also assemble teaming partners before those partners
                commit elsewhere — a meaningful advantage on large, complex procurements. See our
                guide to{" "}
                <Link href="/blog/government-contract-teaming-agreement" className="text-emerald-700 underline font-medium">
                  government contract teaming agreements
                </Link>{" "}
                for how to structure those partnerships.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="finding-notices" number="03" title="How to Find Sources Sought Notices on SAM.gov" />

            <p className="text-stone-700 leading-relaxed">
              SAM.gov is the only official source for federal contract opportunities, including
              Sources Sought notices. The challenge is that SAM.gov's search interface is built
              for compliance, not usability — finding relevant notices requires some deliberate
              configuration. Here's how to do it.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Filter by notice type",
                  body: 'On the Contract Opportunities search page, open the "Notice Type" filter and select "Sources Sought." This removes solicitations, awards, and other notice types from your results.',
                },
                {
                  step: "02",
                  title: "Set your NAICS codes",
                  body: "Filter by the NAICS codes you're registered under in SAM.gov. A 6-digit NAICS code filter dramatically reduces noise. If you're unsure which codes to target, our guide on the best NAICS codes for small business government contractors covers the highest-volume options.",
                },
                {
                  step: "03",
                  title: "Set your place of performance (if relevant)",
                  body: "If your work is location-dependent — construction, facility maintenance, janitorial services — filter by state or ZIP radius. IT and professional services firms can typically skip this.",
                },
                {
                  step: "04",
                  title: "Sort by response deadline",
                  body: "Sort results by response date, not posting date. You want to see what's closing soonest. Anything with a deadline under 5 business days requires immediate attention.",
                },
                {
                  step: "05",
                  title: "Save the search and set alerts",
                  body: "SAM.gov allows you to save searches and receive email notifications. Set this up so new notices trigger an alert rather than requiring a daily manual check.",
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
              The limitation with native SAM.gov alerts is that they're slow and the interface
              makes it hard to triage quickly. Our{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline font-medium">
                opportunity matching engine
              </Link>{" "}
              scans SAM.gov continuously and surfaces Sources Sought notices that match your NAICS
              codes, certifications, and past performance profile — so you see only what's relevant,
              the moment it's posted.
            </p>

            <Callout icon={Search} color="amber" title="What to look for in a notice">
              <p>
                When you open a Sources Sought notice, check four things immediately:{" "}
                <strong>(1)</strong> the response deadline, <strong>(2)</strong> whether it asks
                about set-aside interest, <strong>(3)</strong> whether it references a prior contract
                number (indicating a recompete), and <strong>(4)</strong> the name and contact for
                the contracting officer. A recompete with a set-aside question is your highest-value
                target — respond immediately.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              For more on navigating SAM.gov effectively, including the search filters most
              contractors never touch, read our{" "}
              <Link href="/blog/sam-gov-search-tips" className="text-blue-700 hover:underline font-medium">
                SAM.gov search tips guide
              </Link>
              .
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Stop missing Sources Sought notices
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  CapturePilot monitors SAM.gov continuously and alerts you when Sources Sought
                  notices match your NAICS codes and certifications — before the response window
                  closes.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="rule-of-two" number="04" title="The Rule of Two: How You Trigger a Set-Aside" />

            <p className="text-stone-700 leading-relaxed">
              The Rule of Two is the mechanism that converts a full-and-open competition into a
              small business set-aside. Under <strong>FAR 19.502-2</strong>, a contracting officer
              must set aside an acquisition for small business if there is a reasonable expectation
              that offers will be received from at least two responsible small business concerns
              and that award will be made at a fair market price.
            </p>

            <p className="text-stone-700 leading-relaxed">
              A Sources Sought notice is how the CO builds that "reasonable expectation." If you
              respond — and your response demonstrates genuine capability — you're one of the two.
              If another qualified small business also responds, the CO has the evidence needed to
              designate the contract as a small business set-aside. That transforms a competition
              where you'd be bidding against large primes into one where your field is limited to
              small businesses.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tl-lg">
                      Set-Aside Type
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      What Triggers It
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tr-lg">
                      What to Include in Your Response
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Small Business (any)",
                      trigger: "2+ capable small businesses respond",
                      include: "SAM.gov registration, size standard compliance, relevant past performance",
                    },
                    {
                      type: "SDVOSB / VOSB",
                      trigger: "2+ verified veteran-owned small businesses respond",
                      include: "VA verification letter or BDVOSB/SDVOSB certification status",
                    },
                    {
                      type: "WOSB / EDWOSB",
                      trigger: "2+ certified women-owned small businesses respond",
                      include: "SBA WOSB certification confirmation, NAICS code eligibility",
                    },
                    {
                      type: "8(a) Program",
                      trigger: "Agency determines 8(a) set-aside appropriate; SBA concurs",
                      include: "8(a) status and participant number, program graduation date",
                    },
                    {
                      type: "HUBZone",
                      trigger: "2+ certified HUBZone small businesses respond",
                      include: "SBA HUBZone certification letter, principal office address",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border border-stone-200 font-semibold text-stone-800">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">
                        {row.trigger}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">
                        {row.include}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The same logic applies to specific set-aside categories. If the agency is trying to
              determine whether an SDVOSB set-aside is feasible and only one SDVOSB responds —
              or none respond at all — the contract goes full-and-open, or gets set aside for a
              broader small business pool. Your response, or your failure to respond, directly
              determines which competition you're bidding in.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For a deeper look at set-aside programs and eligibility requirements, see our
              guides on{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 hover:underline font-medium">
                SDVOSB contracts
              </Link>
              ,{" "}
              <Link href="/blog/wosb-certification-guide" className="text-blue-700 hover:underline font-medium">
                WOSB certification
              </Link>
              , and the{" "}
              <Link href="/blog/hubzone-program-guide" className="text-blue-700 hover:underline font-medium">
                HUBZone program
              </Link>
              .
            </p>

            <Callout icon={Shield} color="violet" title="Respond even if you can't prime">
              <p>
                If you can't serve as the prime contractor, respond anyway — but be transparent
                about your intended role as a subcontractor. Your response still demonstrates that
                capable small businesses exist for this work, which helps the CO justify a
                set-aside. It also puts your name in front of the eventual prime, who needs
                qualified subs. Not every engagement is about winning the prime contract directly.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-to-include" number="05" title="What to Include in Your Response (Step by Step)" />

            <p className="text-stone-700 leading-relaxed">
              Read the notice first. Every Sources Sought notice is different. Some ask specific
              questions; others just ask for general capability information. Whatever the notice
              asks, answer it directly and completely. Skipping questions signals to the CO that
              you didn't read the document carefully — not the impression you want to leave.
            </p>

            <p className="text-stone-700 leading-relaxed">
              A well-structured Sources Sought response is typically 5 to 10 pages, plus any
              requested attachments like your capability statement. Here's what to include:
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  num: "1",
                  title: "Company identification",
                  items: [
                    "Legal company name and DBA if applicable",
                    "UEI (Unique Entity Identifier) from SAM.gov",
                    "CAGE code",
                    "Point of contact with phone and email",
                    "Business address and website",
                  ],
                },
                {
                  num: "2",
                  title: "Socioeconomic status and certifications",
                  items: [
                    "Size standard and NAICS code with revenue/employee count as applicable",
                    "All current certifications: 8(a), SDVOSB/VOSB, WOSB/EDWOSB, HUBZone, SDB",
                    "SAM.gov registration expiration date (active is required)",
                    "GSA Schedule contract numbers if applicable",
                  ],
                },
                {
                  num: "3",
                  title: "Technical capabilities",
                  items: [
                    "Specific capabilities that match the requirement — tie each one to the SOW or requirement description",
                    "Relevant personnel: key staff qualifications, certifications, clearances",
                    "Geographic reach or place of performance coverage",
                    "Equipment, facilities, or proprietary tools if relevant",
                  ],
                },
                {
                  num: "4",
                  title: "Past performance (the most important section)",
                  items: [
                    "2 to 4 contracts directly relevant to the requirement",
                    "For each: agency name, contract number, period of performance, dollar value, your role (prime or sub), scope of work, and outcome",
                    "Keep contract numbers in here — COs can verify them in FPDS and they add credibility",
                    "Match the scope to the requirement as closely as possible",
                  ],
                },
                {
                  num: "5",
                  title: "Set-aside interest statement",
                  items: [
                    "Explicitly state whether you support a small business set-aside and under what designation",
                    "This is the clearest signal you can send — don't bury it or leave it implied",
                    "If you hold a specific certification, state you can perform as a prime under that set-aside",
                  ],
                },
                {
                  num: "6",
                  title: "Direct answers to all questions in the notice",
                  items: [
                    "Copy each question verbatim, then answer directly below it",
                    "Don't combine or paraphrase questions — COs review responses quickly and need clear structure",
                    "If a question doesn't apply to you, say so with a brief explanation rather than skipping it",
                  ],
                },
              ].map((section) => (
                <div key={section.num} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 font-black text-sm">{section.num}</span>
                    </div>
                    <h3 className="font-bold text-stone-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Your capability statement can be attached as a separate document, but the body of
              the response should stand alone. Don't make the CO hunt through an attachment for
              your UEI or your set-aside interest statement. Put the critical information in the
              response body first, then reference the attachment for supporting detail. Our{" "}
              <Link href="/blog/capability-statement-guide" className="text-blue-700 hover:underline font-medium">
                capability statement guide
              </Link>{" "}
              covers what goes in that document specifically.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Don't include pricing">
              <p>
                Unless the notice specifically asks for it — which is rare — do not include
                pricing in a Sources Sought response. You don't have enough information yet
                to price accurately, and committing to a number this early can hurt you when
                the actual solicitation comes out. You are not bidding. You are demonstrating
                that you can do the work.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="influencing-requirements" number="06" title="How to Actually Shape the Requirement" />

            <p className="text-stone-700 leading-relaxed">
              Beyond demonstrating capability, a Sources Sought response is a legitimate channel
              to provide substantive input on the requirement. This is where most vendors leave
              value on the table. They answer the questions asked but don't contribute anything
              that might shape the final solicitation.
            </p>

            <p className="text-stone-700 leading-relaxed">
              If you see a better approach to the technical requirement, say so. If the proposed
              scope is missing something that you know from experience will be critical to
              performance, mention it. If the evaluation criteria as described would disadvantage
              qualified vendors, explain the issue. Contracting officers and program managers are
              drawing on limited domain knowledge — your expertise is genuinely useful to them,
              and they're permitted to factor it in.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Ways to constructively influence a requirement
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Suggest performance-based metrics",
                    body: "If the requirement is written around inputs (hours, staff counts), propose outcomes-based alternatives. Agencies increasingly prefer performance-based acquisitions, and if you can deliver on outcomes, this framing favors you.",
                  },
                  {
                    title: "Flag unrealistic timelines",
                    body: "If the period of performance described is too short for the stated scope, say so with specifics. The agency would rather know now than deal with a contractor struggling to perform.",
                  },
                  {
                    title: "Propose a logical work breakdown",
                    body: "Suggest how the work could be structured — phased delivery, option years, task order structure. This demonstrates acquisition sophistication and helps the CO see how the contract would actually run.",
                  },
                  {
                    title: "Identify regulatory or compliance considerations",
                    body: "If there are compliance requirements (labor law, Davis-Bacon, security clearance levels, environmental regulations) that the requirement doesn't currently address, bring them up. This signals domain expertise.",
                  },
                  {
                    title: "Recommend evaluation factor weighting",
                    body: "You can suggest whether technical capability, past performance, or price should weigh more heavily given the nature of the work. This is advice the CO can take or leave — but it positions you as a strategic partner rather than just a vendor.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-100">
                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{item.title}</p>
                      <p className="text-stone-500 text-sm mt-0.5 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The key constraint: do not propose specifications that only you can meet. That
              crosses from legitimate influence into attempted manipulation of the procurement,
              which can result in your disqualification from the competition. Everything you
              suggest should be genuinely in the government's interest, not just in yours.
              The test is simple — would a reasonable CO, reading your input without knowing who
              you are, find it useful?
            </p>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                market intelligence tools
              </Link>{" "}
              help you research the agency's spending history and prior contracts before you
              respond — so you can provide context that's grounded in what the agency has
              actually bought before, and where the gaps are.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="07" title="Mistakes That Waste the Opportunity" />

            <p className="text-stone-700 leading-relaxed">
              Sources Sought responses are low-effort submissions compared to full proposals.
              That low bar is both an opportunity and a trap. Because the effort is minimal,
              some vendors dash off a generic response and call it done. Here's what that actually
              looks like to the CO reading it — and what to do instead.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  wrong: "Submitting a boilerplate capability statement with no customization",
                  right: "Tailor your response to the specific requirement. Reference the SOW language, the NAICS code, and the agency's stated needs. Generic responses read as generic — which translates to 'low effort' in the CO's assessment.",
                },
                {
                  wrong: "Skipping the set-aside interest question",
                  right: "State your set-aside status explicitly and clearly express interest in a set-aside designation. This is the single most actionable piece of information the CO needs from you.",
                },
                {
                  wrong: "Listing past performance without contract numbers or dollar values",
                  right: "Include real contract data. Contract number, agency, dollar value, period, scope. COs can check FPDS — vague descriptions without verifiable data undermine credibility.",
                },
                {
                  wrong: "Focusing only on what your company does, not the specific requirement",
                  right: "Structure your capabilities around the requirement as described. Map your experience to each major function or task area listed. Show you've read the requirement.",
                },
                {
                  wrong: "Missing the response deadline",
                  right: "Late responses are typically ignored. Set calendar reminders the day you see the notice. A partial response submitted on time is worth more than a complete response submitted the day after the deadline.",
                },
                {
                  wrong: "Assuming the notice doesn't apply because you've never worked with that agency",
                  right: "New agency relationships start somewhere. A Sources Sought response is a low-cost introduction. The worst outcome is you don't win this one — but now they know your name.",
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
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="follow-up" number="08" title="Following Up After You Respond" />

            <p className="text-stone-700 leading-relaxed">
              Submitting the response is not the end of the engagement — it's the beginning.
              After you respond, follow up with the contracting officer named in the notice.
              A brief email or phone call to confirm receipt and express interest is appropriate.
              Keep it short. Ask if there's anything else they need from you, and whether a
              pre-solicitation meeting or industry day is planned.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Many agencies conduct industry days or pre-solicitation conferences after the
              Sources Sought phase closes. These are your next opportunity to engage. Attend
              in person if at all possible — video calls are acceptable but don't build
              relationships as effectively. Bring someone with technical depth who can answer
              questions about how you'd actually perform the work, not just your BD person.
            </p>

            <Callout icon={Megaphone} color="sky" title="The small business office is your ally">
              <p>
                Every federal agency has an Office of Small and Disadvantaged Business Utilization
                (OSDBU) or Small Business Office. Their mandate is to help the agency meet its
                small business contracting goals — and by extension, to help qualified small
                businesses find opportunities. After responding to a Sources Sought, reach out to
                the agency OSDBU. Schedule a capability briefing. They can introduce you to
                program offices and advocate for set-aside designations on contracts where they
                have influence.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Track every Sources Sought notice you respond to in your pipeline. Note the response
              date, the agency, the CO's name, and the expected solicitation timeline if the
              agency provided one. When the RFP eventually drops — sometimes months later —
              you want to know immediately that this is a pursuit you already engaged on.
            </p>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                pipeline management tools
              </Link>{" "}
              let you track each Sources Sought engagement as a pipeline stage, set follow-up
              reminders, and automatically surface the RFP when it posts. No spreadsheet required.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-900 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 shrink-0 mt-1 text-blue-400" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Know your set-aside eligibility before you respond
                </h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Before you claim certifications in a Sources Sought response, verify what
                  you're eligible for. CapturePilot's Quick Checker confirms your set-aside
                  status in under 2 minutes.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pipeline-strategy" number="09" title="Building a Sources Sought Strategy for Your Pipeline" />

            <p className="text-stone-700 leading-relaxed">
              One-off Sources Sought responses are useful. A systematic approach to Sources
              Sought notices is how serious contractors build a predictable pipeline. The goal
              is to get ahead of RFPs by 6 to 18 months — and Sources Sought notices are your
              primary signal that a contract is coming.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Here's the framework that works:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  phase: "Discovery",
                  timeframe: "Ongoing",
                  actions: [
                    "Monitor SAM.gov for Sources Sought notices matching your NAICS codes",
                    "Track agency budget appropriations and spending plans (USASpending.gov and OMB exhibits)",
                    "Follow OSDBU newsletters and agency forecasts",
                  ],
                },
                {
                  phase: "Qualification",
                  timeframe: "Within 48 hours of finding a notice",
                  actions: [
                    "Read the full notice and check the response deadline",
                    "Assess your relevant past performance: do you have 2+ comparable contracts?",
                    "Confirm your certifications apply to this set-aside type and NAICS code",
                    "Check if you know the incumbent (FPDS lookup on prior contract numbers)",
                  ],
                },
                {
                  phase: "Response",
                  timeframe: "5–10 business days before deadline",
                  actions: [
                    "Draft a tailored response using the structure in Section 05",
                    "Have a technical SME review the capability section",
                    "Submit before the deadline — not the day of",
                    "Confirm receipt with the CO if there's no automated confirmation",
                  ],
                },
                {
                  phase: "Nurture",
                  timeframe: "Ongoing until RFP posts",
                  actions: [
                    "Follow up with CO and OSDBU",
                    "Attend any industry days or pre-solicitation events",
                    "Add the opportunity to your pipeline with the expected solicitation date",
                    "Monitor for draft RFP releases (many agencies post a draft for public comment)",
                  ],
                },
                {
                  phase: "Bid decision",
                  timeframe: "When RFP posts",
                  actions: [
                    "Use your Sources Sought engagement to inform your pWin score",
                    "You already know the CO, the requirement, and potentially the incumbent",
                    "Decide whether to prime, sub, or pass — with data, not guessing",
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover-lift">
                  <div className="flex items-center gap-4 px-5 py-3 bg-blue-50 border-b border-stone-200">
                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <div>
                      <span className="font-bold text-blue-800">{phase.phase}</span>
                      <span className="text-blue-500 text-xs ml-2">— {phase.timeframe}</span>
                    </div>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {phase.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The contractors who consistently win federal work aren't better at writing proposals.
              They're earlier. They're engaging with agencies when requirements are still being
              shaped, building relationships before the competition is announced, and making bid
              decisions with real intelligence rather than guessing from a cold solicitation.
              Sources Sought notices are the on-ramp to that process.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For more on building a disciplined approach to pursuit decisions, read our guides on{" "}
              <Link href="/blog/government-contract-win-rate" className="text-blue-700 hover:underline font-medium">
                improving your government contract win rate
              </Link>{" "}
              and{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline font-medium">
                managing your government contract pipeline
              </Link>
              .
            </p>

            <Callout icon={Clock} color="emerald" title="Timing is the differentiator">
              <p>
                Most small businesses discover contracts when the RFP posts. A disciplined Sources
                Sought strategy means you're typically 3 to 12 months ahead of your competition
                on any given pursuit. You've already talked to the CO. You've already influenced
                the requirement. And when the RFP posts, you're not reading it for the first time
                — you helped write part of it.
              </p>
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Build your pre-solicitation pipeline with CapturePilot
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  CapturePilot monitors Sources Sought notices, tracks your pursuits through
                  every pre-award phase, and alerts you the moment a related RFP posts.
                  Stop managing this in a spreadsheet.
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
                  desc: "When the Sources Sought leads to an RFP, here's the step-by-step for first-time bidders.",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline",
                  desc: "From discovery to award — how to track pursuits and make better bid decisions.",
                },
                {
                  href: "/blog/sam-gov-search-tips",
                  title: "SAM.gov Search Tips",
                  desc: "Filters and tactics for finding real opportunities without drowning in noise.",
                },
                {
                  href: "/blog/small-business-set-aside-threshold",
                  title: "Small Business Set-Aside Thresholds",
                  desc: "The dollar limits that control when a contract must be set aside for small business.",
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
