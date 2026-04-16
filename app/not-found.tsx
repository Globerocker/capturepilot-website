import Link from "next/link";
import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Page Not Found — CapturePilot",
  description:
    "The page you were looking for could not be found. Browse CapturePilot features, pricing, comparisons, and the government contracting blog.",
  robots: { index: false, follow: true },
};

const popularLinks = [
  { href: "/features", label: "Features", description: "Matching, Quick Checker, AI Proposals" },
  { href: "/pricing", label: "Pricing", description: "Free forever, Pro $199/mo, or Consulting" },
  { href: "/vs/sam-gov", label: "CapturePilot vs SAM.gov", description: "Why a smart layer beats raw search" },
  { href: "/for/veterans", label: "For Veteran-Owned Business", description: "SDVOSB/VOSB set-aside matching" },
  { href: "/blog/government-contracting-101", label: "Government Contracting 101", description: "Beginner's guide to federal contracts" },
  { href: "/check", label: "Quick Company Check", description: "Free SAM.gov readiness check" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Error 404</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            We couldn&apos;t find that page.
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto mb-10">
            The URL may have moved or never existed. Try one of the pages below, or head back to{" "}
            <Link href="/" className="underline underline-offset-4 hover:text-black">the homepage</Link>.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left mt-12">
            {popularLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-xl border border-stone-200 p-5 hover:border-black hover:shadow-sm transition"
              >
                <div className="font-semibold text-black group-hover:underline">{l.label}</div>
                <div className="text-sm text-stone-500 mt-1">{l.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
