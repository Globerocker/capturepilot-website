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
  Target,
  DollarSign,
  Shield,
  XCircle,
  Award,
  BarChart2,
  FileText,
  Zap,
  AlertCircle,
  Layers,
  TrendingUp,
  Clock,
  Building2,
  Users,
  CheckSquare,
  Package,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-a-mac", label: "What Multiple Award Contracts Are — and Why They Dominate" },
  { id: "how-task-orders-work", label: "How Task Orders Work: The Competition After the Contract" },
  { id: "major-vehicles-2026", label: "The Major MAC Vehicles to Know in 2026" },
  { id: "how-to-get-on-a-mac", label: "How to Get on a MAC: Application and On-Ramp Process" },
  { id: "winning-task-orders", label: "Winning Task Orders Once You're In" },
  { id: "small-business-set-asides", label: "Small Business Set-Asides Within MACs" },
  { id: "task-order-factory", label: "The Task Order Proposal Factory: Managing Volume at Scale" },
  { id: "mac-mistakes", label: "Common MAC Mistakes That Kill Your ROI" },
  { id: "building-your-mac-strategy", label: "Building Your MAC Strategy" },
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

export default function MultipleAwardContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
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
            <span className="text-stone-900 font-medium">Multiple Award Contracts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Package className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Multiple Award Contracts:{" "}
            <span className="gradient-text">
              How to Get on MACs and Win Task Orders Without Competing Every Time
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            More than half of all federal contract dollars now flow through contract vehicles —
            IDIQ MACs, GWACs, and BPA vehicles that agencies use over and over rather than running
            full competitions each time. If you're not on the right vehicles, you're not seeing
            the work. Here's how MACs actually work and how to get positioned to win task orders
            once you're in.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 13, 2026</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-24" ref={articleRef}>
        {/* Table of Contents */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-10 animate-on-scroll">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-stone-500" />
            <h2 className="font-bold text-stone-700 text-sm uppercase tracking-wider">
              In This Article
            </h2>
          </div>
          <ol className="space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-3 text-sm text-stone-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="text-xs font-bold text-stone-400 group-hover:text-blue-400 mt-0.5 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="what-is-a-mac"
            number="01"
            title="What Multiple Award Contracts Are — and Why They Dominate"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            A multiple award contract (MAC) is an IDIQ — Indefinite Delivery, Indefinite Quantity
            — vehicle where the government awards contracts to several vendors simultaneously, then
            runs smaller competitions among those vendors every time work needs to get done. The
            initial award puts you on a roster. Task orders are what pay your bills.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The numbers explain why this matters. In FY2024, approximately{" "}
            <strong>56% of DoD contract award dollars</strong> and{" "}
            <strong>63% of non-DoD contract award dollars</strong> were obligated through
            indefinite delivery vehicles, which include MACs and GSA schedules. That's the majority
            of federal spending flowing through pre-established vehicles rather than standalone
            full-and-open competitions.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            From the agency's perspective, MACs make sense. Running a full FAR Part 15 competition
            for every requirement takes months. Once an agency has a MAC in place with pre-vetted
            vendors, they can issue a task order, get proposals in two to four weeks, evaluate, and
            award. The qualification work was done upfront — at the base contract level. The agency
            only has to verify price and scope at the task order level.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            For contractors, the dynamic is inverted. Getting on the vehicle is the gate you have
            to clear. Once you're in, you compete in a much smaller pool — typically{" "}
            <strong>3 to 15 competitors</strong> per task order — versus the open market where
            you might face hundreds of offerors on the same requirement. Win rates inside MAC
            vehicles are structurally higher than win rates in standalone full competitions.
          </p>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                stat: "56%",
                label: "of DoD contract dollars flow through indefinite delivery vehicles (FY2024)",
                color: "text-indigo-600",
                bg: "bg-indigo-50 border-indigo-100",
              },
              {
                stat: "3–15",
                label: "typical number of competitors per MAC task order",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100",
              },
              {
                stat: "$176B",
                label: "in small business contract awards in FY2024 — many through MAC vehicles",
                color: "text-emerald-600",
                bg: "bg-emerald-50 border-emerald-100",
              },
            ].map(({ stat, label, color, bg }) => (
              <div key={stat} className={`rounded-2xl border p-5 text-center ${bg}`}>
                <div className={`text-4xl font-black mb-2 ${color}`}>{stat}</div>
                <div className="text-xs text-stone-600 leading-snug">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The trend is accelerating. Agencies are actively consolidating requirements onto
            existing vehicles to reduce procurement workload. Programs like OASIS+ and Alliant 3
            were designed as decade-long platforms precisely so agencies don't have to recompete
            the same professional services requirements every few years.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            If your government contracting strategy is built entirely around responding to
            standalone solicitations on SAM.gov, you're competing in an increasingly smaller
            slice of the market. The work has moved to the vehicles.
          </p>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="how-task-orders-work"
            number="02"
            title="How Task Orders Work: The Competition After the Contract"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Getting on a MAC is the prerequisite. Winning task orders is the job. These are two
            completely different exercises — and contractors who win the base contract but lose
            consistently on task orders get no revenue from the vehicle.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Task orders come in two flavors: competitive and sole source. Under FAR 16.505, the
            contracting officer must give all contract holders a "fair opportunity" to compete for
            each task order above the simplified acquisition threshold ($250,000). Below that
            threshold, they can sole source to any holder. Above $5.5 million, there are additional
            fair opportunity procedures that apply.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            A typical task order competition looks like this: the agency issues a request for
            quotation (RFQ) or request for proposal (RFP) to all holders in the relevant pool.
            You get anywhere from 5 to 30 days to respond — often shorter than you'd get on a
            standalone competition. You submit a technical approach, staffing plan, and price.
            The agency evaluates, selects, and awards. The whole cycle can take 30 to 90 days.
          </p>

          <Callout icon={Clock} color="sky" title="Task Order Timeline Reality Check">
            <p className="mb-2">
              Task order response windows are often 10 to 15 business days — significantly shorter
              than the 30-day minimum many contractors assume. On large MACs like OASIS+ or Alliant
              3, agencies have been known to issue task order RFPs with 7-day turnarounds.
            </p>
            <p>
              This is why a{" "}
              <strong>proposal content library matters so much in the MAC environment</strong>. You
              don't have time to write from scratch. Your staffing profiles, past performance
              summaries, and approach templates need to be ready to pull and customize.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            Task orders can be set aside within the MAC. If a MAC has both small business and
            large business holders, the contracting officer can restrict a particular task order
            competition to just the small business pool. This is one of the most valuable features
            of being on a small business MAC — the task order set-aside creates a protected
            competition among peers.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Most MACs have ceiling values — a maximum total amount the government can order
            under the contract. Individual task orders count against that ceiling. When a vehicle's
            ceiling is approached, the agency has to either let it expire or modify it. This is
            important context when you're deciding which vehicles to pursue: a vehicle near its
            ceiling has less remaining value than a recently established one.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The minimum guarantee on any MAC task order is usually nominal — often just $2,500 to
            $25,000, which is the legal minimum the government must order from each awardee under
            FAR 16.504(a)(1). Don't mistake being on the vehicle for having guaranteed revenue.
            The revenue comes from competing for and winning task orders.
          </p>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="major-vehicles-2026"
            number="03"
            title="The Major MAC Vehicles to Know in 2026"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The landscape of major contract vehicles is shifting significantly in 2025–2026.
            Several flagship vehicles are transitioning to next-generation successors.
            Here's where things stand.
          </p>

          {/* Vehicles table */}
          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Vehicle</th>
                  <th className="text-left px-4 py-3 font-semibold">Category</th>
                  <th className="text-left px-4 py-3 font-semibold">Status (2026)</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">SB Pools?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["OASIS+", "Professional Services (13 domains)", "Active — continuous on-ramp open since Jan 2026", "Yes — 8(a), HUBZone, SDVOSB, WOSB pools"],
                  ["Alliant 3", "IT / Technology", "First awards issued Feb 2026 (43 of 133 proposals)", "Unrestricted + separate SB vehicle"],
                  ["CIO-SP3 / CIO-SP3 SB", "Health IT (NIH-managed)", "Sunsetting Oct 29, 2026 — migrate to CIO-SP4", "CIO-SP3 SB is dedicated small business"],
                  ["CIO-SP4", "Health IT (NIH-managed)", "Successor to CIO-SP3; open for competition 2026", "SB pool included"],
                  ["SEWP V", "Commercial IT Products", "SEWP VI awards expected mid-2026", "Separate SB groups"],
                  ["GSA MAS (Schedule)", "Broad commercial products & services", "Open enrollment — always accepting new vendors", "No separate pool; set-aside at order level"],
                  ["STARS III", "IT — small business GWAC", "Active through 2030 with on-ramp opportunities", "100% small business"],
                  ["8(a) STARS III", "IT — 8(a) set-aside GWAC", "Active; restricted to 8(a)-certified firms", "100% 8(a) program"],
                ].map(([vehicle, category, status, sb], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-semibold text-stone-900 border-b border-stone-100">
                      {vehicle}
                    </td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{category}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{status}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{sb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="CIO-SP3 Sunset Warning">
            <p>
              If your company holds CIO-SP3 or CIO-SP3 Small Business, new orders placed on or
              after June 8, 2026 cannot extend beyond December 31, 2028. The vehicle is being
              wound down. Now is the time to pursue CIO-SP4 — if your revenue depends on
              health IT task orders and you don't get on the successor vehicle, you lose access
              to that pipeline entirely.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ deserves special attention for professional services contractors. It covers 13
            service domains — from financial management to supply chain to engineering — and its
            six solicitations have been continuously open since January 2026. If you missed
            the initial award window, you can still enter through the on-ramp. The key question
            is which domains your work falls under and whether you can meet the qualification
            requirements for those pools.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Alliant 3 is the flagship government-wide IT vehicle. It removes the spending caps
            that constrained Alliant 2 and explicitly targets AI, quantum computing, cloud-native
            architectures, and zero-trust cybersecurity. If you work in federal IT and can qualify,
            Alliant 3 is worth the investment — the ceiling and duration make it one of the most
            valuable vehicles in the federal market.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            GSA MAS (formerly the GSA Schedules) remains the most accessible vehicle for small
            businesses that don't qualify for the specialized GWACs. It's open enrollment — you
            apply when you're ready and GSA evaluates your application on a rolling basis. The
            tradeoff is that it's also the most crowded. Every agency can use it, but so can
            thousands of your competitors.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Target className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl mb-2">Find Which MACs Have Task Orders in Your Category</h3>
              <p className="text-indigo-100 mb-4">
                CapturePilot's opportunity matching engine surfaces active task order competitions
                across MACs, GWACs, and GSA schedules — not just standalone solicitations — so you
                see the full picture of what's available in your NAICS codes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-5 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/features/matching"
                  className="inline-flex items-center gap-2 bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-indigo-400 transition-colors text-sm"
                >
                  See matching features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="how-to-get-on-a-mac"
            number="04"
            title="How to Get on a MAC: Application and On-Ramp Process"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Getting on a MAC requires a formal proposal response — often nearly as detailed as a
            full solicitation response — but the structure is different from a typical best value
            competition. You're not proposing a specific solution to a specific problem. You're
            demonstrating that your company has the qualifications, experience, and systems to
            perform within the vehicle's scope.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Most MAC applications evaluate on three primary dimensions: past performance,
            corporate experience, and technical/management capability. For GWACs like OASIS+ and
            STARS III, there are also specific eligibility criteria — minimum revenue thresholds,
            years in business, and for set-aside pools, active small business certifications.
          </p>

          {/* Step-by-step process */}
          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                num: "01",
                title: "Identify the right vehicle and pool",
                body: "Your NAICS codes, certifications, and service categories determine which vehicles you're eligible for. OASIS+ has 13 domain pools. STARS III and 8(a) STARS III are IT-specific. Before investing in an application, verify that the vehicle actually covers work your customers buy — pulling USASpending.gov data on task order history is the fastest way to check.",
              },
              {
                num: "02",
                title: "Verify qualification requirements",
                body: "Every vehicle has minimum eligibility criteria. For OASIS+ Unrestricted, that includes a minimum of $4 million in past three-year revenue in the relevant domain. For STARS III, there are similar revenue and experience minimums. Check these before starting your application — if you don't qualify yet, it tells you what to build toward.",
              },
              {
                num: "03",
                title: "Gather your past performance documentation",
                body: "This is the core of most MAC applications. You need CPARs records, references, and contract descriptions that demonstrate relevant experience in the vehicle's scope. The more directly your past work maps to the vehicle's domains or labor categories, the stronger your application.",
              },
              {
                num: "04",
                title: "Register and submit the application",
                body: "Most applications go through SAM.gov or a GWAC-specific portal. For GSA MAS, the process runs through GSA eOffer/eMod. Read the solicitation instructions for accepted submission formats exactly — MAC applications have been rejected for non-compliance with formatting requirements, just like proposals.",
              },
              {
                num: "05",
                title: "Monitor for on-ramp opportunities",
                body: "If the initial award window is closed, check the solicitation for on-ramp provisions. OASIS+ has had continuously open on-ramps since January 2026. STARS III has conducted periodic on-ramps. Set up SAM.gov watches on the vehicle's solicitation number so you're notified when on-ramp windows open.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100 hover-lift">
                <div className="text-2xl font-black text-stone-200 flex-shrink-0 w-10">{num}</div>
                <div>
                  <div className="font-bold text-stone-800 mb-1">{title}</div>
                  <div className="text-stone-600 text-sm leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="blue" title="The On-Ramp Opportunity Most Contractors Miss">
            <p className="mb-2">
              On-ramps are periodic openings that let new vendors join an existing MAC after the
              original award period. The federal government formally adopted on-ramping as a policy
              priority in 2023, requiring certain GWACs to maintain open on-ramp processes rather
              than staying closed to new entrants for the vehicle's entire life.
            </p>
            <p>
              OASIS+, STARS III, and several agency-specific MACs now have continuous or
              semi-annual on-ramp windows. If you missed the initial award of a vehicle your
              customers use heavily, the on-ramp is your path in — and most contractors don't
              pursue it because they assume the window has passed.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            The teaming play matters here. If your company doesn't independently qualify for a
            vehicle, teaming with a qualified prime as a subcontractor gets you in the door and
            builds the past performance record you need to qualify independently next cycle. See
            our guide to{" "}
            <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline font-medium">
              teaming agreements in government contracting
            </Link>{" "}
            for how to structure these relationships.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            For GSA MAS, the process is different and accessible for most established businesses.
            GSA evaluates your existing commercial pricing, accepts standard offer submissions
            through their portal, and reviews applications on a rolling basis. There's no
            competition against other applicants — you either qualify or you don't. The tradeoff
            is that every agency buyer knows how crowded the schedule is, and differentiation at
            the task order level matters more than it does on a smaller, more specialized vehicle.
          </p>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="winning-task-orders"
            number="05"
            title="Winning Task Orders Once You're In"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Being on a MAC vehicle doesn't generate revenue — winning task orders does. Many
            contractors invest heavily in getting on a vehicle and then lose consistently on task
            orders because they treat the task order RFP like any other proposal opportunity. It
            isn't. The competitive dynamic is different, the timeline is shorter, and the
            relationship context matters more.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Task order evaluations often use streamlined criteria compared to standalone
            competitions. You might see a simple "best value" evaluation with technical approach,
            past performance, and price — without the elaborate rating matrices of a full source
            selection. This compresses the differentiators. Technical approaches have to be tight
            and targeted, not comprehensive. Evaluators are moving fast.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The relationship advantage is real at the task order level in a way it often isn't
            in full competition. Agencies working within a MAC tend to rotate work among familiar
            performers. Contractors who respond consistently, deliver well, and stay in front of
            the customer between task orders get more opportunities. See our guide to{" "}
            <Link href="/blog/contracting-officer-relationship" className="text-blue-600 hover:underline font-medium">
              building relationships with contracting officers
            </Link>{" "}
            for the right way to approach this.
          </p>

          {/* Task order strategy grid */}
          <div className="bg-stone-900 text-white rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-lg mb-5 text-white">Task Order Winning Checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Show up before the RFQ",
                  detail: "Contractors who engage at industry days and pre-solicitation meetings understand the requirement better — and sometimes help shape it.",
                },
                {
                  title: "Map your staffing to the labor categories",
                  detail: "MACs define labor categories in the base contract. Your task order proposal needs to align staff to those categories correctly.",
                },
                {
                  title: "Use your vehicle's base contract rates intelligently",
                  detail: "Your hourly rates are already on file. Task order pricing is a function of those rates, hours, and any ODCs. Model total cost accurately.",
                },
                {
                  title: "Pull relevant past performance from your library",
                  detail: "Task orders require past performance citations that match the specific work — not your general corporate history.",
                },
                {
                  title: "Submit on time, every time",
                  detail: "Late submissions to task order competitions are rejected. Some vehicles allow no exceptions. Treat every deadline as absolute.",
                },
                {
                  title: "Ask for debrief after losses",
                  detail: "FAR 16.505(b)(6) gives you the right to a brief explanation after each task order loss. Use it. The feedback compounds over time.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">{title}</div>
                    <div className="text-stone-400 text-xs mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Pricing strategy inside a MAC is tighter than in open competition. Your base contract
            rates create a ceiling — you generally can't price above your established rates for
            labor categories. And the other holders' rates are sometimes publicly accessible,
            giving everyone competitive pricing intelligence. The price-to-win calculus at the
            task order level often comes down to hours (scope interpretation) and subcontractor
            rates more than your labor ceiling rates.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Use{" "}
            <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
              competitive intelligence tools
            </Link>{" "}
            to track which other holders are winning task orders in your agency relationships.
            On a 20-holder vehicle, typically four to six contractors capture 80% of the task
            order value. Understanding who those winners are and what they're doing differently
            is the first step to breaking into that group.
          </p>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="small-business-set-asides"
            number="06"
            title="Small Business Set-Asides Within MACs"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            FAR 19.504 gives contracting officers the authority to set aside individual task
            orders for small businesses when two or more small business holders in the relevant
            MAC pool can perform the work. This is one of the most powerful mechanisms in federal
            contracting for small businesses — a task order set-aside within a MAC means you're
            competing against a handful of small businesses, not the entire federal market.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            In FY2023, set-aside awards accounted for{" "}
            <strong>65% of contracting dollars awarded to small businesses</strong> — the highest
            percentage recorded since the data series began. That figure reflects both set-aside
            contracts and set-aside task orders within MAC vehicles. The two are increasingly
            inseparable.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            A January 2025 FAR final rule strengthened the requirements around small business
            participation on multiple award contracts, requiring agencies to set aside more task
            orders for small businesses when they hold positions on the MAC. This is ongoing
            regulatory momentum in your favor.
          </p>

          {/* SB pools diagram */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-800 mb-4">OASIS+ Small Business Pools</h3>
            <p className="text-sm text-stone-600 mb-4">
              OASIS+ has dedicated pools for each SBA certification type. Being in the right pool
              means your task order competition is restricted to companies with the same certification.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "8(a) Pool", desc: "SBA 8(a) certified firms only", color: "bg-blue-100 text-blue-800" },
                { label: "HUBZone Pool", desc: "HUBZone certified firms only", color: "bg-emerald-100 text-emerald-800" },
                { label: "SDVOSB Pool", desc: "Service-disabled veteran-owned", color: "bg-amber-100 text-amber-800" },
                { label: "WOSB Pool", desc: "Women-owned small business", color: "bg-violet-100 text-violet-800" },
              ].map(({ label, desc, color }) => (
                <div key={label} className={`rounded-xl p-4 text-center ${color}`}>
                  <div className="font-bold text-sm mb-1">{label}</div>
                  <div className="text-xs leading-snug opacity-80">{desc}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-4">
              Unrestricted and small business pools also exist for companies without specific program certifications.
            </p>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            If you hold an 8(a) certification, SDVOSB certification, HUBZone certification, or
            WOSB certification, your strategy should prioritize MAC vehicles that have dedicated
            pools for your certification type. OASIS+ is the clearest example: its certification-
            specific pools mean you're only competing against other holders with the same
            certification status, dramatically reducing the field.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Check your certification eligibility first. Our{" "}
            <Link href="/features/quick-checker" className="text-blue-600 hover:underline font-medium">
              Quick Checker tool
            </Link>{" "}
            can verify which set-aside programs your business currently qualifies for — that
            determines which MAC pools you should be targeting.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The combination of being on the right vehicle in the right certification pool, with a
            contracting officer who routinely sets aside task orders for your program type, is
            one of the most repeatable revenue models in small business government contracting.
            It takes time to build — but the work compounds.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-8 my-10 animate-on-scroll">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl text-emerald-900 mb-2">
                Start Your 30-Day Free Trial
              </h3>
              <p className="text-emerald-800 mb-4 text-sm">
                CapturePilot tracks task order activity across major MAC vehicles and surfaces
                opportunities that match your NAICS codes, certifications, and agency relationships
                — including ones you'd miss on SAM.gov alone.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="task-order-factory"
            number="07"
            title="The Task Order Proposal Factory: Managing Volume at Scale"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Once you're on multiple MAC vehicles, you'll quickly discover the volume problem.
            Task order RFQs can hit your inbox faster than you can respond to them. A company
            on four or five active vehicles in a busy NAICS code might receive 10 to 20 task
            order solicitations per month. Responding to all of them well requires a different
            kind of operation than standalone proposal development.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The concept of a <strong>task order proposal factory</strong> is well established
            among contractors who work this model at scale. It's built around reusable content,
            standardized formats, and fast customization — not custom-written proposals from
            scratch for every RFQ.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The core components of a functional task order factory:
          </p>

          <ul className="list-none space-y-3 mb-6 pl-0">
            {[
              {
                icon: FileText,
                label: "A living past performance library",
                detail:
                  "Project summaries organized by domain, dollar value, agency type, and labor category. Each entry should be 150–250 words with quantified outcomes — ready to drop into a task order response.",
              },
              {
                icon: Users,
                label: "Staff profiles for every labor category",
                detail:
                  "Tailored one-page CVs for each person you regularly propose. Keep them updated quarterly. Different versions for different audiences.",
              },
              {
                icon: Building2,
                label: "Approach templates by work type",
                detail:
                  "A set of starting-point technical approaches for your most common work types. These get customized to the specific requirement — never submitted as-is.",
              },
              {
                icon: DollarSign,
                label: "A pricing model tied to your MAC rates",
                detail:
                  "A spreadsheet or tool that takes hours input and outputs a fully loaded task order price based on your registered labor rates, overhead, and profit targets.",
              },
              {
                icon: BarChart2,
                label: "A go/no-go filter for task orders",
                detail:
                  "Not every task order is worth pursuing. A fast bid/no-bid decision framework for task orders keeps you focused on winnable work. See our",
              },
            ].map(({ icon: Icon, label, detail }) => (
              <li key={label} className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100">
                <Icon className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-stone-800 text-sm mb-1">{label}</div>
                  <div className="text-stone-600 text-xs leading-relaxed">
                    {detail}
                    {label === "A go/no-go filter for task orders" && (
                      <>
                        {" "}
                        <Link
                          href="/blog/bid-no-bid-decision-framework"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          bid/no-bid decision framework
                        </Link>{" "}
                        for the structure to use.
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-stone-700 leading-relaxed mb-4">
            The goal is to get your baseline task order response time down to four to six hours
            for straightforward opportunities. That means your team is customizing and assembling
            rather than writing. The quality ceiling on a well-assembled response from strong
            components is higher than most from-scratch proposals written under time pressure.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            CapturePilot's{" "}
            <Link href="/features/proposals" className="text-blue-600 hover:underline font-medium">
              proposal features
            </Link>{" "}
            and{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
              pipeline management
            </Link>{" "}
            tools are designed specifically for this model — organizing your active pursuits,
            tracking deadlines across multiple vehicles, and managing reusable content in one place.
          </p>
        </div>

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="mac-mistakes"
            number="08"
            title="Common MAC Mistakes That Kill Your ROI"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Getting on a MAC is expensive in time and proposal effort. Contractors who don't
            manage that investment carefully end up on vehicles that don't generate task orders,
            or they win the vehicle and consistently lose on task orders. Both outcomes waste
            a meaningful amount of business development budget.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 animate-on-scroll">
            {[
              {
                title: "Pursuing vehicles where your customers don't buy",
                body: "Being on OASIS+ means nothing if your primary agencies use a different vehicle for the work you want to do. Check USASpending.gov to verify which vehicles your target agencies actually use before investing in an application.",
              },
              {
                title: "Winning the base but not funding task order pursuit",
                body: "The MAC application cost is a sunk cost once you're on the vehicle. The real investment is continuous task order pursuit. Companies that don't budget for this end up with a contract vehicle that generates nothing.",
              },
              {
                title: "Missing on-ramp windows because you're not watching",
                body: "On-ramp notices go out on SAM.gov and often get missed. Set up automated watches on the solicitation numbers of vehicles you want to join. A missed on-ramp can mean waiting years for the next one.",
              },
              {
                title: "Responding to every task order indiscriminately",
                body: "A 5% win rate across 40 task orders is worse ROI than a 40% win rate across 10 well-chosen ones. Selective pursuit based on relationships, fit, and competitive position beats volume bidding.",
              },
              {
                title: "Not asking for debriefs",
                body: "FAR 16.505(b)(6) gives you the right to a post-award brief explanation on task order losses. Most contractors never request it. The feedback compounds — contractors who debrief consistently improve their task order win rates faster than those who don't.",
              },
              {
                title: "Letting certifications lapse while on a vehicle",
                body: "If your 8(a), SDVOSB, or HUBZone certification expires while you're on a vehicle's set-aside pool, you lose access to those set-aside task orders. Calendar your recertification deadlines as hard as any proposal deadline.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-red-50 border border-red-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <div className="font-bold text-red-800 text-sm">{title}</div>
                </div>
                <div className="text-red-700 text-xs leading-relaxed">{body}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-6">
            The biggest strategic error is treating MAC pursuit as a one-time event. The vehicles
            that generate the most revenue for small businesses are the ones where the contractor
            has built genuine relationships within the agency customer base, responds consistently
            and well to task orders, and maintains competitive positioning over years — not the
            ones where the contractor won the vehicle and then waited for the phone to ring.
          </p>
        </div>

        {/* Section 9 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="building-your-mac-strategy"
            number="09"
            title="Building Your MAC Strategy"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            A MAC strategy starts with your customers, not the vehicles. Work backward from
            the agencies you want to serve, identify which vehicles those agencies use for
            the work that matches your capabilities, and prioritize accordingly. Chasing vehicles
            because they're prestigious rather than because your target customers use them is
            the most common MAC strategy mistake.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            One vehicle, done right, beats five vehicles done poorly. For most small businesses
            in the early stages of MAC pursuit, that means picking the single vehicle with the
            most direct overlap between your capabilities and your agency relationships, getting
            on it, and building a track record of task order wins there before expanding.
          </p>

          <Callout icon={Target} color="sky" title="The MAC Strategy Decision Framework">
            <ul className="space-y-2">
              {[
                "Pull USASpending.gov data on your top five target agencies — which contract vehicles account for the most spending in your NAICS codes?",
                "Check which vehicles you currently qualify for based on your revenue, certifications, and past performance",
                "For each qualifying vehicle, estimate the task order volume in your service area over the past two fiscal years",
                "Identify which vehicles have open on-ramps or upcoming re-competitions you can enter",
                "Rank vehicles by (task order volume × win probability) and prioritize the top one or two",
                "Verify teaming options for any vehicles where you don't independently qualify yet",
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-sky-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            Track your task order pipeline the same way you'd track any other sales pipeline.
            Which vehicles are you on? What's the estimated annual task order volume? How many
            have you bid in the past 12 months? What's your win rate by vehicle? This data tells
            you whether your MAC investments are paying off — or whether you need to shift pursuit
            priorities.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            CapturePilot's{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
              pipeline management
            </Link>{" "}
            tools let you track active task order pursuits across vehicles alongside your
            standalone opportunities — giving you a single view of what's in flight, what's
            due, and where your BD budget is going. See how our{" "}
            <Link href="/features/matching" className="text-blue-600 hover:underline font-medium">
              matching engine
            </Link>{" "}
            flags task order opportunities that fit your vehicle positions and NAICS profile.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            For deeper context on the capture process that applies both to MAC applications and
            task order pursuits, see our guide to{" "}
            <Link href="/blog/capture-management-process" className="text-blue-600 hover:underline font-medium">
              the capture management process
            </Link>
            . The same qualification-building and relationship-development principles apply —
            the timeline and scope are just compressed.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The federal market is increasingly a vehicle-access game. The contractors building
            durable, growing federal businesses in 2026 are the ones who treated MAC pursuit as
            a core part of their BD strategy — not a nice-to-have — and invested in both getting
            on the vehicles and winning the task orders that follow.
          </p>
        </div>

        {/* Conclusion CTA */}
        <div className="bg-gradient-to-r from-stone-900 to-indigo-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Layers className="w-8 h-8 flex-shrink-0 mt-1 text-indigo-300" />
            <div>
              <h3 className="font-black text-xl mb-2">
                Get a Strategy Call on Your MAC Pursuit
              </h3>
              <p className="text-stone-300 mb-4 text-sm">
                CapturePilot tracks task order activity across major MAC vehicles, surfaces
                on-ramp opportunities, and helps you build the pipeline data you need to decide
                which vehicles are worth pursuing. Book a strategy call to see how it maps to
                your specific situation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-lg hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/features/pipeline"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-indigo-500 transition-colors text-sm"
                >
                  See pipeline features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Keep Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/idiq-contracts-explained",
                title: "IDIQ Contracts Explained: How to Get on a Multi-Year Contract Vehicle",
                category: "Contract Vehicles",
              },
              {
                href: "/blog/gsa-schedule-guide",
                title: "GSA Schedule Contracts: Is a GSA Schedule Right for Your Business?",
                category: "Contract Vehicles",
              },
              {
                href: "/blog/government-contract-teaming-agreement",
                title: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts",
                category: "Strategy",
              },
              {
                href: "/blog/bid-no-bid-decision-framework",
                title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits",
                category: "Strategy",
              },
            ].map(({ href, title, category }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-stone-50 hover:bg-indigo-50 border border-stone-100 hover:border-indigo-200 rounded-xl p-5 transition-all hover-lift"
              >
                <div className="text-xs font-semibold text-indigo-600 mb-2">{category}</div>
                <div className="text-sm font-semibold text-stone-800 group-hover:text-indigo-700 leading-snug">
                  {title}
                </div>
                <div className="flex items-center gap-1 mt-3 text-xs text-indigo-500 font-medium">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
