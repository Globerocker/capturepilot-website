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
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Clock,
  DollarSign,
  Shield,
  Award,
  FileText,
  Search,
  Lock,
  Building2,
  Layers,
  Star,
  Eye,
  ChevronDown,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "scale-of-sole-source", label: "How Much Money Bypasses Competition" },
  { id: "seven-exceptions", label: "The 7 Legal Exceptions (FAR 6.302)" },
  { id: "three-document-types", label: "Three Types of Sole Source Documents" },
  { id: "approval-thresholds", label: "J&A Approval Thresholds by Dollar Value" },
  { id: "only-one-source", label: "How Agencies Justify 'Only One Source'" },
  { id: "positioning-strategies", label: "Six Ways to Position for Sole Source Awards" },
  { id: "sam-footprint", label: "The SAM.gov Footprint You Need" },
  { id: "protests-transparency", label: "Protests, Posting, and What Happens Next" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet" | "orange";
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
    orange: "bg-orange-50 border-orange-200 text-orange-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
    violet: "text-violet-600",
    orange: "text-orange-600",
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

export default function SoleSourceJustificationPage() {
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
            <span className="text-stone-900 font-medium">Sole Source Justification Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Sole Source Justifications:{" "}
            <span className="gradient-text">
              How to Position Your Business for Direct Award Without Open Competition
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awarded roughly $271 billion in contracts through noncompetitive
            channels in FY2025 — about 37% of all federal contract spending. Of that, a single FAR
            exception ("only one responsible source") accounted for $199 billion alone. That money
            doesn't go through open competition. It goes to companies that agencies already know,
            trust, and can justify choosing directly. Here's how that justification process works,
            and how you get on the right side of it.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 31, 2026</span>
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
                  <span className="text-xs font-bold text-violet-500 w-5 shrink-0">
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
        <div className="max-w-4xl mx-auto prose-custom">

          {/* ── Section 1 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="scale-of-sole-source" number="01" title="How Much Money Bypasses Competition" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Full and open competition is the default rule in federal procurement. The Competition
              in Contracting Act of 1984 requires it. The Federal Acquisition Regulation reinforces
              it. And yet, in FY2025, roughly <strong>$271 billion in federal contracts — about 37% of
              total obligations — were awarded through noncompetitive channels</strong>, directed
              to vendors selected without open competition.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              That's not a loophole being exploited. It's an intended part of the system. Congress
              wrote seven specific exceptions into law that allow agencies to skip competition when
              the situation justifies it. Contracting officers use those exceptions every day, on
              acquisitions ranging from a $50,000 software renewal to a $500 million defense
              contract.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The critical thing to understand: sole source awards don't fall from the sky. They go
              to companies that have spent months or years building the conditions that make a
              sole source justification possible. The contracting officer doesn't choose you because
              they like you. They choose you because they can document — in writing, with signatures
              from multiple levels of authority — that you're the only reasonable option.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { value: "$271B", label: "Noncompetitive awards FY2025", sub: "~37% of total federal contracts" },
                { value: "$5.5M", label: "8(a) sole source cap", sub: "Non-manufacturing (Oct 2025)" },
                { value: "$8.5M", label: "8(a) sole source cap", sub: "Manufacturing NAICS (Oct 2025)" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 text-center hover-lift"
                >
                  <p className="text-3xl font-black text-violet-600 mb-1">{stat.value}</p>
                  <p className="text-sm font-bold text-stone-900 mb-1">{stat.label}</p>
                  <p className="text-xs text-stone-500">{stat.sub}</p>
                </div>
              ))}
            </div>

            <Callout icon={AlertTriangle} color="amber" title="Sole source is a legal act with a paper trail">
              Every sole source award above the micropurchase threshold requires documented justification. That documentation is public record — posted on SAM.gov within 14 days of award. Competitors can read it, challenge it, and file a bid protest if they believe the justification is flawed. Understanding how the process works protects you whether you're the vendor receiving the award or one trying to compete against an incumbent.
            </Callout>
          </div>

          {/* ── Section 2 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="seven-exceptions" number="02" title="The 7 Legal Exceptions (FAR 6.302)" />

            <p className="text-stone-700 leading-relaxed mb-6">
              FAR Subpart 6.3 lists the seven statutory exceptions that allow agencies to award
              contracts without full and open competition. Each one has specific requirements and
              documentation standards. Know all seven — because which exception an agency invokes
              determines how you should position your company.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  cite: "FAR 6.302-1",
                  title: "Only one responsible source",
                  desc: "The most commonly used exception. The agency determines that only one source can satisfy the requirement — because of unique technical capability, proprietary data, follow-on work that requires the original contractor's knowledge, or other reasons. This is the one you can engineer.",
                  color: "text-violet-600",
                  bg: "bg-violet-50",
                  border: "border-violet-200",
                  icon: Star,
                },
                {
                  cite: "FAR 6.302-2",
                  title: "Unusual and compelling urgency",
                  desc: "An urgent need exists that would seriously injure the government if it waited for competition. Think disaster response, emergency IT failures, or critical equipment breakdown. Hard to plan for, but worth knowing when it creates opportunities.",
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                  border: "border-amber-200",
                  icon: Zap,
                },
                {
                  cite: "FAR 6.302-3",
                  title: "Industrial mobilization; R&D capability; expert services",
                  desc: "Used to maintain or establish specialized industrial capabilities that the government needs available, or to support specific R&D or expert services that only a particular source can provide.",
                  color: "text-sky-600",
                  bg: "bg-sky-50",
                  border: "border-sky-200",
                  icon: Building2,
                },
                {
                  cite: "FAR 6.302-4",
                  title: "International agreement",
                  desc: "When a contract is required by a treaty or international agreement with a foreign government. Niche, but relevant for defense-related work with allied nations.",
                  color: "text-stone-600",
                  bg: "bg-stone-50",
                  border: "border-stone-200",
                  icon: Shield,
                },
                {
                  cite: "FAR 6.302-5",
                  title: "Authorized or required by statute",
                  desc: "Congress sometimes passes legislation that mandates or authorizes agencies to contract with specific sources. 8(a) program awards under SBA's authority fall here. So do several other small business and socioeconomic programs.",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                  border: "border-emerald-200",
                  icon: FileText,
                },
                {
                  cite: "FAR 6.302-6",
                  title: "National security",
                  desc: "Disclosure of the agency's needs would compromise national security. Defense and intelligence community procurements often use this authority. Requires a written determination that competition would harm national security.",
                  color: "text-red-600",
                  bg: "bg-red-50",
                  border: "border-red-200",
                  icon: Lock,
                },
                {
                  cite: "FAR 6.302-7",
                  title: "Public interest",
                  desc: "The Secretary of the agency determines that competition is not in the public interest for a specific acquisition. Rarely used and requires Secretary-level approval. More of a catch-all than a practical tool.",
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                  border: "border-orange-200",
                  icon: Users,
                },
              ].map((item) => (
                <div
                  key={item.cite}
                  className={`rounded-2xl border ${item.border} ${item.bg} p-5 hover-lift`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 border ${item.border}`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold font-mono ${item.color}`}>{item.cite}</span>
                      </div>
                      <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              For most small businesses, <strong>FAR 6.302-1 and FAR 6.302-5 are the two worth
              focusing on</strong>. The 6.302-1 "only one source" exception is the one you can
              actively position for. The 6.302-5 statutory exception is what governs 8(a) sole
              source awards, which have their own rules and dollar thresholds covered below.
            </p>
          </div>

          {/* ── Mid-article CTA ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-8 text-white">
            <div className="flex items-start gap-4">
              <Search className="w-8 h-8 text-violet-200 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">Find out which set-asides you qualify for right now</h3>
                <p className="text-violet-100 mb-4 text-sm leading-relaxed">
                  CapturePilot's{" "}
                  <Link href="/features/quick-checker" className="underline text-white hover:text-violet-200">
                    Quick Checker
                  </Link>{" "}
                  reads your SAM.gov profile and tells you which set-aside programs, including 8(a) sole source, apply to your business — in under two minutes.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-5 py-2.5 rounded-xl hover:bg-violet-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Section 3 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="three-document-types" number="03" title="Three Types of Sole Source Documents" />

            <p className="text-stone-700 leading-relaxed mb-4">
              "Sole source justification" is an umbrella term. The specific document required
              depends on the acquisition type, dollar value, and which exception the agency is
              invoking. There are three main document types you'll encounter.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  title: "Justification and Approval (J&A)",
                  cite: "FAR 6.303",
                  desc: "The standard document for competitive acquisitions above the simplified acquisition threshold where the agency is using one of the FAR 6.302 exceptions. The J&A must describe the nature of the requirement, identify the statutory authority being used, explain why competition is not practicable, include a fair and reasonable price determination, and describe the market research conducted. It requires approval at different levels depending on the dollar value of the contract.",
                  icon: FileText,
                  color: "text-violet-600",
                  bg: "bg-violet-50 border-violet-200",
                },
                {
                  title: "Limited Sources Justification (LSJ)",
                  cite: "FAR 8.405-6 / FAR 16.505",
                  desc: "Used on existing contract vehicles — GSA Schedules, IDIQ task orders, and similar vehicles — when the agency wants to limit competition to fewer than all schedule holders or awardees. A simplified version of the J&A, but still requires documented rationale for why full competition among eligible vendors isn't being conducted. Commonly used when time is short or the agency knows which contractor has the specific expertise needed.",
                  icon: Layers,
                  color: "text-sky-600",
                  bg: "bg-sky-50 border-sky-200",
                },
                {
                  title: "Brand Name Justification",
                  cite: "FAR 11.105",
                  desc: "Required when an agency specifies a particular brand name rather than a generic description of the requirement. The justification must demonstrate that the brand-name item's specific features are essential to the government's needs and that no comparable products can meet those needs. These are often challenged successfully in bid protests — agencies must show real technical necessity, not just preference for a vendor they already know.",
                  icon: Award,
                  color: "text-amber-600",
                  bg: "bg-amber-50 border-amber-200",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-6 ${item.bg} hover-lift`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <p className="font-bold text-stone-900">{item.title}</p>
                        <span className={`text-xs font-bold font-mono ${item.color}`}>{item.cite}</span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Lightbulb} color="sky" title="Simplified acquisition threshold changes the rules">
              Below the simplified acquisition threshold ($350,000 as of 2025), agencies don't need a full FAR Part 6 J&A. FAR 13.501 requires only a brief written determination explaining why competition wasn't obtained — and under the micropurchase threshold ($15,000), no justification at all is required. This is why micro-purchases and SAP-range contracts get awarded so quickly — the documentation burden is minimal and approval is often just the contracting officer's signature. See our guide to{" "}
              <Link href="/blog/simplified-acquisition-procedure" className="underline">
                simplified acquisition procedures
              </Link>{" "}
              for how these smaller contracts work.
            </Callout>
          </div>

          {/* ── Section 4 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="approval-thresholds" number="04" title="J&A Approval Thresholds by Dollar Value" />

            <p className="text-stone-700 leading-relaxed mb-6">
              The higher the dollar value of the sole source contract, the higher up the chain the
              justification has to be approved. FAR 6.304 sets these thresholds, and they were
              updated in October 2025 through an inflation adjustment. Here's the current structure:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="text-left p-4 rounded-tl-xl font-bold">Contract Value</th>
                    <th className="text-left p-4 font-bold">Required Approver</th>
                    <th className="text-left p-4 rounded-tr-xl font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      range: "Up to $900,000",
                      approver: "Contracting Officer",
                      note: "CO certification serves as approval. Fastest path.",
                      highlight: false,
                    },
                    {
                      range: "$900,000 – $20 million",
                      approver: "Advocate for Competition",
                      note: "Procuring activity's competition advocate reviews and signs.",
                      highlight: true,
                    },
                    {
                      range: "$20 million – $90 million",
                      approver: "Head of Contracting Activity (HCA)",
                      note: "Senior contracting executive approval required.",
                      highlight: false,
                    },
                    {
                      range: "Over $90 million",
                      approver: "Senior Procurement Executive (SPE)",
                      note: "DoD, NASA, Coast Guard: threshold is $150 million.",
                      highlight: true,
                    },
                  ].map((row) => (
                    <tr
                      key={row.range}
                      className={`border-b border-stone-200 ${row.highlight ? "bg-violet-50" : "bg-white"}`}
                    >
                      <td className="p-4 font-bold text-stone-900">{row.range}</td>
                      <td className="p-4 text-stone-700">{row.approver}</td>
                      <td className="p-4 text-stone-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              These approval requirements are exactly why large sole source awards take time —
              and why agencies prefer to structure requirements so they fall into a lower tier.
              A $19 million contract can be approved by the competition advocate; a $21 million
              contract goes to the HCA. You'll see agencies split requirements or use multiple
              task orders specifically to stay below these thresholds.
            </p>

            <Callout icon={BarChart3} color="violet" title="8(a) sole source has its own thresholds">
              8(a) program sole source awards operate under FAR 19.805 and use separate thresholds. As of October 2025: <strong>$5.5 million for non-manufacturing contracts</strong> and <strong>$8.5 million for manufacturing contracts</strong> (by NAICS code). Above those limits, the requirement must generally be competed among eligible 8(a) firms — though SBA can still accept a sole source referral above the threshold if fewer than two eligible 8(a) firms are likely to submit at a fair price.
            </Callout>
          </div>

          {/* ── Section 5 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="only-one-source" number="05" title="How Agencies Justify 'Only One Source'" />

            <p className="text-stone-700 leading-relaxed mb-4">
              The FAR 6.302-1 "only one responsible source" exception is the most widely used,
              and the most misunderstood. Agencies don't need to prove it's literally impossible
              for anyone else to do the work. They need to document that competition is{" "}
              <em>impracticable</em> based on specific, articulable reasons. The bar is real,
              but it's lower than many contractors assume.
            </p>

            <p className="text-stone-700 leading-relaxed mb-6">
              These are the factual conditions that agencies cite in FAR 6.302-1 J&As, and what
              each one means for you as a vendor trying to create or defend a sole source position:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  condition: "Unique technical expertise",
                  detail: "Your company has specialized knowledge, cleared personnel, or technical skills that aren't replicated in the market. The agency must show they looked for alternatives and concluded none exist. Real examples: proprietary algorithms already integrated into agency systems, cleared subject matter experts in a narrow domain, specialized laboratory facilities.",
                  icon: Star,
                },
                {
                  condition: "Proprietary data or technology",
                  detail: "You hold IP — patents, trade secrets, custom software, or controlled technical data — that the agency needs to use and can't legally access through another vendor. If you developed a system under a prior contract and the government doesn't own the underlying IP, every follow-on for that system is a potential sole source.",
                  icon: Lock,
                },
                {
                  condition: "Follow-on requirements",
                  detail: "Switching vendors would cause unacceptable disruption, cost, or delay. FAR specifically allows agencies to sole source follow-on acquisitions when competitive acquisition would result in duplication of costs, delay, or unacceptable risk. Incumbents who deliver well and manage transitions properly have a structural advantage here.",
                  icon: TrendingUp,
                },
                {
                  condition: "Compatibility requirements",
                  detail: "The new acquisition must be compatible with existing equipment, software, or systems that the vendor originally built. If a different vendor's product would require replacing existing infrastructure, the compatibility requirement can support sole source. This is common in IT and industrial equipment.",
                  icon: Layers,
                },
                {
                  condition: "Unsolicited proposals accepted",
                  detail: "Under FAR Part 15, agencies can award sole source contracts based on unsolicited proposals that contain unique, innovative concepts. These are proposals you submit proactively — not in response to an RFP — that offer the agency something they didn't know they needed. This is an underused path for innovative small businesses.",
                  icon: Lightbulb,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-xl border border-stone-200 bg-stone-50 hover-lift">
                  <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.condition}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Notice what's not on that list: being the lowest bidder, having a great relationship
              with the program manager, or being the incumbent by default. None of those alone
              support a sole source justification. The contracting officer needs documented,
              defensible technical or legal reasons — not just preference.
            </p>
          </div>

          {/* ── Section 6 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="positioning-strategies" number="06" title="Six Ways to Position for Sole Source Awards" />

            <p className="text-stone-700 leading-relaxed mb-6">
              Sole source awards don't happen by accident. They're the end result of a deliberate
              positioning strategy that often takes 12 to 36 months to execute. Here's what that
              looks like in practice.
            </p>

            <div className="space-y-6 my-8">
              {[
                {
                  step: "01",
                  title: "Respond to every sources sought and RFI in your target agencies",
                  body: "Sources sought notices are the government's market research phase. When you respond substantively — with your capabilities, your past performance, and your technical approach — you're giving the contracting officer ammunition to justify choosing you. They need to document that they looked at the market. Your response becomes that documentation. Miss the sources sought, and you may find yourself locked out of an acquisition that was shaped around a competitor who did respond.",
                  link: { text: "sources sought responses", href: "/blog/sources-sought-notice" },
                },
                {
                  step: "02",
                  title: "Develop and protect proprietary capabilities and IP",
                  body: "The most reliable path to a defensible sole source position is technology or IP that the government needs and can't get elsewhere. If you're doing R&D or building custom systems for agencies, negotiate your data rights carefully. The less the government owns of your core IP, the more dependent they become on you for follow-on work. This isn't adversarial — it's good business structuring.",
                  link: null,
                },
                {
                  step: "03",
                  title: "Win your first contract through competition, then perform flawlessly",
                  body: "Most sole source awards start with a competed contract. You win it, deliver well, and build the institutional knowledge and relationships that make you irreplaceable. A contractor with excellent CPARS ratings, deep program knowledge, and cleared personnel becomes genuinely hard to replace — and the agency knows it. The follow-on is often a sole source not because of favoritism but because switching would actually hurt the mission.",
                  link: { text: "CPARS performance ratings", href: "/blog/cpars-contractor-performance" },
                },
                {
                  step: "04",
                  title: "Submit unsolicited proposals with genuinely novel ideas",
                  body: "FAR Part 15.6 creates a path for direct awards based on unsolicited proposals that offer unique, innovative concepts the agency hasn't considered. These must be your original idea — not a repackaging of a known requirement. The best unsolicited proposals solve a problem the agency has but hasn't formally identified as a procurement need. Write them for program managers, not contracting officers.",
                  link: null,
                },
                {
                  step: "05",
                  title: "Get certified in every set-aside program you qualify for",
                  body: "If you're 8(a) certified, service-disabled veteran-owned, woman-owned, or HUBZone-eligible, those certifications dramatically expand your sole source opportunities. 8(a) certified firms can receive direct awards up to $5.5 million without competition by law. SDVOSB firms have similar authorities at VA. These aren't workarounds — they're the system working as designed.",
                  link: { text: "federal contracting certifications guide", href: "/blog/federal-contracting-certifications" },
                },
                {
                  step: "06",
                  title: "Use capability statements to get in front of program offices pre-acquisition",
                  body: "The contracting officer writes the J&A, but the program manager makes the recommendation. Build relationships at the program office level — not just procurement. A strong capability statement tailored to a specific agency's mission, delivered to the right people at the right time, plants the seed for 'only one responsible source.' Make it easy for the agency to explain why they need you specifically.",
                  link: { text: "capability statement", href: "/features/capability-statement" },
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 p-6 rounded-2xl border border-stone-200 hover-lift">
                  <span className="text-3xl font-black text-violet-200 shrink-0 w-10 leading-none mt-1">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 mb-2 text-lg leading-tight">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {item.body}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 text-sm text-violet-600 hover:underline mt-2 font-medium"
                      >
                        Read: {item.link.text} <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Target} color="emerald" title="Intelligence data accelerates every step">
              Every positioning strategy above depends on knowing which agencies are planning acquisitions, who the incumbents are, and when contracts are up for recompete. CapturePilot's{" "}
              <Link href="/features/intelligence" className="underline">
                intelligence tools
              </Link>{" "}
              surface that data automatically — agency spend history, contract expirations, incumbent performance ratings — so you can start positioning 18 months before the RFP drops instead of three months after.
            </Callout>
          </div>

          {/* ── Mid-article CTA 2 ── */}
          <div className="animate-on-scroll my-12 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 p-8 text-white">
            <div className="flex items-start gap-4">
              <Eye className="w-8 h-8 text-stone-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">See which contracts are up for recompete in your target agencies</h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  CapturePilot's{" "}
                  <Link href="/features/matching" className="underline text-white hover:text-stone-300">
                    matching engine
                  </Link>{" "}
                  identifies contracts expiring in your NAICS codes across every federal agency — giving you the 12–18 month lead time you need to build a defensible sole source position before the next acquisition starts.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Section 7 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="sam-footprint" number="07" title="The SAM.gov Footprint You Need" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Your SAM.gov registration isn't just a checkbox. It's a marketing document that
              contracting officers read when they're researching whether sole source is defensible.
              When a program office wants to justify awarding work to you without competition, they
              start by pulling your SAM.gov profile. Here's what needs to be there.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-5 text-lg">What your SAM.gov profile must show</h3>
              <div className="space-y-4">
                {[
                  {
                    item: "All applicable NAICS codes",
                    detail: "Your primary NAICS code defines your size standard. But contracting officers searching for sources look across all your registered codes. If you have capabilities in a NAICS code that's not in your profile, you're invisible to their market research — and invisible to the J&A.",
                  },
                  {
                    item: "Current, active certifications",
                    detail: "8(a), SDVOSB, WOSB, HUBZone — all must show as active. A lapsed certification breaks the statutory authority for set-aside sole source. Don't let annual renewals slip. SAM.gov itself expires annually; a lapsed registration disqualifies you from any award.",
                  },
                  {
                    item: "Capability narrative that addresses specific agency needs",
                    detail: "The 'Company Description' and marketing data sections of your SAM profile are read by contracting officers. Use specific language that mirrors how the agency describes their requirements. Vague descriptions of what you 'specialize in' don't help a CO document why you're uniquely qualified.",
                  },
                  {
                    item: "Past performance that matches target contract types",
                    detail: "Agencies cross-reference your SAM registration with CPARS records and contract databases. The more clearly your history reflects the type of work you're targeting, the stronger the factual basis for 'only one responsible source' documentation.",
                  },
                ].map((row, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{row.item}</p>
                      <p className="text-sm text-stone-600 leading-relaxed mt-0.5">{row.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              SAM.gov renewals are annual and non-automatic. Missing the renewal window — even by
              a single day — can disqualify you from an active award. If you're in the middle of
              building toward a sole source position and your registration lapses, the agency
              cannot award to you. Read our guide on{" "}
              <Link href="/blog/sam-gov-renewal-guide" className="text-violet-600 hover:underline">
                avoiding SAM.gov registration lapses
              </Link>{" "}
              to make sure this doesn't happen at the worst possible moment.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              Also: changing your NAICS codes in SAM.gov isn't trivial. Adding a new code expands
              your market research footprint, but removing one can affect your size standard
              eligibility. Our guide on{" "}
              <Link href="/blog/naics-code-change-guide" className="text-violet-600 hover:underline">
                how to change NAICS codes without losing set-aside eligibility
              </Link>{" "}
              walks through the process correctly.
            </p>
          </div>

          {/* ── Section 8 ── */}
          <div className="animate-on-scroll">
            <SectionHeading id="protests-transparency" number="08" title="Protests, Posting, and What Happens Next" />

            <p className="text-stone-700 leading-relaxed mb-4">
              Sole source awards are not invisible. After award, the agency must post the approved
              J&A on SAM.gov within <strong>14 days</strong>. That J&A is public — any company
              can read it, and if a competitor believes the justification is inadequate, they can
              file a bid protest at the Government Accountability Office (GAO) or the Court of
              Federal Claims (CoFC).
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              GAO sustains protests against flawed sole source justifications more often than many
              contractors realize. Common winning protest grounds include:
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  ground: "Insufficient market research",
                  detail: "The agency didn't adequately search for other capable vendors before concluding only one source existed. A few internet searches don't constitute the market research FAR requires.",
                },
                {
                  ground: "Unsubstantiated uniqueness claims",
                  detail: "The J&A says the vendor has unique capabilities but doesn't explain specifically what those capabilities are or why no other vendor has them. Boilerplate language fails.",
                },
                {
                  ground: "Flawed brand name justification",
                  detail: "The agency specified a product by brand name without adequately demonstrating that the brand-specific features are truly essential to the mission — not just preferred.",
                },
                {
                  ground: "Urgency created by poor planning",
                  detail: "GAO has repeatedly held that self-created urgency — where the agency ran out of time due to its own planning failures — doesn't justify the FAR 6.302-2 urgency exception.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-stone-200 bg-white">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.ground}</p>
                    <p className="text-sm text-stone-500 leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              If you're the vendor receiving the sole source award, these protest grounds are
              your vulnerability. Make sure your conversations with the contracting office are
              factually detailed — help them document your uniqueness accurately. A poorly written
              J&A can get a legitimate sole source award overturned, forcing a competitive
              procurement that you then have to win the hard way.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              If you're a competitor who lost an opportunity you believe should have been competed,
              the{" "}
              <Link href="/blog/government-contract-protest" className="text-violet-600 hover:underline">
                bid protest process
              </Link>{" "}
              is your recourse. GAO has a 100-day decision timeline and a no-cost filing process.
              The agency must provide you the J&A to support your protest research.
            </p>

            <Callout icon={Shield} color="blue" title="Pre-award notices give you a window">
              For some sole source acquisitions, agencies publish a pre-award notice on SAM.gov — giving the market 10 days to respond with evidence that competition is practicable. If you see a notice for work you can do, submit a substantive capability statement immediately. A credible response can force the agency to compete. This is also how you build the record for a protest if they proceed anyway.
            </Callout>

            <p className="text-stone-700 leading-relaxed mb-4">
              For a deeper look at how agencies select contractors outside the standard competitive
              process, read our guides on{" "}
              <Link href="/blog/8a-sole-source-contracts" className="text-violet-600 hover:underline">
                8(a) sole source contracts
              </Link>
              ,{" "}
              <Link href="/blog/sources-sought-notice" className="text-violet-600 hover:underline">
                sources sought responses
              </Link>
              , and{" "}
              <Link href="/blog/incumbent-advantage-government-contracts" className="text-violet-600 hover:underline">
                how to beat the incumbent
              </Link>
              . Understanding how the incumbent built their position is the fastest way to learn
              how to build your own.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              And if you want to evaluate your current set-aside eligibility, clearances, and
              certifications to understand which sole source authorities you're eligible under,{" "}
              <Link href="/features/quick-checker" className="text-violet-600 hover:underline">
                CapturePilot's Quick Checker
              </Link>{" "}
              runs the analysis automatically against your SAM.gov profile — no spreadsheet required.
            </p>
          </div>

          {/* ── Final CTA ── */}
          <div className="animate-on-scroll mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white">
            <div className="max-w-xl">
              <p className="text-stone-400 text-sm font-medium mb-2">Ready to build your sole source position?</p>
              <h3 className="text-2xl font-black mb-3">
                CapturePilot shows you which contracts are expiring — and who holds them now.
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                Find the incumbents, track their CPARS ratings, identify expiring contracts in your
                NAICS codes, and start positioning before the next acquisition cycle begins.
                Sole source awards go to companies that are already known — let's get you known.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 font-bold px-6 py-3 rounded-xl hover:border-stone-400 transition-colors text-sm"
                >
                  Book a strategy call
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
