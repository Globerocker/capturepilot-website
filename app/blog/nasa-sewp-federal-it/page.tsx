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
  DollarSign,
  Shield,
  Award,
  BarChart2,
  FileText,
  Zap,
  AlertCircle,
  Layers,
  TrendingUp,
  Clock,
  Building2,
  Users,
  CheckSquare,
  Package,
  Cpu,
  Globe,
  Lock,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-sewp", label: "What NASA SEWP Is — and Why It Dominates Federal IT Buying" },
  { id: "sewp-vi-what-changed", label: "SEWP VI: What Changed and What's at Stake" },
  { id: "three-categories", label: "The Three SEWP VI Categories Explained" },
  { id: "how-ordering-works", label: "How the SEWP Ordering Process Actually Works" },
  { id: "other-federal-it-vehicles", label: "The Other Major Federal IT Contract Vehicles in 2026" },
  { id: "subcontracting-path", label: "The Subcontracting Path: Getting Revenue Without a Prime Contract" },
  { id: "winning-task-orders", label: "Winning Task Orders as a SEWP Holder" },
  { id: "federal-it-vehicle-strategy", label: "Building Your Federal IT Vehicle Strategy" },
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

export default function NasaSewpFederalItPage() {
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
            <span className="text-stone-900 font-medium">NASA SEWP &amp; Federal IT Vehicles</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Package className="w-4 h-4" /> Contract Vehicles
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            NASA SEWP and Federal IT Contract Vehicles:{" "}
            <span className="gradient-text">
              The Complete Guide for Tech Contractors
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            SEWP processed $12.1 billion in federal IT orders in FY2025 — and 80% of that went
            to small businesses. SEWP VI just launched with a $60 billion ceiling and 2,115 awardees.
            Here's how this vehicle works, how it stacks up against Alliant 3 and OASIS+, and how
            tech contractors win work through it.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published August 14, 2026</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-24" ref={articleRef}>
        {/* Table of Contents */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-10 animate-on-scroll">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-stone-500" />
            <h2 className="font-bold text-stone-700 text-sm uppercase tracking-wider">
              In This Article
            </h2>
          </div>
          <ol className="space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-start gap-3 text-sm text-stone-600 hover:text-blue-600 transition-colors group"
                >
                  <span className="text-xs font-bold text-stone-400 group-hover:text-blue-400 mt-0.5 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="what-is-sewp"
            number="01"
            title="What NASA SEWP Is — and Why It Dominates Federal IT Buying"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The name is a little misleading. NASA's Solutions for Enterprise-Wide Procurement —
            SEWP — isn't a NASA-only contract. It's a government-wide acquisition contract (GWAC)
            that any federal agency can use, and most of them do. NASA manages it. Everyone buys
            through it.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            SEWP covers commercial off-the-shelf (COTS) IT products, related services, and
            increasingly IT solutions and services. That broad scope — hardware, software, cloud,
            cybersecurity, audio-visual systems, enterprise technology — makes it the default
            vehicle when an agency needs IT equipment or tech-related services and wants a fast,
            pre-competed path to award.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            SEWP V, the previous generation, ran from 2015 and processed more than{" "}
            <strong>$86 billion in cumulative orders</strong> over its lifetime. In FY2025 alone,
            it handled <strong>$12.1 billion in IT spending across 51,000 orders</strong>. That's
            not contract value ceiling — that's actual money spent. No other IT vehicle comes
            close to that order volume.
          </p>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                stat: "$86B+",
                label: "total orders through SEWP V over its lifetime (2015–2026)",
                color: "text-sky-600",
                bg: "bg-sky-50 border-sky-100",
              },
              {
                stat: "80%",
                label: "of SEWP V dollars in FY2025 went to small businesses",
                color: "text-emerald-600",
                bg: "bg-emerald-50 border-emerald-100",
              },
              {
                stat: "51,000",
                label: "individual orders placed through SEWP V in FY2025",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100",
              },
            ].map(({ stat, label, color, bg }) => (
              <div key={stat} className={`rounded-2xl border p-5 text-center ${bg}`}>
                <div className={`text-4xl font-black mb-2 ${color}`}>{stat}</div>
                <div className="text-xs text-stone-600 leading-snug">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The small business percentage is the most important number for most readers of this
            guide. SEWP has always been a small business-friendly vehicle — the program explicitly
            prioritizes small firm participation and its ordering process is designed to be
            accessible. An 80% small business share on a $12-billion vehicle means roughly{" "}
            <strong>$9.7 billion flowed to small businesses through SEWP in a single fiscal year</strong>.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The reason agencies love SEWP is speed. Once an agency's contracting officer (CO)
            needs IT equipment or a tech service, they post an RFQ to SEWP contractors. They're
            pre-vetted. The vehicle is pre-competed. The agency can award in days to weeks, not
            months. For the government, SEWP is one of the fastest paths from requirement
            identification to purchase order.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            That ordering speed is exactly why being on SEWP matters so much. Agencies default
            to it. Requirements that could theoretically go to open competition often go to SEWP
            instead because the contracting burden is lower. If you're not on the vehicle, you
            don't see those requirements — they never appear on SAM.gov as standalone solicitations.
          </p>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="sewp-vi-what-changed"
            number="02"
            title="SEWP VI: What Changed and What's at Stake"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            SEWP VI is not SEWP V with a higher ceiling. NASA used the transition to fundamentally
            restructure what the vehicle covers and how it's organized. The changes affect who can
            compete for what, how agencies buy, and what a SEWP VI award actually means for your
            business.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The most significant structural change: SEWP VI now has three separate categories
            instead of one consolidated vehicle. Each category has its own $20 billion ceiling,
            putting total vehicle capacity at <strong>$60 billion</strong>. The 10-year ordering
            period runs from <strong>November 1, 2026 through October 31, 2036</strong>.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            NASA made 2,115 awards to 1,490 vendors. The initial award round in June 2026 covered
            364 firms for the most specialized categories. A second award round expanded coverage
            significantly. The total awardee count — 1,490 vendors — is roughly comparable to
            SEWP V's contractor base, which means competition per task order stays manageable.
          </p>

          <Callout icon={AlertTriangle} color="amber" title="SEWP V Extension Ends — Transition Now">
            <p className="mb-2">
              SEWP V's ordering period runs through September 30, 2026, with possible short
              extensions through April 2027. New orders placed on SEWP V are winding down.
              If your agency customers currently buy through SEWP V holders, they'll be
              transitioning to SEWP VI contractors starting in late 2026.
            </p>
            <p>
              For businesses that subcontract under SEWP V primes, now is the time to confirm
              whether your prime partner has a SEWP VI award — and if not, to identify SEWP VI
              holders who can bring you in as a sub.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            SEWP VI also expanded scope beyond SEWP V. The previous vehicle focused primarily on
            COTS IT products. SEWP VI explicitly adds enterprise-scale IT services and mission-
            focused IT solutions — a scope expansion that puts it in more direct competition with
            Alliant 3 and OASIS+ for certain service requirements.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The timeline matters for strategy. SEWP VI's 10-year ordering period means any award
            you win — or any subcontracting relationship you build — has a decade-long runway.
            Unlike shorter vehicles that require recompetition in five to six years, a SEWP VI
            position gives your business a decade of access to this buying channel.
          </p>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="three-categories"
            number="03"
            title="The Three SEWP VI Categories Explained"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The category structure is the most important thing to understand about SEWP VI. Each
            category has different scope, different eligibility, and — most importantly for small
            businesses — different competitive dynamics.
          </p>

          {/* Category breakdown */}
          <div className="space-y-5 my-8 animate-on-scroll">
            {[
              {
                letter: "A",
                title: "Category A — IT, Communications &amp; Audio Visual (ITC/AV) Solutions",
                desc: "Commercial off-the-shelf hardware, software, cloud services, networking equipment, cybersecurity products, and audio-visual technology. This is the core SEWP products category — essentially what SEWP V primarily covered.",
                badge: "Open to all businesses",
                sbNote: "88% of Category A awards went to small businesses",
                color: "bg-blue-50 border-blue-200",
                badgeColor: "bg-blue-100 text-blue-800",
                sbColor: "text-blue-700",
              },
              {
                letter: "B",
                title: "Category B — Enterprise-Scale IT Services",
                desc: "Managed IT services, cloud migration, systems integration, IT program management, and large-scale technology deployments. This is where SEWP VI expanded beyond SEWP V's product focus.",
                badge: "Open to all businesses",
                sbNote: "80% of Category B awards went to small businesses",
                color: "bg-indigo-50 border-indigo-200",
                badgeColor: "bg-indigo-100 text-indigo-800",
                sbColor: "text-indigo-700",
              },
              {
                letter: "C",
                title: "Category C — Mission-Based IT Services",
                desc: "Agency-specific IT services tied to mission requirements — cybersecurity operations, custom software development, digital transformation, and technology modernization directly supporting agency missions.",
                badge: "Small business set-aside only",
                sbNote: "Category C is exclusively for small businesses — no large business competition",
                color: "bg-emerald-50 border-emerald-200",
                badgeColor: "bg-emerald-100 text-emerald-800",
                sbColor: "text-emerald-700",
              },
            ].map(({ letter, title, desc, badge, sbNote, color, badgeColor, sbColor }) => (
              <div key={letter} className={`rounded-2xl border p-6 ${color}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-black text-stone-800">{letter}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3
                        className="font-bold text-stone-900 text-base"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>
                        {badge}
                      </span>
                    </div>
                    <p className="text-stone-700 text-sm leading-relaxed mb-2">{desc}</p>
                    <p className={`text-xs font-semibold ${sbColor}`}>{sbNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Category C is the most important development for small businesses who provide
            IT services. It's a dedicated small-business set-aside at the vehicle level — not
            just at the task order level. That means every competition within Category C is
            already restricted to small businesses. You're not competing against IBM or Leidos
            for those requirements.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The coverage of all three categories on a single SEWP VI award is valuable because
            agencies often have both product and service needs. A vendor that holds Category A
            and Category B awards can address the full IT requirement lifecycle — equipment
            procurement and the services to configure, manage, and support it.
          </p>

          <Callout icon={Lightbulb} color="blue" title="Which Category Should You Target?">
            <p className="mb-2">
              The answer depends on what you actually sell. Product resellers and VARs (value-added
              resellers) should focus on Category A. IT managed service providers and integrators
              should focus on Category B. Mission-focused IT services firms — particularly small
              businesses doing cyber, software dev, or digital transformation work — should
              prioritize Category C for the competitive advantage of the small-business set-aside.
            </p>
            <p>
              Many firms qualified for and received awards in multiple categories. If your work
              spans products and services, dual-category positioning gives you the widest
              access to task orders.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            If you missed the SEWP VI initial award window, check the SEWP website at
            sewp.nasa.gov for on-ramp announcements. NASA has historically run on-ramp
            competitions during long-duration vehicles, and the 10-year ordering period makes
            on-ramps likely at intervals. Your path in the meantime is subcontracting —
            detailed in Section 6 below.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Target className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl mb-2">
                Check Your Eligibility for Federal IT Vehicles
              </h3>
              <p className="text-sky-100 mb-4">
                CapturePilot's Quick Checker identifies which contract vehicles, set-aside
                programs, and certification types your business currently qualifies for —
                and surfaces the IT opportunities active in your NAICS codes right now.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-sky-700 font-bold px-5 py-2.5 rounded-lg hover:bg-sky-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/features/quick-checker"
                  className="inline-flex items-center gap-2 bg-sky-500 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-sky-400 transition-colors text-sm"
                >
                  See Quick Checker <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="how-ordering-works"
            number="04"
            title="How the SEWP Ordering Process Actually Works"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Understanding the ordering process tells you how to position your company for work —
            and what the buying experience looks like from the agency side.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The process starts at the agency level, not at NASA. An end-user or program office
            identifies an IT requirement. They generate a purchase request (PR) and send it to
            their contracting office with funding documentation. The contracting officer then
            decides to use SEWP as the acquisition vehicle.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            From there, the contracting officer issues an RFQ through the SEWP ordering portal —
            either to all contract holders in the relevant category, or to a subset based on the
            specific product category, socioeconomic designation, or agency preference. Holders
            receive the RFQ and have a defined window — typically <strong>5 to 20 business days</strong> —
            to submit a quote.
          </p>

          {/* Ordering process steps */}
          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                num: "01",
                title: "Agency identifies requirement and funds the purchase",
                body: "The end-user defines the IT need and works with their contracting office to establish funding. This is invisible to SEWP holders — it happens entirely inside the agency.",
              },
              {
                num: "02",
                title: "Contracting officer posts RFQ to SEWP",
                body: "The CO issues the solicitation through the SEWP portal. It specifies the product/service, delivery requirements, evaluation criteria, and deadline. RFQs can go to all holders or a subset — agencies can target small business holders specifically.",
              },
              {
                num: "03",
                title: "SEWP holders submit quotes",
                body: "Contractors with relevant Category awards submit quotes. For product-heavy RFQs, quotes are typically price and delivery time. For services, a technical approach and staffing may be required. Turnaround windows are short — 5 to 20 business days is standard, sometimes shorter.",
              },
              {
                num: "04",
                title: "Agency evaluates and selects",
                body: "Evaluation criteria vary by requirement. Many SEWP purchases are lowest price technically acceptable (LPTA) or simply lowest price for commodity items. Services competitions use best-value criteria. The contracting officer selects a winner.",
              },
              {
                num: "05",
                title: "Delivery order issued",
                body: "The agency issues a delivery order directly to the selected SEWP holder. Payment flows from the agency to the SEWP contractor. NASA's role is administrative — managing the vehicle, ensuring compliance, and tracking spending.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100 hover-lift">
                <div className="text-2xl font-black text-stone-200 flex-shrink-0 w-10">{num}</div>
                <div>
                  <div className="font-bold text-stone-800 mb-1">{title}</div>
                  <div className="text-stone-600 text-sm leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The speed advantage is real. A full FAR Part 15 competition for a complex IT
            requirement can take six to eighteen months from solicitation to award. A SEWP task
            order for the same requirement can close in four to eight weeks. Agencies know this.
            It's why requirements that could go to full competition often don't.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The ordering process also creates a responsiveness advantage for SEWP holders who
            stay close to their agency customers. When an agency CO knows your company,
            understands your capabilities, and has had positive experiences with your delivery
            on past orders, they're more likely to set aside a task order for small businesses,
            issue a favorable scope that plays to your strengths, and give you the benefit of
            the doubt in evaluation.
          </p>

          <Callout icon={Clock} color="sky" title="The Short Window Problem">
            <p className="mb-2">
              Five business days is not a lot of time to write a meaningful technical approach,
              price a complex IT requirement, and submit a compliant quote. SEWP's speed
              advantage for agencies is a preparation burden for contractors.
            </p>
            <p>
              The contractors who win consistently on SEWP have proposal content libraries,
              standardized pricing models, and pre-built technical narratives for their most
              common offerings. They customize; they don't create. If you're starting from scratch
              on a 5-day window, you're already behind.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            Build your SEWP response infrastructure before you need it. That means staffed
            capability descriptions, product specification templates, pricing models keyed
            to your standard IT offerings, and past performance summaries ready to drop into
            a quote. CapturePilot's{" "}
            <Link href="/features/proposals" className="text-blue-600 hover:underline font-medium">
              proposal tools
            </Link>{" "}
            are designed to support exactly this kind of content library — fast retrieval,
            fast assembly, deadline-driven.
          </p>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="other-federal-it-vehicles"
            number="05"
            title="The Other Major Federal IT Contract Vehicles in 2026"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            SEWP is the largest IT acquisition vehicle by order volume, but it's not the only one.
            The federal IT vehicle landscape is shifting significantly in 2025–2026, with new
            vehicles launching and older ones sunsetting. Here's where things stand.
          </p>

          {/* Vehicles comparison table */}
          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Vehicle</th>
                  <th className="text-left px-4 py-3 font-semibold">Focus</th>
                  <th className="text-left px-4 py-3 font-semibold">Status (2026)</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">Small Biz Access</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "NASA SEWP VI",
                    "COTS IT products + IT services",
                    "Active — Nov 2026 through Oct 2036, $60B ceiling",
                    "Category C is SB-only; 80–88% SB share in A &amp; B",
                  ],
                  [
                    "Alliant 3 (GSA)",
                    "Complex enterprise IT services",
                    "Active — launched March 2026, 5+5 year term",
                    "Unrestricted only; separate SB vehicle in planning",
                  ],
                  [
                    "OASIS+ (GSA)",
                    "Professional services (13 domains)",
                    "Active — continuous on-ramp open since Jan 2026",
                    "Dedicated SB, 8(a), HUBZone, SDVOSB, WOSB pools",
                  ],
                  [
                    "CIO-SP3 / CIO-SP3 SB (NIH)",
                    "Health IT",
                    "Sunsetting Oct 29, 2026 — migrate to CIO-SP4",
                    "CIO-SP3 SB is dedicated small business",
                  ],
                  [
                    "CIO-SP4 (NIH)",
                    "Health IT (successor to CIO-SP3)",
                    "Award competition underway in 2026",
                    "Small business pool included",
                  ],
                  [
                    "STARS III (GSA)",
                    "IT — small business GWAC",
                    "Active through 2030, periodic on-ramps",
                    "100% small business only",
                  ],
                  [
                    "8(a) STARS III (GSA)",
                    "IT — 8(a) set-aside GWAC",
                    "Active; restricted to 8(a)-certified firms",
                    "100% 8(a) program participants",
                  ],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td
                      className="px-4 py-3 font-semibold text-stone-900 border-b border-stone-100"
                      dangerouslySetInnerHTML={{ __html: row[0] }}
                    />
                    <td
                      className="px-4 py-3 text-stone-600 border-b border-stone-100"
                      dangerouslySetInnerHTML={{ __html: row[1] }}
                    />
                    <td
                      className="px-4 py-3 text-stone-600 border-b border-stone-100"
                      dangerouslySetInnerHTML={{ __html: row[2] }}
                    />
                    <td
                      className="px-4 py-3 text-stone-600 border-b border-stone-100"
                      dangerouslySetInnerHTML={{ __html: row[3] }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Alliant 3</strong> is GSA's flagship enterprise IT vehicle, designed for
            large-scale, complex IT programs — think cloud migrations at cabinet-level agencies,
            enterprise resource planning systems, and AI implementation at scale. It launched
            in March 2026 with OMB preferred vehicle designation. The scope is complementary
            to SEWP VI: Alliant 3 covers complex IT services work, SEWP covers product procurement
            and mid-scale IT services. Many tech contractors are pursuing both.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>OASIS+</strong> is GSA's vehicle for professional services across 13 domains,
            including IT. It has dedicated pools for 8(a), HUBZone, SDVOSB, and WOSB firms —
            making it the highest-value vehicle for certified small businesses who provide IT
            consulting, cybersecurity, data analytics, or digital transformation services.
            Phase II amendments finalized in January 2026. The continuous on-ramp means you
            can still apply.
          </p>

          <Callout icon={AlertTriangle} color="amber" title="CIO-SP3 Sunset: Act Before October 2026">
            <p className="mb-2">
              If your health IT revenue comes through CIO-SP3 or CIO-SP3 Small Business task
              orders, you're running out of time. New orders placed on or after the CIO-SP3
              sunset date (October 29, 2026) cannot extend beyond December 31, 2028.
            </p>
            <p>
              Pursue CIO-SP4 now. If you can't qualify independently, get in position as a
              subcontractor to a CIO-SP4 awardee. The NIH manages billions in health IT
              spending annually. Losing access to that pipeline because you didn't make the
              vehicle transition is an avoidable outcome.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>STARS III and 8(a) STARS III</strong> deserve attention for small IT firms
            specifically. STARS III is a 100% small business GWAC — no large business competition,
            ever. If your company is small (under SBA size standards for IT NAICS codes) and
            provides IT services, STARS III gives you a dedicated pool with meaningful task order
            volume across many agencies.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The right vehicle strategy for your company depends on which agencies you're targeting
            and what specific IT work you perform. See our guide to{" "}
            <Link href="/blog/multiple-award-contracts-guide" className="text-blue-600 hover:underline font-medium">
              multiple award contracts
            </Link>{" "}
            for the full framework on how to choose and pursue the right vehicles for your business.
          </p>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="subcontracting-path"
            number="06"
            title="The Subcontracting Path: Getting Revenue Without a Prime Contract"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            SEWP VI awards are closed. The initial award window has passed. If your company
            doesn't hold a SEWP VI prime contract, you have two options: wait for an on-ramp
            (which could be two to five years away), or generate revenue now by subcontracting
            under a SEWP VI holder.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Subcontracting isn't a consolation prize. It's a deliberate strategy used by hundreds
            of companies every year to generate federal IT revenue, build past performance, and
            position for future prime contract awards. The companies that make it work treat
            subcontracting as a business development activity — not a fallback.
          </p>

          <div className="bg-stone-900 text-white rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-lg mb-5 text-white">
              How to Build a SEWP Subcontracting Position
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Identify SEWP VI holders in your product/service category",
                  detail:
                    "The SEWP awardee list is public. Find holders in your category who have active agency relationships in your target markets — those are your best partnership candidates.",
                },
                {
                  title: "Bring them something they need",
                  detail:
                    "Primes take on subs because the sub fills a gap: a specialized product line, a niche technical capability, a specific agency relationship, or a socioeconomic certification (8(a), HUBZone, SDVOSB, WOSB) that helps the prime's subcontracting plan.",
                },
                {
                  title: "Position around your certifications",
                  detail:
                    "If you hold an SBA set-aside certification, SEWP primes need you for subcontracting goal compliance. Category C's small-business structure means primes competing there want qualified SB subs who can deliver.",
                },
                {
                  title: "Document every subcontract as past performance",
                  detail:
                    "Each subcontract is a past performance citation for future SEWP on-ramp applications and other GWAC pursuits. Get performance reviews in writing. Track dollar values and outcomes. This is the asset you're building.",
                },
                {
                  title: "Negotiate flow-down terms carefully",
                  detail:
                    "SEWP task orders flow down specific FAR clauses to subcontractors. Review the prime's teaming agreement for IP ownership, non-compete terms, and payment terms. Short payment windows (30–45 days) are standard but negotiate if possible.",
                },
                {
                  title: "Build toward prime contract eligibility",
                  detail:
                    "The past performance, revenue, and agency relationships you build subcontracting are exactly what SEWP on-ramp applications require. Treat every subcontract as preparation for your future prime application.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">{title}</div>
                    <div className="text-stone-400 text-xs mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The subcontracting play works especially well for companies with specialized product
            lines or niche technology capabilities. SEWP V prime holders have consistently brought
            in subs for specialized hardware (networking equipment, ruggedized systems, specialized
            AV), cybersecurity tools, and cloud-native software that they don't resell directly.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            See our guide to{" "}
            <Link href="/blog/subcontracting-government-contracts" className="text-blue-600 hover:underline font-medium">
              subcontracting on government contracts
            </Link>{" "}
            for the legal and operational framework, and our guide to{" "}
            <Link href="/blog/government-contract-teaming-agreement" className="text-blue-600 hover:underline font-medium">
              teaming agreements
            </Link>{" "}
            for how to structure the relationship with your prime partner.
          </p>

          <Callout icon={TrendingUp} color="emerald" title="What SEWP Primes Look for in Subcontractors">
            <p className="mb-2">
              Federal agencies have subcontracting goals — targets for what percentage of contract
              value flows to small businesses and certified firms. SEWP prime contractors need subs
              who help them hit those goals.
            </p>
            <p>
              If you hold an 8(a), HUBZone, SDVOSB, or WOSB certification, you are genuinely
              valuable to large prime contractors managing their small business subcontracting plans.
              Lead with your certification in outreach, not your technical capabilities. The
              certification opens the door; your technical credibility closes it.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            CapturePilot's{" "}
            <Link href="/features/matching" className="text-blue-600 hover:underline font-medium">
              opportunity matching
            </Link>{" "}
            surfaces active SEWP task orders and flags which ones specify small business
            requirements — helping you identify the task orders where your subcontracting
            position has the highest value to a prime.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-8 my-10 animate-on-scroll">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl text-emerald-900 mb-2">
                Start Your 30-Day Free Trial
              </h3>
              <p className="text-emerald-800 mb-4 text-sm">
                CapturePilot tracks SEWP VI task orders, Alliant 3 opportunities, and OASIS+
                competitions in your NAICS codes — surfacing the requirements your agency
                customers are buying right now, before they close.
              </p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="winning-task-orders"
            number="07"
            title="Winning Task Orders as a SEWP Holder"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Holding a SEWP VI contract is table stakes. The award gives you the right to compete
            for task orders — it doesn't guarantee a single dollar of revenue. Contractors who
            won SEWP V awards and then sat back waiting for work got very little of it. The ones
            who built agency relationships, responded consistently, and positioned their capabilities
            proactively are the ones who captured disproportionate task order share.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            A small number of contractors capture most of the task order volume on any GWAC.
            On SEWP V, with hundreds of holders in many product categories, the top 10% of
            contract holders by revenue typically captured more than half of total spending.
            Getting on the vehicle puts you in the game. Winning task orders requires active,
            strategic pursuit.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            SEWP task order competitions evaluate on different criteria depending on the
            requirement type:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                icon: Package,
                label: "Commodity Products",
                detail: "Evaluated almost entirely on price and delivery. Win rate correlates directly to your supply chain and ability to quote below market. Margin is thin; volume is the model.",
                color: "bg-blue-50 border-blue-100",
                iconColor: "text-blue-600",
              },
              {
                icon: Cpu,
                label: "Technology Solutions",
                detail: "Evaluated on technical fit, delivery capability, and price. Your product knowledge, integration experience, and vendor partnerships matter. Best value rather than lowest price.",
                color: "bg-indigo-50 border-indigo-100",
                iconColor: "text-indigo-600",
              },
              {
                icon: Globe,
                label: "IT Services",
                detail: "Evaluated on technical approach, past performance, team qualifications, and price. Most like a full proposal. Past performance and staff credentials drive the differentiation.",
                color: "bg-violet-50 border-violet-100",
                iconColor: "text-violet-600",
              },
            ].map(({ icon: Icon, label, detail, color, iconColor }) => (
              <div key={label} className={`rounded-2xl border p-5 ${color}`}>
                <Icon className={`w-6 h-6 mb-3 ${iconColor}`} />
                <div className="font-bold text-stone-800 text-sm mb-2">{label}</div>
                <div className="text-xs text-stone-600 leading-relaxed">{detail}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The most reliable way to win SEWP task orders consistently is the same as for any
            contract vehicle: know your customers before the RFQ drops. Engage at agency industry
            days, respond to sources sought notices, meet with program offices and contracting
            officers, and understand what they're buying before they formalize the requirement.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Read our guide to{" "}
            <Link href="/blog/sources-sought-notice" className="text-blue-600 hover:underline font-medium">
              sources sought notices
            </Link>{" "}
            for how to engage early on IT requirements that are heading toward SEWP task orders,
            and our guide to{" "}
            <Link href="/blog/contracting-officer-relationship" className="text-blue-600 hover:underline font-medium">
              building relationships with contracting officers
            </Link>{" "}
            for the right cadence and approach.
          </p>

          <Callout icon={Lock} color="blue" title="Cybersecurity Is SEWP's Fastest-Growing Segment">
            <p className="mb-2">
              Federal cybersecurity spending has grown every year for the past decade, and SEWP is
              a primary vehicle for cybersecurity product procurement. Zero-trust architecture
              mandates (OMB M-22-09 and subsequent guidance), continuous monitoring requirements,
              and endpoint security upgrades across agencies are all generating active SEWP task orders.
            </p>
            <p>
              If your company sells cybersecurity products, endpoint protection, SIEM tools,
              identity management systems, or vulnerability scanning capabilities, the federal
              cyber budget creates a strong baseline of task order activity through SEWP. Category A
              (products) and Category C (mission-based security services) are both active.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            Use competitive intelligence to track who's winning in your category. USASpending.gov
            shows historical SEWP task order awards — which agencies, which contractors, what
            product categories, and what dollar values. That data tells you where the active
            buying is, who you're competing against, and what pricing ranges are competitive
            in your market.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            CapturePilot's{" "}
            <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
              market intelligence features
            </Link>{" "}
            aggregate this spending data and surface it alongside active opportunities — so you
            can see which agencies are heavy SEWP buyers in your NAICS codes and position your
            outreach accordingly.
          </p>
        </div>

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="federal-it-vehicle-strategy"
            number="08"
            title="Building Your Federal IT Vehicle Strategy"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The federal IT vehicle landscape in 2026 is more complex than it's ever been. SEWP VI
            launched with three categories. Alliant 3 went live. OASIS+ added five new domains.
            CIO-SP3 is sunsetting. STARS III has on-ramp windows. The options are real — but
            pursuing too many at once is a mistake.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Start with your customers. The question isn't "which vehicles exist?" — it's "which
            vehicles do my target agencies actually use for the work I want to do?" Pull
            USASpending.gov data on your top five federal agency targets. See which vehicles
            they use for IT procurement in your NAICS codes. That tells you where the task
            orders actually are.
          </p>

          <Callout icon={Target} color="sky" title="Federal IT Vehicle Decision Framework">
            <ul className="space-y-2">
              {[
                "Pull USASpending.gov data: which vehicles do your target agencies use for IT spending in your NAICS codes?",
                "Check your certifications: 8(a), HUBZone, SDVOSB, and WOSB give you dedicated pools on STARS III, OASIS+, and SEWP VI Category C",
                "Map your offerings: product-heavy firms → SEWP VI Category A; IT services firms → SEWP VI Category B/C, STARS III, OASIS+; complex enterprise IT → Alliant 3",
                "Health IT focus? → CIO-SP4 is the must-pursue vehicle before CIO-SP3 sunsets",
                "Not on SEWP VI yet? → Subcontract now, monitor for on-ramp announcements at sewp.nasa.gov",
                "Pick one or two vehicles to pursue seriously first — spread too thin and you win nothing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-sky-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-4">
            The vehicle combinations that work best vary by business type:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 animate-on-scroll">
            {[
              {
                type: "IT Product Resellers / VARs",
                vehicles: ["SEWP VI Category A (core)", "GSA MAS Schedule 70 (broad access)"],
                note: "Volume model — pricing and supply chain are the differentiators",
              },
              {
                type: "Small IT Services Firms",
                vehicles: ["SEWP VI Category C (SB-only)", "STARS III (100% small business GWAC)", "OASIS+ with certification pool"],
                note: "Set-aside pools drastically reduce competition",
              },
              {
                type: "Cybersecurity Companies",
                vehicles: ["SEWP VI Cat A (products) + Cat C (services)", "OASIS+ (if providing security consulting)"],
                note: "Dual-category SEWP position covers both product and service requirements",
              },
              {
                type: "Enterprise IT Services Firms",
                vehicles: ["Alliant 3 (complex IT)", "SEWP VI Category B (enterprise services)", "OASIS+ (professional services)"],
                note: "Larger, more complex task orders — past performance requirements are higher",
              },
            ].map(({ type, vehicles, note }) => (
              <div key={type} className="bg-stone-50 border border-stone-100 rounded-xl p-5">
                <div className="font-bold text-stone-800 text-sm mb-3">{type}</div>
                <ul className="space-y-1 mb-3">
                  {vehicles.map((v) => (
                    <li key={v} className="flex items-center gap-2 text-xs text-stone-600">
                      <CheckSquare className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-stone-500 italic">{note}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            One vehicle, pursued well, beats five vehicles pursued poorly. The contractors
            generating significant recurring federal IT revenue through SEWP aren't the ones
            on every possible vehicle — they're the ones who built deep agency relationships,
            consistent task order response capacity, and strong past performance within a
            focused vehicle position.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Track your task order pipeline by vehicle. Which opportunities are you seeing?
            What's your submit rate? What's your win rate? If you're on SEWP VI Category A
            but rarely submit quotes and win nothing, that's a signal — either the vehicle
            isn't generating relevant requirements for your offerings, or your pricing or
            response quality needs work.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            CapturePilot's{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline font-medium">
              pipeline management
            </Link>{" "}
            tools let you track SEWP task order pursuits alongside your standalone opportunities —
            one view of everything in flight, what's due, and where your BD effort is going.
            Combined with our{" "}
            <Link href="/features/intelligence" className="text-blue-600 hover:underline font-medium">
              market intelligence features
            </Link>
            , you can see which agencies are buying, what they're buying, and who's winning —
            so your pursuit strategy is based on data, not instinct.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The federal IT market is large, the vehicles are accessible to small businesses,
            and the buying is predictable. SEWP VI's 10-year ordering period means this
            opportunity doesn't disappear anytime soon. The question is whether you're building
            the relationships and vehicle positions to capture your share of it.
          </p>
        </div>

        {/* Conclusion CTA */}
        <div className="bg-gradient-to-r from-stone-900 to-sky-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Cpu className="w-8 h-8 flex-shrink-0 mt-1 text-sky-300" />
            <div>
              <h3 className="font-black text-xl mb-2">
                Get a Strategy Call on Your Federal IT Position
              </h3>
              <p className="text-stone-300 mb-4 text-sm">
                CapturePilot surfaces active SEWP VI task orders, Alliant 3 competitions, and
                OASIS+ opportunities matched to your NAICS codes and certifications. Book a
                strategy call to map the federal IT vehicles that fit your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-lg hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/features/intelligence"
                  className="inline-flex items-center gap-2 bg-sky-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-sky-500 transition-colors text-sm"
                >
                  See market intelligence <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-16 animate-on-scroll">
          <h2 className="text-xl font-bold text-stone-900 mb-6">Keep Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/multiple-award-contracts-guide",
                title: "Multiple Award Contracts: How to Get on MACs and Win Task Orders",
                category: "Contract Vehicles",
              },
              {
                href: "/blog/idiq-contracts-explained",
                title: "IDIQ Contracts Explained: How to Get on a Multi-Year Contract Vehicle",
                category: "Contract Vehicles",
              },
              {
                href: "/blog/it-government-contracts",
                title: "IT Government Contracts: How Tech Companies Win Federal Work",
                category: "Industries",
              },
              {
                href: "/blog/gsa-schedule-guide",
                title: "GSA Schedule Contracts: Is a GSA Schedule Right for Your Business?",
                category: "Contract Vehicles",
              },
            ].map(({ href, title, category }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-stone-50 hover:bg-sky-50 border border-stone-100 hover:border-sky-200 rounded-xl p-5 transition-all hover-lift"
              >
                <div className="text-xs font-semibold text-sky-600 mb-2">{category}</div>
                <div className="text-sm font-semibold text-stone-800 group-hover:text-sky-700 leading-snug">
                  {title}
                </div>
                <div className="flex items-center gap-1 mt-3 text-xs text-sky-500 font-medium">
                  Read article <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
