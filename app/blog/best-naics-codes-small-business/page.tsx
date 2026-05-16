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
  FileText,
  Clock,
  Award,
  BarChart3,
  Shield,
  Info,
  Layers,
  Code,
  Building2,
  Leaf,
  Wrench,
  FlaskConical,
  Briefcase,
  Search,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-naics-matters", label: "Why Your NAICS Code Controls What You Win" },
  { id: "how-we-ranked", label: "How We Ranked These Codes" },
  { id: "it-codes", label: "IT & Cybersecurity: The Codes Commanding the Most Dollars" },
  { id: "professional-services", label: "Professional Services: Management Consulting & R&D" },
  { id: "construction-facilities", label: "Construction & Facilities: Where Set-Aside Rates Are Richest" },
  { id: "environmental", label: "Environmental Services: Fastest-Growing Federal Category" },
  { id: "multiple-codes", label: "How Many NAICS Codes Should You Carry?" },
  { id: "finding-opportunities", label: "Finding Real Opportunities by NAICS Code" },
];

const NAICS_CODES = [
  {
    code: "541512",
    name: "Computer Systems Design Services",
    totalSpend: "$68.4B",
    eightAwards: "$4.8B",
    sizeStd: "$34M revenue",
    setAsideNote: "Strong 8(a), SDVOSB, WOSB set-aside activity",
    agencies: "DoD, VA, DHS, HHS, GSA",
    category: "IT",
  },
  {
    code: "541519",
    name: "Other Computer Related Services",
    totalSpend: "$22.1B",
    eightAwards: "$1.6B",
    sizeStd: "$34M revenue",
    setAsideNote: "#1 NAICS on GSA MAS Schedule",
    agencies: "GSA, DoD, DHS, VA",
    category: "IT",
  },
  {
    code: "541511",
    name: "Custom Computer Programming Services",
    totalSpend: "Growing",
    eightAwards: "—",
    sizeStd: "$34M revenue",
    setAsideNote: "High demand for AI & analytics",
    agencies: "DoD, USAF, Army, DHS",
    category: "IT",
  },
  {
    code: "541611",
    name: "Admin. Management Consulting",
    totalSpend: "$16.3B",
    eightAwards: "$2.9B",
    sizeStd: "$24.5M revenue",
    setAsideNote: "Third-highest 8(a) award volume",
    agencies: "DoD, DHS, HHS, GSA",
    category: "Pro Services",
  },
  {
    code: "541715",
    name: "R&D — Physical, Engineering & Life Sciences",
    totalSpend: "$31.2B",
    eightAwards: "—",
    sizeStd: "1,000 employees",
    setAsideNote: "Dominant SBIR/STTR code",
    agencies: "DoD, NIH, NASA, DOE",
    category: "R&D",
  },
  {
    code: "236220",
    name: "Commercial & Institutional Building Construction",
    totalSpend: "High",
    eightAwards: "—",
    sizeStd: "$45M revenue",
    setAsideNote: "Heavy SDVOSB, 8(a), HUBZone activity",
    agencies: "VA, DoD, GSA, Army Corps",
    category: "Construction",
  },
  {
    code: "561210",
    name: "Facilities Support Services",
    totalSpend: "$18.9B",
    eightAwards: "$3.2B",
    sizeStd: "$47M revenue",
    setAsideNote: "51% of contracts set aside for SB",
    agencies: "DoD, VA, DHS, GSA, DoE",
    category: "Facilities",
  },
  {
    code: "541330",
    name: "Engineering Services",
    totalSpend: "$31.8B",
    eightAwards: "—",
    sizeStd: "$25.5M revenue",
    setAsideNote: "Top DoD/VA engineering code",
    agencies: "Army, Navy, USAF, VA, Army Corps",
    category: "Engineering",
  },
  {
    code: "562910",
    name: "Remediation & Other Waste Mgmt Services",
    totalSpend: "Top-10 (FY2025)",
    eightAwards: "—",
    sizeStd: "See SBA.gov",
    setAsideNote: "Broke into top 10 in FY2025",
    agencies: "Army Corps, EPA, DoD, DOE",
    category: "Environmental",
  },
  {
    code: "541620",
    name: "Environmental Consulting Services",
    totalSpend: "Growing",
    eightAwards: "—",
    sizeStd: "See SBA.gov",
    setAsideNote: "Partners well with 562910",
    agencies: "EPA, Army Corps, DoD, DOE",
    category: "Environmental",
  },
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

function NaicsCard({
  code,
  name,
  totalSpend,
  eightAwards,
  sizeStd,
  setAsideNote,
  agencies,
  category,
  children,
}: {
  code: string;
  name: string;
  totalSpend: string;
  eightAwards: string;
  sizeStd: string;
  setAsideNote: string;
  agencies: string;
  category: string;
  children: React.ReactNode;
}) {
  const categoryColors: Record<string, string> = {
    IT: "bg-blue-50 text-blue-700 border-blue-200",
    "Pro Services": "bg-violet-50 text-violet-700 border-violet-200",
    "R&D": "bg-amber-50 text-amber-700 border-amber-200",
    Construction: "bg-stone-100 text-stone-700 border-stone-300",
    Facilities: "bg-sky-50 text-sky-700 border-sky-200",
    Engineering: "bg-indigo-50 text-indigo-700 border-indigo-200",
    Environmental: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden mb-10 animate-on-scroll hover-lift">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-stone-50 border-b border-stone-200">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg font-black text-stone-900">{code}</span>
          <span className="text-stone-500 text-sm font-medium">{name}</span>
        </div>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[category] ?? "bg-stone-100 text-stone-600 border-stone-200"}`}
        >
          {category}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-stone-100 border-b border-stone-200">
        {[
          { label: "Total Fed Spend", value: totalSpend },
          { label: "8(a) Awards", value: eightAwards },
          { label: "Size Standard", value: sizeStd },
          { label: "Key Agencies", value: agencies },
        ].map((item) => (
          <div key={item.label} className="bg-white px-4 py-3">
            <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-0.5">
              {item.label}
            </p>
            <p className="text-sm font-bold text-stone-800 leading-tight">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="px-6 py-5">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <p className="text-xs font-semibold text-emerald-700">{setAsideNote}</p>
        </div>
        <div className="text-sm text-stone-600 leading-relaxed space-y-3">{children}</div>
      </div>
    </div>
  );
}

export default function BestNaicsCodesPage() {
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
            <span className="text-stone-900 font-medium">Best NAICS Codes for Small Business</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            The 10 Best NAICS Codes for{" "}
            <span className="gradient-text">Small Business Government Contractors</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government spent{" "}
            <strong className="text-stone-700">$833.83 billion in FY2025</strong>, with{" "}
            <strong className="text-stone-700">$194 billion (23.8%) going to small businesses</strong>.
            Your NAICS code determines which slice of that you can legally compete for. Pick the right
            one and you tap into a reserve market. Pick the wrong one and you never see the best
            opportunities at all.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 16, 2026</span>
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
            id="why-naics-matters"
            number="01"
            title="Why Your NAICS Code Controls What You Win"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A NAICS code isn&apos;t just an administrative label. It&apos;s the mechanism federal
              agencies use to determine who can compete, who counts as &ldquo;small,&rdquo; and which
              set-aside pools a contract goes to. Get it wrong and you&apos;re invisible to the
              contracting officers who would otherwise be required by law to consider you.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Here&apos;s how NAICS codes actually affect your contracting outcomes:
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  title: "Size Standard Eligibility",
                  desc: "Each NAICS code carries its own size standard — either a revenue cap or employee count. If your revenue exceeds the standard for the code on a specific solicitation, you don't qualify as small. The code on the solicitation controls, not your primary code in SAM.gov.",
                  color: "border-blue-400",
                  icon: Target,
                },
                {
                  title: "Set-Aside Pool Access",
                  desc: "When an agency posts a set-aside contract, it's restricted to small businesses that legitimately perform work under that NAICS code. You can register multiple codes in SAM.gov, but you need a defensible basis — real past performance or capability — for each one you claim.",
                  color: "border-emerald-400",
                  icon: Shield,
                },
                {
                  title: "Opportunity Discovery",
                  desc: "SAM.gov, USASpending.gov, and every contract tracking platform indexes opportunities by NAICS code. If you're not registered with the right code, you won't surface in the searches contracting officers run when looking for competitive sources.",
                  color: "border-violet-400",
                  icon: Search,
                },
                {
                  title: "IDIQ and GWAC Vehicle Access",
                  desc: "Multiple-award contract vehicles like OASIS+, Alliant 3, SEWP VI, and hundreds of agency-specific IDIQs are organized by NAICS code. Getting on the right vehicle often matters more than individual bid strategies — vehicles deliver a steady stream of task orders over years.",
                  color: "border-amber-400",
                  icon: Layers,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border-l-4 bg-stone-50 border border-stone-100 ${item.color} animate-on-scroll`}
                >
                  <item.icon className="w-5 h-5 text-stone-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$833.83B", label: "Total federal contracts, FY2025", icon: DollarSign },
                { stat: "$194B", label: "Awarded to small businesses", icon: Award },
                { stat: "23.8%", label: "Small business share of total spend", icon: BarChart3 },
                { stat: "76,270", label: "Small businesses that won contracts", icon: Target },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Your{" "}
              <Link
                href="/blog/naics-codes-explained"
                className="text-blue-600 hover:underline font-medium"
              >
                NAICS code registration in SAM.gov
              </Link>{" "}
              is your entry ticket to those 76,270 winners. The codes below represent the categories
              where that ticket opens the most doors — and where federal agencies consistently direct
              set-aside dollars toward small businesses.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="how-we-ranked"
            number="02"
            title="How We Ranked These Codes"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              &ldquo;Best&rdquo; isn&apos;t just &ldquo;biggest.&rdquo; A NAICS code that generates
              $68 billion in federal spending is useless to you if large defense primes absorb 90% of
              it. We weighted four factors:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 font-bold rounded-tl-xl">Factor</th>
                    <th className="text-left px-4 py-3 font-bold">What We Looked At</th>
                    <th className="text-left px-4 py-3 font-bold rounded-tr-xl">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      factor: "Total Federal Spend",
                      detail: "FY2024–FY2025 contract dollars by NAICS code (USASpending.gov)",
                      why: "More dollars means more opportunities. Even a 1% share of a $20B code is a $200M market.",
                    },
                    {
                      factor: "Small Business Set-Aside Rate",
                      detail: "Percentage of awards that went to small businesses",
                      why: "A code with 50%+ set-aside rates is effectively a protected market for you.",
                    },
                    {
                      factor: "Accessibility for New Entrants",
                      detail: "Past performance requirements, bonding, certifications needed to compete",
                      why: "Some codes require 10 years of references. Others reward fresh ideas with SBIR grants.",
                    },
                    {
                      factor: "IDIQ Vehicle Presence",
                      detail: "Whether the code anchors major multi-award vehicles with long ordering periods",
                      why: "Getting on a vehicle beats chasing one-off RFPs every time.",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="px-4 py-3 font-bold text-stone-900 border-b border-stone-100">
                        {row.factor}
                      </td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                        {row.detail}
                      </td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One more principle: a NAICS code should describe work you actually do. Registering
              for high-volume codes you can&apos;t deliver is a compliance risk, not a strategy.
              Agencies can challenge your size standard and NAICS code claims — and if your
              capability statement doesn&apos;t match your registered codes,{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-600 hover:underline font-medium"
              >
                you&apos;ll struggle to get past the first screen
              </Link>
              .
            </p>

            <Callout icon={Lightbulb} color="amber" title="SBA&apos;s Proposed Size Standard Increases (2025)">
              On August 22, 2025, the SBA proposed increasing revenue-based size standards across
              263 industries. Engineering Services (541330) would increase from $25.5M to $29M. These
              proposed changes would qualify thousands of additional companies as &ldquo;small&rdquo;
              — if finalized. Check{" "}
              <strong>SBA.gov/size-standards</strong> for current effective standards before any bid.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="it-codes"
            number="03"
            title="IT &amp; Cybersecurity: The Codes Commanding the Most Dollars"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Three NAICS codes in the 5415X range collectively represent the largest pool of
              federal IT spending available to small businesses. If you run an IT firm, cybersecurity
              shop, software company, or digital services business, these are your entry points.
              The government&apos;s ongoing push for cloud migration, Zero Trust architecture, and
              AI integration isn&apos;t slowing down — FY2025 IT set-aside awards reached record
              levels.
            </p>

            <NaicsCard {...NAICS_CODES[0]}>
              <p>
                NAICS 541512 is the single largest NAICS code by federal spending at{" "}
                <strong>$68.4 billion</strong> in total federal contract dollars. It covers IT system
                design, integration, network architecture, and managed IT services — the bread and
                butter of the federal IT market.
              </p>
              <p>
                Of that $68.4B, <strong>$4.8B flowed through 8(a) set-asides alone</strong> — the
                highest 8(a) award volume of any NAICS code. DoD, VA, and DHS drive the bulk of
                demand, with agencies like DISA, CISA, and the Army&apos;s PEO-EIS posting
                billions in IT design requirements each year.
              </p>
              <p>
                Winning in 541512 requires more than SAM registration. You need to be on the right
                vehicles — SEWP VI, CIO-SP4, OASIS+ — or demonstrate prime contractor potential
                through subcontracting. Use{" "}
                <Link
                  href="/features/matching"
                  className="text-blue-600 hover:underline font-medium"
                >
                  CapturePilot&apos;s NAICS matching
                </Link>{" "}
                to surface solicitations under this code before they hit full competition.
              </p>
            </NaicsCard>

            <NaicsCard {...NAICS_CODES[1]}>
              <p>
                541519 surpassed all other IT codes on the GSA Multiple Award Schedule (MAS) in
                FY2025 by task order volume. &ldquo;Other Computer Related Services&rdquo; is a
                deliberate catch-all — it covers cybersecurity operations, cloud support, IT
                helpdesk, infrastructure management, and services that don&apos;t fit neatly into
                541511 or 541512.
              </p>
              <p>
                That breadth is strategic. Many firms register under both 541512 and 541519 because
                task orders within the same IDIQ vehicle can be issued under either code. At{" "}
                <strong>$22.1 billion in federal spend</strong> and the #1 position on GSA MAS, this
                code is a volume play — lots of small task orders that add up fast.
              </p>
              <p>
                Cybersecurity shops in particular have benefited from CISA&apos;s growing budget
                and DHS&apos;s Zero Trust mandates. If your firm touches threat monitoring,
                vulnerability assessments, or incident response, 541519 belongs in your SAM
                registration.
              </p>
            </NaicsCard>

            <NaicsCard {...NAICS_CODES[2]}>
              <p>
                Custom software development is having a moment in federal contracting. 541511 covers
                purpose-built applications, AI/ML model development, analytics platforms, and digital
                modernization work — exactly what agencies are prioritizing under the Federal Data
                Strategy and the Executive Order on AI governance.
              </p>
              <p>
                Award activity under 541511 is growing fastest in Army, Air Force, and DHS
                acquisitions. Small businesses with strong software engineering teams and demonstrated
                DevSecOps capability are winning contracts that would have gone to large primes five
                years ago. The key differentiator: specificity. Agencies want firms that can build
                the thing, not just advise on it.
              </p>
              <p>
                Pair 541511 with a strong{" "}
                <Link
                  href="/features/capability-statement"
                  className="text-blue-600 hover:underline font-medium"
                >
                  capability statement
                </Link>{" "}
                that leads with specific software delivery examples — named systems, tech stacks,
                delivery timelines.
              </p>
            </NaicsCard>

            {/* Mid-article CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 my-10 text-white animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="font-black text-xl mb-1">Check your eligibility before you bid</p>
                  <p className="text-blue-100 text-sm">
                    CapturePilot&apos;s Quick Checker verifies your NAICS code, size standard, and
                    certifications against a specific opportunity in under 60 seconds.
                  </p>
                </div>
                <a
                  href={CHECK_URL}
                  className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  Check eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="professional-services"
            number="04"
            title="Professional Services: Management Consulting &amp; R&amp;D"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              If your business is built on intellectual capital — consulting, strategy, research,
              analysis — two NAICS codes punch well above their weight for small businesses.
              541611 is the 8(a) program&apos;s favorite professional services code. 541715 is
              how you get paid to invent things.
            </p>

            <NaicsCard {...NAICS_CODES[3]}>
              <p>
                541611 generated <strong>$16.3 billion in federal contract awards</strong> with
                <strong> $2.9 billion specifically awarded through 8(a) set-asides</strong> — the
                third-highest 8(a) award volume of any NAICS code. Agencies use this code for
                organizational consulting, change management, program management support, and
                administrative advisory work.
              </p>
              <p>
                The size standard of $24.5M revenue means even mid-sized consulting firms qualify.
                But competition is fierce — there are more management consultants registered on
                SAM.gov than almost any other category. Differentiation requires either a
                certification advantage (8(a), SDVOSB, WOSB) or deep domain expertise in a
                specific agency&apos;s mission area.
              </p>
              <p>
                Best play for new entrants: target{" "}
                <Link
                  href="/blog/subcontracting-government-contracts"
                  className="text-blue-600 hover:underline font-medium"
                >
                  subcontracting opportunities
                </Link>{" "}
                under 8(a) prime contractors, build two to three strong past performance references,
                then go prime. That path to $1M in prime revenue takes 18–24 months with a focused
                strategy — versus years of cold outreach.
              </p>
            </NaicsCard>

            <NaicsCard {...NAICS_CODES[4]}>
              <p>
                541715 is the research and development code for physical, engineering, and life
                sciences — and it&apos;s structured completely differently from the other codes on
                this list. At <strong>$31.2 billion in total federal spending</strong>, it ranks
                third overall by spend. But the size standard is <strong>1,000 employees</strong>,
                not a revenue cap — which means most small businesses qualify comfortably.
              </p>
              <p>
                The most important program under this code: the{" "}
                <strong>Small Business Innovation Research (SBIR)</strong> and{" "}
                <strong>Small Technology Transfer (STTR)</strong> programs. SBIR Phase I awards
                run roughly $275K–$320K. Phase II awards run up to $2 million. DoD, NIH, NASA,
                and DOE collectively fund billions in SBIR/STTR annually — and the programs are
                <em> designed</em> for small businesses. No past performance required for Phase I.
              </p>
              <p>
                If your company does any R&D-adjacent work — prototype development, scientific
                testing, engineering analysis — 541715 opens the SBIR door. Use{" "}
                <Link
                  href="/features/intelligence"
                  className="text-blue-600 hover:underline font-medium"
                >
                  CapturePilot&apos;s market intelligence
                </Link>{" "}
                to identify agencies actively soliciting under this code before solicitations close.
              </p>
            </NaicsCard>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="construction-facilities"
            number="05"
            title="Construction &amp; Facilities: Where Set-Aside Rates Are Richest"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Construction and facilities management sit in a special position in federal contracting.
              Agencies like VA, DoD, and the Army Corps of Engineers have{" "}
              <strong>explicit missions</strong> to build and maintain physical infrastructure —
              and they have strong legal incentives to push that work to small businesses,
              veteran-owned firms, and HUBZone businesses. The set-aside rates in this sector
              are among the highest in all of federal contracting.
            </p>

            <NaicsCard {...NAICS_CODES[6]}>
              <p>
                561210 carries the most favorable set-aside dynamics of any code on this list:{" "}
                <strong>51% of Facilities Support Services contracts are set aside for small
                businesses</strong> — meaning over half the market is legally protected for
                you. Total federal spend is <strong>$18.9 billion</strong>, with{" "}
                <strong>$3.2 billion flowing through 8(a) set-asides</strong>.
              </p>
              <p>
                This code covers base operations support, facilities management, custodial
                operations, grounds maintenance, and O&amp;M contracts. DoD operates hundreds of
                military installations that require full-spectrum facilities support. VA runs 170+
                medical centers, each with substantial O&amp;M needs. GSA manages federal buildings
                nationwide.
              </p>
              <p>
                The $47M size standard means established facilities firms can still qualify.
                SDVOSBs and 8(a) firms have an outsized advantage here — agencies actively seek
                certified firms for base operations contracts.{" "}
                <Link
                  href="/features/quick-checker"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Check your set-aside eligibility
                </Link>{" "}
                before pursuing any 561210 opportunity to confirm which programs apply.
              </p>
            </NaicsCard>

            <NaicsCard {...NAICS_CODES[5]}>
              <p>
                Federal construction is a high-dollar, high-set-aside market that many small
                businesses overlook because of the bonding requirements and Davis-Bacon Act
                compliance overhead. That barrier is exactly what makes it worth pursuing — it
                filters out under-capitalized competitors.
              </p>
              <p>
                The VA and DoD are the largest federal construction buyers, spending billions
                annually on hospital renovations, barracks construction, airfield upgrades, and
                base facility improvements. Both agencies have statutory goals for awarding
                construction to veteran-owned firms (SDVOSBs and VOSBs) — making this one of
                the most SDVOSB-friendly categories in the federal market.
              </p>
              <p>
                The $45M size standard is generous. With a valid contractor&apos;s license,
                performance bond capability, and a{" "}
                <Link
                  href="/blog/past-performance-government-contracts"
                  className="text-blue-600 hover:underline font-medium"
                >
                  solid past performance record
                </Link>
                , a small construction firm can compete effectively for $1M–$15M projects set
                aside under this code. The{" "}
                <Link
                  href="/blog/hubzone-program-guide"
                  className="text-blue-600 hover:underline font-medium"
                >
                  HUBZone preference
                </Link>{" "}
                adds another 10% price evaluation credit for construction work in qualified zones.
              </p>
              <p className="text-stone-500 text-xs">
                Key compliance note: Davis-Bacon Act prevailing wages apply to most federal
                construction contracts over $2,000. Budget accordingly — wage rates vary by
                county and trade.
              </p>
            </NaicsCard>

            <NaicsCard {...NAICS_CODES[7]}>
              <p>
                Engineering Services is the technical counterpart to construction — it covers
                design, project management, surveying, and engineering analysis that precedes or
                accompanies construction work. At <strong>$31.8 billion in federal spend</strong>,
                it&apos;s the second-largest non-IT code on this list.
              </p>
              <p>
                DoD is the dominant buyer, using 541330 for base master planning, structural
                engineering, environmental engineering, and program support. The Army Corps of
                Engineers, Naval Facilities Engineering Systems Command (NAVFAC), and Air Force
                Civil Engineer Center collectively drive hundreds of millions in 541330 awards
                every year — many of them set aside.
              </p>
              <p>
                The current size standard of <strong>$25.5M revenue</strong> (proposed to increase
                to $29M) keeps this code accessible. PE licenses, LEED certifications, and security
                clearances are significant differentiators. Small engineering firms that hold
                security clearances and can operate on restricted installations often command
                premium rates under this code.
              </p>
            </NaicsCard>

            {/* Second CTA */}
            <div className="rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 my-10 animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="font-black text-xl text-stone-900 mb-1">
                    See which NAICS codes match your active opportunities
                  </p>
                  <p className="text-stone-500 text-sm">
                    CapturePilot surfaces real federal opportunities matched to your NAICS codes,
                    certifications, and agency targets — updated daily.
                  </p>
                </div>
                <a
                  href={SIGNUP_URL}
                  className="flex-shrink-0 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-700 transition-colors flex items-center gap-2"
                >
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="environmental"
            number="06"
            title="Environmental Services: The Fastest-Growing Federal Category"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Environmental services broke into the top 10 NAICS codes for small business awards
              in FY2025 for the first time. Infrastructure restoration funding, DoD FUDS (Formerly
              Used Defense Sites) cleanup programs, and EPA climate resilience initiatives are
              driving demand that didn&apos;t exist at this scale three years ago. If your firm
              is in environmental work, this is the best opportunity window in a decade.
            </p>

            <NaicsCard {...NAICS_CODES[8]}>
              <p>
                562910 covers hazardous waste cleanup, brownfield remediation, contaminated site
                restoration, and environmental monitoring. The code{" "}
                <strong>broke into the federal top-10 NAICS rankings for the first time in
                FY2025</strong>, driven by Army Corps of Engineers FUDS cleanup contracts, EPA
                Superfund expenditures, and DoD environmental compliance programs.
              </p>
              <p>
                Climate resilience funding has been the accelerant. Federal agencies are under
                increasing pressure to address legacy contamination and demonstrate environmental
                stewardship at military installations. That translates to remediation task orders
                that favor small businesses — particularly HUBZone firms located near the
                contaminated sites themselves.
              </p>
              <p>
                Firms new to this code face steep barriers: EPA credentials, specialized equipment,
                and site-specific experience are effectively required to win. But those barriers
                create a defensible market. Once you have two or three performance references under
                562910, you&apos;re in a small pool of qualified small business competitors.
              </p>
            </NaicsCard>

            <NaicsCard {...NAICS_CODES[9]}>
              <p>
                Where 562910 covers the remediation execution, 541620 covers the consulting work
                that precedes it: Phase I and Phase II environmental site assessments, NEPA
                reviews, environmental impact statements, hazardous materials surveys, and
                regulatory compliance consulting.
              </p>
              <p>
                Federal agencies often need environmental consulting before they can move on a
                construction or remediation project. That means 541620 work frequently comes
                earlier in the acquisition cycle — before the big dollars are committed — and
                positions your firm as the logical next contractor for the remediation itself.
              </p>
              <p>
                Register for both 541620 and 562910 if your firm can credibly deliver both.
                Agencies like bundling assessment and remediation under the same contractor
                to reduce handoff risk and program management overhead.
              </p>
            </NaicsCard>

            <Callout icon={TrendingUp} color="emerald" title="Environmental Services: FY2025 Trend">
              562910 entered the federal top-10 small business award codes in FY2025 — the first
              time an environmental remediation code has ranked at that level. Climate funding,
              DoD FUDS programs, and EPA Superfund activity drove the surge. Analysts expect the
              category to remain elevated through at least FY2027. If you&apos;re considering
              entering this space, the entry cost (certifications, equipment, references) is
              highest now — but so is the payoff.
            </Callout>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="multiple-codes"
            number="07"
            title="How Many NAICS Codes Should You Carry?"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov lets you register as many NAICS codes as you want. The real question is how
              many you should — and the answer is more strategic than you&apos;d expect.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Primary NAICS Code: One, Chosen Carefully",
                  body: "Your primary code should describe what you do most and best. It appears first on your SAM registration, it's what contracting officers see when they pull your profile, and it anchors your capability statement narrative. Don't pick a primary code because it has high spending — pick it because it describes your actual core business.",
                  color: "bg-blue-600",
                },
                {
                  step: "02",
                  title: "Secondary Codes: Adjacent Capabilities Only",
                  body: "Add secondary codes for work you can genuinely deliver. If you're a 541512 IT integrator that also does project management consulting, adding 541611 is defensible. Adding 236220 commercial construction because it has high spending — and you've never built anything — is a compliance liability. The SBA can challenge your NAICS code eligibility on a specific solicitation.",
                  color: "bg-emerald-600",
                },
                {
                  step: "03",
                  title: "Size Standard: Recalculated Per Solicitation",
                  body: "Your size standard is evaluated against the NAICS code listed on each specific solicitation — not your primary code. If a contract is posted under 541330 ($25.5M revenue), you're measured against that threshold, even if your primary code is 541512 ($34M). This means your size status can vary by code — know your revenue position against every code you compete under.",
                  color: "bg-violet-600",
                },
                {
                  step: "04",
                  title: "Past Performance: Build Under Codes You'll Use Most",
                  body: "Your strongest strategic asset is past performance under specific NAICS codes. Every subcontract you perform, every task order you complete — document it. CPARS records, contractor performance assessments, and reference letters all strengthen your position when a source selection board evaluates whether you can do the work.",
                  color: "bg-amber-600",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <div
                    className={`w-10 h-10 ${step.color} text-white rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0`}
                  >
                    {step.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-2">{step.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Don&apos;t Stretch Your NAICS Registrations">
              Registering dozens of NAICS codes signals to a savvy contracting officer that you&apos;re
              a registration-spammer, not a specialized contractor. Focus your SAM profile on 3–6
              codes that you can genuinely defend with past performance and a credible capability
              statement. A tight, credible profile beats a broad, hollow one every time.{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-600 hover:underline font-medium"
              >
                Build a capability statement
              </Link>{" "}
              that maps directly to your registered codes.
            </Callout>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="finding-opportunities"
            number="08"
            title="Finding Real Opportunities by NAICS Code"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Knowing the right NAICS codes is step one. Step two is turning that knowledge into
              a pipeline of actual opportunities before they close. Here&apos;s the practical
              workflow:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 font-bold rounded-tl-xl">Tool</th>
                    <th className="text-left px-4 py-3 font-bold">What You Can Do</th>
                    <th className="text-left px-4 py-3 font-bold rounded-tr-xl">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      tool: "SAM.gov Advanced Search",
                      action: "Filter by NAICS code, set-aside type, award amount, agency",
                      use: "Daily opportunity discovery for active solicitations",
                    },
                    {
                      tool: "USASpending.gov",
                      action: "Analyze historical awards by NAICS, agency, incumbent, contract type",
                      use: "Market research before deciding to pursue a code",
                    },
                    {
                      tool: "CapturePilot Matching",
                      action: "Auto-match opportunities to your NAICS codes, certs, and agency targets",
                      use: "Save 4–6 hours/week vs. manual SAM searches",
                    },
                    {
                      tool: "CapturePilot Quick Checker",
                      action: "Verify eligibility for a specific opportunity in under 60 seconds",
                      use: "Triage before investing proposal resources",
                    },
                    {
                      tool: "Beta.SAM.gov / FPDS",
                      action: "Track award history, find incumbents, identify agency buyers by name",
                      use: "Pre-bid research on specific contracting officers and programs",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-bold text-stone-900 border-b border-stone-100">
                        {row.tool}
                      </td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                        {row.action}
                      </td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                        {row.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The NAICS code is your filter — but the real competitive work happens in understanding{" "}
              <em>who</em> is buying and <em>why</em>. Use{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-600 hover:underline font-medium"
              >
                market intelligence tools
              </Link>{" "}
              to identify which agencies have historically spent the most under your target codes,
              which contract vehicles they prefer, and which incumbents are coming up for recompete.
              That context turns a NAICS code from a registration checkbox into an actual pipeline
              strategy.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For most small businesses, the highest-return activity is identifying the 3–5 agencies
              most active under their primary NAICS code and building targeted relationships within
              those agencies. One well-positioned{" "}
              <Link
                href="/blog/sources-sought-notice"
                className="text-blue-600 hover:underline font-medium"
              >
                response to a Sources Sought notice
              </Link>{" "}
              can shape an entire solicitation in your favor before the RFP is even posted.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              If you&apos;re unsure which certifications work best with your target NAICS codes,
              start with the{" "}
              <Link
                href="/features/quick-checker"
                className="text-blue-600 hover:underline font-medium"
              >
                Quick Checker
              </Link>{" "}
              — it maps your profile against current set-aside opportunities and tells you exactly
              which programs apply to what you&apos;re chasing.
            </p>

            {/* Summary table — quick reference */}
            <h3 className="text-xl font-black text-stone-900 mb-4">
              Quick Reference: All 10 NAICS Codes at a Glance
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-3 py-3 font-bold rounded-tl-xl">Code</th>
                    <th className="text-left px-3 py-3 font-bold">Name</th>
                    <th className="text-left px-3 py-3 font-bold">Total Fed Spend</th>
                    <th className="text-left px-3 py-3 font-bold">Size Standard</th>
                    <th className="text-left px-3 py-3 font-bold rounded-tr-xl">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {NAICS_CODES.map((c, i) => (
                    <tr key={c.code} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-3 py-3 font-mono font-bold text-blue-700 border-b border-stone-100">
                        {c.code}
                      </td>
                      <td className="px-3 py-3 text-stone-700 font-medium border-b border-stone-100">
                        {c.name}
                      </td>
                      <td className="px-3 py-3 text-stone-600 border-b border-stone-100">
                        {c.totalSpend}
                      </td>
                      <td className="px-3 py-3 text-stone-600 border-b border-stone-100">
                        {c.sizeStd}
                      </td>
                      <td className="px-3 py-3 text-stone-500 text-xs border-b border-stone-100">
                        {c.setAsideNote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={Info} color="sky" title="Size Standards Change — Verify Before Every Bid">
              The SBA updates size standards periodically. The numbers in this guide reflect
              standards in effect as of May 2026. Before you self-certify as &ldquo;small&rdquo;
              on any solicitation, confirm the current standard at{" "}
              <strong>SBA.gov/size-standards</strong>. A wrong self-certification on a federal
              proposal is a False Claims Act exposure — not an administrative error.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              One final point:{" "}
              <Link
                href="/blog/federal-contracting-certifications"
                className="text-blue-600 hover:underline font-medium"
              >
                certifications amplify every code on this list
              </Link>
              . A 541512 IT firm without any certification competes in the full small business
              pool — typically 10–25 competitors per award. The same firm with an 8(a)
              certification can pursue sole-source awards up to $5.5M with no competition at all.
              The NAICS code determines what market you&apos;re in. The certification determines
              whether you compete or get awarded directly.
            </p>
          </div>

          {/* Final CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 mt-12 text-white animate-on-scroll">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 rounded-full px-3 py-1 text-xs font-medium mb-4">
                <Zap className="w-3 h-3" /> Free — No credit card required
              </div>
              <h3 className="text-2xl font-black mb-3">
                Stop guessing which opportunities match your NAICS codes
              </h3>
              <p className="text-stone-300 mb-6">
                CapturePilot matches federal opportunities to your exact NAICS codes, certifications,
                and agency targets — and flags the ones most likely to be set aside for your
                profile. Start your 30-day free trial and build a pipeline in your first session.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-center gap-2"
                >
                  Start 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="border border-white/30 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  Book a strategy call
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
