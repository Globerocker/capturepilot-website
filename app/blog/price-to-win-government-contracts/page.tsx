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
  DollarSign,
  Search,
  Calculator,
  FileText,
  Layers,
  Crosshair,
  Scale,
  Database,
  Users,
  Zap,
  XCircle,
  ChevronDown,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-ptw-is", label: "What Price-to-Win Actually Is" },
  { id: "ptw-vs-cost-estimate", label: "PTW vs. Cost Estimate: Two Different Questions" },
  { id: "evaluation-method-first", label: "Know the Evaluation Method Before You Price" },
  { id: "step-by-step-ptw", label: "The 6-Step PTW Process" },
  { id: "data-sources", label: "Where to Find Real Competitor Pricing Data" },
  { id: "ptw-by-contract-type", label: "PTW Strategy by Contract Type" },
  { id: "common-mistakes", label: "Mistakes That Kill Your Pricing Strategy" },
  { id: "tools-and-systems", label: "Building a PTW System Without a Dedicated Analyst" },
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

export default function PriceToWinPage() {
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
            <span className="text-stone-900 font-medium">Price-to-Win Analysis</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Price-to-Win Analysis:{" "}
            <span className="gradient-text">How to Calculate the Right Bid Price Before You Submit</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most small businesses either bid too high and lose on price, or bid too low and win
            unprofitable work. Price-to-Win (PTW) analysis is the process that gets you to the
            number that actually wins — and it's built on public data, not guesswork.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 30, 2026</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-stone-600" />
              <p className="font-bold text-stone-900">Table of Contents</p>
            </div>
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-stone-600 hover:text-blue-700 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto prose-custom">

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-ptw-is" number="01" title="What Price-to-Win Actually Is" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Price-to-Win is not a cost estimate. It's a competitive intelligence exercise. The
              question it answers is not "what does it cost us to do this work?" but rather "what
              price gives us the highest probability of winning this award?"
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Those are two entirely different questions, and confusing them is one of the most
              common — and expensive — mistakes small contractors make. Your cost estimate sets a
              floor. You cannot bid below it without losing money. Your PTW number is a ceiling —
              the price point beyond which you become uncompetitive against the field.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The gap between those two numbers is your maneuvering room. PTW analysis tells you
              exactly how much of that room to use, based on who you're competing against, how the
              government evaluates proposals, and what the agency has historically paid for
              comparable work.
            </p>

            <Callout icon={DollarSign} color="blue" title="What PTW Draws On">
              PTW analysis combines three inputs: (1) your bottom-up cost model — what it actually
              costs you to perform the work; (2) historical award data from USASpending.gov and
              SAM.gov showing what agencies have paid competitors; and (3) the evaluation
              methodology in the solicitation — LPTA, best value tradeoff, or hybrid.
              Each input shapes how aggressively you position your price.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Large defense contractors dedicate entire teams to PTW. Northrop Grumman, Leidos, and
              SAIC post job listings for Price-to-Win Analysts with six-figure salaries. Small
              businesses rarely have that luxury. But the same process scales down — you can run a
              credible PTW analysis in a day with public data and a disciplined approach.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="ptw-vs-cost-estimate" number="02" title="PTW vs. Cost Estimate: Two Different Questions" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Your cost estimate answers "what do I need to charge to cover costs and make a
              reasonable profit?" Your PTW analysis answers "what will the winning bid actually be?"
              You need both — but they serve different masters.
            </p>

            {/* Comparison Table */}
            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 font-bold rounded-tl-lg">Activity</th>
                    <th className="text-left px-4 py-3 font-bold">Cost Estimate</th>
                    <th className="text-left px-4 py-3 font-bold rounded-tr-lg">PTW Analysis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Primary question", "What does it cost us?", "What will the winner bid?"],
                    ["Data source", "Your cost model, labor rates, overhead", "Competitor data, award history, IGCE"],
                    ["Output", "Your minimum viable price", "Target price range to win"],
                    ["Controls", "Your own cost structure", "The competitive landscape"],
                    ["Used to", "Determine go/no-go viability", "Set your final bid number"],
                  ].map(([row, col1, col2], i) => (
                    <tr
                      key={row}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">{row}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{col1}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{col2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The two analyses run in parallel. If your cost estimate floor sits above your PTW
              ceiling, you have a decision to make: find efficiencies to lower your cost structure,
              or walk away. There's no scenario where bidding above your PTW target and below your
              cost floor makes business sense.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The Margin Trap">
              Small government contractors average approximately 8% profit margins, compared to
              24% for large contractors. That gap exists partly because small businesses don't run
              rigorous PTW analysis — they underprice to win, then discover the work isn't
              profitable. Winning a contract you can't perform sustainably is worse than not
              winning it.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Industry estimates put proposal costs at 1%–4% of total contract value. For a
              $500,000 contract, you're investing $5,000 to $20,000 in proposal development before
              you know whether you've won. That investment only makes sense if you've done the work
              to know your PTW range before you start writing.
            </p>
          </div>

          {/* Mid-article CTA */}
          <div className="animate-on-scroll my-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-blue-200" />
              <p className="font-bold text-lg">Check Your Eligibility First</p>
            </div>
            <p className="text-blue-100 mb-5 text-sm leading-relaxed">
              Before you build a PTW model, confirm you're eligible for the set-asides on this
              contract. CapturePilot's Quick Checker runs your registrations against real SAM.gov
              data in under two minutes.
            </p>
            <a
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
            >
              Check your eligibility free <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="evaluation-method-first" number="03" title="Know the Evaluation Method Before You Price" />
            <p className="text-stone-700 leading-relaxed mb-4">
              The evaluation methodology in the solicitation determines whether you're competing on
              price alone or on value. It's the single most important factor in setting your PTW
              target, and you need to identify it before you do anything else.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-red-600" />
                  <p className="font-bold text-red-800">LPTA (Lowest Price Technically Acceptable)</p>
                </div>
                <p className="text-sm text-red-700 leading-relaxed mb-3">
                  The government awards to the lowest-priced offeror that meets the minimum
                  technical requirements. Technical quality above the floor earns you nothing.
                </p>
                <ul className="space-y-1.5 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Price is the only differentiator once you're technically acceptable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Target: 5–15% below the expected competitive range</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Common in: commercial services, janitorial, security, staffing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <p className="font-bold text-emerald-800">Best Value Tradeoff</p>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed mb-3">
                  The government weighs technical merit, past performance, and price against each
                  other. A higher-priced offeror can win if the technical superiority justifies the
                  premium.
                </p>
                <ul className="space-y-1.5 text-sm text-emerald-700">
                  <li className="flex items-start gap-2">
                    <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Price matters, but technical value can offset a premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Target: within 10% of expected competitive range</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Common in: IT, professional services, R&D, complex services</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The FAR Part 15.101 governs both approaches. Congress has restricted DoD's use of
              LPTA for information technology, knowledge-based services, and personal protective
              equipment — recognizing that commodity-style pricing produces bad outcomes for complex
              technical work. But LPTA remains common across civilian agencies and for commodity
              service contracts.
            </p>

            <Callout icon={Lightbulb} color="sky" title="Read the Evaluation Factors Closely">
              The solicitation's Section M (Evaluation Factors for Award) tells you exactly how
              price is weighted against other factors. In best value tradeoffs, look for language
              like "technical is more important than price" or "all factors combined are
              approximately equal to price." That language tells you how much premium you can
              justify with a superior technical approach.
            </Callout>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="step-by-step-ptw" number="04" title="The 6-Step PTW Process" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Here's a repeatable process you can run for any competitive solicitation. Steps 1–3
              are research. Steps 4–6 are analysis and decision.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  step: "01",
                  title: "Pull the IGCE (if available)",
                  icon: FileText,
                  content:
                    "The Independent Government Cost Estimate is the agency's internal estimate of what the contract should cost. It's required for all acquisitions above the Simplified Acquisition Threshold ($250,000). Sometimes it's published with the solicitation; sometimes you can find prior IGCEs through FOIA requests or prior RFP documents. It gives you the government's price anchor — the number evaluators use as a sanity check on your bid.",
                },
                {
                  step: "02",
                  title: "Research historical awards on USASpending.gov",
                  icon: Database,
                  content:
                    "Search USASpending.gov for the predecessor contract. Look up the incumbent by agency and NAICS code. You'll see the total obligated value, contract duration, and award dates. Back-calculate the annual run rate. If the incumbent received $4.2M over a 3-year base period plus two 1-year options, their annual value is roughly $840,000. That becomes a data point in your competitive range.",
                },
                {
                  step: "03",
                  title: "Identify your competitors and their rate structures",
                  icon: Search,
                  content:
                    "Check SAM.gov for competitors with your same NAICS codes and similar past performance. For IT and professional services, GSA CALC (Contract-Awarded Labor Categories) shows market rates for every labor category on Schedule contracts — this is public data that lets you benchmark your labor rates directly against 15,000+ contract awards. For services contracts, competitors who hold GSA Multiple Award Schedules often publish pricing publicly.",
                },
                {
                  step: "04",
                  title: "Build your bottom-up cost model",
                  icon: Calculator,
                  content:
                    "Estimate direct labor by category and hours, apply your fringe and overhead rates, add G&A, then add fee (profit). This is your cost floor — the minimum you need to bid to break even at your target margin. For DoD cost-reimbursable contracts, your indirect rates must be DCAA-compliant. For fixed-price work, your risk provisions live in the price, not as a separate line item.",
                },
                {
                  step: "05",
                  title: "Build the competitive range",
                  icon: BarChart3,
                  content:
                    "Combine your historical award research, IGCE benchmark, and competitor rate data into a PTW range. If the IGCE suggests $2.1M, the incumbent ran at approximately $1.9M annual, and competitors on similar contracts average $1.85M–$2.05M, your competitive range is roughly $1.75M–$2.0M. You want to be in the lower half of that range for LPTA and the middle for best value.",
                },
                {
                  step: "06",
                  title: "Set your final PTW target and validate the margin",
                  icon: Target,
                  content:
                    "Choose your specific price within the competitive range. Then run it back through your cost model: at that price, what's your margin? If you're LPTA and the only way to hit the PTW target is a 2% margin, ask honestly whether you can execute profitably at that level. A 2% margin leaves no buffer for scope creep, staffing turnover, or unexpected costs. If the math doesn't work, this is the moment to walk away — not after you've invested 400 hours in proposal writing.",
                },
              ].map(({ step, title, icon: Icon, content }) => (
                <div key={step} className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pb-6 border-b border-stone-100 last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-stone-400">STEP {step}</span>
                      <h3 className="font-bold text-stone-900">{title}</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={CheckCircle2} color="emerald" title="The 3–5 Year Lookback Rule">
              For market research, analyze the most recent 3–5 fiscal years of award data. Go back
              further and you'll be pricing to inflation-adjusted rates that no longer reflect what
              agencies actually pay. Focus on the last 2–3 years as your primary range, with 4–5
              years as context for trend direction.
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="data-sources" number="05" title="Where to Find Real Competitor Pricing Data" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Small business PTW analysis depends on public data sources. The good news is that the
              federal government publishes more pricing data than almost any other market. You just
              need to know where to look.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Database,
                  name: "USASpending.gov",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                  nameColor: "text-blue-800",
                  description:
                    "The official federal spending database. Search by agency, NAICS code, PSC code, awardee name, or contract number. Pull total obligated amounts and period-of-performance dates to back-calculate annual values. Best for: identifying the incumbent and their contract value.",
                },
                {
                  icon: Layers,
                  name: "SAM.gov Contract Data Reports",
                  color: "bg-violet-50 border-violet-200",
                  iconColor: "text-violet-600",
                  nameColor: "text-violet-800",
                  description:
                    "The successor to FPDS-NG. Contains detailed CLIN-level pricing data on many contract types. Useful for identifying competitor contract vehicles, multiple award schedules, and IDIQ task order history. Export the data to Excel for analysis.",
                },
                {
                  icon: BarChart3,
                  name: "GSA CALC (Contract-Awarded Labor Categories)",
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                  nameColor: "text-emerald-800",
                  description:
                    "Publicly available labor rate data from Schedule contracts. Search by labor category and experience level to see what other contractors charge for similar roles. Essential for professional services, IT, and staffing PTW analysis — it shows you what the market has actually accepted.",
                },
                {
                  icon: FileText,
                  name: "GSA Schedule Pricelists",
                  color: "bg-amber-50 border-amber-200",
                  iconColor: "text-amber-600",
                  nameColor: "text-amber-800",
                  description:
                    "Every GSA Schedule contractor publishes their approved labor rates publicly on GSA Advantage. Search for your competitors by company name and pull their rate cards. This is the clearest view of what they can legally charge federal customers.",
                },
                {
                  icon: Search,
                  name: "FOIA Requests",
                  color: "bg-sky-50 border-sky-200",
                  iconColor: "text-sky-600",
                  nameColor: "text-sky-800",
                  description:
                    "For high-value pursuits, file a FOIA request for the winning proposal's price volume from prior awards. Government agencies must release this information (with proprietary technical details redacted). The turnaround is 20 business days — start early.",
                },
              ].map(({ icon: Icon, name, color, iconColor, nameColor, description }) => (
                <div key={name} className={`rounded-2xl border p-5 ${color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                    <p className={`font-bold text-sm ${nameColor}`}>{name}</p>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
                Market Intelligence feature
              </Link>{" "}
              aggregates historical award data and flags when competitors win similar contracts —
              so you build your competitive range without manually hunting across five different
              government databases.
            </p>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="ptw-by-contract-type" number="06" title="PTW Strategy by Contract Type" />
            <p className="text-stone-700 leading-relaxed mb-4">
              The right PTW approach changes based on the contract structure. Here's how to adjust
              your strategy for the most common types.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 font-bold rounded-tl-lg">Contract Type</th>
                    <th className="text-left px-4 py-3 font-bold">PTW Focus</th>
                    <th className="text-left px-4 py-3 font-bold">Key Data Source</th>
                    <th className="text-left px-4 py-3 font-bold rounded-tr-lg">Risk Watch</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Firm Fixed Price (FFP)", "Total price; unit rates if CLIN-based", "USASpending prior awards", "Scope creep has no relief valve"],
                    ["Time & Materials (T&M)", "Loaded labor rates by category", "GSA CALC, Schedule pricelists", "Productivity assumptions"],
                    ["Cost-Plus (CPFF/CPAF)", "Indirect rates, fee percentage", "DCAA-submitted rate tables", "Unallowable costs can trigger disallowance"],
                    ["IDIQ Task Orders", "Individual TO price + ceiling utilization", "Prior TO awards within the IDIQ", "Task order competition is separate from IDIQ award"],
                    ["GSA Schedule BPAs", "Reduced Schedule rates", "GSA Advantage pricelists", "BPA discount depth expectations"],
                  ].map(([type, focus, source, risk], i) => (
                    <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">{type}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{focus}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{source}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="IDIQ Ordering: Price Twice">
              When you bid for a spot on an IDIQ vehicle, you're competing twice. First to get on
              the contract (where your ceiling rates matter). Then on each task order (where your
              actual proposed rates per TO matter). Winning an IDIQ position with unrealistically
              low ceiling rates will make you uncompetitive on every task order. Price your IDIQ
              ceiling rates to sustain profitable TOs, not just to win the initial award.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For more detail on the different contract structures and which to pursue,{" "}
              <Link href="/blog/federal-contract-types-explained" className="text-blue-600 hover:underline font-medium">
                see our guide to FFP, T&M, IDIQ, and cost-plus contracts
              </Link>
              .
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="07" title="Mistakes That Kill Your Pricing Strategy" />
            <p className="text-stone-700 leading-relaxed mb-4">
              These are the patterns that show up repeatedly in debrief feedback and lost bid
              analyses. Most are avoidable with a disciplined PTW process.
            </p>

            <div className="space-y-5 my-8">
              {[
                {
                  icon: XCircle,
                  title: "Pricing to the IGCE as if it's the target",
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  text: "The IGCE is the government's estimated cost — not a price ceiling you should bid up to. On competitive LPTA awards, the winning bid is frequently 15–25% below the IGCE. Bidding at the IGCE is a reliable way to lose. Use it as a benchmark to understand the government's expectations, not as a target.",
                },
                {
                  icon: XCircle,
                  title: "Failing to account for escalation on multi-year contracts",
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  text: "A 5-year contract (base plus 4 option years) needs wage escalation built in. If you bid flat labor rates for five years and annual raises or CPI increases push your actual costs up, you're locked into a loss by year three. Model in 3%–4% annual escalation for labor-heavy contracts. Options are exercised at your original price — there's no relief mechanism.",
                },
                {
                  icon: XCircle,
                  title: "Ignoring the incumbent's cost structure",
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  text: "The incumbent knows the work better than you do. They've already amortized the ramp-up costs, trained their staff, and optimized their delivery. Their cost structure is lower than yours on day one. To beat them on price, you need to know what they're charging and have a credible plan for why you can execute at or below that number.",
                },
                {
                  icon: XCircle,
                  title: "Using the same PTW approach for LPTA and best value",
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  text: "In a best value competition, bidding at the absolute low end of the competitive range can actually signal that you don't understand the work. Evaluators may question whether you've properly scoped the effort. Price competitively, but not so aggressively that your bid looks like a misunderstanding of the requirements.",
                },
                {
                  icon: XCircle,
                  title: "Not running PTW until the proposal is already drafted",
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  text: "PTW analysis should happen during capture — before the RFP drops, ideally before you've committed to bidding. If you discover your PTW ceiling is below your cost floor after you've spent three weeks writing a proposal, you've already lost. The bid/no-bid decision depends on knowing your PTW range before you start.",
                },
              ].map(({ icon: Icon, title, color, bg, text }) => (
                <div key={title} className={`rounded-2xl border p-5 ${bg}`}>
                  <div className="flex items-start gap-3 mb-2">
                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${color}`} />
                    <p className="font-bold text-stone-900 text-sm">{title}</p>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed pl-8">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              These mistakes connect directly to{" "}
              <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-600 hover:underline font-medium">
                bid/no-bid discipline
              </Link>
              . The best time to use PTW analysis is during the pursuit phase, when you still have
              the option to walk away before investing proposal resources.
            </p>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="tools-and-systems" number="08" title="Building a PTW System Without a Dedicated Analyst" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Large primes have dedicated PTW teams. You don't. But you can build a functional PTW
              process using a combination of public data, a repeatable template, and tools that
              surface competitive intelligence automatically.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 my-8">
              <p className="font-bold text-stone-900 mb-4">A Minimal PTW Toolkit for Small Businesses</p>
              <div className="space-y-3">
                {[
                  {
                    tool: "USASpending.gov",
                    use: "Historical award research, incumbent identification, contract value lookback",
                    cost: "Free",
                  },
                  {
                    tool: "SAM.gov Contract Data Reports",
                    use: "FPDS data access, competitor contract vehicle identification",
                    cost: "Free",
                  },
                  {
                    tool: "GSA CALC",
                    use: "Labor rate benchmarking for professional services and IT categories",
                    cost: "Free",
                  },
                  {
                    tool: "GSA Advantage",
                    use: "Competitor Schedule pricelists for labor categories",
                    cost: "Free",
                  },
                  {
                    tool: "CapturePilot Intelligence",
                    use: "Automated competitor tracking, award alerts, pipeline pricing data",
                    cost: "Subscription",
                  },
                  {
                    tool: "Excel / Google Sheets",
                    use: "Bottom-up cost modeling, PTW range analysis, option year escalation",
                    cost: "Minimal",
                  },
                ].map(({ tool, use, cost }) => (
                  <div
                    key={tool}
                    className="flex items-start gap-3 py-3 border-b border-stone-200 last:border-0"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium text-stone-900 text-sm">{tool}</p>
                        <span className="text-xs text-stone-400 font-medium">{cost}</span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">{use}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The process matters more than the tools. Run a PTW analysis on every pursuit above
              your Simplified Acquisition Threshold. Document your assumptions. When you get
              debriefs after wins and losses, compare your PTW model against what the winner
              actually bid. Over time, you'll calibrate your competitive intelligence to the
              agencies and NAICS codes you pursue most often.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              CapturePilot's{" "}
              <Link href="/features/proposals" className="text-blue-600 hover:underline font-medium">
                Proposals feature
              </Link>{" "}
              and{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
                Intelligence dashboard
              </Link>{" "}
              are built specifically for this kind of systematic capture work. Track your pipeline,
              log your PTW assumptions, and compare against actual awards — all in one place
              instead of across five browser tabs and a spreadsheet.
            </p>

            <Callout icon={Users} color="violet" title="When to Hire a PTW Consultant">
              For contracts above $5M, a professional PTW consultant typically costs $5,000–$20,000
              and can significantly improve your competitive positioning. The return is asymmetric:
              if a better PTW analysis gets you on the right side of a $10M award, the fee is
              trivial. For contracts below $1M, a well-run internal process using public data is
              usually sufficient.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              If you're newer to federal contracting and still building your first
              pipeline, our{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-600 hover:underline font-medium">
                guide to pipeline management
              </Link>{" "}
              explains how PTW analysis fits into a broader capture process. And if you haven't
              yet built your{" "}
              <Link href="/features/capability-statement" className="text-blue-600 hover:underline font-medium">
                capability statement
              </Link>
              , that's the first thing agencies will ask for when they see your proposal — make
              sure it's current and strong before your price volume matters.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="animate-on-scroll mt-16 mb-8">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Crosshair className="w-6 h-6 text-blue-400" />
                <p className="font-black text-xl">Start Building Your PTW Process</p>
              </div>
              <p className="text-stone-300 mb-6 leading-relaxed">
                CapturePilot tracks competitor awards, surfaces incumbent data, and logs your
                pipeline so you can build a repeatable PTW analysis without manually pulling
                five government databases. Start your 30-day free trial and run PTW on your
                next pursuit before you write a single word of the proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-stone-700 hover:bg-stone-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="animate-on-scroll border-t border-stone-100 pt-12">
            <p className="font-bold text-stone-900 mb-6">Related Articles</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/pwin-probability-of-win",
                  title: "PWin Scoring",
                  desc: "Score your probability of win before you commit to a bid",
                  tag: "Strategy",
                },
                {
                  href: "/blog/government-contract-pricing-strategies",
                  title: "Contract Pricing Strategies",
                  desc: "Broader pricing framework for government contract work",
                  tag: "Proposals",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  title: "Bid/No-Bid Framework",
                  desc: "Stop bad pursuits before they drain your BD budget",
                  tag: "Strategy",
                },
              ].map(({ href, title, desc, tag }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-2xl border border-stone-200 hover:border-blue-200 p-5 transition-all hover-lift"
                >
                  <div className="text-xs font-bold text-blue-600 mb-2">{tag}</div>
                  <p className="font-bold text-stone-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                    {title}
                  </p>
                  <p className="text-xs text-stone-500">{desc}</p>
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
