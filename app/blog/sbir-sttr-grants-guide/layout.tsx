import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBIR and STTR Grants: How Small Businesses Win R&D Funding from DoD (2026)",
  description:
    "The federal government awards $4B/year through SBIR and STTR. Learn Phase I–III award amounts, eligibility rules, DoD topic strategy, and the Phase III sole-source prize.",
  keywords:
    "SBIR grants small business, STTR program, SBIR Phase I Phase II, DoD SBIR 2026, SBIR eligibility requirements, SBIR vs STTR, Phase III sole source, SBIR award amounts, small business R&D funding, SBIR reauthorization 2026, SBIR application tips, government R&D grants",
  alternates: { canonical: "https://capturepilot.com/blog/sbir-sttr-grants-guide" },
  openGraph: {
    title: "SBIR and STTR Grants: How Small Businesses Win R&D Funding from DoD",
    description:
      "Phase I awards up to $323K. Phase II up to $2.15M. Phase III: no cap, sole-source, forever. Learn how the SBIR program works and how to win.",
    url: "https://capturepilot.com/blog/sbir-sttr-grants-guide",
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
      name: "SBIR and STTR Grants Guide",
      item: "https://capturepilot.com/blog/sbir-sttr-grants-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "SBIR and STTR Grants: How Small Businesses Win R&D Funding from DoD",
  description:
    "The federal government awards roughly $4 billion per year through the SBIR and STTR programs. The Department of Defense alone accounts for about $1 billion annually. This guide covers Phase I ($323K cap), Phase II ($2.15M cap), and Phase III sole-source authority — plus eligibility rules, DoD topic strategy, the 2026 reauthorization changes, and the most common mistakes that kill first-time applications.",
  image: "https://capturepilot.com/og/sbir-sttr-grants-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
  mainEntityOfPage: "https://capturepilot.com/blog/sbir-sttr-grants-guide",
  articleSection: "Government Contracting",
  keywords: [
    "SBIR grants small business",
    "STTR program",
    "SBIR Phase I Phase II",
    "DoD SBIR 2026",
    "SBIR eligibility",
    "Phase III sole source",
    "SBIR award amounts",
    "small business R&D funding",
    "SBIR reauthorization 2026",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can you get from an SBIR grant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of April 2026, Phase I SBIR awards are capped at $323,090 and Phase II awards at $2,153,927 without SBA approval. Awards above these caps require an SBA waiver, which agencies routinely grant for high-priority technology areas. Phase III awards — follow-on contracts funded through regular procurement rather than SBIR program funds — have no dollar cap and can reach tens of millions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between SBIR and STTR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SBIR (Small Business Innovation Research) does not require a formal research partner. STTR (Small Business Technology Transfer) requires the small business to partner with a U.S. non-profit research institution such as a university or FFRDC. Under SBIR, the small business must perform at least 66.7% of Phase I work and the Principal Investigator must be employed by the company at least 51% of the time. Under STTR, the small business performs at least 40%, the research institution performs at least 30%, and the PI does not need to be primarily employed by the small business.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible for SBIR grants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To be eligible for SBIR, your company must: (1) have fewer than 500 employees including all affiliates; (2) be more than 50% directly owned and controlled by U.S. citizens or permanent residents (or by other eligible small businesses, Indian tribes, ANCs, or NHOs); (3) have a U.S. place of business and operate primarily in the United States; and (4) for SBIR, have the Principal Investigator employed by the company at least 51% of the time. The 2026 reauthorization added mandatory foreign risk screening on all applications.",
      },
    },
    {
      "@type": "Question",
      name: "What is SBIR Phase III and how does sole-source work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SBIR Phase III involves commercializing technology developed under Phase I or Phase II. Phase III receives no SBIR program funding — money comes from regular government procurement or private investment. The critical advantage: government agencies can award Phase III contracts on a sole-source basis, without competition, as long as the work relates to technology developed under a prior SBIR or STTR award. No contracting justification is required, there is no dollar cap, any contract type is allowed, and the sole-source authority never expires.",
      },
    },
    {
      "@type": "Question",
      name: "What changed with the 2026 SBIR reauthorization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Small Business Innovation and Economic Security Act (S. 3971), signed April 13, 2026, extended the SBIR and STTR programs through FY2031 after a six-month lapse. Key changes include: mandatory foreign risk screening on every application, a new $30 million Strategic Breakthrough award category, updated Phase I and Phase II award caps ($323,090 and $2,153,927 respectively), and a requirement for SBA to develop Phase III sole-source training materials for contracting officers.",
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
