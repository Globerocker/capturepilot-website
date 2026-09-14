import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FY2027 Federal Spending Outlook: Where Contract Dollars Flow | CapturePilot",
  description:
    "Defense requests $1.5T (+44%), civilian agencies cut 10%. See exactly where FY2027 federal contract dollars are flowing and how small businesses can win their share.",
  keywords:
    "federal spending FY2027 government contractors, FY2027 defense budget, FY2027 federal contract forecast, government contracting outlook 2027, DoD budget FY2027, small business federal contracts FY2027, DOGE cuts contractors, VA contracts FY2027, DHS spending FY2027, federal budget FY2027 small business",
  alternates: { canonical: "https://capturepilot.com/blog/federal-fy2027-spending-outlook" },
  openGraph: {
    title: "FY2027 Federal Spending Outlook: Where Contract Dollars Flow | CapturePilot",
    description:
      "Defense requests $1.5T (+44%), civilian agencies cut 10%. See exactly where FY2027 federal contract dollars are flowing and how small businesses can win their share.",
    url: "https://capturepilot.com/blog/federal-fy2027-spending-outlook",
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
      name: "FY2027 Federal Spending Outlook: Where Contract Dollars Are Flowing Next Year",
      item: "https://capturepilot.com/blog/federal-fy2027-spending-outlook",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "FY2027 Federal Spending Outlook: Where Contract Dollars Are Flowing Next Year",
  description:
    "A data-driven breakdown of the FY2027 federal budget: the historic $1.5T defense request, DOGE civilian cuts, VA and DHS winners, the continuing resolution impact, and a small business action plan.",
  image: "https://capturepilot.com/og/federal-fy2027-spending-outlook.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-09-14",
  dateModified: "2026-09-14",
  mainEntityOfPage: "https://capturepilot.com/blog/federal-fy2027-spending-outlook",
  articleSection: "Market Intelligence",
  keywords: [
    "federal spending FY2027",
    "government contractors FY2027",
    "DoD budget FY2027",
    "defense industrial base",
    "DOGE contract cuts",
    "VA budget FY2027",
    "DHS spending FY2027",
    "small business federal contracts",
    "continuing resolution FY2027",
    "government contract forecast",
  ],
  wordCount: 5200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is the FY2027 federal defense budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The White House requested $1.5 trillion in total defense spending for FY2027, a 44% increase over FY2026. This includes approximately $1.1 trillion in discretionary funding and $350 billion in mandatory spending through budget reconciliation. Defense would account for 63% of total discretionary spending — up from an average of 50% in prior years.",
      },
    },
    {
      "@type": "Question",
      name: "How much are civilian agencies being cut in FY2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FY2027 budget requests a 10% reduction in non-defense discretionary spending — about $73 billion in cuts across civilian agencies. DOGE has already reduced non-defense federal contract obligations by approximately 22% compared to FY2024 levels, and T4C (termination for convenience) rates are up 340% since DOGE reviews began.",
      },
    },
    {
      "@type": "Question",
      name: "Will FY2027 start under a continuing resolution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. H.R. 6500, the Continuing Appropriations and Extensions Act, 2027, funds the federal government through December 11, 2026 at current-year spending levels to avoid an October 1 government shutdown. Under a CR, agencies cannot start new programs, and most new contract awards slow significantly until full-year appropriations are passed.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VA budget for FY2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Department of Veterans Affairs FY2027 budget is $144.5 billion — up $145 million from FY2026. Key contracting areas include EHR modernization (Oracle Health implementation), IT and AI investments, medical care services, and VA construction and facility upgrades. SDVOSB and VOSB businesses have mandatory set-aside advantages for VA contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the DHS budget for FY2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DHS requested $118.39 billion in total budget authority for FY2027, including $63 billion in discretionary funding and over $190 billion in multiyear funding through the Working Families Tax Cut Act. Priority contracting areas include border technology, CISA cybersecurity, detention and enforcement operations, and disaster preparedness.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best small business opportunities in FY2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The strongest FY2027 small business opportunities are in defense industrial base expansion (munitions suppliers, shipbuilding support, defense IT), VA healthcare and IT (SDVOSB/VOSB mandatory set-asides, EHR modernization), and DHS security and border technology. The defense subcontracting pipeline is the most accessible entry point for businesses without set-aside certifications.",
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
