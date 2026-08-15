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
  Utensils,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-food-service", label: "Why Food Service Contracts Deserve Your Attention" },
  { id: "who-is-buying", label: "Who's Buying: The Federal Food Service Market" },
  { id: "naics-codes", label: "NAICS Codes and Size Standards" },
  { id: "dla-subsistence", label: "DLA Troop Support: The Military's Food Supply Chain" },
  { id: "other-buyers", label: "Federal Buyers Beyond DLA" },
  { id: "set-asides", label: "Set-Asides and Small Business Paths" },
  { id: "abilityone", label: "The AbilityOne Factor" },
  { id: "evaluation", label: "How Agencies Score Food Service Bids" },
  { id: "step-by-step", label: "Your Path to First Award" },
  { id: "mistakes", label: "Mistakes That Kill Food Service Bids" },
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

export default function FoodServiceGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-orange-50 to-white">
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
              Food Service Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Utensils className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Food Service Government Contracts:{" "}
            <span className="gradient-text">Catering to Military Bases and Federal Facilities</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government feeds hundreds of thousands of people every day — soldiers in
            dining facilities, patients in VA hospitals, federal inmates, students at military
            academies. Single contracts routinely run{" "}
            <strong className="text-stone-700">$130M to $435M</strong>. Small businesses enter
            through set-asides, prime vendor supplier roles, and managed dining contracts that large
            primes cannot always compete on. Here is how the market works and how you get in.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 15, 2026</span>
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
            id="why-food-service"
            number="01"
            title="Why Food Service Contracts Deserve Your Attention"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most government contracting niches reward years of relationship-building and specialized
              technical expertise. Food service is different. The government needs to feed people
              tomorrow, the day after, and every day after that. Contracts run on fixed schedules
              with predictable re-solicitations. The requirements are concrete. And the dollars are large.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Defense Logistics Agency recently sought proposals for a potential{" "}
              <strong className="text-stone-800">$435 million</strong> contract to supply food to U.S.
              military and federally funded customers in South Korea alone — and that solicitation was
              structured as a small business set-aside. In the same period, US Foods received a{" "}
              <strong className="text-stone-800">$130.4 million</strong> firm-fixed-price IDIQ contract
              through DLA for full-line food and beverage distribution to Army, Navy, Air Force, and
              Marine Corps customers.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              These numbers are not outliers. They reflect a market that operates at scale because the
              government's need is constant. Soldiers eat three meals a day. Federal inmates require
              feeding three times daily. VA hospital patients need dietitian-approved menus. Military
              academy cadets have negotiated meal rates — effective January 1, 2026, the daily cadet
              meal rate is <strong className="text-stone-800">$15.90</strong> — and those meals must
              be prepared and served under contract.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              What makes this market particularly interesting for smaller companies: the work is often
              local or regional, many contracts carry set-aside preferences, and the barrier to entry
              — commercial kitchen experience, food safety certifications, supply chain capability —
              maps well onto what established food service businesses already have.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$47M",
                  label: "SBA size standard for NAICS 722310 — most regional food service companies qualify",
                  color: "text-orange-600 bg-orange-50 border-orange-100",
                },
                {
                  icon: Clock,
                  stat: "1 + 4",
                  label: "Standard contract structure: one base year plus four option years",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: Target,
                  stat: "$435M",
                  label: "Single DLA food supply contract for South Korea, set aside for small businesses",
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
            id="who-is-buying"
            number="02"
            title="Who's Buying: The Federal Food Service Market"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal food service spending flows through several distinct channels, each with different
              entry points for contractors. Understanding who buys what — and how — determines which
              path you pursue.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">Buyer</th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">What They Buy</th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">Contract Vehicle</th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">Small Biz Access</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      buyer: "DLA Troop Support",
                      what: "Food products, full-line distribution to military bases worldwide",
                      vehicle: "Prime Vendor IDIQ contracts",
                      access: "Supplier to prime, or direct SB set-aside awards",
                    },
                    {
                      buyer: "Army / Installation Management Command",
                      what: "Dining facility operations and management",
                      vehicle: "Performance-based managed services contracts",
                      access: "Set-aside competitions and subcontracts",
                    },
                    {
                      buyer: "Department of Veterans Affairs",
                      what: "Hospital food service, patient nutrition services",
                      vehicle: "GSA Schedule, competitive awards",
                      access: "SDVOSB and VOSB set-asides",
                    },
                    {
                      buyer: "Bureau of Prisons",
                      what: "Inmate meal programs, food supply",
                      vehicle: "Competitive contracts, BPAs",
                      access: "Small business set-asides",
                    },
                    {
                      buyer: "Military Academies (Army, Navy, Air Force)",
                      what: "Cadet dining services",
                      vehicle: "Competitive managed services",
                      access: "Limited — large awards often sole-source or restricted",
                    },
                    {
                      buyer: "Other Federal Agencies",
                      what: "Employee cafeterias, catering for events and training",
                      vehicle: "Micro-purchase, simplified acquisition, BPAs",
                      access: "Easiest entry for new contractors",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 font-medium text-stone-800">{row.buyer}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.what}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.vehicle}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The Army is currently investing heavily in upgrading military dining. In August 2025,
              Installation Management Command awarded Compass Group USA a concession contract to bring
              college campus-style dining to five major Army installations — Fort Bragg, Fort Stewart,
              Fort Carson, Fort Hood, and Fort Drum. That contract runs five years with five one-year
              extension options. While a national firm won that award, the follow-on subcontracting
              opportunities, regional catering contracts, and smaller installation awards remain very
              much open to smaller competitors.
            </p>

            <Callout icon={Lightbulb} color="sky" title="Where Small Businesses Win Most">
              The sweet spot is regional managed food service contracts and catering for specific
              military training events, not the national prime vendor awards that large distributors
              dominate. DLA explicitly set aside its South Korea supply contract for small businesses.
              Look for solicitations under $10M for single installation food service — those are
              where the competition is thinnest and performance track records get built.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="naics-codes"
            number="03"
            title="NAICS Codes and Size Standards"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The NAICS code you register under shapes which set-aside contracts you can pursue and
              whether you qualify as a small business for each. Food service spans several codes, and
              picking the wrong one is a common error that locks you out of competitions you could
              otherwise win.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  code: "722310",
                  name: "Food Service Contractors",
                  standard: "$47M annual receipts",
                  description:
                    "Your primary code for managed dining facility operations, institutional feeding programs, base dining contracts, hospital food service. This covers full-service management — staffing, food purchasing, preparation, service — under contract to institutional clients. It's the code DLA and Installation Management Command use for most dining operations solicitations.",
                  primary: true,
                },
                {
                  code: "72251",
                  name: "Restaurants and Other Eating Places",
                  standard: "$47M annual receipts",
                  description:
                    "Used when you're operating a concession or snack bar on government property rather than managing a full institutional feeding program. Think base snack bars, cafeteria concessions, vending-plus-service operations.",
                  primary: false,
                },
                {
                  code: "722320",
                  name: "Caterers",
                  standard: "$47M annual receipts",
                  description:
                    "For catering-specific awards — training events, conferences, military ceremonies, official functions. If you're a catering company adding federal work, this is likely your entry code. Agencies use this for discrete event-based procurement.",
                  primary: false,
                },
                {
                  code: "424410",
                  name: "General Line Grocery Merchant Wholesalers",
                  standard: "100 employees",
                  description:
                    "For food distributors supplying product to DLA's prime vendors or participating directly in supply contracts. If you're on the distribution side — not the prepared food side — this may be your primary code.",
                  primary: false,
                },
              ].map((item) => (
                <div
                  key={item.code}
                  className={`rounded-xl border p-5 ${item.primary ? "border-blue-200 bg-blue-50" : "border-stone-200 bg-stone-50"}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="font-black text-stone-900 text-lg">{item.code}</span>
                      <span className="ml-3 font-semibold text-stone-700">{item.name}</span>
                      {item.primary && (
                        <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">
                          Primary
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      {item.standard}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              You can — and should — register multiple NAICS codes in SAM.gov if your business
              covers more than one of these activities. But each solicitation will specify a primary
              NAICS, and your small business size is determined against the standard for that specific
              code on that specific competition. Register the codes that reflect your actual work, not
              codes you're hoping to grow into.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Not sure which codes put you in the most advantageous position?{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                CapturePilot's Quick Checker
              </Link>{" "}
              maps your business profile against active solicitations and shows you exactly which
              NAICS codes are generating the most relevant opportunities.
            </p>

            {/* CTA 1 */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 my-10 text-white animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-2">Check Your Eligibility Free</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Find out which food service contracts you qualify for right now — set-asides,
                    certifications, NAICS matches. Takes 60 seconds.
                  </p>
                </div>
                <a
                  href={CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Check eligibility <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="dla-subsistence"
            number="04"
            title="DLA Troop Support: The Military's Food Supply Chain"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              If you want to understand military food service contracting, start with DLA Troop
              Support's Subsistence directorate in Philadelphia. This office manages the supply chain
              that feeds U.S. troops and federally funded customers globally. The scale is enormous —
              millions of meals per day across CONUS and OCONUS installations.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              DLA Troop Support operates primarily through a <strong className="text-stone-800">Prime Vendor</strong>{" "}
              model. A prime vendor — typically a large food distributor — holds a regional IDIQ
              contract and delivers food to military installations within a defined geographic zone.
              Individual items are ordered against the contract as needed, with the prime vendor
              responsible for maintaining stock, cold chain logistics, and delivery to the installation
              loading dock.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The Prime Vendor Reality for Small Businesses">
              Most DLA Troop Support Prime Vendor awards go to large distributors like US Foods or
              Sysco because they have the regional warehouse infrastructure and delivery fleets to
              meet DLA's performance requirements. Small businesses typically enter this market as
              suppliers to the prime — manufacturing specialty items, providing ethnic foods, or
              supplying local produce under the prime vendor's ordering system. This is a legitimate
              path with real revenue, but it requires understanding that you're selling to the
              distributor, not directly to DLA.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Where small businesses can compete directly: overseas and remote location contracts.
              DLA regularly structures international food supply contracts as small business set-asides
              specifically because the logistics complexity can favor regional specialists over national
              distributors. The $435 million South Korea solicitation is one example. Similar
              set-aside opportunities arise for Pacific island installations, Alaska, and smaller
              CONUS locations that fall below prime vendor coverage thresholds.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              DLA also directly procures through its Food Services division, which operates the
              Subsistence Total Order and Receipt Electronic System (STORES). Contractors who
              want to supply product directly to DLA — as opposed to through a prime vendor —
              register through DIBBS (DLA Internet Bid Board System) at dibbs.bsm.dla.mil. Most
              solicitations over $25,000 are also posted on SAM.gov.
            </p>

            <div className="bg-stone-900 rounded-2xl p-6 my-8 font-mono text-sm">
              <p className="text-stone-400 text-xs mb-3">How to find DLA food opportunities on SAM.gov</p>
              <p className="text-emerald-400 mb-1">NAICS Code: 722310 or 424410</p>
              <p className="text-orange-300 mb-1">Agency: Defense Logistics Agency</p>
              <p className="text-blue-300 mb-1">Sub-agency: DLA Troop Support</p>
              <p className="text-stone-300">Set-aside type: Total Small Business, 8(a), SDVOSB, etc.</p>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="other-buyers"
            number="05"
            title="Federal Buyers Beyond DLA"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              DLA gets the headlines, but it is far from the only federal buyer of food service.
              Several other agencies offer more accessible entry points, particularly for managed
              service contracts where you operate a facility rather than distribute product.
            </p>

            <div className="space-y-6 my-8">
              <div className="rounded-xl border border-stone-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <h3 className="font-bold text-stone-900">Department of Veterans Affairs</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  VA medical centers run large-scale institutional food service programs for inpatients,
                  outpatients, and staff. The VA has a strong preference for veteran-owned businesses —{" "}
                  <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 hover:underline">
                    SDVOSB
                  </Link>{" "}
                  and{" "}
                  <Link href="/blog/vosb-certification-guide" className="text-blue-700 hover:underline">
                    VOSB
                  </Link>{" "}
                  certifications can give you first right of refusal on set-aside awards at VA facilities.
                  If you are a veteran-owned food service business, VA contracts are your single best
                  set-aside opportunity.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  VA food service contracts typically run as performance-based managed services. You
                  are responsible for staffing, menus, sanitation compliance, patient nutrition protocols,
                  and sometimes equipment maintenance. The Service Contract Act applies — you must pay
                  the wage determinations for your region.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-stone-900">Federal Bureau of Prisons</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  BOP facilities require food production at scale, typically 1,500–5,000+ meals per
                  day depending on facility size. Contracts cover food supply (products, not service),
                  kitchen equipment, and sometimes specialized dietary program consulting. These are
                  strict environments — food safety compliance, security protocols, and exact
                  specification adherence are mandatory, not aspirational.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center">
                    <Users className="w-4 h-4 text-sky-600" />
                  </div>
                  <h3 className="font-bold text-stone-900">Civilian Agencies: GSA and Individual Departments</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-3">
                  Federal office buildings managed by GSA often have employee cafeterias or food
                  service concessions. These are typically smaller managed services contracts — an
                  ideal first federal contract for a food service company. HHS, Department of
                  Education, and large civilian agencies also buy catering for conferences, training
                  events, and official functions.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Event catering contracts for civilian agencies frequently fall under the
                  simplified acquisition threshold — under $250,000 — meaning less competition and
                  faster awards. This is where many food service companies make their first federal
                  sale.{" "}
                  <Link href="/blog/simplified-acquisition-procedure" className="text-blue-700 hover:underline">
                    Simplified acquisition procedures
                  </Link>{" "}
                  give agencies more flexibility in how they source, and a strong quote with clear
                  past performance can win without a full competitive procurement.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="set-asides"
            number="06"
            title="Set-Asides and Small Business Paths"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government directs a substantial share of food service contracts toward
              small businesses. Depending on your certifications, you may access even more targeted
              set-aside pools with fewer competitors.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The key programs:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "Total Small Business Set-Aside",
                  color: "bg-emerald-50 border-emerald-200",
                  badge: "Open to all small businesses",
                  badgeColor: "bg-emerald-100 text-emerald-700",
                  body:
                    "Any contract where the government expects to receive offers from at least two small businesses must be set aside exclusively for small businesses. This is the most common path for food service companies first entering the federal market. You compete against other small businesses only.",
                },
                {
                  title: "8(a) Program",
                  color: "bg-violet-50 border-violet-200",
                  badge: "Socially disadvantaged owners",
                  badgeColor: "bg-violet-100 text-violet-700",
                  body:
                    "The SBA 8(a) program gives certified companies access to sole-source awards under $4.5 million for services contracts. A contracting officer can award you a food service contract directly without competition if your firm holds 8(a) certification. This is the fastest path to a first award.",
                },
                {
                  title: "SDVOSB / VOSB",
                  color: "bg-blue-50 border-blue-200",
                  badge: "Veteran-owned businesses",
                  badgeColor: "bg-blue-100 text-blue-700",
                  body:
                    "At VA facilities, service-disabled veteran-owned businesses get mandatory first consideration under the Veterans First Contracting Program. VA contracting officers must seek SDVOSB bids before opening competition to other groups. For veteran-owned food service companies, this creates near-exclusive access at VA medical centers.",
                },
                {
                  title: "HUBZone",
                  color: "bg-amber-50 border-amber-200",
                  badge: "Distressed area location",
                  badgeColor: "bg-amber-100 text-amber-700",
                  body:
                    "If your principal office is in a Historically Underutilized Business Zone and 35% of your employees live in HUBZones, you qualify. HUBZone set-asides draw fewer competitors than open small business competitions, and HUBZone firms also receive a 10% price evaluation preference on full-and-open competitions.",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border p-5 ${item.color}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <h3 className="font-bold text-stone-900 mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Use{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                CapturePilot's opportunity matching
              </Link>{" "}
              to filter active food service solicitations by your specific set-aside certifications.
              The platform shows you which competitions you're eligible for before you waste time
              reading full RFPs for contracts you can't bid.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="abilityone"
            number="07"
            title="The AbilityOne Factor"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              AbilityOne is a mandatory source program that routes certain contracts to nonprofits
              that employ people who are blind or have significant disabilities. Under the Javits-Wagner-O'Day
              (JWOD) Act, federal agencies are required to purchase designated products and services
              from AbilityOne participating nonprofits before going to the open market.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Food services appear on the AbilityOne Procurement List. That means if an AbilityOne
              nonprofit is offering food services at a specific installation, the contracting officer
              must order through AbilityOne — and your bid on that same contract opportunity is
              legally blocked. Before investing in a proposal, verify whether the requirement is
              covered under an existing AbilityOne contract.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Check AbilityOne Status Before Bidding">
              Verify at abilityone.gov or ask the contracting officer directly: is this requirement on
              the AbilityOne Procurement List? If yes, you cannot bid unless you partner with an
              AbilityOne source. This happens most often at VA hospitals and DoD facilities with
              long-standing AbilityOne agreements. Missing this check wastes proposal effort on a
              contract you cannot win.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              AbilityOne is not a dead end. Some food service companies partner with local AbilityOne
              nonprofits to submit a combined offering, with the nonprofit holding the prime contract
              and your company providing operational management expertise. This can work well if the
              nonprofit lacks operational capacity and is open to subcontracting arrangements.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="evaluation"
            number="08"
            title="How Agencies Score Food Service Bids"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal food service contracts are evaluated on price and technical factors, with
              weighting varying by solicitation type. For managed dining operations — where you run
              the facility — technical factors typically carry more weight than on pure supply
              contracts. Here is what agencies actually look at.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  factor: "Past Performance",
                  weight: "High",
                  weightColor: "text-red-700 bg-red-50 border-red-200",
                  detail:
                    "The government wants evidence you've fed institutional populations successfully. Contract references showing similar scope — meals per day, facility type, contract value — carry heavy weight. Relevant CPARS ratings are read carefully. If you have no federal past performance, commercial institutional references (schools, hospitals, correctional facilities) are accepted but carry less weight.",
                },
                {
                  factor: "Management / Staffing Plan",
                  weight: "High",
                  weightColor: "text-red-700 bg-red-50 border-red-200",
                  detail:
                    "Who runs the program day-to-day? Agencies want to see your management structure, key personnel qualifications, and staffing levels for each shift. A weak management plan suggests operational risk — the biggest fear for agencies who have had contracts fail mid-term.",
                },
                {
                  factor: "Food Safety and Sanitation Plan",
                  weight: "Medium-High",
                  weightColor: "text-orange-700 bg-orange-50 border-orange-200",
                  detail:
                    "HACCP compliance, food handler certification programs, sanitation schedules, and your approach to health inspections. Military and VA food service contracts often require specific FDA and DoD food safety certifications. A compliance matrix showing how you meet each requirement earns points.",
                },
                {
                  factor: "Menu and Nutrition Quality",
                  weight: "Medium",
                  weightColor: "text-amber-700 bg-amber-50 border-amber-200",
                  detail:
                    "For managed dining, sample menus aligned to the solicitation's nutritional requirements demonstrate operational competence. Army and VA contracts specify exact nutritional parameters. Proposals that show menu variety, dietary accommodation (halal, kosher, allergen-free, low-sodium), and seasonal rotation score higher.",
                },
                {
                  factor: "Price",
                  weight: "Medium",
                  weightColor: "text-amber-700 bg-amber-50 border-amber-200",
                  detail:
                    "Most food service managed service contracts are evaluated as Best Value rather than LPTA. That means price matters but doesn't win alone. A strong technical proposal with a slightly higher price often beats the cheapest bid if the technical quality difference is demonstrable.",
                },
              ].map((item) => (
                <div key={item.factor} className="rounded-xl border border-stone-200 p-5 bg-stone-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-stone-900">{item.factor}</h3>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${item.weightColor}`}>
                      {item.weight}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                CapturePilot intelligence module
              </Link>{" "}
              pulls evaluation factors directly from solicitations and helps you build a response
              matrix before you write a single proposal section. Knowing how an agency weighs factors
              changes where you invest your proposal writing time.
            </p>
          </div>

          {/* Section 9 — Step by Step */}
          <SectionHeading
            id="step-by-step"
            number="09"
            title="Your Path to First Award"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most food service companies fail to win federal contracts not because they lack
              operational capability, but because they fail at the front end of the process —
              missing registration deadlines, bidding on wrong-sized opportunities, or submitting
              incomplete proposals. Here is a structured path that avoids those traps.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Get Your SAM.gov Registration Current",
                  body: "You cannot legally be awarded a federal contract without an active SAM.gov registration. Registration is free, takes five to ten business days to activate, and must be renewed annually. Your NAICS codes, size certifications, and representations all live here. Don't let it lapse — a lapsed registration disqualifies you from award even if you win the competition on merit.",
                  link: { href: "/blog/sam-gov-renewal-guide", label: "SAM.gov renewal guide" },
                },
                {
                  step: "02",
                  title: "Pursue Relevant Certifications",
                  body: "If you qualify as a veteran-owned business, certify through SBA's Veteran Small Business Certification (VetCert) program before targeting VA contracts. If you qualify for 8(a), start the application now — the process takes several months, but the sole-source access it provides is transformative for building initial past performance.",
                  link: { href: "/blog/federal-contracting-certifications", label: "Federal contracting certifications guide" },
                },
                {
                  step: "03",
                  title: "Start Small: Catering Under $250K",
                  body: "Your first federal food service contract should be a catering award at or below the simplified acquisition threshold. Look for agency training events, conference catering, and small facility cafeteria operations. These compete with fewer bidders, close faster, and build the federal past performance reference you need for larger awards.",
                  link: { href: "/blog/simplified-acquisition-procedure", label: "Simplified acquisition procedures" },
                },
                {
                  step: "04",
                  title: "Build Your Past Performance File",
                  body: "Immediately after completing any federal food service work — even a small catering event — request a written reference from the Contracting Officer's Representative. Ask them to note scope (meals served, event size, contract value) and outcome. Three verified past performance references dramatically improve your win probability on the next competition.",
                  link: { href: "/blog/past-performance-government-contracts", label: "Building past performance" },
                },
                {
                  step: "05",
                  title: "Track and Pursue Managed Dining Contracts",
                  body: "Once you have documented past performance, target single-installation managed dining contracts — typically $1M–$5M annually. These are the sweet spot for regional food service companies: large enough to be significant, small enough to avoid drawing national competition. Use opportunity tracking to get ahead of these solicitations before RFP release.",
                  link: { href: "/features/pipeline", label: "CapturePilot pipeline tracking" },
                },
                {
                  step: "06",
                  title: "Consider the Supplier Path Through Prime Vendors",
                  body: "Simultaneously, contact DLA prime vendors in your region about supplier opportunities. If you produce specialty food items — ethnic foods, artisan products, regional specialties — prime vendors actively seek local and specialty suppliers to meet DLA's menu diversity requirements. This path generates revenue without the proposal overhead of direct federal bidding.",
                  link: null,
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 rounded-xl border border-stone-200 p-5 bg-white hover-lift transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.body}</p>
                    {item.link && (
                      <Link href={item.link.href} className="text-sm text-blue-700 hover:underline inline-flex items-center gap-1">
                        {item.link.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 2 */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 my-10 text-white animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-2">Start Your 30-Day Free Trial</h3>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    Track food service solicitations, get matched to opportunities that fit your
                    certifications, and build your capture pipeline — all in one place.
                  </p>
                </div>
                <a
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="mistakes"
            number="10"
            title="Mistakes That Kill Food Service Bids"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The same errors surface repeatedly across losing food service proposals. Most of them
              have nothing to do with your actual ability to prepare and serve food — they're
              administrative and strategic failures that disqualify otherwise capable contractors.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: XCircle,
                  title: "Bidding without verified AbilityOne status",
                  body: "As discussed above: if the requirement is on the AbilityOne Procurement List, your bid will be rejected regardless of quality. Check first. Every time.",
                },
                {
                  icon: XCircle,
                  title: "Underpricing to win, then failing to perform",
                  body: "Food service contracts have fixed labor costs driven by Service Contract Act wage determinations. If your price doesn't cover those wages, you either underpay workers (a violation) or run at a loss. Model your costs against the applicable SCA wage determination before submitting any price.",
                },
                {
                  icon: XCircle,
                  title: "Using commercial past performance without translation",
                  body: "Evaluators want to see volume and similarity. A reference that says 'we catered 200 events' helps less than 'we provided managed food service for 450 residents daily at [facility], including three meals per day and dietary accommodations, for a 3-year period.' Translate your experience into federal evaluation language.",
                },
                {
                  icon: XCircle,
                  title: "Submitting a generic management plan",
                  body: "Boilerplate management plans that don't name key personnel, don't describe shift coverage, and don't address the specific facility's requirements score poorly. Evaluators know when they're reading a template. The management plan is where technical superiority is demonstrated — not in the overview section.",
                },
                {
                  icon: XCircle,
                  title: "Missing SAM.gov representations and certifications",
                  body: "Your SAM.gov record must show active certifications at time of offer. If your 8(a) or SDVOSB certification is lapsed, you are ineligible to win the set-aside award. Check your SAM.gov record before every submission — this is a one-minute check that protects months of proposal work.",
                },
                {
                  icon: XCircle,
                  title: "Pursuing contracts in markets you can't actually serve",
                  body: "Food service is operationally local. If the contract requires daily delivery to a military installation four hours from your kitchen, your labor and transportation costs will make you uncompetitive. Be disciplined about your geographic radius — it is better to win in your market than to lose at the margins of it.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-red-100 bg-red-50 p-5">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 3 */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 my-10 animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-black text-stone-900 mb-2">
                    Want a Strategy Session?
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Our GovCon specialists work with food service companies to identify the right
                    market entry, build your first proposal, and develop a multi-year capture
                    strategy. Book a call — no obligation.
                  </p>
                </div>
                <Link
                  href="/demo"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related posts */}
            <div className="border-t border-stone-200 pt-10 mt-10">
              <h3 className="font-bold text-stone-900 mb-6 text-lg">Keep Reading</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog/janitorial-government-contracts",
                    title: "Janitorial Government Contracts: A $2.7 Billion Opportunity",
                    category: "Industries",
                  },
                  {
                    href: "/blog/security-guard-government-contracts",
                    title: "Security Guard Government Contracts: Building a Federal Security Business",
                    category: "Industries",
                  },
                  {
                    href: "/blog/small-business-set-aside-threshold",
                    title: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know",
                    category: "Set-Asides",
                  },
                  {
                    href: "/blog/past-performance-government-contracts",
                    title: "Past Performance: Why It Matters and How to Build It",
                    category: "Proposals",
                  },
                ].map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="rounded-xl border border-stone-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <span className="text-xs text-stone-400 font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                    <p className="text-sm font-semibold text-stone-800 mt-1 group-hover:text-blue-700 transition-colors leading-snug">
                      {post.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
