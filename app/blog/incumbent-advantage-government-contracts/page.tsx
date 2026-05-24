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
  Shield,
  BarChart3,
  Users,
  Zap,
  Lock,
  Unlock,
  TrendingDown,
  Activity,
  DollarSign,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "advantage-real", label: "The Incumbent Advantage Is Real — But Beatable" },
  { id: "vulnerability-signals", label: "Reading the Signals: When an Incumbent Is Vulnerable" },
  { id: "intelligence-work", label: "Intelligence Work: Know the Incumbent Better Than They Do" },
  { id: "early-positioning", label: "Getting to the Agency 18 Months Before the RFP" },
  { id: "proposal-writing", label: "Writing the Proposal That Makes the Switch Worth It" },
  { id: "price-to-win", label: "Price-to-Win: Undercutting Without Bleeding Out" },
  { id: "transition-plan", label: "Your Transition Plan: The Underused Differentiator" },
  { id: "mistakes", label: "Mistakes That Hand the Incumbent the Win Back" },
  { id: "recompete-pipeline", label: "Building a Recompete Pipeline" },
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

export default function IncumbentAdvantagePage() {
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
            <span className="text-stone-900 font-medium">Beating the Incumbent</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Beat the Incumbent on{" "}
            <span className="gradient-text">
              Government Contracts
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Incumbents win roughly 70–80% of recompetes. That number looks scary until you do the
            math: somewhere between 20 and 30 percent of sitting contractors lose their own
            contracts every cycle. That's not a wall — it's a market. Here's how to take a piece
            of it.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 24, 2026</span>
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
            <SectionHeading id="advantage-real" number="01" title="The Incumbent Advantage Is Real — But Beatable" />

            <p className="text-stone-700 leading-relaxed">
              Incumbents win roughly 70–80% of federal recompetes. That number gets repeated so
              often in govcon circles that it functions as a deterrent — a reason to skip the
              pursuit and look for net-new opportunities instead. But the statistic conceals
              something important: the average challenger who does pursue a recompete wins
              about 38% of the time, compared to just 12% on fully competitive new solicitations.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Recompetes are hard. They're also three times more winnable than a cold new bid.
              The contractors who consistently displace incumbents aren't lucky — they're disciplined
              about which recompetes to pursue, and they show up with a specific kind of preparation
              that most challengers skip entirely.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Lock,
                  stat: "70–80%",
                  label: "Incumbent recompete win rate",
                  desc: "Across federal agencies, incumbents hold their contracts most of the time — but not always.",
                },
                {
                  icon: Unlock,
                  stat: "38%",
                  label: "Challenger win rate on recompetes",
                  desc: "Three times higher than the 12% win rate on net-new competitive solicitations.",
                },
                {
                  icon: DollarSign,
                  stat: "$180B+",
                  label: "Annual recompete value",
                  desc: "Roughly 85,000 federal contracts recompete every 18 months — all of it trackable.",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <div className="font-black text-2xl text-stone-900 mb-1">{item.stat}</div>
                  <div className="font-semibold text-stone-700 text-sm mb-1">{item.label}</div>
                  <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The incumbent advantage comes from three things: the agency already knows them, the
              cost of switching feels high, and the incumbent has lived inside the contract long
              enough to understand the requirement better than anyone else. Your job as a challenger
              is to neutralize each of those advantages — not all at once, but systematically,
              over the months before the RFP drops.
            </p>

            <p className="text-stone-700 leading-relaxed">
              What you're really competing against isn't the incumbent's proposal. It's the agency's
              inertia. They've already made one acquisition decision that put the current contractor
              in place. Making another one means work, risk, and responsibility. You need to make
              staying feel riskier than switching.
            </p>

            <Callout icon={Activity} color="sky" title="FY2026 context: a disrupted market">
              <p>
                Through the first months of FY2026, over{" "}
                <strong>$87 billion in federal contracts</strong> have been cancelled, terminated,
                or significantly deobligated — a 340% increase over the same period in FY2025.
                While DOGE-related cuts have created instability, they've also forced contract
                restructuring across agencies. Many of those restructured contracts represent
                recompete opportunities where no incumbent relationship is locked in yet. The
                disruption creates openings that wouldn't exist in a stable spending environment.
              </p>
            </Callout>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="vulnerability-signals" number="02" title="Reading the Signals: When an Incumbent Is Vulnerable" />

            <p className="text-stone-700 leading-relaxed">
              Not every recompete is worth chasing. Pursuing an entrenched incumbent with
              spotless CPARS ratings, a long agency relationship, and a proposal team that's
              been preparing for 18 months is a low-percentage bet even for a strong challenger.
              The recompetes worth targeting are the ones where the incumbent has cracked.
            </p>

            <p className="text-stone-700 leading-relaxed">
              These are the signals that matter most:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  signal: "Bridge contract issued instead of option exercise",
                  strength: "Very High",
                  color: "bg-red-100 text-red-700 border-red-200",
                  explanation:
                    "When an agency issues a short-term extension (typically 6–12 months) rather than exercising a contract option, it almost always means the agency is unhappy and needs time to run a new competition. Bridge contracts are the single strongest predictor of incumbent displacement. Find these in SAM.gov contract modification data.",
                },
                {
                  signal: "Option years not exercised in full",
                  strength: "High",
                  color: "bg-orange-100 text-orange-700 border-orange-200",
                  explanation:
                    "If a 5-year IDIQ has been running for 3 years and the agency chose not to exercise the remaining options, someone is dissatisfied. Look up the original contract in FPDS through SAM.gov to check the base and option structure.",
                },
                {
                  signal: "Key personnel departures",
                  strength: "High",
                  color: "bg-orange-100 text-orange-700 border-orange-200",
                  explanation:
                    "The people the agency built a relationship with are gone. LinkedIn is useful here. If the program manager, technical lead, or account manager who built the relationship has left the incumbent company, that relationship advantage largely disappears.",
                },
                {
                  signal: "Agency mission changes or new leadership",
                  strength: "Medium",
                  color: "bg-amber-100 text-amber-700 border-amber-200",
                  explanation:
                    "A new agency head or program director often brings different priorities and vendors. If the internal champion who awarded the original contract has left the agency, the incumbent loses their most valuable advocate.",
                },
                {
                  signal: "Protest history on the current contract",
                  strength: "Medium",
                  color: "bg-amber-100 text-amber-700 border-amber-200",
                  explanation:
                    "Contract protests — especially sustained protests — indicate the original award may have been legally shaky or politically controversial. The agency may want a clean start. GAO protest decisions are public record.",
                },
                {
                  signal: "Incumbent growing through acquisition",
                  strength: "Medium",
                  color: "bg-amber-100 text-amber-700 border-amber-200",
                  explanation:
                    "When a prime gets acquired, agencies often see management disruption, pricing changes, and loss of the specific people they worked with. The 'new' company at the table is one the agency didn't choose.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover-lift">
                  <div className="flex items-center justify-between gap-4 px-5 py-3 bg-stone-50 border-b border-stone-200">
                    <p className="font-bold text-stone-800 text-sm">{item.signal}</p>
                    <span className={`text-xs font-bold border px-2.5 py-0.5 rounded-full shrink-0 ${item.color}`}>
                      {item.strength}
                    </span>
                  </div>
                  <p className="px-5 py-4 text-sm text-stone-600 leading-relaxed">{item.explanation}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              None of these signals guarantee a win. But they change the calculus. A recompete
              where you've spotted two or three of these signals is worth serious pursuit resources.
              A recompete with none of them — where the incumbent is stable, performing well, and
              deeply embedded — is a harder case to make for investing proposal time and budget.
            </p>

            <Callout icon={Search} color="amber" title="How to research an incumbent">
              <p>
                Start with SAM.gov: search the agency and contract type to find the original
                award, then look up contract modifications to see option exercises, period
                extensions, and ceiling changes. Use USASpending.gov to see the full award
                history and any sub-award data. Search the incumbent company name in the
                Federal Procurement Data System (now integrated into SAM.gov) to pull their
                contract performance history. CPARS ratings aren't public, but agency contracting
                officers will confirm verbally whether performance has been satisfactory.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="intelligence-work" number="03" title="Intelligence Work: Know the Incumbent Better Than They Know Themselves" />

            <p className="text-stone-700 leading-relaxed">
              The contractors who beat incumbents aren't proposing blindly. They've spent weeks
              building a picture of the current contract — what it costs, where it's underperforming,
              and what the agency actually wants versus what it's been getting. That intelligence
              drives everything: your price, your solution, your staffing, and your differentiators.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Here's where to look:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Pull the original contract and all modifications",
                  body: "Find the original contract award in SAM.gov contract data reports. Download every modification. Mods reveal price adjustments, period-of-performance changes, scope creep, and disputes. A contract that's been modified 40 times in 3 years tells you the statement of work was inadequate — and the agency is likely frustrated.",
                },
                {
                  step: "02",
                  title: "Calculate the incumbent's fully-loaded price",
                  body: "Divide total obligated dollars by period of performance to get an annual run rate. Cross-reference with NAICS-specific labor rates in the GSA CALC tool to estimate labor cost as a percentage of total. Now you have a starting point for your Price-to-Win analysis.",
                },
                {
                  step: "03",
                  title: "Read the incumbent's past proposals (when public)",
                  body: "Under the Freedom of Information Act, winning proposals become available after contract performance begins. Some agencies post them proactively on their acquisition websites. The incumbent's prior proposal reveals their technical approach, staffing model, and key personnel claims — all of which may have drifted from reality.",
                },
                {
                  step: "04",
                  title: "Search news and LinkedIn for performance clues",
                  body: "Look for industry press on the incumbent's work with this agency. Check LinkedIn for staff departures. Read any Congressional testimony, IG reports, or GAO reports that reference the program. Government programs leave paper trails.",
                },
                {
                  step: "05",
                  title: "Talk to people who've worked on or near the contract",
                  body: "Former government employees and consultants who've worked in the agency are often willing to share general observations. The Small Business Administration's Procurement Center Representatives (PCRs) are another resource — they know agency buying patterns and can flag frustrations. Keep conversations within ethical and legal boundaries.",
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
              CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                market intelligence tools
              </Link>{" "}
              automate much of this research — pulling award histories, contract modifications,
              and agency spending patterns so you're not manually cross-referencing SAM.gov and
              USASpending.gov for every pursuit. You focus on analysis; the platform does the
              data gathering.
            </p>

            <Callout icon={Eye} color="blue" title="What you're looking for">
              <p>
                You're not just looking for weaknesses to attack. You're building a model of what
                the agency actually needs versus what the SOW says it needs. After years on a
                contract, the real requirements and the documented requirements often diverge.
                Your proposal can explicitly address that gap — which signals to the agency that
                you've done your homework and understand the program at a level the incumbent
                takes for granted.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Know which recompetes are worth chasing
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  CapturePilot tracks expiring contracts, flags vulnerability signals, and pulls
                  incumbent spending data — so you can qualify pursuits before you invest proposal
                  resources.
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
            <SectionHeading id="early-positioning" number="04" title="Getting to the Agency 18 Months Before the RFP" />

            <p className="text-stone-700 leading-relaxed">
              The most important window to influence a recompete closes before the solicitation
              is ever posted. The contractors who consistently displace incumbents start their
              positioning 12 to 18 months before an RFP appears on SAM.gov. By the time the
              solicitation drops, they already have a relationship with the contracting officer,
              an understanding of what the agency wants to change, and a technical approach
              shaped around those specific needs.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The incumbent has this relationship by default. You have to build it deliberately.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                The 18-month pre-positioning playbook
              </h3>
              <div className="space-y-3">
                {[
                  {
                    timeframe: "18–12 months out",
                    action: "Respond to Sources Sought or RFI notices on the contract. Introduce your company's capabilities specifically in the context of this program area.",
                  },
                  {
                    timeframe: "15–10 months out",
                    action: "Request a capability briefing with the agency's OSDBU (Office of Small and Disadvantaged Business Utilization) and the relevant program office. These meetings are standard practice and don't give you an unfair advantage — they just give you information.",
                  },
                  {
                    timeframe: "12–8 months out",
                    action: "Attend any agency-hosted industry days, acquisition planning workshops, or conference panels where this program is discussed. Meet the contracting officer in person.",
                  },
                  {
                    timeframe: "9–6 months out",
                    action: "Submit thoughtful comments on any draft RFP or Statement of Work if the agency releases one for public input. Address specific gaps or ambiguities — this is where you shape the requirement without crossing ethical lines.",
                  },
                  {
                    timeframe: "6–3 months out",
                    action: "Finalize your technical approach, key personnel selections, and teaming structure. Don't start this phase cold — all the intelligence you gathered in the previous steps should be driving these decisions.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-100">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full shrink-0 mt-0.5 whitespace-nowrap">
                      {item.timeframe}
                    </span>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              For a detailed guide on responding to Sources Sought notices — the main pre-solicitation
              engagement tool — see our{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline font-medium">
                Sources Sought guide
              </Link>
              . And if you're new to the concept of building pre-award relationships into your
              pipeline, the{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 hover:underline font-medium">
                capture management process
              </Link>{" "}
              covers the full framework for turning early intelligence into won contracts.
            </p>

            <Callout icon={Users} color="violet" title="Don't underestimate teaming">
              <p>
                If you don't have the past performance or bandwidth to prime a large recompete,
                teaming with a company that does can get you onto a pursuit you'd otherwise skip.
                The same logic runs in reverse — a large prime that doesn't have the small business
                set-aside certification or the local presence you have needs you. Start teaming
                conversations early; the best partners on a recompete get locked up 9 to 12 months
                before the RFP. See our guide on{" "}
                <Link href="/blog/government-contract-teaming-agreement" className="text-blue-700 hover:underline font-medium">
                  government contract teaming agreements
                </Link>{" "}
                for structure and what to watch out for.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="proposal-writing" number="05" title="Writing the Proposal That Makes the Switch Worth It" />

            <p className="text-stone-700 leading-relaxed">
              A generic challenger proposal says: "We can do what the incumbent does, but we're
              better." That's not enough to overcome agency inertia. The proposal that wins
              a recompete says something different: "We understand exactly where this program
              has been, we know what hasn't worked, and here is the specific plan to make the
              next contract better than the last one."
            </p>

            <p className="text-stone-700 leading-relaxed">
              That framing requires three things the incumbent can't match by definition:
              objectivity about what went wrong, a fresh approach to the problems the agency
              has been living with, and the credibility to pull it off.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  num: "1",
                  title: "Acknowledge the incumbent's strengths — then pivot",
                  items: [
                    "Never attack the incumbent directly — contracting officers don't like it and it reads as desperation",
                    "Acknowledge continuity of service where it's genuinely valued by the agency",
                    "Pivot to what you add: 'Building on the program's established foundation, our approach addresses...'",
                    "Frame improvements as enhancements to mission delivery, not criticisms of the prior contractor",
                  ],
                },
                {
                  num: "2",
                  title: "Map your past performance to the exact requirement",
                  items: [
                    "Pull out every contract that matches this requirement — scope, scale, agency type, NAICS code",
                    "For recompetes, same-agency past performance is gold; show you've worked with this agency or similar agencies before",
                    "Include specific metrics: cost savings achieved, SLA performance rates, personnel retention rates, on-time delivery percentages",
                    "If you're a small business displacing a large prime, point to other examples where your size was the asset, not the liability",
                  ],
                },
                {
                  num: "3",
                  title: "Name the key personnel and keep them",
                  items: [
                    "The agency has worked with the incumbent's team; they know what continuity feels like",
                    "Your key personnel section needs to show real humans with real track records — bios, clearances, and certifications if applicable",
                    "Commit to what FAR calls 'substitution limitations': the agency wants to know the people named in the proposal will actually show up",
                    "If you can hire or tram the incumbent's top performers who want to move, that's a legitimate and powerful differentiator",
                  ],
                },
                {
                  num: "4",
                  title: "Address the evaluation criteria explicitly",
                  items: [
                    "Use the exact language of the evaluation factors — evaluators are looking for compliance first",
                    "Build a compliance matrix to ensure every requirement is addressed; read our guide on",
                    "Use headings that mirror the evaluation structure so nothing is buried or missed",
                    "Don't assume the evaluator will connect the dots — spell out every connection between your approach and the stated criteria",
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
                        {section.num === "4" && i === 1 ? (
                          <span>
                            {item}{" "}
                            <Link href="/blog/government-proposal-compliance-matrix" className="text-blue-700 underline font-medium">
                              compliance matrices
                            </Link>
                          </span>
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The technical volume is where challengers most often win or lose. CapturePilot's{" "}
              <Link href="/features/proposals" className="text-blue-700 hover:underline font-medium">
                proposal tools
              </Link>{" "}
              help you build compliance matrices, track requirements coverage, and manage the
              document workflow so nothing falls through the cracks on a complex recompete.
            </p>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="price-to-win" number="06" title="Price-to-Win: Undercutting Without Bleeding Out" />

            <p className="text-stone-700 leading-relaxed">
              Price-to-Win (PTW) is competitive pricing analysis. You're not asking "what does
              this work cost us?" You're asking "what price will win the contract, and can we
              deliver profitably at that price?" Those are different questions with different
              answers.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For a recompete, you have the incumbent's pricing as your baseline. The incumbent
              has been operating under a contract with known obligated dollars and a known period
              of performance. That gives you an annual run rate to work from. Here's how to use it:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tl-lg">
                      Evaluation Method
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      What Price Wins
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tr-lg">
                      PTW Strategy
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      method: "LPTA (Lowest Price Technically Acceptable)",
                      wins: "Lowest price that meets all technical requirements",
                      strategy: "Price 5–15% below estimated incumbent run rate. Margins are thin — nail your cost model first.",
                    },
                    {
                      method: "Best Value (Technical/Price Tradeoff)",
                      wins: "The combination of technical strength and price the evaluators score highest overall",
                      strategy: "Price within 10% of estimated competition. Invest heavily in technical differentiators that justify premium positioning.",
                    },
                    {
                      method: "BVTO with Technical Dominance",
                      wins: "A technically superior proposal can win at a higher price if the tradeoff is documented",
                      strategy: "Price at or slightly above incumbent if your solution is genuinely transformative. Rare — requires extraordinary technical differentiation.",
                    },
                    {
                      method: "8(a) Sole Source (under $4.5M services / $7.5M manufacturing)",
                      wins: "Negotiated price within a fair market range",
                      strategy: "Price close to market rate. Sole-source means no direct competitor, but FAR requires fair and reasonable pricing.",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border border-stone-200 font-semibold text-stone-800">
                        {row.method}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">{row.wins}</td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">{row.strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              To build a defensible PTW model, use publicly available data. SAM.gov contract
              data reports give you the incumbent's obligated amounts by fiscal year. The GSA
              CALC tool provides actual awarded labor rates on GSA MAS contracts, filterable by
              labor category, education level, experience, and contract year — a direct benchmark
              for professional services pricing. For construction and facility maintenance, Davis-Bacon
              wage determinations set floor rates that give you a hard cost baseline.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Don't win the contract you can't afford to perform">
              <p>
                Aggressive underpricing wins contracts and kills companies. Before committing to
                a PTW number, build your cost model bottom-up: direct labor by labor category,
                fully-loaded fringe and overhead, materials and subcontractor costs, G&amp;A,
                and fee. Know your walk-away floor — the price below which you cannot perform
                without losing money on every task order. A contract at a 2% margin with 90 days
                of negative cash flow before first payment is not a win. For a deeper guide,
                read our post on{" "}
                <Link href="/blog/government-contract-pricing-strategies" className="text-blue-700 underline font-medium">
                  government contract pricing strategies
                </Link>
                .
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-900 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 shrink-0 mt-1 text-blue-400" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Check your certifications before you bid
                </h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Set-aside eligibility affects whether you're competing in a pool of 5 or 500.
                  CapturePilot's Quick Checker verifies your SDVOSB, 8(a), WOSB, and HUBZone
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

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="transition-plan" number="07" title="Your Transition Plan: The Underused Differentiator" />

            <p className="text-stone-700 leading-relaxed">
              Most challengers treat the transition plan as a checkbox. It gets three pages at
              the back of the technical volume, promises a 30-day transition period, and lists
              a few generic activities. Evaluators read it in 90 seconds and move on.
            </p>

            <p className="text-stone-700 leading-relaxed">
              This is a mistake. The transition plan is where the agency's biggest fear about
              switching contractors lives. They're worried about service disruption, lost
              institutional knowledge, and the political risk of a visible problem in the first
              90 days. A detailed, credible transition plan directly addresses each of those fears.
              A vague one amplifies them.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                What a strong transition plan actually contains
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Day-by-day schedule for the first 30 days",
                    body: "Not a milestone list — an actual schedule. What happens on day 1, day 3, day 7, day 15, day 30. Who is responsible for each activity. What defines completion.",
                  },
                  {
                    title: "Personnel onboarding plan with specific names",
                    body: "Name the transition lead. Name the backup. Show security clearance timelines for cleared positions. Commit to having specific people in specific seats before contract performance begins.",
                  },
                  {
                    title: "Knowledge transfer methodology",
                    body: "Describe exactly how you will capture institutional knowledge from the incumbent: documentation reviews, shadow periods, structured debriefs, system access requests. Don't hand-wave this.",
                  },
                  {
                    title: "Contingency plan for delayed incumbent cooperation",
                    body: "Incumbents often drag their feet during transition — especially when they lost the contract. Show the agency you've thought through how to operate if handoff materials are late, incomplete, or withheld.",
                  },
                  {
                    title: "SLA continuity commitments during transition",
                    body: "State explicitly that performance standards will be maintained from day one of transition, not day 31. If necessary, propose a parallel operations period where you ramp up while the incumbent ramps down.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-100">
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{item.title}</p>
                      <p className="text-stone-500 text-sm mt-0.5 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Agencies have been burned by botched transitions. A program director who's been
              through a painful contractor changeover remembers it. Show them you've thought
              through the failure modes they've lived before, and you remove the largest source
              of inertia that keeps incumbents in place.
            </p>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="mistakes" number="08" title="Mistakes That Hand the Incumbent the Win Back" />

            <p className="text-stone-700 leading-relaxed">
              Plenty of well-positioned challengers lose recompetes they should have won. Usually
              it's not a catastrophic error — it's a cluster of smaller mistakes that add up to
              a proposal that feels less certain than the incumbent. Here are the ones that cost
              challengers the most.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  wrong: "Attacking the incumbent in your proposal",
                  right: "Evaluators don't want to referee a vendor dispute. Frame everything as your positive capabilities and approach. If the incumbent's work left gaps, describe how you'll address those gaps — not why the incumbent failed.",
                },
                {
                  wrong: "Proposing key personnel who aren't committed",
                  right: "If you name someone as program manager and they've never verbally committed to this specific role, you're proposing a fiction. LOIs (Letters of Intent) from key personnel are standard and expected. If you can't get LOIs, find different people or reassess whether you're ready to prime this contract.",
                },
                {
                  wrong: "Submitting a proposal that looks like a template",
                  right: "Evaluators read a lot of proposals. Boilerplate is immediately recognizable and immediately discounted. Every section should reference specifics from the solicitation: the agency's mission, the program's history, the stated evaluation criteria. Generic language is a signal that you didn't invest in understanding the requirement.",
                },
                {
                  wrong: "Starting the proposal after the RFP drops",
                  right: "If your first engagement with a recompete is the day SAM.gov posts the solicitation, you're already months behind. The technical approach needs to be developed from intelligence gathered before the RFP, not assembled from the solicitation text.",
                },
                {
                  wrong: "Underestimating the incumbent's proposal team",
                  right: "After years on a contract, the incumbent knows this agency better than almost anyone. Their proposal team knows what language evaluators respond to and what they don't. Assume you're up against a professional, well-resourced proposal effort — not a complacent team mailing it in.",
                },
                {
                  wrong: "Winning on price and losing on past performance",
                  right: "A below-market price alongside weak or unrelated past performance creates a credibility gap. Evaluators wonder: how are they pricing this so low? They either don't understand the work, or they're going to struggle to perform. Pair competitive pricing with directly comparable past performance so the low price is believable.",
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

            <p className="text-stone-700 leading-relaxed">
              For a broader look at how win rates are calculated and what levers you can pull
              to improve them, read our post on{" "}
              <Link href="/blog/government-contract-win-rate" className="text-blue-700 hover:underline font-medium">
                government contract win rates
              </Link>
              . And if you're thinking about how to score individual pursuits before you commit
              resources, the{" "}
              <Link href="/blog/pwin-probability-of-win" className="text-blue-700 hover:underline font-medium">
                Probability of Win (pWin) framework
              </Link>{" "}
              gives you a structured way to make the go/no-go call.
            </p>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="recompete-pipeline" number="09" title="Building a Recompete Pipeline" />

            <p className="text-stone-700 leading-relaxed">
              A single recompete pursuit is a bet. A systematic recompete pipeline is a strategy.
              The contractors who win market share from incumbents aren't winning one contract
              every few years — they're running 5 to 10 recompete pursuits simultaneously, at
              different stages of maturity, and harvesting wins at a predictable rate.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Here's how to build that pipeline:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  phase: "Identify",
                  timeframe: "Ongoing — 18+ months out",
                  actions: [
                    "Search SAM.gov for contracts ending in the next 12–24 months that match your NAICS codes",
                    "Flag any with bridge contracts, bridge modifications, or short-term extensions",
                    "Build a shortlist of 10–15 recompetes worth evaluating further",
                  ],
                },
                {
                  phase: "Qualify",
                  timeframe: "12–18 months out",
                  actions: [
                    "Score each opportunity: agency relationship, vulnerability signals, incumbent stability, set-aside fit",
                    "Research the incumbent's obligated dollar history, modification count, and public performance record",
                    "Make a formal go/no-go decision using a consistent pWin scoring framework",
                  ],
                },
                {
                  phase: "Position",
                  timeframe: "9–12 months out",
                  actions: [
                    "Engage the agency through Sources Sought responses, industry days, and OSDBU briefings",
                    "Lock in teaming partners or commit to priming with your own personnel",
                    "Build your technical approach from agency intelligence, not from the RFP that doesn't exist yet",
                  ],
                },
                {
                  phase: "Capture",
                  timeframe: "3–9 months out",
                  actions: [
                    "Finalize key personnel LOIs, teaming agreements, and subcontractor commitments",
                    "Develop the draft technical volume and transition plan",
                    "Run a Black Hat exercise: put yourself in the incumbent's shoes and identify your weaknesses",
                  ],
                },
                {
                  phase: "Propose",
                  timeframe: "RFP to submission",
                  actions: [
                    "Map proposal sections to evaluation criteria before writing a single word",
                    "Build and work from a compliance matrix throughout the draft cycle",
                    "Run at least one color team review — ideally a Gold Team — before final submission",
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
              CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                pipeline management tools
              </Link>{" "}
              are built around exactly this workflow — tracking pursuits by stage, surfacing
              expiring contracts that match your profile, and keeping your team aligned on
              pursuit status without a cascade of spreadsheets and status meetings. The{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline font-medium">
                opportunity matching engine
              </Link>{" "}
              flags recompetes that fit your NAICS codes and certifications the moment they become
              identifiable — which is usually 12 to 18 months before they hit the solicitation stage.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="The compounding effect">
              <p>
                Every recompete you pursue — even ones you don't win — builds something. You learn
                the agency's evaluation preferences. You build a relationship with the contracting
                officer. You understand the incumbent's approach well enough to beat it next time.
                The contractors who are most effective at displacing incumbents today spent 3 to 5
                years earlier losing to incumbents while building the relationships, past performance,
                and intelligence infrastructure that eventually tipped the equation.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              For more on how to manage your overall pipeline from discovery to award — not just
              recompetes — read our guide on{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline font-medium">
                government contract pipeline management
              </Link>
              . And if you're still in the early stages of building your federal presence, our
              post on{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 hover:underline font-medium">
                building past performance
              </Link>{" "}
              covers how to create the track record that makes future pursuits viable.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track the recompetes worth chasing
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  CapturePilot monitors expiring contracts, flags vulnerability signals, and
                  builds you a recompete pipeline — so you're always positioned 12 to 18 months
                  ahead of the solicitation, not 12 days after it.
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
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices",
                  desc: "How to engage agencies before the RFP drops and influence requirements in your favor.",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  title: "Government Contract Win Rates",
                  desc: "What realistic win rates look like and the specific levers that move them.",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Pipeline Management",
                  desc: "From discovery to award — how to track and prioritize your active pursuits.",
                },
                {
                  href: "/blog/government-contract-pricing-strategies",
                  title: "Government Contract Pricing",
                  desc: "Strategies for pricing to win without undermining your margins.",
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
