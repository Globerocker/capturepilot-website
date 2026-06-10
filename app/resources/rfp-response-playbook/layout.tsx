import type { Metadata } from "next";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "RFP Response Template: Federal Proposal Calendar",
  description:
    "Free 18-page federal RFP response guide covering Section L/M, compliance matrix, win themes, color-team reviews, and a 30-day proposal calendar. Built for first-time bidders.",
  keywords:
    "rfp response template, rfp response examples, government proposal template, rfp response process, federal proposal writing, how to respond to rfp, compliance matrix template, federal proposal calendar, color team review, proposal win themes",
  alternates: { canonical: "https://www.capturepilot.com/resources/rfp-response-playbook" },
  openGraph: {
    title: "Federal RFP Response Playbook — Free 18-Page PDF",
    description:
      "Section L/M walkthrough, compliance matrix, 30-day proposal calendar, color-team review schedule, and a submission checklist. Free for small business federal contractors.",
    url: "https://www.capturepilot.com/resources/rfp-response-playbook",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Federal RFP Response Playbook", path: "/resources/rfp-response-playbook" },
]);

const digitalDocumentJsonLd = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Federal RFP Response Playbook (the 30-day proposal calendar)",
  description:
    "Free 18-page guide to responding to a federal RFP. Covers reading Section L/M, building a compliance matrix, developing win themes, running color-team reviews, and submitting on time. Includes a 30-day proposal calendar.",
  url: "https://www.capturepilot.com/resources/rfp-response-playbook",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  numberOfPages: 18,
  genre: "Federal Contracting Guide",
  audience: {
    "@type": "Audience",
    audienceType: "Small businesses bidding on US federal government contracts",
  },
  author: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  datePublished: "2026-06-09",
  about: [
    { "@type": "Thing", name: "Section L — Instructions to Offerors" },
    { "@type": "Thing", name: "Section M — Evaluation Criteria" },
    { "@type": "Thing", name: "Compliance Matrix" },
    { "@type": "Thing", name: "Win Themes" },
    { "@type": "Thing", name: "Color Team Reviews (Pink, Red, Gold)" },
    { "@type": "Thing", name: "30-Day Proposal Calendar" },
    { "@type": "Thing", name: "Federal Proposal Submission Checklist" },
  ],
};

const faq = faqJsonLd([
  {
    q: "What is a compliance matrix in a federal proposal?",
    a: "A compliance matrix is a spreadsheet that maps every requirement in Section L (Instructions) and Section M (Evaluation Criteria) to a specific section and page number in your proposal. It's your proof that you answered everything the solicitation asked for. Evaluators use it to check compliance before scoring content — a missing 'shall' statement is enough to get a proposal eliminated as non-responsive on first pass.",
  },
  {
    q: "What are color team reviews in proposal writing?",
    a: "Color team reviews are structured peer reviews at set milestones during proposal development. The Pink Team reviews an early outline or 25-50% draft to check compliance and structure. The Red Team reviews the near-final draft as if they were the evaluator, scoring against Section M criteria. The Gold Team is an executive review of the final draft before production. Each review has a specific scope and should be run by someone who didn't write the section being reviewed.",
  },
  {
    q: "How do you respond to an RFP step by step?",
    a: "Start by reading Section L (instructions) and Section M (evaluation criteria) before the SOW. Build a compliance matrix from every 'shall,' 'must,' and 'will' statement. Assign each matrix row to a writer. Develop 3-5 win themes — discriminators that tie your strengths to the government's priorities. Write to the evaluation criteria, not just the SOW. Run Pink, Red, and Gold team reviews at defined milestones. Submit at least 24 hours before the deadline and confirm receipt with the contracting officer.",
  },
  {
    q: "How long should a federal proposal be?",
    a: "Page limits are in Section L and evaluators don't read past them. A typical small business proposal runs 30-75 pages across the technical, past performance, and management volumes; the pricing volume is usually unlimited narrative but must include a completed cost workbook. When Section L doesn't specify a limit, a focused 40-page response almost always outperforms a bloated 100-page one — evaluators are reading dozens of proposals and reward clarity.",
  },
  {
    q: "What's the difference between Section L and Section M?",
    a: "Section L is the instructions volume — it tells you how to prepare and format your proposal (page limits, font requirements, required attachments, volume structure). Section M is the evaluation criteria — it tells you how the government will score your proposal and what weight each factor carries. You need both to write a winning response. Most first-time bidders read Section L carefully and skim Section M, which is backwards: Section M tells you exactly what to emphasize and how much space to give each topic.",
  },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalDocumentJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
