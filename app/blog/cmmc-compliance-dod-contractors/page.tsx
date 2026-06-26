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
  Clock,
  DollarSign,
  FileText,
  XCircle,
  AlertCircle,
  Lock,
  Server,
  ClipboardCheck,
  Layers,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-changed", label: "What CMMC 2.0 Changed from Version 1.0" },
  { id: "three-levels", label: "Three Levels: Which One Applies to You" },
  { id: "phase-timeline", label: "The Four-Phase Implementation Timeline" },
  { id: "level-1-self-assessment", label: "Level 1: Self-Assessment and SPRS" },
  { id: "level-2-c3pao", label: "Level 2: The C3PAO Certification Process" },
  { id: "sprs-score", label: "Your SPRS Score and What It Means" },
  { id: "real-costs", label: "What CMMC Actually Costs: Honest Numbers" },
  { id: "common-gaps", label: "The Most Common Gaps That Fail Assessments" },
  { id: "start-today", label: "How to Start Your CMMC Compliance Journey" },
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

export default function CmmcCompliancePage() {
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
            <span className="text-stone-900 font-medium">CMMC Compliance</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            CMMC 2.0 Compliance:{" "}
            <span className="gradient-text">What Every DoD Contractor Must Know Before the Deadline</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Phase 1 of CMMC 2.0 went live November 10, 2025. Phase 2 — mandatory third-party certification for
            roughly <strong className="text-stone-700">80,000 defense contractors</strong> — kicks in November 2026.
            With fewer than 100 authorized assessors and wait times stretching into late 2026, the time to act is
            now, not when the next solicitation lands in your inbox.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>17 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 26, 2026</span>
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
            <SectionHeading id="what-changed" number="01" title="What CMMC 2.0 Changed from Version 1.0" />

            <p className="text-stone-700 leading-relaxed">
              The original CMMC program — published in 2020 — had five maturity levels, required third-party
              assessments at every level, and layered DoD-specific practices on top of existing NIST requirements.
              Defense contractors hated it. The compliance burden was enormous, the costs were unclear, and the
              certification bodies didn't exist in sufficient numbers to handle the volume.
            </p>

            <p className="text-stone-700 leading-relaxed">
              CMMC 2.0, announced in November 2021 and codified in the final DFARS rule published September 10, 2025,
              simplified the model significantly. Three levels instead of five. Only Level 2 and Level 3 require
              third-party assessments — Level 1 is self-assessed. And critically, the requirements now align directly
              to established NIST standards that contractors should already be working toward.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The DFARS rule — specifically clause 252.204-7021 — is what makes CMMC contractually enforceable.
              When that clause appears in a solicitation, CMMC certification isn&apos;t optional. It&apos;s a
              condition of award. No certification, no contract.
            </p>

            <Callout icon={FileText} color="blue" title="The regulatory chain that matters">
              <p>
                <strong>32 CFR Part 170</strong> is the Department of Defense&apos;s CMMC program regulation.{" "}
                <strong>DFARS 252.204-7021</strong> is the contract clause that flows the requirement down to
                contractors. <strong>NIST SP 800-171</strong> contains the 110 security requirements that define
                Level 2. When you see these cited in a solicitation, CMMC applies.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              One major change in CMMC 2.0: Plans of Action and Milestones (POA&amp;Ms) are now permitted under
              certain conditions for Level 2, meaning you don&apos;t have to achieve 100% compliance before
              assessment — but only for specific non-critical practices, and only with an approved remediation
              timeline. For Level 1 self-assessments, POA&amp;Ms are not permitted at all. Every one of the 17
              practices must be fully implemented before you can affirm compliance.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="three-levels" number="02" title="Three Levels: Which One Applies to You" />

            <p className="text-stone-700 leading-relaxed">
              Your required CMMC level depends on the type of federal information you handle. The DoD separates
              its data into two categories: Federal Contract Information (FCI) and Controlled Unclassified
              Information (CUI). Understanding which category your work falls into determines everything.
            </p>

            {/* Level comparison table */}
            <div className="overflow-x-auto my-8 rounded-2xl border border-stone-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Level</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Data Type</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Requirements</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Assessment</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Cadence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-bold text-blue-700">Level 1</span>
                    </td>
                    <td className="px-4 py-3 text-stone-600">FCI only</td>
                    <td className="px-4 py-3 text-stone-600">17 basic cyber practices (FAR 52.204-21)</td>
                    <td className="px-4 py-3 text-stone-600">Self-assessment</td>
                    <td className="px-4 py-3 text-stone-600">Annual</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-bold text-amber-700">Level 2</span>
                    </td>
                    <td className="px-4 py-3 text-stone-600">CUI</td>
                    <td className="px-4 py-3 text-stone-600">110 practices (NIST SP 800-171)</td>
                    <td className="px-4 py-3 text-stone-600">C3PAO third-party (or self, for non-prioritized)</td>
                    <td className="px-4 py-3 text-stone-600">Triennial + annual affirmations</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-bold text-red-700">Level 3</span>
                    </td>
                    <td className="px-4 py-3 text-stone-600">CUI on highest-priority programs</td>
                    <td className="px-4 py-3 text-stone-600">134 practices (NIST SP 800-172 subset)</td>
                    <td className="px-4 py-3 text-stone-600">DCSA government-led assessment</td>
                    <td className="px-4 py-3 text-stone-600">Triennial</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              If you handle FCI but not CUI — meaning you receive contract deliverables or performance
              information but not classified or sensitive technical data — Level 1 applies. This covers a
              large share of commercial service providers, staffing firms, and supply chain vendors doing
              DoD work.
            </p>

            <p className="text-stone-700 leading-relaxed">
              If your contract involves technical specifications, designs, proprietary research data, export-controlled
              information, or anything marked &quot;CUI&quot; — Level 2 is your requirement. The DoD estimates roughly
              80,000 companies in the Defense Industrial Base handle CUI and will need Level 2 compliance.
              If you&apos;re doing work on sensitive weapons programs or advanced research with DARPA or
              defense labs, Level 3 may apply.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Not sure which level you need? Check the draft solicitation&apos;s CUI requirements or ask your
              contracting officer directly. If they&apos;re including DFARS 252.204-7021 in the contract, the
              required level will be specified.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The CUI question most contractors get wrong">
              <p>
                Many small businesses assume they don&apos;t handle CUI because they haven&apos;t received
                a formal &quot;CUI&quot; marking on a document. That&apos;s not how it works. If you receive
                technical data, proprietary government information, export-controlled material, or anything
                described in the <strong>National Archives CUI Registry</strong>, you handle CUI — regardless
                of whether anyone bothered to label it correctly. When in doubt, assume Level 2.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="phase-timeline" number="03" title="The Four-Phase Implementation Timeline" />

            <p className="text-stone-700 leading-relaxed">
              CMMC 2.0 rolls out in four phases over three years. Understanding where we are — and where we&apos;re
              headed — tells you how much runway you actually have.
            </p>

            {/* Phase timeline steps */}
            <div className="my-8 space-y-4">
              {[
                {
                  phase: "Phase 1",
                  date: "November 10, 2025",
                  status: "active",
                  color: "emerald",
                  description:
                    "CMMC requirements appear in new DoD solicitations. Level 1 requires self-assessment and SPRS submission. Level 2 requires self-assessment or C3PAO assessment depending on program sensitivity. Level 3 requires DCSA government-led assessment. This phase is already in effect.",
                },
                {
                  phase: "Phase 2",
                  date: "November 10, 2026",
                  status: "upcoming",
                  color: "amber",
                  description:
                    "Mandatory C3PAO third-party certification required for all Level 2 prioritized programs. DoD expands CMMC inclusion to more solicitation categories. Self-assessment is no longer sufficient for most CUI-handling contracts. This is the critical deadline for most defense contractors.",
                },
                {
                  phase: "Phase 3",
                  date: "November 10, 2027",
                  status: "future",
                  color: "sky",
                  description:
                    "CMMC requirements extend to additional DoD solicitations and contract types, including Level 3 programs requiring DCSA government-led assessments. Coverage expands significantly across the defense industrial base.",
                },
                {
                  phase: "Phase 4",
                  date: "November 10, 2028",
                  status: "future",
                  color: "violet",
                  description:
                    "Full implementation. CMMC program requirements apply to all applicable DoD contracts and option periods. Every contractor handling FCI or CUI must be certified at the appropriate level or lose eligibility.",
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className={`rounded-2xl border p-6 ${
                    item.status === "active"
                      ? "bg-emerald-50 border-emerald-200"
                      : item.status === "upcoming"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-full w-10 h-10 flex items-center justify-center shrink-0 ${
                        item.status === "active"
                          ? "bg-emerald-500 text-white"
                          : item.status === "upcoming"
                          ? "bg-amber-500 text-white"
                          : "bg-stone-300 text-white"
                      }`}
                    >
                      {item.status === "active" ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-stone-900">{item.phase}</span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            item.status === "active"
                              ? "bg-emerald-100 text-emerald-700"
                              : item.status === "upcoming"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {item.status === "active" ? "IN EFFECT" : item.date}
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The Phase 2 deadline in November 2026 is the one that matters most right now. If your contracts
              require CUI handling, you need a C3PAO assessment completed before then. The problem: the DoD estimates
              80,000 companies need Level 2 certification, and as of mid-2026, fewer than 100 organizations
              are authorized as C3PAOs. Many are already booked through the end of 2026.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Waiting until Q3 2026 to start your certification process is a real risk. Contractors who don&apos;t
              have a scheduled assessment before Phase 2 hits could find themselves ineligible to bid on or receive
              awards for new solicitations with CUI requirements.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-xl p-3 shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-2">Not sure if CMMC applies to your contracts?</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    CapturePilot&apos;s Quick Checker analyzes your business profile, active contracts, and
                    NAICS codes to flag your CMMC requirements and other compliance gaps in minutes.
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
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="level-1-self-assessment" number="04" title="Level 1: Self-Assessment and SPRS" />

            <p className="text-stone-700 leading-relaxed">
              Level 1 covers the 17 basic cybersecurity practices from FAR clause 52.204-21. These are the
              foundational controls every contractor should already have: access controls, media protection,
              physical protection, system integrity — the table stakes of responsible IT security.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The self-assessment process is straightforward. You review each of the 17 practices against your
              current implementation. Every single one must be fully implemented — there&apos;s no partial credit
              and no POA&amp;Ms allowed at Level 1. If even one practice is not met, you cannot claim compliance.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Once you&apos;ve confirmed all 17 practices are implemented, you submit your results to the
              Supplier Performance Risk System (SPRS) at sprs.csd.disa.mil. Your submission must include
              your CMMC level, assessment date, assessment scope, and all CAGE codes associated with the
              information systems in scope. A senior official from your company then provides an annual
              affirmation confirming the assessment is current and accurate.
            </p>

            {/* 17 practice domains */}
            <div className="my-8 grid sm:grid-cols-2 gap-3">
              {[
                "Access Control (AC) — limit who can access systems",
                "Identification & Authentication (IA) — verify user identity",
                "Media Protection (MP) — control physical media",
                "Physical Protection (PE) — secure physical access",
                "System & Communications Protection (SC) — protect data in transit",
                "System & Information Integrity (SI) — detect and fix flaws",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-blue-800 leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The self-assessment isn&apos;t just a checkbox exercise. Your SPRS score is visible to contracting
              officers when they pull your registration. A missing or outdated SPRS entry raises red flags. An
              entry showing full compliance builds credibility before you&apos;ve written a word of your proposal.
            </p>

            <Callout icon={Clock} color="sky" title="How often you need to re-affirm">
              <p>
                Level 1 self-assessments must be completed and submitted to SPRS on an <strong>annual basis</strong>.
                Your affirmation is tied to a specific date, and contracting officers can see whether your assessment
                is current. A lapsed affirmation is treated the same as no compliance at all.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="level-2-c3pao" number="05" title="Level 2: The C3PAO Certification Process" />

            <p className="text-stone-700 leading-relaxed">
              Level 2 is where the real work lives. You need to implement all 110 security requirements from
              NIST Special Publication 800-171, Revision 2 — covering 14 domains from access control and
              incident response to risk assessment and system and communications protection. Then, for
              prioritized programs (which is most DoD CUI work), you need a Certified Third-Party Assessor
              Organization (C3PAO) to verify your implementation.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The C3PAO assessment process has several distinct stages. First, you&apos;ll document your
              System Security Plan (SSP) — a comprehensive description of your information system, boundaries,
              security controls, and how each of the 110 practices is implemented. This document alone is
              typically 50-150 pages for a small business. It&apos;s the foundation of your entire certification.
            </p>

            {/* Process steps */}
            <div className="my-8 space-y-3">
              {[
                {
                  step: "01",
                  title: "Define your assessment scope",
                  detail:
                    "Identify which systems, facilities, and personnel touch CUI. Scope reduction is one of the most effective cost control levers — the less of your environment that touches CUI, the smaller the certification effort.",
                },
                {
                  step: "02",
                  title: "Conduct a gap assessment",
                  detail:
                    "Compare your current controls against all 110 NIST 800-171 requirements. Most companies find 20-40 gaps on their first assessment. Document everything — what&apos;s implemented, what&apos;s partially implemented, and what&apos;s missing.",
                },
                {
                  step: "03",
                  title: "Develop your System Security Plan",
                  detail:
                    "Write the SSP documenting how each of the 110 practices is implemented in your environment. This is a formal technical document reviewed by the C3PAO.",
                },
                {
                  step: "04",
                  title: "Remediate gaps",
                  detail:
                    "Fix what&apos;s broken before the C3PAO shows up. Practices that are truly not yet implemented can go on a POA&M (under specific conditions), but the more you close before assessment day, the cleaner the outcome.",
                },
                {
                  step: "05",
                  title: "Schedule and complete the C3PAO assessment",
                  detail:
                    "The assessor reviews your SSP, interviews staff, and tests your controls. Assessment typically takes 3-10 days on-site or remotely, depending on scope. The C3PAO submits results to the CMMC eMASS system.",
                },
                {
                  step: "06",
                  title: "Receive CMMC certification",
                  detail:
                    "Once the C3PAO submits passing results, the CMMC Third-Party Assessment Organization (CMMC AB) issues your certification. This certification is valid for three years, with annual affirmations required.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start bg-stone-50 rounded-xl border border-stone-200 p-4">
                  <span className="text-2xl font-black text-stone-300 shrink-0 w-8 text-center leading-none mt-1">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The C3PAO bottleneck is real. As of mid-2026, the DoD has authorized fewer than 100 C3PAOs
              globally. Several of the larger ones have waitlists extending into Q4 2026. If you&apos;re
              targeting a Phase 2 deadline, you need to start your vendor search now — not after you win
              your next contract.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="Scope reduction: the fastest path to lower cost">
              <p>
                The single most effective way to reduce CMMC Level 2 costs is to shrink the scope of what
                gets certified. If you can move CUI handling to a separate, isolated environment — even a
                cloud enclave purpose-built for CUI — you certify only that environment, not your entire
                IT infrastructure. Microsoft GCC High, AWS GovCloud, and several purpose-built CUI platforms
                have pre-built CMMC-aligned architectures that dramatically simplify the path to certification.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="sprs-score" number="06" title="Your SPRS Score and What It Means" />

            <p className="text-stone-700 leading-relaxed">
              The Supplier Performance Risk System (SPRS) is the DoD&apos;s contractor performance database —
              and it&apos;s where your CMMC compliance status lives. Contracting officers check SPRS before
              award. A missing, outdated, or low SPRS score can kill a procurement before your proposal
              is ever evaluated on its merits.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For NIST 800-171 compliance (the predecessor to formal CMMC Level 2 certification), your SPRS
              score is calculated using a specific DoD scoring methodology: you start at 110 points and
              deduct points for each unimplemented or partially implemented practice. The deductions range
              from 1 to 5 points depending on the practice&apos;s weight. A perfect implementation scores
              110. Most companies, when they first assess honestly, score much lower.
            </p>

            <div className="overflow-x-auto my-8 rounded-2xl border border-stone-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left px-4 py-3 font-bold text-stone-700">SPRS Score Range</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">What It Signals</th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700">Contracting Officer View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-emerald-700">110</td>
                    <td className="px-4 py-3 text-stone-600">Full NIST 800-171 implementation</td>
                    <td className="px-4 py-3 text-stone-600">Strong confidence in contractor security posture</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-blue-700">88–109</td>
                    <td className="px-4 py-3 text-stone-600">Minor gaps with active remediation</td>
                    <td className="px-4 py-3 text-stone-600">Acceptable with solid POA&M evidence</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-amber-700">Below 88</td>
                    <td className="px-4 py-3 text-stone-600">Significant gaps in security controls</td>
                    <td className="px-4 py-3 text-stone-600">Elevated risk; may require explanation</td>
                  </tr>
                  <tr className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-red-700">Not submitted</td>
                    <td className="px-4 py-3 text-stone-600">No NIST 800-171 assessment on record</td>
                    <td className="px-4 py-3 text-stone-600">Disqualifying for most CUI contracts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Once CMMC 2.0 Phase 2 is fully in effect, the SPRS self-score for NIST 800-171 will be
              supplemented — and in many cases replaced — by your formal CMMC certification status in
              eMASS. But during the transition, your SPRS score remains an important signal. Contractors
              who never submitted an SPRS score are already at a disadvantage in Phase 1 solicitations.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The key here: honesty. The Department of Justice has pursued False Claims Act cases against
              contractors who submitted inflated SPRS scores without actually implementing the claimed
              controls. A fraudulent affirmation is not a compliance strategy — it&apos;s a federal fraud
              exposure. Score what you actually have, fix what&apos;s missing, and update your score as
              you improve.
            </p>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="real-costs" number="07" title="What CMMC Actually Costs: Honest Numbers" />

            <p className="text-stone-700 leading-relaxed">
              CMMC compliance costs vary enormously based on your environment size, complexity, and how far
              you are from the requirements today. Anyone quoting a single flat number is guessing. Here
              are realistic ranges based on current market data.
            </p>

            <div className="my-8 space-y-4">
              {[
                {
                  segment: "Level 1 self-assessment",
                  cost: "$2,000–$15,000",
                  detail:
                    "Mostly internal staff time. External consultant for gap assessment and SSP documentation if needed. Annual re-assessment is faster once the process is established.",
                  color: "bg-blue-50 border-blue-200",
                  textColor: "text-blue-900",
                  badgeColor: "bg-blue-100 text-blue-700",
                },
                {
                  segment: "Level 2 — C3PAO assessment fee",
                  cost: "$30,000–$60,000",
                  detail:
                    "C3PAO fees for a single-site small business assessment. Multi-site or complex cloud environments push toward the upper end. Fees are charged separately from preparation work.",
                  color: "bg-amber-50 border-amber-200",
                  textColor: "text-amber-900",
                  badgeColor: "bg-amber-100 text-amber-700",
                },
                {
                  segment: "Level 2 — remediation and prep",
                  cost: "$20,000–$60,000",
                  detail:
                    "Gap remediation, SSP development, staff training, and technical controls implementation. Heavily dependent on your starting point. Companies at 80+ on SPRS spend far less than those starting below 50.",
                  color: "bg-amber-50 border-amber-200",
                  textColor: "text-amber-900",
                  badgeColor: "bg-amber-100 text-amber-700",
                },
                {
                  segment: "Level 2 — total first-year investment",
                  cost: "$50,000–$138,000",
                  detail:
                    "Includes assessment, preparation, and remediation. DoD&apos;s own estimates and 2026 market surveys show small businesses (under 50 employees) averaging around $138,000 total. Budget conservatively.",
                  color: "bg-red-50 border-red-200",
                  textColor: "text-red-900",
                  badgeColor: "bg-red-100 text-red-700",
                },
                {
                  segment: "Annual maintenance",
                  cost: "$10,000–$30,000/year",
                  detail:
                    "Ongoing monitoring, annual affirmation, security tool subscriptions, and staff training. Typically 20-30% of first-year cost. Triennial re-certification adds another full assessment cost every three years.",
                  color: "bg-violet-50 border-violet-200",
                  textColor: "text-violet-900",
                  badgeColor: "bg-violet-100 text-violet-700",
                },
              ].map((item) => (
                <div key={item.segment} className={`rounded-2xl border p-5 ${item.color}`}>
                  <div className="flex items-start justify-between gap-4">
                    <p className={`font-bold text-sm ${item.textColor}`}>{item.segment}</p>
                    <span className={`text-sm font-black shrink-0 px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.cost}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 leading-relaxed ${item.textColor} opacity-80`}>{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              These costs can often be passed through to contracts as allowable costs under FAR Part 31 for
              cost-reimbursable contracts. For fixed-price work, you need to factor CMMC compliance into your
              overhead structure or price it into your rates. Either way, treat it as a cost of doing business
              with DoD — not an optional expense.
            </p>

            <Callout icon={DollarSign} color="emerald" title="The SBA and DoD have funding programs">
              <p>
                The <strong>SBIR/STTR program</strong> and DoD&apos;s{" "}
                <strong>Cybersecurity-as-a-Service (CaaS) program</strong> (piloted through the Office of
                the Under Secretary of Defense for Acquisition and Sustainment) offer subsidized cybersecurity
                support and assessments for small defense contractors. Check with your program office or{" "}
                <Link href="/blog/sbir-sttr-grants-guide" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900">
                  SBIR resources
                </Link>{" "}
                to see if you qualify for cost-sharing.
              </p>
            </Callout>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-gaps" number="08" title="The Most Common Gaps That Fail Assessments" />

            <p className="text-stone-700 leading-relaxed">
              C3PAOs don&apos;t publish pass/fail statistics, but practitioners working with defense contractors
              consistently identify the same categories of failure. These aren&apos;t obscure technical edge
              cases — they&apos;re foundational practices that companies either haven&apos;t implemented or
              haven&apos;t documented well enough to demonstrate during an assessment.
            </p>

            <div className="my-8 space-y-3">
              {[
                {
                  title: "Multi-factor authentication not fully deployed",
                  detail:
                    "NIST 800-171 requires MFA for all privileged accounts and remote access. Many companies have MFA on email but not on VPN, admin consoles, or remote desktop. Every access point touching CUI must be covered.",
                  severity: "critical",
                },
                {
                  title: "System Security Plan is incomplete or outdated",
                  detail:
                    "The SSP is not a one-time document. It must reflect your current environment. An SSP written 18 months ago that doesn&apos;t account for new systems, remote work changes, or cloud migrations will fail immediately.",
                  severity: "critical",
                },
                {
                  title: "Audit logging not enabled or retained",
                  detail:
                    "You must log security events, retain those logs for a defined period (typically 90 days minimum, with longer retention recommended), and actually review them. Logging that&apos;s configured but not monitored doesn&apos;t satisfy the requirement.",
                  severity: "high",
                },
                {
                  title: "Incident response plan exists on paper only",
                  detail:
                    "A Word document titled &apos;Incident Response Plan&apos; isn&apos;t sufficient. You need documented procedures, named roles, evidence that staff have been trained on it, and ideally, tabletop exercise records showing the plan has been tested.",
                  severity: "high",
                },
                {
                  title: "CUI marking and handling not consistent",
                  detail:
                    "Level 2 requires identifying, marking, and protecting CUI. If CUI flows through your environment without being identified or marked — or if employees handle it without knowing what it is — you have a process failure, not just a technical one.",
                  severity: "high",
                },
                {
                  title: "Subcontractor/supply chain controls missing",
                  detail:
                    "CMMC flows down. If you share CUI with any subcontractors, they need comparable CMMC coverage. A prime contractor can fail an assessment because their subs are out of scope when they should be in scope.",
                  severity: "medium",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`flex gap-4 rounded-xl border p-4 ${
                    item.severity === "critical"
                      ? "bg-red-50 border-red-200"
                      : item.severity === "high"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <XCircle
                    className={`w-5 h-5 mt-0.5 shrink-0 ${
                      item.severity === "critical"
                        ? "text-red-500"
                        : item.severity === "high"
                        ? "text-amber-500"
                        : "text-stone-400"
                    }`}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase ${
                          item.severity === "critical"
                            ? "bg-red-100 text-red-700"
                            : item.severity === "high"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The good news: none of these gaps are unfixable. The bad news: fixing them takes time. MFA
              deployment alone can take weeks when you factor in user training and legacy system compatibility.
              SSP rewrites, audit log configuration, and supply chain scoping add more. Start the gap analysis
              now while you still have runway.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-xl p-3 shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-2">Track your CMMC readiness alongside your pipeline</h3>
                  <p className="text-emerald-100 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link href="/features/intelligence" className="text-white underline underline-offset-2">
                      Intelligence tools
                    </Link>{" "}
                    flag CMMC requirements on opportunities before you pursue them, so you always know whether
                    you meet the threshold — or how far you have to go. Start your free trial to see it in action.
                  </p>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="start-today" number="09" title="How to Start Your CMMC Compliance Journey" />

            <p className="text-stone-700 leading-relaxed">
              The hardest part of CMMC compliance is the same as every large compliance initiative: starting.
              It&apos;s easy to defer to &quot;when we win our next DoD contract.&quot; But that&apos;s
              backwards. The contract will require CMMC before award. If you haven&apos;t started, you
              can&apos;t win the contract.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Here&apos;s a realistic 90-day starting sequence for a small business:
            </p>

            <div className="my-8 space-y-4">
              {[
                {
                  week: "Weeks 1–2",
                  title: "Determine your required level",
                  actions: [
                    "Review your active DoD contracts for DFARS 252.204-7021",
                    "Identify whether you handle FCI only or CUI",
                    "Check SPRS for your current self-assessment status",
                    "Review any solicitations you plan to pursue in the next 6 months",
                  ],
                },
                {
                  week: "Weeks 3–6",
                  title: "Conduct a gap assessment",
                  actions: [
                    "Map your current controls against the 17 Level 1 practices (or 110 Level 2 practices)",
                    "Score yourself honestly against the DoD NIST 800-171 scoring methodology",
                    "Define your assessment scope — what systems and environments touch CUI",
                    "Consider bringing in a CMMC Registered Practitioner Organization (RPO) for external perspective",
                  ],
                },
                {
                  week: "Weeks 7–10",
                  title: "Build or update your SSP and POA&M",
                  actions: [
                    "Draft your System Security Plan documenting current state",
                    "Document gaps in a Plan of Action & Milestones with realistic remediation timelines",
                    "Submit updated SPRS score reflecting your honest current state",
                    "Prioritize high-severity gaps for immediate remediation",
                  ],
                },
                {
                  week: "Weeks 11–12",
                  title: "Plan your certification path",
                  actions: [
                    "If Level 1: complete remediation and submit annual affirmation to SPRS",
                    "If Level 2: contact C3PAOs and request scheduling — book early",
                    "Evaluate scope reduction options (CUI-specific cloud enclave, etc.)",
                    "Build CMMC compliance costs into your indirect rate structure or overhead",
                  ],
                },
              ].map((phase) => (
                <div key={phase.week} className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 px-5 py-3 flex items-center gap-3">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">{phase.week}</span>
                    <span className="text-white font-bold text-sm">{phase.title}</span>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {phase.actions.map((action) => (
                        <li key={action} className="flex items-start gap-2.5 text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              CMMC compliance is a multi-month effort even for small businesses with relatively clean
              environments. For a company starting from scratch with legacy systems and no documented
              security controls, 12-18 months is a realistic timeline to achieve Level 2 certification.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The contractors winning DoD work in 2027 and 2028 are the ones building their compliance
              infrastructure now. This is a competitive advantage as much as a compliance requirement —
              because a lot of your competition is still hoping the deadline gets pushed back.
            </p>

            <Callout icon={AlertCircle} color="red" title="Do not confuse CMMC with FedRAMP">
              <p>
                FedRAMP and CMMC are different programs with different purposes. FedRAMP certifies cloud
                service providers (CSPs) that want to sell to the federal government. CMMC certifies
                defense contractors who handle DoD data. If your cloud provider is FedRAMP authorized,
                that helps your CMMC posture (particularly for Level 2 control inheritance), but it
                does not substitute for your own CMMC assessment. You still need to be certified.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              If you&apos;re tracking DoD opportunities as part of your BD pipeline, you should be flagging
              CMMC requirements at the opportunity stage — before you start writing a proposal. CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                opportunity matching
              </Link>{" "}
              and{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                intelligence tools
              </Link>{" "}
              surface this context automatically, so you know your compliance status before you invest BD
              resources in an opportunity you can&apos;t yet win. Pair that with your{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
                pipeline management process
              </Link>{" "}
              and you have a system that keeps compliance from being a last-minute surprise.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll mt-16">
            <div className="rounded-2xl bg-stone-900 p-8 text-white">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                  <Lock className="w-4 h-4 text-blue-400" />
                  <span className="text-stone-300">CMMC readiness + BD pipeline</span>
                </div>
                <h3 className="text-2xl font-black mb-3">
                  Stop tracking CMMC requirements in a spreadsheet
                </h3>
                <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                  CapturePilot connects your compliance status to your pursuit decisions. See which
                  opportunities require CMMC, at what level, and whether you qualify — before you
                  commit BD resources. Book a strategy call to see how contractors are using it to
                  stay ahead of Phase 2.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Book a strategy call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Start free trial
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="animate-on-scroll mt-16 pt-10 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-6">Related articles</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/dod-contracts-small-business",
                  title: "Department of Defense Contracts for Small Business",
                  category: "Agencies",
                },
                {
                  href: "/blog/far-clauses-small-business",
                  title: "Key FAR Clauses Every Small Business Contractor Must Know",
                  category: "Compliance",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  title: "DCAA Audit Preparation for Small Business Contractors",
                  category: "Strategy",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group rounded-xl border border-stone-200 p-4 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                >
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <p className="font-bold text-stone-900 text-sm mt-1 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-stone-400 group-hover:text-blue-500 transition-colors">
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
