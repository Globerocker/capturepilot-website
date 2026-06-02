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
  Zap,
  Building2,
  TrendingUp,
  Users,
  FileText,
  Clock,
  Award,
  BarChart3,
  Briefcase,
  XCircle,
  Star,
  Search,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-staffing", label: "Why Federal Staffing Is a Real Market" },
  { id: "market-size", label: "Market Size and the Agencies That Spend Most" },
  { id: "naics-codes", label: "NAICS Codes for Staffing Firms" },
  { id: "gsa-schedule", label: "GSA Schedule 736 TAPS: Your On-Ramp" },
  { id: "va-opportunity", label: "The VA's $23 Billion Staffing Opportunity" },
  { id: "service-contract-act", label: "Service Contract Act: Pricing It Right" },
  { id: "set-asides", label: "Set-Asides and Certifications That Matter" },
  { id: "proposal-formula", label: "What Agencies Actually Evaluate" },
  { id: "step-by-step", label: "Your Path to First Federal Staffing Contract" },
  { id: "mistakes", label: "Mistakes That Sink Staffing Agency Bids" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red";
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
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
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

export default function StaffingGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-violet-50 to-white">
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
              Staffing Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Briefcase className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Staffing and Temporary Services{" "}
            <span className="gradient-text">Government Contracts: A Growing Market</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Federal agencies collectively obligated over{" "}
            <strong className="text-stone-700">$1.7 billion annually on temporary help services</strong>{" "}
            — and that was 2018 data. The VA alone issued a{" "}
            <strong className="text-stone-700">$23 billion staffing IDIQ</strong> in 2024 as a
            veteran set-aside. If you run a staffing agency, the federal government is your largest
            untapped client. Here is how to reach it.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 2, 2026</span>
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
            id="why-staffing"
            number="01"
            title="Why Federal Staffing Is a Real Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government cannot function without contingent labor. Surge hiring for census
              operations, clinical staff for VA hospitals, IT support for system modernization programs,
              administrative personnel during reorganizations — agencies have a structural, recurring
              need for workers they do not want to hire permanently. That demand flows through staffing
              contracts awarded to private firms.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Between 2008 and 2018, federal obligations for temporary help services jumped from{" "}
              <strong className="text-stone-700">$323 million to $1.7 billion</strong> — a fivefold
              increase. The trend has not reversed. In fiscal year 2025, the federal government
              committed approximately{" "}
              <strong className="text-stone-700">$793 billion on contracts overall</strong>, with
              workforce services consistently among the fastest-growing categories. The VA&apos;s 2024
              award of a{" "}
              <strong className="text-stone-700">$23 billion staffing IDIQ</strong> to eight
              firms is a signal, not an outlier.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Commercial staffing firms underestimate how accessible this market is. Unlike defense
              technology contracts, federal staffing awards do not require security clearances for the
              company itself, exotic technical capabilities, or years of prior federal past performance
              to enter. The qualifications that win a federal staffing contract — experienced recruiters,
              proven fill rates, compliant HR practices — are the same ones that run any quality
              staffing operation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The barrier is mostly informational. Most commercial staffing firms simply do not know
              which vehicles to pursue, which NAICS codes to register, or how federal pricing works.
              This guide covers all of it.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$1.7B+",
                  label: "Annual federal temporary help services obligations (2018 baseline — higher now)",
                  color: "text-violet-600 bg-violet-50 border-violet-100",
                },
                {
                  icon: TrendingUp,
                  stat: "5×",
                  label: "Growth in federal staffing spending from 2008 to 2018 — and still climbing",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: Award,
                  stat: "$23B",
                  label: "VA Integrated Critical Staffing Program IDIQ — the largest recent staffing vehicle",
                  color: "text-sky-600 bg-sky-50 border-sky-100",
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
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="market-size"
            number="02"
            title="Market Size and the Agencies That Spend Most"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal staffing demand cuts across every cabinet-level agency. Some departments are
              structural heavy buyers — they have large, geographically dispersed workforces with
              ongoing turnover and surge capacity needs. Others buy staffing intermittently for
              specific programs. Knowing which agencies buy most, and what they buy, lets you focus
              your business development efforts instead of chasing everything at once.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-50">
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Agency</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">What They Buy</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Set-Aside Preference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      agency: "Department of Veterans Affairs",
                      what: "Clinical staff (nurses, physicians, allied health), administrative, IT support",
                      notes: "SDVOSB/VOSB preferred; the $23B ICSP IDIQ was competed as SDVOSB set-aside",
                    },
                    {
                      agency: "Department of Defense",
                      what: "Administrative, IT, logistics, program support; some cleared positions",
                      notes: "Largest federal buyer overall ($470B in FY23); significant small business set-aside activity",
                    },
                    {
                      agency: "Department of Homeland Security",
                      what: "Administrative support, IT, vetting and adjudication staff, surge hiring",
                      notes: "8(a) and small business set-asides common; some positions require background investigations",
                    },
                    {
                      agency: "General Services Administration",
                      what: "Administrative, facilities management support, clerical",
                      notes: "GSA MAS Schedule 736 is the primary vehicle — GSA awards against its own schedule",
                    },
                    {
                      agency: "Department of Health and Human Services",
                      what: "Public health professionals, administrative, IT, data entry",
                      notes: "Significant surge demand (pandemic demonstrated this); diverse NAICS usage",
                    },
                    {
                      agency: "Department of Justice",
                      what: "Clerical, legal support, administrative, data processing",
                      notes: "Strong set-aside usage; background investigations required for many positions",
                    },
                  ].map((row) => (
                    <tr key={row.agency} className="border-b border-stone-100 hover:bg-stone-50">
                      <td className="p-3 border border-stone-200 font-semibold text-stone-800">{row.agency}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.what}</td>
                      <td className="p-3 border border-stone-200 text-stone-500">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The VA is the most strategically compelling target for any staffing firm that holds or
              qualifies for a veteran-owned certification. The agency has a statutory obligation to
              award to SDVOSBs before any other business type — and it is buying{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-700 hover:underline">
                substantial staffing services
              </Link>{" "}
              at every VA medical center in the country. That is 170+ facilities with recurring
              clinical and administrative staffing needs.
            </p>

            <Callout icon={TrendingUp} color="violet" title="FY 2026 Defense Budget Drives Demand">
              The national defense budget for FY 2026 is $1.01 trillion — a 13% increase over FY
              2025. That spending growth translates directly into contract opportunities, including
              program support staffing. DoD agencies buy administrative, IT, and professional
              services staffing at scale. If you have the capacity to support cleared or clearable
              candidates, the defense sector is a significant growth channel.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="naics-codes"
            number="03"
            title="NAICS Codes for Staffing Firms"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The NAICS code you register under in SAM.gov determines which solicitations you appear
              eligible for and which size standards apply. Staffing companies often need multiple
              codes — the right primary code and secondary codes for your specific service lines.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Getting this wrong costs you opportunities. A contract officer running a set-aside
              market research query for NAICS 561320 will not find you if you only registered under
              561110. Register every code that legitimately describes your business.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  code: "561320",
                  label: "Temporary Help Services",
                  desc: "Your default for most staffing work. Covers providing temporary workers to client businesses. SBA small business size standard: $30 million in average annual receipts. This is the code most temporary staffing solicitations will carry.",
                  primary: true,
                  sizeStandard: "$30M",
                },
                {
                  code: "561330",
                  label: "Professional Employer Organizations",
                  desc: "Covers co-employment arrangements (PEO model). Less common in federal contracting but relevant if you provide employer-of-record services. Separate SBA size standard applies.",
                  primary: false,
                  sizeStandard: "Varies",
                },
                {
                  code: "561110",
                  label: "Office Administrative Services",
                  desc: "Applies when you are providing administrative support functions, not just placing workers. Some agencies classify light administrative staffing here.",
                  primary: false,
                  sizeStandard: "$22M",
                },
                {
                  code: "541612",
                  label: "Human Resources Consulting Services",
                  desc: "Used on contracts where the deliverable is HR program management, workforce planning, or talent acquisition strategy — not just filling positions. Relevant for larger program support contracts.",
                  primary: false,
                  sizeStandard: "$24.5M",
                },
                {
                  code: "621111",
                  label: "Offices of Physicians (except Mental Health)",
                  desc: "Relevant for clinical staffing at VA hospitals. The VA&apos;s $23B ICSP IDIQ involves providing clinical professionals — those positions fall under healthcare NAICS codes alongside staffing codes.",
                  primary: false,
                  sizeStandard: "$16.5M",
                },
              ].map((item) => (
                <div
                  key={item.code}
                  className={`rounded-xl border p-5 ${
                    item.primary
                      ? "border-blue-200 bg-blue-50"
                      : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span
                      className={`font-mono text-sm font-bold px-2 py-0.5 rounded ${
                        item.primary
                          ? "bg-blue-200 text-blue-900"
                          : "bg-stone-200 text-stone-700"
                      }`}
                    >
                      {item.code}
                    </span>
                    <span className="font-semibold text-stone-800">{item.label}</span>
                    <span className="text-xs text-stone-500 ml-auto">
                      Size std: <strong>{item.sizeStandard}</strong>
                    </span>
                    {item.primary && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The NAICS code listed on a solicitation controls which size standard applies for that
              award. Always verify the code in the actual solicitation — do not assume a staffing
              contract will use 561320. Use CapturePilot&apos;s{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                Quick Checker
              </Link>{" "}
              to instantly verify whether your revenue falls under the size standard for any NAICS
              before you bid. The{" "}
              <Link href="/blog/best-naics-codes-small-business" className="text-blue-700 hover:underline">
                best NAICS codes guide
              </Link>{" "}
              covers this in more depth if you are still building out your SAM.gov profile.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="gsa-schedule"
            number="04"
            title="GSA Schedule 736 TAPS: Your On-Ramp"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The GSA Multiple Award Schedule Temporary and Administrative Professional Staffing
              (TAPS) — historically Schedule 736 — is the most broadly accessible vehicle for
              staffing companies entering federal contracting. Once you are on it, any of the 70+
              federal agencies using GSA MAS can place orders against your contract without a
              separate competition. That is the value: one application gets you in front of the
              entire civilian federal market.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              TAPS has five Special Item Numbers (SINs), each covering a different worker category:
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 border border-stone-700 font-bold">SIN</th>
                    <th className="text-left p-3 border border-stone-700 font-bold">Category</th>
                    <th className="text-left p-3 border border-stone-700 font-bold">Typical Roles</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      sin: "736-1",
                      cat: "Administrative & Clerical Occupations",
                      roles: "Receptionists, data entry clerks, administrative assistants, office managers",
                    },
                    {
                      sin: "736-2",
                      cat: "Automatic Data Processing Occupations",
                      roles: "IT support, helpdesk, data processing, computer operators",
                    },
                    {
                      sin: "736-3",
                      cat: "General Services Support Occupations",
                      roles: "Warehouse support, facilities support, general labor, mail room",
                    },
                    {
                      sin: "736-4",
                      cat: "Information and Arts Occupations",
                      roles: "Writers, editors, graphic designers, audiovisual specialists, translators",
                    },
                    {
                      sin: "736-5",
                      cat: "Technical and Professional Occupations",
                      roles: "Engineers, accountants, analysts, scientists, program managers",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.sin}
                      className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="p-3 border border-stone-200 font-mono font-bold text-blue-700">{row.sin}</td>
                      <td className="p-3 border border-stone-200 font-semibold text-stone-800">{row.cat}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.roles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Apply for the SINs that match your actual capabilities. A generalist staffing firm can
              apply for multiple SINs in a single offer — but each SIN requires you to demonstrate
              experience and submit commercial pricing. Do not apply for SINs where you cannot show
              verifiable placement history, because GSA will ask for it.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
              {[
                {
                  title: "What GSA MAS Gets You",
                  badge: "Advantages",
                  badgeColor: "bg-emerald-100 text-emerald-700",
                  points: [
                    "Access to 70+ agencies with one contract",
                    "Agencies can order directly — no separate competition required",
                    "Rates pre-negotiated; agencies know your price upfront",
                    "Legitimate government credentialing that opens doors to BPAs",
                    "Required for many task orders that cite GSA as the vehicle",
                  ],
                  icon: CheckCircle2,
                  iconColor: "text-emerald-600",
                },
                {
                  title: "What the Process Requires",
                  badge: "Requirements",
                  badgeColor: "bg-amber-100 text-amber-700",
                  points: [
                    "SAM.gov registration with TAPS-relevant NAICS codes",
                    "Two years of documented commercial staffing experience",
                    "Financial statements to demonstrate stability",
                    "3–6 months for review and negotiation (plan accordingly)",
                    "Ongoing compliance: price updates, sales reporting, audits",
                  ],
                  icon: AlertTriangle,
                  iconColor: "text-amber-600",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-stone-200 p-6 bg-stone-50 hover-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-stone-600">
                        <item.icon className={`w-4 h-4 ${item.iconColor} shrink-0 mt-0.5`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Getting on the GSA MAS is not a passive process — it demands a complete offer through
              GSA&apos;s eOffer portal, a rate negotiation session with a contracting officer, and an
              audit of your commercial pricing. The{" "}
              <Link href="/blog/gsa-schedule-guide" className="text-blue-700 hover:underline">
                GSA Schedule guide
              </Link>{" "}
              walks through the full process. Once you are on, maintaining compliance and actively
              marketing your schedule to ordering agencies is where the work continues.
            </p>

            <Callout icon={Lightbulb} color="blue" title="GSA MAS Is a Floor, Not a Ceiling">
              Being on the GSA MAS does not mean orders flow automatically. You still need to
              actively market to agency contracting officers, respond to task order RFQs posted
              against the schedule, and maintain relationships with ordering officials. The schedule
              removes the procurement barrier — you still have to sell.
            </Callout>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/20 rounded-xl shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Check Your Eligibility for Staffing Set-Asides</h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  Answer eight questions and CapturePilot tells you which set-aside programs you
                  qualify for, your SBA size standard status under NAICS 561320, and which contract
                  vehicles are your fastest path to a federal staffing award.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="va-opportunity"
            number="05"
            title="The VA's $23 Billion Staffing Opportunity"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              In early 2024, the Veterans Health Administration awarded eight companies spots on a
              10-year,{" "}
              <strong className="text-stone-700">$23 billion Integrated Critical Staffing Program (ICSP)</strong>{" "}
              IDIQ contract. The entire competition was set aside for{" "}
              <strong className="text-stone-700">service-disabled veteran-owned small businesses</strong>.
              The contract covers clinical and non-clinical staffing support, program management,
              human capital services, and other professional services to address critical staffing
              shortages across VA facilities nationwide.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              That single vehicle — won by eight SDVOSB firms — will distribute billions in task
              orders over a decade. The VA had previously run a similar contract and recompeted it
              at a dramatically larger ceiling because demand exceeded the prior vehicle&apos;s capacity.
              That pattern repeats: VA staffing vehicles get recompeted larger each cycle.
            </p>

            <Callout icon={Award} color="violet" title="Why VA Keeps Using SDVOSB Set-Asides for Staffing">
              The VA Acquisition Regulation (VAAR) requires the agency to award contracts using
              SDVOSB or VOSB set-asides whenever there is a reasonable expectation that two or more
              veteran-owned firms will submit competitive offers. For staffing requirements — where
              dozens of eligible SDVOSB firms can respond — this threshold is nearly always met. The
              VA does not just prefer veteran-owned firms; it is legally structured to award to them
              first. If you hold or qualify for SDVOSB certification, the VA&apos;s staffing market is
              specifically engineered for you. Read the{" "}
              <Link href="/blog/sdvosb-contracts-guide" className="text-blue-700 hover:underline font-semibold">
                complete SDVOSB contracting guide
              </Link>
              .
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Getting onto the ICSP IDIQ requires SDVOSB certification through the SBA&apos;s VetCert
              program. As of late 2025, the SBA cleared its VetCert backlog and processing times
              dropped to an average of 12 days. If you qualify as an SDVOSB, the only barrier to
              competing is applying. The recompete for the next VA staffing vehicle will come — and
              firms that are already known to VA contracting offices will have an enormous head start.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Even if you are not on the ICSP IDIQ, the VA issues hundreds of individual facility
              staffing solicitations each year for nursing, behavioral health, pharmacy, and
              administrative support. These smaller awards — often $500K to $5M per year — are the
              entry point. Perform on the small awards, build your past performance references, and
              compete for the IDIQ vehicle on its next cycle.
            </p>

            <div className="bg-stone-900 rounded-2xl p-6 my-8 animate-on-scroll">
              <p className="text-violet-400 font-mono text-xs mb-4 uppercase tracking-widest">VA Staffing Contract Path</p>
              <div className="space-y-3">
                {[
                  {
                    step: "1",
                    label: "Get SDVOSB or VOSB certified through SBA VetCert",
                    sub: "Processing now averages 12 days — no excuse to wait",
                  },
                  {
                    step: "2",
                    label: "Register relevant NAICS codes in SAM.gov (561320, clinical codes)",
                    sub: "Match the codes VA uses on its solicitations",
                  },
                  {
                    step: "3",
                    label: "Target individual VA medical center staffing solicitations",
                    sub: "Single-facility awards are your entry point; smaller competition pool",
                  },
                  {
                    step: "4",
                    label: "Build documented past performance at VA facilities",
                    sub: "References from VA CORs carry maximum weight in ICSP competitions",
                  },
                  {
                    step: "5",
                    label: "Compete for ICSP recompete or next VA staffing IDIQ vehicle",
                    sub: "Awardees on the current ICSP will recompete; be positioned for it",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-stone-400 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="service-contract-act"
            number="06"
            title="Service Contract Act: Pricing It Right"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The McNamara-O&apos;Hara Service Contract Act (SCA) applies to virtually every federal
              staffing contract over $2,500. It requires you to pay each worker the prevailing wage
              rate for their job classification in the county where they work — as determined by the
              Department of Labor. For staffing companies, the SCA is the single biggest pricing
              trap in federal contracting.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Many commercial staffing firms enter the federal market assuming their existing bill
              rates apply. They do not. A DOL wage determination for administrative assistants in
              Washington DC or San Francisco can be substantially higher than what you pay in your
              commercial accounts in the same market. The gap comes from SCA-mandated base wages
              plus the required health and welfare fringe benefit.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              In 2025, the Department of Labor set the SCA health and welfare fringe benefit rate
              at{" "}
              <strong className="text-stone-700">$5.55 per billable hour</strong>. That amount
              stacks on top of base wages for every hour each worker is billing on a federal contract.
              Combined with FICA, state unemployment insurance, and your workers&apos; comp burden rate,
              the real cost of a federal temp worker is significantly higher than the base wage alone.
            </p>

            <div className="bg-stone-900 rounded-2xl p-6 my-8 animate-on-scroll">
              <p className="text-emerald-400 font-mono text-xs mb-3 uppercase tracking-widest">Federal Staffing Bill Rate Build — Administrative Position</p>
              <div className="space-y-2 text-sm font-mono">
                {[
                  { label: "Base hourly wage (SCA wage determination, county-specific)", value: "varies" },
                  { label: "H&W fringe benefit (2025 DOL rate)", value: "+ $5.55/hr" },
                  { label: "FICA — Social Security & Medicare", value: "+ 7.65%" },
                  { label: "FUTA / SUTA (state & federal unemployment)", value: "+ ~1.5–2.5%" },
                  { label: "Workers&apos; compensation insurance", value: "+ 1–3% of wages" },
                  { label: "Staffing firm overhead (recruiter cost, facilities, admin)", value: "+ 15–20%" },
                  { label: "Profit / margin", value: "+ 10–18%" },
                ].map((line) => (
                  <div key={line.label} className="flex justify-between text-stone-300">
                    <span className="mr-4">{line.label}</span>
                    <span className="text-white font-bold shrink-0">{line.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-stone-700 text-xs text-stone-400">
                Pull the wage determination (WD number) from the solicitation before you build a single rate.
                Wage determinations are on SAM.gov under Wage Determinations Online.
              </div>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Price All Option Years — Not Just Year One">
              SCA wage determinations update annually. If you price all five contract years at
              today&apos;s rates, you will be paying year-5 wages at year-1 billing rates. Build in a
              labor escalation factor of 3–5% per year for option years. Some solicitations include
              an Economic Price Adjustment (EPA) clause that automatically adjusts rates — find it in
              the solicitation and use it. If there is no EPA clause, your escalation estimate in the
              proposal is your only protection.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              The SCA also requires you to notify workers of their rights under the act and maintain
              records of wage payments. These are compliance obligations that persist throughout
              performance, not just at award. Federal contracting officers and the DOL can audit SCA
              compliance — violations can result in contract termination and debarment. Build SCA
              compliance into your HR operations from day one.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For a broader look at how pricing strategy applies across contract types, the{" "}
              <Link href="/blog/government-contract-pricing-strategies" className="text-blue-700 hover:underline">
                government contract pricing guide
              </Link>{" "}
              covers cost-plus vs. fixed-price structures and how to think about your fully loaded
              labor rate in competitive proposals.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="set-asides"
            number="07"
            title="Set-Asides and Certifications That Matter"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              In FY 2023, set-aside awards accounted for{" "}
              <strong className="text-stone-700">65% of all contracting dollars awarded to small businesses</strong>{" "}
              — the highest share since data became available in 2010. For a staffing firm that
              qualifies for any set-aside program, most of your competition is competing in a smaller
              pool with fewer bidders. That math matters in every single solicitation.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  cert: "SDVOSB / VOSB",
                  icon: Award,
                  color: "border-violet-200 bg-violet-50",
                  iconColor: "text-violet-600",
                  desc: "The National Defense Authorization Act for FY2024 increased the federal SDVOSB spending goal from 3% to 5% of all prime and subcontract dollars — pushing the annual target above $31 billion. The VA&apos;s statutory preference for SDVOSBs makes this certification uniquely powerful for staffing at VA medical centers. The ICSP was competed exclusively for SDVOSBs.",
                  link: "/blog/sdvosb-contracts-guide",
                  linkText: "SDVOSB contracting guide",
                },
                {
                  cert: "8(a) Business Development",
                  icon: Star,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  desc: "8(a) sole-source awards are available up to $4.5 million for service contracts (and higher with justification). If a contracting officer at DHS, HHS, or DoD needs staffing quickly and you are in the 8(a) program, they can direct an award without competition. Early in your federal career, sole-source 8(a) awards are your fastest path to documented past performance.",
                  link: "/blog/8a-sole-source-contracts",
                  linkText: "8(a) sole source guide",
                },
                {
                  cert: "HUBZone",
                  icon: Building2,
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                  desc: "HUBZone certification gives you a 10% price evaluation preference in competitive awards — you can bid 10% higher than a non-HUBZone competitor and still win on price. For staffing firms, meeting the 35% employee residency requirement is achievable if you recruit actively in HUBZone areas, which may overlap with your existing candidate pipelines.",
                  link: "/blog/hubzone-program-guide",
                  linkText: "HUBZone program guide",
                },
                {
                  cert: "WOSB / EDWOSB",
                  icon: Users,
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                  desc: "Women-owned small business set-asides apply in industries where women-owned firms are underrepresented in federal contracting. Staffing and administrative services fall within applicable NAICS categories. Combined with local market presence, WOSB certification can make you the only fully qualified bidder on certain federal staffing requirements.",
                  link: "/blog/wosb-certification-guide",
                  linkText: "WOSB certification guide",
                },
              ].map((item) => (
                <div key={item.cert} className={`rounded-xl border p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    <h3 className="font-bold text-stone-800">{item.cert}</h3>
                  </div>
                  <p className="text-sm text-stone-600 mb-2">{item.desc}</p>
                  <Link href={item.link} className="text-xs font-semibold text-blue-700 hover:underline">
                    Read the {item.linkText} →
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Run your eligibility across all programs before you decide which to pursue. The{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                Quick Checker
              </Link>{" "}
              shows you which certifications apply to your business in minutes. The complete guide to{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-blue-700 hover:underline">
                federal contracting certifications
              </Link>{" "}
              covers requirements, timelines, and the real-world value of each program.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="proposal-formula"
            number="08"
            title="What Agencies Actually Evaluate"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal staffing solicitations are typically Best Value Trade-off or Lowest Price
              Technically Acceptable (LPTA) acquisitions. On LPTA awards, the agency selects the
              lowest-priced bidder who meets every technical requirement — there is no benefit to
              being better than minimum. On Best Value awards, non-price factors can and do
              determine the winner.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Know which evaluation method applies before you invest in proposal writing. The
              solicitation will state it explicitly. Then write to that method — not to your
              instincts about what a good proposal looks like.
            </p>

            <div className="space-y-3 my-6 animate-on-scroll">
              {[
                {
                  factor: "Price / Cost",
                  weight: "40–60%",
                  note: "Usually the dominant factor; on LPTA awards it is effectively the only factor after technical acceptability",
                  barWidth: "w-7/12",
                  barColor: "bg-blue-500",
                },
                {
                  factor: "Technical / Management Approach",
                  weight: "15–25%",
                  note: "Covers your recruitment process, quality control plan, fill rate guarantees, and handling of unfilled positions",
                  barWidth: "w-3/12",
                  barColor: "bg-emerald-500",
                },
                {
                  factor: "Past Performance",
                  weight: "15–25%",
                  note: "Recency (last 3 years) and relevance (similar agency type, similar worker category) drive your score",
                  barWidth: "w-3/12",
                  barColor: "bg-violet-500",
                },
                {
                  factor: "Key Personnel",
                  weight: "10–15%",
                  note: "Program manager qualifications; some clinical staffing contracts require specific credential verification processes",
                  barWidth: "w-1/12",
                  barColor: "bg-amber-500",
                },
                {
                  factor: "Small Business Participation",
                  weight: "Varies",
                  note: "On unrestricted awards, a subcontracting plan naming small business subs can add evaluation points",
                  barWidth: "w-1/12",
                  barColor: "bg-sky-400",
                },
              ].map((item) => (
                <div key={item.factor} className="rounded-xl border border-stone-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-stone-800 text-sm">{item.factor}</span>
                    <span className="font-bold text-stone-900 text-sm">{item.weight}</span>
                  </div>
                  <div className="h-1.5 bg-stone-100 rounded-full mb-2">
                    <div className={`h-full rounded-full ${item.barColor} ${item.barWidth}`} />
                  </div>
                  <p className="text-xs text-stone-500">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Your technical approach section needs to answer three questions the agency is actually
              worried about: How will you fill positions on time? What happens if a placed worker
              does not work out? How do you maintain quality over a multi-year contract? Vague answers
              (&quot;we have a robust recruitment process and strong quality controls&quot;) do not score well.
              Specific answers with timeframes, escalation procedures, and named processes do.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Use CapturePilot&apos;s{" "}
              <Link href="/features/proposals" className="text-blue-700 hover:underline">
                proposal tools
              </Link>{" "}
              to build a compliance matrix for every staffing solicitation — it is easy to miss a
              requirement in a 50-page RFP, and a single omission on a technical acceptability
              review can eliminate an otherwise competitive bid. The{" "}
              <Link href="/blog/government-proposal-compliance-matrix" className="text-blue-700 hover:underline">
                compliance matrix guide
              </Link>{" "}
              shows how to build one efficiently.
            </p>

            <Callout icon={Target} color="sky" title="Past Performance: What 'Relevant' Actually Means">
              Evaluators weigh past performance on recency and relevance. Federal agency experience
              rates higher than commercial. Staffing for a government health system rates higher than
              general commercial staffing. Size matters too — a reference for a $3M contract is more
              relevant to a $3M solicitation than a $300K contract. Build your reference list
              strategically:{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 hover:underline font-semibold">
                how past performance works in federal proposals
              </Link>
              .
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-stone-200 rounded-xl shrink-0">
                <Search className="w-6 h-6 text-stone-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Find Federal Staffing Solicitations Matched to Your Profile
                </h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/matching" className="text-blue-700 hover:underline font-semibold">
                    opportunity matching engine
                  </Link>{" "}
                  filters federal opportunities by your NAICS codes, set-aside certifications, and
                  agency focus — so you see staffing solicitations you actually qualify for, not
                  every RFP on SAM.gov. Start your 30-day free trial.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-stone-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="step-by-step"
            number="09"
            title="Your Path to First Federal Staffing Contract"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The classic challenge in federal contracting — needing past performance to win, but
              needing a win to build past performance — applies to staffing too. The sequence below
              is the proven path around it.
            </p>

            <div className="space-y-4 my-8 animate-on-scroll">
              {[
                {
                  step: "01",
                  title: "Get your federal foundation in place",
                  desc: "Register in SAM.gov with your correct NAICS codes (561320 at minimum, others as applicable). Obtain your UEI number. Apply for every set-aside certification you qualify for — VetCert, 8(a), WOSB, HUBZone. These applications take time; start them before you are bidding.",
                  icon: FileText,
                },
                {
                  step: "02",
                  title: "Apply for the GSA MAS Schedule 736",
                  desc: "The TAPS schedule is your single broadest access point to civilian agency staffing needs. Apply for the SINs that match your service lines. A completed GSA MAS application takes 3–6 months, so prioritize it early. Once on the schedule, agencies can order directly from you.",
                  icon: Award,
                },
                {
                  step: "03",
                  title: "Build your first government reference",
                  desc: "State and local government staffing contracts are less competitive than federal and produce verifiable government experience. A year of performance at a state agency, county health department, or municipal government gives you a documented reference that federal evaluators treat as relevant past performance.",
                  icon: Building2,
                },
                {
                  step: "04",
                  title: "Subcontract under a federal staffing prime",
                  desc: "Contact firms holding ICSP IDIQ slots or other federal staffing vehicles and offer to supply candidate pipelines or fill overflow positions. Documented subcontract performance with a federal prime counts in most solicitations. The guide to subcontracting explains how to structure these arrangements.",
                  link: "/blog/subcontracting-government-contracts",
                  linkText: "subcontracting guide",
                  icon: Users,
                },
                {
                  step: "05",
                  title: "Target small, single-agency solicitations first",
                  desc: "Look for single-agency staffing awards under $1M — particularly at smaller federal offices, regional VA facilities, and civilian agencies with limited contracting staff. These draw far fewer competitors than large enterprise staffing awards. Use your GSA schedule or compete open-market.",
                  icon: Target,
                },
                {
                  step: "06",
                  title: "Build pipeline and compete for IDIQ vehicles",
                  desc: "After 12–18 months of documented federal performance, you are positioned to compete for the larger IDIQ vehicles — including future VA staffing contracts and agency-specific IDIQs at DHS, HHS, and DoD. Getting on a vehicle with a multi-year ordering period is what drives predictable revenue growth.",
                  icon: TrendingUp,
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-stone-50 animate-on-scroll hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-4 h-4 text-stone-500" />
                      <h3 className="font-bold text-stone-800">{item.title}</h3>
                    </div>
                    <p className="text-sm text-stone-600">
                      {item.desc}
                      {item.link && (
                        <>
                          {" "}
                          Read the{" "}
                          <Link href={item.link} className="text-blue-700 hover:underline font-medium">
                            {item.linkText}
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Track your federal opportunities systematically from the day you start pursuing them.
              Federal staffing solicitations often move on 30–45 day timelines from posting to
              proposal due date. If you are not watching for Sources Sought notices 6–12 months
              ahead, you are reacting instead of competing. The guide to{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline">
                Sources Sought notices
              </Link>{" "}
              shows how to use early-market intelligence to position before the RFP drops.
            </p>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="mistakes"
            number="10"
            title="Mistakes That Sink Staffing Agency Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Staffing firms entering federal contracting make predictable mistakes. Most of them
              stem from applying commercial staffing assumptions to a market with different rules.
              Here are the ones that matter most.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  title: "Pricing without the wage determination",
                  desc: "Building a bill rate model from your commercial labor costs without pulling the SCA wage determination for the specific county and job classification. Federal wages differ from commercial wages — sometimes substantially. Winning at the wrong price means losing money every month for five years.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Not differentiating your technical approach",
                  desc: "Submitting a generic staffing methodology that sounds identical to every other offeror. Agencies see hundreds of proposals that say 'we will provide qualified candidates promptly and maintain a strong quality assurance program.' Differentiate with specifics: your average fill time, your replacement guarantee terms, your candidate screening process for federal-specific requirements.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Failing to address security and vetting requirements",
                  desc: "Many federal staffing contracts require background investigations, e-Verify compliance, or specific vetting standards for every placed worker. Missing a vetting requirement in your proposal — or not having the HR infrastructure to execute it — can disqualify you outright or cause contract termination after award.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Submitting irrelevant past performance",
                  desc: "Citing large commercial staffing clients when the solicitation asks for government experience. Scale and sector both matter. A reference for placing 200 administrative workers at a commercial bank is less valuable than placing 50 workers at a state agency. Match your references to what the agency cares about.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Bidding IDIQ vehicles without the capacity to respond to task orders",
                  desc: "Getting onto an IDIQ vehicle is not a contract — it is an invitation to compete for task orders. Firms that win a vehicle spot but cannot respond quickly to task order RFQs (typically 5–10 day turnarounds) earn a reputation for non-responsiveness. Agencies stop including you. Have the proposal capacity before you pursue vehicles.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Ignoring the compliance matrix",
                  desc: "Large staffing RFPs can contain 40–80 discrete technical requirements buried across multiple sections. Missing even three or four of them on a technical acceptability review eliminates an otherwise competitive proposal before price is ever considered. Build a compliance matrix for every significant proposal.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl border p-5 ${item.color}`}>
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-sm leading-relaxed opacity-90">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={CheckCircle2} color="emerald" title="Use the Bid Checklist">
              Before submitting any staffing proposal, run through CapturePilot&apos;s{" "}
              <Link href="/resources/bid-checklist" className="text-emerald-800 underline font-semibold">
                federal bid checklist
              </Link>
              . It covers compliance requirements, pricing documentation, past performance
              references, and technical submission elements — the things that get proposals
              disqualified before an evaluator reads a single word of your technical approach.
            </Callout>

            <p className="text-stone-600 leading-relaxed mt-6 mb-4">
              The staffing firms that build durable federal revenue are not necessarily the largest —
              they are the ones who price correctly, respond reliably to task orders, and perform
              consistently enough to generate strong CPARS ratings. One well-executed contract at a
              federal agency is worth more than five mediocre commercial references when you are
              competing for the next federal award.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              Use CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                opportunity matching
              </Link>{" "}
              to surface staffing solicitations that align with your NAICS codes and certifications.
              Use the{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                competitive intelligence
              </Link>{" "}
              module to research who currently holds the contract you are bidding, what they paid,
              and what the award history looks like — so you enter every competition with real market
              context rather than guesses.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="text-center max-w-xl mx-auto">
              <Briefcase className="w-10 h-10 text-violet-400 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">
                Ready to Win Your First Federal Staffing Contract?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-8">
                CapturePilot gives staffing agencies the tools to find federal opportunities,
                verify eligibility, track proposals, and build the pipeline that converts to
                predictable government revenue. Book a strategy call with our GovCon team and map
                out your entry into the federal staffing market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm border border-white/20"
                >
                  Check eligibility free
                </a>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
