"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  DollarSign,
  Shield,
  FileText,
  Users,
  Clock,
  Award,
  TrendingUp,
  Building2,
  XCircle,
  HardHat,
  Zap,
  BarChart3,
  Lock,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-bonds", label: "Why the Government Requires Surety Bonds" },
  { id: "three-types", label: "The Three Types of Bonds on Federal Contracts" },
  { id: "miller-act", label: "The Miller Act: The Threshold That Changes Everything" },
  { id: "sba-program", label: "The SBA Surety Bond Guarantee Program" },
  { id: "three-cs", label: "How Underwriters Evaluate Your Business" },
  { id: "bond-cost", label: "What Surety Bonds Actually Cost" },
  { id: "finding-agent", label: "Finding a Surety Agent and Getting Pre-Qualified" },
  { id: "step-by-step", label: "Your Step-by-Step Path to Getting Bonded" },
  { id: "mistakes", label: "Bonding Mistakes That Kill Contract Awards" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
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

export default function SuretyBondGovernmentContractPage() {
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
            <span className="text-stone-900 font-medium">
              Surety Bonds for Government Contractors
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <HardHat className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Surety Bonds for Government Contractors:{" "}
            <span className="gradient-text">How to Get Bonded and Win Construction Work</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Federal construction is one of the most reliable revenue streams in government
            contracting — but it comes with a hard prerequisite most newcomers discover
            too late. The Miller Act requires{" "}
            <strong className="text-stone-700">
              performance and payment bonds on virtually every federal construction contract
              over $150,000
            </strong>
            . No bond, no contract — even if you won the award. This guide explains exactly
            how the bonding system works, what it costs, and how to get qualified.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 1, 2026</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 px-6 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            {
              label: "Miller Act threshold",
              value: "$150K",
              sub: "bonding mandatory above this amount",
            },
            {
              label: "Bond amounts required",
              value: "100%",
              sub: "of contract value for performance + payment",
            },
            {
              label: "SBA SBG program record",
              value: "$10.6B",
              sub: "in FY2025 bond guarantees — a program record",
            },
            {
              label: "Typical bond premium",
              value: "1–3%",
              sub: "of contract value for established contractors",
            },
          ].map((s) => (
            <div key={s.label} className="text-center animate-on-scroll">
              <div className="text-3xl font-black text-blue-600 mb-1">{s.value}</div>
              <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide mb-0.5">
                {s.label}
              </div>
              <div className="text-xs text-stone-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Table of Contents */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mb-12 animate-on-scroll">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-stone-500" />
            <p className="font-bold text-stone-700 text-sm">In This Guide</p>
          </div>
          <ol className="space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-3 text-sm text-stone-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="text-stone-400 font-mono text-xs mt-0.5 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:underline">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <article ref={articleRef} className="prose-none text-stone-700 leading-relaxed">

          {/* Section 1 */}
          <SectionHeading id="why-bonds" number="01" title="Why the Government Requires Surety Bonds" />

          <div className="animate-on-scroll">
            <p className="mb-4">
              On a private construction project, an unpaid subcontractor can file a mechanic&apos;s
              lien against the property. That lien clouds the title, blocks refinancing, and
              creates real financial pressure on the owner to resolve the dispute. It works
              because property rights give subs leverage.
            </p>
            <p className="mb-4">
              On federal projects, that mechanism doesn&apos;t exist. You cannot lien a
              government building. Congress recognized this asymmetry in 1935 and passed the
              Miller Act to fill the gap — requiring contractors to purchase bonds that
              substitute for the lien remedy.
            </p>
            <p className="mb-6">
              The bond system serves two separate constituencies. Performance bonds protect the
              government: if you default, the surety steps in to complete the project or
              compensates the agency for losses. Payment bonds protect subcontractors and
              material suppliers: if you don&apos;t pay them, they can make a claim directly against
              the bond. Both protections run on the same contract.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="Why this matters for you">
            Surety bonds are not just a compliance checkbox. A strong surety relationship is a
            competitive signal. When agencies see that a national Treasury-listed surety has
            underwritten your bonding capacity, it validates your financial stability, your track
            record, and your ability to complete the work — all things evaluators care about
            deeply on federal construction bids.
          </Callout>

          <div className="animate-on-scroll">
            <p className="mb-4">
              Beyond the legal requirement, bonding capacity is a practical ceiling on the
              contracts you can pursue. A surety will pre-qualify you for a maximum single-project
              bond and a maximum aggregate (total work in progress). Those limits define your
              addressable market as a federal construction contractor.
            </p>
            <p className="mb-6">
              Only about <strong>23% of small contracting firms</strong> have obtained surety bonds
              according to GAO data — which means 77% are locked out of all federal construction
              work above the micro-purchase threshold. If you get bonded while most of your
              competition hasn&apos;t, you&apos;re competing against a far smaller field.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading id="three-types" number="02" title="The Three Types of Bonds on Federal Contracts" />

          <div className="animate-on-scroll">
            <p className="mb-6">
              Federal construction uses three distinct bond types, each serving a different
              protective purpose at a different stage of the contract life cycle.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Shield,
                  name: "Bid Bond",
                  form: "Standard Form SF-24",
                  amount: "20% of the bid price (up to $3 million maximum)",
                  purpose:
                    "Guarantees that if you win the award, you will actually enter into the contract and furnish the required performance and payment bonds. Submitted with your bid. If you win and then refuse to sign the contract, the surety pays the difference between your price and the next-lowest bid.",
                  timing: "Submitted with your bid — no bid bond means automatic rejection",
                  color: "border-blue-400",
                  iconColor: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  icon: Award,
                  name: "Performance Bond",
                  form: "Standard Form SF-25",
                  amount: "100% of the contract price",
                  purpose:
                    "Guarantees that you will complete the project in accordance with the contract specifications and schedule. If you default, the surety must step in to complete the work — either by financing completion by you, hiring another contractor, or paying the government's cost to complete.",
                  timing: "Must be furnished before issuance of the Notice to Proceed (NTP)",
                  color: "border-emerald-400",
                  iconColor: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: Users,
                  name: "Payment Bond",
                  form: "Standard Form SF-25A",
                  amount: "100% of the contract price",
                  purpose:
                    "Protects subcontractors and material suppliers who supply labor or materials to the project but have no direct contract with the federal agency. Since they cannot lien federal property, the payment bond is their only remedy if you don&apos;t pay. Subs have up to one year from project completion to make a claim.",
                  timing: "Must be furnished before issuance of the Notice to Proceed (NTP)",
                  color: "border-amber-400",
                  iconColor: "text-amber-600",
                  bg: "bg-amber-50",
                },
              ].map((bond) => (
                <div
                  key={bond.name}
                  className={`rounded-2xl border-l-4 ${bond.color} border border-stone-200 p-6 ${bond.bg}`}
                >
                  <div className="flex items-start gap-4">
                    <bond.icon className={`w-6 h-6 ${bond.iconColor} shrink-0 mt-0.5`} />
                    <div className="flex-1">
                      <h3 className="font-black text-stone-900 text-lg mb-1">{bond.name}</h3>
                      <div className="flex flex-wrap gap-4 text-xs text-stone-500 mb-3">
                        <span>Form: <strong className="text-stone-700">{bond.form}</strong></span>
                        <span>Amount: <strong className="text-stone-700">{bond.amount}</strong></span>
                      </div>
                      <p className="text-sm text-stone-700 mb-2">{bond.purpose}</p>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{bond.timing}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="The T-List requirement">
              Not just any surety company will do. For Miller Act bonds on federal construction
              contracts, the surety must appear on the{" "}
              <strong>Treasury Department&apos;s Circular 570</strong> — known as the &quot;T-List.&quot; The
              Bureau of the Fiscal Service updates this list annually on July 1. Each listed surety
              has a maximum underwriting limit (called the &quot;underwriting limitation&quot;) per bond.
              If a bond exceeds that limit, the surety must co-bond with another T-List company.
              Check fiscal.treasury.gov before finalizing your surety relationship.
            </Callout>

            <p className="mb-4">
              One important August 2025 update: a FAR change (FAR 28.106-6, effective August 7,
              2025) now requires contracting officers to promptly provide subcontractors and
              suppliers with payment bond information — including the surety&apos;s name and address,
              the bond&apos;s face amount, and a copy of the bond — upon oral or written request. If
              you&apos;re a sub evaluating whether to take on a federal job, you can now verify that
              a payment bond actually exists before you mobilize.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading id="miller-act" number="03" title="The Miller Act: The Threshold That Changes Everything" />

          <div className="animate-on-scroll">
            <p className="mb-4">
              The Miller Act (40 U.S.C. §§ 3131–3134) governs bonding on federal construction
              projects. The statute itself uses a $100,000 threshold, but FAR 28.102-1 — the
              operative regulation agencies actually apply — sets the practical threshold at{" "}
              <strong>$150,000</strong>. That is the number you need to know.
            </p>
            <p className="mb-6">
              The $150,000 level has been in place since October 1, 2010. The National Association
              of Surety Bond Producers (NASBP) is actively lobbying Congress to exempt the Miller
              Act from the inflation-indexing mechanism that governs other FAR thresholds — meaning
              this number could increase in future regulatory cycles. For now, $150,000 is the line.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Contract Value</th>
                    <th className="text-left px-4 py-3 font-semibold">Bonding Requirement</th>
                    <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Practical Implication</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      range: "Under $35,000",
                      req: "No bonding required",
                      impl: "Most accessible entry point. Micro-purchase and simplified acquisition awards in this range are common for repair and maintenance work.",
                      bg: "bg-emerald-50",
                    },
                    {
                      range: "$35,000 – $150,000",
                      req: "Contracting officer discretion — alternative payment protection may be required",
                      impl: "Common alternatives include irrevocable letters of credit, a Treasury-listed surety, or a cash deposit. Read the solicitation carefully.",
                      bg: "bg-amber-50",
                    },
                    {
                      range: "Over $150,000",
                      req: "Performance bond (100% of contract) + Payment bond (100% of contract) — MANDATORY",
                      impl: "Both bonds must be from a T-List surety and must be furnished before Notice to Proceed. No exceptions.",
                      bg: "bg-red-50",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={`${row.bg} border-b border-stone-200`}>
                      <td className="px-4 py-3 font-semibold text-stone-900">{row.range}</td>
                      <td className="px-4 py-3 text-stone-700">{row.req}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{row.impl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mb-4">
              Bid bonds kick in even before the contract threshold matters. If a solicitation
              requires a bid bond (which virtually all Miller Act solicitations do), you submit
              the SF-24 with your bid. The bid bond amount is typically{" "}
              <strong>20% of your bid price</strong>, capped at $3 million. A missing or
              deficient bid bond results in automatic rejection of your bid — not an opportunity
              to cure.
            </p>
            <p className="mb-6">
              The Miller Act also has a limitations period: subcontractors and suppliers have{" "}
              <strong>one year from the date of final settlement of the contract</strong> to file
              a claim on the payment bond. That is the outer limit — individual bond forms may
              specify shorter notice periods. Subs must have furnished labor or materials for
              at least 90 days and must give you 90 days&apos; written notice before filing a claim
              if they have no direct contractual relationship with you.
            </p>
          </div>

          <Callout icon={Zap} color="sky" title="The bid bond trap">
            Many new contractors discover they need bonding during the bid phase — not at award.
            If your surety relationship isn&apos;t established before a solicitation closes, you cannot
            submit a compliant bid. Sureties need time to underwrite your account: financial
            statement review, credit check, character evaluation. Plan for a 2-to-4-week lead time
            at minimum. For your first bond, it can take longer.
          </Callout>

          {/* Section 4 */}
          <SectionHeading id="sba-program" number="04" title="The SBA Surety Bond Guarantee Program" />

          <div className="animate-on-scroll">
            <p className="mb-4">
              The SBA Surety Bond Guarantee (SBG) Program exists because the commercial surety
              market frequently turns away small and emerging contractors — not because they are
              bad businesses, but because surety underwriting is conservative and financial
              documentation requirements are demanding. The SBA fills that gap.
            </p>
            <p className="mb-6">
              The mechanics: the SBA doesn&apos;t write the bond itself. Instead, it guarantees a
              percentage of the surety company&apos;s loss if you default. That guarantee — up to{" "}
              <strong>90% of the surety&apos;s loss</strong> — gives participating surety companies
              the confidence to bond contractors who would otherwise be declined.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: DollarSign,
                  label: "Standard contract limit",
                  value: "$9 million",
                  detail:
                    "Maximum contract value the SBA will guarantee for most projects — federal, state, local, and private.",
                  color: "border-blue-400 bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Building2,
                  label: "Federal contract limit",
                  value: "$14 million",
                  detail:
                    "For federal contracts with a contracting officer certification, the limit rises to $14M. Reflects 2024 SBA rulemaking.",
                  color: "border-emerald-400 bg-emerald-50",
                  iconColor: "text-emerald-600",
                },
                {
                  icon: Shield,
                  label: "SBA guarantee percentage",
                  value: "80–90%",
                  detail:
                    "SBA guarantees this share of the surety&apos;s loss on a default, making it economically viable for sureties to take the risk.",
                  color: "border-violet-400 bg-violet-50",
                  iconColor: "text-violet-600",
                },
                {
                  icon: TrendingUp,
                  label: "FY2025 program volume",
                  value: "$10.6B",
                  detail:
                    "Record-breaking year for the program: $10.6B in bond guarantees supporting 2,200+ small businesses, up 15% from FY2024.",
                  color: "border-amber-400 bg-amber-50",
                  iconColor: "text-amber-600",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border-l-4 border ${card.color} p-5`}
                >
                  <card.icon className={`w-6 h-6 ${card.iconColor} mb-2`} />
                  <div className="text-xs text-stone-500 font-semibold uppercase tracking-wide mb-1">
                    {card.label}
                  </div>
                  <div className="text-2xl font-black text-stone-900 mb-1">{card.value}</div>
                  <p className="text-xs text-stone-600">{card.detail}</p>
                </div>
              ))}
            </div>

            <p className="mb-4">
              <strong>Who qualifies:</strong> You must be a small business under SBA size
              standards for your primary NAICS code. For general contractors (NAICS 236), that
              means average annual revenues under approximately $39.5 million. For most specialty
              trade contractors (NAICS 238), it ranges from roughly $16.5 million to $19 million
              depending on the specific code. You do not need to have been formally rejected by a
              commercial surety — the program is available to any qualifying small business that
              faces difficulty accessing commercial bonding.
            </p>

            <p className="mb-4">
              <strong>What it covers:</strong> Bid bonds, performance bonds, payment bonds, and
              some timber bonds. The program applies to federal, state, local, and private contracts —
              not just federal work.
            </p>

            <p className="mb-6">
              <strong>Legislative update:</strong> S. 2232, the &quot;Expanding the Surety Bond
              Program Act of 2025,&quot; introduced in July 2025, would raise the general contract
              limit from $9 million to{" "}
              <strong>$20 million</strong>. The Congressional Budget Office estimated the net
              cost at less than $500,000 for 2026–2031. As of this writing, the bill is in
              the Senate Committee on Small Business and Entrepreneurship.
            </p>
          </div>

          <Callout icon={CheckCircle2} color="emerald" title="Two SBA delivery channels">
            <p className="mb-2">
              The SBG Program operates through two tracks:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Prior Approval Program:</strong> The surety submits your application to
                the SBA before issuing the bond. SBA reviews and approves. Used for larger or
                more complex contracts.
              </li>
              <li>
                <strong>Preferred/Quick Bond Program:</strong> Participating sureties have
                delegated authority to issue bonds without prior SBA review, up to set limits.
                Faster — days rather than weeks.
              </li>
            </ul>
            <p className="mt-2">
              Ask your surety agent which channel applies to your situation.
            </p>
          </Callout>

          {/* Quick Checker CTA */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Ready to pursue construction contracts?</h3>
                <p className="text-blue-100 text-sm">
                  Run CapturePilot&apos;s free eligibility check to see which set-aside programs
                  apply to your business, what NAICS codes match your work, and which
                  certifications you should pursue first.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shrink-0 hover-lift"
              >
                Check your eligibility free
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading id="three-cs" number="05" title="How Underwriters Evaluate Your Business" />

          <div className="animate-on-scroll">
            <p className="mb-6">
              Surety underwriting has nothing in common with insurance. Insurers expect losses and
              price for them. Sureties expect zero losses — they only issue bonds when they believe
              you will perform. When you default, the surety pursues indemnification from you
              personally and from your company. The underwriting process reflects that expectation.
            </p>
            <p className="mb-6">
              The industry frames the evaluation around the <strong>Three C&apos;s</strong>:
            </p>

            <div className="space-y-8 mb-8">
              {[
                {
                  number: "1",
                  title: "Capital",
                  subtitle: "Financial strength — your ability to absorb shocks",
                  icon: DollarSign,
                  color: "blue",
                  items: [
                    "Audited or CPA-reviewed financial statements (internally prepared statements carry much less weight)",
                    "Balance sheet: working capital, net worth, debt-to-equity ratio",
                    "Income statement: revenue trends, profit margins",
                    "Cash flow analysis — profitability means nothing if you run out of cash mid-project",
                    "Personal financial statements from all owners (you will typically sign a personal indemnity agreement)",
                    "Rule of thumb: contractors can typically bond work worth roughly 10–15× their working capital",
                  ],
                },
                {
                  number: "2",
                  title: "Capacity",
                  subtitle: "Operational ability — can you actually do the work?",
                  icon: Building2,
                  color: "emerald",
                  items: [
                    "Work-in-progress schedule showing current backlog versus available capacity",
                    "Track record: largest single project successfully completed, with documentation",
                    "Key personnel organizational chart and resumes — sureties want to know who is managing the project",
                    "Equipment inventory (owned vs. rented) and access to specialized subcontractors",
                    "Your bonding aggregate limit reflects what you can realistically handle simultaneously",
                  ],
                },
                {
                  number: "3",
                  title: "Character",
                  subtitle: "Reputation and integrity — will you honor your commitments?",
                  icon: Shield,
                  color: "violet",
                  items: [
                    "Personal and business credit history — payment behavior with suppliers, subs, and lenders",
                    "Litigation history, including any prior bond claims or contract terminations",
                    "Bank references and trade references",
                    "Relationships with subcontractors and material suppliers in your market",
                    "Reputation with project owners, architects, and contracting officers",
                  ],
                },
              ].map((c) => {
                const borderColors: Record<string, string> = {
                  blue: "border-blue-400",
                  emerald: "border-emerald-400",
                  violet: "border-violet-400",
                };
                const bgColors: Record<string, string> = {
                  blue: "bg-blue-50",
                  emerald: "bg-emerald-50",
                  violet: "bg-violet-50",
                };
                const iconColors: Record<string, string> = {
                  blue: "text-blue-600",
                  emerald: "text-emerald-600",
                  violet: "text-violet-600",
                };
                const numColors: Record<string, string> = {
                  blue: "bg-blue-100 text-blue-700",
                  emerald: "bg-emerald-100 text-emerald-700",
                  violet: "bg-violet-100 text-violet-700",
                };
                return (
                  <div
                    key={c.title}
                    className={`rounded-2xl border-l-4 ${borderColors[c.color]} border border-stone-200 p-6 ${bgColors[c.color]}`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-2xl font-black px-3 py-1 rounded-xl shrink-0 ${numColors[c.color]}`}
                      >
                        {c.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <c.icon className={`w-5 h-5 ${iconColors[c.color]}`} />
                          <h3 className="font-black text-stone-900 text-lg">{c.title}</h3>
                        </div>
                        <p className="text-sm text-stone-500 italic mb-3">{c.subtitle}</p>
                        <ul className="space-y-2">
                          {c.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                              <CheckCircle2 className={`w-4 h-4 ${iconColors[c.color]} shrink-0 mt-0.5`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="text-xl font-black text-stone-900 mb-4">Credit Score Benchmarks</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Personal Credit Score</th>
                    <th className="text-left px-4 py-3 font-semibold">Typical Outcome</th>
                    <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      score: "700+",
                      outcome: "Qualifies for standard market rates and full bonding capacity",
                      rec: "Pursue commercial sureties directly",
                      bg: "bg-emerald-50",
                    },
                    {
                      score: "650–699",
                      outcome: "Often bondable, but at higher premiums and reduced single-project limits",
                      rec: "Commercial market with documentation; SBA program as backup",
                      bg: "bg-amber-50",
                    },
                    {
                      score: "Below 650",
                      outcome: "Difficult in the commercial market",
                      rec: "SBA Surety Bond Guarantee Program is the primary path",
                      bg: "bg-red-50",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={`${row.bg} border-b border-stone-200`}>
                      <td className="px-4 py-3 font-bold text-stone-900">{row.score}</td>
                      <td className="px-4 py-3 text-stone-700">{row.outcome}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{row.rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading id="bond-cost" number="06" title="What Surety Bonds Actually Cost" />

          <div className="animate-on-scroll">
            <p className="mb-4">
              Bond premiums are calculated as a percentage of the bond amount. Since performance
              and payment bonds are both set at 100% of the contract value, the premium applies
              directly to the contract price. You typically pay one premium that covers both
              bonds together.
            </p>
            <p className="mb-6">
              Premium rates are not regulated — they vary by surety company, contractor financial
              profile, project type, and market conditions. The surety market is currently
              hardening: underwriting standards tightened in 2025–2026 compared to the looser
              conditions of 2021–2022. New contractors face more scrutiny, not less.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Contractor Profile</th>
                    <th className="text-left px-4 py-3 font-semibold">Premium Rate</th>
                    <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">What Drives This Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      profile: "Established contractor, strong financials, credit 700+",
                      rate: "0.5% – 1.5%",
                      driver: "Multi-year audited statements, strong working capital, clean record",
                      bg: "bg-emerald-50",
                    },
                    {
                      profile: "Good contractor, solid financial history",
                      rate: "1% – 3%",
                      driver: "CPA-reviewed statements, decent credit, some completed projects",
                      bg: "bg-sky-50",
                    },
                    {
                      profile: "SBA program participants",
                      rate: "2% – 4%",
                      driver: "SBA guarantee offsets risk, but program fees add to cost",
                      bg: "bg-amber-50",
                    },
                    {
                      profile: "New contractor, limited history",
                      rate: "3% – 5%",
                      driver: "Unproven track record, limited financial documentation",
                      bg: "bg-orange-50",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={`${row.bg} border-b border-stone-200`}>
                      <td className="px-4 py-3 font-semibold text-stone-900">{row.profile}</td>
                      <td className="px-4 py-3 font-bold text-stone-900">{row.rate}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{row.driver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-black text-stone-900 mb-4">Real Dollar Examples</h3>
            <p className="mb-4 text-sm">
              Sureties often use a tiered premium structure: a higher rate on the first tranche of
              contract value, declining as the contract gets larger. The table below shows
              approximate all-in bond costs (covering both performance and payment bonds):
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Contract Value</th>
                    <th className="text-left px-4 py-3 font-semibold">Established Contractor</th>
                    <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">New/SBA Program</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { contract: "$150,000", estab: "$750 – $2,250", new_: "$3,000 – $7,500" },
                    { contract: "$500,000", estab: "$2,500 – $7,500", new_: "$10,000 – $25,000" },
                    { contract: "$1 million", estab: "$5,000 – $15,000", new_: "$20,000 – $50,000" },
                    { contract: "$5 million", estab: "$25,000 – $75,000", new_: "$100,000 – $250,000" },
                  ].map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-stone-50"} border-b border-stone-200`}>
                      <td className="px-4 py-3 font-bold text-stone-900">{row.contract}</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">{row.estab}</td>
                      <td className="px-4 py-3 text-amber-700 font-semibold">{row.new_}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={DollarSign} color="emerald" title="Bid bonds cost almost nothing — if you have a relationship">
              Bid bonds are short-duration instruments that rarely result in a claim. Most sureties
              charge a flat fee of <strong>$100–$250</strong> per bid bond, or include them at no
              additional charge for contractors who have an established relationship. This is one
              more reason to set up your surety account before you need it — bid bonds are
              trivially cheap once you&apos;re pre-qualified.
            </Callout>

            <p className="mb-4">
              Bond premiums are a real cost of doing business on federal construction projects.{" "}
              <strong>Include them in every bid.</strong> Contractors who forget this hit are
              either underpriced or take a margin hit they didn&apos;t plan for. At a 1.5% premium
              on a $2 million contract, that is $30,000 coming out of your gross profit.
            </p>
            <p className="mb-6">
              The good news: bond premiums are typically a deductible business expense. Consult
              your accountant, but in most cases they are treated as a cost of performing the
              contract.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading id="finding-agent" number="07" title="Finding a Surety Agent and Getting Pre-Qualified" />

          <div className="animate-on-scroll">
            <p className="mb-4">
              Surety bonds are sold by licensed insurance agents who specialize in this product —
              not your general commercial insurance broker, though some brokers do handle both.
              The quality of your surety agent relationship matters more than almost any other
              single factor in your bonding access.
            </p>
            <p className="mb-6">
              A good surety agent does not just process your application. They advocate for you
              with the underwriter, help you present your financials in the strongest possible
              light, explain what documentation gaps need to be filled, and negotiate terms.
              A mediocre agent submits your paperwork and waits. Choose carefully.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Find agents through NASBP",
                  body: "The National Association of Surety Bond Producers (NASBP.org) has a member directory. NASBP members specialize in contract surety — they are not general insurance brokers dabbling in bonds. This is the fastest path to finding a qualified agent.",
                  icon: Users,
                },
                {
                  title: "Use the SBA's list of participating sureties",
                  body: "If you anticipate needing the SBA SBG Program, start with sureties that participate in it. The SBA publishes a list of participating surety companies on SBA.gov. Agents who work with SBA program bonds understand the submission process and can navigate it efficiently.",
                  icon: Building2,
                },
                {
                  title: "Ask other federal contractors in your trade",
                  body: "Your best reference for a surety agent is another small contractor who has successfully gotten bonded for federal work. They can tell you who actually delivers versus who overpromises.",
                  icon: Award,
                },
                {
                  title: "Interview multiple agents before committing",
                  body: "Ask each agent: Which surety companies do you work with most often? What is your experience with SBA program bonds? What is the largest single-project bond you&apos;ve placed for a small contractor? Can you give me a reference from a client in my trade?",
                  icon: FileText,
                },
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-stone-200 bg-stone-50 hover-lift transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <tip.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{tip.title}</h4>
                    <p className="text-sm text-stone-600">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-4">
              Once you have an agent, the pre-qualification process typically takes 2–4 weeks for
              new accounts. You will need to provide: at minimum two to three years of
              CPA-prepared financial statements, a personal financial statement from each owner,
              a personal credit authorization, your company&apos;s organizational documents, a
              completed contractor questionnaire (work history, largest projects, key personnel),
              and bank references.
            </p>
            <p className="mb-6">
              The output of this process is your bonding capacity: a single-project limit and an
              aggregate limit. These are not permanent — they are re-evaluated annually and can
              increase as your financial strength and track record grow.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading id="step-by-step" number="08" title="Your Step-by-Step Path to Getting Bonded" />

          <div className="animate-on-scroll">
            <div className="space-y-6 mb-8">
              {[
                {
                  step: "01",
                  title: "Get your financials in order",
                  body: "If you have not had your last two years of financial statements prepared by a CPA, this is your first task. CPA-reviewed or audited statements carry significantly more weight than internally prepared or bookkeeper-compiled ones. Expect to spend $2,000–$8,000 for this work depending on your business size. It is the foundation of every surety relationship.",
                  icon: FileText,
                  color: "blue",
                },
                {
                  step: "02",
                  title: "Check your personal credit",
                  body: "Pull all three bureau reports and resolve any errors, collections, or late payments before your surety application. The personal credit of all owners with 10%+ ownership will be reviewed. You cannot hide bad credit — sureties find it, and undisclosed problems destroy trust.",
                  icon: Lock,
                  color: "violet",
                },
                {
                  step: "03",
                  title: "Select a surety agent and submit a pre-qualification package",
                  body: "Work with an NASBP member agent who has experience in your trade and with your project size range. Assemble your financial statements, personal financial statement, contractor questionnaire, and bank references. Your agent submits this to one or more surety companies for underwriting review.",
                  icon: Users,
                  color: "emerald",
                },
                {
                  step: "04",
                  title: "If needed, apply for the SBA SBG Program",
                  body: "If the commercial market declines your application or offers inadequate capacity, your agent can route you through the SBA Surety Bond Guarantee Program. The SBA program adds some documentation requirements and review time, but the guarantee substantially improves your odds of approval.",
                  icon: Shield,
                  color: "sky",
                },
                {
                  step: "05",
                  title: "Receive your bonding capacity — then target opportunities",
                  body: "Your surety will establish your single-project bond limit and aggregate limit. Use these numbers to define which solicitations you are actually positioned to pursue. CapturePilot's opportunity matching filters by contract value — you can immediately narrow your search to contracts within your bonding capacity.",
                  icon: BarChart3,
                  color: "amber",
                },
                {
                  step: "06",
                  title: "Submit bid bond with each bid over $150,000",
                  body: "When you identify a solicitation that requires a bid bond, contact your agent to obtain an SF-24. Confirm the required amount (typically 20% of your bid price). Submit the bid bond with your bid or as part of your electronic submission through SAM.gov. Missing this step means automatic rejection.",
                  icon: Award,
                  color: "blue",
                },
                {
                  step: "07",
                  title: "Upon award, furnish performance and payment bonds before NTP",
                  body: "Once you receive the award notice, immediately contact your agent to issue the performance and payment bonds (SF-25 and SF-25A). Both must be furnished before the contracting officer issues the Notice to Proceed. The surety needs the final contract documents — do not wait to share them.",
                  icon: CheckCircle2,
                  color: "emerald",
                },
                {
                  step: "08",
                  title: "Perform excellently and rebuild your financial profile annually",
                  body: "Every successfully completed bonded project strengthens your underwriting profile. Your surety reviews your financials annually. Submit updated statements proactively, before they ask. Increasing profitability, working capital, and track record translate directly to higher bonding capacity and lower premium rates over time.",
                  icon: TrendingUp,
                  color: "violet",
                },
              ].map((s) => {
                const bgMap: Record<string, string> = {
                  blue: "bg-blue-100 text-blue-700",
                  emerald: "bg-emerald-100 text-emerald-700",
                  violet: "bg-violet-100 text-violet-700",
                  sky: "bg-sky-100 text-sky-700",
                  amber: "bg-amber-100 text-amber-700",
                };
                const iconMap: Record<string, string> = {
                  blue: "text-blue-600",
                  emerald: "text-emerald-600",
                  violet: "text-violet-600",
                  sky: "text-sky-600",
                  amber: "text-amber-600",
                };
                const borderMap: Record<string, string> = {
                  blue: "border-blue-200",
                  emerald: "border-emerald-200",
                  violet: "border-violet-200",
                  sky: "border-sky-200",
                  amber: "border-amber-200",
                };
                return (
                  <div
                    key={s.step}
                    className={`flex items-start gap-4 p-6 rounded-2xl border ${borderMap[s.color]} bg-white hover-lift transition-all animate-on-scroll`}
                  >
                    <div className={`text-lg font-black px-3 py-1.5 rounded-xl shrink-0 ${bgMap[s.color]}`}>
                      {s.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <s.icon className={`w-5 h-5 ${iconMap[s.color]}`} />
                        <h3 className="font-black text-stone-900">{s.title}</h3>
                      </div>
                      <p className="text-sm text-stone-600">{s.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Free trial CTA */}
          <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Find construction contracts that match your bonding capacity
                </h3>
                <p className="text-stone-500 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/matching" className="text-blue-600 hover:underline font-medium">
                    opportunity matching
                  </Link>{" "}
                  pulls federal construction solicitations from SAM.gov and filters them by
                  contract value, NAICS code, set-aside status, and agency — so you spend
                  time on opportunities you can actually win, not reviewing hundreds of
                  irrelevant listings.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shrink-0 hover-lift"
              >
                Start your 30-day free trial
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="mistakes" number="09" title="Bonding Mistakes That Kill Contract Awards" />

          <div className="animate-on-scroll">
            <div className="space-y-5 mb-8">
              {[
                {
                  icon: XCircle,
                  mistake: "Waiting until after award to establish a surety relationship",
                  consequence:
                    "This is how contractors lose contracts they won fair and square. If you cannot produce a performance and payment bond within the timeframe specified in the contract, the agency rescinds the award and moves to the next offeror. Your bid bond is called. Set up your surety account before you bid on anything over $150,000.",
                },
                {
                  icon: XCircle,
                  mistake: "Submitting a bid without the required bid bond",
                  consequence:
                    "FAR 28.101 makes bid bonds mandatory when required by the solicitation. A bid submitted without one is nonresponsive and will be rejected without evaluation. Unlike many bid defects, a missing bid bond cannot be cured after the fact.",
                },
                {
                  icon: XCircle,
                  mistake: "Bidding beyond your bonding capacity",
                  consequence:
                    "Winning a contract and then discovering your surety will not write the bond. This ends your contract and can damage your surety relationship for future bonds. Know your single-project limit and aggregate capacity before you bid, not after.",
                },
                {
                  icon: XCircle,
                  mistake: "Failing to disclose financial problems to your surety",
                  consequence:
                    "Sureties discover undisclosed problems — through credit checks, financial statement analysis, and industry networks. Discovering problems they were not told about kills trust and can result in your surety terminating your account or refusing future bonds at a time when you need them most.",
                },
                {
                  icon: XCircle,
                  mistake: "Not budgeting bond premiums into your bid price",
                  consequence:
                    "On a $2 million contract, a 1.5% bond premium is $30,000. Contractors who forget this cost are either bidding too low (and risking a loss) or taking an unplanned hit to profitability. Budget bond premiums as a line item in every bid.",
                },
                {
                  icon: XCircle,
                  mistake: "Using a surety that is not on the T-List",
                  consequence:
                    "The Miller Act requires bonds from Treasury Circular 570 approved sureties. A bond from a non-listed company is not compliant. Verify your surety&apos;s T-List status at fiscal.treasury.gov before submitting any bid bond. The T-List is updated annually on July 1.",
                },
                {
                  icon: XCircle,
                  mistake: "Ignoring your annual financial statement update",
                  consequence:
                    "Sureties review your financials annually. If you fail to provide updated statements proactively, your bonding capacity may be suspended or reduced exactly when you are trying to bid on a major project. Submit your updated financials to your agent every year, whether they ask or not.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-red-200 bg-red-50">
                  <item.icon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{item.mistake}</h4>
                    <p className="text-sm text-stone-600">{item.consequence}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related content */}
          <div className="mt-12 pt-8 border-t border-stone-100 animate-on-scroll">
            <h3 className="text-xl font-black text-stone-900 mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/construction-government-contracts",
                  title: "Construction Government Contracts: Bonding, Davis-Bacon, and How to Win",
                  desc: "The full picture on winning federal construction work — not just bonding.",
                },
                {
                  href: "/blog/small-business-set-aside-threshold",
                  title: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know",
                  desc: "Which dollar thresholds trigger set-aside requirements for your work.",
                },
                {
                  href: "/blog/sam-gov-search-tips",
                  title: "SAM.gov Search Tips: Stop Wasting Time and Find Real Opportunities",
                  desc: "Find federal construction opportunities before your competition does.",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline",
                  desc: "Track every opportunity from discovery to award without losing anything.",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <p className="font-semibold text-stone-900 group-hover:text-blue-700 text-sm mb-1">
                    {link.title}
                  </p>
                  <p className="text-xs text-stone-500">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">
                  Want help identifying construction opportunities you can actually bid?
                </h3>
                <p className="text-stone-300 text-sm">
                  CapturePilot connects your business profile — including your certifications,
                  NAICS codes, and set-aside status — to open federal solicitations in real time.
                  Filter by contract value to stay within your bonding capacity. Book a strategy
                  call to see how it works for federal construction contractors.
                </p>
              </div>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors shrink-0 hover-lift"
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>

      <SiteFooter />
    </div>
  );
}
