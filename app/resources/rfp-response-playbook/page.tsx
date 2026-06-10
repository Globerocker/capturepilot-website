"use client";

import LeadMagnetPage from "@/app/resources/_components/LeadMagnetPage";

export default function RfpResponsePlaybookPage() {
  return (
    <LeadMagnetPage
      slug="rfp-response-playbook"
      assetTitle="Federal RFP Response Playbook (the 30-day proposal calendar)"
      assetFileName="FLK_03_RFP_Response_Playbook.pdf"
      hubspotSource="lead-magnet-rfp-response-playbook"
      seo={{
        title: "RFP Response Template: Federal Proposal Calendar",
        description:
          "Free 18-page federal RFP response guide covering Section L/M, compliance matrix, win themes, color-team reviews, and a 30-day proposal calendar. Built for first-time bidders.",
        keyword: "rfp response template",
      }}
      hero={{
        headline: "The 30-Day Calendar for Responding to a Federal RFP",
        subheadline:
          "Most first-time bidders lose before they write a word — they skip the compliance matrix, guess at Section M, and submit the night before. This walks you through the whole thing, day by day.",
        bullets: [
          "Compliance matrix template built from Section L/M requirements",
          "Day-by-day 30-day proposal calendar with owner assignments",
          "Win themes and color-team review schedule that pros actually use",
          "Submission checklist — nothing gets forgotten on deadline day",
        ],
        pageCount: 18,
        format: "PDF",
      }}
      whatsInside={[
        "How to read Section L (instructions) and Section M (evaluation criteria) before you write a single word",
        "A compliance matrix template — map every 'shall' statement to a proposal section and page number",
        "Win theme development: how to pick 3-5 discriminators and ghost them through the entire proposal",
        "The 30-day proposal calendar broken into four phases: kickoff, pink team, red team, and gold team",
        "Color team review instructions — what each review is supposed to catch and who should run it",
        "Key personnel resume formatting that evaluators actually want (not a LinkedIn export)",
        "Past performance narrative template: dollar amount, agency, scope relevance, measurable outcomes",
        "Pricing volume checklist: CLINs, basis of estimate, indirect rates, and small business subcontracting plan triggers",
        "Submission-day checklist: file naming conventions, portal upload steps, receipt confirmation",
        "Common non-compliance traps that get otherwise-good proposals eliminated on first pass",
      ]}
      whyItExists={`I built this after watching a well-qualified firm lose a $2.1M IT services contract because their compliance matrix was three lines long and their Section L response skipped two mandatory attachments. The evaluators didn't even get to the technical volume.\n\nThe frustrating part is that the solicitation told them exactly what to do. Section L has the instructions. Section M has the scoring weights. Everything you need to build a compliant, competitive proposal is in the document — but nobody teaches you how to read it. Most first-time bidders skip to the scope of work and start writing. That's backwards.\n\nThis playbook is the process I wish someone had handed me in year one. It's not theoretical. It's the actual sequence — from the day you receive the RFP to the hour you confirm receipt with the contracting officer. Follow it the first time and you'll spend less time on revisions and more time writing the parts that actually win.`}
      whoThisIsFor={[
        "Small business owners pursuing their first or second federal contract and not sure how proposal color teams work",
        "SDVOSB, WOSB, or 8(a) firms who've been bidding but keep losing at evaluation — and don't know why",
        "Teaming partners who need to contribute a proposal section and want to understand the process the prime is running",
        "Companies with solid past performance and real capabilities who keep submitting generic responses",
        "In-house writers who've never worked inside a formal SHIPLEY or APMP process but need to run one",
        "Founders who know they can deliver the work but keep running out of time before the deadline",
      ]}
      whoItIsnt={[
        "8(a) firms with 5+ years of past performance and a dedicated BD team — you're past this stage and should be building a proposal library, not learning the basics",
        "Large primes or ODC-heavy contractors whose proposals run 200+ pages and need volume managers and a dedicated pricing shop",
        "Anyone looking for a fill-in-the-blank template that writes the proposal for them — this is a process guide, not a ghostwriter",
        "Companies whose real problem is win strategy and competitive intelligence, not proposal structure (that's a different playbook)",
      ]}
      exampleSnippet={`Your compliance matrix is the first thing a Pink Team reviewer should check — before reading a single word of your technical approach. If a requirement listed in Section L doesn't map to a row in the matrix, you either answered it somewhere you can't find or you missed it entirely. Either way, the evaluator won't go looking for it. They'll mark it non-responsive.`}
      faqs={[
        {
          q: "Is this really free?",
          a: "Yes. No credit card, no trial, no catch. Enter your name and email, and we'll send it straight to your inbox. We build these guides to help small businesses compete — and because most of the people who download them end up becoming CapturePilot users eventually, which works out fine for everyone.",
        },
        {
          q: "How long is the PDF?",
          a: "18 pages. Long enough to be useful, short enough to read in one sitting. We didn't pad it with boilerplate — every section is something you'll actually reference during proposal prep.",
        },
        {
          q: "Will you spam me after I download it?",
          a: "No. You'll get the PDF plus an occasional email when we publish something new worth reading. You can unsubscribe any time, and we don't sell or share your information.",
        },
        {
          q: "Is it current for FY2026?",
          a: "Yes. We reviewed and updated it in early 2026 to reflect current SAM.gov procedures, SBA size standard thresholds, and any FAR/DFARS changes that affect small business proposals. The compliance matrix and calendar framework don't change much year to year, but the dollar thresholds and subcontracting plan triggers do.",
        },
        {
          q: "What if I haven't registered on SAM.gov yet?",
          a: "The playbook assumes you're registered and have an active UEI and CAGE code. If you're not yet registered, start there first — registration takes 7-10 business days and you can't be awarded a federal contract without it. Our SAM.gov walkthrough guide covers that process, and it's also free.",
        },
        {
          q: "Can I share this with my team?",
          a: "Absolutely. Share the PDF with anyone involved in your proposal effort — writers, reviewers, key personnel who need to fill out resumes, your pricing lead. The only thing we ask is that you don't sell it or rebrand it as your own material.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF. If you want to go further, you can create a free CapturePilot account to match your profile against live federal opportunities, generate AI proposal drafts, and track your pipeline. That's a separate thing — downloading the guide doesn't start a trial or sign you up for anything automatically.",
        },
      ]}
    />
  );
}
