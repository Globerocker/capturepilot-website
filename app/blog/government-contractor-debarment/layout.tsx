import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contractor Debarment: How to Avoid It and What to Do If It Happens | CapturePilot',
  description: 'Debarment bars you from all federal contracts for up to 3 years. Learn the causes, the process, how to fight back, and how to build a compliance program that keeps you off the list.',
  keywords: 'government contractor debarment, contractor debarment, FAR 9.4 debarment, contractor suspension debarment, SAM.gov exclusions, False Claims Act debarment, debarment appeal, contractor compliance program, debarment vs suspension, debarment process timeline, contractor present responsibility, mandatory disclosure FAR',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contractor-debarment' },
  openGraph: {
    title: 'Government Contractor Debarment: How to Avoid It and What to Do If It Happens',
    description: 'Debarment cuts a company off from all federal contracts for up to 3 years. Here is what causes it, how the process works, and how to build the compliance program that prevents it.',
    url: 'https://capturepilot.com/blog/government-contractor-debarment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
