import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IT Government Contracts: How Tech Companies Win Federal Work (2026 Guide) | CapturePilot",
  description:
    "How to win IT government contracts: NAICS codes, GWACs like Polaris and SEWP VI, set-asides, DoD cybersecurity spending, clearances, and step-by-step entry path.",
  keywords:
    "IT government contracts, federal IT contracts, government technology contracts, GWAC small business, Polaris GWAC, SEWP VI, CIO-SP4, federal cybersecurity contracts, federal AI contracts, IT set aside contracts, NAICS 541512, NAICS 541519, small business IT federal, DoD IT contracts, government IT spending",
  alternates: {
    canonical: "https://www.capturepilot.com/blog/it-government-contracts",
  },
  openGraph: {
    title:
      "IT Government Contracts: How Tech Companies Win Federal Work (2026 Guide) | CapturePilot",
    description:
      "How to win IT government contracts: NAICS codes, GWACs like Polaris and SEWP VI, set-asides, DoD cybersecurity spending, clearances, and step-by-step entry path.",
    url: "https://www.capturepilot.com/blog/it-government-contracts",
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
      name: "IT Government Contracts: How Tech Companies Win Federal Work",
      item: "https://www.capturepilot.com/blog/it-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "IT Government Contracts: How Tech Companies Win Federal Work",
  description:
    "Complete guide to winning federal IT contracts in 2026: NAICS codes, GWACs (Polaris, SEWP VI, CIO-SP4), set-aside programs, DoD cybersecurity and AI spending, proposal evaluation criteria, security clearances, and a nine-step path to first award.",
  image: "https://www.capturepilot.com/og/it-government-contracts.png",
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
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
  mainEntityOfPage: "https://www.capturepilot.com/blog/it-government-contracts",
  articleSection: "Industries",
  keywords: [
    "IT government contracts",
    "federal IT contracts",
    "Polaris GWAC",
    "SEWP VI",
    "CIO-SP4",
    "NAICS 541512",
    "NAICS 541519",
    "federal cybersecurity contracts",
    "DoD IT spending",
    "small business IT federal",
  ],
  wordCount: 6200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the federal government spend on IT contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government invested $102.31 billion in information technology during FY2025, spanning civilian agencies and the Department of Defense. In the first half of FY2026, DoD alone committed over $32 billion in contract ceiling to AI, cloud computing, cybersecurity, and data analytics programs. Federal IT spending has grown each year for more than a decade and is expected to continue rising, driven by cybersecurity mandates, AI adoption, and legacy system modernization.",
      },
    },
    {
      "@type": "Question",
      name: "What NAICS codes apply to federal IT contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary NAICS codes for federal IT work are: 541512 (Computer Systems Design Services, $68.4B in federal spend), 541511 (Custom Computer Programming Services, $24.2B), 541519 (Other Computer Related Services — covers cybersecurity, infrastructure, help desk), 518210 (Data Processing and Hosting — cloud services), and 541513 (Computer Facilities Management). Most small IT companies qualify under multiple codes and should register all applicable ones on SAM.gov. The SBA size standard for most IT NAICS codes is $34 million in average annual receipts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Polaris GWAC and how do small IT companies get on it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polaris is GSA's Government-Wide Acquisition Contract (GWAC) exclusively for small business IT services, with a $28 billion ceiling through 2031. It has four socioeconomic pools: Small Business, SDVOSB, HUBZone, and WOSB/EDWOSB. Companies get on Polaris during formal on-ramp periods managed by GSA. Applicants must demonstrate relevant IT services past performance at qualifying scope and value. The WOSB pool received its Notice to Proceed in March 2026. Missing an on-ramp period typically means waiting for the next cycle, so companies should track Polaris on-ramp announcements carefully.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a security clearance to win federal IT contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. A significant share of federal IT work — especially civilian agency IT, cloud infrastructure, and software development on unclassified systems — requires only a Public Trust background investigation (IT-1 or IT-2), not a personal security clearance. Secret clearances are required for work on classified DoD networks and many defense IT support roles. Top Secret/SCI clearances are required for intelligence community work. The practical path for companies without cleared staff is to start with civilian agency IT work and Public Trust requirements, build past performance, and pursue DoD classified work after winning a contract that sponsors clearance.",
      },
    },
    {
      "@type": "Question",
      name: "What is CMMC and how does it affect federal IT contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Cybersecurity Maturity Model Certification (CMMC) 2.0 is DoD's framework for verifying that defense contractors properly protect Controlled Unclassified Information (CUI). As CMMC becomes a formal contract requirement across DoD solicitations, IT companies handling CUI must achieve CMMC Level 2 compliance verified by a third-party C3PAO assessor, not self-attestation. Companies that are not CMMC-compliant will be ineligible to bid on covered acquisitions. CMMC readiness assessments and remediation can take 6–18 months, so IT companies pursuing DoD work should begin their readiness process immediately.",
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
