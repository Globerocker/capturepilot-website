import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Small Business Subcontracting Plans: What Prime Contractors Require and How to Win | CapturePilot',
  description: 'Large federal prime contractors must set aside work for small businesses in their subcontracting plans. Here is how the system works and how to get in the pipeline.',
  keywords: 'small business subcontracting plan, FAR 52.219-9, subcontracting plan requirements, federal subcontracting opportunities, prime contractor small business, SBA subcontracting, government subcontracting, SBLO small business liaison, eSRS SAM.gov subcontracting, subcontracting plan goals, small business set aside subcontracts',
  alternates: { canonical: 'https://capturepilot.com/blog/small-business-subcontracting-plan' },
  openGraph: {
    title: 'Small Business Subcontracting Plans: What Prime Contractors Require and How to Win With Them',
    description: 'Federal prime contractors over $950K must commit in writing to award work to small businesses. Here is how those plans work and how to position your company to benefit.',
    url: 'https://capturepilot.com/blog/small-business-subcontracting-plan',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
