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
  MessageSquare,
  Shield,
  XCircle,
  Award,
  FileText,
  TrendingUp,
  Zap,
  AlertCircle,
  CheckSquare,
  Clock,
  BarChart2,
  Layers,
  RefreshCw,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "why-most-skip", label: "Why Most Contractors Never Request a Debriefing" },
  { id: "two-types", label: "Preaward vs. Postaward: Two Different Debriefing Rights" },
  { id: "how-to-request", label: "How to Request a Debriefing: Timing and Method" },
  { id: "what-they-must-tell-you", label: "What the Government Must Disclose (and What They Can Withhold)" },
  { id: "enhanced-debriefing", label: "Enhanced Debriefing Rights for DoD Contracts" },
  { id: "protest-clock", label: "The Protest Clock: Why Debriefings Change Your Legal Options" },
  { id: "how-to-prepare", label: "How to Prepare for and Run the Debriefing" },
  { id: "questions-to-ask", label: "The Questions That Get You Real Answers" },
  { id: "use-the-feedback", label: "How to Turn Debriefing Feedback Into Your Next Win" },
  { id: "build-the-loop", label: "Building a Continuous Feedback Loop" },
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

export default function GovernmentContractDebriefingPage() {
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-indigo-50 to-white">
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
            <span className="text-stone-900 font-medium">Contract Debriefings</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Target className="w-4 h-4" /> Strategy
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Government Contract Debriefings:{" "}
            <span className="gradient-text">
              How to Get Feedback After a Loss and Use It to Win Next Time
            </span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most small businesses never request a debriefing after losing a federal contract. That
            means they keep losing the same way, to the same competitors, on the same weaknesses.
            A debriefing is one of the few moments in government contracting where the agency has to
            tell you exactly why you lost. Here&rsquo;s how to get the most out of that conversation.
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published July 25, 2026</span>
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
            id="why-most-skip"
            number="01"
            title="Why Most Contractors Never Request a Debriefing"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            You lose a bid. You get the standard notification — "We regret to inform you that your
            offer was not selected." You move on to the next opportunity. That&rsquo;s what most
            small businesses do, and it&rsquo;s one of the most expensive habits in government
            contracting.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The right to a debriefing — a formal session where the contracting agency explains why
            your proposal lost — is written into the Federal Acquisition Regulation. It&rsquo;s not
            optional for the agency when you request it. They have to do it. Most small businesses
            either don&rsquo;t know this right exists or don&rsquo;t think it&rsquo;s worth
            pursuing. Both assumptions are wrong.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            A proper debriefing tells you exactly where your proposal scored, what weaknesses the
            evaluators identified, how your price compared to the winner&rsquo;s, and in many cases
            what you could have done differently. That information is worth thousands of dollars in
            avoided proposal mistakes on the next bid.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The contractors who consistently improve their{" "}
            <Link
              href="/blog/government-contract-win-rate"
              className="text-blue-600 hover:underline font-medium"
            >
              win rates
            </Link>{" "}
            treat debriefings as mandatory post-loss intelligence. Not optional. Not when convenient.
            Every time, for every substantive loss.
          </p>

          {/* Stat callout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                stat: "3",
                label: "Business days you have to request a postaward debriefing (FAR 15.506)",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100",
              },
              {
                stat: "5",
                label: "Business days the agency has to hold the debriefing after your request",
                color: "text-indigo-600",
                bg: "bg-indigo-50 border-indigo-100",
              },
              {
                stat: "52%",
                label: "GAO bid protest effectiveness rate in FY2024 — including voluntary agency corrective action",
                color: "text-violet-600",
                bg: "bg-violet-50 border-violet-100",
              },
            ].map(({ stat, label, color, bg }) => (
              <div key={stat} className={`rounded-2xl border p-5 text-center ${bg}`}>
                <div className={`text-4xl font-black mb-2 ${color}`}>{stat}</div>
                <div className="text-xs text-stone-600 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="two-types"
            number="02"
            title="Preaward vs. Postaward: Two Different Debriefing Rights"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The FAR gives you two distinct debriefing rights, governed by two different regulations.
            Which one applies depends on where you are in the procurement process when you find out
            you&rsquo;re not getting the contract.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Preaward debriefings (FAR 15.505)</strong> apply when the agency eliminates your
            offer from the competitive range — meaning they&rsquo;re cutting you before they make
            the final award. You have the right to a preaward debriefing that must cover why your
            proposal was excluded, the evaluation of your significant weaknesses or deficiencies, and
            a summary of the rationale for exclusion. The agency does not have to reveal information
            about other offerors&rsquo; proposals at this stage.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>Postaward debriefings (FAR 15.506)</strong> are the more common and more
            information-rich version. After award, unsuccessful offerors can request a debriefing
            that covers the evaluation of their proposal across all factors, the overall ranking if
            the agency used rankings, the awardee&rsquo;s evaluated price or cost, and the basis for
            the source selection decision. This is where the real intelligence lives.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto my-8 animate-on-scroll">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold">Preaward (FAR 15.505)</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-lg">
                    Postaward (FAR 15.506)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["When it applies", "When you're cut from competitive range", "After contract award to unsuccessful offerors"],
                  ["Request deadline", "Promptly, upon receiving exclusion notice", "3 business days after receiving award notice"],
                  ["Agency must cover", "Why you were excluded; significant weaknesses", "All evaluation factors, rankings, awardee price, rationale"],
                  ["Other offerors' info", "Not required to share", "Must share awardee's evaluated price; rankings if used"],
                  ["Enhanced debriefing rights", "Not applicable", "Available for DoD contracts (DFARS 215.506)"],
                  ["Protest clock effect", "10 days from exclusion notice", "10 days from debriefing date (if debriefing held)"],
                ].map(([factor, pre, post], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">
                      {factor}
                    </td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{pre}</td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">{post}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-stone-700 leading-relaxed mb-6">
            Most of this guide focuses on postaward debriefings because that&rsquo;s where you get
            the most complete picture of where you stood. But if you&rsquo;re cut from competitive
            range early, don&rsquo;t skip the preaward debriefing — knowing why you were excluded
            tells you whether the problem was technical, past performance, or something else entirely,
            and that&rsquo;s valuable regardless of what stage it happened at.
          </p>
        </div>

        {/* Section 3 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="how-to-request"
            number="03"
            title="How to Request a Debriefing: Timing and Method"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The deadline is tighter than most people realize. Under FAR 15.506(a)(1), you must
            submit a written request for a postaward debriefing within{" "}
            <strong>3 business days</strong> of receiving written notification that your offer was
            not selected. Miss that window and the agency is not required to provide the debriefing
            — though many will still accommodate a late request at their discretion.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The request must be in writing. An email to the contracting officer is sufficient. Keep
            it short and direct. You don&rsquo;t need to explain why you want the debriefing or
            what you think went wrong. Just submit the request promptly.
          </p>

          <div className="bg-stone-900 text-white rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-lg mb-2 text-white">Sample Debriefing Request</h3>
            <p className="text-stone-400 text-xs mb-4">
              Send within 3 business days of receiving the award notification. Keep it brief.
            </p>
            <div className="bg-stone-800 rounded-xl p-4 font-mono text-sm text-stone-200 leading-relaxed">
              <p className="mb-2">Subject: Request for Postaward Debriefing — [Solicitation Number]</p>
              <p className="mb-4">Dear [Contracting Officer Name],</p>
              <p className="mb-4">
                Pursuant to FAR 15.506, [Company Name] respectfully requests a postaward debriefing
                regarding Solicitation No. [XXXXXX]. We received notification of the award decision
                on [date].
              </p>
              <p className="mb-4">
                We are available for an oral or written debriefing at your convenience. Please advise
                on the format, scheduling, and any materials we should prepare in advance.
              </p>
              <p>Respectfully,</p>
              <p>[Name, Title, Company, Contact Information]</p>
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Once you&rsquo;ve submitted the request, the agency must hold the debriefing within{" "}
            <strong>5 business days</strong> of receiving your request (FAR 15.506(b)). They can
            request a later date if there&rsquo;s a legitimate scheduling reason, but the default
            is fast.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Debriefings can be oral, written, or a combination. Many agencies conduct oral debriefings
            by phone or videoconference, then follow up with a written summary. For complex
            procurements, push for a written follow-up even if the initial debriefing is oral —
            written summaries are harder to misinterpret and more useful when feeding the information
            back into your proposal process.
          </p>

          <Callout icon={Clock} color="amber" title="Set a Calendar Reminder the Moment You Read the Loss Notice">
            <p>
              Don&rsquo;t wait. The moment you open the award notification email, set a calendar
              reminder for 2 business days out — giving yourself a day before the 3-day deadline
              expires. Missed deadlines forfeit your debriefing right, and no amount of follow-up
              will get it back if the agency decides to enforce the rule.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            If the agency doesn&rsquo;t respond to your request within a reasonable timeframe (a
            few business days), follow up in writing, copying the contracting officer&rsquo;s
            supervisor if needed. Your request creates a record. Agencies are generally responsive
            because the debriefing obligation is clearly stated in the FAR and in most contracts.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-black text-xl mb-2">Know Your Eligibility Before You Bid</h3>
              <p className="text-blue-100 mb-4">
                CapturePilot&rsquo;s Quick Checker surfaces your set-aside eligibility and
                competitive position before you invest time in a proposal — so you only chase
                opportunities where you have a real chance to win.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  Check your eligibility free <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/features/intelligence"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-400 transition-colors text-sm"
                >
                  See intelligence features <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="what-they-must-tell-you"
            number="04"
            title="What the Government Must Disclose (and What They Can Withhold)"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The FAR is specific about what a postaward debriefing must cover. FAR 15.506(d) lists
            required disclosures. Contracting officers can expand beyond this list at their
            discretion — and the good ones usually do — but the minimum is clearly defined.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>The agency must tell you:</strong>
          </p>

          <ul className="list-none space-y-3 mb-6 pl-0">
            {[
              {
                text: "The government's evaluation of the significant weaknesses or deficiencies in your proposal",
                detail: "Not just that you were weak on a factor — the specific nature of the weakness",
              },
              {
                text: "The overall evaluated cost or price, and technical rating if applicable, of the awardee",
                detail: "You find out exactly what the winning company bid and how they scored technically",
              },
              {
                text: "The overall ranking of all offerors, if the agency used rankings",
                detail: "Whether you came in second, fifth, or last — context that matters",
              },
              {
                text: "A summary of the rationale for award",
                detail: "Why this particular contractor won, beyond just price",
              },
              {
                text: "Reasonable responses to relevant questions about whether source selection procedures contained in the solicitation, applicable regulations, and other applicable authorities were followed",
                detail: "You can ask process questions — and they have to answer",
              },
            ].map(({ text, detail }) => (
              <li key={text} className="flex items-start gap-3 text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">{text}</div>
                  <div className="text-stone-500 text-xs mt-1">{detail}</div>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-stone-700 leading-relaxed mb-4">
            <strong>The agency does not have to disclose:</strong>
          </p>

          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "Trade secrets and confidential manufacturing processes of other offerors",
              "Privileged or confidential commercial and financial information of other offerors",
              "Point-by-point comparisons of your proposal with those of other offerors",
              "The names of individuals on the Source Selection Evaluation Board",
              "Information exempt from release under the Freedom of Information Act",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-stone-700 text-sm">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Callout icon={Lightbulb} color="sky" title="What 'No Point-by-Point Comparison' Actually Means">
            <p>
              The agency won&rsquo;t say &ldquo;the winner&rsquo;s past performance rating was
              Outstanding versus your Acceptable.&rdquo; But they will tell you your rating and
              the awardee&rsquo;s evaluated price. Combined with the overall ranking and the rationale
              for award, you can usually reconstruct the competitive picture well enough to understand
              where you stood. Don&rsquo;t expect a comparative scorecard — expect enough information
              to diagnose your own weaknesses clearly.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            Many contracting officers will share more than the minimum if they believe it helps
            improve the contractor community — particularly on longer-term requirements where they
            want multiple capable bidders. The spirit of the debriefing is to provide meaningful
            feedback, not just to check a compliance box. If your debriefing feels perfunctory,
            ask follow-up questions (more on this in the enhanced debriefing section).
          </p>
        </div>

        {/* Section 5 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="enhanced-debriefing"
            number="05"
            title="Enhanced Debriefing Rights for DoD Contracts"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            If you&rsquo;re bidding on Department of Defense contracts, the National Defense
            Authorization Act for FY2018 (Section 818) gave you significantly stronger debriefing
            rights — and many contractors who work DoD don&rsquo;t know these rights exist.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            DFARS 215.506-70 implements the enhanced debriefing process. It applies to DoD
            competitive acquisitions — including task orders and delivery orders — that{" "}
            <strong>exceed $10 million</strong> (DFARS inflation adjustments may move this threshold
            to $15 million; verify against current eCFR before relying on it for a specific
            procurement). Here&rsquo;s how it works: after an oral debriefing on a qualifying DoD
            contract, you have <strong>2 business days</strong> to submit written follow-up questions
            to the contracting officer. The agency then has{" "}
            <strong>5 business days</strong> to provide written responses. Those written responses
            are part of the official debriefing record.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            The debriefing is legally not concluded — and protest clocks do not begin running —
            until the later of: two business days after the initial debriefing if you submit no
            follow-up questions, or the date the agency delivers its written responses to your
            timely submitted questions. This means enhanced debriefings give you substantially
            more time to evaluate what happened and decide whether a protest is warranted.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            There&rsquo;s an additional right many contractors miss entirely: for DoD contracts
            above <strong>$150 million</strong>, the agency is <em>required</em> to provide a
            redacted copy of the written Source Selection Decision Document (SSDD) during the
            debriefing. For contracts between $15 million and $150 million where the unsuccessful
            offeror is a small business or nontraditional defense contractor, disclosure of the
            SSDD is optional — but you can ask for it, and some contracting officers will provide
            it. The SSDD is the evaluator&rsquo;s own internal document explaining exactly how
            the award decision was made.
          </p>

          {/* Step process */}
          <div className="space-y-4 my-8 animate-on-scroll">
            {[
              {
                num: "01",
                title: "Request the debriefing within 3 business days",
                body: "Standard FAR 15.506 requirement — the clock starts when you receive the award notification.",
              },
              {
                num: "02",
                title: "Attend the oral debriefing",
                body: "The agency holds the initial debriefing — typically by phone or video. Take notes on everything. Bring someone whose sole job is note-taking.",
              },
              {
                num: "03",
                title: "Submit written follow-up questions within 2 business days",
                body: "After the oral debriefing, you have 2 days to submit written questions. This is your chance to push on areas that were vague or incomplete in the oral session. (DoD only — DFARS 215.506-70.)",
              },
              {
                num: "04",
                title: "Receive written responses within 5 business days",
                body: "The CO must respond to your questions in writing. This creates a formal record and gives you more complete information than the oral session alone.",
              },
              {
                num: "05",
                title: "The protest clock starts NOW",
                body: "Your 10-day GAO protest window doesn't begin until you receive the written responses. This extended timeline lets you make a more informed protest decision.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="flex gap-4 p-5 bg-stone-50 rounded-xl border border-stone-100 hover-lift"
              >
                <div className="text-2xl font-black text-stone-200 flex-shrink-0 w-10">{num}</div>
                <div>
                  <div className="font-bold text-stone-800 mb-1">{title}</div>
                  <div className="text-stone-600 text-sm leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout icon={Shield} color="violet" title="Enhanced Debriefing: Who It Applies To">
            <p>
              Enhanced debriefing rights under DFARS 215.506-70 apply to competitive acquisitions
              conducted by DoD components. If your solicitation was issued by the Army, Navy, Air
              Force, DARPA, DLA, or any other DoD agency, you likely have these enhanced rights.
              Civilian agency contracts (VA, DHS, GSA, HHS, etc.) are governed only by FAR 15.506
              — no mandatory enhanced debriefing. Some civilian agencies have voluntarily adopted
              similar practices, but it&rsquo;s not required by regulation.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            Use your follow-up questions strategically. If the oral debriefing was vague about a
            specific evaluation factor — say, your management approach rating — ask explicitly
            in writing: &ldquo;What specific weaknesses or deficiencies did the SSEB identify in
            our Management Volume?&rdquo; Written questions get written answers, and written
            answers are documented and defensible if you later decide to protest.
          </p>
        </div>

        {/* Section 6 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="protest-clock"
            number="06"
            title="The Protest Clock: Why Debriefings Change Your Legal Options"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The connection between debriefings and protests is direct, and it affects your
            decision-making even if you never plan to file a protest.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Under GAO protest procedures, you generally have <strong>10 days</strong> from when you
            knew or should have known the basis for protest to file at the Government Accountability
            Office. If you request a timely debriefing and attend it, your 10-day protest window
            starts from the date of the debriefing — not from the date of the award notification.
            That gives you more time to evaluate whether you have a protest-worthy case.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            For the CICA automatic stay — which halts contract performance while GAO considers the
            protest — the deadline is tighter: you must file at GAO within <strong>10 days of
            award</strong> or within <strong>5 days from the close of a required debriefing</strong>.
            Miss those windows and GAO can still hear your protest, but there&rsquo;s no automatic
            stop-work order while it&rsquo;s pending.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            If you don&rsquo;t request a debriefing, the protest clock runs from the date of award
            notification — and 10 days goes fast when you&rsquo;re running a business.
          </p>

          <div className="bg-gradient-to-r from-stone-50 to-indigo-50 border border-indigo-100 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-800 mb-4">Protest Clock Comparison</h3>
            <div className="space-y-4">
              {[
                {
                  scenario: "No debriefing requested",
                  clock: "10 days from award notification",
                  color: "bg-red-100 text-red-700",
                  bar: "w-1/3",
                  barColor: "bg-red-400",
                },
                {
                  scenario: "FAR 15.506 debriefing (civilian agency or DoD)",
                  clock: "10 days from debriefing date",
                  color: "bg-amber-100 text-amber-700",
                  bar: "w-2/3",
                  barColor: "bg-amber-400",
                },
                {
                  scenario: "Enhanced debriefing (DoD) — with written follow-ups",
                  clock: "10 days from receipt of written responses",
                  color: "bg-emerald-100 text-emerald-700",
                  bar: "w-full",
                  barColor: "bg-emerald-400",
                },
              ].map(({ scenario, clock, color, bar, barColor }) => (
                <div key={scenario}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-stone-700">{scenario}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color}`}>
                      {clock}
                    </span>
                  </div>
                  <div className="h-2 bg-stone-200 rounded-full">
                    <div className={`h-2 rounded-full ${bar} ${barColor}`} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-4">
              CICA automatic stay requires filing within 10 days of award OR 5 days from close of
              required debriefing. General GAO protest deadline: 10 days from when basis is known.
              Consult counsel for specific deadline questions.
            </p>
          </div>

          {/* GAO Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 animate-on-scroll">
            {[
              {
                stat: "1,803",
                label: "Total GAO bid protest cases filed in FY2024 — down 11% from FY2023",
                color: "text-blue-600",
                bg: "bg-blue-50 border-blue-100",
              },
              {
                stat: "16%",
                label: "GAO sustain rate in FY2024 — protests won outright on the merits",
                color: "text-amber-600",
                bg: "bg-amber-50 border-amber-100",
              },
              {
                stat: "52%",
                label: "Effectiveness rate — sustained + cases where agency took voluntary corrective action",
                color: "text-emerald-600",
                bg: "bg-emerald-50 border-emerald-100",
              },
            ].map(({ stat, label, color, bg }) => (
              <div key={stat} className={`rounded-2xl border p-5 text-center ${bg}`}>
                <div className={`text-4xl font-black mb-2 ${color}`}>{stat}</div>
                <div className="text-xs text-stone-600 leading-snug">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            That 52% effectiveness rate is the critical number. More than half of contested GAO
            protests result in the protester winning or the agency correcting the procurement
            voluntarily — because the protest itself shined a light on an evaluation problem.
            Debriefings are what tell you whether an evaluation problem worth contesting actually
            exists.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            This matters even if you&rsquo;re not a frequent protest filer. Sometimes debriefings
            reveal procedural irregularities — an evaluation that didn&rsquo;t follow the RFP
            criteria, a technical rating that doesn&rsquo;t match the stated evaluation factors,
            a price that suggests the awardee may have made an error — that you simply couldn&rsquo;t
            have known without the debriefing.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            For more on the protest process itself — when it makes sense, what it costs, and how
            to evaluate whether you have a viable case — see our guide to{" "}
            <Link
              href="/blog/government-contract-protest"
              className="text-blue-600 hover:underline font-medium"
            >
              government contract protests
            </Link>
            .
          </p>
        </div>

        {/* Section 7 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="how-to-prepare"
            number="07"
            title="How to Prepare for and Run the Debriefing"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Contractors who walk into debriefings unprepared get less out of them. The contracting
            officer has a set agenda and limited time. If you don&rsquo;t come with specific
            questions, you&rsquo;ll get general answers — which aren&rsquo;t useful.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Before the debriefing, review your proposal thoroughly. Identify the sections where you
            felt least confident. Pull out the evaluation criteria from Section M and note every
            factor where you were uncertain about your response. Those are the areas to probe.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Bring two or three people from your team. One person leads the conversation. One person
            takes verbatim notes — not summaries, actual quotes from the contracting officer wherever
            possible. One person listens for things the lead might miss and asks follow-up questions.
            This division of labor pays off when you&rsquo;re reviewing the notes afterward.
          </p>

          <div className="bg-stone-900 text-white rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-lg mb-4 text-white">Debriefing Preparation Checklist</h3>
            <div className="space-y-3">
              {[
                {
                  step: "Re-read your submitted proposal cover to cover",
                  detail: "You need to remember what you actually said, not what you intended to say",
                },
                {
                  step: "Pull Section M from the RFP and annotate each evaluation factor",
                  detail: "Note where you felt strong vs. uncertain — those become your question targets",
                },
                {
                  step: "Draft written questions in advance",
                  detail: "Come with 10-15 specific questions. You may not get through all of them, but having them prevents blank-mind moments",
                },
                {
                  step: "Research the awardee",
                  detail: "Look them up on SAM.gov, USASpending.gov, and LinkedIn. Understanding who beat you adds context to the evaluation feedback",
                },
                {
                  step: "Assign roles before the call",
                  detail: "Lead, note-taker, listener — clarity on who does what prevents everyone talking at once or no one taking notes",
                },
                {
                  step: "Prepare a post-debriefing debrief of your own",
                  detail: "Schedule 30 minutes immediately after to review notes while memory is fresh, before everyone scatters",
                },
              ].map(({ step, detail }) => (
                <div key={step} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">{step}</div>
                    <div className="text-stone-400 text-xs mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            Keep the debriefing professional and forward-looking. Contracting officers are more
            candid when they feel the conversation is about improvement, not blame. Don&rsquo;t
            argue with their evaluation — you won&rsquo;t change the award, and it closes them off.
            If you believe the evaluation was flawed, write it down and evaluate it after the
            session, not during.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            The best debriefing conversations are ones where the CO ends up saying more than they
            planned to, because the contractor asked good questions and listened carefully.
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
                CapturePilot&rsquo;s proposal tracking and pipeline features help you capture
                debriefing feedback, link it to specific opportunities, and build a knowledge base
                that improves every future bid. Turn your losses into a competitive library.
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

        {/* Section 8 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="questions-to-ask"
            number="08"
            title="The Questions That Get You Real Answers"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            Vague questions get vague answers. &ldquo;Why did we lose?&rdquo; gets you
            &ldquo;Your technical approach had some weaknesses.&rdquo; That&rsquo;s useless.
            Specific questions get specific answers.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Here are the question categories and specific phrasings that consistently produce more
            useful debriefings:
          </p>

          {/* Question categories */}
          <div className="space-y-6 my-8 animate-on-scroll">
            {[
              {
                category: "Technical Evaluation",
                color: "border-blue-500 bg-blue-50",
                labelColor: "text-blue-700",
                questions: [
                  "What specific weaknesses or deficiencies did evaluators identify in our Technical Volume?",
                  "Which technical factor scored lowest for our proposal, and what would a stronger response have looked like?",
                  "Were there any requirements in the SOW that our technical approach failed to address?",
                  "Did our key personnel qualifications raise any concerns?",
                ],
              },
              {
                category: "Past Performance",
                color: "border-violet-500 bg-violet-50",
                labelColor: "text-violet-700",
                questions: [
                  "What rating did we receive for past performance, and what were the primary factors in that assessment?",
                  "Were the contracts we cited considered relevant? If not, what was missing?",
                  "Did any of our CPARS narratives or references raise concerns?",
                  "What type or scope of past performance would have strengthened our rating?",
                ],
              },
              {
                category: "Price and Cost",
                color: "border-emerald-500 bg-emerald-50",
                labelColor: "text-emerald-700",
                questions: [
                  "Can you share the awardee's total evaluated price?",
                  "How did our price compare to the government's independent cost estimate?",
                  "Was our pricing considered fair and reasonable, or were there concerns?",
                  "Was a price realism analysis performed? If so, what were the findings for our proposal?",
                ],
              },
              {
                category: "Process and Award Rationale",
                color: "border-amber-500 bg-amber-50",
                labelColor: "text-amber-700",
                questions: [
                  "What was our overall ranking among all offerors?",
                  "Can you describe the source selection rationale — what made the awardee the best value?",
                  "Were discussions held with any offerors? If so, did we receive meaningful discussions?",
                  "Were all evaluation factors in Section M applied as written in the solicitation?",
                ],
              },
            ].map(({ category, color, labelColor, questions }) => (
              <div key={category} className={`rounded-xl border-l-4 p-5 ${color}`}>
                <div className={`font-bold text-sm mb-3 ${labelColor}`}>{category}</div>
                <ul className="space-y-2">
                  {questions.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-sm text-stone-700">
                      <MessageSquare className="w-3.5 h-3.5 text-stone-400 mt-0.5 flex-shrink-0" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Callout icon={Target} color="blue" title="The One Question Most Contractors Never Think to Ask">
            <p>
              &ldquo;If we were to bid the recompete of this requirement, what would you recommend
              we focus on to be more competitive?&rdquo; Some contracting officers won&rsquo;t
              answer this. Many will. The ones who do often give you the clearest, most actionable
              guidance of the entire debriefing — because they&rsquo;re answering from a
              program perspective, not an evaluation one.
            </p>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            Document everything the CO says in the most direct language possible. If they say
            &ldquo;your management approach lacked specificity on transition,&rdquo; write that
            verbatim. If they say &ldquo;the awardee&rsquo;s price was substantially lower than
            yours,&rdquo; note the word &ldquo;substantially.&rdquo; These specifics matter when
            you&rsquo;re doing your post-loss analysis.
          </p>
        </div>

        {/* Section 9 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="use-the-feedback"
            number="09"
            title="How to Turn Debriefing Feedback Into Your Next Win"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The debriefing isn&rsquo;t the endpoint. It&rsquo;s the input. What you do with the
            feedback determines whether it was worth requesting in the first place.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Context on the market: in FY2024, the federal government awarded{" "}
            <strong>$773.68 billion</strong> in contracts across 108,899 companies. Small businesses
            captured <strong>$183 billion</strong> of that — about 28.8% of prime contract spending,
            a record. There is no shortage of opportunity. The question is how many of those
            opportunities convert to wins for your company specifically.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Industry data consistently shows companies that run formal bid/no-bid processes win
            around <strong>28% of the time</strong>. Companies that bid without a disciplined
            selection process win around <strong>12%</strong>. That gap — 28% vs. 12% — closes
            fastest when you have a consistent source of feedback on what your proposals are missing.
            Debriefings are that source.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Start with a structured debrief document — a simple one-page summary that captures:
            what factor drove the loss, the specific weaknesses identified, how your price compared,
            and the key action items for next time. File it alongside your proposal and the
            solicitation documents. You want to be able to pull this up when the recompete drops
            in two years.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Most losses cluster around a small number of root causes. Track yours across multiple
            debriefings and you&rsquo;ll see patterns fast. Common patterns:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 animate-on-scroll">
            {[
              {
                pattern: "Price is consistently the differentiator",
                diagnosis: "Your overhead or cost structure puts you above leaner competitors. Rate structure, subcontracting strategy, or scope clarification may all be levers.",
                fix: "See our guide to government contract pricing strategies",
                link: "/blog/government-contract-pricing-strategies",
              },
              {
                pattern: "Technical approach rated Acceptable, winner was Outstanding",
                diagnosis: "Your proposal checks compliance boxes but doesn't demonstrate depth. Generic language is costing you quality ratings.",
                fix: "See how to write a winning technical volume",
                link: "/blog/technical-volume-government-proposal",
              },
              {
                pattern: "Past performance rated lower than expected",
                diagnosis: "Your references aren't aligned to the requirement, or your CPARS narrative doesn't capture what you actually did well.",
                fix: "See how to build your past performance record",
                link: "/blog/past-performance-government-contracts",
              },
              {
                pattern: "Cut from competitive range early",
                diagnosis: "A requirement you missed or misunderstood is eliminating you before evaluation even reaches price and past performance.",
                fix: "See how to build a compliance matrix",
                link: "/blog/government-proposal-compliance-matrix",
              },
            ].map(({ pattern, diagnosis, fix, link }) => (
              <div
                key={pattern}
                className="bg-stone-50 border border-stone-200 rounded-xl p-5 hover-lift"
              >
                <div className="flex items-start gap-2 mb-2">
                  <BarChart2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                  <div className="font-bold text-stone-800 text-sm">{pattern}</div>
                </div>
                <p className="text-stone-600 text-xs leading-relaxed mb-3">{diagnosis}</p>
                <Link href={link} className="text-blue-600 hover:underline text-xs font-medium">
                  {fix} →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            One debriefing gives you a data point. Three or four debriefings give you a pattern.
            Ten debriefings tell you exactly where your proposal process is systematically weak —
            and that&rsquo;s the information that changes your win rate.
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            Feed debriefing findings directly into your{" "}
            <Link
              href="/blog/capture-management-process"
              className="text-blue-600 hover:underline font-medium"
            >
              capture management process
            </Link>
            . When a new opportunity comes in, the first question isn&rsquo;t just &ldquo;can we
            win this?&rdquo; but &ldquo;are the same weaknesses that hurt us last time still
            present?&rdquo; If yes, either fix them before bidding or make the no-bid call honestly.
          </p>
        </div>

        {/* Section 10 */}
        <div className="animate-on-scroll">
          <SectionHeading
            id="build-the-loop"
            number="10"
            title="Building a Continuous Feedback Loop"
          />

          <p className="text-stone-700 leading-relaxed mb-4">
            The most competitive small business contractors treat every proposal as part of a
            learning system, not a one-off event. Debriefings are the feedback mechanism that
            makes that system work.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            Set this standard in your company: every proposal loss gets a debriefing request, and
            every debriefing result gets logged in a shared document. That document is the basis
            of your quarterly proposal review — a session where your leadership team looks at
            what you won, what you lost, and what the debriefing feedback said about why.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-6 my-8 animate-on-scroll">
            <h3 className="font-bold text-stone-800 mb-4">The Proposal Feedback Loop</h3>
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "Submit Proposal", icon: FileText },
                  { step: "2", title: "Request Debriefing", icon: MessageSquare },
                  { step: "3", title: "Log Findings", icon: CheckSquare },
                  { step: "4", title: "Apply to Next Bid", icon: TrendingUp },
                ].map(({ step, title, icon: Icon }) => (
                  <div key={step} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="text-xs font-bold text-indigo-700">Step {step}</div>
                    <div className="text-xs text-stone-600 mt-0.5">{title}</div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-indigo-200" />
            </div>
            <p className="text-xs text-stone-500 text-center mt-4">
              Each loop tightens the gap between what you submit and what evaluators reward.
            </p>
          </div>

          <p className="text-stone-700 leading-relaxed mb-4">
            The contractors who consistently improve their{" "}
            <Link
              href="/blog/pwin-probability-of-win"
              className="text-blue-600 hover:underline font-medium"
            >
              probability of win
            </Link>{" "}
            over time aren&rsquo;t necessarily smarter or better resourced. They&rsquo;re more
            disciplined about learning from losses. A company that bids 20 contracts and requests
            debriefings on every loss will outlearn a company that bids the same 20 contracts
            and skips the debrief.
          </p>

          <p className="text-stone-700 leading-relaxed mb-4">
            There&rsquo;s also a relationship dimension. Contracting officers notice contractors
            who take debriefings seriously. Showing up prepared, asking good questions, and clearly
            using the feedback to improve signals that you&rsquo;re a serious player in their
            space. That reputation matters when you&rsquo;re in a competitive range on the next
            solicitation. For more on building those relationships, see our guide to{" "}
            <Link
              href="/blog/contracting-officer-relationship"
              className="text-blue-600 hover:underline font-medium"
            >
              working with contracting officers
            </Link>
            .
          </p>

          <Callout icon={RefreshCw} color="emerald" title="What Good Looks Like After 12 Months of Consistent Debriefings">
            <ul className="space-y-1.5">
              {[
                "You know your technical approach has a recurring weakness in transition planning — and you've fixed it",
                "You know your past performance citations aren't mapping well to DoD requirements — and you've built stronger references",
                "You know your price is consistently 8-12% above the winner in LPTA competitions — and you've analyzed whether your cost structure can be tightened",
                "You have a clear view of which agencies give useful debriefings and which don't — and you weight your pipeline accordingly",
                "Your proposal team has a shared vocabulary for what 'Outstanding' means in practice, not just on paper",
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Callout>

          <p className="text-stone-700 leading-relaxed mb-6">
            Your{" "}
            <Link
              href="/features/pipeline"
              className="text-blue-600 hover:underline font-medium"
            >
              proposal pipeline
            </Link>{" "}
            is only as good as the feedback that feeds back into it. Debriefings are the cheapest,
            fastest, most authoritative source of that feedback — and you have a legal right to
            them. Use it every time.
          </p>
        </div>

        {/* Conclusion CTA */}
        <div className="bg-gradient-to-r from-stone-900 to-indigo-900 rounded-2xl p-8 my-10 text-white animate-on-scroll">
          <div className="flex items-start gap-4">
            <Layers className="w-8 h-8 flex-shrink-0 mt-1 text-indigo-300" />
            <div>
              <h3 className="font-black text-xl mb-2">
                Turn Every Loss Into Your Next Win
              </h3>
              <p className="text-stone-300 mb-4 text-sm">
                CapturePilot tracks your pipeline, captures proposal history, and surfaces the
                competitive intelligence you need to walk into your next bid stronger than the last.
                Book a strategy call to see how it works for your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-white text-stone-900 font-bold px-5 py-2.5 rounded-lg hover:bg-stone-100 transition-colors text-sm"
                >
                  Book a strategy call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/features/proposals"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-indigo-500 transition-colors text-sm"
                >
                  See proposal features <ArrowRight className="w-4 h-4" />
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
                href: "/blog/government-contract-protest",
                title: "Government Contract Protests: When, Why, and How to File One",
                category: "Advanced",
              },
              {
                href: "/blog/past-performance-government-contracts",
                title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
                category: "Proposals",
              },
              {
                href: "/blog/technical-volume-government-proposal",
                title: "Writing a Winning Technical Volume for Government Proposals",
                category: "Proposals",
              },
              {
                href: "/blog/bid-no-bid-decision-framework",
                title: "The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits",
                category: "Strategy",
              },
            ].map(({ href, title, category }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-stone-50 hover:bg-indigo-50 border border-stone-100 hover:border-indigo-200 rounded-xl p-5 transition-all hover-lift"
              >
                <div className="text-xs font-semibold text-indigo-600 mb-2">{category}</div>
                <div className="text-sm font-semibold text-stone-800 group-hover:text-indigo-700 leading-snug">
                  {title}
                </div>
                <div className="flex items-center gap-1 mt-3 text-xs text-indigo-500 font-medium">
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
