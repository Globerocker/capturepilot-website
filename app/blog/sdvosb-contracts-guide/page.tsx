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
  Users,
  FileText,
  Clock,
  Award,
  Sparkles,
  BarChart3,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-advantage", label: "The $28.6 Billion Veteran Advantage" },
  { id: "what-sdvosb-gives-you", label: "What SDVOSB Status Actually Gets You" },
  { id: "va-veterans-first", label: "VA Veterans First: Mandatory Priority" },
  { id: "sole-source", label: "Sole Source Contracts: Fastest Path to Revenue" },
  { id: "eligibility", label: "Who Qualifies for SDVOSB" },
  { id: "vetcert-certification", label: "How to Get SBA VetCert Certified" },
  { id: "finding-contracts", label: "Finding SDVOSB Contracts on SAM.gov" },
  { id: "strategy", label: "Building Your SDVOSB Strategy" },
  { id: "common-mistakes", label: "Mistakes That Cost Veterans Contracts" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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

export default function SDVOSBContractsGuidePage() {
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
            <span className="text-stone-900 font-medium">SDVOSB Contracts Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Set-Asides for Veterans
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SDVOSB Contracts:{" "}
            <span className="gradient-text">A Complete Guide for Veteran-Owned Businesses</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Service-disabled veteran-owned businesses have access to{" "}
            <strong className="text-stone-700">$28.6 billion in federal contracts</strong> — with
            a mandatory priority at the VA that no other certification can match. Here&apos;s how
            the program works, what it takes to qualify, and how to use it to build a federal
            contracting business.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 1, 2026</span>
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
            id="the-advantage"
            number="01"
            title="The $28.6 Billion Veteran Advantage"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Service-disabled veteran-owned small businesses (SDVOSBs) have a structural advantage
              in federal contracting that most veterans don&apos;t fully use. The federal government
              awarded <strong>$28.6 billion across approximately 52,000 contract actions</strong> to
              SDVOSB firms in FY2025. That&apos;s not a secondary program or a niche preference —
              it&apos;s a legal mandate with teeth.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The National Defense Authorization Act for FY2024 raised the federal SDVOSB spending
              goal from 3% to <strong>5% of all prime and subcontract dollars</strong>. That
              translated the target to over $31 billion per year. Agencies are graded against this
              goal. Contracting officers who hit their numbers keep their jobs. That&apos;s the
              pressure that works in your favor.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              FY2023 data shows the government has already reached this 5% threshold — awarding
              $31.9 billion to SDVOSBs that year, exceeding the old 3% goal by a wide margin. The
              VA, operating under its own Veterans First Contracting Program, far outpaced the
              government-wide number: it directed{" "}
              <strong>23.63% of its prime contracting dollars</strong> to SDVOSBs in FY2024.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$28.6B", label: "SDVOSB awards in FY2025", icon: DollarSign },
                { stat: "5%", label: "Federal SDVOSB spending goal", icon: Target },
                { stat: "23.6%", label: "VA prime dollars to SDVOSBs (FY2024)", icon: BarChart3 },
                { stat: "$4M", label: "Sole source threshold (services)", icon: Zap },
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
              The numbers matter — but the program&apos;s real power is structural. SDVOSB
              certification doesn&apos;t just put you in a different pool. At the Department of
              Veterans Affairs, it puts you at the top of the order of priority before any other
              set-aside type even gets considered.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="SDVOSB vs. VOSB: Know the Difference">
            There are two veteran set-asides: VOSB (Veteran-Owned Small Business) and SDVOSB
            (Service-Disabled Veteran-Owned Small Business). SDVOSB requires a VA service-connected
            disability rating; VOSB does not. At the VA, SDVOSBs get priority over VOSBs —
            contracting officers check SDVOSB availability first, then VOSB, then other set-asides.
            If you qualify for SDVOSB, always pursue that certification. Never settle for VOSB
            alone if you&apos;re service-disabled.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="what-sdvosb-gives-you"
            number="02"
            title="What SDVOSB Status Actually Gets You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SDVOSB certification opens three distinct doors that general small business status
              doesn&apos;t. Understanding each one determines how you build your contracting
              strategy.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Shield,
                  title: "SDVOSB Set-Aside Competitions",
                  desc: "When a contracting officer reasonably expects two or more SDVOSB firms can perform the work at a fair price, the contract must be set aside exclusively for SDVOSBs. You&apos;re competing against other small veteran firms — not Leidos, SAIC, or general small businesses with decades of past performance. A set-aside pool of 5-10 firms beats a full-and-open pool of 50+ every time.",
                },
                {
                  icon: DollarSign,
                  title: "Sole Source Awards (No Competition Required)",
                  desc: "If a contracting officer can&apos;t find two SDVOSB firms for a requirement — or if the dollar value is under the sole source threshold — they can award directly to your company without any competitive bidding. This is how many SDVOSB firms land their first significant contract. One relationship with one contracting officer can produce a direct award without a single competitor.",
                },
                {
                  icon: TrendingUp,
                  title: "VA Veterans First Priority Position",
                  desc: "The Department of Veterans Affairs is legally required to prioritize SDVOSBs above all other set-aside types. Before a VA contracting officer can run a WOSB set-aside, an 8(a) award, or a general small business competition, they must first determine whether SDVOSB firms are available to do the work. The VA spent over $23 billion in contracts in FY2024 — and you have first priority on all of it.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Compare this to competing without set-aside status, where you&apos;re evaluated
              purely on price and past performance against any firm that can do the work. SDVOSB
              certification doesn&apos;t eliminate competition — but it dramatically narrows the
              field and creates direct-award pathways that simply don&apos;t exist for non-certified
              businesses.
            </p>
            <p className="text-stone-600 leading-relaxed">
              SDVOSB status also stacks with other certifications. An 8(a) SDVOSB has access to
              both programs. A HUBZone SDVOSB can compete in either pool. Combining certifications
              expands your accessible contract universe significantly. Use{" "}
              <Link
                href="/features/quick-checker"
                className="text-blue-700 underline font-medium"
              >
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to see all the set-asides you currently qualify for.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <Shield className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Check Your SDVOSB Eligibility
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Answer a few questions about your business and service history. Our Quick Checker
              tells you which certifications you likely qualify for — in under 3 minutes.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">Free, no account required</p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="va-veterans-first"
            number="03"
            title="VA Veterans First: The Mandatory Priority Rule"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The VA&apos;s Veterans First Contracting Program is unlike any other agency
              preference in federal procurement. It&apos;s not a goal or a preference —
              it&apos;s a mandatory ordering rule. VA contracting officers must follow it for every
              single contract action.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The order of priority works like this: SDVOSB first, VOSB second, then other small
              business set-asides (8(a), HUBZone, WOSB), and finally full-and-open competition. At
              every step, the contracting officer must determine that the current tier cannot
              satisfy the requirement before moving to the next. You can&apos;t skip SDVOSB just
              because the program office prefers a specific incumbent.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Priority</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Set-Aside Type</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Trigger Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        priority: "1st",
                        type: "SDVOSB",
                        condition: "2+ SDVOSB firms available; fair and reasonable price expected",
                      },
                      {
                        priority: "2nd",
                        type: "VOSB",
                        condition: "No SDVOSB set-aside feasible; 2+ VOSB firms available",
                      },
                      {
                        priority: "3rd",
                        type: "8(a), HUBZone, WOSB, SB",
                        condition: "No veteran set-aside feasible; other SB preferences apply",
                      },
                      {
                        priority: "4th",
                        type: "Full and Open Competition",
                        condition: "No small business set-aside feasible",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i === 0 ? "bg-blue-50" : "hover:bg-stone-50"
                        }`}
                      >
                        <td className="px-5 py-3 font-bold text-blue-700 text-sm">{row.priority}</td>
                        <td className="px-5 py-3 font-medium text-stone-800">{row.type}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-snug">{row.condition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              This rule applies to all VA contract actions — above and below the Simplified
              Acquisition Threshold. It applies even when the VA wants to use a different
              preference (like an 8(a) set-aside): if SDVOSB firms can do the work, SDVOSB
              gets first priority.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The practical implication: focus your VA pursuit strategy on requirements where you
              can demonstrate capability. SDVOSBs don&apos;t win VA contracts by virtue of
              certification alone. The contracting officer still needs to believe your firm can
              perform — which means you need relevant past performance, a strong capability
              statement, and relationships with VA program offices before any solicitation drops.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Also worth knowing: GAO has ruled that SDVOSB eligibility must exist at the time
              of award, not just at the time of offer. If your certification lapses between
              proposal submission and contract award, you can be found ineligible. Keep your
              certification current.
            </p>
          </div>

          <Callout icon={Star} color="emerald" title="The VA Is the Single Best Agency for SDVOSB Firms">
            The VA runs the largest veteran-specific procurement program in the government. In
            FY2024, the VA awarded 23.63% of its prime contracting dollars to SDVOSBs — versus
            5.14% government-wide. For IT services, healthcare support, facilities management,
            and professional services, the VA is often the highest-return agency for SDVOSB firms
            to pursue. Use{" "}
            <Link href="/features/intelligence" className="underline font-medium">
              CapturePilot&apos;s agency intelligence
            </Link>{" "}
            to find active VA buyers in your NAICS code.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="sole-source"
            number="04"
            title="Sole Source Contracts: Your Fastest Path to Revenue"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Sole source contracts are the least understood — and most underused — benefit of
              SDVOSB certification. A sole source award is exactly what it sounds like: the
              government awards a contract to your company without competing against anyone else.
              No proposal battle. No best-value evaluation. One contracting officer decides your
              firm can do the work, justifies the award, and signs the contract.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For civilian agencies, the current FAR 19.1406 thresholds for SDVOSB sole source
              awards are:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  label: "Services & Most Other Contracts",
                  threshold: "$4 million",
                  desc: "Applies to professional services, IT, consulting, and all non-manufacturing NAICS codes",
                },
                {
                  label: "Manufacturing Contracts",
                  threshold: "$7 million",
                  desc: "Applies to NAICS codes classified as manufacturing — higher threshold reflects production costs",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-stone-200 bg-stone-50 animate-on-scroll"
                >
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-3xl font-black text-blue-700 mb-2">{item.threshold}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Four conditions must be met for a CO to issue an SDVOSB sole source award: (1) the
              anticipated award price falls within the thresholds above, (2) the CO does not
              reasonably expect offers from two or more SDVOSB firms, (3) the requirement
              isn&apos;t currently in an active 8(a) program award, and (4) your firm is
              determined to be a responsible contractor for the work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Sole source isn&apos;t passive. A contracting officer who has never heard of your
              firm won&apos;t sole source to you. The path to a sole source award runs through
              relationship-building: responding to Sources Sought notices in your NAICS, attending
              agency industry days, submitting your{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-700 underline font-medium"
              >
                capability statement
              </Link>{" "}
              to OSDBU offices, and visiting program offices before any solicitation exists. When
              the requirement comes up and no clear competition exists, your name needs to be
              the one the contracting officer already knows.
            </p>
            <p className="text-stone-600 leading-relaxed">
              A 2025 FAR update also removed a prior restriction: SDVOSB sole source awards can
              now be made even for requirements currently being performed by 8(a) contractors. That
              expands the universe of potential sole source opportunities significantly — especially
              for firms with existing relationships in agencies that heavily use 8(a) awards.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Sole Source Is Not Guaranteed — It's Earned">
            The threshold doesn&apos;t entitle you to a sole source award. It just allows one if
            other conditions are met. The contracting officer still must justify the award in
            writing. Your job is to be the known, capable, verified SDVOSB firm when a
            requirement arises — which means building the relationship well before the contract
            becomes a contract. Sources Sought responses and capability statement outreach are how
            you build that position. See our guide on{" "}
            <Link href="/blog/sources-sought-notice" className="underline font-medium">
              responding to Sources Sought notices
            </Link>{" "}
            for the exact approach.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="eligibility"
            number="05"
            title="Who Qualifies for SDVOSB"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SDVOSB eligibility under the SBA&apos;s VetCert program has four core requirements.
              All must be satisfied simultaneously — meeting three out of four doesn&apos;t get you
              through.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Service-connected disability rating",
                  desc: "At least one owner must have a service-connected disability as documented by the Department of Veterans Affairs. Any rating qualifies — including 0%. There is no minimum disability percentage. What matters is that the VA has determined a service connection exists.",
                },
                {
                  step: "02",
                  title: "51% or more veteran ownership",
                  desc: "Service-disabled veteran(s) must own at least 51% of the business, unconditionally and directly. This means no structures where ownership is contingent on future events, pledged as collateral, or held through an entity the veteran doesn't control.",
                },
                {
                  step: "03",
                  title: "Day-to-day management and control",
                  desc: "The service-disabled veteran must manage the daily operations and long-term decisions of the firm. The veteran must hold the highest officer position in the company (President, CEO, or equivalent). Non-veteran managers can run operations, but the veteran must hold genuine control — not just a title on paper.",
                },
                {
                  step: "04",
                  title: "Small business under SBA size standards",
                  desc: "Your firm must qualify as small under the SBA size standard for your primary NAICS code in SAM.gov. Size is typically measured by average annual receipts over the past 3 years or by employee count, depending on the industry. Confirm your size status at the SBA size standards tool before applying.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              A few nuances worth knowing. For businesses with multiple owners, all service-disabled
              veteran owners&apos; interests are combined to reach the 51% threshold —
              you don&apos;t need one single veteran to own the majority alone. Additionally,
              the disability must be documented by the VA; a private physician diagnosis alone
              doesn&apos;t qualify.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Corporate structure matters too. Veteran ownership of the holding company doesn&apos;t
              automatically qualify a subsidiary. Each entity seeking certification must independently
              meet the 51% ownership and control requirements. If your business structure is complex,
              consult a GovCon attorney before applying — the SBA reviews ownership documents
              carefully and will deny applications where control structures are ambiguous.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="0% Disability Rating Still Qualifies">
            Many veterans don&apos;t pursue SDVOSB certification because they assume their
            disability rating is &quot;too low.&quot; That&apos;s wrong. Any service-connected
            disability rating — including 0% — qualifies your business for SDVOSB certification.
            The VA awards 0% ratings when a service connection is established but the disability
            isn&apos;t currently impairing function. That&apos;s still a valid service-connected
            disability for SDVOSB purposes. If you&apos;ve served and have a VA-documented
            condition, don&apos;t assume you&apos;re out. Check your eligibility.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="vetcert-certification"
            number="06"
            title="How to Get SBA VetCert Certified"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Self-certification for SDVOSB is gone. As of August 5, 2024, the SBA issued a
              direct final rule eliminating the ability to self-certify. Every SDVOSB and VOSB
              seeking federal contracts must now be certified through the{" "}
              <strong>SBA&apos;s VetCert program</strong> at{" "}
              <a
                href="https://veterans.certify.sba.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                veterans.certify.sba.gov
              </a>
              . Claiming SDVOSB status without VetCert certification can expose your firm to
              False Claims Act liability.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The good news: as of late 2025, the SBA cleared its VetCert backlog. Processing
              times are now averaging{" "}
              <strong>12 days</strong> — down from 60-90 days that was typical throughout most of
              2024. The application is free and can be completed online.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Verify your prerequisites",
                  desc: "Confirm active SAM.gov registration with an accurate NAICS code list. Your SAM profile must reflect your primary NAICS codes — the VetCert portal pulls from it automatically. Resolve any outstanding federal tax liens or loan defaults before applying; unresolved issues will hold up approval.",
                },
                {
                  step: "02",
                  title: "Gather your documentation",
                  desc: "You&apos;ll need VA disability rating letter (any rating), proof of citizenship for all veteran owners, business ownership documents (articles of incorporation or operating agreement), and proof of the veteran&apos;s management role. The SBA reviews these thoroughly.",
                },
                {
                  step: "03",
                  title: "Create your VetCert account",
                  desc: "Go to veterans.certify.sba.gov and create an account using login.gov. The portal imports relevant information from your VA records and SAM.gov profile. You&apos;ll link your SAM.gov entity and VA disability documentation through the portal.",
                },
                {
                  step: "04",
                  title: "Complete and submit the application",
                  desc: "The application asks about ownership structure, management control, business history, and financial status. Answer everything precisely. Ambiguous responses on ownership and control are the most common cause of denials. The application is free — you pay no SBA fee.",
                },
                {
                  step: "05",
                  title: "Await determination",
                  desc: "With current processing times averaging 12 days, expect notification within two weeks. Approval is reflected in your SAM.gov profile and the certification becomes visible to contracting officers immediately. Certifications are valid for 3 years and must be renewed before expiration.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If your application is denied, the SBA will issue a written denial letter explaining
              the reasons. You have 6 business days to request reconsideration after receiving the
              denial. If reconsideration is denied, you can appeal to the SBA&apos;s Office of
              Hearings and Appeals. Keep denial letters and understand the specific deficiency
              before reapplying — applications with the same structural problem will be denied
              again.
            </p>
            <p className="text-stone-600 leading-relaxed">
              SBA contacts for VetCert: <strong>800-862-8088</strong> (M–F, 8 AM–6 PM ET).
              The SBA also operates veteran business outreach centers (VBOCs) with free
              assistance for certification applications — find yours on the SBA website.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="finding-contracts"
            number="07"
            title="Finding SDVOSB Contracts on SAM.gov"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov is where all federal solicitations above $25,000 are posted. Once your VetCert
              certification is active, you can filter directly for SDVOSB set-aside opportunities.
              Here&apos;s how to use it strategically rather than as a fire hose.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">SAM.gov Filter</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What to Set</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        filter: "Set-Aside Type",
                        value: "Service-Disabled Veteran-Owned Small Business",
                        why: "Limits results to SDVOSB-specific competitions — removes all full-and-open and other set-aside types",
                      },
                      {
                        filter: "NAICS Code",
                        value: "Your primary 2-4 codes",
                        why: "NAICS defines both eligibility and small business size standard for each contract",
                      },
                      {
                        filter: "Notice Type",
                        value: "Sources Sought, Presolicitation first; then Solicitation",
                        why: "Earlier notices give you time to build relationships before competition begins",
                      },
                      {
                        filter: "Agency",
                        value: "Department of Veterans Affairs",
                        why: "VA has highest SDVOSB concentration — 23.6% of prime dollars — making it the most target-dense agency",
                      },
                      {
                        filter: "Place of Performance",
                        value: "Your state or region",
                        why: "Services and facilities work often favor local vendors with mobilization capability",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-medium text-stone-800">{row.filter}</td>
                        <td className="px-5 py-3 text-blue-700 font-medium text-xs">{row.value}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-snug">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Don&apos;t limit your search to open solicitations. Award notices are intelligence.
              Search SAM.gov award notices for your NAICS code + SDVOSB set-aside type and
              you&apos;ll see which firms are winning, at what contract values, with what
              durations, at which agencies. That&apos;s the competitive landscape you&apos;re
              entering.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Also search USASpending.gov with the same filters. You can identify specific
              contract vehicles (IDIQ task orders, BPAs) set aside for SDVOSBs and see when
              base contracts are up for recompete — giving you 12-24 months of advance
              notice on upcoming opportunities. Our{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline font-medium"
              >
                CapturePilot Intelligence
              </Link>{" "}
              automates this incumbent and recompete analysis so you don&apos;t spend hours
              doing it manually.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For the VA specifically, also check the VA Office of Small and Disadvantaged
              Business Utilization (OSDBU) website. The VA publishes a procurement forecast
              of upcoming contracts, organized by medical center and service line. IT and
              healthcare support contracts often appear on VA forecasts months before SAM.gov
              postings. Getting there first means you can shape relationships before any
              competition begins.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">Find SDVOSB Contracts Built for Your Business</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot matches your NAICS codes and SDVOSB certification against SAM.gov daily
              — surfacing the set-asides most likely to be winnable for your specific profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="bg-transparent text-white border border-stone-600 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Strategy Call
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-4">No credit card required for the free trial.</p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="strategy"
            number="08"
            title="Building Your SDVOSB Strategy"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Certification is the starting point, not the destination. Plenty of SDVOSB firms
              have their VetCert and still lose every bid they submit. The certification earns you
              access to the right pool. How you operate within that pool determines whether you win.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Building2,
                  title: "Pick 2-3 Agencies and Go Deep",
                  desc: "Spreading your effort across 10 agencies produces thin relationships everywhere. Pick the 2-3 agencies that spend the most in your NAICS code — often the VA, DoD, or DHS — and build genuine relationships with their OSDBU offices, program managers, and contracting officers. Contracting officers award sole source contracts to firms they know and trust. That trust takes time to build.",
                },
                {
                  icon: FileText,
                  title: "Respond to Every Sources Sought in Your NAICS",
                  desc: "Sources Sought notices are the single highest-leverage activity in SDVOSB contracting. When you respond with a strong capability statement, you get on the contracting officer's radar before any competition exists. You can shape the eventual RFP requirements. And if the CO determines only your firm can do the work at that dollar threshold, you may get a sole source award without ever competing. Read our guide on how to respond effectively.",
                },
                {
                  icon: Users,
                  title: "Use Teaming to Bridge Past Performance Gaps",
                  desc: "Past performance is the biggest obstacle for newer SDVOSB firms. Teaming with a larger prime as a subcontractor — or with other certified small businesses through an SBA-approved mentor-protégé arrangement — lets you pursue contracts above your current past performance level. The government expects mentoring relationships between experienced firms and newer SDVOSBs. Use them.",
                },
                {
                  icon: Award,
                  title: "Track Your Recompetes",
                  desc: "Most federal contracts run 5 years (base + options). The single best opportunity you can pursue is an expiring contract in your NAICS code at an agency you know. The incumbent has past performance but is vulnerable to a competitive challenge. A targeted, well-researched bid on a recompeting SDVOSB contract — with agency relationships built during the base period — wins at significantly higher rates than cold bids on new requirements.",
                },
                {
                  icon: TrendingUp,
                  title: "Pursue a GSA Schedule in Parallel",
                  desc: "A GSA Schedule doesn't conflict with SDVOSB status — it expands your reach. GSA eBuy allows schedule holders to receive SDVOSB-set-aside RFQs directly. Many VA and DoD purchases go through GSA Schedule vehicles with SDVOSB set-aside designations. Getting on schedule takes 3-6 months but dramatically increases your visibility to buyers who never search SAM.gov contract opportunities.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Your{" "}
              <Link
                href="/features/pipeline"
                className="text-blue-700 underline font-medium"
              >
                capture pipeline
              </Link>{" "}
              should track not just open solicitations but also Sources Sought responses, agency
              relationship touchpoints, and recompete timelines. Winning SDVOSB firms treat
              contracting as a long-cycle sales process — not a reactive bid response operation.
              Our{" "}
              <Link
                href="/blog/capture-management-process"
                className="text-blue-700 underline font-medium"
              >
                capture management guide
              </Link>{" "}
              walks through the full process.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="common-mistakes"
            number="09"
            title="Mistakes That Cost Veterans Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              SDVOSB certification is valuable enough that the government and courts scrutinize it
              carefully. The following mistakes range from costly to potentially catastrophic.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: AlertTriangle,
                  color: "red" as const,
                  title: "Self-certifying after August 2024",
                  desc: "Self-certification was eliminated as of August 5, 2024. Claiming SDVOSB status on a proposal without a valid VetCert certification can constitute fraud — specifically, making a false statement in a federal contract proposal. The consequences include disqualification, debarment, and potential False Claims Act liability. No exceptions. If you don't have VetCert, you cannot legally claim SDVOSB status.",
                },
                {
                  icon: AlertTriangle,
                  color: "amber" as const,
                  title: "Letting VetCert certification expire",
                  desc: "VetCert certifications are valid for 3 years. GAO has ruled that SDVOSB eligibility must exist at award — not just at proposal. If your certification expires between submission and award, you can be found ineligible even if you were the apparent low offeror. Set reminders 90 days before your expiration date and submit for recertification during the allowed window.",
                },
                {
                  icon: AlertTriangle,
                  color: "red" as const,
                  title: "Veteran ownership on paper only",
                  desc: "The SBA conducts site visits and reviews employment records when evaluating SDVOSB applications. A veteran who holds 51% ownership but has no day-to-day role in the business — while a non-veteran manager runs operations — will fail the control test. Ownership must be genuine and the veteran must actually direct the firm. Arrangements designed to create the appearance of veteran control without the substance will be identified and denied.",
                },
                {
                  icon: AlertTriangle,
                  color: "amber" as const,
                  title: "Bidding on VA contracts without checking Veterans First priority",
                  desc: "Some SDVOSB firms bid on VA contracts listed as full-and-open, not realizing the contracting officer may have skipped the Veterans First priority check improperly. If a VA contract is full-and-open in a NAICS code where you and one other SDVOSB can compete, you have grounds for a bid protest — and the protest process can produce a re-procurement under SDVOSB rules. Know the Veterans First rules; they protect your position.",
                },
                {
                  icon: AlertTriangle,
                  color: "red" as const,
                  title: "No capability statement ready",
                  desc: "Contracting officers ask for capability statements before a solicitation ever exists — at OSDBU meetings, industry days, and Sources Sought responses. An SDVOSB with a weak or missing capability statement loses these pre-competition conversations. A focused one-pager that highlights your relevant past performance, certifications, NAICS codes, and unique differentiators is what opens the door to sole source conversations. Build yours now using CapturePilot's generator.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border animate-on-scroll ${
                    item.color === "red"
                      ? "border-red-200 bg-red-50"
                      : "border-amber-200 bg-amber-50"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.color === "red"
                        ? "bg-red-100 text-red-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p
                      className={`font-bold text-sm mb-1 ${
                        item.color === "red" ? "text-red-900" : "text-amber-900"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.color === "red" ? "text-red-800" : "text-amber-800"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              For a complete pre-bid process, download our{" "}
              <Link
                href="/resources/bid-checklist"
                className="text-blue-700 underline font-medium"
              >
                Bid Checklist
              </Link>{" "}
              and see{" "}
              <Link
                href="/blog/government-contract-win-rate"
                className="text-blue-700 underline font-medium"
              >
                our guide on improving your government contract win rate
              </Link>
              .
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Your SDVOSB Certification Deserves a Real Strategy
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot identifies the highest-probability SDVOSB set-asides for your
                business — filtered by your NAICS codes, certifications, and target agencies.
                Stop leaving veteran set-asides on the table.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily SDVOSB set-aside matching tailored to your profile",
                  "VA Veterans First opportunity filtering",
                  "Incumbent recompete tracking and sole source alerts",
                  "Pipeline management from Sources Sought to award",
                  "Capability statement generator built for veteran-owned firms",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={SIGNUP_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">No credit card required. Cancel any time.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  icon: Target,
                  title: "Find Government Contracts",
                  desc: "SAM.gov search strategies and pipeline building",
                },
                {
                  href: "/blog/sources-sought-notice",
                  icon: FileText,
                  title: "Sources Sought Notices",
                  desc: "How to respond and shape the RFP before competition starts",
                },
                {
                  href: "/blog/va-contracts-guide",
                  icon: Building2,
                  title: "VA Contracts Guide",
                  desc: "Winning work with the Department of Veterans Affairs",
                },
                {
                  href: "/blog/capability-statement-examples",
                  icon: Star,
                  title: "Capability Statement Examples",
                  desc: "What good and bad capability statements look like",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{link.title}</p>
                    <p className="text-xs text-stone-500">{link.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
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
