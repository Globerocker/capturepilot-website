"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Square,
  CheckSquare,
  FileText,
  Search,
  Users,
  DollarSign,
  ClipboardCheck,
  Send,
  AlertTriangle,
  Lightbulb,
  Shield,
  Clock,
  Star,
  Target,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";

/* ------------------------------------------------------------------ */
/*  Checklist data                                                     */
/* ------------------------------------------------------------------ */

interface CheckItem {
  label: string;
  tip: string;
}

interface CheckSection {
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  items: CheckItem[];
}

const PRE_BID: CheckItem[] = [
  {
    label: "Read the full solicitation cover-to-cover",
    tip: "Don't skim. Government RFPs bury critical requirements in appendices and amendments. Print it out, highlight evaluation criteria, and note every single deliverable mentioned.",
  },
  {
    label: "Check set-aside eligibility & certifications",
    tip: "Verify your SAM.gov registration is active and that you qualify for the set-aside type (8(a), SDVOSB, WOSB, HUBZone). If it's full & open, confirm your size standard under the listed NAICS code.",
  },
  {
    label: "Review evaluation criteria & weighting",
    tip: "The evaluation factors tell you exactly how to win. If 'Technical Approach' is 60% and 'Price' is 20%, don't spend all your time on pricing. Mirror the government's priorities in your response.",
  },
  {
    label: "Identify key personnel requirements",
    tip: "Many solicitations require named individuals with specific certifications or clearances. If you don't have them on staff, start recruiting or teaming NOW - not the week before submission.",
  },
  {
    label: "Check past performance requirements",
    tip: "Most contracts require 3-5 relevant past performance references within the last 3-5 years. If you're light on references, consider teaming with a more experienced prime or sub.",
  },
];

const PREPARATION: CheckItem[] = [
  {
    label: "Build a compliance matrix",
    tip: "Create a spreadsheet mapping every single requirement (shall/must/will) to your proposal section and page number. This is your insurance policy against non-compliance - the #1 reason proposals are eliminated.",
  },
  {
    label: "Draft your technical approach",
    tip: "Don't just restate the requirements. Show HOW you'll accomplish each task, what makes your approach unique, and what risks you've identified with mitigations. Use their language from the SOW.",
  },
  {
    label: "Gather past performance narratives",
    tip: "For each reference, document: contract number, value, period, agency, POC, phone, email, and a narrative showing relevance to this opportunity. Contact your references to confirm they'll respond favorably.",
  },
  {
    label: "Calculate pricing with full cost analysis",
    tip: "Include direct labor, indirect rates, ODCs, travel, materials, profit, and escalation for multi-year contracts. Your rates should be defensible - the government will compare against GSA schedules and DCAA rates.",
  },
  {
    label: "Prepare or update capability statement",
    tip: "Your capability statement is your business card to the government. Include core competencies, NAICS codes, certifications, differentiators, and 2-3 past performance highlights. Keep it to 1-2 pages.",
  },
];

const REVIEW: CheckItem[] = [
  {
    label: "Conduct a Red Team review",
    tip: "Have someone who hasn't worked on the proposal read it as if they were the evaluator. Can they find clear answers to every evaluation criterion? Score your own proposal against the eval factors before submission.",
  },
  {
    label: "Run a compliance check against the matrix",
    tip: "Go through your compliance matrix line by line. Every requirement must have a clear, findable response. Missing even one 'shall' statement can make your proposal non-responsive and eliminated on first pass.",
  },
  {
    label: "Verify price reasonableness",
    tip: "Your price should be competitive but not unrealistically low. Check USASpending.gov for similar contract values, review GSA schedule pricing, and ensure your rates cover actual costs plus reasonable profit.",
  },
  {
    label: "Confirm format & page limit requirements",
    tip: "Check font size, margins, page limits, file format (PDF vs Word), naming conventions, and volume separation. Evaluators will NOT read pages beyond the limit - those sections simply won't be scored.",
  },
];

const SUBMISSION: CheckItem[] = [
  {
    label: "Submit at least 24 hours before deadline",
    tip: "SAM.gov and agency portals crash under heavy load near deadlines. Technical difficulties are NOT an acceptable excuse for late submission. The contracting officer has zero flexibility on this.",
  },
  {
    label: "Confirm receipt with the contracting officer",
    tip: "After uploading, email the CO and contract specialist to confirm receipt. Keep the confirmation email. If submitting physically, use a tracked courier and get a signed receipt at the delivery point.",
  },
  {
    label: "Archive a complete copy of your submission",
    tip: "Save the final submitted version (not your working drafts) with timestamps. You'll need this for debriefs, protests, or future proposals. Include all attachments, representations, and certifications.",
  },
];

const SECTIONS: CheckSection[] = [
  {
    title: "Pre-Bid Analysis",
    icon: <Search className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    items: PRE_BID,
  },
  {
    title: "Proposal Preparation",
    icon: <FileText className="w-5 h-5" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    items: PREPARATION,
  },
  {
    title: "Review & Quality",
    icon: <ClipboardCheck className="w-5 h-5" />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    items: REVIEW,
  },
  {
    title: "Submission",
    icon: <Send className="w-5 h-5" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    items: SUBMISSION,
  },
];

/* ------------------------------------------------------------------ */
/*  Checklist Item Component                                           */
/* ------------------------------------------------------------------ */

function ChecklistItem({
  item,
  checked,
  onToggle,
}: {
  item: CheckItem;
  checked: boolean;
  onToggle: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        checked
          ? "border-emerald-200 bg-emerald-50/50"
          : "border-stone-200 bg-white hover:border-stone-300"
      }`}
    >
      <div className="flex items-start gap-3 p-4 cursor-pointer" onClick={onToggle}>
        <button className="mt-0.5 flex-shrink-0 transition-transform duration-200 hover:scale-110">
          {checked ? (
            <CheckSquare className="w-5 h-5 text-emerald-500" />
          ) : (
            <Square className="w-5 h-5 text-stone-400" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <p
            className={`font-medium transition-all duration-300 ${
              checked ? "text-emerald-700 line-through" : "text-stone-800"
            }`}
          >
            {item.label}
          </p>
        </div>
        <button
          className="flex-shrink-0 p-1 text-stone-400 hover:text-stone-600 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
      {expanded && (
        <div className="px-4 pb-4 pl-12">
          <div className="flex items-start gap-2 p-3 bg-stone-50 rounded-lg border border-stone-100">
            <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-stone-600 leading-relaxed">{item.tip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function BidChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const totalItems = SECTIONS.reduce((sum, s) => sum + s.items.length, 0);
  const checkedCount = checkedItems.size;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  function toggleItem(key: string) {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-blue-50 via-white to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <ClipboardCheck className="w-4 h-4" />
              Free Resource
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
              Never Miss a Step on Your{" "}
              <span className="text-blue-600">Next Government Bid</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              The complete government bid checklist used by winning contractors.
              17 critical steps from solicitation review to final submission -
              with expert tips for each one.
            </p>

            {/* Progress bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-stone-500">Your progress</span>
                <span className="font-bold text-stone-800">
                  {checkedCount}/{totalItems} complete
                </span>
              </div>
              <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#checklist"
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start the Checklist
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={CHECK_URL}
                className="bg-white text-stone-800 px-8 py-3.5 rounded-full font-bold border border-stone-200 hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Check Eligibility First
                <Target className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why checklists matter */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
                  stat: "68%",
                  label: "of proposals eliminated",
                  desc: "for non-compliance - missing a single requirement can kill your bid",
                },
                {
                  icon: <Clock className="w-6 h-6 text-amber-500" />,
                  stat: "40+ hours",
                  label: "average proposal effort",
                  desc: "for a typical government RFP response - don't waste it on avoidable mistakes",
                },
                {
                  icon: <Award className="w-6 h-6 text-emerald-500" />,
                  stat: "3x higher",
                  label: "win rate with process",
                  desc: "contractors who follow a structured bid process win significantly more often",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-stone-200 bg-stone-50 text-center"
                >
                  <div className="flex justify-center mb-3">{card.icon}</div>
                  <p className="text-3xl font-black text-stone-900 mb-1">{card.stat}</p>
                  <p className="font-bold text-stone-700 mb-2">{card.label}</p>
                  <p className="text-sm text-stone-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist sections */}
        <section id="checklist" className="py-16 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                The Complete Bid Checklist
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto">
                Click each item to mark it complete. Expand any item for expert
                tips and guidance from experienced government contractors.
              </p>
            </div>

            <div className="space-y-10">
              {SECTIONS.map((section, si) => {
                const sectionChecked = section.items.filter((_, ii) =>
                  checkedItems.has(`${si}-${ii}`)
                ).length;

                return (
                  <div key={si}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg ${section.bgColor} ${section.color}`}
                      >
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-stone-900">
                          {section.title}
                        </h3>
                        <p className="text-sm text-stone-500">
                          {sectionChecked}/{section.items.length} complete
                        </p>
                      </div>
                      {sectionChecked === section.items.length && (
                        <span className="ml-auto text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                          Done
                        </span>
                      )}
                    </div>
                    <div className="space-y-3">
                      {section.items.map((item, ii) => (
                        <ChecklistItem
                          key={ii}
                          item={item}
                          checked={checkedItems.has(`${si}-${ii}`)}
                          onToggle={() => toggleItem(`${si}-${ii}`)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Completion celebration */}
        {progress === 100 && (
          <section className="py-12 px-6 bg-emerald-50 border-y border-emerald-200">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-4">
                <Star className="w-4 h-4" />
                Checklist Complete
              </div>
              <h3 className="text-2xl font-black text-stone-900 mb-3">
                You&apos;re ready to submit!
              </h3>
              <p className="text-stone-600 mb-6">
                You&apos;ve covered every critical step. Now imagine having AI
                handle most of this for you automatically.
              </p>
              <Link
                href={SIGNUP_URL}
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

        {/* Common mistakes */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-stone-900 mb-8 text-center">
              Top 5 Bid Mistakes That Kill Proposals
            </h2>
            <div className="space-y-4">
              {[
                {
                  mistake: "Submitting late or to the wrong portal",
                  fix: "Set a personal deadline 48 hours before the actual due date. Confirm the submission method (email, portal, physical) on day one.",
                },
                {
                  mistake: "Ignoring the evaluation criteria weighting",
                  fix: "Allocate your proposal pages proportionally to the evaluation weights. If technical is 50%, it should get 50% of your focus.",
                },
                {
                  mistake: "Copy-pasting from a previous proposal",
                  fix: "Evaluators can spot generic responses immediately. Tailor every section to the specific solicitation's language and requirements.",
                },
                {
                  mistake: "Weak or unverifiable past performance",
                  fix: "Contact your references before listing them. Provide specific metrics: 'Reduced processing time by 35%' beats 'Performed well.'",
                },
                {
                  mistake: "Pricing without competitive intelligence",
                  fix: "Research incumbent contracts on USASpending.gov. Know what the government has paid before and price within that range.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl border border-stone-200 bg-stone-50"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{item.mistake}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      <span className="font-medium text-emerald-600">Fix: </span>
                      {item.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Work Smarter
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Let AI Handle the Hard Parts
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              CapturePilot automates compliance checks, builds your proposal
              structure, and ensures you never miss a requirement. So you can
              focus on winning, not formatting.
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
              More Resources for Government Contractors
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: "/resources/proposal-template",
                  icon: <BookOpen className="w-5 h-5 text-blue-600" />,
                  title: "Proposal Template Guide",
                  desc: "The anatomy of a winning government proposal, section by section.",
                },
                {
                  href: "/resources/quick-checker-guide",
                  icon: <Search className="w-5 h-5 text-emerald-600" />,
                  title: "Quick Checker Guide",
                  desc: "How to check your eligibility for federal contracts in 30 seconds.",
                },
                {
                  href: "/resources/capability-statement",
                  icon: <Shield className="w-5 h-5 text-purple-600" />,
                  title: "Capability Statement Builder",
                  desc: "Create a professional capability statement the government expects.",
                },
              ].map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all group"
                >
                  <div className="mb-3">{r.icon}</div>
                  <h3 className="font-bold text-stone-900 mb-2 group-hover:text-blue-600 transition-colors">
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
