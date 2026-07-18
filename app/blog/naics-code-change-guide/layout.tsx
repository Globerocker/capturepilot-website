import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Change NAICS Codes in SAM.gov Without Losing Set-Aside Eligibility (2026)",
  description:
    "Step-by-step guide to adding, changing, or removing NAICS codes in SAM.gov. Learn how updates affect set-aside eligibility, size standards, and SBA certifications.",
  keywords:
    "how to change NAICS codes SAM.gov, update NAICS codes SAM.gov, NAICS code SAM.gov registration, NAICS code set-aside eligibility, SBA size standards NAICS, SAM.gov entity registration NAICS, add NAICS code SAM.gov, primary secondary NAICS code, small business NAICS codes government contracting",
  alternates: { canonical: "https://capturepilot.com/blog/naics-code-change-guide" },
  openGraph: {
    title: "How to Change NAICS Codes in SAM.gov Without Losing Set-Aside Eligibility",
    description:
      "Step-by-step guide to adding, changing, or removing NAICS codes in SAM.gov — and how updates affect your set-aside certifications and SBA size standards.",
    url: "https://capturepilot.com/blog/naics-code-change-guide",
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
      name: "How to Change NAICS Codes in SAM.gov",
      item: "https://capturepilot.com/blog/naics-code-change-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "How to Change Your NAICS Codes in SAM.gov Without Losing Set-Aside Eligibility (2026)",
  description:
    "Step-by-step process for adding, changing, or removing NAICS codes in SAM.gov — including impact on SBA size standards and set-aside certifications.",
  image: "https://capturepilot.com/og/naics-code-change-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  mainEntityOfPage: "https://capturepilot.com/blog/naics-code-change-guide",
  articleSection: "Government Contracting",
  keywords: [
    "NAICS codes SAM.gov",
    "change NAICS codes",
    "SAM.gov registration",
    "SBA size standards",
    "set-aside eligibility",
    "small business certifications",
    "government contracting",
    "SDVOSB WOSB HUBZone",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I change my NAICS codes in SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log in to SAM.gov with your login.gov account, navigate to Entity Registrations in your Workspace, select your entity, click Edit Registration, then navigate to the Core Data section where NAICS codes are managed. You can add new codes, remove existing ones, or change your primary NAICS designation. Changes typically process within 24–48 hours. You can update NAICS codes at any time during your active registration period — you don't have to wait for annual renewal.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to list a solicitation's NAICS code in my SAM.gov profile to bid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GAO has ruled in multiple bid protests that a contractor is not required to list the solicitation's specific NAICS code in their SAM.gov profile to be eligible for award (GAO B-413198, B-409736.2, B-423730). The contracting officer's assigned NAICS code — not your SAM registration — determines which size standard applies and governs your size self-certification on that offer. However, listing relevant NAICS codes in your profile helps contracting officers find your firm during market research.",
      },
    },
    {
      "@type": "Question",
      name: "Does changing NAICS codes in SAM.gov affect my set-aside certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — updating NAICS codes in SAM.gov does not trigger re-certification in SDVOSB, WOSB, 8(a), or HUBZone programs. These certifications are program-level designations and are maintained separately from your SAM.gov registration. However, your eligibility to use a certification on a specific contract depends on meeting the size standard for that contract's NAICS code. Adding a NAICS code where you exceed the size standard means you cannot certify as small on set-aside contracts assigned that code.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between primary and secondary NAICS codes in SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every SAM.gov entity must designate one NAICS code as primary, but this designation does not restrict which contracts you can bid or which size standard applies to any specific contract. The contracting officer assigns the NAICS code for each solicitation, and size is measured against that code regardless of your primary designation. The primary code is most significant in the 8(a) program, where it defines your primary industry classification for SBA purposes. Secondary codes help contracting officers and opportunity matching systems find your firm when searching by those codes.",
      },
    },
    {
      "@type": "Question",
      name: "What SBA size standards apply to common government contracting NAICS codes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Size standards vary significantly by NAICS code. Common examples: IT services (541511, 541512) — $34M average annual receipts; Engineering services (541330) — $25.5M; Administrative management consulting (541611) — $24.5M; Human resources consulting (541612) — $19M; Architectural services (541310) — $12.5M; General construction (236220) — 1,500 employees. SBA calculates receipts-based standards using the prior 5 fiscal years (updated December 2023). Always verify current thresholds at sba.gov/size-standards before certifying.",
      },
    },
    {
      "@type": "Question",
      name: "How often does SAM.gov registration need to be renewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov registration expires exactly 365 days from the approval date of your last renewal. There is no auto-renewal — you must manually log in and complete the renewal process. Begin renewal at least 60 days before expiration, as IRS EIN validation and CAGE code confirmation can take 5–10 business days. A lapsed SAM.gov registration creates immediate ineligibility to receive federal contract awards or payments.",
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
