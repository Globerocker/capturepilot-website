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
  FileText,
  Target,
  Clock,
  Shield,
  AlertCircle,
  Layers,
  Building,
  Award,
  Zap,
  XCircle,
  TrendingUp,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-was-cio-sp4", label: "What CIO-SP4 Was Supposed to Be" },
  { id: "why-cancelled", label: "Why NITAAC Cancelled It" },
  { id: "cio-sp3-sunset", label: "CIO-SP3 Is Sunsetting Now — What You Need to Do" },
  { id: "where-work-going", label: "Where the $50B in IT Work Is Going" },
  { id: "8a-stars-iii", label: "8(a) STARS III: The Small Business IT Alternative" },
  { id: "alliant-gwacs", label: "Alliant 2 and Alliant 3: The Unrestricted Path" },
  { id: "oasis-plus-it", label: "OASIS+ for IT-Adjacent Services" },
  { id: "mas-it", label: "GSA MAS: The Always-Open Option" },
  { id: "action-plan", label: "Your Action Plan as an IT Contractor" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet" | "orange";
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
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
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

export default function CioSp4GwacGuidePage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-red-50 to-white">
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
            <span className="text-stone-900 font-medium">CIO-SP4 Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            CIO-SP4 Is Cancelled:{" "}
            <span className="gradient-text">What IT Contractors Need to Know and Where the $50B in Work Is Going</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            NITAAC officially cancelled the $50 billion CIO-SP4 GWAC on January 30, 2026.
            CIO-SP3 ordering windows are closing now — the final ordering deadline is October 29, 2026.
            If you built your federal IT business around these vehicles, here&apos;s exactly what to do next.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published October 15, 2026</span>
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

          {/* URGENT ALERT */}
          <div className="animate-on-scroll">
            <Callout icon={AlertCircle} color="red" title="Time-Sensitive: CIO-SP3 Ordering Closes October 29, 2026">
              <p className="mb-0">
                NITAAC has confirmed that <strong>no new task orders may be placed on CIO-SP3 or CIO-SP3 Small Business after October 29, 2026</strong>.
                All existing task orders must be substantially completed by December 31, 2028.
                If you have active work on these vehicles, plan accordingly. If you&apos;ve been waiting to migrate to a GSA vehicle, the clock has run out.
              </p>
            </Callout>
          </div>

          {/* Section 1 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-was-cio-sp4" number="01" title="What CIO-SP4 Was Supposed to Be" />

            <p>
              CIO-SP4 — Chief Information Officer Solutions and Partners 4 — was the planned $50 billion
              successor to NIH&apos;s CIO-SP3 family of IT contracts. Managed by NITAAC (the NIH Information
              Technology Acquisition and Assessment Center), it was supposed to be the premier small-business
              IT vehicle in the federal government.
            </p>

            <p>
              The original vision was ambitious. CIO-SP4 would cover the full IT services stack — cloud
              computing, cybersecurity, artificial intelligence, health IT, enterprise architecture, software
              development, and IT operations. It would serve every federal agency as a governmentwide
              acquisition contract (GWAC), meaning any agency could use it without separate competition.
            </p>

            <p>
              The solicitation launched in 2021. What followed was years of bid protests, amendments,
              delays, and re-solicitations. By the time CIO-SP4 made its first round of awards in 2023,
              contractors immediately filed protests challenging the evaluation methodology. Courts dismissed
              some protests; others lingered. NITAAC kept fighting to save the vehicle.
            </p>

            <div className="overflow-x-auto my-8 rounded-xl border border-stone-200">
              <table className="w-full text-sm">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-stone-700">CIO-SP Vehicle</th>
                    <th className="text-left p-4 font-bold text-stone-700">Ceiling</th>
                    <th className="text-left p-4 font-bold text-stone-700">Set-Aside</th>
                    <th className="text-left p-4 font-bold text-stone-700">Status (Oct 2026)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-medium text-stone-900">CIO-SP3</td>
                    <td className="p-4 text-stone-600">$20B</td>
                    <td className="p-4 text-stone-600">Unrestricted</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-red-700 font-medium">
                        <XCircle className="w-3.5 h-3.5" /> Ordering ends Oct 29
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-medium text-stone-900">CIO-SP3 Small Business</td>
                    <td className="p-4 text-stone-600">$20B</td>
                    <td className="p-4 text-stone-600">Small Business</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-red-700 font-medium">
                        <XCircle className="w-3.5 h-3.5" /> Ordering ends Oct 29
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-medium text-stone-900">CIO-CS</td>
                    <td className="p-4 text-stone-600">—</td>
                    <td className="p-4 text-stone-600">NIH-specific</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-red-700 font-medium">
                        <XCircle className="w-3.5 h-3.5" /> Sunsetting
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="p-4 font-medium text-stone-900">CIO-SP4</td>
                    <td className="p-4 text-stone-600">$50B (planned)</td>
                    <td className="p-4 text-stone-600">Unrestricted + SB pools</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-red-700 font-medium">
                        <XCircle className="w-3.5 h-3.5" /> Cancelled Jan 30, 2026
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The protests never killed CIO-SP4. The government killed it itself.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="why-cancelled" number="02" title="Why NITAAC Cancelled It" />

            <p>
              On January 30, 2026, NITAAC filed notice with the U.S. Court of Federal Claims cancelling
              the CIO-SP4 solicitation in its entirety. The stated reason was consolidation, not protests.
            </p>

            <p>
              Executive Order 14240 and OMB Memorandum M-25-31 directed federal agencies to consolidate
              procurement and eliminate redundant contracting vehicles. HHS and NIH leadership determined
              that CIO-SP4&apos;s requirements were already sufficiently addressed by existing GSA solutions.
              In a February 2026 SAM.gov update, NITAAC said the solicitation was &quot;now redundant to
              existing GSA solutions.&quot;
            </p>

            <Callout icon={Lightbulb} color="sky" title="What the Consolidation Policy Actually Means">
              <p className="mb-2">
                EO 14240 and OMB M-25-31 are the same policy direction that has caused several agency-specific
                GWACs to either be cancelled or not renewed. The government&apos;s position is that GSA already
                provides the infrastructure for IT procurement — separate agency-managed vehicles duplicate that
                infrastructure and add overhead.
              </p>
              <p className="mb-0">
                This is a structural shift. Expect more agency-specific vehicles to follow NITAAC&apos;s path
                over the next two years.
              </p>
            </Callout>

            <p>
              The consolidation rationale is cleaner than it sounds. GSA&apos;s Alliant 3 covers large IT services,
              8(a) STARS III covers small business set-aside IT, and OASIS+ covers professional services including
              IT-adjacent work. From a policy standpoint, there was genuine overlap.
            </p>

            <p>
              For contractors who had already won CIO-SP4 positions or invested years in the pursuit, the cancellation
              was a significant loss. Hundreds of companies had spent real money on proposals, teaming agreements,
              and bid preparation. That investment does not transfer.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4">The Protest Timeline That Led Here</h3>
              <div className="space-y-3">
                {[
                  { year: "2021", event: "CIO-SP4 solicitation released; IT industry mobilizes" },
                  { year: "2022–23", event: "Multiple amendments, evaluation criteria revised after industry feedback" },
                  { year: "2023", event: "First awards made; immediate GAO and Court of Federal Claims protests filed" },
                  { year: "2024", event: "Some protests dismissed; others sustained; NITAAC fights to maintain vehicle" },
                  { year: "2025", event: "EO 14240 and OMB M-25-31 direct procurement consolidation" },
                  { year: "Jan 30, 2026", event: "NITAAC cancels CIO-SP4 in its entirety; cites redundancy with GSA solutions" },
                ].map((row) => (
                  <div key={row.year} className="flex gap-4">
                    <span className="text-sm font-bold text-blue-600 w-24 shrink-0">{row.year}</span>
                    <span className="text-sm text-stone-700">{row.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="cio-sp3-sunset" number="03" title="CIO-SP3 Is Sunsetting Now — What You Need to Do" />

            <p>
              If you have existing CIO-SP3 or CIO-SP3 Small Business task orders, this section is the
              most immediately actionable. The ordering window has already closed — no new task orders
              can be placed as of October 29, 2026.
            </p>

            <p>
              Here is what the current timeline looks like:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  date: "April 29, 2026",
                  status: "passed",
                  title: "Master contract expired",
                  detail: "CIO-SP3 and CIO-SP3 Small Business master contracts expired. Existing task order holders retained their positions through the extension.",
                },
                {
                  date: "October 29, 2026",
                  status: "imminent",
                  title: "Last day for new task orders",
                  detail: "No new task orders may be placed after this date. Agencies requiring IT services must route new requirements through GSA vehicles.",
                },
                {
                  date: "December 31, 2028",
                  status: "future",
                  title: "All task orders must end",
                  detail: "Every active task order, including all option periods, must be fully completed. No extensions beyond this date.",
                },
              ].map((step) => (
                <div key={step.date} className={`flex gap-4 p-5 rounded-xl border ${
                  step.status === "passed" ? "bg-stone-50 border-stone-200" :
                  step.status === "imminent" ? "bg-orange-50 border-orange-200" :
                  "bg-blue-50 border-blue-200"
                }`}>
                  <div className="shrink-0 mt-0.5">
                    {step.status === "passed" && <CheckCircle2 className="w-5 h-5 text-stone-400" />}
                    {step.status === "imminent" && <Clock className="w-5 h-5 text-orange-600" />}
                    {step.status === "future" && <Target className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div>
                    <p className={`text-sm font-bold mb-1 ${
                      step.status === "passed" ? "text-stone-600" :
                      step.status === "imminent" ? "text-orange-800" :
                      "text-blue-800"
                    }`}>{step.date} — {step.title}</p>
                    <p className="text-sm text-stone-600">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="orange" title="If You Have Active CIO-SP3 Task Orders">
              <p className="mb-2">
                You can continue performing work on existing task orders through December 31, 2028.
                But you cannot add option periods that extend past that date, and you cannot accept
                new task orders after October 29, 2026.
              </p>
              <p className="mb-0">
                More importantly: your agency customers are already planning their next IT requirements
                on GSA vehicles. If you want to capture the re-competition of your own incumbent work,
                you need to be on the right GSA vehicle <em>before</em> the agency issues the next RFQ.
              </p>
            </Callout>

            <p>
              The most common mistake contractors make in a vehicle transition is waiting too long.
              Agencies routinely begin scoping next-generation requirements 12–18 months before the
              current contract ends. If you&apos;re not already positioned on Alliant 2, STARS III,
              or another GSA vehicle, you may miss the solicitation entirely.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 shrink-0 mt-1 opacity-80" />
              <div>
                <h3 className="text-xl font-black mb-2">Find IT Opportunities Across All GSA Vehicles</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  CapturePilot monitors Alliant 2, STARS III, OASIS+, and MAS task order solicitations
                  and matches them to your NAICS codes and past performance — so you don&apos;t miss the
                  re-compete of your own incumbent work.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="where-work-going" number="04" title="Where the $50B in IT Work Is Going" />

            <p>
              NITAAC processed roughly $19.7 billion in task orders across 916 awards on CIO-SP3 alone.
              That work does not disappear — it migrates. Federal agencies still need cloud infrastructure,
              cybersecurity services, health IT, and software development. They just need to buy it through
              a different vehicle.
            </p>

            <p>
              GSA has positioned three primary vehicles as the recipients of this migration:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Building,
                  title: "8(a) STARS III",
                  ceiling: "$50B",
                  type: "Small Business IT",
                  color: "emerald",
                },
                {
                  icon: TrendingUp,
                  title: "Alliant 2 / Alliant 3",
                  ceiling: "$75B",
                  type: "Unrestricted Large IT",
                  color: "blue",
                },
                {
                  icon: Layers,
                  title: "OASIS+",
                  ceiling: "No ceiling",
                  type: "Professional Services",
                  color: "violet",
                },
              ].map((v) => (
                <div key={v.title} className={`p-5 rounded-xl border ${
                  v.color === "emerald" ? "bg-emerald-50 border-emerald-200" :
                  v.color === "blue" ? "bg-blue-50 border-blue-200" :
                  "bg-violet-50 border-violet-200"
                }`}>
                  <v.icon className={`w-6 h-6 mb-3 ${
                    v.color === "emerald" ? "text-emerald-600" :
                    v.color === "blue" ? "text-blue-600" :
                    "text-violet-600"
                  }`} />
                  <p className="font-bold text-stone-900 text-sm mb-1">{v.title}</p>
                  <p className={`text-lg font-black mb-1 ${
                    v.color === "emerald" ? "text-emerald-700" :
                    v.color === "blue" ? "text-blue-700" :
                    "text-violet-700"
                  }`}>{v.ceiling}</p>
                  <p className="text-xs text-stone-500">{v.type}</p>
                </div>
              ))}
            </div>

            <p>
              There is also the GSA Multiple Award Schedule (MAS), which has dedicated IT Special Item
              Numbers and remains open to new vendors on a continuous basis. We&apos;ll cover each option
              in detail below.
            </p>

            <Callout icon={DollarSign} color="emerald" title="The Real Number You Should Know">
              <p className="mb-0">
                Federal agencies spent approximately $100 billion per year on IT services and products
                across all vehicles, according to USASpending.gov data. The CIO-SP cancellation does not
                reduce that spending — it redirects it. The contractors who move quickly to get on the
                right GSA vehicles will capture a disproportionate share of the re-competed work.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="8a-stars-iii" number="05" title="8(a) STARS III: The Small Business IT Alternative" />

            <p>
              For 8(a)-certified IT businesses, 8(a) STARS III is the most direct replacement for
              CIO-SP3 Small Business. It is a dedicated small business IT vehicle managed by GSA,
              set aside exclusively for SBA-certified 8(a) companies.
            </p>

            <p>
              The contract ceiling is $50 billion — the same figure CIO-SP4 was targeting. The base
              ordering period ran July 2021 through July 2026, with a three-year option that GSA
              intended to exercise. With over 1,084 awardees and $4.9 billion already obligated across
              more than 1,384 task orders, it has meaningful agency adoption.
            </p>

            <div className="overflow-x-auto my-8 rounded-xl border border-stone-200">
              <table className="w-full text-sm">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-stone-700">Feature</th>
                    <th className="text-left p-4 font-bold text-stone-700">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { feature: "Eligibility", detail: "SBA-certified 8(a) companies only" },
                    { feature: "Contract ceiling", detail: "$50 billion program-wide" },
                    { feature: "Primary NAICS", detail: "541512 (Computer Systems Design), plus others" },
                    { feature: "Scope", detail: "Cloud, cybersecurity, software development, IT O&M, data management, health IT" },
                    { feature: "Task order type", detail: "Fixed-price and T&M; competed among STARS III holders" },
                    { feature: "Managed by", detail: "GSA Federal Acquisition Service" },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-stone-50 transition-colors">
                      <td className="p-4 font-medium text-stone-700">{row.feature}</td>
                      <td className="p-4 text-stone-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The important caveat: STARS III is a closed vehicle. You can only get on it if GSA opens
              an on-ramp, and GSA has not announced a new on-ramp as of October 2026. If you are not
              already on STARS III, you cannot get on it right now. Watch GSA&apos;s forecast for any
              on-ramp announcement.
            </p>

            <p>
              If you are on STARS III, prioritize it aggressively. Agencies migrating from CIO-SP3 Small
              Business are actively looking for STARS III holders. Your eligibility certificate and track
              record on health IT or cybersecurity work will matter more now than ever.
            </p>

            <Callout icon={Lightbulb} color="amber" title="Not 8(a)? You Still Have Options">
              <p className="mb-0">
                Small businesses without 8(a) status have multiple paths: GSA MAS IT SINs (always open),
                OASIS+ Small Business pools (open on-ramp as of January 2026), and Alliant 2 Small Business
                (still active with remaining capacity). The{" "}
                <Link href="/blog/8a-sole-source-contracts" className="underline font-medium">8(a) certification</Link>{" "}
                gives you exclusive access to STARS III but is not required to win federal IT work.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="alliant-gwacs" number="06" title="Alliant 2 and Alliant 3: The Unrestricted Path" />

            <p>
              Alliant 2 is GSA&apos;s current flagship IT GWAC for large-scale, complex IT services.
              It is unrestricted — both large and small businesses can hold Alliant 2 positions.
              GSA raised the program ceiling from $50 billion to $75 billion to accommodate the
              migration of work from cancelled or sunsetting vehicles, including the NITAAC family.
            </p>

            <p>
              Alliant 3 is the successor vehicle, currently in development with a planned $75 billion
              ceiling and a 10-year ordering period. Unlike the original Alliant vehicles, Alliant 3
              will require prime contractors to meet enhanced small business subcontracting goals.
              The government plans approximately 60 awards, though the final solicitation timeline
              has not been confirmed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-5">
                <h3 className="font-bold text-blue-900 mb-3">Alliant 2 — Active Now</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" /> Ceiling raised to $75B</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" /> Unrestricted (large and small)</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" /> 10-year total ordering period</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" /> Closed to new entrants (existing awardees only)</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-5">
                <h3 className="font-bold text-indigo-900 mb-3">Alliant 3 — Upcoming</h3>
                <ul className="space-y-2 text-sm text-indigo-800">
                  <li className="flex gap-2"><Clock className="w-4 h-4 shrink-0 mt-0.5 text-indigo-600" /> $75B planned ceiling</li>
                  <li className="flex gap-2"><Clock className="w-4 h-4 shrink-0 mt-0.5 text-indigo-600" /> ~60 planned awards</li>
                  <li className="flex gap-2"><Clock className="w-4 h-4 shrink-0 mt-0.5 text-indigo-600" /> Enhanced SB subcontracting requirements</li>
                  <li className="flex gap-2"><Clock className="w-4 h-4 shrink-0 mt-0.5 text-indigo-600" /> Solicitation timeline not yet confirmed</li>
                </ul>
              </div>
            </div>

            <p>
              For small businesses, Alliant 2 and Alliant 3 present a subcontracting opportunity even
              if you cannot hold a prime position. Large Alliant 2 primes are required to meet small
              business subcontracting plan commitments. A strong{" "}
              <Link href="/blog/capability-statement-examples" className="text-blue-700 hover:underline font-medium">
                capability statement
              </Link>{" "}
              and an established relationship with a prime contractor can open task order work without
              you holding your own vehicle position.
            </p>

            <p>
              For companies targeting an Alliant 3 prime position, the time to start is now.
              Watch GSA&apos;s procurement forecast and SAM.gov for the draft RFP. When it drops,
              you&apos;ll need demonstrated experience in complex IT domains and a strong past performance
              record — the kind that should already be in your{" "}
              <Link href="/features/capability-statement" className="text-blue-700 hover:underline font-medium">
                capability statement
              </Link>.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="oasis-plus-it" number="07" title="OASIS+ for IT-Adjacent Services" />

            <p>
              OASIS+ (One Acquisition Solution for Integrated Services Plus) is GSA&apos;s premier
              professional services MAC, and it covers substantial IT-adjacent work. If your firm does
              IT strategy, enterprise architecture, program management for IT initiatives, data analytics,
              or similar knowledge-based services, OASIS+ is where that work lives.
            </p>

            <p>
              The vehicle has six pools — including dedicated pools for small businesses, SDVOSBs,
              WOSBs, HUBZone firms, and 8(a) companies. As of January 2026, OASIS+ has an open on-ramp
              through its Phase II process, which means you can get on the vehicle right now if you
              meet the self-scoring thresholds.
            </p>

            <p>
              For a full breakdown of OASIS+, see our{" "}
              <Link href="/blog/oasis-plus-contract-guide" className="text-blue-700 hover:underline font-medium">
                complete OASIS+ guide
              </Link>. The key point here: if you lost CIO-SP3 work that overlaps with OASIS+&apos;s
              13 service domains, the Phase II on-ramp is your fastest path to a comparable vehicle.
            </p>

            <Callout icon={Target} color="sky" title="Where OASIS+ and IT GWACs Overlap">
              <p className="mb-0">
                OASIS+ covers IT-adjacent services including data management (Domain 3), research and
                development (Domain 5), and program management of IT initiatives. Pure IT services —
                software development, network operations, cybersecurity — are more cleanly in-scope
                for STARS III and Alliant. If your work spans both sides, you may need positions on
                multiple vehicles to capture the full scope.
              </p>
            </Callout>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="mas-it" number="08" title="GSA MAS: The Always-Open Option" />

            <p>
              The GSA Multiple Award Schedule is not a GWAC — agencies must go through a slightly
              different ordering process — but it is the most accessible IT vehicle in federal
              procurement. MAS is continuously open to new vendors, meaning you can apply any time
              and typically receive a schedule within 4–6 months of a complete submission.
            </p>

            <p>
              The IT categories on MAS include dedicated Special Item Numbers (SINs) for cloud services
              (SIN 518210C), cybersecurity (SIN 54151HACS), IT professional services (SIN 54151S), and
              more. Agencies used MAS to obligate over $35 billion in IT products and services in fiscal
              year 2025.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4">Key IT SINs on GSA MAS</h3>
              <div className="space-y-3">
                {[
                  { sin: "54151S", name: "IT Professional Services", example: "Development, integration, operations" },
                  { sin: "518210C", name: "Cloud and Cloud-Related IT Professional Services", example: "Cloud migration, managed cloud" },
                  { sin: "54151HACS", name: "Highly Adaptive Cybersecurity Services", example: "Pen testing, SOC, IR" },
                  { sin: "OLM", name: "Order-Level Materials", example: "Ancillary labor and supplies within a task order" },
                  { sin: "54151", name: "IT General Purpose Commercial Technology Solutions", example: "Products and labor" },
                ].map((row) => (
                  <div key={row.sin} className="flex gap-4">
                    <span className="text-sm font-bold text-blue-600 w-32 shrink-0">{row.sin}</span>
                    <div>
                      <p className="text-sm font-medium text-stone-800">{row.name}</p>
                      <p className="text-xs text-stone-500">{row.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              MAS is not a substitute for a GWAC if you want to win large, complex task orders at
              civilian health agencies. But it is an essential building block. Many agencies use MAS
              for smaller IT buys — under $500K — and as a bridge vehicle while awaiting GWAC transitions.
              Having a MAS schedule keeps your pipeline alive during exactly this kind of transition period.
            </p>

            <p>
              For more on{" "}
              <Link href="/blog/gsa-schedule-guide" className="text-blue-700 hover:underline font-medium">
                whether a GSA schedule is right for your business
              </Link>, we have a full breakdown including the real costs and how long certification takes.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-stone-900 p-8 text-white">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 shrink-0 mt-1 text-stone-400" />
              <div>
                <h3 className="text-xl font-black mb-2">Start Your 30-Day Free Trial</h3>
                <p className="text-stone-300 mb-4 text-sm">
                  CapturePilot tracks open on-ramps across all GSA vehicles, monitors agency procurement
                  forecasts, and alerts you when IT requirements matching your profile are posted to
                  SAM.gov — across Alliant, STARS III, OASIS+, and MAS simultaneously.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="action-plan" number="09" title="Your Action Plan as an IT Contractor" />

            <p>
              The CIO-SP4 cancellation and CIO-SP3 sunset close a chapter for the NITAAC ecosystem.
              Here is the concrete sequence for moving forward, ordered by urgency.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  step: "1",
                  title: "Audit your current NITAAC positions",
                  body: "Identify every active CIO-SP3 task order, its current funding level, and whether option periods extend past December 31, 2028. Any option that would push you past that date needs to be restructured or closed out before then. Verify your compliance with the new ordering restriction.",
                  icon: Shield,
                  color: "red",
                },
                {
                  step: "2",
                  title: "Check your current GSA vehicle positions",
                  body: "If you are already on STARS III, Alliant 2, OASIS+, or MAS, document your positions and ensure your profiles are current. Agencies migrating from NITAAC will search these vehicles for incumbents with relevant past performance — your profile needs to reflect your CIO-SP3 work.",
                  icon: CheckCircle2,
                  color: "emerald",
                },
                {
                  step: "3",
                  title: "Apply for MAS now if you are not on it",
                  body: "MAS is always open. If you do not already have a schedule, submit an offer through the GSA eOffer system. The process takes 4–6 months for a complete submission. Starting now means you are positioned before agencies begin issuing replacement task order solicitations.",
                  icon: RefreshCw,
                  color: "blue",
                },
                {
                  step: "4",
                  title: "Pursue OASIS+ Phase II on-ramp",
                  body: "If your work overlaps with OASIS+ service domains, the Phase II on-ramp is open. Use the self-scoring worksheet to determine your pool eligibility, then prepare your offer. OASIS+ has become a primary vehicle for professional services work that agencies previously ran on CIO-SP3.",
                  icon: Target,
                  color: "violet",
                },
                {
                  step: "5",
                  title: "Watch for Alliant 3 solicitation and STARS III on-ramp",
                  body: "Both of these events will represent major new opportunities. Subscribe to SAM.gov solicitation notices for NAICS 541512 and related codes. When Alliant 3 drops, the evaluation process will favor companies with documented complex IT experience — start building that record now.",
                  icon: TrendingUp,
                  color: "sky",
                },
                {
                  step: "6",
                  title: "Engage agency customers directly",
                  body: "Your agency contacts know that their next IT requirement will land on a GSA vehicle. Have a direct conversation about which vehicle they plan to use. This intelligence is invaluable for deciding which on-ramps to prioritize and lets you shape requirements before they are finalized.",
                  icon: Building,
                  color: "amber",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 animate-on-scroll">
                  <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-black text-sm ${
                    item.color === "red" ? "bg-red-50 text-red-600" :
                    item.color === "emerald" ? "bg-emerald-50 text-emerald-600" :
                    item.color === "blue" ? "bg-blue-50 text-blue-600" :
                    item.color === "violet" ? "bg-violet-50 text-violet-600" :
                    item.color === "sky" ? "bg-sky-50 text-sky-600" :
                    "bg-amber-50 text-amber-600"
                  }`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Award} color="emerald" title="The Contractor Who Moves First Wins the Re-Compete">
              <p className="mb-2">
                When agencies migrate from NITAAC vehicles to GSA vehicles, their first instinct is to
                find their existing incumbents on the new vehicle. If your agency customer looks you up on
                STARS III or OASIS+ and finds you, the path to re-competition is smoother.
              </p>
              <p className="mb-0">
                If they look you up and find nothing, they will find someone else. Vehicle transition is
                a selection event for contractors, not just for vehicles.
              </p>
            </Callout>

            <p>
              Federal IT procurement is consolidating, not shrinking. The agencies that ran work on
              CIO-SP3 still need that work done — they just need to buy it differently. Your job right
              now is to be findable, credentialed, and positioned on the vehicles they plan to use.
            </p>

            <p>
              Use CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                market intelligence
              </Link>{" "}
              tools to track agency IT procurement forecasts, identify which GSA vehicles your target
              agencies are using most, and monitor for solicitations that match your capabilities. The
              contractors who treat this transition as an opportunity — rather than a disruption — will
              come out ahead.
            </p>

            <p>
              If you are not sure where to start, our{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline font-medium">
                Quick Checker
              </Link>{" "}
              will review your current registrations, certifications, and vehicle positions and tell you
              exactly which gaps to close first.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll mt-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white text-center">
            <Award className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-black mb-3">Book a Strategy Call</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Our GovCon strategists work exclusively with IT contractors navigating vehicle transitions.
              We&apos;ll map your current positions to the right GSA vehicles and build a 90-day action plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors"
              >
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                Start free trial <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll mt-16">
            <h3 className="text-xl font-black text-stone-900 mb-6">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/oasis-plus-contract-guide",
                  title: "OASIS+ Contract Vehicle Guide",
                  desc: "Six pools, 13 domains, and how to win through Phase II on-ramp",
                },
                {
                  href: "/blog/gsa-schedule-guide",
                  title: "GSA Schedule: Is It Right for You?",
                  desc: "Costs, timelines, and what a MAS schedule actually gets you",
                },
                {
                  href: "/blog/government-contract-vehicles-comparison",
                  title: "GWACs, MACs, and IDIQ Vehicles Compared",
                  desc: "GSA MAS vs. Alliant vs. OASIS+ vs. STARS III — which to pursue",
                },
                {
                  href: "/blog/8a-sole-source-contracts",
                  title: "8(a) Sole Source Contracts",
                  desc: "How to use 8(a) status to win direct awards without competition",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block p-5 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 transition-colors text-sm mb-1">
                    {post.title}
                  </p>
                  <p className="text-xs text-stone-500">{post.desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowRight className="w-3 h-3" />
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
