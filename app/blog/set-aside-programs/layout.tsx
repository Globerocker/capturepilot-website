import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Set-Aside Programs: SDVOSB, WOSB, 8(a) & More",
  description: "Complete guide to federal set-aside programs. Eligibility, thresholds, certification process for 8(a), SDVOSB, WOSB, EDWOSB, HUBZone, and SDB.",
  keywords: "government set-aside programs, SDVOSB program, WOSB program, 8a program, HUBZone program, SDB set-aside, federal set-aside eligibility, small business set-aside",
  alternates: { canonical: "https://capturepilot.com/blog/set-aside-programs" },
  openGraph: {
    title: "Government Set-Aside Programs: SDVOSB, WOSB, 8(a) & More",
    description: "Complete guide to federal set-aside programs. Eligibility, thresholds, certification process for 8(a), SDVOSB, WOSB, EDWOSB, HUBZone, and SDB.",
    url: "https://capturepilot.com/blog/set-aside-programs",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
