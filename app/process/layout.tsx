import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Self-Service or Done-For-You",
  description: "Choose your path: use CapturePilot yourself ($199/mo) or let our veteran team handle everything. See our step-by-step process.",
  keywords: "how CapturePilot works, GovCon process, government contract help, done-for-you GovCon, self-service government contracts, CapturePilot onboarding",
  alternates: { canonical: "https://capturepilot.com/process" },
  openGraph: {
    title: "How It Works — Self-Service or Done-For-You",
    description: "Choose your path: use CapturePilot yourself ($199/mo) or let our veteran team handle everything. See our step-by-step process.",
    url: "https://capturepilot.com/process",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
