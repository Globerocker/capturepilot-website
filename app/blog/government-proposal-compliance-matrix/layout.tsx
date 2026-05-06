import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Proposal Compliance Matrix: How to Build One That Wins (2026)",
  description:
    "Learn how to build a compliance matrix for government proposals. Map Section L, M, and C requirements to avoid the non-compliance rejections that eliminate 30–50% of bids.",
  keywords:
    "government proposal compliance matrix, compliance matrix government proposal, RFP compliance matrix, Section L Section M compliance, federal proposal compliance checklist, government contracting proposal template, FAR Part 15 proposal, proposal compliance tracking, how to build a compliance matrix",
  alternates: { canonical: "https://www.capturepilot.com/blog/government-proposal-compliance-matrix" },
  openGraph: {
    title: "Government Proposal Compliance Matrix: How to Build One That Wins",
    description:
      "30–50% of government proposals are rejected for non-compliance. A compliance matrix prevents that. Learn how to build one that actually gets used.",
    url: "https://www.capturepilot.com/blog/government-proposal-compliance-matrix",
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
      name: "Government Proposal Compliance Matrix",
      item: "https://www.capturepilot.com/blog/government-proposal-compliance-matrix",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Proposal Compliance Matrix: How to Build One That Wins (2026)",
  description:
    "A step-by-step guide to building a compliance matrix for federal proposals — mapping Section L, M, C, and J requirements to prevent the non-compliance rejections that eliminate 30–50% of bids.",
  image: "https://www.capturepilot.com/og/government-proposal-compliance-matrix.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-06",
  dateModified: "2026-05-06",
  mainEntityOfPage: "https://www.capturepilot.com/blog/government-proposal-compliance-matrix",
  articleSection: "Government Contracting",
  keywords: [
    "government proposal compliance matrix",
    "RFP compliance matrix",
    "Section L Section M",
    "FAR Part 15 proposals",
    "federal proposal compliance",
    "proposal management",
    "government contracting proposals",
    "proposal compliance checklist",
  ],
  wordCount: 3900,
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
        text: "A compliance matrix is a structured document — usually a spreadsheet — that maps every requirement in a federal RFP to the specific section of the proposal where it is addressed. It tracks whether each requirement from sections C (SOW), L (instructions), M (evaluation criteria), H (special requirements), and J (attachments) has been covered, who owns each section, and whether it has been verified as compliant.",
      },
    },
    {
      "@type": "Question",
      name: "What percentage of government proposals are rejected for non-compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industry data consistently shows that 30–50% of government proposals are rejected outright for non-compliance with basic RFP guidelines before evaluators reach the technical content. For first-time bidders, the rejection rate is even higher — more than 50% of first bids are eliminated on compliance grounds alone. Common causes include exceeding page limits, missing required forms, and failing to address Section M evaluation sub-factors.",
      },
    },
    {
      "@type": "Question",
      name: "What RFP sections should be included in a compliance matrix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete compliance matrix should cover: Section C (Statement of Work or Performance Work Statement — technical requirements and deliverables), Section L (instructions to offerors — page limits, format, submission requirements), Section M (evaluation criteria — factors and sub-factors the proposal will be scored on), Section H (special requirements — clearances, subcontracting plans, key personnel clauses), Section J (attachments — required forms, certifications, questionnaires), and any solicitation amendments, which supersede the original RFP.",
      },
    },
    {
      "@type": "Question",
      name: "When should you build a compliance matrix in the proposal process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Build the compliance matrix on day one of proposal development — before you write the proposal outline. The matrix should define the structure of your proposal, not be retrofitted onto it afterward. Building the matrix first ensures that every section of your proposal corresponds to an RFP requirement, and that no requirements are missed because they were assigned to a section that didn't exist in your outline.",
      },
    },
    {
      "@type": "Question",
      name: "What columns should a government proposal compliance matrix include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum viable columns for a federal proposal compliance matrix are: Requirement ID (unique identifier), Source (exact RFP section, paragraph, and page number), Requirement Text (verbatim from the RFP), Summary (plain-English one-liner), Proposal Location (volume, section, paragraph where addressed), Owner (person responsible for that section), and Status (Not Started / In Progress / Draft Complete / Reviewed / Final). Color-code the Status column: red for not started, yellow for at risk, blue for draft complete awaiting review, green for verified compliant.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common compliance failures in government proposals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common compliance failures in federal proposals are: exceeding page limits (agencies can reject without review), missing required forms or certifications from Section J, failing to address a Section M evaluation sub-factor explicitly, using templates from prior proposals without verifying against the current solicitation, missing a solicitation amendment that changed the deadline or requirements, and submitting key personnel resumes that don't match Section L format specifications (wrong length, missing required fields).",
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
