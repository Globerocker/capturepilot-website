import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federal Contract Types Explained: FFP, T&M, IDIQ (2026 Guide) | CapturePilot",
  description:
    "Firm-fixed-price, T&M, IDIQ, cost-plus — explained for small businesses. Learn which federal contract types to pursue, what each requires, and how to read a solicitation.",
  keywords:
    "federal contract types, firm fixed price contract, time and materials contract, IDIQ contracts, cost reimbursement contract, CPFF contract, government contract types, FAR Part 16, GWAC contracts, OASIS plus, GSA schedule, small business federal contracts",
  alternates: { canonical: "https://capturepilot.com/blog/federal-contract-types-explained" },
  openGraph: {
    title: "Federal Contract Types Explained: FFP, T&M, IDIQ (2026 Guide) | CapturePilot",
    description:
      "Firm-fixed-price, T&M, IDIQ, cost-plus — explained for small businesses. Learn which federal contract types to pursue, what each requires, and how to read a solicitation.",
    url: "https://capturepilot.com/blog/federal-contract-types-explained",
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
      name: "Federal Contract Types Explained: FFP, T&M, IDIQ, and Which to Pursue",
      item: "https://capturepilot.com/blog/federal-contract-types-explained",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Federal Contract Types Explained: FFP, T&M, IDIQ, and Which to Pursue",
  description:
    "A complete breakdown of federal contract types for small businesses: FFP, T&M, IDIQ, CPFF, GWACs, and BPAs — with a practical sequencing guide for which to pursue first.",
  image: "https://capturepilot.com/og/federal-contract-types-explained.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  mainEntityOfPage: "https://capturepilot.com/blog/federal-contract-types-explained",
  articleSection: "Getting Started",
  keywords: [
    "federal contract types",
    "firm fixed price contract",
    "time and materials contract",
    "IDIQ contracts",
    "cost reimbursement contract",
    "CPFF contract",
    "government contract types",
    "FAR Part 16",
    "GWAC",
    "OASIS+",
  ],
  wordCount: 6800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main types of federal government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal contracts fall into three main families under FAR Part 16: fixed-price contracts (FFP, FP-EPA, FPIF), cost-reimbursement contracts (CPFF, CPAF, CPIF), and time-and-materials/labor-hour contracts. IDIQ contracts are an ordering vehicle — not a standalone type — and can combine multiple contract types within a single vehicle. The government prefers firm-fixed-price (FFP) and requires written justification for any other type.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a DCAA-compliant accounting system for all government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A DCAA-compliant accounting system is required only for cost-reimbursement contracts (CPFF, CPAF, CPIF) and some time-and-materials contracts where cost tracking is audited. Firm-fixed-price (FFP) contracts have no DCAA accounting requirement — the government pays the agreed price regardless of your actual costs. Most small businesses start with FFP contracts and add DCAA-compliant systems only when pursuing cost-type or R&D work.",
      },
    },
    {
      "@type": "Question",
      name: "What is an IDIQ contract and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Indefinite-Delivery, Indefinite-Quantity (IDIQ) contract is an ordering framework that establishes a minimum guaranteed purchase and a maximum ceiling over the contract period. Individual task orders or delivery orders placed against the IDIQ define the actual work, price, and schedule. Firms compete to get onto the IDIQ vehicle, then compete among vehicle holders for individual task orders. IDIQs can be single-award (one contractor) or multiple-award (several contractors compete for task orders).",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a GWAC and a regular IDIQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Government-Wide Acquisition Contract (GWAC) is an IDIQ vehicle that any federal agency can use — not just the sponsoring agency. GWACs like OASIS+, Alliant 2, CIO-SP4, and Polaris are established by one agency (usually GSA or NIH) but are accessible by contracting officers across the entire federal government. Regular IDIQs are typically agency-specific. Getting onto a GWAC opens your firm to task orders from dozens of agencies over 5-10 years.",
      },
    },
    {
      "@type": "Question",
      name: "Which federal contract type should a small business pursue first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small businesses should start with firm-fixed-price (FFP) standalone contracts, particularly under the $250,000 simplified acquisition threshold, which have the least administrative burden and fastest award timelines. After building past performance, pursue T&M professional services and a GSA Schedule. GWACs like OASIS+ and Polaris require stronger past performance and are better suited to firms with several years of federal contracting history.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Blanket Purchase Agreement (BPA) in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Blanket Purchase Agreement (BPA) is an informal ordering agreement established under FAR Part 13 or off a GSA Schedule contract. Traditional BPAs under FAR Part 13 are capped at the simplified acquisition threshold ($250,000). Schedule BPAs established off a GSA MAS contract can be much larger. Once a BPA is in place, the government can place repeat orders without re-competing each requirement — making BPAs a source of predictable recurring revenue once established.",
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
