import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs HigherGov — Federal Depth vs Broad Coverage",
  description: "Compare CapturePilot vs HigherGov. Deep federal specialization with AI tools beats broad, shallow coverage.",
  keywords: "CapturePilot vs HigherGov, HigherGov alternative, HigherGov comparison, federal contract tools, HigherGov competitor, government contract platform comparison",
  alternates: { canonical: "https://www.capturepilot.com/vs/highergov" },
  openGraph: {
    title: "CapturePilot vs HigherGov — Federal Depth vs Broad Coverage",
    description: "Compare CapturePilot vs HigherGov. Deep federal specialization with AI tools beats broad, shallow coverage.",
    url: "https://www.capturepilot.com/vs/highergov",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs HigherGov", item: "https://www.capturepilot.com/vs/highergov" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs HigherGov: Deep Federal Specialization vs Broad Cross-Tier Coverage",
  description:
    "Compare CapturePilot vs HigherGov. Deep federal specialization with AI tools beats broad, shallow coverage.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/highergov",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to HigherGov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HigherGov is a broad-coverage search database covering federal, state, local, and grant opportunities with keyword search and agency pages. Its strength is breadth. CapturePilot goes deep on federal contracting specifically and adds what HigherGov lacks: proprietary multi-factor smart matching (NAICS, PSC, set-aside, geography, value, deadline), AI proposal drafting with gpt-4o-mini, a voice-powered capability statement builder with brand-color extraction, Quick Checker eligibility, a Kanban pipeline, and a managed consulting tier. Different strategies: broad and shallow vs narrow and deep with AI tooling.",
      },
    },
    {
      "@type": "Question",
      name: "Is HigherGov or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot for federal-focused SMBs. HigherGov is a good fit if you bid across federal, state, and local markets and need a single search interface. But if your revenue comes from federal contracts — or you are a SDVOSB / WOSB / 8(a) / HUBZone firm working federal set-asides — CapturePilot's automatic set-aside matching, scored alerts, and AI proposal drafting save more hours per week than HigherGov's broader coverage. Same price range ($99–$199/mo), but CapturePilot includes AI tools HigherGov skips.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between HigherGov and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HigherGov is roughly $99–$199 per seat per month depending on plan. CapturePilot is $199/month flat regardless of team size, with annual billing 20% off ($2,388/year) and a free tier. At 1 seat, HigherGov is cheaper on the entry tier. At 3+ seats, CapturePilot becomes cheaper because HigherGov is per-seat. At every seat count, CapturePilot includes AI proposal drafting, capability statement builder, and Quick Checker that HigherGov does not offer.",
      },
    },
    {
      "@type": "Question",
      name: "Does HigherGov have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. HigherGov is a search database — keyword search, agency pages, contract history, and email alerts. There is no AI proposal writer, no capability statement builder, and no Quick Checker. CapturePilot includes all three: proposal sections are drafted with gpt-4o-mini in JSON mode with per-section progress streaming; the TipTap rich-text editor supports bubble-menu AI edits (improve, shorten, expand, tighten); and the capability statement builder generates branded PDFs with colors auto-extracted from your website.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from HigherGov to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if your business is primarily federal. CapturePilot ingests SAM.gov opportunities daily and supplements with USASpending.gov award data and SBIR.gov R&D opportunities. The one trade-off: you lose state and local procurement coverage and grants. For federal-focused small businesses, that is usually not a meaningful loss. Onboarding takes under 10 minutes, and daily scored alerts replace HigherGov's keyword alerts with higher-precision matches.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot, because it scores. HigherGov indexes SAM.gov alongside state, local, and grants and presents results as a keyword-searchable database. CapturePilot ingests SAM.gov at 02:00 UTC daily, scores 37K+ opportunities with a proprietary multi-factor engine (NAICS 25%, PSC 15%, set-aside 20%, geography 15%, value 15%, deadline 10%), and classifies each opportunity as HOT, WARM, or COLD. You act on a short list of scored matches instead of triaging a broader feed.",
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
