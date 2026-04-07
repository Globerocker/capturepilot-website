import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement Builder — AI + Voice Powered",
  description: "Record yourself talking about your business. AI generates a professional capability statement with your brand colors. Ready in minutes.",
  keywords: "capability statement builder, AI capability statement, government capability statement, voice capability statement, federal capability statement template, GovCon capability statement",
  alternates: { canonical: "https://capturepilot.com/features/capability-statement" },
  openGraph: {
    title: "Capability Statement Builder — AI + Voice Powered",
    description: "Record yourself talking about your business. AI generates a professional capability statement with your brand colors. Ready in minutes.",
    url: "https://capturepilot.com/features/capability-statement",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
