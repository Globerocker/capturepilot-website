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
  Users,
  DollarSign,
  Shield,
  FileText,
  BarChart2,
  Layers,
  AlertCircle,
  Target,
  Calculator,
  Award,
  CheckSquare,
  Briefcase,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-are-lcats", label: "What Are Labor Categories — and Why They Run Everything" },
  { id: "anatomy-of-an-lcat", label: "The Anatomy of a Labor Category: Title, Level, and Quals" },
  { id: "experience-tiers", label: "Junior, Mid, Senior: What Those Levels Actually Mean" },
  { id: "fully-burdened-rate", label: "Building Your Fully Burdened Rate from the Ground Up" },
  { id: "service-contract-act", label: "The Service Contract Act: When the Government Sets Your Floor" },
  { id: "gsa-schedule-pricing", label: "GSA Schedule Pricing: Real Rate Ranges by Role" },
  { id: "oasis-plus-lcats", label: "OASIS+ and Other Major Vehicles: Their LCAT Rules" },
  { id: "proposal-mistakes", label: "The LCAT Mistakes That Sink Proposals" },
  { id: "writing-personnel-into-proposals", label: "How to Write Personnel Into Proposals That Win" },
  { id: "competitive-rate-structure", label: "Building a Competitive Rate Structure for the Long Term" },
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

export default function FederalLaborCategoriesPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
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
            <span className="text-stone-900 font-medium">Labor Categories Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FileText className="w-4 h-4" /> Proposals
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Labor Categories in Federal Contracts:{" "}
            <span className="gradient-text">
              How to Build a Competitive Rate Structure
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Every professional services contract the government buys is priced through labor
            categories — standardized job classifications that link a role, a set of qualifications,
            and a billing rate. Get your labor categories wrong and you either price yourself out or
            set yourself up for a compliance audit. Here's how to build them correctly from day one.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published October 14, 2026</span>
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
            id="what-are-lcats"
            number="01"
            title="What Are Labor Categories — and Why They Run Everything"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            A labor category — usually written as LCAT — is the building block of every
            professional services government contract. It defines a job role, the minimum
            qualifications a person in that role must have, and the hourly rate the government
            pays for that work. Nothing else in the pricing structure matters until you get
            your LCATs right.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Think of an LCAT as a contract between you and the government about who you can
            bill. You commit to delivering people who meet the stated qualifications. The
            government commits to paying the stated rate. If you bill a person who doesn't
            meet the category's qualifications, you've got a compliance problem — potentially
            a False Claims Act problem.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Labor categories appear across every major service contracting vehicle: GSA
            Multiple Award Schedule, OASIS+, CIO-SP4, SeaPort NxG, and almost every
            agency-specific IDIQ. They also define the cost structure inside task order
            proposals. When an agency asks you to propose on a task order, they're asking you
            to map labor categories to their requirements and price the hours.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The government doesn't buy people. It buys defined outputs from qualified labor.
            LCATs are how it specifies what "qualified" means — and how it controls what it pays.
          </p>

          <Callout icon={Target} color="blue" title="The Core Principle">
            Every person you bill on a government service contract must demonstrably meet the
            qualifications of the labor category you're billing them under. Education, experience,
            certifications — all of it. A mismatch isn't just a performance issue; it's a billing
            accuracy issue with serious legal exposure.
          </Callout>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="anatomy-of-an-lcat"
            number="02"
            title="The Anatomy of a Labor Category: Title, Level, and Quals"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Every LCAT has three core components: a title, a seniority level, and a set of
            minimum qualifications. Government solicitations vary in how detailed they get,
            but these three elements are always present in some form.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Here's what a standard LCAT definition looks like in practice, drawn from typical
            federal professional services contracts:
          </p>

          {/* LCAT anatomy table */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 my-8">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Component</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">What It Specifies</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Title</td>
                  <td className="px-4 py-3 text-stone-600">The job function being contracted</td>
                  <td className="px-4 py-3 text-stone-600">Software Engineer, Senior</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Education</td>
                  <td className="px-4 py-3 text-stone-600">Minimum degree, field of study</td>
                  <td className="px-4 py-3 text-stone-600">BS in Computer Science or related</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Experience</td>
                  <td className="px-4 py-3 text-stone-600">Years of relevant work experience</td>
                  <td className="px-4 py-3 text-stone-600">Minimum 8 years; 6 with MS</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Certifications</td>
                  <td className="px-4 py-3 text-stone-600">Required or preferred credentials</td>
                  <td className="px-4 py-3 text-stone-600">CISSP, PMP, AWS Solutions Architect</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Clearance</td>
                  <td className="px-4 py-3 text-stone-600">Security clearance level if required</td>
                  <td className="px-4 py-3 text-stone-600">Active Secret or TS/SCI with poly</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Duties</td>
                  <td className="px-4 py-3 text-stone-600">Core responsibilities for the role</td>
                  <td className="px-4 py-3 text-stone-600">System architecture, code review, mentoring juniors</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The qualifications are the hard constraint. If a solicitation says a Senior
            Program Manager requires a PMP and 10 years of project management experience,
            you can't staff that role with someone who has 8 years and no certification — even
            if they're excellent at their job.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Many solicitations include substitution language that lets you swap education for
            experience (or vice versa). A common formula: each additional 2 years of relevant
            experience can substitute for a bachelor's degree, or each relevant graduate degree
            reduces the experience requirement by 2 years. When that language exists, use it.
            When it doesn't, don't assume it's available.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            On GSA Multiple Award Schedule, the LCATs are yours to define — within SIN
            guidelines. You propose titles, qualifications, and rates, and GSA negotiates whether
            those rates are fair and reasonable. On structured IDIQs like OASIS+ or CIO-SP4, the
            government provides the LCAT structure and you price to their framework.
          </p>

          <Callout icon={Lightbulb} color="amber" title="Tip: Read the Substitution Clauses First">
            Before you start mapping your workforce to an RFP's labor categories, read the
            substitution language in full. On many vehicles, you can qualify more people than you
            think — or discover that a key person you planned to propose doesn't actually meet the
            written threshold.
          </Callout>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="experience-tiers"
            number="03"
            title="Junior, Mid, Senior: What Those Levels Actually Mean"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Nearly every LCAT structure uses seniority tiers. The names vary — I/II/III,
            Entry/Mid/Senior, Junior/Journeyman/Senior — but the concept is the same. Each
            tier defines a band of experience, education, and responsibility. OASIS+, for
            example, uses Junior, Journeyman, and Senior explicitly.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            These tiers do two things: they let the government buy the right level of expertise
            for each task, and they give you a way to price a workforce pyramid rather than
            always pricing your most expensive senior staff.
          </p>

          {/* Experience tiers table */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 my-8">
            <table className="w-full text-sm">
              <thead className="bg-blue-50 border-b border-stone-200">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Tier</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Typical Experience</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Typical Education</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Role Characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-green-700">Junior / Entry</td>
                  <td className="px-4 py-3 text-stone-600">0–3 years</td>
                  <td className="px-4 py-3 text-stone-600">BS/BA required</td>
                  <td className="px-4 py-3 text-stone-600">Works under supervision; executes defined tasks</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-blue-700">Mid / Journeyman</td>
                  <td className="px-4 py-3 text-stone-600">3–8 years</td>
                  <td className="px-4 py-3 text-stone-600">BS/BA; some MS preferred</td>
                  <td className="px-4 py-3 text-stone-600">Works independently; may lead small tasks</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-violet-700">Senior</td>
                  <td className="px-4 py-3 text-stone-600">8–15+ years</td>
                  <td className="px-4 py-3 text-stone-600">BS required; MS or certs often required</td>
                  <td className="px-4 py-3 text-stone-600">Leads work; guides juniors; owns deliverables</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-orange-700">Principal / Expert</td>
                  <td className="px-4 py-3 text-stone-600">15+ years</td>
                  <td className="px-4 py-3 text-stone-600">Advanced degree or equivalent expertise</td>
                  <td className="px-4 py-3 text-stone-600">Strategic; sets direction; cross-program leadership</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The experience-education tradeoff shows up in every tier. The contract usually
            states minimums — but the actual market for these people is tighter than the
            minimums suggest. A person who barely clears the junior threshold is not going to
            look the same as one who exceeds it by two years and holds a relevant certification.
            Contracting officers know this. Technical evaluators know this. Price your workforce
            accordingly.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            One practical issue that trips contractors up: a person who was hired as a mid-level
            employee inside your company may not qualify as mid-level under the contract's LCAT
            definition. Internal titles mean nothing. The contract's qualifications are what matter.
            Before you staff a task order, run a qualification check against the actual LCAT language.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The other trap is the opposite: pricing a senior person into a junior LCAT to win
            on price. Technically allowable in some circumstances — but if the government later
            discovers your "junior" is billing at senior qualifications without the senior rate,
            you've created a misrepresentation issue and you're leaving money on the table that
            justified the higher rate in the first place.
          </p>
        </div>

        {/* CTA - Check Eligibility */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black mb-2">See Which Contracts Fit Your Rate Structure</h3>
              <p className="text-blue-100 text-sm max-w-md">
                CapturePilot's Quick Checker matches your business profile — including labor categories
                and set-aside status — to live federal opportunities in under 2 minutes.
              </p>
            </div>
            <a
              href={CHECK_URL}
              className="flex-shrink-0 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm"
            >
              Check eligibility free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="fully-burdened-rate"
            number="04"
            title="Building Your Fully Burdened Rate from the Ground Up"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The hourly rate you bill the government is not the hourly rate you pay your employee.
            The difference is your indirect cost structure — fringe, overhead, G&A, and profit —
            stacked on top of direct labor. This stacked number is your fully burdened rate, also
            called the wrap rate when expressed as a multiplier.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Getting the math right matters enormously. The rates are not simply added together.
            Each applies to the accumulated cost beneath it. Here's how a typical cascade works:
          </p>

          {/* Rate calculation steps */}
          <div className="space-y-3 my-8">
            {[
              {
                step: "1",
                label: "Direct Labor",
                formula: "$65.00/hr",
                note: "What you pay the employee per hour",
                color: "bg-stone-50 border-stone-200",
              },
              {
                step: "2",
                label: "Fringe Benefits (30%)",
                formula: "$65.00 × 1.30 = $84.50/hr",
                note: "Healthcare, retirement, payroll taxes, PTO",
                color: "bg-blue-50 border-blue-200",
              },
              {
                step: "3",
                label: "Overhead (35%)",
                formula: "$84.50 × 1.35 = $114.08/hr",
                note: "Facilities, equipment, project management support",
                color: "bg-violet-50 border-violet-200",
              },
              {
                step: "4",
                label: "G&A (12%)",
                formula: "$114.08 × 1.12 = $127.77/hr",
                note: "Business development, executive overhead, finance, HR",
                color: "bg-amber-50 border-amber-200",
              },
              {
                step: "5",
                label: "Profit / Fee (10%)",
                formula: "$127.77 × 1.10 = $140.54/hr",
                note: "Return on investment, risk compensation",
                color: "bg-emerald-50 border-emerald-200",
              },
            ].map((row) => (
              <div
                key={row.step}
                className={`flex items-start gap-4 rounded-xl border p-4 ${row.color}`}
              >
                <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 text-sm font-bold text-stone-600">
                  {row.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-bold text-stone-900 text-sm">{row.label}</span>
                    <code className="text-sm font-mono text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200">
                      {row.formula}
                    </code>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">{row.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            In this example, an employee earning $65/hour fully burdened costs the government
            $140.54/hour — a wrap rate of approximately 2.16x. That's on the higher end of
            competitive. Most winning government service contractors maintain wrap rates between
            1.6x and 2.2x. Below 1.6x and you're likely not covering your actual costs. Above
            2.2x and you're at a persistent pricing disadvantage on price-sensitive awards.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The variables that move your wrap rate most are fringe and overhead. Fringe scales
            with your benefits package — a company offering rich health insurance, strong
            retirement matching, and generous PTO will carry a higher fringe rate than a
            leaner shop. Overhead scales with your facilities and support infrastructure.
            Remote-first companies with minimal office space tend to have lower overhead rates.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            On DCAA-audited contracts — which includes most Cost Plus and Time & Materials work
            above the Simplified Acquisition Threshold — you'll need to disclose your indirect
            rates and support them with an accounting system that tracks costs correctly. If
            you're pursuing this work seriously, the time to get a DCAA-compliant accounting
            system is before you win, not after. See our guide to{" "}
            <Link
              href="/blog/government-contract-accounting-systems"
              className="text-blue-600 hover:underline"
            >
              DCAA-compliant accounting systems
            </Link>{" "}
            for what that requires.
          </p>

          <Callout icon={Calculator} color="violet" title="Wrap Rate Formula">
            <strong>Fully Burdened Rate = Direct Labor × (1 + Fringe) × (1 + Overhead) × (1 + G&A) × (1 + Profit)</strong>
            <br /><br />
            Each rate applies to the subtotal beneath it — they are not simply summed. A 30% fringe,
            35% overhead, 12% G&A, and 10% profit on a $65/hr employee produces a $140.54 billable
            rate, a 2.16x wrap. Running the four rates as a simple add would give you an incorrect
            and dangerously understated result.
          </Callout>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="service-contract-act"
            number="05"
            title="The Service Contract Act: When the Government Sets Your Floor"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            If your contract includes service workers — janitors, security guards, food service
            staff, administrative assistants, IT help desk — the McNamara-O'Hara Service
            Contract Act (SCA) probably applies. The SCA requires you to pay at least the
            prevailing wage for each labor category in each geographic area where work is
            performed.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            "Prevailing wage" is determined by the Department of Labor's Wage and Hour Division.
            For each SCA-covered contract, the agency obtains a Wage Determination (WD) — a
            document listing minimum wages and fringe benefits for dozens of specific occupations
            in that location. That WD gets incorporated into your contract. You must pay workers
            in covered occupations at least those minimums.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The SCA floor matters for your pricing in two ways. First, it sets a hard cost floor
            that you cannot undercut on covered positions — so your competitive pricing floor is
            the government's own wage determination, not your preference. Second, new
            determinations are issued periodically. When your contract exercises an option year,
            a contracting officer can incorporate a revised WD, which may increase your required
            wage floor and squeeze your margin if your pricing assumed stable labor costs.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            On top of SCA, a second federal wage floor exists under Executive Order 13658, which
            still applies to some multiyear service contracts. The hourly floor under that order
            has been adjusted to <strong>$13.65/hour</strong> as of 2026 for non-tipped workers on
            covered contracts. (Executive Order 14026, which had raised the floor to $15.00,
            was rescinded by Executive Order 14236 in March 2025 — so the legacy order's lower
            rate is now the relevant floor for most affected contracts.)
          </p>

          <Callout icon={AlertTriangle} color="amber" title="SCA Compliance Risk">
            Underpaying workers on an SCA-covered contract can trigger back-wage liability,
            debarment, and contract termination. The Department of Labor can investigate and
            audit. Before pricing any service contract, pull the applicable Wage Determination
            from <strong>sam.gov/wage-determinations</strong> and build those floors into your
            labor cost model — they are not optional.
          </Callout>

          <p className="text-stone-700 leading-relaxed mt-4">
            The SCA also affects how you define your LCATs on covered contracts. The government
            uses its own occupational classification system for wage determinations — a Security
            Guard I, for example, is a specific SCA category with its own WD rate. Your proposed
            LCAT titles and duties must correspond correctly to the SCA occupation classification
            or you risk miscategorizing workers and creating a compliance gap.
          </p>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="gsa-schedule-pricing"
            number="06"
            title="GSA Schedule Pricing: Real Rate Ranges by Role"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            On the GSA Multiple Award Schedule, you propose your own labor categories and
            rates. GSA negotiates whether those rates are fair and reasonable by comparing
            them to commercial pricing, other schedule holders, and market data. Once
            approved, those rates become the ceiling for task order pricing — you can always
            propose less, but never more than your approved schedule rates.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The range of schedule rates across the market is wide. Based on publicly available
            2025 GSA Advantage price lists and contractor disclosures, IT professional services
            rates for the most common SIN (54151S, IT Professional Services) run roughly:
          </p>

          {/* Rate ranges table */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 my-8">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Role</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Level</th>
                  <th className="text-left px-4 py-3 font-bold text-stone-700">Typical GSA Rate Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">IT Help Desk / Support</td>
                  <td className="px-4 py-3 text-stone-600">Junior</td>
                  <td className="px-4 py-3 text-stone-600">$55 – $90/hr</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Systems Administrator</td>
                  <td className="px-4 py-3 text-stone-600">Mid</td>
                  <td className="px-4 py-3 text-stone-600">$80 – $130/hr</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Software / DevSecOps Engineer</td>
                  <td className="px-4 py-3 text-stone-600">Mid–Senior</td>
                  <td className="px-4 py-3 text-stone-600">$120 – $200/hr</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Program Manager</td>
                  <td className="px-4 py-3 text-stone-600">Senior</td>
                  <td className="px-4 py-3 text-stone-600">$150 – $275/hr</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Cybersecurity SME</td>
                  <td className="px-4 py-3 text-stone-600">Senior</td>
                  <td className="px-4 py-3 text-stone-600">$185 – $340/hr</td>
                </tr>
                <tr className="hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-stone-900">Data Scientist / AI Engineer</td>
                  <td className="px-4 py-3 text-stone-600">Mid–Senior</td>
                  <td className="px-4 py-3 text-stone-600">$150 – $280/hr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            These ranges reflect what contractors actually approve on their schedules — they
            include the Industrial Funding Fee (IFF) that GSA charges and factor in annual
            escalation across multi-year contract terms. The 0.75% IFF is built into every GSA
            schedule purchase price, so your approved rate is technically all-in from the buyer's
            perspective.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Real task order prices often come in below these approved ceilings. Agencies use
            competitive ordering procedures — putting a requirement out to multiple schedule
            holders and selecting the best value — which creates downward pricing pressure. Your
            approved GSA rate establishes your ceiling; where you actually price within that
            ceiling is your competitive decision on each task order.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Annual escalation clauses matter here. Most GSA schedule contracts allow you to
            escalate your approved rates annually — tied to the Bureau of Labor Statistics
            Employment Cost Index or a negotiated fixed escalation percentage. On a five-year
            contract, the difference between a 2% and a 4% escalation rate compounds into a
            significant margin difference by year five. Negotiate your escalation rate as
            seriously as your base rates.
          </p>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="oasis-plus-lcats"
            number="07"
            title="OASIS+ and Other Major Vehicles: Their LCAT Rules"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Not all contract vehicles let you define your own LCATs. Structured vehicles like
            OASIS+ provide the labor category framework and require you to price within it.
            Understanding how each major vehicle handles LCATs affects both your onboarding
            strategy and your task order pricing.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Here's how the major professional services vehicles handle labor categories:
          </p>

          {/* Vehicle comparison */}
          <div className="space-y-4 my-8">
            {[
              {
                vehicle: "GSA MAS (Multiple Award Schedule)",
                icon: Layers,
                approach: "You define your own LCATs",
                detail:
                  "You propose titles, qualifications, and rates under your SIN. GSA negotiates fair and reasonable pricing. Maximum flexibility — but you're competing against hundreds of other schedule holders who have already established market rate anchors.",
                color: "bg-blue-50 border-blue-200",
                iconColor: "text-blue-600",
              },
              {
                vehicle: "OASIS+",
                icon: Award,
                approach: "Government-defined LCATs mapped to SOC 2018",
                detail:
                  "OASIS+ maps its labor categories to the 2018 Bureau of Labor Statistics Standard Occupational Classification manual. Junior, Journeyman, and Senior tiers are defined by the contract. You price to those tiers during task order proposals, not during onboarding.",
                color: "bg-violet-50 border-violet-200",
                iconColor: "text-violet-600",
              },
              {
                vehicle: "CIO-SP4",
                icon: Shield,
                approach: "NIH-defined IT labor categories",
                detail:
                  "CIO-SP4 uses NIH's own LCAT framework for IT and health IT services. Labor categories are specified in the contract, with defined qualification thresholds. Task order proposals map work requirements to those categories.",
                color: "bg-emerald-50 border-emerald-200",
                iconColor: "text-emerald-600",
              },
              {
                vehicle: "Agency IDIQs",
                icon: Briefcase,
                approach: "Varies by agency and solicitation",
                detail:
                  "Agency-specific IDIQs (DHS EAGLE, Army RS3, DISA ENCORE) each have their own LCAT structures defined in the solicitation. Some allow contractor-proposed categories; many are fixed. Always read Section B and the attachments before pricing.",
                color: "bg-amber-50 border-amber-200",
                iconColor: "text-amber-600",
              },
            ].map((v) => (
              <div key={v.vehicle} className={`rounded-2xl border p-5 ${v.color}`}>
                <div className="flex items-start gap-3">
                  <v.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${v.iconColor}`} />
                  <div>
                    <p className="font-bold text-stone-900 text-sm mb-1">{v.vehicle}</p>
                    <p className="text-xs font-medium text-stone-600 mb-2 italic">{v.approach}</p>
                    <p className="text-sm text-stone-700 leading-relaxed">{v.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-6">
            On OASIS+, the vehicle expanded to 13 service domains, with five additional domains
            phased in through 2026. Labor categories under OASIS+ are intended to provide a
            standardized crosswalk across all domains, which simplifies the government's ability
            to compare task order proposals but requires contractors to know exactly which SOC
            classification their proposed personnel fall into. See our detailed{" "}
            <Link
              href="/blog/oasis-plus-contract-guide"
              className="text-blue-600 hover:underline"
            >
              OASIS+ contract guide
            </Link>{" "}
            for the onboarding requirements.
          </p>

          <Callout icon={CheckCircle2} color="emerald" title="Multi-Vehicle Strategy">
            If you hold both a GSA MAS contract and OASIS+, you're effectively maintaining two
            LCAT structures — one you define, one the government defines. Keep your internal HR
            classifications synchronized with both so you know which employees qualify for which
            LCAT on each vehicle. A person who qualifies as "Senior" on your MAS schedule may
            fall into "Journeyman" on OASIS+ if the SOC qualification thresholds differ.
          </Callout>
        </div>

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="proposal-mistakes"
            number="08"
            title="The LCAT Mistakes That Sink Proposals"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Labor category errors are among the most common reasons technically capable
            contractors lose proposals — or win them and then face post-award compliance
            problems. These are the mistakes that show up repeatedly:
          </p>

          <div className="space-y-4 my-8">
            {[
              {
                mistake: "Proposing personnel who don't meet the qualifications",
                consequence: "Technical disqualification or False Claims Act exposure",
                fix: "Run a formal qualification check for every named person against the exact LCAT language before submission. Don't rely on memory or HR records — pull the resume and compare it line-by-line.",
              },
              {
                mistake: "Misreading experience requirements",
                consequence: "Proposing the wrong tier; person doesn't qualify",
                fix: "Experience requirements often specify 'relevant' experience. A software engineer with 8 years of experience but only 3 years in the specific technology the contract requires may not meet a Senior threshold — even if they nominally have 8 years.",
              },
              {
                mistake: "Ignoring substitution language",
                consequence: "Unnecessarily disqualifying strong personnel",
                fix: "Most RFPs include education-for-experience substitutions. Read them. If a senior employee doesn't have the required degree, they may still qualify with additional years of experience.",
              },
              {
                mistake: "Proposing the same person under multiple LCATs simultaneously",
                consequence: "Government flags as inflated capacity; questions personnel availability",
                fix: "Clearly designate each named key person to a single primary LCAT in your proposal. Non-key personnel can typically be represented as a mix, but key persons require clear, singular assignments.",
              },
              {
                mistake: "Pricing LCATs inconsistently across sections",
                consequence: "Cost volume inconsistencies; proposal is flagged for clarification or rejected",
                fix: "Build a master rate card before you start writing any cost volume section. Every appearance of a given LCAT should reference the same rate. Discrepancies signal a sloppy proposal to evaluators.",
              },
              {
                mistake: "Not escalating rates across the period of performance",
                consequence: "Margin erosion on multi-year contracts; may price below cost in later years",
                fix: "Apply an annual escalation rate — typically 3–4% depending on the labor market and contract area — to every LCAT rate for each option year in your pricing.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden">
                <div className="bg-red-50 border-b border-red-100 px-5 py-3 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="font-bold text-sm text-red-800">{item.mistake}</p>
                </div>
                <div className="px-5 py-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-stone-400 uppercase mt-0.5">Risk</span>
                    <p className="text-sm text-stone-600">{item.consequence}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase mt-0.5">Fix</span>
                    <p className="text-sm text-stone-700">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 9 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="writing-personnel-into-proposals"
            number="09"
            title="How to Write Personnel Into Proposals That Win"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Most technical proposals require you to write up key personnel — specific individuals
            you're committing to put on the contract. How you write those sections directly
            affects whether evaluators score you at the top or in the middle.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The goal of every key personnel write-up is to make it undeniable that this person
            exceeds the LCAT requirements. You're not checking boxes — you're making a case.
            That means leading with the result of their experience, not just the duration.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Here's the structure that works:
          </p>

          {/* Step-by-step */}
          <div className="space-y-4 my-8">
            {[
              {
                step: "01",
                title: "State the LCAT match explicitly",
                detail:
                  "Open by naming the labor category and stating that the person meets or exceeds it. 'Mr. [Name] qualifies as a Senior Program Manager under LCAT 14. He holds a PMP certification, a Master's degree in Systems Engineering, and 14 years of direct program management experience on federal contracts.' Don't make evaluators infer the match.",
              },
              {
                step: "02",
                title: "Lead with their most relevant accomplishment",
                detail:
                  "The first substantive sentence after the qualification statement should be the most relevant thing they've done. Not where they worked. What they delivered. 'He managed a $47M modernization program for DISA from design through production cutover, delivering 4 weeks ahead of schedule and 3% under budget.'",
              },
              {
                step: "03",
                title: "Connect their background to this contract's specific requirements",
                detail:
                  "Evaluators are comparing you against the Section M criteria. Map this person's experience explicitly to the evaluation factors. If Section M weighs 'experience managing multi-site deployments,' say they've managed multi-site deployments — and give specifics.",
              },
              {
                step: "04",
                title: "Address any qualification gaps honestly",
                detail:
                  "If your candidate technically qualifies via a substitution clause, state it clearly. 'Under Section H.4 of the solicitation, Mr. [Name]'s 12 years of direct experience and security clearance substitutes for the required MS degree.' Don't hope evaluators figure it out — spell it out.",
              },
              {
                step: "05",
                title: "Include a commitment statement",
                detail:
                  "Close the write-up with a clear availability commitment. 'Mr. [Name] is available for 100% of the base year and each option year. His letter of commitment is included as Attachment C.' This directly addresses the evaluator's implicit question about whether you can actually deliver this person.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-4 bg-stone-50 rounded-2xl border border-stone-200 p-5"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-black text-white">
                  {s.step}
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-sm mb-1">{s.title}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            On task orders where no specific personnel are required, you're proposing a labor
            mix — a staffing plan that shows how many hours at which LCAT levels you're
            proposing to allocate to the work. The key here is realism. Proposing 90% senior
            staff looks impressive but signals padding. Proposing 80% junior staff looks cheap
            but signals under-resourcing. The right mix matches the actual complexity distribution
            of the stated requirements.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            CapturePilot's{" "}
            <Link href="/features/proposals" className="text-blue-600 hover:underline">
              proposal intelligence tools
            </Link>{" "}
            can help you analyze past award data to see what labor mix winning contractors have
            used on similar task orders — giving you a data anchor instead of a guess.
          </p>
        </div>

        {/* Section 10 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="competitive-rate-structure"
            number="10"
            title="Building a Competitive Rate Structure for the Long Term"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            A labor category structure that wins today may not win in two years. Markets move.
            GSA Advantage gives buyers access to every approved schedule holder's published rates.
            Agency contracting officers benchmark your rates against historical awards. The
            pricing intelligence flowing through the federal market is better than most
            contractors realize.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Building a competitive long-term rate structure requires three disciplines:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {[
              {
                icon: BarChart2,
                title: "Market Benchmarking",
                body:
                  "Regularly check what comparable schedule holders are charging for equivalent roles. GSA Advantage is public. Tools like FPDS and USASpending show what agencies actually paid. Don't set rates in isolation from the market.",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-200",
              },
              {
                icon: DollarSign,
                title: "Rate Discipline",
                body:
                  "Resist the urge to load rates with overhead you're not sure you can sustain. A rate structure built on projected overhead that never materializes creates an unsustainable cost model. Ground your indirect rates in actuals, not aspirations.",
                color: "text-emerald-600",
                bg: "bg-emerald-50 border-emerald-200",
              },
              {
                icon: Target,
                title: "Strategic Positioning",
                body:
                  "Decide which LCATs you need to be price-competitive in versus which ones you can command a premium for. A niche cybersecurity expertise category may justify higher rates than a generic program management category.",
                color: "text-violet-600",
                bg: "bg-violet-50 border-violet-200",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border p-5 hover-lift transition-transform ${card.bg}`}
              >
                <card.icon className={`w-6 h-6 mb-3 ${card.color}`} />
                <h3 className="font-bold text-stone-900 text-sm mb-2">{card.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The contractors who consistently win on rate-sensitive vehicles aren't always the
            cheapest — they're the ones whose rates look defensible. An agency evaluator who
            sees your rates and thinks "that's reasonable for this level of work" is much more
            likely to select you than one who sees rates that look like a puzzling outlier in
            either direction.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Use{" "}
            <Link
              href="/features/intelligence"
              className="text-blue-600 hover:underline"
            >
              market intelligence tools
            </Link>{" "}
            to track what agencies are actually awarding — by vehicle, by SIN, by NAICS code.
            What a competitor proposes is visible through FPDS if you know how to read the data.
            And our{" "}
            <Link href="/features/pipeline" className="text-blue-600 hover:underline">
              pipeline management tools
            </Link>{" "}
            can help you track which upcoming opportunities are likely to be rate-sensitive
            versus quality-weighted, so you can calibrate your pricing strategy per pursuit.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Finally: get ahead of option year repricing. If your wrap rate increases materially
            between the base year and option year 2, you need to know that before you exercise
            the option — not after. Build a simple model that runs your actual indirect rates
            against your proposed rates for each option year and flags the gap. A margin squeeze
            you see coming is manageable. One that blindsides you at option exercise is painful.
          </p>

          <Callout icon={CheckSquare} color="sky" title="Rate Structure Checklist">
            <ul className="space-y-1.5 mt-1">
              {[
                "Wrap rate is between 1.6x–2.2x for most roles",
                "Indirect rates are based on actual financials, not projections",
                "Annual escalation is applied to every LCAT for each option year",
                "SCA wage determinations are incorporated for all covered occupations",
                "GSA schedule rates have been benchmarked against comparable holders",
                "Each LCAT has documented qualification minimums and substitution language",
                "Key personnel resumes have been verified against LCAT thresholds",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-black mb-3">
              Stop guessing at what rates actually win
            </h3>
            <p className="text-stone-300 text-sm mb-6 leading-relaxed">
              CapturePilot pulls live award data from USASpending.gov and SAM.gov so you can see
              what agencies paid on similar contracts — before you price your next bid. See which
              vehicles, which LCATs, and which rate structures are winning right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={SIGNUP_URL}
                className="bg-white text-stone-900 font-bold px-6 py-3 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="border border-stone-600 text-stone-200 font-bold px-6 py-3 rounded-xl hover:bg-stone-700 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>

        {/* Related reading */}
        <div className="animate-on-scroll">
          <h2 className="text-xl font-black text-stone-900 mb-4">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/cost-volume-government-proposal",
                title: "How to Write the Cost Volume of a Government Proposal",
                category: "Proposals",
              },
              {
                href: "/blog/government-contract-pricing-strategies",
                title: "Government Contract Pricing: Strategies to Win Without Losing Money",
                category: "Proposals",
              },
              {
                href: "/blog/dcaa-audit-small-business",
                title: "DCAA Audit Preparation for Small Business Contractors",
                category: "Strategy",
              },
              {
                href: "/blog/oasis-plus-contract-guide",
                title: "OASIS+: How Small Businesses Get On GSA's Premier Services MAC",
                category: "Vehicles",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex items-start gap-3 bg-stone-50 hover:bg-blue-50 border border-stone-200 hover:border-blue-200 rounded-2xl p-4 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-500 mt-0.5 flex-shrink-0 transition-colors" />
                <div>
                  <span className="text-xs font-medium text-stone-400 block mb-1">
                    {post.category}
                  </span>
                  <span className="text-sm font-semibold text-stone-700 group-hover:text-blue-700 leading-snug transition-colors">
                    {post.title}
                  </span>
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
