import Link from "next/link";
import Image from "next/image";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="CapturePilot" width={28} height={28} className="rounded-lg invert" />
              <span className="font-bold text-white text-sm">CapturePilot</span>
            </div>
            <p className="text-xs leading-relaxed mb-3">Government contract matching for small businesses. Built for veterans.</p>
            <Link href="https://www.linkedin.com/company/111953265/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-stone-800 hover:bg-[#0A66C2] transition-colors group">
              <svg className="w-4 h-4 text-stone-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
          </div>
          <div>
            <p className="font-bold text-white text-sm mb-3">Product</p>
            <div className="space-y-2 text-sm">
              <Link href="/features" className="block hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
              <Link href={CHECK_URL} className="block hover:text-white transition-colors">Quick Check</Link>
              <Link href="/blog" className="block hover:text-white transition-colors">Blog</Link>
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
              <Link href={CALENDLY_URL} className="block hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Contact</Link>
              <Link href={`${APP_URL}/privacy`} className="block hover:text-white transition-colors">Privacy</Link>
              <Link href={`${APP_URL}/terms`} className="block hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-6 text-xs text-center space-y-1">
          <p>&copy; {new Date().getFullYear()} CapturePilot. All rights reserved.</p>
          <p className="text-stone-500">
            A product by{" "}
            <Link href="https://www.americurial.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors underline underline-offset-2">
              Americurial LLC
            </Link>
            {" "}— Veteran-Owned Digital Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
