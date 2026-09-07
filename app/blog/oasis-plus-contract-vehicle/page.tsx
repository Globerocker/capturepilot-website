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
  Star,
  Globe,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-oasis-plus", label: "What OASIS+ Is — and Why It Dominates Professional Services" },
  { id: "six-pools", label: "The Six Pools: Which One You Qualify For" },
  { id: "thirteen-domains", label: "The 13 Domains: Matching Your Services to OASIS+ Scope" },
  { id: "scoring-system", label: "The Scoring System: How GSA Evaluates Applications" },
  { id: "phase-two-onramp", label: "Phase II: The Continuous On-Ramp Opportunity Open Now" },
  { id: "application-strategy", label: "What to Include in Your OASIS+ Application" },
  { id: "winning-task-orders", label: "Winning Task Orders Once You're In" },
  { id: "oasis-vs-gsa-schedule", label: "OASIS+ vs. GSA Schedule: Which Is Right for Your Business" },
  { id: "build-your-strategy", label: "Building Your OASIS+ Strategy" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet" | "orange" | "indigo";
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
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
    indigo: "text-indigo-600",
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

export default function OasisPlusContractVehiclePage() {
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
            <span className="text-stone-900 font-medium">OASIS+ Contract Vehicle</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Package className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            OASIS+ Contract Vehicle:{" "}
            <span className="gradient-text">
              How Small Businesses Win Work on GSA's $60 Billion MAC
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            OASIS+ replaced the legacy OASIS program and is now the government's go-to vehicle for
            professional services work — management consulting, IT, engineering, logistics, and more.
            Over 1,300 small businesses already hold positions. Phase II is open right now. Here's
            what the vehicle is, how it scores applicants, and how to actually win task orders once
            you're in.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published September 7, 2026</span>
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
            id="what-is-oasis-plus"
            number="01"
            title="What OASIS+ Is — and Why It Dominates Professional Services"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ stands for One Acquisition Solution for Integrated Services Plus. It's GSA's
            flagship Governmentwide Acquisition Contract (GWAC) for professional services — a
            multiple award IDIQ vehicle that agencies across the entire federal government use to
            buy management consulting, engineering, IT, logistics, program management, and dozens
            of related service lines.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The program replaced the original OASIS and OASIS Small Business vehicles, whose
            ordering periods closed in late 2024 and early 2025. Legacy OASIS Small Business
            ordering ended on <strong>December 19, 2024</strong>. Legacy OASIS Unrestricted closed
            on <strong>March 1, 2025</strong>. Every new professional services task order that would
            have gone through old OASIS now flows through OASIS+.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The scale is significant. OASIS+ carries up to{" "}
            <strong>$60 billion in ceiling across its six contract vehicles</strong> with a 10-year
            period of performance — a five-year base and a single five-year option. Agencies don't
            need individual congressional authority to buy through it; the GWAC authority is
            pre-established, so procurement offices can issue task orders faster than they could
            run standalone acquisitions.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            For small businesses, the most important thing to understand is the pool structure.
            OASIS+ runs as six separate but parallel contracts — one unrestricted pool and five
            small business set-aside pools. When an agency has a requirement, they decide which
            pool to use. If they issue it as a small business set-aside, only businesses holding
            a position in the relevant small business pool can compete. Unrestricted task orders
            go to the larger pool, which includes both large and small firms.
          </p>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                stat: "$60B",
                label: "in ceiling across OASIS+ contract vehicles",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100",
              },
              {
                stat: "10 yrs",
                label: "period of performance (5-year base + 5-year option)",
                color: "text-indigo-600",
                bg: "bg-indigo-50 border-indigo-100",
              },
              {
                stat: "1,300+",
                label: "small businesses awarded positions in Phase I",
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

          <Callout icon={AlertCircle} color="amber" title="Legacy OASIS is gone">
            If you were tracking opportunities on legacy OASIS or OASIS Small Business, those
            vehicles are closed. Any new work in these service categories now flows through OASIS+.
            You need an OASIS+ position to compete — your old OASIS contract doesn't carry over.
          </Callout>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="six-pools"
            number="02"
            title="The Six Pools: Which One You Qualify For"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ is structured as six distinct contract vehicles, each with its own solicitation,
            award, and ordering mechanism. Which pool you apply to depends on your business size
            and socioeconomic certifications.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">Pool</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">Who Qualifies</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">Min. Score</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">Set-Asides?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pool: "Unrestricted", who: "Any business (large or small)", score: "42 credits", setaside: "No" },
                  { pool: "Total Small Business", who: "Any SBA-qualified small business", score: "36 credits", setaside: "Yes" },
                  { pool: "8(a)", who: "SBA 8(a)-certified businesses", score: "36 credits", setaside: "Yes (8(a) only)" },
                  { pool: "WOSB", who: "SBA-certified Women-Owned Small Businesses", score: "36 credits", setaside: "Yes (WOSB/EDWOSB)" },
                  { pool: "HUBZone", who: "SBA-certified HUBZone businesses", score: "36 credits", setaside: "Yes (HUBZone only)" },
                  { pool: "SDVOSB", who: "VA-verified or SBA-certified SDVOSBs", score: "36 credits", setaside: "Yes (SDVOSB only)" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-800 border border-stone-200">{row.pool}</td>
                    <td className="px-4 py-3 text-stone-600 border border-stone-200">{row.who}</td>
                    <td className="px-4 py-3 text-stone-600 border border-stone-200">{row.score}</td>
                    <td className="px-4 py-3 border border-stone-200">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.setaside === "No" ? "bg-stone-100 text-stone-600" : "bg-emerald-100 text-emerald-700"}`}>
                        {row.setaside}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            You can hold positions in <strong>multiple pools simultaneously</strong>. A WOSB that
            is also 8(a)-certified and qualifies as an SDVOSB can apply to all relevant pools and
            hold contracts in each one. That's a strategic advantage — you can compete on task
            orders set aside for different socioeconomic categories depending on what the agency
            specifies.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The Unrestricted pool has a higher scoring threshold — 42 credits versus 36 for
            the small business pools — because unrestricted positions attract large businesses
            with extensive past performance. If your company qualifies as small, focus on the
            small business pools first. The competition is structured differently, and agencies
            increasingly route professional services requirements through set-aside pools to meet
            their small business goals.
          </p>

          <Callout icon={Lightbulb} color="blue" title="Apply to every pool you qualify for">
            There is no penalty for holding positions in multiple pools. A small 8(a) SDVOSB should
            apply to Total Small Business, 8(a), and SDVOSB pools. Each additional pool expands the
            task order universe you can compete in.
          </Callout>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="thirteen-domains"
            number="03"
            title="The 13 Domains: Matching Your Services to OASIS+ Scope"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ organizes professional services into 13 domains. Each domain maps to a set of
            NAICS codes that define what work can be ordered under that domain. You apply to
            specific domains based on where your past performance and capabilities fall.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The administrative NAICS code for the entire OASIS+ program is <strong>541990</strong>
            {" "}(Other Services), but that's for SAM.gov registration purposes only. The domain
            NAICS codes are what actually drive what work each domain covers and how your
            experience is scored.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8">
            {[
              { domain: "Domain 1", name: "Management and Advisory", examples: "Strategic consulting, org design, policy analysis" },
              { domain: "Domain 2", name: "Technical and Engineering", examples: "Systems engineering, R&D, scientific services" },
              { domain: "Domain 3", name: "Research and Development", examples: "Applied R&D, laboratory services, testing" },
              { domain: "Domain 4", name: "Intelligence Services", examples: "Intelligence analysis, collection, processing" },
              { domain: "Domain 5", name: "Facilities, Construction, and Environmental", examples: "Design-build, environmental remediation, O&M" },
              { domain: "Domain 6", name: "Logistics and Supply Chain", examples: "Transportation, warehousing, supply chain mgmt" },
              { domain: "Domain 7", name: "Enterprise Solutions", examples: "ERP implementation, digital transformation" },
              { domain: "Domain 8", name: "Legal Services", examples: "Legal advice, litigation support, paralegal" },
              { domain: "Domain 9", name: "Financial Management", examples: "Financial analysis, audit support, budget" },
              { domain: "Domain 10", name: "Human Capital and Training", examples: "HR consulting, learning & development" },
              { domain: "Domain 11", name: "Program Management", examples: "PMO support, acquisition support, PPBE" },
              { domain: "Domain 12", name: "Data Management and Analytics", examples: "Data science, BI, AI/ML services" },
              { domain: "Domain 13", name: "Information Technology", examples: "Cybersecurity, cloud, software development" },
            ].map((d) => (
              <div key={d.domain} className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                <div className="text-xs font-bold text-blue-600 mb-1">{d.domain}</div>
                <div className="font-semibold text-stone-800 text-sm mb-1">{d.name}</div>
                <div className="text-xs text-stone-500">{d.examples}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Pick the domains where your actual past performance is strongest. A proposal consultant
            trying to squeeze into Domain 13 (IT) with thin technical experience will score poorly.
            A management consulting firm with strong federal program management work should lead
            with Domains 1 and 11.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            You don't have to apply to all 13 domains. Apply where your experience scorecard will
            be competitive. Then monitor task order postings across your domains through{" "}
            <Link href="/features/intelligence" className="text-blue-600 hover:underline">
              CapturePilot's intelligence feed
            </Link>{" "}
            to see which domains are generating the most volume for your service lines.
          </p>

          <Callout icon={Target} color="emerald" title="Federal experience isn't required for scoring">
            GSA evaluates past performance from commercial, state, and local government projects —
            not just federal contracts. If your firm has strong commercial consulting or state
            government work that matches a domain's Statement of Work, it counts toward your
            score. This opens OASIS+ to companies with limited federal past performance.
          </Callout>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black mb-2">Check your OASIS+ eligibility in 60 seconds</h3>
              <p className="text-blue-100 text-sm mb-4">
                Not sure which pools and domains you qualify for? CapturePilot's Quick Checker
                reviews your certifications, NAICS codes, and business profile to show you exactly
                where you stand.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="scoring-system"
            number="04"
            title="The Scoring System: How GSA Evaluates Applications"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ uses an objective, scorecard-based evaluation. There are no narrative technical
            volumes and no best-value trade-off decisions the way you'd see in a traditional FAR
            Part 15 competition. You fill out a scorecard for each domain you're applying to,
            provide supporting documentation, and your score determines whether you receive an award.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Each domain scorecard is worth up to <strong>50 credits</strong>. For small business
            pools, the minimum threshold to receive an award is <strong>36 credits</strong>. For
            the Unrestricted pool, the threshold is <strong>42 credits</strong>.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Credits come from several categories. Past performance experience is the primary
            driver — you submit relevant contracts and projects that demonstrate work in the
            domain. Relevant experience earns credits based on contract value, complexity, and
            alignment to the domain scope. Additional credits come from certifications, clearances
            held by key personnel, and in some domains, specialized qualifications.
          </p>

          {/* Step-by-step scoring process */}
          <div className="my-8 space-y-4">
            <h3 className="font-black text-lg text-stone-900">How to build your scorecard</h3>
            {[
              {
                step: "01",
                title: "Choose your domains",
                desc: "Start with the domains where you have the deepest past performance. Pull your SAM.gov contract history and identify which domain each contract fits.",
              },
              {
                step: "02",
                title: "Inventory your past performance",
                desc: "List every relevant contract — federal, state, local, and commercial. For each one, record the dollar value, period, scope, and the domain it maps to.",
              },
              {
                step: "03",
                title: "Score yourself honestly",
                desc: "Use GSA's domain-specific scorecard (published on SAM.gov) to estimate your credit total. If you're close to the threshold, identify gaps you can address before applying.",
              },
              {
                step: "04",
                title: "Gather documentation",
                desc: "Each past performance reference needs supporting documentation — CPARS ratings, contracts, statements of work, or client letters. Missing docs mean lost credits.",
              },
              {
                step: "05",
                title: "Submit and track",
                desc: "Applications go through the OASIS+ Interact Platform on SAM.gov. GSA evaluates on a rolling basis under Phase II's continuous model.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 bg-stone-50 border border-stone-200 rounded-xl p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-black text-blue-700">{s.step}</span>
                </div>
                <div>
                  <div className="font-bold text-stone-800 mb-1">{s.title}</div>
                  <div className="text-sm text-stone-600 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={CheckCircle2} color="sky" title="CPARS ratings matter more than contract size">
            A $200,000 contract with excellent CPARS ratings earns more credibility than a $2M
            contract with satisfactory or marginal ratings. Agencies issuing OASIS+ task orders
            will also review your past performance record — strong CPARS scores compound over time.
            See our guide on{" "}
            <Link href="/blog/cpars-contractor-performance" className="text-sky-700 underline">
              how CPARS ratings affect future awards
            </Link>
            .
          </Callout>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="phase-two-onramp"
            number="05"
            title="Phase II: The Continuous On-Ramp Opportunity Open Now"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Phase I of OASIS+ concluded its initial awards in late 2024 and early 2025.
            GSA posted over 1,383 apparent small business winners in July 2024 and finalized
            awards through October 2025.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Phase II launched on <strong>January 12, 2026</strong>, and it uses a fundamentally
            different approach: a Continuous Open Solicitation model. There are no hard closing
            dates. GSA evaluates applications as they arrive and awards contracts throughout the
            vehicle's remaining life. You can apply when you're ready, not on a single artificial
            deadline.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            This is a significant shift from how most contract vehicles work. Legacy vehicles
            typically had one solicitation window, which meant companies either made the cut or
            waited years for a recompete. OASIS+ Phase II removes that single point of failure.
            If you miss one cycle, there's no waiting period — you refine your application and
            resubmit.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Phase II also allows companies already on OASIS+ to expand into additional domains
            they weren't originally awarded. GSA calls these "domain enhancements" — you can
            broaden your scope as your past performance grows. A firm that was initially awarded
            Domain 1 (Management) can later apply to add Domain 11 (Program Management) once they
            have the relevant experience to score above threshold.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-emerald-800">Phase II advantages</span>
              </div>
              <ul className="space-y-2 text-sm text-emerald-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>No closing deadline — apply when you're ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Domain enhancements for existing holders</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>New offerors can apply from scratch</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Commercial past performance accepted</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-800">Don't delay application</span>
              </div>
              <ul className="space-y-2 text-sm text-amber-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Every month without a position is a month you can't compete</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Task order volume is already flowing through OASIS+</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>More competition enters as awareness grows</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>CPARS ratings take time — start building record now</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="application-strategy"
            number="06"
            title="What to Include in Your OASIS+ Application"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            OASIS+ applications are not narrative proposals. You're completing a structured
            scorecard and attaching documentation. But "structured" doesn't mean easy — the
            documentation requirements are strict, and missing paperwork will cost you credits.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            For each past performance reference you submit, expect to provide: the contract number,
            the period of performance, the contract value (base and options), a description of
            the work that maps to the domain, and a CPARS record or equivalent performance
            documentation. If CPARS isn't available (for commercial work), a signed client
            statement on letterhead can substitute.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Key personnel documentation matters in some domains. Certain domains require evidence
            that your team holds relevant certifications — Project Management Professionals (PMPs),
            Certified Information Systems Security Professionals (CISSPs), licensed engineers, or
            similar credentials depending on the domain. Check the domain-specific scorecard for
            exactly what's credited.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Security clearance documentation can also earn credits. If your facility holds a
            Facility Security Clearance (FCL) and key personnel hold active clearances, include
            that evidence. It's straightforward to document and can push you above threshold in
            competitive domains.
          </p>

          {/* Application checklist */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
            <h3 className="font-black text-stone-900 mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-blue-600" />
              Application documentation checklist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "SAM.gov active registration with relevant NAICS codes",
                "SBA certifications for applicable pools (8(a), WOSB, HUBZone, SDVOSB)",
                "Past performance references with contract numbers",
                "CPARS ratings or equivalent client letters",
                "Statements of Work / contract descriptions for each reference",
                "Key personnel resumes with credential documentation",
                "Professional certifications (PMP, CISSP, PE, etc.) per domain",
                "Security clearance documentation (FSO letter, clearance evidence)",
                "Domain scorecard with credits calculated before submission",
                "Teaming agreements if relying on a partner's past performance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            You can use a teaming partner's past performance to supplement your own, but the
            arrangement must be documented and the work must be relevant to the domain you're
            applying for. Read the specific teaming rules in the OASIS+ solicitation carefully —
            GSA has specific limitations on how much of your score can come from a partner versus
            your own work.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Review the <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline">
              teaming agreement guide
            </Link>{" "}
            before relying on a partner's credentials. The structure matters, and a poorly written
            teaming agreement can get your application rejected.
          </p>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="winning-task-orders"
            number="07"
            title="Winning Task Orders Once You're In"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Getting on OASIS+ is the gate. Task orders are the income. Many companies spend months
            winning a position and then treat the vehicle passively — waiting for task orders to
            appear rather than actively pursuing agency relationships and positioned opportunities.
            That's how you end up with a contract vehicle that never generates revenue.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Task orders under OASIS+ are competed among holders in the relevant pool and domain.
            The agency issues a Request for Task Order Proposal (RTOP) — sometimes called a
            mini-RFP. Proposals are typically shorter than full FAR Part 15 proposals, but the
            competition is real. You're facing other qualified OASIS+ holders, not the open market.
            Win rates inside the vehicle are higher than open market, but they're not automatic.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The same fundamentals that apply to other government proposals apply here. Read
            Section L and Section M carefully. Build a compliant proposal structure before you
            write a word. Price competitively — OASIS+ task orders evaluate price as part of the
            award decision, even in best-value competitions. Review our guide on{" "}
            <Link href="/blog/section-l-section-m-guide" className="text-blue-600 hover:underline">
              how to use Section L and Section M to win
            </Link>
            .
          </p>

          <h3 className="font-black text-lg text-stone-900 mb-4 mt-8">Pre-positioning: the real edge</h3>

          <p className="text-stone-700 leading-relaxed mb-4">
            The contractors who win disproportionate OASIS+ task order volume aren't just good
            proposal writers. They know about requirements before the RTOP drops. They've attended
            agency industry days, responded to Sources Sought notices, and built relationships with
            the contracting officers and program managers who drive the work.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            When an agency issues a Sources Sought for work that will be ordered through OASIS+,
            responding positions you as a known quantity. It gives you insight into the requirement
            before it's scoped. In some cases, your response shapes the RTOP. That's not unfair
            advantage — that's good capture management. Read our full breakdown of{" "}
            <Link href="/blog/sources-sought-notice" className="text-blue-600 hover:underline">
              how to respond to Sources Sought notices
            </Link>
            .
          </p>

          {/* Task order process */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "Monitor", desc: "Track OASIS+ task order postings on SAM.gov and GSA eBuy" },
              { step: "Qualify", desc: "Run bid/no-bid on each RTOP — protect your proposal resources" },
              { step: "Position", desc: "Build agency relationships before RTOPs drop through outreach" },
              { step: "Propose", desc: "Submit compliant, competitive proposals on qualified opportunities" },
            ].map((s, i) => (
              <div key={s.step} className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center relative">
                <div className="text-2xl font-black text-blue-600 mb-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-bold text-blue-900 text-sm mb-2">{s.step}</div>
                <div className="text-xs text-blue-700 leading-snug">{s.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Use a structured{" "}
            <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-600 hover:underline">
              bid/no-bid decision process
            </Link>{" "}
            on every RTOP. Task orders come fast on a vehicle this large. Trying to respond to
            everything burns your proposal team and produces mediocre proposals. Focus on RTOPs
            where you have incumbent knowledge, relevant past performance, and competitive pricing.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <Link href="/features/pipeline" className="text-blue-600 hover:underline">
              CapturePilot's pipeline management
            </Link>{" "}
            lets you track which OASIS+ task orders you're pursuing, stage each opportunity, and
            manage your proposal calendar across the volume of RTOPs a busy vehicle generates.
          </p>

          <Callout icon={TrendingUp} color="indigo" title="GSA eBuy is your task order command center">
            Most OASIS+ RTOPs are posted on GSA eBuy, not open on SAM.gov. eBuy is a
            restricted system — only registered OASIS+ holders can see task orders in their
            domains. Once you hold a contract, monitor eBuy daily. Set up email notifications
            for new postings in your domains so you never miss an RTOP release.
          </Callout>
        </div>

        {/* CTA 2 */}
        <div className="border border-stone-200 rounded-2xl p-8 my-10 animate-on-scroll">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-50 p-3 rounded-xl flex-shrink-0">
              <BarChart2 className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-stone-900 mb-2">
                Track OASIS+ opportunities without the manual search
              </h3>
              <p className="text-stone-500 text-sm mb-4">
                CapturePilot monitors SAM.gov and eBuy postings across your NAICS codes and
                domains, surfaces pre-solicitation signals, and alerts you when agencies are
                building a requirement in your wheelhouse — before the RTOP drops.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Start 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-stone-50 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="oasis-vs-gsa-schedule"
            number="08"
            title="OASIS+ vs. GSA Schedule: Which Is Right for Your Business"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The GSA Multiple Award Schedule (MAS) and OASIS+ are both contract vehicles, but
            they serve different procurement needs. The right answer for your business depends
            on what you sell and how agencies buy.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">Factor</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">OASIS+</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">GSA Schedule (MAS)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: "Best for", oasis: "Complex professional services projects", mas: "Commoditized products and services" },
                  { factor: "Application complexity", oasis: "High — scorecard + documentation", mas: "Moderate — pricing + compliance" },
                  { factor: "Competition after award", oasis: "Task order competitions (RTOPs)", mas: "Often direct order or simplified competition" },
                  { factor: "Price basis", oasis: "Negotiated per task order", mas: "Pre-established Schedule pricing" },
                  { factor: "Set-aside structure", oasis: "Dedicated small business pools", mas: "Set-asides at ordering level" },
                  { factor: "Agency usage", oasis: "Professional services-heavy agencies (DoD, DHS, IC)", mas: "All civilian agencies; DoD uses it but less common for services" },
                  { factor: "Relationship needed", oasis: "High — pre-positioning matters", mas: "Moderate — catalog-driven purchases less relationship-dependent" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-800 border border-stone-200">{row.factor}</td>
                    <td className="px-4 py-3 text-stone-600 border border-stone-200">{row.oasis}</td>
                    <td className="px-4 py-3 text-stone-600 border border-stone-200">{row.mas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            For most professional services firms — consulting, IT services, program management —
            OASIS+ is the higher-value vehicle. The work is larger, the relationships matter more,
            and the competition is among qualified peers rather than anyone who meets a Schedule's
            price threshold. The GSA Schedule is easier to get on but generates more transactional,
            lower-value orders for services firms.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            That said, holding both is a legitimate strategy. Many OASIS+ holders also hold a
            GSA Schedule. The Schedule generates steady lower-value work while OASIS+ task orders
            represent larger wins. Read our full guide on{" "}
            <Link href="/blog/gsa-schedule-guide" className="text-blue-600 hover:underline">
              whether a GSA Schedule is right for your business
            </Link>
            .
          </p>
        </div>

        {/* Section 9 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="build-your-strategy"
            number="09"
            title="Building Your OASIS+ Strategy"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Companies that win consistently on OASIS+ treat the vehicle as a platform, not a
            pass. Getting on the contract takes months of application work. Winning task orders
            takes systematic capture management. Here's how to think about it.
          </p>

          <h3 className="font-black text-lg text-stone-900 mb-4">Before you apply</h3>

          <p className="text-stone-700 leading-relaxed mb-4">
            Score yourself against each domain scorecard before you invest in the application.
            Be honest. If you need 36 credits and you can only document 29, your application will
            fail. Identify the gap. Can you complete a relevant project in the next 6 months that
            would push you over threshold? Can a teaming partner fill the gap? Is there a different
            domain where you already score above threshold and should apply there first?
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Use our{" "}
            <Link href="/features/quick-checker" className="text-blue-600 hover:underline">
              Quick Checker
            </Link>{" "}
            to verify your certifications are current. An expired 8(a) or HUBZone certification
            at application time will disqualify you from those pools regardless of your score.
          </p>

          <h3 className="font-black text-lg text-stone-900 mb-4 mt-8">After you win a position</h3>

          <p className="text-stone-700 leading-relaxed mb-4">
            The first 90 days after award matter. Set up eBuy monitoring immediately. Identify
            three to five agencies in your domains that issue the most OASIS+ task orders —
            agencies like DoD components, DHS, Veterans Affairs, and the intelligence community
            are heavy users. Schedule outreach with contracting officers and program managers.
            Attend industry days. Make yourself visible before the RTOPs you want show up.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Build your{" "}
            <Link href="/features/capability-statement" className="text-blue-600 hover:underline">
              capability statement
            </Link>{" "}
            specifically for OASIS+. Mention your vehicle number, the domains you hold, and the
            specific agency mission areas you support. Contracting officers searching the eBuy
            holder database need to immediately understand what you do and which domains you cover.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Maintain rigorous{" "}
            <Link href="/blog/government-contract-pipeline-management" className="text-blue-600 hover:underline">
              pipeline management
            </Link>
            . Task orders from a vehicle like OASIS+ come with shorter response timelines than
            full open-market solicitations — sometimes as few as 10 days for a task order
            proposal. You need a system that tells you what's in the pipeline, who owns each
            proposal, and what your submission calendar looks like three weeks out.
          </p>

          <h3 className="font-black text-lg text-stone-900 mb-4 mt-8">Build toward domain expansion</h3>

          <p className="text-stone-700 leading-relaxed mb-4">
            The Phase II continuous model means you can grow your position. Every project you
            complete under a domain builds the past performance you'll need to add domains or
            pools later. A firm that wins an OASIS+ Total Small Business position in Domain 1
            today and executes strong work will be positioned to add Domain 11 or 13 in two years.
            Track each project's potential as future OASIS+ past performance from day one.
          </p>

          <Callout icon={Star} color="violet" title="OASIS+ is a decade-long platform">
            The vehicle runs through at least 2034 with the five-year option. Companies that
            get positioned early and build a strong task order track record compound their
            advantage — better CPARS ratings, more domain credits, and deeper agency relationships.
            This isn't a one-year opportunity. It's a decade of professional services revenue
            if you execute.
          </Callout>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="text-center max-w-2xl mx-auto">
            <Award className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h3 className="text-2xl font-black mb-3">Ready to pursue OASIS+ task orders?</h3>
            <p className="text-blue-100 text-sm mb-6">
              CapturePilot tracks OASIS+ postings, surfaces pre-solicitation signals, and helps
              you manage the pipeline from RTOP release to proposal submission — so you never
              miss an opportunity in your domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
              >
                Start 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>

        {/* Related reading */}
        <div className="animate-on-scroll mt-12 pt-12 border-t border-stone-200">
          <h3 className="font-black text-lg text-stone-900 mb-6">Related guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/multiple-award-contracts-guide",
                title: "Multiple Award Contracts: How to Get on MACs and Win Task Orders",
                desc: "The full landscape of MAC vehicles — how they work and which ones to pursue.",
              },
              {
                href: "/blog/gsa-schedule-guide",
                title: "GSA Schedule Contracts: Is a GSA Schedule Right for Your Business?",
                desc: "Compare the GSA Schedule to OASIS+ and decide which fits your go-to-market.",
              },
              {
                href: "/blog/bid-no-bid-decision-framework",
                title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits",
                desc: "How to score each task order before committing your proposal resources.",
              },
              {
                href: "/blog/capture-management-process",
                title: "The Capture Management Process: Find and Win Deals",
                desc: "Build the pre-proposal activities that produce higher win rates.",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-stone-50 border border-stone-200 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <div className="font-bold text-stone-800 text-sm group-hover:text-blue-700 transition-colors mb-1">
                  {link.title}
                </div>
                <div className="text-xs text-stone-500">{link.desc}</div>
                <div className="flex items-center gap-1 text-blue-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read guide <ArrowRight className="w-3 h-3" />
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
