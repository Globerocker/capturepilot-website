import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/schema";

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "SDVOSB Opportunity Map", path: "/resources/sdvosb-opportunity-map" },
  ]);

  const article = articleJsonLd({
    title: "The SDVOSB $14B Opportunity Map: Where Veteran-Owned Firms Win",
    description:
      "A free map of the top 50 federal agencies buying from SDVOSBs — with average contract size, top NAICS, and the unlock-path for each. Built for veteran-owned firms planning their first $1M in federal revenue.",
    url: "https://www.capturepilot.com/resources/sdvosb-opportunity-map",
    datePublished: "2026-04-18",
    section: "Veteran-Owned Business",
    keywords: ["SDVOSB", "VOSB", "veteran-owned", "federal contracts", "set-aside", "VA contracts"],
  });

  const faq = faqJsonLd([
    {
      q: "Which agency buys the most from SDVOSBs?",
      a: "The Department of Veterans Affairs is the largest single buyer, awarding ~$4.2B annually to SDVOSBs through its Vets First Contracting Program. The Department of Defense (and its sub-components — Army, Navy, Air Force) collectively spend over $5B per year. Together, VA + DoD account for ~65% of all SDVOSB awards government-wide.",
    },
    {
      q: "What NAICS codes are highest-value for SDVOSBs?",
      a: "Construction (236xxx, 237xxx, 238xxx), facilities support and janitorial (561720, 561210), management consulting (541611), IT services (541512, 541519), and engineering services (541330). Healthcare (621xxx) is especially strong at the VA. Combined, these account for ~70% of all SDVOSB awards.",
    },
    {
      q: "What's the smallest contract an SDVOSB should pursue first?",
      a: "Micro-purchase awards under $10K are the easiest first wins — no SAM.gov listing required, often awarded via simplified acquisition procedures. From there, target SAP (Simplified Acquisition Procedures) contracts $10K–$250K. Once you have 2-3 past performance references, move into the $250K–$5M sole-source SDVOSB sweet spot.",
    },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
