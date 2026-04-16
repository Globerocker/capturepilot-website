import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Government Contract Eligibility Checker",
  description: "Check if your business qualifies for government contracts — free. Get NAICS codes, SAM status, and matching opportunities in 30 seconds.",
  keywords: "government contract eligibility checker, free contract eligibility check, am I eligible for government contracts, NAICS code finder, SAM.gov status check, GovCon eligibility",
  alternates: { canonical: "https://www.capturepilot.com/resources/quick-checker-guide" },
  openGraph: {
    title: "Free Government Contract Eligibility Checker",
    description: "Check if your business qualifies for government contracts — free. Get NAICS codes, SAM status, and matching opportunities in 30 seconds.",
    url: "https://www.capturepilot.com/resources/quick-checker-guide",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.capturepilot.com/resources" },
    { "@type": "ListItem", position: 3, name: "Quick Checker Guide", item: "https://www.capturepilot.com/resources/quick-checker-guide" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use the CapturePilot Quick Checker to Find Your Federal Eligibility",
  description:
    "Step-by-step guide to using the free Quick Checker tool to identify your NAICS codes, verify SAM.gov status, screen set-aside eligibility, and find matching federal opportunities — all in under 30 seconds without signing up.",
  totalTime: "PT30S",
  supply: [
    { "@type": "HowToSupply", name: "Your company website URL" },
  ],
  tool: [
    { "@type": "HowToTool", name: "CapturePilot Quick Checker (free, no account)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enter your website URL",
      text: "Go to capturepilot.com/check and type or paste your company's website URL. No account, no credit card, no signup required. The tool works for any business in any US industry.",
      url: "https://app.capturepilot.com/check",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "We crawl your website",
      text: "Our crawler reads your website content, identifies your services and capabilities, and extracts signals that map to the federal NAICS taxonomy of 1,000+ industry codes. The scan takes roughly 10–20 seconds depending on site size.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Review your identified NAICS codes",
      text: "The Quick Checker returns 3–5 most relevant NAICS codes with over 90% accuracy. These codes drive every downstream decision: set-aside eligibility, opportunity matching, and size-standard calculation. Example codes include 561720 Janitorial, 541512 IT Support, 236220 Commercial Construction.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Check SAM.gov registration status",
      text: "We verify whether your company is active on SAM.gov (the mandatory federal registration for any business receiving a federal award). If you're registered, we pull your UEI, CAGE code, and expiration date. If not, we provide step-by-step registration guidance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Screen set-aside eligibility",
      text: "We check your profile against every federal set-aside category: SDVOSB, VOSB, WOSB, EDWOSB, HUBZone, 8(a), and Small Business size standards. Every stacked certification multiplies the opportunities you qualify for.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "See live matching opportunities",
      text: "The Quick Checker pulls from 40,000+ active federal opportunities indexed daily from SAM.gov and shows your top 5 matches scored against your profile. For unlimited matches plus AI proposal generation, create a free CapturePilot account (30-day Pro trial, no credit card).",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the Quick Checker at identifying NAICS codes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our crawler typically identifies 3–5 relevant NAICS codes with over 90% accuracy by cross-referencing your website content against the full NAICS taxonomy (1,000+ codes), SAM.gov data, and SBA industry databases. In practice, the Quick Checker is often more accurate than self-selected NAICS in existing SAM profiles — many businesses have outdated or incorrect codes that cause them to miss matching opportunities or surface irrelevant ones.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be on SAM.gov to use the Quick Checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Quick Checker works whether or not you're registered on SAM.gov. If you are registered, we pull your existing data (UEI, CAGE code, certifications, expiration dates). If not, we still identify NAICS codes, screen set-aside eligibility, and show matching opportunities — then provide a step-by-step guide to complete SAM registration, which is required before you can be awarded any federal contract.",
      },
    },
    {
      "@type": "Question",
      name: "What set-aside categories does the Quick Checker screen for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All major federal set-aside categories: Small Business (based on SBA size standards per NAICS), SDVOSB (Service-Disabled Veteran-Owned), VOSB (Veteran-Owned), WOSB (Women-Owned), EDWOSB (Economically Disadvantaged WOSB), HUBZone (Historically Underutilized Business Zone), and 8(a) Business Development Program. The sole-source award limit for most of these is $4.5M (services) or $7M (manufacturing).",
      },
    },
    {
      "@type": "Question",
      name: "Is my data stored or shared after I run the Quick Checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Quick Checker analyzes publicly available website content and public SAM.gov data. We don't store personal information, and we don't share your data with third parties. Results are private to your session. If you choose to create a free CapturePilot account, your results are saved to your profile so you can track opportunities over time and receive weekly email alerts on new matching contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do after running the Quick Checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're not yet SAM-registered, start that process immediately — it takes 7–10 business days and blocks all federal work. If you're registered, review the NAICS codes the checker identified and update your SAM profile if needed. Then create a free CapturePilot account to see all 40,000+ opportunities matched to your profile (not just top 5), generate AI proposals, track your pipeline, and find teaming partners — 30-day free trial, no credit card.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
