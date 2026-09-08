import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Track Government Contract Awards: USASpending.gov & SAM.gov Guide | CapturePilot",
  description:
    "Learn to track government contract awards using USASpending.gov and SAM.gov. Find expiring contracts, research incumbents, and build a recompete pipeline. Free tools explained.",
  keywords:
    "track government contract awards, USASpending.gov guide, SAM.gov contract award data, FPDS replacement 2026, government contract incumbent research, federal contract recompetes, government contracting competitive intelligence, contract award database, federal spending data, USASpending advanced search",
  alternates: { canonical: "https://capturepilot.com/blog/track-government-contract-awards" },
  openGraph: {
    title: "How to Track Government Contract Awards: USASpending.gov & SAM.gov Guide",
    description:
      "Learn to track government contract awards using USASpending.gov and SAM.gov. Find expiring contracts, research incumbents, and build a recompete pipeline.",
    url: "https://capturepilot.com/blog/track-government-contract-awards",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://capturepilot.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Track Government Contract Awards",
      item: "https://capturepilot.com/blog/track-government-contract-awards",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Track Government Contract Awards: USASpending.gov and SAM.gov Intelligence Guide",
  description:
    "A step-by-step guide to tracking government contract awards using USASpending.gov and SAM.gov, including how to find expiring contracts, build competitor profiles, and create a recompete pipeline from public federal spending data.",
  image: "https://capturepilot.com/og/track-government-contract-awards.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  mainEntityOfPage: "https://capturepilot.com/blog/track-government-contract-awards",
  articleSection: "Tools",
  keywords: [
    "track government contract awards",
    "USASpending.gov guide",
    "SAM.gov contract award data",
    "FPDS replacement 2026",
    "government contract recompetes",
    "federal contracting competitive intelligence",
    "incumbent contractor research",
    "federal spending data",
  ],
  wordCount: 4800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I track government contract awards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Government contract awards are tracked through two main free tools: USASpending.gov for broad spending analysis and recipient profiles, and SAM.gov for individual contract records and modification history. FPDS.gov was decommissioned in February 2026 and its data moved to SAM.gov. Both tools are free to access, though SAM.gov requires a Login.gov account for full functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Is FPDS.gov still available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. FPDS.gov was decommissioned on February 24, 2026. All contract award data previously available on FPDS.gov is now accessible through SAM.gov's Contract Award Data section. USASpending.gov also provides access to the same underlying data for analysis and research.",
      },
    },
    {
      "@type": "Question",
      name: "How much did small businesses receive in federal contracts in FY2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In fiscal year 2025, small businesses received approximately $179 billion in prime federal contracts, representing about 27.8% of all federal prime contracting dollars — exceeding the statutory 23% goal. When subcontracts are included, total small business federal awards reached an estimated $273 billion.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find expiring government contracts in my industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use USASpending.gov Advanced Search: set Award Type to Contracts, filter by your Product Service Code (PSC), set the Award Date range to 4–6 years ago (to identify 5-year contracts expiring now), and filter by your target agencies. Sort results by Period of Performance end date to see what is expiring in the next 12–18 months.",
      },
    },
    {
      "@type": "Question",
      name: "What is the total federal contract spending in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government spent approximately $793 billion on contracts in fiscal year 2025, up from $755.1 billion in FY2024. Small businesses received $179 billion of that in prime contracts, with service-disabled veteran-owned businesses (SDVOSBs) receiving $32.5 billion and 8(a) firms receiving $24.3 billion.",
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
