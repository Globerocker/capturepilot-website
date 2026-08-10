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
  Heart,
  Stethoscope,
  Activity,
  Pill,
  Building2,
  XCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "market-size", label: "The $90 Billion Healthcare Contracting Market" },
  { id: "key-agencies", label: "The Three Agencies That Drive Spending" },
  { id: "naics-codes", label: "NAICS Codes for Federal Healthcare" },
  { id: "va-healthcare", label: "VA Healthcare: The Veteran-Focused Market" },
  { id: "dod-dha", label: "DoD and DHA: Military Healthcare Contracts" },
  { id: "hhs-contracts", label: "HHS Contracts: CDC, NIH, CMS, and More" },
  { id: "set-asides", label: "Set-Asides and Healthcare-Specific Programs" },
  { id: "contract-vehicles", label: "Contract Vehicles You Need to Know" },
  { id: "proposal-tips", label: "Winning Healthcare Proposals: What Evaluators Want" },
  { id: "path-in", label: "Your Path Into Federal Healthcare" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red" | "rose";
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
    rose: "bg-rose-50 border-rose-200 text-rose-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
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
        <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function HealthcareGovernmentContractsPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-rose-50 to-white">
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
              Healthcare Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-700 border border-rose-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Stethoscope className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Healthcare Government Contracts:{" "}
            <span className="gradient-text">The $90 Billion Market for Medical Service Providers</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The VA alone spends{" "}
            <strong className="text-stone-700">$35 billion in contracts annually</strong>, the
            Defense Health Agency runs a{" "}
            <strong className="text-stone-700">$40.3 billion health program</strong>, and HHS
            contracts with thousands of private sector providers. Healthcare is the second-largest
            federal contracting category — and most of the medical companies competing for it have
            no idea the market exists. Here is exactly how to get in.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 10, 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-rose-700 transition-colors py-1"
                >
                  <span className="text-rose-600 font-mono text-xs">
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
            id="market-size"
            number="01"
            title="The $90 Billion Healthcare Contracting Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most physicians, staffing firms, and medical equipment suppliers think of the federal
              government as a payer — Medicare reimbursements, Medicaid claims, insurance billing.
              That is only half the picture. The federal government is also a{" "}
              <strong className="text-stone-800">direct buyer</strong> of healthcare services through
              procurement contracts, and that market is enormous.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Across the Department of Veterans Affairs, the Defense Health Agency, the Department
              of Health and Human Services, and dozens of smaller agencies, the federal government
              purchases healthcare services, medical equipment, staffing, health IT, facility
              management, and clinical support directly through contracts. Federal healthcare contract
              spending has grown steadily — driven by an aging veteran population, expanded military
              health benefits, and HHS programs that have scaled dramatically over the past decade.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$35B",
                  label: "VA contracts annually, one of the largest federal contracting agencies",
                  color: "text-rose-600 bg-rose-50 border-rose-100",
                },
                {
                  icon: Shield,
                  stat: "$40.3B",
                  label: "Defense Health Program FY2025 budget request, purchasing 65%+ of care from private sector",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: TrendingUp,
                  stat: "+26%",
                  label: "Growth in HHS small business contract awards from FY2024 to FY2025",
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
              The federal government obligates roughly{" "}
              <strong className="text-stone-800">$681 billion in prime contracts annually</strong>{" "}
              across all sectors (FY2025 data, per fed-spend.com). Healthcare — including medical
              services, health IT, staffing, and supplies — consistently ranks among the top spending
              categories. HHS and VA alone appear in the top five federal contracting agencies by
              prime award dollars.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              What makes this particularly valuable for small businesses: the government is legally
              required to direct a portion of contract dollars to small businesses. Federal law
              sets a 23% small business prime contracting goal, with sub-goals for specific
              certifications. Healthcare agencies like VA have historically exceeded those goals,
              with a particular emphasis on veteran-owned businesses.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              If you provide medical services, health staffing, clinical support, behavioral health,
              home health care, medical devices, or healthcare IT — and you have not explored federal
              contracts — you are leaving a significant revenue stream untouched.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-10 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 p-8 text-white">
            <div className="flex items-start gap-4">
              <Activity className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Does Your Healthcare Business Qualify for Federal Contracts?
                </h3>
                <p className="text-rose-100 text-sm mb-4">
                  Check your eligibility for VA, HHS, and DoD set-aside programs in under two
                  minutes. No jargon, no guesswork.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-rose-700 font-bold px-5 py-2.5 rounded-xl hover:bg-rose-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="key-agencies"
            number="02"
            title="The Three Agencies That Drive Spending"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal healthcare contracting is not monolithic. Three agencies account for the vast
              majority of spending, and each operates with its own priorities, procurement systems,
              and contractor preferences. Know which one fits your business before you start bidding.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  agency: "Department of Veterans Affairs (VA)",
                  spend: "~$35B annually",
                  focus: "Veteran healthcare, medical equipment, staffing, community care, mental health, telehealth",
                  standout: "Legally required to prioritize SDVOSB and VOSB vendors under the VA Rule of Two. Strong demand for community-based care providers.",
                  icon: Shield,
                  color: "border-blue-200 bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  agency: "Defense Health Agency (DHA) / DoD",
                  spend: "$40.3B Defense Health Program (FY2025)",
                  focus: "TRICARE managed care, military medical staffing, medical logistics, behavioral health, facility operations",
                  standout: "Purchases over 65% of total military healthcare from private sector via managed care contracts. The $70.8B TRICARE East contract (Humana) and TRICARE West (TriWest) are the anchor vehicles, with hundreds of subcontracting opportunities flowing through them.",
                  icon: Activity,
                  color: "border-emerald-200 bg-emerald-50",
                  iconColor: "text-emerald-600",
                },
                {
                  agency: "Department of Health and Human Services (HHS)",
                  spend: "Hundreds of billions total; significant contract spend via CDC, NIH, CMS, FDA, IHS",
                  focus: "Public health research, lab services, health IT, clinical trials support, outbreak response, Indian health services",
                  standout: "CDC, NIH, and CMS account for 75% of HHS contract obligations. The Indian Health Service increased spending 9% in FY2025. Small business awards at HHS reached peak levels in FY2025.",
                  icon: Heart,
                  color: "border-rose-200 bg-rose-50",
                  iconColor: "text-rose-600",
                },
              ].map(({ agency, spend, focus, standout, icon: Icon, color, iconColor }) => (
                <div
                  key={agency}
                  className={`animate-on-scroll rounded-xl border p-6 ${color}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                    <h3 className="font-black text-stone-900">{agency}</h3>
                  </div>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Contract Spend
                  </p>
                  <p className="text-sm font-bold text-stone-700 mb-3">{spend}</p>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Primary Categories
                  </p>
                  <p className="text-sm text-stone-600 mb-3">{focus}</p>
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Key Insight
                  </p>
                  <p className="text-sm text-stone-700 font-medium">{standout}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Beyond these three, other agencies procure healthcare services at scale: the
              Department of Homeland Security (immigration medical services), Bureau of Prisons
              (correctional healthcare), and the Indian Health Service. But for most healthcare
              businesses entering federal contracting for the first time, VA and DHA are where you
              start.
            </p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="naics-codes"
            number="03"
            title="NAICS Codes for Federal Healthcare"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Your NAICS codes determine which opportunities you can compete for and whether you
              qualify as a small business for set-asides. Healthcare businesses often underestimate
              how many relevant codes apply to them. Register every applicable code on{" "}
              <Link
                href="/blog/sam-gov-search-tips"
                className="text-rose-700 hover:underline font-medium"
              >
                SAM.gov
              </Link>{" "}
              — there is no penalty for having multiple codes, and each one opens a different pool
              of set-aside opportunities.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">NAICS Code</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Description</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">SBA Size Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    { code: "621111", desc: "Offices of Physicians (Except Mental Health)", size: "$16.5M avg annual receipts" },
                    { code: "621112", desc: "Offices of Physicians, Mental Health Specialists", size: "$16.5M avg annual receipts" },
                    { code: "621210", desc: "Offices of Dentists", size: "$10M avg annual receipts" },
                    { code: "621310", desc: "Offices of Chiropractors", size: "$10M avg annual receipts" },
                    { code: "621340", desc: "Offices of Physical/Occupational/Speech Therapists", size: "$10M avg annual receipts" },
                    { code: "621391", desc: "Offices of Podiatrists", size: "$10M avg annual receipts" },
                    { code: "621399", desc: "Offices of Other Health Practitioners", size: "$10M avg annual receipts" },
                    { code: "621420", desc: "Outpatient Mental Health & Substance Abuse Centers", size: "$22M avg annual receipts" },
                    { code: "621491", desc: "HMO Medical Centers", size: "$35M avg annual receipts" },
                    { code: "621610", desc: "Home Health Care Services", size: "$22M avg annual receipts" },
                    { code: "621910", desc: "Ambulance Services", size: "$35M avg annual receipts" },
                    { code: "621999", desc: "All Other Ambulatory Health Care Services", size: "$16.5M avg annual receipts" },
                    { code: "622110", desc: "General Medical and Surgical Hospitals", size: "750 employees" },
                    { code: "623110", desc: "Nursing Care Facilities", size: "$35M avg annual receipts" },
                    { code: "541714", desc: "Biomedical R&D Services", size: "1,000 employees" },
                    { code: "339112", desc: "Surgical and Medical Instrument Manufacturing", size: "800 employees" },
                    { code: "424210", desc: "Drugs and Druggists' Sundries Merchant Wholesalers", size: "200 employees" },
                  ].map(({ code, desc, size }) => (
                    <tr key={code} className="hover:bg-stone-50">
                      <td className="px-4 py-3 font-mono font-bold text-rose-700">{code}</td>
                      <td className="px-4 py-3 text-stone-600">{desc}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={Lightbulb} color="amber" title="NAICS Code Strategy for Healthcare Providers">
              <p>
                Do not limit yourself to your primary clinical code. A mental health practice
                can register under both 621112 and 621420. A home health company can add 621610
                and 621999. A medical staffing firm should register under 561320 (Temporary Staffing)
                in addition to clinical codes. Each code is a separate set-aside eligibility pool,
                and the thresholds differ. Check if you qualify as small under the applicable size
                standard before registering — the SBA small business size standards table is the
                authoritative source.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you are not sure which NAICS codes to register or whether you qualify as small
              under each one, use{" "}
              <Link
                href="/features/quick-checker"
                className="text-rose-700 hover:underline font-medium"
              >
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to run an instant eligibility assessment before you update SAM.gov.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="va-healthcare"
            number="04"
            title="VA Healthcare: The Veteran-Focused Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Department of Veterans Affairs is the single most important agency for healthcare
              businesses entering federal contracting. It spends approximately{" "}
              <strong className="text-stone-800">$35 billion in contracts annually</strong> and has
              a legal mandate — unlike any other federal agency — to give preference to
              service-disabled veteran-owned small businesses (SDVOSB) and veteran-owned small
              businesses (VOSB) whenever two or more such firms can compete at a fair and
              reasonable price.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This is the VA Rule of Two. In practice, it means VA contracting officers must
              set contracts aside for SDVOSB or VOSB vendors whenever the market research
              supports it — before considering any other small business program, and before
              opening to full and open competition. If you are veteran-owned and pursuing VA
              healthcare work, your{" "}
              <Link
                href="/blog/vosb-certification-guide"
                className="text-rose-700 hover:underline font-medium"
              >
                VOSB or SDVOSB certification
              </Link>{" "}
              is not just a nice-to-have. It is a competitive necessity.
            </p>

            <div className="my-8 space-y-4">
              <h3 className="text-lg font-black text-stone-900">
                What the VA Buys in Healthcare
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Community-based outpatient care and telehealth",
                  "Medical and surgical equipment, supplies, devices",
                  "Home health and home-based primary care",
                  "Mental health services and substance abuse treatment",
                  "Physical therapy and rehabilitation",
                  "Medical staffing (nursing, physicians, specialists)",
                  "Facility management for VA medical centers",
                  "Pharmacy services and pharmaceutical supplies",
                  "Laboratory and diagnostic testing services",
                  "Transportation and non-emergency medical transport",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-stone-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Callout icon={Award} color="blue" title="VHA IHT 2.0: The $14 Billion SDVOSB Healthcare Contract">
              <p>
                In 2025, the VA awarded nine spots on its Veterans Health Administration
                Integrated Healthcare Transformation 2.0 (VHA IHT 2.0) contract — a
                $14 billion indefinite-delivery/indefinite-quantity vehicle reserved exclusively
                for SDVOSB firms. The contract runs through 2035 if all options are exercised.
                Winners serve as prime contractors leading integrated teams to support VA&apos;s
                veteran-centric healthcare program requirements. This is the scale of opportunity
                available to certified veteran-owned healthcare companies.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              The VA also maintains the{" "}
              <strong className="text-stone-800">Federal Supply Schedule (FSS)</strong>, a
              procurement vehicle through its National Acquisition Center that allows VA facilities
              — and other government agencies — to purchase medical equipment, supplies, services,
              and pharmaceuticals directly from commercial suppliers at pre-negotiated prices. If
              you sell medical products, getting on the relevant FSS schedule is one of the fastest
              ways to generate recurring federal revenue without competing for individual contracts.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For community-based care, the VA&apos;s Community Care Network (CCN) channels veterans
              to approved private providers when VA facilities cannot meet demand. If you are a
              clinical provider — physician group, behavioral health practice, physical therapy
              clinic — becoming a CCN-authorized provider is a separate but parallel revenue stream
              from the contracting system. Both are worth pursuing.
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="dod-dha"
            number="05"
            title="DoD and DHA: Military Healthcare Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Defense Health Agency manages healthcare for{" "}
              <strong className="text-stone-800">9.5 million beneficiaries</strong> — active duty
              service members, retirees, and their families — through the Military Health System
              (MHS). The FY2025 Defense Health Program budget request was $40.3 billion. And the
              Military Health System purchases{" "}
              <strong className="text-stone-800">more than 65% of total care from the private sector</strong>{" "}
              through tailored contracts.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The two anchor contracts are TRICARE East (Humana, worth up to{" "}
              <strong className="text-stone-800">$70.8 billion over nine years</strong>, covering
              5 million+ beneficiaries) and TRICARE West (TriWest Healthcare Alliance, covering
              2.8 million beneficiaries). These managed care support contracts are too large for
              most small businesses to pursue as primes, but they generate substantial subcontracting
              opportunities for clinical providers, staffing firms, and healthcare IT companies.
            </p>

            <Callout icon={Users} color="sky" title="DHA's $43 Billion Medical Staffing Vehicle">
              <p>
                The Defense Health Agency awarded spots on its medical staffing multi-award IDIQ
                in 2024 — a vehicle with an estimated $43 billion ceiling — to 11 companies. The
                vehicle covers a broad range of medical staffing categories for military treatment
                facilities. Not all of the 11 awardees are large businesses: the solicitation
                included both unrestricted and small business set-aside tracks. This is the kind
                of vehicle where small business healthcare staffing firms that move early can
                capture recurring task order revenue for years.
              </p>
            </Callout>

            <div className="my-8">
              <h3 className="text-lg font-black text-stone-900 mb-4">
                What DHA Buys Directly
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { item: "Medical staffing for military treatment facilities (MTFs)", note: "Nurses, physicians, allied health" },
                  { item: "Behavioral health services", note: "PTSD, substance abuse, crisis intervention" },
                  { item: "Pharmacy services and drug distribution", note: "Via TRICARE Pharmacy Program" },
                  { item: "Healthcare IT and electronic health records", note: "MHS GENESIS modernization ongoing" },
                  { item: "Medical logistics and supply chain", note: "Equipment maintenance and distribution" },
                  { item: "Dental services", note: "TRICARE Dental Program" },
                ].map(({ item, note }) => (
                  <div key={item} className="bg-stone-50 rounded-xl border border-stone-200 p-4">
                    <p className="font-bold text-stone-800 text-sm">{item}</p>
                    <p className="text-xs text-stone-500 mt-1">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For healthcare IT companies: DHA is one of the largest buyers of health information
              technology in the world. The ongoing rollout of MHS GENESIS (the DoD&apos;s implementation
              of Cerner&apos;s electronic health record system) across military treatment facilities has
              generated a wave of training, configuration, integration, and support contracting
              opportunities that flow through both direct DHA contracts and GWAC task orders.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Find DHA-specific opportunities through{" "}
              <a
                href="https://www.dha.mil/Working-with-DHA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-700 hover:underline font-medium"
              >
                DHA&apos;s contractor portal
              </a>{" "}
              and through SAM.gov. DHA also maintains a list of expiring contracts — a critical
              resource for identifying recompete opportunities where you can challenge the incumbent.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="hhs-contracts"
            number="06"
            title="HHS Contracts: CDC, NIH, CMS, and More"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Department of Health and Human Services is the largest public health agency in
              the world by budget. Total HHS spending in FY2025 approached{" "}
              <strong className="text-stone-800">$846.8 billion</strong> — but the vast majority
              of that is mandatory entitlement spending (Medicare, Medicaid). The procurement
              contracts — where your business competes — sit inside that total and represent tens
              of billions in direct awards to private sector firms.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Three agencies account for 75% of HHS contract obligations:{" "}
              <strong className="text-stone-800">CDC, NIH, and CMS</strong>. Each has a distinct
              buying profile.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  agency: "National Institutes of Health (NIH)",
                  icon: Activity,
                  description:
                    "NIH is the world's largest funder of biomedical research. It contracts for research support services, clinical trial management, laboratory operations, animal research facilities, data analysis, bioinformatics, and scientific IT. NIH also runs several major IT vehicles, including CIO-SP3 (NITAAC) — heavily used for health IT across HHS. Companies with biomedical research, data science, or clinical research organization (CRO) capabilities find strong demand here.",
                },
                {
                  agency: "Centers for Disease Control and Prevention (CDC)",
                  icon: Shield,
                  description:
                    "CDC contracts for public health surveillance, laboratory services, epidemiology support, health communications, emergency preparedness, and data systems. Post-pandemic, CDC has expanded contracts in outbreak response, data modernization, and global health. If your business works in public health analytics, lab services, or health communications, CDC is a primary target.",
                },
                {
                  agency: "Centers for Medicare & Medicaid Services (CMS)",
                  icon: FileText,
                  description:
                    "CMS contracts extensively for health IT, data analytics, beneficiary outreach, claims processing systems, quality measurement, and program integrity. CMS runs some of the largest health data systems in the world — the contractors who build and maintain them are predominantly IT firms with deep healthcare domain knowledge. If you sit at the intersection of healthcare and technology, CMS contracts are worth targeting.",
                },
                {
                  agency: "Indian Health Service (IHS)",
                  icon: Heart,
                  description:
                    "IHS provides healthcare to approximately 2.6 million American Indian and Alaska Native people through a network of hospitals, clinics, and health stations. IHS spending grew 9% in FY2025, driven by investments in health services, medical equipment, and IT. IHS contracts are relatively less competitive than VA or DHA markets, and tribal businesses have specific set-aside preferences that create additional entry points.",
                },
              ].map(({ agency, icon: Icon, description }) => (
                <div key={agency} className="animate-on-scroll rounded-xl border border-stone-200 p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-rose-600" />
                    <h3 className="font-black text-stone-900 text-base">{agency}</h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <Callout icon={TrendingUp} color="emerald" title="HHS Small Business Awards Hit Peak Levels in FY2025">
              <p>
                Small business contract awards at HHS rose 26% year-over-year from FY2024 to
                FY2025 and are at peak levels. HHS has also exceeded the WOSB goal of 5% of
                total contract awards going to women-owned small businesses. The data suggests
                that agencies within HHS are actively seeking small business partners — and that
                the competitive pressure may be lower than you expect. Small businesses that
                register on SAM.gov, qualify under appropriate NAICS codes, and pursue HHS
                opportunities through proper channels have a real shot.
              </p>
            </Callout>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="set-asides"
            number="07"
            title="Set-Asides and Healthcare-Specific Programs"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal law requires at least{" "}
              <strong className="text-stone-800">23% of prime contract dollars</strong> to be
              awarded to small businesses annually, with sub-goals for specific categories. The
              government has exceeded this goal every year since 2013. In healthcare — where many
              clinical services naturally fit small or mid-size providers — set-aside contracts
              are common.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-left">
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tl-xl">Program</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Goal</th>
                    <th className="px-4 py-3 font-bold text-stone-700">Healthcare Relevance</th>
                    <th className="px-4 py-3 font-bold text-stone-700 rounded-tr-xl">Where to Start</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {[
                    {
                      program: "Small Business",
                      goal: "23% of all federal contracts",
                      relevance: "Applies to most healthcare NAICS codes",
                      start: "SAM.gov registration",
                    },
                    {
                      program: "SDVOSB",
                      goal: "3% government-wide; VA Rule of Two",
                      relevance: "VA gives mandatory preference; DHA and HHS set asides common",
                      start: "SBA Veteran Small Business Certification (VetCert)",
                    },
                    {
                      program: "VOSB",
                      goal: "VA-specific preference",
                      relevance: "Any veteran-owned healthcare business can qualify",
                      start: "SBA VetCert program",
                    },
                    {
                      program: "8(a) Business Development",
                      goal: "5% of federal contracts to SDBs",
                      relevance: "Strong in HHS, DHA; sole-source awards possible up to $25M",
                      start: "SBA 8(a) application (9-year program)",
                    },
                    {
                      program: "WOSB / EDWOSB",
                      goal: "5% of federal contracts",
                      relevance: "Healthcare is an underrepresented industry for WOSB purposes",
                      start: "SBA WOSB certification",
                    },
                    {
                      program: "HUBZone",
                      goal: "3% of federal contracts",
                      relevance: "Applies regardless of industry; price preference available",
                      start: "SBA HUBZone certification",
                    },
                  ].map(({ program, goal, relevance, start }) => (
                    <tr key={program} className="hover:bg-stone-50">
                      <td className="px-4 py-3 font-bold text-stone-800">{program}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{goal}</td>
                      <td className="px-4 py-3 text-stone-600 text-xs">{relevance}</td>
                      <td className="px-4 py-3 text-stone-500 text-xs">{start}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The{" "}
              <Link
                href="/blog/8a-sole-source-contracts"
                className="text-rose-700 hover:underline font-medium"
              >
                8(a) program
              </Link>{" "}
              deserves special attention for healthcare companies. Sole-source 8(a) awards — where
              the government gives you a contract without competition — are available up to $25
              million for services. Many healthcare contracts fall in that range, and 8(a) companies
              receive them without writing a competitive proposal. If your healthcare business is
              SBA-eligible, the 8(a) application is worth the effort.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Not sure which certifications you qualify for? Use{" "}
              <Link href="/features/quick-checker" className="text-rose-700 hover:underline font-medium">
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to run your eligibility across all major set-aside programs based on your actual
              business profile — not a generic questionnaire.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="contract-vehicles"
            number="08"
            title="Contract Vehicles You Need to Know"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal healthcare contracting runs heavily on{" "}
              <Link
                href="/blog/idiq-contracts-explained"
                className="text-rose-700 hover:underline font-medium"
              >
                IDIQ contract vehicles
              </Link>{" "}
              — indefinite delivery, indefinite quantity contracts where approved vendors compete
              for task orders over years. Getting on the right vehicles early is often more
              important than winning any single contract.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  name: "VA Federal Supply Schedule (FSS)",
                  type: "VA / GSA",
                  size: "Multiple billions across schedules",
                  who: "Medical product suppliers, pharmaceutical companies, service providers",
                  detail:
                    "The VA's FSS program establishes long-term government-wide contracts allowing VA facilities and other agencies to buy medical equipment, supplies, services, and pharmaceuticals at pre-negotiated prices. Getting on Schedule 65 (Medical) or Schedule 621 (Professional Services) opens recurring order flow without proposal competitions. Talk to a GSA Schedule consultant or reach out directly to the VA National Acquisition Center.",
                },
                {
                  name: "VHA IHT 2.0",
                  type: "VA / SDVOSB Only",
                  size: "$14B IDIQ, through 2035",
                  who: "SDVOSB healthcare firms providing integrated healthcare transformation services",
                  detail:
                    "Nine SDVOSB firms hold spots on this contract. Task orders compete among the nine holders. The next on-ramp — if one occurs — is where new entrants can gain access. Track SAM.gov and VA procurement forecast for notice of any new competitions.",
                },
                {
                  name: "DHA Medical Staffing Multi-Award IDIQ",
                  type: "DHA / Multiple Award",
                  size: "$43B ceiling",
                  who: "Medical staffing firms supplying clinical professionals to military treatment facilities",
                  detail:
                    "Eleven awardees hold positions on this vehicle. Both unrestricted and small business set-aside tracks exist. Task orders are competed among holders for clinical staffing placements at DoD facilities nationwide. If staffing is your business, this is the most direct path into DHA.",
                },
                {
                  name: "CIO-SP3 / CIO-SP4 (NITAAC)",
                  type: "NIH / Government-wide",
                  size: "Multi-billion dollar IT vehicles",
                  who: "Healthcare IT companies, health data analytics firms, clinical informatics",
                  detail:
                    "The NIH Information Technology Acquisition and Assessment Center manages government-wide IDIQ vehicles for health IT. DHA uses CIO-SP3 extensively for health information technology services. CIO-SP4 is the next-generation vehicle — watch for on-ramp opportunities. These vehicles serve agencies across HHS and DoD.",
                },
                {
                  name: "GSA MAS (Multiple Award Schedule)",
                  type: "GSA / Government-wide",
                  size: "Trillions across all schedules",
                  who: "Any healthcare service provider; professional services, staffing, health IT",
                  detail:
                    "The GSA Multiple Award Schedule includes Schedule 621 (Professional and Allied Healthcare Staffing), which gives approved vendors access to every federal agency. Getting on MAS is a prerequisite for many healthcare teaming arrangements and provides a low-competition entry point for small businesses.",
                },
              ].map(({ name, type, size, who, detail }) => (
                <div key={name} className="animate-on-scroll rounded-xl border border-stone-200 bg-white p-6 hover-lift">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-black text-stone-900">{name}</h3>
                    <div className="flex gap-2">
                      <span className="text-xs bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full font-medium">
                        {type}
                      </span>
                      <span className="text-xs bg-stone-50 text-stone-600 border border-stone-200 px-2 py-0.5 rounded-full font-medium">
                        {size}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                    Best for
                  </p>
                  <p className="text-sm text-stone-700 font-medium mb-3">{who}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Tracking which vehicles are open for new vendors, which are in on-ramp periods, and
              which task orders are being released is one of the most time-consuming parts of federal
              healthcare contracting. Use{" "}
              <Link href="/features/intelligence" className="text-rose-700 hover:underline font-medium">
                CapturePilot&apos;s market intelligence
              </Link>{" "}
              to get automated alerts when vehicles relevant to your NAICS codes post new task
              orders or on-ramp solicitations.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-10 rounded-2xl border-2 border-stone-200 p-8 bg-stone-50">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-rose-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Start Tracking Healthcare Contract Vehicles
                </h3>
                <p className="text-stone-500 text-sm mb-4">
                  CapturePilot monitors VA, DHA, HHS, and GSA vehicles for task order releases,
                  on-ramp announcements, and set-aside opportunities in your NAICS codes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-rose-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-rose-700 transition-colors text-sm"
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

          {/* Section 9 */}
          <SectionHeading
            id="proposal-tips"
            number="09"
            title="Winning Healthcare Proposals: What Evaluators Want"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal healthcare proposals are evaluated differently from commercial bids. Price
              matters, but it rarely wins alone. Evaluators weigh technical approach, past
              performance, staffing qualifications, quality management systems, and compliance
              with accreditation and regulatory requirements. Here is what separates winners from
              also-rans.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: "Past Performance Is Non-Negotiable",
                  icon: Award,
                  color: "text-blue-600",
                  content:
                    "Federal healthcare evaluators want to see that you have delivered the same or similar services to government clients before. If you are new to federal work, your commercial past performance still counts — document it thoroughly, including scope, dollar value, duration, and outcomes. Use CPARS ratings (from prior government work) as exhibits whenever available. A single strong past performance reference at the right scope often outweighs three weak ones.",
                },
                {
                  title: "Staffing Plans and Credentials",
                  icon: Users,
                  color: "text-emerald-600",
                  content:
                    "For clinical services contracts, evaluators scrutinize your staffing plan closely. They want to know how you recruit, credential, and retain qualified clinical staff — especially for hard-to-fill specialties. Document your existing bench of credentialed professionals. Include board certifications, DEA numbers, state licensure, and any relevant accreditations. Propose a realistic and specific staffing model, not a generic org chart.",
                },
                {
                  title: "Quality Management and Accreditation",
                  icon: Shield,
                  color: "text-violet-600",
                  content:
                    "Healthcare agencies expect contractors to meet or exceed clinical quality standards. Joint Commission accreditation, NCQA certification, ISO 9001, and similar credentials carry real weight in evaluation. If you have any accreditation, lead with it. If you do not, describe your internal quality assurance processes in specific terms — incident tracking, peer review, outcome measurement.",
                },
                {
                  title: "Compliance and Regulatory Readiness",
                  icon: FileText,
                  color: "text-rose-600",
                  content:
                    "Healthcare contracts carry a dense overlay of regulatory requirements: HIPAA, BAAs, HITECH, clinical credentialing standards, infection control protocols, and agency-specific requirements. Evaluators want to see that you understand and already comply with these — not that you plan to after award. Demonstrate existing compliance systems in your technical volume.",
                },
                {
                  title: "Price Is Still Important — Know Your Market",
                  icon: DollarSign,
                  color: "text-amber-600",
                  content:
                    "Most healthcare service contracts evaluate both technical merit and price separately. Under LPTA (Lowest Price Technically Acceptable) contracts, the lowest compliant price wins. Under best value, a superior technical score can offset a higher price. Know which method the solicitation uses before you price. Use CapturePilot's intelligence tools to research what incumbents have billed and what comparable contracts have awarded at.",
                },
              ].map(({ title, icon: Icon, color, content }) => (
                <div key={title} className="flex gap-4 animate-on-scroll">
                  <div className="flex-shrink-0 mt-1">
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-stone-900 mb-2">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="The Compliance Matrix Is Not Optional">
              <p>
                Healthcare solicitations often run 100+ pages with dense technical requirements,
                quality standards, and regulatory compliance specifications. A compliance matrix —
                a side-by-side mapping of every requirement to where your proposal addresses it —
                is how evaluators verify you met every single one. Missing a single requirement
                can get your proposal thrown out. Read the guide on{" "}
                <Link
                  href="/blog/government-proposal-compliance-matrix"
                  className="text-amber-900 underline font-medium"
                >
                  building a compliance matrix
                </Link>{" "}
                before you write a word of your technical volume.
              </p>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Need a proposal template to get started fast? CapturePilot&apos;s{" "}
              <a
                href="/resources/proposal-template"
                className="text-rose-700 hover:underline font-medium"
              >
                proposal template
              </a>{" "}
              is built around federal evaluation criteria — so you address what evaluators are
              actually scoring.
            </p>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="path-in"
            number="10"
            title="Your Path Into Federal Healthcare"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most healthcare businesses that fail at federal contracting fail at the beginning —
              they pick the wrong target, skip essential registrations, or bid without understanding
              the evaluation criteria. Here is a realistic step-by-step path that works.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Register on SAM.gov and get your NAICS codes right",
                  detail:
                    "You cannot receive a federal contract without an active SAM.gov registration. Register your business, verify your NAICS codes cover all the healthcare services you provide, and complete the small business profile in full. If your registration has lapsed, this is the single most damaging administrative failure in federal contracting — check it now.",
                },
                {
                  step: "02",
                  title: "Assess your set-aside eligibility",
                  detail:
                    "Run a quick eligibility check on SDVOSB, VOSB, 8(a), WOSB, and HUBZone programs based on your actual business characteristics. If you qualify for more than one, pursue all of them — each opens additional contract pools. The certifications that take the longest (8(a), SDVOSB) should be applied for first.",
                },
                {
                  step: "03",
                  title: "Pick one agency and go deep",
                  detail:
                    "Do not try to pursue VA, DHA, and HHS simultaneously at the start. Pick the agency whose mission and procurement patterns best match your capabilities. If you are a clinical provider, start with VA. If you are a staffing firm, DHA's medical staffing vehicles are the clearest path. If you are in biomedical research or health IT, target NIH or CMS first.",
                },
                {
                  step: "04",
                  title: "Research incumbents and upcoming recompetes",
                  detail:
                    "Use SAM.gov and federal spending databases to identify which healthcare contracts at your target agency are approaching expiration. Incumbent contracts that have been in place for 5+ years are often vulnerable to challengers — agencies frequently want to see the market before recompeting. A strong capabilities statement delivered to the contracting officer 6-12 months before a recompete can shape the solicitation in your favor.",
                },
                {
                  step: "05",
                  title: "Build your capability statement for healthcare",
                  detail:
                    "A healthcare-specific capability statement is your primary marketing document in federal contracting. It should include: NAICS codes and applicable size standards, all certifications and accreditations, specific clinical or technical capabilities, past performance summaries with scope and outcomes, and a differentiation statement that explains why you are better than the incumbent. See the guide on capability statement examples for what good ones include.",
                },
                {
                  step: "06",
                  title: "Pursue your first contract at the right scope",
                  detail:
                    "Your first federal healthcare contract should be at a scope where your past performance (commercial or otherwise) is directly comparable. A physician group that has managed 50-person clinics should not bid a 500-provider national staffing contract as its first federal award. Win something you can perform excellently, collect a strong CPARS rating, and use that to move up.",
                },
                {
                  step: "07",
                  title: "Use subcontracting as an accelerant",
                  detail:
                    "If you are not yet ready to prime, subcontracting with an established prime contractor is how you build federal past performance without fronting the full proposal effort. Large prime contractors are often required to meet small business subcontracting goals — and they actively seek capable small healthcare businesses to fill those slots. Reach out to primes who hold VA, DHA, and HHS vehicles in your specialty area.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-5 animate-on-scroll">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center">
                      <span className="font-black text-rose-700 text-sm">{step}</span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-black text-stone-900 mb-1">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="violet" title="The Common Mistakes to Avoid">
              <ul className="space-y-2">
                {[
                  "Registering on SAM.gov with incorrect or incomplete NAICS codes, then missing set-aside opportunities in your core specialty",
                  "Bidding your first federal contract without comparable past performance — federal evaluators discount commercial experience that is not clearly similar in scope",
                  "Underpricing to win, then discovering that federal healthcare contracts have cost structure requirements (DCAA-compliant accounting, fringe rates, overhead) that commercial pricing did not account for",
                  "Ignoring the VA's Community Care Network as a parallel revenue stream while pursuing prime contracts",
                  "Missing solicitation close dates because you were not monitoring SAM.gov daily — use an automated pipeline management tool",
                ].map((mistake) => (
                  <li key={mistake} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-violet-700 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{mistake}</span>
                  </li>
                ))}
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Want a personalized checklist for your specific healthcare business? Use the{" "}
              <a
                href="/resources/bid-checklist"
                className="text-rose-700 hover:underline font-medium"
              >
                CapturePilot bid readiness checklist
              </a>{" "}
              to identify the gaps before you put your first proposal in front of a federal
              evaluator.
            </p>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll my-12 pt-10 border-t border-stone-200">
            <h3 className="text-lg font-black text-stone-900 mb-6">Related Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/va-contracts-guide",
                  title: "VA Contracts: How to Win Work With the Department of Veterans Affairs",
                  category: "Agencies",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses",
                  category: "Set-Asides",
                },
                {
                  href: "/blog/past-performance-government-contracts",
                  title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
                  category: "Proposals",
                },
                {
                  href: "/blog/staffing-government-contracts",
                  title: "Staffing and Temporary Services Government Contracts: A Growing Market",
                  category: "Industries",
                },
                {
                  href: "/blog/government-rfp-response-guide",
                  title: "How to Respond to a Government RFP: Step-by-Step for First-Timers",
                  category: "Proposals",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process: How Winning Contractors Find and Win Deals",
                  category: "Strategy",
                },
              ].map(({ href, title, category }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-xl border border-stone-200 p-4 hover:border-rose-200 hover:bg-rose-50 transition-all hover-lift"
                >
                  <p className="text-xs text-rose-600 font-bold uppercase tracking-wider mb-1">
                    {category}
                  </p>
                  <p className="text-sm font-bold text-stone-800 group-hover:text-rose-700 transition-colors leading-snug">
                    {title}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll rounded-2xl bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 p-10 text-white text-center">
            <Heart className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-black mb-3">
              Ready to Win Federal Healthcare Contracts?
            </h3>
            <p className="text-rose-100 text-sm max-w-lg mx-auto mb-6">
              CapturePilot tracks healthcare opportunities across VA, DHA, HHS, and GSA — matching
              them to your NAICS codes, certifications, and capabilities so you never miss a
              relevant solicitation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CHECK_URL}
                className="inline-flex items-center gap-2 bg-white text-rose-700 font-black px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors text-sm"
              >
                Check your eligibility free <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-rose-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-rose-400 transition-colors text-sm border border-rose-400"
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
