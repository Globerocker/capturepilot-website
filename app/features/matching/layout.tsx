import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Matching Engine — Find Contracts You Can Win",
  description: "CapturePilot's proprietary matching engine scores 40,000+ federal opportunities against your NAICS codes, certifications, and location. See your best matches daily.",
  keywords: "government contract matching, NAICS code matching, federal opportunity scoring, contract finder, SAM.gov matching, smart matching engine, GovCon matching",
  alternates: { canonical: "https://www.capturepilot.com/features/matching" },
  openGraph: {
    title: "Smart Matching Engine — Find Contracts You Can Win",
    description: "CapturePilot's proprietary matching engine scores 40,000+ federal opportunities against your NAICS codes, certifications, and location. See your best matches daily.",
    url: "https://www.capturepilot.com/features/matching",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
    { "@type": "ListItem", position: 3, name: "Smart Matching Engine", item: "https://www.capturepilot.com/features/matching" },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot Smart Matching Engine",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Deterministic, multi-factor matching engine that scores 40,000+ live federal opportunities against your company profile on six dimensions — NAICS, PSC, set-aside eligibility, geography, contract value, and deadline — and classifies each opportunity as HOT, WARM, or COLD.",
  featureList: [
    "Deterministic 6-factor scoring algorithm (NAICS 25%, PSC 15%, set-aside 20%, geography 15%, value fit 15%, deadline 10%)",
    "HOT / WARM / COLD classification with configurable thresholds (HOT >= 0.70)",
    "Daily re-scoring at 03:00 UTC as opportunities update",
    "Full coverage of SAM.gov Sources Sought, Pre-Solicitation, and Solicitation notices",
    "Set-aside awareness for SDVOSB, WOSB, 8(a), HUBZone, and small business",
    "Saved views, AI natural-language filters, and bulk XLSX export",
  ],
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "USD",
    url: "https://app.capturepilot.com/signup",
  },
  brand: { "@type": "Brand", name: "CapturePilot" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot's matching engine score opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The engine is deterministic (not LLM-based) and scores every opportunity on six weighted factors: NAICS code match (25%), PSC code match (15%), set-aside eligibility (20%), geography (15%), contract value fit (15%), and deadline urgency (10%). The combined score maps to HOT (>= 70%), WARM (50–70%), or COLD (< 50%). Because it's rule-based, results are reproducible and explainable — you can see exactly why each opportunity scored the way it did.",
      },
    },
    {
      "@type": "Question",
      name: "How many opportunities does the matching engine cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot indexes 40,000+ live federal opportunities pulled from SAM.gov daily, including Sources Sought / RFI notices (6–18 months early), Pre-Solicitation, and Solicitation notices. We also bring in SBIR.gov R&D solicitations for small-business R&D and USASpending.gov award data for competitive context. The ingestion cron runs daily at 02:00 UTC, and scoring runs at 03:00 UTC so your matches are fresh every morning.",
      },
    },
    {
      "@type": "Question",
      name: "Does the engine respect set-aside eligibility like SDVOSB, WOSB, 8(a), and HUBZone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Set-aside match is one of the highest-weighted factors at 20%. If you're an SDVOSB, WOSB, 8(a), or HUBZone certified business, opportunities that are exclusively set aside for your certification get a significant score boost, and opportunities for which you're ineligible are down-weighted. You can also filter the results table by set-aside type to only see contracts you're qualified to bid on.",
      },
    },
    {
      "@type": "Question",
      name: "Can I filter matches by notice type, state, or NAICS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The matches table supports filters for classification (HOT/WARM/COLD/SAVED), notice type (Sources Sought / Pre-Solicitation / Solicitation / Award), set-aside, state, NAICS prefix, security clearance, and SBA certification. You can sort by score, deadline, agency, or notice type. Three view modes — card, list, and HubSpot-style table with column picker — are available, and your view preference plus column choices are saved per profile in localStorage.",
      },
    },
    {
      "@type": "Question",
      name: "How often are match scores updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scores are re-computed daily at 03:00 UTC for every user, which means a fresh match list every morning. You can also manually trigger a re-score at any time from the dashboard via the Refresh Matches button, which hits the /api/matches/refresh endpoint. When you update your profile — add a NAICS code, change your state coverage, or add a certification — we auto-re-score so the change is reflected immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use natural language to filter opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The matches page includes an AI-assisted natural-language filter powered by GPT-4o-mini in JSON mode. Describe what you want in plain English — for example, 'janitorial contracts in Texas over $500K for veteran-owned businesses' — and the AI translates that into structured NAICS, set-aside, state, and keyword filters automatically. Your filter choices are also exportable as a bulk XLSX file, capped at 20 rows per export.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
