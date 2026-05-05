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
  Search,
  DollarSign,
  Target,
  Zap,
  Bell,
  TrendingUp,
  Filter,
  FileText,
  Clock,
  Award,
  Sparkles,
  BarChart3,
  RefreshCw,
  Eye,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-market", label: "The Market You're Searching" },
  { id: "search-strategy", label: "Don't Browse — Build a Search Strategy" },
  { id: "filter-stack", label: "The Filter Stack That Actually Works" },
  { id: "early-notices", label: "Finding Contracts Before They're Competed" },
  { id: "reading-listings", label: "How to Read an Opportunity Listing" },
  { id: "saved-searches", label: "Saved Searches and Daily Workflow" },
  { id: "award-intelligence", label: "Award Notices as Market Intelligence" },
  { id: "registration", label: "SAM.gov Registration: The Silent Deal-Killer" },
  { id: "beyond-sam", label: "When SAM.gov Isn't Enough" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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

export default function SamGovSearchTipsPage() {
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
            <span className="text-stone-900 font-medium">SAM.gov Search Tips</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Search className="w-4 h-4" /> Tools &amp; Tactics
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SAM.gov Search Tips:{" "}
            <span className="gradient-text">Stop Wasting Time and Find Real Opportunities</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            SAM.gov lists every federal contract opportunity above{" "}
            <strong className="text-stone-700">$25,000</strong> — tens of thousands of new
            postings a year across every agency and industry. Most small businesses search it
            wrong and miss their best opportunities. Here&apos;s how to search with intent.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 5, 2026</span>
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
            id="the-market"
            number="01"
            title="The Market You're Searching"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government is the largest single buyer in the world. In FY2023, it awarded{" "}
              <strong>$178.6 billion</strong> in prime contracts to small businesses alone — an
              all-time record representing 28.4% of eligible federal contract dollars. That exceeded
              the governmentwide 23% small business goal by a significant margin.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Every dollar of that spending flowed through contracts that were first posted — or
              should have been posted — on SAM.gov. Under FAR Part 5, any contract action above
              <strong> $25,000</strong> must be synopsized on SAM.gov before award. That makes
              SAM.gov not just a useful resource but the mandatory publication point for the entire
              federal marketplace.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              A few key thresholds frame how the market is structured. Below $10,000, the government
              can buy from anyone without competition — the micro-purchase threshold. Between $10,000
              and the Simplified Acquisition Threshold (now{" "}
              <strong>$350,000</strong> as of October 1, 2025, raised from $250,000 to account for
              inflation), agencies follow simplified procedures. Above $350,000, full FAR-compliant
              competitive procedures apply. Different thresholds, different search strategies.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$178.6B", label: "Small business contract awards, FY2023", icon: DollarSign },
                { stat: "28.4%", label: "SB share of eligible federal dollars (FY2023)", icon: BarChart3 },
                { stat: "$25K", label: "Minimum threshold for SAM.gov posting", icon: Target },
                { stat: "$350K", label: "Simplified Acquisition Threshold (as of Oct 2025)", icon: Zap },
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
              The challenge isn&apos;t finding SAM.gov. Everyone knows it exists. The challenge is
              using it so your time turns into real opportunities — not hours lost wading through
              irrelevant postings, expired solicitations, and contracts your business was never
              positioned to win.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Contractors who win consistently on SAM.gov don&apos;t just search — they build
              structured, repeatable workflows that surface the right opportunities before their
              competitors see them. That&apos;s what this guide covers.
            </p>
          </div>

          <Callout icon={Lightbulb} color="blue" title="SAM.gov Replaced FedBizOpps (FBO.gov) in 2019">
            If you&apos;ve been contracting since before 2019, you remember FedBizOpps. SAM.gov
            absorbed that system and now consolidates entity registration, contract opportunities,
            award data, and exclusion records into one platform. The interface has continued
            evolving — in July 2025, SAM.gov completed integration of contract award data
            previously housed in FPDS-NG, making award history searchable alongside active
            opportunities for the first time.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="search-strategy"
            number="02"
            title="Don't Browse — Build a Search Strategy"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most people open SAM.gov, type their industry into the search bar, and scroll. That
              approach produces noise. Thousands of contracts, most of them irrelevant, with no way
              to distinguish between a $400K professional services opportunity in your region and a
              $400M defense system integration contract you&apos;ll never compete for.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              A real search strategy starts with three decisions made before you open the browser.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Target,
                  title: "Know your NAICS codes before anything else",
                  desc: "Your North American Industry Classification System (NAICS) codes are the most important thing in your SAM.gov profile. They determine which set-asides you're eligible for, which size standards apply to you, and which searches will surface relevant work. Add every 6-digit code your business can genuinely perform — don't just use your primary code. Contracts often use codes adjacent to your core capability. Miss those codes and you miss those contracts. See our NAICS code guide for how to identify the right ones.",
                },
                {
                  icon: DollarSign,
                  title: "Set a realistic contract size range",
                  desc: "Chasing contracts that are 10x your current revenue is a losing strategy. The government expects past performance relevant to the contract's size and scope. A $50K contract is winnable for a firm without federal past performance. A $5M contract typically isn't, unless you're teaming. Set upper and lower bounds that match your capacity — then filter accordingly. This alone cuts irrelevant results by 60-70%.",
                },
                {
                  icon: Filter,
                  title: "Define your target agencies",
                  desc: "Every agency spends differently. The Department of Defense accounts for roughly half of all federal contract dollars. The VA is the dominant agency for veteran set-asides. HHS and DHS have different spending profiles than GSA or DoT. Before you search broadly, identify 2-3 agencies that spend significantly in your NAICS codes — then focus there. Depth beats breadth in federal contracting.",
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
              One more thing: log in. Unauthenticated searches on SAM.gov return results but
              don&apos;t let you save searches, set alerts, or access full solicitation documents
              without clicking through multiple screens. Create a free SAM.gov account with
              login.gov — it takes 10 minutes and unlocks the tools that make the platform usable
              for daily research.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Your{" "}
              <Link href="/features/matching" className="text-blue-700 underline font-medium">
                opportunity matching
              </Link>{" "}
              inside CapturePilot works the same way — it uses your registered NAICS codes,
              certifications, and target agencies to surface only the contracts your profile is
              eligible to pursue. No keyword fishing required.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center animate-on-scroll">
            <Search className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Check Which Set-Asides You Qualify For
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Before you build your search strategy, know your certifications. Our Quick Checker
              tells you which small business programs you likely qualify for — in under 3 minutes,
              free.
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
            id="filter-stack"
            number="03"
            title="The Filter Stack That Actually Works"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov&apos;s advanced search is more powerful than most contractors use it. The
              default keyword search returns too many results. The advanced filter stack narrows
              results to opportunities your business is actually positioned to pursue. Here&apos;s
              how to stack them.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Filter</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What to Set</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        filter: "NAICS Code",
                        value: "Your 2–4 primary codes",
                        why: "Defines which size standards and set-asides apply to each contract — most important filter by far",
                      },
                      {
                        filter: "PSC Code",
                        value: "Product/Service Code for your category",
                        why: "PSC codes classify what's being bought (4-character alphanumeric); filters more precisely than keywords",
                      },
                      {
                        filter: "Set-Aside Type",
                        value: "Your certification(s): SDVOSB, WOSB, 8(a), HUBZone",
                        why: "Limits results to competitions you're eligible for — drastically reduces field size",
                      },
                      {
                        filter: "Notice Type",
                        value: "Sources Sought, Presolicitation first — then Solicitation",
                        why: "Early notices let you build relationships before the RFP drops; solicitations alone mean you're already behind",
                      },
                      {
                        filter: "Posted Date",
                        value: "Last 7 days for daily review; 90 days for initial sweep",
                        why: "New postings are the highest-priority review; old ones may already have shortlisted vendors",
                      },
                      {
                        filter: "Place of Performance",
                        value: "Your state or region",
                        why: "Services, construction, and O&M contracts strongly favor local vendors with mobilization capability",
                      },
                      {
                        filter: "Agency",
                        value: "Your 2–3 target agencies",
                        why: "Focusing on fewer agencies produces better relationships and more wins than spreading thinly across all",
                      },
                      {
                        filter: "Solicitation Number",
                        value: "Track specific contracts or recompetes",
                        why: "When you know a contract is expiring, search by number to find the recompete posting immediately",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800">{row.filter}</td>
                        <td className="px-5 py-3 text-blue-700 font-medium text-xs">{row.value}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-snug">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The NAICS/PSC combination is where most contractors lose precision. NAICS identifies
              who performs the work (your industry classification). PSC identifies what&apos;s being
              bought. A technology services firm might operate under NAICS 541512 (Computer Systems
              Design Services) but the government might purchase their work under PSC D301
              (IT and Telecom — IT Strategy and Architecture). Running both filters simultaneously
              eliminates the false positives that keyword searches produce.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              One filter often overlooked: the <strong>Inactive</strong> opportunity type. Expired
              solicitations are intelligence. When a contract closed without an award announcement,
              it may be coming back. When it closed with an award, you now know the incumbent —
              and when the base period plus options would end, giving you a recompete timeline.
              Search inactive awards in your NAICS regularly as part of your market research.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Save each combination of filters as a named search in your SAM.gov account. You
              should have at minimum three saved searches: one for open solicitations in your
              primary NAICS, one for Sources Sought and Pre-solicitations, and one for recent
              awards to track incumbents. Run them on a consistent schedule — daily if you&apos;re
              actively pursuing work, weekly if you&apos;re maintaining market awareness.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="NAICS vs. PSC: Know Both or Miss Opportunities">
            NAICS codes classify your business. PSC codes classify what the government is buying.
            A contract posted under NAICS 561720 (Janitorial Services) might use PSC S201 (House
            Keeping Services) — or a slightly different PSC depending on the agency. When you
            search by NAICS alone, you miss contracts where the agency labeled the work with an
            adjacent PSC. Build a lookup list of the PSC codes that correspond to your NAICS codes
            and use both in your saved searches.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="early-notices"
            number="04"
            title="Finding Contracts Before They're Competed"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The single highest-leverage activity in SAM.gov search isn&apos;t finding open
              solicitations. It&apos;s finding early notices — Sources Sought and Pre-solicitations
              — weeks or months before any competition begins. That&apos;s where influence is
              possible and where relationships get built.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Here&apos;s how each notice type differs and what to do with each one:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "01",
                  title: "Sources Sought Notice",
                  desc: "A Sources Sought is market research — the contracting officer is trying to determine whether small businesses (or specific set-aside categories) can perform the requirement. Responding is not bidding. It's announcing your existence and capability. A strong response tells the CO your firm is real, capable, and worth a future conversation. It can also influence whether the eventual solicitation gets set aside for small businesses, and which certifications apply. Respond to every Sources Sought in your NAICS at target agencies — even if you don't pursue the subsequent RFP.",
                },
                {
                  step: "02",
                  title: "Pre-Solicitation Notice",
                  desc: "A Pre-solicitation announces a forthcoming RFP, usually with 15+ days advance notice before the solicitation is officially released. At this stage, the requirements are largely set — but you still have time to introduce your firm, request an industry day attendance list, and prepare your proposal team. Use pre-solicitations to start your bid/no-bid decision process immediately rather than waiting for the full RFP.",
                },
                {
                  step: "03",
                  title: "Solicitation (RFP/RFQ/IFB)",
                  desc: "The formal solicitation is where competition formally begins. By this point, the incumbent (if one exists) has had months to prepare. New competitors are at an information disadvantage. If you're only tracking solicitations, you're always starting from behind. Solicitations remain important — but they're most valuable when you've already built context through earlier notices.",
                },
                {
                  step: "04",
                  title: "Special Notices and Industry Days",
                  desc: "SAM.gov also posts special notices for Industry Days, conference announcements, and Requests for Information (RFI). Industry Days are particularly valuable — they're the agency's open door for vendor introductions before any competition. Attending an industry day puts your face in front of the program team that will evaluate your eventual proposal. Search for Special Notices in your target agencies monthly.",
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
              Responding to a Sources Sought notice takes about two hours if you have a strong{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-700 underline font-medium"
              >
                capability statement
              </Link>{" "}
              ready. The response typically covers: your relevant past performance (contract number,
              value, scope, agency, point of contact), your NAICS code eligibility, your
              certifications, your technical approach at a high level, and your small business
              status. No pricing, no detailed technical solution — just enough to establish that
              your firm can do the work.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our guide on{" "}
              <Link
                href="/blog/sources-sought-notice"
                className="text-blue-700 underline font-medium"
              >
                responding to Sources Sought notices
              </Link>{" "}
              covers the exact format and what to include. It&apos;s worth reading before the first
              one lands in your saved search results.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="reading-listings"
            number="05"
            title="How to Read an Opportunity Listing"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              An opportunity listing on SAM.gov contains more information than most contractors
              read. The title and description are obvious. What most miss are the signals buried
              in the metadata — the ones that tell you whether this is worth pursuing before you
              invest a single hour.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Field</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What to Look For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        field: "Set-Aside Type",
                        look: "Total Small Business, SDVOSB, 8(a), HUBZone, WOSB — or \"None\" (full-and-open). If full-and-open and above $350K, large businesses compete. Know before you read further.",
                      },
                      {
                        field: "NAICS Code",
                        look: "Confirm it matches a code in your SAM profile. The size standard listed next to the NAICS determines if you qualify as small — check it every time.",
                      },
                      {
                        field: "Response Date",
                        look: "Is there enough time to prepare a competitive response? Less than 7 days on a complex RFP means you're unlikely to compete unless you already know the requirement.",
                      },
                      {
                        field: "Primary POC",
                        look: "The Contracting Officer and Contract Specialist contact info. Build a contact log. Knowing names across agencies is a long-term competitive asset.",
                      },
                      {
                        field: "Contract History",
                        look: "Is there a prior contract number referenced? That's the incumbent. Search it in SAM.gov awards to see who held it and how large it was.",
                      },
                      {
                        field: "Attachments",
                        look: "Performance Work Statements (PWS), Statements of Objectives (SOO), or draft RFPs contain the real requirements. Skim these before spending time on the opportunity listing alone.",
                      },
                      {
                        field: "Place of Performance",
                        look: "Some services require on-site presence. A contract requiring work in a city where you have no staff is a resource-intensive problem to solve — factor that in before bidding.",
                      },
                      {
                        field: "Award Notice or Amendment History",
                        look: "Multiple amendments on a solicitation often signal problems — scope confusion, timeline changes, protest risk. Track amendment counts on active solicitations you're pursuing.",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 whitespace-nowrap">{row.field}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed">{row.look}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The bid/no-bid decision is one of the most important disciplines in federal
              contracting. Bidding everything wastes resources and produces low win rates. A firm
              that bids 20 opportunities with a 5% win rate spends the same effort as one that bids
              5 carefully chosen opportunities with a 40% win rate — but the second firm wins twice
              as many contracts. Read our guide on{" "}
              <Link
                href="/features/intelligence"
                className="text-blue-700 underline font-medium"
              >
                using competitive intelligence
              </Link>{" "}
              to make better go/no-go decisions.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The incumbent question deserves special attention. An incumbent with 5+ years of
              performance on a requirement has built agency relationships, institutional knowledge,
              and embedded processes that a new vendor has to overcome. That doesn&apos;t mean
              you can&apos;t win — incumbents lose recompetes regularly — but it does mean your
              proposal has to be materially better, not marginally better. Know who the incumbent
              is before you bid, and understand specifically where they&apos;re vulnerable.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Always Check the NAICS Size Standard — It Changes">
            SBA revises small business size standards periodically. The size standard for your
            NAICS code today may not be the same as when you last checked. Each opportunity
            listing shows the NAICS code and size standard that applies. Confirm you qualify as
            small under that specific standard before investing proposal effort. A business that
            exceeds the size standard for a set-aside solicitation is ineligible even if it holds
            a small business certification for a different NAICS code.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="saved-searches"
            number="06"
            title="Saved Searches and Daily Workflow"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov&apos;s saved search feature is the only way to make daily opportunity review
              sustainable. Without saved searches, you&apos;re rebuilding your filter stack every
              session and likely missing opportunities between visits. With them, you get daily
              email digests of new results that match your exact criteria.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Build this minimum set of saved searches and schedule a daily 20-minute review:
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  icon: Bell,
                  title: "Active Solicitations — Your Primary NAICS",
                  desc: "Filter: Notice Type = Solicitation, NAICS = your primary codes, Set-Aside = your certification(s), Posted Date = last 7 days. Email alert: daily. This is your pipeline source — the opportunities you may actually propose on.",
                },
                {
                  icon: Eye,
                  title: "Early Notices — Sources Sought &amp; Pre-Solicitations",
                  desc: "Filter: Notice Type = Sources Sought + Presolicitation, NAICS = all your codes, Agency = your 2–3 target agencies, Posted Date = last 14 days. Email alert: daily. These are your highest-value relationship-building opportunities.",
                },
                {
                  icon: RefreshCw,
                  title: "Recompetes — Recent Awards in Your NAICS",
                  desc: "Filter: Notice Type = Award Notice, NAICS = your codes, Posted Date = last 90 days (for initial setup; update to last 30 days once established). No email alert needed — check weekly. Use this to build your recompete timeline: base period + 5 option years = your pursuit window.",
                },
                {
                  icon: Target,
                  title: "Target Agencies — Broad View",
                  desc: "Filter: Agency = your top 2 agencies, NAICS = all your codes, Notice Type = all. Posted Date = last 3 days. Email alert: daily. This catches adjacent NAICS codes and notice types you might miss in more targeted searches.",
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
                    <p
                      className="font-bold text-stone-900 text-sm mb-1"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The daily workflow with these searches takes 15-25 minutes if you&apos;re
              disciplined. Scan the new results, apply a quick go/no-bid filter (set-aside match,
              NAICS match, contract size in range, enough time to respond), and route anything
              worth pursuing into your{" "}
              <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                contract pipeline
              </Link>
              . Don&apos;t open full solicitation documents during the triage — that&apos;s a
              deeper-dive step for opportunities that pass the initial filter.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 underline font-medium">
                daily matching engine
              </Link>{" "}
              runs the equivalent of your saved searches automatically — pulling from SAM.gov
              nightly, applying your profile filters, and scoring each opportunity against your
              historical win criteria. It compresses the triage step from 20 minutes to under 5.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-black mb-3">Let the Matching Engine Do the Search for You</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot scans SAM.gov daily and matches opportunities against your NAICS codes,
              certifications, and contract size preferences — so your morning review starts with
              the right 10 opportunities, not 500 irrelevant ones.
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
            id="award-intelligence"
            number="07"
            title="Award Notices as Market Intelligence"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most contractors only use SAM.gov to find open solicitations. Smart contractors also
              mine award notices — the announcements of contracts already given to someone else.
              Award data is how you understand the competitive landscape you&apos;re entering, not
              just the contract you&apos;re pursuing right now.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              As of July 2025, SAM.gov completed its integration of FPDS-NG award data directly
              into the platform. You can now search contract awards with the same interface you use
              for opportunities. Here&apos;s what to pull from award notices and how to use it:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Award,
                  title: "Identify Incumbents in Your Target NAICS",
                  desc: "Search awards in your NAICS code at your target agencies. Filter by set-aside type matching your certification. The awardees are your direct competitors — and the current holders of contracts you want. Research each one. Their websites, GSA schedules, and LinkedIn profiles tell you how big they are, what past performance they've built, and where they're likely to be vulnerable.",
                },
                {
                  icon: Clock,
                  title: "Build a Recompete Calendar",
                  desc: "Every federal contract has an end date. Most service contracts run 5 years (1 base year + 4 option years, or some similar structure). When you see an award for a contract that matches your profile, note the award date and calculate when it expires. That's when the recompete hits SAM.gov. A recompete calendar 18-24 months out is one of the most valuable strategic assets a small contractor can have.",
                },
                {
                  icon: TrendingUp,
                  title: "Spot Spending Patterns Before They Hit Solicitations",
                  desc: "Award patterns reveal where agencies are spending more than their solicitations do. If a civilian agency has awarded 12 contracts in your NAICS code in the last 18 months and you've only seen 3 solicitations, the rest were likely sole-source or micro-purchase awards. That's a signal: this agency has consistent demand that isn't hitting full competition. Build relationships there before the next requirement exceeds the threshold.",
                },
                {
                  icon: BarChart3,
                  title: "Understand Price Points",
                  desc: "Award values in SAM.gov (and the deeper data in USASpending.gov) give you real market pricing. If your target NAICS code produces contract awards ranging from $180K to $2.3M in a given agency, you know the pricing environment. That informs your own pricing strategy and capacity planning — and helps you determine which opportunities are sized for your current state versus which require additional teaming.",
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
              Pair SAM.gov award data with{" "}
              <strong>USASpending.gov</strong> for a more complete picture. USASpending provides
              richer reporting — transaction-level detail, spending by agency office, historical
              trends by NAICS, and contractor profiles — that SAM.gov&apos;s integrated data
              doesn&apos;t yet replicate at the same depth. Both tools are free and complement
              each other.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="text-blue-700 underline font-medium">
                market intelligence
              </Link>{" "}
              automates the incumbent and recompete tracking step — pulling award data, calculating
              expiration timelines, and surfacing expiring contracts in your NAICS before
              competitors see them on SAM.gov.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="USASpending.gov Goes Deeper Than SAM.gov Award Notices">
            SAM.gov award notices confirm a contract happened. USASpending.gov tells you everything
            about it: exact dollar amount, all modification values, funding agency vs. awarding
            agency, and vendor profile over time. For serious market research, use both.
            USASpending is especially useful for identifying sole-source awards that bypass
            SAM.gov posting requirements — those are the agency relationships worth building.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="registration"
            number="08"
            title="SAM.gov Registration: The Silent Deal-Killer"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              No matter how well you search SAM.gov, an inactive registration disqualifies you from
              every contract you pursue. This isn&apos;t theoretical — contracting officers
              check SAM.gov registration status before awarding any contract. An expired
              registration means no award, no matter how strong your proposal.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              SAM.gov registration expires <strong>365 days</strong> from activation or last
              renewal. The system sends email reminders at 60, 30, and 15 days before expiration.
              Start the renewal process at least <strong>60 days before expiration</strong> — not
              30. Here&apos;s why.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Renewal takes 5-10 business days to process",
                  desc: "The IRS must validate your EIN again. DLA must confirm your CAGE code is still current. These backend validations have queues. If you renew two weeks before expiration and hit a validation delay, your registration can lapse before processing completes. A lapsed registration can take additional days to reactivate — days during which you cannot receive contract awards.",
                },
                {
                  step: "02",
                  title: "Any lapse creates a gap in your contracting history",
                  desc: "Federal contracting databases record registration history. An agency reviewing your firm's history can see when your registration was active and inactive. Frequent lapses signal operational immaturity — not a catastrophic disqualifier, but a flag that experienced contracting officers notice during source selection.",
                },
                {
                  step: "03",
                  title: "Renewal is when you should update your NAICS codes",
                  desc: "Don't just click through renewal without reviewing your entity profile. Your NAICS codes, certifications, points of contact, and banking information should all be reviewed annually. A firm that has grown into new service areas and never updated its NAICS list is missing eligible contracts every day. Renewal is the discipline moment to update everything.",
                },
                {
                  step: "04",
                  title: "Certifications have separate renewal schedules",
                  desc: "Your SAM.gov registration and your set-aside certifications are separate. SBA certifications (8(a), HUBZone, WOSB, VetCert for SDVOSB) have their own renewal cycles — typically 1-3 years depending on the program. An active SAM registration does not keep your SBA certifications current. Track both on a single calendar.",
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
              For a complete walkthrough of the initial registration and renewal process, read our{" "}
              <Link
                href="/blog/sam-registration-guide"
                className="text-blue-700 underline font-medium"
              >
                SAM.gov registration guide
              </Link>
              . It covers the IRS validation step, CAGE code management, the notarized letter
              requirement for some entity types, and how to handle common registration errors.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Registration issues are one of the most common reasons small businesses miss
              contract award deadlines. Put your registration expiration date in your calendar
              right now. Renew early, review everything, and never assume it stays active on its own.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Your Registration Can Lapse Even If You Don't Miss the Reminder Email">
            SAM.gov sends renewal reminders to the email address on file for your Entity
            Administrator. If that person has left the company — or if the email address changed
            and wasn&apos;t updated in your SAM profile — the reminders go nowhere. This is the
            most common way registration lapses happen at growing firms. Confirm your Entity
            Administrator email address every time you log in to SAM.gov, not just at renewal.
          </Callout>

          {/* Section 9 */}
          <SectionHeading
            id="beyond-sam"
            number="09"
            title="When SAM.gov Isn't Enough"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov is mandatory, but it&apos;s not sufficient. The contractors who win
              consistently supplement SAM.gov searches with additional intelligence sources that
              surface opportunities earlier, provide richer competitive context, and surface
              relationships that never appear in a public database.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Source</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What It Adds</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Best Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        source: "USASpending.gov",
                        adds: "Full award history, modification values, vendor profiles, spending trends by agency and NAICS",
                        use: "Competitor research, recompete timeline building, sole-source identification",
                      },
                      {
                        source: "Agency Procurement Forecasts",
                        adds: "Planned contracts 6-18 months before SAM.gov posting — includes contract value, NAICS, and anticipated set-aside type",
                        use: "Long-cycle pipeline planning; relationship building before competition begins",
                      },
                      {
                        source: "GSA eBuy",
                        adds: "RFQs for GSA Schedule holders, including set-aside RFQs that don't always appear on SAM.gov",
                        use: "Supplemental pipeline for firms with a GSA Multiple Award Schedule",
                      },
                      {
                        source: "Agency OSDBU Websites",
                        adds: "Small business program contacts, upcoming events, matchmaking opportunities, and supplemental forecasts",
                        use: "Relationship-building; identifying the right people before a solicitation drops",
                      },
                      {
                        source: "CapturePilot Intelligence",
                        adds: "AI-scored opportunity matching, incumbent identification, recompete alerts, and win probability scoring in one dashboard",
                        use: "Daily opportunity review, go/no-bid decisions, pipeline management from first notice to award",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-stone-100 last:border-0 ${
                          i === 4 ? "bg-blue-50" : i % 2 === 0 ? "bg-white" : "bg-stone-50"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs whitespace-nowrap">{row.source}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs leading-relaxed">{row.adds}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-relaxed">{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Agency procurement forecasts are particularly underused. Most civilian agencies and
              all major defense commands publish annual forecasts of anticipated acquisitions —
              often released in the October-December timeframe for the upcoming fiscal year.
              These forecasts list requirements by NAICS code, estimated dollar value, anticipated
              set-aside type, and expected solicitation month. A contractor who reads these forecasts
              gets 6-12 months of advance notice on opportunities that won&apos;t appear on SAM.gov
              until the solicitation is formally released.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              GSA eBuy works differently from SAM.gov — it&apos;s a quote request portal for
              agencies buying off GSA Multiple Award Schedules. If you hold a GSA Schedule in
              your NAICS code, you can receive set-aside RFQs directly through eBuy that may not
              appear in SAM.gov opportunity searches. Many VA and civilian agency purchases go
              through schedule vehicles at dollar values above the Simplified Acquisition
              Threshold — and the only way to see those opportunities is through eBuy, not SAM.gov.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Building a federal contracting pipeline that depends exclusively on SAM.gov is
              like building a sales pipeline that depends exclusively on inbound leads.
              It works, but it leaves the best opportunities — the ones where you&apos;ve shaped
              the requirement and built the relationship before any competition began — on the table.
              Read our guide on{" "}
              <Link
                href="/blog/government-contract-pipeline-management"
                className="text-blue-700 underline font-medium"
              >
                managing your government contract pipeline
              </Link>{" "}
              for the full approach.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Agency Forecasts Are Published Annually — Most Contractors Never Read Them">
            Every major federal agency publishes a Small Business Procurement Forecast. The
            Department of Defense, VA, DHS, HHS, and GSA all release them — usually in the
            October-November window when the new fiscal year begins. These forecasts list
            hundreds of upcoming requirements by NAICS code, estimated value, set-aside type,
            and planned solicitation quarter. They&apos;re free, public, and almost entirely
            ignored by the contractors who would benefit most from reading them. Find your target
            agency&apos;s forecast on their OSDBU website.
          </Callout>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Stop Searching. Start Finding.
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot applies your NAICS codes, certifications, and target agencies against
                SAM.gov daily — surfacing the right opportunities before your competitors see them.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily matching against SAM.gov tailored to your exact profile",
                  "Sources Sought and Pre-solicitation alerts before RFPs drop",
                  "Incumbent identification and recompete tracking",
                  "Go/no-bid scoring based on your win criteria",
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
                  href="/demo"
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Book a Strategy Call
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
                  href: "/blog/how-to-find-government-contracts-small-business",
                  icon: Target,
                  title: "Find Government Contracts",
                  desc: "Complete guide to entering the federal market as a small business",
                },
                {
                  href: "/blog/sam-registration-guide",
                  icon: FileText,
                  title: "SAM.gov Registration Guide",
                  desc: "Step-by-step registration walkthrough and common issues",
                },
                {
                  href: "/blog/sources-sought-notice",
                  icon: Search,
                  title: "Sources Sought Notices",
                  desc: "How to respond and influence the RFP before competition starts",
                },
                {
                  href: "/blog/hubzone-program-guide",
                  icon: Award,
                  title: "HUBZone Program Guide",
                  desc: "How location-based certification wins government contracts",
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
