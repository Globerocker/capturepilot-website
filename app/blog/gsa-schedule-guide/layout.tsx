import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSA Schedule Contracts: Is a GSA Schedule Right for Your Business? (2026 Guide)',
  description: 'GSA Multiple Award Schedule generated $50.6B in FY2025. Learn eligibility, the application process, real costs, and how small businesses win on the schedule.',
  keywords: 'GSA schedule, GSA multiple award schedule, MAS contract, how to get on GSA schedule, GSA schedule small business, federal supply schedule, GSA eBuy, GSA Advantage',
  alternates: { canonical: 'https://capturepilot.com/blog/gsa-schedule-guide' },
  openGraph: {
    title: 'GSA Schedule Contracts: Is a GSA Schedule Right for Your Business?',
    description: 'GSA Multiple Award Schedule generated $50.6B in FY2025. Learn eligibility, the application process, real costs, and how small businesses win on the schedule.',
    url: 'https://capturepilot.com/blog/gsa-schedule-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
