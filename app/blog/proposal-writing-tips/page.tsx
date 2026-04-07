"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, AlertTriangle, Lightbulb,
  Hash, BookOpen, ChevronRight, Target, Globe, Sparkles,
  Shield, FileText, Briefcase, Zap, Award, Building2,
  BadgeCheck, Clock, Search, Eye, BookCheck, PenTool,
  MessageSquare, BarChart3, DollarSign, ClipboardList,
  Users, Send, Brain, List,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

/* --- Table of Contents --- */
const TOC = [
  { id: "tip-1", label: "1. Read the Solicitation Three Times" },
  { id: "tip-2", label: "2. Answer Every Evaluation Criterion" },
  { id: "tip-3", label: "3. Use Their Language, Not Yours" },
  { id: "tip-4", label: "4. Lead with Benefits, Not Features" },
  { id: "tip-5", label: "5. Include Proof and Metrics" },
  { id: "tip-6", label: "6. Price to Win" },
  { id: "tip-7", label: "7. Build a Compliance Matrix" },
  { id: "tip-8", label: "8. Get an Outside Review" },
  { id: "tip-9", label: "9. Submit Early" },
  { id: "tip-10", label: "10. Use AI to Draft, Humans to Polish" },
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
export default function ProposalWritingTipsPage() {
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
            <span className="text-stone-900 font-medium">Proposal Writing Tips</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <PenTool className="w-4 h-4" /> Playbook
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            10 Government Proposal Writing Tips That{" "}
            <span className="gradient-text">Actually Win</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            Most government proposals lose not because the company can&apos;t do the work, but because
            the proposal didn&apos;t communicate it properly. These 10 tips are the difference between
            &quot;technically acceptable&quot; and &quot;outstanding.&quot;
          </p>

          <div className="flex items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>By <strong className="text-stone-600">CapturePilot Team</strong></span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
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

          {/* --- Tip 1 --- */}
          <SectionHeading id="tip-1" number="01" title="Read the Solicitation Three Times" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  The number one reason proposals get eliminated is <strong>non-compliance</strong> &mdash;
                  failing to follow the solicitation&apos;s instructions. Not because the company can&apos;t
                  do the work, but because they didn&apos;t read the RFP carefully enough.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Read it three times with three different lenses:
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { read: "First read: Big picture", desc: "Understand the scope, timeline, and what the agency really needs. Don't take notes yet — just absorb the overall requirement." },
                { read: "Second read: Requirements extraction", desc: "Highlight every requirement, evaluation criterion, submission instruction, and compliance standard. Build a checklist from this pass." },
                { read: "Third read: Compliance check", desc: "Cross-reference your checklist against your draft outline. Can you respond to every requirement? Are there any deal-breakers? This is your bid/no-bid decision point." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100 animate-on-scroll">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-emerald-700">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.read}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 animate-on-scroll">
              <p className="text-sm text-amber-800">
                <strong>Example:</strong> An RFP says &quot;Submit Volume 1 as a separate PDF, maximum
                15 pages, 12pt Times New Roman, 1-inch margins.&quot; Submit it as 16 pages in Arial?
                Disqualified. These rules exist to test whether you can follow instructions before
                they trust you with taxpayer money.
              </p>
            </div>
          </div>

          {/* --- Tip 2 --- */}
          <SectionHeading id="tip-2" number="02" title="Answer Every Evaluation Criterion" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <BookCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Every solicitation includes <strong>evaluation criteria</strong> &mdash; the specific
                  factors the agency will use to score your proposal. These are listed in Section M
                  (Evaluation Criteria) or in the instructions to offerors.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Your proposal must explicitly address <strong>every single criterion</strong>. Not
                  &quot;implicitly.&quot; Not &quot;we assume they&apos;ll understand.&quot; Explicitly.
                  If the RFP lists five evaluation factors, your proposal should have five clearly
                  labeled sections that map directly to those factors.
                </p>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mb-6 animate-on-scroll">
              <p className="text-sm text-sky-800">
                <strong>Example:</strong> If the evaluation criteria says &quot;Demonstrate experience
                with cloud migration for federal agencies,&quot; don&apos;t write a generic paragraph
                about your IT capabilities. Write: &quot;Our team migrated 14 legacy systems to AWS
                GovCloud for the VA, achieving 99.99% uptime and reducing infrastructure costs by 40%.
                Project Lead Jane Smith has 12 years of federal cloud migration experience across
                DoD and civilian agencies.&quot;
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed">
              Evaluators use a scorecard. They literally go criterion by criterion and assign points.
              If they can&apos;t find your response to a criterion, you get zero points for it &mdash;
              even if your company is perfectly qualified.
            </p>
          </div>

          <Callout icon={Lightbulb} color="emerald" title="Structure Hack">
            Use the exact language from the evaluation criteria as your proposal section headers. If
            the RFP says &quot;Factor 2: Technical Approach,&quot; your proposal section should be titled
            &quot;Factor 2: Technical Approach.&quot; Make the evaluator&apos;s job easy.
          </Callout>

          {/* --- Tip 3 --- */}
          <SectionHeading id="tip-3" number="03" title="Use Their Language, Not Yours" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Government proposals are not the place for creative marketing language. The evaluator
                  is scanning for specific words and concepts from the solicitation. If the RFP says
                  &quot;custodial services,&quot; don&apos;t write &quot;janitorial solutions.&quot;
                  Mirror their terminology exactly.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  This goes beyond individual words. Study the Performance Work Statement (PWS) or
                  Statement of Work (SOW). Note the verbs they use, the metrics they reference,
                  the outcomes they describe. Then reflect those back in your proposal.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { bad: "We provide world-class cleaning solutions", good: "Our team delivers custodial services per ISSA CIMS standards" },
                { bad: "Our innovative AI platform", good: "Our NIST 800-53 compliant monitoring system" },
                { bad: "We are passionate about excellence", good: "We have maintained 99.7% CPARS ratings across 8 federal contracts" },
              ].map((item, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-t-xl">
                    <p className="text-xs font-bold text-red-600 mb-1">DON&apos;T</p>
                    <p className="text-sm text-red-800 italic">&quot;{item.bad}&quot;</p>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-200 border-t-0 rounded-b-xl">
                    <p className="text-xs font-bold text-emerald-600 mb-1">DO</p>
                    <p className="text-sm text-emerald-800 italic">&quot;{item.good}&quot;</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Evaluators are subject matter experts, not marketing professionals. They respond to
              precision, specificity, and evidence &mdash; not superlatives and buzzwords.
            </p>
          </div>

          {/* --- Tip 4 --- */}
          <SectionHeading id="tip-4" number="04" title="Lead with Benefits, Not Features" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Every paragraph in your proposal should answer the evaluator&apos;s unspoken question:
                  <strong> &quot;So what? Why does this matter to my agency?&quot;</strong>
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Don&apos;t just list what your team can do. Explain the outcome for the agency.
                  Features describe your company. Benefits describe what the government gets.
                  Evaluators care about what they get.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                {
                  feature: "Our team includes 12 certified project managers",
                  benefit: "Our 12 certified PMs ensure every deliverable is on-time and within budget — we've achieved 100% on-time delivery across our last 6 federal contracts, saving agencies an average of $340K in schedule delay costs.",
                },
                {
                  feature: "We use automated monitoring tools",
                  benefit: "Our automated monitoring detects security threats in under 30 seconds, reducing incident response time by 85% compared to manual monitoring — directly supporting your agency's continuous ATO requirements.",
                },
              ].map((item, i) => (
                <div key={i} className="animate-on-scroll">
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-t-xl">
                    <p className="text-xs font-bold text-stone-400 mb-1">FEATURE (Weak)</p>
                    <p className="text-sm text-stone-600">{item.feature}</p>
                  </div>
                  <div className="p-3 bg-emerald-50 border border-emerald-200 border-t-0 rounded-b-xl">
                    <p className="text-xs font-bold text-emerald-600 mb-1">BENEFIT (Strong)</p>
                    <p className="text-sm text-emerald-800">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Tip 5 --- */}
          <SectionHeading id="tip-5" number="05" title="Include Proof and Metrics" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Claims without evidence are just marketing. In government proposals, every claim
                  must be backed by proof. The best proof is <strong>quantified past performance</strong>.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Wherever possible, include specific numbers: dollar values, percentages, timelines,
                  volumes, ratings. &quot;We reduced costs&quot; is weak. &quot;We reduced
                  infrastructure costs by $1.2M (38%) over 18 months&quot; is compelling.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { metric: "$4.2M", label: "Contract value managed successfully", icon: DollarSign },
                { metric: "99.99%", label: "System uptime across all deployments", icon: Award },
                { metric: "14", label: "Legacy systems migrated to cloud", icon: Building2 },
                { metric: "40%", label: "Cost reduction achieved for client", icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="text-center p-5 bg-stone-50 rounded-2xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-black text-stone-900">{item.metric}</p>
                  <p className="text-xs text-stone-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              If you don&apos;t have federal past performance yet, use commercial projects, subcontracting
              experience, or pro bono work. The key is demonstrating relevant capability with
              measurable results. Even small projects count when framed with concrete metrics.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="CPARS Reference">
            If you have past federal contracts, reference your CPARS (Contractor Performance Assessment
            Reporting System) ratings. &quot;Rated Exceptional in all five evaluation areas on Contract
            FA8501-22-C-0045&quot; is the strongest proof you can include.
          </Callout>

          {/* --- Tip 6 --- */}
          <SectionHeading id="tip-6" number="06" title="Price to Win" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  &quot;Price to win&quot; doesn&apos;t mean lowest price. It means pricing your
                  proposal at the level most likely to win, based on the evaluation methodology. Some
                  contracts are &quot;Lowest Price Technically Acceptable&quot; (LPTA) &mdash; for those,
                  the lowest price that meets all requirements wins. Others are &quot;Best Value&quot;
                  &mdash; the government can pay more for a better proposal.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Understand which type you&apos;re bidding on:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-2xl border border-stone-200 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">LPTA Contracts</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-3">
                  Every acceptable proposal is equal. Lowest price wins. Focus on meeting minimum
                  requirements efficiently. Don&apos;t overstaff or over-engineer.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-xs text-amber-800"><strong>Strategy:</strong> Lean team, minimal overhead, competitive labor rates. Every dollar counts.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-stone-200 animate-on-scroll">
                <h3 className="font-bold text-stone-900 mb-2">Best Value Contracts</h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-3">
                  The government evaluates technical quality, past performance, AND price. A slightly
                  higher price with a significantly better technical approach can win.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <p className="text-xs text-emerald-800"><strong>Strategy:</strong> Invest in a strong technical volume. Show innovation and value-add beyond minimum requirements.</p>
                </div>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              Research what the government paid for similar contracts in the past using{" "}
              <strong>USASpending.gov</strong> and <strong>FPDS.gov</strong>. This gives you a realistic
              price range. Never bid so low that you can&apos;t perform profitably &mdash; a contract
              you lose money on is worse than losing the bid.
            </p>
          </div>

          {/* --- Tip 7 --- */}
          <SectionHeading id="tip-7" number="07" title="Build a Compliance Matrix" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  A compliance matrix is a spreadsheet that maps every solicitation requirement to
                  the specific section and page in your proposal where it&apos;s addressed. This is
                  your single most important quality control tool.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Create it <strong>before you start writing</strong>. List every &quot;shall,&quot;
                  &quot;must,&quot; &quot;will,&quot; and &quot;required&quot; from the solicitation
                  in Column A. Map your response location in Column B. Check it off when written in
                  Column C.
                </p>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden mb-6 animate-on-scroll">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-200">
                      <th className="text-left px-4 py-3 font-bold text-stone-900">RFP Requirement</th>
                      <th className="text-left px-4 py-3 font-bold text-stone-900">Proposal Section</th>
                      <th className="text-left px-4 py-3 font-bold text-stone-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { req: "PWS 3.1: Provide 24/7 help desk support", section: "Vol I, Section 3.1, pg 8", status: "Complete" },
                      { req: "PWS 3.2: Maintain 99.9% system uptime", section: "Vol I, Section 3.2, pg 10", status: "Complete" },
                      { req: "L.5: Include resumes for Key Personnel", section: "Vol II, Appendix A", status: "Draft" },
                      { req: "M.2: Past Performance (3 references)", section: "Vol III, Section 2", status: "Pending" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-stone-100 last:border-0">
                        <td className="px-4 py-3 text-stone-700">{row.req}</td>
                        <td className="px-4 py-3 text-stone-600">{row.section}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            row.status === "Complete" ? "bg-emerald-50 text-emerald-700" :
                            row.status === "Draft" ? "bg-amber-50 text-amber-700" :
                            "bg-stone-100 text-stone-500"
                          }`}>{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              Before submission, every row in your compliance matrix must show &quot;Complete.&quot;
              If even one requirement is unaddressed, you risk non-compliance &mdash; and
              non-compliant proposals are eliminated regardless of quality.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Most Common Disqualification">
            The #1 reason proposals are eliminated is <strong>non-compliance with submission
            instructions</strong> &mdash; not technical quality, not price. Page limits, font sizes,
            file naming conventions, volume structure. The compliance matrix catches these before
            the evaluator does.
          </Callout>

          {/* --- Tip 8 --- */}
          <SectionHeading id="tip-8" number="08" title="Get an Outside Review" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  You are too close to your own proposal to review it objectively. After days of
                  writing, your brain fills in gaps and reads what you intended to say, not what you
                  actually wrote. You need fresh eyes.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  The best proposals go through at least two review gates:
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                {
                  icon: Search, title: "Pink Team Review (Draft Stage)",
                  desc: "A quick review of your outline and initial content. Reviewers check that you're addressing every requirement and that your approach makes sense. This happens at ~50% completion.",
                },
                {
                  icon: BadgeCheck, title: "Red Team Review (Final Draft)",
                  desc: "A thorough review of the near-final proposal. Reviewers score it using the actual evaluation criteria from the solicitation. They act as the government evaluators. This happens at ~90% completion.",
                },
                {
                  icon: Eye, title: "Gold Team Review (Pre-Submission)",
                  desc: "A compliance-only check. Does the proposal meet every submission requirement? Page limits, formatting, file names, required documents. This is the last gate before 'submit.'",
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
              If you&apos;re a small company without a large team, ask a trusted colleague, mentor,
              or PTAC (Procurement Technical Assistance Center) counselor to review. PTAC reviews
              are <strong>free</strong> and available in every state.
            </p>
          </div>

          {/* --- Tip 9 --- */}
          <SectionHeading id="tip-9" number="09" title="Submit Early" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Send className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Submit your proposal at least <strong>24 hours before the deadline</strong>. Not
                  24 minutes. 24 hours. Here&apos;s why:
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { icon: Clock, reason: "System failures happen", desc: "SAM.gov and agency submission portals have outages, especially when hundreds of companies try to submit in the final hour. If the system is down at 4:59 PM and the deadline is 5:00 PM, you're out." },
                { icon: FileText, reason: "File upload issues are common", desc: "Large PDFs fail to upload. File naming conventions are wrong. The portal rejects your zip file. These are fixable problems — but only if you have time." },
                { icon: AlertTriangle, reason: "Late = Disqualified", desc: "The government does not accept late proposals (with extremely rare exceptions). There is no grace period, no 'it was just 2 minutes late,' no appeals process. Late is late." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100 animate-on-scroll">
                  <item.icon className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.reason}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              Early submission also signals professionalism. Contracting officers notice who submits
              early and who scrambles at the last minute. It&apos;s a minor point, but in a tight
              competition, everything matters.
            </p>
          </div>

          <Callout icon={Clock} color="amber" title="Hard Rule">
            Build your internal deadline <strong>48 hours before the actual deadline</strong>. That
            gives you 24 hours for final reviews and 24 hours for submission buffer. Every proposal
            manager who&apos;s missed a deadline by minutes will tell you: the heartbreak isn&apos;t
            worth it.
          </Callout>

          {/* --- Tip 10 --- */}
          <SectionHeading id="tip-10" number="10" title="Use AI to Draft, Humans to Polish" />
          <div className="prose-section">
            <div className="flex gap-4 mb-6 animate-on-scroll">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  AI tools like CapturePilot&apos;s Proposal Writer can dramatically accelerate your
                  proposal process. Instead of staring at a blank page, you start with a structured
                  first draft that addresses every evaluation criterion. Then your team refines it with
                  real past performance, specific metrics, and institutional knowledge.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Here&apos;s the right workflow:
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { step: "1", title: "Feed AI the solicitation", desc: "Upload the RFP, PWS, and evaluation criteria. Let AI parse the requirements and generate a structured outline with section headers mapped to evaluation factors." },
                { step: "2", title: "Generate first draft", desc: "AI writes a response for each evaluation criterion using the solicitation's language and your company profile. This gets you from 0% to 60% in hours instead of days." },
                { step: "3", title: "Add your differentiators", desc: "Replace generic statements with your specific past performance, metrics, key personnel bios, and proprietary methods. This is where human expertise is irreplaceable." },
                { step: "4", title: "Review for compliance", desc: "Run the draft through your compliance matrix. Ensure every 'shall' and 'must' from the solicitation has a clear, traceable response in your proposal." },
                { step: "5", title: "Final human review", desc: "Have a subject matter expert and a proposal professional review the final version. AI drafts the scaffold; humans build the winning argument." },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 animate-on-scroll">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-emerald-700">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                    <p className="text-stone-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed">
              AI doesn&apos;t replace your team. It replaces writer&apos;s block, late nights, and the
              panic of starting from scratch 5 days before the deadline. Use it as a tool, not a crutch.
            </p>
          </div>

          <Callout icon={Zap} color="emerald" title="CapturePilot AI Proposal Writer">
            Our AI reads the solicitation, maps your company profile to each evaluation criterion,
            and generates a structured first draft in minutes. Then you customize it with your real
            experience and metrics.{" "}
            <Link href="/features/proposals" className="font-bold underline hover:no-underline">
              Try the Proposal Writer
            </Link>.
          </Callout>

          {/* --- CTA --- */}
          <div className="scroll-mt-24 pt-12">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 sm:p-14 text-white text-center animate-on-scroll">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Draft Winning Proposals, Faster
              </h2>
              <p className="text-stone-400 text-lg mb-4 max-w-lg mx-auto">
                CapturePilot finds matching opportunities, analyzes the solicitation, and generates
                a structured first draft of your proposal. You add the expertise &mdash; we handle
                the heavy lifting.
              </p>
              <ul className="text-stone-400 text-sm space-y-2 mb-8 max-w-md mx-auto text-left">
                {[
                  "AI reads and maps solicitation requirements",
                  "Generates drafts aligned to evaluation criteria",
                  "Includes compliance matrix template",
                  "Mirrors solicitation language automatically",
                  "Integrates your past performance and metrics",
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
                No credit card required. Start winning proposals today.
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
              <Link href="/blog/capability-statement-guide" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <List className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">Capability Statement Guide</p>
                  <p className="text-xs text-stone-500">Write one that wins contracts</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 ml-auto" />
              </Link>
              <Link href="/blog/naics-codes-explained" className="flex items-center gap-3 p-4 rounded-xl border border-stone-200 hover-lift">
                <Hash className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-stone-900 text-sm">NAICS Codes Explained</p>
                  <p className="text-xs text-stone-500">Find the right codes for your business</p>
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
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
