import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAM.gov Search Tips: Stop Wasting Time and Find Real Opportunities (2026)",
  description:
    "Master SAM.gov search with filters, saved searches, and early notice tactics. Find government contracts faster with NAICS codes, PSC codes, and set-aside filtering.",
  keywords:
    "SAM.gov search tips, how to search SAM.gov, SAM.gov filters, find government contracts SAM.gov, SAM.gov NAICS codes, SAM.gov sources sought, SAM.gov set-aside search, government contract opportunities, small business SAM.gov",
  alternates: { canonical: "https://www.capturepilot.com/blog/sam-gov-search-tips" },
  openGraph: {
    title: "SAM.gov Search Tips: Stop Wasting Time and Find Real Opportunities",
    description:
      "Master SAM.gov search filters, saved searches, and early notice tactics. Find government contracts faster using NAICS codes, PSC codes, and set-aside filtering.",
    url: "https://www.capturepilot.com/blog/sam-gov-search-tips",
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
      name: "SAM.gov Search Tips",
      item: "https://www.capturepilot.com/blog/sam-gov-search-tips",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SAM.gov Search Tips: Stop Wasting Time and Find Real Opportunities (2026)",
  description:
    "Master SAM.gov search with filters, saved searches, and early notice tactics to find winnable government contract opportunities.",
  image: "https://www.capturepilot.com/og/sam-gov-search-tips.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-05",
  dateModified: "2026-05-05",
  mainEntityOfPage: "https://www.capturepilot.com/blog/sam-gov-search-tips",
  articleSection: "Government Contracting",
  keywords: [
    "SAM.gov search tips",
    "SAM.gov filters",
    "government contract opportunities",
    "NAICS codes",
    "PSC codes",
    "sources sought",
    "set-aside search",
    "small business contracting",
  ],
  wordCount: 4100,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What dollar threshold requires posting on SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR Part 5, any federal contract action above $25,000 must be synopsized on SAM.gov before award. This makes SAM.gov the mandatory publication point for the vast majority of federal contract opportunities. Contracts at or below $10,000 (the micro-purchase threshold) can be awarded without posting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Simplified Acquisition Threshold in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, the Simplified Acquisition Threshold (SAT) was raised to $350,000, up from $250,000, to account for inflation. Below the SAT, agencies can use simplified acquisition procedures. Above it, full FAR-compliant competitive procedures apply. The SAT is an important filter when building your SAM.gov search strategy.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Sources Sought notice on SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Sources Sought notice is market research — the contracting officer is identifying whether small businesses or specific set-aside categories can perform an upcoming requirement. Responding is not bidding; it's announcing your capability before the formal competition begins. Strong Sources Sought responses can influence whether the eventual solicitation gets set aside for small businesses and which certifications apply.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best filters to use on SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective SAM.gov filter stack combines: NAICS Code (your specific 6-digit codes), PSC Code (what's being bought), Set-Aside Type (matching your certifications like SDVOSB, WOSB, or 8(a)), Notice Type (Sources Sought and Presolicitation for early awareness; Solicitation for active bids), Posted Date (last 7 days for daily review), Place of Performance (your region for services and construction), and Agency (your 2-3 target agencies). Save each filter combination as a named saved search with email alerts.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I renew my SAM.gov registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov registration expires 365 days from activation or last renewal. Start the renewal process at least 60 days before expiration — not 30 — because IRS validation and CAGE code confirmation can take 5-10 business days. An expired registration disqualifies you from any contract award, regardless of how strong your proposal is. Use renewal as an opportunity to update your NAICS codes, points of contact, and banking information.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between NAICS codes and PSC codes on SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAICS (North American Industry Classification System) codes classify your business — what industry you're in. They're 6-digit numeric codes and determine your small business size standard eligibility. PSC (Product and Service Code) codes classify what the government is buying on a specific contract — they're 4-character alphanumeric and describe the product or service being procured. Using both in your SAM.gov searches produces more precise results than keyword searches or NAICS codes alone.",
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
