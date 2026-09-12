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
  ClipboardList,
  Clock,
  Target,
  FileText,
  Search,
  Star,
  Zap,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "reality-check", label: "The Honest Reality Check First" },
  { id: "phase-1-registration", label: "Phase 1: Get Your House in Order (Weeks 1–4)" },
  { id: "phase-2-eligibility", label: "Phase 2: Know Your Eligibility Advantages" },
  { id: "phase-3-positioning", label: "Phase 3: Build Your Market Position" },
  { id: "phase-4-opportunities", label: "Phase 4: Find the Right Opportunities" },
  { id: "phase-5-proposal", label: "Phase 5: Write a Proposal That Can Win" },
  { id: "phase-6-after-award", label: "Phase 6: After the Award (or the Loss)" },
  { id: "first-win-strategies", label: "Three Faster Paths to Your First Win" },
  { id: "common-mistakes", label: "Mistakes That Delay First-Timers by 12 Months" },
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

function CheckItem({ text, detail }: { text: string; detail?: string }) {
  return (
    <div className="flex gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-stone-900 text-sm">{text}</p>
        {detail && <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{detail}</p>}
      </div>
    </div>
  );
}

export default function FirstGovernmentContractChecklistPage() {
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
            <span className="text-stone-900 font-medium">First Government Contract Checklist</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <ClipboardList className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Get Your First Government Contract:{" "}
            <span className="gradient-text">A Step-by-Step Checklist</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded <strong className="text-stone-700">$179 billion</strong> to
            small businesses in FY2025. That&apos;s nearly 28% of all prime federal contracts. Most
            of those businesses started exactly where you are now. This checklist walks you through
            every step — from registration to first award — with honest timelines and no fluff.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published September 12, 2026</span>
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
          <SectionHeading id="reality-check" number="01" title="The Honest Reality Check First" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Government contracting is not a quick win. That needs to be said before the checklist,
              because a lot of businesses start this process with commercial sales expectations and
              quit in month four when nothing has materialized.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The realistic timeline: <strong>6 to 18 months</strong> from the day you decide to
              pursue government contracts to your first award. Micro-purchases (under $15,000, the
              new threshold as of October 2025) can happen within weeks of registration. A competitive
              prime contract typically takes 12 to 24 months. Subcontracts land somewhere in between.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The businesses that succeed treat government contracting as a new market entry — not a
              side hustle. They allocate real time, track their pipeline, learn the procurement rules,
              and bid multiple times before they win. The ones that fail do the registration, submit
              one proposal, get rejected, and disappear.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              With that settled: the market is real and the checklist below works. The federal
              government spent roughly <strong>$793 billion on contracts in FY2025</strong>. Nearly
              $273 billion of that — including both prime contracts and subcontracts — went to small
              businesses. There is money here. You just have to earn it methodically.
            </p>
          </div>

          <Callout icon={TrendingUp} color="blue" title="FY2025 Small Business Contracting by the Numbers">
            <ul className="space-y-1 mt-1">
              <li><strong>$179 billion</strong> in prime contracts awarded to small businesses (FY2025)</li>
              <li><strong>$273 billion</strong> total including subcontract awards</li>
              <li><strong>27.9%</strong> of all prime contracts — exceeded the 23% statutory goal</li>
              <li><strong>$793 billion</strong> total federal contract spending in FY2025</li>
              <li>Source: SBA FY2025 Small Business Contracting Scorecard (June 2026)</li>
            </ul>
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="phase-1-registration" number="02" title="Phase 1: Get Your House in Order (Weeks 1–4)" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Before you can bid on anything, you need to exist in the government&apos;s system. This
              phase is administrative, not exciting, but missing a single step here will stop every
              subsequent step cold. Get it right once and you&apos;re done.
            </p>
          </div>

          <div className="my-8 space-y-3 animate-on-scroll">
            <CheckItem
              text="Get a federal Employer Identification Number (EIN)"
              detail="Required for SAM.gov registration. If you're a sole proprietor, you can use your SSN, but an EIN is strongly recommended for any business pursuing contracts. Apply free at IRS.gov — it takes about 15 minutes and is issued immediately online."
            />
            <CheckItem
              text="Verify your legal business name is consistent across the IRS, your state, and your bank"
              detail="SAM.gov validation cross-checks your submitted name against IRS records and state Secretary of State filings. A one-word discrepancy — 'LLC' vs. 'L.L.C.' — can trigger a manual review that delays your registration by weeks. Align everything before you start."
            />
            <CheckItem
              text="Create a Login.gov account with identity verification"
              detail="SAM.gov requires Login.gov — the federal single sign-on system. Identity verification takes about 10 minutes and requires a government-issued ID. Complete this before starting your SAM.gov registration."
            />
            <CheckItem
              text="Register in SAM.gov at sam.gov — free, and mandatory"
              detail="This is the System for Award Management. Registration is free (never pay a third party to do this for you). The process takes 1–2 hours online. After submission, expect 2–4 weeks for government validation — often longer than the official '7–10 business days' estimate due to enhanced fraud prevention checks introduced in 2025."
            />
            <CheckItem
              text="Choose and verify your NAICS codes"
              detail="NAICS codes describe what your business does. Pick the codes that match your actual capabilities — agencies use them to identify set-aside opportunities. Each code has an SBA size standard (revenue or employee-based) that determines small business eligibility. See our guide to the best NAICS codes for small businesses."
            />
            <CheckItem
              text="Note your UEI (Unique Entity Identifier)"
              detail="Your UEI is the 12-character identifier that replaced DUNS numbers in April 2022. It's assigned during SAM.gov registration. Record it — you'll enter it on every proposal, teaming agreement, and subcontract."
            />
            <CheckItem
              text="Confirm your CAGE code after registration activates"
              detail="Your CAGE code — a 5-character identifier assigned by the Defense Logistics Agency — is automatically generated during SAM.gov validation. It's required for DoD contracts, invoicing through WAWF, and facility security clearances. It appears in your SAM.gov entity record once active."
            />
            <CheckItem
              text="Set a calendar reminder to renew SAM.gov registration annually"
              detail="Your registration expires every 365 days. An expired registration means you can't bid or get paid. Agencies routinely check SAM.gov before award, and a lapsed registration can disqualify you from a contract you've already won. Renew 60 days before expiration."
            />
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Never Pay for SAM.gov Registration">
            SAM.gov registration is 100% free. The government will never charge you for it.
            Third-party companies that charge $400–$2,000 to &ldquo;register you in SAM.gov&rdquo; are
            not necessary and some are fraudulent. Go directly to{" "}
            <strong>sam.gov</strong> and register yourself. If you want professional help navigating
            the system, hire a GovCon consultant — but pay for advice, not for something you can do
            yourself for free.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="phase-2-eligibility" number="03" title="Phase 2: Know Your Eligibility Advantages" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The government doesn&apos;t just buy from any small business. It has specific programs
              that create pools of preferred vendors — set-asides — where competition is restricted to
              a specific category of business. If you qualify for any of these, use them. The
              competition is dramatically thinner.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              As of FY2026, contracts between the new micro-purchase threshold ($15,000) and the
              simplified acquisition threshold ($350,000) must be set aside for small businesses when
              two or more small businesses can compete. That&apos;s a wide band of opportunity that opens
              automatically just because you&apos;re small. The socioeconomic set-asides open additional
              doors on top of that.
            </p>
          </div>

          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Set-Aside Program</th>
                  <th className="px-4 py-3 text-left font-semibold">Who Qualifies</th>
                  <th className="px-4 py-3 text-left font-semibold">Certification Required?</th>
                  <th className="px-4 py-3 text-left font-semibold">Key Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Small Business</td>
                  <td className="px-4 py-3 text-stone-700">Meets SBA size standard for your NAICS code</td>
                  <td className="px-4 py-3 text-stone-700">No — self-certify in SAM.gov</td>
                  <td className="px-4 py-3 text-stone-700">Access to all set-aside contracts at or below $350K</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">SDVOSB</td>
                  <td className="px-4 py-3 text-stone-700">Service-disabled veteran owns ≥51%, controls daily ops</td>
                  <td className="px-4 py-3 text-stone-700">Yes — VA CVE or SBA</td>
                  <td className="px-4 py-3 text-stone-700">VA&apos;s VAAR mandate, DoD and civilian set-asides</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">WOSB / EDWOSB</td>
                  <td className="px-4 py-3 text-stone-700">Woman owns ≥51%, controls daily ops; EDWOSB adds income limit</td>
                  <td className="px-4 py-3 text-stone-700">Yes — SBA</td>
                  <td className="px-4 py-3 text-stone-700">Set-asides in 83 underrepresented NAICS codes</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">8(a) Business Development</td>
                  <td className="px-4 py-3 text-stone-700">Socially &amp; economically disadvantaged, owns ≥51%</td>
                  <td className="px-4 py-3 text-stone-700">Yes — SBA (lengthy application)</td>
                  <td className="px-4 py-3 text-stone-700">Sole-source awards up to $4.5M (services), $7M (manufacturing)</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">HUBZone</td>
                  <td className="px-4 py-3 text-stone-700">Located in designated HUBZone, 35% staff live there</td>
                  <td className="px-4 py-3 text-stone-700">Yes — SBA</td>
                  <td className="px-4 py-3 text-stone-700">Set-asides plus 10% price evaluation preference</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Don&apos;t guess which programs you qualify for. The rules are specific, and mis-certifying
              exposes you to False Claims Act liability. Use{" "}
              <a href={CHECK_URL} className="text-blue-700 underline underline-offset-2 font-medium">
                CapturePilot&apos;s Quick Checker
              </a>{" "}
              to run through the eligibility criteria before self-certifying in SAM.gov.
            </p>
          </div>

          {/* Inline CTA 1 */}
          <div className="my-10 rounded-2xl bg-blue-600 text-white p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-200 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-black mb-2">Check Your Eligibility in 2 Minutes</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Before you self-certify anything in SAM.gov, confirm which set-aside programs your
                  business actually qualifies for. Our Quick Checker walks through SDVOSB, WOSB, 8(a),
                  and HUBZone criteria based on your specific situation — free, no account required.
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
          <SectionHeading id="phase-3-positioning" number="04" title="Phase 3: Build Your Market Position" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Registration makes you eligible. Positioning makes you competitive. Government buyers
              often search for vendors before a solicitation ever hits SAM.gov — through sources
              sought notices, vendor databases, and direct outreach. If you don&apos;t have the right
              materials in place, you&apos;re invisible.
            </p>
          </div>

          <div className="my-8 space-y-4 animate-on-scroll">
            {[
              {
                step: "01",
                title: "Write a one-page capability statement",
                detail: "A capability statement is your federal resume — a one-page document summarizing your core competencies, past performance, differentiators, NAICS codes, CAGE code, and UEI. Agencies use them to evaluate sources sought responses and keep on file for future procurement. Most contracting officers won't give you 10 minutes without one. Read our capability statement examples guide to see what works.",
              },
              {
                step: "02",
                title: "Identify 3–5 target agencies where your NAICS codes have historical spending",
                detail: "Not every agency buys what you sell. Go to USASpending.gov and filter by your primary NAICS code. See which agencies are actually spending in your space, which incumbents have those contracts, and what dollar values look like. Target agencies where your size and capabilities are a natural fit.",
              },
              {
                step: "03",
                title: "Respond to every relevant sources sought notice in your space",
                detail: "Sources sought notices are market research — agencies post them before they issue the formal solicitation. Responding costs nothing and gets you on the agency's radar while potentially shaping the requirement in your favor. This is how experienced contractors influence RFPs before they're written.",
              },
              {
                step: "04",
                title: "Attend agency small business outreach events",
                detail: "Most agencies hold annual matchmaking events and vendor days. These give you 5–10 minutes with a program manager or contracting officer — more valuable than any amount of cold emailing. Check the agency's Office of Small and Disadvantaged Business Utilization (OSDBU) website for event calendars.",
              },
              {
                step: "05",
                title: "Register in agency-specific vendor portals",
                detail: "Many agencies have their own small business databases beyond SAM.gov: the VA's VetBiz, Army's AMRDEC safe portal, NASA's vendor registration. A quick search for '[Agency name] small business vendor registration' usually surfaces these. Fill them out — some procurement officers search them directly.",
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

          <Callout icon={Lightbulb} color="emerald" title="Past Performance When You Have None">
            The most common catch-22 for first-timers: government buyers want past performance, but
            you need a contract to get past performance. Three ways around it:{" "}
            <strong>(1)</strong> Subcontract first — your sub past performance on a federal prime is
            legitimate and citable.{" "}
            <strong>(2)</strong> Use commercial projects analogous in scope and complexity to the
            federal work you&apos;re pursuing.{" "}
            <strong>(3)</strong> Be explicit that you&apos;re new to federal contracting but cite your key
            personnel&apos;s federal experience. A strong management approach can offset thin past
            performance on smaller contracts.
          </Callout>

          {/* Section 5 */}
          <SectionHeading id="phase-4-opportunities" number="05" title="Phase 4: Find the Right Opportunities" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              SAM.gov lists every federal opportunity above $25,000. That sounds helpful until you
              realize there are thousands of active solicitations at any given moment. Finding the
              right ones — the ones where you actually have a shot — takes a system.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For first-timers, the instinct is to search broadly and bid on everything. Resist it.
              A narrow, well-targeted bid strategy wins more than a scattershot one. You want
              opportunities where you have the right NAICS code, the right size status, and some
              match to the requirement. Bidding on 20 mismatched opportunities is less valuable than
              bidding thoughtfully on three that fit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                icon: Search,
                title: "SAM.gov Opportunity Search",
                body: "The official database. Search by NAICS code, set-aside type, agency, and posted date. Filter by 'Set-Aside' to see opportunities restricted to your category. Use the 'Sources Sought' type filter to find early-stage market research — easier to influence before the RFP is written.",
                color: "blue",
              },
              {
                icon: TrendingUp,
                title: "USASpending.gov Award History",
                body: "Shows historical contract awards — who won, what they were paid, and when the contract expires. Expiring contracts are future opportunities. The incumbent is your competition. Knowing their pricing and performance history gives you a strategic advantage.",
                color: "emerald",
              },
              {
                icon: FileText,
                title: "Agency Procurement Forecasts",
                body: "Most agencies publish an annual procurement forecast listing anticipated buys for the fiscal year. These often appear 6–12 months before the solicitation drops. Check each target agency's OSDBU or procurement page. They name the requirement, dollar value, and estimated award date.",
                color: "sky",
              },
              {
                icon: Users,
                title: "Prime Contractor Subcontract Opportunities",
                body: "Large prime contractors on government contracts have subcontracting plan obligations. They actively need qualified small businesses. The SBA's SUB-Net database lists subcontracting opportunities. Going prime-to-sub is often the fastest path to first federal revenue.",
                color: "amber",
              },
            ].map(({ icon: Icon, title, body, color }) => {
              const borderColors: Record<string, string> = {
                blue: "border-blue-100 bg-blue-50",
                emerald: "border-emerald-100 bg-emerald-50",
                sky: "border-sky-100 bg-sky-50",
                amber: "border-amber-100 bg-amber-50",
              };
              const iconColors: Record<string, string> = {
                blue: "text-blue-600",
                emerald: "text-emerald-600",
                sky: "text-sky-600",
                amber: "text-amber-600",
              };
              return (
                <div
                  key={title}
                  className={`rounded-xl border p-5 ${borderColors[color]}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-5 h-5 ${iconColors[color]}`} />
                    <p className="font-bold text-sm text-stone-900">{title}</p>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{body}</p>
                </div>
              );
            })}
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The bid/no-bid decision is worth formalizing. Before you spend 40 hours writing a
              proposal, ask: Does your NAICS code match? Do you meet the set-aside eligibility? Have
              you talked to anyone at the agency? Do you know who the incumbent is? Is the due date
              realistic? If you can&apos;t answer these confidently, the answer is usually no-bid. Read our
              full{" "}
              <Link href="/blog/bid-no-bid-decision-framework" className="text-blue-700 underline underline-offset-2">
                bid/no-bid decision framework
              </Link>{" "}
              before committing to your first proposal.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading id="phase-5-proposal" number="06" title="Phase 5: Write a Proposal That Can Win" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Government proposals are not business letters. They follow a strict format dictated by
              the solicitation. Agencies evaluate them against defined criteria. Straying from the
              required format — even slightly — can get you disqualified without the evaluator reading
              a word of your content.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Read the solicitation&apos;s Section L and Section M before you write anything. Section L
              gives you the instructions for preparing your offer. Section M tells you exactly how
              they&apos;ll score it. Build your proposal around Section M&apos;s evaluation criteria — that&apos;s
              the rubric. If Section M says technical approach is worth 40% and past performance 30%,
              spend proportionately more time on technical.
            </p>
          </div>

          <div className="my-8 space-y-3 animate-on-scroll">
            <CheckItem
              text="Read Section L (Instructions) and Section M (Evaluation) first"
              detail="These sections define the rules of the game. Section L tells you what to submit and how. Section M tells you how they'll score it. Read both before writing a single word."
            />
            <CheckItem
              text="Build a compliance matrix before writing"
              detail="A compliance matrix is a spreadsheet that cross-references every requirement in Section L against the corresponding section of your proposal. It ensures you don't miss a required element — missing elements cause disqualification. See our compliance matrix guide for a template."
            />
            <CheckItem
              text="Address every evaluation criterion explicitly"
              detail="Evaluators are looking for specific things. Make it easy for them — use the exact language from Section M as headers in your technical volume. If the criterion says 'Relevant Experience,' your section heading should say 'Relevant Experience.' Don't make evaluators search for your response."
            />
            <CheckItem
              text="Quantify everything you can"
              detail="'We have extensive experience' loses to 'We have delivered 47 contracts over 8 years totaling $22M with a 94% on-time delivery rate.' Numbers are credible. Vague adjectives are not."
            />
            <CheckItem
              text="Write a price that reflects the market, not your costs alone"
              detail="Government buyers compare prices against each other and against historical awards. A price that's 40% above comparable awards signals you don't know the market. Research historical awards in USASpending.gov for similar NAICS codes and scope. Understand price-to-win analysis before your first competitive bid."
            />
            <CheckItem
              text="Submit early and confirm receipt"
              detail="SAM.gov's electronic submission portal sometimes has technical issues. Submit at least 24 hours before the deadline. Download your submission receipt and save it. A missed submission due to technical problems will not be accepted after the deadline."
            />
          </div>

          <Callout icon={Star} color="sky" title="Win Rate Expectations for First-Timers">
            The average government contractor win rate is 20–30% of competitive proposals submitted.
            First-timers are typically lower — often 5–15% — until they develop a track record,
            refine their proposal approach, and narrow their targeting. Plan to lose your first few
            bids. Each loss is market research. Request a debrief from the contracting officer after
            every loss — you&apos;re legally entitled to one, and it will tell you exactly why you didn&apos;t win.
          </Callout>

          {/* Inline CTA 2 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-800 text-white p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-stone-300 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-black mb-2">Track Your Pursuit Pipeline From Day One</h3>
                <p className="text-stone-300 text-sm mb-4">
                  The businesses that win treat government contracting as a numbers game. They track
                  every opportunity, every bid, every debrief. CapturePilot&apos;s pipeline tool lets you
                  manage your entire pursuit list — from sources sought through award — in one place.
                  Start your 30-day free trial and build the habit before your first proposal.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading id="phase-6-after-award" number="07" title="Phase 6: After the Award (or the Loss)" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Whether you win or lose, there&apos;s work to do.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>If you win:</strong> Congratulations — now the performance clock starts.
              Government contracts are won on paper and kept through performance. Your first award
              is the foundation of your past performance record. Deliver everything on time, at
              quality, within budget. Earn a strong CPARS rating. That rating follows you for three
              years and shapes every future evaluation.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Set up your invoicing system before you start work. If it&apos;s a DoD contract, you&apos;ll
              invoice through Wide Area WorkFlow (WAWF) — get your CAGE code-linked vendor account
              set up before your first deliverable. For civilian agencies, each has its own payment
              system. Ask your contracting officer on day one how to submit invoices.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              <strong>If you lose:</strong> Request a debrief. Agencies are required to provide one
              on competitive procurements. The debrief tells you exactly how evaluators scored your
              proposal and where you ranked. This feedback is worth more than any pre-proposal coaching.
              Use it to improve your next submission. Read our full guide on{" "}
              <Link href="/blog/government-contract-debriefing" className="text-blue-700 underline underline-offset-2">
                getting the most from a contract debriefing
              </Link>.
            </p>
          </div>

          <div className="my-8 space-y-3 animate-on-scroll">
            <CheckItem
              text="Review your CPARS rating after your first delivery milestone"
              detail="CPARS (Contractor Performance Assessment Reporting System) is where agencies record your performance. You can view your ratings and provide a formal response if you disagree. Strong CPARS ratings become a competitive advantage on future bids."
            />
            <CheckItem
              text="Request a post-award debriefing for losses"
              detail="You're entitled to a debriefing within 5 days of a request. Don't skip this. Ask specifically: how were we scored on each factor? What was the competitive range? What were our weaknesses? This is the most honest feedback you'll get about your proposal quality."
            />
            <CheckItem
              text="Track every bid, win, and loss in a pipeline system"
              detail="Your win/loss data over time will show you which agencies buy from you, which NAICS codes produce results, and which contract types you compete best on. You can't improve what you don't measure."
            />
            <CheckItem
              text="Look at the next solicitation immediately"
              detail="The biggest risk for first-timers is winning one contract and treating it as a destination. Your first contract ends. The next one won't happen automatically. Start building pipeline from day one of your first award — not from the last month before it expires."
            />
          </div>

          {/* Section 8 */}
          <SectionHeading id="first-win-strategies" number="08" title="Three Faster Paths to Your First Win" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Not all paths to first federal revenue take 18 months. Three approaches consistently
              get small businesses to their first dollars faster than the prime-contract cold-start:
            </p>
          </div>

          <div className="my-8 space-y-6 animate-on-scroll">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">1</div>
                <h3 className="font-black text-stone-900 text-lg">Subcontract Under an Established Prime</h3>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-3">
                Large prime contractors have federal mandated subcontracting plans. They need qualified
                small businesses with your NAICS code and set-aside certifications. A subcontract
                award can come in 30–90 days if you target the right prime. You get paid federal rates,
                build past performance, and learn the compliance requirements in a lower-stakes
                environment.
              </p>
              <p className="text-stone-700 text-sm leading-relaxed">
                Find opportunities: SBA SUB-Net database, prime contractor supplier portals, and
                industry events where prime contractors actively scout small business partners. Read our
                full guide on{" "}
                <Link href="/blog/subcontracting-government-contracts" className="text-blue-700 underline underline-offset-2">
                  subcontracting on government contracts
                </Link>.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">2</div>
                <h3 className="font-black text-stone-900 text-lg">Target Micro-Purchase and SAP Opportunities</h3>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-3">
                Government agencies make thousands of purchases under the micro-purchase threshold ($15,000
                as of FY2026) using purchase cards, with no formal solicitation required. Officers buy
                directly from vendors they know. Below the simplified acquisition threshold ($350,000),
                procedures are streamlined with far less competition.
              </p>
              <p className="text-stone-700 text-sm leading-relaxed">
                Getting into agency purchase card rotation requires direct relationship-building — attending
                agency events, responding to sources sought notices, and having a visible web presence
                and capability statement. Read our{" "}
                <Link href="/blog/micro-purchase-threshold" className="text-blue-700 underline underline-offset-2">
                  micro-purchase threshold guide
                </Link>{" "}
                and our{" "}
                <Link href="/blog/simplified-acquisition-procedure" className="text-blue-700 underline underline-offset-2">
                  simplified acquisition procedure overview
                </Link>.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">3</div>
                <h3 className="font-black text-stone-900 text-lg">Pursue a Sole-Source Award Through 8(a) or Set-Aside</h3>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-3">
                If your business qualifies for the 8(a) program, you can be awarded contracts
                sole-source up to $4.5 million for services and $7 million for manufacturing —
                without any competition. That&apos;s one of the most powerful first-contract mechanisms
                in federal contracting. It requires the 8(a) certification process (typically 90 days),
                but the payoff is direct awards with no competition.
              </p>
              <p className="text-stone-700 text-sm leading-relaxed">
                SDVOSB businesses can pursue sole-source awards at the VA up to $5 million for services
                through the VA&apos;s VAAR preference. Learn more in our{" "}
                <Link href="/blog/8a-sole-source-contracts" className="text-blue-700 underline underline-offset-2">
                  8(a) sole source guide
                </Link>{" "}
                and our{" "}
                <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 underline underline-offset-2">
                  SDVOSB contracts guide
                </Link>.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="common-mistakes" number="09" title="Mistakes That Delay First-Timers by 12 Months" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              These aren&apos;t edge cases. These are the patterns that show up consistently among
              businesses that spend a year in government contracting with no revenue to show for it.
            </p>
          </div>

          <div className="my-8 space-y-4 animate-on-scroll">
            {[
              {
                mistake: "Bidding on opportunities without prior agency relationship",
                fix: "Cold proposals on competitive solicitations from unknown vendors rarely win. Invest in relationship-building first. Respond to sources sought, attend agency events, and contact the small business liaison before the RFP drops.",
              },
              {
                mistake: "Treating SAM.gov registration as the finish line",
                fix: "Registration is the floor, not the ceiling. Many businesses register and then wait for contracts to arrive. They don't. You have to actively pursue opportunities, build relationships, and bid repeatedly.",
              },
              {
                mistake: "Choosing NAICS codes based on aspiration, not evidence",
                fix: "Picking codes for what you want to do, not what you do today, puts you in competitions you can't win. Use your primary NAICS code for your strongest proven capability, then expand as you build past performance.",
              },
              {
                mistake: "Writing proposals in isolation without reading competitor intelligence",
                fix: "Before you bid, look up historical awards in your NAICS code on USASpending.gov. Who's winning? What are they charging? What's the incumbent's performance record? That context shapes a better bid.",
              },
              {
                mistake: "Ignoring the debrief after a loss",
                fix: "A debrief is free market research. Evaluators tell you exactly why you didn't win. Skipping it means repeating the same mistakes on the next bid.",
              },
              {
                mistake: "Under-pricing to try to win",
                fix: "Price is one evaluation factor among several. On a best-value acquisition, the lowest price often doesn't win — the best value does. Pricing below your cost to 'get in the door' creates delivery problems that damage your CPARS rating and disqualify you from future work.",
              },
            ].map(({ mistake, fix }) => (
              <div key={mistake} className="rounded-xl border border-stone-200 overflow-hidden">
                <div className="bg-rose-50 border-b border-rose-100 px-5 py-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <p className="font-bold text-stone-900 text-sm">{mistake}</p>
                </div>
                <div className="px-5 py-3 bg-white flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-stone-600 leading-relaxed">{fix}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Award} color="emerald" title="The One Thing That Separates Winners">
            After studying hundreds of small businesses that won their first federal contract, the
            single biggest differentiator isn&apos;t size, certification status, or proposal writing skill.
            It&apos;s <strong>persistence with intelligence</strong> — bidding repeatedly, learning from
            every loss, and using market data to narrow their targeting. The businesses that treat
            government contracting as a long game win it. The ones that treat it as a lottery don&apos;t.
          </Callout>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-blue-600 text-white p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <ClipboardList className="w-8 h-8 text-blue-200 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-black mb-2">Ready to Start? Let&apos;s Build Your Plan.</h3>
                <p className="text-blue-100 text-sm mb-6">
                  CapturePilot is built for exactly this moment — a small business at the start of
                  its federal contracting journey. Our platform matches you to the right opportunities,
                  tracks your pipeline, checks your set-aside eligibility, and gives you the market
                  intelligence to bid smarter. Start free, no card required.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm border border-blue-400"
                  >
                    Book a strategy call <Clock className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-stone-100 animate-on-scroll">
            <h3 className="text-xl font-black text-stone-900 mb-6">Keep Reading</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/sam-gov-search-tips",
                  title: "SAM.gov Search Tips",
                  desc: "Stop wasting time and find real opportunities in the federal database.",
                },
                {
                  href: "/blog/capability-statement-examples",
                  title: "Capability Statement Examples",
                  desc: "What good (and bad) ones look like — with templates.",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Pipeline Management",
                  desc: "How to manage your pursuit list from discovery to award.",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-xl border border-stone-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <p className="font-bold text-stone-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">
                    {title}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
                  <div className="flex items-center gap-1 mt-2 text-blue-600 text-xs font-medium">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Feature Links */}
          <div className="mt-12 pt-8 border-t border-stone-100 animate-on-scroll">
            <h3 className="text-lg font-black text-stone-900 mb-4">CapturePilot Tools for New Contractors</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/features/quick-checker", label: "Quick Checker — verify set-aside eligibility in 2 minutes" },
                { href: "/features/matching", label: "Opportunity Matching — find contracts that fit your profile" },
                { href: "/features/pipeline", label: "Pipeline Management — track every pursuit from source to award" },
                { href: "/features/capability-statement", label: "Capability Statement Builder — create your federal resume" },
                { href: "/features/intelligence", label: "Market Intelligence — research agencies and incumbents" },
                { href: "/features/proposals", label: "Proposal Tools — write compliant proposals faster" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors py-1.5 px-3 rounded-lg hover:bg-blue-50"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  {label}
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
