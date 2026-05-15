import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federal Spending Trends 2026: Where the Government Is Investing | CapturePilot",
  description:
    "Defense hits $1 trillion. AI contracts surge. DOGE cuts $85B+ from civilian agencies. See exactly where federal spending is going in 2026 and how to position your business.",
  keywords:
    "federal spending trends 2026, government contract spending 2026, DoD budget 2026, federal AI contracts, federal cybersecurity spending, DOGE contract cancellations, small business federal contracts 2026, VA contracts 2026, military construction 2026, federal contracting outlook",
  alternates: { canonical: "https://capturepilot.com/blog/federal-spending-trends-2026" },
  openGraph: {
    title: "Federal Spending Trends 2026: Where the Government Is Investing | CapturePilot",
    description:
      "Defense hits $1 trillion. AI contracts surge. DOGE cuts $85B+ from civilian agencies. See exactly where federal spending is going in 2026 and how to position your business.",
    url: "https://capturepilot.com/blog/federal-spending-trends-2026",
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
      name: "Federal Spending Trends 2026: Where the Government Is Investing",
      item: "https://capturepilot.com/blog/federal-spending-trends-2026",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Federal Spending Trends 2026: Where the Government Is Investing",
  description:
    "A data-driven breakdown of federal contract spending for FY2026: the $1 trillion defense budget, DOGE cuts, AI and cybersecurity surge, VA healthcare billions, and what it means for small business contractors.",
  image: "https://capturepilot.com/og/federal-spending-trends-2026.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-15",
  dateModified: "2026-05-15",
  mainEntityOfPage: "https://capturepilot.com/blog/federal-spending-trends-2026",
  articleSection: "Market Intelligence",
  keywords: [
    "federal spending trends 2026",
    "government contract spending",
    "DoD budget 2026",
    "federal AI contracts",
    "federal cybersecurity spending",
    "DOGE contract cancellations",
    "small business federal contracts",
    "VA contracts 2026",
    "military construction 2026",
    "federal contracting outlook",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much did the federal government spend on contracts in FY2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government reported $744.7 billion in total contract obligations for FY2025, compared to $776 billion in FY2024. The apparent decline is partly due to late DoD Q4 reporting — the final FY2025 number will settle higher once all agency reports are submitted. FY2024 was a near-record year, providing a strong baseline heading into FY2026.",
      },
    },
    {
      "@type": "Question",
      name: "What is the DoD budget for FY2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FY2026 national defense authorization totals $1.01 trillion, comprising $848.3 billion in DoD discretionary budget plus $113.3 billion in mandatory reconciliation funding. The DoD announced plans to spend the entire $152 billion reconciliation package within a single fiscal year, representing an unprecedented acceleration of defense spending.",
      },
    },
    {
      "@type": "Question",
      name: "How much did DOGE cut from federal contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Department of Government Efficiency (DOGE) has recommended cancellation or reduction of over $85 billion in federal contracts across 24 agencies. The cuts are concentrated in USAID (~68% of its portfolio), the Department of Education (~52%), and the EPA (~41%). Defense, VA, and DHS contracts are largely protected.",
      },
    },
    {
      "@type": "Question",
      name: "How much did small businesses receive in federal contracts in FY2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small businesses received a record $183 billion in prime federal contracts in FY2024, representing 28.8% of all federal contracting dollars — exceeding the 23% statutory goal for the fourth consecutive year. However, the number of small businesses actively participating in the federal market has declined by 49% since FY2010, meaning fewer businesses are sharing the larger pie.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best federal contracting opportunities for small businesses in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The strongest small business opportunities in 2026 are concentrated in defense IT (cybersecurity, AI, cloud), VA healthcare IT (EHRM implementation, T4NG2 task orders), military construction (MILCON projects, PFAS remediation), and DHS security services. Small businesses with SDVOSB, 8(a), WOSB, or HUBZone certifications have additional access through mandatory set-aside programs.",
      },
    },
    {
      "@type": "Question",
      name: "How much is the federal government spending on AI in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Department of Defense requested $13.4 billion for AI and autonomy in FY2026, the largest single-year AI investment in defense history. Combined with cloud, cybersecurity, and data analytics, DoD committed over $32 billion in contract ceilings in the first half of FY2026 alone. Small business AI contract awards grew 34% over three years, from $554 million in FY2022 to $740 million in FY2024.",
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
