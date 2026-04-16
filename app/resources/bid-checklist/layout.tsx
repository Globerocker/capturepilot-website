import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Bid Checklist: Never Miss a Step",
  description: "Complete 17-step checklist for government contract bids. Pre-bid, preparation, review, and submission phases covered.",
  keywords: "government bid checklist, federal contract bid steps, RFP checklist, proposal submission checklist, government contract bid process, bid preparation checklist, GovCon checklist",
  alternates: { canonical: "https://www.capturepilot.com/resources/bid-checklist" },
  openGraph: {
    title: "Government Bid Checklist: Never Miss a Step",
    description: "Complete 17-step checklist for government contract bids. Pre-bid, preparation, review, and submission phases covered.",
    url: "https://www.capturepilot.com/resources/bid-checklist",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.capturepilot.com/resources" },
    { "@type": "ListItem", position: 3, name: "Bid Checklist", item: "https://www.capturepilot.com/resources/bid-checklist" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Government Contract Bid Checklist: 17 Steps Across 4 Phases",
  description:
    "Complete checklist for responding to a federal government solicitation — covering pre-bid analysis, proposal preparation, quality review, and submission. Designed to prevent the most common reasons proposals are eliminated on first pass.",
  totalTime: "P21D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Read the full solicitation cover-to-cover",
      text: "Don't skim. Government RFPs bury critical requirements in appendices and amendments. Print it out, highlight evaluation criteria, and note every single deliverable mentioned.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Check set-aside eligibility & certifications",
      text: "Verify your SAM.gov registration is active and that you qualify for the set-aside type (8(a), SDVOSB, WOSB, HUBZone). If it's full & open, confirm your size standard under the listed NAICS code.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Review evaluation criteria & weighting",
      text: "The evaluation factors tell you exactly how to win. If Technical Approach is 60% and Price is 20%, don't spend all your time on pricing. Mirror the government's priorities in your response.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Identify key personnel requirements",
      text: "Many solicitations require named individuals with specific certifications or clearances. If you don't have them on staff, start recruiting or teaming NOW — not the week before submission.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Check past performance requirements",
      text: "Most contracts require 3–5 relevant past performance references within the last 3–5 years. If you're light on references, consider teaming with a more experienced prime or sub.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Build a compliance matrix",
      text: "Create a spreadsheet mapping every single requirement (shall/must/will) to your proposal section and page number. This is your insurance policy against non-compliance — the #1 reason proposals are eliminated.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Draft your technical approach",
      text: "Don't just restate the requirements. Show HOW you'll accomplish each task, what makes your approach unique, and what risks you've identified with mitigations. Use their language from the SOW.",
    },
    {
      "@type": "HowToStep",
      position: 8,
      name: "Gather past performance narratives",
      text: "For each reference, document contract number, value, period, agency, POC, phone, email, and a narrative showing relevance. Contact your references to confirm they'll respond favorably.",
    },
    {
      "@type": "HowToStep",
      position: 9,
      name: "Calculate pricing with full cost analysis",
      text: "Include direct labor, indirect rates, ODCs, travel, materials, profit, and escalation for multi-year contracts. Rates should be defensible against GSA schedules and DCAA rates.",
    },
    {
      "@type": "HowToStep",
      position: 10,
      name: "Prepare or update capability statement",
      text: "Your capability statement is your business card to the government. Include core competencies, NAICS codes, certifications, differentiators, and 2–3 past performance highlights. Keep it to 1–2 pages.",
    },
    {
      "@type": "HowToStep",
      position: 11,
      name: "Conduct a Red Team review",
      text: "Have someone who hasn't worked on the proposal read it as if they were the evaluator. Can they find clear answers to every evaluation criterion? Score your own proposal against the eval factors.",
    },
    {
      "@type": "HowToStep",
      position: 12,
      name: "Run a compliance check against the matrix",
      text: "Go through your compliance matrix line by line. Every requirement must have a clear, findable response. Missing even one 'shall' statement can make your proposal non-responsive.",
    },
    {
      "@type": "HowToStep",
      position: 13,
      name: "Verify price reasonableness",
      text: "Your price should be competitive but not unrealistically low. Check USASpending.gov for similar contract values, review GSA schedule pricing, and ensure rates cover actual costs plus reasonable profit.",
    },
    {
      "@type": "HowToStep",
      position: 14,
      name: "Confirm format & page limit requirements",
      text: "Check font size, margins, page limits, file format (PDF vs Word), naming conventions, and volume separation. Evaluators will NOT read pages beyond the limit — those sections won't be scored.",
    },
    {
      "@type": "HowToStep",
      position: 15,
      name: "Submit at least 24 hours before deadline",
      text: "SAM.gov and agency portals crash under heavy load near deadlines. Technical difficulties are NOT an acceptable excuse for late submission. The contracting officer has zero flexibility.",
    },
    {
      "@type": "HowToStep",
      position: 16,
      name: "Confirm receipt with the contracting officer",
      text: "After uploading, email the CO and contract specialist to confirm receipt. Keep the confirmation email. If submitting physically, use a tracked courier and get a signed receipt.",
    },
    {
      "@type": "HowToStep",
      position: 17,
      name: "Archive a complete copy of your submission",
      text: "Save the final submitted version (not working drafts) with timestamps. You'll need this for debriefs, protests, or future proposals. Include all attachments, representations, and certifications.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the #1 reason federal proposals get eliminated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-compliance. Missing even one 'shall' statement from the SOW or RFP instructions makes your proposal non-responsive, and evaluators eliminate it on first pass without scoring the content. A compliance matrix mapping every requirement to your proposal section and page number is your insurance policy — federal capture veterans consider it the single most important artifact in any proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I allow for responding to a federal solicitation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plan for 2–4 weeks minimum for a small-business proposal. Pre-bid analysis takes 2–3 days, proposal preparation 7–14 days, review and red team 3–5 days, and submission 24 hours before deadline. Last-minute bids almost always lose because you don't have time to run a proper compliance check or red team review. Sources Sought responses are shorter (2–5 days), but they're the highest-leverage use of early-stage time.",
      },
    },
    {
      "@type": "Question",
      name: "What should go in my compliance matrix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 'shall,' 'must,' or 'will' statement from Section L (Instructions) and Section M (Evaluation Criteria) plus the Statement of Work. For each requirement, record: RFP reference, requirement text, your response location (volume, section, page), status (complete/in-progress/gap), and owner. The matrix is also what evaluators often use to score your proposal, so clear cross-references speed up their review.",
      },
    },
    {
      "@type": "Question",
      name: "When should I submit my bid relative to the deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At least 24 hours before the deadline. SAM.gov and agency portals routinely crash under load near submission deadlines. The contracting officer has zero flexibility on late submissions — the federal government's 'late is late' rule means your proposal is rejected regardless of the reason. After uploading, email the CO and contract specialist to confirm receipt, and keep the confirmation email for your records.",
      },
    },
    {
      "@type": "Question",
      name: "How can CapturePilot help with the bid process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot's AI Proposal Writer reads your solicitation, auto-builds the compliance matrix, and generates draft sections aligned to evaluation criteria. It cuts typical first-draft time from 40+ hours to under 15 minutes per section. The platform also surfaces past performance references from your history, pulls incumbent data from USASpending.gov for pricing benchmarks, and flags missing certifications before you commit to a bid — turning this 17-step checklist into mostly automated workflow.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
