import Link from "next/link";
import type { Metadata } from "next";
import {
  Zap, ArrowRight, Target, Shield, Globe, Users,
  Heart, BarChart3, CheckCircle2,
} from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

export const metadata: Metadata = {
  title: "About CapturePilot — Government Contract Intelligence",
  description: "CapturePilot makes federal contracting accessible for small businesses. Our mission: level the playing field for veteran-owned, women-owned, and minority-owned businesses.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Making Government Contracting<br />
            <span className="gradient-text">Accessible.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto">
            Federal contracting shouldn&apos;t require a team of consultants and years of experience.
            We built CapturePilot to level the playing field.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">The Problem</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                The federal government spends over $700 billion annually on contracts. They&apos;re legally required to
                set aside 23% for small businesses — that&apos;s $150+ billion.
              </p>
              <p className="text-stone-600 mb-4 leading-relaxed">
                But most small businesses never see a penny. SAM.gov is confusing. Proposals take weeks. Knowing what you
                qualify for requires expertise that costs $300-500/hour.
              </p>
              <p className="text-stone-600 leading-relaxed">
                The businesses that need these contracts most — veteran-owned, women-owned, minority-owned — are the
                ones least likely to have the resources to navigate the system.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-black mb-6">Our Solution</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                CapturePilot automates the entire capture management process. We scan 40,000+ federal opportunities daily,
                score them against your business profile, and surface the ones you can actually win.
              </p>
              <ul className="space-y-3">
                {[
                  "AI matches opportunities to your NAICS, certs, and location",
                  "Proposal writer generates drafts in minutes, not weeks",
                  "Eligibility checker tells you if you qualify before you bid",
                  "Market intelligence shows who wins in your space",
                  "Partner search finds teaming opportunities from 1M+ companies",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Veterans First", desc: "The platform was built with veteran-owned businesses in mind. SDVOSB and VOSB opportunities surface first. We honor the 3% federal goal." },
              { icon: Heart, title: "Accessible by Design", desc: "No jargon. No 50-page onboarding. Enter your website, see your matches. Government contracting should be approachable." },
              { icon: Target, title: "Data-Driven Capture", desc: "Every recommendation is backed by data. Scoring algorithms, market intelligence, incumbent tracking. No guessing." },
            ].map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-stone-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-emerald-400">40K+</p>
              <p className="text-sm text-stone-400 mt-1">Federal Opportunities</p>
            </div>
            <div>
              <p className="text-4xl font-black text-emerald-400">892</p>
              <p className="text-sm text-stone-400 mt-1">NAICS Codes</p>
            </div>
            <div>
              <p className="text-4xl font-black text-emerald-400">1M+</p>
              <p className="text-sm text-stone-400 mt-1">SAM-Registered Companies</p>
            </div>
            <div>
              <p className="text-4xl font-black text-emerald-400">$2.7B+</p>
              <p className="text-sm text-stone-400 mt-1">Contract Value Tracked</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Free for 30 days. See which government contracts match your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={SIGNUP_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg">
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={CALENDLY_URL} className="text-stone-600 px-8 py-4 rounded-full text-base font-bold hover:bg-stone-50 transition-colors" target="_blank">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
