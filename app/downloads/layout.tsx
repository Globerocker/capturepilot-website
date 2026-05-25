import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Downloads — Government Contracting Templates & Guides | CapturePilot",
  description:
    "Free PDFs, templates and field manuals for small businesses going after federal contracts. SAM.gov walkthroughs, bid/no-bid worksheets, capability statement templates and more.",
  alternates: { canonical: "https://www.capturepilot.com/downloads" },
  openGraph: {
    title: "Free Government Contracting Downloads — CapturePilot",
    description: "Field manuals, templates and worksheets for first-time federal bidders. All free.",
    url: "https://www.capturepilot.com/downloads",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
