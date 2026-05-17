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
  DollarSign,
  Target,
  Shield,
  FileText,
  TrendingUp,
  XCircle,
  Star,
  Handshake,
  BarChart3,
  Clock,
  Building,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-team", label: "Why Teaming Exists (and Why Smart Contractors Use It)" },
  { id: "two-types", label: "The Two Types: Prime-Sub Teams vs. Joint Ventures" },
  { id: "whats-in-agreement", label: "What Goes in a Teaming Agreement" },
  { id: "subcontracting-limits", label: "Limitation on Subcontracting: The Rules That Bite" },
  { id: "ostensible-subcontractor", label: "The Ostensible Subcontractor Rule" },
  { id: "mentor-protege", label: "The Mentor-Protégé Path to Bigger Work" },
  { id: "finding-partners", label: "Finding the Right Teaming Partner" },
  { id: "common-mistakes", label: "Mistakes That Kill Teaming Deals" },
  { id: "strategy", label: "Building a Teaming Strategy That Actually Wins" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
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

export default function TeamingAgreementsPage() {
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
            <span className="text-stone-900 font-medium">Teaming Agreements</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Users className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Teaming Agreements:{" "}
            <span className="gradient-text">
              How to Partner Up and Win Bigger Government Contracts
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            No single company has every capability the government ever needs. Teaming lets you
            cover gaps, chase contracts above your weight class, and build the past performance
            record that unlocks even larger work — if you structure the arrangement correctly.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 17, 2026</span>
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
          <div className="animate-on-scroll">
            <SectionHeading
              id="why-team"
              number="01"
              title="Why Teaming Exists (and Why Smart Contractors Use It)"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                The federal government awards more than <strong>$700 billion in contracts per
                year</strong>. The largest opportunities — complex IT modernization programs,
                multi-site facility operations, defense systems — routinely require capabilities
                no single small business can claim on its own. Teaming is the legitimate answer
                to that problem.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Under FAR Subpart 9.6, the government explicitly encourages contractor team
                arrangements. The rule exists because agencies want strong teams that can deliver,
                not artificially constrained bids from companies pretending they can do everything.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                For small businesses, teaming is a growth lever. You can pursue contracts worth
                $10 million or $50 million before your balance sheet can support them solo.
                You can borrow past performance from a partner who has done the work before.
                You can fill a technical gap — a specialized subcontractor for a niche skill —
                while staying in the prime seat.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The catch: teaming done sloppily creates legal exposure, SBA affiliation problems,
                and relationships that collapse at award. This guide covers how to do it right.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: TrendingUp,
                  label: "Joint Venture Growth",
                  value: "3×",
                  desc: "JVs now receive over 3 times the small-business contract dollars they did 10 years ago",
                },
                {
                  icon: BarChart3,
                  label: "Market Share",
                  value: "8.3%",
                  desc: "Of small business contract dollars in 2024 went to joint venture arrangements",
                },
                {
                  icon: DollarSign,
                  label: "Federal Market",
                  value: "$700B+",
                  desc: "Annual federal contract spending — too much opportunity to chase alone",
                },
              ].map(({ icon: Icon, label, value, desc }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-stone-200 p-5 hover-lift"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-2xl font-black text-stone-900 mb-1">{value}</p>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">
                    {label}
                  </p>
                  <p className="text-xs text-stone-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="two-types"
              number="02"
              title="The Two Types: Prime-Sub Teams vs. Joint Ventures"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                FAR 9.601 defines two distinct teaming structures. They look similar from the
                outside but create very different legal and regulatory consequences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Handshake className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Prime-Subcontractor Team</h3>
                </div>
                <p className="text-sm text-blue-800 mb-4">FAR 9.601(b)</p>
                <ul className="space-y-2 text-sm text-blue-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    One firm is the prime, the other is the subcontractor
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Both retain separate legal identities — no new entity formed
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Prime has privity of contract with the agency
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Faster to set up, simpler governance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    Most common structure for one-off pursuits
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-stone-600" />
                  <h3 className="font-bold text-stone-900">Joint Venture</h3>
                </div>
                <p className="text-sm text-stone-500 mb-4">FAR 9.601(a)</p>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                    Forms a new legal entity that bids as the offeror
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                    Partners share management, risk, and profit
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                    JV can qualify as &quot;small&quot; even if one partner is large (under SBA rules)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                    Required for SBA Mentor-Protégé program benefits
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                    More complex governance, longer setup
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                For most small businesses pursuing a single solicitation, a prime-sub teaming
                agreement is the right starting point. It&apos;s faster, doesn&apos;t require
                entity formation, and gives the prime full control. Joint ventures make sense
                when you need set-aside eligibility for a large award, or when you&apos;re
                building a long-term strategic partnership through the Mentor-Protégé program.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                One critical distinction: in a prime-sub team, you sign a teaming agreement
                <em> before</em> the award, then negotiate the actual subcontract <em>after</em>.
                Courts frequently treat teaming agreements as unenforceable &quot;agreements to
                agree&quot; because they lack specific subcontract terms. The teaming agreement
                captures intent; the subcontract creates binding work share obligations.
              </p>
            </div>

            <Callout icon={Lightbulb} color="amber" title="Key Distinction">
              A teaming agreement is not a subcontract. It expires once the prime contract is
              awarded. Without a signed subcontract, your partner can legally walk away after
              award — and some do. Always include a clause requiring both parties to negotiate
              in good faith within a defined timeframe after award, with specific work share
              percentages as the floor.
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="whats-in-agreement"
              number="03"
              title="What Goes in a Teaming Agreement"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                Neither SBA regulations nor the FAR prescribe required teaming agreement
                content — but that doesn&apos;t mean you can be vague. Agencies sometimes
                require submission of teaming agreements with proposals, and the OHA (Office
                of Hearings and Appeals) will examine the terms closely during size protests.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                A teaming agreement that can survive scrutiny contains these elements:
              </p>
            </div>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Identification of the parties and roles",
                  desc: "Name the prime and subcontractor explicitly. Identify the specific solicitation number this agreement covers. Vague agreements covering 'future opportunities' raise affiliation flags.",
                },
                {
                  step: "02",
                  title: "Scope of work and work share percentages",
                  desc: "Define exactly what the subcontractor will do and what percentage of contract value they will receive. Courts reject vague promises. SBA scrutinizes work share percentages against the limitation on subcontracting rules — document these specifically.",
                },
                {
                  step: "03",
                  title: "Proposal responsibilities",
                  desc: "Who writes which sections, provides past performance references, and contributes pricing data. Assign responsibilities clearly so there are no disputes during proposal development.",
                },
                {
                  step: "04",
                  title: "Exclusivity and non-compete terms",
                  desc: "Define whether partners are exclusive on this pursuit. If you invest months developing a proposal with a partner, you want protection against them teaming with a competitor for the same solicitation.",
                },
                {
                  step: "05",
                  title: "Intellectual property and data rights",
                  desc: "Who owns the proposal content. What happens to proprietary data the subcontractor contributes. This matters especially for technical approaches that could be reused.",
                },
                {
                  step: "06",
                  title: "Subcontract negotiation obligation",
                  desc: "Require both parties to negotiate a subcontract within a specific number of days after award (30–45 days is typical), with the work share percentage as the floor. This is your protection against post-award abandonment.",
                },
                {
                  step: "07",
                  title: "Termination and expiration",
                  desc: "Define what happens if the prime loses the bid, the procurement is canceled, or negotiations break down. Most teaming agreements expire on award or 6-12 months after signing if no award occurs.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 p-5 bg-white rounded-2xl border border-stone-200 hover-lift">
                  <div className="text-lg font-black text-blue-600 font-mono w-8 shrink-0">{step}</div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-sm text-stone-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Submit with the Proposal?">
              Some agencies require teaming agreements to be submitted with proposals as part of
              their evaluation of team credibility. Others treat them as proprietary. Read the
              solicitation carefully — submitting when not required exposes your terms, while
              failing to submit when required can render your proposal non-compliant.
            </Callout>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="subcontracting-limits"
              number="04"
              title="Limitation on Subcontracting: The Rules That Bite"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                Here&apos;s where many teams get into trouble. When a small business wins a
                set-aside contract, SBA limits how much of that contract value can flow to
                subcontractors who are <em>not</em> similarly situated entities (i.e., not
                also small businesses in the same category). FAR 52.219-14 and 13 C.F.R.
                § 125.6 govern these limits.
              </p>
            </div>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Contract Type</th>
                    <th className="text-left px-4 py-3 font-semibold">Max to Non-Similarly-Situated Subs</th>
                    <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">What This Means</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Service contracts",
                      max: "50% of personnel costs",
                      meaning: "Prime must perform at least half the labor with its own employees",
                    },
                    {
                      type: "Supply contracts (non-manufacturer)",
                      max: "50% of contract value",
                      meaning: "Prime must add at least half the value",
                    },
                    {
                      type: "General construction",
                      max: "85% of contract value",
                      meaning: "Prime must self-perform at least 15%",
                    },
                    {
                      type: "Special trade construction",
                      max: "75% of contract value (excl. materials)",
                      meaning: "Prime must self-perform at least 25%",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-900 border-b border-stone-100">{row.type}</td>
                      <td className="px-4 py-3 text-red-700 font-semibold border-b border-stone-100">{row.max}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                The critical nuance: amounts paid to subcontractors who are <em>similarly
                situated</em> — meaning they share the same small business set-aside status
                as the prime — do <em>not</em> count against these limits, provided the
                subcontractor performs the work with its own employees. This is the rule
                that makes small business teaming arrangements powerful. If your sub is
                also an SDVOSB (for an SDVOSB set-aside), or also 8(a) (for an 8(a)
                set-aside), their work share doesn&apos;t count against your cap.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Design your teams accordingly. If you need a large business partner for
                their past performance or equipment, structure the work so you keep the
                performing majority. If you need more capacity than your firm can provide
                alone, look for small business partners who share your set-aside status.
              </p>
            </div>

            <Callout icon={Lightbulb} color="sky" title="Practical Implication">
              On a $5 million SDVOSB service contract, you cannot pay more than $2.5 million
              in personnel costs to large business subcontractors. But if you subcontract to
              a fellow SDVOSB who performs the work with their own staff, that portion doesn&apos;t
              count. This is why building a network of certified small business partners is a
              genuine competitive advantage.
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Know Which Contracts You&apos;re Eligible For Before You Team</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Before approaching teaming partners, verify your certifications and
                  set-aside eligibility. CapturePilot&apos;s Quick Checker confirms your status
                  in minutes — so you know exactly which opportunities to pursue.
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

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="ostensible-subcontractor"
              number="05"
              title="The Ostensible Subcontractor Rule"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                This is the rule that trips up the most teams. Under 13 C.F.R. § 121.103(h)(4),
                the SBA can find that a small business prime and its subcontractor are
                <strong> affiliated</strong> — meaning their employees and revenues are
                combined for size determination — if the subcontractor is considered an
                "ostensible subcontractor."
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                An ostensible subcontractor is one that either performs the <em>primary and
                vital requirements</em> of the contract, or one that the prime is
                <em> unusually reliant upon</em>. When affiliation is found, the prime and
                sub are treated as a single entity for size purposes. If the combined entity
                exceeds the size standard, the prime loses its small business status — and
                potentially the contract.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 my-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-900">Factors OHA Examines in Ostensible Subcontractor Cases</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Who performs the work in the SOW that is most technically significant",
                  "Whether the subcontractor contributes key personnel to the prime contract",
                  "Whether the prime has relevant past performance or the sub does",
                  "Whether the prime helped prepare the proposal or the sub did",
                  "The percentage of work the subcontractor performs",
                  "Long-standing or exclusive relationships between the firms",
                  "Whether the sub holds critical licenses or certifications needed for performance",
                  "Whether the prime has management control or the sub runs day-to-day operations",
                ].map((factor) => (
                  <div key={factor} className="flex items-start gap-2 text-sm text-red-900">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                The SBA applies a totality-of-the-circumstances test — no single factor
                automatically triggers a finding. But in a 2025 OHA case (Size Appeal of
                Veteran Elevated Solutions, LLC, SBA No. SIZ-6350), the board found affiliation
                where the large business subcontractor was effectively performing the primary
                and vital contract requirements while the small business prime lacked the
                relevant experience.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The defense: demonstrate compliance with the limitation on subcontracting rules.
                In SIZ-6352 (2025), OHA ruled for the small business prime precisely because
                the firm showed it was performing the required percentage of work itself. The
                paper trail matters — document your performance before, during, and after award.
              </p>
            </div>

            <Callout icon={Shield} color="emerald" title="How to Protect Your Team">
              The prime must genuinely perform the primary and vital work. Staff the most
              important contract roles with your own employees. Have your own past performance
              that is relevant to the solicitation. Write your own technical approach —
              don&apos;t let the sub&apos;s team write the proposal and then call yourself
              the prime. And if a large business partner has the experience you&apos;re relying
              on, a joint venture structure (rather than a prime-sub team) may be safer.
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="mentor-protege"
              number="06"
              title="The Mentor-Protégé Path to Bigger Work"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                The SBA&apos;s Mentor-Protégé Program (MPP) is the most powerful teaming
                structure available to small businesses — and the most underused. It lets a
                small business (the protégé) partner with a larger, experienced firm (the mentor)
                through a formal agreement that includes technical, management, and financial
                assistance. The protégé can then form a joint venture with the mentor that
                competes as a small business.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                More than 90% of mentor-protégé participants choose the SBA&apos;s program
                over the six agency-specific programs. The numbers show why: joint ventures
                under the MPP have grown to more than 3 times the small-business contract
                dollars they received a decade ago, with an overall market share growth of 75%.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-emerald-900">What the Protégé Gets</h3>
                </div>
                <ul className="space-y-2 text-sm text-emerald-900">
                  {[
                    "Technical and management assistance from a large, experienced contractor",
                    "Financial help (equity investment, loans, bonding assistance)",
                    "Access to the mentor's past performance on proposals",
                    "Ability to form a JV that competes as small on any set-aside",
                    "The JV can win set-asides at sizes the small firm couldn't pursue solo",
                    "Protection from affiliation rules when structured properly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">What the Mentor Gets</h3>
                </div>
                <ul className="space-y-2 text-sm text-blue-900">
                  {[
                    "Access to small business set-aside contracts via the JV",
                    "Credit toward subcontracting plan goals",
                    "First-mover position with a growing small business partner",
                    "The JV can receive up to 60% workshare (mentor) on the contract",
                    "SBA allows mentor to own up to 40% of the protégé",
                    "Strategic positioning in markets led by small business set-asides",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                One important 2025 update: a final SBA rule published in January 2025
                prohibits mentor-protégé joint ventures with large business mentors from
                receiving the 10% price evaluation preference for HUBZone businesses.
                If HUBZone status is your competitive edge, structure carefully.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The Mentor-Protégé program is not a quick-start solution. Applying for and
                executing an MPP agreement takes months. But for small businesses with a
                5-year federal contracting horizon, it&apos;s one of the highest-leverage
                moves available. The protégé gets institutional knowledge, BD support, and
                access to contracts that would otherwise be out of reach.
              </p>
            </div>

            <Callout icon={Lightbulb} color="blue" title="SBA Mentor-Protégé Program">
              Applications are submitted at certify.sba.gov. The SBA approves agreements
              individually — not all applicants are accepted. The mentor must be a large
              business with a demonstrated ability to assist the protégé, and the protégé
              must be a certified small business. Active agreements are posted publicly
              on the SBA&apos;s website so you can research which companies are already partnered.
            </Callout>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="finding-partners"
              number="07"
              title="Finding the Right Teaming Partner"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                The right teaming partner isn&apos;t just the first company that calls you.
                Bad team chemistry — or worse, a partner who dominates your proposal and
                triggers an ostensible subcontractor finding — will cost you more than going
                solo. Here&apos;s where to find and vet potential partners.
              </p>
            </div>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: FileText,
                  title: "SAM.gov Dynamic Small Business Search (DSBS)",
                  desc: "The SBA's database of small businesses registered in SAM. Filter by NAICS code, certifications, and location. Look for firms with complementary capabilities and active SAM registrations. This is the official starting point for small business teaming searches.",
                },
                {
                  icon: Users,
                  title: "Small Business Administration's SUB-Net",
                  desc: "Primes with large contracts post subcontracting opportunities here. If you're looking to be a sub on a large prime's team, this is where those opportunities are listed. It's also where large primes look for qualified small business subs.",
                },
                {
                  icon: BarChart3,
                  title: "USASpending.gov award analysis",
                  desc: "Research who has won contracts in your target NAICS codes, at which agencies, and in which dollar ranges. Companies that consistently win in your space are potential prime partners for large bids, or sub opportunities if you want a more established prime.",
                },
                {
                  icon: Building,
                  title: "Industry associations and conferences",
                  desc: "NCMA (National Contract Management Association), NDIA, AFCEA, and agency-specific small business events are where teaming relationships actually form. GSA Expo, agency procurement conferences, and SBDC matchmaking events put you in the room with potential partners.",
                },
                {
                  icon: Star,
                  title: "Active mentor-protégé agreements list",
                  desc: "The SBA publishes active MPP agreements. If a large company you want to partner with already has an active protégé, they can't take another in the same socioeconomic category — but their network may include other primes looking for partners.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-2xl border border-stone-200 hover-lift">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-sm text-stone-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                Vetting matters as much as finding. Before signing a teaming agreement, verify
                your potential partner&apos;s SAM.gov registration is active, their certifications
                are current, and their past performance references are real and accessible. Check
                their USASpending.gov history for contract awards and FPDS data. Ask for their
                capability statement and verify the claims.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Also check for open legal matters — GAO protests where they were named,
                debarment or suspension actions, and active litigation. A partner in the middle
                of a protest or debarment proceeding can drag your proposal down.
              </p>
            </div>

            <Callout icon={Target} color="sky" title="CapturePilot Matching">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-sky-700 underline hover:text-sky-900">
                opportunity matching engine
              </Link>{" "}
              surfaces contracts that align with your NAICS codes and certifications. When you
              identify a target opportunity that needs complementary capabilities, you know
              exactly what kind of partner to find — before you start cold-calling strangers.{" "}
              <Link href="/features/pipeline" className="text-sky-700 underline hover:text-sky-900">
                Track teaming deals in your pipeline
              </Link>{" "}
              alongside your solo pursuits.
            </Callout>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="common-mistakes"
              number="08"
              title="Mistakes That Kill Teaming Deals"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                The most expensive teaming mistakes aren&apos;t technical — they&apos;re
                structural and relational. Here&apos;s what experienced contractors have
                learned the hard way.
              </p>
            </div>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "Signing too many teaming agreements, then performing none",
                  desc: "Some firms treat teaming agreements as marketing collateral — signing with everyone who asks, committing to nothing. When your name appears on a proposal as a named subcontractor, the prime expects you to deliver. Reputation damage from flaking is real and spreads fast in agency communities.",
                },
                {
                  title: "Letting the sub run the proposal",
                  desc: "If your sub has better past performance and writes the technical volume, you've just handed OHA the evidence for an ostensible subcontractor finding. The prime must own proposal development. You can incorporate the sub's input, but the prime's name and voice should lead every section.",
                },
                {
                  title: "Vague work share in the teaming agreement",
                  desc: "Courts have repeatedly struck down teaming agreements with language like 'significant work share' or 'appropriate subcontract.' Specify percentages. Courts won't enforce vague agreements to agree — your partner can walk after award and you have no legal recourse.",
                },
                {
                  title: "Ignoring set-aside status verification",
                  desc: "If you're competing on a set-aside, every team member whose work-share you're counting on must be verified. An 8(a) whose certification expired, a WOSB that failed recertification, or an SDVOSB without valid VetCert — these can invalidate your proposal. Verify before you sign, and re-verify before submission.",
                },
                {
                  title: "No exclusivity clause for competitive pursuits",
                  desc: "Without exclusivity, your teaming partner can simultaneously team with your competitor on the same solicitation. If they win with the other team, you lose both a partner and the pursuit. For competitive opportunities, exclusivity is non-negotiable.",
                },
                {
                  title: "Teaming to fill capability gaps without a plan to close them",
                  desc: "Teaming to fill a gap is fine for your first contract. But if you never develop that capability internally, you're permanently dependent on that subcontractor — which means permanently risking an ostensible subcontractor finding on future bids. Build a plan to internalize the skills the sub is providing.",
                },
              ].map(({ title, desc }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-red-50 rounded-2xl border border-red-100"
                >
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-red-900 mb-1">{title}</p>
                    <p className="text-sm text-red-800">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-blue-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Build Your Proposal With Purpose
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/proposals" className="text-blue-700 underline hover:text-blue-900">
                    proposal tools
                  </Link>{" "}
                  help you track compliance requirements, manage team contributions, and
                  build a winning technical volume — whether you&apos;re flying solo or
                  leading a multi-firm team.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-800 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading
              id="strategy"
              number="09"
              title="Building a Teaming Strategy That Actually Wins"
            />
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                Most small businesses treat teaming reactively — someone calls them about a
                specific opportunity, they sign a teaming agreement, and they hope for the best.
                Companies that consistently win large contracts treat teaming as a strategic
                activity, not an afterthought.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 text-lg">Build Your Partner Network Before You Need It</h3>
                <p className="text-stone-600 text-sm">
                  Identify 3–5 firms with complementary capabilities in your target NAICS codes.
                  Meet them at industry events. Exchange capability statements. Understand their
                  agency relationships. When an opportunity emerges, you can move in days instead
                  of weeks.
                </p>
                <p className="text-stone-600 text-sm">
                  Target partners who are strong where you&apos;re weak — but not so dominant
                  that they outshine you on the primary requirement. The goal is a team where
                  you genuinely lead the work and the partner genuinely fills a specific gap.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 text-lg">Know Which Seat You Want</h3>
                <p className="text-stone-600 text-sm">
                  Prime or sub — your answer should vary by opportunity. On contracts where you
                  have relevant past performance and can perform the majority of work, fight for
                  the prime seat. On contracts where you&apos;re building experience or access,
                  subcontracting is a legitimate path to past performance.
                </p>
                <p className="text-stone-600 text-sm">
                  Use CapturePilot&apos;s{" "}
                  <Link href="/features/intelligence" className="text-blue-700 underline hover:text-blue-900">
                    market intelligence tools
                  </Link>{" "}
                  to research incumbents, identify companies already winning in your space, and
                  decide whether prime or sub is the better approach for each pursuit.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-blue-900 mb-4">Teaming Strategy Checklist</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Identify your top 3 capability gaps before targeting large contracts",
                  "Map potential partners by NAICS code and set-aside status",
                  "Verify SAM.gov registration and certification status before engaging",
                  "Define which seat (prime or sub) you're pursuing for each opportunity",
                  "Negotiate work share percentages before signing, not after",
                  "Include an exclusivity clause for competitive procurements",
                  "Include a subcontract negotiation obligation with a deadline",
                  "Confirm similarly-situated status to maximize subcontracting flexibility",
                  "Document who performs primary and vital work in the proposal",
                  "Review the ostensible subcontractor rule with counsel for large set-asides",
                  "Consider Mentor-Protégé for long-term growth beyond single bids",
                  "Track teaming commitments in your pipeline tool to avoid overcommitting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-blue-900">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                Teaming agreements are a means to an end: winning contracts that make your
                business grow. The legal structure, the compliance rules, the ostensible
                subcontractor risk — all of it exists in service of a simple goal. Find the
                right partner for the right opportunity. Be clear about who does what. Perform
                what you said you would. Build the past performance that makes your next bid
                stronger.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The contractors who use teaming strategically — not just opportunistically —
                are the ones who graduate from chasing small set-asides to leading large
                programs. Use the{" "}
                <Link href="/features/pipeline" className="text-blue-700 underline hover:text-blue-900">
                  CapturePilot pipeline
                </Link>{" "}
                to manage both your solo and teamed pursuits in one place, and the{" "}
                <Link href="/features/matching" className="text-blue-700 underline hover:text-blue-900">
                  matching engine
                </Link>{" "}
                to surface opportunities worth building a team around.
              </p>
            </div>
          </div>

          {/* Related Content */}
          <div className="animate-on-scroll my-12 border-t border-stone-200 pt-12">
            <h3 className="font-black text-stone-900 text-xl mb-6">Related Reading</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/sources-sought-notice",
                  label: "Sources Sought Notices",
                  desc: "Get in early and shape the RFP before competitors know it exists",
                },
                {
                  href: "/blog/government-contract-win-rate",
                  label: "Win Rates: What's Realistic",
                  desc: "Understand what win rates to expect and how to improve yours",
                },
                {
                  href: "/blog/capture-management-process",
                  label: "The Capture Management Process",
                  desc: "How winning contractors find, qualify, and pursue deals",
                },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group block p-5 bg-stone-50 rounded-2xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 mb-1 transition-colors text-sm">
                    {label}
                  </p>
                  <p className="text-xs text-stone-500 group-hover:text-blue-600 transition-colors">
                    {desc}
                  </p>
                  <ArrowRight className="w-4 h-4 text-blue-400 mt-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3">
                Stop Chasing Contracts Solo
              </h3>
              <p className="text-stone-300 text-sm mb-6">
                CapturePilot helps you identify the right opportunities, understand your
                set-aside eligibility, and manage every pursuit — teamed or solo — from
                discovery to award. Book a strategy call and see how contractors like yours
                are scaling their federal revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/20 transition-colors border border-white/20"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
