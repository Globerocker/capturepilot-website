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
  Zap,
  Clock,
  DollarSign,
  Search,
  Shield,
  GitBranch,
  Layers,
  XCircle,
  Award,
  Eye,
  Crosshair,
  Radio,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-capture-really-is", label: "What Capture Management Really Is" },
  { id: "why-80-percent", label: "Why 80% of the Win Happens Before RFP Day" },
  { id: "the-four-phases", label: "The Four Phases of a Real Capture Process" },
  { id: "phase-1-identification", label: "Phase 1: Opportunity Identification and Qualification" },
  { id: "phase-2-intelligence", label: "Phase 2: Intelligence Gathering and Customer Access" },
  { id: "phase-3-positioning", label: "Phase 3: Competitive Positioning and Teaming" },
  { id: "bid-no-bid", label: "The Bid/No-Bid Gate: Your Most Important Decision" },
  { id: "phase-4-handoff", label: "Phase 4: Pre-RFP Shaping and Proposal Handoff" },
  { id: "building-your-system", label: "Building a Capture System Without a Dedicated Team" },
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

export default function CaptureManagementProcessPage() {
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
            <span className="text-stone-900 font-medium">Capture Management Process</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Crosshair className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            The Capture Management Process:{" "}
            <span className="gradient-text">How Winning Contractors Find and Win Deals</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most small businesses treat capture management as a fancy name for "working on a bid."
            It isn't. Capture is the systematic work you do before the RFP ever drops — the
            relationship building, intelligence gathering, and competitive positioning that determines
            whether your proposal wins or fills a drawer. Get capture right and proposals become
            almost a formality. Get it wrong and no amount of proposal polish will save you.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 4, 2026</span>
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
            <SectionHeading id="what-capture-really-is" number="01" title="What Capture Management Really Is" />

            <p className="text-stone-700 leading-relaxed">
              Capture management is the disciplined process of identifying a specific government
              contract opportunity, researching it deeply, and working to position your company as
              the obvious choice — all before the solicitation is ever released. It's not proposal
              writing. It's not business development in the broad sense. It's focused, deliberate
              work on a single opportunity with the goal of shaping conditions in your favor.
            </p>

            <p className="text-stone-700 leading-relaxed">
              A capture manager owns an opportunity from the moment it enters your pipeline through
              contract award. They coordinate across your technical staff, executives, teaming
              partners, and proposal team. They're responsible for knowing the customer, the
              competition, and the requirement — and for making sure your solution actually addresses
              the problem the agency is trying to solve.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Contrast that with what most small businesses actually do: monitor SAM.gov for posted
              RFPs, grab the solicitation document, and start writing a response. That approach puts
              you at a structural disadvantage before you type a single word. By the time an RFP is
              public, contractors with real capture processes have already been working the
              opportunity for months. They've met with the program office, shaped requirements to
              favor their approach, and lined up the right teaming partners. You're writing a
              proposal into a game that's mostly been decided.
            </p>

            <Callout icon={DollarSign} color="emerald" title="The market you're working in">
              <p>
                The federal government awarded <strong>$183 billion</strong> in prime contracts to
                small businesses in fiscal year 2024 — 28.8% of all federal contracting dollars,
                exceeding the government's own 23% statutory goal for the fourth straight year.
                Service-disabled veteran-owned small businesses hit a record <strong>$32.8 billion</strong>.
                The opportunity is real. The constraint isn't market size. It's whether you have a
                process to compete for it systematically.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Companies at every size run capture processes. Large defense contractors have entire
              capture teams dedicated to single opportunities worth hundreds of millions. Small
              businesses — especially those just entering federal contracting — can run a leaner
              version of the same process. The phases are the same. The required rigor is the same.
              The scale adjusts to match your resources.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="why-80-percent" number="02" title="Why 80% of the Win Happens Before RFP Day" />

            <p className="text-stone-700 leading-relaxed">
              The Association of Proposal Management Professionals (APMP) has documented a striking
              pattern among high-performing government contractors: firms that consistently win more
              than 70% of their bids allocate roughly <strong>60% of their total bid and proposal
              budget to capture</strong> — the pre-RFP work — and only 40% to actual proposal
              development. That's the inverse of what most small businesses do.
            </p>

            <p className="text-stone-700 leading-relaxed">
              There's a practical reason this works. Government acquisition is not a neutral
              process. Program managers know what they want long before they write the solicitation.
              They've been working with existing vendors, talking to industry during market research,
              and shaping requirements based on what they believe is available. Contractors who
              engage during this period — through{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline">
                sources sought responses
              </Link>
              , industry days, and direct program office meetings — get to influence that shaping.
              Their solutions become the benchmark against which competitors are measured.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The data on win rates is clear. Contractors who start capture planning{" "}
              <strong>12 to 24 months before RFP release</strong> consistently achieve higher win
              rates than those who engage after the solicitation drops. One widely cited industry
              figure puts it bluntly: by the time the RFP hits SAM.gov, roughly 80% of the
              competitive outcome is already determined.
            </p>

            {/* Comparison table */}
            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left p-3 font-semibold">When You Start Capture</th>
                    <th className="text-left p-3 font-semibold">What You Can Influence</th>
                    <th className="text-left p-3 font-semibold">Competitive Position</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="bg-white hover:bg-stone-50 transition-colors">
                    <td className="p-3 font-medium text-emerald-700">12–24 months pre-RFP</td>
                    <td className="p-3 text-stone-600">Requirements, evaluation criteria, set-aside decisions, scope</td>
                    <td className="p-3 text-stone-600">Strong — you helped write the spec</td>
                  </tr>
                  <tr className="bg-white hover:bg-stone-50 transition-colors">
                    <td className="p-3 font-medium text-amber-700">3–6 months pre-RFP</td>
                    <td className="p-3 text-stone-600">Teaming, some solution shaping, relationship quality</td>
                    <td className="p-3 text-stone-600">Moderate — you're competitive if relationship exists</td>
                  </tr>
                  <tr className="bg-white hover:bg-stone-50 transition-colors">
                    <td className="p-3 font-medium text-orange-700">At RFP release</td>
                    <td className="p-3 text-stone-600">Proposal compliance, price point, subcontractor lineup</td>
                    <td className="p-3 text-stone-600">Weak — responding to a game you didn't shape</td>
                  </tr>
                  <tr className="bg-white hover:bg-stone-50 transition-colors">
                    <td className="p-3 font-medium text-red-700">After amendment cycle</td>
                    <td className="p-3 text-stone-600">Proposal writing only</td>
                    <td className="p-3 text-stone-600">Very weak — proposal writing is almost all you have left</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              None of this means late entrants can never win. They can — when incumbents underperform,
              when set-asides change, or when the requirement shifts at the last minute. But relying
              on those scenarios is not a strategy. It's luck. A{" "}
              <Link href="/blog/government-contract-win-rate" className="text-blue-700 hover:underline">
                sustainable win rate
              </Link>{" "}
              comes from consistently starting capture work early.
            </p>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="the-four-phases" number="03" title="The Four Phases of a Real Capture Process" />

            <p className="text-stone-700 leading-relaxed">
              Capture management is not a single action — it's a sequence of phases, each building
              on the last. The phases below represent how mature government contractors approach a
              specific opportunity from initial identification through proposal handoff. Smaller
              teams compress some phases or run them in parallel. But skipping phases entirely is
              how companies end up writing losing proposals.
            </p>

            {/* Phase Visual */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { num: "01", label: "Identification & Qualification", color: "bg-blue-50 border-blue-200 text-blue-800", icon: Search },
                { num: "02", label: "Intelligence Gathering & Customer Access", color: "bg-violet-50 border-violet-200 text-violet-800", icon: Eye },
                { num: "03", label: "Competitive Positioning & Teaming", color: "bg-amber-50 border-amber-200 text-amber-800", icon: Users },
                { num: "04", label: "Pre-RFP Shaping & Proposal Handoff", color: "bg-emerald-50 border-emerald-200 text-emerald-800", icon: ArrowRight },
              ].map(({ num, label, color, icon: Icon }) => (
                <div key={num} className={`rounded-xl border p-4 flex flex-col gap-2 ${color}`}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 opacity-70" />
                    <span className="text-xs font-bold opacity-70">Phase {num}</span>
                  </div>
                  <p className="text-sm font-semibold leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              One thing to understand up front: capture is not something you do once an opportunity
              looks promising. It's the process that determines whether an opportunity is worth
              pursuing at all. That's why qualification — the honest assessment of your fit — happens
              before you commit real resources. The{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline">
                pipeline management process
              </Link>{" "}
              feeds opportunities into capture; capture determines which ones actually get worked.
            </p>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="phase-1-identification" number="04" title="Phase 1: Opportunity Identification and Qualification" />

            <p className="text-stone-700 leading-relaxed">
              The capture process starts long before there's a formal opportunity. You're scanning
              agency procurement forecasts, monitoring spending data on USASpending.gov, tracking
              expiring contracts in your target market, and watching for{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline">
                sources sought notices
              </Link>{" "}
              that signal a future award. This is the top of the funnel — broad intelligence about
              where the government is planning to spend.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Once a specific opportunity enters your radar, qualification begins. This is where most
              small businesses waste enormous resources — by pursuing opportunities they should have
              walked away from in week one. A disciplined qualification filter asks hard questions
              early:
            </p>

            <ul className="space-y-3 my-6">
              {[
                { q: "Do we have relevant past performance?", note: "Agencies evaluate past performance heavily. If you can't cite directly relevant experience, your score here will hurt you." },
                { q: "Are we eligible for this set-aside?", note: "Check your certifications, size standards, and set-aside type before spending time on a bid you legally can't win." },
                { q: "Do we know the customer?", note: "Has anyone on your team worked with this program office, agency, or contracting officer before? If the answer is no, your starting position is weak." },
                { q: "Who is the incumbent?", note: "Is this a recompete? If so, how well is the incumbent performing? Displacing a well-performing incumbent is hard. Displacing a struggling one is an opportunity." },
                { q: "Can we price competitively and still make money?", note: "If the budget is public, work backwards. If the budget is unknown, estimate based on similar awards. A win you can't execute profitably isn't a win." },
              ].map(({ q, note }) => (
                <li key={q} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-stone-800">{q}</p>
                    <p className="text-sm text-stone-600 mt-0.5">{note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Callout icon={Target} color="sky" title="Use a quick-checker before committing resources">
              <p>
                Before assigning anyone to a capture effort, run a rapid eligibility and fit check.
                CapturePilot's{" "}
                <Link href="/features/quick-checker" className="underline font-medium">
                  Quick Checker
                </Link>{" "}
                evaluates your certifications, size standards, and set-aside eligibility against a
                specific opportunity in minutes. It won't replace a full capture review, but it will
                tell you immediately if you're ineligible — saving hours of wasted effort.{" "}
                <a href={CHECK_URL} className="underline font-medium">
                  Try it free.
                </a>
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Qualification is a gate, not a formality. If an opportunity doesn't pass qualification,
              move on. There are thousands of federal opportunities posted every year. The right
              strategy isn't to pursue everything — it's to pursue the right things with full
              commitment. Spreading thin across 20 mediocre pursuits consistently loses to a
              competitor who picked 5 strong opportunities and worked each one properly.
            </p>

            <p className="text-stone-700 leading-relaxed">
              One useful rule of thumb: run your qualification scorecard before you've spent more
              than four hours on any opportunity. If the score is below your threshold, note it and
              move on. If it passes, assign a capture lead and move to phase two.
            </p>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="phase-2-intelligence" number="05" title="Phase 2: Intelligence Gathering and Customer Access" />

            <p className="text-stone-700 leading-relaxed">
              Intelligence gathering is where most of the work lives — and where the real
              competitive advantage gets built. You need four types of intelligence: customer
              intelligence, competitor intelligence, requirement intelligence, and budget intelligence.
              None of these come from reading the eventual RFP. They come from research you do months
              beforehand.
            </p>

            <div className="my-8 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Customer Intelligence",
                  icon: Users,
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                  items: [
                    "Who is the program manager and what do they care about?",
                    "What problems are they trying to solve with this contract?",
                    "What has frustrated them about previous vendors?",
                    "What are their internal budget pressures and constraints?",
                    "What metrics is their leadership watching?",
                  ],
                },
                {
                  title: "Competitor Intelligence",
                  icon: Eye,
                  color: "bg-violet-50 border-violet-200",
                  iconColor: "text-violet-600",
                  items: [
                    "Who is the incumbent and how are they performing?",
                    "Who else has attended industry days or responded to sources sought?",
                    "What are competitor strengths you'll need to neutralize?",
                    "What are their pricing patterns on similar work?",
                    "Are they likely to team with anyone you'd need to counter?",
                  ],
                },
                {
                  title: "Requirement Intelligence",
                  icon: Layers,
                  color: "bg-amber-50 border-amber-200",
                  iconColor: "text-amber-600",
                  items: [
                    "What does the statement of work likely cover?",
                    "Are there technical requirements you can't meet?",
                    "What evaluation factors will carry the most weight?",
                    "Are there mandatory qualifications (clearances, certifications)?",
                    "What does the agency value — cost, speed, past performance?",
                  ],
                },
                {
                  title: "Budget Intelligence",
                  icon: DollarSign,
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                  items: [
                    "What is the expected contract value and period of performance?",
                    "Has the budget been appropriated or is it tied to future funding?",
                    "What did similar work cost under the current or previous contract?",
                    "Are there budget pressures that will make price the dominant factor?",
                    "What is the range of competitive pricing for this type of work?",
                  ],
                },
              ].map(({ title, icon: Icon, color, iconColor, items }) => (
                <div key={title} className={`rounded-xl border p-5 ${color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                    <h3 className="font-bold text-stone-800 text-sm">{title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-stone-700">
                        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Customer access is how you gather most of this. That means direct engagement with the
              program office — which is legal and encouraged by the government's acquisition
              regulations. You can submit questions during sources sought comment periods, request
              one-on-one meetings with contracting officers, attend agency-hosted industry days, and
              participate in pre-solicitation conferences. Each of these touchpoints gives you
              intelligence you can't get any other way.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Many small business owners are reluctant to initiate contact with government customers,
              worried about appearing too aggressive or violating procurement rules. The rules are
              simpler than you think: before an RFP is issued, agencies are actively encouraged to
              engage industry. The line is clear — you can share information about your capabilities
              and ask questions about the requirement. You cannot try to unduly influence the
              procurement in ways that disadvantage other competitors. Stay in bounds and engage
              early and often.
            </p>

            <Callout icon={Lightbulb} color="amber" title="Intelligence shapes your differentiators">
              <p>
                The intelligence you gather in Phase 2 directly feeds what becomes your win themes
                in the proposal. If you know the agency's biggest pain point is incumbent
                communication failures, your technical approach leads with your communications
                methodology. If price is the dominant concern, your cost volume gets more attention.
                Without this intelligence, your proposal is generic. With it, it's targeted.
                CapturePilot's{" "}
                <Link href="/features/intelligence" className="underline font-medium">
                  Intelligence tools
                </Link>{" "}
                help you track and organize competitive data across your active pursuits.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-200" />
                <span className="text-blue-200 text-sm font-medium">Free eligibility check</span>
              </div>
              <h3 className="text-xl font-black mb-2">
                Know before you spend time on a pursuit
              </h3>
              <p className="text-blue-100 text-sm mb-6 max-w-xl">
                Check your set-aside eligibility, size standard status, and certification fit against
                any active opportunity — in under two minutes. No commitment required.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="phase-3-positioning" number="06" title="Phase 3: Competitive Positioning and Teaming" />

            <p className="text-stone-700 leading-relaxed">
              By Phase 3, you understand the opportunity, know the customer's priorities, and have
              mapped the competitive field. Now the work shifts to positioning — ensuring that your
              solution addresses the customer's problems better than any competitor's solution does,
              and that your team has the right capabilities to deliver it.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Competitive positioning means identifying your discriminators. A discriminator is
              something you can do — or something you've done — that directly addresses the customer's
              known priorities, and that your competitors cannot credibly claim. It's not a list of
              your capabilities. It's a tight answer to the question: why should this agency choose
              you over the other bidders?
            </p>

            <p className="text-stone-700 leading-relaxed">
              Strong discriminators are specific, verifiable, and relevant. "We have extensive
              experience in this field" is not a discriminator — every competitor says the same thing.
              "We've reduced IT help desk ticket resolution time by 40% on three comparable DoD
              contracts" is a discriminator. It's specific, it's documented in your{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 hover:underline">
                past performance
              </Link>
              , and it speaks directly to what the agency cares about.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">Teaming Decisions</h3>

            <p className="text-stone-700 leading-relaxed">
              Teaming is often where opportunities are won or lost before the proposal starts. The
              right team fills capability gaps, adds relevant past performance, satisfies set-aside
              requirements, or brings customer relationships you don't have. The wrong team creates
              execution risk, price pressure, and coordination headaches.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Evaluate potential teammates against a clear set of criteria: What specific gap do they
              fill? Do they have a real relationship with this customer? What's their financial
              stability and execution track record? Will they help or hurt your price competitiveness?
              For more on structuring these partnerships, the{" "}
              <Link href="/blog/government-contract-teaming-agreement" className="text-blue-700 hover:underline">
                teaming agreement guide
              </Link>{" "}
              covers the legal and strategic dimensions in detail.
            </p>

            <Callout icon={Users} color="violet" title="Teaming for set-aside access">
              <p>
                Teaming is especially important if your target opportunity has a set-aside component
                you don't qualify for independently. An{" "}
                <Link href="/blog/8a-sole-source-contracts" className="text-blue-700 underline">
                  8(a) firm
                </Link>
                ,{" "}
                <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 underline">
                  SDVOSB
                </Link>
                , or{" "}
                <Link href="/blog/wosb-certification-guide" className="text-blue-700 underline">
                  WOSB
                </Link>{" "}
                can sometimes lead a pursuit that a non-certified firm can't win alone — if the
                teaming structure and work allocation meet the program's requirements. Use
                CapturePilot's{" "}
                <Link href="/features/matching" className="underline font-medium">
                  matching tools
                </Link>{" "}
                to find certified partners with relevant experience in your target agencies.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              One discipline mistake here: don't lock in teaming partners too early, and don't lock
              them in too late. Too early, and you may find better partners as you learn more about
              the requirement. Too late, and good partners have already committed to your competitors.
              The right window for teaming conversations is typically 6 to 12 months before expected
              RFP release for significant opportunities.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="bid-no-bid" number="07" title="The Bid/No-Bid Gate: Your Most Important Decision" />

            <p className="text-stone-700 leading-relaxed">
              Every major capture milestone should include a formal bid/no-bid review. Most small
              businesses treat bid/no-bid as a one-time decision made when the RFP drops. That's too
              late — and it's why so many teams end up writing proposals they should have walked away
              from months earlier.
            </p>

            <p className="text-stone-700 leading-relaxed">
              A proper bid/no-bid gate happens at multiple points in the capture lifecycle — at
              initial qualification, at the midpoint of Phase 2, and again when the draft RFP or
              final RFP is released. At each gate, you ask: has anything changed that alters our
              competitive position? If the answer is yes, you reassess. If the opportunity has gotten
              worse — the incumbent is performing better than expected, requirements shifted away from
              your strengths, a stronger competitor entered the field — you should have the discipline
              to walk away.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The business case for this discipline is straightforward. Losing proposals cost money —
              in staff time, in outside consultants, in proposal software and printing. A typical
              government proposal costs a small business anywhere from $10,000 to well over $100,000
              in fully loaded labor costs, depending on complexity. Spending that on opportunities
              you won't win is not just a waste — it's a drain on the capacity you need for pursuits
              you can actually close.
            </p>

            {/* Bid/No-Bid Scorecard */}
            <div className="my-8 bg-stone-50 border border-stone-200 rounded-2xl p-6">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Bid/No-Bid Scoring Framework
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="text-left pb-2 text-stone-600 font-semibold">Factor</th>
                      <th className="text-center pb-2 text-stone-600 font-semibold w-16">Weight</th>
                      <th className="text-left pb-2 text-stone-600 font-semibold">Score High (3) When...</th>
                      <th className="text-left pb-2 text-stone-600 font-semibold">Score Low (1) When...</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {[
                      { factor: "Customer relationship", weight: "25%", high: "You have direct access to the PM and CO", low: "You've never engaged with this program office" },
                      { factor: "Past performance relevance", weight: "20%", high: "You have 3+ directly comparable references", low: "You're stretching to call past work relevant" },
                      { factor: "Competitive positioning", weight: "20%", high: "Your discriminators are clear and defensible", low: "You can't articulate why you'd win" },
                      { factor: "Technical fit", weight: "15%", high: "Your core capabilities match the requirement", low: "You'd need significant new capabilities" },
                      { factor: "Price competitiveness", weight: "10%", high: "You can price at or below likely winning range", low: "Your cost structure puts you above market" },
                      { factor: "Teaming strength", weight: "10%", high: "You have strong teammates committed", low: "You're pursuing solo with capability gaps" },
                    ].map(({ factor, weight, high, low }) => (
                      <tr key={factor} className="hover:bg-stone-50 transition-colors">
                        <td className="py-2.5 pr-4 font-medium text-stone-800">{factor}</td>
                        <td className="py-2.5 text-center text-blue-600 font-bold">{weight}</td>
                        <td className="py-2.5 pr-4 text-stone-600">{high}</td>
                        <td className="py-2.5 text-stone-600">{low}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-4">
                Score each factor 1–3. Apply the weight. Sum to 100. A weighted score below 1.8 is a strong no-bid signal.
                For a deeper look at probability-of-win scoring, see the{" "}
                <Link href="/blog/pwin-probability-of-win" className="text-blue-700 hover:underline">
                  PWin guide
                </Link>
                .
              </p>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The hardest part of bid/no-bid discipline isn't the scoring — it's the organizational
              will to say no. Salespeople want to bid. Business development staff want pipeline
              activity. Executives worry about idle proposal staff. Resist these pressures. Your
              win rate matters more than your bid volume. A small business that bids 10 opportunities
              and wins 4 is in a far better position than one that bids 30 and wins 3.
            </p>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="phase-4-handoff" number="08" title="Phase 4: Pre-RFP Shaping and Proposal Handoff" />

            <p className="text-stone-700 leading-relaxed">
              As the RFP approaches, capture activity shifts to pre-RFP shaping and proposal
              preparation. This is your last window to influence the solicitation before it becomes
              final — and your opportunity to ensure your proposal team isn't starting from a blank
              page when the clock starts.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Pre-RFP shaping uses all the formal channels the government provides: draft RFP
              comment periods, pre-solicitation conference questions, requests for information, and
              direct communications with the contracting officer. If a draft RFP has evaluation
              criteria that work against your strengths, you comment on them — professionally,
              constructively, with a business case for why a different approach serves the agency's
              mission better. Some of those comments will be incorporated. Some won't. But you
              have standing to try, and competitors who engage in this step consistently influence
              final solicitation language in their favor.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Don't skip the draft RFP review">
              <p>
                Draft RFPs are published for a reason — agencies want industry input before they
                finalize requirements. Yet most small businesses either don't comment at all, or
                submit generic capability statements that don't address specific solicitation
                language. Use draft RFP comment periods to flag ambiguous requirements, propose
                clearer evaluation criteria, and demonstrate your understanding of the problem.
                It builds credibility and sometimes directly reshapes the final document.
              </p>
            </Callout>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">The Capture-to-Proposal Handoff</h3>

            <p className="text-stone-700 leading-relaxed">
              When the final RFP drops, the capture manager hands off to the proposal manager. This
              handoff should not be a scramble. A proper handoff includes a documented capture
              summary covering: the opportunity background and customer priorities, your win strategy
              and key discriminators, the competitive landscape and how you've addressed each
              competitor's strengths, your team structure and any teaming agreements, the pricing
              strategy and target price-to-win, and the key risk areas in the proposal.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Proposal teams that receive a complete capture summary can write a targeted, win-themed
              proposal from day one. Proposal teams that receive nothing — or worse, have to
              reconstruct the capture work themselves — spend the first week of the proposal period
              doing research that should have been done months ago. By the time they're actually
              writing, they're already behind.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For a detailed look at what happens after handoff, the{" "}
              <Link href="/blog/government-rfp-response-guide" className="text-blue-700 hover:underline">
                RFP response guide
              </Link>{" "}
              covers the proposal development process step by step, including{" "}
              <Link href="/blog/government-proposal-compliance-matrix" className="text-blue-700 hover:underline">
                compliance matrix construction
              </Link>{" "}
              and technical volume strategy.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 text-sm font-medium">30-day free trial</span>
              </div>
              <h3 className="text-xl font-black text-stone-900 mb-2">
                Run capture like a large contractor — without the overhead
              </h3>
              <p className="text-stone-600 text-sm mb-6 max-w-xl">
                CapturePilot's pipeline, intelligence, and proposal tools give you a structured
                capture process without hiring a dedicated capture team. Track opportunities, build
                win themes, and hand off to proposals — all in one platform.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="building-your-system" number="09" title="Building a Capture System Without a Dedicated Team" />

            <p className="text-stone-700 leading-relaxed">
              Large defense contractors have capture managers dedicated to single opportunities worth
              $50 million and up. Small businesses don't have that luxury. But you can build a
              systematic capture process that works at your scale — it requires structure,
              not headcount.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The most important structural element is pipeline ownership. Every opportunity in
              active capture should have a single named person responsible for it — even if that
              person is doing ten other things. Without a named owner, opportunities drift. No one
              schedules the next customer meeting. Intelligence gathering stops. The bid/no-bid
              review never happens. When an RFP drops, everyone is surprised and no one is ready.
            </p>

            <div className="my-8 space-y-4">
              {[
                {
                  step: "01",
                  title: "Build a capture template",
                  description: "Create a one-page capture summary document for every active pursuit. Fields: opportunity background, customer priorities, competitor landscape, your discriminators, teaming status, pricing target, key risks, and next actions. Update it monthly.",
                  icon: Layers,
                },
                {
                  step: "02",
                  title: "Set a weekly capture cadence",
                  description: "Run a 30-minute weekly pipeline review. Each active capture gets 3 minutes: what happened last week, what's planned this week, and whether the opportunity is still a bid. Discipline here compounds over time.",
                  icon: Clock,
                },
                {
                  step: "03",
                  title: "Systematize your customer engagement calendar",
                  description: "Map the procurement timeline for every active opportunity and work backwards. If RFP is expected in 9 months, what customer meetings do you need in months 1-3? When is the sources sought comment deadline? When does the teaming window close?",
                  icon: Radio,
                },
                {
                  step: "04",
                  title: "Track your win themes across the portfolio",
                  description: "Your discriminators on one opportunity often apply to others. Build a library of win themes, past performance narratives, and proof points that your team can draw from across multiple pursuits. Don't reinvent them each time.",
                  icon: Award,
                },
                {
                  step: "05",
                  title: "Run a post-award debrief on every outcome",
                  description: "Win or lose, request a debriefing from the contracting officer. The feedback improves your next capture. Winning contractors view debriefs as intelligence — not ego.",
                  icon: TrendingUp,
                },
              ].map(({ step, title, description, icon: Icon }) => (
                <div key={step} className="flex gap-4 p-5 bg-white border border-stone-200 rounded-xl hover:shadow-sm transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-blue-500">Step {step}</span>
                      <h4 className="font-bold text-stone-800">{title}</h4>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Technology helps, but it's not the answer by itself. A spreadsheet capture tracker
              that gets used consistently beats a sophisticated CRM that nobody opens. The goal is
              to make capture work habitual — scheduled, owned, and reviewed regularly —
              rather than something you remember to do when an RFP surprise shows up.
            </p>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline">
                pipeline management tools
              </Link>{" "}
              and{" "}
              <Link href="/features/proposals" className="text-blue-700 hover:underline">
                proposal features
              </Link>{" "}
              are built specifically for small businesses running multi-opportunity capture processes
              without dedicated BD staff. The{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                intelligence module
              </Link>{" "}
              tracks competitor activity, incumbent performance, and agency spending patterns so
              you're not starting from scratch on every pursuit. And when a capture is ready to
              hand off, the proposal tools carry your win themes and past performance directly into
              the proposal structure.
            </p>

            <Callout icon={Award} color="emerald" title="What a structured process delivers">
              <p>
                The APMP data is consistent across firm sizes: companies that invest capture budget
                and effort before the RFP — not just on proposals — outperform those that don't.
                The 70%+ win-rate firms allocate 60% of their bid and proposal budget to pre-RFP
                capture work. They're not smarter. They're earlier. The market rewards the
                contractor that did the homework six months before you started reading the RFP.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              If you're newer to federal contracting, start with two or three active capture efforts
              before expanding. Build the habits with a small number of well-chosen opportunities.
              Learn what customer access actually looks like. Practice the bid/no-bid discipline.
              Get comfortable with the pre-RFP shaping process. Then scale.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For help structuring your initial approach, the{" "}
              <Link href="/resources/bid-checklist" className="text-blue-700 hover:underline">
                bid checklist
              </Link>{" "}
              gives you a tactical starting point, and the{" "}
              <Link href="/features/capability-statement" className="text-blue-700 hover:underline">
                capability statement builder
              </Link>{" "}
              ensures you have a polished one-pager ready for every customer meeting. The{" "}
              <Link href="/blog/incumbent-advantage-government-contracts" className="text-blue-700 hover:underline">
                guide to beating the incumbent
              </Link>{" "}
              covers the specific capture tactics that work when you're challenging an entrenched
              competitor — one of the most common positions small businesses find themselves in.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll mt-16">
            <div className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Crosshair className="w-5 h-5 text-blue-300" />
                <span className="text-blue-300 text-sm font-medium">Book a strategy call</span>
              </div>
              <h3 className="text-xl font-black mb-2">
                Build your first structured capture process
              </h3>
              <p className="text-stone-300 text-sm mb-6 max-w-xl">
                Talk to a CapturePilot advisor about your specific opportunities, certifications,
                and target agencies. We'll help you identify where to start and what a realistic
                capture cadence looks like for your team size.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 border border-stone-600 text-white font-semibold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors text-sm"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
