import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Bloomberg Government (BGOV)",
  description: "Enterprise intelligence without the enterprise price. Compare CapturePilot vs BGOV for small business government contract intelligence.",
  keywords: "CapturePilot vs BGOV, Bloomberg Government alternative, BGOV comparison, BGOV pricing, government contract intelligence, BGOV competitor, GovCon analytics",
  alternates: { canonical: "https://www.capturepilot.com/vs/bgov" },
  openGraph: {
    title: "CapturePilot vs Bloomberg Government (BGOV)",
    description: "Enterprise intelligence without the enterprise price. Compare CapturePilot vs BGOV for small business government contract intelligence.",
    url: "https://www.capturepilot.com/vs/bgov",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
