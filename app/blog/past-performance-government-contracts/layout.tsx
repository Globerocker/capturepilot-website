import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Performance in Government Contracts: Why It Matters and How to Build It | CapturePilot",
  description:
    "CPARS ratings account for 20–30% of your federal proposal score. Learn how the system works, how to build your record, and how to write a past performance volume that wins.",
  keywords:
    "past performance government contracts, CPARS ratings, government contract past performance, CPARS evaluation, past performance volume proposal, building past performance federal contracting, PPIRS, contractor performance assessment",
  alternates: { canonical: "https://capturepilot.com/blog/past-performance-government-contracts" },
  openGraph: {
    title: "Past Performance in Government Contracts: Why It Matters and How to Build It",
    description:
      "CPARS ratings account for 20–30% of your federal proposal score. Learn how the system works, how to build your record, and how to write a past performance volume that wins.",
    url: "https://capturepilot.com/blog/past-performance-government-contracts",
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
      name: "Past Performance in Government Contracts: Why It Matters and How to Build It",
      item: "https://capturepilot.com/blog/past-performance-government-contracts",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Past Performance in Government Contracts: Why It Matters and How to Build It",
  description:
    "CPARS ratings account for 20–30% of your federal proposal score. Learn how the system works, how to build your record, and how to write a past performance volume that wins.",
  image: "https://capturepilot.com/og/past-performance-government-contracts.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-07",
  dateModified: "2026-05-07",
  mainEntityOfPage: "https://capturepilot.com/blog/past-performance-government-contracts",
  articleSection: "Proposals",
  keywords: [
    "past performance government contracts",
    "CPARS ratings",
    "CPARS evaluation",
    "past performance volume",
    "government proposal",
    "federal contracting",
    "PPIRS",
    "contractor performance",
  ],
  wordCount: 6800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does past performance count in a government proposal evaluation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Past performance typically accounts for 20–30% of the total evaluation score in negotiated federal source selections above the simplified acquisition threshold ($250,000). The FAR does not prescribe a fixed weight — agencies set the relative importance in the solicitation. In some best-value competitions, past performance is weighted equally to price.",
      },
    },
    {
      "@type": "Question",
      name: "What is CPARS and how does it affect government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CPARS (Contractor Performance Assessment Reporting System) is the official federal database where contracting officers document contractor performance on every contract above the reporting threshold. Evaluations are required on services contracts over $250,000, construction contracts over $750,000, and architect-engineer contracts over $35,000. Records are retained for 3 years (6 years for construction and A-E). Source selection officials access CPARS ratings when evaluating past performance in future procurements.",
      },
    },
    {
      "@type": "Question",
      name: "Can a company with no past performance win a government contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under FAR 15.305(a)(2)(iv), an offeror without relevant past performance history receives a neutral rating — they cannot be evaluated favorably or unfavorably. A neutral past performance rating combined with a strong technical approach and competitive price can win contracts, especially in set-aside competitions and simplified acquisitions where agencies are more open to new contractors.",
      },
    },
    {
      "@type": "Question",
      name: "Does commercial experience count as past performance for government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FAR 15.305(a)(2)(ii) explicitly allows contracting officers to consider Federal, State, local government, and private (commercial) contracts when evaluating past performance. Commercial experience must be relevant to the current requirement — similar scope, complexity, and scale. It should be documented with reference contacts, scope summaries, and performance outcomes using the same five evaluation dimensions CPARS uses: quality, schedule, cost control, management, and regulatory compliance.",
      },
    },
    {
      "@type": "Question",
      name: "How long do CPARS ratings stay on record?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard CPARS evaluations are retained for 3 years after contract completion. Construction and architect-engineer contracts are retained for 6 years. After the retention period expires, the evaluations are no longer visible to source selection officials. This means a poor rating from an older contract will eventually age off your record — but a recent bad evaluation can affect your proposals for up to 3 years.",
      },
    },
    {
      "@type": "Question",
      name: "What are the CPARS rating levels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CPARS uses five adjectival ratings: Exceptional (exceeds requirements in ways that benefit the government, with documented examples), Very Good (exceeds some requirements, minor problems addressed effectively), Satisfactory (meets contractual requirements), Marginal (does not meet some requirements, problems inadequately addressed), and Unsatisfactory (does not meet requirements, recovery unlikely, termination being considered). Ratings are assigned across five areas: quality, schedule, cost control, management, and regulatory compliance.",
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
