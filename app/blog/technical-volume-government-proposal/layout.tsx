import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Volume Government Proposal: How to Write One That Wins (2026)",
  description:
    "Learn how to write a winning technical volume for government proposals. Structure your approach around Section M evaluation factors and score points evaluators can actually find.",
  keywords:
    "technical volume government proposal, government proposal technical approach, how to write technical volume federal proposal, Section M evaluation factors, FAR Part 15 technical evaluation, government proposal writing tips, federal RFP technical section, proposal technical approach methodology, winning government proposals, technical volume structure",
  alternates: { canonical: "https://capturepilot.com/blog/technical-volume-government-proposal" },
  openGraph: {
    title: "Technical Volume Government Proposal: How to Write One That Wins",
    description:
      "Industry win rates hover at 10–20%. Most losses happen in the technical volume. Here's how to write one that evaluators can actually score.",
    url: "https://capturepilot.com/blog/technical-volume-government-proposal",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://capturepilot.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Technical Volume Government Proposal",
      item: "https://capturepilot.com/blog/technical-volume-government-proposal",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Technical Volume Government Proposal: How to Write One That Wins (2026)",
  description:
    "A practical guide to writing the technical volume of a government proposal — from structuring your technical approach around Section M evaluation factors to writing key personnel resumes that score points.",
  image: "https://capturepilot.com/og/technical-volume-government-proposal.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-06-09",
  dateModified: "2026-06-09",
  mainEntityOfPage: "https://capturepilot.com/blog/technical-volume-government-proposal",
  articleSection: "Government Contracting",
  keywords: [
    "technical volume government proposal",
    "government proposal technical approach",
    "Section M evaluation factors",
    "FAR Part 15 technical evaluation",
    "federal proposal writing",
    "proposal management",
    "government contracting proposals",
    "key personnel resumes proposals",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the technical volume in a government proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The technical volume is the section of a federal proposal — governed by FAR Part 15 — that describes your solution: your methodology, technical approach, key personnel qualifications, and risk management plan. It is typically the highest-weighted evaluation factor, accounting for 40–60% of the total evaluation score in competitive source selections. The technical volume is structured by Section L (instructions) and scored against Section M (evaluation criteria) of the solicitation.",
      },
    },
    {
      "@type": "Question",
      name: "How should a technical volume be structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Structure your technical volume around Section M evaluation factors — not your internal preference for how to present the work. Create one major section per scoreable sub-factor, labeled with language that maps directly to Section M. Each section should include your technical approach (methodology), evidence (past performance metrics, certifications, project history), and differentiator (what you do that competitors don't). Include a compliance cross-reference matrix showing each Section M factor and the proposal section addressing it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a technical volume and a management volume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The technical volume describes what you will do and how — your methodology, tools, task approach, and technical risk mitigation. The management volume describes how you will run the contract — your organizational structure, program management processes, quality assurance plan, transition plan, and subcontractor integration. Many solicitations require separate volumes for each; others combine them. Section L specifies the required volumes and their content.",
      },
    },
    {
      "@type": "Question",
      name: "How do government evaluators score technical volumes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR Part 15, evaluators use a rating system of Outstanding, Good, Acceptable, Marginal, and Unacceptable. Outstanding means exceptional approach with strengths that far outweigh weaknesses and very low risk. Evaluators work through each Section M factor and sub-factor independently, looking for evidence — named methodologies, specific project history, certifications, measurable outcomes — that justifies a high rating. They can only score what they can point to; claims without evidence score as marketing, not as strengths.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common mistakes in government proposal technical volumes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common technical volume mistakes are: writing to the SOW instead of Section M (missing scoreable sub-factors), recycling prior proposals without tailoring to the specific solicitation, understaffing the writing team leading to generic content under time pressure, using unsupported superlatives instead of evidence-backed claims, including misaligned graphics that don't connect to evaluation factors, and failing to address how your approach is better than the incumbent's. All of these failures come from writing from the contractor's perspective rather than the evaluator's scoring rubric.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a government proposal technical volume be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Page limits for technical volumes are set in Section L of each solicitation and vary widely — from 15 pages for simplified acquisitions to 100+ pages for complex multi-year contracts. There is no universal standard. Always read Section L carefully: page limits may exclude resumes, past performance write-ups, graphics, and tables of contents, or they may count everything. Exceeding the stated page limit is a compliance failure that agencies can use to reject a proposal without evaluation.",
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
