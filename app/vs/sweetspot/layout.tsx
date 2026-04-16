import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Sweetspot AI — Full Pipeline vs AI Search",
  description:
    "Compare CapturePilot vs Sweetspot AI. Both use AI for government contracting, but CapturePilot offers a full capture pipeline with consulting support, capability statement builder, and Quick Checker at competitive pricing.",
  keywords:
    "CapturePilot vs Sweetspot, Sweetspot AI alternative, AI government contracting, GovCon AI tools, Sweetspot pricing, government contract matching",
  alternates: { canonical: "https://www.capturepilot.com/vs/sweetspot" },
  openGraph: {
    title: "CapturePilot vs Sweetspot AI — Full Pipeline vs AI Search",
    description:
      "Compare CapturePilot vs Sweetspot AI. Full capture pipeline with consulting support vs AI-powered search. See the feature-by-feature breakdown.",
    url: "https://www.capturepilot.com/vs/sweetspot",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs Sweetspot AI", item: "https://www.capturepilot.com/vs/sweetspot" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs Sweetspot AI: Full Capture Pipeline vs AI-Native Search",
  description:
    "Compare CapturePilot vs Sweetspot AI. Both use AI for government contracting, but CapturePilot offers a full capture pipeline with consulting support, capability statement builder, and Quick Checker at competitive pricing.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/sweetspot",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to Sweetspot AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sweetspot AI is an AI-native search and proposal-copilot platform focused on finding opportunities and drafting responses. CapturePilot takes a wider approach with similar AI depth: smart matching across 37K+ federal opportunities, Quick Checker eligibility, a voice-powered capability statement builder, partner search across 1M+ SAM-registered contractors, market intelligence from USASpending.gov, and a managed consulting tier — in addition to AI proposal drafting. Both use AI; CapturePilot covers more of the pipeline and publishes pricing publicly.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sweetspot or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot, particularly for veteran-owned, women-owned, and small businesses entering federal contracting. Sweetspot targets mid-market AI-first firms comfortable with demo-driven custom pricing. CapturePilot is built explicitly for SMB GovCon — SDVOSB, WOSB, 8(a), HUBZone — with automatic set-aside matching, Quick Checker eligibility, a free tier, and transparent $199/mo flat pricing. No sales call required to see pricing or start using the product.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between Sweetspot and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sweetspot uses custom pricing that requires a demo call — exact numbers are not published publicly. CapturePilot is transparent: $199/month flat ($2,388/year with 20% off annual), with a 30-day Pro trial and a free tier for eligibility checking. If you prefer to evaluate and buy without a sales conversation, CapturePilot wins on process. If you want bespoke enterprise terms, Sweetspot fits that model better.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sweetspot have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Sweetspot positions AI proposal copilot as a core feature alongside AI-powered opportunity discovery. CapturePilot also includes AI proposal drafting (gpt-4o-mini in JSON mode with per-section progress streaming and TipTap bubble-menu edits). The differences: CapturePilot adds voice-powered capability statement generation (unique among competitors), automatic set-aside matching, Quick Checker eligibility, and a consulting tier that Sweetspot does not offer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from Sweetspot to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot ingests the same SAM.gov opportunities daily, plus USASpending.gov award data and SBIR.gov R&D opportunities. Existing draft proposals can be pasted into the TipTap editor; pursuits recreate in the Kanban pipeline in minutes. Onboarding is under 10 minutes (NAICS, set-asides, target states) and the free tier lets you verify match quality and draft output before canceling Sweetspot.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comparable for discovery; CapturePilot stronger on scoring transparency. Both use AI-driven matching against SAM.gov data. CapturePilot's scoring is deterministic and inspectable: a proprietary multi-factor formula weights NAICS (25%), PSC (15%), set-aside (20%), geography (15%), value (15%), and deadline (10%), then classifies each opportunity HOT / WARM / COLD. You can see why each opportunity was scored the way it was — useful for tuning and trust.",
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
