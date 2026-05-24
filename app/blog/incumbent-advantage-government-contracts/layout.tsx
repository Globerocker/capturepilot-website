import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Beat the Incumbent on Government Contracts (2026 Guide) | CapturePilot",
  description:
    "Incumbents win 70–80% of recompetes — but challengers who do the work win 38% of the time. Learn the intelligence, positioning, and proposal tactics that displace sitting contractors.",
  keywords:
    "incumbent advantage government contracts, how to beat incumbent government contract, recompete strategy federal, government contract recompete, displacing incumbent contractor, price to win government contract, federal contract recompete tactics, bridge contract government, sources sought recompete, government proposal incumbent",
  alternates: { canonical: "https://www.capturepilot.com/blog/incumbent-advantage-government-contracts" },
  openGraph: {
    title: "How to Beat the Incumbent on Government Contracts (2026 Guide) | CapturePilot",
    description:
      "Incumbents win 70–80% of recompetes — but challengers who do the work win 38% of the time. Learn the intelligence, positioning, and proposal tactics that displace sitting contractors.",
    url: "https://www.capturepilot.com/blog/incumbent-advantage-government-contracts",
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
      name: "How to Beat the Incumbent on Government Contracts",
      item: "https://www.capturepilot.com/blog/incumbent-advantage-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Beat the Incumbent on Government Contracts",
  description:
    "Incumbents win 70–80% of recompetes — but challengers who do the work win 38% of the time. Learn the intelligence, positioning, and proposal tactics that displace sitting contractors.",
  image: "https://www.capturepilot.com/og/incumbent-advantage-government-contracts.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-24",
  dateModified: "2026-05-24",
  mainEntityOfPage: "https://www.capturepilot.com/blog/incumbent-advantage-government-contracts",
  articleSection: "Strategy",
  keywords: [
    "incumbent advantage government contracts",
    "recompete strategy federal",
    "how to beat incumbent government contract",
    "price to win government contract",
    "federal contract recompete",
    "bridge contract government",
    "sources sought recompete",
    "government proposal strategy",
    "capture management",
  ],
  wordCount: 5900,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the incumbent advantage in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The incumbent advantage refers to the natural advantage a sitting contractor holds when their contract comes up for recompetition. Incumbents typically win 70–80% of federal recompetes because the agency already knows their work, switching costs feel high, and the incumbent has deep institutional knowledge of the program. However, challengers who invest in early positioning, intelligence gathering, and strong proposals win approximately 38% of the time — three times the win rate on new competitive solicitations.",
      },
    },
    {
      "@type": "Question",
      name: "How do you find expiring government contracts to target?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search SAM.gov contract data reports filtered by your NAICS codes and end dates within the next 12–24 months. Look for contracts with bridge modifications (short-term extensions rather than option exercises) — these are the strongest signal that an agency is unhappy and planning a competitive recompete. USASpending.gov also shows award history and can reveal patterns in how an agency manages its contracts. Tools like CapturePilot automate this tracking and flag vulnerability signals automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What is a bridge contract in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A bridge contract is a short-term contract extension (typically 6–12 months) that an agency issues when the current contract is ending but a new competition hasn't been completed. Bridge contracts are different from option year exercises — they signal that the agency did not simply exercise the next option period, which usually indicates dissatisfaction with the incumbent or a deliberate decision to recompete. Bridge contracts are one of the strongest predictors of incumbent displacement in federal contracting.",
      },
    },
    {
      "@type": "Question",
      name: "What is Price-to-Win in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Price-to-Win (PTW) is the process of determining the bid price most likely to win a contract while remaining profitable. It combines competitive intelligence (analyzing the incumbent's historical contract values), cost modeling (direct labor, overhead, G&A, and fee), and alignment with the evaluation method (LPTA versus Best Value). For recompetes, the incumbent's obligated dollars provide a baseline; challengers typically price 5–15% below that baseline for LPTA acquisitions, and within 10% for Best Value evaluations. Never price below your true cost floor.",
      },
    },
    {
      "@type": "Question",
      name: "How early should you start pursuing a government contract recompete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal window to begin positioning on a recompete is 12 to 18 months before the solicitation is posted on SAM.gov. By that point, you should be responding to Sources Sought or RFI notices, requesting agency capability briefings, and conducting incumbent research. Challengers who engage this early have a meaningfully higher win rate than those who first encounter the opportunity when the RFP drops. Most competitors don't begin serious pursuit work until 3 months out — giving early movers a significant advantage.",
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
