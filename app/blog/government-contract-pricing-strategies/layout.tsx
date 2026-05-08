import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contract Pricing Strategies: Win Without Losing Money (2026)",
  description:
    "Master government contract pricing with wrap rates, indirect cost pools, price-to-win analysis, and FAR profit caps. Real formulas and strategies for small business contractors.",
  keywords:
    "government contract pricing strategies, wrap rate government contracting, price to win government contract, FAR indirect rates, CPFF fee cap, firm fixed price government contract, cost plus government contract, certified cost pricing data threshold, TINA threshold 2026, government contract profit margin, how to price government contract, fully burdened labor rate federal",
  alternates: { canonical: "https://www.capturepilot.com/blog/government-contract-pricing-strategies" },
  openGraph: {
    title: "Government Contract Pricing: Strategies to Win Without Losing Money",
    description:
      "Wrap rates, indirect pools, price-to-win analysis, and the TINA threshold changes. Everything small business contractors need to price federal work profitably.",
    url: "https://www.capturepilot.com/blog/government-contract-pricing-strategies",
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
      name: "Government Contract Pricing Strategies",
      item: "https://www.capturepilot.com/blog/government-contract-pricing-strategies",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Contract Pricing Strategies: Win Without Losing Money (2026)",
  description:
    "A practical guide to government contract pricing covering wrap rates, indirect cost pools, FAR profit ceilings, price-to-win analysis, and the FY26 NDAA TINA threshold increase to $10M.",
  image: "https://www.capturepilot.com/og/government-contract-pricing-strategies.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  mainEntityOfPage: "https://www.capturepilot.com/blog/government-contract-pricing-strategies",
  articleSection: "Government Contracting",
  keywords: [
    "government contract pricing strategies",
    "wrap rate government contracting",
    "price to win government contract",
    "FAR indirect rates",
    "certified cost pricing data",
    "TINA threshold 2026",
    "firm fixed price contract",
    "government contract profit margin",
    "cost plus fixed fee",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a wrap rate in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A wrap rate is the multiplier applied to base labor cost to produce a fully burdened billable rate. It combines fringe benefits (payroll taxes, health insurance, retirement, PTO), overhead (facilities, equipment, direct supervision), and G&A (executive compensation, accounting, business development). A competitive wrap rate for government contractors typically falls between 1.6× and 2.2× base labor. A cost wrap excludes profit; a price wrap includes profit or fee on top.",
      },
    },
    {
      "@type": "Question",
      name: "What is the TINA threshold for certified cost or pricing data in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, the TINA (Truth in Negotiations Act) threshold for certified cost or pricing data is $2.5 million for contracts awarded before June 30, 2026. The FY2026 National Defense Authorization Act (NDAA) raised this threshold to $10 million for contracts entered into after June 30, 2026, significantly reducing the compliance burden for small and mid-size government contractors.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum fee on a CPFF government contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR 15.404-4, the maximum fixed fee on a Cost-Plus-Fixed-Fee (CPFF) contract is 10% of the estimated contract cost for most work. For research and development contracts, the cap is 15% of estimated cost. These statutory limits apply only to cost-type contracts — firm-fixed-price contracts have no statutory fee cap, though competitive pressure effectively limits profit in most markets.",
      },
    },
    {
      "@type": "Question",
      name: "What profit margin can small businesses expect on government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small business government contractors average roughly 8% net profit margins on service contracts. Mid-market professional services (IT consulting, program management, engineering) typically achieve 8–15% on firm-fixed-price work. Specialty work involving security-cleared personnel, niche technical expertise, or significant intellectual property can command 15–30%+ margins where competition is limited. The key drivers of margin compression are high overhead rates relative to contract base, limited pricing leverage, and aggressive LPTA competitions.",
      },
    },
    {
      "@type": "Question",
      name: "What is Price to Win (PTW) in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Price to Win (PTW) is the process of estimating the optimal price point for a government contract proposal — high enough to cover costs and earn profit, low enough to beat the competition. PTW analysis combines competitive intelligence (prior award data from USASpending.gov and FPDS-NG, incumbent contract values, competitor rate benchmarks), cost modeling (direct labor, indirect rates, profit), and evaluation method alignment (LPTA vs. best-value vs. sole-source). PTW produces a range, not a single number, and is opportunity-specific.",
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
