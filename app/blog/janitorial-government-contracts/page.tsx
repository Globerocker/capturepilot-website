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
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-janitorial", label: "Why Janitorial Contracts Are Different" },
  { id: "market-size", label: "The Federal Custodial Market: Size and Buyers" },
  { id: "naics-codes", label: "NAICS 561720 and When to Use 561210" },
  { id: "set-asides", label: "Set-Aside Programs for Custodial Businesses" },
  { id: "abilityone", label: "The AbilityOne Factor Every Bidder Must Know" },
  { id: "evaluation", label: "How Agencies Score Janitorial Bids" },
  { id: "step-by-step", label: "Your Path to First Award" },
  { id: "past-performance", label: "Solving the Past Performance Problem" },
  { id: "quality-control", label: "Writing a Quality Control Plan That Wins" },
  { id: "mistakes", label: "Mistakes That Kill Janitorial Bids" },
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

export default function JanitorialGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
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
              Janitorial Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Janitorial Government Contracts:{" "}
            <span className="gradient-text">A $2.7 Billion Opportunity</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Federal agencies clean millions of square feet every day — courthouses, military
            bases, VA hospitals, post offices, federal office buildings. That demand does not
            stop when budgets get tight. Contracts run{" "}
            <strong className="text-stone-700">one base year plus four option years</strong>,
            small businesses win the majority of awards, and competition stays local. Here is
            how to get your piece of this market.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 28, 2026</span>
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
            id="why-janitorial"
            number="01"
            title="Why Janitorial Contracts Are Different"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most government contracting niches are ferociously competitive. Management consulting,
              cybersecurity, professional services — you are fighting large primes, long-tenured
              incumbents, and bidders who have spent years cultivating agency relationships. Janitorial
              is structurally different, and that difference favors small businesses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The work is local. A contracting officer at a federal courthouse in Memphis is not flying
              in a cleaning crew from Seattle. Your competition is other local businesses — the same
              pool you already know. Set-aside janitorial contracts typically draw five to fifteen
              bidders, far fewer than most professional services categories.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The contracts recur. Every building the government occupies needs cleaning every day it
              is occupied. Budget cuts do not cancel custodial services — they might reduce frequency,
              but the contract continues. Win a 1+4 (one base year plus four one-year options) contract
              and perform well: five years of predictable monthly billings. That revenue lets you hire,
              invest in equipment, and build the past performance record that opens doors to larger
              federal work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The barrier to entry is real but manageable. You need SAM.gov registration, relevant
              experience, a quality control plan, and bonding capacity — none of which requires
              specialized federal expertise to obtain. Compare that to{" "}
              <Link
                href="/blog/federal-contracting-certifications"
                className="text-blue-700 hover:underline"
              >
                multi-year certification processes
              </Link>{" "}
              or the cleared-personnel requirements of defense IT work. A commercial cleaning company
              with two years of verifiable references and the right certifications can be competitive
              on federal awards within six months of deciding to pursue this market.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$22M",
                  label: "SBA size standard for NAICS 561720 — most cleaning companies qualify easily",
                  color: "text-sky-600 bg-sky-50 border-sky-100",
                },
                {
                  icon: Clock,
                  stat: "1 + 4",
                  label: "Standard contract term: one base year plus four option years",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: Target,
                  stat: "5–15",
                  label: "Typical bidder count on small business set-aside janitorial contracts",
                  color: "text-violet-600 bg-violet-50 border-violet-100",
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
            title="The Federal Custodial Market: Size and Buyers"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government is the single largest purchaser of janitorial and custodial
              services in the United States. Federal agencies collectively spend over $2.7 billion
              annually on building cleaning and facility maintenance — spanning hundreds of agencies
              across thousands of facilities in every state.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              GSA&apos;s Public Buildings Service alone manages 370 million square feet of federal space
              across more than 8,700 buildings and structures. Every occupied square foot requires
              routine custodial services — restrooms, lobbies, common areas, offices. GSA&apos;s Facilities
              Large Category reported over $1.5 billion in contractor sales in FY2025, and that covers
              only the GSA-procured slice of the market. DoD, the VA, USDA, and dozens of civilian
              agencies each run their own custodial procurement programs independently.
            </p>

            <Callout icon={Building2} color="sky" title="Major Federal Buyers of Janitorial Services">
              <ul className="space-y-1.5 mt-1">
                <li>
                  <strong>GSA — Public Buildings Service:</strong> Courthouses, federal office
                  buildings, land ports of entry, general-purpose administrative space
                </li>
                <li>
                  <strong>Department of Defense:</strong> Army, Navy, Air Force, and Marine Corps
                  bases, barracks, administrative buildings, hangars, warehouses
                </li>
                <li>
                  <strong>Department of Veterans Affairs:</strong> 170+ medical centers, 1,000+
                  outpatient clinics, and regional offices across the country
                </li>
                <li>
                  <strong>USDA:</strong> Research stations, field offices, Forest Service facilities,
                  Farm Service Agency locations
                </li>
                <li>
                  <strong>Department of Justice / BOP:</strong> Federal prisons, detention centers,
                  US Attorneys&apos; offices, DEA field offices
                </li>
                <li>
                  <strong>USPS:</strong> Processing and distribution centers, carrier annexes,
                  retail post offices
                </li>
                <li>
                  <strong>DHS:</strong> CBP ports of entry, ICE detention facilities, USCIS
                  district offices, TSA checkpoints
                </li>
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              DoD deserves particular attention. Military installations are essentially self-contained
              cities — dining facilities, barracks, administrative buildings, fitness centers, clinics,
              warehouses — all requiring continuous custodial services. Base contracts are often large
              in total value (some exceed $10 million over the full five-year term) but structured with
              annual options, which means you can scale your workforce gradually rather than hiring for
              the full contract on day one.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              VA medical centers are a premium segment. Medical-grade cleaning — the kind that meets
              Joint Commission standards and requires EPA-registered disinfectants, proper dilution
              control, and OSHA bloodborne pathogen training — commands higher billing rates and is
              less price-sensitive than standard office cleaning. If your company has healthcare
              cleaning experience, VA contracts offer better margins than typical federal office work.
              Check{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-700 hover:underline">
                our VA contracts guide
              </Link>{" "}
              for the full picture on winning VA work.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="naics-codes"
            number="03"
            title="NAICS 561720 and When to Use 561210"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Your NAICS code controls which solicitations you appear in, which set-aside programs
              you can access, and whether you qualify as a small business under federal size standards.
              Two codes matter for janitorial businesses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              <strong className="text-stone-800">NAICS 561720 — Janitorial Services</strong> is your
              primary code. It covers establishments providing routine interior building cleaning:
              office cleaning, floor care (sweeping, mopping, waxing), restroom servicing, window
              washing, and general custodial work. The SBA small business size standard is{" "}
              <strong className="text-stone-800">$22 million in average annual receipts</strong> over
              the preceding five fiscal years. Most commercial cleaning companies fall well under this
              threshold.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              <strong className="text-stone-800">NAICS 561210 — Facilities Support Services</strong>{" "}
              applies when a contract bundles janitorial with other building operations — minor
              maintenance, security, grounds keeping, pest control, utilities management. Many large
              federal contracts at military bases and VA hospitals use 561210 because the scope
              includes multiple service lines delivered by one contractor. The size standard for
              561210 is higher than 561720 (check the current{" "}
              <a
                href="https://www.sba.gov/document/support-table-size-standards"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                SBA Table of Size Standards
              </a>{" "}
              for the current figure), which means more businesses qualify as small under it.
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
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      561720
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Routine building cleaning, floor care, restrooms, windows
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $22M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Standard single-service janitorial solicitations
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      561210
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Bundled facility operations: cleaning + maintenance + other services
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Higher — see SBA table
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Multi-service base ops and integrated facilities contracts
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      561730
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Landscaping, grounds maintenance, exterior upkeep
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $9.5M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      When scope includes exterior grounds
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Use the NAICS code the solicitation specifies. Contracting officers assign the
              applicable code when they draft the solicitation, and your size standard eligibility
              is tested against that specific code. Register both 561720 and 561210 on SAM.gov
              and include both on your{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-700 hover:underline"
              >
                capability statement
              </Link>
              . Registering a code does not commit you to anything — it tells agencies and prime
              contractors what work you are available to perform.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For a deeper overview of how to select and use NAICS codes strategically, see{" "}
              <Link
                href="/blog/best-naics-codes-small-business"
                className="text-blue-700 hover:underline"
              >
                The 10 Best NAICS Codes for Small Business Government Contractors
              </Link>
              .
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
                    See which certifications you qualify for right now — and how they reduce
                    your competition on janitorial solicitations across federal agencies.
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
            id="set-asides"
            number="04"
            title="Set-Aside Programs for Custodial Businesses"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside programs are the largest competitive lever available to small janitorial
              companies. When a contract is restricted to certified businesses, you are no longer
              competing against large national cleaning corporations — you are competing against a
              small pool of similarly sized local businesses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Under FAR 19.502-2, contracting officers must set aside contracts for small businesses
              when there is a reasonable expectation that at least two small businesses will submit
              offers at fair market prices. For a local janitorial contract, that threshold is almost
              always met. Most janitorial solicitations you encounter on SAM.gov are already set aside
              — full-and-open competitions are the exception, not the rule.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  cert: "Small Business Set-Aside",
                  req: "Meet SBA size standard for the assigned NAICS code ($22M for 561720)",
                  advantage:
                    "Mandatory for virtually all contracts; auto-applied at the micro-purchase threshold",
                  linkHref: "/blog/small-business-set-aside-threshold",
                  linkLabel: "Small Business Set-Aside",
                  borderColor: "border-l-stone-400",
                  bgColor: "bg-stone-50",
                },
                {
                  cert: "8(a) Business Development",
                  req: "SBA-certified socially and economically disadvantaged small business",
                  advantage:
                    "Sole-source awards up to $4.5M (services) without full competition",
                  linkHref: "/blog/8a-sole-source-contracts",
                  linkLabel: "8(a) Sole Source Contracts",
                  borderColor: "border-l-blue-500",
                  bgColor: "bg-blue-50",
                },
                {
                  cert: "SDVOSB / VOSB",
                  req: "51%+ owned and operated by a service-disabled veteran",
                  advantage:
                    "Mandatory preference at VA facilities; sole-source up to $5M",
                  linkHref: "/blog/sdvosb-contracts-guide",
                  linkLabel: "SDVOSB Contracts Guide",
                  borderColor: "border-l-emerald-500",
                  bgColor: "bg-emerald-50",
                },
                {
                  cert: "WOSB / EDWOSB",
                  req: "51%+ woman-owned; EDWOSB adds economic disadvantage requirement",
                  advantage:
                    "Set-asides available when SBA designates the NAICS code as underrepresented — verify 561720 on the current SBA WOSB list",
                  linkHref: "/blog/wosb-certification-guide",
                  linkLabel: "WOSB Certification Guide",
                  borderColor: "border-l-violet-500",
                  bgColor: "bg-violet-50",
                },
                {
                  cert: "HUBZone",
                  req: "Principal office in a designated HUBZone; 35% of employees reside in a HUBZone",
                  advantage:
                    "HUBZone set-asides plus a 10% price evaluation preference in full-and-open competitions",
                  linkHref: "/blog/hubzone-program-guide",
                  linkLabel: "HUBZone Program Guide",
                  borderColor: "border-l-amber-500",
                  bgColor: "bg-amber-50",
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
                        <strong>Janitorial advantage:</strong> {advantage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Stacking certifications is legal and powerful. An SDVOSB that is also HUBZone-certified
              can compete for SDVOSB set-asides, HUBZone set-asides, and small business set-asides
              simultaneously — triple the solicitations of an uncertified competitor. All major SBA
              certifications are managed through{" "}
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

            <Callout icon={Lightbulb} color="amber" title="Certification Stack Strategy">
              Apply for every certification you qualify for, not just the most obvious one. A
              veteran-owned business operating from a HUBZone location can hold SDVOSB and HUBZone
              certifications simultaneously. Each one opens a separate category of restricted
              solicitations. The applications are free and the marginal effort of a second
              certification — once you have assembled your documents for the first — is modest.
            </Callout>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="abilityone"
            number="05"
            title="The AbilityOne Factor Every Bidder Must Know"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              AbilityOne is the federal program that sources products and services from nonprofit
              agencies employing people who are blind or have significant disabilities. It maintains
              a Procurement List — a catalog of specific items and location-specific service contracts
              that federal agencies are legally required to purchase exclusively through designated
              AbilityOne nonprofits.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Custodial services are among the most common AbilityOne contracts. Many federal
              buildings — post offices, VA facilities, DoD installations, and other locations — have
              their cleaning services listed on the AbilityOne Procurement List under FAR 6.302-5.
              When a location is listed, the agency has no discretion: it must buy from that
              designated nonprofit, without competition, at any price.
            </p>

            <Callout
              icon={AlertTriangle}
              color="red"
              title="Check the AbilityOne Procurement List Before Every Bid"
            >
              Before responding to any janitorial solicitation, look up the specific facility on the{" "}
              <a
                href="https://www.abilityone.gov/procurement_list/services_custodial.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                AbilityOne Custodial Procurement List
              </a>
              . If the location appears on the list, no competitive bid you submit will win — the
              agency is legally bound to source from the designated nonprofit. Do not invest proposal
              time on locations where competition is statutorily prohibited.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              A recent GAO ruling clarified that agencies cannot circumvent AbilityOne by bundling.
              When GSA attempted to fold custodial services into a building lease rather than
              procuring them separately, the GAO sustained the protest and ordered GSA to contract
              the custodial services separately through the mandatory AbilityOne source. The
              obligation follows the work, not the contract vehicle.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This is not a dead end — it narrows your target list. Thousands of federal locations
              are not on the AbilityOne list and are open for competitive bidding. Focus there.
              Alternatively, many AbilityOne nonprofits hold more contracts than they can staff and
              actively seek commercial subcontractors to supplement their workforce. Subcontracting
              under an AbilityOne prime is a legitimate path into these facilities, and it builds
              the federal past performance you need to compete independently on non-listed locations.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                opportunity matching
              </Link>{" "}
              flags program restrictions on solicitations before you invest time building a proposal,
              so you spend effort only on opportunities that are genuinely open to competition.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="evaluation"
            number="06"
            title="How Agencies Score Janitorial Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Janitorial solicitations are evaluated under one of two frameworks. Which one applies
              changes everything about how you write your proposal and whether you should bid at all.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Factor
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      LPTA
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Best Value / Tradeoff
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      How winner is chosen
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Lowest price that meets minimum technical requirements
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Agency weighs price against technical approach, past performance, and QCP
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Price sensitivity
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Extreme — price almost always determines the winner
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Moderate — quality and experience can justify a higher price
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Technical approach
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Acceptable / Unacceptable only — pass or fail
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Scored and differentiated — detail and site specificity matter
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Past performance
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Acceptable / Unacceptable only
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Rated and compared — strong record earns higher scores
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 text-stone-700 font-medium">
                      Best for
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Companies with low costs who can price below market
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Companies with strong past performance and documented systems
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              GSA predominantly uses Best Value evaluation for its facilities contracts. DoD uses a
              mix — large base operations contracts lean toward Best Value, while smaller single-building
              awards often use LPTA. VA contracts tend to use Best Value because healthcare cleaning
              carries quality risk that agencies are not willing to reduce to a price competition.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              When Best Value applies, the typical evaluation weighting looks like this:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  factor: "Technical Approach",
                  weight: "30%",
                  note: "Site-specific cleaning plan, products, frequency, floor care methods",
                },
                {
                  factor: "Staffing Plan",
                  weight: "20%",
                  note: "Supervisor-to-worker ratio, training program, turnover and continuity plan",
                },
                {
                  factor: "Quality Control Plan",
                  weight: "20%",
                  note: "Inspection schedule, deficiency response times, documentation system",
                },
                {
                  factor: "Past Performance",
                  weight: "20%",
                  note: "Recent, relevant references — federal and government preferred",
                },
                {
                  factor: "Price",
                  weight: "10%",
                  note: "Evaluated for realism and reasonableness, not just for lowest figure",
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

            <p className="text-stone-600 leading-relaxed mb-6">
              The practical implication: on a Best Value contract, a company with strong past
              performance and a detailed Quality Control Plan can win against a lower-priced competitor.
              But only if the evaluators can see the differentiation in your proposal. Generic
              proposals rank in the middle regardless of price. Site-specific, evidence-backed
              proposals win.
            </p>

            {/* CTA 2 */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 my-10 text-white animate-on-scroll">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">Build Winning Proposals Faster</p>
                  <p className="text-emerald-100 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link
                      href="/features/proposals"
                      className="text-emerald-200 hover:text-white underline"
                    >
                      proposal tools
                    </Link>{" "}
                    help you structure technical volumes and Quality Control Plans that align with
                    the QASP language agencies use to score your proposal after award.
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

          {/* Section 7 */}
          <SectionHeading
            id="step-by-step"
            number="07"
            title="Your Path to First Award"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Eight steps. Follow them in order, and you will be positioned to bid competitively
              within six months.
            </p>

            <div className="space-y-5 my-6">
              {[
                {
                  step: "01",
                  title: "Register on SAM.gov",
                  body: "Active SAM.gov registration is required before any federal contract can be awarded to your business. Register your entity, add NAICS codes 561720 and 561210, and set a calendar reminder to renew annually before expiration. Initial registration takes 7–10 business days to process.",
                },
                {
                  step: "02",
                  title: "Secure your certifications",
                  body: "If you qualify for 8(a), SDVOSB, WOSB, or HUBZone, apply now through certify.sba.gov. Certifications take 30–90 days to process. The earlier you have them, the sooner you access set-aside solicitations. Do not wait for a specific contract to trigger this — start the process in parallel with SAM.gov registration.",
                },
                {
                  step: "03",
                  title: "Build a federal capability statement",
                  body: "Your capability statement is a one-page summary for federal decision-makers. Include your NAICS codes, size standard confirmation, certifications, bonding capacity, core competencies, differentiators, and 3–5 past performance references with contract numbers. Use CapturePilot to generate a professional version.",
                },
                {
                  step: "04",
                  title: "Set up SAM.gov opportunity alerts",
                  body: "Search for NAICS 561720 solicitations in your target geography. Filter by set-aside type matching your certifications. Create saved search alerts — you want to receive notifications the day a solicitation posts, not a week later. Responding to Sources Sought notices early can also influence the RFP requirements before they are finalized.",
                },
                {
                  step: "05",
                  title: "Attend pre-bid site visits",
                  body: "Go to every pre-bid site visit, mandatory or optional. Walk the facility. Count the restrooms. Note the floor types, the traffic patterns, the loading dock access. The specifics you observe become the differentiators in your technical proposal — and evaluators can tell which bidders attended versus which copied their proposal from the solicitation document.",
                },
                {
                  step: "06",
                  title: "Price the contract fully loaded",
                  body: "Check the applicable Service Contract Act (SCA) wage determination for each county where you will work before setting your price. SCA mandates minimum wages and fringe benefits for specific job classifications. Add bonding costs, insurance, supplies, equipment depreciation, overhead, and a realistic profit margin. Underbidding to win is the fastest path to losing money for five years.",
                },
                {
                  step: "07",
                  title: "Write a site-specific technical proposal",
                  body: "Reference specifics from the solicitation and your site visit. The number of restrooms on the second floor. The type of VCT flooring in the main corridor. The custodial closet locations on each level. Generic proposals score in the middle. Site-specific proposals score at the top.",
                },
                {
                  step: "08",
                  title: "Submit with a detailed QCP and strong references",
                  body: "Your Quality Control Plan and past performance references routinely carry more weight than your price on Best Value contracts. Each past performance reference should include the agency, contracting officer name and contact, contract number, period of performance, total value, and measurable outcomes. Numbers persuade — inspection pass rates, complaint resolution times, customer satisfaction scores.",
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
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="past-performance"
            number="08"
            title="Solving the Past Performance Problem"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The most common reason small janitorial companies lose federal bids is past performance.
              Federal evaluators want 3–5 recent, relevant contracts completed within the last five
              years. If you are new to government work, that creates an obvious problem. Three paths
              break it.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="Path 1: Start with Local Government">
              Municipal and county contracts are the fastest path to documented government experience.
              City hall, county courthouses, public libraries, transit authority facilities — all need
              cleaning, and local procurement is far less competitive than federal. Win two or three
              local government contracts, execute them well, and you have verifiable government past
              performance with contract numbers and contracting officer contacts. That is your
              foundation for federal bids. See our guide on{" "}
              <Link
                href="/blog/how-to-find-government-contracts-small-business"
                className="text-emerald-700 underline font-medium"
              >
                finding government contracts
              </Link>{" "}
              for where to search at the local level.
            </Callout>

            <Callout icon={Users} color="blue" title="Path 2: Subcontract Under a Federal Prime">
              Find a prime contractor that already holds a federal janitorial contract and offer to
              handle specific locations or supplemental staffing. The prime gets capacity relief; you
              get documented federal performance. Check SAM.gov award data for active custodial contracts
              in your geography — the award data shows who the prime is. Many large primes actively
              recruit small business subcontractors to meet their{" "}
              <Link
                href="/blog/subcontracting-government-contracts"
                className="text-blue-700 underline font-medium"
              >
                small business subcontracting plan
              </Link>{" "}
              commitments.
            </Callout>

            <Callout icon={Award} color="violet" title="Path 3: SBA Mentor-Protégé Program">
              The SBA Mentor-Protégé Program pairs experienced federal contractors with small
              businesses. When a mentor and a protégé form a joint venture, the joint venture can use
              the mentor&apos;s past performance to compete — including contracts the protégé could never win
              alone. Agencies cannot require a protégé to independently meet the same past performance
              criteria as other offerors. If you have strong commercial experience and zero federal
              track record, this is the fastest institutional path to federal janitorial awards.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              When you document past performance, quality beats quantity. Three well-documented
              references with measurable outcomes — 98% inspection pass rate across a 24-month period,
              zero sustained tenant complaints over 430 service visits — outperform five generic
              entries that just list contract numbers and dates. Evaluators are looking for evidence of
              reliability, not volume of work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For a full treatment of the subject, read{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 hover:underline"
              >
                Past Performance in Government Contracts: Why It Matters and How to Build It
              </Link>
              .
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="quality-control"
            number="09"
            title="Writing a Quality Control Plan That Wins"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most janitorial bidders submit a generic Quality Control Plan: a brief paragraph about
              supervisors checking work daily and responding to complaints promptly. Federal evaluators
              have read that paragraph hundreds of times. It scores in the middle of the pack, every
              time.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              A QCP that wins mirrors the agency&apos;s own Quality Assurance Surveillance Plan. GSA
              publishes its National Custodial Specification (most recent version: January 2026) and
              QASP templates on its public website. Study them. Build your QCP to match the inspection
              categories, frequency standards, and documentation requirements the agency will use to
              evaluate your performance after award. When an evaluator reads your QCP, it should feel
              like your plan was written for their building — because it was.
            </p>

            <Callout icon={FileText} color="sky" title="What a Strong Federal Janitorial QCP Covers">
              <ul className="space-y-1.5 mt-1">
                <li>
                  <strong>Inspection schedule:</strong> Daily, weekly, monthly, and quarterly
                  inspection frequencies matched to each task category in the PWS
                </li>
                <li>
                  <strong>Inspection forms:</strong> Specific checklists that mirror QASP categories
                  — restrooms, common areas, floors, offices, windows, entry areas
                </li>
                <li>
                  <strong>Supervisor accountability:</strong> Named supervisors, span of control
                  ratios, shift coverage plan, escalation chain
                </li>
                <li>
                  <strong>Deficiency response times:</strong> Tiered response — safety-related
                  deficiencies within 30 minutes, cleanliness deficiencies within 24 hours
                </li>
                <li>
                  <strong>Corrective action process:</strong> Root cause analysis, corrective
                  action plans, follow-up inspection to confirm resolution
                </li>
                <li>
                  <strong>Documentation system:</strong> How inspection logs are stored, who can
                  access them, how you provide reports to the contracting officer&apos;s representative
                </li>
                <li>
                  <strong>Tenant communication:</strong> How occupants submit complaints, your
                  acknowledgment standard, and how you close out issues in writing
                </li>
                <li>
                  <strong>Green cleaning:</strong> EPA Safer Choice or Green Seal certified products
                  where specified in the solicitation
                </li>
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Reference your inspection documentation software by name in the QCP. Tools like Swept,
              Janitorial Manager, or even a well-structured digital form system with timestamped,
              geotagged inspection records signal operational maturity. Evaluators know that companies
              running paper-based inspection systems rarely produce the audit trail federal contracts
              require.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For VA medical centers, your QCP must explicitly address healthcare infection control:
              EPA-registered hospital-grade disinfectants, proper product dilution controls, OSHA
              bloodborne pathogen training documentation, and isolation room protocols. Proposals that
              treat VA medical space identically to general office cleaning score poorly — evaluators
              see through it immediately.
            </p>

            {/* CTA 3 */}
            <div className="rounded-2xl border border-stone-200 p-6 my-10 bg-stone-50 animate-on-scroll">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-stone-500 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-stone-900 text-lg mb-1">
                    Build Your Federal Janitorial Pipeline
                  </p>
                  <p className="text-stone-600 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                      contract intelligence
                    </Link>{" "}
                    surfaces expiring janitorial contracts 30–90 days before recompete — enough lead
                    time to research the incumbent, attend site visits, and write a targeted proposal
                    before the solicitation drops. Early intelligence is the difference between a
                    reactive bid and a planned win.
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
            title="Mistakes That Kill Janitorial Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These are not theoretical warnings. They are the patterns that show up in debriefs
              and after-action reviews, repeatedly, across the federal janitorial market.
            </p>

            <div className="space-y-4">
              {[
                {
                  mistake: "Bidding without checking the AbilityOne list",
                  detail:
                    "Spending 20 hours on a proposal for a contract that is legally required to go to an AbilityOne nonprofit. Check the Procurement List before you open the solicitation document.",
                },
                {
                  mistake: "Ignoring the Service Contract Act wage determination",
                  detail:
                    "The McNamara-O'Hara Service Contract Act applies to most federal service contracts over $2,500 and mandates minimum wages and fringe benefits by job classification and county. Failing to check the applicable wage determination before pricing means your labor cost estimates may be significantly wrong. You will lose money for the full five-year term.",
                },
                {
                  mistake: "Pricing without accounting for bonding",
                  detail:
                    "Performance and payment bonds are often required within 10–15 days of contract award, typically equal to the full contract value. If your bonding capacity is not established before you bid, you risk the award being pulled. Establish your bonding lines first, then include the bonding premium in your price.",
                },
                {
                  mistake: "Submitting a generic technical approach",
                  detail:
                    "Evaluators can tell when a technical proposal was not written for their building. Generic approaches that could apply to any facility score in the Acceptable range at best. Site-specific proposals that reference square footage, floor types, and operational schedules from the site visit score Exceptional.",
                },
                {
                  mistake: "Thin or unverifiable past performance references",
                  detail:
                    "Listing past performance without contract numbers, agency contacts, period of performance, and measurable outcomes. Evaluators cannot verify vague references, and unverifiable past performance receives a Neutral or Unacceptable rating. Include specific metrics: contract value, inspection pass rates, complaint resolution times.",
                },
                {
                  mistake: "Missing or skipping the pre-bid site visit",
                  detail:
                    "Optional site visits feel optional. They are not. The information gathered on a site visit — floor conditions, access constraints, traffic patterns, incumbent shortcuts — is worth more than hours of additional proposal writing. Competitors who attended see things you will not from the solicitation document alone.",
                },
                {
                  mistake: "Underpricing to win, then failing to perform",
                  detail:
                    "A too-low price wins the award and then creates an impossible operating environment. You cut corners to protect margin. The agency issues deficiency notices. Your past performance rating drops. You lose the recompete and have a damaged reference. Price to operate sustainably from day one.",
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
                <Shield className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <h3 className="text-2xl font-black">
                  The federal janitorial market rewards preparation.
                </h3>
              </div>
              <p className="text-stone-300 leading-relaxed mb-6">
                Most competitors bid reactively — they spot a solicitation, price it roughly, and
                submit a template proposal. The businesses that build a systematic approach to
                opportunity identification, site visits, compliant pricing, and site-specific
                proposals win disproportionately. CapturePilot gives you the{" "}
                <Link href="/features/intelligence" className="text-blue-300 hover:underline">
                  intelligence
                </Link>
                ,{" "}
                <Link href="/features/matching" className="text-blue-300 hover:underline">
                  matching
                </Link>
                , and{" "}
                <Link href="/features/proposals" className="text-blue-300 hover:underline">
                  proposal tools
                </Link>{" "}
                to build that system — from identifying expiring contracts 90 days early to submitting
                a compliant, competitive bid on time.
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
