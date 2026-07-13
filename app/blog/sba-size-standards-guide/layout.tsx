import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBA Size Standards 2026: Complete Guide to Qualifying as a Small Business | CapturePilot",
  description:
    "SBA size standards explained: how revenue vs. employee thresholds work, the affiliate rule, recertification triggers, the 2025 proposed increases, and how to use standards strategically.",
  keywords:
    "SBA size standards, small business size standards, SBA size standard NAICS, small business threshold government contracts, SBA size standards 2026, affiliate rule small business, small business recertification, SBA receipts based size standard, employee based size standard, small business set aside eligibility",
  alternates: { canonical: "https://www.capturepilot.com/blog/sba-size-standards-guide" },
  openGraph: {
    title: "SBA Size Standards 2026: Complete Guide to Qualifying as a Small Business | CapturePilot",
    description:
      "SBA size standards explained: how revenue vs. employee thresholds work, the affiliate rule, recertification triggers, the 2025 proposed increases, and how to use standards strategically.",
    url: "https://www.capturepilot.com/blog/sba-size-standards-guide",
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
      name: "SBA Size Standards: The Complete 2026 Guide",
      item: "https://www.capturepilot.com/blog/sba-size-standards-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SBA Size Standards: The Complete 2026 Guide to Qualifying as a Small Business",
  description:
    "How SBA size standards work for federal contracting: revenue vs. employee thresholds, the affiliate rule, self-certification, recertification triggers, the 2025 proposed rule, and strategic implications.",
  image: "https://www.capturepilot.com/og/sba-size-standards-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
  mainEntityOfPage: "https://www.capturepilot.com/blog/sba-size-standards-guide",
  articleSection: "Getting Started in Government Contracting",
  keywords: [
    "SBA size standards",
    "small business size standards",
    "SBA size standard NAICS",
    "affiliate rule small business",
    "small business recertification",
    "SBA receipts based size standard",
    "employee based size standard",
    "federal contracting small business",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are SBA size standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SBA size standards are maximum size thresholds, set per NAICS industry code, that define whether a company qualifies as a 'small business' for federal contracting purposes. Standards are based on either average annual receipts (revenue) or number of employees, depending on the industry. Companies below the threshold for their NAICS code qualify as small and can compete for set-aside contracts and socioeconomic certifications like 8(a), WOSB, SDVOSB, and HUBZone. The SBA publishes the complete Table of Small Business Size Standards at sba.gov.",
      },
    },
    {
      "@type": "Question",
      name: "How does the SBA measure annual receipts for size standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The SBA calculates annual receipts as total income plus cost of goods sold, as reported on your federal tax returns. The figure is averaged over your latest five complete fiscal years (or fewer years if your business has been operating less than five years). This is your gross revenue — not net income. Subcontractor pass-through revenue counts. Affiliates' revenues are added to yours when determining size.",
      },
    },
    {
      "@type": "Question",
      name: "What is the SBA affiliate rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under SBA regulations (13 CFR § 121.103), affiliated companies' revenues and employees are combined with yours when determining size. Two companies are affiliated when one controls or has the power to control the other, or a third party controls both. Affiliation can arise from common ownership, common management, identity of interest among family members, or economic dependence (receiving 70%+ of revenue from one entity). The 'ostensible subcontractor rule' can also create affiliation when a large subcontractor performs the primary and vital requirements of a contract.",
      },
    },
    {
      "@type": "Question",
      name: "When must a government contractor recertify small business status?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key recertification triggers include: (1) Long-term contracts over 5 years — recertify within 120 days of the 5-year anniversary; (2) Mergers and acquisitions — recertify within 30 days of closing; (3) Option year exercises, if your contract requires it; (4) IDIQ task orders, depending on the specific vehicle's rules. Growing beyond your size standard mid-contract does not automatically terminate the contract, but you lose eligibility for new set-aside awards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for misrepresenting small business size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certifying as small when you do not qualify is a federal crime. Penalties include: False Claims Act liability (up to 3x the contract value plus per-claim penalties), criminal prosecution under 18 U.S.C. § 1001 (up to 5 years imprisonment), contract termination for default, and suspension or debarment from all federal contracting for a minimum of 3 years. Contractors should document their size analysis before every small business set-aside bid.",
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
