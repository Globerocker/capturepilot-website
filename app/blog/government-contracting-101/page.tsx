"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Building2,
  Award, Star, Hash, BookOpen, ChevronRight, Target, Users,
  Globe, Sparkles, XCircle, DollarSign, Shield, FileText,
  ClipboardList, Briefcase, BadgeCheck, Scale, Landmark, Layers,
  Clock, Search, UserCheck, Handshake, Zap, MapPin, GraduationCap,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

/* --- Table of Contents --- */
const TOC = [
  { id: "what-is-govcon", label: "What Is Government Contracting?" },
  { id: "who-can-bid", label: "Who Can Bid?" },
  { id: "key-terms", label: "Key Terms You Must Know" },
  { id: "contract-types", label: "Contract Types Explained" },
  { id: "set-aside-programs", label: "Set-Aside Programs" },
  { id: "how-to-start", label: "How to Get Started (6 Steps)" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "get-started", label: "Get Started with CapturePilot" },
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
export default function GovernmentContracting101Page() {
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
            <span className="text-stone-900 font-medium">Government Contracting 101</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <GraduationCap className="w-4 h-4" /> Beginner Guide
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contracting 101: The Complete{" "}
            <span className="gradient-text">Beginner&apos;s Guide</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The U.S. federal government spends over $700 billion a year on contracts. Small businesses
            win 26% of that &mdash; roughly $180 billion. This guide breaks down everything you need
            to know to claim your share.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
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

          {/* --- What Is Government Contracting? --- */}
          <SectionHeading id="what-is-govcon" number="01" title="What Is Government Contracting?" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Government contracting (or &quot;GovCon&quot;) is the process by which federal agencies purchase
              goods and services from private businesses. Every year, the U.S. government awards more
              than <strong>$700 billion</strong> in contracts &mdash; making Uncle Sam the largest buyer
              on Earth.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Unlike selling to other businesses, the federal government follows strict procurement rules
              governed by the <strong>Federal Acquisition Regulation (FAR)</strong>. These rules are designed
              to ensure fair competition, transparency, and value for taxpayers.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The good news? Congress mandates that at least <strong>23% of all federal contracts</strong> go
              to small businesses. In practice, that number is often closer to 26%. That&apos;s roughly
              $180 billion per year reserved specifically for companies like yours.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { icon: DollarSign, stat: "$700B+", label: "Annual federal contract spend" },
                { icon: Building2, stat: "26%", label: "Awarded to small businesses" },
                { icon: Users, stat: "300K+", label: "Active contractors on SAM.gov" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <p className="text-2xl font-black text-stone-900">{item.stat}</p>
                  <p className="text-sm text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Agencies buy everything &mdash; from janitorial services and IT modernization to construction,
              cybersecurity, medical supplies, and consulting. If your business provides a product or service,
              there is almost certainly a federal buyer for it.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Did You Know?">
            The Department of Defense alone accounts for over <strong>$400 billion</strong> in annual contract
            spending. But civilian agencies like VA, HHS, GSA, and DHS collectively spend hundreds of billions
            more. Every agency buys.
          </Callout>

          {/* --- Who Can Bid? --- */}
          <SectionHeading id="who-can-bid" number="02" title="Who Can Bid on Government Contracts?" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Almost any business registered in the United States can bid on government contracts. You don&apos;t
              need special connections, political relationships, or a massive company. You do need:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { icon: Building2, title: "A Legally Formed Business", desc: "LLC, Corporation, Sole Proprietorship, Partnership — any legal business entity in the U.S. can participate." },
                { icon: Globe, title: "SAM.gov Registration", desc: "Every contractor must register on SAM.gov (System for Award Management). It's free, but required before you can bid or receive payment." },
                { icon: Hash, title: "A Unique Entity ID (UEI)", desc: "Replaces the old DUNS number. You get this automatically when you register on SAM.gov." },
                { icon: Shield, title: "NAICS Code(s)", desc: "North American Industry Classification System codes identify what your business does. You'll select these during SAM registration." },
                { icon: BadgeCheck, title: "Compliance & Good Standing", desc: "No debarments, no tax liens, no fraud convictions. The government checks." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              You do <strong>not</strong> need prior government experience to get your first contract. Many
              programs specifically target new entrants. The key is starting with the right size opportunities
              and building your past performance from there.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Quick Check">
            Not sure if your business is ready?{" "}
            <Link href={CHECK_URL} className="font-bold underline hover:no-underline">
              Run a free eligibility check
            </Link>{" "}
            in 30 seconds to see your GovCon readiness score.
          </Callout>

          {/* --- Key Terms --- */}
          <SectionHeading id="key-terms" number="03" title="Key Terms You Must Know" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Government contracting has its own language. Master these terms before you do anything else:
            </p>

            <div className="space-y-4">
              {[
                {
                  term: "NAICS Code", full: "North American Industry Classification System",
                  icon: Hash,
                  desc: "A 6-digit code classifying your business type. Used by agencies to categorize opportunities and determine small business size standards. Most businesses have 3-8 relevant codes.",
                },
                {
                  term: "PSC", full: "Product Service Code",
                  icon: Layers,
                  desc: "A 4-character code describing the specific product or service being purchased. While NAICS describes your business, PSC describes what the government is buying in a specific contract.",
                },
                {
                  term: "Set-Aside", full: "Small Business Set-Aside",
                  icon: Shield,
                  desc: "Contracts reserved exclusively for specific business categories: small businesses, veteran-owned, women-owned, 8(a), HUBZone. Dramatically reduces competition.",
                },
                {
                  term: "SAM.gov", full: "System for Award Management",
                  icon: Globe,
                  desc: "The government's official contractor registration database. You must be registered to bid on any federal contract. It's also where opportunities are posted.",
                },
                {
                  term: "CAGE Code", full: "Commercial and Government Entity Code",
                  icon: Building2,
                  desc: "A 5-character ID assigned to companies doing business with the government. You get this during SAM registration. Required on many contract documents.",
                },
                {
                  term: "UEI", full: "Unique Entity Identifier",
                  icon: BadgeCheck,
                  desc: "A 12-character alphanumeric ID that replaced the DUNS number in April 2022. Generated automatically when you register on SAM.gov.",
                },
                {
                  term: "CO", full: "Contracting Officer",
                  icon: UserCheck,
                  desc: "The government official authorized to award contracts. They are the only person who can legally bind the government to a contract. Build relationships with COs.",
                },
                {
                  term: "FAR", full: "Federal Acquisition Regulation",
                  icon: Scale,
                  desc: "The rulebook governing all federal procurement. Contains the rules agencies must follow when buying goods and services. It's dense, but key sections matter.",
                },
                {
                  term: "Solicitation", full: "Request for Proposal (RFP) / Request for Quote (RFQ)",
                  icon: FileText,
                  desc: "The formal document inviting businesses to bid on a contract. Contains requirements, evaluation criteria, and submission instructions. This is what you respond to.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-100 animate-on-scroll">
                  <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.term}</p>
                    <p className="text-xs text-stone-400 mb-1">{item.full}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Don't Get Overwhelmed">
            You don&apos;t need to memorize the FAR. Focus on understanding NAICS, SAM.gov, and set-asides
            first. Those three things determine 80% of whether you can compete for a given opportunity.
          </Callout>

          {/* --- Contract Types --- */}
          <SectionHeading id="contract-types" number="04" title="Contract Types Explained" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Not all government contracts work the same way. Understanding these four types will help
              you decide which opportunities to pursue:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: DollarSign, title: "Firm Fixed Price (FFP)",
                  desc: "The government pays a set price regardless of your actual costs. You bear the risk — if you underestimate costs, you eat the difference. Most common type, especially for well-defined requirements.",
                  tag: "Most Common",
                },
                {
                  icon: Clock, title: "Time & Materials (T&M)",
                  desc: "You bill hourly labor rates plus materials costs. Good for undefined scope where exact hours can't be predicted. The government sets ceiling prices to cap total spend.",
                  tag: "Flexible",
                },
                {
                  icon: Layers, title: "Indefinite Delivery / Indefinite Quantity (IDIQ)",
                  desc: "A master contract with a range of quantities over a period. The government issues task orders as needs arise. Guarantees a minimum but can go up to a maximum ceiling value.",
                  tag: "Long-term",
                },
                {
                  icon: Landmark, title: "Government-Wide Acquisition Contract (GWAC)",
                  desc: "Pre-competed contracts that multiple agencies can order from. Examples: SEWP V, Alliant 2, OASIS+. Getting on a GWAC is competitive but gives you a pipeline of task orders.",
                  tag: "Vehicle",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              For first-time contractors, <strong>Firm Fixed Price (FFP)</strong> contracts are the most
              straightforward. You know exactly what you&apos;ll get paid, and the evaluation criteria are
              usually clearest. Start there and expand to other types as you gain experience.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Pro Tip">
            <strong>Micro-purchases</strong> (under $10,000) don&apos;t require competitive bidding.{" "}
            <strong>Simplified Acquisition Procedures</strong> ($10K-$250K) have streamlined rules. These are
            the best entry points for new contractors. CapturePilot flags these in your match feed.
          </Callout>

          {/* --- Set-Aside Programs --- */}
          <SectionHeading id="set-aside-programs" number="05" title="Set-Aside Programs" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Set-aside programs are your biggest advantage as a small business. They limit competition
              to businesses that meet specific criteria, dramatically increasing your probability of winning:
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  icon: Star, title: "8(a) Business Development", threshold: "Sole source up to $4.5M",
                  desc: "For socially and economically disadvantaged businesses. 9-year program with SBA. Can receive sole-source contracts — no competition required.",
                },
                {
                  icon: Shield, title: "Service-Disabled Veteran-Owned (SDVOSB)", threshold: "Sole source up to $5M",
                  desc: "For businesses owned by veterans with service-connected disabilities. One of the strongest set-asides with significant government spending goals.",
                },
                {
                  icon: Award, title: "Veteran-Owned Small Business (VOSB)", threshold: "Set-aside eligible",
                  desc: "For veteran-owned businesses. While less powerful than SDVOSB, still provides competitive advantages and access to veteran-focused opportunities.",
                },
                {
                  icon: Users, title: "Women-Owned Small Business (WOSB)", threshold: "Sole source up to $5M",
                  desc: "For businesses at least 51% owned by women. Covers specific NAICS codes where women are underrepresented in federal contracting.",
                },
                {
                  icon: Target, title: "Economically Disadvantaged WOSB (EDWOSB)", threshold: "Sole source up to $5M",
                  desc: "A subset of WOSB for women whose personal net worth is below $750K. Eligible for additional NAICS codes beyond standard WOSB.",
                },
                {
                  icon: MapPin, title: "HUBZone", threshold: "Sole source up to $5M",
                  desc: "For businesses in Historically Underutilized Business Zones. You must have your principal office and 35% of employees in a HUBZone.",
                },
                {
                  icon: Briefcase, title: "Small Disadvantaged Business (SDB)", threshold: "Price evaluation preference",
                  desc: "Businesses owned by socially and economically disadvantaged individuals. Receives up to a 10% price evaluation preference on certain contracts.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                      <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        {item.threshold}
                      </span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Learn more about each program in our{" "}
              <Link href="/blog/set-aside-programs" className="text-emerald-700 font-bold hover:underline">
                complete guide to set-aside programs
              </Link>.
            </p>
          </div>

          {/* --- How to Get Started --- */}
          <SectionHeading id="how-to-start" number="06" title="How to Get Started (6 Steps)" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Here&apos;s the exact path from &quot;I want to sell to the government&quot; to
              &quot;I&apos;m ready to bid&quot;:
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  step: "1", icon: Search, title: "Identify Your NAICS Codes",
                  desc: "Determine the 6-digit codes that describe your business. Your NAICS codes define which opportunities you can compete for and your small business size standard. Use our Quick Checker to find yours instantly.",
                  link: { href: "/blog/naics-codes-explained", label: "NAICS Codes Explained" },
                },
                {
                  step: "2", icon: Globe, title: "Register on SAM.gov",
                  desc: "Create your SAM.gov profile. This is free but takes 2-4 weeks to process. You'll get your UEI and CAGE code during registration. You must renew annually.",
                  link: { href: "/blog/sam-registration-guide", label: "SAM.gov Registration Guide" },
                },
                {
                  step: "3", icon: BadgeCheck, title: "Get Certified",
                  desc: "If you qualify for any set-aside programs (8(a), SDVOSB, WOSB, HUBZone), apply for certification through the SBA. Certification opens doors to sole-source contracts worth millions.",
                  link: { href: "/blog/set-aside-programs", label: "Set-Aside Programs Guide" },
                },
                {
                  step: "4", icon: FileText, title: "Write Your Capability Statement",
                  desc: "Create a one-page document summarizing your competencies, past performance, certifications, and contact info. This is your marketing document for government buyers.",
                  link: { href: "/blog/capability-statement-guide", label: "Capability Statement Guide" },
                },
                {
                  step: "5", icon: Target, title: "Find Matching Opportunities",
                  desc: "Start searching for contracts that match your NAICS codes, certifications, and capabilities. Focus on Sources Sought and Pre-Solicitations first — they're the earliest signals.",
                  link: null,
                },
                {
                  step: "6", icon: ClipboardList, title: "Submit Your First Proposal",
                  desc: "Respond to a solicitation by following the instructions exactly. Answer every evaluation criterion. Include compliance checklists. Submit early — never at the last minute.",
                  link: { href: "/blog/proposal-writing-tips", label: "Proposal Writing Tips" },
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 animate-on-scroll">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-lg font-black">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-emerald-600" />
                      <h3 className="font-bold text-stone-900">{item.title}</h3>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                    {item.link && (
                      <Link href={item.link.href} className="text-sm text-emerald-700 font-medium hover:underline inline-flex items-center gap-1 mt-2">
                        {item.link.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={Zap} color="emerald" title="Skip the Manual Work">
            CapturePilot automates steps 1, 5, and 6. We identify your NAICS codes, match you to
            opportunities daily, and help you draft winning proposals with AI.{" "}
            <Link href={SIGNUP_URL} className="font-bold underline hover:no-underline">
              Start free
            </Link>.
          </Callout>

          {/* --- Common Mistakes --- */}
          <SectionHeading id="common-mistakes" number="07" title="Common Mistakes New Contractors Make" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              We&apos;ve seen thousands of businesses enter GovCon. These are the mistakes that cost them
              contracts (and sometimes their business):
            </p>

            <div className="space-y-3 mb-8">
              {[
                { mistake: "Bidding on everything instead of targeting", fix: "Focus on 3-5 NAICS codes where you're strongest. Quality bids beat quantity every time." },
                { mistake: "Not registering on SAM.gov early enough", fix: "Registration takes 2-4 weeks. Start now, even if you're not ready to bid yet." },
                { mistake: "Ignoring Sources Sought and RFIs", fix: "These are early signals, 6-18 months before the actual solicitation. Respond to them to get on the agency's radar." },
                { mistake: "Underbidding to win, then losing money on the contract", fix: "Price to win, not price to lose. A contract you can't perform profitably is worse than no contract." },
                { mistake: "Submitting proposals that don't follow instructions", fix: "Read the solicitation three times. Follow every formatting requirement. Missing page limits or font sizes gets you eliminated." },
                { mistake: "Not having past performance (and not building it)", fix: "Start with subcontracting, micro-purchases, or state/local contracts to build a track record." },
                { mistake: "Skipping certifications you qualify for", fix: "If you're veteran-owned, women-owned, or in a HUBZone, get certified. It's free competitive advantage." },
                { mistake: "Giving up after the first loss", fix: "The average small business loses 7-10 bids before their first win. Each loss teaches you something. Debrief every time." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 animate-on-scroll">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-stone-800 text-sm">
                      <strong>{item.mistake}.</strong>{" "}
                      <span className="text-stone-500">{item.fix}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={Handshake} color="sky" title="One More Thing">
            Government contracting is a relationship business. Attend industry days, introduce yourself
            to contracting officers, and respond to every Sources Sought notice in your space. Visibility
            beats capability when everyone has similar qualifications.
          </Callout>

          {/* --- CTA --- */}
          <div id="get-started" className="scroll-mt-24 pt-12">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Ready to Start Winning Contracts?
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot matches your business with federal opportunities you can actually win.
                Stop searching SAM.gov manually. Let our engine do the work.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Daily matching to 40,000+ federal opportunities",
                  "NAICS verification and set-aside tracking",
                  "AI-powered proposal drafting assistance",
                  "Competitor intelligence and incumbents tracking",
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
                No credit card required. Set up in 5 minutes.
              </p>
            </div>
          </div>

          {/* --- Related Links --- */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
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
              <Link href="/blog/set-aside-programs" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Shield className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Set-Aside Programs Guide</p>
                  <p className="text-xs text-stone-500">Your unfair advantage in GovCon</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/proposal-writing-tips" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <FileText className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">10 Proposal Writing Tips</p>
                  <p className="text-xs text-stone-500">Tips that actually win contracts</p>
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
