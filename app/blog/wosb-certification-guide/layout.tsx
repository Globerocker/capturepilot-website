import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WOSB Certification: How Women-Owned Businesses Win Federal Contracts (2026) | CapturePilot",
  description:
    "Complete WOSB certification guide: eligibility, EDWOSB financial thresholds, MySBA application steps, 759 eligible NAICS codes, and strategy to win $26.6B in federal set-asides.",
  keywords:
    "WOSB certification, women owned small business federal contracts, EDWOSB certification, WOSB set aside, women owned small business certification, WOSB eligibility requirements, MySBA certifications, EDWOSB financial thresholds, women owned federal contracts, WOSB program SBA",
  alternates: { canonical: "https://www.capturepilot.com/blog/wosb-certification-guide" },
  openGraph: {
    title: "WOSB Certification: How Women-Owned Businesses Win Federal Contracts (2026) | CapturePilot",
    description:
      "Complete WOSB certification guide: eligibility, EDWOSB financial thresholds, MySBA application steps, 759 eligible NAICS codes, and strategy to win $26.6B in federal set-asides.",
    url: "https://www.capturepilot.com/blog/wosb-certification-guide",
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
      name: "WOSB Certification: How Women-Owned Businesses Win Federal Contracts",
      item: "https://www.capturepilot.com/blog/wosb-certification-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "WOSB Certification: How Women-Owned Businesses Win Federal Contracts",
  description:
    "Complete guide to WOSB and EDWOSB certification: eligibility requirements, financial thresholds, MySBA application process, eligible NAICS codes, and strategy for winning women-owned set-aside contracts.",
  image: "https://www.capturepilot.com/og/wosb-certification-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-02",
  dateModified: "2026-05-02",
  mainEntityOfPage: "https://www.capturepilot.com/blog/wosb-certification-guide",
  articleSection: "Set-Asides for Women-Owned Businesses",
  keywords: [
    "WOSB certification",
    "women owned small business federal contracts",
    "EDWOSB certification",
    "WOSB set aside",
    "women owned small business certification",
    "WOSB eligibility",
    "MySBA certifications",
    "EDWOSB financial thresholds",
    "federal contracting",
  ],
  wordCount: 7800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is WOSB certification and how does it help win federal contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WOSB certification — Women-Owned Small Business certification — is issued by the SBA through the MySBA Certifications portal and allows certified firms to compete for federal contracts set aside exclusively for women-owned businesses. The WOSB Federal Contract Program restricts competition in 759 eligible NAICS code industries to certified firms, and allows contracting officers to make sole source awards up to $4.5M (services) or $7M (manufacturing) to WOSB or EDWOSB firms. The federal government must award 5% of all contracting dollars — over $26 billion annually — to WOSBs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between WOSB and EDWOSB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both WOSB (Women-Owned Small Business) and EDWOSB (Economically Disadvantaged Women-Owned Small Business) require 51% ownership and control by women who are U.S. citizens. EDWOSB additionally requires each qualifying woman owner to meet financial thresholds: personal net worth under $850,000 (excluding home equity, business value, and retirement accounts), adjusted gross income of $400,000 or less averaged over three years, and total personal assets of $6.5 million or less. EDWOSB firms access 759 eligible NAICS codes; WOSB firms (without EDWOSB) access 646 codes. If you qualify for EDWOSB, pursue that designation — it gives broader set-aside access.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for WOSB certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apply through the SBA's MySBA Certifications portal at certifications.sba.gov. The certification is free. Required documents include proof of U.S. citizenship for qualifying women owners, business ownership documents (operating agreement, articles of incorporation, stock certificates), and for EDWOSB, personal financial statements and three years of tax returns. You need an active SAM.gov registration with a UEI number before applying. Certifications are valid for three years and must be renewed before expiration.",
      },
    },
    {
      "@type": "Question",
      name: "What are the WOSB sole source thresholds in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR Subpart 19.15, WOSB and EDWOSB sole source award thresholds are $4.5 million for service contracts (non-manufacturing NAICS codes) and $7 million for manufacturing contracts. When a contracting officer cannot identify two or more WOSB firms capable of performing the work at fair and reasonable prices, they can award directly to a single WOSB firm without competitive bidding — as long as the contract value falls within these thresholds and other FAR conditions are met.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a dollar limit on WOSB set-aside competitions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The former dollar caps on WOSB set-aside competitions have been removed. Contracting officers can now set aside contracts of any value for WOSB or EDWOSB firms in eligible NAICS code industries. There is no upper dollar limit on competitive WOSB set-asides. The dollar limits ($4.5M for services, $7M for manufacturing) apply only to sole source awards — not to set-aside competitions.",
      },
    },
    {
      "@type": "Question",
      name: "How many NAICS codes are eligible for the WOSB program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of 2025, 759 NAICS code industries are eligible under the WOSB Federal Contract Program. Of these, 646 industries are 'substantially underrepresented' — both WOSB and EDWOSB firms can compete for set-asides in those codes. The remaining 113 industries are 'underrepresented' — only EDWOSB firms can compete for set-asides there. The SBA publishes the current eligible NAICS list at sba.gov. The program now covers approximately 85% of all NAICS codes.",
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
