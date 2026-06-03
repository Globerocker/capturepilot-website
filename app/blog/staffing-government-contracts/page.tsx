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
  Building2,
  TrendingUp,
  Users,
  FileText,
  Clock,
  Award,
  BarChart3,
  XCircle,
  Briefcase,
  Star,
  Search,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "market-opportunity", label: "Why Federal Staffing Is a Realistic Opportunity" },
  { id: "naics-codes", label: "NAICS Codes for Staffing Government Contracts" },
  { id: "service-contract-act", label: "The Service Contract Act: Price It Right" },
  { id: "gsa-taps", label: "GSA Schedule TAPS: Your Primary On-Ramp" },
  { id: "beyond-taps", label: "Beyond TAPS: OASIS+ and Agency Vehicles" },
  { id: "top-agencies", label: "Top Agencies Buying Staffing Services" },
  { id: "set-asides", label: "Set-Asides and Certifications That Matter" },
  { id: "first-contract", label: "Your Path to First Award" },
  { id: "mistakes", label: "Mistakes That Eliminate Staffing Proposals" },
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

export default function StaffingGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-violet-50 to-white">
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
              Staffing Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Staffing and Temporary Services Government Contracts:{" "}
            <span className="gradient-text">A Growing Market for Small Business</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Every federal agency runs on people — analysts, clerks, IT specialists, HR staff, and
            project managers who fill gaps between headcount and mission demand. Professional support
            services is the{" "}
            <strong className="text-stone-700">
              top category of services purchased by defense agencies
            </strong>{" "}
            (GAO, FY2025), and DHS alone spent over{" "}
            <strong className="text-stone-700">$1.1 billion</strong> on its PACTS professional
            services vehicle before pivoting to GSA vehicles. Staffing firms that learn the federal
            procurement system can turn recurring government demand into consistent, long-term revenue.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 3, 2026</span>
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
            id="market-opportunity"
            number="01"
            title="Why Federal Staffing Is a Realistic Opportunity"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Staffing and temporary services contracts sit at a productive intersection in federal
              procurement: agencies genuinely need the service, the work recurs reliably, and the
              barrier to entry is lower than most other federal categories. You do not need a
              specialized product, proprietary technology, or a decade of federal past performance
              to place your first government workers.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal workforce runs on contractors. Agencies face strict headcount ceilings but
              have mission demands that do not shrink when Congress limits full-time equivalents.
              The solution is contract staffing — paying a firm like yours to provide the workers
              the agency cannot directly hire. That demand is structural, not cyclical.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA size standard for NAICS 561320 (Temporary Help Services) is{" "}
              <strong className="text-stone-700">$34 million in average annual receipts</strong>.
              That means a regional staffing firm with $10–25 million in commercial revenue qualifies
              as a small business for the vast majority of federal opportunities — including set-aside
              contracts that drastically reduce your competition pool. Compare that to IT or engineering
              categories where mid-market firms routinely exceed the threshold.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal market also rewards operational consistency over flashy capabilities. An
              agency contracting officer awarding a 12-month administrative support contract wants
              evidence you can fill positions quickly, manage turnover, and keep posts covered. That
              is a story any experienced staffing firm can tell — even without a single federal
              reference on the books.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$34M",
                  label: "SBA size standard for NAICS 561320 — most regional staffing firms qualify easily",
                  color: "text-violet-600 bg-violet-50 border-violet-100",
                },
                {
                  icon: Clock,
                  stat: "$17.75",
                  label: "Federal contractor minimum wage per hour as of January 2025 (Executive Order 14026)",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: Target,
                  stat: "47%",
                  label: "DHS FY2025 small business contracting goal — nearly half of all DHS spend",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
              ].map(({ icon: Icon, stat, label, color }) => (
                <div
                  key={stat}
                  className={`animate-on-scroll rounded-xl border p-5 hover-lift ${color}`}
                >
                  <Icon className="w-5 h-5 mb-3" />
                  <p className="text-2xl font-black mb-1">{stat}</p>
                  <p className="text-xs font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The path in is more structured than commercial staffing, but it is not mysterious.
              You need SAM.gov registration, the right NAICS codes, an understanding of the Service
              Contract Act, and a vehicle like the GSA Schedule 736 TAPS that lets agencies buy
              from you. Each of those steps is covered below.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="naics-codes"
            number="02"
            title="NAICS Codes for Staffing Government Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The NAICS code on a solicitation determines your size standard, your set-aside
              eligibility, and sometimes your ability to compete at all. Staffing companies often
              qualify under multiple NAICS codes — but registering the wrong one in SAM.gov or
              responding to a solicitation under a different NAICS than listed will create compliance
              problems. Know these cold.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  code: "561320",
                  label: "Temporary Help Services",
                  size: "$34M revenue",
                  desc: "Your primary code for placing temporary workers at client sites — the government version of commercial temp staffing. Covers administrative, clerical, technical, and professional placements. This is the code most staffing solicitations carry.",
                  primary: true,
                },
                {
                  code: "561311",
                  label: "Employment Placement Agencies",
                  size: "$17.5M revenue",
                  desc: "Direct placement of permanent employees rather than temporary staff. Some agencies use this code when the contract purpose is identifying and placing full-time hires. Less common but relevant for recruiting-focused firms.",
                  primary: false,
                },
                {
                  code: "561330",
                  label: "Professional Employer Organizations",
                  size: "$41.5M revenue",
                  desc: "Co-employment arrangements where the PEO handles HR, payroll, and benefits. Used on some long-term staffing vehicles where the contractor takes on HR administration functions. Less frequent in federal work but growing.",
                  primary: false,
                },
                {
                  code: "541612",
                  label: "Human Resources Consulting Services",
                  size: "$22M revenue",
                  desc: "HR project work — workforce planning, compensation analysis, HR policy development. Relevant if your firm offers consulting alongside placements. Many agencies assign this code to workforce advisory contracts.",
                  primary: false,
                },
              ].map((item) => (
                <div
                  key={item.code}
                  className={`rounded-xl border p-5 ${
                    item.primary
                      ? "border-blue-200 bg-blue-50"
                      : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span
                      className={`font-mono text-sm font-bold px-2 py-0.5 rounded ${
                        item.primary
                          ? "bg-blue-200 text-blue-900"
                          : "bg-stone-200 text-stone-700"
                      }`}
                    >
                      {item.code}
                    </span>
                    <span className="font-semibold text-stone-800">{item.label}</span>
                    <span className="text-xs text-stone-500 ml-auto">Size: {item.size}</span>
                    {item.primary && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <Callout icon={Search} color="blue" title="Verify Before You Bid">
              Always check the NAICS code listed in the actual solicitation — not what you assume
              the contract covers. Contracting officers sometimes assign 561320 to what looks like
              a professional services contract, or vice versa. If you respond under a different code
              than stated in the solicitation, you may be disqualified on administrative grounds
              before an evaluator reads your technical approach. Use{" "}
              <Link href="/features/quick-checker" className="text-blue-800 underline font-semibold">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to instantly confirm your size standard eligibility for any NAICS before you invest
              time in a proposal.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Register all applicable NAICS codes in your SAM.gov profile — not just your primary
              code. Contracting officers and procurement forecasting tools filter by NAICS when
              building their vendor lists. If 541612 is not in your SAM profile and a contracting
              officer searches that code, you do not appear. This is a free, one-time fix that
              significantly expands your discoverability across{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                opportunity matching tools
              </Link>{" "}
              and agency small business office outreach.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="service-contract-act"
            number="03"
            title="The Service Contract Act: Price It Right or Lose Money"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The McNamara-O&apos;Hara Service Contract Act (SCA) applies to virtually every federal
              staffing contract worth more than $2,500. It is the pricing rule most new entrants
              ignore and the one that most consistently turns a winning bid into an unprofitable
              contract.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SCA requires you to pay each worker the prevailing wage for their job
              classification in the county where they work. Those rates are set by the Department of
              Labor and published as Wage Determinations on SAM.gov. The wage varies by occupation,
              by geographic area, and by skill level. A general clerk in Washington DC earns a
              different SCA-determined wage than one in Tulsa. An IT specialist is a different
              occupational category from an administrative assistant — different wage, different
              fringe, different math.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              On top of wages, Executive Order 14026 set the federal contractor minimum wage at{" "}
              <strong className="text-stone-700">$17.75 per hour</strong> effective January 1,
              2025. If the SCA wage determination for a given position in a given county falls below
              $17.75, you must pay the EO minimum instead. If the determination is higher, pay the
              higher rate. The floor matters; it directly affects your cost model for lower-wage
              administrative positions.
            </p>

            <div className="bg-stone-900 rounded-2xl p-6 my-8 animate-on-scroll">
              <p className="text-violet-400 font-mono text-xs mb-3 uppercase tracking-widest">
                Staffing Pricing Stack — How Costs Layer
              </p>
              <div className="space-y-2 text-sm font-mono">
                {[
                  { label: "Base wage (SCA wage determination for position/county)", value: "varies" },
                  { label: "EO 14026 minimum floor (effective Jan 1, 2025)", value: "$17.75/hr" },
                  { label: "H&W fringe benefit (2025 DOL rate)", value: "+ $5.55/hr" },
                  { label: "FICA, FUTA, SUTA (employer payroll taxes)", value: "+ ~$2.80/hr" },
                  { label: "Workers' comp insurance (varies by classification)", value: "+ $0.80–$2.50/hr" },
                  { label: "Recruiter cost amortized per placement", value: "+ $0.50–$1.50/hr" },
                  { label: "Turnover/bench cost (budget for 15–25% vacancy)", value: "+ 5–10%" },
                  { label: "Overhead and G&A", value: "+ 15–25%" },
                  { label: "Profit margin", value: "+ 8–15%" },
                ].map((line) => (
                  <div key={line.label} className="flex justify-between text-stone-300">
                    <span>{line.label}</span>
                    <span className="text-white font-bold ml-4 shrink-0">{line.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-stone-700 text-xs text-stone-400">
                Pull the wage determination from the solicitation (listed by DOL WD number) before
                touching your spreadsheet. Find current determinations at SAM.gov under Wage
                Determinations. Use the GSA CALC tool at buy.gsa.gov to benchmark awarded rates for
                similar labor categories.
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Staffing contracts carry an additional cost that security and facilities contracts do
              not always face at the same scale: turnover. Temporary workers move on. A filled
              position in month one may need to be refilled in month four. If your pricing assumes
              100% utilization with zero gaps, you will eat recruitment costs every time a worker
              exits. Build a vacancy and re-staffing budget into every proposal.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="Use the CALC Tool Before Pricing">
              The GSA Contract-Awarded Labor Category (CALC) tool at{" "}
              <strong>buy.gsa.gov/pricing</strong> shows awarded prices from existing GSA Schedule
              holders for comparable labor categories — by education level, years of experience,
              and geographic area. It does not set your price for you, but it tells you whether
              your proposed rates are in the competitive range before you submit. If you are 40%
              above the median for a given LCAT, you need either a compelling differentiator or a
              revised cost model.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Option year escalation is another SCA trap. Wage determinations update annually.
              If you price all five option years at today&apos;s rates without an escalation buffer,
              you will face mandatory wage increases in years two through five with no ability to
              pass them through. Check whether the solicitation includes an Economic Price
              Adjustment (EPA) clause. If it does, understand the mechanism. If it does not, build
              3–5% annual escalation into your option year pricing — it is better to price
              conservatively and win than to win and bleed out over four option years. The same
              principle applies in any service contract, as discussed in the full{" "}
              <Link
                href="/blog/government-contract-pricing-strategies"
                className="text-blue-700 hover:underline"
              >
                government contract pricing strategy guide
              </Link>
              .
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/20 rounded-xl shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Check Your Eligibility for Staffing Set-Asides
                </h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  Answer eight questions and CapturePilot tells you which set-aside programs your
                  staffing firm qualifies for, your size standard status across all relevant NAICS
                  codes, and which contract vehicles are your fastest path to first award.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="gsa-taps"
            number="04"
            title="GSA Schedule TAPS: Your Primary On-Ramp"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Temporary and Administrative Professional Staffing (TAPS) program — GSA Schedule
              736 — is the federal government&apos;s primary vehicle for purchasing temporary staffing
              services. Getting on TAPS puts you in front of more than 70 federal agencies without
              requiring a separate competition for each one. An agency contracting officer can
              issue a task order directly against your schedule rates.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              TAPS covers a broad spectrum of occupations organized into five Special Item Numbers
              (SINs). Before applying, identify which SINs match your firm&apos;s actual service
              capabilities — you are only approved for the SINs you can demonstrate experience in.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 border border-stone-700 font-bold">SIN</th>
                    <th className="text-left p-3 border border-stone-700 font-bold">Category</th>
                    <th className="text-left p-3 border border-stone-700 font-bold">Typical Roles</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      sin: "736-1",
                      cat: "Administrative Support and Clerical Occupations",
                      roles: "Receptionists, data entry operators, typists, office clerks, mail room staff",
                    },
                    {
                      sin: "736-3",
                      cat: "General Services and Support",
                      roles: "Facilities support, fleet coordinators, records management, logistics assistants",
                    },
                    {
                      sin: "736-4",
                      cat: "Information and Arts Occupations",
                      roles: "Technical writers, editors, graphic designers, photographers, translators",
                    },
                    {
                      sin: "736-5",
                      cat: "Technical and Professional Occupations",
                      roles: "Program analysts, budget analysts, contract specialists, HR generalists, IT support",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.sin}
                      className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="p-3 border border-stone-200 font-mono font-bold text-blue-700">
                        {row.sin}
                      </td>
                      <td className="p-3 border border-stone-200 font-semibold text-stone-800">
                        {row.cat}
                      </td>
                      <td className="p-3 border border-stone-200 text-stone-500">{row.roles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              TAPS has built-in time limits that differ from commercial staffing: temporary
              placements run from an initial period of up to 120 workdays, extendable to a maximum
              of 240 workdays. After 240 workdays, agencies must use a different acquisition
              mechanism. That ceiling means TAPS works best for surge coverage, project-based
              support, and backfill situations — not multi-year embedded contractor programs, which
              route through OASIS+ or agency-specific IDIQs instead.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Applying for TAPS requires submitting an offer through the GSA eOffer portal,
              demonstrating past performance in the SINs you are applying for, and passing GSA&apos;s
              review of your financial and compliance standing. The process typically takes three to
              six months from submission to award. Once approved, your schedule rates are your
              negotiated ceiling — agencies can order at or below those rates.
            </p>

            <Callout icon={Award} color="violet" title="TAPS Tip: Start Narrow">
              Apply for the SINs you can immediately support with documented past performance.
              You can add SINs to your schedule later through a modification. Applying for all
              four SINs with thin references across all of them is weaker than applying for one
              SIN with three strong, relevant references. GSA reviewers scrutinize past performance
              relevancy — a SIN 736-5 approval requires evidence of technical and professional
              placements, not just admin work.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Once on TAPS, do not wait for orders to arrive. Proactively reach out to agency small
              business offices, attend OSDBU (Office of Small and Disadvantaged Business
              Utilization) matchmaking events, and use{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                CapturePilot&apos;s opportunity matching
              </Link>{" "}
              to monitor for Sources Sought notices and BPA solicitations where TAPS holders are
              specifically invited to respond. Having a schedule number does not generate business
              by itself — you still have to sell.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="beyond-taps"
            number="05"
            title="Beyond TAPS: OASIS+ and Agency-Specific Vehicles"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              TAPS is the entry point. For firms ready to pursue larger, longer-term professional
              services work — program support, management consulting, integrated administrative
              services — the procurement landscape has shifted significantly. Understanding where
              the volume is moving determines which vehicles to invest in.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
              {[
                {
                  title: "GSA OASIS+",
                  badge: "High Value",
                  badgeColor: "bg-violet-100 text-violet-700",
                  points: [
                    "Multi-agency IDIQ for complex professional and management support services",
                    "DHS pivoted to OASIS+ after cancelling the $10B+ PACTS III vehicle in 2025",
                    "Covers administrative, management, financial, and technical services",
                    "Task order competitions among on-contract firms — competitive but rewarding",
                    "Requires demonstrated past performance on comparable scope and complexity",
                  ],
                  icon: TrendingUp,
                  iconColor: "text-violet-600",
                },
                {
                  title: "Agency-Specific BPAs and IDIQs",
                  badge: "Targeted Access",
                  badgeColor: "bg-blue-100 text-blue-700",
                  points: [
                    "Individual agencies issue their own multi-year staffing vehicles",
                    "VA BPAs for administrative support at medical centers — often veteran set-asides",
                    "DoD component staffing IDIQs for program support at specific installations",
                    "Smaller competition pools than government-wide vehicles",
                    "On-contract firms get preferential access to new task orders",
                  ],
                  icon: Briefcase,
                  iconColor: "text-blue-600",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-stone-200 p-6 bg-stone-50 hover-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The DHS PACTS story is instructive. The department spent over $1.1 billion on PACTS
              II — a professional administrative, clerical, and technical services vehicle — before
              announcing in 2025 that it was cancelling PACTS III. The official rationale was that
              OASIS+ and GSA Multiple Award Schedules provided redundant, equivalent solutions.
              That decision means billions in DHS staffing spend is now flowing through GSA vehicles
              rather than DHS-specific ones. If you want DHS work, get on the GSA vehicles where
              DHS now orders.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For staffing firms targeting defense work specifically, DoD program offices frequently
              use SeaPort-NxG, EAGLE II successors, and component-level vehicles. Check DoD
              agency procurement forecasts — published by each branch&apos;s OSBP — to identify
              upcoming competitions in your area. The{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                intelligence module
              </Link>{" "}
              in CapturePilot tracks award history and upcoming recompetes on existing vehicles so
              you can time your market entry.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="IDIQ On-Ramp Timing Is Everything">
              Most large IDIQ vehicles for staffing services run five-year ordering periods with
              periodic on-ramping for new awardees. If you miss the primary on-ramp, your next
              opportunity to compete for a slot may be years away. Monitor{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline font-semibold">
                Sources Sought notices
              </Link>{" "}
              and procurement forecasts 12 to 18 months before you want to be on-contract.
              Responding to pre-solicitation notices puts your firm on the contracting officer&apos;s
              radar before the RFP drops.
            </Callout>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="top-agencies"
            number="06"
            title="Top Agencies Buying Staffing Services"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Not every agency buys staffing the same way. Understanding which agencies are
              consistent buyers, what they purchase, and how they prefer to contract for it will
              focus your business development effort on the highest-probability targets.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-50">
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Agency</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">What They Buy</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Key Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      agency: "Department of Defense (DoD)",
                      what: "Program analysts, administrative support, HR specialists, budget analysts at commands and program offices",
                      notes: "Professional support services is the #1 service category across defense agencies (GAO FY2025). Clearance requirements vary by position and location.",
                    },
                    {
                      agency: "Department of Veterans Affairs (VA)",
                      what: "Healthcare administrative support, benefits processing staff, IT help desk, HR generalists",
                      notes: "VA has a statutory preference for SDVOSB/VOSB firms. Many staffing BPAs are veteran set-asides. Stable, recurring demand tied to veteran population growth.",
                    },
                    {
                      agency: "Department of Homeland Security (DHS)",
                      what: "Admin support, program analysts, technical specialists across CBP, ICE, FEMA, and USCIS",
                      notes: "Historical PACTS buyer; now routing through GSA OASIS+ and MAS. DHS FY2025 small business goal: 47%. SDVOSB and WOSB set-asides common.",
                    },
                    {
                      agency: "HHS (NIH, CDC, FDA, CMS)",
                      what: "Research support, public health analysts, regulatory admin staff, data management",
                      notes: "A large historical buyer, though the administration announced 35% cuts to HHS contract spending in 2025. Monitor recompetes closely; workforce reductions create gaps agencies still need to fill.",
                    },
                    {
                      agency: "General Services Administration (GSA)",
                      what: "Administrative support for internal GSA operations, shared services, facilities management staff",
                      notes: "GSA buys staffing through its own TAPS schedule. Smaller dollar volumes but good for building a federal reference.",
                    },
                    {
                      agency: "Department of Justice (DOJ)",
                      what: "Legal admin support, paralegal staff, records management, data entry for case files",
                      notes: "Background investigation requirements for most DOJ positions are thorough. Longer vetting timelines affect your fill speed — factor that into your staffing plan.",
                    },
                  ].map((row) => (
                    <tr key={row.agency} className="border-b border-stone-100 hover:bg-stone-50">
                      <td className="p-3 border border-stone-200 font-semibold text-stone-800">
                        {row.agency}
                      </td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.what}</td>
                      <td className="p-3 border border-stone-200 text-stone-500">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you are choosing where to focus first, the VA and DoD represent the most stable
              demand with the most structured small business pathways. The VA&apos;s veteran preference
              means that if you hold an SDVOSB or VOSB certification, you are competing in a
              significantly smaller pool for a very large buyer. DoD&apos;s sheer size means there are
              staffing needs at virtually every installation, program office, and base — geographic
              proximity can be a real advantage here.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Check each agency&apos;s OSDBU (Office of Small and Disadvantaged Business Utilization)
              website for their annual procurement forecast. These documents list anticipated
              contracts, estimated dollar values, anticipated set-aside types, and expected
              solicitation timelines — often nine to twelve months in advance. That lead time is
              what separates firms that respond to RFPs from firms that shape them. Learn how to
              use the{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline">
                Sources Sought process
              </Link>{" "}
              to get your firm known before the solicitation hits SAM.gov.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="set-asides"
            number="07"
            title="Set-Asides and Certifications That Matter"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Staffing and temporary services contracts are frequently set aside for small
              businesses with socioeconomic certifications. Because the work is straightforward to
              scope and easy to verify (you either filled the positions or you did not), agencies
              are comfortable setting these contracts aside for smaller pools. That is an advantage
              for certified firms.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  cert: "SDVOSB / VOSB",
                  icon: Award,
                  color: "border-violet-200 bg-violet-50",
                  iconColor: "text-violet-600",
                  desc: "Service-Disabled Veteran-Owned and Veteran-Owned Small Business certifications are the highest-value set-aside for staffing firms targeting the VA. The VA&apos;s statutory preference requires awarding to SDVOSBs first, then VOSBs, before opening competition to other small businesses. Staffing is one of the highest-volume categories where this preference operates. If you or your primary owner is a veteran, this certification can make you effectively the only qualified bidder on specific contracts.",
                  link: "/blog/sdvosb-contracts-guide",
                  linkText: "SDVOSB contracting guide",
                },
                {
                  cert: "8(a) Business Development",
                  icon: Star,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  desc: "8(a) certification allows contracting officers to award staffing contracts on a sole-source basis up to $4.5 million without competition. If a CO knows your firm and wants to build a relationship, they can direct the work to you through the 8(a) program. This is one of the fastest ways to establish documented federal past performance without winning a full competition.",
                  link: "/blog/8a-sole-source-contracts",
                  linkText: "8(a) sole source guide",
                },
                {
                  cert: "WOSB / EDWOSB",
                  icon: Users,
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                  desc: "Women-Owned Small Business and Economically Disadvantaged WOSB certifications open set-aside competitions in industries where women-owned firms are underrepresented. Staffing services falls within industry groups where WOSB set-asides apply. DHS set a 5% WOSB goal for FY2025 — that goal drives contracting officers to actively seek WOSB firms for appropriate requirements.",
                  link: "/blog/wosb-certification-guide",
                  linkText: "WOSB certification guide",
                },
                {
                  cert: "HUBZone",
                  icon: Building2,
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                  desc: "If your principal office is in a historically underutilized business zone and 35% of your employees reside in HUBZones, you qualify for a 10% price evaluation preference in competitive acquisitions. On a $2 million staffing contract, that preference lets you bid up to $200,000 higher than a non-HUBZone competitor and still win on evaluated price. In a market where margins are narrow, that preference is real money.",
                  link: "/blog/hubzone-program-guide",
                  linkText: "HUBZone program guide",
                },
              ].map((item) => (
                <div key={item.cert} className={`rounded-xl border p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    <h3 className="font-bold text-stone-800">{item.cert}</h3>
                  </div>
                  <p className="text-sm text-stone-600 mb-2">{item.desc}</p>
                  <Link href={item.link} className="text-xs font-semibold text-blue-700 hover:underline">
                    Read the {item.linkText} →
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Certifications take time. The CVE (Center for Verification and Evaluation) process
              for SDVOSB/VOSB and the SBA&apos;s 8(a) application both require documentation, owner
              verification, and agency review that can take three to six months. Start the process
              before you are ready to bid — not after. Use the{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                Quick Checker
              </Link>{" "}
              for a fast read on which programs you likely qualify for, then review the full{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-blue-700 hover:underline">
                federal contracting certifications guide
              </Link>{" "}
              for program-specific requirements and timelines.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-stone-200 rounded-xl shrink-0">
                <BarChart3 className="w-6 h-6 text-stone-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Track Every Staffing Opportunity in One Pipeline
                </h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-700 hover:underline font-semibold">
                    pipeline manager
                  </Link>{" "}
                  tracks federal staffing solicitations from Sources Sought through proposal
                  submission. Built-in PWin scoring shows you where to focus. Start your 30-day
                  free trial and build your federal staffing pipeline today.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="first-contract"
            number="08"
            title="Your Path to First Award"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The hardest part of entering the federal staffing market is the same challenge that
              faces every new federal contractor:{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 hover:underline">
                past performance
              </Link>
              . Agencies want documented federal experience; you need a federal award to get it.
              The sequence below breaks that cycle without requiring you to wait years for the right
              opportunity.
            </p>

            <div className="space-y-4 my-8 animate-on-scroll">
              {[
                {
                  step: "01",
                  title: "Register in SAM.gov with the right NAICS codes",
                  desc: "Get your UEI, complete SAM.gov registration, and add all applicable NAICS codes — 561320 as primary plus any secondary codes that match your service lines. This is the prerequisite for every federal opportunity and most GSA schedule applications.",
                  icon: FileText,
                },
                {
                  step: "02",
                  title: "Apply for set-aside certifications immediately",
                  desc: "SDVOSB/VOSB through the VA's Center for Verification and Evaluation, WOSB through SBA, 8(a) through SBA, HUBZone through SBA. The certification processes run in parallel with your business development — start them now. Most take 3–6 months.",
                  icon: Award,
                },
                {
                  step: "03",
                  title: "Build state and local government past performance",
                  desc: "County offices, state agencies, municipal governments — they buy staffing services and their contracts are less competitive than federal. A documented 12-month performance with a government client (any level) is worth more in your federal proposal than three years of private-sector references.",
                  icon: Building2,
                },
                {
                  step: "04",
                  title: "Subcontract under a federal prime contractor",
                  desc: "Contact firms already holding federal staffing contracts — visible on USASpending.gov — and offer to perform subcontract work. Documented subcontract performance under a federal prime counts as past performance in most solicitations.",
                  link: "/blog/subcontracting-government-contracts",
                  linkText: "Guide to federal subcontracting",
                  icon: Users,
                },
                {
                  step: "05",
                  title: "Apply for GSA Schedule 736 TAPS",
                  desc: "Once you have one or two relevant past performance references, apply for TAPS in the SINs you can support. The schedule is your government-credentialed vehicle that lets agencies place orders without a separate competition. This is the single highest-leverage action a new staffing firm can take.",
                  icon: Target,
                },
                {
                  step: "06",
                  title: "Compete for task orders and agency BPAs",
                  desc: "After 12–18 months of TAPS sales and documented federal performance, pursue agency-specific BPAs and IDIQ vehicles in your target markets. These vehicles carry far more volume than individual TAPS task orders and can transform a small staffing business into a major federal player.",
                  icon: TrendingUp,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-stone-50 animate-on-scroll hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-4 h-4 text-stone-500" />
                      <h3 className="font-bold text-stone-800">{item.title}</h3>
                    </div>
                    <p className="text-sm text-stone-600">
                      {item.desc}
                      {item.link && (
                        <>
                          {" "}
                          <Link href={item.link} className="text-blue-700 hover:underline font-medium">
                            {item.linkText}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="sky" title="Your Capability Statement Opens Doors">
              Federal contracting officers and small business specialists evaluate staffing firms
              partly on the professionalism of their{" "}
              <Link href="/features/capability-statement" className="text-sky-800 underline font-semibold">
                capability statement
              </Link>
              . A weak or generic one-pager signals that you have not yet learned the federal
              market. Tailor your capability statement to each target agency: use their language,
              reference the specific mission areas you support, and highlight your recruiting
              reach in the geographic areas they care about.{" "}
              <Link href="/blog/capability-statement-examples" className="text-sky-800 underline font-semibold">
                See what good ones look like
              </Link>
              .
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Many staffing firms underestimate how important the government contracting pipeline
              discipline is. Federal opportunities move on timelines that commercial staffing does
              not — a solicitation posted today might have a 30-day response window and a six-month
              award decision cycle. Without a structured{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline">
                contract pipeline
              </Link>
              , firms miss opportunities they could have won and pursue ones they cannot realistically
              serve. Track every opportunity from Sources Sought through award.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="mistakes"
            number="09"
            title="Mistakes That Eliminate Staffing Proposals"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most staffing firms that lose federal proposals do not lose on capability — they lose
              on process errors that an experienced GovCon firm never makes. These are the patterns
              that kill staffing bids.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  title: "Pricing without the SCA wage determination",
                  desc: "Submitting a price based on your commercial labor costs without pulling the DOL wage determination for the contract&apos;s location and occupational classifications. If the SCA rate is $22/hour and you priced at $18, you are non-compliant on day one of performance.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "No clearance pipeline for positions requiring investigations",
                  desc: "Many federal staffing positions — even administrative ones — require a background investigation or security clearance. Winning a contract where every candidate needs a Tier 2 investigation and then discovering your candidate pool cannot pass is a post-award disaster. Verify clearance requirements before bidding and build a vetted candidate pipeline for cleared positions.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Ignoring turnover costs in the pricing model",
                  desc: "Temporary staffing has structural turnover — workers leave, agencies need replacements, you absorb the re-recruiting cost. If your price assumes 100% utilization with zero gaps, you will lose money on every replacement hire. Price for 80–85% effective utilization and include a bench.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Vague labor category definitions",
                  desc: "Proposals that describe labor categories without specifying education requirements, years of experience, certifications, and relevant skills get scored lower on technical evaluation. Agencies want to know exactly who you will place. Define each LCAT precisely against the solicitation&apos;s requirements.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Missing the TAPS ordering limit",
                  desc: "TAPS placements cap at 240 workdays per position. If your technical approach describes multi-year embedded support using TAPS as the vehicle, the agency will flag it as a TAPS misuse. Long-term embedded staffing runs through OASIS+ or agency IDIQs, not TAPS. Know your vehicle&apos;s limits and propose accordingly.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "No quality control plan for personnel management",
                  desc: "Agencies want to know how you handle a no-show at 7am, how you manage a performance issue, and how you ensure consistent quality across rotating workers. A vague QCP — 'we will monitor performance and replace underperforming staff' — is a red flag. A specific plan with supervisor names, coverage protocols, and documented escalation procedures is a differentiator.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border p-5 ${item.color}`}>
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-sm leading-relaxed opacity-90">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={CheckCircle2} color="emerald" title="Use the Bid Checklist">
              Before submitting any staffing proposal, run through CapturePilot&apos;s{" "}
              <Link href="/resources/bid-checklist" className="text-emerald-800 underline font-semibold">
                federal bid checklist
              </Link>
              . It covers the compliance requirements, pricing documentation, past performance
              references, and technical submission elements that get proposals disqualified before
              an evaluator reads them. Five minutes of pre-submission review saves five months of
              wasted effort.
            </Callout>

            <p className="text-stone-600 leading-relaxed mt-6 mb-4">
              Federal staffing contracting rewards operational discipline. The firms that build
              durable federal staffing businesses are not the ones with the largest commercial
              books — they are the ones who price correctly, staff reliably, document performance
              carefully, and treat each federal relationship as the long-term revenue stream it is.
              Your first contract is the hard part. After that, past performance compounds.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              Use CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                opportunity matching
              </Link>{" "}
              to find staffing solicitations filtered by NAICS code, set-aside type, agency, and
              dollar range. Then use{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                competitive intelligence
              </Link>{" "}
              to research who currently holds the contract, what they were paid, and how long until
              recompete — so you know exactly when to begin your pursuit. The{" "}
              <Link href="/features/proposals" className="text-blue-700 hover:underline">
                proposals tool
              </Link>{" "}
              builds your compliance matrix from the solicitation so you never miss a requirement.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="text-center max-w-xl mx-auto">
              <Briefcase className="w-10 h-10 text-violet-400 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">
                Ready to Win Your First Federal Staffing Contract?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-8">
                CapturePilot gives staffing firms opportunity matching, compliance tools, competitive
                intelligence, and a pipeline built for the federal procurement cycle. Book a strategy
                call and map out your path from SAM.gov registration to TAPS award.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-white/20"
                >
                  Check eligibility free
                </a>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
