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
  Award,
  BarChart3,
  Shield,
  Zap,
  Building2,
  Leaf,
  Settings,
  XCircle,
  Users,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "market-size", label: "The Federal Energy Efficiency Market" },
  { id: "how-espcs-work", label: "How ESPCs Work: The Core Mechanic" },
  { id: "usace-matoc", label: "USACE ESPC IV MATOC: The $3 Billion Prize" },
  { id: "other-vehicles", label: "Other Key Contract Vehicles" },
  { id: "naics-codes", label: "NAICS Codes for Energy Services" },
  { id: "small-business-paths", label: "Small Business Paths Into ESPC Work" },
  { id: "esco-qualification", label: "Getting on the DOE Qualified ESCO List" },
  { id: "set-asides", label: "Set-Asides and Certifications" },
  { id: "winning-proposals", label: "What Winning ESPC Proposals Include" },
  { id: "path-in", label: "Your Step-by-Step Path In" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red" | "rose";
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
    rose: "bg-rose-50 border-rose-200 text-rose-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
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
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function EnergyGovernmentContractsPage() {
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
            <span className="text-stone-900 font-medium">
              Energy Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Energy Service Contracts (ESPC):{" "}
            <span className="gradient-text">How Contractors Win Federal Energy Efficiency Work</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government has invested{" "}
            <strong className="text-stone-700">$8.9 billion in energy efficiency through ESPCs since 1998</strong>,
            generating $19.3 billion in cumulative savings — at zero upfront cost to agencies. The
            Army Corps of Engineers awarded a new{" "}
            <strong className="text-stone-700">$3 billion ESPC MATOC in June 2025</strong>, three months
            ahead of schedule. This is a specialized but highly lucrative market, and most energy
            contractors do not know how to get in.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>17 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 17, 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-700 transition-colors py-1"
                >
                  <span className="text-emerald-600 font-mono text-xs">
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
            id="market-size"
            number="01"
            title="The Federal Energy Efficiency Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government is the single largest energy consumer in the United States.
              It operates more than{" "}
              <strong className="text-stone-800">360,000 buildings</strong>, manages massive fleets,
              and runs installations that run 24 hours a day. Reducing that footprint is both a
              legal mandate and an economic priority — agencies are required by statute to improve
              energy efficiency, but most do not have capital budgets to fund upgrades out-of-pocket.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              That funding gap is where private contractors come in. Energy Savings Performance
              Contracts — ESPCs — let agencies upgrade lighting, HVAC, building controls, renewable
              generation, and water systems using energy savings to repay the contractor over time.
              The agency pays nothing upfront. The contractor finances and installs the improvements,
              then collects payments from the savings the project generates. If the savings fall
              short, the contractor eats the difference.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$8.9B",
                  label: "Invested in federal ESPC projects since 1998 through the DOE IDIQ program alone",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: TrendingUp,
                  stat: "$19.3B",
                  label: "Cumulative energy cost savings delivered to federal agencies by DOE IDIQ ESPCs",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: Building2,
                  stat: "$3B",
                  label: "USACE ESPC IV MATOC awarded June 2025 — the Army's largest energy services vehicle",
                  color: "text-amber-600 bg-amber-50 border-amber-100",
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
              Beyond ESPCs, a parallel mechanism called the Utility Energy Service Contract (UESC)
              allows agencies to work directly with their serving utility on energy improvements —
              with the utility acting as prime contractor and typically subcontracting the actual
              work to energy services firms. Both vehicles are active, large, and open to contractors
              who understand how they work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The market has also been reshaped by the Inflation Reduction Act, which allocated{" "}
              <strong className="text-stone-800">$3.4 billion to GSA</strong> specifically for
              energy-efficient building upgrades at federal facilities. GSA awarded a $210 million
              energy conservation contract in January 2025, a $183 million contract for the Denver
              Federal Center in January 2025, and a $120 million contract in November 2024 — all
              within a single quarter. The capital is available. The question for contractors is
              whether they know how to reach it.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="ESPC ENABLE Was Retired in March 2025">
              <p>
                On March 12, 2025, GSA retired the ESPC ENABLE program — a streamlined vehicle
                that previously allowed agencies to initiate smaller ESPC projects through the
                GSA Supply Schedule. No new task orders can be issued under ENABLE. Existing
                ENABLE projects continue through their performance periods. If you were pursuing
                ENABLE opportunities, the primary paths forward are now the DOE IDIQ ESPC, the
                USACE ESPC IV MATOC, and direct agency ESPCs under individual agency authority.
                Adjust your pipeline accordingly.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Does Your Energy Business Qualify for Federal Contracts?
                </h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Check your ESPC eligibility, ESCO qualifications, and set-aside status in under
                  two minutes. No jargon, no guesswork.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="how-espcs-work"
            number="02"
            title="How ESPCs Work: The Core Mechanic"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Understanding how an ESPC is structured is the prerequisite for competing on one.
              The contract mechanism is unusual by normal procurement standards — it is performance-based
              in a literal sense. The Energy Service Company (ESCO) guarantees that its improvements
              will generate a specified level of energy savings. If savings fall short of the guarantee,
              the ESCO compensates the agency for the shortfall. If savings exceed the guarantee,
              the agency captures the surplus.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Investment Grade Audit (IGA)",
                  detail:
                    "Before a contract is signed, the ESCO conducts a detailed audit of the federal facility — measuring energy consumption, identifying improvement opportunities (lighting, HVAC, controls, renewable generation, water), and projecting the savings each measure will produce. The IGA underpins the guaranteed savings figure in the contract. Its quality determines whether you win and whether you profit over the performance period.",
                },
                {
                  step: "02",
                  title: "Contract Execution and Financing",
                  detail:
                    "The ESCO finances the capital improvements — typically through third-party project financing — and installs the equipment. The agency pays nothing upfront. Project financing for ESPCs usually comes from specialized energy finance providers who understand government payment security. As an ESCO, your ability to arrange financing at competitive rates is a direct competitive differentiator.",
                },
                {
                  step: "03",
                  title: "Construction and Installation",
                  detail:
                    "The ESCO manages construction and equipment installation. Federal facilities have specific access requirements, security protocols, and continuity-of-operations constraints. Military installations add force protection and badging requirements that can add weeks to mobilization. Budget for this in your project timeline.",
                },
                {
                  step: "04",
                  title: "Measurement and Verification (M&V)",
                  detail:
                    "After installation, the ESCO measures actual energy savings against the guaranteed baseline annually. M&V is a specialized discipline with its own protocols (IPMVP — International Performance Measurement and Verification Protocol is the standard). The ESCO must employ or subcontract M&V expertise to maintain the savings guarantee throughout the contract term — typically 15 to 25 years.",
                },
                {
                  step: "05",
                  title: "Repayment Over the Performance Period",
                  detail:
                    "The agency repays the ESCO from energy cost savings over the contract term. Payments are structured so they do not exceed savings — the agency is never supposed to pay more than it saves. Interest rates, savings projections, and energy price assumptions must all be modeled carefully to keep the project financeable and profitable for the full term.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-5 animate-on-scroll">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                      <span className="font-black text-emerald-700 text-sm">{step}</span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-black text-stone-900 mb-1">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The performance period can run up to 25 years under federal ESPC authority.
              That is a long tail of guaranteed revenue — but also a long tail of liability if
              the savings guarantee is not met. ESCOs that win large federal projects and manage
              them well can generate predictable revenue streams for decades. ESCOs that
              overestimate savings in the IGA phase face claw-backs for the entire term.
            </p>

            <Callout icon={Lightbulb} color="sky" title="ESPC vs. UESC: Know the Difference">
              <p>
                An ESPC contract is between the federal agency and an ESCO (energy service company).
                A UESC is between the federal agency and its serving utility — the utility is the prime,
                and often subcontracts ESCO-type work to energy firms. Under a UESC, the utility must
                file annual small business subcontracting plans with GSA. That small business
                subcontracting requirement is your entry point if you are not a utility. ESPCs are
                directly competed among ESCOs; UESCs funnel work through utilities. Both mechanisms
                are active and represent different entry strategies for the same federal energy
                efficiency market.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="usace-matoc"
            number="03"
            title="USACE ESPC IV MATOC: The $3 Billion Prize"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              In June 2025, the U.S. Army Engineering and Support Center, Huntsville (Huntsville
              Center) awarded the ESPC IV Multiple Award Task Order Contract — a{" "}
              <strong className="text-stone-800">$3 billion vehicle</strong> with 18 MATOC holders
              and a 10-year performance period (one five-year base, one five-year option). The
              award came three months ahead of schedule. It covers energy savings performance contract
              projects at federal facilities inside and outside the United States.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Eighteen companies hold positions on ESPC IV. One of them is a small business —
              GreenGen — which was the only small business awarded a spot. The remaining 17 holders
              are predominantly large energy services companies. The contract includes
              on-ramping provisions, which means additional small businesses may be added during
              the performance period.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Detail</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { detail: "Awarding Agency", value: "USACE Huntsville Center (HNC)" },
                    { detail: "Contract Ceiling", value: "$3 billion" },
                    { detail: "Number of MATOC Holders", value: "18 companies" },
                    { detail: "Small Business Holders", value: "1 (GreenGen) — on-ramping open for more" },
                    { detail: "Period of Performance", value: "10 years (5-year base + 5-year option)" },
                    { detail: "Award Date", value: "June 2025 (3 months early)" },
                    { detail: "Geographic Scope", value: "Federal facilities inside and outside the US" },
                    { detail: "How Task Orders Are Competed", value: "Among the 18 MATOC holders for each project" },
                    { detail: "Authority", value: "10 USC 2913 (ESPC statutory authority)" },
                  ].map(({ detail, value }) => (
                    <tr key={detail} className="hover:bg-stone-50">
                      <td className="px-4 py-3 font-bold text-stone-700">{detail}</td>
                      <td className="px-4 py-3 text-stone-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you are not on ESPC IV today, the on-ramping provisions are your most direct path.
              Huntsville Center has used on-ramps on prior ESPC vehicles, and the solicitation
              language for ESPC IV explicitly includes the possibility. Watch SAM.gov for any
              solicitation notice from Huntsville Center related to ESPC IV on-ramp — when it
              appears, responding quickly with a compliant package is essential.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              In the meantime, if you have energy services capabilities but are not on ESPC IV,
              pursuing subcontracting with the 18 current holders is the realistic near-term path.
              Holders are required to submit small business subcontracting plans and are actively
              looking for qualified subcontractors for each task order they pursue. Lighting,
              controls, HVAC, renewable energy, M&V, and project finance are all areas where
              subcontractors with deep technical expertise are in demand.
            </p>

            <Callout icon={Award} color="emerald" title="The Prior ESPC MATOC: $1.5B to 14 Companies">
              <p>
                The USACE previously held a $1.5 billion ESPC MATOC that awarded spots to 14
                companies. The current ESPC IV at $3 billion represents a doubling of ceiling —
                a clear signal that the Army is accelerating its energy efficiency program. The
                prior MATOC generated substantial task order activity across military installations
                and other federal facilities. ESPC IV is expected to generate similar or greater
                volume over its 10-year term.
              </p>
            </Callout>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="other-vehicles"
            number="04"
            title="Other Key Contract Vehicles"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              USACE ESPC IV is the largest single vehicle, but it is not the only one. Federal
              energy services work flows through several parallel contract mechanisms, each with
              different entry points, agency scopes, and competitive dynamics.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  name: "DOE IDIQ ESPC",
                  agency: "Department of Energy / FEMP",
                  ceiling: "~$8.9B invested since 1998; ongoing vehicle",
                  who: "DOE-qualified ESCOs (approximately 100 firms on the list)",
                  detail:
                    "The Department of Energy's Federal Energy Management Program manages the DOE IDIQ ESPC — the primary vehicle for civilian agency ESPC work outside DoD. Since 1998, 455 projects have been awarded under this vehicle with nearly $8.9 billion invested. To compete, you must be on the DOE Qualified List of Energy Service Companies — a prerequisite that involves a formal application and review board approval. The DOE IDIQ is how most civilian federal agencies (EPA, HHS, Treasury, DHS, etc.) access ESPC work.",
                },
                {
                  name: "VA ESPC Program",
                  agency: "Department of Veterans Affairs",
                  ceiling: "Project-by-project; one SDVOSB award at $3M project investment value",
                  who: "ESCOs; VA has developed a specific SDVOSB track",
                  detail:
                    "The VA has its own ESPC procurement authority and has developed a VA-specific ESPC procurement program to use service-disabled veteran-owned small businesses. One SDVOSB has already been awarded a VA ESPC project with a project investment value of nearly $3 million. For SDVOSB firms with energy services capabilities, this is a direct and less-competitive path into federal ESPC work. The VA holds hundreds of facilities across the country — the opportunity pipeline for VA ESPC is significant.",
                },
                {
                  name: "GSA Energy Conservation Contracts",
                  agency: "General Services Administration",
                  ceiling: "$3.4B IRA allocation; individual contracts up to $210M+",
                  who: "Energy contractors, general contractors with energy capabilities, ESCOs",
                  detail:
                    "GSA has been deploying its $3.4 billion IRA allocation rapidly — three large energy conservation contracts awarded within a single quarter in late 2024 / early 2025 ($120M, $183M, $210M). These contracts cover facilities in the National Capital Region and other GSA-managed federal buildings. They are not pure ESPCs — they include direct appropriations for energy improvements — but they represent substantial work for energy contractors. GSA publishes these solicitations through SAM.gov and its eBuy platform.",
                },
                {
                  name: "Agency-Specific ESPCs",
                  agency: "DoD, DHS, DOJ, Treasury, and others",
                  ceiling: "Varies; multi-million to multi-hundred-million per project",
                  who: "DOE-qualified ESCOs, agency-approved vendors",
                  detail:
                    "Individual agencies can also execute ESPCs directly under their own procurement authority without going through DOE IDIQ or USACE MATOC vehicles. Air Force installations, Army installations, and Navy facilities have each executed significant ESPCs through agency-specific vehicles. Watch SAM.gov closely for sources sought notices and presolicitation notices from military base commands and large civilian agency facilities offices — these often precede multi-million dollar project solicitations.",
                },
              ].map(({ name, agency, ceiling, who, detail }) => (
                <div
                  key={name}
                  className="animate-on-scroll rounded-xl border border-stone-200 bg-white p-6 hover-lift"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-black text-stone-900">{name}</h3>
                    <div className="flex gap-2">
                      <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                        {agency}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                    Scale
                  </p>
                  <p className="text-sm text-stone-700 font-medium mb-3">{ceiling}</p>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                    Best for
                  </p>
                  <p className="text-sm text-stone-700 font-medium mb-3">{who}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Tracking which vehicles are accepting new vendors, which task orders are being released,
              and which agency solicitations are in the pipeline is one of the most time-consuming
              parts of federal energy services business development. Use{" "}
              <Link href="/features/intelligence" className="text-emerald-700 hover:underline font-medium">
                CapturePilot&apos;s market intelligence
              </Link>{" "}
              to get automated alerts when new ESPC and energy services opportunities appear in
              your target agency and NAICS codes.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="naics-codes"
            number="05"
            title="NAICS Codes for Federal Energy Services"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Energy services work crosses multiple NAICS categories depending on what your company
              actually does. ESCOs that serve as program prime contractors typically use different
              codes than subcontractors focused on specific technical measures. Register every code
              that applies to your actual capabilities — each one opens a different set of set-aside
              opportunities and SAM.gov search results.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">NAICS Code</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Description</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Relevant Work</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">SBA Size Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { code: "238210", desc: "Electrical Contractors", work: "Lighting retrofits, solar installations, controls wiring", size: "$19M avg annual receipts" },
                    { code: "238220", desc: "Plumbing, Heating, AC Contractors", work: "HVAC upgrades, boiler replacements, chiller retrofits", size: "$19M avg annual receipts" },
                    { code: "237990", desc: "Other Heavy & Civil Engineering Construction", work: "Large-scale facility energy infrastructure", size: "$45M avg annual receipts" },
                    { code: "541330", desc: "Engineering Services", work: "Energy engineering, ESPC project design, IGA studies", size: "$19M avg annual receipts" },
                    { code: "541690", desc: "Other Scientific & Technical Consulting", work: "Energy auditing, measurement & verification (M&V)", size: "$19M avg annual receipts" },
                    { code: "221118", desc: "Other Electric Power Generation", work: "Solar, wind, cogeneration at federal facilities", size: "250 employees" },
                    { code: "221210", desc: "Natural Gas Distribution", work: "Utility energy service contracts (UESCs)", size: "250 employees" },
                    { code: "561210", desc: "Facilities Support Services", work: "O&M as part of long-term ESPC performance", size: "$47M avg annual receipts" },
                    { code: "333415", desc: "AC, Refrigeration, Heating Equipment Manufacturing", work: "Equipment supply for HVAC retrofits", size: "750 employees" },
                    { code: "334512", desc: "Automatic Environmental Control Manufacturing", work: "Building automation systems, control panels", size: "750 employees" },
                  ].map(({ code, desc, work, size }) => (
                    <tr key={code} className="hover:bg-stone-50">
                      <td className="px-4 py-3 font-mono font-bold text-emerald-700">{code}</td>
                      <td className="px-4 py-3 text-stone-700 font-medium text-xs">{desc}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{work}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={Lightbulb} color="amber" title="NAICS Code Strategy for ESPC Primes vs. Subcontractors">
              <p>
                If you are pursuing work as an ESPC prime, register under 541330 (Engineering
                Services) and 541690 (Technical Consulting) in addition to any trade contractor
                codes. The DOE qualification process for its ESCO list uses 541690 as a primary
                code reference. For subcontractors focused on specific measures — lighting, HVAC,
                controls — the 238xxx trade codes are more relevant for direct solicitation responses.
                Check your size standard under each code separately:{" "}
                <Link href="/blog/sba-size-standards-guide" className="text-amber-900 underline font-medium">
                  SBA size standards
                </Link>{" "}
                vary significantly across these categories, and you may qualify as small under some
                but not others.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Not sure which NAICS codes apply to your specific capabilities, or whether you qualify
              as small under each? Run a quick assessment with{" "}
              <Link href="/features/quick-checker" className="text-emerald-700 hover:underline font-medium">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              before you update your SAM.gov registration.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="small-business-paths"
            number="06"
            title="Small Business Paths Into ESPC Work"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The blunt reality of the current ESPC market: most of the prime contract positions
              on major vehicles like USACE ESPC IV and the DOE IDIQ are held by large established
              energy services companies — Honeywell, Johnson Controls, Ameresco, Siemens, and similar
              firms. Small businesses compete for prime positions but face a significant qualification
              barrier. The DOE ESCO list has about 100 firms; the USACE ESPC IV MATOC has 18 holders,
              only one of which is a small business.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              That does not mean small businesses cannot win ESPC-related work. It means they need
              a realistic strategy that matches their current capabilities and certification status.
              Here are four proven paths.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Users,
                  color: "text-emerald-600",
                  path: "Subcontract to MATOC Holders",
                  detail:
                    "The 18 firms holding USACE ESPC IV positions compete against each other for each task order. When they win a task order, they need specialized subcontractors: lighting retrofit crews, HVAC technicians, controls engineers, commissioning agents, M&V specialists, and project finance advisors. MATOC holders are required to meet small business subcontracting goals and actively seek capable small firms. Reach out directly to the BD or subcontracting contact at each holder — Ameresco, Honeywell Building Solutions, Johnson Controls, Siemens, Trane Technologies, and the others have active vendor registration programs.",
                },
                {
                  icon: Shield,
                  color: "text-blue-600",
                  path: "Pursue VA ESPC Work as an SDVOSB",
                  detail:
                    "The VA has created a specific SDVOSB track for its ESPC program. One SDVOSB has already won a VA ESPC project at $3 million project investment value. The pool of SDVOSB firms with energy services capabilities is small — which means competition is limited and the VA's legal preference (the Rule of Two requires set-asides when two or more SDVOSBs can compete) works strongly in your favor. If you are veteran-owned, certified as SDVOSB, and have energy engineering or trade contractor capabilities, the VA ESPC path is your most direct route to a federal ESPC prime contract.",
                },
                {
                  icon: Leaf,
                  color: "text-teal-600",
                  path: "Serve as an ESCO on Smaller Projects",
                  detail:
                    "Not all federal ESPC projects are $10 million programs that require national ESCO firm capacity. Some agencies — particularly smaller civilian agencies, National Guard facilities, and VA medical centers — run ESPC projects in the $1M–$5M range where a smaller, well-qualified ESCO can win the prime contract directly. These often use DOE IDIQ authority, which requires DOE Qualified List membership, but the project scale is manageable for a regional or specialized firm.",
                },
                {
                  icon: Building2,
                  color: "text-amber-600",
                  path: "Work Through UESC Subcontracting",
                  detail:
                    "Under Utility Energy Service Contracts, the serving utility is the prime and must file annual small business subcontracting plans with GSA. This creates a structural demand for small business subcontractors on UESC projects — the utility needs to demonstrate it is meeting small business spending goals. Contact the federal contracting divisions of utilities that serve major federal installations (Pacific Gas & Electric, Consolidated Edison, Dominion Energy, and others depending on your region) about their UESC subcontracting programs.",
                },
              ].map(({ icon: Icon, color, path, detail }) => (
                <div key={path} className="flex gap-4 animate-on-scroll">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-stone-900 mb-2">{path}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Whichever path you pursue, a strong{" "}
              <Link href="/blog/capability-statement-examples" className="text-emerald-700 hover:underline font-medium">
                capability statement
              </Link>{" "}
              tailored to energy services is your primary business development tool. It should
              document specific projects — scope in square footage or energy units, estimated
              savings achieved, technologies deployed, and the federal or public sector clients
              served. ESPC primes and federal contracting officers both review capability statements
              before deciding who to include in a competition.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-10 rounded-2xl border-2 border-stone-200 p-8 bg-stone-50">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track ESPC and Energy Service Opportunities in Your Region
                </h3>
                <p className="text-stone-500 text-sm mb-4">
                  CapturePilot monitors DOE, USACE, GSA, and VA energy contracting across your
                  NAICS codes — sources sought, solicitations, on-ramp notices, and task orders.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-white text-stone-700 border border-stone-300 font-bold px-5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="esco-qualification"
            number="07"
            title="Getting on the DOE Qualified ESCO List"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The DOE Qualified List of Energy Service Companies is the gateway to the federal
              civilian ESPC market. Membership is required to compete for the DOE IDIQ ESPC, and
              it is also a prerequisite for the USACE MATOC and the VA IDIQ ESPC. Without it,
              you cannot compete as a prime on most federal ESPC programs. About 100 firms currently
              hold qualified status.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The qualification is governed by the Energy Policy Act of 1992 (implemented at
              10 CFR 436.32). Applications are submitted through DOE&apos;s eProject Builder system
              and reviewed by the DOE Qualification Review Board. The process is not continuous —
              DOE opens application windows and evaluates submissions in batches. Watch the FEMP
              website for open application periods.
            </p>

            <div className="my-8 space-y-4">
              <h3 className="text-lg font-black text-stone-900">
                What the DOE Qualification Requires
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { req: "DOE Form 415.1 — completed in full", note: "The primary application document" },
                  { req: "Two ESPC project case studies", note: "Must be projects where your firm was the prime with overall financial responsibility — design-only or construction-only experience does not qualify" },
                  { req: "Demonstrated ESPC design and build experience", note: "End-to-end project delivery capability required" },
                  { req: "Financial statements showing ESCO solvency", note: "You need sufficient financial capacity to arrange project financing" },
                  { req: "Key personnel qualifications", note: "Energy engineers, M&V experts, project finance capability" },
                  { req: "Evidence of completed performance guarantees", note: "Prior clients who can confirm savings guarantees were met" },
                ].map(({ req, note }) => (
                  <div key={req} className="bg-stone-50 rounded-xl border border-stone-200 p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-stone-800 text-sm">{req}</p>
                        <p className="text-xs text-stone-500 mt-0.5">{note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Callout icon={AlertTriangle} color="red" title="The Most Common Disqualifier">
              <p>
                The DOE Qualification Review Board specifically rejects experience in design-only
                or construction-only roles. You must demonstrate that your firm was the prime
                contractor with overall financial responsibility for at least two completed ESPC
                projects — including arranging the financing, guaranteeing the savings, and managing
                M&V through the performance period. If your current ESPC experience is as a
                subcontractor or as a design-only firm, spend time building prime ESPC experience
                on smaller non-federal projects before applying. State and local government ESPCs
                (many states use ESPC-style programs) are a valid path to building the requisite
                track record.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Once qualified, your firm appears on the DOE Qualified List — publicly searchable
              by federal contracting officers. Being on the list generates inbound interest from
              agencies looking for ESPC expertise, in addition to making you eligible to compete on
              formal solicitations. Maintain your qualification actively: if your company changes
              significantly (ownership, key personnel, financial position), notify DOE.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="set-asides"
            number="08"
            title="Set-Asides and Certifications in Energy Services"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal set-aside programs apply to energy services work exactly as they apply to
              other industries. The USACE ESPC IV MATOC includes on-ramping specifically for small
              businesses. The VA has a dedicated SDVOSB ESPC track. GSA&apos;s energy conservation
              contract solicitations include small business set-aside components. If you carry a
              certification, use it strategically.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Certification</th>
                    <th className="px-4 py-3 font-bold text-stone-700">How It Helps in Energy</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">Priority Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    {
                      cert: "SDVOSB / VOSB",
                      how: "VA ESPC has a dedicated SDVOSB track; VA Rule of Two creates mandatory preference when two SDVOSBs can compete",
                      target: "VA ESPC program — highest priority if you are veteran-owned",
                    },
                    {
                      cert: "8(a) Business Development",
                      how: "Sole-source ESPC awards up to $25M are possible for 8(a) firms when agencies choose to use this mechanism; also qualifies for set-aside task orders on IDIQ vehicles",
                      target: "DOE IDIQ ESPC sole-source awards; agency-specific ESPCs",
                    },
                    {
                      cert: "HUBZone",
                      how: "10% price preference on HUBZone set-aside contracts; can offset ESCO pricing disadvantages against large firm competition",
                      target: "Regional federal installation ESPCs in HUBZone-designated areas",
                    },
                    {
                      cert: "WOSB / EDWOSB",
                      how: "Set-aside eligibility on ESPC-related solicitations where the NAICS code is designated as underrepresented; applies to engineering and construction NAICS codes in some regions",
                      target: "GSA energy conservation contracts; HHS and civilian agency energy projects",
                    },
                    {
                      cert: "SB (Small Business)",
                      how: "USACE ESPC IV has on-ramping for small businesses; small business set-aside task orders appear under the DOE IDIQ; UESC subcontracting plans create demand",
                      target: "USACE ESPC IV on-ramp; DOE IDIQ SB task orders; UESC subcontract pipelines",
                    },
                  ].map(({ cert, how, target }) => (
                    <tr key={cert} className="hover:bg-stone-50">
                      <td className="px-4 py-3 font-bold text-stone-800">{cert}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs leading-relaxed">{how}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs font-medium">{target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you are uncertain which certifications you qualify for, use{" "}
              <Link href="/features/quick-checker" className="text-emerald-700 hover:underline font-medium">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to run a rapid eligibility assessment against all major programs based on your actual
              business profile. The{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-emerald-700 hover:underline font-medium">
                guide to federal contracting certifications
              </Link>{" "}
              covers the full landscape of what each certification requires and what it unlocks.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="winning-proposals"
            number="09"
            title="What Winning ESPC Proposals Include"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              ESPC proposals are technically dense and financially complex. They are not standard
              government service proposals. Federal evaluators reviewing an ESPC proposal are looking
              for evidence that your firm can actually guarantee energy savings over a 15–25 year
              performance period — not that you can write persuasively about energy efficiency.
              Here is what separates winning submissions.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "Savings Guarantee Credibility",
                  icon: Target,
                  color: "text-emerald-600",
                  content:
                    "Your IGA methodology and the resulting savings projections are the core of your technical proposal. Evaluators look at the conservatism of your baseline assumptions, the rigor of your energy modeling, and whether your projected savings account for operational variations. Overly optimistic savings projections — which win competitions but create M&V shortfalls later — are a major red flag for experienced federal energy program managers. Credible guarantees, even at slightly lower savings levels, win over aggressive numbers with questionable methodology.",
                },
                {
                  title: "M&V Plan Quality",
                  icon: BarChart3,
                  color: "text-blue-600",
                  content:
                    "Measurement and verification is how the government confirms you are delivering what you promised. Your M&V plan should reference the International Performance Measurement and Verification Protocol (IPMVP) Options A, B, C, or D depending on the measure type, and should detail the specific instruments, data points, and calculation methodologies you will use for each energy conservation measure. Vague M&V plans do not win. Specific, IPMVP-aligned plans that clearly explain how savings will be measured and verified throughout the performance period do.",
                },
                {
                  title: "Past Performance on Comparable Projects",
                  icon: Award,
                  color: "text-violet-600",
                  content:
                    "Federal evaluators want evidence that your guaranteed savings guarantees have been met on past projects — not just that you designed and installed improvements. Quantify prior project outcomes: scope in square footage or facility type, energy conservation measures installed, guaranteed savings value, actual savings delivered (and whether they exceeded or met the guarantee), and performance period length. CPARS ratings from any prior federal work add significant credibility. Commercial municipal or state government ESPC performance references are also highly relevant.",
                },
                {
                  title: "Financing Plan and Financial Capacity",
                  icon: DollarSign,
                  color: "text-amber-600",
                  content:
                    "Most federal ESPCs are self-financed by the ESCO through third-party project financing. Your proposal should demonstrate that you have access to competitive project financing — either through existing relationships with ESPC lenders or through your own balance sheet. If you have a committed financing letter from an ESPC financing provider (several specialize in this market), include it. Federal program managers need to know the project will actually be financed and delivered, not just proposed.",
                },
                {
                  title: "Technical Depth on Each Energy Conservation Measure",
                  icon: Settings,
                  color: "text-teal-600",
                  content:
                    "ESPC evaluators are often engineers themselves. Generic descriptions of LED lighting upgrades or HVAC replacements do not impress them. Go deep: specific fixture types and lumen outputs for lighting; specific equipment models and efficiency ratings for HVAC; specific control logic for building automation; specific panel-level monitoring for metering. The more technically specific and credible your ECM descriptions, the more confident evaluators are in your savings guarantee.",
                },
              ].map(({ title, icon: Icon, color, content }) => (
                <div key={title} className="flex gap-4 animate-on-scroll">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-stone-900 mb-2">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={FileText} color="sky" title="Use the RFP's Own Evaluation Criteria">
              <p>
                ESPC solicitations include detailed evaluation factors — technical approach,
                management approach, past performance, and price or financial terms. Build your
                compliance matrix directly from those factors before writing a word of your
                proposal. Every evaluation factor needs a corresponding section in your response
                that addresses it explicitly. The guide on{" "}
                <Link href="/blog/government-proposal-compliance-matrix" className="text-sky-900 underline font-medium">
                  building a compliance matrix
                </Link>{" "}
                walks through this process step-by-step. An ESPC proposal without a compliance
                matrix misses requirements that disqualify it — at multi-million dollar project
                stakes, that is an expensive mistake.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Need a starting framework? CapturePilot&apos;s{" "}
              <a href="/resources/proposal-template" className="text-emerald-700 hover:underline font-medium">
                proposal template
              </a>{" "}
              is built around federal evaluation criteria and can be adapted for technical service
              proposals including energy services contracts.
            </p>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="path-in"
            number="10"
            title="Your Step-by-Step Path In"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most energy contractors who attempt to enter federal ESPC work stumble at the first
              step — they apply for programs they are not yet qualified for, or they target
              vehicles that are already closed to new entrants. Start with where you are now and
              build systematically.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Register on SAM.gov with correct NAICS codes",
                  detail:
                    "You cannot receive a federal contract without an active SAM.gov registration. Register with the energy services NAICS codes that match your actual capabilities — 238210, 238220, 541330, 541690, or whichever apply. Do not underregister by only listing your primary trade code. Each additional applicable code opens different set-aside and solicitation pools.",
                },
                {
                  step: "02",
                  title: "Assess your set-aside certifications",
                  detail:
                    "If you are veteran-owned, the VA ESPC SDVOSB track is your fastest path to a federal ESPC prime contract. Get your SBA VetCert certification first. If you qualify for 8(a), the 9-year program opens sole-source awards up to $25 million — including on energy efficiency contracts. HUBZone and WOSB certifications add set-aside eligibility on top. Apply for every program you qualify for.",
                },
                {
                  step: "03",
                  title: "Build ESPC prime experience on state and local projects",
                  detail:
                    "If you do not yet qualify for the DOE ESCO list (which requires end-to-end ESPC prime experience), build the required track record through state, municipal, and school district ESPC projects. Most states have ESPC enabling legislation and use ESPC-style contracts. These projects count as prime ESPC experience for your DOE qualification application and your past performance references.",
                },
                {
                  step: "04",
                  title: "Begin subcontracting on federal ESPC projects",
                  detail:
                    "Contact the BD and subcontracting teams at the 18 USACE ESPC IV MATOC holders. Register on their vendor portals. MATOC holders actively seek qualified small business subcontractors in lighting, HVAC, controls, M&V, and renewable energy. Even one federal ESPC subcontract builds your federal past performance — critical for future prime pursuits and DOE qualification.",
                },
                {
                  step: "05",
                  title: "Apply for the DOE Qualified ESCO List",
                  detail:
                    "Once you have at least two completed ESPC projects where you served as prime with full financial responsibility, apply during the next DOE application window. The application through eProject Builder requires completed DOE Form 415.1, two detailed project case studies demonstrating prime ESPC delivery, financial statements, and key personnel qualifications. Approval by the DOE Qualification Review Board adds you to the list of approximately 100 qualified ESCOs.",
                },
                {
                  step: "06",
                  title: "Monitor for USACE ESPC IV on-ramp solicitations",
                  detail:
                    "The ESPC IV MATOC explicitly includes on-ramping provisions for additional small businesses. When Huntsville Center posts an on-ramp solicitation on SAM.gov, respond quickly with a well-documented package that demonstrates your DOE qualification, financial capacity, and ESPC track record. On-ramp competitions typically have fewer respondents than initial MATOC competitions — your odds are better.",
                },
                {
                  step: "07",
                  title: "Use sources sought notices to get in front of agency program managers",
                  detail:
                    "Read the guide on sources sought notices to understand how to use them strategically. When a federal installation issues a sources sought for energy services or an ESPC investment grade audit, respond with a specific capabilities statement. This is how agency program managers identify the field of potential contractors before a formal solicitation. Being known to the program manager before the RFP drops is a material competitive advantage in ESPC pursuits.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-5 animate-on-scroll">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                      <span className="font-black text-emerald-700 text-sm">{step}</span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-black text-stone-900 mb-1">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={XCircle} color="violet" title="Mistakes That Kill ESPC Pursuits">
              <ul className="space-y-2">
                {[
                  "Applying for the DOE ESCO list without completed prime ESPC experience — design-only or construction-only projects do not qualify",
                  "Bidding ESPC prime contracts before establishing financing relationships — if you cannot arrange project finance, you cannot deliver the contract",
                  "Using overly optimistic savings projections in the IGA to win the competition, then facing M&V shortfalls that require compensation payments for 15–25 years",
                  "Ignoring the USACE ESPC IV on-ramp opportunity because the initial MATOC award has already passed",
                  "Not tracking sources sought notices from federal installations — the IGA selection process often starts informally, and being unknown to the program manager at that stage means you start behind",
                ].map((mistake) => (
                  <li key={mistake} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-violet-700 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{mistake}</span>
                  </li>
                ))}
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Want to track every ESPC, UESC, and energy service solicitation across DOE, USACE,
              VA, and GSA automatically? Use{" "}
              <Link href="/features/pipeline" className="text-emerald-700 hover:underline font-medium">
                CapturePilot&apos;s pipeline management
              </Link>{" "}
              to build a live view of every energy opportunity in your target agencies — from sources
              sought to award.
            </p>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll my-12 pt-10 border-t border-stone-200">
            <h3 className="text-lg font-black text-stone-900 mb-6">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses",
                  category: "Set-Asides",
                },
                {
                  href: "/blog/government-proposal-compliance-matrix",
                  title: "How to Build a Compliance Matrix for Government Proposals",
                  category: "Proposals",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices: How to Get In Early and Shape the RFP",
                  category: "Strategy",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process: How Winning Contractors Find and Win Deals",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline: From Discovery to Award",
                  category: "Strategy",
                },
                {
                  href: "/blog/subcontracting-government-contracts",
                  title: "Subcontracting on Government Contracts: Your First Step Into Federal",
                  category: "Getting Started",
                },
              ].map(({ href, title, category }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-xl border border-stone-200 p-4 hover:border-emerald-200 hover:bg-emerald-50 transition-all hover-lift"
                >
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-1">
                    {category}
                  </p>
                  <p className="text-sm font-bold text-stone-800 group-hover:text-emerald-700 transition-colors leading-snug">
                    {title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 p-10 text-white text-center">
            <Zap className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-black mb-3">
              Ready to Win Federal Energy Contracts?
            </h3>
            <p className="text-emerald-100 text-sm max-w-lg mx-auto mb-6">
              CapturePilot tracks ESPC, UESC, and energy service opportunities across DOE,
              USACE, VA, and GSA — matching them to your NAICS codes and certifications so you
              never miss a relevant solicitation or on-ramp window.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-black px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors text-sm border border-emerald-400"
              >
                Start 30-day free trial
              </a>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
