import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Continuing Resolutions & Government Contractors: What CRs Mean for Your Contracts | CapturePilot',
  description: 'The government averages 185 CR days per fiscal year. Learn exactly how continuing resolutions freeze new awards, impact existing contracts, and what small businesses can do.',
  keywords: 'federal budget continuing resolution government contractors, continuing resolution contract awards, CR impact small business contractors, government shutdown contractor, continuing resolution new starts prohibition, federal appropriations contractor strategy, CR pipeline management, government contract cash flow CR, OMB apportionment continuing resolution, federal budget uncertainty contractors',
  alternates: { canonical: 'https://capturepilot.com/blog/federal-budget-continuing-resolution' },
  openGraph: {
    title: 'Continuing Resolutions: How Federal Budget Uncertainty Affects Your Contracts',
    description: 'Congress averages 5 CRs per fiscal year. Learn what agencies can and cannot do during a CR, how the pro-rata spending formula works, and how to protect your pipeline when appropriations stall.',
    url: 'https://capturepilot.com/blog/federal-budget-continuing-resolution',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
