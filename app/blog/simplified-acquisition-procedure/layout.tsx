import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simplified Acquisition Procedures: The Fast Track for Contracts Under $350K (2026)",
  description:
    "SAP covers $24.6B in annual federal awards and 85% of all contract actions. The SAT rose to $350K in Oct 2025. Learn how to win simplified acquisition contracts.",
  keywords:
    "simplified acquisition procedures, simplified acquisition threshold, SAP government contracts, FAR Part 13, small business set aside $350000, simplified acquisition threshold 2025, government contracts under $350k, SAP small business, blanket purchase agreement, purchase order government",
  alternates: { canonical: "https://capturepilot.com/blog/simplified-acquisition-procedure" },
  openGraph: {
    title: "Simplified Acquisition Procedures: The Fast Track for Contracts Under $350K",
    description:
      "The Simplified Acquisition Threshold rose to $350K in Oct 2025. SAP covers $24.6B in annual awards and 85% of all federal contract actions. Learn how to win.",
    url: "https://capturepilot.com/blog/simplified-acquisition-procedure",
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
      name: "Simplified Acquisition Procedures",
      item: "https://capturepilot.com/blog/simplified-acquisition-procedure",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Simplified Acquisition Procedures: The Fast Track for Contracts Under $350K",
  description:
    "Simplified Acquisition Procedures (SAP) govern roughly 85% of all federal contract actions by volume and $24.6 billion in annual awards. As of October 1, 2025, the Simplified Acquisition Threshold rose to $350,000. This guide covers the rule of two, mandatory small business set-asides, purchase orders, BPAs, oral quotations, the 2025 FAR Part 13 overhaul, and a strategy for winning in the SAP market.",
  image: "https://capturepilot.com/og/simplified-acquisition-procedure.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
  mainEntityOfPage: "https://capturepilot.com/blog/simplified-acquisition-procedure",
  articleSection: "Government Contracting",
  keywords: [
    "simplified acquisition procedures",
    "simplified acquisition threshold",
    "SAP government contracts",
    "FAR Part 13",
    "small business set-aside",
    "blanket purchase agreement",
    "purchase order government",
    "rule of two",
    "federal contracting small business",
    "SAT 2025",
  ],
  wordCount: 3800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Simplified Acquisition Threshold in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, the Simplified Acquisition Threshold (SAT) is $350,000 for most federal purchases, up from the prior $250,000 limit. The increase was finalized by the FAR Council in an August 27, 2025 final rule adjusting acquisition thresholds for inflation. Below this threshold, agencies use Simplified Acquisition Procedures (SAP) under FAR Part 13, which means faster awards, less documentation, and mandatory small business set-asides when the rule of two is met.",
      },
    },
    {
      "@type": "Question",
      name: "What is the rule of two in simplified acquisition procedures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The rule of two (FAR 19.502-2) requires that acquisitions above the micro-purchase threshold ($15,000) and at or below the Simplified Acquisition Threshold ($350,000) must be set aside for small businesses if there is a reasonable expectation that two or more responsible small businesses will submit offers at fair market prices. In practice, this means the vast majority of SAP contracts are competed only among small businesses, excluding large primes from the competition.",
      },
    },
    {
      "@type": "Question",
      name: "What methods do agencies use under simplified acquisition procedures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agencies use three primary methods under SAP: (1) Purchase Orders — the simplest form, issued directly for one-time needs after soliciting at least three quotations; (2) Blanket Purchase Agreements (BPAs) — pre-established 'charge accounts' for repetitive needs, allowing call orders without re-soliciting each time; and (3) Oral or simplified written quotations — contracting officers contact vendors directly by phone or email to get quotes, no formal RFP required. All three methods are governed by FAR Part 13 and can be completed in days to weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the commercial items simplified acquisition ceiling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, the ceiling for using simplified acquisition procedures for commercial products and commercial services is $9 million (up from $7.5 million). This is governed by FAR Subpart 13.5 (being reorganized into Part 12 under the FAR overhaul). It means agencies can award commercial item contracts up to $9 million using the streamlined SAP process — more than 25 times the standard $350,000 SAT. This is particularly relevant for IT products, software, professional services, and off-the-shelf solutions sold in the commercial marketplace.",
      },
    },
    {
      "@type": "Question",
      name: "How does the 2025 FAR Part 13 overhaul affect small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Executive Order 14275 (April 15, 2025) directed a comprehensive FAR overhaul. For Part 13, the major structural change is renaming it from 'Simplified Acquisition Procedures' to 'Simplified Procedures for Non-commercial Acquisitions,' with commercial acquisitions moving to a reorganized Part 12. The core small business set-aside requirements under FAR 13.102 remain intact. However, advocacy groups including the American Small Business Chamber have raised concerns about $24.6 billion in annual simplified acquisitions potentially losing set-aside protections if the commercial acquisition reorganization does not explicitly preserve the rule of two. As of mid-2026, mandatory set-asides remain in force.",
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
