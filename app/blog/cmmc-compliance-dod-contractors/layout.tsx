import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CMMC 2.0 Compliance Guide for DoD Contractors (2026) | CapturePilot',
  description: 'CMMC 2.0 deadlines are live. Learn which level you need, what C3PAO certification costs, and how to pass your assessment before Phase 2 locks you out of DoD contracts.',
  keywords: 'CMMC compliance, CMMC 2.0, DoD contractors cybersecurity, C3PAO certification, CMMC Level 2, NIST 800-171, SPRS score, defense industrial base, cybersecurity maturity model certification',
  alternates: { canonical: 'https://capturepilot.com/blog/cmmc-compliance-dod-contractors' },
  openGraph: {
    title: 'CMMC 2.0 Compliance: What Every DoD Contractor Must Know Before the Deadline',
    description: 'CMMC 2.0 Phase 1 is already in effect. Phase 2 mandatory C3PAO certification starts November 2026. Here is what you need to do now.',
    url: 'https://capturepilot.com/blog/cmmc-compliance-dod-contractors',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
