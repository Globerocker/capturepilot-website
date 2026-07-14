import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VOSB Certification: How Veteran-Owned Businesses Access Federal Contracts (2026) | CapturePilot",
  description:
    "Complete guide to VOSB certification via SBA VetCert: eligibility rules, required documents, VA Veterans First priority, and strategy for winning VA contracts. 12-day processing.",
  keywords:
    "VOSB certification, veteran owned small business certification, SBA VetCert, VA Veterans First, VOSB vs SDVOSB, veteran owned business federal contracts, VOSB set aside, VetCert application, VA contracts veteran",
  alternates: { canonical: "https://www.capturepilot.com/blog/vosb-certification-guide" },
  openGraph: {
    title: "VOSB Certification: How Veteran-Owned Businesses Access Federal Contracts (2026) | CapturePilot",
    description:
      "Complete guide to VOSB certification via SBA VetCert: eligibility rules, required documents, VA Veterans First priority, and strategy for winning VA contracts.",
    url: "https://www.capturepilot.com/blog/vosb-certification-guide",
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
      name: "VOSB Certification: How Veteran-Owned Businesses Access Federal Contracts",
      item: "https://www.capturepilot.com/blog/vosb-certification-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "VOSB Certification: How Veteran-Owned Businesses Access Federal Contracts",
  description:
    "Complete 2026 guide to VOSB certification through SBA VetCert — eligibility requirements, documents, VA Veterans First priority, and strategies for winning VA contracts.",
  image: "https://www.capturepilot.com/og/vosb-certification-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-07-14",
  dateModified: "2026-07-14",
  mainEntityOfPage: "https://www.capturepilot.com/blog/vosb-certification-guide",
  articleSection: "Set-Asides for Veterans",
  keywords: [
    "VOSB certification",
    "veteran owned small business",
    "SBA VetCert",
    "VA Veterans First",
    "VOSB set-aside",
    "VOSB vs SDVOSB",
    "VA contracts",
    "federal contracting veterans",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is VOSB certification and how do you get it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOSB (Veteran-Owned Small Business) certification is issued by the SBA through its VetCert program at veterans.certify.sba.gov. It requires 51% unconditional ownership and day-to-day management control by one or more honorably discharged veterans, plus active SAM.gov registration and SBA small business size compliance. As of January 2023, self-certification is no longer valid — all VOSB and SDVOSB firms must hold a current SBA VetCert certification. Processing now averages 12 days, down from 81 days at the end of 2024.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between VOSB and SDVOSB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOSB (Veteran-Owned Small Business) requires only honorable veteran status. SDVOSB (Service-Disabled Veteran-Owned Small Business) additionally requires a VA-documented service-connected disability rating — any rating, including 0%. SDVOSB is more powerful: it provides government-wide set-aside eligibility and the highest priority tier at the VA. VOSB provides VA-specific set-aside eligibility only, at the second priority tier under the VA Veterans First Contracting Program. If you qualify for SDVOSB, always pursue that certification — it includes VOSB benefits and more.",
      },
    },
    {
      "@type": "Question",
      name: "What contracts can a VOSB compete for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOSB certification provides access to VA-specific set-aside contracts under the VA Veterans First Contracting Program (38 U.S.C. § 8127). This includes VOSB set-aside competitions at the VA and VA sole-source contract awards when the contracting officer cannot identify two available SDVOSB firms. VOSB status does not provide government-wide set-aside eligibility outside the VA — for that, SDVOSB certification is required.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SBA VetCert VOSB certification take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of late 2025, the SBA cleared its VetCert backlog and reduced average processing time to approximately 12 days, down from 81 days at the end of 2024. The application is free and submitted through veterans.certify.sba.gov. Certification is valid for three years and must be renewed within 90 days before expiration.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for VOSB certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Required documents for SBA VetCert VOSB certification typically include: DD-214 (Certificate of Release or Discharge from Active Duty), ownership documents (operating agreement for LLCs; articles of incorporation, bylaws, and stock ledger for corporations), federal tax returns for the past three years, bank signature authority documentation, and any outside management contracts, franchise agreements, or investor arrangements. The SBA also requires an organizational chart showing the veteran in the highest officer position.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VA Veterans First Contracting Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VA Veterans First Contracting Program (VAAR Subpart 819.70) requires VA contracting officers to prioritize certified veteran-owned firms above all other set-aside types. The mandatory priority order is: SDVOSB first, VOSB second, other small business set-asides (8(a), HUBZone, WOSB), and finally full-and-open competition. VA contracting officers must exhaust each tier before moving to the next. In FY2024, the VA directed $10.2 billion (23% of prime contract dollars) to SDVOSBs — far exceeding the 5% government-wide goal.",
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
