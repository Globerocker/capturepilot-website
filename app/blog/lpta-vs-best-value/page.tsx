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
  DollarSign,
  Shield,
  XCircle,
  Award,
  Scale,
  BarChart2,
  FileText,
  TrendingDown,
  Zap,
  AlertCircle,
  CheckSquare,
  Layers,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-continuum", label: "The Best Value Continuum: Two Ends of One Spectrum" },
  { id: "lpta-how-it-works", label: "How LPTA Works: Pass/Fail, Then Price Wins" },
  { id: "best-value-how-it-works", label: "How Best Value Tradeoff Works: Paying More for Better" },
  { id: "how-widespread", label: "How Widespread Is Each Approach?" },
  { id: "ndaa-restrictions", label: "The NDAA Crackdown: Where LPTA Is Now Restricted" },
  { id: "read-the-rfp", label: "How to Tell Which Approach You're Facing" },
  { id: "lpta-strategy", label: "Your Winning Strategy Under LPTA" },
  { id: "best-value-strategy", label: "Your Winning Strategy Under Best Value Tradeoff" },
  { id: "common-mistakes", label: "The Mistakes That Kill Bids Under Both Approaches" },
  { id: "intelligence-edge", label: "Getting the Intelligence Edge Before the RFP Drops" },
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

export default function LptaVsBestValuePage() {
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
            <span className="text-stone-900 font-medium">LPTA vs Best Value</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            LPTA vs Best Value:{" "}
            <span className="gradient-text">
              Which Source Selection Method to Expect and How to Win Both
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The government awards contracts using two fundamentally different scoring methods — and
            your entire bidding strategy changes depending on which one you're facing. Most
            contractors don't figure out which method applies until they're deep into proposal
            writing. By then, they've already made the wrong moves. Here's how to read the method
            early, then build the strategy that fits.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 24, 2026</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-24" ref={articleRef}>
        {/* Table of Contents */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-10 animate-on-scroll">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-stone-500" />
            <h2 className="font-bold text-stone-700 text-sm uppercase tracking-wider">
              In This Article
            </h2>
          </div>
          <ol className="space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-3 text-sm text-stone-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="text-xs font-bold text-stone-400 group-hover:text-blue-400 mt-0.5 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="the-continuum"
            number="01"
            title="The Best Value Continuum: Two Ends of One Spectrum"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The Federal Acquisition Regulation doesn't divide the world into "cheap contracts" and
            "quality contracts." Instead, FAR 15.101 describes a{" "}
            <strong>best value continuum</strong> — a spectrum of source selection approaches that
            agencies can use when competing a contract. At one end: Lowest Price Technically
            Acceptable (LPTA). At the other: the tradeoff process, commonly called Best Value.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Both sit under the same regulatory umbrella. Both are legitimate. And both require
            completely different bidding strategies from you.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The agency chooses where on that continuum to land based on what they're buying. Simple,
            commodity-like requirements — standard office supplies, routine fuel delivery, off-the-shelf
            software licenses — tend toward LPTA. Complex requirements where the quality of execution
            genuinely varies — cybersecurity consulting, engineering services, system integration — tend
            toward best value tradeoff.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The problem is that agencies don't always land where they should. A 2019 GAO study found
            DoD used LPTA for 25% of competitive contracts over $5 million — including for services
            where quality differences clearly matter. That's the policy tension that Congress has been
            trying to correct ever since.
          </p>

          {/* Visual: The Continuum */}
          <div className="bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-800 mb-4 text-center">The Best Value Continuum</h3>
            <div className="relative">
              <div className="h-3 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 rounded-full mb-4" />
              <div className="flex justify-between text-xs font-semibold">
                <div className="text-center">
                  <div className="text-blue-700 font-bold mb-1">LPTA</div>
                  <div className="text-stone-500 max-w-[120px]">Price wins if technically pass</div>
                </div>
                <div className="text-center">
                  <div className="text-indigo-700 font-bold mb-1">HYBRID</div>
                  <div className="text-stone-500 max-w-[100px]">Price + limited factors</div>
                </div>
                <div className="text-center">
                  <div className="text-violet-700 font-bold mb-1">TRADEOFF</div>
                  <div className="text-stone-500 max-w-[120px]">Quality can justify higher price</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-stone-500 text-center mt-4">
              FAR 15.101 — the agency must justify its position on the continuum
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="lpta-how-it-works"
            number="02"
            title="How LPTA Works: Pass/Fail, Then Price Wins"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Under LPTA (FAR 15.101-2), the government sets a technical floor. Your proposal either
            clears it or it doesn't. Every offeror who clears it gets a "technically acceptable"
            rating — and then price is the only remaining factor. The lowest price wins, full stop.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            There's no credit for exceeding the minimum. If the technical requirement is "must have
            three years of relevant experience" and you have fifteen years, you get the same
            pass as the company with three. Your extra experience earns you nothing in the
            evaluation — unless it lets you execute at lower cost.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Past performance under LPTA is treated the same way. If the contracting officer includes
            it as a factor at all (they don't have to), it's evaluated pass/fail: acceptable or
            unacceptable. A record of exceptional CPARS ratings wins you nothing extra over a
            contractor with merely satisfactory ones.
          </p>

          <Callout icon={Scale} color="blue" title="What Evaluators Actually Do Under LPTA">
            <p className="mb-2">
              1. Review proposals for technical compliance. Any proposal that fails a "shall"
              requirement is eliminated.
            </p>
            <p className="mb-2">
              2. Evaluate past performance on a pass/fail basis (if included as a factor at all).
            </p>
            <p>
              3. Award to the technically acceptable proposal with the lowest evaluated price.
              The process often takes weeks less than a full best value evaluation.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            The upside for you: LPTA is predictable. The winning formula is clear. You're not trying
            to outshine a competitor's technical approach — you're trying to clear the bar cleanly
            and price sharply.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The downside: margin gets squeezed hard. When every technically acceptable bidder
            competes on price alone, the race to the bottom is real. You need to know your cost
            structure cold before competing in this environment.
          </p>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="best-value-how-it-works"
            number="03"
            title="How Best Value Tradeoff Works: Paying More for Better"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Under the tradeoff process (FAR 15.101-1), the government evaluates both price and
            non-price factors — and explicitly reserves the right to pay more for a better solution.
            A contracting officer can select a proposal that's 15% higher in price if the
            technical approach, past performance, and management approach together justify it.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The RFP will lay out evaluation factors and their relative weights — or at minimum
            state that non-price factors are "more important than" or "equal to" or "less
            important than" price. That weighting statement tells you how aggressively to compete
            on price versus differentiation.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            When non-price factors are weighted significantly higher than price, technical quality
            drives the award. Your past performance narrative, key personnel qualifications, and
            the soundness of your technical approach matter enormously. A mediocre technical
            proposal at a lower price often loses to an outstanding technical at a higher price.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold">LPTA</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Best Value Tradeoff</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Technical evaluation", "Pass / Fail only", "Rated: Outstanding to Unacceptable"],
                  ["Past performance", "Pass / Fail (or omitted)", "Rated; often highly weighted"],
                  ["Price role", "Decisive tiebreaker", "One factor among many"],
                  ["Exceeding minimums", "No credit awarded", "Can earn significant rating advantage"],
                  ["Evaluation timeline", "Faster (simpler scoring)", "Slower (full source selection)"],
                  ["Price competition", "Intense — commodity pricing", "Moderated by quality competition"],
                  ["Best for agencies buying", "Defined commodities / routine services", "Complex or knowledge-intensive work"],
                ].map(([factor, lpta, bv], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">
                      {factor}
                    </td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{lpta}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{bv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-6">
            Best value tradeoff rewards investment in your proposal. The extra week you spend
            refining your technical approach and pulling in a strong past performance example
            can shift a rating from Acceptable to Good or Good to Outstanding — and that
            jump can be worth more than shaving 5% off your price.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl mb-2">Know Which Evaluations You'll Face</h3>
              <p className="text-blue-100 mb-4">
                CapturePilot's intelligence features surface evaluation method patterns by agency
                and requirement type — so you know whether to sharpen your pencil or polish your
                technical approach before the RFP even drops.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/features/intelligence"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-400 transition-colors text-sm"
                >
                  See intelligence features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="how-widespread"
            number="04"
            title="How Widespread Is Each Approach?"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            LPTA was heavily used by DoD through the mid-2010s — and it generated significant
            controversy. In fiscal year 2018, the GAO found that DoD used LPTA for roughly
            <strong> 25% of competitive contracts over $5 million</strong>. Civilian agencies
            were much more restrained: they used LPTA only <strong>7% of the time</strong> for
            the same contract size range.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Congress and the Defense Department inspector general both raised concerns that LPTA
            was being misapplied — specifically, that agencies were using it for complex services
            where technical quality genuinely varies, leading to poor performance outcomes and
            higher long-run costs.
          </p>

          {/* Stat callout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                stat: "25%",
                label: "DoD use of LPTA for contracts >$5M (FY2018)",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100",
              },
              {
                stat: "7%",
                label: "Civilian agency use of LPTA for contracts >$5M (FY2018)",
                color: "text-violet-600",
                bg: "bg-violet-50 border-violet-100",
              },
              {
                stat: "↓",
                label: "DoD LPTA usage trending down since FY2019 NDAA restrictions",
                color: "text-emerald-600",
                bg: "bg-emerald-50 border-emerald-100",
              },
            ].map(({ stat, label, color, bg }) => (
              <div key={stat} className={`rounded-2xl border p-5 text-center ${bg}`}>
                <div className={`text-4xl font-black mb-2 ${color}`}>{stat}</div>
                <div className="text-xs text-stone-600 leading-snug">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The trend has shifted. Since 2019, new rules pushed DoD toward best value evaluations
            for many service categories. For small businesses, this is genuinely good news: best
            value tradeoff lets you compete on quality and differentiation, not just on who has
            the lowest overhead structure.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            That said, LPTA is alive and well for commodity purchases — and for any contractor
            in construction, facilities, or straightforward supply categories, you'll still
            encounter it regularly.
          </p>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="ndaa-restrictions"
            number="05"
            title="The NDAA Crackdown: Where LPTA Is Now Restricted"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Starting with the FY2017 and FY2018 NDAAs, Congress told DoD to stop defaulting to
            LPTA for complex services. DoD finalized implementing regulations in October 2019 at
            DFARS 215.101-2-70. Here's what those rules actually say:
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Outright prohibited</strong> — agencies cannot use LPTA at all for:
          </p>

          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "Personal protective equipment where quality failure could result in combat casualties",
              "Aviation critical safety items",
              "Engineering and manufacturing development of major defense acquisition programs",
              "Acquisition of auditing services",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Must be avoided "to the maximum extent practicable"</strong> — agencies are
            pushed toward best value tradeoff for:
          </p>

          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "Information technology services",
              "Cybersecurity services",
              "Systems engineering and technical assistance (SETA)",
              "Advanced electronic testing",
              "Audit readiness services",
              "Health care services and records",
              "Telecommunications devices and services",
              "Other knowledge-based professional services",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Callout icon={Lightbulb} color="amber" title="What 'Avoid to the Maximum Extent Practicable' Means in Practice">
            <p>
              It doesn't mean LPTA is gone from these categories — it means the contracting
              officer must justify in writing why LPTA is appropriate before using it. If you
              see an LPTA solicitation for IT or cybersecurity services, it's worth understanding
              that the CO had to make an affirmative case for it. That also means it may be
              protestable if they can't sustain the justification.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            The FY2019 NDAA extended some of these government-wide restrictions beyond DoD.
            Civilian agencies now face limitations on LPTA use for similar categories under
            FAR updates, though civilian implementation has moved more slowly.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            If you're in IT services, cybersecurity, professional services, or any knowledge-based
            field, you should see fewer LPTA solicitations from DoD now than you did before 2019.
            If you're still seeing them frequently, that's worth paying attention to — and potentially
            worth raising in a pre-solicitation comment or industry day question.
          </p>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="read-the-rfp"
            number="06"
            title="How to Tell Which Approach You're Facing"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The source selection method is always disclosed in the solicitation — you just need to
            know where to look. Section M (Evaluation Factors for Award) is your primary signal.
            Section L (Instructions, Conditions, and Notices) tells you what to submit. Read them
            together.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Under LPTA, Section M will use specific language: "technically acceptable" or "pass/fail."
            You'll see rating definitions like "Acceptable / Unacceptable" rather than a graduated
            scale. Past performance may say something like "No rating factor; evaluated on a
            pass/fail basis." The price evaluation section will say the award will go to "the lowest
            priced, technically acceptable offer."
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Under best value tradeoff, Section M will define a graduated rating scale —
            Outstanding, Good, Acceptable, Marginal, Unacceptable — and will state how factors
            are weighted relative to each other. The language will include something like "the
            Government may pay a premium for a higher-rated technical proposal" or "non-price
            factors are more important than price."
          </p>

          {/* Reading guide */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-800 mb-4">Quick Reference: Section M Tell-Signs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="font-semibold text-sm text-stone-700">LPTA Indicators</span>
                </div>
                <ul className="space-y-1.5 text-sm text-stone-600">
                  {[
                    '"Technically acceptable" rating language',
                    '"Pass/Fail" for any evaluation factor',
                    '"Acceptable / Unacceptable" only definitions',
                    '"Award to lowest priced acceptable offer"',
                    'Past performance listed as "not evaluated"',
                    'No mention of quality premium or tradeoff',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-1.5">
                      <CheckSquare className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-violet-500" />
                  <span className="font-semibold text-sm text-stone-700">Best Value Tradeoff Indicators</span>
                </div>
                <ul className="space-y-1.5 text-sm text-stone-600">
                  {[
                    'Graduated scale: Outstanding / Good / Acceptable',
                    'Factor weights stated (e.g., "technical is more important than price")',
                    'Past performance rated on performance/confidence scale',
                    '"Government may pay a premium for higher-rated proposals"',
                    'Integrated assessment or source selection authority mentioned',
                    'Separate evaluation teams for technical, past performance, price',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-1.5">
                      <CheckSquare className="w-3.5 h-3.5 text-violet-500 mt-0.5 flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-6">
            If you can get early access to a draft RFP or a sources sought notice, you can often
            read the evaluation approach before it's finalized. Sources sought rarely spell out
            the evaluation method, but industry day presentations often do. Attending industry days
            — even for opportunities you're uncertain about — pays off for this reason alone. See
            our guide to{" "}
            <Link href="/blog/sources-sought-notice" className="text-blue-600 hover:underline font-medium">
              responding to sources sought notices
            </Link>{" "}
            for how to get into those rooms.
          </p>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="lpta-strategy"
            number="07"
            title="Your Winning Strategy Under LPTA"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            LPTA rewards a very specific discipline: meet every requirement, miss nothing, then
            price as sharp as you sustainably can. Most companies lose LPTA bids in one of two
            ways — they get knocked out on technical (a "shall" requirement they overlooked) or
            they price high enough that a leaner competitor edges them out.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>On the technical side:</strong> Build a compliance matrix before you write a
            word. Every "shall" and "must" in the Statement of Work gets its own row. Your
            proposal response maps to each one explicitly. Evaluators working on LPTA solicitations
            use compliance checklists — make their job easy and your chances go up. See our full
            guide to{" "}
            <Link href="/blog/government-proposal-compliance-matrix" className="text-blue-600 hover:underline font-medium">
              building a compliance matrix
            </Link>{" "}
            for the exact structure to use.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>On pricing:</strong> Your real work is cost modeling. You need to understand
            what the requirement actually costs to deliver at your quality level, and then find
            every legitimate efficiency that lets you price below what competitors will bid.
            That's not about slashing quality — it's about knowing your cost structure better
            than the competition knows theirs.
          </p>

          <div className="bg-stone-900 text-white rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-lg mb-4 text-white">LPTA Winning Checklist</h3>
            <div className="space-y-3">
              {[
                {
                  step: "Map every 'shall' requirement before writing",
                  detail: "An overlooked mandatory requirement = automatic elimination",
                },
                {
                  step: "Write to the minimum, not the maximum",
                  detail: "Extra content that doesn't address requirements wastes evaluator time and can introduce compliance risks",
                },
                {
                  step: "Price your actual cost structure, not the market guess",
                  detail: "Understand your overhead, fringe, and G&A rates cold before modeling",
                },
                {
                  step: "Check price realism thresholds",
                  detail: "Some LPTAs include price realism analysis — bidding unrealistically low can get you eliminated",
                },
                {
                  step: "Verify past performance acceptability early",
                  detail: "If past performance is pass/fail, confirm your references are ready to verify before proposal due date",
                },
                {
                  step: "Watch for bid bond or performance bond requirements",
                  detail: "Construction LPTAs often require bonding — not having it disqualifies you",
                },
              ].map(({ step, detail }) => (
                <div key={step} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">{step}</div>
                    <div className="text-stone-400 text-xs mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-6">
            One often-overlooked LPTA advantage for small businesses: set-aside LPTA contracts
            remove the large business competition entirely. In a small business set-aside LPTA
            environment, you're competing against peers with similar cost structures. Understanding
            the small business competitive landscape in your NAICS code matters as much as your
            absolute cost efficiency. Use{" "}
            <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
              competitive intelligence
            </Link>{" "}
            to understand who else bids in your categories.
          </p>
        </div>

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="best-value-strategy"
            number="08"
            title="Your Winning Strategy Under Best Value Tradeoff"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The best value tradeoff environment rewards differentiation. Your technical approach,
            key personnel, management plan, and past performance aren't compliance boxes — they're
            your competitive weapons. The question to answer for every proposal section: what does
            the evaluator need to read to rate this Outstanding instead of Good?
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Start with the evaluation factors and their weights. If the RFP says "Technical
            Approach is significantly more important than Past Performance, which is significantly
            more important than Price," that's a clear signal: price matters least. Write a
            technically outstanding proposal, and don't undercut your margins chasing a few
            percentage points.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            If the RFP says factors are "equal in importance," you need to compete on all three
            simultaneously — strong technical, strong past performance, competitive price. The
            margin for error is smaller.
          </p>

          {/* Strategy steps */}
          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                num: "01",
                title: "Reverse-engineer the rating definitions",
                body: 'Section M will define what Outstanding looks like. Use those definitions as your writing targets. If Outstanding requires "multiple strengths with no weaknesses and minimal significant weaknesses," every section needs to identify explicit strengths with specificity.',
              },
              {
                num: "02",
                title: "Make your past performance work hard",
                body: "In best value evaluations, a Substantial Confidence past performance rating is a major advantage. Map your references to the specific work categories in this solicitation. A project that demonstrates directly relevant experience beats a larger contract in an adjacent space.",
              },
              {
                num: "03",
                title: "Price in the competitive zone, not at the floor",
                body: "Contrary to LPTA instincts, pricing too low under best value can hurt you. Some agencies perform price realism analysis and flag suspiciously low proposals as risky. Price at a level that reflects your excellent solution — not just below the expected incumbent.",
              },
              {
                num: "04",
                title: "Propose your best key personnel",
                body: "If key personnel are an evaluation factor, the individuals you name will be evaluated — their resumes read, their qualifications scored. Don't propose bench strength if your A-team is still available.",
              },
              {
                num: "05",
                title: "Address discriminators explicitly",
                body: "Knowing what the incumbent has done and where they're vulnerable (see our guide to beating the incumbent) lets you write a proposal that highlights where you're stronger without mentioning them by name.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100 hover-lift">
                <div className="text-2xl font-black text-stone-200 flex-shrink-0 w-10">{num}</div>
                <div>
                  <div className="font-bold text-stone-800 mb-1">{title}</div>
                  <div className="text-stone-600 text-sm leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The{" "}
            <Link href="/blog/technical-volume-government-proposal" className="text-blue-600 hover:underline font-medium">
              technical volume
            </Link>{" "}
            is where best value competitions are typically won or lost. A generic technical
            approach that describes what you'll do without demonstrating how you'll do it
            specifically for this agency's problem will land at Acceptable at best. Evaluators
            reading dozens of proposals can spot a template reuse from the first paragraph.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Use our guide to{" "}
            <Link href="/blog/past-performance-government-contracts" className="text-blue-600 hover:underline font-medium">
              building your past performance record
            </Link>{" "}
            and{" "}
            <Link href="/blog/cpars-contractor-performance" className="text-blue-600 hover:underline font-medium">
              understanding CPARS ratings
            </Link>{" "}
            to see how the past performance element of best value evaluations actually gets scored.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-8 my-10 animate-on-scroll">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl text-emerald-900 mb-2">
                Start Your 30-Day Free Trial
              </h3>
              <p className="text-emerald-800 mb-4 text-sm">
                CapturePilot surfaces the evaluation method, incumbent data, and historical award
                patterns for opportunities in your pipeline — so you know whether to compete on
                price or quality before you commit a dollar to proposal development.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 9 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="common-mistakes"
            number="09"
            title="The Mistakes That Kill Bids Under Both Approaches"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            After talking with contractors who've lost both LPTA and best value competitions,
            certain patterns come up repeatedly. Some apply to both methods.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
            {[
              {
                icon: XCircle,
                color: "red",
                title: "Not reading Section M until proposal writing starts",
                body: "Evaluation criteria should shape your entire pursuit strategy, not just your writing. Read Section M the day the RFP drops.",
              },
              {
                icon: XCircle,
                color: "red",
                title: "Treating LPTA like a best value competition",
                body: "Extra content and elaboration in an LPTA proposal doesn't earn points. It creates compliance risk and wastes your time.",
              },
              {
                icon: XCircle,
                color: "red",
                title: "Treating best value like an LPTA competition",
                body: "Writing a minimal technically acceptable proposal and pricing low loses best value bids consistently to contractors who invest in quality.",
              },
              {
                icon: XCircle,
                color: "red",
                title: "Ignoring the price realism trap",
                body: "Many solicitations — even LPTA ones — contain price realism provisions. Prices too far below the government estimate can trigger downgrade or elimination.",
              },
              {
                icon: XCircle,
                color: "red",
                title: "Using the same proposal template for both",
                body: "A proposal library is valuable. Using the same boilerplate for LPTA and best value without adapting it is a structural problem that compounds across every bid.",
              },
              {
                icon: XCircle,
                color: "red",
                title: "Bidding LPTA in a market where you can't win on price",
                body: "If your overhead and rate structure put you above what lean competitors can price, no amount of technical polish saves you in LPTA. Know your cost position first.",
              },
            ].map(({ icon: Icon, color, title, body }) => (
              <div key={title} className="bg-red-50 border border-red-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-red-500" />
                  <div className="font-bold text-red-800 text-sm">{title}</div>
                </div>
                <div className="text-red-700 text-xs leading-relaxed">{body}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The costliest mistake runs deeper than any of these: bidding without knowing which
            method applies. When you submit a proposal without a clear read of the evaluation
            approach, you're writing blind. Even a few hours of pre-proposal research can tell
            you whether this is a price competition or a quality competition — and that changes
            everything.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            For a full framework on making the go/no-bid call — including how evaluation method
            affects your pursuit decision — see our{" "}
            <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-600 hover:underline font-medium">
              bid/no-bid decision framework
            </Link>
            .
          </p>
        </div>

        {/* Section 10 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="intelligence-edge"
            number="10"
            title="Getting the Intelligence Edge Before the RFP Drops"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The contractors who consistently win — in both LPTA and best value environments —
            don't wait for the RFP to start forming a strategy. They track solicitation patterns,
            study prior award data, and know the agency's source selection history before the
            solicitation is even posted.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Prior contract awards for the same requirement (often visible on USASpending.gov)
            tell you a lot. If the last three awards went to the lowest-priced bidder, the agency
            is probably running LPTA even if they haven't said so yet. If the last three awards
            went to the same incumbent at a premium price, the agency values quality and
            consistency — almost certainly a best value approach.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Sources sought notices and draft RFPs sometimes signal the evaluation approach before
            it's finalized. Comment periods on draft solicitations let you ask directly — or
            suggest the evaluation method that favors your strengths. Agencies do adjust based
            on substantive industry feedback, particularly when contractors can cite NDAA
            restrictions as a basis for requesting a switch from LPTA to best value.
          </p>

          <Callout icon={Target} color="sky" title="The Pre-RFP Intelligence Checklist">
            <ul className="space-y-1.5">
              {[
                "Look up prior awards for this requirement on USASpending.gov — who won, at what price",
                "Search SAM.gov for the most recent solicitation for this requirement and read its Section M",
                "Check if the agency has a Procurement Forecast that signals evaluation approach",
                "Attend industry days and pre-solicitation conferences — agencies often reveal method",
                "Review the incumbent's CPARS ratings if they're a known past awardee",
                "Check if the NAICS code or dollar value has changed from the prior award — both can signal a method change",
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-sky-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            CapturePilot's{" "}
            <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
              market intelligence features
            </Link>{" "}
            pull together prior award data, incumbent history, and agency-level patterns so you
            don't have to stitch it together manually. When an opportunity hits your{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
              pipeline
            </Link>
            , you can see the historical evaluation context alongside the opportunity details.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Understanding LPTA vs best value isn't just academic. It determines how you price,
            how you write, how much you invest in proposal development, and whether you bid at all.
            Get your evaluation method read right, and you're already ahead of most of the field.
          </p>
        </div>

        {/* Conclusion CTA */}
        <div className="bg-gradient-to-r from-stone-900 to-blue-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Layers className="w-8 h-8 flex-shrink-0 mt-1 text-blue-300" />
            <div>
              <h3 className="font-black text-xl mb-2">
                Know Your Evaluation Before You Write a Word
              </h3>
              <p className="text-stone-300 mb-4 text-sm">
                CapturePilot surfaces prior award data, incumbent history, and evaluation patterns
                for every opportunity in your pipeline. Book a strategy call to see how it works
                for your contract categories.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-lg hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/features/proposals"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-500 transition-colors text-sm"
                >
                  See proposal features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Keep Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/price-to-win-government-contracts",
                title: "Price-to-Win Analysis: How to Calculate the Right Bid Price",
                category: "Proposals",
              },
              {
                href: "/blog/technical-volume-government-proposal",
                title: "Writing a Winning Technical Volume for Government Proposals",
                category: "Proposals",
              },
              {
                href: "/blog/past-performance-government-contracts",
                title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
                category: "Proposals",
              },
              {
                href: "/blog/bid-no-bid-decision-framework",
                title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits",
                category: "Strategy",
              },
            ].map(({ href, title, category }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-stone-50 hover:bg-blue-50 border border-stone-100 hover:border-blue-200 rounded-xl p-5 transition-all hover-lift"
              >
                <div className="text-xs font-semibold text-blue-600 mb-2">{category}</div>
                <div className="text-sm font-semibold text-stone-800 group-hover:text-blue-700 leading-snug">
                  {title}
                </div>
                <div className="flex items-center gap-1 mt-3 text-xs text-blue-500 font-medium">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
