import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contract Win Rates: What's Realistic and How to Improve Yours | CapturePilot",
  description:
    "Most small businesses win under 15% of federal proposals. Learn what win rates are realistic, why incumbents dominate, and 5 proven strategies to improve yours.",
  keywords:
    "government contract win rate, federal proposal win rate, how to win government contracts, incumbent advantage government contracts, pwin probability of win, go no go government contracting, bid no bid decision, capture management win rate, small business government contract strategy, improve proposal win rate",
  alternates: { canonical: "https://www.capturepilot.com/blog/government-contract-win-rate" },
  openGraph: {
    title: "Government Contract Win Rates: What's Realistic and How to Improve Yours | CapturePilot",
    description:
      "Most small businesses win under 15% of federal proposals. Learn what win rates are realistic, why incumbents dominate, and 5 proven strategies to improve yours.",
    url: "https://www.capturepilot.com/blog/government-contract-win-rate",
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
      name: "Government Contract Win Rates: What's Realistic and How to Improve Yours",
      item: "https://www.capturepilot.com/blog/government-contract-win-rate",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Contract Win Rates: What's Realistic and How to Improve Yours",
  description:
    "Most small businesses win under 15% of federal proposals. Learn what win rates are realistic, why incumbents dominate, and proven strategies to improve yours.",
  image: "https://www.capturepilot.com/og/government-contract-win-rate.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  mainEntityOfPage: "https://www.capturepilot.com/blog/government-contract-win-rate",
  articleSection: "Strategy",
  keywords: [
    "government contract win rate",
    "federal proposal win rate",
    "pwin probability of win",
    "go no go government contracting",
    "capture management",
    "incumbent advantage government contracts",
    "small business federal contracting",
    "bid no bid decision",
    "government contract pipeline",
  ],
  wordCount: 5600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good win rate for government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A realistic win rate for a small business pursuing new federal contracts is 5–15%. Mature GovCon firms with established agency relationships and disciplined go/no-go processes typically achieve 25–35%. Incumbents recompeting on existing contracts win at 60–90%. The key is distinguishing between new business win rate and recompete win rate — they are fundamentally different metrics with very different benchmarks.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate government contract win rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The basic formula is contracts won divided by proposals submitted. However, the more accurate metric is pursuit win rate: contracts won divided by opportunities actively pursued (including those you evaluated but chose not to bid). This accounts for go/no-go discipline, which is often the biggest driver of win rate improvement. You should also track dollar win rate separately: contract value won divided by total contract value proposed.",
      },
    },
    {
      "@type": "Question",
      name: "Why do incumbents win so many government contract recompetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incumbents win 60–90% of recompetes for four main reasons: relationship capital with the contracting officer and program manager, verified past performance on the exact contract being recompeted, transition risk that works against switching vendors, and precise pricing knowledge of actual cost structure. To displace an incumbent, challengers must begin positioning 12–18 months before the recompete, build independent agency relationships, and identify specific performance weaknesses the incumbent has created.",
      },
    },
    {
      "@type": "Question",
      name: "How can I improve my government proposal win rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five highest-impact changes for improving win rate are: (1) implement a scored go/no-go process and no-bid opportunities that score below your threshold; (2) engage agencies before the RFP through Sources Sought responses and industry days; (3) build and maintain a curated past performance library with measurable outcomes; (4) score probability of win (PWin) before committing proposal resources; and (5) request and act on debriefs after every loss. Counterintuitively, bidding on fewer, better-fit opportunities usually improves win rate faster than writing better proposals.",
      },
    },
    {
      "@type": "Question",
      name: "What is PWin in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PWin (probability of win) is a numerical score — usually expressed as a percentage — that estimates how likely a contractor is to win a specific contract. It is calculated before proposal submission using factors including customer knowledge, technical solution strength, competitive positioning, and price competitiveness. A PWin under 20% indicates a speculative bid; 40–65% indicates a favored position; over 65% suggests a strong incumbent or major agency relationship advantage. PWin scoring helps contractors allocate proposal investment and make honest go/no-go decisions.",
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
