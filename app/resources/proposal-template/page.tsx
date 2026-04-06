"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  FileText,
  ChevronDown,
  ChevronUp,
  Star,
  AlertTriangle,
  Lightbulb,
  Shield,
  Users,
  DollarSign,
  BarChart3,
  Award,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Target,
  Mail,
  Briefcase,
  Building2,
  ListChecks,
  ClipboardCheck,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

/* ------------------------------------------------------------------ */
/*  Volume data                                                        */
/* ------------------------------------------------------------------ */

interface ProTip {
  type: "include" | "mistake" | "tip";
  text: string;
}

interface VolumeSection {
  volume: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  includes: string[];
  mistakes: string[];
  tips: string[];
}

const VOLUMES: VolumeSection[] = [
  {
    volume: "Volume I",
    title: "Cover Letter & Executive Summary",
    icon: <Mail className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description:
      "Your cover letter is the first thing evaluators read. It sets the tone for your entire proposal and should immediately communicate why you're the best choice.",
    includes: [
      "Company name, address, DUNS/UEI number, and CAGE code",
      "Solicitation number and title — exactly as stated",
      "Authorized representative name, title, and signature",
      "One-paragraph executive summary of your technical approach",
      "Your single most compelling differentiator or win theme",
      "Contract type acknowledgment and period of performance",
      "Statement of compliance with all terms and conditions",
    ],
    mistakes: [
      "Using a generic template without tailoring to the specific solicitation",
      "Exceeding one page — cover letters should be concise and impactful",
      "Forgetting to reference all amendments to the solicitation",
      "Making claims without evidence (e.g., 'industry leader' without proof)",
    ],
    tips: [
      "Mirror the government's language from the SOW in your summary",
      "Include a compliance statement: 'We have reviewed all requirements and confirm full compliance'",
      "Have your authorized signer ready — last-minute signature chases kill proposals",
    ],
  },
  {
    volume: "Volume II",
    title: "Technical Approach",
    icon: <Target className="w-6 h-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description:
      "The technical volume is typically the highest-weighted evaluation factor. This is where you prove you understand the problem and have a superior solution.",
    includes: [
      "Understanding of the requirement — prove you get the mission",
      "Technical approach for each SOW task, with specific methodologies",
      "Innovation or value-added features beyond minimum requirements",
      "Risk identification and mitigation strategies",
      "Quality control/assurance plan with measurable metrics",
      "Transition plan (if replacing an incumbent)",
      "Phase-in/phase-out schedule with milestones",
      "Tools, technologies, and processes you'll use",
    ],
    mistakes: [
      "Simply restating the SOW requirements without showing HOW you'll execute",
      "Being too generic — evaluators want specifics, not buzzwords",
      "Ignoring evaluation sub-factors — address each one explicitly",
      "Not including graphics, charts, or visuals to support your narrative",
      "Forgetting the transition plan — this is often a scored element",
    ],
    tips: [
      "Use a 'ghost the competition' strategy: highlight your strengths that are your competitors' weaknesses",
      "Include at least one graphic per major section — evaluators read dozens of proposals and visuals stand out",
      "Write to the evaluation criteria, not the SOW. The criteria tell you what gets scored",
      "Use action verbs and specific metrics: 'We will deploy 5 technicians within 72 hours' not 'We have resources available'",
    ],
  },
  {
    volume: "Volume III",
    title: "Past Performance",
    icon: <Award className="w-6 h-6" />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    description:
      "Past performance is your proof that you can deliver. The government uses it to predict your future performance. Quality references that respond promptly are worth their weight in gold.",
    includes: [
      "3-5 relevant contract references (check solicitation for exact number)",
      "Contract number, value, period of performance, and agency",
      "Client POC name, title, phone, and email (verified current)",
      "Relevance narrative: how each reference maps to this requirement",
      "Scope similarity: size, complexity, and type of work",
      "Performance metrics and quantifiable achievements",
      "Any CPARS/PPIRS ratings if available and favorable",
    ],
    mistakes: [
      "Listing references you haven't contacted — they may give a neutral or negative review",
      "Including irrelevant contracts just to fill the requirement",
      "Using outdated POC information — if the government can't reach them, it counts against you",
      "Not explaining relevance — make the evaluator's job easy by drawing clear parallels",
    ],
    tips: [
      "Call every reference before submission and brief them on the opportunity",
      "If you lack direct experience, use subcontractor past performance (if allowed by the solicitation)",
      "Highlight on-time, on-budget delivery and any performance awards or commendations",
      "Include a brief 'Relevance Matrix' showing how each reference maps to key requirements",
    ],
  },
  {
    volume: "Volume IV",
    title: "Management Plan & Key Personnel",
    icon: <Users className="w-6 h-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    description:
      "The management volume shows you have the organizational structure, leadership, and processes to execute the contract. Key personnel resumes are often individually scored.",
    includes: [
      "Organizational chart showing reporting structure and government interfaces",
      "Key personnel resumes (typically Project Manager, Technical Lead, QA Manager)",
      "Staffing plan with labor categories, FTEs, and ramp-up schedule",
      "Management approach: communication, reporting, escalation procedures",
      "Subcontractor management plan (if using subs)",
      "Facilities, equipment, and security clearance descriptions",
      "Succession plan for key personnel",
    ],
    mistakes: [
      "Naming key personnel you can't commit — the government expects availability",
      "Generic org charts that don't show the actual project structure",
      "Resumes that don't demonstrate relevant experience for this specific contract",
      "Not addressing how you'll handle personnel turnover",
    ],
    tips: [
      "Tailor each resume to emphasize experience directly relevant to this contract",
      "Include Letters of Commitment for key personnel, especially subcontractor staff",
      "Show a clear chain of command from your project manager to the government COR/COTR",
      "If key personnel have security clearances, mention them prominently",
    ],
  },
  {
    volume: "Volume V",
    title: "Pricing & Cost Proposal",
    icon: <DollarSign className="w-6 h-6" />,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    description:
      "The cost volume must be complete, accurate, and competitive. The government evaluates price for reasonableness and realism — too high loses, too low raises red flags.",
    includes: [
      "Fully loaded labor rates by labor category and contract year",
      "Indirect rate structure: fringe, overhead, G&A, profit",
      "Other Direct Costs (ODCs): travel, materials, equipment",
      "Cost breakdown by CLIN (Contract Line Item Number)",
      "Basis of estimate for all cost elements",
      "Escalation rates for multi-year contracts",
      "Completed Standard Forms (SF-1449, etc.) and representations",
      "Small business subcontracting plan (if over $750K and not small business set-aside)",
    ],
    mistakes: [
      "Math errors — these signal carelessness and create evaluation headaches",
      "Pricing too low to actually perform — the government will question realism",
      "Not including all required CLINs or pricing elements from Section B",
      "Inconsistent rates between your technical and cost volumes",
    ],
    tips: [
      "Research comparable contracts on USASpending.gov and FPDS for price benchmarking",
      "Ensure your indirect rates are consistent with your most recent financial statements",
      "Include a 'Basis of Estimate' narrative explaining how you derived each major cost",
      "Triple-check all math — use formulas in your spreadsheet, never type calculated values",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Animated document mockup                                           */
/* ------------------------------------------------------------------ */

function DocumentMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative max-w-sm mx-auto">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xl p-6 space-y-3">
        {VOLUMES.map((vol, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-500 ${vol.borderColor} ${vol.bgColor}`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div className={vol.color}>{vol.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">
                {vol.volume}
              </p>
              <p className="text-sm font-bold text-stone-800 truncate">
                {vol.title}
              </p>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Volume Expandable Section                                          */
/* ------------------------------------------------------------------ */

function VolumeCard({ vol, index }: { vol: VolumeSection; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
        expanded ? vol.borderColor + " shadow-lg" : "border-stone-200"
      }`}
    >
      <button
        className="w-full text-left p-6 flex items-start gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div
          className={`p-3 rounded-xl flex-shrink-0 ${vol.bgColor} ${vol.color}`}
        >
          {vol.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-1">
            {vol.volume}
          </p>
          <h3 className="text-xl font-black text-stone-900 mb-2">
            {vol.title}
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            {vol.description}
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-stone-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-stone-400" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-6">
          {/* What to include */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <h4 className="font-bold text-stone-800">What to Include</h4>
            </div>
            <div className="space-y-2">
              {vol.includes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 pl-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-stone-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <h4 className="font-bold text-stone-800">Common Mistakes</h4>
            </div>
            <div className="space-y-2">
              {vol.mistakes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 bg-red-50 rounded-lg"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro tips */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h4 className="font-bold text-stone-800">Pro Tips</h4>
            </div>
            <div className="space-y-2">
              {vol.tips.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg"
                >
                  <Star className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-stone-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function ProposalTemplatePage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-stone-50 via-white to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  Free Template Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-6">
                  The Anatomy of a{" "}
                  <span className="text-emerald-600">Winning Government Proposal</span>
                </h1>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  A complete structural guide to every section the government
                  expects in your proposal. What to include, what to avoid, and
                  how winning contractors stand out from the stack.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="#volumes"
                    className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Explore the Template
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={SIGNUP_URL}
                    className="bg-white text-stone-800 px-8 py-3.5 rounded-full font-bold border border-stone-200 hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Try AI Proposal Writer
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <DocumentMockup />
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="py-12 px-6 bg-white border-y border-stone-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "5", label: "Core Volumes" },
                { stat: "35+", label: "Required Elements" },
                { stat: "20+", label: "Pro Tips Included" },
                { stat: "100%", label: "Free to Use" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-stone-900">{s.stat}</p>
                  <p className="text-sm text-stone-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before you start */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-stone-900 mb-4 text-center">
              Before You Start Writing
            </h2>
            <p className="text-stone-600 text-center mb-8 max-w-xl mx-auto">
              Every winning proposal starts with preparation. Complete these
              prerequisites before you write a single word.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FileText className="w-5 h-5 text-blue-500" />,
                  title: "Read the entire solicitation",
                  desc: "Including all attachments, amendments, and Q&A responses. Twice.",
                },
                {
                  icon: <ListChecks className="w-5 h-5 text-emerald-500" />,
                  title: "Build your compliance matrix",
                  desc: "Map every requirement to a proposal section before writing begins.",
                },
                {
                  icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
                  title: "Research the competition",
                  desc: "Check USASpending for incumbent data and contract history.",
                },
                {
                  icon: <Users className="w-5 h-5 text-purple-500" />,
                  title: "Assemble your team",
                  desc: "Identify writers, reviewers, key personnel, and your Red Team.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200"
                >
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="font-bold text-stone-800 text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volume breakdown */}
        <section id="volumes" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                Proposal Structure — Volume by Volume
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto">
                Click each volume to expand detailed guidance. Every section
                includes what to include, common mistakes, and insider tips from
                experienced proposal managers.
              </p>
            </div>

            <div className="space-y-4">
              {VOLUMES.map((vol, i) => (
                <VolumeCard key={i} vol={vol} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Proposal timeline */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-stone-900 mb-8 text-center">
              Typical Proposal Timeline
            </h2>
            <div className="space-y-0">
              {[
                {
                  day: "Day 1-2",
                  task: "Bid/No-Bid Decision",
                  detail: "Review solicitation, assess win probability, decide whether to pursue.",
                  color: "bg-blue-500",
                },
                {
                  day: "Day 2-4",
                  task: "Kickoff & Planning",
                  detail: "Build compliance matrix, assign sections, create outline and schedule.",
                  color: "bg-emerald-500",
                },
                {
                  day: "Day 4-14",
                  task: "Writing (Pink Team Draft)",
                  detail: "Authors write first drafts. Pink team review at 50% to check compliance.",
                  color: "bg-amber-500",
                },
                {
                  day: "Day 14-21",
                  task: "Revision & Red Team",
                  detail: "Incorporate feedback, polish drafts. Red team scores against eval criteria.",
                  color: "bg-purple-500",
                },
                {
                  day: "Day 21-25",
                  task: "Gold Team & Final",
                  detail: "Executive review. Final edits, formatting, compliance check, pricing lock.",
                  color: "bg-rose-500",
                },
                {
                  day: "Day 26-28",
                  task: "Production & Submission",
                  detail: "Package, final QA, submit 24+ hours early. Confirm receipt.",
                  color: "bg-stone-700",
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${step.color} flex-shrink-0`}
                    />
                    {i < 5 && (
                      <div className="w-0.5 h-16 bg-stone-200" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">
                      {step.day}
                    </p>
                    <p className="font-bold text-stone-900">{step.task}</p>
                    <p className="text-sm text-stone-600">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-stone-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Skip the Blank Page
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Let AI Build Your Proposal Structure
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              CapturePilot reads the solicitation, maps every requirement, and
              generates a compliant proposal outline with pre-written sections
              you can customize. Hours of work, done in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/features/proposals"
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                See AI Proposal Writer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={SIGNUP_URL}
                className="bg-white text-stone-800 px-8 py-3.5 rounded-full font-bold border border-stone-200 hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-stone-900 mb-8 text-center">
              More Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: "/resources/bid-checklist",
                  icon: <ClipboardCheck className="w-5 h-5 text-blue-600" />,
                  title: "Government Bid Checklist",
                  desc: "17 steps to never miss a requirement on your next bid.",
                },
                {
                  href: "/resources/quick-checker-guide",
                  icon: <Target className="w-5 h-5 text-emerald-600" />,
                  title: "Eligibility Quick Check",
                  desc: "Find out if your business qualifies for federal contracts.",
                },
                {
                  href: "/resources/capability-statement",
                  icon: <Shield className="w-5 h-5 text-purple-600" />,
                  title: "Capability Statement",
                  desc: "Build the one-page document every agency expects to see.",
                },
              ].map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all group"
                >
                  <div className="mb-3">{r.icon}</div>
                  <h3 className="font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-stone-500">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
