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
  XCircle,
  MessageSquare,
  Search,
  Shield,
  BarChart3,
  Zap,
  TrendingUp,
  DollarSign,
  AlertCircle,
  HelpCircle,
  ListChecks,
  Users,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-most-skip", label: "Why Most Contractors Skip Debriefs (And Pay for It)" },
  { id: "preaward-vs-postaward", label: "Preaward vs Postaward: Which Debrief You Need" },
  { id: "how-to-request", label: "How to Request a Debriefing (The 3-Day Rule)" },
  { id: "what-agency-must-tell-you", label: "What the Agency Must Tell You" },
  { id: "what-they-cant-tell-you", label: "What They Won't Tell You — and Why" },
  { id: "dod-enhanced-debriefing", label: "DoD Enhanced Debriefings: A More Powerful Right" },
  { id: "questions-to-ask", label: "25 Questions to Ask in Your Debrief" },
  { id: "turn-feedback-into-wins", label: "Turning the Feedback Into Your Next Win" },
  { id: "protest-connection", label: "The Protest Connection: Deadlines That Matter" },
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

export default function DebriefingGovernmentContractPage() {
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
            <span className="text-stone-900 font-medium">Government Contract Debriefings</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Proposal Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Debriefings:{" "}
            <span className="gradient-text">
              How to Learn from Every Loss and Win Next Time
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            You spent months on that proposal. You lost. The agency owes you an explanation — and
            under federal law, they have to give you one. Most contractors never ask. The ones
            who do consistently improve their win rates, spot protest grounds, and find out
            exactly what it takes to beat the competition next time.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published June 13, 2026</span>
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
            <SectionHeading id="why-most-skip" number="01" title="Why Most Contractors Skip Debriefs (And Pay for It)" />

            <p className="text-stone-700 leading-relaxed">
              The award notification lands in your inbox. Someone else won. You're disappointed,
              possibly frustrated, and you move on to the next opportunity. That's what most small
              business contractors do — and it's one of the costliest habits in government
              contracting.
            </p>

            <p className="text-stone-700 leading-relaxed">
              A debriefing is your legal right to find out, in writing, exactly why you lost.
              Under <strong>FAR 15.506</strong>, any unsuccessful offeror on a competitive
              negotiated procurement can request a formal debrief from the contracting agency.
              The agency isn't doing you a favor. It's a regulatory obligation, and contracting
              officers must comply.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The contractors who request debriefs learn things they can't get anywhere else:
              specific weaknesses the evaluators identified in their technical volume, how their
              price compared to the winner's, what past performance scores they received, and
              exactly which sections of their proposal fell short of expectations. That's not
              abstract feedback. It's a direct map to winning the next competition.
            </p>

            <Callout icon={BarChart3} color="blue" title="The Proposal Intelligence Gap">
              <p>
                Research on federal competitive acquisitions consistently shows that contractors
                who conduct debriefs after losses — and systematically incorporate the feedback —
                improve their proposal quality faster than those who rely solely on internal
                self-assessment. Every loss contains specific, actionable data the agency evaluated
                you on. A debrief turns that data into a competitive advantage.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              Why do so many contractors skip it? Some assume the feedback will be vague or
              useless. Others worry it might come across as sore-loser behavior. A few simply
              don't know the right exists. None of those concerns hold up. Requesting a debrief
              is professional, expected, and protected under law. Contracting officers can't
              retaliate against you for asking, and the best contractors — the ones who win
              repeatedly — request debriefs as standard operating procedure after every loss.
            </p>
          </div>

          {/* Section 2 */}
          <div className="animate-on-scroll">
            <SectionHeading id="preaward-vs-postaward" number="02" title="Preaward vs Postaward: Which Debrief You Need" />

            <p className="text-stone-700 leading-relaxed">
              There are two types of debriefings under FAR Part 15: preaward and postaward.
              They apply to different situations and serve different purposes. Knowing which one
              applies to your situation determines how you request it and what you can learn.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold">Preaward Debrief (FAR 15.505)</th>
                    <th className="px-4 py-3 text-left font-semibold">Postaward Debrief (FAR 15.506)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "When it applies",
                      "You've been excluded from competition before contract award",
                      "You submitted an offer and weren't selected for award",
                    ],
                    [
                      "Trigger event",
                      "Notice of exclusion from the competitive range",
                      "Notice of contract award to another offeror",
                    ],
                    [
                      "Request deadline",
                      "3 calendar days after receiving exclusion notice",
                      "3 calendar days after receiving award notification",
                    ],
                    [
                      "Agency response time",
                      "Before award when practicable",
                      "Within 5 business days of receiving request",
                    ],
                    [
                      "Key content",
                      "Why you were cut from the competitive range, eval of significant weaknesses",
                      "Awardee's overall ratings and price, your ratings, rationale for award",
                    ],
                    [
                      "Can you delay it?",
                      "Yes — you can request it be postponed until after award",
                      "No — you request it after award by definition",
                    ],
                  ].map(([factor, pre, post], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-200">{factor}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-200">{pre}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-200">{post}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              Most contractors encounter postaward debriefings — you submitted a full proposal,
              someone else won, and you want to know why. Preaward debriefings come up when
              you're cut before the final evaluation, usually during a competitive range
              determination where only the most highly rated offerors move forward to final
              negotiations and Best and Final Offers (BAFOs).
            </p>

            <p className="text-stone-700 leading-relaxed">
              If you're cut from the competitive range, consider asking for a preaward debrief
              immediately rather than delaying it. Finding out why you were excluded while the
              competition is still open gives you strategic insight — though you can't re-enter
              the competition, you can apply the learning to a subsequent task order under the
              same vehicle, or a follow-on procurement in the same program area.
            </p>

            <Callout icon={Lightbulb} color="amber" title="The Delay-Until-Postaward Option">
              <p>
                Under FAR 15.505(a)(2), you can ask the agency to delay your preaward debrief until
                after contract award, converting it into a postaward debrief. This gives you the
                benefit of receiving more information — including the awardee's overall rating and
                price — that agencies often can't share before award. The tradeoff: delaying your
                debrief also delays your protest clock, so talk to a GovCon attorney if you're
                considering a bid protest.
              </p>
            </Callout>
          </div>

          {/* Section 3 */}
          <div className="animate-on-scroll">
            <SectionHeading id="how-to-request" number="03" title="How to Request a Debriefing (The 3-Day Rule)" />

            <p className="text-stone-700 leading-relaxed">
              The most important thing to know about debriefings is the deadline: you have
              <strong> 3 calendar days</strong> from receipt of the award notification to submit
              your written request. Not 3 business days. Calendar days. Miss that window and you
              lose your right to a debrief.
            </p>

            <p className="text-stone-700 leading-relaxed">
              The process is straightforward. The moment you receive the "unsuccessful offeror"
              notification — whether by email or through SAM.gov — your clock starts. You need
              to send a written request to the contracting officer within those 3 days. It can
              be a simple email. It doesn't require a formal letter or legal language.
            </p>

            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 my-8 font-mono text-sm">
              <p className="text-stone-400 mb-3">// Sample debrief request email</p>
              <p><span className="text-blue-300">To:</span> [Contracting Officer name and email]</p>
              <p><span className="text-blue-300">Subject:</span> Request for Postaward Debriefing — [Solicitation Number]</p>
              <br />
              <p>Dear [CO Name],</p>
              <br />
              <p>
                Pursuant to FAR 15.506, [Company Name] requests a postaward debriefing regarding
                Solicitation [Number]. We received notification of award on [date] and submit this
                request within the required 3-day period.
              </p>
              <br />
              <p>
                Please advise on the format (oral, written, or virtual) and a proposed date and
                time. We prefer a written debriefing to ensure we can review the information carefully.
              </p>
              <br />
              <p>Thank you.</p>
              <p>[Your Name and Title]</p>
              <p>[Company Name] | [Phone] | [Email]</p>
            </div>

            <p className="text-stone-700 leading-relaxed">
              After receiving your request, the agency has <strong>5 business days</strong> to
              conduct the debriefing (FAR 15.506(b)). In practice, many agencies push for oral
              debriefings — a phone call or video session with the contracting officer or source
              selection personnel. You can request a written debrief instead, and for complex
              procurements or situations where you may be considering a protest, written is
              almost always better. Written creates a record.
            </p>

            <p className="text-stone-700 leading-relaxed">
              Agencies sometimes offer to provide a written summary before or after an oral
              session. Always ask for both. Request that the agency provide written responses
              to your questions in addition to whatever oral discussion takes place.
            </p>

            {/* CTA 1 */}
            <div className="my-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-xl p-3 shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">Know Before You Bid Again</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    CapturePilot&apos;s intelligence tools help you research what federal agencies
                    value — so your next proposal targets the evaluation criteria that actually
                    win contracts.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={CHECK_URL}
                      className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Check your eligibility free <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={SIGNUP_URL}
                      className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Start 30-day free trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-agency-must-tell-you" number="04" title="What the Agency Must Tell You" />

            <p className="text-stone-700 leading-relaxed">
              Under <strong>FAR 15.506(d)</strong>, the debriefing must include specific
              categories of information. These aren't optional courtesies — they're regulatory
              requirements. If an agency refuses to provide any of these, you have grounds to
              push back (and potentially to protest the adequacy of the debrief itself).
            </p>

            <div className="my-8 space-y-4">
              {[
                {
                  icon: BarChart3,
                  color: "emerald" as const,
                  title: "Awardee's overall evaluated cost/price and technical rating",
                  detail:
                    "You're entitled to know the awardee's total evaluated price and their overall technical rating (e.g., Outstanding, Good, Acceptable). Not point-by-point details, but the overall score.",
                },
                {
                  icon: Target,
                  color: "blue" as const,
                  title: "Your overall evaluated cost/price and technical rating",
                  detail:
                    "The agency must tell you your own ratings across evaluation factors. This is how you find out whether the problem was your technical approach, your price, or both.",
                },
                {
                  icon: AlertTriangle,
                  color: "amber" as const,
                  title: "Significant weaknesses and deficiencies in your proposal",
                  detail:
                    "This is the most valuable part. The agency must identify significant weaknesses (areas that increase risk of unsuccessful performance) and deficiencies (material failures to meet a requirement) in your proposal.",
                },
                {
                  icon: ListChecks,
                  color: "sky" as const,
                  title: "Overall ranking of all offerors (if a ranking was developed)",
                  detail:
                    "If the agency ranked proposals, they must disclose that ranking. This tells you where you stood relative to all competitors — not just the winner.",
                },
                {
                  icon: FileText,
                  color: "violet" as const,
                  title: "Summary of the rationale for award",
                  detail:
                    "Why did the awardee win? The agency must explain the basis for the award decision — including trade-off rationale if the competition used a best-value approach.",
                },
                {
                  icon: Shield,
                  color: "blue" as const,
                  title: "Past performance information on your company",
                  detail:
                    "The agency must share the past performance evaluation they conducted on your company — including any references they checked, and their assessment of your performance history.",
                },
                {
                  icon: HelpCircle,
                  color: "emerald" as const,
                  title: "Responses to relevant questions about source selection procedures",
                  detail:
                    "You can ask whether source selection procedures were followed. If something about the competition process seemed irregular, this is your opportunity to probe it.",
                },
              ].map(({ icon: Icon, color, title, detail }) => (
                <div
                  key={title}
                  className={`flex gap-4 p-5 rounded-xl border ${
                    color === "emerald"
                      ? "bg-emerald-50 border-emerald-200"
                      : color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : color === "amber"
                      ? "bg-amber-50 border-amber-200"
                      : color === "sky"
                      ? "bg-sky-50 border-sky-200"
                      : "bg-violet-50 border-violet-200"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      color === "emerald"
                        ? "text-emerald-600"
                        : color === "blue"
                        ? "text-blue-600"
                        : color === "amber"
                        ? "text-amber-600"
                        : color === "sky"
                        ? "text-sky-600"
                        : "text-violet-600"
                    }`}
                  />
                  <div>
                    <p className="font-semibold text-stone-900 text-sm mb-1">{title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed">
              Note that past performance information under FAR 15.506(d)(5) applies to{" "}
              <em>your</em> past performance — not the awardee's. You can find out how the
              agency evaluated your track record, which references they used, and how your
              past performance compared in terms of relevance and quality ratings.
            </p>
          </div>

          {/* Section 5 */}
          <div className="animate-on-scroll">
            <SectionHeading id="what-they-cant-tell-you" number="05" title="What They Won't Tell You — and Why" />

            <p className="text-stone-700 leading-relaxed">
              The debrief has real limits. Understanding what's off the table helps you ask
              better questions and avoid wasting time pushing for information you can't get.
            </p>

            <div className="my-8 rounded-2xl border border-red-200 bg-red-50 overflow-hidden">
              <div className="bg-red-600 text-white px-6 py-4 font-bold text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Information prohibited from disclosure in debriefings (FAR 15.506(e))
              </div>
              <div className="divide-y divide-red-200">
                {[
                  {
                    item: "Point-by-point comparisons with other offerors",
                    why: "You can learn your own ratings and the awardee's overall ratings. But the agency can't lay out a side-by-side comparison of every criterion.",
                  },
                  {
                    item: "Names of individuals who provided past performance references",
                    why: "Reference providers are protected. You'll get your past performance score, but not who the evaluators spoke with or what specific references said.",
                  },
                  {
                    item: "Other offerors' proprietary technical approaches",
                    why: "The awardee's technical solution is competitively sensitive. You won't get a copy of their technical volume.",
                  },
                  {
                    item: "Privileged or confidential commercial/financial information",
                    why: "Other competitors' pricing breakdowns, cost structures, and rate data are protected as confidential commercial information.",
                  },
                  {
                    item: "Source selection information beyond what FAR 15.506(d) requires",
                    why: "Source selection authority deliberations, evaluator notes, and internal scoring discussions that go beyond the required disclosures are typically withheld.",
                  },
                ].map(({ item, why }, i) => (
                  <div key={i} className="px-6 py-4">
                    <p className="font-semibold text-red-900 text-sm mb-1">{item}</p>
                    <p className="text-red-700 text-sm">{why}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              When an agency refuses to answer a question, note it — and note the specific
              question you asked and their reason for declining. Inadequate debriefings (where
              an agency fails to provide the required information) can themselves form grounds
              for a bid protest. You don't need to accept vague or incomplete responses to
              the mandatory disclosures.
            </p>

            <Callout icon={AlertCircle} color="amber" title="If the Debrief Is Inadequate">
              <p>
                If the agency provides responses that are evasive, incomplete, or that omit
                mandatory disclosures, you can challenge the adequacy of the debrief at the
                GAO. A sustained protest on debrief adequacy is rare, but it's a real option
                when an agency is stonewalling. Document exactly what you asked and what you
                received in response — in writing.
              </p>
            </Callout>
          </div>

          {/* Section 6 */}
          <div className="animate-on-scroll">
            <SectionHeading id="dod-enhanced-debriefing" number="06" title="DoD Enhanced Debriefings: A More Powerful Right" />

            <p className="text-stone-700 leading-relaxed">
              If you bid on a Department of Defense contract, you may have significantly stronger
              debriefing rights than under the standard FAR. In March 2022, the DoD finalized
              its Enhanced Debriefing Rule under{" "}
              <strong>DFARS 215.506</strong>, implementing Section 818 of the FY 2018 National
              Defense Authorization Act. The rule applies to competitive negotiated DoD contracts
              exceeding <strong>$10 million</strong>.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="px-4 py-3 text-left font-semibold">Contract Value</th>
                    <th className="px-4 py-3 text-left font-semibold">Enhanced Debrief Rights</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Under $10M",
                      "Standard FAR 15.506 rights apply — oral or written debrief, mandatory disclosures only",
                    ],
                    [
                      "$10M–$100M (small business or nontraditional defense contractor)",
                      "Standard rights plus: you can request a redacted version of the written source selection document",
                    ],
                    [
                      "$10M+ (any offeror)",
                      "Standard rights plus: written follow-up questions within 2 business days of debrief; agency must answer in writing within 5 business days",
                    ],
                    [
                      "Over $100M",
                      "Standard rights plus: agency must proactively provide a redacted written source selection document in the debrief",
                    ],
                  ].map(([threshold, rights], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-3 font-semibold text-stone-800 border-b border-stone-200 whitespace-nowrap">{threshold}</td>
                      <td className="px-4 py-3 text-stone-600 border-b border-stone-200">{rights}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The follow-up question right is the game-changer. For any DoD contract over $10
              million, after you receive the initial debrief, you have <strong>2 business days</strong>{" "}
              to submit additional written questions. The agency then has{" "}
              <strong>5 business days</strong> to respond in writing. During this period, the
              debrief is considered "open" — which has important implications for protest
              deadlines (more on that in the protest connection section).
            </p>

            <p className="text-stone-700 leading-relaxed">
              For contracts over $100 million, receiving a redacted written source selection
              document is extraordinarily valuable. This is the agency's internal evaluation
              narrative — the document that explains how they scored and compared all offerors.
              It gives you insight into the evaluators' reasoning that standard debriefings
              simply don't provide.
            </p>

            <Callout icon={TrendingUp} color="emerald" title="How to Use the Written Source Selection Document">
              <p>
                When you receive a redacted source selection document on a DoD acquisition, read
                it carefully for: (1) how the agency defined "significant strength" versus "strength"
                versus "weakness" for each factor, (2) what specific proposal content drove high
                ratings for the awardee, and (3) whether the agency applied the evaluation criteria
                stated in the solicitation consistently. Inconsistent application is one of the most
                common and most winnable protest grounds at the GAO.
              </p>
            </Callout>
          </div>

          {/* Section 7 */}
          <div className="animate-on-scroll">
            <SectionHeading id="questions-to-ask" number="07" title="25 Questions to Ask in Your Debrief" />

            <p className="text-stone-700 leading-relaxed">
              Show up prepared. Debriefs are time-limited — agencies will cut them off and
              contracting officers have other work. The contractors who get the most value come
              in with a structured list of specific questions. Here's a complete bank organized
              by evaluation area.
            </p>

            {[
              {
                category: "Technical Evaluation",
                color: "text-blue-700 bg-blue-50 border-blue-200" as const,
                questions: [
                  "What were the specific significant weaknesses identified in our technical approach?",
                  "Were any deficiencies noted — areas where we materially failed to meet a stated requirement?",
                  "What technical strengths were identified in our proposal?",
                  "On which technical sub-factors did we score lowest? Which scored highest?",
                  "Was our technical rating overall acceptable, or were there factors that were rated unacceptable?",
                  "Did we miss any stated technical requirements or compliance items?",
                  "Were there areas where our approach increased risk in the evaluators' view?",
                ],
              },
              {
                category: "Past Performance",
                color: "text-emerald-700 bg-emerald-50 border-emerald-200" as const,
                questions: [
                  "What past performance rating did we receive (e.g., Relevant/Very Relevant, Exceptional/Very Good)?",
                  "How many references did the agency verify, and what relevance ratings were assigned?",
                  "Were there any negative performance assessments from references that affected our rating?",
                  "How did our past performance rating compare to the awardee's overall rating?",
                  "Was our past performance considered too limited or not sufficiently relevant to this requirement?",
                ],
              },
              {
                category: "Price / Cost Evaluation",
                color: "text-amber-700 bg-amber-50 border-amber-200" as const,
                questions: [
                  "What was our overall evaluated price versus the awardee's overall evaluated price?",
                  "Was our price considered realistic and reasonable?",
                  "If a price realism analysis was conducted, what concerns were identified in our pricing?",
                  "Did we win or lose the price evaluation? By approximately what margin?",
                  "Were any line items flagged as significantly higher or lower than the government estimate?",
                ],
              },
              {
                category: "Source Selection Decision",
                color: "text-violet-700 bg-violet-50 border-violet-200" as const,
                questions: [
                  "What was our overall ranking among all offerors in the competitive range?",
                  "Under the trade-off analysis, how did our non-price advantages compare to any price difference with the winner?",
                  "Were source selection procedures followed as stated in Section M of the solicitation?",
                  "Were evaluation factors weighted in the manner described in the solicitation?",
                  "If we received a higher technical rating than the awardee, what justified selecting a lower-rated offer?",
                ],
              },
            ].map(({ category, color, questions }) => (
              <div key={category} className="my-8">
                <h3 className={`text-sm font-bold px-4 py-2 rounded-t-xl border ${color} inline-block mb-0`}>
                  {category}
                </h3>
                <div className={`rounded-b-xl rounded-tr-xl border ${color.split(" ").slice(2).join(" ")} overflow-hidden`}>
                  {questions.map((q, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 px-5 py-3 ${
                        i % 2 === 0 ? "bg-white/60" : "bg-white/30"
                      } ${i < questions.length - 1 ? "border-b " + color.split(" ").slice(2).join(" ") : ""}`}
                    >
                      <span className={`text-xs font-bold mt-0.5 shrink-0 ${color.split(" ")[0]}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-stone-700">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="text-stone-700 leading-relaxed">
              Don't try to get through all 25 questions in every debrief. Prioritize based on
              what you most need to know. For a loss you attribute to technical scoring, lead
              with the technical questions. For a loss where you were surprised by price
              competitiveness, focus there. Use the debrief to get specific answers, not
              just general impressions.
            </p>
          </div>

          {/* Section 8 */}
          <div className="animate-on-scroll">
            <SectionHeading id="turn-feedback-into-wins" number="08" title="Turning the Feedback Into Your Next Win" />

            <p className="text-stone-700 leading-relaxed">
              A debrief is only worth as much as what you do with it. The contractors who benefit
              most treat debriefings as systematic data collection — not emotional closure on a
              loss. Here's how to build that discipline into your business development process.
            </p>

            <div className="my-8 space-y-6">
              {[
                {
                  step: "01",
                  title: "Document everything immediately",
                  detail:
                    "If your debrief is oral, take a co-worker into the call to serve as note-taker while you ask questions. Don't rely on memory. Request a written summary from the agency as a follow-up. Create an internal debrief record that captures every question asked and every answer received.",
                },
                {
                  step: "02",
                  title: "Map findings to proposal sections",
                  detail:
                    "Every weakness or deficiency the agency identified came from a specific section of your proposal. Map the feedback back to the actual page numbers or sections where the weakness lived. This tells you exactly what to fix in future bids.",
                },
                {
                  step: "03",
                  title: "Separate controllable from uncontrollable",
                  detail:
                    "Some losses come down to weaknesses you can fix (better past performance writeups, stronger technical approach, improved pricing). Others come down to factors you can't control (the incumbent had five years of established relationships, the awardee had niche clearances you don't hold). Distinguish between them so you invest your improvement energy where it pays off.",
                },
                {
                  step: "04",
                  title: "Check your price against the award",
                  detail:
                    "If the agency tells you the awardee's overall evaluated price, compare it to your number. Were you significantly higher? The government posts final contract awards in FPDS-NG — once the award is public, you can often find additional pricing detail there. Use that data to calibrate your price-to-win model for similar future opportunities.",
                },
                {
                  step: "05",
                  title: "Build a debrief log across opportunities",
                  detail:
                    "After 3-5 debriefs, patterns emerge. If past performance consistently rates below expectations, your reference strategy needs work. If technical evaluators repeatedly flag the same type of weakness, your proposal writers need guidance on that specific area. A single debrief is a data point. A body of debriefs is actionable intelligence.",
                },
                {
                  step: "06",
                  title: "Decide whether to pursue a follow-on",
                  detail:
                    "If the debrief reveals you were competitive — strong technical rating, close on price — and you understand clearly what held you back, that's often a signal to pursue the next task order under the same vehicle or the recompete in a few years. The knowledge you've gained is an investment. Use it.",
                },
              ].map(({ step, title, detail }) => (
                <div key={step} className="flex gap-5">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                      {step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <Callout icon={Search} color="sky" title="Research What Won">
              <p>
                After your debrief, search the award on FPDS-NG and SAM.gov. For awards above the
                simplified acquisition threshold ($250,000), the agency must post contract award
                notices. The awardee's name, evaluated price, and often their contract description
                are public record. Pair that with your debrief feedback and you have a clear picture
                of exactly what won and why. CapturePilot&apos;s{" "}
                <Link href="/features/intelligence" className="underline text-sky-700 font-medium">
                  Intelligence feature
                </Link>{" "}
                surfaces this award data automatically so you can track what agencies are actually
                buying and at what prices.
              </p>
            </Callout>

            {/* CTA 2 */}
            <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-xl p-3 shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-stone-900">Improve Your Next Proposal</h3>
                  <p className="text-stone-600 mb-4 text-sm">
                    CapturePilot&apos;s proposal tools help you build compliant, competitive proposals
                    — with built-in compliance matrix support and evaluation criteria tracking so
                    you address every factor the agency will score.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/features/proposals"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Explore proposal tools <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/resources/proposal-template"
                      className="inline-flex items-center gap-2 bg-white border border-stone-300 hover:border-blue-400 text-stone-700 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Free proposal template
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="animate-on-scroll">
            <SectionHeading id="protest-connection" number="09" title="The Protest Connection: Deadlines That Matter" />

            <p className="text-stone-700 leading-relaxed">
              Debriefings and bid protests are closely linked. The debrief is often where you
              first identify grounds for a protest — evaluators who applied unstated criteria,
              a pricing analysis that doesn't add up, or a source selection decision that
              contradicts the stated evaluation factors. Understanding the timing rules prevents
              costly mistakes.
            </p>

            <div className="my-8 bg-stone-900 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-700">
                <h3 className="text-white font-bold">Critical Protest Deadlines</h3>
              </div>
              <div className="divide-y divide-stone-700">
                {[
                  {
                    event: "File for automatic stay (CICA)",
                    deadline: "10 days after contract award OR 5 days after your debriefing, whichever is later",
                    note: "To freeze contract performance while your protest is pending at GAO, you must hit this deadline.",
                    color: "text-red-400",
                  },
                  {
                    event: "File protest at GAO",
                    deadline: "10 days after you knew (or should have known) the basis for your protest",
                    note: "If you received a debrief, the protest clock typically starts running from the debrief date.",
                    color: "text-amber-400",
                  },
                  {
                    event: "DoD enhanced debrief: submit follow-up questions",
                    deadline: "2 business days after receiving the initial debrief",
                    note: "This keeps the debrief 'open' and delays the start of the 5-day automatic stay window.",
                    color: "text-blue-400",
                  },
                  {
                    event: "DoD enhanced debrief: protest clock after follow-up",
                    deadline: "5 days after the agency delivers written answers to your follow-up questions",
                    note: "The debrief doesn't close until the agency responds in writing. Your protest window runs from that delivery date.",
                    color: "text-emerald-400",
                  },
                  {
                    event: "Agency-level protest",
                    deadline: "Within 10 days of the adverse procurement action",
                    note: "Faster and cheaper than GAO, but doesn't trigger the automatic stay. Use when the issue is narrow and resolvable.",
                    color: "text-violet-400",
                  },
                ].map(({ event, deadline, note, color }) => (
                  <div key={event} className="px-6 py-4">
                    <p className={`text-xs font-bold mb-1 ${color}`}>{event}</p>
                    <p className="text-white font-semibold text-sm mb-1">{deadline}</p>
                    <p className="text-stone-400 text-xs">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-stone-700 leading-relaxed">
              The most important rule: <strong>never miss the debrief window because you're
              debating whether to protest</strong>. Request the debrief first — always.
              You can decide not to protest after the debrief. But if you skip the debrief and
              later discover grounds for a protest, you've lost both the debrief information and
              potentially the cleanest protest deadline.
            </p>

            <p className="text-stone-700 leading-relaxed">
              For DoD contracts over $10 million, the follow-up question mechanism strategically
              extends your time to evaluate protest grounds. Use it. Submit follow-up questions
              within 2 business days of the debrief — even if you're not sure you'll protest —
              to get more information and preserve the extended timeline. If the agency's written
              answers to your follow-up questions reveal additional problems, you're still within
              your protest window.
            </p>

            <Callout icon={Shield} color="blue" title="When to Get a GovCon Attorney Involved">
              <p>
                If your debrief reveals anything that suggests evaluator bias, improper sole-source
                treatment, application of unstated evaluation criteria, or a price realism analysis
                that doesn't hold up mathematically, consult a government contracts attorney
                immediately — before your protest deadline runs. GAO protests must be filed within
                10 days of when you knew the basis; courts have very little flexibility on that
                deadline. Time spent deciding is time your protest clock is running.
              </p>
            </Callout>

            <p className="text-stone-700 leading-relaxed">
              For more on the protest process itself — including how GAO proceedings work, the
              automatic stay, and the most winnable protest grounds — see our guide on{" "}
              <Link
                href="/blog/government-contract-protest"
                className="text-blue-600 font-semibold hover:underline"
              >
                government contract protests
              </Link>
              . And for the broader question of building a sustainable win rate over time, the
              guide on{" "}
              <Link
                href="/blog/government-contract-win-rate"
                className="text-blue-600 font-semibold hover:underline"
              >
                improving your government contract win rate
              </Link>{" "}
              is worth reading alongside this one.
            </p>

            {/* Final CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-stone-900 to-blue-950 p-10 text-white text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-5">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3">Stop Losing Contracts You Could Win</h3>
              <p className="text-stone-300 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                CapturePilot helps small businesses and veteran-owned companies find the right
                opportunities, build better proposals, and track what's actually winning in your
                market. Start with a free eligibility check — no credit card required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-stone-900 hover:bg-blue-50 font-black px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white/60 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Book a strategy call
                </Link>
              </div>
            </div>

            {/* Related Reading */}
            <div className="mt-16">
              <h3 className="text-lg font-black text-stone-900 mb-6">Related Reading</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/blog/government-contract-protest",
                    title: "Government Contract Protests",
                    desc: "When, why, and how to file one at the GAO or COFC",
                  },
                  {
                    href: "/blog/government-contract-win-rate",
                    title: "Government Contract Win Rates",
                    desc: "What's realistic and how to improve yours",
                  },
                  {
                    href: "/blog/government-proposal-compliance-matrix",
                    title: "Proposal Compliance Matrix",
                    desc: "Build the foundation every winning proposal needs",
                  },
                  {
                    href: "/blog/past-performance-government-contracts",
                    title: "Past Performance in Government Contracts",
                    desc: "Why it matters and how to build yours strategically",
                  },
                  {
                    href: "/blog/capture-management-process",
                    title: "The Capture Management Process",
                    desc: "How winning contractors find and close deals",
                  },
                  {
                    href: "/blog/incumbent-advantage-government-contracts",
                    title: "How to Beat the Incumbent",
                    desc: "Strategy for winning recompetes and displacing entrenched contractors",
                  },
                ].map(({ href, title, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-stone-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <p className="font-semibold text-stone-900 text-sm group-hover:text-blue-700 transition-colors">
                        {title}
                      </p>
                      <p className="text-stone-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
