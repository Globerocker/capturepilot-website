import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Set-Aside Programs: SDVOSB, WOSB, 8(a) & More",
  description: "Complete guide to federal set-aside programs. Eligibility, thresholds, certification process for 8(a), SDVOSB, WOSB, EDWOSB, HUBZone, and SDB.",
  keywords: "government set-aside programs, SDVOSB program, WOSB program, 8a program, HUBZone program, SDB set-aside, federal set-aside eligibility, small business set-aside",
  alternates: { canonical: "https://www.capturepilot.com/blog/set-aside-programs" },
  openGraph: {
    title: "Government Set-Aside Programs: SDVOSB, WOSB, 8(a) & More",
    description: "Complete guide to federal set-aside programs. Eligibility, thresholds, certification process for 8(a), SDVOSB, WOSB, EDWOSB, HUBZone, and SDB.",
    url: "https://www.capturepilot.com/blog/set-aside-programs",
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
      name: "Government Set-Aside Programs",
      item: "https://www.capturepilot.com/blog/set-aside-programs",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Set-Aside Programs: SDVOSB, WOSB, 8(a) & More",
  description:
    "Complete guide to federal set-aside programs. Eligibility, thresholds, certification process for 8(a), SDVOSB, VOSB, WOSB, EDWOSB, HUBZone, and SDB.",
  image: "https://www.capturepilot.com/og/set-aside-programs.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-05",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/set-aside-programs",
  articleSection: "Government Contracting",
  keywords: [
    "federal set-aside programs",
    "8(a) program",
    "SDVOSB",
    "VOSB",
    "WOSB",
    "EDWOSB",
    "HUBZone",
    "SDB",
    "sole source",
    "Rule of Two",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a federal set-aside contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A set-aside is a federal contract reserved for bidders in a specific socioeconomic category — only certified businesses in that category can compete, which dramatically reduces competition. The federal government has government-wide goals for set-aside spending: 23% to all small businesses, 5% to Women-Owned Small Businesses (WOSB), 3% to Service-Disabled Veteran-Owned Small Businesses (SDVOSB), 3% to HUBZone firms, and 5% to Small Disadvantaged Businesses (SDB). Set-asides are the single biggest structural advantage small businesses have in federal contracting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 8(a) Business Development Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 8(a) program is a 9-year SBA-administered program for socially and economically disadvantaged small businesses. It's widely considered the most powerful set-aside because it allows sole-source awards up to $4.5M for services and $7M for manufacturing — the contracting officer can award directly without competition. Eligibility requires 51%+ ownership by US citizens who are socially and economically disadvantaged (presumed for members of certain minority groups, provable for others), personal net worth under $850K (initial) / $6.5M (continuing), and two years of business operations (waiverable). A single sole-source 8(a) contract can transform a small business.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between VOSB and SDVOSB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both require 51%+ ownership and control by a US military veteran. SDVOSB additionally requires the owner to have a service-connected disability rating from the VA. SDVOSB has significantly stronger benefits: government-wide 3% contracting goal, sole-source awards up to $5M (services) / $7M (manufacturing), and the VA's mandatory 'Rule of Two' preference (if two SDVOSBs can perform, it must be set aside for SDVOSBs). VOSB benefits are largely VA-specific. If a veteran owner has any service-connected disability rating, they should pursue SDVOSB certification rather than plain VOSB. Both are certified through the SBA's VetCert system (formerly VA CVE).",
      },
    },
    {
      "@type": "Question",
      name: "What is WOSB certification and how does EDWOSB differ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WOSB (Women-Owned Small Business) requires 51%+ ownership and control by US women citizens. You must certify through SBA's WOSB Federal Contracting Program (via certify.SBA.gov or an SBA-approved third-party certifier) — self-certification is no longer accepted. WOSB contracts are only available in NAICS codes SBA has designated as underrepresented by women-owned firms. EDWOSB (Economically Disadvantaged WOSB) adds financial thresholds (owner personal net worth under $850K, three-year average AGI under $400K, assets under $6.5M) but unlocks additional NAICS codes. If you qualify for EDWOSB, always certify as EDWOSB — you get all WOSB benefits plus access to more NAICS.",
      },
    },
    {
      "@type": "Question",
      name: "What are HUBZone requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HUBZone (Historically Underutilized Business Zone) certification requires four things simultaneously: (1) the business must be a small business by SBA size standards, (2) 51%+ ownership by US citizens, (3) the principal office must be located in a designated HUBZone, and (4) at least 35% of employees must reside in any HUBZone. HUBZone boundaries change periodically based on census data — use the SBA's HUBZone Map to verify. Benefits include sole-source awards up to $4.5M (services) / $7M (manufacturing), the 3% government-wide goal, and a 10% price evaluation preference in full-and-open competitions. Many rural areas and certain urban zones qualify.",
      },
    },
    {
      "@type": "Question",
      name: "Can a business qualify for multiple set-aside programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — stacking certifications is a powerful strategy. A single business can be certified as, for example, 8(a) + SDVOSB + HUBZone simultaneously if it meets each program's separate eligibility rules. Each certification opens different set-aside opportunities and sole-source authorities. For a specific opportunity, you can only bid under one set-aside designation (the one specified by the contracting officer), but across your overall pipeline you expand addressable opportunities significantly. The catch: each certification has independent annual recertification, reporting, and ownership-control requirements, so stacking adds compliance overhead.",
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
