import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs SAM.gov — Smart Layer on Top of SAM Data",
  description: "Same SAM.gov data, 10x better experience. Smart matching, scoring, AI proposals, and eligibility checks. Save 19+ hours per week.",
  keywords: "CapturePilot vs SAM.gov, SAM.gov alternative, SAM.gov better search, SAM.gov matching, federal contract search tool, SAM.gov AI layer",
  alternates: { canonical: "https://www.capturepilot.com/vs/sam-gov" },
  openGraph: {
    title: "CapturePilot vs SAM.gov — Smart Layer on Top of SAM Data",
    description: "Same SAM.gov data, 10x better experience. Smart matching, scoring, AI proposals, and eligibility checks. Save 19+ hours per week.",
    url: "https://www.capturepilot.com/vs/sam-gov",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs SAM.gov", item: "https://www.capturepilot.com/vs/sam-gov" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs SAM.gov: Why Small Businesses Need More Than Raw Federal Data",
  description:
    "An in-depth comparison of CapturePilot and SAM.gov covering search, matching, proposal support, and time to first bid. SAM.gov is the free data source; CapturePilot is the intelligent layer on top.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-01-15",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/sam-gov",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is SAM.gov free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SAM.gov is the official federal government database and is free to use. However, it is raw data — no matching, no scoring, no proposal support, and very limited search filtering. Most small businesses end up spending 15–25 hours per week just sifting through irrelevant listings.",
      },
    },
    {
      "@type": "Question",
      name: "Why use CapturePilot if SAM.gov is free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot pulls the same SAM.gov data but adds AI matching against your NAICS / PSC / set-aside profile, deterministic readiness scoring, a capability statement builder, AI proposal drafts, and a pipeline tracker. The goal: spend time bidding on opportunities you can actually win instead of searching raw listings.",
      },
    },
    {
      "@type": "Question",
      name: "Does CapturePilot have every opportunity that SAM.gov has?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot ingests SAM.gov contract opportunities daily and currently indexes 40,000+ active federal opportunities including Sources Sought, Pre-Solicitation, and Solicitation notices. We supplement SAM.gov with SBIR.gov R&D opportunities and USASpending.gov award data for competitive intelligence.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use CapturePilot for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Free plan includes unlimited Quick Company Checks, a preview of your top 5 matched opportunities, and NAICS identification — so you can test match quality before upgrading to Pro at $199/month.",
      },
    },
    {
      "@type": "Question",
      name: "How much time does CapturePilot save compared to using SAM.gov directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small business GovCon users typically report saving 15–20 hours per week on search and qualification. Instead of manually scanning SAM.gov, you receive a pre-scored list of opportunities that fit your capabilities, location, and set-aside eligibility.",
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
