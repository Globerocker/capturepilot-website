import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Free, Pro $199/mo, or Done-For-You Consulting",
  description: "CapturePilot pricing: Free Quick Checker, Pro at $199/mo (or $159/mo yearly) with 30-day trial, or Done-For-You consulting with aligned incentives. No hidden fees.",
  keywords: "CapturePilot pricing, government contract software pricing, GovCon tool cost, CapturePilot free trial, CapturePilot Pro plan, government contract consulting, B2G consulting",
  alternates: { canonical: "https://www.capturepilot.com/pricing" },
  openGraph: {
    title: "Pricing — Start Free, Scale When Ready",
    description: "CapturePilot pricing: Free Quick Checker, Pro at $199/mo with 30-day trial, or Custom consulting. No hidden fees.",
    url: "https://www.capturepilot.com/pricing",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.capturepilot.com/pricing" },
  ],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CapturePilot",
  description:
    "AI-powered federal contract matching, capability statement builder, and AI proposal writer for small businesses bidding on US government contracts.",
  brand: { "@type": "Brand", name: "CapturePilot" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "199",
    offerCount: "3",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: "Unlimited Quick Company Check, 5 opportunity matches preview, NAICS identification",
        url: "https://app.capturepilot.com/signup",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro Monthly",
        price: "199",
        priceCurrency: "USD",
        description: "Unlimited matching, AI proposals, capability statement, market intelligence. 30-day free trial.",
        url: "https://app.capturepilot.com/signup?plan=pro",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro Yearly",
        price: "1908",
        priceCurrency: "USD",
        description: "Pro plan billed annually — $159/month equivalent, 20% saving vs monthly.",
        url: "https://app.capturepilot.com/signup?plan=pro-yearly",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "12",
    bestRating: "5",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a free plan for CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Free plan includes unlimited Quick Company Checks, a preview of your top 5 matched federal opportunities, NAICS identification, and SAM.gov registration insights — forever, no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "How much does CapturePilot Pro cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pro is $199/month billed monthly, or $159/month ($1,908/year) billed annually — a 20% saving. Pro unlocks unlimited matching against 40,000+ federal opportunities, AI-generated proposals, the capability statement builder, and market intelligence.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every Pro subscription starts with a 30-day free trial. Cancel anytime before day 31 and pay nothing — no credit card is charged until the trial ends.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my Pro subscription at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, cancel with one click from your billing settings. You keep access until the end of your paid period and are not charged again.",
      },
    },
    {
      "@type": "Question",
      name: "Who is CapturePilot for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any US small business bidding on federal contracts — veteran-owned (SDVOSB), women-owned (WOSB), 8(a), HUBZone, or standard small business. The matching engine scores opportunities based on your SAM.gov profile, NAICS codes, and set-aside eligibility.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer done-for-you consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our consulting tier includes a dedicated capture manager, proposal writing, and bid strategy support. Pricing is custom and incentive-aligned — book an intro call to discuss scope and pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How is CapturePilot different from SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov is the free federal data source. CapturePilot pulls the same data but adds AI matching, readiness scoring, capability statements, proposal writing, and a pipeline tracker — so you spend time on opportunities you can actually win instead of searching raw SAM listings.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
