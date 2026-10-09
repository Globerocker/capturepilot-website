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
  Award,
  Zap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-oasis-plus", label: "What OASIS+ Is (and Why It Replaced OASIS)" },
  { id: "six-pools", label: "Six Pools: Which One Are You Eligible For?" },
  { id: "thirteen-domains", label: "13 Service Domains: What Work Is In Scope" },
  { id: "getting-on-vehicle", label: "Getting on the Vehicle: Phase II On-Ramp" },
  { id: "self-scoring", label: "Self-Scoring: How the Evaluation Actually Works" },
  { id: "winning-task-orders", label: "Winning Task Orders Through GSA eBuy" },
  { id: "multiple-pools", label: "Multiple Pool Strategy: How to Maximize Awards" },
  { id: "common-mistakes", label: "Mistakes That Get Contractors Rejected" },
  { id: "oasis-vs-other-vehicles", label: "OASIS+ vs. Other GSA Vehicles" },
  { id: "next-steps", label: "Your Next Steps" },
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

export default function OasisPlusContractGuidePage() {
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
            <span className="text-stone-900 font-medium">OASIS+ Contract Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Layers className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            OASIS+ Contract Vehicle:{" "}
            <span className="gradient-text">How Small Businesses Get On — and Win Task Orders From — GSA&apos;s Premier Services MAC</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            OASIS+ has no contract ceiling, no cap on awardees, and a continuously open on-ramp as of January 2026.
            Six separate pools — including dedicated contracts for small businesses, SDVOSBs, WOSBs, HUBZone firms,
            and 8(a) companies — cover 13 service domains. Here&apos;s how to get on it and, more importantly,
            how to win work once you do.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published October 9, 2026</span>
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
          <SectionHeading id="what-is-oasis-plus" number="01" title="What OASIS+ Is (and Why It Replaced OASIS)" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OASIS+ is GSA&apos;s governmentwide, indefinite-delivery indefinite-quantity (IDIQ) contract for
            professional services that are not IT. It replaced the legacy OASIS and BMO (Best-in-Class) vehicles,
            which had become outdated and capacity-constrained. The core idea: agencies across the federal
            government can write task orders against a single, pre-competed vehicle rather than running their
            own time-consuming solicitations. For contractors, that means one application unlocks work across
            dozens of agencies for years.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The structure is different from most contract vehicles you&apos;ve encountered. There is no contract
            ceiling — GSA has explicitly removed any ceiling on total obligations. There is also no cap on the
            number of contractors who can hold an award. That&apos;s intentional: GSA wants broad competition at
            the task-order level, not artificial scarcity at the vehicle level.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OASIS+ launched with Phase I awards in 2024, covering eight service domains. Phase II followed in
            January 2026, adding five new domains and moving to a <strong>continuously open on-ramp</strong>.
            Phase II&apos;s first rolling awardee announcements came on May 12, 2026. The vehicle is active and
            ordering now — agencies don&apos;t wait for all awards to finalize before issuing task orders.
          </p>

          <Callout icon={Star} color="blue" title="Best-in-Class designation">
            GSA has designated OASIS+ as a Best-in-Class (BIC) contract vehicle. That designation means
            federal agencies get credit toward their category management goals when they use it — creating
            a structural incentive for agencies to route professional services work through OASIS+ instead
            of spinning up their own vehicles. More BIC usage means more task orders for contractors on the vehicle.
          </Callout>

          {/* Section 2 */}
          <SectionHeading id="six-pools" number="02" title="Six Pools: Which One Are You Eligible For?" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OASIS+ is not a single contract — it&apos;s six separate and distinct IDIQ contracts, one per business
            category. Your size and socioeconomic status determines which pool you can compete in. You can be
            on multiple pools simultaneously if you hold multiple certifications, which is a strategic advantage
            worth planning for.
          </p>

          <div className="not-prose my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Pool</th>
                  <th className="text-left p-3 font-semibold">Who Qualifies</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">Key Certification</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pool: "Unrestricted", who: "Any business, any size", cert: "None required" },
                  { pool: "Total Small Business", who: "SBA-defined small businesses", cert: "SAM.gov self-certification" },
                  { pool: "8(a)", who: "SBA-certified 8(a) participants", cert: "Active SBA 8(a) certification" },
                  { pool: "Women-Owned (WOSB)", who: "Women-owned small businesses", cert: "SBA WOSB certification or EDWOSB" },
                  { pool: "HUBZone", who: "Firms in Historically Underutilized Business Zones", cert: "Active SBA HUBZone certification" },
                  { pool: "Service-Disabled Veteran (SDVOSB)", who: "Service-disabled veteran-owned small businesses", cert: "SBA SDVOSB certification" },
                ].map((row, i) => (
                  <tr key={row.pool} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-3 font-semibold text-blue-700 border-b border-stone-100">{row.pool}</td>
                    <td className="p-3 text-stone-700 border-b border-stone-100">{row.who}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{row.cert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Eligibility is verified at the time of application, based on your SAM.gov registration and SBA
            certifications. If you hold an 8(a) certification and also qualify as SDVOSB, you can apply to both
            pools and hold awards on both. That gives you access to more task orders than a competitor who only
            qualifies for one — and it gives agencies more ways to route set-aside work to you.
          </p>

          <Callout icon={AlertCircle} color="amber" title="Check your certifications before applying">
            OASIS+ evaluates your eligibility at application, but agencies will check your current status at
            each task order too. If your 8(a) certification expires mid-contract, you may lose access to that
            pool&apos;s task orders. Keep all certifications current throughout the ordering period.
            CapturePilot&apos;s{" "}
            <Link href="/features/quick-checker" className="text-amber-700 hover:underline font-semibold">
              eligibility checker
            </Link>{" "}
            tracks certification status and expiration dates so nothing slips through.
          </Callout>

          {/* Section 3 */}
          <SectionHeading id="thirteen-domains" number="03" title="13 Service Domains: What Work Is In Scope" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OASIS+ covers professional services — not IT products, not construction, not supplies. If your
            work lives in the services category but isn&apos;t purely IT, there&apos;s likely a domain for it.
            Phase I launched with eight domains. Phase II, which went live in January 2026, added five more.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { domain: "Management & Advisory", phase: "Phase I", desc: "Consulting, strategic advisory, organizational transformation" },
                { domain: "Technical & Engineering", phase: "Phase I", desc: "Engineering services, scientific R&D, technical analysis" },
                { domain: "Research & Development", phase: "Phase I", desc: "Applied research, program evaluation, statistical analysis" },
                { domain: "Intelligence Services", phase: "Phase I", desc: "Intelligence analysis, signals, data fusion" },
                { domain: "Facilities", phase: "Phase I", desc: "O&M, space planning, environmental services" },
                { domain: "Logistics", phase: "Phase I", desc: "Supply chain, transportation management, sustainment" },
                { domain: "Medical", phase: "Phase I", desc: "Healthcare staffing, medical consulting, public health" },
                { domain: "Enterprise Solutions", phase: "Phase I", desc: "Large-scale integrated services crossing multiple domains" },
                { domain: "Business Administration", phase: "Phase II — NEW", desc: "Administrative support, program management office services" },
                { domain: "Financial Services", phase: "Phase II — NEW", desc: "Financial management, audit support, budget analysis" },
                { domain: "Human Capital", phase: "Phase II — NEW", desc: "HR services, workforce planning, training development" },
                { domain: "Marketing & Public Relations", phase: "Phase II — NEW", desc: "Communications, outreach, public affairs support" },
                { domain: "Social Services", phase: "Phase II — NEW", desc: "Community services, case management, counseling" },
              ].map((d) => (
                <div
                  key={d.domain}
                  className={`rounded-xl border p-4 ${d.phase.includes("NEW") ? "bg-emerald-50 border-emerald-200" : "bg-stone-50 border-stone-200"}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-stone-900 text-sm">{d.domain}</p>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${d.phase.includes("NEW") ? "bg-emerald-100 text-emerald-700" : "bg-stone-200 text-stone-600"}`}>
                      {d.phase}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Each domain has its own solicitation and its own evaluation matrix. You can apply to multiple domains
            if you have relevant past performance for each. There are approximately{" "}
            <strong>150 functional areas</strong> mapped across the 13 domains — GSA uses these to match your
            past performance to the work you&apos;re claiming you can do.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The five Phase II domains are significant additions. Human Capital and Financial Services in
            particular represent categories where federal agencies have historically run their own IDIQs or
            used standalone contracts. Funneling that work through OASIS+ creates real opportunity for firms
            that weren&apos;t on Phase I awards.
          </p>

          {/* CTA 1 — Quick Checker */}
          <div className="not-prose bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-xl p-3 shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">
                  See which OASIS+ pools you qualify for right now
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/quick-checker" className="text-white underline font-semibold">
                    Quick Checker
                  </Link>{" "}
                  analyzes your certifications, revenue, and NAICS codes against OASIS+ eligibility
                  criteria — no spreadsheet required.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading id="getting-on-vehicle" number="04" title="Getting on the Vehicle: Phase II On-Ramp" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Phase II launched on January 12, 2026, with a continuously open solicitation. There is no
            deadline to apply — GSA evaluates and awards on a rolling basis. The first batch of Phase II
            awards was announced on May 12, 2026. New batches continue as GSA processes applications.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Getting on the vehicle early still matters, even without a closing deadline. Task orders are
            being issued now against Phase II awards. Every month you&apos;re not on the vehicle is a month
            of opportunity you can&apos;t access. Apply now, not after you finish other priorities.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Confirm your SAM.gov registration is current",
                  detail: "Your SAM.gov registration must be active. Verify your NAICS codes reflect the domains you plan to apply for. Your socioeconomic certifications must be current and visible in SAM.gov.",
                },
                {
                  step: "02",
                  title: "Choose your pool(s) and domain(s)",
                  detail: "Decide which pools you&apos;re eligible for and which domains you have the past performance to support. You submit a separate application per domain — don&apos;t spread yourself thin trying to cover all 13 if you can only document a few well.",
                },
                {
                  step: "03",
                  title: "Compile your qualifying projects",
                  detail: "For small business pools, qualifying projects must have an average annual value of at least $500,000. For unrestricted, the bar is higher. You&apos;ll need past performance references who can verify your documentation.",
                },
                {
                  step: "04",
                  title: "Self-score your application",
                  detail: "OASIS+ uses a self-scoring model. You assign yourself credits from defined categories — qualifying projects, past performance ratings, business systems, and more — then submit documentation to back up every point.",
                },
                {
                  step: "05",
                  title: "Meet the minimum credit threshold",
                  detail: "Small business pools require a minimum of 36 out of 50 possible credits per domain. Unrestricted requires 42 out of 50. Applications below threshold are rejected — there&apos;s no partial credit for close misses.",
                },
                {
                  step: "06",
                  title: "Submit through SAM.gov",
                  detail: "All OASIS+ solicitations are posted on SAM.gov. You submit your offer through the SAM.gov system, attaching your documentation package for each domain.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="shrink-0 w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black text-sm">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Earlier submissions get awarded sooner">
            Because GSA awards on a rolling basis, a complete, well-scored application submitted today
            will be evaluated and awarded before one submitted next quarter. There&apos;s no benefit to waiting.
            The sooner you&apos;re on the vehicle, the sooner you can compete for task orders — and task orders
            are where the revenue is.
          </Callout>

          {/* Section 5 */}
          <SectionHeading id="self-scoring" number="05" title="Self-Scoring: How the Evaluation Actually Works" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OASIS+ does not use the traditional best-value tradeoff evaluation you find in most RFPs. Instead,
            it uses a <strong>self-scoring model</strong>: you assign yourself points from defined credit
            categories and submit documentation to back up those points. GSA verifies. If your documentation
            supports your score, you get those credits. If it doesn&apos;t, you don&apos;t.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The self-scoring approach puts the quality of your documentation at the center of the evaluation.
            A firm with genuinely strong past performance but weak documentation will score lower than a firm
            that has done the same work but packaged it properly. That&apos;s a fixable problem — and one you
            should fix before applying.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-black text-stone-900 mb-4 text-lg">OASIS+ Credit Categories</h3>
              <div className="space-y-3">
                {[
                  { category: "Qualifying Projects (QPs)", detail: "Projects meeting minimum value thresholds in the domain. Each QP earns credits. The minimum average annual value is $500K for small business pools.", weight: "Primary driver" },
                  { category: "Past Performance Ratings", detail: "CPARS ratings on your qualifying projects. Exceptional and Very Good ratings earn more credits than Satisfactory.", weight: "Significant" },
                  { category: "Business Systems", detail: "DCAA-approved accounting system, DCMA-approved purchasing system. Extra credits for each verified system.", weight: "Bonus credits" },
                  { category: "Relevant Socioeconomic Status", detail: "Additional credits available within small business pools for relevant certifications.", weight: "Pool-specific" },
                  { category: "Mentor-Protégé Joint Ventures", detail: "JVs under SBA-approved mentor-protégé arrangements get credit for protégé past performance at a lower threshold ($150K minimum annual value).", weight: "JV-specific" },
                ].map((item) => (
                  <div key={item.category} className="flex gap-3 bg-white rounded-xl p-4 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-stone-900 text-sm">{item.category}</p>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{item.weight}</span>
                      </div>
                      <p className="text-xs text-stone-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The minimum threshold is <strong>36 out of 50 credits</strong> for small business pools.
            Unrestricted requires <strong>42 out of 50</strong>. You need to hit that floor in each domain
            you apply to. Domains are evaluated independently, so strong performance in Management &amp; Advisory
            doesn&apos;t compensate for a thin application in Financial Services.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One underused credit source: DCAA-approved accounting systems. If your firm has gone through DCAA
            audit and has an approved system, you earn bonus credits. Small businesses often skip this step
            because they think DCAA audits are only for large contractors — but the OASIS+ scoring model
            explicitly rewards it. If you&apos;re planning to apply, getting your accounting system approved
            first is worth the investment.
          </p>

          {/* Section 6 */}
          <SectionHeading id="winning-task-orders" number="06" title="Winning Task Orders Through GSA eBuy" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Getting on OASIS+ is the easy part. Winning task orders is the actual job — and most contractors
            underestimate how competitive it is at this level.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Every OASIS+ task order solicitation is posted through <strong>GSA eBuy</strong>. That&apos;s the
            only channel. If you&apos;re not monitoring eBuy for your pools and domains, you&apos;re missing
            opportunities. eBuy notifications are the mechanism — but eBuy is not a pipeline management tool.
            You need a system for tracking opportunities, managing proposals, and measuring your win rate
            across OASIS+ pursuits.
          </p>

          <div className="not-prose my-8 animate-on-scroll">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Task Order Types", value: "FFP, T&M, CR", sub: "Fixed-price and cost-reimbursable" },
                { label: "Ordering Channel", value: "GSA eBuy", sub: "Sole authorized platform" },
                { label: "On-Ramp Status", value: "Open Now", sub: "Continuously accepting Phase II" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center hover-lift"
                >
                  <p className="text-2xl font-black text-blue-700 mb-1">{stat.value}</p>
                  <p className="font-semibold text-stone-800 text-sm">{stat.label}</p>
                  <p className="text-xs text-stone-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Task orders on OASIS+ follow the FAR Part 16 ordering procedures. Agencies issue a Request for
            Task Order Proposal (RTOP) to all awardees in the relevant pool and domain. You have the right
            to be considered — but not the right to win. Every RTOP is a competitive event.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The best contractors on OASIS+ don&apos;t wait for RTOPs to show up in eBuy. They do{" "}
            <Link href="/blog/capture-management-process" className="text-blue-600 hover:underline">
              capture management
            </Link>{" "}
            before the solicitation drops — building relationships with contracting officers, attending
            industry days, responding to{" "}
            <Link href="/blog/sources-sought-notice" className="text-blue-600 hover:underline">
              sources sought notices
            </Link>
            , and shaping requirements. By the time the RTOP is released, they already know what the
            agency wants and who they&apos;ve been talking to.
          </p>

          <Callout icon={Target} color="sky" title="OASIS+ task orders and your pipeline">
            CapturePilot&apos;s{" "}
            <Link href="/features/pipeline" className="text-sky-700 hover:underline font-semibold">
              pipeline tool
            </Link>{" "}
            tracks OASIS+ task orders alongside SAM.gov opportunities — including RTOP release dates,
            agency contacts, and proposal deadlines — so nothing falls through the cracks. Pair it with{" "}
            <Link href="/features/intelligence" className="text-sky-700 hover:underline font-semibold">
              market intelligence
            </Link>{" "}
            to identify which agencies are actively issuing OASIS+ task orders in your domains.
          </Callout>

          {/* Section 7 */}
          <SectionHeading id="multiple-pools" number="07" title="Multiple Pool Strategy: How to Maximize Awards" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One of the most underused strategic advantages in OASIS+ is the ability to hold awards across
            multiple pools simultaneously. A firm that holds awards in the Total Small Business pool, the
            SDVOSB pool, and the 8(a) pool — assuming it qualifies for all three — is eligible for task
            orders set aside for any of those categories. That&apos;s three bites at the apple where a
            competitor with only one certification gets one.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The practical implication: if you&apos;re not already pursuing HUBZone, WOSB, or other SBA
            certifications, the OASIS+ multi-pool structure gives you a concrete reason to accelerate those
            efforts. A{" "}
            <Link href="/blog/hubzone-program-guide" className="text-blue-600 hover:underline">
              HUBZone certification
            </Link>{" "}
            or{" "}
            <Link href="/blog/wosb-certification-guide" className="text-blue-600 hover:underline">
              WOSB certification
            </Link>{" "}
            that you were treating as a nice-to-have becomes a direct vehicle multiplier on OASIS+.
          </p>

          <div className="not-prose my-8 animate-on-scroll bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <h3 className="font-black text-stone-900 mb-3 text-lg">Example: Maximum pool coverage</h3>
            <p className="text-sm text-stone-600 mb-4">
              A woman-owned, service-disabled veteran small business in a HUBZone could theoretically hold
              awards in four pools: Total Small Business, WOSB, SDVOSB, and HUBZone. That means every time
              an agency issues an OASIS+ RTOP set aside for any of those categories, they&apos;re eligible
              to compete. Multi-pool awardees see significantly more opportunity flow than single-pool contractors.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Total Small Business", "WOSB", "SDVOSB", "HUBZone"].map((pool) => (
                <span key={pool} className="text-sm font-semibold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                  {pool}
                </span>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Multi-domain coverage is the other lever. A management consulting firm that can document past
            performance in Management &amp; Advisory, Financial Services, and Human Capital can apply to all
            three domains — and access RTOPs in each. More domains, more task orders to compete for.
          </p>

          {/* Section 8 */}
          <SectionHeading id="common-mistakes" number="08" title="Mistakes That Get Contractors Rejected" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Most rejections on OASIS+ come from documentation problems, not capability gaps. Contractors
            doing sophisticated professional services work get rejected because their past performance
            write-ups don&apos;t map cleanly to the functional areas they&apos;re claiming, or because their
            project references can&apos;t verify the dollar values they self-scored.
          </p>

          <div className="not-prose my-8 animate-on-scroll space-y-4">
            {[
              {
                icon: AlertTriangle,
                color: "text-red-600 bg-red-50",
                title: "Claiming credits without backing documentation",
                detail: "Every self-scored credit requires supporting documentation. Past performance citations without contract numbers, CO contact info, and verifiable dollar amounts will not hold up. Don&apos;t claim what you can&apos;t prove.",
              },
              {
                icon: AlertTriangle,
                color: "text-red-600 bg-red-50",
                title: "Applying to domains where you can&apos;t hit the threshold",
                detail: "Submitting a below-threshold application wastes GSA&apos;s time and yours. Audit your qualifying projects per domain before you apply. If you can&apos;t hit 36 credits in a domain, don&apos;t apply to that domain — yet.",
              },
              {
                icon: AlertTriangle,
                color: "text-red-600 bg-red-50",
                title: "Not mapping past performance to functional areas",
                detail: "OASIS+ has ~150 functional areas across 13 domains. Each qualifying project should be tagged to specific functional areas. Vague write-ups like &apos;management consulting&apos; don&apos;t score as well as precise mappings to specific functional area codes.",
              },
              {
                icon: AlertTriangle,
                color: "text-red-600 bg-red-50",
                title: "Using subcontract performance without proper documentation",
                detail: "Work you performed as a subcontractor can qualify, but you need documentation of your specific role and dollar value — not just the prime contract value. Gather this from your primes before applying.",
              },
              {
                icon: AlertTriangle,
                color: "text-red-600 bg-red-50",
                title: "Letting certifications expire between application and award",
                detail: "Rolling awards mean there can be months between application and your award date. If your 8(a) or SDVOSB certification lapses in that window, you may not receive the award in that pool. Monitor expiration dates actively.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-red-50 rounded-xl border border-red-200">
                <item.icon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-stone-900 mb-1 text-sm">{item.title}</p>
                  <p className="text-xs text-stone-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One mistake that isn&apos;t obvious: treating an OASIS+ award as a finish line. Contractors who
            win awards and then fail to actively compete for task orders add no value from their spot on the
            vehicle. Agencies notice which contractors are actively responding to RTOPs and which aren&apos;t.
            Consistent non-response can affect your standing in future ordering periods.
          </p>

          {/* CTA 2 — Free Trial */}
          <div className="border border-stone-200 rounded-2xl p-8 my-10 not-prose bg-stone-50 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-xl p-3 shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Manage your OASIS+ pursuits from one place
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  CapturePilot tracks eBuy notifications, proposal deadlines, and agency relationships for
                  your OASIS+ domains — alongside every other contract in your pipeline. Use{" "}
                  <Link href="/features/proposals" className="text-blue-600 hover:underline">
                    proposal management
                  </Link>{" "}
                  to build task order proposals faster without reinventing the wheel every time.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-800 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="oasis-vs-other-vehicles" number="09" title="OASIS+ vs. Other GSA Vehicles" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OASIS+ is the right vehicle for professional, non-IT services. But it&apos;s not the only vehicle
            worth pursuing, and for some work it&apos;s the wrong one entirely. Here&apos;s how it stacks up
            against the vehicles you&apos;re most likely to encounter:
          </p>

          <div className="not-prose my-8 animate-on-scroll overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-800 text-white">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Vehicle</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                  <th className="text-left p-3 font-semibold">Key Difference vs. OASIS+</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">Entry Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    vehicle: "OASIS+",
                    best: "Professional, non-IT services",
                    diff: "—",
                    difficulty: "Moderate",
                  },
                  {
                    vehicle: "GSA MAS / Schedule",
                    best: "Products, IT, and services",
                    diff: "Broader scope; less competitive per award",
                    difficulty: "Low-moderate",
                  },
                  {
                    vehicle: "SEWP V / NASA SEWP",
                    best: "IT products and related services",
                    diff: "IT-focused; different agency mix",
                    difficulty: "Moderate",
                  },
                  {
                    vehicle: "Polaris (SB IT)",
                    best: "IT services for small businesses",
                    diff: "IT only; SB-specific version of OASIS+",
                    difficulty: "Moderate",
                  },
                  {
                    vehicle: "Agency-Specific MACs",
                    best: "Work with a specific agency",
                    diff: "Narrower scope; deeper agency relationship",
                    difficulty: "Varies",
                  },
                ].map((row, i) => (
                  <tr key={row.vehicle} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-3 font-semibold text-blue-700 border-b border-stone-100">{row.vehicle}</td>
                    <td className="p-3 text-stone-700 border-b border-stone-100">{row.best}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{row.diff}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{row.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The GSA Multiple Award Schedule (MAS) is often the first vehicle small businesses pursue because
            the entry bar is lower. OASIS+ is harder to get on — the self-scoring threshold, the qualifying
            project requirements, the documentation burden — but the resulting task orders tend to be
            larger and more strategic. A$500K OASIS+ task order for management consulting pays better and
            builds more past performance than a series of small MAS orders.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            If your work is primarily IT, OASIS+ is not your vehicle. Look at Polaris (GSA&apos;s GWAC for
            small business IT services), NASA SEWP, or CIO-SP4. For a full comparison of all major vehicles,
            see our guide on{" "}
            <Link href="/blog/government-contract-vehicles-comparison" className="text-blue-600 hover:underline">
              government contract vehicles
            </Link>
            .
          </p>

          {/* Section 10 */}
          <SectionHeading id="next-steps" number="10" title="Your Next Steps" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            OASIS+ is actively awarding. Task orders are flowing. The window to get on the vehicle is open
            now and will stay open — but every month you delay is lost opportunity. Here&apos;s the practical
            sequence:
          </p>

          <div className="not-prose my-8 animate-on-scroll space-y-4">
            {[
              {
                step: "1",
                title: "Audit your current certifications",
                detail: "Check your SAM.gov profile. Confirm which SBA certifications you hold and when they expire. Identify which pools you can apply to today — and which certifications are worth pursuing to open additional pools.",
              },
              {
                step: "2",
                title: "Inventory your qualifying projects",
                detail: "Pull your past performance list. For each project, document the dollar value, performance period, and average annual value. Filter for projects meeting the $500K threshold. Map them to OASIS+ domains and functional areas.",
              },
              {
                step: "3",
                title: "Identify your documentation gaps",
                detail: "Do you have CPARS ratings? Are your former contracting officers reachable for verification? Do you have DCAA-approved accounting system documentation? Close the gaps before you submit — documentation problems are the #1 rejection reason.",
              },
              {
                step: "4",
                title: "Choose your domains strategically",
                detail: "Apply only to domains where you can hit 36 credits with solid documentation. A strong application to two domains beats a thin application to five. You can add domains later as you build more qualifying projects.",
              },
              {
                step: "5",
                title: "Submit — then start competing",
                detail: "Once you&apos;re awarded, set up eBuy notifications for your pools and domains. Start tracking agencies that are active on OASIS+. Don&apos;t wait for RTOPs to land in your inbox — do capture work proactively.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-200">
                <div className="shrink-0 w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                  <p className="text-sm text-stone-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The contractors winning the most on OASIS+ aren&apos;t the ones with the biggest companies or
            the most certifications. They&apos;re the ones who treat every task order as a capture event —
            building agency relationships before solicitations drop, submitting responsive proposals,
            and tracking their{" "}
            <Link href="/blog/government-contract-win-rate" className="text-blue-600 hover:underline">
              win rate
            </Link>{" "}
            to improve over time.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            If you&apos;re not sure where to start, the{" "}
            <Link href="/features/quick-checker" className="text-blue-600 hover:underline">
              Quick Checker
            </Link>{" "}
            will show you which pools and set-asides you currently qualify for, and the{" "}
            <Link href="/features/matching" className="text-blue-600 hover:underline">
              opportunity matching
            </Link>{" "}
            engine will surface OASIS+ task orders in your domains as they hit eBuy. The intelligence
            is there — you just need to act on it.
          </p>

          {/* CTA 3 — Demo */}
          <div className="not-prose bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 rounded-xl p-3 shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black mb-2">
                  Want a strategy session on OASIS+?
                </h3>
                <p className="text-stone-300 text-sm mb-4">
                  Our team has helped dozens of small businesses build their OASIS+ application strategy —
                  which pools to target, how to score qualifying projects, which domains to prioritize.
                  Book a 30-minute call to talk through your specific situation.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
