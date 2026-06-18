import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key FAR Clauses Every Small Business Contractor Must Know (2025 Update)",
  description:
    "The FAR clauses that matter most for small business contractors: set-asides, limitations on subcontracting, rerepresentation, prompt payment, and the 2025 threshold changes.",
  keywords:
    "FAR clauses small business, FAR 52.219-14, limitations on subcontracting, FAR 52.219-28 rerepresentation, small business set-aside clauses, FAR 52.212-5 commercial items, prompt payment FAR, simplified acquisition threshold 2025, FAR Part 19 overhaul 2025, government contracting compliance, termination for convenience, federal acquisition regulation small business",
  alternates: { canonical: "https://capturepilot.com/blog/far-clauses-small-business" },
  openGraph: {
    title: "Key FAR Clauses Every Small Business Contractor Must Know",
    description:
      "SAT raised to $350K. MPT raised to $15K. FAR Part 19 overhauled in Sept 2025. Here are the clauses that control your eligibility, payment, and compliance — updated for current rules.",
    url: "https://capturepilot.com/blog/far-clauses-small-business",
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
      name: "Key FAR Clauses for Small Business",
      item: "https://capturepilot.com/blog/far-clauses-small-business",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Key FAR Clauses Every Small Business Contractor Must Know",
  description:
    "A practical guide to the FAR clauses that matter most for small business government contractors: set-aside clauses (52.219-6, 52.219-7), limitations on subcontracting (52.219-14), post-award rerepresentation (52.219-28), the commercial items master clause (52.212-5), prompt payment (52.232-25), termination for convenience, and the 2025 FAR Part 19 overhaul that changed thresholds and small business program rules.",
  image: "https://capturepilot.com/og/far-clauses-small-business.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
  mainEntityOfPage: "https://capturepilot.com/blog/far-clauses-small-business",
  articleSection: "Government Contracting",
  keywords: [
    "FAR clauses small business",
    "FAR 52.219-14 limitations on subcontracting",
    "FAR 52.219-28 rerepresentation",
    "small business set-aside clauses",
    "simplified acquisition threshold 2025",
    "FAR Part 19 overhaul 2025",
    "termination for convenience",
    "government contracting compliance",
    "prompt payment FAR 52.232-25",
    "micro-purchase threshold 2025",
  ],
  wordCount: 4500,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Simplified Acquisition Threshold in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Simplified Acquisition Threshold increased from $250,000 to $350,000, effective October 1, 2025. This is the upper boundary of the Rule of Two zone, where contracting officers are required to set aside work for small businesses when two or more small businesses can compete. It also determines when more complex acquisition procedures kick in.",
      },
    },
    {
      "@type": "Question",
      name: "What does FAR 52.219-14 require?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FAR 52.219-14 (Limitations on Subcontracting) requires small business prime contractors on set-aside contracts to self-perform a minimum percentage of the work. For service contracts, you cannot pay non-similarly-situated subcontractors more than 50% of what the government pays you. For general construction, the cap is 85%. For special trade construction, 75%. Work performed by 'similarly situated entities' — other small businesses with the same socioeconomic status — does not count against these limits.",
      },
    },
    {
      "@type": "Question",
      name: "When do I have to rerepresent my small business size status?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR 52.219-28 (updated January 2025), you must rerepresent your size and socioeconomic status at these triggers: (1) on the anniversary of any contract longer than five years, within 60 days before the anniversary; (2) within 30 days of any merger, acquisition, or novation affecting ownership; (3) when an agency sets aside a specific order on an unrestricted multiple-award contract; and (4) when an agency restricts an order to a specific socioeconomic category on any MAC. Failing to rerepresent when required can result in False Claims Act liability.",
      },
    },
    {
      "@type": "Question",
      name: "What is termination for convenience in government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Termination for Convenience (FAR 52.249-2 for fixed-price, FAR 52.249-6 for cost-reimbursement) allows the government to terminate any contract at any time for any reason without it constituting a breach. Upon termination, the contractor can recover: the contract price for completed work, allowable costs incurred on work in progress, reasonable settlement expenses, and a reasonable profit on completed work. You cannot recover lost profits on work not yet performed. Settlement proposals must be filed within one year of the termination effective date.",
      },
    },
    {
      "@type": "Question",
      name: "What changed with FAR Part 19 in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FAR Part 19 was comprehensively rewritten on September 26, 2025. Key changes: (1) Part 19 is now organized around the acquisition lifecycle — presolicitation, evaluation and award, post-award; (2) the Rule of Two was preserved and its application to task and delivery orders clarified; (3) order-level representations were eliminated for most multiple-award contract scenarios; (4) 8(a) sole-source procedures now require contracting officers to attempt GWAC use before awarding sole-source below the competitive threshold; and (5) inconsistencies between FAR and SBA regulations were resolved, with SBA rules taking precedence.",
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
