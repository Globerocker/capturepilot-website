import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs GovWin — Better Alternative for Small Business",
  description: "Compare CapturePilot vs GovWin (Deltek). AI proposal writer, smart matching, and capability statement builder at a fraction of the cost. Built for small businesses, not enterprises.",
  keywords: "CapturePilot vs GovWin, GovWin alternative, Deltek GovWin comparison, GovWin pricing, GovCon tools for small business, GovWin competitor",
  alternates: { canonical: "https://www.capturepilot.com/vs/govwin" },
  openGraph: {
    title: "CapturePilot vs GovWin — Better Alternative for Small Business",
    description: "Compare CapturePilot vs GovWin (Deltek). AI proposal writer, smart matching, and capability statement builder at a fraction of the cost. Built for small businesses, not enterprises.",
    url: "https://www.capturepilot.com/vs/govwin",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
