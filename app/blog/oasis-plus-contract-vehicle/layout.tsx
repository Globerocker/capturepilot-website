import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OASIS+ Contract Vehicle: How Small Businesses Win GSA's $60B MAC | CapturePilot",
  description:
    "OASIS+ is GSA's $60B professional services MAC. Learn the 6 pools, 13 domains, Phase II on-ramp, and how small businesses win task orders.",
  keywords:
    "OASIS+ contract vehicle, OASIS plus government contract, GSA OASIS+ small business, OASIS+ domains, OASIS+ Phase II, GWAC professional services, GSA multiple award contract, OASIS+ task orders, OASIS+ on-ramp 2026",
  alternates: {
    canonical: "https://capturepilot.com/blog/oasis-plus-contract-vehicle",
  },
  openGraph: {
    title: "OASIS+ Contract Vehicle: How Small Businesses Win GSA's $60B MAC",
    description:
      "OASIS+ is GSA's $60B professional services MAC. Learn the 6 pools, 13 domains, Phase II on-ramp, and how small businesses win task orders.",
    url: "https://capturepilot.com/blog/oasis-plus-contract-vehicle",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
