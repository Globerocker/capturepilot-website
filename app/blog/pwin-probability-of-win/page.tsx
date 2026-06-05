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
  XCircle,
  Award,
  Crosshair,
  Gauge,
  Calculator,
  ListChecks,
  Activity,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-pwin-actually-is", label: "What PWin Actually Is (and What It Isn't)" },
  { id: "why-pwin-is-non-negotiable", label: "Why the Numbers Make PWin Non-Negotiable" },
  { id: "ten-factors", label: "The 10 Factors That Drive Your Score" },
  { id: "weighting-factors", label: "How to Weight the Factors That Actually Matter" },
  { id: "running-scorecard", label: "Running Your First PWin Scorecard" },
  { id: "go-no-go-thresholds", label: "The Go/No-Go Thresholds Most Pros Use" },
  { id: "pipeline-management", label: "Using PWin to Manage Your Whole Pipeline" },
  { id: "common-mistakes", label: "PWin Mistakes That Cost Small Businesses Bids" },
  { id: "building-a-system", label: "Building a PWin System Without a Full BD Team" },
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

export default function PwinProbabilityOfWinPage() {
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
            <span className="text-stone-900 font-medium">Probability of Win (PWin)</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Crosshair className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Probability of Win (PWin):{" "}
            <span className="gradient-text">How to Score Your Chances Before You Bid</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Only 14% of SAM-registered businesses win a federal contract in any given year. The
            ones who win consistently aren't luckier — they're more deliberate about which bids they
            chase. PWin, or Probability of Win, is the tool that separates disciplined contractors
            from ones who spray proposals at every opportunity and wonder why nothing sticks.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 5, 2026</span>
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
        <div className="max-w-4xl mx-auto">

          {/* Section 1 */}
          <SectionHeading
            id="what-pwin-actually-is"
            number="01"
            title="What PWin Actually Is (and What It Isn't)"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              PWin — Probability of Win — is a weighted numerical score that tells you how likely
              you are to win a specific government contract opportunity. It sits at the center of
              every serious{" "}
              <Link href="/blog/capture-management-process" className="text-blue-600 hover:underline">
                capture management process
              </Link>{" "}
              and drives the most consequential decision in BD: should we bid this or not?
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              What PWin is not: a gut feeling dressed up in math. Too many small businesses assign
              numbers without a scoring rubric and call it analysis. That produces false confidence,
              not insight. Real PWin assessment requires honest answers to hard questions — about
              your customer relationships, your competitive position, your past performance, and
              your price.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              The formula itself is simple. You score a set of factors on a 0–10 scale, multiply
              each by its weight, and sum the results. The output is a score between 0 and 100 that
              you can use as a percentage — your estimated probability of winning the contract.
            </p>
          </div>

          <div className="my-8 bg-blue-50 rounded-2xl border border-blue-200 p-6 animate-on-scroll">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-5 h-5 text-blue-600" />
              <p className="font-bold text-blue-800 text-sm">The PWin Formula</p>
            </div>
            <div className="bg-white rounded-xl border border-blue-200 p-4 font-mono text-sm text-blue-900 mb-3">
              PWin = (Factor1 × Weight1) + (Factor2 × Weight2) + ... + (FactorN × WeightN)
            </div>
            <p className="text-blue-800 text-sm">
              Each factor is scored 1–10. Weights are percentages that total 100%. The result is
              your composite score — treat it as a rough probability percentage. A score of 72
              means roughly 72% estimated likelihood of winning.
            </p>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              PWin works because it forces rigor. When you have to assign a number to "how well do
              we know this customer," the number makes the gap visible. It turns a vague
              instinct — "I think we have a shot" — into a specific question: "What score would I
              honestly give our customer access?"
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              The score is only as good as the honesty behind it. Apply it with discipline and it
              becomes one of the most valuable tools in your BD arsenal.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="why-pwin-is-non-negotiable"
            number="02"
            title="Why the Numbers Make PWin Non-Negotiable"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The federal market is enormous — $773 billion in total contract awards in FY2024 alone,
              with small businesses capturing $194.13 billion in FY2025, or 23.8% of total federal
              spending. The opportunity is real. But the competition is brutal, and the cost of
              chasing low-probability bids is ruinously high.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Proposal development costs run between 1% and 4% of the total contract value.
              A $500,000 contract can cost you $5,000 to $20,000 to bid on — in staff time, writing,
              graphics, pricing analysis, and review cycles. A $2 million contract can run $20,000 to
              $80,000 in proposal costs. That math changes how you think about pursuing every
              opportunity you find.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              First-time bidders win roughly 3% of the proposals they submit. That number isn't
              a reason to give up — it's a reason to be selective. If you can identify the 20% of
              opportunities where your PWin is above 60%, and focus your limited BD resources
              there, your effective win rate multiplies. Businesses with three or more successful
              government contracts are 30% more likely to win subsequent bids, partly because they've
              learned which fights they can actually win.
            </p>
          </div>

          <Callout icon={BarChart3} color="amber" title="The Cost of Undisciplined Bidding">
            Proposal costs range from 1%–4% of contract value. On a $1M contract, that's $10,000–
            $40,000 per bid. At a 3% first-time win rate, you'd need to bid 33 contracts to win 1 —
            spending $330K–$1.3M in proposal costs for every win. PWin discipline is how you break
            that math.
          </Callout>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Beyond the immediate economics, systematic PWin scoring reveals your competitive gaps.
              If your scores on customer access are consistently low, that tells you where to invest
              before the next RFP cycle. If your technical fit scores are high but your pricing
              scores are low, that points to a price-to-win problem worth solving before you spend
              another dollar on proposals.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              PWin transforms your{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-600 hover:underline">
                pipeline management
              </Link>{" "}
              from a list of dates into a weighted business forecast. Every opportunity in your
              pipeline has an estimated value. Multiply that value by your PWin score and you have a
              weighted pipeline — a more honest picture of the revenue you're actually likely to
              see.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Gauge className="w-8 h-8 shrink-0 opacity-90 mt-0.5" />
              <div>
                <h3 className="font-black text-xl mb-2">Not sure which bids are worth your time?</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  CapturePilot's Quick Checker runs your company profile against an opportunity in
                  seconds — surfacing your set-aside eligibility, NAICS fit, and competitive
                  positioning before you invest hours in capture.
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

          {/* Section 3 */}
          <SectionHeading
            id="ten-factors"
            number="03"
            title="The 10 Factors That Drive Your Score"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-6">
              Every PWin model includes a set of weighted factors. The best capture managers use
              between 8 and 12. Here are the ten that matter most across most federal opportunities,
              with an explanation of what each one actually measures.
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                icon: Users,
                number: "01",
                title: "Customer & Relationship Quality",
                description:
                  "How well do you know this customer? Have you met the program manager, contracting officer, or end users? Customer intimacy is consistently the strongest predictor of win probability. If you've never had a conversation with anyone at this agency, your score here is low — regardless of how good your technical approach might be.",
              },
              {
                icon: Search,
                number: "02",
                title: "Competitive Landscape",
                description:
                  "Who else is likely to bid? Do you know the incumbent? Have you done a Black Hat analysis — honestly assessing your offer from a competitor's perspective? Understanding the competitive field lets you price strategically and position your discriminators against specific weaknesses.",
              },
              {
                icon: CheckCircle2,
                number: "03",
                title: "Technical Fit",
                description:
                  "How well does your solution align with the stated requirements? Does your approach solve the actual problem, or are you retrofitting a standard service delivery model? Strong technical fit means your solution was practically shaped for this requirement — often because you shaped the requirement yourself during pre-RFP engagement.",
              },
              {
                icon: Award,
                number: "04",
                title: "Past Performance",
                description:
                  "Do you have recent, relevant, and positively rated past performance? Relevance means similar scope, size, and complexity. Recency means within the last three to five years. And quality means strong CPARS ratings or verifiable client references. This factor is particularly important for agencies that use best-value trade-off evaluations.",
              },
              {
                icon: Target,
                number: "05",
                title: "Key Personnel",
                description:
                  "Do you have the right people to name in the proposal? Many contracts — especially in IT, advisory, and professional services — are won or lost based on the named individuals in the technical volume. If your resume bench is thin for this requirement, your score here drops fast.",
              },
              {
                icon: DollarSign,
                number: "06",
                title: "Price-to-Win",
                description:
                  "Do you know what it takes to win on price without bleeding out on margin? Price-to-win analysis requires intelligence on the government's budget estimate, the incumbent's pricing structure, and your competitors' likely rates. Without it, you're guessing. Low confidence here should drag your overall score down significantly.",
              },
              {
                icon: Shield,
                number: "07",
                title: "Teaming & Small Business Strategy",
                description:
                  "Does your team configuration align with any set-aside requirements? Do your partner companies fill technical gaps? Does your subcontracting plan meet the agency's small business utilization targets? This factor matters more than most people realize — especially on larger contracts with mandatory subcontracting plans.",
              },
              {
                icon: ListChecks,
                number: "08",
                title: "Compliance & Proposal Risk",
                description:
                  "How difficult is this RFP to respond to compliantly? Complex page limits, unusual formats, restrictive certifications, and ambiguous evaluation criteria all raise proposal risk. Score this factor low when the RFP is dense, when you're interpreting requirements, or when you lack the bandwidth for a full color-team review cycle.",
              },
              {
                icon: Activity,
                number: "09",
                title: "Capture Maturity",
                description:
                  "How far along are you in the capture process? Have you done customer calls, attended pre-proposal conferences, reviewed draft RFP releases? A mature capture effort — where you've been working the opportunity for months before the RFP dropped — dramatically increases your win probability versus a cold start on RFP day.",
              },
              {
                icon: Zap,
                number: "10",
                title: "Operational Readiness",
                description:
                  "Can you actually perform this work if you win? Do you have the cleared personnel, facilities, certifications, and infrastructure the contract requires? An 8(a) firm bidding a classified requirement without facility clearance has a real operational readiness problem — regardless of how strong the rest of the package looks.",
              },
            ].map((factor) => (
              <div
                key={factor.number}
                className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white hover-lift"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <factor.icon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-stone-400">{factor.number}</span>
                    <h3 className="font-bold text-stone-900 text-sm">{factor.title}</h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="weighting-factors"
            number="04"
            title="How to Weight the Factors That Actually Matter"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Not every factor matters equally on every contract. The weighting you apply should
              reflect the specific opportunity — the evaluation criteria in the RFP, the agency's
              history, and the competitive dynamics. That said, there are starting points that
              hold up across most federal competitive bids.
            </p>
          </div>

          {/* Weighting Table */}
          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="text-left p-3 font-bold rounded-tl-xl">Factor</th>
                  <th className="text-center p-3 font-bold">Typical Weight</th>
                  <th className="text-left p-3 font-bold rounded-tr-xl">When to increase it</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Customer & Relationship Quality", "20–25%", "Incumbent recompete, sole-source adjacent, agency-prioritized relationship buys"],
                  ["Competitive Landscape", "15–20%", "Multiple known competitors, highly contested vehicle, or new entrants expected"],
                  ["Technical Fit", "15–20%", "Complex technical evaluation, innovative solution required, agency values differentiation"],
                  ["Past Performance", "10–15%", "Best-value trade-off with past performance as a key evaluation factor"],
                  ["Key Personnel", "5–10%", "Named personnel required, specialized clearances, subject-matter expertise is scoreable"],
                  ["Price-to-Win", "10–15%", "Price-only award, LPTA (lowest price technically acceptable) evaluation"],
                  ["Teaming & SB Strategy", "5–10%", "Set-aside with subcontracting plan requirement, agency SB goal under pressure"],
                  ["Compliance & Proposal Risk", "5%", "Complex solicitations with unusual format requirements or narrow page limits"],
                  ["Capture Maturity", "5–10%", "Early engagement possible, pre-RFP shape-ability is high"],
                  ["Operational Readiness", "5%", "Classified work, specialized certifications, transition timeline is tight"],
                ].map(([factor, weight, when], i) => (
                  <tr
                    key={i}
                    className={`border-t border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                  >
                    <td className="p-3 font-medium text-stone-800">{factor}</td>
                    <td className="p-3 text-center font-mono text-blue-700 font-bold">{weight}</td>
                    <td className="p-3 text-stone-600">{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Key Insight on Weighting">
            For most competitive small business bids, customer relationship quality and competitive
            landscape together account for 35–45% of the total weight. This is why{" "}
            <Link href="/blog/sources-sought-notice" className="text-sky-700 underline">
              responding to Sources Sought notices
            </Link>{" "}
            and building pre-RFP agency relationships isn't optional — it's what moves the highest-
            weighted factor in your score.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="running-scorecard"
            number="05"
            title="Running Your First PWin Scorecard"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Here's a practical walkthrough using a fictional but realistic opportunity: a
              $1.2 million IT support services contract at a regional VA Medical Center, set aside
              for{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">
                SDVOSBs
              </Link>
              .
            </p>
          </div>

          <div className="my-8 space-y-3 animate-on-scroll">
            {/* Step boxes */}
            {[
              {
                step: "Step 1",
                title: "List your factors and weights",
                body: "Set your factor list and assign weights that add to 100%. For this VA opportunity, you emphasize customer relationships (25%), past performance (20%), and technical fit (15%), with smaller weights on the remaining factors.",
              },
              {
                step: "Step 2",
                title: "Score each factor honestly — not aspirationally",
                body: "Use 1–10 where 10 means you dominate this dimension. A 5 is neutral. For this example: you attended one industry day and met the CO's assistant (Customer: 4/10). You know of two likely competitors (Competitive Landscape: 5/10). Your team has VA facility management experience (Technical Fit: 7/10). You have two relevant CPARS at similar VA sites (Past Performance: 7/10). You have a named PM ready (Key Personnel: 8/10). You've done no price-to-win analysis (Price-to-Win: 3/10). Your teaming plan meets SDVOSB requirements (Teaming: 7/10). RFP is straightforward (Compliance Risk: 8/10). You've been tracking for 90 days (Capture Maturity: 6/10). No operational gaps (Readiness: 9/10).",
              },
              {
                step: "Step 3",
                title: "Calculate your weighted score",
                body: "Multiply each score by its weight. Customer: 4 × 0.25 = 1.00. Past Performance: 7 × 0.20 = 1.40. Technical Fit: 7 × 0.15 = 1.05. Price-to-Win: 3 × 0.10 = 0.30. Competitive: 5 × 0.10 = 0.50. Key Personnel: 8 × 0.08 = 0.64. Teaming: 7 × 0.06 = 0.42. Capture Maturity: 6 × 0.03 = 0.18. Compliance Risk: 8 × 0.02 = 0.16. Readiness: 9 × 0.01 = 0.09. Total: 4.74 out of 10 = 47% PWin.",
              },
              {
                step: "Step 4",
                title: "Identify your score-movers",
                body: "The score isn't a verdict — it's a diagnostic. At 47%, you're below the typical bid threshold. But look at the low scores: Customer (4) and Price-to-Win (3) are draggable problems. Can you get a meeting with the program manager in the next 60 days? Can you run price-to-win analysis against the incumbent's contract? Those two moves alone could push you from 47% to 62%.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white animate-on-scroll">
                <div className="shrink-0 w-24 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-2 py-1 h-fit text-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={TrendingUp} color="emerald" title="PWin Is a Moving Target — That's the Point">
            Your initial PWin at opportunity identification should be low. It should rise as capture
            activities mature — customer meetings, competitive research, teaming agreements, and
            draft RFP review all move your score upward. If it isn't moving, your capture effort
            isn't working.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="go-no-go-thresholds"
            number="06"
            title="The Go/No-Go Thresholds Most Pros Use"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Once you have a PWin score, you need decision thresholds — explicit rules that tell
              you what to do with the number. Without thresholds, the score becomes information
              without action.
            </p>
          </div>

          {/* Threshold Visual */}
          <div className="my-8 grid sm:grid-cols-3 gap-4 animate-on-scroll">
            {[
              {
                range: "≥ 70%",
                label: "Bid",
                color: "emerald",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
                text: "text-emerald-800",
                badge: "bg-emerald-600 text-white",
                description:
                  "You have a strong position across most factors. Commit full BD and proposal resources. Assign a capture lead if you haven't.",
              },
              {
                range: "50–69%",
                label: "Conditional Bid",
                color: "amber",
                bg: "bg-amber-50",
                border: "border-amber-200",
                text: "text-amber-800",
                badge: "bg-amber-500 text-white",
                description:
                  "You have a real shot but meaningful gaps. Identify the 2–3 score-movers, set a milestone to address them, and re-score before committing full proposal resources.",
              },
              {
                range: "< 50%",
                label: "No-Bid / Team",
                color: "red",
                bg: "bg-red-50",
                border: "border-red-200",
                text: "text-red-800",
                badge: "bg-red-600 text-white",
                description:
                  "Your position is too weak to justify proposal investment. Consider teaming with a stronger prime, building relationships for the recompete, or walking away cleanly.",
              },
            ].map((t) => (
              <div
                key={t.range}
                className={`rounded-2xl border p-5 ${t.bg} ${t.border} flex flex-col gap-3`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-3xl font-black ${t.text}`}>{t.range}</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${t.badge}`}>
                    {t.label}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${t.text}`}>{t.description}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              These aren't arbitrary cutoffs. They reflect the economics of proposal investment.
              At 70%+, your proposal spend has a reasonable expected return. At 50–69%, you're
              in conditional territory where the gap-closing activities (a customer meeting, price
              intelligence, a better teaming arrangement) can move you into the green zone before
              you commit full resources. Below 50%, your expected return per dollar of proposal
              spend is negative.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Some organizations adjust these thresholds based on strategic priority. A new agency
              relationship worth building long-term might justify a conditional bid at 45%. A
              follow-on to an existing contract might warrant a bid threshold of 60% instead of 70%.
              The discipline is in making the adjustment explicitly and intentionally — not in
              abandoning the framework whenever the score is inconvenient.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              For a deeper look at how bid decisions integrate into the broader opportunity lifecycle,
              see the{" "}
              <Link href="/blog/government-contract-win-rate" className="text-blue-600 hover:underline">
                guide to improving your government contract win rate
              </Link>
              .
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="pipeline-management"
            number="07"
            title="Using PWin to Manage Your Whole Pipeline"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              A single PWin score on a single opportunity is useful. A PWin score on every
              opportunity in your pipeline is transformative. It converts your pipeline from a
              calendar of RFP due dates into a weighted revenue forecast you can actually plan
              around.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              The concept is straightforward. For each opportunity in your{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                pipeline
              </Link>
              , multiply the contract value by your PWin score. A $2M opportunity at 65% PWin
              contributes $1.3M to your weighted pipeline. A $500K opportunity at 80% PWin
              contributes $400K. Sum across all opportunities and you have your weighted pipeline
              value — what the business development math says you're likely to win.
            </p>
          </div>

          {/* Weighted pipeline example table */}
          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left p-3 font-bold rounded-tl-xl">Opportunity</th>
                  <th className="text-center p-3 font-bold">Value</th>
                  <th className="text-center p-3 font-bold">PWin</th>
                  <th className="text-center p-3 font-bold rounded-tr-xl">Weighted Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["VA IT Support SDVOSB", "$1,200,000", "47%", "$564,000", "amber"],
                  ["DoD Admin Services 8(a)", "$800,000", "71%", "$568,000", "emerald"],
                  ["GSA Facilities O&M", "$2,500,000", "38%", "$950,000", "red"],
                  ["HHS Data Analytics", "$600,000", "82%", "$492,000", "emerald"],
                  ["Army IT Help Desk", "$1,800,000", "55%", "$990,000", "amber"],
                ].map(([name, value, pwin, weighted, status], i) => (
                  <tr
                    key={i}
                    className={`border-t border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                  >
                    <td className="p-3 font-medium text-stone-800">{name}</td>
                    <td className="p-3 text-center font-mono text-stone-700">{value}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`font-bold px-2 py-0.5 rounded-full text-xs ${
                          status === "emerald"
                            ? "bg-emerald-100 text-emerald-700"
                            : status === "amber"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {pwin}
                      </span>
                    </td>
                    <td className="p-3 text-center font-mono font-bold text-blue-700">{weighted}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-stone-300 bg-stone-100">
                  <td className="p-3 font-black text-stone-900" colSpan={3}>
                    Weighted Pipeline Total
                  </td>
                  <td className="p-3 text-center font-black text-blue-800 font-mono text-base">
                    $3,564,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Notice the GSA Facilities opportunity in the table above. It has the largest contract
              value at $2.5M, but at 38% PWin it sits below the no-bid threshold. Including it in
              the pipeline creates a distorted picture of revenue potential — and if you allocate
              proposal resources to chase it, you're likely burning money that belongs on the 82%
              HHS opportunity. A weighted pipeline makes that misallocation visible.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Use your weighted pipeline to make staffing decisions, plan for subcontract
              capacity, and set BD targets for the next quarter. If your weighted pipeline value
              is consistently below your revenue target, you don't have a proposal problem — you
              have an opportunity qualification problem.
            </p>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                pipeline feature
              </Link>{" "}
              lets you track PWin scores across all active opportunities and see your weighted
              forecast in real time — without the spreadsheet maintenance.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-7 h-7 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-black text-stone-900 text-lg mb-2">
                  Track PWin across your whole pipeline
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  CapturePilot gives you a live weighted pipeline view — so you always know which
                  opportunities deserve your BD resources and which ones are quietly draining them.
                  30-day free trial, no credit card required.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="common-mistakes"
            number="08"
            title="PWin Mistakes That Cost Small Businesses Bids"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most small business PWin failures aren't calculation errors. They're judgment errors
              that a number alone can't prevent. These are the ones that show up most consistently.
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                icon: XCircle,
                color: "text-red-500",
                bg: "bg-red-50",
                border: "border-red-100",
                title: "Scoring optimistically instead of honestly",
                body: "The hardest part of PWin is intellectual honesty. Scoring customer intimacy at 8 when you've only attended a public industry day isn't analysis — it's denial. If the score would embarrass you in a red team review, it's probably aspirational, not accurate. Overconfident scores produce overconfident pipelines and underprepared proposals.",
              },
              {
                icon: Clock,
                color: "text-amber-500",
                bg: "bg-amber-50",
                border: "border-amber-100",
                title: "Setting the score once and never updating it",
                body: "PWin is dynamic. An opportunity that scores 45% in month one can legitimately reach 70% by month four if capture activities go well. It can also drop from 65% to 30% when you discover the incumbent is entrenched and the agency just signed an extension. Set a calendar reminder to re-score every 30–60 days and whenever significant new intelligence arrives.",
              },
              {
                icon: Users,
                color: "text-blue-500",
                bg: "bg-blue-50",
                border: "border-blue-100",
                title: "Letting a single person control the score",
                body: "Business development managers and capture leads have an inherent bias toward the deals they're working — they want them to be wins. PWin scoring should involve at least two perspectives: the BD lead and someone with distance from the opportunity. Some organizations run a formal review gate where the score is presented and challenged before a bid decision is made.",
              },
              {
                icon: DollarSign,
                color: "text-emerald-500",
                bg: "bg-emerald-50",
                border: "border-emerald-100",
                title: "Ignoring price-to-win",
                body: "Many small businesses do everything right on the technical side and lose on price because they never did price-to-win research. If you don't know the government's budget estimate, the incumbent's labor rates, and your competitors' wrap rates, your pricing is a guess. A low price-to-win score should be a hard blocker on moving forward — not something to paper over with a good technical volume.",
              },
              {
                icon: AlertTriangle,
                color: "text-violet-500",
                bg: "bg-violet-50",
                border: "border-violet-100",
                title: "Bidding past the no-bid line for strategic reasons",
                body: "\"We should bid this to learn the agency\" is how small businesses hemorrhage proposal resources. Bidding low-PWin opportunities produces long-shot wins at best and expensive intelligence-gathering exercises at worst. If you want to build a relationship with an agency, attend their industry days, respond to their Sources Sought notices, and request capability briefings — all of which cost a fraction of a full proposal response.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 p-5 rounded-2xl border ${item.bg} ${item.border}`}
              >
                <item.icon className={`w-5 h-5 shrink-0 mt-0.5 ${item.color}`} />
                <div>
                  <h3 className="font-bold text-stone-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="building-a-system"
            number="09"
            title="Building a PWin System Without a Full BD Team"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most of the GovCon literature on PWin was written for large contractors with
              dedicated capture managers, BD staff, and a competitive intelligence function.
              Small businesses with two or three people working opportunities need to run the
              same analytical discipline with a fraction of the headcount.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              The answer isn't to skip PWin — it's to streamline it. A lean but rigorous system
              has four components:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                icon: ListChecks,
                title: "A Standard Scorecard",
                body: "Use the same 10 factors and the same weight distribution on every opportunity. Consistency is what makes scores comparable across your pipeline. Build it once in a spreadsheet or document and reuse it.",
              },
              {
                icon: Clock,
                title: "A Gate Calendar",
                body: "Set structured decision points: an initial PWin at identification, a re-score at draft RFP release, and a final go/no-go score 30 days before proposal due date. Three checkpoints per opportunity is manageable for a small team.",
              },
              {
                icon: Search,
                title: "Minimal Viable Intelligence",
                body: "For each opportunity, do at least three things before your first score: look up the agency's award history for similar work on USASpending.gov, identify the likely incumbent, and request a capability briefing with the program office. These take a few hours and move your score from guesswork to informed estimate.",
              },
              {
                icon: Activity,
                title: "Technology That Surfaces Opportunities Early",
                body: "You can't run capture if you're finding out about opportunities on RFP day. Use tools that surface Sources Sought notices, draft RFPs, and agency budget signals early — so you have months, not days, to move your PWin score upward.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-stone-200 bg-white p-5 hover-lift"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <card.icon className="w-4.5 h-4.5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm">{card.title}</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline">
                market intelligence tools
              </Link>{" "}
              pull in agency spending patterns, incumbent history, and competitor footprints
              automatically — giving you the raw material for a PWin score without hours of
              manual USASpending research. Pair that with the{" "}
              <Link href="/features/matching" className="text-blue-600 hover:underline">
                opportunity matching engine
              </Link>{" "}
              and you're finding and scoring the right opportunities rather than every opportunity.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              If you're new to government contracting and want to understand which certifications
              and set-asides could improve your PWin scores across your target agency list, start
              with the{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-blue-600 hover:underline">
                federal contracting certifications guide
              </Link>
              . Your set-aside status is one of the fastest ways to raise your competitive
              landscape score on targeted opportunities.
            </p>

            <p className="text-stone-700 leading-relaxed">
              PWin isn't a silver bullet — it doesn't guarantee wins, and it can't manufacture
              relationships or past performance that don't exist. But it does the next best thing:
              it tells you exactly where your gaps are, which ones are closable before the RFP
              drops, and which fights aren't worth entering. That's what separates the contractors
              who grow their federal revenue consistently from the ones who submit dozens of
              proposals and wonder why nothing lands.
            </p>
          </div>

          <Callout icon={Lightbulb} color="violet" title="Quick Action: Score Your Next Three Opportunities">
            Before the next RFP you see drops, run a PWin scorecard. Score each of the 10 factors
            from 1 to 10, assign rough weights, and calculate the composite. You don't need
            perfection — you need a consistent starting point. The discipline of doing it is
            more valuable than the precision of the number.
          </Callout>

          {/* Related Links */}
          <div className="my-12 animate-on-scroll">
            <h3 className="font-black text-stone-900 text-xl mb-4">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process",
                  desc: "How to build the pre-RFP foundation that makes PWin scoring meaningful",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Government Contract Pipeline Management",
                  desc: "From discovery to award — managing the full opportunity lifecycle",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  title: "Government Contract Win Rates",
                  desc: "What's realistic and how to systematically improve yours",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices",
                  desc: "How to get in early and move your customer relationship score",
                },
                {
                  href: "/blog/incumbent-advantage-government-contracts",
                  title: "How to Beat the Incumbent",
                  desc: "Strategies for raising your PWin score on competitive recompetes",
                },
                {
                  href: "/blog/government-contract-teaming-agreement",
                  title: "Teaming Agreements",
                  desc: "How a strong team raises your technical fit and past performance scores",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                >
                  <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm group-hover:text-blue-700 transition-colors">
                      {link.title}
                    </p>
                    <p className="text-stone-500 text-xs mt-0.5">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Gauge className="w-8 h-8 shrink-0 text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-black text-xl mb-2">
                  Ready to build a disciplined, data-driven BD operation?
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-5">
                  CapturePilot gives small businesses the same capture intelligence tools the big
                  contractors use — opportunity matching, pipeline tracking, market intelligence,
                  and proposal support — in a platform built for teams of 2 to 20. Book a
                  strategy call and we'll walk through your pipeline together.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                  >
                    Book a strategy call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors text-sm"
                  >
                    Start free trial <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
