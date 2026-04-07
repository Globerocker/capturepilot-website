import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs HigherGov — Federal Depth vs Broad Coverage",
  description: "Compare CapturePilot vs HigherGov. Deep federal specialization with AI tools beats broad, shallow coverage.",
  keywords: "CapturePilot vs HigherGov, HigherGov alternative, HigherGov comparison, federal contract tools, HigherGov competitor, government contract platform comparison",
  alternates: { canonical: "https://capturepilot.com/vs/highergov" },
  openGraph: {
    title: "CapturePilot vs HigherGov — Federal Depth vs Broad Coverage",
    description: "Compare CapturePilot vs HigherGov. Deep federal specialization with AI tools beats broad, shallow coverage.",
    url: "https://capturepilot.com/vs/highergov",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
