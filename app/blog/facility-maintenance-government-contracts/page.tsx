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
  Wrench,
  Thermometer,
  Settings,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-om", label: "Why O&M Contracts Are Different" },
  { id: "market-size", label: "Market Size and Major Buyers" },
  { id: "naics-codes", label: "NAICS Codes: 561210 and the Supporting Cast" },
  { id: "gsa-bmo", label: "The GSA Building Maintenance & Operations Vehicle" },
  { id: "labor-laws", label: "Service Contract Act and Davis-Bacon: What You Must Know" },
  { id: "scope", label: "What Federal O&M Contracts Actually Require" },
  { id: "evaluation", label: "How Agencies Evaluate O&M Bids" },
  { id: "step-by-step", label: "Your Path to First O&M Award" },
  { id: "pricing", label: "Pricing O&M Contracts Without Leaving Money or Losing Your Shirt" },
  { id: "mistakes", label: "Mistakes That Kill O&M Bids" },
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

export default function FacilityMaintenanceGovernmentContractsPage() {
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
              Facility Maintenance Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Wrench className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Facility Maintenance Government Contracts:{" "}
            <span className="gradient-text">Winning O&amp;M Work</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government operates hundreds of millions of square feet of buildings,
            bases, and infrastructure — and every square foot needs ongoing operations and
            maintenance. Facility O&amp;M is one of the most accessible paths for small businesses
            because the contracts are local, recurring, and structured to favor qualified
            small businesses. Here is how to compete and win.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 1, 2026</span>
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
            id="why-om"
            number="01"
            title="Why O&M Contracts Are Different"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Operations and maintenance is the category where the federal government never stops
              spending. Agencies can pause hiring. They can defer IT modernization. They cannot
              stop maintaining their HVAC systems, repairing broken infrastructure, or keeping
              the lights on in occupied federal buildings. That structural demand makes O&amp;M
              contracts more durable than almost any other contract category.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The work is also geography-bound in a way that benefits small businesses. A
              contracting officer at a federal courthouse in Louisville is not going to hire a
              facility management firm from Phoenix. Your competition on most O&amp;M solicitations
              is local — businesses that operate in the same market you do. That is a fundamentally
              different competitive dynamic than defense IT or management consulting, where you are
              fighting national firms with established agency relationships and decades of federal
              past performance.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal facility contracts typically run one base year plus four one-year option
              periods. When you perform well, agencies exercise every option. That is five years of
              recurring revenue from a single win. Your workforce stabilizes. Your equipment
              depreciates on a predictable schedule. You accumulate the past performance record
              that makes subsequent federal bids easier to win.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The barrier to entry is meaningful but not unreasonable. You need active SAM.gov
              registration, relevant technical experience, appropriate certifications and insurance,
              and a demonstrated quality system. None of those require specialized federal expertise
              to obtain. A company with two to three years of comparable facility work — commercial,
              municipal, or institutional — can be competitive on federal O&amp;M awards within six months
              of deciding to pursue this market.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$47M",
                  label: "SBA size standard for NAICS 561210 — most facility service businesses qualify",
                  color: "text-amber-600 bg-amber-50 border-amber-100",
                },
                {
                  icon: Clock,
                  stat: "1 + 4",
                  label: "Standard contract term: one base year plus four option years",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: TrendingUp,
                  stat: "5–20%",
                  label: "Energy cost savings agencies see from well-managed O&M programs",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
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
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="market-size"
            number="02"
            title="Market Size and Major Buyers"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Facility operations and maintenance is one of the largest categories of federal
              service spending. NAICS 561210 (Facilities Support Services) consistently ranks
              among the top ten NAICS codes by small business prime contracting dollars across
              the entire federal government. The market spans every cabinet agency, every military
              branch, and hundreds of civilian bureaus.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The scale of recent contract activity illustrates what is available. The Department
              of State awarded up to{" "}
              <strong className="text-stone-800">$2.7 billion in facility O&amp;M IDIQ contracts</strong>{" "}
              to eight companies to cover operations and maintenance across 40+ domestic buildings
              — covering everything from plumbing and preventive maintenance to grounds care,
              custodial services, and fuel receiving. That is one agency&apos;s domestic portfolio.
              DoD, GSA, VA, and the Energy Department each manage portfolios on a comparable
              or larger scale.
            </p>

            <Callout icon={Building2} color="amber" title="Major Federal Buyers of Facility Maintenance Services">
              <ul className="space-y-1.5 mt-1">
                <li>
                  <strong>GSA — Public Buildings Service:</strong> 370 million sq ft across 8,700+
                  buildings and structures — courthouses, federal office buildings, land ports of
                  entry, and general-purpose administrative space
                </li>
                <li>
                  <strong>Department of Defense:</strong> Military installations, barracks,
                  administrative buildings, hangars, warehouses, dining facilities, and fitness
                  centers across every branch
                </li>
                <li>
                  <strong>Department of Veterans Affairs:</strong> 170+ VA medical centers, 1,000+
                  outpatient clinics, and regional benefit offices requiring ongoing operations and
                  maintenance
                </li>
                <li>
                  <strong>Department of Energy / NNSA:</strong> Research laboratories, nuclear sites,
                  and national lab facilities with specialized O&amp;M requirements
                </li>
                <li>
                  <strong>Department of State:</strong> Domestic administrative campus facilities
                  as well as overseas diplomatic facilities through the Overseas Buildings Operations
                  office
                </li>
                <li>
                  <strong>DHS:</strong> Ports of entry, ICE facilities, USCIS district offices,
                  TSA facilities, and Coast Guard stations
                </li>
                <li>
                  <strong>USDA / Forest Service:</strong> Research stations, ranger district
                  offices, visitor centers, and field facilities across the country
                </li>
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              DoD deserves particular focus for small businesses. Military installations are
              self-contained communities — they require all the facility services any large
              campus needs, but procurement is structured to support small business participation.
              Base operations support contracts often run $5 million to $30 million over a five-year
              term and are frequently set aside for small businesses or broken into smaller task
              orders that fit within small business thresholds.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              VA medical centers occupy a premium segment. Healthcare facility O&amp;M — Joint
              Commission compliance, infection control protocols, medical gas systems, specialized
              HVAC — commands higher billing rates and is evaluated more on technical competence
              than price. If your company has institutional or healthcare facility experience,
              VA contracts offer better margins than standard commercial O&amp;M work. Read our{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-700 hover:underline">
                VA contracts guide
              </Link>{" "}
              for the specifics of winning VA work.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="naics-codes"
            number="03"
            title="NAICS Codes: 561210 and the Supporting Cast"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Your NAICS code determines your size standard eligibility, which set-aside programs
              you can access, and which solicitations your SAM.gov search alerts will surface.
              Facility O&amp;M work spans several codes — and which one applies to a specific
              contract is decided by the contracting officer, not by you. Register the ones that
              reflect your actual capabilities.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      NAICS Code
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      What It Covers
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Size Standard
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      When It Applies
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-amber-700 font-bold">
                      561210
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Bundled facility operations: HVAC, electrical, plumbing, grounds, custodial, security
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $47M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Integrated O&amp;M, base operations support, multi-service facility contracts
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-mono text-amber-700 font-bold">
                      561720
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Routine interior cleaning: floors, restrooms, office areas, windows
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $22M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Stand-alone custodial contracts; often included within a 561210 scope
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-amber-700 font-bold">
                      561730
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Landscaping, grounds maintenance, snow removal, exterior upkeep
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $9.5M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Stand-alone grounds contracts or scope within a broader O&amp;M award
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-mono text-amber-700 font-bold">
                      238220
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Plumbing, HVAC installation and maintenance; mechanical systems
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $19M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Mechanical maintenance-only contracts; Davis-Bacon applies
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-amber-700 font-bold">
                      238210
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Electrical work, wiring, lighting systems
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $19M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Electrical maintenance and repair contracts; Davis-Bacon applies
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The key distinction for O&amp;M contractors is <strong className="text-stone-800">561210
              versus the specialty codes</strong>. When a contract bundles multiple disciplines —
              HVAC maintenance plus custodial plus grounds — the contracting officer almost always
              assigns 561210. Single-discipline contracts (just electrical, just mechanical, just
              grounds) typically use the more specific construction or support services codes.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Register all the NAICS codes that reflect your actual capabilities on SAM.gov. There
              is no cost to registering multiple codes, and each one opens an additional category
              of solicitations in your opportunity searches. Your size standard eligibility is tested
              against the code <em>the solicitation specifies</em>, not your primary code.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The $47M size standard on 561210 means that the vast majority of facility service
              businesses — including companies with substantial regional operations — qualify as
              small. That is intentional. Federal policy is designed to keep this market accessible
              to companies that are genuinely small relative to the large national firms. See{" "}
              <Link
                href="/blog/best-naics-codes-small-business"
                className="text-blue-700 hover:underline"
              >
                The 10 Best NAICS Codes for Small Business Government Contractors
              </Link>{" "}
              for a broader look at the highest-opportunity codes in federal contracting.
            </p>

            {/* CTA 1 */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 my-10 text-white animate-on-scroll">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">
                    Check Your Set-Aside Eligibility in 60 Seconds
                  </p>
                  <p className="text-blue-100 text-sm mb-4">
                    See which programs you qualify for right now — and how each one narrows your
                    competition on facility maintenance solicitations across federal agencies.
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

          {/* Section 4 */}
          <SectionHeading
            id="gsa-bmo"
            number="04"
            title="The GSA Building Maintenance &amp; Operations Vehicle"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              GSA&apos;s Building Maintenance and Operations (BMO) contract is the premier
              federal acquisition vehicle for facility services. It is a multiple-award, indefinite
              delivery, indefinite quantity (IDIQ) contract structured under the Federal Strategic
              Sourcing Initiative — meaning federal agencies can issue task orders against it without
              running their own full competition.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The BMO vehicle runs for{" "}
              <strong className="text-stone-800">10 years (one five-year base plus one five-year option)</strong>{" "}
              at the parent contract level. The maximum task order ceiling for the small business set-aside
              pool is{" "}
              <strong className="text-stone-800">$15 billion</strong>. That ceiling does not mean any
              individual company will receive $15B — it is the aggregate ceiling across all small business
              awardees. Individual task orders range from small single-building awards to large
              multi-building site operations contracts.
            </p>

            <Callout icon={Settings} color="sky" title="BMO Contract Structure: What You Need to Know">
              <ul className="space-y-1.5 mt-1">
                <li>
                  <strong>Two pools:</strong> Unrestricted (large and small businesses) and Small
                  Business Set-Aside — register separately for each if you qualify
                </li>
                <li>
                  <strong>Multiple award zones:</strong> BMO is structured in geographic zones;
                  your task order opportunities depend on which zones you are awarded under
                </li>
                <li>
                  <strong>Task order competition:</strong> Agencies request quotes from multiple BMO
                  holders; you respond with a site-specific price and technical approach
                </li>
                <li>
                  <strong>Socioeconomic categories:</strong> The small business pool includes
                  separate categories for 8(a), SDVOSB, WOSB, and HUBZone — additional
                  set-aside layers within the vehicle
                </li>
                <li>
                  <strong>Scope:</strong> BMO covers preventive maintenance, routine repairs,
                  cleaning, grounds, pest control, snow removal, utilities management, and minor
                  alterations
                </li>
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Getting onto the BMO vehicle is a significant upfront investment but unlocks a steady
              stream of task order opportunities without the overhead of responding to individual
              full-and-open competitions. Agencies that have established task orders under BMO can
              issue follow-on work without advertising on SAM.gov — you only see those opportunities
              if you are already on the contract.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              BMO is not the only IDIQ vehicle in this space. Many military installations run their
              own base operations support IDIQs. VA has regional O&amp;M vehicles. Individual agencies
              establish their own multiple-award BPA structures for recurring facility services.
              The common thread: getting onto the vehicle early means you compete for every task
              order that follows. Missing the on-ramp means you are locked out for the vehicle&apos;s
              lifetime.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                contract intelligence
              </Link>{" "}
              surfaces new IDIQ on-ramp opportunities and upcoming task order recompetes so you can
              position before solicitations close. See{" "}
              <Link href="/blog/idiq-contracts-explained" className="text-blue-700 hover:underline">
                IDIQ Contracts Explained
              </Link>{" "}
              for a full breakdown of how these vehicles work.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="labor-laws"
            number="05"
            title="Service Contract Act and Davis-Bacon: What You Must Know"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Two federal labor laws govern virtually every facility maintenance contract. Getting
              them wrong is the fastest path to unprofitable performance, labor violations, and a
              damaged past performance record. Get them right before you price a single bid.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="rounded-xl border border-stone-200 p-5 bg-stone-50 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-stone-900">Service Contract Act (SCA)</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  The McNamara-O&apos;Hara Service Contract Act applies to most federal service contracts
                  over $2,500 that employ service workers. It mandates minimum wages and fringe
                  benefits for specific job classifications — custodians, HVAC mechanics, electricians,
                  groundskeepers — based on locally prevailing rates determined by the Department of Labor.
                </p>
                <ul className="text-stone-600 text-xs space-y-1">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" /> Applies to service workers (cleaning, maintenance, grounds)</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" /> Wage determination included in every SCA-covered solicitation</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" /> Rates vary by county and job classification</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" /> Updated annually — check the current determination, not last year&apos;s</li>
                </ul>
              </div>

              <div className="rounded-xl border border-stone-200 p-5 bg-stone-50 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-stone-900">Davis-Bacon Act</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Davis-Bacon applies to federal contracts for construction, alteration, or repair
                  of public buildings or works exceeding $2,000. When your O&amp;M scope includes
                  significant repair or construction work — replacing a roof, major HVAC retrofits,
                  structural repairs — Davis-Bacon wage determinations apply to those workers.
                </p>
                <ul className="text-stone-600 text-xs space-y-1">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Applies to construction and significant repair work</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Requires certified payroll records (WH-347 form, updated Jan 2025)</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Violations carry civil penalties up to $13,508 per violation</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Wage determinations published on SAM.gov, updated quarterly</li>
                </ul>
              </div>
            </div>

            <Callout icon={AlertTriangle} color="red" title="Never Price Before Checking the Wage Determination">
              Every SCA-covered solicitation includes the applicable wage determination by county
              and job classification. Pull it. Add up your labor hours by classification. Apply the
              wage rates and fringe benefits. Only then build your price. SCA wages vary
              dramatically by location — a custodian in San Francisco earns significantly more than
              a custodian in rural Mississippi under the applicable wage determination. Guessing
              or using last year&apos;s rates gets you a contract you cannot perform profitably.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              On most O&amp;M contracts, the split between SCA and Davis-Bacon work is the
              distinction between routine maintenance (SCA) and repair or alteration work
              (Davis-Bacon). Preventive maintenance on an HVAC system is SCA. Replacing the
              entire HVAC system is Davis-Bacon. Your contract may include both — and you
              need separate labor cost structures for each.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              SCA fringe benefits matter as much as wages. The total compensation package —
              base wages plus health insurance, vacation, holidays, and pension contributions —
              is what the SCA measures. You can meet the fringe requirement through cash wages,
              employer-provided benefits, or a combination. Your payroll system must track and
              document compliance for every covered employee, every pay period.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="scope"
            number="06"
            title="What Federal O&amp;M Contracts Actually Require"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal facility O&amp;M contracts are more operationally complex than commercial
              facility management work. The Performance Work Statement (PWS) defines every task,
              frequency, and quality standard the agency will measure you against. Read the
              entire PWS before you price.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  service: "Preventive Maintenance",
                  icon: Settings,
                  color: "border-l-blue-500 bg-blue-50",
                  detail:
                    "Scheduled maintenance for HVAC systems, elevators, electrical panels, fire suppression systems, generators, and building automation systems. The PWS will specify frequencies — quarterly, semi-annual, annual — for each equipment type. Missed PM schedules are tracked and reported by the agency.",
                },
                {
                  service: "Corrective Maintenance / Repair",
                  icon: Wrench,
                  color: "border-l-amber-500 bg-amber-50",
                  detail:
                    "Responding to equipment failures and system breakdowns. Federal contracts typically define response time tiers: emergency (life-safety, within 1–2 hours), urgent (24 hours), routine (3–5 business days). Your staffing and subcontractor network must cover all three tiers for every system type in the scope.",
                },
                {
                  service: "Utilities Management",
                  icon: Thermometer,
                  color: "border-l-emerald-500 bg-emerald-50",
                  detail:
                    "Monitoring and managing energy consumption, reporting to agency sustainability coordinators, and implementing conservation measures. DOE FEMP guidelines inform many federal O&M contracts — well-executed programs can reduce energy costs by 5–20%, and agencies increasingly include energy performance metrics in contract KPIs.",
                },
                {
                  service: "Custodial and Grounds",
                  icon: Building2,
                  color: "border-l-violet-500 bg-violet-50",
                  detail:
                    "Interior cleaning, restroom servicing, floor care, window washing, and pest management (interior). Exterior scope typically includes grounds maintenance, landscaping, snow and ice removal, and exterior area cleaning. On integrated O&M contracts, these services run alongside mechanical maintenance under one contract.",
                },
                {
                  service: "Life Safety Systems",
                  icon: Shield,
                  color: "border-l-red-500 bg-red-50",
                  detail:
                    "Inspection, testing, and maintenance of fire alarm systems, fire suppression systems, emergency lighting, and egress equipment. Many federal contracts require National Institute for Certification in Engineering Technologies (NICET) certified technicians for fire protection systems work — verify certification requirements before bidding.",
                },
              ].map(({ service, icon: Icon, color, detail }) => (
                <div
                  key={service}
                  className={`animate-on-scroll rounded-xl p-5 border-l-4 ${color}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm mb-1">{service}</p>
                      <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Most agencies also require a Computerized Maintenance Management System (CMMS).
              You must log every work order, every preventive maintenance completion, and every
              equipment repair in a system the contracting officer&apos;s representative (COR) can
              audit in real time. Facilities Maintenance contracts at large installations often
              specify that you use the agency&apos;s existing CMMS (commonly Maximo, ServiceNow,
              or an agency-specific platform) — plan the training time and system access for
              your team before contract start.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Personnel security requirements add another layer. Most federal facilities require
              your workers to hold at minimum a National Agency Check with Inquiries (NACI)
              background investigation. Some require higher clearances. The process takes weeks
              to months — you cannot hire and deploy day-of-award without planning for it.
              Your staffing plan must account for investigation lead times from the moment you
              receive notice of award.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="evaluation"
            number="07"
            title="How Agencies Evaluate O&amp;M Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Facility O&amp;M contracts are almost universally evaluated under a Best Value
              framework, not Lowest Price Technically Acceptable. Agencies buying facility
              management services understand the risk of a technically marginal contractor
              — a failed HVAC system, a missed fire suppression inspection, or inadequate
              response to a water intrusion event can cost millions in damage and create
              significant liability. Price matters, but it is rarely the deciding factor.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Evaluation Factor
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Typical Weight
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      What Evaluators Look For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Technical Approach
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-bold text-amber-700">
                      30–35%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Site-specific PM schedules, response time commitments matched to tiered
                      requirements, CMMS methodology, energy management approach
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Staffing Plan
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-bold text-amber-700">
                      20–25%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Key personnel qualifications, certifications (NICET, EPA 608, electrician
                      licenses), supervisor ratios, surge capacity, continuity plan
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Quality Control Plan
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-bold text-amber-700">
                      20%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Inspection schedule and forms mirroring the QASP; deficiency escalation
                      procedures; documentation and reporting system; corrective action process
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Past Performance
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-bold text-amber-700">
                      15–20%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Recent (last 5 years), relevant (similar facility type and scope), with
                      documented CPARS ratings or verifiable references with measurable outcomes
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Price
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-bold text-amber-700">
                      10–15%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Evaluated for realism, not just lowest number — unrealistically low prices
                      raise risk flags; agencies want confidence you can actually perform
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The practical implication is clear: a Best Value evaluation rewards companies with
              strong qualifications over companies with the sharpest pencil. A technically strong
              proposal with 15% higher labor costs than the lowest bidder can win if the
              evaluators conclude the additional cost is justified by reduced performance risk.
              Your proposal needs to make that case explicitly — not assume the evaluators will
              infer it.
            </p>

            <Callout icon={Lightbulb} color="amber" title="What Differentiates Exceptional vs. Acceptable Ratings">
              Generic proposals — PM schedules that could apply to any building, QCPs lifted
              from boilerplate templates — score Acceptable. Acceptable rarely wins Best Value
              evaluations. Proposals that score Exceptional reference specifics from the
              Performance Work Statement and site visit: the building&apos;s actual equipment inventory,
              the specific response time tiers required, the CMMS platform the agency uses.
              Evaluators know immediately whether the offeror read the documents and walked
              the facility.
            </Callout>

            {/* CTA 2 */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 my-10 text-white animate-on-scroll">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">Build Site-Specific Winning Proposals</p>
                  <p className="text-emerald-100 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link
                      href="/features/proposals"
                      className="text-emerald-200 hover:text-white underline"
                    >
                      proposal tools
                    </Link>{" "}
                    help you structure technical volumes and Quality Control Plans that align
                    directly with the agency&apos;s QASP language — the same framework evaluators
                    use to score your proposal.
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

          {/* Section 8 */}
          <SectionHeading
            id="step-by-step"
            number="08"
            title="Your Path to First O&amp;M Award"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Eight steps, in order. Work through them systematically and you will be positioned
              to submit competitive bids within six months.
            </p>

            <div className="space-y-5 my-6">
              {[
                {
                  step: "01",
                  title: "Register on SAM.gov with the right NAICS codes",
                  body: "Active, current SAM.gov registration is required before any federal award. Add NAICS codes 561210, 561720, and any specialty codes that match your actual capabilities. Set a calendar reminder — SAM.gov registrations expire annually and a lapsed registration bars you from award. Initial processing takes 7–10 business days.",
                },
                {
                  step: "02",
                  title: "Pursue every certification you qualify for now",
                  body: "SDVOSB, 8(a), WOSB, and HUBZone certifications each open separate pools of restricted solicitations. Apply through certify.sba.gov. Certifications take 30–90 days to process — start immediately. Do not wait for a specific solicitation to trigger this. The marginal effort of a second certification, once your first is in process, is modest.",
                },
                {
                  step: "03",
                  title: "Build a federal capability statement",
                  body: "Your one-page capability statement is your calling card with federal contracting officers and prime contractors. Include your NAICS codes, size standard confirmation, certifications, bonding capacity, licensed trade personnel (NICET, EPA 608, licensed electricians and plumbers), key equipment, and 3–5 past performance references. Use CapturePilot's capability statement builder.",
                },
                {
                  step: "04",
                  title: "Set up targeted SAM.gov opportunity alerts",
                  body: "Search SAM.gov for NAICS 561210 and 561720 solicitations in your geographic target area. Filter by set-aside category matching your certifications. Create saved searches with email alerts so you see new postings the day they publish, not a week later. Also set alerts for Sources Sought notices — responding early can influence the requirements before the RFP is final.",
                },
                {
                  step: "05",
                  title: "Attend every pre-proposal site visit",
                  body: "Mandatory or optional, attend every site visit. Walk every floor. Inventory the equipment. Photograph HVAC units, electrical panels, and mechanical room conditions. Note access constraints, security checkpoints, and building hours. The specifics you capture on site walk become the differentiators in your technical proposal — your competitors who skip optional site visits won't have them.",
                },
                {
                  step: "06",
                  title: "Build your personnel and subcontractor bench",
                  body: "Federal O&M work requires licensed trades — HVAC technicians (EPA 608), licensed electricians and plumbers, NICET-certified fire protection technicians. If you don't have all disciplines in-house, establish teaming agreements with qualified subcontractors before you bid. Agencies will ask how you plan to cover every scope item on the PWS. 'We will hire as needed' is not a satisfactory answer.",
                },
                {
                  step: "07",
                  title: "Price using the SCA wage determination and full cost buildup",
                  body: "Pull the applicable SCA wage determination for your county before building any numbers. Calculate labor hours by classification, apply SCA wages and fringe rates, add overhead, insurance (general liability, workers' comp, auto, professional), bonding costs, CMMS licensing, uniforms, and equipment. Then apply your margin. Underbidding to win a five-year contract that loses money from month one is not a win.",
                },
                {
                  step: "08",
                  title: "Write a site-specific proposal",
                  body: "Every paragraph of your technical volume should reference specifics from the PWS and your site visit. The building's actual equipment inventory. The number of elevators and their inspection frequency. The specific CMMS the agency uses. The response time tiers in the contract. Proposals that could have been written without reading the PWS score Acceptable. Site-specific proposals score Exceptional.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 animate-on-scroll">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm">
                    {step}
                  </div>
                  <div className="flex-1 pb-5 border-b border-stone-100 last:border-0">
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you are starting with no federal past performance, read{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 hover:underline"
              >
                Past Performance in Government Contracts
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/subcontracting-government-contracts"
                className="text-blue-700 hover:underline"
              >
                Subcontracting on Government Contracts
              </Link>{" "}
              before your first bid. Subcontracting under an existing federal O&amp;M prime is
              the fastest path to documented federal experience — and many large primes actively
              recruit small business subs to meet their subcontracting plan commitments.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="pricing"
            number="09"
            title="Pricing O&amp;M Contracts Without Leaving Money or Losing Your Shirt"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal O&amp;M pricing is structured differently than most commercial facility
              management engagements. Understanding the structure is the difference between
              a profitable contract and five years of cash flow problems.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Most O&amp;M solicitations use a combination of{" "}
              <strong className="text-stone-800">Firm Fixed Price (FFP)</strong> line items for
              predictable, recurring work and{" "}
              <strong className="text-stone-800">Time and Materials (T&amp;M)</strong> line items
              for repair and corrective maintenance where scope cannot be pre-defined. Your FFP
              line items must cover your base operations costs with sufficient margin to absorb
              minor overruns. Your T&amp;M rates must reflect actual loaded labor costs — wages,
              fringe, overhead, profit — applied to realistic hours.
            </p>

            <Callout icon={DollarSign} color="emerald" title="The Fully Loaded Labor Cost Formula">
              <p className="mb-2">Build your FFP price from the bottom up, not from a market rate estimate:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Total labor hours by classification × SCA wage rate = base wages</li>
                <li>Base wages × fringe rate (SCA fringe + employer taxes) = total fringe</li>
                <li>(Base wages + fringe) × overhead rate = loaded labor</li>
                <li>Loaded labor + direct costs (materials, equipment, subcontractors) = direct cost total</li>
                <li>Direct cost total × (1 + G&amp;A rate) = fully burdened cost</li>
                <li>Fully burdened cost × (1 + profit %) = your price</li>
              </ol>
              <p className="mt-2 font-medium">
                Every component must be defensible. Unrealistically low prices raise risk flags in
                price analysis — contracting officers know what O&amp;M work costs in your market.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Option year pricing requires specific attention. SCA wage determinations update
              annually. Your option year prices need escalation built in — typically 3–5% per year
              depending on the wage determination history for your county and the CPI forecast.
              Locking in flat pricing across five option years and then watching SCA wages increase
              is the most common O&amp;M profitability trap.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Bond costs are often underestimated. Performance and payment bonds for federal
              contracts are typically required within 10–15 days of award and are sized to the
              full contract value (including options in some cases). Establish your bonding lines
              before you bid. Your bond premium — typically 0.5–2% of the contract value
              depending on your bonding history and the contract size — must be in your price.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For a complete treatment of pricing strategy, see{" "}
              <Link
                href="/blog/government-contract-pricing-strategies"
                className="text-blue-700 hover:underline"
              >
                Government Contract Pricing: Strategies to Win Without Losing Money
              </Link>
              .
            </p>

            {/* CTA 3 */}
            <div className="rounded-2xl border border-stone-200 p-6 my-10 bg-stone-50 animate-on-scroll">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-stone-500 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone-900 text-lg mb-1">
                    Build Your Federal Facility O&amp;M Pipeline
                  </p>
                  <p className="text-stone-600 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                      contract intelligence
                    </Link>{" "}
                    surfaces expiring O&amp;M contracts 30–90 days before recompete — enough lead
                    time to research the incumbent, attend site visits, and build a competitive
                    proposal before the solicitation drops. Track every opportunity through your{" "}
                    <Link href="/features/pipeline" className="text-blue-700 hover:underline">
                      pipeline
                    </Link>{" "}
                    from discovery to award.
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
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="mistakes"
            number="10"
            title="Mistakes That Kill O&amp;M Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These are not theoretical warnings. They show up in debriefs and post-award
              performance problems across the federal O&amp;M market.
            </p>

            <div className="space-y-4">
              {[
                {
                  mistake: "Bidding without checking personnel security requirements",
                  detail:
                    "Many federal facilities require background investigations before your workers can access the site. NACI investigations take 30–90 days. If you win the contract and cannot staff the building on day one because your people are waiting for clearances, you are immediately in default. Ask about investigation requirements before you price — the administrative cost of managing investigations is real.",
                },
                {
                  mistake: "Pricing SCA without the current wage determination",
                  detail:
                    "SCA wage determinations are updated annually and vary by county and job classification. Using last year's rates, using the wrong county, or guessing at classifications produces wrong labor costs. Underestimating labor cost on a five-year FFP contract is not recoverable. Pull the actual wage determination from the solicitation document before you calculate a single labor dollar.",
                },
                {
                  mistake: "Underestimating the CMMS requirement",
                  detail:
                    "Federal O&M contracts require documented work order management — every PM, every repair, every inspection logged and reportable. If the agency specifies their own CMMS (Maximo, ServiceNow, an agency-specific system), your team needs training time and system access before contract start. Agencies that can't audit your PM completion history will issue deficiency notices. Those notices affect your past performance rating.",
                },
                {
                  mistake: "Missing key personnel certification requirements",
                  detail:
                    "NICET Level II for fire protection. EPA 608 for refrigerant handling. State electrician and plumber licenses for the jurisdiction. Some contracts list these as mandatory requirements — missing one means a proposal is technically unacceptable regardless of price. Read the key personnel requirements in the PWS before you assume your existing team qualifies.",
                },
                {
                  mistake: "Flat option year pricing",
                  detail:
                    "Pricing all five contract years at the same rate and watching SCA wages increase by 4% per year. By year three, your margin is gone. By year five, you are performing at a loss. Build annual escalation into your option year prices. It is legal, it is expected, and contracting officers understand it.",
                },
                {
                  mistake: "Subcontractor commitments without teaming agreements",
                  detail:
                    "Promising electrical maintenance or fire systems work in your proposal without a written teaming agreement with a qualified sub. If your proposal says you will cover all PWS scope items and your sub backs out after award, you are performing out-of-scope work without the licensed personnel to do it. Get teaming agreements in writing before you bid.",
                },
                {
                  mistake: "Generic Quality Control Plan",
                  detail:
                    "QCPs that do not reference the specific facility, its equipment categories, or the QASP evaluation criteria score Acceptable at best. Best Value evaluations reward site-specific, detailed QCPs that mirror the agency's own Quality Assurance Surveillance Plan language. Study the QASP. Write your QCP as its counterpart.",
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

            {/* Final CTA block */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white animate-on-scroll">
              <div className="flex items-start gap-3 mb-3">
                <Award className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <h3 className="text-2xl font-black">
                  Federal O&amp;M rewards the prepared.
                </h3>
              </div>
              <p className="text-stone-300 leading-relaxed mb-6">
                Most O&amp;M bidders react — they find a solicitation, build a rough price, and
                submit a generic proposal. Companies that win consistently do the work before the
                RFP drops: they identify expiring contracts early, walk the facilities, establish
                teaming relationships, and build site-specific proposals that score Exceptional
                against every evaluation factor. CapturePilot gives you the{" "}
                <Link href="/features/intelligence" className="text-amber-300 hover:underline">
                  intelligence
                </Link>
                ,{" "}
                <Link href="/features/matching" className="text-amber-300 hover:underline">
                  matching
                </Link>
                , and{" "}
                <Link href="/features/proposals" className="text-amber-300 hover:underline">
                  proposal tools
                </Link>{" "}
                to build that discipline — from spotting recompetes 90 days early to submitting
                compliant, competitive bids on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-amber-600 transition-colors"
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
