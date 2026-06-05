import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CapturePilot",
  description:
    "The terms that govern your use of CapturePilot. Plain-language rules for accounts, subscriptions, one-time purchases, refunds, acceptable use, and liability.",
  keywords:
    "CapturePilot terms of service, ToS, subscription terms, refund policy, government contracting software terms",
  alternates: { canonical: "https://www.capturepilot.com/terms" },
  openGraph: {
    title: "Terms of Service — CapturePilot",
    description:
      "The terms that govern your use of CapturePilot. Plain-language rules for accounts, subscriptions, one-time purchases, refunds, acceptable use, and liability.",
    url: "https://www.capturepilot.com/terms",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://www.capturepilot.com/terms" },
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
