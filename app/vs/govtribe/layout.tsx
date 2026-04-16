import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs GovTribe — Search vs Win",
  description: "GovTribe helps you search. CapturePilot helps you win. AI proposals, smart matching, deal pipeline — everything GovTribe doesn't have.",
  keywords: "CapturePilot vs GovTribe, GovTribe alternative, GovTribe comparison, government contract search, GovTribe competitor, GovCon tools comparison",
  alternates: { canonical: "https://www.capturepilot.com/vs/govtribe" },
  openGraph: {
    title: "CapturePilot vs GovTribe — Search vs Win",
    description: "GovTribe helps you search. CapturePilot helps you win. AI proposals, smart matching, deal pipeline — everything GovTribe doesn't have.",
    url: "https://www.capturepilot.com/vs/govtribe",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs GovTribe", item: "https://www.capturepilot.com/vs/govtribe" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs GovTribe: Search Is Not a Capture Strategy",
  description:
    "GovTribe helps you search. CapturePilot helps you win. AI proposals, smart matching, deal pipeline — everything GovTribe doesn't have.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/govtribe",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to GovTribe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovTribe is a federal contract search tool — a clean interface on top of SAM.gov, FPDS, and USASpending data with keyword alerts, agency pages, and contract details. It stops at search. CapturePilot starts there and adds the rest of the capture workflow: proprietary multi-factor scoring across NAICS, PSC, set-aside, geography, value, and deadline; AI proposal drafting with gpt-4o-mini; a voice-powered capability statement builder; Quick Checker eligibility; a Kanban deal pipeline; and a managed consulting tier.",
      },
    },
    {
      "@type": "Question",
      name: "Is GovTribe or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot. GovTribe is fine if you already know what you are looking for and only need a better search UX than SAM.gov. Small businesses typically need more — they need AI to qualify opportunities for them (NAICS match, set-aside eligibility, value fit), draft proposals, and build the capability statement that opens the door. GovTribe does none of that. CapturePilot does all of it at $199/mo flat with a free tier.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between GovTribe and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovTribe starts around $50/month per seat for individual plans and scales up from there. CapturePilot is $199/month flat regardless of team size, with annual billing 20% off ($2,388/year) and a free tier. If you only need search, GovTribe is cheaper. If you need search plus AI proposals, capability statements, scoring, and pipeline, CapturePilot is cheaper once you factor in the 3–4 tools GovTribe does not replace.",
      },
    },
    {
      "@type": "Question",
      name: "Does GovTribe have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GovTribe is a search database with alerts — no AI proposal writer, no capability statement builder, no Quick Checker. CapturePilot includes all three: proposal sections are drafted with gpt-4o-mini in JSON mode, per-section progress is streamed, and the TipTap editor provides bubble-menu AI edits (improve, shorten, expand, tighten). The capability statement builder generates a branded PDF with colors auto-extracted from your website.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from GovTribe to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot ingests the same SAM.gov opportunities daily via the official API (X-Api-Key header) and supplements with USASpending.gov award data, SBIR.gov R&D opportunities, and SAM.gov registered-contractor records. Saved searches in GovTribe translate to smart-matching filters in CapturePilot: NAICS, PSC, set-asides, states, keywords. Onboarding is under 10 minutes, and daily scored alerts replace GovTribe's keyword alerts.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both monitor SAM.gov, but CapturePilot adds scoring. GovTribe sends keyword alerts — you get every matching opportunity, ranked by recency. CapturePilot's daily alerts are scored by a proprietary multi-factor algorithm (NAICS 25%, PSC 15%, set-aside 20%, geography 15%, value 15%, deadline 10%) and classified HOT / WARM / COLD, so you act on a short list of high-fit opportunities instead of triaging a full keyword feed.",
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
