import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Government Contract Eligibility Checker — CapturePilot",
  description:
    "Check if your business qualifies for government contracts in 30 seconds. Free SAM.gov eligibility checker. Find your NAICS codes, set-aside status, and matching federal opportunities. No signup required.",
  keywords:
    "government contract eligibility check, can my business get government contracts, SAM.gov eligibility checker, NAICS code finder, small business government contracts, federal contract eligibility, SBA certification check, SDVOSB eligibility, WOSB eligibility, 8a certification check, government contract checker free",
  alternates: { canonical: "https://www.capturepilot.com/check" },
  openGraph: {
    title: "Free Government Contract Eligibility Checker — CapturePilot",
    description:
      "Enter your website. Get your NAICS codes, SAM status, and matching opportunities in 30 seconds. 100% free, no signup required.",
    url: "https://www.capturepilot.com/check",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Government Contract Eligibility Checker",
    description:
      "Check if your business qualifies for government contracts. Free NAICS, SAM.gov, and opportunity matching in 30 seconds.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Quick Checker", item: "https://www.capturepilot.com/check" },
  ],
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot Quick Checker",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Government Contract Eligibility Tool",
  operatingSystem: "Web",
  url: "https://www.capturepilot.com/check",
  description:
    "Free, no-signup government contract eligibility checker. Enter your website URL and receive NAICS code identification, SAM.gov registration status, set-aside eligibility (SDVOSB, WOSB, HUBZone, 8(a)), and live federal opportunity matches in under 30 seconds.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "NAICS code identification from website content",
    "SAM.gov registration status verification",
    "Set-aside eligibility screening (SDVOSB, VOSB, WOSB, EDWOSB, HUBZone, 8(a))",
    "Live federal opportunity matching from 40,000+ SAM.gov listings",
    "No credit card, no signup, no cost",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
    bestRating: "5",
  },
  provider: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the CapturePilot Quick Checker really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free with no hidden fees, no credit card required, and no signup needed. The Quick Checker exists to help small businesses discover their government contracting potential before committing to any paid service. You get unlimited checks forever — run it on your own company, competitors, or prospective teaming partners at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly does the Quick Checker analyze?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your website URL and we crawl your site to identify services and capabilities, match them against the NAICS code taxonomy to identify 3–5 relevant federal industry codes, verify your SAM.gov registration status, check set-aside eligibility (SDVOSB, VOSB, WOSB, EDWOSB, HUBZone, 8(a)), and match you against 40,000+ live federal opportunities pulled daily from SAM.gov. Results appear in under 30 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be registered on SAM.gov to use the Quick Checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Quick Checker works whether or not you're registered. If your business is already on SAM.gov, we pull your existing data. If you're not registered, we identify your NAICS codes, screen set-aside eligibility, and show matching opportunities — then give you a step-by-step guide to complete SAM registration, which is required before you can be awarded any federal contract.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the NAICS code identification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our crawler cross-references your website content against the full NAICS taxonomy (over 1,000 codes) plus SAM.gov and SBA databases. We typically identify 3–5 relevant codes with over 90% accuracy. You can refine the list inside your account. NAICS codes drive set-aside eligibility and opportunity matching, so getting them right is critical — the Quick Checker is often more accurate than self-selected NAICS in SAM profiles.",
      },
    },
    {
      "@type": "Question",
      name: "What happens with my data after the check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We only analyze publicly available website content. We don't store personal information or share data with third parties. Your results are private to you. If you create a free CapturePilot account, your results are saved so you can track opportunities over time and receive weekly email alerts when new matching federal contracts are posted to SAM.gov.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Quick Checker work for any industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The federal government procures across every industry: janitorial services (NAICS 561720, $2.7B sq ft of federal real estate), IT services (541512), construction (236220), facility support (561210), professional services (541611), manufacturing, healthcare, cybersecurity, and thousands more. If your business provides a product or service, the Quick Checker will identify the relevant federal NAICS codes and matching opportunities.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
