import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APEX Accelerators: Free Government Contracting Help for Small Businesses | CapturePilot',
  description: 'APEX Accelerators (formerly PTACs) offer free government contracting help — SAM registration, certifications, proposal review, and more. Find your nearest center and what to expect.',
  keywords: 'APEX Accelerator government contracting, APEX Accelerator small business, PTAC procurement technical assistance, free government contracting help, APEX Accelerator services, find APEX Accelerator near me, government contracting advisor',
  alternates: { canonical: 'https://capturepilot.com/blog/apex-accelerator-govcon-guide' },
  openGraph: {
    title: 'APEX Accelerators: The Free Government Contracting Help Most Small Businesses Don\'t Know About',
    description: 'Free, DoD-funded advisory centers in all 50 states help small businesses win federal contracts. Find your nearest APEX center and learn what they actually do.',
    url: 'https://capturepilot.com/blog/apex-accelerator-govcon-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
