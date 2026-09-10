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
  Award,
  BarChart2,
  FileText,
  Zap,
  AlertCircle,
  Layers,
  TrendingUp,
  Clock,
  Building2,
  Users,
  CheckSquare,
  Package,
  Globe,
  Lock,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-a-contract-vehicle", label: "What a Contract Vehicle Actually Is" },
  { id: "vehicle-types", label: "The Four Types of Contract Vehicles" },
  { id: "gsa-mas", label: "GSA Multiple Award Schedule (MAS)" },
  { id: "gwacs", label: "GWACs: The Heavyweight Federal IT Contracts" },
  { id: "oasis-professional-services", label: "OASIS+: Professional Services at Scale" },
  { id: "small-business-vehicles", label: "Small Business–Exclusive Vehicles" },
  { id: "how-vehicles-differ", label: "How to Choose the Right Vehicle to Pursue" },
  { id: "getting-on-a-vehicle", label: "Getting On a Vehicle: What the Process Looks Like" },
  { id: "winning-task-orders", label: "Winning Task Orders Once You're In" },
  { id: "mistakes-to-avoid", label: "Five Mistakes That Kill Vehicle ROI" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet" | "orange" | "teal";
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
    teal: "bg-teal-50 border-teal-200 text-teal-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
    teal: "text-teal-600",
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
        <span className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function GovernmentContractVehiclesPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">Contract Vehicles</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Package className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Vehicles:{" "}
            <span className="gradient-text">
              GSA MAS, GWACs, MACs, and OASIS+ Explained for 2026
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            More than $72 billion in federal contracts flow through vehicle contracts every year —
            GSA Schedules, GWACs, MACs, and IDIQs that agencies use over and over rather than
            running full open-market competitions. If you don't understand how vehicles work,
            you're invisible to a huge slice of federal spending. Here's what each type means,
            which ones matter for small businesses, and how to actually get positioned to win.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published September 10, 2026</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-24" ref={articleRef}>
        {/* Table of Contents */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-10 animate-on-scroll">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-stone-500" />
            <h2 className="font-bold text-stone-700 text-sm uppercase tracking-wider">In This Article</h2>
          </div>
          <ol className="space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-3 text-sm text-stone-600 hover:text-teal-600 transition-colors group"
                >
                  <span className="text-xs font-bold text-stone-400 group-hover:text-teal-400 mt-0.5 w-5 flex-shrink-0">
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
          <SectionHeading id="what-is-a-contract-vehicle" number="01" title="What a Contract Vehicle Actually Is" />

          <p className="text-stone-700 leading-relaxed mb-4">
            A contract vehicle is a pre-competed umbrella agreement that lets agencies place orders
            without running a full competition every time they need something. The government
            vets a pool of contractors once — checking their past performance, financial stability,
            and technical capabilities — then issues task orders or delivery orders against that
            pool for years.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Think of it as getting your vendor card punched. Without a seat on the right vehicle,
            agencies can't buy from you even if they want to. With a seat, you're on the shortlist
            every time they need what you do.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            In FY2025, vehicles accounted for $72.4 billion — 8.6% of total federal contract awards.
            That fraction has grown every year for a decade as agencies consolidate purchasing under
            vehicles to reduce administrative burden and improve oversight. An Executive Order on
            Procurement Consolidation issued in early 2026 is pushing the number higher still,
            requiring agencies to use GSA-managed vehicles like OASIS+ and Alliant 3 rather than
            standing up duplicative agency-specific contracts.
          </p>

          <Callout icon={BarChart2} color="teal" title="The $72B you might be missing">
            FY2025 data from GovSpend shows $72.4 billion awarded through GWAC and IDIQ vehicles.
            NASA SEWP V alone accounted for $11.16 billion — 15.4% of all vehicle spending. If
            you're winning open-market contracts but not on any vehicles, you're already working
            the smaller pool.
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            Vehicles create a tiered market. Open-market competition is where newcomers start.
            Contract vehicles are where established contractors generate predictable, recurring revenue
            with lower bid-and-proposal costs per dollar won.
          </p>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading id="vehicle-types" number="02" title="The Four Types of Contract Vehicles" />

          <p className="text-stone-700 leading-relaxed mb-4">
            Federal contracting vehicles come in four forms, and knowing the difference matters
            because the application process, the competition rules, and the revenue potential vary
            significantly between them.
          </p>

          {/* Vehicle type comparison table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="text-left p-3 font-bold rounded-tl-lg">Vehicle Type</th>
                  <th className="text-left p-3 font-bold">Managed By</th>
                  <th className="text-left p-3 font-bold">Who Can Order</th>
                  <th className="text-left p-3 font-bold rounded-tr-lg">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200 bg-white hover:bg-teal-50 transition-colors">
                  <td className="p-3 font-semibold text-stone-900">GSA Multiple Award Schedule (MAS)</td>
                  <td className="p-3 text-stone-600">GSA</td>
                  <td className="p-3 text-stone-600">All federal agencies + state/local (co-op)</td>
                  <td className="p-3 text-stone-600">Products, IT, services at commercial rates</td>
                </tr>
                <tr className="border-b border-stone-200 bg-stone-50 hover:bg-teal-50 transition-colors">
                  <td className="p-3 font-semibold text-stone-900">GWAC (Gov't-Wide Acquisition Contract)</td>
                  <td className="p-3 text-stone-600">GSA or NASA</td>
                  <td className="p-3 text-stone-600">All civilian agencies (some DoD)</td>
                  <td className="p-3 text-stone-600">Complex IT services, emerging tech</td>
                </tr>
                <tr className="border-b border-stone-200 bg-white hover:bg-teal-50 transition-colors">
                  <td className="p-3 font-semibold text-stone-900">MAC / MATOC / IDIQ Vehicle</td>
                  <td className="p-3 text-stone-600">Individual agencies</td>
                  <td className="p-3 text-stone-600">Ordering agency only (sometimes multi-agency)</td>
                  <td className="p-3 text-stone-600">Agency-specific, construction, professional services</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-teal-50 transition-colors">
                  <td className="p-3 font-semibold text-stone-900">Blanket Purchase Agreement (BPA)</td>
                  <td className="p-3 text-stone-600">Individual agencies or GSA</td>
                  <td className="p-3 text-stone-600">Ordering agency or designated users</td>
                  <td className="p-3 text-stone-600">Recurring, repetitive buys at pre-negotiated prices</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The key distinction that trips up new contractors is "who can order." A GWAC like
            Alliant 3 is usable by any civilian federal agency. An agency-specific IDIQ MAC —
            like the Army's ITES-3S — is only usable by Army buyers. If you win a seat on a
            narrow agency contract, you're locked into one customer's buying patterns.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            GWACs and the GSA MAS are where you want to be for market reach. Agency-specific
            vehicles are worth pursuing when you have a strong incumbent position or deep
            relationships at a particular agency.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="my-12 animate-on-scroll bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Not sure which vehicles you qualify for?</h3>
              <p className="text-teal-100 text-sm mb-4">
                CapturePilot's Quick Checker scans your NAICS codes, certifications, and
                size status against active vehicle on-ramps — free, in under two minutes.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-teal-50 transition-colors"
              >
                Check your vehicle eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading id="gsa-mas" number="03" title="GSA Multiple Award Schedule (MAS)" />

          <p className="text-stone-700 leading-relaxed mb-4">
            The GSA Multiple Award Schedule — officially called the GSA MAS, and formerly known
            as the Federal Supply Schedule or GSA Schedule — is the federal government's
            primary commercial purchasing program. In FY2025, agencies bought $51.5 billion
            worth of products and services through it.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The MAS works like a commercial catalog with pre-negotiated pricing. GSA approves
            contractors and sets pricing ceilings based on commercial price lists. After that,
            ordering agencies can buy directly up to $25,000 without any competition among
            Schedule holders. Above $25,000 they need to get at least three quotes from
            Schedule contractors. Above $250,000, they need to document the market research
            more formally — but it's still far faster than a full open-market competition.
          </p>

          <Callout icon={AlertCircle} color="amber" title="The 2025 MAS shakeout">
            In March 2025, GSA announced a major rightsizing of the MAS program: contracts
            that don't meet minimum sales thresholds will be allowed to expire, redundant
            offerings trimmed, and non-compliant contractors removed. A mass modification
            issued in November 2025 restructured pricing requirements across all Schedule
            categories. If you're pursuing a GSA Schedule in 2026, verify your target
            Schedule is still active and the solicitation hasn't been consolidated into another.
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            The MAS covers 12 large categories: IT, professional services, facilities,
            industrial, human capital, transportation, security, marketing, office management,
            scientific management, environmental, and travel. Within those, there are hundreds
            of sub-categories called Special Item Numbers (SINs) — each one a specific
            type of product or service.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            One overlooked MAS feature: state and local governments can buy through it under
            the Cooperative Purchasing Program. If you're building a state-and-local pipeline
            alongside federal, a GSA Schedule serves both markets. Read more on expanding
            beyond federal in our{" "}
            <Link href="/blog/state-local-government-contracts" className="text-teal-600 hover:underline">
              state and local contracting guide
            </Link>.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-8">
            {[
              { label: "Annual MAS Spending", value: "$51.5B", sub: "FY2025" },
              { label: "Open to All Agencies", value: "Yes", sub: "Plus state/local co-op" },
              { label: "Typical On-Ramp Time", value: "6–12 mo", sub: "From offer to award" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-center hover-lift"
              >
                <div className="text-2xl font-black text-teal-700 mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-stone-700 mb-0.5">{stat.label}</div>
                <div className="text-xs text-stone-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading id="gwacs" number="04" title="GWACs: The Heavyweight Federal IT Contracts" />

          <p className="text-stone-700 leading-relaxed mb-4">
            Government-Wide Acquisition Contracts (GWACs) are IDIQ contracts managed by
            GSA or NASA for IT services. Unlike the MAS, GWACs are primarily for services —
            complex IT system development, cybersecurity, cloud infrastructure, AI development —
            and tend to be larger, more complex task orders than typical Schedule buys.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            GWACs require agencies to use them rather than stand up competing vehicles,
            which makes GWAC holders more valuable over time. The current major GWACs are:
          </p>

          {/* GWAC comparison */}
          <div className="space-y-4 my-8">
            {[
              {
                name: "Alliant 3",
                manager: "GSA",
                ceiling: "No ceiling",
                ordering: "March 2026 – March 2031 (+ 5-year option)",
                eligible: "All large and small business prime contractors",
                note: "Successor to Alliant 2 ($90.75B ceiling). Phase I NTP issued March 10, 2026. Fully open competition.",
                color: "border-teal-500 bg-teal-50",
              },
              {
                name: "Polaris",
                manager: "GSA",
                ceiling: "No ceiling",
                ordering: "Active, awards finalized through 2025",
                eligible: "Small businesses only (SB, WOSB, HUBZone, SDVOSB pools)",
                note: "Replaces the $15B Alliant 2 Small Business contract. 102 firms in SB pool. No ceiling is a deliberate policy choice to avoid Alliant 2's ceiling issues.",
                color: "border-violet-500 bg-violet-50",
              },
              {
                name: "NASA SEWP V",
                manager: "NASA",
                ceiling: "$20B (approx)",
                ordering: "Through 2025; SEWP VI in procurement",
                eligible: "Large and small business IT product/service providers",
                note: "The single largest vehicle by spend — $11.16B in FY2025. Heavily used by civilian agencies for commodity IT and emerging tech. SEWP VI solicitation expected in late 2026.",
                color: "border-blue-500 bg-blue-50",
              },
              {
                name: "8(a) STARS III",
                manager: "GSA",
                ceiling: "$50B",
                ordering: "Through 2029",
                eligible: "SBA-certified 8(a) firms only",
                note: "Sole-source available up to $25M. Ordered by all civilian agencies. One of the most valuable vehicles for certified 8(a) companies.",
                color: "border-emerald-500 bg-emerald-50",
              },
            ].map((vehicle) => (
              <div
                key={vehicle.name}
                className={`border-l-4 rounded-r-xl p-5 ${vehicle.color} animate-on-scroll`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <h3 className="font-black text-stone-900 text-lg">{vehicle.name}</h3>
                  <span className="text-xs font-bold text-stone-500 bg-white/70 px-2 py-0.5 rounded">
                    Managed by {vehicle.manager}
                  </span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-sm mb-3">
                  <div>
                    <span className="text-xs text-stone-400 uppercase font-bold">Ceiling</span>
                    <p className="text-stone-700 font-semibold">{vehicle.ceiling}</p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 uppercase font-bold">Ordering Period</span>
                    <p className="text-stone-700 font-semibold">{vehicle.ordering}</p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 uppercase font-bold">Who Can Hold It</span>
                    <p className="text-stone-700 font-semibold">{vehicle.eligible}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{vehicle.note}</p>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            GWACs matter because agencies are mandated to use them. An IT contractor without
            a GWAC seat — or without a teaming relationship with a GWAC holder — is locked
            out of the agency's preferred procurement path. Read our{" "}
            <Link href="/blog/nasa-sewp-federal-it" className="text-teal-600 hover:underline">
              detailed SEWP guide
            </Link>{" "}
            and the{" "}
            <Link href="/blog/multiple-award-contracts-guide" className="text-teal-600 hover:underline">
              MAC strategy guide
            </Link>{" "}
            for deeper dives on each.
          </p>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading id="oasis-professional-services" number="05" title="OASIS+: Professional Services at Scale" />

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ (One Acquisition Solution for Integrated Services Plus) is GSA's
            professional services GWAC — the equivalent of Alliant for non-IT services like
            program management, logistics, financial management, scientific research,
            environmental services, and facilities management.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ has no contract ceiling. That was a deliberate design choice: the original
            OASIS hit its ceiling limits and agencies couldn't order through it, which created
            procurement chaos. The + version removes the ceiling entirely.
          </p>

          <Callout icon={Lightbulb} color="blue" title="OASIS+ Phase II: Continuous on-ramp in 2026">
            On December 4, 2025, GSA expanded OASIS+ with Phase II: five new service Domains
            (bringing the total to 13) and continuous on-ramps across all six OASIS+
            solicitations, open as of January 12, 2026. Unlike Phase I's fixed deadline,
            Phase II lets you submit a proposal on a rolling basis — there's no single cutoff
            date to miss. Five of the six OASIS+ contracts are reserved for small businesses,
            including dedicated tracks for 8(a), HUBZone, WOSB, and SDVOSB firms.
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            The six OASIS+ pools are: Unrestricted (large and small), Small Business,
            8(a), HUBZone, WOSB, and SDVOSB. If you hold two or more certifications — say,
            you're an SDVOSB that's also HUBZone-certified — you can pursue multiple pools
            simultaneously, giving you more seats and more visibility to ordering agencies.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The 13 Domains in Phase II cover: Program Management, Logistics, Financial
            Management, Scientific and Engineering, Environmental, Facilities, Intelligence
            Services, Data Management, Language Services, Security and Mission Support,
            Training, Health and Biomedical, and Legal Services. If your work touches any
            of these areas, OASIS+ is probably the right vehicle to pursue.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Our{" "}
            <Link href="/blog/federal-procurement-forecast-guide" className="text-teal-600 hover:underline">
              federal procurement forecast guide
            </Link>{" "}
            covers how to use agency forecasts to identify which OASIS+ domains are getting
            the most task-order activity at specific agencies — useful for prioritizing
            proposal investments.
          </p>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading id="small-business-vehicles" number="06" title="Small Business–Exclusive Vehicles" />

          <p className="text-stone-700 leading-relaxed mb-4">
            Several vehicles are reserved entirely for small businesses. Agencies using these
            vehicles are required to award to small firms — large businesses can't compete,
            can't prime, and can't use their subcontractors to qualify. These are among the
            highest-value seats in federal contracting.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              {
                vehicle: "Polaris (SB Pool)",
                type: "IT GWAC",
                note: "102 small businesses awarded seats. No ceiling. GSA-managed. Any civilian agency can order.",
                icon: Globe,
                color: "bg-violet-50 border-violet-200 text-violet-700",
              },
              {
                vehicle: "8(a) STARS III",
                type: "IT GWAC",
                note: "$50B ceiling, through 2029. 8(a)-certified firms only. Sole-source available up to $25M per task order.",
                icon: Shield,
                color: "bg-emerald-50 border-emerald-200 text-emerald-700",
              },
              {
                vehicle: "OASIS+ Small Business",
                type: "Professional Services GWAC",
                note: "Continuous on-ramp since Jan 2026. 13 service domains. Dedicated pools for WOSB, HUBZone, SDVOSB.",
                icon: Building2,
                color: "bg-teal-50 border-teal-200 text-teal-700",
              },
              {
                vehicle: "GSA MAS Small Business",
                type: "Schedule",
                note: "Not a separate pool, but set-aside task orders are extremely common. Any small business with a Schedule can compete for set-aside order RFQs.",
                icon: FileText,
                color: "bg-sky-50 border-sky-200 text-sky-700",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.vehicle}
                  className={`border rounded-xl p-5 ${item.color} hover-lift`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-70" />
                    <div>
                      <h3 className="font-black text-stone-900 text-sm">{item.vehicle}</h3>
                      <span className="text-xs opacity-60">{item.type}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-700">{item.note}</p>
                </div>
              );
            })}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Agency-specific small-business MACs add another layer. The Army's ITES-3S, the
            Navy's SPAWAR vehicles, GSA's IT Schedule 70 (now part of MAS IT category) —
            these are supplementary rather than substitutes for the GWACs above. They're worth
            adding once you have a GWAC seat; they're not the place to start.
          </p>

          <Callout icon={Award} color="emerald" title="Certification is the gatekeeper">
            You can't get on Polaris WOSB pool without WOSB certification. You can't get on
            8(a) STARS III without SBA 8(a) certification. Pursuing a vehicle before you
            have the required certification wastes months. If you're unsure which
            certifications you qualify for, use{" "}
            <a href={CHECK_URL} className="underline font-semibold">
              CapturePilot's Quick Checker
            </a>{" "}
            — it maps your business profile to eligible certifications and vehicles in real time.
          </Callout>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading id="how-vehicles-differ" number="07" title="How to Choose the Right Vehicle to Pursue" />

          <p className="text-stone-700 leading-relaxed mb-4">
            You can't pursue every vehicle — each application costs real money, and proposal
            work for a major GWAC can run $50,000–$200,000 in internal effort. Here's the
            framework for prioritizing:
          </p>

          <div className="space-y-4 my-8">
            {[
              {
                step: "1",
                title: "Start with your NAICS codes",
                desc: "Every vehicle is scoped to specific NAICS codes or service categories. Alliant 3 and Polaris require NAICS codes in the 54 (professional services) or 51/33 (IT) ranges. OASIS+ is organized by Domain, each of which maps to a set of NAICS codes. Verify your NAICS codes align with the vehicle's scope before investing in a proposal.",
                color: "bg-teal-600",
              },
              {
                step: "2",
                title: "Check your certification status",
                desc: "Small-business-exclusive pools require verified certification. If you're pursuing 8(a) STARS III, you need active SBA 8(a) status. WOSB pools need WOSB certification through SBA or a third-party certifier. Run your eligibility check first — find out in minutes rather than discovering a disqualifier six months into proposal preparation.",
                color: "bg-violet-600",
              },
              {
                step: "3",
                title: "Match your past performance",
                desc: "GWACs require relevant, substantial past performance. Polaris and Alliant 3 evaluate it heavily — expect to need three to five contracts in the right NAICS, at meaningful dollar values, from the past three to five years. If you don't have that yet, the GSA MAS is a better first step — it has lighter past performance requirements.",
                color: "bg-blue-600",
              },
              {
                step: "4",
                title: "Assess your agency relationships",
                desc: "Even on a GWAC, your revenue depends on relationships. A seat on Alliant 3 with no relationships at civilian agencies is a license you can't use. Consider which vehicles are most used by the agencies where you already have presence. Use CapturePilot's intelligence module to see where spending is concentrated on each vehicle.",
                color: "bg-emerald-600",
              },
              {
                step: "5",
                title: "Look at on-ramp timing",
                desc: "OASIS+ has a continuous on-ramp. The GSA MAS accepts offers year-round. Polaris Phase I is closed but more pools may open. Alliant 3 Phase I NTP issued March 2026 — check whether additional on-ramp phases are announced. Never chase a vehicle just because a competitor mentioned it; check whether it's actually accepting proposals now.",
                color: "bg-amber-600",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 animate-on-scroll">
                <div
                  className={`w-8 h-8 rounded-full ${item.color} text-white flex items-center justify-center text-sm font-black flex-shrink-0 mt-1`}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The{" "}
            <Link href="/features/intelligence" className="text-teal-600 hover:underline">
              CapturePilot Intelligence module
            </Link>{" "}
            tracks historical spending by vehicle, agency, and NAICS code. Before you commit
            months to a vehicle proposal, verify that agencies actually spend money on your
            specific service area through that vehicle — not just that the vehicle theoretically
            covers your NAICS code.
          </p>
        </div>

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading id="getting-on-a-vehicle" number="08" title="Getting On a Vehicle: What the Process Looks Like" />

          <p className="text-stone-700 leading-relaxed mb-4">
            The application process varies significantly by vehicle type. Here's what to
            expect at each level:
          </p>

          <div className="my-8 space-y-6">
            {/* GSA MAS */}
            <div className="border border-stone-200 rounded-xl overflow-hidden animate-on-scroll">
              <div className="bg-teal-700 text-white px-5 py-3">
                <h3 className="font-bold">GSA Multiple Award Schedule</h3>
              </div>
              <div className="p-5">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-stone-700 mb-2">What you submit</h4>
                    <ul className="text-sm text-stone-600 space-y-1.5">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Offer in GSA eMod / eOffer system</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Commercial price list and discount schedule</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Past performance references (2–3 contracts)</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Financial statements</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" /> Representations and certifications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-700 mb-2">Timeline and cost</h4>
                    <ul className="text-sm text-stone-600 space-y-1.5">
                      <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> 6–12 months from offer to award</li>
                      <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Internal effort: 40–80 hours</li>
                      <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Consultant cost if outsourced: $8K–$25K</li>
                      <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Accepts offers year-round</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* OASIS+ */}
            <div className="border border-stone-200 rounded-xl overflow-hidden animate-on-scroll">
              <div className="bg-blue-700 text-white px-5 py-3">
                <h3 className="font-bold">OASIS+ (Phase II, open rolling)</h3>
              </div>
              <div className="p-5">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-stone-700 mb-2">What you submit</h4>
                    <ul className="text-sm text-stone-600 space-y-1.5">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Technical capability narrative by Domain</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Scored past performance examples</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Self-scoring matrix (OASIS+ uses point-based evaluation)</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" /> Certifications evidence (for set-aside pools)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-700 mb-2">Timeline and cost</h4>
                    <ul className="text-sm text-stone-600 space-y-1.5">
                      <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Rolling proposals — no hard cutoff</li>
                      <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Internal effort: 80–200 hours per Domain</li>
                      <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Consultant cost if outsourced: $25K–$75K</li>
                      <li className="flex items-start gap-2"><Lock className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Score threshold required for award</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Polaris / GWAC */}
            <div className="border border-stone-200 rounded-xl overflow-hidden animate-on-scroll">
              <div className="bg-violet-700 text-white px-5 py-3">
                <h3 className="font-bold">Polaris / Alliant 3 / Major GWACs</h3>
              </div>
              <div className="p-5">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-stone-700 mb-2">What you submit</h4>
                    <ul className="text-sm text-stone-600 space-y-1.5">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" /> Full technical and management volume</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" /> Substantial past performance documentation</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" /> Experience examples mapped to NAICS</li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" /> Key personnel and staffing plan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-700 mb-2">Timeline and cost</h4>
                    <ul className="text-sm text-stone-600 space-y-1.5">
                      <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Fixed RFP deadline; on-ramps years apart</li>
                      <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Internal effort: 300–600 hours</li>
                      <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Consultant cost: $75K–$200K+</li>
                      <li className="flex items-start gap-2"><TrendingUp className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" /> Highly competitive; need strong past perf</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Use our{" "}
            <Link href="/blog/proposal-color-teams" className="text-teal-600 hover:underline">
              proposal color team review guide
            </Link>{" "}
            and the{" "}
            <Link href="/resources/proposal-template" className="text-teal-600 hover:underline">
              proposal template
            </Link>{" "}
            to structure major GWAC submissions — the evaluation criteria for vehicles are
            typically well-documented in the solicitation and should drive every section you write.
          </p>
        </div>

        {/* Section 9 */}
        <div className="animate-on-scroll">
          <SectionHeading id="winning-task-orders" number="09" title="Winning Task Orders Once You're In" />

          <p className="text-stone-700 leading-relaxed mb-4">
            Getting on a vehicle is the first competition. Winning task orders is the second
            — and it's the one that generates actual revenue. Here's the reality: 10% of
            contractors with GWAC seats capture most of the spending. The rest hold unused
            seats.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Task orders under GWACs and MACs are competed among the vehicle's contract holders.
            Agencies issue a Request for Task Order Proposal (RTOP) or Request for Quote (RFQ)
            — like a mini-RFP — and pick from the pool. The advantage over open-market
            competition is speed (agencies can get quotes in days rather than weeks) and
            cost (you're already vetted, so the evaluation is narrower).
          </p>

          <Callout icon={Target} color="violet" title="What makes a vehicle seat valuable: relationships">
            An OASIS+ seat with no agency relationships is an expensive piece of paper.
            Agencies issue task orders to the firms they know. Before you spend six months
            pursuing a GWAC seat, map out which agencies you have existing relationships with,
            and verify those agencies actively order on that vehicle. That's the revenue path.
            CapturePilot's{" "}
            <a href="/features/pipeline" className="underline font-semibold">
              pipeline module
            </a>{" "}
            tracks which vehicle contracts have the most active task-order activity by agency.
          </Callout>

          <div className="my-8 space-y-4">
            <h3 className="font-bold text-stone-900">Seven habits of high-performing GWAC holders</h3>
            {[
              { text: "Monitor the vehicle's ordering portal daily — SAM.gov, GSA eBuy, or the GWAC-specific ordering system. Task orders move fast.", icon: CheckSquare },
              { text: "Build agency-specific BD pipelines. Know which program managers at your target agencies are most active on the vehicle.", icon: CheckSquare },
              { text: "Respond to every RFQ you're remotely qualified for in the first year — it builds a track record with that contracting office.", icon: CheckSquare },
              { text: "Invest in a proposal library for your vehicle. Task-order proposals reuse the same capability sections constantly.", icon: CheckSquare },
              { text: "Track your competitors' task-order wins using USASpending.gov. Know who's beating you and why.", icon: CheckSquare },
              { text: "Attend vehicle-specific industry days when agencies hold them. It's a pre-solicitation signal and a relationship opportunity.", icon: CheckSquare },
              { text: "Request debriefs on every lost task order — vehicle debriefs tend to be more candid than open-market ones.", icon: CheckSquare },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-stone-700 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Read our full guide on{" "}
            <Link href="/blog/government-contract-debriefing" className="text-teal-600 hover:underline">
              using debriefings to improve your win rate
            </Link>{" "}
            — the same principles apply to task-order losses as to prime contract losses.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 animate-on-scroll bg-stone-900 rounded-2xl p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Track vehicle task orders before your competitors do</h3>
              <p className="text-stone-400 text-sm mb-4">
                CapturePilot monitors GWAC and MAC task-order activity daily — new RFQs,
                recent awards, and agency spending patterns — so you're never caught flat-footed
                by a deadline.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-teal-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-teal-400 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 10 */}
        <div className="animate-on-scroll">
          <SectionHeading id="mistakes-to-avoid" number="10" title="Five Mistakes That Kill Vehicle ROI" />

          <p className="text-stone-700 leading-relaxed mb-4">
            Most companies that spend money on vehicle proposals and never generate revenue
            make one of the same five mistakes.
          </p>

          <div className="space-y-5 my-8">
            {[
              {
                num: "1",
                title: "Pursuing vehicles you don't have the past performance for",
                desc: "Polaris and Alliant 3 score past performance heavily. If you're submitting contracts under $500K or outside the relevant NAICS codes, your score won't clear the threshold. Check the evaluation criteria before investing in a proposal.",
                color: "bg-red-100 text-red-700 border-red-200",
                iconColor: "text-red-500",
              },
              {
                num: "2",
                title: "Getting on a vehicle at an agency where you have zero presence",
                desc: "Contracting officers use their known vendor pool first. An OASIS+ seat with no relationships at an agency means you might win a seat but never see a task order. Build the relationship before the seat, not after.",
                color: "bg-amber-100 text-amber-700 border-amber-200",
                iconColor: "text-amber-500",
              },
              {
                num: "3",
                title: "Treating the vehicle win as the finish line",
                desc: "A vehicle award is a license to compete, not revenue. Companies celebrate the GWAC award, then stop doing BD. The proposal investment doesn't pay off until the third or fourth task order won.",
                color: "bg-orange-100 text-orange-700 border-orange-200",
                iconColor: "text-orange-500",
              },
              {
                num: "4",
                title: "Not tracking which vehicles your agency customers actually use",
                desc: "A civilian agency that primarily orders through OASIS+ Professional Services isn't going to use your MAS IT Schedule for the same work. Use USASpending.gov or CapturePilot intelligence to see which vehicles each agency's program offices actually order from.",
                color: "bg-violet-100 text-violet-700 border-violet-200",
                iconColor: "text-violet-500",
              },
              {
                num: "5",
                title: "Letting the vehicle expire before you win anything",
                desc: "Vehicle periods of performance are finite. Alliant 2's ordering period ends June 2028. If you're on Alliant 2 and haven't won a task order, don't assume you'll just transition to Alliant 3 — Alliant 3 is a separate competition you have to win.",
                color: "bg-blue-100 text-blue-700 border-blue-200",
                iconColor: "text-blue-500",
              },
            ].map((item) => (
              <div
                key={item.num}
                className={`border rounded-xl p-5 ${item.color} animate-on-scroll`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.iconColor}`} />
                  <div>
                    <h3 className="font-black text-stone-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The{" "}
            <Link href="/blog/bid-no-bid-decision-framework" className="text-teal-600 hover:underline">
              bid/no-bid decision framework
            </Link>{" "}
            applies here too. A vehicle proposal is a bid — apply the same strategic filter
            before you invest. The{" "}
            <Link href="/features/intelligence" className="text-teal-600 hover:underline">
              CapturePilot Intelligence module
            </Link>{" "}
            surfaces the data you need to make that call: historical task-order frequency,
            average award value by vehicle and agency, and small-business award rates on
            each vehicle.
          </p>

          <Callout icon={Lightbulb} color="emerald" title="The fastest path to your first vehicle revenue">
            If you're starting from zero, the GSA MAS is usually the right first vehicle.
            It's the lowest barrier to entry, the most flexible in terms of what you can sell,
            and still puts you on $51.5 billion in annual federal purchasing activity.
            Once you have two or three MAS task orders under your belt, your past performance
            record is strong enough to pursue OASIS+ or Polaris. That sequence — MAS first,
            GWACs second — is how most small businesses build durable vehicle revenue.
          </Callout>
        </div>

        {/* Final CTA */}
        <div className="my-12 animate-on-scroll border-2 border-teal-200 bg-teal-50 rounded-2xl p-8">
          <h3 className="font-black text-stone-900 text-xl mb-2">
            Ready to find the right vehicle for your business?
          </h3>
          <p className="text-stone-600 text-sm mb-6 max-w-lg">
            CapturePilot maps your NAICS codes, certifications, and past performance to
            active vehicle on-ramps, then tracks task-order opportunities from the vehicles
            you're on. No more manually watching 30 portals.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-teal-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-teal-700 transition-colors"
            >
              Check your eligibility free <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white border border-teal-200 text-teal-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-teal-50 transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>

        {/* Related reading */}
        <div className="animate-on-scroll border-t border-stone-100 pt-10 mt-10">
          <h3 className="font-black text-stone-900 text-lg mb-6">Related Reading</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/gsa-schedule-guide", label: "GSA Schedule: Is It Worth It?", desc: "The real math on time, cost, and revenue potential." },
              { href: "/blog/multiple-award-contracts-guide", label: "Multiple Award Contracts Deep Dive", desc: "Task orders, on-ramps, and building MAC revenue." },
              { href: "/blog/nasa-sewp-federal-it", label: "NASA SEWP and Federal IT Vehicles", desc: "Complete guide for tech contractors." },
              { href: "/blog/idiq-contracts-explained", label: "IDIQ Contracts Explained", desc: "How multi-year IDIQ vehicles actually work." },
              { href: "/blog/ota-contracts-guide", label: "OTA Contracts: The Other Path", desc: "How Other Transaction Authority is changing defense procurement." },
              { href: "/blog/bid-no-bid-decision-framework", label: "Bid/No-Bid Decision Framework", desc: "How to stop pursuing opportunities that were never yours to win." },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-stone-200 rounded-xl p-4 hover:border-teal-300 hover:bg-teal-50 transition-all group"
              >
                <p className="font-bold text-sm text-stone-900 group-hover:text-teal-700 mb-1">{link.label}</p>
                <p className="text-xs text-stone-500">{link.desc}</p>
                <div className="flex items-center gap-1 mt-2 text-teal-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read guide <ArrowRight className="w-3 h-3" />
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
