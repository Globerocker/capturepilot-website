import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know (2026)",
  description:
    "Current small business set-aside thresholds explained: $15K micro-purchase, $350K SAT, $5.5M sole source. Updated for October 2025 FAR changes.",
  keywords:
    "small business set aside threshold, simplified acquisition threshold, micro purchase threshold, FAR 19.502, set aside dollar limits, sole source threshold 2025, small business contracting thresholds",
  alternates: { canonical: "https://www.capturepilot.com/blog/small-business-set-aside-threshold" },
  openGraph: {
    title: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know (2026)",
    description:
      "Current small business set-aside thresholds explained: $15K micro-purchase, $350K SAT, $5.5M sole source. Updated for October 2025 FAR changes.",
    url: "https://www.capturepilot.com/blog/small-business-set-aside-threshold",
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
      name: "Small Business Set-Aside Thresholds",
      item: "https://www.capturepilot.com/blog/small-business-set-aside-threshold",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Small Business Set-Aside Thresholds: Dollar Limits You Need to Know",
  description:
    "Current small business set-aside thresholds explained: micro-purchase threshold, simplified acquisition threshold, and sole source limits by certification program. Updated for October 2025 FAR changes.",
  image: "https://www.capturepilot.com/og/small-business-set-aside-threshold.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-10",
  dateModified: "2026-05-10",
  mainEntityOfPage: "https://www.capturepilot.com/blog/small-business-set-aside-threshold",
  articleSection: "Government Contracting",
  keywords: [
    "small business set aside threshold",
    "simplified acquisition threshold",
    "micro purchase threshold",
    "FAR 19.502",
    "rule of two",
    "sole source threshold",
    "8a sole source",
    "SDVOSB threshold",
    "HUBZone set aside",
  ],
  wordCount: 3800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the small business set-aside threshold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, the mandatory small business set-aside zone runs from $15,001 to $350,000. Contracts in this range are required by FAR 19.502-2 to be set aside exclusively for small businesses, unless the contracting officer cannot identify two or more responsible small business offerors (the Rule of Two). The $15,000 lower limit is the micro-purchase threshold; the $350,000 upper limit is the simplified acquisition threshold (SAT). Both were increased on October 1, 2025 from their prior levels of $10,000 and $250,000 respectively.",
      },
    },
    {
      "@type": "Question",
      name: "What is the simplified acquisition threshold in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The simplified acquisition threshold (SAT) increased to $350,000 effective October 1, 2025, up from $250,000. This threshold determines the upper limit of the mandatory small business set-aside zone under FAR Part 13 and FAR 19.502-2. Contracts under the SAT can use simplified acquisition procedures, including shorter solicitations and faster award timelines.",
      },
    },
    {
      "@type": "Question",
      name: "What is the sole source threshold for 8(a), SDVOSB, WOSB, and HUBZone programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, all four major small business certification programs — 8(a), SDVOSB, WOSB, and HUBZone — share the same sole source thresholds: $5.5 million for services and other contracts, and $8.5 million for manufacturing. These limits were raised from $4.5M and $7M respectively. Above these thresholds, competitive set-asides are still available, but a formal Justification and Approval document is required for sole source awards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Rule of Two in federal contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Rule of Two (FAR 19.502-2) requires contracting officers to set aside a contract for small businesses when there is a reasonable expectation of obtaining offers from at least two responsible small business concerns at competitive prices. In the mandatory zone ($15K–$350K), the set-aside 'shall' happen if the Rule of Two is met. Above the simplified acquisition threshold, the set-aside 'should' happen when the Rule of Two is met. If no small businesses respond, the set-aside is withdrawn and the contract is re-solicited on a full-and-open basis.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the federal government spend on small business contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In FY2024, the federal government awarded $183 billion in prime contracts to small businesses — 28.8% of all federal contract dollars. This exceeded the statutory 23% small business contracting goal and represented the fourth consecutive record-high year for small business contracting. Sub-goals include 5% for SDVOSBs, 5% for WOSBs, 3% for HUBZone firms, and 13% for small disadvantaged businesses (SDBs).",
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
