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
  FileText,
  Clock,
  Shield,
  Info,
  Zap,
  TrendingUp,
  Scale,
  XCircle,
  Building2,
  RefreshCw,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-far", label: "What the FAR Is and Why It Controls Everything" },
  { id: "key-thresholds", label: "The 2025 Threshold Updates You Need to Know" },
  { id: "set-aside-clauses", label: "Set-Aside Clauses: Your Competitive Moat" },
  { id: "limitations-subcontracting", label: "FAR 52.219-14: The Subcontracting Limit That Trips Up New Contractors" },
  { id: "rerepresentation", label: "FAR 52.219-28: The Size Status Clock That Never Stops" },
  { id: "commercial-items", label: "FAR 52.212-5: The Commercial Items Master Clause" },
  { id: "payment-clauses", label: "Payment Clauses: When and How You Actually Get Paid" },
  { id: "termination", label: "Termination for Convenience: When the Government Pulls the Plug" },
  { id: "part19-overhaul", label: "The 2025 FAR Part 19 Overhaul: What Changed" },
  { id: "noncompliance-costs", label: "What Noncompliance Actually Costs You" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "rose" | "violet" | "orange";
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
    orange: "bg-orange-50 border-orange-200 text-orange-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    rose: "text-rose-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
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

function ClauseCard({
  number,
  title,
  when,
  why,
  risk,
}: {
  number: string;
  title: string;
  when: string;
  why: string;
  risk: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 hover-lift">
      <div className="flex items-start gap-4">
        <div className="bg-blue-50 text-blue-700 rounded-xl px-3 py-1.5 text-xs font-mono font-bold shrink-0">
          {number}
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-stone-900 mb-3">{title}</h3>
          <div className="space-y-2 text-sm text-stone-600">
            <div className="flex gap-2">
              <span className="font-semibold text-stone-500 shrink-0 w-16">When:</span>
              <span>{when}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-stone-500 shrink-0 w-16">Why:</span>
              <span>{why}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-rose-600 shrink-0 w-16">Risk:</span>
              <span className="text-rose-700">{risk}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FarClausesSmallBusinessPage() {
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
            <span className="text-stone-900 font-medium">FAR Clauses for Small Business</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Scale className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Key FAR Clauses Every{" "}
            <span className="gradient-text">
              Small Business Contractor Must Know
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The Federal Acquisition Regulation is 2,000+ pages of rules that govern every dollar
            the U.S. government spends on contracts. You don&apos;t need to read all of it. But
            there are{" "}
            <strong className="text-stone-700">a dozen clauses</strong> that will show up in nearly
            every contract you sign — and violating them can end your federal business. Here&apos;s
            the ones that matter most, updated for the{" "}
            <strong className="text-stone-700">2025 FAR threshold increases and Part 19
            overhaul</strong>.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>20 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 18, 2026</span>
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
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="text-xs font-bold text-stone-400 mt-1 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-blue-700 hover:text-blue-900 hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="what-is-far"
              number="01"
              title="What the FAR Is and Why It Controls Everything"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              The Federal Acquisition Regulation — codified at Title 48 of the Code of Federal
              Regulations — is the primary rulebook for federal procurement. Every civilian agency
              uses it. The Department of Defense supplements it with the DFARS. Other agencies add
              their own supplements on top of that.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              When you sign a government contract, every clause in that document has a FAR citation
              behind it. That citation tells you exactly what the clause does, what happens if you
              violate it, and who has authority to waive it (almost no one). The clauses aren&apos;t
              negotiable in any meaningful sense. You can&apos;t redline them the way you would a
              commercial deal. You accept them or you don&apos;t bid.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The practical implication: you need to know what these clauses require{" "}
              <em>before</em> you sign, not after. A clause you didn&apos;t read is still
              enforceable. Ignorance of a FAR requirement doesn&apos;t excuse noncompliance — it
              just means the penalty comes as a surprise.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              This guide focuses on the clauses most likely to affect small businesses. Not the
              full 2,000 pages. The ones you&apos;ll actually see in your solicitations, the ones
              with the most compliance risk, and the ones that changed in 2025.
            </p>

            <Callout icon={Info} color="sky" title="How FAR Clauses Work in Your Contract">
              <p>
                Most contracts incorporate FAR clauses by reference — they list the clause number
                and date, not the full text. A clause listed as{" "}
                <code className="font-mono bg-sky-100 px-1 rounded">52.219-14 (OCT 2022)</code>{" "}
                means the October 2022 version applies. If the FAR was updated after contract award,
                the old version governs unless there&apos;s a contract modification. Always check
                the clause date against the current version at{" "}
                <a
                  href="https://www.acquisition.gov/far"
                  className="underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  acquisition.gov
                </a>
                .
              </p>
            </Callout>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="key-thresholds"
              number="02"
              title="The 2025 Threshold Updates You Need to Know"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              Every few years, the FAR Council adjusts acquisition-related dollar thresholds for
              inflation. The last update went into effect{" "}
              <strong>October 1, 2025</strong>, and the changes are significant enough that any
              training or guidance you read before that date may be wrong.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              These thresholds determine which clauses apply to your contract, what procedures the
              government must follow, and when small business rules kick in. Get them wrong and
              you might bid on work you&apos;re not eligible for — or miss set-aside opportunities
              you&apos;re entitled to.
            </p>

            {/* Threshold table */}
            <div className="overflow-x-auto rounded-2xl border border-stone-200 my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left px-5 py-3.5 font-bold text-stone-700">Threshold</th>
                    <th className="text-left px-5 py-3.5 font-bold text-stone-700">Old Amount</th>
                    <th className="text-left px-5 py-3.5 font-bold text-stone-700">New Amount (Oct 2025)</th>
                    <th className="text-left px-5 py-3.5 font-bold text-stone-700">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Micro-Purchase Threshold (MPT)</td>
                    <td className="px-5 py-4 text-stone-600">$10,000</td>
                    <td className="px-5 py-4 font-bold text-emerald-700">$15,000</td>
                    <td className="px-5 py-4 text-stone-600">No competition required below this. No small business preference requirements either.</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Simplified Acquisition Threshold (SAT)</td>
                    <td className="px-5 py-4 text-stone-600">$250,000</td>
                    <td className="px-5 py-4 font-bold text-emerald-700">$350,000</td>
                    <td className="px-5 py-4 text-stone-600">Rule of Two mandatory set-aside zone. Above this, more complex rules and procedures apply.</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Subcontracting Plan Threshold</td>
                    <td className="px-5 py-4 text-stone-600">$750,000</td>
                    <td className="px-5 py-4 font-bold text-emerald-700">$900,000</td>
                    <td className="px-5 py-4 text-stone-600">Large primes must have a small business subcontracting plan above this. Key for your teaming strategy.</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">8(a) Sole-Source Threshold (services)</td>
                    <td className="px-5 py-4 text-stone-600">$4.5M</td>
                    <td className="px-5 py-4 font-bold text-emerald-700">Unchanged</td>
                    <td className="px-5 py-4 text-stone-600">Below this, COs can award 8(a) sole-source without competitive justification.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout icon={Lightbulb} color="amber" title="The Rule of Two Explained">
              <p>
                Between the Micro-Purchase Threshold ($15,000) and the Simplified Acquisition
                Threshold ($350,000), contracting officers are required to set aside work for small
                businesses whenever two or more small businesses are expected to submit offers at
                fair market prices. This isn&apos;t optional — it&apos;s a statutory mandate. If
                you see a non-set-aside solicitation in that range, it may be worth questioning the
                contracting officer or contacting the agency&apos;s small business specialist.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mt-4">
              The SAT increase also means fewer contracts now require the complex cost accounting
              and reporting requirements triggered above $350,000. If you&apos;ve been holding back
              from bidding on certain work due to those requirements, re-examine whether the
              increased threshold puts you in a cleaner compliance zone.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Not Sure Which Set-Asides You Qualify For?</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Run a free eligibility check on CapturePilot. Answer a few questions and get a
                  full breakdown of which certifications and set-aside programs apply to your
                  business.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="set-aside-clauses"
              number="03"
              title="Set-Aside Clauses: Your Competitive Moat"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              Set-aside clauses are the mechanism by which the government restricts competition
              to specific categories of small businesses. When one of these clauses appears in a
              solicitation, large businesses can&apos;t bid. That&apos;s your competitive moat —
              but only if you&apos;re properly certified and stay eligible.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              The contracting officer is required by law to insert the relevant clause when setting
              aside work. If you don&apos;t see the clause, verify the set-aside — sometimes
              contracting officers make mistakes.
            </p>

            <div className="space-y-4">
              <ClauseCard
                number="52.219-6"
                title="Notice of Total Small Business Set-Aside"
                when="In any solicitation and contract for a total small business set-aside above the MPT"
                why="Restricts competition to businesses that qualify as small under the applicable NAICS code size standard"
                risk="Misrepresenting your size is a False Claims Act violation. Penalties up to 3x damages plus $27K per claim."
              />
              <ClauseCard
                number="52.219-7"
                title="Notice of Partial Small Business Set-Aside"
                when="When only a portion of the work is set aside for small business"
                why="Splits the work — large businesses compete for the unrestricted portion, small businesses compete for the set-aside portion"
                risk="You can only bid on the set-aside portion if you qualify. Bidding on the wrong portion or misrepresenting your part can trigger a protest."
              />
              <ClauseCard
                number="52.219-3"
                title="Notice of HUBZone Set-Aside or Sole Source Award"
                when="In HUBZone set-aside or sole-source solicitations"
                why="Restricts competition to SBA-certified HUBZone small business concerns"
                risk="HUBZone certification has ongoing employee residency requirements. Failing to maintain them after award is a violation."
              />
              <ClauseCard
                number="52.219-18"
                title="Notification of Competition Limited to Eligible 8(a) Participants"
                when="In competitive 8(a) solicitations"
                why="Limits competition to SBA-certified 8(a) participants. Separate from sole-source 8(a) procedures."
                risk="8(a) graduation or program removal after contract award can complicate option exercise."
              />
              <ClauseCard
                number="52.219-27"
                title="Notice of Set-Aside for, or Sole Source Award to, Service-Disabled Veteran-Owned Small Business Concerns"
                when="In SDVOSB set-aside or sole-source solicitations"
                why="Restricts competition to VA-verified or SBA-certified SDVOSBs depending on the agency"
                risk="Verification status must be current at time of offer. Check your SAM.gov profile before submitting."
              />
            </div>

            <p className="text-stone-700 leading-relaxed mt-6">
              The key compliance point across all set-aside clauses: your eligibility is assessed
              at time of offer, not at time of award. If your size or certification status changes
              between submitting and winning, you may have a problem. Track your status actively —
              use{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline font-medium">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to verify your eligibility before each bid.
            </p>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="limitations-subcontracting"
              number="04"
              title="FAR 52.219-14: The Subcontracting Limit That Trips Up New Contractors"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              This is one of the most frequently violated — and most consequential — clauses for
              small business set-aside winners. The Limitations on Subcontracting clause prevents
              small business prime contractors from becoming pass-through vehicles for large
              companies.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The rule is triggered on set-aside contracts above the SAT ($350,000 as of October
              2025), including sole-source awards. The specific limits depend on contract type:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-stone-200 my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left px-5 py-3.5 font-bold text-stone-700">Contract Type</th>
                    <th className="text-left px-5 py-3.5 font-bold text-stone-700">Self-Performance Rule</th>
                    <th className="text-left px-5 py-3.5 font-bold text-stone-700">What This Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Services (non-construction)</td>
                    <td className="px-5 py-4 font-bold text-blue-700">50% self-performance minimum</td>
                    <td className="px-5 py-4 text-stone-600">You can pay non-similarly-situated subs no more than 50% of what the government pays you (excluding materials)</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Supplies (non-manufacturer)</td>
                    <td className="px-5 py-4 font-bold text-blue-700">50% of labor costs</td>
                    <td className="px-5 py-4 text-stone-600">You must provide at least 50% of the labor costs incurred under the contract</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">General Construction</td>
                    <td className="px-5 py-4 font-bold text-blue-700">15% self-performance minimum</td>
                    <td className="px-5 py-4 text-stone-600">You can pay non-similarly-situated subs no more than 85% of what the government pays you</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Special Trade Construction</td>
                    <td className="px-5 py-4 font-bold text-blue-700">25% self-performance minimum</td>
                    <td className="px-5 py-4 text-stone-600">You can pay non-similarly-situated subs no more than 75% of what the government pays you</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Critical: 'Similarly Situated' Matters">
              <p>
                Work performed by{" "}
                <strong>&quot;similarly situated entities&quot;</strong> — other small businesses
                with the same socioeconomic status as the prime on that contract — does NOT count
                against the subcontracting limits. If you&apos;re an 8(a) prime and you sub 30% to
                another 8(a) firm, that doesn&apos;t count as subcontracting for this rule. Only
                work flowing to businesses that don&apos;t share your set-aside status counts
                toward the cap.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mt-4 mb-4">
              This clause has teeth. Violations can result in False Claims Act liability, contract
              termination, and debarment. The most common failure pattern: a new small business
              wins a set-aside, realizes they can&apos;t deliver the scope, and brings in a large
              company as the de facto prime. That arrangement — even if the small business retains
              the prime contract vehicle — is exactly what this clause prohibits.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Before you bid a set-aside, build out your{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                teaming and delivery plan
              </Link>{" "}
              to verify you can actually meet the self-performance requirement. If you can&apos;t,
              consider whether to bid at all, or whether to find similarly-situated partners who
              keep you compliant.
            </p>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="rerepresentation"
              number="05"
              title="FAR 52.219-28: The Size Status Clock That Never Stops"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              Here&apos;s a situation more small businesses face than you might expect: you win a
              multi-year contract as a small business, grow significantly over the life of the
              contract, and eventually exceed the size standard for your NAICS code. What happens?
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 52.219-28 — Post-Award Small Business Program Rerepresentation — requires you to
              actively re-certify your size and socioeconomic status at specific trigger points,
              even on a contract you already won. The January 2025 updates tightened exactly when
              those triggers fire.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4 font-semibold text-stone-900">
              Under the updated clause (JAN 2025), you must rerepresent your size when:
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  trigger: "Annual anniversary",
                  detail: "For contracts over five years, you must rerepresent no more than 60 days before each contract anniversary.",
                },
                {
                  trigger: "Merger or acquisition",
                  detail: "Any merger, acquisition, or novation that changes your ownership structure triggers mandatory rerepresentation within 30 days.",
                },
                {
                  trigger: "Order-level set-asides on MACs",
                  detail: "If you're on a multiple-award contract (MAC) and the agency sets aside a specific order for small businesses, you must rerepresent at order level if the MAC was unrestricted.",
                },
                {
                  trigger: "Socioeconomic status set-asides on MACs",
                  detail: "If the agency restricts an order to a specific socioeconomic category (e.g., SDVOSB-only), all offerors on the MAC must rerepresent their socioeconomic status.",
                },
              ].map((item) => (
                <div key={item.trigger} className="flex gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{item.trigger}</p>
                    <p className="text-stone-600 text-sm mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="rose" title="What Happens If You Rerepresent as Other-Than-Small">
              <p className="mb-2">
                If you rerepresent that you no longer qualify as small on an existing contract, the
                agency{" "}
                <strong>can no longer count the remaining contract value toward its small business
                prime contracting goals</strong>. This doesn&apos;t end the contract — you keep
                performing — but the agency loses credit for it.
              </p>
              <p>
                The bigger risk: if you <em>fail to rerepresent</em> when required and continue
                claiming small business credit after growing beyond the size standard, that&apos;s
                a false representation. It can trigger a GAO protest, SBA size determination, False
                Claims Act exposure, and suspension or debarment proceedings.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mt-4">
              Build a calendar for rerepresentation deadlines. If you use{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                CapturePilot&apos;s contract intelligence tools
              </Link>
              , you can set reminders tied to contract anniversaries and track your size status
              trajectory before it becomes a compliance problem.
            </p>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="commercial-items"
              number="06"
              title="FAR 52.212-5: The Commercial Items Master Clause"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              If you&apos;re selling commercial products or commercial services — and for most
              small businesses, you are — FAR 52.212-5 is the most important clause in your
              contract. It&apos;s a &quot;master clause&quot; that incorporates a list of other
              required clauses by reference. Instead of spelling them all out, the government
              inserts FAR 52.212-5 and checks the boxes for which sub-clauses apply to your
              specific contract.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              This is actually contractor-friendly: commercial item acquisitions carry a reduced
              compliance burden compared to non-commercial contracts. The 2025 FAR 2.0 overhaul
              of Part 12 removed two additional &quot;master&quot; clauses, reducing the length
              of commercial item solicitations by roughly 30% and eliminating 40+ previously
              required clauses and provisions.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4 font-semibold text-stone-900">
              Key sub-clauses typically activated within 52.212-5:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  clause: "52.219-6",
                  label: "Small Business Set-Aside",
                  note: "Restricts competition if set aside",
                },
                {
                  clause: "52.219-14",
                  label: "Limitations on Subcontracting",
                  note: "Self-performance floor on set-asides",
                },
                {
                  clause: "52.222-54",
                  label: "Employment Eligibility Verification",
                  note: "E-Verify compliance required",
                },
                {
                  clause: "52.222-55",
                  label: "Minimum Wages (EO 14026)",
                  note: "$17.75/hour for covered workers in 2025",
                },
                {
                  clause: "52.225-13",
                  label: "Restrictions on Foreign Purchases",
                  note: "Trade sanctions and embargoes apply",
                },
                {
                  clause: "52.232-40",
                  label: "Accelerated Payments to Small Business Subs",
                  note: "Pass-through payment timing requirement",
                },
              ].map((item) => (
                <div key={item.clause} className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="font-mono text-xs font-bold text-blue-700 mb-1">{item.clause}</p>
                  <p className="font-semibold text-stone-800 text-sm">{item.label}</p>
                  <p className="text-stone-600 text-xs mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              When you receive a solicitation, look for the list of checked sub-clauses under
              52.212-5. Only the checked ones apply. Read each one before bid submission — especially
              the employment and wage clauses, which carry independent compliance obligations that
              persist for the life of the contract.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="payment-clauses"
              number="07"
              title="Payment Clauses: When and How You Actually Get Paid"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              Cash flow kills more small businesses in government contracting than lost bids.
              The FAR has specific rules about when the government must pay you — and when you must
              pass payments down to your small business subcontractors.
            </p>

            <div className="space-y-4 mb-6">
              <div className="rounded-2xl border border-stone-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-2.5 rounded-xl shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">FAR 52.232-25: Prompt Payment</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-2">
                      The government must pay your proper invoice within <strong>30 days</strong>{" "}
                      of receipt by the designated billing office, or within 30 days of government
                      acceptance of your deliverables — whichever is later. If they miss that window,
                      interest accrues automatically at the Treasury rate. You don&apos;t need to
                      demand it; the government is required to add it to your payment.
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      <strong>Practical implication:</strong> Submit a proper invoice the moment
                      your deliverable is accepted. The 30-day clock doesn&apos;t start until
                      you submit. A payment office will reject an improper invoice and restart
                      the clock. Get your invoice format right the first time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-2.5 rounded-xl shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">FAR 52.232-40: Accelerated Payments to Small Business Subcontractors</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-2">
                      When the government accelerates payment to you as the prime, you are required
                      to pass that accelerated payment down to your small business subcontractors
                      within <strong>15 days</strong> of your receipt. This isn&apos;t optional —
                      it&apos;s a contractual obligation, and agencies audit for compliance.
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      <strong>Practical implication:</strong> If you&apos;re a large business prime
                      with small business subs, build the 15-day pass-through into your accounts
                      payable workflow. If you&apos;re a small business prime, confirm your large
                      business teammates understand this requirement before teaming.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-50 p-2.5 rounded-xl shrink-0">
                    <DollarSign className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">FAR 52.216-7: Allowable Cost and Payment (Cost-Reimbursement)</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-2">
                      On cost-reimbursement contracts, this clause governs how often you can request
                      payment (no more than once every two weeks, except for small businesses which
                      can bill more frequently), what costs are allowable, and when the government
                      can disallow or question claimed costs.
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      <strong>Practical implication:</strong> Cost-reimbursement work requires
                      a DCAA-compliant accounting system. If you don&apos;t have one before you win,
                      your first invoice may be a month-long audit exercise.{" "}
                      <Link href="/blog/dcaa-audit-small-business" className="text-blue-700 hover:underline">
                        Read our DCAA guide
                      </Link>{" "}
                      before bidding on any cost-type work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Callout icon={Lightbulb} color="sky" title="How to Get Paid Faster">
              <p>
                The most common cause of late government payments isn&apos;t a slow agency — it&apos;s
                a defective invoice. Make sure every invoice includes: contract number, line item
                number, description of services delivered, period of performance, invoice number
                and date, and the correct payment office address listed in your contract. Confirm
                your DUNS/UEI number in SAM.gov is active. A single missing field can add 2-3 weeks
                to your payment cycle.
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">Track Every Compliance Deadline in One Place</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  CapturePilot&apos;s pipeline tools let you set reminders for rerepresentation
                  dates, option exercise windows, and deliverable milestones — so compliance
                  deadlines don&apos;t catch you off guard.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="shrink-0 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-700 transition-colors flex items-center gap-2"
              >
                Start free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="termination"
              number="08"
              title="Termination for Convenience: When the Government Pulls the Plug"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              This is the clause that surprises first-time government contractors most. Unlike
              commercial contracts, the federal government has a unilateral right to terminate
              any contract at any time — for any reason or no reason at all — simply because
              it&apos;s &quot;in the government&apos;s convenience.&quot; There&apos;s no breach,
              no damages for lost profits, and no recourse for the business you&apos;d have
              otherwise won.
            </p>

            <div className="space-y-4 mb-6">
              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <p className="font-mono text-xs font-bold text-stone-500 mb-1">FAR 52.249-2</p>
                <h3 className="font-bold text-stone-900 text-sm mb-2">Termination for Convenience of the Government (Fixed-Price)</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The standard clause for fixed-price contracts. Upon termination, you can recover:
                  the contract price for completed work, costs incurred for work in progress,
                  reasonable settlement expenses (including attorney fees in some cases), and a
                  reasonable profit on work performed — but not on work not yet done.
                </p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <p className="font-mono text-xs font-bold text-stone-500 mb-1">FAR 52.249-6</p>
                <h3 className="font-bold text-stone-900 text-sm mb-2">Termination (Cost-Reimbursement)</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  For cost-reimbursement contracts. You can recover all reasonable and allowable
                  costs incurred before the termination date, plus fee on completed work.
                  Settlement proposals must be submitted within{" "}
                  <strong>one year</strong> of the termination effective date — miss that deadline
                  and you lose the right to file.
                </p>
              </div>
            </div>

            <Callout icon={AlertTriangle} color="orange" title="The Termination for Default Is Different">
              <p className="mb-2">
                Don&apos;t confuse Termination for Convenience with Termination for Default
                (FAR 52.249-8 for fixed-price). A Termination for Default happens when you fail to
                perform, deliver late, or otherwise breach the contract. It can result in the
                government recovering reprocurement costs from you — meaning they can charge you
                the difference between your contract price and what it costs to have someone else
                finish the work.
              </p>
              <p>
                A Termination for Default on your record is also highly damaging to future bids —
                it gets documented in CPARS and contracting officers will see it.{" "}
                <Link href="/blog/cpars-contractor-performance" className="underline hover:no-underline">
                  Read our CPARS guide
                </Link>{" "}
                to understand how performance records affect future awards.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mt-4">
              The practical takeaway: don&apos;t over-invest in resources or subcontractor
              commitments early in a contract without milestones and deliverables that protect
              you. If the government terminates for convenience after you&apos;ve hired staff and
              ordered materials, you can recover costs — but the settlement process takes months
              and the recovery is never 100%. Build contracts with early deliverable milestones
              and payment triggers where you can.
            </p>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="part19-overhaul"
              number="09"
              title="The 2025 FAR Part 19 Overhaul: What Changed"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              On September 26, 2025, the FAR Council published its comprehensive rewrite of
              FAR Part 19 — the section that governs all small business programs. This was the
              most significant restructuring of small business acquisition rules in decades, and
              it affects how contracting officers apply set-asides, how multiple-award contracts
              work for small businesses, and how 8(a) sole-source procedures operate.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: RefreshCw,
                  title: "New Structure: Lifecycle-Based",
                  body: "Part 19 is now organized around the acquisition lifecycle — presolicitation (19.1), evaluation and award (19.2), and post-award (19.3). This makes the rules easier to follow at each stage of the buy.",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: CheckCircle2,
                  title: "Rule of Two: Unchanged and Reinforced",
                  body: "The Rule of Two survived the overhaul. When two or more small businesses can compete, contracting officers must set aside the work. The rewrite clarified application to task and delivery orders.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: Building2,
                  title: "Multiple-Award Contract Changes",
                  body: "Order-level representations were eliminated for most MAC scenarios. Small business credit is now determined at the contract level, not the order level. Simpler for you, but changes how agencies track goals.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                },
                {
                  icon: TrendingUp,
                  title: "8(a) Sole-Source: New Sequencing Rule",
                  body: "Before awarding an 8(a) sole-source below the competitive threshold, contracting officers must now attempt to use GWACs first. This doesn't eliminate sole-source authority, but it adds a step.",
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-5">
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The overhaul also resolved longstanding inconsistencies between FAR Part 19 and SBA
              regulations. Where the two previously conflicted — especially on HUBZone and SDVOSB
              verification — the SBA regulations now take precedence. If you were using FAR-based
              procedures for those programs, re-check against the current SBA rules.
            </p>
            <p className="text-stone-700 leading-relaxed">
              For a deep dive into how the set-aside programs work under the updated rules, see
              our guides on{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 hover:underline font-medium">
                SDVOSB contracting
              </Link>
              ,{" "}
              <Link href="/blog/hubzone-program-guide" className="text-blue-700 hover:underline font-medium">
                HUBZone eligibility
              </Link>
              , and{" "}
              <Link href="/blog/8a-sole-source-contracts" className="text-blue-700 hover:underline font-medium">
                8(a) sole-source contracts
              </Link>
              .
            </p>
          </div>

          {/* Section 10 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="noncompliance-costs"
              number="10"
              title="What Noncompliance Actually Costs You"
            />
            <p className="text-stone-700 leading-relaxed mb-4">
              Talking about FAR clauses in the abstract can make them sound like bureaucratic
              paperwork. They&apos;re not. The penalties for specific violations are codified and
              enforced. Here&apos;s a realistic picture of what noncompliance with each major
              category costs:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-stone-200 my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-rose-50 border-b border-rose-200">
                    <th className="text-left px-5 py-3.5 font-bold text-rose-800">Violation</th>
                    <th className="text-left px-5 py-3.5 font-bold text-rose-800">Enforcement Path</th>
                    <th className="text-left px-5 py-3.5 font-bold text-rose-800">Maximum Consequence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="hover:bg-rose-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Misrepresenting size status on bid</td>
                    <td className="px-5 py-4 text-stone-600">SBA size protest, DOJ investigation</td>
                    <td className="px-5 py-4 text-rose-700 font-medium">False Claims Act: 3x damages + $27K per claim + debarment</td>
                  </tr>
                  <tr className="hover:bg-rose-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Violating limitations on subcontracting</td>
                    <td className="px-5 py-4 text-stone-600">SBA audit, contracting officer review</td>
                    <td className="px-5 py-4 text-rose-700 font-medium">Contract termination, FCA exposure, debarment</td>
                  </tr>
                  <tr className="hover:bg-rose-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Failing to rerepresent when required</td>
                    <td className="px-5 py-4 text-stone-600">SBA determination, CO audit</td>
                    <td className="px-5 py-4 text-rose-700 font-medium">False Claims Act, suspension, debarment</td>
                  </tr>
                  <tr className="hover:bg-rose-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Termination for default</td>
                    <td className="px-5 py-4 text-stone-600">CO action, reprocurement cost claim</td>
                    <td className="px-5 py-4 text-rose-700 font-medium">Reprocurement costs + negative CPARS + debarment risk</td>
                  </tr>
                  <tr className="hover:bg-rose-50 transition-colors">
                    <td className="px-5 py-4 font-medium text-stone-800">Not passing accelerated payments to small business subs</td>
                    <td className="px-5 py-4 text-stone-600">Subcontractor complaint, agency audit</td>
                    <td className="px-5 py-4 text-rose-700 font-medium">Contract breach, potential award fee deductions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout icon={Shield} color="emerald" title="Compliance Is a Competitive Advantage">
              <p>
                Contractors with clean compliance records win more work. Contracting officers
                remember which small businesses are easy to manage and which ones create problems.
                Good CPARS ratings, clean invoicing, and proactive rerepresentation filings build
                the kind of relationship that leads to{" "}
                <Link href="/blog/sources-sought-notice" className="underline hover:no-underline">
                  sources sought responses
                </Link>{" "}
                and repeat business. The compliance burden is real — but the competitive advantage
                of doing it right is equally real.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mt-6 mb-4">
              The contractors who get into trouble aren&apos;t usually the ones who deliberately
              cheat. They&apos;re the ones who grew faster than they expected, didn&apos;t track
              their size status, relied on a sub more than the clause allows, or missed a
              rerepresentation deadline because no one was watching the calendar.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Build compliance tracking into your contract management process from day one. Use{" "}
              <Link href="/features/proposals" className="text-blue-700 hover:underline font-medium">
                proposal tools
              </Link>{" "}
              that flag set-aside clause requirements before you submit, and{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                contract intelligence
              </Link>{" "}
              to monitor your ongoing performance obligations.
            </p>
          </div>

          {/* Related posts */}
          <div className="mt-16 pt-12 border-t border-stone-200 animate-on-scroll">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/small-business-set-aside-threshold",
                  title: "Small Business Set-Aside Thresholds",
                  desc: "Dollar limits and eligibility rules for every set-aside category",
                },
                {
                  href: "/blog/federal-contracting-certifications",
                  title: "Federal Contracting Certifications",
                  desc: "Which certifications actually help you win more work",
                },
                {
                  href: "/blog/government-contract-teaming-agreement",
                  title: "Teaming Agreements",
                  desc: "How to structure teaming arrangements without violating the LOS clause",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  title: "DCAA Audit Preparation",
                  desc: "What small businesses must do before billing cost-reimbursement work",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group p-5 rounded-2xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 transition-colors text-sm mb-1">
                    {post.title}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read guide <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white text-center animate-on-scroll">
            <FileText className="w-8 h-8 text-stone-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-3">
              Know Your Clauses. Win More Work.
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              CapturePilot flags the set-aside clauses relevant to your certifications before you
              bid, tracks your contract obligations after award, and alerts you to rerepresentation
              deadlines. Start your free 30-day trial and see the opportunities that match your
              status today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SIGNUP_URL}
                className="bg-white text-stone-900 font-bold px-8 py-3.5 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-center gap-2"
              >
                Start 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="border border-stone-600 text-stone-300 font-medium px-8 py-3.5 rounded-xl hover:border-stone-400 hover:text-white transition-colors"
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
