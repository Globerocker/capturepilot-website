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
  Star,
  Search,
  ClipboardList,
  XCircle,
  Info,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-it-exists", label: "Why the Mentor-Protégé Program Exists" },
  { id: "sba-vs-dod", label: "SBA MPP vs. DoD Mentor-Protégé: Two Different Programs" },
  { id: "protege-eligibility", label: "Who Qualifies as a Protégé" },
  { id: "finding-a-mentor", label: "How to Find the Right Mentor" },
  { id: "the-agreement", label: "The Mentor-Protégé Agreement: What Goes In It" },
  { id: "joint-ventures", label: "Joint Ventures: The Real Power of the Program" },
  { id: "application-process", label: "The Application Process, Step by Step" },
  { id: "common-mistakes", label: "Mistakes That Get Applications Rejected" },
  { id: "after-approval", label: "What Happens After Approval" },
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

export default function MentorProtegeProgramPage() {
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
            <span className="text-stone-900 font-medium">SBA Mentor-Protégé Program</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Users className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SBA Mentor-Protégé Program:{" "}
            <span className="gradient-text">
              How to Find a Partner and Win Bigger Contracts
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The SBA&apos;s Mentor-Protégé Program lets a small business form a joint venture with a
            larger company and compete for set-aside contracts both parties couldn&apos;t win alone.
            It&apos;s one of the most underused growth levers in federal contracting — and one of
            the most powerful when you use it right.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 29, 2026</span>
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
            <SectionHeading id="why-it-exists" number="01" title="Why the Mentor-Protégé Program Exists" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Federal contracting has a size problem. The government wants to give 23% of prime
              contract dollars to small businesses. But the contracts themselves keep getting
              larger, more complex, and more technically demanding. A small company that can handle
              a $200,000 task order might not have the bonding capacity, the past performance record,
              or the workforce to pursue a $10 million IDIQ.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The Mentor-Protégé Program was designed to close that gap. Established by Congress
              and administered by the SBA, it pairs a small business (the protégé) with a more
              experienced company (the mentor) for a structured development relationship. The mentor
              provides real assistance — technical training, financial support, business development
              help, and access to contracts. In return, both parties can form a{" "}
              <strong>joint venture</strong> and compete as a team for small business set-asides.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That last part is the program&apos;s biggest draw. A mentor-protégé joint venture is
              treated as a small business for federal contracting purposes — even if the mentor is a
              large company. That means you can pursue contracts you couldn&apos;t approach on your
              own, with a partner who brings the past performance and capacity to actually win.
            </p>

            <Callout icon={Award} color="blue" title="November 2020: Two programs became one">
              The SBA originally ran two separate programs: the 8(a) Mentor-Protégé Program (for
              8(a)-certified firms) and the All Small Mentor-Protégé Program (for all other small
              businesses). In November 2020, the SBA merged them into the single SBA Mentor-Protégé
              Program (MPP), which now covers all small businesses regardless of certification type.
              If you had an agreement under one of the old programs, the rules under the merged MPP
              now apply.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The program isn&apos;t a shortcut. It requires a genuine developmental relationship,
              a formal agreement, and SBA approval. But when it&apos;s used seriously, it lets
              small businesses compete for work they otherwise couldn&apos;t touch — and build the
              capabilities to eventually win that work alone.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="sba-vs-dod" number="02" title="SBA MPP vs. DoD Mentor-Protégé: Two Different Programs" />

            <p className="text-stone-700 leading-relaxed mb-4">
              There are actually two different mentor-protégé programs you might encounter: the SBA&apos;s
              and the Department of Defense&apos;s. They&apos;re separate, run by different agencies,
              and serve different purposes. Confusing the two is a common mistake.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 font-semibold rounded-tl-xl">Feature</th>
                    <th className="text-left p-4 font-semibold">SBA Mentor-Protégé Program</th>
                    <th className="text-left p-4 font-semibold rounded-tr-xl">DoD Mentor-Protégé Program</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Who administers it", sba: "U.S. Small Business Administration", dod: "DoD Office of Small Business Programs" },
                    { feature: "Who can be protégé", sba: "Any SBA-defined small business", dod: "Small disadvantaged businesses (SDB) and others" },
                    { feature: "Joint venture allowed", sba: "Yes — compete for set-asides together", dod: "Not the primary focus" },
                    { feature: "Mentor reimbursement", sba: "No direct reimbursement to mentor", dod: "Mentor can be reimbursed for developmental costs" },
                    { feature: "Application site", sba: "certify.sba.gov", dod: "business.defense.gov/MPP" },
                    { feature: "Max duration", sba: "3 years (renewable)", dod: "3 years (renewable)" },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-900 border-b border-stone-100">{row.feature}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.sba}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.dod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For most small businesses reading this, the SBA MPP is the more relevant program.
              It&apos;s broader in eligibility, and the joint venture benefit is where the real
              contracting leverage sits. The DoD program makes more sense if you&apos;re targeting
              defense work specifically and want a large prime to fund your technical development
              directly.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              You can participate in both simultaneously. A DoD contractor might seek reimbursement
              from DoD for developmental assistance while also holding an SBA MPP agreement that
              enables joint venture set-aside bids. They&apos;re not mutually exclusive.
            </p>

            <Callout icon={Info} color="sky" title="DoD reimbursement deadline: September 30, 2026">
              If your mentor-protégé agreement with DoD was entered before December 23, 2022, the
              mentor must incur reimbursable developmental assistance costs no later than September 30, 2026
              to remain eligible for reimbursement. If you&apos;re in a DoD agreement from that era,
              don&apos;t let that deadline slip by.
            </Callout>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="protege-eligibility" number="03" title="Who Qualifies as a Protégé" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Protégé eligibility is straightforward on the surface. You must be:
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4">SBA MPP protégé requirements</h3>
              <div className="space-y-3">
                {[
                  { check: true, item: "A small business under SBA size standards for your NAICS code" },
                  { check: true, item: "Organized for profit (or an agricultural cooperative)" },
                  { check: true, item: "Registered and active in SAM.gov" },
                  { check: true, item: "Have identified a prospective mentor before applying" },
                  { check: false, item: "Already affiliated with your prospective mentor at time of application" },
                  { check: false, item: "A large business — size is measured at the protégé level" },
                ].map((row) => (
                  <div key={row.item} className="flex items-start gap-3">
                    {row.check ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm text-stone-700">{row.item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-4">Green = required. Red = disqualifying.</p>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              That last point matters. Affiliation is the tripwire that kills many agreements before
              they start. Under SBA rules, two companies are affiliated if one controls or has the
              power to control the other — or if they share common ownership, management, or
              contractual ties that suggest effective control. You can&apos;t already be your
              mentor&apos;s affiliate and then apply for an MPP agreement.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A protégé can have only <strong>one SBA mentor at a time</strong>. You can change
              mentors after a relationship ends, but you can&apos;t maintain parallel SBA agreements
              with multiple mentors simultaneously.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Critically, the SBA evaluates whether the agreement will produce{" "}
              <strong>real developmental gains</strong> for your company — not just serve as a
              vehicle to route set-aside contracts to a large business. If the agreement looks like
              a pass-through rather than a genuine mentorship, SBA will reject it. This is the
              program&apos;s core anti-abuse protection, and SBA takes it seriously.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="Size check: use the SBA Size Standards Tool">
              Your size is determined by your primary NAICS code. A company with 120 employees might
              be small under one NAICS and not-small under another. Before applying, run your NAICS
              code through the SBA Size Standards Tool at{" "}
              <span className="font-medium">size.sba.gov</span> to confirm you qualify. If you&apos;re
              borderline, an SBA size determination might be worth requesting before you invest time
              in the application.
            </Callout>
          </div>

          {/* ── Mid-article CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Check your set-aside eligibility first</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Before you approach a mentor, know exactly which certifications and set-asides you
                  qualify for. CapturePilot&apos;s{" "}
                  <Link href="/features/quick-checker" className="underline text-white hover:text-blue-200">
                    Quick Checker
                  </Link>{" "}
                  maps your business profile to SDVOSB, 8(a), HUBZone, WOSB, and more — so you walk
                  into mentor conversations knowing your cards.
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
            <SectionHeading id="finding-a-mentor" number="04" title="How to Find the Right Mentor" />

            <p className="text-stone-700 leading-relaxed mb-4">
              SBA doesn&apos;t maintain a public registry of mentors actively seeking protégés.
              That means finding a mentor requires real outreach — the same relationship-building
              skills that win contracts are the ones that land a good mentor.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A mentor must be able to provide genuine developmental assistance based on practical
              experience and knowledge of government contracting. They don&apos;t have to be a large
              business — the program no longer requires it. But in practice, most effective mentors
              are established prime contractors with agency relationships, past performance, and
              capacity that complement what you&apos;re trying to build.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">Where to find prospective mentors</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Search,
                    label: "USASpending.gov prime contractors",
                    desc: "Find large prime contractors in your NAICS code who are winning work at agencies you want to enter. They&apos;re natural mentors because they need teaming partners for their existing work.",
                  },
                  {
                    icon: Building2,
                    label: "Industry days and agency events",
                    desc: "Pre-solicitation events are where prime contractors scope the market for teaming. Showing up with a polished capability statement and a clear ask opens conversations.",
                  },
                  {
                    icon: Users,
                    label: "Small business teaming databases",
                    desc: "GSA&apos;s eBuy, agency small business offices, and platforms like GovWin have teaming marketplaces. Post your profile and actively search for compatible primes.",
                  },
                  {
                    icon: Award,
                    label: "PTAC and SBA resource partners",
                    desc: "Procurement Technical Assistance Centers and SBA District Offices often facilitate introductions between small businesses and established contractors. It&apos;s a free service most contractors underuse.",
                  },
                  {
                    icon: TrendingUp,
                    label: "Active MPP agreements on SBA&apos;s list",
                    desc: "SBA publishes the list of active mentor-protégé agreements. Companies already serving as mentors have shown they&apos;re willing to participate — they&apos;re warm targets.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{item.label}</p>
                      <p className="text-sm text-stone-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The best mentors aren&apos;t the most famous companies — they&apos;re the ones that
              work in your specific agencies, understand your NAICS codes, and have the time and
              interest to invest in your development. A mid-sized contractor winning $50M/year in
              your target agency will teach you more and open more doors than a Fortune 500 company
              that views you as a compliance checkbox.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              When you approach a prospective mentor, be specific. Know which contracts you want to
              pursue together, which of your certifications they can leverage, and what you offer
              them — past performance in a particular domain, a geographic presence, or a technical
              capability they&apos;re missing. Vague asks get vague responses.
            </p>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="the-agreement" number="05" title="The Mentor-Protégé Agreement: What Goes In It" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The mentor-protégé agreement is the legal foundation of the relationship and a
              major part of your SBA application. SBA provides a template through certify.sba.gov,
              and you need to follow it — but filling it out well requires more than copying from
              the template.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The agreement must include a <strong>developmental assistance plan</strong> that
              describes exactly what the mentor will do for the protégé during the relationship.
              SBA reviews this closely. A generic plan that says &quot;mentor will provide general
              business advice&quot; won&apos;t pass. The plan should be specific, measurable, and
              tied to real gaps in your company&apos;s capabilities.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: ClipboardList,
                  title: "Technical assistance",
                  desc: "Training your staff on specific technical disciplines, certifications, or processes the mentor already excels at.",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                },
                {
                  icon: DollarSign,
                  title: "Financial assistance",
                  desc: "Loans, equity investments, or advance payment arrangements to help the protégé handle larger contract demands.",
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                },
                {
                  icon: FileText,
                  title: "Business development",
                  desc: "Help with proposal writing, BD strategy, market intelligence, or introductions to contracting officers.",
                  color: "bg-violet-50 border-violet-200",
                  iconColor: "text-violet-600",
                },
                {
                  icon: Building2,
                  title: "Administrative and management",
                  desc: "Accounting systems, HR practices, DCAA-compliant accounting, and general operational infrastructure.",
                  color: "bg-amber-50 border-amber-200",
                  iconColor: "text-amber-600",
                },
              ].map((card) => (
                <div key={card.title} className={`rounded-xl border p-5 ${card.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                    <h4 className="font-bold text-sm text-stone-900">{card.title}</h4>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The agreement term is up to <strong>three years</strong>, and it can be renewed.
              Annual reviews are required — both parties must report on progress against the
              developmental plan, and SBA can terminate an agreement that isn&apos;t producing
              real results.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="The affiliation waiver lives in the agreement">
              When your mentor-protégé agreement is approved, SBA grants a specific waiver that
              exempts the relationship from affiliation rules. Without this waiver, your company
              and your mentor would be considered affiliated for size purposes — which could disqualify
              both of you from small business set-asides. The agreement must be signed and approved
              before you form a joint venture or it won&apos;t protect you.
            </Callout>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="joint-ventures" number="06" title="Joint Ventures: The Real Power of the Program" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The mentor-protégé agreement unlocks joint venture eligibility. That&apos;s the
              headline benefit — and it&apos;s significant enough that many companies enter the
              program specifically for joint venture access.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A mentor-protégé JV can compete as a small business for any contract for which the
              protégé individually qualifies as small. It can also pursue set-aside contracts for
              every certification the protégé holds — 8(a), SDVOSB, WOSB, HUBZone, and SDB.
              The mentor&apos;s size status is waived for the joint venture, even if the mentor
              is a large business.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-6 my-8">
              <h3 className="font-bold text-white mb-4 text-lg">Joint venture rules you must follow</h3>
              <div className="space-y-3">
                {[
                  { rule: "Mentor can own a maximum of 40% of the joint venture" },
                  { rule: "Protégé must receive at least 51% of the JV's profits" },
                  { rule: "Protégé must control the JV and its management decisions" },
                  { rule: "Protégé must perform at least 40% of the work done by the JV" },
                  { rule: "No more than 50% of subcontract payments can go to non-similarly-situated firms (services/supplies) — 85% for construction" },
                  { rule: "The JV can receive a maximum of 3 contract awards during the relationship (not counting options or task orders on IDIQs)" },
                  { rule: "After 3 awards, the JV must dissolve or recompete as a non-small business" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-300">{item.rule}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              That 3-award limit on the JV matters strategically. You and your mentor need to
              be intentional about which contracts the JV pursues. Don&apos;t spend all three
              slots on small task orders when you could use them on large IDIQ contracts where
              individual task orders don&apos;t count against the limit.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A real example of what this looks like in practice: Aptive Resources, a protégé,
              formed a joint venture (Aptive HTG) with its mentor ERPi. The JV won slots on the
              VA&apos;s Integrated Healthcare Transformation IDIQ and the T4NG IDIQ — two of the
              most valuable IT contract vehicles in the federal market. That&apos;s the trajectory
              a well-structured mentor-protégé relationship can create.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              In the GSA OASIS+ awards — one of the federal government&apos;s largest professional
              services vehicles — 180 of the 1,383 awardees in the Total Small Business Pool were
              mentor-protégé joint ventures. That&apos;s 13% of awards going to companies that
              used this program specifically to compete for a contract they might not have won alone.
            </p>

            <Callout icon={Info} color="sky" title="January 2025 rule change: HUBZone preference for large-mentor JVs">
              A January 2025 SBA final rule removed the 10% HUBZone price evaluation preference
              for joint ventures where the mentor is a large business. If your mentor is large and
              you hold a HUBZone certification, your JV will still be treated as small — but it
              won&apos;t get the price preference that a HUBZone-only small business would receive.
              Factor this into your competitive analysis when pursuing HUBZone set-asides as a JV.
            </Callout>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="application-process" number="07" title="The Application Process, Step by Step" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Applications go through certify.sba.gov using the protégé&apos;s Unique Entity
              Identifier (UEI). Here&apos;s the timeline and steps you need to follow.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Verify your SAM.gov registration",
                  desc: "Both the protégé and mentor must have active SAM.gov registrations before the application can be processed. If your registration is expired, fix that first — the process typically takes 5–10 business days to update.",
                  time: "Before you start",
                },
                {
                  step: "02",
                  title: "Identify and vet your mentor",
                  desc: "You must have a specific mentor identified before applying. Vet them carefully — their experience, their government contracting record, and their genuine capacity to help you. SBA will ask what the mentor has to offer.",
                  time: "Before you start",
                },
                {
                  step: "03",
                  title: "Draft the mentor-protégé agreement",
                  desc: "Use the SBA&apos;s template at certify.sba.gov and customize the developmental assistance plan with specific, measurable goals tied to your actual business gaps. Get a GovCon attorney to review it before you submit.",
                  time: "2–4 weeks",
                },
                {
                  step: "04",
                  title: "Submit through certify.sba.gov",
                  desc: "Submit the completed application using the protégé&apos;s UEI. Include the signed mentor-protégé agreement, both parties&apos; documentation, and any supporting materials for the developmental plan.",
                  time: "1 day",
                },
                {
                  step: "05",
                  title: "SBA screening (15 days)",
                  desc: "SBA reviews the application for completeness. Incomplete applications get kicked back — common issues include missing signatures, vague developmental plans, or documentation gaps.",
                  time: "Up to 15 days",
                },
                {
                  step: "06",
                  title: "SBA processing (up to 90 days)",
                  desc: "SBA reviews the substance of the agreement, evaluates the developmental plan, checks affiliation, and issues its determination. If your application clears screening, expect approval or a request for additional information within this window.",
                  time: "Up to 90 days",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 bg-stone-50 border border-stone-200 rounded-xl p-5">
                  <div className="shrink-0">
                    <span className="text-3xl font-black text-blue-200">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-bold text-stone-900">{item.title}</p>
                      <span className="text-xs text-stone-400 shrink-0 mt-0.5 bg-stone-200 px-2 py-0.5 rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Total realistic timeline: <strong>3 to 6 months</strong> from first conversation with
              a mentor to approved agreement. The SBA processing window alone can take up to
              105 days. Don&apos;t start this process expecting to be bidding on joint venture
              contracts within 30 days.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Start the process when you have a specific contract vehicle or solicitation in mind
              that you want to pursue as a JV. That focus sharpens your developmental plan,
              strengthens the application, and gives you and your mentor alignment on where the
              relationship is going.
            </p>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-mistakes" number="08" title="Mistakes That Get Applications Rejected" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Most rejections trace back to the same handful of problems. Avoid these and your
              application will have a clean path to approval.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  color: "border-red-400 bg-red-50",
                  iconColor: "text-red-500",
                  title: "A vague developmental assistance plan",
                  desc: "\"Mentor will provide general business guidance\" will get your application rejected. The plan must specify what training, financial assistance, or capability development will occur, who delivers it, and how progress will be measured.",
                },
                {
                  color: "border-red-400 bg-red-50",
                  iconColor: "text-red-500",
                  title: "Existing affiliation with the proposed mentor",
                  desc: "If you share ownership, common management, or existing subcontracts that suggest effective control, SBA will find affiliation and reject the application. Clean up any relationships before you apply.",
                },
                {
                  color: "border-red-400 bg-red-50",
                  iconColor: "text-red-500",
                  title: "No identified business gaps",
                  desc: "SBA wants to see that the protégé has specific weaknesses the mentor can address. If you can&apos;t articulate what you&apos;re trying to learn or build, the application reads as a contracting convenience, not a genuine mentorship.",
                },
                {
                  color: "border-amber-400 bg-amber-50",
                  iconColor: "text-amber-500",
                  title: "Incomplete SAM.gov registrations",
                  desc: "Both parties must be active in SAM.gov. An expired registration for either party stalls the application immediately. Check both before you submit.",
                },
                {
                  color: "border-amber-400 bg-amber-50",
                  iconColor: "text-amber-500",
                  title: "Protégé exceeds size standards",
                  desc: "SBA confirms protégé size at application. A company that has grown past the size threshold for its NAICS code is ineligible. Run a fresh size check — not the one you did when you first registered.",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border-l-4 p-5 ${item.color}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className={`w-4 h-4 ${item.iconColor}`} />
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              SBA also publishes an application tip sheet. Read it. The agency is explicit about
              what it wants to see, and most applicants don&apos;t read the instructions closely
              enough. A GovCon attorney who has submitted MPP applications before is worth the
              cost — they&apos;ll catch problems that would otherwise cost you months.
            </p>
          </div>

          {/* ── Section 9 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="after-approval" number="09" title="What Happens After Approval" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Approval isn&apos;t the finish line. It&apos;s the starting pistol.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Once your agreement is approved, you&apos;ll need to complete <strong>annual
              reviews</strong> with the SBA. Both parties report on progress against the
              developmental plan. SBA evaluates whether real development is happening — and can
              terminate agreements where the mentor isn&apos;t delivering on its commitments or
              the protégé isn&apos;t making measurable progress.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">Your post-approval checklist</h3>
              <div className="space-y-3">
                {[
                  "Form the joint venture entity (separate LLC or partnership) with proper operating agreement",
                  "Register the JV separately in SAM.gov using its own UEI",
                  "Apply relevant certifications to the JV where needed (some certs must be applied for separately)",
                  "Build and maintain a JV-specific capability statement linking both partners",
                  "Begin identifying set-aside solicitations where the JV can compete",
                  "Implement the developmental plan — document training, mentoring sessions, and deliverables",
                  "Prepare for your first annual review by keeping records of what assistance was provided",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The joint venture is a separate legal entity. It needs its own SAM.gov registration,
              its own UEI, and in many cases its own certifications. Some set-asides require the
              JV itself to be certified — not just the protégé. Work through those requirements
              before you start bidding.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Use the relationship aggressively. The best protégés treat their mentors as genuine
              business partners — asking questions, attending every opportunity the mentor brings,
              requesting introductions to agency contacts, and building internal capabilities that
              outlast the agreement. The goal is to reach the end of your three years having
              actually grown — with the past performance, systems, and agency relationships to
              compete without the JV.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That&apos;s the long game. The Aptive example from earlier illustrates it: the
              protégé that came through the program well enough to then become a mentor itself,
              creating a new JV to help the next generation of small businesses. The program works
              when both parties take it seriously.
            </p>

            <Callout icon={Star} color="violet" title="Track your pipeline with the right tools">
              Once you&apos;re approved, you&apos;ll be tracking JV opportunities alongside your
              solo pursuits. CapturePilot&apos;s{" "}
              <Link href="/features/pipeline" className="underline font-medium text-violet-700 hover:text-violet-900">
                pipeline manager
              </Link>{" "}
              lets you tag opportunities by pursuit type, assign them to specific team members,
              and track stage progress from sources sought through award. Know which bids are
              solo, which are JV, and which are subcontracting — without rebuilding your tracker
              every time your team structure changes.
            </Callout>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll my-12">
            <div className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-black mb-3">
                  Know what you bring to the table before you approach a mentor.
                </h3>
                <p className="text-stone-300 mb-6 text-sm leading-relaxed">
                  The strongest mentor-protégé relationships start with a protégé who understands
                  their own certifications, NAICS codes, and contract vehicle eligibility. CapturePilot
                  maps that for you in minutes — so you walk into every mentorship conversation with
                  a clear picture of what value you bring to a joint venture.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors"
                  >
                    Check your eligibility free <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 border border-stone-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:border-stone-400 transition-colors"
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
                  href: "/blog/government-contract-teaming-agreement",
                  label: "Strategy",
                  title: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts",
                },
                {
                  href: "/blog/joint-venture-government-contracts",
                  label: "Strategy",
                  title: "Small Business Joint Ventures: How to Structure a Deal That Actually Wins",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  label: "Set-Asides",
                  title: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses",
                },
                {
                  href: "/blog/capture-management-process",
                  label: "Strategy",
                  title: "The Capture Management Process: How Winning Contractors Find and Win Deals",
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
