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
  Zap,
  DollarSign,
  FileText,
  Clock,
  XCircle,
  Info,
  Search,
  Scale,
  Lock,
  TrendingDown,
  AlertCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-debarment-means", label: "What Debarment Actually Means" },
  { id: "debarment-vs-suspension", label: "Debarment vs. Suspension: Two Different Threats" },
  { id: "common-causes", label: "The Most Common Causes of Debarment" },
  { id: "the-process", label: "How Debarment Proceeds: Timeline and Your Rights" },
  { id: "existing-contracts", label: "What Happens to Your Existing Contracts" },
  { id: "fighting-back", label: "How to Fight Back: Contesting Debarment" },
  { id: "prevention", label: "How to Stay Off the List: Building a Compliance Program" },
  { id: "self-disclosure", label: "Self-Disclosure: The Option Most Contractors Overlook" },
  { id: "the-road-back", label: "After Debarment: The Road Back" },
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

export default function GovernmentContractorDebarmentPage() {
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
            <span className="text-stone-900 font-medium">Government Contractor Debarment</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Advanced
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contractor Debarment:{" "}
            <span className="gradient-text">
              How to Avoid It and What to Do If It Happens
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Debarment is the federal government&apos;s nuclear option — it cuts a company off from
            all federal contracts, often for years. The False Claims Act alone produced over
            $6.8 billion in settlements in FY2025. Small businesses that don&apos;t understand
            the rules are the most exposed. Here is what you need to know.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 1, 2026</span>
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
            <SectionHeading id="what-debarment-means" number="01" title="What Debarment Actually Means" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Debarment is not a fine. It is not a warning. It is a determination by a federal
              agency that your company is ineligible to receive any new federal contracts or
              subcontracts — across every agency in the government — for the duration of the
              debarment period.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              When an agency debars a contractor, that contractor&apos;s name and Unique Entity
              Identifier (UEI) appear in the SAM.gov Exclusions database — the successor to the
              old Excluded Parties List System. Every contracting officer at every agency checks
              SAM.gov before awarding a contract. A debarred contractor will fail that check
              automatically. The contract goes elsewhere.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The standard debarment period under FAR Part 9.4 is{" "}
              <strong>generally not to exceed three years</strong>. That sounds limited. But for a
              company that built its entire revenue around federal contracting, three years without
              new awards can be a company-ending event — especially when existing contracts may also
              be terminated. Extensions are possible. And debarment for certain Drug-Free Workplace
              violations can stretch to five years.
            </p>

            <Callout icon={AlertCircle} color="red" title="Debarment is government-wide — not agency-specific">
              A single agency&apos;s debarment decision bars you from every federal agency. If GSA
              debars you, you cannot win work with the Army, VA, DHS, or any other federal entity.
              There is no such thing as a partial debarment limited to one agency under standard
              FAR procedures. The exclusion covers all executive branch procurement.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              Debarment also cascades to related parties. Affiliates, subsidiaries, and in some
              cases individual principals — officers, directors, key employees — can be debarred
              alongside the company itself. The government looks through corporate structures. A
              new LLC formed after debarment is not a clean slate if the same principals control it.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The legal authority sits in FAR Subpart 9.4. Each agency has its own Suspension and
              Debarment Official (SDO) who makes these decisions. The process has due process
              protections — you get notice and the right to respond — but the SDO has broad
              discretion, and courts review those decisions only under the narrow
              &quot;arbitrary and capricious&quot; standard.
            </p>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="debarment-vs-suspension" number="02" title="Debarment vs. Suspension: Two Different Threats" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Contractors often use &quot;debarment&quot; as a catch-all for any exclusion action,
              but suspension and debarment are legally distinct — with very different standards,
              timelines, and implications. Knowing the difference matters because the response
              strategy differs.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 font-semibold rounded-tl-xl">Feature</th>
                    <th className="text-left p-4 font-semibold">Suspension</th>
                    <th className="text-left p-4 font-semibold rounded-tr-xl">Debarment</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Purpose",
                      suspension: "Emergency action to protect the government immediately",
                      debarment: "Formal exclusion after due process finding",
                    },
                    {
                      feature: "Evidence threshold",
                      suspension: "\"Adequate evidence\" — a lower bar",
                      debarment: "Conviction, civil judgment, or fact-finding after hearing",
                    },
                    {
                      feature: "Maximum duration",
                      suspension: "18 months (unless legal proceedings are pending)",
                      debarment: "Generally 3 years (up to 5 for some violations)",
                    },
                    {
                      feature: "Due process",
                      suspension: "Notice and opportunity to respond, but faster",
                      debarment: "Full 30-day response window; fact-finding hearing if facts disputed",
                    },
                    {
                      feature: "Effect on new contracts",
                      suspension: "Same as debarment — no new awards",
                      debarment: "Same — no new awards across all agencies",
                    },
                    {
                      feature: "Common trigger",
                      suspension: "Indictment, active investigation, imminent harm to government",
                      debarment: "Conviction, civil judgment, or sustained compliance failure",
                    },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 font-medium text-stone-900 border-b border-stone-100">{row.feature}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.suspension}</td>
                      <td className="p-4 text-stone-600 border-b border-stone-100">{row.debarment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Suspension is the faster and more dangerous short-term threat. The government can
              suspend a contractor almost immediately after an indictment — without waiting for
              a criminal conviction. Because the evidence threshold is lower, suspension can arrive
              before you even know you are under serious scrutiny. An active DOJ investigation
              combined with an agency referral is enough.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Debarment typically follows a conviction, a civil judgment, or a formal fact-finding
              proceeding where the SDO determines that the contractor lacks &quot;present
              responsibility.&quot; That phrase — present responsibility — is the standard the
              SDO is applying. It is not purely backward-looking. The SDO asks: given everything
              we know, is this company responsible enough to receive public funds today?
            </p>

            <Callout icon={Info} color="sky" title="You can be suspended and then debarred — or just one">
              A suspension often precedes debarment when criminal proceedings are pending. While
              the case is active, the suspension continues. Once there is a conviction or plea,
              the agency may convert the suspension to a formal debarment. But not every suspension
              leads to debarment — if the government&apos;s case falls apart, the suspension can
              be lifted. Moving quickly and professionally during the suspension window can matter
              enormously for the final outcome.
            </Callout>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="common-causes" number="03" title="The Most Common Causes of Debarment" />

            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 9.406-2 lists the specific grounds for debarment. They fall into a few clear
              categories. Understanding them tells you where the risk actually lives in your
              organization.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  color: "border-red-400 bg-red-50",
                  iconColor: "text-red-500",
                  icon: Scale,
                  title: "False Claims Act violations",
                  desc: "The False Claims Act (31 USC 3729–3733) is the government's primary fraud statute. Knowingly submitting a false claim for payment — inflated costs, false certifications, misrepresented specifications — triggers civil liability and, almost always, a referral for debarment. In FY2025 alone, DOJ recovered over $6.8 billion from FCA settlements and judgments. Per-claim civil penalties range from $5,500 to $11,000, plus treble damages. A pattern of overbilling is not an accounting error — it is a debarment-eligible event.",
                },
                {
                  color: "border-red-400 bg-red-50",
                  iconColor: "text-red-500",
                  icon: AlertTriangle,
                  title: "Fraudulent set-aside representation",
                  desc: "Claiming a certification you do not hold — SDVOSB, 8(a), WOSB, HUBZone — to win a set-aside contract is a federal crime and a debarment cause. In 2024, Praetorian Shield settled for $221,000 after allegedly falsifying small business status. The SBA, VA, and DOJ all investigate these cases. If your certification eligibility has changed and you are still bidding as certified, you have a problem.",
                },
                {
                  color: "border-red-400 bg-red-50",
                  iconColor: "text-red-500",
                  icon: DollarSign,
                  title: "Bribery, kickbacks, and conflicts of interest",
                  desc: "Federal criminal statutes (18 USC 201–224) cover bribery of public officials, kickback schemes, and conflicts of interest. A conviction under any of these is a near-automatic debarment cause. The Anti-Kickback Act specifically targets subcontractor kickbacks to prime contractors — a common scheme in construction and services contracting.",
                },
                {
                  color: "border-amber-400 bg-amber-50",
                  iconColor: "text-amber-500",
                  icon: FileText,
                  title: "False statements and falsification of records",
                  desc: "Submitting false certifications — including falsely certifying cybersecurity compliance under CMMC or NIST SP 800-171 — is a growing enforcement priority. Health Net Federal Services paid $11.2 million for falsely certifying cybersecurity compliance. As CMMC 2.0 enforcement ramps up across DoD contracts, false self-attestations are becoming the next wave of FCA exposure for defense contractors.",
                },
                {
                  color: "border-amber-400 bg-amber-50",
                  iconColor: "text-amber-500",
                  icon: TrendingDown,
                  title: "Antitrust violations in bid preparation",
                  desc: "Bid rigging — coordinating with competitors on pricing or bid rotation — is both a criminal antitrust violation and a debarment cause. The DOJ Antitrust Division actively investigates procurement collusion, and the penalties are severe. This risk is highest in industries with a small number of regular bidders on recurring solicitations.",
                },
                {
                  color: "border-amber-400 bg-amber-50",
                  iconColor: "text-amber-500",
                  icon: Lock,
                  title: "Mandatory disclosure failures",
                  desc: "FAR 52.203-13 requires contractors to disclose credible evidence of FCA violations, federal criminal law violations involving fraud, and significant overpayments — to both the contracting officer and the Inspector General. Failing to disclose is itself a debarment cause, independent of the underlying violation. You can be debarred not for the fraud, but for covering it up.",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border-l-4 p-5 ${item.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              One cause that trips up small businesses specifically: growing past your size standard
              and continuing to bid on small business set-asides. If you have grown past the SBA
              size threshold for your NAICS code and are still checking the &quot;small business&quot;
              box on SAM.gov, you are misrepresenting your size on every proposal you submit.
              That is an FCA exposure for every contract you win.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Use CapturePilot&apos;s{" "}
              <Link href="/features/quick-checker" className="text-blue-700 underline hover:text-blue-900">
                Quick Checker
              </Link>{" "}
              to verify your current set-aside eligibility before each proposal cycle. Your size
              standard changes when your revenue changes. Do not assume last year&apos;s check
              still applies.
            </p>
          </div>

          {/* ── Mid-article CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Check your eligibility before your next bid</h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Bidding on a set-aside you no longer qualify for is not a paperwork issue — it is
                  an FCA exposure. CapturePilot&apos;s{" "}
                  <Link href="/features/quick-checker" className="underline text-white hover:text-blue-200">
                    Quick Checker
                  </Link>{" "}
                  maps your current business profile to the set-asides you actually qualify for,
                  so you bid with confidence.
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
            <SectionHeading id="the-process" number="04" title="How Debarment Proceeds: Timeline and Your Rights" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Debarment is not instantaneous. The FAR establishes a process with real due process
              protections — you get notice, a chance to respond, and the right to contest the
              facts. What you do in the window between notice and decision matters enormously.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Notice of proposed debarment",
                  desc: "The Suspension and Debarment Official sends formal written notice that the agency is proposing to debar your company. The notice states the reasons, the proposed debarment period, and your rights to respond. From this date, the clock starts.",
                  time: "Day 0",
                  color: "border-red-300",
                },
                {
                  step: "02",
                  title: "30-day response window",
                  desc: "You have 30 days from the notice date to submit written matters in opposition. This is your primary opportunity — you can submit documents, a legal brief, witness statements, and evidence of remediation. You can also request an in-person meeting with the SDO. Do not waste these 30 days. Engage a GovCon attorney immediately.",
                  time: "Days 1–30",
                  color: "border-amber-300",
                },
                {
                  step: "03",
                  title: "Fact-finding proceeding (if facts are disputed)",
                  desc: "If you dispute material facts in the government's case, you can request a fact-finding proceeding. The government is supposed to hold it within 45 working days of your request. You can appear with counsel, present documentary evidence, call witnesses, and cross-examine government witnesses. This is not a court trial, but it functions like one.",
                  time: "Days 30–75",
                  color: "border-amber-300",
                },
                {
                  step: "04",
                  title: "SDO final decision",
                  desc: "After the administrative record closes, the SDO issues a written final decision within 30 working days. The decision can: confirm debarment, reduce the proposed period, or decline to debar. The SDO is evaluating your 'present responsibility' — including any remediation steps you have taken since the underlying conduct.",
                  time: "Days 75–120",
                  color: "border-stone-300",
                },
                {
                  step: "05",
                  title: "Reconsideration and appeal",
                  desc: "Within 30 days of the final decision, you can request reconsideration for clear material errors of fact or law. Within 90 days, you can pursue an agency-level appeal or judicial review. Judicial review is narrow — courts apply the 'arbitrary and capricious' standard, not de novo review. Winning in court is difficult.",
                  time: "Days 120+",
                  color: "border-stone-300",
                },
              ].map((item) => (
                <div key={item.step} className={`flex gap-5 bg-stone-50 border border-stone-200 border-l-4 ${item.color} rounded-xl p-5`}>
                  <div className="shrink-0">
                    <span className="text-3xl font-black text-stone-200">{item.step}</span>
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

            <Callout icon={AlertTriangle} color="amber" title="The 30-day window is not a formality">
              What you submit in those first 30 days shapes the entire proceeding. Courts and SDOs
              repeatedly note that evidence of remediation — new compliance programs, leadership
              changes, cooperation with investigators, voluntary restitution — weighs heavily on the
              &quot;present responsibility&quot; determination. A company that responds with a strong
              remediation package in the first 30 days often gets a shorter debarment period, or
              avoids debarment entirely, compared to one that simply denies wrongdoing.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              The SDO has significant discretion throughout. The government is not required to
              debar — even a conviction does not mandate debarment. The SDO weighs factors including
              the seriousness of the conduct, whether the company has cooperated with investigators,
              whether management has changed, and whether the company has put systems in place to
              prevent recurrence. These factors are your leverage.
            </p>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="existing-contracts" number="05" title="What Happens to Your Existing Contracts" />

            <p className="text-stone-700 leading-relaxed mb-4">
              This is the question most contractors ask first, and the answer is more nuanced than
              they expect. Debarment does <strong>not automatically terminate existing contracts</strong>.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Under FAR 9.405-1, agencies retain discretion to continue existing contracts after
              a contractor is debarred. They weigh: how serious was the debarment cause, how
              urgently is the contract needed, are alternative sources available, and are there
              safeguards the agency can put in place? For a critical services contract with no
              ready alternative, the agency may well decide to let it run to completion.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">How debarment affects different contract types</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle2,
                    iconColor: "text-amber-500",
                    label: "Existing prime contracts",
                    desc: "Agency has discretion to continue or terminate. Continuation is more likely for essential services, short remaining periods, or contracts where the debarment cause was unrelated to contract performance.",
                  },
                  {
                    icon: XCircle,
                    iconColor: "text-red-500",
                    label: "New prime contracts",
                    desc: "Categorically prohibited. No agency can award a new contract to a debarred contractor. Period. This covers initial awards, exercising options on new task orders, and new BPA call orders.",
                  },
                  {
                    icon: XCircle,
                    iconColor: "text-red-500",
                    label: "New subcontracts",
                    desc: "Agencies cannot consent to new subcontracts with debarred contractors. A prime contractor who knowingly subcontracts to a debarred entity risks its own contract and legal liability.",
                  },
                  {
                    icon: AlertTriangle,
                    iconColor: "text-amber-500",
                    label: "GSA Schedules and IDIQs",
                    desc: "Debarment triggers removal from GSA Schedules and suspends task order eligibility on IDIQ vehicles. Even if an underlying IDIQ is not terminated, no new task orders can be placed.",
                  },
                  {
                    icon: AlertTriangle,
                    iconColor: "text-amber-500",
                    label: "Contracts involving bribery or conflict of interest",
                    desc: "Under 18 USC 218, if the debarment cause involves bribery or conflict of interest crimes, the agency head has authority to declare existing contracts void and recover all amounts paid. This is the most severe scenario.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <item.icon className={`w-5 h-5 ${item.iconColor} shrink-0 mt-0.5`} />
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{item.label}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The practical reality: most debarred contractors see their revenue collapse even if
              existing contracts continue. Without the ability to win new work, pipeline options
              on IDIQs, or new task orders, the contracts in hand become a rundown clock. A
              three-year debarment with a two-year contract in hand means one year of dead space —
              and a cold restart after that.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Track all your existing contracts and their expiration dates in{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline hover:text-blue-900">
                your pipeline
              </Link>{" "}
              so you can model the revenue impact clearly if the worst happens. Understanding which
              contracts carry option periods that require new consent — versus those that run
              automatically — affects how much leverage you have during the debarment proceeding.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="fighting-back" number="06" title="How to Fight Back: Contesting Debarment" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Your strongest position in a debarment proceeding is not denial. It is demonstrated
              remediation. SDOs are not looking for contractors to punish — they are looking for
              evidence that the contractor can be trusted with public funds going forward.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The legal strategy and the business strategy have to work together. On the legal
              side, you are contesting facts, challenging evidence, and asserting procedural rights.
              On the business side, you are building the remediation record that convinces the SDO
              your company has changed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Scale,
                  title: "Challenge the factual basis",
                  desc: "If the government's proposed debarment rests on incorrect facts, dispute them directly. Request fact-finding and present contrary evidence. This is especially relevant in suspension cases where the evidence threshold is lower.",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Shield,
                  title: "Document your remediation",
                  desc: "New internal controls, ethics training, leadership changes, compliance program installation, voluntary restitution — every step you have taken since the underlying conduct is evidence of present responsibility.",
                  color: "bg-emerald-50 border-emerald-200",
                  iconColor: "text-emerald-600",
                },
                {
                  icon: Search,
                  title: "Engage the SDO directly",
                  desc: "You have the right to request an in-person meeting with the SDO during the 30-day window. Use it. Showing up with counsel, a remediation plan, and evidence of cooperation is more persuasive than a written brief alone.",
                  color: "bg-violet-50 border-violet-200",
                  iconColor: "text-violet-600",
                },
                {
                  icon: FileText,
                  title: "Negotiate an administrative agreement",
                  desc: "In many cases, the government will accept a negotiated administrative agreement in lieu of formal debarment — especially where the contractor has cooperated, made restitution, and installed a credible compliance program. These agreements often include compliance monitors or reporting requirements.",
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

            <Callout icon={Lightbulb} color="emerald" title="Administrative agreements: the path most contractors miss">
              The government prefers compliance to exclusion when a contractor is otherwise capable
              and has made genuine effort to correct problems. An administrative agreement — negotiated
              between the contractor and the SDO — can include enhanced compliance reporting, an
              independent monitor, ethics audits, and other conditions. In exchange, formal debarment
              is avoided. These agreements require strong legal counsel and a credible compliance
              story, but they are a real option that avoids the stigma and business impact of
              formal debarment.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              If debarment is ultimately imposed, you can request reconsideration within 30 days
              for clear material errors of fact or law. You can also appeal within 90 days through
              agency-level procedures. Judicial review is available, but courts apply a narrow
              standard of review — they will not second-guess the SDO&apos;s judgment calls, only
              clear legal errors or procedurally arbitrary decisions.
            </p>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="prevention" number="07" title="How to Stay Off the List: Building a Compliance Program" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Prevention is far cheaper than the cure. FAR Part 3.10 establishes mandatory business
              ethics requirements for contractors above certain thresholds — but the smart move is
              to build these systems before you need them, not after the OIG comes knocking.
            </p>

            <div className="bg-stone-900 text-white rounded-2xl p-6 my-8">
              <h3 className="font-bold text-white mb-4 text-lg">
                The six components of a debarment-resistant compliance program
              </h3>
              <div className="space-y-3">
                {[
                  {
                    num: "01",
                    title: "Written code of business ethics and conduct",
                    desc: "Not a boilerplate document — a code that addresses your specific business risks. If you do cost-reimbursable work, address cost mischarging. If you pursue set-asides, address certification compliance.",
                  },
                  {
                    num: "02",
                    title: "Ethics training for all principals and employees",
                    desc: "Training must be substantive, documented, and repeated. Annual training sessions with attendance records are the minimum. Higher-risk roles — billing, certifications, proposal writing — need more frequent reinforcement.",
                  },
                  {
                    num: "03",
                    title: "Confidential reporting mechanism",
                    desc: "A hotline or anonymous reporting channel where employees can report suspected violations without fear of retaliation. This catches problems internally before they become government investigations.",
                  },
                  {
                    num: "04",
                    title: "Internal control systems",
                    desc: "Controls on billing, procurement, certifications, and conflict-of-interest disclosures. DCAA-compliant accounting systems for cost-reimbursable work. Periodic internal audits that are documented and acted upon.",
                  },
                  {
                    num: "05",
                    title: "Disciplinary procedures for violations",
                    desc: "Clear, enforced consequences for ethics violations — including by senior management. An ethics program that does not apply to leadership is not credible to an SDO or to employees.",
                  },
                  {
                    num: "06",
                    title: "Disclosure procedures",
                    desc: "A clear internal process for evaluating whether discovered information constitutes credible evidence requiring mandatory disclosure to the contracting officer and Inspector General. Mandatory disclosure failures are themselves a debarment cause.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 items-start border-b border-stone-700 pb-3 last:border-0 last:pb-0">
                    <span className="text-2xl font-black text-stone-600 shrink-0">{item.num}</span>
                    <div>
                      <p className="font-bold text-white text-sm mb-0.5">{item.title}</p>
                      <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Size matters here. FAR Part 3.10 makes ethics programs mandatory for contractors
              with government contracts expected to exceed $6 million and that have a performance
              period of 120 days or more. But even if you are below that threshold, the compliance
              infrastructure protects you and demonstrates good faith if anything does go wrong.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The SDO factors in your compliance program when evaluating present responsibility —
              both the existence of the program and whether it actually functions. A paper program
              that nobody follows is worse than no program at all, because it shows the company
              knew what was required and did not take it seriously.
            </p>

            <Callout icon={Info} color="sky" title="CMMC 2.0: the next wave of false certification exposure">
              For DoD contractors, the Cybersecurity Maturity Model Certification (CMMC 2.0)
              requires self-attestation or third-party assessment of cybersecurity controls. False
              self-attestations are an FCA exposure — the same theory that produced the Health Net
              $11.2 million settlement. If you handle Controlled Unclassified Information (CUI) on
              DoD contracts, your CMMC compliance posture needs to be accurate before you certify.
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="underline text-sky-700 hover:text-sky-900 font-medium">
                contract intelligence
              </Link>{" "}
              tracks CMMC requirements by solicitation so you know exactly what level applies
              before you bid.
            </Callout>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="self-disclosure" number="08" title="Self-Disclosure: The Option Most Contractors Overlook" />

            <p className="text-stone-700 leading-relaxed mb-4">
              If you discover a problem — an overpayment you received, a certification that turned
              out to be wrong, a billing error that was systematic rather than accidental — the
              instinct is to stay quiet and hope nobody notices. That instinct will cost you.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 52.203-13 requires mandatory disclosure of credible evidence of FCA violations,
              federal criminal law violations involving fraud, and significant overpayments. The
              requirement is not optional, and failure to disclose is itself a separate debarment
              cause. But even outside the mandatory window, <strong>voluntary self-disclosure
              is almost always the better strategic move</strong>.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">What self-disclosure gets you</h3>
              <div className="space-y-3">
                {[
                  {
                    icon: CheckCircle2,
                    iconColor: "text-emerald-600",
                    item: "Significantly reduced civil penalties — DOJ gives substantial credit for self-disclosure before an investigation begins",
                  },
                  {
                    icon: CheckCircle2,
                    iconColor: "text-emerald-600",
                    item: "Favorable weight in any subsequent debarment proceeding — the SDO sees a contractor that identified a problem and fixed it, rather than one that was caught",
                  },
                  {
                    icon: CheckCircle2,
                    iconColor: "text-emerald-600",
                    item: "Potential declination of criminal prosecution when the disclosure is early, complete, and accompanied by full cooperation",
                  },
                  {
                    icon: CheckCircle2,
                    iconColor: "text-emerald-600",
                    item: "Control over the narrative — you define the scope and framing of the problem before investigators do",
                  },
                  {
                    icon: AlertTriangle,
                    iconColor: "text-amber-500",
                    item: "A mandatory disclosure must go to both the contracting officer AND the relevant agency Inspector General — not just one of them",
                  },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <row.icon className={`w-5 h-5 ${row.iconColor} shrink-0 mt-0.5`} />
                    <p className="text-sm text-stone-700">{row.item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The threshold for mandatory disclosure is &quot;credible evidence&quot; — not certainty.
              You do not need to have completed an internal investigation before you disclose. The
              government expects disclosure as soon as the evidence becomes credible. The longer you
              wait, the worse your position.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Self-disclosure is a legal decision that requires experienced GovCon counsel. The scope,
              timing, and format of the disclosure matter. A poorly executed disclosure can expand the
              government&apos;s investigation rather than contain it. Do not do this without a lawyer
              who has been through the process before.
            </p>
          </div>

          {/* ── Section 9 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="the-road-back" number="09" title="After Debarment: The Road Back" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Debarment is not necessarily permanent. The standard three-year period can end, and
              contractors can be reinstated. The question is whether there is anything left of the
              business when that happens — and what you have to show for the intervening period.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The same factors the SDO considered in imposing debarment are relevant to
              reinstatement: compliance programs, ethics infrastructure, leadership changes,
              demonstrated remediation. A contractor that spent the debarment period building
              genuinely improved internal controls is in a far better position than one that simply
              waited out the clock.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">Rebuilding during and after debarment</h3>
              <div className="space-y-3">
                {[
                  "Complete the compliance program you should have had before — ethics training, controls, reporting mechanisms, documented audits",
                  "Address any related criminal or civil proceedings — resolution of underlying charges is often a precondition for reinstatement",
                  "If the debarment extends to individual principals, assess whether leadership restructuring makes sense",
                  "Pursue commercial work to maintain cash flow and organizational capability during the exclusion period",
                  "Build or maintain relationships with state and local government — debarment from federal contracts does not bar state/local work",
                  "Request termination of debarment before the period ends if remediation is complete and the government's concerns have been addressed",
                  "When re-entering, be transparent with contracting officers about prior debarment — it is public record and discoverable in minutes",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 9.406-5 allows a debarred contractor to request early termination of a debarment
              if circumstances have changed. This requires a formal request to the original SDO
              demonstrating that the reasons for debarment no longer exist or have been substantially
              mitigated. Early terminations are granted — but they require a compelling record of
              remediation, not just the passage of time.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Companies that survive debarment are the ones that treated the period as a genuine
              reckoning — not a PR problem to wait out. The government is watching. So are potential
              teaming partners and subcontractors who will run the SAM.gov check themselves before
              agreeing to work with you again.
            </p>

            <Callout icon={Lightbulb} color="violet" title="Use CapturePilot's intelligence tools to monitor your competitive landscape">
              While rebuilding, you still need to understand the federal market — which agencies are
              buying, which incumbents are recompeting, and which contract vehicles are opening up.
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="underline font-medium text-violet-700 hover:text-violet-900">
                market intelligence
              </Link>{" "}
              keeps you informed so that when your debarment period ends, you are not starting your
              market analysis from scratch. You walk back in knowing exactly where to focus.
            </Callout>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll my-12">
            <div className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-black mb-3">
                  The best time to build compliance is before you need it.
                </h3>
                <p className="text-stone-300 mb-6 text-sm leading-relaxed">
                  Debarment risk starts with bidding on contracts you do not qualify for and
                  billing for work that was not done. CapturePilot helps you verify set-aside
                  eligibility before every bid, track the compliance requirements on every active
                  opportunity, and maintain a pipeline that shows you exactly where your
                  certifications apply.
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
                  href: "/blog/far-clauses-small-business",
                  label: "Getting Started",
                  title: "Key FAR Clauses Every Small Business Contractor Must Know",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  label: "Strategy",
                  title: "DCAA Audit Preparation: What Small Business Government Contractors Must Know",
                },
                {
                  href: "/blog/cmmc-compliance-dod-contractors",
                  label: "Strategy",
                  title: "CMMC 2.0 Compliance: What Every DoD Contractor Must Know Before the Deadline",
                },
                {
                  href: "/blog/government-contract-protest",
                  label: "Advanced",
                  title: "Government Contract Protests: When, Why, and How to File One",
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
