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
  FileText,
  Target,
  Clock,
  TrendingUp,
  XCircle,
  Shield,
  BarChart3,
  Users,
  Zap,
  Building2,
  Calendar,
  MessageSquare,
  Search,
  Phone,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "who-they-are", label: "Who Contracting Officers Actually Are" },
  { id: "pre-award-window", label: "The Pre-Award Window That Actually Matters" },
  { id: "small-business-office", label: "Your First Call: The Agency Small Business Office" },
  { id: "industry-days", label: "Industry Days, Matchmaking, and Vendor Outreach" },
  { id: "procurement-integrity", label: "Procurement Integrity Rules You Must Know" },
  { id: "research-agency", label: "How to Research an Agency Before You Reach Out" },
  { id: "capability-briefings", label: "Capability Briefings: What to Say" },
  { id: "program-office", label: "The Program Office: The Relationship That Shapes Requirements" },
  { id: "engagement-calendar", label: "Building a Multi-Agency Engagement Calendar" },
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

export default function ContractingOfficerRelationshipPage() {
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
            <span className="text-stone-900 font-medium">Contracting Officer Relationships</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            How to Build Relationships With{" "}
            <span className="gradient-text">
              Government Contracting Officers
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most vendors try to befriend contracting officers the same way they'd court a private-sector
            buyer — lunch, golf, holiday gifts. That approach doesn't just fail in federal contracting;
            it can get you debarred. The relationships that actually win contracts work differently,
            and they start much earlier than you think.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 19, 2026</span>
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
                  <span className="text-xs font-bold text-blue-500 w-5 shrink-0">
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
          <div className="animate-on-scroll">
            <SectionHeading id="who-they-are" number="01" title="Who Contracting Officers Actually Are (and What They Can't Do)" />

            <p className="text-stone-700 leading-relaxed">
              A contracting officer is a federal official with a warrant — a legal authorization to
              obligate government funds. That warrant is the key fact. No one else in the agency can
              legally sign a contract. Not the program manager, not the director, not the agency head.
              The CO holds the pen, and that authority comes with strict accountability requirements
              that fundamentally shape how you can interact with them.
            </p>

            <p className="text-stone-700 leading-relaxed">
              There are two main types you'll encounter. The <strong>Procuring Contracting Officer
              (PCO)</strong> handles the solicitation process — they write or oversee the RFP, evaluate
              proposals, and award contracts. The <strong>Administrative Contracting Officer (ACO)</strong>
              manages the contract after award — modifications, payments, performance issues. If you're
              trying to win new work, the PCO is who you need to reach. If you're managing an existing
              contract, the ACO is your day-to-day contact.
            </p>

            <p className="text-stone-700 leading-relaxed">
              COs are required under <strong>FAR Part 10</strong> to conduct market research before
              major procurements. That's your legitimate window for interaction. They're also
              encouraged under <strong>FAR 15.201</strong> to hold pre-solicitation exchanges with
              industry. These aren't favors — they're regulatory requirements that give you a
              structured way to engage.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: FileText,
                  label: "Procuring CO (PCO)",
                  desc: "Awards new contracts. Oversees the solicitation, evaluation, and source selection process. Your target when pursuing new business.",
                },
                {
                  icon: Building2,
                  label: "Administrative CO (ACO)",
                  desc: "Manages existing contracts. Handles modifications, payments, and performance issues. Your primary contact after contract award.",
                },
                {
                  icon: Users,
                  label: "Contracting Officer Rep (COR)",
                  desc: "Delegated by the CO to monitor day-to-day performance. Often has more technical depth than the CO and more daily contact with the work.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-stone-50 border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <div className="font-bold text-stone-900 text-sm mb-2">{item.label}</div>
                  <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              What COs <em>can't</em> do matters just as much. They cannot make informal commitments.
              They cannot promise you a contract. They cannot share information about competing bids
              or source selection deliberations. And under the <strong>Procurement Integrity Act</strong>,
              they face serious personal consequences — including criminal liability — if they do.
              When a CO seems cagey or formal during your interactions, that's not personal. That's
              compliance.
            </p>

            <Callout icon={Shield} color="blue" title="The FAR is the playbook for both of you">
              <p>
                The Federal Acquisition Regulation (FAR) governs everything a CO does. When you
                understand the FAR, you understand their constraints — and you stop making requests
                that put them in an impossible position. COs appreciate vendors who speak the language.
                The September 2025 update to <strong>FAR Part 19</strong> streamlined small business
                program rules and clarified set-aside procedures, giving COs more documented discretion
                on task order set-asides. Reading these updates signals that you take compliance seriously.
              </p>
            </Callout>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="pre-award-window" number="02" title="The Pre-Award Window That Actually Matters" />

            <p className="text-stone-700 leading-relaxed">
              Here's the uncomfortable truth that most vendors discover too late: by the time
              an RFP posts on SAM.gov, the meaningful engagement window has already closed. The
              statement of work is written. The evaluation criteria are set. The set-aside
              determination has been made. A competitor who engaged six months ago helped shape
              all of that — and you're now competing against requirements that were written
              with their capabilities in mind.
            </p>

            <p className="text-stone-700 leading-relaxed">
              This isn't cynical. It's how acquisitions work. Contracting officers and program
              managers draw on their familiarity with the vendor landscape when they write
              requirements. Vendors who show up during market research become reference points.
              Everyone else is noise.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The pre-award timeline matters more as contract size increases. Industry experience
              suggests that a $5 million contract typically needs six months of advance engagement
              to meaningfully influence. A $50 million opportunity may take 18 months. For large
              agency-wide contracts above $100 million, the engagement cycle that produces wins
              often starts two to three years before award. The math is simple: the earlier you
              engage, the more your relationships are worth.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tl-lg">
                      Contract Size
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200">
                      Recommended Lead Time
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-stone-700 border border-stone-200 rounded-tr-lg">
                      Primary Engagement Activity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      size: "Under $250K (SAP)",
                      lead: "2–4 months",
                      activity: "SAM.gov Sources Sought responses, OSDBU capability briefing",
                    },
                    {
                      size: "$250K – $5M",
                      lead: "4–8 months",
                      activity: "Industry day attendance, program office outreach, RFI responses",
                    },
                    {
                      size: "$5M – $25M",
                      lead: "8–18 months",
                      activity: "Agency forecast research, multiple RFI responses, teaming outreach",
                    },
                    {
                      size: "$25M – $100M",
                      lead: "18–24 months",
                      activity: "Long-term agency relationships, technical staff engagement, draft RFP feedback",
                    },
                    {
                      size: "$100M+",
                      lead: "2–4 years",
                      activity: "Multi-year relationship strategy, conference presence, incumbent intelligence",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 border border-stone-200 font-semibold text-stone-800">
                        {row.size}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">
                        {row.lead}
                      </td>
                      <td className="px-4 py-3 border border-stone-200 text-stone-600">
                        {row.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The pre-award window also determines your competitive position relative to the incumbent.
              Most federal contracts are recompeted, and incumbents have a structural advantage —
              they know the requirement inside out and have daily access to the program office. The
              only way to close that gap is to start earlier and engage more systematically. Our guide
              on{" "}
              <Link href="/blog/incumbent-advantage-government-contracts" className="text-blue-700 hover:underline font-medium">
                beating the incumbent
              </Link>{" "}
              covers the full strategy.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="FY2025 small business contracting context">
              <p>
                The federal government is tracking toward a record year for small business contracting
                in FY2025. The Department of Defense alone has obligated roughly $55–$60 billion to
                small firms — about one-third of all federal small business dollars. The VA has
                obligated approximately $22 billion, driven by its Vets First program. Small
                Disadvantaged Businesses received a record $76.2 billion in FY2023 (12.1% of all
                federal contracting), with the target set at 15% by FY2025. These aren't abstract
                goals — agencies have real financial incentives to meet them, which means your
                relationship-building efforts land in a favorable environment right now.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="small-business-office" number="03" title="Your First Call: The Agency Small Business Office" />

            <p className="text-stone-700 leading-relaxed">
              Every federal agency has an Office of Small and Disadvantaged Business Utilization —
              the OSDBU. This is your best first contact at any agency you're targeting. The OSDBU
              mandate is to help the agency meet its small business contracting goals. That's not a
              bureaucratic abstraction — they are literally evaluated on how much contract spending
              flows to small businesses. That alignment of interest is the foundation of a productive
              relationship.
            </p>

            <p className="text-stone-700 leading-relaxed">
              OSDBU offices do things that contracting officers can't. They can introduce you to
              program offices before a requirement is written. They can advocate for a set-aside
              designation on contracts where they have influence. They can point you toward upcoming
              procurements on the agency forecast that haven't been publicized yet. None of that
              constitutes an improper relationship — it's exactly what they're supposed to do.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: "01",
                  title: "Find the agency OSDBU",
                  body: "Every major agency has a dedicated OSDBU page on its website. Search '[Agency name] OSDBU' or '[Agency name] Office of Small Business Programs.' The page will list contact information, upcoming events, and often the agency's small business procurement forecast.",
                },
                {
                  step: "02",
                  title: "Send a short capability introduction",
                  body: "Email the OSDBU office a 3–4 sentence introduction: who you are, your NAICS codes and certifications, the type of work you do, and a request to schedule a capability briefing. Attach your capability statement. Keep the email under 200 words — OSDBU staff read dozens of these a week.",
                },
                {
                  step: "03",
                  title: "Request a Vendor Outreach Session",
                  body: "Many agencies, including DHS, host structured Vendor Outreach Sessions (VOS) and Vendor Outreach Matchmaking Events (VOME). These are scheduled face-to-face meetings — sometimes as short as 15 minutes — with agency buyers. Request one explicitly rather than just a general meeting.",
                },
                {
                  step: "04",
                  title: "Ask about the agency procurement forecast",
                  body: "Most agencies publish an annual procurement forecast listing planned acquisitions, estimated values, and set-aside designations. Ask the OSDBU for the forecast and how to interpret it. Then ask which upcoming acquisitions are best matched to your capabilities.",
                },
                {
                  step: "05",
                  title: "Follow up quarterly, not constantly",
                  body: "After your initial meeting, follow up once per quarter — more often if there's a specific active opportunity. Send brief updates when your company wins a new contract, earns a certification, or adds relevant capability. Give them something new to work with.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The OSDBU is also your advocate when things get complicated. If a contract should
              logically be set aside for small business but is being structured as full-and-open,
              the OSDBU can raise that concern through internal channels. They can't override a CO's
              determination, but they can ask questions that change the analysis.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Your{" "}
              <Link href="/features/capability-statement" className="text-blue-700 hover:underline font-medium">
                capability statement
              </Link>{" "}
              is what you leave behind after every OSDBU meeting. It should be updated, current,
              and specific enough to be useful to someone who doesn't know your industry. See our{" "}
              <Link href="/blog/capability-statement-examples" className="text-blue-700 hover:underline font-medium">
                capability statement examples guide
              </Link>{" "}
              for what works and what doesn't.
            </p>
          </div>

          {/* CTA 1 */}
          <div className="animate-on-scroll my-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Know your set-aside eligibility before you pitch
                </h3>
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  Before you walk into an OSDBU meeting, confirm which set-aside programs you actually
                  qualify for. CapturePilot's Quick Checker verifies your eligibility across all
                  major programs in under 2 minutes.
                </p>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="industry-days" number="04" title="Industry Days, Matchmaking Events, and Vendor Outreach Sessions" />

            <p className="text-stone-700 leading-relaxed">
              Industry days are government-hosted events where an agency briefs the vendor community
              on upcoming acquisitions. They are the most legitimate, structured opportunity to
              interact with contracting officers and program staff in a pre-award context. When an
              agency posts an industry day on SAM.gov, showing up is almost always worth it —
              even if you're not certain you'll bid.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The value isn't just in what you hear from the government. It's in what you learn
              from watching the room. Which large primes are in the audience? Which small businesses
              are being noticed by the agency staff? What questions are being asked — and by whom?
              These are intelligence signals you can't get from reading the SAM.gov posting.
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Types of government engagement events
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Industry Day",
                    body: "Agency presents upcoming procurement details to the full vendor community. Usually includes a Q&A session. Often held 60–120 days before the RFP posts. Attendance is free and public. Questions submitted during the event become part of the official record.",
                  },
                  {
                    title: "Pre-Solicitation Conference",
                    body: "More formal than an industry day, typically held after a draft RFP releases. Agency walks through the draft requirements and solicits written questions. Your written questions and the agency's answers influence the final RFP.",
                  },
                  {
                    title: "Matchmaking Event",
                    body: "Structured one-on-one meetings between vendors and agency buyers. Often 15 to 30 minutes per session. Hosted by OSDBU offices or organized by associations like NDIA or NCMA. Apply early — sessions fill quickly.",
                  },
                  {
                    title: "Vendor Outreach Session (VOS)",
                    body: "Individual capability briefings hosted by agency OSDBU offices, scheduled on request. Lower barrier than matchmaking events. Gives you dedicated time with a small business specialist who can then introduce you to program offices.",
                  },
                  {
                    title: "Small Business Conference",
                    body: "Annual conferences hosted by agencies (DoD, VA, DHS) or associations. Combine keynote sessions with matchmaking. The National 8(a) Association National Small Business Conference is one of the premier events for small business GovCon networking.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-100">
                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-stone-800 text-sm">{item.title}</p>
                      <p className="text-stone-500 text-sm mt-0.5 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Attending in person is meaningfully better than attending virtually. You can have
              sidebar conversations during breaks. You can introduce yourself to the contracting
              officer after the formal session ends. You can observe who else is in the room and
              make your own intelligence assessments. Budget for in-person attendance on any
              opportunity above $2 million where the agency is geographically accessible.
            </p>

            <Callout icon={MessageSquare} color="sky" title="How to make industry day interactions count">
              <p>
                At industry days, ask at least one thoughtful written question. It becomes part of
                the official record and gets your company name into a document that the CO and
                program manager review repeatedly. Make the question substantive — about technical
                approach, evaluation criteria, or a genuine ambiguity in the requirement. Questions
                that appear designed to expose the agency's preferred approach will be recognized
                as such and will backfire.
              </p>
            </Callout>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="procurement-integrity" number="05" title="Procurement Integrity Rules Every Vendor Must Understand" />

            <p className="text-stone-700 leading-relaxed">
              The Procurement Integrity Act (41 U.S.C. § 2101–2107) governs what can and can't
              happen between contractors and federal officials during an active procurement. Violating
              it has consequences for both the vendor and the federal employee — criminal penalties,
              suspension, debarment. Understanding these rules isn't optional; it's how you protect
              yourself from well-intentioned mistakes.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The core prohibition is simple: no one can knowingly obtain or disclose source
              selection information or contractor bid or proposal information before contract award.
              If a contracting officer tells you anything about a competitor's bid, pricing, or
              technical approach — even informally, even accidentally — do not use it. Report it
              internally and, if you believe it was material, consider consulting counsel.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  wrong: "Asking the CO how your proposal compares to the competition",
                  right: "Ask the CO to clarify requirements, evaluation criteria weights, or technical ambiguities in the solicitation — all publicly discussable topics that help everyone compete fairly.",
                },
                {
                  wrong: "Offering gifts, meals, entertainment, or hospitality to government employees",
                  right: "Federal employees are generally prohibited from accepting gifts over $20 from vendors. The legal standard is straightforward; the reputational damage from misstepping is not worth any relationship benefit.",
                },
                {
                  wrong: "Discussing employment with a CO or other federal official involved in an active procurement",
                  right: "The Procurement Integrity Act bars employment discussions with government officials engaged in relevant procurement activities. If a federal employee raises the topic, stop the conversation and document it.",
                },
                {
                  wrong: "Sharing information about competitors learned through teaming discussions with a CO",
                  right: "Keep competitive intelligence in-house. Sharing what you know about a competitor — even true information — with a federal official creates legal exposure and undermines your professional standing.",
                },
                {
                  wrong: "Hiring a recently retired federal official to leverage their relationships",
                  right: "Former officials who served as PCO, ACO, or source selection authority on contracts over $10 million face a one-year bar on receiving compensation from contractors involved in those contracts. Check this before hiring.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="flex items-start gap-3 px-5 py-3 bg-red-50 border-b border-stone-200">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-red-700">{item.wrong}</p>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-3 bg-emerald-50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-800">{item.right}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The "arm's length" standard is the practical test. A contracting officer should be
              able to treat every vendor exactly the same way — and your behavior should make that
              easy, not harder. When you operate transparently, follow the formal channels, and
              engage only through appropriate mechanisms like industry days and RFI responses,
              you're not just staying compliant. You're building a reputation as a professional
              counterpart that COs want to work with.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Document every interaction">
              <p>
                Keep brief records of every substantive conversation with a contracting officer or
                program official — date, attendees, topics discussed, and any information shared.
                If a question ever arises about the procurement, your contemporaneous notes
                demonstrate that you acted in good faith. This isn't paranoia; it's standard
                business practice in federal contracting.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="research-agency" number="06" title="How to Research an Agency Before You Ever Make Contact" />

            <p className="text-stone-700 leading-relaxed">
              Walking into an OSDBU meeting knowing nothing about how the agency spends money is
              a missed opportunity. The federal government publishes more procurement data than
              most people realize — and doing your homework before you engage signals that you're
              a serious business development professional, not a vendor cold-calling for leads.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Search,
                  title: "USASpending.gov",
                  body: "Search by agency, NAICS code, recipient name, and fiscal year. Find the agency's historical spending patterns, top categories, average contract values, and which small businesses are currently winning work. Free and comprehensive.",
                },
                {
                  icon: FileText,
                  title: "FPDS-NG (fpds.gov)",
                  body: "The Federal Procurement Data System has granular contract award data — exact dollar values, award dates, period of performance, set-aside codes, and the contracting officer's name. The data is one level deeper than USASpending.",
                },
                {
                  icon: Building2,
                  title: "Agency Procurement Forecast",
                  body: "Most agencies publish an annual forecast of planned acquisitions. It lists upcoming contracts, estimated values, and tentative set-aside designations. Find it on the agency OSDBU page or by searching '[Agency] small business forecast'.",
                },
                {
                  icon: BarChart3,
                  title: "Agency Budget Justification",
                  body: "Each agency submits a budget justification to Congress (the 'Congressional Budget Justification' or CBJ). It details how the agency plans to spend its appropriations and which programs are growing or contracting. OMB also publishes exhibit 53s for IT spending.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-stone-200 rounded-2xl p-5 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-bold text-stone-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Before any meeting, you should be able to answer these questions: What is the agency's
              total annual contract spend in your NAICS codes? Which contracts are coming up for
              recompete in the next 12 to 18 months? Who are the current incumbent contractors?
              What percentage of awards went to small businesses last fiscal year? What is the agency
              missing that your company provides?
            </p>

            <p className="text-stone-700 leading-relaxed">
              CapturePilot's{" "}
              <Link href="/features/intelligence" className="text-blue-700 hover:underline font-medium">
                market intelligence tools
              </Link>{" "}
              pull this data into a single view — so you can walk into any agency meeting with a
              clear picture of their spend profile, upcoming recompetes, and the set-aside landscape
              without spending hours in FPDS.
            </p>

            <Callout icon={Lightbulb} color="violet" title="Research the incumbent first">
              <p>
                Before engaging with an agency on any specific opportunity, look up who currently holds
                the contract on FPDS. Research the incumbent's company size, certifications, and
                performance history. If their CPARS ratings are available in the public domain, review
                them. This tells you where the gaps are — and gives you something substantive to
                discuss when you explain why your approach would improve on the current state. For
                more on this, see our guide on{" "}
                <Link href="/blog/cpars-contractor-performance" className="text-blue-700 underline font-medium">
                  how CPARS ratings shape future awards
                </Link>
                .
              </p>
            </Callout>
          </div>

          {/* CTA 2 */}
          <div className="animate-on-scroll my-12 bg-stone-900 rounded-3xl p-8 text-white">
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 shrink-0 mt-1 text-blue-400" />
              <div>
                <h3 className="text-xl font-black mb-2">
                  Research agencies before you pick up the phone
                </h3>
                <p className="text-stone-300 mb-4 text-sm leading-relaxed">
                  CapturePilot's intelligence dashboard shows you agency spending by NAICS code,
                  upcoming recompetes, and incumbent data — so your first OSDBU call is a briefing,
                  not a cold call.
                </p>
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-400 transition-colors text-sm"
                >
                  Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="capability-briefings" number="07" title="Capability Briefings: What to Say and How to Structure Them" />

            <p className="text-stone-700 leading-relaxed">
              A capability briefing is a scheduled meeting — 30 to 60 minutes — where you present
              your company to an agency buyer or OSDBU representative. Done well, it starts a
              relationship and positions you on the radar for relevant opportunities. Done poorly,
              it's a sales pitch that nobody needed to sit through and that makes a negative first
              impression.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The distinction is this: a sales pitch is about you. A capability briefing is about
              them. Go in knowing their mission, their current challenges, their upcoming spending
              priorities, and the gaps in their current contractor base. Then explain specifically
              how your company's experience, certifications, and approach are relevant to what they
              actually need.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: "1",
                  title: "Open with agency context, not your company",
                  body: "Start by demonstrating that you understand their mission: 'Based on your FY2025 budget request and the recompete of your facilities management contract in Q3, we believe we can offer a strong alternative to the incumbent approach.' This immediately signals that you've done your homework.",
                },
                {
                  num: "2",
                  title: "Lead with certifications and size standard",
                  body: "Your NAICS codes, set-aside certifications, SAM.gov registration status, and small business size standard compliance should be on page one of your leave-behind and among the first things you state verbally. The buyer needs to mentally file you in the right category quickly.",
                },
                {
                  num: "3",
                  title: "Present two or three highly relevant past performance examples",
                  body: "Pick examples with the same agency type, similar scope, and comparable dollar values. Be specific: 'We managed a 5-year, $12.4M IT support contract for USDA NRCS supporting 800 users across 48 state offices, with a CPARS rating of Exceptional.' Generic examples signal generic capability.",
                },
                {
                  num: "4",
                  title: "Ask about their upcoming needs — then listen",
                  body: "Midway through the meeting, shift to questions: What are their biggest service delivery challenges right now? What contracts are coming up for recompete? Are there small business set-aside opportunities they're trying to structure? The answer to these questions is more valuable than anything you'll say.",
                },
                {
                  num: "5",
                  title: "Leave a one-page capability statement and a clear next step",
                  body: "Close with a request for a specific next action — an introduction to the relevant program office, a notification about upcoming procurement announcements, or a follow-up meeting after a specific solicitation posts. Vague 'let's stay in touch' endings get filed and forgotten.",
                },
              ].map((item) => (
                <div key={item.num} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-blue-700 font-black text-sm">{item.num}</span>
                    </div>
                    <h3 className="font-bold text-stone-900">{item.title}</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed pl-11">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              A 15-minute matchmaking session requires a compressed version of this structure —
              lead with your most relevant past performance example, state your certifications,
              and ask one high-value question. Practice this compressed version until you can
              deliver it cold without notes, because the format leaves no room for setup.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Use CapturePilot's{" "}
              <Link href="/features/pipeline" className="text-blue-700 hover:underline font-medium">
                pipeline management tools
              </Link>{" "}
              to log every briefing, track follow-ups, and set reminders for quarterly check-ins
              with contacts at each agency. Over time, your agency relationship map becomes one
              of your most valuable business assets — and one that's very hard for competitors to
              replicate quickly.
            </p>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="program-office" number="08" title="The Program Office: The Relationship That Actually Shapes Requirements" />

            <p className="text-stone-700 leading-relaxed">
              Contracting officers administer acquisitions. Program managers own the mission. This
              distinction matters enormously, because it's the program office — not the contracting
              office — that shapes what gets bought. Program managers define the requirements.
              They draft the statement of work. They tell the CO what the evaluation criteria should
              emphasize. By the time the requirement reaches the CO for solicitation, most of the
              substantive decisions have already been made.
            </p>

            <p className="text-stone-700 leading-relaxed">
              This is why the most successful GovCon companies prioritize program office
              relationships. The Contracting Officer's Representative (COR) — the program office
              employee delegated to oversee contract performance — is often your most valuable
              ongoing contact on an existing contract and the most influential voice in shaping
              the follow-on. CORs are also usually more accessible than COs and more willing to
              have substantive technical conversations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Target,
                  title: "How to reach the program office legitimately",
                  items: [
                    "Ask the OSDBU to introduce you to the relevant program manager",
                    "Attend agency mission-focused conferences (not just procurement events)",
                    "Submit thoughtful technical questions during industry days",
                    "Respond to RFIs and Sources Sought with content that demonstrates domain expertise",
                    "Request an informational meeting when there is no active procurement on the topic",
                  ],
                },
                {
                  icon: Clock,
                  title: "What program managers want to know",
                  items: [
                    "Whether you understand their mission, not just the contract scope",
                    "How your past work at similar agencies maps to their environment",
                    "Whether you have cleared personnel if the work requires access",
                    "What differentiates your approach from the current or likely incumbent",
                    "Whether you're a reliable long-term partner or a one-contract vendor",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-stone-900 text-sm">{item.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((i, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              The critical constraint: once a solicitation is active, direct contact with the
              program office on procurement topics becomes problematic. All questions and
              communication should go through the contracting office at that point. This is
              why you build program office relationships before the solicitation — while you
              still have legitimate access.
            </p>

            <Callout icon={Phone} color="emerald" title="The informational meeting is underused">
              <p>
                Before any active procurement is announced, you can request an informational
                meeting with program office staff to understand their mission challenges and how
                your capabilities might be relevant. Frame it explicitly as non-procurement:
                you're not there to pitch a specific opportunity; you're there to understand how
                to be useful to their mission over the long term. This framing is legally
                appropriate and professionally credible — and it's the approach most small
                businesses skip.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Responding to{" "}
              <Link href="/blog/sources-sought-notice" className="text-blue-700 hover:underline font-medium">
                Sources Sought notices
              </Link>{" "}
              is one of the most efficient ways to establish a program office presence before
              the procurement clock starts. Your response is read by both the contracting office
              and the program office, and a technically substantive response signals domain
              credibility to both audiences simultaneously.
            </p>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="engagement-calendar" number="09" title="Building a Multi-Agency Engagement Calendar" />

            <p className="text-stone-700 leading-relaxed">
              One-off relationship attempts don't compound. What turns early engagement into a
              repeatable advantage is system — a structured way of tracking who you know at each
              agency, what opportunities you're following, and when you need to take action.
              Without that structure, your BD activity is reactive: you respond to what's already
              posted rather than positioning ahead of what's coming.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Start by choosing three to five target agencies based on spending alignment with your
              NAICS codes, set-aside opportunity volume, and where you have at least some existing
              familiarity. Spreading across too many agencies at once means you never build
              meaningful depth at any of them. Depth beats breadth in GovCon relationship-building.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  phase: "Q1: Research and establish initial contacts",
                  timeframe: "January–March",
                  actions: [
                    "Pull FY spending data from USASpending.gov for your three to five target agencies",
                    "Identify OSDBU contacts at each agency and request capability briefing appointments",
                    "Review each agency's FY procurement forecast for relevant upcoming contracts",
                    "Register for any industry days, matchmaking events, or annual conferences",
                  ],
                },
                {
                  phase: "Q2: Deepen relationships and respond to pre-solicitation activity",
                  timeframe: "April–June",
                  actions: [
                    "Attend scheduled OSDBU meetings and agency events",
                    "Respond to all relevant Sources Sought notices and RFIs at target agencies",
                    "Request program office introductions from OSDBU contacts where appropriate",
                    "Submit agency forecasted opportunities to your pipeline with estimated dates",
                  ],
                },
                {
                  phase: "Q3: Active pursuit engagement",
                  timeframe: "July–September",
                  actions: [
                    "Attend industry days for actively posted solicitations you're pursuing",
                    "Submit written questions during industry days and pre-solicitation conferences",
                    "Finalize teaming arrangements before RFPs post",
                    "Follow up with OSDBU contacts quarterly with company updates",
                  ],
                },
                {
                  phase: "Q4: Capture review and next-year planning",
                  timeframe: "October–December",
                  actions: [
                    "Debrief on any submissions (win or lose) to extract relationship intelligence",
                    "Review next fiscal year agency procurement forecasts as they publish",
                    "Update your target agency list based on where you won and where relationships deepened",
                    "Register for next year's matchmaking events and conferences early",
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover-lift">
                  <div className="flex items-center gap-4 px-5 py-3 bg-blue-50 border-b border-stone-200">
                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <div>
                      <span className="font-bold text-blue-800 text-sm">{phase.phase}</span>
                      <span className="text-blue-500 text-xs ml-2">— {phase.timeframe}</span>
                    </div>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {phase.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Relationship-building in government contracting is a long game. The contacts you
              develop today at an agency OSDBU may not translate into a contract award for 18 months.
              The program manager you brief in Q2 may not have relevant work until the following
              fiscal year. That lag is frustrating — but it's also what keeps most competitors
              from doing it consistently. The ones who do are rarely surprised by RFPs.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For a disciplined approach to tracking every pursuit and relationship, see our
              guides on{" "}
              <Link href="/blog/government-contract-pipeline-management" className="text-blue-700 hover:underline font-medium">
                managing your government contract pipeline
              </Link>{" "}
              and the{" "}
              <Link href="/blog/capture-management-process" className="text-blue-700 hover:underline font-medium">
                capture management process
              </Link>
              . Together, they give you the operational framework to turn relationships into wins
              systematically rather than opportunistically.
            </p>

            <Callout icon={TrendingUp} color="blue" title="Track relationships in your pipeline, not just opportunities">
              <p>
                Most GovCon pipelines track only formal opportunities — SAM.gov postings, active
                RFPs. The contractors who consistently win treat agency relationships as pipeline
                assets too. Log every OSDBU contact, program manager conversation, and industry
                day attendance in your pipeline system. When a relevant RFP posts, you already
                know your relationship depth at that agency — and that tells you how seriously to
                pursue it. CapturePilot's{" "}
                <Link href="/features/pipeline" className="text-blue-700 underline font-medium">
                  pipeline tools
                </Link>{" "}
                let you track both opportunity and relationship stages in a single view.
              </p>
            </Callout>
          </div>

          {/* Final CTA */}
          <div className="animate-on-scroll my-12 rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-2">
                  Build your agency pipeline before the RFPs drop
                </h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  CapturePilot tracks Sources Sought notices, procurement forecasts, and recompete
                  timelines so you know exactly when to engage — before your competition figures
                  out the opportunity exists.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    Book a strategy call
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll mt-16 pt-8 border-t border-stone-200">
            <h3 className="font-black text-stone-900 text-xl mb-6">Related reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/sources-sought-notice",
                  title: "Sources Sought Notices: How to Get In Early",
                  desc: "The formal mechanism for engaging agencies before an RFP posts — and how to use it to influence requirements.",
                },
                {
                  href: "/blog/capture-management-process",
                  title: "The Capture Management Process",
                  desc: "How winning contractors build a structured pursuit process from discovery through award.",
                },
                {
                  href: "/blog/incumbent-advantage-government-contracts",
                  title: "How to Beat the Incumbent",
                  desc: "Strategies for closing the relationship gap against contractors who already hold the work.",
                },
                {
                  href: "/blog/government-contract-pipeline-management",
                  title: "Managing Your Government Contract Pipeline",
                  desc: "From discovery to award — how to track pursuits and make better bid decisions.",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block bg-stone-50 border border-stone-200 rounded-2xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <p className="font-bold text-stone-900 group-hover:text-blue-700 transition-colors mb-1 text-sm">
                    {post.title}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">{post.desc}</p>
                  <div className="flex items-center gap-1 text-blue-600 text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-3 h-3" />
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
