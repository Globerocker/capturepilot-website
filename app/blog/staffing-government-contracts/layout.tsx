import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Staffing Government Contracts: How to Win Federal Staffing Work (2026) | CapturePilot",
  description:
    "How staffing agencies win federal contracts: NAICS 561320, GSA Schedule 736, VA's $23B ICSP IDIQ, Service Contract Act pricing, set-asides, and step-by-step path to first award.",
  keywords:
    "staffing government contracts, federal staffing contracts, temporary services government contracts, NAICS 561320, GSA schedule 736, VA staffing contracts, ICSP IDIQ, Service Contract Act staffing, SDVOSB staffing contracts, small business staffing federal, government staffing agency, temporary help services federal",
  alternates: {
    canonical: "https://www.capturepilot.com/blog/staffing-government-contracts",
  },
  openGraph: {
    title:
      "Staffing Government Contracts: How to Win Federal Staffing Work (2026) | CapturePilot",
    description:
      "How staffing agencies win federal contracts: NAICS 561320, GSA Schedule 736, VA's $23B ICSP IDIQ, Service Contract Act pricing, set-asides, and step-by-step path to first award.",
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
    "Staffing and Temporary Services Government Contracts: A Growing Market",
  description:
    "Complete guide for staffing agencies pursuing federal contracts: NAICS codes, GSA Schedule 736 TAPS, the VA's $23B ICSP IDIQ, Service Contract Act pricing, set-aside certifications, and a step-by-step path to first award.",
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
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage:
    "https://www.capturepilot.com/blog/staffing-government-contracts",
  articleSection: "Industries",
  keywords: [
    "staffing government contracts",
    "federal staffing contracts",
    "NAICS 561320",
    "GSA Schedule 736",
    "VA staffing IDIQ",
    "Service Contract Act",
    "SDVOSB staffing",
    "temporary help services federal",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What NAICS code do I use for staffing government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary NAICS code for staffing government contracts is 561320 (Temporary Help Services), with a small business size standard of $30 million in average annual receipts. Secondary codes that may apply include 561330 (Professional Employer Organizations), 561110 (Office Administrative Services), and 541612 (Human Resources Consulting Services). For clinical staffing at VA facilities, healthcare-specific NAICS codes also apply. Always verify the NAICS code in the actual solicitation before bidding.",
      },
    },
    {
      "@type": "Question",
      name: "What is GSA Schedule 736 and how do staffing agencies get on it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSA Schedule 736, now part of the Multiple Award Schedule (MAS) as the Temporary and Administrative Professional Staffing (TAPS) schedule, is the primary federal acquisition vehicle for temporary staffing services. It has five Special Item Numbers (SINs): Administrative & Clerical (736-1), ADP Occupations (736-2), General Services Support (736-3), Information and Arts (736-4), and Technical and Professional (736-5). To get on it, you submit an offer through GSA's eOffer portal, demonstrating two years of commercial experience, competitive pricing, and financial stability. Approval typically takes 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "What was the VA's $23 billion staffing contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In early 2024, the Veterans Health Administration awarded eight companies spots on a 10-year, $23 billion Integrated Critical Staffing Program (ICSP) IDIQ contract. The entire competition was set aside for service-disabled veteran-owned small businesses (SDVOSBs). The contract covers clinical and non-clinical staffing, program management, human capital services, and professional services to address staffing shortages at VA facilities nationwide. Individual task orders are competed among the eight awardees.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Service Contract Act apply to federal staffing contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Service Contract Act applies to virtually every federal staffing contract over $2,500. It requires you to pay each worker the prevailing wage rate for their job classification in the county where they work, as determined by the Department of Labor. In 2025, the DOL health and welfare fringe benefit rate was $5.55 per billable hour on top of base wages. Always pull the wage determination (WD number) from the solicitation before building your pricing model — commercial labor rates do not apply to federal staffing contracts.",
      },
    },
    {
      "@type": "Question",
      name: "How do I win my first federal staffing contract without federal past performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four paths work: (1) Apply for GSA MAS Schedule 736 TAPS — once on the schedule, agencies can order from you without separate competition. (2) Build state and local government past performance, which federal evaluators treat as relevant government experience. (3) Subcontract under existing federal staffing primes to gain documented federal performance. (4) Target small single-agency staffing solicitations that draw fewer competitors. Get all set-aside certifications you qualify for (SDVOSB, 8(a), WOSB) in place before you bid.",
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
