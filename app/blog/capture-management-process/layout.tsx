import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capture Management Process: How Winning Contractors Find and Win Deals | CapturePilot',
  description: 'Learn the capture management process used by winning government contractors — from opportunity qualification through pre-RFP shaping and proposal handoff. Real frameworks inside.',
  keywords: 'capture management process, government contracting capture, capture manager government, bid no bid decision, pre-RFP shaping, capture planning federal contracts, win government contracts, capture management strategy, PWin capture',
  alternates: { canonical: 'https://capturepilot.com/blog/capture-management-process' },
  openGraph: {
    title: 'The Capture Management Process: How Winning Contractors Find and Win Deals',
    description: 'The government contract win is decided before the RFP drops. Learn the four-phase capture process that top contractors use — and how to run it without a dedicated BD team.',
    url: 'https://capturepilot.com/blog/capture-management-process',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
