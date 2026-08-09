import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Government Contracts: How Small Businesses Win Federal AI Work (2026) | CapturePilot',
  description: 'Federal AI contracts grew 966% to $7.2B in 2026. Learn which agencies buy AI, the right NAICS codes, contract vehicles like STARS III, and how to win your first federal AI award.',
  keywords: 'AI government contracts, artificial intelligence federal contracts, government AI contracts small business, NAICS codes AI contractors, 8a STARS III AI, federal AI spending 2026, DoD AI contracts, SBIR AI grants, federal AI contract vehicles, GSA AI schedule',
  alternates: { canonical: 'https://capturepilot.com/blog/ai-government-contracts' },
  openGraph: {
    title: 'AI Government Contracts: How Small Businesses Win Federal AI Work (2026)',
    description: 'Federal AI contracts grew 966% to $7.2B in 2026. Learn which agencies buy AI, the right NAICS codes, contract vehicles like STARS III, and how to win your first federal AI award.',
    url: 'https://capturepilot.com/blog/ai-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
