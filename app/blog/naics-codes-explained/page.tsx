"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Building2,
  Hash, BookOpen, ChevronRight, Target, Search, Globe,
  Sparkles, XCircle, Shield, FileText, Briefcase, Zap,
  TrendingUp, DollarSign, Award, Layers, ClipboardList,
  HardHat, Wrench, Monitor, Lock, Users,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

/* --- Table of Contents --- */
const TOC = [
  { id: "what-are-naics", label: "What Are NAICS Codes?" },
  { id: "why-they-matter", label: "Why They Matter in GovCon" },
  { id: "how-to-find", label: "How to Find Your NAICS Codes" },
  { id: "top-naics", label: "Top NAICS for Small Business" },
  { id: "multiple-codes", label: "Multiple Codes Strategy" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "quick-checker", label: "Find Yours with Quick Checker" },
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
export default function NAICSCodesExplainedPage() {
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
            <span className="text-stone-900 font-medium">NAICS Codes Explained</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Hash className="w-4 h-4" /> Deep Dive
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            NAICS Codes Explained: Find the Right Codes for{" "}
            <span className="gradient-text">Your Business</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Your NAICS codes determine which contracts you can bid on, your small business size standard,
            and whether you qualify for set-asides. Get them wrong, and you&apos;re invisible to
            contracting officers.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
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

          {/* --- What Are NAICS Codes? --- */}
          <SectionHeading id="what-are-naics" number="01" title="What Are NAICS Codes?" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              NAICS stands for <strong>North American Industry Classification System</strong>. It&apos;s a
              standardized numbering system used by the United States, Canada, and Mexico to classify
              business establishments by their primary type of economic activity.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Each NAICS code is a <strong>6-digit number</strong>. The first two digits identify the
              economic sector (e.g., 23 = Construction). Each subsequent digit narrows the classification:
              subsector, industry group, industry, and national industry.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              For example, let&apos;s break down NAICS code <strong>561720</strong>:
            </p>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 mb-6 animate-on-scroll">
              <div className="space-y-3">
                {[
                  { digits: "56", meaning: "Administrative and Support Services", level: "Sector" },
                  { digits: "561", meaning: "Administrative and Support Services", level: "Subsector" },
                  { digits: "5617", meaning: "Services to Buildings and Dwellings", level: "Industry Group" },
                  { digits: "56172", meaning: "Janitorial Services", level: "Industry" },
                  { digits: "561720", meaning: "Janitorial Services", level: "National Industry" },
                ].map((item) => (
                  <div key={item.digits} className="flex items-center gap-4">
                    <code className="text-sm font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg w-24 text-center">
                      {item.digits}
                    </code>
                    <div className="flex-1">
                      <span className="text-sm text-stone-700">{item.meaning}</span>
                      <span className="text-xs text-stone-400 ml-2">({item.level})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              The 2022 NAICS revision (currently in use for 2026) contains <strong>1,012 national industries</strong>.
              Your business will typically fall under 3 to 8 codes, depending on how diverse your services are.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Key Concept">
            NAICS codes classify <strong>your business</strong>. PSC codes (Product Service Codes) classify
            <strong> what the government is buying</strong>. You need both to compete effectively, but NAICS
            is what you register with on SAM.gov.
          </Callout>

          {/* --- Why They Matter --- */}
          <SectionHeading id="why-they-matter" number="02" title="Why NAICS Codes Matter in Government Contracting" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              NAICS codes aren&apos;t just bureaucratic labels. They directly impact three critical things
              in your GovCon journey:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: DollarSign, title: "Size Standards",
                  desc: "Each NAICS code has a small business size standard — either annual revenue or employee count. You might be 'small' under one code but not another. This determines set-aside eligibility.",
                },
                {
                  icon: Search, title: "Opportunity Matching",
                  desc: "Federal agencies tag every solicitation with a NAICS code. If your SAM.gov profile doesn't include that code, you won't appear in their search results.",
                },
                {
                  icon: Shield, title: "Set-Aside Eligibility",
                  desc: "WOSB set-asides are only available for certain NAICS codes. If your primary code isn't on the SBA's WOSB list, you can't compete for those reserved contracts.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-stone-200 hover-lift animate-on-scroll">
                  <item.icon className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-stone-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Here&apos;s a real example of why this matters: A construction company with $30 million in
              annual revenue might be &quot;small&quot; under NAICS 236220 (Commercial Building Construction,
              size standard: $45M) but &quot;large&quot; under NAICS 541330 (Engineering Services, size
              standard: $25.5M for certain subcategories).
            </p>
            <p className="text-stone-600 leading-relaxed">
              That means the same company can compete for small business set-asides in construction but
              <strong> not</strong> in engineering. Choosing the right primary NAICS code is a strategic
              decision, not just an administrative one.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Critical Warning">
            If you list the wrong NAICS codes, you could be bidding on contracts where you don&apos;t
            qualify as a small business &mdash; or missing opportunities where you do. The SBA can also
            challenge your size status if your primary NAICS doesn&apos;t match the work you actually perform.
          </Callout>

          {/* --- How to Find Your NAICS Codes --- */}
          <SectionHeading id="how-to-find" number="03" title="How to Find Your NAICS Codes" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              There are two ways to identify your NAICS codes: manual research and automated tools.
              Here&apos;s both:
            </p>

            <h3 className="text-lg font-bold text-stone-900 mb-4">Option A: Manual Research</h3>
            <div className="space-y-3 mb-8">
              {[
                { step: "1", text: "Go to the Census Bureau's NAICS search at naics.com/search or census.gov/naics" },
                { step: "2", text: "Search by keyword for your business activities (e.g., 'janitorial', 'IT consulting', 'construction')" },
                { step: "3", text: "Read the full description of each code to ensure it matches your actual work" },
                { step: "4", text: "Check the SBA size standards table to confirm you qualify as 'small' under each code" },
                { step: "5", text: "Look at SAM.gov opportunities tagged with those codes to verify they match the kind of work you want to pursue" },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 animate-on-scroll">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-stone-600">
                    {item.step}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-stone-900 mb-4">Option B: Use the CapturePilot Quick Checker</h3>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6 animate-on-scroll">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-emerald-800 mb-2">Instant NAICS Identification</p>
                  <p className="text-sm text-emerald-700 leading-relaxed mb-3">
                    Enter your business name or describe what you do. Our engine cross-references your
                    description against all 1,012 NAICS codes and returns the best matches with size
                    standards, set-aside eligibility, and current federal spending volume for each code.
                  </p>
                  <Link
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Run Quick Checker <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              Whether you go manual or automated, the goal is the same: identify every NAICS code where
              (a) you can genuinely perform the work, and (b) you qualify as a small business.
            </p>
          </div>

          {/* --- Top NAICS for Small Business --- */}
          <SectionHeading id="top-naics" number="04" title="Top NAICS Codes for Small Business GovCon" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              These five NAICS codes consistently offer the most opportunity for small businesses entering
              the federal market. Each has high volume, strong set-aside percentages, and accessible
              entry points:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Wrench, code: "561720", title: "Janitorial Services",
                  size: "$22M annual revenue",
                  spend: "$4.2B annual federal spend",
                  why: "2.7 billion sq ft of federal real estate needs cleaning. High recurring revenue, low barrier to entry, and a massive small business set-aside percentage. Many contracts are 5+ years with options.",
                  tip: "Focus on SDVOSB/WOSB set-asides for VA and DoD facilities first.",
                },
                {
                  icon: Monitor, code: "541512", title: "Computer Systems Design Services",
                  size: "$34M annual revenue",
                  spend: "$28B+ annual federal spend",
                  why: "The largest NAICS by federal spending. Covers IT modernization, cloud migration, systems integration, and custom software development. Every agency is buying this.",
                  tip: "Specialize in a niche (cloud, cybersecurity, data analytics) rather than being a generalist.",
                },
                {
                  icon: HardHat, code: "236220", title: "Commercial/Institutional Building Construction",
                  size: "$45M annual revenue",
                  spend: "$12B+ annual federal spend",
                  why: "Military base construction, federal building renovations, VA medical center upgrades. Large dollar values and long performance periods. SDVOSB set-asides are common.",
                  tip: "Build past performance through subcontracting with large primes first.",
                },
                {
                  icon: Building2, code: "541330", title: "Engineering Services",
                  size: "$25.5M annual revenue",
                  spend: "$8B+ annual federal spend",
                  why: "Environmental engineering, civil engineering, systems engineering. Government agencies rely on contracted engineers for nearly every infrastructure project.",
                  tip: "Pair with construction NAICS codes for design-build opportunities.",
                },
                {
                  icon: Lock, code: "561612", title: "Security Guards and Patrol Services",
                  size: "$29M annual revenue",
                  spend: "$3.5B+ annual federal spend",
                  why: "Federal buildings, military installations, VA hospitals, and courthouses all require contracted security. Steady, recurring revenue with clear performance metrics.",
                  tip: "Get your employees cleared early — cleared security guards command premium rates.",
                },
              ].map((item) => (
                <div key={item.code} className="p-6 rounded-2xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-stone-900">{item.title}</h3>
                        <code className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          {item.code}
                        </code>
                      </div>
                      <div className="flex gap-4 text-xs text-stone-400 mb-3">
                        <span>Size: {item.size}</span>
                        <span>Fed Spend: {item.spend}</span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed mb-2">{item.why}</p>
                      <div className="flex items-start gap-2 bg-sky-50 border border-sky-200 rounded-lg p-3">
                        <Lightbulb className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-sky-800 leading-relaxed"><strong>Tip:</strong> {item.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="Market Intelligence">
            CapturePilot tracks federal spending by NAICS code in real time. When you sign up, we show
            you exactly how many active opportunities match your codes and what the average contract
            value is.{" "}
            <Link href={SIGNUP_URL} className="font-bold underline hover:no-underline">
              See your market
            </Link>.
          </Callout>

          {/* --- Multiple Codes Strategy --- */}
          <SectionHeading id="multiple-codes" number="05" title="Multiple NAICS Codes Strategy" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most businesses should register with <strong>3 to 8 NAICS codes</strong> on SAM.gov. But
              not all codes are created equal. Here&apos;s how to think strategically:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  icon: Target, title: "Primary Code = Your Bread and Butter",
                  desc: "Choose the one NAICS code that best represents your primary revenue-generating activity. This is what the SBA uses if your size status is challenged. Make it count.",
                },
                {
                  icon: Layers, title: "Secondary Codes = Expansion Lanes",
                  desc: "Add codes for adjacent services you can legitimately perform. An IT company (541512) might also add cybersecurity consulting (541519) and data processing (518210).",
                },
                {
                  icon: Award, title: "Strategic Codes = Set-Aside Access",
                  desc: "Some codes have higher small business set-aside percentages or are on the WOSB eligible list. If you can genuinely perform the work, adding these codes opens new doors.",
                },
                {
                  icon: ClipboardList, title: "Remove Irrelevant Codes",
                  desc: "Don't list 20 codes 'just in case.' Contracting officers view unfocused profiles with suspicion. Quality over quantity — only list codes where you have real capability.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0">
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
              Review your NAICS codes annually. As your business grows, you may want to add new codes
              or drop ones where you no longer qualify as small.
            </p>
          </div>

          {/* --- Common Mistakes --- */}
          <SectionHeading id="common-mistakes" number="06" title="Common NAICS Code Mistakes" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These mistakes cost small businesses real contract opportunities:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { mistake: "Listing every remotely related NAICS code", fix: "Stick to 3-8 codes where you have demonstrable capability. A 20-code profile screams 'we don't know what we do.'" },
                { mistake: "Choosing the wrong primary NAICS code", fix: "Your primary code determines your size standard. Pick the one that best represents your main revenue source AND keeps you under the size threshold." },
                { mistake: "Not checking size standards before selecting codes", fix: "You might be small under NAICS 236220 ($45M) but large under 541330 ($25.5M). Check the SBA table for every code you list." },
                { mistake: "Ignoring the WOSB eligible NAICS list", fix: "If you're a women-owned business, check whether your codes are on the SBA's WOSB eligible list. Not all codes qualify." },
                { mistake: "Using outdated NAICS codes from the 2017 revision", fix: "The 2022 NAICS revision changed several codes. Make sure you're using the current version — search census.gov/naics." },
                { mistake: "Copying a competitor's NAICS codes without analysis", fix: "Their business is not your business. Your codes should reflect your actual capabilities, past performance, and strategic direction." },
                { mistake: "Never updating codes as your business evolves", fix: "Review during your annual SAM.gov renewal. Add codes for new services, remove codes where you've exceeded the size standard." },
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

          <Callout icon={Lightbulb} color="sky" title="Pro Tip">
            Search SAM.gov for active solicitations under each code you&apos;re considering. If there are
            zero opportunities, that code isn&apos;t worth adding to your profile. Focus on codes with
            active, recurring federal demand.
          </Callout>

          {/* --- CTA --- */}
          <div id="quick-checker" className="scroll-mt-24 pt-12">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Find Your NAICS Codes in 30 Seconds
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                Our Quick Checker analyzes your business and returns verified NAICS codes with size
                standards, set-aside eligibility, and federal spending data for each code.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Enter your business name or description",
                  "Get verified NAICS codes with size standards",
                  "See set-aside eligibility per code",
                  "View active federal spending volume",
                  "Compare against registered competitors",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={CHECK_URL}
                  className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Run Quick Checker <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={SIGNUP_URL}
                  className="bg-transparent text-white border border-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  Start Free Account
                </Link>
              </div>
              <p className="text-sm text-stone-500 mt-4">
                No login required for Quick Check. Free forever.
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
              <Link href="/blog/set-aside-programs" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Shield className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Set-Aside Programs</p>
                  <p className="text-xs text-stone-500">Your unfair advantage in GovCon</p>
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
