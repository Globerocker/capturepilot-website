import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Price-to-Win Analysis: How to Calculate the Right Bid Price | CapturePilot',
  description: 'Learn how to run a price-to-win analysis for government contracts. Research competitor rates, build a PTW model, and submit a bid price that wins without leaving money on the table.',
  keywords: 'price to win government contracts, PTW analysis, federal contract pricing strategy, how to price government proposals, competitive pricing government contracting, IGCE government contract, LPTA pricing strategy, best value pricing federal, USASpending contract data, government bid pricing',
  alternates: { canonical: 'https://capturepilot.com/blog/price-to-win-government-contracts' },
  openGraph: {
    title: 'Price-to-Win Analysis: How to Calculate the Right Bid Price Before You Submit',
    description: 'Most small businesses either bid too high and lose on price, or bid too low and win unprofitable work. PTW analysis is how you find the number that actually wins.',
    url: 'https://capturepilot.com/blog/price-to-win-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
