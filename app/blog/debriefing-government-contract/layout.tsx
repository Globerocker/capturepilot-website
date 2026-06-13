import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contract Debriefings: How to Learn from Every Loss (2026) | CapturePilot",
  description:
    "How to request a government contract debriefing under FAR 15.506, what the agency must tell you, DoD enhanced debrief rights, and 25 questions to ask after any loss.",
  keywords:
    "government contract debriefing, FAR 15.506, postaward debriefing, preaward debriefing FAR 15.505, DoD enhanced debriefing, DFARS 215.506, debrief request, how to request government contract debrief, debriefing questions, protest deadline debrief, source selection document, bid protest debrief, proposal feedback government contract, competitive range exclusion debrief",
  alternates: { canonical: "https://www.capturepilot.com/blog/debriefing-government-contract" },
  openGraph: {
    title: "Government Contract Debriefings: How to Learn from Every Loss (2026) | CapturePilot",
    description:
      "How to request a government contract debriefing under FAR 15.506, what the agency must tell you, DoD enhanced debrief rights, and 25 questions to ask after any loss.",
    url: "https://www.capturepilot.com/blog/debriefing-government-contract",
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
      name: "Government Contract Debriefings: How to Learn from Every Loss and Win Next Time",
      item: "https://www.capturepilot.com/blog/debriefing-government-contract",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Contract Debriefings: How to Learn from Every Loss and Win Next Time",
  description:
    "How to request a government contract debriefing under FAR 15.506, what the agency must tell you, DoD enhanced debrief rights, and 25 questions to ask after any loss.",
  image: "https://www.capturepilot.com/og/debriefing-government-contract.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
  mainEntityOfPage: "https://www.capturepilot.com/blog/debriefing-government-contract",
  articleSection: "Proposal Strategy",
  keywords: [
    "government contract debriefing",
    "FAR 15.506",
    "postaward debriefing",
    "preaward debriefing",
    "DoD enhanced debriefing",
    "DFARS 215.506",
    "bid protest debrief",
    "proposal feedback",
    "source selection document",
    "debriefing questions",
    "protest deadline",
    "competitive range exclusion",
  ],
  wordCount: 5400,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I request a government contract debriefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit a written request to the contracting officer within 3 calendar days of receiving the award notification (FAR 15.506). The agency must then conduct the debriefing within 5 business days of receiving your request. A simple email to the contracting officer citing FAR 15.506 and requesting a debriefing is sufficient — no formal legal document required.",
      },
    },
    {
      "@type": "Question",
      name: "What information must an agency provide in a debriefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR 15.506(d), the agency must provide: (1) the awardee's overall evaluated cost/price and technical rating, (2) your overall evaluated cost/price and technical rating, (3) significant weaknesses and deficiencies in your proposal, (4) the overall ranking of all offerors if a ranking was developed, (5) a summary of the rationale for award, (6) past performance information on your company, and (7) reasonable responses to relevant questions about whether source selection procedures were followed.",
      },
    },
    {
      "@type": "Question",
      name: "What are DoD enhanced debriefing rights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For DoD contracts over $10 million, DFARS 215.506 provides enhanced debriefing rights. You can submit written follow-up questions within 2 business days of the initial debrief, and the agency must respond in writing within 5 business days. For contracts over $100 million, the agency must proactively provide a redacted written source selection document. For contracts between $10M and $100M awarded to small businesses or nontraditional defense contractors, you can request the redacted source selection document.",
      },
    },
    {
      "@type": "Question",
      name: "How does a debriefing affect my bid protest deadline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a GAO bid protest, you generally have 10 days from when you knew or should have known your protest grounds — typically starting from the debriefing date. To preserve the CICA automatic stay of contract performance, you must file at GAO within 10 days of award or 5 days of your debriefing, whichever is later. For DoD enhanced debriefings, the debrief stays 'open' until the agency responds to follow-up questions, which delays the start of the 5-day window.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request a written debriefing instead of an oral one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FAR 15.506 allows debriefings in oral, written, or electronic format. You can request a written debriefing from the agency, which creates a formal record and is generally preferable for complex procurements or situations where you may consider a bid protest. If the agency schedules an oral debrief, you can also request that they provide written answers to your questions after the session.",
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
