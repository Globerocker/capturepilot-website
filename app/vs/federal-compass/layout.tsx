import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Federal Compass — Analytics + Action",
  description: "Federal Compass shows data. CapturePilot helps you act on it. AI proposals, matching, and capture tools at SMB pricing.",
  keywords: "CapturePilot vs Federal Compass, Federal Compass alternative, Federal Compass comparison, government contract analytics, Federal Compass competitor, GovCon analytics tools",
  alternates: { canonical: "https://www.capturepilot.com/vs/federal-compass" },
  openGraph: {
    title: "CapturePilot vs Federal Compass — Analytics + Action",
    description: "Federal Compass shows data. CapturePilot helps you act on it. AI proposals, matching, and capture tools at SMB pricing.",
    url: "https://www.capturepilot.com/vs/federal-compass",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
