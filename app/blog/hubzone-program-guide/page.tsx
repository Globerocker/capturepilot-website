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
  MapPin,
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
  Home,
  XCircle,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-hubzone", label: "What Is the HUBZone Program?" },
  { id: "the-advantage", label: "The Three Contracting Advantages" },
  { id: "area-types", label: "Six Types of Designated HUBZones" },
  { id: "eligibility", label: "Who Qualifies: The Four Requirements" },
  { id: "january-2025-changes", label: "The January 2025 Rule Changes" },
  { id: "how-to-apply", label: "How to Get Certified: Step by Step" },
  { id: "finding-contracts", label: "Finding HUBZone Contracts" },
  { id: "strategy", label: "Building a HUBZone Strategy That Wins" },
  { id: "common-mistakes", label: "Mistakes That Get Companies Decertified" },
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

export default function HUBZoneProgramGuidePage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-emerald-50 to-white">
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
            <span className="text-stone-900 font-medium">HUBZone Program Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <MapPin className="w-4 h-4" /> Set-Asides &amp; Preferences
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            HUBZone Program:{" "}
            <span className="gradient-text">How Location Can Win You Government Contracts</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government set a goal to direct{" "}
            <strong className="text-stone-700">3% of all contract dollars</strong> to HUBZone firms
            — that&apos;s roughly <strong className="text-stone-700">$17.6 billion per year</strong>.
            If your principal office is in a qualifying area and you meet four concrete requirements,
            you can access set-asides, sole-source awards up to $5.5M, and a 10% price preference
            that most competitors simply can&apos;t match.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 4, 2026</span>
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
            id="what-is-hubzone"
            number="01"
            title="What Is the HUBZone Program?"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              HUBZone stands for Historically Underutilized Business Zone. Congress created the
              program in 1997 to channel federal spending into economically distressed communities —
              rural counties with high unemployment, inner-city census tracts with deep poverty,
              Native American lands, and areas still recovering from military base closures.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The mechanic is straightforward: if your business is physically based in one of these
              designated zones and a meaningful share of your employees live there too, the Small
              Business Administration certifies you. That certification unlocks three distinct
              contracting advantages that can make you the preferred vendor on billions of dollars
              in federal work every year.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Unlike{" "}
              <Link href="/blog/8a-sole-source-contracts" className="text-blue-700 hover:underline">
                8(a) certification
              </Link>{" "}
              — which is capped at nine years and requires extensive SBA oversight — or{" "}
              <Link href="/blog/wosb-certification-guide" className="text-blue-700 hover:underline">
                WOSB certification
              </Link>{" "}
              — which is tied to gender — HUBZone is open to any legal small business. Sole
              proprietors, corporations, partnerships, cooperatives, tribal enterprises. If you&apos;re
              in the zone, you&apos;re eligible.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$17.6B",
                  label: "FY2024 HUBZone contract awards",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: Target,
                  stat: "3%",
                  label: "Statutory federal spending goal",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: TrendingUp,
                  stat: "Every year since 2018",
                  label: "HUBZone awards have increased",
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
              The government did not quite hit its 3% target in FY2024 — agencies collectively
              awarded 2.75%, totaling approximately $17.6 billion. That miss is actually relevant to
              you: contracting officers at agencies that fell short are under pressure to find and
              award to HUBZone vendors. Demand exists. The gap is in the pipeline of certified firms
              ready to compete.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="the-advantage"
            number="02"
            title="The Three Contracting Advantages"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              HUBZone certification gives you three distinct levers. Most businesses only use one.
              The firms that build real federal revenue use all three.
            </p>

            {/* Advantage 1 */}
            <div className="animate-on-scroll rounded-2xl border border-stone-200 p-6 mb-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">
                    1. HUBZone Set-Aside Contracts
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Contracting officers can restrict competition to HUBZone-certified firms only.
                    When a requirement is set aside for HUBZone, non-HUBZone companies — regardless
                    of size — cannot compete. You only need two other certified HUBZone firms to be
                    interested for the set-aside to qualify. That&apos;s a much smaller competitive
                    pool than full-and-open competitions, where large businesses dominate.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    The FAR&apos;s order of precedence for small business set-asides means
                    contracting officers should consider HUBZone (alongside 8(a), SDVOSB, and WOSB)
                    before defaulting to a general small business set-aside. That keeps your
                    category near the top of the evaluation stack.
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="animate-on-scroll rounded-2xl border border-stone-200 p-6 mb-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">
                    2. Sole-Source Awards Up to $5.5 Million
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    Under FAR 19.1306, a contracting officer can award you a contract directly —
                    without competitive bidding — if the anticipated price doesn&apos;t exceed{" "}
                    <strong>$5.5 million</strong> (or <strong>$8.5 million</strong> for
                    manufacturing NAICS codes). The catch is that the officer must not expect two or
                    more HUBZone firms to respond competitively.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    This is how HUBZone firms win work fast. Build relationships with contracting
                    officers, demonstrate technical credibility, and make yourself the obvious
                    one-firm solution for specific requirement types. Sole-source authority removes
                    the competition entirely.
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="animate-on-scroll rounded-2xl border border-stone-200 p-6 mb-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-violet-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-2">
                    3. The 10% Price Evaluation Preference
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    In full-and-open competitions — where large businesses can also compete — the
                    contracting officer adds a 10% price adjustment to every non-HUBZone offer when
                    comparing bids. Under FAR 19.1307, if your price is not more than 10% higher
                    than the lowest non-HUBZone offer, you win.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    In practice: a large defense contractor bids $1,000,000 on a full-and-open
                    requirement. For evaluation purposes, their price becomes $1,100,000. Your
                    HUBZone bid at $1,050,000 — which looks more expensive on paper — wins the
                    comparison. This preference applies in every full-and-open competition, not just
                    in small business categories.
                  </p>
                </div>
              </div>
            </div>

            <Callout icon={Lightbulb} color="emerald" title="The Combination Effect">
              Most HUBZone firms discover one lever and stop there. The real strategy is to use the
              price preference to win full-and-open competitions, use set-asides to eliminate large
              business competition, and pursue sole-source relationships for fast, non-competitive
              awards — cycling through all three depending on the opportunity. Run your opportunities
              through CapturePilot&apos;s{" "}
              <Link href="/features/intelligence" className="underline font-medium">
                market intelligence
              </Link>{" "}
              to see which lever fits each pursuit.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="area-types"
            number="03"
            title="Six Types of Designated HUBZones"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Not all HUBZones are inner-city poverty tracts. There are six distinct designation
              types, and your principal office must be physically located in at least one.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left p-3 font-bold text-stone-700">Zone Type</th>
                    <th className="text-left p-3 font-bold text-stone-700">Definition</th>
                    <th className="text-left p-3 font-bold text-stone-700">Expires?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Qualified Census Tract",
                      def: "HUD-designated tracts where ≥50% of households earn <60% of area median income, or poverty rate ≥25%",
                      exp: "Permanent (until Census data changes)",
                    },
                    {
                      type: "Qualified Non-Metropolitan County",
                      def: "Rural county with median household income ≤80% of the non-metropolitan state median, or unemployment rate ≥140% of state/national average",
                      exp: "Permanent (until data changes)",
                    },
                    {
                      type: "Qualified Indian Land",
                      def: "Land within an Indian Reservation, Indian Country, or Oklahoma tribal territory",
                      exp: "Permanent",
                    },
                    {
                      type: "Closed Military Installation",
                      def: "Land within a base or installation closed by BRAC order after 2005",
                      exp: "Permanent",
                    },
                    {
                      type: "Redesignated Area",
                      def: "Census Tract or County that lost HUBZone status due to improved economic data; retains status for 3 years",
                      exp: "3 years from redesignation (July 1, 2026 for the 2023 map cohort)",
                    },
                    {
                      type: "Governor-Designated / Disaster Area",
                      def: "Rural areas (≤50,000 population, ≥120% national unemployment) approved by Governor; or areas with a Presidential disaster declaration",
                      exp: "Varies — often 2–5 years",
                    },
                  ].map((row) => (
                    <tr
                      key={row.type}
                      className="border-b border-stone-100 hover:bg-stone-50 transition-colors"
                    >
                      <td className="p-3 font-medium text-stone-800 align-top">{row.type}</td>
                      <td className="p-3 text-stone-600 align-top">{row.def}</td>
                      <td className="p-3 text-stone-600 align-top">{row.exp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={AlertTriangle} color="amber" title="July 1, 2026 Expiration Warning">
              Redesignated Areas from the SBA&apos;s 2023 map update expire on{" "}
              <strong>July 1, 2026</strong>. If your principal office relies on redesignated-area
              status, check the SBA&apos;s HUBZone Map at maps.certify.sba.gov now. If your zone
              loses its designation, you have until that date to move your principal office to a
              qualifying area or you will lose certification at renewal.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              To check whether a specific address qualifies, use the SBA&apos;s official HUBZone
              Map tool at maps.certify.sba.gov. Enter the address and the map shows you which — if
              any — designation type applies. It also shows your employees&apos; home addresses for
              the 35% residency calculation.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              When you&apos;re evaluating real estate decisions, run the prospective address through
              the map before signing a lease. A small difference in location can mean the difference
              between qualifying and not.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Does your business qualify for HUBZone?
                </h3>
                <p className="text-emerald-100 mb-5 text-sm leading-relaxed">
                  CapturePilot&apos;s Quick Checker reviews your principal office location, employee
                  headcount, and ownership structure against the current HUBZone map and all
                  other federal certifications in under 60 seconds.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-emerald-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="eligibility"
            number="04"
            title="Who Qualifies: The Four Requirements"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The SBA&apos;s eligibility rules have four hard requirements. Miss any one and the
              application is denied — or the certification is revoked on re-examination.
            </p>

            {[
              {
                num: "01",
                icon: Building2,
                title: "You must be a small business under SBA size standards",
                body: "Your business must meet the SBA's applicable size standard for your primary NAICS code — measured by either annual revenue or number of employees, depending on the industry. Use the SBA's Size Standards Tool at sba.gov to confirm you qualify. If you exceed the size standard, you cannot hold HUBZone certification regardless of location.",
                color: "bg-blue-50 border-blue-200",
                iconColor: "text-blue-600",
              },
              {
                num: "02",
                icon: Users,
                title: "At least 51% owned and controlled by U.S. citizens (or qualifying entities)",
                body: "The majority owner(s) must be U.S. citizens. Alternatively, the business can be owned by a Community Development Corporation (CDC), agricultural cooperative, Indian tribe, Alaska Native Corporation (ANC), or Native Hawaiian Organization (NHO). Ownership by permanent residents, green card holders, or foreign nationals does not qualify — even if they live in a HUBZone.",
                color: "bg-emerald-50 border-emerald-200",
                iconColor: "text-emerald-600",
              },
              {
                num: "03",
                icon: Home,
                title: "Principal office must be physically in a HUBZone",
                body: "Your 'principal office' is defined as the location where the greatest number of your employees work. This must be real office space — desk, furniture, equipment, accessible during business hours. Virtual offices, mail drops, and registered agent addresses do not count. If your employees are fully remote, the principal office defaults to your home office location. That address must be in a designated HUBZone.",
                color: "bg-violet-50 border-violet-200",
                iconColor: "text-violet-600",
              },
              {
                num: "04",
                icon: MapPin,
                title: "At least 35% of employees must reside in a HUBZone",
                body: "This is the most operationally demanding requirement. At least 35% of your total employee headcount (not just full-time) must live in a designated HUBZone. Under the January 2025 rule, employees must have resided in a HUBZone for at least 90 days before the relevant review date (down from 180). They also need to work at least 10 hours per week to count. You can also retain credit for up to four 'legacy employees' — those who lived in a HUBZone when hired but have since moved — as long as at least one current employee still resides in a zone.",
                color: "bg-amber-50 border-amber-200",
                iconColor: "text-amber-600",
              },
            ].map((req) => (
              <div
                key={req.num}
                className={`animate-on-scroll rounded-2xl border p-6 mb-4 ${req.color} hover-lift`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-xs font-bold font-mono text-stone-500">{req.num}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <req.icon className={`w-4 h-4 ${req.iconColor}`} />
                      <h3 className="font-bold text-stone-900 text-sm">{req.title}</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{req.body}</p>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-stone-600 leading-relaxed mt-6 mb-4">
              These four requirements apply at the time of application and must be maintained
              continuously. The SBA can re-examine your certification at any time — and will
              automatically review you at the three-year recertification mark.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              For context on how HUBZone compares to other set-aside certifications, see our guide
              on{" "}
              <Link
                href="/blog/sdvosb-contracts-guide"
                className="text-blue-700 hover:underline"
              >
                SDVOSB contracts
              </Link>{" "}
              and our overview of{" "}
              <Link
                href="/features/quick-checker"
                className="text-blue-700 hover:underline"
              >
                which certifications your business qualifies for
              </Link>
              .
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="january-2025-changes"
            number="05"
            title="The January 2025 Rule Changes"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA published a final rule effective <strong>January 16, 2025</strong> that made
              meaningful changes to HUBZone eligibility. If you read older guides or talked to
              consultants before this date, some of what you heard is now wrong.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left p-3 font-bold text-stone-700">Rule Element</th>
                    <th className="text-left p-3 font-bold text-stone-700">Before Jan 2025</th>
                    <th className="text-left p-3 font-bold text-stone-700">After Jan 2025</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      rule: "Employee residency look-back period",
                      before: "180 days",
                      after: "90 days",
                    },
                    {
                      rule: "Recertification frequency",
                      before: "Annually",
                      after: "Every 3 years",
                    },
                    {
                      rule: "Minimum hours to count as employee",
                      before: "Not clearly defined",
                      after: "10 hours/week",
                    },
                    {
                      rule: "Legacy employee credit",
                      before: "Not available",
                      after: "Up to 4 legacy employees who moved out of a HUBZone after hire",
                    },
                    {
                      rule: "Principal office virtual rule",
                      before: "Ambiguous",
                      after: "Virtual offices explicitly excluded; physical presence required",
                    },
                  ].map((row) => (
                    <tr
                      key={row.rule}
                      className="border-b border-stone-100 hover:bg-stone-50 transition-colors"
                    >
                      <td className="p-3 font-medium text-stone-800 align-top">{row.rule}</td>
                      <td className="p-3 text-stone-500 align-top">{row.before}</td>
                      <td className="p-3 text-emerald-700 font-medium align-top">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout icon={CheckCircle2} color="emerald" title="What Changed in Your Favor">
              Two changes are clearly favorable. First, recertifying every three years instead of
              annually is significantly less administrative burden — and less opportunity for SBA
              to find a technical violation at the wrong moment. Second, the legacy employee rule
              gives growing businesses some runway when staff relocate. If you hired someone in a
              HUBZone and they moved to a suburb, you can count them for a while — up to four such
              employees simultaneously — as long as one current employee still lives in a zone.
            </Callout>

            <Callout icon={AlertTriangle} color="amber" title="What You Must Track Differently">
              The 90-day residency look-back means employees must have lived in a HUBZone for 90
              consecutive days before your certification review date (not just the date of
              application). If an employee just moved in, they don&apos;t count yet. This matters
              if you&apos;re on the borderline of the 35% threshold. Track move-in dates for all
              HUBZone-resident employees carefully.
            </Callout>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="how-to-apply"
            number="06"
            title="How to Get Certified: Step by Step"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              The application is free and submitted through the SBA&apos;s certify.sba.gov portal.
              The SBA has 60 calendar days to make a determination after it receives a
              <em> complete</em> package. Incomplete packages restart the clock. Plan for 60–160 days
              total, depending on how clean your documentation is.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Confirm your SAM.gov registration is active",
                  body: "Your business must be registered and active in SAM.gov before the SBA will process a HUBZone application. If you haven't registered yet, that step typically takes 3–10 business days for a new registration. See our SAM.gov guide if you're starting from scratch.",
                  icon: FileText,
                  link: { href: "/blog/sam-gov-search-tips", label: "SAM.gov tips" },
                },
                {
                  step: "02",
                  title: "Verify your principal office address on the HUBZone Map",
                  body: "Go to maps.certify.sba.gov and enter your business address. Confirm it falls inside a designated zone. Do the same for every employee's home address you plan to count toward the 35% requirement. Take screenshots — you'll reference these during the application.",
                  icon: MapPin,
                  link: null,
                },
                {
                  step: "03",
                  title: "Gather your documentation",
                  body: "The SBA will ask for: articles of incorporation or organization; operating agreement or bylaws showing U.S. citizen ownership; lease agreement or proof of ownership for your principal office; payroll records or W-2s showing employee home addresses; state and federal tax returns for the most recent fiscal year; and evidence of active business operations.",
                  icon: Award,
                  link: null,
                },
                {
                  step: "04",
                  title: "Submit your application through certify.sba.gov",
                  body: "Create an account at certify.sba.gov and complete the online application. The system will prompt you for each document type. The SBA will email you a verification within two business days. Respond to any requests for additional information within five business days — delays on your end pause the clock.",
                  icon: Zap,
                  link: null,
                },
                {
                  step: "05",
                  title: "Respond promptly to SBA requests",
                  body: "The most common reason applications take 160+ days instead of 60 is slow applicant response. The SBA sends requests for additional documents during their review. Treat each one as urgent — respond within one business day where possible. Having a single point of contact designated for the application helps.",
                  icon: Clock,
                  link: null,
                },
                {
                  step: "06",
                  title: "Update SAM.gov with your HUBZone status",
                  body: "Once the SBA approves your certification, they will update certify.sba.gov automatically. Verify that your SAM.gov profile also reflects 'HUBZone' under your small business designations. This is what contracting officers and proposal reviewers check. Discrepancies between certify.sba.gov and SAM.gov can disqualify you from a set-aside award.",
                  icon: CheckCircle2,
                  link: null,
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="animate-on-scroll flex gap-5 rounded-xl border border-stone-200 p-5 hover-lift"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{s.step}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <s.icon className="w-4 h-4 text-blue-600" />
                      <h3 className="font-bold text-stone-900 text-sm">{s.title}</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {s.body}
                      {s.link && (
                        <>
                          {" "}
                          <Link href={s.link.href} className="text-blue-700 hover:underline">
                            {s.link.label}
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Once certified, you&apos;re in the system for three years. Maintain the 35% employee
              residency requirement throughout — not just at the renewal date. The SBA can conduct
              an unannounced program examination at any time.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="finding-contracts"
            number="07"
            title="Finding HUBZone Contracts"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              HUBZone set-asides don&apos;t always announce themselves clearly in the title. On
              SAM.gov, you need to filter specifically for set-aside type. Here&apos;s how to work
              the system.
            </p>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              Filtering SAM.gov for HUBZone Opportunities
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              In SAM.gov&apos;s contract opportunities search, expand the &quot;Set-Aside&quot;
              filter on the left sidebar. Select &quot;HUBZone Small Business (SBA)&quot; to see
              dedicated HUBZone set-asides. Also check &quot;Partial Small Business Set-Aside&quot;
              — many IDIQs and BPAs have HUBZone-specific task order pools inside them.
            </p>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              Watch Sources Sought Notices
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Before a formal solicitation, many contracting officers publish a{" "}
              <Link
                href="/blog/sources-sought-notice"
                className="text-blue-700 hover:underline"
              >
                Sources Sought Notice
              </Link>{" "}
              asking HUBZone firms to identify themselves. Responding to these costs you two hours
              and positions you as a known quantity when the solicitation drops. Contracting officers
              are required to conduct market research. Being in their database matters.
            </p>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              Target Agencies With Missed Goals
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBA publishes an annual Small Business Procurement Scorecard that grades every
              agency against its small business goals, including HUBZone. Agencies with an
              &quot;Exceeds&quot; or &quot;A+&quot; grade are already succeeding. Agencies with
              &quot;Below Goal&quot; marks are your best prospects — contracting officers there are
              actively looking for HUBZone vendors to fix their score. Check the most recent
              scorecard at sba.gov before prioritizing your target agency list.
            </p>

            <Callout icon={TrendingUp} color="sky" title="Let the Platform Find Them For You">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="underline font-medium">
                opportunity matching engine
              </Link>{" "}
              filters for your specific certifications — including HUBZone — against your NAICS
              codes and past performance profile. Instead of searching manually, you get a daily
              feed of set-asides and full-and-open competitions where your 10% price preference
              applies. Pair that with the{" "}
              <Link href="/features/pipeline" className="underline font-medium">
                pipeline tracker
              </Link>{" "}
              to manage multiple pursuits in parallel.
            </Callout>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              IDIQs and Contract Vehicles
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Several major{" "}
              <Link
                href="/blog/idiq-contracts-explained"
                className="text-blue-700 hover:underline"
              >
                IDIQ contract vehicles
              </Link>{" "}
              include HUBZone-specific award pools. Getting on one of these vehicles means
              contracting officers can issue task orders to you directly, bypassing the open-market
              competition. GSA Schedules have HUBZone categories. CIO-SP4 at NIH has a HUBZone
              pool. DHS EAGLE II had HUBZone lanes. Research the major vehicles in your NAICS
              category — being on the right contract vehicle multiplies your opportunity flow.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Find HUBZone contracts matched to your NAICS codes
                </h3>
                <p className="text-blue-100 mb-5 text-sm leading-relaxed">
                  CapturePilot surfaces HUBZone set-asides, full-and-open competitions where your
                  10% preference applies, and Sources Sought notices — filtered to your specific
                  capabilities and location.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-50 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-blue-500/40 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-500/60 transition-colors"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="strategy"
            number="08"
            title="Building a HUBZone Strategy That Wins"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Having the certification is the minimum. Winning contracts requires a deliberate
              strategy around which advantages to deploy and when. Here are the approaches that
              work.
            </p>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              Pick Agencies With Active HUBZone Goals
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Not all agencies use HUBZone set-asides at the same rate. The Department of Defense,
              GSA, HHS, and DHS consistently generate HUBZone opportunities across a wide range
              of service categories. VA does as well, but note that at the VA, SDVOSB firms get
              priority over HUBZone under the Veterans First program — so if you&apos;re an SDVOSB,
              lean on that designation first at the VA.
            </p>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              Pair HUBZone With Other Certifications
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              HUBZone is stackable. Nothing prevents you from holding HUBZone certification
              simultaneously with 8(a), SDVOSB, or WOSB status. Dual-certified firms have more
              levers — they can pursue 8(a) set-asides and HUBZone set-asides, and use the 10%
              price preference in full-and-open competitions. Use CapturePilot&apos;s{" "}
              <Link href="/features/quick-checker" className="text-blue-700 hover:underline">
                Quick Checker
              </Link>{" "}
              to identify every certification your business qualifies for simultaneously.
            </p>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              Use the Price Preference Strategically
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The 10% price preference applies in full-and-open competitions. Most small businesses
              ignore full-and-open solicitations because large businesses seem unbeatable on price.
              With HUBZone, you can price at up to 10% above the lowest non-HUBZone bid and still
              win on evaluation. That lets you maintain healthy margins instead of racing to the
              bottom. Build that cushion into your cost model — it&apos;s a legitimate competitive
              advantage.
            </p>

            <h3 className="font-bold text-stone-900 mt-8 mb-3">
              Build a Capability Statement That Leads With HUBZone
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Contracting officers actively looking for HUBZone vendors need to identify you fast.
              Your{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-700 hover:underline"
              >
                capability statement
              </Link>{" "}
              should display your HUBZone status prominently — in the header, near your NAICS
              codes, and in your differentiators section. Pair that with specific language about
              which HUBZone designation type you hold and the zone&apos;s location. That tells a
              contracting officer exactly what they need to justify a set-aside.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              For broader strategy on building the habits and processes that separate consistent
              HUBZone winners from one-and-done contractors, see our guide to the{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 hover:underline">
                capture management process
              </Link>
              .
            </p>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="common-mistakes"
            number="09"
            title="Mistakes That Get Companies Decertified"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              HUBZone decertification is more common than most firms expect. These are the specific
              failures that cause it.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  title: "Employee turnover drops the 35% residency below threshold",
                  body: "You hire a team to win contracts, then staff grows. New employees often don't live in HUBZones. Within 18 months, your HUBZone residents go from 40% to 28% of headcount — and you're out of compliance. Proactively track your ratio at every hire. If you're close to the edge, look for candidates in your HUBZone area or adjust hiring pace.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  title: "Moving the principal office without checking the new address",
                  body: "You find a better office space, sign a lease, move in. Two months later you realize the new address is two blocks outside the HUBZone boundary. This happens. Always run a prospective address through maps.certify.sba.gov before signing any lease or purchasing commercial property.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  title: "Relying on a redesignated zone without tracking the expiration",
                  body: "Redesignated Areas have defined expiration dates. Many firms certified under the 2023 map update are in zones expiring July 1, 2026. If you don't know your zone type and its expiration, you could lose certification with no warning. Check your zone type on certify.sba.gov under your certification details.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  title: "Failing to recertify on time",
                  body: "Certification now lasts three years. When it expires, you cannot bid on HUBZone set-asides until renewal is approved. Start your recertification at least 90 days before expiration. The SBA portal will send reminders, but don't rely on them — calendar your own 120-day alert.",
                },
                {
                  icon: XCircle,
                  color: "text-red-600",
                  bg: "bg-red-50 border-red-200",
                  title: "Not updating SAM.gov after approval",
                  body: "The SBA updates certify.sba.gov automatically when you're approved. But SAM.gov is a separate system and is not always synced instantaneously. Before pursuing any HUBZone set-aside contract, verify your HUBZone designation shows as active in your SAM.gov entity registration. Discrepancies can cause award protests or even contract termination.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`animate-on-scroll rounded-xl border p-5 ${item.bg} hover-lift`}
                >
                  <div className="flex items-start gap-3">
                    <item.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.color}`} />
                    <div>
                      <h3 className="font-bold text-stone-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="blue" title="The Compliance Habit That Protects You">
              Run a HUBZone compliance audit every six months: (1) confirm your principal office
              address is still in a qualifying zone, (2) calculate your current employee HUBZone
              residency percentage, (3) verify your zone type and its expiration date, and (4)
              confirm SAM.gov and certify.sba.gov both show active HUBZone status. This
              four-check audit takes under an hour and prevents the majority of decertification
              scenarios.
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  Ready to turn your HUBZone location into a revenue engine?
                </h3>
                <p className="text-stone-500 mb-5 text-sm leading-relaxed">
                  CapturePilot matches your HUBZone certification to the right contracts, tracks
                  your pipeline from Sources Sought to award, and gives you the intelligence to
                  know which opportunities are worth pursuing before you spend a week writing a
                  proposal.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-700 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-white text-stone-700 border border-stone-200 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-stone-50 transition-colors"
                  >
                    Check your eligibility free
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-10 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 mb-6">Related Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/8a-sole-source-contracts",
                  title: "8(a) Sole Source Contracts",
                  desc: "The fastest path to federal revenue for 8(a)-certified firms",
                },
                {
                  href: "/blog/sdvosb-contracts-guide",
                  title: "SDVOSB Contracts Guide",
                  desc: "$28.6 billion in veteran set-asides and how to access them",
                },
                {
                  href: "/blog/wosb-certification-guide",
                  title: "WOSB Certification Guide",
                  desc: "How women-owned businesses win federal contracts",
                },
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  title: "How to Find Government Contracts",
                  desc: "The complete guide to finding opportunities on SAM.gov and beyond",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group rounded-xl border border-stone-200 p-5 hover:border-blue-300 hover:bg-blue-50/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-stone-900 text-sm group-hover:text-blue-700 transition-colors mb-1">
                        {post.title}
                      </p>
                      <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-0.5" />
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
