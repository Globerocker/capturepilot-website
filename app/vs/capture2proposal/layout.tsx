import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Capture2Proposal — AI Drafts, Not Just Manages",
  description: "Capture2Proposal manages your proposal workflow. CapturePilot actually drafts your proposals with AI. Compare features and pricing.",
  keywords: "CapturePilot vs Capture2Proposal, Capture2Proposal alternative, Capture2Proposal comparison, AI proposal drafting, proposal management vs AI drafting, GovCon proposal tools",
  alternates: { canonical: "https://www.capturepilot.com/vs/capture2proposal" },
  openGraph: {
    title: "CapturePilot vs Capture2Proposal — AI Drafts, Not Just Manages",
    description: "Capture2Proposal manages your proposal workflow. CapturePilot actually drafts your proposals with AI. Compare features and pricing.",
    url: "https://www.capturepilot.com/vs/capture2proposal",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs Capture2Proposal", item: "https://www.capturepilot.com/vs/capture2proposal" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs Capture2Proposal: AI Drafts the Proposal, Not Just Manages the Workflow",
  description:
    "Capture2Proposal manages your proposal workflow. CapturePilot actually drafts your proposals with AI. Compare features and pricing.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/capture2proposal",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to Capture2Proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capture2Proposal is a proposal workflow and Shipley-methodology management tool: color team reviews, compliance matrices, gate reviews, and review cycles. It assumes you have already found the opportunity and have a proposal team to run through those stages. CapturePilot covers the earlier and later parts of the pipeline: smart matching from 37K+ SAM.gov opportunities, AI proposal drafting, a voice-powered capability statement builder, Quick Checker eligibility, and a Kanban pipeline — so a lean team can replace both tools with one.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capture2Proposal or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot, if you do not have a dedicated proposal team. Capture2Proposal is built for proposal shops with 10+ writers running 20+ proposals per quarter. Its value is in process management, not content generation. Small businesses and solo founders need the opposite: AI that finds opportunities and drafts the proposal content. CapturePilot starts at $199/mo flat with a free tier; Capture2Proposal is $50–$150 per seat per month, which adds up quickly for a team of five.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between Capture2Proposal and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capture2Proposal uses per-seat pricing at roughly $50–$150 per user per month. For a 5-person team that is $250–$750/month ($3,000–$9,000/year). CapturePilot is $199/month flat regardless of team size ($2,388/year) with a 30-day free trial on Pro and a free tier for eligibility checking. You save on both the direct cost and the second tool you no longer need for opportunity discovery and AI drafting.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capture2Proposal have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capture2Proposal focuses on managing proposals — compliance matrices, Section L/M tracking, color team review workflows, and Shipley gate reviews — not drafting them with AI. CapturePilot uses OpenAI (gpt-4o-mini in JSON mode) to draft proposal sections from solicitation requirements with per-section progress streaming, then lets you edit in a TipTap rich-text editor with bubble-menu AI actions (improve, shorten, expand, tighten).",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from Capture2Proposal to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you were using Capture2Proposal for workflow management and have in-house writers, CapturePilot augments their drafting with AI and adds opportunity discovery they did not have. If you were using it because you needed SOMETHING to push proposals through, CapturePilot likely replaces it outright. Existing pursuits can be recreated in the Kanban pipeline in minutes. Capability statements and past-performance content export as branded PDFs.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot, by a wide margin. Capture2Proposal does not monitor SAM.gov — it assumes opportunities arrive from elsewhere. CapturePilot ingests SAM.gov opportunities daily via the official API (X-Api-Key header), scores 37K+ opportunities against your NAICS / PSC / set-aside / geography profile, and sends daily alerts on Sources Sought, Pre-Solicitations, and Solicitations that match. For opportunity discovery, the two tools are not in the same category.",
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
