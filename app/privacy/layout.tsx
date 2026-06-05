import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CapturePilot",
  description: "What data CapturePilot collects, how we use it, who we share it with, and how to get it deleted. Plain English. GDPR and CCPA compliant.",
  alternates: { canonical: "https://www.capturepilot.com/privacy" },
  openGraph: {
    title: "Privacy Policy — CapturePilot",
    description: "What data CapturePilot collects, how we use it, who we share it with, and how to get it deleted.",
    url: "https://www.capturepilot.com/privacy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
