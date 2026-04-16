import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracts for Veteran-Owned Businesses (SDVOSB)",
  description: "Find SDVOSB and VOSB set-aside contracts matched to your veteran-owned business. 2,000+ opportunities waiting. AI-powered matching and proposals.",
  keywords: "SDVOSB contracts, veteran-owned business contracts, VOSB set-aside, veteran government contracts, service-disabled veteran contracts, VA contracts, military veteran business",
  alternates: { canonical: "https://www.capturepilot.com/for/veterans" },
  openGraph: {
    title: "Government Contracts for Veteran-Owned Businesses (SDVOSB)",
    description: "Find SDVOSB and VOSB set-aside contracts matched to your veteran-owned business. 2,000+ opportunities waiting. AI-powered matching and proposals.",
    url: "https://www.capturepilot.com/for/veterans",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "For", item: "https://www.capturepilot.com/for" },
    { "@type": "ListItem", position: 3, name: "Veterans", item: "https://www.capturepilot.com/for/veterans" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Government Contracts for Veteran-Owned Businesses",
  description:
    "Federal contract matching for SDVOSB and VOSB businesses. CapturePilot flags every veteran set-aside opportunity across 892 industry codes, surfaces SDVOSB sole-source awards up to $4.5M, and delivers AI-powered proposal drafts for verified veteran-owned small businesses.",
  url: "https://www.capturepilot.com/for/veterans",
  audience: {
    "@type": "Audience",
    audienceType: "Veteran-Owned Small Business (SDVOSB/VOSB)",
  },
  about: {
    "@type": "Thing",
    name: "SDVOSB and VOSB federal set-aside contracts",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many federal contracts are reserved for veteran-owned businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government has a 3% annual goal for SDVOSB (Service-Disabled Veteran-Owned Small Business) awards. CapturePilot currently tracks 2,276+ active SDVOSB and VOSB set-aside opportunities across 892 industry codes. SDVOSB firms can receive sole-source awards up to $4.5 million with no competition. The VA has its own 'Vets First' program that gives verified VOSBs priority on VA-specific contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between SDVOSB and VOSB certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VOSB (Veteran-Owned Small Business) requires at least 51% ownership and day-to-day control by one or more veterans. SDVOSB adds a service-connected disability rating for at least one of those owners. SDVOSBs qualify for government-wide set-asides and sole-source awards up to $4.5M; VOSBs are primarily eligible for VA-specific contracts under the 'Vets First' preference. Both certifications must be verified via SBA VetCert.",
      },
    },
    {
      "@type": "Question",
      name: "Can I stack SDVOSB with other set-asides like 8(a) or HUBZone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — stacking certifications compounds your advantage. A firm that's SDVOSB + 8(a) + HUBZone gets flagged on sole-source opportunities across all three categories, with sole-source limits up to $4.5M (goods) or $7M (manufacturing). CapturePilot lets you register every certification you hold so the matching engine surfaces every eligible opportunity, not just the obvious ones.",
      },
    },
    {
      "@type": "Question",
      name: "How early does CapturePilot find veteran set-aside opportunities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We surface Sources Sought and RFI notices 6–18 months before the actual solicitation drops. This gives SDVOSBs time to shape requirements, build teaming partnerships, and develop past performance narratives before competitors even know the contract exists. Our scoring engine prioritizes Sources Sought with a +20 point boost in the 140-point scoring model because early engagement is the highest-leverage win factor.",
      },
    },
    {
      "@type": "Question",
      name: "Does CapturePilot help with VA-specific contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VA contracts are a primary target for VOSBs under the Vets First Contracting Program. We ingest VA opportunities daily alongside DoD, GSA, and civilian agencies, and flag VOSB set-asides separately from general veteran preferences. You'll see VA-specific NAICS (like 541611 management consulting, 339112 surgical instruments, and 621 healthcare services) matched to your certifications and past performance.",
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
