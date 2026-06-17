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
  FileText,
  Clock,
  Users,
  BarChart3,
  Shield,
  Info,
  Zap,
  TrendingUp,
  FlaskConical,
  Building2,
  Award,
  Globe,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-is-sbir", label: "What SBIR and STTR Actually Are" },
  { id: "sbir-vs-sttr", label: "SBIR vs. STTR: Which Program Is Right for You" },
  { id: "three-phases", label: "Phase I, II, and III Explained" },
  { id: "eligibility", label: "Who Qualifies: Size, Ownership, and PI Rules" },
  { id: "finding-topics", label: "How to Find the Right Topics Before Anyone Else" },
  { id: "winning-proposals", label: "What Winning SBIR Proposals Actually Look Like" },
  { id: "phase-iii-prize", label: "Phase III: The Sole-Source Prize No One Talks About" },
  { id: "reauthorization-2026", label: "The 2026 Reauthorization: What Changed" },
  { id: "common-mistakes", label: "The Mistakes That Kill First-Time Applications" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "rose" | "violet";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    rose: "bg-rose-50 border-rose-200 text-rose-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    rose: "text-rose-600",
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

export default function SbirSttrGrantsGuidePage() {
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
            <span className="text-stone-900 font-medium">SBIR and STTR Grants Guide</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <FlaskConical className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            SBIR and STTR Grants:{" "}
            <span className="gradient-text">
              How Small Businesses Win R&amp;D Funding from DoD
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government awards roughly{" "}
            <strong className="text-stone-700">$4 billion per year</strong> through the SBIR and
            STTR programs — and the Department of Defense alone accounts for about{" "}
            <strong className="text-stone-700">$1 billion of that</strong>. Unlike traditional
            government contracts, SBIR grants are specifically reserved for small businesses doing
            innovation work. No large prime can take the award. Here&apos;s how the program works
            and how to actually win.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 17, 2026</span>
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
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="text-xs font-bold text-stone-400 mt-1 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-blue-700 hover:text-blue-900 hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">

          {/* Section 1 */}
          <SectionHeading
            id="what-is-sbir"
            number="01"
            title="What SBIR and STTR Actually Are"
          />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Small Business Innovation Research (SBIR) program was created in 1982 with a
              specific mandate: require federal agencies to funnel a slice of their R&amp;D budgets
              to small businesses. Every federal agency with an extramural R&amp;D budget exceeding
              $100 million must set aside <strong>3.2% of that budget for SBIR awards</strong>. Six
              of those agencies also participate in the STTR program, which adds a university
              partnership requirement and contributes an additional <strong>0.45% set-aside</strong>.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              Eleven agencies currently participate in SBIR: the Departments of Agriculture,
              Commerce, Defense, Education, Energy, Health and Human Services, Homeland Security,
              and Transportation; plus the EPA, NASA, and the National Science Foundation. Together
              they fund an estimated{" "}
              <strong className="text-stone-800">$4 billion in annual awards</strong>. The programs
              have generated more than 178,000 awards totaling $54.6 billion since inception through
              FY2019 — the last year with fully published SBA data.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              These aren&apos;t traditional government contracts. SBIR awards fund research and
              development at specific phases, with increasingly larger awards as the technology
              matures. The underlying goal is to develop technology that the government eventually
              buys — or that the awardee can commercialize commercially. Getting SBIR funding is
              proof of concept in both senses: it validates your technology and establishes you as a
              government contractor at the same time.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              For small businesses trying to break into federal work,{" "}
              <Link
                href="/blog/government-contracting-for-startups"
                className="text-blue-700 hover:underline"
              >
                SBIR is often the best entry point
              </Link>{" "}
              because the awards are specifically closed to large primes. A $500M defense contractor
              cannot compete for a Phase I SBIR award. That exclusivity matters.
            </p>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 animate-on-scroll">
            {[
              { label: "Annual SBIR/STTR Funding", value: "$4B+", sub: "across 11 agencies" },
              { label: "DoD SBIR Alone", value: "~$1B", sub: "per year" },
              { label: "Phase I Award Cap", value: "$323K", sub: "without SBA waiver" },
              { label: "Phase II Award Cap", value: "$2.15M", sub: "without SBA waiver" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-stone-200 p-5 text-center hover-lift"
              >
                <div className="text-2xl font-black text-blue-700 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-stone-700 mb-0.5">{stat.label}</div>
                <div className="text-xs text-stone-400">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <SectionHeading id="sbir-vs-sttr" number="02" title="SBIR vs. STTR: Which Program Is Right for You" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Most people treat SBIR and STTR as interchangeable. They&apos;re not. The core
              distinction: STTR <em>requires</em> a formal partnership with a U.S. non-profit
              research institution — typically a university or a Federally Funded Research and
              Development Center (FFRDC). SBIR doesn&apos;t.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              That single difference cascades into everything else. With SBIR, your small business
              must perform at least <strong>66.7% of the Phase I work</strong> and at least{" "}
              <strong>50% of Phase II work</strong> in-house. With STTR, the small business performs
              at least <strong>40%</strong> of the work, and the partnering research institution
              performs at least <strong>30%</strong>. The remaining 30% can go to either side or to
              additional subcontractors.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              Another meaningful difference: under STTR, the Principal Investigator does{" "}
              <em>not</em> need to be primarily employed by your small business. This is a big deal
              if the key technical expert is a university professor. Under SBIR, the PI must be{" "}
              <strong>employed by your small business at least 51% of the time</strong>.
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left p-3 rounded-tl-xl font-semibold">Factor</th>
                  <th className="text-left p-3 font-semibold">SBIR</th>
                  <th className="text-left p-3 rounded-tr-xl font-semibold">STTR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Research institution required", "No", "Yes (nonprofit or FFRDC)"],
                  ["Small biz work share (Phase I)", "≥ 66.7%", "≥ 40%"],
                  ["Institution work share", "—", "≥ 30%"],
                  ["PI must work for small biz", "Yes (≥ 51% time)", "No"],
                  ["Agencies participating", "11", "6"],
                  ["Annual set-aside rate", "3.2% of R&D budget", "0.45% of R&D budget"],
                  ["Best for", "In-house R&D capacity", "University-derived tech"],
                ].map(([factor, sbir, sttr], i) => (
                  <tr
                    key={factor}
                    className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    <td className="p-3 font-medium text-stone-800 border-b border-stone-100">
                      {factor}
                    </td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{sbir}</td>
                    <td className="p-3 text-stone-600 border-b border-stone-100">{sttr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The practical answer: if your technology came out of a university lab and your key
              expert is still there, pursue STTR. If your team is fully in-house, SBIR is simpler
              and covers far more agencies. Most DoD-focused small businesses start with SBIR.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="bg-gradient-to-br from-violet-600 to-blue-700 rounded-2xl p-8 my-12 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 rounded-xl p-3 shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-xl mb-2">
                  Not sure which path fits your business?
                </h3>
                <p className="text-violet-100 text-sm mb-4">
                  CapturePilot&apos;s Quick Checker scores your eligibility for SBIR, set-asides,
                  and other federal programs in under two minutes — free.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-violet-50 transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <SectionHeading id="three-phases" number="03" title="Phase I, II, and III Explained" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBIR/STTR structure is a three-phase ladder. Each rung is bigger, requires more
              proof, and is harder to climb. Most companies that enter Phase I never make it to
              Phase III — which is exactly why Phase III is so valuable for those who do.
            </p>
          </div>

          {/* Phase cards */}
          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                phase: "Phase I",
                subtitle: "Feasibility",
                color: "border-l-sky-500",
                bg: "bg-sky-50",
                duration: "6–12 months",
                cap: "Up to $323,090 (without SBA waiver)",
                goal: "Prove the concept is technically feasible. Phase I is essentially a paid proof-of-concept. You're not expected to build a finished product — you're expected to answer: can this be done? The deliverable is typically a feasibility report and preliminary data.",
                tip: "Agencies set their own Phase I award sizes within the cap. NSF typically awards up to $275,000. Some DoD components award the full $323,090.",
              },
              {
                phase: "Phase II",
                subtitle: "Full Development",
                color: "border-l-blue-600",
                bg: "bg-blue-50",
                duration: "24 months (typical)",
                cap: "Up to $2,153,927 (without SBA waiver)",
                goal: "Build a working prototype and demonstrate real-world viability. Only Phase I awardees can apply for Phase II. The proposal competition at Phase II is significant — not every Phase I winner gets a Phase II. DoD components typically fund 40–60% of Phase I winners in Phase II.",
                tip: "Amounts above the cap require an SBA waiver. Agencies can and do grant these for high-priority technology areas. NIH, for example, commonly funds Phase II at $1M per year for up to three years.",
              },
              {
                phase: "Phase III",
                subtitle: "Commercialization",
                color: "border-l-violet-600",
                bg: "bg-violet-50",
                duration: "No fixed limit",
                cap: "No cap — any dollar amount, any contract type",
                goal: "Take your technology to market. Phase III gets no SBIR/STTR program funding — the money comes from private investment, regular government procurement, or other non-SBIR sources. But here's the catch most people miss: the government can award Phase III contracts on a sole-source basis, with no competition required, forever. That sole-source authority never expires.",
                tip: "Phase III is where the real money is. A Phase I worth $300K can lead to a Phase III contract worth tens of millions if the technology matures.",
              },
            ].map((item) => (
              <div
                key={item.phase}
                className={`rounded-2xl border-l-4 ${item.color} ${item.bg} p-6 border border-stone-200`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-stone-500 block">
                      {item.phase}
                    </span>
                    <h3 className="text-xl font-black text-stone-900">{item.subtitle}</h3>
                  </div>
                  <div className="text-right text-xs text-stone-500">
                    <div className="font-semibold text-stone-700">{item.cap}</div>
                    <div>{item.duration}</div>
                  </div>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed mb-3">{item.goal}</p>
                <div className="flex items-start gap-2 bg-white/60 rounded-xl p-3">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-stone-600">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <SectionHeading id="eligibility" number="04" title="Who Qualifies: Size, Ownership, and PI Rules" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              SBIR eligibility is stricter than standard small business size standards. You
              can&apos;t just look up your NAICS code size threshold — the SBIR program has its own
              rules, and they apply on top of any other certifications you hold.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                icon: Users,
                title: "500-Employee Size Limit",
                body: "Your business — including all affiliates — must have fewer than 500 employees. This is the SBIR-specific standard, separate from SBA's table of small business size standards. If you have affiliates or subsidiaries, their headcounts count toward your total.",
                color: "blue",
              },
              {
                icon: Globe,
                title: "U.S. Ownership",
                body: "More than 50% of the company must be directly owned and controlled by U.S. citizens or permanent residents — or by other eligible small businesses, Indian tribes, ANCs, or NHOs. Venture-backed companies: check your cap table carefully. Foreign VC ownership can disqualify you.",
                color: "emerald",
              },
              {
                icon: Building2,
                title: "U.S. Location and Operations",
                body: "You must have a U.S. place of business and operate primarily within the United States. The R&D work performed under the award must be done in the U.S. Offshore work is tightly restricted.",
                color: "sky",
              },
              {
                icon: Award,
                title: "Principal Investigator Rules",
                body: "For SBIR: the PI must be employed by your company at least 51% of the time. For STTR: the PI can be employed by the partnering research institution — no company-employment requirement applies. If your PI is a university professor, STTR is the cleaner path.",
                color: "violet",
              },
            ].map((item) => {
              const iconColorMap: Record<string, string> = {
                blue: "text-blue-600 bg-blue-50",
                emerald: "text-emerald-600 bg-emerald-50",
                sky: "text-sky-600 bg-sky-50",
                violet: "text-violet-600 bg-violet-50",
              };
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200 p-6 bg-white hover-lift"
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${iconColorMap[item.color]}`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>

          <Callout icon={AlertTriangle} color="amber" title="2026 Reauthorization: Foreign Risk Screening Now Mandatory">
            The April 2026 reauthorization (S. 3971) added mandatory foreign risk screening on{" "}
            <em>every</em> SBIR and STTR submission — regardless of size or topic area. Every
            application is now reviewed for foreign connections: investors, employees, subcontractors,
            and PI affiliations. For STTR, this extends to the partnering research institution and
            its individual researchers. If your company has any foreign connections, get legal
            counsel before submitting.
          </Callout>

          {/* Section 5 */}
          <SectionHeading id="finding-topics" number="05" title="How to Find the Right Topics Before Anyone Else" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              SBIR is not a blank-check grant program. Agencies publish specific{" "}
              <strong>topics</strong> — technical problems they need solved — and your proposal must
              directly address one of those topics. Submitting a proposal for work the agency
              didn&apos;t ask for is an automatic rejection.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              The DoD runs the largest program. The DoD-wide solicitation (SBIR 26.1) pre-released
              its first post-reauthorization topics in mid-March to early April 2026 on the Defense
              SBIR/STTR Innovation Portal (DSIP) at defensesolutions.gov. The proposal submission
              window opened approximately 30–45 days later. That pre-release window — when topics
              are viewable but not yet accepting proposals — is when you do your best work.
            </p>
          </div>

          {/* Step-by-step process */}
          <div className="my-10 animate-on-scroll">
            <h3 className="text-lg font-bold text-stone-900 mb-6">
              The Pre-Submission Timeline That Separates Winners from First-Timers
            </h3>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-stone-200" />
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Pre-Release: Read and Filter Topics",
                    detail:
                      "When topics drop on DSIP (or sbir.gov for civilian agencies), read every topic summary in your technology area. Topics have a Program Manager and a Topic Author — these are the people who wrote the requirement. Note their names.",
                    time: "~2 weeks before open",
                  },
                  {
                    step: "2",
                    title: "Contact Topic Authors During the Q&A Window",
                    detail:
                      "Every solicitation includes a Q&A window when you can contact topic authors directly. Use it. Ask clarifying questions about the technical approach. What they respond with on the record helps you write a more targeted proposal — and it signals to reviewers that you engaged seriously.",
                    time: "Q&A window (1–3 weeks before close)",
                  },
                  {
                    step: "3",
                    title: "Write for the Evaluation Criteria, Not the Technology",
                    detail:
                      "DoD Phase I proposals are evaluated on technical merit, the team's qualifications, and commercialization potential. Most first-timers spend 80% of their word count on the technology and ignore commercialization. Reviewers notice. Your commercialization plan needs real customers, real data, and a credible path to Phase III.",
                    time: "Proposal drafting period",
                  },
                  {
                    step: "4",
                    title: "Prepare Budget and Cost Narrative Together",
                    detail:
                      "SBIR budgets are scrutinized. Labor rates must be consistent with your accounting records. Indirect rates must be either DCAA-approved or thoroughly explained. An inconsistent cost narrative is a red flag that kills otherwise strong proposals.",
                    time: "Parallel with proposal writing",
                  },
                  {
                    step: "5",
                    title: "Submit and Start Planning Phase II Before Awards Are Announced",
                    detail:
                      "Phase I awards typically take 6–9 months to announce. Use that time to build your Phase II commercialization argument, identify potential Phase III customers inside the relevant program office, and track the incumbent technology landscape.",
                    time: "Post-submission",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 pl-14 relative">
                    <div className="absolute left-0 w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 z-10">
                      {item.step}
                    </div>
                    <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-stone-900">{item.title}</h4>
                        <span className="text-xs text-stone-400 shrink-0 ml-2">{item.time}</span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              For civilian agency programs — NSF, NIH, DOE — the process varies. NSF America&apos;s
              Seed Fund (NSF SBIR) runs rolling reviews and awards up to $275,000 for Phase I.
              NIH SBIR uses a peer review system similar to regular NIH grants, with funding success
              rates around 15%. DoD components run topic-specific solicitations and have success
              rates that vary by topic — some DoD topics with 15 applicants result in 4 awards, a
              27% hit rate.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              CapturePilot&apos;s{" "}
              <Link href="/features/matching" className="text-blue-700 hover:underline">
                opportunity matching engine
              </Link>{" "}
              tracks SBIR solicitations and pre-release notices across all 11 participating agencies,
              so you see new topics as soon as they publish — before the proposal window opens.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading id="winning-proposals" number="06" title="What Winning SBIR Proposals Actually Look Like" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              There&apos;s no universal winning formula, but there are recurring patterns among
              funded proposals. Having reviewed thousands of SBIR submissions across DoD
              components, experienced evaluators consistently cite the same differentiators.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                label: "Specific, Measurable Technical Objectives",
                body: "Reviewers flag vague objectives immediately. 'Improve detection accuracy' is vague. 'Achieve 95% true positive rate at 0.1% false positive rate on the provided test dataset within 6 months' is specific. Specificity signals that you understand the problem deeply enough to know what success looks like.",
                good: true,
              },
              {
                label: "Preliminary Data That's Actually Preliminary",
                body: "The best Phase I proposals include preliminary data that shows the approach works at a small scale — but not so much data that the agency wonders why they need to fund Phase I. The Goldilocks zone: enough proof to be credible, not so much that the research question feels solved.",
                good: true,
              },
              {
                label: "A Commercialization Plan With Real Names",
                body: "Letters of intent from potential Phase III customers are worth more than any paragraph of market analysis. 'We spoke with the PM at PEO Soldier, who indicated interest in this capability for the PEO-X program' is concrete. Generic market size slides are not.",
                good: true,
              },
              {
                label: "A Team That Covers Technical and Business Gaps",
                body: "DoD reviewers want to see that someone on your team has done this before — either won SBIR awards, transitioned technology to a program office, or has relevant clearances. If your team is pure academics, add a business advisor with federal contracting experience.",
                good: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-stone-200 bg-white p-6 hover-lift"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <h4 className="font-bold text-stone-900 text-sm">{item.label}</h4>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <Callout icon={Info} color="sky" title="On Budget Rates and Accounting">
            Phase I proposals require a detailed budget. If your company doesn&apos;t have a
            DCAA-audited accounting system, include a detailed explanation of how you established
            your labor rates, indirect cost rates, and fringe rates. Unexplained rates — or rates
            inconsistent with your company&apos;s actual payroll — are a leading cause of Phase I
            proposal rejection at the cost/price evaluation step. If this sounds intimidating, our{" "}
            <Link href="/blog/dcaa-audit-small-business" className="text-sky-700 hover:underline">
              DCAA audit preparation guide
            </Link>{" "}
            covers the accounting requirements in detail.
          </Callout>

          {/* Section 7 */}
          <SectionHeading id="phase-iii-prize" number="07" title="Phase III: The Sole-Source Prize No One Talks About" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              Phase III is where the SBIR program gets genuinely powerful — and where most small
              business guides stop paying attention.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              Under the Small Business Act and the SBIR statute, government agencies can award
              Phase III contracts to SBIR/STTR companies on a <strong>sole-source basis</strong>,
              without any competition requirement, as long as the work relates to technology
              developed under a prior SBIR or STTR award. The contracting officer does not need to
              write a sole-source justification. There is no dollar cap on Phase III awards. Any
              contract type is allowed. And the sole-source authority never expires.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              In practice: a company that wins a Phase I and Phase II for an AI-based sensor
              processing system can later receive a $20M production contract for that system through
              a Phase III sole-source award — no competition. The SBIR win at Phase I essentially
              earned a permanent sole-source track for that technology.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              The 2026 reauthorization specifically addressed a chronic problem: many contracting
              officers don&apos;t know this authority exists. The new law requires SBA to develop
              training materials for contracting officers on Phase III authority. For companies that
              have already won Phase I or Phase II awards, the strategic move is to educate the
              relevant program office about Phase III sole-source authority before the next
              procurement action.
            </p>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="Phase III Strategy for SBIR Awardees">
            Don&apos;t wait for the agency to come to you. Once you have a Phase II award, start
            building relationships with the program managers in the program offices that would use
            your technology. Learn their budget cycles. Understand what Program Elements (PEs) and
            Budget Activities (BAs) fund their programs. Position your company for Phase III before
            Phase II ends. The best time to plant that seed is during Phase I.
          </Callout>

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              For deeper context on how to build government relationships that lead to follow-on
              work,{" "}
              <Link
                href="/blog/contracting-officer-relationship"
                className="text-blue-700 hover:underline"
              >
                our guide on building contracting officer relationships
              </Link>{" "}
              covers the approach in detail. The principles apply equally to program managers in the
              SBIR-to-Phase-III pipeline.
            </p>
          </div>

          {/* CTA 2 */}
          <div className="bg-stone-900 rounded-2xl p-8 my-12 text-white animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 rounded-xl p-3 shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-xl mb-2">
                  Track your SBIR pipeline like a contractor, not a researcher
                </h3>
                <p className="text-stone-400 text-sm mb-4">
                  CapturePilot&apos;s{" "}
                  <Link
                    href="/features/intelligence"
                    className="text-blue-400 hover:underline"
                  >
                    intelligence tools
                  </Link>{" "}
                  track SBIR topic pre-releases, Q&A windows, and solicitation deadlines across
                  DoD, NSF, NIH, DOE, and every other participating agency. See what&apos;s coming
                  before your competitors.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-500 transition-colors"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading id="reauthorization-2026" number="08" title="The 2026 Reauthorization: What Changed" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The SBIR/STTR programs lapsed on September 30, 2025 when program authority expired
              under statute. A six-month gap followed — agencies couldn&apos;t issue new awards,
              solicitations were delayed, and many pending Phase II awards were put on hold. On
              April 13, 2026, the{" "}
              <strong>Small Business Innovation and Economic Security Act (S. 3971)</strong> was
              signed into law, extending the programs through Fiscal Year 2031.
            </p>

            <p className="text-stone-600 leading-relaxed mb-4">
              The reauthorization wasn&apos;t just an extension. Several substantive changes came
              with it:
            </p>
          </div>

          <div className="space-y-3 my-8 animate-on-scroll">
            {[
              {
                title: "Mandatory Foreign Risk Screening on Every Submission",
                detail:
                  "All applications — regardless of size, agency, or topic — are now subject to foreign risk review. This covers investors, employees, subcontractors, PI affiliations, and research institution ties (for STTR). Companies with foreign connections should consult legal counsel before submitting.",
                icon: Shield,
                color: "rose" as const,
              },
              {
                title: "$30M Strategic Breakthrough Award Category",
                detail:
                  "A new award category for technology with exceptional strategic importance was created. Awards under this category can reach $30 million — an order of magnitude above the standard Phase II cap. Specific eligibility criteria and agency participation rules are still being finalized as of mid-2026.",
                icon: Award,
                color: "violet" as const,
              },
              {
                title: "Updated Award Caps (Inflation-Adjusted)",
                detail:
                  "As of April 2026, Phase I awards are capped at $323,090 and Phase II at $2,153,927 without SBA approval. These figures are adjusted periodically for inflation. Awards above these levels require SBA waiver — and waivers for high-priority technologies are routinely granted.",
                icon: DollarSign,
                color: "emerald" as const,
              },
              {
                title: "Phase III Training for Contracting Officers",
                detail:
                  "SBA was directed to create training materials specifically covering Phase III sole-source authority. This directly addresses one of the most persistent barriers to SBIR commercialization: contracting officers who didn't know they could use sole-source for Phase III work.",
                icon: Users,
                color: "sky" as const,
              },
              {
                title: "Extension Through FY2031",
                detail:
                  "The five-year extension gives companies a long enough planning horizon to build SBIR into their revenue strategy — not just pursue it as a one-off grant opportunity. For companies serious about federal R&D, the window is now stable.",
                icon: Clock,
                color: "blue" as const,
              },
            ].map((item) => {
              const colorMap: Record<string, string> = {
                rose: "bg-rose-50 border-rose-200 text-rose-700",
                violet: "bg-violet-50 border-violet-200 text-violet-700",
                emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
                sky: "bg-sky-50 border-sky-200 text-sky-700",
                blue: "bg-blue-50 border-blue-200 text-blue-700",
              };
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl border border-stone-200 bg-white hover-lift animate-on-scroll"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${colorMap[item.color]}`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 9 */}
          <SectionHeading id="common-mistakes" number="09" title="The Mistakes That Kill First-Time Applications" />

          <div className="prose prose-stone max-w-none animate-on-scroll">
            <p className="text-stone-600 leading-relaxed mb-4">
              The difference between a funded proposal and an unfunded one often has less to do with
              the technology and more to do with avoidable execution mistakes. These are the most
              common ones.
            </p>
          </div>

          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                mistake: "Choosing a topic because the technology is interesting, not because it's a genuine fit",
                fix: "Read the topic abstract carefully. If it says 'detect improvised explosive devices at standoff distances up to 100m' and your technology works at 5m, it&apos;s not the right topic. A misaligned proposal doesn&apos;t score well regardless of technical quality.",
              },
              {
                mistake: "Skipping the topic author Q&A",
                fix: "This is free intelligence. Topic authors answer questions on the record. Their responses tell you what they actually care about, which may differ from what the abstract implies. Companies that engage during Q&A write sharper proposals.",
              },
              {
                mistake: "Treating the commercialization section as an afterthought",
                fix: "For DoD Phase I, commercialization potential is an explicit evaluation criterion with equal weight to technical merit. A generic market analysis paragraph won&apos;t cut it. Name specific program offices, acquisition programs, and potential customers.",
              },
              {
                mistake: "Using 'we will' instead of 'we have'",
                fix: "Proposals that describe what the team &apos;will do&apos; without any evidence they can do it score below proposals that show preliminary results. Even a small internal study, a published paper, or a relevant prior project builds credibility.",
              },
              {
                mistake: "Ignoring the page limits and formatting requirements",
                fix: "Proposals that exceed page limits are sometimes rejected without review. Formatting requirements in DoD SBIR solicitations are explicit. Read the instructions section before you write, not after.",
              },
              {
                mistake: "Submitting without PI employment verification in order",
                fix: "If the agency selects your proposal for award, they will verify that the PI is actually employed by your small business at the required percentage. If that verification fails, the award can be rescinded. This is especially common with academic PIs who have side appointments.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stone-200 bg-white p-6 hover-lift"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <p className="font-bold text-stone-900 text-sm">{item.mistake}</p>
                </div>
                <div className="flex items-start gap-3 pl-8">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p
                    className="text-sm text-stone-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.fix }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Lightbulb} color="blue" title="Where to Start If You Have Never Applied Before">
            If this is your first SBIR cycle, pick one agency and one solicitation and commit to it.
            Don&apos;t try to submit to three different agencies simultaneously. A single well-written
            proposal for a well-matched topic is worth far more than three rushed ones. For DoD,
            start with the DoD-wide solicitation on DSIP. For non-defense work,{" "}
            <a
              href="https://www.sbir.gov/topics"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              sbir.gov/topics
            </a>{" "}
            lists open solicitations across all agencies in one place.
          </Callout>

          {/* Internal links section */}
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 my-12 animate-on-scroll">
            <h3 className="font-black text-stone-900 text-lg mb-2">Related Reading</h3>
            <p className="text-sm text-stone-500 mb-6">
              Build on what you&apos;ve learned with these related guides.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/blog/dod-contracts-small-business",
                  label: "Department of Defense Contracts for Small Business: Where to Start",
                },
                {
                  href: "/blog/government-contracting-for-startups",
                  label: "Government Contracting for Startups: Is Federal Revenue Right for You?",
                },
                {
                  href: "/blog/capture-management-process",
                  label: "The Capture Management Process: How Winning Contractors Find and Win Deals",
                },
                {
                  href: "/blog/dcaa-audit-small-business",
                  label: "DCAA Audit Preparation: What Small Business Contractors Must Know",
                },
                {
                  href: "/blog/federal-spending-trends-2026",
                  label: "Federal Spending Trends 2026: Where the Government Is Investing",
                },
                {
                  href: "/blog/pwin-probability-of-win",
                  label: "Probability of Win (PWin): How to Score Your Chances Before You Bid",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 hover:underline transition-colors"
                >
                  <ChevronRight className="w-4 h-4 shrink-0 text-blue-400" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-700 p-10 text-white text-center animate-on-scroll">
            <FlaskConical className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-black mb-3">
              Ready to build your SBIR pipeline?
            </h2>
            <p className="text-blue-100 text-sm max-w-md mx-auto mb-8">
              CapturePilot tracks SBIR and STTR solicitations, pre-release windows, Q&amp;A
              deadlines, and award history across all 11 agencies. Get matched to topics before
              competitors see them — and stay on top of every deadline automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors"
              >
                Start your 30-day free trial <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                Book a strategy call
              </Link>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
