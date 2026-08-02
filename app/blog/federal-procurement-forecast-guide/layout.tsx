import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federal Agency Procurement Forecasts: Get Ahead of Every Opportunity (2026) | CapturePilot",
  description:
    "Federal agencies publish their buying plans 6–18 months before the RFP. Learn where to find procurement forecasts and how to use them to build a pipeline that wins.",
  keywords:
    "federal procurement forecast, acquisition forecast, forecast of contracting opportunities, GSA acquisition gateway forecast, agency procurement forecast, SAM.gov opportunities, small business government contracting pipeline, capture management, pre-solicitation strategy, bid pipeline government contracts",
  alternates: { canonical: "https://www.capturepilot.com/blog/federal-procurement-forecast-guide" },
  openGraph: {
    title: "Federal Agency Procurement Forecasts: Get Ahead of Every Opportunity (2026) | CapturePilot",
    description:
      "Federal agencies publish their buying plans 6–18 months before the RFP. Learn where to find procurement forecasts and how to use them to build a pipeline that wins.",
    url: "https://www.capturepilot.com/blog/federal-procurement-forecast-guide",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.capturepilot.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Federal Agency Procurement Forecasts: How to Get Ahead of Every Opportunity",
      item: "https://www.capturepilot.com/blog/federal-procurement-forecast-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Federal Agency Procurement Forecasts: How to Get Ahead of Every Opportunity",
  description:
    "Federal agencies publish their buying plans 6–18 months before the RFP. Learn where to find procurement forecasts and how to use them to build a pipeline that wins.",
  image: "https://www.capturepilot.com/og/federal-procurement-forecast-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-08-02",
  dateModified: "2026-08-02",
  mainEntityOfPage: "https://www.capturepilot.com/blog/federal-procurement-forecast-guide",
  articleSection: "Strategy",
  keywords: [
    "federal procurement forecast",
    "acquisition forecast",
    "forecast of contracting opportunities",
    "GSA acquisition gateway",
    "agency OSDBU forecast",
    "pre-solicitation strategy",
    "government contract pipeline",
    "small business government contracting",
    "capture management",
    "early engagement federal contracts",
  ],
  wordCount: 5900,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a federal procurement forecast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A federal procurement forecast (also called a forecast of contracting opportunities or acquisition forecast) is a planning document that federal agencies publish to signal anticipated contract actions for the current or upcoming fiscal year. It lists estimated contract values, NAICS codes, set-aside designations, expected solicitation dates, and points of contact. Forecasts are not solicitations and do not obligate the government to buy anything — but they provide visibility into agency buying plans 6 to 18 months before a formal solicitation appears on SAM.gov.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find federal agency procurement forecasts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary government-wide source is the GSA Forecast of Contracting Opportunities (FCO) tool at acquisitiongateway.gov/forecast — searchable by NAICS code, agency, and set-aside type, with no login required. Agency-specific forecasts are indexed at acquisition.gov/procurement-forecasts. Major agencies also maintain their own portals: DHS uses APFS at apfs-cloud.dhs.gov, the VA has its own vendor portal forecast, NASA publishes an annual Excel forecast, and most agencies link to their OSDBU pages for small business outreach.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance do procurement forecasts appear before the RFP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Procurement forecasts typically appear 6 to 18 months before a solicitation is issued on SAM.gov, and sometimes 12 to 24 months before contract award for large or complex procurements. This compares to the minimum 15-day notice required under FAR 5.203 between the SAM.gov pre-solicitation synopsis and actual solicitation release. The forecast-to-award gap is your window for relationship building, teaming, and capability positioning.",
      },
    },
    {
      "@type": "Question",
      name: "How much do small businesses win from forecasted federal contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In FY2025, small businesses captured $179 billion in federal prime contracts — 28% of all prime federal contracting dollars — exceeding the statutory 23% goal for the twelfth consecutive year. Total federal contract spending in FY2025 was approximately $793 billion. Procurement forecasts list the set-aside designation for each opportunity, letting you identify contracts specifically reserved for small businesses, 8(a) firms, SDVOSBs, WOSBs, or HUBZone companies before they are competed.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do after finding a procurement forecast entry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After finding a relevant forecast entry: (1) Check whether it is a recompete by searching the prior contract number in FPDS at fpds.gov to identify the incumbent. (2) Contact the contracting officer POC listed in the forecast to introduce your company and ask about upcoming industry days. (3) Schedule a capability briefing with the agency's OSDBU. (4) Monitor SAM.gov for a sources sought notice tied to the entry, and respond when it appears. (5) Begin identifying teaming partners if the contract size exceeds your typical work. The goal is to be a known quantity before the RFP is published.",
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
