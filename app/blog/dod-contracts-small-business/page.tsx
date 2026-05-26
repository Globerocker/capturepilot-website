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
  Shield,
  DollarSign,
  Target,
  Zap,
  Building2,
  TrendingUp,
  Star,
  FileText,
  Clock,
  Award,
  Sparkles,
  BarChart3,
  Layers,
  Cpu,
  HardHat,
  Package,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-dod-opportunity", label: "The $508 Billion Defense Market" },
  { id: "what-dod-buys", label: "What DoD Actually Buys from Small Businesses" },
  { id: "buying-organizations", label: "Six Buying Organizations You Need to Know" },
  { id: "set-asides", label: "DoD Set-Asides: How the Rules Work" },
  { id: "sbir-sttr", label: "SBIR/STTR: The Innovation Path In" },
  { id: "dla-dibbs", label: "DLA and DIBBS: The Easiest Entry Point" },
  { id: "getting-registered", label: "Getting Registered and Visible to DoD Buyers" },
  { id: "building-pipeline", label: "Building a Sustainable DoD Pipeline" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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

export default function DoDContractsSmallBusinessPage() {
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
            <span className="text-stone-900 font-medium">DoD Contracts for Small Business</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Federal Agencies
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Department of Defense Contracts for Small Business:{" "}
            <span className="gradient-text">Where to Start</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The DoD awarded <strong className="text-stone-700">$508.8 billion in contracts in FY2025</strong> — more
            than the next ten agencies combined. Small businesses captured a significant slice of
            that, and the rules are designed to give you a real shot. Here&apos;s how the defense
            market works, which doors are open to you, and how to walk through them.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 26, 2026</span>
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
            id="the-dod-opportunity"
            number="01"
            title="The $508 Billion Defense Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              No other federal buyer comes close. In FY2025, the Department of Defense and its
              component agencies accounted for <strong>$508.8 billion in contract awards</strong> —
              61% of all federal contracting dollars and a 9.6% increase over FY2024. The DoD
              spends more on contracts than the next ten civilian agencies combined.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Small businesses are a mandated part of that spending. In FY2024, the DoD earned an
              &quot;A&quot; rating on the federal small business scorecard, increasing small business
              awards by <strong>$4.9 billion</strong> year-over-year. The entire federal government
              awarded a record <strong>$183 billion</strong> in prime contracts to small businesses
              in FY2024 — 28.8% of all federal contracting — exceeding the 23% statutory goal by a
              wide margin.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              That&apos;s not charity. DoD contracting officers are evaluated on small business
              utilization. Missing their small business goals has career consequences. The
              structural pressure to spend with small businesses is real — and it&apos;s your
              leverage.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$508.8B", label: "DoD contracts awarded in FY2025", icon: DollarSign },
                { stat: "61%", label: "Share of all federal contracting", icon: BarChart3 },
                { stat: "$183B", label: "Small business prime awards FY2024 (govt-wide)", icon: Target },
                { stat: "\"A\"", label: "DoD FY2024 small business scorecard grade", icon: Star },
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
              The DoD&apos;s FY2026 budget requested <strong>$205 billion</strong> in procurement
              alone — and that&apos;s before supplemental spending. Defense spending is projected to
              keep climbing even as civilian agencies absorb cuts. If you&apos;re choosing which
              federal market to build toward, the direction is clear.
            </p>
            <p className="text-stone-600 leading-relaxed">
              There are real barriers: clearances, compliance requirements, long sales cycles. But
              the market is large enough that many small businesses build their entire federal
              practice on DoD work alone. The key is knowing which doors exist — and which one
              makes sense for where your business is today.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="Defense vs. Civilian: Key Differences">
            DoD contracting moves differently than civilian agency work. Procurement is
            decentralized — the Army, Navy, Air Force, DLA, DARPA, and dozens of other commands
            all buy independently. Clearances (Secret, Top Secret) are required for some but not
            all contracts. Many high-value DoD contracts run through contract vehicles like
            SeaPort-NxG or CHESS rather than direct solicitations. And the DoD&apos;s small
            business programs — particularly SBIR/STTR — have no equivalent at civilian agencies.
            Understand the DoD&apos;s structure before chasing its opportunities.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="what-dod-buys"
            number="02"
            title="What DoD Actually Buys from Small Businesses"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The DoD&apos;s small business spend isn&apos;t concentrated in weapons systems and
              classified programs — most of it flows through categories that any well-run small
              business can pursue. Understanding where DoD spending concentrates by category is the
              first step to identifying where you fit.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Category</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Small Biz Share</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Key Buyers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        cat: "Facilities & Construction",
                        share: "39% to small businesses",
                        buyers: "Army Corps of Engineers (USACE), military base commands",
                      },
                      {
                        cat: "Information Technology",
                        share: "36% to small businesses",
                        buyers: "Army CHESS, DISA, SPAWAR, service IT commands",
                      },
                      {
                        cat: "Professional Services",
                        share: "28% to small businesses",
                        buyers: "Navy SeaPort-NxG, OSD, component program offices",
                      },
                      {
                        cat: "Logistics & Supply (DLA)",
                        share: "Significant — food, fuel, parts",
                        buyers: "Defense Logistics Agency, DIBBS platform",
                      },
                      {
                        cat: "R&D / Technology",
                        share: "$1.8B SBIR/STTR annually",
                        buyers: "DARPA, service R&D commands, OSD",
                      },
                      {
                        cat: "Maintenance & Repair",
                        share: "Strong for depot-level work",
                        buyers: "NAVSEA, AFSC, DLA Aviation",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-medium text-stone-800">{row.cat}</td>
                        <td className="px-5 py-3 text-blue-700 font-medium text-xs">{row.share}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-snug">{row.buyers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Facilities and construction is the most accessible category for small businesses new
              to defense. The Army Corps of Engineers alone publishes hundreds of small
              business-set-aside construction opportunities every year, with a formal
              subcontracting requirement for any large business receiving a construction contract
              over $1.5 million.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              IT is the fastest-growing category and the one with the most active contract vehicles
              designed for small business access. Defense agencies have modernization mandates they
              are legally required to fund. Cloud migration, cybersecurity compliance, software
              development — these are needs that don&apos;t require clearances to start (though
              clearances expand your options significantly).
            </p>
            <p className="text-stone-600 leading-relaxed">
              Logistics supply is unique: the Defense Logistics Agency runs the most transactional
              procurement operation in the federal government. If you make or distribute physical
              goods — industrial parts, food, clothing, medical supplies — DLA is a buyer you can
              reach with relatively low overhead. We&apos;ll cover the DLA entry path in detail in
              Section 6.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Find Your DoD Opportunities in 3 Minutes
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Enter your NAICS codes and certifications. CapturePilot&apos;s matching engine scans
              SAM.gov daily and surfaces DoD set-aside contracts aligned to your specific profile.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">Free, no account required</p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="buying-organizations"
            number="03"
            title="Six DoD Buying Organizations You Need to Know"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The DoD is not a single buyer. It&apos;s a constellation of semi-independent
              procurement organizations, each with its own contracting offices, small business
              programs, and procurement vehicles. Knowing which one aligns to your services
              determines your entire outreach strategy.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: HardHat,
                  title: "Army Corps of Engineers (USACE)",
                  tag: "Construction / Engineering",
                  desc: "USACE is the go-to for small business construction and engineering work on military installations. They post upcoming contract opportunities on their forecast portal, set aside a large percentage of work below the simplified acquisition threshold, and require large-prime subcontracting plans for contracts over $1.5M. USACE has district offices nationwide — building relationships at the district level closest to your base of operations is the highest-leverage entry point.",
                },
                {
                  icon: Cpu,
                  title: "Army CHESS / DISA",
                  tag: "IT / Cybersecurity",
                  desc: "The Army's Computer Hardware, Enterprise Software and Solutions (CHESS) program is the primary vehicle for IT purchases across Army installations. DISA (Defense Information Systems Agency) manages department-wide IT infrastructure and cybersecurity platforms. Both run small-business accessible procurement — but getting on CHESS requires an existing GSA schedule or other contract vehicle. Pair a GSA IT-70 schedule with DoD IT opportunities.",
                },
                {
                  icon: Layers,
                  title: "Navy SeaPort-NxG",
                  tag: "Professional Services",
                  desc: "SeaPort-NxG is the Navy's primary IDIQ vehicle for professional, engineering, and technical services. It's open to small businesses and covers work across the Navy and Marine Corps. Firms on SeaPort-NxG can receive task order RFPs directly — eliminating the need to find each opportunity on SAM.gov. Getting on the vehicle requires a competitive proposal, but once you're on, you have a channel for a wide range of Navy professional services work.",
                },
                {
                  icon: Package,
                  title: "Defense Logistics Agency (DLA)",
                  tag: "Supply / Logistics",
                  desc: "DLA manages nearly all consumable military supplies: food, fuel, uniforms, pharmaceuticals, industrial hardware, construction materials, and vehicle parts. Their procurement system — DIBBS (DLA Internet Bid Board System) — posts thousands of solicitations at a time, many well within small business reach. If you're a manufacturer or distributor of physical goods, DLA is your entry point. Registration is straightforward and we cover it in detail in Section 6.",
                },
                {
                  icon: Zap,
                  title: "DARPA / Service R&D Commands",
                  tag: "Innovation / R&D",
                  desc: "DARPA (Defense Advanced Research Projects Agency) funds early-stage technology development. The service R&D commands — Army Research Laboratory, Naval Research Laboratory, Air Force Research Laboratory — all operate SBIR programs. These are not normal contracting opportunities. They require novel technology and a research-grade team. But Phase I awards ($314K) are accessible to any qualified small business with an innovative concept, and Phase II ($2.1M) can bridge to larger DoD programs.",
                },
                {
                  icon: Shield,
                  title: "SOCOM / Special Mission Units",
                  tag: "Specialized / Cleared Work",
                  desc: "Special Operations Command (SOCOM) and related components run their own small business outreach. Much of this work requires clearances and specialized capabilities — but SOCOM also buys commercial-off-the-shelf goods, training support, and equipment that doesn't require classified access. The SOCOM OSBP runs industry days and publishes a capabilities database. If your firm has relevant capabilities and veteran leadership, this is worth a focused look.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Each of these organizations has an Office of Small Business Programs (OSBP) or
              equivalent. These offices run industry days, maintain small business directories,
              and connect small businesses with program managers before solicitations are
              published. Make their contact lists before you start bidding. Use{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                CapturePilot Intelligence
              </Link>{" "}
              to identify which DoD commands are spending in your NAICS codes — then reach out to
              the right OSBP, not a generic inbox.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="set-asides"
            number="04"
            title="DoD Set-Asides: How the Rules Work"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              DoD set-aside rules follow the FAR and SBA regulations that apply across the federal
              government — with some defense-specific additions. The core rule: any contract
              expected to attract offers from two or more small businesses at a fair price must be
              set aside for small business competition. Contracting officers don&apos;t have
              discretion on this; it&apos;s mandatory.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              About 8% of DoD dollars — over $48.9 billion in FY2025 — flow through set-aside
              contracts, with more than $27 billion designated specifically as small business
              set-asides. That&apos;s real money in competitions where the only firms at the table
              are small businesses.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Set-Aside Type</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Who Qualifies</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Sole Source Threshold</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Small Business (general)",
                        who: "Any SBA-certified small business in the NAICS code",
                        threshold: "$4M (services) / $7M (manufacturing)",
                      },
                      {
                        type: "SDVOSB",
                        who: "SBA VetCert-certified service-disabled veteran-owned",
                        threshold: "$4M (services) / $7M (manufacturing)",
                      },
                      {
                        type: "8(a)",
                        who: "SBA 8(a) certified socially and economically disadvantaged",
                        threshold: "$4.5M (non-mfg) / $7.5M (mfg)",
                      },
                      {
                        type: "HUBZone",
                        who: "SBA-certified firm with ≥35% employees in HUBZone",
                        threshold: "$4.5M (services) / $7.5M (mfg)",
                      },
                      {
                        type: "WOSB / EDWOSB",
                        who: "Certified women-owned, economically disadvantaged variant",
                        threshold: "No sole source (must compete)",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i === 0 ? "bg-blue-50" : "hover:bg-stone-50"
                        }`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-sm">{row.type}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-snug">{row.who}</td>
                        <td className="px-5 py-3 text-blue-700 font-medium text-xs">{row.threshold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              DoD also uses set-asides on task orders under Multiple Award Contracts (MACs). A
              2025 proposed FAR rule would expand mandatory small-business order set-asides on
              MACs — meaning even firms that didn&apos;t win a MAC vehicle seat could see more
              small-business-only competitions on delivery orders. Watch for this rule to finalize.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Large business prime contractors receiving DoD contracts over $650,000 (or $1.5M for
              construction) are required to submit subcontracting plans committing a percentage of
              their contract value to small businesses. This creates a parallel market: subcontracts
              from large DoD primes, which don&apos;t require you to have your own prime contract
              history to pursue.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If you have certifications — SDVOSB, 8(a), HUBZone — run a{" "}
              <Link href="/features/quick-checker" className="text-blue-700 underline font-medium">
                Quick Checker
              </Link>{" "}
              to confirm all the set-aside types you qualify for. Stacking certifications (e.g.,
              an 8(a) SDVOSB) expands your accessible contract universe and makes you more
              attractive as a teaming partner to primes who need certified subcontractors to hit
              their set-aside goals. See our{" "}
              <Link href="/blog/small-business-set-aside-threshold" className="text-blue-700 underline font-medium">
                set-aside thresholds guide
              </Link>{" "}
              for the full dollar rules.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="The 'Rule of Two' Is Mandatory at DoD">
            FAR 19.502-2 requires that any acquisition above the micro-purchase threshold
            ($10,000) be set aside for small business exclusively when there is a reasonable
            expectation that at least two small business concerns will submit offers at fair market
            price. This is not a preference — it&apos;s a legal requirement. If you&apos;re in a
            NAICS code where few small businesses actively respond to Sources Sought notices, you
            may find DoD contracting officers defaulting to full-and-open procurement simply
            because they can&apos;t identify competitors. Responding to Sources Sought is how you
            signal your existence and trigger set-aside designations. See our guide on{" "}
            <Link href="/blog/sources-sought-notice" className="underline font-medium">
              Sources Sought notices
            </Link>{" "}
            for the exact approach.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="sbir-sttr"
            number="05"
            title="SBIR/STTR: The Innovation Path Into Defense"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Small Business Innovation Research (SBIR) program is the most important
              small-business-exclusive program the federal government operates — and DoD runs the
              largest piece of it. The DoD&apos;s annual SBIR/STTR budget is approximately{" "}
              <strong>$1.8 billion</strong>, the highest of any agency. The program was
              reauthorized through FY2031 as of April 2026, so it&apos;s stable ground for
              long-term planning.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              SBIR works in phases. Phase I is the proof-of-concept award — a fast, competitive,
              and achievable milestone for any small business with an innovative idea that maps to
              a DoD technology need. Phase II is full R&D development. Phase III is where the
              technology transitions into DoD programs or commercial use.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "Phase I",
                  amount: "Up to ~$314,000",
                  duration: "~6 months",
                  desc: "Feasibility study and proof of concept. You respond to a specific DoD topic published in a solicitation, propose an approach, and compete against other small businesses. No prior DoD relationship required. The application is a technical proposal, typically 20-40 pages. DoD publishes new SBIR solicitations 2-3 times per year per service branch.",
                },
                {
                  step: "Phase II",
                  amount: "Up to ~$2.1 million",
                  duration: "~24 months",
                  desc: "Full R&D development based on Phase I results. Phase II is typically invitation-only for Phase I awardees, though some agencies run direct Phase II competitions for firms with relevant prior work. Awards are contracts, not grants — you maintain IP rights and can commercialize independently.",
                },
                {
                  step: "Phase III",
                  amount: "No statutory limit",
                  duration: "Ongoing",
                  desc: "Transition to DoD programs or commercial markets. Phase III contracts can be awarded without competition — the government can sole source to your firm based on Phase I/II work. This is where SBIR creates long-term DoD relationships. A successful Phase III can anchor your defense contracting business for a decade.",
                },
                {
                  step: "Strategic Breakthrough Awards",
                  amount: "Up to $30 million",
                  duration: "Up to 48 months",
                  desc: "Post-Phase II awards introduced in 2025 for the most promising defense technologies. These require 100% private matching investment, are highly selective, and target technologies with near-term transition potential. This is for proven Phase II performers, not new entrants.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="flex-shrink-0 text-right" style={{ minWidth: "80px" }}>
                    <p className="font-bold text-blue-700 text-sm">{item.step}</p>
                    <p className="text-xs text-stone-500 font-mono">{item.amount}</p>
                    <p className="text-xs text-stone-400">{item.duration}</p>
                  </div>
                  <div className="border-l border-stone-200 pl-4">
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              SBIR has real advantages beyond the immediate award. A Phase I win establishes your
              firm as a DoD technology partner — contracting officers, program managers, and
              science and technology executives start paying attention. Phase II work builds the
              past performance record that all DoD programs require. And Phase III sole source
              authority means your SBIR investment can convert directly to competitive-free
              contract awards.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The STTR variant (Small Business Technology Transfer) adds a university research
              institution to the team. If your technology has academic origins or you have a
              university partner, STTR is the appropriate program. Find DoD SBIR topics at{" "}
              <strong>dodsbirsttr.mil</strong>. Service-specific portals (Army, Navy, Air Force,
              SOCOM, DARPA, MDA) each run their own topic solicitations with different focus areas
              and timing.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="SBIR Doesn't Require Existing DoD Relationships">
            This is the most common misconception about SBIR. Phase I competitions are open to any
            small business that submits a qualified proposal to an open topic. You do not need a
            contracting officer relationship, a cleared facility, or existing DoD work. What you
            need is an innovative technical approach that maps to the published topic, a qualified
            PI (principal investigator), and an SAM.gov registration. Many defense-focused small
            businesses started with a Phase I SBIR win and built their entire business outward from
            that foundation.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="dla-dibbs"
            number="06"
            title="DLA and DIBBS: The Lowest-Barrier Entry Point"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              For small businesses that make, distribute, or source physical goods, the Defense
              Logistics Agency is often the fastest path to a first DoD contract. DLA manages
              nearly all consumable military supply: food, fuel, clothing, pharmaceuticals,
              industrial hardware, vehicle parts, construction materials. The procurement volume
              is massive — and the process is far more transactional than traditional defense
              contracting.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              DLA&apos;s primary procurement platform is <strong>DIBBS</strong> — the DLA Internet
              Bid Board System. Think of it as a real-time bid board where DLA posts Requests for
              Quotation (RFQs), Invitations for Bid (IFBs), and Requests for Proposals (RFPs)
              continuously. Thousands of line items are open at any given time. Unlike the complex
              proposal processes of other DoD contracting, DLA DIBBS procurement for many
              commercial and catalog items is straightforward: quote a price, meet delivery
              requirements, win award.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Register in SAM.gov",
                  desc: "DLA requires SAM registration before any contract award — same as all federal agencies. Make sure your NAICS codes reflect the product categories you supply. DLA uses these codes to match your business to relevant solicitations. Your CAGE code (assigned during SAM registration) is your DLA vendor identifier.",
                },
                {
                  step: "02",
                  title: "Register in DIBBS",
                  desc: "Go to dibbs.dla.mil and create a vendor account. You&apos;ll need your CAGE code and SAM registration information. Once registered, you can search open solicitations, set up automated email alerts for specific NSN (National Stock Numbers) or product categories, and submit quotes electronically.",
                },
                {
                  step: "03",
                  title: "Identify your product catalog match",
                  desc: "DLA uses National Stock Numbers (NSNs) to identify items. Search DIBBS for NSNs that match your product lines. If DLA already buys items you make or distribute, those are your starting opportunities. If not, the DLA supplier network also includes custom manufacturing requirements — check solicitation type carefully.",
                },
                {
                  step: "04",
                  title: "Request qualification approvals if needed",
                  desc: "Some DLA items require Qualified Products List (QPL) or Qualified Manufacturers List (QML) approval before you can submit a bid. This is most common for safety-critical items (medical devices, aviation parts, food). The approval process takes weeks to months — research requirements for your product category before planning bid timelines.",
                },
                {
                  step: "05",
                  title: "Submit quotes and build a track record",
                  desc: "Start with items where you have existing supply relationships and competitive pricing. DLA awards are heavily price-driven on commodity items. Win some contracts, build your DLA past performance, and expand into higher-value or more complex items. Consistency and delivery reliability are the keys to growing DLA revenue.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              DLA also runs a Prime Vendor Program for food and other consumable categories.
              Prime vendors serve as the single distributor for DLA across a geographic region,
              supplying multiple military installations. These are larger, longer-term contracts
              that require significant distribution infrastructure — but they represent
              predictable, recurring defense revenue for qualified distributors.
            </p>
            <p className="text-stone-600 leading-relaxed">
              DLA posts upcoming procurement forecasts on its website. Review them quarterly.
              Products that DLA is planning to procure 6-12 months out give you time to secure
              supply relationships, get any required qualifications, and position a competitive
              quote before the solicitation opens.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">Match Your Profile to DoD Opportunities</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot scans SAM.gov daily and matches your NAICS codes, certifications, and
              target agencies against open DoD solicitations — surfacing the contracts most
              relevant to your business, not a generic keyword search.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="bg-transparent text-white border border-stone-600 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Strategy Call
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-4">No credit card required for the free trial.</p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="getting-registered"
            number="07"
            title="Getting Registered and Visible to DoD Buyers"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              DoD contracting officers find small businesses through SAM.gov, their own
              agency databases, and personal networks. Getting registered isn&apos;t enough —
              you have to be findable in the right places with the right information. Here&apos;s
              the full registration stack for DoD visibility.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Registration</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Why It Matters for DoD</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Required?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        reg: "SAM.gov",
                        why: "Mandatory for all federal contracts; contracting officers search it to find small businesses; set-aside eligibility is verified here",
                        req: "Yes — no contract without it",
                      },
                      {
                        reg: "SBA certifications (8a, HUBZone, VetCert)",
                        why: "Unlocks set-aside competitions and sole source authority; visible to DoD contracting officers via SAM.gov certification flags",
                        req: "If you qualify, get them",
                      },
                      {
                        reg: "DIBBS (dla.mil)",
                        why: "Required for any DLA supply chain work; separate from SAM registration",
                        req: "Yes, for DLA work",
                      },
                      {
                        reg: "Agency OSBP directories",
                        why: "Army, Navy, Air Force, SOCOM each maintain small business databases their program managers use to find vendors",
                        req: "Strongly recommended",
                      },
                      {
                        reg: "GSA Schedule (MAS)",
                        why: "Opens access to GSA eBuy — a separate channel where DoD buys via GSA vehicles; required for Army CHESS and many DISA opportunities",
                        req: "Optional but high-value",
                      },
                      {
                        reg: "DoD SBIR/STTR portal (dodsbirsttr.mil)",
                        why: "Required to submit SBIR/STTR proposals; separate from SAM.gov",
                        req: "Yes, for SBIR work",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-medium text-stone-800">{row.reg}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-snug">{row.why}</td>
                        <td className="px-5 py-3 text-blue-700 font-medium text-xs">{row.req}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your SAM.gov profile is your first impression with DoD contracting officers.
              Treat it seriously. The &quot;capabilities narrative&quot; field is searchable — use
              the exact language DoD uses in solicitation descriptions for work in your NAICS codes.
              List all relevant NAICS codes, not just your primary one. Include your certifications,
              past performance keywords, and any security clearance facility status.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Beyond registrations, your{" "}
              <Link href="/features/capability-statement" className="text-blue-700 underline font-medium">
                capability statement
              </Link>{" "}
              is the document that opens doors at OSBP offices, industry days, and program office
              meetings. At DoD, capability statements should emphasize: your NAICS codes and
              applicable CAGE code, past performance on similar government or commercial work,
              your clearance status (if any), certifications, key personnel qualifications, and
              contact information.
            </p>
            <p className="text-stone-600 leading-relaxed">
              DoD-specific tip: if you have a facility clearance (FCL) or personnel security
              clearances, mention them explicitly. Cleared firms are a constrained resource in the
              defense market — contracting officers actively look for small businesses with
              clearance access for classified or sensitive programs.
            </p>
          </div>

          <Callout icon={Star} color="sky" title="Industry Days Are DoD's Open Doors">
            DoD commands run formal industry days before many large acquisitions — events where
            program managers brief industry on requirements and take one-on-one sessions with
            small businesses. These aren&apos;t networking events; they&apos;re procurement
            events. Attending and requesting a one-on-one session with the program manager or
            contracting officer before a solicitation is released is legal, encouraged, and
            produces better bids. Find DoD industry days on SAM.gov (filter by notice type:
            &quot;Special Notice&quot;) and on individual OSBP websites. Show up, submit a
            strong{" "}
            <Link href="/blog/capability-statement-examples" className="underline font-medium">
              capability statement
            </Link>
            , and ask smart questions about the procurement. That&apos;s how relationships that
            lead to set-aside awards begin.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="building-pipeline"
            number="08"
            title="Building a Sustainable DoD Pipeline"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A DoD pipeline is different from a civilian agency pipeline in one important way:
              the cycles are longer, the relationships matter more, and the entry points are more
              varied. Firms that build sustainable DoD revenue don&apos;t just track solicitations —
              they track program budgets, recompete timelines, and buying office relationships.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Clock,
                  title: "Start With Subcontracting",
                  desc: "If you don't have DoD past performance, subcontracting is your entry. Large DoD prime contractors are contractually required to subcontract with small businesses. Contact the small business liaison officers (SBLOs) at major DoD primes — Leidos, Booz Allen, SAIC, General Dynamics — in your market area. A subcontract win gives you DoD-relevant past performance you can use to compete independently in the next cycle. Read our guide on subcontracting strategy.",
                },
                {
                  icon: TrendingUp,
                  title: "Track Recompetes with USASpending.gov",
                  desc: "Every DoD contract eventually recompetes. Search USASpending.gov for contracts in your NAICS code and set-aside type. Sort by period of performance end date. Any contract ending in the next 18-24 months is a recompete you can start positioning for now — before the solicitation hits SAM.gov. Build relationships with the program office during the incumbent period and position your proposal before any competition begins. This is how winning small businesses outperform.",
                },
                {
                  icon: FileText,
                  title: "Respond to Every Sources Sought in Your NAICS",
                  desc: "DoD contracting officers publish Sources Sought notices before major solicitations to gauge market interest and determine whether set-asides are viable. Responding positions you as an active, capable vendor in that NAICS code. A strong response — with your relevant capabilities, certifications, and past performance — can directly influence whether the contract gets set aside for small businesses. If two or more small businesses respond to a Sources Sought and indicate capability, the \"Rule of Two\" kicks in. You can shape the outcome before competition begins.",
                },
                {
                  icon: Award,
                  title: "Pursue SBIR Early to Build Credibility",
                  desc: "A SBIR Phase I win, even in a tangential technology area, signals to DoD program offices that your firm has been vetted and awarded. It creates a contracting record, builds past performance, and establishes relationships in DoD science and technology offices. Many small businesses that started with SBIR work later transitioned into traditional DoD contracting using SBIR-built credibility. The $314K Phase I is a legitimate entry point into a market that awards billions annually.",
                },
                {
                  icon: Target,
                  title: "Pick Two Commands and Go Deep",
                  desc: "Spreading outreach across all DoD components is ineffective. The Army, Navy, Air Force, and defense agencies each have their own culture, vehicles, and budget cycles. Pick the two commands that spend the most in your NAICS codes — research their active programs, attend their industry days, submit capability statements to their OSBPs — and build genuine relationships before any specific solicitation exists. Concentration beats distribution every time in DoD business development.",
                },
                {
                  icon: Building2,
                  title: "Get on Contract Vehicles That DoD Uses",
                  desc: "Many DoD purchases never appear as full SAM.gov solicitations — they're task orders placed against existing vehicles like SeaPort-NxG, GSA MAS, or agency-specific IDIQs. If you're not on the vehicles DoD buyers use, you can't compete for those orders. Identify which vehicles are active for your NAICS at your target commands and allocate proposal resources to get on them. One vehicle win can produce multiple awards with far less competition than standalone procurements.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Managing all of this manually — SAM.gov searches, USASpending.gov recompete tracking,
              Sources Sought calendars, relationship notes — is a full-time job. Use{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                CapturePilot&apos;s pipeline management
              </Link>{" "}
              to track DoD opportunities from early intel through award, with automated alerts when
              relevant contracts are nearing recompete. And read our{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 underline font-medium">
                capture management process guide
              </Link>{" "}
              for the full methodology.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One last thing worth saying plainly: the DoD market rewards persistence. The sales
              cycle from first contact to first award can run 12-24 months. Firms that quit after
              their first unsuccessful bid never see the compounding returns that come from a
              genuine DoD relationship. Stay in the market. Keep responding to Sources Sought.
              Keep attending industry days. The first award is the hardest — everything after it
              gets easier.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Build Your DoD Pipeline the Right Way
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot matches your certifications, NAICS codes, and target agencies to
                the DoD opportunities most likely to convert — so you spend time pursuing the
                right contracts, not chasing every solicitation.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily DoD set-aside matching tailored to your NAICS and certifications",
                  "Recompete tracking with USASpending.gov intelligence built in",
                  "Sources Sought alerts so you respond before competition locks in",
                  "Pipeline management from Sources Sought to award",
                  "Capability statement generator built for defense buyers",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={SIGNUP_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">No credit card required. Cancel any time.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sdvosb-contracts-guide",
                  icon: Shield,
                  title: "SDVOSB Contracts Guide",
                  desc: "How veteran-owned businesses win at DoD and beyond",
                },
                {
                  href: "/blog/sources-sought-notice",
                  icon: FileText,
                  title: "Sources Sought Notices",
                  desc: "How to respond and shape the DoD RFP before competition starts",
                },
                {
                  href: "/blog/subcontracting-government-contracts",
                  icon: Building2,
                  title: "Subcontracting on Government Contracts",
                  desc: "Your first step into the defense industrial base",
                },
                {
                  href: "/blog/idiq-contracts-explained",
                  icon: Layers,
                  title: "IDIQ Contracts Explained",
                  desc: "How to get on the multi-year vehicles DoD uses most",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{link.title}</p>
                    <p className="text-xs text-stone-500">{link.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
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
