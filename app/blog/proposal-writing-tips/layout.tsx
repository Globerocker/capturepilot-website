import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Government Proposal Writing Tips That Win Contracts",
  description: "Proven tips for writing winning government proposals. Compliance, pricing strategy, past performance, and how AI can help you draft faster.",
  keywords: "government proposal writing tips, how to write government proposal, winning proposal tips, RFP response tips, federal proposal best practices, proposal compliance, government bid writing",
  alternates: { canonical: "https://www.capturepilot.com/blog/proposal-writing-tips" },
  openGraph: {
    title: "10 Government Proposal Writing Tips That Win Contracts",
    description: "Proven tips for writing winning government proposals. Compliance, pricing strategy, past performance, and how AI can help you draft faster.",
    url: "https://www.capturepilot.com/blog/proposal-writing-tips",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.capturepilot.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "10 Government Proposal Writing Tips",
      item: "https://www.capturepilot.com/blog/proposal-writing-tips",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "10 Government Proposal Writing Tips That Win Contracts",
  description:
    "Proven tips for writing winning government proposals. Compliance, pricing strategy, past performance, color-team reviews, and how AI can help you draft faster.",
  image: "https://www.capturepilot.com/og/proposal-writing-tips.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-10",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/proposal-writing-tips",
  articleSection: "Government Contracting",
  keywords: [
    "government proposal writing",
    "compliance matrix",
    "LPTA",
    "best value",
    "color team review",
    "past performance",
    "Pink Team",
    "Red Team",
    "price to win",
  ],
  wordCount: 5600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a compliance matrix in a government proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A compliance matrix is a spreadsheet that maps every 'shall', 'must', and 'will' requirement in the solicitation (Sections L, M, C, and the PWS/SOW) to the corresponding section, page, and paragraph in your proposal. Evaluators use the matrix to confirm you addressed every requirement — if anything is missing, you can be rejected as non-compliant before technical evaluation begins. Build the matrix before you write, reference it during drafting, and include it as an appendix so evaluators can see exactly where each requirement is answered.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between LPTA and Best Value contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LPTA (Lowest Price Technically Acceptable) means the lowest-priced proposal that meets all technical minimums wins — there's no credit for exceeding requirements, so don't gold-plate the technical approach and drive price up. Best Value (trade-off source selection) weighs technical merit, past performance, and price together, so a higher-priced proposal with stronger technical approach and past performance can win. Your pricing strategy should be dictated by the evaluation method stated in Section M of the solicitation — read it first before you decide how aggressively to price.",
      },
    },
    {
      "@type": "Question",
      name: "What are color-team reviews in proposal writing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Color teams are structured internal reviews at set milestones. Pink Team reviews the draft proposal early (around 60% complete) for strategy, win themes, and major gaps — it's diagnostic, not polishing. Red Team reviews the final draft as if they were the evaluators, scoring against Section M criteria and flagging compliance issues. Gold Team is a final pre-submission check for typos, page-count violations, formatting, and assembly errors. Running all three reviews is the single biggest quality differentiator between winners and losers — never submit a proposal that hasn't been independently reviewed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use past performance effectively in federal proposals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Include 3-5 recent, relevant, and similar-scope contracts — relevancy matters more than prestige. For each, include the agency/customer, contract number, period of performance, dollar value, your role (prime vs sub), and quantified outcomes tied to the current requirement (e.g., 'reduced incident response time by 43%' not 'provided IT services'). When the solicitation specifies a relevancy definition (size, scope, complexity), match it exactly. If you lack directly relevant federal past performance, use analogous commercial work, subcontracted experience, or key personnel experience from prior employers.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use AI to write government proposals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use AI to draft, humans to polish. AI is excellent for: parsing the solicitation into a compliance outline, generating a first draft mapped to Section M criteria, and accelerating boilerplate. AI is dangerous when: asked to invent past performance (hallucinated contracts are fraud), produce generic feature-lists instead of benefit-driven narrative, or ship without human compliance review. The winning workflow is AI-drafted scaffold (0-60%) plus SME-written differentiators, metrics, and key personnel bios (60-95%) plus Red Team review (95-100%). Never submit an all-AI proposal unreviewed.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I submit my proposal early instead of at the deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late submissions are automatically disqualified — SAM.gov and agency portals are unforgiving, and the government rarely grants extensions for upload failures, PDF corruption, or network outages. Submitting 24-48 hours early protects against portal issues, gives you time to respond if the agency notifies you of a formatting problem, and eliminates the last-minute scramble that introduces errors. The practical rule is: final Gold Team review finishes 72 hours before the deadline, corrections are complete at 48 hours, and submission happens 24 hours before close-time. Never rely on last-hour uploads.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
