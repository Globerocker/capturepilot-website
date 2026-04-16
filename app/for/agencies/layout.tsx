import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot for GovCon Consulting Agencies",
  description: "White-label government contract intelligence for consulting agencies. Manage multiple clients, automate matching, and scale your capture practice.",
  keywords: "GovCon consulting tools, government contract consulting, white-label GovCon, capture management agency, consulting agency federal contracts, multi-client GovCon platform",
  alternates: { canonical: "https://www.capturepilot.com/for/agencies" },
  openGraph: {
    title: "CapturePilot for GovCon Consulting Agencies",
    description: "White-label government contract intelligence for consulting agencies. Manage multiple clients, automate matching, and scale your capture practice.",
    url: "https://www.capturepilot.com/for/agencies",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.capturepilot.com/for" },
    { "@type": "ListItem", position: 3, name: "Agencies", item: "https://www.capturepilot.com/for/agencies" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CapturePilot for GovCon Consulting Agencies",
  description:
    "White-label GovCon platform for consulting firms managing multiple federal contracting clients. Includes client portals, admin CRM, automated matching, AI proposals, market intelligence, and competitor tracking.",
  url: "https://www.capturepilot.com/for/agencies",
  audience: {
    "@type": "Audience",
    audienceType: "GovCon Consulting Firms",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capturepilot.com/og-image.png",
  },
  about: {
    "@type": "Thing",
    name: "Multi-client federal capture management",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot work for consulting agencies with multiple clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each client gets their own branded portal with scored opportunities, a pipeline, tasks, and document uploads. Your team manages everything from a single admin CRM dashboard — create accounts, assign tasks, run enrichment, and monitor pipelines across your entire book. We ingest SAM.gov daily and score 40,000+ active federal opportunities per client profile, so matching stays automated once you configure NAICS codes, certifications, and target states.",
      },
    },
    {
      "@type": "Question",
      name: "Is the consulting agency platform white-label?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Agencies can deploy a branded client portal so managed clients see your colors, logo, and domain instead of CapturePilot's. This lets capture consultants productize their service offering while we handle the daily opportunity ingestion, scoring engine, AI proposal generation, and attachment analysis in the background.",
      },
    },
    {
      "@type": "Question",
      name: "How much does CapturePilot cost for agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agency pricing is custom based on client count and features. Most GovCon consulting firms pay $500–$2,000/month for unlimited client portals, admin CRM, AI Proposal Writer, market intelligence, competitor tracking per client, document management, email notifications, and priority support. Book a demo to get a quote scoped to your practice.",
      },
    },
    {
      "@type": "Question",
      name: "Can I onboard new consulting clients quickly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enter a client's website URL, NAICS codes, certifications, and target states — the profile enrichment pipeline crawls their site, verifies their SAM.gov registration, and surfaces scored opportunities within minutes. Most agencies get a new client live in under an hour versus days of spreadsheet setup in legacy tools.",
      },
    },
    {
      "@type": "Question",
      name: "Does the AI Proposal Writer work for every client?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When a client decides to bid, the AI reads the full solicitation, builds a compliance matrix, and generates proposal draft sections — technical approach, past performance, cover letter — using each client's capability statement. Your consultants refine and finalize, cutting typical proposal turnaround from 40+ hours to a few hours per submission.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
