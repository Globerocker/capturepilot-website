import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Features — Smart Matching, AI Proposals & More",
  description: "Explore CapturePilot's 16 powerful features for finding and winning government contracts. Smart matching, AI proposal writer, market intelligence, and more.",
  keywords: "government contract features, federal contract tools, smart matching, AI proposal writer, market intelligence, capability statement builder, deal pipeline, GovCon software",
  alternates: { canonical: "https://www.capturepilot.com/features" },
  openGraph: {
    title: "All Features — Smart Matching, AI Proposals & More",
    description: "Explore CapturePilot's 16 powerful features for finding and winning government contracts. Smart matching, AI proposal writer, market intelligence, and more.",
    url: "https://www.capturepilot.com/features",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
