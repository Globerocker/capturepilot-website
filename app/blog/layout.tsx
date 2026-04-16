import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Government Contracting Guides & Strategies",
  description: "Learn government contracting with practical guides on NAICS codes, SAM.gov registration, set-aside programs, proposal writing, and capability statements. Written for small businesses.",
  keywords: "government contracting blog, GovCon guides, small business federal contracts, NAICS codes, SAM.gov, set-aside programs, proposal writing",
  alternates: { canonical: "https://www.capturepilot.com/blog" },
  openGraph: {
    title: "Blog — Government Contracting Guides & Strategies",
    description: "Practical guides for small businesses breaking into federal contracting.",
    url: "https://www.capturepilot.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Government Contracting Guides & Strategies",
    description: "Practical guides for small businesses breaking into federal contracting.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.capturepilot.com/blog" },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "CapturePilot Blog — Government Contracting Guides & Strategies",
  description:
    "Practical, practitioner-written guides for small businesses breaking into federal government contracting. Covers NAICS codes, SAM.gov, set-asides, capability statements, and proposal writing.",
  url: "https://www.capturepilot.com/blog",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: 7,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.capturepilot.com/blog/government-contracting-101",
        item: {
          "@type": "BlogPosting",
          headline: "Government Contracting 101: Complete Beginner's Guide (2026)",
          url: "https://www.capturepilot.com/blog/government-contracting-101",
          description:
            "Step-by-step guide to government contracting for small businesses: NAICS codes, SAM.gov registration, set-asides, contract types, and how to win your first bid.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.capturepilot.com/blog/naics-codes-explained",
        item: {
          "@type": "BlogPosting",
          headline: "NAICS Codes Explained: How to Find Your Business Codes",
          url: "https://www.capturepilot.com/blog/naics-codes-explained",
          description:
            "What NAICS codes are, why they matter for federal contracting, how to find yours, size standards, and the top codes for small business GovCon.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.capturepilot.com/blog/set-aside-programs",
        item: {
          "@type": "BlogPosting",
          headline: "Government Set-Aside Programs: SDVOSB, WOSB, 8(a) & More",
          url: "https://www.capturepilot.com/blog/set-aside-programs",
          description:
            "Complete guide to federal set-aside programs. Eligibility, thresholds, certification process for 8(a), SDVOSB, WOSB, EDWOSB, HUBZone, and SDB.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.capturepilot.com/blog/capability-statement-guide",
        item: {
          "@type": "BlogPosting",
          headline: "How to Write a Capability Statement (Template + Guide)",
          url: "https://www.capturepilot.com/blog/capability-statement-guide",
          description:
            "Step-by-step guide to writing a government capability statement. The 6 essential sections, design tips, common mistakes, and free AI builder.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.capturepilot.com/blog/sam-registration-guide",
        item: {
          "@type": "BlogPosting",
          headline: "SAM.gov Registration Guide: Step-by-Step (2026)",
          url: "https://www.capturepilot.com/blog/sam-registration-guide",
          description:
            "Complete walkthrough of SAM.gov registration. Prerequisites, 8-step process, common issues, timeline, and renewal requirements.",
        },
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://www.capturepilot.com/blog/proposal-writing-tips",
        item: {
          "@type": "BlogPosting",
          headline: "10 Government Proposal Writing Tips That Win Contracts",
          url: "https://www.capturepilot.com/blog/proposal-writing-tips",
          description:
            "Proven tips for winning government proposals: compliance matrices, pricing strategy, past performance, color-team reviews, and AI drafting.",
        },
      },
      {
        "@type": "ListItem",
        position: 7,
        url: "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business",
        item: {
          "@type": "BlogPosting",
          headline: "How to Find Government Contracts for Small Business (2026 Guide)",
          url: "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business",
          description:
            "Step-by-step guide to finding federal contracts as a small business. SAM.gov search, set-asides, NAICS filtering, and pipeline strategies that win.",
        },
      },
    ],
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {children}
    </>
  );
}
