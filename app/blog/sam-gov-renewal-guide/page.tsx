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
  RefreshCw,
  Clock,
  Calendar,
  Shield,
  DollarSign,
  XCircle,
  FileText,
  Bell,
  Users,
  Zap,
  AlertCircle,
  Building2,
  Settings,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "hard-gate", label: "SAM.gov Is a Hard Gate, Not a Directory" },
  { id: "how-clock-works", label: "How the 365-Day Renewal Clock Works" },
  { id: "2025-rule-change", label: "The 2025 FAR Rule Change: What Changed" },
  { id: "renewal-steps", label: "The Renewal Process, Step by Step" },
  { id: "how-long-it-takes", label: "How Long Renewal Actually Takes" },
  { id: "six-killers", label: "Six Things That Kill or Delay Your Renewal" },
  { id: "reps-and-certs", label: "The Reps and Certs You Can't Skip" },
  { id: "banking-info", label: "Banking Information: The Silent Payment Killer" },
  { id: "build-a-system", label: "Build a System So It Never Lapses" },
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
    <div className={`rounded-2xl border-l-4 border p-6 my-8 ${colors[color]}`}>
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

export default function SamGovRenewalGuidePage() {
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
            <span className="text-stone-900 font-medium">SAM.gov Renewal</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Settings className="w-4 h-4" /> Tools &amp; Compliance
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SAM.gov Renewal:{" "}
            <span className="gradient-text">
              How to Avoid Registration Lapses That Can Kill Your Federal Contracts
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Your SAM.gov registration expires exactly <strong className="text-stone-700">365 days</strong> from approval — no grace period, no auto-renewal. A lapse stops contract awards and freezes payments on active work. Here&apos;s how to stay current and what to do when things go wrong.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 29, 2026</span>
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
          <SectionHeading
            id="hard-gate"
            number="01"
            title="SAM.gov Is a Hard Gate, Not a Directory"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              A lot of contractors treat SAM.gov like a business listing — something you set up once and forget. That&apos;s wrong, and it&apos;s expensive. SAM.gov is the federal government&apos;s System for Award Management. Every agency checks it before issuing a contract. Without an active registration, the law prevents them from paying you.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The FAR is unambiguous on this. Under FAR 4.1102, no contract above the micro-purchase threshold ($10,000) can be awarded to a contractor without an active SAM registration. Below $10,000, micro-purchases can still happen without one — but nothing above that. Not a task order. Not a modification adding scope. Not a new delivery order on an IDIQ you already have.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The consequences during active contract performance are equally direct. The government uses SAM.gov to route electronic payments. If your registration lapses while you&apos;re performing on a contract, payments stop. Contractors have gone 60 or 90 days without payment chasing an expired registration they didn&apos;t know had lapsed.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              It&apos;s not a bureaucratic inconvenience. It&apos;s a hard gate. Treat it that way.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center hover-lift">
                <XCircle className="w-7 h-7 text-red-500 mx-auto mb-2" />
                <p className="text-2xl font-black text-red-700">$0</p>
                <p className="text-xs text-red-600 mt-1">Awards while lapsed</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center hover-lift">
                <Clock className="w-7 h-7 text-amber-500 mx-auto mb-2" />
                <p className="text-2xl font-black text-amber-700">365</p>
                <p className="text-xs text-amber-600 mt-1">Days until expiration</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center hover-lift">
                <Calendar className="w-7 h-7 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-black text-blue-700">60–90</p>
                <p className="text-xs text-blue-600 mt-1">Days early to start renewal</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="how-clock-works"
            number="02"
            title="How the 365-Day Renewal Clock Works"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Your registration doesn&apos;t expire on a calendar milestone. It expires exactly 365 days from the date your last renewal was <em>approved</em>. Not when you submitted the renewal. Not when you paid a fee (SAM.gov itself is free — ignore anyone charging you for it). The approval date stamped by GSA.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              To find your exact expiration date, log in to SAM.gov, go to your Workspace, and open My Entity Registrations. Your current registration record will show the expiration date. Write it down. Put it in a calendar. Make sure more than one person in your organization knows it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov does send reminder emails — at 60 days, 30 days, and 15 days before expiration. The problem is those emails go to whoever is listed as your Electronic Business Point of Contact (EBiz POC). If that person left the company, if the email address changed, or if the reminders land in spam, you won&apos;t see them. Thousands of contractors miss their renewals every year for exactly this reason.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The other thing worth knowing: your Unique Entity Identifier (UEI) never expires. GSA assigns your UEI when you first register and it stays with your organization permanently. A lapsed registration doesn&apos;t destroy your UEI — you just can&apos;t use it to receive awards until the registration is active again. Renewing reactivates the same UEI.
            </p>

            <Callout icon={Bell} color="amber" title="Don't rely on SAM.gov reminder emails">
              <p>
                The reminder emails go to your Electronic Business POC (EBiz POC). If that person has left your company, their email changed, or the emails filter to spam, you&apos;ll miss them. Set an independent calendar reminder at 90 days and 60 days before your expiration date. Your SAM.gov dashboard shows the exact expiration date — check it quarterly, not just at renewal time.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="2025-rule-change"
            number="03"
            title="The 2025 FAR Rule Change: What Changed (and What Didn't)"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              In August 2025, the FAR Council issued a final rule that resolved years of confusion about exactly when contractors need to be registered. This is important because it directly affects how a SAM.gov lapse can damage your bids.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The old interpretation — reinforced by GAO decisions including <em>TLS Joint Venture, LLC, B-422275</em> — held that you had to maintain <em>continuous</em> registration from the moment you submitted your proposal all the way through to contract award. A single day&apos;s lapse in that window was enough to get your award overturned. GAO actually sustained a protest and recommended the agency terminate a contract because the awardee&apos;s registration had lapsed between proposal submission and award.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The August 2025 final rule replaced that with what lawyers call the &quot;two-point&quot; requirement. You must be registered at <strong>two points</strong>: when you submit your proposal, and when the government makes the award. You are no longer required to maintain uninterrupted registration in between those two moments.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              That&apos;s meaningful relief for contractors in long source selection processes where an unexpected lapse could have killed an award that was months in the making.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-700">
                    <th className="text-left p-3 border border-stone-200 font-bold">Scenario</th>
                    <th className="text-left p-3 border border-stone-200 font-bold">Before Aug 2025</th>
                    <th className="text-left p-3 border border-stone-200 font-bold">After Aug 2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 border border-stone-200 text-stone-700">Lapse between proposal submission and award</td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-red-600 font-semibold">Fatal — award could be overturned</span>
                    </td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-emerald-600 font-semibold">No longer disqualifying</span>
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 border border-stone-200 text-stone-700">Lapsed at time of proposal submission</td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-red-600 font-semibold">Ineligible for award</span>
                    </td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-red-600 font-semibold">Still ineligible for award</span>
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 border border-stone-200 text-stone-700">Lapsed at time of award decision</td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-red-600 font-semibold">Agency can&apos;t award</span>
                    </td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-red-600 font-semibold">Agency still can&apos;t award</span>
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3 border border-stone-200 text-stone-700">Lapse during active contract performance</td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-red-600 font-semibold">Payments stopped</span>
                    </td>
                    <td className="p-3 border border-stone-200">
                      <span className="text-red-600 font-semibold">Payments still stopped</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout icon={AlertCircle} color="red" title="The 2025 rule change doesn't protect you during performance">
              <p>
                The new two-point rule only applies to the proposal-to-award period. Once you&apos;re performing on a contract, you must maintain continuous active registration. A lapse during performance can stop payments immediately and put you at risk of cure notices or default action. The rule change is welcome relief, but it&apos;s not a reason to be less careful about renewals.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Check Your Set-Aside Eligibility in 60 Seconds</h3>
                <p className="text-blue-200 text-sm mb-4">
                  SAM.gov registration is just the baseline. CapturePilot&apos;s Quick Checker shows you which set-aside programs you qualify for — SDVOSB, WOSB, 8(a), HUBZone — so you pursue the right contracts from the start.
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

          {/* Section 4 */}
          <SectionHeading
            id="renewal-steps"
            number="04"
            title="The Renewal Process, Step by Step"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-6">
              SAM.gov renewal is a self-service process, entirely online, and free. There is no government fee to renew. If someone is charging you to renew your SAM registration, they&apos;re a third-party service — not required, and not free. Here&apos;s the actual process:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Log in to SAM.gov with your Login.gov credentials",
                  detail: "Go to sam.gov and sign in. SAM.gov uses Login.gov for authentication — the same credential you use for other federal systems. Make sure you know your Login.gov password before you start.",
                },
                {
                  step: "02",
                  title: "Navigate to your Entity Registration",
                  detail: "From your Workspace, open My Entity Registrations. Find your entity — you should see the current expiration date listed there. Select Edit Registration.",
                },
                {
                  step: "03",
                  title: "Review and update your core data",
                  detail: "Even if nothing has changed, you need to review each section. Check your legal business name, address, EIN, and NAICS codes. If anything has changed — new address, new bank account, new points of contact — update it now. Don't skip sections.",
                },
                {
                  step: "04",
                  title: "Re-sign Representations and Certifications",
                  detail: "Every renewal requires you to re-certify your Reps and Certs — the full package of FAR certifications about your business. Read each one before signing. Some certifications change annually and you're legally responsible for their accuracy.",
                },
                {
                  step: "05",
                  title: "Verify your Electronic Funds Transfer (EFT) information",
                  detail: "This is where renewals go sideways. Double-check every digit of your routing and account numbers against your actual bank statement. If your bank has merged or you've changed accounts, update this now.",
                },
                {
                  step: "06",
                  title: "Submit and wait for IRS validation",
                  detail: "After submission, SAM.gov validates your EIN against IRS records. This step is automatic but not instant — it typically takes 1–5 business days. You'll receive an email confirmation when your registration is Active.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-4 bg-stone-50 border border-stone-200 rounded-xl p-5 hover-lift">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-sm">
                    {step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="sky" title="Start renewal 60–90 days early, not at expiration">
              <p>
                The SAM.gov renewal form itself takes 30–60 minutes to complete. But the processing time after submission — IRS validation, CAGE code confirmation, EBiz POC verification — routinely takes 3–7 business days and can stretch to 3 weeks if anything flags for review. Starting at 60–90 days gives you buffer to resolve problems without a lapse.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="how-long-it-takes"
            number="05"
            title="How Long Renewal Actually Takes"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Standard processing time for a straightforward renewal — no data changes, clean IRS match, EBiz POC responds quickly — is <strong>3–7 business days</strong> from submission to Active status. That&apos;s the best case.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s what adds time:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  trigger: "IRS validation failure",
                  added: "+3–5 business days",
                  detail: "Happens when your EIN records in IRS systems don't exactly match what you entered. Name formatting differences are the most common cause.",
                  color: "red",
                },
                {
                  trigger: "EBiz POC confirmation delay",
                  added: "+days to weeks",
                  detail: "Your Electronic Business POC receives a confirmation request. If they don't respond promptly — or if the contact is outdated — the renewal stalls.",
                  color: "amber",
                },
                {
                  trigger: "Banking information update",
                  added: "+2–5 business days",
                  detail: "Any change to EFT information triggers additional review. The system validates new banking details before reactivating your record.",
                  color: "amber",
                },
                {
                  trigger: "Address or legal name change",
                  added: "+2–5 business days",
                  detail: "Changes to your legal business name or physical address require additional verification against IRS and state business records.",
                  color: "sky",
                },
              ].map(({ trigger, added, detail, color }) => (
                <div key={trigger} className={`rounded-xl border p-5 ${
                  color === "red" ? "bg-red-50 border-red-200" :
                  color === "amber" ? "bg-amber-50 border-amber-200" :
                  "bg-sky-50 border-sky-200"
                }`}>
                  <p className="font-bold text-stone-900 text-sm mb-1">{trigger}</p>
                  <p className={`text-xs font-mono font-bold mb-2 ${
                    color === "red" ? "text-red-600" : color === "amber" ? "text-amber-600" : "text-sky-600"
                  }`}>{added}</p>
                  <p className="text-xs text-stone-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If multiple issues stack — an IRS validation problem plus a banking change plus an unresponsive EBiz POC — you can easily find yourself three weeks into a renewal that isn&apos;t done yet. That&apos;s three weeks where a contract that was ready to award can&apos;t proceed.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Federal Service Desk (FSD.gov) handles support issues. They&apos;re the right place to call if your renewal is stuck. Have your CAGE code and EIN ready. Processing issues that have been queued don&apos;t resolve faster by resubmitting — contact FSD.gov instead of starting over.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="six-killers"
            number="06"
            title="Six Things That Kill or Delay Your Renewal"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-6">
              These are the most common failure modes. Every one of them is preventable with a 30-minute pre-renewal audit of your registration data.
            </p>

            <div className="space-y-5 my-8">
              {[
                {
                  num: "1",
                  title: "The EBiz POC email is dead",
                  icon: Users,
                  body: "Your Electronic Business POC is the person who receives renewal reminders, security alerts, and validation requests. When someone leaves your company, their email gets deactivated — but your SAM.gov record still points to them. Update the EBiz POC when key staff changes happen, not 30 days before renewal.",
                },
                {
                  num: "2",
                  title: "IRS name mismatch",
                  icon: Building2,
                  body: "SAM.gov validates your EIN against IRS records. The name must match exactly — not close enough, not how you write it on your letterhead. If you've done a DBA filing, changed your legal name, or had a corporate restructuring, IRS records may lag by months. Common mismatches: 'LLC' vs 'L.L.C.', missing commas, trailing words like 'Inc' without the period.",
                },
                {
                  num: "3",
                  title: "Outdated banking information",
                  icon: DollarSign,
                  body: "If your bank merged with another institution, your routing number may have changed without your knowledge. If you've switched banks or accounts since your last renewal, the old information is still on file. Verify routing and account numbers against a current bank statement — not from memory.",
                },
                {
                  num: "4",
                  title: "Skipping the Reps and Certs review",
                  icon: FileText,
                  body: "Many contractors click through Representations and Certifications without reading them. Some certifications change from year to year — program participation requirements, small business size certifications, exclusion declarations. If something has changed in your business situation, you need to update your answers. The government holds you legally accountable for what you certified.",
                },
                {
                  num: "5",
                  title: "Notarized letter problems (if needed)",
                  icon: Shield,
                  body: "If you need to add a new Administrator to your SAM.gov account — which happens when staff turns over — you'll need a notarized Designation Letter submitted to the Federal Service Desk. This letter must exactly match the FSD.gov template format. Rejections for formatting issues are common. Build in extra time if an admin change is part of your renewal process.",
                },
                {
                  num: "6",
                  title: "Waiting until the last week",
                  icon: AlertTriangle,
                  body: "Renewals submitted in the final 7–10 days before expiration are high-risk. Any processing delay will push you into lapsed status. The most experienced GovCon companies renew at 60–90 days, treat completion confirmation as a routine project milestone, and document the Active status confirmation email.",
                },
              ].map(({ num, title, icon: Icon, body }) => (
                <div key={num} className="flex gap-4 border border-stone-200 rounded-xl p-5 hover-lift">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-stone-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">
                      <span className="text-blue-600 mr-2">#{num}</span>
                      {title}
                    </p>
                    <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="reps-and-certs"
            number="07"
            title="The Reps and Certs You Can't Skip"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Representations and Certifications is the longest and most legally significant section of your SAM.gov registration. It covers dozens of certifications across FAR Part 52 — your small business size status, exclusion from federal programs, compliance with trade regulations, and more.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Because the form is long and most answers don&apos;t change year over year, it&apos;s tempting to scroll through and confirm without reading. Don&apos;t. A few things that need close attention every renewal:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "Small business size certification",
                  detail: "If your revenue has grown, you may now exceed the SBA size standard for your primary NAICS code. You're legally responsible for accurate self-certification. Misrepresentation of small business status is a federal crime with civil and criminal penalties.",
                  urgent: true,
                },
                {
                  title: "Set-aside program certifications",
                  detail: "If you have SDVOSB, WOSB, 8(a), or HUBZone certifications, verify they're still active and accurately reflected. Program suspensions or eligibility changes need to be updated in your Reps and Certs.",
                  urgent: false,
                },
                {
                  title: "Debarment and exclusion declarations",
                  detail: "You're certifying that you, your principals, and your key subcontractors are not currently debarred, suspended, or otherwise excluded from federal programs. If circumstances have changed, update accordingly.",
                  urgent: true,
                },
                {
                  title: "Trade agreement and Buy American certifications",
                  detail: "These certifications affect which contract vehicles you can use and which country-of-origin rules apply. If your supply chain has changed, re-read these certifications carefully before checking 'yes.'",
                  urgent: false,
                },
              ].map(({ title, detail, urgent }) => (
                <div key={title} className={`rounded-xl border p-5 ${urgent ? "bg-amber-50 border-amber-200" : "bg-stone-50 border-stone-200"}`}>
                  <div className="flex items-start gap-2 mb-2">
                    {urgent ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="font-bold text-stone-900 text-sm">{title}</p>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you&apos;re unsure about the legal accuracy of a certification — especially around small business size or set-aside eligibility — get a GovCon attorney to review before you sign. The cost of that review is negligible compared to a False Claims Act exposure.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For more on how certifications affect your eligibility for set-aside contracts, see our guide to{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-blue-600 hover:underline">
                federal contracting certifications
              </Link>
              . For how NAICS codes interact with size standards, see{" "}
              <Link href="/blog/naics-code-change-guide" className="text-blue-600 hover:underline">
                how to update your NAICS codes in SAM.gov
              </Link>
              .
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="banking-info"
            number="08"
            title="Banking Information: The Silent Payment Killer"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Electronic Funds Transfer section of your SAM.gov registration is how the government knows where to send your money. Every agency uses EFT for virtually all contract payments. Get this wrong and you won&apos;t get paid — even if your registration is otherwise Active.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The most common banking errors:
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 my-6">
              <ul className="space-y-3">
                {[
                  "Transposed digits in routing or account numbers (the most common error — happens when copying from memory)",
                  "Outdated routing number after a bank merger or acquisition",
                  "Old account that has since been closed",
                  "Account holder name doesn't exactly match the registered legal business name",
                  "Using a personal account instead of a business account (causes validation failures)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-600">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              When you update banking information in SAM.gov, the change triggers additional review and adds 2–5 business days to processing time. This is intentional — it&apos;s a fraud prevention measure. Submit banking updates as part of an early renewal (60+ days out) so the delay doesn&apos;t create a gap.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              If you need to change banking information urgently — say your bank merged and your routing number changed mid-contract — contact the Federal Service Desk at FSD.gov to prioritize the update. Don&apos;t sit on a wrong routing number expecting to sort it out at the next renewal.
            </p>

            <Callout icon={DollarSign} color="emerald" title="Verify banking annually, even if nothing changed">
              <p>
                Pull your actual bank statement every year before renewal and verify the routing and account numbers character by character against what&apos;s in SAM.gov. Don&apos;t rely on memory. If your bank has changed, call them and confirm the current routing number — banks do change routing numbers after mergers without notifying business account holders directly.
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-50 border border-stone-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Find Contracts That Match Your SAM.gov Profile
                </h3>
                <p className="text-stone-500 text-sm mb-4">
                  Once your registration is active, CapturePilot&apos;s{" "}
                  <Link href="/features/matching" className="text-blue-600 hover:underline">
                    opportunity matching
                  </Link>{" "}
                  surfaces set-aside contracts that match your NAICS codes, certifications, and past performance — so you spend time on bids you can actually win.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="build-a-system"
            number="09"
            title="Build a System So It Never Lapses"
          />
          <div className="animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              A SAM.gov lapse is almost always a process failure, not a knowledge failure. Most contractors who let their registration expire know perfectly well that it needs to be renewed — they just didn&apos;t have a system that made it impossible to miss.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s a simple system that works:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: Calendar,
                  title: "Set three calendar reminders",
                  detail: "90 days out (start preparing), 60 days out (submit renewal), 30 days out (confirm Active status received). Put all three in a shared calendar that won't disappear when a staff member leaves. If you use Google Workspace or Microsoft 365, add reminders to a shared team calendar, not just your personal one.",
                },
                {
                  icon: Users,
                  title: "Name two people who own the renewal",
                  detail: "One primary, one backup. Both need Login.gov credentials with access to your SAM.gov entity. When key staff changes, update the SAM.gov Points of Contact record immediately — not at the next renewal. The EBiz POC email is how SAM.gov reaches you for issues beyond just renewal reminders.",
                },
                {
                  icon: FileText,
                  title: "Build a pre-renewal checklist",
                  detail: "30 minutes of prep before you start the renewal form catches the problems that cause delays. The checklist should include: verify EBiz POC email is active, pull current bank statement and verify routing/account numbers, check for any changes to legal name or address, review any SBA certifications for current status, confirm EIN matches IRS records exactly.",
                },
                {
                  icon: Shield,
                  title: "Log and document every renewal",
                  detail: "When SAM.gov sends the confirmation that your registration is Active, save that email. Record the new expiration date in a shared document. This creates a paper trail and ensures the next renewal cycle starts with a clear record of when it's due.",
                },
                {
                  icon: RefreshCw,
                  title: "Run a mid-year registration audit",
                  detail: "Don't look at your SAM.gov record only at renewal time. Log in halfway through your registration year and review key fields: POC emails, NAICS codes, banking information, and your active certifications. Changes in your business — new ownership, new bank, new address — should be updated in SAM.gov within 30 days, not saved up for the next renewal.",
                },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex gap-4 bg-white border border-stone-200 rounded-xl p-5 hover-lift shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={CheckCircle2} color="emerald" title="SAM.gov renewal is free — always">
              <p>
                GSA does not charge for SAM.gov registration or renewal. Many companies advertise &quot;SAM.gov registration services&quot; for fees ranging from $150 to $500. These are legitimate third-party services that manage the process for you — but they are optional, not required. You can complete the full renewal yourself at sam.gov at no cost. If you do use a paid service, verify they have a strong track record and understand your specific certifications before handing over your SAM.gov credentials.
              </p>
            </Callout>

            <h3 className="text-xl font-bold text-stone-900 mt-10 mb-4">
              What to Do If Your Registration Already Lapsed
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Log in to SAM.gov immediately and initiate the renewal. A lapsed registration doesn&apos;t disappear — your UEI, CAGE code, and prior data are preserved. The renewal process is the same; it will just reactivate an expired record rather than extending an active one.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Contact your contracting officer immediately if you&apos;re performing on an active contract. Notify them that your registration lapsed and that you&apos;ve initiated renewal. Most contracting officers have seen this before and will work with you to avoid a payment disruption while the renewal processes — but they can only help if you tell them what&apos;s happening.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Under the 2025 FAR rule, a short lapse between proposal submission and award no longer automatically disqualifies you from an impending contract award. But the agency still needs to see your registration Active at the actual time of award. If you&apos;re expecting an award, renew now and prioritize getting to Active status before the award decision.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For a broader look at your federal contracting compliance obligations, our guide to{" "}
              <Link href="/blog/far-clauses-small-business" className="text-blue-600 hover:underline">
                key FAR clauses for small businesses
              </Link>{" "}
              covers the regulatory framework that governs your registrations, certifications, and contract performance requirements. And if you&apos;re just getting started or evaluating whether to pursue federal contracts, our{" "}
              <Link href="/blog/how-to-find-government-contracts-small-business" className="text-blue-600 hover:underline">
                guide to finding government contracts for small businesses
              </Link>{" "}
              walks through the full landscape.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll mt-16 bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
            <div className="max-w-xl">
              <h3 className="text-2xl font-black mb-3">
                Ready to Pursue the Contracts Your Registration Makes You Eligible For?
              </h3>
              <p className="text-stone-300 text-sm mb-6">
                An active SAM.gov registration is the floor, not the ceiling. CapturePilot builds on top of it — matching your profile to opportunities, tracking your pipeline, and helping you write proposals that win. Start your 30-day free trial and see the opportunities you&apos;ve been missing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-500 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-colors border border-white/20"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="animate-on-scroll mt-16 pt-10 border-t border-stone-200">
            <h3 className="text-lg font-black text-stone-900 mb-5">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sam-gov-search-tips",
                  title: "SAM.gov Search Tips: Find Real Opportunities",
                  desc: "How to use SAM.gov as a market intelligence tool, not just a listing service.",
                },
                {
                  href: "/blog/naics-code-change-guide",
                  title: "How to Change Your NAICS Codes in SAM.gov",
                  desc: "Update NAICS codes without losing set-aside eligibility.",
                },
                {
                  href: "/blog/federal-contracting-certifications",
                  title: "Federal Contracting Certifications That Help You Win",
                  desc: "SDVOSB, WOSB, 8(a), HUBZone — which certifications are worth pursuing.",
                },
                {
                  href: "/blog/far-clauses-small-business",
                  title: "Key FAR Clauses Every Small Business Must Know",
                  desc: "The regulatory clauses that govern your contracts, certifications, and compliance.",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex gap-3 p-4 bg-stone-50 border border-stone-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <div className="flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm group-hover:text-blue-700 transition-colors">
                      {title}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">{desc}</p>
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
