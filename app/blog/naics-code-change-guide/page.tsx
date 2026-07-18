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
  Hash,
  DollarSign,
  Target,
  Zap,
  FileText,
  RefreshCw,
  Sparkles,
  BarChart3,
  Shield,
  Search,
  Award,
  ClipboardList,
  TrendingUp,
  XCircle,
  Settings,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-naics-matter", label: "Why NAICS Codes Run Your Eligibility" },
  { id: "when-to-update", label: "When to Update Your NAICS Codes" },
  { id: "step-by-step", label: "How to Change NAICS Codes in SAM.gov" },
  { id: "primary-vs-secondary", label: "Primary vs. Secondary NAICS" },
  { id: "set-aside-impact", label: "Impact on Set-Aside Certifications" },
  { id: "size-standard-trap", label: "The Size Standard Trap" },
  { id: "choosing-codes", label: "Choosing Which Codes to Add" },
  { id: "after-update", label: "After the Update: What to Monitor" },
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function NaicsCodeChangeGuidePage() {
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
            <span className="text-stone-900 font-medium">Change NAICS Codes in SAM.gov</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Settings className="w-4 h-4" /> Tools &amp; Tactics
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Change Your NAICS Codes in SAM.gov{" "}
            <span className="gradient-text">Without Losing Set-Aside Eligibility</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Your NAICS codes in SAM.gov determine which contracts you can see, which set-asides you
            qualify for, and which size standards apply to your bids. Most contractors set them once
            and forget them. Here&apos;s how to keep them current — and what to check before you
            make any change.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 18, 2026</span>
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
            id="why-naics-matter"
            number="01"
            title="Why NAICS Codes Run Your Contracting Eligibility"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Every federal contract posted on SAM.gov carries a NAICS code — a 6-digit North
              American Industry Classification System code that identifies what type of work is being
              purchased. That single code does two things that directly affect your ability to win:
              it sets the size standard that defines whether you qualify as a small business for that
              contract, and it determines which set-aside programs apply.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              If your SAM.gov entity profile doesn&apos;t list the NAICS code the contracting
              officer assigned to a solicitation, that contract likely won&apos;t appear in your
              opportunity searches — and even if you find it manually, you may have additional
              compliance hurdles when representing your eligibility. Your NAICS list is your
              contracting footprint. The codes you list are the codes where you compete.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              SBA publishes size standards for every NAICS code in Title 13 of the Code of Federal
              Regulations, Part 121. Those standards fall into two types: revenue-based (average
              annual receipts over the prior 3 years) and employee-based (number of employees,
              averaged over the prior 12 months). The threshold varies significantly by code.
              A professional services firm in management consulting (NAICS 541611) qualifies as
              small under a different revenue ceiling than a firm doing computer systems design
              (NAICS 541512). The code on the contract is the one that counts — not your primary
              code in SAM.gov.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  stat: "1,000+",
                  label: "NAICS codes in current SBA size standards table",
                  icon: Hash,
                },
                {
                  stat: "2 types",
                  label: "Size standards: revenue-based and employee-based",
                  icon: BarChart3,
                },
                {
                  stat: "Annual",
                  label: "How often SAM.gov registration must be renewed",
                  icon: RefreshCw,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The mismatch between a contractor&apos;s SAM.gov NAICS list and the work they actually
              do is one of the most common and costly oversights in federal contracting. A firm that
              has expanded into new service areas but never updated its SAM profile is invisible to
              contracting officers searching for those capabilities — and missing set-aside
              opportunities it&apos;s genuinely qualified to pursue.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Updating your NAICS codes is also one of the lowest-risk, highest-return administrative
              actions you can take in SAM.gov. It takes less than an hour. It can open up entire
              categories of contracts you haven&apos;t been matching against. And it&apos;s something
              you should review at least once per year — ideally at registration renewal time.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="NAICS 2022: The Last Major Revision">
            The federal government adopted NAICS 2022 for procurement effective October 1, 2022 —
            the most significant coding update since the previous revision five years earlier. That
            revision created 111 new industries, eliminated 139 codes, and reduced the total NAICS
            count from 1,057 to 1,012. The biggest restructuring hit Retail Trade (44–45) and
            Information (51). If your SAM.gov registration was set up before October 2022 and
            you&apos;ve never reviewed it, your registered codes may be outdated or technically
            invalid. Check the Census Bureau&apos;s NAICS crosswalk to confirm your codes
            translated correctly from NAICS 2017. The next revision is scheduled for 2027.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="when-to-update"
            number="02"
            title="When to Update Your NAICS Codes"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most contractors change their NAICS codes too infrequently — often not at all after
              initial registration. A few situations make an update urgent. Others signal it&apos;s
              simply overdue.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: TrendingUp,
                  title: "You've added new service lines",
                  desc: "If your firm has expanded into a new capability area — say, IT staffing alongside your existing IT development work, or facilities management alongside security services — your SAM.gov profile should reflect that. Contracts in those adjacent areas will be posted under different NAICS codes. If your profile doesn't list them, you're competing blind.",
                  urgent: false,
                },
                {
                  icon: Award,
                  title: "You've earned a new certification",
                  desc: "If you've received HUBZone certification, WOSB certification, or VetCert approval for SDVOSB, review your NAICS list before pursuing set-aside opportunities under those programs. The certification is program-wide, but your eligibility for each specific contract depends on meeting the size standard under the contract's NAICS code. Make sure your SAM profile includes the NAICS codes where you'll actually pursue set-asides.",
                  urgent: false,
                },
                {
                  icon: Search,
                  title: "You're finding few matching opportunities",
                  desc: "If your SAM.gov searches — or your CapturePilot matching results — are returning few relevant opportunities, the first place to look is your NAICS list. Too few codes, or codes that don't precisely match the contracts being posted in your space, produces exactly this symptom. Run a search for recent awards in your target agencies and compare the NAICS codes there against your profile.",
                  urgent: false,
                },
                {
                  icon: AlertTriangle,
                  title: "A solicitation used a code not in your profile",
                  desc: "When you find a contract you're clearly qualified to pursue but the NAICS code isn't in your SAM.gov profile, update your profile before the solicitation closes. You're allowed to represent small business status under a NAICS code as long as you meet the applicable size standard — but your profile should reflect the codes you work in. Fix the gap immediately.",
                  urgent: true,
                },
                {
                  icon: RefreshCw,
                  title: "Annual renewal",
                  desc: "SAM.gov registration expires 365 days from your last renewal. That annual renewal is your mandatory checkpoint for reviewing everything — contact information, banking, certifications, and NAICS codes. Don't just click through renewal without a full profile audit. Start the renewal 60 days early (IRS validation and CAGE code confirmation can take 5-10 business days), and treat the NAICS review as a required step in the process.",
                  urgent: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border animate-on-scroll ${
                    item.urgent
                      ? "border-amber-200 bg-amber-50"
                      : "border-stone-200 hover-lift"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.urgent ? "bg-amber-100" : "bg-blue-50"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.urgent ? "text-amber-600" : "text-blue-600"}`}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      {item.urgent && (
                        <span className="text-xs bg-amber-200 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                          Act Now
                        </span>
                      )}
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              A good rule of thumb: if it&apos;s been more than 12 months since you last reviewed
              your NAICS list against the contracts being awarded in your target market, it&apos;s
              overdue. Use our{" "}
              <Link href="/features/matching" className="text-blue-700 underline font-medium">
                opportunity matching tool
              </Link>{" "}
              to see which NAICS codes are appearing on the contracts your competitors are winning —
              and compare that against what&apos;s in your SAM.gov profile.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <Search className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Check Which Set-Asides You Qualify For
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Before updating your NAICS codes, know which programs you&apos;re eligible for. Our
              Quick Checker tells you which small business certifications you likely qualify for —
              free, in under 3 minutes.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">Free, no account required</p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="step-by-step"
            number="03"
            title="How to Change NAICS Codes in SAM.gov: Step-by-Step"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SAM.gov interface has evolved significantly over the past few years. NAICS codes
              live in the &quot;Assertions&quot; section of your entity registration — the same
              section where you manage your business types, certifications, and goods/services
              information. Here&apos;s the current process.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Log in to SAM.gov with your login.gov account",
                  desc: "Go to SAM.gov and sign in. You need to be logged in as the Entity Administrator or someone with authority to edit the entity registration. If you're unsure who holds the Entity Administrator role for your organization, that information is visible from the entity dashboard. Never share login.gov credentials — set up the correct role assignment instead.",
                },
                {
                  step: "02",
                  title: "Navigate to your entity registration",
                  desc: "From your SAM.gov dashboard, go to Workspace and select 'Entity Registrations.' Find your organization and click on the entity name to open the entity record. You'll see the registration status, expiration date, and a summary of your current data. If your registration is expired, you'll need to complete renewal before making edits.",
                },
                {
                  step: "03",
                  title: "Click 'Edit' to open the registration wizard",
                  desc: "Select the 'Edit' option on your entity registration. SAM.gov walks you through your registration in sections. You don't have to complete every section during an edit — you can navigate directly to 'Assertions' — but review each section you pass through to catch any outdated information.",
                },
                {
                  step: "04",
                  title: "Open the Core Data section and find NAICS",
                  desc: "In the registration wizard, navigate to 'Core Data.' The NAICS Codes subsection displays your current list. You'll see your designated primary NAICS code and all secondary codes. To add a new code, type the 6-digit NAICS code or search by keyword. SAM.gov validates the code against the current NAICS 2022 table.",
                },
                {
                  step: "05",
                  title: "Add codes and confirm size standard accuracy",
                  desc: "When you add a NAICS code, SAM.gov shows the code description and the applicable SBA size standard. Review this carefully. Confirm you genuinely perform work under that code and that your business meets the relevant size standard — either the revenue threshold (based on average annual receipts over the prior 5 fiscal years, as updated in SBA's December 2023 methodology revision) or the employee count (averaged over the prior 24 months). Common IT services codes like 541512 carry a $34M receipts threshold; management consulting (541611) sits at $24.5M; engineering services (541330) at $25.5M. The size standard you see here is the same one that applies when you certify as small on a contract using that code.",
                },
                {
                  step: "06",
                  title: "Set or change your primary NAICS code",
                  desc: "One NAICS code in your list must be designated as primary. This doesn't restrict which contracts you can pursue — it's an administrative designation that signals your core business focus. Set the primary code to the NAICS that best represents your highest-revenue or most strategically important service area. You can change the primary designation at any time.",
                },
                {
                  step: "07",
                  title: "Remove outdated codes (carefully)",
                  desc: "If you have codes that no longer reflect your business, you can remove them. Before deleting a code, verify you have no active contracts, task orders, or pending solicitations under that NAICS. Removing a code doesn't affect existing contracts, but it signals to the market that you no longer perform that work — and it removes you from opportunity searches using that code.",
                },
                {
                  step: "08",
                  title: "Submit and wait for processing",
                  desc: "After completing your edits, submit the registration. SAM.gov processes updates within 1-2 business days in most cases. You'll receive a confirmation email when the update is active. If you're in the middle of pursuing a solicitation, submit updates as early as possible — don't wait until the response deadline.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One process note worth knowing: you can edit your entity registration at any time
              during the year, not just at renewal. Your registration stays active while edits are
              pending. The 365-day expiration clock continues regardless of interim edits — it only
              resets when you complete a full renewal cycle.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For the complete SAM.gov registration walkthrough — including the initial registration
              process, the IRS validation step, and common error fixes — see our{" "}
              <Link
                href="/blog/sam-registration-guide"
                className="text-blue-700 underline font-medium"
              >
                SAM.gov registration guide
              </Link>
              . It covers the full process from initial setup through annual renewal.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="SAM.gov Edits Take 1-2 Business Days — Don't Wait">
            If you realize you&apos;re missing a NAICS code while reviewing a solicitation, submit
            the SAM.gov update immediately — not the night before the response deadline. Edits
            typically process within 1-2 business days, but delays occur. A pending update doesn&apos;t
            constitute active registration under the new NAICS code. Start early.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="primary-vs-secondary"
            number="04"
            title="Primary vs. Secondary NAICS: What the Designation Actually Does"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Contractors often assume the primary NAICS code carries more legal weight than
              secondary codes — that it somehow determines your &quot;real&quot; size standard
              or limits which contracts you can pursue. That&apos;s not how it works.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s what the primary designation actually affects versus what it
              doesn&apos;t:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Factor</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Primary NAICS</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Secondary NAICS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        factor: "Appears in entity summary",
                        primary: "Yes — visible at top of entity record",
                        secondary: "Listed, but not prominently featured",
                      },
                      {
                        factor: "Limits which contracts you can bid",
                        primary: "No — you can bid on any listed NAICS",
                        secondary: "No — same bidding rights as primary",
                      },
                      {
                        factor: "Size standard that applies to a bid",
                        primary: "The contract's NAICS code controls, regardless of primary status",
                        secondary: "Same — the contract's assigned NAICS drives the standard",
                      },
                      {
                        factor: "Set-aside eligibility per bid",
                        primary: "Determined by the contract NAICS, not your primary designation",
                        secondary: "Identical — certification is not NAICS-specific",
                      },
                      {
                        factor: "Signals to contracting officers",
                        primary: "Represents your core business focus area",
                        secondary: "Supplementary capabilities",
                      },
                      {
                        factor: "Opportunity matching filters",
                        primary: "Some platforms filter against primary by default",
                        secondary: "Included in searches if configured correctly",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs">{row.factor}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed">{row.primary}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-relaxed">{row.secondary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The practical implication: set your primary NAICS to the code that most accurately
              describes your highest-revenue or most strategically important service area. This helps
              contracting officers who view your entity profile understand your core capability at a
              glance. But don&apos;t obsess over it at the expense of ensuring your secondary list
              is comprehensive.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Where the primary code matters operationally is in some opportunity discovery platforms
              and databases that filter or display entity records based on primary NAICS. If
              CapturePilot or a contracting officer is pulling a list of entities registered under a
              specific NAICS code, your firm appears regardless of whether the code is primary or
              secondary — as long as it&apos;s in your list. But when you&apos;re searchable by code
              matters only if the code is there at all.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One area where the primary code does have regulatory relevance: the SBA&apos;s size
              certification process for some programs. Under{" "}
              <strong>8(a) certification</strong> and certain small business self-certification
              requirements, SBA and contracting officers may reference your primary NAICS when
              assessing your principal industry. Keep your primary code current and accurate for this
              reason — not because it restricts your bidding, but because it defines how your
              business is officially classified.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="set-aside-impact"
            number="05"
            title="Impact on Set-Aside Certifications"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              This is where most contractors get confused. Your set-aside certification — SDVOSB,
              WOSB, 8(a), HUBZone — is a program-level designation. It&apos;s not tied to specific
              NAICS codes in your SAM.gov profile. Adding or removing NAICS codes does not, by
              itself, trigger a requirement to re-certify under those programs.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              What does matter is the size standard on each specific contract you pursue. Here&apos;s
              how it plays out in practice:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Shield,
                  title: "SDVOSB and VOSB (VetCert Program)",
                  desc: "The VA administers VetCert certification for SDVOSB and VOSB programs. Your certification is firm-wide and covers all NAICS codes you're registered under. However, on any given SDVOSB set-aside contract, you must certify that your business qualifies as small under the size standard for the contract's specific NAICS code. If you've added a new NAICS code with a lower size standard than your primary, and your revenues have grown, you might be small for some codes but not others.",
                },
                {
                  icon: Award,
                  title: "WOSB (Women-Owned Small Business)",
                  desc: "WOSB self-certification was eliminated on October 15, 2020. You must now hold SBA-issued certification (free at certify.sba.gov) or certification from an SBA-approved third-party certifier — recertification required every three years. Critically, WOSB set-asides can only be issued under NAICS codes on SBA's eligible WOSB industry list, which currently covers 759 industries. Adding a NAICS code to SAM.gov that's not on that eligible list means you can pursue full-and-open competition under it, but not WOSB set-asides.",
                },
                {
                  icon: Target,
                  title: "8(a) Business Development Program",
                  desc: "8(a) certification is the most regulated. Your 8(a) status is firm-wide. Adding NAICS codes doesn't require re-certification, but if you add codes substantially outside your approved primary industry, SBA may view that as a change in business activity that should be reported. Consult your Business Opportunity Specialist (BOS) before making significant NAICS changes if you're active in the 8(a) program. SBA can and does review whether 8(a) participants are operating consistently with their approved business plans.",
                },
                {
                  icon: Hash,
                  title: "HUBZone",
                  desc: "HUBZone certification doesn't restrict which NAICS codes you pursue. As of January 16, 2025, HUBZone recertification frequency dropped from annual to every three years — a significant change from prior practice. The employee HUBZone residency requirement was also reduced from 180 to 90 calendar days. Adding or removing NAICS codes has no direct effect on HUBZone status, which turns on location and employee residency, not industry classification.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The underlying principle: your <em>certification</em> status doesn&apos;t change when
              you update NAICS codes. But your <em>eligibility</em> to use that certification on
              a specific contract depends on meeting the size standard for that contract&apos;s
              NAICS code. These are two different things — and mixing them up leads to either
              missed opportunities (refusing to bid because you think you don&apos;t qualify) or
              compliance risk (bidding as small when you exceed the applicable standard).
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use our{" "}
              <Link href="/features/quick-checker" className="text-blue-700 underline font-medium">
                Quick Checker
              </Link>{" "}
              to verify your size status under specific NAICS codes before pursuing set-aside
              opportunities. It compares your revenue or employee count against the current SBA size
              table for any 6-digit NAICS code — so you know your eligibility before you invest
              proposal time.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="red" title="The January 2025 SBA Rule Changed Recertification Permanently">
            Effective January 16, 2025, SBA consolidated recertification requirements into a single
            new regulation (13 CFR 125.12). Key triggers: mandatory recertification within 30
            calendar days of any merger, acquisition, or sale resulting in a change of controlling
            interest; and on contracts over five years, mandatory recertification within 120 days
            before the end of year five and before any option is exercised. Firms that recertify
            as "other than small" on a Multiple Award Contract lose eligibility for new set-aside
            task orders under that MAC. None of these triggers are activated by NAICS code changes
            in SAM.gov — they&apos;re activated by business events and contract milestones. But if
            you&apos;re updating NAICS codes because your business is growing, check whether that
            growth has also pushed you over any size standards relevant to active contracts.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="size-standard-trap"
            number="06"
            title="The Size Standard Trap: When Adding a Code Hurts You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Adding NAICS codes expands your opportunity footprint. But it can also create size
              compliance landmines if you&apos;re not careful about which codes you select.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The specific risk: some NAICS codes have materially lower size standards than others.
              If you add a code with a $10 million revenue threshold to a profile that mostly
              contains codes with $30 million thresholds, and you&apos;re operating near $25 million
              in revenue, you can no longer represent yourself as small on contracts assigned that
              lower-threshold code. You&apos;ve effectively added a code where you&apos;re not a
              small business.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              This happens most often in two scenarios:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: XCircle,
                  label: "Code Creep",
                  desc: "Adding every adjacent code to maximize opportunity coverage — without checking whether you meet the size standard for each one. A firm that's solidly small at $20M under NAICS 541512 ($34M threshold) might not qualify as small under NAICS 541611 (management consulting) if that code carries a lower threshold in the SBA table. Always check each code's size standard before adding it.",
                },
                {
                  icon: TrendingUp,
                  label: "Revenue Growth",
                  desc: "Adding a code while near the top of your current size standard range can become a problem as revenue grows. You might qualify as small today, but if revenue increases over the 3-year averaging window, you could exceed the threshold mid-performance on a contract. Track your average annual receipts against every size standard in your NAICS list, not just the primary.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-stone-200 animate-on-scroll hover-lift"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-red-500" />
                    <p className="font-bold text-stone-900 text-sm">{item.label}</p>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The solution is straightforward: before adding any NAICS code to your SAM.gov profile,
              look up the size standard in the{" "}
              <strong>SBA&apos;s Table of Small Business Size Standards</strong> — a public document
              updated periodically and available at SBA.gov. Compare that threshold against your
              average annual receipts (or employee count, for employee-based codes). Only add codes
              where you genuinely qualify as small.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              A common question: should you add NAICS codes where you&apos;re not small if you
              plan to pursue those contracts as a large business? Yes — you can add codes and
              pursue full-and-open competition under them. But be precise in your self-certification
              on each contract offer. Certifying as small when you exceed the applicable size
              standard is a False Claims Act violation. The codes in your SAM.gov profile don&apos;t
              create liability — incorrect self-certification on a specific offer does.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              One more fact worth knowing: GAO has ruled in multiple bid protests that a contractor
              is not required to list a solicitation&apos;s specific NAICS code in their SAM.gov
              profile to be eligible for award. The CO&apos;s assigned NAICS code — not your SAM
              registration — determines which size standard applies and governs your size
              self-certification on that specific offer. Your profile is for discoverability and
              market positioning, not legal eligibility on any single contract. (GAO B-413198,
              B-409736.2, B-423730.)</p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Separately: if a contracting officer assigns a NAICS code to a solicitation that
              doesn&apos;t reflect the actual principal purpose of the work, you can appeal to
              SBA&apos;s Office of Hearings and Appeals (OHA) within 10 calendar days of
              solicitation issuance. A different code assignment can change the size standard,
              the set-aside eligibility, and the competitive pool. Most contractors don&apos;t use
              this option — it&apos;s worth knowing it exists.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For context on the full SBA set-aside framework and how size standards interact with
              program requirements, see our guide on{" "}
              <Link
                href="/blog/small-business-set-aside-threshold"
                className="text-blue-700 underline font-medium"
              >
                small business set-aside thresholds
              </Link>{" "}
              and the{" "}
              <Link href="/blog/sba-size-standards-guide" className="text-blue-700 underline font-medium">
                complete 2026 SBA size standards guide
              </Link>
              .
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">See Which Contracts Match Your NAICS Profile</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot matches your NAICS codes, certifications, and target agencies against
              SAM.gov daily — so you see the set-aside opportunities you actually qualify for, not
              just general search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="bg-transparent text-white border border-stone-600 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Strategy Call
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-4">No credit card required for the free trial.</p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="choosing-codes"
            number="07"
            title="Choosing Which Codes to Add (and Which to Skip)"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The goal isn&apos;t to list every NAICS code that vaguely applies to your industry.
              It&apos;s to list every code under which you could genuinely win and perform a federal
              contract — and where you qualify as small or are willing to compete full-and-open.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Before doing that work, here&apos;s a quick reference for size standards across some
              common professional services and IT NAICS codes, so you know what you&apos;re
              checking against:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">NAICS Code</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Description</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Size Standard</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { code: "541511", desc: "Custom Computer Programming Services", std: "$34M", type: "Receipts" },
                      { code: "541512", desc: "Computer Systems Design Services", std: "$34M", type: "Receipts" },
                      { code: "541519", desc: "Other Computer Related Services", std: "$34M", type: "Receipts" },
                      { code: "541330", desc: "Engineering Services", std: "$25.5M", type: "Receipts" },
                      { code: "541611", desc: "Admin. Management Consulting", std: "$24.5M", type: "Receipts" },
                      { code: "541612", desc: "Human Resources Consulting", std: "$19M", type: "Receipts" },
                      { code: "541380", desc: "Testing Laboratories and Services", std: "$19M", type: "Receipts" },
                      { code: "541310", desc: "Architectural Services", std: "$12.5M", type: "Receipts" },
                      { code: "236220", desc: "Commercial and Institutional Building Construction", std: "1,500", type: "Employees" },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-mono text-xs font-bold text-blue-700">{row.code}</td>
                        <td className="px-5 py-3 text-stone-700 text-xs">{row.desc}</td>
                        <td className="px-5 py-3 font-bold text-stone-900 text-xs">{row.std}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 bg-stone-100 text-xs text-stone-500">
                Source: SBA Table of Size Standards. Receipts-based standards use average annual
                receipts over the prior 5 fiscal years (updated December 2023). Always verify
                current thresholds at sba.gov/size-standards before certifying.
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s a practical process for identifying which codes to add:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: FileText,
                  title: "Research recent awards in your target agencies",
                  desc: "Use SAM.gov award notices or USASpending.gov to pull the last 24 months of contract awards in your space at your target agencies. List every NAICS code that appears. Cross-reference against your current SAM.gov profile. Any code appearing in multiple awards that you can genuinely perform — and that you're not already listed under — is a candidate for addition.",
                },
                {
                  icon: ClipboardList,
                  title: "Run the size standard check on each candidate",
                  desc: "For each candidate code, pull the current SBA size standard from SBA.gov. Calculate your 3-year average annual receipts (or employee count). If you're under the threshold, you're small — add it. If you're over, you can still add it but you won't qualify for set-asides under that code.",
                },
                {
                  icon: DollarSign,
                  title: "Check the dollar volume in that NAICS",
                  desc: "Some NAICS codes produce a handful of federal awards per year at your target agencies. Adding them adds noise without opportunity. Use USASpending.gov to check total annual federal obligation volume in that NAICS at the agencies you target. If the code generates less than a handful of relevant awards per year, reconsider — there may be more precise codes that capture the same work more accurately.",
                },
                {
                  icon: Target,
                  title: "Look at how your competitors are registered",
                  desc: "Pull the SAM.gov entity registrations of firms that regularly win work you compete for or want to compete for. The NAICS codes they list — particularly codes adjacent to your current list — are worth reviewing. Competitors doing work in your space have typically already worked out which NAICS codes map to the actual procurement landscape.",
                },
                {
                  icon: Zap,
                  title: "Prioritize specificity over breadth",
                  desc: "Contracting officers setting aside contracts want to ensure the NAICS code reflects the principal work being purchased. When you respond to a Sources Sought or submit a proposal, a profile with a focused, coherent list of NAICS codes is more credible than a sprawling list that appears to claim every possible category. Add adjacent codes strategically — not indiscriminately.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              A brief note on the relationship between NAICS codes and PSC (Product and Service)
              codes: when you&apos;re researching contracts in your space, you&apos;ll often find
              that agencies use different PSC codes for similar work. A NAICS 541512 award might
              carry PSC D301 or PSC D307 depending on the agency and specific requirement.
              Understanding the PSC codes that pair with your NAICS codes improves your SAM.gov
              search precision significantly — see our{" "}
              <Link href="/blog/sam-gov-search-tips" className="text-blue-700 underline font-medium">
                SAM.gov search tips guide
              </Link>{" "}
              for the full filter stack approach.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 underline font-medium">
                opportunity matching
              </Link>{" "}
              uses your registered NAICS codes as the starting point for daily matching — then layers
              in your certifications, target agencies, and contract size preferences to surface
              relevant opportunities. Keeping your NAICS list accurate directly improves the quality
              of your match results.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Start With Adjacent Codes in Your Core Sector">
            The easiest NAICS codes to add are those immediately adjacent to your current primary
            code within the same sector. In the 54 sector (Professional, Scientific, and Technical
            Services), for example, adjacent codes often cover closely related work — training,
            consulting, management services, and IT services may all be relevant to a firm primarily
            registered under one of them. Start with same-sector adjacencies before branching into
            other sectors entirely.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="after-update"
            number="08"
            title="After the Update: What to Monitor"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Updating your NAICS codes is the first step. Making sure the update produces the
              results you intended requires follow-through. Here&apos;s what to check after any
              significant NAICS change.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Verify the update processed correctly",
                  desc: "Within 2-3 business days of your update, log back in to SAM.gov and confirm the new codes appear in your entity record as you intended. Confirm the primary designation is set correctly. Pull up the public view of your entity profile (logged out, searching by CAGE code or company name) to verify what contracting officers and vendor databases see.",
                },
                {
                  step: "02",
                  title: "Run a fresh opportunity search against the new codes",
                  desc: "After confirming the codes are active, run SAM.gov searches filtered to your new NAICS codes and your target agencies. This gives you a baseline of what's currently active in those codes — and surfaces any backlog of opportunities you may have been missing. Add the new codes to your saved searches and opportunity alerts.",
                },
                {
                  step: "03",
                  title: "Check your self-certification statements on active offers",
                  desc: "If you have outstanding proposals or active task order bids, review your size self-certifications. Adding a NAICS code to your SAM.gov profile doesn't retroactively affect anything, but if any active solicitation used the newly added code and you certified your size status before updating your profile, confirm you're still comfortable with that representation.",
                },
                {
                  step: "04",
                  title: "Update your capability statement",
                  desc: "If you added new NAICS codes because you've genuinely expanded your capabilities, your capability statement should reflect that. A capability statement listing only your previous service lines while your SAM.gov profile shows new NAICS codes creates a gap that contracting officers will notice. Keep both in sync. See our guide on",
                },
                {
                  step: "05",
                  title: "Calendar the next review — don't wait for renewal",
                  desc: "Annual renewal is the mandatory NAICS review moment, but it shouldn't be the only one. Set a calendar reminder every 6 months to run a quick check: Have you won work in categories not in your profile? Are there new solicitation patterns in your target agencies using codes you're missing? Are any of your codes obsolete because of how your business has evolved? The 30-minute semi-annual review is far less disruptive than discovering a missed category after a contract award you didn't pursue.",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    {i === 3 ? (
                      <p className="text-stone-600 text-sm leading-relaxed">
                        If you added new NAICS codes because you&apos;ve genuinely expanded your
                        capabilities, your capability statement should reflect that. A capability
                        statement listing only your previous service lines while your SAM.gov profile
                        shows new NAICS codes creates a gap that contracting officers will notice.
                        Keep both in sync. See our guide on{" "}
                        <Link
                          href="/blog/capability-statement-examples"
                          className="text-blue-700 underline font-medium"
                        >
                          capability statement examples
                        </Link>{" "}
                        for what strong and weak ones look like — or use CapturePilot&apos;s{" "}
                        <Link
                          href="/features/capability-statement"
                          className="text-blue-700 underline font-medium"
                        >
                          capability statement builder
                        </Link>{" "}
                        to update yours in minutes.
                      </p>
                    ) : (
                      <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One last thing: the connection between your NAICS profile and your pipeline. The
              contracts in your{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                pursuit pipeline
              </Link>{" "}
              should map directly to the NAICS codes in your SAM.gov profile. If you&apos;re
              regularly pursuing contracts under codes not in your profile, something is out of
              sync. Either update your profile to reflect your actual business, or reconsider whether
              those are the right opportunities to pursue. Consistency between your SAM.gov profile,
              capability statement, and pursuit pipeline is what makes your market positioning
              coherent to contracting officers who evaluate multiple bids.
            </p>
            <p className="text-stone-600 leading-relaxed">
              For the comprehensive approach to building and managing an opportunity pipeline from
              first notice to award, see our guide on{" "}
              <Link
                href="/blog/government-contract-pipeline-management"
                className="text-blue-700 underline font-medium"
              >
                government contract pipeline management
              </Link>
              . It covers the full cycle — from initial SAM.gov search through proposal submission
              and post-award management — with specific workflow recommendations for small businesses.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="NAICS Codes and Agency Procurement Forecasts">
            Most federal agencies publish annual procurement forecasts — lists of upcoming
            acquisitions organized by NAICS code, estimated value, and anticipated set-aside type.
            These forecasts are published months before solicitations hit SAM.gov. After updating
            your NAICS codes, pull your target agencies&apos; current forecasts (on their OSDBU
            websites) and filter by your new NAICS codes. That&apos;s the fastest way to see whether
            your updated profile opens up visible pipeline — well before the first solicitation drops.
          </Callout>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Match More Contracts. Win More Work.
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot uses your NAICS codes, certifications, and target agencies to surface
                the right set-aside opportunities every day — so you spend less time searching and
                more time winning.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily opportunity matching based on your exact NAICS profile",
                  "Size eligibility check against current SBA size standards",
                  "Set-aside filtering for your certifications",
                  "Sources Sought and early notice alerts",
                  "Pipeline management from first notice to award",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={SIGNUP_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={CHECK_URL}
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Check Eligibility Free
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">No credit card required. Cancel any time.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sam-gov-search-tips",
                  icon: Search,
                  title: "SAM.gov Search Tips",
                  desc: "Filter stacks, saved searches, and daily workflow for finding real opportunities",
                },
                {
                  href: "/blog/sba-size-standards-guide",
                  icon: BarChart3,
                  title: "SBA Size Standards Guide",
                  desc: "Complete 2026 guide to qualifying as a small business under current thresholds",
                },
                {
                  href: "/blog/small-business-set-aside-threshold",
                  icon: DollarSign,
                  title: "Set-Aside Thresholds",
                  desc: "Dollar limits and program rules for small business set-asides",
                },
                {
                  href: "/blog/federal-contracting-certifications",
                  icon: Award,
                  title: "Federal Contracting Certifications",
                  desc: "Which certifications actually help you win government contracts",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{link.title}</p>
                    <p className="text-xs text-stone-500">{link.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
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
