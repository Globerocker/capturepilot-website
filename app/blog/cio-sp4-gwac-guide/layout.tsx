import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CIO-SP4 Cancelled: Where $50B in Federal IT Work Is Going | CapturePilot',
  description: 'CIO-SP4 was cancelled in January 2026. Learn what happened, what GSA vehicles replace it, and how small IT businesses can win federal contracts now. Updated 2026.',
  keywords: 'CIO-SP4 GWAC, CIO-SP4 cancelled, NITAAC CIO-SP4, CIO-SP3 small business, federal IT contracts, 8a STARS III, Alliant 3, GSA IT vehicles, government IT contracts small business',
  alternates: { canonical: 'https://capturepilot.com/blog/cio-sp4-gwac-guide' },
  openGraph: {
    title: 'CIO-SP4 Is Cancelled: What IT Contractors Need to Know and Where the Work Is Going',
    description: 'NITAAC cancelled the $50B CIO-SP4 GWAC in January 2026. CIO-SP3 ordering ends October 29, 2026. Here\'s where the federal IT work is going and how to position now.',
    url: 'https://capturepilot.com/blog/cio-sp4-gwac-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
