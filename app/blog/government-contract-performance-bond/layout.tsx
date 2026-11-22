import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance & Payment Bonds for Government Contracts: Costs & Requirements (2026)",
  description:
    "Everything contractors need to know about performance and payment bonds on federal contracts: Miller Act thresholds, what bonds cost, and how to get bonded fast.",
  keywords:
    "government contract performance bond, payment bond federal contract, Miller Act requirements, surety bond cost government, SBA surety bond guarantee, performance bond small business, federal construction bond",
  alternates: {
    canonical: "https://capturepilot.com/blog/government-contract-performance-bond",
  },
  openGraph: {
    title: "Performance & Payment Bonds for Government Contracts: Costs & Requirements (2026)",
    description:
      "Everything contractors need to know about performance and payment bonds on federal contracts: Miller Act thresholds, what bonds cost, and how to get bonded fast.",
    url: "https://capturepilot.com/blog/government-contract-performance-bond",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
