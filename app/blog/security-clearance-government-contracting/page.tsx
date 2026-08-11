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
  Users,
  FileText,
  Award,
  BarChart3,
  Shield,
  Lock,
  Key,
  Building2,
  Clock,
  XCircle,
  AlertCircle,
  Star,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-clearances-matter", label: "Why Security Clearances Open Larger Contracts" },
  { id: "clearance-levels", label: "The Three Clearance Levels Explained" },
  { id: "facility-vs-personnel", label: "Facility Clearance vs. Personnel Clearance" },
  { id: "how-to-get-sponsored", label: "How to Get Your Company Sponsored" },
  { id: "processing-timelines", label: "Processing Timelines and Backlog Reality" },
  { id: "costs", label: "What a Cleared Program Actually Costs" },
  { id: "fso-nisp-compliance", label: "FSO Duties and NISP Ongoing Compliance" },
  { id: "building-cleared-workforce", label: "Building Your Cleared Workforce" },
  { id: "uncleared-defense-work", label: "Defense Work Without a Clearance" },
  { id: "path-forward", label: "Your Path Forward" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red" | "indigo";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    red: "bg-red-50 border-red-200 text-red-800",
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
    indigo: "text-indigo-600",
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
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function SecurityClearanceGovernmentContractingPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
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
              Security Clearance Government Contracting
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Security Clearances for Government Contractors:{" "}
            <span className="gradient-text">What You Need, What It Costs, and How to Get Sponsored</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Nearly{" "}
            <strong className="text-stone-700">13,300 cleared facilities</strong> participate in
            the National Industrial Security Program. Classified contracts add up to a significant
            portion of the{" "}
            <strong className="text-stone-700">$793 billion</strong> the federal government spent
            on contracts in FY2025. If your business has stayed out of cleared work because the
            process seemed opaque or expensive, this guide cuts through the confusion — step by
            step, with real numbers.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>17 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 11, 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-indigo-700 transition-colors py-1"
                >
                  <span className="text-indigo-600 font-mono text-xs">
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
            id="why-clearances-matter"
            number="01"
            title="Why Security Clearances Open Larger Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government spends roughly{" "}
              <strong className="text-stone-800">$793 billion on contracts annually</strong> (FY2025).
              A meaningful slice of that — concentrated in the Department of Defense, the intelligence
              community, and national security agencies — is classified. These contracts do not appear
              fully on SAM.gov. They are not open to uncleared companies. And they tend to be{" "}
              <strong className="text-stone-800">larger, longer, and less competitive</strong> than
              unclassified awards.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Cleared contractors also face lower competitive pressure. Once a company holds a facility
              clearance and a cleared workforce, it sits in a smaller pool of eligible bidders. The
              investment in getting cleared — time, cost, compliance overhead — acts as a natural
              barrier that most small businesses never cross. Those that do find themselves competing
              against fewer firms for contracts that agencies genuinely need filled.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Cleared professionals command a premium. According to 2025 compensation data,
              the average cleared professional earns{" "}
              <strong className="text-stone-800">$119,131 annually</strong> — an all-time high,
              up nearly 4% year-over-year. Intelligence Community positions average{" "}
              <strong className="text-stone-800">$159,350</strong>. These numbers flow through to
              contract labor rates, which is part of why cleared contracts often carry higher margins
              than unclassified work.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: Shield,
                  stat: "13,300+",
                  label: "Cleared facilities participating in the National Industrial Security Program (NISP)",
                  color: "text-indigo-600 bg-indigo-50 border-indigo-100",
                },
                {
                  icon: Users,
                  stat: "~1M",
                  label: "NISP contractors with active security clearances across the defense industrial base",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: DollarSign,
                  stat: "$119K",
                  label: "Average cleared professional annual compensation in 2025 — all-time high",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
              ].map(({ icon: Icon, stat, label, color }) => (
                <div
                  key={stat}
                  className={`animate-on-scroll rounded-xl border p-5 hover-lift ${color}`}
                >
                  <Icon className="w-5 h-5 mb-3" />
                  <p className="text-2xl font-black mb-1">{stat}</p>
                  <p className="text-xs font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              None of this means getting cleared is easy or cheap. It is not. But the process is
              well-defined, and small businesses that understand it can navigate it deliberately
              rather than being surprised at every step. The companies that struggle most are those
              that pursue a classified contract opportunity without understanding what the clearance
              process actually involves — and then get caught off guard by the timeline.
            </p>

            <Callout icon={AlertCircle} color="amber" title="Clearances for Contractors Work Differently Than for Government Employees">
              <p>
                A government employee applies for a clearance through their agency. A contractor
                cannot apply for themselves — your company must be{" "}
                <strong>sponsored by a government agency or a cleared prime contractor</strong>{" "}
                with a legitimate classified need. You do not start the process by filing paperwork.
                You start by winning (or being close to winning) a contract that requires it.
                Understanding this distinction prevents a lot of wasted effort.
              </p>
            </Callout>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="clearance-levels"
            number="02"
            title="The Three Clearance Levels Explained"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The U.S. government issues security clearances at three primary classification levels.
              Each corresponds to the sensitivity of the information a cleared person can access —
              and each requires a progressively more intensive background investigation.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  level: "Confidential",
                  tier: "Tier 1 / Tier 3",
                  description:
                    "Access to information whose unauthorized disclosure could cause 'damage' to national security. The least common clearance level for contractors — most government contracting work that requires a clearance starts at Secret. Confidential clearances are issued mostly for lower-sensitivity positions and legacy systems.",
                  timeline: "2–4 months typical",
                  icon: Lock,
                  color: "border-stone-200 bg-stone-50",
                  iconColor: "text-stone-500",
                  badge: "bg-stone-100 text-stone-700 border-stone-200",
                },
                {
                  level: "Secret",
                  tier: "Tier 3 Investigation",
                  description:
                    "The most common clearance level across the DoD contractor base. Grants access to information whose disclosure could cause 'serious damage' to national security. The overwhelming majority of cleared positions for small businesses sit at Secret. Most DoD program offices, military branches, and defense prime contractors operate at this level.",
                  timeline: "4–8 months typical (FY2025–26)",
                  icon: Key,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  badge: "bg-blue-100 text-blue-800 border-blue-200",
                },
                {
                  level: "Top Secret (TS) / TS/SCI",
                  tier: "Tier 5 Investigation",
                  description:
                    "Top Secret grants access to information whose disclosure could cause 'exceptionally grave damage' to national security. TS/SCI (Sensitive Compartmented Information) sits on top of TS — it is not a separate clearance level, but an access category that gates compartmentalized programs. Some TS/SCI positions require polygraph examinations. Common in intelligence community contracting, cyber programs, and special access programs.",
                  timeline: "9+ months at 90th percentile (FY2026)",
                  icon: Shield,
                  color: "border-indigo-200 bg-indigo-50",
                  iconColor: "text-indigo-600",
                  badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
                },
              ].map(({ level, tier, description, timeline, icon: Icon, color, iconColor, badge }) => (
                <div key={level} className={`animate-on-scroll rounded-xl border p-6 ${color}`}>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${iconColor}`} />
                      <h3 className="font-black text-stone-900 text-lg">{level}</h3>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ${badge}`}>
                        {tier}
                      </span>
                      <span className="text-xs bg-white border border-stone-200 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                        {timeline}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Roughly{" "}
              <strong className="text-stone-800">3.7 million Americans hold active or current security
              clearance eligibility</strong>, according to the Office of the Director of National
              Intelligence. About 1.26 million of those hold Top Secret. These numbers sound large —
              but across the entire defense contractor workforce, cleared personnel are scarce enough
              that companies with cleared teams have a real hiring and bidding advantage.
            </p>

            <Callout icon={Lightbulb} color="sky" title="SCI Is Not a Fourth Clearance Level">
              <p>
                A common misunderstanding: TS/SCI is not a separate clearance above Top Secret.
                SCI is an access category that requires both a TS clearance and a separate
                indoctrination into a specific compartment based on need-to-know. You cannot apply
                for SCI access directly — the program office or agency grants it after your TS
                clearance is established. Some SCI compartments require polygraphs; others do not.
                When a job posting says &quot;TS/SCI required,&quot; it means you need both the clearance
                and an active indoctrination, which can take additional months after the TS is granted.
              </p>
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Find Out Which Defense Opportunities You Already Qualify For
                </h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Many defense contracts do not require a clearance — and some unclassified DoD
                  work is the fastest path to building past performance before pursuing cleared programs.
                  Check your eligibility for current opportunities in under two minutes.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="facility-vs-personnel"
            number="03"
            title="Facility Clearance vs. Personnel Clearance"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Security clearances for contractors operate at two distinct levels — and conflating
              them is one of the most common mistakes small businesses make when entering the cleared
              market. You need to understand both.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="animate-on-scroll rounded-xl border border-indigo-200 bg-indigo-50 p-6">
                <Building2 className="w-6 h-6 text-indigo-600 mb-3" />
                <h3 className="font-black text-stone-900 mb-2">Facility Security Clearance (FCL)</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  A company-level clearance granted to your organization. The FCL authorizes your
                  facility to access, store, and process classified information. Without an FCL, your
                  employees cannot be processed for individual clearances — the facility clearance
                  is the prerequisite.
                </p>
                <ul className="space-y-1">
                  {[
                    "Issued to the company, not individuals",
                    "Requires sponsorship from an agency or prime",
                    "Must designate a Facility Security Officer (FSO)",
                    "Processed through DCSA via NISS",
                    "Tied to the physical facility location",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll rounded-xl border border-blue-200 bg-blue-50 p-6">
                <Users className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-black text-stone-900 mb-2">Personnel Security Clearance (PCL)</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  An individual-level clearance granted to a specific employee. The PCL authorizes
                  that person to access classified information up to the cleared level. Your company
                  cannot hold individual clearances in the abstract — each is tied to an employee
                  with a specific need-to-know for a contract requirement.
                </p>
                <ul className="space-y-1">
                  {[
                    "Issued to individual employees",
                    "Requires an active FCL at the company",
                    "Initiated via Electronic Questionnaire for Investigations Processing (eQIP)",
                    "Adjudicated by DCSA or agency security",
                    "Follows the individual if they leave the company",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The sequence matters: FCL first, then PCL for individuals. A company that tries
              to get its employees cleared before establishing a facility clearance cannot — the
              system requires the company-level authorization as the foundation. And neither can
              happen without a sponsoring government agency or cleared prime contractor.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The level of your FCL also caps what you can handle. A facility cleared at the Secret
              level cannot receive Top Secret information. If a contract requires TS access, your
              FCL must be at TS. This has practical implications for which contracts you can pursue
              and how you grow your cleared program over time.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="FCL Level Caps What You Can Bid">
              <p>
                If your facility holds a Secret-level FCL and a contracting officer issues a
                requirement that calls for Top Secret access, you are not eligible to bid until
                you upgrade your FCL. Upgrading requires working with your DCSA industrial security
                representative and often triggers an additional investigation of key management
                personnel. Factor FCL level into your{" "}
                <Link href="/blog/bid-no-bid-decision-framework" className="text-amber-900 underline font-medium">
                  bid/no-bid decision
                </Link>{" "}
                before you invest in a proposal.
              </p>
            </Callout>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="how-to-get-sponsored"
            number="04"
            title="How to Get Your Company Sponsored"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              This is the part most guides skip or handle poorly. You cannot initiate an FCL
              application on your own — you need a sponsor. There are two paths to sponsorship,
              and the right path depends on where you are in your business development.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  path: "Path 1: Direct Government Agency Sponsorship",
                  icon: Building2,
                  color: "border-indigo-200 bg-indigo-50",
                  iconColor: "text-indigo-600",
                  detail:
                    "A government agency with classified procurement needs sponsors your facility when you win or are about to win a classified contract. The contracting officer — or the agency security officer — initiates the FCL request to DCSA on your behalf. This is the most common path for companies entering the cleared market for the first time: win a classified prime contract, and the agency handles the sponsorship as part of contract award.",
                  steps: [
                    "Win a classified contract (or receive a conditional award pending clearance)",
                    "Agency issues a DD Form 254 — the contract security classification spec",
                    "Agency or CO submits FCL sponsorship request to DCSA",
                    "DCSA contacts your company to begin the FCL investigation",
                    "You designate an FSO and submit documentation through NISS",
                  ],
                },
                {
                  path: "Path 2: Prime Contractor Sponsorship",
                  icon: Users,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  detail:
                    "A cleared prime contractor sponsors your company when they need you to perform classified subcontract work. The prime submits the FCL sponsorship request to DCSA along with documentation showing the specific classified need. This path is valuable for small businesses that want to enter the cleared market through subcontracting before pursuing prime contracts — consistent with the broader advice on using subcontracting as an accelerant.",
                  steps: [
                    "Win a subcontract under a cleared prime's classified program",
                    "Prime contractor issues a subcontract-level DD Form 254",
                    "Prime submits FCL sponsorship letter to DCSA",
                    "DCSA begins the FCL investigation for your facility",
                    "You designate an FSO and submit through NISS",
                  ],
                },
              ].map(({ path, icon: Icon, color, iconColor, detail, steps }) => (
                <div key={path} className={`animate-on-scroll rounded-xl border p-6 ${color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                    <h3 className="font-black text-stone-900">{path}</h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">{detail}</p>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                    Step-by-Step
                  </p>
                  <ol className="space-y-1.5">
                    {steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-stone-700">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The{" "}
              <strong className="text-stone-800">DD Form 254</strong> is the foundational document.
              It specifies the classification level required, the categories of classified
              information involved, and the security requirements the contractor must meet.
              It is issued by the government customer and goes with every classified contract.
              Your FSO will use it as the authoritative guide for what your cleared program
              must maintain throughout the contract performance period.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              You cannot manufacture a need for a clearance. DCSA will verify that a genuine
              classified requirement exists before granting an FCL. Companies that try to pursue
              a clearance speculatively — without an actual contract need — will not be sponsored.
              The right move is to position your company in the defense market, build relationships
              with cleared primes and DoD program offices, and be prepared to move quickly when
              a sponsoring opportunity appears.
            </p>

            <Callout icon={Star} color="indigo" title="Position Yourself Before the Classified Need Appears">
              <p>
                The best time to start building relationships with DoD program offices is before
                they have a classified requirement for you. Attend industry days, respond to{" "}
                <Link href="/blog/sources-sought-notice" className="text-indigo-900 underline font-medium">
                  Sources Sought notices
                </Link>{" "}
                for unclassified predecessor programs, and reach out to prime contractors who hold
                cleared vehicles in your capability area. When the classified opportunity surfaces,
                you want to be the company the program office already knows — not a cold contact
                trying to explain who you are.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="processing-timelines"
            number="05"
            title="Processing Timelines and Backlog Reality"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              DCSA advertises a 45-day target for FCL processing in its orientation materials.
              Real-world experience is different. For companies new to the cleared world, the
              FCL process typically takes{" "}
              <strong className="text-stone-800">several months to a year</strong>, depending on
              the complexity of the case, the clearance level required, and DCSA&apos;s current
              investigative capacity.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Clearance Level</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Investigation Tier</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Typical Range (FY2025–26)</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">90th Percentile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { level: "Confidential", tier: "Tier 1 / Tier 3", range: "2–4 months", p90: "~4 months" },
                    { level: "Secret", tier: "Tier 3", range: "4–8 months", p90: "~4 months" },
                    { level: "Top Secret", tier: "Tier 5", range: "6–12+ months", p90: "~9 months" },
                    { level: "Top Secret / SCI", tier: "Tier 5 + compartment", range: "9–18+ months", p90: "12+ months" },
                  ].map(({ level, tier, range, p90 }) => (
                    <tr key={level} className="hover:bg-stone-50">
                      <td className="px-4 py-3 font-bold text-stone-800">{level}</td>
                      <td className="px-4 py-3 text-stone-600">{tier}</td>
                      <td className="px-4 py-3 text-stone-600">{range}</td>
                      <td className="px-4 py-3 text-indigo-700 font-bold">{p90}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The overall end-to-end processing time across all tiers averaged{" "}
              <strong className="text-stone-800">243 days</strong> in the third quarter of FY2025
              — broken down as 19 days to initiate, 215 days to investigate, and 9 days to
              adjudicate. That is the average across all cases, including straightforward and
              complex ones.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The backlog situation has improved significantly. By January 2026, the pending
              investigation backlog had fallen to approximately{" "}
              <strong className="text-stone-800">100,000 cases</strong> — down roughly 65% from
              early 2025 levels, and far from the peak of 725,000 cases in 2018. DCSA reported
              a 24% backlog reduction by May 2025, driven by investigation capacity expansion
              and process modernization. Processing times today are meaningfully shorter than
              they were three or four years ago.
            </p>

            <Callout icon={Clock} color="blue" title="What Slows Down Individual Clearance Processing">
              <ul className="space-y-2">
                {[
                  "Incomplete or inaccurate SF-86 (Standard Form 86) — the personal questionnaire. Every gap or inconsistency triggers investigator follow-up.",
                  "Extended foreign travel or foreign contacts requiring additional interviews",
                  "Prior drug use that must be disclosed and adjudicated against the 13 adjudicative guidelines",
                  "Financial issues: delinquent accounts, bankruptcy, significant debt that suggests financial vulnerability",
                  "Prior criminal record, arrests without conviction, or domestic incidents",
                  "Gaps in employment history or education that cannot be verified",
                  "Previous denials or revocations of security clearance eligibility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              The single most controllable factor in processing time is the quality of the initial
              submission. An accurate, complete SF-86 — filled out thoroughly rather than leaving
              entries blank — consistently produces faster adjudications than applications that
              require investigators to come back with questions. Honesty matters more than a clean
              record: adjudicators routinely clear applicants with disclosed issues, and routinely
              deny or revoke clearances where the investigation surfaces undisclosed information.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="costs"
            number="06"
            title="What a Cleared Program Actually Costs"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The cost question is where small businesses most often underestimate what they are
              getting into. Background investigation fees are visible and reasonably straightforward.
              The indirect costs — compliance infrastructure, FSO time, physical security requirements,
              cleared personnel recruiting premiums — are where the real budget impact lives.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  category: "Background Investigation Fees",
                  icon: FileText,
                  iconColor: "text-indigo-600",
                  detail:
                    "The government pays investigation fees for most DoD contractor clearances through DCSA. Contractors generally do not pay directly for the background investigation itself — the cost is absorbed through the contract or the sponsoring agency. However, if you are using a commercial investigation vendor for pre-employment screening, those costs ($50–$300 per employee depending on depth) come out of your overhead.",
                  cost: "Generally government-funded for cleared work",
                },
                {
                  category: "Facility Security Officer (FSO) Compensation",
                  icon: Users,
                  iconColor: "text-blue-600",
                  detail:
                    "Every cleared facility must have a designated FSO — a person responsible for managing the security program, maintaining NISS records, conducting annual briefings, processing visit requests, and interfacing with DCSA. FSOs at cleared contractors typically earn $60,000–$120,000+ annually depending on experience and clearance program complexity. Small businesses often appoint a part-time FSO (a manager who also handles security duties), which works at low clearance volumes but becomes a compliance risk as the cleared program grows.",
                  cost: "$60K–$120K+ per year (or FSO consulting contracts)",
                },
                {
                  category: "Physical Security Requirements",
                  icon: Lock,
                  iconColor: "text-stone-500",
                  detail:
                    "To store or process classified material, your facility may need to meet physical security requirements specified in the NISPOM (National Industrial Security Program Operating Manual, DoD 5220.22-M). These can include: approved security containers (GSA-approved safes: $500–$3,000+), access control systems, visitor logs, alarm systems, and for higher-level classified storage, a Sensitive Compartmented Information Facility (SCIF). A full SCIF build-out ranges from $50 per square foot for modest facilities to several hundred dollars per square foot for high-spec ICD 705-compliant spaces.",
                  cost: "$5K–$1M+ depending on level and volume",
                },
                {
                  category: "Systems and IT Security (ISSE/ISSO)",
                  icon: Shield,
                  iconColor: "text-violet-600",
                  detail:
                    "Classified IT systems require separate accreditation through the DoD Risk Management Framework (RMF). An authorized classified network (classified workstations, encrypted communications, separate from your unclassified infrastructure) requires an Information System Security Engineer (ISSE) to design and an Information System Security Officer (ISSO) to maintain. These roles carry significant salary premiums. Cloud-based classified computing via DoD Impact Level 5 or Level 6 infrastructure changes the cost structure, but does not eliminate the personnel requirements.",
                  cost: "$1,500–$3,000/month for basic systems; $80K–$150K+ for ISSO/ISSE staff",
                },
                {
                  category: "Annual Compliance and Training",
                  icon: Award,
                  iconColor: "text-emerald-600",
                  detail:
                    "NISPOM requires annual security awareness training for all cleared employees, periodic reinvestigations (every 5–10 years depending on level), and ongoing incident reporting. The FSO must also complete required DCSA training. Industry-specific security association memberships (NCMS, NISPPAC industry reps) add modest costs but provide valuable compliance resources for small cleared companies.",
                  cost: "$5K–$25K annually for a small program",
                },
              ].map(({ category, icon: Icon, iconColor, detail, cost }) => (
                <div key={category} className="animate-on-scroll rounded-xl border border-stone-200 bg-white p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                    <h3 className="font-black text-stone-900">{category}</h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-3">{detail}</p>
                  <div className="bg-stone-50 rounded-lg px-4 py-2 border border-stone-200">
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-0.5">Typical Cost</p>
                    <p className="text-sm font-bold text-stone-800">{cost}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For a small business running a minimal cleared program — one cleared facility, a
              part-time FSO, a few cleared employees, Secret-level work with no classified IT
              systems — the annual overhead cost realistically runs{" "}
              <strong className="text-stone-800">$50,000–$150,000 per year</strong> when you add
              FSO time, physical security, and training compliance. This is manageable if your
              cleared contracts generate sufficient margin. It is a problem if you win a clearance
              and then the classified work does not materialize on time.
            </p>

            <Callout icon={DollarSign} color="emerald" title="Cleared Overhead as an Allowable Cost">
              <p>
                Under the Federal Acquisition Regulation, security program costs are generally
                allowable indirect costs on government contracts. Your facility security costs —
                FSO time, physical security measures, investigation-related expenses — can be
                allocated to overhead and included in your indirect cost rates. If you have a
                DCAA-compliant accounting system, work with your accountant to establish a security
                overhead pool that captures these costs correctly from day one. Learn more about{" "}
                <Link href="/blog/dcaa-audit-small-business" className="text-emerald-900 underline font-medium">
                  DCAA compliance for small business contractors
                </Link>
                .
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-10 rounded-2xl border-2 border-stone-200 p-8 bg-stone-50">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track Defense Opportunities in Your NAICS Codes
                </h3>
                <p className="text-stone-500 text-sm mb-4">
                  CapturePilot monitors DoD and intelligence community opportunities — both
                  classified and unclassified — across the federal procurement landscape, matched
                  to your capabilities, certifications, and clearance level.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-white text-stone-700 border border-stone-300 font-bold px-5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="fso-nisp-compliance"
            number="07"
            title="FSO Duties and NISP Ongoing Compliance"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Getting a clearance is a one-time event. Maintaining it is a continuous obligation
              governed by the National Industrial Security Program Operating Manual (NISPOM),
              codified in 32 CFR Part 117. The FSO is the person your company holds accountable
              for that compliance — and DCSA holds your company accountable for what the FSO does
              or fails to do.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-8">
              {[
                {
                  duty: "Annual security awareness training",
                  detail: "All cleared employees must receive security refresher training annually. FSO documents it.",
                },
                {
                  duty: "NISS record maintenance",
                  detail: "All clearance actions — accessions, debriefs, visit requests, changes — are recorded in NISS.",
                },
                {
                  duty: "Reporting adverse information",
                  detail: "FSO must report when a cleared employee exhibits concerning behavior or disqualifying events. Not optional.",
                },
                {
                  duty: "Processing visit authorizations",
                  detail: "When cleared employees visit other cleared facilities, the FSO submits visit authorization requests.",
                },
                {
                  duty: "DD Form 254 management",
                  detail: "FSO reviews the DD-254 for every classified contract and ensures facility compliance with its requirements.",
                },
                {
                  duty: "Self-inspection program",
                  detail: "NISPOM requires annual self-inspections of your security program. FSO documents and corrects any findings.",
                },
                {
                  duty: "Insider threat program",
                  detail: "All FCL holders must implement a NISPOM-compliant insider threat program with a designated program senior official.",
                },
                {
                  duty: "DCSA vulnerability assessments",
                  detail: "DCSA conducts periodic on-site assessments of your security program. FSO leads the response.",
                },
              ].map(({ duty, detail }) => (
                <div key={duty} className="bg-indigo-50 rounded-xl border border-indigo-100 p-4">
                  <p className="font-bold text-stone-800 text-sm mb-1">{duty}</p>
                  <p className="text-xs text-stone-500">{detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The{" "}
              <strong className="text-stone-800">insider threat program</strong> requirement deserves
              special attention. Since 2017, all NISP contractors must operate a NISPOM-compliant
              insider threat program — a structured approach to detecting, deterring, and mitigating
              insider threats. This is not a checkbox. It requires a designated senior official,
              documented procedures, employee reporting mechanisms, and periodic self-assessments.
              DCSA has cited insider threat program deficiencies in vulnerability assessments, and
              findings can affect your facility&apos;s clearance status.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              DCSA offers free FSO training through the Center for Development of Security Excellence
              (CDSE) — an often-underused resource for small businesses building a cleared program.
              FSOs should complete the FSO Program Management for Possessing Facilities curriculum
              before the FCL is granted, not after they discover a gap during a vulnerability
              assessment.
            </p>

            <Callout icon={AlertTriangle} color="red" title="NISPOM Violations Can Cost You the Contract">
              <p>
                DCSA can suspend or revoke a facility clearance for NISPOM violations. A suspended
                FCL immediately affects your ability to perform on classified contracts and can
                trigger cure notice provisions under your contract vehicle. Common violation categories:
                failure to report adverse information, unauthorized disclosure of classified
                information, improper physical security, and failure to conduct required annual
                training. Treat NISP compliance as a core business function, not an afterthought.
              </p>
            </Callout>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="building-cleared-workforce"
            number="08"
            title="Building Your Cleared Workforce"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The cleared talent market is tight. The demand for cleared professionals consistently
              outpaces supply, which is why cleared positions command salary premiums and why cleared
              companies that build a strong bench of cleared personnel have a structural advantage
              in bidding.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  strategy: "Hire employees with existing clearances first",
                  icon: CheckCircle2,
                  color: "text-emerald-500",
                  detail:
                    "A person whose clearance is inactive (left a cleared job) can often have it reinstated faster than a new investigation — particularly if the break is less than 24 months. Hiring someone with a prior clearance is almost always faster than initiating a new investigation for an uncleared candidate. This is standard practice for new cleared programs that need to staff quickly.",
                },
                {
                  strategy: "Initiate clearances before you need them",
                  icon: Clock,
                  color: "text-blue-500",
                  detail:
                    "Given 4–8 month investigation timelines, you cannot wait until contract award to start the process. Begin clearance submissions for key personnel as soon as your FCL is granted and you have a classified requirement. Contract officers understand this — cleared contractors who have personnel in process are better positioned than those starting from zero at award.",
                },
                {
                  strategy: "Use interim clearances strategically",
                  icon: Key,
                  color: "text-indigo-500",
                  detail:
                    "DCSA can grant interim clearances — provisional access pending completion of the full investigation — in some cases. An interim Secret clearance can enable an employee to begin working on a classified program while their full investigation completes. Not all cases qualify for interim access, and contractors cannot guarantee them. But for candidates with clean backgrounds, interim clearances are a meaningful tool for closing staffing gaps.",
                },
                {
                  strategy: "Price cleared personnel correctly",
                  icon: DollarSign,
                  color: "text-amber-500",
                  detail:
                    "Cleared personnel cost more — both in salary and in recruiting. Your direct labor rates on cleared contracts should reflect actual cleared market compensation, not uncleared rates with an arbitrary premium. Using CapturePilot's market intelligence to research what cleared contracts in your labor category are billing helps you price competitively without undervaluing your people or overpaying relative to the market.",
                },
                {
                  strategy: "Build retention into your cleared program",
                  icon: Star,
                  color: "text-violet-500",
                  detail:
                    "Cleared employees are recruitable from the moment their clearance is active. If you invested 6–12 months getting someone cleared and they leave for a competitor after six months on contract, you lose the investment and the cleared slot. Programs like security clearance retention bonuses, clearance level upgrade sponsorship (Secret to TS), and clear career ladders for cleared roles reduce turnover in a talent market where cleared professionals have abundant options.",
                },
              ].map(({ strategy, icon: Icon, color, detail }) => (
                <div key={strategy} className="flex gap-4 animate-on-scroll">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-stone-900 mb-2">{strategy}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={TrendingUp} color="emerald" title="Cleared Workforce as a Competitive Asset">
              <p>
                Your cleared workforce is a bidding asset. When you respond to a classified
                solicitation, the number and level of your cleared personnel — and the speed
                at which you can staff the program — directly affects your technical score.
                A company that can commit a cleared program manager and four cleared engineers
                from Day 1 is more attractive to a program office than one that must clear
                everyone from scratch. Build the bench before you need it, and make that bench
                visible in your{" "}
                <Link href="/features/capability-statement" className="text-emerald-900 underline font-medium">
                  capability statement
                </Link>
                .
              </p>
            </Callout>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="uncleared-defense-work"
            number="09"
            title="Defense Work Without a Clearance"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Not all defense contracting requires a clearance. A significant share of DoD work
              is unclassified — and for small businesses without a clearance yet, unclassified
              defense work is the fastest path to building the past performance and the agency
              relationships that eventually open cleared opportunities.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Many IT services, logistics, construction, facility management, and professional
              services contracts at DoD are fully unclassified. The{" "}
              <Link href="/blog/dod-contracts-small-business" className="text-indigo-700 hover:underline font-medium">
                Department of Defense contracts for small business
              </Link>{" "}
              guide covers where to start in that market. For DoD-specific contract vehicles,
              including those available to uncleared companies, the{" "}
              <Link href="/blog/sbir-sttr-grants-guide" className="text-indigo-700 hover:underline font-medium">
                SBIR and STTR programs
              </Link>{" "}
              are also completely unclassified — and offer a direct research-funding path into
              DoD innovation programs that often evolve into classified follow-on work.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-8">
              {[
                {
                  label: "IT Services (unclassified networks)",
                  note: "Help desk, desktop support, cybersecurity assessment",
                  cleared: false,
                },
                {
                  label: "Base Operations Support",
                  note: "Facilities, food service, grounds maintenance",
                  cleared: false,
                },
                {
                  label: "Professional Services",
                  note: "HR, training, financial management, legal support",
                  cleared: false,
                },
                {
                  label: "Construction and O&M",
                  note: "Non-secure facility construction and maintenance",
                  cleared: false,
                },
                {
                  label: "SBIR / STTR Research",
                  note: "Phase I/II R&D contracts from DoD agencies",
                  cleared: false,
                },
                {
                  label: "Subcontracting to cleared primes",
                  note: "Many subcontract roles on classified programs are unclassified",
                  cleared: false,
                },
                {
                  label: "Foreign Military Sales (FMS) support",
                  note: "Logistics, training, and technical support for allied nations",
                  cleared: false,
                },
                {
                  label: "Depot-level maintenance",
                  note: "Depot repair and overhaul of non-classified systems",
                  cleared: false,
                },
              ].map(({ label, note }) => (
                <div key={label} className="flex items-start gap-3 bg-stone-50 rounded-xl border border-stone-200 p-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-800 text-sm">{label}</p>
                    <p className="text-xs text-stone-500 mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Subcontracting on classified programs is another entry point that is often overlooked.
              Many subcontractor roles within a classified program involve unclassified work — program
              management, supply chain, administrative support — even when the prime contract and
              program content are classified. The prime handles the classified aspects; your
              subcontract work may not require a clearance at all. This is how many small businesses
              build their first DoD past performance before pursuing cleared prime opportunities.
              Read more on{" "}
              <Link href="/blog/subcontracting-government-contracts" className="text-indigo-700 hover:underline font-medium">
                subcontracting as a path into federal contracting
              </Link>
              .
            </p>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="path-forward"
            number="10"
            title="Your Path Forward"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Getting into cleared contracting is not something that happens in one move. It is a
              deliberate progression. Companies that navigate it successfully typically follow a
              recognizable pattern — even if they did not plan it that way from the start.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Win unclassified DoD work and build past performance",
                  detail:
                    "Start with unclassified DoD contracts in your capability area. Use CapturePilot's matching tools to find relevant opportunities and build the CPARS-backed past performance record that classified program offices want to see before they sponsor a new company. Unclassified past performance directly supports your first classified proposal.",
                },
                {
                  step: "02",
                  title: "Build relationships with cleared primes and program offices",
                  detail:
                    "Attend DoD industry days, respond to Sources Sought notices, and introduce your capabilities to prime contractors who hold cleared vehicles in your space. The FCL sponsorship you eventually need comes from these relationships — not from cold outreach after you've already decided to pursue a classified contract.",
                },
                {
                  step: "03",
                  title: "Pursue subcontract work on classified programs",
                  detail:
                    "Before you have an FCL, you can subcontract on classified programs in roles that don't require clearance. This gets you inside the cleared contractor ecosystem, builds relationships with the agency customer, and positions you to request FCL sponsorship when a classified sub-role becomes necessary.",
                },
                {
                  step: "04",
                  title: "Get sponsored and start the FCL process",
                  detail:
                    "When a classified prime contract or subcontract opportunity materializes, work with the sponsoring agency or prime to initiate the FCL application. Designate your FSO, complete required DCSA orientation, and begin clearing key personnel in parallel. Track the pipeline — clearance processing takes months, and contract performance often cannot wait.",
                },
                {
                  step: "05",
                  title: "Build your cleared infrastructure deliberately",
                  detail:
                    "Establish your NISPOM-compliant security program, inside threat program, and cleared IT systems (if required) based on what your contracts actually need — not what you might eventually need. Size the compliance infrastructure to your current cleared program, and scale it as the program grows. Overcapitalizing the security infrastructure before you have cleared contract revenue to support it is a common mistake.",
                },
                {
                  step: "06",
                  title: "Compete for classified prime opportunities",
                  detail:
                    "With an FCL, cleared personnel, established past performance, and NISP compliance behind you, you are positioned to compete for classified prime contracts. Use CapturePilot's intelligence tools to track upcoming classified competitions, monitor incumbent contract expirations, and time your pursuit activities for maximum impact.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-5 animate-on-scroll">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center">
                      <span className="font-black text-indigo-700 text-sm">{step}</span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-black text-stone-900 mb-1">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={XCircle} color="violet" title="Common Mistakes to Avoid">
              <ul className="space-y-2">
                {[
                  "Pursuing a cleared contract before you have a sponsor — DCSA will not open an FCL investigation without a documented classified need from a government agency or cleared prime",
                  "Underestimating NISP compliance costs and then treating the security program as an afterthought once the FCL is granted",
                  "Waiting until contract award to initiate clearance investigations for key personnel — the 4–8 month timeline means you must start earlier",
                  "Failing to disclose issues on the SF-86 — investigators always find undisclosed information, and the non-disclosure is typically more damaging than the underlying issue",
                  "Building cleared IT infrastructure to a level your contracts don't require, then carrying that overhead indefinitely",
                  "Not having a cleared recruiter or hiring pipeline ready when the FCL is granted — cleared talent is scarce and your competitors are already pursuing the same candidates",
                ].map((mistake) => (
                  <li key={mistake} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-violet-700 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{mistake}</span>
                  </li>
                ))}
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              The{" "}
              <Link href="/features/pipeline" className="text-indigo-700 hover:underline font-medium">
                CapturePilot pipeline tool
              </Link>{" "}
              helps you manage the long runway that cleared contracting requires — tracking where
              relationships are, which opportunities are approaching solicitation, and which incumbent
              contracts represent your best recompete targets. The cleared market rewards companies
              that plan 12–18 months ahead. An ad-hoc pursuit strategy will not get you there.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Wondering whether your current capabilities and certifications align with defense
              opportunities that are available right now — classified or otherwise? The{" "}
              <Link href="/resources/bid-checklist" className="text-indigo-700 hover:underline font-medium">
                CapturePilot bid readiness checklist
              </Link>{" "}
              is a good first diagnostic before you start building a cleared pursuit strategy.
            </p>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll my-12 pt-10 border-t border-stone-200">
            <h3 className="text-lg font-black text-stone-900 mb-6">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/dod-contracts-small-business",
                  title: "Department of Defense Contracts for Small Business: Where to Start",
                  category: "Agencies",
                },
                {
                  href: "/blog/subcontracting-government-contracts",
                  title: "Subcontracting on Government Contracts: Your First Step Into Federal",
                  category: "Getting Started",
                },
                {
                  href: "/blog/sbir-sttr-grants-guide",
                  title: "SBIR and STTR Grants: How Small Businesses Win R&D Funding from DoD",
                  category: "Getting Started",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  title: "DCAA Audit Preparation: What Small Business Government Contractors Must Know",
                  category: "Strategy",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process: How Winning Contractors Find and Win Deals",
                  category: "Strategy",
                },
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices: How to Get In Early and Shape the RFP",
                  category: "Strategy",
                },
              ].map(({ href, title, category }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-xl border border-stone-200 p-4 hover:border-indigo-200 hover:bg-indigo-50 transition-all hover-lift"
                >
                  <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">
                    {category}
                  </p>
                  <p className="text-sm font-bold text-stone-800 group-hover:text-indigo-700 transition-colors leading-snug">
                    {title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 p-10 text-white text-center">
            <Lock className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-black mb-3">
              Ready to Pursue Cleared Defense Work?
            </h3>
            <p className="text-indigo-100 text-sm max-w-lg mx-auto mb-6">
              CapturePilot tracks DoD opportunities across classified and unclassified markets —
              matching them to your NAICS codes, certifications, and cleared status so you build
              the right pipeline before you need it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-black px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-400 transition-colors text-sm border border-indigo-400"
              >
                Start 30-day free trial
              </a>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
