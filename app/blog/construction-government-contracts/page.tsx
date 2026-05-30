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
  Zap,
  Building2,
  TrendingUp,
  Users,
  FileText,
  Clock,
  Award,
  BarChart3,
  Shield,
  XCircle,
  HardHat,
  Wrench,
  Hammer,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "market-size", label: "The Federal Construction Market: Size and Buyers" },
  { id: "naics-codes", label: "NAICS Codes for Federal Construction Work" },
  { id: "bonding", label: "Bonding: The Miller Act and What It Costs" },
  { id: "davis-bacon", label: "Davis-Bacon: Prevailing Wages and Your Bid" },
  { id: "set-asides", label: "Set-Aside Programs for Construction Firms" },
  { id: "milcon", label: "Military Construction: The MILCON Market" },
  { id: "evaluation", label: "How Agencies Score Construction Bids" },
  { id: "step-by-step", label: "Your Path to First Construction Award" },
  { id: "mistakes", label: "Mistakes That Kill Construction Bids" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
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

export default function ConstructionGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-amber-50 to-white">
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
            <span className="text-stone-900 font-medium">
              Construction Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <HardHat className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Construction Government Contracts:{" "}
            <span className="gradient-text">Bonding, Davis-Bacon, and How to Win</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government builds, renovates, and maintains an enormous physical footprint
            — military bases, VA hospitals, courthouses, border crossings, research laboratories,
            and more. That work runs to tens of billions of dollars annually, and a significant
            share is legally reserved for small businesses. But federal construction comes with
            compliance requirements that can blindside contractors who are new to the market:{" "}
            <strong className="text-stone-700">the Miller Act, Davis-Bacon prevailing wages,
            and strict performance requirements</strong>. Get these right and the opportunity is
            substantial. Get them wrong and you can lose money for the full term of the contract.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 30, 2026</span>
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
      <article ref={articleRef} className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Section 1 */}
          <SectionHeading
            id="market-size"
            number="01"
            title="The Federal Construction Market: Size and Buyers"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal construction is not a niche — it is one of the largest and most durable
              segments of government spending. The federal government is the single largest owner
              of real property in the United States, managing hundreds of millions of square feet
              of building space, thousands of miles of infrastructure, and military installations
              that function as small cities. All of it requires construction, renovation, and
              maintenance on an ongoing basis.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Commercial construction work for federal agencies accounted for approximately
              $14.7 billion in federal spending based on recent contract data, and that figure
              covers only the direct construction contracts — not facility operations, design
              services, or construction management layered on top. DoD alone runs a dedicated
              Military Construction (MILCON) program, typically funding several billion dollars
              in new construction projects annually across Army, Navy, Air Force, and Marine
              Corps installations worldwide.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Small businesses capture a significant share of this market. Federal law requires
              at least 23% of all prime contract dollars to go to small businesses, and
              construction is one of the categories where agencies have historically met or
              exceeded that target. The small business set-aside requirement under FAR 19.502-2
              applies whenever the Rule of Two is satisfied — and for local construction work,
              two qualified small businesses are almost always available to compete.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$150K",
                  label: "Miller Act threshold — bonding mandatory on all federal construction contracts above this amount",
                  color: "text-amber-600 bg-amber-50 border-amber-100",
                },
                {
                  icon: Clock,
                  stat: "$2,000",
                  label: "Davis-Bacon threshold — prevailing wage rules kick in at this contract value",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: Target,
                  stat: "23%",
                  label: "Federal small business prime contracting goal — construction is a major contributor",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
              ].map(({ icon: Icon, stat, label, color }) => (
                <div
                  key={stat}
                  className={`animate-on-scroll rounded-xl border p-5 hover-lift ${color}`}
                >
                  <Icon className="w-5 h-5 mb-3" />
                  <p className="text-2xl font-black mb-1">{stat}</p>
                  <p className="text-xs font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <Callout icon={Building2} color="amber" title="Who Buys Federal Construction Work">
              <ul className="space-y-1.5 mt-1">
                <li>
                  <strong>Department of Defense:</strong> Army Corps of Engineers, NAVFAC (Naval
                  Facilities Engineering Systems Command), Air Force Civil Engineer Center — new
                  construction, renovation, infrastructure on military installations worldwide
                </li>
                <li>
                  <strong>Department of Veterans Affairs (VA):</strong> Medical center construction
                  and renovation, PTSD treatment facilities, outpatient clinic buildouts, national
                  cemetery development
                </li>
                <li>
                  <strong>General Services Administration (GSA):</strong> Federal courthouse
                  construction, lease buildouts, historic preservation projects, land ports of entry
                </li>
                <li>
                  <strong>Department of Homeland Security:</strong> Border infrastructure, CBP
                  facilities, USCIS district offices, FEMA logistics centers
                </li>
                <li>
                  <strong>Department of Energy:</strong> Research facilities, national laboratory
                  infrastructure, environmental remediation construction
                </li>
                <li>
                  <strong>Army Corps of Engineers (Civil Works):</strong> Flood control, navigation,
                  shore protection, water infrastructure — open to both prime and subcontract awards
                </li>
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Unlike many professional services categories, construction work is inherently local.
              A contractor building a VA clinic in Raleigh is not competing against a firm based in
              Los Angeles. Your competition comes from your region — contractors who know the local
              labor market, material suppliers, and permit environment. That locality advantage is
              real and favors established regional businesses over national firms that do not have
              a local workforce and subcontractor network already in place.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The best place to track live construction solicitations is{" "}
              <a
                href="https://sam.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                SAM.gov
              </a>
              . Filter by NAICS 236, 237, or 238, set your geography, and subscribe to alerts.
              For tips on getting the most out of SAM.gov&apos;s search filters, see our guide on{" "}
              <Link
                href="/blog/sam-gov-search-tips"
                className="text-blue-700 hover:underline"
              >
                SAM.gov search strategies
              </Link>
              .
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="naics-codes"
            number="02"
            title="NAICS Codes for Federal Construction Work"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Construction businesses fall into three major NAICS subsectors. The code on a
              solicitation determines your size standard eligibility — whether you qualify as a
              small business and which set-aside programs you can access. Register all codes that
              apply to your work on SAM.gov.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      NAICS Code
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Subsector
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      SBA Size Standard
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Typical Federal Work
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      236
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Construction of Buildings
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $39.5M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Courthouses, office buildings, VA medical centers, barracks, data centers
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      237
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Heavy and Civil Engineering
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $33.5M avg. annual receipts (most codes)
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Roads, bridges, water/wastewater systems, airfields, flood control, ports
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      238
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Specialty Trade Contractors
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $14M–$45M depending on specific code
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Electrical, HVAC, plumbing, roofing, painting, flooring — both prime and sub
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For most small construction companies, the most accessible entry point is specialty
              trade work under NAICS 238. The size standards are lower (meaning more competitors
              qualify as small), competition at the subcontract level is less formal, and you
              can build federal past performance without taking on the full prime contractor risk
              of a large building project.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SBA increased most size standards by 13.65% in 2024, so if you were previously just
              over the limit for a particular code, recheck your eligibility now. Size standards
              are measured against your average annual receipts over the preceding five fiscal
              years — a single high-revenue year does not automatically disqualify you.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              One critical performance requirement specific to construction: under FAR 52.219-14
              (Limitations on Subcontracting), general construction contractors must perform at
              least <strong className="text-stone-800">15% of the contract cost</strong> with their
              own employees, excluding materials. Specialty trade contractors face a higher bar —
              at least <strong className="text-stone-800">25% of the contract cost</strong> must be
              performed by their own employees. These rules prevent shell companies from winning
              set-aside contracts and passing all the work to non-small businesses.
            </p>

            <p className="text-stone-600 leading-relaxed mb-6">
              For a deeper look at how to select and register NAICS codes, see{" "}
              <Link
                href="/blog/best-naics-codes-small-business"
                className="text-blue-700 hover:underline"
              >
                The 10 Best NAICS Codes for Small Business Government Contractors
              </Link>
              . And use{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to confirm your size standard eligibility under any specific NAICS code before
              submitting a bid.
            </p>

            {/* CTA 1 */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 my-10 text-white animate-on-scroll">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">
                    Check Your Small Business Eligibility in 60 Seconds
                  </p>
                  <p className="text-blue-100 text-sm mb-4">
                    See which construction NAICS codes qualify you as small and which set-aside
                    programs you can access right now — before investing time in any bid.
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

          {/* Section 3 */}
          <SectionHeading
            id="bonding"
            number="03"
            title="Bonding: The Miller Act and What It Costs"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Miller Act (40 U.S.C. Chapter 31, Subchapter III) is the law that governs
              bonding on federal construction contracts. It creates a three-tier system based on
              contract value, and understanding it before you bid is not optional — bonding
              capacity must be in place before you receive an award, not after.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  tier: "Tier 1",
                  range: "Contracts Below $35,000",
                  requirement: "No bonding required",
                  detail:
                    "Contracting officers have discretion to require bonds but are not obligated to do so. The most accessible entry point for new federal construction contractors. Micro-purchase and simplified acquisition awards in this range are common for small repair and maintenance work.",
                  borderColor: "border-l-emerald-500",
                  bgColor: "bg-emerald-50",
                },
                {
                  tier: "Tier 2",
                  range: "$35,000 – $150,000",
                  requirement: "Alternative payment protections",
                  detail:
                    "The contracting officer must select two or more alternative payment protections — typically an irrevocable letter of credit, a Treasury-listed surety, or a cash deposit. Performance bonds are not mandatory at this tier, though individual solicitations may require them.",
                  borderColor: "border-l-amber-500",
                  bgColor: "bg-amber-50",
                },
                {
                  tier: "Tier 3",
                  range: "Over $150,000",
                  requirement: "Performance bond + payment bond, both at 100% of contract value",
                  detail:
                    "Both bonds are mandatory under the Miller Act. The performance bond guarantees you will complete the work; the payment bond guarantees you will pay your subcontractors and material suppliers. Both must be from a surety listed on Treasury&apos;s T-List (Circular 570). Bond amounts equal the full contract price.",
                  borderColor: "border-l-red-500",
                  bgColor: "bg-red-50",
                },
              ].map(({ tier, range, requirement, detail, borderColor, bgColor }) => (
                <div
                  key={tier}
                  className={`animate-on-scroll rounded-xl p-5 border-l-4 ${borderColor} ${bgColor}`}
                >
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm mb-0.5">{tier}: {range}</p>
                      <p className="text-stone-800 text-xs font-semibold mb-1">{requirement}</p>
                      <p className="text-stone-600 text-xs leading-relaxed">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Bonding is one of the biggest barriers for small construction firms entering the
              federal market. Surety companies evaluate your bonding capacity based on financial
              statements, credit, work-in-hand, and completed project history. A company with
              limited financial reserves may find it difficult to obtain bonds on large contracts
              regardless of technical qualifications.
            </p>

            <Callout icon={Lightbulb} color="amber" title="How to Build Bonding Capacity Before You Bid">
              Start with the SBA Surety Bond Guarantee Program (SBG). The SBA guarantees bonds
              issued by participating surety companies — up to 90% of the bond amount for certain
              small businesses — which makes it far easier to obtain bonding when your balance sheet
              alone would not qualify you. The SBG Program covers bid, performance, and payment bonds
              on contracts up to $10 million (higher in some cases). Apply through an SBA-participating
              surety agent before you start bidding, not after you win a contract. Waiting until
              after award to secure bonding is one of the fastest ways to lose a contract you have
              already won.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Budget bond premiums into every bid. Performance and payment bond premiums typically
              run 0.5%–3% of the contract value depending on project size, your company&apos;s
              financial strength, and your surety relationship. On a $500,000 contract, that is
              $2,500–$15,000 — a cost that cannot be absorbed into labor or materials without
              shrinking your margin. Many first-time federal construction bidders forget to include
              bonding in their price and then face a surprise hit to profitability.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              One additional note: contracting officers will review your bonding before issuing
              a Notice to Proceed (NTP). If you cannot produce the required bond within the
              period specified in the contract (typically 10–15 business days after award), the
              government can rescind the award and offer it to the next bidder. Establish your
              surety relationship and pre-qualify for bonding capacity before you submit your
              first bid over $150,000.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="davis-bacon"
            number="04"
            title="Davis-Bacon: Prevailing Wages and Your Bid"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Davis-Bacon Act has applied to federal construction since 1931. If your contract
              exceeds $2,000 and involves construction, alteration, or repair of federal buildings
              or works, Davis-Bacon applies. There is almost no federal construction work below
              that threshold in practice — meaning Davis-Bacon applies to essentially every federal
              construction job you will encounter.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The law requires contractors and subcontractors to pay all laborers and mechanics
              no less than the <strong className="text-stone-800">locally prevailing wage</strong>{" "}
              for their specific trade classification in the county where work is performed. The
              Department of Labor publishes wage determinations for each county and trade — and
              these numbers vary dramatically by location. An electrician&apos;s prevailing wage
              in Manhattan and in rural Mississippi are nowhere close to each other. Check the
              specific wage determination for every county where your work takes place before
              you price a single hour.
            </p>

            <Callout icon={FileText} color="sky" title="What Davis-Bacon Requires in Practice">
              <ul className="space-y-1.5 mt-1">
                <li>
                  <strong>Prevailing wage payment:</strong> Pay workers at least the base hourly
                  rate plus fringe benefits listed in the applicable wage determination for each
                  job classification
                </li>
                <li>
                  <strong>Weekly payroll:</strong> Pay all workers at least weekly (not bi-weekly
                  or monthly)
                </li>
                <li>
                  <strong>Certified payroll reports:</strong> Submit Weekly Certified Payroll
                  Reports using DOL Form WH-347 (updated version effective January 2025) to the
                  contracting agency every week work is performed
                </li>
                <li>
                  <strong>Poster and wage determination:</strong> Post DOL poster WH-1321 and
                  the applicable wage determination on the job site in a prominent, accessible
                  location visible to workers
                </li>
                <li>
                  <strong>Fringe benefits:</strong> Pay the full fringe benefit rate — health
                  insurance, retirement, vacation, training. If your benefits package does not
                  cover the full fringe rate, pay the difference in cash
                </li>
                <li>
                  <strong>Flow-down:</strong> Davis-Bacon applies to all subcontractors and
                  lower-tier subs on the project — you are responsible for ensuring every sub
                  complies
                </li>
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              The Department of Labor finalized the first major overhaul of Davis-Bacon
              regulations in nearly 40 years in 2023, with the updated rules taking full effect
              in 2024. Key changes: the definition of &quot;prevailing wage&quot; was broadened,
              the WH-347 certified payroll form was updated in January 2025 with enhanced fringe
              benefit reporting fields, and civil penalties for violations increased to{" "}
              <strong className="text-stone-800">$13,508 per violation</strong>. The old form
              is accepted through September 30, 2026, after which only the updated WH-347 will
              be accepted.
            </p>

            <Callout icon={AlertTriangle} color="red" title="The Davis-Bacon Price Trap">
              The most expensive mistake you can make on a federal construction bid is using
              commercial wage rates to price a Davis-Bacon contract. If you regularly pay an
              electrician $38/hour commercially, but the Davis-Bacon wage determination for that
              county lists the prevailing wage at $52/hour plus $18 in fringe benefits, your
              labor cost assumption is off by 84%. Over a 12-month contract with a full crew,
              that gap will eliminate your margin entirely and then some. Pull the wage
              determination from{" "}
              <a
                href="https://www.dol.gov/agencies/whd/government-contracts/construction"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                DOL&apos;s prevailing wage page
              </a>{" "}
              before you estimate anything.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Davis-Bacon also flows down to every subcontractor on your project. As prime
              contractor, you are legally responsible for ensuring your subs are paying prevailing
              wages and submitting certified payrolls. Subs who cut corners on wages create
              liability for you — the DOL can hold the prime responsible for sub non-compliance,
              and violations can result in contract debarment in addition to the per-violation
              penalty.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Track certified payroll submissions systematically. A missed week of certified
              payroll — even for a crew of two workers — is a contract violation. Build a
              calendar reminder system into your project management before work starts, and
              collect certified payrolls from every sub weekly, not quarterly.
            </p>

            {/* CTA 2 */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 my-10 text-white animate-on-scroll">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">Find Construction Contracts Before Competitors Do</p>
                  <p className="text-emerald-100 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link
                      href="/features/intelligence"
                      className="text-emerald-200 hover:text-white underline"
                    >
                      contract intelligence
                    </Link>{" "}
                    tracks expiring construction contracts and flags recompetes 30–90 days before
                    the solicitation drops — enough lead time to pull the wage determination, price
                    accurately, and submit a competitive bid.
                  </p>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="set-asides"
            number="05"
            title="Set-Aside Programs for Construction Firms"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside programs are your biggest competitive lever as a small construction
              company. When a solicitation is restricted to certified businesses, you are not
              competing against large national contractors — you are competing against a small
              pool of similarly sized regional firms. In construction, set-asides appear at
              every value level, from minor repair work under $150,000 to multi-million-dollar
              renovation projects.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  cert: "Small Business Set-Aside",
                  req: "Meet SBA size standard for the assigned NAICS code (typically $33.5M–$39.5M for construction)",
                  advantage:
                    "Mandatory for virtually all construction contracts between $35,000 and the SAT when Rule of Two is met. No certification required beyond SAM.gov registration as a small business.",
                  linkHref: "/blog/small-business-set-aside-threshold",
                  linkLabel: "Small Business Set-Aside Thresholds",
                  borderColor: "border-l-stone-400",
                  bgColor: "bg-stone-50",
                },
                {
                  cert: "8(a) Business Development",
                  req: "SBA-certified socially and economically disadvantaged small business",
                  advantage:
                    "Sole-source construction awards up to $4.5M without competition; competitive 8(a) set-asides above that threshold. Agencies with unmet construction needs actively use 8(a) to award construction projects quickly.",
                  linkHref: "/blog/8a-sole-source-contracts",
                  linkLabel: "8(a) Sole Source Contracts Guide",
                  borderColor: "border-l-blue-500",
                  bgColor: "bg-blue-50",
                },
                {
                  cert: "SDVOSB / VOSB",
                  req: "51%+ owned and operated by a service-disabled veteran",
                  advantage:
                    "Strong VA construction preference — VA is legally required to use SDVOSB/VOSB set-asides before full-and-open competition. VA hospital renovations and VA clinic buildouts frequently appear as SDVOSB set-asides.",
                  linkHref: "/blog/sdvosb-contracts-guide",
                  linkLabel: "SDVOSB Contracts Guide",
                  borderColor: "border-l-emerald-500",
                  bgColor: "bg-emerald-50",
                },
                {
                  cert: "HUBZone",
                  req: "Principal office in a designated HUBZone; 35% of employees reside in a HUBZone",
                  advantage:
                    "HUBZone set-asides plus a 10% price evaluation preference on full-and-open competitions. Rural and post-industrial areas with federal facilities often overlap with HUBZone geography — a natural fit for local construction firms.",
                  linkHref: "/blog/hubzone-program-guide",
                  linkLabel: "HUBZone Program Guide",
                  borderColor: "border-l-amber-500",
                  bgColor: "bg-amber-50",
                },
                {
                  cert: "WOSB / EDWOSB",
                  req: "51%+ woman-owned; EDWOSB adds economic disadvantage requirement",
                  advantage:
                    "Set-asides available in NAICS codes SBA designates as underrepresented for women — verify current construction codes on the SBA WOSB industry list. Construction remains an underrepresented industry for women, making WOSB set-asides a meaningful competitive advantage.",
                  linkHref: "/blog/wosb-certification-guide",
                  linkLabel: "WOSB Certification Guide",
                  borderColor: "border-l-violet-500",
                  bgColor: "bg-violet-50",
                },
              ].map(({ cert, req, advantage, linkHref, linkLabel, borderColor, bgColor }) => (
                <div
                  key={cert}
                  className={`animate-on-scroll rounded-xl p-5 border-l-4 ${borderColor} ${bgColor}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm mb-1">
                        <Link href={linkHref} className="text-blue-700 hover:underline">
                          {linkLabel}
                        </Link>
                      </p>
                      <p className="text-stone-600 text-xs mb-1">
                        <strong>Requirement:</strong> {req}
                      </p>
                      <p className="text-stone-600 text-xs">
                        <strong>Construction advantage:</strong> {advantage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One important construction-specific rule: for contracts over{" "}
              <strong className="text-stone-800">$1.5 million</strong>, prime contractors must
              submit a small business subcontracting plan committing to percentages of subcontract
              dollars flowing to small businesses, SDVOSBs, WOSBs, HUBZone firms, and 8(a)
              businesses. If you are a large construction prime, this creates a mandatory sourcing
              requirement. If you are a small construction company, these plans are your pathway
              into large prime contracts as a subcontractor — primes actively seek qualified small
              subs to meet their contractual commitments.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For a full overview of how certifications interact with each other and how to stack
              them, see our guide to{" "}
              <Link
                href="/blog/federal-contracting-certifications"
                className="text-blue-700 hover:underline"
              >
                federal contracting certifications
              </Link>
              . All SBA certifications are managed through{" "}
              <a
                href="https://certify.sba.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                certify.sba.gov
              </a>
              .
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="milcon"
            number="06"
            title="Military Construction: The MILCON Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Military Construction (MILCON) is a distinct federal budget category — Congress
              appropriates MILCON funding separately from operation and maintenance budgets, and
              it flows through specialized acquisition commands within the Army, Navy, Air Force,
              and Marine Corps. For construction companies, this means MILCON projects have their
              own procurement offices, their own contracting officers, and their own relationships
              to cultivate.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The two primary MILCON acquisition commands are the{" "}
              <strong className="text-stone-800">U.S. Army Corps of Engineers (USACE)</strong>{" "}
              and{" "}
              <strong className="text-stone-800">Naval Facilities Engineering Systems
              Command (NAVFAC)</strong>. USACE handles construction for Army installations and
              also executes a large Civil Works program (flood control, navigation, water
              resources). NAVFAC covers Navy and Marine Corps installations. The Air Force Civil
              Engineer Center manages Air Force and Space Force facilities. Each has district
              offices that procure regionally — finding and engaging the district office
              nearest your target installation is essential.
            </p>

            <Callout icon={HardHat} color="blue" title="MILCON Contract Sizes: Know What You Are Getting Into">
              MILCON projects run the full size range, from sub-$100,000 repair orders to
              $50M+ barracks complexes. New construction projects above $2 million typically
              require design-build or design-bid-build delivery, which means you need either
              in-house design capability or a teaming agreement with an architecture/engineering
              firm. Most construction companies entering MILCON start with renovation and repair
              (R&amp;R) contracts, which are smaller, less complex, and do not require design
              services. R&amp;R contracts are frequently set aside for small businesses and are
              the fastest path to establishing MILCON past performance. See our guide on{" "}
              <Link
                href="/blog/government-contract-teaming-agreement"
                className="text-blue-700 hover:underline font-medium"
              >
                teaming agreements
              </Link>{" "}
              for how to structure a design-build partnership.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Multiple Award Construction Contracts (MACCs) and Indefinite Delivery/Indefinite
              Quantity (IDIQ) vehicles are increasingly common in MILCON. Rather than competing
              for a single project, you compete once for a spot on a multi-year vehicle — then
              receive task order competitions from agencies on the vehicle. Getting on one of these
              vehicles dramatically increases your MILCON opportunity pipeline without requiring
              you to bid from scratch on every project.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              NAVFAC&apos;s MACC vehicles and USACE&apos;s Indefinite Delivery contracts frequently
              include small business set-aside pools or small business task order set-asides within
              a larger unrestricted vehicle. Being on a USACE or NAVFAC IDIQ is worth the effort of
              winning the base vehicle even if the first task orders are modest — the volume of
              opportunities that flow from an active IDIQ typically far exceeds what you can find
              through open solicitations alone.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For a full explanation of IDIQ mechanics and how to pursue them, see our guide to{" "}
              <Link
                href="/blog/idiq-contracts-explained"
                className="text-blue-700 hover:underline"
              >
                IDIQ contracts
              </Link>
              . And if you are looking at DoD opportunities more broadly, our{" "}
              <Link
                href="/blog/dod-contracts-small-business"
                className="text-blue-700 hover:underline"
              >
                DoD small business guide
              </Link>{" "}
              covers the full DoD acquisition landscape.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="evaluation"
            number="07"
            title="How Agencies Score Construction Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal construction solicitations use one of two evaluation methods. Which one
              applies has a major effect on how you should write your proposal — and whether
              your price alone can win or whether quality factors determine the outcome.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">Factor</th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      LPTA (Lowest Price Technically Acceptable)
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Best Value / Tradeoff
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">How winner is chosen</td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Lowest price that meets minimum pass/fail requirements
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Agency weighs price against technical approach, past performance, safety record, and management plan
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">Where it appears</td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Simple, low-risk repair work; well-defined scope with minimal performance variability
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Complex projects, design-build, VA medical, MILCON — where performance risk is real
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">Price sensitivity</td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Extreme — price almost always decides the award
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Moderate — quality and past performance can justify a higher price
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">Safety plan</td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Acceptable / Unacceptable only
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Rated — EMR (Experience Modification Rate) and safety record are evaluated
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">Best for</td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Companies with efficient cost structures who can price below market
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Companies with strong past performance, low EMR, and detailed project management approach
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              On Best Value construction contracts, agencies typically evaluate these factors:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  factor: "Technical Approach / Management Plan",
                  weight: "35%",
                  note: "Project schedule, phasing plan, quality control system, coordination with facility occupants",
                },
                {
                  factor: "Past Performance",
                  weight: "30%",
                  note: "Relevant projects, similar scope and complexity, CPARS ratings, references with agency contacts",
                },
                {
                  factor: "Safety Record",
                  weight: "15%",
                  note: "Experience Modification Rate (EMR), OSHA 300 log, safety plan, safety officer qualifications",
                },
                {
                  factor: "Key Personnel",
                  weight: "10%",
                  note: "Project manager and superintendent qualifications and experience on similar federal work",
                },
                {
                  factor: "Price",
                  weight: "10%",
                  note: "Evaluated for realism and reasonableness; price alone rarely determines Best Value award",
                },
              ].map(({ factor, weight, note }) => (
                <div
                  key={factor}
                  className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 animate-on-scroll"
                >
                  <div className="w-14 shrink-0 text-center">
                    <span className="text-lg font-black text-blue-600">{weight}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-sm">{factor}</p>
                    <p className="text-stone-500 text-xs mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your Experience Modification Rate (EMR) is a critical differentiator on Best Value
              construction bids. The EMR measures your safety performance relative to the industry
              average — a score below 1.0 means you have fewer injuries than average; above 1.0
              means more. Many federal construction solicitations set a maximum EMR threshold
              (commonly 1.0 or 1.2) as a pass/fail requirement. Companies above the threshold
              are eliminated before price or technical factors are even reviewed.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Track your EMR and manage your safety program proactively. One serious OSHA
              recordable incident can push you over threshold and disqualify you from solicitations
              for up to three years (the EMR is based on a rolling three-year window). Document
              your safety program, conduct regular toolbox talks, maintain your OSHA 300 log
              meticulously, and report incidents correctly. A good safety record is worth more
              in federal construction bidding than a marginal price reduction.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="step-by-step"
            number="08"
            title="Your Path to First Construction Award"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Nine concrete steps. Tackle them in order and you can be submitting competitive
              federal construction bids within six to eight months.
            </p>

            <div className="space-y-5 my-6">
              {[
                {
                  step: "01",
                  title: "Register on SAM.gov and add your NAICS codes",
                  body: "Active SAM.gov registration is required before any federal contract award. Register your entity, add the NAICS 236, 237, and 238 subsector codes that apply to your work, and set a calendar reminder to renew annually. Initial registration takes 7–10 business days. Without an active SAM.gov registration, you cannot be awarded a federal construction contract.",
                },
                {
                  step: "02",
                  title: "Establish surety and bonding lines early",
                  body: "Contact a surety agent and begin the pre-qualification process before you bid on anything over $150,000. The surety will review your financial statements, credit, and project history. Establish your bonding capacity — your maximum single-project bond and your total bonding capacity — so you know which projects you can actually bid without a bonding problem at award. Budget 0.5%–3% of contract value for bond premiums.",
                },
                {
                  step: "03",
                  title: "Apply for every certification you qualify for",
                  body: "If you qualify for 8(a), SDVOSB, WOSB, or HUBZone, apply now through certify.sba.gov. Certifications take 30–90 days to process. Start in parallel with SAM.gov — there is no reason to wait. Each certification you hold multiplies the number of set-aside solicitations you can access. Stacking certifications is legal and powerful.",
                },
                {
                  step: "04",
                  title: "Build a federal capability statement",
                  body: "Your capability statement is a one-page document for contracting officers and prime contractors. Include your NAICS codes, size standard confirmation, certifications, bonding capacity, safety record (EMR), core competencies, differentiators, and 3–5 past performance references with contract numbers. Use CapturePilot to generate a professional version quickly.",
                },
                {
                  step: "05",
                  title: "Start as a subcontractor under a federal prime",
                  body: "If you have no federal past performance, subcontracting is the fastest path to documented federal experience. Find active federal construction contracts in your area through SAM.gov award data — the award announcement shows who the prime is. Contact them directly and offer specialized services. This gives you federal contract numbers, federal past performance references, and inside knowledge of how the agency evaluates performance.",
                },
                {
                  step: "06",
                  title: "Target renovation and repair contracts for first prime award",
                  body: "New construction projects require design teams, complex scheduling, and substantial bonding. Renovation and repair contracts are smaller, faster to complete, and frequently set aside for small businesses. A first prime award on a $200,000 renovation gives you CPARS ratings, agency references, and the credibility to pursue larger projects in subsequent bids.",
                },
                {
                  step: "07",
                  title: "Pull the Davis-Bacon wage determination before pricing",
                  body: "For every solicitation, download the applicable wage determination from DOL before you estimate a single labor hour. Prevailing wages vary significantly by county and trade classification. Using commercial wage rates on a Davis-Bacon contract will eliminate your margin. The wage determination is attached to every covered solicitation — read it carefully for every trade classification your crew includes.",
                },
                {
                  step: "08",
                  title: "Attend all pre-bid site visits",
                  body: "Site visits are mandatory or optional depending on the solicitation — attend both. Walk the facility. Identify existing conditions that could affect your scope, cost, and schedule. Talk to the contracting officer's representative about agency priorities. The information you gather on a site visit is directly reflected in your technical proposal — and evaluators can tell which bidders attended.",
                },
                {
                  step: "09",
                  title: "Submit a site-specific, fully priced proposal with strong past performance",
                  body: "Reference specifics from the solicitation and your site visit in your technical approach. Provide past performance references with contract numbers, agency contacts, CPARS ratings if available, and measurable outcomes (schedule adherence, zero OSHA recordables, no rework). Price all labor at prevailing wage rates, include bonding costs, and build in a realistic profit margin. Proposals that are accurate and specific win; proposals that are generic or underpriced create problems that last the full contract term.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 animate-on-scroll">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                    {step}
                  </div>
                  <div className="flex-1 pb-5 border-b border-stone-100 last:border-0">
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={TrendingUp} color="emerald" title="Building Federal Past Performance Without a Federal Contract">
              State, county, and municipal construction contracts count as government past
              performance in most federal evaluations. Win two or three contracts with a state
              DOT, a county public works department, or a public school district — document them
              with contract numbers, agency contacts, dollar values, and measurable outcomes.
              That is your foundation for federal bids. Local government procurement is less
              competitive than federal, processes faster, and builds the verifiable government
              performance record you need. See our guide on{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 hover:underline font-medium"
              >
                building past performance from zero
              </Link>
              .
            </Callout>
          </div>

          {/* CTA 3 */}
          <div className="rounded-2xl border border-stone-200 p-6 my-10 bg-stone-50 animate-on-scroll">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-stone-500 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-stone-900 text-lg mb-1">
                  Manage Your Federal Construction Pipeline
                </p>
                <p className="text-stone-600 text-sm mb-4">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-700 hover:underline">
                    pipeline management tools
                  </Link>{" "}
                  track every construction opportunity from Sources Sought through award — bid
                  decisions, site visit dates, submission deadlines, bonding requirements, and
                  Davis-Bacon wage determinations all in one place.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-800 transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="mistakes"
            number="09"
            title="Mistakes That Kill Construction Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These patterns show up in post-award debriefs and construction contractor failures,
              repeatedly, across every agency and every region.
            </p>

            <div className="space-y-4">
              {[
                {
                  mistake: "Pricing without checking the Davis-Bacon wage determination",
                  detail:
                    "Using commercial wage rates on a Davis-Bacon contract. The prevailing wage for a specific trade in a specific county is often 30%–80% higher than what you pay commercially. The gap does not become apparent until you are already locked into a price and losing money every pay period.",
                },
                {
                  mistake: "Bidding without established bonding capacity",
                  detail:
                    "Winning a contract and then discovering you cannot get the required performance and payment bonds. The government will rescind the award. Establish your surety relationship and pre-qualify before bidding on any contract over $150,000, not after you win.",
                },
                {
                  mistake: "Skipping the pre-bid site visit",
                  detail:
                    "Optional site visits are not optional — attend them. Conditions observed on site (hidden existing damage, access constraints, occupied-space restrictions, unusual materials) directly affect your cost estimate and schedule. Missing the site visit means your estimate is based on drawings that may not match reality.",
                },
                {
                  mistake: "Submitting a generic technical proposal",
                  detail:
                    "A project management plan that could apply to any construction project earns an Acceptable rating on Best Value evaluations. Acceptable never wins Best Value. Reference the specific facility, the specific phasing requirements, the occupant coordination issues, and the schedule constraints from the solicitation. Evaluators can tell the difference in 30 seconds.",
                },
                {
                  mistake: "Weak or missing past performance references",
                  detail:
                    "Listing past performance without CPARS ratings, agency contacts, contract numbers, and measurable outcomes. Unverifiable references receive a Neutral rating. Neutral past performance is rarely enough to win a Best Value construction award against competitors with documented, rated federal experience.",
                },
                {
                  mistake: "Ignoring the EMR (Experience Modification Rate)",
                  detail:
                    "Many federal construction solicitations set a maximum EMR threshold of 1.0 or 1.2. Companies above the threshold are eliminated at the responsibility determination stage — price and technical factors are never reviewed. Know your current EMR and manage your safety program proactively.",
                },
                {
                  mistake: "Not flowing Davis-Bacon down to subcontractors",
                  detail:
                    "As prime contractor, you are responsible for your subs' Davis-Bacon compliance. A sub that pays below prevailing wage creates violations that attach to your contract. Collect certified payroll reports from every sub weekly, verify compliance, and address discrepancies immediately — not at contract close-out.",
                },
                {
                  mistake: "Underestimating the subcontracting plan requirement",
                  detail:
                    "On contracts over $1.5 million, your subcontracting plan commits you to specific percentages of subcontract dollars going to small businesses, WOSBs, SDVOSBs, and HUBZone firms. Agencies can terminate for convenience or assess liquidated damages when primes miss their subcontracting commitments. Build a real plan with real subs identified — not percentage targets you cannot actually meet.",
                },
              ].map(({ mistake, detail }) => (
                <div
                  key={mistake}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 animate-on-scroll"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 text-sm mb-1">{mistake}</p>
                    <p className="text-red-700 text-xs leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white animate-on-scroll">
              <div className="flex items-start gap-3 mb-3">
                <Hammer className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <h3 className="text-2xl font-black">
                  Federal construction rewards preparation over price.
                </h3>
              </div>
              <p className="text-stone-300 leading-relaxed mb-6">
                The contractors who consistently win federal construction work do not simply
                low-bid their way to awards. They identify opportunities early, understand
                the compliance requirements cold, price accurately for Davis-Bacon and bonding,
                and submit site-specific proposals backed by documented past performance.
                CapturePilot gives you the{" "}
                <Link href="/features/intelligence" className="text-blue-300 hover:underline">
                  intelligence
                </Link>
                ,{" "}
                <Link href="/features/matching" className="text-blue-300 hover:underline">
                  matching
                </Link>
                , and{" "}
                <Link href="/features/pipeline" className="text-blue-300 hover:underline">
                  pipeline tools
                </Link>{" "}
                to build that systematic approach — from spotting expiring construction contracts
                90 days early to tracking every solicitation detail through submission.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/20 transition-colors border border-white/20"
                >
                  Check your eligibility <ArrowRight className="w-4 h-4" />
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
