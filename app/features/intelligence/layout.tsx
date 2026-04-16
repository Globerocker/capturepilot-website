import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Intelligence — See Who Wins Government Contracts",
  description: "Track agency spending, competitor wins, and market trends. Powered by USASpending and SAM.gov data. Know your market before you bid.",
  keywords: "government contract intelligence, federal spending data, competitor analysis GovCon, USASpending data, agency spending trends, market intelligence federal, incumbent tracking",
  alternates: { canonical: "https://www.capturepilot.com/features/intelligence" },
  openGraph: {
    title: "Market Intelligence — See Who Wins Government Contracts",
    description: "Track agency spending, competitor wins, and market trends. Powered by USASpending and SAM.gov data. Know your market before you bid.",
    url: "https://www.capturepilot.com/features/intelligence",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
    { "@type": "ListItem", position: 3, name: "Market Intelligence", item: "https://www.capturepilot.com/features/intelligence" },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot Market Intelligence",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Competitive and market intelligence layer that aggregates SAM.gov opportunities, USASpending.gov award data, FPDS past performance records, and SAM.gov Award Notices to surface incumbent contractors, agency spend patterns, and competitor win rates.",
  featureList: [
    "Agency spend analysis across 24 agencies, filtered by NAICS",
    "Competitor intelligence across 156+ tracked contractors with win rates and teaming patterns",
    "Incumbent identification — 84 incumbents matched to upcoming recompetes",
    "5-year trend analysis by agency, NAICS, and set-aside type",
    "Data sourced from SAM.gov, USASpending.gov, FPDS, and SAM Award Notices",
    "Opportunity-level competitive context — who bid, who won, historical award values",
  ],
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "USD",
    url: "https://app.capturepilot.com/signup",
  },
  brand: { "@type": "Brand", name: "CapturePilot" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where does CapturePilot's intelligence data come from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We aggregate four primary sources: SAM.gov for 40,000+ live opportunities, USASpending.gov for historical federal award data and agency budgets, FPDS (Federal Procurement Data System) for past performance records, and SAM.gov Award Notices for incumbent and contract-history intelligence. The intelligence engine (tools/5_award_intelligence.py) has matched 255 award notices to 84 incumbents on opportunities currently in the pipeline, so you can see who held the contract before the recompete.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see who my competitors are and what they win?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Competitor Intelligence tracks 156+ contractors active in your NAICS codes — their win rates, average contract values, set-aside utilization, teaming partners, and agency relationships. On the /competitors detail page you see their services, leadership, NAICS codes with labels, past clients, locations, and a 'Likely Bid Targets' section that joins current opportunities on their NAICS. This lets you map the competitive landscape before you commit to a bid.",
      },
    },
    {
      "@type": "Question",
      name: "How does agency spend analysis work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We pull federal obligation data from USASpending.gov and break it down by agency, NAICS, and fiscal year. For example, in 561720 (Janitorial Services) you can see the DoD spent $4.2B, VA spent $2.1B, GSA spent $1.6B in FY2025. Drill into department-level budgets, historical allocations, and upcoming fiscal year projections so you target buyers with real money. Heatmaps visualize concentration, and 5-year trend lines show whether a market is growing or shrinking.",
      },
    },
    {
      "@type": "Question",
      name: "Can intelligence help me find Sources Sought opportunities early?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sources Sought and RFI notices appear 6–18 months before solicitation, and CapturePilot's matching engine boosts them with a +20 score adjustment so they surface at the top of your HOT list. Combined with incumbent tracking — which shows you who currently holds the contract and when their period of performance ends — you can position your capture plan 12+ months before the recompete hits the street.",
      },
    },
    {
      "@type": "Question",
      name: "Does intelligence cover IDIQs and contract vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The IDIQ / Contract Vehicle Tracking module surfaces active IDIQs, GWACs, and BPAs in your NAICS codes — CIO-SP3, SEWP, 8(a) STARS III, OASIS, Alliant 2, VETS 2, and smaller agency-specific vehicles. You see which vehicles are accepting new task orders, which agencies use them most, historical task-order values, and which primes hold seats on each vehicle so you can identify teaming opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use intelligence for pricing my bid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Historical award values by NAICS let you benchmark your price against what agencies actually paid on comparable past awards. Instead of guessing, you see the actual contract values of prior awards in the same NAICS, set-aside type, and agency. Combined with competitor win rates and teaming patterns, this gives you a defensible price-to-win — one of the most critical factors in federal capture management and a major component of the 10-factor PWin model.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
