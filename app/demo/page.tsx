"use client";

import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight,
  Play,
  Target,
  Sparkles,
  BarChart3,
  MessageCircle,
  Clock,
  Shield,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Zap,
  Search,
  FileText,
  BookOpen,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;
const LOGIN_URL = `${APP_URL}/login`;
const CALENDLY_URL = "https://calendly.com/capturepilot/strategy-call";

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "How long is the demo?",
    a: "About 30 minutes. We'll spend 15 minutes showing you the platform with live data relevant to your business, and 15 minutes answering your questions.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Just know your NAICS codes and the types of contracts you're targeting. If you're not sure, we'll help you identify them during the call.",
  },
  {
    q: "Is the demo a sales pitch?",
    a: "No. We'll show you real opportunities matched to your business and walk through the tools. If it's not a fit, we'll tell you honestly and point you to free resources.",
  },
  {
    q: "Can I bring my team?",
    a: "Absolutely. We encourage it — especially your BD lead and anyone involved in proposal writing. The more eyes on the demo, the better questions we get.",
  },
  {
    q: "What if I'm brand new to government contracting?",
    a: "Perfect. We'll start with the basics — checking your eligibility, understanding your NAICS codes, and showing you what opportunities are available right now for businesses like yours.",
  },
  {
    q: "Do you offer demos for agencies and consultants?",
    a: "Yes. If you manage multiple clients, we'll show you the consulting portal and white-label features. Just mention it when booking.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Component                                                      */
/* ------------------------------------------------------------------ */

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-stone-800 pr-4">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */

export default function DemoPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-blue-50 via-white to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              Live Demo
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
              See How CapturePilot Finds{" "}
              <span className="text-blue-600">Contracts You Can Win</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute walkthrough. We&apos;ll show you live matches
              for your business, demonstrate the AI proposal writer, and answer
              every question you have.
            </p>
            <Link
              href="#book"
              className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-800 transition-colors inline-flex items-center gap-2"
            >
              Book Your Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* What you'll see */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-stone-900 mb-4 text-center">
              What You&apos;ll See in the Demo
            </h2>
            <p className="text-stone-600 text-center mb-10 max-w-xl mx-auto">
              Not a slideshow. A live walkthrough with real data matched to your
              business.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Target className="w-7 h-7 text-blue-500" />,
                  title: "Live Contract Matching",
                  desc: "We'll enter your NAICS codes and show you real opportunities from SAM.gov that match your business right now. See scoring, set-aside filters, and pipeline management in action.",
                  badge: "15 min",
                },
                {
                  icon: <Sparkles className="w-7 h-7 text-emerald-500" />,
                  title: "AI Proposal Walkthrough",
                  desc: "Watch the AI read a real solicitation, extract requirements, build a compliance matrix, and generate proposal draft sections. See how 40+ hours becomes 4.",
                  badge: "5 min",
                },
                {
                  icon: <BarChart3 className="w-7 h-7 text-amber-500" />,
                  title: "Market Intelligence",
                  desc: "See competitor analysis, incumbent data, award history, and spending trends for your target agencies. Know who you're up against before you bid.",
                  badge: "5 min",
                },
                {
                  icon: <MessageCircle className="w-7 h-7 text-purple-500" />,
                  title: "Q&A — Ask Anything",
                  desc: "Pricing, integrations, team features, consulting services, migration — nothing is off-limits. We'll give you straight answers.",
                  badge: "5 min",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-stone-200 bg-stone-50 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white rounded-xl border border-stone-100">
                      {card.icon}
                    </div>
                    <span className="text-xs font-bold text-stone-400 bg-white px-3 py-1 rounded-full border border-stone-100">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-stone-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendly embed */}
        <section id="book" className="py-16 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                Pick a Time
              </div>
              <h2 className="text-3xl font-black text-stone-900 mb-3">
                Book Your Free Strategy Call
              </h2>
              <p className="text-stone-600 max-w-lg mx-auto">
                Choose a time that works for you. We&apos;ll send a confirmation
                with a Zoom link and a brief questionnaire so we can prepare.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
              <iframe
                src="https://calendly.com/capturepilot/strategy-call"
                className="w-full border-0 rounded-2xl"
                style={{ height: "700px" }}
                title="Book a Demo with CapturePilot"
              />
            </div>
          </div>
        </section>

        {/* Not ready section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-stone-900 mb-2 text-center">
              Not Ready for a Call?
            </h2>
            <p className="text-stone-600 text-center mb-8">
              No pressure. Try these instead.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  href: CHECK_URL,
                  icon: <Search className="w-6 h-6 text-blue-500" />,
                  title: "Try Quick Checker",
                  desc: "See if your business qualifies for federal contracts in 30 seconds. Free, no signup required.",
                  cta: "Check Eligibility",
                },
                {
                  href: SIGNUP_URL,
                  icon: <Zap className="w-6 h-6 text-emerald-500" />,
                  title: "Start Free Trial",
                  desc: "Get 30 days of Pro features. No credit card required. Cancel anytime.",
                  cta: "Start Free",
                },
                {
                  href: "/resources/bid-checklist",
                  icon: <BookOpen className="w-6 h-6 text-amber-500" />,
                  title: "Read Our Guides",
                  desc: "Free bid checklists, proposal templates, and government contracting resources.",
                  cta: "Browse Resources",
                },
              ].map((option, i) => (
                <Link
                  key={i}
                  href={option.href}
                  className="p-6 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all group text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-stone-50 rounded-xl">{option.icon}</div>
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-stone-500 mb-4">{option.desc}</p>
                  <span className="text-sm font-bold text-blue-600 inline-flex items-center gap-1">
                    {option.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-12 px-6 bg-stone-50 border-y border-stone-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { stat: "37,000+", label: "Federal opportunities tracked" },
                { stat: "80,000+", label: "Contractors in our database" },
                { stat: "< 30 sec", label: "Average eligibility check time" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-stone-900">{s.stat}</p>
                  <p className="text-sm text-stone-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 justify-center mb-8">
              <HelpCircle className="w-5 h-5 text-stone-400" />
              <h2 className="text-2xl font-black text-stone-900">
                Demo FAQ
              </h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Ready to Find Contracts You Can Win?
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto">
              30 minutes could change your government contracting strategy.
              Book a demo and see what CapturePilot finds for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#book"
                className="bg-black text-white px-8 py-3.5 rounded-full font-bold hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={SIGNUP_URL}
                className="bg-white text-stone-800 px-8 py-3.5 rounded-full font-bold border border-stone-200 hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Or Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
