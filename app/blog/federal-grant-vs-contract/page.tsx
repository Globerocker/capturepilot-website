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
  Clock,
  AlertCircle,
  Award,
  FileText,
  Target,
  DollarSign,
  Search,
  BarChart3,
  Shield,
  XCircle,
  HelpCircle,
  Zap,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-federal-money-means", label: "What 'Federal Money' Actually Means" },
  { id: "contracts-explained", label: "Contracts: The Government Is Your Customer" },
  { id: "grants-explained", label: "Grants: Funding a Public Purpose" },
  { id: "side-by-side", label: "10 Differences That Change Everything" },
  { id: "set-asides-advantage", label: "Set-Asides: Why Contracts Favor Small Businesses" },
  { id: "sbir-sttr", label: "SBIR and STTR: Grants Built for Small Businesses" },
  { id: "compliance-paperwork", label: "The Compliance Reality: FAR vs. 2 CFR 200" },
  { id: "which-path", label: "Which Path Fits Your Business" },
  { id: "getting-started", label: "Getting Started: Registration and First Steps" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet";
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
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function FederalGrantVsContractPage() {
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
            <span className="text-stone-900 font-medium">Federal Grant vs Contract</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Federal Grant vs Contract:{" "}
            <span className="gradient-text">What&apos;s the Difference and Which One Should Your Business Pursue</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            &ldquo;Can&apos;t I just apply for a government grant?&rdquo; It&apos;s one of the most common questions new
            government contractors ask — and the answer reveals a fundamental misunderstanding about how
            federal money actually reaches small businesses.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published November 19, 2026</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 py-8 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "$179B", label: "Prime Contract Awards to Small Businesses FY25", icon: DollarSign },
              { value: "$8.1B", label: "SBIR/STTR Awards in FY25 (GovSpend)", icon: Award },
              { value: "23%", label: "Statutory Small Business Contracting Goal", icon: Target },
              { value: "11", label: "Federal Agencies Running SBIR/STTR Programs", icon: Building2 },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 text-blue-600 mb-1" />
                <p className="text-2xl font-black text-stone-900">{value}</p>
                <p className="text-xs text-stone-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8 pt-8">
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
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <SectionHeading id="what-federal-money-means" number="01" title="What 'Federal Money' Actually Means" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The federal government spends roughly $7 trillion per year. A significant slice of that reaches
            businesses, nonprofits, universities, and state agencies through two fundamentally different
            channels: contracts and grants. Most small business owners hear &ldquo;federal money&rdquo; and assume
            grants — free money with no strings attached. That&apos;s not what most of it is.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            In FY2025, the federal government awarded $179 billion in prime contracts directly to small
            businesses, plus an additional slice of the roughly $273 billion total (prime plus subcontracts)
            that flows to small firms. Grant dollars to small businesses are a fraction of that. The
            distinction isn&apos;t semantic — it determines what you need to qualify, how you compete, how
            you&apos;re paid, and how you&apos;re held accountable.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The legal definitions come from the Federal Grant and Cooperative Agreement Act of 1977. The
            law requires agencies to use contracts when the purpose is &ldquo;to acquire property or services
            for the direct benefit or use of the Federal Government.&rdquo; It requires grants when the purpose
            is to &ldquo;transfer a thing of value&rdquo; to carry out a public purpose. These aren&apos;t interchangeable
            instruments. An agency can&apos;t just decide to fund your IT services through a grant instead of
            a contract — the law dictates which tool they reach for.
          </p>

          <Callout icon={Lightbulb} color="blue" title="The one-sentence version">
            A contract is the government buying something from you. A grant is the government funding
            you to do something in the public interest. If they benefit directly, it&apos;s a contract.
            If you&apos;re advancing a public goal, it might be a grant.
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="contracts-explained" number="02" title="Contracts: The Government Is Your Customer" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            When a federal agency issues a contract, it&apos;s purchasing a product or service. They define
            what they want — in a Statement of Work, a Performance Work Statement, or a Statement of
            Objectives — and you deliver it. The relationship is a business transaction. You invoice, they
            pay. You perform, they inspect. If you don&apos;t deliver, they can terminate for default.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Opportunities are posted on SAM.gov. The Federal Acquisition Regulation (FAR) governs every
            federal contract, setting out procurement rules, standard clauses, pricing constraints, and
            compliance requirements. For small businesses specifically, the most valuable feature of the
            contracting system is the set-aside. Agencies are required to reserve certain contracts
            exclusively for small businesses — which dramatically narrows your competition.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Contract types range widely. Firm-Fixed-Price (FFP) contracts pay a set amount regardless of
            your costs — your risk, but predictable revenue. Time-and-Materials (T&M) contracts reimburse
            labor and materials with a fixed profit margin. Cost-reimbursement contracts cover allowable
            costs plus fee, but require DCAA-compliant accounting systems. IDIQs
            ({" "}<Link href="/blog/idiq-contracts-explained" className="text-blue-600 hover:underline">Indefinite Delivery,
            Indefinite Quantity</Link>) establish a ceiling for ordering over a period of years. Each type fits
            different business models.
          </p>

          <Callout icon={TrendingUp} color="emerald" title="The scale is massive">
            In FY2025, federal agencies awarded approximately $179 billion in prime contracts to small
            businesses — exceeding the statutory 23% goal. That figure represents purchases of
            everything from cloud computing to janitorial services to defense hardware. It&apos;s the
            dominant channel for federal money reaching small firms.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="grants-explained" number="03" title="Grants: Funding a Public Purpose, Not Buying a Service" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A grant doesn&apos;t purchase anything from you. It transfers federal funds to support a project
            or activity that serves a public purpose — research, job creation, community development,
            scientific discovery, public health. The government gets no direct deliverable. You carry out
            the work, and your results (a study, a prototype, a public benefit) flow into the broader
            public domain.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Grant opportunities are posted on Grants.gov, not SAM.gov. Most require a Grants.gov
            registration separate from your SAM.gov registration, though both require an active UEI
            (Unique Entity Identifier). Eligibility for grants often hinges on your legal structure —
            many are limited to nonprofits, educational institutions, or state/local governments. Small
            businesses are explicitly excluded from most general federal grant programs.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The SBA is direct on this point: it does not provide grants for starting or expanding a
            small business. Despite the popular myth, there is no federal &ldquo;small business grant&rdquo; you
            can apply for to get capital to launch. What the SBA provides are{" "}
            <Link href="/blog/sba-loans-government-contractors" className="text-blue-600 hover:underline">
              loan programs
            </Link>{" "}
            — funded debt, not free money.
          </p>

          <Callout icon={AlertTriangle} color="amber" title="Grants vs. loans vs. contracts">
            Federal grant = free money for a public purpose, narrow eligibility, complex reporting.
            SBA loan = borrowed money you repay, backed by federal guarantee.
            Federal contract = earned revenue in exchange for a deliverable.
            The vast majority of federal money reaching small businesses is through contracts and loans,
            not grants.
          </Callout>

          {/* Section 4 */}
          <SectionHeading id="side-by-side" number="04" title="10 Differences That Change Everything" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            These two paths diverge in almost every operational dimension. Here&apos;s what that actually means
            for how you run your business:
          </p>

          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold w-1/3">Dimension</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-300 w-1/3">Contract</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-300 w-1/3">Grant</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dim: "Legal purpose",
                    contract: "Government acquires goods or services",
                    grant: "Transfers value to advance public purpose",
                  },
                  {
                    dim: "Who can compete",
                    contract: "Any registered business; set-asides reserve work for small firms",
                    grant: "Often restricted to nonprofits, universities, gov entities; limited for businesses",
                  },
                  {
                    dim: "Where to find them",
                    contract: "SAM.gov (search under \"Opportunities\")",
                    grant: "Grants.gov (Assistance Listings in SAM.gov for program descriptions)",
                  },
                  {
                    dim: "How you're paid",
                    contract: "Invoice after delivery or milestone; net-30 standard",
                    grant: "Often reimbursement after spending; some advance payments for nonprofits",
                  },
                  {
                    dim: "Governing regulation",
                    contract: "Federal Acquisition Regulation (FAR)",
                    grant: "2 CFR 200 (OMB Uniform Guidance)",
                  },
                  {
                    dim: "Competitive advantages for small business",
                    contract: "8(a), HUBZone, WOSB, SDVOSB set-asides; sole-source thresholds",
                    grant: "Essentially none; competition is open to all eligible entities",
                  },
                  {
                    dim: "Matching funds",
                    contract: "Not required",
                    grant: "Often required (25%–50% cost share is common)",
                  },
                  {
                    dim: "IP/data rights",
                    contract: "Complex FAR/DFARS data rights clauses; negotiate carefully",
                    grant: "Bayh-Dole Act typically lets grantees retain IP from federally funded R&D",
                  },
                  {
                    dim: "Audit exposure",
                    contract: "DCAA audits for cost-type contracts; FAR compliance reviews",
                    grant: "Single Audit (2 CFR 200 Subpart F) if spending >$1M/year in federal awards",
                  },
                  {
                    dim: "Relationship",
                    contract: "Commercial — you're a vendor; COR monitors performance",
                    grant: "Stewardship — you're a recipient; Grants Officer ensures allowable use",
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100 align-top">
                      {row.dim}
                    </td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100 align-top">
                      {row.contract}
                    </td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100 align-top">
                      {row.grant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The matching funds requirement alone rules out most small businesses from general federal
            grant programs. If a grant requires a 50% cost share on a $500,000 award, you need $250,000
            in matching resources — cash, in-kind contributions, or third-party donations. That&apos;s a
            significant barrier for a startup or a 10-person firm.
          </p>

          {/* CTA 1 */}
          <div className="bg-blue-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-blue-200" />
              <p className="font-bold text-xl">Not sure which path you qualify for?</p>
            </div>
            <p className="text-blue-100 mb-5 leading-relaxed">
              CapturePilot&apos;s Quick Checker scans your registrations, certifications, and NAICS codes
              to show you exactly which set-aside programs and contract vehicles you&apos;re eligible for
              right now — in under 60 seconds.
            </p>
            <a
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors no-underline"
            >
              Check your eligibility free <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Section 5 */}
          <SectionHeading id="set-asides-advantage" number="05" title="Set-Asides: Why Contracts Are the Bigger Opportunity for Small Businesses" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The single most powerful feature of the federal contracting system for small businesses is the
            set-aside. Agencies are required to restrict competition on contracts to small businesses when
            there&apos;s a reasonable expectation that at least two small firms can submit competitive offers at
            a fair price. That happens on billions of dollars of work every year.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Grants have no equivalent mechanism. When a federal agency posts a grant opportunity, every
            eligible entity — a Fortune 500 research division, a major university with a $5 billion
            endowment, a large nonprofit with 500 staff — competes on equal footing with your small
            business. Set-asides don&apos;t exist in the grant world.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            For contracts, the small business set-aside programs create genuinely asymmetric advantages.
            Here&apos;s a quick summary of the main programs:
          </p>

          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Program</th>
                  <th className="text-left px-4 py-3 font-semibold">Who Qualifies</th>
                  <th className="text-left px-4 py-3 font-semibold">Sole-Source Ceiling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { program: "8(a) Business Development", who: "SBA-certified socially/economically disadvantaged businesses", sole: "$4.5M (non-mfg); $7.5M (mfg/construction)" },
                  { program: "SDVOSB", who: "Service-disabled veteran-owned businesses (VA-verified or CVE-certified for DoD)", sole: "$4.5M (non-mfg); $7.5M (mfg/construction)" },
                  { program: "HUBZone", who: "Businesses in Historically Underutilized Business Zones", sole: "$4.5M (non-mfg); $7.5M (mfg/construction)" },
                  { program: "WOSB/EDWOSB", who: "Women-owned small businesses (and economically disadvantaged subset)", sole: "No sole-source; competitive set-asides only" },
                  { program: "Small Business Set-Aside", who: "Any business under the NAICS size standard", sole: "N/A — competitive only" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">{row.program}</td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100">{row.who}</td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100">{row.sole}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The 8(a) sole-source threshold is particularly significant: an agency can award a contract
            directly to an 8(a) firm without any competition at all, up to $4.5 million for most work
            and $7.5 million for manufacturing or construction. No grant program has an equivalent
            mechanism that lets agencies skip competition in your favor. If you hold multiple
            certifications — say, 8(a) and SDVOSB — you can stack those advantages and become an
            especially attractive vehicle for agencies trying to meet their small business goals.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Check your current certification status and understand which set-asides apply to your
            NAICS codes using{" "}
            <Link href="/features/quick-checker" className="text-blue-600 hover:underline">
              CapturePilot&apos;s Quick Checker
            </Link>{" "}
            before you spend time pursuing grants that may not be accessible to you.
          </p>

          {/* Section 6 */}
          <SectionHeading id="sbir-sttr" number="06" title="SBIR and STTR: The Grants Built for Small Businesses" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            There is one corner of the federal grant world specifically designed for small businesses:
            the Small Business Innovation Research (SBIR) and Small Business Technology Transfer (STTR)
            programs. These are the exception, not the rule.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Eleven federal agencies are required to set aside a percentage of their R&D budgets for
            SBIR and STTR awards. In FY2025, the required set-aside rates were 3.2% for SBIR and 0.45%
            for STTR. GovSpend data puts total SBIR/STTR awards in FY2025 at approximately $8.07 billion
            — an increase of roughly $614 million (8.2%) over FY2024. The Department of Defense alone
            accounted for 89% of that total.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The programs run in three phases:
          </p>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                phase: "Phase I",
                amount: "Up to ~$275,000",
                purpose: "Feasibility study. Prove the concept is technically sound. 6–12 months.",
              },
              {
                phase: "Phase II",
                amount: "Up to ~$1.9M",
                purpose: "Full R&D. Build and test the solution. 2 years. Only Phase I winners eligible.",
              },
              {
                phase: "Phase III",
                amount: "No SBIR funding",
                purpose: "Commercialization. Use non-SBIR federal contracts or private funding to bring the product to market.",
              },
            ].map(({ phase, amount, purpose }) => (
              <div
                key={phase}
                className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-200 hover-lift"
              >
                <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-lg h-fit shrink-0">
                  {phase}
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-sm">{amount}</p>
                  <p className="text-stone-600 text-sm mt-1">{purpose}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            SBIR/STTR is the right path if your business is built around novel technology, scientific
            research, or early-stage innovation — think defense tech, medical devices, clean energy,
            or aerospace. It is not the path for a staffing firm, a janitorial business, a managed IT
            services provider, or most service companies. If your competitive advantage is operational
            excellence rather than R&D, the contracting path will produce far more revenue far sooner.
          </p>

          <Callout icon={AlertCircle} color="violet" title="SBIR awards can be contracts or grants">
            Technically, some SBIR and STTR awards are structured as procurement contracts under FAR,
            not financial assistance grants. The phase of the award, the agency, and the work type
            determine which instrument is used. DoD tends to use contracts; civilian agencies often use
            grants. The practical effect on the awardee is similar, but the compliance regime differs.
            Check whether your award is under FAR or 2 CFR 200 before assuming either applies.
          </Callout>

          {/* Section 7 */}
          <SectionHeading id="compliance-paperwork" number="07" title="The Compliance Reality: FAR vs. 2 CFR 200" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Contracts are governed by the Federal Acquisition Regulation — a 2,000-page rulebook
            covering everything from allowable costs to data rights to termination procedures. The specific
            clauses in your contract (Section I) flow down from the FAR and agency supplements like
            the DFARS. Your compliance obligations are contract-specific, defined in the award document.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Grants are governed by 2 CFR 200, the OMB Uniform Guidance. This covers allowable costs,
            procurement standards, financial management, reporting timelines, and audit requirements
            for all federal financial assistance. If your organization expends $1 million or more in
            federal awards in a year, you&apos;re required to undergo a Single Audit under Subpart F.
            That&apos;s a significant compliance burden that most small businesses are not equipped to manage.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <p className="font-bold text-blue-900">Contract Compliance</p>
              </div>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                  <span>FAR and agency supplement clauses in Section I</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                  <span>DCAA audits on cost-type contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                  <span>COR oversight on performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                  <span>CPARS ratings affect future awards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                  <span>Fixed-price contracts: minimal accounting complexity</span>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-emerald-600" />
                <p className="font-bold text-emerald-900">Grant Compliance</p>
              </div>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>2 CFR 200 (OMB Uniform Guidance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>Single Audit if &gt;$1M in federal awards annually</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>Federal Financial Reports (SF-425)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>Program performance reports to Grants Officer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>Cost-share documentation if match required</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            For a small business new to federal money, the compliance overhead of grants is frequently
            underestimated. Grant reporting is event-driven and document-intensive. If you misclassify
            an expense as allowable under 2 CFR 200 when it&apos;s not, you may be required to return
            funds. Contract compliance on a Firm-Fixed-Price contract is simpler: deliver the work,
            invoice correctly, comply with standard clauses. The overhead scales with contract type.
          </p>

          {/* Section 8 */}
          <SectionHeading id="which-path" number="08" title="Which Path Fits Your Business" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            This is the decision that matters. Use this framework to figure out where to invest your time:
          </p>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                label: "You sell services, products, or expertise the government uses directly",
                path: "contract",
                reason: "The government is your customer. The contracting path is built for this.",
              },
              {
                label: "You do R&D, scientific research, or early-stage technology development",
                path: "sbir",
                reason: "SBIR/STTR is designed for you. Consider contracts too for Phase III.",
              },
              {
                label: "You hold 8(a), SDVOSB, HUBZone, or WOSB certification",
                path: "contract",
                reason: "Set-asides give you a massive competitive advantage. Leverage them.",
              },
              {
                label: "You're a nonprofit or social enterprise with a public mission",
                path: "grant",
                reason: "You may now be eligible for grant programs your for-profit competitors aren't.",
              },
              {
                label: "You want predictable, recurring revenue",
                path: "contract",
                reason: "Multi-year contracts with option periods provide exactly that. Grants are project-based.",
              },
              {
                label: "You can absorb 50%+ cost share and 6-month reporting cycles",
                path: "grant",
                reason: "If your financials can sustain it, general grant programs may be viable.",
              },
              {
                label: "You want to get paid within 30 days of invoicing",
                path: "contract",
                reason: "The Prompt Payment Act requires federal agencies to pay invoices within 30 days.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-white border border-stone-200 rounded-xl hover-lift"
              >
                <div
                  className={`shrink-0 mt-1 ${item.path === "grant" ? "text-emerald-600" : item.path === "sbir" ? "text-violet-600" : "text-blue-600"}`}
                >
                  {item.path === "grant" ? (
                    <Award className="w-5 h-5" />
                  ) : item.path === "sbir" ? (
                    <Search className="w-5 h-5" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{item.label}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        item.path === "grant"
                          ? "bg-emerald-100 text-emerald-700"
                          : item.path === "sbir"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.path === "sbir" ? "SBIR/STTR" : item.path === "grant" ? "Grant" : "Contract"}
                    </span>
                    <span className="text-stone-500 text-sm">{item.reason}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The majority of small businesses reading this should focus on contracts. That&apos;s not because
            grants are bad — it&apos;s because the contracting system is explicitly designed to give small
            businesses advantages that the grant system doesn&apos;t provide. The set-aside programs, the
            small business goals, the statutory prime contractor requirements — all of these are unique
            to contracts.
          </p>

          {/* CTA 2 */}
          <div className="bg-stone-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <p className="font-bold text-xl">See which contracts match your business</p>
            </div>
            <p className="text-stone-300 mb-5 leading-relaxed">
              CapturePilot scans tens of thousands of active federal opportunities and surfaces the ones
              that match your NAICS codes, certifications, and past performance — so you spend time on
              bids you can actually win.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors no-underline"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-stone-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-600 transition-colors no-underline"
              >
                Book a strategy call
              </Link>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="getting-started" number="09" title="Getting Started: Registration and First Steps" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Both paths share a common foundation: your SAM.gov registration. You cannot receive a federal
            contract or most federal grants without an active registration in the System for Award
            Management and a valid Unique Entity Identifier (UEI). The UEI replaced the old DUNS number
            as of April 2022.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Your{" "}
            <Link href="/blog/sam-gov-renewal-guide" className="text-blue-600 hover:underline">
              SAM.gov registration
            </Link>{" "}
            must be renewed annually. Letting it lapse can freeze contract payments and render you
            ineligible for new awards. Set a calendar reminder 60 days before your expiration date.
            Check your status at sam.gov by searching your legal business name or UEI — it&apos;s public
            information.
          </p>

          <div className="space-y-3 my-8 animate-on-scroll">
            {[
              {
                step: "01",
                title: "Get your UEI from SAM.gov",
                detail: "Register at sam.gov. Free. Usually active within 10 business days. Required for both contracts and grants.",
              },
              {
                step: "02",
                title: "Complete your SAM.gov entity registration",
                detail: "Add your NAICS codes, banking details, and annual representations and certifications. This is what makes you eligible to receive federal awards.",
              },
              {
                step: "03",
                title: "For contracts: Search SAM.gov opportunities",
                detail: "Filter by NAICS, set-aside type, agency, and dollar value. Use CapturePilot's matching engine to surface opportunities you'd otherwise miss.",
              },
              {
                step: "04",
                title: "For grants: Register on Grants.gov",
                detail: "Separate from SAM.gov. Grants.gov says to allow up to 10 business days for a SAM registration to activate before applying.",
              },
              {
                step: "05",
                title: "For SBIR/STTR: Check SBIR.gov",
                detail: "Find open solicitations by agency and research topic at sbir.gov. The DoD alone runs dozens of topic areas per year.",
              },
              {
                step: "06",
                title: "Check your certifications",
                detail: "If you're a veteran, woman-owned, located in a HUBZone, or qualify as socially/economically disadvantaged, pursue certification before bidding. It changes your competitive position entirely.",
              },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-200 hover-lift">
                <div className="bg-blue-600 text-white text-xs font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div>
                  <p className="font-bold text-stone-900">{title}</p>
                  <p className="text-stone-500 text-sm mt-1">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The certification question is worth pausing on. If you qualify for 8(a),{" "}
            <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">
              SDVOSB
            </Link>
            ,{" "}
            <Link href="/blog/hubzone-program-guide" className="text-blue-600 hover:underline">
              HUBZone
            </Link>
            , or{" "}
            <Link href="/blog/wosb-certification-guide" className="text-blue-600 hover:underline">
              WOSB
            </Link>
            , you have access to a filtered competition pool that most of your competitors can&apos;t enter.
            That advantage doesn&apos;t exist in the grant world. Certifications are one of the most
            underutilized levers in government contracting for small businesses.
          </p>

          <Callout icon={CheckCircle2} color="emerald" title="Quick sanity check: are you ready for contracts?">
            Before spending time on proposals, confirm: (1) active SAM.gov registration, (2) correct
            NAICS codes that reflect your work, (3) appropriate certifications applied for or in
            process, (4) at least one piece of relevant past performance you can reference, and (5)
            a basic capability statement. If any of these are missing, fix them first. CapturePilot&apos;s{" "}
            <a href={CHECK_URL} className="text-emerald-700 font-semibold hover:underline">
              Quick Checker
            </a>{" "}
            will flag gaps in your profile before you waste time bidding.
          </Callout>

          {/* Internal links wrap-up */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-10 animate-on-scroll">
            <h3 className="font-bold text-stone-900 mb-4">Related reading</h3>
            <ul className="space-y-2">
              {[
                { href: "/blog/federal-contracting-certifications", label: "Federal Contracting Certifications: Which Ones Actually Help You Win" },
                { href: "/blog/how-to-find-government-contracts-small-business", label: "How to Find Government Contracts for Your Small Business" },
                { href: "/blog/sbir-sttr-grants-guide", label: "SBIR and STTR Grants: How Small Businesses Win R&D Funding from DoD" },
                { href: "/blog/small-business-set-aside-threshold", label: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know" },
                { href: "/blog/first-government-contract-checklist", label: "How to Get Your First Government Contract: A Step-by-Step Checklist" },
                { href: "/blog/sba-size-standards-guide", label: "SBA Size Standards: The Complete 2026 Guide to Qualifying as a Small Business" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-2">
              Ready to pursue contracts?
            </p>
            <h3 className="text-2xl font-black mb-3">
              See which federal contracts you&apos;re eligible to win today
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              CapturePilot connects your SAM.gov profile to tens of thousands of live opportunities,
              highlights set-asides you qualify for, and gives you the{" "}
              <Link href="/features/intelligence" className="text-white underline">
                competitive intelligence
              </Link>{" "}
              to know which bids are worth your time before you write a single word of a proposal.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors no-underline"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors no-underline"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
