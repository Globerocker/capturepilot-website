import Link from "next/link";
import Image from "next/image";
import {
  Zap, Target, Shield, FileText, BarChart3, Users, ArrowRight,
  CheckCircle2, Clock, Search, Briefcase, Star, Globe, Phone,
  ChevronRight, Layers, Mic, TrendingUp,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-stone-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="CapturePilot" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-lg tracking-tight">CapturePilot</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#features" className="text-stone-600 hover:text-black transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-stone-600 hover:text-black transition-colors">How It Works</Link>
            <Link href="#pricing" className="text-stone-600 hover:text-black transition-colors">Pricing</Link>
            <Link href={LOGIN_URL} className="text-stone-600 hover:text-black transition-colors">Login</Link>
            <Link href={SIGNUP_URL} className="bg-black text-white px-5 py-2.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5">
              Start Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4" /> Built for Veteran-Owned & Small Businesses
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Win Government<br />
            Contracts. <span className="gradient-text">Faster.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            CapturePilot scans 40,000+ federal opportunities and matches them to your business.
            Stop searching SAM.gov manually. Start winning contracts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-stone-200">
              Start Free — 30 Days <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={CHECK_URL} className="bg-stone-100 text-stone-700 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-200 transition-colors inline-flex items-center gap-2">
              <Search className="w-4 h-4" /> Check Your Company
            </Link>
          </div>

          <p className="text-sm text-stone-400 mt-4">No credit card required · Cancel anytime</p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-stone-100">
            <div className="text-center">
              <p className="text-3xl font-black">40,000+</p>
              <p className="text-sm text-stone-500">Federal Opportunities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black">892</p>
              <p className="text-sm text-stone-500">Industry Codes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black">$2.7B+</p>
              <p className="text-sm text-stone-500">Contract Value Tracked</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">AI</p>
              <p className="text-sm text-stone-500">Powered Matching</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Problem → Solution ─── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { problem: "Spending hours on SAM.gov?", solution: "We scan 40,000+ opportunities daily and show you what matters.", icon: Clock },
              { problem: "Missing deadlines?", solution: "Get alerts before opportunities expire. Never miss a bid again.", icon: Target },
              { problem: "Don't know where to start?", solution: "AI analyzes each opportunity and tells you exactly what to do.", icon: Zap },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-stone-200 hover-lift">
                <item.icon className="w-8 h-8 text-emerald-600 mb-4" />
                <p className="text-lg font-bold text-red-600 mb-2 line-through opacity-60">{item.problem}</p>
                <p className="text-base text-stone-700 font-medium">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            3 Steps to Your First Contract
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            No government experience needed. We guide you every step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter Your Website",
                desc: "Our AI crawls your website, identifies your services, and finds your NAICS codes automatically.",
                icon: Globe,
                color: "bg-blue-50 text-blue-600 border-blue-200",
              },
              {
                step: "2",
                title: "See Your Matches",
                desc: "We score every federal opportunity against your profile. Strong matches surface first.",
                icon: Target,
                color: "bg-emerald-50 text-emerald-600 border-emerald-200",
              },
              {
                step: "3",
                title: "Win Contracts",
                desc: "AI writes your proposal. We check your eligibility. Track your deals in one pipeline.",
                icon: Briefcase,
                color: "bg-amber-50 text-amber-600 border-amber-200",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 rounded-2xl border-2 ${item.color} flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 font-black text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={CHECK_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-colors inline-flex items-center gap-2">
              Try It Now — Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Everything You Need to Win
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            From finding opportunities to submitting proposals — all in one platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Smart Matching", desc: "AI scores opportunities by NAICS, certifications, location, and past performance. See what fits your business.", tag: "Core", href: "/features/matching" },
              { icon: FileText, title: "AI Proposal Writer", desc: "Generate full proposals in minutes. Cover letter, technical approach, past performance — all tailored to the solicitation.", tag: "AI", href: "/features/proposals" },
              { icon: BarChart3, title: "Market Intelligence", desc: "See who wins contracts in your industry. Total spend, top agencies, YoY trends — powered by USASpending.", tag: "Intel", href: "/features/intelligence" },
              { icon: Mic, title: "Capability Statement", desc: "Record yourself talking about your business. AI writes your capability statement. Brand colors extracted from your website.", tag: "AI", href: "/features/capability-statement" },
              { icon: Layers, title: "Deal Pipeline", desc: "Track every opportunity from discovery to award. Kanban board with custom stages and notes.", tag: "CRM", href: "/features/pipeline" },
              { icon: Users, title: "Find Partners", desc: "Search 1M+ SAM-registered companies for teaming partnerships. Filter by NAICS, certs, and location.", tag: "Network", href: "#" },
              { icon: Shield, title: "Eligibility Check", desc: "Instantly see if you qualify for each opportunity's set-aside. Know your certs match before you bid.", tag: "Smart", href: "#" },
              { icon: TrendingUp, title: "IDIQ Tracking", desc: "Find active contract vehicles in your industry. Getting on an IDIQ means steady work for years.", tag: "Intel", href: "#" },
              { icon: Search, title: "Quick Company Check", desc: "Enter any company's website. In 30 seconds: NAICS codes, matching opportunities, SAM status, competitor analysis.", tag: "Free", href: "/features/quick-checker" },
            ].map((feature, i) => (
              <Link key={i} href={feature.href} className="bg-white rounded-2xl p-6 border border-stone-200 hover-lift block group">
                <div className="flex items-center gap-2 mb-4">
                  <feature.icon className="w-5 h-5 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">{feature.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{feature.desc}</p>
                {feature.href !== "#" && (
                  <span className="text-xs font-bold text-emerald-600 mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Built for Businesses Like Yours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Veteran-Owned", desc: "2,276 SDVOSB & VOSB set-aside opportunities waiting for you.", color: "emerald" },
              { icon: Star, title: "Women-Owned", desc: "WOSB and EDWOSB set-asides. We flag every opportunity you qualify for.", color: "pink" },
              { icon: Briefcase, title: "Small Business", desc: "14,332 small business set-aside contracts. SBA 8(a), HUBZone, SDB.", color: "blue" },
              { icon: Globe, title: "Any Industry", desc: "892 NAICS codes. Construction, IT, janitorial, engineering, logistics — we cover it.", color: "amber" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 border hover-lift bg-${item.color}-50 border-${item.color}-200`}>
                <item.icon className={`w-8 h-8 text-${item.color}-600 mb-4`} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg text-stone-500 mb-12">Start free. Upgrade when you're ready.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Free</p>
              <p className="text-4xl font-black mb-1">$0</p>
              <p className="text-sm text-stone-400 mb-6">Forever</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />Quick Company Check</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />5 opportunity matches</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />NAICS code identification</li>
              </ul>
              <Link href={CHECK_URL} className="w-full bg-stone-100 text-stone-700 py-3 rounded-xl font-bold text-sm hover:bg-stone-200 transition-colors block text-center">
                Try Free
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-black text-white rounded-2xl p-8 border-2 border-emerald-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
              <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">Pro</p>
              <p className="text-4xl font-black mb-1">$199</p>
              <p className="text-sm text-stone-400 mb-6">per month · 30-day free trial</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />Unlimited matches</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />AI Proposal Writer</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />Market Intelligence</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />Capability Statement Builder</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />Deal Pipeline & CRM</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />Partner Search</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />Email Alerts</li>
              </ul>
              <Link href={SIGNUP_URL} className="w-full bg-emerald-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors block text-center">
                Start Free Trial <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </Link>
            </div>

            {/* Consulting */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Consulting</p>
              <p className="text-4xl font-black mb-1">Custom</p>
              <p className="text-sm text-stone-400 mb-6">We do the work for you</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />Everything in Pro</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />Dedicated capture team</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />Proposal writing</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />SAM.gov registration help</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />Competitor analysis</li>
              </ul>
              <Link href={CALENDLY_URL} className="w-full bg-stone-100 text-stone-700 py-3 rounded-xl font-bold text-sm hover:bg-stone-200 transition-colors block text-center" target="_blank">
                Book Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Win Your First Government Contract?
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Join hundreds of small businesses using CapturePilot to find and win federal contracts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              Start Free — No Credit Card <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={CALENDLY_URL} className="text-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-50 transition-colors inline-flex items-center gap-2" target="_blank">
              <Phone className="w-4 h-4" /> Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center">
                  <Image src="/logo.png" alt="CapturePilot" width={28} height={28} className="rounded-lg invert" />
                </div>
                <span className="font-bold text-white text-sm">CapturePilot</span>
              </div>
              <p className="text-xs leading-relaxed">Government contract matching for small businesses. Built for veterans.</p>
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">Product</p>
              <div className="space-y-2 text-sm">
                <Link href="#features" className="block hover:text-white transition-colors">Features</Link>
                <Link href="#pricing" className="block hover:text-white transition-colors">Pricing</Link>
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
            © {new Date().getFullYear()} CapturePilot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
