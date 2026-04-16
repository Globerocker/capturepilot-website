import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CapturePilot — Veterans Helping Veterans Win Contracts",
  description: "Built by Americurial LLC, a veteran-owned digital agency. We built CapturePilot because small businesses deserve enterprise-grade intelligence.",
  keywords: "about CapturePilot, Americurial LLC, veteran-owned business, GovCon startup, government contract platform, who built CapturePilot",
  alternates: { canonical: "https://www.capturepilot.com/about" },
  openGraph: {
    title: "About CapturePilot — Veterans Helping Veterans Win Contracts",
    description: "Built by Americurial LLC, a veteran-owned digital agency. We built CapturePilot because small businesses deserve enterprise-grade intelligence.",
    url: "https://www.capturepilot.com/about",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.capturepilot.com/about" },
  ],
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About CapturePilot",
  url: "https://www.capturepilot.com/about",
  description:
    "CapturePilot is a veteran-founded federal capture intelligence platform built by Americurial LLC. Our mission is to give every small business access to the same contracting intelligence that billion-dollar defense contractors use.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://www.capturepilot.com/#organization",
    name: "CapturePilot",
    legalName: "Americurial LLC",
    url: "https://www.capturepilot.com",
    logo: "https://www.capturepilot.com/logo.png",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Andre Schuler",
    },
    description:
      "Veteran-owned federal capture intelligence software for small businesses. Replaces $10K–$50K/year legacy tools like GovWin and BGOV with AI-powered matching, proposal writing, and market intelligence at $199/month.",
    sameAs: [
      "https://www.capturepilot.com",
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who founded CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot was founded by Andre Schuler and built by the team at Americurial LLC, a veteran-owned digital agency. The founding team came out of military service, started their own businesses, and hit the same wall every veteran small business hits: SAM.gov is unusable raw data and legacy GovCon tools like GovWin and BGOV cost $10,000–$50,000 per year. CapturePilot exists to fix that.",
      },
    },
    {
      "@type": "Question",
      name: "Is CapturePilot a veteran-owned business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot is built by Americurial LLC, a veteran-owned digital agency. Our mission of 'veterans helping veterans win contracts' isn't marketing — it's why the platform exists. SDVOSB and VOSB set-asides are prioritized in the scoring engine, and the 3% federal SDVOSB goal is a first-class concept in how we surface opportunities to veteran-owned customers.",
      },
    },
    {
      "@type": "Question",
      name: "Where does CapturePilot get its opportunity data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We ingest SAM.gov contract opportunities daily (approximately 40,000+ active listings including Sources Sought, Pre-Solicitation, Solicitation, and Award notices), supplement with SBIR.gov for R&D opportunities, and pull USASpending.gov and FPDS data for incumbent analysis and award history. All data sources are official federal procurement systems — we add matching, scoring, and proposal intelligence on top.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the CapturePilot team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot is built by a veteran-founded team at Americurial LLC combining federal contracting expertise with modern software engineering. The team has direct experience bidding on federal contracts, reviewing solicitations, and writing winning proposals. Every feature in the platform — from the 140-point scoring algorithm to the AI proposal writer — was designed by people who lived the problem before they built the solution.",
      },
    },
    {
      "@type": "Question",
      name: "How is CapturePilot different from GovWin or BGOV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovWin IQ and Bloomberg Government are enterprise tools priced at $10,000–$50,000/year and built for Fortune 500 defense contractors with dedicated capture teams. CapturePilot is priced at $199/month for small businesses. The AI handles the heavy lifting — opportunity matching, proposal drafting, competitor analysis, market research — that legacy tools require a full-time capture manager to do manually.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
