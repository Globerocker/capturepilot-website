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
  Users,
  MapPin,
  Zap,
  Star,
  Info,
  Layers,
  Lock,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-certifications-matter", label: "Why Certifications Change the Math" },
  { id: "four-certifications", label: "The Four SBA Certifications at a Glance" },
  { id: "8a-program", label: "8(a) Business Development Program" },
  { id: "sdvosb", label: "SDVOSB: The Veteran Advantage" },
  { id: "wosb-edwosb", label: "WOSB and EDWOSB" },
  { id: "hubzone", label: "HUBZone: Location as Leverage" },
  { id: "stacking", label: "Stacking Certifications" },
  { id: "which-to-pursue", label: "Which Certification to Pursue First" },
  { id: "application-process", label: "The Application Process" },
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function FederalContractingCertificationsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-violet-50 to-white">
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
            <span className="text-stone-900 font-medium">Federal Contracting Certifications</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Award className="w-4 h-4" /> Certifications &amp; Set-Asides
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Federal Contracting Certifications:{" "}
            <span className="gradient-text">Which Ones Actually Help You Win</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The four SBA certifications &mdash; 8(a), SDVOSB, WOSB, and HUBZone &mdash;
            collectively unlocked{" "}
            <strong className="text-stone-700">
              more than $70 billion in federal contract awards in FY2025
            </strong>
            . The difference between firms that hold these certifications and those that don&apos;t
            isn&apos;t luck. It&apos;s access to a parallel contracting market most small businesses
            never enter. Here&apos;s how each one works, what it actually gets you, and how to
            decide which to pursue first.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 22, 2026</span>
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
            id="why-certifications-matter"
            number="01"
            title="Why Certifications Change the Math"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Without a certification, every federal solicitation you chase is full-and-open
              competition. You&apos;re bidding against Fortune 500 companies, established large
              primes with decades of past performance, and incumbent contractors with relationships
              you haven&apos;t built yet. The odds are not in your favor.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              With the right certification, whole categories of contracts are set aside for firms
              like yours. Contracting officers aren&apos;t just allowed to restrict competition to
              certified firms &mdash; they&apos;re required to when the conditions are met. That&apos;s a
              fundamentally different market.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government sets statutory and policy goals for each certification program.
              Those goals drive actual behavior at the contracting officer level. Agencies that
              fall short of small business goals face scrutiny. That creates real pressure to push
              eligible work toward certified firms &mdash; which means your certification isn&apos;t just
              a badge. It&apos;s a filter that concentrates opportunity.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              There&apos;s also a solo-source dimension. Every certification comes with a sole source
              authority &mdash; a dollar threshold below which a contracting officer can award a
              contract directly to you without any competitive bidding at all. That&apos;s the fastest
              path to revenue in federal contracting, and it&apos;s only available to certified firms.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$28.6B", label: "Awarded to SDVOSB firms, FY2025", icon: Shield },
                { stat: "$25B+", label: "Annual 8(a) SDB contract goal", icon: Target },
                { stat: "$13.2B", label: "Awarded to HUBZone firms, FY2025", icon: MapPin },
                { stat: "5%", label: "Federal goal for WOSB prime awards", icon: Users },
              ].map(({ stat, label, icon: Icon }) => (
                <div
                  key={stat}
                  className="animate-on-scroll bg-white rounded-2xl border border-stone-200 p-5 text-center hover-lift"
                >
                  <Icon className="w-6 h-6 text-violet-500 mx-auto mb-2" />
                  <div className="text-2xl font-black text-stone-900">{stat}</div>
                  <div className="text-xs text-stone-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One caveat worth stating plainly: certifications open doors, they don&apos;t walk you
              through them. A certified firm that can&apos;t write a competitive proposal, doesn&apos;t
              track opportunities systematically, and can&apos;t demonstrate relevant{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-600 hover:underline">
                past performance
              </Link>{" "}
              will still lose. But a firm that does those things and holds the right certification
              is playing a much less crowded game.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="four-certifications"
            number="02"
            title="The Four SBA Certifications at a Glance"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-6">
              All four certifications are managed through the SBA&apos;s MySBA Certifications
              platform at <span className="font-mono text-sm bg-stone-100 px-1.5 py-0.5 rounded">certifications.sba.gov</span>.
              They are free to apply for and free to hold. The only cost is time &mdash; and for
              some programs, a significant amount of it.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 rounded-tl-xl">Certification</th>
                    <th className="text-left p-3">Who Qualifies</th>
                    <th className="text-left p-3">Sole Source Limit</th>
                    <th className="text-left p-3">Federal Goal</th>
                    <th className="text-left p-3 rounded-tr-xl">Processing Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      cert: "8(a) BD",
                      who: "Socially & economically disadvantaged owners",
                      sole: "$4.5M / $22.5M (mfg)",
                      goal: "5% of all SDB spending",
                      time: "90+ days",
                      bg: "bg-white",
                    },
                    {
                      cert: "SDVOSB",
                      who: "Veterans with service-connected disability",
                      sole: "$5M / $8.5M (mfg)",
                      goal: "5% of all prime awards",
                      time: "~12 days",
                      bg: "bg-stone-50",
                    },
                    {
                      cert: "WOSB / EDWOSB",
                      who: "Women who own & control the business",
                      sole: "$4.5M / $7M (mfg) for EDWOSB",
                      goal: "5% of all prime awards",
                      time: "30–60 days",
                      bg: "bg-white",
                    },
                    {
                      cert: "HUBZone",
                      who: "Business in historically underutilized zone",
                      sole: "$5M (not zone-specific)",
                      goal: "3% statutory requirement",
                      time: "60–90 days",
                      bg: "bg-stone-50",
                    },
                  ].map((row) => (
                    <tr key={row.cert} className={row.bg}>
                      <td className="p-3 font-bold text-stone-900 border-b border-stone-100">
                        {row.cert}
                      </td>
                      <td className="p-3 text-stone-600 border-b border-stone-100">{row.who}</td>
                      <td className="p-3 text-stone-600 border-b border-stone-100 font-mono text-xs">
                        {row.sole}
                      </td>
                      <td className="p-3 text-stone-600 border-b border-stone-100">{row.goal}</td>
                      <td className="p-3 text-stone-600 border-b border-stone-100">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              These certifications are not mutually exclusive. A service-disabled veteran who is
              also a woman, whose business is located in a HUBZone, can hold three certifications
              simultaneously. Each one opens a separate lane of set-aside opportunities &mdash; and
              your{" "}
              <Link href="/features/quick-checker" className="text-blue-600 hover:underline">
                eligibility profile
              </Link>{" "}
              determines which contracts you should be targeting.
            </p>

            <Callout icon={Zap} color="sky" title="Check Your Certification Eligibility Now">
              Not sure which certifications you qualify for? CapturePilot&apos;s Quick Checker
              runs your business profile against SBA eligibility criteria in seconds.{" "}
              <a href={CHECK_URL} className="font-semibold underline">
                Check your eligibility free &rarr;
              </a>
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="8a-program"
            number="03"
            title="8(a) Business Development Program"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The 8(a) program is the most powerful certification in federal contracting &mdash; and
              right now it&apos;s also the most turbulent. Understanding both sides of that statement
              is critical before you invest the time to apply.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">What It Gets You</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The 8(a) program gives certified firms a nine-year developmental window &mdash; four
              developmental years and five transitional years &mdash; during which contracting officers
              can award sole source contracts directly to your firm. The sole source thresholds are
              the highest of any SBA certification: <strong className="text-stone-700">$4.5 million for service contracts</strong>{" "}
              and <strong className="text-stone-700">$22.5 million for manufacturing contracts</strong>.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The program also caps your total 8(a) contract revenue at $100 million or five times
              your applicable SBA size standard, whichever is larger. That ceiling sounds
              restrictive, but most small businesses exit the program long before they hit it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Beyond sole source, 8(a) firms compete in restricted 8(a) set-aside competitions
              where only other 8(a) firms can bid. These are dramatically less crowded than
              full-and-open competitions. If you&apos;re a service-based firm in a NAICS code with
              strong federal demand, competitive 8(a) set-asides are where your win rate goes up
              the most.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Eligibility Requirements</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Must be a small business under your primary NAICS code size standard",
                "At least 51% owned and controlled by socially and economically disadvantaged U.S. citizens",
                "Owner's personal net worth must be under $850,000 (excluding the business and primary residence)",
                "Owner's adjusted gross income must average $400,000 or less over the past three years",
                "Owner's total assets must be $6.5 million or less",
                "Business must be in operation for at least two years (waivable with SBA approval)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-stone-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">What Changed in 2025–2026</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The 8(a) program has undergone its most significant changes in decades. In January
              2026, the SBA issued formal guidance requiring the program to be administered
              race-neutrally, suspending the prior race-based social disadvantage presumptions while
              it finalizes new regulations.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The practical effect has been dramatic. Only{" "}
              <strong className="text-stone-700">65 firms were approved for 8(a) entry in 2025</strong>,
              compared to 250–300 per year in recent years. In December 2025, the SBA ordered all
              4,300 active 8(a) participants to submit three years of financial records. By January
              2026, over 1,091 participants had been suspended for non-compliance.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This isn&apos;t a reason to avoid 8(a). It&apos;s a reason to apply with meticulous
              documentation and to understand that the program is being actively policed for
              legitimacy. If your business genuinely qualifies, the program is more valuable than
              ever because fewer firms are getting in.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="8(a) Application Reality Check">
              Processing times for 8(a) currently exceed 90 days and can stretch to 6+ months
              given current SBA staffing levels. Apply early, document everything, and have your
              financial records, organizational documents, and personal financial statements ready
              before you start the application.
            </Callout>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="sdvosb"
            number="04"
            title="SDVOSB: The Veteran Advantage"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SDVOSB program has quietly become the most politically stable and practically
              accessible certification in federal contracting. It&apos;s merit-based, not tied to
              demographic presumptions, and has seen bipartisan support consistently expand its
              scope.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              In FY2025, federal agencies awarded{" "}
              <strong className="text-stone-700">$28.6 billion across approximately 52,000 contract
              actions</strong> to SDVOSB-certified firms. About $10 billion of that was sole-sourced
              directly, and $18.6 billion came through competitive SDVOSB set-asides.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The National Defense Authorization Act for FY2024 increased the federal spending
              goal for SDVOSBs from 3% to 5% of all prime and subcontract dollars &mdash; the same
              target held by the 8(a) program. That means more than{" "}
              <strong className="text-stone-700">$31 billion in annual targets</strong> is now
              directed at SDVOSB firms.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">VA Veterans First: An Entire Agency Locked In</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              At the Department of Veterans Affairs, SDVOSB status triggers a mandatory ordering
              priority that doesn&apos;t exist anywhere else in federal contracting. Under VA&apos;s
              Veterans First Contracting Program, contracting officers must seek SDVOSB firms
              first, before any other set-aside category &mdash; including 8(a) and HUBZone. If no
              qualified SDVOSBs can meet the requirement, they move to VOSBs. Only after exhausting
              veteran-owned options do they consider other set-aside types.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The VA directs roughly 7% of its contract spending to SDVOSBs and VOSBs annually.
              For any veteran-owned firm with capabilities that map to VA&apos;s needs &mdash; healthcare
              services, IT, facilities management, staffing, professional services &mdash; SDVOSB
              certification at the VA is a different market entirely. Read the full breakdown in
              our{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">
                SDVOSB contracts guide
              </Link>{" "}
              and our{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-600 hover:underline">
                VA contracting guide
              </Link>.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Eligibility and the VetCert Process</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Must be a small business under your primary NAICS code",
                "At least 51% owned and controlled by one or more service-disabled veterans",
                "The VA must have documented a service-connected disability (any rating, including 0%)",
                "Owner must manage day-to-day operations and hold the highest officer position",
                "As of January 1, 2024, self-certification was eliminated — SBA VetCert is required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-stone-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Callout icon={Lightbulb} color="emerald" title="Processing Time Dropped to 12 Days">
              After clearing a major backlog in late 2025, SBA VetCert applications now process in
              an average of <strong>12 days</strong> — down from 81 days at the end of 2024.
              For active-duty separating veterans and recently certified business owners, this is
              the fastest SBA certification to obtain right now.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              One point veterans frequently miss: a 0% VA disability rating qualifies for SDVOSB
              eligibility. The SBA requires only that the VA has established a service connection,
              not that the disability meets any minimum severity threshold. If you were discharged
              with a service-connected condition and received even a minimal rating, you likely
              qualify.
            </p>
          </div>

          {/* Inline CTA */}
          <div className="animate-on-scroll my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black mb-1">See Which Certifications Apply to You</h3>
                <p className="text-blue-100 text-sm">
                  CapturePilot&apos;s Quick Checker screens your profile against all four SBA
                  certification programs and flags which set-aside contracts you should be targeting.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="shrink-0 bg-white text-blue-700 font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="wosb-edwosb"
            number="05"
            title="WOSB and EDWOSB"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Women-Owned Small Business program comes in two tiers. A standard WOSB requires
              that at least 51% of your business is owned and controlled by women who are U.S.
              citizens and that those women manage day-to-day operations. An Economically
              Disadvantaged WOSB (EDWOSB) adds a financial means test on top of that.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The distinction matters because sole source authority under the program is only
              available to EDWOSBs, not standard WOSBs. If you qualify for EDWOSB, that&apos;s the
              tier you want.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">EDWOSB Financial Thresholds</h3>
            <div className="grid sm:grid-cols-3 gap-4 my-6">
              {[
                {
                  label: "Personal Net Worth",
                  value: "< $850,000",
                  note: "Excluding business equity and primary residence",
                },
                {
                  label: "Adjusted Gross Income",
                  value: "≤ $400,000",
                  note: "Average over the prior 3 tax years",
                },
                {
                  label: "Total Personal Assets",
                  value: "≤ $6.5M",
                  note: "Including primary residence",
                },
              ].map(({ label, value, note }) => (
                <div
                  key={label}
                  className="bg-violet-50 border border-violet-200 rounded-2xl p-4 text-center"
                >
                  <div className="text-xl font-black text-violet-700 mb-1">{value}</div>
                  <div className="font-bold text-stone-800 text-sm mb-1">{label}</div>
                  <div className="text-xs text-stone-500">{note}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Sole Source and Set-Aside Thresholds</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              For EDWOSB sole source contracts, the ceiling is{" "}
              <strong className="text-stone-700">$4.5 million for service/other contracts</strong>{" "}
              and <strong className="text-stone-700">$7 million for manufacturing contracts</strong>.
              A contracting officer can award directly to your EDWOSB firm below these thresholds
              when they cannot reasonably expect two or more qualified firms to bid.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Competitive WOSB and EDWOSB set-asides can be used in NAICS codes where women-owned
              businesses are underrepresented or substantially underrepresented in federal
              contracting. The SBA maintains a list of eligible NAICS codes &mdash; and that list covers
              a broad range of professional services, healthcare, IT, administrative support, and
              specialty construction.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">The 2025 Full-Time Ownership Rule</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              As of updated SBA rules in 2025, the woman owner must actively work full-time in the
              business. Ownership on paper alone doesn&apos;t qualify. This was an enforcement
              tightening that affected some existing certifications and will affect future
              applications for any firm where the qualifying owner has primary employment elsewhere.
            </p>

            <Callout icon={Info} color="blue" title="WOSB vs. EDWOSB: Which Should You Apply For?">
              If you meet the EDWOSB financial thresholds, always apply as EDWOSB. You get
              everything a standard WOSB gets, plus sole source authority. There is no disadvantage
              to the higher tier, and the financial thresholds are generous enough that most
              early-stage woman-owned businesses qualify without issue.
            </Callout>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="hubzone"
            number="06"
            title="HUBZone: Location as Leverage"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              HUBZone is different from the other three certifications in one fundamental way: it&apos;s
              not about who you are. It&apos;s about where you operate. If your principal office sits in
              a Historically Underutilized Business Zone and at least 35% of your employees live
              in a HUBZone area, you qualify.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              In FY2025, federal agencies awarded{" "}
              <strong className="text-stone-700">$13.2 billion across approximately 24,000 contract
              actions</strong> to HUBZone-certified firms. That figure represents less than the 3%
              statutory requirement &mdash; meaning agencies are actively trying to push more dollars
              toward HUBZone firms to meet their mandate.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">The 10% Price Evaluation Preference</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              HUBZone gives you something the other certifications don&apos;t: a price evaluation
              preference in full-and-open competitions. Under FAR 19.1307, when a HUBZone firm
              bids against a large business in an unrestricted competition, the evaluator applies
              a 10% price discount to the HUBZone firm&apos;s bid.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Concretely: if you bid $110,000 and a large prime bids $100,000, the evaluator treats
              your bid as $99,000. You win. This is the only certification that lets you compete
              directly against large businesses with a government-mandated price advantage.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">Eligibility Requirements</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Must be a small business under your primary NAICS code size standard",
                "At least 51% owned and controlled by U.S. citizens, a Community Development Corporation, agricultural cooperative, Alaska Native corporation, Native Hawaiian organization, or Indian tribe",
                "Principal office must be located in a designated HUBZone area",
                "At least 35% of all employees must reside in a HUBZone area",
                "Certification must be renewed every three years",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-stone-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mb-3 mt-8">The 2026 Map Expiration</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Important deadline: HUBZone areas that were converted to &quot;redesignated areas&quot; when
              the 2023 SBA map update took effect will expire on{" "}
              <strong className="text-stone-700">July 1, 2026</strong>. If your certification was
              based on a redesignated area, verify your status now. The SBA will not update the
              HUBZone map again until 2028, so if your area loses status on July 1, you&apos;ll need
              to either move your principal office or lose the certification.
            </p>

            <Callout icon={AlertTriangle} color="rose" title="Employee Residency Is the Biggest HUBZone Compliance Risk">
              The 35% employee residency requirement is continuously audited. If you hire an employee
              who lives outside a HUBZone area, your percentage may drop below the threshold. SBA
              shortened the residency proof window from 6 months to 90 days in a 2025 update —
              that&apos;s now easier to meet, but the ongoing compliance obligation doesn&apos;t go away.
              Track your employee residency data before each contract.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              For a deeper look at HUBZone strategy, see our{" "}
              <Link href="/blog/hubzone-program-guide" className="text-blue-600 hover:underline">
                HUBZone program guide
              </Link>.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="stacking"
            number="07"
            title="Stacking Certifications"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              SBA certifications are not mutually exclusive. A firm can hold 8(a), SDVOSB, WOSB,
              and HUBZone status simultaneously. More certifications mean more set-aside lanes,
              and in competitive solicitations where a contracting officer can choose which set-aside
              type to use, holding multiple certifications ensures you&apos;re eligible regardless of
              what they pick.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              There&apos;s also a regulatory update worth knowing: under a 2024–2025 FAR change,
              follow-on 8(a) contracts can now transition into other socioeconomic set-asides &mdash;
              HUBZone, SDVOSB, or WOSB &mdash; without SBA approval when the 8(a) firm&apos;s program
              term ends. That means building toward multiple certifications while in 8(a) creates
              a natural continuity path when your nine-year term expires.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-violet-900 text-white">
                    <th className="text-left p-3 rounded-tl-xl">Combination</th>
                    <th className="text-left p-3">Why It Works</th>
                    <th className="text-left p-3 rounded-tr-xl">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      combo: "8(a) + SDVOSB",
                      why: "8(a) sole source up to $22.5M; SDVOSB covers VA opportunities and post-8(a) transition",
                      best: "Veteran-owned firms early in federal contracting",
                      bg: "bg-white",
                    },
                    {
                      combo: "SDVOSB + HUBZone",
                      why: "Two independent set-aside lanes; HUBZone price preference in open competitions",
                      best: "Veteran-owned firms in economically distressed areas",
                      bg: "bg-stone-50",
                    },
                    {
                      combo: "WOSB + HUBZone",
                      why: "WOSB set-asides in underrepresented NAICS + HUBZone price eval preference",
                      best: "Women-owned firms in HUBZone locations",
                      bg: "bg-white",
                    },
                    {
                      combo: "8(a) + WOSB + HUBZone",
                      why: "Maximum set-aside coverage; eligible for any socioeconomic restriction",
                      best: "Disadvantaged women-owned firms in HUBZone areas",
                      bg: "bg-stone-50",
                    },
                  ].map((row) => (
                    <tr key={row.combo} className={row.bg}>
                      <td className="p-3 font-bold text-stone-900 border-b border-stone-100">
                        {row.combo}
                      </td>
                      <td className="p-3 text-stone-600 border-b border-stone-100">{row.why}</td>
                      <td className="p-3 text-stone-600 border-b border-stone-100">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              When you&apos;re tracking multiple certifications across multiple set-aside types, you
              need a systematic way to match your certifications to specific contract opportunities.
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-600 hover:underline">
                opportunity matching
              </Link>{" "}
              engine filters SAM.gov opportunities by your exact certification profile, so you only
              see the contracts where your status is an advantage.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="which-to-pursue"
            number="08"
            title="Which Certification to Pursue First"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The right answer depends on your specific situation. But here&apos;s a decision framework
              that works for most small businesses entering federal contracting.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "You're a service-disabled veteran",
                  rec: "Start with SDVOSB (VetCert)",
                  reason:
                    "Fastest processing (≈12 days), strong bipartisan political support, mandatory priority at the VA, and 5% federal spending goal. If you also qualify for 8(a), apply for both — but get VetCert first and start bidding.",
                  icon: Shield,
                  color: "border-emerald-500 bg-emerald-50",
                  iconColor: "text-emerald-600",
                },
                {
                  title: "You're a woman-owned business with early revenue",
                  rec: "Start with EDWOSB",
                  reason:
                    "30–60 day processing, broad NAICS code coverage, sole source authority, and the 2025 full-time management rule is easy to meet if you&apos;re actively running the business.",
                  icon: Users,
                  color: "border-blue-500 bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  title: "You're disadvantaged (per SBA criteria) with 2+ years in business",
                  rec: "Pursue 8(a) — but document everything first",
                  reason:
                    "The highest sole source thresholds in federal contracting and access to 8(a) set-aside competitions. The program is harder to enter right now, but the value for a well-documented applicant is enormous.",
                  icon: Target,
                  color: "border-violet-500 bg-violet-50",
                  iconColor: "text-violet-600",
                },
                {
                  title: "Your office and workforce are in an economically distressed area",
                  rec: "Get HUBZone certified",
                  reason:
                    "The 10% price evaluation preference in open competitions is unique. If your cost structure is competitive, this turns head-to-head bids against large businesses in your favor. Verify the July 1, 2026 map expiration before applying.",
                  icon: MapPin,
                  color: "border-amber-500 bg-amber-50",
                  iconColor: "text-amber-600",
                },
              ].map(({ title, rec, reason, icon: Icon, color, iconColor }) => (
                <div key={title} className={`rounded-2xl border-l-4 p-5 ${color}`}>
                  <div className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${iconColor}`} />
                    <div>
                      <div className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
                        {title}
                      </div>
                      <div className="font-bold text-stone-900 mb-1">{rec}</div>
                      <p className="text-sm text-stone-600">{reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One thing every path has in common: before you apply, make sure your SAM.gov
              registration is active and accurate. All four certifications require SAM registration,
              and your NAICS codes, ownership information, and business type need to match your
              certification application. Start with our{" "}
              <Link href="/blog/sam-gov-search-tips" className="text-blue-600 hover:underline">
                SAM.gov tips guide
              </Link>{" "}
              if you haven&apos;t done this yet.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Also check your{" "}
              <Link href="/blog/small-business-set-aside-threshold" className="text-blue-600 hover:underline">
                small business size standard
              </Link>{" "}
              before you apply. Every certification requires you to qualify as small under your
              primary NAICS code, and the thresholds changed on October 1, 2025.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="application-process"
            number="09"
            title="The Application Process"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              All four certifications use the same portal: MySBA Certifications at{" "}
              <span className="font-mono text-sm bg-stone-100 px-1.5 py-0.5 rounded">certifications.sba.gov</span>.
              There is no application fee. The process is entirely online. Here&apos;s what each step
              looks like in practice.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Verify your SAM.gov registration",
                  detail:
                    "Log into SAM.gov and confirm your registration is active, your NAICS codes are correct, your business type (minority-owned, veteran-owned, woman-owned) is marked accurately, and your financial information is current. Certifications.sba.gov pulls directly from SAM.gov — discrepancies trigger requests for clarification that slow your application.",
                },
                {
                  step: "02",
                  title: "Gather your document package",
                  detail:
                    "For 8(a): three years of personal and business tax returns, personal financial statements for all 20%+ owners, organizational documents (articles of incorporation, operating agreement, bylaws), and a narrative describing social disadvantage. For SDVOSB: VA service-connected disability rating letter and organizational documents. For WOSB/EDWOSB: tax returns, financial statements, and proof of ownership and active management. For HUBZone: lease or utility bill for principal office, and documentation of employee addresses.",
                },
                {
                  step: "03",
                  title: "Complete the MySBA application",
                  detail:
                    "Create an account at certifications.sba.gov, link it to your SAM.gov entity, and select the certification you're applying for. The system walks you through required fields and document uploads. For 8(a), expect 10–15 hours of application time. For SDVOSB and WOSB, budget 3–5 hours.",
                },
                {
                  step: "04",
                  title: "Respond to analyst requests",
                  detail:
                    "After submission, an SBA analyst reviews your application and will typically request clarifications or additional documents. Response time matters — delays in responding extend your processing time significantly. Check your email and MySBA portal daily during review.",
                },
                {
                  step: "05",
                  title: "Receive certification and update SAM.gov",
                  detail:
                    "When approved, the SBA updates your SAM.gov record automatically. Contracting officers verify certification status through SAM.gov, so confirm your record shows the certification before claiming set-aside eligibility on a proposal.",
                },
                {
                  step: "06",
                  title: "Calendar your renewal dates",
                  detail:
                    "SDVOSB: 3-year renewal. HUBZone: 3-year renewal. WOSB: annual representation required. 8(a): annual review during the 9-year term. Missing a renewal deadline can result in termination from the program — set calendar reminders 90 days before expiration.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-4 animate-on-scroll">
                  <div className="flex-none w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-sm font-black text-blue-700">
                    {step}
                  </div>
                  <div className="pb-4 border-b border-stone-100 flex-1">
                    <div className="font-bold text-stone-900 mb-1">{title}</div>
                    <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="violet" title="Use CapturePilot During the Wait">
              The application review period &mdash; especially for 8(a) &mdash; can take months. Don&apos;t sit
              idle. Use that time to build your{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                contract pipeline
              </Link>,
              identify targets in your NAICS codes, develop your{" "}
              <Link href="/features/capability-statement" className="text-blue-600 hover:underline">
                capability statement
              </Link>,
              and respond to{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-600 hover:underline">
                sources sought notices
              </Link>{" "}
              to get your name in front of contracting officers before you hold the certification.
              When your certification comes through, you won&apos;t be starting from scratch.
            </Callout>
          </div>

          {/* Summary section */}
          <div className="animate-on-scroll mt-12 bg-stone-50 border border-stone-200 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-stone-600" />
              <h3 className="font-bold text-stone-900">Key Takeaways</h3>
            </div>
            <ul className="space-y-3">
              {[
                "The four SBA certifications collectively target more than $70B in federal contract awards per year — each one opens a separate lane of set-aside opportunities.",
                "SDVOSB is currently the fastest to obtain (≈12 days via VetCert) and has the most stable political support. If you qualify, there's no reason to wait.",
                "8(a) has the highest sole source thresholds ($22.5M for manufacturing) but is under intense scrutiny in 2025–2026 — apply with meticulous documentation.",
                "EDWOSB beats standard WOSB because it adds sole source authority. If you meet the financial thresholds, always apply for the higher tier.",
                "HUBZone is unique: the 10% price evaluation preference lets you compete against — and beat — large businesses in open competitions.",
                "Certifications can be stacked. A veteran woman owner in a HUBZone area can hold SDVOSB, WOSB, and HUBZone simultaneously.",
                "None of this matters without the ability to find the right opportunities and build winning proposals. Certification is the access ticket, not the win.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Related links */}
          <div className="animate-on-scroll mt-12">
            <h3 className="font-bold text-stone-900 mb-4">Read Next</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sdvosb-contracts-guide",
                  label: "SDVOSB Contracts: Complete Guide for Veterans",
                },
                {
                  href: "/blog/hubzone-program-guide",
                  label: "HUBZone Program: Win Contracts With Location",
                },
                {
                  href: "/blog/wosb-certification-guide",
                  label: "WOSB Certification: How Women-Owned Businesses Win",
                },
                {
                  href: "/blog/8a-sole-source-contracts",
                  label: "8(a) Sole Source: Fastest Path to Federal Revenue",
                },
                {
                  href: "/blog/small-business-set-aside-threshold",
                  label: "Set-Aside Thresholds: Dollar Limits You Need to Know",
                },
                {
                  href: "/blog/sources-sought-notice",
                  label: "Sources Sought Notices: Get In Early and Shape the RFP",
                },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <FileText className="w-4 h-4 text-stone-400 group-hover:text-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-stone-700 group-hover:text-blue-700">
                    {label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-500 ml-auto shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll mt-16 rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-blue-50 p-8">
            <div className="text-center max-w-xl mx-auto">
              <Lock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-stone-900 mb-3">
                Stop competing against everyone. Start competing in your lane.
              </h3>
              <p className="text-stone-500 mb-6 text-sm leading-relaxed">
                CapturePilot maps your certifications to real contract opportunities, tracks
                set-aside solicitations that match your profile, and helps you build proposals
                that win. Start your 30-day free trial — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SIGNUP_URL}
                  className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="border border-stone-300 text-stone-700 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-center gap-2 text-sm"
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
