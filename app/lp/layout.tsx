/**
 * Conversion-mode layout. No SiteNav, no SiteFooter — only one CTA,
 * one offer, one message. Used for paid-traffic landing pages.
 */
export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
