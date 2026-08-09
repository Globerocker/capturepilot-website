"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Lightbulb,
  BookOpen,
  ChevronRight,
  FileText,
  Clock,
  Shield,
  CheckCircle2,
  DollarSign,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Cpu,
  Zap,
  Target,
  Building2,
  Star,
  ListChecks,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "spending-surge", label: "The AI Spending Surge: Real Numbers" },
  { id: "which-agencies", label: "Which Agencies Buy AI and What They Buy" },
  { id: "naics-codes", label: "The Right NAICS Codes for AI Work" },
  { id: "contract-vehicles", label: "Getting on Federal AI Contract Vehicles" },
  { id: "set-asides", label: "Set-Asides and Certifications That Open Doors" },
  { id: "sbir-path", label: "The SBIR/STTR Path for AI Startups" },
  { id: "capability-positioning", label: "Positioning Your Capability for AI Bids" },
  { id: "common-mistakes", label: "Mistakes That Lose AI Contracts" },
  { id: "pipeline-strategy", label: "Building Your Federal AI Pipeline" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet" | "orange" | "indigo";
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
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
    indigo: "text-indigo-600",
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
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function AiGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">AI Government Contracts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Cpu className="w-4 h-4" /> Industries / Technology
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            AI Government Contracts:{" "}
            <span className="gradient-text">
              How Small Businesses Win Federal Work in Artificial Intelligence
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Federal AI spending jumped 966% between 2024 and 2026 — from $355 million in
            obligated contracts to $7.2 billion. The potential award value sits at $91.8 billion.
            DoD alone accounts for roughly $90 billion of that pipeline. This market is real,
            it&apos;s growing fast, and small businesses can compete — if they know which vehicles
            to pursue, which NAICS codes to register, and how to position their capabilities.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 9, 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-indigo-700 transition-colors py-1"
                >
                  <span className="text-xs font-bold text-indigo-500 w-5 shrink-0">
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
        <div className="max-w-4xl mx-auto prose-custom">

          {/* Section 1 */}
          <SectionHeading id="spending-surge" number="01" title="The AI Spending Surge: Real Numbers" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The scale of federal AI investment is not hype — it&apos;s documented in obligation data.
              According to a 2026 Brookings analysis of federal procurement records, AI contract
              obligations grew from $355 million in 2024 to $7.2 billion in 2026. That&apos;s a 966%
              increase in two years. The potential award value — what agencies have authorized they
              may eventually spend — climbed from $4.6 billion to $91.8 billion over the same period,
              a 1,912% jump.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The number of agencies actively buying AI grew from 17 in 2022 to 28 by 2026. That
              expansion means AI isn&apos;t limited to defense and intelligence anymore. Health, energy,
              transportation, and financial regulatory agencies are all adding AI lines to their
              procurement portfolios.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The policy foundation driving all of this is the White House AI Action Plan, released
              July 23, 2025. The plan set out more than 90 federal policy actions across three
              pillars: accelerating AI innovation, building U.S. AI infrastructure, and leading in
              international AI security. Crucially, one pillar specifically targets federal
              procurement — agencies are directed to buy American AI and to streamline acquisition
              processes for AI solutions. On June 2, 2026, President Trump reinforced this with an
              Executive Order titled &ldquo;Promoting Advanced Artificial Intelligence Innovation and
              Security,&rdquo; which added cybersecurity mandates for AI deployments and a voluntary
              framework for frontier model security. These aren&apos;t advisory documents. They fund
              programs and generate solicitations.
            </p>
          </div>

          <Callout icon={BarChart3} color="indigo" title="Federal AI Spending by the Numbers (2026)">
            <strong>$7.2 billion</strong> — AI contract obligations in 2026 (up 966% from $355M in 2024)<br />
            <strong>$91.8 billion</strong> — Potential AI award value (up 1,912% from $4.6B in 2024)<br />
            <strong>28 agencies</strong> — Federal agencies with active AI contracts (up from 17 in 2022)<br />
            <strong>1,319 DoD AI contracts</strong> — Defense alone doubled its AI contract count in two years<br />
            Source: Brookings Institution analysis of federal procurement data, 2026
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="which-agencies" number="02" title="Which Agencies Buy AI and What They Buy" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The Department of Defense dominates this market by a wide margin. The DoD grew from
              254 AI contracts in 2022 to 657 in 2024 and 1,319 in 2026. The potential award
              value sitting with DoD is roughly $90 billion. Within DoD, the priority use cases
              are intelligence processing and targeting, autonomous systems, logistics and
              predictive maintenance, cybersecurity and threat detection, and AI-assisted mission
              planning for missile defense.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Department of Health and Human Services runs a distant second with 134 AI
              contracts, focused on clinical data analysis, fraud detection in Medicare and
              Medicaid, and public health surveillance. NASA follows with 71 contracts, primarily
              for remote sensing data processing, mission modeling, and earth observation analytics.
              The Department of Commerce adds $197 million in AI contract volume, driven by NOAA
              weather modeling and Census Bureau data systems.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              What are agencies actually buying? The contract categories fall into a few buckets:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-indigo-50 text-indigo-900">
                    <th className="text-left p-3 border border-indigo-100 font-bold">AI Use Case</th>
                    <th className="text-left p-3 border border-indigo-100 font-bold">Primary Buyers</th>
                    <th className="text-left p-3 border border-indigo-100 font-bold">Contract Type</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100">Data analytics &amp; visualization</td>
                    <td className="p-3 border border-stone-100">DoD, HHS, DHS, VA</td>
                    <td className="p-3 border border-stone-100">T&amp;M / FFP services</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100">Machine learning model development</td>
                    <td className="p-3 border border-stone-100">DoD, DARPA, Intelligence</td>
                    <td className="p-3 border border-stone-100">CPFF R&amp;D / SBIR</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100">Natural language processing</td>
                    <td className="p-3 border border-stone-100">DoD, DHS, State</td>
                    <td className="p-3 border border-stone-100">FFP with deliverables</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100">Computer vision / image analysis</td>
                    <td className="p-3 border border-stone-100">DoD, NASA, NOAA</td>
                    <td className="p-3 border border-stone-100">IDIQ task orders</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100">Robotic process automation (RPA)</td>
                    <td className="p-3 border border-stone-100">GSA, IRS, SSA, VA</td>
                    <td className="p-3 border border-stone-100">FFP / BPA task orders</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100">Cybersecurity AI / anomaly detection</td>
                    <td className="p-3 border border-stone-100">CISA, DoD, NSA</td>
                    <td className="p-3 border border-stone-100">IDIQ / OTA</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100">Predictive maintenance</td>
                    <td className="p-3 border border-stone-100">DoD (Army, Navy, Air Force)</td>
                    <td className="p-3 border border-stone-100">OTA / SBIR Phase II</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The distinction between &ldquo;AI product&rdquo; and &ldquo;AI services&rdquo; matters for how you bid.
              Agencies buying a software tool — a pre-built AI platform — tend to use IT contract
              vehicles and simplified acquisition. Agencies buying custom AI development — building
              a model for their specific mission data — typically use R&amp;D vehicles, OTAs, and
              SBIRs. Your approach depends on which type of work you do.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">See which AI contracts match your business</h3>
                <p className="text-indigo-100 text-sm">
                  CapturePilot scans active federal AI solicitations and matches them to your NAICS codes,
                  certifications, and past performance — so you&apos;re not hunting through SAM.gov manually.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="shrink-0 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors flex items-center gap-2"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading id="naics-codes" number="03" title="The Right NAICS Codes for AI Work" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Your NAICS codes determine which solicitations you see and whether you qualify as a
              small business for set-aside competition. Most AI contractors need more than one code.
              Here are the primary codes and their 2026 SBA size standards.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-900">
                    <th className="text-left p-3 border border-stone-200 font-bold">NAICS Code</th>
                    <th className="text-left p-3 border border-stone-200 font-bold">Description</th>
                    <th className="text-left p-3 border border-stone-200 font-bold">Size Standard</th>
                    <th className="text-left p-3 border border-stone-200 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100 font-mono font-bold">541512</td>
                    <td className="p-3 border border-stone-100">Computer Systems Design Services</td>
                    <td className="p-3 border border-stone-100">$34.0M avg. annual receipts</td>
                    <td className="p-3 border border-stone-100">Integrated AI solutions, implementation</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100 font-mono font-bold">541511</td>
                    <td className="p-3 border border-stone-100">Custom Computer Programming Services</td>
                    <td className="p-3 border border-stone-100">$34.0M avg. annual receipts</td>
                    <td className="p-3 border border-stone-100">Custom ML model development, code-heavy work</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100 font-mono font-bold">518210</td>
                    <td className="p-3 border border-stone-100">Data Processing and Hosting Services</td>
                    <td className="p-3 border border-stone-100">$34.0M avg. annual receipts</td>
                    <td className="p-3 border border-stone-100">SaaS AI platforms, cloud AI, MLOps</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100 font-mono font-bold">541715</td>
                    <td className="p-3 border border-stone-100">R&amp;D in Physical/Engineering/Life Sciences</td>
                    <td className="p-3 border border-stone-100">1,000 employees</td>
                    <td className="p-3 border border-stone-100">SBIR work, R&amp;D contracts, applied AI research</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100 font-mono font-bold">541519</td>
                    <td className="p-3 border border-stone-100">Other Computer Related Services</td>
                    <td className="p-3 border border-stone-100">$34.0M avg. annual receipts</td>
                    <td className="p-3 border border-stone-100">AI consulting, advisory, strategy services</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-3 border border-stone-100 font-mono font-bold">541690</td>
                    <td className="p-3 border border-stone-100">Other Scientific/Technical Consulting</td>
                    <td className="p-3 border border-stone-100">$19.0M avg. annual receipts</td>
                    <td className="p-3 border border-stone-100">AI ethics, responsible AI, policy consulting</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              541512 is the strongest primary code for most AI firms because contracting officers
              associate it with integrated technology solutions, and it&apos;s the code written into
              the most AI-related solicitations. If your work skews heavily toward building custom
              algorithms and models from scratch, add 541511 as a secondary code. If you offer a
              SaaS AI platform, 518210 covers that work stream.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Register all relevant codes in SAM.gov — agencies search by NAICS when setting
              solicitations, and you can miss opportunities if you&apos;re not registered under the
              code the CO used to classify the work. Use CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-indigo-600 hover:text-indigo-800 underline">
                opportunity matching
              </Link>{" "}
              to monitor which codes are driving the most AI solicitations in your target agencies.
              For guidance on updating your codes without losing set-aside eligibility, see our post
              on{" "}
              <Link href="/blog/naics-code-change-guide" className="text-indigo-600 hover:text-indigo-800 underline">
                changing NAICS codes in SAM.gov
              </Link>
              .
            </p>
          </div>

          <Callout icon={AlertCircle} color="amber" title="SBA Size Standard Update — October 2025">
            On August 22, 2025, the SBA proposed increases to monetary-based size standards across
            263 industries, including technology services. The proposed changes took effect October 1,
            2025. If your revenues were near the old threshold for 541512 or 541511, you may now
            qualify as a small business under the updated standards. Verify your current eligibility
            using CapturePilot&apos;s{" "}
            <a href={CHECK_URL} className="text-amber-700 font-bold underline hover:text-amber-900">
              Quick Checker
            </a>
            .
          </Callout>

          {/* Section 4 */}
          <SectionHeading id="contract-vehicles" number="04" title="Getting on Federal AI Contract Vehicles" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most federal AI spending does not flow through open-market SAM.gov solicitations. It
              flows through pre-competed contract vehicles — GWACs, IDIQs, and schedules — where
              agencies issue task orders only to pre-approved vendors. Getting on the right vehicles
              is the strategic play for long-term AI revenue.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">GSA 8(a) STARS III</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              The 8(a) STARS III is a Best-in-Class Governmentwide Acquisition Contract (GWAC) for
              IT services, and it explicitly includes AI, machine learning, and data science as
              task areas. It&apos;s restricted to 8(a)-certified small businesses. If your firm is
              8(a) certified, STARS III should be a top priority — it has a $50 billion ceiling and
              is the preferred vehicle for many civilian agencies buying AI services. The ordering
              period runs through 2030. If you&apos;re not on it yet, monitor GSA&apos;s announcements for
              on-ramp opportunities.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">Alliant 3</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              GSA issued Alliant 3 Phase 1 awards in March 2026 — this is the next-generation IT
              services GWAC replacing Alliant 2. Unlike Alliant 2 (which closed to new vendors),
              Alliant 3 has both large business and small business tracks. The vehicle explicitly
              covers AI, cloud, cybersecurity, and digital transformation. GSA announced an on-ramp
              process for new vendors; watch SAM.gov and the GSA GWAC program pages for upcoming
              small business on-ramp announcements. Alliant 3 will be the dominant IT vehicle for
              the next decade.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">NIH CIO-SP3 Small Business</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              The CIO-SP3 Small Business vehicle, administered by NIH, covers health IT and data
              science work across civilian agencies. It&apos;s been extended through October 2026 for
              task order ordering. The CIO-SP4 successor is in development — watch for solicitation
              announcements if you work in health AI, clinical informatics, or federal data systems.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">GSA Multiple Award Schedule (MAS)</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              GSA&apos;s MAS program — Schedule 70 equivalent — is the easiest vehicle to get on and
              covers AI products and services under Large Category IT. GSA Refresh #31 (early 2026)
              introduced new AI-specific contract terms and expanded Transactional Data Reporting
              requirements for AI schedule holders. Getting a GSA Schedule for your AI offerings
              is the foundational step before pursuing GWACs. It takes 90–120 days and gives you
              access to the entire civilian agency market without competing for a spot on every
              vehicle.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">Other Transaction Authority (OTA)</h3>
            <p className="text-stone-700 leading-relaxed mb-4">
              OTAs have become a primary tool for DoD AI acquisitions because they bypass standard
              FAR procurement rules. Consortia like NSTXL, NCMS, and AFWERX manage OTA vehicles
              that give small businesses direct access to DoD AI opportunities. Joining one of
              these consortia costs $500–$5,000 annually and can put you in front of program
              offices that never post openly on SAM.gov. For more on OTAs, see our{" "}
              <Link href="/blog/ota-contracts-guide" className="text-indigo-600 hover:text-indigo-800 underline">
                complete OTA guide
              </Link>
              .
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Strategy: Subcontracting as an Entry Point">
            You don&apos;t need to be a prime on a GWAC to win AI contract work today. Large primes
            on Alliant 2, Alliant 3, and STARS III actively look for AI subcontractors with domain
            expertise. Agencies often require subcontracting plans with specific small business
            percentages. Reaching out to primes as an AI sub is a legitimate path to building
            past performance while you work toward prime contract status. Use CapturePilot&apos;s{" "}
            <Link href="/features/intelligence" className="text-indigo-600 hover:text-indigo-800 underline">
              market intelligence
            </Link>{" "}
            to identify which primes are winning AI task orders in your target agencies.
          </Callout>

          {/* Section 5 */}
          <SectionHeading id="set-asides" number="05" title="Set-Asides and Certifications That Open Doors" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Set-aside certifications reduce your competition from thousands of vendors to a
              qualified pool of dozens. For AI contracts specifically, four certifications create
              the most opportunity.
            </p>

            <div className="space-y-5 my-8">
              {[
                {
                  cert: "8(a) Business Development",
                  why: "Sole-source awards up to $4.5M for services, access to 8(a) STARS III, and direct relationships with SBA Business Development Officers who can connect you with agency needs.",
                  action: "Apply through SBA.gov. Requires 51%+ disadvantaged ownership, 2 years in business, and personal net worth under $850,000.",
                },
                {
                  cert: "SDVOSB / VOSB",
                  why: "VA set-asides for all technology work, DoD preference programs, and access to VA-specific AI contracting vehicles. The VA is a major buyer of health AI.",
                  action: "Self-certify in SAM.gov and verify through SBA's Veteran Small Business Certification program.",
                },
                {
                  cert: "WOSB / EDWOSB",
                  why: "Set-aside access across all agencies in underrepresented NAICS codes. Technology categories qualify under WOSB, opening competition restricted to women-owned firms.",
                  action: "Apply through the SBA WOSB program or an approved third-party certifier.",
                },
                {
                  cert: "HUBZone",
                  why: "10% price evaluation preference in full-and-open competitions and access to HUBZone set-asides. Useful for AI firms located in eligible areas, particularly rural tech corridors.",
                  action: "Check your address at SBA HUBZone Map. Requires 35% of employees to reside in the HUBZone.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-200 hover-lift">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.cert}</p>
                    <p className="text-sm text-stone-600 mb-2">{item.why}</p>
                    <p className="text-xs text-stone-500 italic">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For AI work specifically, the 8(a) certification is the most powerful because of
              8(a) STARS III — a $50 billion GWAC with AI explicitly in scope. If you qualify
              for 8(a), apply before pursuing any other certification strategy. For a deep dive
              on each program, see our posts on{" "}
              <Link href="/blog/8a-sole-source-contracts" className="text-indigo-600 hover:text-indigo-800 underline">
                8(a) sole-source contracts
              </Link>{" "}
              and{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-indigo-600 hover:text-indigo-800 underline">
                which certifications actually help you win
              </Link>
              .
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Not sure which programs you qualify for? Use CapturePilot&apos;s{" "}
              <Link href="/features/quick-checker" className="text-indigo-600 hover:text-indigo-800 underline">
                Quick Checker
              </Link>{" "}
              to get a fast eligibility assessment based on your business profile.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading id="sbir-path" number="06" title="The SBIR/STTR Path for AI Startups" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              If your AI firm is R&amp;D-oriented — building novel models, doing applied research, or
              developing AI for a specific technical problem — the SBIR/STTR program is the best
              entry point into federal AI work. It&apos;s structured as grants, not contracts, which
              means you retain IP rights while getting paid to de-risk your technology.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The program had a significant disruption: SBIR/STTR authorization expired September
              30, 2025, freezing new solicitations across all 11 participating agencies including
              DoD, NIH, NSF, DOE, and NASA. As of mid-2026, Congress reauthorized the program and
              DoD published its first new Broad Agency Announcements (BAA) — the 26.1 solicitation.
              If you were waiting on SBIR, it&apos;s back.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              DoD releases three SBIR BAAs per fiscal year (numbered 26.1, 26.2, 26.3), each
              containing hundreds of topic areas from Air Force, Army, Navy, DARPA, MDA, and
              other components. AI, autonomy, machine learning, and computer vision topics appear
              in nearly every component&apos;s topic list. Phase I awards typically run $50,000–$250,000
              for a 6-month feasibility study. Phase II awards run $750,000–$1.75 million for a
              2-year development effort. Phase III is where the commercial and government contracts
              flow — often sole-source.
            </p>

            <div className="my-8 space-y-3">
              {[
                { phase: "Phase I", amount: "$50K–$250K", duration: "6 months", purpose: "Feasibility study — prove your AI concept works" },
                { phase: "Phase II", amount: "$750K–$1.75M", duration: "24 months", purpose: "Full development — build the prototype or product" },
                { phase: "Phase III", amount: "No SBIR limit", duration: "Ongoing", purpose: "Commercialization — government and commercial revenue, often sole-source" },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="w-20 shrink-0">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
                      {row.phase}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-stone-900 text-sm">{row.amount} / {row.duration}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{row.purpose}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The key to winning SBIR topics is responding to the specific technical challenge
              described in the topic — not just describing your technology broadly. DoD program
              managers write the topics because they have a real problem. Show you understand the
              operational context, not just the algorithm. For a full breakdown of the SBIR
              process, see our{" "}
              <Link href="/blog/sbir-sttr-grants-guide" className="text-indigo-600 hover:text-indigo-800 underline">
                SBIR and STTR grants guide
              </Link>
              .
            </p>
          </div>

          <Callout icon={Zap} color="violet" title="SBIR Phase III: The Hidden AI Revenue Stream">
            Phase III is often overlooked because it doesn&apos;t have a direct funding cap from the
            SBIR program. After a successful Phase II, agencies can award sole-source Phase III
            contracts of any value because you already proved the technology works on their dime.
            Some AI companies have turned a $250K Phase I into a $20M+ Phase III contract stream
            over five years. The goal of Phase I and II isn&apos;t the award money — it&apos;s the Phase III.
          </Callout>

          {/* Section 7 */}
          <SectionHeading id="capability-positioning" number="07" title="Positioning Your Capability for AI Bids" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Federal buyers are sophisticated enough to know that &ldquo;AI&rdquo; is not a differentiator
              anymore. Everyone claims AI. What they&apos;re evaluating is: do you understand my
              specific problem domain, can you prove you&apos;ve solved problems like it before, and
              can you show your approach works with government data constraints?
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Your{" "}
              <Link href="/blog/capability-statement-examples" className="text-indigo-600 hover:text-indigo-800 underline">
                capability statement
              </Link>{" "}
              and technical proposals need to address three things that generic AI marketing misses:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Shield,
                  title: "Data security and compliance posture",
                  desc: "Government AI work involves sensitive data. FedRAMP authorization, IL2/IL4/IL5 processing capability, and CMMC compliance are not nice-to-haves for most DoD AI work. State these explicitly. If you have FedRAMP-authorized infrastructure, lead with that.",
                },
                {
                  icon: Target,
                  title: "Mission-domain expertise",
                  desc: "Agencies buy AI for specific missions — logistics forecasting, threat analysis, clinical outcomes. Generic ML capability does not win. Anchor your proposal to specific past performance in the domain. If you've built a model for healthcare claims, that's your lead for HHS work.",
                },
                {
                  icon: FileText,
                  title: "Model explainability and responsible AI",
                  desc: "The June 2026 Executive Order on AI security created new requirements for AI deployed in federal operations — including documentation of model behavior and oversight controls. Agencies buying AI now ask for explainability in proposals. Address it specifically.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-stone-200 hover-lift bg-white">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Your{" "}
              <Link href="/features/capability-statement" className="text-indigo-600 hover:text-indigo-800 underline">
                CapturePilot capability statement
              </Link>{" "}
              builder lets you create agency-specific versions that emphasize the right past
              performance and differentiators for each target buyer. For AI contractors, having
              separate versions for DoD, civilian health, and civilian civilian IT is worth the
              time investment.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">Build your AI-focused capability statement</h3>
                <p className="text-stone-600 text-sm">
                  CapturePilot&apos;s capability statement builder includes AI-specific templates used by
                  contractors winning work at DoD, HHS, and civilian agencies. Start free.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="shrink-0 bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Start free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading id="common-mistakes" number="08" title="Mistakes That Lose AI Contracts" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most small businesses lose their first few AI bids not because their technology is
              wrong, but because they misread the acquisition structure. These are the five patterns
              that show up repeatedly in debriefs.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  mistake: "Bidding commercial vs. government AI",
                  fix: "Commercial AI tools (off-the-shelf LLMs, SaaS platforms) face procurement scrutiny around data sovereignty and FedRAMP authorization. If your solution uses commercial AI APIs, address how government data stays protected. Agencies have been burned by vendors who didn't account for cloud data handling.",
                },
                {
                  mistake: "Ignoring the Section L/M instructions",
                  fix: "AI solicitations often have complex evaluation criteria that weigh technical approach, personnel qualifications, and past performance separately. Read Section M before writing a single word of your proposal. If explainability or responsible AI is listed as an evaluation factor, dedicate a full subsection to it.",
                },
                {
                  mistake: "Claiming AI without proving it",
                  fix: "Evaluators are skeptical of vague AI claims. Show your methodology — the data pipeline, the model architecture choices, the validation approach. Include quantitative results from past performance (accuracy rates, processing speed, cost reduction).",
                },
                {
                  mistake: "No staffing plan for cleared personnel",
                  fix: "Many DoD AI contracts require cleared personnel or the ability to obtain clearances. If you can't address this in your proposal, you'll lose to firms that can. Either partner with a firm that has cleared staff or start the clearance sponsorship process now.",
                },
                {
                  mistake: "Bidding on vehicles you can't access",
                  fix: "Task orders under 8(a) STARS III are restricted to 8(a) vendors. If you're not 8(a)-certified, you can't compete as a prime. Understand which vehicles a solicitation flows through before spending time on a proposal. CapturePilot's opportunity feed flags the vehicle and set-aside status on every solicitation.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-stone-50 rounded-2xl border-l-4 border-amber-400">
                  <p className="font-bold text-stone-900 mb-1 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    {item.mistake}
                  </p>
                  <p className="text-sm text-stone-600 ml-6">{item.fix}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="pipeline-strategy" number="09" title="Building Your Federal AI Pipeline" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Winning AI government contracts consistently is a pipeline problem. The agencies
              spending the most on AI — DoD components, HHS, NASA — plan their acquisitions 12–24
              months before an RFP hits SAM.gov. If you&apos;re responding to RFPs cold, you&apos;re already
              behind the vendors who shaped the requirement.
            </p>

            <div className="my-8 space-y-3">
              {[
                { step: "01", title: "Register and certify correctly", desc: "SAM.gov registration with the right NAICS codes (541512, 541511, 518210, 541715) is table stakes. Add all relevant codes now — you can have up to 100 in SAM." },
                { step: "02", title: "Target 2–3 agencies and learn their AI roadmaps", desc: "Read agency AI strategies (DoD published its AI Strategy; HHS has a digital transformation plan; VA has an AI tech transfer program). Attend agency AI days and industry events. Contracting officers remember faces." },
                { step: "03", title: "Monitor Sources Sought and RFI responses", desc: "Agencies issue Sources Sought Notices 6–12 months before formal solicitations for major AI programs. Responding positions you as a known vendor and can influence requirements. See our guide on sources sought notices." },
                { step: "04", title: "Get on a vehicle — any vehicle", desc: "A GSA MAS Schedule takes 3–4 months and gives you market access immediately. While you pursue GWACs, the Schedule lets you compete on simplified acquisitions and BPAs without contract vehicle barriers." },
                { step: "05", title: "Build past performance with SBIR or a subcontract", desc: "Past performance on federal AI work is the single biggest advantage incumbents hold. Win one SBIR Phase I, or deliver as a sub on an AI task order, and you have the credential you need to compete as a prime." },
                { step: "06", title: "Track incumbent contracts and expiration dates", desc: "Every active federal AI contract has an expiration date. Identify the contracts held by incumbents in your target agencies and position for the recompete 18 months out. This is where your win probability is highest." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-stone-200 hover-lift bg-white animate-on-scroll">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                    <span className="text-sm font-black text-indigo-600">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Managing this pipeline — tracking opportunities, expiration dates, incumbent data,
              and agency relationships — is exactly what{" "}
              <Link href="/features/pipeline" className="text-indigo-600 hover:text-indigo-800 underline">
                CapturePilot&apos;s pipeline management
              </Link>{" "}
              is built for. You can set alerts for Sources Sought notices in your NAICS codes,
              track incumbent contract awards, and score your probability of win on each pursuit
              before you commit proposal resources.
            </p>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="The Long Game Advantage">
            The small businesses winning federal AI work consistently are not the ones with the
            best AI technology. They&apos;re the ones who built agency relationships before the RFP,
            got on the right vehicles early, and accumulated past performance through SBIRs and
            subcontracts. The technology is table stakes. The pipeline strategy is the
            differentiator.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white animate-on-scroll">
            <div className="text-center">
              <h3 className="text-2xl font-black mb-3">Ready to pursue federal AI work?</h3>
              <p className="text-stone-300 text-sm mb-6 max-w-lg mx-auto">
                CapturePilot monitors federal AI solicitations, tracks agency budgets, and surfaces
                the opportunities your business is most likely to win — before the competition
                even knows they exist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CHECK_URL}
                  className="bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-center gap-2"
                >
                  Check eligibility free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="border border-stone-600 text-white font-bold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors flex items-center justify-center gap-2"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-10 border-t border-stone-200 animate-on-scroll">
            <h3 className="text-xl font-black text-stone-900 mb-6">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/it-government-contracts", label: "IT Government Contracts: How Tech Companies Win Federal Work" },
                { href: "/blog/ota-contracts-guide", label: "OTA Contracts: How Other Transaction Authority Is Changing Defense" },
                { href: "/blog/sbir-sttr-grants-guide", label: "SBIR and STTR: How Small Businesses Win R&D Funding" },
                { href: "/blog/federal-spending-trends-2026", label: "Federal Spending Trends 2026: Where the Government Is Investing" },
                { href: "/blog/8a-sole-source-contracts", label: "8(a) Sole Source Contracts: The Fastest Path to Federal Revenue" },
                { href: "/blog/capture-management-process", label: "The Capture Management Process: How Winning Contractors Find Deals" },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="flex items-start gap-3 p-4 rounded-xl border border-stone-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                >
                  <ArrowRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0 group-hover:text-indigo-600 transition-colors" />
                  <span className="text-sm text-stone-700 group-hover:text-indigo-700 transition-colors font-medium">
                    {post.label}
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
