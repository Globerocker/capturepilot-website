import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Federal Contracting Action Plan: 5 Phases From Setup to Award | CapturePilot",
    description: "A complete 5-phase action plan for small businesses entering federal contracting: Setup, Business Development, Bidding, Business Enhancement, and Contract Management — with the repeat cadence that matters for each.",
    keywords: "federal contracting action plan, government contracting roadmap, SAM.gov registration steps, 8(a) certification path, PIEE WAWF, small business federal roadmap, GovCon plan, APEX Accelerator, mentor-protege program",
    alternates: { canonical: "https://www.capturepilot.com/blog/federal-contracting-action-plan" },
    openGraph: {
        title: "The Federal Contracting Action Plan: 5 Phases From Setup to Award",
        description: "The 5-phase roadmap that gets a small business from zero to first federal award — and keeps delivering once you're in.",
        url: "https://www.capturepilot.com/blog/federal-contracting-action-plan",
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.capturepilot.com/blog" },
        { "@type": "ListItem", position: 3, name: "The Federal Contracting Action Plan", item: "https://www.capturepilot.com/blog/federal-contracting-action-plan" },
    ],
};

const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Federal Contracting Action Plan: 5 Phases From Setup to Award",
    description: "The canonical 5-phase roadmap for small businesses entering federal contracting — covering one-time setup, repeating business development, bidding, business enhancement, and contract management.",
    totalTime: "P180D",
    step: [
        { "@type": "HowToStep", position: 1, name: "Phase 1 — Setup (one-time)", text: "Choose a business entity, identify your NAICS codes, register on SAM.gov, get on local and state procurement portals, meet your local APEX Accelerator (formerly PTAC), and build a real capability statement." },
        { "@type": "HowToStep", position: 2, name: "Phase 2 — Business Development (ongoing)", text: "Identify your top 25 target buyers and your top 25 prime suppliers, book meetings with them, attend industry days and site visits, and monitor contract awards for subcontracting leads." },
        { "@type": "HowToStep", position: 3, name: "Phase 3 — Bidding (ongoing)", text: "Review immediate bid opportunities, assemble the right team, establish vendor and supplier credit, respond cleanly to RFPs/RFQs/RFIs and task orders, and evaluate every bid outcome." },
        { "@type": "HowToStep", position: 4, name: "Phase 4 — Business Enhancement (mostly one-time)", text: "Apply for small-business certifications, pursue 8(a), get into the Mentor-Protégé Program, build self-performance capability as a differentiator, and speak at industry events to raise profile." },
        { "@type": "HowToStep", position: 5, name: "Phase 5 — Contract Management (ongoing)", text: "Register in PIEE and WAWF for DoD invoicing, manage subcontractor compliance, stay current on project compliance, and communicate proactively with the contracting officer." },
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How long does the Phase 1 setup really take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If your paperwork is in order, SAM.gov registration runs 3–10 business days for the initial activation plus up to several weeks if IRS or CAGE verification flags anything. Realistically, plan for 2–4 weeks end-to-end including NAICS research, APEX outreach, and capability statement v1. Budget a full week for capability statement alone — the first draft is always weak and gets rebuilt after a few agency meetings.",
            },
        },
        {
            "@type": "Question",
            name: "What's the difference between a one-time phase and an ongoing phase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Phases 1 and 4 (Setup and Business Enhancement) are mostly one-time — you register once, certify once, join mentor-protégé once. Phases 2, 3, and 5 (Business Development, Bidding, Contract Management) repeat on every opportunity, every proposal, and every contract. New small businesses fail when they treat BD and bidding as one-time projects rather than the quarterly cadence they actually are.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to work with an APEX Accelerator?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes if it's free to you and you're new. APEX Accelerators (formerly PTACs) are federally funded organizations in every state that provide free, one-on-one counseling to small businesses pursuing government contracts. They help with SAM registration, NAICS selection, bid/no-bid decisions, and capability statement reviews. The return on 2–3 hours of your time is significant, especially for your first 6 months.",
            },
        },
        {
            "@type": "Question",
            name: "What is PIEE and why does it appear in Phase 5?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "PIEE (Procurement Integrated Enterprise Environment) is the DoD's consolidated portal for contract administration — it includes WAWF (Wide Area Workflow, used for invoicing and receiving reports), EDA, MyInvoice, and other modules. If you win a DoD contract, you invoice through PIEE/WAWF — and the registration has its own multi-role approval process. Starting the registration after award delays your first payment by weeks, so experienced contractors register during Phase 5 kickoff.",
            },
        },
        {
            "@type": "Question",
            name: "When should I pursue the 8(a) certification vs. other set-asides?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8(a) is the highest-leverage certification for socially and economically disadvantaged small businesses because it unlocks sole-source awards up to $4.5M ($7M for manufacturing) with zero competition. Pursue it after you have 2+ years in business, clean financials, and at least one past-performance reference — earlier applications routinely get returned. HUBZone stacks well with 8(a) and drives additional preference. WOSB/EDWOSB and SDVOSB have their own sole-source thresholds and should be pursued in parallel if you qualify.",
            },
        },
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            {children}
        </>
    );
}
