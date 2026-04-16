import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Bloomberg Government (BGOV)",
  description: "Enterprise intelligence without the enterprise price. Compare CapturePilot vs BGOV for small business government contract intelligence.",
  keywords: "CapturePilot vs BGOV, Bloomberg Government alternative, BGOV comparison, BGOV pricing, government contract intelligence, BGOV competitor, GovCon analytics",
  alternates: { canonical: "https://www.capturepilot.com/vs/bgov" },
  openGraph: {
    title: "CapturePilot vs Bloomberg Government (BGOV)",
    description: "Enterprise intelligence without the enterprise price. Compare CapturePilot vs BGOV for small business government contract intelligence.",
    url: "https://www.capturepilot.com/vs/bgov",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs Bloomberg Government (BGOV)", item: "https://www.capturepilot.com/vs/bgov" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs Bloomberg Government (BGOV): Capture Tools, Not a Legislative Terminal",
  description:
    "Enterprise intelligence without the enterprise price. Compare CapturePilot vs BGOV for small business government contract intelligence.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/bgov",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to Bloomberg Government (BGOV)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BGOV is a legislative and policy intelligence terminal built for lobbyists, law firms, and large federal affairs teams — it costs $6,000–$12,000+ per seat per year. CapturePilot is a capture-management platform built for small businesses that want to win contracts: smart matching against NAICS / PSC / set-aside, AI proposal drafting, voice-powered capability statement builder, and a Kanban deal pipeline. At $199/mo flat (no per-seat fees, free tier available), CapturePilot costs roughly 95% less while adding tools BGOV does not offer.",
      },
    },
    {
      "@type": "Question",
      name: "Is BGOV or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot. BGOV's core audience is enterprises that need to track legislation, congressional activity, and policy trends — it has no AI proposal writer, no capability statement builder, no Quick Eligibility Checker, and no automatic set-aside matching. Small businesses and SDVOSB / WOSB / 8(a) / HUBZone firms need exactly those features to win contracts. CapturePilot was built specifically for that audience, at SMB pricing, with a free tier for eligibility checks before you upgrade.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between BGOV and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BGOV uses per-seat annual licensing at roughly $6,000–$12,000 per seat per year with an enterprise sales process. For a 5-person team that is $30,000–$60,000 annually. CapturePilot is $199/month flat ($2,388/year) with no per-seat fees and a free tier. Annual billing is 20% off. A small team using CapturePilot pays roughly 95% less than the same team on BGOV and gets AI proposal drafting, capability statements, and pipeline tools that BGOV does not include.",
      },
    },
    {
      "@type": "Question",
      name: "Does BGOV have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BGOV is focused on legislative tracking, congressional analytics, federal spending data, and procurement research — it is a research terminal, not a capture or proposal tool. There is no AI proposal writer, no capability statement builder, and no Quick Checker. CapturePilot includes all three: gpt-4o-mini drafts proposal sections from solicitation requirements, a TipTap-based capability statement editor, and an instant Quick Checker that checks set-aside eligibility from a UEI or DUNS.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from BGOV to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and for most small businesses it is straightforward. CapturePilot indexes SAM.gov opportunities daily and supplements them with USASpending.gov award data and SBIR.gov R&D opportunities — the federal contract data BGOV provides is already covered. Onboarding takes under 10 minutes: set your NAICS codes, set-asides, and target states, and smart matching surfaces your best-fit opportunities immediately. The free tier lets you verify match quality before you cancel the BGOV seat.",
      },
    },
    {
      "@type": "Question",
      name: "Which tool is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot for active bidding, BGOV for high-level policy context. CapturePilot ingests SAM.gov opportunities every morning at 02:00 UTC, scores them against your profile at 03:00 UTC, and sends daily scored alerts. BGOV covers the same underlying data but presents it as analytics dashboards and research reports aimed at strategists, not bidders. If you want to see Sources Sought, Pre-Solicitations, and Solicitations scored and ready to act on today, CapturePilot is the better fit.",
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
