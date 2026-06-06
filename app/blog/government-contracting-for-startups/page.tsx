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
  FileText,
  Clock,
  Users,
  BarChart3,
  Shield,
  Info,
  Zap,
  XCircle,
  Building2,
  Sparkles,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "market-size", label: "The Real Size of the Market" },
  { id: "readiness-checklist", label: "Are You Ready? The Honest Checklist" },
  { id: "sbir-sttr", label: "SBIR/STTR: Innovation Funding for Startups" },
  { id: "set-asides", label: "Set-Aside Programs: Your Built-In Edge" },
  { id: "registration-stack", label: "The Registration Stack" },
  { id: "first-contracts", label: "Your First Contract: Four Realistic Paths" },
  { id: "past-performance", label: "Past Performance: The Chicken-and-Egg Problem" },
  { id: "common-mistakes", label: "Mistakes That Kill Startup Bids" },
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

export default function GovernmentContractingForStartupsPage() {
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
            <span className="text-stone-900 font-medium">Government Contracting for Startups</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contracting for Startups:{" "}
            <span className="gradient-text">Is Federal Revenue Right for You?</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Small businesses captured{" "}
            <strong className="text-stone-700">$183 billion — 28.8% of all federal contracting dollars</strong>{" "}
            — in FY2024. The government has a 23% small business goal and dedicated programs to hit it.
            But federal revenue isn&apos;t right for every startup. This guide helps you figure out which
            side of that line you&apos;re on, and what to do first if the answer is yes.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 6, 2026</span>
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
          <SectionHeading id="market-size" number="01" title="The Real Size of the Market" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government is the largest single buyer of goods and services on earth.
              In FY2024, total federal contract awards exceeded $770 billion. Small businesses —
              companies that clear the SBA&apos;s size standards, which vary by NAICS code but often
              mean under 500 employees or under $20–$47 million in annual revenue — captured{" "}
              <strong className="text-stone-800">$183.4 billion of that</strong>, representing
              28.8% of all federal contracting dollars. That exceeded the government-wide small
              business goal of 23% for the fourth consecutive year.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Within that $183 billion, specific set-aside categories hit record levels.
              Service-disabled veteran-owned small businesses captured{" "}
              <strong className="text-stone-800">$32.8 billion</strong> — an all-time high.
              Small disadvantaged businesses received{" "}
              <strong className="text-stone-800">$78.1 billion</strong>, also a record. These
              aren&apos;t one-off spikes. Federal small business contracting grew from roughly
              $154 billion in FY2021 to $183 billion in FY2024 — a consistent upward trend
              driven by statutory goals that every agency is held accountable to hit.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              That institutional accountability is what makes the federal market different from
              commercial sales. Agencies don&apos;t buy from small businesses out of preference —
              they buy because Congress and the SBA require them to meet annual targets. Missing
              those targets has consequences for agency leadership. That structural pressure
              creates consistent demand that commercial customers simply don&apos;t produce.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                {
                  stat: "$183B",
                  label: "Total small business prime contracts, FY2024",
                  icon: DollarSign,
                },
                {
                  stat: "28.8%",
                  label: "Share of all federal contracting — exceeds 23% goal",
                  icon: BarChart3,
                },
                {
                  stat: "$32.8B",
                  label: "SDVOSB awards — record high in FY2024",
                  icon: Shield,
                },
                {
                  stat: "$78.1B",
                  label: "Small disadvantaged business awards — record FY2024",
                  icon: Target,
                },
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
              The honest caveat: $183 billion is spread across 300,000+ contract actions, thousands
              of agencies, dozens of socioeconomic categories, and essentially every NAICS code.
              Your addressable market is a much smaller number — defined by what you sell, which
              agencies buy it, and which set-aside programs you qualify for. Market size tells you
              the ceiling is real. It doesn&apos;t tell you what your pipeline looks like.
            </p>
            <p className="text-stone-600 leading-relaxed">
              That&apos;s what the rest of this guide covers. If you want to see which agencies spend
              in your NAICS codes right now, CapturePilot&apos;s{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                market intelligence
              </Link>{" "}
              pulls award history by code so you can size your actual addressable market before
              investing time in the entry process.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="readiness-checklist"
            number="02"
            title="Are You Ready? The Honest Startup Checklist"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal contracting is not a revenue shortcut. It&apos;s a new sales channel with a
              long sales cycle, specific compliance obligations, and a cash-flow profile that kills
              undercapitalized companies. Before spending time writing proposals, run through this
              checklist. If you clear all eight, you&apos;re ready to start. If several are missing,
              fix them first.
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  check:
                    "Your business is legally registered (LLC, Corp, or equivalent) with a stable legal name",
                  why: "SAM.gov registration requires an exact match between your entity registration, IRS records, and bank account. Sole proprietorships and DBAs create friction and sometimes eligibility issues.",
                },
                {
                  check:
                    "You have 3–6 months of operating runway without new revenue",
                  why: "Federal contracts pay Net-30 to Net-60 after invoice approval — which itself can lag behind delivery. First-contract cash flow often takes 90–120 days after award.",
                },
                {
                  check:
                    "You can deliver the work at the volume agencies need",
                  why: "Winning a $400K contract when you can only staff $80K of work is worse than not winning. Agencies terminate for cause, and that record follows you in CPARS.",
                },
                {
                  check:
                    "Your product or service maps to a recognized NAICS code with real federal spend",
                  why: "Niche offerings with no established NAICS code have trouble getting properly classified, which limits your set-aside eligibility and makes size status determinations unpredictable.",
                },
                {
                  check:
                    "You understand that proposals take real time — typically 40–200 hours per competitive bid",
                  why: "Startups routinely underestimate bid-and-proposal (B&P) costs. If your leadership team writes proposals, that time comes out of everything else. Budget for it or hire help.",
                },
                {
                  check:
                    "Someone in your company owns compliance, or you can hire someone who does",
                  why: "Government contracts include FAR clauses, reporting requirements, and audit obligations that don&apos;t exist in commercial work. Non-compliance can void awards and trigger debarment.",
                },
                {
                  check:
                    "You have at least 2 years of experience delivering similar work, even to commercial clients",
                  why: "'No federal past performance' is rated neutral in many programs. 'No past performance at all' is a real proposal liability. Commercial experience can fill the gap — but you need something.",
                },
                {
                  check:
                    "You&apos;re willing to play a long game — first awards typically arrive 6–18 months after starting the process",
                  why: "The cycle from registration to first award is rarely under 6 months and often 12–18. Startups that expect quick wins flame out before they build traction.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-stone-200 bg-white hover-lift animate-on-scroll"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.check}</p>
                    <p className="text-xs text-stone-500 leading-relaxed">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              If you&apos;re hitting most of these but missing past performance, that&apos;s the most
              common gap — and it&apos;s solvable. Section 7 covers it in detail. If cash flow is
              the blocker, look at SBIR (Section 3) or the micro-purchase entry ramp, which has
              much faster payment cycles than formal contracts. The full guide to{" "}
              <Link
                href="/blog/micro-purchase-threshold"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                micro-purchase thresholds
              </Link>{" "}
              explains how to sell below $15,000 to government cardholders with almost no
              paperwork.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="Cash Flow Is the #1 Startup Killer in GovCon">
            Federal contracts pay after the work is done and an invoice is approved. Payment terms
            run Net-30 to Net-60 from invoice approval — but the approval process itself can take
            2–4 weeks after delivery. On a $200K contract, you may wait 90+ days from project
            start to receiving full payment. Startups that win contracts but run out of cash before
            collecting don&apos;t survive to win the second one. Have a credit line, a receivables
            solution, or an operating reserve before you bid anything significant.
          </Callout>

          {/* Section 3 */}
          <SectionHeading
            id="sbir-sttr"
            number="03"
            title="SBIR/STTR: Innovation Funding Built for Startups"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Small Business Innovation Research (SBIR) and Small Business Technology Transfer
              (STTR) programs are the most startup-friendly vehicle in the entire federal contracting
              ecosystem. They&apos;re specifically designed for small innovative companies — including
              first-time contractors with no federal past performance. Both programs were reauthorized
              on April 13, 2026 through the{" "}
              <strong className="text-stone-800">Small Business Innovation and Economic Security Act of 2026</strong>,
              extending program authority through September 30, 2031 after a six-month lapse that
              had frozen over $4 billion in annual funding.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SBIR works in three phases. Phase I tests technical feasibility — funded at $50,000
              to $323,090 (the current statutory cap) for 6–12 months. Phase II funds full
              prototype development, with a statutory cap of $2,153,927 for up to 24 months.
              Phase III is commercialization: the agency buys the finished technology, often through
              sole-source contracts, with no dollar cap.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The 2026 reauthorization added a significant new vehicle:{" "}
              <strong className="text-stone-800">Strategic Breakthrough Awards</strong> — post-Phase II
              contracts of up to $30 million with 48-month performance periods, available at agencies
              spending more than $100 million annually on SBIR. That creates a path from a $275K
              Phase I to a $30M follow-on without needing to win a traditional competitive contract.
              For defense tech, cybersecurity, and deep-tech startups, this is a fundamental change
              in what&apos;s achievable through SBIR alone.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Phase</th>
                    <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                    <th className="text-right px-4 py-3 font-semibold">Statutory Cap</th>
                    <th className="text-right px-4 py-3 rounded-tr-xl font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      phase: "Phase I",
                      purpose: "Technical feasibility study",
                      cap: "$323,090",
                      duration: "6–12 months",
                    },
                    {
                      phase: "Phase II",
                      purpose: "Full prototype development",
                      cap: "$2,153,927",
                      duration: "24 months",
                    },
                    {
                      phase: "Strategic Breakthrough (new 2026)",
                      purpose: "Post-Phase II scale-up at qualifying agencies",
                      cap: "$30,000,000",
                      duration: "Up to 48 months",
                    },
                    {
                      phase: "Phase III",
                      purpose: "Commercialization / agency procurement",
                      cap: "No cap (sole-source eligible)",
                      duration: "Varies",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-700 border-b border-stone-100">
                        {row.phase}
                      </td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-stone-100">
                        {row.cap}
                      </td>
                      <td className="px-4 py-3 text-right text-stone-500 text-xs border-b border-stone-100">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Agency-specific amounts vary from the statutory caps. NSF pays a flat $305,000 for
              Phase I and caps Phase II at approximately $1 million. NIH Phase I runs around $306,872
              with a standard Phase II up to the full statutory cap. DoD Phase I typically falls
              between $250,000 and $295,000, with Phase II at $1.5M–$2M. The DoD program is the
              largest single SBIR spender — which matters for defense tech, cybersecurity, and
              dual-use technology companies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Phase I acceptance rates run 15–25% across major agencies. Phase II conversion from
              successful Phase I: 40–55%. Those aren&apos;t lottery odds — they&apos;re comparable to
              competitive commercial sales processes for large enterprise accounts. The difference
              is the government doesn&apos;t require prior federal contracts as a prerequisite.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One important 2026 change: beginning FY2027, agencies will set per-company proposal
              submission caps to limit &ldquo;SBIR mills&rdquo; — firms that submitted hundreds of Phase I
              applications per year without commercializing their work. For focused startups with
              real technology, this helps. The competition pool gets cleaner when serial applicants
              without genuine products are capped out.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-lg mb-1">
                  Find out which programs your startup qualifies for
                </p>
                <p className="text-blue-100 text-sm">
                  Run the CapturePilot Quick Checker to see which certifications, set-asides, and
                  programs your business is eligible for. Free, no account required, takes under
                  2 minutes.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex-shrink-0"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="set-asides"
            number="04"
            title="Set-Aside Programs: Your Built-In Competitive Edge"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside programs are the structural advantage that makes federal contracting
              unusually accessible to qualified small businesses. In a set-aside competition, you
              don&apos;t bid against Lockheed Martin or Booz Allen. You bid against companies of
              similar size with similar resource constraints. That changes win probability
              dramatically compared to full-and-open competitions.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Contracts between $15,000 and $350,000 must be set aside for small businesses if two
              or more can reasonably compete. Above $350,000, contracting officers can still set
              aside — and frequently do when the market supports it. Specific socioeconomic
              certifications unlock even more restricted competition pools. Here are the four
              programs that matter most for startups:
            </p>

            <div className="grid sm:grid-cols-2 gap-5 my-8 animate-on-scroll">
              {[
                {
                  title: "8(a) Business Development",
                  badge: "SBA Program",
                  desc: "A 9-year SBA program for socially and economically disadvantaged entrepreneurs. Sole-source awards up to $4.5M for services and $7.5M for manufacturing — no competitive bid required in the first 4.5 years. The most powerful single certification for eligible startups that qualify.",
                  color: "border-blue-200 bg-blue-50",
                  badgeColor: "bg-blue-100 text-blue-700",
                },
                {
                  title: "SDVOSB",
                  badge: "Veteran-Owned",
                  desc: "Service-disabled veteran-owned small businesses captured a record $32.8 billion in FY2024. VA contracts are almost exclusively SDVOSB/VOSB set-asides. If your founder qualifies, this is the most direct path to a large, dedicated set-aside market with strong agency backing.",
                  color: "border-emerald-200 bg-emerald-50",
                  badgeColor: "bg-emerald-100 text-emerald-700",
                },
                {
                  title: "WOSB / EDWOSB",
                  badge: "Women-Owned",
                  desc: "Women-owned small businesses and economically disadvantaged WOSBs have set-aside authority in specific NAICS codes historically underrepresented by women-owned firms. EDWOSB also has sole-source authority up to $4.5M for services.",
                  color: "border-violet-200 bg-violet-50",
                  badgeColor: "bg-violet-100 text-violet-700",
                },
                {
                  title: "HUBZone",
                  badge: "Location-Based",
                  desc: "If 35% of your employees live in a Historically Underutilized Business Zone and your principal office is there, you qualify. HUBZone firms get a 10% price evaluation preference in full-and-open competitions — plus access to sole-source and set-aside contracts.",
                  color: "border-amber-200 bg-amber-50",
                  badgeColor: "bg-amber-100 text-amber-700",
                },
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border-2 ${item.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-black text-stone-900 text-lg">{item.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Certifications aren&apos;t automatic — each program has its own application requirements,
              documentation standards, and in some cases SBA review. Getting the wrong certification
              wastes months. Getting the right one opens a filtered competition pool that looks
              nothing like a full-and-open solicitation.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use CapturePilot&apos;s{" "}
              <Link
                href="/features/quick-checker"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                Quick Checker
              </Link>{" "}
              to see which programs you qualify for before applying. Our dedicated guides on{" "}
              <Link
                href="/blog/sdvosb-contracts-guide"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                SDVOSB contracts
              </Link>
              ,{" "}
              <Link
                href="/blog/wosb-certification-guide"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                WOSB certification
              </Link>
              ,{" "}
              <Link
                href="/blog/8a-sole-source-contracts"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                8(a) sole source
              </Link>
              , and{" "}
              <Link
                href="/blog/hubzone-program-guide"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                HUBZone
              </Link>{" "}
              cover the application process, eligibility rules, and opportunity landscape for each
              program in detail.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Stack Your Certifications Where You Can">
            Nothing prevents you from holding multiple certifications simultaneously. An SDVOSB
            that also qualifies for HUBZone gets set-aside protection plus a 10% price preference
            in open competitions. An 8(a) company that&apos;s also SDVOSB-certified can pursue
            sole-source awards from both VA and DoD without competing. Map every certification you
            qualify for before deciding which to prioritize — many startups leave significant
            structural advantages unclaimed by only pursuing one.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="registration-stack"
            number="05"
            title="The Registration Stack: What You Need Before Your First Bid"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Before you can bid on anything, you need a specific set of registrations and
              identifiers in place. None of them cost money — official federal registrations are
              always free, and any company charging you for SAM.gov registration is a third-party
              service provider, not the government. But each step has a processing timeline, and
              several run sequentially. Budget 4–6 weeks for the full stack.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-8 my-8 animate-on-scroll">
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                The Startup Registration Stack
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "EIN from the IRS",
                    desc: "Your Employer Identification Number anchors every federal registration. Get it first if you don&apos;t have one — issued instantly at IRS.gov.",
                    time: "Instant",
                  },
                  {
                    step: "02",
                    title: "Unique Entity Identifier (UEI) via SAM.gov",
                    desc: "The UEI replaced DUNS numbers in 2022. You receive it automatically when you begin your SAM.gov registration. It becomes your identifier across all government systems.",
                    time: "Assigned during SAM registration",
                  },
                  {
                    step: "03",
                    title: "SAM.gov Entity Registration",
                    desc: "The System for Award Management is the central federal contractor database. You cannot receive a contract award above the micro-purchase threshold without an active, annually-renewed SAM registration. Registration is free. Allow 3–10 business days for activation.",
                    time: "3–10 business days",
                  },
                  {
                    step: "04",
                    title: "CAGE Code",
                    desc: "Commercial and Government Entity code — assigned automatically when your SAM registration activates. Required for DoD contracts. Your CAGE code stays with your company permanently.",
                    time: "Assigned with SAM activation",
                  },
                  {
                    step: "05",
                    title: "Representations & Certifications in SAM.gov",
                    desc: "Reps & Certs are the compliance attestations in SAM. You confirm your size status, small business eligibility, ownership structure, and compliance with federal laws. This is where your set-aside program eligibility is first declared officially.",
                    time: "Completed during SAM registration",
                  },
                  {
                    step: "06",
                    title: "Socioeconomic Certifications (if applicable)",
                    desc: "SDVOSB/VOSB through VA&apos;s VetCert program, WOSB through the SBA repository, 8(a) application, or HUBZone certification — each has its own timeline and documentation. 8(a) is the most involved; WOSB repository certification can be completed in days.",
                    time: "2 weeks to 6 months depending on program",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-blue-400 font-mono font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <span className="text-xs text-stone-400 bg-white/10 px-2 py-0.5 rounded-full flex-shrink-0">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-stone-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Once your SAM registration is active, you&apos;ll also select your NAICS codes. These
              classify what your business does. Every solicitation is posted under a primary NAICS
              code — if your SAM registration doesn&apos;t include that code, your size standard won&apos;t
              apply correctly and you may be ineligible for the set-aside. Select every NAICS code
              that describes work you can legitimately perform. Don&apos;t pad the list with codes
              you&apos;ll never pursue.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For a step-by-step walkthrough of NAICS code selection, read our guide on{" "}
              <Link
                href="/blog/best-naics-codes-small-business"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                the best NAICS codes for small business government contractors
              </Link>
              . The right codes determine which set-asides you can access and which size standards
              define your eligibility.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="first-contracts"
            number="06"
            title="Your First Contract: Four Realistic Paths"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Not every startup should enter the same way. The right first-contract path depends on
              what you build, whether you hold certifications, and how patient your cash position
              allows you to be. Here are the four realistic entry points for startups, ordered by
              barrier-to-entry from lowest to highest.
            </p>

            <div className="space-y-0 mb-8">
              {[
                {
                  step: "01",
                  title: "Micro-Purchases (Under $15,000)",
                  badge: "Lowest barrier",
                  badgeColor: "bg-emerald-100 text-emerald-700",
                  desc: "No formal solicitation. No competitive bid. A government cardholder pays you like a commercial customer using a purchase card. SAM.gov registration is not required for GPC transactions. This is the fastest path to your first federal dollar — but micro-purchases don&apos;t generate formal CPARS past performance records, so they&apos;re a stepping stone, not a destination.",
                  link: {
                    href: "/blog/micro-purchase-threshold",
                    label: "Micro-purchase threshold guide",
                  },
                },
                {
                  step: "02",
                  title: "Subcontracting Under a Prime",
                  badge: "No certification required",
                  badgeColor: "bg-blue-100 text-blue-700",
                  desc: "Large prime contractors are required to have small business subcontracting plans on contracts over $750,000. They actively need capable subcontractors. Subcontracting generates real federal work experience, can produce CPARS-reportable past performance, and builds prime relationships that often lead to teaming on future competitive bids.",
                  link: {
                    href: "/blog/subcontracting-government-contracts",
                    label: "Subcontracting guide",
                  },
                },
                {
                  step: "03",
                  title: "SBIR/STTR Phase I (For Innovation Companies)",
                  badge: "Tech / research focused",
                  badgeColor: "bg-violet-100 text-violet-700",
                  desc: "If you&apos;re building technology — software, hardware, biotech, clean energy, defense systems — SBIR Phase I is the most capital-efficient entry point. Phase I win rates of 15–25% are competitive. Agencies can issue sole-source follow-ons after a successful Phase II. No prior federal contracts required to apply.",
                  link: null,
                },
                {
                  step: "04",
                  title: "Set-Aside Competitions ($15K–$350K)",
                  badge: "Full competition",
                  badgeColor: "bg-amber-100 text-amber-700",
                  desc: "Contracts between $15,000 and $350,000 must be set aside for small businesses if two or more can compete. With certifications — SDVOSB, WOSB, 8(a), HUBZone — you access even more restricted pools with fewer competitors. This is the most common path for service-company startups that have commercial experience they can translate into federal proposals.",
                  link: {
                    href: "/blog/government-rfp-response-guide",
                    label: "RFP response guide for first-timers",
                  },
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 animate-on-scroll">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    {i < 3 && <div className="w-px flex-1 bg-blue-100 my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.desc}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                      >
                        {item.link.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Most successful startup GovCon companies run multiple paths simultaneously —
              building micro-purchase relationships while subcontracting under a prime, applying
              for SBIR, and tracking set-aside solicitations in their NAICS codes. CapturePilot&apos;s{" "}
              <Link
                href="/features/pipeline"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                pipeline management
              </Link>{" "}
              keeps all four in one view so you can see your full federal opportunity funnel
              without switching between a dozen different tools.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="font-black text-lg text-stone-900 mb-1">
                  Track your first federal opportunities in one place
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  CapturePilot surfaces set-aside contracts, SBIR topics, and subcontracting leads
                  in your NAICS codes — matched to your certifications and size status. Start your
                  30-day free trial and build your pipeline from day one.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 text-stone-600 font-medium text-sm hover:text-stone-900 transition-colors"
                >
                  Book a strategy call →
                </Link>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="past-performance"
            number="07"
            title="Past Performance: The Chicken-and-Egg Problem"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The most common complaint from startups entering government contracting: evaluators
              want federal past performance, but you can&apos;t get federal past performance without
              first winning a contract. This is real. But it&apos;s not a dead end — it&apos;s a
              sequencing problem with several well-established solutions.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Use commercial past performance as a substitute",
                  desc: "FAR Part 15.305 requires agencies to evaluate past performance relevance — not just federal origin. Three years of delivering similar work to Fortune 500 clients, hospitals, universities, or state/local government can substitute for federal past performance in many evaluations. The key is mapping your commercial experience to the scope and complexity of what the agency needs — explicitly, in your proposal.",
                  icon: Building2,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  title: "Treat 'no past performance' as neutral, not negative",
                  desc: "FAR guidance explicitly instructs evaluators to rate neutral/unknown past performance as neutral — not poor. An offeror with no relevant past performance gets a neutral rating, which typically puts them ahead of offerors with negative past performance. You&apos;re not penalized for having none, as long as you address the situation confidently in your proposal rather than ignoring it.",
                  icon: CheckCircle2,
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                },
                {
                  title: "Subcontract specifically to build a federal record",
                  desc: "Subcontracting under a prime generates CPARS-reportable work on DoD contracts above $750K and civilian contracts above $1.5M. Request that your prime enter your performance data into CPARS. Each rating builds your federal past performance record in the official government database. After 2–3 strong CPARS ratings as a subcontractor, you have real federal references for every future proposal.",
                  icon: Users,
                  color: "border-amber-200 bg-amber-50",
                  iconColor: "text-amber-600",
                },
                {
                  title: "Get reference letters for below-threshold work",
                  desc: "Micro-purchases and small contracts below CPARS thresholds don&apos;t generate official ratings. But agency employees can write letters on official letterhead confirming your performance. A one-paragraph letter from a contracting officer&apos;s representative describing scope, timeline, and quality carries real weight in small business proposal evaluations — even without a system record.",
                  icon: FileText,
                  color: "border-violet-200 bg-violet-50",
                  iconColor: "text-violet-600",
                },
                {
                  title: "Team to borrow your partner&apos;s past performance",
                  desc: "In a formal teaming arrangement, the larger partner&apos;s past performance can anchor the proposal. An established contractor with strong federal history teams with your startup&apos;s specialized capability. The past performance section references the team — including the prime&apos;s track record. This is how many startups win their first significant contract without any federal history of their own.",
                  icon: Shield,
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-5 p-6 rounded-xl border-2 ${item.color} animate-on-scroll`}
                >
                  <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.iconColor}`} />
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The past performance barrier is a feature, not a bug — it limits competition to
              companies with track records, which reduces your competition once you&apos;ve built
              yours. Treat your first 12–18 months as an investment in the past performance
              file that compounds over every subsequent bid. For a detailed look at how past
              performance is evaluated and how to present it strategically, read our{" "}
              <Link
                href="/blog/past-performance-government-contracts"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                past performance guide
              </Link>
              .
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="CPARS Ratings Are Permanent">
            Contractor Performance Assessment Reporting System records don&apos;t go away. A marginal
            or unsatisfactory rating from an early contract follows your company for three years
            in federal databases, and evaluators will see it. This is a strong argument against
            bidding on contracts you can&apos;t fully perform. A smaller first contract executed at
            an Exceptional or Very Good rating is worth more long-term than a larger one you
            struggle through and get rated Marginal. Protect your CPARS record at all costs.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="common-mistakes"
            number="08"
            title="Mistakes That Kill Startup Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Most startups that fail at federal contracting don&apos;t fail because of insufficient
              capability. They fail because of process errors that more experienced contractors
              never make. These are the eight mistakes that appear most often in startup proposal
              debriefs — and in GAO bid protest decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "Bidding on everything",
                  desc: "Spraying proposals across dozens of solicitations without qualifying them burns your B&P budget and almost never wins. Focus on 5–10 high-fit opportunities per quarter. Quantity is not a substitute for fit.",
                  icon: XCircle,
                  severity: "Critical",
                  color: "border-rose-200",
                  iconColor: "text-rose-600",
                  badgeColor: "bg-rose-100 text-rose-700",
                },
                {
                  title: "Reusing boilerplate proposals",
                  desc: "Evaluators read proposals daily. Generic management approaches, copy-pasted past performance narratives, and technical volumes that don&apos;t address the specific SOW are spotted immediately. Every proposal must be written for its specific evaluation criteria — not adapted from the last bid.",
                  icon: FileText,
                  severity: "Critical",
                  color: "border-rose-200",
                  iconColor: "text-rose-600",
                  badgeColor: "bg-rose-100 text-rose-700",
                },
                {
                  title: "Missing compliance requirements",
                  desc: "Non-compliance with Section L (instructions) or Section M (evaluation criteria) results in technical disqualification before your content is evaluated. Wrong page counts, missing certifications, late submissions — these eliminate bids that might otherwise win. Read the solicitation twice before writing anything.",
                  icon: AlertTriangle,
                  severity: "Eliminates bid",
                  color: "border-amber-200",
                  iconColor: "text-amber-600",
                  badgeColor: "bg-amber-100 text-amber-700",
                },
                {
                  title: "Underpricing to win",
                  desc: "Price so low you can&apos;t perform, and you&apos;ll win the contract, deliver at a loss, collect a poor CPARS rating, and be worse off than before. Agencies don&apos;t want contractors that go under mid-performance. Evaluate your cost realistically and include a reasonable margin.",
                  icon: DollarSign,
                  severity: "Long-term damage",
                  color: "border-amber-200",
                  iconColor: "text-amber-600",
                  badgeColor: "bg-amber-100 text-amber-700",
                },
                {
                  title: "Wrong NAICS code in SAM.gov",
                  desc: "If a solicitation&apos;s primary NAICS code isn&apos;t in your SAM registration, your size standard may not apply correctly. That can disqualify you from the set-aside or create a size protest vulnerability. Check your registered codes against each solicitation before bidding.",
                  icon: Info,
                  severity: "Eligibility issue",
                  color: "border-blue-200",
                  iconColor: "text-blue-600",
                  badgeColor: "bg-blue-100 text-blue-700",
                },
                {
                  title: "No market intelligence before bidding",
                  desc: "Who&apos;s the incumbent? What did the agency pay last time? Are they primarily price-sensitive or technically driven? What protest history does this contract have? Winning contractors research the opportunity for weeks before the solicitation drops. Startups often bid cold, with no context.",
                  icon: BarChart3,
                  severity: "Win rate killer",
                  color: "border-blue-200",
                  iconColor: "text-blue-600",
                  badgeColor: "bg-blue-100 text-blue-700",
                },
                {
                  title: "Ignoring Sources Sought notices",
                  desc: "Sources Sought notices are pre-solicitation market research. Responding puts you on the agency&apos;s radar, can influence the set-aside determination, and gives you weeks of advance intelligence before the official RFP releases. Most startups skip them because they feel optional. They&apos;re your best BD intelligence tool.",
                  icon: Zap,
                  severity: "Missed opportunity",
                  color: "border-sky-200",
                  iconColor: "text-sky-600",
                  badgeColor: "bg-sky-100 text-sky-700",
                },
                {
                  title: "Treating proposal writing as a part-time activity",
                  desc: "A competitive proposal for a $300K+ contract takes 60–200 hours across multiple reviewers. Founders who write proposals while running sales, product, and operations produce mediocre work or miss deadlines. Dedicate internal capacity or hire a proposal writer before pursuing significant solicitations.",
                  icon: Clock,
                  severity: "Resource issue",
                  color: "border-sky-200",
                  iconColor: "text-sky-600",
                  badgeColor: "bg-sky-100 text-sky-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border-2 ${item.color} animate-on-scroll`}
                >
                  <div className="flex items-start gap-3">
                    <item.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.iconColor}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-stone-900 text-sm">{item.title}</h3>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}
                        >
                          {item.severity}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The destructive mistakes — CPARS damage from underdelivering, or misrepresenting
              your size on a set-aside — create lasting consequences that set companies back
              years. The fixable ones — boilerplate proposals, compliance checklist failures,
              no market intelligence — are process problems that a proper capture and proposal
              workflow eliminates.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link
                href="/features/proposals"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                proposal tools
              </Link>{" "}
              build a compliance matrix from each solicitation automatically so you can verify
              requirement coverage before you submit. The{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline hover:no-underline font-medium"
              >
                market intelligence
              </Link>{" "}
              module surfaces incumbents, award history, and competitive positioning data before
              you decide whether to bid. Both features exist to prevent expensive mistakes — not
              just to help you write faster.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-10 text-white animate-on-scroll">
            <div className="max-w-xl">
              <Sparkles className="w-8 h-8 text-blue-400 mb-4" />
              <h2 className="text-2xl font-black mb-3">
                Start building your federal pipeline
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                CapturePilot surfaces the right opportunities for your startup — set-aside contracts
                in your NAICS codes, Sources Sought notices, SBIR topics, and subcontracting leads —
                matched to your certifications and size status. Start your free 30-day trial and
                skip the spreadsheets.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-stone-100">
            <h2 className="text-xl font-black text-stone-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/federal-contracting-certifications",
                  title: "Federal Contracting Certifications",
                  desc: "Which certifications actually open doors — and which are worth the application time for your startup.",
                },
                {
                  href: "/blog/subcontracting-government-contracts",
                  title: "Subcontracting on Government Contracts",
                  desc: "How to find prime contractors actively looking for small business subs and win your first subcontract.",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  title: "Finding Government Contracts",
                  desc: "The complete 2026 guide to locating and qualifying for federal opportunities across every channel.",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group block p-5 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-colors hover-lift"
                >
                  <p className="font-bold text-stone-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-blue-600 text-xs font-medium">
                    Read guide <ArrowRight className="w-3 h-3" />
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
