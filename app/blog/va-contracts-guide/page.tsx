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
  Users,
  Heart,
  Cpu,
  HardHat,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-va-opportunity", label: "The VA Opportunity: A Market Built for You" },
  { id: "veterans-first-program", label: "How the Veterans First Program Works" },
  { id: "vetcert-certification", label: "Getting VetCert Certified: VOSB vs. SDVOSB" },
  { id: "what-va-buys", label: "What the VA Actually Buys" },
  { id: "sole-source-contracts", label: "Sole Source Contracts: The Fastest Path" },
  { id: "va-buying-offices", label: "Key VA Buying Offices to Target" },
  { id: "building-pipeline", label: "Building Your VA Contract Pipeline" },
  { id: "common-mistakes", label: "Common Mistakes That Kill VA Bids" },
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

export default function VAContractsGuidePage() {
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
            <span className="text-stone-900 font-medium">VA Contracts Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Federal Agencies
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            VA Contracts: How to Win Work With the{" "}
            <span className="gradient-text">Department of Veterans Affairs</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The VA is the only federal agency legally required to give veteran-owned businesses
            priority on every contract it awards.{" "}
            <strong className="text-stone-700">
              $10.2 billion went to SDVOSBs in FY2024 alone
            </strong>{" "}
            — 23% of all VA prime contract dollars. If you hold a VetCert certification and know
            how the Veterans First system works, the VA is the most structurally favorable federal
            buyer for your business.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>20 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 27, 2026</span>
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
            id="the-va-opportunity"
            number="01"
            title="The VA Opportunity: A Market Built for You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most federal agencies give small businesses a preference. The VA gives veteran-owned
              businesses a mandate. Under the Veterans First Contracting Program — backed by a 2016
              Supreme Court ruling — the VA must consider set-asides for veteran-owned businesses on
              every acquisition before turning to any other procurement method. That includes orders
              placed on GSA Federal Supply Schedules, which most agencies can place without any
              set-aside consideration at all.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The numbers back it up. In FY2024, the VA awarded{" "}
              <strong>$10.2 billion — 23% of all prime contract dollars</strong> — to
              Service-Disabled Veteran-Owned Small Businesses (SDVOSBs). That&apos;s more than four
              times the statutory 5% goal. Over 2,300 SDVOSB firms received awards, a 3% increase
              over the prior year. The VA earned a straight &quot;A&quot; on the SBA&apos;s FY2024
              small business procurement scorecard.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The VA&apos;s FY2026 budget is <strong>$445.5 billion</strong> — a 12.4% increase over
              FY2025, with $133.2 billion in discretionary funding for medical care, IT, and
              infrastructure. That discretionary bucket is where contracts live. The VA is one of the
              fastest-growing federal buyers: spending increased 29% in Q1 2025 even as other
              agencies tightened budgets. For a certified veteran-owned business, that trajectory
              matters.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$10.2B", label: "SDVOSB prime awards in FY2024", icon: DollarSign },
                { stat: "23%", label: "Share of VA prime contracting dollars", icon: BarChart3 },
                { stat: "2,300+", label: "SDVOSB firms that received VA awards", icon: Users },
                { stat: "\"A\"", label: "VA FY2024 SBA Procurement Scorecard", icon: Star },
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
              The VA is not the largest federal buyer — the DoD is, by a factor of ten. But the VA
              is the most veteran-friendly federal buyer by law. For an SDVOSB or VOSB, the
              structural advantage at the VA doesn&apos;t exist anywhere else in the federal
              government to the same degree. That makes it the right starting point for most
              veteran-owned businesses entering the federal market.
            </p>
            <p className="text-stone-600 leading-relaxed">
              There&apos;s a catch: you have to be certified. Self-certification was eliminated in
              December 2024. Every SDVOSB and VOSB pursuing VA set-asides now requires a valid
              certification through the SBA&apos;s VetCert program — and that certification must be
              active at both the time you submit your offer and when the contract is awarded.
              We&apos;ll cover the certification process in Section 3. But understand that this is a
              hard gate — no VetCert, no access to the Veterans First preference system.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="VA vs. Other Agencies: The Key Difference">
            At the DoD, the SBA, and most civilian agencies, set-asides are discretionary for
            orders placed on contract vehicles like the GSA Federal Supply Schedule. Contracting
            officers can — and often do — place orders against existing vehicles without considering
            set-asides at all. The VA cannot do this. The 2016 Supreme Court ruling in{" "}
            <em>Kingdomware Technologies v. United States</em> held that the VA&apos;s Rule of Two is
            mandatory on ALL contracts, including FSS orders. This is the structural advantage that
            makes the VA uniquely valuable to certified veteran-owned businesses.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="veterans-first-program"
            number="02"
            title="How the Veterans First Program Works"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Veterans First Contracting Program (codified in 38 U.S.C. § 8127-8128) creates a
              mandatory priority ordering for VA acquisitions. Before the VA can use any other
              procurement method, it must consider each of these options in sequence. Only if the
              current tier can&apos;t produce at least two qualifying competitors at a fair price can
              it move to the next one.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "1",
                  color: "bg-blue-600",
                  title: "SDVOSB Set-Aside",
                  desc: "Service-Disabled Veteran-Owned Small Businesses get first consideration on every VA acquisition. If the contracting officer reasonably expects two or more certified SDVOSBs to submit offers at fair market price, the contract must be set aside for SDVOSB competition only. This is the top of the priority stack.",
                },
                {
                  step: "2",
                  color: "bg-blue-500",
                  title: "VOSB Set-Aside",
                  desc: "Veteran-Owned Small Businesses (without the service-disability requirement) get the next look. If the SDVOSB pool is too thin but two or more certified VOSBs exist, the contract is set aside for VOSB competition. SDVOSBs can also compete in VOSB set-asides.",
                },
                {
                  step: "3",
                  color: "bg-stone-500",
                  title: "Other Small Business Set-Asides",
                  desc: "If neither veteran pool is deep enough, the VA can move to standard small business set-asides — 8(a), HUBZone, WOSB, or general small business competition. The VA still tries to award to small businesses before going full-and-open.",
                },
                {
                  step: "4",
                  color: "bg-stone-400",
                  title: "Full and Open Competition",
                  desc: "Only if no small business set-aside is viable does the VA open competition to all businesses. In practice, this is uncommon for most VA procurement categories given the depth of the veteran-owned small business market.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${item.color} text-white font-bold text-sm flex items-center justify-center flex-shrink-0`}
                  >
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
              The Rule of Two is the trigger. If the contracting officer can reasonably expect
              two certified SDVOSBs to submit offers at fair market price, the set-aside is
              mandatory. &quot;Reasonable expectation&quot; is not a high bar — the CO doesn&apos;t
              need two confirmed competitors. They need to believe two exist based on market research.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This creates a concrete action for your business development: make sure VA contracting
              officers know you exist. Respond to every{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 underline font-medium">
                Sources Sought notice
              </Link>{" "}
              in your NAICS codes. Attend VA industry days. Submit your capability statement to VA
              contracting offices and program managers before solicitations are released. Your
              response to a Sources Sought can directly trigger an SDVOSB set-aside that would
              otherwise default to open competition.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The VA Acquisition Regulation (VAAR) governs how contracting officers implement the
              Veterans First Program. Contracting officers who bypass the mandatory priority sequence
              without documentation risk bid protests and GAO oversight — giving you real
              enforcement leverage if you see VA procurement that should have been set aside.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <Shield className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Check Your VA Set-Aside Eligibility Free
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Enter your certifications and NAICS codes. CapturePilot surfaces VA SDVOSB and VOSB
              set-aside contracts matched to your exact profile — updated daily from SAM.gov.
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
            id="vetcert-certification"
            number="03"
            title="Getting VetCert Certified: VOSB vs. SDVOSB"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Self-certification for SDVOSB status ended on December 22, 2024. Since then, SBA
              VetCert certification is the only path to VA Veterans First set-asides. The SBA
              manages certification through its{" "}
              <strong>Veteran Small Business Certification (VetCert)</strong> portal at{" "}
              <strong>veterans.certify.sba.gov</strong>. In November 2025, SBA announced it cleared
              the certification backlog — average processing time now runs just <strong>12 days</strong>,
              down from 60-90 days in early 2024.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Factor</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">VOSB</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">SDVOSB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        factor: "Veteran ownership requirement",
                        vosb: "≥51% owned by one or more veterans",
                        sdvosb: "≥51% owned by one or more service-disabled veterans",
                      },
                      {
                        factor: "Disability documentation",
                        vosb: "Not required — any veteran qualifies",
                        sdvosb: "VA service-connected disability rating required",
                      },
                      {
                        factor: "Management & control",
                        vosb: "Day-to-day operations managed by a veteran",
                        sdvosb: "Day-to-day operations managed by the service-disabled veteran",
                      },
                      {
                        factor: "Set-aside access",
                        vosb: "VOSB set-asides only",
                        sdvosb: "SDVOSB and VOSB set-asides",
                      },
                      {
                        factor: "Sole source authority at VA",
                        vosb: "Yes — contracts from $250K to $5M",
                        sdvosb: "Yes — contracts from $250K to $5M",
                      },
                      {
                        factor: "Other agency set-asides",
                        vosb: "Limited — mainly VA",
                        sdvosb: "Governmentwide — 5% statutory goal for all agencies",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i === 3 ? "bg-blue-50" : "hover:bg-stone-50"
                        }`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800">{row.factor}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-snug">{row.vosb}</td>
                        <td className="px-5 py-3 text-blue-700 text-xs leading-snug font-medium">
                          {row.sdvosb}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-6">
              If you qualify for SDVOSB, pursue it — don&apos;t settle for VOSB. SDVOSB unlocks
              the VA&apos;s top priority tier, governmentwide set-asides, and a{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 underline font-medium">
                5% statutory spending goal across all federal agencies
              </Link>
              . The sole difference is the service-connected disability requirement — and if you
              have it, the additional contracting access is significant.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4 font-semibold">
              The VetCert application process, step by step:
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Register in SAM.gov",
                  desc: "All federal contracting starts here. Make sure your NAICS codes, business description, and contact information are current before applying for VetCert. SAM.gov registration pulls directly into the VetCert application and auto-populates key fields. Your CAGE code is assigned during SAM registration.",
                },
                {
                  step: "02",
                  title: "Create a VetCert account",
                  desc: "Go to veterans.certify.sba.gov and create an account. The portal connects to your VA records and SAM.gov profile, importing relevant data automatically. Verify that all auto-populated information is accurate — errors here slow the review.",
                },
                {
                  step: "03",
                  title: "Gather ownership and control documentation",
                  desc: "You'll need documents proving veteran ownership (≥51%): operating agreements, stock certificates, meeting minutes showing management authority, and personal financial information for all owners with ≥20% stake. For SDVOSB, include your VA rating letter showing service-connected disability status.",
                },
                {
                  step: "04",
                  title: "Complete and submit the application",
                  desc: "Answer questions about ownership structure, control, and management. Describe who makes key business decisions — hiring, contracts, strategic direction — and document that the veteran controls those decisions. Ambiguity in control documentation is the most common reason for rejection.",
                },
                {
                  step: "05",
                  title: "Wait for SBA review",
                  desc: "Current processing averages 12 days. SBA analysts may request additional documentation during review — respond promptly to avoid delays. Once approved, your certification appears in SAM.gov and the SBA certification database, visible to any VA contracting officer running a vendor search.",
                },
                {
                  step: "06",
                  title: "Maintain active certification",
                  desc: "VetCert certification must be renewed annually. You must also remain active in SAM.gov — let your SAM.gov registration lapse and you lose VetCert access for VA set-asides. Certify timely: your certification must be active at both the time of offer submission and contract award.",
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
              One eligibility detail that catches businesses off-guard: unresolved federal tax
              liens or defaulted government loans block VetCert approval. If you have either, get
              on an approved payment plan before applying. The SBA won&apos;t approve certifications
              with unresolved federal financial obligations.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use the{" "}
              <Link href="/features/quick-checker" className="text-blue-700 underline font-medium">
                CapturePilot Quick Checker
              </Link>{" "}
              to see which certifications you may qualify for and what documentation you&apos;ll
              need. If you hold multiple certifications — SDVOSB and 8(a) together, for instance —
              you become a significantly more attractive teaming partner to larger primes looking to
              satisfy their set-aside subcontracting obligations.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Eligibility Must Hold at Award — Not Just Offer">
            A 2025 GAO ruling reinforced a critical VA rule: your SDVOSB or VOSB certification
            must be active at the time you submit your offer AND at the time the contract is awarded.
            If your certification expires between proposal submission and award, you lose eligibility
            even if you were certified when you bid. Track your VetCert expiration date carefully and
            renew at least 60 days before it lapses to avoid the gap. The same rule applies to your
            SAM.gov registration.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="what-va-buys"
            number="04"
            title="What the VA Actually Buys"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The VA is the largest integrated healthcare system in the United States, operating
              over 1,700 facilities including medical centers, outpatient clinics, and community care
              sites. It also runs a nationwide network of benefits offices, national cemeteries, and
              IT infrastructure supporting millions of veterans. That operational footprint drives a
              broad and consistent procurement need across multiple categories.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Category</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What VA Buys</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Budget Signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        cat: "Healthcare Services",
                        what: "Community care, nursing services, mental health support, specialty care, medical staffing",
                        signal: "Community Care Network IDIQ: $700B potential over 10 years",
                      },
                      {
                        cat: "Information Technology",
                        what: "Software development, cybersecurity, EHR systems, cloud migration, IT support services",
                        signal: "$6.3B IT budget in FY2025; EHR modernization ($894M)",
                      },
                      {
                        cat: "Construction & Facilities",
                        what: "Medical facility construction, renovation, O&M, grounds maintenance, janitorial",
                        signal: "$2.45B for major and minor construction in FY2025",
                      },
                      {
                        cat: "Professional & Admin Services",
                        what: "Program management, financial services, HR support, legal, training",
                        signal: "Consistent spend across all 172 VA medical centers",
                      },
                      {
                        cat: "Medical Supplies & Equipment",
                        what: "Pharmaceuticals, prosthetics, wheelchairs, hospital equipment, PPE",
                        signal: "VA National Acquisition Center handles bulk supply contracting",
                      },
                      {
                        cat: "Transportation & Logistics",
                        what: "Patient transport, fleet management, courier services, mail room",
                        signal: "Distributed across VA facilities nationwide",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-medium text-stone-800">{row.cat}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-snug">{row.what}</td>
                        <td className="px-5 py-3 text-blue-700 font-medium text-xs leading-snug">
                          {row.signal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The biggest dollar opportunity is healthcare services — specifically the VA&apos;s
              Community Care Network. The VA is preparing a new contract vehicle for veterans&apos;
              private-sector healthcare access, with a potential value of{" "}
              <strong>$700 billion over ten years</strong>. Even a small slice of task orders under
              that vehicle represents significant revenue for qualified healthcare services firms.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              IT is the fastest-growing category. The VA&apos;s Electronic Health Record
              Modernization program — a $894 million commitment in FY2025 — is generating ongoing
              software development, integration, and support contracting. The VA&apos;s Healthcare
              Transformation IDIQ (VHA IHT 2.0), a <strong>$14 billion IDIQ</strong> awarded to
              nine SDVOSB firms, is another active vehicle producing task orders for health IT and
              clinical transformation services. Both are active now.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Construction is accessible and consistent. The VA runs major and minor construction
              programs every year, with minor construction contracts (under $10 million) frequently
              set aside for small businesses. Janitorial, grounds, and facilities maintenance
              contracts cover the VA&apos;s 1,700+ facility footprint and recur on regular cycles.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use the VA&apos;s Forecast of Contracting Opportunities at{" "}
              <strong>vendorportal.ecms.va.gov</strong> to see upcoming procurements. The forecast
              is updated regularly and includes procurement category, estimated value, and planned
              set-aside type — the closest thing to advance notice you&apos;ll get before a
              solicitation hits SAM.gov. Pair this with{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                CapturePilot Intelligence
              </Link>{" "}
              to track VA spending patterns in your NAICS codes and identify which facilities are
              active buyers.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="sole-source-contracts"
            number="05"
            title="Sole Source Contracts: The Fastest Path to VA Revenue"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside competitions require multiple bidders. Sole source contracts don&apos;t. At
              the VA, certified SDVOSBs and VOSBs can receive direct contract awards — no
              competition — for requirements between <strong>$250,000 and $5 million</strong>. This
              is the fastest way to close your first VA contract, and it&apos;s a mechanism that most
              veteran-owned businesses dramatically underuse.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The VA&apos;s sole source authority under VAAR 819.7008 allows contracting officers to
              award directly to a certified SDVOSB (or VOSB under 819.7007) when: the award will be
              made at a fair and reasonable price, the requirement exceeds the simplified acquisition
              threshold ($250,000), and the award value doesn&apos;t exceed the legislative cap
              ($5 million for most categories, $3 million for IT and research). Split requirements
              to reach sole source threshold is explicitly prohibited.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: DollarSign,
                  title: "SDVOSB Sole Source",
                  color: "bg-blue-50 border-blue-200",
                  items: [
                    "Award range: $250,000–$5,000,000",
                    "Must be certified at offer AND award",
                    "Must perform ≥50% of contract value",
                    "Fair and reasonable price required",
                    "CO documents the sole source justification",
                  ],
                },
                {
                  icon: Shield,
                  title: "VOSB Sole Source",
                  color: "bg-stone-50 border-stone-200",
                  items: [
                    "Same $250K–$5M range applies",
                    "Used when SDVOSB pool is inadequate",
                    "SDVOSB firms can also win VOSB solos",
                    "Same fair price and certification rules",
                    "Less common — SDVOSB preferred first",
                  ],
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-5 ${card.color} animate-on-scroll`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <card.icon className="w-5 h-5 text-blue-600" />
                    <p className="font-bold text-stone-900 text-sm">{card.title}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Getting a sole source award starts with a relationship. VA contracting officers don&apos;t
              randomly reach out to unknown vendors for sole source justifications. They go to firms
              they already know, who have responded to Sources Sought notices, attended industry days,
              and submitted capability statements to the right program offices. The sole source mechanism
              rewards firms that have already done the visibility work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              When you identify a VA requirement that falls in the sole source range — through the
              VA forecast, a Sources Sought notice, or a program office conversation — position
              your firm as the logical single-source solution. Your{" "}
              <Link href="/features/capability-statement" className="text-blue-700 underline font-medium">
                capability statement
              </Link>{" "}
              should clearly establish your unique qualifications, relevant past performance, and
              why no other certified VOSB or SDVOSB can deliver the same result. Make it easy for
              the contracting officer to document the justification.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Sole source is also how many VA contractors begin a multi-year relationship. A
              single sole source award becomes past performance for the next contract cycle —
              including recompetes that run through full competition. Win the first one on a sole
              source, deliver well, and the next award becomes a lot easier to win even when
              competitors show up.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="The 50% Performance Rule">
            VA set-aside and sole source contracts come with a performance of work requirement:
            the certified SDVOSB or VOSB prime must perform at least 50% of the cost of the contract
            with its own employees (for services) or 15% for general construction. You can
            subcontract the remainder — but the veteran-owned firm must be genuinely in the
            driver&apos;s seat. The VA monitors this through performance reviews and contractor
            reporting. &quot;Pass-through&quot; arrangements where a veteran-owned firm wins and
            then farms out nearly all work to a non-veteran subcontractor are a compliance risk
            and can result in contract termination. See the{" "}
            <Link href="/blog/subcontracting-government-contracts" className="underline font-medium">
              subcontracting guide
            </Link>{" "}
            for more on structuring compliant teaming.
          </Callout>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">Start Finding VA Opportunities Today</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot matches your VetCert status, NAICS codes, and target VA facilities to
              open solicitations — updated daily from SAM.gov. Track SDVOSB and VOSB set-asides
              in one clean pipeline.
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

          {/* Section 6 */}
          <SectionHeading
            id="va-buying-offices"
            number="06"
            title="Key VA Buying Offices to Target"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The VA is not a single monolithic buyer. Procurement is distributed across major
              organizational components, each with its own contracting offices, program managers,
              and buying patterns. Knowing which office buys what — and which small business liaison
              to contact — focuses your business development instead of scattering it.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Heart,
                  title: "Veterans Health Administration (VHA)",
                  tag: "Healthcare / IT / Facilities",
                  desc: "The VHA is the largest component — 172 medical centers, 1,112 outpatient facilities, and a nationwide community care network. VHA procurement spans clinical services, IT systems, construction, and facility management. Each VAMC has its own contracting office. The Network Contracting Offices (NCOs) serve groups of facilities by region. The VHA OSBP runs small business events and maintains a vendor outreach program. Healthcare and IT firms should start here.",
                },
                {
                  icon: FileText,
                  title: "Veterans Benefits Administration (VBA)",
                  tag: "Professional Services / IT",
                  desc: "The VBA processes disability claims, education benefits, and loan guarantees for millions of veterans. It buys IT systems, professional services, training, and administrative support. VBA procurement is concentrated in its regional offices and national processing centers. If your firm does program management, business process services, or IT modernization, VBA is a consistent buyer.",
                },
                {
                  icon: Building2,
                  title: "National Cemetery Administration (NCA)",
                  tag: "Construction / Grounds / Services",
                  desc: "The NCA maintains 155 national cemeteries nationwide. It buys construction, grounds maintenance, janitorial, landscaping, and facility services on recurring cycles. NCA contracts tend to be smaller in value and more accessible for small businesses entering VA for the first time. The set-aside rate is high — NCA consistently awards a large share to veteran-owned firms.",
                },
                {
                  icon: Cpu,
                  title: "Office of Information & Technology (OIT)",
                  tag: "IT / Cybersecurity / Software",
                  desc: "OIT manages VA-wide IT infrastructure, cybersecurity, and the Electronic Health Record Modernization program. IT contracts from OIT tend to be larger and longer-term than facility-level IT purchases. OIT operates IT acquisition through the Technology Acquisition Center (TAC) in Eatontown, NJ — your primary contact for enterprise-level VA IT work. SDVOSB IT firms with EHR experience have strong positioning here.",
                },
                {
                  icon: HardHat,
                  title: "Office of Construction & Facilities Management (CFM)",
                  tag: "Construction / Engineering",
                  desc: "CFM oversees major construction projects across the VA's facility portfolio — new hospitals, clinic expansions, seismic upgrades. CFM contracts above $10M go through a formal acquisition process including pre-solicitation conferences and source selection panels. Below $10M, minor construction contracts frequently go to small businesses via set-aside. CFM publishes a construction project pipeline — review it quarterly to identify upcoming competitions.",
                },
                {
                  icon: Award,
                  title: "VA National Acquisition Center (NAC)",
                  tag: "Supplies / Pharmaceuticals / Equipment",
                  desc: "The NAC in Hines, Illinois, is the VA's centralized contracting office for national contracts covering medical supplies, pharmaceuticals, prosthetics, and bulk hospital equipment. NAC awards master agreements that VHA facilities then order against. If you supply physical medical goods, getting on a NAC contract vehicle expands your reach to every VA facility nationwide — a far better model than pursuing individual facility contracts.",
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

            <p className="text-stone-600 leading-relaxed mb-4">
              The VA&apos;s Office of Small &amp; Disadvantaged Business Utilization (OSDBU) is your
              navigation point across all of these components. OSDBU runs industry days, maintains
              a small business database, and connects certified veteran-owned firms with the right
              program offices before solicitations are released. Contact them at{" "}
              <strong>vetbiz@va.gov</strong> or 1-866-584-2344.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Geographically, target the VA facilities closest to your business first — where you can
              deliver directly and build personal relationships. The VA&apos;s contractor network is
              smaller and more relationship-driven than the DoD&apos;s. A trusted incumbent at one
              VAMC often gets referrals to sister facilities in the same region. Local presence and
              proven delivery are your credibility signals.
            </p>
          </div>

          <Callout icon={Star} color="sky" title="VA Industry Days: Show Up With a Capability Statement">
            VA program offices run industry days and one-on-one sessions with small businesses
            throughout the year. These aren&apos;t general networking events — they&apos;re
            pre-solicitation briefings where program managers describe upcoming requirements and
            take questions from potential vendors. Showing up with a targeted{" "}
            <Link href="/blog/capability-statement-examples" className="underline font-medium">
              capability statement
            </Link>{" "}
            and asking specific questions about the program&apos;s technical requirements and
            evaluation criteria is how you get on a contracting officer&apos;s radar before the
            solicitation is written. Find VA industry days on SAM.gov (filter by agency: VA,
            notice type: Special Notice) and on the VA OSDBU events calendar.
          </Callout>

          {/* Section 7 */}
          <SectionHeading
            id="building-pipeline"
            number="07"
            title="Building Your VA Contract Pipeline"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              VA contract cycles are more predictable than most agencies. Healthcare and facilities
              contracts run on annual or multi-year cycles, and the recompete schedule is largely
              visible if you know where to look. Build your pipeline around three horizons: active
              opportunities to bid now, upcoming recompetes to position for, and relationship
              development with program offices that are 12-18 months from procurement.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Target,
                  title: "Start With the VA Forecast of Contracting Opportunities",
                  desc: "The VA publishes its procurement forecast at vendorportal.ecms.va.gov. Updated quarterly, the forecast includes upcoming contracts by category, estimated value, planned set-aside type, and expected solicitation date. Filter by your NAICS codes and target VA component. Opportunities in the forecast 3-6 months out are in active acquisition planning — the right time to introduce your firm to the program office and express interest.",
                },
                {
                  icon: TrendingUp,
                  title: "Track Expiring VA Contracts on USASpending.gov",
                  desc: "Search USASpending.gov for VA contracts awarded in your NAICS codes over the past 3-5 years. Sort by period of performance end date. Any contract ending in the next 18 months is a recompete target. Look at the incumbent: if it's a certified SDVOSB delivering well, position yourself as a potential teaming partner. If the incumbent isn't SDVOSB-certified, you may have a stronger position in a future SDVOSB set-aside. Track recompete timelines and build relationships before the solicitation drops.",
                },
                {
                  icon: FileText,
                  title: "Respond to Every VA Sources Sought in Your NAICS",
                  desc: "VA contracting officers publish Sources Sought notices to determine whether SDVOSB or VOSB set-asides are viable. Your response signals your existence and capability. A well-written response — including your VetCert certification, NAICS code size standard compliance, relevant past performance, and a direct statement of interest — can push a borderline procurement into an SDVOSB set-aside. Two certified SDVOSB respondents meeting the Rule of Two threshold makes set-aside mandatory. Your response literally changes the procurement outcome.",
                },
                {
                  icon: Users,
                  title: "Register in the VA Vendor Information Pages",
                  desc: "The VA maintains the Vendor Information Pages (VIP) as part of the SBA VetCert integration. Once certified, your firm appears in searches run by VA contracting officers and program managers. Keep your profile current: accurate NAICS codes, a sharp capabilities description, and current contact information. An outdated or sparse profile means contracting officers searching for qualified SDVOSBs don't find you — and you miss opportunities before they're even published.",
                },
                {
                  icon: Clock,
                  title: "Target Multi-Award Contract Vehicles",
                  desc: "Many VA contracts — especially in IT and healthcare services — flow through IDIQ vehicles rather than standalone solicitations. Getting a seat on a VA IDIQ means you receive task order solicitations directly, competing only against the other vehicle holders rather than the entire market. The VHA IHT 2.0 ($14B) and upcoming Community Care Network vehicles are examples. Getting on a VA IDIQ requires a competitive proposal process, but the multi-year revenue stream from task orders is worth the investment.",
                },
                {
                  icon: Zap,
                  title: "Build One Deep Relationship Per Facility",
                  desc: "The VA's contracting network is smaller than the DoD's, and relationships matter more. Pick two or three VA medical centers or regional offices near you and invest deeply: attend their industry days, meet their OSBP contacts, submit your capability statement before any specific opportunity exists, and follow up consistently. One trusted relationship at a VAMC often generates multiple contract opportunities — and referrals to colleagues at adjacent facilities.",
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
              Managing this pipeline manually is difficult. Tracking VA forecasts, SAM.gov Sources
              Sought, USASpending.gov recompetes, and facility-level relationship notes across
              multiple targets quickly outgrows a spreadsheet.{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                CapturePilot&apos;s pipeline management
              </Link>{" "}
              keeps VA opportunities organized from Sources Sought through award, with automated
              alerts when relevant solicitations post or incumbents&apos; periods expire.
            </p>
            <p className="text-stone-600 leading-relaxed">
              If you&apos;re new to VA contracting, start with contracts under $2 million at
              facilities in your region. Win one. Deliver well. That performance record becomes the
              foundation for every subsequent VA bid — and it significantly strengthens any sole
              source justification a contracting officer might write for your firm on future work.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="common-mistakes"
            number="08"
            title="Common Mistakes That Kill VA Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The VA market is highly structured — which means mistakes that might slide by at
              other agencies are disqualifying here. These are the errors that cost veteran-owned
              businesses VA contracts most often.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: AlertTriangle,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  title: "Letting VetCert or SAM.gov lapse",
                  desc: "Both must be active at time of offer and award. A lapsed SAM.gov registration — even by a few days — is grounds for disqualification. A VetCert that expires after you submit but before award is disqualifying. Set calendar reminders 90 days before both renewal deadlines and treat them as hard business obligations, not administrative tasks.",
                },
                {
                  icon: AlertTriangle,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  title: "Bidding on contracts outside your size standard",
                  desc: "Each NAICS code has a different size standard — annual revenue or employee count — that determines small business eligibility. Check your size standard before bidding on any VA set-aside. Misrepresenting your size status is a federal crime, and VA contracting officers verify size at award. The correct size standard for your primary NAICS might not cover all the work you plan to perform — understand the applicable standard for each solicitation.",
                },
                {
                  icon: AlertTriangle,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  title: "Ignoring the 50% performance requirement",
                  desc: "On VA set-aside contracts, the certified prime must perform at least 50% of the contract value (for services) with its own employees. Subcontracting the majority of the work to a non-veteran firm violates this requirement and can trigger a size status protest, contract termination, or debarment. Structure your teaming agreements to ensure genuine performance — not just certifiable prime status.",
                },
                {
                  icon: AlertTriangle,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  title: "Submitting a generic capability statement",
                  desc: "A capability statement that describes what you do generally — without addressing the specific VA facility, program, or NAICS code you're pursuing — is forgettable. VA program offices receive dozens of capability statements. The ones that generate callbacks are specific: they name the relevant VA program, cite past performance on similar VA or healthcare work, reference the correct NAICS code, and make the firm's VetCert status prominent. Tailor every capability statement to its recipient.",
                },
                {
                  icon: AlertTriangle,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  title: "Proposing without past performance",
                  desc: "VA evaluators weight past performance heavily, particularly on healthcare and IT contracts. A firm with no relevant past performance competing against certified SDVOSBs with VA delivery records is at a serious disadvantage. Before pursuing large VA competitions, build a performance record: subcontract with an established VA prime, win smaller VA contracts through sole source or micro-purchase channels, or secure commercial healthcare contracts you can reference. See our guide on",
                  link: { href: "/blog/past-performance-government-contracts", text: "building past performance" },
                },
                {
                  icon: AlertTriangle,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  title: "Skipping the VA proposal compliance checklist",
                  desc: "VA solicitations often include detailed proposal requirements: specific section formats, page limits, font requirements, and attachment specifications. Non-compliant proposals are rejected on technical grounds before evaluation — your pricing and technical approach never get read. Use a compliance matrix to track every requirement in the solicitation and verify your proposal meets each one before submission. See our guide on",
                  link: { href: "/blog/government-proposal-compliance-matrix", text: "building a compliance matrix" },
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border border-amber-200 ${item.bg} animate-on-scroll`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      {item.desc}
                      {item.link && (
                        <>
                          {" "}
                          <Link
                            href={item.link.href}
                            className="text-blue-700 underline font-medium"
                          >
                            {item.link.text}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The VA market rewards discipline. The structural advantage of Veterans First is real,
              but it only applies to certified firms that show up to the right procurements, submit
              compliant proposals, and deliver well. Most SDVOSB firms that consistently win VA work
              aren&apos;t doing anything magical — they&apos;re keeping their certifications current,
              responding to Sources Sought, attending industry days, and building relationships at
              the program office level before solicitations drop.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use the{" "}
              <Link href="/features/matching" className="text-blue-700 underline font-medium">
                CapturePilot matching engine
              </Link>{" "}
              to surface VA opportunities that match your VetCert status and NAICS codes daily.
              And before you submit your next proposal, run through our{" "}
              <Link href="/resources/bid-checklist" className="text-blue-700 underline font-medium">
                bid checklist
              </Link>{" "}
              to catch compliance issues before they disqualify your submission.
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Shield className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Build Your VA Pipeline the Right Way
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot matches your VetCert certification, NAICS codes, and target VA
                facilities to open SDVOSB and VOSB set-asides — so you stop scanning SAM.gov
                manually and start pursuing the contracts most likely to award.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily SDVOSB and VOSB set-aside matching tailored to your certifications",
                  "VA forecast monitoring for upcoming opportunities before solicitation",
                  "Sources Sought alerts so you respond before competition locks in",
                  "Recompete tracking with USASpending.gov intelligence built in",
                  "Pipeline management from Sources Sought through award",
                  "Capability statement generator built for VA buyers",
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
                  desc: "The complete guide to winning SDVOSB set-asides across all federal agencies",
                },
                {
                  href: "/blog/sources-sought-notice",
                  icon: FileText,
                  title: "Sources Sought Notices",
                  desc: "How to respond and trigger SDVOSB set-asides before competition begins",
                },
                {
                  href: "/blog/capability-statement-examples",
                  icon: Star,
                  title: "Capability Statement Examples",
                  desc: "What a strong VA capability statement looks like vs. what gets ignored",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  icon: TrendingUp,
                  title: "Pipeline Management Guide",
                  desc: "How to manage your VA opportunity pipeline from first contact to award",
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
