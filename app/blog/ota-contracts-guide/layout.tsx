import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OTA Contracts Explained: Other Transaction Authority Guide (2026) | CapturePilot',
  description: 'DoD spent $18.2B on OTA contracts in FY2025. Learn who qualifies, how to find opportunities, join consortiums, and win prototype-to-production agreements.',
  keywords: 'OTA contracts, Other Transaction Authority, DoD OTA, prototype OTA, OTA consortium, non-traditional defense contractor, defense procurement, NSTXL, S2MARTS, 10 USC 4022, OTA small business',
  alternates: { canonical: 'https://capturepilot.com/blog/ota-contracts-guide' },
  openGraph: {
    title: 'OTA Contracts Explained: How Other Transaction Authority Is Changing Defense Procurement',
    description: 'DoD spent $18.2B on OTA contracts in FY2025 — up from $1.8B in 2016. Learn eligibility rules, how to find opportunities, and the prototype-to-production path.',
    url: 'https://capturepilot.com/blog/ota-contracts-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
