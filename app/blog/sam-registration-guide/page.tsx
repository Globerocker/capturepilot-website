"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Lightbulb,
  Hash, BookOpen, ChevronRight, Globe, Sparkles, XCircle,
  Shield, FileText, Briefcase, Zap, DollarSign, Award,
  Building2, BadgeCheck, Clock, Search, UserCheck,
  RefreshCw, CreditCard, KeyRound, ClipboardList, Lock,
  Mail, Settings, CircleDot, Database,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

/* --- Table of Contents --- */
const TOC = [
  { id: "what-is-sam", label: "What Is SAM.gov?" },
  { id: "who-needs", label: "Who Needs to Register?" },
  { id: "prerequisites", label: "Prerequisites (Gather These First)" },
  { id: "registration-steps", label: "8-Step Registration Walkthrough" },
  { id: "common-issues", label: "Common Issues & Fixes" },
  { id: "timeline", label: "Timeline Estimates" },
  { id: "renewal", label: "Renewal Requirements" },
  { id: "next-steps", label: "Next Steps After Registration" },
];

/* --- Info Callout --- */
function Callout({ icon: Icon, color, title, children }: {
  icon: React.ElementType; color: "emerald" | "amber" | "sky";
  title: string; children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
  };
  const iconColors = { emerald: "text-emerald-600", amber: "text-amber-600", sky: "text-sky-600" };
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

/* --- Section Heading --- */
function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-6 pt-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

/* --- Page --- */
export default function SAMRegistrationGuidePage() {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll(".animate-on-scroll");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("animate-fade-in-up"); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* --- Hero --- */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">SAM.gov Registration Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Globe className="w-4 h-4" /> Step-by-Step Guide
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SAM.gov Registration:{" "}
            <span className="gradient-text">Step-by-Step Guide (2026)</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            SAM.gov registration is the #1 prerequisite for winning government contracts. Without it,
            you can&apos;t bid, you can&apos;t get paid, and you don&apos;t exist in the federal
            procurement ecosystem. This guide walks you through every step.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Updated April 2026</span>
          </div>
        </div>
      </section>

      {/* --- Table of Contents --- */}
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-700 transition-colors py-1"
                >
                  <span className="text-emerald-600 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* --- Article Body --- */}
      <article ref={articleRef} className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* --- What Is SAM.gov? --- */}
          <SectionHeading id="what-is-sam" number="01" title="What Is SAM.gov?" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov (<strong>System for Award Management</strong>) is the federal government&apos;s
              official database for contractor registration. It consolidates what used to be several
              separate systems &mdash; CCR, ORCA, EPLS, and FedReg &mdash; into a single platform.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov serves three critical functions:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-6">
              {[
                { icon: Building2, title: "Entity Registration", desc: "Your official contractor profile with business details, NAICS codes, certifications, and contact information." },
                { icon: Search, title: "Contract Opportunities", desc: "Where agencies post solicitations, RFPs, RFQs, and Sources Sought notices. Formerly FBO.gov." },
                { icon: Database, title: "Exclusion Records", desc: "The government's 'do not do business with' list. Debarred or suspended entities are listed here." },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-7 h-7 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-stone-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Registration is <strong>completely free</strong>. If anyone charges you for SAM.gov
              registration, they are scamming you. The government provides the service at no cost.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Scam Warning">
            There are companies that charge $400-$2,000 to &quot;register you on SAM.gov.&quot; This
            is predatory. SAM.gov registration is free. You can do it yourself in 1-2 hours. Don&apos;t
            pay someone to fill out a free form.
          </Callout>

          {/* --- Who Needs to Register? --- */}
          <SectionHeading id="who-needs" number="02" title="Who Needs to Register?" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              <strong>Every business</strong> that wants to do any of the following must be registered
              on SAM.gov:
            </p>

            <div className="space-y-3 mb-6">
              {[
                "Bid on federal contracts (prime or subcontracts over $35K)",
                "Receive payments from the federal government",
                "Apply for federal grants or financial assistance",
                "Register for GSA Schedules or GWACs",
                "Get listed as a verified contractor for agencies to find",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 animate-on-scroll">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-stone-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              If you&apos;re a subcontractor on contracts under $35,000, SAM.gov registration is
              not technically required &mdash; but most prime contractors will still require it.
              Bottom line: if you&apos;re in GovCon, register.
            </p>
          </div>

          {/* --- Prerequisites --- */}
          <SectionHeading id="prerequisites" number="03" title="Prerequisites (Gather These First)" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Before you start the registration process, gather these items. Having everything ready
              will cut your registration time from hours to about 45 minutes:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  icon: BadgeCheck, title: "Unique Entity ID (UEI)",
                  desc: "You'll request this during SAM.gov registration. It replaces the old DUNS number. The system generates it automatically, but validation can take 2-3 business days.",
                  status: "Generated during registration",
                },
                {
                  icon: KeyRound, title: "CAGE Code",
                  desc: "Commercial and Government Entity code. If you don't have one, SAM.gov will assign one during registration. If you already have one (from previous defense work), have it ready.",
                  status: "Auto-assigned if new",
                },
                {
                  icon: CreditCard, title: "Banking Information",
                  desc: "Your business bank account routing number and account number. The government uses EFT (Electronic Funds Transfer) for all payments. Personal accounts are not accepted for most registrations.",
                  status: "Required — have it ready",
                },
                {
                  icon: Hash, title: "NAICS Codes",
                  desc: "Identify 3-8 NAICS codes that describe your business. These determine which opportunities match your profile and your small business size standard.",
                  status: "Research beforehand",
                },
                {
                  icon: Building2, title: "EIN (Employer Identification Number)",
                  desc: "Your federal tax ID number from the IRS. Sole proprietors can use their SSN, but an EIN is strongly recommended for any business entity.",
                  status: "Required",
                },
                {
                  icon: Mail, title: "Business Email & Physical Address",
                  desc: "An email address on your business domain (not Gmail/Yahoo) and your physical business address. P.O. boxes are not accepted as the primary address.",
                  status: "Required",
                },
                {
                  icon: FileText, title: "Business Documentation",
                  desc: "Articles of incorporation, operating agreement, or business license. You may need to upload supporting documents for certain certifications.",
                  status: "Have available",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">{item.status}</span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Quick Check First">
            Not sure which NAICS codes to use?{" "}
            <Link href={CHECK_URL} className="font-bold underline hover:no-underline">
              Run our Quick Checker
            </Link>{" "}
            before you start. It identifies your best codes in 30 seconds and saves you from
            registering with the wrong ones.
          </Callout>

          {/* --- 8-Step Registration Walkthrough --- */}
          <SectionHeading id="registration-steps" number="04" title="8-Step Registration Walkthrough" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Follow these steps exactly. The SAM.gov interface can be confusing, but the process
              is straightforward once you know what to expect:
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  step: "1", icon: Globe, title: "Create a Login.gov Account",
                  desc: "Go to SAM.gov and click 'Sign In.' You'll be redirected to Login.gov, the government's single sign-on system. Create an account with your business email. Set up multi-factor authentication (MFA) — this is mandatory.",
                  tip: "Use an email address on your business domain. Government systems flag free email services (Gmail, Yahoo) as less trustworthy.",
                },
                {
                  step: "2", icon: Building2, title: "Start Entity Registration",
                  desc: "After signing in, click 'Get Started' under Entity Registration. Select 'Register New Entity.' Choose your entity type (business, individual, or organization). For most contractors, select 'Business or Organization.'",
                  tip: "If you previously had a DUNS number, you can search for your existing record. SAM.gov may have migrated your legacy data.",
                },
                {
                  step: "3", icon: BadgeCheck, title: "Request Your UEI",
                  desc: "SAM.gov will prompt you to validate your entity. Enter your legal business name and physical address exactly as they appear on your IRS documents. The system will generate a Unique Entity Identifier (UEI) — a 12-character alphanumeric code that replaces DUNS.",
                  tip: "Name and address must match IRS records exactly. 'LLC' vs 'L.L.C.' or 'Street' vs 'St.' can cause validation failures.",
                },
                {
                  step: "4", icon: ClipboardList, title: "Complete Core Data",
                  desc: "Fill in your business details: legal name, DBA name (if any), physical address, mailing address, Congressional district, business start date, fiscal year end, and entity structure (LLC, Corporation, Sole Proprietorship, etc.).",
                  tip: "Your Congressional district can be found at house.gov. Enter the district for your primary business address.",
                },
                {
                  step: "5", icon: Hash, title: "Enter NAICS Codes & Business Types",
                  desc: "Select your NAICS codes (up to 10 primary). Designate one as your primary NAICS code. Then select all applicable business types and socioeconomic categories (small business, SDVOSB, WOSB, etc.). Self-certify where applicable.",
                  tip: "Your primary NAICS code determines your size standard. Choose strategically — pick the code where you have the strongest capability AND the most favorable size threshold.",
                },
                {
                  step: "6", icon: CreditCard, title: "Enter Financial Information",
                  desc: "Provide your banking details for Electronic Funds Transfer (EFT). Enter your bank routing number, account number, and account type (checking or savings). This is where the government will send contract payments.",
                  tip: "Use a business bank account, not personal. Have a voided check or bank letter ready — some registrations require verification.",
                },
                {
                  step: "7", icon: UserCheck, title: "Designate Points of Contact",
                  desc: "Add your Electronic Business Point of Contact (EB POC) and Government Business Point of Contact (GB POC). The EB POC manages the SAM.gov account. The GB POC is who contracting officers contact about opportunities.",
                  tip: "The EB POC receives all system notifications including renewal reminders. Make sure this is someone who actively monitors email.",
                },
                {
                  step: "8", icon: CheckCircle2, title: "Review & Submit",
                  desc: "Review all entered information carefully. Once you submit, SAM.gov will validate your entity information against IRS and CAGE code databases. You'll receive a confirmation email. Then wait for activation — typically 7-10 business days for new registrations.",
                  tip: "Save your registration ID. If processing stalls, you'll need it to contact the Federal Service Desk (FSD) for support at fsd.gov.",
                },
              ].map((item) => (
                <div key={item.step} className="animate-on-scroll">
                  <div className="flex gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-lg font-black">
                      {item.step}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-emerald-600" />
                        <h3 className="font-bold text-stone-900">{item.title}</h3>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <div className="ml-[64px] bg-sky-50 border border-sky-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-sky-800 leading-relaxed"><strong>Tip:</strong> {item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Common Issues --- */}
          <SectionHeading id="common-issues" number="05" title="Common Issues & Fixes" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              SAM.gov registration has a reputation for being frustrating. Here are the most common
              problems and how to fix them:
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  issue: "UEI validation fails — name doesn't match",
                  fix: "Your legal business name must match IRS records exactly. Check your EIN confirmation letter. Punctuation, abbreviations, and spacing all matter. Try 'LLC' vs 'L.L.C.' vs leaving it off entirely.",
                },
                {
                  issue: "CAGE code validation error",
                  fix: "New registrants don't have a CAGE code yet — that's normal. Select 'I don't have a CAGE code' and SAM.gov will request one from DLA. Takes 1-3 extra business days.",
                },
                {
                  issue: "Registration stuck in 'Submitted' status for weeks",
                  fix: "Contact the Federal Service Desk (FSD) at fsd.gov or call 866-606-8220. Have your registration ID ready. Most stuck registrations have a data validation issue that FSD can identify.",
                },
                {
                  issue: "Can't log in — Login.gov MFA not working",
                  fix: "Login.gov requires multi-factor authentication. If your phone number changed, use backup codes (you should have saved these). Otherwise, contact Login.gov support to reset MFA.",
                },
                {
                  issue: "Banking information rejected",
                  fix: "Ensure routing and account numbers are correct. SAM.gov validates against the Federal Reserve's routing number database. Some credit union routing numbers require the 'ABA' format.",
                },
                {
                  issue: "Error: 'Entity already registered'",
                  fix: "Your business may have a legacy registration from the old CCR system. Search SAM.gov for your business name or EIN. If found, you may need to update the existing registration instead of creating a new one.",
                },
                {
                  issue: "Session times out during registration",
                  fix: "SAM.gov sessions expire after 30 minutes of inactivity. Work through one section at a time. The system saves progress automatically when you click 'Save and Continue.'",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 animate-on-scroll">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-stone-800 text-sm">
                      <strong>{item.issue}.</strong>{" "}
                      <span className="text-stone-500">{item.fix}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Federal Service Desk">
            When in doubt, call the Federal Service Desk: <strong>866-606-8220</strong> (M-F, 8am-8pm ET).
            They are genuinely helpful and can look up your registration status, identify data issues,
            and walk you through fixes. Don&apos;t spend hours guessing &mdash; just call.
          </Callout>

          {/* --- Timeline --- */}
          <SectionHeading id="timeline" number="06" title="Timeline Estimates" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s a realistic timeline for the full registration process:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 mb-6 animate-on-scroll">
              <div className="space-y-4">
                {[
                  { phase: "Gather prerequisites", time: "1-2 days", icon: ClipboardList },
                  { phase: "Fill out registration form", time: "1-2 hours", icon: Settings },
                  { phase: "UEI validation", time: "1-3 business days", icon: BadgeCheck },
                  { phase: "CAGE code assignment (new registrants)", time: "1-3 business days", icon: KeyRound },
                  { phase: "IRS & banking validation", time: "3-5 business days", icon: CreditCard },
                  { phase: "Full activation", time: "7-10 business days total", icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-stone-700">{item.phase}</p>
                    </div>
                    <span className="text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              <strong>Best case: 7 business days.</strong> Worst case (with validation issues): 4-6 weeks.
              The single biggest cause of delays is name/address mismatches with IRS records.
              Get that right and you&apos;ll be fine.
            </p>
          </div>

          {/* --- Renewal --- */}
          <SectionHeading id="renewal" number="07" title="Renewal Requirements" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov registration is <strong>not a one-time thing</strong>. You must renew annually,
              or your registration expires and you lose the ability to bid on contracts or receive
              payments.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { icon: RefreshCw, title: "Annual Renewal Required", desc: "Your registration expires exactly 365 days after activation (or last renewal). SAM.gov sends email reminders at 60, 30, and 15 days before expiration." },
                { icon: Clock, title: "Start Renewal 30 Days Early", desc: "Don't wait for the last minute. Renewal processing can take 5-7 business days. If your registration lapses, you can't bid on contracts until it's reactivated." },
                { icon: Settings, title: "Update Your Information", desc: "Renewal is a good time to update NAICS codes, certifications, points of contact, and banking information. Review everything — don't just click 'renew' without checking." },
                { icon: Lock, title: "Lapsed Registrations", desc: "If your registration expires, you must re-register. Any active contracts won't be affected, but you can't receive new awards until you're active again." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-stone-200 animate-on-scroll">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={CircleDot} color="sky" title="Calendar Reminder">
            Set a calendar reminder for 30 days before your SAM.gov expiration date. Also set one
            for 60 days before, in case you need to make updates. A lapsed registration means you
            can&apos;t get paid on active contracts either.
          </Callout>

          {/* --- CTA --- */}
          <div id="next-steps" className="scroll-mt-24 pt-12">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Registered? Now Find Your Contracts.
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                Once you&apos;re registered on SAM.gov, CapturePilot connects to your profile and
                starts matching you with opportunities you can actually win. Every day, automatically.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Run a Quick Check to verify your readiness score",
                  "Get daily matches based on your NAICS codes",
                  "See set-aside opportunities for your certifications",
                  "AI-generated proposal drafts for every match",
                  "Competitor intelligence on every opportunity",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={CHECK_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Run Quick Check <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={SIGNUP_URL}
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Start Free Account
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">
                No credit card required. See matches in 5 minutes.
              </p>
            </div>
          </div>

          {/* --- Related Links --- */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/government-contracting-101" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Government Contracting 101</p>
                  <p className="text-xs text-stone-500">The complete beginner&apos;s guide</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/naics-codes-explained" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Hash className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">NAICS Codes Explained</p>
                  <p className="text-xs text-stone-500">Find the right codes for your business</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/set-aside-programs" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Shield className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Set-Aside Programs</p>
                  <p className="text-xs text-stone-500">Your unfair advantage in GovCon</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/capability-statement-guide" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <FileText className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Capability Statement Guide</p>
                  <p className="text-xs text-stone-500">Write one that wins contracts</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
