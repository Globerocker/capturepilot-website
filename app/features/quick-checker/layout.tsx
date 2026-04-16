import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Government Contract Eligibility Check",
  description: "Enter your website and get instant NAICS codes, SAM.gov status, set-aside eligibility, and matching opportunities. Free, no account required.",
  keywords: "government contract eligibility, free NAICS lookup, SAM.gov status check, set-aside eligibility, government contract checker, small business eligibility, GovCon readiness",
  alternates: { canonical: "https://www.capturepilot.com/features/quick-checker" },
  openGraph: {
    title: "Free Government Contract Eligibility Check",
    description: "Enter your website and get instant NAICS codes, SAM.gov status, set-aside eligibility, and matching opportunities. Free, no account required.",
    url: "https://www.capturepilot.com/features/quick-checker",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
    { "@type": "ListItem", position: 3, name: "Quick Company Checker", item: "https://www.capturepilot.com/features/quick-checker" },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot Quick Company Checker",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Free, no-login-required government contract readiness checker. Enter any company website or UEI and get instant SAM.gov registration status, NAICS codes, set-aside eligibility, certifications, and a preview of matching federal opportunities.",
  featureList: [
    "Instant NAICS code identification from website crawl",
    "SAM.gov registration status lookup by UEI or legal name",
    "Set-aside eligibility (SDVOSB, WOSB, 8(a), HUBZone, Small Business)",
    "Certification and small-business status verification",
    "Preview of top 5 matched federal opportunities in your NAICS",
    "Free forever — no account, no credit card, no signup required",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    url: "https://app.capturepilot.com/check",
  },
  brand: { "@type": "Brand", name: "CapturePilot" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the Quick Company Checker really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, completely free and forever. No account required, no credit card, no email signup. Just enter a company website URL or SAM.gov UEI and you'll get instant NAICS identification, SAM.gov registration status, certifications, set-aside eligibility, and a preview of your top 5 matched federal opportunities. Unlimited runs — check your own company, a competitor, or a prospective teaming partner as often as you want.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Quick Checker actually find?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Six things: (1) your NAICS codes identified from your website content, (2) your SAM.gov registration status and expiration date if registered, (3) your active certifications including 8(a), SDVOSB, WOSB, HUBZone, (4) your small-business size standard by NAICS, (5) a readiness score indicating how prepared you are to bid on federal contracts, and (6) a preview of the top 5 federal opportunities matched to your profile right now.",
      },
    },
    {
      "@type": "Question",
      name: "What if my company isn't registered on SAM.gov yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Quick Checker still works — it crawls your website content to identify likely NAICS codes, suggests which certifications you might qualify for (veteran-owned, woman-owned, 8(a), HUBZone), and shows matching opportunities you could pursue once registered. It also flags the exact next steps — SAM.gov registration, DUNS/UEI acquisition, capabilities statement — so you have a concrete roadmap to get GovCon-ready.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run the Quick Checker on competitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enter any company's website or UEI and you'll see their SAM.gov status, NAICS codes, certifications, and size standard. This is useful for competitive intelligence — understand who's actually eligible to bid against you on a set-aside contract, identify potential teaming partners, or pre-qualify subcontractors. For deeper competitive data — win rates, past awards, incumbent tracking — upgrade to Pro's full Market Intelligence module.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Quick Checker different from searching SAM.gov directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov Entity Search requires you to know the exact legal name or UEI — and results are a wall of raw data with no interpretation. The Quick Checker accepts any website URL, crawls the site to identify NAICS codes from actual content, cross-references SAM.gov entity data, and layers on set-aside eligibility and a preview of matching opportunities — all in one view, in under 10 seconds. Think of it as SAM.gov with a friendly interface and AI on top.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I see my Quick Checker results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll see a preview of your top 5 matched federal opportunities scored against your profile. To see the full list of 40,000+ opportunities, access AI proposal writing, build a branded capability statement, or manage a pipeline, start a 30-day free trial of CapturePilot Pro at $199/month — no credit card required until the trial ends. The Quick Checker results also flag any gaps (missing SAM.gov registration, expired certifications, NAICS gaps) so you have a prioritized fix-list.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
