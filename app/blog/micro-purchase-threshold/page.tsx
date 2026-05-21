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
  CreditCard,
  FileText,
  Clock,
  Users,
  BarChart3,
  Shield,
  Info,
  Zap,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-mpt", label: "What the Micro-Purchase Threshold Actually Is" },
  { id: "the-15k-breakdown", label: "The $15,000 Breakdown by Contract Type" },
  { id: "how-agencies-buy", label: "How Agencies Buy Below $15K: The GPC" },
  { id: "no-sam-required", label: "The SAM.gov Exception You Need to Know" },
  { id: "560k-awards", label: "560,000 Awards a Year: The Real Opportunity" },
  { id: "getting-found", label: "How to Get Found for Micro-Purchases" },
  { id: "gsa-schedule-angle", label: "The GSA Schedule Micro-Purchase Angle" },
  { id: "stepping-stone", label: "Using Micro-Purchases to Build Your Record" },
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

export default function MicroPurchaseThresholdPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-emerald-50 to-white">
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
            <span className="text-stone-900 font-medium">Micro-Purchase Threshold</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Micro-Purchase Threshold:{" "}
            <span className="gradient-text">The Easiest Way to Start Selling to the Government</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government issued{" "}
            <strong className="text-stone-700">over 560,000 awards at or below the micro-purchase threshold</strong>{" "}
            per year from FY2022&ndash;2024 &mdash; to roughly 18,000 companies. As of October 1, 2025 that
            threshold jumped from $10,000 to $15,000, widening the door for small businesses that
            want a fast, paperwork-light path into federal revenue.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 21, 2026</span>
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
            id="what-is-mpt"
            number="01"
            title="What the Micro-Purchase Threshold Actually Is"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The micro-purchase threshold (MPT) is a dollar ceiling below which federal agencies
              can buy supplies and services without any competition requirement, without a formal
              solicitation, and in most cases without even checking whether a vendor is registered
              in SAM.gov. As of October 1, 2025, that ceiling is{" "}
              <strong className="text-stone-800">$15,000</strong> for most purchases &mdash; up from the
              prior $10,000 limit, which held for several years before the FAR Council adjusted it
              for inflation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Below that number, a government cardholder &mdash; often a contracting officer, program
              manager, or even an administrative assistant with a government purchase card &mdash; can
              call you, order from your website, hand you a credit card, and you&apos;re done. No
              solicitation number. No proposals. No months-long award process.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Most small businesses chasing their first federal dollar are looking in the wrong
              direction: they&apos;re trying to crack six-figure competitive bids when a five-figure
              direct purchase is available the moment a cardholder learns they exist and can solve
              a problem. That&apos;s not a small market. In FY2024 alone, the government made hundreds
              of thousands of micro-purchases &mdash; many of which never appear on SAM.gov at all.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$15,000", label: "Current micro-purchase threshold (as of Oct 1, 2025)", icon: DollarSign },
                { stat: "560K+", label: "Annual awards at or below old $10K threshold, FY22–24 avg", icon: BarChart3 },
                { stat: "18,000", label: "Companies receiving micro-purchase awards annually", icon: Users },
                { stat: "No SAM", label: "Registration sometimes not required for GPC purchases", icon: CheckCircle2 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The micro-purchase threshold sits at the bottom of a three-tier procurement ladder.
              Above it, between $15,001 and $350,000, lies the mandatory small business set-aside
              zone. Above $350,000 is where large formal competitions and certifications become
              more important. If you want a deep dive on the full ladder, our{" "}
              <Link
                href="/blog/small-business-set-aside-threshold"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                small business set-aside threshold guide
              </Link>{" "}
              covers all three tiers. This guide focuses entirely on the bottom rung &mdash; because it&apos;s
              the one most small businesses skip past too quickly.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="FAR Citation: Subpart 13.2">
            The rules governing micro-purchases live in FAR Subpart 13.2 &mdash; Actions At or Below the
            Micro-Purchase Threshold. The core provision, FAR 13.201(a), authorizes authorized
            individuals to make purchases at or below the MPT &ldquo;without soliciting competitive
            quotations.&rdquo; That phrase is the legal foundation for the entire category: no
            competition required, no formal solicitation, just a buyer who knows what they need and
            a vendor who can provide it.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="the-15k-breakdown"
            number="02"
            title="The $15,000 Breakdown by Contract Type"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The $15,000 headline figure is the general MPT, but exceptions exist. Not every
              category of government purchase uses the same ceiling. These exceptions matter
              because certain industries &mdash; especially construction and service-heavy work &mdash; operate
              under lower limits regardless of the October 2025 adjustment.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Purchase Type</th>
                    <th className="text-right px-4 py-3 font-semibold">MPT Limit</th>
                    <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">Governing Authority</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Supplies and most services",
                      limit: "$15,000",
                      authority: "FAR 2.101, effective Oct 1, 2025",
                    },
                    {
                      type: "Construction (Davis-Bacon Act applies)",
                      limit: "$2,000",
                      authority: "Davis-Bacon Act wage requirements",
                    },
                    {
                      type: "Services under Service Contract Labor Standards",
                      limit: "$2,500",
                      authority: "Service Contract Labor Standards statute",
                    },
                    {
                      type: "Contingency operations (inside U.S.)",
                      limit: "$25,000",
                      authority: "FAR 13.201(g)(1)(i)",
                    },
                    {
                      type: "Contingency operations (outside U.S.)",
                      limit: "$40,000",
                      authority: "FAR 13.201(g)(1)(ii)",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-700 border-b border-stone-100">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-emerald-700 border-b border-stone-100">
                        {row.limit}
                      </td>
                      <td className="px-4 py-3 text-stone-500 text-xs border-b border-stone-100">
                        {row.authority}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you&apos;re in professional services, IT, staffing, training, or product supply &mdash; the
              full $15,000 threshold applies. If you&apos;re in construction, the micro-purchase floor
              drops to $2,000, because Davis-Bacon prevailing wage requirements kick in above that
              level and the simplified purchase process can&apos;t accommodate them. Janitorial,
              landscaping, and other service-heavy work governed by the Service Contract Labor
              Standards hits the $2,500 cap.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The contingency operations exceptions ($25K inside the U.S., $40K outside) apply
              when the head of an agency designates a requirement as supporting a contingency
              operation, emergency response, or defense against specific threat types. These
              numbers rarely affect day-to-day small business marketing, but DoD and civilian
              emergency management contractors should know they exist.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The practical takeaway: if your NAICS codes sit in services or product supply, the
              $15,000 threshold is your market. If you&apos;re in construction or services covered
              by labor standards statutes, your micro-purchase ceiling is lower &mdash; and
              the simplified path to federal revenue is narrower in those segments. For building
              a longer-term pipeline in construction specifically, read our{" "}
              <Link
                href="/blog/construction-government-contracts"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                construction government contracts guide
              </Link>
              .
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="how-agencies-buy"
            number="03"
            title="How Agencies Buy Below $15K: The Government Purchase Card"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The government purchase card (GPC) &mdash; essentially a Visa or Mastercard issued to
              authorized federal employees &mdash; is the preferred payment mechanism for micro-purchases.
              The GPC program exists specifically to streamline small acquisitions, cut paperwork, and
              eliminate the administrative overhead that comes with formal contracts. When you sell
              to the government below the MPT, you often aren&apos;t signing a contract at all. You&apos;re
              accepting a credit card.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Payment settles through the card network, typically within a few business days. No
              invoicing cycle, no 30-day Net payment terms, no waiting for a contracting officer to
              approve an invoice through three layers of review. For small businesses that live or
              die by cash flow, that speed matters.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-8 my-8 animate-on-scroll">
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                How a Micro-Purchase Transaction Works
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Agency identifies a need",
                    desc: "A program manager needs training software, a supplies order, or a technical service. The requirement is under $15,000 and doesn't require formal competition.",
                  },
                  {
                    step: "02",
                    title: "Cardholder finds a vendor",
                    desc: "The GPC cardholder identifies a capable vendor through a GSA schedule search, an internet search, a conference relationship, or a recommendation. No SAM.gov search required at this stage for GPC transactions.",
                  },
                  {
                    step: "03",
                    title: "Vendor confirms they accept purchase cards",
                    desc: "This is the only gate many micro-purchase transactions go through. If you accept Visa or Mastercard, you can be paid. GSA Schedule contractors are required to accept the GPC for purchases under the MPT.",
                  },
                  {
                    step: "04",
                    title: "Purchase is made and recorded",
                    desc: "The cardholder makes the purchase, records it in their log, and reconciles it at the end of the billing cycle. No competitive documentation required below the MPT.",
                  },
                  {
                    step: "05",
                    title: "Payment settles within days",
                    desc: "Payment flows through the card network &mdash; typically within 2–5 business days. No formal payment voucher, no invoice approval chain, no Net-30 waiting period.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-emerald-400 font-mono font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-stone-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              GPC cardholders are spread throughout every agency and every level of government.
              The VA alone has thousands of cardholders across its medical centers, regional
              offices, and administrative units. DoD has cardholders in nearly every command.
              Civilian agencies &mdash; GSA, DHS, HHS, Department of Energy &mdash; have cardholders
              handling day-to-day operational purchases all the time.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The implication: your market for micro-purchases isn&apos;t defined by agency
              headquarters or large procurement offices. It&apos;s defined by whoever holds a
              card and has a problem your product or service can solve. That changes how you
              think about business development. It&apos;s less about tracking solicitations and
              more about building direct relationships with the people who control discretionary
              spending.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="GPC Cardholders Have Spending Limits">
            Individual GPC cardholders have per-transaction and monthly spending limits set by their
            agency. A cardholder might be authorized for purchases up to $3,000 per transaction but
            only $10,000 per month. These limits are internal agency controls &mdash; they don&apos;t change
            the FAR threshold, but they do cap what any individual cardholder can award you without
            getting supervisor approval or splitting into multiple transactions (which agencies are
            explicitly prohibited from doing to evade thresholds). Know this when setting your
            pricing expectations for micro-purchase relationships.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="no-sam-required"
            number="04"
            title="The SAM.gov Exception You Need to Know"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Here&apos;s the fact that surprises most small business owners new to government
              contracting: SAM.gov registration is not required for micro-purchases made using a
              government purchase card. FAR Subpart 4.11 requires SAM registration when submitting
              an offer and at the time of contract award &mdash; but that requirement has a specific
              carve-out for GPC transactions at or below the MPT.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              That carve-out means a new company with no SAM.gov registration, no CAGE code, no
              DUNS/UEI number, and no history in any federal database can legally sell to the
              federal government if a GPC cardholder wants to buy from them and the transaction
              is under $15,000.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
              <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <p className="font-bold text-emerald-900">What you DON&apos;T need for micro-purchases</p>
                </div>
                <ul className="space-y-2 text-sm text-emerald-800">
                  {[
                    "SAM.gov registration (for GPC transactions)",
                    "CAGE code or UEI/DUNS number",
                    "Past performance in CPARS",
                    "Formal proposal or quote document",
                    "Small business certification",
                    "Security clearance (for unclassified work)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <p className="font-bold text-rose-900">What you DO need</p>
                </div>
                <ul className="space-y-2 text-sm text-rose-800">
                  {[
                    "A product or service the agency actually needs",
                    "Ability to accept Visa or Mastercard",
                    "A relationship or visibility with the right cardholder",
                    "Capability to deliver at the micro-purchase price point",
                    "State/local business licenses where required by your trade",
                    "SAM.gov if the agency requests it or uses non-GPC payment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-rose-400 flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              This doesn&apos;t mean you should skip SAM registration. You absolutely should register &mdash;
              it&apos;s free, takes a few weeks, and is required for any contract above the MPT and for
              most non-GPC payment mechanisms. Once you have a SAM registration, a CAGE code, and a
              UEI, you can bid on contracts in the mandatory small business set-aside zone
              ($15,001&ndash;$350,000) and above. Read our{" "}
              <Link
                href="/blog/sam-registration-guide"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                SAM.gov registration guide
              </Link>{" "}
              if you haven&apos;t done that yet.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The SAM exception is important not as a reason to skip registration &mdash; but because it
              clarifies that the micro-purchase channel is genuinely frictionless. Companies that
              have been doing business for years but are new to federal contracting can test the
              government market with micro-purchase transactions before they&apos;ve completed the full
              registration and compliance stack. That&apos;s a real on-ramp that many advisors
              don&apos;t mention.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-lg mb-1">Find out what you&apos;re eligible for right now</p>
                <p className="text-emerald-100 text-sm">
                  Run the CapturePilot Quick Checker to see which certifications, set-asides, and
                  contract programs your business qualifies for. Free, no account required, takes
                  under 2 minutes.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors flex-shrink-0"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="560k-awards"
            number="05"
            title="560,000 Awards a Year: The Real Opportunity"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The FAR Council&apos;s October 2025 final rule on threshold adjustments included
              a striking data point: from FY2022 through FY2024, the federal government averaged
              more than 560,000 awards at or below the old $10,000 micro-purchase threshold
              per year, spread across approximately 18,000 separate companies. Had the new $15,000
              threshold applied during those years, roughly 50,000 additional awards would have
              qualified as micro-purchases.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              That&apos;s not a niche corner of the market. It&apos;s a massive, distributed, relatively
              low-barrier-to-entry purchasing channel. And because micro-purchases don&apos;t generate
              solicitation notices on SAM.gov, most of these transactions are invisible to
              contractors who rely solely on opportunity search.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 my-8 animate-on-scroll">
              <h3 className="font-black text-stone-900 text-lg mb-6">Why 560,000 Awards Doesn&apos;t Feel Like 560,000 Opportunities</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: BarChart3,
                    title: "They don't appear on SAM.gov",
                    desc: "Micro-purchases don't require posting a solicitation. No SAM.gov listing means no opportunity search result. You'll never find these through standard contract searching tools — you find them through relationships.",
                    color: "text-blue-600",
                  },
                  {
                    icon: Users,
                    title: "They're distributed across thousands of cardholders",
                    desc: "A single large agency might have hundreds of active GPC cardholders. Each has their own spending patterns, needs, and vendor preferences. Targeting 'the VA' or 'the Army' is too broad — you need to get in front of the specific people who buy what you sell.",
                    color: "text-emerald-600",
                  },
                  {
                    icon: Clock,
                    title: "They move fast and repeat",
                    desc: "A cardholder who buys training materials, office supplies, or technical services once will typically buy again from the same vendor if the experience was good. Micro-purchase relationships compound over time without additional marketing effort.",
                    color: "text-amber-600",
                  },
                  {
                    icon: Shield,
                    title: "Most don't generate CPARS records",
                    desc: "Past performance reporting (CPARS) is required for contracts above certain thresholds — not for micro-purchases. That means your track record at this level doesn't automatically translate to formal past performance credentials. Plan for that gap as you move up.",
                    color: "text-rose-600",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.color}`} />
                    <div>
                      <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The 560,000 annual figure doesn&apos;t tell you how much dollar volume moves through
              micro-purchases. If the average transaction were $8,000 (well below the prior $10K
              ceiling), that&apos;s $4.5 billion a year in invisible-to-SAM purchases. That&apos;s not the
              full story of federal contracting &mdash; it&apos;s a fraction of the $773 billion in total
              federal awards in FY2024 &mdash; but it&apos;s real money accessible through a completely
              different channel than traditional contract hunting.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For context on where micro-purchases fit in the broader federal spending picture,
              our{" "}
              <Link
                href="/blog/federal-spending-trends-2026"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                federal spending trends guide
              </Link>{" "}
              breaks down where the government is directing its contracting dollars by agency,
              category, and contract type.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Prohibited Practices: Splitting Purchases">
            Federal agencies are explicitly prohibited from splitting purchases to avoid competition
            thresholds. A $30,000 requirement cannot be broken into three $10,000 purchases to
            stay under the MPT. This is called &ldquo;splitting requirements&rdquo; and is a FAR
            violation. If you encounter an agency that routinely splits larger requirements into
            micro-purchases to avoid solicitations, that&apos;s a red flag &mdash; it may create legal
            exposure for the agency and shouldn&apos;t be treated as a reliable purchasing pattern.
            Legitimate micro-purchases are genuinely small, standalone requirements.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="getting-found"
            number="06"
            title="How to Get Found for Micro-Purchases"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Since micro-purchases don&apos;t go through SAM.gov searches, your standard federal
              marketing strategy &mdash; register in SAM, monitor opportunities, submit proposals &mdash;
              won&apos;t generate micro-purchase revenue on its own. You have to show up where
              cardholders look, which is a different set of places entirely.
            </p>

            <div className="space-y-0 mb-8">
              {[
                {
                  step: "01",
                  title: "Get on a GSA Schedule",
                  desc: "GSA Multiple Award Schedule (MAS) contractors are searchable in GSA Advantage and the GSA eLibrary — tools that GPC cardholders actively use to find vendors. All MAS contractors are required to accept the GPC for purchases under the MPT, which makes you instantly GPC-compliant. A Schedule contract doesn't guarantee micro-purchase business, but it puts you in the catalog cardholders browse.",
                  time: "6–12 month setup",
                  link: { href: "/blog/gsa-schedule-guide", label: "Read the GSA Schedule guide" },
                },
                {
                  step: "02",
                  title: "Attend agency small business events",
                  desc: "Most agencies host small business outreach events, industry days, and matchmaking sessions where GPC cardholders, program managers, and procurement staff attend. These are the direct introductions that turn into micro-purchase relationships. Ask specifically about recurring small-dollar needs in your capability area.",
                  time: "Ongoing BD activity",
                  link: null,
                },
                {
                  step: "03",
                  title: "Reach out to Small Business Offices (OSDBUs)",
                  desc: "Every federal agency above a certain size has an Office of Small and Disadvantaged Business Utilization (OSDBU). OSDBU staff can introduce you to program offices and cardholders with relevant needs. A 15-minute conversation with an OSDBU director can produce introductions that no SAM.gov search would have generated.",
                  time: "Quarterly outreach",
                  link: null,
                },
                {
                  step: "04",
                  title: "Build a strong capability statement",
                  desc: "When you do get in front of a program manager or cardholder, your capability statement is the leave-behind. A one-page document that clearly states what you do, who you've done it for, and how to reach you. Many micro-purchase relationships start with a capability statement exchanged at an industry day.",
                  time: "One-time creation, quarterly updates",
                  link: {
                    href: "/blog/capability-statement-examples",
                    label: "See capability statement examples",
                  },
                },
                {
                  step: "05",
                  title: "List on government vendor registries",
                  desc: "Beyond SAM.gov, agencies maintain internal vendor lists, preferred vendor directories, and approved source lists that cardholders use when shopping. Ask agencies you target what vendor registries they consult for micro-purchases. Getting on those lists is often as simple as filling out a form or sending an email to the right contact.",
                  time: "Per-agency research",
                  link: null,
                },
                {
                  step: "06",
                  title: "Monitor USASpending.gov for repeat buyers",
                  desc: "USASpending.gov captures award data for contracts above certain reporting thresholds, including many micro-purchases. Search your NAICS codes and product/service codes filtered by award dollar range. Find which agencies have historically purchased similar work in the $2K–$15K range. Those repeat buyers are your warmest outreach targets.",
                  time: "Monthly research habit",
                  link: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 animate-on-scroll">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    {i < 5 && <div className="w-px flex-1 bg-emerald-100 my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.desc}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                      >
                        {item.link.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The through-line in all six steps: you&apos;re building human relationships, not
              responding to notices. The business development motion for micro-purchases looks
              more like commercial sales than traditional government procurement. That&apos;s actually
              an advantage for small businesses &mdash; you&apos;re faster and more relationship-oriented
              than your large-business competition. Use that.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="gsa-schedule-angle"
            number="07"
            title="The GSA Schedule Micro-Purchase Angle"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A GSA Multiple Award Schedule (MAS) contract has a specific micro-purchase benefit
              that most Schedule contractors don&apos;t fully leverage: all MAS contractors are
              required by GSA to accept the government purchase card for orders at or below the
              micro-purchase threshold. That GPC acceptance requirement is automatic for Schedule
              holders &mdash; no additional setup needed.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Beyond the GPC requirement, GSA Advantage! &mdash; the government&apos;s online shopping
              portal &mdash; is actively used by GPC cardholders to browse and purchase items from
              Schedule contractors. Orders placed through GSA Advantage! below $15,000 can be
              completed in minutes: the cardholder adds items to a cart, enters their GPC number,
              and you receive an order. No quote, no solicitation, no CO review.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
              {[
                {
                  icon: Target,
                  title: "GSA Advantage! visibility",
                  desc: "Your Schedule pricelist is searchable by product/service code, NAICS, and keyword. Cardholders shopping for what you sell will find you without you actively prospecting them.",
                },
                {
                  icon: CreditCard,
                  title: "Mandatory GPC acceptance",
                  desc: "As a Schedule contractor, you're required to accept the purchase card at the MPT — which means no friction at payment time. Cardholders know Schedule vendors will take the card.",
                },
                {
                  icon: Building2,
                  title: "Simplified ordering under SAT",
                  desc: "Schedule orders between $15K and $350K use simplified ordering procedures with fewer competition requirements. Your Schedule opens the door at the micro-purchase level and stays useful all the way up to $350K.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-stone-200 bg-stone-50 hover-lift"
                >
                  <item.icon className="w-5 h-5 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-stone-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              A GSA Schedule isn&apos;t a micro-purchase strategy by itself &mdash; the Schedule application
              takes months, involves pricing negotiations, and requires ongoing compliance. But for
              businesses that plan to do meaningful federal revenue, a Schedule is one of the most
              efficient ways to generate both micro-purchase flow and compete for larger orders on
              the same contract vehicle.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our{" "}
              <Link
                href="/blog/gsa-schedule-guide"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                GSA Schedule guide
              </Link>{" "}
              covers whether a Schedule is right for your business, the application process, and
              how to use it effectively once you have it. The short answer: if you&apos;re in IT,
              professional services, facilities, staffing, or product supply with repeatable
              offerings, a Schedule is almost always worth pursuing.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-black text-lg text-stone-900 mb-1">
                  Track the opportunities above $15,000 in your NAICS codes
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Once you&apos;re ready to move beyond micro-purchases, CapturePilot surfaces the
                  mandatory small business set-aside contracts in your NAICS codes &mdash; filtered by
                  dollar range, agency, and set-aside type, matched to your profile.
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
            id="stepping-stone"
            number="08"
            title="Using Micro-Purchases to Build Your Federal Record"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Micro-purchases are not the destination. They&apos;re the entry ramp. A business that
              spends years collecting $8,000 to $14,000 GPC transactions without moving up the
              threshold ladder has built revenue but not a federal contracting business. The goal
              is to use micro-purchase relationships to generate the credentials, relationships,
              and operational track record that make you competitive for larger set-aside contracts.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s how to use the micro-purchase period strategically:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Document everything as project experience",
                  desc: "Even if micro-purchases don't generate formal CPARS records, they generate real project history. Document every government transaction: agency, scope, dollar value, outcome, point of contact. That history becomes the narrative for your capability statement and proposal past performance sections when you move into formal competitive bids.",
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  icon: FileText,
                },
                {
                  title: "Ask for reference letters, not just payment",
                  desc: "Government employees can write letters confirming that you performed work for their agency. These aren't official CPARS ratings, but a one-paragraph reference on agency letterhead from a program manager carries real weight in small business proposal evaluations, especially for contracts in the $50K–$350K range where past performance scrutiny is lighter than for large contracts.",
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                  icon: CheckCircle2,
                },
                {
                  title: "Use agency relationships to find solicited work",
                  desc: "Your micro-purchase clients know about upcoming requirements before they hit SAM.gov. A program manager who just spent $12,000 with you on a pilot project may have a $150,000 formal requirement in next year's budget. Ask. Sources Sought notices, pre-solicitation discussions, and draft RFP reviews all happen through relationships. Your micro-purchase foothold opens those conversations.",
                  color: "border-amber-200 bg-amber-50",
                  iconColor: "text-amber-600",
                  icon: Target,
                },
                {
                  title: "Register in SAM and get certifications while you're earning",
                  desc: "Don't wait for your first $100,000 contract to complete your federal infrastructure. Use the time you're generating micro-purchase revenue to register in SAM.gov, apply for any certifications you qualify for (SDVOSB, WOSB, 8(a), HUBZone), and build your past performance file. When the first real competitive bid hits your pipeline, you'll be ready.",
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                  icon: Shield,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-5 p-6 rounded-xl border-2 ${item.color} animate-on-scroll`}
                >
                  <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.iconColor}`} />
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The micro-purchase channel rewards persistence and relationship quality over
              proposal writing skill. That makes it an unusually good training ground for small
              businesses that are strong on delivery but still building their contracting mechanics.
              You learn what agencies actually need, how government buyers think, and what makes
              them comfortable awarding you repeat business &mdash; all before you have to write a
              formal technical volume or build a compliance matrix.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              When you do start bidding on formal solicitations above $15,000, those micro-purchase
              relationships become your competitive edge. You know the agency. You know the program
              manager. You&apos;ve already delivered. That incumbent-like position &mdash; even without being
              an official incumbent &mdash; changes how your proposal reads to evaluators.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For what comes next, read our guide to{" "}
              <Link
                href="/blog/how-to-find-government-contracts-small-business"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                finding government contracts for small business
              </Link>{" "}
              to understand the full landscape from micro-purchases through IDIQ vehicles. And use
              CapturePilot&apos;s{" "}
              <Link
                href="/features/matching"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                opportunity matching
              </Link>{" "}
              to start tracking the formal set-aside contracts in your NAICS codes as your
              micro-purchase pipeline matures.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Subcontracting as a Parallel Path">
            While you&apos;re building micro-purchase relationships, consider pursuing subcontracting
            opportunities with prime contractors who hold large government contracts. Subcontracting
            work above $750K typically requires the prime to have a small business subcontracting
            plan &mdash; which creates demand for subcontractors like you. Subcontracting generates real
            federal past performance (through contractor-reported data) and relationships with primes
            who may team with you on future bids. Our{" "}
            <Link href="/blog/subcontracting-government-contracts" className="underline font-medium">
              subcontracting guide
            </Link>{" "}
            covers how to get on prime contractor subcontractor databases and win your first
            subcontract award.
          </Callout>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="max-w-xl">
              <Zap className="w-8 h-8 text-emerald-400 mb-4" />
              <h2 className="text-2xl font-black mb-3">
                Ready to move beyond micro-purchases?
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                CapturePilot finds the mandatory small business set-aside contracts in your NAICS
                codes &mdash; the $15K to $350K band where your registration alone qualifies you to
                compete. Start your free trial and build a real pipeline on top of your
                micro-purchase foundation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-500 transition-colors"
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
                  href: "/blog/small-business-set-aside-threshold",
                  title: "Small Business Set-Aside Thresholds",
                  desc: "The full three-tier threshold framework: $15K, $350K, and the sole source limits by certification program.",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  title: "Finding Government Contracts",
                  desc: "The 2026 guide to locating and qualifying for federal opportunities beyond micro-purchases.",
                },
                {
                  href: "/blog/subcontracting-government-contracts",
                  title: "Subcontracting on Government Contracts",
                  desc: "A parallel path into federal revenue: how to win subcontract work while building your prime record.",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group block p-5 rounded-xl border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors hover-lift"
                >
                  <p className="font-bold text-stone-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-emerald-600 text-xs font-medium">
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
