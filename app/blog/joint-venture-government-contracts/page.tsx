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
  Users,
  Zap,
  DollarSign,
  Shield,
  Award,
  Handshake,
  FileText,
  Building2,
  TrendingUp,
  Clock,
  XCircle,
  Info,
  Scale,
  GitMerge,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "jv-vs-teaming", label: "Joint Venture vs. Teaming Agreement" },
  { id: "two-types", label: "Two Types of Small Business JVs" },
  { id: "jv-agreement-requirements", label: "What the JV Agreement Must Include" },
  { id: "sam-registration", label: "SAM.gov Registration and Certifications" },
  { id: "work-performance", label: "Work Performance Rules: The 40% Requirement" },
  { id: "set-aside-rules", label: "Set-Aside Rules by Certification Type" },
  { id: "two-year-restriction", label: "The Two-Year Award Restriction" },
  { id: "structuring-deal", label: "Structuring the Deal: Ownership, Profit, Control" },
  { id: "common-mistakes", label: "Mistakes That Kill JVs" },
  { id: "when-to-use", label: "When a JV Is the Right Move" },
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

export default function JointVentureGovernmentContractsPage() {
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
            <span className="text-stone-900 font-medium">Small Business Joint Ventures</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <GitMerge className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Small Business Joint Ventures:{" "}
            <span className="gradient-text">
              How to Structure a Deal That Actually Wins
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            A joint venture lets two small businesses combine capabilities and pursue government
            contracts neither could win alone. The rules are strict — get them wrong and you lose
            the award, the set-aside status, or both. Here is exactly how JVs work and how to
            structure yours correctly.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 4, 2026</span>
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
        <div className="max-w-4xl mx-auto prose-custom">

          {/* ── Section 1 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="jv-vs-teaming" number="01" title="Joint Venture vs. Teaming Agreement" />

            <p className="text-stone-700 leading-relaxed mb-4">
              People use these terms interchangeably. They should not. A{" "}
              <strong>teaming agreement</strong> is a partnership letter — it says Company A
              intends to bring Company B onto its team if it wins the prime contract. The prime
              contractor holds the award, subcontracts work to the teaming partner, and remains fully
              responsible for performance. The partner is a subcontractor with no direct relationship
              with the government.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A <strong>joint venture</strong> is a separate legal entity. It has its own name,
              its own registration in SAM.gov, its own UEI and CAGE code. The JV — not either
              partner individually — holds the government contract. Both members of the JV share
              responsibility for performance, and the JV itself must satisfy SBA&apos;s work
              performance requirements on every award.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 font-semibold rounded-tl-xl">Factor</th>
                    <th className="text-left p-4 font-semibold">Teaming Agreement</th>
                    <th className="text-left p-4 font-semibold rounded-tr-xl">Joint Venture</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      factor: "Legal structure",
                      team: "Agreement between separate companies",
                      jv: "New legal entity (LLC or partnership)",
                    },
                    {
                      factor: "Who holds the contract",
                      team: "The prime contractor",
                      jv: "The JV entity itself",
                    },
                    {
                      factor: "Government relationship",
                      team: "Only prime has one",
                      jv: "JV entity is the contractor",
                    },
                    {
                      factor: "Past performance credit",
                      team: "Prime gets it; subcontractor may or may not",
                      jv: "Both partners can claim JV past performance",
                    },
                    {
                      factor: "Set-aside eligibility",
                      team: "Based on prime contractor",
                      jv: "Based on the qualifying JV member",
                    },
                    {
                      factor: "SBA compliance required",
                      team: "No specific SBA rules",
                      jv: "Yes — strict SBA regulations apply",
                    },
                    {
                      factor: "SAM.gov registration",
                      team: "Not required for the team",
                      jv: "Required for the JV as a separate entity",
                    },
                  ].map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-900 border-b border-stone-100">{row.factor}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.team}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.jv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The key advantage of a JV over a teaming agreement: both partners build{" "}
              <strong>past performance</strong> on every contract the JV wins. That past performance
              belongs to both companies and can be used on future bids — even after the JV dissolves.
              For a small business trying to build a track record to compete for larger contracts, the
              JV structure compounds value in ways a subcontracting relationship never can.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Teaming agreements are simpler and faster to set up. But for set-aside contracts where
              the work performance requirements matter, and where both parties want direct credit for
              the win, a JV is the stronger play. Read our guide on{" "}
              <Link href="/blog/government-contract-teaming-agreement" className="text-blue-700 underline hover:text-blue-900">
                teaming agreements
              </Link>{" "}
              if you want to understand when teaming is the better choice.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="two-types" number="02" title="Two Types of Small Business JVs" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Not all government contracting JVs are created equal. The SBA recognizes two distinct
              types, each with different partner requirements and compliance rules.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Popular Joint Venture</h3>
                </div>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  Both JV partners must independently qualify as small businesses under the NAICS
                  code of the contract being pursued. No mentor-protégé relationship is required.
                  Either partner can be the managing member.
                </p>
                <ul className="space-y-2">
                  {[
                    "Both partners must be small for the specific NAICS code",
                    "At least one partner must hold the required set-aside certification",
                    "Managing member must have employee as project manager",
                    "Two-year award restriction applies after first award",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-blue-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-violet-200 bg-violet-50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Handshake className="w-5 h-5 text-violet-600" />
                  <h3 className="font-bold text-violet-900">Mentor-Protégé JV</h3>
                </div>
                <p className="text-sm text-violet-800 leading-relaxed mb-3">
                  Formed under an SBA-approved Mentor-Protégé agreement. The mentor can be a large
                  business and still have the JV treated as small. The protégé must be the managing
                  member with majority control.
                </p>
                <ul className="space-y-2">
                  {[
                    "Requires active SBA Mentor-Protégé Program approval",
                    "Mentor can be large — size waiver applies to the JV",
                    "Protégé must own 51%+ and be managing member",
                    "Protégé must perform at least 40% of JV work",
                    "JV can pursue all set-asides the protégé qualifies for",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-violet-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The mentor-protégé JV is more powerful — it lets you bring in a large, experienced
              company as a partner without losing your small business set-aside status. But it
              requires an approved SBA Mentor-Protégé agreement first, which takes 3 to 6 months.
              Our{" "}
              <Link href="/blog/mentor-protege-program" className="text-blue-700 underline hover:text-blue-900">
                full guide to the SBA Mentor-Protégé Program
              </Link>{" "}
              walks through the approval process in detail.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For two small businesses wanting to pursue a contract together without the complexity
              of the mentor-protégé program, a popular joint venture is faster to set up. Just make
              sure both partners independently qualify as small for the specific NAICS code on the
              solicitation — not your primary NAICS, but the one the contracting officer uses for
              the specific award.
            </p>

            <Callout icon={Info} color="sky" title="8(a) JV rule change: competitive contracts are out">
              As of recent SBA rulemaking, SBA no longer approves joint venture agreements formed
              to pursue <strong>competitive 8(a) contracts</strong> — even under the Mentor-Protégé
              Program. SBA will still approve JVs formed to pursue 8(a){" "}
              <strong>sole-source contracts</strong>. If your strategy depends on 8(a) competitive
              set-asides through a JV, that path has closed. Sole-source 8(a) JVs remain available
              under the thresholds: $5.5 million for services and $8.5 million for manufacturing.
            </Callout>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="jv-agreement-requirements" number="03" title="What the JV Agreement Must Include" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The joint venture agreement is a written legal document — not an email thread or a
              handshake. SBA regulations at 13 CFR § 125.8 specify exactly what must be in it.
              Missing required provisions is one of the most common reasons JVs get rejected during
              proposal review or size protests.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  number: "01",
                  title: "Statement of purpose",
                  desc: "The agreement must define what contracts or types of contracts the JV is formed to pursue. A vague catch-all purpose raises red flags. Be specific: name the contract vehicle, NAICS code, or solicitation you're targeting.",
                },
                {
                  number: "02",
                  title: "Managing venturer designation",
                  desc: "The agreement must designate one partner as the managing venturer — typically the qualifying small business for a popular JV, or the protégé for a mentor-protégé JV. The managing venturer has authority to make day-to-day decisions on behalf of the JV.",
                },
                {
                  number: "03",
                  title: "Named project manager",
                  desc: "A specific employee of the managing venturer must be named as the project manager with ultimate responsibility for performance. That person must be an actual employee of the managing member — not a hired contractor, not an employee of the other partner.",
                },
                {
                  number: "04",
                  title: "Profit and loss allocation",
                  desc: "The agreement must specify how profits and losses are divided. For mentor-protégé JVs, the protégé must receive at least 51% of profits. For popular JVs, there is no required minimum — but the distribution must be clearly defined.",
                },
                {
                  number: "05",
                  title: "Work share allocation",
                  desc: "The agreement must specify the percentage of work each partner will perform. This number must be consistent with SBA's minimum performance of work requirements. Saying '50/50' when the managing member plans to do 25% of the actual work creates a compliance problem from the start.",
                },
                {
                  number: "06",
                  title: "Recordkeeping requirements",
                  desc: "The JV must maintain separate accounting from the individual partners. The agreement must establish that the JV keeps its own records, completes its own federal tax return, and maintains documentation of work performed by each partner.",
                },
                {
                  number: "07",
                  title: "Annual reporting obligations",
                  desc: "The agreement must acknowledge the JV's obligation to submit annual performance-of-work statements and project-end reports to SBA and the contracting agency. Annual reports are due 45 days after each operating year; project-end reports are due 90 days after contract completion.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-5 bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <div className="shrink-0">
                    <span className="text-3xl font-black text-blue-200">{item.number}</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              State law matters too. Choose your jurisdiction carefully when forming the JV entity.
              Some states treat joint venture participants as general partners with joint and several
              liability — meaning one partner can be held personally responsible for the other&apos;s
              debts and obligations. Structuring as an LLC in a favorable state generally provides
              better liability protection.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Have a GovCon attorney review the agreement before you register it in SAM.gov or submit
              any proposal. The cost of a two-hour legal review is minor compared to the consequences
              of an agreement that fails a size protest after award.
            </p>
          </div>

          {/* ── Mid-article CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Know your set-aside eligibility before you structure the JV</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Which certifications you hold determines which set-asides your JV can pursue.
                  CapturePilot&apos;s{" "}
                  <Link href="/features/quick-checker" className="underline text-white hover:text-blue-200">
                    Quick Checker
                  </Link>{" "}
                  maps your current certifications — SDVOSB, 8(a), WOSB, HUBZone — against available
                  contract opportunities so you know exactly what your JV can bid on before you draft
                  a single agreement clause.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="sam-registration" number="04" title="SAM.gov Registration and Certifications" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The JV is a separate legal entity — which means it needs its own separate presence in
              the federal contracting system. This step trips up even experienced contractors who
              assume the JV can operate under one of the partner companies&apos; registrations. It
              cannot.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-6 my-8">
              <h3 className="font-bold text-white mb-4 text-lg">JV registration checklist before bidding</h3>
              <div className="space-y-3">
                {[
                  {
                    item: "Form the JV entity under state law (LLC or limited partnership recommended)",
                    done: true,
                  },
                  {
                    item: "Obtain a separate EIN (Employer Identification Number) for the JV",
                    done: true,
                  },
                  {
                    item: "Register the JV in SAM.gov — it must have its own UEI and CAGE code",
                    done: true,
                  },
                  {
                    item: "Identify the JV as a joint venture in SAM.gov (there is a specific entity type)",
                    done: true,
                  },
                  {
                    item: "Complete SAM.gov registration before the proposal submission deadline",
                    done: true,
                  },
                  {
                    item: "For SDVOSB set-asides: verify whether the JV itself needs VA CVE verification",
                    done: true,
                  },
                  {
                    item: "For HUBZone set-asides: confirm whether the JV qualifies or only the partner does",
                    done: true,
                  },
                  {
                    item: "Maintain active SAM.gov registration — annual renewal required",
                    done: true,
                  },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-300">{row.item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Certifications add complexity. Some set-asides require the certification to be held by
              the qualifying partner — the JV itself does not need to be separately certified. Others
              require the JV entity to hold its own certification. The rules vary by program:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-900">
                    <th className="text-left p-3 font-semibold border-b border-stone-200">Certification</th>
                    <th className="text-left p-3 font-semibold border-b border-stone-200">JV certification required?</th>
                    <th className="text-left p-3 font-semibold border-b border-stone-200">Who must qualify</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cert: "8(a)", jv: "No — partner holds cert", who: "One partner must be an active 8(a) participant" },
                    { cert: "SDVOSB", jv: "Typically partner holds cert", who: "One partner must be verified SDVOSB (VAMCs require VA CVE verification)" },
                    { cert: "WOSB/EDWOSB", jv: "No — partner holds cert", who: "One partner must be WOSB certified" },
                    { cert: "HUBZone", jv: "JV may need separate HUBZone cert", who: "More complex — consult SBA or GovCon counsel" },
                    { cert: "Small Business (general)", jv: "N/A — based on partner size", who: "At least one partner must qualify as small for the NAICS code" },
                  ].map((row, i) => (
                    <tr key={row.cert} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-3 font-medium text-stone-900 border-b border-stone-100">{row.cert}</td>
                      <td className="p-3 text-stone-600 border-b border-stone-100">{row.jv}</td>
                      <td className="p-3 text-stone-600 border-b border-stone-100">{row.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Register before the proposal deadline — not after">
              SBA decisions have consistently held that a JV&apos;s SAM.gov registration must be
              complete at the time the offer is submitted, not at time of award. A JV that submits
              an offer while its SAM.gov registration is still processing will be found ineligible
              even if it clears up before the agency makes a selection. Register early — give yourself
              at least two weeks before your first bid deadline.
            </Callout>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="work-performance" number="05" title="Work Performance Rules: The 40% Requirement" />

            <p className="text-stone-700 leading-relaxed mb-4">
              This is where most JVs run into trouble. The work performance requirement is not just
              a paper rule — it dictates how contracts must actually be executed, and violations can
              result in loss of set-aside status, contract termination, and debarment.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The managing member of a small business JV must perform at least{" "}
              <strong>40% of the work done by the joint venture</strong>. That percentage is measured
              in <strong>dollars, not labor hours</strong> — an important distinction the SBA has
              explicitly clarified. If the JV invoices $1 million, the managing member must be
              responsible for at least $400,000 of that work.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">Limitations on subcontracting: what the JV can send out</h3>
              <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                Beyond the 40% internal requirement, the JV faces limits on how much it can
                subcontract to <em>non-similarly-situated firms</em> (companies that don&apos;t
                qualify under the same set-aside). These caps apply to the total contract value:
              </p>
              <div className="space-y-3">
                {[
                  {
                    type: "Service contracts",
                    limit: "Maximum 50% to non-similarly-situated subs",
                    icon: Building2,
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    type: "Supplies and products",
                    limit: "Maximum 50% to non-similarly-situated subs (excluding cost of materials)",
                    icon: DollarSign,
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                  },
                  {
                    type: "General construction",
                    limit: "Maximum 85% to non-similarly-situated subs",
                    icon: Building2,
                    color: "text-orange-600",
                    bg: "bg-orange-50",
                  },
                  {
                    type: "Special trade construction",
                    limit: "Maximum 75% to non-similarly-situated subs",
                    icon: Award,
                    color: "text-violet-600",
                    bg: "bg-violet-50",
                  },
                ].map((row) => (
                  <div key={row.type} className={`flex items-center gap-3 rounded-xl p-4 border ${row.bg}`}>
                    <row.icon className={`w-5 h-5 ${row.color} shrink-0`} />
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{row.type}</p>
                      <p className="text-stone-600 text-xs">{row.limit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For mentor-protégé JVs, the 40% work requirement applies to the protégé specifically —
              not the JV overall. The mentor can perform up to 60% of the JV&apos;s work. But here
              is the critical nuance: work performed by a similarly situated entity (another small
              business with the same certification) does <strong>not</strong> count toward the
              protégé&apos;s 40% minimum. The protégé must perform that share itself, with its own
              workforce.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The work performed by the managing member must also be{" "}
              <strong>substantive, not administrative</strong>. Booking travel, handling invoicing,
              and processing reports don&apos;t count. The managing member needs to perform technical
              work that produces real project value — the kind of work that builds capabilities and
              past performance. SBA has rejected JV performance claims where the managing member&apos;s
              role was essentially clerical.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="set-aside-rules" number="06" title="Set-Aside Rules by Certification Type" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Each set-aside program has its own rules for how JVs qualify. The eligibility that gets
              your JV on a contract is determined by who holds the certification — and whether that
              certification&apos;s rules allow JV use.
            </p>

            <div className="space-y-6 my-8">
              <div className="rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-stone-900">SDVOSB / VOSB contracts</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  A JV pursuing a service-disabled veteran-owned or veteran-owned set-aside must have
                  at least one SDVOSB or VOSB partner that is a verified, qualifying firm. The
                  veteran-owned partner must be the managing member and must perform at least 40% of
                  the work. For VA-agency contracts specifically, the VA has its own verification
                  requirements through the VA Center for Verification and Evaluation (CVE).
                </p>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-stone-500">
                    See our{" "}
                    <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 underline">
                      SDVOSB contracts guide
                    </Link>{" "}
                    for full verification requirements.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-violet-600" />
                  <h3 className="font-bold text-stone-900">8(a) contracts</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  8(a) JVs for competitive procurements are no longer approved by SBA. Only JVs
                  targeting 8(a) sole-source contracts — up to $5.5 million for services and $8.5
                  million for manufacturing — can seek SBA approval. The 8(a)-certified partner must
                  be the managing member, and SBA must approve the JV agreement before award.
                  Read more in our{" "}
                  <Link href="/blog/8a-sole-source-contracts" className="text-blue-700 underline">
                    8(a) sole source contracts guide
                  </Link>.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-stone-900">WOSB / EDWOSB contracts</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The women-owned small business must be the managing member of a JV pursuing a WOSB
                  or EDWOSB set-aside. The WOSB partner must perform at least 40% of the work. Both
                  partners can be small businesses; one simply must hold the WOSB or EDWOSB
                  certification. See our{" "}
                  <Link href="/blog/wosb-certification-guide" className="text-blue-700 underline">
                    WOSB certification guide
                  </Link>{" "}
                  for eligibility details.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-stone-900">HUBZone contracts</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  HUBZone JV rules are more complex than other programs. The JV itself may need to be
                  HUBZone-certified, not just the partner. Additionally, per a January 2025 SBA final
                  rule, mentor-protégé JVs with a large-business mentor cannot receive the 10% price
                  evaluation preference for HUBZone solicitations — even if the protégé holds a HUBZone
                  certification. Consult SBA or a GovCon attorney before pursuing HUBZone set-asides
                  through a JV. See our{" "}
                  <Link href="/blog/hubzone-program-guide" className="text-blue-700 underline">
                    HUBZone program guide
                  </Link>{" "}
                  for the underlying certification rules.
                </p>
              </div>
            </div>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="two-year-restriction" number="07" title="The Two-Year Award Restriction" />

            <p className="text-stone-700 leading-relaxed mb-4">
              This rule catches contractors by surprise. Under SBA regulations, a specific joint
              venture generally may not receive new contract awards beyond a{" "}
              <strong>two-year window</strong> starting from the date of the first contract award.
              After that two-year period, the JV partners are presumed to be affiliated — which
              can disqualify them from small business set-asides.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The rule applies to popular joint ventures (where both partners are small businesses)
              most prominently. The clock starts ticking the moment the JV receives its first
              contract award. Any additional new awards must be made within that two-year window
              or the parties risk the affiliation finding.
            </p>

            <Callout icon={Clock} color="amber" title="Task orders on IDIQs are different — plan around them">
              The two-year restriction counts <em>contract awards</em>, not task orders or delivery
              orders issued under an existing IDIQ contract. If your JV wins a slot on an IDIQ
              vehicle — like a GSA schedule, SEWP, or a GWAC — individual task orders do not count
              as new contract awards for the two-year calculation. This is why winning a spot on a
              large IDIQ is often the most efficient use of a JV&apos;s limited award window.
              One award gives you years of follow-on task order revenue without burning additional
              slots.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For mentor-protégé JVs, the rules operate differently. Under the SBA MPP framework,
              a mentor-protégé joint venture can receive a maximum of{" "}
              <strong>three contract awards</strong> during the course of the relationship. There
              is no strict two-year clock, but after three awards the JV must dissolve or the
              parties are treated as affiliated in future competitions.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The strategic implication: be deliberate about which contracts you use to execute
              through the JV. Don&apos;t spend your limited award capacity on small task orders
              when you could use it on a major IDIQ that generates task order revenue for years.
              Map out your BD pipeline with your JV partner and prioritize the awards that maximize
              long-term value. CapturePilot&apos;s{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline hover:text-blue-900">
                pipeline manager
              </Link>{" "}
              lets you tag and track JV-specific opportunities separately from your solo pursuits.
            </p>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="structuring-deal" number="08" title="Structuring the Deal: Ownership, Profit, Control" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The JV agreement is where the business relationship gets defined. Getting the
              structure right matters for SBA compliance, for your tax position, and for the
              working relationship with your partner.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Scale,
                  label: "Ownership split",
                  desc: "For mentor-protégé JVs, the protégé must own at least 51% and the mentor no more than 40% of the JV. For popular JVs, the SBA doesn't mandate a specific split — but it must reflect who actually controls the entity.",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                },
                {
                  icon: DollarSign,
                  label: "Profit distribution",
                  desc: "Mentor-protégé JV: protégé gets at least 51% of profits. Popular JV: no required minimum — parties can negotiate freely. Build the profit split around actual work performed and risk assumed.",
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                },
                {
                  icon: Shield,
                  label: "Management control",
                  desc: "The managing member must have real decision-making authority. The JV agreement cannot give the other partner a veto over day-to-day management decisions — that arrangement crosses the line into the managing member losing effective control.",
                  color: "bg-violet-50 border-violet-200",
                  iconColor: "text-violet-600",
                },
              ].map((card) => (
                <div key={card.label} className={`rounded-xl border p-5 ${card.color}`}>
                  <card.icon className={`w-5 h-5 ${card.iconColor} mb-3`} />
                  <h4 className="font-bold text-stone-900 text-sm mb-2">{card.label}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              One SBA OHA (Office of Hearings and Appeals) case worth knowing: the agency found a
              JV ineligible because the agreement gave the non-managing partner the ability to veto
              key management decisions. The ruling was clear — a joint venture agreement that
              undermines the managing venturer&apos;s control doesn&apos;t meet SBA requirements,
              regardless of what the ownership percentages say on paper.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Work-share agreements often evolve once the contract starts. Whatever is agreed on
              paper, document the actual work performed month by month. If you need to defend
              compliance in a size protest or a contracting officer review, the records of who
              did what and when are your only real defense. Vague records produce bad outcomes.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4">Questions to resolve before signing the JV agreement</h3>
              <div className="space-y-3">
                {[
                  "Who makes the final call if partners disagree on a bid/no-bid decision?",
                  "How are proposal writing costs shared before contract award?",
                  "What happens if one partner loses its small business status mid-performance?",
                  "How is the JV dissolved when the relationship ends, and who keeps what?",
                  "Who is responsible for maintaining the JV's SAM.gov registration?",
                  "How are annual SBA reporting requirements tracked and submitted?",
                  "What is the exit mechanism if one partner wants out before contract completion?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-700">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Second CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-stone-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Track your JV opportunities alongside solo bids</h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  Managing a pipeline that includes JV pursuits, teaming arrangements, and solo bids
                  gets complicated fast. CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="underline text-white hover:text-stone-200">
                    pipeline manager
                  </Link>{" "}
                  lets you tag every opportunity by pursuit type and track it from sources sought to
                  award — so you always know where each deal stands without rebuilding your tracker
                  every time your team structure changes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 border border-stone-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:border-stone-400 transition-colors"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 9 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="09" title="Mistakes That Kill JVs" />

            <p className="text-stone-700 leading-relaxed mb-4">
              JV compliance failures fall into predictable patterns. Most of them are avoidable
              with upfront legal review and clear internal documentation.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  severity: "red",
                  title: "JV not registered in SAM.gov before proposal submission",
                  desc: "The JV must have an active SAM.gov registration at the time of bid submission, not at award. Submitting a proposal while SAM.gov processing is still pending is grounds for disqualification. This mistake eliminates otherwise strong bids.",
                },
                {
                  severity: "red",
                  title: "Managing member lacks effective control",
                  desc: "The JV agreement gives the non-managing partner too much authority — approval rights over contracts, personnel decisions, or financial commitments. SBA and OHA have consistently found that arrangements like this negate the managing member's required control.",
                },
                {
                  severity: "red",
                  title: "Managing member performs less than 40% of work",
                  desc: "The work-share allocation on paper says 40%, but the actual contract performance allocates far less to the managing member. If the managing member can't demonstrate 40% of dollars in its own work product, the JV is non-compliant — regardless of what the agreement says.",
                },
                {
                  severity: "amber",
                  title: "Partners become affiliated before award",
                  desc: "Extended working relationships, shared office space, shared personnel, or overlapping subcontracts can create affiliation between the JV partners. Once affiliation exists, the JV loses its small business status for that NAICS code.",
                },
                {
                  severity: "amber",
                  title: "No separate accounting records",
                  desc: "The JV runs its finances through one of the partner companies' accounts. SBA requires the JV to maintain separate records and file its own tax returns. Running JV revenue through a partner's books is a compliance failure.",
                },
                {
                  severity: "amber",
                  title: "Two-year window expires before planned awards",
                  desc: "The JV formed, won its first contract, and then pursued additional awards without tracking the two-year clock. New awards made after the two-year window are subject to an affiliation finding — meaning the JV may not qualify as small for those contracts.",
                },
                {
                  severity: "amber",
                  title: "Vague statement of purpose",
                  desc: "The JV agreement was written broadly to cover 'any government contract opportunities' rather than specific contract vehicles or NAICS codes. A broad-purpose JV raises questions about whether it was formed for a legitimate business reason or primarily to route set-asides.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl border-l-4 p-5 ${
                    item.severity === "red"
                      ? "border-red-400 bg-red-50"
                      : "border-amber-400 bg-amber-50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {item.severity === "red" ? (
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    )}
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Size protests are the most common mechanism that surfaces these failures. A competitor
              who loses to your JV has 5 business days from notification of award to file a protest
              with the SBA. If the protest leads to a size investigation and SBA finds compliance
              problems, the award can be rescinded. Competitors know the JV rules and look for
              vulnerabilities.
            </p>
          </div>

          {/* ── Section 10 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="when-to-use" number="10" title="When a JV Is the Right Move" />

            <p className="text-stone-700 leading-relaxed mb-4">
              A joint venture is the right structure when a specific opportunity requires capabilities
              or past performance that you can&apos;t credibly bring alone — and where your partner
              brings exactly what&apos;s missing. That&apos;s a narrow but important use case.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              You don&apos;t form a JV because you&apos;re generally interested in working with
              another company. You form one because there is a specific contract you want to win
              that neither of you can credibly pursue separately. The JV agreement, the SAM
              registration, the compliance overhead — all of that is worthwhile when the target
              contract justifies it. If there&apos;s no specific target in mind, a teaming
              agreement or a subcontracting relationship is simpler and lower-risk.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">Use a JV when</h3>
              <div className="space-y-3 mb-6">
                {[
                  "A specific contract requires past performance you don't have and your partner does",
                  "Both parties want direct past performance credit on the award",
                  "The set-aside qualification requires the qualifying partner to be the prime contractor",
                  "You want to pursue an IDIQ vehicle that will generate multi-year task order revenue",
                  "Your partner is a large business and you want to preserve small business set-aside eligibility (mentor-protégé JV)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-stone-900 mb-4 text-lg">Use a teaming agreement when</h3>
              <div className="space-y-3">
                {[
                  "You are the stronger prime contractor and need a specialized sub for one scope area",
                  "Speed matters more than past performance sharing — teaming agreements have no SAM registration step",
                  "The partnership is one-time and you don't anticipate future joint pursuits",
                  "Compliance overhead of a JV isn't worth the benefit on this specific contract",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Finding the right partner is the hardest part. Start with contractors who are already
              winning in your target agencies. Use{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline hover:text-blue-900">
                market intelligence
              </Link>{" "}
              to identify who is winning in your NAICS codes, what agencies they work with, and
              what contract vehicles they hold. The best JV partners aren&apos;t always obvious —
              they&apos;re the ones who fill your specific gaps and for whom you fill theirs.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Use CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 underline hover:text-blue-900">
                contract matching
              </Link>{" "}
              to surface opportunities where your certifications create a set-aside angle — those
              are the natural starting points for JV conversations. When you know which contracts
              your certifications can unlock, you know exactly what to bring to a prospective
              partner.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="Build toward graduating out of the JV">
              The best JV strategies have an exit built in. As you accumulate past performance
              through the JV, you&apos;re building the track record to bid on larger contracts
              independently. Track what you&apos;re learning and what capabilities your company
              is actually gaining — not just what contracts you&apos;re winning. The JV is a
              bridge, not a permanent structure. The goal is to reach a point where the contracts
              you used to need a partner for are now well within your solo range.
            </Callout>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll my-12">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-black mb-3">
                  Know what your certifications unlock before you pick a partner.
                </h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  The set-asides your JV can pursue depend entirely on the certifications your
                  qualifying partner holds. CapturePilot maps your certifications against real
                  contract opportunities so you know exactly which solicitations your JV can
                  approach — and which ones are out of reach — before you spend time structuring
                  the deal.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Check your eligibility free <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 border border-blue-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:border-white transition-colors"
                  >
                    Start your 30-day free trial
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Related Posts ── */}
          <div className="animate-on-scroll border-t border-stone-200 pt-12 mt-12">
            <h3 className="font-black text-stone-900 text-xl mb-6">Keep reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/mentor-protege-program",
                  label: "Strategy",
                  title: "SBA Mentor-Protégé Program: Find a Partner and Win Bigger Contracts",
                },
                {
                  href: "/blog/government-contract-teaming-agreement",
                  label: "Strategy",
                  title: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts",
                },
                {
                  href: "/blog/capture-management-process",
                  label: "Strategy",
                  title: "The Capture Management Process: How Winning Contractors Find and Win Deals",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  label: "Strategy",
                  title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits Before They Start",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex flex-col gap-2 bg-stone-50 border border-stone-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-xs font-bold text-blue-600">{post.label}</span>
                  <span className="text-sm font-bold text-stone-900 group-hover:text-blue-900 leading-snug">
                    {post.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-500 mt-1" />
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
