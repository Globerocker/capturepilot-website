"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  ChevronRight,
  TrendingDown,
  Calendar,
  DollarSign,
  FileText,
  Clock,
  Shield,
  BarChart3,
  CheckCircle2,
  XCircle,
  Zap,
  Activity,
  PauseCircle,
  RefreshCw,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-this-is-your-problem", label: "Why CRs Are Your Business Problem" },
  { id: "what-a-cr-is", label: "What a Continuing Resolution Actually Is" },
  { id: "rules-under-cr", label: "What Agencies Can and Cannot Do" },
  { id: "new-contract-awards", label: "How CRs Kill New Contract Awards" },
  { id: "existing-contracts", label: "Impact on Existing Contracts and Options" },
  { id: "fy2025-fy2026-timeline", label: "The FY2025 and FY2026 CR Timeline" },
  { id: "small-business-vulnerabilities", label: "Small Business-Specific Vulnerabilities" },
  { id: "survival-strategies", label: "Strategies to Protect Your Pipeline" },
  { id: "intelligence-advantage", label: "Using Intelligence Data to Navigate CRs" },
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

export default function ContinuingResolutionPage() {
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
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">Continuing Resolutions</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Activity className="w-4 h-4" /> Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Continuing Resolutions:{" "}
            <span className="gradient-text">
              How Federal Budget Uncertainty Affects Your Contracts
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government has operated under a continuing resolution for an average of
            185 days of every fiscal year since 1998. If you run a government contracting business
            and treat this as somebody else&apos;s problem, it will eventually become your crisis.
            Here&apos;s what CRs actually do to the award pipeline — and how to build around them.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 5, 2026</span>
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
            <SectionHeading id="why-this-is-your-problem" number="01" title="Why CRs Are Your Business Problem" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Congress hasn&apos;t passed all 12 annual appropriations bills on time since 1996. That&apos;s not a typo — the last time the federal government entered a new fiscal year with fully enacted spending authority for every agency was 29 years ago, for FY1997. Since then, every fiscal year has begun with at least some agencies operating on borrowed time, funded by a continuing resolution rather than a real budget.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The numbers from the Peter G. Peterson Foundation are stark: since FY1998, Congress has passed an average of five continuing resolutions per fiscal year. The government has operated under a CR for an average of 117 days — roughly four months — before full-year appropriations finally get signed. In 13 of the past 15 fiscal years, Congress has passed zero appropriations bills by October 1.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              This isn&apos;t dysfunction you can outrun. It&apos;s the operating environment. And if you don&apos;t understand exactly what a CR does to the contracting pipeline — what agencies can and cannot do, which contracts stall and which continue — you&apos;re building your GovCon business on a foundation you haven&apos;t inspected.
            </p>

            <Callout icon={BarChart3} color="amber" title="The scale of CR-driven disruption">
              A January 2026 GAO report (GAO-26-107065) found that 36 of 74 surveyed DoD acquisition programs — 49% — reported schedule delays directly attributable to continuing resolutions. The F-35 program&apos;s financial management staff now spends an estimated 20% of their time replanning the budget to manage CR constraints. One facility contract at Joint Base San Antonio saw its cost more than double — from $579,000 to $1,445,000 — because of CR-driven delays.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Those are big-program statistics. The story for small businesses is sharper. You have less capital, thinner margins, and no enterprise-wide revenue base to absorb a multi-month contract freeze. A CR that makes a large prime contractor&apos;s fiscal year complicated makes a small business&apos;s fiscal year dangerous.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-a-cr-is" number="02" title="What a Continuing Resolution Actually Is" />

            <p className="text-stone-700 leading-relaxed mb-4">
              A continuing resolution is an appropriations law in the form of a joint resolution that provides temporary budget authority to federal agencies when Congress hasn&apos;t passed the full-year spending bills by the start of the fiscal year on October 1. The CR doesn&apos;t appropriate a specific dollar amount. It provides a formula — the{" "}
              <strong>&quot;rate for operations&quot;</strong> — calculated from what was enacted in the prior fiscal year.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Think of it as the government&apos;s equivalent of rolling over an expired contract rather than signing a new one. The agency keeps running at roughly the prior year&apos;s pace. It doesn&apos;t get new money for new programs. It doesn&apos;t get certainty about the future. It just gets permission to continue what it was already doing, for as long as the CR lasts.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">CR vs. Shutdown: An Important Distinction</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: PauseCircle,
                    label: "Continuing Resolution",
                    desc: "Congress passes a temporary funding bill. Agencies stay open, existing programs continue, new starts are blocked. Contracting officers can award contracts for previously-funded activities. The government functions — slowly and with restrictions.",
                    color: "text-amber-600",
                    bg: "bg-amber-50",
                  },
                  {
                    icon: XCircle,
                    label: "Government Shutdown",
                    desc: "All temporary funding expires. Most non-essential agency operations halt. New contract awards stop. Invoices aren't processed. Essential services (military, emergency response) continue; everything else pauses until Congress acts.",
                    color: "text-red-600",
                    bg: "bg-red-50",
                  },
                ].map((item) => (
                  <div key={item.label} className={`flex gap-4 p-4 rounded-xl ${item.bg}`}>
                    <item.icon className={`w-6 h-6 ${item.color} shrink-0 mt-0.5`} />
                    <div>
                      <p className={`font-bold text-sm ${item.color}`}>{item.label}</p>
                      <p className="text-sm text-stone-700 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-500 mt-4">
                Both situations hurt contractors, but in different ways. A CR is a slow drag; a shutdown is an acute shock. Most fiscal years feature both.
              </p>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              CRs can also include <strong>anomalies</strong> — targeted exceptions written directly into the CR legislation that allow specific programs to spend at rates higher or lower than the formula. A new ship class, a defense modernization program, a specific agency initiative: if Congress wants to protect it from the CR restrictions, they add an anomaly. Without one, every program gets the same formula treatment.
            </p>
          </div>

          {/* ── Mid-article CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Is your pipeline built to survive a CR?</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/intelligence" className="underline text-white hover:text-blue-200">
                    Intelligence tools
                  </Link>{" "}
                  show you which of your target agencies have enacted appropriations, which are running on CR authority, and where your pipeline has the most exposure to budget uncertainty.
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

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="rules-under-cr" number="03" title="What Agencies Can and Cannot Do Under a CR" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The rules under a CR are set by the CR legislation itself, OMB Circular A-11 (Section 123), and the apportionment bulletins OMB issues at the start of each CR period. Contracting officers aren&apos;t making judgment calls — they&apos;re constrained by explicit legal authority.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-900 text-sm">What agencies CAN do</h3>
                </div>
                <ul className="space-y-2 text-sm text-emerald-800">
                  {[
                    "Fund existing programs and activities at the pro-rata prior-year rate",
                    "Award contracts for activities conducted and funded in the prior year",
                    "Exercise options on existing contracts (with funding constraints)",
                    "Issue OMB-approved apportionments for existing programs",
                    "Protect staff from furlough via personnel compensation exceptions",
                    "Act on programs explicitly covered by CR anomalies",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-red-900 text-sm">What agencies CANNOT do</h3>
                </div>
                <ul className="space-y-2 text-sm text-red-800">
                  {[
                    "Start new programs that received no funding in the prior year",
                    "Increase production quantities beyond prior-year rates (DoD)",
                    "Award new contracts that exceed the apportioned funding ceiling",
                    "Obligate funds at a rate higher than the prior-year enacted level",
                    "Issue new solicitations during a full lapse (shutdown, not CR)",
                    "Finalize pending awards when appropriations have fully lapsed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The phrase &quot;new start&quot; is key. Under a CR, if a program didn&apos;t exist — or wasn&apos;t funded — in the prior year, it cannot begin. That&apos;s a hard stop, not a suggestion. It kills procurement timelines on new initiatives regardless of how well-funded they would be in a full-year appropriation.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              There&apos;s a counterintuitive flip side: agencies also generally cannot terminate existing contracts during a CR period, even inefficient ones. The law that prevents them from starting new things also locks in much of what they&apos;re already doing. Your existing contracts are protected by inertia.
            </p>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="new-contract-awards" number="04" title="How CRs Kill New Contract Awards" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The new-starts prohibition is the single biggest pipeline killer. When agencies enter a CR, every solicitation for a program that doesn&apos;t have prior-year funding either gets delayed or killed. That includes new task orders under existing IDIQs for novel requirements, fresh indefinite-delivery vehicles covering expanded scope, and any capability the agency is trying to add for the first time this year.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              But the impact doesn&apos;t stop at new starts. Even for programs that ARE eligible to proceed under a CR, contracting officers slow down. When they don&apos;t know how long the CR will last, they&apos;re hesitant to obligate funds they might need to return later if the final appropriation comes in lower than the prior-year rate. The result is a voluntary slowdown on top of the mandatory restrictions.
            </p>

            <Callout icon={FileText} color="red" title="What a CR did to DoD acquisition in FY2018">
              Before FY2018 appropriations were enacted, DoD identified 75 weapons programs that would experience delays and 40 programs subject to production quantity restrictions. Specifically: the Army had 18 new contract starts blocked, the Navy had 7 procurement contracts and 3 R&D contracts delayed, and the Air Force had 6 new starts blocked including fighter aircraft upgrades. These were programs that had cleared all other procurement hurdles — they simply ran into the CR wall.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For small businesses pursuing new work, the practical effect is that the award cycle extends unpredictably. A solicitation that was scheduled for release in October might not go out until March. An award that was expected in November might slip to April. You can&apos;t bill for delays. You can&apos;t staff up for work that hasn&apos;t been awarded. The pipeline you tracked in September looks nothing like the pipeline you see in January.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              SBIR and STTR programs face an additional complication: their statutory authorities are subject to separate reauthorization. During the October 2025 government shutdown, both SBIR and STTR authorities lapsed entirely, making new SBIR/STTR awards impossible regardless of an agency&apos;s CR status — a layered impact that hit small R&D firms especially hard.
            </p>

            <Callout icon={Lightbulb} color="sky" title="The year-end rush that follows every CR">
              Here&apos;s the other side of the equation: when full-year appropriations finally pass, agencies face a compressed calendar. All the obligations they couldn&apos;t make during the CR period suddenly need to happen before the fiscal year ends on September 30. The result is a procurement surge in Q3 and Q4 that rewards contractors who stayed visible and positioned throughout the CR freeze. Getting squeezed in October doesn&apos;t mean the money went away — it means it&apos;s coming faster later.
            </Callout>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="existing-contracts" number="05" title="Impact on Existing Contracts and Options" />

            <p className="text-stone-700 leading-relaxed mb-4">
              If you already have a contract in place, a CR doesn&apos;t terminate it. But it does complicate it in ways that create real operational risk.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: RefreshCw,
                  title: "Incremental funding modifications",
                  desc: "Contracting officers fund only the portion of your contract that corresponds to the CR period. A task order that should be funded for a full year gets funded for 46 days, then extended when the CR extends. You may see three or four funding modifications in a single fiscal year covering work you expected to be funded once.",
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                },
                {
                  icon: Calendar,
                  title: "Option year timing risk",
                  desc: "An option generally cannot be exercised if the period of performance extends beyond the current CR without further appropriation authority. Worse, many options expire if not exercised by a specific date. CR delays can compress or eliminate the window the CO has to act — and a missed option exercise date is a contract loss you can't recover.",
                  color: "text-red-600",
                  bg: "bg-red-50",
                },
                {
                  icon: PauseCircle,
                  title: "Performance holds without stop-work orders",
                  desc: "COs sometimes ask contractors to slow down or informally hold performance while funding is sorted out — without issuing a formal stop-work order. Informal holds create enormous risk: you may not be entitled to time extensions or cost recovery without a documented government direction to stop.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                },
                {
                  icon: DollarSign,
                  title: "Payment processing delays",
                  desc: "Even contracts that are funded and active face slower invoicing cycles during CR periods as agency finance offices manage multiple simultaneous apportionment periods. DFAS and agency payment systems run at reduced capacity when appropriations are uncertain.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
              ].map((item) => (
                <div key={item.title} className={`flex gap-4 p-5 rounded-2xl border ${item.bg} border-transparent`}>
                  <item.icon className={`w-6 h-6 ${item.color} shrink-0 mt-0.5`} />
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The apportionment math also creates a hidden risk when final appropriations come in lower than the prior-year rate. If an agency was spending at the prior-year rate during a CR — say $10 million per month — and the final appropriation comes in at $90 million for the year rather than $120 million, the agency has over-obligated by $30 million against what it&apos;s actually authorized. The scramble to reconcile that gap means halting further obligations, often abruptly, late in the fiscal year.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-3 text-lg">The pro-rata formula: how CR money actually flows</h3>
              <p className="text-sm text-stone-700 mb-4 leading-relaxed">
                Under OMB Circular A-11, Section 123, the amount available to an agency during a CR period is calculated as:
              </p>
              <div className="bg-white border border-stone-200 rounded-xl p-4 font-mono text-sm text-stone-800 mb-4">
                Apportioned Amount = (Days in CR Period / 365) × Prior-Year Annual Appropriation
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                A 46-day CR releases 12.6% of the prior-year appropriation. A 30-day CR releases 8.2% — close to but not exactly one-twelfth. The ceiling is further constrained to the <strong>lesser of</strong> the prior-year enacted amount, the President&apos;s budget request for the current year, or the lowest Congressional mark. This means an agency facing a proposed budget cut can&apos;t even spend at the full prior-year rate during a CR.
              </p>
            </div>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="fy2025-fy2026-timeline" number="06" title="The FY2025 and FY2026 CR Timeline" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The past two fiscal years illustrate how severe CR disruption has become. FY2025 was funded entirely by continuing resolutions — the last option year on a very long government contract. FY2026 opened with the longest government shutdown in U.S. history.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Date</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Event</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Impact on Contractors</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      date: "Oct 1, 2024",
                      event: "FY2025 begins with no appropriations enacted",
                      impact: "Agencies continue at FY2024 rates; new-starts blocked",
                    },
                    {
                      date: "Dec 20, 2024",
                      event: "First CR expires; second CR enacted through March 14, 2025",
                      impact: "Extended freeze on new contract actions for another 85 days",
                    },
                    {
                      date: "Mar 15, 2025",
                      event: "Full-year FY2025 CR signed (H.R. 1968) — $1.6T discretionary",
                      impact: "Defense: $893B, Non-defense: $708B; agencies can now plan for the year",
                    },
                    {
                      date: "Oct 1, 2025",
                      event: "FY2026 begins; no appropriations; government shuts down",
                      impact: "All non-essential operations halt; new awards impossible; invoices frozen",
                    },
                    {
                      date: "Nov 12, 2025",
                      event: "Shutdown ends at 43 days — longest in U.S. history; CR enacted through Jan 30, 2026",
                      impact: "Operations resume; CR covers $1.560T annualized discretionary authority",
                    },
                    {
                      date: "Feb 2026",
                      event: "DHS/immigration partial shutdown begins",
                      impact: "Affected contractors face additional payment delays and stop-work uncertainty",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 font-medium text-stone-800 whitespace-nowrap">{row.date}</td>
                      <td className="p-3 border border-stone-200 text-stone-700">{row.event}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The combined impact on FY2026 procurement was severe. For approximately four months — October 1 through January 30 — most agencies could not conduct normal contract award activity. The Congressional Budget Office estimated that the 43-day shutdown alone caused $11 billion in cumulative GDP loss.
            </p>

            <Callout icon={AlertTriangle} color="orange" title="FY2025: A full-year CR in practice">
              The FY2025 full-year CR (signed March 15, 2025) kept government spending flat at FY2024 levels for the entire year. Non-defense discretionary spending was cut by $13 billion versus FY2024 — not through a real appropriations debate, but by removing earmarks from the prior-year baseline. Military Construction and VA funding was cut nearly 5%, from $153.9B to $146.6B. Congressional Directed Medical Research Program funding dropped from $1.509B to $650M. These weren&apos;t strategic cuts — they were the mechanical result of operating under a formula rather than a deliberate budget.
            </Callout>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="small-business-vulnerabilities" number="07" title="Small Business-Specific Vulnerabilities" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Large prime contractors absorb CR disruptions. They have enterprise-wide revenue streams across multiple agencies, substantial lines of credit, and financial teams dedicated to managing apportionment cycles. They prepare for CRs the way airlines prepare for weather delays — with redundancy, reserves, and contingency protocols.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Small businesses don&apos;t have that infrastructure. Government contractors typically operate on profit margins around 8%. A two-month billing disruption doesn&apos;t compress your margin — it eliminates it and starts drawing down reserves you may not have.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  icon: DollarSign,
                  label: "Cash flow cliff",
                  desc: "When invoices stop being processed — either during a shutdown or because CR-period funding mods haven't been issued — you still owe payroll, rent, equipment, and subcontractor payments. Hours billed during a lapse are often unbillable and unrecoverable. If the government directed the work informally, you may absorb that cost permanently.",
                },
                {
                  icon: TrendingDown,
                  label: "Pipeline evaporation",
                  desc: "During CRs, agencies can't issue new solicitations for new-start programs. If your business development pipeline was weighted toward new work at target agencies, months of BD investment — proposal preparation, capability statement updates, relationship-building — can produce zero awards during the CR period.",
                },
                {
                  icon: Building2,
                  label: "Workforce disruption",
                  desc: "When contract awards freeze, small businesses can't hire the staff they planned to bring on for new work. But they also can't always keep incumbents on the payroll when billable work slows. The stop-start cycle of CRs is especially damaging for firms trying to grow headcount to match anticipated workload.",
                },
                {
                  icon: Shield,
                  label: "SBIR/STTR authority gaps",
                  desc: "Small businesses that rely on SBIR and STTR programs face layered risk: these authorities must be separately reauthorized and have lapsed during recent CR and shutdown periods, making new awards impossible even when an agency has CR funding for other activities.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.label}</p>
                    <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The structural answer to these vulnerabilities isn&apos;t to avoid government contracting — it&apos;s to understand which certifications, vehicles, and agency relationships give you the most protection during budget uncertainty. A{" "}
              <Link href="/features/quick-checker" className="text-blue-600 hover:text-blue-800 underline">
                quick eligibility check
              </Link>{" "}
              can reveal set-aside programs that keep you active even when new-start contracts freeze. An 8(a) sole-source relationship, for instance, lets you pursue work outside the competitive award cycle that CRs most severely disrupt.
            </p>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="survival-strategies" number="08" title="Strategies to Protect Your Pipeline and Cash Flow" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Surviving a CR period isn&apos;t about luck or waiting it out. The contractors who weather budget uncertainty well are the ones who planned for it before it arrived. Here&apos;s what that looks like in practice.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Size your cash reserve to your payment cycle",
                  desc: "The rule of thumb: keep liquid reserves sufficient to cover the full length of your longest payment cycle. If your largest agency client pays in 75 days on average, you need 75 days of operating expenses in cash or a committed line of credit — not as a growth goal, but as a minimum operating floor.",
                },
                {
                  step: "02",
                  title: "Invoice immediately at every milestone",
                  desc: "Don't batch invoices. Submit the moment performance milestones are met. Break large milestones into smaller, more frequent billable events wherever the contract permits. Every day you wait to invoice is a day you push the payment further into a period that might be frozen.",
                },
                {
                  step: "03",
                  title: "Pursue multi-year or no-year funded vehicles",
                  desc: "Contracts funded with no-year appropriations — money with no single-year expiration — are not subject to annual CR cycles. Programs funded with research or emergency appropriations similarly provide a buffer. Ask your contracting officer about the appropriation type before you plan your pipeline around any new contract.",
                },
                {
                  step: "04",
                  title: "Diversify across agencies with different budget profiles",
                  desc: "Not all agencies are funded by the same appropriations bill, and CRs affect them differently. Defense appropriations and civilian agency appropriations move on separate legislative tracks. An agency that has enacted appropriations while others are on CR can continue awarding contracts normally. Spread your pipeline to reduce concentration risk.",
                },
                {
                  step: "05",
                  title: "Document everything a CR disrupts",
                  desc: "Track all delays, informal holds, stop-work situations, and invoice processing delays in writing. Equitable adjustment claims and Requests for Equitable Adjustment depend on a clear contemporaneous record. If the government caused a delay — even informally — you may be entitled to time extensions and cost recovery. You won't get either without documentation.",
                },
                {
                  step: "06",
                  title: "Stay in contact with your contracting officer",
                  desc: "COs are the first to know what has been apportioned and what awards can proceed. Early knowledge of constraints lets you adjust staffing and performance planning before costs accumulate. A weekly check-in call during a CR period pays for itself in avoided surprises.",
                },
                {
                  step: "07",
                  title: "Model CR duration scenarios before the fiscal year starts",
                  desc: "Every September, run 30-day, 90-day, and full-year CR scenarios across your pipeline. Know at what cash-depletion point you would need to take action — before that point arrives. The contractors who come through CR periods intact are the ones who planned for them in advance, not the ones who scrambled after October 1.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 py-4 border-b border-stone-100 last:border-0">
                  <span className="text-3xl font-black text-blue-100 shrink-0 w-10 leading-none">{item.step}</span>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Clock} color="emerald" title="The Q4 opportunity: positioning during the freeze">
              The year-end spending surge that follows every extended CR is predictable. When full-year appropriations finally pass, agencies face a compressed window to obligate all the money they couldn&apos;t commit during the CR period — and they do it fast. Contractors who used the CR period to deepen agency relationships, refine their{" "}
              <Link href="/features/capability-statement" className="underline font-medium">
                capability statements
              </Link>
              , and stay current on pending solicitations are positioned to capture that surge. The freeze doesn&apos;t cancel the money — it compresses it into fewer months.
            </Callout>
          </div>

          {/* ── Mid-article CTA 2 ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-stone-900 p-8 text-white">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-stone-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Check your eligibility for CR-protected contract vehicles</h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Some programs — 8(a) sole-source, certain IDIQ vehicles, multi-year contracts — give you a significant buffer against CR disruptions. CapturePilot&apos;s Quick Checker tells you which ones you qualify for in under two minutes.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Section 9 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="intelligence-advantage" number="09" title="Using Intelligence Data to Navigate CR Uncertainty" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The contractors who navigate CR periods best aren&apos;t necessarily the ones with the most cash reserves — they&apos;re the ones with the best information. Knowing which agencies have enacted appropriations versus which are operating under CR authority changes everything about where you should focus your BD energy during a disruption.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              During a period when most of the government is frozen, some agencies have money to spend and the authority to spend it. Agencies covered by enacted appropriations — often because their bills moved first through Congress or because they received anomalies — can continue awarding contracts at normal pace while others stall. Knowing which accounts are live versus frozen isn&apos;t intuitive; it requires tracking the specific legislative history of each appropriations bill.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">What to track during a CR period</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: BarChart3,
                    label: "Agency appropriations status",
                    desc: "Which of your target agencies have enacted full-year appropriations, which are under CR, and what anomalies were included.",
                  },
                  {
                    icon: FileText,
                    label: "Pending solicitations",
                    desc: "Solicitations that were expected before a CR hit. Many will be released in compressed form as soon as the CR period ends — you want to be positioned before that happens.",
                  },
                  {
                    icon: Calendar,
                    label: "Option expiration dates",
                    desc: "Options on contracts you hold that are at risk of expiring while the government's ability to exercise them is constrained by CR uncertainty.",
                  },
                  {
                    icon: Activity,
                    label: "Spending velocity by agency",
                    desc: "Track USASpending.gov data to identify agencies that are spending at normal rates even during a CR period — those are your best near-term targets.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <item.icon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm mb-1">{item.label}</p>
                      <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:text-blue-800 underline">
                Intelligence features
              </Link>{" "}
              give you this picture across your target agencies — updated in near real-time as spending patterns shift. You can see which agencies are actively awarding contracts, which are frozen, and where spending is accelerating in advance of a fiscal year-end crunch. That intelligence turns CR uncertainty from a passive threat into something you can actually navigate.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Your{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:text-blue-800 underline">
                pipeline management
              </Link>{" "}
              should reflect your CR exposure. Opportunities at agencies operating under CR authority carry higher timeline risk than opportunities at agencies with enacted appropriations. If your pipeline weights heavily toward CR-frozen agencies, the{" "}
              <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-600 hover:text-blue-800 underline">
                bid/no-bid decision
              </Link>{" "}
              calculus changes — pursuit cost is the same, but timeline certainty is far lower.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The bigger picture: the contractors who thrive across multiple CR cycles treat budget uncertainty as a permanent market condition, not an anomaly. They build agency diversification into their three-year plan, size their cash reserves against CR scenarios rather than optimistic award timelines, and use market intelligence to shift BD energy dynamically as appropriations status changes throughout the year.
            </p>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Build a pipeline that survives CR cycles</h3>
                <p className="text-emerald-100 mb-6 text-sm leading-relaxed">
                  CapturePilot tracks agency spending velocity, appropriations status, and pipeline risk across your target market — so you know exactly where to push and where to wait during every CR period.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors text-sm"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Related Posts ── */}
          <div className="animate-on-scroll pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/federal-spending-trends-2026",
                  label: "Federal Spending Trends 2026",
                  desc: "Where the government is investing this fiscal year",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  label: "Managing Your Government Contract Pipeline",
                  desc: "From discovery to award — the full cycle",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  label: "The Bid/No-Bid Decision Framework",
                  desc: "Scoring opportunities before you commit resources",
                },
                {
                  href: "/blog/8a-sole-source-contracts",
                  label: "8(a) Sole-Source Contracts",
                  desc: "The fastest path to federal revenue — including through CRs",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm group-hover:text-blue-700 transition-colors">{post.label}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{post.desc}</p>
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
