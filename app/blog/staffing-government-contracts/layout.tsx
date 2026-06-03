import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Staffing Government Contracts: How to Win Federal Temp Services Work (2026) | CapturePilot",
  description:
    "How staffing and temp services firms win federal contracts: NAICS 561320, GSA TAPS Schedule 736, OASIS+, SCA pricing, set-asides, and a step-by-step path to first award.",
  keywords:
    "staffing government contracts, federal staffing contracts, temporary services government contracts, NAICS 561320, GSA Schedule 736 TAPS, government staffing agency contracts, SCA staffing, OASIS+ professional services, small business staffing federal, temporary help services federal, government temp staffing, federal staffing set aside",
  alternates: {
    canonical: "https://www.capturepilot.com/blog/staffing-government-contracts",
  },
  openGraph: {
    title:
      "Staffing Government Contracts: How to Win Federal Temp Services Work (2026) | CapturePilot",
    description:
      "How staffing and temp services firms win federal contracts: NAICS 561320, GSA TAPS Schedule 736, OASIS+, SCA pricing, set-asides, and a step-by-step path to first award.",
    url: "https://www.capturepilot.com/blog/staffing-government-contracts",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.capturepilot.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.capturepilot.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Staffing and Temporary Services Government Contracts: A Growing Market",
      item: "https://www.capturepilot.com/blog/staffing-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Staffing and Temporary Services Government Contracts: A Growing Market for Small Business",
  description:
    "Complete guide to winning federal staffing and temporary services contracts: NAICS 561320, GSA Schedule 736 TAPS, OASIS+, Service Contract Act pricing, set-aside certifications, top agencies, and a step-by-step path to first award.",
  image:
    "https://www.capturepilot.com/og/staffing-government-contracts.png",
  author: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capturepilot.com/logo.png",
    },
  },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  mainEntityOfPage:
    "https://www.capturepilot.com/blog/staffing-government-contracts",
  articleSection: "Industries",
  keywords: [
    "staffing government contracts",
    "federal staffing contracts",
    "NAICS 561320",
    "GSA Schedule 736 TAPS",
    "OASIS+ professional services",
    "Service Contract Act staffing",
    "temporary services federal",
    "small business staffing contracts",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What NAICS code do I use for government staffing contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary NAICS code for staffing government contracts is 561320 (Temporary Help Services), with an SBA small business size standard of $34 million in average annual receipts. Other relevant codes include 561311 (Employment Placement Agencies) for direct hire work and 541612 (Human Resources Consulting Services) for HR advisory projects. Always verify the NAICS code listed in the specific solicitation — it determines your size standard eligibility for that contract.",
      },
    },
    {
      "@type": "Question",
      name: "What is the GSA TAPS schedule and how do I get on it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSA Schedule 736 (Temporary and Administrative Professional Staffing, or TAPS) is the federal government's primary vehicle for purchasing temporary staffing services. It covers five Special Item Numbers (SINs): administrative and clerical (736-1), general services and support (736-3), information and arts (736-4), and technical and professional occupations (736-5). To get on TAPS, submit an offer through the GSA eOffer portal with past performance documentation in your target SINs, negotiate rates with GSA, and pass their financial and compliance review. The process typically takes three to six months.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Service Contract Act apply to federal staffing contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The McNamara-O'Hara Service Contract Act applies to virtually every federal staffing contract over $2,500. It requires you to pay each worker the prevailing wage for their job classification in the county where they work, as set by Department of Labor wage determinations. Executive Order 14026 set the federal contractor minimum wage at $17.75 per hour effective January 1, 2025 — if the SCA rate is lower, you must pay the EO minimum. Always pull the wage determination from the solicitation before building your pricing model.",
      },
    },
    {
      "@type": "Question",
      name: "What happened to DHS PACTS III for staffing contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DHS cancelled the PACTS III (Professional Administrative, Clerical, and Technical Services) contract vehicle in 2025 after determining it was non-mission critical and redundant with existing GSA solutions. DHS pivoted its professional services and staffing spend to GSA OASIS+ and the GSA Multiple Award Schedules. Staffing firms that previously targeted PACTS III should pursue OASIS+ and GSA Schedule 736 TAPS to reach DHS buyers. DHS spent over $1.1 billion on PACTS II before the transition, indicating the underlying demand remains substantial.",
      },
    },
    {
      "@type": "Question",
      name: "How do I win my first federal staffing contract without federal past performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three approaches work: (1) Build state and local government past performance — county offices and state agencies buy staffing services and are less competitive than federal. (2) Subcontract under an existing federal prime contractor holding staffing awards — documented subcontract performance counts toward past performance in most solicitations. (3) Pursue 8(a) sole-source awards if you qualify — contracting officers can direct staffing contracts up to $4.5 million to 8(a) firms without competition. Apply for certifications (SDVOSB, WOSB, 8(a), HUBZone) and GSA Schedule 736 TAPS in parallel with building your references.",
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
