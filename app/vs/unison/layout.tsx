import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Unison — Intelligence Over Marketplace",
  description: "CapturePilot is your capture intelligence engine. Unison is a marketplace. Compare features, pricing, and approach.",
  keywords: "CapturePilot vs Unison, Unison Marketplace alternative, Unison comparison, government contract marketplace, Unison competitor, GovCon platform comparison",
  alternates: { canonical: "https://www.capturepilot.com/vs/unison" },
  openGraph: {
    title: "CapturePilot vs Unison — Intelligence Over Marketplace",
    description: "CapturePilot is your capture intelligence engine. Unison is a marketplace. Compare features, pricing, and approach.",
    url: "https://www.capturepilot.com/vs/unison",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs Unison", item: "https://www.capturepilot.com/vs/unison" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs Unison: Capture Intelligence vs Vendor Marketplace",
  description:
    "CapturePilot is your capture intelligence engine. Unison is a marketplace. Compare features, pricing, and approach.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/unison",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to Unison?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are fundamentally different products. Unison is a teaming marketplace that connects primes and subcontractors — you create a vendor profile, buyers browse, and visibility often correlates with what you pay for promotion. CapturePilot is a capture-intelligence engine that works exclusively for you: smart matching against 37K+ SAM.gov opportunities, AI proposal drafting, a voice-powered capability statement builder, Quick Checker eligibility, and a Kanban pipeline. Different model: marketplace vs. intelligence platform.",
      },
    },
    {
      "@type": "Question",
      name: "Is Unison or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on your strategy. Unison is useful if your primary motion is teaming with primes and you want to be discovered. CapturePilot is better if you want to directly pursue your own federal opportunities — find them, qualify them, draft the proposal, and track the deal. For most small businesses, teaming is one tactic, not a full capture strategy. CapturePilot adds partner search across 1M+ SAM-registered contractors so you can still pursue teaming without relying on marketplace visibility.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between Unison and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unison offers a limited freemium tier and premium placement tiers starting around $200–$600/month depending on visibility features, with advisory services billed separately. CapturePilot is $199/month flat regardless of team size ($2,388/year annual, 20% off), with a free tier for eligibility checking. CapturePilot's price buys capture tools, not marketplace placement — AI proposal drafting, capability statements, set-aside matching, pipeline tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Does Unison have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Unison is a marketplace and vendor network, not a capture platform. It offers vendor profiles, teaming connections, and advisory services, but not AI proposal drafting, capability statement generation, or smart matching. CapturePilot includes all three: proposal sections are drafted with gpt-4o-mini in JSON mode, and the capability statement builder generates branded PDFs with colors extracted from your website.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from Unison to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The two tools serve different purposes, so it is less a migration and more a replacement of strategy. If you used Unison primarily for opportunity discovery or market research, CapturePilot replaces it directly — SAM.gov ingestion, USASpending award data, smart matching, daily scored alerts. If you used Unison for teaming discovery, CapturePilot's partner search across 1M+ SAM-registered contractors covers that use case without marketplace fees.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot, by a wide margin. Unison does not focus on SAM.gov opportunity monitoring — its model centers on the marketplace, teaming connections, and advisory services. CapturePilot ingests SAM.gov opportunities daily via the official API (X-Api-Key header), scores 37K+ opportunities with a proprietary multi-factor engine, and delivers daily scored alerts classified HOT / WARM / COLD. For active federal bidding, they are not comparable tools.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
