import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Probability of Win (PWin): How to Score Government Contract Chances | CapturePilot',
  description: 'Learn how to calculate PWin scores for government contracts. Use the 10-factor weighted model to make smarter bid/no-bid decisions and manage your federal pipeline.',
  keywords: 'probability of win government contracts, PWin score, PWin calculation, bid no bid decision government contracting, government contract win rate, capture management PWin, go no go government contract, weighted pipeline federal contracting, small business government contract strategy',
  alternates: { canonical: 'https://capturepilot.com/blog/pwin-probability-of-win' },
  openGraph: {
    title: 'Probability of Win (PWin): How to Score Your Chances Before You Bid',
    description: 'Only 14% of SAM-registered businesses win a federal contract each year. PWin scoring is how disciplined contractors decide which fights to enter — and which to skip.',
    url: 'https://capturepilot.com/blog/pwin-probability-of-win',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
