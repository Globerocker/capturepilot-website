import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contract Protests: When, Why, and How to File One (2026) | CapturePilot",
  description:
    "Learn how to file a government contract protest at the GAO or COFC. Covers filing deadlines, the automatic stay, top sustained grounds, and the cost-benefit decision.",
  keywords:
    "government contract protest, bid protest GAO, how to file bid protest, GAO protest process, automatic stay CICA, contract protest grounds, post award protest, pre award protest, sustained protest, Court of Federal Claims bid protest, protest debriefing, unreasonable technical evaluation protest",
  alternates: { canonical: "https://www.capturepilot.com/blog/government-contract-protest" },
  openGraph: {
    title: "Government Contract Protests: When, Why, and How to File One (2026) | CapturePilot",
    description:
      "Learn how to file a government contract protest at the GAO or COFC. Covers filing deadlines, the automatic stay, top sustained grounds, and the cost-benefit decision.",
    url: "https://www.capturepilot.com/blog/government-contract-protest",
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
      name: "Government Contract Protests: When, Why, and How to File One",
      item: "https://www.capturepilot.com/blog/government-contract-protest",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Contract Protests: When, Why, and How to File One",
  description:
    "Learn how to file a government contract protest at the GAO or COFC. Covers filing deadlines, the automatic stay, top sustained grounds, and the cost-benefit decision.",
  image: "https://www.capturepilot.com/og/government-contract-protest.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-25",
  dateModified: "2026-05-25",
  mainEntityOfPage: "https://www.capturepilot.com/blog/government-contract-protest",
  articleSection: "Advanced Strategy",
  keywords: [
    "government contract protest",
    "bid protest GAO",
    "automatic stay CICA",
    "protest grounds",
    "post award protest",
    "Court of Federal Claims",
    "GAO protest process",
    "sustained protest",
    "debriefing government contract",
    "federal procurement protest",
  ],
  wordCount: 5900,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a government contract protest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A government contract protest (also called a bid protest) is a formal legal challenge to a federal procurement decision. You can protest before an award (pre-award) to challenge solicitation defects, or after an award (post-award) to challenge how the agency evaluated proposals and selected a winner. Protests can be filed at the contracting agency, the Government Accountability Office (GAO), or the U.S. Court of Federal Claims.",
      },
    },
    {
      "@type": "Question",
      name: "How long do I have to file a bid protest at the GAO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For post-award protests, you must file at the GAO within 10 days of when you knew or should have known the basis for your protest — typically the debriefing date. For pre-award protests, the deadline is 10 days after the solicitation defect was or should have been apparent. To trigger the automatic stay of contract performance under CICA, you must file within 10 days of contract award or within 5 days of your debriefing date, whichever is later. Missing these deadlines by even one day results in dismissal.",
      },
    },
    {
      "@type": "Question",
      name: "What is the GAO protest effectiveness rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In fiscal year 2025, GAO's bid protest effectiveness rate was 52% — meaning roughly half of all protests resulted in some form of relief for the protester, either through a GAO decision sustaining the protest (14% of protests decided on the merits) or through voluntary agency corrective action taken before GAO issued a decision. The effectiveness rate has been near 50% consistently for several years.",
      },
    },
    {
      "@type": "Question",
      name: "What is the automatic stay in a government contract protest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The automatic stay is a provision under the Competition in Contracting Act (CICA) that suspends contract award or performance when a timely bid protest is filed at the GAO. The stay takes effect when the agency receives notice from GAO that a protest has been filed within 10 days of award or 5 days of the debriefing. The stay remains in place for up to 100 days while the protest proceeds, unless the agency head issues a written stay override for urgent national interest reasons.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common grounds for a sustained bid protest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to GAO's FY 2025 annual report, the three most common grounds for sustained protests were: (1) unreasonable technical evaluations — including evaluators missing proposal content, applying unstated criteria, or treating offerors disparately; (2) unreasonable cost or price evaluations — including flawed price realism analyses; and (3) unreasonable rejection of proposals — including disqualifying offerors on grounds not identified as eliminating criteria in the solicitation.",
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
