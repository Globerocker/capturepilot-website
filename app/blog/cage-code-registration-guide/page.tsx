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
  Building2,
  Search,
  Shield,
  FileText,
  Globe,
  Clock,
  Key,
  RefreshCw,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-cage-code", label: "What Is a CAGE Code (and What It's Not)" },
  { id: "cage-vs-uei", label: "CAGE Code vs. UEI: Two Different Identifiers" },
  { id: "how-assigned", label: "How Your CAGE Code Gets Assigned Through SAM.gov" },
  { id: "where-it-appears", label: "Where Your CAGE Code Shows Up on Contracts" },
  { id: "lookup", label: "CAGE Code Lookup: Find Competitors and Incumbents" },
  { id: "ncage", label: "NCAGE Codes for Non-US Contractors" },
  { id: "problems", label: "Common CAGE Code Problems and How to Fix Them" },
  { id: "next-steps", label: "Putting Your CAGE Code to Work" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "rose";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    rose: "bg-rose-50 border-rose-200 text-rose-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    rose: "text-rose-600",
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

export default function CageCodeRegistrationGuidePage() {
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
            <span className="text-stone-900 font-medium">CAGE Code Registration Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Key className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            CAGE Code Registration:{" "}
            <span className="gradient-text">What It Is, How to Get One, and Why It Matters</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            A <strong className="text-stone-700">5-character alphanumeric code</strong> stands between
            your business and your first federal contract. It&apos;s called a CAGE code, it&apos;s free, and
            you get it automatically when you register in SAM.gov — if you know what you&apos;re doing.
            Here&apos;s everything that goes into it.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>10 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published September 11, 2026</span>
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
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <SectionHeading id="what-is-cage-code" number="01" title="What Is a CAGE Code (and What It's Not)" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              CAGE stands for <strong>Commercial and Government Entity</strong>. It&apos;s a five-character
              alphanumeric identifier — something like <code className="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-sm">1ABX3</code> —
              assigned by the Defense Logistics Agency (DLA) to uniquely identify a business at a specific physical location.
              The code does one thing: it tells the government exactly which facility it&apos;s dealing with.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That precision matters more than it sounds. The DoD, in particular, routes contracts,
              payments, logistics, and security clearances through CAGE codes. If your code is wrong
              or missing, documents get rejected, payments stall, and clearance updates fail. It&apos;s a
              small piece of data that touches almost every administrative function in federal contracting.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              One thing it&apos;s <em>not</em>: a substitute for registering in SAM.gov. The CAGE code is
              one output of SAM.gov registration, not an alternative to it. You need an active SAM.gov
              registration — with your CAGE code embedded — to appear on federal solicitations, receive
              awards, and get paid. More on the sequencing below.
            </p>
          </div>

          <Callout icon={Key} color="blue" title="CAGE Code at a Glance">
            <ul className="space-y-1 mt-1">
              <li><strong>Format:</strong> 5 characters, alphanumeric (letters and numbers, no special characters)</li>
              <li><strong>Assigned by:</strong> Defense Logistics Agency (DLA) CAGE Branch</li>
              <li><strong>Cost:</strong> Free — always has been, always will be</li>
              <li><strong>How you get it:</strong> Automatically during SAM.gov entity registration</li>
              <li><strong>Lookup tool:</strong> cage.dla.mil (free, public, no account required)</li>
              <li><strong>Tied to:</strong> A specific legal entity at a specific physical address</li>
            </ul>
          </Callout>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              A single company can have multiple CAGE codes — one per registered facility. If your
              headquarters is in Dallas and you operate a separate facility in Reston, Virginia that
              handles government work, each location can have its own code. This matters for DoD
              contracts where the place of performance is tied to a specific site, and for facility
              security clearances (FSCs), which are always tied to a CAGE code.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading id="cage-vs-uei" number="02" title="CAGE Code vs. UEI: Two Different Identifiers" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              New contractors get confused here constantly. The short answer: you need both, they
              serve different purposes, and they come from different places — even though you get both
              through SAM.gov registration.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The <strong>UEI (Unique Entity Identifier)</strong> is a 12-character alphanumeric code
              that replaced DUNS numbers in April 2022. It&apos;s administered through SAM.gov and identifies
              your <em>business entity</em> across the entire federal government — not just DoD. Every
              federal agency, every grant-making body, every contracting office uses the UEI as the
              primary hook to find your entity record.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The <strong>CAGE code</strong>, by contrast, is a DoD-specific identifier administered by
              the DLA. It identifies your business <em>at a specific location</em>. The UEI says who you
              are; the CAGE code says which facility of yours the government is transacting with.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Identifier</th>
                  <th className="px-4 py-3 text-left font-semibold">Format</th>
                  <th className="px-4 py-3 text-left font-semibold">Assigned By</th>
                  <th className="px-4 py-3 text-left font-semibold">Primary Use</th>
                  <th className="px-4 py-3 text-left font-semibold">Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">UEI</td>
                  <td className="px-4 py-3 text-stone-700">12 alphanumeric chars</td>
                  <td className="px-4 py-3 text-stone-700">SAM.gov (GSA)</td>
                  <td className="px-4 py-3 text-stone-700">Entity identification, contract awards, grants</td>
                  <td className="px-4 py-3 text-stone-700">Whole federal government</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">CAGE Code</td>
                  <td className="px-4 py-3 text-stone-700">5 alphanumeric chars</td>
                  <td className="px-4 py-3 text-stone-700">DLA CAGE Branch</td>
                  <td className="px-4 py-3 text-stone-700">DoD contracts, logistics, security clearances, WAWF invoicing</td>
                  <td className="px-4 py-3 text-stone-700">DoD-centric, specific facility</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">NCAGE</td>
                  <td className="px-4 py-3 text-stone-700">5 alphanumeric chars</td>
                  <td className="px-4 py-3 text-stone-700">NATO NSPA</td>
                  <td className="px-4 py-3 text-stone-700">Same as CAGE, for non-US entities</td>
                  <td className="px-4 py-3 text-stone-700">International / NATO</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              On a typical federal contract award, you&apos;ll see both identifiers: your UEI identifies
              you on USASpending.gov and in the SAM.gov entity record, while your CAGE code appears
              in the contract document itself, on DD250 receiving/acceptance forms, and in Wide Area
              WorkFlow (WAWF) — the DoD&apos;s invoicing system. Miss either one and your paperwork fails.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Watch Out: DUNS Is Gone">
            DUNS numbers — the 9-digit identifiers from Dun &amp; Bradstreet — were fully retired from
            the federal contracting system in April 2022. If you&apos;re still referencing a DUNS number
            anywhere, update your records. The UEI replaced it. The CAGE code was never replaced and
            remains separate.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="how-assigned" number="03" title="How Your CAGE Code Gets Assigned Through SAM.gov" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Here&apos;s the sequence. You do not apply for a CAGE code separately — it comes to you as
              part of the SAM.gov entity registration process. The DLA CAGE Branch sits behind the
              scenes and auto-assigns a code when the GSA validation engine clears your entity record.
            </p>
          </div>

          {/* Step-by-step */}
          <div className="my-8 space-y-4 animate-on-scroll">
            {[
              {
                step: "01",
                title: "Create a Login.gov account",
                detail: "SAM.gov requires a Login.gov account with identity verification. This is a federal single sign-on system — one account works across multiple government sites. The identity verification requires a government-issued ID and takes about 10 minutes.",
              },
              {
                step: "02",
                title: "Register your entity in SAM.gov",
                detail: "Navigate to SAM.gov and begin a new entity registration. You'll enter your legal business name, physical address, Tax Identification Number (TIN or EIN), business type, NAICS codes, and certifications. For domestic entities (US addresses), this is where the CAGE code process begins automatically.",
              },
              {
                step: "03",
                title: "IRS TIN matching and DLA CAGE assignment run in parallel",
                detail: "SAM.gov sends your tax ID to the IRS for matching. Simultaneously, it checks the DLA CAGE database. If your entity already has a CAGE code from prior registration or a DoD relationship, it links that code to your record. If not, the DLA CAGE Branch assigns a new code.",
              },
              {
                step: "04",
                title: "Wait for validation to complete",
                detail: "For a clean registration with no discrepancies, validation takes 7–15 business days — typically 2–4 weeks in practice. Any mismatch between your legal name on file with the IRS, your Secretary of State registration, and what you entered in SAM.gov slows this down significantly. Get these aligned before you start.",
              },
              {
                step: "05",
                title: "Activation — your CAGE code appears in your entity record",
                detail: "Once active, your CAGE code is visible in your SAM.gov entity record. You'll also receive a notification email. At this point you're award-ready: you can receive solicitations, submit bids on SAM.gov, and accept contract awards.",
              },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-black flex items-center justify-center">
                  {step}
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{title}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Clock} color="sky" title="Timeline Reality Check">
            The official estimate is 7–10 business days. The real-world average for new registrations
            in 2026 is closer to 2–4 weeks, sometimes longer if the IRS TIN match fails or your state
            incorporation records don&apos;t match exactly. Start your registration at least <strong>45 days
            before any contracting deadline</strong>. If you&apos;re responding to a solicitation, check the
            award timeline and register immediately — don&apos;t wait.
          </Callout>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              One recent change worth knowing: as of 2026, GSA has tightened SAM.gov validation
              significantly in response to widespread entity fraud. AI-driven cross-checks now compare
              your submitted data against IRS records, state Secretary of State filings, and the
              Federal Service Desk (FSD) database. Any discrepancy — including a slightly different
              legal name spelling, an old address on file at the IRS, or a mismatch in your business
              structure — triggers a manual review. This is why attorneys and GovCon consultants
              consistently recommend getting your entity data 100% consistent across all government
              systems before you register.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>One exception:</strong> entities registering for financial assistance awards only
              (grants, not contracts) no longer need a CAGE code in certain circumstances. If you&apos;re
              pursuing federal grants exclusively and meet the criteria, check the SAM.gov help documentation.
              But if you want to bid on any federal contract — including subcontracts — you need a CAGE code.
            </p>
          </div>

          {/* Inline CTA */}
          <div className="my-10 rounded-2xl bg-blue-600 text-white p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-black mb-2">Check Your Set-Aside Eligibility While You Wait</h3>
                <p className="text-blue-100 text-sm mb-4">
                  SAM.gov registration takes weeks. Use that time to confirm which set-aside programs your
                  business qualifies for — SDVOSB, WOSB, HUBZone, 8(a) — before you start bidding. Our
                  Quick Checker runs in under two minutes.
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
          <SectionHeading id="where-it-appears" number="04" title="Where Your CAGE Code Shows Up on Contracts" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Once you start winning contracts, your CAGE code appears in more places than you&apos;d
              expect. Knowing where helps you catch errors before they cause payment delays or compliance
              flags. Here&apos;s where it shows up:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                icon: FileText,
                title: "The Contract Award Document",
                body: "Block 17 of a standard DD-1155 or the contractor identification section of a civilian agency award. Contracting officers verify the CAGE code against SAM.gov before award. A mismatch causes rejection.",
                color: "blue",
              },
              {
                icon: FileText,
                title: "DD250 — Material Inspection and Receiving Report",
                body: "The DD250 is the DoD's shipment acceptance form for goods and services. Your CAGE code appears in Block 1. Without it, receiving officials can't process your delivery, which delays your invoice.",
                color: "emerald",
              },
              {
                icon: FileText,
                title: "Wide Area WorkFlow (WAWF) Invoices",
                body: "WAWF is the DoD's electronic invoicing system. Your CAGE code is required to create a vendor account and submit invoices. No CAGE = no invoice submission = no payment.",
                color: "sky",
              },
              {
                icon: Shield,
                title: "Facility Security Clearance (FCL)",
                body: "Your facility security clearance is permanently tied to your CAGE code. If your code changes due to a merger or relocation, the Defense Counterintelligence and Security Agency (DCSA) must be notified to transfer or re-tie the clearance.",
                color: "amber",
              },
              {
                icon: Globe,
                title: "Export Licenses (ITAR / EAR)",
                body: "The State Department's Directorate of Defense Trade Controls (DDTC) uses your CAGE code to identify you on ITAR export licenses. Defense exporters who omit or misstate their CAGE code on export documents face compliance violations.",
                color: "rose",
              },
              {
                icon: Search,
                title: "SAM.gov and USASpending.gov Public Records",
                body: "Every publicly-reported contract action on USASpending.gov and SAM.gov includes the awardee's CAGE code. Anyone — your competitors, agency program offices, prime contractors — can look you up by CAGE code in seconds.",
                color: "blue",
              },
            ].map(({ icon: Icon, title, body, color }) => {
              const borderColors: Record<string, string> = {
                blue: "border-blue-100 bg-blue-50",
                emerald: "border-emerald-100 bg-emerald-50",
                sky: "border-sky-100 bg-sky-50",
                amber: "border-amber-100 bg-amber-50",
                rose: "border-rose-100 bg-rose-50",
              };
              const iconColors: Record<string, string> = {
                blue: "text-blue-600",
                emerald: "text-emerald-600",
                sky: "text-sky-600",
                amber: "text-amber-600",
                rose: "text-rose-600",
              };
              return (
                <div key={title} className={`rounded-xl border p-5 ${borderColors[color]}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${iconColors[color]}`} />
                    <p className="font-bold text-sm text-stone-900">{title}</p>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{body}</p>
                </div>
              );
            })}
          </div>

          {/* Section 5 */}
          <SectionHeading id="lookup" number="05" title="CAGE Code Lookup: Finding Competitors and Incumbents" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              This is where things get tactically interesting. The CAGE Public Search tool at
              <strong> cage.dla.mil</strong> is free, requires no login, and lets you search by company
              name, CAGE code, UEI, physical address, phone number, state, or postal code. It returns
              the legal business name, address, and registration status for any CAGE code holder.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Why does that matter for your business development? Because every federal contract award
              on USASpending.gov includes the awardee&apos;s CAGE code. If you know who holds a contract
              you want to recompete, you can pull their CAGE code from the award data and look them
              up — confirming their current registration status, address, and whether they&apos;ve maintained
              their SAM.gov registration. A lapsed SAM registration makes them ineligible for the
              recompete. That&apos;s intelligence worth having.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Competitive Intelligence Play">
            Pull the CAGE code of any incumbent contractor from USASpending.gov or SAM.gov contract
            award data. Look them up on cage.dla.mil to verify their address and registration status.
            Cross-reference with their SAM.gov entity record to see their registered NAICS codes,
            certifications, and points of contact. Build this profile before you&apos;write your
            proposal and you&apos;ll understand exactly who you&apos;re displacing. See our guide on{" "}
            <Link href="/blog/track-government-contract-awards" className="underline font-medium">
              tracking government contract awards
            </Link>{" "}
            for the full process.
          </Callout>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              You can also use CAGE code lookups in reverse: if you receive a teaming inquiry from a
              company claiming a certain capability or size status, look up their CAGE code. It
              confirms their registered address (important for HUBZone eligibility claims), their
              active registration status, and whether their entity information is consistent with what
              they&apos;re telling you.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Prime contractors performing due diligence on subcontractors routinely do CAGE code
              verification. If you want to subcontract on government work, having a clean, active
              CAGE code that matches your SAM.gov registration exactly is a baseline requirement.
              Primes who find discrepancies between what you tell them and what the CAGE database shows
              will typically move to the next candidate.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading id="ncage" number="06" title="NCAGE Codes for Non-US Contractors" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              If your business is headquartered outside the United States, you use an NCAGE code —
              NATO Commercial and Government Entity code. The format is the same (5 alphanumeric
              characters), but it&apos;s administered by the NATO Support and Procurement Agency (NSPA)
              rather than the US DLA.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The process differs: international entities must request an NCAGE code directly from
              the NSPA before registering in SAM.gov. The timeline for NCAGE assignment varies by
              country and can range from one to four weeks. Once you have the NCAGE, you use it in
              place of a domestic CAGE code when completing your SAM.gov entity registration.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              International contractors pursuing US DoD contracts — including foreign companies
              responding to overseas base solicitations or participating in Foreign Military Sales
              (FMS) supply chains — will encounter NCAGE requirements regularly. Misunderstanding
              this distinction causes delays and rejections for international businesses new to US
              federal procurement.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading id="problems" number="07" title="Common CAGE Code Problems and How to Fix Them" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most CAGE code problems are really SAM.gov data problems. The CAGE code itself rarely
              changes once assigned — but your underlying entity data does, and when it drifts out of
              sync, problems surface in unexpected places.
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                problem: "SAM.gov registration expired — CAGE code is still active but you can't receive awards",
                fix: "Your CAGE code lives on even if your SAM registration lapses, but you cannot receive contract awards or payments on an expired SAM record. Renew SAM.gov annually — set a calendar reminder 60 days before expiration. See our guide on SAM.gov renewal for the full process.",
                severity: "high",
                link: "/blog/sam-gov-renewal-guide",
              },
              {
                problem: "Business name in SAM.gov doesn't match IRS or state records exactly",
                fix: "The DLA CAGE Branch validates your legal name against external databases. Even minor differences — 'Inc.' vs 'Incorporated', a comma placement, 'LLC' vs 'L.L.C.' — can flag a mismatch. Match exactly what your IRS determination letter shows.",
                severity: "high",
                link: null,
              },
              {
                problem: "Address change not updated across all systems",
                fix: "When you move, update SAM.gov immediately. Your CAGE code is tied to your registered address. Contracting officers and clearance officials rely on CAGE lookup to find your physical location. An outdated address can stall clearance updates and contract modifications.",
                severity: "medium",
                link: null,
              },
              {
                problem: "Multiple CAGE codes from past registrations or predecessor companies",
                fix: "If your business acquired another company or reorganized, you may have inherited old CAGE codes from prior entities. The DLA CAGE Branch can consolidate records, but it requires documentation of the business relationship. Don't just register a new SAM entity and assume old codes are irrelevant — they may still appear in award data.",
                severity: "medium",
                link: null,
              },
              {
                problem: "CAGE code not appearing in WAWF vendor profile",
                fix: "WAWF pulls CAGE data from SAM.gov, but there can be a lag. After your SAM registration activates, allow 24–72 hours before attempting WAWF setup. If your CAGE code still doesn't appear, contact the WAWF helpdesk (wawfhelp@disa.mil) with your UEI and CAGE code.",
                severity: "low",
                link: null,
              },
            ].map(({ problem, fix, severity, link }) => {
              const severityColors: Record<string, string> = {
                high: "bg-rose-50 border-rose-200",
                medium: "bg-amber-50 border-amber-200",
                low: "bg-sky-50 border-sky-200",
              };
              const badgeColors: Record<string, string> = {
                high: "bg-rose-100 text-rose-700",
                medium: "bg-amber-100 text-amber-700",
                low: "bg-sky-100 text-sky-700",
              };
              return (
                <div key={problem} className={`rounded-xl border p-5 ${severityColors[severity]}`}>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-stone-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColors[severity]}`}>
                          {severity.toUpperCase()} IMPACT
                        </span>
                      </div>
                      <p className="font-semibold text-stone-900 text-sm mb-1">{problem}</p>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        <strong>Fix:</strong> {fix}
                        {link && (
                          <>
                            {" "}
                            <Link href={link} className="underline text-blue-700">
                              Read the full guide.
                            </Link>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Callout icon={RefreshCw} color="sky" title="Keep Your Registration Current">
            SAM.gov registration must be renewed <strong>every 12 months</strong>. An expired registration
            makes you ineligible for awards, but your CAGE code remains assigned to your entity. The
            confusion between "I have a CAGE code" and "I am award-ready" trips up more businesses than
            you&apos;d think. Award-ready means active SAM.gov registration, not just an existing CAGE code.
          </Callout>

          {/* Section 8 */}
          <SectionHeading id="next-steps" number="08" title="Putting Your CAGE Code to Work" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Getting your CAGE code is step one of the federal contracting process, not the finish
              line. Once your SAM.gov registration is active and your CAGE code is assigned, here&apos;s
              what to do next:
            </p>
          </div>

          <div className="my-8 space-y-3 animate-on-scroll">
            {[
              {
                num: "1",
                action: "Verify your set-aside eligibility",
                detail: "Your SAM registration captures self-certifications, but eligibility for SDVOSB, WOSB, 8(a), and HUBZone programs requires additional verification. Use CapturePilot's Quick Checker to confirm which set-asides you qualify for — and which you're close on.",
                link: CHECK_URL,
                linkLabel: "Run eligibility check",
                external: true,
              },
              {
                num: "2",
                action: "Build your capability statement",
                detail: "Your CAGE code belongs on your capability statement alongside your UEI. Contracting officers and prime contractor BD teams expect to see it. A missing CAGE code on a capability statement signals inexperience.",
                link: "/features/capability-statement",
                linkLabel: "Build your capability statement",
                external: false,
              },
              {
                num: "3",
                action: "Set up SAM.gov opportunity notifications",
                detail: "Register for SAM.gov opportunity notifications filtered by your NAICS codes. Every solicitation posted publicly links to the contracting office — the same office that will see your CAGE code on your bid.",
                link: "/blog/sam-gov-search-tips",
                linkLabel: "SAM.gov search tips",
                external: false,
              },
              {
                num: "4",
                action: "Research incumbents on contracts you want",
                detail: "Use the CAGE code lookup at cage.dla.mil and the award data at USASpending.gov to profile who currently holds contracts in your space. Build your pipeline around recompetes — expiring contracts where the government already has a budget.",
                link: "/features/intelligence",
                linkLabel: "Explore CapturePilot Intelligence",
                external: false,
              },
              {
                num: "5",
                action: "Find matching opportunities automatically",
                detail: "Instead of manually scrolling SAM.gov, use CapturePilot to match open solicitations to your NAICS codes, certifications, and set-aside status — filtered to what you can actually win. Your CAGE code and SAM registration are the credentials that unlock those opportunities.",
                link: "/features/matching",
                linkLabel: "See opportunity matching",
                external: false,
              },
            ].map(({ num, action, detail, link, linkLabel, external }) => (
              <div key={num} className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-black flex items-center justify-center">
                  {num}
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{action}</p>
                  <p className="text-sm text-stone-600 leading-relaxed mb-2">{detail}</p>
                  {external ? (
                    <a
                      href={link}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      {linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={link}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      {linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Related Links */}
          <div className="my-10 animate-on-scroll">
            <h3 className="text-lg font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/sam-gov-renewal-guide", label: "SAM.gov Renewal Guide" },
                { href: "/blog/federal-contracting-certifications", label: "Federal Contracting Certifications That Help You Win" },
                { href: "/blog/sdvosb-contracts-guide", label: "SDVOSB Contracts Complete Guide" },
                { href: "/blog/how-to-find-government-contracts-small-business", label: "How to Find Government Contracts for Small Business" },
                { href: "/blog/capability-statement-examples", label: "Capability Statement Examples" },
                { href: "/blog/sba-size-standards-guide", label: "SBA Size Standards Guide 2026" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors p-3 rounded-lg bg-stone-50 border border-stone-200 hover:border-blue-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="my-10 rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 animate-on-scroll">
            <div className="text-center">
              <Building2 className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-stone-900 mb-3">
                Your CAGE code is step one. Here&apos;s what comes next.
              </h3>
              <p className="text-stone-600 text-sm mb-6 max-w-lg mx-auto">
                CapturePilot helps registered small businesses find and win federal contracts — matching
                opportunities to your NAICS codes and certifications, tracking incumbents, and
                managing your entire bid pipeline in one place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-700 border border-stone-200 font-semibold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
