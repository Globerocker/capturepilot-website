import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Energy Service Contracts (ESPC): How Contractors Win Federal Energy Efficiency Work | CapturePilot",
  description:
    "How to win federal ESPC and energy government contracts. DOE ESCO list, USACE $3B MATOC, VA SDVOSB track, NAICS codes, and a step-by-step path for energy contractors.",
  keywords:
    "ESPC energy government contracts, energy savings performance contract federal, ESCO qualification DOE, USACE ESPC MATOC, federal energy efficiency contracts, UESC utility energy service contract, DOE IDIQ ESPC, energy government contractor, federal energy services small business, SDVOSB energy contract, ESPC small business, federal building energy efficiency contracts, GSA energy conservation contract, energy services NAICS codes, FEMP energy contractor",
  alternates: {
    canonical: "https://capturepilot.com/blog/energy-government-contracts",
  },
  openGraph: {
    title:
      "Energy Service Contracts (ESPC): How Contractors Win Federal Energy Efficiency Work",
    description:
      "How to win federal ESPC and energy government contracts. DOE ESCO list, USACE $3B MATOC, VA SDVOSB track, NAICS codes, and a step-by-step path for energy contractors.",
    url: "https://capturepilot.com/blog/energy-government-contracts",
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
      item: "https://capturepilot.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://capturepilot.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Energy Service Contracts (ESPC)",
      item: "https://capturepilot.com/blog/energy-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Energy Service Contracts (ESPC): How Contractors Win Federal Energy Efficiency Work",
  description:
    "Complete guide to winning federal ESPC and energy efficiency contracts in 2026: DOE Qualified ESCO List requirements, USACE ESPC IV MATOC ($3B, 18 holders), VA SDVOSB ESPC track, UESC subcontracting, NAICS codes, proposal requirements including M&V plans, and a seven-step path into the market for energy service companies.",
  image:
    "https://capturepilot.com/og/energy-government-contracts.png",
  author: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: {
      "@type": "ImageObject",
      url: "https://capturepilot.com/logo.png",
    },
  },
  datePublished: "2026-08-17",
  dateModified: "2026-08-17",
  mainEntityOfPage:
    "https://capturepilot.com/blog/energy-government-contracts",
  articleSection: "Industries",
  keywords: [
    "ESPC energy government contracts",
    "energy savings performance contract",
    "DOE qualified ESCO list",
    "USACE ESPC MATOC",
    "federal energy efficiency",
    "UESC utility energy service contract",
    "energy services small business federal",
    "SDVOSB energy contract",
    "FEMP energy contractor",
    "GSA energy conservation contract",
  ],
  wordCount: 5600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an ESPC and how does it work for federal contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Energy Savings Performance Contract (ESPC) is a contract between a federal agency and an Energy Service Company (ESCO) for energy efficiency improvements with no upfront cost to the agency. The ESCO finances and installs improvements (lighting, HVAC, building controls, renewable energy), then receives payments from the energy cost savings generated over the performance period — typically 15 to 25 years. The ESCO guarantees the savings; if actual savings fall short of the guarantee, the ESCO compensates the agency for the difference. The DOE IDIQ ESPC program has generated $8.9 billion in project investment and $19.3 billion in cumulative energy savings since 1998.",
      },
    },
    {
      "@type": "Question",
      name: "How do I qualify for the DOE Qualified ESCO List?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DOE Qualified List of Energy Service Companies requires: a completed application using DOE Form 415.1 submitted through eProject Builder, two detailed project case studies demonstrating end-to-end ESPC experience where your firm served as prime contractor with full financial responsibility, demonstrated capacity to arrange project financing, and key personnel with energy engineering and M&V expertise. Design-only or construction-only experience does not qualify — you must demonstrate complete prime ESPC delivery including savings guarantees. The DOE Qualification Review Board evaluates applications in batches during open application windows. Approximately 100 firms currently hold qualified status.",
      },
    },
    {
      "@type": "Question",
      name: "What is the USACE ESPC IV MATOC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The USACE ESPC IV MATOC (Multiple Award Task Order Contract) is a $3 billion energy services contract vehicle awarded by the U.S. Army Engineering and Support Center, Huntsville in June 2025. It has 18 MATOC holders (including one small business, GreenGen), a 10-year period of performance (5-year base plus 5-year option), and covers federal facilities inside and outside the United States. Task orders are competed among the 18 holders for individual projects. The contract includes on-ramping provisions that allow additional small businesses to be added during the performance period.",
      },
    },
    {
      "@type": "Question",
      name: "How can a small business win federal energy efficiency work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small businesses have four primary paths into federal ESPC work: (1) Subcontract to one of the 18 USACE ESPC IV MATOC holders — they are required to meet small business subcontracting goals and actively seek lighting, HVAC, controls, and M&V subcontractors; (2) Pursue VA ESPC work as an SDVOSB — the VA has a dedicated SDVOSB ESPC track and one project has already been awarded to a SDVOSB; (3) Work as an ESCO prime on smaller federal projects under the DOE IDIQ after gaining Qualified ESCO List status; (4) Enter through UESC subcontracting — utilities serving as prime contractors on Utility Energy Service Contracts are required to file small business subcontracting plans with GSA.",
      },
    },
    {
      "@type": "Question",
      name: "What happened to ESPC ENABLE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GSA retired the ESPC ENABLE program on March 12, 2025. No new task orders can be issued under ENABLE. Existing ENABLE projects continue through their performance periods. ENABLE was a streamlined GSA Supply Schedule-based vehicle (SIN 334512) that allowed agencies to initiate smaller ESPC projects with reduced procurement burden. With ENABLE retired, the primary federal civilian ESPC vehicles are now the DOE IDIQ ESPC program (for DOE Qualified ESCOs), the USACE ESPC IV MATOC (for DoD and other federal facilities), the VA ESPC program, and agency-specific ESPC procurements under individual agency statutory authority.",
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
