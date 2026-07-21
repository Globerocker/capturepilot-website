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
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  FileText,
  RefreshCw,
  Calendar,
  Target,
  AlertCircle,
  BarChart3,
  Building2,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-base-year-means", label: "What Base Year + Option Years Actually Mean" },
  { id: "how-options-get-exercised", label: "How the Government Exercises (or Kills) Options" },
  { id: "five-year-rule", label: "The 5-Year Rule and the New Flexibility" },
  { id: "what-this-means-when-bidding", label: "What This Means When You're Bidding" },
  { id: "pricing-your-option-years", label: "Pricing Your Option Years Without Losing Money" },
  { id: "protecting-yourself", label: "Protecting Yourself If an Option Gets Dropped" },
  { id: "tracking-upcoming-recompetes", label: "Tracking Upcoming Recompetes Before They Post" },
  { id: "getting-options-exercised", label: "How to Make Sure Your Options Get Exercised" },
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

export default function BaseYearOptionYearPage() {
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
            <span className="text-stone-900 font-medium">Base Year + Option Years</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Calendar className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Base Year + Option Years:{" "}
            <span className="gradient-text">
              How Multi-Year Government Contracts Actually Work
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Every federal services contract you win will be structured with a base period and option
            years. Understanding how options work — who controls them, what triggers them, and how to
            price them — is the difference between building a stable federal revenue stream and
            constantly starting over.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 21, 2026</span>
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
            <SectionHeading id="what-base-year-means" number="01" title="What Base Year + Option Years Actually Mean" />

            <p className="text-stone-700 leading-relaxed mb-4">
              When the government awards a services contract, it almost never commits to multi-year
              spending upfront. Instead, it structures the contract with a <strong>base period</strong>{" "}
              — typically one year — plus a series of <strong>option periods</strong> that it may
              exercise later. You might see a solicitation listed as &quot;1 base year + 4 option
              years,&quot; which is the standard structure for a five-year services contract.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Here is the critical point: the option years are the government&apos;s right, not
              yours. The agency can choose to exercise each option — or walk away. You have no
              contractual claim to the option periods. You only have the right to perform the work
              if they decide to exercise the option and notify you in writing before the current
              period ends.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              This structure exists because federal appropriations law generally prevents agencies
              from obligating funds for future fiscal years. By breaking a long contract into a base
              year and annual options, the agency can commit funds one year at a time — satisfying
              Congress while still providing continuity for ongoing requirements.
            </p>

            <Callout icon={DollarSign} color="blue" title="Base value vs. total contract value">
              On USASpending.gov and SAM.gov contract awards, you&apos;ll see two numbers:
              &quot;current value&quot; (what has been obligated so far — typically just the base
              year) and &quot;potential value&quot; (what the contract could be worth if all options
              are exercised). A contract with a $500K base year and four $500K option years will
              show a $500K current value and a $2.5M potential value at award. When you&apos;re
              sizing up opportunities, look at the potential value — that&apos;s the real revenue
              ceiling if you perform well.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              From a practical standpoint, base + option year contracts are how the federal
              government buys most ongoing services: IT support, facility maintenance, janitorial,
              staffing, security, and professional services all commonly follow this structure. If
              you want to build recurring federal revenue rather than chasing one-time task orders,
              you need to understand this mechanism cold.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Period</th>
                    <th className="text-left px-4 py-3 font-semibold">Typical Duration</th>
                    <th className="text-left px-4 py-3 font-semibold">Government&apos;s Action</th>
                    <th className="text-left px-4 py-3 font-semibold">Contractor&apos;s Position</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Base Year", "12 months", "Obligated at award", "Guaranteed work (unless terminated)"],
                    ["Option Year 1", "12 months", "Must notify contractor before base period ends", "No right to this work — contingent on exercise"],
                    ["Option Year 2", "12 months", "Must notify before OY1 ends", "Contingent; typically easier if OY1 was exercised"],
                    ["Option Year 3", "12 months", "Same 60-day notice requirement", "Contingent on continued need and performance"],
                    ["Option Year 4", "12 months", "Final option period in standard 5-year contract", "Contingent; recompete likely follows expiration"],
                  ].map(([period, duration, gov, contractor], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-semibold text-blue-700 border-b border-stone-100">{period}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{duration}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{gov}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{contractor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="how-options-get-exercised" number="02" title="How the Government Exercises (or Kills) Options" />

            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 17.207 governs when and how a contracting officer can exercise an option. Before
              exercising any option, the CO must determine that: (1) funds are available for the
              option period, (2) the requirement still reflects an existing government need, and
              (3) exercising the option represents the most advantageous method of fulfilling that
              need compared to recompeting.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              In practice, that third determination is what saves most contractors. A recompete takes
              months and costs the agency staff time, transition risk, and continuity disruption.
              Unless your performance has been poor or the market has shifted dramatically in price,
              the path of least resistance for a busy contracting officer is to exercise the option.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The 60-day notice rule — and what happens if they miss it">
              For services contracts, FAR requires a preliminary written notice to you at least 60
              calendar days before the option period would begin. If the government misses that
              deadline, it waives the right to exercise the option unilaterally. At that point,
              extending the period of performance requires a bilateral modification — meaning you
              have negotiating leverage. You can renegotiate pricing if costs have changed
              materially. Know your contract&apos;s notice deadlines; track them proactively.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Options can also be killed before they&apos;re due. Agencies decline to exercise options for
              several reasons:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                { icon: AlertCircle, color: "text-red-500", label: "Poor contractor performance", desc: "Repeated missed deliverables, quality failures, or a low CPARS rating give the CO justification to recompete." },
                { icon: DollarSign, color: "text-amber-500", label: "Budget cuts or continuing resolutions", desc: "If the agency doesn't have appropriated funds, they legally cannot exercise the option. This isn't personal — it's a fiscal constraint." },
                { icon: RefreshCw, color: "text-blue-500", label: "Requirement eliminated or restructured", desc: "Mission shifts, reorganizations, or a decision to consolidate contracts can eliminate the underlying need." },
                { icon: TrendingUp, color: "text-violet-500", label: "Market price dropped significantly", desc: "If market pricing has fallen sharply, the agency may determine a recompete would generate better value. More common in commoditized services." },
                { icon: Shield, color: "text-emerald-500", label: "Change in small business set-aside status", desc: "If a contract transitions from small business set-aside to full and open — or vice versa — options may not be exercised under the original award." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100">
                  <item.icon className={`w-5 h-5 mt-0.5 shrink-0 ${item.color}`} />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{item.label}</p>
                    <p className="text-stone-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-stone-700 leading-relaxed mb-4">
              Understanding why options die helps you manage the risk. Poor performance is the one
              you control completely. Budget and mission changes, you can only anticipate — which is
              why tracking agency budget signals through{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline">
                market intelligence tools
              </Link>{" "}
              matters for multi-year contract planning.
            </p>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="five-year-rule" number="03" title="The 5-Year Rule and the New Flexibility" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Under the traditional rule at FAR 17.204(e), the total of the base period plus all
              option periods for services contracts could not exceed five years — unless approved
              through agency procedures. That meant the standard structure of 1 base + 4 option
              years represented the practical maximum.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The FAR Overhaul underway changed this. The revised FAR Part 17 removes the five-year
              ceiling for most contract types, giving contracting officers discretion to structure
              longer base + option arrangements where the requirement and agency procedures allow.
              Some agencies have already begun using this flexibility for long-term IT and
              infrastructure contracts.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="What this means for you practically">
              For most small business contractors, the standard 1 base + 4 option structure still
              dominates. But you&apos;ll increasingly see solicitations for 7- or 10-year potential
              terms, particularly in IT and facility services. When you see these, price your option
              years carefully — labor and material costs five years out are harder to predict than
              costs twelve months from now. The longer the option chain, the more critical your
              escalation pricing becomes.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              A few other structural variations you&apos;ll encounter:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  label: "Base + unpriced options",
                  desc: "The agency establishes the base year price but leaves option year pricing to be negotiated later. Common in rapidly changing markets. Riskier for you — you have less price certainty.",
                  color: "border-amber-200 bg-amber-50",
                  labelColor: "text-amber-800",
                },
                {
                  label: "Base + priced options",
                  desc: "Your option year prices are locked in at award — usually with a fixed escalation rate. More common. Easier to evaluate and less negotiating risk later.",
                  color: "border-blue-200 bg-blue-50",
                  labelColor: "text-blue-800",
                },
                {
                  label: "Transition-in period",
                  desc: "Some contracts include a short transition period before the base year begins. This covers startup, staffing, and mobilization — often 30-90 days. If yours has one, price it separately.",
                  color: "border-violet-200 bg-violet-50",
                  labelColor: "text-violet-800",
                },
                {
                  label: "Extension under FAR 52.217-8",
                  desc: "Beyond the option chain, the government can extend a contract for up to 6 months using this clause. It&apos;s a bridge mechanism, not a new award — but it keeps you on contract while a recompete runs.",
                  color: "border-emerald-200 bg-emerald-50",
                  labelColor: "text-emerald-800",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl border p-5 ${item.color}`}>
                  <p className={`font-bold text-sm mb-1 ${item.labelColor}`}>{item.label}</p>
                  <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA 1 ── */}
          <div className="animate-on-scroll my-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-xl p-3 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">Check your contract eligibility free</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Before you price your base year and options, make sure you qualify for the
                    set-aside categories that limit competition. Takes 90 seconds.
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

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-this-means-when-bidding" number="04" title="What This Means When You're Bidding" />

            <p className="text-stone-700 leading-relaxed mb-4">
              When you receive a solicitation with base + option year structure, several
              evaluation-related rules kick in that directly affect how you should bid.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The most important: <strong>the government evaluates total price inclusive of all
              option years.</strong> This prevents the classic &quot;buy-in&quot; strategy where a
              contractor bids an artificially low base year price and plans to recover margin in
              option years. FAR requires the solicitation to specify whether options will be
              evaluated exclusive or inclusive of option pricing — and for competitive awards,
              inclusive is the standard.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That means you cannot hide a risky low base year behind expensive options. The
              evaluators will see your total potential value across all years and compare it to
              your competitors&apos; totals. Your pricing strategy must work across the entire contract
              duration.
            </p>

            <Callout icon={FileText} color="sky" title="Read the Section M evaluation criteria carefully">
              Some solicitations evaluate options separately from the base year. Others roll all
              periods into a single evaluated total. A few use a &quot;most probable cost&quot;
              methodology that applies a probability weighting to options. You can&apos;t build your
              price-to-win model until you know how the agency will evaluate the numbers. Check
              Section M (Evaluation Factors) before anything else. Our guide to{" "}
              <Link href="/blog/price-to-win-government-contracts" className="text-sky-700 hover:underline">
                price-to-win analysis
              </Link>{" "}
              covers the mechanics in detail.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              A few other bidding realities with multi-year contracts:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  num: "01",
                  title: "Your past performance needs to match the contract duration",
                  body: "For a 5-year potential contract, agencies often want to see past performance on similar contracts of comparable length. A single 6-month subcontract reference is less compelling than a fully exercised multi-year prime contract. Build your performance record accordingly.",
                },
                {
                  num: "02",
                  title: "Staffing plans need to address retention across option years",
                  body: "For services contracts, evaluators will scrutinize whether your proposed staffing can realistically persist for 4-5 years. High turnover assumptions or unrealistic labor rates that would force you to underpay staff damage technical credibility. Address retention explicitly.",
                },
                {
                  num: "03",
                  title: "Transition plans matter more than you think",
                  body: "If you&apos;re the incumbent, your transition-out plan is evaluated. If you&apos;re the challenger, your transition-in plan is evaluated. Either way, demonstrate you can take the contract live without disrupting the agency&apos;s operations on day one.",
                },
                {
                  num: "04",
                  title: "Small business size is determined at the base year award",
                  body: "If you qualify as a small business when awarded the base year, you remain the set-aside awardee for all exercised options — even if you grow above the size standard during option periods. The certification freezes at award for that contract.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-2xl font-black text-blue-200 shrink-0 leading-none">{item.num}</span>
                  <div>
                    <p className="font-bold text-stone-800 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="pricing-your-option-years" number="05" title="Pricing Your Option Years Without Losing Money" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Option year pricing is where a lot of small contractors quietly destroy their margins.
              You win on base year price, get excited about the contract, and submit option year
              rates that look reasonable on year one but become unsustainable by year three when
              labor costs have climbed 12% and you&apos;re still billing at your 2024 rates.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The government understands this. Most services contracts include an Economic Price
              Adjustment (EPA) clause — typically FAR 52.222-43 (Fair Labor Standards Act and
              Service Contract Act) or a custom clause — that allows your rates to adjust annually
              based on the Department of Labor&apos;s wage determination updates. But EPA clauses
              don&apos;t cover everything: they protect labor floors, not your overhead, G&A, or profit.
            </p>

            <Callout icon={TrendingUp} color="violet" title="Build your own escalation into option year pricing">
              Even with an EPA clause, price your option years with explicit escalation assumptions.
              A reasonable approach: apply a 3-5% annual escalation to direct labor (depending on
              your labor market), hold overhead and G&A flat or apply a modest 1-2% increase, and
              lock your profit rate. Document your assumptions in your price narrative. If the agency
              asks you to justify option year prices during discussions, you&apos;ll have a defensible
              model.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              A comparison of approaches:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Pricing Approach</th>
                    <th className="text-left px-4 py-3 font-semibold">Pro</th>
                    <th className="text-left px-4 py-3 font-semibold">Con</th>
                    <th className="text-left px-4 py-3 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Flat rates across all years", "Simplest to bid; evaluators can do quick math", "You absorb all cost increases; margin erodes over time", "Short option chains (1–2 years); commodity services with stable costs"],
                    ["Fixed annual escalation (e.g. +3%/year)", "Predictable; easy to model and defend", "May overprice if inflation stays low; may underprice in high-inflation periods", "Most professional services contracts"],
                    ["Index-linked escalation (CPI, ECI)", "Tracks actual market conditions", "More complex to model; evaluators may not follow the calculation easily", "Long option chains; labor-intensive services"],
                    ["Labor categories with individual escalation", "Precise; protects margin on different cost drivers", "Time-intensive to build; proposal volume increases", "IDIQ task orders; complex labor mixes"],
                  ].map(([approach, pro, con, bestFor], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-semibold text-stone-800 border-b border-stone-100">{approach}</td>
                      <td className="px-4 py-3 text-emerald-700 border-b border-stone-100">{pro}</td>
                      <td className="px-4 py-3 text-red-600 border-b border-stone-100">{con}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For more on building a defensible cost model,{" "}
              <Link href="/blog/cost-volume-government-proposal" className="text-blue-600 hover:underline">
                our guide to the cost volume
              </Link>{" "}
              covers the full mechanics of government pricing narratives.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="protecting-yourself" number="06" title="Protecting Yourself If an Option Gets Dropped" />

            <p className="text-stone-700 leading-relaxed mb-4">
              No option year is guaranteed. Budget cuts, mission changes, consolidations, and
              performance disputes all create scenarios where the government declines to exercise an
              option you were counting on. Building resilience into your business model is not
              optional — it&apos;s a basic operating requirement for federal contractors.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              {[
                {
                  icon: BarChart3,
                  color: "text-blue-600 bg-blue-50",
                  title: "Diversify your contract portfolio",
                  body: "No single contract should represent more than 30-40% of your revenue. If one option year falls through, the impact should be manageable, not existential. Pursue multiple agencies and contract vehicles in parallel.",
                },
                {
                  icon: Clock,
                  color: "text-amber-600 bg-amber-50",
                  title: "Track the 60-day notice window",
                  body: "If you don’t receive preliminary notice 60 days before an option period starts, the government has created leverage you can use. Consult with a contracts attorney about your options — you may be able to negotiate better terms for a bilateral extension.",
                },
                {
                  icon: Target,
                  color: "text-violet-600 bg-violet-50",
                  title: "Start recompete prep early",
                  body: "When an option year is not exercised, a recompete is often imminent. As the incumbent, your best recompete advantage is institutional knowledge. Begin preparing your next proposal 6 months before the current contract expires — not when the RFP drops.",
                },
                {
                  icon: FileText,
                  color: "text-emerald-600 bg-emerald-50",
                  title: "Document deliverables obsessively",
                  body: "A clean performance record protects you if the agency ever disputes your work as justification for not exercising. Every deliverable submitted, every milestone met, every CO acceptance — keep documented evidence. It’s also what builds your CPARS record.",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl p-5 ${item.color.split(" ")[1]} border border-stone-100`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${item.color.split(" ")[1]}`}>
                    <item.icon className={`w-5 h-5 ${item.color.split(" ")[0]}`} />
                  </div>
                  <p className="font-bold text-stone-800 text-sm mb-1">{item.title}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The{" "}
              <Link href="/blog/cpars-contractor-performance" className="text-blue-600 hover:underline">
                CPARS system
              </Link>{" "}
              is the formal record of your performance across all federal contracts. Poor CPARS
              ratings follow you — they affect not just option year exercises on the current
              contract, but your evaluated past performance on every future bid. Treat each base
              year as an audition for the option years, and treat each option year as an audition
              for the recompete.
            </p>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="tracking-upcoming-recompetes" number="07" title="Tracking Upcoming Recompetes Before They Post" />

            <p className="text-stone-700 leading-relaxed mb-4">
              When a contract&apos;s final option year expires without a successor award in place, the
              agency needs to recompete. For incumbents, this is a known event — you know exactly
              when your current contract ends. For challengers, the recompete is an opportunity —
              but only if you know it&apos;s coming.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Most agencies publish advance planning information through several channels:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                { icon: Building2, color: "text-blue-500", label: "SAM.gov Presolicitation notices", desc: "Agencies are required to publish a notice 15 days before releasing a solicitation for contracts above the simplified acquisition threshold. Setting up search alerts in SAM.gov lets you catch these early." },
                { icon: FileText, color: "text-amber-500", label: "Sources Sought notices", desc: "Before a recompete, agencies often publish Sources Sought or RFI notices to gauge market interest and small business availability. Responding positions you as an aware competitor. See our guide on sources sought." },
                { icon: BarChart3, color: "text-violet-500", label: "USASpending.gov contract end dates", desc: "Every contract on USASpending shows its end date, including the potential end date if all options are exercised. Searching by agency and NAICS code lets you build a forward-looking list of contracts expiring in the next 12-24 months." },
                { icon: TrendingUp, color: "text-emerald-500", label: "Agency acquisition forecasts", desc: "Most federal agencies publish annual acquisition forecasts — documents listing planned procurements for the fiscal year. They’re often buried, but they’re public. CapturePilot’s intelligence feed aggregates these automatically." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100">
                  <item.icon className={`w-5 h-5 mt-0.5 shrink-0 ${item.color}`} />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{item.label}</p>
                    <p className="text-stone-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-stone-700 leading-relaxed mb-4">
              The contractors who consistently win recompetes aren&apos;t necessarily performing better
              than incumbents — they&apos;re often just better prepared. They started the capture process
              12 months before the RFP dropped, built relationships with the program office, and
              had a draft proposal outline before the solicitation was published. CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline">
                market intelligence feature
              </Link>{" "}
              tracks expiring contracts and forecasted recompetes so you can get ahead of the
              opportunity before it becomes a crowded competition.
            </p>

            <Callout icon={CheckCircle2} color="emerald" title="Track the sources sought, not just the RFP">
              By the time a recompete RFP hits SAM.gov, the best competitors have already completed
              their capture work. They responded to the Sources Sought six months ago, had one-on-one
              meetings with the program manager, and shaped requirements. Read more in our{" "}
              <Link href="/blog/sources-sought-notice" className="text-emerald-700 hover:underline">
                guide to Sources Sought notices
              </Link>
              .
            </Callout>
          </div>

          {/* ── CTA 2 ── */}
          <div className="animate-on-scroll my-12">
            <div className="bg-stone-900 rounded-2xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 rounded-xl p-3 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">Manage your full pipeline — base years through recompetes</h3>
                  <p className="text-stone-300 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link href="/features/pipeline" className="text-blue-400 hover:underline">pipeline tool</Link>{" "}
                    tracks every opportunity from first signal through award — including option year
                    expiration alerts and recompete deadlines. Start your 30-day free trial.
                  </p>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="getting-options-exercised" number="08" title="How to Make Sure Your Options Get Exercised" />

            <p className="text-stone-700 leading-relaxed mb-4">
              In theory, options are purely the government&apos;s choice. In practice, your behavior
              during the base year heavily influences whether each subsequent option gets exercised.
              Contracting officers are human — they have preferences for vendors who make their jobs
              easier and create continuity rather than friction.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              The contractors who rarely lose option years share a few behaviors:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  num: "01",
                  icon: CheckCircle2,
                  color: "text-emerald-500",
                  title: "Deliver before the deadline, not on it",
                  body: "Consistently early delivery signals capacity and discipline. It creates buffer time for agency review and reduces the CO’s anxiety about continuity. Missing deadlines — even by a day — gets remembered at option exercise time.",
                },
                {
                  num: "02",
                  icon: RefreshCw,
                  color: "text-blue-500",
                  title: "Communicate proactively about problems",
                  body: "Every contract hits a snag. The contractors who keep options are the ones who surface issues early, with a proposed solution in hand. The ones who lose options are the ones the agency finds out about problems from — after the problem has grown.",
                },
                {
                  num: "03",
                  icon: Building2,
                  color: "text-violet-500",
                  title: "Stay engaged with the program office",
                  body: "Your contracting officer processes payments and paperwork. Your actual customer is the program office — the people using your deliverables. Build those relationships. Understand their evolving needs. If you know what they want for option year 2 before the option year starts, you can propose solutions proactively.",
                },
                {
                  num: "04",
                  icon: TrendingUp,
                  color: "text-amber-500",
                  title: "Make the option decision easy to justify",
                  body: "The CO must document that exercising the option is more advantageous than recompeting. Help them do that. Provide value-added deliverables during the base year, document cost savings you’ve generated, highlight performance metrics. Give the CO a paper trail that makes the option exercise an obvious call.",
                },
                {
                  num: "05",
                  icon: FileText,
                  color: "text-sky-500",
                  title: "Acknowledge the CPARS rating process",
                  body: "When the CO initiates a CPARS evaluation — typically annually — take it seriously. Review your rating, acknowledge any identified issues, and provide your own narrative. A proactive, mature response to performance feedback signals exactly the kind of contractor the agency wants to keep. More detail in our",
                  link: { text: "CPARS guide", href: "/blog/cpars-contractor-performance" },
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="shrink-0 mt-0.5">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-sm mb-1">
                      <span className="text-stone-400 font-normal mr-2">{item.num}</span>
                      {item.title}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {item.body}
                      {item.link && (
                        <>
                          {" "}
                          <Link href={item.link.href} className="text-blue-600 hover:underline">
                            {item.link.text}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Winning the base year is the beginning. The contractors who build real federal
              businesses are the ones who treat the base year as a 12-month job interview for the
              next four years of work. Your{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                contract pipeline
              </Link>{" "}
              should include not just new opportunities, but visibility into your current contracts&apos;
              option year timelines — so you&apos;re never caught off guard by a non-exercise and never
              miss the window to influence the decision.
            </p>

            <Callout icon={Shield} color="blue" title="Where to go from here">
              If you&apos;re building your first multi-year contract pursuit, start with the{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                Quick Checker
              </Link>{" "}
              to confirm your eligibility for set-aside programs — they limit competition and
              significantly improve your odds in the base year. Then read our guide to{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline">
                pipeline management
              </Link>{" "}
              to understand how to sequence multiple multi-year pursuits without burning out your
              business development capacity.
            </Callout>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-stone-900 mb-3">
                Ready to build a federal pipeline that lasts?
              </h3>
              <p className="text-stone-600 mb-6 max-w-xl">
                CapturePilot helps small businesses find opportunities, track option year timelines,
                and prepare proposals — all in one place. See if it fits your business in a live
                strategy call.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-stone-50 transition-colors"
                >
                  Check your eligibility free
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
