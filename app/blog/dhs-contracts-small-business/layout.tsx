import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DHS Contracts for Small Business: The $20 Billion Opportunity | CapturePilot',
  description: 'How small businesses win DHS contracts. Covers DHS components, 36.5% small business goals, OSDBU outreach sessions, APFS forecast, and set-aside strategies.',
  keywords: 'DHS contracts small business, Department of Homeland Security contracting, DHS OSDBU, DHS small business set aside, CBP contracts, FEMA contracts, TSA contracts, Coast Guard contracts, CISA contracts, DHS vendor outreach session',
  alternates: { canonical: 'https://capturepilot.com/blog/dhs-contracts-small-business' },
  openGraph: {
    title: 'DHS Contracts for Small Business: The $20 Billion Opportunity',
    description: 'How small businesses win DHS contracts — components, goals, OSDBU outreach, acquisition forecasts, and set-aside strategy.',
    url: 'https://capturepilot.com/blog/dhs-contracts-small-business',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
