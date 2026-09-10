import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contract Vehicles: GSA MAS, GWACs, MACs, and OASIS+ Explained | CapturePilot",
  description:
    "$72B flows through contract vehicles annually. Learn how GSA MAS, GWACs, Alliant 3, Polaris, and OASIS+ work — and which small businesses should target them.",
  keywords:
    "government contract vehicles, GWAC, MAC contract, GSA Multiple Award Schedule, OASIS plus, Polaris GWAC, Alliant 3, SEWP V, 8a STARS III, federal contract vehicle types, IDIQ vehicle, task order contract",
  alternates: {
    canonical: "https://capturepilot.com/blog/government-contract-vehicles-comparison",
  },
  openGraph: {
    title: "Government Contract Vehicles: GSA MAS, GWACs, MACs, and OASIS+ Explained",
    description:
      "$72B flows through contract vehicles annually. Learn how GSA MAS, GWACs, Alliant 3, Polaris, and OASIS+ work — and which small businesses should target them.",
    url: "https://capturepilot.com/blog/government-contract-vehicles-comparison",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
