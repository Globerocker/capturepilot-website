import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracting Events Calendar FY2026 (Free PDF)",
  description:
    "Every federal industry day, SBA conference, and agency expo for FY2026 — date, location, who attends, what to bring. Free PDF for small business contractors.",
  keywords:
    "government contracting events, govcon events, federal contracting conferences, govcon week 2026, small business contracting events, federal industry days calendar, federal industry days 2026",
  alternates: {
    canonical:
      "https://www.capturepilot.com/resources/federal-events-calendar-2026",
  },
  openGraph: {
    title: "Government Contracting Events Calendar FY2026 (Free PDF)",
    description:
      "Every federal industry day, SBA conference, and agency expo for FY2026 — date, location, who attends, what to bring. Free PDF for small business contractors.",
    url: "https://www.capturepilot.com/resources/federal-events-calendar-2026",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
