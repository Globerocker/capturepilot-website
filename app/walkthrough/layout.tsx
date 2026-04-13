import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Walkthrough — See CapturePilot in Action",
  description: "Interactive animated walkthrough showing how CapturePilot finds and wins government contracts. 6 steps from website analysis to contract award.",
  alternates: { canonical: "https://www.capturepilot.com/walkthrough" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
