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
  TrendingDown,
  BarChart3,
  ShieldCheck,
  Building2,
  Zap,
  Globe,
  Activity,
  HardHat,
  HeartPulse,
  Cpu,
  Crosshair,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-2026-matters", label: "Why 2026 Is a Pivotal Year" },
  { id: "big-picture", label: "The Big Picture: Total Federal Contract Spending" },
  { id: "defense-surge", label: "Defense: A $1 Trillion Wave" },
  { id: "doge-effect", label: "The DOGE Effect: Where Contracts Are Getting Cut" },
  { id: "cyber-ai", label: "Cybersecurity and AI: The Hottest Market in Federal History" },
  { id: "healthcare-it", label: "Healthcare IT: VA and HHS Billions" },
  { id: "construction", label: "Construction and Facilities: Military Modernization" },
  { id: "small-business", label: "Small Business: $183 Billion and What It Means" },
  { id: "positioning", label: "How to Position Your Business for the Shift" },
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

export default function FederalSpendingTrends2026Page() {
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
            <span className="text-stone-900 font-medium">Federal Spending Trends 2026</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Activity className="w-4 h-4" /> Market Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Federal Spending Trends 2026:{" "}
            <span className="gradient-text">Where the Government Is Investing</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Defense is getting a{" "}
            <strong className="text-stone-700">$1 trillion budget</strong>. AI and cybersecurity
            contracts are exploding. And DOGE has cancelled over{" "}
            <strong className="text-stone-700">$85 billion</strong> in contracts across the civilian
            side. This is not a normal year in federal contracting — here&apos;s where the money is
            actually flowing and what it means for your pipeline.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 15, 2026</span>
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
            id="why-2026-matters"
            number="01"
            title="Why 2026 Is a Pivotal Year"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal contracting market has been growing slowly for the better part of a decade.
              Total awards have increased in five of the last six fiscal years, adding roughly $83
              billion over five years — a 14% nominal increase. But FY2026 is different. Two massive
              forces are colliding at the same time, and the directional shift depends entirely on
              which agencies you serve.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              On the defense side: Congress passed a $1.01 trillion national defense authorization,
              the first time the defense budget crossed the trillion-dollar threshold. The DoD is
              planning to spend an additional $152 billion from the budget reconciliation bill in a
              single year. That is an extraordinary acceleration of spending, concentrated in AI,
              cybersecurity, munitions, and military construction.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              On the civilian side: DOGE has restructured, cancelled, or recommended elimination of
              over $85 billion in contracts across 24 agencies. The cuts are concentrated in
              consulting, research, environmental services, and international development. If your
              pipeline runs through USAID, the Department of Education, or the EPA, you already know
              what this means. If it runs through DoD, DHS, or VA — you&apos;re looking at one of
              the strongest demand environments in recent memory.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The single most important thing you can do right now is understand which side of this
              divide your business sits on — and either double down or pivot accordingly. The{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 hover:underline font-medium"
              >
                CapturePilot market intelligence tools
              </Link>{" "}
              track agency-level obligation data in near real-time so you can see where spending is
              actually landing before your competitors do.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                {
                  stat: "$1.01T",
                  label: "FY2026 national defense authorization",
                  icon: ShieldCheck,
                  color: "blue",
                },
                {
                  stat: "$85B+",
                  label: "Contracts cancelled or restructured by DOGE",
                  icon: TrendingDown,
                  color: "rose",
                },
                {
                  stat: "$183B",
                  label: "Prime contracts to small businesses in FY2024",
                  icon: DollarSign,
                  color: "emerald",
                },
                {
                  stat: "28.8%",
                  label: "Small business share of federal contracting in FY2024",
                  icon: Target,
                  color: "amber",
                },
              ].map(({ stat, label, icon: Icon, color }) => (
                <div
                  key={stat}
                  className={`rounded-2xl border p-5 text-center animate-on-scroll ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : color === "rose"
                      ? "bg-rose-50 border-rose-200"
                      : color === "emerald"
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-amber-50 border-amber-200"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 mx-auto mb-2 ${
                      color === "blue"
                        ? "text-blue-600"
                        : color === "rose"
                        ? "text-rose-600"
                        : color === "emerald"
                        ? "text-emerald-600"
                        : "text-amber-600"
                    }`}
                  />
                  <p
                    className={`text-2xl font-black mb-1 ${
                      color === "blue"
                        ? "text-blue-800"
                        : color === "rose"
                        ? "text-rose-800"
                        : color === "emerald"
                        ? "text-emerald-800"
                        : "text-amber-800"
                    }`}
                  >
                    {stat}
                  </p>
                  <p className="text-xs text-stone-500 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="big-picture"
            number="02"
            title="The Big Picture: Total Federal Contract Spending"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government reported $744.7 billion in total contract obligations for
              FY2025, compared to $776 billion in FY2024. That apparent drop is partly an artifact
              of timing — the Department of Defense typically reports Q4 spending late, and the
              FY2025 full-year number will settle higher once final agency reports come in. FY2024
              itself was a near-record year, and the baseline heading into FY2026 is strong.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              What matters more than the headline total is the composition. Federal contracting is
              increasingly concentrated in a handful of categories:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tl-xl">
                      Spending Category
                    </th>
                    <th className="text-right px-4 py-3 font-bold text-stone-700">
                      FY2025 Trend
                    </th>
                    <th className="text-right px-4 py-3 font-bold text-stone-700 rounded-tr-xl">
                      FY2026 Outlook
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "Defense / National Security",
                      trend: "Stable",
                      outlook: "Strong growth (+13%)",
                      trendColor: "text-amber-700",
                      outlookColor: "text-emerald-700",
                    },
                    {
                      category: "IT Services",
                      trend: "+4% vs FY2024",
                      outlook: "Strong growth (AI/cyber surge)",
                      trendColor: "text-emerald-700",
                      outlookColor: "text-emerald-700",
                    },
                    {
                      category: "Professional Services / Consulting",
                      trend: "Declining",
                      outlook: "DOGE headwinds continue",
                      trendColor: "text-rose-700",
                      outlookColor: "text-rose-700",
                    },
                    {
                      category: "Construction / Facilities",
                      trend: "Stable",
                      outlook: "Growth (MILCON, DoD infrastructure)",
                      trendColor: "text-amber-700",
                      outlookColor: "text-emerald-700",
                    },
                    {
                      category: "Healthcare / Medical",
                      trend: "Stable",
                      outlook: "Growth (VA EHR, PACT Act)",
                      trendColor: "text-amber-700",
                      outlookColor: "text-emerald-700",
                    },
                    {
                      category: "Research & Development",
                      trend: "Declining",
                      outlook: "Flat to declining (DOGE cuts, NIH freeze)",
                      trendColor: "text-rose-700",
                      outlookColor: "text-rose-700",
                    },
                    {
                      category: "International Development / Foreign Aid",
                      trend: "Sharply declining",
                      outlook: "Severely contracted (USAID gutted)",
                      trendColor: "text-rose-700",
                      outlookColor: "text-rose-700",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.category}
                      className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                    >
                      <td className="px-4 py-3 font-medium text-stone-800">{row.category}</td>
                      <td className={`px-4 py-3 text-right font-medium ${row.trendColor}`}>
                        {row.trend}
                      </td>
                      <td className={`px-4 py-3 text-right font-medium ${row.outlookColor}`}>
                        {row.outlook}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The pattern is consistent: technology, defense, and direct service delivery are
              growing. Policy, advisory, and development work are contracting. If your NAICS codes
              sit in professional services or research, now is the time to assess your agency mix
              and look hard at where demand is still robust.
            </p>

            <Callout icon={Lightbulb} color="blue" title="Track spending before your competitors">
              USASpending.gov shows contract obligation data by agency, NAICS code, and award type.
              But it&apos;s a blunt instrument — by the time a contract appears there, the capture
              work is usually done.{" "}
              <Link
                href="/features/intelligence"
                className="font-medium hover:underline"
              >
                CapturePilot&apos;s intelligence dashboard
              </Link>{" "}
              surfaces pre-award signals — sources sought, budget justifications, procurement
              forecasts — so you can engage agencies before they publish an RFP.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="defense-surge"
            number="03"
            title="Defense: A $1 Trillion Wave"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The FY2026 National Defense Authorization Act passed with $848.3 billion in
              discretionary DoD spending plus $113.3 billion in mandatory reconciliation funding —
              totaling $961.6 billion directly for defense, with the full national security budget
              crossing $1.01 trillion when you include military construction and other related
              programs. More notably, the DoD announced plans to spend the entire $152 billion
              reconciliation package within a single fiscal year, which is an unprecedented pace of
              obligation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Where is that money going? The investment priorities are clear from the NDAA language
              and DoD procurement forecasts:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Cpu,
                  title: "AI and Autonomy",
                  body: "$13.4 billion requested for AI and autonomous systems in FY2026 — the largest single-year AI investment in defense history. Emphasis on decision support, logistics optimization, and autonomous platforms.",
                  color: "blue",
                },
                {
                  icon: ShieldCheck,
                  title: "Cybersecurity / Zero Trust",
                  body: "Every major DoD component is driving toward Zero Trust architecture compliance. Combined cybersecurity spend across DoD exceeded $32 billion in FY2025 and is growing.",
                  color: "sky",
                },
                {
                  icon: HardHat,
                  title: "Military Construction",
                  body: "Congress approved $19.737 billion for military construction and family housing in FY2026 — 4.5% above the President's request. Priority projects: shipyard infrastructure, Indo-Pacific hardened facilities, and Guam airfield improvements.",
                  color: "amber",
                },
                {
                  icon: Crosshair,
                  title: "Munitions and Readiness",
                  body: "The reconciliation bill front-loads production funding for long-range missiles, hypersonics, and conventional munitions stockpiles. Manufacturing and supply chain work included.",
                  color: "emerald",
                },
              ].map(({ icon: Icon, title, body, color }) => (
                <div
                  key={title}
                  className={`rounded-2xl border p-6 animate-on-scroll hover-lift ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : color === "sky"
                      ? "bg-sky-50 border-sky-200"
                      : color === "amber"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-emerald-50 border-emerald-200"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 mb-3 ${
                      color === "blue"
                        ? "text-blue-600"
                        : color === "sky"
                        ? "text-sky-600"
                        : color === "amber"
                        ? "text-amber-600"
                        : "text-emerald-600"
                    }`}
                  />
                  <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For small businesses, the defense surge creates real opportunity — but you need to
              be on contract vehicles to access it. The DoD&apos;s preference for IDIQ task orders
              and GWACs means that if you&apos;re not already on a vehicle like OASIS+, Polaris,
              Seaport-NxG, or a service-specific IDIQ, you may be frozen out of the largest
              opportunities. Read{" "}
              <Link
                href="/blog/idiq-contracts-explained"
                className="text-blue-700 hover:underline font-medium"
              >
                our guide to IDIQ contracts
              </Link>{" "}
              to understand how to get on the right vehicles now.
            </p>

            <Callout icon={Target} color="blue" title="DoD small business spending">
              The Department of Defense is the single largest customer for small businesses in the
              federal government, with tens of billions in set-aside awards annually. SDVOSB, 8(a),
              HUBZone, and WOSB set-asides are active across every DoD component. The defense surge
              makes this the right time to ensure your certifications are current and your
              SAM.gov profile reflects your actual capabilities.
            </Callout>

            {/* CTA 1 */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 my-10 text-white text-center animate-on-scroll">
              <Zap className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h3 className="text-xl font-black mb-2">Is your business positioned for defense spending?</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
                Check your eligibility for DoD set-aside programs and see which active defense
                opportunities match your NAICS codes — free, in under 60 seconds.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="doge-effect"
            number="04"
            title="The DOGE Effect: Where Contracts Are Getting Cut"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Department of Government Efficiency has recommended cancellation or reduction of
              over $85 billion in federal contracts since early 2025. The scale is unprecedented,
              but the distribution is highly uneven — knowing which agencies and categories are
              hit hard tells you exactly where to avoid overcommitting pipeline resources.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tl-xl">
                      Agency / Category
                    </th>
                    <th className="text-right px-4 py-3 font-bold text-stone-700">
                      Impact Level
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 rounded-tr-xl">
                      What&apos;s Being Cut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      agency: "USAID",
                      impact: "Severe (~68% of portfolio)",
                      what: "Development contracts, humanitarian programs, consulting",
                      level: "high",
                    },
                    {
                      agency: "Department of Education",
                      impact: "High (~52% impact)",
                      what: "Research grants, DEI consulting, administrative services",
                      level: "high",
                    },
                    {
                      agency: "EPA",
                      impact: "High (~41% impact)",
                      what: "Climate research, environmental consulting, clean energy",
                      level: "high",
                    },
                    {
                      agency: "HHS (select programs)",
                      impact: "Moderate ($8.7B+ cut)",
                      what: "Advisory services, public health consulting, grants administration",
                      level: "medium",
                    },
                    {
                      agency: "DoD",
                      impact: "Limited ($18.3B — but against a $848B base)",
                      what: "Redundant administrative IT, travel, excess management layers",
                      level: "low",
                    },
                    {
                      agency: "VA / Veterans programs",
                      impact: "Minimal",
                      what: "Veterans mission is protected; healthcare spending growing",
                      level: "safe",
                    },
                    {
                      agency: "DHS / Homeland Security",
                      impact: "Minimal",
                      what: "Core security mission protected; border enforcement expanding",
                      level: "safe",
                    },
                  ].map((row, i) => (
                    <tr key={row.agency} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-800">{row.agency}</td>
                      <td
                        className={`px-4 py-3 text-right font-medium text-xs ${
                          row.level === "high"
                            ? "text-rose-700"
                            : row.level === "medium"
                            ? "text-amber-700"
                            : row.level === "low"
                            ? "text-amber-600"
                            : "text-emerald-700"
                        }`}
                      >
                        {row.impact}
                      </td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{row.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The practical implication: if your business model depends on management consulting,
              policy advisory, or DEI-related services to civilian agencies, you&apos;re navigating
              a materially different market than two years ago. That doesn&apos;t mean there&apos;s
              no work — it means your pipeline needs to be larger to account for lower win rates
              and more cancellations.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The contractors weathering this best are the ones who diversified their agency mix
              before the cuts hit and who had strong{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 hover:underline font-medium"
              >
                past performance records
              </Link>{" "}
              across multiple departments. Single-agency dependency is the most common structural
              weakness we see in small business GovCon pipelines.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Recompete risk is real">
              A large share of FY2026 opportunities are recompetes of existing contracts — not new
              awards. If your incumbent customers are in DOGE-impacted agencies, those recompetes
              may come with reduced scope, shortened periods of performance, or outright
              cancellation. Map your renewals now and build contingency pipeline accordingly.
            </Callout>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="cyber-ai"
            number="05"
            title="Cybersecurity and AI: The Hottest Market in Federal History"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal cybersecurity spending grew from $18 billion in FY2020 to over $32 billion
              in FY2025 — a 78% increase in five years. The DoD alone committed over $32 billion
              in combined AI, cloud, cybersecurity, and data analytics contract ceilings in the
              first half of FY2026. These are not projections. These are awarded contract values
              you can bid task orders against.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The AI piece is accelerating fastest. DoD&apos;s $13.4 billion AI and autonomy
              budget request for FY2026 is the largest single-year AI investment in defense history.
              And small businesses are winning a meaningful share: small business AI contract awards
              grew 34% over three fiscal years, from $554 million in FY2022 to $740 million in
              FY2024. That&apos;s a 34% increase at a time when the government was still figuring
              out what it wanted.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  stat: "$32B+",
                  label: "Federal cybersecurity spending in FY2025",
                  sub: "Up from $18B in FY2020",
                  color: "blue",
                },
                {
                  stat: "$13.4B",
                  label: "DoD AI & autonomy budget for FY2026",
                  sub: "Largest single-year defense AI investment ever",
                  color: "sky",
                },
                {
                  stat: "+34%",
                  label: "Small business AI award growth",
                  sub: "FY2022 to FY2024",
                  color: "emerald",
                },
              ].map(({ stat, label, sub, color }) => (
                <div
                  key={stat}
                  className={`rounded-2xl border p-5 text-center animate-on-scroll ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : color === "sky"
                      ? "bg-sky-50 border-sky-200"
                      : "bg-emerald-50 border-emerald-200"
                  }`}
                >
                  <p
                    className={`text-3xl font-black mb-1 ${
                      color === "blue"
                        ? "text-blue-800"
                        : color === "sky"
                        ? "text-sky-800"
                        : "text-emerald-800"
                    }`}
                  >
                    {stat}
                  </p>
                  <p className="text-sm font-semibold text-stone-700 mb-1">{label}</p>
                  <p className="text-xs text-stone-500">{sub}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For small businesses, the entry points into cyber and AI work are clearer than they
              look from the outside. You don&apos;t need to be a Fortune 500 defense prime to
              capture this spending. The specific on-ramps:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                {
                  point: "SBIR/STTR programs",
                  detail:
                    "The Small Business Innovation Research program set-asides are specifically designed for small businesses doing early-stage R&D in areas including AI, machine learning, and autonomy. Awards range from $150K (Phase I) to $1M+ (Phase II).",
                },
                {
                  point: "GSA Polaris GWAC",
                  detail:
                    "The GSA Polaris contract vehicle for small businesses covers IT services including cybersecurity, AI/ML, and cloud. It has separate pools for WOSB, SDVOSB, HUBZone, and SDB. This is the vehicle to pursue if you're an IT firm.",
                },
                {
                  point: "CIO-SP4 (NIH GWAC)",
                  detail:
                    "NIH's government-wide IT acquisition contract spans health IT, cybersecurity, and data analytics. Small business unrestricted and set-aside pools are both open.",
                },
                {
                  point: "Subcontracting to primes",
                  detail:
                    "Large primes winning JWCC, Polaris, or other major cyber/AI vehicles need qualified subcontractors. A teaming agreement with a prime on a vehicle you don't hold can get you into task orders immediately.",
                },
                {
                  point: "DIU commercial solutions",
                  detail:
                    "The Defense Innovation Unit awards Other Transaction Authority (OTA) agreements to commercial technology companies — often without the full FAR compliance burden. If your product has a commercial market, DIU is worth tracking.",
                },
              ].map(({ point, detail }) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800">{point}: </span>
                    <span className="text-stone-600 text-sm">{detail}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-stone-600 leading-relaxed mb-4">
              The FY2026 NDAA also codified new cybersecurity requirements and AI governance
              frameworks for defense contractors. Zero Trust architecture mandates are real
              deadlines now, not aspirational goals — and agencies need contractors who understand
              implementation. If you&apos;ve done this work commercially or in another regulated
              sector, your experience translates directly.
            </p>

            <Callout icon={TrendingUp} color="sky" title="FedRAMP authorization is a differentiator">
              Any software or cloud service sold to federal agencies needs FedRAMP authorization at
              the appropriate impact level. If your product has FedRAMP-Ready or Authorized status,
              lead with it in every proposal and capability statement. Contracting officers are
              actively looking for vendors who clear this hurdle — it shortens procurement timelines
              significantly. Update your{" "}
              <Link
                href="/features/capability-statement"
                className="font-medium hover:underline"
              >
                capability statement
              </Link>{" "}
              to highlight any FedRAMP or CMMC compliance credentials.
            </Callout>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="healthcare-it"
            number="06"
            title="Healthcare IT: VA and HHS Billions"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Department of Veterans Affairs carries a $301.4 billion FY2026 budget — up 8.2%
              year-over-year — making it one of the fastest-growing agencies in the federal
              government right now. That growth is driven by the PACT Act (expanding VA benefits
              for burn pit exposure veterans), the Electronic Health Record Modernization (EHRM)
              program restarting deployments in 2026, and a massive contract the VA is readying
              for veterans&apos; private-sector healthcare access.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The EHRM program — the Cerner/Oracle Health implementation — is slated to go live
              at 13 additional medical facilities in 2026, with full deployment projected through
              2031. Each facility go-live generates significant demand for implementation support,
              training, change management, and integration services. Small businesses with health
              IT experience and existing VA relationships are well-positioned.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              At HHS, the picture is more mixed. The overall HHS budget sits at $156.7 billion
              (down 1.2% year-over-year from FY2025), and DOGE-driven cuts have hit advisory
              and consulting programs. But the modernization agenda is intact. HHS requested $100
              million for cybersecurity in FY2026, $130 million for a new chief technology officer
              office, and the HHS One Professional Services Solutions (HOPSS) contract — a $3.6
              billion small-business set-aside — is moving toward award in 2027.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 animate-on-scroll">
                <HeartPulse className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-stone-900 mb-3">VA Opportunities</h3>
                <ul className="space-y-2">
                  {[
                    "EHRM implementation support (13 facility go-lives in 2026)",
                    "T4NG2 task orders (IT services and solutions)",
                    "PACT Act benefits processing and claims support",
                    "Telehealth expansion services",
                    "Private-sector healthcare access contract (massive upcoming award)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 animate-on-scroll">
                <Globe className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-stone-900 mb-3">HHS Opportunities</h3>
                <ul className="space-y-2">
                  {[
                    "HOPSS contract ($3.6B small business set-aside, award ~2027)",
                    "Cybersecurity modernization ($100M FY2026 budget)",
                    "CTO office technology initiatives ($130M)",
                    "CMS digital services and data modernization",
                    "CDC IT infrastructure and public health surveillance systems",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For veteran-owned businesses, the VA is the most favorable agency in the entire
              federal market. The Veterans First contracting policy gives SDVOSBs and VOSBs
              priority over all other set-aside categories at the VA — not just preference, but
              mandatory sequencing. If you hold SDVOSB certification, the VA should be at the top
              of your agency target list. Read{" "}
              <Link
                href="/blog/sdvosb-contracts-guide"
                className="text-blue-700 hover:underline font-medium"
              >
                our SDVOSB contracts guide
              </Link>{" "}
              for a full breakdown of how to position for VA work.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="construction"
            number="07"
            title="Construction and Facilities: Military Modernization"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Military construction is one of the most consistent and predictable spending
              categories in the federal market. Congress approved $19.737 billion for military
              construction and family housing in FY2026 — 4.5% above the President&apos;s request.
              The projects in the pipeline are large, multi-year, and clearly defined.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The priority investments for FY2026 MILCON include:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                {
                  point: "Navy shipyard modernization",
                  detail:
                    "Dry-dock modernization at major Navy shipyards supporting Columbia and Virginia-class submarine production. These are multi-year construction programs with significant civil and specialty construction work.",
                },
                {
                  point: "Indo-Pacific posture upgrades",
                  detail:
                    "Hardened facilities and airfield improvements on Guam and across the Pacific are a stated DoD priority. Engineering, construction, and facilities management work for small businesses with relevant experience.",
                },
                {
                  point: "Child Development Centers",
                  detail:
                    "Congress appropriated funding beyond the President's request specifically for on-base Child Development Centers — construction and renovation work for small contractors familiar with DoD installation projects.",
                },
                {
                  point: "PFAS environmental remediation",
                  detail:
                    "The NDAA includes expedited funding for remediation of PFAS contamination at military installations. Environmental engineering and construction firms should be tracking these requirements closely.",
                },
                {
                  point: "Civilian facilities O&M",
                  detail:
                    "Beyond DoD, facilities operations and maintenance (O&M) at GSA-managed federal buildings remains a steady market with hundreds of small contract opportunities across every region.",
                },
              ].map(({ point, detail }) => (
                <li key={point} className="flex gap-3">
                  <HardHat className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800">{point}: </span>
                    <span className="text-stone-600 text-sm">{detail}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-stone-600 leading-relaxed mb-4">
              Construction government contracting has specific compliance requirements — bonding,
              Davis-Bacon Act wage rules, and SBA size standards that differ by project type — that
              separate prepared bidders from aspirational ones. If you&apos;re new to federal
              construction, understand the compliance requirements before you bid your first
              solicitation.
            </p>

            <Callout icon={Building2} color="amber" title="HUBZone firms have a construction advantage">
              Many military installations are located in or near HUBZone-designated areas. If your
              construction firm operates in a qualifying HUBZone, you can compete for set-aside
              contracts that dramatically reduce your competition pool. Use the{" "}
              <Link
                href="/features/quick-checker"
                className="font-medium hover:underline"
              >
                CapturePilot Quick Checker
              </Link>{" "}
              to verify your HUBZone eligibility based on your principal office address. Read our{" "}
              <Link
                href="/blog/hubzone-program-guide"
                className="font-medium hover:underline"
              >
                HUBZone program guide
              </Link>{" "}
              to understand how the program works.
            </Callout>

            {/* CTA 2 */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 my-10 animate-on-scroll">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-900 mb-2">
                    Track agency spending in real time
                  </h3>
                  <p className="text-stone-600 text-sm mb-4">
                    CapturePilot&apos;s intelligence dashboard monitors contract awards, budget
                    justifications, and procurement forecasts across 24 major agencies — so you
                    know where money is moving before your competitors do.
                  </p>
                  <Link
                    href="/features/intelligence"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors text-sm"
                  >
                    Explore market intelligence <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="small-business"
            number="08"
            title="Small Business: $183 Billion and What It Means"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Biden administration announced that small businesses received a record $183
              billion in prime contracts in FY2024, representing 28.8% of all federal contracting
              dollars — exceeding the 23% statutory goal for the fourth consecutive year. That
              headline is accurate and meaningful. But it doesn&apos;t capture the structural
              challenge underneath it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The number of small businesses actively participating in the federal market has
              declined by 49% since FY2010. More dollars are flowing to small businesses, but fewer
              businesses are capturing them. That means the pie is shared among a shrinking group of
              active participants — which is either concerning or an opportunity, depending on where
              you sit.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="rounded-2xl border border-stone-200 p-6 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-4">Small Business Program Goals (FY2026)</h3>
                <div className="space-y-3">
                  {[
                    { label: "Overall small business goal", pct: "23%", actual: "28.8% in FY2024", color: "emerald" },
                    { label: "Small disadvantaged business (SDB)", pct: "15%", actual: "Elevated from 12% in FY2025", color: "blue" },
                    { label: "WOSB / EDWOSB", pct: "5%", actual: "Set-aside mandatory", color: "sky" },
                    { label: "SDVOSB / VOSB", pct: "3%", actual: "VA Veterans First policy applies", color: "amber" },
                    { label: "HUBZone", pct: "3%", actual: "Location-based preference", color: "stone" },
                  ].map(({ label, pct, actual, color }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                          color === "emerald"
                            ? "bg-emerald-100 text-emerald-800"
                            : color === "blue"
                            ? "bg-blue-100 text-blue-800"
                            : color === "sky"
                            ? "bg-sky-100 text-sky-800"
                            : color === "amber"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        {pct}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-stone-800">{label}</p>
                        <p className="text-xs text-stone-500">{actual}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 p-6 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-4">Why Participation Is Shrinking</h3>
                <ul className="space-y-3">
                  {[
                    "Compliance costs (CMMC, SAM.gov, insurance) create high barriers to entry",
                    "IDIQ vehicles and GWACs concentrate spending among incumbents who got on vehicles early",
                    "Long procurement timelines (12–18 months average) create cash flow challenges",
                    "Large set-aside IDIQs consolidate work that previously went to multiple small contracts",
                    "Recompetes favor incumbents with documented past performance",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-stone-600">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The implication: entering the federal market right now still makes sense, but the
              barriers are real. The businesses winning are the ones who invest in understanding
              the market before they bid — not the ones who find a SAM.gov opportunity and
              immediately start writing a proposal. Use the{" "}
              <Link
                href="/features/matching"
                className="text-blue-700 hover:underline font-medium"
              >
                CapturePilot matching engine
              </Link>{" "}
              to surface opportunities where your specific certifications, NAICS codes, and past
              performance give you a structural advantage — not just opportunities that sound
              interesting.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              If you haven&apos;t determined which set-aside certifications apply to your business,
              that&apos;s the first thing to fix. Certifications like 8(a), SDVOSB, WOSB, and
              HUBZone can fundamentally change your competitive position — not just your eligibility.
              Our{" "}
              <Link
                href="/blog/federal-contracting-certifications"
                className="text-blue-700 hover:underline font-medium"
              >
                guide to federal contracting certifications
              </Link>{" "}
              covers which ones actually move the needle and how to pursue them.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="positioning"
            number="09"
            title="How to Position Your Business for the Shift"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The 2026 federal market rewards specificity. Broad capability statements and generic
              proposal language don&apos;t win in an environment where contracting officers are
              managing more pressure with less time. Here&apos;s the positioning framework that
              applies right now.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  step: "01",
                  title: "Audit your agency mix",
                  body: "Map your current pipeline by agency and category. Quantify what share of your active and prospective contracts sit in DOGE-impacted versus protected agencies. If more than 40% of your pipeline is concentrated in two or fewer civilian agencies, that's a risk — not a strategy.",
                  color: "blue",
                },
                {
                  step: "02",
                  title: "Update your certifications",
                  body: "SDVOSB certification through SBA's new direct verification process, 8(a) program participation, WOSB eligibility, and HUBZone status are all worth verifying or pursuing now. The defense spending surge means set-aside competition is intensifying — you want every structural advantage locked in.",
                  color: "sky",
                },
                {
                  step: "03",
                  title: "Get on IDIQ vehicles",
                  body: "Identify which IDIQ vehicles and GWACs align with your capabilities and have open on-ramp periods or small business pool solicitations in the next 12 months. Polaris, CIO-SP4, OASIS+, T4NG2, and Seaport NxG are the ones worth investigating first.",
                  color: "emerald",
                },
                {
                  step: "04",
                  title: "Build your past performance record deliberately",
                  body: "Every contract you perform is a future proposal asset. Write CPARS narratives, document outcomes with numbers, and structure your work so you have clean, citable examples aligned to your target categories. Past performance in defense IT is worth more than past performance in civilian consulting right now.",
                  color: "amber",
                },
                {
                  step: "05",
                  title: "Engage agencies before the RFP",
                  body: "Sources sought responses, RFI submissions, and industry day attendance are all tools for shaping requirements before they're locked in. The contractors who win are consistently the ones who engage 12-18 months before award. Use sources sought as a free market research tool and a relationship-building mechanism.",
                  color: "blue",
                },
              ].map(({ step, title, body, color }) => (
                <div
                  key={step}
                  className={`flex gap-5 animate-on-scroll border rounded-2xl p-6 ${
                    color === "blue"
                      ? "border-blue-200 bg-blue-50"
                      : color === "sky"
                      ? "border-sky-200 bg-sky-50"
                      : color === "emerald"
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-amber-200 bg-amber-50"
                  }`}
                >
                  <span
                    className={`text-2xl font-black flex-shrink-0 ${
                      color === "blue"
                        ? "text-blue-300"
                        : color === "sky"
                        ? "text-sky-300"
                        : color === "emerald"
                        ? "text-emerald-300"
                        : "text-amber-300"
                    }`}
                  >
                    {step}
                  </span>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The biggest mistake small businesses make in a shifting market is treating their
              pipeline as a set of individual bids rather than a portfolio of relationships and
              positions. Managing that portfolio systematically —{" "}
              <Link
                href="/blog/government-contract-pipeline-management"
                className="text-blue-700 hover:underline font-medium"
              >
                knowing your pipeline health at every stage
              </Link>{" "}
              — is what separates businesses that grow in this environment from ones that scramble.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The{" "}
              <Link
                href="/features/pipeline"
                className="text-blue-700 hover:underline font-medium"
              >
                CapturePilot pipeline tool
              </Link>{" "}
              gives you a single view of every opportunity you&apos;re tracking, from sources sought
              through proposal submission, so you can see your probability-weighted revenue, identify
              where you&apos;re thin, and manage capture work before deadlines become emergencies.
            </p>

            <Callout icon={CheckCircle2} color="emerald" title="The market is large enough to be selective">
              There are hundreds of thousands of active federal contract opportunities at any given
              time. The ones worth your time are the ones where you have a structural advantage:
              a matching set-aside certification, documented past performance in the same category,
              an existing agency relationship, or incumbency on a related task order. Chasing
              opportunities where you have no structural edge is where most small businesses waste
              their BD budget. Be selective. Your{" "}
              <Link
                href="/features/quick-checker"
                className="font-medium hover:underline"
              >
                Quick Checker score
              </Link>{" "}
              is a fast read on whether a specific opportunity is worth pursuing.
            </Callout>

            {/* Final CTA */}
            <div className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 my-10 text-white animate-on-scroll">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <h3 className="text-xl font-black mb-2">
                  Start your 30-day free trial
                </h3>
                <p className="text-stone-300 text-sm mb-6 max-w-md mx-auto">
                  Track the agencies where money is moving, match to your certifications, and
                  manage your pipeline from discovery to award — all in one platform built for
                  small business GovCon.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-full transition-colors"
                  >
                    Start free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-full transition-colors"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-stone-100 pt-10 mt-10">
              <h3 className="font-bold text-stone-900 mb-4">Related reading</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog/how-to-find-government-contracts-small-business",
                    title: "How to Find Government Contracts for Your Small Business",
                    description: "Start here if you're new to the federal market.",
                  },
                  {
                    href: "/blog/idiq-contracts-explained",
                    title: "IDIQ Contracts Explained",
                    description: "How multi-year contract vehicles work and which ones to pursue.",
                  },
                  {
                    href: "/blog/small-business-set-aside-threshold",
                    title: "Small Business Set-Aside Thresholds",
                    description: "Dollar limits and mandatory set-aside rules for 2026.",
                  },
                  {
                    href: "/blog/sdvosb-contracts-guide",
                    title: "SDVOSB Contracts Guide",
                    description: "Complete guide for veteran-owned businesses winning VA and DoD work.",
                  },
                ].map(({ href, title, description }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-xl border border-stone-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <p className="font-semibold text-stone-900 text-sm group-hover:text-blue-700 mb-1">
                      {title}
                    </p>
                    <p className="text-xs text-stone-500">{description}</p>
                    <div className="flex items-center gap-1 mt-2 text-blue-600 text-xs font-medium">
                      Read article <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
