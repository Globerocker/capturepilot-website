import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracting 101: Complete Beginner's Guide (2026)",
  description:
    "Learn how to get government contracts as a small business. NAICS codes, SAM.gov registration, set-asides, contract types, and step-by-step instructions.",
  keywords:
    "government contracting 101, how to get government contracts, government contracting for beginners, federal contracting guide, small business government contracts, GovCon beginner",
  alternates: { canonical: "https://www.capturepilot.com/blog/government-contracting-101" },
  openGraph: {
    title: "Government Contracting 101: Complete Beginner's Guide (2026)",
    description:
      "Learn how to get government contracts as a small business. NAICS codes, SAM.gov registration, set-asides, contract types, and step-by-step instructions.",
    url: "https://www.capturepilot.com/blog/government-contracting-101",
    type: "article",
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
      name: "Government Contracting 101",
      item: "https://www.capturepilot.com/blog/government-contracting-101",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Contracting 101: Complete Beginner's Guide (2026)",
  description:
    "Step-by-step guide to government contracting for small businesses: NAICS codes, SAM.gov registration, set-asides, contract types, and how to win your first bid.",
  image: "https://www.capturepilot.com/og/government-contracting-101.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-01-10",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/government-contracting-101",
  articleSection: "Government Contracting",
  keywords: [
    "government contracting",
    "small business",
    "SAM.gov",
    "NAICS",
    "set-aside",
    "federal contracts",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Government contracting is the process by which the US federal government buys goods and services from private businesses. The US government is the largest buyer in the world, spending $700B+ per year across defense, civilian agencies, and set-aside programs for small businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start bidding on government contracts as a small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three steps: (1) Identify your NAICS codes and industry classification, (2) Register your business in SAM.gov to get a UEI number, (3) Search SAM.gov or a tool like CapturePilot for opportunities matching your capabilities and set-aside eligibility. Most first wins come from Sources Sought notices or micro-purchase opportunities under $10K.",
      },
    },
    {
      "@type": "Question",
      name: "What is a NAICS code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAICS (North American Industry Classification System) codes are 6-digit codes that classify what your business does. Federal agencies use NAICS codes to categorize contract opportunities. You need to know your primary NAICS and any secondary codes to find matching opportunities and qualify for set-aside programs.",
      },
    },
    {
      "@type": "Question",
      name: "What are federal set-aside programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set-asides are contracts reserved for specific categories of small businesses: 8(a) (socioeconomically disadvantaged), WOSB (women-owned), SDVOSB (service-disabled veteran-owned), HUBZone (historically underutilized business zones), and general Small Business. Set-asides reduce competition — only certified businesses can bid.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SAM.gov registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial SAM.gov registration typically takes 7–10 business days. You'll need an EIN, banking info, NAICS codes, and a designated Entity Administrator. Registration is free and must be renewed annually.",
      },
    },
    {
      "@type": "Question",
      name: "What is the easiest federal contract type to win?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Micro-purchases (under $10,000) are the easiest entry point — simplified acquisition, often non-competitive, and no formal proposal required. After you build past performance, move up to Simplified Acquisition Procedures ($10K–$250K), then full contracts.",
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
