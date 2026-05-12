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
  Info,
  Layers,
  XCircle,
  Building2,
  Users,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-gsa-schedule", label: "What a GSA Schedule Actually Is" },
  { id: "the-numbers", label: "The Numbers That Make the Case" },
  { id: "who-buys-on-schedule", label: "Who Buys on Schedule and What They Buy" },
  { id: "eligibility", label: "Eligibility: Can Your Business Apply?" },
  { id: "application-process", label: "The Application Process, Step by Step" },
  { id: "hidden-costs", label: "The Real Costs and Maintenance Burden" },
  { id: "winning-business", label: "How to Actually Win Business Once You're On" },
  { id: "should-you-get-one", label: "Should You Get a Schedule? A Decision Framework" },
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

export default function GsaScheduleGuidePage() {
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
            <span className="text-stone-900 font-medium">GSA Schedule Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            GSA Schedule Contracts:{" "}
            <span className="gradient-text">Is a GSA Schedule Right for Your Business?</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The GSA Multiple Award Schedule generated{" "}
            <strong className="text-stone-700">$50.6 billion in government purchases in FY2025</strong>.
            Small businesses claimed 35% of that — roughly $18.2 billion. But 60% of schedule
            holders report zero revenue in any given year. Here&apos;s how to tell if a GSA Schedule
            will actually move the needle for you.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 12, 2026</span>
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
            id="what-is-gsa-schedule"
            number="01"
            title="What a GSA Schedule Actually Is"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The GSA Multiple Award Schedule — people call it the GSA Schedule, the Federal Supply
              Schedule, or the MAS — is a long-term government-wide contract that lets federal agencies
              buy from pre-vetted vendors at pre-negotiated prices. You apply once, GSA reviews your
              pricing and qualifications, and if you&apos;re awarded, agencies across the entire
              federal government can buy from you directly. No full competition required for every
              purchase. No re-qualifying each time.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Think of it as a commercial catalog for the federal government. GSA vets the vendors
              and negotiates prices upfront. Agencies browse, compare, and order. The friction of
              full and open competition is largely replaced by a streamlined ordering process.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The contract itself lasts up to 20 years: a 5-year base period followed by three
              5-year option periods. That&apos;s a long time to build federal relationships and grow
              recurring revenue. No other contract vehicle offers that combination of longevity,
              accessibility, and government-wide reach.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$50.6B", label: "Total MAS sales, FY2025", icon: DollarSign },
                { stat: "20 yrs", label: "Maximum contract duration", icon: Clock },
                { stat: "14,579", label: "Active MAS contract holders", icon: Users },
                { stat: "300+", label: "Special item numbers (SINs)", icon: Layers },
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

            <p className="text-stone-600 leading-relaxed mb-4">
              A critical distinction: the GSA Schedule is a contract vehicle, not a contract award.
              Getting on the schedule doesn&apos;t guarantee you any orders. It means you&apos;re
              eligible to receive orders. You still have to market yourself, respond to requests for
              quotation on GSA eBuy, and compete against other schedule holders for task orders.
              Most businesses that treat the schedule as a passive revenue source are part of that
              60% with zero sales in a year.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The distinction matters before you spend months applying. A GSA Schedule is an
              investment in access, not a check in the mail.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="MAS vs. the Old Schedule System">
            Before 2020, GSA ran dozens of separate schedules by category — Schedule 70 for IT,
            Schedule 00CORP for professional services, etc. GSA consolidated all of them into a
            single Multiple Award Schedule (MAS) in 2020. If you&apos;re reading older guides that
            reference specific numbered schedules, they&apos;ve been replaced. Today there is one
            MAS contract with categories organized by Special Item Numbers (SINs).
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="the-numbers"
            number="02"
            title="The Numbers That Make the Case"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Raw conviction about GSA Schedules is useless without context. Here&apos;s what the
              data actually shows.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Small businesses hold roughly 22% of all federal contract dollars across the board.
              On the MAS, small businesses capture 36% of awards. That outsized share exists
              because the schedule makes it easier for contracting officers to find and buy from
              small businesses — the catalog structure surfaces them on equal footing with large
              contractors.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 my-8 animate-on-scroll">
              <h3 className="text-lg font-black text-stone-900 mb-6">GSA MAS Small Business Performance, FY2025</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-black text-blue-700">$18.2B</p>
                  <p className="text-sm text-stone-600 mt-1">Awarded to small businesses via MAS</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-blue-700">36%</p>
                  <p className="text-sm text-stone-600 mt-1">Share of MAS awards (vs. 22% overall federal)</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-black text-blue-700">3.6×</p>
                  <p className="text-sm text-stone-600 mt-1">More federal sales vs. SAM-only registrants</p>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The 3.6x multiplier deserves attention. Companies with a GSA Schedule average $1
              million in annual federal sales. Companies registered only in SAM.gov average
              $272,000. That&apos;s not because better companies get schedules — it&apos;s because
              having a schedule makes you visible to buyers who specifically search for MAS
              vendors. The catalog creates distribution that direct SAM registration doesn&apos;t
              replicate.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The counterweight: 60% of MAS holders report zero revenue in any given fiscal year.
              A schedule without a sales strategy is a dormant asset. The gap between the average
              and the median is enormous.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg font-semibold">Large Category</th>
                    <th className="text-right px-4 py-3 font-semibold">FY2025 Sales</th>
                    <th className="text-right px-4 py-3 font-semibold">Share of MAS</th>
                    <th className="text-right px-4 py-3 rounded-tr-lg font-semibold">SB Dominance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Information Technology", sales: "$27.3B", share: "46%", sb: "Competitive" },
                    { cat: "Professional Services", sales: "$12.2B", share: "24%", sb: "Competitive" },
                    { cat: "Facilities", sales: "~$3.5B", share: "~7%", sb: "50%+ small biz" },
                    { cat: "Transportation", sales: "~$2.1B", share: "~4%", sb: "50%+ small biz" },
                    { cat: "Industrial Products", sales: "~$1.8B", share: "~4%", sb: "50%+ small biz" },
                    { cat: "Office Management", sales: "~$1.2B", share: "~2%", sb: "Competitive" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="px-4 py-3 font-medium text-stone-900 border-b border-stone-100">{row.cat}</td>
                      <td className="px-4 py-3 text-right text-stone-600 border-b border-stone-100">{row.sales}</td>
                      <td className="px-4 py-3 text-right text-stone-600 border-b border-stone-100">{row.share}</td>
                      <td className="px-4 py-3 text-right border-b border-stone-100">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${row.sb.includes("50%") ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                          {row.sb}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-stone-400 mt-2">Source: GSA FAS Schedule Sales Query, FY2025. Facilities/Transportation/Industrial estimates based on reported category data.</p>
            </div>

            <p className="text-stone-600 leading-relaxed">
              IT Professional Services alone — a single SIN (54151S) — generated $13.1 billion in
              FY2025. If your business does IT staffing, development, cybersecurity, or systems
              integration, the MAS is the primary channel federal buyers use to procure it.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Does your business qualify for set-aside task orders?</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  GSA Schedule holders can compete for small business set-aside task orders worth
                  far more than open competition. Check which certifications you hold and which
                  ones are worth pursuing.
                </p>
                <Link
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="who-buys-on-schedule"
            number="03"
            title="Who Buys on Schedule and What They Buy"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Every civilian and defense agency can use the MAS. In practice, the heaviest users
              are the agencies with the largest routine purchasing needs and the fewest specialized
              contract vehicles.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              DoD components are among the largest MAS buyers — despite having their own acquisition
              ecosystem, they use the schedule for commercial items, IT products, and professional
              services where speed and simplicity matter more than custom contract structures. The
              VA is a massive schedule buyer, particularly for medical supplies, IT, and facilities
              management. Civilian agencies like DHS, HHS, Treasury, and Justice use MAS for
              everything from office furniture to cybersecurity services.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  agency: "Department of Defense (DoD)",
                  focus: "IT products, professional services, facilities, commercial items",
                  icon: Shield,
                  color: "blue",
                },
                {
                  agency: "Department of Veterans Affairs (VA)",
                  focus: "Medical supplies, IT modernization, facilities O&M, security services",
                  icon: Award,
                  color: "emerald",
                },
                {
                  agency: "Department of Homeland Security (DHS)",
                  focus: "Cybersecurity, IT infrastructure, staffing, logistics",
                  icon: Shield,
                  color: "amber",
                },
                {
                  agency: "Civilian Executive Agencies",
                  focus: "Office management, professional services, training, IT",
                  icon: Building2,
                  color: "sky",
                },
              ].map((item, i) => {
                const borderColors: Record<string, string> = {
                  blue: "border-l-blue-500",
                  emerald: "border-l-emerald-500",
                  amber: "border-l-amber-500",
                  sky: "border-l-sky-500",
                };
                return (
                  <div
                    key={i}
                    className={`bg-stone-50 border border-stone-200 border-l-4 ${borderColors[item.color]} rounded-xl p-5 animate-on-scroll`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-stone-900 text-sm">{item.agency}</p>
                    </div>
                    <p className="text-sm text-stone-600">{item.focus}</p>
                  </div>
                );
              })}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              How agencies actually find schedule vendors: most use GSA Advantage (the online
              shopping platform), GSA eBuy (where they post RFQs), and direct outreach to vendors
              they&apos;ve already identified through market research. That last channel — direct
              outreach — is where strong marketing pays off. Contracting officers who know your
              name before an opportunity posts will shortlist you before others even see the RFQ.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Agencies can also establish Blanket Purchase Agreements (BPAs) under the MAS. A
              BPA locks in a preferred vendor for recurring needs, which can mean predictable
              revenue without competing on every order. Landing a BPA is a major milestone for
              any MAS holder.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="GSA eBuy Is Your Order Flow">
            Once you have a schedule, GSA eBuy is where most of your competitive opportunities will
            appear. Agencies post Requests for Quotation (RFQs) exclusively to schedule holders in
            relevant SINs. Set up eBuy notifications for your SINs and check it daily — many RFQs
            have short response windows, and vendors who respond quickly and thoroughly win
            disproportionately.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="eligibility"
            number="04"
            title="Eligibility: Can Your Business Apply?"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              GSA has straightforward eligibility requirements. Most are easy to verify before
              you start the application. The one that trips businesses up most often is the
              commercial sales history requirement.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  req: "Active SAM.gov Registration",
                  detail: "Must be current before you can submit an offer. If you're not registered, that's your first step.",
                  pass: true,
                },
                {
                  req: "2+ Years in Business",
                  detail: "You need at least two years of operating history, backed by financial statements for both years.",
                  pass: true,
                },
                {
                  req: "$25,000+ Annual Revenue (Each of Past 2 Years)",
                  detail: "Not a high bar — but startups and very new businesses with thin revenue can be rejected.",
                  pass: true,
                },
                {
                  req: "Products or Services in a GSA SIN",
                  detail: "Your offerings must map to a Special Item Number. Most commercial products and services do.",
                  pass: true,
                },
                {
                  req: "Financial Responsibility",
                  detail: "GSA reviews your financial stability. Tax liens, open judgments, or serious cash flow problems can derail approval.",
                  pass: true,
                },
                {
                  req: "Competitive Pricing",
                  detail: "Your commercial price list must be consistent with what you charge your best commercial customers. GSA negotiates from there.",
                  pass: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-stone-200 rounded-xl p-5 animate-on-scroll"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm mb-1">{item.req}</p>
                      <p className="text-xs text-stone-500 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One requirement that doesn&apos;t appear on the checklist but matters enormously:
              your price list needs to be defensible. GSA contracting officers compare what
              you&apos;re offering the government against your commercial rates. If your pricing
              looks inconsistent or inflated relative to your commercial sales, expect multiple
              rounds of negotiation and possible rejection.
            </p>
            <p className="text-stone-600 leading-relaxed">
              After award, you&apos;re required to generate at least $100,000 in MAS sales over the
              first five years. Miss that threshold and GSA can cancel your contract. It sounds easy,
              but for vendors who pursue the schedule passively, it&apos;s a real risk.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="The Two-Year Rule Catches Startups">
            If your company is under two years old, you&apos;re not eligible. There&apos;s no
            waiver, no workaround. The right path for startups and new businesses is usually to
            pursue set-aside contracts directly through SAM.gov, build your past performance,
            and apply for the schedule once you hit the eligibility window. Use{" "}
            <Link href="/features/matching" className="underline font-medium">
              CapturePilot&apos;s matching tools
            </Link>{" "}
            to find contracts you can win in the meantime.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="application-process"
            number="05"
            title="The Application Process, Step by Step"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Plan for three to six months from first submission to contract award. Complex offers
              or heavily negotiated pricing can push that to twelve months. Here is the full
              sequence.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Identify Your SIN(s)",
                  desc: "Map your products and services to the relevant Special Item Numbers. Choosing the wrong SIN means your offer goes to the wrong contracting team — a common and costly mistake. GSA's SIN lookup tool on gsa.gov is the authoritative reference.",
                },
                {
                  step: "02",
                  title: "Complete Pathways to Success Training",
                  desc: "GSA requires this ~3-4 hour online training before you submit. It covers MAS program rules, reporting obligations, and what contracting officers expect. You must acknowledge completion in eOffer within the past year.",
                },
                {
                  step: "03",
                  title: "Gather Your Documents",
                  desc: "You'll need two years of audited financial statements or tax returns, your commercial price list (the Most Favored Customer pricing you offer your best commercial buyers), past performance references, and business licenses or registration documents.",
                },
                {
                  step: "04",
                  title: "Submit Your Offer via eOffer",
                  desc: "GSA's eOffer system is where everything goes. You'll submit a cover letter explaining why GSA should award you a schedule, your commercial price list, technical capabilities documentation, and all required certifications.",
                },
                {
                  step: "05",
                  title: "Negotiate With Your Contracting Officer",
                  desc: "A GSA contracting officer reviews your offer and typically comes back with pricing questions or requests for supporting documentation. This is normal. Budget time to respond quickly — slow responses extend the timeline.",
                },
                {
                  step: "06",
                  title: "Receive Award and Activate",
                  desc: "Once GSA issues your contract, you need to upload your approved price list to GSA Advantage, set up your sales reporting through FAS SRP, and start working GSA eBuy for opportunities. The contract is live — now the real work starts.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 animate-on-scroll">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-stone-50 rounded-xl border border-stone-200 p-5">
                    <p className="font-bold text-stone-900 mb-1 text-sm">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The biggest single cause of delays: incomplete or inconsistent pricing documentation.
              GSA contracting officers need to verify that your schedule prices are at or below
              what you charge your best commercial customers. If your submitted price list
              doesn&apos;t clearly establish that baseline, expect multiple rounds of questions.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Some businesses hire a consultant to manage the application. Consultants typically
              charge $3,000–$15,000 for initial application support. That&apos;s a reasonable
              investment for businesses without internal capture staff, but it&apos;s also money
              you&apos;ll need to factor into your break-even math.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="hidden-costs"
            number="06"
            title="The Real Costs and Maintenance Burden"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The GSA Schedule has no application fee and no annual fee. But maintaining compliance
              is not free. Businesses that treat it as a set-and-forget contract get into trouble.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The direct cost you can calculate is the Industrial Funding Fee (IFF): 0.75% of all
              sales reported under your MAS contract. Every dollar of GSA revenue you generate,
              $7.50 goes back to GSA. The fee is built into your pricing — you report it as part
              of your transactional data — but it affects your price competitiveness if you
              haven&apos;t accounted for it.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Cost Item</th>
                    <th className="text-right px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Typical Range</th>
                    <th className="text-left px-4 py-3 font-semibold text-stone-700 border-b border-stone-200">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Initial Application (DIY)", range: "$0–$500", note: "Your time is the main cost" },
                    { item: "Initial Application (Consultant)", range: "$3,000–$15,000", note: "Typical for first-time applicants" },
                    { item: "Industrial Funding Fee (IFF)", range: "0.75% of sales", note: "Paid quarterly, built into your prices" },
                    { item: "Annual SAM.gov Renewal", range: "$0 (time only)", note: "Required annually or contract lapses" },
                    { item: "Ongoing Compliance Support", range: "$15,000–$30,000/yr", note: "For businesses using outside help" },
                    { item: "Price List Modifications (mods)", range: "$500–$3,000/mod", note: "Needed when prices change" },
                    { item: "Mass Modification Response", range: "$200–$1,000 each", note: "GSA pushes periodic contract updates" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-900 border-b border-stone-100">{row.item}</td>
                      <td className="px-4 py-3 text-right text-stone-600 border-b border-stone-100 font-mono text-xs">{row.range}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs border-b border-stone-100">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The maintenance burden is significant even for businesses that manage it internally.
              You need to submit quarterly sales reports through GSA&apos;s FAS SRP portal — even
              in quarters with zero sales. You must respond to mass modifications when GSA pushes
              contract updates. You&apos;re required to maintain your GSA Advantage price list
              with current, accurate information. And your SAM.gov registration must stay active
              or your contract lapses automatically.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For businesses generating consistent MAS revenue, these costs are trivial. For
              businesses struggling to hit $100,000 in five years, they&apos;re real overhead on
              an underperforming asset. Know which situation you&apos;re in before you commit.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="rose" title="Don't Ignore Mass Modifications">
            GSA periodically issues &ldquo;mass modifications&rdquo; — changes to standard
            contract terms that all schedule holders must accept or reject. Missing a mass mod
            response window can put your contract in jeopardy. Set a calendar reminder to check
            your eMod inbox monthly. This is one of the compliance failures that catches
            distracted schedule holders off guard.
          </Callout>

          {/* CTA 2 */}
          <div className="bg-stone-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Track your pipeline before and after getting on schedule</h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Most businesses that fail with a GSA Schedule do so because they have no system
                  for tracking eBuy opportunities, monitoring their SINs, or following up with
                  agencies. CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-amber-400 underline">
                    pipeline management tools
                  </Link>{" "}
                  keep you on top of every opportunity from discovery to award.
                </p>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-amber-400 text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-300 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="winning-business"
            number="07"
            title="How to Actually Win Business Once You're On"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Having a schedule and generating revenue from a schedule are very different things.
              The vendors who generate consistent MAS revenue do a handful of things that the
              passive majority doesn&apos;t.
            </p>

            <div className="space-y-6 mb-8">
              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">1</span>
                  Work GSA eBuy like a full-time job
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  GSA eBuy posts RFQs exclusively to schedule holders in matching SINs. Most RFQs
                  get three to ten responses — a much smaller field than open competition. Vendors
                  who monitor eBuy daily, respond to every relevant RFQ, and tailor their quotes
                  to the specific requirement win at a much higher rate than those who respond
                  selectively. Set eBuy email notifications for every SIN where you hold awards.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">2</span>
                  Market your schedule number directly to agencies
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  Your schedule number is a selling tool. When you reach out to agency small
                  business offices or contracting officers, leading with your contract number
                  removes their procurement friction immediately — they can buy from you without
                  a new acquisition cycle. Include your schedule number on your{" "}
                  <Link href="/features/capability-statement" className="text-blue-600 underline">
                    capability statement
                  </Link>
                  , in your email signature, and on your website.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">3</span>
                  Pursue Blanket Purchase Agreements aggressively
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  A BPA under your MAS contract locks you in as the preferred vendor for an
                  agency&apos;s recurring requirement. BPAs can run for five years and generate
                  predictable revenue without competitive quotes on every order. Identify two or
                  three agencies that buy your service category heavily and pitch them on a BPA
                  early in the relationship.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">4</span>
                  Use set-aside task orders to outcompete large businesses
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  Agencies can restrict MAS task orders to specific small business categories —
                  SDVOSB, WOSB, 8(a), HUBZone. If you hold any of these certifications, task
                  orders restricted to your category face dramatically less competition. A
                  SDVOSB-restricted eBuy RFQ might receive two responses. An unrestricted one
                  might receive twenty. Use your{" "}
                  <Link href="/features/matching" className="text-blue-600 underline">
                    certifications to filter your pipeline
                  </Link>{" "}
                  toward your highest-win-rate opportunities.
                </p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-base font-black text-stone-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">5</span>
                  Keep your GSA Advantage listing competitive
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm ml-8">
                  Agencies shopping GSA Advantage filter by price, delivery time, reviews, and
                  availability. If your price list is stale, your descriptions are thin, or your
                  photos are missing, you lose visibility before the buyer ever contacts you. Treat
                  your GSA Advantage presence like an e-commerce storefront — it needs regular
                  maintenance to perform.
                </p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              The common thread: MAS success is a marketing and sales function, not an
              administrative one. The businesses that generate serious GSA revenue invest in
              business development the same way they would in the commercial market. The schedule
              creates the access. You have to create the sales.
            </p>
          </div>

          <Callout icon={Star} color="sky" title="The Single Largest GSA SIN: IT Professional Services (54151S)">
            IT Professional Services generated $13.1 billion in FY2025 — the largest single SIN
            on the entire MAS. If your business provides software development, cybersecurity,
            data analytics, IT consulting, or systems integration, this SIN represents the
            biggest single market opportunity in federal contracting. Competition is heavy, but
            small businesses with a strong past performance record and a specific technical
            niche win here consistently. Learn how to build that record in our guide to{" "}
            <Link href="/blog/past-performance-government-contracts" className="underline font-medium">
              past performance in government contracts
            </Link>
            .
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="should-you-get-one"
            number="08"
            title="Should You Get a Schedule? A Decision Framework"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A GSA Schedule is worth pursuing if — and only if — the agencies you want to sell
              to actually use the MAS to buy what you sell. Start there, not with the abstract
              appeal of a 20-year government contract.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here are the honest questions to work through before you apply.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="animate-on-scroll">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-black text-emerald-900 text-sm">A GSA Schedule Makes Sense If...</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-emerald-800">
                    {[
                      "Your target agencies use MAS to buy your service category",
                      "You already have 2+ years of operating history and $25K+ annual revenue",
                      "You can invest time in eBuy monitoring and proposal responses",
                      "You sell commercial off-the-shelf products with defined pricing",
                      "You hold a small business certification (SDVOSB, WOSB, 8(a), HUBZone)",
                      "You have capacity to respond to 5-10 RFQs per month",
                      "You want to build recurring agency relationships and BPAs",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="animate-on-scroll">
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <h3 className="font-black text-rose-900 text-sm">Skip It For Now If...</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-rose-800">
                    {[
                      "Your business is under 2 years old",
                      "Your target agencies primarily use other vehicles (GWAC, IDIQ, open market)",
                      "You can't commit consistent business development time to eBuy",
                      "Your commercial pricing is inconsistent or hard to document",
                      "You expect the schedule to generate passive revenue without active selling",
                      "You're still building your past performance record",
                      "Your offering is highly customized with no defined commercial price list",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The highest-value thing you can do before deciding is research how your target
              agencies actually procure your service category. Pull spending data on USASpending.gov
              and filter for your NAICS codes and target agencies. If most of the awards flow
              through GWAC vehicles like OASIS+, SEWP, or CIO-SP3, a standalone GSA Schedule may
              not give you the access you need.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              On the other hand, if you see consistent MAS spending in your category at the
              agencies you target, the path is clear. Get the schedule, build your eBuy presence,
              and start competing.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For businesses that qualify but aren&apos;t ready for the full MAS commitment,
              two alternative approaches often generate faster results:
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  title: "Subcontract under an existing MAS holder",
                  desc: "Find a prime contractor on the schedule and work as their sub on task orders. You get the experience and past performance without the administrative overhead. This path often leads to your own schedule application after 2-3 years.",
                  link: "/blog/subcontracting-government-contracts",
                  linkText: "Read our subcontracting guide",
                },
                {
                  title: "Compete directly on open market set-asides",
                  desc: "Contracts under $350K are mandatory small business set-asides regardless of whether they use the schedule. There is a large and accessible market of contracts you can win directly through SAM.gov without a GSA Schedule.",
                  link: "/blog/small-business-set-aside-threshold",
                  linkText: "See the threshold guide",
                },
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 border border-stone-200 rounded-xl p-5 animate-on-scroll">
                  <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.desc}</p>
                  <Link href={item.link} className="text-blue-600 text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    {item.linkText} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The GSA Schedule is a powerful tool for the right business at the right stage.
              The $18.2 billion in small business MAS awards in FY2025 is real money flowing to
              real businesses. But it flows to businesses that actively pursue it — not to the
              60% of schedule holders sitting on dormant contracts.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If your research confirms that your target buyers use the MAS and you&apos;re ready
              to put in the business development work, the application is worth the investment.
              If not, there are faster paths to your first federal contract. Pair the{" "}
              <Link href="/features/intelligence" className="text-blue-600 underline">
                market intelligence
              </Link>{" "}
              you gather with a clear strategy — and you&apos;ll know which path is yours.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mt-12 text-white animate-on-scroll">
            <div className="text-center max-w-xl mx-auto">
              <Award className="w-10 h-10 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">Ready to build your federal pipeline?</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Whether you&apos;re pursuing a GSA Schedule or competing directly on set-aside
                contracts, CapturePilot helps you find the right opportunities, track your pipeline,
                and write proposals that win. Book a strategy call with our team to get a plan
                built around your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 bg-opacity-40 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-opacity-60 transition-colors border border-blue-400"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-stone-200">
            <h3 className="text-lg font-black text-stone-900 mb-6">Keep Reading</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: "IDIQ Contracts Explained: How to Get on a Multi-Year Contract Vehicle",
                  href: "/blog/idiq-contracts-explained",
                  cat: "Contract Vehicles",
                },
                {
                  title: "Federal Contract Types: FFP, T&M, IDIQ, and Which to Pursue",
                  href: "/blog/federal-contract-types-explained",
                  cat: "Getting Started",
                },
                {
                  title: "Past Performance: Why It Matters and How to Build It",
                  href: "/blog/past-performance-government-contracts",
                  cat: "Proposals",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group border border-stone-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xs font-medium text-blue-600 mb-2 block">{post.cat}</span>
                  <p className="text-sm font-bold text-stone-900 group-hover:text-blue-700 leading-snug transition-colors">
                    {post.title}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-blue-600 text-xs font-medium">
                    Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
