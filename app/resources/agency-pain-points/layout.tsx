import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agency Pain Points: How to Pick Target Agencies That Actually Buy",
    description: "A strategic framework for small businesses choosing which federal agencies to target. Match your capabilities to what agencies need — year-end urgency, small-business quotas, legacy modernization, and more.",
    keywords: "federal agency targeting, small business federal contracting, 8(a) agency selection, SBLO outreach, year-end federal spending, federal agency pain points, government contracting strategy",
    alternates: { canonical: "https://www.capturepilot.com/resources/agency-pain-points" },
    openGraph: {
        title: "Agency Pain Points: How to Pick Target Agencies That Actually Buy",
        description: "Stop bidding on random opportunities. Learn the 8 agency pain points that create buying urgency, and match your strengths to the agencies most likely to say yes.",
        url: "https://www.capturepilot.com/resources/agency-pain-points",
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.capturepilot.com/resources" },
        { "@type": "ListItem", position: 3, name: "Agency Pain Points", item: "https://www.capturepilot.com/resources/agency-pain-points" },
    ],
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Agency Pain Points: How to Pick Target Agencies That Actually Buy",
    description:
        "Strategic framework for small businesses choosing target federal agencies. Covers 8 pain-point categories — from year-end spending urgency to legacy modernization — and how to score your business profile against each.",
    author: { "@type": "Organization", name: "CapturePilot" },
    publisher: {
        "@type": "Organization",
        name: "CapturePilot",
        logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
    },
    datePublished: "2026-04-17",
    dateModified: "2026-04-17",
    mainEntityOfPage: "https://www.capturepilot.com/resources/agency-pain-points",
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Which federal agencies are easiest for a new small business to win with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Agencies with strong, well-staffed small-business programs — DHS, DOT, and tier-2 prime contractor subcontracting programs — are usually the most accessible entry points. They have dedicated SBLO (Small Business Liaison Officer) contacts, published subcontracting goals, and more patience with first-time bidders than agencies that are used to seeing the same handful of incumbents every year.",
            },
        },
        {
            "@type": "Question",
            name: "What is the biggest mistake small businesses make when choosing agencies to target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Treating every federal opportunity as equally worth pursuing. Agencies have predictable pain points — Q4 year-end spending urgency, small-business quotas, legacy IT modernization, base facility maintenance backlogs. If your capabilities match a pain point, you're a solution provider. If they don't, you're just another no-differentiator bidder competing on price. The highest win rates come from picking 3–5 target agencies and building relationships there, not spraying bids across every open RFP.",
            },
        },
        {
            "@type": "Question",
            name: "How do I find the right agency for my NAICS codes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Start with USASpending.gov data for your primary NAICS over the last 3–5 years. Rank the top-10 buying agencies by total obligated dollars and by contract count. The dollar leaders tell you where the big wins live; the count leaders tell you where recompetes are frequent (better for cold entry). Then overlay your certifications and geography — if you're a HUBZone firm, DLA and Defense Logistics run active HUBZone set-aside programs. CapturePilot runs this same analysis automatically for every user profile.",
            },
        },
        {
            "@type": "Question",
            name: "What is a Small Business Liaison Officer (SBLO) and why does it matter?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every large federal prime contractor (Lockheed, Raytheon, BAE, General Dynamics, etc.) has a Small Business Liaison Officer whose job is to source qualified small-business subcontractors. Primes are contractually required to hit small-business subcontracting goals — typically 23% or higher — and they miss those goals routinely. A single warm-intro email referencing a specific program need and your certifications will out-perform 50 generic capability statements. SBLO email response rates run 3–4× higher than cold CO outreach.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to win a first federal contract using this approach?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Small businesses that pick 3–5 target agencies and run structured SBLO outreach typically land their first subcontract within 3–6 months and their first prime award within 6–12 months. The shotgun approach — bidding randomly on any open RFP that matches your NAICS — averages 12–18 months to first award and a win rate under 5%. Targeted outreach with pain-point framing runs 30–45% on qualified proposals.",
            },
        },
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            {children}
        </>
    );
}
