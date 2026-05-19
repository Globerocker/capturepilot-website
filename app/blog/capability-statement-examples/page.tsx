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
  FileText,
  Target,
  Clock,
  XCircle,
  Eye,
  Shield,
  BarChart3,
  Users,
  Zap,
  Award,
  Building2,
  Hash,
  Star,
  TrendingUp,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "six-second-test", label: "The 6-Second Test Your Statement Must Pass" },
  { id: "anatomy", label: "Anatomy of a Strong Capability Statement" },
  { id: "core-competencies", label: "Core Competencies: Good vs. Bad Examples" },
  { id: "past-performance", label: "Past Performance: The Section That Actually Wins Contracts" },
  { id: "differentiators", label: "Differentiators: What Sets You Apart (Or Doesn't)" },
  { id: "corporate-data", label: "Corporate Data Block: Every Field That Matters" },
  { id: "design-format", label: "Design and Format: What Contracting Officers Actually See" },
  { id: "bad-patterns", label: "8 Patterns That Kill Your Statement" },
  { id: "tailoring", label: "Tailoring Your Statement to Each Agency" },
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

export default function CapabilityStatementExamplesPage() {
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
            <span className="text-stone-900 font-medium">Capability Statement Examples</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Award className="w-4 h-4" /> Marketing
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Capability Statement Examples:{" "}
            <span className="gradient-text">
              What Good (and Bad) Ones Look Like
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            A contracting officer scans your capability statement in six seconds or less. Most never
            make it past the first pass. This is a side-by-side breakdown of what separates the
            statements that get a callback from the ones that end up in a drawer.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 19, 2026</span>
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
            <SectionHeading id="six-second-test" number="01" title="The 6-Second Test Your Statement Must Pass" />

            <p className="text-stone-700 leading-relaxed">
              Federal contracting officers receive hundreds of capability statements every year.
              They are busy people managing complex acquisitions under tight timelines. When your
              PDF lands in their inbox — whether you emailed it cold, dropped it at an industry day,
              or attached it to a{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline font-medium">
                Sources Sought response
              </Link>{" "}
              — they will glance at it for roughly six seconds before deciding whether to keep reading
              or move on.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Six seconds. That's enough to see your logo, scan for their agency's relevant NAICS
              codes, and catch one or two certification badges. If those six seconds don't surface
              something relevant to what they're buying, you're done.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The good news: most of your competition submits statements that fail this test
              instantly. Generic headlines, walls of corporate-speak, missing certifications, and
              outdated data are the norm. A focused, well-structured one-pager stands out simply
              by not being broken.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Eye,
                  stat: "6 sec",
                  label: "Average scan time",
                  desc: "How long a contracting officer takes before deciding whether to read more or move on.",
                },
                {
                  icon: FileText,
                  stat: "1 page",
                  label: "Required length in 2026",
                  desc: "The current standard is one page only. Two pages is borderline. Three is never read.",
                },
                {
                  icon: Users,
                  stat: "5 sections",
                  label: "Core required elements",
                  desc: "Core competencies, past performance, differentiators, corporate data, and contact info.",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-violet-600 mb-3" />
                  <div className="font-black text-lg text-stone-900 mb-1">{item.stat}</div>
                  <div className="font-semibold text-stone-700 text-sm mb-1">{item.label}</div>
                  <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              This guide goes section by section, showing you real contrasts between what works
              and what doesn't. If you want the foundational how-to first, read our{" "}
              <Link href="/blog/capability-statement-guide" className="text-blue-700 hover:underline font-medium">
                complete capability statement guide
              </Link>
              . This post assumes you know the basics and focuses on quality and differentiation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="anatomy" number="02" title="Anatomy of a Strong Capability Statement" />

            <p className="text-stone-700 leading-relaxed">
              Before the good-versus-bad examples, here's the layout of a statement that consistently
              works. The structure is not arbitrary — it mirrors how a contracting officer's eye moves
              across a page.
            </p>

            <div className="my-8 border border-stone-200 rounded-2xl overflow-hidden">
              <div className="bg-stone-800 px-5 py-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-stone-400" />
                <span className="text-stone-300 text-sm font-medium">Strong capability statement — visual layout</span>
              </div>
              <div className="divide-y divide-stone-100">
                {[
                  {
                    zone: "Top-left",
                    element: "Company logo + tag line (one sentence)",
                    why: "First thing the eye lands on. Logo = instant recognition. Tag line = what you do in plain English.",
                    good: true,
                  },
                  {
                    zone: "Top-right",
                    element: "Certification logos (SDVOSB, WOSB, 8(a), HUBZone, etc.)",
                    why: "COs are often required to hit set-aside goals. Certifications visible immediately signal you're in the right pool.",
                    good: true,
                  },
                  {
                    zone: "Left column",
                    element: "Core Competencies — 4 to 6 bullets, each one sentence",
                    why: "Answers: what do you actually do? Tied to the NAICS codes you want to win.",
                    good: true,
                  },
                  {
                    zone: "Left column",
                    element: "Past Performance — 2 to 4 entries with contract numbers",
                    why: "Verifiable proof. Contract numbers let COs cross-check in FPDS. Vague descriptions are useless.",
                    good: true,
                  },
                  {
                    zone: "Right column",
                    element: "Differentiators — 3 to 5 bullets of what makes you distinct",
                    why: "Not 'quality service.' Specific: proprietary methodology, clearance levels held, specialized equipment, industry certifications.",
                    good: true,
                  },
                  {
                    zone: "Right column",
                    element: "Corporate Data block",
                    why: "UEI, CAGE code, NAICS codes (primary first), founding year, employee count, annual revenue range, SAM registered.",
                    good: true,
                  },
                  {
                    zone: "Bottom",
                    element: "Contact information + clear CTA",
                    why: "Name, title, phone, email, website. Make the next step obvious.",
                    good: true,
                  },
                ].map((row, i) => (
                  <div key={i} className={`px-5 py-4 flex gap-4 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}>
                    <div className="w-24 shrink-0">
                      <span className="text-xs font-bold text-violet-600 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full">
                        {row.zone}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-stone-800 text-sm">{row.element}</p>
                      <p className="text-stone-500 text-xs mt-1 leading-relaxed">{row.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Callout icon={Lightbulb} color="amber" title="One statement won't cover every agency">
              <p>
                The layout above describes a general-purpose statement. Your highest-value statements
                are customized for a specific agency or NAICS code cluster. Keep a master version
                with everything in it, then produce tailored one-pagers for your top target agencies.
                CapturePilot's{" "}
                <Link href="/features/capability-statement" className="text-amber-700 underline font-medium">
                  capability statement builder
                </Link>{" "}
                lets you save a master and generate targeted versions without starting from scratch
                each time.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="core-competencies" number="03" title="Core Competencies: Good vs. Bad Examples" />

            <p className="text-stone-700 leading-relaxed">
              Core competencies are the most abused section of any capability statement. The instinct
              is to list everything your company does or could do. The result is a page full of
              phrases that apply to every company in your industry and differentiate you from none
              of them.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Stick to 4 to 6 bullets. Each one should tie directly to the type of contract you
              want to win, not to everything you've ever done. A cybersecurity firm bidding on DoD
              contracts should list NIST 800-171 compliance assessment and zero-trust architecture
              implementation — not "IT services" and "technology solutions."
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  bad: "Providing quality IT services and solutions to government clients",
                  good: "NIST 800-171 compliance assessment and remediation for DoD contractors",
                  badReason: "Applies to 50,000 companies. Says nothing about what you actually do or for whom.",
                  goodReason: "Specific framework, specific deliverable, specific buyer. A DoD CO scanning for cyber vendors will see this immediately.",
                },
                {
                  bad: "Janitorial and facilities maintenance services",
                  good: "Commercial janitorial services for federal buildings under 100,000 sq ft — 12 active GSA contracts in the Mid-Atlantic region",
                  badReason: "Could be any cleaning company. No scale, no track record signal, no geography.",
                  goodReason: "Shows current federal work, scale, and region. A CO with a Mid-Atlantic facility contract will shortlist this.",
                },
                {
                  bad: "Staffing and workforce solutions across multiple industries",
                  good: "Cleared professional staffing (Secret/TS) for federal program offices — 140 personnel currently on active DoD task orders",
                  badReason: "'Multiple industries' is the opposite of specialization. General staffing is not a federal differentiator.",
                  goodReason: "Clearance levels, current active headcount, and DoD focus — three data points that matter to a federal staffing buyer.",
                },
                {
                  bad: "Construction and project management services",
                  good: "Design-build renovation of federal facilities under MILCON programs — Davis-Bacon compliant, bonded to $15M",
                  badReason: "Generic. Doesn't distinguish between residential, commercial, or federal construction.",
                  goodReason: "MILCON knowledge signals DoD construction experience. Davis-Bacon and bonding are table-stakes federal requirements — leading with them shows you know the space.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="flex items-start gap-3 px-5 py-4 bg-red-50 border-b border-stone-200">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-red-700 mb-1">{item.bad}</p>
                      <p className="text-xs text-red-600 leading-relaxed">{item.badReason}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-4 bg-emerald-50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-emerald-800 mb-1">{item.good}</p>
                      <p className="text-xs text-emerald-700 leading-relaxed">{item.goodReason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The pattern is consistent: specificity beats generality every time. Include frameworks,
              programs, or regulations you work within. Name the agency types you serve. Quantify
              your current scale when you can. A CO reading your core competencies should be able
              to picture exactly where you'd slot into their procurement.
            </p>

            <Callout icon={Target} color="sky" title="Limit your NAICS codes too">
              <p>
                The same logic applies to NAICS codes. Listing 20 codes to maximize exposure
                signals you're unfocused. Pick your primary 3 to 5 — the codes where you have
                genuine past performance and can win at a competitive price. For help identifying
                the right codes, see our guide to{" "}
                <Link href="/blog/best-naics-codes-small-business" className="text-sky-700 underline font-medium">
                  the best NAICS codes for small business contractors
                </Link>
                .
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Build your capability statement in minutes
                </h3>
                <p className="text-violet-100 mb-4 text-sm leading-relaxed">
                  CapturePilot's capability statement builder pulls your SAM.gov data, certifications,
                  and past performance automatically — so you're not writing from scratch.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-5 py-2.5 rounded-xl hover:bg-violet-50 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="past-performance" number="04" title="Past Performance: The Section That Actually Wins Contracts" />

            <p className="text-stone-700 leading-relaxed">
              Past performance is the most scrutinized section of your capability statement —
              and the one where the gap between good and bad submissions is widest. A weak past
              performance section doesn't just fail to impress; it actively raises doubts about
              your experience level.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The standard for 2026 is verifiable data. Include real contract numbers, because
              contracting officers can look them up in FPDS-NG (Federal Procurement Data System).
              Vague descriptions without contract numbers are assumed to be inflated or invented.
              That's not an unfair assumption — it's how procurement officers protect themselves.
            </p>

            <div className="my-8 space-y-6">
              <div>
                <p className="text-sm font-bold text-red-700 mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Weak past performance entry (what not to do)
                </p>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                  <p className="font-semibold text-stone-800 text-sm mb-1">Department of Defense — IT Support Services</p>
                  <p className="text-stone-600 text-sm">Provided comprehensive IT support and cybersecurity services for a DoD component. Delivered on time and within budget. Received excellent performance ratings.</p>
                </div>
                <div className="mt-2 space-y-1">
                  {[
                    "No contract number — unverifiable",
                    '"DoD component" is not an agency — which one?',
                    "Dollar value missing — was this a $50K task order or a $5M contract?",
                    '"Excellent performance ratings" is unverifiable and vague',
                    "No period of performance — could be a project from 2009",
                  ].map((issue, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-red-700">
                      <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      {issue}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Strong past performance entry
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                    <p className="font-semibold text-stone-800 text-sm">U.S. Army Corps of Engineers — NIST 800-171 Compliance Assessment</p>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">Prime</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                    {[
                      { label: "Contract #", value: "W912DY-23-C-0044" },
                      { label: "Value", value: "$1.2M" },
                      { label: "Period", value: "Jan 2023 – Dec 2024" },
                      { label: "NAICS", value: "541519" },
                    ].map((d) => (
                      <div key={d.label} className="bg-white rounded-lg p-2">
                        <p className="text-xs text-stone-500">{d.label}</p>
                        <p className="text-sm font-bold text-stone-800">{d.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Conducted a 110-control NIST SP 800-171 gap assessment across 14 USACE
                    business units. Delivered System Security Plan, POA&amp;M, and SPRS score
                    submission. Customer achieved CMMC Level 2 readiness within 90 days.
                  </p>
                </div>
                <div className="mt-2 space-y-1">
                  {[
                    "Specific agency name — verifiable",
                    "Real contract number — CO can look this up in FPDS in 30 seconds",
                    "Dollar value and period of performance show scale and recency",
                    "Scope description is specific and matches cybersecurity NAICS 541519",
                    "Measurable outcome: CMMC Level 2 readiness — not just 'delivered on time'",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Include 2 to 4 entries on your one-pager — enough to demonstrate a pattern without
              overwhelming the page. Choose entries that are as similar as possible to the work
              you're pursuing. A janitorial company with a VA facility contract should lead with
              that when talking to VA contracting officers, not a commercial office cleaning job.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For a full treatment of building and presenting past performance — including how to
              handle it when you're new to federal contracting — read our guide on{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 hover:underline font-medium">
                past performance in government contracts
              </Link>
              .
            </p>

            <Callout icon={Shield} color="violet" title="Subcontract work counts — include it correctly">
              <p>
                Past performance as a subcontractor is valid. Label it clearly (Sub to: Prime Company
                Name) and include your specific scope and dollar value for your portion, not the
                prime's total contract. COs understand the subcontracting model and won't penalize
                you for it — but they need your actual role to be transparent.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="differentiators" number="05" title="Differentiators: What Sets You Apart (Or Doesn't)" />

            <p className="text-stone-700 leading-relaxed">
              The differentiators section is where most contractors write their worst copy. This
              is the section for genuine, specific competitive advantages — and it's where vague
              marketing language concentrates. Read these two versions and notice how differently
              they land:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div>
                <p className="text-sm font-bold text-red-700 mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Differentiators that differentiate nothing
                </p>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 space-y-3">
                  {[
                    "Dedicated to delivering quality results on time and on budget",
                    "Customer-focused approach with responsive communication",
                    "Experienced team of professionals with decades of combined experience",
                    "Proven track record of success in government contracting",
                    "Committed to exceeding client expectations",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                  Every one of these could appear on any company's statement without modification.
                  A CO reading these learns nothing about your company specifically.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-emerald-700 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Differentiators that actually differentiate
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  {[
                    "12 personnel holding active TS/SCI clearances — immediately deployable",
                    "Proprietary CMMC gap analysis tool reduces assessment time by 40%",
                    "Designated 8(a) participant through 2028 — eligible for sole-source awards up to $4.5M for services",
                    "Three OCONUS deployments supporting CENTCOM and INDOPACOM in the past 24 months",
                    "ISO 9001:2015 certified — third-party audited quality management system",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                  Each bullet is specific, verifiable, and relevant to a particular buyer.
                  A CO can immediately see whether this company fits their requirement.
                </p>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The test for every differentiator: could your largest competitor copy this bullet
              onto their statement without changing a word? If yes, rewrite it. Real differentiators
              involve specific numbers, certifications, clearances, equipment, geographic reach,
              proprietary processes, or regulatory expertise that not everyone in your industry has.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Your set-aside certifications belong here too. Don't just list them in the corporate
              data block — explain the competitive advantage they create. An SDVOSB status means
              something specific: access to VA set-asides and DoD sole-source authority. Say that.
              If you're not sure what certifications you qualify for, the{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline font-medium">
                CapturePilot Quick Checker
              </Link>{" "}
              will tell you in under two minutes.
            </p>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="corporate-data" number="06" title="Corporate Data Block: Every Field That Matters" />

            <p className="text-stone-700 leading-relaxed">
              The corporate data block is where contracting officers go to verify your identity
              and eligibility. Get one field wrong — an outdated UEI, a mismatched CAGE code,
              a NAICS code that doesn't match your SAM registration — and you've introduced a
              reason to pass on you.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tl-lg">
                      Field
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      What to Include
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tr-lg">
                      Common Mistake
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      field: "UEI",
                      include: "12-character alphanumeric code from SAM.gov (replaced DUNS in April 2022)",
                      mistake: "Using DUNS number. DUNS is retired — listing it signals you haven't updated your statement since 2022.",
                    },
                    {
                      field: "CAGE Code",
                      include: "5-character code from your SAM.gov registration",
                      mistake: "Leaving it out. CAGE codes are used in contract documents and logistics systems — COs expect to see it.",
                    },
                    {
                      field: "NAICS Codes",
                      include: "Primary code first. List 3 to 5 maximum — the codes where you have real past performance",
                      mistake: "Listing 15+ codes to maximize visibility. Makes you look unfocused, not versatile.",
                    },
                    {
                      field: "SAM Registration",
                      include: "Confirmation that registration is active (current as of statement date)",
                      mistake: "Not mentioning it at all. If your registration has lapsed, you can't be awarded — COs check.",
                    },
                    {
                      field: "Entity Type",
                      include: "Small Business, and all applicable socioeconomic designations (SDVOSB, WOSB, 8(a), HUBZone, SDB)",
                      mistake: "Only listing small business. Each set-aside designation opens different competition pools.",
                    },
                    {
                      field: "GSA Schedule",
                      include: "Contract number and SINs if applicable — e.g., MAS contract GS-35F-XXXX",
                      mistake: "Just saying 'GSA Schedule holder' without the contract number. Unverifiable.",
                    },
                    {
                      field: "Founding Year",
                      include: "Year established",
                      mistake: "Leaving it out. Longevity signals stability, especially important for services contracts.",
                    },
                    {
                      field: "Employees / Revenue",
                      include: "Employee count and revenue range (not exact — a range is fine)",
                      mistake: "Leaving this out. Scale information helps COs assess fit for requirement size.",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border border-stone-200 font-semibold text-stone-800">
                        {row.field}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600 text-xs leading-relaxed">
                        {row.include}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-red-600 text-xs leading-relaxed">
                        {row.mistake}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Verify your data matches SAM.gov exactly">
              <p>
                Every field in your corporate data block should match what's in your SAM.gov
                registration. Contracting officers can pull your SAM profile in 30 seconds. If
                your NAICS codes, certifications, or address don't match, it's a red flag —
                and potentially a compliance issue. Audit your SAM registration before you
                distribute any new version of your capability statement.
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-900 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 shrink-0 mt-1 text-violet-400" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Check your certification eligibility before you publish
                </h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Including certifications you're not actually qualified for is worse than leaving
                  them out. CapturePilot's Quick Checker confirms your set-aside status in under
                  two minutes — free.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-violet-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-violet-400 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="design-format" number="07" title="Design and Format: What Contracting Officers Actually See" />

            <p className="text-stone-700 leading-relaxed">
              Design matters because contracting officers are human. A cluttered, visually chaotic
              page is harder to scan. An unreadable font at 8pt takes effort to parse. A
              disorganized layout makes it hard to find the NAICS codes. None of that effort
              is in your favor.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The 2026 standard for capability statement format includes one significant addition
              that most contractors still miss: <strong>Section 508 compliance</strong>. Federal
              agencies are required to use accessible technology, and the files they share
              internally — including your capability statement — are expected to meet accessibility
              standards. A statement built in InDesign and saved as a flat image PDF is technically
              inaccessible. Save as a text-searchable PDF with readable fonts and high contrast.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <p className="font-bold text-red-800 text-sm mb-4 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Design patterns that hurt you
                </p>
                <ul className="space-y-2">
                  {[
                    "Font smaller than 9pt anywhere on the page",
                    "Dark background with light text (fails accessibility, hard to print)",
                    "Saved as a scanned image PDF (not searchable by keyword)",
                    "No visible section headers — forces the reader to hunt for information",
                    "Logo so large it crowds out content",
                    "Certification logos absent or too small to identify",
                    "Three-column layout that breaks on mobile preview",
                    "Color scheme that uses only color to convey meaning (accessibility failure)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <p className="font-bold text-emerald-800 text-sm mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Design patterns that work
                </p>
                <ul className="space-y-2">
                  {[
                    "10pt or larger body text, 12pt+ for section headers",
                    "White or light gray background for easy printing and readability",
                    "Text-searchable PDF — agencies file by keyword search",
                    "Clear visual hierarchy: company name → certifications → sections → data",
                    "Certification logos sized at least 0.5 inches tall",
                    "Two-column layout with clear left/right content zones",
                    "Company colors used sparingly for accent — not for body text",
                    "High contrast: dark text on white or light background throughout",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              One practical test: print your capability statement in black and white on a standard
              office printer. Most federal buildings still print in greyscale. If your statement
              loses critical information when color is removed — if certification logos become
              indistinguishable, if your highlighted sections disappear — you have a design problem.
              Fix it before you submit.
            </p>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="bad-patterns" number="08" title="8 Patterns That Kill Your Statement" />

            <p className="text-stone-700 leading-relaxed">
              These are the patterns that come up over and over in capability statements that don't
              get a response. Some are writing problems, some are strategy problems. All of them
              are fixable.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: "01",
                  title: "Targeting no one in particular",
                  body: "A capability statement that tries to speak to every agency speaks convincingly to none. If your statement doesn't reference the specific agency, the specific NAICS code cluster, or the specific type of contract you're pursuing, it reads as a broadcast — not a pitch. Keep a master version, then customize.",
                },
                {
                  num: "02",
                  title: "Listing what you want to do vs. what you've done",
                  body: "Future aspirations and planned capabilities have no place on a capability statement. You should only list what you can do today, supported by past performance you can point to. 'Seeking to expand into cybersecurity services' tells a CO you aren't qualified yet.",
                },
                {
                  num: "03",
                  title: "Missing certifications or listing expired ones",
                  body: "If your 8(a) status expired last year or your WOSB certification is pending renewal, do not list it. Contracting officers verify certifications. A misrepresentation — even accidental — is a compliance issue that can follow your company. Only claim active, current certifications.",
                },
                {
                  num: "04",
                  title: "No call to action",
                  body: "Your capability statement is a sales document. The last thing a reader's eye should land on is a specific invitation: schedule a capability briefing, request a meeting, visit your capability page. 'Contact us' is not a CTA. 'Schedule a 30-minute capability briefing with our federal sales lead at [phone]' is.",
                },
                {
                  num: "05",
                  title: "Burying the most important information",
                  body: "Your NAICS codes, certifications, and core competency summary should be visible without scrolling, clicking, or hunting. If a CO has to work to find your UEI or your set-aside status, you've already lost their attention.",
                },
                {
                  num: "06",
                  title: "Using DUNS numbers",
                  body: "DUNS numbers were replaced by the Unique Entity Identifier (UEI) in April 2022. If your capability statement still lists a DUNS number, it signals you haven't touched the document in over three years. That's a direct credibility hit.",
                },
                {
                  num: "07",
                  title: "No version control or date",
                  body: "Include the statement date in a small footer or header. This tells the reader the information is current. When you update the statement — new past performance, renewed certifications, updated NAICS codes — the date change makes that visible. Undated documents look stale by default.",
                },
                {
                  num: "08",
                  title: "Sending the wrong version to the wrong agency",
                  body: "A cybersecurity-focused statement sent to a facility management contracting officer. A construction company's statement sent to a VA IT office. If you're only maintaining one version of your statement, you're sending the wrong one most of the time. The tailoring effort is 20 minutes — it doubles your response rate.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-700 font-black text-sm">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="tailoring" number="09" title="Tailoring Your Statement to Each Agency" />

            <p className="text-stone-700 leading-relaxed">
              The single highest-leverage improvement most contractors can make is going from one
              generic statement to a library of targeted statements — one per major agency or
              opportunity type. The structure stays the same. The content shifts based on what
              that specific agency buys, which certifications they prioritize, and what past
              performance is most relevant.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  agency: "Department of Veterans Affairs (VA)",
                  lead: "Lead with SDVOSB/VOSB certification and VA-specific past performance",
                  naics: "Focus on NAICS codes under 621, 622, 541, and 238 depending on your service",
                  emphasis: "The VA has legally mandated set-aside preferences for veteran-owned small businesses under the Veterans First Contracting Program. A CO reading your statement wants to see your VA verification status prominently.",
                  link: { href: "/blog/va-contracts-guide", label: "VA contracts guide" },
                },
                {
                  agency: "Department of Defense (DoD)",
                  lead: "Lead with security clearance levels held and any CMMC preparation or certification",
                  naics: "DoD NAICS concentration is in 541330 (engineering), 541512 (IT), 336 (defense manufacturing), and construction NAICS under 236/237",
                  emphasis: "DoD COs need to know your cleared personnel count immediately. If you hold clearances, put that in the first visible section. No other federal customer cares about this more.",
                  link: { href: "/blog/dod-contracts-small-business", label: "DoD contracts for small business" },
                },
                {
                  agency: "General Services Administration (GSA)",
                  lead: "Lead with your GSA Schedule number, SINs, and pricing if you're already on schedule",
                  naics: "GSA covers the broadest NAICS range of any single vehicle — tailor to the specific SIN you're pursuing",
                  emphasis: "If you're pitching to become a GSA Schedule holder, your capability statement should demonstrate scale and commercial pricing discipline. If you already hold a schedule, that number is your single most important credential here.",
                  link: { href: "/blog/gsa-schedule-guide", label: "GSA Schedule guide" },
                },
                {
                  agency: "Small Business Administration (SBA) 8(a) Program",
                  lead: "Lead with 8(a) participant status, participant number, and program expiration date",
                  naics: "8(a) eligibility applies across NAICS — emphasize the codes where you want sole-source authority",
                  emphasis: "8(a) participants can receive sole-source awards up to $4.5M for services and $7M for manufacturing without competition. Your statement should make your 8(a) status and graduation date unmissable.",
                  link: { href: "/blog/8a-sole-source-contracts", label: "8(a) sole-source guide" },
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover-lift">
                  <div className="flex items-center gap-4 px-5 py-3 bg-blue-50 border-b border-stone-200">
                    <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-bold text-blue-800 text-sm">{item.agency}</span>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-stone-700"><strong>Lead with:</strong> {item.lead}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Hash className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-stone-700"><strong>NAICS focus:</strong> {item.naics}</p>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Lightbulb className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                      <p className="text-stone-600">{item.emphasis}</p>
                    </div>
                    <div className="pt-1">
                      <Link href={item.link.href} className="text-xs text-blue-700 hover:underline font-medium">
                        Read our {item.link.label} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The process for creating a tailored statement starts with agency research. Pull the
              agency's small business goals from their OSDBU website. Look at their spending history
              on USASpending.gov — what NAICS codes do they award most frequently? Check whether
              they have a preferred set-aside type based on their small business award breakdown.
              That research, combined with CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                market intelligence tools
              </Link>
              , takes about 20 minutes and makes your statement immediately more relevant than 90%
              of what the CO is receiving.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="When to send your capability statement">
              <p>
                A capability statement sent cold — unsolicited — has a low response rate. It works
                best when sent with a specific reason: following up after an industry day, responding
                to a{" "}
                <Link href="/blog/sources-sought-notice" className="text-emerald-700 underline font-medium">
                  Sources Sought notice
                </Link>
                , or accompanying an introduction from an OSDBU or prime contractor. The statement
                supports the conversation — it doesn't replace it. Build relationships first, then
                the statement has context that makes it land.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Your pipeline and your capability statement work together. Every opportunity you
              track in CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                pipeline tool
              </Link>{" "}
              tells you which agency and which contract type you're pursuing — which is the exact
              input you need to decide which version of your statement to send. The matching engine
              also surfaces the contracting officer and program office contacts for each opportunity,
              so you know who the statement is actually going to.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For a complete breakdown of the certifications worth pursuing, including eligibility
              requirements and how each one affects your statement, read our guide to{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-blue-700 hover:underline font-medium">
                federal contracting certifications
              </Link>
              .
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-3xl border border-violet-200 bg-violet-50 p-8">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-violet-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Build a capability statement that passes the 6-second test
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  CapturePilot's capability statement builder pulls your SAM.gov data, certifications,
                  and past performance automatically. Generate a targeted version for each of your
                  top agencies without starting from scratch every time.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-violet-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-violet-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-white border border-violet-200 text-violet-700 font-bold px-5 py-2.5 rounded-xl hover:bg-violet-50 transition-colors text-sm"
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
                  href: "/blog/capability-statement-guide",
                  title: "Capability Statement Guide",
                  desc: "The foundational how-to: what a capability statement is, why you need one, and how to write all six sections.",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices",
                  desc: "Responding to market research before the RFP — and how your capability statement fits into that response.",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance in Government Contracts",
                  desc: "Building a past performance record that holds up under CO scrutiny — including how to present subcontract work.",
                },
                {
                  href: "/blog/federal-contracting-certifications",
                  title: "Federal Contracting Certifications",
                  desc: "Which certifications actually help you win, how to get them, and how to present them in your statement.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-violet-300 hover:bg-violet-50 transition-all"
                >
                  <p className="font-bold text-stone-900 group-hover:text-violet-700 transition-colors mb-1 text-sm">
                    {post.title}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 text-violet-600 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
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
