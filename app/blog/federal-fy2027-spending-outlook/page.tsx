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
  DollarSign,
  Target,
  TrendingUp,
  TrendingDown,
  BarChart3,
  ShieldCheck,
  Building2,
  Zap,
  Activity,
  HeartPulse,
  Cpu,
  Crosshair,
  Clock,
  XCircle,
  Rocket,
  Globe,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "fy2027-overview", label: "FY2027: The Numbers That Matter" },
  { id: "defense-surge", label: "$1.5 Trillion Defense: Where It Goes" },
  { id: "industrial-base", label: "Defense Industrial Base Expansion" },
  { id: "doge-civilian-cuts", label: "DOGE and Civilian Agency Cuts" },
  { id: "va-dhs-winners", label: "VA and DHS: The Civilian Winners" },
  { id: "nasa-cuts", label: "NASA: Sharp Science Cuts to Know" },
  { id: "continuing-resolution", label: "The Continuing Resolution Problem" },
  { id: "small-business-strategy", label: "Small Business Strategy for FY2027" },
  { id: "action-steps", label: "Your FY2027 Action Plan" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "rose" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    rose: "bg-rose-50 border-rose-200 text-rose-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    rose: "text-rose-600",
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function FederalFY2027SpendingOutlookPage() {
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
            <span className="text-stone-900 font-medium">FY2027 Federal Spending Outlook</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Activity className="w-4 h-4" /> Market Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            FY2027 Federal Spending Outlook:{" "}
            <span className="gradient-text">Where Contract Dollars Are Flowing Next Year</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Defense is requesting a historic{" "}
            <strong className="text-stone-700">$1.5 trillion</strong> — a 44% jump from last year.
            Non-defense agencies face a{" "}
            <strong className="text-stone-700">10% budget cut</strong>. And the government is likely
            starting the year under a continuing resolution. FY2027 begins October 1st. Here&apos;s
            exactly where the money is going — and how to get your piece of it.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published September 14, 2026</span>
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
                  <span className="text-blue-600 font-mono text-xs">
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
            id="fy2027-overview"
            number="01"
            title="FY2027: The Numbers That Matter"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              Fiscal Year 2027 starts October 1, 2026 — one week from now. The White House released
              its budget request in April 2026, and Congress has been working through authorizations
              all summer. Here is the headline: this is the most lopsided federal budget in modern
              history, with defense consuming 63% of all discretionary spending.
            </p>
            <p>
              If your contracts are on the defense side, FY2027 is a generational opportunity. If
              you rely on civilian agencies, you need a plan — now.
            </p>
          </div>

          {/* Budget Overview Table */}
          <div className="my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left p-4 rounded-tl-xl font-semibold">Category</th>
                  <th className="text-right p-4 font-semibold">FY2026</th>
                  <th className="text-right p-4 font-semibold">FY2027 Request</th>
                  <th className="text-right p-4 rounded-tr-xl font-semibold">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100 bg-blue-50">
                  <td className="p-4 font-medium text-blue-900">Total Defense Spending</td>
                  <td className="p-4 text-right text-stone-700">~$1.05T</td>
                  <td className="p-4 text-right font-bold text-blue-700">$1.5T</td>
                  <td className="p-4 text-right text-emerald-700 font-bold">+44%</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-medium text-stone-800">DoD Discretionary</td>
                  <td className="p-4 text-right text-stone-600">~$848B</td>
                  <td className="p-4 text-right font-semibold text-stone-800">$1.1T</td>
                  <td className="p-4 text-right text-emerald-700">+30%</td>
                </tr>
                <tr className="border-b border-stone-100 bg-stone-50">
                  <td className="p-4 font-medium text-stone-800">DoD Mandatory (Reconciliation)</td>
                  <td className="p-4 text-right text-stone-600">—</td>
                  <td className="p-4 text-right font-semibold text-stone-800">$350B</td>
                  <td className="p-4 text-right text-emerald-700">New</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-medium text-stone-800">Non-Defense Discretionary</td>
                  <td className="p-4 text-right text-stone-600">~$730B</td>
                  <td className="p-4 text-right font-semibold text-stone-800">~$657B</td>
                  <td className="p-4 text-right text-rose-700 font-bold">−10%</td>
                </tr>
                <tr className="border-b border-stone-100 bg-blue-50">
                  <td className="p-4 font-medium text-blue-900">Defense Share of Discretionary</td>
                  <td className="p-4 text-right text-stone-700">~50%</td>
                  <td className="p-4 text-right font-bold text-blue-700">63%</td>
                  <td className="p-4 text-right text-blue-700">+13 pts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Why the $1.5T Number Is Misleading">
            The $1.5 trillion headline combines regular appropriations with mandatory spending
            requested through budget reconciliation — a special legislative process that bypasses the
            normal filibuster. Congress hasn't yet passed full-year FY2027 appropriations, so actual
            contract obligations will ramp slowly. Expect the defense industrial base investment to
            accelerate through FY2028 as contracts are awarded.
          </Callout>

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              The structural shift matters more than the exact number. Defense has been roughly 50%
              of discretionary for years. Jumping to 63% means every dollar added to defense comes
              partly at the expense of civilian programs — and that rebalancing is already underway
              through DOGE.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="defense-surge"
            number="02"
            title="$1.5 Trillion Defense: Where It Actually Goes"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              Not all of the defense increase is contractor-facing. A significant share goes to
              personnel, military pay raises, and base operations. But the procurement and R&D
              portions — the parts that create contract opportunities — are seeing the biggest
              growth. Here is where the FY2027 defense budget is pointing.
            </p>
          </div>

          <div className="my-8 grid sm:grid-cols-2 gap-4 animate-on-scroll">
            {[
              {
                icon: Crosshair,
                color: "bg-blue-50 border-blue-200",
                iconColor: "text-blue-600",
                label: "Munitions Production",
                detail:
                  "Multiyear procurement authority for 13 critical munitions: Patriot PAC-3, THAAD, AMRAAM, and Tomahawk cruise missiles. Industrial base expansion is the explicit goal — not just filling inventory.",
              },
              {
                icon: ShieldCheck,
                color: "bg-violet-50 border-violet-200",
                iconColor: "text-violet-600",
                label: "Shipbuilding",
                detail:
                  '"1+2" production cadence for Columbia-class and Virginia-class submarines. $125M in supplier development, $78M in workforce development, $3M in shipyard infrastructure.',
              },
              {
                icon: Cpu,
                color: "bg-emerald-50 border-emerald-200",
                iconColor: "text-emerald-600",
                label: "AI and Autonomy",
                detail:
                  "DoD AI/autonomy investment continues to grow from $13.4B in FY2026. Software, autonomous systems, decision analytics, and AI-enabled C2 are priority areas.",
              },
              {
                icon: Globe,
                color: "bg-sky-50 border-sky-200",
                iconColor: "text-sky-600",
                label: "Cyber and Space",
                detail:
                  "CYBERCOM, Space Force, and NSA all receive increased funding. Offensive and defensive cyber capabilities, satellite ground systems, and space domain awareness are key focus areas.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border p-6 hover-lift ${item.color}`}
              >
                <item.icon className={`w-6 h-6 mb-3 ${item.iconColor}`} />
                <h3 className="font-bold text-stone-900 mb-2">{item.label}</h3>
                <p className="text-sm text-stone-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              The administration is explicitly pushing to expand the defense industrial base — not
              just award more to existing primes, but bring in more suppliers, more non-traditional
              contractors, and more technology companies. The{" "}
              <Link href="/blog/ota-contracts-guide" className="text-blue-600 hover:underline">
                OTA contract vehicle
              </Link>{" "}
              expansion is part of this push, giving DoD flexibility to contract with companies that
              can't navigate traditional FAR-based procurement.
            </p>
            <p>
              If you have relevant capabilities in any of these areas and haven't positioned with DoD,
              FY2027 is the right moment. The door is genuinely open wider than it has been in
              decades.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">
                  See which FY2027 DoD opportunities match your capabilities
                </h3>
                <p className="text-blue-100 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/matching" className="text-white underline underline-offset-2">
                    opportunity matching
                  </Link>{" "}
                  scans SAM.gov and defense forecast databases to surface contracts aligned to your
                  NAICS codes and certifications — before they hit full competition.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="industrial-base"
            number="03"
            title="Defense Industrial Base Expansion: Your Opportunity"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              The phrase "defense industrial base expansion" isn't new — but the FY2027 budget backs
              it with real money in ways previous budgets haven't. The administration wants to move
              away from a system where a handful of large primes dominate each weapons system program
              toward a broader supplier ecosystem with more competition and surge capacity.
            </p>
            <p>
              What does that mean for small businesses? More entry points. More subcontracting
              opportunities. And more sole-source and{" "}
              <Link
                href="/blog/simplified-acquisition-procedure"
                className="text-blue-600 hover:underline"
              >
                simplified acquisition
              </Link>{" "}
              awards at the lower tiers of complex programs.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Where Small Businesses Win in Defense">
            The munitions industrial base expansion specifically targets lower-tier suppliers —
            manufacturers of propellants, energetics, castings, precision components, and electronic
            sub-assemblies. If you manufacture anything that goes into a weapon system, FY2027 is
            your pitch season. Reach out to your Tier 1 and Tier 2 prime contractor contacts now,
            before the surge procurement awards hit in Q1 FY2027.
          </Callout>

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              Shipbuilding is the other major expansion area. The Navy's stated goal is to expand
              beyond the handful of existing shipyards to drive more competition. That means more
              opportunities for specialty manufacturers, marine engineering firms, and technology
              integrators supporting the Columbia-class and Virginia-class programs.
            </p>
            <p>
              For software and technology companies, the defense industrial base expansion creates
              demand for simulation tools, digital manufacturing capabilities, supply chain
              visibility platforms, and predictive maintenance systems — all areas where small
              businesses can compete without being a traditional defense manufacturer.
            </p>
            <p>
              Check our guide to{" "}
              <Link href="/blog/dod-contracts-small-business" className="text-blue-600 hover:underline">
                DoD contracting for small businesses
              </Link>{" "}
              for a deeper dive into entry points.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="doge-civilian-cuts"
            number="04"
            title="DOGE and Civilian Agency Cuts: The Real Impact"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              The Department of Government Efficiency has been operating since early 2025, and by
              mid-2026 it had canceled, reduced, or restructured more than 10,000 contracts worth an
              estimated $85 billion. Terminations for convenience are up 340% since DOGE reviews
              began. Annual non-defense federal contract obligations are running approximately 22%
              below FY2024 levels.
            </p>
            <p>
              The FY2027 budget formalizes what DOGE has been doing operationally: civilian agencies
              are being asked to operate with 10% less money. That's $73 billion in cuts from
              non-defense discretionary programs — the programs that fund most civilian agency
              contracts.
            </p>
          </div>

          {/* DOGE Impact Table */}
          <div className="my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left p-4 rounded-tl-xl font-semibold">Contract Type</th>
                  <th className="text-left p-4 font-semibold">DOGE Impact</th>
                  <th className="text-right p-4 rounded-tr-xl font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100 bg-rose-50">
                  <td className="p-4 font-medium text-rose-900">Consulting & Advisory Services</td>
                  <td className="p-4 text-stone-700">Primary target; systematic reduction across all civilian agencies</td>
                  <td className="p-4 text-right">
                    <span className="bg-rose-100 text-rose-700 font-bold text-xs px-2 py-1 rounded-full">Very High</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-medium text-stone-800">DEI and Equity Programs</td>
                  <td className="p-4 text-stone-700">Virtually eliminated across all agencies</td>
                  <td className="p-4 text-right">
                    <span className="bg-rose-100 text-rose-700 font-bold text-xs px-2 py-1 rounded-full">Eliminated</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100 bg-stone-50">
                  <td className="p-4 font-medium text-stone-800">Foreign Aid and USAID</td>
                  <td className="p-4 text-stone-700">~68% portfolio reduction; agency restructured</td>
                  <td className="p-4 text-right">
                    <span className="bg-rose-100 text-rose-700 font-bold text-xs px-2 py-1 rounded-full">Eliminated</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-medium text-stone-800">Climate / Clean Energy Programs</td>
                  <td className="p-4 text-stone-700">Major reductions; EPA, DOE program cuts</td>
                  <td className="p-4 text-right">
                    <span className="bg-amber-100 text-amber-700 font-bold text-xs px-2 py-1 rounded-full">High</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100 bg-stone-50">
                  <td className="p-4 font-medium text-stone-800">Education Programs (DoEd)</td>
                  <td className="p-4 text-stone-700">~52% portfolio cut; agency consolidation ongoing</td>
                  <td className="p-4 text-right">
                    <span className="bg-amber-100 text-amber-700 font-bold text-xs px-2 py-1 rounded-full">High</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-medium text-stone-800">Defense IT and Cyber</td>
                  <td className="p-4 text-stone-700">Increasing; largely protected from DOGE cuts</td>
                  <td className="p-4 text-right">
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-xs px-2 py-1 rounded-full">Growing</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100 bg-stone-50">
                  <td className="p-4 font-medium text-stone-800">VA Healthcare and IT</td>
                  <td className="p-4 text-stone-700">Protected; slight budget increase</td>
                  <td className="p-4 text-right">
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-xs px-2 py-1 rounded-full">Growing</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-stone-800">DHS Border and Security</td>
                  <td className="p-4 text-stone-700">Major increases; border enforcement priority</td>
                  <td className="p-4 text-right">
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-xs px-2 py-1 rounded-full">Growing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Callout icon={AlertTriangle} color="rose" title="If You Work With Civilian Agencies, Read This">
            The cuts aren't random. DOGE has been systematic: first consulting and advisory work,
            then program-specific grants and contracts that don't align with the administration's
            priorities. If your revenue comes from civilian agency contracts in vulnerable categories,
            you need a diversification plan — not next year, now. Use{" "}
            <Link href="/features/intelligence" className="text-rose-700 underline underline-offset-2">
              CapturePilot&apos;s market intelligence
            </Link>{" "}
            to identify which of your active contracts are in high-risk categories.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="va-dhs-winners"
            number="05"
            title="VA and DHS: The Civilian Agencies Still Growing"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              Not every civilian agency is shrinking. Two stand out as protected — and growing — in
              the FY2027 budget environment.
            </p>
          </div>

          <div className="my-8 animate-on-scroll space-y-6">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <HeartPulse className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-black text-stone-900">
                  Department of Veterans Affairs: $144.5 Billion
                </h3>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                The VA&apos;s total budget is $144.5 billion — up $145 million from FY2026. For
                contractors, the key areas are:
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>EHR Modernization:</strong> The VA&apos;s Oracle Health implementation
                    continues across all 171 VA medical centers — a multi-billion-dollar program that
                    still needs implementation, training, and integration contractors.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>IT Systems and AI:</strong> The VA is investing in AI-enabled clinical
                    decision support, scheduling optimization, and veteran benefit processing
                    automation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Medical Care:</strong> Healthcare services, clinical staffing, and
                    community care network support remain the largest contract categories.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>VA Construction:</strong> Facility modernization, disability access
                    upgrades, and PFAS remediation continue across VA properties nationwide.
                  </span>
                </li>
              </ul>
              <p className="text-stone-600 text-sm mt-4">
                SDVOSB and VOSB businesses have mandatory set-aside advantages at the VA. See our{" "}
                <Link href="/blog/va-contracts-guide" className="text-blue-600 hover:underline">
                  complete VA contracting guide
                </Link>{" "}
                and{" "}
                <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">
                  SDVOSB contracts guide
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-violet-600" />
                <h3 className="text-xl font-black text-stone-900">
                  Department of Homeland Security: $118 Billion
                </h3>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                DHS is one of the administration&apos;s top priorities. The FY2027 request includes
                $118.39 billion in total budget authority ($63 billion discretionary) plus more than
                $190 billion in multiyear funding through the Working Families Tax Cut Act. The
                contract priorities:
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Border Technology:</strong> Surveillance systems, biometric identification,
                    processing center infrastructure, and personnel monitoring technology.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>CISA Cybersecurity:</strong> Critical infrastructure protection, threat
                    intelligence sharing, and federal network defense programs continue to grow.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Detention and Enforcement:</strong> ICE and CBP operational support,
                    detention facility management, and deportation logistics.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Disaster Response:</strong> FEMA program support, disaster preparedness
                    grants management, and emergency communications.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="nasa-cuts"
            number="06"
            title="NASA: Sharp Science Cuts You Need to Know"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              NASA is the most dramatic civilian budget story in FY2027. The White House proposed a
              23% overall budget cut to the agency — but it wasn&apos;t distributed evenly.
            </p>
          </div>

          <div className="my-8 grid sm:grid-cols-2 gap-4 animate-on-scroll">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
              <XCircle className="w-6 h-6 text-rose-600 mb-3" />
              <h3 className="font-black text-stone-900 mb-2">Science Mission Directorate: −47%</h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Earth science, astrophysics, heliophysics, and planetary science programs all face
                major reductions. Several satellite missions are being delayed or cancelled. If your
                contracts are in Earth observation, climate science, or basic space research, expect
                significant reductions.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <Rocket className="w-6 h-6 text-emerald-600 mb-3" />
              <h3 className="font-black text-stone-900 mb-2">Exploration Systems: +10%</h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                Artemis — the Moon program — is protected and slightly increased. Human spaceflight,
                lunar surface systems, the Space Launch System, and Gateway continue. If you support
                human exploration, you&apos;re in a protected budget pocket.
              </p>
            </div>
          </div>

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              The shift reflects a broader administration priority: applied human spaceflight over
              pure science. Commercial space companies with Artemis-adjacent capabilities benefit;
              research universities and science-focused contractors do not.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="continuing-resolution"
            number="07"
            title="The Continuing Resolution Problem"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              Here is the practical reality: FY2027 is starting under a continuing resolution. H.R.
              6500, the Continuing Appropriations and Extensions Act, 2027, funds the federal
              government through December 11, 2026 at current year levels to avoid an October 1
              shutdown.
            </p>
            <p>
              This matters a lot for contractors. Under a CR:
            </p>
          </div>

          <div className="my-6 space-y-3 animate-on-scroll">
            {[
              {
                title: "New starts are restricted",
                detail:
                  "Agencies cannot begin new programs or significantly expand existing ones. New contract awards slow to a trickle except for continuing work.",
              },
              {
                title: "Agencies operate at the lower of prior-year levels or requested levels",
                detail:
                  "For defense, this means the $1.5T budget doesn't start flowing until full-year appropriations pass. For civilian agencies already being cut, the CR provides temporary stability.",
              },
              {
                title: "Option year exercises continue normally",
                detail:
                  "If you have an existing contract with option years, those are generally exercisable under a CR. Protect and grow your incumbency.",
              },
              {
                title: "Q1 pipeline dries up for new awards",
                detail:
                  "October through December will be slow for new contract awards across most agencies. Budget your BD resources accordingly.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-stone-50 rounded-xl p-4 border border-stone-200">
                <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{item.title}</p>
                  <p className="text-stone-600 text-sm mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="amber" title="How to Use the CR Period Productively">
            The October–December CR window is not dead time — it&apos;s capture season. Agencies
            know their FY2027 budgets are coming; contracting officers are thinking about what they
            want to award in Q2 and Q3. Use this period for capability briefings, pre-solicitation
            meetings, and{" "}
            <Link href="/blog/sources-sought-notice" className="text-amber-800 underline underline-offset-2">
              sources sought responses
            </Link>
            . Get on their radar before the money flows. Our{" "}
            <Link href="/blog/federal-budget-continuing-resolution" className="text-amber-800 underline underline-offset-2">
              guide to continuing resolutions
            </Link>{" "}
            goes deeper on tactics.
          </Callout>

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              Congress may or may not pass full-year appropriations by December 11. If not, expect
              another CR extension. The good news is that defense spending will ramp aggressively
              once full appropriations pass — the $1.5 trillion request reflects genuine political
              will, not wishful thinking.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="small-business-strategy"
            number="08"
            title="Small Business Strategy for FY2027"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              The governmentwide small business contracting goal remains 23%. In FY2024, small
              businesses received a record $183 billion in prime contracts — 28.8% of total federal
              contracting, exceeding the goal for the fourth consecutive year. The trend holds in
              FY2026, and FY2027&apos;s defense surge creates new opportunity for businesses that
              can position correctly.
            </p>
            <p>
              But the market is bifurcating. Defense set-asides are growing. Civilian set-asides are
              shrinking alongside agency budgets. Your strategy needs to reflect which side of that
              divide your capabilities sit on.
            </p>
          </div>

          <div className="my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left p-4 rounded-tl-xl font-semibold">Certification</th>
                  <th className="text-left p-4 font-semibold">Key FY2027 Opportunity</th>
                  <th className="text-right p-4 rounded-tr-xl font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100 bg-blue-50">
                  <td className="p-4 font-medium text-blue-900">SDVOSB / VOSB</td>
                  <td className="p-4 text-stone-700">
                    VA mandatory set-asides; DoD increasing SDVOSB goals; $144.5B VA budget
                  </td>
                  <td className="p-4 text-right">
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-xs px-2 py-1 rounded-full">Very High</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-medium text-stone-800">8(a)</td>
                  <td className="p-4 text-stone-700">
                    Defense sole-source up to $25M; industrial base expansion creates new pipelines
                  </td>
                  <td className="p-4 text-right">
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-xs px-2 py-1 rounded-full">High</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100 bg-stone-50">
                  <td className="p-4 font-medium text-stone-800">HUBZone</td>
                  <td className="p-4 text-stone-700">
                    DoD price preferences grow as defense budget expands; industrial base HUBZone
                    presence rewarded
                  </td>
                  <td className="p-4 text-right">
                    <span className="bg-emerald-100 text-emerald-700 font-bold text-xs px-2 py-1 rounded-full">High</span>
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-4 font-medium text-stone-800">WOSB / EDWOSB</td>
                  <td className="p-4 text-stone-700">
                    Civilian agency set-asides face budget headwinds; defense WOSB opportunities
                    growing proportionally
                  </td>
                  <td className="p-4 text-right">
                    <span className="bg-amber-100 text-amber-700 font-bold text-xs px-2 py-1 rounded-full">Moderate</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-stone-800">Small Business (no cert)</td>
                  <td className="p-4 text-stone-700">
                    Defense subcontracting pipeline; simplified acquisition opportunities under
                    higher thresholds
                  </td>
                  <td className="p-4 text-right">
                    <span className="bg-amber-100 text-amber-700 font-bold text-xs px-2 py-1 rounded-full">Moderate</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              If you hold an SDVOSB or VOSB certification, FY2027 is your strongest year in recent
              memory. The VA budget is protected, DoD is expanding SDVOSB goals to meet the defense
              surge, and veteran-owned businesses have preferential access to both. Read our guides
              on{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">
                SDVOSB contracts
              </Link>{" "}
              and{" "}
              <Link href="/blog/vosb-certification-guide" className="text-blue-600 hover:underline">
                VOSB certification
              </Link>{" "}
              if you haven&apos;t already.
            </p>
            <p>
              For businesses without a set-aside certification, the defense industrial base
              subcontracting path is the most accessible entry point. Prime contractors on large
              defense programs are required to have{" "}
              <Link href="/blog/small-business-subcontracting-plan" className="text-blue-600 hover:underline">
                small business subcontracting plans
              </Link>
              , and the FY2027 budget growth means they need more qualified small business
              subcontractors across the supply chain.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  Free Resource
                </p>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Not sure if you qualify for set-aside programs?
                </h3>
                <p className="text-stone-600 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/quick-checker" className="text-blue-600 hover:underline">
                    Quick Checker
                  </Link>{" "}
                  analyzes your business profile against 8(a), SDVOSB, VOSB, WOSB, and HUBZone
                  eligibility requirements in under 2 minutes.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="action-steps"
            number="09"
            title="Your FY2027 Action Plan"
          />

          <div className="prose-like space-y-4 text-stone-700 leading-relaxed animate-on-scroll">
            <p>
              FY2027 starts in a week. The window to position before the fiscal year opens is
              closing. Here is what to do right now.
            </p>
          </div>

          <div className="my-8 space-y-4 animate-on-scroll">
            {[
              {
                step: "01",
                action: "Audit your agency exposure",
                detail:
                  "Which agencies account for your current and pipeline revenue? If more than 30% of your pipeline depends on civilian agencies in DOGE-targeted categories, build your defense and VA alternatives now. Use CapturePilot's pipeline view to map your exposure.",
              },
              {
                step: "02",
                action: "Update your SAM.gov registration and certifications",
                detail:
                  "SAM.gov annual renewals are mandatory. If your registration expires in Q1 FY2027, renew it now — a lapsed registration gets you removed from consideration automatically. Review our SAM.gov renewal guide.",
              },
              {
                step: "03",
                action: "Identify the first 10 FY2027 opportunities to pursue",
                detail:
                  "Use forecast databases, agency procurement forecasts, and SAM.gov to build your FY2027 early pipeline. The best opportunities are already being discussed in agency planning — sources sought notices will start hitting in October and November.",
              },
              {
                step: "04",
                action: "Position for the defense industrial base",
                detail:
                  "If you have manufacturing, technology, or specialized services relevant to munitions, shipbuilding, or defense IT, identify the prime contractors who need your capabilities and schedule introductory briefings before year-end.",
              },
              {
                step: "05",
                action: "Use the CR window for relationship building",
                detail:
                  "October through December will be slow for new awards. Use the time to visit contracting officers, respond to sources sought notices, and strengthen relationships with agencies you want to win work from in Q2 and Q3.",
              },
              {
                step: "06",
                action: "Review your proposal capacity",
                detail:
                  "When the CR ends and full appropriations pass, agencies will push to obligate funds quickly. That creates a surge of RFPs in Q2 and Q3. Make sure your proposal team — whether internal or contracted — can handle simultaneous responses. Read our guide on proposal color teams.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-5 rounded-2xl border border-stone-200 bg-white hover-lift"
              >
                <span className="text-2xl font-black text-blue-200 leading-none flex-shrink-0 font-mono">
                  {item.step}
                </span>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.action}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Target} color="blue" title="The FY2027 Opportunity Is Real — But You Have to Move">
            The defense budget surge isn&apos;t theoretical. The $1.5 trillion request reflects
            genuine political consensus across the administration and Congress. When full
            appropriations pass — likely in Q1 or Q2 of calendar 2027 — agencies will be under
            pressure to obligate funds quickly. Businesses that are positioned, registered,
            certified, and relationship-ready will win. The ones who start positioning in January
            will be too late for most early opportunities.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-800 p-8 text-white animate-on-scroll">
            <div className="max-w-xl">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                Start Your 30-Day Free Trial
              </p>
              <h3 className="text-2xl font-black mb-3">
                Build your FY2027 pipeline before the competition does
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                CapturePilot gives you{" "}
                <Link href="/features/intelligence" className="text-white underline underline-offset-2">
                  market intelligence
                </Link>
                ,{" "}
                <Link href="/features/matching" className="text-white underline underline-offset-2">
                  opportunity matching
                </Link>
                , and{" "}
                <Link href="/features/pipeline" className="text-white underline underline-offset-2">
                  pipeline management
                </Link>{" "}
                in one platform — so you can identify the right opportunities, track them from
                sources sought to award, and submit competitive proposals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors"
                >
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-white font-semibold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-stone-200 pt-12 animate-on-scroll">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/federal-spending-trends-2026",
                  title: "Federal Spending Trends 2026",
                  desc: "The full breakdown of FY2026 contract spending by agency and category.",
                },
                {
                  href: "/blog/dod-contracts-small-business",
                  title: "DoD Contracts for Small Business",
                  desc: "How to break into Department of Defense contracting from scratch.",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts Guide",
                  desc: "Everything veteran-owned businesses need to know about set-aside contracts.",
                },
                {
                  href: "/blog/federal-budget-continuing-resolution",
                  title: "How CRs Affect Your Contracts",
                  desc: "What continuing resolutions mean for contract awards and your pipeline.",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process",
                  desc: "How to systematically find, track, and win government contracts.",
                },
                {
                  href: "/blog/federal-procurement-forecast-guide",
                  title: "Using Agency Procurement Forecasts",
                  desc: "How to find and use agency spending forecasts to get ahead of competition.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 transition-colors text-sm">
                    {link.title}
                  </p>
                  <p className="text-stone-500 text-xs mt-1">{link.desc}</p>
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
