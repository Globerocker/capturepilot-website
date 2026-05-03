import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "8(a) Sole Source Contracts: The Fastest Path to Federal Revenue (2026) | CapturePilot",
  description:
    "8(a) sole source contracts let certified firms win up to $5.5M without competition. New 2025 thresholds, eligibility rules, the 5-step award process, and strategy inside.",
  keywords:
    "8a sole source contracts, 8a program eligibility, 8a certification, SBA 8a program, sole source threshold 2025, 8a business development program, federal contracting 8a, 8a sole source limit, socially disadvantaged business federal contracts",
  alternates: { canonical: "https://www.capturepilot.com/blog/8a-sole-source-contracts" },
  openGraph: {
    title: "8(a) Sole Source Contracts: The Fastest Path to Federal Revenue (2026) | CapturePilot",
    description:
      "8(a) sole source contracts let certified firms win up to $5.5M without competition. New 2025 thresholds, eligibility rules, the 5-step award process, and strategy inside.",
    url: "https://www.capturepilot.com/blog/8a-sole-source-contracts",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.capturepilot.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "8(a) Sole Source Contracts: The Fastest Path to Federal Revenue",
      item: "https://www.capturepilot.com/blog/8a-sole-source-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "8(a) Sole Source Contracts: The Fastest Path to Federal Revenue",
  description:
    "A complete guide to 8(a) sole source contracts — 2025 thresholds, eligibility requirements, the 5-step award process, and how to get agencies to sole source to your firm.",
  image: "https://www.capturepilot.com/og/8a-sole-source-contracts.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
  mainEntityOfPage: "https://www.capturepilot.com/blog/8a-sole-source-contracts",
  articleSection: "Set-Asides & Certifications",
  keywords: [
    "8a sole source contracts",
    "8a program eligibility",
    "8a certification",
    "SBA 8a program",
    "sole source threshold 2025",
    "socially disadvantaged business",
    "federal contracting set-asides",
    "8a business development",
  ],
  wordCount: 6800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the 8(a) sole source contract limit in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, the 8(a) sole source contract threshold is $5.5 million for services, IT, professional services, and most other work types, and $8.5 million for contracts under manufacturing NAICS codes. Below these limits, an agency can award a contract directly to a certified 8(a) firm without competitive bidding, provided the SBA accepts the offer letter.",
      },
    },
    {
      "@type": "Question",
      name: "How long does 8(a) certification take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For well-prepared applicants with complete documentation, 8(a) certification typically takes 90 to 120 days from initial submission. Incomplete applications or those requiring additional information from the SBA can take 6 to 9 months. The application is submitted online at certify.sba.gov and there is no filing fee.",
      },
    },
    {
      "@type": "Question",
      name: "Who qualifies for the 8(a) Business Development Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To qualify for the SBA 8(a) program, a business must be: at least 51% owned and controlled by a U.S. citizen who is socially and economically disadvantaged; a small business under SBA size standards; in business for at least 2 years; and have an owner whose personal net worth is $850,000 or less (excluding home equity and business equity), adjusted gross income averaging $400,000 or less, and total assets of $6.5 million or less. Owners must also submit a social disadvantage narrative detailing specific instances of disadvantage.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get an agency to sole source an 8(a) contract to my firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agencies sole source to 8(a) firms they already know. The key steps are: identify agencies that consistently use 8(a) sole source authority in your NAICS codes (using USASpending.gov data), build relationships with program managers before requirements are written, respond substantively to Sources Sought notices, request informational briefings with contracting offices, and maintain a strong capability statement. Contracting officers don't browse the 8(a) directory — they award to firms they trust.",
      },
    },
    {
      "@type": "Question",
      name: "What is the lifetime sole source limit for 8(a) firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Individually-owned 8(a) firms have a lifetime aggregate sole source cap of $168.5 million. Once a firm's cumulative sole source awards reach this threshold, sole source authority ends — even if years remain in the 9-year program term. The firm can still compete for 8(a) competitive set-asides and other contract vehicles. Entity-owned firms (Tribal, ANC, NHO) operate under different rules with no fixed dollar cap.",
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
