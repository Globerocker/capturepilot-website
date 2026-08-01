import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Surety Bonds for Government Contractors: How to Get Bonded and Win Construction Work (2026) | CapturePilot",
  description:
    "Miller Act bonding requirements, SBA Surety Bond Guarantee Program, bond types, costs (1-3%), and a step-by-step guide for small business government contractors.",
  keywords:
    "surety bond government contract, Miller Act bonding requirements, SBA surety bond guarantee program, performance bond government contract, payment bond government contract, bid bond federal construction, surety bond small business, federal construction bonding, Treasury Circular 570 T-List, how to get bonded government contracts, surety bond cost percentage, SBG program SBA",
  alternates: {
    canonical: "https://capturepilot.com/blog/surety-bond-government-contract",
  },
  openGraph: {
    title:
      "Surety Bonds for Government Contractors: How to Get Bonded and Win Construction Work (2026)",
    description:
      "Miller Act thresholds, SBA Surety Bond Guarantee Program details, bond costs by contractor profile, the Three C's of underwriting, and a step-by-step path to getting bonded for federal construction.",
    url: "https://capturepilot.com/blog/surety-bond-government-contract",
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
      name: "Surety Bonds for Government Contractors: How to Get Bonded and Win Construction Work",
      item: "https://capturepilot.com/blog/surety-bond-government-contract",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Surety Bonds for Government Contractors: How to Get Bonded and Win Construction Work",
  description:
    "Complete guide to surety bonding for federal construction: Miller Act threshold ($150,000), the three types of bonds and their percentage requirements, the SBA Surety Bond Guarantee Program ($9M–$14M), underwriter evaluation criteria, premium costs by contractor profile, and an eight-step path to getting bonded.",
  image: "https://capturepilot.com/og/surety-bond-government-contract.png",
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
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  mainEntityOfPage:
    "https://capturepilot.com/blog/surety-bond-government-contract",
  articleSection: "Getting Started",
  keywords: [
    "surety bond government contract",
    "Miller Act bonding",
    "SBA surety bond guarantee program",
    "performance bond federal construction",
    "payment bond federal construction",
    "bid bond federal contract",
    "Treasury Circular 570",
    "bonding capacity",
    "federal construction small business",
    "SBG program",
  ],
  wordCount: 5200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When are surety bonds required on federal construction contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Miller Act (40 U.S.C. §§ 3131-3134) requires performance and payment bonds on federal construction contracts over $150,000. Both bonds must equal 100% of the contract value and must be issued by a surety listed on Treasury Department Circular 570 (the T-List). Bid bonds — typically 20% of the bid price — are required on virtually all solicitations above this threshold and must be submitted with your bid. Contracts between $35,000 and $150,000 may require alternative payment protections at the contracting officer's discretion. Contracts under $35,000 have no mandatory bonding.",
      },
    },
    {
      "@type": "Question",
      name: "What is the SBA Surety Bond Guarantee Program and who qualifies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SBA Surety Bond Guarantee (SBG) Program helps small businesses access surety bonding they cannot obtain in the commercial market. The SBA guarantees 80-90% of the surety company's loss if the contractor defaults, making it viable for sureties to bond businesses they otherwise would not. The program covers contracts up to $9 million (or $14 million for federal contracts with a contracting officer certification). To qualify, you must be a small business under SBA size standards for your primary NAICS code. In FY2025, the program guaranteed a record $10.6 billion in bonds, supporting more than 2,200 small businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How much do surety bonds cost for federal construction contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surety bond premiums for performance and payment bonds together typically range from 0.5% to 1.5% of contract value for established contractors with strong financials, 1% to 3% for contractors with solid credit and some track record, and 2% to 5% or more for new contractors or those using the SBA program. On a $500,000 contract, this translates to roughly $2,500 to $15,000 in bond premiums. Bid bonds typically cost $100 to $250 as a flat fee. Budget bond premiums into every bid — they are a real cost of doing federal construction work.",
      },
    },
    {
      "@type": "Question",
      name: "What do surety underwriters look for when evaluating a small contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surety underwriters evaluate contractors based on the Three C's: Capital (financial strength — audited or CPA-reviewed financial statements, working capital, net worth, cash flow), Capacity (operational ability — work history, largest project completed, key personnel, equipment), and Character (reputation — personal and business credit, payment history with subs and suppliers, litigation history). For smaller bonds under $750,000, a personal credit check and personal financial statement may be sufficient. For larger bonds, full financial underwriting with CPA-prepared statements is required. A credit score above 700 typically qualifies for standard market rates.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get bonded for federal construction work if I have no federal past performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but your bonding capacity will be more limited. Sureties evaluate your track record based on all construction work — not just federal projects. State, local, and private construction projects demonstrate capacity and financial strength. To get started: work with an NASBP member surety agent, have CPA-prepared financial statements ready, and consider the SBA Surety Bond Guarantee Program if commercial sureties offer insufficient capacity. Target smaller federal contracts (renovation and repair in the $150,000-$500,000 range) for your first prime awards, complete them successfully, and use those CPARS ratings and payment bond history to build your surety profile for larger opportunities.",
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
