import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contract Teaming Agreements: How to Partner Up and Win (2026) | CapturePilot",
  description:
    "How to structure a government contract teaming agreement: FAR rules, ostensible subcontractor risks, work share limits, joint ventures, and Mentor-Protégé strategy.",
  keywords:
    "government contract teaming agreement, teaming agreement, joint venture government contracts, ostensible subcontractor rule, prime subcontractor team, mentor protege program, small business teaming, FAR 9.6 contractor team arrangements, limitation on subcontracting",
  alternates: { canonical: "https://www.capturepilot.com/blog/government-contract-teaming-agreement" },
  openGraph: {
    title: "Government Contract Teaming Agreements: How to Partner Up and Win (2026) | CapturePilot",
    description:
      "How to structure a government contract teaming agreement: FAR rules, ostensible subcontractor risks, work share limits, joint ventures, and Mentor-Protégé strategy.",
    url: "https://www.capturepilot.com/blog/government-contract-teaming-agreement",
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
      name: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts",
      item: "https://www.capturepilot.com/blog/government-contract-teaming-agreement",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Teaming Agreements: How to Partner Up and Win Bigger Government Contracts",
  description:
    "How to structure a government contract teaming agreement: FAR rules, ostensible subcontractor risks, work share limits, joint ventures, and Mentor-Protégé strategy.",
  image: "https://www.capturepilot.com/og/government-contract-teaming-agreement.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  mainEntityOfPage: "https://www.capturepilot.com/blog/government-contract-teaming-agreement",
  articleSection: "Strategy",
  keywords: [
    "government contract teaming agreement",
    "teaming agreement",
    "joint venture government contracts",
    "ostensible subcontractor rule",
    "FAR 9.6",
    "limitation on subcontracting",
    "mentor protege program",
    "small business teaming",
    "prime subcontractor team",
  ],
  wordCount: 6800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a government contract teaming agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A government contract teaming agreement is a written agreement between two or more companies to jointly pursue a specific federal contract opportunity. It identifies the prime contractor and subcontractor roles, defines work share percentages, and outlines proposal responsibilities. Under FAR Subpart 9.6, the government explicitly permits and encourages these arrangements. The teaming agreement governs the pre-award partnership; a separate subcontract is required after award to create binding work obligations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a teaming agreement and a joint venture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A teaming agreement (FAR 9.601(b)) creates a prime-subcontractor relationship where both firms retain separate legal identities and the prime bids as the offeror. A joint venture (FAR 9.601(a)) forms a new legal entity that bids as the offeror, with partners sharing management, profit, and risk. Joint ventures are used when set-aside eligibility requires the combined entity to qualify as small, such as in SBA Mentor-Protégé arrangements. Teaming agreements are faster to execute and preferred for single-bid pursuits.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ostensible subcontractor rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under 13 C.F.R. § 121.103(h)(4), the SBA can find that a small business prime contractor and its subcontractor are affiliated — meaning their sizes are combined — if the subcontractor performs the primary and vital requirements of the contract or if the prime is unusually reliant on the subcontractor. If combined sizes exceed the applicable size standard, the prime loses its small business status. To avoid this, the prime must genuinely perform the most technically significant work, have its own relevant past performance, and lead proposal development.",
      },
    },
    {
      "@type": "Question",
      name: "How much can a small business subcontract on a set-aside contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR 52.219-14 and 13 C.F.R. § 125.6, a small business prime on a service contract cannot pay more than 50% of personnel costs to subcontractors that are not similarly situated entities. For supply contracts, the limit is also 50% of contract value. For general construction, up to 85% can go to non-similarly-situated subcontractors; for special trade construction, up to 75%. Importantly, amounts paid to subcontractors who share the same set-aside certification (similarly situated entities) do not count against these limits.",
      },
    },
    {
      "@type": "Question",
      name: "What should a teaming agreement include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A teaming agreement should include: identification of the prime and subcontractor, the specific solicitation number, scope of work with defined work share percentages, proposal responsibilities, exclusivity terms, intellectual property provisions, a subcontract negotiation obligation (requiring the parties to negotiate a binding subcontract within a set time after award), and termination/expiration terms. Courts have repeatedly ruled vague teaming agreements unenforceable, so specific percentages and obligations are essential.",
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
