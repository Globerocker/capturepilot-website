import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DoD Contracts for Small Business: Where to Start (2026 Guide) | CapturePilot",
  description:
    "How small businesses win Department of Defense contracts: $508B market, set-aside rules, SBIR/STTR, DLA DIBBS, and pipeline strategy. Updated for 2026.",
  keywords:
    "DoD contracts small business, Department of Defense small business contracts, DoD set-aside, SBIR STTR DoD, DLA DIBBS, defense contracting small business, DoD OSBP, Army contracts small business, Navy contracts small business, defense industrial base small business",
  alternates: { canonical: "https://capturepilot.com/blog/dod-contracts-small-business" },
  openGraph: {
    title: "DoD Contracts for Small Business: Where to Start (2026 Guide) | CapturePilot",
    description:
      "How small businesses win Department of Defense contracts: $508B market, set-aside rules, SBIR/STTR, DLA DIBBS, and pipeline strategy. Updated for 2026.",
    url: "https://capturepilot.com/blog/dod-contracts-small-business",
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
      name: "Department of Defense Contracts for Small Business: Where to Start",
      item: "https://capturepilot.com/blog/dod-contracts-small-business",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Department of Defense Contracts for Small Business: Where to Start",
  description:
    "How small businesses win DoD contracts: the $508B defense market, set-aside rules, SBIR/STTR phases, DLA DIBBS registration, and building a sustainable pipeline.",
  image: "https://capturepilot.com/og/dod-contracts-small-business.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
  mainEntityOfPage: "https://capturepilot.com/blog/dod-contracts-small-business",
  articleSection: "Federal Agencies",
  keywords: [
    "DoD contracts small business",
    "Department of Defense small business",
    "DoD set-aside",
    "SBIR STTR",
    "DLA DIBBS",
    "defense contracting",
    "DoD OSBP",
    "small business pipeline",
  ],
  wordCount: 6800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the Department of Defense spend with small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DoD awarded $508.8 billion in total contracts in FY2025, accounting for 61% of all federal contracting. In FY2024, the government awarded a record $183 billion in prime contracts to small businesses (28.8% of all federal contracting), with DoD earning an 'A' on its small business scorecard and increasing small business awards by $4.9 billion year-over-year.",
      },
    },
    {
      "@type": "Question",
      name: "What is the easiest way for a small business to start with DoD contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For product-based businesses, registering on DLA's DIBBS platform (dibbs.dla.mil) is the lowest-barrier entry point. DLA purchases food, fuel, uniforms, parts, and construction materials in high volume with relatively straightforward procurement. For services firms, subcontracting with a large DoD prime is the fastest way to build defense past performance without needing a prime contract history. Technology-focused small businesses can pursue SBIR Phase I awards — open to any qualified firm with an innovative concept matching a published DoD topic, with Phase I awards up to $314,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need a security clearance to win DoD contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Many DoD contracts — particularly in IT, construction, professional services, logistics, and supply — do not require classified access. Security clearances expand the universe of opportunities available to you, but they are not required to start. If your firm develops a cleared workforce over time, that becomes a significant competitive advantage in the defense market, but it is not a prerequisite for pursuing DoD small business work.",
      },
    },
    {
      "@type": "Question",
      name: "What is the DoD SBIR program and who qualifies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The DoD's Small Business Innovation Research (SBIR) program funds technology development through three phases. Phase I awards up to approximately $314,000 for proof-of-concept work; Phase II awards up to approximately $2.1 million for full R&D development. Any for-profit small business with 500 or fewer employees can apply to DoD SBIR, regardless of prior DoD experience. The DoD's annual SBIR/STTR budget is approximately $1.8 billion — the largest of any federal agency. The program was reauthorized through FY2031 as of April 2026. Topics are published at dodsbirsttr.mil.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Rule of Two in DoD contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FAR 19.502-2 requires that any DoD acquisition expected to attract offers from two or more responsible small businesses at fair market price must be set aside exclusively for small business competition. This is mandatory, not discretionary. Contracting officers cannot award full-and-open if the Rule of Two conditions are met. Responding to Sources Sought notices is how small businesses signal availability and trigger set-aside designations — firms that don't respond may find their NAICS codes defaulting to full-and-open competition simply because the CO couldn't identify enough small business competitors.",
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
