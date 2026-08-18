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
  MapPin,
  DollarSign,
  Globe,
  FileText,
  Layers,
  TrendingUp,
  AlertCircle,
  Target,
  Building,
  CheckSquare,
  Users,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-sled", label: "Why State and Local Contracts Deserve Their Own Strategy" },
  { id: "the-market-size", label: "The Market: $1 Trillion in Annual Procurement" },
  { id: "key-differences", label: "How SLED Contracting Differs From Federal Work" },
  { id: "how-to-find", label: "Where to Find State and Local Opportunities" },
  { id: "cooperative-purchasing", label: "Cooperative Purchasing: Your Fastest Entry Point" },
  { id: "certifications-setasides", label: "Certifications and Set-Asides in SLED Markets" },
  { id: "vendor-registration", label: "Registering as a Vendor Across Multiple Jurisdictions" },
  { id: "high-growth-categories", label: "High-Growth Categories in State and Local Right Now" },
  { id: "building-your-pipeline", label: "Building a SLED Pipeline Without Losing Your Mind" },
  { id: "get-started", label: "Where to Start Today" },
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

export default function StateLocalGovernmentContractsPage() {
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
            <span className="text-stone-900 font-medium">State &amp; Local Contracts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <MapPin className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            State and Local Government Contracts:{" "}
            <span className="gradient-text">
              How to Expand Beyond Federal Work
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            State and local governments spend over $1 trillion on contracts every year — more than
            double the federal civilian procurement budget. Most small businesses never touch it
            because they assume federal is the whole game. It isn't. Here's how to open the other
            half of the government market.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 18, 2026</span>
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
        <SectionHeading id="why-sled" number="01" title="Why State and Local Contracts Deserve Their Own Strategy" />
        <div className="prose-like animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Most government contracting advice focuses entirely on SAM.gov, the FAR, and federal
            agencies. That makes sense — federal procurement is well-documented and centralized. But
            it creates a blind spot. State, local, and education procurement — the SLED market —
            operates on completely separate rules, separate portals, and separate relationships.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            The contractors winning in SLED aren't the ones who translated their federal
            playbook. They built a SLED-specific approach from scratch. Simpler in some ways.
            More fragmented in others. But absolutely worth the investment.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            There are three reasons to add SLED to your strategy:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Revenue diversification — when federal budgets freeze under a continuing resolution, state budgets keep moving on their own fiscal calendars",
              "Faster cycles — many state and local contracts have shorter procurement timelines and lighter compliance requirements than federal",
              "Local relationships — being based in a state is itself a competitive advantage, something federal contracting rarely rewards",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-stone-700 leading-relaxed">
            If you're already registered on SAM.gov and pursuing federal set-asides through
            your{" "}
            <Link href="/features/matching" className="text-blue-600 hover:underline font-medium">
              opportunity matching
            </Link>{" "}
            strategy, SLED is the natural expansion. You're already credentialed. You already
            have past performance. SLED buyers respect federal contract history.
          </p>
        </div>

        {/* Section 2 */}
        <SectionHeading id="the-market-size" number="02" title="The Market: $1 Trillion in Annual Procurement" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Put the number in context. The federal government awards roughly $700–800 billion in
            contracts annually. State and local governments spend over $1 trillion on goods and
            services each year. That's not a niche add-on to federal work — it's a larger market.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            Total state government spending hit $3 trillion for the first time in fiscal 2024, up
            6.2% year-over-year. Not all of that is direct procurement — it includes transfers and
            salaries — but the procurement slice is enormous and growing.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {[
              { label: "Annual SLED procurement spend", value: "$1T+", sub: "State, local & education" },
              { label: "Total state government spending FY2024", value: "$3T", sub: "6.2% YoY growth" },
              { label: "Contracts in a single month (Dec 2025)", value: "$4.9B", sub: "Cities, counties & school districts" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center hover-lift"
              >
                <div className="text-3xl font-black text-blue-700 mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-stone-700 mb-1">{stat.label}</div>
                <div className="text-xs text-stone-500">{stat.sub}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The SLED market is also fragmented in a way that works in your favor if you're
            strategic. California alone awarded $1.7 billion in a single December 2025 month across
            cities, counties, and school districts. Hawaii came in at $1.6 billion. Virginia at
            $292 million. Every state is its own economy.
          </p>
          <p className="text-stone-700 leading-relaxed">
            That fragmentation keeps larger primes from dominating SLED the way they dominate
            federal defense. Local vendors with local relationships still win regularly in this
            market.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="my-10 animate-on-scroll rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex items-start gap-4">
            <Target className="w-8 h-8 flex-shrink-0 mt-1 opacity-80" />
            <div>
              <h3 className="text-xl font-black mb-2">Know What You Qualify For</h3>
              <p className="text-blue-100 text-sm mb-4">
                Federal certifications like 8(a), SDVOSB, WOSB, and HUBZone transfer credibility
                into SLED markets. Check your eligibility before you start building a SLED strategy.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-50 transition-colors"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <SectionHeading id="key-differences" number="03" title="How SLED Contracting Differs From Federal Work" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-6">
            This is the most important thing to understand before you start: SLED procurement
            operates under entirely different legal frameworks. There is no FAR in SLED. Each
            state runs on its own procurement code. That means 50 different statutory frameworks
            with different competition thresholds, different protest rights, and different
            contract terms.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="text-left p-3 font-bold text-stone-700 rounded-tl-xl border border-stone-200">Topic</th>
                  <th className="text-left p-3 font-bold text-blue-700 border border-stone-200">Federal</th>
                  <th className="text-left p-3 font-bold text-emerald-700 rounded-tr-xl border border-stone-200">State &amp; Local</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Governing rules", "Federal Acquisition Regulation (FAR)", "Each state's own procurement code — 50 frameworks"],
                  ["Opportunity posting", "Centralized at SAM.gov", "Fragmented across individual state/local portals"],
                  ["Industry codes", "NAICS codes", "NIGP codes (National Institute of Governmental Purchasing)"],
                  ["Small business set-asides", "Mandated via SBA programs", "Varies — 45+ states have preference policies, but no uniform requirement"],
                  ["Vendor registration", "Single SAM.gov registration", "Register separately with each state and locality you target"],
                  ["Competition thresholds", "Micro-purchase ($10K), SAP ($250K)", "Varies by state — often lower, sometimes higher for informal bids"],
                  ["Contract vehicles", "GSA Schedules, IDIQs, GWACs", "Cooperative purchasing: NASPO ValuePoint, Sourcewell, OMNIA Partners"],
                  ["Protest rights", "GAO, Court of Federal Claims", "State-level administrative procedures"],
                ].map(([topic, fed, sled], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    <td className="p-3 font-medium text-stone-700 border border-stone-200">{topic}</td>
                    <td className="p-3 text-blue-800 border border-stone-200">{fed}</td>
                    <td className="p-3 text-emerald-800 border border-stone-200">{sled}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="NIGP vs NAICS: Know the Difference">
            <p>
              Federal procurement uses NAICS codes to classify industries. Most SLED procurement
              uses NIGP (National Institute of Governmental Purchasing) commodity codes. When you
              register with state vendor portals, you'll often select NIGP codes — not NAICS.
              These aren't a simple crosswalk. Take time to identify the NIGP codes that match
              your services before you register.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed">
            The good news: state and local procurement often has lighter compliance overhead than
            federal. No DCAA accounting system requirements. No CMMC cybersecurity compliance
            (in most cases). No elaborate past performance databases to manage. That makes
            entry easier for small businesses still building their compliance infrastructure.
          </p>
        </div>

        {/* Section 4 */}
        <SectionHeading id="how-to-find" number="04" title="Where to Find State and Local Opportunities" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            There's no SAM.gov equivalent for SLED. That's the central challenge. Opportunities are
            scattered across hundreds of individual portals — one per state agency, one per county,
            one per municipality. You can't cover all of them manually.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            Start with a tiered approach. Pick two to three states where you have existing
            relationships, employees, or physical presence. Master those portals before expanding.
          </p>

          {/* Portal list */}
          <div className="space-y-4 my-8">
            {[
              {
                title: "State central procurement portals",
                desc: "Every state has a central procurement office with a vendor registration and bid search system. Search \"[State] vendor registration\" or \"[State] procurement portal.\" Examples: eMaryland Marketplace Advantage (EMMA), Texas Smart Buy, Virginia eVA.",
                icon: Globe,
                color: "text-blue-600 bg-blue-50",
              },
              {
                title: "Onvia / DemandStar / BidSync / Periscope S2G",
                desc: "Aggregator platforms that pull bids from thousands of state and local agencies. Some require a subscription; others have free tiers. Worth evaluating if you're targeting multiple states.",
                icon: Layers,
                color: "text-violet-600 bg-violet-50",
              },
              {
                title: "Local newspaper legal notices",
                desc: "Smaller jurisdictions — townships, school districts, special districts — often still publish formal solicitations in local newspapers as required by state law. For contracts under the formal bid threshold, they may not post publicly at all.",
                icon: FileText,
                color: "text-orange-600 bg-orange-50",
              },
              {
                title: "Cooperative purchasing piggyback opportunities",
                desc: "If you hold a Sourcewell, NASPO ValuePoint, or OMNIA Partners contract, agencies can buy directly from you without a new solicitation. These aren't posted as bids — you market the contract to eligible agencies.",
                icon: Building,
                color: "text-emerald-600 bg-emerald-50",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-stone-50 border border-stone-100 rounded-2xl hover-lift"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed">
            Your{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
              contract pipeline
            </Link>{" "}
            needs to account for SLED separately from federal. The two markets have different cycle
            times, different contact points, and different relationship dynamics. Mixing them in
            the same tracking system without tagging them creates confusion.
          </p>
        </div>

        {/* Section 5 */}
        <SectionHeading id="cooperative-purchasing" number="05" title="Cooperative Purchasing: Your Fastest Entry Point" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Cooperative purchasing is the most powerful shortcut in SLED contracting. The concept
            is simple: one government entity runs a competitive procurement, awards a contract to a
            vendor, and then makes that contract available for other eligible government entities
            to use — without requiring a new competitive bid.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            For vendors, this is transformative. Win one cooperative contract, then market it to
            thousands of eligible agencies across the country. No re-bidding for each agency.
            They "piggyback" on the existing award.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            The cooperative purchasing market exceeds $65 billion annually. The four platforms
            dominating it:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                name: "NASPO ValuePoint",
                who: "All 50 states, D.C., territories, and their political subdivisions",
                how: "Led by individual state procurement offices on behalf of participating states. Not all states participate in every contract.",
                best: "Technology, software, fleet, facilities",
              },
              {
                name: "Sourcewell",
                who: "Local governments, education agencies, nonprofits — 50,000+ members",
                how: "Sourcewell runs its own solicitations and awards national cooperative contracts. Any eligible member can buy directly.",
                best: "Equipment, construction, vehicles, professional services",
              },
              {
                name: "OMNIA Partners",
                who: "Public sector entities broadly — state, local, education, higher ed",
                how: "Private cooperative that aggregates master contracts from multiple lead public agencies. Very broad coverage.",
                best: "Facilities, IT, office supplies, professional services",
              },
              {
                name: "E&I Cooperative Services",
                who: "Higher education and K–12",
                how: "Education-focused cooperative. Runs competitive solicitations; members can buy under the resulting contracts.",
                best: "Ed-tech, lab supplies, furniture, services",
              },
            ].map((coop, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
              >
                <h3 className="font-black text-stone-900 text-lg mb-2">{coop.name}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-stone-500">Who can use it: </span>
                    <span className="text-stone-700">{coop.who}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-500">How it works: </span>
                    <span className="text-stone-700">{coop.how}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-500">Strong categories: </span>
                    <span className="text-stone-700">{coop.best}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="sky" title="GSA Cooperative Purchasing: A Federal Bridge to SLED">
            <p>
              If you hold a GSA Schedule, Congress grants state and local governments access to
              buy from it through the GSA Cooperative Purchasing Program — but only for IT
              products, services, and solutions, and for Security and Law Enforcement equipment.
              It's not a blanket authorization. If you're a tech or security contractor with a
              GSA Schedule, you're already positioned to sell into SLED with no additional
              cooperative contract needed.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed">
            Winning a cooperative contract isn't automatic. You have to respond to the
            cooperative's solicitation and win the award — that requires a real proposal. But
            once you're on, the business development math changes dramatically. Instead of writing
            a new proposal for each agency, you're doing sales and account management. The heavy
            lift happens once.
          </p>
        </div>

        {/* Section 6 */}
        <SectionHeading id="certifications-setasides" number="06" title="Certifications and Set-Asides in SLED Markets" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            At least 45 states plus the District of Columbia have procurement preference policies
            for small and minority-owned businesses. The specifics vary enormously — different
            certification bodies, different preference percentages, different subcontracting
            requirements for larger contracts.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            The two most common state-level certifications:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                cert: "MBE (Minority Business Enterprise)",
                body: "State-level certification, often administered by the state's Department of Transportation or Office of Supplier Diversity",
                note: "Not federally recognized — you need a separate state MBE certification even if you hold federal 8(a) or other socioeconomic certifications",
              },
              {
                cert: "WBE (Women Business Enterprise) / DBE (Disadvantaged Business Enterprise)",
                body: "State DOT programs for federally funded transportation projects, plus state-specific WBE programs for other procurement",
                note: "DBE certification for state DOT contracts is federally required on USDOT-funded projects — this is one area where federal rules reach into state contracts",
              },
              {
                cert: "SBE / LBE (Small/Local Business Enterprise)",
                body: "City and county programs — often administered locally, not statewide",
                note: "Some cities require prime contractors to use a certain percentage of certified SBEs or LBEs as subcontractors on large projects",
              },
              {
                cert: "SDVOSB / VOSB state equivalents",
                body: "Some states have their own veteran preference programs with separate state certification",
                note: "Your federal VetCert certification doesn't automatically satisfy state veteran certification requirements — check each state you're targeting",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-stone-50 border-l-4 border-blue-400 rounded-r-2xl p-5"
              >
                <h3 className="font-bold text-stone-900 mb-1">{item.cert}</h3>
                <p className="text-sm text-stone-600 mb-2">{item.body}</p>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed">
            Federal certifications still carry weight in SLED, even when they don't directly
            substitute for state ones. Being 8(a), SDVOSB, or WOSB certified signals
            credibility to state and local procurement officers. It also helps on federally
            funded state contracts — like highway and transit projects funded by the
            Infrastructure Investment and Jobs Act — where your federal status matters.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-10 animate-on-scroll rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
          <div className="flex items-start gap-4">
            <CheckSquare className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-black text-emerald-900 mb-2">Start Your 30-Day Free Trial</h3>
              <p className="text-emerald-800 text-sm mb-4">
                CapturePilot tracks federal opportunities and helps you build the pipeline foundation
                you'll need as you expand into SLED. Get organized before you go wide.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-emerald-700 transition-colors"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <SectionHeading id="vendor-registration" number="07" title="Registering as a Vendor Across Multiple Jurisdictions" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            This is the grunt work of SLED entry — and it's more than most businesses expect.
            Unlike federal contracting's single SAM.gov registration, SLED requires separate
            registration with each state, county, or city you want to do business with. There is
            no centralized equivalent.
          </p>

          {/* Step by step */}
          <div className="my-8 space-y-4">
            {[
              {
                step: "01",
                title: "Identify your target states and jurisdictions",
                body: "Start with states where you have employees, offices, or strong existing relationships. Target 2–3 states maximum for your first year. Expansion is easier once you understand how one or two systems work.",
              },
              {
                step: "02",
                title: "Register with each state's central vendor portal",
                body: "Every state has a central procurement office with vendor registration. This typically requires your EIN, business address, ownership information, and NIGP commodity codes for your services. Some states charge a small registration fee; most don't.",
              },
              {
                step: "03",
                title: "Identify NIGP codes for your services",
                body: "NIGP codes are the SLED equivalent of NAICS. Spend time mapping your services to the right NIGP codes before you register — the codes determine which solicitations you're notified about. Getting them wrong means missed opportunities.",
              },
              {
                step: "04",
                title: "Register with key counties and cities",
                body: "State-level registration doesn't automatically put you in county and city systems. If you're targeting large metro governments (Los Angeles, Houston, Chicago, New York), register separately with their vendor portals. They often award contracts independently of state processes.",
              },
              {
                step: "05",
                title: "Pursue relevant state certifications",
                body: "Apply for MBE, WBE, SDVOSB state equivalents, or local SBE/LBE certifications in each jurisdiction where they're available and applicable. Many certification bodies share applications and databases — check whether your target state participates in the Unified Certification Program (UCP) for DBE.",
              },
              {
                step: "06",
                title: "Set up bid notification alerts",
                body: "Most state portals let you subscribe to email alerts for new solicitations in your NIGP categories. Set these up immediately after registration — otherwise you'll miss opportunities between manual checks.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-5 border border-stone-200 rounded-2xl hover-lift bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-black text-blue-700">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Don't Register Everywhere at Once">
            <p>
              The temptation is to register in every state you can find. Resist it. Registration
              without follow-through generates bid notifications you can't act on, relationships
              you can't maintain, and certifications that lapse because no one tracks the renewal
              dates. Two states done well beats twenty states done poorly.
            </p>
          </Callout>
        </div>

        {/* Section 8 */}
        <SectionHeading id="high-growth-categories" number="08" title="High-Growth Categories in State and Local Right Now" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            Not all SLED spending is equal. Some categories are contracting more slowly and
            competitively than ever. Others are exploding with demand and relatively few qualified
            vendors. Know which side you're entering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              {
                category: "Broadband and Telecom Infrastructure",
                signal: "High growth",
                detail: "The $42.45 billion BEAD (Broadband Equity, Access, and Deployment) program is flowing through state broadband offices into local implementation contracts. States are actively procuring construction, installation, and project management services.",
                color: "border-emerald-400 bg-emerald-50",
                badge: "bg-emerald-100 text-emerald-800",
              },
              {
                category: "AI and Data Analytics",
                signal: "Rapidly expanding",
                detail: "AI moved to the top of state CIO priority lists for the first time in 2026, according to the NASCIO State CIO Survey. States are procuring AI platforms, data analytics, and automation tools across health, transportation, and administrative functions.",
                color: "border-blue-400 bg-blue-50",
                badge: "bg-blue-100 text-blue-800",
              },
              {
                category: "Environmental and Sustainability Services",
                signal: "Strong demand, low competition",
                detail: "Environmental services is showing 40% quarter-over-quarter demand growth with a low vendor-to-opportunity ratio of 3.3. Infrastructure funding is reaching state and local government environmental programs faster than vendors are responding.",
                color: "border-teal-400 bg-teal-50",
                badge: "bg-teal-100 text-teal-800",
              },
              {
                category: "Cybersecurity",
                signal: "Sustained growth",
                detail: "State and local governments are under constant attack from ransomware and foreign actors. Most don't have adequate internal security capacity. Managed detection, incident response, and compliance consulting are consistently in demand.",
                color: "border-violet-400 bg-violet-50",
                badge: "bg-violet-100 text-violet-800",
              },
              {
                category: "Facilities and O&M",
                signal: "Steady baseline",
                detail: "Government buildings, schools, and public facilities need ongoing maintenance regardless of budget cycles. This is a large, stable category with local competitors — your location advantage matters here.",
                color: "border-orange-400 bg-orange-50",
                badge: "bg-orange-100 text-orange-800",
              },
              {
                category: "Professional Services and Staffing",
                signal: "Growing with workforce gaps",
                detail: "State and local government faces chronic staffing shortages in IT, engineering, and administrative roles. Temporary staffing, IT staff augmentation, and professional services consulting are consistently in demand across every state.",
                color: "border-sky-400 bg-sky-50",
                badge: "bg-sky-100 text-sky-800",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`border-l-4 rounded-r-2xl p-5 ${item.color}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-stone-900 text-sm">{item.category}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badge}`}>
                    {item.signal}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed">
            Your best opportunities are where your existing federal past performance aligns with
            high-growth SLED categories. A cybersecurity firm with DoD contracts has an immediately
            credible story for state CISO offices. A facilities contractor with GSA work has
            exactly the past performance state facilities managers want to see.
          </p>
        </div>

        {/* Section 9 */}
        <SectionHeading id="building-your-pipeline" number="09" title="Building a SLED Pipeline Without Losing Your Mind" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-4">
            The fragmentation of SLED is the core challenge. Federal contractors can monitor
            SAM.gov in a few hours a week and see nearly everything relevant. SLED contractors
            have to manage dozens of portals, certification renewals in multiple states, and
            relationship development across more jurisdictions.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            The solution is ruthless focus. Not trying to cover everything — building deep in
            a few markets before going wide.
          </p>

          <div className="my-8 bg-stone-50 border border-stone-200 rounded-2xl p-6">
            <h3 className="font-black text-stone-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              A Manageable SLED Pipeline Strategy
            </h3>
            <div className="space-y-4">
              {[
                {
                  phase: "Months 1–2: Foundation",
                  actions: [
                    "Register with 2–3 target state portals and set up bid alerts",
                    "Map your services to NIGP codes",
                    "Apply for MBE/WBE/SDVOSB state certifications where applicable",
                    "Identify which cooperative purchasing vehicles align with your category",
                  ],
                },
                {
                  phase: "Months 3–6: Active pursuit",
                  actions: [
                    "Respond to 3–5 RFPs in your target states to learn the process",
                    "Build relationships with state and county procurement officers",
                    "Apply to 1–2 cooperative contract solicitations that fit your category",
                    "Identify incumbent contracts expiring in the next 12–18 months",
                  ],
                },
                {
                  phase: "Months 6–12: Expand and repeat",
                  actions: [
                    "Add 1–2 more states based on where you've won or gotten close",
                    "Market your cooperative contract (if awarded) to member agencies",
                    "Use early wins as past performance for larger SLED bids",
                    "Consider teaming with local firms to enter markets where geography matters",
                  ],
                },
              ].map((phase, i) => (
                <div key={i}>
                  <h4 className="font-bold text-blue-700 text-sm mb-2">{phase.phase}</h4>
                  <ul className="space-y-1">
                    {phase.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Tracking this in a{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
              contract pipeline tool
            </Link>{" "}
            matters more in SLED than almost anywhere else. With federal, you can reconstruct
            context from SAM.gov. In SLED, opportunities close and agencies move on without
            much of a public record. If you're not tracking active pursuits, certification
            renewals, and relationship touchpoints, you lose the thread.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Teaming is also more valuable in SLED than contractors expect. Local firms know the
            procurement officers by name, understand the political dynamics of the jurisdiction,
            and often have existing relationships with the agency. A formal{" "}
            <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline font-medium">
              teaming agreement
            </Link>{" "}
            with a strong local firm can get you into a market you'd spend years trying to crack
            alone.
          </p>
        </div>

        {/* Section 10 */}
        <SectionHeading id="get-started" number="10" title="Where to Start Today" />
        <div className="animate-on-scroll">
          <p className="text-stone-700 leading-relaxed mb-6">
            If you've built any federal contracting foundation — SAM.gov registration, a
            capability statement, one or two contract awards — you're already further along
            than most SLED entrants. The translation takes work, but you're not starting
            from zero.
          </p>

          <div className="space-y-3 my-6">
            {[
              "Identify two states where you have relationships or employees — those are your first target markets",
              "Research those states' vendor registration portals and apply this week (most take under an hour)",
              "Map your NAICS codes to NIGP equivalents so you're classified correctly from day one",
              "Check whether a cooperative like Sourcewell or OMNIA Partners has an open solicitation in your category — the application cycles are infrequent",
              "Pull your best federal past performance and draft a one-page summary pitched to state buyers — different audience, different language",
              "Contact your state's small business development center (SBDC) — they often run SLED-specific procurement assistance programs for free",
            ].map((action, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-black">
                  {i + 1}
                </div>
                <p className="text-sm text-stone-700">{action}</p>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Leverage Your Federal Intelligence">
            <p>
              CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-emerald-800 underline font-medium">
                market intelligence
              </Link>{" "}
              tools help you identify agencies spending in your category across both federal and
              state-funded programs. Federally funded state contracts — BEAD broadband, USDOT
              highway work, HUD-funded housing — are required to use small business and
              set-aside programs. Your federal certifications matter directly in those procurements.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            Don't expect SLED revenue to replace federal overnight. The best contractors use the
            two markets in parallel — federal for scale and credibility, SLED for local
            relationships and diversification. Winning one state contract opens doors to five
            more in that state. Winning a cooperative contract opens doors to thousands of agencies
            nationally.
          </p>
          <p className="text-stone-700 leading-relaxed">
            The $1 trillion SLED market rewards patience, presence, and persistence. Most
            competitors give up after one failed bid in an unfamiliar state. The ones who
            build relationships, understand the local procurement culture, and consistently
            show up are the ones who win. Those wins compound fast.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-16 animate-on-scroll rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-white/80 mb-4">
              <Zap className="w-3.5 h-3.5" /> Ready to expand?
            </div>
            <h2 className="text-2xl font-black mb-3">
              Build Your Federal Foundation First
            </h2>
            <p className="text-stone-300 text-sm mb-6">
              Your strongest asset when entering SLED is a proven federal track record. CapturePilot
              helps you find and win federal contracts — the past performance that makes every
              state and local buyer more confident saying yes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-stone-100 transition-colors"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-xl font-black text-stone-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Government Contract Teaming Agreements",
                href: "/blog/government-contract-teaming-agreement",
                desc: "How to partner with other contractors and win bigger work",
              },
              {
                title: "How to Find Government Contracts",
                href: "/blog/how-to-find-government-contracts-small-business",
                desc: "Federal opportunity discovery from the ground up",
              },
              {
                title: "SBA Size Standards Guide",
                href: "/blog/sba-size-standards-guide",
                desc: "Make sure you qualify as small before you certify",
              },
              {
                title: "Managing Your Contract Pipeline",
                href: "/blog/government-contract-pipeline-management",
                desc: "From discovery to award, without losing track",
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="p-4 border border-stone-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-blue-700">
                      {article.title}
                    </h3>
                    <p className="text-xs text-stone-500">{article.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-blue-500 flex-shrink-0 mt-0.5" />
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
