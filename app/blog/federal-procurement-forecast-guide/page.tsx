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
  Search,
  FileText,
  Target,
  Clock,
  TrendingUp,
  XCircle,
  Eye,
  Calendar,
  BarChart3,
  Building2,
  Zap,
  Map,
  Globe,
  Shield,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-it-is", label: "What a Procurement Forecast Actually Is" },
  { id: "where-to-find", label: "Where to Find Federal Procurement Forecasts" },
  { id: "how-to-read", label: "How to Read a Forecast Entry" },
  { id: "timing-advantage", label: "The Timing Advantage: How Far Ahead You Can See" },
  { id: "agency-by-agency", label: "Which Agencies Have the Best Forecast Data" },
  { id: "pipeline-strategy", label: "Building a Forecast-Driven Pipeline" },
  { id: "engage-early", label: "How to Engage Before the RFP Drops" },
  { id: "common-mistakes", label: "Mistakes That Kill the Advantage" },
  { id: "action-plan", label: "Your 90-Day Forecast Action Plan" },
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

export default function FederalProcurementForecastPage() {
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
            <span className="text-stone-900 font-medium">Federal Procurement Forecasts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Federal Agency Procurement Forecasts:{" "}
            <span className="gradient-text">
              How to Get Ahead of Every Opportunity
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The government publishes its buying plans months — sometimes a full year — before the
            solicitation ever hits SAM.gov. Most small businesses don't know these forecasts exist.
            The ones who do are already working the relationship when you first see the RFP.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 2, 2026</span>
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
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-it-is" number="01" title="What a Procurement Forecast Actually Is" />

            <p className="text-stone-700 leading-relaxed">
              A federal procurement forecast — also called an acquisition forecast or forecast of contracting
              opportunities — is a planning document that agencies publish to signal what they intend to buy
              in the coming fiscal year. It lists anticipated contracts by category, estimated dollar value,
              NAICS code, set-aside designation, and expected award timeline. It is not a solicitation.
              Nothing in a forecast obligates the government to buy anything. But it tells you exactly
              where to aim.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Agencies publish these forecasts under OMB guidance and FAR requirements to promote
              competition and give vendors — especially small businesses — time to prepare. The intent
              is to give you a running start. Most small businesses never use them, which means the
              contractors who do are walking into relationships before their competition even knows
              the opportunity exists.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Think of the federal contracting pipeline in three stages: <strong>forecast</strong> (agency
              signals intent), <strong>pre-solicitation</strong> (sources sought, RFIs, draft RFP), and
              <strong> solicitation</strong> (the live RFP on SAM.gov). Most contractors enter at stage
              three. Procurement forecasts are stage zero — before any of the formal machinery starts.
            </p>

            <Callout icon={TrendingUp} color="sky" title="The scale of what's forecasted">
              <p>
                The federal government spent approximately <strong>$793 billion</strong> on contracts in
                FY2025. Small businesses captured <strong>$179 billion of that</strong> — 28% of all prime
                contract dollars — exceeding the statutory 23% goal for the twelfth consecutive year.
                Every dollar in that figure was planned, forecasted, and budgeted long before a contract
                was awarded. The question is whether you saw it coming.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Procurement forecasts exist alongside — and precede — the{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline font-medium">
                sources sought notices
              </Link>{" "}
              and pre-solicitation notices you may already be tracking on SAM.gov. The forecast is
              the earliest signal. It does not guarantee the contract will be structured the way it's
              described, and award dates often slip. But it tells you what the agency thinks it needs,
              when, and for roughly how much — and that is enormously useful for prioritizing where
              you spend your business development time.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="where-to-find" number="02" title="Where to Find Federal Procurement Forecasts" />

            <p className="text-stone-700 leading-relaxed">
              There is no single location for all federal procurement forecasts — they live across
              three tiers: a government-wide tool, agency-level portals, and individual office pages.
              Here's where to look, in order of how much coverage you get.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "GSA Forecast of Contracting Opportunities (FCO) Tool",
                  url: "acquisitiongateway.gov/forecast",
                  body: "The most comprehensive public source. Available without login or registration, this government-wide database aggregates forecast data from dozens of agencies into a single searchable interface. Filter by NAICS code, agency, place of performance, estimated award date, acquisition strategy, and set-aside type. This is where you should start.",
                  icon: Globe,
                },
                {
                  step: "02",
                  title: "Acquisition.gov Recurring Procurement Forecasts",
                  url: "acquisition.gov/procurement-forecasts",
                  body: "A directory of agency-published forecast documents, organized by department. Not all agencies use the FCO tool — some publish Excel spreadsheets, PDFs, or maintain their own web pages. This page links to all of them in one place.",
                  icon: FileText,
                },
                {
                  step: "03",
                  title: "Individual Agency OSDBU Pages",
                  url: "Each agency's Office of Small and Disadvantaged Business Utilization",
                  body: "The Office of Small and Disadvantaged Business Utilization (OSDBU) at every major agency publishes a forecast tailored specifically for small business outreach. These often include more detail than the government-wide tool and are sometimes updated more frequently. Search '[Agency name] OSDBU procurement forecast.'",
                  icon: Building2,
                },
                {
                  step: "04",
                  title: "SAM.gov Pre-Solicitation and RFI Notices",
                  url: "sam.gov",
                  body: "Once an opportunity moves from forecast to formal pre-solicitation, it lands on SAM.gov as a sources sought notice, RFI, or pre-solicitation notice. If you've been tracking the forecast, you'll recognize it immediately. If you haven't, this is the first time most competitors see it.",
                  icon: Search,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-0.5">{item.title}</h3>
                    <p className="text-xs text-blue-600 font-mono mb-2">{item.url}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="amber" title="The FCO tool is underused by design">
              <p>
                The GSA Forecast of Contracting Opportunities tool at{" "}
                <strong>acquisitiongateway.gov/forecast</strong> requires no account and no registration.
                It is a public database. Most small business contractors have never opened it. That
                asymmetry — the government explicitly publishing its buying plans, contractors not
                reading them — is one of the clearest free advantages in federal contracting.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                market intelligence engine
              </Link>{" "}
              monitors procurement forecast databases alongside SAM.gov, surfacing opportunities that
              match your NAICS codes and certifications before they appear as formal solicitations.
              You can{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline font-medium">
                set your profile once
              </Link>{" "}
              and receive alerts across all three forecast tiers automatically.
            </p>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="how-to-read" number="03" title="How to Read a Forecast Entry" />

            <p className="text-stone-700 leading-relaxed">
              A forecast entry is not an opportunity — it is a signal. Reading it correctly means
              knowing which fields matter, which are unreliable, and what actions to take based on
              what you find. Here is what a typical forecast entry contains and what each field
              actually tells you.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tl-lg">
                      Field
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      What It Says
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tr-lg">
                      How Reliable It Is
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      field: "Description / Title",
                      says: "What the agency intends to buy, in plain language",
                      reliable: "Generally accurate — the scope rarely changes dramatically",
                    },
                    {
                      field: "Estimated Value",
                      says: "Rough dollar magnitude of the contract",
                      reliable: "Treat as an order of magnitude — final award can vary 30–50% in either direction",
                    },
                    {
                      field: "NAICS Code",
                      says: "Primary industry classification for the work",
                      reliable: "Usually stable, but may shift as requirements are refined",
                    },
                    {
                      field: "Set-Aside Designation",
                      says: "Whether the agency intends to restrict competition to a small business category",
                      reliable: "Can change based on sources sought responses — your input can influence this",
                    },
                    {
                      field: "Estimated Award Date",
                      says: "When the agency expects to award the contract",
                      reliable: "Treat as aspirational. Slippage of 3–12 months is common",
                    },
                    {
                      field: "Contracting Office / POC",
                      says: "Which office will run the acquisition and who to contact",
                      reliable: "POC may change, but the office is usually accurate — your primary outreach target",
                    },
                    {
                      field: "Contract Type",
                      says: "Whether it's a firm-fixed-price, T&M, IDIQ, BPA, or other vehicle",
                      reliable: "Moderately reliable — may evolve based on market research findings",
                    },
                    {
                      field: "Prior Contract Number",
                      says: "If this is a recompete, the contract number of the current award",
                      reliable: "Highly reliable — cross-reference in FPDS to identify the incumbent",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border border-stone-200 font-semibold text-stone-800">
                        {row.field}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">
                        {row.says}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">
                        {row.reliable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The prior contract number is often the most valuable field in the entire entry. If the
              forecast lists one, search it in the Federal Procurement Data System (FPDS) at
              fpds.gov. You'll see who the current prime is, what they were paid, and how long
              they've held the contract. That is your competition analysis — done before the RFP
              exists. Our guide on{" "}
              <Link href="/blog/incumbent-advantage-government-contracts" className="text-blue-700 hover:underline font-medium">
                beating the incumbent
              </Link>{" "}
              covers exactly what to do with that information.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Don't treat award dates as deadlines">
              <p>
                Federal procurement award dates in forecasts slip routinely. Budget cycles, staffing
                changes, policy directives, and market research results all push timelines out.
                A forecast showing an award date of Q2 FY2026 may not materialize until Q4 — or later.
                Plan your BD calendar around forecast dates, but don't stop pursuing a high-value
                opportunity just because its timeline shifted.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  See forecasted opportunities matched to your business
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  CapturePilot pulls from procurement forecast databases and surfaces opportunities
                  that match your NAICS codes, certifications, and past performance — before they
                  appear on SAM.gov.
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

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="timing-advantage" number="04" title="The Timing Advantage: How Far Ahead You Can See" />

            <p className="text-stone-700 leading-relaxed">
              Federal acquisition planning starts long before any public notice. A large, complex
              procurement — a multi-year IDIQ, a base operations contract, a major IT modernization
              initiative — typically takes one to three years from initial planning to contract award.
              Procurement forecasts are your window into that early planning phase.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The FAR requires agencies to publish a synopsis on SAM.gov at least <strong>15 days</strong>{" "}
              before issuing a solicitation (FAR 5.203). That's the legal minimum. Procurement
              forecasts can precede the actual solicitation by <strong>6 to 18 months</strong> or
              more. That gap is where the real competitive advantage lives.
            </p>

            <div className="my-8 relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100" />
              <div className="space-y-6">
                {[
                  {
                    label: "18–24 months before award",
                    color: "bg-blue-100 text-blue-700",
                    title: "Agency internal planning",
                    desc: "Program office identifies the requirement. Budget is proposed. No public signal yet. Only contractors with existing agency relationships know what's coming.",
                  },
                  {
                    label: "12–18 months before award",
                    color: "bg-blue-200 text-blue-800",
                    title: "Procurement forecast published",
                    desc: "Agency posts the opportunity in the FCO tool or its OSDBU forecast. Estimated value, NAICS code, set-aside intent, and target award quarter are listed. Your window to engage opens.",
                  },
                  {
                    label: "6–12 months before award",
                    color: "bg-indigo-200 text-indigo-800",
                    title: "Sources sought / RFI released",
                    desc: "Agency publishes a formal market research notice on SAM.gov. Most competitors enter the picture here. Contractors who engaged during the forecast phase are already known quantities.",
                  },
                  {
                    label: "2–6 months before award",
                    color: "bg-violet-200 text-violet-800",
                    title: "Draft RFP released",
                    desc: "Many agencies post a draft solicitation for public comment. If you responded to the sources sought and engaged with the contracting office, your feedback shapes the final document.",
                  },
                  {
                    label: "0–15 days before proposal deadline",
                    color: "bg-stone-200 text-stone-700",
                    title: "Final RFP on SAM.gov",
                    desc: "The live solicitation goes public. Unprepared contractors are reading requirements for the first time. Prepared contractors are finalizing a proposal they've been building for months.",
                  },
                ].map((phase, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-3.5 top-2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow" />
                    <div>
                      <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-1 ${phase.color}`}>
                        {phase.label}
                      </span>
                      <h3 className="font-bold text-stone-900 text-sm mb-1">{phase.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Callout icon={Clock} color="emerald" title="The compounding advantage">
              <p>
                Large, complex procurements that take 1–3 years from planning to award have a
                corresponding 1–3 year window for capture work. Contractors who identify the
                opportunity in the forecast phase and engage consistently through sources sought,
                industry days, and draft RFP comments arrive at the solicitation with a structural
                advantage that no amount of proposal writing talent can overcome. Timing, not
                writing, is the primary determinant of win rate on large federal pursuits.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              For smaller contracts — simplified acquisitions under $250K — the timeline is
              compressed. But even here, agencies often flag upcoming needs in their OSDBU forecasts
              weeks or months before they formally compete the work. The{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline font-medium">
                sources sought notice
              </Link>{" "}
              often follows the forecast entry directly, and the gap between them is your
              opportunity window.
            </p>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="agency-by-agency" number="05" title="Which Agencies Have the Best Forecast Data" />

            <p className="text-stone-700 leading-relaxed">
              Not all agency forecasts are equally useful. Some are detailed, regularly updated, and
              actively promoted through the OSDBU. Others are stale Excel sheets published once a
              year and never touched again. Here's where to focus your time.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  agency: "Department of Defense (DoD)",
                  spend: "~$400B annually",
                  quality: "High",
                  notes: "Each military branch (Army, Navy, Air Force) publishes its own forecast. OUSD(A&S) coordinates small business opportunities. Defense Innovation Unit also publishes tech-focused forecasts for non-traditional contractors.",
                  icon: Shield,
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  agency: "Department of Veterans Affairs (VA)",
                  spend: "$30B+ annually",
                  quality: "High",
                  notes: "VA's OSDBU maintains one of the most small-business-focused forecast programs in the government. Strong SDVOSB and VOSB set-aside data. The APFS system (Acquisition Planning Forecast System) is frequently updated.",
                  icon: Building2,
                  color: "bg-emerald-50 border-emerald-200",
                },
                {
                  agency: "Department of Homeland Security (DHS)",
                  spend: "$15B+ annually",
                  quality: "High",
                  notes: "DHS maintains APFS (Acquisition Planning Forecast System) at apfs-cloud.dhs.gov with real-time updates and searchable fields. One of the most comprehensive single-agency forecast tools available.",
                  icon: Eye,
                  color: "bg-sky-50 border-sky-200",
                },
                {
                  agency: "General Services Administration (GSA)",
                  spend: "$80B+ (including schedules)",
                  quality: "High",
                  notes: "GSA hosts both the government-wide FCO tool and its own agency-specific forecast. Especially useful for IT, facilities, and professional services. The FAS and PBS each publish acquisition plans.",
                  icon: Globe,
                  color: "bg-violet-50 border-violet-200",
                },
                {
                  agency: "Department of Transportation (DOT)",
                  spend: "$10B+ annually",
                  quality: "Medium",
                  notes: "DOT OSDBU publishes a searchable procurement forecast with modal breakdowns (FAA, FHWA, FTA). Particularly useful for construction, engineering, and transportation tech contractors.",
                  icon: Map,
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  agency: "Department of Energy (DOE)",
                  spend: "$40B+ annually",
                  quality: "Medium",
                  notes: "DOE procurement is heavily weighted toward large site-management M&O contracts, but the OSDBU publishes subcontracting forecasts that are high-value for small businesses pursuing prime-sub teaming arrangements.",
                  icon: Zap,
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((item) => (
                <div
                  key={item.agency}
                  className={`rounded-2xl border p-5 hover-lift ${item.color}`}
                >
                  <item.icon className="w-5 h-5 text-stone-600 mb-2" />
                  <h3 className="font-bold text-stone-900 text-sm mb-1">{item.agency}</h3>
                  <div className="flex gap-3 mb-2">
                    <span className="text-xs text-stone-500 font-medium">{item.spend}</span>
                    <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                      Forecast quality: {item.quality}
                    </span>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">{item.notes}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              If you're focused on a specific agency, our guide to{" "}
              <Link href="/blog/dod-contracts-small-business" className="text-blue-700 hover:underline font-medium">
                DoD contracting for small businesses
              </Link>{" "}
              and our{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-700 hover:underline font-medium">
                VA contracts guide
              </Link>{" "}
              cover the procurement systems and small business programs at the two largest contracting
              agencies in detail.
            </p>

            <Callout icon={BarChart3} color="blue" title="Set-aside data in FY2025">
              <p>
                In FY2025, small businesses captured <strong>28% of all prime federal contract
                dollars</strong> — $179 billion. The government has exceeded the statutory 23% goal
                every year since 2013. 8(a) firms received <strong>$24.3 billion</strong> (3.7%
                of prime dollars). SDVOSBs have a 5% congressional goal (up from 3% under the FY2024
                NDAA). Women-owned small businesses hold a 5% goal as well. Check your certifications
                against each agency's forecast set-aside designations — the goal percentages translate
                directly into dollars reserved specifically for businesses like yours.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pipeline-strategy" number="06" title="Building a Forecast-Driven Pipeline" />

            <p className="text-stone-700 leading-relaxed">
              Pulling data from a procurement forecast is step one. Converting that data into a
              disciplined pipeline — with stages, owners, and follow-up triggers — is what
              separates contractors who win from contractors who just have a list of interesting
              things to watch.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Here is how to structure your forecast-driven pipeline:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  phase: "Filter",
                  desc: "Run your NAICS codes, certifications, and agency targets through the FCO tool and agency OSDBU pages. Pull everything that matches and create one master list. Include the estimated value, set-aside designation, and the estimated award quarter.",
                  icon: Search,
                  color: "bg-blue-50 border-blue-200 text-blue-700",
                },
                {
                  phase: "Score",
                  desc: "Assign a rough probability of win (pWin) to each entry. Consider: How closely does this match your past performance? Do you have the required certifications? Is this a recompete where you know the incumbent? Can you identify two teaming partners if you need them?",
                  icon: BarChart3,
                  color: "bg-violet-50 border-violet-200 text-violet-700",
                },
                {
                  phase: "Sequence",
                  desc: "Sort by estimated award date and reverse-engineer your capture timeline. A Q3 FY2027 award needs sources sought engagement by Q1 FY2026 and relationship building now. A Q4 FY2026 award is urgent — you may already be behind.",
                  icon: Calendar,
                  color: "bg-emerald-50 border-emerald-200 text-emerald-700",
                },
                {
                  phase: "Engage",
                  desc: "Contact the contracting officer POC listed in the forecast. Introduce your company. Ask if there's a sources sought or industry day planned. This is low-friction contact — you're responding to a public document they published specifically to invite vendor interest.",
                  icon: Target,
                  color: "bg-amber-50 border-amber-200 text-amber-700",
                },
                {
                  phase: "Track",
                  desc: "Monitor each entry for movement: does a sources sought appear on SAM.gov? Does the forecast entry get updated? Does the award date change? Set calendar reminders at 90, 60, and 30 days before each estimated award date to trigger re-engagement.",
                  icon: Eye,
                  color: "bg-sky-50 border-sky-200 text-sky-700",
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className={`flex gap-4 rounded-2xl border p-5 hover-lift ${item.color}`}
                >
                  <item.icon className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">{item.phase}</h3>
                    <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                pipeline management tools
              </Link>{" "}
              let you track each forecasted opportunity through every capture stage, set follow-up
              reminders tied to estimated award dates, and link your pipeline entries directly to
              matching SAM.gov notices when they post. For a deeper look at the full pursuit
              methodology, see our guide to{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 hover:underline font-medium">
                the capture management process
              </Link>
              .
            </p>

            <Callout icon={TrendingUp} color="violet" title="Forecast + pWin = disciplined pipeline">
              <p>
                Procurement forecasts generate pursuit candidates. Probability of win scoring
                filters them. Run every forecast entry you identify through a quick pWin check
                before committing BD resources: relevant past performance, certification match,
                estimated contract size relative to your capacity, and whether you can identify
                the incumbent and their weaknesses. High forecast density plus low pWin discipline
                is how contractors end up chasing everything and winning nothing. See our guide to{" "}
                <Link href="/blog/pwin-probability-of-win" className="text-blue-700 hover:underline font-medium">
                  probability of win scoring
                </Link>{" "}
                for a framework to apply here.
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-900 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 shrink-0 mt-1 text-blue-400" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Know your set-aside eligibility before you chase a forecast
                </h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Every forecast entry lists a set-aside designation. Make sure your certifications
                  actually match. CapturePilot's Quick Checker confirms your eligibility across all
                  set-aside programs in under two minutes.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="engage-early" number="07" title="How to Engage Before the RFP Drops" />

            <p className="text-stone-700 leading-relaxed">
              Finding a forecast entry is not the same as using it. The contractors who convert
              forecast intelligence into wins do specific things during the window between forecast
              publication and solicitation release. Here is what that looks like in practice.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  num: "1",
                  title: "Contact the contracting officer directly",
                  body: "The forecast entry usually lists a POC. Email them — briefly. Reference the specific forecast entry. Introduce your company, your relevant certifications, and your past performance in this area. Ask if there are any upcoming industry days, site visits, or information sessions. Keep it to three short paragraphs. You are not pitching — you are registering your existence with the person who will run the acquisition.",
                },
                {
                  num: "2",
                  title: "Schedule a capability briefing with the OSDBU",
                  body: "Every major agency has an Office of Small and Disadvantaged Business Utilization. Their job is to help agencies meet small business contracting goals — and to help qualified small businesses find opportunities. A 30-minute capability briefing with the OSDBU puts you on their vendor list and sometimes generates introductions to program offices that are not publicly advertising opportunities.",
                },
                {
                  num: "3",
                  title: "Research the incumbent via FPDS",
                  body: "If the forecast entry references a prior contract number, search it at fpds.gov. You'll find the current contractor, the contract type, period of performance, and award value. Research their CPARS ratings if they're public. Understand their weaknesses. The solicitation will be written — at least partially — around what the current contractor has been doing. Your proposal needs to address those gaps.",
                },
                {
                  num: "4",
                  title: "Respond to sources sought when it follows",
                  body: "The forecast entry often precedes a sources sought notice by weeks to months. When the notice appears on SAM.gov, you already know the opportunity and have had contact with the agency. Your sources sought response is not a cold introduction — it's a continuation of a relationship. That context comes through in the quality of your response and is noticed.",
                },
                {
                  num: "5",
                  title: "Identify teaming partners before the RFP",
                  body: "If the forecasted contract is large or requires capabilities you don't have, identify teaming partners now. Other capable businesses are also monitoring this forecast. The prime/sub discussions that happen before a solicitation is released are where the most strategic teaming agreements form. By the time the RFP is live, most teaming discussions are already decided.",
                },
              ].map((section) => (
                <div key={section.num} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 font-black text-sm">{section.num}</span>
                    </div>
                    <h3 className="font-bold text-stone-900">{section.title}</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed pl-11">{section.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              For more on teaming strategy, see our guide to{" "}
              <Link href="/blog/government-contract-teaming-agreement" className="text-blue-700 hover:underline font-medium">
                government contract teaming agreements
              </Link>
              . For the relationship-building side of agency engagement, our guide to{" "}
              <Link href="/blog/contracting-officer-relationship" className="text-blue-700 hover:underline font-medium">
                building relationships with contracting officers
              </Link>{" "}
              covers how to approach these conversations without crossing ethical lines.
            </p>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="08" title="Mistakes That Kill the Advantage" />

            <p className="text-stone-700 leading-relaxed">
              Procurement forecasts are a powerful tool used poorly by most contractors who discover
              them. Here are the most common ways the advantage gets squandered.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  wrong: "Treating forecast dates as solicitation dates",
                  right: "Award dates in forecasts slip by months — sometimes a year or more. Use forecast dates to sequence your BD calendar and set reminder triggers. Do not wait until the forecasted award quarter to start engaging. By that time, the solicitation is already closed.",
                },
                {
                  wrong: "Checking the forecast once and moving on",
                  right: "Forecast databases are updated throughout the year. Agencies add opportunities, remove cancelled ones, and revise estimated values and award dates. Build a monthly review of your target agencies' forecast pages into your BD routine.",
                },
                {
                  wrong: "Pursuing every matching entry without prioritization",
                  right: "A $500K IT services contract and a $50M IT services contract both match your NAICS code. They require very different levels of BD investment and capacity to deliver. Score every entry before committing resources — value, pWin, and your bandwidth to win and perform.",
                },
                {
                  wrong: "Contacting the contracting officer with a sales pitch",
                  right: "Early agency contact based on a forecast entry is market research engagement — the same kind the agency itself is conducting. Position your outreach as a response to their public communication about an upcoming need. Provide information; don't pitch. COs who feel sold to go cold.",
                },
                {
                  wrong: "Ignoring the set-aside designation",
                  right: "If a forecast entry shows SDVOSB set-aside and you are not SDVOSB certified, pursuing it as a prime is a waste of resources unless you're building a teaming strategy with a certified partner. Check your certifications against the set-aside before doing anything else.",
                },
                {
                  wrong: "Only using the government-wide FCO tool",
                  right: "The FCO tool does not capture every agency's forecast. DHS, VA, and DOT all maintain separate databases with richer data than what gets submitted to the centralized tool. Build a source list of the specific agency forecast pages relevant to your market.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="flex items-start gap-3 px-5 py-3 bg-red-50 border-b border-stone-200">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-red-700">{item.wrong}</p>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-3 bg-emerald-50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-800">{item.right}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="action-plan" number="09" title="Your 90-Day Forecast Action Plan" />

            <p className="text-stone-700 leading-relaxed">
              Most contractors who read this will not act on it. They'll intend to, and then the
              day gets away from them. Here's a concrete 90-day sequence that builds the habit
              without requiring a full-time BD staff.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  days: "Days 1–7",
                  color: "bg-blue-600",
                  title: "Set up your forecast monitoring",
                  items: [
                    "Create a bookmark folder: FCO tool (acquisitiongateway.gov/forecast), acquisition.gov/procurement-forecasts, and the OSDBU pages for your top 3 target agencies",
                    "Run your NAICS codes through the FCO tool and pull the first 25 matching entries",
                    "Build a simple tracking spreadsheet: agency, description, estimated value, set-aside, estimated award quarter, POC, and a notes column",
                  ],
                },
                {
                  days: "Days 8–21",
                  color: "bg-indigo-600",
                  title: "Score and prioritize your initial list",
                  items: [
                    "For each entry: rate your pWin 1–5 across past performance, certification match, estimated contract size, and competitive landscape",
                    "Identify the top 5 entries where your pWin is strongest — these get BD resources",
                    "For recompete entries with prior contract numbers, look up the incumbent in FPDS",
                    "Check eligibility against each set-aside designation using CapturePilot's Quick Checker",
                  ],
                },
                {
                  days: "Days 22–45",
                  color: "bg-violet-600",
                  title: "Make first contact on your top 5",
                  items: [
                    "Email the contracting officer POC for each of your top 5 opportunities — one brief, factual introduction per week",
                    "Request a 20-minute capability briefing with the OSDBU at your top 2 target agencies",
                    "Monitor SAM.gov for sources sought notices tied to your top 5 entries",
                    "Begin identifying teaming partners for any entry that's larger than your typical contract size",
                  ],
                },
                {
                  days: "Days 46–90",
                  color: "bg-emerald-600",
                  title: "Build the ongoing rhythm",
                  items: [
                    "Repeat the FCO search monthly — add new entries, remove cancelled or awarded ones",
                    "Attend any industry days or small business outreach events announced by your target agencies",
                    "Respond to any sources sought notices that materialize from your tracked entries",
                    "Add a 'forecast review' block to your calendar on the first of each month",
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover-lift">
                  <div className="flex items-center gap-4 px-5 py-3 border-b border-stone-200">
                    <div
                      className={`${phase.color} text-white text-xs font-bold px-3 py-1 rounded-full shrink-0`}
                    >
                      {phase.days}
                    </div>
                    <span className="font-bold text-stone-900 text-sm">{phase.title}</span>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              After 90 days, you'll have a live pipeline of forecasted opportunities with active
              relationships at 2–3 target agencies, and you'll be tracking a handful of pursuits
              through the pre-solicitation phase. That is more than most of your competition has
              done — not because they couldn't, but because they started when the RFP posted
              instead of when the forecast was published.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For the bid decision framework that goes alongside this — how to decide which
              forecasted opportunities actually deserve a proposal — read our guide to the{" "}
              <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-700 hover:underline font-medium">
                bid/no-bid decision
              </Link>
              . And for a broader look at how winning contractors structure their entire pursuit
              process, see the{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 hover:underline font-medium">
                capture management process guide
              </Link>
              .
            </p>

            <Callout icon={FileText} color="emerald" title="Resources for the next step">
              <p>
                Ready to move from forecast to proposal? CapturePilot has resources for every
                stage: the{" "}
                <Link href="/resources/bid-checklist" className="text-emerald-700 underline font-medium">
                  bid checklist
                </Link>{" "}
                for evaluating an opportunity before you commit, the{" "}
                <Link href="/resources/proposal-template" className="text-emerald-700 underline font-medium">
                  proposal template
                </Link>{" "}
                for structuring your response, and the{" "}
                <Link href="/resources/quick-checker-guide" className="text-emerald-700 underline font-medium">
                  Quick Checker guide
                </Link>{" "}
                for confirming your set-aside eligibility before you chase a forecasted
                set-aside opportunity.
              </p>
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Get ahead of opportunities before they hit SAM.gov
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  CapturePilot monitors federal procurement forecasts, matches them to your NAICS
                  codes and certifications, and alerts you when sources sought notices follow. Start
                  your pipeline before your competition knows the opportunity exists.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-black text-stone-900 text-xl mb-6">Related reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices: Get In Early and Shape the RFP",
                  desc: "The next step after the forecast — how to use pre-solicitation notices to influence requirements before they're locked.",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process",
                  desc: "The full framework for finding, qualifying, and winning federal contracts before most competitors know they exist.",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  title: "The Bid/No-Bid Decision Framework",
                  desc: "How to stop chasing the wrong opportunities and focus your resources where you can actually win.",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  title: "Government Contract Win Rates",
                  desc: "What a realistic win rate looks like and the specific practices that improve it over time.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 transition-colors mb-1 text-sm">
                    {post.title}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 text-blue-600 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-3 h-3" />
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
