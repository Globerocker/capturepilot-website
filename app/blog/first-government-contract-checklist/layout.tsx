import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Your First Government Contract: Step-by-Step Checklist | CapturePilot",
  description:
    "A practical step-by-step checklist for winning your first federal contract as a small business. Covers SAM.gov, NAICS codes, set-asides, proposals, and what to expect.",
  keywords:
    "how to get your first government contract, first government contract checklist, small business government contracting, SAM.gov registration, federal contracting for beginners, how to start government contracting, government contract checklist, small business federal contracts, how to bid on government contracts, first federal contract",
  alternates: { canonical: "https://capturepilot.com/blog/first-government-contract-checklist" },
  openGraph: {
    title: "How to Get Your First Government Contract: A Step-by-Step Checklist",
    description:
      "From SAM.gov registration to your first award — a practical checklist covering every step small businesses need to win their first federal contract.",
    url: "https://capturepilot.com/blog/first-government-contract-checklist",
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
      name: "How to Get Your First Government Contract",
      item: "https://capturepilot.com/blog/first-government-contract-checklist",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Get Your First Government Contract: A Step-by-Step Checklist",
  description:
    "A comprehensive checklist for small businesses pursuing their first federal contract. Covers SAM.gov registration, NAICS codes, set-aside eligibility, capability statements, finding opportunities, writing proposals, and realistic timelines.",
  image: "https://capturepilot.com/og/first-government-contract-checklist.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-09-12",
  dateModified: "2026-09-12",
  mainEntityOfPage: "https://capturepilot.com/blog/first-government-contract-checklist",
  articleSection: "Getting Started",
  keywords: [
    "how to get your first government contract",
    "first government contract checklist",
    "small business government contracting",
    "SAM.gov registration",
    "federal contracting for beginners",
    "government contract checklist",
    "how to bid on government contracts",
    "small business set-asides",
    "NAICS codes federal contracting",
    "capability statement government",
  ],
  wordCount: 3400,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to get your first government contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realistically, expect 6 to 18 months from the day you start pursuing government contracts to your first award. Micro-purchases (under $15,000) can come within weeks of SAM.gov registration. Subcontracts typically take 6–12 months. Prime contracts on competitive solicitations usually take 12–24 months. The biggest variable is how aggressively you pursue opportunities and how well-matched your capabilities are to active solicitations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the first step to getting a government contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first step is registering your business in SAM.gov (System for Award Management) at sam.gov. Registration is free and mandatory — you cannot receive a federal contract without an active SAM.gov registration. The process takes 1–2 hours to complete online and 2–4 weeks for government validation. Start at least 45 days before any contracting deadline.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a special certification to get government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You don't need a special certification to bid on most federal contracts — you just need an active SAM.gov registration. However, certifications like SDVOSB (service-disabled veteran-owned), WOSB (women-owned), 8(a) (socioeconomically disadvantaged), and HUBZone give you access to set-aside contracts with less competition. The government awarded nearly $179 billion to small businesses in FY2025 — a significant portion through set-aside programs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the simplified acquisition threshold for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025 (FY2026), the simplified acquisition threshold rose to $350,000. Contracts at or below this threshold must be set aside for small businesses when two or more small businesses can compete at fair market prices. The micro-purchase threshold also increased to $15,000 — below this amount, agencies can buy from any vendor without competition.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I find government contract opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov is the official federal opportunity database. All contracts above $25,000 must be posted there. You can search by NAICS code, agency, location, and set-aside type. For forecasting, check each agency's procurement forecast on their website. USASpending.gov shows historical awards, which helps you identify incumbents and buying patterns. CapturePilot's matching engine aggregates and scores opportunities based on your specific profile.",
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
