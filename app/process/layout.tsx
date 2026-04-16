import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Self-Service or Done-For-You",
  description: "Choose your path: use CapturePilot yourself ($199/mo) or let our veteran team handle everything. See our step-by-step process.",
  keywords: "how CapturePilot works, GovCon process, government contract help, done-for-you GovCon, self-service government contracts, CapturePilot onboarding",
  alternates: { canonical: "https://www.capturepilot.com/process" },
  openGraph: {
    title: "How It Works — Self-Service or Done-For-You",
    description: "Choose your path: use CapturePilot yourself ($199/mo) or let our veteran team handle everything. See our step-by-step process.",
    url: "https://www.capturepilot.com/process",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Process", item: "https://www.capturepilot.com/process" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Win Federal Government Contracts with CapturePilot",
  description:
    "Step-by-step process for using CapturePilot to find, qualify, bid on, and win federal government contracts — from account signup to contract award.",
  totalTime: "PT60M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  supply: [
    { "@type": "HowToSupply", name: "Company website URL" },
    { "@type": "HowToSupply", name: "SAM.gov registration (we help if not yet registered)" },
  ],
  tool: [
    { "@type": "HowToTool", name: "CapturePilot account (free trial)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign Up & Connect",
      text: "Create your account and enter your website URL. Our crawler auto-detects your NAICS codes, certifications, and capabilities. Your matching profile is built in under 60 seconds with zero manual data entry.",
      url: "https://www.capturepilot.com/process#step-1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review Your Matches",
      text: "Every morning, your dashboard shows freshly scored opportunities pulled from SAM.gov overnight. Each match is rated HOT, WARM, or COLD based on a 140-point scoring algorithm covering NAICS, PSC, set-aside, geography, contract value, and past performance.",
      url: "https://www.capturepilot.com/process#step-2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Analyze Opportunities",
      text: "Dive into any opportunity for AI-powered eligibility checks, competition analysis, incumbent research, and win probability scoring. See who won the last contract, how many competitors are likely bidding, and what the agency values most.",
      url: "https://www.capturepilot.com/process#step-3",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Draft Your Proposal",
      text: "The AI Proposal Writer generates a tailored first draft in 15 minutes — not 15 days. Paste the solicitation and get structured proposal sections aligned to evaluation criteria: capability statement, past performance narratives, technical approach outlines, and compliance matrix.",
      url: "https://www.capturepilot.com/process#step-4",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Build Your Pipeline",
      text: "Track every opportunity from discovery to award on a visual Kanban board with stages like Researching, Preparing, Submitted, and Awarded. Set reminders, move deals through stages, and never miss a deadline.",
      url: "https://www.capturepilot.com/process#step-5",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Win Contracts",
      text: "Submit with confidence, track results, and iterate. Our system learns from outcomes to improve future match scores and strategy recommendations. Analyze wins and losses to continuously refine your capture process.",
      url: "https://www.capturepilot.com/process#step-6",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does the CapturePilot onboarding process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-service onboarding takes under 60 seconds — enter your website URL and your profile is auto-generated via our crawler which identifies NAICS codes, capabilities, and services. For done-for-you consulting clients, we schedule a 30-minute discovery call and your profile is fully configured within 48 hours including SAM.gov verification, NAICS optimization, and certification setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch from self-service to consulting later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many of our consulting clients started on the self-service platform at $199/month and upgraded when they wanted hands-on support. Your data, matches, pipeline history, capability statements, and proposal drafts all carry over seamlessly. The consulting tier adds a dedicated capture manager, proposal writing support, and monthly strategy calls.",
      },
    },
    {
      "@type": "Question",
      name: "What if I've never done government contracting before?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The self-service platform is designed for first-time federal bidders. It walks you through SAM.gov registration, NAICS code selection, and set-aside certification. The Quick Checker tool instantly assesses your current readiness for free. If you want a guided experience, our consulting team specializes in helping first-time contractors land their first award in 6–12 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with SAM.gov registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Consulting clients receive full SAM.gov registration support including NAICS optimization, set-aside certification (SDVOSB, WOSB, HUBZone, 8(a)), and capabilities narrative writing. Self-service users get our Quick Checker tool to verify registration status instantly, plus step-by-step guides in the dashboard for completing registration or updating expired profiles.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the 30-day free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30 days of full Pro access with no credit card required and no feature restrictions: daily opportunity matching across 40,000+ SAM.gov listings, AI Proposal Writer, pipeline Kanban board, competition analysis, incumbent intelligence, market intelligence, capability statement builder, partner search across 1M+ SAM-registered companies, and email/alert notifications. Cancel anytime before day 31 at no charge.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
