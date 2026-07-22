import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBA Loans for Government Contractors: 7(a), CAPLines & Contract Financing | CapturePilot",
  description:
    "SBA loans for government contractors explained: 7(a) program, Contract CAPLines, Express loans, invoice factoring, and how to use your award letter to qualify. Rates and limits for 2026.",
  keywords:
    "SBA loans for government contractors, SBA 7a loan government contractor, contract CAPLine SBA, SBA loan federal contractor, government contractor working capital, SBA loan award letter, invoice factoring government contractors, SBA Express loan, government contractor financing, mobilization financing federal contract",
  alternates: { canonical: "https://capturepilot.com/blog/sba-loans-government-contractors" },
  openGraph: {
    title: "SBA Loans for Government Contractors: 7(a), CAPLines & Contract Financing | CapturePilot",
    description:
      "SBA loans for government contractors explained: 7(a) program, Contract CAPLines, Express loans, invoice factoring, and how to use your award letter to qualify. Rates and limits for 2026.",
    url: "https://capturepilot.com/blog/sba-loans-government-contractors",
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
      name: "SBA Loans for Government Contractors",
      item: "https://capturepilot.com/blog/sba-loans-government-contractors",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SBA Loans for Government Contractors: 7(a), Contract Financing, and How to Use Them",
  description:
    "How to finance federal contracts using SBA 7(a) loans, Contract CAPLines, Express loans, and invoice factoring — including current rates, limits, application process, and how to leverage your contract award letter.",
  image: "https://capturepilot.com/og/sba-loans-government-contractors.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://capturepilot.com/blog/sba-loans-government-contractors",
  articleSection: "Getting Started in Government Contracting",
  keywords: [
    "SBA loans for government contractors",
    "SBA 7a loan",
    "contract CAPLine",
    "government contractor working capital",
    "invoice factoring government contracts",
    "SBA Express loan",
    "federal contractor financing",
    "mobilization costs federal contract",
  ],
  wordCount: 5600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can government contractors use SBA loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Government contractors are eligible for all SBA loan programs, including the 7(a) program (up to $5 million), Contract CAPLines (revolving credit tied to specific contracts), and SBA Express loans (up to $500,000 with 36-hour SBA approval). Contractors can use SBA loans for working capital, mobilization costs, equipment purchases, and to bridge the gap between contract performance and government payment.",
      },
    },
    {
      "@type": "Question",
      name: "What is an SBA Contract CAPLine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SBA Contract CAPLine is a revolving line of credit under the SBA 7(a) program, designed specifically to finance the direct costs of one or more federal contracts. The maximum is $5 million with a 10-year maturity. Unlike a term loan, a Contract CAPLine revolves — you draw against it as you incur costs and repay it as government invoices are collected. Eligibility requires demonstrating the ability to perform the specific contract(s) being financed.",
      },
    },
    {
      "@type": "Question",
      name: "How does a government contract award letter help with SBA loan approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A signed federal contract award letter is one of the strongest documents you can provide in an SBA loan application. It represents a legally binding obligation from a creditworthy payer (the U.S. government) to pay a defined amount for defined work. This reduces the lender's repayment risk compared to commercial borrowers relying on sales projections. For a Contract CAPLine specifically, the award letter and contract cost breakdown are used to calculate the eligible loan amount.",
      },
    },
    {
      "@type": "Question",
      name: "What are current SBA 7(a) loan interest rates for government contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of mid-2026, SBA 7(a) variable rates range from approximately 9.75% for loans over $350,000 to 13.25% for loans under $50,000. Fixed rates are slightly higher, ranging from about 11.75% to 14.75% depending on loan size. These rates are tied to the prime rate plus a lender spread capped by the SBA. Verify current rates with an SBA-approved lender before applying, as rates change with the prime rate.",
      },
    },
    {
      "@type": "Question",
      name: "Is invoice factoring a good option for government contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Invoice factoring can provide fast capital (24–72 hours) without requiring loan qualification, but it is significantly more expensive than SBA loans. Factoring fees of 1–4% per month translate to effective APRs of 30–60%+ on slow-paying invoices. Additionally, factoring companies typically file a blanket UCC-1 lien on receivables that can block access to SBA loans until released. Factoring works best as a short-term bridge while establishing SBA financing, not as a long-term strategy.",
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
