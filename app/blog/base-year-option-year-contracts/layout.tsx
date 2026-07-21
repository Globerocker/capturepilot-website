import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Base Year + Option Years: How Multi-Year Government Contracts Work | CapturePilot',
  description: 'Learn how base year and option year government contracts work, how options get exercised, pricing strategies, and how to protect your revenue stream across all periods.',
  keywords: 'base year option year government contract, option year exercise FAR, multi-year government contract, government contract option period, FAR 17.207, option year pricing, government contract recompete, base period government services contract, how option years work federal contracts',
  alternates: { canonical: 'https://capturepilot.com/blog/base-year-option-year-contracts' },
  openGraph: {
    title: 'Base Year + Option Years: How Multi-Year Government Contracts Actually Work',
    description: 'Option years are the government\'s right, not yours. Learn the rules, pricing strategies, and how to make sure each option period gets exercised.',
    url: 'https://capturepilot.com/blog/base-year-option-year-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
