import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bid/No-Bid Decision Framework for Government Contracts | CapturePilot',
  description: 'Stop wasting money on proposals you cannot win. Use this weighted bid/no-bid scorecard framework to make smarter pursuit decisions on federal contracts.',
  keywords: 'bid no bid decision government contracts, bid no bid framework, government contract pursuit decision, bid no bid scorecard, proposal decision criteria, go no go government contracting, capture management bid decision, federal contract pursuit strategy, small business government contracting',
  alternates: { canonical: 'https://capturepilot.com/blog/bid-no-bid-decision-framework' },
  openGraph: {
    title: 'The Bid/No-Bid Decision: A Framework for Stopping Bad Pursuits Before They Start',
    description: 'Federal proposals cost $5,000–$20,000 each. A structured bid/no-bid scorecard tells you which opportunities are worth your time — before you spend a dollar on writing.',
    url: 'https://capturepilot.com/blog/bid-no-bid-decision-framework',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
