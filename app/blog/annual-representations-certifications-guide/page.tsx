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
  RefreshCw,
  Shield,
  Clock,
  AlertCircle,
  ListChecks,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-are-reps-certs", label: "What Are Reps & Certs and Why They Exist" },
  { id: "what-you-certify", label: "What You Actually Certify in SAM.gov" },
  { id: "annual-update-requirement", label: "The Annual Update Rule: What It Means in Practice" },
  { id: "march-2026-changes", label: "The March 2026 Overhaul: What Changed" },
  { id: "high-risk-certifications", label: "The High-Risk Certifications Most Contractors Get Wrong" },
  { id: "false-claims-liability", label: "False Claims Act Exposure: When a Checkbox Becomes a Lawsuit" },
  { id: "step-by-step-update", label: "How to Update Your Reps & Certs in SAM.gov" },
  { id: "common-mistakes", label: "Common Mistakes That Trip Up Small Businesses" },
  { id: "keeping-current", label: "Building a System to Stay Current Year-Round" },
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

export default function AnnualRepsCertsGuidePage() {
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
            <span className="text-stone-900 font-medium">Annual Representations & Certifications Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Tools
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Annual Representations and Certifications in SAM.gov:{" "}
            <span className="gradient-text">What They Are and How to Keep Them Current</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Every year, your SAM.gov registration expires — and so do the legal certifications
            attached to it. Miss the update, and you lose eligibility for new awards. Get something
            wrong, and you&apos;re exposed to the False Claims Act. Here&apos;s how to handle it correctly.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published September 15, 2026</span>
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
          <SectionHeading id="what-are-reps-certs" number="01" title="What Are Reps & Certs and Why They Exist" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              When you register your business in SAM.gov, you don&apos;t just fill out a directory
              listing. You sign a set of legally binding declarations. The government calls them
              Representations and Certifications — Reps &amp; Certs in the industry shorthand — and
              they govern everything from your size status to whether you&apos;ve been debarred,
              violated environmental laws, or use covered telecom equipment.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The framework lives in <strong>FAR Subpart 4.12</strong> and the clause it incorporates,
              <strong> FAR 52.204-8 (Annual Representations and Certifications)</strong>. That clause
              requires every offeror to verify — at least once a year — that their SAM.gov
              certifications are current, accurate, and complete. When you submit a bid, the
              contracting officer presumes you stand behind whatever you certified last time you
              updated your record, unless you state otherwise.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That presumption has teeth. A certification you made six months ago and forgot about
              is just as binding as one you made this morning. If the underlying facts changed and
              you didn&apos;t update SAM.gov, you may have submitted a false certification — even if
              you never intended to deceive anyone.
            </p>
          </div>

          <Callout icon={FileText} color="blue" title="Reps & Certs at a Glance">
            <ul className="space-y-1 mt-1">
              <li><strong>Governing rule:</strong> FAR Subpart 4.12, FAR 52.204-8</li>
              <li><strong>Where you complete them:</strong> SAM.gov entity registration (Representations and Certifications section)</li>
              <li><strong>Update frequency required:</strong> At least annually, and whenever facts change</li>
              <li><strong>When they&apos;re used:</strong> On every solicitation you respond to — contracting officers pull from your current SAM.gov record</li>
              <li><strong>What happens if they lapse:</strong> You become ineligible for new contract awards; existing contract payments may be delayed</li>
              <li><strong>Legal consequence of errors:</strong> False Claims Act exposure, suspension, debarment, fines, or imprisonment</li>
            </ul>
          </Callout>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most contractors know SAM.gov registration expires annually. Far fewer understand that
              the Reps &amp; Certs section inside that registration carries the same expiration
              clock — and that certain certifications need updating the moment your business situation
              changes, not just at the annual renewal. Size recertifications, new socioeconomic
              program participation, changes in ownership structure: these all require immediate
              action, not a once-a-year checkbox.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading id="what-you-certify" number="02" title="What You Actually Certify in SAM.gov" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The Reps &amp; Certs section covers more ground than most contractors realize. It isn&apos;t
              just &quot;are you a small business.&quot; It touches your legal compliance, your supply chain,
              your ownership, and your business practices. Think of it as the government&apos;s due
              diligence form — compressed into a series of checkbox affirmations you sign under
              penalty of law.
            </p>
          </div>

          {/* Categories Table */}
          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Category</th>
                  <th className="px-4 py-3 text-left font-semibold">What You&apos;re Certifying</th>
                  <th className="px-4 py-3 text-left font-semibold">Change Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Business Size</td>
                  <td className="px-4 py-3 text-stone-700">That you meet SBA size standards for each NAICS code you&apos;ve claimed as small</td>
                  <td className="px-4 py-3 text-stone-600">Revenue growth, acquisitions, mergers, employee count changes</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Socioeconomic Status</td>
                  <td className="px-4 py-3 text-stone-700">8(a), HUBZone, WOSB, SDVOSB, VOSB participation and eligibility</td>
                  <td className="px-4 py-3 text-stone-600">Ownership changes, principal place of business relocation, certification expiration</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Debarment / Suspension</td>
                  <td className="px-4 py-3 text-stone-700">That you are not currently debarred, suspended, proposed for debarment, or declared ineligible</td>
                  <td className="px-4 py-3 text-stone-600">Any adverse legal action or federal enforcement proceeding</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Telecom / Supply Chain</td>
                  <td className="px-4 py-3 text-stone-700">Whether you use covered telecommunications equipment or services (Section 889 compliance)</td>
                  <td className="px-4 py-3 text-stone-600">New equipment purchases, subcontractor changes, data center or cloud provider changes</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Labor & Employment</td>
                  <td className="px-4 py-3 text-stone-700">Compliance with equal opportunity, anti-trafficking, and labor law requirements</td>
                  <td className="px-4 py-3 text-stone-600">Enforcement actions, policy changes, new labor violations</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Domestic Content</td>
                  <td className="px-4 py-3 text-stone-700">Buy American Act compliance, domestic end products, country of origin</td>
                  <td className="px-4 py-3 text-stone-600">New product lines, new suppliers, manufacturing location changes</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Inverted Domestic Corp</td>
                  <td className="px-4 py-3 text-stone-700">That you are not an inverted domestic corporation (tax inversion structure)</td>
                  <td className="px-4 py-3 text-stone-600">Corporate restructuring, international ownership changes</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">CMMC / Cyber (DoD)</td>
                  <td className="px-4 py-3 text-stone-700">Current CMMC status and SPRS score (defense contractors only)</td>
                  <td className="px-4 py-3 text-stone-600">CMMC assessment results, SPRS score changes, new CUI systems</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              This is not an exhaustive list. The full Reps &amp; Certs section in SAM.gov includes
              dozens of individual provisions, each tied to a specific FAR or DFARS clause. Most
              are stable — you answer once and the answer doesn&apos;t change for years. But a handful
              are dynamic, and those are the ones that burn contractors who treat Reps &amp; Certs
              as a &quot;set it and forget it&quot; exercise.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Not sure which certifications apply to you?</h3>
                <p className="text-blue-100 mb-4">
                  CapturePilot&apos;s Quick Checker scans your current business profile against federal
                  eligibility requirements — including which set-aside programs and size standards you
                  qualify for — in under two minutes.
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

          {/* Section 3 */}
          <SectionHeading id="annual-update-requirement" number="03" title="The Annual Update Rule: What It Means in Practice" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              FAR 4.1201(b) is direct: offerors and quoters are required to review and update their
              representations and certifications &quot;at least annually.&quot; That language means you can&apos;t
              just let your SAM.gov registration roll over automatically and assume your Reps &amp; Certs
              carry forward unchanged. You must actively review them and certify that they remain
              accurate.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              In practice, this works as follows: SAM.gov registration expires exactly 365 days from
              the date of your last approved renewal. When you renew, the system walks you through
              the Reps &amp; Certs section. You review each question, update any answers that have
              changed, and resubmit. The effective date on your certifications resets to the renewal
              date.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The mistake most contractors make: they treat the annual SAM renewal as a paperwork
              chore and click through without reading. That&apos;s how outdated certifications persist for
              years — until a contract officer, an audit, or an adverse party spots the discrepancy.
            </p>
          </div>

          <Callout icon={Clock} color="amber" title="The Annual Update Timeline">
            <ul className="space-y-1.5 mt-1">
              <li><strong>Day 1 of your registration year:</strong> Registration and Reps &amp; Certs are active and current.</li>
              <li><strong>Day 335–340:</strong> Start your renewal. SAM processing takes 2–4 weeks. Submitting late risks a lapse.</li>
              <li><strong>Day 365:</strong> Registration expires. Lapsed status blocks new awards and freezes payments on existing contracts.</li>
              <li><strong>Mid-year, any time:</strong> Update immediately if your size, ownership, set-aside status, or telecom situation changes — don&apos;t wait for the annual renewal.</li>
            </ul>
          </Callout>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              One nuance worth noting: the annual renewal is the minimum. Nothing in the FAR limits
              you to one update per year. If your company is acquired in March, your size status
              changes in July, and you get HUBZone certified in October — you should update your
              Reps &amp; Certs three times in that calendar year, once after each change. Waiting until
              your annual renewal date to report a size change that happened nine months earlier is
              exactly the kind of pattern that triggers False Claims Act investigations.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading id="march-2026-changes" number="04" title="The March 2026 Overhaul: What Changed" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              On March 24, 2026, GSA deployed the modernized FAR and DFARS Representations and
              Certifications in SAM.gov. If you completed your Reps &amp; Certs before that date, you
              need to review the updated structure — the layout and question organization changed
              significantly, not just cosmetically.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The most significant structural change: SAM.gov now separates Reps &amp; Certs into
              distinct modules based on who asks what. Previously, all representations lived in one
              combined section. Now they&apos;re split:
            </p>
          </div>

          {/* March 2026 changes table */}
          <div className="my-8 overflow-x-auto animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Module</th>
                  <th className="px-4 py-3 text-left font-semibold">Who Completes It</th>
                  <th className="px-4 py-3 text-left font-semibold">What It Covers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Entity-Level (Type 1) FAR Response</td>
                  <td className="px-4 py-3 text-stone-700">All federal contractors</td>
                  <td className="px-4 py-3 text-stone-600">Business size, socioeconomic status, debarment, telecom, labor — core reps that apply broadly</td>
                </tr>
                <tr className="bg-stone-50 hover:bg-stone-100 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Defense Response (DFARS)</td>
                  <td className="px-4 py-3 text-stone-700">Only entities bidding on or holding DoD contracts</td>
                  <td className="px-4 py-3 text-stone-600">CMMC status, SPRS score, defense-specific supply chain representations, DFARS-required certifications</td>
                </tr>
                <tr className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-stone-900">Solicitation-Level (Types 2 &amp; 3)</td>
                  <td className="px-4 py-3 text-stone-700">All contractors — but now collected at solicitation/contract level, not in SAM.gov</td>
                  <td className="px-4 py-3 text-stone-600">Opportunity-specific certifications that vary by contract (previously collected centrally in SAM.gov)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The shift of Types 2 and 3 out of SAM.gov is the biggest operational change. These
              certifications — which were previously stored at the entity level and reused across
              solicitations — are now collected fresh on each solicitation or contract. You&apos;ll see
              them in the solicitation documents and your proposal submission, not in your SAM.gov
              profile. That means you can no longer assume that what you filed in SAM.gov covers
              everything a specific solicitation requires.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The other cosmetic but meaningful change: questions now use plain-language titles instead
              of FAR clause citation numbers. That&apos;s more user-friendly, but it also means the clause
              that used to say &quot;52.209-5, Certification Regarding Responsibility Matters&quot; might now
              appear as &quot;Responsibility Matters Certification&quot; — which matters when you&apos;re trying
              to trace a question back to its regulatory source.
            </p>
          </div>

          <Callout icon={AlertCircle} color="sky" title="If You Haven't Logged In Since March 2026">
            <p>
              Your pre-existing Reps &amp; Certs answers migrated to the new structure, but the
              modules look different. Log into SAM.gov and navigate to your entity registration, then
              to &quot;Representations and Certifications.&quot; Review each module — particularly the new
              Defense Response module if you pursue any DoD work. Do not assume your prior answers
              transferred correctly to every question in the new layout.
            </p>
          </Callout>

          {/* Section 5 */}
          <SectionHeading id="high-risk-certifications" number="05" title="The High-Risk Certifications Most Contractors Get Wrong" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Some certifications are stable for years. Others have real-world triggers that catch
              contractors off guard. These are the ones worth a dedicated review process — not just a
              rubber stamp on your annual renewal.
            </p>
          </div>

          {/* High-risk items */}
          <div className="space-y-6 my-8 animate-on-scroll">
            <div className="rounded-2xl border border-stone-200 p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">Small Business Size Status</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    You certify small business status by NAICS code. If your revenue or employee count has grown past the size standard for any code you&apos;ve claimed, your certification is wrong. This is not a grace period situation — the certification applies to your status <em>at the time of offer</em>. Companies that win set-aside contracts after growing past the size threshold face suspension and False Claims Act liability, not just a correction notice.
                  </p>
                  <p className="text-stone-500 text-xs mt-2">
                    Related: <Link href="/blog/sba-size-standards-guide" className="text-blue-600 hover:underline">SBA Size Standards: The Complete 2026 Guide</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">Section 889 Telecom Representation (52.204-26)</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    This applies to <em>all</em> solicitations. You must certify whether you use or provide covered telecommunications equipment or services — primarily Huawei, ZTE, Hytera, Hikvision, and Dahua products. If you added a new phone system, network switch, security camera, or cloud provider since your last SAM update, review this before submitting any bid. The penalty for getting it wrong on a DoD contract is contract termination and potential debarment.
                  </p>
                  <p className="text-stone-500 text-xs mt-2">
                    Related: <Link href="/blog/section-889-telecom-ban" className="text-blue-600 hover:underline">Section 889 Compliance: The Telecom Ban That Can Get You Removed</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">Socioeconomic Set-Aside Eligibility (8(a), WOSB, SDVOSB, HUBZone)</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    If you&apos;re certified under any of these programs, your eligibility depends on facts that can change: ownership percentages, personal net worth limits (for WOSB/EDWOSB), principal place of business (HUBZone), or the service-connected disability status of your key owner (SDVOSB). Certifying eligibility after it lapsed — even innocently — is a serious compliance issue. Check with your certifying agency before your annual SAM renewal, not after.
                  </p>
                  <p className="text-stone-500 text-xs mt-2">
                    Related: <Link href="/blog/wosb-certification-guide" className="text-blue-600 hover:underline">WOSB Certification Guide</Link> &bull; <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline">SDVOSB Contracts Guide</Link> &bull; <Link href="/blog/hubzone-program-guide" className="text-blue-600 hover:underline">HUBZone Program Guide</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">CMMC Status (DoD Contractors)</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Since March 2026, defense contractors must indicate their current CMMC certification level and SPRS score in the new Defense Response module of SAM.gov. If you&apos;ve been assessed, certified, or if your score changed since your last update — including a downward revision after a security incident — your SAM.gov record must reflect it. Misrepresenting CMMC status on a DoD contract is a direct path to False Claims Act exposure.
                  </p>
                  <p className="text-stone-500 text-xs mt-2">
                    Related: <Link href="/blog/cmmc-compliance-dod-contractors" className="text-blue-600 hover:underline">CMMC 2.0 Compliance: What Every DoD Contractor Must Know</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading id="false-claims-liability" number="06" title="False Claims Act Exposure: When a Checkbox Becomes a Lawsuit" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The False Claims Act is not just for fraudulent invoices. Courts have consistently held
              that a contractor who certifies compliance with a material requirement — and that
              certification is false — can face liability even if every dollar billed was legitimate.
              The false certification is the false claim. The invoice doesn&apos;t have to be wrong.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That&apos;s the part most small businesses don&apos;t grasp until they&apos;re facing an
              investigation. A company that certified it was a small business, won a set-aside
              contract, and then billed the government accurately — while actually being above the
              size threshold — has still submitted false claims for payment. Every invoice under that
              contract is potentially a false claim under the Act.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="rose" title="What False Certification Can Cost You">
            <ul className="space-y-1.5 mt-1">
              <li><strong>Civil penalties:</strong> Up to three times the value of the false claim, plus $14,000–$28,000 per violation (amounts adjust for inflation annually)</li>
              <li><strong>Qui tam lawsuits:</strong> Any private party — including a competitor who lost the bid — can file a False Claims Act lawsuit on behalf of the government and collect 15–30% of the recovery</li>
              <li><strong>Contract termination:</strong> The agency can terminate your existing contract for default, with no entitlement to termination costs</li>
              <li><strong>Suspension and debarment:</strong> Administrative action that bars you from federal contracting for years — or permanently in severe cases</li>
              <li><strong>Criminal prosecution:</strong> For knowing and intentional fraud, federal prosecutors can pursue criminal charges carrying prison terms</li>
            </ul>
          </Callout>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The &quot;knowing&quot; standard under the False Claims Act includes &quot;deliberate ignorance&quot; and
              &quot;reckless disregard.&quot; You don&apos;t have to intend to defraud the government. If you
              had reasons to believe your certification was wrong and chose not to investigate,
              that&apos;s enough. Treating the annual Reps &amp; Certs update as a rubber-stamp exercise
              when you know your situation has changed falls squarely into that territory.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              This is not theoretical. GSA has published reports calling out false small business
              certifications as a persistent compliance problem. Competitor protests, inspector general
              referrals, and qui tam suits have all generated False Claims Act cases that originated
              from a contractor&apos;s failure to keep SAM.gov current.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading id="step-by-step-update" number="07" title="How to Update Your Reps & Certs in SAM.gov" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The mechanics of updating are straightforward. What matters is doing it carefully,
              not quickly. Here&apos;s the correct process:
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                step: "01",
                title: "Log in with the right account",
                desc: "Go to sam.gov and sign in with Login.gov or ID.me. You need an account that is linked to your entity registration as an administrator or authorized user. If your account access has lapsed since your last update, you may need to request access from your entity administrator — do not wait until the deadline to discover this.",
              },
              {
                step: "02",
                title: "Navigate to your entity registration",
                desc: "From your workspace, select your entity. You'll see the registration status and expiration date. Click 'Update Entity.' If your registration has already expired, you'll need to start a renewal (click 'Register / Update') — you cannot update a lapsed registration through the standard update flow.",
              },
              {
                step: "03",
                title: "Work through each section to Reps & Certs",
                desc: "SAM.gov's update flow takes you through all sections sequentially. You can navigate directly to Representations and Certifications, but validate Core Data (business address, NAICS codes, size status declarations) first — those upstream answers affect what Reps & Certs questions apply to you.",
              },
              {
                step: "04",
                title: "Review every module, not just the ones you expect to change",
                desc: "After the March 2026 restructure, the Reps & Certs section is organized into the FAR module and (if applicable) the Defense Response module. Work through both completely. Use the plain-language question titles to identify what each certification covers, and look up the underlying FAR clause if you're unsure what you're attesting to.",
              },
              {
                step: "05",
                title: "Update answers that reflect changed facts",
                desc: "This is not a drill. If your NAICS code revenue crossed the size standard, update your size status. If you bought new IT equipment that might include covered telecom, answer the Section 889 questions honestly. If your SDVOSB owner's disability documentation has changed, update accordingly. Erring on the side of 'I'll check it next year' is not a safe strategy.",
              },
              {
                step: "06",
                title: "Submit and wait for activation",
                desc: "After submitting, SAM.gov sends the registration through a validation and review process. Domestic entity updates typically activate within 7–15 business days, though real-world timelines in 2026 are often longer. Your registration is NOT renewed until it shows 'Active' status — submitted is not the same as active.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-5 p-5 rounded-2xl border border-stone-200 bg-white hover-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">{s.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Pro Tip: Update Mid-Year When Facts Change">
            <p>
              You don&apos;t need to wait for your annual renewal to update your Reps &amp; Certs. SAM.gov
              allows mid-registration updates at any time. If your company is acquired, a set-aside
              certification lapses, or you purchase equipment that touches the Section 889 telecom
              question — log in and update within days of the change, not months later. Mid-year
              updates reset your Reps &amp; Certs effective date to the day of submission, which
              matters if you&apos;re actively bidding.
            </p>
          </Callout>

          {/* Section 8 */}
          <SectionHeading id="common-mistakes" number="08" title="Common Mistakes That Trip Up Small Businesses" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The compliance problems we see repeatedly at CapturePilot follow predictable patterns.
              None of them are exotic. Most happen because someone was rushed during the annual
              renewal, or because the business changed faster than the administrative calendar.
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Claiming a NAICS code you no longer qualify for as &quot;small&quot;</h3>
                  <p className="text-amber-800 text-sm">
                    SBA size standards are revenue- or employee-based, and they vary by NAICS code.
                    A company that qualified as small in NAICS 541512 three years ago may have grown
                    past the $34 million average annual revenue threshold today. The SAM.gov system
                    does not automatically flag this. You have to know your size, verify it against
                    current standards, and update your answer.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Forgetting to remove socioeconomic certifications after eligibility ends</h3>
                  <p className="text-amber-800 text-sm">
                    An 8(a) participant who graduates from the program, a HUBZone company that moved
                    out of the zone, or an SDVOSB whose ownership changed — these businesses no longer
                    qualify for those set-asides. But their SAM.gov record still shows the certification
                    unless they actively remove it. Bidding on set-asides you no longer qualify for is
                    a direct compliance violation.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Submitting the renewal 3–5 days before expiration</h3>
                  <p className="text-amber-800 text-sm">
                    SAM.gov processing typically takes 7–15 business days, and sometimes longer during
                    high-volume periods. Submitting a renewal with less than two weeks of runway before
                    expiration is a gamble. If processing runs long, your registration lapses and you
                    become ineligible for awards until activation completes. Start your renewal 45 days
                    before expiration. That gives you buffer time to resolve any identity validation
                    issues that come up during processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Ignoring the DFARS / Defense Response module if you do any DoD work</h3>
                  <p className="text-amber-800 text-sm">
                    Post-March 2026, the Defense Response module is separate and optional-looking in the
                    UI — which means contractors who don&apos;t immediately recognize it as required for DoD
                    work skip it. If you have any active DoD contracts or expect to pursue DoD
                    solicitations, this module is mandatory. CMMC status and SPRS score live here now.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Letting a third-party registration service run your SAM.gov without oversight</h3>
                  <p className="text-amber-800 text-sm">
                    Some businesses use paid services to manage their SAM registration — and some of
                    those services are excellent. But you remain legally responsible for the accuracy
                    of your certifications regardless of who submits them. Review every certification
                    before authorizing submission, and never sign off on a renewal you haven&apos;t read.
                    The signature is yours. So is the liability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="keeping-current" number="09" title="Building a System to Stay Current Year-Round" />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              One-time compliance doesn&apos;t age well in federal contracting. The businesses that avoid
              Reps &amp; Certs problems are the ones that treat it as a living document — not an annual
              checkbox. Here&apos;s a practical system that works for small businesses without a dedicated
              compliance team:
            </p>
          </div>

          <div className="my-8 animate-on-scroll">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-200 p-5 bg-stone-50">
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-stone-900 text-sm">Annual Calendar Reminders</h3>
                </div>
                <ul className="text-stone-600 text-xs space-y-1.5">
                  <li>• Set a calendar alert 45 days before your SAM.gov expiration date</li>
                  <li>• Set a second alert 30 days out (the &quot;must-act&quot; deadline)</li>
                  <li>• Note your expiration date in at least two places — calendar and a shared ops document</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 p-5 bg-stone-50">
                <div className="flex items-center gap-2 mb-3">
                  <RefreshCw className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-stone-900 text-sm">Quarterly Business Review Checklist</h3>
                </div>
                <ul className="text-stone-600 text-xs space-y-1.5">
                  <li>• Review revenue vs. SBA size standards for each active NAICS code</li>
                  <li>• Confirm any set-aside certifications (8(a), HUBZone, WOSB, SDVOSB) are still valid</li>
                  <li>• Note any new IT equipment or telecom purchases for Section 889 review</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 p-5 bg-stone-50">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-stone-900 text-sm">Trigger-Based Updates</h3>
                </div>
                <ul className="text-stone-600 text-xs space-y-1.5">
                  <li>• Acquisition, merger, or ownership change → update immediately</li>
                  <li>• HUBZone move or principal employee relocation → update immediately</li>
                  <li>• New IT vendor or telecom system → review Section 889 before next bid</li>
                  <li>• Any federal enforcement action → update debarment/responsibility section</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 p-5 bg-stone-50">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-stone-900 text-sm">Before Every Major Bid</h3>
                </div>
                <ul className="text-stone-600 text-xs space-y-1.5">
                  <li>• Log into SAM.gov and verify your registration is Active (not expiring within 30 days)</li>
                  <li>• Check that your claimed NAICS codes and size status match what you&apos;re bidding under</li>
                  <li>• For set-aside bids, verify the underlying program certification is current</li>
                  <li>• For DoD bids, verify your Defense Response module is complete and current</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              If you want a more automated layer, CapturePilot&apos;s intelligence tools track your
              registration status and alert you to upcoming expirations, eligibility changes, and
              competitor certification shifts. The goal isn&apos;t to replace your own review — it&apos;s to
              make sure nothing slips through the cracks when you&apos;re busy pursuing active opportunities.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              See also: <Link href="/blog/sam-gov-renewal-guide" className="text-blue-700 hover:underline">SAM.gov Renewal Guide</Link> for the full registration renewal process,
              and <Link href="/blog/sam-gov-search-tips" className="text-blue-700 hover:underline">SAM.gov Search Tips</Link> for how to use the platform to find opportunities once your registration is current.
            </p>
          </div>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="text-center">
              <h3 className="text-2xl font-black text-stone-900 mb-3">Ready to put accurate certifications to work?</h3>
              <p className="text-stone-600 mb-6 max-w-xl mx-auto">
                CapturePilot matches your verified SAM.gov certifications against live federal
                opportunities — so you pursue contracts you&apos;re actually eligible for, and never
                waste time on ones where your status disqualifies you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 border border-stone-200 font-semibold px-6 py-3 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-stone-200 animate-on-scroll">
            <h3 className="text-lg font-bold text-stone-900 mb-4">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/sam-gov-renewal-guide", title: "SAM.gov Renewal Guide", desc: "How to avoid registration lapses that can kill your federal contracts" },
                { href: "/blog/sba-size-standards-guide", title: "SBA Size Standards Guide", desc: "How to determine if you qualify as small under each NAICS code" },
                { href: "/blog/federal-contracting-certifications", title: "Federal Contracting Certifications", desc: "Which certifications actually help you win set-aside contracts" },
                { href: "/blog/cage-code-registration-guide", title: "CAGE Code Registration Guide", desc: "The other identifier you need alongside your SAM.gov registration" },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-start gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <p className="font-semibold text-stone-900 text-sm group-hover:text-blue-700 transition-colors">{r.title}</p>
                    <p className="text-stone-500 text-xs mt-0.5">{r.desc}</p>
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
