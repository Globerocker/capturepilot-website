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
  Shield,
  XCircle,
  Award,
  Crosshair,
  ListChecks,
  Activity,
  Ban,
  FileSearch,
  ThumbsDown,
  ThumbsUp,
  Sliders,
  Flag,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "math-of-bad-bids", label: "The Math That Makes Discipline Mandatory" },
  { id: "what-the-framework-is", label: "What a Bid/No-Bid Framework Actually Is" },
  { id: "ten-criteria", label: "The 10 Criteria on Every Serious Scorecard" },
  { id: "weighting-the-criteria", label: "Weighting the Criteria: What Matters Most" },
  { id: "setting-your-threshold", label: "Setting Your Go/No-Go Line" },
  { id: "red-flags", label: "Red Flags That Should Auto-Trigger a No-Bid" },
  { id: "saying-no", label: "The No-Bid Conversation: Saying No Without Burning Bridges" },
  { id: "building-the-system", label: "Building a Repeatable System Without a Full BD Team" },
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

export default function BidNoBidDecisionPage() {
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
            <span className="text-stone-900 font-medium">Bid/No-Bid Decision Framework</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            The Bid/No-Bid Decision:{" "}
            <span className="gradient-text">
              A Framework for Stopping Bad Pursuits Before They Start
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The average small government contractor spends $5,000 to $20,000 producing a single
            federal proposal — before earning a single dollar. Bidding on the wrong opportunities
            doesn't just waste money. It exhausts your team, crowds out the bids you could actually
            win, and quietly erodes morale. A structured bid/no-bid framework stops that bleed.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 28, 2026</span>
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
            <SectionHeading id="math-of-bad-bids" number="01" title="The Math That Makes Discipline Mandatory" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The federal government awarded <strong>$179 billion in prime contracts to small businesses</strong> in FY2025 — nearly 28% of all federal prime contract spending. That's a massive pie. The problem isn't the opportunity. The problem is that most small contractors try to grab too many slices at once and end up dropping all of them.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Industry data puts proposal development costs between <strong>1% and 4% of the total contract value</strong>. On a $500,000 contract, that's $5,000 to $20,000 in staff time, consultant fees, and writing effort — spent before you know whether you won. On a $2 million contract, the upper end reaches $80,000.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Now factor in win rates. First-time bidders win roughly <strong>3% of their proposals</strong>. Even seasoned contractors with strong past performance and agency relationships typically win 15–25% of what they bid. That means your average federal proposal has a one-in-five shot at best — and your proposal cost is being multiplied by the number of losing bids.
            </p>

            <Callout icon={DollarSign} color="amber" title="What losing bids actually cost you">
              If your win rate is 20% and each proposal costs you $15,000, you spend $75,000 on proposals to win one contract. Every bad bid you add to that set dilutes your win rate further, drives your cost-per-win higher, and pulls your team off the work that actually makes money. A bid/no-bid framework isn't about being conservative — it's about keeping your cost-per-win in a range that makes growth sustainable.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The contractors who grow consistently aren't the ones who bid the most. They're the ones who bid selectively on opportunities where they have a real advantage, and pass on everything else without guilt or second-guessing.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-the-framework-is" number="02" title="What a Bid/No-Bid Framework Actually Is" />

            <p className="text-stone-700 leading-relaxed mb-4">
              A bid/no-bid framework is a structured scoring tool that evaluates each opportunity against a fixed set of weighted criteria before you commit resources to a response. You score the opportunity, compare the total against a threshold, and make a documented decision.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That sounds clinical. Here's why it matters in practice: without a framework, the loudest voice in the room wins the argument. Someone sees a big dollar value and gets excited. Leadership doesn't want to "leave money on the table." The business developer who found the opportunity pushes for it. A framework replaces those political dynamics with a repeatable, defensible process.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              It also creates a paper trail. When a no-bid decision leads to a competitor winning a contract you could have bid, you can look back at the scorecard and see why you passed — instead of spending weeks second-guessing a call that was actually correct.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">Bid/No-Bid: the three-step structure</h3>
              <div className="space-y-4">
                {[
                  { step: "01", label: "Score the opportunity", desc: "Evaluate 8–12 weighted criteria. Rate each 1–5. Multiply by weight. Sum the total." },
                  { step: "02", label: "Compare to your threshold", desc: "Most firms set their threshold at 60–70% of the maximum possible score. Below threshold = no-bid." },
                  { step: "03", label: "Document and decide", desc: "Record the score and the rationale. Even a quick no-bid deserves a one-line explanation to help your team learn what 'good' looks like." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-2xl font-black text-blue-200 shrink-0 w-8">{item.step}</span>
                    <div>
                      <p className="font-bold text-stone-900">{item.label}</p>
                      <p className="text-sm text-stone-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The framework also forces early action. You can't fill out a scorecard without knowing your incumbent situation, your teaming arrangements, and your relationship with the contracting officer. If you don't know those things by RFP release day, you're already behind — and the scorecard exposes that gap before it's too late to close it.
            </p>
          </div>

          {/* ── Mid-article CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Not sure which opportunities are worth your time?</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  CapturePilot's{" "}
                  <Link href="/features/intelligence" className="underline text-white hover:text-blue-200">
                    Intelligence tools
                  </Link>{" "}
                  surface the data you need to score each opportunity: incumbent history, agency spend patterns, and competitive landscape — before you write a single word.
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
            <SectionHeading id="ten-criteria" number="03" title="The 10 Criteria on Every Serious Scorecard" />

            <p className="text-stone-700 leading-relaxed mb-6">
              There's no universal standard for bid/no-bid criteria — every company tweaks the list based on their market, their size, and their strategy. But the following ten factors show up in almost every serious framework, and they cover the questions that matter most.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Target,
                  name: "Strategic fit",
                  desc: "Does winning this contract move you toward your three-year plan? A $300K award in a new agency you want to penetrate might score higher than a $2M contract that's a dead end.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: Users,
                  name: "Customer relationship",
                  desc: "Have you worked with this agency before? Do you know the program office? Did you respond to the sources sought? Relationship depth is one of the strongest predictors of win probability.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: CheckCircle2,
                  name: "Capability match",
                  desc: "Can you perform 60–75% of the requirement without subcontractor support? If you need partners for core work, your risk goes up and your margin goes down.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                },
                {
                  icon: Award,
                  name: "Past performance alignment",
                  desc: "Do you have three or more relevant contracts you can cite in your past performance volume? Evaluators look for contracts that mirror the work — same type, similar size, comparable complexity.",
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                },
                {
                  icon: Crosshair,
                  name: "Competitive position",
                  desc: "Do you know who's likely bidding? Where do you sit relative to the incumbent? If the incumbent is a large company with deep agency ties and you're coming in cold, that's a different risk profile than displacing a weak performer.",
                  color: "text-red-600",
                  bg: "bg-red-50",
                },
                {
                  icon: DollarSign,
                  name: "Profit potential",
                  desc: "After you account for G&A, overhead, fringe, and the cost of the proposal itself, what does the margin look like? Set-aside contracts sometimes come with price pressure that erodes the financial case even if you win.",
                  color: "text-sky-600",
                  bg: "bg-sky-50",
                },
                {
                  icon: BarChart3,
                  name: "Revenue timing and size",
                  desc: "When does work begin? Is the ceiling a realistic guide to the annual run rate? IDIQ vehicles with $50M ceilings sometimes deliver $200K in task orders. Understand what you're actually bidding on.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: Clock,
                  name: "Resource availability",
                  desc: "Do you have the staff to write a strong proposal and still deliver on current contracts? A stressed proposal written by an overcommitted team produces a weak submission. Bandwidth is a real constraint, not an excuse.",
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },
                {
                  icon: Sliders,
                  name: "RFP quality and clarity",
                  desc: "Is the statement of work coherent? Are the evaluation criteria specific? Vague RFPs are often a sign the agency didn't plan well — or that the contract was written around someone else.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                },
                {
                  icon: Shield,
                  name: "Compliance risk",
                  desc: "What certifications, clearances, or regulatory requirements does this contract carry? CMMC Level 2 requirements, Section 508 compliance, or ATO processes can add months and six figures to contract start-up costs.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">{item.name}</p>
                    <p className="text-sm text-stone-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              You don't need all ten. Most effective scorecards use 7–9 criteria. The goal is consistency: use the same criteria for every opportunity so you can compare scores across your pipeline and spot patterns over time.
            </p>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="weighting-the-criteria" number="04" title="Weighting the Criteria: What Matters Most" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Not all criteria are equal. Strategic fit matters more for some businesses than profit margin. For a company trying to break into a new agency, relationship strength might be the single most important factor. For a company at capacity, resource availability becomes the deciding criterion.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The standard approach: assign each criterion a weight from 1 to 3 (or 1 to 5 for more granularity). Multiply the weight by the score (1–5) for each criterion. Sum the weighted scores. Divide by the maximum possible total to get a percentage.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">Criterion</th>
                    <th className="text-center p-3 font-semibold">Weight (1–3)</th>
                    <th className="text-center p-3 font-semibold">Score (1–5)</th>
                    <th className="text-center p-3 rounded-tr-lg font-semibold">Weighted Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Customer relationship", "3", "4", "12"],
                    ["Capability match", "3", "5", "15"],
                    ["Past performance alignment", "3", "3", "9"],
                    ["Competitive position", "2", "3", "6"],
                    ["Strategic fit", "2", "4", "8"],
                    ["Profit potential", "2", "3", "6"],
                    ["Resource availability", "2", "4", "8"],
                    ["RFP quality", "1", "4", "4"],
                    ["Compliance risk", "1", "2", "2"],
                  ].map(([label, weight, score, total], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 text-stone-700">{label}</td>
                      <td className="p-3 text-center font-mono text-stone-600">{weight}</td>
                      <td className="p-3 text-center font-mono text-stone-600">{score}</td>
                      <td className="p-3 text-center font-bold text-stone-900">{total}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-900 text-white">
                    <td className="p-3 font-bold rounded-bl-lg" colSpan={3}>Total score</td>
                    <td className="p-3 text-center font-bold text-xl rounded-br-lg">70 / 95</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              In this example, the weighted score is 70 out of a possible 95 — a 74% score. That's above the typical 60–70% bid threshold, so this opportunity is a strong pursuit candidate.
            </p>

            <Callout icon={Lightbulb} color="sky" title="Start simple, refine over time">
              Don't spend three weeks designing the perfect weighted model. Build a basic version with five or six criteria and a simple 1–3 scale. Run it on your last ten bids and see whether the scores would have predicted your wins. Then adjust the weights based on what you learn. The framework improves with use, not with perfection at the start.
            </Callout>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="setting-your-threshold" number="05" title="Setting Your Go/No-Go Line" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Your threshold is the minimum score required to justify bidding. Most government contractors set this at 60–70% of the maximum possible weighted score. The right number for your business depends on two things: your capacity and your strategic situation.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  label: "Below 2.5 avg",
                  sublabel: "(50% of max)",
                  verdict: "No-bid",
                  desc: "The evidence against bidding outweighs the case for it. Pass without guilt.",
                  color: "border-red-300 bg-red-50",
                  verdictColor: "text-red-700 bg-red-100",
                  icon: ThumbsDown,
                  iconColor: "text-red-600",
                },
                {
                  label: "2.5 – 3.5 avg",
                  sublabel: "(50–70% of max)",
                  verdict: "Careful review",
                  desc: "Bid only if you can close a capability gap, secure a strong teammate, or get more intel on the customer.",
                  color: "border-amber-300 bg-amber-50",
                  verdictColor: "text-amber-700 bg-amber-100",
                  icon: Activity,
                  iconColor: "text-amber-600",
                },
                {
                  label: "Above 3.5 avg",
                  sublabel: "(70%+ of max)",
                  verdict: "Strong bid",
                  desc: "You have a real case. Commit the resources and go after it.",
                  color: "border-emerald-300 bg-emerald-50",
                  verdictColor: "text-emerald-700 bg-emerald-100",
                  icon: ThumbsUp,
                  iconColor: "text-emerald-600",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl border-2 p-5 ${item.color}`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor} mb-3`} />
                  <p className="font-black text-stone-900 text-lg">{item.label}</p>
                  <p className="text-xs text-stone-500 mb-3">{item.sublabel}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.verdictColor}`}>
                    {item.verdict}
                  </span>
                  <p className="text-sm text-stone-700 mt-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              A few practical adjustments to consider. If you're new to federal contracting and still building past performance, raise your threshold — your margin for error on a bad bid is thinner. If you're at full capacity and your current contracts are profitable, raise it even higher. The opportunity cost of a weak proposal isn't just the proposal cost; it's the distraction from work that's already paying.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Conversely, if you're in a slow pipeline period and need to generate activity, you might lower the threshold temporarily — but be deliberate about it and set a review date. "We're bidding more aggressively until Q3, then reassessing" is a strategy. "We bid everything because the pipeline is dry" is a panic mode that compounds the problem.
            </p>

            <Callout icon={TrendingUp} color="violet" title="Threshold drift is real — watch for it">
              Over time, teams develop reasons to bend the threshold. "This one's different." "The customer really knows us." "We can't let a competitor grab this." Track every exception. If you're making exceptions on more than 20% of your bids, your threshold has drifted — recalibrate it or admit you've abandoned the framework.
            </Callout>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="red-flags" number="06" title="Red Flags That Should Auto-Trigger a No-Bid" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Some signals are so reliable that they don't need to survive a scoring process — they should immediately trigger a no-bid decision regardless of how the other criteria score.
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  icon: Clock,
                  flag: "Response window under 10 days for a complex requirement",
                  detail: "A rushed RFP timeline is often a signal that the contract was wired for a specific vendor. You're providing price competition, not a real shot at the award.",
                },
                {
                  icon: FileSearch,
                  flag: "You had no involvement before RFP release",
                  detail: "If you've never spoken with the contracting officer or program office before the RFP dropped, you're already at a severe disadvantage. Winning cold calls on government contracts does happen — but it's rare enough not to count on.",
                },
                {
                  icon: Ban,
                  flag: "The SOW is written around a specific vendor's products or approach",
                  detail: "Look for proprietary tool names, very specific staffing categories that match only one company, or technical requirements so narrow that only one architecture satisfies them. That's not an RFP you'll win.",
                },
                {
                  icon: XCircle,
                  flag: "You can't cover 60% of core requirements without a subcontractor",
                  detail: "If your teaming arrangement makes you dependent on a partner for the majority of technical delivery, you're assuming execution risk you can't control — and the government often won't give you credit for a partner's past performance.",
                },
                {
                  icon: Flag,
                  flag: "The incumbent is highly embedded with significant switching costs",
                  detail: "An incumbent who built the customer's systems, trained their staff, and has five years of awarded task orders is a formidable competitor. The bar for displacing them is not a slightly better proposal — it's a documented failure on their part.",
                },
                {
                  icon: AlertTriangle,
                  flag: "The margin math doesn't work even at your best price",
                  detail: "If the only way to be competitive on price is to squeeze labor rates below your costs or cut overhead you actually incur, the contract won't be profitable if you win it. Winning a money-losing contract isn't a pipeline win — it's a liability.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border-l-4 border-red-400 bg-red-50"
                >
                  <item.icon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900">{item.flag}</p>
                    <p className="text-sm text-red-700 mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              These aren't pessimistic takes. They're pattern-matched from decades of federal contracting data. The contractors who recognize these signals early — and act on them — preserve their energy for pursuits where they actually have a shot.
            </p>
          </div>

          {/* ── Second CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Check your eligibility for set-aside contracts — free
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Before you run a bid/no-bid scorecard, you need to know which set-aside programs you qualify for. CapturePilot's Quick Checker analyzes your SAM.gov profile and tells you in seconds.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="saying-no" number="07" title="The No-Bid Conversation: Saying No Without Burning Bridges" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The hardest part of a bid/no-bid framework isn't the scoring — it's delivering the decision to people who are invested in the opportunity. The business developer who found the lead. The executive who was excited about the agency. The program manager who already told someone you were interested.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A few things that make the no-bid conversation easier:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: "Lead with the scorecard, not the conclusion",
                  body: "\"The score came out at 52% — we need 65% to bid\" is a much easier conversation than \"I don't think we should bid this.\" The framework makes the decision less personal.",
                },
                {
                  title: "Explain what would need to change",
                  body: "\"If we had a relationship with the contracting office and could find a teammate with cleared staff, this would score differently\" gives the BD team something to work toward for the next cycle.",
                },
                {
                  title: "Document the pass",
                  body: "Log the no-bid decision in your pipeline tool with the reason code. This builds institutional memory and helps you spot patterns — like consistently passing on one agency because you never have relationships there.",
                },
                {
                  title: "Don't disappear from the agency",
                  body: "A no-bid on this contract doesn't mean no-bid forever. Send an informational response to the CO, attend the industry day for the next acquisition, and start building the relationship you didn't have this time.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-blue-600 font-black text-lg shrink-0">{i + 1}.</span>
                  <div>
                    <p className="font-bold text-stone-900">{item.title}</p>
                    <p className="text-sm text-stone-600 mt-1 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The best contractors in any market use no-bids strategically. Saying no to a weak opportunity frees you to debrief the contracting officer, update your capability statement, and position your company better for the recompete. That's not losing — it's playing a longer game.
            </p>

            <Callout icon={Lightbulb} color="blue" title="Your capability statement matters here">
              When you pass on a bid, your next move should be strengthening your positioning for future opportunities with that agency. A strong{" "}
              <Link href="/features/capability-statement" className="underline">
                capability statement
              </Link>{" "}
              — one that speaks directly to the agency's mission — keeps you on the radar even when you're not actively bidding. See our{" "}
              <Link href="/blog/capability-statement-examples" className="underline">
                capability statement examples
              </Link>{" "}
              for what good looks like.
            </Callout>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="building-the-system" number="08" title="Building a Repeatable System Without a Full BD Team" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Large defense contractors have dedicated capture managers, BD analysts, and price-to-win specialists who run formal gate reviews. You probably don't. That's fine. The principles scale down.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  step: "Build a single scorecard template",
                  detail: "Create a simple spreadsheet with your criteria, weights, and scoring scale. Lock the weights — don't adjust them per opportunity. The consistency is the point.",
                  icon: ListChecks,
                },
                {
                  step: "Set a recurring bid/no-bid review cadence",
                  detail: "Weekly for active pipelines, monthly if you're slower. Every opportunity that hits your radar gets scored within 48 hours of identification. If you can't score it in 48 hours, you probably don't know enough about it to bid it.",
                  icon: Clock,
                },
                {
                  step: "Track wins and losses by score tier",
                  detail: "After six months, pull your data. What percentage of high-scoring opportunities did you win? What percentage of exceptions (low scores you bid anyway) did you win? The data will tell you whether your thresholds are calibrated correctly.",
                  icon: BarChart3,
                },
                {
                  step: "Connect your scorecard to your pipeline tool",
                  detail: "Your bid/no-bid score should live next to the opportunity in your pipeline, not in a separate spreadsheet. That way you can sort by score, filter by score range, and see at a glance where your BD energy is focused. CapturePilot's{lk1} is designed to hold this data alongside opportunity details so nothing slips through.",
                  icon: Activity,
                  link: { text: " pipeline management tool", href: "/features/pipeline" },
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl border border-stone-200 hover-lift">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.step}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {i === 3 ? (
                        <>
                          Your bid/no-bid score should live next to the opportunity in your pipeline, not in a separate spreadsheet. That way you can sort by score, filter by score range, and see at a glance where your BD energy is focused. CapturePilot&apos;s{" "}
                          <Link href="/features/pipeline" className="text-blue-600 underline">
                            pipeline management tool
                          </Link>{" "}
                          is designed to hold this data alongside opportunity details so nothing slips through.
                        </>
                      ) : (
                        item.detail
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The single best thing you can do to support bid/no-bid discipline is invest in better intelligence before opportunities hit the street. When you've been monitoring an agency's spending patterns, tracking the incumbent's contract expiration, and building a relationship with the program office over six months — the scorecard almost fills itself. You already know the answers.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That's the goal of{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline">
                capture intelligence
              </Link>
              : arrive at the RFP already informed. The{" "}
              <Link href="/blog/capture-management-process" className="text-blue-600 hover:underline">
                capture management process
              </Link>{" "}
              is how you build that knowledge systematically, and the{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-600 hover:underline">
                sources sought response
              </Link>{" "}
              is often your first real intelligence-gathering opportunity on a new pursuit.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="Discipline compounds">
              The benefit of a bid/no-bid framework isn't just one better bid decision. It's that every decision you make with discipline teaches your team what a winnable pursuit looks like. Over 12 months, that shared understanding changes how your BD team qualifies leads, how program managers estimate work, and how leadership evaluates new markets. The framework is the training program.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For more on how to manage the full lifecycle from opportunity identification to award, read our guides on{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-600 hover:underline">
                government contract pipeline management
              </Link>{" "}
              and{" "}
              <Link href="/blog/pwin-probability-of-win" className="text-blue-600 hover:underline">
                calculating your probability of win
              </Link>
              . And when you're ready to evaluate a specific opportunity against your eligibility criteria,{" "}
              <Link href="/features/matching" className="text-blue-600 hover:underline">
                CapturePilot's matching engine
              </Link>{" "}
              surfaces the right contracts and tells you which set-asides apply to you automatically.
            </p>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="max-w-xl">
              <p className="text-stone-400 text-sm font-medium mb-2">Ready to stop chasing bad bids?</p>
              <h3 className="text-2xl font-black mb-3">
                CapturePilot gives you the intelligence to score every opportunity — not just gut instinct.
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                See incumbent history, agency spend patterns, competitive landscape, and set-aside eligibility before you write a word. Make bid/no-bid decisions in minutes, not days.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 font-bold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors text-sm"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
