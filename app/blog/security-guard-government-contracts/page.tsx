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
  Shield,
  XCircle,
  Lock,
  Eye,
  Star,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-security", label: "Why Security Contracts Favor Small Business" },
  { id: "market-size", label: "The Federal Security Market: Size and Top Buyers" },
  { id: "naics-codes", label: "NAICS 561612 and When to Use Others" },
  { id: "armed-vs-unarmed", label: "Armed vs. Unarmed: How Requirements Differ" },
  { id: "service-contract-act", label: "Service Contract Act: The Pricing Trap" },
  { id: "set-asides", label: "Set-Asides and Certifications That Give You an Edge" },
  { id: "contract-vehicles", label: "GSA MAS and IDIQ Vehicles to Get On" },
  { id: "evaluation", label: "How Agencies Evaluate Security Guard Bids" },
  { id: "step-by-step", label: "Your Path to First Award" },
  { id: "mistakes", label: "Mistakes That Kill Security Guard Bids" },
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

export default function SecurityGuardGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
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
              Security Guard Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Security Guard Government Contracts:{" "}
            <span className="gradient-text">Building a Federal Security Business</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government protects thousands of buildings, courthouses, VA hospitals,
            military installations, and border facilities — every one of them staffed by contract
            security officers. The GSA Multiple Award Schedule Security and Protection category
            alone reported{" "}
            <strong className="text-stone-700">$1.76 billion in annual sales</strong>. Small
            businesses win a substantial share of those awards. Here is how you get in.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 31, 2026</span>
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
            id="why-security"
            number="01"
            title="Why Security Contracts Favor Small Business"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Security guard contracting is one of the most consistently small-business-friendly
              categories in the federal marketplace. That is not a marketing claim — it reflects how
              these contracts are structured and what agencies actually care about.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The work is geographically fixed. A contracting officer awarding a guard services
              contract for a federal building in Albuquerque needs officers who can show up in
              Albuquerque every day. A large national firm headquartered in Virginia competes on the
              same geographic footing as a regional security company with local staff already in place.
              Local presence is an advantage, not a disadvantage.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Contracts run long. The standard structure is one base year plus four option years.
              Perform well and you are looking at five years of predictable monthly billing. That
              stability is exactly what lets small security firms hire, train, and retain quality officers
              — which is, ironically, what agencies most want to see. It is a virtuous cycle once you
              crack in.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA small business size standard for NAICS 561612 (Security Guards and Patrol
              Services) is{" "}
              <strong className="text-stone-700">$29 million in average annual receipts</strong>{" "}
              (a proposed increase to $34 million was pending as of mid-2025). A firm doing $15–20
              million in commercial security revenue qualifies comfortably. Compare that to defense IT
              services, where mid-market firms are routinely priced out of set-asides.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$29M",
                  label: "SBA size standard for NAICS 561612 — most regional security firms qualify",
                  color: "text-sky-600 bg-sky-50 border-sky-100",
                },
                {
                  icon: Clock,
                  stat: "1 + 4",
                  label: "Standard contract structure: one base year plus four option years",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: Shield,
                  stat: "13",
                  label: "Awardees on DHS armed PSO vehicle — each holds years of future task orders",
                  color: "text-violet-600 bg-violet-50 border-violet-100",
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
              The barrier to entry is real but navigable. SAM.gov registration, the right licenses,
              adequate insurance, and demonstrated management capability — none of which requires
              years of federal experience. A commercial security company with verifiable client
              references, licensed officers, and proper bonding can compete on federal awards
              within months of deciding to pursue this market.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="market-size"
            number="02"
            title="The Federal Security Market: Size and Top Buyers"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Security services span virtually every federal agency. Courthouses need armed guards.
              VA medical centers need both armed and unarmed officers. DHS offices, GSA-managed
              buildings, military facilities, nuclear sites, ports of entry — the demand is enormous
              and structurally recurring.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The GSA Multiple Award Schedule (MAS) Security and Protection Large Category reported
              approximately <strong className="text-stone-700">$1.76 billion in annual sales</strong>{" "}
              in fiscal year 2025, with more than 1,000 companies holding a GSA MAS contract under
              this category. That is the MAS channel alone — many security guard awards flow directly
              through agency-specific IDIQs, Blanket Purchase Agreements, and standalone solicitations
              that never touch the GSA schedule.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-50">
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Agency</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">What They Buy</th>
                    <th className="text-left p-3 border border-stone-200 font-bold text-stone-700">Key Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      agency: "DHS / Federal Protective Service (FPS)",
                      what: "Armed PSOs for 9,000+ GSA-managed facilities",
                      notes: "Largest single buyer; uses BPA and IDIQ vehicles with potential values in the hundreds of millions",
                    },
                    {
                      agency: "Department of Veterans Affairs",
                      what: "Unarmed and armed officers at VA medical centers nationwide",
                      notes: "Veteran set-asides are dominant; SDVOSB/VOSB preference is strong",
                    },
                    {
                      agency: "Department of Defense",
                      what: "Installation security, gate guards, anti-terrorism officers",
                      notes: "Some contracts require personnel security clearances; DOD leads all agencies in total contracting spend",
                    },
                    {
                      agency: "GSA (Facilities)",
                      what: "Building security for federal office space nationwide",
                      notes: "FPS oversees guard requirements; GSA issues many awards through MAS",
                    },
                    {
                      agency: "Department of Justice / US Marshals",
                      what: "Courthouse security, prisoner transport support",
                      notes: "Armed positions; strict training and fitness standards",
                    },
                    {
                      agency: "Nuclear Regulatory Commission / DOE",
                      what: "Physical security at nuclear sites",
                      notes: "Highest-scrutiny category; Q or L clearances often required",
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
              If you are just entering the federal market, the VA and GSA-managed building contracts
              are your most accessible entry points. The VA has a{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-700 hover:underline">
                strong preference for veteran-owned businesses
              </Link>{" "}
              — if you hold an SDVOSB or VOSB certification, VA security contracts are among the
              highest-probability awards in the entire federal marketplace. GSA building contracts
              often run through the MAS schedule, which creates a more structured on-ramp than
              agency-specific solicitations.
            </p>

            <Callout icon={Target} color="sky" title="Who FPS Actually Is">
              The Federal Protective Service is a component of DHS responsible for security at
              approximately 9,000 federally owned or leased facilities. FPS does not directly employ
              security guards — it contracts with private security firms who provide Protective
              Security Officers (PSOs). Those PSOs are the largest single category of federal contract
              security workers. If you want to work with FPS, you pursue the IDIQ or BPA vehicles
              they issue through DHS procurement channels.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="naics-codes"
            number="03"
            title="NAICS 561612 and When to Use Others"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              <strong className="text-stone-800">NAICS 561612 — Security Guards and Patrol Services</strong>{" "}
              is your primary code. It covers the core business: posting officers at fixed locations,
              running patrol routes, monitoring access points, and conducting security rounds. This is
              the code you register under in SAM.gov and the one most security guard solicitations
              will carry.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              But contracting officers occasionally assign different codes depending on what the
              contract emphasis is. Know when these come up:
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  code: "561612",
                  label: "Security Guards and Patrol Services",
                  desc: "Your default. Fixed-post guard services, patrol services, access control. SBA size standard: $29M.",
                  primary: true,
                },
                {
                  code: "561621",
                  label: "Security Systems Services",
                  desc: "Electronic security — alarm monitoring, CCTV installation and monitoring. Different from guard services. Often bundled in integrated security contracts.",
                  primary: false,
                },
                {
                  code: "541690",
                  label: "Other Scientific and Technical Consulting Services",
                  desc: "Physical security consulting and assessments — threat and vulnerability analysis, security program design. Used when the deliverable is a plan or assessment, not officers.",
                  primary: false,
                },
                {
                  code: "922120",
                  label: "Police Protection",
                  desc: "Appears on some law enforcement support contracts. Less common for private contractors; mostly government agencies. Rarely applies to commercial security firms.",
                  primary: false,
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
                  <div className="flex items-center gap-3 mb-2">
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
                    {item.primary && (
                      <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full ml-auto">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Always verify the NAICS code listed in the solicitation itself — if you respond under
              a different NAICS than the one assigned, your proposal may be disqualified on a
              technicality. Use CapturePilot&apos;s{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                Quick Checker
              </Link>{" "}
              to instantly verify your size standard eligibility for any NAICS before you bid.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="armed-vs-unarmed"
            number="04"
            title="Armed vs. Unarmed: How Requirements Differ"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The distinction between armed and unarmed guard contracts goes far beyond whether your
              officers carry a weapon. The compliance requirements, insurance costs, training
              obligations, and personnel vetting processes are substantially different — and getting
              this wrong in your proposal is a fast path to elimination.
            </p>

            <div className="overflow-x-auto my-8 animate-on-scroll">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-3 border border-stone-700 font-bold">Requirement</th>
                    <th className="text-left p-3 border border-stone-700 font-bold">Unarmed Contracts</th>
                    <th className="text-left p-3 border border-stone-700 font-bold">Armed Contracts</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      req: "Guard age minimum",
                      unarmed: "18+ (varies by state)",
                      armed: "21+",
                    },
                    {
                      req: "Background investigation",
                      unarmed: "Criminal background check required",
                      armed: "Full background investigation; often federal security clearance",
                    },
                    {
                      req: "Firearms training",
                      unarmed: "Not required",
                      armed: "Annual or semi-annual qualification required",
                    },
                    {
                      req: "Citizenship",
                      unarmed: "US Citizen or work-authorized",
                      armed: "US Citizen or Lawful Permanent Resident with honorable military discharge",
                    },
                    {
                      req: "Prior experience",
                      unarmed: "Varies by contract",
                      armed: "Typically 2 years armed security or 1 year law enforcement",
                    },
                    {
                      req: "Liability insurance",
                      unarmed: "$1M–$2M general liability typical",
                      armed: "$2M–$5M general liability; some contracts require $10M+",
                    },
                    {
                      req: "Physical exam",
                      unarmed: "Sometimes required",
                      armed: "Required; must sustain 12-hour standing post",
                    },
                    {
                      req: "Drug testing",
                      unarmed: "Pre-employment common",
                      armed: "Pre-employment mandatory; random testing required",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.req}
                      className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="p-3 border border-stone-200 font-semibold text-stone-800">{row.req}</td>
                      <td className="p-3 border border-stone-200 text-stone-600">{row.unarmed}</td>
                      <td className="p-3 border border-stone-200 text-stone-600 font-medium">{row.armed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Start Unarmed, Build Up">
              If you are new to federal security contracting, start with unarmed guard contracts.
              The compliance overhead is dramatically lower, your pricing will be more competitive
              since you are not carrying firearms liability premiums, and you build the past
              performance record you need to compete for higher-value armed contracts later. Many
              successful federal security firms spent their first two to three years exclusively
              on unarmed work before pursuing Protective Security Officer contracts.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Armed PSO positions for FPS assignments carry particularly strict standards because
              those officers are protecting federal workers in federally controlled buildings.
              The FPS PSO Medical Standards document (published by DHS) governs vision, hearing,
              physical fitness, and medical fitness requirements. Budget for officer attrition —
              not every candidate who passes your commercial hiring process will pass an FPS medical
              screening.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/20 rounded-xl shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Check Your Eligibility for Security Contracts</h3>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  Answer eight questions and CapturePilot tells you which set-aside programs you
                  qualify for, your SBA size standard status, and which contract vehicles are your
                  fastest path to award.
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
            id="service-contract-act"
            number="05"
            title="Service Contract Act: The Pricing Trap"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The McNamara-O'Hara Service Contract Act (SCA) applies to virtually every federal
              security guard contract over $2,500. It is the single most common reason security
              contractors bid themselves into unprofitable contracts — and it is entirely avoidable
              if you know what to look for.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SCA requires you to pay each guard the prevailing wage rate for their job
              classification in the county where they work. Those rates are set by the Department of
              Labor and vary significantly by location. A security guard in downtown San Francisco
              has a different wage determination than one in rural Mississippi. In 2025, the DOL
              also increased the SCA health and welfare fringe benefit rate to{" "}
              <strong className="text-stone-700">$5.55 per billable hour</strong> — a real cost
              that stacks on top of base wages.
            </p>

            <div className="bg-stone-900 rounded-2xl p-6 my-8 animate-on-scroll">
              <p className="text-emerald-400 font-mono text-xs mb-3 uppercase tracking-widest">Pricing Model — How SCA Stacks</p>
              <div className="space-y-2 text-sm font-mono">
                {[
                  { label: "Base hourly wage (from SCA wage determination)", value: "varies by county" },
                  { label: "H&W fringe benefit (2025 rate)", value: "+ $5.55/hr" },
                  { label: "FICA, FUTA, SUTA (employer taxes)", value: "+ ~$2.50/hr" },
                  { label: "Workers' comp insurance", value: "+ $1.50–$4.00/hr" },
                  { label: "Liability insurance allocation", value: "+ $0.75–$1.50/hr" },
                  { label: "Uniforms, equipment, training", value: "+ $0.50–$1.00/hr" },
                  { label: "Overhead and G&A", value: "+ 15–25%" },
                  { label: "Profit", value: "+ 8–15%" },
                ].map((line) => (
                  <div key={line.label} className="flex justify-between text-stone-300">
                    <span>{line.label}</span>
                    <span className="text-white font-bold ml-4 shrink-0">{line.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-stone-700 text-xs text-stone-400">
                The SCA wage determination is in every solicitation. Read it before building your cost model.
                Find current determinations at SAM.gov under Wage Determinations.
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The trap: bidders who copy commercial security pricing without accounting for SCA
              rates will win the contract and then lose money every month. This is especially common
              with firms new to federal work who assume their commercial labor costs apply. They do not.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Pull the applicable wage determination from the solicitation before you touch pricing.
              It will be in the solicitation attachments as a DOL WD number. Look up the relevant
              occupational category (typically Guard I or Guard II), cross-reference to your
              specific county, and build your labor cost from the bottom up. Every hour, every post,
              every location. This is the same discipline described in{" "}
              <Link
                href="/blog/government-contract-pricing-strategies"
                className="text-blue-700 hover:underline"
              >
                federal contract pricing strategy
              </Link>{" "}
              — security just has less flexibility than other categories because labor is 70–80% of
              your total cost.
            </p>

            <Callout icon={Lightbulb} color="emerald" title="Price Option Years Separately">
              Many security contractors make a critical mistake: they price all five years at today&apos;s
              SCA rate. The DOL adjusts wage determinations annually. Build in an escalation factor
              for years 2–5 — 3–5% per year is typical for labor-intensive service contracts. If you
              flat-line your pricing, you will be paying year-5 wages at year-1 billing rates. Some
              solicitations allow an Economic Price Adjustment (EPA) clause — look for it and use it.
            </Callout>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="set-asides"
            number="06"
            title="Set-Asides and Certifications That Give You an Edge"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Security guard contracts are among the most aggressively set aside categories in the
              federal marketplace. The VA in particular runs the vast majority of its security
              services through veteran-owned business set-asides. If you hold a relevant
              certification, you are not just competing with a smaller pool — in some cases you
              are competing in a pool of one or two firms for a specific facility.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  cert: "SDVOSB / VOSB",
                  icon: Award,
                  color: "border-violet-200 bg-violet-50",
                  iconColor: "text-violet-600",
                  desc: "Service-Disabled Veteran-Owned and Veteran-Owned Small Business certifications are dominant at the VA. The VA has a statutory preference: it must award contracts to SDVOSBs first, then VOSBs, then other small businesses. Security is one of the highest-volume categories where this plays out in practice.",
                  link: "/blog/sdvosb-contracts-guide",
                  linkText: "SDVOSB contracting guide",
                },
                {
                  cert: "8(a) Business Development",
                  icon: Star,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                  desc: "8(a) sole-source awards are available up to $4.5 million for service contracts. If a contracting officer knows your firm and you are in the 8(a) program, they can direct an award to you without competition. Early in your federal career, this is one of the fastest ways to build past performance.",
                  link: "/blog/8a-sole-source-contracts",
                  linkText: "8(a) sole source guide",
                },
                {
                  cert: "HUBZone",
                  icon: Building2,
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                  desc: "If your principal office is in a HUBZone and 35% of your employees live in HUBZones, you qualify. HUBZone contracts receive a 10% price evaluation preference in competitive acquisitions — meaning you can bid 10% higher than a non-HUBZone competitor and still win on price.",
                  link: "/blog/hubzone-program-guide",
                  linkText: "HUBZone program guide",
                },
                {
                  cert: "WOSB / EDWOSB",
                  icon: Users,
                  color: "border-sky-200 bg-sky-50",
                  iconColor: "text-sky-600",
                  desc: "Women-owned small businesses compete in set-aside contracts across industries where women-owned firms are underrepresented. Security services falls under industry groups where WOSB set-asides apply. Combined with local presence, this can make you effectively the only qualified bidder in a small market.",
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
              Not sure which certifications you qualify for? Use the{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                Quick Checker
              </Link>{" "}
              to run your eligibility in minutes. Also check out the complete guide to{" "}
              <Link href="/blog/federal-contracting-certifications" className="text-blue-700 hover:underline">
                federal contracting certifications
              </Link>{" "}
              — it covers each program&apos;s requirements and payoff in detail.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="contract-vehicles"
            number="07"
            title="GSA MAS and IDIQ Vehicles to Get On"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Two acquisition channels dominate federal security guard spending: the GSA Multiple
              Award Schedule and agency-specific IDIQ contracts. Understanding how each works
              determines which one to pursue first.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8 animate-on-scroll">
              {[
                {
                  title: "GSA MAS (SIN 561612)",
                  badge: "Broad Access",
                  badgeColor: "bg-sky-100 text-sky-700",
                  points: [
                    "Opens you to over 70 federal agencies without separate bids",
                    "$1.76B in annual Security & Protection category sales (FY2025)",
                    "Rates negotiated once; agencies order directly against your schedule",
                    "Application takes 3–6 months; approval is rigorous but worth it",
                    "Required for many BPAs and task orders that cite the MAS",
                  ],
                  icon: BarChart3,
                  iconColor: "text-sky-600",
                },
                {
                  title: "Agency-Specific IDIQs",
                  badge: "Higher Volume",
                  badgeColor: "bg-violet-100 text-violet-700",
                  points: [
                    "DHS Armed PSO vehicle: 13 awardees with ordering through 2030",
                    "VA Medical Center security IDIQs: often veteran set-asides",
                    "GSA building security BPAs can run hundreds of millions",
                    "On-contract firms get first look at new requirements",
                    "Harder to get on; far more valuable once you're in",
                  ],
                  icon: Lock,
                  iconColor: "text-violet-600",
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
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Start with the GSA MAS if you are new to federal contracting. It gives you a
              government-credentialed vehicle that contracting officers can use quickly without a
              formal competition — your GSA schedule is already your negotiated contract. Once you
              have six to twelve months of GSA sales and documented past performance, pursue the
              agency-specific IDIQs for the agencies where you want to grow.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Getting on the MAS is not a passive process. You need to submit a complete offer
              through the GSA eOffer portal, negotiate rates, pass a GSA audit, and maintain
              compliance with MAS terms ongoing. Read the full{" "}
              <Link href="/blog/gsa-schedule-guide" className="text-blue-700 hover:underline">
                GSA Schedule guide
              </Link>{" "}
              before you start — the process is well-documented but unforgiving of errors.
            </p>

            <Callout icon={Eye} color="violet" title="Watch Sources Sought Notices">
              Agency-specific IDIQ competitions for security services are often preceded by Sources
              Sought or Request for Information notices on SAM.gov — sometimes six to twelve months
              before the RFP drops. Responding to these as a capable small business gets your name in
              front of the contracting officer before competitors even know the opportunity exists.
              Learn how to use{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline font-semibold">
                Sources Sought notices to your advantage
              </Link>
              .
            </Callout>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="evaluation"
            number="08"
            title="How Agencies Evaluate Security Guard Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Security guard solicitations are typically Best Value Trade-off or Lowest Price
              Technically Acceptable (LPTA) acquisitions. The distinction matters enormously for
              your proposal strategy.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              LPTA means the agency will award to the lowest-priced bidder who meets all technical
              requirements. There is no credit for being better than the minimum — only for
              being cheaper. On LPTA contracts, your job is to (1) be unambiguously compliant with
              every requirement and (2) price as tightly as possible within profitability. Writing a
              compelling narrative is wasted effort.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Best Value Trade-off awards do reward quality. Agencies score factors like management
              approach, key personnel qualifications, quality control plans, and past performance
              alongside price. Here is how those factors typically weight out for security services:
            </p>

            <div className="space-y-3 my-6 animate-on-scroll">
              {[
                {
                  factor: "Price / Cost",
                  weight: "40–55%",
                  note: "Often the most heavily weighted single factor, even in Best Value awards",
                  barWidth: "w-5/12",
                  barColor: "bg-blue-500",
                },
                {
                  factor: "Past Performance",
                  weight: "20–30%",
                  note: "Recency and relevance matter — federal security experience outweighs commercial",
                  barWidth: "w-3/12",
                  barColor: "bg-emerald-500",
                },
                {
                  factor: "Management / Quality Control Plan",
                  weight: "15–25%",
                  note: "Your QCP must cover officer supervision, reporting, incident response, and corrective actions",
                  barWidth: "w-2/12",
                  barColor: "bg-violet-500",
                },
                {
                  factor: "Key Personnel",
                  weight: "10–20%",
                  note: "Supervisors with documented federal security experience strengthen this factor significantly",
                  barWidth: "w-1/12",
                  barColor: "bg-amber-500",
                },
                {
                  factor: "Small Business Participation",
                  weight: "Varies",
                  note: "On unrestricted awards, subcontracting plans may add points",
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
              Your Quality Control Plan deserves particular attention on Best Value awards.
              Agencies want to see how you will maintain officer performance day-to-day, how you
              will handle incidents, and how you will respond when an officer calls out sick at 3am.
              A vague QCP (&quot;we will monitor performance and take corrective action as needed&quot;) is a
              red flag. A specific QCP with named supervisors, defined inspection frequencies,
              documented post orders, and escalation procedures is a differentiator.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Use the{" "}
              <Link href="/features/proposals" className="text-blue-700 hover:underline">
                CapturePilot proposals tool
              </Link>{" "}
              to build a compliance matrix that tracks every stated requirement against your
              proposal sections — security solicitations often have 50–100 discrete technical
              requirements and missing even a few can cost you the contract on a technical
              acceptability review.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="step-by-step"
            number="09"
            title="Your Path to First Award"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The biggest challenge for new entrants is the same one you face in every{" "}
              <Link href="/blog/past-performance-government-contracts" className="text-blue-700 hover:underline">
                past performance discussion
              </Link>
              : agencies want documented federal experience, but you need a federal award to get
              documented federal experience. Here is the sequence that works.
            </p>

            <div className="space-y-4 my-8 animate-on-scroll">
              {[
                {
                  step: "01",
                  title: "Get SAM.gov and certifications in order",
                  desc: "Register in SAM.gov with your correct NAICS codes, obtain your UEI, and apply for any set-aside certifications you qualify for. The VA certification process (CVE) and 8(a) applications take time — start them now, before you are bidding.",
                  icon: FileText,
                },
                {
                  step: "02",
                  title: "Build local and state government past performance",
                  desc: "County courthouses, state buildings, local transit facilities — these are less competitive than federal and build verifiable government experience. One 12-month state contract with good performance records is worth more in a federal proposal than three years of commercial work.",
                  icon: Building2,
                },
                {
                  step: "03",
                  title: "Subcontract under a federal prime",
                  desc: "Contact firms already on DHS, VA, or GSA security contracts and offer to perform a portion of their work. Documented subcontract performance with a federal prime counts toward past performance in most solicitations. Read the guide to",
                  link: "/blog/subcontracting-government-contracts",
                  linkText: "subcontracting your way into federal work",
                  icon: Users,
                },
                {
                  step: "04",
                  title: "Target small, single-facility solicitations",
                  desc: "Every federal building and campus has security — not every one is a $50M enterprise contract. Look for single-building awards, short-duration bridge contracts, and task orders under existing vehicles. These draw fewer qualified competitors and are your most achievable first awards.",
                  icon: Target,
                },
                {
                  step: "05",
                  title: "Apply for the GSA MAS",
                  desc: "Once you have your first past performance reference, apply for GSA MAS SIN 561612. The schedule puts you in front of every federal agency without requiring separate competition — task orders can be placed against your schedule directly.",
                  icon: Award,
                },
                {
                  step: "06",
                  title: "Compete for IDIQ vehicle slots",
                  desc: "After 12–18 months of federal experience, you are ready to pursue the larger IDIQ vehicles. DHS, VA, and GSA each run periodic competitions for their security IDIQ vehicles. Getting on one of these vehicles is often the move that takes a security firm from $2M to $20M in federal revenue.",
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
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-stone-200 rounded-xl shrink-0">
                <BarChart3 className="w-6 h-6 text-stone-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Track Every Security Opportunity in One Pipeline
                </h3>
                <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-700 hover:underline font-semibold">
                    pipeline manager
                  </Link>{" "}
                  lets you track federal security solicitations from Sources Sought through proposal
                  submission — with built-in PWin scoring so you know where to focus. Start your
                  30-day free trial and build your security contracting pipeline today.
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

          {/* Section 10 */}
          <SectionHeading
            id="mistakes"
            number="10"
            title="Mistakes That Kill Security Guard Bids"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most security contractors who lose federal bids do not lose on merit — they lose on
              process errors, pricing miscalculations, or compliance gaps that a more experienced
              bidder avoided. These are the most common.
            </p>

            <div className="space-y-4 my-6 animate-on-scroll">
              {[
                {
                  title: "Ignoring the wage determination",
                  desc: "Pricing at your commercial labor rates without pulling the SCA wage determination for each county in the contract area. This is the fastest path to winning a contract that loses money from day one.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Not staffing for attrition",
                  desc: "Federal contracts require specific post coverage. If your pricing assumes 100% staffing, you will be paying overtime or facing COTR complaints within weeks. Build a 15–20% bench into your staffing plan and price accordingly.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Vague quality control plans",
                  desc: "Agencies see hundreds of QCPs that say 'we will monitor performance.' Name your supervisor, state their qualifications, specify the inspection frequency, describe how you handle a failed inspection. Specificity wins on this factor.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Missing the license requirement",
                  desc: "Many federal security contracts require that your company hold a security firm license in the state where work is performed, in addition to individual officer licenses. A Washington DC contract may also need a Maryland or Virginia license if officers cross state lines. Verify before you bid.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Underestimating insurance timelines",
                  desc: "Armed contracts often require certificates of insurance with specific endorsements naming the government as an additional insured. Get your insurance in place before you bid, not after award. Brokers unfamiliar with federal contracting requirements can add weeks of delay.",
                  icon: XCircle,
                  color: "text-red-600 bg-red-50 border-red-200",
                },
                {
                  title: "Bidding on contracts you cannot staff",
                  desc: "Winning a contract you cannot fulfill is worse than losing it. Before you bid, confirm you have or can hire officers who meet the specific requirements — clearance level, training certifications, physical standards — for that location. Post-award disqualifications permanently damage your past performance record.",
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
              Before you submit any security proposal, run through CapturePilot&apos;s{" "}
              <Link href="/resources/bid-checklist" className="text-emerald-800 underline font-semibold">
                federal bid checklist
              </Link>
              . It covers compliance requirements, pricing documentation, past performance
              references, and technical submission elements — the things that get proposals
              tossed before an evaluator ever reads them.
            </Callout>

            <p className="text-stone-600 leading-relaxed mt-6 mb-4">
              The firms that build durable federal security businesses are not necessarily the
              largest or best-connected — they are the ones who price correctly, staff reliably,
              and document performance carefully. Start with one contract, perform it well, and
              the pipeline opens.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              Use CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                opportunity matching
              </Link>{" "}
              to find security guard solicitations that match your certifications and geographic
              reach — filtered by NAICS, set-aside type, and agency. Then use the{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline">
                competitive intelligence
              </Link>{" "}
              module to research incumbent contractors, award history, and pricing benchmarks before
              you build your proposal.
            </p>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="text-center max-w-xl mx-auto">
              <Shield className="w-10 h-10 text-sky-400 mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">
                Ready to Win Your First Federal Security Contract?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-8">
                CapturePilot gives you opportunity matching, compliance tools, and competitive
                intelligence built specifically for small business federal contractors. Book a
                strategy call with our GovCon team and map out your entry into the federal security
                market.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
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
