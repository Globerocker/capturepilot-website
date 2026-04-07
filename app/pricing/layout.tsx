import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Start Free, Scale When Ready | CapturePilot",
  description: "CapturePilot pricing: Free Quick Checker, Pro at $199/mo with 30-day trial, or Custom consulting. No hidden fees.",
  keywords: "CapturePilot pricing, government contract software pricing, GovCon tool cost, CapturePilot free trial, CapturePilot Pro plan, government contract platform price",
  alternates: { canonical: "https://capturepilot.com/pricing" },
  openGraph: {
    title: "Pricing — Start Free, Scale When Ready | CapturePilot",
    description: "CapturePilot pricing: Free Quick Checker, Pro at $199/mo with 30-day trial, or Custom consulting. No hidden fees.",
    url: "https://capturepilot.com/pricing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
