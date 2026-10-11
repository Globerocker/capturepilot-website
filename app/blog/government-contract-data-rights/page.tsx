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
  Shield,
  AlertCircle,
  Lock,
  Layers,
  Scale,
  Info,
  XCircle,
  Zap,
  ClipboardList,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-data-rights-matter", label: "Why Data Rights Matter More Than Most Contractors Realize" },
  { id: "rights-tiers", label: "The Four Rights Tiers: Unlimited, GPR, Limited, Restricted" },
  { id: "funding-origin-rule", label: "The Funding Origin Rule: Who Paid Determines What the Government Gets" },
  { id: "far-vs-dfars", label: "FAR vs. DFARS: Civilian Agencies vs. DoD" },
  { id: "sbir-data-rights", label: "SBIR/STTR Data Rights: The 20-Year Protection" },
  { id: "marking-your-data", label: "Marking Your Data: The Legends That Protect Your IP" },
  { id: "background-ip", label: "Protecting Your Background IP in New Contracts" },
  { id: "dod-ip-guidebook", label: "What the DoD IP Guidebook (2025) Changed" },
  { id: "common-mistakes", label: "Mistakes That Give Away Your IP" },
  { id: "next-steps", label: "Your Next Steps" },
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

export default function GovernmentContractDataRightsPage() {
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
            <span className="text-stone-900 font-medium">Data Rights in Government Contracts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Advanced
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Data Rights in Government Contracts:{" "}
            <span className="gradient-text">How to Protect Your IP When Working With Federal Agencies</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The government can claim rights to your technical data and software — but only to the extent the rules allow.
            Most contractors give away more than they have to because they don&apos;t mark their data correctly, don&apos;t
            understand the funding origin rule, or sign contracts without asserting restrictions up front.
            Here&apos;s how the system actually works and how to keep what&apos;s yours.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published October 11, 2026</span>
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
          <SectionHeading id="why-data-rights-matter" number="01" title="Why Data Rights Matter More Than Most Contractors Realize" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            You spent years developing proprietary software, testing methodologies, or engineering designs. Then
            you win a government contract that uses some of that work. Now the government wants the technical data —
            and you&apos;re not sure what rights they actually have.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            This is not a hypothetical. Federal agencies routinely assert rights to technical data and computer
            software delivered under contracts, and the rules governing those rights are embedded in clauses that
            most contractors sign without fully reading. The consequences can be severe. If the government holds
            unlimited rights to your core IP, a competitor can potentially access it through a Freedom of Information
            Act request. You could find your proprietary processes in a competitor&apos;s hands.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The good news: the system has protections built in, and the regulations give you meaningful leverage —
            but only if you use them correctly. The rules under the Federal Acquisition Regulation (FAR) and the
            Defense Federal Acquisition Regulation Supplement (DFARS) establish a clear framework. Rights tiers,
            funding origin rules, marking requirements, and pre-award assertion procedures all exist specifically
            to let contractors protect legitimately private IP while still fulfilling government contracts.
          </p>

          <Callout icon={AlertTriangle} color="amber" title="The default is not your friend">
            If you deliver technical data or software without proper restrictive markings, the government typically
            receives unlimited rights by default. The burden of protecting your IP is on you — not on the contracting
            officer to ask. Silence equals consent to unlimited use.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Data rights disputes are also rising. As agencies push for greater data portability and technology
            modernization, they increasingly want to move work from one contractor to another — and they need the
            technical data to do it. Understanding these rules before you sign a contract is the only reliable
            way to protect your position.
          </p>

          {/* Section 2 */}
          <SectionHeading id="rights-tiers" number="02" title="The Four Rights Tiers: Unlimited, GPR, Limited, Restricted" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Both FAR and DFARS use a tiered system for government rights in contractor-developed data. The tier
            that applies depends mainly on how development was funded, which we&apos;ll cover in the next section.
            Here&apos;s what each tier actually means in practice.
          </p>

          <div className="not-prose my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Rights Tier</th>
                  <th className="text-left p-3 font-semibold">Government Can Do</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tier: "Unlimited Rights",
                    can: "Use, reproduce, modify, distribute, disclose to anyone — including competitors",
                    duration: "Permanent",
                  },
                  {
                    tier: "Government Purpose Rights (GPR)",
                    can: "Use for any government purpose, including competitive reprocurement; cannot release for commercial use",
                    duration: "5 years (DoD), then converts to unlimited",
                  },
                  {
                    tier: "Limited Rights",
                    can: "Use internally; cannot disclose outside government except in narrow circumstances",
                    duration: "Permanent protection (for purely private-expense technical data)",
                  },
                  {
                    tier: "Restricted Rights",
                    can: "Use on one computer, copy for backup or archive; strict limits on disclosure",
                    duration: "Permanent protection (for purely private-expense software)",
                  },
                ].map((row, i) => (
                  <tr key={row.tier} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-3 font-semibold text-blue-700 border-b border-stone-100">{row.tier}</td>
                    <td className="p-3 text-stone-700 border-b border-stone-100">{row.can}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            <strong>Unlimited rights</strong> is the most dangerous tier for contractors. Under DFARS 252.227-7013,
            the government can use unlimited-rights data in any way it chooses — including releasing it to a competing
            firm to support a competitive reprocurement. This is the tier that most contractors want to avoid on
            their proprietary IP.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            <strong>Government Purpose Rights</strong> sits in the middle. The government can use the data for any
            government purpose, but cannot release it for commercial purposes during the protection period (typically
            5 years under DoD contracts). After that period, GPR data converts to unlimited rights. GPR applies to
            data developed with mixed funding — part government, part private. It&apos;s a compromise: the government
            gets what it needs for operations and competitive reprocurement, but your commercial business isn&apos;t
            immediately exposed.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            <strong>Limited rights</strong> and <strong>restricted rights</strong> apply to data and software
            developed entirely at private expense. These are your strongest protections. The government can use
            the data internally but cannot release it outside the government without your permission, except in
            very narrow circumstances spelled out in the clause (emergency repair, foreign government use under
            treaties, and a few others). Critically, a competitor cannot access it through FOIA or a data request
            for reprocurement purposes.
          </p>

          <Callout icon={Info} color="sky" title="Software vs. technical data">
            The rights framework treats software and technical data as separate categories, even within the same
            project. Software developed at private expense receives &ldquo;restricted rights.&rdquo; Non-software
            technical data (designs, specifications, test data) developed at private expense receives &ldquo;limited
            rights.&rdquo; Both protect you — but you need separate markings for each category.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="funding-origin-rule" number="03" title="The Funding Origin Rule: Who Paid Determines What the Government Gets" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The single most important concept in government data rights is the funding origin rule. Where the money
            came from during development determines what rights tier applies. This rule is the foundation of the
            entire framework — and contractors who don&apos;t understand it often give away more than they have to.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="grid gap-4">
              {[
                {
                  funding: "100% Government Funded",
                  rights: "Unlimited Rights",
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  detail: "Developed exclusively using government contract funds. Government gets full use rights.",
                },
                {
                  funding: "Mixed Funding (Government + Private)",
                  rights: "Government Purpose Rights",
                  icon: Scale,
                  color: "text-amber-600",
                  bg: "bg-amber-50 border-amber-200",
                  detail: "Some private R&D investment combined with government contract work. 5-year protection, then unlimited.",
                },
                {
                  funding: "100% Private Expense",
                  rights: "Limited / Restricted Rights",
                  icon: CheckCircle2,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-200",
                  detail: "Developed entirely with your own funds before or outside the contract. Permanent protection.",
                },
              ].map((row) => (
                <div key={row.funding} className={`rounded-xl border p-5 ${row.bg}`}>
                  <div className="flex items-start gap-3">
                    <row.icon className={`w-5 h-5 mt-0.5 shrink-0 ${row.color}`} />
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{row.funding}</p>
                      <p className={`text-xs font-semibold mb-1 ${row.color}`}>{row.rights}</p>
                      <p className="text-stone-600 text-sm">{row.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The tricky cases are mixed-funding situations. If you develop a technology partly on your own dime
            and then continue development under a government contract, you need to carefully document the
            split. The portions developed before the contract — or with your own funds during the contract —
            can qualify for limited or restricted rights. The portions developed with government money on that
            contract fall under government purpose rights at best.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Documentation matters enormously here. Your IR&amp;D (independent research and development) records,
            B&amp;P (bid and proposal) cost records, and internal project accounting need to clearly demonstrate
            what was developed when and with whose money. In a dispute, the government can challenge your
            funding assertions, and vague records rarely hold up.
          </p>

          <Callout icon={Lightbulb} color="emerald" title="Keep separate accounts for private development">
            Maintain project-level accounting that distinguishes IR&D spending from contract-funded work. If you
            co-mingle funds or fail to document development milestones, you may be unable to prove private-expense
            origin — and without that proof, the government can challenge your limited-rights assertions. This is
            especially critical for software where development is continuous.
          </Callout>

          {/* Section 4 */}
          <SectionHeading id="far-vs-dfars" number="04" title="FAR vs. DFARS: Civilian Agencies vs. DoD" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The FAR and DFARS have parallel but distinct data rights frameworks. Which one applies depends on
            which agency you&apos;re contracting with. DoD contracts use DFARS. Civilian agencies — GSA, HHS,
            DHS, NASA (with some modifications), and others — use FAR.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The core FAR clause for civilian contracts is <strong>FAR 52.227-14, Rights in Data — General</strong>.
            It uses the same unlimited/limited/restricted framework, but there are meaningful differences in
            scope and the specific scenarios where the government acquires different tiers. Under FAR 52.227-14,
            the government generally receives unlimited rights in data produced entirely under the contract
            (government-funded), but the contractor can withhold limited rights data — non-software technical
            data developed at private expense — by marking it appropriately and delivering only a notice in
            lieu of the actual data.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            For DoD contracts, the controlling clauses were historically DFARS 252.227-7013 (technical data
            for noncommercial items) and DFARS 252.227-7014 (software for noncommercial items). A DFARS class
            deviation effective February 1, 2026 consolidated these clauses into DFARS 252.227-7989 and
            renumbered related provisions. If you&apos;re working on a DoD contract awarded after that date,
            verify which version of the clause is actually in your contract — the numbering changed.
          </p>

          <div className="not-prose my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-700 text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Feature</th>
                  <th className="text-left p-3 font-semibold">FAR (Civilian Agencies)</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">DFARS (DoD)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Primary clause", far: "FAR 52.227-14", dfars: "DFARS 252.227-7989 (post-Feb 2026)" },
                  { feature: "GPR duration", far: "Not explicitly specified in standard clause", dfars: "5 years from contract execution" },
                  { feature: "SBIR protection", far: "FAR 52.227-20", dfars: "DFARS 252.227-7018 (20-year protection)" },
                  { feature: "Pre-award assertion form", far: "Not standardly required", dfars: "DFARS 252.227-7017 required" },
                  { feature: "Mixed funding default", far: "Unlimited rights in most data produced under contract", dfars: "Government purpose rights" },
                  { feature: "Commercial item software", far: "FAR 52.227-19 (restricted rights)", dfars: "DFARS 252.227-7014 provisions" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-3 font-semibold text-stone-700 border-b border-stone-100">{row.feature}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{row.far}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{row.dfars}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One important practical difference: DFARS contracts generally have a more contractor-favorable default
            on mixed-funding data. Under DFARS, mixed-funding development yields Government Purpose Rights for
            5 years before converting to unlimited. Under the standard FAR clause for civilian agencies, the
            default on data produced &ldquo;under&rdquo; the contract often leans toward unlimited rights. If you
            work across both civilian and DoD customers, you can&apos;t assume the same marking strategy works
            identically for both.
          </p>

          {/* Section 5 */}
          <SectionHeading id="sbir-data-rights" number="05" title="SBIR/STTR Data Rights: The 20-Year Protection" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            SBIR and STTR awardees get a separate and significantly stronger data rights protection than standard
            contractors. This protection exists specifically because SBIR is designed to fund development of
            commercially promising technology — and the program would fail if the government could take unlimited
            rights to everything developed through it.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A final rule effective January 17, 2025 updated the DFARS SBIR/STTR data rights framework. The key
            provisions under <strong>DFARS 252.227-7018</strong> (the current controlling clause) are:
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="grid gap-4">
              {[
                {
                  step: "01",
                  title: "20-year protection period",
                  detail:
                    "The SBIR/STTR data protection period runs for 20 years from contract award — not from Phase II completion or delivery. During this period, SBIR technical data receives limited rights treatment and SBIR software receives restricted rights treatment.",
                },
                {
                  step: "02",
                  title: "Government Purpose Rights after 20 years",
                  detail:
                    "When the 20-year protection period expires, the government receives Government Purpose Rights — not unlimited rights. That&apos;s an improvement from the prior framework and means your technology still can&apos;t be handed to a commercial competitor even after the protection period ends.",
                },
                {
                  step: "03",
                  title: "Contracting officers cannot demand waiver",
                  detail:
                    "The 2025 rule added DFARS 227.7104-1, which explicitly prohibits contracting officers from requiring offerors to relinquish SBIR/STTR data rights as a condition of award. If a CO is pressuring you on this, cite the regulation.",
                },
                {
                  step: "04",
                  title: "Asserting SBIR rights",
                  detail:
                    "Use the DFARS 252.227-7017 form to identify SBIR data at contract award. Mark delivered data with the SBIR data rights legend specified in DFARS 252.227-7018. Failing to mark at the time of delivery risks losing the protection.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-2xl font-black text-blue-200 shrink-0 leading-none">{item.step}</span>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Civilian agencies handle SBIR data rights through <strong>FAR 52.227-20</strong>. The protection is
            similar in concept but implemented differently. If your SBIR work spans both DoD and civilian agency
            contracts (common in Phase II commercialization), you&apos;ll be dealing with both clause frameworks
            and need to track which applies to which deliverable.
          </p>

          <Callout icon={Shield} color="blue" title="SBIR protection survives company acquisition">
            SBIR data rights attach to the data itself, not just to the original awardee. If your company is
            acquired after an SBIR award, the buyer inherits both the contract and the data rights protections.
            See our guide on{" "}
            <Link href="/blog/government-contract-novation-guide" className="underline text-blue-700">
              government contract novation
            </Link>{" "}
            for how to handle the transfer correctly — a poorly executed novation can complicate data rights
            assertions on existing contracts.
          </Callout>

          {/* Section 6 */}
          <SectionHeading id="marking-your-data" number="06" title="Marking Your Data: The Legends That Protect Your IP" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Marking is not optional. It&apos;s the mechanism by which you assert restrictions. If you deliver
            technical data or software without the required restrictive legend, the government can claim unlimited
            rights even if you developed the underlying IP entirely at private expense. Courts have consistently
            upheld this: the government&apos;s rights are determined at the time of delivery, and improper
            marking forfeits your protections.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Each rights tier has a corresponding legend specified in the applicable clause. Here&apos;s what you
            need to apply:
          </p>

          <div className="not-prose my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Rights Tier</th>
                  <th className="text-left p-3 font-semibold">Legend Required</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">Where It Appears</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tier: "Limited Rights (technical data)",
                    legend: "\"Limited Rights\" notice per DFARS 252.227-7013(f)(2) or FAR 52.227-14(g)(3)",
                    where: "Cover page of document and each page containing restricted data",
                  },
                  {
                    tier: "Restricted Rights (software)",
                    legend: "\"Restricted Rights\" notice per DFARS 252.227-7014(f)(2)",
                    where: "Software documentation, physical media label, and in the software itself",
                  },
                  {
                    tier: "Government Purpose Rights",
                    legend: "\"Government Purpose Rights\" notice with the expiration date of the GPR period",
                    where: "Cover page and applicable pages or software documentation",
                  },
                  {
                    tier: "SBIR/STTR Data Rights",
                    legend: "\"SBIR/STTR Rights\" legend per DFARS 252.227-7018 — includes contract number and award date",
                    where: "All technical data and software delivered under the SBIR/STTR contract",
                  },
                ].map((row, i) => (
                  <tr key={row.tier} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-3 font-semibold text-blue-700 border-b border-stone-100">{row.tier}</td>
                    <td className="p-3 text-stone-700 border-b border-stone-100">{row.legend}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{row.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The legends must be verbatim or substantially similar to the text in the clause. Don&apos;t paraphrase.
            Include the specific information the legend requires — for GPR, that means the actual expiration date
            of the protection period. For SBIR, it means the contract number and award date from which the
            20-year clock runs.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            If you discover after delivery that you failed to mark data correctly, the regulations do provide a
            procedure to correct the omission — but it requires prompt action and is at the contracting officer&apos;s
            discretion. Don&apos;t rely on it. Build marking into your delivery process as a standard checklist
            item, similar to verifying technical compliance before submission. CapturePilot&apos;s{" "}
            <Link href="/features/proposals" className="text-blue-700 hover:underline">
              proposal management tools
            </Link>{" "}
            can help you build pre-delivery checklists that include data rights marking verification.
          </p>

          {/* Section 7 */}
          <SectionHeading id="background-ip" number="07" title="Protecting Your Background IP in New Contracts" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            &ldquo;Background IP&rdquo; is the IP you bring to a contract — technology you developed before the
            contract, or during the contract but with your own funds and separately from the government work.
            &ldquo;Foreground IP&rdquo; (sometimes called &ldquo;deliverable data&rdquo;) is what you create
            specifically under the contract using government funds.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The government generally has no rights to your background IP — unless you bring it into the contract
            scope without protecting it. This is where contractors most commonly make costly mistakes. They
            incorporate background IP into contract deliverables without marking it, or they agree to contract
            language that inadvertently sweeps in background IP through overly broad data delivery requirements.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="bg-stone-900 rounded-2xl p-6 text-white">
              <p className="text-sm font-bold text-blue-400 mb-4 flex items-center gap-2">
                <ClipboardList className="w-4 h-4" /> Background IP Protection Checklist
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Identify all background IP before contract award",
                  "List it in the DFARS 252.227-7017 pre-award assertion form",
                  "Mark all documents containing background IP with appropriate legends before delivery",
                  "Review SOW/PWS for overly broad data delivery requirements",
                  "Negotiate data delivery clauses to specify what data is actually needed",
                  "Use DFARS 252.227-7013(e) withholding rights where applicable",
                  "Maintain IP registrations (patents, copyrights) to document prior art dates",
                  "Record development milestones and expenditure logs contemporaneously",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            For DoD contracts, <strong>DFARS 252.227-7017</strong> is your pre-award assertion mechanism. This
            clause requires offerors to identify, before award, any technical data or software they intend to
            deliver with restrictions. Miss this window, and you may lose the ability to assert restrictions
            on that data even if you legitimately developed it at private expense. Treat the 7017 form seriously —
            it&apos;s not boilerplate to fill out quickly.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One additional protection available under DFARS: the right to withhold. For certain categories of
            limited-rights data, the contractor may withhold the actual data and deliver a notice instead,
            stating that limited-rights data exists but is being withheld. The government gets notice but not
            the data itself. This option doesn&apos;t work for all contract types, and the contracting officer
            can challenge a withholding assertion, but it&apos;s a legitimate tool when you need to protect
            particularly sensitive core IP.
          </p>

          {/* CTA 1 */}
          <div className="not-prose my-12 animate-on-scroll">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 text-blue-200">Free Tool</p>
              <h3 className="text-xl font-black mb-3">Know Your Set-Aside Eligibility Before You Pursue a Contract</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-xl">
                Before you worry about data rights, make sure you&apos;re pursuing opportunities you can
                actually win. CapturePilot&apos;s Quick Checker verifies your certifications, size standards,
                and set-aside eligibility in seconds.
              </p>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading id="dod-ip-guidebook" number="08" title="What the DoD IP Guidebook (2025) Changed" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The Department of Defense released a comprehensive Intellectual Property Guidebook in May 2025. This
            document is significant not because it creates new law — it doesn&apos;t — but because it signals
            how DoD contracting officers are expected to approach IP in acquisitions and clarifies the department&apos;s
            current thinking on contested areas.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A few practical implications from the guidebook:
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="grid gap-4">
              {[
                {
                  title: "IP strategies are now expected at the acquisition planning stage",
                  detail:
                    "Program offices are directed to develop an IP strategy before they issue a solicitation — documenting what data they actually need, what rights tier is appropriate, and why. This creates an opening for contractors to engage with program offices early and shape reasonable data requirements. See our guide on ",
                  link: "/blog/sources-sought-notice",
                  linkText: "sources sought notices",
                  suffix: " for how to get in front of these conversations before the RFP drops.",
                },
                {
                  title: "Technical data requirements must be justified",
                  detail:
                    "The guidebook reinforces that contracting officers should not include unlimited-rights data requirements unless they can justify the need. &ldquo;We might need it someday&rdquo; is not sufficient justification. This gives you grounds to push back on overly broad data delivery clauses during negotiations.",
                  link: null,
                  linkText: null,
                  suffix: "",
                },
                {
                  title: "Cybersecurity and data rights are now linked",
                  detail:
                    "The guidebook specifically addresses the intersection of CMMC compliance and data rights. If the government holds unlimited rights to your proprietary software but requires you to meet CMMC Level 2 or Level 3, there are open questions about who bears the cost of protecting data the government can freely distribute. This is an evolving area.",
                  link: "/blog/cmmc-compliance-dod-contractors",
                  linkText: "CMMC compliance guide",
                  suffix: " for the current state of those requirements.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-stone-200 bg-stone-50">
                  <p className="font-bold text-stone-900 text-sm mb-2">{item.title}</p>
                  <p className="text-stone-600 text-sm">
                    {item.detail}
                    {item.link && (
                      <>
                        <Link href={item.link} className="text-blue-700 underline">
                          {item.linkText}
                        </Link>
                        {item.suffix}
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The guidebook also addresses how DoD handles IP in Other Transaction Authority (OTA) agreements,
            which operate outside FAR/DFARS. OTAs give agencies more flexibility to negotiate IP terms directly —
            which is both an opportunity and a risk. In OTA negotiations, the government&apos;s opening position
            is often more aggressive on IP than a standard contract because the regulatory floor doesn&apos;t
            apply. If you&apos;re pursuing OTA work, read our guide on{" "}
            <Link href="/blog/ota-contracts-guide" className="text-blue-700 hover:underline">
              OTA contracts
            </Link>{" "}
            before entering those discussions.
          </p>

          {/* Section 9 */}
          <SectionHeading id="common-mistakes" number="09" title="Mistakes That Give Away Your IP" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            These are the most common ways contractors lose IP protection they were legally entitled to keep.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="grid gap-4">
              {[
                {
                  mistake: "Not submitting the DFARS 252.227-7017 form at proposal stage",
                  consequence:
                    "You cannot assert restrictions on data you failed to identify before award. This is a hard deadline — you can&apos;t go back and add assertions for data you &apos;forgot&apos; to list.",
                  fix: "Make 252.227-7017 completion a standard part of every DoD proposal preparation process.",
                },
                {
                  mistake: "Delivering data without restrictive legends",
                  consequence:
                    "The government claims unlimited rights based on the absence of a legend. Even privately-funded IP can be lost this way.",
                  fix: "Build a data rights marking review into your pre-delivery checklist. Every deliverable gets reviewed before submission.",
                },
                {
                  mistake: "Agreeing to broad SOW language requiring delivery of &apos;all data&apos;",
                  consequence:
                    "Sweeping data delivery requirements can obligate you to deliver data you didn&apos;t intend to hand over, potentially including background IP.",
                  fix: "Negotiate SOW/CDRL data requirements to be specific. Push back on vague &apos;all data developed under this contract&apos; language.",
                },
                {
                  mistake: "Letting the GPR clock lapse without tracking it",
                  consequence:
                    "Government Purpose Rights convert to unlimited rights after the protection period expires. If you&apos;re not tracking expiration dates, you may not notice the conversion until after it happens.",
                  fix: "Calendar the GPR expiration date on every contract. Consider whether you can negotiate extensions or reclassification before expiration.",
                },
                {
                  mistake: "Assuming SBIR rights are automatic without marking",
                  consequence:
                    "SBIR data rights are not self-executing. You must mark the data with the SBIR legend when you deliver it. Unmarked SBIR data may not receive the intended protection.",
                  fix: "Apply the SBIR/STTR data rights legend (DFARS 252.227-7018 form) to all data and software delivered under SBIR/STTR awards.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-red-100 bg-red-50 overflow-hidden">
                  <div className="p-4 border-b border-red-100">
                    <p className="font-bold text-red-800 text-sm flex items-start gap-2">
                      <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                      {item.mistake}
                    </p>
                    <p className="text-red-700 text-sm mt-1 ml-6">{item.consequence}</p>
                  </div>
                  <div className="p-4 bg-emerald-50">
                    <p className="text-emerald-800 text-sm flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
                      <span><strong>Fix:</strong> {item.fix}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={AlertCircle} color="red" title="Rights challenges are time-sensitive">
            If the government challenges your restrictive marking after delivery, you typically have 60 days
            to respond and substantiate your assertion. Miss the deadline and the challenge stands, converting
            your data to unlimited rights. If you receive a challenge notice, treat it as urgent and get
            experienced government contracts counsel involved immediately.
          </Callout>

          {/* CTA 2 */}
          <div className="not-prose my-12 animate-on-scroll">
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 text-stone-400">Free Trial</p>
              <h3 className="text-xl font-black text-stone-900 mb-3">Track Every Contract Detail — Including IP-Critical Milestones</h3>
              <p className="text-stone-600 text-sm mb-6 max-w-xl">
                CapturePilot&apos;s pipeline management keeps GPR expiration dates, data delivery schedules,
                and contract milestones visible alongside your opportunities. Never miss an IP-critical deadline.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 10 */}
          <SectionHeading id="next-steps" number="10" title="Your Next Steps" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Data rights is a topic where knowing the framework is not enough — you need to apply it
            systematically on every contract. The contractors who protect their IP aren&apos;t necessarily
            the ones with the most sophisticated legal teams. They&apos;re the ones who built the right
            processes and apply them consistently.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <p className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-widest">Action Plan</p>
              <div className="grid gap-4">
                {[
                  {
                    step: "1",
                    title: "Audit your current contracts",
                    detail:
                      "Review each active contract for data rights clauses. Note which version of FAR or DFARS applies, identify any GPR expiration dates, and check whether SBIR rights are properly asserted.",
                  },
                  {
                    step: "2",
                    title: "Build an IP inventory",
                    detail:
                      "Document your background IP: what you developed, when, with whose funds. This inventory is your evidence base for funding origin assertions. It needs to exist before your next proposal submission.",
                  },
                  {
                    step: "3",
                    title: "Create marking standards",
                    detail:
                      "Develop company-standard templates for each restrictive legend. Include them in your document templates and make marking review a required step before any technical data delivery.",
                  },
                  {
                    step: "4",
                    title: "Revisit your 252.227-7017 process",
                    detail:
                      "If you&apos;ve been skipping or rushing the pre-award assertion form on DoD solicitations, fix that now. Designate a person responsible for completing it on every DoD proposal.",
                  },
                  {
                    step: "5",
                    title: "Engage early on new solicitations",
                    detail:
                      "Use sources sought responses and pre-solicitation meetings to flag your data rights concerns before the RFP is finalized. It&apos;s much harder to change data requirements after award.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-2xl font-black text-blue-400 shrink-0 leading-none w-6">{item.step}</span>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-stone-400 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            If you&apos;re building out your federal contracting operation, data rights is just one piece of a
            larger compliance picture. Check out our guide on{" "}
            <Link href="/blog/far-clauses-small-business" className="text-blue-700 hover:underline">
              key FAR clauses for small business contractors
            </Link>{" "}
            for a broader look at the contract terms that matter most, and our{" "}
            <Link href="/blog/government-proposal-compliance-matrix" className="text-blue-700 hover:underline">
              proposal compliance matrix guide
            </Link>{" "}
            for how to make sure you never miss a mandatory requirement in a submission.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The federal government spent over $750 billion on contracts in FY2025. The agencies writing those
            contracts will all have opinions about the data your work produces. Understanding exactly what you
            owe — and exactly what you don&apos;t — is worth the time it takes to learn the rules.
          </p>

          {/* Final CTA */}
          <div className="not-prose mt-16 animate-on-scroll">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
              <Zap className="w-8 h-8 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">Ready to Pursue Federal Contracts Strategically?</h3>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm">
                CapturePilot helps small businesses find, track, and win government contracts — with tools
                for opportunity matching, proposal development, and pipeline management.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors text-sm border border-blue-400"
                >
                  Start your 30-day free trial
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
