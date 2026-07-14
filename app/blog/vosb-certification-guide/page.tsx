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
  BarChart3,
  Medal,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "va-opportunity", label: "The VA Opportunity: $10.2 Billion in FY2024" },
  { id: "vosb-vs-sdvosb", label: "VOSB vs. SDVOSB: Know the Difference" },
  { id: "who-qualifies", label: "Who Qualifies for VOSB Certification" },
  { id: "vets-first", label: "VA Veterans First: How Priority Works" },
  { id: "what-you-get", label: "What VOSB Certification Actually Gets You" },
  { id: "certification-process", label: "How to Get SBA VetCert Certified" },
  { id: "finding-contracts", label: "Finding VOSB Contracts at the VA" },
  { id: "vosb-strategy", label: "Building a VOSB Contracting Strategy" },
  { id: "common-mistakes", label: "Mistakes That Kill VOSB Bids" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function VOSBCertificationGuidePage() {
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
            <span className="text-stone-900 font-medium">VOSB Certification Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Medal className="w-4 h-4" /> Set-Asides for Veterans
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            VOSB Certification:{" "}
            <span className="gradient-text">How Veteran-Owned Businesses Access Federal Contracts</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Veteran-owned small businesses have a dedicated lane at the Department of Veterans
            Affairs — one of the federal government&apos;s largest buyers.{" "}
            <strong className="text-stone-700">VOSB certification through SBA VetCert</strong> is
            the key that unlocks it. Here&apos;s exactly what VOSB status gets you, who qualifies,
            and how to build a real contracting strategy around it.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 14, 2026</span>
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
            id="va-opportunity"
            number="01"
            title="The VA Opportunity: $10.2 Billion in FY2024"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Department of Veterans Affairs is not a niche agency. It runs one of the largest
              federal procurement budgets in the country — and it is legally required to direct a
              substantial portion of that spending to veteran-owned firms. In FY2024, the VA directed{" "}
              <strong>$10.2 billion in prime contract dollars to SDVOSBs alone</strong>, representing
              23% of its total prime contracting spend. That&apos;s more than the entire annual
              procurement budgets of most federal agencies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              VOSBs — veteran-owned small businesses without a service-connected disability — sit at
              the second tier of the VA&apos;s Veterans First Contracting Program. When contracting
              officers cannot find enough SDVOSB firms for a requirement, they must turn to VOSB
              firms before considering any other small business set-aside. That&apos;s not a
              preference — it&apos;s a statutory requirement under 38 U.S.C. § 8127.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The VA also maintains an internal goal to award at least{" "}
              <strong>7% of all contract dollars to VOSBs and SDVOSBs combined</strong>. In recent
              years it has blown past that threshold. For a veteran business without a disability
              rating, VOSB certification is the most direct path to accessing this market.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$10.2B", label: "VA prime contracts to SDVOSBs (FY2024)", icon: DollarSign },
                { stat: "23%", label: "VA prime dollars to SDVOSBs (FY2024)", icon: BarChart3 },
                { stat: "7%+", label: "VA VOSB+SDVOSB combined goal", icon: Target },
                { stat: "12 days", label: "SBA VetCert processing time (2025)", icon: Clock },
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
              The opportunity is real and documented. But none of it is accessible without SBA
              VetCert certification. Since January 1, 2023, self-certification is gone. You either
              have the credential or you don&apos;t — and without it, claiming VOSB status on a
              federal bid is a compliance violation.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="Already service-disabled? Read this first.">
            If you have any VA service-connected disability rating — including 0% — you qualify for{" "}
            <strong>SDVOSB certification</strong>, which is stronger than VOSB. SDVOSB gives you
            government-wide set-asides, the top priority position at the VA, and higher sole-source
            authority. A single VetCert application can certify you for both SDVOSB and VOSB
            simultaneously. If you qualify for SDVOSB, pursue that — never settle for VOSB alone.
            See our{" "}
            <Link href="/blog/sdvosb-contracts-guide" className="underline font-medium">
              complete SDVOSB guide
            </Link>{" "}
            for the full picture.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="vosb-vs-sdvosb"
            number="02"
            title="VOSB vs. SDVOSB: Know the Difference"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The two veteran set-aside programs are closely related but not interchangeable.
              Understanding where they diverge determines which opportunities you can actually pursue.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">VOSB</th>
                    <th className="text-left p-4 rounded-tr-xl font-semibold">SDVOSB</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Who qualifies",
                      vosb: "Any honorably discharged veteran",
                      sdvosb: "Veterans with VA service-connected disability (any rating)",
                    },
                    {
                      feature: "Certification body",
                      vosb: "SBA VetCert (since Jan 2023)",
                      sdvosb: "SBA VetCert (since Jan 2023)",
                    },
                    {
                      feature: "Set-asides available",
                      vosb: "VA only (Vets First program)",
                      sdvosb: "VA + government-wide",
                    },
                    {
                      feature: "Priority at VA",
                      vosb: "Second (after SDVOSB)",
                      sdvosb: "First (highest priority)",
                    },
                    {
                      feature: "Sole-source authority",
                      vosb: "VA contracts only",
                      sdvosb: "Government-wide, up to $4M services / $7M manufacturing",
                    },
                    {
                      feature: "Federal spending goal",
                      vosb: "None (VA-internal 7% combined goal)",
                      sdvosb: "5% of all federal prime/subcontract dollars",
                    },
                    {
                      feature: "Certification duration",
                      vosb: "3 years",
                      sdvosb: "3 years",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="p-4 font-medium text-stone-800 border-b border-stone-100">
                        {row.feature}
                      </td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.vosb}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.sdvosb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The practical takeaway: SDVOSB is the more powerful certification in almost every
              dimension. But VOSB is a meaningful program for the majority of veterans — roughly
              90% of the 18 million U.S. veterans have no VA disability rating at all. For those
              businesses, VOSB provides a real and documented contracting advantage at one of the
              federal government&apos;s top agencies.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The VA buys construction, healthcare services, IT, staffing, maintenance, professional
              services, security, janitorial, and logistics at scale. If your business operates in
              any of these sectors,{" "}
              <Link
                href="/blog/va-contracts-guide"
                className="text-blue-700 underline font-medium"
              >
                the VA contract market
              </Link>{" "}
              is worth pursuing — and VOSB certification is the fastest way in.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="who-qualifies"
            number="03"
            title="Who Qualifies for VOSB Certification"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The SBA&apos;s eligibility rules for VOSB certification are set out in 13 CFR Part
              128. Every box below must be checked before you apply — a missing requirement will
              result in a denial, and you&apos;ll need to reapply after correcting the issue.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Medal,
                  title: "Veteran status",
                  desc: "At least one owner must be a veteran of the U.S. military, naval, or air service who was discharged or released under conditions other than dishonorable. Reserve and National Guard members who served on active duty under a call or order to active duty also qualify.",
                },
                {
                  icon: Users,
                  title: "51% unconditional ownership",
                  desc: "One or more veterans must unconditionally own at least 51% of the business. \"Unconditional\" is key — ownership cannot be subject to conditions, rights of first refusal, put options, or other arrangements that limit full ownership rights. Ownership through a holding company or trust generally does not qualify unless structured to meet SBA requirements.",
                },
                {
                  icon: Target,
                  title: "Control of daily operations",
                  desc: "The veteran owner(s) must control the management and daily operations of the business. The highest-ranking officer position must be held by a veteran. This is where applications most often fail: a veteran who owns 51% but lets a non-veteran spouse or business partner run the company will be denied.",
                },
                {
                  icon: Building2,
                  title: "SBA small business size standards",
                  desc: "Your business must qualify as small under the SBA size standard for each NAICS code in your SAM.gov profile. Size is measured by either annual revenue or number of employees depending on the industry. Use the SBA's size standards table or run your NAICS codes through a quick check to confirm eligibility.",
                },
                {
                  icon: FileText,
                  title: "Active SAM.gov registration",
                  desc: "You must be registered and active in SAM.gov before applying. The SBA will verify your registration. If your SAM.gov profile has expired or has errors, fix those first — certification applications are reviewed against your active profile.",
                },
                {
                  icon: CheckCircle2,
                  title: "No unresolved federal tax liens or loan defaults",
                  desc: "Federal debts in default or unresolved tax liens are disqualifying. If you have federal loan defaults or tax issues, you must be on an approved repayment plan before applying. The SBA runs a federal financial check during review.",
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
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One requirement that trips up a lot of applicants: the veteran must control the{" "}
              <em>highest officer position</em>. If your business is a corporation, the veteran must
              be the CEO or President. If it&apos;s an LLC, the veteran must be the Managing Member.
              A veteran CFO or COO doesn&apos;t satisfy this requirement — the top role has to be
              theirs.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Not sure whether you qualify? CapturePilot&apos;s{" "}
              <Link href="/features/quick-checker" className="text-blue-700 underline font-medium">
                Quick Checker
              </Link>{" "}
              walks through your eligibility before you invest time in a full application.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Check your VOSB eligibility in 2 minutes</h3>
                <p className="text-blue-100 text-sm">
                  Run your business through the Quick Checker — it maps your veteran status, size
                  standard, and NAICS codes against current certification rules and tells you exactly
                  where you stand.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="vets-first"
            number="04"
            title="VA Veterans First: How Priority Works"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The VA Veterans First Contracting Program (VAAR Subpart 819.70) establishes a
              mandatory priority order that every VA contracting officer must follow. This is not
              optional guidance — it&apos;s statute. When the VA is buying anything, the contracting
              officer must work through this hierarchy from the top down:
            </p>

            <div className="my-8 space-y-3">
              {[
                {
                  rank: "1st",
                  label: "SDVOSB",
                  desc: "Service-disabled veteran-owned small business set-aside. The contracting officer must first determine whether at least two SDVOSB firms can do the work at a fair price.",
                  color: "bg-emerald-500",
                  textColor: "text-emerald-700",
                  bgColor: "bg-emerald-50 border-emerald-200",
                },
                {
                  rank: "2nd",
                  label: "VOSB",
                  desc: "If fewer than two SDVOSBs are available, the officer moves to VOSB. Same rule: two or more VOSBs at a fair price means a VOSB set-aside competition.",
                  color: "bg-blue-500",
                  textColor: "text-blue-700",
                  bgColor: "bg-blue-50 border-blue-200",
                },
                {
                  rank: "3rd",
                  label: "Other small business set-asides",
                  desc: "Only after exhausting SDVOSB and VOSB options can the officer consider 8(a), HUBZone, WOSB, or general small business set-asides.",
                  color: "bg-stone-400",
                  textColor: "text-stone-600",
                  bgColor: "bg-stone-50 border-stone-200",
                },
                {
                  rank: "4th",
                  label: "Full-and-open competition",
                  desc: "Large businesses and unrestricted competition only after all small business set-asides fail.",
                  color: "bg-stone-300",
                  textColor: "text-stone-500",
                  bgColor: "bg-stone-50 border-stone-100",
                },
              ].map((tier, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border ${tier.bgColor} animate-on-scroll`}
                >
                  <div className={`w-10 h-10 rounded-full ${tier.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-black text-xs">{tier.rank}</span>
                  </div>
                  <div>
                    <p className={`font-bold text-sm mb-1 ${tier.textColor}`}>{tier.label}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The implication: VOSB certification puts you ahead of every other small business
              set-aside at the VA. 8(a) firms, HUBZone companies, WOSBs — they all sit below you
              in the priority order. That&apos;s a structural advantage that certification makes
              possible and non-certification leaves on the table.
            </p>
            <p className="text-stone-600 leading-relaxed">
              This priority also shapes sole-source awards. If a VA contracting officer needs to
              award a contract quickly — under the applicable threshold, with no time for competition
              — they must first look for an SDVOSB, then a VOSB, before considering anyone else.
              Being on the VA&apos;s radar as a certified VOSB puts you in the conversation for
              those direct awards.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="The rule of two applies at the VA too">
            At the VA, a set-aside is required when the contracting officer has a &ldquo;reasonable
            expectation&rdquo; of receiving offers from at least two eligible firms at a fair market
            price. This is the same &ldquo;rule of two&rdquo; that applies elsewhere in federal
            procurement. The difference: the VA runs through SDVOSB first, VOSB second. So if
            you&apos;re one of two available VOSB firms for a particular requirement, you&apos;re
            competing in a two-firm VOSB set-aside — not against the entire small business world.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="what-you-get"
            number="05"
            title="What VOSB Certification Actually Gets You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Certification opens three specific doors. Understanding each one is what separates a
              reactive bidder from a contractor who works the program deliberately.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Shield,
                  title: "VOSB set-aside competitions at the VA",
                  desc: "When the VA runs a VOSB set-aside, your competition is only other certified veteran-owned small businesses. The pool is smaller, the context is more favorable, and the contracting officer has a legal obligation to try to fill the requirement here before moving to other set-asides. This is the core benefit — access to a restricted competition.",
                },
                {
                  icon: Zap,
                  title: "Sole-source contract awards",
                  desc: "If the VA cannot identify two VOSB firms for a requirement, or if the acquisition falls below the applicable sole-source threshold, the contracting officer can award directly to a single VOSB without competition. One good relationship with one VA contracting officer or program office can turn into a direct contract award without ever writing a competitive proposal. That is how many VOSB firms land their first VA contract.",
                },
                {
                  icon: TrendingUp,
                  title: "Subcontracting count toward VA goals",
                  desc: "Large prime contractors who hold VA contracts are required to include small business subcontracting plans. VOSB subcontractors count specifically toward the VA's veteran-owned goals — which prime contractors are motivated to hit. This creates a parallel path: get on a prime's teaming list as a certified VOSB and let them bring you into VA work without you holding the prime contract yourself.",
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
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              There is one significant limitation that VOSB applicants must understand clearly: VOSB
              status does not create set-aside eligibility outside the VA. Government-wide SDVOSB
              set-asides at DoD, DHS, HHS, or any other agency are not available to VOSB-only firms.
              If you want federal contracting opportunities beyond the VA, you need SDVOSB
              certification — which requires a documented VA disability rating.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For businesses focused on the VA market — healthcare staffing, medical supplies,
              IT systems, construction and maintenance at VA facilities, prosthetics, or mental
              health services — VOSB is a potent program on its own. The VA&apos;s FY2024 spending
              of over{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-700 underline font-medium">
                $50 billion in contracts
              </Link>{" "}
              gives a VOSB firm plenty of target market to work with.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="certification-process"
            number="06"
            title="How to Get SBA VetCert Certified"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Since January 1, 2023, all VOSB and SDVOSB certifications are handled by the SBA
              through its VetCert program — not the VA&apos;s former Center for Verification and
              Evaluation (CVE). The process is free and entirely online. Here&apos;s the step-by-step.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Register in SAM.gov first",
                  desc: "Your SAM.gov registration must be active before applying. Verify your entity registration is current, your NAICS codes are accurate, and your small business size certifications are up to date. If anything is stale or incorrect, fix it before touching VetCert — the SBA pulls your SAM profile during review.",
                },
                {
                  step: "02",
                  title: "Gather your documents",
                  desc: "The SBA will need: your DD-214 or equivalent discharge documentation showing honorable discharge conditions; proof of ownership (operating agreement, articles of incorporation, stock certificates, or similar, depending on entity type); financial records for the past three years; and evidence of management control (organizational chart, employment agreements, bank signature authority). If your business has outside investors, franchise agreements, or contract arrangements, those documents will be required too.",
                },
                {
                  step: "03",
                  title: "Apply at veterans.certify.sba.gov",
                  desc: "Create or log into your account at the SBA VetCert portal. Complete the application and upload your documents. The portal walks through each requirement. Take time to answer ownership and control questions thoroughly — vague or incomplete answers are the most common cause of delays and denials.",
                },
                {
                  step: "04",
                  title: "Respond to analyst requests quickly",
                  desc: "After submission, an SBA analyst may request additional documentation or clarification. Respond within the specified timeframe (typically 14 days) or your application may be closed. Keep an eye on the email address you registered with — all communication comes through the portal.",
                },
                {
                  step: "05",
                  title: "Receive your certification",
                  desc: "As of late 2025, SBA VetCert is processing applications in an average of 12 days — down from 81 days at the end of 2024, when a backlog had built up. Once approved, your certification is valid for three years. You will appear in the VetBiz registry, which is searchable by VA contracting officers.",
                },
                {
                  step: "06",
                  title: "Recertify before expiration",
                  desc: "You must submit your recertification application within 90 days before your certification expires. Missing this window means a gap in certification status — and you cannot bid on VOSB set-asides or claim VOSB status during any gap. Set a calendar reminder 120 days before expiration so you have time to gather updated documents.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-100 bg-stone-50 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-xs">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={CheckCircle2} color="emerald" title="Documents checklist for VOSB application">
            <ul className="space-y-1 mt-1">
              {[
                "DD-214 (Certificate of Release or Discharge from Active Duty) — Member 4 copy preferred",
                "Operating agreement (LLC) or articles of incorporation + bylaws + stock ledger (corporation)",
                "Federal tax returns for the past 3 years (personal and business)",
                "Bank account signature authority documentation",
                "Any outside management contracts, franchise agreements, or investor agreements",
                "Organizational chart showing veteran in highest control position",
                "Proof of SAM.gov active registration (screenshot or UEI confirmation)",
              ].map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </Callout>

          {/* Section 7 */}
          <SectionHeading
            id="finding-contracts"
            number="07"
            title="Finding VOSB Contracts at the VA"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Once you&apos;re certified, the work is finding the right opportunities. The VA posts
              its solicitations on SAM.gov like every other federal agency, but there are a few
              additional VA-specific tools that matter.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: FileText,
                  title: "SAM.gov — filter for VA + veteran set-asides",
                  desc: "Search SAM.gov and filter by awarding agency (Department of Veterans Affairs) and set-aside type (Total VOSB Set-Aside or Total SDVOSB Set-Aside). This filters down to solicitations where your certification is specifically required. Review Sources Sought notices too — many VA requirements start there, 60-90 days before the formal solicitation drops.",
                },
                {
                  icon: Building2,
                  title: "VA OSDBU (Office of Small and Disadvantaged Business Utilization)",
                  desc: "The VA's Office of Small and Disadvantaged Business Utilization publishes prime contracting opportunity resources, hosts matchmaking events, and maintains a vendor database. Register your business there — it is separate from SAM.gov and VetBiz, and VA procurement staff actively use it when looking for VOSB/SDVOSB vendors to fill sole-source or small set-aside requirements.",
                },
                {
                  icon: Star,
                  title: "VetBiz portal — make your profile count",
                  desc: "When SBA certifies you, your business appears in the VetBiz registry at vetbiz.va.gov. VA contracting officers and prime contractors search this registry when looking for certified veteran firms. Make sure your capability description, NAICS codes, and contact information are accurate and complete. A sparse VetBiz profile is a missed opportunity.",
                },
                {
                  icon: Users,
                  title: "VA facility-level contracting offices",
                  desc: "The VA operates 170+ medical centers and hundreds of outpatient clinics across the country. Each facility has local procurement authority for service and maintenance contracts. These small-dollar requirements often don't get formal publicity — they're filled through relationships with local vendors. Identify the VA facilities in your region and introduce yourself to the small business specialist at each one.",
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
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Sources Sought notices deserve special attention for VOSB firms.{" "}
              <Link
                href="/blog/sources-sought-notice"
                className="text-blue-700 underline font-medium"
              >
                Responding to Sources Sought
              </Link>{" "}
              before a solicitation is issued lets you shape the requirement, establish capability,
              and get your name in front of the contracting officer before the competition opens.
              Most VOSB firms skip this step. The ones that win consistently don&apos;t.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link
                href="/features/matching"
                className="text-blue-700 underline font-medium"
              >
                opportunity matching
              </Link>{" "}
              surfaces VA VOSB set-aside solicitations as they hit SAM.gov and filters them against
              your NAICS codes and capability profile — so you see the relevant ones without
              manually checking every day.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Find VA VOSB contracts matched to your NAICS codes
                </h3>
                <p className="text-stone-500 text-sm">
                  CapturePilot tracks SAM.gov daily and alerts you when VA set-aside opportunities
                  match your capabilities — including Sources Sought notices before the RFP drops.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="flex-shrink-0 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors flex items-center gap-2 text-sm"
              >
                Start free 30-day trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="vosb-strategy"
            number="08"
            title="Building a VOSB Contracting Strategy"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Certification is the credential. Strategy is what turns that credential into revenue.
              Most VOSB firms get certified and then wait for solicitations. The firms that build
              real federal contracting businesses do something different — they work the pipeline
              before opportunities become competitive.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  Start with VA facilities in your geography
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Your competitive advantage is local knowledge and responsiveness. A VA medical
                  center in your city has facilities, equipment, security, cleaning, and support
                  services that must be performed on-site. You can respond faster, mobilize quicker,
                  and develop relationships more easily than a firm 500 miles away. Identify the 3-5
                  VA locations closest to you, find the OSDBU point of contact at each, and schedule
                  an introductory call. This is how early-stage VOSB firms find their first contracts.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  Build a capability statement designed for VA buyers
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  VA contracting officers and small business specialists see hundreds of vendor
                  introductions. A generic{" "}
                  <Link
                    href="/blog/capability-statement-examples"
                    className="text-blue-700 underline"
                  >
                    capability statement
                  </Link>{" "}
                  gets filed and forgotten. A capability statement that speaks specifically to VA
                  mission needs — veteran care, facility readiness, healthcare support — stands
                  out. Include your VetCert certification number, your DUNS/UEI, your NAICS codes,
                  and specifically reference any prior VA or healthcare work you&apos;ve done.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  Subcontract first if you don&apos;t have past performance
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Past performance is the biggest barrier for new government contractors. The fastest
                  way to build it is through{" "}
                  <Link
                    href="/blog/subcontracting-government-contracts"
                    className="text-blue-700 underline"
                  >
                    subcontracting
                  </Link>{" "}
                  under a prime that already holds VA work. As a certified VOSB, large prime
                  contractors holding VA vehicles actively need you — your certification helps them
                  meet their subcontracting plan commitments. Reach out to prime contractors on
                  existing VA IDIQ vehicles in your space. Lead with your certification and your
                  specific capabilities.
                </p>
              </div>
              <div className="border-l-4 border-violet-500 pl-5 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">
                  Use the SBA Mentor-Protégé Program
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The{" "}
                  <Link
                    href="/blog/mentor-protege-program"
                    className="text-blue-700 underline"
                  >
                    SBA All-Small Mentor-Protégé Program
                  </Link>{" "}
                  allows a larger, more experienced firm to mentor your VOSB. As a protégé, you can
                  form a joint venture with your mentor and bid on contracts as a small business
                  even if the combined entity would otherwise exceed size limits. For VA work, a
                  mentor-protégé joint venture can compete for VOSB set-asides while leveraging
                  your mentor&apos;s technical capacity, past performance, and financial strength.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Tracking your opportunities requires a real{" "}
              <Link
                href="/blog/government-contract-pipeline-management"
                className="text-blue-700 underline font-medium"
              >
                contract pipeline
              </Link>
              . Most VOSB firms manage their pursuits in spreadsheets or not at all — which means
              they miss response deadlines, forget follow-ups, and lose to firms that are simply
              more organized. CapturePilot&apos;s{" "}
              <Link
                href="/features/pipeline"
                className="text-blue-700 underline font-medium"
              >
                pipeline management
              </Link>{" "}
              tracks each pursuit from Sources Sought through award, with automated reminders
              at key milestones.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="common-mistakes"
            number="09"
            title="Mistakes That Kill VOSB Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These are not abstract risks. They are the specific reasons VOSB applications get
              denied and VOSB bids get disqualified — drawn from SBA denial decisions, GAO protest
              rulings, and contractor experiences.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Claiming VOSB status without valid VetCert certification",
                  desc: "As of December 22, 2024, self-certification for VOSB status is eliminated. If you claim VOSB status on a federal proposal without an active SBA VetCert certification, you are potentially exposing your business to False Claims Act liability. The SBA actively checks certifications on winning bids — particularly for VA contracts. Get certified before you claim the status, not after.",
                  severity: "high",
                },
                {
                  title: "Non-veteran controls day-to-day operations",
                  desc: "The veteran must hold the highest officer position and make day-to-day management decisions. Applications fail — and certifications get revoked — when the SBA determines a non-veteran spouse, business partner, or outside consultant is actually running the company. This is the most commonly cited basis for VOSB denial. The veteran must be present and leading the business, not just a nominal owner.",
                  severity: "high",
                },
                {
                  title: "Ownership is conditional or passes through another entity",
                  desc: "The 51% ownership requirement must be \"unconditional\" and \"direct.\" Ownership structured through holding companies, trusts, or with conditions attached (buy-sell agreements, conversion rights, or options that could reduce veteran ownership below 51%) will fail SBA review. Work with a business attorney experienced in veteran certification before applying if your ownership structure is complex.",
                  severity: "high",
                },
                {
                  title: "SAM.gov profile doesn't match the application",
                  desc: "The SBA verifies your VetCert application against your active SAM.gov profile. If your SAM profile lists NAICS codes that don't match your capability description, or if your small business certification in SAM isn't current, you will hit inconsistencies that slow or stop your application. Reconcile both before applying.",
                  severity: "medium",
                },
                {
                  title: "Missing the recertification window",
                  desc: "VOSB certification lapses at the three-year mark. You cannot compete on VOSB set-asides with an expired certification. The recertification window opens 90 days before expiration. Build this into your compliance calendar from day one — losing certification mid-fiscal year means walking away from active pursuits.",
                  severity: "medium",
                },
                {
                  title: "No past performance at the VA, but bidding as if you do",
                  desc: "VOSB set-asides don't waive the VA's requirement for relevant past performance. If you have no prior government contracts, focus on building subcontracting relationships and smaller facility-level contracts before chasing large VA IDIQs. Bidding on work you can't demonstrate experience for wastes proposal resources and builds a track record of losses that compounds over time.",
                  severity: "medium",
                },
              ].map((mistake, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border ${
                    mistake.severity === "high"
                      ? "border-red-200 bg-red-50"
                      : "border-amber-200 bg-amber-50"
                  } animate-on-scroll`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle
                      className={`w-4 h-4 ${
                        mistake.severity === "high" ? "text-red-600" : "text-amber-600"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        mistake.severity === "high" ? "text-red-600" : "text-amber-600"
                      }`}
                    >
                      {mistake.severity === "high" ? "Critical" : "Common"}
                    </span>
                  </div>
                  <p
                    className={`font-bold mb-2 ${
                      mistake.severity === "high" ? "text-red-900" : "text-amber-900"
                    }`}
                  >
                    {mistake.title}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      mistake.severity === "high" ? "text-red-800" : "text-amber-800"
                    }`}
                  >
                    {mistake.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The bid/no-bid decision matters here too. Not every VA opportunity is worth pursuing.
              Before committing to a proposal, run a{" "}
              <Link
                href="/blog/bid-no-bid-decision-framework"
                className="text-blue-700 underline font-medium"
              >
                structured bid/no-bid assessment
              </Link>{" "}
              — evaluate past performance fit, incumbent presence, technical alignment, and your
              realistic probability of win. Submitting weak proposals just to stay active produces
              poor CPARS ratings when you win work you can&apos;t perform, and it consumes resources
              better directed at opportunities you can actually win.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline font-medium"
              >
                intelligence tools
              </Link>{" "}
              show you which VA opportunities have incumbent contractors, what the award history
              looks like, and which set-aside type has been used historically — before you spend
              time on a bid.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Should you pursue both VOSB and SDVOSB?">
            If you have a VA-rated disability — any rating, including 0% — you should apply for
            SDVOSB through VetCert. The application covers both SDVOSB and VOSB certification
            simultaneously. SDVOSB gives you everything VOSB does, plus government-wide set-asides
            and first priority at the VA. The only question is whether you have the disability
            documentation from the VA. If you&apos;ve never filed a VA disability claim, that
            process takes separate effort — but it&apos;s worth exploring if you served and have
            any service-connected health issues. See how{" "}
            <Link href="/blog/sdvosb-contracts-guide" className="underline font-medium">
              SDVOSB certification
            </Link>{" "}
            works for the full comparison.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="text-center max-w-2xl mx-auto">
              <Award className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-black mb-4">
                Ready to put your VOSB status to work?
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                CapturePilot matches your VOSB certification to VA set-aside opportunities,
                tracks your pipeline from Sources Sought to award, and helps you build a
                proposal strategy backed by real contract data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-stone-100 pt-12">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses",
                  category: "Set-Asides for Veterans",
                },
                {
                  href: "/blog/va-contracts-guide",
                  title: "VA Contracts: How to Win Work With the Department of Veterans Affairs",
                  category: "Agency Guides",
                },
                {
                  href: "/blog/federal-contracting-certifications",
                  title: "Federal Contracting Certifications: Which Ones Actually Help You Win",
                  category: "Getting Started",
                },
                {
                  href: "/blog/mentor-protege-program",
                  title: "SBA Mentor-Protégé Program: How to Find a Partner and Win Bigger Contracts",
                  category: "Strategy",
                },
                {
                  href: "/blog/capability-statement-examples",
                  title: "Capability Statement Examples: What Good Ones Look Like",
                  category: "Marketing",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices: How to Get In Early and Shape the RFP",
                  category: "Strategy",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group p-5 rounded-xl border border-stone-200 hover:border-blue-200 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xs text-blue-600 font-medium">{post.category}</span>
                  <p className="text-sm font-bold text-stone-900 mt-1 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-1 text-blue-600 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
