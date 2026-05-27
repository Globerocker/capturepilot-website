import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VA Contracts: How to Win Work With the Department of Veterans Affairs | CapturePilot",
  description:
    "Win VA contracts with SDVOSB or VOSB certification. Learn Veterans First rules, VetCert process, sole source thresholds, and how to build a VA pipeline. Updated 2026.",
  keywords:
    "VA contracts, Department of Veterans Affairs contracts, SDVOSB VA contracts, VOSB contracts, Veterans First contracting program, VetCert certification, VA OSDBU, VA sole source contracts, veteran owned small business federal contracts, VA SDVOSB set aside",
  alternates: { canonical: "https://capturepilot.com/blog/va-contracts-guide" },
  openGraph: {
    title: "VA Contracts: How to Win Work With the Department of Veterans Affairs | CapturePilot",
    description:
      "Win VA contracts with SDVOSB or VOSB certification. Learn Veterans First rules, VetCert process, sole source thresholds, and how to build a VA pipeline. Updated 2026.",
    url: "https://capturepilot.com/blog/va-contracts-guide",
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
      name: "VA Contracts: How to Win Work With the Department of Veterans Affairs",
      item: "https://capturepilot.com/blog/va-contracts-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "VA Contracts: How to Win Work With the Department of Veterans Affairs",
  description:
    "How certified veteran-owned businesses win VA contracts: Veterans First Program rules, VetCert certification, sole source authority, key VA buying offices, and pipeline strategy.",
  image: "https://capturepilot.com/og/va-contracts-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-27",
  dateModified: "2026-05-27",
  mainEntityOfPage: "https://capturepilot.com/blog/va-contracts-guide",
  articleSection: "Federal Agencies",
  keywords: [
    "VA contracts",
    "SDVOSB VA contracts",
    "Veterans First contracting program",
    "VetCert certification",
    "VA OSDBU",
    "VOSB sole source",
    "veteran owned small business",
    "VA set aside",
    "Kingdomware decision",
  ],
  wordCount: 7200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the VA spend with veteran-owned small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VA awarded $10.2 billion — 23% of all prime contract dollars — to Service-Disabled Veteran-Owned Small Businesses (SDVOSBs) in FY2024, far exceeding the 5% statutory goal. Over 2,300 SDVOSB firms received awards, a 3% increase over the prior year. The VA earned an 'A' on the SBA's FY2024 Procurement Scorecard for small business utilization.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Veterans First Contracting Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Veterans First Contracting Program (38 U.S.C. § 8127-8128) requires the VA to give priority to certified SDVOSB and VOSB firms on every acquisition before using any other procurement method — including GSA Federal Supply Schedule orders. A 2016 Supreme Court ruling in Kingdomware Technologies v. United States made this mandatory on all VA contracts. SDVOSBs get first consideration; VOSBs get second consideration; only if neither veteran pool can support competition does the VA move to other small business or open competition.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need VetCert certification to win VA contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Self-certification for SDVOSB status was eliminated on December 22, 2024. All firms pursuing VA Veterans First set-asides and sole source contracts must hold a valid SBA VetCert certification from veterans.certify.sba.gov. The certification must be active at both the time of offer submission and contract award. Processing now averages approximately 12 days after SBA cleared its backlog in November 2025.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VA SDVOSB sole source contract threshold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VA can award sole source contracts — no competition required — to certified SDVOSBs and VOSBs for requirements valued between $250,000 (the simplified acquisition threshold) and $5,000,000. For IT and research contracts, the cap is $3,000,000. Contracting officers cannot split requirements to fit within sole source thresholds. The sole source authority is available when the contracting officer determines a fair and reasonable price can be established with a single certified firm.",
      },
    },
    {
      "@type": "Question",
      name: "What are the largest VA contracting categories for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VA's largest contracting categories include: healthcare services (including a Community Care Network vehicle with $700B potential over ten years), information technology ($6.3B IT budget with $894M for EHR modernization), and construction and facilities management ($2.45B for major and minor construction in FY2025). Healthcare staffing, professional services, and medical supplies also represent significant and consistent annual spend accessible to veteran-owned small businesses.",
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
