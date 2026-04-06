import Link from "next/link";
import { Zap } from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-black" />
              </div>
              <span className="font-bold text-white text-sm">CapturePilot</span>
            </div>
            <p className="text-xs leading-relaxed">Government contract matching for small businesses. Built for veterans.</p>
          </div>
          <div>
            <p className="font-bold text-white text-sm mb-3">Product</p>
            <div className="space-y-2 text-sm">
              <Link href="/#features" className="block hover:text-white transition-colors">Features</Link>
              <Link href="/#pricing" className="block hover:text-white transition-colors">Pricing</Link>
              <Link href={CHECK_URL} className="block hover:text-white transition-colors">Quick Check</Link>
              <Link href={LOGIN_URL} className="block hover:text-white transition-colors">Login</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-white text-sm mb-3">For</p>
            <div className="space-y-2 text-sm">
              <Link href="/for/veterans" className="block hover:text-white transition-colors">Veteran-Owned</Link>
              <Link href="/for/women-owned" className="block hover:text-white transition-colors">Women-Owned</Link>
              <Link href="/for/small-business" className="block hover:text-white transition-colors">Small Business</Link>
              <Link href="/for/agencies" className="block hover:text-white transition-colors">Agencies</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-white text-sm mb-3">Company</p>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block hover:text-white transition-colors">About</Link>
              <Link href={CALENDLY_URL} className="block hover:text-white transition-colors" target="_blank">Contact</Link>
              <Link href={`${APP_URL}/privacy`} className="block hover:text-white transition-colors">Privacy</Link>
              <Link href={`${APP_URL}/terms`} className="block hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-6 text-xs text-center">
          &copy; {new Date().getFullYear()} CapturePilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
