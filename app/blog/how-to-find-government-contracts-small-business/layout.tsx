import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find Government Contracts for Small Business (2026 Guide) | CapturePilot",
  description: "Step-by-step guide to finding government contracts for small business. SAM.gov search, set-asides, NAICS codes, and pipeline strategies that actually win.",
  keywords: "how to find government contracts for small business, SAM.gov opportunities, small business set-aside contracts, federal contracting guide, government contract search, NAICS codes government contracts",
  alternates: { canonical: "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business" },
  openGraph: {
    title: "How to Find Government Contracts for Small Business (2026 Guide) | CapturePilot",
    description: "Step-by-step guide to finding government contracts for small business. SAM.gov search, set-asides, NAICS codes, and pipeline strategies that actually win.",
    url: "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business",
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
      name: "How to Find Government Contracts for Small Business",
      item: "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Find Government Contracts for Small Business (2026 Guide)",
  description:
    "Step-by-step guide to finding government contracts for small business. SAM.gov search, set-asides, NAICS codes, and pipeline strategies that actually win.",
  image: "https://www.capturepilot.com/og/how-to-find-government-contracts-small-business.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-04-16",
  mainEntityOfPage:
    "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business",
  articleSection: "Government Contracting",
  keywords: [
    "find government contracts",
    "small business federal contracts",
    "SAM.gov search",
    "Sources Sought",
    "set-aside",
    "subcontracting",
    "USASpending",
    "GSA Schedule",
  ],
  wordCount: 8500,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do I actually find government contracts as a small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary source is SAM.gov (Contract Opportunities), where every federal solicitation over $25,000 must be publicly posted — including Sources Sought notices, Pre-Solicitations, RFPs, RFQs, and Combined Synopsis/Solicitations. Secondary sources include agency procurement forecasts (OSDBU websites publish them annually), SBA's SUB-Net for subcontracting opportunities, GSA eBuy for GSA Schedule holders, USASpending.gov for market intelligence on past awards, and state/local portals. Tools like CapturePilot aggregate SAM.gov plus scoring to surface the matches most likely for your NAICS, size, and set-aside profile.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Sources Sought notice and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Sources Sought notice is a pre-solicitation market research posting where the agency asks industry whether qualified small businesses exist for a future requirement. Responding to Sources Sought is the single highest-leverage activity in federal contracting — it happens 6 to 18 months before the solicitation, gives you direct access to the contracting officer, lets you influence the scope and set-aside designation, and can turn a full-and-open competition into a small business set-aside. Most winners have been working the opportunity at the Sources Sought stage, not waiting for the final RFP.",
      },
    },
    {
      "@type": "Question",
      name: "How do I filter SAM.gov for contracts relevant to my small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Filter SAM.gov by: your primary NAICS codes (not all of them — just the 2-4 most relevant), notice type (Sources Sought and Presolicitation first, then Solicitation), set-aside type (match your certifications: SB, 8(a), SDVOSB, WOSB, HUBZone), geography if location matters, and dollar range appropriate to your past performance size. Save the search to get daily email alerts. Don't rely on keywords alone — agencies use inconsistent terminology, so NAICS plus set-aside filters produce better signal than text search.",
      },
    },
    {
      "@type": "Question",
      name: "Can I win federal contracts without being a prime contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — subcontracting is often the fastest path to your first federal revenue. Every prime contract over $750,000 ($1.5M for construction) requires a Small Business Subcontracting Plan, so primes actively seek small business subs. Find opportunities through SBA's SUB-Net database, direct outreach to primes on contracts awarded to your target agencies (USASpending.gov shows who won), agency-hosted matchmaking events, and prime contractor small business liaison officers. Subcontracting builds past performance, agency familiarity, and relationships that enable future prime wins.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for a small business to win its first federal contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realistic timelines: micro-purchases (under $10,000) can happen in weeks via direct agency outreach and GSA Advantage listings. Simplified Acquisition contracts ($10K–$250K) typically take 6-12 months of pipeline work. Full competitive contracts usually take 12-24 months from first Sources Sought response to award because the procurement cycle is slow. The businesses that win fastest focus on one or two agencies, respond to every Sources Sought in their NAICS, and build relationships with Small Business Specialists rather than mass-bidding unfamiliar opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "What's the biggest mistake small businesses make when searching for contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bidding on everything. Most first-time GovCons fire off proposals on any opportunity that looks vaguely related to their services, win none, and burn out. The opportunities you win are the ones where you have (1) relevant past performance, (2) an established relationship with the contracting officer or program office, and (3) enough time to properly respond to the Sources Sought before the RFP drops. Build a qualified pipeline of 10-20 target opportunities per year rather than blasting 200 generic proposals.",
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
