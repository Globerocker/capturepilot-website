import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write the Cost Volume of a Government Proposal (2026 Guide)",
  description:
    "Learn how to write a compliant, competitive cost volume for government proposals. Covers wrap rates, indirect rates, BOE, TINA thresholds, and the mistakes that kill bids.",
  keywords:
    "cost volume government proposal, government proposal pricing, wrap rate government contracting, indirect rates government proposal, basis of estimate government contract, TINA threshold 2026, certified cost pricing data, government contract cost volume template, FAR Part 15 pricing, DCAA cost proposal",
  alternates: { canonical: "https://www.capturepilot.com/blog/cost-volume-government-proposal" },
  openGraph: {
    title: "How to Write the Cost Volume of a Government Proposal (2026 Guide)",
    description:
      "Wrap rates, indirect rate stacking, TINA thresholds, and the basis of estimate — everything small businesses need to build a defensible government proposal cost volume.",
    url: "https://www.capturepilot.com/blog/cost-volume-government-proposal",
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
      name: "Cost Volume Government Proposal",
      item: "https://www.capturepilot.com/blog/cost-volume-government-proposal",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Write the Cost Volume of a Government Proposal (2026 Guide)",
  description:
    "A step-by-step guide to building a compliant, competitive cost volume for federal proposals — covering direct labor, indirect rates, wrap rate calculation, ODCs, fee, basis of estimate, and TINA thresholds.",
  image: "https://www.capturepilot.com/og/cost-volume-government-proposal.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-06-08",
  dateModified: "2026-06-08",
  mainEntityOfPage: "https://www.capturepilot.com/blog/cost-volume-government-proposal",
  articleSection: "Government Contracting",
  keywords: [
    "cost volume government proposal",
    "government proposal pricing",
    "wrap rate government contracting",
    "indirect rates government contract",
    "basis of estimate",
    "TINA threshold",
    "certified cost pricing data",
    "FAR Part 15 pricing",
    "DCAA cost proposal",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a cost volume in a government proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cost volume (also called a pricing volume or price proposal) is the section of a government proposal that documents how you arrived at every dollar you are asking the government to pay. It includes direct labor broken out by category and hours, indirect rates (fringe, overhead, G&A), other direct costs (travel, materials, subcontractors), and profit or fee — all supported by a narrative called the basis of estimate that justifies each assumption.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate a wrap rate for a government contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A wrap rate is calculated by sequentially applying indirect rates to your base labor cost — not additively. Apply fringe first (to base wages), then overhead (to wages + fringe), then G&A (to the overhead-loaded total). For example, a $50/hour base wage with 25% fringe becomes $62.50, then with 40% overhead becomes $87.50, then with 10% G&A becomes $96.25. Adding an 8% profit gives a final billable rate of $103.95 and a wrap rate multiplier of approximately 2.08.",
      },
    },
    {
      "@type": "Question",
      name: "What is the TINA threshold in 2025 and 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Truth in Negotiations Act (TINA) threshold for certified cost or pricing data was $2.5 million as of October 1, 2025, following an inflationary adjustment from $2 million. The FY2026 National Defense Authorization Act raises this threshold to $10 million for contracts entered into after June 30, 2026. Below the applicable threshold, contractors still need to provide data sufficient to establish price reasonableness, but are not required to certify it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between fee and profit in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In government contracting, fee is the term used for the contractor's margin on cost-reimbursable contracts (cost-plus-fixed-fee, cost-plus-incentive-fee), while profit is used on fixed-price contracts. Both represent your return above your direct and indirect costs. FAR caps fee at 10% for CPFF research contracts and 15% for other cost-type contracts. Fixed-price contracts have no regulatory cap on profit, though proposed profit must be defensible based on contract type, risk, and Weighted Guidelines analysis.",
      },
    },
    {
      "@type": "Question",
      name: "What is a basis of estimate (BOE) in a government proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basis of estimate (BOE) is the written narrative that explains how you derived every number in your cost volume. It should address each major cost element — labor rates (source data used), hours (how estimated), indirect rates (derivation from actual cost pools), ODCs (specific sources for each line item), subcontractors (reference to attached proposals), and fee/profit (justification tied to contract type and risk). The BOE must reconcile exactly with your pricing spreadsheet. Disconnects between the narrative and the numbers are flagged during cost realism analysis.",
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
