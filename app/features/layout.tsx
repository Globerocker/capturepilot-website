import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Features — Smart Matching, AI Proposals & More",
  description: "Explore CapturePilot's 16 powerful features for finding and winning government contracts. Smart matching, AI proposal writer, market intelligence, and more.",
  keywords: "government contract features, federal contract tools, smart matching, AI proposal writer, market intelligence, capability statement builder, deal pipeline, GovCon software",
  alternates: { canonical: "https://capturepilot.com/features" },
  openGraph: {
    title: "All Features — Smart Matching, AI Proposals & More",
    description: "Explore CapturePilot's 16 powerful features for finding and winning government contracts. Smart matching, AI proposal writer, market intelligence, and more.",
    url: "https://capturepilot.com/features",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
