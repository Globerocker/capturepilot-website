import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracts for Women-Owned Businesses (WOSB)",
  description: "Find WOSB and EDWOSB set-aside contracts. CapturePilot matches women-owned businesses with federal opportunities they qualify for.",
  keywords: "WOSB contracts, women-owned business contracts, EDWOSB set-aside, women government contracts, female-owned business federal, SBA WOSB program, women small business",
  alternates: { canonical: "https://www.capturepilot.com/for/women-owned" },
  openGraph: {
    title: "Government Contracts for Women-Owned Businesses (WOSB)",
    description: "Find WOSB and EDWOSB set-aside contracts. CapturePilot matches women-owned businesses with federal opportunities they qualify for.",
    url: "https://www.capturepilot.com/for/women-owned",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.capturepilot.com/for" },
    { "@type": "ListItem", position: 3, name: "Women-Owned", item: "https://www.capturepilot.com/for/women-owned" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Government Contracts for Women-Owned Businesses (WOSB & EDWOSB)",
  description:
    "Federal contract matching for WOSB and EDWOSB certified firms. The federal government reserves 5% of all contracting dollars for women-owned small businesses across 83 eligible NAICS groups. CapturePilot scans 40,000+ opportunities daily and surfaces WOSB sole-source awards up to $4.5M (services) or $7M (manufacturing).",
  url: "https://www.capturepilot.com/for/women-owned",
  audience: {
    "@type": "Audience",
    audienceType: "Women-Owned Small Business (WOSB/EDWOSB)",
  },
  about: {
    "@type": "Thing",
    name: "WOSB and EDWOSB federal set-aside contracts",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between WOSB and EDWOSB certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WOSB (Women-Owned Small Business) requires at least 51% ownership and day-to-day management by one or more women. EDWOSB (Economically Disadvantaged WOSB) adds a personal net worth cap under $750,000 and is eligible for additional set-aside categories where women are substantially underrepresented. EDWOSB firms also qualify for sole-source contracts up to $7M in manufacturing (vs $4.5M for services). Both require SBA certification through certify.SBA.gov.",
      },
    },
    {
      "@type": "Question",
      name: "How much of federal contracting goes to women-owned businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government has a 5% annual goal for WOSB contracting — roughly $35 billion per year in obligated dollars. WOSB set-asides are restricted to 83 NAICS groups where women are substantially underrepresented, covering industries like professional services, construction, IT, manufacturing, and healthcare. CapturePilot scans all 40,000+ indexed federal opportunities and flags WOSB-eligible matches against your certifications.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be SBA-certified to bid on WOSB contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As of October 2020, self-certification is no longer allowed for WOSB set-aside awards. You must be certified either through SBA's free certify.SBA.gov platform or through an approved third-party certifier. CapturePilot's Quick Checker verifies your current certification status against SAM.gov and flags any gaps before you invest time in a proposal.",
      },
    },
    {
      "@type": "Question",
      name: "Can a WOSB win a sole-source contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in specific cases. A WOSB can receive a sole-source award when the contracting officer determines that two or more WOSBs are not available to compete, the award is under $4.5M (services/goods) or $7M (manufacturing), and the firm is certified in an eligible NAICS. EDWOSB firms have expanded sole-source eligibility across more NAICS categories. The capability statement and past performance you upload to CapturePilot are key inputs for these award decisions.",
      },
    },
    {
      "@type": "Question",
      name: "How does CapturePilot help women-owned businesses find teaming partners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Partner Search indexes 1M+ SAM-registered companies. Filter by NAICS, certifications, and location to find mentor-protégé candidates, JV partners, and subcontractors. WOSBs can also participate in the SBA Mentor-Protégé Program, which lets you team with larger firms on contracts above your size standard while earning past performance credit. We surface prime contractors with open subcontracting plans so you can get on their teams.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
