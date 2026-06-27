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
  Zap,
  DollarSign,
  FileText,
  Target,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Star,
  AlertCircle,
  Layers,
  Building,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-are-otas", label: "What OTAs Are (and What They Aren't)" },
  { id: "ota-growth", label: "The Numbers: $18B and Growing" },
  { id: "ota-types", label: "Prototype vs. Production: Two Flavors of OTA" },
  { id: "eligibility", label: "Who Can Participate: The Eligibility Rules" },
  { id: "nontraditional", label: "Non-Traditional Contractor Status Explained" },
  { id: "finding-opportunities", label: "How to Find OTA Opportunities" },
  { id: "consortium-strategy", label: "OTA Consortiums: Your Fast Track In" },
  { id: "award-process", label: "The OTA Award Process Step by Step" },
  { id: "prototype-to-production", label: "Prototype to Production: The Follow-On Path" },
  { id: "common-mistakes", label: "Mistakes That Get Small Businesses Shut Out" },
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

export default function OtaContractsGuidePage() {
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
            <span className="text-stone-900 font-medium">OTA Contracts</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            OTA Contracts Explained:{" "}
            <span className="gradient-text">How Other Transaction Authority Is Changing Defense Procurement</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government spent <strong className="text-stone-700">$18.2 billion</strong> on Other Transaction
            Authority agreements in FY2025 — up from $1.8 billion in 2016. These contracts bypass FAR, move faster
            than traditional procurement, and are explicitly designed to bring in companies that have never worked
            with DoD before. If you haven&apos;t looked at OTAs yet, you&apos;re leaving a significant lane open.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 27, 2026</span>
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
          <SectionHeading id="what-are-otas" number="01" title="What OTAs Are (and What They Aren't)" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Other Transaction Authority is not a contract vehicle in the traditional sense. It&apos;s a legal authority
            granted by Congress that allows the Department of Defense to enter into agreements that are{" "}
            <strong>not subject to the Federal Acquisition Regulation (FAR)</strong> or the Defense Federal Acquisition
            Regulation Supplement (DFARS). That distinction matters more than most people realize.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Under a standard federal contract, DoD must follow hundreds of acquisition rules: full and open competition
            requirements, certified cost and pricing data, the Truth in Negotiations Act, Cost Accounting Standards,
            and a stack of mandatory clauses that add compliance overhead to both sides. OTAs strip most of that
            away. The government gets faster, more flexible deals. You get fewer administrative burdens.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OTAs have existed in various forms since 1958 — NASA used them for the original space program. DoD&apos;s
            modern OTA authority is grounded in{" "}
            <strong>10 U.S.C. § 4021</strong> (research) and <strong>10 U.S.C. § 4022</strong> (prototype projects).
            The prototype authority is the one most businesses care about today, because it can convert directly into
            a production contract without re-competing.
          </p>

          <Callout icon={AlertCircle} color="amber" title="OTAs are agreements, not contracts">
            This isn&apos;t semantic hair-splitting. OTA agreements are legally distinct from contracts, grants, and
            cooperative agreements. That means standard contract protest rules at GAO don&apos;t apply the same way —
            which is both a feature and a risk depending on which side of the award you&apos;re on.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            What OTAs are NOT: a shortcut to skip competition entirely. The government still solicits proposals,
            evaluates them, and makes award decisions. The difference is the process is faster, the evaluation
            criteria are simpler, and the paperwork is lighter. Think of it as federal procurement on easy mode —
            designed for speed and innovation over procedural compliance.
          </p>

          {/* Section 2 */}
          <SectionHeading id="ota-growth" number="02" title="The Numbers: $18B and Growing" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The growth of OTA spending is one of the more striking trends in federal procurement over the past decade.
            According to the Government Accountability Office, DoD OTA obligations grew from{" "}
            <strong>$1.8 billion in FY2016</strong> to over <strong>$18 billion in FY2024</strong>. The GAO reported
            FY2025 spend at $18.2 billion — a tenfold increase in under a decade.
          </p>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-3 gap-4 my-8 not-prose animate-on-scroll">
            {[
              { label: "FY2016 OTA Spend", value: "$1.8B", sub: "Starting point" },
              { label: "FY2025 OTA Spend", value: "$18.2B", sub: "GAO reported" },
              { label: "10-Year Growth", value: "10x", sub: "Since 2016" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center hover-lift"
              >
                <p className="text-3xl font-black text-blue-700 mb-1">{stat.value}</p>
                <p className="font-semibold text-stone-800 text-sm">{stat.label}</p>
                <p className="text-xs text-stone-500 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The catalyst for that growth wasn&apos;t one policy — it was a series of them. Congress expanded DoD&apos;s
            prototype OTA authority in 2015 and 2016, removed dollar ceilings on individual agreements, and gave the
            military services more flexibility to move fast. The FY2025 NDAA and subsequent guidance from the
            Secretary of Defense continued that trend, with a March 2025 memorandum explicitly directing DoD
            components to use OTAs as the <strong>default approach for software acquisition</strong>.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            That policy shift is significant. Software is one of the largest and fastest-growing categories of
            defense spending. Making OTA the default for software procurement means a huge slice of DoD&apos;s buying
            power is now flowing through a channel specifically designed to include non-traditional vendors.
          </p>

          <Callout icon={TrendingUp} color="sky" title="Not just defense: other agencies use OTAs too">
            While DoD holds the most OTA authority, other agencies including DHS, HHS (for pandemic response),
            and NASA have their own OTA-like authorities. The fastest-growing use right now is defense, but watch
            for civilian agency expansion — especially in AI, cybersecurity, and health technology.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="ota-types" number="03" title="Prototype vs. Production: Two Flavors of OTA" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            DoD&apos;s OTA authority covers two distinct types of agreements. Understanding the difference tells you
            which door to knock on and what you&apos;re committing to.
          </p>

          {/* Table */}
          <div className="overflow-x-auto my-8 not-prose animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-left p-4 font-semibold">Prototype OTA (§4022)</th>
                  <th className="text-left p-4 font-semibold">Production OTA (§4022(f))</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Legal basis", "10 U.S.C. § 4022", "Follow-on from successful prototype"],
                  ["Purpose", "R&D, proof of concept, pilot, agile dev", "Full-scale production and deployment"],
                  ["Competition required?", "Yes, for the prototype phase", "No — sole-source follow-on is allowed"],
                  ["FAR applicability", "Not required", "Not required"],
                  ["Dollar ceiling", "None set by statute", "None set by statute"],
                  ["Typical timeline", "Weeks to a few months", "Negotiated post-prototype"],
                  ["Key feature", "Flexibility in approach and terms", "No re-compete if prototype was competitive"],
                ].map(([feature, proto, prod]) => (
                  <tr key={feature as string} className="border-t border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-700">{feature}</td>
                    <td className="p-4 text-stone-600">{proto}</td>
                    <td className="p-4 text-stone-600">{prod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A prototype OTA is broad by design. The statute explicitly covers proof-of-concept, models, reverse
            engineering to address obsolescence, pilot applications of commercial technology, agile development,
            and operational demonstrations. That list isn&apos;t exhaustive — if your product or service doesn&apos;t fit
            neatly into FAR-based procurement, there&apos;s likely an OTA path for it.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The production follow-on is where the real money is. Win a competitive prototype OTA, deliver
            successfully, and the government can award you a production contract — worth millions or hundreds of
            millions — without putting it back out to bid. That&apos;s the strategic prize that makes the prototype
            phase worth pursuing aggressively, even when the prototype award itself is modest.
          </p>

          {/* CTA 1 */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 my-10 not-prose animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-xl p-3 shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-2">
                  See which OTA opportunities match your business
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  CapturePilot&apos;s matching engine tracks OTA solicitations from consortiums and SAM.gov, then
                  filters by your NAICS codes, capabilities, and certifications.
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
          <SectionHeading id="eligibility" number="04" title="Who Can Participate: The Eligibility Rules" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            This is where OTAs get interesting for small businesses. The statute doesn&apos;t open OTAs to everyone
            unconditionally — but the conditions are structured to favor smaller, newer entrants into the defense
            market. Under 10 U.S.C. § 4022(d), DoD can only award a Prototype OTA if at least one of four
            circumstances applies:
          </p>

          <div className="space-y-4 my-8 not-prose animate-on-scroll">
            {[
              {
                num: "01",
                title: "Non-traditional or nonprofit participant",
                desc: "At least one non-traditional defense contractor or nonprofit research institution participates to a significant extent in the prototype project.",
                icon: Star,
              },
              {
                num: "02",
                title: "All participants are non-traditional or small businesses",
                desc: "Every significant participant is either a small business or a non-traditional defense contractor — no large traditional primes required.",
                icon: Users,
              },
              {
                num: "03",
                title: "One-third cost share from non-federal sources",
                desc: "At least 1/3 of the total prototype cost is paid by parties other than the federal government — typically the performing companies.",
                icon: DollarSign,
              },
              {
                num: "04",
                title: "Exceptional circumstances",
                desc: "A Senior Procurement Executive determines in writing that exceptional circumstances justify using a transaction that wouldn't be feasible under a standard contract.",
                icon: FileText,
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 p-5 bg-white border border-stone-200 rounded-xl hover-lift"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 w-7 h-7 rounded-full flex items-center justify-center">
                    {item.num}
                  </span>
                  <item.icon className="w-5 h-5 text-stone-400" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            In practice, conditions 1 and 2 are the most common paths for small businesses. Most OTA solicitations
            are structured to include at least one non-traditional contractor — often as the prime or as a key
            subcontractor. If your company qualifies as non-traditional (more on that below), you become a
            valuable partner for any team that wants to compete for an OTA.
          </p>

          {/* Section 5 */}
          <SectionHeading id="nontraditional" number="05" title="Non-Traditional Contractor Status Explained" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The term &ldquo;non-traditional defense contractor&rdquo; has a specific legal definition under{" "}
            <strong>10 U.S.C. § 3014</strong>. An entity is non-traditional if it has not, for at least the
            one-year period preceding the solicitation, performed any DoD contract or subcontract that is subject
            to full coverage under the Cost Accounting Standards (CAS).
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            CAS full coverage applies to contracts over $2 million with certain large contractors. Most small
            businesses are exempt from CAS entirely — which means most small businesses are non-traditional
            contractors by definition, even if they&apos;ve done some DoD work. This is a bigger advantage than
            most small businesses realize.
          </p>

          <Callout icon={CheckCircle2} color="emerald" title="You're probably already non-traditional">
            If your company has only done small contracts with DoD (under the CAS thresholds), or hasn&apos;t done
            any DoD work in the past year, you qualify as a non-traditional defense contractor. This status
            makes you a required ingredient in most OTA awards. Large primes actively seek non-traditional
            partners specifically to enable their OTA eligibility.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Commercial companies entering the defense market for the first time are automatically non-traditional.
            Tech startups, commercial software companies, and any firm that primarily serves private-sector
            customers are prime candidates. The Defense Advanced Research Projects Agency (DARPA) has long used
            OTAs to pull in Silicon Valley talent for exactly this reason.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Non-traditional status is validated through SAM.gov. The Defense Acquisition University (DAU) has
            published a Non-Traditional Defense Contractor Status Validation Guide that walks through how to
            document your status. Keep that documentation current — you&apos;ll need it when you submit.
          </p>

          {/* Section 6 */}
          <SectionHeading id="finding-opportunities" number="06" title="How to Find OTA Opportunities" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Finding OTA opportunities is harder than finding traditional contracts on{" "}
            <Link href="/blog/sam-gov-search-tips" className="text-blue-600 hover:underline">
              SAM.gov
            </Link>
            . The standard SAM.gov search doesn&apos;t surface consortium-based OTA solicitations well, and many
            agencies post OTA-related notices under different formats than standard solicitations. You need to
            know where to look.
          </p>

          <div className="space-y-5 my-8 not-prose animate-on-scroll">
            {[
              {
                icon: Building,
                label: "SAM.gov — with the right filters",
                detail:
                  "Search for \"Other Transaction\" in the notice type filter, or look for Commercial Solutions Openings (CSO). Filter by agency (DoD, Army, Navy, Air Force, DARPA) and set your NAICS codes. OTA notices sometimes appear as \"Special Notice\" type.",
              },
              {
                icon: Users,
                label: "OTA Consortium portals",
                detail:
                  "Consortiums like NSTXL, S2MARTS, MCSC, and the Advanced Technology International (ATI) network publish solicitations directly on their websites — often before or instead of SAM.gov. Becoming a consortium member is often free or low-cost and gets you direct access.",
              },
              {
                icon: Target,
                label: "Agency innovation offices",
                detail:
                  "DARPA, DIU (Defense Innovation Unit), Army Futures Command, and Air Force AFWERX each run their own OTA-heavy programs. Their websites post Broad Agency Announcements (BAAs) and solicitations that lead to OTA awards. Subscribe to their announcement lists.",
              },
              {
                icon: Zap,
                label: "CapturePilot intelligence feeds",
                detail:
                  "CapturePilot's intelligence engine aggregates OTA solicitations from consortium portals, agency sites, and SAM.gov in one place, filtered to your capability profile. Instead of monitoring a dozen sources manually, you get a single prioritized feed.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-5 bg-white border border-stone-200 rounded-xl hover-lift">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5 shrink-0 h-fit">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.label}</p>
                  <p className="text-sm text-stone-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The transparency gap is real. A 2025 GAO report found that DoD&apos;s OTA contracting data is
            inconsistent and incomplete — agencies don&apos;t report the same way, and the public visibility into who
            is winning what is limited. Congress passed legislation in 2026 requiring disclosure of OTA awards,
            which should improve the data picture over time. For now, the companies winning OTA work are the ones
            proactively hunting for it, not waiting for it to land in their email.
          </p>

          {/* Section 7 */}
          <SectionHeading id="consortium-strategy" number="07" title="OTA Consortiums: Your Fast Track In" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Joining an OTA consortium is the single most reliable way for a small business to access regular OTA
            opportunities. Here&apos;s why: DoD frequently awards a master OTA agreement to a consortium manager, then
            issues task orders or project agreements to consortium members. The competition happens at the
            membership level, not the individual project level — which means once you&apos;re in, the barriers drop
            significantly.
          </p>

          <div className="overflow-x-auto my-8 not-prose animate-on-scroll">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="text-left p-4 font-semibold">Consortium</th>
                  <th className="text-left p-4 font-semibold">Focus Areas</th>
                  <th className="text-left p-4 font-semibold">Managing Organization</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["NSTXL (S2MARTS)", "Spectrum, space, cybersecurity, AI, autonomy", "National Security Technology Accelerator"],
                  ["Advanced Technology International (ATI)", "Warfighter tech, biomedical, ground systems", "ATI"],
                  ["MCSC / RECCWG", "Rapid capability development, engineering", "Marine Corps Systems Command"],
                  ["DIU Commercial Solutions", "AI, autonomy, space, cyber, human systems", "Defense Innovation Unit"],
                  ["Army Contracting Command OTAs", "Soldier systems, unmanned, communications", "Army Futures Command"],
                ].map(([consortium, focus, org]) => (
                  <tr key={consortium as string} className="border-t border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-800">{consortium}</td>
                    <td className="p-4 text-stone-600">{focus}</td>
                    <td className="p-4 text-stone-600">{org}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Each consortium has its own membership requirements, focus areas, and fee structures. Most are open to
            small businesses, startups, and academic institutions. Some charge annual membership fees in the range
            of $1,000–$5,000; others are free to join. That&apos;s a small investment for access to a pipeline of
            pre-vetted, competition-lite opportunities.
          </p>

          <Callout icon={Lightbulb} color="violet" title="Strategic play: be the non-traditional partner">
            If you don&apos;t have the capacity to prime an OTA, you can still benefit by positioning as the
            non-traditional subcontractor a large prime needs to qualify. Your non-traditional status is a
            valuable asset. Reach out proactively to large DoD contractors in your space and offer to team.
            Many of them are actively looking for qualifying partners.
          </Callout>

          {/* Section 8 */}
          <SectionHeading id="award-process" number="08" title="The OTA Award Process Step by Step" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The process varies by agency and consortium, but follows a recognizable arc. Traditional procurement
            timelines measured in years compress dramatically under OTA — some awards move from solicitation to
            contract in four to six weeks.
          </p>

          <div className="space-y-4 my-8 not-prose animate-on-scroll">
            {[
              {
                step: "1",
                title: "Solicitation or Consortium Opportunity Notice",
                detail:
                  "The agency or consortium posts a solicitation — sometimes called a White Paper Request, CSO (Commercial Solutions Opening), or BAA. These are typically shorter and less prescriptive than FAR-based RFPs.",
              },
              {
                step: "2",
                title: "White Paper or Concept Paper Submission",
                detail:
                  "Many OTA solicitations start with a short white paper (4–10 pages) rather than a full proposal. This screens for technical fit before requiring detailed submissions. Getting cut here is cheap — and getting through means you're close.",
              },
              {
                step: "3",
                title: "Full Proposal (if invited)",
                detail:
                  "Shortlisted companies submit a full technical and cost proposal. OTA proposals are lighter than FAR proposals — no certified cost or pricing data, no FAR representations and certifications. The focus is on technical approach and team capability.",
              },
              {
                step: "4",
                title: "Negotiations and Agreement",
                detail:
                  "Terms are negotiated directly with the government — including IP rights, data rights, and deliverables. OTA agreements can be structured in ways that FAR contracts cannot. Read the agreement carefully; it governs everything.",
              },
              {
                step: "5",
                title: "Prototype Execution",
                detail:
                  "You execute the prototype and deliver. Government evaluates the results against agreed criteria. This phase can last months or a few years depending on scope.",
              },
              {
                step: "6",
                title: "Follow-On Production Decision",
                detail:
                  "If the prototype is successful and the agency has funding, they can award a follow-on production agreement sole-source — without re-competing. This is the prize.",
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

          {/* CTA 2 */}
          <div className="border border-stone-200 rounded-2xl p-8 my-10 not-prose bg-stone-50 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-xl p-3 shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track OTA opportunities alongside traditional contracts
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                    pipeline tool
                  </Link>{" "}
                  lets you manage OTA pursuits and FAR-based contracts in one view — with stage tracking,
                  deadline alerts, and{" "}
                  <Link href="/features/intelligence" className="text-blue-600 hover:underline">
                    market intelligence
                  </Link>{" "}
                  on each opportunity.
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

          {/* Section 9 */}
          <SectionHeading id="prototype-to-production" number="09" title="Prototype to Production: The Follow-On Path" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The follow-on production authority in 10 U.S.C. § 4022(f) is what separates OTAs from a pure
            research tool. The statute allows DoD to award a follow-on production contract or agreement without
            competition, provided two conditions were met at the prototype stage:
          </p>

          <ul className="space-y-2 my-6 text-stone-700 animate-on-scroll">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>The prototype OTA was awarded competitively (open to all interested parties)</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                The solicitation for the prototype agreement included explicit notice that a follow-on production
                agreement might be awarded
              </span>
            </li>
          </ul>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Both conditions must be in place from the start. You can&apos;t add them retroactively. This means the
            smart move when evaluating an OTA opportunity is to confirm before you submit: does the solicitation
            include language about a potential follow-on production award? If it doesn&apos;t, you&apos;re competing for the
            prototype only. If it does, the prototype is a door to something larger.
          </p>

          <Callout icon={AlertTriangle} color="amber" title="IP rights are negotiable — negotiate them hard">
            Unlike FAR contracts, OTA agreements don&apos;t have standardized data rights clauses. The government
            will often push for broad data rights — particularly for software and technical data. If you&apos;re
            bringing proprietary technology into an OTA, negotiate IP terms early and specifically. Once the
            agreement is signed, those rights are locked in. Get legal review before signing anything.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            In practice, successful prototype performers often see production contracts that are 5–20x the value
            of the original prototype. A $500,000 prototype that leads to a $10 million production agreement isn&apos;t
            unusual in defense tech. The prototype is an audition, not the job.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A few strategic notes on the follow-on path. First, maintain your non-traditional status carefully —
            once you accumulate significant CAS-covered work, you lose that status and become less useful as a
            qualifying partner for new OTAs. Second, document your prototype performance rigorously; your{" "}
            <Link href="/blog/past-performance-government-contracts" className="text-blue-600 hover:underline">
              past performance record
            </Link>{" "}
            on the prototype is the primary basis for the production award decision. Third, understand that the
            government can and does walk away from follow-ons if funding disappears or priorities shift —
            build that uncertainty into your business planning.
          </p>

          {/* Section 10 */}
          <SectionHeading id="common-mistakes" number="10" title="Mistakes That Get Small Businesses Shut Out" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OTAs have a learning curve. The same companies show up again and again on award lists, and it&apos;s not
            because they got lucky — it&apos;s because they understand how the process actually works. Here are the
            most common mistakes that keep small businesses from getting in.
          </p>

          <div className="space-y-4 my-8 not-prose animate-on-scroll">
            {[
              {
                icon: AlertTriangle,
                color: "text-amber-500",
                bg: "bg-amber-50 border-amber-200",
                title: "Treating the white paper like an RFP response",
                detail:
                  "OTA white papers are about demonstrating differentiated capability, not complying with a specification. Agencies are looking for genuine innovation. A templated capability statement copy-paste will get you cut immediately.",
              },
              {
                icon: AlertTriangle,
                color: "text-amber-500",
                bg: "bg-amber-50 border-amber-200",
                title: "Ignoring the consortium as an entry point",
                detail:
                  "Trying to win standalone OTA competitions without any prior relationship or consortium membership is like cold-calling with no referral. Join the consortiums first. Attend industry days. Build familiarity before the solicitation drops.",
              },
              {
                icon: AlertTriangle,
                color: "text-amber-500",
                bg: "bg-amber-50 border-amber-200",
                title: "Underpricing the prototype to win, then losing the production",
                detail:
                  "Winning a prototype at a loss to secure the production follow-on is a real strategy — but only if the production contract actually happens and at terms that work. Many companies have burned cash on prototypes for follow-ons that never materialized. Model both scenarios.",
              },
              {
                icon: AlertTriangle,
                color: "text-amber-500",
                bg: "bg-amber-50 border-amber-200",
                title: "Not verifying non-traditional status before teaming",
                detail:
                  "If you team with a partner whose non-traditional status is questionable or expired, the whole team loses eligibility. Verify status with documentation, not assumption. The DoD DAU has a validation guide specifically for this.",
              },
              {
                icon: AlertTriangle,
                color: "text-amber-500",
                bg: "bg-amber-50 border-amber-200",
                title: "Signing an OTA agreement without legal review",
                detail:
                  "OTA agreements are negotiated, not standardized. The government has broad flexibility to include unusual terms around IP, data rights, termination, and reporting. A GovCon attorney costs money; a bad OTA agreement costs more.",
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

          <Callout icon={Shield} color="blue" title="OTA protests are limited — but not impossible">
            Because OTAs aren&apos;t contracts under the Competition in Contracting Act, GAO has limited protest
            jurisdiction over them. You can still protest to the Court of Federal Claims in limited circumstances.
            More practically, if you feel an OTA process was unfair, document everything and raise concerns
            through your consortium relationship before walking away. The{" "}
            <Link href="/blog/government-contract-protest" className="text-blue-600 hover:underline">
              standard protest rules
            </Link>{" "}
            don&apos;t apply here the same way.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OTAs reward companies that invest in relationships and capability demonstration before the solicitation
            drops. Attend industry days. Brief program offices on your technology. Get into consortiums early. By
            the time the formal opportunity appears, you want the contracting officer to already know your name.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The same principles that drive{" "}
            <Link href="/blog/capture-management-process" className="text-blue-600 hover:underline">
              capture management
            </Link>{" "}
            in traditional procurement apply here — except the cycle is faster and the paperwork is lighter.
            A{" "}
            <Link href="/features/matching" className="text-blue-600 hover:underline">
              strong matching and intelligence capability
            </Link>{" "}
            is what separates companies that find OTAs early from those that find out after the award.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 my-12 not-prose animate-on-scroll">
            <div className="text-center">
              <p className="text-blue-400 font-semibold text-sm mb-3">Ready to pursue OTA contracts?</p>
              <h3 className="text-2xl font-black text-white mb-3">
                CapturePilot tracks OTA opportunities alongside every other federal contract vehicle
              </h3>
              <p className="text-stone-400 text-sm mb-6 max-w-xl mx-auto">
                Our{" "}
                <Link href="/features/intelligence" className="text-blue-400 hover:text-blue-300 underline">
                  intelligence engine
                </Link>{" "}
                monitors SAM.gov, major consortium portals, and agency innovation office feeds — then surfaces the
                opportunities that match your capabilities, certifications, and NAICS codes.
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
                  href: "/blog/idiq-contracts-explained",
                  title: "IDIQ Contracts Explained",
                  desc: "How to get on a multi-year contract vehicle",
                },
                {
                  href: "/blog/gsa-schedule-guide",
                  title: "GSA Schedule Contracts",
                  desc: "Is a GSA Schedule right for your business?",
                },
                {
                  href: "/blog/federal-spending-trends-2026",
                  title: "Federal Spending Trends 2026",
                  desc: "Where the government is investing this year",
                },
                {
                  href: "/blog/dod-contracts-small-business",
                  title: "DoD Contracts for Small Business",
                  desc: "How to start with the Department of Defense",
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
