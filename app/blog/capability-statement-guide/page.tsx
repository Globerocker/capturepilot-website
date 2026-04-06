"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  FileText, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb,
  Building2, Award, Star, Hash, Phone, Palette, BookOpen,
  ChevronRight, Target, Users, Globe, Sparkles, Eye, XCircle,
  Layout, Type, Image as ImageIcon, List, Briefcase,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

/* ─── Table of Contents ─── */
const TOC = [
  { id: "what-is", label: "What Is a Capability Statement?" },
  { id: "why-you-need-one", label: "Why Every Contractor Needs One" },
  { id: "essential-sections", label: "The 6 Essential Sections" },
  { id: "design-tips", label: "Design Tips" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "example-walkthrough", label: "Example Walkthrough" },
  { id: "let-ai-build-it", label: "Let AI Build It for You" },
];

/* ─── Info Callout ─── */
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

/* ─── Section Heading ─── */
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

/* ─── Page ─── */
export default function CapabilityStatementGuidePage() {
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

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">Capability Statement Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Guide
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Write a Capability Statement That{" "}
            <span className="gradient-text">Wins Contracts</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Your capability statement is the resume of your business. It&apos;s the first thing a contracting
            officer reads when deciding whether to include you in a solicitation. Here&apos;s how to write one
            that stands out from the stack.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Updated April 2026</span>
          </div>
        </div>
      </section>

      {/* ─── Table of Contents ─── */}
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

      {/* ─── Article Body ─── */}
      <article ref={articleRef} className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* ─── What Is a Capability Statement? ─── */}
          <SectionHeading id="what-is" number="01" title="What Is a Capability Statement?" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              A capability statement is a one-page document that summarizes your company&apos;s competencies,
              qualifications, and past performance for potential buyers. Think of it as a resume for your
              business — except instead of landing a job, you&apos;re landing a government contract.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal contracting officers review hundreds of companies for every opportunity. Your capability
              statement is what gets you from &quot;unknown vendor&quot; to &quot;let&apos;s include them in the solicitation.&quot;
              It&apos;s the single most important marketing document in government contracting.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Unlike a corporate brochure, a capability statement follows a specific structure that federal
              buyers expect. It needs to be concise, factual, and targeted to the agency or opportunity
              you&apos;re pursuing.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="Pro Tip">
            Think of your capability statement as a &quot;leave behind&quot; — it&apos;s what a contracting officer keeps
            on their desk after meeting you at an industry day. Make it memorable but professional.
          </Callout>

          {/* ─── Why Every Contractor Needs One ─── */}
          <SectionHeading id="why-you-need-one" number="02" title="Why Every Contractor Needs One" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              If you&apos;re registered on SAM.gov but don&apos;t have a capability statement, you&apos;re invisible.
              Here&apos;s why this document is non-negotiable:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: Eye, title: "First Impressions Matter", desc: "Contracting officers use cap statements to shortlist vendors. No statement, no shortlist." },
                { icon: Target, title: "Targeted Outreach", desc: "Customize it per opportunity to show you understand the requirement — not just blast a generic profile." },
                { icon: Users, title: "Teaming Arrangements", desc: "When primes look for subcontractors, they ask for your cap statement first. It's your handshake." },
                { icon: Award, title: "Industry Days & Events", desc: "At every GovCon networking event, the first thing people exchange is a capability statement." },
                { icon: Briefcase, title: "Proposal Attachments", desc: "Many solicitations explicitly require a capability statement as part of the submission package." },
                { icon: Globe, title: "Online Presence", desc: "Upload it to SAM.gov, your website, and LinkedIn to be discoverable by buyers and primes." },
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

          <Callout icon={AlertTriangle} color="amber" title="Don't Skip This">
            Over 60% of small businesses registered on SAM.gov don&apos;t have a capability statement.
            That means if you write a good one, you&apos;re already ahead of more than half your competition.
          </Callout>

          {/* ─── The 6 Essential Sections ─── */}
          <SectionHeading id="essential-sections" number="03" title="The 6 Essential Sections" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-8">
              Every strong capability statement includes these six sections. Miss one, and a contracting
              officer will move on to the next vendor.
            </p>

            {[
              {
                icon: Building2, num: "1", title: "Company Overview",
                desc: "A 2-3 sentence summary of who you are, what you do, and where you operate. Include your legal business name, DUNS/UEI number, CAGE code, and business structure (LLC, Corp, etc.).",
                example: "\"Acme Federal Services LLC is a Service-Disabled Veteran-Owned Small Business (SDVOSB) headquartered in Arlington, VA, specializing in IT modernization and cybersecurity solutions for federal agencies. Founded in 2018, we have delivered $12M+ in federal contracts across DoD and civilian agencies.\"",
              },
              {
                icon: Star, num: "2", title: "Core Competencies",
                desc: "List 4-6 specific capabilities that align with the work you're pursuing. Use keywords from solicitations you want to win. Be specific — \"cybersecurity\" is too broad; \"zero trust architecture implementation\" tells the buyer exactly what you do.",
                example: "Zero Trust Architecture Implementation, FedRAMP Cloud Migration, Security Operations Center (SOC) Management, Continuous Monitoring & ATO Support",
              },
              {
                icon: Award, num: "3", title: "Past Performance",
                desc: "Highlight 2-4 relevant contracts you've completed. Include the agency, contract value, period of performance, and a one-line description of what you delivered. This is the section that builds credibility.",
                example: "\"VA Enterprise Cloud Migration — $4.2M, 2023-2026. Migrated 14 legacy systems to AWS GovCloud achieving 99.99% uptime and 40% cost reduction.\"",
              },
              {
                icon: CheckCircle2, num: "4", title: "Differentiators",
                desc: "What makes you different from the 50 other companies with the same NAICS code? Think: cleared workforce, proprietary tools, unique certifications (ISO, CMMI), geographic presence near the customer, or past relationships with the agency.",
                example: "\"100% of our workforce holds active Secret or Top Secret clearances. We maintain a FedRAMP-authorized cloud environment and are CMMI Level 3 appraised.\"",
              },
              {
                icon: Hash, num: "5", title: "NAICS Codes & Certifications",
                desc: "List your primary NAICS codes (the ones relevant to this opportunity, not all 20 you registered for). Include all socioeconomic certifications: SDVOSB, WOSB, 8(a), HUBZone, etc. Also list contract vehicles you're on (GSA Schedule, SEWP, etc.).",
                example: "NAICS: 541512, 541519, 518210 | Certs: SDVOSB, ISO 27001, CMMI L3 | Vehicles: GSA MAS, SEWP V",
              },
              {
                icon: Phone, num: "6", title: "Contact Information",
                desc: "Make it dead simple for a CO to reach you. Include: point of contact name, title, phone, email, website, and physical address. Don't make them search for how to contact you.",
                example: "Jane Smith, CEO / jane@acmefederal.com / (703) 555-0199 / acmefederal.com / 1234 Wilson Blvd, Suite 500, Arlington, VA 22209",
              },
            ].map((section) => (
              <div key={section.num} className="mb-8 animate-on-scroll">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900">{section.num}. {section.title}</h3>
                    <p className="text-stone-600 leading-relaxed mt-2">{section.desc}</p>
                  </div>
                </div>
                <div className="ml-15 bg-stone-50 border border-stone-200 rounded-xl p-4 ml-[60px]">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Example</p>
                  <p className="text-sm text-stone-700 italic leading-relaxed">{section.example}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Design Tips ─── */}
          <SectionHeading id="design-tips" number="04" title="Design Tips" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Content is king, but design is what makes someone actually read it. Follow these rules:
            </p>

            <div className="space-y-4">
              {[
                { icon: Layout, title: "Keep It to One Page", desc: "No exceptions. Contracting officers don't have time for multi-page documents. One page, front only. If you can't fit it in one page, you're including too much." },
                { icon: Palette, title: "Use Your Brand Colors", desc: "Pick 2-3 colors from your brand and use them consistently for headers, borders, and accents. This makes you look professional and recognizable." },
                { icon: Type, title: "Clean, Readable Typography", desc: "Use a professional sans-serif font (not Comic Sans, not Papyrus). 10-11pt body text, 14-16pt headers. Leave enough white space so it doesn't feel cramped." },
                { icon: ImageIcon, title: "Include Your Logo", desc: "Place your company logo prominently in the top-left or top-center. Make sure it's high resolution — a pixelated logo signals carelessness." },
                { icon: List, title: "Use Bullet Points, Not Paragraphs", desc: "Contracting officers scan, they don't read essays. Bullet points for competencies, past performance, and differentiators. Save the prose for the overview." },
                { icon: Eye, title: "Visual Hierarchy", desc: "Use bold headers, colored section dividers, and consistent spacing to guide the reader's eye from top to bottom. They should find any section in under 3 seconds." },
              ].map((tip, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-stone-200 hover-lift animate-on-scroll">
                  <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <tip.icon className="w-5 h-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{tip.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Common Mistakes ─── */}
          <SectionHeading id="common-mistakes" number="05" title="Common Mistakes" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              We&apos;ve reviewed hundreds of capability statements. These are the mistakes that get yours tossed:
            </p>

            <div className="space-y-3">
              {[
                { mistake: "Making it longer than one page", fix: "Edit ruthlessly. Every word should earn its place." },
                { mistake: "Using vague language like 'full-service provider'", fix: "Be specific: 'HVAC maintenance for federal facilities under 50,000 sq ft.'" },
                { mistake: "Listing every NAICS code you've ever registered", fix: "Only include codes relevant to the opportunity you're targeting." },
                { mistake: "No past performance (even if you have some)", fix: "Include subcontracting work, commercial projects, or analogous experience." },
                { mistake: "Outdated information (old address, wrong POC)", fix: "Review and update quarterly. Treat it like a living document." },
                { mistake: "Generic — the same statement for every opportunity", fix: "Create a master version, then customize the competencies and past performance per target." },
                { mistake: "No certifications or socioeconomic status listed", fix: "These are your competitive advantages. Make them prominent." },
                { mistake: "Poor formatting or hard-to-read layout", fix: "Invest in professional design or use a tool that handles layout for you." },
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

          <Callout icon={Lightbulb} color="emerald" title="Quick Check">
            Want to know if your business is even eligible for government contracts before writing
            your capability statement?{" "}
            <Link href={CHECK_URL} className="font-bold underline hover:no-underline">
              Run a free eligibility check
            </Link>{" "}
            — it takes 30 seconds.
          </Callout>

          {/* ─── Example Walkthrough ─── */}
          <SectionHeading id="example-walkthrough" number="06" title="Example Walkthrough" />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Let&apos;s walk through what a strong capability statement looks like. Here&apos;s a mock-up for a
              fictional janitorial services company targeting federal facility maintenance contracts:
            </p>

            {/* Mock Document */}
            <div className="bg-white rounded-2xl border-2 border-stone-200 shadow-xl overflow-hidden max-w-lg mx-auto my-8 animate-on-scroll">
              <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400" />
              <div className="p-6">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-stone-900">CleanForce Solutions LLC</h3>
                    <p className="text-xs text-stone-500">SDVOSB | HUBZone | UEI: ABC123DEF456 | CAGE: 5K7W2</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-bold text-stone-800 text-xs uppercase tracking-wider text-blue-700 mb-1">Company Overview</h4>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      CleanForce Solutions is a veteran-owned janitorial and facility maintenance company
                      based in Hampton, VA, serving federal installations across the Mid-Atlantic region since 2019.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-blue-700 mb-1">Core Competencies</h4>
                    <ul className="text-stone-600 text-xs space-y-0.5 ml-3">
                      <li className="list-disc">Federal facility janitorial services (NAICS 561720)</li>
                      <li className="list-disc">Green cleaning & LEED-compliant maintenance</li>
                      <li className="list-disc">Emergency response & disaster cleanup</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-blue-700 mb-1">Past Performance</h4>
                    <ul className="text-stone-600 text-xs space-y-0.5 ml-3">
                      <li className="list-disc">Ft. Eustis Bldg Maintenance — $1.2M, 2022-2025</li>
                      <li className="list-disc">VA Medical Center Housekeeping — $890K, 2023-2026</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-400 pt-1 border-t border-stone-100">
                    <Phone className="w-3 h-3" /> (757) 555-0123
                    <span>|</span>
                    <Globe className="w-3 h-3" /> cleanforcesolutions.com
                  </div>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Notice how every section is concise, specific, and targeted. The past performance matches the
              type of work they want to win. The competencies use exact procurement language. And the whole
              thing fits on one page with room to breathe.
            </p>
            <p className="text-stone-600 leading-relaxed">
              You can create a version like this manually — or you can let our AI do it in under a minute.
            </p>
          </div>

          {/* ─── CTA: Let AI Build It ─── */}
          <div id="let-ai-build-it" className="scroll-mt-24 pt-12">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Or Just Let AI Build It for You
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                Talk about your business for two minutes. Our AI writes a professional, government-ready
                capability statement with your brand colors and logo. Download it as a PDF instantly.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "Voice recording or text input — your choice",
                  "AI extracts brand colors from your website",
                  "All 6 essential sections, structured automatically",
                  "Download as professional PDF in under 60 seconds",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/features/capability-statement"
                className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Build Your Statement <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-stone-500 mt-4">
                Included free in every CapturePilot plan
              </p>
            </div>
          </div>

          {/* ─── Related Links ─── */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-2 gap-4">
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