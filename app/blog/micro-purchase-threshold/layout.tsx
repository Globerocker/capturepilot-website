import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micro-Purchase Threshold: The Easiest Way to Start Selling to the Government (2026)",
  description:
    "The federal micro-purchase threshold rose to $15,000 in Oct 2025. No SAM registration needed for GPC buys. Learn how 560K+ annual awards flow through this channel.",
  keywords:
    "micro purchase threshold, government micro purchase, micro purchase threshold 2025, government purchase card, GPC threshold, micro purchase SAM registration, small business government contracting beginner, federal micro purchase $15000",
  alternates: { canonical: "https://capturepilot.com/blog/micro-purchase-threshold" },
  openGraph: {
    title: "Micro-Purchase Threshold: The Easiest Way to Start Selling to the Government",
    description:
      "The federal micro-purchase threshold is now $15,000. No SAM.gov registration required for GPC purchases. Over 560K awards annually flow through this channel.",
    url: "https://capturepilot.com/blog/micro-purchase-threshold",
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
      name: "Micro-Purchase Threshold",
      item: "https://capturepilot.com/blog/micro-purchase-threshold",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Micro-Purchase Threshold: The Easiest Way to Start Selling to the Government",
  description:
    "The federal micro-purchase threshold increased to $15,000 on October 1, 2025. Learn how government purchase card transactions work, when SAM.gov registration is not required, and how to use micro-purchases as a stepping stone to larger federal contracts.",
  image: "https://capturepilot.com/og/micro-purchase-threshold.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-21",
  dateModified: "2026-05-21",
  mainEntityOfPage: "https://capturepilot.com/blog/micro-purchase-threshold",
  articleSection: "Government Contracting",
  keywords: [
    "micro purchase threshold",
    "government purchase card",
    "GPC micro purchase",
    "micro purchase SAM registration",
    "federal micro purchase threshold 2025",
    "small business government contracting",
    "FAR subpart 13.2",
    "simplified acquisition threshold",
  ],
  wordCount: 3600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the micro-purchase threshold in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of October 1, 2025, the federal micro-purchase threshold is $15,000 for most supplies and services, up from the prior $10,000 limit. Exceptions apply: construction purchases subject to Davis-Bacon Act requirements have a $2,000 MPT, services covered by Service Contract Labor Standards have a $2,500 MPT, and contingency operations have higher limits ($25,000 inside the U.S., $40,000 outside). The threshold increase was finalized by the FAR Council on August 27, 2025 (90 Federal Register 41872).",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to be registered in SAM.gov for micro-purchases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov registration is not required for micro-purchases paid via government purchase card (GPC). FAR Subpart 4.11 carves out GPC transactions at or below the micro-purchase threshold from the standard SAM registration requirement. However, SAM.gov registration is required for any contract above the micro-purchase threshold, and for non-GPC payment mechanisms. Businesses should register in SAM.gov as soon as possible, since it is required for the vast majority of federal contracting opportunities above $15,000.",
      },
    },
    {
      "@type": "Question",
      name: "How does the government purchase card (GPC) work for vendors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The government purchase card is a Visa or Mastercard issued to authorized federal employees for making small purchases. When an agency buys from you below the micro-purchase threshold using a GPC, you process it like any commercial credit card transaction. No formal contract is signed, no solicitation is issued, and payment typically settles within 2–5 business days through the card network. All GSA Schedule contractors are required to accept the GPC for purchases at or below the MPT.",
      },
    },
    {
      "@type": "Question",
      name: "How many federal micro-purchase awards are made each year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From FY2022 through FY2024, the federal government made an average of over 560,000 awards at or below the old $10,000 micro-purchase threshold per year, distributed across approximately 18,000 separate companies. Had the new $15,000 threshold applied during those years, roughly 50,000 additional awards would have qualified as micro-purchases. These figures were cited in the FAR Council's August 2025 final rule on threshold adjustments.",
      },
    },
    {
      "@type": "Question",
      name: "Can the government split purchases to stay under the micro-purchase threshold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Federal agencies are explicitly prohibited from splitting requirements to avoid competition thresholds. A $30,000 requirement cannot be broken into three $10,000 purchases to stay under the micro-purchase threshold. This practice is called 'splitting requirements' and violates the FAR. Legitimate micro-purchases are standalone, genuinely small requirements — not fragments of a larger acquisition that should have been competitively solicited.",
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
