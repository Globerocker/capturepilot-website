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
  FileText,
  Clock,
  Users,
  BarChart3,
  Shield,
  Info,
  Zap,
  TrendingUp,
  Search,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-sap", label: "What Simplified Acquisition Procedures Actually Are" },
  { id: "new-thresholds", label: "The 2025 Threshold Update: $350K, $15K, $9M" },
  { id: "speed-advantage", label: "The Speed Advantage Over Full-and-Open Competition" },
  { id: "rule-of-two", label: "The Small Business Zone and the Rule of Two" },
  { id: "three-sap-methods", label: "Three Ways Agencies Buy Under SAP" },
  { id: "far-part-13-overhaul", label: "The 2025 FAR Part 13 Overhaul: What Changed" },
  { id: "finding-sap-opportunities", label: "Finding SAP Opportunities Before Competitors Do" },
  { id: "winning-sap-strategy", label: "Building a Winning SAP Strategy" },
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

export default function SimplifiedAcquisitionProcedurePage() {
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
            <span className="text-stone-900 font-medium">Simplified Acquisition Procedures</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Simplified Acquisition Procedures:{" "}
            <span className="gradient-text">The Fast Track for Contracts Under $350K</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Simplified Acquisition Procedures (SAP) govern roughly{" "}
            <strong className="text-stone-700">85% of all federal contract actions by volume</strong>{" "}
            and move{" "}
            <strong className="text-stone-700">$24.6 billion in annual awards</strong>. As of
            October 1, 2025, the Simplified Acquisition Threshold rose to $350,000 &mdash; meaning
            a much larger slice of federal spending now flows through the fastest, least
            paperwork-intensive procurement process the government has.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 7, 2026</span>
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
            id="what-is-sap"
            number="01"
            title="What Simplified Acquisition Procedures Actually Are"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Simplified Acquisition Procedures (SAP) are the set of streamlined procurement rules
              in FAR Part 13 that federal agencies use for purchases below the Simplified Acquisition
              Threshold (SAT). Below this ceiling, agencies skip most of the heavy procurement
              machinery &mdash; no formal Request for Proposals, no sealed bidding, no lengthy source
              selection boards. Instead, they get a quote, pick a vendor, and award. For small
              businesses, that distinction is the difference between a 30-day award process and
              a 14-month one.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SAP isn&apos;t a single method. It&apos;s a category of methods &mdash; purchase orders, blanket
              purchase agreements, oral quotations &mdash; all governed by the same simplified rules.
              What they share: less documentation, faster awards, and a mandatory preference for
              small business competition. The FAR explicitly requires agencies to promote competition
              &ldquo;to the maximum extent practicable&rdquo; even under SAP, but the threshold for
              what counts as adequate competition is far lower than in full formal procurements.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Most small businesses entering federal contracting hear about SAP eventually &mdash; usually
              in the context of &ldquo;you should look at contracts under $250,000.&rdquo; That advice is
              correct but outdated: the SAT jumped to $350,000 on October 1, 2025, and a separate
              commercial items pathway under FAR 13.5 now reaches $9 million. The market you&apos;re
              targeting is bigger than it was a year ago.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$350K", label: "Simplified Acquisition Threshold as of Oct 1, 2025", icon: DollarSign },
                { stat: "$24.6B", label: "Annual simplified acquisitions (FY2025)", icon: BarChart3 },
                { stat: "85%", label: "Share of all federal contract actions by volume", icon: TrendingUp },
                { stat: "Days–weeks", label: "Typical SAP award timeline vs. months for formal bids", icon: Clock },
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
              One thing SAP is not: a loophole. Agencies cannot use simplified procedures to
              circumvent competition or set-aside requirements. The simplified part refers to the
              administrative process &mdash; fewer forms, shorter timelines, less documentation &mdash;
              not a reduced obligation to compete the work fairly. If you&apos;re trying to understand
              where SAP sits in the broader procurement landscape, our{" "}
              <Link
                href="/blog/federal-contract-types-explained"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                federal contract types guide
              </Link>{" "}
              explains how SAP, IDIQ vehicles, and full formal procurements relate to each other.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="FAR Citation: Part 13 and the FASA Authorization">
            Simplified Acquisition Procedures were established by the Federal Acquisition
            Streamlining Act of 1994 (FASA), which directed the FAR Council to create a separate
            set of streamlined rules for small-dollar purchases. Those rules live in FAR Part 13.
            The 2025 FAR overhaul under Executive Order 14275 is in the process of reorganizing
            Part 13 &mdash; splitting commercial and noncommercial acquisitions &mdash; but the core
            simplified procedures and small business set-aside requirements remain intact.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="new-thresholds"
            number="02"
            title="The 2025 Threshold Update: $350K SAT, $15K MPT, $9M Commercial"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              On August 27, 2025, the FAR Council published a final rule adjusting acquisition
              thresholds for inflation &mdash; the first major adjustment in several years. Three
              numbers changed at once, all taking effect October 1, 2025. Know all three, because
              they define the entire simplified acquisition landscape you&apos;re operating in.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Threshold</th>
                    <th className="text-right px-4 py-3 font-semibold">Old Limit</th>
                    <th className="text-right px-4 py-3 font-semibold">New Limit</th>
                    <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">What It Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      threshold: "Micro-Purchase Threshold (MPT)",
                      old: "$10,000",
                      new: "$15,000",
                      what: "Below this: no competition required, no SAM needed for GPC buys",
                    },
                    {
                      threshold: "Simplified Acquisition Threshold (SAT)",
                      old: "$250,000",
                      new: "$350,000",
                      what: "Below this: SAP applies; above this, full formal procurement required",
                    },
                    {
                      threshold: "Commercial Items Simplified Ceiling (FAR 13.5)",
                      old: "$7.5 million",
                      new: "$9 million",
                      what: "Commercial products/services can use simplified procedures up to this",
                    },
                    {
                      threshold: "FAR 13.5 Contingency Operations Ceiling",
                      old: "$15 million",
                      new: "$15 million",
                      what: "Unchanged — applies only to contingency operation acquisitions",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-700 border-b border-stone-100">
                        {row.threshold}
                      </td>
                      <td className="px-4 py-3 text-right text-stone-400 line-through border-b border-stone-100">
                        {row.old}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-stone-100">
                        {row.new}
                      </td>
                      <td className="px-4 py-3 text-stone-500 text-xs border-b border-stone-100">
                        {row.what}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The SAT jump from $250,000 to $350,000 is the headline change for most small
              businesses. It means an additional $100,000 band of procurements now fall under
              simplified procedures &mdash; faster awards, less documentation, and mandatory small
              business set-asides. Contracts that previously triggered full-and-open competition
              requirements at $260,000 or $300,000 now fall squarely in SAP territory.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The commercial items ceiling increase to $9 million is significant for a different
              reason. FAR Subpart 13.5 lets agencies use simplified procedures for commercial
              products and commercial services up to $9 million &mdash; well above the standard SAT.
              If your offering qualifies as a commercial item (sold in the commercial marketplace,
              priced by the market, not custom-built for government), you may be able to pursue
              much larger awards under simplified procedures than the $350,000 SAT suggests. This
              is how many IT products, professional services, and off-the-shelf solutions land
              multi-million-dollar federal contracts without the full formal procurement machinery.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The micro-purchase threshold increase &mdash; from $10,000 to $15,000 &mdash; widens the
              floor of the simplified acquisition stack. Below $15,000, agencies need no
              competition, no solicitation, and often no SAM.gov registration. Above $15,000 and
              below $350,000, the rule of two and mandatory set-asides kick in. For a full
              breakdown of what happens at and below $15,000, our{" "}
              <Link
                href="/blog/micro-purchase-threshold"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                micro-purchase threshold guide
              </Link>{" "}
              covers that tier in detail.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="speed-advantage"
            number="03"
            title="The Speed Advantage Over Full-and-Open Competition"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The practical difference between SAP and full formal procurement isn&apos;t just
              paperwork &mdash; it&apos;s time. A full Request for Proposal under FAR Part 15 involves
              a pre-solicitation notice, a 30-day minimum public notice period, a written proposal
              submission, source selection evaluation, potential discussions, final proposal
              revisions, and then award. Start to finish: four to eighteen months is not unusual
              for large formal contracts.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SAP compresses that into days or weeks. A contracting officer with a requirement
              under $350,000 can solicit quotations orally or electronically, get three responses,
              and award the same afternoon. No formal proposal. No source selection board. No GAO
              protest waiting period required before proceeding to contract performance.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-8 my-8 animate-on-scroll">
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                SAP vs. Full-and-Open: Timeline Comparison
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-400 font-bold text-sm mb-3 uppercase tracking-wide">
                    Simplified Acquisition (SAP)
                  </p>
                  <div className="space-y-3">
                    {[
                      { step: "Day 1", desc: "Agency identifies requirement" },
                      { step: "Day 1–3", desc: "CO solicits 3 sources orally or electronically" },
                      { step: "Day 3–7", desc: "Vendors respond with quotes (price + delivery)" },
                      { step: "Day 7–14", desc: "Award to lowest-priced technically acceptable quote" },
                      { step: "Day 14–21", desc: "Contract performance begins" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-blue-400 font-mono text-xs flex-shrink-0 mt-0.5 w-16">
                          {item.step}
                        </span>
                        <p className="text-stone-300 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-stone-400 font-bold text-sm mb-3 uppercase tracking-wide">
                    Full Formal Procurement (FAR Part 15)
                  </p>
                  <div className="space-y-3">
                    {[
                      { step: "Month 1", desc: "Market research, acquisition planning, D&F" },
                      { step: "Month 2–3", desc: "Pre-solicitation notice, draft RFP review period" },
                      { step: "Month 3–5", desc: "RFP posted, 30–60 day proposal period" },
                      { step: "Month 5–8", desc: "Technical evaluation, discussions, FPR" },
                      { step: "Month 8–14+", desc: "Source selection, award, protest period" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-stone-500 font-mono text-xs flex-shrink-0 mt-0.5 w-16">
                          {item.step}
                        </span>
                        <p className="text-stone-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              That timeline compression has real business implications. Under SAP, you can go from
              spotting an opportunity to performing work within three weeks. Your cash flow
              improves. Your pipeline turns faster. And because the documentation requirements are
              lower, you can respond to more opportunities with less staff overhead &mdash; which matters
              enormously when you&apos;re a 10-person firm competing against a 200-person GovCon
              operation.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The speed advantage also benefits agencies. Contracting officers are evaluated on
              how quickly they award contracts. Under SAP, a skilled CO can knock out a $200,000
              award in a week. That incentive aligns with yours: agencies want to use SAP where
              they can, which means they actively look for ways to structure requirements at or
              below the SAT. Understanding that dynamic helps you position your offerings at
              SAP-friendly price points.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-lg mb-1">Find out which set-asides apply to your business</p>
                <p className="text-blue-100 text-sm">
                  Run the CapturePilot Quick Checker to see which certifications qualify you for
                  mandatory SAP set-asides &mdash; SDVOSB, WOSB, 8(a), HUBZone &mdash; in under two minutes.
                  Free, no account required.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex-shrink-0"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="rule-of-two"
            number="04"
            title="The Small Business Zone and the Rule of Two"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The most important thing SAP does for small businesses: between $15,001 and $350,000,
              agencies are required to set aside acquisitions for small business concerns if the
              &ldquo;rule of two&rdquo; is met. That rule &mdash; codified in FAR 19.502-2 &mdash; says that if
              there&apos;s a reasonable expectation that two or more responsible small businesses will
              submit offers at fair market prices, the acquisition must be set aside exclusively
              for small businesses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              In practice, this zone operates as a near-automatic small business preference. Most
              SAP requirements have at least two capable small businesses, which means large primes
              are legally excluded from the competition. Your biggest competitor in the $15K&ndash;$350K
              band isn&apos;t Booz Allen or Leidos &mdash; it&apos;s other small businesses in your NAICS code.
              That fundamentally changes your competitive calculus.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
              <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <p className="font-bold text-blue-900">Who competes in the SAP set-aside zone</p>
                </div>
                <ul className="space-y-2 text-sm text-blue-800">
                  {[
                    "Small businesses (unrestricted set-asides)",
                    "SDVOSB / VOSB (veteran-owned set-asides)",
                    "WOSB / EDWOSB (women-owned set-asides)",
                    "8(a) participants (SBA program set-asides)",
                    "HUBZone-certified firms (location-based set-asides)",
                    "Small disadvantaged businesses (SDB)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-stone-200 bg-stone-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-stone-500" />
                  <p className="font-bold text-stone-700">Who is excluded (when rule of two is met)</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-600">
                  {[
                    "Large businesses (above SBA size standards)",
                    "Large business subsidiaries operating as large",
                    "Mentor-protégé joint ventures counted as large",
                    "Foreign-owned companies without small business status",
                    "Any firm that exceeds the NAICS size standard",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-stone-400 flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The set-aside hierarchy goes even further if you hold a specific certification.
              Agencies can set aside SAP contracts specifically for SDVOSB firms, WOSB firms,
              8(a) participants, or HUBZone companies &mdash; narrowing competition beyond the basic
              small business set-aside. An 8(a) firm competing on an 8(a) set-aside under $350,000
              might face only two or three other competitors. That&apos;s a fundamentally different
              win-rate environment than a full-and-open procurement.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              You can also pursue 8(a) sole source awards below the SAT &mdash; no competition
              required &mdash; up to $4.5 million for non-manufacturing and $7 million for manufacturing.
              These sole source paths live within the SAP framework and represent some of the most
              direct routes to federal revenue for certified firms. Our{" "}
              <Link
                href="/blog/8a-sole-source-contracts"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                8(a) sole source contracts guide
              </Link>{" "}
              covers how those thresholds and eligibility rules work.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Don&apos;t know which certifications you qualify for? Use CapturePilot&apos;s{" "}
              <Link
                href="/features/quick-checker"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                Quick Checker
              </Link>{" "}
              to run your business profile against every federal certification program. It takes
              under two minutes and tells you exactly which set-aside categories you&apos;re eligible
              to compete in &mdash; which directly determines which SAP solicitations you can respond to.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Rule of Two in Practice: How COs Apply It">
            Contracting officers make the rule-of-two determination before posting the solicitation.
            They search SAM.gov registrations, review past awards in the NAICS code, and sometimes
            issue a Sources Sought notice to gauge small business interest. If you&apos;re registered in
            SAM.gov with the right NAICS codes and have responded to Sources Sought notices in your
            target agencies, COs are more likely to count you in their rule-of-two analysis. Being
            invisible in SAM.gov costs you set-aside access you would otherwise qualify for.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="three-sap-methods"
            number="05"
            title="Three Ways Agencies Buy Under SAP"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              SAP isn&apos;t a single procurement type. It&apos;s a framework that covers three distinct
              purchasing methods. Each has different mechanics, different relationship dynamics, and
              different strategic implications for small businesses.
            </p>

            <div className="space-y-0 mb-8">
              {[
                {
                  step: "01",
                  title: "Purchase Orders (POs)",
                  badge: "Most common for one-time buys",
                  desc: "A purchase order is the simplest SAP method: the agency issues a document authorizing payment for a specific quantity of supplies or services at a set price. No negotiation of terms, no formal proposal &mdash; just a quote, an acceptance, and performance. POs are used constantly for one-time needs: a software license, a training session, a set of supplies, a short-term consulting engagement.",
                  extra: "For POs between $15,000 and $350,000, contracting officers must solicit at least three sources if practicable. They can do this with a phone call, an email, or a post on SAM.gov. Your job is to be one of those three &mdash; which means having a relationship with the right program offices before the quote request goes out.",
                  color: "bg-blue-600",
                },
                {
                  step: "02",
                  title: "Blanket Purchase Agreements (BPAs)",
                  badge: "Best for recurring needs",
                  desc: "A BPA is essentially a charge account: the agency sets up a pre-negotiated agreement with one or more vendors for repetitive purchases of specific supplies or services. Once a BPA is established, the agency places call orders against it without re-soliciting each time. BPAs can last up to a year with up to four one-year options for single-award BPAs.",
                  extra: "BPAs reward early positioning. If you establish a BPA with an agency before a larger requirement is fully scoped, call orders can flow to you repeatedly without your competitors having a shot at each individual purchase. The downside: agencies are increasingly using multiple-award BPAs, which means you compete for individual calls even with a BPA in place. Still, having a BPA positions you ahead of vendors who don't.",
                  color: "bg-emerald-600",
                },
                {
                  step: "03",
                  title: "Oral Quotations and Simplified Written Solicitations",
                  badge: "Fastest award timeline",
                  desc: "For requirements under $350,000, contracting officers can solicit quotations orally &mdash; a phone call to three potential vendors asking for a price and delivery date. No formal RFP, no lengthy proposal, no past performance volume. The CO picks the best value response and issues a PO or simplified contract. This is the fastest possible procurement path short of a micro-purchase.",
                  extra: "Oral solicitations almost never get posted to SAM.gov. You find out about them because a CO already knows you &mdash; from a prior award, a capability statement you left at an industry day, a referral from an agency contact, or a Sources Sought response you submitted. Positioning for oral quotes is almost entirely a relationship game.",
                  color: "bg-amber-600",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 animate-on-scroll">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center font-black text-sm flex-shrink-0`}>
                      {item.step}
                    </div>
                    {i < 2 && <div className="w-px flex-1 bg-stone-100 my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-sm text-stone-500 leading-relaxed italic border-l-2 border-stone-200 pl-3">{item.extra}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The strategic implication across all three methods: SAP rewards vendors who are
              already known. Whether it&apos;s a one-time PO, a BPA call order, or an oral quote,
              the contracting officer usually has a vendor in mind before the process starts. Your
              pre-solicitation relationship work &mdash; capability statements, industry days, Sources
              Sought responses &mdash; is what gets you on that mental shortlist. For a deeper dive on
              how to position before the RFP, read our{" "}
              <Link
                href="/blog/sources-sought-notice"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                Sources Sought notice guide
              </Link>
              .
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="far-part-13-overhaul"
            number="06"
            title="The 2025 FAR Part 13 Overhaul: What Changed"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Executive Order 14275 &mdash; &ldquo;Restoring Common Sense to Federal Procurement&rdquo; &mdash;
              signed April 15, 2025, directed the FAR Council to undertake a comprehensive overhaul
              of the Federal Acquisition Regulation. Part 13 is one of the first sections to see
              significant changes, and if you&apos;re tracking SAP opportunities, you need to understand
              what shifted.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The biggest structural change: FAR Part 13 is being reorganized and renamed. Under
              the overhaul model, the current Part 13 (&ldquo;Simplified Acquisition Procedures&rdquo;) is
              renamed to &ldquo;Simplified Procedures for Non-commercial Acquisitions.&rdquo; Commercial
              acquisitions &mdash; previously covered by both Part 12 and Part 13 &mdash; move primarily
              into a reorganized Part 12. GSA issued a class deviation (RFO-2025-13) implementing
              the non-commercial Part 13 changes in late 2025, with other agencies following with
              their own deviations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
              {[
                {
                  icon: CheckCircle2,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                  title: "What stayed the same",
                  items: [
                    "Rule of two and mandatory small business set-asides",
                    "Simplified Acquisition Threshold at $350,000",
                    "Purchase orders, BPAs, and oral quotation methods",
                    "Small business preference language in FAR 13.102",
                    "The $9M commercial items ceiling under revised Part 12",
                    "Protest rights for SAP awards remain available",
                  ],
                },
                {
                  icon: AlertTriangle,
                  color: "text-amber-600",
                  bg: "bg-amber-50 border-amber-200",
                  title: "What changed or is changing",
                  items: [
                    "Part 13 renamed; commercial acquisitions moving to Part 12",
                    "Some set-aside provisions reorganized (not eliminated)",
                    "Agency-specific deviations creating interim variation",
                    "Documentation requirements being further simplified",
                    "SF-1449 use and solicitation formats being updated",
                    "FAR 2.0 long-term rewrite still in progress",
                  ],
                },
              ].map((card, i) => (
                <div key={i} className={`rounded-xl border-2 ${card.bg} p-6`}>
                  <div className="flex items-center gap-2 mb-3">
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                    <p className="font-bold text-stone-900 text-sm">{card.title}</p>
                  </div>
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The American Small Business Chamber has raised alarms about the overhaul&apos;s potential
              to weaken set-aside protections for $24.6 billion in annual simplified acquisitions.
              Their concern: if commercial acquisitions move entirely out of Part 13 and into a
              reorganized Part 12 without preserving the small business set-aside language
              explicitly, some procurements could lose their mandatory set-aside status.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              As of mid-2026, the core set-aside requirements remain in force and FAR Section
              13.102 still requires small business set-asides for eligible SAP acquisitions.
              The reorganization is ongoing. If you&apos;re operating in this space, watch the
              FAR Council&apos;s deviation guidance at acquisition.gov and subscribe to SmallGovCon
              for updates as the FAR 2.0 overhaul progresses.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Practically speaking: the procurement methods and thresholds haven&apos;t changed in ways
              that reduce your access to simplified acquisitions. SAP is still your fastest path to
              federal revenue under $350,000, and the small business set-aside zone is still intact.
              Track the regulatory developments but don&apos;t let them slow your pipeline work while
              the rules debate plays out.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Agency Deviations Create Temporary Variation">
            During the FAR overhaul transition, individual agencies are implementing class
            deviations that may differ slightly from each other. GSA, DoD, DHS, and the Department
            of Energy have each issued deviations covering the Part 13 changes. The substantive
            simplified acquisition procedures &mdash; thresholds, set-asides, competition requirements
            &mdash; are consistent across deviations, but procedural forms and documentation
            requirements may vary by agency. When working with a specific agency contracting officer,
            ask which FAR deviation applies to their acquisitions if you&apos;re unsure.
          </Callout>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-black text-lg text-stone-900 mb-1">
                  Track every SAP opportunity in your NAICS codes
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  CapturePilot monitors SAM.gov for new simplified acquisition opportunities
                  in your NAICS codes &mdash; filtered by dollar range, agency, and set-aside type.
                  Start your free trial and build a real SAP pipeline.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 text-stone-600 font-medium text-sm hover:text-stone-900 transition-colors"
                >
                  Book a strategy call →
                </Link>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="finding-sap-opportunities"
            number="07"
            title="Finding SAP Opportunities Before Competitors Do"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              SAP opportunities divide into two categories: the ones posted to SAM.gov and the
              ones that never appear there at all. Your strategy needs to cover both, because the
              invisible ones &mdash; oral quotes, direct BPA calls, repeat orders &mdash; often represent
              the best-quality opportunities with the least competition.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "SAM.gov opportunity search",
                  desc: "Filter by Notice Type (Solicitation), dollar range ($15,000–$350,000), and your NAICS codes. Set up email alerts for new postings so you see them the day they go up. SAP postings often have short response windows &mdash; 5 to 10 days is common &mdash; so early detection matters. CapturePilot's matching engine automates this filtering against your profile.",
                  icon: Search,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  link: { href: "/features/matching", label: "See CapturePilot opportunity matching" },
                },
                {
                  title: "Sources Sought and RFI responses",
                  desc: "A Sources Sought notice is an agency's formal way of checking whether small businesses exist before deciding whether to set aside a requirement. Responding to a Sources Sought &mdash; even when there's no solicitation yet &mdash; puts your name in front of the contracting officer and directly influences whether the resulting requirement gets set aside. This is the highest-leverage pre-solicitation move available to small businesses.",
                  icon: FileText,
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                  link: { href: "/blog/sources-sought-notice", label: "How to respond to Sources Sought" },
                },
                {
                  title: "Agency small business offices (OSDBUs)",
                  desc: "Every major federal agency has an Office of Small and Disadvantaged Business Utilization. OSDBU staff maintain vendor lists, introduce small businesses to program offices, and advocate for set-asides. A 15-minute meeting with an OSDBU director can produce introductions to contracting offices with recurring SAP requirements in your NAICS codes. This is relationship capital that SAM.gov search can't replicate.",
                  icon: Building2,
                  color: "border-amber-200 bg-amber-50",
                  iconColor: "text-amber-600",
                  link: null,
                },
                {
                  title: "USASpending.gov historical award analysis",
                  desc: "Search USASpending.gov for awards in your NAICS codes filtered to the $15K–$350K range. Find which agencies award simplified acquisitions in your space regularly, how much they spend, and who's been winning. The incumbents you identify are your roadmap: understand why they're winning, and position yourself as the alternative before the next requirement posts.",
                  icon: BarChart3,
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                  link: { href: "/blog/incumbent-advantage-government-contracts", label: "How to beat the incumbent" },
                },
                {
                  title: "Capability statement and direct agency outreach",
                  desc: "For oral quote opportunities, you need to be known before the need arises. A one-page capability statement &mdash; specific to your top NAICS codes and target agencies &mdash; is the tool you leave behind at industry days, contracting officer meetings, and agency small business events. Contracting officers soliciting oral quotes often pull from their personal contact list first.",
                  icon: Target,
                  color: "border-rose-200 bg-rose-50",
                  iconColor: "text-rose-600",
                  link: { href: "/blog/capability-statement-examples", label: "See capability statement examples" },
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-5 p-6 rounded-xl border-2 ${item.color} animate-on-scroll`}
                >
                  <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.iconColor}`} />
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.desc}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                      >
                        {item.link.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The best SAP pipeline is a mix: monitored SAM.gov alerts for posted solicitations,
              plus an active relationship network that routes oral quotes and BPA calls your way.
              Neither channel alone is enough. A business relying only on SAM.gov monitoring
              competes on the solicitations everyone sees. A business relying only on relationships
              has fragile revenue tied to a small number of personal connections. Build both.
            </p>
          </div>

          <Callout icon={Info} color="sky" title="SAP and the $9M Commercial Items Path">
            If your offerings qualify as commercial products or commercial services under FAR
            2.101, the commercial items simplified procedures in FAR Part 12 (formerly FAR 13.5)
            let agencies use streamlined acquisition methods up to $9 million &mdash; more than 25 times
            the standard SAT. Commercial item determinations can be complex, but if you sell
            something that already exists in the commercial marketplace at a market-determined
            price &mdash; software, training, professional services, off-the-shelf hardware &mdash; you
            likely qualify. A contracting officer who wants to use the $9M simplified ceiling
            will need to document the commercial item determination, but the burden is on the
            agency, not on you to prove it.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="winning-sap-strategy"
            number="08"
            title="Building a Winning SAP Strategy"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAP is the most forgiving procurement environment in federal contracting. The
              documentation bar is lower. The proposal requirements are lighter. The competition
              pool is smaller. But &ldquo;forgiving&rdquo; doesn&apos;t mean passive. The businesses that
              consistently win SAP contracts do specific things that their competitors don&apos;t.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s the strategy that separates consistent SAP winners from companies that
              respond to solicitations and wonder why they don&apos;t win:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 my-8 animate-on-scroll">
              <h3 className="font-black text-stone-900 text-lg mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                The SAP Winner&apos;s Framework
              </h3>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Know your SAP-optimal NAICS codes",
                    desc: "Not every NAICS code has equal SAP activity. Pull USASpending.gov data filtered to $15K–$350K for your top two or three codes. Look at action count (not just dollars) &mdash; high action counts in a NAICS mean agencies regularly award simplified acquisitions there. Target the codes with the highest action count in your capability area.",
                  },
                  {
                    num: "02",
                    title: "Register in SAM with current, specific data",
                    desc: "Your SAM.gov registration is how contracting officers verify your small business status and set-aside eligibility. Keep your NAICS codes current. Write your capability narrative specifically, not generically &mdash; 'cybersecurity assessment services for DoD networks' beats 'IT services.' Contracting officers doing market research read these narratives.",
                  },
                  {
                    num: "03",
                    title: "Respond to every relevant Sources Sought",
                    desc: "A Sources Sought response takes 30 to 60 minutes and directly influences whether a $300,000 requirement gets set aside for small business. Treat Sources Sought responses as your highest-ROI business development activity. Use CapturePilot's intelligence feed to catch them the day they post.",
                  },
                  {
                    num: "04",
                    title: "Price for SAP realities, not formal proposal assumptions",
                    desc: "SAP awards frequently go to lowest-price technically acceptable (LPTA) evaluations. Your pricing needs to be competitive without sacrificing margin. Build standard rate structures you can quote quickly &mdash; a CO asking for an oral quote on a Friday afternoon doesn't want to wait until Monday. Have your pricing ready.",
                  },
                  {
                    num: "05",
                    title: "Build a BPA pipeline alongside your PO pursuit",
                    desc: "One BPA can generate multiple call orders over 12 months without re-competition. Identify agencies with recurring small-dollar needs in your space &mdash; typically found through USASpending patterns &mdash; and proactively approach contracting officers about establishing a BPA. A BPA proposal is short, the process is fast, and the revenue upside is high.",
                  },
                  {
                    num: "06",
                    title: "Use SAP wins to build past performance for larger contracts",
                    desc: "SAP awards generate CPARS records if the contract meets the reporting threshold. Even below CPARS threshold, document every SAP project and request written acknowledgment from your agency customer. That informal past performance becomes the foundation of your first competitive bid over $350,000. Plan your SAP pipeline as a structured path upward.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="text-blue-600 font-mono font-black text-sm flex-shrink-0 mt-0.5 w-8">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              SAP is not a permanent destination. The ceiling is $350,000 for standard purchases,
              which caps your individual contract value. Businesses that build real federal revenue
              use SAP as the entry point: win the first PO, perform well, establish a BPA, grow
              the relationship, and position for the larger IDIQs and GWACs that sit above the
              SAT. The{" "}
              <Link
                href="/blog/government-contract-pipeline-management"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                pipeline management guide
              </Link>{" "}
              covers how to structure that progression from first SAP award to multi-year
              contract vehicle.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For businesses still building their first federal footprint, SAP is the right
              market: lower barriers, faster cycles, mandatory small business preference. Get
              registered, get known, and start responding. The $24.6 billion moving through
              simplified acquisitions every year doesn&apos;t wait for you to feel ready.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link
                href="/features/matching"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                opportunity matching
              </Link>{" "}
              surfaces SAP-range solicitations in your NAICS codes the day they post, filtered
              by your certifications and target agencies. Use the{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                market intelligence
              </Link>{" "}
              tools to track historical SAP spend by agency, and the{" "}
              <Link
                href="/features/pipeline"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                pipeline manager
              </Link>{" "}
              to track your pursue/no-pursue decisions as opportunities come in.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="The Commercial Items Angle for Tech Companies">
            If you&apos;re a software company, managed services provider, or technology firm with
            a commercial product, the FAR Part 12 commercial items pathway under the new FAR
            overhaul can take your simplified acquisition ceiling to $9 million &mdash; far above
            the standard $350,000 SAT. Agencies can award a commercial IT contract at $5 million
            under simplified procedures if the product or service meets the commercial item
            definition. For tech companies pursuing federal work, getting a commercial item
            determination on your core offering is one of the highest-value regulatory steps
            you can take. Our{" "}
            <Link href="/blog/it-government-contracts" className="underline font-medium">
              IT government contracts guide
            </Link>{" "}
            covers how this works in the technology sector.
          </Callout>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="max-w-xl">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h2 className="text-2xl font-black mb-3">
                Start winning in the $24.6 billion SAP market
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                CapturePilot monitors SAM.gov for simplified acquisition opportunities in your
                NAICS codes &mdash; filtered by dollar range, set-aside type, and agency. Start
                your 30-day free trial and build a real pipeline in the market most small
                businesses overlook.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-stone-100">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/micro-purchase-threshold",
                  title: "Micro-Purchase Threshold",
                  desc: "The tier below SAP: how $15,000 GPC purchases work and how to position your business to receive them.",
                },
                {
                  href: "/blog/small-business-set-aside-threshold",
                  title: "Small Business Set-Aside Thresholds",
                  desc: "The full dollar-limit framework for every set-aside category, from $15K through sole source ceilings.",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices",
                  desc: "How to use pre-solicitation responses to shape whether a requirement gets set aside in your favor.",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group block p-5 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-colors hover-lift"
                >
                  <p className="font-bold text-stone-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-blue-600 text-xs font-medium">
                    Read guide <ArrowRight className="w-3 h-3" />
                  </div>
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
