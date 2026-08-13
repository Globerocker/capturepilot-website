import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multiple Award Contracts: How to Get on MACs and Win Task Orders | CapturePilot",
  description:
    "56% of federal contract dollars flow through MAC vehicles. Learn how to get on GWACs, IDIQs, and GSA vehicles — and win task orders once you're in.",
  keywords:
    "multiple award contract government, MAC contract vehicle, IDIQ task orders, OASIS plus, Alliant 3, GWAC, GSA schedule, small business task order, on-ramp contract vehicle, federal contract vehicles 2026",
  alternates: {
    canonical: "https://capturepilot.com/blog/multiple-award-contracts-guide",
  },
  openGraph: {
    title: "Multiple Award Contracts: How to Get on MACs and Win Task Orders",
    description:
      "56% of federal contract dollars flow through MAC vehicles. Learn how to get on GWACs, IDIQs, and GSA vehicles — and win task orders once you're in.",
    url: "https://capturepilot.com/blog/multiple-award-contracts-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
