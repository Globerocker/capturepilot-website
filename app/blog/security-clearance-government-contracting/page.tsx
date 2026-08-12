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
  TrendingDown,
  Users,
  FileText,
  Award,
  BarChart3,
  Shield,
  Lock,
  Building2,
  Clock,
  XCircle,
  RefreshCw,
  Layers,
  Star,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-clearances-matter", label: "Why Clearances Open the Largest Defense Market" },
  { id: "clearance-levels", label: "Clearance Levels: Confidential, Secret, Top Secret, and TS/SCI" },
  { id: "fcl-vs-pcl", label: "Facility Clearances vs. Personal Clearances" },
  { id: "sponsorship-process", label: "How the Sponsorship Process Actually Works" },
  { id: "processing-times", label: "Current Processing Times: What to Expect in 2026" },
  { id: "costs", label: "What It Actually Costs (FY2026 DCSA Rates)" },
  { id: "agencies-contracts", label: "Which Contracts and Agencies Require Clearances" },
  { id: "small-business", label: "How Small Businesses Navigate the Cleared Market" },
  { id: "trusted-workforce", label: "Trusted Workforce 2.0: How the System Is Changing" },
  { id: "clearance-strategy", label: "Building a Clearance Strategy for Your Business" },
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
              Security Clearances for Government Contractors
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
            The DoD obligates roughly{" "}
            <strong className="text-stone-700">$445 billion in contracts annually</strong>, and{" "}
            <strong className="text-stone-700">$89.9 billion</strong> sits in classified programs alone — before you add{" "}
            <strong className="text-stone-700">$101+ billion in Intelligence Community spending</strong>.
            Accessing that market requires a security clearance. This is exactly how the process
            works, what it costs, and how a small business gets in.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 12, 2026</span>
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
            title="Why Clearances Open the Largest Defense Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most small businesses pursuing federal contracts focus entirely on the open, competitive
              market — the solicitations posted publicly on SAM.gov that anyone can see and bid.
              That market is real, but it sits alongside a parallel market of comparable or larger
              scale that most contractors never touch: cleared work.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The DoD alone obligated approximately{" "}
              <strong className="text-stone-800">$445 billion in FY2024</strong>. Of the FY2025
              budget request, <strong className="text-stone-800">$89.9 billion sits in classified
              programs</strong> — procurement that never appears on any public database, awarded
              through processes most contractors do not know exist. Add the National Intelligence
              Program ($73.4 billion) and Military Intelligence Program ($28.2 billion), and the
              combined intelligence-related budget approaches{" "}
              <strong className="text-stone-800">$101 billion annually</strong>.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              None of that is accessible without a security clearance. A cleared facility clearance
              (FCL) and cleared employees is the baseline requirement — not optional, not waivable.
              And yet about{" "}
              <strong className="text-stone-800">65% of the roughly 12,500 cleared contractor
              facilities in the National Industrial Security Program (NISP) are small businesses.</strong>{" "}
              The cleared market is not just for Lockheed and Northrop. It is accessible to
              companies that understand how the system works.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$89.9B",
                  label: "DoD classified programs in the FY2025 budget request — never posted on SAM.gov",
                  color: "text-indigo-600 bg-indigo-50 border-indigo-100",
                },
                {
                  icon: Building2,
                  stat: "12,500",
                  label: "Cleared contractor facilities in NISP, of which 65% are small businesses",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: TrendingDown,
                  stat: "100K",
                  label: "Clearance investigation backlog as of January 2026 — down 65% from its 2024 peak",
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
              The cleared contracting market also tends to be{" "}
              <strong className="text-stone-800">stickier</strong> than the open market. Once a
              company holds an FCL and has cleared personnel who understand a classified program,
              transitioning to a competitor is expensive and disruptive for the government. Incumbent
              advantage is even more pronounced here than in unclassified contracting — which means
              getting in is hard, but staying in is much easier.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This guide covers everything you need to know about security clearances from a
              business strategy perspective: the levels, the costs, the process, the timeline, and
              the realistic path for a small business that wants to compete in this market.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="clearance-levels"
            number="02"
            title="Clearance Levels: Confidential, Secret, Top Secret, and TS/SCI"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The U.S. government recognizes three formal classification levels, each corresponding
              to a clearance level. The legal standard for each is defined by Executive Order 13526
              and governs both the classification of information and the investigation required for
              access.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  level: "Confidential",
                  tag: "Lowest Tier",
                  tagColor: "bg-stone-100 text-stone-600",
                  borderColor: "border-stone-200",
                  description:
                    "Unauthorized disclosure could cause damage to national security. Confidential is the most common clearance granted to military enlisted personnel but increasingly rare in contractor roles — most defense programs have migrated upward as classification practices evolved. Confidential clearances require a Tier 3 investigation, same as Secret.",
                  contractUse: "Physical security, some logistics and supply chain roles, base support services",
                  investigation: "Tier 3 (NACLC-level); same investigation as Secret",
                  reinvestigation: "15-year periodic reinvestigation",
                },
                {
                  level: "Secret",
                  tag: "Most Common",
                  tagColor: "bg-blue-100 text-blue-700",
                  borderColor: "border-blue-200",
                  description:
                    "Unauthorized disclosure could cause serious damage to national security. This is the baseline clearance for the vast majority of cleared contractor positions — covering general defense programs, IT support for DoD systems, weapons program support, and most intelligence-adjacent work that doesn't require compartmented access.",
                  contractUse: "DoD IT, defense program management support, military facility operations, many DHS and DoD contracts",
                  investigation: "Tier 3 (Background Investigation); $455 in FY2026",
                  reinvestigation: "10-year periodic reinvestigation (now replaced by continuous vetting)",
                },
                {
                  level: "Top Secret (TS)",
                  tag: "High Sensitivity",
                  tagColor: "bg-amber-100 text-amber-700",
                  borderColor: "border-amber-200",
                  description:
                    "Unauthorized disclosure could cause exceptionally grave damage to national security. Top Secret is required for the most sensitive uncompartmented programs and is the baseline for anyone working in the Intelligence Community. Getting a TS takes roughly four times longer and costs thirteen times more than a Secret clearance.",
                  contractUse: "Intelligence program support, advanced weapons R&D, senior DoD advisory roles, NSA/CIA/DIA contractor positions",
                  investigation: "Tier 5 (Single Scope Background Investigation); $5,890 in FY2026",
                  reinvestigation: "5-year periodic reinvestigation (now replaced by continuous vetting)",
                },
                {
                  level: "TS/SCI",
                  tag: "Most Restricted",
                  tagColor: "bg-indigo-100 text-indigo-700",
                  borderColor: "border-indigo-200",
                  description:
                    "Critical misunderstanding: TS/SCI is not a clearance level — it is a Top Secret clearance combined with access to Sensitive Compartmented Information programs. SCI access is granted compartment by compartment, program by program, through a separate read-in process. You can hold a fully granted Top Secret clearance and still be excluded from every SCI program. The read-in requires a need-to-know determination, not just an investigation result.",
                  contractUse: "NSA, CIA, NRO, NGA, DIA, and other IC agency contractor positions; often requires a polygraph",
                  investigation: "Tier 5 plus program-specific indoctrination and often counterintelligence or full-scope polygraph",
                  reinvestigation: "Continuous; additional periodic reviews as required by specific programs",
                },
              ].map(({ level, tag, tagColor, borderColor, description, contractUse, investigation, reinvestigation }) => (
                <div
                  key={level}
                  className={`animate-on-scroll rounded-xl border p-6 ${borderColor} bg-white hover-lift`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-black text-stone-900 text-lg">{level}</h3>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tagColor}`}>
                      {tag}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">{description}</p>
                  <div className="grid sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <p className="font-bold text-stone-500 uppercase tracking-wider mb-1">Common Contract Use</p>
                      <p className="text-stone-600">{contractUse}</p>
                    </div>
                    <div>
                      <p className="font-bold text-stone-500 uppercase tracking-wider mb-1">Investigation</p>
                      <p className="text-stone-600">{investigation}</p>
                    </div>
                    <div>
                      <p className="font-bold text-stone-500 uppercase tracking-wider mb-1">Reinvestigation Cycle</p>
                      <p className="text-stone-600">{reinvestigation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lock} color="indigo" title="Special Access Programs (SAPs): Above TS/SCI">
              <p>
                At the top of the classification hierarchy are Special Access Programs — sometimes
                called &quot;black programs&quot; — which carry restrictions beyond SCI. SAPs are
                the most tightly controlled programs in the government, with separate read-ins
                required even for personnel who hold active TS/SCI. The program office controls
                access, not just the clearance authority. For contractors, work on a SAP typically
                comes through direct program office relationships and dedicated contract vehicles
                that are entirely outside public procurement databases.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              The practical takeaway: most cleared contractor work — especially at the small business
              level — requires a Secret clearance. Starting there is the right entry point. TS and
              TS/SCI expand your addressable market significantly but require a specific sponsoring
              requirement to pursue.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Is Your Business Ready for Cleared Contract Work?
                </h3>
                <p className="text-indigo-100 text-sm mb-4">
                  Check your eligibility for set-aside programs and see which cleared contract vehicles
                  match your capabilities — free in under two minutes.
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
            id="fcl-vs-pcl"
            number="03"
            title="Facility Clearances vs. Personal Clearances"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Two distinct and separately-granted determinations must both be in place before any
              classified work can happen at your company. Conflating them is one of the most common
              misunderstandings contractors have about the clearance system.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="animate-on-scroll rounded-xl border border-indigo-200 bg-indigo-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                  <h3 className="font-black text-stone-900">Facility Clearance (FCL)</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Granted to the <strong>legal entity</strong> — your company, LLC, or corporation.
                  Authorizes the organization to receive, store, transmit, and safeguard classified
                  material at the specified level (Confidential, Secret, or Top Secret).
                </p>
                <div className="space-y-2">
                  {[
                    "Based on physical security infrastructure, IT systems, and FOCI assessment",
                    "Requires a designated Facility Security Officer (FSO) — must be a cleared U.S. citizen employee",
                    "Maintained through periodic DCSA industrial security assessments",
                    "Governed by the NISPOM (32 CFR Part 117)",
                    "Tied to a specific physical location; each facility requires its own FCL",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-stone-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-on-scroll rounded-xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="font-black text-stone-900">Personnel Security Clearance (PCL)</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Granted to <strong>individual employees</strong>. Authorizes that person to access
                  classified information up to the granted level — but only within a cleared facility
                  and only when there is a documented need to know.
                </p>
                <div className="space-y-2">
                  {[
                    "Based on a background investigation of character, financial history, foreign contacts, and loyalty",
                    "Each employee must be individually investigated and adjudicated",
                    "Holding a PCL at a cleared company is not automatic — each person is separately processed",
                    "Access tracked in DISS (Defense Information System for Security) — replaced JPAS in 2021",
                    "The 'need to know' determination is separate from and additional to the PCL grant",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-stone-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Both must exist simultaneously for classified work to occur. A company can hold an FCL
              at the Top Secret level, but if none of its employees hold TS PCLs, no classified work
              can happen. Conversely, an employee might hold an active Secret PCL from prior military
              service — but that clearance cannot be used at your company until the company holds
              an FCL and the employee&apos;s PCL is transferred to your facility in DISS.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Key Management Personnel (KMPs) — your CEO, board members, and others who can
              influence company security posture — must all individually hold PCLs at or above the
              facility clearance level. This is the most common surprise for small businesses
              entering the process: the entire executive team needs to be investigated.
            </p>

            <Callout icon={Shield} color="sky" title="Classified IT Systems: A Third Layer">
              <p>
                Beyond FCL and PCL, if your classified work involves processing classified information
                on computer systems, those systems must be separately accredited. DCSA oversees
                approximately 5,600 classified computer systems under the NISP. Accreditation
                requires following the Risk Management Framework (RMF) and getting DCSA approval.
                The first time a small business goes through this process — standing up a Closed Area
                or a classified workstation network — it is frequently the longest and most
                technically demanding part of getting into cleared work.
              </p>
            </Callout>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="sponsorship-process"
            number="04"
            title="How the Sponsorship Process Actually Works"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              This is the rule that stops most small businesses before they start:{" "}
              <strong className="text-stone-800">you cannot apply for a facility clearance on your own.</strong>{" "}
              A government agency or cleared prime contractor must sponsor your company. The government
              requires a demonstrable classified need — a contract or subcontract — before it will
              process an FCL application.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This creates a classic chicken-and-egg problem: you need a cleared contract to get a
              clearance, but many cleared contracts require a clearance to bid. The solution is
              understanding the two legitimate pathways into sponsorship.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Government Agency Sponsorship (Direct)",
                  icon: Building2,
                  detail:
                    "A contracting officer at a government agency awards you a contract that contains a classified requirement. The DD Form 254 (Contract Security Classification Specification) — the legal document that specifies what classified information is involved — is transmitted to DCSA. This triggers the FCL process. This is the most direct path and requires that you win a classified prime contract first, which generally means you need to respond to a solicitation that either did not require an existing clearance, or where the contracting officer granted a Facility Clearance in-process determination allowing you to bid.",
                },
                {
                  step: "02",
                  title: "Cleared Prime Contractor Sponsorship (Subcontracting)",
                  icon: Users,
                  detail:
                    "A cleared prime contractor names your company as a subcontractor on a classified program and sponsors you for an FCL. The prime submits a sponsorship request to DCSA that includes the classified subcontract, the level of access required, and a copy of the DD Form 254 flowing down from the government. This is the most common entry point for small businesses — getting on a cleared prime&apos;s subcontracting team, performing the work, and using that relationship to obtain your own FCL.",
                },
              ].map(({ step, title, icon: Icon, detail }) => (
                <div key={step} className="animate-on-scroll flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center">
                      <span className="font-black text-indigo-700 text-sm">{step}</span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-indigo-600" />
                      <h3 className="font-black text-stone-900">{title}</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-black text-stone-900 mb-4">
              The FCL Application Process: Step by Step
            </h3>

            <div className="space-y-3 my-6">
              {[
                {
                  n: 1,
                  title: "Receive a sponsorship letter or DD Form 254",
                  detail: "Your government customer or prime contractor sends the sponsorship package to DCSA. This is the legal trigger for the process.",
                },
                {
                  n: 2,
                  title: "Register in DCSA's NISS portal",
                  detail: "The National Industrial Security System (NISS) is the online platform where all NISP transactions occur. The FSO you designate will manage your company's profile here.",
                },
                {
                  n: 3,
                  title: "Submit the FCL package",
                  detail: "Documents include: Certificate Pertaining to Foreign Interests (SF-328), corporate structure documentation, ownership information, key management personnel list, and signed NISPOM acknowledgment.",
                },
                {
                  n: 4,
                  title: "DCSA assesses Foreign Ownership, Control, or Influence (FOCI)",
                  detail: "FOCI is the most common complicating factor. If your company has foreign investors, foreign parent entities, foreign nationals on the board, or foreign-sourced financing, DCSA will require mitigation — ranging from a simple Board Resolution to a full Proxy Agreement or Special Security Agreement, which can add months to the process.",
                },
                {
                  n: 5,
                  title: "Key Management Personnel obtain Personal Security Clearances",
                  detail: "Every KMP — CEO, president, directors — must individually undergo a background investigation. Their PCLs must be granted before the FCL can be issued at the corresponding level.",
                },
                {
                  n: 6,
                  title: "Designate your Facility Security Officer (FSO)",
                  detail: "The FSO must be a U.S. citizen employee of your company and must be cleared at or above the FCL level. The FSO is responsible for daily NISPOM compliance, security education, incident reporting, and access management. FSOs at small businesses typically complete the DCSA FSO Orientation and Program Management courses.",
                },
                {
                  n: 7,
                  title: "DCSA facility inspection and FCL grant",
                  detail: "A DCSA Industrial Security Representative (IS Rep) will inspect your facility to verify physical security controls, document safeguarding procedures, and classified IT accreditation if applicable. Once satisfied, the FCL is granted and recorded in DISS.",
                },
              ].map(({ n, title, detail }) => (
                <div key={n} className="animate-on-scroll flex gap-4 bg-stone-50 rounded-xl border border-stone-200 p-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-black">
                    {n}
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 text-sm">{title}</p>
                    <p className="text-stone-500 text-xs mt-1 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="The FOCI Problem for Growing Companies">
              <p>
                Foreign Ownership, Control, or Influence is the number one FCL complication for
                modern small businesses — particularly startups that have taken venture capital from
                funds with foreign limited partners, companies with foreign co-founders who are
                still on the board, or subsidiaries of foreign parent companies. FOCI does not
                automatically disqualify you, but it requires a mitigation agreement with DCSA.
                The most restrictive form — a Proxy Agreement or Special Security Agreement — can
                effectively require separating the cleared facility operations from the foreign
                influence. Engage a cleared facility consultant or national security attorney before
                you start the process if foreign ownership is any part of your company structure.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="processing-times"
            number="05"
            title="Current Processing Times: What to Expect in 2026"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The security clearance backlog was a persistent crisis through 2024. It has improved
              substantially since then — a fact that changes the planning calculus for companies
              considering cleared market entry.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Period</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Secret (Tier 3)</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Top Secret (Tier 5)</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">Pending Backlog</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { period: "FY2023 Q3", secret: "94 days", ts: "146 days", backlog: "~170,000 cases" },
                    { period: "FY2024 Q3", secret: "140 days", ts: "241 days", backlog: "~260,000 cases" },
                    { period: "Sep 2024", secret: "~145 days", ts: "~243 days", backlog: "291,200 (peak)" },
                    { period: "Apr 2025", secret: "~138 days", ts: "~243 days", backlog: "222,700 (–24%)" },
                    { period: "Jan 2026", secret: "~156 days", ts: "est. 220–230 days", backlog: "~100,000 (–65%)" },
                  ].map(({ period, secret, ts, backlog }, i) => (
                    <tr key={period} className={i === 4 ? "bg-indigo-50" : "hover:bg-stone-50"}>
                      <td className={`px-4 py-3 font-${i === 4 ? "black text-indigo-700" : "medium text-stone-700"}`}>{period}</td>
                      <td className="px-4 py-3 text-stone-600">{secret}</td>
                      <td className="px-4 py-3 text-stone-600">{ts}</td>
                      <td className={`px-4 py-3 text-${i === 4 ? "indigo-700 font-bold" : i === 2 ? "red-600 font-bold" : "stone-500"}`}>{backlog}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The backlog drop from 291,200 to roughly 100,000 cases is real and significant. DCSA
              achieved it through a combination of dedicated &quot;tiger team&quot; investigative
              capacity and the increasing coverage of Continuous Vetting (CV), which eliminates the
              need for scheduled periodic reinvestigations. Every person enrolled in CV is one fewer
              reinvestigation pulling from investigative capacity.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              What the averages don&apos;t tell you: processing times vary significantly based on
              investigation complexity. A first-time applicant with straightforward foreign contacts
              and clean financial history may clear in 60-90 days. An applicant with extensive
              foreign travel, foreign nationals in their immediate family, financial issues, or gaps
              in employment history will take considerably longer — sometimes 9-18 months for a
              Tier 5, even in 2026.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              <strong className="text-stone-800">FCL timelines are separate from PCL timelines.</strong>{" "}
              A straightforward FCL for a small business with U.S. owners, no FOCI concerns, and
              cleared key personnel can complete in 45-90 days. FOCI complications can extend this
              to 12 months or more. Budget the longer timeline when planning your first cleared
              contract pursuit.
            </p>

            <Callout icon={RefreshCw} color="emerald" title="Interim Clearances: How to Start Work Before Investigation Completes">
              <p>
                An interim PCL grants access to classified information at a lower level while the
                full investigation is pending. DCSA can grant interim Secret clearances relatively
                quickly — sometimes within weeks — based on a partial records check. Interim Top
                Secret is harder to obtain and not always granted. For contractors who need to
                start work while a full investigation proceeds, interim clearances are the practical
                answer — but they are granted at the discretion of the adjudicating authority, not
                on request.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="costs"
            number="06"
            title="What It Actually Costs (FY2026 DCSA Rates)"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              DCSA published official FY2025 and FY2026 billing rates in Financial Information
              Notice (FIN) 24-01. Rates effective October 1, 2025 (the start of FY2026) increased
              10% for Tier 3 and Tier 5 investigations — part of DCSA&apos;s multi-year move toward
              full-cost recovery pricing. Expect annual increases to continue.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Critically: <strong className="text-stone-800">applicants are never directly charged
              for their investigation.</strong> These costs are borne by the sponsoring government
              agency or, in subcontracting scenarios, allocated between the prime and subcontractor
              through the contract. As a small business, your investigation cost exposure depends
              entirely on how your classified contract or subcontract is structured.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Investigation Type</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Clears For</th>
                    <th className="px-4 py-3 font-bold text-stone-700">FY2025 Rate</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">FY2026 Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { type: "Tier 1", for: "Low-risk, non-sensitive positions", fy25: "$191", fy26: "$197" },
                    { type: "Tier 2", for: "Moderate-risk public trust positions", fy25: "$442", fy26: "$455" },
                    { type: "Tier 3", for: "Secret / Confidential clearance", fy25: "$415", fy26: "$455", highlight: true },
                    { type: "Tier 4", for: "High-risk public trust positions", fy25: "$4,330", fy26: "$4,460" },
                    { type: "Tier 5 (Standard)", for: "Top Secret clearance", fy25: "$5,355", fy26: "$5,890", highlight: true },
                    { type: "Tier 5 (Priority / Expedited)", for: "Top Secret, expedited processing", fy25: "$5,785", fy26: "$6,361" },
                    { type: "International Coverage (add-on)", for: "Applicants with foreign exposure", fy25: "~$900", fy26: "~$927" },
                    { type: "Enhanced Subject Interview (add-on)", for: "Triggered by investigation findings", fy25: "~$960", fy26: "~$989" },
                  ].map(({ type, for: forLabel, fy25, fy26, highlight }) => (
                    <tr key={type} className={highlight ? "bg-indigo-50" : "hover:bg-stone-50"}>
                      <td className={`px-4 py-3 font-${highlight ? "bold text-indigo-700" : "medium text-stone-700"}`}>{type}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{forLabel}</td>
                      <td className="px-4 py-3 text-stone-500">{fy25}</td>
                      <td className={`px-4 py-3 font-${highlight ? "bold text-indigo-700" : "medium text-stone-700"}`}>{fy26}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The investigation fee is only part of the real cost. Here is what companies typically
              fail to budget:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  item: "Cleared talent salary premium",
                  detail: "Mid-career TS/SCI professionals command $30,000–$45,000 more annually than equivalent uncleaned positions. This premium is a recurring cost embedded in your direct labor rates.",
                  icon: DollarSign,
                },
                {
                  item: "FSO time and training",
                  detail: "Your designated FSO must complete mandatory DCSA training courses and spend ongoing time managing DISS, security education, visit requests, and incident reporting. At a small company, this is typically 10-30% of someone's time.",
                  icon: Users,
                },
                {
                  item: "Physical security infrastructure",
                  detail: "Depending on the FCL level and classified storage requirements, you may need to build or retrofit a Closed Area, Vault, or at minimum a GSA-approved security container. Costs range from a few thousand dollars to six figures.",
                  icon: Lock,
                },
                {
                  item: "Classified IT accreditation",
                  detail: "If your work involves processing classified data on computers, those systems must be accredited under RMF. This typically requires a security assessment, system security plan, and ongoing monitoring — often the most time- and cost-intensive piece for tech-focused contractors.",
                  icon: Shield,
                },
                {
                  item: "Cleared legal and consulting support",
                  detail: "Particularly for FOCI mitigation or the first FCL application, many small businesses engage national security attorneys or cleared facility consultants. Fees typically run $5,000–$30,000 depending on complexity.",
                  icon: FileText,
                },
                {
                  item: "Personnel investigation attrition",
                  detail: "Not every employee you send through a Tier 5 investigation will receive a favorable adjudication. Planning for a 5-10% clearance denial rate, especially on TS investigations, is realistic.",
                  icon: AlertTriangle,
                },
              ].map(({ item, detail, icon: Icon }) => (
                <div key={item} className="animate-on-scroll bg-stone-50 rounded-xl border border-stone-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-indigo-600" />
                    <p className="font-bold text-stone-800 text-sm">{item}</p>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-10 rounded-2xl border-2 border-stone-200 p-8 bg-stone-50">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Track Cleared Contract Opportunities in Your Pipeline
                </h3>
                <p className="text-stone-500 text-sm mb-4">
                  CapturePilot monitors DoD, DHS, and agency-specific contract vehicles for
                  opportunities aligned to your capabilities — including cleared work and upcoming
                  recompetes. Start your free trial and see what&apos;s in market.
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
            id="agencies-contracts"
            number="07"
            title="Which Contracts and Agencies Require Clearances"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Security clearance requirements are not uniformly distributed across federal agencies.
              Some agencies issue almost no clearances; others require TS/SCI as the baseline for
              virtually every position. Understanding where the cleared work lives is essential
              before deciding which market to target.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  agency: "Department of Defense (DoD)",
                  share: "80%+ of all clearances granted",
                  level: "Predominantly Secret; TS for senior program roles",
                  focus: "Weapons programs, military IT, logistics, base operations, intelligence support, DARPA R&D, defense systems engineering",
                  vehicles: "Agency-specific IDIQs, OASIS+, SEWP, GSA MAS (for unclassified portions), and classified contract vehicles not publicly listed",
                  icon: Shield,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  agency: "Intelligence Community (IC)",
                  share: "NSA, CIA, NRO, NGA, DIA, and 14 IC agencies",
                  level: "TS/SCI as baseline; often requires counterintelligence or full-scope polygraph",
                  focus: "Intelligence analysis support, signals intelligence, geospatial analysis, all-source intelligence, cyber operations",
                  vehicles: "Classified acquisition vehicles (SITE, BEST, DECADE); rarely appear on SAM.gov",
                  icon: Lock,
                  color: "border-indigo-200 bg-indigo-50",
                  iconColor: "text-indigo-600",
                },
                {
                  agency: "Department of Homeland Security (DHS)",
                  share: "Significant; CBP, TSA, CISA, Secret Service all issue clearances",
                  level: "Secret predominant; TS for senior program and cyber roles",
                  focus: "Border security IT, cybersecurity operations, critical infrastructure protection, law enforcement analytics",
                  vehicles: "DHS EAGLE II, PACTS, CISA-specific vehicles; many procurements posted publicly on SAM.gov",
                  icon: Building2,
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                },
                {
                  agency: "Department of Energy (DOE)",
                  share: "Primarily at national laboratories and weapons programs",
                  level: "DOE uses 'Q' (equivalent to TS) and 'L' (equivalent to Secret) clearances with reciprocity to DoD",
                  focus: "Nuclear weapons design and production, energy research, national laboratory operations, nonproliferation",
                  vehicles: "M&O contracts for national labs; management and operating structures unique to DOE",
                  icon: Layers,
                  color: "border-amber-200 bg-amber-50",
                  iconColor: "text-amber-600",
                },
              ].map(({ agency, share, level, focus, vehicles, icon: Icon, color, iconColor }) => (
                <div key={agency} className={`animate-on-scroll rounded-xl border p-6 ${color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                    <h3 className="font-black text-stone-900">{agency}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Clearance Share</p>
                      <p className="text-sm text-stone-700 font-medium mb-3">{share}</p>
                      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Level Required</p>
                      <p className="text-sm text-stone-600">{level}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Contract Focus</p>
                      <p className="text-sm text-stone-600 mb-3">{focus}</p>
                      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Key Vehicles</p>
                      <p className="text-sm text-stone-600">{vehicles}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Target} color="indigo" title="GSA OASIS+ and Cleared Professional Services">
              <p>
                GSA&apos;s OASIS+ (One Acquisition Solution for Integrated Services) is the
                government-wide professional services vehicle that carries significant cleared
                work. OASIS+ Small Business has separate pools for different labor categories,
                and task orders on OASIS+ SB can include classified work provisions. Getting on
                OASIS+ SB is one of the best vehicle plays for a small business seeking cleared
                professional services work — it gives you access across all federal agencies
                without having to get on dozens of individual vehicles.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Track which cleared contract vehicles are running new solicitations and which have
              upcoming recompetes using{" "}
              <Link href="/features/intelligence" className="text-indigo-700 hover:underline font-medium">
                CapturePilot&apos;s market intelligence
              </Link>. Many cleared vehicle task orders are posted on SAM.gov with limited
              competition pools — and most contractors never see them because they are not
              monitoring the right agency portals.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="small-business"
            number="08"
            title="How Small Businesses Navigate the Cleared Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The most persistent myth in cleared contracting is that it is closed to small
              businesses. The data says otherwise. Small businesses represent approximately{" "}
              <strong className="text-stone-800">65% of the 12,500 facilities in the NISP</strong>.
              The cleared market has a small business problem — not enough qualified cleared small
              businesses for the government&apos;s demand — which means the competitive environment
              for cleared small business set-asides is often better than the open market.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "Strategy 1: Enter as a Subcontractor First",
                  icon: Users,
                  detail:
                    "The fastest path into cleared work for a company without an FCL is to join a cleared prime&apos;s team on a classified program. You perform non-classified portions of the work — or work as an associate contractor — while the prime sponsors your FCL application. Once your FCL is granted and your key personnel are cleared, you begin performing the classified portions. This builds past performance in the cleared market without the upfront cost and time of a standalone FCL application.",
                },
                {
                  title: "Strategy 2: Hire Cleared Personnel Before You Need the FCL",
                  icon: Star,
                  detail:
                    "Cleared personnel are rare and in demand. If you anticipate pursuing cleared work in the next 12-24 months, hiring employees who already hold active Secret or Top Secret PCLs — even before your company has an FCL — is a strategic investment. When you win your first classified contract or subcontract, you can transfer their existing clearances to your facility in DISS relatively quickly, rather than waiting for new investigations.",
                },
                {
                  title: "Strategy 3: Target FCL-Eligible Solicitations",
                  icon: Target,
                  detail:
                    "Some classified solicitations explicitly allow companies without an existing FCL to bid, with the understanding that the FCL process will begin immediately upon award. These are marked as 'Interim Facility Clearance' or similar in the solicitation. Watching for these opportunities on SAM.gov — particularly from DoD and DHS — is how many small businesses win their first classified prime contract.",
                },
                {
                  title: "Strategy 4: Use the Set-Aside Ecosystem",
                  icon: Award,
                  detail:
                    "Cleared contract set-asides exist across all major certification programs: 8(a) sole-source classified contracts, SDVOSB set-asides for cleared defense work, and HUBZone price preferences apply equally in the cleared market. Holding a certification and a facility clearance is a powerful combination — you compete in a significantly smaller pool of cleared, certified small businesses.",
                },
              ].map(({ title, icon: Icon, detail }) => (
                <div key={title} className="animate-on-scroll flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-black text-stone-900 mb-2">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="violet" title="The FSO Is Your Most Important First Hire for Cleared Work">
              <p>
                If you are serious about the cleared market, designating a capable, dedicated FSO
                is more important than almost any other organizational decision. The FSO manages your
                NISPOM compliance, handles all DISS transactions, conducts security education,
                reports adverse information and foreign contacts, and is your point of contact with
                your DCSA IS Rep. A weak FSO is the fastest path to a DCSA adverse assessment,
                which can result in FCL suspension or revocation. Many small cleared businesses hire
                their FSO as a part-time consultant from the pool of retired DCSA or government FSOs;
                others dedicate an existing staff member. The key is competence — this is not a role
                to fill by default.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Use{" "}
              <Link href="/features/pipeline" className="text-indigo-700 hover:underline font-medium">
                CapturePilot&apos;s pipeline management tools
              </Link>{" "}
              to track cleared opportunities from first awareness through proposal submission.
              The long timelines in cleared procurement — both for FCL establishment and for
              the acquisition process itself — mean that pipeline visibility 12-24 months out
              is essential for effective planning.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="trusted-workforce"
            number="09"
            title="Trusted Workforce 2.0: How the System Is Changing"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Trusted Workforce 2.0 (TW 2.0) is the most consequential reform to the U.S. security
              clearance system in decades — and it is currently mid-implementation. Understanding
              what has changed and what is still in transition is essential for any company planning
              cleared market entry.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  change: "Three-Tier Consolidation Replaces Five-Tier System",
                  status: "Final rule published July 2024",
                  statusColor: "bg-emerald-100 text-emerald-700",
                  detail:
                    "OPM and ODNI published final rules in July 2024 consolidating the legacy five-tier framework into three tiers: Low, Moderate, and High risk. This aligns investigation types across all executive branch agencies, replacing the patchwork of agency-specific requirements that caused reciprocity failures. For contractors, this means cleaner transitions between federal agencies and between government and contractor roles.",
                },
                {
                  change: "Continuous Vetting (CV) for the Full National Security Workforce",
                  status: "Fully deployed by Sep 2025",
                  statusColor: "bg-emerald-100 text-emerald-700",
                  detail:
                    "The entire cleared population — government and contractor — was enrolled in CV by September 2025. CV monitors financial records, criminal records, and other databases on an ongoing basis, flagging issues as they arise rather than waiting for the 5-year or 10-year periodic reinvestigation cycle. For contractors, this means faster identification of employees with emerging issues, but also faster response to issues that might previously have gone undetected for years.",
                },
                {
                  change: "Reciprocity: 5-Business-Day Target Under SEAD 7",
                  status: "Policy established; execution uneven",
                  statusColor: "bg-amber-100 text-amber-700",
                  detail:
                    "Security Executive Agent Directive 7 (SEAD 7) sets a target of approximately five business days for reciprocity determinations — meaning an agency receiving a fully cleared individual should complete the transfer within that window. In practice, DoD-to-DoD and DoD-to-contractor transfers are often close to this target. But transfers involving IC agencies, particularly those with polygraph requirements, still take considerably longer. A GAO survey found that 45% of contractors reported quicker interim determinations, but 52% still struggled to get status information on pending investigations.",
                },
                {
                  change: "NISPOM Codified as Binding Federal Regulation",
                  status: "In effect since February 24, 2021",
                  statusColor: "bg-emerald-100 text-emerald-700",
                  detail:
                    "The NISPOM transitioned from a DoD manual (DoD 5220.22-M) to binding federal regulation at 32 CFR Part 117. The most recent amendment was published in December 2023. This means NISPOM violations are no longer merely administrative — they are violations of federal regulation. The compliance consequences are more serious, and the government&apos;s ability to enforce them has expanded. Companies operating under the NISPOM need to treat it with the same rigor as any other federal regulatory regime.",
                },
              ].map(({ change, status, statusColor, detail }) => (
                <div key={change} className="animate-on-scroll rounded-xl border border-stone-200 p-6 hover-lift">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-black text-stone-900">{change}</h3>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${statusColor}`}>
                      {status}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="What TW 2.0 Has NOT Fixed Yet">
              <p>
                The GAO has flagged persistent implementation gaps. Data sharing between the
                approximately 80 executive branch agencies that grant clearances remains
                inconsistent — the technical infrastructure for seamless reciprocity is
                still being built. The Intelligence Community&apos;s additional requirements
                (polygraphs, extended background checks, program-specific indoctrinations) mean
                that reciprocity into IC agencies remains unreliable, even for individuals who
                hold active TS/SCI from DoD programs. If your cleared market target includes
                IC agencies, budget for potential re-investigation timelines rather than
                assuming smooth reciprocity.
              </p>
            </Callout>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="clearance-strategy"
            number="10"
            title="Building a Clearance Strategy for Your Business"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The cleared market rewards patience and positioning. Companies that simply react to
              cleared opportunities as they appear — and then scramble to get an FCL — lose years
              of runway. The right approach is a deliberate sequence.
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  step: "01",
                  title: "Decide whether cleared work is a strategic fit",
                  detail:
                    "Ask honestly: does your company have the technical or operational capabilities that translate to classified programs? Defense IT, engineering, intelligence analysis support, cybersecurity, and program management are the most common entry points. Janitorial, facilities management, and administrative services companies can and do hold FCLs, but the path is harder. The best cleared market entries are from companies whose existing commercial or open government work has strong adjacency to defense programs.",
                },
                {
                  step: "02",
                  title: "Assess your FOCI exposure before anything else",
                  detail:
                    "If your company has any foreign ownership, foreign investment, foreign nationals on your board or in key management positions, or foreign-source financing, consult a national security attorney before starting the FCL process. FOCI mitigation can be accomplished — but it must be structured correctly, and it takes time. Finding this out mid-application is the most expensive scenario.",
                },
                {
                  step: "03",
                  title: "Identify and hire your FSO",
                  detail:
                    "Your FSO is the operational core of your security program. If you are serious about cleared work, identify this person before you need them — ideally someone with prior government or cleared contractor FSO experience. The FSO must be a U.S. citizen employee, not a consultant who works from outside your facility.",
                },
                {
                  step: "04",
                  title: "Get your key personnel into investigations early",
                  detail:
                    "Once you have a sponsoring requirement, KMPs need to be investigated. The faster this happens, the faster the FCL can be granted. Have personal history statements (SF-86) filled out and ready to submit. The most common delay at this stage is incomplete paperwork, not investigation complexity.",
                },
                {
                  step: "05",
                  title: "Pursue a cleared prime teaming relationship",
                  detail:
                    "Before you have your own FCL, the fastest path to cleared experience is joining an established prime&apos;s team. Cleared prime contractors — particularly those on government-wide vehicles like OASIS+ — actively seek cleared and certifiable small business partners for their small business subcontracting plans. Contact the small business liaison officers at major defense primes whose work aligns with your capabilities.",
                },
                {
                  step: "06",
                  title: "Win your first cleared contract at an appropriate scope",
                  detail:
                    "Your first cleared prime contract should align with the past performance you already have — scaled appropriately. A company that has successfully managed $5M DoD IT subcontracts should not bid a $50M classified systems integration contract as its first prime effort. Win something you can perform at excellence, collect strong CPARS ratings, and use that as the foundation for larger cleared opportunities.",
                },
                {
                  step: "07",
                  title: "Use CapturePilot to manage cleared opportunity pursuit",
                  detail:
                    "Tracking cleared opportunities requires monitoring DoD acquisition portals, agency-specific forecast documents, expiring contracts, and prime subcontracting opportunities simultaneously — across a timeline that is often 18-24 months from first awareness to award. Use CapturePilot&apos;s pipeline and intelligence tools to organize this systematically rather than chasing opportunities reactively.",
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

            <Callout icon={XCircle} color="red" title="Clearance Mistakes That Cost Small Businesses Years">
              <ul className="space-y-2">
                {[
                  "Assuming you can apply for a clearance proactively — the sponsorship requirement is non-negotiable, so start by finding a cleared partner or opportunity, not by filling out forms",
                  "Letting an employee's SF-86 sit incomplete for weeks — every delay in the personal history statement directly delays the FCL grant",
                  "Starting the FCL process without resolving FOCI first — a foreign investor discovered mid-application can halt the process for months",
                  "Not designating an FSO before the application — DCSA requires one as part of the FCL package, and finding a qualified person after you need them is hard",
                  "Allowing cleared personnel's PCLs to go inactive (more than 24 months without classified access) — reactivating an inactive clearance is nearly as slow as a new investigation",
                  "Not maintaining compliance with the NISPOM after FCL grant — adverse security assessments can result in FCL suspension, which effectively terminates your ability to perform classified work",
                ].map((mistake) => (
                  <li key={mistake} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{mistake}</span>
                  </li>
                ))}
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              For a step-by-step checklist tailored to your specific capabilities and certifications,
              use the{" "}
              <a href="/resources/bid-checklist" className="text-indigo-700 hover:underline font-medium">
                CapturePilot bid readiness checklist
              </a>
              {" "}— it covers cleared market prerequisites alongside the standard federal
              contracting requirements.
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
                  href: "/blog/cmmc-compliance-dod-contractors",
                  title: "CMMC 2.0 Compliance: What Every DoD Contractor Must Know Before the Deadline",
                  category: "Strategy",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process: How Winning Contractors Find and Win Deals",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-teaming-agreement",
                  title: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts",
                  category: "Strategy",
                },
                {
                  href: "/blog/bid-no-bid-decision-framework",
                  title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits Before They Start",
                  category: "Strategy",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline: From Discovery to Award",
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
            <Shield className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-black mb-3">
              Ready to Pursue Cleared Government Contracts?
            </h3>
            <p className="text-indigo-100 text-sm max-w-lg mx-auto mb-6">
              CapturePilot tracks DoD, DHS, and IC-adjacent opportunities aligned to your
              capabilities — so you spot cleared contract targets before competitors know they exist.
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
