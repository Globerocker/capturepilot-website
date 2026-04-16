import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs GovDash — Affordable Full-Pipeline Alternative",
  description:
    "Compare CapturePilot vs GovDash. GovDash focuses on AI proposals for large teams. CapturePilot delivers a full capture pipeline — matching, proposals, capability statements, and consulting — at a fraction of the cost.",
  keywords:
    "CapturePilot vs GovDash, GovDash alternative, AI proposal writing, GovCon tools, government contract software, GovDash pricing",
  alternates: { canonical: "https://www.capturepilot.com/vs/govdash" },
  openGraph: {
    title: "CapturePilot vs GovDash — Affordable Full-Pipeline Alternative",
    description:
      "Compare CapturePilot vs GovDash. Full capture pipeline at a fraction of the price. See the feature-by-feature breakdown.",
    url: "https://www.capturepilot.com/vs/govdash",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs GovDash", item: "https://www.capturepilot.com/vs/govdash" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs GovDash: Full Capture Pipeline vs Enterprise Proposal AI",
  description:
    "Compare CapturePilot vs GovDash. GovDash focuses on AI proposals for large teams. CapturePilot delivers a full capture pipeline — matching, proposals, capability statements, and consulting — at a fraction of the cost.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/govdash",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to GovDash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovDash is a well-funded AI proposal platform targeting mid-to-large GovCon firms with dedicated proposal teams. Its strength is proposal compliance and drafting at enterprise scale. CapturePilot covers a broader pipeline at a smaller scale: smart matching across 37K+ SAM.gov opportunities, Quick Checker eligibility, a voice-powered capability statement builder, market intelligence from USASpending.gov, partner search across 1M+ SAM-registered contractors, and a managed consulting tier — in addition to AI proposal drafting. Both use AI; CapturePilot is wider, GovDash is deeper on one slice.",
      },
    },
    {
      "@type": "Question",
      name: "Is GovDash or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot. GovDash is priced and positioned for firms with $10M+ revenue submitting 20+ proposals per year. Small businesses under $10M and solo founders rarely hit that volume and cannot justify per-seat enterprise pricing. CapturePilot was built for teams of 1–20: $199/mo flat with full team access, a free tier for eligibility checking, automatic set-aside matching for SDVOSB / WOSB / 8(a) / HUBZone, and an optional consulting tier for hands-off capture.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between GovDash and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovDash starts at roughly $500+ per seat per month with an enterprise sales process, typical annual commitments, and no free tier. For a 3-person team that is $18,000+/year. CapturePilot is $199/month flat ($2,388/year) regardless of team size, with a 30-day Pro trial and a free tier. A 3-person team saves roughly $15,600+/year by switching, while gaining features GovDash does not include — Quick Checker, capability statement builder, partner search, consulting tier.",
      },
    },
    {
      "@type": "Question",
      name: "Does GovDash have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — AI proposal generation is GovDash's core feature, and they do it well for large teams with formal color-team review processes. CapturePilot also includes AI proposal generation (gpt-4o-mini in JSON mode with per-section progress streaming and TipTap bubble-menu AI edits), but pairs it with the earlier steps GovDash does not address: finding and qualifying the opportunity, verifying set-aside eligibility, and generating the capability statement that accompanies the proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from GovDash to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you use GovDash mainly for AI proposal drafting, CapturePilot covers that plus the opportunity discovery and capability statement work GovDash does not. Existing proposals can be imported as PDF or pasted into the TipTap editor; pursuits recreate in the Kanban pipeline in minutes. The free tier lets you verify match quality and draft output before canceling the GovDash seats.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot. GovDash focuses on the proposal stage — opportunity monitoring is a secondary feature. CapturePilot ingests SAM.gov daily via the official API, scores 37K+ opportunities with a proprietary multi-factor engine, classifies each as HOT / WARM / COLD, and delivers daily scored email alerts. For small businesses that need to find the right opportunities before drafting anything, CapturePilot is the stronger fit.",
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
