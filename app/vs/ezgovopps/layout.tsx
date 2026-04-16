import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs EZGovOpps — AI-Powered Alternative",
  description:
    "Compare CapturePilot vs EZGovOpps. EZGovOpps offers analyst-curated federal intel starting at $2,695/yr. CapturePilot adds AI proposals, capability statements, Quick Checker, and smart matching for less.",
  keywords:
    "CapturePilot vs EZGovOpps, EZGovOpps alternative, federal market intelligence, government contract tools, EZGovOpps pricing, IDIQ database",
  alternates: { canonical: "https://www.capturepilot.com/vs/ezgovopps" },
  openGraph: {
    title: "CapturePilot vs EZGovOpps — AI-Powered Alternative",
    description:
      "Compare CapturePilot vs EZGovOpps. AI-powered capture pipeline vs analyst-curated intel. See the full feature comparison.",
    url: "https://www.capturepilot.com/vs/ezgovopps",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs EZGovOpps", item: "https://www.capturepilot.com/vs/ezgovopps" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs EZGovOpps: AI-Powered Capture vs Analyst-Curated Intel",
  description:
    "Compare CapturePilot vs EZGovOpps. EZGovOpps offers analyst-curated federal intel starting at $2,695/yr. CapturePilot adds AI proposals, capability statements, Quick Checker, and smart matching for less.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/ezgovopps",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to EZGovOpps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZGovOpps is a mid-market federal intelligence database with analyst-curated notes, recompete tracking, and IDIQ/GWAC coverage. Its strength is human-written commentary on specific opportunities and vehicles. CapturePilot replaces the analyst layer with AI: gpt-4o-mini drafts proposal sections, smart matching scores 37K+ opportunities against your profile, Quick Checker instantly verifies set-aside eligibility, and a capability statement builder generates branded PDFs. Different approach, similar annual cost, broader feature set.",
      },
    },
    {
      "@type": "Question",
      name: "Is EZGovOpps or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on what you value. EZGovOpps is better if you specifically want analyst-written recompete reports and IDIQ vehicle intelligence. CapturePilot is better if you want to spend less time reading intel and more time bidding: AI proposal drafting, capability statement generation, automatic set-aside matching for SDVOSB / WOSB / 8(a) / HUBZone, and a Kanban pipeline. For a solo founder or a lean team under 10, CapturePilot's tooling typically produces more bids per week than curated intel alone.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between EZGovOpps and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZGovOpps ranges from roughly $2,695/year for a single user up to $5,995/year for a 6-user team, billed annually. CapturePilot is $199/month flat ($2,388/year) regardless of team size, with a 30-day free trial on Pro and a free tier for eligibility checking. CapturePilot's annual cost fits inside EZGovOpps' single-user tier and scales to unlimited users at the same flat rate.",
      },
    },
    {
      "@type": "Question",
      name: "Does EZGovOpps have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. EZGovOpps is an intel platform — analyst-curated notes, opportunity tracking, IDIQ vehicle data, and market research. Proposal drafting is out of scope. CapturePilot includes AI proposal generation using gpt-4o-mini in JSON mode with per-section progress streaming, a TipTap rich-text editor with bubble-menu AI edits (improve, shorten, expand, tighten), and a capability statement builder that exports branded PDFs with your website-extracted brand colors.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from EZGovOpps to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot ingests the same underlying SAM.gov opportunities plus USASpending.gov award data and SBIR.gov R&D opportunities. Set your NAICS codes, set-asides, and target states during onboarding (under 10 minutes) and smart matching surfaces your best-fit opportunities immediately. The free tier lets you verify match quality and capability-statement output before canceling EZGovOpps. The one trade-off: you trade analyst-written commentary for AI automation and broader tooling.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both ingest SAM.gov opportunities, but CapturePilot adds a scoring layer on top. CapturePilot uses a proprietary multi-factor scoring engine (NAICS 25%, PSC 15%, set-aside 20%, geography 15%, value 15%, deadline 10%) and classifies every opportunity HOT, WARM, or COLD. Daily scored email alerts surface only the matches worth bidding. EZGovOpps presents opportunities with analyst notes but leaves prioritization to you — useful for due diligence, slower for daily action.",
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
