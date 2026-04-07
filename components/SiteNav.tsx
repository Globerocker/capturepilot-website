import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;

export default function SiteNav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-stone-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="CapturePilot" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-lg tracking-tight">CapturePilot</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/features" className="text-stone-600 hover:text-black transition-colors">Features</Link>
          <Link href="/process" className="text-stone-600 hover:text-black transition-colors">How It Works</Link>
          <Link href="/pricing" className="text-stone-600 hover:text-black transition-colors">Pricing</Link>
          <Link href={LOGIN_URL} className="text-stone-600 hover:text-black transition-colors">Login</Link>
          <Link href={SIGNUP_URL} className="bg-black text-white px-5 py-2.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5">
            Start Free <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
