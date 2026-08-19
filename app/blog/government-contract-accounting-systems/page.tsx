"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  DollarSign,
  Shield,
  FileText,
  XCircle,
  AlertCircle,
  Calculator,
  Layers,
  Clock,
  ArrowRight,
  BarChart3,
  BookOpen,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-it", label: "What a DCAA-Compliant Accounting System Actually Is" },
  { id: "when-you-need-one", label: "When You Need One (and When You Don't)" },
  { id: "sf1408-explained", label: "The SF 1408 Pre-Award Audit, Explained" },
  { id: "core-requirements", label: "The Core Requirements Your System Must Meet" },
  { id: "software-compared", label: "Software Options Compared" },
  { id: "quickbooks-problem", label: "The QuickBooks Problem" },
  { id: "implementation-timeline", label: "Implementation Timeline and Real Costs" },
  { id: "pass-pre-award-audit", label: "How to Pass the Pre-Award Audit" },
  { id: "next-steps", label: "Next Steps" },
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

export default function GovernmentContractAccountingSystemsPage() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteNav />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-300 border border-blue-500/30">
              Strategy
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-300">
              8 min read
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-700 text-slate-300">
              August 19, 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            DCAA-Compliant Accounting Systems: Which One You Need and When to Get It
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Most small businesses don't need a purpose-built government accounting system on day one. But when you do need one, the window to get it right is short — and the wrong choice can cost you a contract award.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-6 py-10" data-section>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-lg text-slate-800">In This Guide</h2>
          </div>
          <ol className="space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-sm text-blue-700 hover:text-blue-900 hover:underline group transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-blue-200 transition-colors">
                    {i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 pb-20 space-y-16">

        {/* Section 1 */}
        <section id="what-is-it" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Calculator className="w-8 h-8 text-blue-600 shrink-0" />
            What a DCAA-Compliant Accounting System Actually Is
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            The Defense Contract Audit Agency (DCAA) is the arm of the Department of Defense responsible for auditing contractor accounting practices. When someone says "DCAA-compliant accounting system," they mean a system designed and configured to satisfy the requirements DCAA uses when evaluating whether your books are adequate for tracking government contract costs.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            DCAA doesn't certify or officially approve specific software. No such approved list exists. What they evaluate is the configuration and processes behind whatever system you use — whether it can segregate costs, allocate overhead correctly, produce accurate invoices, and maintain audit trails.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            That said, certain platforms are purpose-built for government contracting and come pre-configured to meet DCAA's requirements. Others — like QuickBooks — can be made workable with significant customization and add-ons, but need careful setup to pass scrutiny.
          </p>

          <Callout icon={Shield} color="blue" title="Why This Matters">
            Agencies cannot award cost-reimbursable contracts (cost-plus, time-and-materials above the simplified acquisition threshold) without first verifying your accounting system is adequate. If DCAA finds your system deficient, you lose the award — regardless of your technical score.
          </Callout>

          <p className="text-slate-700 leading-relaxed">
            The standard your system is measured against is the SF 1408, a pre-award audit form that walks through the specific capabilities your accounting system must demonstrate. It covers everything from how you separate direct labor from overhead to how you handle unallowable costs under FAR Part 31.
          </p>
        </section>

        {/* Section 2 */}
        <section id="when-you-need-one" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-amber-500 shrink-0" />
            When You Need One (and When You Don't)
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Not every government contract requires a DCAA-compliant accounting system. The requirement is tied to contract type, not contract size or agency.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 border border-slate-200">Contract Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 border border-slate-200">DCAA System Required?</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 border border-slate-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Firm Fixed Price (FFP)", "No", "Government pays a set price. Your cost structure is your business."],
                  ["FFP under $750K", "No", "Below simplified acquisition threshold — minimal scrutiny."],
                  ["Cost-Plus-Fixed-Fee (CPFF)", "Yes — required", "Government reimburses actual costs. Must track every dollar."],
                  ["Cost-Plus-Award-Fee (CPAF)", "Yes — required", "Same as CPFF, with performance-based bonus pool."],
                  ["Time & Materials (T&M)", "Yes — typically", "Labor rates and overhead must be auditable above threshold."],
                  ["IDIQ Task Orders (Cost Type)", "Yes — required", "If task orders under the vehicle are cost-type."],
                  ["SBIR Phase I", "Often required", "DoD typically requests SF 1408 review before award."],
                  ["SBIR Phase II", "Yes", "Larger awards require adequate system review."],
                ].map(([type, required, notes], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 border border-slate-200 font-medium text-slate-800">{type}</td>
                    <td className={`px-4 py-3 border border-slate-200 font-semibold ${required.startsWith("Yes") ? "text-blue-700" : "text-slate-500"}`}>{required}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="The Practical Rule">
            If the government is reimbursing your actual costs — not paying a fixed price — they need to verify those costs are tracked correctly. That's when DCAA compliance becomes non-negotiable. For firm-fixed-price work, you can run your business books however you like.
          </Callout>

          <p className="text-slate-700 leading-relaxed mb-4">
            The timing matters too. You don't need to have a DCAA-compliant system in place before you pursue contracts. But if you win a cost-type contract and DCAA conducts a pre-award audit, you need to demonstrate either that your current system is adequate, or that you have a credible plan to transition to a compliant system before the contract starts.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This is one reason to use CapturePilot's <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">contract intelligence tools</Link> when evaluating opportunities — knowing a solicitation will likely result in a cost-type award lets you plan your system upgrade before you're scrambling to meet a post-award deadline.
          </p>
        </section>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center hover-lift">
          <h3 className="text-xl font-bold mb-2">Check Your Eligibility for Set-Aside Contracts</h3>
          <p className="text-blue-100 mb-5 text-sm max-w-xl mx-auto">
            Before you invest in accounting infrastructure, know which contract types and set-asides you qualify for. Our quick checker takes less than 3 minutes.
          </p>
          <a
            href={CHECK_URL}
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Check your eligibility free <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Section 3 */}
        <section id="sf1408-explained" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600 shrink-0" />
            The SF 1408 Pre-Award Audit, Explained
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            The Standard Form 1408 (SF 1408) is DCAA's official pre-award accounting system adequacy checklist. It's not technically an audit — it's a design review. DCAA isn't looking at your actual costs; they're evaluating whether your system is capable of accumulating and reporting costs correctly.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            A contracting officer requests an SF 1408 review when they're considering awarding you a cost-type contract. DCAA then contacts you to schedule the review, which can take anywhere from a few weeks to several months depending on workload and how prepared you are.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8">
            <h3 className="font-bold text-slate-800 mb-4 text-lg">What the SF 1408 Review Covers</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Segregation of direct vs. indirect costs",
                "Accumulation of costs by contract",
                "Identification of unallowable costs (FAR Part 31)",
                "Timekeeping system adequacy",
                "Labor distribution to contracts",
                "Indirect cost pool and allocation base tracking",
                "Billing system accuracy",
                "General ledger integrity",
                "Internal controls and approval workflows",
                "Audit trail for all transactions",
                "Reconciliation of billings to accounting records",
                "Management reporting capabilities",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            The review results in one of three outcomes: adequate (you can proceed), inadequate with significant deficiencies (you cannot be awarded until corrected), or inadequate with minor deficiencies that you can remediate quickly.
          </p>
          <p className="text-slate-700 leading-relaxed">
            If DCAA finds your system inadequate, the contracting officer has two options: hold the award pending correction, or proceed with a plan from you to fix deficiencies within 60 days. For DoD contracts specifically, DFARS 252.242-7006 gives the government authority to withhold a percentage of contract payments if your accounting system has known deficiencies.
          </p>
        </section>

        {/* Section 4 */}
        <section id="core-requirements" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Layers className="w-8 h-8 text-blue-600 shrink-0" />
            The Core Requirements Your System Must Meet
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Every platform marketed as DCAA-compliant needs to support these functional requirements. If yours doesn't, no amount of workarounds will get you through an SF 1408 review.
          </p>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Cost Segregation",
                desc: "Your system must distinguish between direct costs (charged directly to a specific contract) and indirect costs (overhead, G&A, fringe benefits). Mixing these together — even accidentally — is a deficiency.",
              },
              {
                num: "02",
                title: "Contract-Level Cost Accumulation",
                desc: "Every dollar of labor, materials, and subcontracts must be trackable to a specific contract number or project code. The system must generate cost reports by contract on demand.",
              },
              {
                num: "03",
                title: "Unallowable Cost Identification",
                desc: "FAR Part 31 prohibits certain costs from being billed to the government — entertainment, alcohol, lobbying, executive compensation above set limits. Your system must flag and exclude these automatically or through a documented process.",
              },
              {
                num: "04",
                title: "Compliant Timekeeping",
                desc: "Employees must record time daily (or close to it), by project and task. The system must require employee certification of timesheet accuracy, supervisor approval, and maintain immutable records. No editing timesheets after the fact without an audit trail.",
              },
              {
                num: "05",
                title: "Indirect Rate Calculation",
                desc: "Overhead, G&A, and fringe benefit rates must be calculated from defined cost pools and allocation bases. The system must support provisional billing rates and track actuals against them.",
              },
              {
                num: "06",
                title: "Audit Trail",
                desc: "Every transaction must be traceable to source documents. Edits must be logged with who made the change and when. This is non-negotiable — a system without immutable audit trails fails the review.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-6 p-6 bg-white border border-slate-200 rounded-2xl hover-lift">
                <div className="text-3xl font-black text-slate-200 shrink-0 leading-none">{item.num}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Common Deficiency: Timekeeping">
            Timekeeping is where most small businesses fail the SF 1408 review. A shared spreadsheet where people enter hours once a week — or retroactively — won't pass. DCAA expects a system with individual logins, daily entry requirements, and an electronic approval chain.
          </Callout>
        </section>

        {/* Section 5 */}
        <section id="software-compared" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-blue-600 shrink-0" />
            Software Options Compared
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            These are the five platforms most commonly used by government contractors to meet DCAA requirements. None is perfect for every situation — size, growth trajectory, and contract type mix all matter.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 font-semibold border border-slate-700">Platform</th>
                  <th className="text-left px-4 py-3 font-semibold border border-slate-700">Best For</th>
                  <th className="text-left px-4 py-3 font-semibold border border-slate-700">Pricing (approx.)</th>
                  <th className="text-left px-4 py-3 font-semibold border border-slate-700">Implementation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Deltek Costpoint", "Large DoD contractors, $10M+ revenue", "$75–$200/user/month; Essentials: ~$800/mo for 10 users", "$30K–$500K+ depending on complexity"],
                  ["Unanet", "Mid-market GovCon, $2M–$50M revenue", "Below Costpoint; quote-based", "Faster than Costpoint; weeks to months"],
                  ["JAMIS Prime ERP", "Mid-market, especially SBIR/STTR contractors", "Quote-based; typically lower than Costpoint", "3–6 months typical"],
                  ["PROCAS", "Small contractors, <$5M revenue", "Under $5,000 total implementation cost", "Under 24 hours reported"],
                  ["GovCon365", "Microsoft-stack businesses", "Quote-based; Azure subscription model", "Varies; integrates with existing M365"],
                ].map(([platform, bestFor, pricing, impl], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 border border-slate-200 font-semibold text-blue-700">{platform}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-700">{bestFor}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-700">{pricing}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-700">{impl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-4">Platform Profiles</h3>

          <div className="space-y-6">
            <div className="p-6 border border-slate-200 rounded-2xl">
              <h4 className="font-bold text-slate-800 mb-2">Deltek Costpoint</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                The market leader for large DoD contractors. Extremely configurable, with deep integration between project accounting, time-and-expense, and HR. Costpoint Essentials, introduced for smaller contractors, starts around $800/month for 10 users — but don't confuse that with the full enterprise cost. Large implementations can exceed $500,000 including consulting fees.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Best if you're growing toward $10M+ in federal revenue and need a system that scales with complex indirect rate structures and multi-entity organizations. Overkill for a 5-person firm just getting started.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-2xl">
              <h4 className="font-bold text-slate-800 mb-2">Unanet</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                The strongest challenger to Costpoint in the mid-market. Purpose-built for government contractors and architecture/engineering firms. Better user experience than Costpoint, faster implementation, and typically lower licensing costs. Over 3,100 project-driven organizations use it.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Strong choice for contractors in the $2M–$50M revenue range without complex manufacturing or multi-entity structures. Includes integrated timekeeping, which eliminates the need for a separate add-on.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-2xl">
              <h4 className="font-bold text-slate-800 mb-2">PROCAS</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                The most affordable entry point into true GovCon accounting. PROCAS claims implementation under 24 hours and total cost under $5,000 — numbers that are meaningful for a small contractor who can't budget for a $50K Costpoint implementation.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you're under $2M in federal revenue and need to pass an SF 1408 review quickly, PROCAS is worth serious consideration. Functionality is more limited than Costpoint or Unanet, but for straightforward cost-type contracts, it does the job.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="quickbooks-problem" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <XCircle className="w-8 h-8 text-red-500 shrink-0" />
            The QuickBooks Problem
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            QuickBooks is the default accounting system for millions of small businesses. The question contractors ask constantly is: can you make it DCAA-compliant?
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The honest answer is: it depends on your contract complexity, and it's never fully adequate on its own.
          </p>

          <Callout icon={AlertTriangle} color="red" title="What QuickBooks Cannot Do Natively">
            <ul className="space-y-1 list-disc list-inside">
              <li>DCAA-compliant timekeeping (no daily entry requirement, no immutable audit trail)</li>
              <li>Automated unallowable cost flagging under FAR Part 31</li>
              <li>Indirect rate pool and base tracking without manual spreadsheet work</li>
              <li>Standard DCAA-required cost reports without custom setup</li>
            </ul>
          </Callout>

          <p className="text-slate-700 leading-relaxed mb-4">
            Many contractors use QuickBooks plus a DCAA-compliant timekeeping add-on (like Hour Timesheet or ClockShark) plus manually configured cost reports. This works for simple firm-fixed-price contracts where you're not being audited on cost accumulation.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            For an actual SF 1408 review on a cost-type contract, you'll need to demonstrate that your QuickBooks configuration meets every criterion — which requires careful chart of accounts design, separate class tracking for each contract, and a compliant timekeeping integration. Some contractors pass SF 1408 reviews with this setup; many don't without significant preparation.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The migration trigger is usually your first cost-type contract. If you've been winning firm-fixed-price work and want to pursue cost-plus, start planning your accounting system upgrade 6 months before you expect to submit a proposal on a cost-type solicitation. Don't wait until you've won.
          </p>
        </section>

        {/* Section 7 */}
        <section id="implementation-timeline" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600 shrink-0" />
            Implementation Timeline and Real Costs
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The gap between "we selected the software" and "we're ready for an SF 1408 review" is where small businesses underestimate. Implementation isn't installing software — it's migrating your chart of accounts, configuring indirect cost pools, training your team, and running parallel for at least one billing cycle.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                phase: "Selection & Contract",
                duration: "2–4 weeks",
                desc: "Evaluate platforms, get demos, negotiate pricing. Include a DCAA compliance consultant in the selection process if you haven't done this before.",
                icon: CheckCircle2,
                color: "text-blue-600",
              },
              {
                phase: "Chart of Accounts Design",
                duration: "2–4 weeks",
                desc: "The most critical step. Your chart of accounts must correctly separate direct costs by contract, indirect cost pools, and unallowable cost accounts. A GovCon accountant should own this.",
                icon: CheckCircle2,
                color: "text-blue-600",
              },
              {
                phase: "System Configuration & Data Migration",
                duration: "4–12 weeks",
                desc: "Configure indirect rate structures, set up contract cost codes, migrate historical data. Timeline varies significantly by platform and complexity.",
                icon: CheckCircle2,
                color: "text-blue-600",
              },
              {
                phase: "Timekeeping Integration & Training",
                duration: "1–2 weeks",
                desc: "Train employees on daily time entry requirements, electronic certification, and approval workflows. This is often the hardest cultural change.",
                icon: CheckCircle2,
                color: "text-blue-600",
              },
              {
                phase: "Parallel Running & Testing",
                duration: "4–8 weeks",
                desc: "Run old and new systems simultaneously for at least one billing period. Reconcile outputs. Fix discrepancies before the auditor shows up.",
                icon: CheckCircle2,
                color: "text-blue-600",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <step.icon className={`w-5 h-5 ${step.color} shrink-0 mt-0.5`} />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-slate-800">{step.phase}</span>
                    <span className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-600" />
              Realistic Total Costs
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-800">
              <div>
                <p className="font-semibold mb-1">Small Contractor (under $2M revenue)</p>
                <p>Platform (PROCAS): $3,000–$5,000</p>
                <p>Consultant fees: $5,000–$15,000</p>
                <p>Training time: 20–40 hours employee time</p>
                <p className="font-semibold mt-2">Total: $8,000–$20,000</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Mid-Size Contractor ($2M–$15M revenue)</p>
                <p>Platform (Unanet/JAMIS): $30,000–$80,000/year</p>
                <p>Implementation consulting: $25,000–$75,000</p>
                <p>Internal project management: 200–400 hours</p>
                <p className="font-semibold mt-2">Total first-year: $55,000–$155,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Know Which Contracts Are Worth Pursuing Before You Invest</h3>
              <p className="text-slate-300 text-sm">
                CapturePilot's <Link href="/features/intelligence" className="text-blue-400 hover:text-blue-300 underline">contract intelligence</Link> flags cost-type vs. fixed-price contract history for every agency you're targeting. See what you're actually competing for before you commit to an accounting system overhaul.
              </p>
            </div>
            <a
              href={SIGNUP_URL}
              className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Start your 30-day free trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section 8 */}
        <section id="pass-pre-award-audit" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-600 shrink-0" />
            How to Pass the Pre-Award Audit
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Contractors who fail the SF 1408 review almost always fail for the same reasons: timekeeping gaps, mixed direct and indirect costs, and no documented process for handling unallowable costs. These are preventable with preparation.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8">
            <h3 className="font-bold text-slate-800 mb-5">Pre-Audit Preparation Checklist</h3>
            <div className="space-y-3">
              {[
                { item: "Run a mock SF 1408 review with your accountant or DCAA consultant before the real one", critical: true },
                { item: "Ensure every employee has recorded time daily in the compliant system — at least 60 days of history is ideal", critical: true },
                { item: "Document your indirect cost pools in writing: what's in each pool, what the allocation base is, and why", critical: true },
                { item: "Map every unallowable cost category from FAR 31.205 to a specific account in your chart of accounts", critical: true },
                { item: "Test your billing system — run a sample invoice and trace it back to source documents", critical: false },
                { item: "Prepare a written accounting policies and procedures manual (even 5–10 pages is better than nothing)", critical: false },
                { item: "Reconcile your general ledger to your project cost reports — they must agree", critical: false },
                { item: "Verify that no one can edit historical timesheets without an audit trail", critical: true },
                { item: "Have an answer ready for how you track and exclude unallowable costs like entertainment or gifts", critical: false },
                { item: "Know your provisional billing rates and how they were calculated", critical: false },
              ].map((check, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${check.critical ? "text-emerald-600" : "text-slate-400"}`} />
                  <span>{check.item} {check.critical && <span className="text-red-600 font-semibold text-xs ml-1">Critical</span>}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            DCAA reviewers are not looking to fail you. They're assessing whether your system, as designed, is capable of supporting a cost-type contract. If you've set up your system correctly and have documentation to back it up, the review is a process — not a threat.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            If DCAA finds a deficiency, respond quickly. Most minor deficiencies can be corrected within 30–60 days. Document your remediation, notify the contracting officer, and request a follow-up review.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Once you've passed an SF 1408 review, it stays on your record. Future contracting officers can reference the prior review, which often means you won't need to repeat the full process for subsequent cost-type contracts — as long as your system configuration hasn't materially changed.
          </p>

          <Callout icon={Lightbulb} color="violet" title="Use Your Proposal Process to Signal Readiness">
            When you submit proposals for cost-type contracts, mention your accounting system by name in your management volume. State that you have a DCAA-adequate system and have previously passed (or are prepared for) an SF 1408 review. It removes a source of pre-award risk for the contracting officer and signals that you know how government contracting works.
            {" "}
            <Link href="/features/proposals" className="text-violet-700 hover:underline font-medium">CapturePilot's proposal tools</Link> include compliance prompts that help you include this kind of risk-reduction language automatically.
          </Callout>
        </section>

        {/* Section 9 */}
        <section id="next-steps" data-section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <ChevronRight className="w-8 h-8 text-blue-600 shrink-0" />
            Next Steps
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The right accounting system decision depends entirely on where you are now and where you're heading. Here's a simple decision path.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                condition: "You only pursue firm-fixed-price contracts under $750K",
                action: "Stay on QuickBooks for now. Focus your energy on building past performance and capability. Revisit this question when you start winning larger or cost-type work.",
                urgent: false,
              },
              {
                condition: "You're pursuing your first cost-type contract or SBIR Phase II",
                action: "Start the accounting system evaluation immediately. PROCAS or a QuickBooks + compliant timekeeping stack can work for simple setups. Engage a GovCon accountant for the chart of accounts design.",
                urgent: true,
              },
              {
                condition: "You're over $2M in federal revenue with multiple active contracts",
                action: "Evaluate Unanet or JAMIS Prime. The efficiency gains from a purpose-built GovCon ERP — integrated timekeeping, automated indirect rate calculation, real-time project dashboards — justify the investment at this scale.",
                urgent: false,
              },
              {
                condition: "You're a $10M+ DoD contractor or plan to get there",
                action: "Deltek Costpoint is the market standard for a reason. It's expensive to implement, but it's what large primes and DoD agencies expect to see. The cost becomes negligible relative to contract revenue at scale.",
                urgent: false,
              },
            ].map((scenario, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${scenario.urgent ? "border-blue-300 bg-blue-50" : "border-slate-200 bg-white"}`}>
                <p className={`text-sm font-semibold mb-2 ${scenario.urgent ? "text-blue-700" : "text-slate-500"}`}>
                  IF: {scenario.condition}
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold text-slate-800">THEN: </span>{scenario.action}
                </p>
              </div>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed mb-4">
            Whichever path you're on, tracking the contract types you're pursuing is the first step. Check the historical award data for your target agencies — are they primarily FFP or cost-type? That answer shapes your entire infrastructure roadmap.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            You can find this data in SAM.gov's FPDS reports, but it takes hours to pull and analyze manually. CapturePilot's <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">market intelligence tools</Link> surface contract type breakdowns by agency and NAICS code in seconds — so you can make this decision with data, not guesswork.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Also review our guides on <Link href="/blog/dcaa-audit-small-business" className="text-blue-600 hover:underline font-medium">DCAA audit preparation</Link> and <Link href="/blog/cost-volume-government-proposal" className="text-blue-600 hover:underline font-medium">writing your cost volume</Link> — both tie directly into having a compliant accounting system when you need it most.
          </p>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center hover-lift">
          <h3 className="text-2xl font-bold mb-3">Ready to Win More Government Contracts?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            CapturePilot helps small and veteran-owned businesses find the right opportunities, build stronger proposals, and track their pipeline — all in one platform built for GovCon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Book a strategy call <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-blue-400"
            >
              Start your 30-day free trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </article>

      <SiteFooter />
    </div>
  );
}
