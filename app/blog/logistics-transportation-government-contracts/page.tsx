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
  Truck,
  Package,
  MapPin,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-market", label: "The Market: Bigger Than You Think" },
  { id: "who-is-buying", label: "Who's Buying: Key Federal Agencies" },
  { id: "naics-codes", label: "NAICS Codes and Size Standards" },
  { id: "dla-factor", label: "The DLA Factor: Defense Logistics Contracts" },
  { id: "dot-infrastructure", label: "DOT and the Infrastructure Wave" },
  { id: "set-asides", label: "Set-Asides and Small Business Paths" },
  { id: "contract-vehicles", label: "Contract Vehicles to Get On" },
  { id: "evaluation", label: "How Agencies Score Transportation Bids" },
  { id: "step-by-step", label: "Your Path to First Award" },
  { id: "mistakes", label: "Mistakes That Kill Transportation Bids" },
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

export default function LogisticsTransportationGovernmentContractsPage() {
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
            <span className="text-stone-900 font-medium">
              Logistics &amp; Transportation Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Truck className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Logistics and Transportation Government Contracts:{" "}
            <span className="gradient-text">
              How to Break Into a $15 Billion Market
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government moves people, equipment, supplies, and fuel
            constantly — across bases, between agencies, and around the world.
            Federal and defense logistics spending runs into the tens of
            billions each year, and with the{" "}
            <strong className="text-stone-700">
              Infrastructure Investment and Jobs Act channeling $550 billion
              in new spending through FY 2026
            </strong>
            , the pipeline is fuller than it has been in decades. Small
            trucking companies, freight brokers, and 3PLs are winning
            real contracts. Here is how they do it.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 16, 2026</span>
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
      <article
        ref={articleRef}
        className="px-6 pb-24 max-w-4xl mx-auto prose-headings:font-black"
      >
        {/* Section 1 */}
        <SectionHeading
          id="the-market"
          number="01"
          title="The Market: Bigger Than You Think"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Most transportation companies assume federal contracting is for
            defense giants and Beltway insiders. The reality is more
            accessible. Federal, state, and local governments spend over{" "}
            <strong>$100 billion annually on transportation contracts</strong>,
            split across highway and bridge construction ($50B+), public
            transit operations ($25B+), school transportation ($15B+), freight
            and logistics ($10B+), and specialized transit. At the federal
            level alone, transportation and logistics contracts flow steadily
            through DOT, DLA, GSA, and every military branch.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            The scale is real: in FY 2024, the federal government awarded{" "}
            <strong>$773.68 billion in prime contracts</strong> across all
            industries, with transportation and logistics capturing a
            meaningful slice. The Defense Logistics Agency alone reported over{" "}
            <strong>$50 billion in wholesale and retail sales</strong> that
            same year — managing the supply chains that keep U.S. forces
            operational worldwide.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            Infrastructure changed the math further. The Infrastructure
            Investment and Jobs Act injected{" "}
            <strong>$550 billion in new federal spending</strong> into roads,
            bridges, ports, and transit systems, with funding flowing through
            FY 2026. That created a sustained surge in transportation-adjacent
            contracts: construction haul, heavy equipment transport, bridge
            material delivery, and logistics coordination for project sites.
          </p>
        </div>

        <Callout icon={DollarSign} color="blue" title="Market Numbers to Know">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Federal transportation funding estimated at{" "}
              <strong>$108.8 billion in FY 2025</strong>
            </li>
            <li>
              IIJA: <strong>$1.2 trillion over 5 years</strong>, $550B in new
              spending
            </li>
            <li>
              DLA FY 2024 sales: <strong>over $50 billion</strong>
            </li>
            <li>
              Small business set-aside goal:{" "}
              <strong>23% of all federal prime contract dollars</strong>
            </li>
            <li>
              DOT FY 2025 small business prime contracting goal:{" "}
              <strong>34%</strong>
            </li>
          </ul>
        </Callout>

        <p className="text-stone-700 leading-relaxed mb-4">
          You do not need to be a national freight carrier to compete. Agencies
          routinely award regional trucking contracts, last-mile delivery
          work, and freight brokerage arrangements to small businesses. The
          key is knowing which agencies buy what, which NAICS codes to
          register under, and which vehicle to target first.
        </p>

        {/* Section 2 */}
        <SectionHeading
          id="who-is-buying"
          number="02"
          title="Who's Buying: Key Federal Agencies"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Not every agency buys the same type of transportation service.
            Matching your capability to the right buyer is half the battle.
          </p>
        </div>

        <div className="overflow-x-auto animate-on-scroll">
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="bg-stone-900 text-white">
                <th className="text-left p-3 font-bold rounded-tl-lg">Agency</th>
                <th className="text-left p-3 font-bold">What They Buy</th>
                <th className="text-left p-3 font-bold rounded-tr-lg">
                  Entry Point
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  agency: "Defense Logistics Agency (DLA)",
                  buys: "Fuel delivery, vehicle parts, food logistics, medical supply transport",
                  entry: "DLA Internet Bid Board System (DIBBS), SAM.gov",
                },
                {
                  agency: "Dept. of Transportation (DOT)",
                  buys: "Transportation studies, freight data, transit planning support",
                  entry: "DOT Procurement Forecast, SAM.gov",
                },
                {
                  agency: "General Services Administration (GSA)",
                  buys: "Fleet management, motor pool, urban freight for federal buildings",
                  entry: "GSA Schedule 48 (Transportation), OASIS+",
                },
                {
                  agency: "U.S. Army / Air Force / Navy",
                  buys: "Household goods moves, base transport services, cargo logistics",
                  entry: "SAM.gov, USTRANSCOM solicitations",
                },
                {
                  agency: "FEMA",
                  buys: "Surge logistics, emergency freight, disaster supply chain",
                  entry: "FEMA vendor registry, SAM.gov",
                },
                {
                  agency: "VA (Veterans Affairs)",
                  buys: "Medical supply transport, patient van services, facility logistics",
                  entry: "VA procurement forecast, SAM.gov",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                >
                  <td className="p-3 border-b border-stone-200 font-semibold text-stone-900">
                    {row.agency}
                  </td>
                  <td className="p-3 border-b border-stone-200 text-stone-600">
                    {row.buys}
                  </td>
                  <td className="p-3 border-b border-stone-200 text-stone-600">
                    {row.entry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-stone-700 leading-relaxed mb-4">
          U.S. Transportation Command (USTRANSCOM) manages the military&apos;s
          global transportation system and regularly awards contracts to
          commercial carriers for domestic freight, international shipping, and
          port services. If you already hold commercial freight authority
          (MC number) from FMCSA, you have a head start — USTRANSCOM
          typically requires that baseline certification before considering
          new carriers.
        </p>

        <p className="text-stone-700 leading-relaxed mb-4">
          FEMA is a different beast. During disasters, the agency moves
          fast. Contracts go out with shortened competition timelines, and
          companies already registered in SAM.gov with a clear capability
          statement have a structural advantage over those trying to register
          mid-event. The time to prepare for a FEMA award is before the
          hurricane season, not after.
        </p>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-white/20 rounded-xl">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black mb-2">
                See Which Agencies Are Buying in Your Lane
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                CapturePilot scans active solicitations across DLA, DOT, GSA,
                and all military branches — filtered to your NAICS codes and
                certifications.
              </p>
              <Link
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <SectionHeading
          id="naics-codes"
          number="03"
          title="NAICS Codes and Size Standards"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Your NAICS codes determine which opportunities you can compete on
            and whether you qualify as a small business for set-aside purposes.
            Transportation and logistics spans a wide range of codes — register
            for every one that honestly describes what you do.
          </p>
        </div>

        <div className="overflow-x-auto animate-on-scroll">
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="bg-stone-900 text-white">
                <th className="text-left p-3 font-bold rounded-tl-lg">
                  NAICS Code
                </th>
                <th className="text-left p-3 font-bold">Description</th>
                <th className="text-left p-3 font-bold rounded-tr-lg">
                  Size Standard
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  code: "484110",
                  desc: "General Freight Trucking, Local",
                  standard: "$34M annual revenue",
                },
                {
                  code: "484121",
                  desc: "General Freight Trucking, Long-Distance Truckload",
                  standard: "$34M annual revenue",
                },
                {
                  code: "484122",
                  desc: "General Freight Trucking, Long-Distance LTL",
                  standard: "$34M annual revenue",
                },
                {
                  code: "484220",
                  desc: "Specialized Freight Trucking (local)",
                  standard: "$34M annual revenue",
                },
                {
                  code: "488510",
                  desc: "Freight Transportation Arrangement (3PL/brokerage)",
                  standard: "$20M annual revenue",
                },
                {
                  code: "493110",
                  desc: "General Warehousing and Storage",
                  standard: "$34M annual revenue",
                },
                {
                  code: "493190",
                  desc: "Other Warehousing and Storage",
                  standard: "$34M annual revenue",
                },
                {
                  code: "541614",
                  desc: "Process, Physical Distribution & Logistics Consulting",
                  standard: "$20M annual revenue",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                >
                  <td className="p-3 border-b border-stone-200 font-mono font-semibold text-blue-700">
                    {row.code}
                  </td>
                  <td className="p-3 border-b border-stone-200 text-stone-700">
                    {row.desc}
                  </td>
                  <td className="p-3 border-b border-stone-200 text-stone-600">
                    {row.standard}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-stone-700 leading-relaxed mb-4">
          A $34 million revenue ceiling is high enough that most regional
          carriers and 3PLs qualify as small businesses under these codes.
          That matters because it opens you up to set-asides worth billions
          in transportation contracts annually. Size standards are applied
          per NAICS code, per contract — so even if your company exceeds the
          standard in one code, you may still qualify as small under another.
        </p>

        <Callout icon={Lightbulb} color="amber" title="Register Multiple NAICS Codes">
          SAM.gov lets you list as many NAICS codes as your company legitimately
          performs. A freight broker that also warehouses goods should carry
          both 488510 and 493110. Each additional code you list legally
          expands your eligible opportunity pool without adding compliance
          burden. Use CapturePilot&apos;s{" "}
          <Link href="/features/matching" className="underline font-semibold">
            contract matching
          </Link>{" "}
          to see which codes are generating the most active solicitations in
          your region before you finalize your SAM profile.
        </Callout>

        {/* Section 4 */}
        <SectionHeading
          id="dla-factor"
          number="04"
          title="The DLA Factor: Defense Logistics Contracts"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            The Defense Logistics Agency is the U.S. military&apos;s primary
            supply chain manager. With over $50 billion in annual sales,
            DLA touches virtually every category a logistics company could
            provide: fuel, food, medical supplies, clothing, construction
            materials, and industrial parts — all requiring storage, transport,
            and last-mile delivery.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            DLA operates through several commodity-specific purchasing
            centers. For transportation companies, the most relevant are:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 my-6 animate-on-scroll">
          {[
            {
              icon: Package,
              title: "DLA Troop Support",
              desc: "Philadelphia-based. Handles food, clothing, textiles, and medical equipment — all requiring regional and local delivery contracts.",
            },
            {
              icon: Truck,
              title: "DLA Energy",
              desc: "Fort Belvoir-based. Manages fuel supply and distribution for all U.S. military installations — trucking is a core subcontracting need.",
            },
            {
              icon: Building2,
              title: "DLA Distribution",
              desc: "Runs warehouse operations across 25+ locations. Warehouse management, inbound freight, and last-mile delivery contracts are issued regularly.",
            },
            {
              icon: MapPin,
              title: "DLA Land and Maritime",
              desc: "Columbus, OH-based. Procures spare parts and industrial supplies — local delivery contracts are common for regional carriers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-stone-200 rounded-xl p-5 hover-lift"
            >
              <item.icon className="w-5 h-5 text-blue-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-sm text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-stone-700 leading-relaxed mb-4">
          DLA posts solicitations through both SAM.gov and its own Internet
          Bid Board System (DIBBS). DIBBS is DLA&apos;s proprietary procurement
          platform and handles the bulk of its commodity buys. Register
          on DIBBS separately — a SAM.gov registration alone does not make
          you visible to DLA buyers using that system.
        </p>

        <Callout icon={Target} color="sky" title="Start With DLA Distribution">
          DLA Distribution is the most accessible entry point for small
          carriers and 3PLs. Their warehouse network — spanning sites from
          Susquehanna, PA to San Joaquin, CA — regularly issues drayage,
          inbound freight, and warehouse support contracts. Many are
          set-asides. If you have a commercial carrier authority and a
          clean safety record, you are qualified to compete.
        </Callout>

        {/* Section 5 */}
        <SectionHeading
          id="dot-infrastructure"
          number="05"
          title="DOT and the Infrastructure Wave"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            The Department of Transportation does not just regulate highways
            — it funds them. DOT&apos;s own procurement budget runs in the
            billions for services including transportation research, planning
            support, transit technical assistance, and freight data analysis.
            Its FY 2025 small business prime contracting goal was set at{" "}
            <strong>34%</strong>, with subcontracting goals of{" "}
            <strong>43.02%</strong>. That is a significant share deliberately
            reserved for businesses like yours.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            Beginning October 1, 2025, DOT moved its procurement opportunity
            forecast to the GSA government-wide forecast tool. If you have not
            looked at agency procurement forecasts before, now is the time to
            start. Forecasts show upcoming contract actions before they hit
            SAM.gov — giving you months to research the opportunity, build
            agency relationships, and respond to any pre-solicitation notices.
            CapturePilot&apos;s{" "}
            <Link href="/features/intelligence" className="underline font-semibold">
              market intelligence
            </Link>{" "}
            layer tracks these forecasts automatically.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 my-8 text-white animate-on-scroll">
          <h3 className="text-xl font-black mb-4">The IIJA Opportunity</h3>
          <p className="text-blue-100 text-sm mb-6">
            The Infrastructure Investment and Jobs Act created a five-year wave
            of federally funded construction that translates directly into
            transportation subcontracts. Every federally funded highway project
            requires:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Construction material haul (aggregate, asphalt, concrete)",
              "Heavy equipment transport to and from sites",
              "Staging area logistics and just-in-time delivery",
              "Waste and debris removal trucking",
              "Portable facilities transport and setup",
              "Fuel delivery to remote job sites",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
                <span className="text-sm text-blue-100">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-xs mt-6">
            Prime contractors on IIJA projects are required to meet small
            business subcontracting goals — making them active buyers of
            transportation services from small firms.
          </p>
        </div>

        <p className="text-stone-700 leading-relaxed mb-4">
          DOT&apos;s Disadvantaged Business Enterprise (DBE) program — administered
          through FHWA and FTA — sets specific participation goals for
          small, minority, women-owned, and disadvantaged businesses on
          federally assisted transportation projects. Effective March 2025, the
          DBE gross receipts cap was adjusted to{" "}
          <strong>$31.84 million</strong>. If you qualify as a DBE, your
          services are actively sought by prime contractors trying to meet
          their required DBE percentages.
        </p>

        {/* Section 6 */}
        <SectionHeading
          id="set-asides"
          number="06"
          title="Set-Asides and Small Business Paths"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Federal law mandates that 23% of all federal prime contract
            dollars go to small businesses. Agencies use set-aside programs
            to ensure this happens. In transportation and logistics, set-asides
            are common at DLA, FEMA, the service branches, and GSA. Here is
            how each certification unlocks different opportunities.
          </p>
        </div>

        <div className="space-y-4 my-6 animate-on-scroll">
          {[
            {
              badge: "SDVOSB",
              badgeColor: "bg-green-100 text-green-800 border-green-200",
              title: "Service-Disabled Veteran-Owned Small Business",
              desc: "SDVOSB set-asides are common in logistics, particularly at DLA and the military branches. If you or a key owner holds a service-connected disability rating, this certification should be your first priority. VA contracts are exclusively reserved for VOSBs and SDVOSBs under the Veterans First contracting program.",
            },
            {
              badge: "8(a)",
              badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
              title: "8(a) Business Development Program",
              desc: "The 8(a) program allows sole-source awards up to $4.5M for services — meaning a contracting officer can award you a contract without open competition. In transportation, this is particularly powerful for small carriers positioning to become the agency's preferred local hauler. The 9-year program also provides business development support.",
            },
            {
              badge: "HUBZone",
              badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
              title: "Historically Underutilized Business Zone",
              desc: "HUBZone preference is active in warehousing and regional trucking contracts, particularly at DHS/FEMA for surge logistics and at DLA for regional distribution. If your principal office is in a qualifying census tract and 35% of your employees live in HUBZone areas, you can pursue HUBZone set-asides that have far fewer bidders than open competition.",
            },
            {
              badge: "WOSB",
              badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
              title: "Women-Owned Small Business",
              desc: "WOSB set-asides appear in trucking NAICS codes where women-owned businesses are underrepresented in federal contracting. DOT has a specific 5% WOSB prime contracting goal. The WOSB certification is federally recognized — once certified, you are eligible for both WOSB and EDWOSB set-asides depending on your financials.",
            },
          ].map((item) => (
            <div
              key={item.badge}
              className="border border-stone-200 rounded-xl p-5 animate-on-scroll hover-lift"
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-bold px-2 py-0.5 border rounded-full ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
                <h3 className="font-bold text-stone-900">{item.title}</h3>
              </div>
              <p className="text-sm text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <Callout icon={CheckCircle2} color="emerald" title="Check Your Eligibility in 2 Minutes">
          Before spending weeks on certification paperwork, run a quick
          eligibility check.{" "}
          <Link href={CHECK_URL} className="underline font-semibold">
            CapturePilot&apos;s Quick Checker
          </Link>{" "}
          tells you which programs you qualify for based on your business
          details — no forms, no waiting. From there, you can see which
          set-aside contracts are currently active in your NAICS codes and
          region.
        </Callout>

        {/* Section 7 */}
        <SectionHeading
          id="contract-vehicles"
          number="07"
          title="Contract Vehicles to Get On"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            The fastest way to generate repeat federal revenue in logistics
            is to get on a contract vehicle. Rather than competing for every
            individual contract, you compete once to get on a &quot;approved vendor
            list&quot; — then agencies can buy directly from you for years.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 my-6 animate-on-scroll">
          {[
            {
              title: "GSA Schedule 48 (Transportation & Logistics)",
              tier: "Foundational",
              tierColor: "text-blue-700 bg-blue-50",
              desc: "GSA Schedule 48 covers passenger transportation, freight transportation, and motor vehicle services. It is the single most important contract vehicle for small transportation companies targeting federal agencies. Once on it, any federal agency can order from you without a separate competition.",
            },
            {
              title: "OASIS+ (Professional Services)",
              tier: "Advanced",
              tierColor: "text-violet-700 bg-violet-50",
              desc: "OASIS+ covers logistics consulting services under NAICS 541614. If you provide supply chain advisory, transportation planning, or 3PL consulting — not just physical transport — OASIS+ is a high-value vehicle. It is structured as a set-aside family with small business pools.",
            },
            {
              title: "USTRANSCOM Commercial Air/Sea/Surface",
              tier: "Specialized",
              tierColor: "text-amber-700 bg-amber-50",
              desc: "USTRANSCOM issues contract solicitations for commercial air, sea, and surface freight for the U.S. military. Surface contracts cover truck freight throughout the continental U.S. Carriers must hold MC authority from FMCSA and meet safety rating requirements before applying.",
            },
            {
              title: "Blanket Purchase Agreements (BPAs)",
              tier: "Targeted",
              tierColor: "text-emerald-700 bg-emerald-50",
              desc: "Any agency can set up a BPA directly with a small business for repetitive transportation buys. If you are already doing occasional work for an agency, ask the contracting officer about formalizing the relationship as a BPA. It turns one-off orders into a predictable revenue stream.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-stone-200 rounded-xl p-5 hover-lift"
            >
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.tierColor}`}
              >
                {item.tier}
              </span>
              <h3 className="font-bold text-stone-900 mt-2 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-stone-700 leading-relaxed mb-4">
          Getting on GSA Schedule 48 requires demonstrating commercial pricing,
          two years of relevant past performance, and passing a GSA review.
          The process takes 3–6 months. Start it before you have urgent revenue
          pressure — the pipeline you build with it starts paying out a year
          or more after you apply.
        </p>

        <p className="text-stone-700 leading-relaxed mb-4">
          Track upcoming vehicle recompetes and new on-ramping periods using
          CapturePilot&apos;s{" "}
          <Link href="/features/pipeline" className="underline font-semibold">
            pipeline management
          </Link>{" "}
          tools. Many IDIQ vehicles only open enrollment on a set schedule —
          missing the window means waiting another year or more.
        </p>

        {/* Section 8 */}
        <SectionHeading
          id="evaluation"
          number="08"
          title="How Agencies Score Transportation Bids"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Transportation contracts at lower dollar values often use Lowest
            Price Technically Acceptable (LPTA) evaluation. That means price
            dominates — if you meet all the technical requirements and your
            rate is lowest, you win. For larger and more complex logistics
            services, agencies shift to best-value evaluation and consider
            past performance, technical approach, and key personnel.
          </p>
        </div>

        <div className="overflow-x-auto animate-on-scroll">
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="bg-stone-900 text-white">
                <th className="text-left p-3 font-bold rounded-tl-lg">
                  Evaluation Factor
                </th>
                <th className="text-left p-3 font-bold">What Evaluators Look For</th>
                <th className="text-left p-3 font-bold rounded-tr-lg">
                  How to Prepare
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  factor: "Technical Approach",
                  look: "Route coverage, fleet capacity, on-time performance metrics",
                  prep: "Quantify your on-time rate and fleet size explicitly",
                },
                {
                  factor: "Past Performance",
                  look: "Government or government-adjacent contracts; CPARS ratings",
                  prep: "Document 3 comparable past jobs with verifiable contacts",
                },
                {
                  factor: "Price/Rate",
                  look: "Per-mile rates, hourly rates, all-in pricing with fuel surcharge",
                  prep: "Use a rate card template; model your costs before bidding",
                },
                {
                  factor: "Safety Record",
                  look: "FMCSA SafeStat, SMS scores, CSA data for carriers",
                  prep: "Clean up any outstanding violations; review your scores now",
                },
                {
                  factor: "Certifications",
                  look: "Set-aside eligibility, bonding, insurance levels",
                  prep: "Confirm you meet ALL stated requirements before investing time",
                },
                {
                  factor: "Key Personnel",
                  look: "Operations manager experience, dispatch capability",
                  prep: "Name individuals; include their resumes in proposals",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                >
                  <td className="p-3 border-b border-stone-200 font-semibold text-stone-900">
                    {row.factor}
                  </td>
                  <td className="p-3 border-b border-stone-200 text-stone-600">
                    {row.look}
                  </td>
                  <td className="p-3 border-b border-stone-200 text-stone-600">
                    {row.prep}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-stone-700 leading-relaxed mb-4">
          Your FMCSA safety record matters more in transportation bidding
          than in almost any other industry sector. Contracting officers
          routinely check SafeStat and SMS scores. A BASIC score in the
          Unsafe Driving or HOS Compliance categories — even one approaching
          the alert threshold — can result in a technical rejection before
          evaluators ever look at your price. Fix your safety record first.
        </p>

        <Callout icon={AlertTriangle} color="amber" title="Insurance Requirements">
          Most transportation solicitations specify minimum insurance levels
          that exceed standard commercial auto coverage. Common requirements
          include $1M per-occurrence commercial general liability,{" "}
          <strong>$750K to $5M commercial auto liability</strong> depending
          on cargo type, and workers&apos; comp at statutory limits. Review the
          Section H clauses in any solicitation carefully — missing an
          insurance requirement gets you disqualified before evaluation
          starts. See our guide on{" "}
          <Link
            href="/blog/federal-contractor-insurance"
            className="underline font-semibold"
          >
            government contractor insurance requirements
          </Link>{" "}
          for what levels to carry.
        </Callout>

        {/* Section 9 */}
        <SectionHeading
          id="step-by-step"
          number="09"
          title="Your Path to First Award"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            This is not a 30-day sprint. A realistic first-award timeline for
            a transportation company new to federal contracting runs 6–12
            months. Here is the sequence that works:
          </p>
        </div>

        <div className="space-y-4 my-6 animate-on-scroll">
          {[
            {
              step: "01",
              title: "Register on SAM.gov",
              desc: "Get your CAGE code and UEI. List all relevant NAICS codes honestly. SAM.gov registration is free and renews annually — let it lapse and you cannot receive federal payments. Set a calendar reminder for renewal 60 days before expiration.",
              link: null,
            },
            {
              step: "02",
              title: "Register on DIBBS (if pursuing DLA)",
              desc: "SAM.gov registration does not automatically create a DIBBS account. Create a DLA Internet Bid Board System account separately at dibbs.dla.mil. Set alerts for your NAICS codes and primary delivery region.",
              link: null,
            },
            {
              step: "03",
              title: "Check and pursue certifications",
              desc: "Run a Quick Checker eligibility assessment to see which set-aside programs you qualify for. Pursue SDVOSB, 8(a), HUBZone, or WOSB certifications before actively pursuing contracts — set-aside wins are significantly easier than open competition wins for first-timers.",
              link: CHECK_URL,
            },
            {
              step: "04",
              title: "Build a capability statement",
              desc: "Create a one-page capability statement specifically for logistics buyers: fleet size, carrier authority numbers, NAICS codes, service area, past performance, and certifications. Send it to contracting officers at your target agencies. A strong capability statement creates opportunities that never hit SAM.gov.",
              link: "/features/capability-statement",
            },
            {
              step: "05",
              title: "Target subcontracting opportunities first",
              desc: "Find primes already holding transportation and logistics contracts at your target agencies. Approach their small business liaisons about subcontracting. This builds past performance without the full burden of prime contract administration — and CPARS ratings you earn as a sub count toward your record.",
              link: "/blog/subcontracting-government-contracts",
            },
            {
              step: "06",
              title: "Monitor solicitations and respond",
              desc: "Set SAM.gov saved searches for your NAICS codes and geography. Respond to sources sought and RFIs before formal solicitations drop — these early interactions build relationships with COs and occasionally result in requirements being shaped to your strengths.",
              link: "/features/matching",
            },
            {
              step: "07",
              title: "Submit your first bid",
              desc: "Target contracts at the simplified acquisition threshold ($250K) or below first. Competition is lighter, evaluation is faster, and the experience you gain writing proposals applies to every future bid. Win one, get the CPARS rating, then pursue larger opportunities from a position of strength.",
              link: null,
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 border border-stone-200 rounded-xl p-5 hover-lift"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
                {item.link && (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs text-blue-700 font-semibold mt-2 hover:underline"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA 2 */}
        <div className="border-2 border-blue-200 bg-blue-50 rounded-2xl p-8 my-10 animate-on-scroll">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-blue-100 rounded-xl">
              <TrendingUp className="w-6 h-6 text-blue-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-stone-900 mb-2">
                Manage Your Entire Pursuit in One Place
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                CapturePilot&apos;s pipeline tracks every opportunity from
                pre-solicitation through award — with reminders, bid/no-bid
                scoring, and proposal collaboration built in.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 border border-blue-300 text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-100 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 10 */}
        <SectionHeading
          id="mistakes"
          number="10"
          title="Mistakes That Kill Transportation Bids"
        />

        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Most transportation companies that fail at federal contracting
            do not fail because they lack the capability. They fail because
            they make avoidable process mistakes. Here are the most common:
          </p>
        </div>

        <div className="space-y-3 my-6 animate-on-scroll">
          {[
            {
              label: "Non-compliant SAM.gov registration",
              detail:
                "Missing NAICS codes, outdated POC information, or an expired registration are the most common disqualifiers. SAM.gov registration does not auto-renew — you must log in and renew annually or your award eligibility lapses immediately.",
            },
            {
              label: "Bidding on too many contracts at once",
              detail:
                "Spreading thin across 20 marginal opportunities beats out by one company that put serious effort into the right three. Use a bid/no-bid framework to cut the weak pursuits early.",
            },
            {
              label: "Ignoring safety score maintenance",
              detail:
                "Contracting officers check FMCSA SMS scores. A poor score in Unsafe Driving, HOS Compliance, or Vehicle Maintenance will disqualify you from transportation contracts regardless of your price. Know your scores before you bid.",
            },
            {
              label: "Underpricing without understanding true cost",
              detail:
                "Federal transportation contracts carry compliance costs commercial work does not: reporting requirements, Davis-Bacon wage rules on some construction support, specific insurance levels, and documentation burden. Win at too low a price and you will lose money executing the contract.",
            },
            {
              label: "No past performance documented",
              detail:
                "Government evaluators cannot take your word for past work. You need verifiable references — names, phone numbers, contract values, and dates. If you did commercial work for a state DOT or local transit authority, that counts as government-adjacent performance. Document it.",
            },
            {
              label: "Missing the set-aside window",
              detail:
                "A contract posted as a small business set-aside has different eligibility rules than an open competition. If you see a set-aside posted and you are not certified, you cannot compete. Certifications take months to obtain — do not wait for the solicitation to appear before you start.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 border border-red-100 bg-red-50 rounded-xl p-4"
            >
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-stone-900 text-sm">{item.label}</p>
                <p className="text-sm text-stone-600 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <Callout icon={Shield} color="emerald" title="The Right Preparation Pays Off">
          Transportation and logistics companies that take 6 months to
          prepare properly — getting SAM.gov right, earning a certification,
          building their capability statement, making agency relationships —
          consistently outperform those who rush into bidding with no
          groundwork. The federal market rewards persistence and preparation
          over speed. Your{" "}
          <Link
            href="/features/quick-checker"
            className="underline font-semibold"
          >
            eligibility check
          </Link>{" "}
          is the right first step.
        </Callout>

        {/* Internal Links Section */}
        <div className="border border-stone-200 rounded-2xl p-6 my-10 animate-on-scroll">
          <h3 className="font-black text-stone-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Related Guides
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                href: "/blog/subcontracting-government-contracts",
                label: "Subcontracting: Your First Step Into Federal",
              },
              {
                href: "/blog/federal-contracting-certifications",
                label: "Which Certifications Actually Help You Win",
              },
              {
                href: "/blog/bid-no-bid-decision-framework",
                label: "The Bid/No-Bid Decision Framework",
              },
              {
                href: "/blog/federal-contractor-insurance",
                label: "Government Contractor Insurance Requirements",
              },
              {
                href: "/blog/sdvosb-contracts-guide",
                label: "SDVOSB Contracts: A Complete Guide",
              },
              {
                href: "/blog/blanket-purchase-agreements",
                label: "Blanket Purchase Agreements: Predictable Revenue",
              },
              {
                href: "/blog/past-performance-government-contracts",
                label: "Building Your Past Performance Record",
              },
              {
                href: "/blog/sam-gov-renewal-guide",
                label: "SAM.gov Renewal: Avoid Registration Lapses",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors py-1"
              >
                <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-white/20 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black mb-2">
                Ready to Win Your First Transportation Contract?
              </h3>
              <p className="text-stone-300 text-sm mb-6">
                CapturePilot is built for small transportation and logistics
                companies pursuing federal work. Match your NAICS codes to
                active opportunities, track your pipeline, and build
                proposals that actually win.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 border border-stone-600 text-stone-300 font-bold px-5 py-2.5 rounded-xl text-sm hover:border-stone-400 hover:text-white transition-colors"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
