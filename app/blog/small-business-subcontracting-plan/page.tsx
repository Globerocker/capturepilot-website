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
  Users,
  DollarSign,
  Shield,
  FileText,
  Building2,
  TrendingUp,
  Clock,
  Search,
  ClipboardList,
  Info,
  Target,
  BarChart3,
  Network,
  BadgeCheck,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-it-is", label: "What a Small Business Subcontracting Plan Actually Is" },
  { id: "when-required", label: "When a Plan Is Required: The Dollar Thresholds" },
  { id: "three-plan-types", label: "The Three Types of Subcontracting Plans" },
  { id: "15-elements", label: "The 15 Required Plan Elements (and What They Mean for You)" },
  { id: "goals-reporting", label: "Subcontracting Goals and the New SAM.gov Reporting" },
  { id: "penalties", label: "Penalties for Non-Compliance: Liquidated Damages Explained" },
  { id: "win-with-them", label: "How to Use Subcontracting Plans to Win Subcontracts" },
  { id: "find-primes", label: "Finding Prime Contractors Who Need You" },
  { id: "writing-your-own", label: "Writing Your Own Plan When You Graduate to Prime" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet" | "orange";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    red: "bg-red-50 border-red-200 text-red-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    orange: "bg-orange-50 border-orange-200 text-orange-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function SmallBusinessSubcontractingPlanPage() {
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
            <span className="text-stone-900 font-medium">Small Business Subcontracting Plans</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Network className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Small Business Subcontracting Plans:{" "}
            <span className="gradient-text">
              What Prime Contractors Require and How to Win With Them
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            When a large company wins a federal contract over $950,000, the government makes them
            commit — in writing — to giving work to small businesses. That commitment is called a
            small business subcontracting plan, and it creates a direct pipeline of opportunities
            for you. Here is how the program works and how to position your company to benefit.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 17, 2026</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 animate-on-scroll">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-stone-500" />
              <span className="text-sm font-bold text-stone-500 uppercase tracking-wider">
                Table of Contents
              </span>
            </div>
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-start gap-3 text-sm text-stone-600 hover:text-blue-600 transition-colors group"
                  >
                    <span className="text-stone-400 font-mono text-xs mt-0.5 group-hover:text-blue-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Body */}
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto prose-stone">

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-it-is" number="01" title="What a Small Business Subcontracting Plan Actually Is" />
            <p className="text-stone-700 leading-relaxed mb-4">
              A small business subcontracting plan is a formal, legally binding document that a large
              prime contractor submits to the government as part of winning a federal contract. In it,
              the prime commits to specific dollar goals and percentage targets for awarding work to
              small businesses across six socioeconomic categories.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Think of it like a promise with teeth. The prime is not just expressing intent — they
              are signing a contract within a contract. If they miss their goals without a good-faith
              effort to meet them, the government can assess liquidated damages equal to the dollar
              shortfall.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For you as a small business, this creates something valuable: a structural incentive for
              large contractors to actively seek you out and award you subcontracts. They need small
              business partners the same way they need competent labor or specialized equipment. The
              plan makes that need concrete and quantified.
            </p>

            <Callout icon={BarChart3} color="blue" title="FY2025 by the Numbers">
              <p>
                In Fiscal Year 2025, the federal government awarded nearly{" "}
                <strong>$273 billion in contracts to small businesses</strong> when combining prime
                and subcontracting dollars. Prime contracts alone hit $179 billion — nearly 28% of
                all federal contracting, exceeding the 23% statutory goal. Small business
                subcontracts supported an additional 418,000 jobs across the economy.
              </p>
              <p className="mt-2">
                Source: SBA FY25 Procurement Scorecard, released June 2026.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The six categories covered in every plan are: small businesses overall, veteran-owned
              small businesses (VOSB), service-disabled veteran-owned small businesses (SDVOSB),
              HUBZone small businesses, small disadvantaged businesses (SDB), and women-owned small
              businesses (WOSB). A prime with a subcontracting plan has separate numeric goals for
              each of these buckets.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              If you hold any of these certifications, you are even more valuable to prime
              contractors trying to hit their specific category goals. A{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">
                certified SDVOSB
              </Link>{" "}
              or{" "}
              <Link href="/blog/hubzone-program-guide" className="text-blue-600 hover:underline">
                HUBZone company
              </Link>{" "}
              counts against multiple subcontracting targets simultaneously, which makes them
              exceptionally attractive to primes who are lagging on those sub-categories.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="when-required" number="02" title="When a Plan Is Required: The Dollar Thresholds" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Not every federal contract triggers a subcontracting plan requirement. The government
              applies it selectively — at dollar levels where the contract is large enough to
              realistically support subcontracting work. Effective October 1, 2025, the FAR thresholds
              were adjusted for inflation, raising the standard contract trigger from $750,000 to
              approximately $950,000. The construction threshold moved from $1.5 million to $2 million.
            </p>

            {/* Threshold Table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left px-4 py-3 font-bold">Contract Type</th>
                    <th className="text-left px-4 py-3 font-bold">Threshold (Prime)</th>
                    <th className="text-left px-4 py-3 font-bold">Threshold (Sub-tier)</th>
                    <th className="text-left px-4 py-3 font-bold">FAR Reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-200 hover:bg-stone-50">
                    <td className="px-4 py-3 font-medium">Standard contracts</td>
                    <td className="px-4 py-3">
                      <span className="text-emerald-700 font-bold">~$950,000</span>
                      <span className="text-xs text-stone-400 ml-1">(updated Oct 2025)</span>
                    </td>
                    <td className="px-4 py-3 text-stone-500">~$950,000</td>
                    <td className="px-4 py-3 text-stone-500">FAR 52.219-9</td>
                  </tr>
                  <tr className="border-t border-stone-200 hover:bg-stone-50">
                    <td className="px-4 py-3 font-medium">Construction (public facility)</td>
                    <td className="px-4 py-3">
                      <span className="text-emerald-700 font-bold">$2 million</span>
                      <span className="text-xs text-stone-400 ml-1">(updated Oct 2025)</span>
                    </td>
                    <td className="px-4 py-3 text-stone-500">$2 million</td>
                    <td className="px-4 py-3 text-stone-500">FAR 52.219-9</td>
                  </tr>
                  <tr className="border-t border-stone-200 hover:bg-stone-50">
                    <td className="px-4 py-3 font-medium">Contracts awarded exclusively to small business</td>
                    <td className="px-4 py-3 text-stone-400 italic">Exempt</td>
                    <td className="px-4 py-3 text-stone-400 italic">N/A</td>
                    <td className="px-4 py-3 text-stone-500">FAR 19.702(b)</td>
                  </tr>
                  <tr className="border-t border-stone-200 hover:bg-stone-50">
                    <td className="px-4 py-3 font-medium">Personal services contracts</td>
                    <td className="px-4 py-3 text-stone-400 italic">Generally exempt</td>
                    <td className="px-4 py-3 text-stone-400 italic">N/A</td>
                    <td className="px-4 py-3 text-stone-500">FAR 19.702(b)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The sub-tier thresholds matter too. If a large prime wins a contract and awards a
              subcontract over $900,000 to another large business (a subcontractor that is itself not
              small), that large subcontractor must also submit their own subcontracting plan. The
              obligation flows down the supply chain.
            </p>

            <Callout icon={Info} color="amber" title="The Small Business Exception">
              <p>
                Small business concerns are entirely exempt from the subcontracting plan requirement
                — even if they win contracts above the thresholds. The plan requirement only falls on
                other-than-small-business prime contractors. So when you are the prime as a small
                business, you do not need a plan. When you outgrow your size standard and become a
                large business, you will.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The clause that implements this requirement is{" "}
              <strong>FAR 52.219-9, Small Business Subcontracting Plan</strong>. If you see this
              clause in a contract you are considering teaming on or subcontracting under, the prime
              has real, enforceable commitments to award work to small businesses — including you.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-blue-200 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-black mb-2">Find Prime Contractors Who Need You</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/matching" className="underline text-white hover:text-blue-200">
                    contract matching engine
                  </Link>{" "}
                  identifies which active large prime contracts include subcontracting plans — and
                  surfaces the opportunities where your certifications create the strongest fit.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="three-plan-types" number="03" title="The Three Types of Subcontracting Plans" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Not all subcontracting plans look the same. The FAR recognizes three distinct types,
              and knowing the difference matters when you are evaluating a prime contractor&apos;s
              commitments or eventually writing your own plan.
            </p>

            <div className="grid gap-4 my-8">
              <div className="border border-stone-200 rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-black text-stone-900">Individual Subcontracting Plan</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Contract-specific. The prime creates a plan tied to a single contract award. Goals
                  are set for the base contract and each option period separately. This is the most
                  common type you will see on large DoD and civilian agency contracts. Reporting
                  covers subcontracting activity only on that specific contract.
                </p>
              </div>

              <div className="border border-stone-200 rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="font-black text-stone-900">Commercial Plan</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Company-wide. Preferred for contractors providing commercial products and
                  services — it covers all of their commercial business, not just a single contract.
                  Goals are set as a percentage of total estimated subcontracting dollars. Once
                  approved, the government cannot require another plan from the same contractor for
                  commercial work as long as the plan stays in effect. Large defense companies and
                  IT product vendors often operate under commercial plans.
                </p>
              </div>

              <div className="border border-stone-200 rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                    <ClipboardList className="w-4 h-4 text-violet-600" />
                  </div>
                  <h3 className="font-black text-stone-900">Master Subcontracting Plan</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  A reusable template. The prime creates and gets approval for a master plan once,
                  then incorporates it by reference into individual contracts. They still set
                  contract-specific goals, but the boilerplate procedures and policies are handled
                  upfront. Reduces paperwork burden for contractors who hold many concurrent federal
                  contracts.
                </p>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              When approaching a prime contractor about subcontracting, knowing which plan type they
              operate under tells you how their reporting works and how closely they track
              subcontracting spend at the contract level.
            </p>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="15-elements" number="04" title="The 15 Required Plan Elements (and What They Mean for You)" />
            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 19.704 specifies exactly what must appear in every subcontracting plan. There are
              15 required elements. Understanding them tells you what a prime is committing to — and
              gives you talking points when you approach their Small Business Liaison Officer.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left px-4 py-3 font-bold w-8">#</th>
                    <th className="text-left px-4 py-3 font-bold">Element</th>
                    <th className="text-left px-4 py-3 font-bold">What It Means for Small Businesses</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Percentage and dollar goals by small business category", "The prime has specific targets they must report against — useful to know when negotiating"],
                    ["2", "Total dollars planned to subcontract", "Shows the overall pie available for subcontracting"],
                    ["3", "Methods for identifying and competitively selecting small businesses", "Primes must document how they searched — your registration in SAM.gov matters here"],
                    ["4", "Assurances of equitable opportunity", "You cannot be discriminated against in sourcing"],
                    ["5", "Record-keeping procedures", "Primes must track all solicitations sent to small businesses"],
                    ["6", "Compliance with FAR 52.219-8 (Utilization of Small Business Concerns)", "Flowed down to subcontracts — even your subcontracts if you become a prime"],
                    ["7", "Flow-down of plan requirements to large-business subs", "Subs over $900K must adopt their own plan"],
                    ["8", "Designation of a Small Business Liaison Officer (SBLO)", "Your point of contact at the prime — every plan has one"],
                    ["9", "Participation in partnership programs", "Outreach, industry days, mentoring — more ways to get noticed"],
                    ["10", "Written notification of awards to small businesses", "Primes must track and document who gets work"],
                    ["11", "Records available for review", "The CO can audit whether the prime is actually using small businesses"],
                    ["12", "Indirect cost methodology", "How the prime counts indirect costs in their goals"],
                    ["13", "Acknowledgment of penalties", "FAR 52.219-16 liquidated damages clause is explicitly acknowledged"],
                    ["14", "DoD-specific requirements (if applicable)", "Additional reporting for defense contracts"],
                    ["15", "Cooperative purchasing data (GSA Schedule only)", "Applies when the prime is a GSA Schedule holder"],
                  ].map(([num, element, meaning]) => (
                    <tr key={num} className="border-t border-stone-200 hover:bg-stone-50">
                      <td className="px-4 py-3 text-stone-400 font-mono text-xs">{num}</td>
                      <td className="px-4 py-3 font-medium text-stone-700">{element}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs leading-relaxed">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={Lightbulb} color="emerald" title="Use the SBLO as Your Entry Point">
              <p>
                Element 8 — the Small Business Liaison Officer — is your most important point of
                contact. Every prime contractor with an approved plan must designate one. Their job
                is to manage the subcontracting program, assist small businesses in navigating the
                supplier registration process, and ensure the prime meets its goals. When you
                approach a prime, skip the general contact form and find the SBLO directly.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="goals-reporting" number="05" title="Subcontracting Goals and the New SAM.gov Reporting" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Each subcontracting plan includes percentage goals by small business category. These
              are negotiated between the prime and the contracting officer at the time of award.
              There are no universal mandated percentages — goals depend on the type of work, the
              industry, available small business capacity, and the agency&apos;s own targets.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              In practice, primes in IT and professional services often commit to overall small
              business goals ranging from 20% to 40% of subcontracted dollars. DoD contracts
              frequently carry more detailed requirements with specific sub-category percentages.
              To see what primes are actually committing to, you can request copies of approved
              plans through FOIA or find them referenced in awarded contract data.
            </p>

            <Callout icon={AlertTriangle} color="orange" title="eSRS Retired in February 2026">
              <p>
                The Electronic Subcontracting Reporting System (eSRS.gov) was retired in February
                2026. All subcontracting plan reporting has migrated to <strong>SAM.gov</strong>.
                Key changes under the new system:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Only one report permitted per contract PIID</li>
                <li>A Contract Action Report is now required for prime contractors</li>
                <li>AI review and anomaly detection replace the old CO acknowledgment workflow</li>
                <li>NAICS code reporting is no longer required</li>
              </ul>
              <p className="mt-2">
                <strong>Individual Subcontracting Reports (ISRs)</strong> — for individual contract plans
                — remain due semi-annually for the periods ending <strong>March 31</strong> and{" "}
                <strong>September 30</strong>, plus at contract completion.{" "}
                <strong>Summary Subcontract Reports (SSRs)</strong> — for commercial plans — are due
                annually for most agencies; DoD SSRs are due <strong>April 30</strong> and{" "}
                <strong>October 30</strong>.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              From the FY2025 SBA Procurement Scorecard (released June 2026), here is how the
              government performed on subcontracting category goals:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left px-4 py-3 font-bold">Category</th>
                    <th className="text-left px-4 py-3 font-bold">FY2025 Prime Contract $</th>
                    <th className="text-left px-4 py-3 font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Small Business (overall)", "$179 billion (27.9%)", "Exceeded 23% statutory goal"],
                    ["Small Disadvantaged Business (SDB)", "$75.3 billion (11.6%)", "Down from 12.27% in FY24 — first decline in 10 years"],
                    ["HUBZone", "$17.5 billion (2.78%)", "Agencies remain below the 3% statutory goal"],
                    ["SDVOSB", "$32.5 billion (5%+)", "NDAA FY24 raised goal from 3% to 5%; target met"],
                    ["WOSB", "Goal: 5%", "Agency-specific actuals vary — check individual scorecards"],
                  ].map(([cat, amount, note]) => (
                    <tr key={cat} className="border-t border-stone-200 hover:bg-stone-50">
                      <td className="px-4 py-3 font-medium text-stone-700">{cat}</td>
                      <td className="px-4 py-3 text-emerald-700 font-bold">{amount}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              HUBZone companies take note: the federal government consistently misses the 3%
              HUBZone goal, which means prime contractors in many agencies are under real pressure
              to find{" "}
              <Link href="/blog/hubzone-program-guide" className="text-blue-600 hover:underline">
                certified HUBZone subcontractors
              </Link>
              . If you hold a HUBZone certification, you are filling a gap that shows up in agency
              scorecards.
            </p>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="penalties" number="06" title="Penalties for Non-Compliance: Liquidated Damages Explained" />
            <p className="text-stone-700 leading-relaxed mb-4">
              The teeth behind a subcontracting plan are real. FAR 52.219-16 — the Liquidated
              Damages clause — establishes that a prime&apos;s failure to comply in good faith with
              its approved plan is a material breach of contract.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              When a prime misses its goals, the contracting officer calculates liquidated damages
              as the actual dollar amount by which the prime failed to achieve each subcontracting
              goal. If a prime committed to $2 million in small business subcontracting and only
              awarded $1.4 million, the liquidated damages exposure is $600,000.
            </p>

            <Callout icon={Shield} color="red" title="Good Faith Is the Standard — Not Just Meeting Numbers">
              <p>
                Here is the critical nuance: <strong>missing your goals alone is not enough to
                trigger liquidated damages</strong>. The standard is whether the prime made a
                good-faith effort. The contracting officer must look at the totality of actions —
                did the prime actively search for small businesses? Did they document outreach? Did
                they give small businesses a fair opportunity to compete?
              </p>
              <p className="mt-2">
                This matters for you as a small business. When you document your outreach to a prime
                and they ignore it, that is evidence that could be used in a compliance review. It
                also means primes who are behind on their goals have a strong incentive to respond
                to your outreach and get work to you — it protects them.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Before the CO can assess damages, they must give the prime written notice and an
              opportunity to respond. The prime has appeal rights under the Disputes clause. In
              practice, the threat of liquidated damages drives primes to take their small business
              commitments seriously — especially in the final months of a performance period when
              they are running behind on their goals.
            </p>
            <Callout icon={Info} color="sky" title="Enforcement Is Rare — But the Threat Is Real">
              <p>
                A 2023 GAO report (GAO-24-106225) found that the SBA conducted only{" "}
                <strong>6 compliance reviews per year government-wide</strong> — across all federal
                agencies — and contracting officers "rarely" assessed liquidated damages even when
                primes missed their goals. The report also found that when SBA did conduct those
                reviews, contractors were generally <em>not</em> in compliance.
              </p>
              <p className="mt-2">
                The enforcement gap cuts two ways: it means primes are not being systematically penalized
                today, but it also means you have standing to escalate if a prime clearly ignored its
                good-faith obligations to you. Under the 2021 FAR good-faith rule, a prime that
                refuses to even search for or respond to small business outreach is not meeting the
                standard.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The practical implication: primes approaching their reporting periods and behind on category
              goals will actively reach out to find eligible small business subcontractors. If you
              have maintained contact with their SBLO, you are the first call they make.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="win-with-them" number="07" title="How to Use Subcontracting Plans to Win Subcontracts" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Subcontracting is one of the fastest ways to build past performance and revenue in
              federal contracting. You are working under an established prime that already won the
              competition. You deliver. You get CPARS-quality performance ratings that strengthen
              your future bids as a prime yourself.
            </p>

            <div className="my-8 space-y-4">
              {[
                {
                  step: "01",
                  title: "Get your SAM.gov profile right",
                  desc: "Primes search for subcontractors in SAM.gov's dynamic small business search. Your profile must include complete NAICS codes, current certifications, a strong capabilities narrative, and accurate socioeconomic status representations. An incomplete profile means you won't appear in searches. Use CapturePilot's matching tools to audit your profile against opportunity requirements.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Find the right prime contractors",
                  desc: "The SBA publishes a Directory of Federal Government Prime Contractors with subcontracting plans. Agency websites (DHS, DoT, USDA) also publish subcontracting directories. Focus on primes that hold active contracts in your NAICS codes and with agencies where you have existing relationships.",
                  icon: Building2,
                },
                {
                  step: "03",
                  title: "Contact the Small Business Liaison Officer directly",
                  desc: "Every plan designates an SBLO. This is the person responsible for meeting subcontracting goals — they have both the authority and the motivation to engage with you. Don't call the general contracting line. Find the SBLO name in the plan (public records) or on the prime's small business page, and reach out with a tailored capability pitch.",
                  icon: Users,
                },
                {
                  step: "04",
                  title: "Register in the prime's supplier database",
                  desc: "Most large primes maintain their own approved vendor databases independent of SAM.gov. Lockheed Martin, Booz Allen Hamilton, Leidos, SAIC, and other major federal contractors all have supplier registration portals. Get in their system before you need them — it typically takes 30-90 days to get vetted and approved.",
                  icon: ClipboardList,
                },
                {
                  step: "05",
                  title: "Respond to subcontracting solicitations quickly",
                  desc: "When a prime issues a Request for Subcontractor Qualifications or sends an RFQ to their supplier database, they need a fast response. Have your capability statement, NAICS codes, past performance summaries, and current certifications ready to send within 24-48 hours. Slow responses get cut from the short list.",
                  icon: Clock,
                },
                {
                  step: "06",
                  title: "Time your outreach to reporting periods",
                  desc: "Prime contractors face the most pressure to award subcontracts in the 60-90 days before their reporting deadlines (April 30 and October 30). If you have not heard back from a prime SBLO earlier in the year, try again in February and August. That is when the urgency hits.",
                  icon: TrendingUp,
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 animate-on-scroll hover-lift">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs font-black">
                      {s.step}
                    </div>
                    <div className="w-px flex-1 bg-stone-200 mt-2" />
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <s.icon className="w-4 h-4 text-blue-500" />
                      <h3 className="font-black text-stone-900 text-base">{s.title}</h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="find-primes" number="08" title="Finding Prime Contractors Who Need You" />
            <p className="text-stone-700 leading-relaxed mb-4">
              The hardest part is knowing where to look. There are several places to find prime
              contractors with active subcontracting plans and open needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "SBA's Prime Contractor Directory",
                  desc: "The SBA publishes a spreadsheet of large prime contractors that have active subcontracting plans. It includes company name, contact info, and NAICS codes covered. Download it at sba.gov and filter to your relevant codes.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  title: "SBA SUBNet (subnet.sba.gov)",
                  desc: "Large businesses with subcontracting plans post notices here when they are seeking small business subcontractors. Search by NAICS code, state, small business category (WOSB, HUBZone, SDVOSB), or prime contractor name. Free to search, no registration required.",
                  color: "bg-emerald-50 border-emerald-200",
                },
                {
                  title: "USASpending.gov Contract Awards",
                  desc: "Search for large contract awards in your NAICS codes. Any contract over ~$950K awarded to a large business should have a subcontracting plan. Find the prime's SBLO contact and reach out directly. Filter by agency, NAICS code, and award date to find the most active primes.",
                  color: "bg-violet-50 border-violet-200",
                },
                {
                  title: "CapturePilot Contract Matching",
                  desc: "Our platform surfaces active opportunities and identifies which large prime contracts include set-aside subcontracting opportunities that match your certifications and capabilities.",
                  color: "bg-amber-50 border-amber-200",
                  isProduct: true,
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-5 ${item.color} hover-lift`}>
                  <h3 className="font-black text-stone-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  {item.isProduct && (
                    <Link
                      href="/features/matching"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-blue-600 font-bold hover:underline"
                    >
                      See how matching works <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Do not overlook{" "}
              <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline">
                teaming agreements
              </Link>{" "}
              as a parallel path. A teaming arrangement goes deeper than subcontracting — you are
              formally partnered at the bid stage, not just awarded work after the fact. If you want
              a role with more influence over the scope and terms, teaming is worth pursuing
              alongside subcontracting outreach.
            </p>

            <Callout icon={BadgeCheck} color="sky" title="Your Certifications Are a Differentiator">
              <p>
                When a prime is behind on their SDVOSB, WOSB, or HUBZone goals, they are not just
                looking for a capable subcontractor — they specifically need one with that
                certification. Make sure your certifications are current and prominently featured in
                every outreach message and your SAM.gov profile. A lapsed certification means you
                do not count against their goals.
              </p>
              <p className="mt-2">
                Use CapturePilot&apos;s{" "}
                <Link href="/features/quick-checker" className="text-sky-700 font-bold hover:underline">
                  Quick Checker
                </Link>{" "}
                to verify your current certification status and confirm you are represented correctly
                in SAM.gov before reaching out to primes.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Also check the{" "}
              <Link href="/blog/mentor-protege-program" className="text-blue-600 hover:underline">
                SBA Mentor-Protégé Program
              </Link>
              . It creates an even tighter relationship between a large mentor company and a small
              protégé — including the ability to form a joint venture and bid on set-asides together.
              If you find a prime contractor that is a strong fit, the mentor-protégé path might be
              worth exploring alongside subcontracting.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8">
            <div className="flex items-start gap-4">
              <DollarSign className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track Your Subcontracting Pipeline
                </h3>
                <p className="text-stone-600 mb-4 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                    pipeline management tools
                  </Link>{" "}
                  let you track prime contractor outreach, follow-up cadences, and subcontracting
                  opportunity status — all in one place. See what is active, what is stalled, and
                  what to prioritize next.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="writing-your-own" number="09" title="Writing Your Own Plan When You Graduate to Prime" />
            <p className="text-stone-700 leading-relaxed mb-4">
              Eventually, if you grow out of your small business size standard or win contracts as a
              large business, you will need to write your own subcontracting plan. Here is what that
              process looks like.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Your plan becomes part of your proposal. For negotiated acquisitions, you submit it
              with your offer and the contracting officer reviews all 15 elements. The CO can reject
              your proposal if the plan is not acceptable — which means an inadequate subcontracting
              plan is a disqualifying deficiency, not just a minor weakness.
            </p>

            <div className="my-8 space-y-3">
              {[
                {
                  title: "Set realistic but credible goals",
                  desc: "Base your percentage goals on an actual analysis of subcontractable work, available small business suppliers in your supply chain, and industry benchmarks. Goals that are obviously too low (e.g., 5% when the industry norm is 30%) will get challenged by the CO.",
                },
                {
                  title: "Research available small businesses before you write",
                  desc: "Use the Dynamic Small Business Search (DSBS) in SAM.gov to identify qualified small businesses in your relevant NAICS codes. Document this research — it becomes part of your plan and demonstrates the good-faith effort standard.",
                },
                {
                  title: "Name your Small Business Liaison Officer",
                  desc: "This person must be named in the plan and must actually be responsible for the program. It cannot be a no-show designation. The CO will check whether this person exists and has the authority to implement the program.",
                },
                {
                  title: "Decide on plan type early",
                  desc: "If you provide commercial products or services and hold multiple federal contracts, a commercial plan reduces your administrative burden significantly. Discuss the option with your contracting officer before submitting your offer.",
                },
                {
                  title: "Build reporting into your operations now",
                  desc: "Under the new SAM.gov system (eSRS retired February 2026), you report ISRs directly in SAM.gov by April 30 and October 30. You need internal tracking to know your actual subcontracting spend by category throughout the year — not just at reporting time.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border border-stone-200 rounded-xl p-5 hover-lift">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={BookOpen} color="violet" title="Resources for Writing a Subcontracting Plan">
              <ul className="space-y-2">
                <li>
                  <strong>FAR Subpart 19.7</strong> — The core regulations governing the entire
                  small business subcontracting program. Required reading before writing a plan.
                </li>
                <li>
                  <strong>DoD Checklist for Reviewing Subcontracting Plans (May 2024)</strong> —
                  Published by the DoD Office of Small Business Programs, this is the exact
                  evaluation rubric DoD contracting officers use. Available at business.defense.gov.
                </li>
                <li>
                  <strong>SBA Procurement Center Representatives (PCRs)</strong> — SBA assigns PCRs
                  to major acquisition centers. They review subcontracting plans on behalf of the
                  SBA and can give you informal feedback before you submit.
                </li>
                <li>
                  <strong>APEX Accelerators</strong> — Formerly PTC (Procurement Technical Assistance
                  Centers), these federally funded consultants provide free plan review assistance.
                  Find your nearest APEX Accelerator at sba.gov.
                </li>
              </ul>
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Writing a strong subcontracting plan takes time. Treat it like any other{" "}
              <Link href="/blog/government-rfp-response-guide" className="text-blue-600 hover:underline">
                proposal volume
              </Link>{" "}
              — start it early, get internal buy-in on the commitments you are making, and make sure
              your supply chain management team understands they are responsible for hitting those
              numbers throughout performance. A plan that looks good on paper but has no operational
              backing will fail at the reporting stage.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              If your growth path includes winning larger prime contracts, use{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                CapturePilot&apos;s pipeline tools
              </Link>{" "}
              to build and track your small business supplier relationships now. When you need to
              write your first plan, having an established network makes setting credible goals
              much easier — and hitting them even more so.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-blue-300 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Ready to Get Into the Subcontracting Pipeline?
                </h3>
                <p className="text-stone-300 mb-4 text-sm">
                  CapturePilot helps small businesses identify prime contractors with active
                  subcontracting plans, verify certification status, and track outreach — all in one
                  platform. Book a strategy call and we will walk you through the highest-value
                  primes in your NAICS codes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                  >
                    Book a strategy call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-stone-700 text-stone-200 font-bold px-5 py-2.5 rounded-xl hover:bg-stone-600 transition-colors text-sm"
                  >
                    Check eligibility free
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll pt-12 border-t border-stone-200">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/government-contract-teaming-agreement",
                  label: "Teaming Agreements",
                  desc: "Partner with a prime before the bid — not after.",
                },
                {
                  href: "/blog/mentor-protege-program",
                  label: "SBA Mentor-Protégé Program",
                  desc: "The next level beyond subcontracting.",
                },
                {
                  href: "/blog/capability-statement-examples",
                  label: "Capability Statement Examples",
                  desc: "What to send when a prime asks for your capabilities.",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  label: "SDVOSB Contracts Guide",
                  desc: "Maximize the value of your veteran certification.",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  label: "Past Performance in Government Contracts",
                  desc: "Build the record that makes you a competitive prime.",
                },
                {
                  href: "/blog/subcontracting-government-contracts",
                  label: "Subcontracting: Your First Step Into Federal",
                  desc: "The broader guide to starting as a subcontractor.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 p-4 border border-stone-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <p className="text-sm font-bold text-stone-900">{link.label}</p>
                    <p className="text-xs text-stone-500">{link.desc}</p>
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
