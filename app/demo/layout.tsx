import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — See CapturePilot in Action",
  description: "Schedule a free 30-minute demo. See live matching, AI proposals, and market intelligence. No commitment required.",
  keywords: "CapturePilot demo, book a demo, GovCon software demo, government contract tool demo, free demo, CapturePilot trial",
  alternates: { canonical: "https://www.capturepilot.com/demo" },
  openGraph: {
    title: "Book a Demo — See CapturePilot in Action",
    description: "Schedule a free 30-minute demo. See live matching, AI proposals, and market intelligence. No commitment required.",
    url: "https://www.capturepilot.com/demo",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Demo", item: "https://www.capturepilot.com/demo" },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Book a CapturePilot Demo",
  url: "https://www.capturepilot.com/demo",
  description:
    "Schedule a free 30-minute live demo of CapturePilot. A veteran-led team walks through live contract matching, the AI Proposal Writer, and market intelligence using data specific to your business. No slideshow, no sales pitch.",
  potentialAction: {
    "@type": "ReserveAction",
    target: "https://meetings-na2.hubspot.com/americurial/intro-call",
    result: {
      "@type": "Reservation",
      name: "CapturePilot Product Demo",
    },
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    name: "What you'll see in the demo",
    description:
      "15 min live contract matching from SAM.gov, 5 min AI proposal walkthrough on a real solicitation, 5 min market intelligence on your target agencies, 5 min Q&A with no topics off-limits.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long is the CapturePilot demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Roughly 30 minutes total. We spend 15 minutes on live contract matching (entering your NAICS codes and pulling real opportunities from SAM.gov in real time), 5 minutes on the AI Proposal Writer (watching it read a solicitation and generate sections), 5 minutes on market intelligence (competitor and incumbent data for your target agencies), and 5 minutes on Q&A. It's a working session, not a slideshow.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to prepare anything for the demo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just know your NAICS codes and the types of contracts you're targeting. If you're not sure, we'll identify them live during the call using the Quick Checker. Bring your BD lead and proposal writer if you have them — the more people in the room, the sharper the questions and the better the demo.",
      },
    },
    {
      "@type": "Question",
      name: "Is the demo a sales pitch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We show you real opportunities matched to your business using live SAM.gov data, walk through the tools with your context, and answer any question openly — pricing, integrations, migration from GovWin/BGOV, consulting services. If CapturePilot isn't a fit for your stage, we'll tell you honestly and point you to free resources. No pressure, no follow-up sales calls.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a demo for my consulting agency or multiple clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you manage multiple clients, we'll show you the consulting agency platform — white-label client portals, admin CRM dashboard, automated matching across your book, and multi-client pipeline management. Just mention 'agency demo' when booking so we bring the right examples. Agency pricing typically ranges $500–$2,000/month depending on client count.",
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
