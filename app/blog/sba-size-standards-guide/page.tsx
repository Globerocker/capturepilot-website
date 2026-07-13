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
  Users,
  Building2,
  Zap,
  XCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-size-matters", label: "Why Size Standards Are the Gateway to $183B" },
  { id: "two-types", label: "The Two Types: Revenue vs. Employees" },
  { id: "how-measured", label: "How Revenue and Employees Are Counted" },
  { id: "affiliate-rule", label: "The Affiliate Rule: When Partners' Size Counts" },
  { id: "by-industry", label: "Size Standards Across Key Industries" },
  { id: "certify-and-recertify", label: "How to Self-Certify and When to Recertify" },
  { id: "proposed-increases", label: "The 2025 Proposed Rule: Standards Are Rising" },
  { id: "misrepresentation", label: "What Misrepresentation Actually Costs You" },
  { id: "strategy", label: "Using Size Standards Strategically" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "rose";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    rose: "bg-rose-50 border-rose-200 text-rose-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    rose: "text-rose-600",
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

export default function SbaSizeStandardsGuidePage() {
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
            <span className="text-stone-900 font-medium">SBA Size Standards Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Award className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SBA Size Standards:{" "}
            <span className="gradient-text">The Complete 2026 Guide to Qualifying as a Small Business</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government reserved{" "}
            <strong className="text-stone-700">$183 billion for small businesses in FY2024</strong>
            &mdash;but only if you qualify as small under your NAICS code. SBA size standards are not
            one-size-fits-all. They vary by industry, they count affiliates, and they have traps that
            have tripped up contractors far more experienced than you. This guide explains exactly
            how they work.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 13, 2026</span>
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
            id="why-size-matters"
            number="01"
            title="Why Size Standards Are the Gateway to $183 Billion"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Before a contracting officer can set a contract aside for small businesses, before you
              can claim an 8(a), WOSB, SDVOSB, or HUBZone set-aside, before any of the programs
              designed to help small businesses work, one question has to be answered first: does
              your company qualify as small?
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA answers that question with size standards — specific thresholds, set per NAICS
              code, that define whether you are legally a &ldquo;small business&rdquo; for federal
              contracting purposes. Cross your threshold and you lose access to the set-aside market
              entirely, regardless of how long you&apos;ve been in business or how many certifications
              you hold. Stay under it and you compete in a pool of peers rather than against Boeing
              and Lockheed.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The stakes are significant. In FY2024, the federal government awarded $183 billion to
              small businesses — 28.8% of all prime contracting dollars. That pool is only open to
              companies that qualify. The size standards are the door, and you need to know whether
              you&apos;re standing on the right side of it.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$183B", label: "Awarded to small businesses FY2024", icon: DollarSign },
                { stat: "28.8%", label: "Share of all federal contracting", icon: BarChart3 },
                { stat: "~1,000", label: "Unique NAICS codes with their own standard", icon: Target },
                { stat: "263", label: "Standards proposed for increase in 2025", icon: TrendingUp },
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
              Size standards also matter for the certifications themselves. Being &ldquo;small&rdquo; is a
              prerequisite for every SBA certification — 8(a), WOSB, SDVOSB, HUBZone, and VOSB.
              Lose your small business status and you lose them all, even mid-contract in some
              cases. That makes understanding your size standard one of the most consequential things
              you can do in government contracting.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="Size Standards Apply Contract by Contract">
            Your size is determined at the time you submit your offer, measured against the NAICS
            code the contracting officer assigned to the solicitation. You are not permanently
            &ldquo;small&rdquo; or permanently &ldquo;large&rdquo; — it depends on the specific code for each
            opportunity. A company can be small under one NAICS code and large under another.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="two-types"
            number="02"
            title="The Two Types: Revenue vs. Employees"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Every NAICS code in the SBA&apos;s table has exactly one type of size standard — either
              based on annual receipts (revenue) or number of employees. Not both. Your industry
              determines which measurement applies to you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Revenue-Based Standards</h3>
                </div>
                <p className="text-sm text-blue-800 mb-3">
                  Applies to most service industries, retail, construction, and professional services.
                </p>
                <ul className="space-y-2">
                  {[
                    "Measured in average annual receipts",
                    "Averaged over your latest 5 complete fiscal years",
                    "Includes all revenue sources, not just federal",
                    "Thresholds range from ~$8M to $47M+ depending on industry",
                    "SBA proposed increasing 259 receipts-based standards in Aug 2025",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-900">Employee-Based Standards</h3>
                </div>
                <p className="text-sm text-emerald-800 mb-3">
                  Applies to manufacturing, mining, wholesale trade, and some utilities.
                </p>
                <ul className="space-y-2">
                  {[
                    "Measured in average number of employees",
                    "Averaged over your latest 24 calendar months",
                    "Counts all employees regardless of hours worked",
                    "Includes part-time and temporary workers",
                    "Thresholds typically range from 100 to 1,500 employees",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The type of standard matters because the measurement periods are different. Revenue is
              averaged over five years — which smooths out a good year or a bad year. Employees are
              averaged over two years — which responds faster to headcount changes. A manufacturing
              company that downsized significantly 18 months ago may already have a favorable
              employee count for size purposes. A services firm that had one exceptional revenue year
              three years ago is still carrying that into its average.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The SBA publishes its complete Table of Small Business Size Standards as a free
              download at sba.gov. It&apos;s updated periodically — always verify you&apos;re using the
              current version. The SBA also provides an online Size Standards Tool at
              sba.gov/size-standards where you can look up your specific NAICS code.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="how-measured"
            number="03"
            title="How Revenue and Employees Are Actually Counted"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The definitions matter because they differ from how you might naturally count revenue
              or employees in your own accounting. The SBA&apos;s rules are specific.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Counting Annual Receipts</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              &ldquo;Annual receipts&rdquo; means total income plus cost of goods sold, as reported on federal
              tax returns. This is your gross revenue — not net income, not operating income, not
              revenue minus subcontractor costs. If your firm passes $10 million through to
              subcontractors, that $10 million still counts in your receipts figure.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The measurement window is your latest five complete fiscal years. If you&apos;ve been in
              business fewer than five years, the SBA uses the average over your years of existence.
              If your business is less than one year old, use the average for the period you&apos;ve been
              in operation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Tax returns are the source of truth. Not your accounting software, not your QuickBooks
              P&amp;L. The figures on your filed federal tax returns determine your average annual
              receipts.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Counting Employees</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Employee count is the average number of employees per pay period over your latest 24
              calendar months. Anyone on the payroll counts as one employee, regardless of how many
              hours they work. A part-time employee who works four hours a week counts the same as a
              full-time employee working 50 hours.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Temporary employees — people placed by staffing agencies — count as employees of the
              company they perform work for, not the staffing agency. Contractors and 1099 workers
              generally do not count. This matters enormously for manufacturing firms that use agency
              temps to manage peak production.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-900 border border-stone-200">Measure</th>
                    <th className="text-left p-3 font-bold text-stone-900 border border-stone-200">What Counts</th>
                    <th className="text-left p-3 font-bold text-stone-900 border border-stone-200">Lookback Period</th>
                    <th className="text-left p-3 font-bold text-stone-900 border border-stone-200">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      measure: "Annual Receipts",
                      counts: "Total income + COGS per federal tax return",
                      period: "Latest 5 complete fiscal years",
                      source: "Filed federal tax returns",
                    },
                    {
                      measure: "Employees",
                      counts: "All W-2 employees (full-time, part-time, seasonal, temp)",
                      period: "Latest 24 calendar months",
                      source: "Payroll records",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 font-medium text-stone-900">{row.measure}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.counts}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.period}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={Lightbulb} color="amber" title="New Company? Use an Average of What You Have">
              If your company has been operating for less than five years, SBA averages only the
              years you&apos;ve been in business. A two-year-old company might clear a receipts-based
              threshold easily in its early growth years — but check each time you bid, because that
              average grows as you add more fiscal years.
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="my-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Not sure if you qualify as small?</h3>
                <p className="text-blue-100 text-sm">
                  CapturePilot&apos;s Quick Checker verifies your small business status, certifications,
                  and SAM registration in under 60 seconds. Free, no account required.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="affiliate-rule"
            number="04"
            title="The Affiliate Rule: When Your Partners' Size Counts Too"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              This is where many contractors get surprised. The SBA does not just look at your
              company&apos;s revenue and employees — it looks at your <em>affiliated</em> companies too.
              If your revenues alone are $5 million but your parent company does $200 million, you
              are not a small business.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The SBA defines affiliation broadly. Two businesses are affiliated when one controls
              or has the power to control the other, or when a third party controls or has the power
              to control both. &ldquo;Control&rdquo; can mean majority stock ownership, but it can also mean
              minority ownership with board seats, contractual rights, or economic dependence. The
              SBA looks at the totality of circumstances.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Common Affiliation Triggers</h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Common ownership",
                  desc: "Two companies with the same majority owner are affiliated with each other. Even minority ownership can create affiliation if it comes with control rights.",
                  icon: Building2,
                  color: "amber",
                },
                {
                  title: "Common management",
                  desc: "If the same individual manages two companies — as CEO of both, for example — those companies may be affiliated regardless of ownership structure.",
                  icon: Users,
                  color: "amber",
                },
                {
                  title: "Identity of interest",
                  desc: "Close family members or individuals with longstanding business relationships who share economic interests may be treated as having identity of interest, making their companies affiliated.",
                  icon: Shield,
                  color: "amber",
                },
                {
                  title: "Economic dependence",
                  desc: "If your company receives 70% or more of its revenue from a single other business, the SBA may find you economically dependent on that business — and therefore affiliated.",
                  icon: DollarSign,
                  color: "rose",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200 animate-on-scroll"
                >
                  <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color === "rose" ? "text-rose-500" : "text-amber-500"}`} />
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-stone-900 mb-4">The Ostensible Subcontractor Rule</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              There is a specific affiliation trap for small business prime contractors using large
              subcontractors: the ostensible subcontractor rule. Under 13 C.F.R. § 121.103(h), a
              subcontractor can be treated as affiliated with the prime contractor if the sub is
              performing the primary and vital requirements of the contract, or if the prime is
              unusually reliant on the sub.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              This rule exists to prevent large companies from hiding behind a small business shell.
              But it catches legitimate small businesses too — particularly in{" "}
              <Link href="/blog/subcontracting-government-contracts" className="text-blue-600 hover:underline">
                subcontracting arrangements
              </Link>{" "}
              and{" "}
              <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline">
                teaming agreements
              </Link>{" "}
              where the prime genuinely needs a large business&apos;s capabilities. If your subcontractor
              is performing the &ldquo;primary and vital&rdquo; work under the contract, expect a size protest
              to scrutinize that relationship.
            </p>

            <Callout icon={AlertTriangle} color="rose" title="Affiliation Can Sink a Contract Award After the Fact">
              The SBA Area Office can rule on size at any point during source selection, and a
              competitor can file a size protest after award. If affiliation is found, the award
              can be rescinded. Don&apos;t assume the government won&apos;t look — especially on
              high-value set-aside contracts where losing bidders have strong incentives to
              challenge.
            </Callout>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="by-industry"
            number="05"
            title="Size Standards Across Key Industries"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Size standards vary dramatically by NAICS code. The same company might be small in one
              industry and large in another. Here are representative thresholds for industries common
              among small business government contractors.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-700 text-white">
                    <th className="text-left p-3 font-bold border border-blue-600">Industry</th>
                    <th className="text-left p-3 font-bold border border-blue-600">Example NAICS</th>
                    <th className="text-left p-3 font-bold border border-blue-600">Measure</th>
                    <th className="text-left p-3 font-bold border border-blue-600">Typical Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { industry: "IT Consulting & Services", naics: "541511, 541519", measure: "Revenue", standard: "$34M–$47.5M" },
                    { industry: "Management Consulting", naics: "541611", measure: "Revenue", standard: "$24.5M" },
                    { industry: "Engineering Services", naics: "541330", measure: "Revenue", standard: "$25.5M–$47M" },
                    { industry: "Janitorial / Building Cleaning", naics: "561720", measure: "Revenue", standard: "$22M" },
                    { industry: "Facility Support Services", naics: "561210", measure: "Revenue", standard: "$47M" },
                    { industry: "Security Guard Services", naics: "561612", measure: "Revenue", standard: "$25M" },
                    { industry: "Staffing / Temp Labor", naics: "561320", measure: "Revenue", standard: "$34M" },
                    { industry: "General Construction", naics: "236220", measure: "Revenue", standard: "$45M" },
                    { industry: "Defense Electronics Mfg.", naics: "334511", measure: "Employees", standard: "1,250" },
                    { industry: "Aircraft & Parts Mfg.", naics: "336411", measure: "Employees", standard: "1,500" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 border border-stone-200 font-medium text-stone-900">{row.industry}</td>
                      <td className="p-3 border border-stone-200 text-stone-600 font-mono text-xs">{row.naics}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.measure}</td>
                      <td className="p-3 border border-stone-200 font-bold text-blue-700">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4 text-sm italic">
              Note: These figures reflect published SBA size standards as of early 2026. Always
              verify against the current SBA Table of Small Business Size Standards before
              submitting a bid. See the SBA&apos;s proposed 2025 rule in Section 07 for pending increases.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              Notice the range. An IT consulting firm can have $47.5 million in annual revenue and
              still compete for small business set-asides. A janitorial firm crosses its threshold
              at $22 million. A management consulting firm loses small status at $24.5 million. These
              differences shape which industries are competitive in the small business market and
              which have effective large-business participation.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If your company operates in multiple NAICS codes — which is common —{" "}
              <Link href="/blog/naics-code-change-guide" className="text-blue-600 hover:underline">
                check your size standard separately for each code
              </Link>
              . Your size is always measured against the NAICS code assigned to the specific
              solicitation, not your primary NAICS code.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="certify-and-recertify"
            number="06"
            title="How to Self-Certify and When to Recertify"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Federal contracting uses a self-certification system. When you register in SAM.gov,
              you certify your small business status based on your primary NAICS code. When you
              submit an offer, you certify your size status for the specific NAICS code on that
              solicitation. The government trusts your certification — but verifies it when someone
              protests.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Initial Certification in SAM.gov</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Your SAM.gov registration includes a section where you select your primary NAICS code
              and certify small business status under that code. This certification is what populates
              the small business designation in FPDS-NG (the federal procurement database) and
              appears to contracting officers when they search for small business vendors. Keep your
              SAM.gov registration current — it must be renewed annually.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Offer-Level Certification</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Each time you submit an offer on a small business set-aside, you are certifying that
              you are small at the time of that offer. You measure your size against the NAICS code
              on the solicitation — not your SAM.gov primary code, not a code you prefer. The
              solicitation controls. If you are not small under the solicitation&apos;s NAICS code, you
              cannot legally claim small business status on that offer.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-4">Recertification Requirements</h3>
            <div className="space-y-3 mb-8">
              {[
                {
                  trigger: "Long-term contract anniversary",
                  detail:
                    "On contracts longer than 5 years (including options), you must recertify small business status within 120 days of the 5-year anniversary. If you are no longer small at recertification, the contracting officer can still exercise options but must note your large business status in the contract file.",
                  icon: Clock,
                },
                {
                  trigger: "Merger or acquisition",
                  detail:
                    "When your company is acquired by or merges with another business, you must recertify within 30 days of the transaction. This is one of the most common ways contractors unknowingly lose small business status mid-contract.",
                  icon: Building2,
                },
                {
                  trigger: "Option year exercise",
                  detail:
                    "Some contract vehicles require recertification at each option exercise. Check your contract language — the requirement to recertify is increasingly common on set-aside contracts.",
                  icon: FileText,
                },
                {
                  trigger: "IDIQ task order issuance",
                  detail:
                    "On some IDIQ contracts, small business status is re-evaluated at the task order level. Know your specific contract's rules — MAC vehicles often have their own recertification provisions.",
                  icon: Zap,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <item.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.trigger}</p>
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Info} color="sky" title="Recertification Doesn't Kill Existing Contracts">
              Growing beyond your size standard mid-contract does not automatically terminate your
              contract. The government can still exercise options. What changes is your eligibility
              to bid on new small business set-asides and, in some cases, to receive credit toward
              an agency&apos;s small business contracting goals. Track your size proactively and brief
              your contracting officer before a recertification event.
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="my-12 rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-black text-stone-900 mb-2">
                  Find contracts matched to your size and certifications
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  CapturePilot filters every SAM.gov opportunity by your NAICS codes, size status,
                  and active certifications — so you see only the set-asides you&apos;re eligible to win.
                  No manual filtering, no missed opportunities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/features/matching"
                    className="inline-flex items-center gap-2 border border-blue-300 text-blue-700 font-medium px-5 py-2.5 rounded-xl hover:bg-blue-100 transition-colors text-sm"
                  >
                    See how matching works
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="proposed-increases"
            number="07"
            title="The 2025 Proposed Rule: Standards Are Rising"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              On August 22, 2025, the SBA published a proposed rule in the Federal Register
              (90 FR 2025-16142) to increase the monetary-based size standards across 263 industries.
              This was the third 5-year rolling review of small business size standards required
              under the Small Business Jobs Act of 2010, and it proposed the largest wave of
              increases in recent memory.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The comment period closed October 21, 2025. The SBA used a revised methodology
              introduced in September 2024 that calculates a &ldquo;disparity ratio&rdquo; for each industry —
              comparing the small business share of federal contract obligations against the small
              business share of industry receipts. Industries where small businesses are
              underrepresented in federal contracting relative to their market share got the largest
              increases.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The sectors with the most proposed increases were Retail Trade (32 of 55 standards
              proposed for increase), Professional, Scientific, and Technical Services (31 of 48),
              and Health Care and Social Assistance (29 of 39). A separate proposed rule covering
              employee-based size standards was announced to follow.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { label: "Retail Trade standards proposed for increase", count: "32 of 55", color: "blue" },
                { label: "Professional Services standards proposed for increase", count: "31 of 48", color: "emerald" },
                { label: "Health Care standards proposed for increase", count: "29 of 39", color: "amber" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-5 border text-center animate-on-scroll ${
                    item.color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : item.color === "emerald"
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-amber-50 border-amber-200"
                  }`}
                >
                  <p className={`text-2xl font-black mb-1 ${
                    item.color === "blue"
                      ? "text-blue-700"
                      : item.color === "emerald"
                      ? "text-emerald-700"
                      : "text-amber-700"
                  }`}>
                    {item.count}
                  </p>
                  <p className="text-xs text-stone-600">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              What does this mean in practice? If the proposed increases are finalized, some
              companies that currently sit just above their size standard threshold could return to
              small business status without changing anything about their business. It also expands
              the competitive pool for set-aside contracts — more companies become eligible, which
              means more competition within the small business lane.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Track the status of this rulemaking at federalregister.gov. If the rule has been
              finalized since this article was published, verify your updated threshold at
              sba.gov/size-standards before your next bid.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="Rising Thresholds Can Reopen Doors">
              If you graduated out of small business status in the last few years, check the updated
              size standards after finalization. Some firms that crossed their threshold may find
              the new, higher standard now covers their current revenue or employee count — making
              them eligible for set-asides they&apos;ve been locked out of. Use the{" "}
              <a href={CHECK_URL} className="underline">
                CapturePilot Quick Checker
              </a>{" "}
              to verify your current eligibility against the latest published standards.
            </Callout>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="misrepresentation"
            number="08"
            title="What Misrepresentation Actually Costs You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Certifying that you are small when you are not is a federal crime. It can expose you
              and your company to prosecution under 18 U.S.C. § 1001 (false statements to the
              federal government), liability under the False Claims Act (31 U.S.C. § 3729), and
              suspension or debarment from federal contracting.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The consequences are not theoretical. The Department of Justice actively investigates
              small business fraud. Fines under the False Claims Act can reach three times the
              amount of the fraudulent contract, plus penalties per false claim. Debarment excludes
              you from all federal contracting for a minimum of three years.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  risk: "False Claims Act liability",
                  detail: "Up to 3x the contract value in damages plus $13,000–$27,000 per false claim (amounts adjusted for inflation annually)",
                  severity: "critical",
                },
                {
                  risk: "Criminal charges (18 U.S.C. § 1001)",
                  detail: "Up to 5 years imprisonment and/or fines for false statements to federal agencies",
                  severity: "critical",
                },
                {
                  risk: "Contract termination",
                  detail: "The contracting officer can terminate for default if size misrepresentation is discovered mid-performance",
                  severity: "high",
                },
                {
                  risk: "Suspension and debarment",
                  detail: "Exclusion from all federal contracting — procurement and non-procurement — for a minimum of 3 years",
                  severity: "critical",
                },
                {
                  risk: "Reputational damage",
                  detail: "Debarment and exclusion records are public and appear in SAM.gov for all contracting officers to see",
                  severity: "high",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-4 rounded-xl border ${
                    item.severity === "critical"
                      ? "bg-rose-50 border-rose-200"
                      : "bg-amber-50 border-amber-200"
                  } animate-on-scroll`}
                >
                  <XCircle
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      item.severity === "critical" ? "text-rose-500" : "text-amber-500"
                    }`}
                  />
                  <div>
                    <p className="font-bold text-stone-900 mb-0.5">{item.risk}</p>
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Honest mistakes happen, especially with the affiliate rules. The SBA
              recognizes this and, in genuine cases of negligence rather than intent, may impose
              administrative sanctions instead of criminal referral. The difference between a
              mistake and fraud usually comes down to whether the certification was made knowingly.
              Document your size analysis before each bid — it demonstrates due diligence if a
              protest arises.
            </p>

            <Callout icon={Shield} color="blue" title="Document Your Size Calculation Before Every Offer">
              Keep a simple memo in your file for each small business set-aside you bid: your NAICS
              code, the applicable size standard, your five-year average annual receipts (or
              24-month average employees), your affiliate list, and your conclusion. If a size
              protest is filed, this documentation shows you made a good-faith analysis at the time
              of certification. It won&apos;t eliminate liability for deliberate fraud, but it&apos;s
              essential protection against protest rulings that could otherwise go the wrong way.
            </Callout>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="strategy"
            number="09"
            title="Using Size Standards Strategically"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Most contractors treat size standards as a compliance hurdle. The ones who win treat
              them as a strategic tool. Here&apos;s how to use them actively.
            </p>

            <div className="space-y-6 mb-8">
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 animate-on-scroll">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">1</div>
                  <h3 className="font-bold text-stone-900">Choose NAICS codes that keep you small longer</h3>
                </div>
                <p className="text-sm text-stone-600">
                  If your services legitimately fall under multiple NAICS codes, the one with the
                  highest size standard is not always the best choice — it depends on where the
                  contracts are. But when thresholds are close, the NAICS code with more headroom
                  gives you more runway to grow without losing set-aside access. Work with counsel
                  if you&apos;re deciding which codes to register.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 animate-on-scroll">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">2</div>
                  <h3 className="font-bold text-stone-900">Manage your revenue trajectory deliberately</h3>
                </div>
                <p className="text-sm text-stone-600">
                  Because the measurement is a five-year rolling average, one exceptional year
                  doesn&apos;t immediately push you out of the small business lane. But if you&apos;re
                  approaching your threshold, model out what your average will look like over the
                  next two to three years. Plan your{" "}
                  <Link href="/blog/government-contract-pipeline-management" className="text-blue-600 hover:underline">
                    contract pursuit strategy
                  </Link>{" "}
                  around what you know is coming.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 animate-on-scroll">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">3</div>
                  <h3 className="font-bold text-stone-900">Use size transitions as an M&amp;A factor</h3>
                </div>
                <p className="text-sm text-stone-600">
                  If you&apos;re considering a merger, acquisition, or outside investment, model the
                  affiliation impact before closing. Acquiring a business with $8 million in revenue
                  might seem minor, but if it creates affiliation and pushes your combined receipts
                  over your size standard, you could lose every small business contract in your
                  pipeline. Get this analysis done before you sign.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 animate-on-scroll">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">4</div>
                  <h3 className="font-bold text-stone-900">Plan your &ldquo;graduation&rdquo; strategy before you need it</h3>
                </div>
                <p className="text-sm text-stone-600">
                  Companies that outgrow their size standard are not exiting government contracting
                  — they&apos;re entering the large business lane. The transition requires a different
                  strategy: full-and-open competition,{" "}
                  <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline">
                    teaming with set-aside holders
                  </Link>
                  , and building relationships with large prime contractors who need capable subs.
                  Start that groundwork 18 to 24 months before you project crossing your threshold.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The companies that struggle most with size standards are the ones who discover they
              have a problem during proposal prep — when it&apos;s too late to adjust anything. A
              quarterly review of your current size status against your five-year revenue trend
              gives you early warning. Use{" "}
              <Link href="/features/quick-checker" className="text-blue-600 hover:underline">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to verify your status on demand.
            </p>

            <p className="text-stone-600 leading-relaxed">
              Size standards are not static rules you learn once. They change through rulemaking.
              Your own business changes. Affiliates come and go. Treat size standard management as
              an ongoing discipline — not a one-time checkbox.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-10 border-t border-stone-200">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/federal-contracting-certifications",
                  title: "Federal Contracting Certifications: Which Ones Actually Help You Win",
                  tag: "Getting Started",
                },
                {
                  href: "/blog/small-business-set-aside-threshold",
                  title: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know",
                  tag: "Set-Asides",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses",
                  tag: "Veterans",
                },
                {
                  href: "/blog/government-contract-teaming-agreement",
                  title: "Teaming Agreements: How to Partner Up and Win Bigger Contracts",
                  tag: "Strategy",
                },
                {
                  href: "/blog/8a-sole-source-contracts",
                  title: "8(a) Sole Source Contracts: The Fastest Path to Federal Revenue",
                  tag: "Set-Asides",
                },
                {
                  href: "/blog/hubzone-program-guide",
                  title: "HUBZone Program: How Location Can Win You Government Contracts",
                  tag: "Set-Asides",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex flex-col p-5 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xs font-medium text-blue-600 mb-2">{article.tag}</span>
                  <span className="text-sm font-bold text-stone-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {article.title}
                  </span>
                  <span className="mt-2 text-blue-500 flex items-center gap-1 text-xs font-medium">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white text-center animate-on-scroll">
            <Award className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-3">
              Know your size. Know your market. Win more contracts.
            </h2>
            <p className="text-stone-300 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
              CapturePilot verifies your small business eligibility, matches you to the right
              set-asides, and tracks every opportunity that fits your NAICS codes and certifications.
              Try it free for 30 days.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3 rounded-xl transition-colors"
              >
                Start your free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white font-medium px-7 py-3 rounded-xl transition-colors"
              >
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
