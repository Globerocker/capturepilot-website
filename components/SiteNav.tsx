"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
    {/* Beta Banner */}
    <div className="fixed top-0 w-full bg-emerald-600 text-white text-center py-2.5 px-4 text-sm font-medium z-[60]">
      <span className="mr-2">🚀</span>
      Public Beta — All Features Free for 30 Days.
      <a href="https://app.capturepilot.com/signup" className="underline underline-offset-2 font-bold ml-1">Join the Beta →</a>
    </div>
    <nav className="fixed top-10 w-full bg-white/80 backdrop-blur-xl border-b border-stone-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="CapturePilot" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-lg tracking-tight">CapturePilot</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/features" className="text-stone-600 hover:text-black transition-colors">Features</Link>
          <Link href="/process" className="text-stone-600 hover:text-black transition-colors">How It Works</Link>
          <Link href="/pricing" className="text-stone-600 hover:text-black transition-colors">Pricing</Link>
          <Link href="/vs" className="text-stone-600 hover:text-black transition-colors">Compare</Link>
          <Link href="/blog" className="text-stone-600 hover:text-black transition-colors">Blog</Link>
          <Link href={LOGIN_URL} className="text-stone-600 hover:text-black transition-colors">Login</Link>
          <Link href={SIGNUP_URL} className="bg-black text-white px-5 py-2.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5">
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
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col md:hidden animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between px-6 h-16 border-b border-stone-100">
              <span className="font-bold text-lg tracking-tight">Menu</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2 text-stone-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-4 text-[15px]">
              <Link href="/features" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors">Features</Link>
              <Link href="/process" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors">How It Works</Link>
              <Link href="/pricing" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors">Pricing</Link>
              <Link href="/vs" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors">Compare</Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors">Blog</Link>
              <hr className="my-2 border-stone-100" />
              <Link href={LOGIN_URL} onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors">Login</Link>
              <Link
                href={SIGNUP_URL}
                onClick={() => setOpen(false)}
                className="mt-2 bg-black text-white px-5 py-3 rounded-full font-bold text-center hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                Start Free <ArrowRight className="w-3.5 h-3.5" />
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
