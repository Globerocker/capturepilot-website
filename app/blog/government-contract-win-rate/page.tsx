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
  TrendingDown,
  XCircle,
  BarChart3,
  Users,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Award,
  Filter,
  Crosshair,
  RefreshCw,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-win-rate-means", label: "What Win Rate Actually Means (and How to Measure It)" },
  { id: "realistic-numbers", label: "The Numbers: What's a Realistic Win Rate?" },
  { id: "incumbent-advantage", label: "The Incumbent Advantage: Why They Win 60–90% of the Time" },
  { id: "bid-to-win-math", label: "Bid-to-Win Math: How Many You Need in the Pipeline" },
  { id: "go-no-go", label: "The Go/No-Go Decision: Bid Less, Win More" },
  { id: "pwin-scoring", label: "Probability of Win (PWin): Score It Before You Bid" },
  { id: "pre-rfp-positioning", label: "Pre-RFP Positioning: The Highest-Leverage Activity" },
  { id: "what-winners-do", label: "What High-Win-Rate Contractors Do Differently" },
  { id: "win-loss-analysis", label: "Win/Loss Analysis: Turn Every Loss Into Intelligence" },
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

export default function GovernmentContractWinRatePage() {
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
            <span className="text-stone-900 font-medium">Government Contract Win Rates</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Win Rates:{" "}
            <span className="gradient-text">
              What&rsquo;s Realistic and How to Improve Yours
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most small businesses chase too many opportunities and win too few. The fix isn&rsquo;t
            working harder — it&rsquo;s bidding smarter. Here&rsquo;s what the data actually says
            about win rates, and the specific changes that move the needle.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 20, 2026</span>
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
            <SectionHeading id="what-win-rate-means" number="01" title="What Win Rate Actually Means (and How to Measure It)" />

            <p className="text-stone-700 leading-relaxed">
              Win rate sounds simple: contracts won divided by proposals submitted. But that formula
              hides more than it reveals. A company that submits ten proposals and wins three has a
              30% win rate. Another company submits forty proposals and wins twelve — also 30%. The
              first company is almost certainly healthier. They spent a third of the effort, invested
              less bid-and-proposal budget, and put fewer resources under pressure.
            </p>

            <p className="text-stone-700 leading-relaxed">
              There are actually three different win rates you should track:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">Metric</th>
                    <th className="text-left p-3 font-semibold">Formula</th>
                    <th className="text-left p-3 rounded-tr-lg font-semibold">What It Tells You</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      metric: "Proposal Win Rate",
                      formula: "Contracts won ÷ proposals submitted",
                      insight: "How effective your proposal team is after submission",
                    },
                    {
                      metric: "Dollar Win Rate",
                      formula: "Dollars awarded ÷ dollars proposed",
                      insight: "Whether you're winning the right size deals",
                    },
                    {
                      metric: "Pursuit Win Rate",
                      formula: "Contracts won ÷ opportunities actively pursued",
                      insight: "Capture quality, including go/no-go discipline",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.metric}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="p-3 border-b border-stone-100 font-semibold text-stone-900">
                        {row.metric}
                      </td>
                      <td className="p-3 border-b border-stone-100 text-stone-600 font-mono text-xs">
                        {row.formula}
                      </td>
                      <td className="p-3 border-b border-stone-100 text-stone-600">
                        {row.insight}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The pursuit win rate is the most honest number. It accounts for every opportunity you
              evaluated — including the ones you wisely declined to bid. Companies that track only
              proposal win rate accidentally reward reckless bidding.
            </p>

            <p className="text-stone-700 leading-relaxed">
              One more distinction: win rate on <em>new business</em> versus win rate on{" "}
              <em>recompetes</em> (contracts you&rsquo;re already performing). These are
              fundamentally different markets with very different economics. Conflating them
              gives you a misleading average of two unlike things.
            </p>

            <Callout icon={BarChart3} color="sky" title="Track these separately">
              <p>
                Maintain separate win rate tracking for new business pursuits and recompetes. A
                healthy portfolio typically has a higher recompete win rate (you know the customer,
                they know your work) and a lower — but still positive — new business win rate.
                Losing recompetes is a signal. Losing every new business bid is a strategy problem.
              </p>
            </Callout>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="realistic-numbers" number="02" title="The Numbers: What's a Realistic Win Rate?" />

            <p className="text-stone-700 leading-relaxed">
              This is where most small businesses need a reality check — not to discourage them,
              but to set accurate expectations so they plan correctly.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Approximately <strong>14% of companies registered on SAM.gov win a federal contract
              in any given year</strong>. That means 86% of registered vendors received no award.
              The federal market awarded{" "}
              <strong>$773.68 billion in total contracts in FY2024</strong>, with small businesses
              capturing $183 billion (28.8%) — but that money flowed to roughly 78,677 companies.
              The pool of SAM-registered small businesses is far larger than that.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: TrendingDown,
                  stat: "~5–15%",
                  label: "New business win rate",
                  desc: "Typical range for new contractor pursuing agencies where they have no prior relationship or incumbent advantage.",
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                },
                {
                  icon: TrendingUp,
                  stat: "60–90%",
                  label: "Incumbent recompete rate",
                  desc: "Contractors already performing the work have a massive structural advantage on follow-on contracts.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                },
                {
                  icon: BarChart3,
                  stat: "25–35%",
                  label: "Mature small business target",
                  desc: "A realistic combined win rate goal for a disciplined GovCon shop tracking go/no-go rigorously.",
                  color: "text-blue-600",
                  bg: "bg-blue-50 border-blue-200",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className={`border rounded-2xl p-5 hover-lift ${item.bg}`}
                >
                  <item.icon className={`w-6 h-6 mb-3 ${item.color}`} />
                  <div className={`font-black text-2xl mb-1 ${item.color}`}>{item.stat}</div>
                  <div className="font-semibold text-stone-800 text-sm mb-1">{item.label}</div>
                  <div className="text-stone-600 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              For new contractors — companies that have been in the federal market fewer than three
              years — a 5% win rate on new business is not a failure. It&rsquo;s reality. Every
              experienced GovCon professional started there. What distinguishes companies that
              grow their win rate from those that don&rsquo;t is whether they treat each loss as
              data.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The number of small businesses actively winning federal contracts has actually been
              shrinking. The active small business federal contractor pool dropped nearly 50% from
              approximately 149,000 firms in 2009 to around 78,000 in recent years. That decline
              represents both consolidation — fewer, larger small businesses winning more — and
              exit: companies that tried, couldn&rsquo;t make it work, and left the market.
            </p>

            <Callout icon={Lightbulb} color="amber" title="What this means for you">
              <p>
                The shrinking contractor pool is actually an opportunity. Agencies need vendors.
                Set-aside goals require small business participation. A disciplined, well-positioned
                small business today faces less competition than a decade ago — but only if you&rsquo;re
                positioned correctly. Check your certifications and eligibility with{" "}
                <a href={CHECK_URL} className="text-amber-700 underline font-medium">
                  CapturePilot&rsquo;s free eligibility checker
                </a>{" "}
                before spending another dollar on proposals.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="incumbent-advantage" number="03" title="The Incumbent Advantage: Why They Win 60–90% of the Time" />

            <p className="text-stone-700 leading-relaxed">
              Incumbency is the single biggest variable in federal contracting outcomes. When a
              contractor is already performing a contract and the agency issues a recompete,
              that contractor wins somewhere between 60% and 90% of the time. The range depends
              on the agency, the complexity of the work, and how well the incumbent performed.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Why is the advantage so large? Several compounding reasons:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Users,
                  title: "Relationship capital",
                  body: "The incumbent has working relationships with the contracting officer, program manager, and end users. Those relationships inform how requirements get written in the recompete RFP — usually in ways that favor current operations.",
                },
                {
                  icon: Award,
                  title: "Past performance advantage",
                  body: "On the recompete, the incumbent's past performance IS the contract. They can reference three to five years of verified, on-contract performance to the very agency evaluating the bid. Challengers are citing work done elsewhere.",
                },
                {
                  icon: Shield,
                  title: "Transition risk works against challengers",
                  body: "Contracting officers are evaluated on program continuity. Switching vendors introduces risk — staff transitions, knowledge transfer gaps, potential mission disruption. A good incumbent removes that risk. You have to overcome it.",
                },
                {
                  icon: DollarSign,
                  title: "Pricing intelligence",
                  body: "The incumbent knows their actual cost structure on the contract. They can price the recompete precisely. Challengers are estimating based on public information and guesswork.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              This doesn&rsquo;t mean you can&rsquo;t beat an incumbent — incumbents do lose
              contracts, and the reasons are almost always the same: performance problems, pricing
              that got too comfortable, or a challenger who positioned 12 to 18 months before the
              recompete. See our detailed guide on{" "}
              <Link href="/blog/incumbent-advantage-government-contracts" className="text-blue-700 hover:underline font-medium">
                how to beat the incumbent on government contracts
              </Link>{" "}
              for a full breakdown of where incumbents are vulnerable and how to exploit it.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The strategic implication is clear: when you win a contract, treat it like the most
              important win you&rsquo;ll ever make. Because the recompete — where your incumbent
              advantage kicks in — is worth far more than a single contract period of performance.
              Protect that relationship from day one.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Crosshair className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Know your win probability before you bid</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  CapturePilot scores each opportunity against your certifications, past performance,
                  and agency relationships — so you spend proposal budget on the contracts you can
                  actually win.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="bid-to-win-math" number="04" title="Bid-to-Win Math: How Many You Need in the Pipeline" />

            <p className="text-stone-700 leading-relaxed">
              Win rate only becomes actionable when you connect it to pipeline volume. Here&rsquo;s
              the math most small businesses don&rsquo;t do until they&rsquo;re already in trouble.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Suppose your average contract value is $500,000 and you need $2 million in new contract
              awards per year to grow. At a 20% win rate, you need to win 4 contracts. To win 4 at
              20%, you need to submit at least 20 responsive proposals. That&rsquo;s roughly 2 per
              month — and each costs real money and real time to produce.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">Win Rate</th>
                    <th className="text-left p-3 font-semibold">Proposals Needed to Win 4</th>
                    <th className="text-left p-3 font-semibold">At $500K avg, Revenue Goal</th>
                    <th className="text-left p-3 rounded-tr-lg font-semibold">Est. B&amp;P Cost*</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rate: "10%", proposals: "40", revenue: "$2M", cost: "$40,000–$160,000" },
                    { rate: "20%", proposals: "20", revenue: "$2M", cost: "$20,000–$80,000" },
                    { rate: "30%", proposals: "14", revenue: "$2M", cost: "$14,000–$56,000" },
                    { rate: "40%", proposals: "10", revenue: "$2M", cost: "$10,000–$40,000" },
                  ].map((row, i) => (
                    <tr
                      key={row.rate}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="p-3 border-b border-stone-100 font-black text-stone-900">
                        {row.rate}
                      </td>
                      <td className="p-3 border-b border-stone-100 text-stone-700 font-semibold">
                        {row.proposals}
                      </td>
                      <td className="p-3 border-b border-stone-100 text-stone-600">
                        {row.revenue}
                      </td>
                      <td className="p-3 border-b border-stone-100 text-stone-600">
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-stone-400 mt-2">
                *B&amp;P cost estimated at 0.2–0.8% of contract value per proposal, per industry norms.
              </p>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The compounding effect is stark. Going from 10% to 30% win rate doesn&rsquo;t just
              feel better — it cuts your proposal workload by 65% and slashes your bid-and-proposal
              spend by the same amount. That freed capacity gets reinvested into better proposals
              on the fewer bids you do pursue, which further improves win rate. High win rate is
              a self-reinforcing discipline.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Most small businesses underestimate what proposals actually cost. Direct labor for
              proposal writing, management time, graphics, technical review, pricing analysis — a
              competitive response to a medium-complexity RFP can run $5,000 to $50,000 depending
              on contract size and scope. At the low end of B&P cost estimates (0.2% of contract
              value), a $500K contract proposal costs roughly $1,000. At the high end (0.8%), it&rsquo;s
              $4,000. Apply those numbers across forty annual proposals and the math gets uncomfortable fast.
            </p>

            <Callout icon={DollarSign} color="violet" title="The hidden cost most contractors miss">
              <p>
                Proposal cost isn&rsquo;t just direct spending — it&rsquo;s opportunity cost.
                Every hour your subject matter experts spend writing a proposal they won&rsquo;t
                win is an hour not spent delivering for current customers, positioning for the
                next recompete, or building the capability statement that opens new agencies.
                Bid-and-proposal budget is a limited resource. Treat it as such.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="go-no-go" number="05" title="The Go/No-Go Decision: Bid Less, Win More" />

            <p className="text-stone-700 leading-relaxed">
              The counterintuitive truth about improving your win rate: submit fewer proposals.
              Not randomly fewer — strategically fewer. The companies with the highest win rates
              are also among the most selective about what they bid. They&rsquo;ve built a
              disciplined go/no-go process and they actually enforce it.
            </p>

            <p className="text-stone-700 leading-relaxed">
              A go/no-go decision matrix scores each opportunity against the criteria that actually
              predict whether you can win. Here&rsquo;s the framework used by mature GovCon shops:
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  step: "01",
                  title: "Customer relationship",
                  body: "Do you have an existing relationship with the contracting officer, program manager, or agency? Have you responded to any sources sought notices or RFIs on this requirement? Score 0–5. Any relationship above 0 is a significant advantage.",
                  weight: "High",
                  weightColor: "text-red-700 bg-red-50 border-red-200",
                },
                {
                  step: "02",
                  title: "Technical capability match",
                  body: "Does your company perform this work today? Not adjacent work — this work. Be honest. 'We could learn it' is not a yes. Score 0–5 based on how directly your current capabilities match the stated requirements.",
                  weight: "High",
                  weightColor: "text-red-700 bg-red-50 border-red-200",
                },
                {
                  step: "03",
                  title: "Relevant past performance",
                  body: "Can you cite 2–4 comparable contracts with similar scope, dollar value, and agency type? Past performance that isn't comparable won't satisfy evaluators. Score 0–5.",
                  weight: "High",
                  weightColor: "text-red-700 bg-red-50 border-red-200",
                },
                {
                  step: "04",
                  title: "Competitive landscape",
                  body: "Who are the likely competitors? Do you know the incumbent? Is this set aside for your certifications? A set-aside for an 8(a) company when you're not 8(a) is a no-bid, full stop.",
                  weight: "Medium",
                  weightColor: "text-amber-700 bg-amber-50 border-amber-200",
                },
                {
                  step: "05",
                  title: "Margin and strategic value",
                  body: "Does this contract type and size generate margin at your cost structure? Is this agency or vehicle strategically important for future opportunities? Low-margin work for an agency you'll never grow within is a trap.",
                  weight: "Medium",
                  weightColor: "text-amber-700 bg-amber-50 border-amber-200",
                },
                {
                  step: "06",
                  title: "Bid resources available",
                  body: "Do you have capacity to write a competitive proposal right now? If your proposal team is already at capacity on a higher-priority bid, submitting a mediocre response on this one helps no one.",
                  weight: "Low",
                  weightColor: "text-stone-600 bg-stone-50 border-stone-200",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <span className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${item.weightColor}`}>
                        {item.weight} weight
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Set a minimum score threshold — say 18 out of 30 — and stick to it. Every opportunity
              that doesn&rsquo;t meet that threshold gets a no-bid decision documented in your{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                pipeline
              </Link>
              . Documenting no-bids is just as important as documenting bids. It shows you&rsquo;re
              applying the process consistently, and it gives you data to review when the threshold
              needs adjusting.
            </p>

            <Callout icon={Filter} color="emerald" title="The $0 bid cost">
              <p>
                A no-bid decision costs nothing. It preserves B&P budget for opportunities where
                your score is high, keeps your proposal team sharp instead of stretched thin, and
                prevents the demoralization that comes from losing contracts you never should have
                bid. High-win-rate contractors no-bid aggressively. Treat a disciplined no-bid as
                a strategic win, not a retreat.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pwin-scoring" number="06" title="Probability of Win (PWin): Score It Before You Bid" />

            <p className="text-stone-700 leading-relaxed">
              The go/no-go framework tells you whether to bid at all. PWin — probability of win —
              tells you how much to invest in the bid and where to focus your effort if you do.
              These are related but distinct tools.
            </p>

            <p className="text-stone-700 leading-relaxed">
              PWin is expressed as a percentage: &ldquo;We estimate a 40% probability of winning
              this contract.&rdquo; The number itself matters less than the discipline of generating
              it honestly. Companies that formally score PWin before committing proposal resources
              make better allocation decisions and avoid the trap of pouring equal effort into a
              5% shot and a 60% shot.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  range: "Under 20%",
                  label: "Speculative",
                  desc: "No relationship, no relevant past performance, or a strong incumbent you can't displace. Bid only if the strategic learning value justifies the cost.",
                  color: "border-red-300 bg-red-50",
                  badge: "text-red-700",
                },
                {
                  range: "20–40%",
                  label: "Competitive",
                  desc: "You're a credible bidder but not the frontrunner. Requires full proposal investment and a compelling differentiator to win.",
                  color: "border-amber-300 bg-amber-50",
                  badge: "text-amber-700",
                },
                {
                  range: "40–65%",
                  label: "Favored",
                  desc: "You have relationship capital, relevant past performance, and a clear win theme. Invest fully. This is where proposals win or lose on quality.",
                  color: "border-blue-300 bg-blue-50",
                  badge: "text-blue-700",
                },
                {
                  range: "Over 65%",
                  label: "Strong position",
                  desc: "Likely incumbent or major agency relationship. Don't get complacent — incumbents still lose. Invest in quality and avoid unforced errors.",
                  color: "border-emerald-300 bg-emerald-50",
                  badge: "text-emerald-700",
                },
              ].map((item) => (
                <div key={item.range} className={`border rounded-2xl p-5 hover-lift ${item.color}`}>
                  <div className={`font-black text-lg mb-0.5 ${item.badge}`}>{item.range}</div>
                  <div className="font-semibold text-stone-800 text-sm mb-2">{item.label}</div>
                  <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The four inputs that drive a rigorous PWin score: <strong>customer knowledge</strong>{" "}
              (how well you understand the agency&rsquo;s actual problem), <strong>solution
              strength</strong> (how well your technical approach solves it),{" "}
              <strong>competitive position</strong> (where you stand relative to expected competitors),
              and <strong>price competitiveness</strong> (whether your cost structure lets you win
              at a profitable price). Weakness in any one of these caps your ceiling.
            </p>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot&rsquo;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                market intelligence features
              </Link>{" "}
              surface the data inputs you need to score PWin honestly — agency spend patterns,
              award history, competitor awards, and set-aside designation trends — so your score
              reflects real market conditions rather than optimistic guessing. For a deep dive on
              the mechanics, see our guide to{" "}
              <Link href="/blog/pwin-probability-of-win" className="text-blue-700 hover:underline font-medium">
                probability of win in government contracting
              </Link>.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pre-rfp-positioning" number="07" title="Pre-RFP Positioning: The Highest-Leverage Activity" />

            <p className="text-stone-700 leading-relaxed">
              Here&rsquo;s what separates the contractors with 30%+ win rates from those stuck at 10%:
              the winners aren&rsquo;t just better at writing proposals. They&rsquo;re winning before
              the RFP drops.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Pre-RFP positioning means being known to the contracting officer and program manager
              before you ever submit a proposal. It means your past performance is already in the
              agency&rsquo;s institutional memory. It means you&rsquo;ve responded to Sources Sought
              notices and potentially shaped the requirements language. By the time the RFP hits
              SAM.gov, you&rsquo;re not a new vendor — you&rsquo;re a known quantity with a credible track record.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-stone-900 text-sm">What reactive bidders do</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Monitor SAM.gov for new RFPs",
                    "React to solicitations already published",
                    "Submit proposals cold, with no agency relationship",
                    "Cite past performance from unrelated agencies",
                    "Wonder why the incumbent always wins",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-stone-600">
                      <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-stone-900 text-sm">What proactive bidders do</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Track Sources Sought notices and RFIs months before RFP",
                    "Respond to market research to get on agency radar",
                    "Attend industry days and pre-solicitation briefings",
                    "Build relationships with COs and PMs before solicitation",
                    "Become the contractor who shaped the requirement",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              This is what capture management actually is. Not just tracking opportunities in a
              spreadsheet — actively working the account before the RFP exists. Our guide to the{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 hover:underline font-medium">
                capture management process
              </Link>{" "}
              walks through exactly how high-performing contractors structure pre-award activity.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The practical implication: your go/no-go score should include a &ldquo;pre-RFP
              engagement&rdquo; factor. An opportunity where you have 12 months of pre-RFP
              positioning is a fundamentally different animal than an opportunity that just posted
              to SAM.gov today. Weight your investment accordingly — and use{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline font-medium">
                opportunity matching
              </Link>{" "}
              to surface relevant Sources Sought notices early enough to act.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-50 border border-stone-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">Start positioning 6 months early</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  CapturePilot tracks Sources Sought notices, RFIs, and pre-solicitation activity
                  across all federal agencies — alerting you to opportunities while there&rsquo;s
                  still time to engage before the RFP locks in.
                </p>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-winners-do" number="08" title="What High-Win-Rate Contractors Do Differently" />

            <p className="text-stone-700 leading-relaxed">
              The pattern is consistent across company sizes, industries, and agency focus areas.
              Companies that maintain above-average win rates share several structural habits —
              and they implement them systematically, not case by case.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Target,
                  title: "They have an explicit agency focus",
                  body: "High-win-rate small businesses typically specialize in two to four agencies rather than spraying efforts across the entire federal market. Deep agency knowledge compounds over time: understanding budget cycles, key personnel, and recurring needs gives you lead time on every opportunity in that space.",
                },
                {
                  icon: Award,
                  title: "They curate past performance as a strategic asset",
                  body: "Every completed contract gets documented with measurable outcomes: percent on-time, dollars saved, response metrics, customer satisfaction scores. That documentation feeds directly into future proposals. CapturePilot's proposals module helps you build and maintain a library of performance evidence you can pull from instantly.",
                },
                {
                  icon: Users,
                  title: "They team to fill gaps rather than bid alone on everything",
                  body: "When past performance or capability doesn't fully match a requirement, strong contractors team with firms that fill the gap — rather than hoping evaluators won't notice the stretch. A well-constructed team can convert a speculative bid into a strong one. See our guide on government contract teaming agreements for how to structure these.",
                },
                {
                  icon: RefreshCw,
                  title: "They review every debriefing",
                  body: "After every loss, they request a debriefing from the contracting officer. Not to argue — to learn. Debriefs are one of the few times you get direct, evaluated feedback on your proposal. Companies that skip debriefs are leaving concrete win-rate improvement data on the table.",
                },
                {
                  icon: Clock,
                  title: "They start proposals earlier than their competitors",
                  body: "Rushed proposals lose. Not because the ideas are bad — because the writing is thin, the past performance is generic, and the pricing is based on incomplete cost analysis. High-win-rate firms treat the RFP as a checkpoint, not a starting gun. Most of the work is done before the solicitation drops.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The common thread: these behaviors are process-driven, not talent-driven. You
              don&rsquo;t need a superstar proposal writer to improve your win rate. You need a
              system that forces honest go/no-go decisions, captures pre-RFP intelligence
              early, and feeds proposal teams the materials they need to write quickly
              and compellingly. Read our{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline font-medium">
                guide to government contract pipeline management
              </Link>{" "}
              to see how that system gets built.
            </p>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="win-loss-analysis" number="09" title="Win/Loss Analysis: Turn Every Loss Into Intelligence" />

            <p className="text-stone-700 leading-relaxed">
              Most small businesses do a vague post-mortem after a loss, shrug, and move on. That&rsquo;s
              a missed opportunity. Every loss contains specific, actionable information about where
              your proposal fell short — and the federal government is legally required to provide
              it to you if you ask.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Under <strong>FAR 15.506</strong>, unsuccessful offerors on negotiated acquisitions
              may request a debriefing within three business days of receiving notice that their
              proposal wasn&rsquo;t selected. The contracting officer must provide one. That debriefing
              can include your technical score and the rating rationale, your price compared to
              the awardee&rsquo;s, and weaknesses in your proposal.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "What you can request in a debrief",
                  icon: CheckCircle2,
                  iconColor: "text-emerald-600",
                  items: [
                    "Your technical evaluation scores and ratings",
                    "Significant weaknesses and deficiencies in your proposal",
                    "Overall ranking of all offerors (if applicable)",
                    "Award price vs. your price (if not sensitive)",
                    "Rationale for the selection decision",
                  ],
                },
                {
                  title: "What to do with the information",
                  icon: TrendingUp,
                  iconColor: "text-blue-600",
                  items: [
                    "Map each weakness to a specific proposal section",
                    "Identify whether the gap is capability, past performance, or writing",
                    "Compare your pricing approach against award data",
                    "Update your PWin model for similar future opportunities",
                    "Feed lessons into your next proposal for this agency",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <col.icon className={`w-5 h-5 ${col.iconColor}`} />
                    <h3 className="font-semibold text-stone-900 text-sm">{col.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-stone-600">
                        <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Win data is just as valuable. When you win, conduct an internal review: which
              sections scored highest? What differentiated you from the competition? What win
              themes resonated? Companies that codify their wins — turning successful past
              performance narratives, technical solutions, and management approaches into
              reusable templates — cut proposal development time significantly while improving
              quality. CapturePilot&rsquo;s{" "}
              <Link href="/features/proposals" className="text-blue-700 hover:underline font-medium">
                proposals module
              </Link>{" "}
              is built for exactly this: a living library of your best work, ready to deploy
              on the next relevant bid.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Track your win/loss data in a structured format: opportunity name, agency, contract
              type, dollar value, win/loss outcome, reason, and action item. Review it quarterly.
              Patterns emerge quickly — and once you see them, you know exactly where to invest
              your improvement effort.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The most common root cause of low win rates">
              <p>
                In nearly every audit of a struggling GovCon pipeline, the same root causes
                appear: <strong>(1)</strong> bidding on contracts without customer relationships,{" "}
                <strong>(2)</strong> generic past performance that doesn&rsquo;t demonstrate
                relevant capability, and <strong>(3)</strong> a proposal written at the last minute
                with no pre-RFP intelligence baked in. Fix those three things — through systematic
                go/no-go discipline, a curated performance library, and early-stage opportunity
                monitoring — and your win rate will follow.
              </p>
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 rounded-full px-3 py-1 text-xs font-medium mb-4">
                <Shield className="w-3.5 h-3.5" /> Built for small businesses and veteran-owned contractors
              </div>
              <h3 className="text-2xl font-black mb-3">
                Your win rate starts with what you bid on
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                CapturePilot matches you to opportunities you can actually win — based on your
                certifications, past performance, and agency relationships — then helps you
                build the proposals that close them. Start free, no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="animate-on-scroll border-t border-stone-200 pt-12">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process",
                  desc: "How winning contractors find and position for deals before the RFP drops.",
                },
                {
                  href: "/blog/pwin-probability-of-win",
                  title: "Probability of Win (PWin)",
                  desc: "How to score your chances before you commit proposal resources.",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline",
                  desc: "From discovery to award — building the system that drives consistent revenue.",
                },
                {
                  href: "/blog/incumbent-advantage-government-contracts",
                  title: "How to Beat the Incumbent",
                  desc: "Where incumbents are vulnerable and how to exploit it with disciplined capture.",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices",
                  desc: "How to get in early and shape the RFP before your competition sees it.",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance in Government Contracts",
                  desc: "Why it matters more than almost anything else — and how to build it systematically.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group bg-stone-50 border border-stone-200 rounded-2xl p-4 hover-lift block"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 transition-colors shrink-0 mt-0.5" />
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
