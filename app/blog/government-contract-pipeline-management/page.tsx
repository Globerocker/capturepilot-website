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
  Filter,
  RefreshCw,
  GitBranch,
  Layers,
  XCircle,
  Award,
  Eye,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-pipeline-matters", label: "Why Your Pipeline Is Your Business Plan" },
  { id: "five-stages", label: "The Five Stages: Discover to Award" },
  { id: "pipeline-math", label: "Pipeline Math: How Many Opportunities You Need" },
  { id: "bid-no-bid", label: "The Bid/No-Bid Decision: Most Contractors Get This Wrong" },
  { id: "pwin-scoring", label: "Scoring Probability of Win at Each Stage" },
  { id: "pre-rfp-work", label: "Pre-RFP Work: The Stage Most Teams Skip" },
  { id: "tracking-your-pipeline", label: "Tracking Your Pipeline Without a Spreadsheet Hell" },
  { id: "pipeline-reviews", label: "Running a Weekly Pipeline Review That Actually Works" },
  { id: "common-mistakes", label: "The Mistakes That Stall Growth (and How to Fix Them)" },
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

export default function GovernmentContractPipelineManagementPage() {
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
            <span className="text-stone-900 font-medium">Government Contract Pipeline</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <GitBranch className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Managing Your Government Contract Pipeline:{" "}
            <span className="gradient-text">From Discovery to Award</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most small business contractors treat their pipeline like a to-do list. A collection of
            opportunities they're vaguely aware of, loosely tracked in a spreadsheet that's three
            versions out of date. That's not a pipeline — it's noise. A real pipeline is a
            forecasting tool, a resource allocator, and a competitive early-warning system.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 23, 2026</span>
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
            <SectionHeading id="why-pipeline-matters" number="01" title="Why Your Pipeline Is Your Business Plan" />

            <p className="text-stone-700 leading-relaxed">
              Federal contracts don't close in a quarter. The average cycle from initial opportunity
              identification to contract award runs <strong>12 to 24 months</strong>. Once you
              account for proposal development, evaluation, protests, and potential delays, some
              large procurements stretch even longer. If you're only working the opportunities in
              front of you right now, you're setting yourself up for a revenue cliff six to twelve
              months out.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Your pipeline solves that problem — but only if you manage it actively. A healthy
              government contracting pipeline answers three questions at a glance: What are you
              pursuing? What's your realistic chance of winning each opportunity? And what's your
              projected revenue for the next 18 months? If you can't answer those questions in under
              five minutes, your pipeline isn't working for you.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Small businesses that hit consistent federal revenue targets share one habit: they
              treat pipeline management as a core business function, not an afterthought. They assign
              owners to opportunities, run regular reviews, and make go/no-go decisions with
              discipline. Companies that treat it casually — checking SAM.gov when they have time,
              chasing every opportunity that looks close — burn resources and win nothing.
            </p>

            <Callout icon={DollarSign} color="emerald" title="The market you're working in">
              <p>
                In fiscal year 2024, the federal government awarded over <strong>$183 billion</strong>{" "}
                in prime contracts to small businesses — 28.8% of all federal contracting dollars,
                exceeding the government's own 23% small business goal for the fourth consecutive
                year. That number is growing. The opportunity is real. The question is whether your
                pipeline is structured to capture it.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Think of your pipeline as having two jobs simultaneously. Job one: keep work coming in
              so there's no gap between when a contract ends and when the next one starts. Job two:
              give you enough data to make smart resource decisions — when to hire, when to subcontract,
              when to walk away from a pursuit that's wasting time. Neither job gets done if you're
              just keeping a list of things you might bid on.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="five-stages" number="02" title="The Five Stages: Discover to Award" />

            <p className="text-stone-700 leading-relaxed">
              Every federal pursuit moves through the same lifecycle, whether you're a one-person shop
              or a $50M contractor. The stages differ in what you know, what you control, and what you
              should be doing. Most small businesses only engage starting at stage three. That's why
              they lose — consistently — to competitors who started at stage one.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  stage: "01",
                  title: "Discover",
                  timing: "12–24 months before award",
                  color: "bg-blue-600",
                  body: "You identify that the government has a requirement that matches your capabilities. The source might be a pre-solicitation notice on SAM.gov, a Sources Sought notice, intelligence from a contracting officer, or spend data from USASpending.gov showing an incumbent contract approaching expiration. At this stage, there's no formal opportunity yet — just a signal worth tracking.",
                },
                {
                  stage: "02",
                  title: "Qualify",
                  timing: "9–18 months before award",
                  color: "bg-violet-600",
                  body: "You assess whether this opportunity is worth pursuing. Is the size right? Does your past performance align? Do you have relevant certifications? Is an incumbent locked in? Can you compete on price? This is the gate review moment — you're deciding whether to invest resources in this pursuit or move on to better fits.",
                },
                {
                  stage: "03",
                  title: "Capture",
                  timing: "6–12 months before award",
                  color: "bg-amber-600",
                  body: "Active pursuit begins. You're building relationships with the program office, responding to Sources Sought notices, gathering competitive intelligence, positioning your capabilities, and potentially teaming with partners. This is where your probability of win gets established — before the RFP drops.",
                },
                {
                  stage: "04",
                  title: "Propose",
                  timing: "30–90 days before award",
                  color: "bg-emerald-600",
                  body: "The RFP is released. You have a response window — typically 30 to 45 days for most opportunities, sometimes as short as 15 days. You're writing, reviewing, pricing, and submitting. Everything you did in the capture stage either makes this easier or harder. A great capture effort produces a proposal that feels like an explanation, not a sales pitch.",
                },
                {
                  stage: "05",
                  title: "Award",
                  timing: "30–180 days post-submission",
                  color: "bg-stone-700",
                  body: "The government evaluates proposals and makes a selection. Evaluation periods vary widely — simple acquisitions may take 30 days; complex procurements can take six months or more. Award is followed by a debriefing opportunity (which you should always request, win or lose) and a protest window during which unsuccessful bidders can challenge the decision.",
                },
              ].map((item) => (
                <div
                  key={item.stage}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className={`shrink-0 w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                    <span className="text-white font-black text-sm">{item.stage}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <span className="text-xs text-stone-400 bg-stone-100 rounded-full px-2.5 py-0.5 font-medium">
                        {item.timing}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The critical point here: the Discover and Qualify stages are where most wins are
              determined. By the time you're in the Propose stage, your probability of winning is
              largely fixed by what you did — or didn't do — upstream. That's why{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                opportunity intelligence
              </Link>{" "}
              matters so much. The earlier you find an opportunity, the more time you have to make
              yourself the obvious choice.
            </p>

            <Callout icon={Eye} color="sky" title="Sources Sought: the stage-zero signal">
              <p>
                Before stage one comes a zero stage most contractors miss: the Sources Sought
                notice. These market research postings tell you the government is actively planning
                a procurement — before the formal opportunity appears. Responding positions you
                with the contracting officer and can directly influence how the requirement is
                written. See our full guide to{" "}
                <Link href="/blog/sources-sought-notice" className="text-sky-700 underline font-medium">
                  Sources Sought notices
                </Link>{" "}
                for the complete playbook.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pipeline-math" number="03" title="Pipeline Math: How Many Opportunities You Need" />

            <p className="text-stone-700 leading-relaxed">
              Here's a number that surprises most first-time federal contractors: to win one
              government contract, you typically need to submit somewhere between 3 and 10 proposals,
              depending on your maturity, incumbent relationships, and how well you qualify
              opportunities. Established contractors with strong past performance win 25–40% of
              submitted proposals. New contractors are often at 10–20%.
            </p>

            <p className="text-stone-700 leading-relaxed">
              That math ripples backward. If you want to award two contracts this year — say, a
              $500K services contract and a $1.5M professional services award — and your win rate
              is 25%, you need to submit about 8 proposals. To submit 8 quality proposals, you
              probably need to pursue 16–20 opportunities through capture (because half won't make
              it to RFP or won't clear your go/no-go gate). To identify 20 worth pursuing, you
              need to review 60+ opportunities in the qualify stage.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-8 my-8">
              <h3 className="font-black text-lg mb-6 text-center">The Rule of 10x: Pipeline Volume Math</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Review", number: "60+", sub: "Qualify stage" },
                  { label: "Pursue", number: "20", sub: "Capture stage" },
                  { label: "Submit", number: "8", sub: "Proposals" },
                  { label: "Win", number: "2", sub: "Awards" },
                ].map((item, i) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl font-black text-blue-400 mb-1">{item.number}</div>
                    <div className="text-white font-bold text-sm mb-0.5">{item.label}</div>
                    <div className="text-stone-400 text-xs">{item.sub}</div>
                    {i < 3 && (
                      <div className="hidden sm:block text-stone-600 mt-2 text-lg">→</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-stone-400 text-xs text-center mt-6">
                Based on a 25% proposal win rate. New contractors may need 2–3x more reviews to find qualified fits.
              </p>
            </div>

            <p className="text-stone-700 leading-relaxed">
              These numbers aren't meant to be discouraging. They're meant to show you exactly why
              pipeline management matters. If you've only got three active pursuits in your pipeline
              and you're hoping to grow revenue this year, the math isn't there. More opportunities
              in the early stages is the answer — but only if you qualify them rigorously. A pipeline
              full of bad-fit opportunities is just as dangerous as an empty one.
            </p>

            <p className="text-stone-700 leading-relaxed">
              As your past performance builds and your agency relationships deepen, your win rate
              improves. Incumbents defending recompete contracts often see win rates of 60–80%. That's
              why retaining existing contracts is often better BD than chasing new ones. But you need
              a pipeline to get there in the first place. You can read more about the specific numbers
              in our guide to{" "}
              <Link href="/blog/government-contract-win-rate" className="text-blue-700 hover:underline font-medium">
                government contract win rates
              </Link>.
            </p>

            {/* CTA 1 */}
            <div className="bg-blue-600 rounded-2xl p-8 my-10 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-200" />
                <span className="font-bold text-blue-100 text-sm">Quick Eligibility Check</span>
              </div>
              <h3 className="text-xl font-black mb-2">Know your set-aside certifications before you build your pipeline</h3>
              <p className="text-blue-100 text-sm mb-5">
                Your certifications — SDVOSB, WOSB, 8(a), HUBZone — determine which opportunities
                you can compete for with less competition. Run the free check to see which programs
                you qualify for.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="bid-no-bid" number="04" title="The Bid/No-Bid Decision: Most Contractors Get This Wrong" />

            <p className="text-stone-700 leading-relaxed">
              The biggest pipeline mistake isn't missing good opportunities. It's chasing bad ones.
              Every proposal you write for a contract you're unlikely to win costs real money —
              proposal development for even a moderately complex federal RFP can run $10,000 to
              $50,000 in staff time and outside support. Submitting ten weak proposals costs more
              than developing two strong ones. The bid/no-bid decision is where pipeline discipline
              pays off.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The decision should happen twice: once at the qualify stage (when the opportunity
              first enters your pipeline) and again at the propose stage (when the RFP drops and
              you can see the actual requirements). An opportunity that looked good six months ago
              might have shifted — new incumbent, unfavorable evaluation criteria, pricing that
              doesn't work for you. Re-qualify before you commit proposal resources.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-900 rounded-tl-lg">Criterion</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-900">Bid Signal</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-900 rounded-tr-lg">No-Bid Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { criterion: "Past performance alignment", bid: "Direct match — same NAICS, similar scope", nobid: "Thin or indirect — would require stretching your narrative" },
                    { criterion: "Incumbent status", bid: "No incumbent, or incumbent has performance issues", nobid: "Strong incumbent with no obvious vulnerability" },
                    { criterion: "Set-aside opportunity", bid: "Set-aside matches your certifications", nobid: "Full-and-open competition against large businesses" },
                    { criterion: "Price-to-win viability", bid: "You can compete on value without a loss", nobid: "Requires cutting margin below sustainable levels" },
                    { criterion: "Customer relationship", bid: "Agency knows you; you've engaged pre-RFP", nobid: "Cold start — agency has never heard of you" },
                    { criterion: "Teaming needs", bid: "Gaps covered by an identified, committed partner", nobid: "You'd need teaming but haven't arranged it" },
                    { criterion: "Proposal resource availability", bid: "Writers and reviewers available for the response window", nobid: "Team is maxed out on active proposals" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 font-medium text-stone-800">{row.criterion}</td>
                      <td className="p-3 border border-stone-200 text-emerald-700">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          {row.bid}
                        </div>
                      </td>
                      <td className="p-3 border border-stone-200 text-red-700">
                        <div className="flex items-start gap-1.5">
                          <XCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          {row.nobid}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Discipline here is counterintuitive. Saying no to an opportunity feels like leaving
              money on the table. It isn't — it's freeing up the capacity to win something you
              actually have a shot at. The contractors who grow their federal revenue fastest aren't
              the ones bidding the most. They're the ones bidding smart.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The 'must-bid' trap">
              <p>
                Beware of bidding on opportunities simply because you've invested time researching
                them — what behavioral economists call the "sunk cost" bias. The hours you spent
                qualifying an opportunity are gone whether you bid or not. The decision to submit
                should be based on your current probability of winning and the cost of proposal
                development, not on how much time you've already spent looking at the opportunity.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pwin-scoring" number="05" title="Scoring Probability of Win at Each Stage" />

            <p className="text-stone-700 leading-relaxed">
              Probability of Win — PWin — is the percentage likelihood you'll receive the contract
              award. It's not a gut feeling. It's a structured assessment of the factors that
              determine competitive outcomes, updated as you learn more about an opportunity. Tracking
              PWin across your pipeline gives you a weighted revenue forecast and helps you prioritize
              where to focus your BD effort.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Different pipeline stages carry different PWin ranges by definition. An opportunity
              you just discovered might sit at 10–20% — you've validated it's real, but you know
              very little else. Once you've done active capture work, engaged the customer, and
              confirmed your competitive position, a well-qualified opportunity might sit at 40–60%.
              Anything above 60% usually means you're the incumbent or you have a significant
              structural advantage.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Filter,
                  range: "10–25%",
                  stage: "Discover / Qualify",
                  color: "border-stone-300 bg-stone-50",
                  textColor: "text-stone-700",
                  desc: "You've identified a valid opportunity. Customer relationship is unknown. Competition is unclear. This is a tracking position — don't commit proposal resources yet.",
                },
                {
                  icon: Target,
                  range: "25–50%",
                  stage: "Active Capture",
                  color: "border-amber-300 bg-amber-50",
                  textColor: "text-amber-800",
                  desc: "You've engaged the agency, understand the requirement, and have positioned your strengths. You know who you're competing against. Resource commitment is justified.",
                },
                {
                  icon: Award,
                  range: "50–70%+",
                  stage: "Pre-Proposal / Propose",
                  color: "border-emerald-300 bg-emerald-50",
                  textColor: "text-emerald-800",
                  desc: "Strong positioning established. You may be the preferred vendor, incumbent, or have a teaming advantage. Proposal execution is the remaining variable.",
                },
              ].map((item) => (
                <div
                  key={item.range}
                  className={`rounded-2xl border-2 p-5 hover-lift ${item.color}`}
                >
                  <item.icon className={`w-6 h-6 mb-3 ${item.textColor}`} />
                  <div className={`font-black text-2xl mb-1 ${item.textColor}`}>{item.range}</div>
                  <div className={`font-bold text-sm mb-2 ${item.textColor}`}>{item.stage}</div>
                  <div className={`text-xs leading-relaxed ${item.textColor} opacity-80`}>{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Your PWin score should update every time you learn something new: when the agency
              releases a draft RFP, when a teaming partner confirms or backs out, when a competitor
              announces a relevant win, when you hear the incumbent had performance issues. Static
              PWin scores are useless. The value is in the movement — a score dropping from 40% to
              20% is a signal to either accelerate capture or cut the opportunity loose. We go
              deeper on this topic in our guide to{" "}
              <Link href="/blog/pwin-probability-of-win" className="text-blue-700 hover:underline font-medium">
                probability of win scoring
              </Link>.
            </p>

            <p className="text-stone-700 leading-relaxed">
              To build a revenue forecast, multiply each opportunity's estimated value by its PWin
              and sum across your pipeline. If your weighted pipeline totals $3.2M and your revenue
              target is $2M, you're roughly on track. If it totals $800K, you have a pipeline
              problem that needs to be solved upstream — more discovery, better qualification, or
              broader capture activity.
            </p>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pre-rfp-work" number="06" title="Pre-RFP Work: The Stage Most Teams Skip" />

            <p className="text-stone-700 leading-relaxed">
              The window before the RFP drops is the highest-leverage period in the entire pursuit
              lifecycle. Once an RFP is released, everyone competing for that contract receives the
              same document at the same moment. Your differentiation from that point forward depends
              almost entirely on what you did before the RFP appeared.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Pre-RFP capture work falls into four categories. Get all four right and you'll write
              better proposals with less effort than competitors who are seeing the requirement for
              the first time when the solicitation hits SAM.gov.
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  icon: Users,
                  title: "Customer engagement",
                  body: "Meet with the program office and contracting officer before the RFP. Attend industry days. Ask intelligent questions that demonstrate capability. The goal is to become a known quantity — someone the evaluator has context on before they read your proposal.",
                },
                {
                  icon: Eye,
                  title: "Competitive intelligence",
                  body: "Find out who's already doing this work. Check USASpending.gov for the incumbent contractor. Research their past performance, their pricing patterns on similar contracts, and any public information about their current performance on the contract. Understand their vulnerabilities before you write a single proposal word.",
                },
                {
                  icon: Layers,
                  title: "Technical solution development",
                  body: "Don't wait for the RFP to think about your technical approach. Develop your solution framework early based on what you know about the requirement. When the RFP drops, you're filling in details, not starting from scratch. This is how strong contractors submit polished proposals on 30-day windows.",
                },
                {
                  icon: RefreshCw,
                  title: "Teaming decisions",
                  body: "If you need a teaming partner — for past performance, specific capabilities, or set-aside status — identify and lock in that partner before RFP release. The best teaming partners get picked up quickly once an RFP drops. The companies that wait until after RFP release to look for teammates almost always end up with whoever's left.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              This is also where your{" "}
              <Link href="/features/capability-statement" className="text-blue-700 hover:underline font-medium">
                capability statement
              </Link>{" "}
              does real work. Leaving one with a program manager or contracting officer during
              pre-RFP meetings turns a generic conversation into a leave-behind that can survive
              a job change or a six-month gap between meetings. Keep it current, keep it specific
              to the agency's priorities, and hand it out every time you engage.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="tracking-your-pipeline" number="07" title="Tracking Your Pipeline Without a Spreadsheet Hell" />

            <p className="text-stone-700 leading-relaxed">
              Every contractor starts with a spreadsheet. Opportunity name, agency, estimated value,
              response date, status. It works fine when you're tracking three or four pursuits. By
              the time you're juggling fifteen active opportunities across five agencies — some in
              discovery, some in active capture, some in proposal — a spreadsheet becomes a liability.
              Version conflicts, stale data, missing fields, no history. You're spending more time
              managing the spreadsheet than managing the pipeline.
            </p>

            <p className="text-stone-700 leading-relaxed">
              A functional pipeline tracking system needs four things: a single source of truth for
              each opportunity, a consistent stage framework, a way to update PWin as information
              changes, and a view that shows you weighted revenue by time period. That last one is
              what turns a list into a forecasting tool.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: GitBranch,
                  title: "Stage visibility",
                  desc: "See all opportunities grouped by stage at a glance. Know immediately what's in discovery, what's in active capture, and what's heading to proposal in the next 60 days.",
                },
                {
                  icon: BarChart3,
                  title: "Weighted revenue forecast",
                  desc: "Multiply each opportunity's estimated value by its PWin score. Sum by quarter. This is your realistic revenue forecast, not an optimistic wish list.",
                },
                {
                  icon: Clock,
                  title: "Deadline tracking",
                  desc: "Response dates, industry day registrations, anticipated RFP release dates. Miss one deadline and a six-month pursuit goes to zero. These need automated reminders.",
                },
                {
                  icon: TrendingUp,
                  title: "Activity log",
                  desc: "Every customer meeting, every intel update, every teaming conversation — logged against the opportunity. When the RFP drops and you're writing at speed, this history is invaluable.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                pipeline management
              </Link>{" "}
              is built around this exact workflow — opportunities move through stages, PWin updates
              automatically as you add intel, and you get a weighted revenue view without doing any
              manual calculation. It connects directly to the{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline font-medium">
                opportunity matching engine
              </Link>
              , so new qualified opportunities drop into your pipeline instead of requiring a manual
              SAM.gov search session.
            </p>

            <Callout icon={Lightbulb} color="violet" title="When to stop using a spreadsheet">
              <p>
                You've outgrown a spreadsheet when any of these apply: you're pursuing more than
                8 opportunities simultaneously, you've had a deadline slip because it wasn't on
                your radar, two people are editing the same file and you're resolving version
                conflicts, or you can't answer the question "what's our weighted pipeline for Q3?"
                in under two minutes. Any one of these is the signal.
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll">
            <div className="border border-stone-200 rounded-2xl p-8 my-10 bg-gradient-to-r from-stone-50 to-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-stone-700 text-sm">Pipeline Management</span>
              </div>
              <h3 className="text-xl font-black text-stone-900 mb-2">
                Manage your entire pipeline in one place
              </h3>
              <p className="text-stone-600 text-sm mb-5">
                Track opportunities from discovery to award, score PWin, forecast weighted revenue,
                and get deadline alerts — without spreadsheet chaos. Start free for 30 days.
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
                  className="inline-flex items-center gap-2 bg-white text-stone-700 font-bold px-5 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors text-sm"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pipeline-reviews" number="08" title="Running a Weekly Pipeline Review That Actually Works" />

            <p className="text-stone-700 leading-relaxed">
              A pipeline review isn't a status meeting. It's a decision-making session. The goal
              is to walk out of it with clear answers to three questions: What do we do more of?
              What do we stop doing? What just changed that we need to react to? If your pipeline
              review produces a bunch of nodding and no decisions, you're running the wrong kind
              of meeting.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Keep the weekly review short — 30 to 45 minutes. Go through active opportunities in
              capture and proposal stages only. Discovery-stage opportunities don't need weekly
              attention; monthly is fine. For each active pursuit, answer: What's changed since
              last week? Does the PWin score need to move? Is there a decision or action required
              before next week?
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Deadline check",
                  body: "Start with the calendar. What response deadlines, industry day registrations, or RFP releases are coming in the next 21 days? If something's coming and the team isn't ready, that's the first conversation.",
                },
                {
                  step: "02",
                  title: "PWin updates",
                  body: "Review any opportunities where something changed — new intel, customer feedback, a competitor move, a draft RFP released. Update PWin scores. Significant movement either way triggers a resource or go/no-go conversation.",
                },
                {
                  step: "03",
                  title: "Proposal status",
                  body: "For any active proposal efforts: is the team on track for the review schedule and submission deadline? If a color review is coming up, are reviewers identified and briefed? Identify blockers now, not three days before deadline.",
                },
                {
                  step: "04",
                  title: "New entries",
                  body: "What new opportunities entered the qualify stage this week? Do a quick temperature check on each — does anyone have existing relationships with this agency? Does the scope align with your strongest past performance? Assign an owner and a follow-up date.",
                },
                {
                  step: "05",
                  title: "Decisions needed",
                  body: "Explicitly surface any bid/no-bid decisions that need to be made before the next review. Force the decision. 'We'll keep watching it' is not a decision — it's a resource drain in disguise.",
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
              Run a deeper monthly review to look at pipeline health from a 30,000-foot view.
              Is your weighted pipeline on track with your revenue targets? Are you entering too
              many or too few opportunities into the qualify stage? Are you winning at a rate that
              justifies your proposal investment? These questions can't be answered in a weekly
              meeting — they need the broader view.
            </p>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="09" title="The Mistakes That Stall Growth (and How to Fix Them)" />

            <p className="text-stone-700 leading-relaxed">
              After working with hundreds of small business contractors, we've seen the same
              patterns kill pipeline momentum repeatedly. These aren't exotic problems — they're
              predictable, fixable, and more common than most BD teams admit.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  mistake: "Chasing every opportunity that looks relevant",
                  fix: "Implement a formal qualify gate with a minimum threshold — at minimum, you need confirmed past performance alignment and a realistic path to price-to-win before an opportunity enters active pursuit.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  mistake: "Starting pipeline management at the RFP stage",
                  fix: "Begin tracking opportunities at the Sources Sought or pre-solicitation stage. If the first time you see an opportunity is when the RFP drops, you've already lost most of the strategic advantage you could have built.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  mistake: "Using pipeline value (not weighted value) as a forecast",
                  fix: "A pipeline showing $8M in potential awards sounds healthy. If your average PWin is 15%, that's a realistic forecast of $1.2M. Use weighted value in every planning conversation to avoid an overly optimistic picture.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  mistake: "No win/loss analysis",
                  fix: "Request a debrief after every award — win or lose. Wins tell you what's working. Losses reveal where you're weak and whether your PWin scoring is calibrated correctly. This data pays off on the next pursuit.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  mistake: "Tracking without ownership",
                  fix: "Every opportunity needs a named owner who's responsible for advancing it through the stages. 'The BD team' owns nothing. An opportunity without an owner drifts, falls through the cracks, and becomes a missed submission deadline.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-5 ${item.bg}`}
                >
                  <div className="flex items-start gap-3">
                    <item.icon className={`w-5 h-5 mt-0.5 shrink-0 ${item.color}`} />
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1 text-sm">
                        Mistake: {item.mistake}
                      </h3>
                      <p className="text-stone-700 text-sm leading-relaxed">
                        <strong>Fix:</strong> {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The contractors who consistently grow their federal revenue aren't necessarily the
              best writers or the lowest pricers. They're the ones with the best process discipline.
              They find opportunities earlier, qualify them harder, pursue fewer with more focus,
              and learn systematically from the ones they lose. That's pipeline management working
              as it should.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For the capture side of this work — the specific activities that go into building a
              win strategy before the RFP — see our companion post on the{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 hover:underline font-medium">
                capture management process
              </Link>. And if you're tracking down which set-aside certifications you should be
              pursuing to improve your pipeline's competitive position, the{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-blue-700 hover:underline font-medium">
                federal contracting certifications guide
              </Link>{" "}
              covers all of them.
            </p>

            <Callout icon={TrendingUp} color="blue" title="Build your pipeline before you need it">
              <p>
                The most dangerous moment in federal contracting is when your current contracts
                are performing well and revenue is comfortable. That's the moment most BD
                activity stops — and the moment that creates the revenue gap 12 months later.
                Pipeline management is a continuous activity, not something you turn on when
                you're desperate for work. Start building before the gap appears.
              </p>
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll">
            <div className="bg-stone-900 text-white rounded-2xl p-10 my-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 mb-5">
                <GitBranch className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-black mb-3">
                Ready to build a pipeline that actually forecasts revenue?
              </h2>
              <p className="text-stone-300 text-sm max-w-xl mx-auto mb-7">
                CapturePilot gives you opportunity discovery, qualification tracking, PWin scoring,
                and weighted revenue forecasting in one place. Start with the free eligibility check
                to see where you stand — then build from there.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors"
                >
                  Check your eligibility free
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll border-t border-stone-200 pt-10 mt-10">
            <h2 className="font-black text-lg text-stone-900 mb-5">Related Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/government-contract-win-rate",
                  title: "Government Contract Win Rates: What's Realistic and How to Improve Yours",
                  category: "Strategy",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices: How to Get In Early and Shape the RFP",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-teaming-agreement",
                  title: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts",
                  category: "Strategy",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
                  category: "Proposals",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex flex-col gap-2 bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-all hover-lift"
                >
                  <span className="text-xs font-bold text-blue-600">{post.category}</span>
                  <span className="text-stone-800 font-semibold text-sm group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </span>
                  <span className="flex items-center gap-1 text-blue-600 text-xs font-medium mt-auto pt-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
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
