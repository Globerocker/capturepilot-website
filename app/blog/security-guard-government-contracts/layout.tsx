import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Security Guard Government Contracts: Building a Federal Security Business (2026) | CapturePilot",
  description:
    "How to win security guard government contracts: NAICS 561612, armed vs. unarmed requirements, Service Contract Act pricing, set-asides, GSA MAS, and step-by-step path to first award.",
  keywords:
    "security guard government contracts, federal security contracts, NAICS 561612, Protective Security Officer contracts, armed security federal contracts, FPS security contracts, DHS security guard contracts, VA security contracts, security guard set aside, Service Contract Act security, GSA MAS security schedule, small business security contracts federal",
  alternates: {
    canonical: "https://www.capturepilot.com/blog/security-guard-government-contracts",
  },
  openGraph: {
    title:
      "Security Guard Government Contracts: Building a Federal Security Business (2026) | CapturePilot",
    description:
      "How to win security guard government contracts: NAICS 561612, armed vs. unarmed requirements, Service Contract Act pricing, set-asides, GSA MAS, and step-by-step path to first award.",
    url: "https://www.capturepilot.com/blog/security-guard-government-contracts",
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
      name: "Security Guard Government Contracts: Building a Federal Security Business",
      item: "https://www.capturepilot.com/blog/security-guard-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Security Guard Government Contracts: Building a Federal Security Business",
  description:
    "Complete guide to winning federal security guard contracts: NAICS 561612, armed vs. unarmed requirements, Service Contract Act wage pricing, set-aside certifications, GSA MAS and IDIQ vehicles, and a step-by-step path to first award.",
  image:
    "https://www.capturepilot.com/og/security-guard-government-contracts.png",
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
  datePublished: "2026-05-31",
  dateModified: "2026-05-31",
  mainEntityOfPage:
    "https://www.capturepilot.com/blog/security-guard-government-contracts",
  articleSection: "Industries",
  keywords: [
    "security guard government contracts",
    "federal security contracts",
    "NAICS 561612",
    "Protective Security Officer",
    "Service Contract Act",
    "armed security federal",
    "GSA MAS security",
    "FPS contracts",
  ],
  wordCount: 5600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What NAICS code do I use for security guard government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary NAICS code for security guard government contracts is 561612 (Security Guards and Patrol Services). This covers fixed-post guard services, patrol services, and access control. The SBA small business size standard for NAICS 561612 is $29 million in average annual receipts. Some integrated security contracts may be assigned 561621 (Security Systems Services) when electronic monitoring is the primary purpose.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Service Contract Act apply to federal security guard contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The McNamara-O'Hara Service Contract Act applies to virtually every federal security guard contract over $2,500. It requires you to pay each guard the prevailing wage rate for their job classification in the county where they work, as determined by the Department of Labor. In 2025, the DOL health and welfare fringe benefit rate was $5.55 per billable hour on top of base wages. Always pull the SCA wage determination from the solicitation before building your price model.",
      },
    },
    {
      "@type": "Question",
      name: "What are the requirements for armed security guard contracts with the federal government?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Armed federal security guard contracts (such as FPS Protective Security Officer contracts) typically require: officers must be 21 or older; U.S. Citizen or Lawful Permanent Resident with honorable military discharge; minimum two years armed security experience or one year law enforcement experience; completion of firearms training and annual qualification; full background investigation; pre-employment and random drug testing; and a pre-employment physical exam. Insurance requirements are substantially higher than unarmed contracts, typically $2M–$5M in general liability.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Federal Protective Service (FPS) and how do I get security contracts with them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Federal Protective Service (FPS) is a component of DHS responsible for security at approximately 9,000 federally owned or leased facilities. FPS contracts with private security firms to provide Protective Security Officers (PSOs) at those facilities — it does not directly employ guards. To work with FPS, you pursue IDIQ or BPA vehicles issued through DHS procurement channels. FPS has issued multi-year IDIQ vehicles with 13 awardees and ordering periods through 2030. You can also reach FPS contracts through the GSA Multiple Award Schedule SIN 561612.",
      },
    },
    {
      "@type": "Question",
      name: "How do I win my first federal security guard contract without federal past performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three paths work: (1) Build local and state government past performance — county courthouses and state buildings are less competitive and build verifiable government experience. (2) Subcontract under an existing federal security prime to gain documented federal experience. (3) Target single-facility federal awards and bridge contracts that draw fewer competitors. Get SAM.gov registration and any set-aside certifications (especially SDVOSB/VOSB if you qualify) in place before you start bidding.",
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
