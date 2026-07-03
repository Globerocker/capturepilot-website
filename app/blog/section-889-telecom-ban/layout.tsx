import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Section 889 Compliance Guide: Telecom Ban for DoD Contractors (2026) | CapturePilot',
  description: 'Section 889 bans Huawei, ZTE, Hikvision, Dahua & Hytera equipment from federal contracts. False certifications trigger FCA liability. Learn the 6-step compliance process.',
  keywords: 'section 889 telecommunications ban DoD, NDAA section 889, FAR 52.204-25, FAR 52.204-26, Huawei ban government contractors, Hikvision government ban, section 889 compliance, covered telecommunications equipment, section 889 part b, government contractor telecom compliance',
  alternates: { canonical: 'https://capturepilot.com/blog/section-889-telecom-ban' },
  openGraph: {
    title: 'Section 889 Compliance: The Telecom Ban That Can Get You Removed From a Contract',
    description: 'Section 889 bans Huawei, ZTE, Hikvision, Dahua & Hytera equipment from your internal systems. False certifications = False Claims Act. Here\'s how to comply.',
    url: 'https://capturepilot.com/blog/section-889-telecom-ban',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
