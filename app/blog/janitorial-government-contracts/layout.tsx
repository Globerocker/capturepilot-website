import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Janitorial Government Contracts: A $2.7 Billion Opportunity (2026 Guide) | CapturePilot",
  description:
    "How to win janitorial government contracts: NAICS 561720, set-asides, AbilityOne rules, bid evaluation, QCP requirements, and step-by-step path to first award.",
  keywords:
    "janitorial government contracts, custodial government contracts, NAICS 561720, federal janitorial services, government cleaning contracts, custodial services federal, AbilityOne janitorial, janitorial set aside contracts, small business janitorial federal, government cleaning bid",
  alternates: {
    canonical: "https://www.capturepilot.com/blog/janitorial-government-contracts",
  },
  openGraph: {
    title:
      "Janitorial Government Contracts: A $2.7 Billion Opportunity (2026 Guide) | CapturePilot",
    description:
      "How to win janitorial government contracts: NAICS 561720, set-asides, AbilityOne rules, bid evaluation, QCP requirements, and step-by-step path to first award.",
    url: "https://www.capturepilot.com/blog/janitorial-government-contracts",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.capturepilot.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.capturepilot.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Janitorial Government Contracts: A $2.7 Billion Opportunity",
      item: "https://www.capturepilot.com/blog/janitorial-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Janitorial Government Contracts: A $2.7 Billion Opportunity",
  description:
    "Complete guide to winning federal janitorial contracts: NAICS codes, set-aside programs, AbilityOne restrictions, bid evaluation criteria, Quality Control Plans, and a step-by-step path to first award.",
  image:
    "https://www.capturepilot.com/og/janitorial-government-contracts.png",
  author: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capturepilot.com/logo.png",
    },
  },
  datePublished: "2026-05-28",
  dateModified: "2026-05-28",
  mainEntityOfPage:
    "https://www.capturepilot.com/blog/janitorial-government-contracts",
  articleSection: "Industries",
  keywords: [
    "janitorial government contracts",
    "custodial services federal",
    "NAICS 561720",
    "AbilityOne janitorial",
    "government cleaning contracts",
    "janitorial set aside",
    "quality control plan",
    "Service Contract Act",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What NAICS code do I use for janitorial government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary NAICS code for janitorial government contracts is 561720 (Janitorial Services), which covers routine building cleaning, floor care, restroom servicing, and window washing. The SBA small business size standard for NAICS 561720 is $22 million in average annual receipts. If your contract bundles cleaning with other facility operations services, the contracting officer may assign NAICS 561210 (Facilities Support Services), which has a higher size standard.",
      },
    },
    {
      "@type": "Question",
      name: "What is AbilityOne and how does it affect janitorial bidding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AbilityOne is a federal program that mandates agencies purchase certain products and location-specific services exclusively from nonprofit agencies employing people who are blind or have significant disabilities. Many federal facilities have their custodial services listed on the AbilityOne Procurement List. When a location is listed, the agency must procure from the designated AbilityOne nonprofit without competition under FAR 6.302-5. Always check the AbilityOne Custodial Procurement List before investing time in a proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long are federal janitorial contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal janitorial contracts are typically structured as one base year plus four one-year option periods, for a potential total of five years. If you perform well, the government usually exercises all four options, giving you five years of predictable recurring revenue. Option exercise is not guaranteed — performance ratings matter.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Service Contract Act apply to federal janitorial contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The McNamara-O'Hara Service Contract Act (SCA) applies to most federal service contracts over $2,500 that involve service workers. It requires contractors to pay locally prevailing wages and fringe benefits for specific job classifications in each county. The applicable wage determination is included in every SCA-covered solicitation. Check it before pricing — SCA wages vary significantly by location and failing to account for them correctly will make your bid unprofitable.",
      },
    },
    {
      "@type": "Question",
      name: "How do I win my first federal janitorial contract without past performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three proven paths: (1) Start with local government contracts — municipalities and counties are less competitive and build verifiable government past performance. (2) Subcontract under an existing federal prime to gain documented federal experience. (3) Join the SBA Mentor-Protégé Program — joint ventures can use the mentor's past performance to compete for contracts the protégé could not win alone.",
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
