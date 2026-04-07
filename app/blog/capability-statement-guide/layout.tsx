import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Capability Statement (Template + Guide) | CapturePilot",
  description: "Step-by-step guide to writing a government capability statement. What to include, design tips, common mistakes, and free AI builder.",
  keywords: "capability statement template, how to write capability statement, government capability statement, capability statement example, capability statement guide, one-page capability statement",
  alternates: { canonical: "https://capturepilot.com/blog/capability-statement-guide" },
  openGraph: {
    title: "How to Write a Capability Statement (Template + Guide) | CapturePilot",
    description: "Step-by-step guide to writing a government capability statement. What to include, design tips, common mistakes, and free AI builder.",
    url: "https://capturepilot.com/blog/capability-statement-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
