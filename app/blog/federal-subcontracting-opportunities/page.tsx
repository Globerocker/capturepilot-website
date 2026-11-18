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
  TrendingUp,
  Clock,
  AlertCircle,
  Building,
  Award,
  FileText,
  Target,
  DollarSign,
  Search,
  Handshake,
  BarChart3,
  Shield,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-subcontracting", label: "Why Subcontracting Is the Smart Way to Start" },
  { id: "legal-framework", label: "The Legal Framework: Why Primes Have to Work With You" },
  { id: "find-opportunities", label: "Where to Find Subcontracting Opportunities" },
  { id: "what-primes-want", label: "What Prime Contractors Actually Look For" },
  { id: "sub-pitch", label: "Building a Winning Sub Pitch" },
  { id: "contract-terms", label: "Subcontract Terms You Must Negotiate" },
  { id: "past-performance", label: "Converting Sub Work Into Prime Past Performance" },
  { id: "90-day-plan", label: "Your 90-Day Plan to Land Your First Sub" },
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

export default function FederalSubcontractingOpportunitiesPage() {
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
            <span className="text-stone-900 font-medium">Federal Subcontracting</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Federal Subcontracting Opportunities:{" "}
            <span className="gradient-text">How Small Businesses Win Work as Subs in 2026</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Large federal prime contractors are legally required to subcontract work to small businesses —
            and they report those results to the government every year. Here&apos;s how to find those
            opportunities, get in front of the right people, and turn sub work into the past performance
            that wins you prime contracts.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published November 18, 2026</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 py-8 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "$273B", label: "Federal Awards Including Subs (FY25)", icon: DollarSign },
              { value: "23%", label: "Statutory Small Business Goal", icon: Target },
              { value: "$900K", label: "Contract Threshold Requiring Sub Plan", icon: FileText },
              { value: "5%", label: "SDVOSB Subcontracting Goal", icon: Award },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 text-blue-600 mb-1" />
                <p className="text-2xl font-black text-stone-900">{value}</p>
                <p className="text-xs text-stone-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8 pt-8">
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
          <SectionHeading id="why-subcontracting" number="01" title="Why Subcontracting Is the Smart Way to Start" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Most small businesses try to win prime contracts before they&apos;re ready. They spend months
            responding to solicitations, lose on past performance, and wonder why the government keeps
            picking the same incumbents. The ones who actually break through usually take a different
            path: they start as subcontractors, build a track record, and then compete for prime work from
            a position of strength.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Subcontracting is not second-tier work. Federal contract dollars flowing through subs are
            massive. In FY2025, small businesses received roughly $179 billion in direct prime-contract
            awards — but when you add subcontracting dollars, that figure climbs to approximately $273
            billion. The difference is what large prime contractors pass down to their supply chains. A
            significant chunk of that is specifically earmarked for small businesses under statutory goals
            and legally binding subcontracting plans.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            For a business with limited past performance, subcontracting solves the most common chicken-and-egg
            problem in federal contracting: you can&apos;t win a prime without past performance, but you
            can&apos;t get past performance without winning a prime. As a sub, you accumulate documented
            performance that agencies verify before making awards. And unlike prime contracts, most sub
            work never goes through open competition — the prime chooses you based on relationships,
            capability, and fit.
          </p>

          <Callout icon={TrendingUp} color="blue" title="The numbers favor you right now">
            Small business prime awards fell in FY2025, and the number of small business contractors
            dropped 6.9% to 56,725 firms. That contraction in the prime market makes the subcontracting
            channel more valuable, not less. Primes still need to hit their small business subcontracting
            goals — they just have fewer subs to choose from.
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="legal-framework" number="02" title="The Legal Framework: Why Primes Are Required to Work With You" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Large federal prime contractors don&apos;t subcontract to small businesses out of goodwill.
            They do it because the law requires them to. Under FAR 52.219-9, any prime contractor
            receiving a federal award expected to exceed $900,000 (or $2 million for construction of a
            public facility) must submit a small business subcontracting plan. That plan sets specific
            numerical goals — percentages of subcontract dollars — for small businesses overall and for
            each socioeconomic subcategory: women-owned, service-disabled veteran-owned, HUBZone, and
            small disadvantaged businesses.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Small businesses themselves are exempt from this requirement — it only binds large prime
            contractors. When a large business wins a government contract, they commit in writing to how
            much they&apos;ll flow to small subs. Agencies track that commitment and score it in their
            annual SBA scorecard, which carries real reputational and competitive consequences. A large
            prime that consistently misses its small business goals faces scrutiny on future bids.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The government-wide statutory goal is 23% of prime and subcontract dollars going to small
            businesses. The SDVOSB subcontracting goal stands at 5% — increased from 3% under the
            National Defense Authorization Act for FY2024. Each federal agency negotiates separate goals
            for each prime contract&apos;s subcontracting plan, so individual plan goals can be higher
            than the statutory floor. Subcontracting plan performance accounts for 20% of an agency&apos;s
            annual SBA scorecard grade. Primes know agencies are watching.
          </p>

          <Callout icon={AlertCircle} color="amber" title="When plans aren't required">
            Subcontracting plans aren&apos;t required for contracts performed entirely outside the United
            States, personal services contracts, or awards to businesses already classified as small
            under the applicable NAICS. If you&apos;re pursuing a sub role under a large prime, they
            almost certainly have a plan in place — that&apos;s your leverage.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="find-opportunities" number="03" title="Where to Find Subcontracting Opportunities" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Most federal subcontracting opportunities are never publicly posted. They happen through
            direct outreach, referrals, and relationships that exist long before an RFP lands. That said,
            there are structured channels you should know:
          </p>

          <div className="not-prose my-8 space-y-4">
            {[
              {
                step: "01",
                title: "SBA's SUBNet Database",
                body: "SBA's Subcontracting Network (SUBNet) is the official board where large prime contractors post subcontracting opportunities. You can browse by keyword or state without creating an account. Active postings list a point of contact — reach out directly, not through SBA. The database has been uneven in volume, so treat it as one channel among several, not the definitive source.",
              },
              {
                step: "02",
                title: "SBA's Small Business Search (SBS)",
                body: "The government's Small Business Search tool is populated from your SAM.gov registration. Contracting officers and primes use it to find small businesses for upcoming work. A complete, keyword-rich SAM.gov profile makes you findable here. This is passive — optimize your profile and let primes come to you.",
              },
              {
                step: "03",
                title: "Agency Small Business Offices",
                body: "Every federal agency has an Office of Small and Disadvantaged Business Utilization (OSDBU). These offices maintain lists of large primes with active subcontracting plans and sometimes host matchmaking events. A direct inquiry to the OSDBU at agencies where you want to work is one of the highest-ROI moves a new contractor can make.",
              },
              {
                step: "04",
                title: "SAM.gov Award Data",
                body: "When you see a large prime win a federal contract on SAM.gov, that award often includes their subcontracting plan goals. Search for contracts in your NAICS code, identify the large prime winners, and contact their small business liaison officers directly. The contract award announcement tells you exactly what they committed to subcontracting.",
              },
              {
                step: "05",
                title: "Industry Conferences and Match Days",
                body: "DoD, GSA, and civilian agencies regularly host vendor fairs and small business matchmaking events. Face time at these events compresses a relationship that might otherwise take 18 months of cold outreach into a single conversation. SBA's APEX Accelerators often know when these events are coming up — another reason to get connected there.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white hover-lift animate-on-scroll"
              >
                <span className="text-sm font-black text-blue-500 w-7 shrink-0 pt-0.5">{step}</span>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{title}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Direct outreach remains the most effective channel. Identify the top 10 large primes working
            in your space using USASpending.gov, find their small business liaison officer (required by
            FAR 52.219-9), and send a targeted introduction. A focused email explaining your capabilities,
            certifications, and relevant NAICS codes — tied to contracts they already hold — converts far
            better than a generic capability statement blast.
          </p>

          {/* CTA 1 */}
          <div className="not-prose my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white animate-on-scroll">
            <div className="flex items-center gap-3 mb-3">
              <Search className="w-6 h-6 opacity-80" />
              <p className="font-bold text-lg">Find primes working in your space</p>
            </div>
            <p className="text-blue-100 mb-5 text-sm leading-relaxed">
              CapturePilot&apos;s intelligence tools surface which large primes hold contracts in your
              NAICS codes — so you can target outreach where it&apos;ll actually land.
            </p>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Start your 30-day free trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Section 4 */}
          <SectionHeading id="what-primes-want" number="04" title="What Prime Contractors Actually Look For" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A large prime&apos;s subcontracting decisions are driven by risk management, not charity. They&apos;re
            accountable to the government for delivery — if your piece fails, their whole contract is at
            risk. They choose subs who can demonstrate they&apos;ve done the work before, in the right
            environment, to federal standards. Here&apos;s what they&apos;re evaluating:
          </p>

          <div className="not-prose my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">What Primes Evaluate</th>
                  <th className="text-left p-3 font-semibold">What It Means for You</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Relevant past performance", "Have you done this exact type of work, in a federal or regulated environment?", "High"],
                  ["Certifications", "8(a), SDVOSB, WOSB, HUBZone — set-aside certs make you a compliance asset for the prime", "High"],
                  ["Capacity and staffing", "Can you actually deliver without the prime having to babysit?", "High"],
                  ["SAM.gov registration", "Active registration and no exclusions — non-negotiable baseline", "Required"],
                  ["Security clearances", "Required for classified work; a differentiator even for unclassified DoD", "Situational"],
                  ["Financial stability", "Primes may review financials for large sub awards; keep your books current", "Medium"],
                  ["NAICS code alignment", "Your primary NAICS must match the work they need", "Medium"],
                ].map(([what, means, priority], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-3 font-medium text-stone-900 border border-stone-100">{what}</td>
                    <td className="p-3 text-stone-600 border border-stone-100">{means}</td>
                    <td className="p-3 border border-stone-100">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          priority === "High"
                            ? "bg-red-100 text-red-700"
                            : priority === "Required"
                            ? "bg-stone-900 text-white"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Certifications are worth calling out specifically. A large prime on a small-business set-aside
            contract cannot use a large sub to meet their goals — the sub has to be small. But more than
            that, a prime pursuing an SDVOSB-set-aside award needs SDVOSB subs to demonstrate they&apos;re
            meeting the 5% goal. If you hold an SDVOSB, 8(a), WOSB, or HUBZone certification, you&apos;re
            not just a vendor — you&apos;re a compliance solution. Lead with that.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Check your certifications with <Link href="/features/quick-checker" className="text-blue-600 hover:underline">CapturePilot&apos;s Quick Checker</Link> to
            confirm which set-asides you&apos;re eligible for before approaching primes. Coming in with
            accurate certification status prevents the kind of awkward correction that kills deals.
          </p>

          {/* Section 5 */}
          <SectionHeading id="sub-pitch" number="05" title="Building a Winning Sub Pitch" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A generic capability statement won&apos;t get you into a prime&apos;s supply chain. The primes
            reviewing your pitch are deciding whether you solve a specific problem on a specific contract.
            Your outreach needs to reflect that.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Before you reach out, do your homework: identify the specific contract the prime holds, read
            the original solicitation on SAM.gov, understand what they&apos;re delivering, and think
            through where your capabilities fit. Then write an email that answers three questions in
            under 150 words: What do you do? Why does it fit their contract? What certification or
            credential makes you a compliance asset for their plan?
          </p>

          <Callout icon={Lightbulb} color="emerald" title="The one-page sub profile">
            Alongside your capability statement, prepare a one-page subcontractor profile that includes:
            your NAICS codes, SAM.gov UEI, active certifications, two or three relevant past performance
            references (federal preferred), your bonding capacity if applicable, and a point of contact.
            Primes collect these and use them when subcontracting plan review meetings happen internally.
            If you&apos;re not in their files, you won&apos;t be in the conversation.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            For the pitch itself, skip the company history. Lead with what you&apos;ve delivered for
            similar agencies or similar work. &ldquo;We provided network security monitoring for a DoD
            facility management contractor in 2024, achieving zero security incidents across a 12-month
            period&rdquo; beats &ldquo;we are a veteran-owned IT services company established in 2018&rdquo;
            every time. The prime already knows you&apos;re small. They need to know you&apos;re capable.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A well-crafted <Link href="/features/capability-statement" className="text-blue-600 hover:underline">capability statement</Link> is
            the foundation of your outreach. See our <Link href="/blog/capability-statement-examples" className="text-blue-600 hover:underline">capability statement examples</Link> for
            what strong and weak ones look like in practice.
          </p>

          {/* Section 6 */}
          <SectionHeading id="contract-terms" number="06" title="Subcontract Terms You Must Negotiate" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Subcontracts are binding legal agreements. The prime will give you their standard form —
            typically favorable to them. You need to review and negotiate several key clauses before you
            sign anything.
          </p>

          <div className="not-prose my-8 space-y-4">
            {[
              {
                icon: Clock,
                color: "amber",
                title: "Payment terms",
                body: "Federal law requires primes to pay small business subcontractors within 15 days of receiving payment from the government (FAR 52.232-40). Confirm this is in your subcontract. Some primes push for 30-day or 45-day payment terms, which creates a cash flow gap you'll carry on a government schedule that may already be slow.",
              },
              {
                icon: Shield,
                color: "sky",
                title: "Limitation of liability and indemnification",
                body: "Watch for unlimited indemnification clauses that make you responsible for any claim arising from the prime contract, even ones unrelated to your scope. Push for limitation to your specific work product and require mutual indemnification.",
              },
              {
                icon: AlertTriangle,
                color: "red",
                title: "Termination for convenience",
                body: "The government can terminate prime contracts at will — and your subcontract should mirror that protection. If the prime gets terminated, you're entitled to costs incurred and a reasonable profit on work performed. Make sure your contract spells that out explicitly.",
              },
              {
                icon: FileText,
                color: "violet",
                title: "Intellectual property and data rights",
                body: "Any work product you create belongs to you unless the contract says otherwise. Primes often include broad IP assignment clauses that give them (and by extension, the government) rights to everything you produce. Narrow this to work specifically created under the contract, not your existing tools and methods.",
              },
              {
                icon: BarChart3,
                color: "emerald",
                title: "Past performance documentation",
                body: "Explicitly include the prime's obligation to provide you with a written past performance reference at contract close. This is what you'll use to compete for prime contracts later. Many primes won't do this automatically — you need to make it contractual.",
              },
            ].map(({ icon: Icon, color, title, body }) => (
              <div
                key={title}
                className={`rounded-2xl border p-5 animate-on-scroll ${
                  color === "amber"
                    ? "bg-amber-50 border-amber-200"
                    : color === "sky"
                    ? "bg-sky-50 border-sky-200"
                    : color === "red"
                    ? "bg-red-50 border-red-200"
                    : color === "violet"
                    ? "bg-violet-50 border-violet-200"
                    : "bg-emerald-50 border-emerald-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className={`w-4 h-4 ${
                      color === "amber"
                        ? "text-amber-600"
                        : color === "sky"
                        ? "text-sky-600"
                        : color === "red"
                        ? "text-red-600"
                        : color === "violet"
                        ? "text-violet-600"
                        : "text-emerald-600"
                    }`}
                  />
                  <p className="font-bold text-sm text-stone-900">{title}</p>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A federal contracts attorney reviewing your first subcontract is worth the cost. The
            fee is typically $500–$1,500. The risks you&apos;re signing away are significantly higher.
            Use the first review to build a standard redline you can apply to future agreements.
          </p>

          {/* CTA 2 */}
          <div className="not-prose my-10 rounded-2xl bg-stone-900 p-8 text-white animate-on-scroll">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <p className="font-bold text-lg">Check your set-aside eligibility free</p>
            </div>
            <p className="text-stone-300 mb-5 text-sm leading-relaxed">
              Before you pitch a prime contractor, know exactly which certifications you hold or
              qualify for. CapturePilot&apos;s Quick Checker gives you a full eligibility read in
              minutes — including SDVOSB, 8(a), WOSB, and HUBZone.
            </p>
            <a
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors text-sm"
            >
              Check your eligibility free <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Section 7 */}
          <SectionHeading id="past-performance" number="07" title="Converting Sub Work Into Prime Past Performance" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The whole point of subcontracting, strategically, is to build the past performance record
            that lets you compete for prime contracts. That transition doesn&apos;t happen automatically
            — you have to manage it actively.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            When you perform well on a sub contract, you create a reference. The question is whether
            that reference appears in the past performance databases that evaluators check. For large
            contracts, the government uses CPARS — the Contractor Performance Assessment Reporting
            System. As a subcontractor, you won&apos;t automatically get a CPARS entry unless the prime
            initiates one for work above certain thresholds. Push the prime to submit a CPARS for your
            work. Alternatively, get a written reference on company letterhead, signed by the
            contracting officer&apos;s representative.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The reference is only part of it. What matters equally is what you can document: the contract
            value, the agency, the period of performance, your role, and the outcomes you delivered.
            Package this in a format that maps directly to the past performance volume of a future
            proposal. See our guide on <Link href="/blog/past-performance-government-contracts" className="text-blue-600 hover:underline">building past performance from scratch</Link> for
            the documentation framework.
          </p>

          <Callout icon={Award} color="violet" title="The rule of relevant experience">
            Federal source selection evaluators assess past performance on recency (within three to five
            years), relevance (similar scope, complexity, and dollar value), and quality (the actual
            rating or reference). Sub work counts — but only if it&apos;s documented and you can prove
            your specific contribution. &ldquo;I worked on a large contract&rdquo; doesn&apos;t score
            as well as &ldquo;I delivered X service worth $Y over Z months on contract number ABC.&rdquo;
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            After two or three sub assignments in your target market, you have the foundation to pursue
            prime contracts — especially on smaller vehicles. Micro-purchases under $10,000 and
            simplified acquisition purchases under $250,000 are prime targets because they typically
            have lighter past performance requirements. Use those to stack additional prime past
            performance quickly. See our <Link href="/blog/simplified-acquisition-procedure" className="text-blue-600 hover:underline">simplified acquisition guide</Link> for
            the full mechanics.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Track your pipeline through this progression — from sub prospect to sub award to prime
            prospect — in a single system. <Link href="/features/pipeline" className="text-blue-600 hover:underline">CapturePilot&apos;s pipeline</Link> tracks
            opportunities across both sub and prime stages so you can see your full market position
            in one view.
          </p>

          {/* Section 8 */}
          <SectionHeading id="90-day-plan" number="08" title="Your 90-Day Plan to Land Your First Federal Sub" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Subcontracting is a relationship business, and relationships take time. The contractors who
            land sub work in 60–90 days are the ones who start before they&apos;re ready, not after.
            Here&apos;s a concrete action plan:
          </p>

          <div className="not-prose my-8 space-y-6">
            {[
              {
                phase: "Days 1–30",
                color: "blue",
                tasks: [
                  "Confirm SAM.gov registration is active and your profile is complete with all relevant NAICS codes and service descriptions",
                  "Verify which set-aside certifications you hold — and which you&apos;re eligible for but haven&apos;t applied for yet",
                  "Research 10–15 large primes with active contracts in your NAICS codes using USASpending.gov",
                  "Find each prime's small business liaison officer — required under FAR 52.219-9",
                  "Build your one-page subcontractor profile with UEI, certs, NAICS, past performance references",
                ],
              },
              {
                phase: "Days 31–60",
                color: "emerald",
                tasks: [
                  "Send targeted outreach to each liaison officer with a focused pitch tied to their specific contract",
                  "Register on SBA's SUBNet database as a potential subcontractor for opportunities in your space",
                  "Contact the OSDBU at two or three agencies where you want to work",
                  "Identify upcoming vendor fairs or matchmaking events through APEX Accelerators",
                  "Follow up with primes who didn&apos;t respond after 10 business days with a one-line check-in",
                ],
              },
              {
                phase: "Days 61–90",
                color: "violet",
                tasks: [
                  "Attend at least one matchmaking event or agency conference",
                  "Have at least three discovery calls with prime contractors",
                  "Negotiate and review a draft teaming or subcontract agreement for any viable lead",
                  "Document all interactions, contacts, and next steps in a pipeline tracker",
                  "Identify two or three prime targets for a formal partnership agreement (even if no immediate work)",
                ],
              },
            ].map(({ phase, color, tasks }) => (
              <div
                key={phase}
                className={`rounded-2xl border p-6 animate-on-scroll ${
                  color === "blue"
                    ? "border-blue-200 bg-blue-50"
                    : color === "emerald"
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-violet-200 bg-violet-50"
                }`}
              >
                <p
                  className={`font-black text-sm mb-4 ${
                    color === "blue"
                      ? "text-blue-700"
                      : color === "emerald"
                      ? "text-emerald-700"
                      : "text-violet-700"
                  }`}
                >
                  {phase}
                </p>
                <ul className="space-y-2">
                  {tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          color === "blue"
                            ? "text-blue-500"
                            : color === "emerald"
                            ? "text-emerald-500"
                            : "text-violet-500"
                        }`}
                      />
                      <span dangerouslySetInnerHTML={{ __html: task }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The contractors who get discouraged are the ones who send five emails and expect replies.
            Federal subcontracting relationship-building looks more like a job search than a transaction:
            consistent outreach, follow-up, and persistence across months. The first sub award typically
            comes from a relationship that started three to six months earlier. Start now.
          </p>

          <Callout icon={Handshake} color="sky" title="Teaming vs. subcontracting">
            Teaming agreements and subcontract agreements are different instruments. A teaming agreement
            is typically a pre-proposal arrangement where two firms agree to pursue an opportunity
            together. A subcontract is a binding performance agreement under a contract already awarded.
            For most new entrants, subcontracting comes first — you get onto an existing prime&apos;s
            vehicle. Teaming becomes relevant once you&apos;re pursuing specific prime opportunities.
            See our guide on <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline">government contract teaming agreements</Link> for
            the full picture.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Once you have your first sub award, stay focused on delivery. Your reputation with that
            prime is the most valuable asset you can build. Done well, one sub assignment often leads
            to the next — and eventually to the conversation where the prime says, &ldquo;We&apos;re
            thinking about putting together a team to bid the next contract, and we&apos;d like you on it.&rdquo;
            That&apos;s the transition from sub to prime partner. It&apos;s not luck — it&apos;s the
            compound return on a track record you deliberately build.
          </p>

          {/* Final CTA */}
          <div className="not-prose my-12 rounded-2xl border border-stone-200 bg-gradient-to-r from-stone-50 to-blue-50 p-8 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 rounded-xl p-3 shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-black text-xl text-stone-900 mb-2">
                  Build your subcontracting strategy with CapturePilot
                </p>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">
                  CapturePilot&apos;s matching and pipeline tools help you identify large prime
                  contracts in your NAICS codes, track your outreach to primes, and manage sub
                  opportunities alongside your direct bids — all in one place. Start with a
                  30-day free trial, no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 font-semibold px-6 py-3 rounded-xl hover:bg-white transition-colors text-sm"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="not-prose mt-16 pt-8 border-t border-stone-200">
            <p className="font-black text-lg text-stone-900 mb-5">Related Articles</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/government-contract-teaming-agreement", label: "Teaming Agreements: How to Partner Up and Win Bigger Contracts" },
                { href: "/blog/past-performance-government-contracts", label: "Past Performance: Why It Matters and How to Build It" },
                { href: "/blog/capability-statement-examples", label: "Capability Statement Examples: What Good Ones Look Like" },
                { href: "/blog/small-business-subcontracting-plan", label: "Small Business Subcontracting Plans: What Primes Require" },
                { href: "/blog/sdvosb-contracts-guide", label: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses" },
                { href: "/blog/subcontracting-government-contracts", label: "Subcontracting on Government Contracts: Your First Step Into Federal" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-blue-500 transition-colors shrink-0" />
                  <span className="text-sm text-stone-700 group-hover:text-blue-700 transition-colors">{label}</span>
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
