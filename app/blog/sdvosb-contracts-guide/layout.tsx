import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDVOSB Contracts: Complete Guide for Veteran-Owned Businesses (2026) | CapturePilot",
  description:
    "Everything SDVOSB firms need to win federal contracts: $28.6B in awards, VA Veterans First priority, sole source thresholds, VetCert certification steps, and strategy.",
  keywords:
    "SDVOSB contracts, service disabled veteran owned small business, SDVOSB certification, VetCert, VA Veterans First, SDVOSB sole source, veteran owned small business federal contracts, SDVOSB set aside, VOSB contracts",
  alternates: { canonical: "https://www.capturepilot.com/blog/sdvosb-contracts-guide" },
  openGraph: {
    title: "SDVOSB Contracts: Complete Guide for Veteran-Owned Businesses (2026) | CapturePilot",
    description:
      "Everything SDVOSB firms need to win federal contracts: $28.6B in awards, VA Veterans First priority, sole source thresholds, VetCert certification steps, and strategy.",
    url: "https://www.capturepilot.com/blog/sdvosb-contracts-guide",
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
      name: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses",
      item: "https://www.capturepilot.com/blog/sdvosb-contracts-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SDVOSB Contracts: A Complete Guide for Veteran-Owned Businesses",
  description:
    "Everything SDVOSB firms need to win federal contracts: $28.6B in awards, VA Veterans First priority, sole source thresholds, VetCert certification steps, and winning strategy.",
  image: "https://www.capturepilot.com/og/sdvosb-contracts-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  mainEntityOfPage: "https://www.capturepilot.com/blog/sdvosb-contracts-guide",
  articleSection: "Set-Asides for Veterans",
  keywords: [
    "SDVOSB contracts",
    "service disabled veteran owned small business",
    "VetCert certification",
    "VA Veterans First",
    "SDVOSB sole source",
    "veteran set-aside",
    "VOSB contracts",
    "federal contracting",
  ],
  wordCount: 7200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an SDVOSB and how does it differ from a VOSB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SDVOSB (Service-Disabled Veteran-Owned Small Business) is a small business at least 51% owned and controlled by one or more veterans with a VA-documented service-connected disability rating. A VOSB (Veteran-Owned Small Business) requires veteran ownership but not a service-connected disability. At the VA, SDVOSBs get priority over VOSBs under the Veterans First Contracting Program — contracting officers must seek SDVOSB vendors before considering any VOSB or other set-aside type. If you qualify for SDVOSB, that is always the stronger certification to pursue.",
      },
    },
    {
      "@type": "Question",
      name: "What is the SDVOSB sole source threshold in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR 19.1406, the current SDVOSB sole source thresholds are $4 million for contracts under non-manufacturing NAICS codes (services, professional services, IT, etc.) and $7 million for contracts under manufacturing NAICS codes. Below these thresholds, if a contracting officer does not reasonably expect offers from two or more SDVOSB firms, they can award the contract to an SDVOSB directly without competitive bidding.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be certified to claim SDVOSB status on a federal proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As of August 5, 2024, self-certification for SDVOSB status was eliminated by SBA rule. All SDVOSB and VOSB firms must be certified through the SBA's VetCert program at veterans.certify.sba.gov before claiming these set-aside designations on federal proposals or contract bids. Claiming SDVOSB status without valid VetCert certification can constitute fraud and expose your firm to False Claims Act liability.",
      },
    },
    {
      "@type": "Question",
      name: "Does a 0% VA disability rating qualify for SDVOSB certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any VA service-connected disability rating qualifies for SDVOSB eligibility — including 0%. The SBA and FAR require only that the VA has established a service connection, not that the disability meets a minimum severity threshold. Many veterans with 0% ratings are eligible for SDVOSB certification and don't realize it.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SBA VetCert certification take in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of late 2025, the SBA cleared its VetCert backlog and reduced processing times to an average of 12 days. The application is free and is submitted through the SBA's VetCert portal at veterans.certify.sba.gov. Once approved, certification is valid for 3 years and must be renewed before expiration. Firms can begin applying for recertification up to 90 days before their certification expires.",
      },
    },
    {
      "@type": "Question",
      name: "What is the VA Veterans First Contracting Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The VA Veterans First Contracting Program (VAAR Subpart 819.70) requires VA contracting officers to prioritize SDVOSB firms above all other set-aside types for every contract action. The mandatory order of priority is: SDVOSB first, VOSB second, then other small business programs (8(a), HUBZone, WOSB), and finally full-and-open competition. VA contracting officers must determine that the current tier cannot satisfy the requirement before moving to the next. In FY2024, the VA directed 23.63% of its prime contracting dollars to SDVOSBs — versus 5.14% government-wide.",
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
