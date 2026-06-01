import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Facility Maintenance Government Contracts: Winning O&M Work (2026 Guide) | CapturePilot",
  description:
    "How to win facility maintenance government contracts: NAICS 561210, GSA BMO vehicle, SCA requirements, pricing O&M bids, and step-by-step path to first award.",
  keywords:
    "facility maintenance government contracts, O&M government contracts, operations and maintenance federal, NAICS 561210, GSA building maintenance operations, facility management federal contracts, government O&M contracts small business, Service Contract Act facility maintenance, federal facility management, BMO contract vehicle",
  alternates: {
    canonical:
      "https://www.capturepilot.com/blog/facility-maintenance-government-contracts",
  },
  openGraph: {
    title:
      "Facility Maintenance Government Contracts: Winning O&M Work (2026 Guide) | CapturePilot",
    description:
      "How to win facility maintenance government contracts: NAICS 561210, GSA BMO vehicle, SCA requirements, pricing O&M bids, and step-by-step path to first award.",
    url: "https://www.capturepilot.com/blog/facility-maintenance-government-contracts",
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
      name: "Facility Maintenance Government Contracts: Winning O&M Work",
      item: "https://www.capturepilot.com/blog/facility-maintenance-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Facility Maintenance Government Contracts: Winning O&M Work",
  description:
    "Complete guide to winning federal facility maintenance contracts: NAICS codes, GSA BMO vehicle, Service Contract Act compliance, pricing strategy, evaluation criteria, and a step-by-step path to first award.",
  image:
    "https://www.capturepilot.com/og/facility-maintenance-government-contracts.png",
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
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  mainEntityOfPage:
    "https://www.capturepilot.com/blog/facility-maintenance-government-contracts",
  articleSection: "Industries",
  keywords: [
    "facility maintenance government contracts",
    "O&M government contracts",
    "NAICS 561210",
    "GSA Building Maintenance Operations",
    "Service Contract Act",
    "federal facility management",
    "operations and maintenance federal",
    "BMO contract vehicle",
  ],
  wordCount: 6200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What NAICS code covers facility maintenance government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary NAICS code for integrated facility maintenance and operations government contracts is 561210 (Facilities Support Services), with an SBA small business size standard of $47 million in average annual receipts. Single-discipline contracts may use more specific codes: 561720 (Janitorial Services, $22M size standard), 561730 (Landscaping, $9.5M size standard), 238220 (Plumbing and HVAC, $19M), or 238210 (Electrical, $19M). Use the NAICS code specified in the solicitation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the GSA Building Maintenance and Operations (BMO) contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The GSA Building Maintenance and Operations (BMO) contract is a multiple-award, indefinite delivery, indefinite quantity (IDIQ) governmentwide contract vehicle under the Federal Strategic Sourcing Initiative. It has a 10-year base term (5-year base plus 5-year option) and includes both unrestricted and small business set-aside pools. The small business pool has a maximum task order ceiling of $15 billion. Agencies issue task orders against the vehicle without running a full competition, making BMO a high-value vehicle to be on.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Service Contract Act apply to facility maintenance federal contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The McNamara-O'Hara Service Contract Act (SCA) applies to most federal service contracts over $2,500 that employ service workers. It mandates minimum wages and fringe benefits for specific job classifications — custodians, HVAC technicians, electricians, groundskeepers — based on locally prevailing rates by county. The applicable wage determination is included in every SCA-covered solicitation. Always check the current wage determination before pricing any federal O&M contract.",
      },
    },
    {
      "@type": "Question",
      name: "What licenses and certifications do I need for federal O&M contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common requirements for federal facility maintenance contracts include: EPA 608 certification for HVAC technicians handling refrigerants, NICET Level II or higher for fire protection systems, state-issued electrician and plumber licenses for the contract jurisdiction, and OSHA safety certifications. Key personnel requirements vary by contract — read the Performance Work Statement carefully. Missing a required certification makes your proposal technically unacceptable regardless of price.",
      },
    },
    {
      "@type": "Question",
      name: "How long are federal facility maintenance contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal facility maintenance contracts are typically structured as one base year plus four one-year option periods, for a potential total of five years. Some large multi-building contracts use longer base periods. When you perform well and maintain strong CPARS ratings, agencies generally exercise all option years, providing five years of recurring revenue from a single contract award.",
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
