import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Competitors — Government Contract Software Comparison",
  description:
    "Compare CapturePilot to GovWin, GovTribe, BGOV, HigherGov, Federal Compass, Unison, Capture2Proposal, Sweetspot, GovDash, and SAM.gov. See features, pricing, and why small businesses choose CapturePilot.",
  keywords:
    "CapturePilot alternatives, GovCon software comparison, government contract tools, GovWin alternative, GovTribe alternative, BGOV alternative, federal contracting platform comparison",
  alternates: { canonical: "https://www.capturepilot.com/vs" },
  openGraph: {
    title: "CapturePilot vs Competitors — Government Contract Software Comparison",
    description:
      "Side-by-side comparison of CapturePilot against every major GovCon platform. Features, pricing, and real differences.",
    url: "https://www.capturepilot.com/vs",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "CapturePilot vs Competitors — GovCon Software Comparisons",
  description:
    "Detailed side-by-side comparisons of CapturePilot against every major government contracting platform, including feature matrices, pricing, and use-case fit.",
  url: "https://www.capturepilot.com/vs",
  isPartOf: {
    "@type": "WebSite",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 11,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "CapturePilot vs GovWin", url: "https://www.capturepilot.com/vs/govwin" },
      { "@type": "ListItem", position: 2, name: "CapturePilot vs GovTribe", url: "https://www.capturepilot.com/vs/govtribe" },
      { "@type": "ListItem", position: 3, name: "CapturePilot vs Bloomberg Government (BGOV)", url: "https://www.capturepilot.com/vs/bgov" },
      { "@type": "ListItem", position: 4, name: "CapturePilot vs HigherGov", url: "https://www.capturepilot.com/vs/highergov" },
      { "@type": "ListItem", position: 5, name: "CapturePilot vs Federal Compass", url: "https://www.capturepilot.com/vs/federal-compass" },
      { "@type": "ListItem", position: 6, name: "CapturePilot vs Unison", url: "https://www.capturepilot.com/vs/unison" },
      { "@type": "ListItem", position: 7, name: "CapturePilot vs Capture2Proposal", url: "https://www.capturepilot.com/vs/capture2proposal" },
      { "@type": "ListItem", position: 8, name: "CapturePilot vs Sweetspot AI", url: "https://www.capturepilot.com/vs/sweetspot" },
      { "@type": "ListItem", position: 9, name: "CapturePilot vs GovDash", url: "https://www.capturepilot.com/vs/govdash" },
      { "@type": "ListItem", position: 10, name: "CapturePilot vs EZGovOpps", url: "https://www.capturepilot.com/vs/ezgovopps" },
      { "@type": "ListItem", position: 11, name: "CapturePilot vs SAM.gov", url: "https://www.capturepilot.com/vs/sam-gov" },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which CapturePilot alternative is the best for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For small businesses under $10M revenue, none of the established players were built for you. GovWin ($8K-$15K/yr per seat) and BGOV ($6K-$12K/yr) target enterprises. GovTribe ($50+/mo) is search-only. HigherGov ($99-$199/mo) covers federal + state + local broadly but has no AI proposal or capability statement tools. CapturePilot was purpose-built for SMB GovCon at $199/mo flat with a free tier, AI proposal drafting, Quick Checker eligibility, and set-aside matching for SDVOSB, WOSB, 8(a), and HUBZone.",
      },
    },
    {
      "@type": "Question",
      name: "Why are there so many government contracting tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovCon tooling fragmented because different teams have different jobs. BGOV and GovWin grew out of legislative and defense intelligence for lobbyists and large primes. GovTribe and HigherGov are search databases on top of SAM.gov data. Capture2Proposal and Shipley-style tools manage the proposal workflow. Unison runs a teaming marketplace. Sweetspot and GovDash added AI on top of proposal or search workflows. CapturePilot exists because small businesses needed one platform that covers the whole pipeline — find, qualify, draft, submit — not five stitched-together tools.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest GovCon platform with AI proposal writing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of 2026, CapturePilot at $199/month is the lowest-priced platform that includes AI proposal drafting, with a free tier for eligibility checking and top-5 match preview. GovDash starts at $500+/mo per seat. Sweetspot AI requires a custom-pricing sales call. Capture2Proposal charges $50-$150 per seat per month but manages proposals rather than drafting them with AI. Traditional research tools like GovWin and BGOV charge enterprise prices and do not include AI proposal drafting at all.",
      },
    },
    {
      "@type": "Question",
      name: "Is SAM.gov enough, or do I need a paid tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov is the official federal database and is free, but it is raw data — no matching, no scoring, no proposal help, and weak search filtering. Small businesses typically spend 15–25 hours per week sifting through irrelevant listings. A paid layer makes sense once your time is worth more than the subscription. CapturePilot ingests the same SAM.gov data daily but scores 37K+ opportunities against your NAICS / PSC / set-aside / geography profile and surfaces only matches you can realistically win.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch from GovWin or BGOV to CapturePilot without losing data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot indexes the same SAM.gov contract opportunities and supplements them with USASpending.gov award data, SBIR.gov R&D opportunities, and SAM.gov registered-contractor records (1M+) for partner search. You do not need to export watchlists — CapturePilot's smart matching automatically surfaces the opportunities that fit your profile. Existing pursuits can be recreated in the Kanban pipeline in minutes, and onboarding (NAICS + set-aside + states) takes under 10 minutes.",
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
