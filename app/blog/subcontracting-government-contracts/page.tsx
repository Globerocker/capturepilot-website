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
  DollarSign,
  Target,
  TrendingUp,
  FileText,
  Clock,
  Award,
  BarChart3,
  Shield,
  Info,
  Users,
  Building2,
  Search,
  Star,
  XCircle,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-subcontracting", label: "What Subcontracting Actually Means in Federal" },
  { id: "the-market-size", label: "The Market: $86 Billion and Growing" },
  { id: "how-primes-choose-subs", label: "How Prime Contractors Choose Subcontractors" },
  { id: "where-to-find-opportunities", label: "Where to Find Real Subcontracting Opportunities" },
  { id: "limitations-and-rules", label: "The Rules You Cannot Ignore" },
  { id: "ostensible-subcontractor-rule", label: "The Ostensible Subcontractor Trap" },
  { id: "how-to-win-as-a-sub", label: "How to Actually Win Subcontracts" },
  { id: "subcontracting-to-prime", label: "The Path from Sub to Prime" },
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

export default function SubcontractingGovernmentContractsPage() {
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
            <span className="text-stone-900 font-medium">Subcontracting Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Star className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Subcontracting on Government Contracts:{" "}
            <span className="gradient-text">Your First Step Into Federal</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded{" "}
            <strong className="text-stone-700">$183 billion in prime contracts to small businesses in FY2024</strong>.
            But you don&apos;t have to win a prime contract to start generating federal revenue.
            Subcontracting put roughly{" "}
            <strong className="text-stone-700">$86 billion into the hands of small business subs in FY2023</strong>{" "}
            &mdash; and most of it flowed to companies that knew exactly where to look.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 14, 2026</span>
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
            id="what-is-subcontracting"
            number="01"
            title="What Subcontracting Actually Means in Federal"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              When the federal government awards a large contract, the winning company &mdash; called the
              prime contractor &mdash; rarely does all the work itself. It hires specialists, fills
              capability gaps, and satisfies federal diversity requirements by bringing in
              subcontractors. That&apos;s your entry point.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              As a subcontractor, you sign a contract with the prime, not with the government. The
              government&apos;s contracting officer doesn&apos;t know you by name. Your client is the
              prime. But the money is federal &mdash; and so are the relationships, the past performance
              record, and the clearances you build along the way.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              This distinction matters more than most new GovCon businesses realize. Subcontracting
              removes the full burden of proposal writing, contract administration, and regulatory
              compliance that comes with holding a prime contract. You deliver your scope. The prime
              handles the rest.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$183B", label: "Small business prime awards, FY2024", icon: DollarSign },
                { stat: "$86B", label: "Subcontract dollars to small biz, FY2023", icon: TrendingUp },
                { stat: "28.8%", label: "Small biz share of federal prime awards", icon: BarChart3 },
                { stat: "33.34%", label: "Small biz share of subcontract awards", icon: Award },
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
              Subcontracting is not a consolation prize. For companies with strong technical
              capabilities but no federal track record, it&apos;s often the smarter play. Past
              performance is the gating requirement for most competitive prime contracts &mdash; and the
              fastest way to build it is delivering as a sub.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Veterans especially benefit from this path. SDVOSB and VOSB certifications make you
              attractive to primes trying to meet their small business subcontracting goals. Read our{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline font-medium">
                SDVOSB contracts guide
              </Link>{" "}
              to understand how those set-aside designations translate into leverage in subcontracting
              conversations too.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="the-market-size"
            number="02"
            title="The Market: $86 Billion and Growing"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal law requires large prime contractors holding contracts above $900,000 &mdash; or $2
              million for construction &mdash; to submit a written subcontracting plan that sets measurable
              goals for small business participation. This threshold increased from $750,000 (and
              $1.5M for construction) effective October 1, 2025.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Those goals aren&apos;t suggestions. A prime that fails to meet them in good faith is in
              material breach of its contract. So when you contact a large prime about
              subcontracting, you&apos;re not asking for a favor. You&apos;re offering them a way to
              check a box they&apos;re contractually obligated to fill.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The subcontracting plans must set goals across six categories of small business:
            </p>

            <div className="rounded-2xl border border-stone-200 overflow-hidden my-8 animate-on-scroll">
              <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
                <h3 className="font-bold text-stone-900">Small Business Subcontracting Goal Categories (FAR 19.704)</h3>
              </div>
              <div className="divide-y divide-stone-100">
                {[
                  { category: "Small Business (SB)", leverage: "Required in all plans", color: "text-blue-700" },
                  { category: "Small Disadvantaged Business (SDB)", leverage: "8(a) and related programs", color: "text-indigo-700" },
                  { category: "Women-Owned Small Business (WOSB)", leverage: "WOSB/EDWOSB certifications", color: "text-purple-700" },
                  { category: "HUBZone Small Business", leverage: "Location-based certification", color: "text-emerald-700" },
                  { category: "Veteran-Owned Small Business (VOSB)", leverage: "VA verification helps", color: "text-amber-700" },
                  { category: "Service-Disabled VOSB (SDVOSB)", leverage: "Highest priority for DoD & VA", color: "text-rose-700" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4">
                    <span className={`font-medium text-sm ${row.color}`}>{row.category}</span>
                    <span className="text-sm text-stone-500 text-right">{row.leverage}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If your business holds one or more of these designations, you become a multiplier for
              the prime &mdash; they can credit your subcontract toward multiple goal categories
              simultaneously. An SDVOSB also qualifies as a VOSB, a veteran-owned business, and a
              small business. Stacking certifications is real leverage.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Not sure which certifications apply to your business? Use{" "}
              <a href={CHECK_URL} className="text-blue-600 hover:underline font-medium">
                CapturePilot&apos;s Quick Checker
              </a>{" "}
              to run a free eligibility scan and see exactly which set-aside programs you qualify for &mdash;
              before you walk into a prime contractor conversation.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">Know Your Certifications Before You Pitch</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Primes ask upfront: what set-asides do you hold? Get your eligibility confirmed
                  in under 3 minutes &mdash; free, no credit card required.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap hover-lift"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="how-primes-choose-subs"
            number="03"
            title="How Prime Contractors Choose Subcontractors"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Large primes don&apos;t browse the web looking for subcontractors when a proposal is
              due next week. They pull from their existing networks. That&apos;s not an insider
              arrangement &mdash; it&apos;s basic risk management. A prime vouching $50 million in work to
              the government doesn&apos;t want to learn what you actually deliver on the job.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The decision criteria aren&apos;t that different from any vendor selection. Primes are
              looking for:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Shield,
                  title: "Proven capability",
                  desc: "Relevant past performance &mdash; even non-federal work counts at first. Show what you've actually delivered, not what you say you can do.",
                },
                {
                  icon: Award,
                  title: "Set-aside credentials",
                  desc: "SDVOSB, WOSB, 8(a), HUBZone, SB &mdash; the more boxes you check, the more useful you are to a prime building their diversity lineup.",
                },
                {
                  icon: Users,
                  title: "Clear scope fit",
                  desc: "Your NAICS codes must match the work the prime is subbing out. Primes don't cross-train their subs &mdash; they match scope to specialist.",
                },
                {
                  icon: CheckCircle2,
                  title: "Low administrative risk",
                  desc: "Active SAM.gov registration, clean financial standing, a real capability statement. Primes don't have time to chase administrative loose ends.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your{" "}
              <Link href="/features/capability-statement" className="text-blue-600 hover:underline font-medium">
                capability statement
              </Link>{" "}
              is the first document a prime will read. It needs to be a single page, visually clean,
              and laser-focused on what you deliver &mdash; not a company history. If yours isn&apos;t
              ready, that&apos;s the first thing to fix before any other outreach.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Primes also search the Dynamic Small Business Search (DSBS) database &mdash; SBA&apos;s
              directory of registered small businesses &mdash; to find subcontractors by NAICS code and
              capability keyword. If your SAM.gov profile is thin or your keywords are generic,
              you won&apos;t show up in those searches.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="What Primes Actually Look At in SAM.gov">
            When a prime contractor searches for subs in the Dynamic Small Business Search, they filter
            by NAICS code, socioeconomic status, and keywords from your business description. Log into
            your SAM.gov profile and read your business description as if you were a stranger. If it
            doesn&apos;t mention specific deliverables, industries served, or relevant technical
            disciplines &mdash; fix it before you reach out to any prime.
          </Callout>

          {/* Section 4 */}
          <SectionHeading
            id="where-to-find-opportunities"
            number="04"
            title="Where to Find Real Subcontracting Opportunities"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most people approach subcontracting backwards. They try to find posted subcontracting
              opportunities when the better play is identifying who has the prime contracts that
              match your capabilities &mdash; and building a relationship before the work exists.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              That said, there are several places to find structured subcontracting opportunities:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  name: "SBA SUB-Net",
                  desc: "SBA's Subcontracting Network &mdash; the official platform where primes post active subcontracting solicitations. Filter by NAICS code, keyword, or state. Most listings don't last long.",
                  badge: "Free &middot; Official",
                  badgeColor: "bg-emerald-100 text-emerald-700",
                },
                {
                  name: "SAM.gov Contract Awards",
                  desc: "Search for recently awarded large contracts in your industry. The award notice names the prime contractor. That's your target. Look up their website, find the Small Business Liaison Officer (SBLO), and make contact.",
                  badge: "Free &middot; High signal",
                  badgeColor: "bg-blue-100 text-blue-700",
                },
                {
                  name: "USASpending.gov",
                  desc: "See exactly what agencies have spent with which primes over recent years. If a large integrator has been winning IT modernization work at a specific agency for three years running, that's a relationship worth pursuing.",
                  badge: "Free &middot; Research",
                  badgeColor: "bg-sky-100 text-sky-700",
                },
                {
                  name: "Agency Small Business Offices",
                  desc: "Every federal agency with a significant contracting budget has an Office of Small and Disadvantaged Business Utilization (OSDBU). These offices host matchmaking events, industry days, and maintain databases of primes looking for subs.",
                  badge: "Free &middot; Underused",
                  badgeColor: "bg-purple-100 text-purple-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <p className="font-bold text-stone-900">{item.name}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.badgeColor} whitespace-nowrap`}
                      dangerouslySetInnerHTML={{ __html: item.badge }}
                    />
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-600 hover:underline font-medium">
                opportunity matching
              </Link>{" "}
              surfaces relevant prime contract awards and active solicitations based on your NAICS
              codes and capability profile. When you see a large contract award in your space, you
              can use the{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
                pipeline tracker
              </Link>{" "}
              to log your outreach to the prime and follow up systematically &mdash; subcontracting deals
              close slowly and require multiple touchpoints.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Industry days and matchmaking events are among the highest-leverage investments you can
              make early on. Show up, bring copies of your capability statement, and have one
              sentence ready that describes what you do and for whom. Most primes at these events are
              actively looking to fill their subcontracting plans &mdash; they want to talk to you.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="limitations-and-rules"
            number="05"
            title="The Rules You Cannot Ignore"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal subcontracting program comes with rules that bind both the prime and you.
              Understanding them protects you from arrangements that could get you &mdash; or your prime &mdash;
              into serious trouble.
            </p>

            <h3 className="text-lg font-bold text-stone-900 mb-3 mt-8">
              Limitations on Subcontracting (FAR 52.219-14)
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              When a small business wins a set-aside prime contract, it cannot simply pass all the
              work to a large subcontractor. FAR 52.219-14 sets mandatory self-performance thresholds:
            </p>

            <div className="rounded-2xl border border-stone-200 overflow-hidden my-8 animate-on-scroll">
              <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
                <h3 className="font-bold text-stone-900">Self-Performance Requirements by Contract Type</h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <th className="px-6 py-3 text-left font-semibold text-stone-700">Contract Type</th>
                    <th className="px-6 py-3 text-left font-semibold text-stone-700">Prime Must Self-Perform</th>
                    <th className="px-6 py-3 text-left font-semibold text-stone-700">Max to Non-Similar Subs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { type: "Services (except construction)", self: "50% of labor cost", max: "50%" },
                    { type: "Supplies (non-manufacturer)", self: "50% of contract value (excl. materials)", max: "50%" },
                    { type: "General construction", self: "15% of contract value (excl. materials)", max: "85%" },
                    { type: "Specialty construction", self: "25% of contract value", max: "75%" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-stone-900">{row.type}</td>
                      <td className="px-6 py-4 text-stone-600">{row.self}</td>
                      <td className="px-6 py-4 text-stone-600">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The critical phrase here is &quot;similarly situated entities.&quot; A similarly
              situated subcontractor is one that shares your small business program status &mdash; for
              example, another SDVOSB under the same NAICS code. Work you subcontract to a similarly
              situated entity doesn&apos;t count against your self-performance limit. This matters
              enormously when you&apos;re teaming with other small businesses.
            </p>
            <p className="text-stone-600 leading-relaxed">
              As a subcontractor yourself, you don&apos;t face these limits directly. But if you
              grow into a prime role on set-asides &mdash; which is the goal &mdash; you&apos;ll need to manage
              them carefully. Read our guide on{" "}
              <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline font-medium">
                teaming agreements
              </Link>{" "}
              to understand how to structure relationships that keep you compliant.
            </p>
          </div>

          <Callout icon={Info} color="blue" title="What 'Similarly Situated' Means in Practice">
            If you&apos;re an SDVOSB prime on a set-aside contract and you hire another SDVOSB as a
            subcontractor for the same NAICS code, that work counts toward your self-performance
            requirement &mdash; not against it. Structuring your subcontractor relationships around similarly
            situated entities dramatically expands how much work you can legally subcontract while
            still meeting the limitations rule.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="ostensible-subcontractor-rule"
            number="06"
            title="The Ostensible Subcontractor Trap"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The ostensible subcontractor rule is where subcontracting arrangements go wrong &mdash; and
              it catches experienced contractors off guard. Under 13 C.F.R. &sect; 121.103(h)(4), the SBA
              can find that a small business prime and its subcontractor are legally affiliated if the
              subcontractor performs the &quot;primary and vital requirements&quot; of the contract,
              or if the prime is &quot;unusually reliant&quot; on the subcontractor.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              What does that mean in practice? It means that if a large company functions as the
              de facto performer while a small business prime is just signing the paperwork, SBA will
              treat both as a single entity for size determination. The small business loses its
              set-aside eligibility. The contract can be terminated. Fines can follow.
            </p>

            <h3 className="text-lg font-bold text-stone-900 mb-3 mt-8">
              Red Flags That Trigger Affiliation Findings
            </h3>

            <div className="space-y-3 my-6">
              {[
                "The subcontractor provides the key personnel named in the proposal",
                "The prime has no relevant experience and relies on the sub's past performance to win",
                "The subcontractor handles day-to-day management and most of the work",
                "The prime and sub have an exclusive or long-standing relationship on most contracts",
                "The subcontractor financed or prepared most of the proposal",
              ].map((flag, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-rose-50 rounded-xl border border-rose-100">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-rose-800">{flag}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              A 2025 SBA OHA decision &mdash; <em>Bowhead Enterprises, SBA No. SIZ-6352</em> &mdash; reinforced
              that demonstrating actual compliance with the limitations on subcontracting is strong
              evidence against an affiliation finding. Document what you self-perform. Keep records of
              the work your own employees actually do on each contract. That paper trail is your defense.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The practical takeaway: if you&apos;re approaching subcontracting with the idea of
              winning set-aside prime contracts and then handing everything to a large integrator &mdash;
              stop. SBA will eventually find it. The right structure is to genuinely build capability
              and use subcontractors to extend your capacity, not replace it.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="New 2025 SBA Rule on Subcontracting Monitoring">
            The SBA&apos;s 2025 regulatory updates clarified that multi-award contracts will now be
            monitored order-by-order for small business limitations on subcontracting compliance &mdash;
            not just at the IDIQ vehicle level. If you hold a spot on a GWAC or IDIQ as a small
            business, each task order needs to meet the self-performance thresholds independently.
            The days of averaging across a vehicle are over.
          </Callout>

          {/* Section 7 */}
          <SectionHeading
            id="how-to-win-as-a-sub"
            number="07"
            title="How to Actually Win Subcontracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Getting on a prime&apos;s preferred subcontractor list takes time. Staying on it
              takes performance. Here&apos;s the sequenced approach that works.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  step: "01",
                  title: "Target primes who already win work in your space",
                  desc: "Use SAM.gov and USASpending.gov to identify the three to five large contractors who consistently win contracts matching your NAICS codes at agencies you want to work with. Build a short list before you do any outreach.",
                },
                {
                  step: "02",
                  title: "Research before you reach out",
                  desc: "Read the prime's recent annual reports, press releases, and contract awards. Know their major agency clients, their focus areas, and their leadership. Reaching out cold with no knowledge of what they actually do is a fast way to get ignored.",
                },
                {
                  step: "03",
                  title: "Find the Small Business Liaison Officer (SBLO)",
                  desc: "Every prime with federal subcontracting plans has a designated SBLO &mdash; usually listed on their corporate website or discoverable via their public subcontracting plan. This is your first call. Not the procurement team, not the CEO. The SBLO.",
                },
                {
                  step: "04",
                  title: "Lead with a one-page capability statement",
                  desc: "PLACEHOLDER",
                },
                {
                  step: "05",
                  title: "Follow up systematically and stay visible",
                  desc: "Most subcontracting relationships take 6 to 18 months from first contact to first work order. Log every touchpoint. Attend agency industry days and matchmaking events where the prime will also be present. Relationship capital compounds slowly.",
                },
                {
                  step: "06",
                  title: "Deliver, then document",
                  desc: "When you land subcontract work, document your performance meticulously. Get a write-up from the prime. That past performance reference &mdash; even from a sub relationship &mdash; strengthens your future proposal writing and future sub conversations alike.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 animate-on-scroll"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black">
                      {item.step}
                    </div>
                  </div>
                  <div className="pb-6 border-b border-stone-100 flex-1">
                    <p className="font-bold text-stone-900 mb-2">{item.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {item.step === "04" ? (
                        <>
                          Your capability statement needs your core competencies, NAICS codes,
                          contract vehicles (if any), set-aside designations, differentiators, and
                          contact information. One page. No fluff. The CapturePilot{" "}
                          <Link
                            href="/features/capability-statement"
                            className="text-blue-600 hover:underline"
                          >
                            capability statement builder
                          </Link>{" "}
                          generates a polished, agency-ready document in minutes.
                        </>
                      ) : (
                        item.desc
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              One tactical note: large primes often have internal supplier diversity portals where
              you can register as a potential subcontractor. Lockheed Martin, Booz Allen, SAIC,
              Leidos, General Dynamics &mdash; all of them have these. Registration doesn&apos;t guarantee
              contact, but it gets you into their database when they&apos;re actively sourcing for
              a specific bid.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Track your outreach to multiple primes at once. Subcontracting is a numbers game in
              the early years &mdash; you need enough conversations in flight that when timing and scope
              align, you&apos;re already a known quantity. The{" "}
              <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
                CapturePilot pipeline
              </Link>{" "}
              is designed for exactly this kind of multi-thread relationship tracking.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-12 rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-bold text-blue-700">Track Your Sub Pipeline</span>
                </div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Stop managing prime contacts in a spreadsheet
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  CapturePilot&apos;s pipeline tracker helps you manage relationships with multiple
                  primes, log touchpoints, and know exactly where each subcontracting conversation
                  stands. Try it free for 30 days.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap hover-lift"
                >
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-700 border border-stone-200 font-medium px-6 py-3 rounded-xl hover:bg-stone-50 transition-colors text-sm whitespace-nowrap"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="subcontracting-to-prime"
            number="08"
            title="The Path from Sub to Prime"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Subcontracting is not the destination &mdash; it&apos;s the apprenticeship. The companies that
              build sustainable federal businesses use their sub years to accumulate three things: past
              performance, agency relationships, and operational knowledge of government contracting.
              Then they go after prime contracts with a real track record.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The timeline varies by industry. In professional services and IT, you can build enough
              sub experience to compete for small prime contracts in two to three years. In defense
              or highly technical fields, five years is more realistic. Construction subcontractors
              sometimes spend a decade building the bonding capacity, past performance, and financial
              strength required for large prime construction work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The key transition moment: your first prime contract should be sized for what you can
              deliver yourself. Winning a $5 million prime contract and immediately subcontracting
              80% of it &mdash; to a large company that did similar work before &mdash; is the arrangement the
              ostensible subcontractor rule was written to catch.
            </p>

            <div className="bg-gradient-to-br from-stone-50 to-blue-50 border border-blue-100 rounded-2xl p-8 my-8 animate-on-scroll">
              <h3 className="text-lg font-black text-stone-900 mb-6">A Realistic Federal Growth Timeline</h3>
              <div className="space-y-4">
                {[
                  {
                    phase: "Year 1-2",
                    color: "bg-blue-100 text-blue-700",
                    title: "Registration and positioning",
                    desc: "Complete SAM.gov registration, earn relevant certifications, build capability statement, identify target primes, attend industry days",
                  },
                  {
                    phase: "Year 2-4",
                    color: "bg-indigo-100 text-indigo-700",
                    title: "Subcontracting and past performance",
                    desc: "Land first subcontracts, deliver strong performance, document results, build agency relationships through the prime, expand NAICS scope",
                  },
                  {
                    phase: "Year 4-6",
                    color: "bg-purple-100 text-purple-700",
                    title: "First prime contracts",
                    desc: "Pursue micro-purchase and simplified acquisition opportunities, respond to small set-aside RFPs, consider teaming for larger awards",
                  },
                  {
                    phase: "Year 6+",
                    color: "bg-emerald-100 text-emerald-700",
                    title: "Sustainable prime business",
                    desc: "Compete for larger prime contracts using established past performance, agency relationships, and operational credibility",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full h-fit ${item.color} whitespace-nowrap`}>
                      {item.phase}
                    </span>
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <p className="text-sm text-stone-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Certifications accelerate this timeline. An SDVOSB certification gives you access
              to set-aside prime contract opportunities from day one &mdash; even before you have federal
              past performance. Many veteran-owned businesses use set-aside prime contracts as their
              first federal experience rather than starting with subcontracting. Read our{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-600 hover:underline font-medium">
                complete SDVOSB guide
              </Link>{" "}
              to see if that path fits your situation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Whether you start as a sub or go directly for prime contracts depends on your current
              capability, certifications, and risk tolerance. There&apos;s no single right answer.
              But if you have no federal past performance and limited administrative infrastructure,
              starting as a sub reduces risk while building exactly the credentials you&apos;ll need
              later.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Use{" "}
              <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
                CapturePilot&apos;s market intelligence
              </Link>{" "}
              to track the contracting patterns of agencies in your space &mdash; which primes consistently
              win, what contract vehicles dominate, how much of the work flows through set-asides.
              That intelligence informs both your subcontracting targets and your eventual prime
              strategy.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The federal market rewards persistence and consistency more than any other market
              you&apos;ll ever sell into. Start the conversations now. The pipeline you build today
              turns into awards two or three years from now &mdash; and that timeline is the same whether
              you start this month or wait until everything feels ready.
            </p>
          </div>

          {/* Related posts */}
          <div className="my-12 animate-on-scroll">
            <h3 className="text-lg font-black text-stone-900 mb-6">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts Guide",
                  desc: "Complete guide to Service-Disabled Veteran-Owned Small Business set-asides",
                  tag: "Set-Asides",
                },
                {
                  href: "/blog/government-contract-teaming-agreement",
                  title: "Teaming Agreements",
                  desc: "How to structure prime-sub relationships that hold up to SBA scrutiny",
                  tag: "Strategy",
                },
                {
                  href: "/blog/capability-statement-examples",
                  title: "Capability Statement Examples",
                  desc: "What strong (and weak) capability statements actually look like",
                  tag: "Marketing",
                },
                {
                  href: "/blog/small-business-set-aside-threshold",
                  title: "Set-Aside Thresholds",
                  desc: "Dollar limits, competition rules, and when set-asides apply",
                  tag: "Getting Started",
                },
              ].map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="group p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-blue-200 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xs font-bold text-blue-600 mb-2 block">{post.tag}</span>
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 transition-colors mb-1">
                    {post.title}
                  </p>
                  <p className="text-sm text-stone-500">{post.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white text-center animate-on-scroll">
            <Zap className="w-8 h-8 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-black mb-3">
              Ready to find your first subcontracting opportunity?
            </h3>
            <p className="text-blue-100 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              CapturePilot matches your capabilities to active federal contracts, identifies the
              primes winning work in your space, and gives you the tools to track every
              subcontracting conversation from first contact to signed agreement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors hover-lift"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={CHECK_URL}
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Check eligibility free
              </a>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
