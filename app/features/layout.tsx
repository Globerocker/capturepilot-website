import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Features — Smart Matching, AI Proposals & More",
  description: "Explore CapturePilot's 16 powerful features for finding and winning government contracts. Smart matching, AI proposal writer, market intelligence, and more.",
  keywords: "government contract features, federal contract tools, smart matching, AI proposal writer, market intelligence, capability statement builder, deal pipeline, GovCon software",
  alternates: { canonical: "https://www.capturepilot.com/features" },
  openGraph: {
    title: "All Features — Smart Matching, AI Proposals & More",
    description: "Explore CapturePilot's 16 powerful features for finding and winning government contracts. Smart matching, AI proposal writer, market intelligence, and more.",
    url: "https://www.capturepilot.com/features",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "CapturePilot Features",
  description:
    "Complete catalog of CapturePilot's 16 features for finding, qualifying, and winning US federal government contracts — including matching, AI proposals, pipeline, intelligence, capability statement, and eligibility checks.",
  url: "https://www.capturepilot.com/features",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Quick Company Checker",
        description: "Free instant NAICS, SAM.gov status, set-aside eligibility, and opportunity match preview from just a website URL.",
        url: "https://www.capturepilot.com/features/quick-checker",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Smart Matching Engine",
        description: "Deterministic 6-factor scoring of 40,000+ federal opportunities against your NAICS, PSC, set-asides, geography, value, and deadline.",
        url: "https://www.capturepilot.com/features/matching",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Proposal Writer",
        description: "Generate compliant proposal drafts — cover letter, technical approach, past performance — mapped to Section L/M criteria in minutes.",
        url: "https://www.capturepilot.com/features/proposals",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Deal Pipeline",
        description: "Kanban-style pipeline tracker with drag-and-drop stages, notes, reminders, and activity timeline for every pursuit.",
        url: "https://www.capturepilot.com/features/pipeline",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Capability Statement Builder",
        description: "Voice-to-document AI that records your story, extracts brand colors, and outputs a federal-ready capability statement PDF.",
        url: "https://www.capturepilot.com/features/capability-statement",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Market Intelligence",
        description: "Agency spend by NAICS, competitor win rates, incumbent tracking, and 5-year trend analysis sourced from USASpending and FPDS.",
        url: "https://www.capturepilot.com/features/intelligence",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What features are included in CapturePilot Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro ($199/month) unlocks all 16 features: the Smart Matching Engine across 40,000+ federal opportunities, AI Proposal Writer, Capability Statement Builder, Market Intelligence with competitor and agency spend data, Deal Pipeline, Partner Search across 1M+ SAM-registered companies, Eligibility Checks, IDIQ/contract vehicle tracking, Daily Email Alerts, and more. Every feature is available during the 30-day free trial.",
      },
    },
    {
      "@type": "Question",
      name: "Which features are available on the Free plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Free plan includes the Quick Company Checker (unlimited) — which gives you instant NAICS identification, SAM.gov registration status, certification lookup, and a preview of your top 5 matched federal opportunities. Free is forever, with no credit card required. Everything else — full matching, AI proposals, capability statement, pipeline, and intelligence — lives in Pro.",
      },
    },
    {
      "@type": "Question",
      name: "How do CapturePilot features compare to searching SAM.gov directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov provides raw federal data. CapturePilot layers AI matching, deterministic scoring on 6 dimensions (NAICS, PSC, set-aside, geography, value, deadline), readiness flags, AI proposal drafting, and pipeline tracking on top of that same data. Users typically save 15–20 hours per week vs. manually scanning SAM.gov, and catch Sources Sought notices 6–18 months before solicitation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try all features before paying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every Pro subscription starts with a 30-day free trial that unlocks all 16 features — matching, AI proposals, capability statement, pipeline, intelligence, partner search, and eligibility. No credit card is charged until day 31, and you can cancel anytime from billing settings with one click.",
      },
    },
    {
      "@type": "Question",
      name: "Do features work for SDVOSB, WOSB, 8(a), and HUBZone businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The matching engine specifically scores set-aside eligibility as one of its 6 factors, so SDVOSB, WOSB, 8(a), HUBZone, and standard small business users all get certification-aware matches. The Eligibility Check feature cross-references your certifications against every opportunity's set-aside requirements so you only see contracts you're actually qualified to bid on.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
