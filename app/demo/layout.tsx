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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
