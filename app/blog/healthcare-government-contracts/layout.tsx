import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Healthcare Government Contracts: The $90 Billion Market for Medical Service Providers | CapturePilot",
  description:
    "How to win healthcare government contracts with VA, DHA, and HHS. NAICS codes, set-asides, contract vehicles, and a step-by-step path for medical providers.",
  keywords:
    "healthcare government contracts, VA healthcare contracts, DHA medical contracts, HHS contracts small business, federal medical contracts, SDVOSB healthcare, healthcare staffing government contracts, medical equipment federal contracts, TRICARE contractor, government health services, federal healthcare NAICS codes, VA community care, CMS contracts, NIH contracts small business, healthcare set aside contracts",
  alternates: {
    canonical: "https://capturepilot.com/blog/healthcare-government-contracts",
  },
  openGraph: {
    title:
      "Healthcare Government Contracts: The $90 Billion Market for Medical Service Providers",
    description:
      "How to win healthcare government contracts with VA, DHA, and HHS. NAICS codes, set-asides, contract vehicles, and a step-by-step path for medical providers.",
    url: "https://capturepilot.com/blog/healthcare-government-contracts",
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
      name: "Healthcare Government Contracts",
      item: "https://capturepilot.com/blog/healthcare-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Healthcare Government Contracts: The $90 Billion Market for Medical Service Providers",
  description:
    "Complete guide to winning federal healthcare contracts in 2026: VA, DHA, and HHS agency breakdowns, NAICS codes, set-aside programs, contract vehicles (VHA IHT 2.0, DHA staffing IDIQ, VA FSS), proposal evaluation criteria, and a seven-step path into the market for medical service providers.",
  image:
    "https://capturepilot.com/og/healthcare-government-contracts.png",
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
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  mainEntityOfPage:
    "https://capturepilot.com/blog/healthcare-government-contracts",
  articleSection: "Industries",
  keywords: [
    "healthcare government contracts",
    "VA healthcare contracts",
    "DHA medical contracts",
    "HHS small business contracts",
    "SDVOSB healthcare",
    "VHA IHT 2.0",
    "healthcare staffing federal",
    "TRICARE contractor",
    "medical equipment federal",
    "CMS NIH contracts",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the federal government spend on healthcare contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government spends roughly $90 billion or more annually on healthcare-related contracts across the VA (~$35 billion), the Defense Health Agency ($40.3 billion Defense Health Program), and HHS agencies including CDC, NIH, CMS, and the Indian Health Service. This does not include Medicare and Medicaid entitlement payments, which are a separate flow of funds. The $90 billion in procurement contracts is where private sector healthcare businesses — staffing firms, clinical providers, medical device companies, and health IT firms — directly compete for awards.",
      },
    },
    {
      "@type": "Question",
      name: "What NAICS codes apply to healthcare government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key NAICS codes for federal healthcare contracting include: 621111 (Offices of Physicians), 621610 (Home Health Care Services), 621420 (Outpatient Mental Health and Substance Abuse Centers), 621999 (All Other Ambulatory Health Care Services), 622110 (General Medical and Surgical Hospitals), 623110 (Nursing Care Facilities), and 339112 (Surgical and Medical Instrument Manufacturing). Healthcare businesses should also consider 561320 (Temporary Staffing) if they provide clinical staffing, and 541714 (Biomedical R&D) if they support research. Register all applicable codes on SAM.gov — each opens a separate pool of set-aside opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "Do veteran-owned healthcare businesses have an advantage in federal contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, significantly. The VA operates under the Rule of Two, which legally requires contracting officers to restrict competition to SDVOSB or VOSB vendors whenever two or more such firms can compete at a fair price. This mandatory preference is stronger than at any other federal agency. The VHA IHT 2.0 contract — a $14 billion IDIQ through 2035 — is reserved exclusively for SDVOSB firms. Veteran-owned healthcare businesses should obtain SDVOSB or VOSB certification through the SBA VetCert program before pursuing any VA healthcare work.",
      },
    },
    {
      "@type": "Question",
      name: "What is the easiest way for a small medical business to start winning federal contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest path for most small healthcare businesses is to: (1) register on SAM.gov with complete NAICS codes, (2) obtain relevant small business certifications (SDVOSB, WOSB, 8(a) depending on eligibility), (3) get on the VA Federal Supply Schedule if you sell medical products, (4) pursue subcontracting with established prime contractors who hold VA or DHA vehicle positions, and (5) respond to Sources Sought notices to establish a relationship with contracting officers before solicitations are issued. The 8(a) program is particularly valuable for healthcare companies — sole-source awards up to $25 million are available without competition for 8(a)-certified businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How does TRICARE work for private healthcare contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TRICARE is the DoD's managed care program for military beneficiaries. The two main TRICARE contracts are held by Humana (East Region, $70.8 billion over nine years, 5 million+ beneficiaries) and TriWest Healthcare Alliance (West Region, ~2.8 million beneficiaries). These are managed care support contracts — too large for most small businesses to prime. However, both prime contractors subcontract extensively for clinical staffing, specialty care, behavioral health, and administrative services. Small healthcare businesses can enter the TRICARE market by subcontracting with Humana or TriWest, or by pursuing direct DHA contracts for military treatment facility staffing through the DHA medical staffing multi-award IDIQ.",
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
