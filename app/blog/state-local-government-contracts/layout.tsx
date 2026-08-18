import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State and Local Government Contracts: Expand Beyond Federal | CapturePilot',
  description: 'State and local governments spend over $1 trillion on contracts annually. Learn how to enter the SLED market, register as a vendor, and win cooperative purchasing contracts.',
  keywords: 'state and local government contracts, SLED contracting, state government procurement, local government vendor registration, cooperative purchasing, NASPO ValuePoint, Sourcewell, OMNIA Partners, NIGP codes, state procurement portal, government contracts small business, MBE WBE certification',
  alternates: { canonical: 'https://capturepilot.com/blog/state-local-government-contracts' },
  openGraph: {
    title: 'State and Local Government Contracts: How to Expand Beyond Federal Work',
    description: 'SLED procurement tops $1 trillion annually — larger than the entire federal civilian market. Here\'s how to enter it strategically without starting from scratch.',
    url: 'https://capturepilot.com/blog/state-local-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
