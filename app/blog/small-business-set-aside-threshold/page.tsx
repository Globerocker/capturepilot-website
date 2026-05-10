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
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-thresholds-matter", label: "Why Dollar Thresholds Matter" },
  { id: "three-tiers", label: "The Three Threshold Tiers" },
  { id: "mandatory-zone", label: "The Mandatory Zone: $15K–$350K" },
  { id: "discretionary-zone", label: "The Discretionary Zone: Above $350K" },
  { id: "sole-source-thresholds", label: "Sole Source Thresholds by Program" },
  { id: "far-part-19-overhaul", label: "The FAR Part 19 Overhaul (2025)" },
  { id: "agency-goals", label: "How Agencies Fill Their Contracting Goals" },
  { id: "using-thresholds", label: "Using Thresholds to Target Opportunities" },
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

export default function SmallBusinessSetAsideThresholdPage() {
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
            <span className="text-stone-900 font-medium">Small Business Set-Aside Thresholds</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Set-Asides &amp; Certifications
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Small Business Set-Aside Thresholds:{" "}
            <span className="gradient-text">Dollar Limits You Need to Know</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded{" "}
            <strong className="text-stone-700">$183 billion to small businesses in FY2024</strong>{" "}
            &mdash; 28.8% of all federal contract dollars. The threshold rules that drove those awards
            changed significantly on October 1, 2025. Here&apos;s exactly what the new numbers are,
            how the mandatory set-aside rules work, and how to use them to find the contracts most
            likely to come your way.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 10, 2026</span>
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
            id="why-thresholds-matter"
            number="01"
            title="Why Dollar Thresholds Matter"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside thresholds are not bureaucratic fine print. They are the legal triggers that
              determine when a contracting officer is required &mdash; not merely allowed &mdash; to reserve a
              contract exclusively for small businesses. Get them wrong and you chase full-and-open
              competitions you were never going to win. Get them right and you see the exact dollar
              ranges where the law works in your favor.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The FAR Council issued a final rule on August 27, 2025 adjusting acquisition
              thresholds for inflation (90 Federal Register 41872), effective October 1, 2025. The
              changes pushed the micro-purchase threshold from $10,000 to $15,000 and the simplified
              acquisition threshold from $250,000 to $350,000. Those two numbers define the
              mandatory small business set-aside zone &mdash; the band where federal law says the contract
              shall go to a small business unless a specific exception applies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Every number in this guide reflects the thresholds in effect after October 1, 2025.
              If you&apos;re reading a guide that still shows $250,000 as the SAT, it&apos;s out of
              date.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$183B", label: "Awarded to small businesses, FY2024", icon: DollarSign },
                { stat: "28.8%", label: "Share of all federal contracting", icon: BarChart3 },
                { stat: "$350K", label: "New simplified acquisition threshold", icon: Target },
                { stat: "$15K", label: "New micro-purchase threshold", icon: Clock },
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
              Understanding these thresholds changes how you read SAM.gov. A $280,000 IT support
              contract posted as &ldquo;full and open&rdquo; is a red flag &mdash; the agency may have
              violated mandatory set-aside rules. A $1.2 million contract posted as small business
              set-aside is the discretionary zone working correctly. Knowing the rules helps you
              identify where to bid, and sometimes, where to push back.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="Thresholds Apply Government-Wide">
            These dollar limits apply across all federal civilian and defense agencies. DoD, VA,
            DHS, NASA, and every other federal buyer follows the same FAR thresholds for small
            business set-asides. Separate rules apply to certain DoD acquisitions (like the
            Defense Acquisition Regulations Supplement, DFARS), but the base FAR thresholds
            control the mandatory set-aside floors across the board.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="three-tiers"
            number="02"
            title="The Three Threshold Tiers"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Federal procurement thresholds create three distinct zones. Each zone has different
              competition requirements, different contracting procedures, and different implications
              for small businesses.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  tier: "Tier 1",
                  range: "Under $15,000",
                  name: "Micro-Purchase Zone",
                  color: "border-stone-300 bg-stone-50",
                  badgeColor: "bg-stone-200 text-stone-700",
                  desc: "Agencies can buy directly using a government purchase card (credit card), no competition required. No SAM.gov registration required from the vendor. Not set aside — these purchases flow to whoever the buyer chooses. Increasing from $10K to $15K expanded the no-paperwork zone significantly.",
                  implication: "Hard to systematically target. If you catch an agency buyer at a conference or through a relationship, these happen fast — but they're one-off, not a pipeline.",
                },
                {
                  tier: "Tier 2",
                  range: "$15,001 – $350,000",
                  name: "Mandatory Small Business Set-Aside Zone",
                  color: "border-blue-300 bg-blue-50",
                  badgeColor: "bg-blue-600 text-white",
                  desc: "FAR 19.502-2 requires the contracting officer to set aside every acquisition in this range for small businesses unless the Rule of Two cannot be met. This is law, not discretion. The CO must find two or more responsible small businesses who can compete at fair market prices — if that bar is met, the contract goes to small business.",
                  implication: "Your primary hunting ground if you're newly registered. Thousands of contracts at this range are posted every week on SAM.gov, most carrying mandatory small business set-aside designations.",
                },
                {
                  tier: "Tier 3",
                  range: "Above $350,000",
                  name: "Discretionary Set-Aside Zone",
                  color: "border-emerald-300 bg-emerald-50",
                  badgeColor: "bg-emerald-600 text-white",
                  desc: "Above the SAT, COs should set aside for small business when the Rule of Two is met — meaning there's a reasonable expectation of offers from at least two small businesses at fair market prices. This is where certifications like 8(a), SDVOSB, WOSB, and HUBZone become especially powerful, because a certified firm can receive set-asides or sole source awards even above this threshold.",
                  implication: "Larger contracts with more competition. Your certifications and past performance determine whether you can compete — and whether you can get sole-sourced directly.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border-2 ${item.color} p-6 animate-on-scroll`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.tier}
                    </span>
                    <span className="font-black text-stone-900">{item.range}</span>
                    <span className="text-stone-500 text-sm">— {item.name}</span>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    <strong>Practical implication:</strong> {item.implication}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The threshold increase from $250K to $350K matters because it expanded the mandatory
              zone by $100,000. Contracts that previously sat in the discretionary tier &mdash; where COs
              could technically justify going full-and-open &mdash; are now legally required to be set
              aside for small business if the Rule of Two is met.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="mandatory-zone"
            number="03"
            title="The Mandatory Zone: $15K–$350K"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              FAR 19.502-2 is the rule that matters most for early-stage small businesses. It
              reads: acquisitions above the micro-purchase threshold but not over the simplified
              acquisition threshold{" "}
              <strong>&ldquo;shall be set aside for small business&rdquo;</strong> unless the
              contracting officer determines there is not a reasonable expectation of obtaining
              offers from two or more responsible small business concerns at competitive prices.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              &ldquo;Shall&rdquo; is mandatory language in the FAR. The CO doesn&apos;t get to
              choose. If the Rule of Two is met &mdash; and in most industries with any competition at
              all, it is &mdash; the contract must go to small business.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-8 my-8 animate-on-scroll">
              <h3 className="font-black text-lg mb-4">The Rule of Two: How It Works</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "What triggers it?",
                    a: "Any contract between $15,001 and $350,000. The CO must conduct a market research check before deciding to proceed full-and-open.",
                  },
                  {
                    q: "What does the CO have to find?",
                    a: "A reasonable expectation that two or more responsible small businesses will offer and that award can be made at fair market prices.",
                  },
                  {
                    q: "What happens if only one small business responds?",
                    a: "The CO should still make the award to that single small business firm. One responsive offer doesn't automatically trigger a re-solicitation to large businesses.",
                  },
                  {
                    q: "What happens if no small businesses respond?",
                    a: "The set-aside is withdrawn and the requirement is re-solicited — including to large businesses. Award is made at fair market prices.",
                  },
                  {
                    q: "Can a CO skip the set-aside?",
                    a: "Only if market research genuinely shows no reasonable expectation of two small business offers. That documentation must be in the contract file.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <p className="text-blue-300 text-sm font-bold mb-1">{item.q}</p>
                    <p className="text-stone-200 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For new small businesses, this mandatory zone is where you should start. Contracts
              under $350K are simpler to execute, faster to award, and most carry set-aside
              designations that filter out large business competition entirely. Build your first
              two or three past performance references here before chasing larger competitive bids.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link
                href="/features/matching"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                opportunity matching
              </Link>{" "}
              filters by set-aside type and dollar range &mdash; so you can quickly surface the mandatory
              set-aside contracts in your NAICS codes without combing through full-and-open
              competitions that aren&apos;t relevant to you.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-lg mb-1">Which set-asides can you qualify for?</p>
                <p className="text-blue-100 text-sm">
                  Check your eligibility for 8(a), SDVOSB, WOSB, and HUBZone in under 2 minutes.
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
            id="discretionary-zone"
            number="04"
            title="The Discretionary Zone: Above $350K"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Above $350,000, the mandatory set-aside requirement drops away &mdash; but the incentive
              to set aside for small business remains strong. Agencies have statutory small business
              contracting goals they&apos;re measured against annually. The Procurement Scorecard
              tracks agency performance. Contracting officers and their bosses feel the pressure to
              hit 23% small business overall, plus sub-goals for SDBs, SDVOSBs, WOSBs, and
              HUBZone firms.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The practical result: many contracts above $350K still carry small business set-asides
              because COs want to hit their goals, and the Rule of Two applies here too &mdash; just as a
              &ldquo;should&rdquo; rather than &ldquo;shall.&rdquo; Certified firms (8(a), SDVOSB,
              WOSB, HUBZone) get an additional layer of preference at these dollar values through
              program-specific set-aside authority.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Contract Range</th>
                    <th className="text-left px-4 py-3 font-semibold">Set-Aside Requirement</th>
                    <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">Certification Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      range: "Under $15,000",
                      req: "None — micro-purchase, direct buy",
                      adv: "No structural advantage; relationship-based",
                    },
                    {
                      range: "$15,001 – $350,000",
                      req: "SHALL be set aside (Rule of Two)",
                      adv: "Small business registration alone is sufficient",
                    },
                    {
                      range: "$350,001 – $750,000",
                      req: "SHOULD be set aside if Rule of Two met",
                      adv: "Certifications unlock program-specific set-asides",
                    },
                    {
                      range: "$750,001 – $5.5M",
                      req: "Discretionary — agency goals drive behavior",
                      adv: "8(a), SDVOSB, WOSB, HUBZone set-asides active",
                    },
                    {
                      range: "Above $5.5M (services) / $8.5M (mfg)",
                      req: "Full and open unless set aside by program",
                      adv: "Competitive set-asides; no sole source without J&A",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-700 border-b border-stone-100">
                        {row.range}
                      </td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                        {row.req}
                      </td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                        {row.adv}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The jump from $250K to $350K in the SAT is meaningful for contracts in the
              $250K–$350K band. Before October 1, 2025, a $300,000 IT services order could
              be awarded through simplified acquisition procedures without a mandatory set-aside.
              Now it sits squarely in the mandatory zone. If you&apos;re winning work in that
              dollar range, you have a stronger legal footing than you did a year ago.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Above the SAT, the{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                CapturePilot intelligence tools
              </Link>{" "}
              show you which agencies consistently set aside above-SAT contracts in your NAICS
              codes and which ones don&apos;t. That pattern data tells you where to focus your
              agency development effort.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="The $750,000 Subcontracting Plan Threshold">
            Separate from the set-aside thresholds, contracts awarded to large businesses above
            $750,000 (or $1.5 million for construction) require a small business subcontracting
            plan. Those plans commit the prime contractor to specific subcontracting goals for
            small, SDB, SDVOSB, WOSB, and HUBZone firms. This means even contracts you
            don&apos;t win directly can generate subcontracting revenue &mdash; if you&apos;re registered
            on the right prime&apos;s subcontractor database. See our{" "}
            <Link href="/blog/subcontracting-government-contracts" className="underline font-medium">
              guide to subcontracting
            </Link>{" "}
            for how to position yourself as a subcontractor on these plans.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="sole-source-thresholds"
            number="05"
            title="Sole Source Thresholds by Program"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Sole source authority is the most targeted form of set-aside &mdash; an agency awards a
              contract to one specific firm without any competition. Each major small business
              certification program has statutory sole source thresholds that define how large
              a sole source award can be.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The October 2025 threshold update raised the ceiling across all programs. Here are
              the current limits:
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Program</th>
                    <th className="text-right px-4 py-3 font-semibold">Services / Other</th>
                    <th className="text-right px-4 py-3 font-semibold">Manufacturing</th>
                    <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">Governing FAR Subpart</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prog: "8(a) Business Development", svc: "$5.5M", mfg: "$8.5M", far: "FAR 19.808-1" },
                    { prog: "Service-Disabled Veteran-Owned (SDVOSB)", svc: "$5.5M", mfg: "$8.5M", far: "FAR 19.1406" },
                    { prog: "Women-Owned Small Business (WOSB)", svc: "$5.5M", mfg: "$8.5M", far: "FAR 19.1506" },
                    { prog: "HUBZone", svc: "$5.5M", mfg: "$8.5M", far: "FAR 19.1306" },
                    { prog: "General Small Business (SB)", svc: "No sole source authority", mfg: "—", far: "FAR 19.502-2" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-700 border-b border-stone-100">
                        {row.prog}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-stone-100">
                        {row.svc}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-stone-100">
                        {row.mfg}
                      </td>
                      <td className="px-4 py-3 text-stone-500 text-xs border-b border-stone-100">
                        {row.far}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The key difference between the programs: general &ldquo;small business&rdquo;
              registration alone does not give you sole source authority. You need one of the
              four socioeconomic certifications &mdash; 8(a), SDVOSB, WOSB, or HUBZone &mdash; to access
              sole source awards. That&apos;s the core reason certifications have disproportionate
              ROI: they open a non-competitive contract pathway that doesn&apos;t exist for
              uncertified small businesses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The $5.5M services threshold is the one most small businesses encounter. For IT,
              consulting, professional services, facilities management, and staffing &mdash; the largest
              spend categories for certified small businesses &mdash; this ceiling defines how large a
              no-bid contract can be. A $5.5M contract with four option years is a $27.5M
              relationship built without competing against a single other firm.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If you&apos;re pursuing 8(a) sole source specifically, our{" "}
              <Link
                href="/blog/8a-sole-source-contracts"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                8(a) sole source guide
              </Link>{" "}
              walks through the exact award process, how to get agencies to use sole source
              authority on your behalf, and the mistakes that kill deals before they close.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Manufacturing vs. Services: How to Tell Which Threshold Applies">
            The manufacturing threshold ($8.5M) applies to contracts where the primary NAICS code
            is in the manufacturing sector &mdash; typically codes beginning with 31, 32, or 33. If your
            NAICS code is for a service (IT, consulting, facilities, staffing, security, construction
            services), the services threshold ($5.5M) applies. When a contract mixes both, the
            predominant purpose determines which threshold governs. If you&apos;re unsure which
            applies to a specific opportunity, check the NAICS code on the solicitation and compare
            it against the SBA size standards table at sba.gov/size-standards.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="far-part-19-overhaul"
            number="06"
            title="The FAR Part 19 Overhaul (2025)"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The October 2025 threshold adjustments arrived alongside a broader rewrite of FAR
              Part 19 &mdash; the section of the Federal Acquisition Regulation governing small business
              programs. Several rule changes directly affect how certifications interact with
              set-aside thresholds.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Shield,
                  title: "No order of precedence among certification programs",
                  content:
                    "Under the revised FAR 19.203, there is no statutory hierarchy requiring COs to prefer 8(a) over SDVOSB over WOSB over HUBZone. Contracting officers now have equal authority to use any of the four socioeconomic set-aside programs without having to justify why they didn't use a different one first. This is a significant shift — previously, published guidance implied a hierarchy. Now, the CO picks the program that best achieves the government's contracting goals.",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Target,
                  title: "End of 'Once 8(a), Always 8(a)'",
                  content:
                    "Previously, once a contract was awarded under the 8(a) program, follow-on contracts were almost always required to stay in the 8(a) program. The revised FAR gives contracting officers direct authority — without SBA approval — to release a follow-on requirement from the 8(a) program to a HUBZone, SDVOSB, or WOSB set-aside instead. This doesn't hurt existing 8(a) contracts; it affects competition for follow-on work. Know this rule if you're bidding on a follow-on to an incumbent 8(a) contract.",
                  color: "bg-amber-50 border-amber-200",
                  iconColor: "text-amber-600",
                },
                {
                  icon: TrendingUp,
                  title: "New Rule of Two for task orders",
                  content:
                    "The FAR Part 19 overhaul clarified how the Rule of Two applies to task and delivery orders under IDIQ vehicles. COs are now required to consider small business set-asides at the task order level, not just at the vehicle award level. This matters for your IDIQ strategy: being on an IDIQ doesn't guarantee you'll see set-aside task orders unless the vehicle's rules support them. Vehicles that were designed with small business set-aside task order authority will generate more flow.",
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                },
                {
                  icon: Layers,
                  title: "Simplified acquisition threshold raised for certain programs",
                  content:
                    "The $350K SAT increase also raised the ceiling for using simplified acquisition procedures, including streamlined ordering from GSA Schedules. For Schedule orders between $15K and $350K placed with small businesses, the ordering process is simplified and faster. This means Schedule contracts in that range will flow to small businesses more easily without the formal solicitation process required for larger orders.",
                  color: "bg-sky-50 border-sky-200",
                  iconColor: "text-sky-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-5 p-6 rounded-xl border-2 ${item.color} animate-on-scroll`}
                >
                  <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.iconColor}`} />
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The FAR overhaul is still being implemented agency by agency. Expect inconsistency
              in how contracting offices apply the new &ldquo;no precedence&rdquo; rule through
              2026 as internal policy guidance catches up to the regulatory change. The core
              thresholds &mdash; $15K, $350K, $5.5M &mdash; are firm. The program-priority questions will
              take longer to settle in practice.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-black text-lg text-stone-900 mb-1">
                  Track set-aside opportunities in your NAICS codes
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  CapturePilot filters SAM.gov by set-aside type, dollar range, agency, and NAICS &mdash;
                  and scores each opportunity against your certifications so you see only the
                  contracts you can actually win.
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
            id="agency-goals"
            number="07"
            title="How Agencies Fill Their Contracting Goals"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The government-wide 23% small business contracting goal is set by statute. Each
              agency negotiates an individual goal with the SBA &mdash; some agencies run at 30%+,
              others struggle to hit 20%. The Procurement Scorecard tracks agency performance
              annually and is publicly available. Agencies that miss their goals face scrutiny.
              Agencies that exceed them get credit.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { label: "Overall Small Business", goal: "23%", actual: "28.8% (FY2024)", icon: BarChart3, color: "border-blue-200 bg-blue-50", iconColor: "text-blue-600" },
                { label: "Small Disadvantaged Business (SDB)", goal: "13%", actual: "Tracked separately", icon: Award, color: "border-emerald-200 bg-emerald-50", iconColor: "text-emerald-600" },
                { label: "SDVOSB (Service-Disabled Vets)", goal: "5%", actual: "Goal raised from 3%", icon: Shield, color: "border-amber-200 bg-amber-50", iconColor: "text-amber-600" },
                { label: "Women-Owned Small Business", goal: "5%", actual: "Tracked by agency", icon: Target, color: "border-sky-200 bg-sky-50", iconColor: "text-sky-600" },
                { label: "HUBZone", goal: "3%", actual: "Most agencies miss this", icon: TrendingUp, color: "border-rose-200 bg-rose-50", iconColor: "text-rose-600" },
              ].map((item, i) => (
                <div key={i} className={`flex gap-4 p-5 rounded-xl border-2 ${item.color} animate-on-scroll`}>
                  <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.iconColor}`} />
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.label}</p>
                    <p className="text-2xl font-black text-stone-900">{item.goal}</p>
                    <p className="text-xs text-stone-500 mt-1">{item.actual}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              HUBZone is the most undershot goal in federal contracting. Most agencies
              consistently miss the 3% target, which creates pressure at the end of fiscal
              years &mdash; agencies will actively look for HUBZone-certified vendors to award
              contracts to in Q4 (July–September) just to move their numbers. If you hold a
              HUBZone certification, the end of the federal fiscal year is your best window
              for targeted BD.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SDB 13% goal is met primarily through 8(a) awards, since 8(a) firms are
              by definition socially and economically disadvantaged. This means agencies that
              are behind on their SDB goal will specifically prioritize 8(a) set-asides &mdash; not
              just general small business set-asides. Your 8(a) certification is a target you
              can use when approaching agencies whose Procurement Scorecard shows an SDB gap.
            </p>
            <p className="text-stone-600 leading-relaxed">
              You can look up any agency&apos;s Procurement Scorecard at SBA&apos;s website.
              Agencies that are behind on SDVOSB goals, for example, are better targets for a
              veteran-owned firm than agencies already at 6% SDVOSB. Use this data in your
              pipeline targeting &mdash; it&apos;s freely available and surprisingly underused by
              small businesses.
            </p>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="$183 Billion Reached a New High in FY2024">
            The Biden-Harris administration reported that small businesses received $183 billion
            in federal prime contract dollars in FY2024 &mdash; exceeding the 23% government-wide goal
            at 28.8% of all federal contracting. That was the fourth consecutive year of growth
            in small business contracting dollars. The trajectory suggests the $183B baseline
            will hold or grow in FY2025 and FY2026, meaning your addressable market is larger
            than it has ever been. The threshold changes that took effect October 1, 2025 were
            calibrated specifically to sustain that growth by making more contracts mandatory
            small business set-asides.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="using-thresholds"
            number="08"
            title="Using Thresholds to Target Opportunities"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Knowing the thresholds is step one. Turning them into a targeting strategy is where
              the real value lies. Here&apos;s how to apply this framework to your contracting
              pipeline.
            </p>

            <div className="space-y-0 mb-8">
              {[
                {
                  step: "01",
                  title: "Filter SAM.gov by set-aside type and dollar range",
                  desc: "On SAM.gov, use the Set-Aside Code filter (small business, 8(a), SDVOSB, WOSB, HUBZone) combined with dollar range. Start with contracts in the $50K–$350K mandatory zone to build your pipeline of lower-risk, set-aside-guaranteed opportunities. For certified firms, add the program-specific filter to your NAICS codes.",
                  time: "Weekly habit",
                },
                {
                  step: "02",
                  title: "Check the Procurement Scorecard for target agencies",
                  desc: "Before cold-approaching an agency, look up their small business contracting performance at sba.gov. If they're at 27% small business but only 1.5% HUBZone on a 3% goal, a HUBZone-certified firm has leverage. Reference the gap in your capability statement cover letter and agency meetings. COs are under real pressure to close those gaps.",
                  time: "Pre-campaign research",
                },
                {
                  step: "03",
                  title: "Use USASpending.gov to find contract history in your threshold band",
                  desc: "Search usaspending.gov for your NAICS codes filtered by award dollar range ($15K–$350K for the mandatory zone, or your certification's sole source threshold for upper-bound targeting). Find which agencies bought what kind of work in your range over the last 3 years. Repeat buyers in your NAICS at a given dollar level are the highest-probability targets.",
                  time: "Quarterly research",
                },
                {
                  step: "04",
                  title: "Match your proposal approach to the threshold tier",
                  desc: "Contracts under $350K often use simplified acquisition procedures — shorter proposals, less formal evaluation criteria, faster award timelines. Don't over-engineer your response. Above $350K in the discretionary zone, proposals are formal and competition is real — invest in a compliant technical volume and pricing strategy. The threshold tells you how much effort to apply.",
                  time: "Per-bid strategy",
                },
                {
                  step: "05",
                  title: "Build past performance at the bottom of your target range",
                  desc: "If your goal is $2M contracts, start building past performance at $150K–$350K. Those mandatory set-aside contracts are easier to win, deliver real CPARS ratings, and position you as a credible bidder for the next tier. Past performance is the currency of every level above $350K. Earn it in the mandatory zone first.",
                  time: "Year 1–2 strategy",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 animate-on-scroll">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    {i < 4 && <div className="w-px flex-1 bg-blue-100 my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
              {[
                {
                  href: "/features/quick-checker",
                  icon: CheckCircle2,
                  title: "Check your certifications",
                  desc: "Find out which set-aside programs you qualify for, what sole source thresholds apply, and what gaps to close.",
                  cta: "Run Quick Check →",
                  ctaHref: CHECK_URL,
                  external: true,
                },
                {
                  href: "/features/matching",
                  icon: Target,
                  title: "Match to opportunities",
                  desc: "Filter SAM.gov opportunities by set-aside type, dollar range, and NAICS — scored against your profile.",
                  cta: "See matching →",
                  ctaHref: "/features/matching",
                  external: false,
                },
                {
                  href: "/features/pipeline",
                  icon: BarChart3,
                  title: "Build your pipeline",
                  desc: "Track opportunities from Sources Sought through award. Log agency relationships and set follow-up reminders.",
                  cta: "See pipeline →",
                  ctaHref: "/features/pipeline",
                  external: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-stone-200 bg-stone-50 hover-lift"
                >
                  <item.icon className="w-5 h-5 text-blue-600 mb-3" />
                  <h3 className="font-bold text-stone-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed mb-3">{item.desc}</p>
                  {item.external ? (
                    <a
                      href={item.ctaHref}
                      className="text-xs font-bold text-blue-700 hover:underline"
                    >
                      {item.cta}
                    </a>
                  ) : (
                    <Link
                      href={item.ctaHref}
                      className="text-xs font-bold text-blue-700 hover:underline"
                    >
                      {item.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The most common mistake small businesses make is chasing contracts that are above
              the threshold where their certifications create an advantage &mdash; without the past
              performance to win at that level. Start at the bottom of your relevant threshold
              band. Win there. Move up. The thresholds are a ladder, not a destination.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For a broader look at the set-aside landscape &mdash; how each program works, what the
              certifications require, and which to pursue first &mdash; read our{" "}
              <Link
                href="/blog/set-aside-programs"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                full guide to small business set-aside programs
              </Link>
              . And if you want to validate whether you qualify for a specific certification
              before investing in the application, use the{" "}
              <Link
                href="/features/quick-checker"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                Quick Checker
              </Link>{" "}
              &mdash; it walks through each program&apos;s eligibility criteria in about two minutes.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="max-w-xl">
              <FileText className="w-8 h-8 text-blue-400 mb-4" />
              <h2 className="text-2xl font-black mb-3">
                Find the set-aside contracts you&apos;re most likely to win
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                CapturePilot maps every SAM.gov opportunity to the thresholds, set-aside types,
                and certifications that match your profile. Start your free trial and see exactly
                which mandatory set-aside and sole source opportunities exist in your NAICS codes
                right now.
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
                  href: "/blog/8a-sole-source-contracts",
                  title: "8(a) Sole Source Contracts",
                  desc: "How to use the sole source threshold to win contracts without competition.",
                },
                {
                  href: "/blog/set-aside-programs",
                  title: "Small Business Set-Aside Programs",
                  desc: "Every federal set-aside program explained — eligibility, strategy, and how to choose.",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  title: "Finding Government Contracts",
                  desc: "The 2026 guide to locating and qualifying for federal opportunities.",
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
