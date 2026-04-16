import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Walkthrough — See CapturePilot in Action",
  description: "Interactive animated walkthrough showing how CapturePilot finds and wins government contracts. 6 steps from website analysis to contract award.",
  alternates: { canonical: "https://www.capturepilot.com/walkthrough" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Walkthrough", item: "https://www.capturepilot.com/walkthrough" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "CapturePilot Product Walkthrough: From Website to Contract Award",
  description:
    "Interactive 6-step walkthrough showing exactly how CapturePilot takes your company from a URL to a won federal contract — no GovCon experience required.",
  totalTime: "PT5M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enter Your Website",
      text: "Type your company URL. Our crawler reads your website, identifies the services you offer, and extracts industry signals. No manual data entry, no long questionnaires — the entire profile is derived from content you've already written.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "We Find Your NAICS Codes",
      text: "Our engine maps your services to the NAICS taxonomy (over 1,000 federal industry codes) and surfaces 3–5 most relevant codes. Example matches include 561720 Janitorial Services, 541512 IT Support, 236220 Commercial Construction, and 561210 Facility Support.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "40,000+ Opportunities Scored",
      text: "CapturePilot ingests SAM.gov contract opportunities daily and scores every active opportunity against your profile using a 140-point algorithm: NAICS match (25%), PSC match (15%), set-aside match (20%), geography (15%), value fit (15%), deadline (10%). Results are classified HOT (≥0.70), WARM (0.50–0.70), or COLD (<0.50).",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "AI Drafts Your Proposal",
      text: "When you decide to bid, the AI Proposal Writer reads the solicitation, builds a compliance matrix mapping every 'shall' statement to your response, and generates draft sections for cover letter, technical approach, past performance, and management plan — all aligned to the evaluation criteria.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Track Your Pipeline",
      text: "Every opportunity flows into a Kanban pipeline with stages: Discovered, Researching, Preparing, Submitted, Awarded, Lost, No-Bid. Drag and drop to update stages, log activity, set deadlines, and keep your capture process organized.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Win Government Contracts",
      text: "Submit with confidence. Track outcomes. CapturePilot learns from your wins and losses to improve future match scoring and strategy recommendations, compounding your win rate over time.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does the full CapturePilot process take from signup to first bid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profile creation takes under 60 seconds from a website URL. First matched opportunities appear immediately (we run scoring on demand and nightly at 03:00 UTC). Your first AI-drafted proposal can be generated in 15 minutes from a solicitation PDF. Most customers have their capture process live within an hour of signing up.",
      },
    },
    {
      "@type": "Question",
      name: "What makes the CapturePilot scoring accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our 140-point scoring algorithm evaluates NAICS match, PSC match, set-aside eligibility, geographic fit, contract value fit, deadline urgency, notice type priority (Sources Sought get a +20 boost), past performance relevance, and incumbent risk. Every score is deterministic and rules-based — not a black-box AI guess — so you can see exactly why an opportunity rated HOT, WARM, or COLD.",
      },
    },
    {
      "@type": "Question",
      name: "Can the AI Proposal Writer handle complex multi-volume solicitations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The AI handles 5-volume proposals: Volume I Cover Letter & Executive Summary, Volume II Technical Approach, Volume III Past Performance, Volume IV Management Plan & Key Personnel, and Volume V Pricing & Cost Proposal. It extracts requirements from the SOW, builds a compliance matrix against Section L instructions and Section M evaluation criteria, and generates section drafts you refine and finalize.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to know NAICS codes before starting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Enter your website URL and CapturePilot identifies your NAICS codes automatically. Most companies have the wrong codes in their SAM profile — our engine often catches codes you've been missing (which means missed opportunities) and removes codes that don't match your actual capabilities (which produce noisy, irrelevant matches). You can always review and refine the code list inside your account.",
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
