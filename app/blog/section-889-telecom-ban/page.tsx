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
  AlertCircle,
  FileText,
  Target,
  XCircle,
  Search,
  Layers,
  Lock,
  Zap,
  Clock,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-889-prohibits", label: "What Section 889 Actually Prohibits" },
  { id: "five-banned-companies", label: "The Five Banned Companies and Their Aliases" },
  { id: "part-a-vs-part-b", label: "Part A vs. Part B: Two Separate Problems" },
  { id: "far-clauses", label: "The Three FAR Clauses You're Already Certifying" },
  { id: "representation-risk", label: "The Certification Risk Every Bidder Faces" },
  { id: "reasonable-inquiry", label: "How to Conduct a Reasonable Inquiry" },
  { id: "white-label-trap", label: "The White-Label Trap: Where Companies Get Caught" },
  { id: "2025-2026-expansion", label: "2025–2026 Expansion: Drones and New Entities" },
  { id: "consequences", label: "What Happens When You're Non-Compliant" },
  { id: "action-plan", label: "Action Plan: What to Do Before Your Next Proposal" },
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

export default function Section889TelecomBanPage() {
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
            <span className="text-stone-900 font-medium">Section 889 Compliance</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Advanced Compliance
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Section 889 Compliance:{" "}
            <span className="gradient-text">The Telecom Ban That Can Get You Removed From a Contract</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Section 889 of the FY2019 NDAA prohibits federal contractors from using telecom and video surveillance
            equipment from five Chinese companies — and their subsidiaries. A false certification exposes you to the{" "}
            <strong className="text-stone-700">False Claims Act</strong>, contract termination, and potential
            debarment. Most contractors are one supply chain audit away from discovering a problem they didn&apos;t know
            they had.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 3, 2026</span>
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
          <SectionHeading id="what-889-prohibits" number="01" title="What Section 889 Actually Prohibits" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Section 889 of the John S. McCain National Defense Authorization Act for Fiscal Year 2019 does two
            distinct things. First, it bans the federal government from buying telecommunications equipment and video
            surveillance systems from five specific Chinese companies. Second — and this is where most contractors
            get tripped up — it bans the government from contracting with{" "}
            <strong>any company that uses that equipment</strong>, anywhere in their own business operations.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The second prohibition is not limited to what you deliver to the government. It covers your internal
            networks, your office security cameras, your phone system, your building access control — anything in
            your own environment. If your company runs a Hikvision camera over your server room, and you have a
            federal contract, you have a Section 889 problem.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The law defines covered equipment as &ldquo;telecommunications equipment or services that uses covered
            telecommunications equipment or services as a substantial or essential component of any system, or as
            critical technology as part of any system.&rdquo; That phrase &ldquo;substantial or essential component&rdquo; is
            important — a single banned component inside a larger system can make the entire system covered.
          </p>

          <Callout icon={AlertTriangle} color="amber" title="This isn't optional compliance">
            Section 889 isn&apos;t a reporting obligation with a grace period. Every time you submit a proposal or
            receive a contract modification, you certify compliance. A knowing false certification is a False
            Claims Act violation — not just an administrative error. The question isn&apos;t whether to comply;
            it&apos;s whether you can demonstrate that you already do.
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="five-banned-companies" number="02" title="The Five Banned Companies and Their Aliases" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Section 889 names five companies and extends the prohibition to all their subsidiaries and affiliates.
            Knowing only the five parent names isn&apos;t enough — the OEM web is wide, and many of these companies
            manufacture products sold under dozens of other brand names.
          </p>

          <div className="overflow-x-auto my-8 not-prose animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="text-left p-4 font-semibold">Company</th>
                  <th className="text-left p-4 font-semibold">Primary Products</th>
                  <th className="text-left p-4 font-semibold">Common OEM / Alias Brands</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Huawei Technologies",
                    "Networking equipment, routers, switches, 5G infrastructure",
                    "Honor (mobile), various ODM/OEM networking brands",
                  ],
                  [
                    "ZTE Corporation",
                    "Telecom equipment, routers, mobile devices, network switches",
                    "Various carrier-branded devices; ODM handsets",
                  ],
                  [
                    "Hytera Communications",
                    "Two-way radios, dispatch systems, body-worn cameras",
                    "Sold under carrier and reseller brands in the U.S. market",
                  ],
                  [
                    "Hangzhou Hikvision Digital Technology",
                    "IP cameras, NVRs, access control, video analytics",
                    "Annke, Alibi, EZVIZ, Lorex (select models), numerous white-label brands",
                  ],
                  [
                    "Dahua Technology",
                    "IP cameras, NVRs, video surveillance, access control",
                    "Amcrest, Lorex (select models), Imou, numerous OEM/white-label brands",
                  ],
                ].map(([company, products, aliases]) => (
                  <tr key={company as string} className="border-t border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-red-700">{company}</td>
                    <td className="p-4 text-stone-600">{products}</td>
                    <td className="p-4 text-stone-500 text-xs">{aliases}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The OEM alias problem is the biggest compliance trap of 2025 and 2026. Hikvision and Dahua together
            produce a substantial portion of the world&apos;s IP camera hardware. Cameras bearing U.S. or European
            brand names are frequently manufactured by Hikvision or Dahua at the hardware layer. The Section 889
            prohibition extends to &ldquo;any subsidiary or affiliate of such entities&rdquo; — which means the brand name
            on the box doesn&apos;t matter. What matters is who made the core hardware.
          </p>

          <Callout icon={Search} color="red" title="Brand name ≠ compliance">
            A camera labeled with an American brand purchased from a mainstream U.S. retailer may still be
            Hikvision or Dahua hardware underneath. The December 2026 deadline for facility audits means you need
            to verify the actual manufacturer of every surveillance device in your environment — not just
            the label on the front.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="part-a-vs-part-b" number="03" title="Part A vs. Part B: Two Separate Problems" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Section 889 is divided into two sub-prohibitions, each with its own effective date, scope, and
            practical compliance requirements. Most coverage online conflates them. You need to understand both
            separately because they trigger different compliance obligations.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 my-8 not-prose animate-on-scroll">
            <div className="border border-stone-200 rounded-2xl p-6 bg-amber-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">
                  <span className="text-xs font-black text-amber-700">A</span>
                </div>
                <p className="font-black text-stone-900">Section 889(a)(1)(A) — Part A</p>
              </div>
              <p className="text-xs text-stone-500 font-semibold uppercase tracking-wide mb-2">
                Effective: August 13, 2019
              </p>
              <p className="text-sm text-stone-700 mb-3">
                <strong>What it bans:</strong> The federal government from directly procuring covered
                telecommunications equipment or services.
              </p>
              <p className="text-sm text-stone-700 mb-3">
                <strong>Who it targets:</strong> Federal agencies, not contractors directly — but any contractor
                delivering covered equipment to the government violates this through their agency customer.
              </p>
              <p className="text-sm text-stone-600">
                <strong>FAR clause:</strong> 52.204-25
              </p>
            </div>

            <div className="border border-stone-200 rounded-2xl p-6 bg-red-50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-red-100 border border-red-300 flex items-center justify-center">
                  <span className="text-xs font-black text-red-700">B</span>
                </div>
                <p className="font-black text-stone-900">Section 889(a)(1)(B) — Part B</p>
              </div>
              <p className="text-xs text-stone-500 font-semibold uppercase tracking-wide mb-2">
                Effective: August 13, 2020 (DoD: October 1, 2022)
              </p>
              <p className="text-sm text-stone-700 mb-3">
                <strong>What it bans:</strong> The federal government from contracting with any entity that
                uses covered telecom equipment or services{" "}
                <em>anywhere in its own operations</em>.
              </p>
              <p className="text-sm text-stone-700 mb-3">
                <strong>Who it targets:</strong> Every federal contractor and subcontractor. Your internal
                systems — not just what you deliver — must be clean.
              </p>
              <p className="text-sm text-stone-600">
                <strong>FAR clause:</strong> 52.204-26
              </p>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Part B is the one that surprises people. Under Part A, the question is whether you&apos;re delivering
            banned equipment to the government. Part B asks whether you&apos;re <em>using</em> banned equipment
            anywhere in your company. A router from Huawei in your IT closet. A Dahua camera over your
            warehouse loading dock. A ZTE handset issued to an employee. All of these can create a Part B
            violation — even if your government deliverables are spotless.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The DoD received a waiver from the Director of National Intelligence for Part B when it first took
            effect in August 2020. That waiver expired on October 1, 2022. Since then, full Part B compliance
            has been mandatory for all DoD contractors — no exceptions, no grace period.
          </p>

          {/* CTA 1 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 my-10 not-prose animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-xl p-3 shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">
                  Check your contract compliance posture free
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  CapturePilot&apos;s Quick Checker flags compliance requirements, certifications, and risk factors
                  for your business profile — including NDAA and supply chain obligations.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading id="far-clauses" number="04" title="The Three FAR Clauses You're Already Certifying" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Three{" "}
            <Link href="/blog/far-clauses-small-business" className="text-blue-600 hover:underline">
              FAR clauses
            </Link>{" "}
            implement Section 889 in contracts. If you have a federal contract issued after August 2019,
            at least one of these clauses is in it. Understanding what each one requires helps you
            understand exactly what you&apos;re certifying every time you sign a contract or submit a proposal.
          </p>

          <div className="space-y-5 my-8 not-prose animate-on-scroll">
            {[
              {
                clause: "FAR 52.204-24",
                name: "Representation and Disclosures Regarding Telecommunications and Video Surveillance",
                detail:
                  "A representation clause included in solicitations. Before award, you certify whether your company provides or uses covered telecommunications equipment or services. This is the pre-award checkpoint. A false representation here is a False Claims Act exposure from the moment you sign the offer.",
                icon: FileText,
              },
              {
                clause: "FAR 52.204-25",
                name: "Prohibition on Contracting for Certain Telecommunications and Video Surveillance (Part A)",
                detail:
                  "The core Part A prohibition clause in the contract itself. It prohibits you from providing covered equipment or services to the government as part of contract performance. Requires you to report any discovery of covered equipment within 1 business day to the contracting officer, and submit a mitigation plan within 10 business days.",
                icon: Lock,
              },
              {
                clause: "FAR 52.204-26",
                name: "Covered Telecommunications Equipment or Services — Representation (Part B)",
                detail:
                  "The Part B representation. You certify that your company does not use covered telecommunications equipment or services in your own operations. Included in all solicitations that also include 52.204-25. This is what makes your internal IT environment a compliance issue, not just what you deliver.",
                icon: Shield,
              },
            ].map((item) => (
              <div key={item.clause} className="flex gap-4 p-5 bg-white border border-stone-200 rounded-xl hover-lift">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5 shrink-0 h-fit">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-black text-stone-900 text-sm">{item.clause}</span>
                    <span className="text-xs text-stone-500 font-medium">{item.name}</span>
                  </div>
                  <p className="text-sm text-stone-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One practical note: these clauses flow down to subcontractors. If you&apos;re a prime contractor, you
            must include equivalent provisions in your subcontracts, and your subcontractors must comply too.
            A subcontractor running banned equipment creates a prime contractor compliance problem. Your
            supply chain liability doesn&apos;t end at your company&apos;s walls.
          </p>

          {/* Section 5 */}
          <SectionHeading id="representation-risk" number="05" title="The Certification Risk Every Bidder Faces" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Every time you submit a proposal, you&apos;re making a representation in SAM.gov and in the solicitation
            response: you either use covered telecommunications equipment or you don&apos;t. That representation is
            your legal assertion. If it turns out to be wrong — even because you didn&apos;t know — you have a
            problem. If it turns out to be wrong and you did know, you have a False Claims Act problem.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The FCA is the federal government&apos;s primary anti-fraud tool. As of July 2025, civil penalties range
            from <strong>$14,308 to $28,619 per violation</strong>, plus three times the government&apos;s actual
            damages. In a contract worth $500,000, three times damages plus per-claim penalties can wipe out
            years of revenue. The DOJ reported nearly 1,000 qui tam (whistleblower) actions in FY2024 — a
            37 percent increase from the prior year. Section 889 false certifications are exactly the kind
            of case these suits target.
          </p>

          <Callout icon={AlertCircle} color="red" title="Subcontractors can trigger FCA liability for primes">
            If your subcontractor certifies compliance and isn&apos;t, and you include their certification in your
            prime contract representations without independent verification, you share the exposure. The
            government doesn&apos;t just pursue the subcontractor — it pursues whoever signed the prime
            contract. Verify your subs&apos; Section 889 status the same way you verify your own.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Beyond the FCA, non-compliance triggers two other consequences that matter practically:{" "}
            <strong>contract termination for default</strong> and{" "}
            <strong>suspension or debarment</strong>. Termination for default creates a negative{" "}
            <Link href="/blog/cpars-contractor-performance" className="text-blue-600 hover:underline">
              CPARS performance record
            </Link>{" "}
            that damages every future proposal. Debarment removes you from the federal market entirely for
            years. The Section 889 exposure isn&apos;t a fine you absorb — it&apos;s a business-ending risk if mishandled.
            More on what happens in practice in Section 9.
          </p>

          {/* Section 6 */}
          <SectionHeading id="reasonable-inquiry" number="06" title="How to Conduct a Reasonable Inquiry" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The FAR standard for Section 889 compliance is a &ldquo;reasonable inquiry&rdquo; — not a full-scale third-party
            audit. A reasonable inquiry is defined as one &ldquo;designed to uncover any information in the entity&apos;s
            possession about the identity of the producer or provider of covered telecommunications equipment or
            services used by the entity.&rdquo; You don&apos;t have to hire an outside auditor. But you do have to do
            something documented and defensible.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Here&apos;s a six-step process that satisfies the reasonable inquiry standard and produces the
            documentation you&apos;d need if someone ever questioned your certification:
          </p>

          <div className="space-y-4 my-8 not-prose animate-on-scroll">
            {[
              {
                step: "1",
                title: "Inventory all telecom and video surveillance equipment",
                detail:
                  "Document every router, switch, IP camera, NVR, two-way radio, VoIP device, and building access control system your company uses. Include manufacturer, model number, and purchase date. Cloud-based systems count too — identify the hardware infrastructure your vendors use.",
              },
              {
                step: "2",
                title: "Identify manufacturers at the hardware level, not the brand level",
                detail:
                  "For each device, research the actual manufacturer — not just the brand name on the label. Look up the model number against Hikvision, Dahua, Huawei, ZTE, and Hytera OEM/ODM product lines. A useful resource: IPVM's OEM tracker, which documents which brands source hardware from covered manufacturers.",
              },
              {
                step: "3",
                title: "Check subsidiaries and affiliates",
                detail:
                  "The prohibition covers the named companies plus any subsidiary or affiliate. EZVIZ is a subsidiary of Hikvision. Imou is a brand of Dahua. If you identify equipment from an entity that might be affiliated with the five, research the corporate ownership chain before concluding it's compliant.",
              },
              {
                step: "4",
                title: "Flow down to subcontractors and suppliers",
                detail:
                  "Send written inquiries to key subcontractors asking them to confirm their Section 889 status and provide documentation. Keep records of their responses. If a subcontractor can't confirm compliance, escalate or replace them before you certify on their behalf.",
              },
              {
                step: "5",
                title: "Document your process and findings in writing",
                detail:
                  "Write a short memo summarizing what you checked, how you checked it, and what you found. Include dates. This is your defense if a contracting officer or auditor ever questions your representation. No documentation means your verbal assertion that 'we checked' is worthless.",
              },
              {
                step: "6",
                title: "Establish an ongoing monitoring procedure",
                detail:
                  "Section 889 compliance isn't a one-time event. Equipment gets added. Vendors change their supply chains. New companies may be added to covered lists. Schedule a quarterly review of your inventory, and assign someone ownership of tracking regulatory updates.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                    {item.step}
                  </div>
                  {Number(item.step) < 6 && (
                    <div className="w-px h-8 bg-blue-200 mt-1" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Free tools help with the research step">
            The IPVM OEM database tracks which camera brands source from Hikvision and Dahua. The DoD&apos;s
            Defense Acquisition University has published a Section 889 resource page with vendor guidance.
            GSA also maintains Section 889 compliance resources at acquisition.gov/Section-889-Policies.
            Use these before spending money on consultants.
          </Callout>

          {/* Section 7 */}
          <SectionHeading id="white-label-trap" number="07" title="The White-Label Trap: Where Companies Get Caught" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            According to supply chain compliance reporting in 2025 and 2026, the most common source of
            Section 889 non-compliance findings isn&apos;t deliberate purchasing of Hikvision or Dahua cameras. It&apos;s
            inherited inventory: cameras installed before 2019, cameras acquired through business acquisitions,
            and cameras sold under U.S. or European brand names that are manufactured by Hikvision or Dahua
            as the original equipment manufacturer.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            This isn&apos;t just a physical security camera problem. It applies across the entire covered product
            category: networking equipment that ships under a telecom carrier&apos;s brand but uses Huawei components
            internally, two-way radio systems that are Hytera hardware sold through a domestic reseller, and
            building automation systems with ZTE communication modules embedded inside.
          </p>

          <div className="space-y-4 my-8 not-prose animate-on-scroll">
            {[
              {
                icon: AlertTriangle,
                bg: "bg-amber-50 border-amber-200",
                iconColor: "text-amber-600",
                title: "The acquisition inheritance scenario",
                detail:
                  "Your company acquires a competitor or a facility. The prior owner ran Hikvision cameras throughout the building. You now own that equipment — and you are now using covered telecommunications equipment. If you certify Section 889 compliance without auditing what you acquired, you're potentially making a false certification.",
              },
              {
                icon: AlertTriangle,
                bg: "bg-amber-50 border-amber-200",
                iconColor: "text-amber-600",
                title: "The pre-2019 installation scenario",
                detail:
                  "Equipment purchased and installed before August 13, 2019 is still covered equipment. The law doesn't grandfather old purchases. If it's in your building and it's a covered product, you are 'using' it for purposes of Section 889(a)(1)(B). Age doesn't make it compliant.",
              },
              {
                icon: AlertTriangle,
                bg: "bg-amber-50 border-amber-200",
                iconColor: "text-amber-600",
                title: "The cloud and managed service scenario",
                detail:
                  "If your security camera system is managed by a third-party provider — a physical security firm, a building management company — and they use Hikvision or Dahua infrastructure, you may be \"using\" covered equipment through that vendor relationship. Ask your managed service providers for their Section 889 compliance documentation.",
              },
              {
                icon: AlertTriangle,
                bg: "bg-amber-50 border-amber-200",
                iconColor: "text-amber-600",
                title: "The facility expansion scenario",
                detail:
                  "When you open a new office or move into a co-working space or leased facility, the building's existing camera and communication systems may include covered equipment — even if your own company equipment is clean. Understand who controls the infrastructure at every location where your employees work.",
              },
            ].map((item) => (
              <div key={item.title} className={`flex gap-4 p-5 border rounded-xl ${item.bg}`}>
                <item.icon className={`w-5 h-5 ${item.iconColor} shrink-0 mt-0.5`} />
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            If you find covered equipment in your environment, you have a path forward. You can disclose it to
            your contracting officer, develop a remediation plan with a realistic timeline, and in some cases
            obtain a waiver. Proactive disclosure is treated far differently from discovered concealment.
            The contractor who finds a problem and tells the government immediately is in a very different
            position than the contractor whose covered equipment is discovered during an audit.
          </p>

          {/* Section 8 */}
          <SectionHeading id="2025-2026-expansion" number="08" title="2025–2026 Expansion: Drones and New Entities" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Section 889&apos;s covered list has grown. On December 22, 2025, the FCC added all foreign-produced
            uncrewed aircraft systems (UAS) and UAS critical components to the covered list, acting under
            Section 1709 of the FY2025 NDAA. The FCC specifically named{" "}
            <strong>DJI Technologies (Shenzhen Da-Jiang Innovations)</strong> and <strong>Autel Robotics</strong> as
            covered entities — along with any subsidiary, affiliate, partner, joint venture participant, or
            licensee of either company.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The scope goes beyond just those two companies. The listing broadly covers UAS and UAS critical
            components &ldquo;produced in&rdquo; a foreign country — which captures a wide range of drone platforms and
            components. For government contractors that operate commercial drones for site surveys, mapping,
            inspections, or delivery — this is a new compliance obligation that wasn&apos;t there a year ago.
          </p>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-3 gap-4 my-8 not-prose animate-on-scroll">
            {[
              { label: "Original ban effective", value: "Aug 2019", sub: "Part A: What you deliver" },
              { label: "Part B full effect", value: "Oct 2022", sub: "What you use internally" },
              { label: "Facility audit deadline", value: "Dec 2026", sub: "Cameras and surveillance" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center hover-lift"
              >
                <p className="text-3xl font-black text-red-700 mb-1">{stat.value}</p>
                <p className="font-semibold text-stone-800 text-sm">{stat.label}</p>
                <p className="text-xs text-stone-500 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The practical implication for contractors: if your company uses DJI drones for any commercial
            purpose, you need to assess whether that use is consistent with your federal contract obligations.
            Companies that use DJI equipment for facility inspections, infrastructure monitoring, or aerial
            photography now have a Section 889 question to answer before submitting proposals.
          </p>

          <Callout icon={Zap} color="sky" title="What 'produced in a foreign country' means for UAS">
            The FCC&apos;s December 2025 listing creates some uncertainty about which specific components trigger
            coverage. A drone assembled in the U.S. with foreign-made components may still be covered
            depending on the component in question. If you operate any commercial UAS, document the
            manufacturing origin of the complete system and its communications components. The safe
            path is verified U.S. manufacture or explicit agency guidance that your specific platform is
            compliant.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The FCC update also maintains and expands restrictions on video surveillance equipment from the
            original five companies. Late 2025 and early 2026 saw significant enforcement action — major
            retailers facing delistings, availability changes, and intensified agency scrutiny of physical
            security infrastructure. The December 2026 facility audit deadline for contractors is directly
            tied to this escalating enforcement environment.
          </p>

          {/* Section 9 */}
          <SectionHeading id="consequences" number="09" title="What Happens When You're Non-Compliant" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Non-compliance paths have four distinct consequences, and they can stack. Understanding each one
            helps you calibrate the actual risk and prioritize your remediation efforts.
          </p>

          <div className="space-y-5 my-8 not-prose animate-on-scroll">
            {[
              {
                icon: XCircle,
                color: "text-red-500",
                bg: "bg-red-50 border-red-200",
                title: "Contract award denial",
                detail:
                  "If your Section 889 representation during proposal reveals covered equipment usage and you can't remediate before award, the contracting officer cannot award you the contract. This is the most common immediate consequence — not a penalty, but a lost opportunity.",
              },
              {
                icon: XCircle,
                color: "text-red-500",
                bg: "bg-red-50 border-red-200",
                title: "Contract termination for default",
                detail:
                  "If covered equipment is discovered during contract performance, the government can terminate for default. Unlike termination for convenience (which provides some cost recovery), termination for default gives the government the right to hold you liable for excess reprocurement costs and creates a negative performance record in CPARS that follows every future proposal.",
              },
              {
                icon: XCircle,
                color: "text-red-500",
                bg: "bg-red-50 border-red-200",
                title: "False Claims Act civil action",
                detail:
                  "A knowing false certification under FAR 52.204-24 or 52.204-26 is a False Claims Act violation. Civil penalties run $14,308 to $28,619 per violation (as of 2025), plus three times the government's damages. With DOJ FCA enforcement up 37 percent in FY2024 and qui tam actions at a record high, Section 889 is exactly the kind of case whistleblowers and the DOJ pursue.",
              },
              {
                icon: XCircle,
                color: "text-red-500",
                bg: "bg-red-50 border-red-200",
                title: "Suspension or debarment",
                detail:
                  "In serious cases — particularly where the non-compliance was knowing or repeated — the government can suspend or debar a contractor. Suspension is immediate removal from the market pending investigation. Debarment is a multi-year exclusion from all federal contracting. Either shows up in SAM.gov and is visible to every agency. See our full guide on avoiding debarment.",
              },
            ].map((item) => (
              <div key={item.title} className={`flex gap-4 p-5 border rounded-xl ${item.bg}`}>
                <item.icon className={`w-5 h-5 ${item.color} shrink-0 mt-0.5`} />
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The good news: there is a waiver process. The heads of federal agencies can grant waivers in
            limited circumstances — where a contractor can demonstrate a compelling reason for needing
            additional time, provide a &ldquo;laydown&rdquo; (inventory) of covered equipment in their supply chain,
            and submit a credible phase-out plan. However, the agency-head waiver authority expired in
            August 2022. The only remaining waiver authority sits with the Director of National Intelligence
            (DNI), which is a high bar and a slow process. Waivers are emergency tools, not compliance
            strategies.
          </p>

          <Callout icon={Shield} color="blue" title="Proactive disclosure changes the calculus dramatically">
            The contractor who discovers covered equipment and reports it to the contracting officer within
            one business day — as required by FAR 52.204-25(d) — is in a fundamentally different position
            than one whose equipment is found in a government audit. Proactive disclosure enables a remediation
            conversation. Discovered concealment triggers enforcement. If you find something, report it.
          </Callout>

          {/* CTA 2 */}
          <div className="border border-stone-200 rounded-2xl p-8 my-10 not-prose bg-stone-50 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-xl p-3 shrink-0">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track compliance requirements alongside your opportunities
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/intelligence" className="text-blue-600 hover:underline">
                    intelligence engine
                  </Link>{" "}
                  surfaces regulatory requirements and compliance flags for each opportunity you&apos;re pursuing —
                  so you know about Section 889, CMMC, and other obligations before you write the{" "}
                  <Link href="/features/proposals" className="text-blue-600 hover:underline">
                    proposal
                  </Link>
                  , not after.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <SectionHeading id="action-plan" number="10" title="Action Plan: What to Do Before Your Next Proposal" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            If you haven&apos;t done a formal Section 889 review, here&apos;s the sequence of steps to get compliant
            before your next federal proposal. These are prioritized by the most common failure modes — address
            them in order.
          </p>

          <div className="overflow-x-auto my-8 not-prose animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="text-left p-4 font-semibold w-12">Priority</th>
                  <th className="text-left p-4 font-semibold">Action</th>
                  <th className="text-left p-4 font-semibold">Who</th>
                  <th className="text-left p-4 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "1",
                    "Inventory all physical security cameras — identify manufacturer at hardware level",
                    "IT / Facilities",
                    "This week",
                  ],
                  [
                    "2",
                    "Audit networking equipment: routers, switches, VoIP systems for Huawei/ZTE components",
                    "IT",
                    "Within 2 weeks",
                  ],
                  [
                    "3",
                    "Audit two-way radio / dispatch systems for Hytera hardware",
                    "Operations / IT",
                    "Within 2 weeks",
                  ],
                  [
                    "4",
                    "Send Section 889 compliance inquiries to all subcontractors with written response required",
                    "Contracts / Procurement",
                    "Within 30 days",
                  ],
                  [
                    "5",
                    "Assess any commercial drone programs for DJI / Autel equipment (post-Dec 2025 expansion)",
                    "Operations",
                    "Within 30 days",
                  ],
                  [
                    "6",
                    "Document findings in a written memo, signed and dated by responsible officer",
                    "Contracts / Legal",
                    "Before next proposal",
                  ],
                  [
                    "7",
                    "Remediate any found covered equipment — replace or obtain waiver if replacement isn't immediate",
                    "IT / Facilities",
                    "Per compliance deadline",
                  ],
                  [
                    "8",
                    "Update SAM.gov representations to reflect accurate Section 889 status",
                    "Contracts",
                    "After remediation",
                  ],
                  [
                    "9",
                    "Build a quarterly review cycle — assign ownership, calendar next review",
                    "Compliance Owner",
                    "Ongoing",
                  ],
                ].map(([priority, action, who, timeline]) => (
                  <tr key={priority as string} className="border-t border-stone-100 hover:bg-stone-50">
                    <td className="p-4">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center">
                        {priority}
                      </span>
                    </td>
                    <td className="p-4 text-stone-700">{action}</td>
                    <td className="p-4 text-stone-500">{who}</td>
                    <td className="p-4 text-stone-500 font-medium">{timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The December 2026 facility audit deadline for video surveillance equipment means the clock is
            running. That deadline isn&apos;t the time to start your compliance review — it&apos;s the time to finish it.
            If you find covered cameras and need to replace them, physical security system replacements take
            weeks to procure and install. Starting now gives you time to replace without rushing.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Section 889 sits alongside{" "}
            <Link href="/blog/cmmc-compliance-dod-contractors" className="text-blue-600 hover:underline">
              CMMC 2.0
            </Link>{" "}
            as one of the two major compliance requirements that DoD contractors must address before the end
            of 2026. The companies that get ahead of both will be better positioned for award — and the ones
            that get caught flat-footed will have more to explain to contracting officers than they want to.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Your{" "}
            <Link href="/features/proposals" className="text-blue-600 hover:underline">
              proposal
            </Link>{" "}
            is only as strong as your compliance posture. A strong technical volume and competitive price mean
            nothing if your Section 889 representation is false. Build the compliance work into your
            pre-proposal checklist — alongside your{" "}
            <Link href="/resources/bid-checklist" className="text-blue-600 hover:underline">
              bid checklist
            </Link>{" "}
            — so it&apos;s never an afterthought.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 my-12 not-prose animate-on-scroll">
            <div className="text-center">
              <p className="text-blue-400 font-semibold text-sm mb-3">
                Ready to track compliance requirements with your pipeline?
              </p>
              <h3 className="text-2xl font-black text-white mb-3">
                CapturePilot flags Section 889 and other compliance obligations before you bid
              </h3>
              <p className="text-stone-400 text-sm mb-6 max-w-xl mx-auto">
                Our{" "}
                <Link href="/features/intelligence" className="text-blue-400 hover:text-blue-300 underline">
                  intelligence engine
                </Link>{" "}
                surfaces regulatory requirements, compliance flags, and risk factors alongside every opportunity —
                so you know what you&apos;re getting into before you commit the proposal resources. No more finding out
                about Section 889 in the contract clause stack after award.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Start 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-stone-200 pt-12 not-prose animate-on-scroll">
            <h3 className="text-lg font-black text-stone-900 mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/cmmc-compliance-dod-contractors",
                  title: "CMMC 2.0 Compliance",
                  desc: "What every DoD contractor must know before the deadline",
                },
                {
                  href: "/blog/far-clauses-small-business",
                  title: "Key FAR Clauses for Small Business",
                  desc: "The contract clauses that matter most",
                },
                {
                  href: "/blog/government-contractor-debarment",
                  title: "Government Contractor Debarment",
                  desc: "How to avoid it and what to do if it happens",
                },
                {
                  href: "/blog/dod-contracts-small-business",
                  title: "DoD Contracts for Small Business",
                  desc: "Where to start with Department of Defense work",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-start gap-3 p-4 border border-stone-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{link.title}</p>
                    <p className="text-xs text-stone-500">{link.desc}</p>
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
