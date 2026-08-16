import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Logistics & Transportation Government Contracts: How to Break Into a $15B Market',
  description: 'How small trucking companies and 3PLs win federal transportation contracts. NAICS codes, DLA logistics, DOT programs, set-asides, and a step-by-step path to first award.',
  keywords: 'transportation government contracts, logistics government contracts, DLA transportation contracts, federal trucking contracts small business, NAICS 484110 government contracting, GSA Schedule 48 transportation',
  alternates: { canonical: 'https://capturepilot.com/blog/logistics-transportation-government-contracts' },
  openGraph: {
    title: 'Logistics and Transportation Government Contracts: How to Break Into a $15 Billion Market',
    description: 'How small trucking companies and 3PLs win federal transportation contracts. NAICS codes, DLA programs, DOT opportunities, set-asides, and a step-by-step entry path.',
    url: 'https://capturepilot.com/blog/logistics-transportation-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
