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
  Users,
  TrendingUp,
  Clock,
  Star,
  AlertCircle,
  Building,
  Award,
  Zap,
  FileText,
  Target,
  DollarSign,
  Phone,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-apex", label: "What APEX Accelerators Are (and What They Replaced)" },
  { id: "who-qualifies", label: "Who Qualifies for Free APEX Help" },
  { id: "services-offered", label: "What an APEX Advisor Actually Does for You" },
  { id: "what-they-wont-do", label: "What APEX Advisors Won't Do" },
  { id: "find-your-center", label: "How to Find Your Nearest APEX Center" },
  { id: "first-meeting", label: "What to Bring to Your First Meeting" },
  { id: "sam-registration-help", label: "SAM Registration and Certifications" },
  { id: "proposal-assistance", label: "Proposal and Solicitation Help" },
  { id: "combine-with-tools", label: "Combining APEX with the Right Software" },
  { id: "next-steps", label: "Your Action Plan" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "red" | "violet";
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
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    red: "text-red-600",
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
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">{title}</h2>
    </div>
  );
}

export default function ApexAcceleratorGovconGuidePage() {
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
            <span className="text-stone-900 font-medium">APEX Accelerator Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Building className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            APEX Accelerators:{" "}
            <span className="gradient-text">The Free Government Contracting Help Most Small Businesses Don&apos;t Know About</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            There are 92 federally funded centers across the country staffed with advisors whose one job is
            helping businesses like yours win government contracts — at no charge. Most small business owners
            have never heard of them. Here&apos;s what they do, how to find yours, and how to get the most out
            of every meeting.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published October 10, 2026</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="px-6 py-8 bg-stone-50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "92", label: "Centers Nationwide", icon: MapPin },
              { value: "$64.9B", label: "Contracts Supported Annually", icon: DollarSign },
              { value: "26,232", label: "New Clients Served (2024-25)", icon: Users },
              { value: "$0", label: "Cost to You", icon: Star },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 text-emerald-600 mb-1" />
                <p className="text-2xl font-black text-stone-900">{value}</p>
                <p className="text-xs text-stone-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8 pt-8">
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
                  <span className="text-xs font-bold text-emerald-500 w-5 shrink-0">
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
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <SectionHeading id="what-is-apex" number="01" title="What APEX Accelerators Are (and What They Replaced)" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            APEX Accelerators are free, DoD-funded assistance centers that help businesses of all sizes — but
            especially small businesses — navigate the federal contracting market. They&apos;re distributed
            nationwide: hosted by universities, economic development agencies, chambers of commerce, and
            community colleges. The advisor you meet might sit in a campus office or a rural co-working space.
            The funding comes from Washington. The service is free to you.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Before 2023, these centers were called Procurement Technical Assistance Centers, or PTACs. Congress
            authorized the program in 1985 under the Procurement Technical Assistance Program (PTAP). For
            nearly four decades they operated under that name with modest budgets and inconsistent visibility.
            Then the DoD&apos;s Office of Small Business Programs took over management and rebranded the network
            as APEX Accelerators in fiscal year 2023, updating the name to signal a broader, more modern mission
            that includes emerging technology, cybersecurity, and defense industrial base priorities.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The scale is larger than most people realize. In the program year from April 2024 through March 2025,
            92 centers served 26,232 new business clients, ran 6,284 training events, and supported 549,519
            contracts and subcontracts. Total contract value across those awards reached $64.9 billion. That
            number includes everything from a $50,000 facilities maintenance contract to a multimillion-dollar
            DoD services award — but it&apos;s a real output of real advisory relationships.
          </p>

          <Callout icon={Star} color="emerald" title="Program funding">
            The APEX Accelerator network receives approximately $55 million per year in federal funding through
            the DoD. That money flows to individual centers through cooperative agreements. Your state&apos;s center
            may also receive state matching funds. All of this subsidizes the advisors you meet with. You pay
            nothing.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The rename from PTAC to APEX also came with a shift in focus. The older PTAC mission was primarily
            about helping businesses register on SAM.gov and find solicitations. APEX centers are expected to
            do more: advise on emerging technology sectors, help businesses understand CMMC cybersecurity
            requirements for DoD work, and connect clients to SBA certification programs. The core is the same —
            expert guidance, no charge — but the scope has expanded.
          </p>

          {/* Section 2 */}
          <SectionHeading id="who-qualifies" number="02" title="Who Qualifies for Free APEX Help" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The short answer: almost any business. APEX Accelerators are not restricted to small businesses,
            though the vast majority of clients are small businesses and startups. There is no revenue floor,
            no employee count minimum, and no requirement that you already hold a government contract. You can
            walk in on day one with zero federal experience and get help.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Each center sets its own eligibility boundaries, which are typically geographic. Your local center
            serves businesses within a defined territory — usually one or several counties, or an entire state
            in rural areas. If you&apos;re outside that territory, you&apos;ll be referred to the center that covers
            your area.
          </p>

          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-900 mb-4 text-lg">Who APEX Centers Typically Serve</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Businesses with no prior government contracts",
                "Companies exploring whether federal work makes sense",
                "Veteran-owned businesses pursuing SDVOSB or VOSB status",
                "Women-owned businesses working toward WOSB certification",
                "Firms in HUBZone areas seeking to leverage their location",
                "8(a) applicants needing certification guidance",
                "Existing contractors pursuing new NAICS codes",
                "Businesses responding to their first RFP or sources sought",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One thing worth knowing: APEX centers are designed for businesses that want to sell to the government.
            They&apos;re not grant programs, they don&apos;t provide financing, and they won&apos;t help you pursue
            SBA loan applications. If you need capital, you want an SBDC (Small Business Development Center) or
            a SCORE mentor. APEX advisors are specialists in procurement, not general small business advising.
            That specialization is exactly what makes them valuable when you&apos;re trying to win contracts.
          </p>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 shrink-0 mt-1 opacity-80" />
              <div>
                <h3 className="text-xl font-black mb-2">Before your first APEX meeting, know your eligibility</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Run a quick eligibility check so you walk in knowing which set-aside programs you qualify for.
                  Your advisor will cover more ground when you arrive prepared.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading id="services-offered" number="03" title="What an APEX Advisor Actually Does for You" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Every APEX center offers a core set of services, though the depth and format vary. Some centers
            operate entirely through one-on-one appointments. Others run group workshops and webinars alongside
            individual counseling. What you get depends on your local center&apos;s capacity and focus areas.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Here&apos;s what the typical service menu looks like across the network:
          </p>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                icon: FileText,
                title: "SAM.gov registration and maintenance",
                detail:
                  "Advisors walk you through every field in the System for Award Management, including your UEI number, CAGE code, NAICS codes, and socioeconomic certifications. They&apos;ll also remind you about annual renewals and flag common errors that get contractors excluded from awards.",
              },
              {
                icon: Award,
                title: "SBA and VA certification guidance",
                detail:
                  "Advisors evaluate your eligibility for 8(a), HUBZone, WOSB, EDWOSB, VOSB, and SDVOSB programs. They won&apos;t submit your application for you, but they&apos;ll walk through the requirements, flag potential disqualifiers, and help you build the documentation package.",
              },
              {
                icon: Target,
                title: "Market research and opportunity identification",
                detail:
                  "A good APEX advisor will help you run searches on SAM.gov and USASpending.gov to find which agencies buy what you sell, identify incumbent contractors, and find expiring contracts in your space. This is the intelligence work most new contractors skip — and it&apos;s exactly where APEX can save you weeks of trial and error.",
              },
              {
                icon: FileText,
                title: "Solicitation review and proposal feedback",
                detail:
                  "Advisors will read an RFP with you, decode the Section L instructions and Section M evaluation criteria, and flag compliance requirements you might miss. Many centers will also review a draft proposal and give feedback before you submit.",
              },
              {
                icon: Users,
                title: "Teaming and subcontracting connections",
                detail:
                  "Some APEX centers host matchmaking events that connect small businesses with prime contractors. They can also help you understand how teaming agreements work and what prime contractors are legally required to subcontract on certain contracts.",
              },
              {
                icon: TrendingUp,
                title: "Capability statement review",
                detail:
                  "Your capability statement is often the first thing a contracting officer or prime contractor sees. APEX advisors review them regularly and know what works. A half-hour session with your local advisor is worth more than a template from the internet.",
              },
            ].map(({ icon: Icon, title, detail }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">{title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Training programs vary more by center. Workshops on government contracting basics, proposal writing,
            small business certifications, and cybersecurity compliance (especially CMMC for DoD contractors)
            are common across the network. Some centers offer these free; others charge a nominal fee. Check
            your local center&apos;s calendar — many have moved their workshops online, which means you can attend
            sessions from centers in other states if the timing works.
          </p>

          {/* Section 4 */}
          <SectionHeading id="what-they-wont-do" number="04" title="What APEX Advisors Won't Do" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            This matters, and it&apos;s worth being direct about it. APEX advisors are advisors — they guide
            you, they don&apos;t act for you. There are things they cannot and will not do, both by program rules
            and practical capacity.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-8 animate-on-scroll">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <p className="font-bold text-sm text-amber-800">Expectations to calibrate</p>
            </div>
            <ul className="space-y-3 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">✗</span>
                <span>They won&apos;t write your proposal for you. They&apos;ll review it and give feedback, but the writing is yours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">✗</span>
                <span>They won&apos;t submit your SAM registration or certification applications. They walk you through; you do the clicking.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">✗</span>
                <span>They don&apos;t have inside access to contracting officers and can&apos;t get you a meeting with an agency buyer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">✗</span>
                <span>They aren&apos;t lawyers. For FAR clause interpretation, contract disputes, or protests, you need legal counsel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">✗</span>
                <span>They won&apos;t guarantee you&apos;ll win anything. Advisory help improves your odds; it doesn&apos;t eliminate the competition.</span>
              </li>
            </ul>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The advisors who get frustrated clients are often the ones where expectations weren&apos;t set right at
            the start. A first-time contractor who shows up expecting the advisor to land them a contract will
            be disappointed. A contractor who comes in with a specific question — &quot;I&apos;m responding to this
            sources sought, how should I frame my capabilities response?&quot; — will get genuine, actionable
            feedback. Be the second kind of client.
          </p>

          {/* Section 5 */}
          <SectionHeading id="find-your-center" number="05" title="How to Find Your Nearest APEX Center" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The national directory is at <strong>apexaccelerators.us</strong>. Enter your zip code and it will
            show the centers that serve your area, with contact information and the host organization&apos;s website.
            Some states have a single center covering the whole state; larger states like California, Texas, and
            Florida have multiple centers with distinct territories.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            In practice, many businesses find their APEX center through an SBDC, a chamber of commerce, or a
            state economic development office. They often share space or at least share referral relationships.
            If you&apos;ve already worked with an SBDC counselor, ask them directly — they&apos;ll know your local
            APEX advisor and can make a warm introduction.
          </p>

          <div className="bg-sky-50 rounded-2xl border border-sky-200 p-6 my-8 animate-on-scroll">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-sky-600" />
              <p className="font-bold text-sm text-sky-800">Finding your APEX center: step by step</p>
            </div>
            <ol className="space-y-2 text-sm text-sky-900 list-decimal pl-5">
              <li>Go to <strong>apexaccelerators.us</strong> and use the center locator.</li>
              <li>Note the host organization — this is usually a university, community college, or economic development agency.</li>
              <li>Call or email to set up an initial consultation. Many centers offer a free 30-60 minute introductory session.</li>
              <li>Ask about their focus areas — some specialize in DoD, others in civilian agencies or specific industries.</li>
              <li>Ask for their workshop calendar even if you&apos;re not ready to register for anything. The topics give you a sense of what the advisor covers best.</li>
            </ol>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Wait times vary. Busy urban centers may book weeks out for individual counseling sessions. Rural
            centers often have more availability. If your first center has a long queue and you need help quickly,
            check whether a nearby center (even in a neighboring state) accepts virtual appointments. Many moved
            to remote counseling during the pandemic and kept it.
          </p>

          {/* Section 6 */}
          <SectionHeading id="first-meeting" number="06" title="What to Bring to Your First Meeting" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Show up prepared and you&apos;ll get five times the value out of a one-hour session. APEX advisors
            spend too much of their time with clients who haven&apos;t done basic prep. Don&apos;t be that client.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                title: "Business basics",
                items: [
                  "Your NAICS codes (or your best guess — they&apos;ll help refine them)",
                  "Number of employees and annual revenue (for size standard assessment)",
                  "Years in business",
                  "Ownership structure (is it veteran-owned, woman-owned, etc.?)",
                ],
              },
              {
                title: "What you&apos;re trying to figure out",
                items: [
                  "Which agencies buy what you sell",
                  "Whether you qualify for any set-aside programs",
                  "What your SAM registration is missing",
                  "How to respond to a specific opportunity",
                ],
              },
              {
                title: "If you have it",
                items: [
                  "Your current SAM.gov registration (or login)",
                  "Past contracts or past performance references",
                  "A draft capability statement",
                  "The SAM.gov opportunity number you&apos;re considering",
                ],
              },
              {
                title: "Questions to ask the advisor",
                items: [
                  "Which agencies are most active in my NAICS codes in this region?",
                  "What certifications should I prioritize given my profile?",
                  "Can you review my capability statement?",
                  "What&apos;s the most common mistake you see from businesses like mine?",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-stone-50 rounded-xl border border-stone-200 p-5">
                <h4 className="font-bold text-stone-900 mb-3 text-sm">{title}</h4>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 7 */}
          <SectionHeading id="sam-registration-help" number="07" title="SAM Registration and Certifications" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            SAM.gov registration is where most first-time contractors get stuck. The interface is not intuitive,
            the error messages are unhelpful, and a mistake in your primary NAICS code or your representations
            and certifications section can affect which opportunities you see and which set-asides you&apos;re
            eligible for. This is exactly the kind of task where APEX advisors earn their keep.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            A typical APEX session on SAM covers the full registration sequence: getting your UEI number from
            SAM.gov, acquiring your CAGE code (assigned after SAM registration is complete), selecting the right
            NAICS codes, completing your representations and certifications, and setting up your Dynamic Small
            Business Search (DSBS) profile. The DSBS profile matters — it&apos;s how prime contractors and
            subcontracting officers find you when they&apos;re looking for small business partners.
          </p>

          <Callout icon={AlertCircle} color="amber" title="The annual renewal trap">
            SAM registration expires every 12 months and must be renewed — but SAM doesn&apos;t always send reliable
            reminders. An expired registration makes you ineligible to receive contract awards. Ask your APEX
            advisor to set a reminder system for you, and read our{" "}
            <Link href="/blog/sam-gov-renewal-guide" className="underline font-semibold">
              SAM.gov renewal guide
            </Link>{" "}
            before your registration lapses.
          </Callout>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            On certifications: APEX advisors are well-versed in all of the major SBA programs — 8(a), HUBZone,
            WOSB, EDWOSB — and in the VA&apos;s VOSB and SDVOSB verification process. They can&apos;t file applications
            for you, but they can assess your eligibility with precision and flag the specific documentation
            you&apos;ll need. Many advisors have seen hundreds of certification applications and know exactly where
            common disqualifiers appear.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            If you think you qualify for a set-aside program but aren&apos;t sure, a 30-minute eligibility session
            with an APEX advisor is the fastest way to find out. Alternatively, you can run a quick check
            through{" "}
            <Link href="/features/quick-checker" className="text-emerald-700 font-semibold hover:underline">
              CapturePilot&apos;s Quick Checker
            </Link>{" "}
            before your meeting — walking in knowing your eligibility profile lets the advisor focus on strategy
            rather than diagnostics.
          </p>

          {/* Section 8 */}
          <SectionHeading id="proposal-assistance" number="08" title="Proposal and Solicitation Help" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Government solicitations are written in a language most business owners have never encountered. A
            single RFP can run hundreds of pages, with compliance requirements buried in Section H, evaluation
            criteria scattered across Section M, and mandatory forms in Section K that, if skipped, will get
            you disqualified regardless of how good your technical approach is.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            APEX advisors know how to read a solicitation. They&apos;ve seen the patterns. A session focused on
            a specific RFP you&apos;re pursuing can save you from submitting a non-compliant proposal — the single
            most common reason small businesses lose bids they were actually qualified to win.
          </p>

          <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden my-8 animate-on-scroll">
            <div className="px-6 py-4 border-b border-stone-200 bg-stone-100">
              <h3 className="font-bold text-stone-900">What APEX Proposal Help Typically Covers</h3>
            </div>
            <div className="divide-y divide-stone-200">
              {[
                {
                  phase: "Before the RFP",
                  help: "Market research, identifying agencies buying your services, reviewing sources sought notices, understanding procurement forecasts",
                },
                {
                  phase: "RFP review",
                  help: "Decoding Section L instructions and Section M criteria, building a compliance matrix, identifying required certifications and clearances",
                },
                {
                  phase: "During writing",
                  help: "Reviewing technical volume drafts, checking compliance, flagging missing required elements, feedback on past performance citations",
                },
                {
                  phase: "Before submission",
                  help: "Final compliance check, formatting review, confirmation all required attachments are included",
                },
                {
                  phase: "After award/loss",
                  help: "Some centers help you request a debriefing and interpret the feedback for your next pursuit",
                },
              ].map(({ phase, help }) => (
                <div key={phase} className="grid sm:grid-cols-3 gap-4 px-6 py-4">
                  <div className="font-medium text-stone-900 text-sm">{phase}</div>
                  <div className="sm:col-span-2 text-sm text-stone-600">{help}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            One caution: not every APEX advisor has strong proposal writing expertise. The network&apos;s quality
            varies by center and by individual advisor. If you find that your local advisor is stronger on
            registration and certifications than on technical volume strategy, that&apos;s useful information.
            Use them for what they&apos;re good at, and consider a proposal consultant or{" "}
            <Link href="/features/proposals" className="text-emerald-700 font-semibold hover:underline">
              proposal software
            </Link>{" "}
            for the parts they&apos;re not.
          </p>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border border-stone-200 p-8 bg-stone-50 animate-on-scroll">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">Find opportunities worth bidding before your APEX meeting</h3>
                <p className="text-stone-600 text-sm mb-4">
                  CapturePilot matches your NAICS codes, certifications, and past performance to open solicitations.
                  Walk into your APEX session with specific contracts in hand rather than a general &quot;where do I start?&quot; question.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/features/matching"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-700 transition-colors"
                  >
                    See opportunity matching <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 border border-stone-300 text-stone-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <SectionHeading id="combine-with-tools" number="09" title="Combining APEX with the Right Software" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            APEX Accelerators are a starting point, not a complete solution. They give you expert human guidance
            on the mechanics of government contracting. What they can&apos;t do is monitor SAM.gov for you 24 hours
            a day, score your probability of winning an opportunity before you commit weeks to a proposal, or
            help you manage a pipeline of 20 active pursuits simultaneously.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The contractors who grow fastest in federal work treat APEX as one tool among several. They use
            their APEX advisor for certification guidance, solicitation reviews, and periodic strategy sessions.
            They use software for the systematic, repeatable work: finding opportunities, tracking pre-solicitation
            activity, managing proposals, and analyzing which agencies are spending in their space.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h4 className="font-bold text-emerald-900 mb-3">Where APEX adds the most value</h4>
              <ul className="space-y-2 text-sm text-emerald-800">
                {[
                  "Initial SAM setup and NAICS code selection",
                  "Certification eligibility assessment",
                  "First RFP review and compliance check",
                  "Training on GovCon fundamentals",
                  "Connecting with prime contractors at matchmaking events",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h4 className="font-bold text-blue-900 mb-3">Where software adds the most value</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                {[
                  "Continuous opportunity discovery across SAM.gov",
                  "Pipeline management across multiple pursuits",
                  "Market intelligence on agency spending patterns",
                  "Automated match scoring for incoming solicitations",
                  "Proposal template and compliance tools at scale",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Think of your APEX advisor as a seasoned mentor who gives you an honest read on your situation and
            helps you avoid expensive mistakes. Think of your GovCon software as the infrastructure that keeps
            you from missing opportunities while you&apos;re focused on winning the one in front of you. The
            contractors who use both tend to ramp up faster than those who rely on either alone.
          </p>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            For more on building a systematic approach to finding work, see our guides on{" "}
            <Link href="/blog/government-contract-pipeline-management" className="text-emerald-700 font-semibold hover:underline">
              managing your GovCon pipeline
            </Link>
            {" "}and{" "}
            <Link href="/blog/sources-sought-notice" className="text-emerald-700 font-semibold hover:underline">
              responding to sources sought notices
            </Link>
            {" "}early to shape the RFP before it drops.
          </p>

          {/* Section 10 */}
          <SectionHeading id="next-steps" number="10" title="Your Action Plan" />

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            Most small businesses sit on the fence about government contracting for months — sometimes years —
            because they don&apos;t know where to start. APEX Accelerators exist specifically to remove that barrier.
            The help is free, the advisors know the territory, and the worst outcome from a first meeting is
            learning that federal work isn&apos;t the right fit for your business right now. That&apos;s valuable
            information too.
          </p>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                step: "1",
                action: "Find your center",
                detail: "Go to apexaccelerators.us and locate the APEX Accelerator that serves your zip code.",
              },
              {
                step: "2",
                action: "Run an eligibility check first",
                detail: "Use CapturePilot's Quick Checker to understand your set-aside eligibility before the meeting. Walk in knowing your profile.",
              },
              {
                step: "3",
                action: "Schedule an intake appointment",
                detail: "Most centers offer a free 30-60 minute initial consultation. Call or email to get on the calendar.",
              },
              {
                step: "4",
                action: "Come with a specific question",
                detail: "Bring your NAICS codes, a specific opportunity you&apos;re considering, or a draft capability statement. Specific questions get specific answers.",
              },
              {
                step: "5",
                action: "Ask about their training calendar",
                detail: "Workshop topics tell you what your advisor knows best and what they see most often. Workshops on SAM and certifications are usually free.",
              },
              {
                step: "6",
                action: "Schedule a follow-up",
                detail: "The value of APEX compounds over multiple sessions. Book your next appointment before you leave the first one.",
              },
            ].map(({ step, action, detail }) => (
              <div key={step} className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                  {step}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-0.5">{action}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: detail }} />
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed animate-on-scroll">
            The contractors who use APEX effectively treat their advisor the way a smart startup founder treats
            a mentor: not as someone who does the work for them, but as someone who has seen a hundred companies
            make the same mistakes and can help them skip the expensive ones. That relationship, built over
            months and multiple sessions, is genuinely valuable — and it costs you nothing to start.
          </p>

          {/* Final CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-800 p-8 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 shrink-0 mt-1 opacity-80" />
              <div>
                <h3 className="text-xl font-black mb-2">Ready to move faster than the manual process?</h3>
                <p className="text-stone-300 text-sm mb-4">
                  APEX helps you get started. CapturePilot helps you scale. Start a free 30-day trial and see
                  which federal opportunities match your profile — no credit card required.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-100 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 border border-stone-600 text-stone-200 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-stone-700 transition-colors"
                  >
                    Check eligibility free
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related reading */}
          <div className="mt-16 pt-8 border-t border-stone-200 animate-on-scroll">
            <h3 className="text-lg font-black text-stone-900 mb-4">Keep reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/how-to-find-government-contracts-small-business",
                  title: "How to Find Government Contracts for Your Small Business",
                  category: "Getting Started",
                },
                {
                  href: "/blog/federal-contracting-certifications",
                  title: "Federal Contracting Certifications: Which Ones Actually Help You Win",
                  category: "Certifications",
                },
                {
                  href: "/blog/capability-statement-examples",
                  title: "Capability Statement Examples: What Good (and Bad) Ones Look Like",
                  category: "Marketing",
                },
                {
                  href: "/blog/sam-gov-search-tips",
                  title: "SAM.gov Search Tips: Stop Wasting Time and Find Real Opportunities",
                  category: "Tools",
                },
              ].map(({ href, title, category }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-emerald-600 mb-1">{category}</p>
                    <p className="text-sm font-semibold text-stone-900 group-hover:text-emerald-800 leading-snug">
                      {title}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 shrink-0 mt-0.5 transition-colors" />
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
