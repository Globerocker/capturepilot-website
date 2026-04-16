import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Federal Compass — Analytics + Action",
  description: "Federal Compass shows data. CapturePilot helps you act on it. AI proposals, matching, and capture tools at SMB pricing.",
  keywords: "CapturePilot vs Federal Compass, Federal Compass alternative, Federal Compass comparison, government contract analytics, Federal Compass competitor, GovCon analytics tools",
  alternates: { canonical: "https://www.capturepilot.com/vs/federal-compass" },
  openGraph: {
    title: "CapturePilot vs Federal Compass — Analytics + Action",
    description: "Federal Compass shows data. CapturePilot helps you act on it. AI proposals, matching, and capture tools at SMB pricing.",
    url: "https://www.capturepilot.com/vs/federal-compass",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs Federal Compass", item: "https://www.capturepilot.com/vs/federal-compass" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs Federal Compass: Analytics Dashboards vs Action-Ready AI",
  description:
    "Federal Compass shows data. CapturePilot helps you act on it. AI proposals, matching, and capture tools at SMB pricing.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/federal-compass",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to Federal Compass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal Compass is an analytics platform: market analysis, competitive intelligence, agency spending dashboards, and opportunity tracking, sold primarily to mid-market and enterprise firms. CapturePilot takes the same underlying federal data and converts it into action: AI-drafted proposals, automatic set-aside matching, a voice-powered capability statement builder, Quick Checker eligibility, and a Kanban pipeline. Federal Compass stops at 'here is the data.' CapturePilot continues to 'here is your proposal draft, ready for your review.'",
      },
    },
    {
      "@type": "Question",
      name: "Is Federal Compass or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot. Federal Compass is built for $50M+ revenue firms with dedicated competitive-intelligence analysts and proposal writers already on staff. Small businesses under $10M — including WOSB / EDWOSB / SDVOSB / 8(a) — rarely have either. CapturePilot is built for that audience: AI replaces the missing analyst, Quick Checker replaces the missing compliance consultant, and set-aside matching replaces manual filter-juggling. Plus a free tier to test match quality before paying.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between Federal Compass and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal Compass charges roughly $500–$1,500+ per seat per month with an enterprise sales process and typical annual contracts. For a 3-person team that is $18,000–$54,000+/year. CapturePilot is $199/month flat ($2,388/year) regardless of team size, with transparent public pricing, a 30-day Pro trial, and a free tier. Switching typically cuts tooling costs by 85–95% while adding AI tools Federal Compass does not include.",
      },
    },
    {
      "@type": "Question",
      name: "Does Federal Compass have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Federal Compass is an analytics and market-intelligence platform — dashboards, agency spend charts, competitor tracking, opportunity feeds. It has no AI proposal writer and no capability statement builder. CapturePilot includes both: proposal sections are drafted with gpt-4o-mini in JSON mode from the solicitation requirements, and the capability statement builder generates a branded PDF with colors extracted from your website.",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from Federal Compass to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot ingests SAM.gov opportunities daily and supplements with USASpending.gov award data for competitor and incumbent intelligence — the analytics layer you lose is largely replaced by smart matching, automatic scoring, and daily scored alerts. Onboarding is under 10 minutes: NAICS, set-asides, target states. Start on the free tier to verify match quality, then upgrade to Pro at $199/mo flat.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot for hands-on bidders; Federal Compass for strategy teams who want dashboards. CapturePilot ingests SAM.gov opportunities each morning, scores 37K+ opportunities with a proprietary multi-factor engine (NAICS, PSC, set-aside, geography, value, deadline), and delivers daily scored email alerts. Federal Compass shows the same opportunities as analytic feeds but leaves the prioritization and action steps to you.",
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
