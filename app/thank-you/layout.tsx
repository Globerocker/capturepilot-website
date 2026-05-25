import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check your inbox — CapturePilot",
  description: "Your download is on the way. Check your email for the link.",
  // Don't let this page rank — it's a flow-state thank-you, not content.
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.capturepilot.com/thank-you" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
