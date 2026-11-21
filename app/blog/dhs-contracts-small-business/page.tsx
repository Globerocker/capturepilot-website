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
  Shield,
  DollarSign,
  Target,
  Zap,
  Building2,
  TrendingUp,
  Star,
  FileText,
  Clock,
  Award,
  Users,
  Globe,
  Lock,
  Truck,
  Layers,
  BarChart3,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "dhs-opportunity", label: "The $20 Billion DHS Opportunity" },
  { id: "dhs-components", label: "Eight Buying Components You Must Know" },
  { id: "small-business-goals", label: "DHS Small Business Goals and Set-Asides" },
  { id: "what-dhs-buys", label: "What DHS Actually Buys From Small Businesses" },
  { id: "osdbu-resources", label: "OSDBU: Your Inside Track at DHS" },
  { id: "apfs-forecast", label: "Using the DHS Acquisition Planning Forecast" },
  { id: "registering-to-win", label: "Getting Registered and Positioned to Win" },
  { id: "building-dhs-pipeline", label: "Building a Sustainable DHS Pipeline" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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

export default function DHSContractsSmallBusinessPage() {
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
            <span className="text-stone-900 font-medium">DHS Contracts for Small Business</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Federal Agencies
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            DHS Contracts for Small Business:{" "}
            <span className="gradient-text">The $20 Billion Opportunity</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The Department of Homeland Security is one of the most active civilian agency buyers in
            the federal government — and it has{" "}
            <strong className="text-stone-700">
              mandatory goals to award over 36% of its prime contracts to small businesses
            </strong>
            . Eight distinct buying components, thousands of contract actions per year, and a
            dedicated office to help you navigate it all. Here&apos;s how to break in.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published November 21, 2026</span>
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
          <SectionHeading id="dhs-opportunity" number="01" title="The $20 Billion DHS Opportunity" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most small business contractors obsess over DoD. That makes sense — it&apos;s the
              largest buyer by far. But it also means you&apos;re competing against thousands of
              companies that have spent years building defense relationships.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              DHS is different. It&apos;s large enough to build a real business on — with roughly{" "}
              <strong>$55–60 billion in total annual contract spending</strong> across its eight
              major components — but specialized enough that focused positioning can get you in
              front of buyers without competing against the full DoD contractor universe.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The math on small business access is good. DHS&apos;s FY2025 prime contracting goal
              for small businesses is{" "}
              <strong>36.50% of eligible contract dollars</strong> — that&apos;s a mandatory
              target, not a suggestion. At that rate, small businesses collectively see over $20
              billion in annual prime contract awards from a single agency. Add subcontracting
              opportunities under large prime contracts, and the accessible market is even bigger.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The challenge: DHS doesn&apos;t buy from &ldquo;DHS.&rdquo; It buys from CBP,
              TSA, FEMA, the Coast Guard, ICE, CISA, the Secret Service, and several smaller
              offices — each with its own contracting shop, its own priorities, and its own
              vendor relationships. You need to understand how those pieces fit together before
              you can build a real pursuit strategy.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              { label: "FY2025 small business prime goal", value: "36.50%", sub: "of eligible DHS contract dollars", icon: Target },
              { label: "SDVOSB prime contracting goal", value: "5.00%", sub: "mandatory target for veteran-owned", icon: Award },
              { label: "Small biz subcontracting goal", value: "47%", sub: "required from large prime subs", icon: Users },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-center hover-lift"
              >
                <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-stone-900 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">{stat.label}</div>
                <div className="text-xs text-stone-400">{stat.sub}</div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="blue" title="Know Your Set-Aside Goals Before You Call a CO">
            <p>
              DHS&apos;s FY2025 set-aside goals by program: Small Business 36.50%, Small
              Disadvantaged Business (SDB) 28.01%, Women-Owned Small Business 5.00%,
              Service-Disabled Veteran-Owned Small Business 5.00%, HUBZone 3.00%.{" "}
              <strong>HUBZone contractors:</strong> DHS consistently underperforms on HUBZone
              goals, which means contracting officers have extra motivation to find you. If
              you&apos;re certified, lead with it.
            </p>
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="dhs-components" number="02" title="Eight Buying Components You Must Know" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Calling DHS one agency is like calling &ldquo;the government&rdquo; one customer.
              Each component has its own mission, its own contracting authority, and its own
              procurement culture. Here&apos;s the breakdown of who buys what and how to reach them.
            </p>
          </div>

          {/* Components table */}
          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Component</th>
                  <th className="text-left px-4 py-3 font-semibold">Mission Focus</th>
                  <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">What They Buy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    component: "CBP — Customs & Border Protection",
                    mission: "Border security, trade facilitation",
                    buys: "Surveillance tech, vehicles, uniforms, IT systems, facilities",
                  },
                  {
                    component: "FEMA",
                    mission: "Disaster response and preparedness",
                    buys: "Temporary housing, logistics, debris removal, IT, training",
                  },
                  {
                    component: "Coast Guard",
                    mission: "Maritime law enforcement, SAR",
                    buys: "Vessel maintenance, aviation support, IT, construction",
                  },
                  {
                    component: "TSA",
                    mission: "Aviation and surface transport security",
                    buys: "Screening equipment, IT, training, facilities maintenance",
                  },
                  {
                    component: "ICE",
                    mission: "Immigration enforcement, investigations",
                    buys: "Detention support, IT, transportation, professional services",
                  },
                  {
                    component: "CISA",
                    mission: "Cybersecurity, critical infrastructure",
                    buys: "Cybersecurity services, IT infrastructure, research",
                  },
                  {
                    component: "Secret Service",
                    mission: "Executive protection, financial crimes",
                    buys: "Security equipment, vehicles, IT, professional services",
                  },
                  {
                    component: "OCPO (HQ)",
                    mission: "Department-wide procurement",
                    buys: "Enterprise contracts spanning multiple components",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.component}
                    className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-stone-900 border-b border-stone-100">{row.component}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{row.mission}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{row.buys}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Practical implication:</strong> Don&apos;t pursue &ldquo;DHS.&rdquo; Pick
              one or two components where your capabilities match their buying patterns. CBP is
              the largest single buyer — it handles everything from border infrastructure to
              enterprise IT. FEMA activates unpredictably after major disasters, creating urgent
              surge contracting that often goes to small businesses first. CISA is growing fast as
              the federal government&apos;s cyber lead, with an increasingly attractive portfolio
              for IT and security firms.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Each component has its own contracting directorate. CBP runs its Procurement
              Directorate out of Washington, D.C. TSA manages acquisitions through its Contracting
              and Procurement office. The Coast Guard&apos;s procurement arm is PLPM (Procurement,
              Law, and Property Management). These are separate shops — a relationship at CBP won&apos;t
              automatically carry over to Coast Guard.
            </p>
          </div>

          <Callout icon={Star} color="emerald" title="FEMA: The Surge Opportunity Most Contractors Miss">
            <p>
              FEMA maintains &ldquo;advance contracts&rdquo; for major commodity categories — things
              like temporary roofing, housing units, and logistics services — that activate
              automatically when a disaster declaration occurs. If you&apos;re on one of those
              vehicles before a storm season, you can receive task orders without competing in a
              post-disaster rush when normal procurement rules are compressed and speed matters
              more than price. Check{" "}
              <strong>fema.gov/businesses-organizations/doing-business/advanced-contracts</strong>{" "}
              for the current list of commodity areas and vehicles.
            </p>
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="small-business-goals" number="03" title="DHS Small Business Goals and Set-Asides" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              DHS negotiates annual small business contracting goals with the SBA. These aren&apos;t
              aspirational — contracting officers are measured against them, and each component has
              its own goal cascaded from the department-wide number. When a component falls behind
              in a given fiscal year, they look harder for set-aside opportunities to catch up.
              That&apos;s a window you can exploit if you know the cycle.
            </p>
          </div>

          {/* Goals visual */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-900 mb-5 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              DHS FY2025 Small Business Contracting Goals (Prime Awards)
            </h3>
            <div className="space-y-4">
              {[
                { label: "Small Business (all)", pct: 36.5, color: "bg-blue-500" },
                { label: "Small Disadvantaged Business (SDB)", pct: 28.01, color: "bg-emerald-500" },
                { label: "Women-Owned (WOSB)", pct: 5.0, color: "bg-purple-500" },
                { label: "Service-Disabled Veteran-Owned (SDVOSB)", pct: 5.0, color: "bg-amber-500" },
                { label: "HUBZone", pct: 3.0, color: "bg-red-500" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-stone-700 font-medium">{row.label}</span>
                    <span className="text-stone-500 font-mono">{row.pct}%</span>
                  </div>
                  <div className="h-2.5 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${row.color}`}
                      style={{ width: `${(row.pct / 40) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-400 mt-4">Source: DHS Office of Small and Disadvantaged Business Utilization, FY2025 goals document</p>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The SDB goal of 28.01% deserves a close look. That&apos;s not a subset of the 36.50%
              — it&apos;s a separate target. DHS is specifically trying to route a large portion of
              prime contracts to 8(a) firms, disadvantaged businesses, and other SDB-certified
              companies. If you hold any SDB designation, your positioning at DHS is significantly
              stronger than your positioning at most other agencies.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Subcontracting goals are even more aggressive: 47% of large prime contract
              subcontracting dollars must flow to small businesses, with 5% each for WOSB and
              SDVOSB firms and 3% for HUBZone. This matters if you&apos;re pursuing a{" "}
              <Link href="/blog/subcontracting-government-contracts" className="text-blue-700 hover:underline">
                subcontracting strategy
              </Link>{" "}
              as your entry point. Large DHS prime contractors — like major IT integrators on
              enterprise contracts — are required to spend heavily on small businesses to meet
              those goals. They need subs, and they&apos;ll look for you.
            </p>
          </div>

          <Callout icon={CheckCircle2} color="emerald" title="Quick Eligibility Check">
            <p>
              Before you spend time on DHS pursuits, verify your registrations are current and
              your certifications match the opportunity. Use{" "}
              <a href={CHECK_URL} className="text-emerald-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                CapturePilot&apos;s free eligibility checker
              </a>{" "}
              to confirm your SAM.gov status, applicable set-aside programs, and any NAICS codes
              that match DHS buying patterns. Five minutes now saves weeks of wasted pursuit.
            </p>
          </Callout>

          {/* Section 4 */}
          <SectionHeading id="what-dhs-buys" number="04" title="What DHS Actually Buys From Small Businesses" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The DHS mission covers border security, immigration enforcement, disaster response,
              cybersecurity, and aviation security. That breadth creates buying patterns across
              nearly every industry category.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                icon: Lock,
                title: "Cybersecurity & IT",
                desc: "CISA and every DHS component are heavy buyers of cybersecurity tools, assessments, cloud migration services, and IT infrastructure. CISA alone has expanded rapidly since the 2021 executive order on federal cyber. NAICS codes 541512, 541513, and 541519 are core.",
              },
              {
                icon: Building2,
                title: "Professional & Administrative Services",
                desc: "Program management, training, language services, human capital consulting, and administrative support. These categories run across all eight components and have many set-aside vehicles. NAICS 541611, 611430, 541690.",
              },
              {
                icon: Truck,
                title: "Logistics & Facilities",
                desc: "Warehousing, transportation, facilities management, grounds maintenance, and custodial services at CBP and ICE detention facilities. High volume, recurring, and historically open to small business set-asides.",
              },
              {
                icon: Shield,
                title: "Security & Law Enforcement Support",
                desc: "Physical security, body armor, surveillance equipment, investigative support, and training for TSA, Secret Service, CBP, and ICE. Many requirements in this space are set aside by default.",
              },
              {
                icon: Globe,
                title: "Construction & Infrastructure",
                desc: "Border infrastructure, Coast Guard facility construction, and disaster-related construction through FEMA. Subject to Davis-Bacon and construction bonding requirements. See our guide on surety bonds at /blog/surety-bond-government-contract.",
              },
              {
                icon: Zap,
                title: "Research, Evaluation & Analysis",
                desc: "DHS Science and Technology Directorate funds R&D and pilot programs. SBIR grants from DHS S&T fund early-stage innovations. If you have a novel technology with homeland security applications, the S&T directorate is worth watching.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover-lift"
              >
                <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              One category worth calling out: language and translation services. CBP, ICE, and
              FEMA collectively process massive volumes of non-English speakers. The demand for
              interpretation, translation, and cultural competency services is consistent, the
              requirements repeat annually, and small businesses have historically won a large
              share of this work.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Use{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                CapturePilot&apos;s market intelligence tools
              </Link>{" "}
              to look at historical DHS award patterns in your NAICS codes before you commit a
              pursuit. You want to see: how often the work has been set aside, who won it last
              time, and whether the award is coming up for recompete.
            </p>
          </div>

          {/* Mid-page CTA */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 my-10 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">
                  See Which DHS Opportunities Match Your Business
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  CapturePilot scans DHS contract awards and upcoming opportunities by NAICS code,
                  set-aside type, and component. Find your best-fit opportunities without spending
                  hours on SAM.gov.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading id="osdbu-resources" number="05" title="OSDBU: Your Inside Track at DHS" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Every federal agency with significant contracting activity has an Office of Small and
              Disadvantaged Business Utilization (OSDBU). DHS&apos;s OSDBU is one of the more
              active ones, running a formal outreach program that gives you direct access to small
              business specialists — the people who sit between contracting officers and vendors.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Vendor Outreach Sessions (VOS).</strong> DHS OSDBU runs approximately ten
              VOS events per fiscal year. Each session gives your company a 15-minute virtual
              meeting with a DHS small business specialist, who can tell you which upcoming
              requirements in your NAICS codes are likely to be set aside and which contracting
              officers to build relationships with. To request a meeting, you must first create a
              profile in DHS&apos;s electronic scheduling system at{" "}
              <strong>dhsvos.com</strong> before the registration window opens.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Vendor Outreach Matchmaking Events (VOME).</strong> These are larger events
              designed to connect small businesses with both DHS contracting officers and large
              prime contractors looking for subcontractors. If you&apos;re pursuing a{" "}
              <Link href="/blog/subcontracting-government-contracts" className="text-blue-700 hover:underline">
                subcontracting strategy
              </Link>
              , VOMEs are worth attending. You can have business-to-business conversations with
              primes who have active subcontracting goals to meet.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The DHS OSDBU calendar is published on <strong>dhs.gov/osdbu-outreach-and-component-events</strong>.
              Sessions are announced a few weeks out. Miss the window and you wait until next month.
              Set a calendar reminder and check the page at the start of each month.
            </p>
          </div>

          {/* Step visual */}
          <div className="my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-900 mb-5">How to Use a DHS Vendor Outreach Session</h3>
            <div className="space-y-3">
              {[
                { step: "01", title: "Create your OSDBU profile", desc: "Register at dhsvos.com with your SAM UEI, NAICS codes, and a brief capabilities summary before sessions open." },
                { step: "02", title: "Research the session schedule", desc: "Check dhs.gov/osdbu monthly. Sessions fill quickly — have your request ready to submit the day registration opens." },
                { step: "03", title: "Prepare a focused ask", desc: "In 15 minutes, you have time for two or three good questions. Ask about specific upcoming requirements, not general advice about DHS." },
                { step: "04", title: "Follow up with a capability statement", desc: "Send a one-page capability statement to the specialist within 48 hours. Keep it tied to the DHS mission areas they mentioned." },
                { step: "05", title: "Track the pipeline", desc: "Use the intelligence you got to focus your SAM.gov and APFS searches on the right NAICS codes and components." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-stone-50 border border-stone-200 rounded-xl p-4"
                >
                  <span className="flex-shrink-0 text-blue-600 font-black font-mono text-sm mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-stone-900 mb-0.5">{item.title}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={FileText} color="sky" title="Your Capability Statement Is Your First Impression">
            <p>
              Every interaction with a DHS small business specialist ends the same way: they ask
              for your capability statement. A generic two-pager won&apos;t get remembered.{" "}
              <Link href="/features/capability-statement" className="text-sky-700 font-semibold hover:underline">
                CapturePilot&apos;s capability statement builder
              </Link>{" "}
              helps you create a DHS-specific version that leads with your relevant past
              performance, your applicable NAICS codes, and your certifications — in the format
              those specialists actually read.
            </p>
          </Callout>

          {/* Section 6 */}
          <SectionHeading id="apfs-forecast" number="06" title="Using the DHS Acquisition Planning Forecast" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most small business contractors find DHS opportunities on SAM.gov after they&apos;re
              already posted. That&apos;s too late for serious capture work. The{" "}
              <strong>DHS Acquisition Planning Forecast System (APFS)</strong> at{" "}
              <strong>apfs-cloud.dhs.gov</strong> lists anticipated DHS contract actions
              above $350,000 before they hit SAM.gov — often months in advance.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Each APFS record includes the anticipated requirement description, estimated dollar
              value, expected procurement date, component, applicable NAICS code, anticipated
              set-aside type, and the name and contact information of the contracting officer or
              small business specialist. That last piece is the most valuable part. You get a name
              and a reason to reach out before the solicitation exists.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline">
                sources sought process
              </Link>{" "}
              often follows APFS postings. When you see an upcoming requirement in your space,
              monitor SAM.gov for the corresponding sources sought notice and respond immediately.
              A well-crafted sources sought response does two things: it proves you&apos;re paying
              attention, and it gives the CO data to support making the award a small business
              set-aside.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              APFS vs SAM.gov: Why the Forecast Matters
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "SAM.gov (Standard)",
                  points: ["RFP posted → 15-30 days to respond", "Competitor relationships already built", "Hard to influence scope or set-aside decision", "Reactive: you bid what they wrote"],
                  highlight: false,
                },
                {
                  label: "APFS (Proactive)",
                  points: ["Months of lead time before solicitation", "Build CO relationship early", "Influence set-aside designation via capabilities", "Proactive: you shape what they write"],
                  highlight: true,
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className={`rounded-xl p-4 ${col.highlight ? "bg-blue-600 text-white" : "bg-white border border-stone-200"}`}
                >
                  <p className={`font-bold mb-3 text-sm ${col.highlight ? "text-white" : "text-stone-900"}`}>
                    {col.label}
                  </p>
                  <ul className="space-y-1.5">
                    {col.points.map((pt) => (
                      <li key={pt} className={`text-sm flex items-start gap-2 ${col.highlight ? "text-blue-100" : "text-stone-500"}`}>
                        <span className="mt-0.5">•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Pair APFS intelligence with{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                CapturePilot&apos;s opportunity matching
              </Link>{" "}
              to get a consolidated view of both forecast items and live solicitations in your
              target NAICS codes. When you can see the full pipeline — forecasted, sources sought,
              pre-solicitation, and open — you can prioritize pursuit effort correctly.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading id="registering-to-win" number="07" title="Getting Registered and Positioned to Win" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The registration requirements for DHS contracts are the same as for any federal
              agency — an active SAM.gov registration is the floor. But DHS has some specific
              requirements and nuances worth knowing.
            </p>
          </div>

          <div className="space-y-3 my-8 animate-on-scroll">
            {[
              {
                icon: CheckCircle2,
                color: "text-emerald-600",
                title: "SAM.gov Registration",
                desc: "Active registration with current representations and certifications. DHS contracting officers verify SAM status before every award. If your registration has lapsed — even for a day — you cannot receive a contract. Set an auto-renewal reminder 90 days before expiration. See our SAM.gov renewal guide for the full checklist.",
              },
              {
                icon: CheckCircle2,
                color: "text-emerald-600",
                title: "NAICS Code Selection",
                desc: "Your primary NAICS in SAM.gov should match the codes DHS components buy most frequently in your space. Add secondary codes that cover adjacent capabilities. DHS contracting officers search by NAICS — if the code isn't in your profile, you don't show up.",
              },
              {
                icon: CheckCircle2,
                color: "text-emerald-600",
                title: "Certifications",
                desc: "If you qualify for 8(a), HUBZone, WOSB, or SDVOSB, get certified before you pursue DHS. The set-aside system only works for you if you're in it. DHS's strong SDB goals mean your 8(a) status can be directly responsible for a sole-source or restricted competition.",
              },
              {
                icon: AlertTriangle,
                color: "text-amber-600",
                title: "Security Requirements",
                desc: "Some DHS contracts — especially those supporting ICE, Secret Service, and CBP enforcement operations — require security clearances or facility clearances. If your work touches law enforcement sensitive (LES) information, budget time for the clearance process. See our security clearance guide at /blog/security-clearance-government-contracting.",
              },
              {
                icon: AlertTriangle,
                color: "text-amber-600",
                title: "Background Checks",
                desc: "Even contracts that don't require formal security clearances often require Homeland Security Presidential Directive (HSPD-12) compliant ID credentialing. Your employees working on DHS sites will go through background investigation. Factor that into staffing timelines and cost proposals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-stone-50 border border-stone-200 rounded-xl p-4"
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.color}`} />
                <div>
                  <p className="font-semibold text-stone-900 mb-0.5">{item.title}</p>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="amber" title="Past Performance: Start Small, Build the Record">
            <p>
              New DHS contractors face the classic catch-22: you need DHS past performance to win
              DHS contracts, but you need DHS contracts to build past performance. The way out is
              subcontracting. Find a large DHS prime, work as a named subcontractor, perform well,
              and get documented in the prime&apos;s CPARS record — then use that work in your own
              proposals as relevant past performance. This is exactly the{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-amber-700 font-semibold hover:underline">
                past performance-building strategy
              </Link>{" "}
              that moves you from zero to competitive in 12–18 months.
            </p>
          </Callout>

          {/* Section 8 */}
          <SectionHeading id="building-dhs-pipeline" number="08" title="Building a Sustainable DHS Pipeline" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Winning one DHS contract is luck. Winning them consistently is a pipeline management
              problem. The contractors that build real revenue at DHS do three things well: they
              pick one or two components and go deep, they position for recompetes before the
              incumbent gets complacent, and they treat every award as the foundation for the next
              one.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Pick your component.</strong> The biggest strategic mistake small businesses
              make at DHS is trying to cover all eight components simultaneously. CBP alone has
              thousands of active contracts. You could build a $5M business entirely on CBP IT
              work and never touch TSA or FEMA. Depth beats breadth until you have dedicated BD
              staff for each component.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Target recompetes.</strong> Every existing DHS contract will come up for
              recompete. The incumbent wins more often than not — but not always. When you spot a
              contract in your space that&apos;s within 12–18 months of its period of performance
              ending, start your capture work. Research the incumbent&apos;s performance, build a
              relationship with the CO, and position your approach as a step up from what the
              agency is getting today. Use CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                competitive intelligence
              </Link>{" "}
              to see the award history and identify when the recompete window opens.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>Use IDIQ vehicles strategically.</strong> DHS uses multiple-award IDIQ
              contracts extensively. Getting a spot on a DHS IDIQ gives you repeated task order
              opportunities without competing for a new prime contract each time. The initial IDIQ
              competition is harder — DHS evaluates your capabilities against a broad scope — but
              once you&apos;re on, you compete in a much smaller pool.{" "}
              <Link href="/blog/idiq-contracts-explained" className="text-blue-700 hover:underline">
                IDIQ contract basics
              </Link>{" "}
              are worth understanding before you pursue one.
            </p>
          </div>

          {/* Pipeline stages */}
          <div className="my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-900 mb-5 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              A 12-Month DHS Pipeline Building Plan
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  phase: "Months 1–3",
                  color: "bg-blue-50 border-blue-200",
                  badge: "Foundation",
                  tasks: [
                    "Confirm SAM.gov registration and certifications",
                    "Identify target component (CBP, FEMA, CISA, etc.)",
                    "Register on APFS and set up saved searches",
                    "Book a DHS OSDBU Vendor Outreach Session",
                    "Build a DHS-tailored capability statement",
                  ],
                },
                {
                  phase: "Months 4–6",
                  color: "bg-emerald-50 border-emerald-200",
                  badge: "Pursuit",
                  tasks: [
                    "Respond to 2–3 sources sought in your NAICS codes",
                    "Identify 1–2 prime contractors for subcontracting",
                    "Track 5–10 specific DHS opportunities in a pipeline tool",
                    "Attend a VOME matchmaking event if available",
                    "Start your first DHS proposal draft",
                  ],
                },
                {
                  phase: "Months 7–12",
                  color: "bg-amber-50 border-amber-200",
                  badge: "Win & Expand",
                  tasks: [
                    "Submit your first DHS bid",
                    "Request a debriefing regardless of win or loss",
                    "Target a recompete 12–18 months out",
                    "Build CPARS record on first subcontract",
                    "Expand NAICS codes as wins accumulate",
                  ],
                },
              ].map((phase) => (
                <div
                  key={phase.phase}
                  className={`border rounded-2xl p-5 ${phase.color}`}
                >
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">{phase.phase}</span>
                  <p className="font-bold text-stone-900 mt-1 mb-3">{phase.badge}</p>
                  <ul className="space-y-1.5">
                    {phase.tasks.map((t) => (
                      <li key={t} className="text-xs text-stone-600 flex items-start gap-1.5">
                        <span className="text-stone-400 mt-0.5">•</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Track all of this in a{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline">
                pipeline management tool
              </Link>{" "}
              that shows you where each pursuit stands, what the next action is, and when you need
              to act. The DHS procurement cycle moves faster than you think — solicitations
              sometimes close in two weeks. If you&apos;re not watching your pipeline daily, you
              will miss bids.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              And don&apos;t ignore the{" "}
              <Link href="/blog/government-contract-debriefing" className="text-blue-700 hover:underline">
                post-award debrief
              </Link>
              . Every loss at DHS is data. COs are legally required to give you a debrief if you
              ask — within five days for smaller contracts. The feedback you get tells you exactly
              where your proposal fell short, which informs how you write the next one.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 my-10 animate-on-scroll">
            <div className="text-center">
              <Award className="w-10 h-10 text-blue-200 mx-auto mb-4" />
              <h3 className="text-white font-black text-2xl mb-3">
                Ready to Build Your DHS Pipeline?
              </h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto leading-relaxed">
                CapturePilot matches your certifications, NAICS codes, and capabilities to DHS
                opportunities — including APFS forecasted work before it hits SAM.gov. See your
                best-fit DHS opportunities in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Check Eligibility Free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors border border-blue-400"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="border-t border-stone-200 pt-10 animate-on-scroll">
            <h3 className="font-bold text-stone-900 mb-5">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/dod-contracts-small-business", label: "DoD Contracts for Small Business: Where to Start" },
                { href: "/blog/va-contracts-guide", label: "VA Contracts: How to Win Work With the Department of Veterans Affairs" },
                { href: "/blog/subcontracting-government-contracts", label: "Subcontracting on Government Contracts: Your First Step Into Federal" },
                { href: "/blog/sources-sought-notice", label: "Sources Sought Notices: How to Get In Early and Shape the RFP" },
                { href: "/blog/sdvosb-contracts-guide", label: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses" },
                { href: "/blog/capability-statement-examples", label: "Capability Statement Examples: What Good (and Bad) Ones Look Like" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-stone-700 group-hover:text-blue-700 leading-snug">
                    {link.label}
                  </span>
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
