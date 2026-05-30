import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Construction Government Contracts: Bonding, Davis-Bacon & How to Win (2026) | CapturePilot",
  description:
    "Win federal construction contracts: Miller Act bonding requirements, Davis-Bacon prevailing wages, NAICS codes, set-asides, MILCON, and a step-by-step path to first award.",
  keywords:
    "construction government contracts, federal construction contracts, Davis-Bacon Act, Miller Act bonding, NAICS 236 237 238, military construction MILCON, small business construction set aside, federal construction small business, government construction bid, prevailing wage federal construction, USACE contracts, NAVFAC contracts",
  alternates: {
    canonical: "https://capturepilot.com/blog/construction-government-contracts",
  },
  openGraph: {
    title:
      "Construction Government Contracts: Bonding, Davis-Bacon & How to Win (2026)",
    description:
      "Win federal construction contracts: Miller Act bonding requirements, Davis-Bacon prevailing wages, NAICS codes, set-asides, MILCON, and a step-by-step path to first award.",
    url: "https://capturepilot.com/blog/construction-government-contracts",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://capturepilot.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://capturepilot.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Construction Government Contracts: Bonding, Davis-Bacon, and How to Win",
      item: "https://capturepilot.com/blog/construction-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Construction Government Contracts: Bonding, Davis-Bacon, and How to Win",
  description:
    "Complete guide to winning federal construction contracts: Miller Act bonding thresholds, Davis-Bacon prevailing wage requirements, NAICS codes, set-aside programs, MILCON market, bid evaluation criteria, and a nine-step path to first award.",
  image:
    "https://capturepilot.com/og/construction-government-contracts.png",
  author: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: {
      "@type": "ImageObject",
      url: "https://capturepilot.com/logo.png",
    },
  },
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
  mainEntityOfPage:
    "https://capturepilot.com/blog/construction-government-contracts",
  articleSection: "Industries",
  keywords: [
    "construction government contracts",
    "federal construction contracts",
    "Davis-Bacon Act",
    "Miller Act bonding",
    "NAICS 236",
    "MILCON",
    "small business construction set aside",
    "prevailing wage federal construction",
    "USACE contracts",
    "NAVFAC contracts",
  ],
  wordCount: 5900,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Miller Act and how does it affect federal construction contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Miller Act (40 U.S.C. Chapter 31) requires performance and payment bonds on federal construction contracts over $150,000. Both bonds must equal 100% of the contract price and come from a Treasury-listed surety. For contracts between $35,000 and $150,000, alternative payment protections are required. Contracts under $35,000 have no mandatory bonding. Establish surety capacity before bidding — you cannot get bonding after award and expect to retain the contract.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Davis-Bacon Act apply to all federal construction contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Davis-Bacon Act applies to federal construction contracts exceeding $2,000. This threshold is so low that virtually every federal construction job is covered. It requires contractors and all subcontractors to pay workers no less than the locally prevailing wage and fringe benefits for their specific trade classification in the county where work is performed. Contractors must submit weekly certified payroll reports using DOL Form WH-347 and post the applicable wage determination on the job site.",
      },
    },
    {
      "@type": "Question",
      name: "What NAICS codes cover federal construction work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Federal construction work falls under three NAICS subsectors: 236 (Construction of Buildings, $39.5M size standard), 237 (Heavy and Civil Engineering, $33.5M for most codes), and 238 (Specialty Trade Contractors, $14M–$45M depending on specific code). Register all applicable codes on SAM.gov. The NAICS code assigned to a solicitation determines your size standard eligibility and set-aside program access.",
      },
    },
    {
      "@type": "Question",
      name: "How do I win federal construction contracts as a small business with no federal past performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three proven paths: (1) Subcontract under a federal prime contractor already holding construction contracts in your area — find them via SAM.gov award data and offer specialized trade services. (2) Pursue state and local government construction contracts first — these count as government past performance in most federal evaluations. (3) Target renovation and repair contracts (R&R) for your first prime award — these are smaller, frequently set aside for small businesses, and do not require design-build capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Experience Modification Rate (EMR) and why does it matter for federal construction bids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Experience Modification Rate (EMR) measures your safety record relative to industry average. A score below 1.0 means fewer injuries than average. Many federal construction solicitations set a maximum EMR threshold of 1.0 or 1.2 as a pass/fail requirement — companies above the threshold are eliminated before technical factors are evaluated. The EMR is based on a rolling three-year window, so a serious incident can disqualify you from solicitations for up to three years.",
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
