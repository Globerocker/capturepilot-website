"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  BookOpen, ChevronRight, DollarSign, Building2, Users,
  Shield, CheckCircle2, Lightbulb, Search,
  BarChart2, ArrowRight, Target, Hash,
  Globe, BadgeCheck, FileText, Clock, TrendingUp, Zap,
  MapPin, Award, Star, Layers, AlertTriangle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "opportunity-size", label: "The $637 Billion Opportunity" },
  { id: "sam-gov-registration", label: "Start With SAM.gov Registration" },
  { id: "searching-sam-gov", label: "How to Search SAM.gov Like a Pro" },
  { id: "set-asides-certifications", label: "Set-Aside Programs That Give You an Edge" },
  { id: "dollar-thresholds", label: "Dollar Thresholds Every Small Business Needs to Know" },
  { id: "find-your-niche", label: "Narrow to Your Niche: NAICS Codes and Agencies" },
  { id: "common-mistakes", label: "7 Mistakes That Kill First-Time Bids" },
  { id: "use-technology", label: "Stop Searching Manually: Use Technology to Win Faster" },
];

function Callout({ icon: Icon, color, title, children }: {
  icon: React.ElementType; color: "emerald" | "amber" | "sky";
  title: string; children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
  };
  const iconColors = { emerald: "text-emerald-600", amber: "text-amber-600", sky: "text-sky-600" };
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

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-6 pt-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function HowToFindGovernmentContractsPage() {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll(".animate-on-scroll");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("animate-fade-in-up"); obs.unobserve(e.target); }
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">How to Find Government Contracts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Find Government Contracts{" "}
            <span className="gradient-text">for Your Small Business</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Small businesses won <strong className="text-stone-700">$183.5 billion</strong> in federal prime
            contracts in FY2024 &mdash; 28.8% of all federal contracting dollars. That share has grown four
            years running. Here&apos;s exactly how to find your piece of it.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>April 7, 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-700 transition-colors py-1"
                >
                  <span className="text-emerald-600 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
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

          {/* Section 1: The $637 Billion Opportunity */}
          <SectionHeading id="opportunity-size" number="01" title="The $637 Billion Opportunity" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government spent <strong>$755 billion</strong> on contracts in FY2024.
              Of that, <strong>$637 billion</strong> went to contracts where small businesses were
              eligible to compete. Small businesses captured <strong>$183.5 billion</strong> of
              it &mdash; their largest share ever, at 28.8% of all federal contracting dollars.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Congress set a 23% small business goal. The government has beaten that mark four
              years in a row. That&apos;s not a coincidence &mdash; agency contracting officers have
              performance ratings tied to small business utilization. They&apos;re actively looking
              for qualified small businesses.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { icon: DollarSign, stat: "$183.5B", label: "To small businesses in FY2024" },
                { icon: TrendingUp, stat: "28.8%", label: "Of all federal contract dollars" },
                { icon: Target, stat: "23%", label: "Statutory goal (exceeded by 5.8 pts)" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-sm text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-6">
              The breakdown by program tells an even clearer story. Service-disabled veteran-owned
              small businesses won <strong>$31.9 billion</strong> in FY2024 &mdash; the first year
              the government hit its newly raised 5% SDVOSB goal. Women-owned small businesses
              took home <strong>$31.7 billion</strong>. HUBZone firms won <strong>$17.6 billion</strong>,
              a record dollar amount. And small disadvantaged businesses received <strong>$78.1 billion</strong>.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-100 rounded-t-xl">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Program</th>
                    <th className="text-right px-4 py-3 font-bold text-stone-700">FY2024 Awards</th>
                    <th className="text-right px-4 py-3 font-bold text-stone-700">Goal</th>
                    <th className="text-right px-4 py-3 font-bold text-stone-700 rounded-tr-xl">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { program: "All Small Business", awards: "$183.5B", goal: "23%", met: true },
                    { program: "Small Disadvantaged Business", awards: "$78.1B", goal: "12%", met: true },
                    { program: "SDVOSB", awards: "$31.9B", goal: "5%", met: true },
                    { program: "WOSB", awards: "$31.7B", goal: "5%", met: false },
                    { program: "HUBZone", awards: "$17.6B", goal: "3%", met: false },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-800">{row.program}</td>
                      <td className="px-4 py-3 text-right font-bold text-stone-900">{row.awards}</td>
                      <td className="px-4 py-3 text-right text-stone-500">{row.goal}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${row.met ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                          {row.met ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                          {row.met ? "Met" : "Missed"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-stone-400 mt-2">Source: SBA Small Business Procurement Scorecard, FY2024</p>
            </div>

            <p className="text-stone-600 leading-relaxed">
              The WOSB and HUBZone goals were technically missed &mdash; WOSB by just 0.03 percentage points.
              Both still hit record dollar amounts. The opportunity is real. The question is how to find it.
            </p>
          </div>

          {/* Section 2: SAM.gov Registration */}
          <SectionHeading id="sam-gov-registration" number="02" title="Start With SAM.gov Registration" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Before you can receive a single dollar from the federal government, your business must be
              registered on <strong>SAM.gov</strong> &mdash; the System for Award Management. It&apos;s
              the mandatory gateway to all federal contracting. No registration means no payments, period.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Registration is <strong>completely free</strong>. Ignore any service that charges you to register
              on SAM.gov &mdash; they&apos;re charging for something you can do yourself at no cost.
              About 674,000 businesses are actively registered, and more than 56,000 new registrations or
              renewals are processed every month.
            </p>

            <div className="space-y-3 my-8">
              {[
                { num: "01", title: "Gather Your Business Information", desc: "Legal business name, EIN or Tax ID, NAICS codes, physical address, bank account for direct deposit, and fiscal year end date." },
                { num: "02", title: "Create a Login.gov Account", desc: "SAM.gov uses Login.gov for authentication. Go to login.gov and create an account with your business email address." },
                { num: "03", title: "Start Your Entity Registration", desc: "Log in to sam.gov, click 'Register Your Entity,' select 'Business or Organization,' and follow the workflow." },
                { num: "04", title: "Select Your NAICS Codes", desc: "Choose the primary NAICS code for your main service, plus secondary codes for adjacent work. See our guide on NAICS codes for small business." },
                { num: "05", title: "Complete Financial Information", desc: "Enter your bank routing and account number for Electronic Funds Transfer (EFT). This is how you get paid." },
                { num: "06", title: "Receive Your Unique Entity ID (UEI)", desc: "SAM.gov generates your UEI immediately. It replaces the old DUNS number. Registration is fully active within 1-3 business days." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">{step.num}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{step.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One critical detail: <strong>SAM registration expires every year.</strong> Set a calendar
              reminder 60 days before your expiration date. A lapsed registration means your contract
              payments stop until you renew. Many businesses lose revenue this way.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Need a full walkthrough? Our{" "}
              <Link href="/blog/sam-registration-guide" className="text-emerald-700 font-medium hover:underline">
                SAM.gov registration guide
              </Link>{" "}
              covers every step and common error messages.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Check Your Eligibility First">
            Before spending hours on SAM.gov, run a quick eligibility check to see which set-aside
            certifications your business qualifies for.{" "}
            <Link href={CHECK_URL} className="font-bold underline hover:no-underline">
              Check your eligibility free &rarr;
            </Link>
          </Callout>

          {/* Section 3: Searching SAM.gov */}
          <SectionHeading id="searching-sam-gov" number="03" title="How to Search SAM.gov Like a Pro" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Every federal contract opportunity above <strong>$25,000</strong> must be posted on
              SAM.gov under FAR 5.101. That makes it the single most important place to find work.
              But raw SAM.gov search is overwhelming &mdash; thousands of results with no prioritization.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The difference between contractors who find good opportunities and those who don&apos;t
              comes down to filtering. Here&apos;s what to use:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { icon: Hash, title: "NAICS Code", desc: "Filter to your specific industry codes. This is the most powerful filter — it eliminates 90% of irrelevant noise immediately." },
                { icon: MapPin, title: "Place of Performance", desc: "Filter by state or metro area if you need to work on-site. Remote work opportunities have no geographic limit." },
                { icon: Shield, title: "Set-Aside Type", desc: "Filter for 8(a), HUBZone, SDVOSB, WOSB, or 'Total Small Business' set-asides matching your certifications." },
                { icon: Building2, title: "Agency", desc: "Target specific agencies where you have relationships or where spending matches your capabilities." },
                { icon: DollarSign, title: "Dollar Range", desc: "Use the award amount filter to target the simplified acquisition range ($15K-$350K) for easier competition." },
                { icon: FileText, title: "Notice Type", desc: "Filter for Solicitations (open bids), Pre-solicitations (coming soon), and Sources Sought (shape the RFP)." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                    <p className="text-stone-500 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              <strong>The most overlooked notice type: Sources Sought.</strong> These are market research
              notices posted before a solicitation is written. When an agency posts a Sources Sought, they&apos;re
              asking: &quot;Who can do this work?&quot; Responding to them lets you shape the requirements,
              establish your qualifications in the contracting officer&apos;s mind, and potentially influence
              whether the contract becomes a set-aside.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Responding to Sources Sought doesn&apos;t cost you anything but time. For a detailed strategy,
              read our post on{" "}
              <Link href="/blog/sources-sought-notice" className="text-emerald-700 font-medium hover:underline">
                how to respond to Sources Sought notices
              </Link>.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Set up saved searches with email alerts for your key NAICS codes and agencies. SAM.gov
              will notify you when new matching opportunities are posted. Check those alerts daily &mdash;
              solicitation windows can be as short as 15 days.
            </p>
          </div>

          {/* Section 4: Set-Aside Programs */}
          <SectionHeading id="set-asides-certifications" number="04" title="Set-Aside Programs That Give You an Edge" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside programs reserve specific contracts exclusively for qualifying businesses.
              Competition is restricted &mdash; which dramatically improves your odds. The more certifications
              you hold, the more opportunities you&apos;re eligible for.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              You can hold multiple certifications simultaneously. An SDVOSB-certified woman-owned
              8(a) firm competes in multiple reserved pools. For a full breakdown of eligibility
              requirements, see our{" "}
              <Link href="/blog/set-aside-programs" className="text-emerald-700 font-medium hover:underline">
                set-aside programs guide
              </Link>.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  badge: "8(a) Program",
                  color: "bg-purple-50 text-purple-700 border-purple-200",
                  title: "8(a) Business Development",
                  highlights: ["Sole-source up to $4.5M (services) / $7M (manufacturing)", "9-year program for socially & economically disadvantaged businesses", "$78.1B total awarded to SDBs in FY2024", "Access to restricted 8(a) competitions"],
                },
                {
                  badge: "HUBZone",
                  color: "bg-amber-50 text-amber-700 border-amber-200",
                  title: "Historically Underutilized Business Zone",
                  highlights: ["10% price evaluation preference in open competition", "Must maintain 35% of employees in a HUBZone", "$17.6B awarded in FY2024 — record dollar amount", "Principal office must be in a HUBZone"],
                },
                {
                  badge: "SDVOSB",
                  color: "bg-blue-50 text-blue-700 border-blue-200",
                  title: "Service-Disabled Veteran-Owned Small Business",
                  highlights: ["Sole-source up to $4.5M (services) / $7M (manufacturing)", "$31.9B awarded in FY2024 — government hit 5% goal for first time", "Certification via SBA Veteran Small Business Certification (VetCert)", "Strong VA and DoD preference"],
                },
                {
                  badge: "WOSB/EDWOSB",
                  color: "bg-rose-50 text-rose-700 border-rose-200",
                  title: "Women-Owned Small Business",
                  highlights: ["Set-asides in 100+ NAICS codes where women are underrepresented", "EDWOSB sole-source up to $4.5M / $7M manufacturing", "$31.7B awarded to WOSBs in FY2024", "Free certification through SBA or approved third parties"],
                },
              ].map((prog, i) => (
                <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden animate-on-scroll">
                  <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 flex items-center gap-3">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${prog.color}`}>
                      {prog.badge}
                    </span>
                    <h3 className="font-bold text-stone-900">{prog.title}</h3>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {prog.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Not Sure Which Programs You Qualify For?">
            Run CapturePilot&apos;s free eligibility checker. Answer 10 questions and get an instant
            readiness score plus certification recommendations.{" "}
            <Link href={CHECK_URL} className="font-bold underline hover:no-underline">
              Check your eligibility &rarr;
            </Link>
          </Callout>

          {/* Section 5: Dollar Thresholds */}
          <SectionHeading id="dollar-thresholds" number="05" title="Dollar Thresholds Every Small Business Needs to Know" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Federal Acquisition Regulation sets dollar thresholds that determine how agencies buy
              and which businesses can compete. These thresholds changed on <strong>October 1, 2025</strong>{" "}
              due to an inflation adjustment under 41 U.S.C. § 1908. Make sure you&apos;re working with
              the current numbers.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  range: "Under $15,000",
                  label: "Micro-Purchase Threshold",
                  color: "border-l-4 border-stone-300 bg-stone-50",
                  badge: "bg-stone-100 text-stone-600",
                  desc: "Agencies can buy directly with a government credit card. No competition required, no SAM registration required (though registration helps). Your fastest path to revenue.",
                  tip: "Target these through relationships and agency open days.",
                },
                {
                  range: "$15,001 – $350,000",
                  label: "Simplified Acquisition Range (Automatic Set-Aside Zone)",
                  color: "border-l-4 border-emerald-400 bg-emerald-50",
                  badge: "bg-emerald-100 text-emerald-700",
                  desc: "The 'Rule of Two' applies: if a contracting officer reasonably expects two or more competitive small business offers, the contract MUST be set aside for small businesses. This is your primary hunting ground.",
                  tip: "Best entry point for first-time contractors. Less competition, faster awards.",
                },
                {
                  range: "Above $350,000",
                  label: "Above Simplified Acquisition Threshold",
                  color: "border-l-4 border-sky-400 bg-sky-50",
                  badge: "bg-sky-100 text-sky-700",
                  desc: "Full and open competition by default, but contracting officers can still set aside for small businesses if the Rule of Two is met. Set-asides for specific programs (8(a), HUBZone, etc.) also apply here.",
                  tip: "Consider teaming with other small businesses to build capacity for larger awards.",
                },
              ].map((tier, i) => (
                <div key={i} className={`rounded-2xl p-5 ${tier.color} animate-on-scroll`}>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tier.badge}`}>{tier.range}</span>
                    <h3 className="font-bold text-stone-900 text-sm">{tier.label}</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-2">{tier.desc}</p>
                  <p className="text-xs font-medium text-stone-500 flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    {tier.tip}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The <strong>simplified acquisition range ($15K–$350K)</strong> is where most first-time small
              business contractors should focus. You&apos;re competing only against other small businesses,
              and the procurement process is faster and simpler than full-and-open competition.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For a deeper dive into the micro-purchase threshold and how to capture those quick-win contracts,
              see our post on the{" "}
              <Link href="/blog/micro-purchase-threshold" className="text-emerald-700 font-medium hover:underline">
                micro-purchase threshold
              </Link>.
            </p>
          </div>

          {/* Section 6: Find Your Niche */}
          <SectionHeading id="find-your-niche" number="06" title="Narrow to Your Niche: NAICS Codes and Agencies" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Trying to bid on everything is how businesses waste time and lose confidence. The contractors
              who win consistently pick a lane &mdash; a small set of NAICS codes and 2-3 target agencies &mdash;
              and go deep on those.
            </p>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-4">Choosing Your NAICS Codes</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              NAICS codes classify what your business does. You&apos;ll select these during SAM registration,
              and they determine which set-aside competitions you&apos;re eligible for. Each code has its
              own small business size standard &mdash; defined either as maximum annual revenue or maximum
              employee count.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Pick 3-5 codes that match your core work. Don&apos;t try to cover every adjacent service you could
              theoretically offer. A focused profile signals expertise to contracting officers. For a full
              guide to choosing codes, read{" "}
              <Link href="/blog/naics-codes-explained" className="text-emerald-700 font-medium hover:underline">
                NAICS codes explained for government contractors
              </Link>.
            </p>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-4">Picking Your Target Agencies</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Not all agencies are equally accessible. DoD accounts for over <strong>$400 billion</strong> in
              annual contracting but also has the most rigorous requirements and longest timelines. Civilian
              agencies &mdash; VA, HHS, GSA, DHS, DOT &mdash; collectively spend hundreds of billions more and
              often have faster, simpler procurements.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Agency Type</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Best For</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Entry Difficulty</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tr-xl">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "DoD (Army, Navy, Air Force)", best: "IT, construction, logistics, security", difficulty: "High", notes: "Clearances often required; best for veterans via SDVOSB" },
                    { type: "VA", best: "Healthcare, IT, facilities, veteran services", difficulty: "Medium", notes: "Strong SDVOSB preference; Vets First program" },
                    { type: "GSA", best: "Almost anything via Schedule", difficulty: "Medium", notes: "GSA Schedule = blanket vehicle; requires separate application" },
                    { type: "HHS/FDA/CDC", best: "Healthcare, consulting, IT, research", difficulty: "Medium", notes: "Large SDB and WOSB spend" },
                    { type: "Civilian agencies (<$10B)", best: "Services, professional work", difficulty: "Lower", notes: "Less competition; faster acquisition cycles" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-800">{row.type}</td>
                      <td className="px-4 py-3 text-stone-600">{row.best}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          row.difficulty === "High" ? "bg-red-100 text-red-700" :
                          row.difficulty === "Medium" ? "bg-amber-100 text-amber-700" :
                          "bg-emerald-100 text-emerald-700"
                        }`}>{row.difficulty}</span>
                      </td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Before targeting an agency, research their small business spend. Check USASpending.gov to
              see what they bought last year, which companies won, and what NAICS codes they use most.
              That intelligence tells you whether there&apos;s a real market for your services there.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-emerald-700 font-medium hover:underline">
                intelligence features
              </Link>{" "}
              pull this agency spend data automatically, so you don&apos;t have to spend hours in
              USASpending.gov manually.
            </p>
          </div>

          <Callout icon={Zap} color="sky" title="Find Contracts Matched to Your Business">
            Instead of filtering SAM.gov manually, CapturePilot&apos;s matching engine reads your
            capabilities and surfaces relevant opportunities automatically.{" "}
            <Link href="/features/matching" className="font-bold underline hover:no-underline">
              See how matching works &rarr;
            </Link>
          </Callout>

          {/* Section 7: Common Mistakes */}
          <SectionHeading id="common-mistakes" number="07" title="7 Mistakes That Kill First-Time Bids" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Most first-time government contractors lose not because their work is bad but because they
              make avoidable process mistakes. These are the seven most common ones:
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Bidding Without the Right Past Performance",
                  desc: "Many solicitations require 2-3 years of relevant past performance. Bidding on contracts you don't qualify for wastes your time and the agency's. Read the PWS/SOW carefully before you invest hours into a proposal.",
                  severity: "high",
                },
                {
                  num: "02",
                  title: "Ignoring Sources Sought Notices",
                  desc: "This is where contracts get shaped. Contractors who respond to Sources Sought can influence whether a contract becomes a set-aside, what the technical requirements look like, and how performance will be evaluated. Skipping them means you show up late.",
                  severity: "high",
                },
                {
                  num: "03",
                  title: "Letting SAM Registration Expire",
                  desc: "SAM.gov registration expires annually. An expired registration stops your contract payments and makes you ineligible to bid. Set a renewal reminder 60 days before expiration — it's a 30-minute task that protects all your revenue.",
                  severity: "high",
                },
                {
                  num: "04",
                  title: "Writing a Proposal That Restates the SOW",
                  desc: "Contracting officers read dozens of proposals. If yours just rewrites the Statement of Work in your own words, it scores poorly. Your technical volume needs to show how you'll solve the problem — your methodology, staffing plan, and differentiators.",
                  severity: "medium",
                },
                {
                  num: "05",
                  title: "Underpricing to Win",
                  desc: "Winning a contract below cost is worse than losing it. The government uses historical pricing data. If you bid 40% below market, you raise red flags about your understanding of the work. Price to perform, not just to win.",
                  severity: "medium",
                },
                {
                  num: "06",
                  title: "No Capability Statement Ready",
                  desc: "When you meet an agency small business officer or contracting officer, they will ask for your capability statement. If you don't have one ready, you miss the moment. See our guide to capability statement examples for what a good one looks like.",
                  severity: "medium",
                },
                {
                  num: "07",
                  title: "Targeting Agencies With No Small Business History",
                  desc: "Some agencies or buying offices have never awarded a set-aside contract in your NAICS code. Check USASpending.gov first. Your time is better spent on agencies with a demonstrated history of small business awards in your space.",
                  severity: "low",
                },
              ].map((mistake, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl border border-stone-200 animate-on-scroll">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs ${
                    mistake.severity === "high" ? "bg-red-100 text-red-700" :
                    mistake.severity === "medium" ? "bg-amber-100 text-amber-700" :
                    "bg-stone-100 text-stone-600"
                  }`}>
                    {mistake.num}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{mistake.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed">{mistake.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mt-6">
              For mistake #6, read our{" "}
              <Link href="/blog/capability-statement-guide" className="text-emerald-700 font-medium hover:underline">
                capability statement guide
              </Link>{" "}
              and see what separates effective ones from forgettable ones.
            </p>
          </div>

          {/* Section 8: Use Technology */}
          <SectionHeading id="use-technology" number="08" title="Stop Searching Manually: Use Technology to Win Faster" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Manually monitoring SAM.gov is a full-time job. Thousands of solicitations are posted every
              week. Filtering by NAICS code still leaves hundreds of results. Reading each one to assess fit
              takes hours per opportunity.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Contractors who win consistently don&apos;t search harder &mdash; they search smarter.
              They use technology to surface only the relevant opportunities, track progress across multiple
              bids, and understand the competitive landscape before they invest in a proposal.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Task</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Manual Approach</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tr-xl">With CapturePilot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { task: "Find relevant opportunities", manual: "Search SAM.gov daily, filter manually, read every result", smart: "AI matching surfaces opportunities that fit your capabilities automatically" },
                    { task: "Track bid pipeline", manual: "Spreadsheet with dozens of columns, manual status updates", smart: "Visual pipeline with stages, deadlines, and team assignments" },
                    { task: "Research agency spend", manual: "Hours on USASpending.gov building custom reports", smart: "Agency intelligence dashboards — see who won what and for how much" },
                    { task: "Check certifications", manual: "Research each program separately, estimate eligibility manually", smart: "Free quick checker scores your eligibility in 30 seconds" },
                    { task: "Build proposals", manual: "Start from scratch each time, manage compliance manually", smart: "Proposal templates with built-in compliance matrix generation" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-800">{row.task}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{row.manual}</td>
                      <td className="px-4 py-3 text-emerald-700 font-medium text-xs">{row.smart}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-emerald-700 font-medium hover:underline">contract matching</Link>{" "}
              reads your business profile and surfaces opportunities across SAM.gov that fit your NAICS codes,
              certifications, and past performance. Your{" "}
              <Link href="/features/pipeline" className="text-emerald-700 font-medium hover:underline">bid pipeline</Link>{" "}
              tracks every opportunity from Sources Sought through award decision. And the{" "}
              <Link href="/features/intelligence" className="text-emerald-700 font-medium hover:underline">intelligence module</Link>{" "}
              shows you agency spending patterns so you know where to focus before you start.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Not sure which certifications your business qualifies for? The{" "}
              <Link href="/features/quick-checker" className="text-emerald-700 font-medium hover:underline">Quick Checker</Link>{" "}
              gives you an instant eligibility score in 30 seconds. Free, no account required. There&apos;s
              also a{" "}
              <Link href="/resources/quick-checker-guide" className="text-emerald-700 font-medium hover:underline">
                Quick Checker guide
              </Link>{" "}
              if you want to understand how each program is evaluated.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The contractors who succeed in government contracting treat it like a business development
              function, not a lottery. They research before they bid, track their pipeline systematically,
              and learn from every proposal win and loss. The{" "}
              <Link href="/blog/government-contract-win-rate" className="text-emerald-700 font-medium hover:underline">
                average win rate for experienced contractors
              </Link>{" "}
              is around 30% &mdash; which means a disciplined contractor bidding 10 qualified opportunities
              a year expects to win 3. That&apos;s how you build a real GovCon business.
            </p>
          </div>

          {/* Final CTA */}
          <div id="get-started" className="mt-16 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 sm:p-12 text-white animate-on-scroll">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-emerald-200" />
                <span className="text-emerald-200 text-sm font-medium">Start Winning Government Contracts</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
                Find your first contract opportunity today
              </h2>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                CapturePilot connects small businesses to $183 billion in annual federal opportunity.
                Start with a free eligibility check, then explore matched contracts for your business.
                No credit card required for the 30-day trial.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  <Star className="w-4 h-4" /> Check eligibility free
                </Link>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors border border-emerald-400"
                >
                  Start 30-day free trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-stone-200">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/blog/government-contracting-101", title: "Government Contracting 101", desc: "The complete beginner's guide to federal contracting." },
                { href: "/blog/set-aside-programs", title: "Set-Aside Programs Explained", desc: "Every small business program, eligibility, and benefit." },
                { href: "/blog/sam-registration-guide", title: "SAM.gov Registration Guide", desc: "Step-by-step walkthrough for registering your business." },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="block p-5 rounded-2xl border border-stone-200 hover-lift transition-all"
                >
                  <p className="font-bold text-stone-900 text-sm mb-1">{post.title}</p>
                  <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium mt-3">
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
