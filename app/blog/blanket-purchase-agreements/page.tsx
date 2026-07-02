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
  TrendingUp,
  BarChart3,
  Clock,
  DollarSign,
  Shield,
  Zap,
  FileText,
  RefreshCw,
  Users,
  Award,
  Target,
  ListChecks,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-a-bpa-actually-is", label: "What a BPA Actually Is (and Is Not)" },
  { id: "two-types-of-bpa", label: "The Two Types: Traditional vs. Schedule BPAs" },
  { id: "dollar-thresholds", label: "Dollar Thresholds You Need to Know" },
  { id: "period-of-performance", label: "How Long BPAs Last — and Why It Matters" },
  { id: "annual-review-opportunity", label: "The Annual Review: Your Window to Break In" },
  { id: "multi-vs-single-award", label: "Multi-Award vs. Single-Award BPAs" },
  { id: "how-to-get-on-a-bpa", label: "How to Position Your Business to Win BPA Awards" },
  { id: "building-track-record", label: "Delivering Under a BPA: Making Every Order Count" },
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

export default function BlanketPurchaseAgreementsPage() {
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
            <span className="text-stone-900 font-medium">Blanket Purchase Agreements</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Blanket Purchase Agreements:{" "}
            <span className="gradient-text">
              How BPAs Create Predictable Government Revenue
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most small contractors chase one-time task orders. The ones growing fastest are building
            BPA relationships — simplified charge accounts that let agencies order from you
            repeatedly, without a new competition every time. Here&apos;s how the mechanism works
            and how to get one.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 2, 2026</span>
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
                  <span className="text-xs font-bold text-blue-500 w-5 shrink-0">
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
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto prose-custom">

          {/* ── Section 1 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-a-bpa-actually-is" number="01" title="What a BPA Actually Is (and Is Not)" />

            <p className="text-stone-700 leading-relaxed mb-4">
              A blanket purchase agreement is a pre-arranged charge account between a government
              agency and one or more vendors. The agency defines what it expects to buy — the
              categories of supplies or services, the anticipated volume, the pricing structure —
              and then orders against that agreement whenever it has a need. No new solicitation
              required. No competitive process for each individual purchase.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That last part is the reason BPAs matter. Once you hold one, orders can come in
              quickly and repeatedly. The agency has already decided you&apos;re a qualified source.
              The contracting officer already knows your rates. The paperwork is already done. An
              order that would take months through a full procurement can happen in days.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              One important distinction: a BPA is{" "}
              <strong>not itself a contract</strong> and does not obligate any funds when it&apos;s
              established. Think of it as an agreement to use a vendor when needs arise, not a
              guarantee of orders. The government is under no obligation to place any calls against
              a BPA. You get paid when individual orders (called &quot;calls&quot; in FAR
              terminology) are placed and work is performed — not when the BPA is signed.
            </p>

            <Callout icon={Lightbulb} color="sky" title="BPAs vs. contracts vs. IDIQs">
              A BPA differs from an IDIQ contract in a few key ways. An IDIQ typically has a
              minimum order guarantee and a contract ceiling. A BPA has neither — no minimum, no
              ceiling in the traditional sense. But BPAs are also simpler to establish and faster
              to use. For an agency that needs routine, repetitive services from a trusted vendor,
              a BPA is often the path of least resistance. For a contractor, that simplicity means
              a lower barrier to entry than competing for a formal IDIQ vehicle. For more on IDIQ
              mechanics, see our guide to{" "}
              <Link href="/blog/idiq-contracts-explained" className="underline">
                IDIQ contracts
              </Link>
              .
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              BPAs are authorized under two separate parts of the Federal Acquisition Regulation.
              That distinction — which FAR part governs the BPA — determines almost everything
              about how large orders can be, how long the agreement can run, and what competitive
              requirements apply.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="two-types-of-bpa" number="02" title="The Two Types: Traditional vs. Schedule BPAs" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The type of BPA you pursue depends on whether you have a GSA Multiple Award Schedule
              (MAS) contract. That single fact divides the world into two very different paths.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              {[
                {
                  label: "Traditional BPA",
                  rule: "FAR Part 13",
                  icon: FileText,
                  color: "bg-amber-50 border-amber-200",
                  iconColor: "text-amber-600",
                  headerColor: "text-amber-800",
                  points: [
                    "No GSA Schedule required",
                    "Individual orders capped at the Simplified Acquisition Threshold",
                    "Established directly between one agency and one or more open-market vendors",
                    "Faster and simpler to set up",
                    "Typically used for routine, lower-dollar needs",
                    "Often single-award",
                  ],
                },
                {
                  label: "Schedule BPA (MAS BPA)",
                  rule: "FAR Part 8.405-3",
                  icon: Award,
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                  headerColor: "text-blue-800",
                  points: [
                    "Requires an active GSA MAS contract",
                    "Not bound by the Simplified Acquisition Threshold — can cover very large orders",
                    "Typically multi-award, with competition at the order level",
                    "Annual review and best-value determination required",
                    "Up to five years total (multi-award) or one year plus four options (single-award)",
                    "52% of all GSA Schedule spending flows through BPAs",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border-2 p-6 ${item.color}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    <p className={`font-black text-lg ${item.headerColor}`}>{item.label}</p>
                  </div>
                  <p className="text-xs text-stone-500 font-medium mb-4">{item.rule}</p>
                  <ul className="space-y-2">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className={`w-4 h-4 ${item.iconColor} shrink-0 mt-0.5`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For most small businesses without a GSA Schedule, the traditional FAR Part 13 BPA
              is the accessible entry point. You don&apos;t need any special certifications beyond
              an active SAM.gov registration. An agency contracting officer can establish a BPA
              with you after as little market research as soliciting quotes from three sources.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              If you have — or are pursuing — a GSA Schedule contract, the Schedule BPA is where
              the real volume sits. GSA&apos;s own data shows that Schedule BPAs account for
              roughly <strong>52% of all MAS spending</strong>. The agencies most comfortable with
              Schedule ordering have learned to use BPAs to streamline repetitive buys, which
              means a large share of the easiest federal ordering runs through this mechanism.
            </p>

            <Callout icon={TrendingUp} color="blue" title="Don't have a GSA Schedule yet?">
              A GSA Schedule is not a prerequisite for pursuing traditional BPAs. But if you plan
              to grow your federal revenue past the simplified acquisition threshold on a recurring
              basis, a Schedule contract becomes increasingly valuable. Our guide to{" "}
              <Link href="/blog/gsa-schedule-guide" className="underline">
                GSA Schedule contracts
              </Link>{" "}
              walks through whether and when a Schedule makes sense for your business.
            </Callout>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="dollar-thresholds" number="03" title="Dollar Thresholds You Need to Know" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The dollar rules for BPAs are different from the rules for standard contracts, and
              they vary by BPA type. Get these wrong and you either leave money on the table or
              stumble into a compliance problem.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 rounded-tl-lg font-semibold">Scenario</th>
                    <th className="text-left p-3 font-semibold">Governing Rule</th>
                    <th className="text-right p-3 rounded-tr-lg font-semibold">Per-Order Limit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Traditional BPA — supplies/services", "FAR 13.303", "Up to SAT (~$250K)"],
                    ["Traditional BPA — commercial items (FAR 13.500)", "FAR 13.500(a)", "Up to $9 million"],
                    [
                      "Traditional BPA — commercial items, certain DoD/NASA acquisitions",
                      "FAR 13.500(c)",
                      "Up to $15 million",
                    ],
                    ["Schedule BPA — individual task/delivery orders", "FAR 8.405-3", "No SAT cap"],
                    [
                      "Schedule BPA — single-award, total estimated value",
                      "FAR 8.405-3(a)(3)",
                      "Max $150M before head-of-agency determination required",
                    ],
                  ].map(([scenario, rule, limit], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 text-stone-700">{scenario}</td>
                      <td className="p-3 text-stone-500 font-mono text-xs">{rule}</td>
                      <td className="p-3 text-right font-bold text-stone-900">{limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The most important number for small businesses new to BPAs is the{" "}
              <strong>Simplified Acquisition Threshold (SAT)</strong>. As of late 2025, the SAT
              for most acquisitions sits at approximately $250,000. Under a traditional BPA, each
              individual call order generally must stay below this ceiling. That limits the revenue
              any single order can generate — but remember, a BPA can generate many orders over
              its life, and those aggregate totals can reach into the millions.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For commercial products and commercial services, FAR 13.500 raises the ceiling
              significantly — up to <strong>$9 million per order</strong> in most cases, and up
              to <strong>$15 million</strong> for acquisitions meeting specific criteria under FAR
              13.500(c). If you sell commercial services, this is a much more compelling number
              than the standard SAT.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Single-award BPAs over $150M need special approval">
              If a single-award Schedule BPA is estimated to exceed $150 million in total value
              (including options), the head of the contracting activity must make a written
              determination that a single award is justified — typically because only one source
              can reasonably perform the work or because specific statutory authority exists. For
              most small business single-award BPAs, this threshold isn&apos;t relevant, but it
              matters if your agency partner is considering consolidating large volumes of work
              under a single arrangement with you.
            </Callout>
          </div>

          {/* ── Mid-article CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Find agencies actively using BPAs in your NAICS codes
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/intelligence" className="underline text-white hover:text-blue-200">
                    spend intelligence
                  </Link>{" "}
                  shows you which agencies are issuing BPA calls in your service categories, what
                  incumbents are earning, and when existing BPAs are up for review — so you can
                  target the right opportunities before they&apos;re posted.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="period-of-performance" number="04" title="How Long BPAs Last — and Why It Matters" />

            <p className="text-stone-700 leading-relaxed mb-4">
              BPA duration rules are stricter than most contractors realize, and the difference
              between single-award and multi-award BPAs is stark.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              {[
                {
                  type: "Multi-Award Schedule BPA",
                  duration: "Up to 5 years total",
                  detail:
                    "The government gives preference to multi-award BPAs. A five-year multi-award BPA with annual orders is a substantial revenue relationship — but competition continues at the order level.",
                  icon: Users,
                  color: "border-blue-300 bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  type: "Single-Award Schedule BPA",
                  duration: "1 year + up to 4 one-year options",
                  detail:
                    "Single-award BPAs are intentionally limited. The government disfavors them and requires documented justification, because concentration of orders with one vendor reduces competition.",
                  icon: Shield,
                  color: "border-violet-300 bg-violet-50",
                  iconColor: "text-violet-600",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl border-2 p-6 ${item.color}`}>
                  <item.icon className={`w-6 h-6 ${item.iconColor} mb-3`} />
                  <p className="font-black text-stone-900 text-lg mb-1">{item.type}</p>
                  <p className="text-sm font-bold text-stone-600 mb-3">{item.duration}</p>
                  <p className="text-sm text-stone-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Traditional FAR Part 13 BPAs have no specific period-of-performance limits codified
              in the FAR, but contracting officers typically set them to align with the fiscal year
              or a rolling 12-month window. In practice, many traditional BPAs are reviewed and
              reestablished annually.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              One nuance that trips up new contractors: the BPA period of performance must stay
              within the bounds of the underlying GSA Schedule contract. If your Schedule contract
              expires in two years, your Schedule BPA can&apos;t run for five unless you renew
              the Schedule first. Track your Schedule expiration dates carefully — a lapsed
              Schedule can make an active BPA unenforceable.
            </p>

            <Callout icon={Clock} color="orange" title="Why duration matters to your pipeline strategy">
              A five-year multi-award BPA means five years of order competition — but also five
              years of visibility into the agency&apos;s needs. If you win a spot on a five-year
              BPA, you have five years to build relationships, accumulate past performance, and
              position for the recompete. That&apos;s the compounding benefit of BPA revenue versus
              one-time task orders. Track your BPA expirations in your{" "}
              <Link href="/features/pipeline" className="underline">
                opportunity pipeline
              </Link>{" "}
              like you would any major contract recompete.
            </Callout>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="annual-review-opportunity" number="05" title="The Annual Review: Your Window to Break In" />

            <p className="text-stone-700 leading-relaxed mb-4">
              This is the part of BPA regulations that most small contractors overlook — and it
              represents a real competitive opening.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Under FAR 8.405-3, the ordering activity contracting officer must review each
              Schedule BPA <strong>at least once a year</strong>. That review has a specific
              purpose: determine in writing whether (1) the underlying GSA Schedule contract is
              still active, (2) the BPA still represents the best value to the government, and
              (3) estimated quantities and amounts have been exceeded such that additional price
              reductions can be obtained.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              &quot;Best value&quot; is the operative phrase. If the contracting officer finds
              that a current BPA holder is no longer delivering best value — whether because
              pricing has drifted, performance has declined, or better alternatives exist in the
              market — the agency can modify terms, add new awardees, or terminate the BPA
              entirely.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">
                How to use BPA review cycles as a competitive entry point
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    label: "Identify BPAs approaching their annual review",
                    desc: "Search FPDS for BPA awards in your NAICS codes. Note the award dates and map out which ones are due for review in the next 90 days.",
                  },
                  {
                    step: "02",
                    label: "Research the incumbent's performance record",
                    desc: "Check CPARS ratings if available. Look for agency complaints, scope creep, or pricing increases that the incumbent may have passed along. A weak performance record is your opening.",
                  },
                  {
                    step: "03",
                    label: "Make contact before the review",
                    desc: "Reach out to the contracting officer or program office well before the annual review date. Introduce your company, show you understand their mission, and position yourself as a better-value alternative.",
                  },
                  {
                    step: "04",
                    label: "Submit competitive pricing if solicited",
                    desc: "Annual reviews sometimes trigger a request for competitive quotes. Have your pricing ready and be prepared to demonstrate that your rates beat the incumbent on a total cost basis, not just hourly rate.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-2xl font-black text-blue-200 shrink-0 w-8">{item.step}</span>
                    <div>
                      <p className="font-bold text-stone-900">{item.label}</p>
                      <p className="text-sm text-stone-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Incumbents who have held a BPA for several years often get complacent. Pricing drifts
              upward. Service quality becomes baseline rather than competitive. A new entrant who
              shows up during the review cycle with a compelling price and a clear understanding of
              the agency&apos;s needs can unseat even a well-established BPA holder — especially
              on multi-award vehicles where adding a new awardee requires less justification than
              replacing a sole-source arrangement.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The{" "}
              <Link href="/blog/incumbent-advantage-government-contracts" className="text-blue-600 hover:underline">
                incumbent advantage
              </Link>{" "}
              is real, but it erodes during review cycles if the incumbent isn&apos;t maintaining
              value. This is when preparation pays off.
            </p>

            <Callout icon={RefreshCw} color="violet" title="How CapturePilot tracks review windows">
              CapturePilot&apos;s intelligence tools flag BPA awards approaching their estimated
              annual review dates and surface any performance concerns in publicly available data.
              Instead of manually tracking FPDS award dates,{" "}
              <Link href="/features/intelligence" className="underline">
                let the platform alert you
              </Link>{" "}
              when a BPA in your market is coming up for review.
            </Callout>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="multi-vs-single-award" number="06" title="Multi-Award vs. Single-Award BPAs" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The FAR explicitly states that contracting officers should give{" "}
              <strong>preference to establishing multiple-award BPAs</strong> rather than
              single-award BPAs. This preference has real implications for small businesses,
              mostly positive.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Users,
                  scenario: "Multiple-award BPA — what it means for you",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  border: "border-blue-200",
                  points: [
                    "Several vendors hold the BPA; individual orders are competed among them",
                    "Lower bar to win a spot on the BPA than to win sole-source work",
                    "You compete for orders, not just for the BPA itself",
                    "Agencies must generally solicit at least three BPA holders for any order above the micro-purchase threshold ($10,000)",
                    "Small business set-asides can be applied at the order level even if the BPA wasn&apos;t originally set aside",
                    "Exposure to more orders means more past performance accumulation",
                  ],
                },
                {
                  icon: Target,
                  scenario: "Single-award BPA — when it exists",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                  border: "border-violet-200",
                  points: [
                    "Only one vendor holds the BPA; all orders go to that vendor",
                    "Requires documented justification — the government must show single-award is necessary",
                    "Maximum one year with four one-year options for Schedule BPAs",
                    "Far less common post-2012 FAR changes that discouraged single-award arrangements",
                    "Wins are high-value but harder to break into for competitors",
                    "Higher compliance scrutiny — agencies must justify why they aren&apos;t using multiple vendors",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-6 ${item.bg} ${item.border}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <p className="font-bold text-stone-900">{item.scenario}</p>
                  </div>
                  <ul className="space-y-2">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className={`w-4 h-4 ${item.color} shrink-0 mt-0.5`} />
                        <span dangerouslySetInnerHTML={{ __html: pt }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For most small businesses, <strong>multi-award BPAs are the strategic target</strong>.
              You don&apos;t need to be the only vendor — you just need to be on the list. From
              there, you compete for individual call orders using abbreviated proposals that are far
              less burdensome than a full RFP response. Agencies also have flexibility to set aside
              individual orders under a multi-award BPA for small businesses, even if the BPA
              itself wasn&apos;t set aside during the original competition.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That last point deserves emphasis. If you hold a spot on a BPA that wasn&apos;t
              originally restricted to small businesses, the contracting officer can still set
              aside individual orders for small business concerns — including socioeconomic
              categories like SDVOSB, WOSB, HUBZone, and 8(a). Being on a multi-award BPA as a
              small business gives you access to orders that larger competitors can&apos;t bid on.
            </p>
          </div>

          {/* ── Second CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Check which set-aside programs you qualify for — free
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Set-aside status is one of the strongest advantages you can hold when competing
                  for BPA orders. CapturePilot&apos;s Quick Checker analyzes your SAM.gov profile
                  and tells you which certifications you&apos;re eligible for in seconds.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="how-to-get-on-a-bpa" number="07" title="How to Position Your Business to Win BPA Awards" />

            <p className="text-stone-700 leading-relaxed mb-4">
              There is no universal BPA opportunity database the way there is for standard contract
              solicitations. Many BPAs are awarded after abbreviated competition that doesn&apos;t
              result in a formal SAM.gov posting. That means positioning matters more than
              responding — you need to be known before the solicitation happens.
            </p>

            <div className="space-y-5 my-8">
              {[
                {
                  icon: BarChart3,
                  step: "Map the agency&apos;s spending pattern",
                  detail:
                    "Use FPDS or USASpending to find agencies that have historically used BPAs in your NAICS codes. Look for agencies with repetitive small purchases in your category — those are the buyers most likely to convert to a BPA arrangement. Pay attention to award dates and estimated values to identify review windows.",
                },
                {
                  icon: FileText,
                  step: "Respond to every sources sought and market survey in your space",
                  detail:
                    "Agencies often conduct market research before establishing a BPA. A sources sought response is your first opportunity to introduce yourself as a qualified vendor before the solicitation is written. If you respond with a compelling capability statement and relevant past performance, you&apos;re already differentiated from vendors who only show up after the RFP drops.",
                },
                {
                  icon: Users,
                  step: "Build the relationship with the program office, not just the CO",
                  detail:
                    "BPAs are established to streamline repetitive purchases. The program office — the people who will actually order from the BPA — often have more informal influence over who gets on the list than the contracting officer does. Attend agency industry days. Request informational meetings. Understand what they buy and why.",
                },
                {
                  icon: Award,
                  step: "Have competitive pricing documented and ready",
                  detail:
                    "BPA competitions frequently use simplified procedures, meaning they can move fast. Agencies soliciting BPA quotes sometimes give vendors 24–72 hours to respond. Know your rates, know your ceiling prices (especially if you have a GSA Schedule), and have your pricing model ready to submit quickly.",
                },
                {
                  icon: ListChecks,
                  step: "Demonstrate past performance that mirrors the BPA requirement",
                  detail:
                    "BPA evaluations typically emphasize past performance and price above other factors. Prepare two or three past performance write-ups that show work directly comparable to what the BPA will cover — same type of service, similar volume, comparable agency environment. If you don&apos;t have federal past performance yet, comparable commercial or subcontracting experience can substitute early on.",
                },
                {
                  icon: DollarSign,
                  step: "Offer additional price reductions off your schedule or quoted rates",
                  detail:
                    "Under FAR 8.405-3, agencies are required to seek price reductions before establishing a Schedule BPA. Come in prepared to offer a discount off your standard schedule pricing. Even a modest reduction — 2–5% — signals that you value the relationship and understand the government&apos;s cost expectations.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl border border-stone-200 hover-lift"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1"
                       dangerouslySetInnerHTML={{ __html: item.step }} />
                    <p className="text-sm text-stone-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Small businesses with socioeconomic certifications have additional leverage here.
              An agency trying to meet its small business spending goals can set aside a BPA for
              SDVOSB, WOSB, or HUBZone vendors specifically. If you hold one of those
              certifications, your addressable BPA market is larger than a comparably qualified
              business without one. Our guides on{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">
                SDVOSB contracts
              </Link>
              ,{" "}
              <Link href="/blog/wosb-certification-guide" className="text-blue-600 hover:underline">
                WOSB certification
              </Link>
              , and the{" "}
              <Link href="/blog/hubzone-program-guide" className="text-blue-600 hover:underline">
                HUBZone program
              </Link>{" "}
              cover the eligibility requirements for each.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="A real example: $12.5M small business BPA">
              GSA awarded a construction management BPA to APSI Construction Management, a small
              business, with a one-year base and four option years — totaling $12.5 million over
              five years. That&apos;s the kind of predictable, multi-year revenue stream that
              changes what a small business can plan for. The key: APSI was already known to the
              agency before the BPA solicitation, had relevant past performance, and offered
              competitive pricing from the start. The relationship preceded the contract.
            </Callout>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="building-track-record" number="08" title="Delivering Under a BPA: Making Every Order Count" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Winning a spot on a BPA is step one. The actual work happens at the order level —
              and how you perform on early orders determines whether you keep getting them.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              On multi-award BPAs, agencies have discretion about which BPA holders they solicit
              for each order. They&apos;re required to give all holders a &quot;fair opportunity&quot;
              to compete, but in practice, program offices often develop preferences based on
              responsiveness, quality, and ease of working with a vendor. A contractor who
              responds to order solicitations quickly, delivers cleanly, and communicates proactively
              gets more orders than one who technically has the same BPA status.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "Treat every call order like a performance review",
                  body: "Each order is an opportunity to build the CPARS record and personal relationships that will support your recompete position. Document your deliverables, flag issues early, and make the contracting officer&apos;s job easier. The people who evaluate you at the end of the BPA period are the same ones who will write the next solicitation.",
                },
                {
                  title: "Track your BPA spend and project the recompete",
                  body: "Monitor how much of the BPA ceiling has been consumed. When total orders approach 75–80% of the estimated ceiling, some agencies start planning the next BPA or a formal contract. That&apos;s your cue to start positioning for the recompete — before competitors realize it&apos;s coming.",
                },
                {
                  title: "Build past performance documentation as you go",
                  body: "Don&apos;t wait until recompete time to assemble your performance record. After each significant order, document what you did, the dollar value, the timeline, and the outcome. Have a reference contact from the program office who can speak to your work. Past performance is perishable — recency matters to evaluators.",
                },
                {
                  title: "Stay current on agency needs between orders",
                  body: "BPAs create permission to stay in contact with an agency without a specific solicitation driving the conversation. Use that. Check in with the program office quarterly. Attend agency events. Understand what&apos;s changing in their budget and mission so you can respond intelligently when the next order solicitation hits.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-blue-600 font-black text-lg shrink-0">{i + 1}.</span>
                  <div>
                    <p className="font-bold text-stone-900">{item.title}</p>
                    <p className="text-sm text-stone-600 mt-1 leading-relaxed"
                       dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The long-term play with a BPA is using it to build toward a formal contract vehicle.
              Strong performance under a BPA — with documented past performance and a growing
              relationship with the program office — positions you well to win the formal IDIQ or
              single-award contract when the agency decides to formalize the relationship. A BPA
              that generates $300,000 a year for three years is valuable on its own, but it also
              becomes your proof point for a larger contract later.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For related strategy, see our guides on{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-600 hover:underline">
                past performance
              </Link>
              ,{" "}
              <Link href="/blog/contracting-officer-relationship" className="text-blue-600 hover:underline">
                building relationships with contracting officers
              </Link>
              , and{" "}
              <Link href="/blog/cpars-contractor-performance" className="text-blue-600 hover:underline">
                how CPARS ratings affect future awards
              </Link>
              . And if you want to manage your BPA pursuit pipeline alongside your full BD
              effort,{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                CapturePilot&apos;s pipeline tool
              </Link>{" "}
              tracks opportunities, review dates, and call order activity in one place.
            </p>

            <Callout icon={TrendingUp} color="blue" title="BPAs compound — but only if you work them">
              A BPA by itself is just an agreement. What turns it into predictable revenue is
              consistent performance, proactive relationship management, and early positioning for
              the recompete. The contractors who treat their BPA like a standing contract — as
              opposed to a minor administrative arrangement — are the ones who renew it, expand
              it, and eventually convert it into something larger. The mechanism is the
              opportunity. What you do with it is the result.
            </Callout>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="max-w-xl">
              <p className="text-stone-400 text-sm font-medium mb-2">Ready to find BPA opportunities?</p>
              <h3 className="text-2xl font-black mb-3">
                CapturePilot tracks agency spending patterns so you can target BPAs before they&apos;re
                posted.
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                See which agencies use BPAs in your categories, find review windows, and get
                matched to opportunities where your certifications give you a competitive edge.
                Start with a free eligibility check, then explore the full platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 font-bold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors text-sm"
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
