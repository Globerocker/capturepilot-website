import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 10 Best NAICS Codes for Small Business Government Contractors (2026)",
  description:
    "The top NAICS codes for winning federal contracts as a small business: 541512, 561210, 541330, and more. Includes spend data, size standards, and set-aside rates.",
  keywords:
    "best NAICS codes for small business, NAICS codes government contracts, NAICS 541512, NAICS 561210, NAICS 541330, federal contracting NAICS code, small business set aside NAICS, government contractor NAICS code list",
  alternates: { canonical: "https://www.capturepilot.com/blog/best-naics-codes-small-business" },
  openGraph: {
    title: "The 10 Best NAICS Codes for Small Business Government Contractors (2026)",
    description:
      "Top NAICS codes for federal contracts: which codes see the most small business awards, best set-aside rates, and how to pick yours.",
    url: "https://www.capturepilot.com/blog/best-naics-codes-small-business",
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
      name: "Best NAICS Codes for Small Business",
      item: "https://www.capturepilot.com/blog/best-naics-codes-small-business",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The 10 Best NAICS Codes for Small Business Government Contractors",
  description:
    "A data-driven guide to the top NAICS codes for winning federal government contracts as a small business, including spending data from FY2024–FY2025, size standards, and set-aside rates.",
  image: "https://www.capturepilot.com/og/best-naics-codes-small-business.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-16",
  dateModified: "2026-05-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/best-naics-codes-small-business",
  articleSection: "Government Contracting",
  keywords: [
    "best NAICS codes for small business",
    "NAICS codes government contracts",
    "NAICS 541512",
    "NAICS 561210",
    "NAICS 541330",
    "small business set aside",
    "federal contracting NAICS",
    "government contractor NAICS code",
  ],
  wordCount: 3600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What NAICS code is best for government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best NAICS code depends on your business type. By total federal spending, NAICS 541512 (Computer Systems Design Services) leads at $68.4 billion in FY2024-2025. For highest small business set-aside rate, NAICS 561210 (Facilities Support Services) tops the list with over 51% of contracts reserved for small businesses. For R&D-focused firms, NAICS 541715 gives access to SBIR/STTR programs with $31.2 billion in federal spend.",
      },
    },
    {
      "@type": "Question",
      name: "How many NAICS codes can a small business register on SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov allows you to register as many NAICS codes as you want. However, you should only register codes for work you can genuinely deliver — the SBA can challenge your NAICS code claims, and registering dozens of codes you cannot credibly perform under is a compliance risk. Most competitive small businesses focus on 3–6 core NAICS codes that align with their actual capabilities and past performance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the NAICS code for IT government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary IT NAICS codes for federal government contracting are: 541512 (Computer Systems Design Services) — $68.4B in federal spend, size standard $34M revenue; 541519 (Other Computer Related Services) — $22.1B in federal spend, #1 code on GSA MAS Schedule; and 541511 (Custom Computer Programming Services) — growing demand for AI and analytics work, size standard $34M revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What is the size standard for NAICS 541512?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SBA size standard for NAICS 541512 (Computer Systems Design Services) is $34 million in average annual revenue. This means your firm's average revenue over the past three fiscal years must be at or below $34 million to qualify as a small business under this code on a federal solicitation. Size standards are set by the SBA and updated periodically — always verify the current standard at SBA.gov before self-certifying.",
      },
    },
    {
      "@type": "Question",
      name: "Which NAICS codes have the most small business set-asides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on FY2024-2025 federal contracting data, NAICS 561210 (Facilities Support Services) has the highest small business set-aside rate with over 51% of contracts reserved for small businesses. Construction codes like 236220 also carry high set-aside rates, particularly for SDVOSB, 8(a), and HUBZone firms. IT codes 541512 and 541519 have the largest absolute dollar volumes of small business awards.",
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
