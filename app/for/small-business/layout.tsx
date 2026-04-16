import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracts for Small Businesses",
  description: "14,000+ small business set-aside contracts. SBA 8(a), HUBZone, SDB opportunities matched to your business profile.",
  keywords: "small business government contracts, SBA 8a contracts, HUBZone contracts, SDB set-aside, small business set-aside, federal contracts small business, government contracting SMB",
  alternates: { canonical: "https://www.capturepilot.com/for/small-business" },
  openGraph: {
    title: "Government Contracts for Small Businesses",
    description: "14,000+ small business set-aside contracts. SBA 8(a), HUBZone, SDB opportunities matched to your business profile.",
    url: "https://www.capturepilot.com/for/small-business",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.capturepilot.com/for" },
    { "@type": "ListItem", position: 3, name: "Small Business", item: "https://www.capturepilot.com/for/small-business" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Government Contracts for Small Businesses",
  description:
    "Federal contract matching for small businesses. The government is required to award 23% of all prime contracts — over $150 billion annually — to small businesses. CapturePilot indexes 14,332+ small business set-aside opportunities and matches them to your NAICS, certifications, and target states.",
  url: "https://www.capturepilot.com/for/small-business",
  audience: {
    "@type": "Audience",
    audienceType: "Small Business",
  },
  about: {
    "@type": "Thing",
    name: "SBA 8(a), HUBZone, SDB, and Small Business Set-Aside contracts",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many government contracts are set aside for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government is required by law to award at least 23% of all prime contract dollars to small businesses — over $150 billion per year. CapturePilot currently indexes 14,332+ active small business set-aside opportunities pulled daily from SAM.gov. Under simplified acquisition thresholds ($10K–$250K), contracts are automatically reserved exclusively for small businesses, making SAP one of the easiest entry points.",
      },
    },
    {
      "@type": "Question",
      name: "What's the easiest way for a small business to win its first federal contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Micro-purchases under $10,000 require no formal bidding — agencies can buy directly from any SAM-registered small business. Next easiest is Simplified Acquisition ($10K–$250K), reserved exclusively for small business with less paperwork. 8(a) firms can receive sole-source awards up to $4.5 million, and HUBZone firms get a 10% price evaluation preference plus sole-source eligibility up to $4.5M.",
      },
    },
    {
      "@type": "Question",
      name: "Does CapturePilot check which set-asides I'm eligible for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We verify your SAM.gov status, pull your current certifications (8(a), HUBZone, SDVOSB, WOSB, VOSB), and check your size standard against the NAICS codes in each solicitation. Every matched opportunity surfaces only if your certifications qualify, so you never waste hours on a bid you can't win.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try CapturePilot before paying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — every Pro subscription starts with a 30-day free trial, no credit card required. You get unlimited matching across 40,000+ federal opportunities, AI Proposal Writer, capability statement builder, market intelligence, and partner search. The Quick Checker is free forever with no signup — enter your website and see NAICS codes, SAM status, and top 5 matches in 30 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find teaming partners for larger contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot's Partner Search pulls from 1M+ SAM-registered companies. Filter by NAICS, certifications, and location to find primes, subs, mentor-protégé candidates, and JV partners. Large prime contracts typically require subcontracting plans with small business participation, so getting on a prime's team is a fast-track entry into larger federal work you couldn't compete for alone.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
