import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Proposal Template: Free Structure Guide",
  description: "Free government proposal template with 5 volumes. Cover letter, technical approach, past performance, management plan, and pricing structure.",
  keywords: "government proposal template, free proposal template, federal proposal structure, RFP response template, proposal volume template, government contract proposal format",
  alternates: { canonical: "https://www.capturepilot.com/resources/proposal-template" },
  openGraph: {
    title: "Government Proposal Template: Free Structure Guide",
    description: "Free government proposal template with 5 volumes. Cover letter, technical approach, past performance, management plan, and pricing structure.",
    url: "https://www.capturepilot.com/resources/proposal-template",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.capturepilot.com/resources" },
    { "@type": "ListItem", position: 3, name: "Proposal Template", item: "https://www.capturepilot.com/resources/proposal-template" },
  ],
};

const creativeWorkJsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Federal Government Proposal Template — 5-Volume Structure",
  headline: "Free Government Proposal Template: 5 Volumes with Pro Tips and Common Mistakes",
  description:
    "Free 5-volume federal proposal template covering Cover Letter & Executive Summary, Technical Approach, Past Performance, Management Plan & Key Personnel, and Pricing & Cost Proposal. Includes what to include, common mistakes to avoid, and pro tips for each volume.",
  url: "https://www.capturepilot.com/resources/proposal-template",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  genre: "Federal Contracting Guide",
  learningResourceType: "Template",
  educationalUse: "Reference",
  audience: {
    "@type": "Audience",
    audienceType: "Small businesses bidding on US federal contracts",
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
  about: [
    { "@type": "Thing", name: "Volume I — Cover Letter & Executive Summary" },
    { "@type": "Thing", name: "Volume II — Technical Approach" },
    { "@type": "Thing", name: "Volume III — Past Performance" },
    { "@type": "Thing", name: "Volume IV — Management Plan & Key Personnel" },
    { "@type": "Thing", name: "Volume V — Pricing & Cost Proposal" },
  ],
  datePublished: "2026-01-01",
  dateModified: "2026-04-16",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the 5 volumes of a federal proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most federal proposals follow a 5-volume structure: Volume I Cover Letter & Executive Summary, Volume II Technical Approach (typically the highest-weighted factor), Volume III Past Performance (3–5 relevant references), Volume IV Management Plan & Key Personnel (org chart, resumes, staffing plan), and Volume V Pricing & Cost Proposal (fully loaded rates, CLIN breakdowns, basis of estimate). Section L in the solicitation dictates the exact structure — always follow what's in the RFP.",
      },
    },
    {
      "@type": "Question",
      name: "How long should each proposal volume be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The solicitation's Section L specifies page limits, and evaluators won't read past them. Typical limits: cover letter 1 page, technical volume 25–50 pages, past performance 10–20 pages (plus 1–2 pages per reference), management plan 15–30 pages with resumes not counting toward the limit, pricing has no narrative limit but requires a completed cost workbook. Exceeding page limits means those sections are not scored.",
      },
    },
    {
      "@type": "Question",
      name: "What's the most common mistake in federal proposals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Restating SOW requirements without showing HOW you'll execute them. Evaluators read dozens of proposals and reward specificity: named methodologies, quantified metrics, identified risks with mitigations, and action verbs. 'Industry leader' claims without evidence get skipped. Always write to the evaluation criteria in Section M, not the SOW — the criteria tell you exactly what gets scored and how much weight each factor carries.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need past performance references to win a federal contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost always, yes. Most contracts require 3–5 relevant references from the last 3–5 years. If you're light on references, team with a more experienced prime or sub under the SBA Mentor-Protégé Program, which lets you use your mentor's past performance on set-aside bids. Some contracts allow subcontractor past performance if disclosed. Without any references, target micro-purchases under $10K first to build federal past performance from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "Can CapturePilot generate a proposal from this template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot's AI Proposal Writer uses exactly this 5-volume structure. It reads your solicitation PDF, extracts requirements, auto-builds the compliance matrix against Section L and Section M, and generates draft sections for each volume using your capability statement, past performance history, and company profile. A typical first draft takes 15 minutes versus 15+ days manually — you then refine and finalize before submission.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
