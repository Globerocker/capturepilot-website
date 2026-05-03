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
  Zap,
  TrendingUp,
  FileText,
  Clock,
  Award,
  BarChart3,
  Shield,
  Users,
  XCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-advantage", label: "The $24 Billion No-Bid Advantage" },
  { id: "what-sole-source-means", label: "What Sole Source Actually Gets You" },
  { id: "new-thresholds", label: "The New 2025 Thresholds" },
  { id: "eligibility", label: "Who Qualifies for 8(a) Certification" },
  { id: "how-to-certify", label: "How to Get 8(a) Certified" },
  { id: "getting-sole-sourced", label: "How to Get an Agency to Sole Source to You" },
  { id: "award-process", label: "The 5-Step Sole Source Award Process" },
  { id: "nine-year-term", label: "Using Your 9-Year Term Strategically" },
  { id: "mistakes", label: "Mistakes That Kill 8(a) Sole Source Deals" },
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

export default function EightASoleSourceContractsPage() {
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
            <span className="text-stone-900 font-medium">8(a) Sole Source Contracts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Award className="w-4 h-4" /> Set-Asides &amp; Certifications
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            8(a) Sole Source Contracts:{" "}
            <span className="gradient-text">The Fastest Path to Federal Revenue</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded more than{" "}
            <strong className="text-stone-700">$24 billion to 8(a) firms in FY2023</strong> — a
            large share of it without any competition at all. Sole source authority is the most
            powerful tool in the 8(a) program, and most certified firms barely use it. Here&apos;s
            how it works, what changed in 2025, and how to get agencies to give you contracts
            without a competitive bid.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 3, 2026</span>
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
            title="The $24 Billion No-Bid Advantage"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most small businesses spend months writing proposals, competing against a dozen firms,
              and losing 80% of the time. 8(a) certified companies can skip that entirely — and
              collect contracts worth up to $5.5 million per award without a single competitor in
              sight.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA&apos;s 8(a) Business Development Program awarded more than{" "}
              <strong>$24 billion in federal contract dollars in FY2023</strong> to certified
              participants. A significant portion of those awards were sole source — meaning the
              agency chose a specific 8(a) firm and negotiated directly, no competition required.
              That&apos;s how the program is designed to work, and it&apos;s the fastest path from
              certification to revenue that exists in federal contracting.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The key insight most consultants miss: sole source authority isn&apos;t handed to you.
              You have to position your company so that agencies want to use it on your behalf. That
              positioning — building relationships with program managers before requirements are
              written — is the real skill.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$24B+", label: "8(a) contract awards, FY2023", icon: DollarSign },
                { stat: "$5.5M", label: "Sole source limit (services)", icon: Zap },
                { stat: "$8.5M", label: "Sole source limit (manufacturing)", icon: Target },
                { stat: "9 years", label: "Program participation term", icon: Clock },
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
              The 8(a) program is one of the few places in federal contracting where{" "}
              <strong>your certification itself creates a legal basis for an agency to award
              you a contract without competing it</strong>. That&apos;s a structural advantage
              that no amount of proposal writing can replicate.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="What the 8(a) Program Actually Is">
            The SBA&apos;s 8(a) Business Development Program is a 9-year business development
            program for small businesses owned and controlled by socially and economically
            disadvantaged individuals. Beyond sole source authority, it gives you access to
            competitive 8(a) set-asides, business development training, mentorship through the
            Mentor-Protégé Program, and agency relationship-building resources. Sole source is the
            fastest tool. Set-asides are the volume tool. Both matter.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="what-sole-source-means"
            number="02"
            title="What Sole Source Actually Gets You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              &ldquo;Sole source&rdquo; means the government awards a contract to one specific
              vendor without soliciting competing offers. For 8(a) firms, Congress authorized this
              shortcut precisely because socially disadvantaged businesses need a way to build
              past performance without spending six months and $50,000 writing proposals they might
              lose.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              When an agency uses 8(a) sole source authority, here&apos;s what actually happens:
              the contracting officer decides they want to work with your firm, they submit an
              &ldquo;offer letter&rdquo; to the SBA, the SBA approves it, and the agency sends you
              an RFP or RFQ that you&apos;re the only one responding to. You still write a proposal
              — but you&apos;re writing it knowing you&apos;re the only bidder.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: CheckCircle2,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                  title: "No competition",
                  desc: "The agency doesn't solicit offers from other firms. You negotiate price directly with the contracting officer.",
                },
                {
                  icon: CheckCircle2,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                  title: "Faster award",
                  desc: "Sole source awards skip the formal competitive solicitation timeline. Most move from offer letter acceptance to award in 30–90 days.",
                },
                {
                  icon: CheckCircle2,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                  title: "Real past performance",
                  desc: "Every 8(a) sole source contract you complete is a CPARS rating — the credibility that lets you compete for larger, higher-margin work later.",
                },
                {
                  icon: CheckCircle2,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                  title: "Options and extensions",
                  desc: "Sole source contracts are awarded like any other federal contract — with base years and options. A $2M sole source contract with four option years is a $10M relationship.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border ${item.bg} animate-on-scroll`}
                >
                  <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color}`} />
                  <div>
                    <p className="font-semibold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The{" "}
              <Link
                href="/features/matching"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                opportunity matching
              </Link>{" "}
              and{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                intelligence tools
              </Link>{" "}
              in CapturePilot are built to surface exactly this kind of early relationship
              opportunity — agencies that consistently sole source to 8(a) firms in your NAICS
              codes, before requirements are formally posted.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-lg mb-1">Is your business 8(a) eligible?</p>
                <p className="text-blue-100 text-sm">
                  Run a free eligibility check in under 2 minutes. No account required.
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

          {/* Section 3 */}
          <SectionHeading
            id="new-thresholds"
            number="03"
            title="The New 2025 Thresholds"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              On October 1, 2025, the FAR Council finalized inflation-adjusted threshold increases
              that directly affect 8(a) sole source authority. These are the most significant
              threshold increases in several years — and they meaningfully expand what you can
              capture without competition.
            </p>

            {/* Threshold comparison table */}
            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Contract Type</th>
                    <th className="text-right px-4 py-3 font-semibold">Old Threshold</th>
                    <th className="text-right px-4 py-3 rounded-tr-xl font-semibold">New Threshold (Oct 2025)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Services, IT, professional services", old: "$4.5M", updated: "$5.5M" },
                    { type: "Manufacturing (product NAICS codes)", old: "$7M", updated: "$8.5M" },
                    {
                      type: "J&D required above this limit (individually-owned 8(a)s)",
                      old: "$25M",
                      updated: "$30M",
                    },
                    {
                      type: "Lifetime aggregate sole source limit (individually-owned)",
                      old: "N/A",
                      updated: "$168.5M",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="px-4 py-3 text-stone-700 border-b border-stone-100">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 text-right text-stone-400 border-b border-stone-100 line-through">
                        {row.old}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-stone-100">
                        {row.updated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The services threshold increase from $4.5M to $5.5M is particularly significant for
              IT, consulting, facilities management, and staffing firms. A $5.5M sole source
              contract often covers a full year of substantial work. Combined with multi-year option
              periods, a single agency relationship can fund a firm&apos;s entire early growth
              phase.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The $30M J&amp;D threshold update is more nuanced. For awards above $30M, agencies
              need a formal Justification and Approval (J&amp;A) document to award on a sole source
              basis — the same process that applies to any large sole source award government-wide.
              This mostly affects Tribal, Alaska Native Corporation (ANC), and Native Hawaiian
              Organization (NHO) 8(a) entities, which have higher thresholds and historically
              larger contract sizes.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The $168.5M lifetime aggregate cap was introduced to limit how much one
              individually-owned firm can receive through sole source channels over its 9-year
              program life. Hit the cap, and you lose sole source eligibility — but you can still
              compete for 8(a) competitive set-asides. For most firms, this limit is academic.
              Hitting $168.5M in sole source awards is a serious success problem.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Tribal / ANC 8(a) Entities Play by Different Rules">
            Alaska Native Corporations, Indian Tribes, and Native Hawaiian Organizations that hold
            8(a) certification operate under separate regulations (13 CFR 124.506(b)). Their sole
            source thresholds are not capped at $5.5M or $8.5M — they can receive sole source
            awards of any dollar value with SBA approval. This is why ANC-owned 8(a) firms win many
            of the largest sole source contracts in DoD and the intelligence community. If you are
            individually-owned (not entity-owned), your thresholds are the ones in the table above.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="eligibility"
            number="04"
            title="Who Qualifies for 8(a) Certification"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA has three distinct categories of eligibility requirements. You need to satisfy
              all three before applying, and each one has tripped up firms that assumed they
              qualified.
            </p>

            {/* 3-column eligibility breakdown */}
            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Users,
                  title: "Ownership & Control",
                  color: "border-blue-200",
                  iconColor: "text-blue-600",
                  items: [
                    "51%+ owned by qualifying individual(s)",
                    "Owner must be U.S. citizen",
                    "Owner must unconditionally control daily operations",
                    "Highest officer or managing partner must be the disadvantaged individual",
                  ],
                },
                {
                  icon: Shield,
                  title: "Social & Economic Disadvantage",
                  color: "border-emerald-200",
                  iconColor: "text-emerald-600",
                  items: [
                    "Personal net worth: ≤$850,000",
                    "Adjusted gross income (3-yr avg): ≤$400,000",
                    "Total assets: ≤$6.5 million",
                    "Must submit social disadvantage narrative (no more self-certification)",
                  ],
                },
                {
                  icon: Award,
                  title: "Business Requirements",
                  color: "border-amber-200",
                  iconColor: "text-amber-600",
                  items: [
                    "Must be a small business per SBA size standards",
                    "In business for at least 2 years",
                    "Active SAM.gov registration",
                    "Good character (no debarment, no fraud history)",
                  ],
                },
              ].map((col, i) => (
                <div
                  key={i}
                  className={`rounded-xl border-2 ${col.color} p-5 animate-on-scroll`}
                >
                  <col.icon className={`w-6 h-6 ${col.iconColor} mb-3`} />
                  <h3 className="font-bold text-stone-900 text-sm mb-3">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stone-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The net worth calculation is where many applicants stumble. The $850,000 limit
              excludes equity in the applicant firm and equity in your primary residence — meaning
              a business owner with $1.2M in home equity and a $600K ownership stake can still
              qualify if their remaining assets fall below the threshold. Work through this
              carefully with a GovCon attorney before concluding you&apos;re ineligible.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The social disadvantage narrative requirement is the biggest recent change. A 2025
              court ruling in the Eastern District of Tennessee struck down the SBA&apos;s
              &ldquo;rebuttable presumption&rdquo; of social disadvantage for certain racial and
              ethnic groups. The SBA now requires all applicants to submit a personal narrative
              documenting specific instances of social disadvantage — how it affected your access
              to education, employment, and business opportunities. This isn&apos;t a checkbox;
              it&apos;s a substantive document that needs to connect your personal history to
              verifiable outcomes.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The 2-year in business requirement is the single hardest bar for startups. The SBA
              can waive it in limited circumstances — primarily when the firm has extraordinary
              financial capacity or prior federal contracting experience — but these waivers are
              rare. If you&apos;re in year one, use the time to build past performance through
              subcontracting and prepare a strong application for month 24.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Not Sure If You Qualify?">
            Run a quick eligibility check with CapturePilot&apos;s{" "}
            <Link href="/features/quick-checker" className="underline font-medium">
              Quick Checker
            </Link>{" "}
            before spending hours assembling an application. It walks through the financial and
            ownership thresholds, identifies what certifications you likely qualify for, and flags
            gaps you need to close. Free to use, no account required.{" "}
            <a href={CHECK_URL} className="underline font-medium">
              Check eligibility now →
            </a>
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="how-to-certify"
            number="05"
            title="How to Get 8(a) Certified"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The entire application lives at{" "}
              <strong>certify.sba.gov</strong>. The SBA eliminated paper applications. You
              create an account, complete the online application, upload supporting documents, and
              submit. There&apos;s no filing fee.
            </p>

            <div className="space-y-0 mb-8">
              {[
                {
                  step: "01",
                  title: "Register on SAM.gov and get your UEI",
                  desc: "Every federal contractor needs an active SAM.gov registration. Your Unique Entity Identifier (UEI) is your firm's federal identity number. If you don't have one, start here — the 8(a) application won't accept a submission without an active SAM registration.",
                  time: "1–3 weeks",
                },
                {
                  step: "02",
                  title: "Create your certify.sba.gov account",
                  desc: "The SBA's Certify platform is where 8(a) (and WOSB/HUBZone) applications are submitted. You'll link your SAM.gov registration during setup. The platform will pre-populate some business data from SAM.",
                  time: "1 day",
                },
                {
                  step: "03",
                  title: "Complete the application and upload documents",
                  desc: "The application covers business ownership, personal financial statements, social disadvantage narrative, organizational documents (articles of incorporation, operating agreement), tax returns (3 years), and banking records. The narrative is the hardest part — give it more time than you think it needs.",
                  time: "2–4 weeks",
                },
                {
                  step: "04",
                  title: "SBA review and possible request for information",
                  desc: "The SBA reviews submissions and frequently issues a Request for Information (RFI) asking for clarifications or additional documents. Respond promptly — delays in responding extend your timeline significantly.",
                  time: "60–90 days typical",
                },
                {
                  step: "05",
                  title: "Receive certification or denial letter",
                  desc: "If approved, your firm is certified for 9 years from the approval date. You'll appear in the SBA's 8(a) directory. If denied, you can appeal to the SBA Office of Hearings and Appeals (OHA) within 45 days.",
                  time: "Certification valid for 9 years",
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
                    <div className="flex items-center gap-3 mb-1">
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

            <p className="text-stone-600 leading-relaxed">
              Total timeline from starting your SAM registration to approved 8(a) certification
              typically runs <strong>90–120 days</strong> for well-prepared applicants. Poorly
              organized applications with missing documents can stretch to 6–9 months. Hire an
              attorney who specializes in 8(a) applications if your ownership structure or financial
              picture is at all complicated.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="getting-sole-sourced"
            number="06"
            title="How to Get an Agency to Sole Source to You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              This is where most 8(a) guides stop too soon. Getting certified is step one. Getting
              an agency to actually use sole source authority on your behalf requires deliberate
              positioning.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Contracting officers don&apos;t browse the 8(a) directory and randomly select firms.
              They sole source to companies they already know — firms whose capabilities match an
              existing requirement, whose program managers have vouched for them, or who showed up
              at the right moment with a relevant{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                capability statement
              </Link>{" "}
              and a specific solution.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  number: "A",
                  title: "Target agencies that consistently use 8(a) sole source",
                  content:
                    "Not every agency uses 8(a) authority equally. DoD, VA, DHS, and USDA are heavy users. Pull USASpending.gov data for your NAICS codes — filter by set-aside type '8A' and look for repeat agency buyers. A contracting office that sole sourced three similar contracts in the last two years is primed to do it again.",
                },
                {
                  number: "B",
                  title: "Get in front of program managers, not just contracting officers",
                  content:
                    "Program managers (PMs) own the requirement and often drive the vendor selection before the contract office gets involved. They attend industry days, respond to capabilities briefings, and remember firms that solved similar problems elsewhere. COs execute what PMs request. Work backward from the PM.",
                },
                {
                  number: "C",
                  title: "Respond to Sources Sought notices with depth",
                  content:
                    "When an agency posts a Sources Sought notice in your space, your response is a relationship-building tool, not a formality. Write a substantive capability response. Include relevant past performance. Offer to brief. A strong Sources Sought response has directly preceded sole source awards — the CO realizes your firm is the obvious fit before they even post a solicitation. See our guide on how to use Sources Sought notices strategically.",
                },
                {
                  number: "D",
                  title: "Request informational briefings with contracting offices",
                  content:
                    "Under FAR Part 15, you can request informational briefings with agency contracting offices. These aren't negotiations — they're opportunities to introduce your firm, understand upcoming requirements, and make your 8(a) certification relevant to a specific need. Most contracting offices will take these meetings, especially for 8(a) firms.",
                },
                {
                  number: "E",
                  title: "Propose early via unsolicited proposals",
                  content:
                    "FAR Part 15.6 governs unsolicited proposals — submissions to an agency that describe a unique capability or solution not already being acquired. If your solution is genuinely innovative or differentiated, an unsolicited proposal can trigger an 8(a) sole source award directly. This is uncommon but real.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5 rounded-xl border border-stone-200 bg-stone-50 animate-on-scroll hover-lift"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link
                href="/features/pipeline"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                pipeline management
              </Link>{" "}
              tools let you track agency relationships, log meeting notes, and set reminders for
              follow-ups — so your BD activity with target contracting offices doesn&apos;t fall
              through the cracks.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="award-process"
            number="07"
            title="The 5-Step Sole Source Award Process"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Once an agency decides to use 8(a) sole source authority for your firm, the
              mechanics follow a defined sequence under FAR Subpart 19.8. Knowing this process
              helps you move through it quickly when an opportunity arrives.
            </p>

            <div className="space-y-0 mb-8">
              {[
                {
                  step: "01",
                  title: "Agency prepares the procurement package",
                  desc: "The program manager provides a Performance Work Statement (PWS) or Statement of Objectives (SOO), a cost estimate, and funding documentation to the contracting officer. This internal package needs to be complete before the CO can send an offer letter to the SBA.",
                  owner: "Agency PM & CO",
                },
                {
                  step: "02",
                  title: "CO sends an Offer Letter to the SBA",
                  desc: "The contracting officer submits a formal offer letter to the SBA at dcofferletters@sba.gov. The letter identifies your firm, describes the requirement, states the estimated value, and confirms the award will be within the applicable sole source threshold. For contracts above the threshold, additional justification is included.",
                  owner: "Contracting Officer",
                },
                {
                  step: "03",
                  title: "SBA reviews and accepts (5 business days)",
                  desc: "The SBA reviews the offer letter and verifies your firm is in good standing in the 8(a) program, the proposed contract fits your NAICS code, and the estimated value is within limits. The SBA typically responds within 5 business days. Acceptance is formal written notice from SBA back to the contracting officer.",
                  owner: "SBA",
                },
                {
                  step: "04",
                  title: "Agency sends you an RFP or RFQ",
                  desc: "With SBA acceptance in hand, the agency issues you a Request for Proposals or Request for Quotes. You're the only firm receiving it. Write your technical proposal as if it's a competitive bid — price negotiations happen after submission, but a strong technical approach protects your margin.",
                  owner: "You",
                },
                {
                  step: "05",
                  title: "Price negotiation and contract award",
                  desc: "The contracting officer evaluates your proposal and negotiates price. Unlike a competitive award, you're negotiating with one buyer. Know your cost structure. Document your basis of estimate. The award is made by contract, and performance begins after the Notice to Proceed.",
                  owner: "CO & You",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 animate-on-scroll">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    {i < 4 && <div className="w-px flex-1 bg-stone-200 my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <span className="text-xs text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.owner}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The SBA&apos;s 5-business-day acceptance turnaround is a legal requirement, not a
              target. In practice, complex requirements with unusual NAICS classifications or
              dollar amounts near the threshold limit may take longer. Build a 2-week buffer into
              your deal timeline for the SBA acceptance step.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-black text-lg text-stone-900 mb-1">
                  Track your 8(a) pipeline in one place
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  CapturePilot&apos;s pipeline tools let you manage agency relationships, track
                  opportunity stages, and get alerts when agencies post 8(a) set-asides in your
                  NAICS codes.
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

          {/* Section 8 */}
          <SectionHeading
            id="nine-year-term"
            number="08"
            title="Using Your 9-Year Term Strategically"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The 8(a) program splits your 9 years into two phases: a 4-year developmental stage
              and a 5-year transitional stage. The distinction matters for how you should approach
              business development in each phase.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                    D
                  </div>
                  <h3 className="font-bold text-stone-900">Developmental Stage (Years 1–4)</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  This is your runway. Use it aggressively to build past performance through sole
                  source awards and small competitive set-asides. The SBA is more accommodating of
                  smaller contracts and broader NAICS code scope during this phase.
                </p>
                <ul className="space-y-2">
                  {[
                    "Target $500K–$3M sole source contracts",
                    "Diversify to 2–3 federal agencies",
                    "Get at least 3 CPARS ratings",
                    "Build your BD pipeline for transitional phase",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                    T
                  </div>
                  <h3 className="font-bold text-stone-900">Transitional Stage (Years 5–9)</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  You should be landing larger competitive 8(a) set-asides and IDIQ task orders
                  during this phase. Sole source is still available, but graduation-readiness means
                  competing successfully against other 8(a) firms at higher dollar values.
                </p>
                <ul className="space-y-2">
                  {[
                    "Target $2M–$5.5M sole source contracts",
                    "Pursue IDIQ and GWAC on-ramps",
                    "Build mentor-protégé relationships",
                    "Develop a post-graduation contract strategy",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The biggest strategic mistake in the 8(a) program is treating it as an infinite
              safety net. Your 9 years tick down regardless of how many contracts you win. Firms
              that spend years 1–4 chasing every possible certification and not closing any sole
              source contracts wake up in year 7 with mediocre past performance and a graduation
              date approaching fast.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Plan for graduation from day one. Get on at least one{" "}
              <Link
                href="/blog/idiq-contracts-explained"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                IDIQ or GWAC vehicle
              </Link>{" "}
              that doesn&apos;t require 8(a) status by year 6. Your post-graduation revenue comes
              from task orders and vehicles, not from the set-aside pool.
            </p>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="The Mentor-Protégé Program: Your 8(a) Force Multiplier">
            The SBA&apos;s 8(a) Mentor-Protégé Program lets an 8(a) firm partner with a large,
            experienced government contractor. The mentor provides business development assistance,
            technical capabilities, and — critically — the ability to compete together on contracts
            where you wouldn&apos;t qualify solo. Joint ventures between 8(a) protégés and large
            business mentors can bid on contracts at any size while still counted as 8(a)
            awards. If you have the right mentor partner, this extends the effective value of sole
            source authority well beyond the $5.5M threshold.
          </Callout>

          {/* Section 9 */}
          <SectionHeading
            id="mistakes"
            number="09"
            title="Mistakes That Kill 8(a) Sole Source Deals"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These are the errors that cause deals to collapse, certifications to be revoked, or
              firms to hit the end of their 9-year term with nothing to show for it.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: XCircle,
                  title: "Exceeding the sole source threshold without a J&A",
                  desc: "If your deal is priced above $5.5M (services) or $8.5M (manufacturing) and the agency doesn't prepare the required Justification and Approval document, the award is legally vulnerable to protest. Contracting officers know this. If your scope creeps past the threshold mid-negotiation, the CO will either restructure the award or pull it back to full competition.",
                },
                {
                  icon: XCircle,
                  title: "Letting SAM.gov registration lapse",
                  desc: "Your SAM.gov registration requires annual renewal. If it lapses, you are ineligible for contract awards — period. This has canceled sole source awards that were days from execution. Set a calendar reminder 60 days before your SAM expiration date and renew early. Same principle applies to your 8(a) certification annual review.",
                },
                {
                  icon: XCircle,
                  title: "Ownership or control changes without SBA approval",
                  desc: "The 8(a) program requires the disadvantaged owner to maintain 51% ownership and unconditional control throughout the program. Any change in equity distribution — even small restructuring for investor reasons — must be disclosed to and approved by the SBA before it happens. Undisclosed changes are a basis for program termination and, potentially, False Claims Act exposure.",
                },
                {
                  icon: XCircle,
                  title: "Bidding on sole source contracts outside your primary NAICS",
                  desc: "The SBA tracks your revenue mix. If you're winning 80% of your revenue under NAICS codes that don't match your SBA-approved primary code, expect questions during your annual review. Build your NAICS code portfolio deliberately, and ensure your SBA business plan reflects the work you're actually pursuing.",
                },
                {
                  icon: XCircle,
                  title: "Not tracking the aggregate lifetime limit",
                  desc: "Once an individually-owned 8(a) firm's cumulative sole source awards hit $168.5M, sole source authority ends — even if years remain in the program. This is increasingly relevant for firms that land large Department of Defense sole source contracts. Track your running total.",
                },
                {
                  icon: XCircle,
                  title: "Failing to perform on the first sole source award",
                  desc: "Your first sole source is also your first CPARS rating. A marginal performance score on a sole source contract — where the agency took a risk on an unproven firm — is damaging in a way that a competitive bid loss is not. The contracting officer who advocated for your firm to the SBA is the same person who writes your CPARS. Staff the job correctly.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-rose-100 bg-rose-50 animate-on-scroll"
                >
                  <item.icon className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The 8(a) program is powerful, and it attracts scrutiny — from the SBA, from GAO
              protesters, and from competing firms that lost work they expected to win. The rules
              exist to protect the program&apos;s integrity. Following them precisely is not
              bureaucratic overhead; it&apos;s how you protect a certification that took 4 months
              to earn.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use{" "}
              <Link
                href="/features/proposals"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                CapturePilot&apos;s proposal tools
              </Link>{" "}
              to document your compliance posture on each 8(a) contract — NAICS alignment,
              threshold verification, and pricing rationale — before you submit.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="max-w-xl">
              <FileText className="w-8 h-8 text-blue-400 mb-4" />
              <h2 className="text-2xl font-black mb-3">
                Ready to build your 8(a) sole source pipeline?
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                CapturePilot tracks 8(a) set-aside opportunities, agency buying patterns, and
                incumbent contract data — so you know which agencies to target before requirements
                are written. Start your free trial or book a strategy call to see how it works.
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
                  href: "/blog/wosb-certification-guide",
                  title: "WOSB Certification Guide",
                  desc: "How Women-Owned Businesses win federal set-aside contracts.",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts Guide",
                  desc: "The complete veteran-owned business guide to sole source and set-aside awards.",
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
