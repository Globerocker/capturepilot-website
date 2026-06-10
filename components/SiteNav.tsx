"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CHECK_URL = `${APP_URL}/check`;

/* ─── Menu config ───
 * Single source of truth for desktop dropdowns + mobile drawer. Add a route
 * here once and both views pick it up. The flat-list shape keeps the JSX
 * trivially mappable.
 */
const PRODUCT_LINKS: Array<{ href: string; label: string; desc?: string }> = [
  { href: "/features", label: "All features", desc: "Every capability in one place" },
  { href: "/features/quick-checker", label: "Quick Checker", desc: "Score a website in 60 seconds" },
  { href: "/features/matching", label: "Opportunity matching", desc: "Daily SAM.gov + SLED matches" },
  { href: "/features/intelligence", label: "Capture intelligence", desc: "Incumbent + PWin signals" },
  { href: "/features/pipeline", label: "Pipeline & pursuits", desc: "Kanban + action items" },
  { href: "/features/proposals", label: "AI proposals", desc: "Drafts that pass compliance" },
  { href: "/features/capability-statement", label: "Capability statements", desc: "Edit, brand, export" },
  { href: "/features/forecast-radar", label: "Forecast radar", desc: "Year-end spend signals" },
  { href: "/features/recompete-radar", label: "Recompete radar", desc: "Expiring incumbents" },
  { href: "/features/tribal-partners", label: "Teaming partners", desc: "8(a), HUBZone, tribal" },
  { href: "/walkthrough", label: "Product walkthrough", desc: "Interactive tour" },
  { href: "/check", label: "Free Quick Check", desc: "No signup needed" },
];

const SOLUTIONS_LINKS: Array<{ href: string; label: string; desc?: string }> = [
  { href: "/for/veterans", label: "Veteran-owned", desc: "SDVOSB / VOSB" },
  { href: "/for/women-owned", label: "Women-owned", desc: "WOSB / EDWOSB" },
  { href: "/for/small-business", label: "Small business", desc: "8(a), HUBZone, SB" },
  { href: "/for/agencies", label: "Agencies & resellers", desc: "Multi-client portal" },
];

const RESOURCES_LINKS: Array<{ href: string; label: string; desc?: string }> = [
  { href: "/blog", label: "Blog", desc: "Guides, playbooks, deep dives" },
  { href: "/academy", label: "Academy", desc: "On-demand training" },
  { href: "/downloads", label: "Free downloads", desc: "Templates + checklists" },
  { href: "/contractors", label: "Contractor directory", desc: "Browse 80k+ firms" },
  { href: "/contracts", label: "Contracts directory", desc: "Awards by NAICS" },
  { href: "/resources/agency-pain-points", label: "Agency pain points", desc: "Where to find work today" },
  { href: "/resources/federal-events-calendar-2026", label: "Federal events calendar 2026" },
  { href: "/resources/federal-contracting-field-manual", label: "Field manual" },
  { href: "/resources/pwin-calculator", label: "PWin calculator" },
  { href: "/resources/capability-statement-template", label: "Cap statement template" },
  { href: "/resources/rfp-response-playbook", label: "RFP response playbook" },
  { href: "/resources/far-clause-quick-reference", label: "FAR clause quick reference" },
  { href: "/startup-pack", label: "Startup pack", desc: "Everything for your first bid" },
];

const COMPANY_LINKS: Array<{ href: string; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/process", label: "How it works" },
  { href: "/updates", label: "What's new" },
  { href: "/demo", label: "Book a demo" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  // Mobile drawer is accordion-style — only one section expanded at a time
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <>
      {/* Trial Banner */}
      <div className="fixed top-0 w-full bg-emerald-600 text-white text-center py-2.5 px-4 text-sm font-medium z-[60]">
        <span className="mr-2">🎯</span>
        Free 30-Day Trial — No Credit Card Required.
        <a href={SIGNUP_URL} className="underline underline-offset-2 font-bold ml-1">Start Free →</a>
      </div>
      <nav className="fixed top-10 w-full bg-white/80 backdrop-blur-xl border-b border-stone-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="CapturePilot" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg tracking-tight">CapturePilot</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <DesktopDropdown label="Product" links={PRODUCT_LINKS} columns={2} />
            <DesktopDropdown label="Solutions" links={SOLUTIONS_LINKS} columns={1} />
            <Link href="/pricing" className="text-stone-600 hover:text-black transition-colors">Pricing</Link>
            <DesktopDropdown label="Resources" links={RESOURCES_LINKS} columns={2} />
            <Link href="/vs" className="text-stone-600 hover:text-black transition-colors">Compare</Link>
            <DesktopDropdown label="Company" links={COMPANY_LINKS} columns={1} />
            <Link href={LOGIN_URL} className="text-stone-600 hover:text-black transition-colors">Login</Link>
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-5 py-2.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5"
            >
              Start Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-stone-700"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-[70] shadow-2xl flex flex-col md:hidden animate-in slide-in-from-right duration-200 overflow-y-auto">
              <div className="flex items-center justify-between px-6 h-16 border-b border-stone-100 sticky top-0 bg-white">
                <span className="font-bold text-lg tracking-tight">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2 text-stone-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4 text-[15px]">
                <MobileSection
                  id="product"
                  label="Product"
                  expanded={mobileSection === "product"}
                  onToggle={() =>
                    setMobileSection(mobileSection === "product" ? null : "product")
                  }
                  links={PRODUCT_LINKS}
                  onLinkClick={() => setOpen(false)}
                />
                <MobileSection
                  id="solutions"
                  label="Solutions"
                  expanded={mobileSection === "solutions"}
                  onToggle={() =>
                    setMobileSection(mobileSection === "solutions" ? null : "solutions")
                  }
                  links={SOLUTIONS_LINKS}
                  onLinkClick={() => setOpen(false)}
                />
                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  Pricing
                </Link>
                <MobileSection
                  id="resources"
                  label="Resources"
                  expanded={mobileSection === "resources"}
                  onToggle={() =>
                    setMobileSection(mobileSection === "resources" ? null : "resources")
                  }
                  links={RESOURCES_LINKS}
                  onLinkClick={() => setOpen(false)}
                />
                <Link
                  href="/vs"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  Compare
                </Link>
                <MobileSection
                  id="company"
                  label="Company"
                  expanded={mobileSection === "company"}
                  onToggle={() =>
                    setMobileSection(mobileSection === "company" ? null : "company")
                  }
                  links={COMPANY_LINKS}
                  onLinkClick={() => setOpen(false)}
                />
                <hr className="my-2 border-stone-100" />
                <Link
                  href={LOGIN_URL}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href={SIGNUP_URL}
                  onClick={() => setOpen(false)}
                  className="mt-2 bg-black text-white px-5 py-3 rounded-full font-bold text-center hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  Start Free <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={CHECK_URL}
                  onClick={() => setOpen(false)}
                  className="mt-1 border border-stone-200 px-5 py-3 rounded-full font-semibold text-center hover:bg-stone-50 transition-colors text-stone-700"
                >
                  Try Quick Check
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
      {/* Spacer for beta banner height so pages with pt-16 still clear both bars */}
      <div className="h-10" />
    </>
  );
}

/* ─── Desktop dropdown ───
 * Hover OR keyboard-focus opens the panel. A small "bridge" element keeps it
 * open while the cursor crosses the gap between trigger and panel.
 */
function DesktopDropdown({
  label,
  links,
  columns,
}: {
  label: string;
  links: Array<{ href: string; label: string; desc?: string }>;
  columns: 1 | 2;
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-stone-600 hover:text-black transition-colors"
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
      </button>
      {/* Hover bridge — keeps panel open across the trigger-to-panel gap */}
      <div className="absolute left-0 top-full h-3 w-full" />
      <div
        className={`absolute left-0 top-[calc(100%+0.5rem)] ${
          columns === 2 ? "w-[560px]" : "w-72"
        } bg-white rounded-2xl border border-stone-100 shadow-2xl p-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-150 z-50`}
      >
        <div className={columns === 2 ? "grid grid-cols-2 gap-1" : "flex flex-col gap-1"}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors"
            >
              <span className="block text-sm font-semibold text-stone-900">{l.label}</span>
              {l.desc && <span className="block text-xs text-stone-500 mt-0.5">{l.desc}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile accordion section ─── */
function MobileSection({
  id,
  label,
  expanded,
  onToggle,
  links,
  onLinkClick,
}: {
  id: string;
  label: string;
  expanded: boolean;
  onToggle: () => void;
  links: Array<{ href: string; label: string; desc?: string }>;
  onLinkClick: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded ? "true" : "false"}
        aria-controls={`mobile-${id}`}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors font-medium"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div id={`mobile-${id}`} className="pl-2 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onLinkClick}
              className="px-4 py-2.5 rounded-lg text-stone-600 hover:bg-stone-50 hover:text-black transition-colors text-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
