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
  TrendingUp,
  FileText,
  Clock,
  Award,
  Sparkles,
  BarChart3,
  Users,
  ShieldCheck,
  Star,
  Building2,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "the-opportunity", label: "The $26.6 Billion WOSB Opportunity" },
  { id: "wosb-vs-edwosb", label: "WOSB vs. EDWOSB: Which One Applies to You" },
  { id: "what-you-get", label: "What WOSB Certification Actually Gets You" },
  { id: "wosb-eligibility", label: "WOSB Eligibility Requirements" },
  { id: "edwosb-eligibility", label: "EDWOSB Economic Disadvantage Test" },
  { id: "certification-process", label: "How to Get Certified Through MySBA" },
  { id: "eligible-industries", label: "NAICS Codes and Eligible Industries" },
  { id: "finding-contracts", label: "Finding WOSB Set-Aside Contracts" },
  { id: "winning-strategy", label: "Strategy for Winning WOSB Contracts" },
  { id: "common-mistakes", label: "Mistakes That Sink WOSB Applicants" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
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
        <span className="text-xs font-bold text-violet-600 bg-violet-50 border border-violet-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function WOSBCertificationGuidePage() {
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
            <span className="text-stone-900 font-medium">WOSB Certification Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <ShieldCheck className="w-4 h-4" /> Set-Asides for Women-Owned Businesses
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            WOSB Certification:{" "}
            <span className="gradient-text">How Women-Owned Businesses Win Federal Contracts</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government is legally required to award{" "}
            <strong className="text-stone-700">5% of all contracting dollars</strong> to
            women-owned small businesses — that&apos;s over{" "}
            <strong className="text-stone-700">$26.6 billion annually</strong>. The WOSB Federal
            Contract Program creates set-aside competitions and sole source pathways that no other
            certification can access. Here&apos;s everything you need to know to qualify, get
            certified, and win.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 2, 2026</span>
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-violet-700 transition-colors py-1"
                >
                  <span className="text-violet-600 font-mono text-xs">
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
            id="the-opportunity"
            number="01"
            title="The $26.6 Billion WOSB Opportunity"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal contracting has a women-owned business mandate built into law. Under the Small
              Business Act, the federal government must award at least 5% of all federal contracting
              dollars to women-owned small businesses (WOSBs) each year. In FY2024, that translated
              to{" "}
              <strong>$26.64 billion awarded to 13,957 WOSB companies</strong> — an increase of
              $1.15 billion over FY2023.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The program is still growing. In FY2025, 17,451 women-owned businesses won
              $34.51 billion in total federal contract dollars — a dramatic expansion in the number
              of firms participating. The 5% goal creates real pressure on federal agencies.
              Contracting officers track their numbers. Program offices that consistently miss the
              women-owned goal face scrutiny from SBA&apos;s review process.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Despite the growth, the government has consistently fallen short of its 5% target —
              FY2024 came in at 3.44%. That gap between the mandate and reality is, perversely,
              your opportunity. Agencies under pressure to hit the goal have real incentive to find
              qualified WOSB firms. The program rewards businesses that show up prepared.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              {[
                { stat: "$26.6B", label: "Awarded to WOSBs in FY2024", icon: DollarSign },
                { stat: "5%", label: "Federal WOSB contracting goal", icon: Target },
                { stat: "13,957", label: "WOSB firms awarded in FY2024", icon: Users },
                { stat: "759", label: "Eligible NAICS codes for WOSB", icon: BarChart3 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll"
                >
                  <item.icon className="w-6 h-6 text-violet-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The WOSB Federal Contract Program was established to address documented
              underrepresentation of women-owned firms in specific industries. It&apos;s not a
              general preference — it operates through a defined list of NAICS codes where women
              are underrepresented, and restricts competition to certified firms. If your business
              code is on that list, you have access to a competition pool that excludes every
              large company and every non-certified small business. That&apos;s a structural
              advantage worth understanding fully.
            </p>
          </div>

          <Callout icon={Lightbulb} color="violet" title="The 5% Goal Creates Urgency for Contracting Officers">
            When an agency is behind on its women-owned small business goal heading into the last
            quarter of the fiscal year (July–September), contracting officers actively look for
            WOSB-eligible requirements to set aside. September is historically the heaviest
            contracting month of the year. Certified WOSBs who have already built relationships
            at target agencies are positioned to capture a disproportionate share of that
            end-of-year spending. Showing up in Q4 cold never works as well as relationships
            built in Q1–Q3.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="wosb-vs-edwosb"
            number="02"
            title="WOSB vs. EDWOSB: Which One Applies to You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The WOSB Federal Contract Program has two tiers: WOSB and EDWOSB. Both share the
              same ownership and control requirements. The difference is financial.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              EDWOSB — Economically Disadvantaged Women-Owned Small Business — is the higher-access
              tier. It requires meeting additional financial thresholds that qualify the owner as
              economically disadvantaged. In exchange, EDWOSB firms can compete for set-asides in
              NAICS codes where WOSBs are &quot;underrepresented,&quot; while WOSB firms (without
              the EDWOSB designation) can only access codes where women are &quot;substantially
              underrepresented.&quot; In practice, EDWOSB certification gives you access to more
              contracts across more industries.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Factor</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">WOSB</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">EDWOSB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        factor: "51% women ownership",
                        wosb: "Required",
                        edwosb: "Required",
                      },
                      {
                        factor: "Women control & management",
                        wosb: "Required",
                        edwosb: "Required",
                      },
                      {
                        factor: "U.S. citizen requirement",
                        wosb: "Required",
                        edwosb: "Required",
                      },
                      {
                        factor: "Financial disadvantage test",
                        wosb: "Not required",
                        edwosb: "Required (net worth, income, assets)",
                      },
                      {
                        factor: "Eligible NAICS codes",
                        wosb: "646 (substantially underrepresented)",
                        edwosb: "759 (underrepresented + substantially underrepresented)",
                      },
                      {
                        factor: "Sole source threshold",
                        wosb: "$4.5M (services) / $7M (mfg)",
                        edwosb: "$4.5M (services) / $7M (mfg)",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-stone-100 last:border-0 hover:bg-stone-50"
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs">{row.factor}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs">{row.wosb}</td>
                        <td className={`px-5 py-3 text-xs font-medium ${i >= 3 ? "text-violet-700" : "text-stone-600"}`}>
                          {row.edwosb}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              If you qualify for EDWOSB, pursue EDWOSB — not just WOSB. The MySBA certification
              portal allows you to apply for both designations simultaneously. There&apos;s no
              reason to leave the broader access on the table.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One clarification on the NAICS breakdown: 646 codes are designated for
              &quot;substantially underrepresented&quot; industries, meaning both WOSB and EDWOSB
              firms can compete for set-asides there. The additional 113 codes are
              &quot;underrepresented&quot; — only EDWOSB firms can access those as set-aside
              competitions. Both categories are available for sole source awards (at the applicable
              thresholds) when only one qualified firm is identified.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="my-10 bg-violet-50 border border-violet-200 rounded-2xl p-8 text-center animate-on-scroll">
            <ShieldCheck className="w-10 h-10 text-violet-600 mx-auto mb-4" />
            <h3 className="text-xl font-black text-stone-900 mb-2">
              Check Your WOSB and EDWOSB Eligibility
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              Answer a few questions about your business and ownership structure. CapturePilot&apos;s
              Quick Checker tells you which certifications you likely qualify for — in under 3
              minutes.
            </p>
            <Link
              href={CHECK_URL}
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-violet-700 transition-all hover:scale-105"
            >
              Check Your Eligibility Free <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-stone-400 mt-3">Free, no account required</p>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="what-you-get"
            number="03"
            title="What WOSB Certification Actually Gets You"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Three procurement mechanisms become available once you&apos;re a certified WOSB or
              EDWOSB. Each works differently and rewards different approaches.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Target,
                  title: "WOSB Set-Aside Competitions",
                  desc: "When a contracting officer determines that two or more certified WOSB (or EDWOSB) firms can perform the work at a fair and reasonable price, the contract must be set aside for that certification. The competition pool shrinks from every business in the country to only certified women-owned firms. Fewer competitors. Better odds. Your size standards, past performance, and proposal quality matter more when you're not swimming against large primes.",
                },
                {
                  icon: Zap,
                  title: "Sole Source Awards — No Competition Required",
                  desc: "If a contracting officer can identify only one capable certified WOSB or EDWOSB firm for a requirement, and the contract value falls within the sole source thresholds, they can award directly without a competitive solicitation. Current thresholds: $4.5 million for service contracts and $7 million for manufacturing. This is how many women-owned firms land their first significant federal contract — one relationship, one requirement, one direct award.",
                },
                {
                  icon: TrendingUp,
                  title: "Dollar Cap Removal — Any Contract Value Eligible for Set-Aside",
                  desc: "This is a significant and often-overlooked change: there is no longer a dollar limit on WOSB set-aside competitions. Contracting officers can set aside contracts of any value for certified WOSBs in eligible NAICS codes. A $50M contract in an eligible industry can be a WOSB set-aside. That wasn't always true — the old program had dollar caps that limited set-aside availability. Those caps are gone. Large contract values are now accessible to certified firms.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              WOSB certification also stacks with other designations. An 8(a) WOSB can compete in
              both pools. A HUBZone-certified WOSB has access to both HUBZone and WOSB set-asides.
              A WOSB in a woman-owned and veteran-owned business can stack WOSB with SDVOSB at
              civilian agencies (though note: at the VA, Veterans First rules push SDVOSB ahead of
              WOSB in priority order). The more certifications you hold, the more contract vehicles
              you can access.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Use{" "}
              <Link
                href="/features/quick-checker"
                className="text-violet-700 underline font-medium"
              >
                CapturePilot&apos;s Quick Checker
              </Link>{" "}
              to map all the set-asides your specific business profile qualifies for — WOSB,
              EDWOSB, 8(a), HUBZone, SDVOSB — and see which ones are most active in your NAICS
              codes.
            </p>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="wosb-eligibility"
            number="04"
            title="WOSB Eligibility Requirements"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              WOSB eligibility under 13 CFR Part 127 has four foundational requirements. These
              apply to both WOSB and EDWOSB designations — EDWOSB adds financial requirements on
              top of these. Every condition must be met simultaneously.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "51% owned by women who are U.S. citizens",
                  desc: "One or more women must unconditionally and directly own at least 51% of the business. The ownership must be genuine — not contingent on future events, pledged as collateral, or held through a structure where a non-woman controls the economic interest. Citizenship must be documented; lawful permanent residents do not qualify. Foreign-born women who are naturalized citizens do qualify.",
                },
                {
                  step: "02",
                  title: "Women must control the business",
                  desc: "A woman must hold the highest officer position in the company — President, CEO, Managing Member, or equivalent. Non-women can serve in operational roles, but the woman must possess ultimate authority over long-term decisions: entering major contracts, taking on debt, making strategic shifts, hiring executives. SBA reviewers look at operating agreements, shareholder agreements, and board structures to verify real control, not nominal titles.",
                },
                {
                  step: "03",
                  title: "Women must manage day-to-day operations",
                  desc: "The qualifying woman must devote sufficient time to the business. The SBA's rules create a rebuttable presumption: if a woman devotes fewer hours to the business than its normal operating hours, the firm is presumed not to qualify unless the woman can show she still holds ultimate managerial and supervisory control. Part-time involvement in a full-time business is a red flag. The woman doesn't have to be the only manager — but she must be the one who actually runs the show.",
                },
                {
                  step: "04",
                  title: "Qualifies as small under SBA size standards",
                  desc: "The business must meet the SBA size standard for its primary NAICS code as listed in SAM.gov. Depending on the industry, size is measured either by average annual receipts over the past 3 years or by employee count. WOSB certification can only be used on contracts where you are small under the NAICS code applicable to that specific contract — not just your SAM.gov primary code.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
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
              Ownership structure matters enormously. When a business has multiple owners,
              the combined ownership of all qualifying women must reach 51%. A business with
              two women each owning 26% satisfies this requirement. However, if women own the
              majority through a holding company that&apos;s not itself women-controlled, the
              certification can be denied. The SBA looks through corporate layers to verify
              genuine women ownership at every level.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Businesses organized as trusts, cooperatives, or joint ventures have additional rules
              governing how the 51% ownership and control requirements apply. If your entity type
              isn&apos;t a standard LLC, corporation, or partnership, review 13 CFR § 127.200
              before applying. Getting the structure wrong before you apply wastes time and creates
              a record of denial that can complicate future applications.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Control Is the Most Scrutinized Requirement">
            Ownership is binary — you either have 51% or you don&apos;t. Control is where
            applications fall apart. The SBA looks beyond titles at operating agreements, board
            authority, signature authority on bank accounts, employment of key managers, and
            whether a non-woman is factually running the company. A woman who owns 51% but relies
            entirely on a non-woman COO for every operational decision will fail the control test.
            Document the woman&apos;s actual management role — meeting records, decision logs,
            employment contracts — before submitting your application.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="edwosb-eligibility"
            number="05"
            title="EDWOSB Economic Disadvantage Test"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              EDWOSB eligibility requires every qualifying woman owner to meet three financial
              thresholds. These are personal financial tests — they apply to each individual woman
              owner who is claiming the EDWOSB basis of eligibility, not to the business as a whole.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  label: "Personal Net Worth",
                  threshold: "Under $850,000",
                  note: "Excludes: primary residence equity, value of the business itself, and retirement accounts. Net worth of a spouse is not counted.",
                },
                {
                  label: "Adjusted Gross Income",
                  threshold: "$400,000 or less",
                  note: "Averaged over the three most recent tax years. AGI above $400K averaged over three years disqualifies EDWOSB status.",
                },
                {
                  label: "Total Personal Assets",
                  threshold: "$6.5 million or less",
                  note: "All personal assets, including value of the business, primary residence, investments, and retirement accounts.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-stone-200 bg-stone-50 animate-on-scroll"
                >
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-2xl font-black text-violet-700 mb-2">{item.threshold}</p>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              A few important nuances on the net worth calculation. The SBA excludes from personal
              net worth: equity in the principal residence, the fair market value of the ownership
              interest in the business itself, and the value of retirement accounts (IRAs, 401(k)s,
              Keoghs, and similar). These exclusions mean many women business owners whose total
              assets exceed $850K still qualify for EDWOSB on net worth — once the business equity
              and home equity are removed from the calculation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The income test applies even in years where the business distributes significant
              earnings. If S-corp distributions or partnership draws push personal AGI above
              $400,000 in any given year, your three-year average may still fall within the limit
              depending on the other two years. If you&apos;re near the edge on the income test,
              have a CPA calculate your three-year average AGI before applying.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Importantly, EDWOSB status must be maintained. Annual attestation requirements —
              currently in abeyance as of 2025 — require EDWOSB firms to periodically certify
              they still meet the financial thresholds. If a business owner&apos;s personal finances
              change substantially (sale of assets, inheritance, major income year), revisiting
              EDWOSB eligibility is prudent before the next certification review.
            </p>
          </div>

          <Callout icon={Award} color="emerald" title="Already in an 8(a) Program? You Still Need WOSB Certification Separately">
            8(a) certification and WOSB certification are separate programs with separate
            application processes. An 8(a)-certified woman-owned business does not automatically
            have WOSB or EDWOSB status — and vice versa. If you&apos;re 8(a)-certified and
            women-owned, apply for WOSB/EDWOSB through MySBA certifications. Holding both
            certifications doubles your set-aside access: 8(a) sole source and competitive
            awards plus WOSB and EDWOSB set-asides. See our{" "}
            <Link href="/blog/set-aside-programs" className="underline font-medium">
              set-aside programs overview
            </Link>{" "}
            for a full comparison.
          </Callout>

          {/* Section 6 */}
          <SectionHeading
            id="certification-process"
            number="06"
            title="How to Get Certified Through MySBA"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA consolidated all small business certifications — WOSB, EDWOSB, 8(a), HUBZone,
              and VetCert — into a single portal called MySBA Certifications at{" "}
              <strong>certifications.sba.gov</strong>. The WOSB certification is free and the
              application is completed entirely online.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Certifications are valid for <strong>three years</strong> from the date of approval.
              Firms must recertify before expiration — the SBA recommends submitting a recertification
              application at least 90 days before your expiration date. Annual attestation is
              currently in abeyance (as of January 2025), meaning firms do not need to submit annual
              confirmation of continued eligibility between the three-year reviews.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  step: "01",
                  title: "Confirm active SAM.gov registration",
                  desc: "Your SAM.gov entity registration must be active and up to date. The MySBA portal pulls your Unique Entity Identifier (UEI) and NAICS code list from SAM.gov automatically. Check that your primary and secondary NAICS codes accurately reflect your services — the certification is tied to your SAM.gov profile. If your registration has lapsed, renew it first; SAM.gov renewals take 1-3 business days.",
                },
                {
                  step: "02",
                  title: "Gather required documents",
                  desc: "Collect these before starting the application: U.S. citizenship documentation for all qualifying women (birth certificate, naturalization certificate, or unexpired U.S. passport), business ownership documents (articles of incorporation, operating agreement, stock certificates, or membership certificates), corporate bylaws or governance documents showing women's control authority, tax returns for the past 3 years (required for EDWOSB income test), and personal financial statements for EDWOSB applicants. Upload each as a separate PDF — don't zip files.",
                },
                {
                  step: "03",
                  title: "Create your MySBA account",
                  desc: "Go to certifications.sba.gov and create an account using login.gov. Login.gov is the federal government's identity verification system — you'll create a login.gov account first if you don't already have one. Then link your SAM.gov entity to your MySBA profile. The portal connects to existing government databases to pre-populate some application fields.",
                },
                {
                  step: "04",
                  title: "Complete the application",
                  desc: "The application steps through ownership structure, control documentation, management roles, and business size verification. For EDWOSB, it adds the financial attestation section. Be precise on the ownership and control questions — vague or contradictory answers are the most common cause of delays and denials. If any non-women hold significant roles in the business, document clearly why the qualifying woman still holds ultimate control.",
                },
                {
                  step: "05",
                  title: "Await SBA determination",
                  desc: "After submission, an SBA analyst reviews the application. If approved as an apparent awardee on a specific contract, SBA will expedite the review with a 15-day turnaround. Standard applications take longer, though processing times have improved significantly since the MySBA portal consolidated all certifications. Check your SBA portal for status updates. Approval is reflected in SAM.gov and visible to contracting officers immediately.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
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
              If your application is denied, the denial letter will specify the reasons. You
              have the right to reconsideration — submit a written reconsideration request with
              supporting evidence that addresses the specific denial grounds. If reconsideration
              is also denied, you can appeal to the SBA&apos;s Office of Hearings and Appeals
              (OHA). Reapplying without fixing the underlying issue that caused the denial will
              result in another denial.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The SBA&apos;s national Women&apos;s Business Centers (WBCs) provide free guidance
              on the certification application process. Over 100 WBCs operate across the country;
              find yours through the SBA&apos;s resource locator. For complex ownership structures
              or EDWOSB financial edge cases, a GovCon attorney familiar with 13 CFR Part 127
              can prevent a denial that sets you back months. For a step-by-step SAM.gov setup
              guide, see our{" "}
              <Link href="/blog/sam-registration-guide" className="text-violet-700 underline font-medium">
                SAM.gov registration guide
              </Link>
              .
            </p>
          </div>

          {/* CTA 2 */}
          <div className="my-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white text-center animate-on-scroll">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-violet-400" />
            <h3 className="text-2xl font-black mb-3">Start Matching to WOSB Set-Asides Today</h3>
            <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
              CapturePilot monitors SAM.gov daily and surfaces WOSB and EDWOSB set-aside
              opportunities matched to your specific NAICS codes and certifications. No manual
              searches, no missed deadlines.
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
            id="eligible-industries"
            number="07"
            title="NAICS Codes and Eligible Industries"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The WOSB program does not apply to every contract. It applies only to NAICS codes
              identified by the SBA as industries where women-owned businesses are underrepresented
              or substantially underrepresented relative to their share of the overall economy. As
              of 2025, 759 NAICS code industries qualify.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA expanded this list significantly in recent years — the program now covers
              approximately 85% of all NAICS codes, up from a much smaller initial list. This
              expansion means the program is relevant across almost every industry sector. The
              key question isn&apos;t whether your industry is on the list — it almost certainly
              is — but whether you&apos;re pursuing opportunities under the NAICS codes covered by
              your certification tier.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Category</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">NAICS Codes</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Who Can Compete</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        category: "Substantially Underrepresented",
                        naics: "646 codes",
                        who: "WOSB and EDWOSB",
                        examples: "IT services, professional services, admin support, healthcare",
                      },
                      {
                        category: "Underrepresented",
                        naics: "113 codes",
                        who: "EDWOSB only",
                        examples: "Construction, manufacturing, engineering, transportation",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-stone-100 last:border-0 hover:bg-stone-50"
                      >
                        <td className="px-5 py-3 font-medium text-stone-800 text-xs">{row.category}</td>
                        <td className="px-5 py-3 text-violet-700 font-bold text-sm">{row.naics}</td>
                        <td className="px-5 py-3 text-stone-600 text-xs">{row.who}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs">{row.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Verify your specific NAICS codes on the SBA&apos;s official eligible industries
              list before pursuing any WOSB set-aside opportunity. The list is updated periodically
              and the official version is the authoritative source — third-party summaries can lag
              behind updates. The SBA publishes the current eligible NAICS list as a downloadable
              document at sba.gov.
            </p>
            <p className="text-stone-600 leading-relaxed">
              One practical consideration: your SAM.gov profile should include every NAICS code
              under which you can legitimately perform work. Buyers search by NAICS code when
              filtering for WOSB-eligible vendors. If you operate in IT (541512) and administrative
              support (561110) but only list one code in SAM.gov, you become invisible in searches
              for the other. Review your NAICS code list against the eligible industry list and
              add every relevant code you can legitimately support. Our{" "}
              <Link href="/blog/naics-codes-explained" className="text-violet-700 underline font-medium">
                guide to NAICS codes
              </Link>{" "}
              covers how to select and add codes strategically.
            </p>
          </div>

          <Callout icon={Star} color="emerald" title="Construction and Engineering: EDWOSB Access Only — But $70B+ in Opportunities">
            Construction and engineering NAICS codes fall in the &quot;underrepresented&quot;
            category, meaning only EDWOSB-certified firms (not WOSB alone) can compete for those
            set-asides. Federal construction spending exceeds $70 billion annually. If you run a
            construction or engineering firm and meet the EDWOSB financial thresholds, the EDWOSB
            designation alone opens a massive set-aside universe that most women-owned construction
            firms aren&apos;t actively pursuing. The competition in EDWOSB construction set-asides
            is far thinner than in open competition.
          </Callout>

          {/* Section 8 */}
          <SectionHeading
            id="finding-contracts"
            number="08"
            title="Finding WOSB Set-Aside Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              SAM.gov is the primary database for federal contract opportunities above $25,000.
              Once your WOSB or EDWOSB certification is confirmed, you can filter directly for
              women-owned set-asides. But using SAM.gov reactively — watching for open solicitations
              — captures only a fraction of the available opportunity.
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <th className="text-left px-5 py-3 font-bold text-stone-900">SAM.gov Filter</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">What to Set</th>
                      <th className="text-left px-5 py-3 font-bold text-stone-900">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        filter: "Set-Aside Type",
                        value: "Women-Owned Small Business / Economically Disadvantaged WOSB",
                        why: "Isolates WOSB-specific competitions from the full solicitation feed",
                      },
                      {
                        filter: "NAICS Code",
                        value: "All codes in your eligible NAICS list",
                        why: "Each contract has a NAICS code; your set-aside access depends on matching code eligibility",
                      },
                      {
                        filter: "Notice Type",
                        value: "Sources Sought first; Presolicitation second; Solicitation last",
                        why: "Earlier notices give you pre-competition access — you can shape requirements and build relationships before the RFP drops",
                      },
                      {
                        filter: "Agency",
                        value: "Your 2-3 target agencies by NAICS spend",
                        why: "Agency WOSB spending varies widely; DoD, HHS, and VA are historically high WOSB-spending agencies",
                      },
                      {
                        filter: "Place of Performance",
                        value: "Your operational region",
                        why: "Services, facilities, and healthcare contracts often favor local vendors — regional filtering increases relevance",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50">
                        <td className="px-5 py-3 font-medium text-stone-800">{row.filter}</td>
                        <td className="px-5 py-3 text-violet-700 font-medium text-xs">{row.value}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs leading-snug">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Beyond SAM.gov, use USASpending.gov to find historical WOSB contract awards in your
              NAICS codes. Search by NAICS + WOSB set-aside designation and you&apos;ll see which
              agencies are actually spending under the program, at what contract values, with what
              performance periods. Awards about to expire (contracts in their final option year)
              are recompete opportunities — the current WOSB incumbent will defend, but you can
              challenge with better past performance documentation and stronger agency relationships.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Also check agency procurement forecasts. Many larger agencies — DoD, HHS, DHS, VA
              — publish annual procurement forecast documents listing anticipated contract awards
              by NAICS code and expected set-aside designation. These forecasts are 12-18 months
              ahead of actual solicitation, giving you time to build the agency relationships
              that matter before any competition opens.
            </p>
            <p className="text-stone-600 leading-relaxed">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-violet-700 underline font-medium">
                contract matching engine
              </Link>{" "}
              monitors SAM.gov daily and surfaces WOSB and EDWOSB opportunities matched to your
              specific certification profile and NAICS codes. Our{" "}
              <Link href="/features/intelligence" className="text-violet-700 underline font-medium">
                intelligence module
              </Link>{" "}
              tracks incumbent contracts by agency, so you always know what&apos;s coming up for
              recompete before it hits the solicitation feed. See our{" "}
              <Link
                href="/blog/how-to-find-government-contracts-small-business"
                className="text-violet-700 underline font-medium"
              >
                guide to finding government contracts
              </Link>{" "}
              for the full search methodology.
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="winning-strategy"
            number="09"
            title="Strategy for Winning WOSB Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              WOSB certification is the entry ticket. Winning requires strategy built around
              your specific situation — your NAICS codes, your geographic reach, your past
              performance, and the agencies that spend heavily in your space.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Building2,
                  title: "Pick 2-3 Agencies and Build Depth",
                  desc: "Chasing every agency produces thin results everywhere. Identify the 2-3 agencies that award the most WOSB-set-aside contracts in your NAICS codes — typically DoD (Army, Navy, Air Force), HHS, or VA depending on your industry. Then build genuine relationships: attend industry days, visit the agency OSDBU office, respond to every Sources Sought in your NAICS. Contracting officers sole-source to firms they know. That familiarity takes months to build and can't be rushed.",
                },
                {
                  icon: FileText,
                  title: "Respond to Sources Sought Notices",
                  desc: "Sources Sought is your highest-leverage pre-competition activity. When a contracting officer issues a Sources Sought in an eligible NAICS code, they're determining whether two or more WOSB firms can perform the work — which is exactly the condition needed to set it aside. Your response puts your firm on the radar, documents your WOSB status and capability, and influences whether the eventual contract gets set aside for WOSB. A firm that responds regularly to Sources Sought in an agency develops a presence before any solicitation exists. Read our guide on Sources Sought responses for the exact format.",
                },
                {
                  icon: Award,
                  title: "Build Past Performance Strategically",
                  desc: "Past performance is the biggest barrier for newer WOSB firms. The fastest way to build it is subcontracting: serve as a WOSB sub on a prime contract, deliver the work well, and document it through a CPARS rating or a contractor performance attestation. Mentor-protégé arrangements — available through the SBA — provide structured past performance development with a larger firm sponsor. Each subcontract you perform becomes past performance documentation for the next proposal.",
                },
                {
                  icon: Clock,
                  title: "Track Expiring Contracts in Your NAICS",
                  desc: "Recompeting contracts are the single best opportunity for WOSB firms. When an existing WOSB-set-aside contract is in its final option year, the incumbent must be recompeted — and you can challenge with a focused, researched bid. The incumbent has performance history but faces complacency risk. New entrants with strong proposals and agency relationships win recompetes regularly. Use USASpending.gov award data to identify contracts expiring in 12-24 months and start building your pursuit well before the RFP drops.",
                },
                {
                  icon: Users,
                  title: "Use WOSB Status on GSA Schedule and IDIQ Vehicles",
                  desc: "WOSB certification doesn't only apply to direct SAM.gov opportunities. GSA eBuy allows agencies to issue WOSB-set-aside task orders to GSA Schedule holders. IDIQ vehicles with WOSB on-ramps let agencies issue task orders exclusively to women-owned firms without additional competition. Getting on a GSA Schedule or a relevant IDIQ vehicle multiplies your accessible opportunities far beyond what you can find on SAM.gov. See our GSA Schedule guide for the application process.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Your{" "}
              <Link
                href="/features/pipeline"
                className="text-violet-700 underline font-medium"
              >
                contract pipeline
              </Link>{" "}
              should track opportunities at every stage: agency relationship touchpoints, Sources
              Sought responses, pre-solicitation releases, and active bids. Winning WOSB firms
              treat federal contracting as a long sales cycle — 12 to 18 months from first agency
              contact to contract award is typical for new relationships. The firms that succeed
              are the ones that started the cycle early and stayed consistent. Our{" "}
              <Link
                href="/blog/government-contract-pipeline-management"
                className="text-violet-700 underline font-medium"
              >
                pipeline management guide
              </Link>{" "}
              walks through how to structure that pursuit process.
            </p>
          </div>

          {/* Section 10 */}
          <SectionHeading
            id="common-mistakes"
            number="10"
            title="Mistakes That Sink WOSB Applicants"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              WOSB certification is valuable enough that federal prosecutors and SBA investigators
              actively monitor for fraud. The stakes are real — and so are the compliance
              requirements. These are the mistakes that cost women-owned firms certifications,
              contracts, and in serious cases, federal debarment.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  color: "red" as const,
                  title: "Claiming WOSB status without active MySBA certification",
                  desc: "Self-certification for WOSB is not permitted. The SBA moved all certifications to the MySBA portal, and claiming WOSB set-aside eligibility without a valid certification on file can expose your firm to False Claims Act liability. Before marking WOSB on any proposal, verify your MySBA certification is active and not expired. A proposal submitted while your certification has lapsed — even by one day — can disqualify your firm from award.",
                },
                {
                  color: "amber" as const,
                  title: "Non-women making the real decisions",
                  desc: "The most common ground for WOSB certification denial and protest is control. A business where a woman holds the title of President but a husband, partner, or non-woman executive makes all material decisions does not qualify. SBA reviewers look at operating agreements, bank signature authority, client contracts, and employment records. If your governance documents give board veto rights to non-women investors or partners, the control requirement fails regardless of ownership percentages.",
                },
                {
                  color: "red" as const,
                  title: "Letting certification lapse between proposal and award",
                  desc: "WOSB certification must be valid at contract award, not just at proposal submission. If your certification expires in the time between submitting a proposal and receiving an award notice, you can be found ineligible — even as the apparent low offeror. Track your expiration date and submit for recertification at least 90 days before it hits. SBA expedites reviews for apparent awardees (15-day turnaround), but that doesn't help if your certification expired while you were waiting.",
                },
                {
                  color: "amber" as const,
                  title: "Pursuing contracts in ineligible NAICS codes",
                  desc: "Not every NAICS code is covered by the WOSB program. Bidding on a contract and claiming WOSB set-aside status under a NAICS code that isn't on the SBA's eligible list creates a compliance problem. Contracting officers who don't catch this before award can face their own issues. Always verify the specific NAICS code for each contract you pursue against the current SBA eligible industries list — do not assume based on your primary industry.",
                },
                {
                  color: "red" as const,
                  title: "No capability statement ready for OSDBU outreach",
                  desc: "Every federal agency with significant contract volume operates an Office of Small and Disadvantaged Business Utilization (OSDBU). OSDBU offices actively work to connect contracting officers with certified small businesses — including WOSBs. But they can only refer your firm if you have a professional capability statement that clearly communicates your certifications, NAICS codes, past performance, and differentiators. A one-pager that speaks directly to the agency's mission gets shared internally. A generic company brochure gets filed and forgotten.",
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
                    <AlertTriangle className="w-4 h-4" />
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
              Build your capability statement using{" "}
              <Link
                href="/features/capability-statement"
                className="text-violet-700 underline font-medium"
              >
                CapturePilot&apos;s capability statement generator
              </Link>{" "}
              and download our{" "}
              <Link
                href="/resources/bid-checklist"
                className="text-violet-700 underline font-medium"
              >
                bid readiness checklist
              </Link>{" "}
              to confirm your firm is compliant before any proposal submission. For more context
              on the full range of federal certifications available to your business, see our{" "}
              <Link
                href="/blog/federal-contracting-certifications"
                className="text-violet-700 underline font-medium"
              >
                guide to federal contracting certifications
              </Link>
              .
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-violet-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Your WOSB Certification Deserves a Real Strategy
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot identifies the highest-probability WOSB and EDWOSB set-asides for
                your business — filtered by your NAICS codes, certifications, and target agencies.
                Stop missing women-owned set-asides that were built for you.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily WOSB and EDWOSB set-aside matching tailored to your profile",
                  "Sources Sought alerts before competition opens",
                  "Incumbent contract recompete tracking",
                  "Pipeline management from Sources Sought to award",
                  "Capability statement generator built for women-owned firms",
                  "30-day free trial, no credit card required",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
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
                  href: "/blog/set-aside-programs",
                  icon: ShieldCheck,
                  title: "Set-Aside Programs Overview",
                  desc: "WOSB, SDVOSB, 8(a), HUBZone — how all the programs compare",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  icon: Target,
                  title: "How to Find Government Contracts",
                  desc: "SAM.gov search strategies and pipeline building for small businesses",
                },
                {
                  href: "/blog/capability-statement-guide",
                  icon: FileText,
                  title: "Capability Statement Guide",
                  desc: "What to put in your capability statement and how to use it",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  icon: Award,
                  title: "SDVOSB Contracts Guide",
                  desc: "If you also have a service-connected disability, read this",
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift"
                >
                  <link.icon className="w-5 h-5 text-violet-600" />
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
