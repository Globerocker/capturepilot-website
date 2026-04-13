import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot for GovCon Consulting Agencies",
  description: "White-label government contract intelligence for consulting agencies. Manage multiple clients, automate matching, and scale your capture practice.",
  keywords: "GovCon consulting tools, government contract consulting, white-label GovCon, capture management agency, consulting agency federal contracts, multi-client GovCon platform",
  alternates: { canonical: "https://www.capturepilot.com/for/agencies" },
  openGraph: {
    title: "CapturePilot for GovCon Consulting Agencies",
    description: "White-label government contract intelligence for consulting agencies. Manage multiple clients, automate matching, and scale your capture practice.",
    url: "https://www.capturepilot.com/for/agencies",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
