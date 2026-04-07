"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Lightbulb,
  BookOpen, ChevronRight, Search, FileText, DollarSign,
  Target, Zap, Building2, TrendingUp, Globe, Shield,
  Star, Users, MapPin, Sparkles, BarChart3, Clock, Award,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-opportunity", label: "The $183 Billion Opportunity" },
  { id: "sam-gov-registration", label: "Step 1: Get Registered on SAM.gov" },
  { id: "find-your-naics", label: "Step 2: Know Your NAICS Codes" },
  { id: "search-sam-gov", label: "Step 3: Search SAM.gov the Right Way" },
  { id: "set-aside-eligibility", label: "Step 4: Leverage Set-Aside Programs" },
  { id: "beyond-sam-gov", label: "Step 5: Look Beyond SAM.gov" },
  { id: "build-your-pipeline", label: "Step 6: Build a Systematic Pipeline" },
  { id: "common-mistakes", label: "Mistakes That Kill New Contractors" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
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
export default function HowToFindGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-stone-50 to-white">
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
            <span className="text-stone-900 font-medium">
              How to Find Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Getting Started Guide
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Find Government Contracts{" "}
            <span className="gradient-text">for Your Small Business</span>{" "}
            (2026 Guide)
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded $183 billion in contracts to small
            businesses in FY2024 alone. The money is real, the process is learnable,
            and you don&apos;t need a BD team to get started. Here&apos;s exactly
            where to look and what to do.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Updated April 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-700 transition-colors py-1"
                >
                  <span className="text-emerald-600 font-mono text-xs">
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

          {/* Section 1: The Opportunity */}
          <SectionHeading
            id="the-opportunity"
            number="01"
            title="The $183 Billion Opportunity"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government is the largest buyer of goods and services on
              the planet. In FY2024, total federal contract awards reached{" "}
              <strong>$773.68 billion</strong>. Small businesses captured $183
              billion of that — a record, and roughly 23.6% of the total. That&apos;s
              not a rounding error. That&apos;s a structural mandate.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Small Business Act requires the federal government to award at least{" "}
              <strong>23% of all prime contract dollars</strong> to small businesses.
              Agencies are graded on it. Contracting officers actively seek qualifying
              vendors to satisfy these goals. When you&apos;re a small business, the
              government is legally obligated to try to give you work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Construction, IT, and professional services account for over 60% of
              small business awards. But virtually every industry — staffing,
              janitorial, security, logistics, healthcare, engineering — has active
              procurement. The question isn&apos;t whether the money exists. It&apos;s
              whether you have a system to find and win it.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$183B", label: "Small business awards FY2024", icon: DollarSign },
                { stat: "23%", label: "Statutory small business goal", icon: Target },
                { stat: "$350K", label: "Simplified acquisition threshold", icon: BarChart3 },
                { stat: "$15K", label: "Micro-purchase threshold", icon: Zap },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Two threshold numbers matter most to new contractors. Purchases under{" "}
              <strong>$15,000</strong> (the micro-purchase threshold) require no
              competition at all — a contracting officer can buy from you directly.
              Purchases between $15,000 and $350,000 fall under Simplified Acquisition
              Procedures and are <em>automatically reserved for small businesses</em>.
              You don&apos;t have to beat Lockheed Martin. You&apos;re competing
              against other small businesses.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Why Set-Asides Change Everything">
            In full-and-open competition, you might bid against 50+ companies including
            billion-dollar primes. In a set-aside, you&apos;re competing against 5-10
            small businesses with similar limitations. Set-asides don&apos;t guarantee
            a win — but they fundamentally change the math in your favor. See our{" "}
            <Link href="/blog/set-aside-programs" className="underline font-medium">
              complete set-aside guide
            </Link>{" "}
            to understand which programs apply to your business.
          </Callout>

          {/* Section 2: SAM.gov Registration */}
          <SectionHeading
            id="sam-gov-registration"
            number="02"
            title="Step 1: Get Registered on SAM.gov"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov (System for Award Management) is not optional. You cannot
              receive payment from the federal government without an active SAM.gov
              registration. No exceptions. Registration is free — any service
              charging you to register is a scam.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov also serves as your public storefront. Contracting officers
              search it when looking for vendors. Your profile — including your NAICS
              codes, certifications, and business description — is how they find you
              before an RFP is even published. A weak profile means you get passed
              over.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Registration typically takes 1-3 business days. New entities can take
              up to 10 days for IRS validation. Your registration must be renewed
              annually — a lapsed registration makes you ineligible for award, even
              if your proposal wins.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Gather your documentation",
                  desc: "Legal business name, EIN/tax ID, Unique Entity Identifier (UEI — replaced DUNS in 2022), bank account for EFT payments, NAICS codes, and business address.",
                },
                {
                  step: "02",
                  title: "Create an account at SAM.gov",
                  desc: "Use login.gov for identity verification. Keep this login secure — it controls your entire federal contracting identity.",
                },
                {
                  step: "03",
                  title: "Start Entity Registration",
                  desc: "Navigate to Entity Registrations and start the process. You can save progress and return — it doesn't need to be completed in one session.",
                },
                {
                  step: "04",
                  title: "Enter business details and set-aside status",
                  desc: "Select all applicable NAICS codes, enter SIC codes, and mark any set-aside designations (SDVOSB, WOSB, 8(a), HUBZone). These determine which set-aside contracts you can bid.",
                },
                {
                  step: "05",
                  title: "Submit and activate",
                  desc: "Submit for review. Watch for email confirmation. Once active, your entity appears in SAM.gov search within 24 hours and you can begin bidding.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              For a detailed walkthrough, see our{" "}
              <Link
                href="/blog/sam-registration-guide"
                className="text-emerald-700 underline font-medium"
              >
                SAM.gov registration guide
              </Link>
              . It covers common rejection reasons and how to avoid them.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Don't Let Your Registration Lapse">
            SAM.gov registrations expire annually. Set a calendar reminder 60 days
            before your expiration date. Awards have been pulled from contractors
            mid-solicitation because their registration expired. Your{" "}
            <strong>CapturePilot dashboard</strong> tracks your SAM expiration and
            alerts you before it becomes a problem.
          </Callout>
          {/* Section 3: NAICS Codes */}
          <SectionHeading
            id="find-your-naics"
            number="03"
            title="Step 2: Know Your NAICS Codes"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Your NAICS code is not just a label. It determines whether you qualify
              as "small" for a specific contract, which set-aside pools you can enter,
              and how agencies categorize you when they search for vendors. Getting
              it wrong is costly. An IT firm using the wrong NAICS might bid on a
              contract where they&apos;re technically too large to qualify — or miss
              set-asides they were entitled to.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              SBA size standards vary significantly by industry. For IT consulting
              under NAICS 541511 (Custom Computer Programming Services), the small
              business threshold is $34 million in average annual revenue. For most
              construction work, it&apos;s measured by number of employees. The same
              revenue number that makes you "large" in one code might make you "small"
              in another.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Register multiple NAICS codes on SAM.gov. Use the primary code for your
              main service, then add secondary codes for adjacent work you pursue.
              Most businesses that do federal work span 3-6 NAICS codes.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-6 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">
                        NAICS Code
                      </th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">
                        Description
                      </th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">
                        SBA Size Standard
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        code: "541511",
                        desc: "Custom Computer Programming Services",
                        std: "$34M avg annual revenue",
                      },
                      {
                        code: "561210",
                        desc: "Facilities Support Services",
                        std: "$47M avg annual revenue",
                      },
                      {
                        code: "236220",
                        desc: "Commercial & Institutional Building Construction",
                        std: "1,500 employees",
                      },
                      {
                        code: "561612",
                        desc: "Security Guards & Patrol Services",
                        std: "$25M avg annual revenue",
                      },
                      {
                        code: "561320",
                        desc: "Temporary Staffing Services",
                        std: "$35M avg annual revenue",
                      },
                      {
                        code: "541330",
                        desc: "Engineering Services",
                        std: "$25.5M avg annual revenue",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-stone-100 last:border-0 hover:bg-stone-50"
                      >
                        <td className="px-5 py-3 font-mono text-sm text-emerald-700 font-medium">
                          {row.code}
                        </td>
                        <td className="px-5 py-3 text-stone-700">{row.desc}</td>
                        <td className="px-5 py-3 text-stone-500">{row.std}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              Use the{" "}
              <a
                href="https://www.sba.gov/size-standards"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline"
              >
                SBA Size Standards Tool
              </a>{" "}
              to confirm your size status before bidding on any contract. For a deeper
              dive on which codes drive the most federal awards, read our{" "}
              <Link
                href="/blog/naics-codes-explained"
                className="text-emerald-700 underline font-medium"
              >
                NAICS codes guide
              </Link>
              .
            </p>
          </div>

          {/* Section 4: Search SAM.gov */}
          <SectionHeading
            id="search-sam-gov"
            number="04"
            title="Step 3: Search SAM.gov the Right Way"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov&apos;s Contract Opportunities section lists every federal
              solicitation above $25,000. You can search it without an account —
              but you need an active registration to bid. Start searching immediately,
              even before your registration clears.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The mistake most beginners make is searching for open solicitations
              with tight response deadlines. By the time a formal RFP is published,
              savvy contractors have already built agency relationships, submitted
              capability statements, and shaped the requirements. You&apos;re
              showing up to a game that started months ago.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s how to use SAM.gov strategically:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">
                        Opportunity Type
                      </th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">
                        What It Means
                      </th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">
                        What You Should Do
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        type: "Sources Sought / RFI",
                        meaning:
                          "Agency is researching the market — no award yet",
                        action:
                          "Submit a capability statement; get on their radar early",
                      },
                      {
                        type: "Pre-Solicitation",
                        meaning: "Formal RFP is coming in 15-30 days",
                        action:
                          "Start preparing your team, reach out to the contracting officer",
                      },
                      {
                        type: "Solicitation (RFP/RFQ/IFB)",
                        meaning: "Formal bid opportunity with a due date",
                        action:
                          "Bid if you qualify and have capacity to respond well",
                      },
                      {
                        type: "Award Notice",
                        meaning: "Contract already awarded to someone else",
                        action:
                          "Study it — note the winner, price, period, and agency for future bids",
                      },
                      {
                        type: "Sole Source Notice",
                        meaning:
                          "Agency plans to award without competition (J&A)",
                        action:
                          "Review: if you qualify and weren't considered, you may be able to challenge",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-stone-100 last:border-0 hover:bg-white"
                      >
                        <td className="px-5 py-3 font-medium text-stone-800">
                          {row.type}
                        </td>
                        <td className="px-5 py-3 text-stone-600">{row.meaning}</td>
                        <td className="px-5 py-3 text-stone-500">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Key SAM.gov filters to master: <strong>NAICS code</strong> (your
              industry), <strong>set-aside type</strong> (filter for SDVOSB, WOSB,
              8(a), HUBZone, or general small business), <strong>place of performance</strong>{" "}
              (limit to your region), and <strong>response date</strong> (find
              notices with enough time to respond well).
            </p>
            <p className="text-stone-600 leading-relaxed">
              The real intelligence move: search SAM.gov award notices for your
              NAICS code + target agency. You&apos;ll see who&apos;s winning, at
              what price, with what contract duration. That&apos;s your competitive
              baseline. Our{" "}
              <Link
                href="/features/intelligence"
                className="text-emerald-700 underline font-medium"
              >
                CapturePilot Intelligence
              </Link>{" "}
              automates this analysis — surfacing incumbent data and pricing
              benchmarks so you don&apos;t spend hours digging through SAM.gov
              manually.
            </p>
          </div>

          <Callout icon={Search} color="emerald" title="Sources Sought Are Your Secret Weapon">
            Most small businesses skip Sources Sought notices because there&apos;s
            nothing to bid on yet. That&apos;s backwards. Responding to a Sources Sought
            is how you introduce yourself to the contracting officer before the
            competition starts. A strong capability statement response can literally
            shape how the eventual RFP is written — sometimes in ways that favor
            your specific experience.
          </Callout>
          {/* Section 5: Set-Asides */}
          <SectionHeading
            id="set-aside-eligibility"
            number="05"
            title="Step 4: Leverage Set-Aside Programs"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside programs are where small business contracting gets
              interesting. The government doesn&apos;t just want to buy from small
              businesses — it wants to buy from specific types of small businesses,
              with specific goals for each category. If you qualify, there are pools
              of contracts you can bid on where the competition is a fraction of
              what you&apos;d face in full-and-open competition.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The updated FAR thresholds (effective October 1, 2025) mean even more
              accessible entry points. Purchases under $15,000 need no competition.
              Everything from $15,000 to $350,000 is automatically set aside for
              small businesses unless no small business can do the work. That&apos;s
              hundreds of thousands of contracts a year that only small businesses
              can win.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Star,
                  title: "8(a) Business Development Program",
                  tag: "Most Powerful",
                  tagColor: "emerald",
                  sole: "Sole source up to $4.5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "51%+ owned by socially/economically disadvantaged U.S. citizens",
                    "Owner's net worth below $850K (excluding home and business value)",
                    "Business in operation for at least 2 years",
                    "Revenue below SBA size standard for primary NAICS",
                  ],
                  note: "One 8(a) sole-source relationship can generate $4.5M without any competitive bidding. The 9-year program includes SBA mentorship and access to joint ventures.",
                },
                {
                  icon: Shield,
                  title: "Service-Disabled Veteran-Owned Small Business (SDVOSB)",
                  tag: "Veterans",
                  tagColor: "blue",
                  sole: "Sole source up to $5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "51%+ owned by service-disabled veteran(s)",
                    "Any VA service-connected disability rating qualifies",
                    "Veteran must manage day-to-day operations",
                    "Must be certified through SBA's VetCert program",
                  ],
                  note: "The VA has a mandatory SDVOSB preference — they must check for SDVOSB vendors before opening competition. SDVOSBs are especially strong at VA and DoD.",
                },
                {
                  icon: Users,
                  title: "Women-Owned Small Business (WOSB)",
                  tag: "Women-Owned",
                  tagColor: "pink",
                  sole: "Sole source up to $5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "51%+ owned by women who are U.S. citizens",
                    "Women must manage daily operations and long-term decisions",
                    "Certified through SBA's WOSB Federal Contracting Program",
                    "Eligible for designated NAICS codes on SBA's underrepresented list",
                  ],
                  note: "If you also qualify as Economically Disadvantaged (EDWOSB), you get access to even more NAICS codes. Always apply for the stronger designation.",
                },
                {
                  icon: MapPin,
                  title: "HUBZone Program",
                  tag: "Location-Based",
                  tagColor: "amber",
                  sole: "Sole source up to $5M + 10% price preference on open bids",
                  eligibility: [
                    "Principal office in a designated HUBZone",
                    "At least 35% of employees reside in a HUBZone",
                    "51%+ owned by U.S. citizens, CDCs, or Indian tribes",
                    "Business is small under applicable size standard",
                  ],
                  note: "HUBZone offers a 10% price evaluation preference even in open competition — meaning you can bid 10% higher than a non-HUBZone firm and still win on price.",
                },
              ].map((program, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-stone-200 overflow-hidden hover-lift animate-on-scroll"
                >
                  <div className="bg-stone-50 px-6 py-4 flex items-center gap-3 border-b border-stone-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-stone-900 text-sm">
                        {program.title}
                      </h3>
                      <span className="text-xs text-emerald-700 font-medium">
                        {program.sole}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                        Eligibility
                      </p>
                      <ul className="space-y-1.5">
                        {program.eligibility.map((req, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-stone-600"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-sky-800 leading-relaxed">
                          <strong>Key Insight:</strong> {program.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Not sure which certifications you qualify for?{" "}
              <Link
                href="/blog/set-aside-programs"
                className="text-emerald-700 underline font-medium"
              >
                Read our complete set-aside guide
              </Link>{" "}
              — or check your eligibility right now in under 3 minutes.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-on-scroll">
            <Award className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Check Your Set-Aside Eligibility
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Answer a few questions about your business. Our Quick Checker tells
              you which certifications you likely qualify for and what to apply
              for first.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-emerald-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">
              Free, no account required
            </p>
          </div>
          {/* Section 6: Beyond SAM.gov */}
          <SectionHeading
            id="beyond-sam-gov"
            number="06"
            title="Step 5: Look Beyond SAM.gov"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov is necessary. It&apos;s not sufficient. Contractors who rely
              exclusively on SAM.gov search are competing on the same playing field
              as everyone else — and they&apos;re seeing opportunities only after
              they&apos;re publicly posted, which is often too late to build the
              relationships that win contracts.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here are the channels most small businesses ignore:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Building2,
                  title: "Agency Small Business Offices (OSDBUs)",
                  desc: "Every major federal agency has an Office of Small and Disadvantaged Business Utilization. DoD, VA, DHS, HHS, GSA — they all publish vendor directories, host matchmaking events, and connect small businesses with contracting officers. These offices exist specifically to help you. Call them. Attend their events. Get your capability statement in front of them before any RFP drops.",
                },
                {
                  icon: Globe,
                  title: "Agency Procurement Forecasts",
                  desc: "DHS, DoD, NASA, and many other agencies publish annual procurement forecasts listing upcoming contract opportunities with estimated values and target award dates. These give you 6-12 months of advance notice on what's coming. Most small businesses don't know these exist — which is exactly why reading them is an advantage. Search '[agency name] procurement forecast' or check the agency OSDBU website.",
                },
                {
                  icon: Users,
                  title: "Subcontracting via SBA SUB-Net",
                  desc: "On federal contracts over $750,000, prime contractors are required to have a small business subcontracting plan. The SBA's SUB-Net database lists active subcontracting opportunities from primes looking for small business partners. Subcontracting is often the fastest path to your first federal revenue — you skip the registration complexity of prime contracting and get past performance you can use in future bids.",
                },
                {
                  icon: TrendingUp,
                  title: "USASpending.gov for Market Intelligence",
                  desc: "USASpending.gov contains every federal contract ever awarded. Filter by agency + NAICS code + small business type and you'll see exactly what's been bought, from whom, at what price, with what contract structure. This is how you understand the market before you bid on it — find out who the incumbents are, what the typical contract value looks like, and which agencies are active buyers in your space.",
                },
                {
                  icon: FileText,
                  title: "GSA Multiple Award Schedules",
                  desc: "A GSA Schedule puts you on a pre-competed contract vehicle that agencies can use without a full RFP process. Once you're on schedule, agencies can buy directly from your schedule at negotiated rates. It takes 3-6 months to get on schedule, but it dramatically expands your accessibility to federal buyers — particularly for IT, professional services, and facilities management.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={Lightbulb} color="sky" title="The Capability Statement Is Your First Impression">
            Before you can have a conversation with an agency, you need a capability
            statement — a one-to-two-page document that summarizes what you do, your
            past performance, your differentiators, and your key certifications and
            NAICS codes. Without it, you can&apos;t respond to Sources Sought, attend
            matchmaking events, or reach out to contracting officers effectively. See our{" "}
            <Link
              href="/blog/capability-statement-guide"
              className="underline font-medium"
            >
              capability statement guide
            </Link>{" "}
            and{" "}
            <Link
              href="/features/capability-statement"
              className="underline font-medium"
            >
              CapturePilot&apos;s one-click generator
            </Link>{" "}
            to build one today.
          </Callout>

          {/* Section 7: Pipeline */}
          <SectionHeading
            id="build-your-pipeline"
            number="07"
            title="Step 6: Build a Systematic Pipeline"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              One bid is a lottery ticket. A pipeline is a business. Government
              contracting win rates for competitive bids typically run 10-25% for
              experienced contractors. New contractors should expect lower, at least
              initially. That means you need to be tracking 20-30 opportunities at
              any given time to win 2-4 contracts per year.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              A pipeline isn&apos;t a spreadsheet of every contract posted in your
              NAICS code. It&apos;s a curated set of opportunities you&apos;ve
              qualified, researched, and made conscious pursuit decisions about.
              Quality beats quantity at every stage.
            </p>

            <div className="relative mb-8">
              <div className="hidden sm:block absolute top-8 left-0 right-0 h-0.5 bg-stone-200 z-0" />
              <div className="grid sm:grid-cols-6 gap-3 relative z-10">
                {[
                  { num: "1", label: "Discover", desc: "SAM.gov, CapturePilot, agency portals, OSDBU events" },
                  { num: "2", label: "Qualify", desc: "Set-aside match, NAICS fit, size, teaming needs" },
                  { num: "3", label: "Capture", desc: "Build agency relationships, submit capability statements" },
                  { num: "4", label: "Bid", desc: "Write and submit the proposal by the deadline" },
                  { num: "5", label: "Track", desc: "Follow up on submission status and evaluation timeline" },
                  { num: "6", label: "Win/Debrief", desc: "Request debrief from CO whether you win or lose" },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="flex flex-col items-center text-center animate-on-scroll"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white text-lg font-black flex items-center justify-center mb-3 shadow-md">
                      {step.num}
                    </div>
                    <p className="font-bold text-stone-900 text-xs mb-1">
                      {step.label}
                    </p>
                    <p className="text-stone-500 text-xs leading-tight">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Track these pipeline metrics from day one:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Opportunities identified per week (your top-of-funnel volume)",
                "Bid/no-bid decision rate (what % do you pursue vs. pass?)",
                "Proposal submission rate (what % of pursuits do you actually bid?)",
                "Win rate (what % of submitted proposals are awarded?)",
                "Average days from identification to submission",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link
                href="/features/pipeline"
                className="text-emerald-700 underline font-medium"
              >
                pipeline management tools
              </Link>{" "}
              track every opportunity from discovery through award, with automated
              stage prompts and deadline alerts. And our{" "}
              <Link
                href="/features/matching"
                className="text-emerald-700 underline font-medium"
              >
                daily matching engine
              </Link>{" "}
              surfaces the best-fit opportunities from SAM.gov before you spend
              hours searching manually.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-emerald-400" />
            <h3 className="text-2xl font-black mb-3">
              Build Your Pipeline in CapturePilot
            </h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              Daily opportunity matching, set-aside tagging, pipeline tracking, and
              agency intelligence — all in one place. Cancel any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={SIGNUP_URL}
                className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent text-white border border-stone-600 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
              >
                See Pricing
              </Link>
            </div>
            <p className="text-xs text-stone-500 mt-4">
              No credit card required for the free trial.
            </p>
          </div>
          {/* Section 8: Mistakes */}
          <SectionHeading
            id="common-mistakes"
            number="08"
            title="Mistakes That Kill New Contractors"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Most first-time contractors don&apos;t lose because the competition is
              too good. They lose because of self-inflicted errors that disqualify
              them before evaluators even read their proposal. Avoid these:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: AlertTriangle,
                  color: "amber",
                  title: "Bidding on everything",
                  desc: "Spray-and-pray bidding produces thin proposals and zero wins. A mediocre proposal on 10 RFPs loses to a great proposal on 2. Be selective. Use a formal bid/no-bid process and only pursue contracts where you have a genuine chance.",
                },
                {
                  icon: FileText,
                  color: "red",
                  title: "Skipping Sources Sought notices",
                  desc: "Sources Sought notices are not just informational. They are invitations. Responding with a capability statement gets you in front of the contracting officer before any competition starts. It can literally shape how the eventual RFP is written. Ignoring them means you start every bid behind.",
                },
                {
                  icon: AlertTriangle,
                  color: "amber",
                  title: "Not reading the solicitation carefully",
                  desc: "The most common cause of proposal disqualification is failing to meet mandatory requirements. Page limits, font size, required sections, submission format — evaluators reject non-compliant proposals without reading them. Read the solicitation twice before writing a word of your proposal.",
                },
                {
                  icon: Clock,
                  color: "red",
                  title: "Letting SAM.gov registration lapse",
                  desc: "SAM.gov must be renewed annually. If your registration expires while an award is pending, the agency cannot award to you — regardless of how good your proposal was. Set reminders 60 days out and renew as soon as the renewal window opens.",
                },
                {
                  icon: Target,
                  color: "amber",
                  title: "Using the wrong set-aside designation",
                  desc: "Claiming a set-aside you don't qualify for — or failing to claim one you do — both cost you. The first can get your award rescinded or lead to False Claims Act liability. The second means you're competing in harder pools than you need to. Verify your eligibility through the proper certification channels before marking any set-aside on SAM.gov.",
                },
                {
                  icon: FileText,
                  color: "red",
                  title: "No capability statement",
                  desc: "Contracting officers ask for capability statements before solicitations are even published. At matchmaking events. At OSDBU outreach sessions. At industry days. If you don't have one ready, you miss the conversation. A one-page capability statement, done well, opens more doors than a 20-page proposal submitted cold.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-5 rounded-xl border animate-on-scroll ${
                    item.color === "red"
                      ? "border-red-200 bg-red-50"
                      : "border-amber-200 bg-amber-50"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.color === "red"
                        ? "bg-red-100 text-red-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p
                      className={`font-bold text-sm mb-1 ${
                        item.color === "red" ? "text-red-900" : "text-amber-900"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        item.color === "red" ? "text-red-800" : "text-amber-800"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              For more on building a capability statement that actually wins
              meetings, see our{" "}
              <Link
                href="/blog/capability-statement-guide"
                className="text-emerald-700 underline font-medium"
              >
                capability statement guide
              </Link>
              . And if you want a pre-bid checklist to run through before every
              proposal, download our{" "}
              <Link
                href="/resources/bid-checklist"
                className="text-emerald-700 underline font-medium"
              >
                Bid Checklist
              </Link>
              .
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Stop Searching. Start Winning.
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot identifies the highest-probability government contracts
                for your business — based on your NAICS codes, certifications, size,
                and past performance. See your matches in minutes.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily SAM.gov matching tailored to your profile",
                  "Set-aside opportunity tagging and eligibility scoring",
                  "Incumbent analysis and pricing benchmarks",
                  "Pipeline management from discovery through award",
                  "Capability statement generator",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
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
                  href="/demo"
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">
                No credit card required. Cancel any time.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/set-aside-programs",
                  icon: Shield,
                  title: "Set-Aside Programs Guide",
                  desc: "8(a), SDVOSB, WOSB, HUBZone — full breakdown",
                },
                {
                  href: "/blog/naics-codes-explained",
                  icon: FileText,
                  title: "NAICS Codes Explained",
                  desc: "Find the right codes for your business",
                },
                {
                  href: "/blog/sam-registration-guide",
                  icon: Globe,
                  title: "SAM.gov Registration Guide",
                  desc: "Step-by-step walkthrough for 2026",
                },
                {
                  href: "/blog/capability-statement-guide",
                  icon: Star,
                  title: "Capability Statement Guide",
                  desc: "Write one that opens doors",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-emerald-600" />
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
