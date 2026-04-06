"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Lightbulb,
  Hash, BookOpen, ChevronRight, Target, Users, Globe,
  Sparkles, XCircle, Shield, FileText, Briefcase, Zap,
  DollarSign, Award, Star, MapPin, BadgeCheck, Scale,
  TrendingUp, Building2, UserCheck, Heart,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

/* --- Table of Contents --- */
const TOC = [
  { id: "what-are-set-asides", label: "What Are Set-Asides?" },
  { id: "seven-categories", label: "The 7 Set-Aside Categories" },
  { id: "dollar-thresholds", label: "Dollar Thresholds & Limits" },
  { id: "how-to-get-certified", label: "How to Get Certified" },
  { id: "capturepilot-tracking", label: "How CapturePilot Tracks Them" },
  { id: "stats", label: "Set-Aside Statistics" },
  { id: "get-matched", label: "Get Matched to Set-Aside Contracts" },
];

/* --- Info Callout --- */
function Callout({ icon: Icon, color, title, children }: {
  icon: React.ElementType; color: "emerald" | "amber" | "sky";
  title: string; children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
  };
  const iconColors = { emerald: "text-emerald-600", amber: "text-amber-600", sky: "text-sky-600" };
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

/* --- Section Heading --- */
function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-6 pt-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

/* --- Page --- */
export default function SetAsideProgramsPage() {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll(".animate-on-scroll");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("animate-fade-in-up"); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* --- Hero --- */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">Set-Aside Programs</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Strategy Guide
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Set-Aside Programs:{" "}
            <span className="gradient-text">Your Unfair Advantage</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government reserves billions of dollars in contracts exclusively for qualifying
            small businesses. If you&apos;re veteran-owned, women-owned, or disadvantaged &mdash;
            set-asides are the single biggest lever you have. Here&apos;s how to use them.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Updated April 2026</span>
          </div>
        </div>
      </section>

      {/* --- Table of Contents --- */}
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
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-700 transition-colors py-1"
                >
                  <span className="text-emerald-600 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* --- Article Body --- */}
      <article ref={articleRef} className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* --- What Are Set-Asides? --- */}
          <SectionHeading id="what-are-set-asides" number="01" title="What Are Set-Asides?" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside contracts are federal procurements reserved exclusively for businesses that
              meet specific socioeconomic criteria. When a contract is &quot;set aside,&quot; only
              qualifying businesses can bid &mdash; large corporations are locked out entirely.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The Small Business Act requires federal agencies to award a minimum percentage of
              contracts to small businesses. In FY2025, the government set a goal of{" "}
              <strong>23% of all prime contract dollars</strong> to small businesses, and typically
              exceeds that target.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              But it goes further. Within that 23%, there are specific goals for each socioeconomic
              category:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { pct: "5%", label: "Small Disadvantaged Business (SDB)", icon: Star },
                { pct: "5%", label: "Women-Owned Small Business (WOSB)", icon: Heart },
                { pct: "3%", label: "Service-Disabled Veteran-Owned (SDVOSB)", icon: Shield },
                { pct: "3%", label: "HUBZone Small Business", icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <p className="text-3xl font-black text-stone-900">{item.pct}</p>
                  <p className="text-sm text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              These aren&apos;t just goals &mdash; agencies are scored on meeting them. Contracting
              officers actively seek qualifying businesses to satisfy these mandates. That means
              if you&apos;re certified, agencies <strong>want</strong> to give you work.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Why This Matters">
            In full-and-open competition, you might be bidding against 50+ companies including
            billion-dollar defense contractors. In a set-aside, you&apos;re competing against maybe
            5-10 small businesses. The math is in your favor.
          </Callout>

          {/* --- The 7 Set-Aside Categories --- */}
          <SectionHeading id="seven-categories" number="02" title="The 7 Set-Aside Categories" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Each set-aside program has unique eligibility criteria, benefits, and limitations.
              Understanding which programs you qualify for is critical to your GovCon strategy:
            </p>

            <div className="space-y-6">
              {[
                {
                  num: "1", icon: Star, title: "8(a) Business Development Program",
                  threshold: "Sole source up to $4.5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "Business must be at least 51% owned by U.S. citizens who are socially and economically disadvantaged",
                    "Owner's personal net worth must be below $850K (excluding primary residence and business value)",
                    "Business must have been in operation for at least 2 years",
                    "Annual revenue must fall below the SBA size standard for the primary NAICS code",
                  ],
                  benefits: "9-year program with SBA mentorship, sole-source contracts (no competition required), joint ventures with established firms, access to the 8(a) Mentor-Protege program.",
                  note: "The 8(a) program is widely considered the most powerful set-aside. A single sole-source 8(a) contract can transform a small business.",
                },
                {
                  num: "2", icon: Shield, title: "Service-Disabled Veteran-Owned Small Business (SDVOSB)",
                  threshold: "Sole source up to $5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "Business must be at least 51% owned by one or more service-disabled veterans",
                    "Service-connected disability rating from the VA (any percentage)",
                    "The disabled veteran(s) must manage day-to-day operations",
                    "Must be verified through SBA's Veteran Small Business Certification (VetCert) program",
                  ],
                  benefits: "Sole-source contracts, restricted competition set-asides, and a 3% government-wide contracting goal. Particularly strong at VA and DoD.",
                  note: "SDVOSB sole-source threshold was increased to $5M in recent years. VA has a mandatory SDVOSB 'Rule of Two' preference.",
                },
                {
                  num: "3", icon: Award, title: "Veteran-Owned Small Business (VOSB)",
                  threshold: "Set-aside eligible (no sole-source authority)",
                  eligibility: [
                    "Business must be at least 51% owned by one or more veterans",
                    "The veteran(s) must manage day-to-day operations and make long-term decisions",
                    "Must be verified through SBA's VetCert program",
                    "Veteran must have served on active duty and received an honorable discharge",
                  ],
                  benefits: "Restricted competition in set-aside procurements. While VOSB lacks sole-source authority, the VA gives preference to VOSB before going to full-and-open competition.",
                  note: "VOSB is a stepping stone. If the veteran owner has any service-connected disability, they should pursue SDVOSB instead for stronger benefits.",
                },
                {
                  num: "4", icon: Users, title: "Women-Owned Small Business (WOSB)",
                  threshold: "Sole source up to $5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "Business must be at least 51% owned by one or more women who are U.S. citizens",
                    "Women must manage day-to-day operations and make long-term strategic decisions",
                    "Must be certified through SBA's WOSB Federal Contracting Program",
                    "Only eligible for NAICS codes designated by SBA as underrepresented by WOSBs",
                  ],
                  benefits: "Sole-source and set-aside contracts in designated NAICS codes. The government's 5% WOSB goal creates significant procurement opportunities.",
                  note: "Not all NAICS codes are WOSB-eligible. Check the SBA's designated list before applying. Many service-based codes are covered.",
                },
                {
                  num: "5", icon: Heart, title: "Economically Disadvantaged Women-Owned Small Business (EDWOSB)",
                  threshold: "Sole source up to $5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "Must meet all WOSB eligibility requirements",
                    "Owner's personal net worth must be below $750,000 (excluding primary residence and business)",
                    "Owner's adjusted gross income must average below $400,000 over three years",
                    "Owner's total assets must be below $6 million",
                  ],
                  benefits: "Everything WOSB gets, PLUS eligibility for additional NAICS codes beyond the standard WOSB list. EDWOSB covers industries where women are substantially underrepresented.",
                  note: "If you qualify for EDWOSB, always apply for it over standard WOSB — you get access to more NAICS codes and the same sole-source authority.",
                },
                {
                  num: "6", icon: MapPin, title: "HUBZone (Historically Underutilized Business Zone)",
                  threshold: "Sole source up to $5M (services) / $7M (manufacturing)",
                  eligibility: [
                    "Principal office must be located in a designated HUBZone",
                    "At least 35% of employees must reside in a HUBZone",
                    "Business must be small by SBA size standards",
                    "Business must be at least 51% owned by U.S. citizens, a Community Development Corporation, or an Indian tribe",
                  ],
                  benefits: "Sole-source contracts, set-aside competitions, and a 10% price evaluation preference on full-and-open competitions. The 3% government-wide goal creates ongoing demand.",
                  note: "HUBZone boundaries change periodically. Use the SBA's HUBZone Map to verify your office and employee locations qualify. Rural areas and certain urban zones are often covered.",
                },
                {
                  num: "7", icon: Briefcase, title: "Small Disadvantaged Business (SDB)",
                  threshold: "Up to 10% price evaluation preference (no sole-source)",
                  eligibility: [
                    "Business must be at least 51% owned by one or more individuals who are socially and economically disadvantaged",
                    "Owner's personal net worth must be below $850,000",
                    "Self-certification is allowed — SBA certification is optional but recommended",
                    "Must be small under the applicable NAICS code",
                  ],
                  benefits: "Up to a 10% price evaluation preference on certain contracts. This means if your price is within 10% of a non-SDB competitor, you can still win on price.",
                  note: "SDB is the broadest category and the easiest to self-certify. If you meet the criteria, there's no reason not to claim this status on SAM.gov.",
                },
              ].map((program) => (
                <div key={program.num} className="rounded-2xl border border-stone-200 overflow-hidden hover-lift animate-on-scroll">
                  <div className="bg-stone-50 px-6 py-4 flex items-center gap-3 border-b border-stone-200">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900">{program.num}. {program.title}</h3>
                      <span className="text-xs text-emerald-700 font-medium">{program.threshold}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Eligibility Requirements</p>
                      <ul className="space-y-1.5">
                        {program.eligibility.map((req, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Benefits</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{program.benefits}</p>
                    </div>
                    <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-sky-800 leading-relaxed"><strong>Key Insight:</strong> {program.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Dollar Thresholds --- */}
          <SectionHeading id="dollar-thresholds" number="03" title="Dollar Thresholds & Limits" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Understanding the dollar limits for each procurement type helps you target the right
              opportunities:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-8 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="text-left px-6 py-3 font-bold text-stone-900">Procurement Type</th>
                      <th className="text-left px-6 py-3 font-bold text-stone-900">Threshold</th>
                      <th className="text-left px-6 py-3 font-bold text-stone-900">Competition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Micro-Purchase", threshold: "Up to $10,000", competition: "None required" },
                      { type: "Simplified Acquisition", threshold: "$10,000 - $250,000", competition: "Reserved for small business" },
                      { type: "8(a) Sole Source (Services)", threshold: "Up to $4,500,000", competition: "None — direct award" },
                      { type: "8(a) Sole Source (Manufacturing)", threshold: "Up to $7,000,000", competition: "None — direct award" },
                      { type: "SDVOSB/WOSB/HUBZone Sole Source", threshold: "Up to $5,000,000 (svc) / $7M (mfg)", competition: "None — direct award" },
                      { type: "Set-Aside (Competitive)", threshold: "No dollar limit", competition: "Limited to qualifying businesses" },
                      { type: "Full & Open Competition", threshold: "Above $250,000", competition: "All businesses eligible" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0">
                        <td className="px-6 py-3 text-stone-700 font-medium">{row.type}</td>
                        <td className="px-6 py-3 text-stone-600">{row.threshold}</td>
                        <td className="px-6 py-3 text-stone-500">{row.competition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              The sweet spot for new contractors is the <strong>$10K-$250K range</strong> (Simplified
              Acquisition Procedures). These are automatically set aside for small businesses, have
              streamlined evaluation criteria, and are often awarded quickly. As you build past
              performance, move up to competitive set-asides and sole-source awards.
            </p>
          </div>

          <Callout icon={DollarSign} color="emerald" title="The $4.5M Opportunity">
            If you&apos;re in the 8(a) program, a contracting officer can award you a contract worth
            up to $4.5 million <strong>without any competition</strong>. They just need to justify
            that you can do the work. One relationship, one contract, one phone call. That&apos;s the
            power of 8(a).
          </Callout>

          {/* --- How to Get Certified --- */}
          <SectionHeading id="how-to-get-certified" number="04" title="How to Get Certified" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Certification processes vary by program. Here&apos;s a roadmap for each:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  icon: Star, title: "8(a) Certification",
                  steps: "Apply through certify.sba.gov. Requires extensive documentation: tax returns (3 years), financial statements, personal financial statements, proof of disadvantaged status. Processing: 90 days. Duration: 9 years (non-renewable).",
                },
                {
                  icon: Shield, title: "SDVOSB / VOSB Certification (VetCert)",
                  steps: "Apply through SBA's VetCert portal at veterans.certify.sba.gov. Requires DD-214, VA disability rating letter, business ownership documents, operating agreement. Processing: 60-90 days.",
                },
                {
                  icon: Users, title: "WOSB / EDWOSB Certification",
                  steps: "Apply through certify.sba.gov or use an SBA-approved third-party certifier. Requires proof of 51% women ownership, management control documentation, financial records. Processing: 60-90 days.",
                },
                {
                  icon: MapPin, title: "HUBZone Certification",
                  steps: "Apply through certify.sba.gov. Must prove principal office location and employee residency in HUBZone using the SBA HUBZone map. Requires payroll records and lease/deed. Processing: 60-120 days.",
                },
                {
                  icon: Briefcase, title: "SDB Self-Certification",
                  steps: "Update your SAM.gov profile to indicate SDB status. No separate application required — self-certification is allowed. However, SBA certification (through 8(a) or standalone) provides stronger standing.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-stone-200 animate-on-scroll">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{item.title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.steps}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Don't Wait">
            Certification can take 60-120 days. Start the process <strong>now</strong>, even if you&apos;re
            not ready to bid. You can&apos;t compete for set-aside contracts until your certification
            is approved. Every week you delay is a week of lost opportunity.
          </Callout>

          {/* --- How CapturePilot Tracks Them --- */}
          <SectionHeading id="capturepilot-tracking" number="05" title="How CapturePilot Tracks Set-Asides" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              CapturePilot automatically identifies and prioritizes set-aside opportunities that match
              your certifications:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: Zap, title: "Automatic Detection", desc: "Every opportunity is tagged with its set-aside type. We match your certifications against active and upcoming set-asides daily." },
                { icon: Target, title: "Score Boost", desc: "Set-aside matches receive a scoring boost in your feed. An SDVOSB set-aside for a veteran-owned user appears as a HOT match automatically." },
                { icon: TrendingUp, title: "Trend Analysis", desc: "We track which agencies are meeting their set-aside goals and which are behind. Agencies behind their targets are more likely to award set-aside contracts." },
                { icon: BadgeCheck, title: "Eligibility Alerts", desc: "If you haven't claimed a certification you likely qualify for, we flag it. Many businesses miss set-aside opportunities because they haven't updated SAM.gov." },
                { icon: UserCheck, title: "Competitor Intelligence", desc: "See how many certified businesses are registered under each set-aside type for your NAICS codes. Fewer competitors = higher probability of winning." },
                { icon: Building2, title: "Agency Preferences", desc: "Some agencies have SDVOSB preference mandates (like VA). We highlight these so you know where your certification carries the most weight." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Stats --- */}
          <SectionHeading id="stats" number="06" title="Set-Aside Statistics That Should Motivate You" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              The numbers don&apos;t lie. Set-asides are the fastest path to federal revenue:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { stat: "$178B+", label: "Total small business contract awards in FY2025", icon: DollarSign },
                { stat: "26.5%", label: "Of all federal contracts went to small business", icon: TrendingUp },
                { stat: "43%", label: "Of set-aside contracts have fewer than 5 bidders", icon: Users },
                { stat: "3.2x", label: "Higher win rate for set-aside vs full & open", icon: Target },
                { stat: "12 weeks", label: "Average time from bid to award for SAP set-asides", icon: Scale },
                { stat: "87%", label: "Of 8(a) firms win at least one contract during the program", icon: Award },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              The takeaway? Set-asides dramatically reduce competition and increase your probability
              of winning. If you qualify for any certification &mdash; get it. The ROI on the
              paperwork is measured in millions of dollars.
            </p>
          </div>

          {/* --- CTA --- */}
          <div id="get-matched" className="scroll-mt-24 pt-12">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Get Matched to Set-Aside Contracts
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot identifies set-aside opportunities that match your certifications,
                NAICS codes, and capabilities. We score every opportunity so you know which
                ones to pursue first.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily matching to 40,000+ opportunities with set-aside tagging",
                  "Automatic certification-based scoring boosts",
                  "Competitor count analysis per set-aside type",
                  "Agency set-aside goal tracking",
                  "Free eligibility Quick Checker",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={SIGNUP_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Start Free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={CHECK_URL}
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Run Quick Check
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">
                No credit card required. See your set-aside matches in minutes.
              </p>
            </div>
          </div>

          {/* --- Related Links --- */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/government-contracting-101" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Government Contracting 101</p>
                  <p className="text-xs text-stone-500">The complete beginner&apos;s guide</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/naics-codes-explained" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Hash className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">NAICS Codes Explained</p>
                  <p className="text-xs text-stone-500">Find the right codes for your business</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/sam-registration-guide" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Globe className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">SAM.gov Registration Guide</p>
                  <p className="text-xs text-stone-500">Step-by-step walkthrough for 2026</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/capability-statement-guide" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <FileText className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Capability Statement Guide</p>
                  <p className="text-xs text-stone-500">Write one that wins contracts</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
