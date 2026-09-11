import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAGE Code Registration: What It Is and How to Get One | CapturePilot",
  description:
    "Learn what a CAGE code is, how it differs from a UEI, and how it gets assigned during SAM.gov registration. Includes lookup tips, common problems, and next steps.",
  keywords:
    "CAGE code registration, CAGE code government contractor, what is a CAGE code, CAGE code vs UEI, DLA CAGE code, SAM.gov CAGE code, how to get CAGE code, CAGE code lookup, NCAGE code, federal contractor CAGE code, cage.dla.mil, government contracting registration",
  alternates: { canonical: "https://capturepilot.com/blog/cage-code-registration-guide" },
  openGraph: {
    title: "CAGE Code Registration: What It Is and How to Get One",
    description:
      "A CAGE code is your 5-character government contractor identifier. Learn what it is, how it differs from a UEI, and how to get yours through SAM.gov registration.",
    url: "https://capturepilot.com/blog/cage-code-registration-guide",
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
      name: "CAGE Code Registration Guide",
      item: "https://capturepilot.com/blog/cage-code-registration-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "CAGE Code Registration: What It Is, How to Get One, and Why Every Government Contractor Needs It",
  description:
    "A complete guide to CAGE codes — what they are, how they differ from UEIs, how to get one through SAM.gov registration, where they appear on federal contracts, and how to use the CAGE code lookup tool for competitive intelligence.",
  image: "https://capturepilot.com/og/cage-code-registration-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-09-11",
  dateModified: "2026-09-11",
  mainEntityOfPage: "https://capturepilot.com/blog/cage-code-registration-guide",
  articleSection: "Getting Started",
  keywords: [
    "CAGE code registration",
    "CAGE code government contractor",
    "what is a CAGE code",
    "CAGE code vs UEI",
    "DLA CAGE code",
    "SAM.gov CAGE code",
    "how to get CAGE code",
    "CAGE code lookup",
    "NCAGE code",
    "federal contractor registration",
  ],
  wordCount: 3200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a CAGE code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CAGE code (Commercial and Government Entity code) is a 5-character alphanumeric identifier assigned by the Defense Logistics Agency (DLA) to businesses that work with the US government. It identifies your business at a specific physical location and is required for DoD contracts, facility security clearances, WAWF invoicing, and export licenses. It is different from a UEI — the UEI is your broad federal entity identifier, while the CAGE code is DoD-specific and facility-specific.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a CAGE code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get a CAGE code automatically during SAM.gov entity registration — you do not need to apply for it separately. When you register your business in SAM.gov, the Defense Logistics Agency CAGE Branch assigns a CAGE code as part of the validation process. The entire registration process, including CAGE code assignment, typically takes 2–4 weeks for domestic US entities.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a CAGE code and a UEI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A UEI (Unique Entity Identifier) is a 12-character alphanumeric code administered by SAM.gov (GSA) that identifies your business entity across the entire federal government — contracts, grants, and assistance programs. A CAGE code is a 5-character code administered by the DLA that specifically identifies your facility for DoD contracting, logistics, security clearances, and WAWF invoicing. Both are assigned through SAM.gov registration, and both are required for federal contracting.",
      },
    },
    {
      "@type": "Question",
      name: "How do I look up a CAGE code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the CAGE Public Search tool at cage.dla.mil. It is free, requires no account, and lets you search by company name, CAGE code, UEI, address, or phone number. It returns the registered legal name, address, and status for any CAGE code holder. You can also look up CAGE codes in contract award data on USASpending.gov and SAM.gov.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a CAGE code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAGE code assignment happens automatically during SAM.gov validation. For US domestic entities, the overall SAM.gov registration process — including CAGE assignment — typically takes 7–15 business days officially, but real-world timelines in 2026 are often 2–4 weeks due to enhanced identity validation. Start at least 45 days before any contracting deadline.",
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
