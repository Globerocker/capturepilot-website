"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Mic, Sparkles, FileText, ArrowRight, CheckCircle2, Clock,
  DollarSign, Download, Globe, Palette, Upload, Building2,
  Award, Users, Hash, Phone, X, ChevronRight,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

/* ─── Animated Mockup ─── */
function AnimatedMockup() {
  const [step, setStep] = useState(0); // 0=idle, 1=recording, 2=processing, 3=document

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 4200),
      setTimeout(() => setStep(3), 7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-16">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {[
          { n: 1, label: "Record" },
          { n: 2, label: "AI Analyzes" },
          { n: 3, label: "Document Ready" },
        ].map((s, i) => (
          <div key={s.n} className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                step >= s.n
                  ? "bg-emerald-600 text-white scale-110"
                  : "bg-stone-200 text-stone-500"
              }`}
            >
              {step > s.n ? <CheckCircle2 className="w-5 h-5" /> : s.n}
            </div>
            <span
              className={`text-sm font-medium hidden sm:inline transition-colors duration-300 ${
                step >= s.n ? "text-emerald-700" : "text-stone-400"
              }`}
            >
              {s.label}
            </span>
            {i < 2 && (
              <div
                className={`w-12 h-0.5 transition-colors duration-500 ${
                  step > s.n ? "bg-emerald-400" : "bg-stone-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* ─── Step 1: Recording ─── */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
          step === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative">
          {/* Pulse rings */}
          <div className="pulse-ring pulse-ring-1" />
          <div className="pulse-ring pulse-ring-2" />
          <div className="pulse-ring pulse-ring-3" />
          {/* Mic */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200">
            <Mic className="w-10 h-10 text-white" />
          </div>
        </div>
        <p className="mt-8 text-lg font-semibold text-stone-700">Recording your business story...</p>
        {/* Waveform */}
        <div className="flex items-end gap-1 mt-6 h-12">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="waveform-bar"
              style={{
                animationDelay: `${i * 0.07}s`,
                height: "8px",
              }}
            />
          ))}
        </div>
      </div>

      {/* ─── Step 2: Processing ─── */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
          step === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative">
          <div className="ai-spinner" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-emerald-600 ai-pulse" />
          </div>
        </div>
        <p className="mt-8 text-lg font-semibold text-stone-700 ai-text-pulse">
          Analyzing your business...
        </p>
        <div className="mt-4 space-y-2 text-sm text-stone-500">
          <p className="ai-line ai-line-1">Extracting core competencies</p>
          <p className="ai-line ai-line-2">Identifying differentiators</p>
          <p className="ai-line ai-line-3">Pulling brand colors from website</p>
        </div>
      </div>

      {/* ─── Step 3: Document ─── */}
      <div
        className={`transition-all duration-700 ${
          step === 3 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } ${step !== 3 ? "absolute inset-0" : ""}`}
      >
        <div className="doc-reveal bg-white rounded-2xl border border-stone-200 shadow-2xl shadow-stone-200/50 overflow-hidden max-w-lg mx-auto">
          {/* Top color bar */}
          <div className="h-2 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-stone-400" />
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900">Acme Federal Services</h3>
                <p className="text-sm text-stone-500">SDVOSB | CAGE: 7XY9Z | DUNS: 123456789</p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-bold text-stone-800 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Core Competencies
                </h4>
                <ul className="space-y-1 text-stone-600 ml-5">
                  <li className="list-disc">IT Infrastructure & Cloud Migration</li>
                  <li className="list-disc">Cybersecurity & Zero Trust Architecture</li>
                  <li className="list-disc">Program Management & Agile Delivery</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-800 mb-1.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-600" /> Past Performance
                </h4>
                <ul className="space-y-1 text-stone-600 ml-5">
                  <li className="list-disc">VA Enterprise Cloud, $4.2M, 2023-2026</li>
                  <li className="list-disc">DoD Cyber Ops Support, $1.8M, 2022-2025</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-800 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Differentiators
                </h4>
                <ul className="space-y-1 text-stone-600 ml-5">
                  <li className="list-disc">100% veteran workforce with active clearances</li>
                  <li className="list-disc">FedRAMP-authorized cloud environment</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-400 pt-2">
                <Phone className="w-3 h-3" /> (555) 123-4567
                <span className="mx-1">|</span>
                <Globe className="w-3 h-3" /> acmefederal.com
              </div>
            </div>

            {/* Brand color bar */}
            <div className="mt-6 pt-4 border-t border-stone-100">
              <p className="text-xs text-stone-400 mb-2 flex items-center gap-1">
                <Palette className="w-3 h-3" /> Extracted Brand Colors
              </p>
              <div className="flex gap-2">
                {["#059669", "#0284c7", "#1e1b4b", "#f59e0b"].map((color, i) => (
                  <div
                    key={color}
                    className="color-swatch"
                    style={{
                      backgroundColor: color,
                      animationDelay: `${0.8 + i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reserve height for absolute positioned steps */}
      {step !== 3 && <div className="h-[420px]" />}

      {/* Custom CSS */}
      <style jsx>{`
        /* ─── Pulse Rings ─── */
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid rgba(5, 150, 105, 0.3);
          animation: pulseExpand 2s ease-out infinite;
        }
        .pulse-ring-1 { width: 96px; height: 96px; animation-delay: 0s; }
        .pulse-ring-2 { width: 96px; height: 96px; animation-delay: 0.6s; }
        .pulse-ring-3 { width: 96px; height: 96px; animation-delay: 1.2s; }

        @keyframes pulseExpand {
          0% { width: 96px; height: 96px; opacity: 0.8; }
          100% { width: 200px; height: 200px; opacity: 0; }
        }

        /* ─── Waveform Bars ─── */
        .waveform-bar {
          width: 4px;
          background: #059669;
          border-radius: 2px;
          animation: waveform 0.8s ease-in-out infinite alternate;
        }
        @keyframes waveform {
          0% { height: 6px; opacity: 0.4; }
          50% { height: 32px; opacity: 1; }
          100% { height: 12px; opacity: 0.6; }
        }

        /* ─── AI Spinner ─── */
        .ai-spinner {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid #e7e5e4;
          border-top-color: #059669;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .ai-pulse {
          animation: aiPulse 1.5s ease-in-out infinite;
        }
        @keyframes aiPulse {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .ai-text-pulse {
          animation: textPulse 2s ease-in-out infinite;
        }
        @keyframes textPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .ai-line {
          opacity: 0;
          animation: lineAppear 0.5s ease-out forwards;
        }
        .ai-line-1 { animation-delay: 0.3s; }
        .ai-line-2 { animation-delay: 0.8s; }
        .ai-line-3 { animation-delay: 1.3s; }
        @keyframes lineAppear {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* ─── Document Reveal ─── */
        .doc-reveal {
          animation: docReveal 0.8s ease-out forwards;
        }
        @keyframes docReveal {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ─── Color Swatches ─── */
        .color-swatch {
          width: 40px;
          height: 24px;
          border-radius: 6px;
          opacity: 0;
          transform: scale(0);
          animation: swatchPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes swatchPop {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ─── Page ─── */
export default function CapabilityStatementPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
            <Mic className="w-4 h-4" /> Voice-Powered Document Builder
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Your Capability Statement.<br />
            Built by <span className="gradient-text">AI.</span> Powered by{" "}
            <span className="gradient-text">Your Voice.</span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Talk about your business for two minutes. Our AI writes a professional,
            government-ready capability statement with your brand colors and logo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-stone-200"
            >
              Build Your Statement <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <AnimatedMockup />
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              From voice to finished document in five simple steps.
            </p>
          </div>

          <div className="space-y-0">
            {[
              {
                icon: Mic,
                title: "Record or paste a transcript",
                desc: "Hit record and talk about your company -- who you are, what you do, and what makes you different. Or paste an existing write-up.",
              },
              {
                icon: Upload,
                title: "Upload your logo / enter your website",
                desc: "Drop in your company logo and provide your website URL so we can brand your statement.",
              },
              {
                icon: Palette,
                title: "AI extracts brand colors from your website",
                desc: "We crawl your website and automatically pull your primary brand colors so the document matches your identity.",
              },
              {
                icon: Sparkles,
                title: "AI writes your capability statement",
                desc: "Our AI structures your information into a professional capability statement with all the sections federal buyers expect.",
              },
              {
                icon: Download,
                title: "Download as PDF",
                desc: "Get a polished, print-ready PDF you can attach to proposals, send to contracting officers, or upload to SAM.gov.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 py-8 border-b border-stone-200 last:border-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      Step {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                  </div>
                  <p className="text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What Makes It Different ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              What Makes It <span className="gradient-text">Different</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Traditional capability statements cost a fortune and take forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional */}
            <div className="rounded-2xl border border-stone-200 p-8 bg-stone-50 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-black text-stone-400 mb-6">Traditional Way</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-600">Hire a writer or agency</p>
                    <p className="text-sm text-stone-400">Find someone who understands GovCon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-600">$500 - $2,000</p>
                    <p className="text-sm text-stone-400">Per document, plus revision costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-600">2 - 4 weeks</p>
                    <p className="text-sm text-stone-400">Interviews, drafts, back-and-forth revisions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CapturePilot */}
            <div className="rounded-2xl border-2 border-emerald-200 p-8 bg-emerald-50/50 relative overflow-hidden hover-lift">
              <div className="absolute top-4 right-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-emerald-700 mb-6">CapturePilot</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mic className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-800">Talk for 2 minutes</p>
                    <p className="text-sm text-stone-500">Or paste an existing description</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-800">$0 extra</p>
                    <p className="text-sm text-stone-500">Included in your CapturePilot plan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-800">Instant</p>
                    <p className="text-sm text-stone-500">Professional PDF in under a minute</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Included In Every Statement ─── */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Included In Every Statement
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Everything federal buyers and contracting officers expect to see.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Company Overview",
                desc: "Your mission, history, and core identity presented professionally.",
              },
              {
                icon: Sparkles,
                title: "Core Competencies",
                desc: "Key capabilities aligned with federal procurement language.",
              },
              {
                icon: Award,
                title: "Past Performance",
                desc: "Relevant contracts and project history that prove your track record.",
              },
              {
                icon: CheckCircle2,
                title: "Differentiators",
                desc: "What sets you apart from competitors in your NAICS codes.",
              },
              {
                icon: Hash,
                title: "NAICS Codes",
                desc: "Your industry classifications displayed clearly for buyers.",
              },
              {
                icon: Phone,
                title: "Contact Information",
                desc: "Professional contact details so COs can reach you instantly.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-stone-200 p-6 hover-lift"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-12 sm:p-16 text-white">
            <Mic className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Ready to build your capability statement?
            </h2>
            <p className="text-stone-400 text-lg mb-8 max-w-lg mx-auto">
              Sign up, hit record, and have a professional capability statement
              in under a minute. No writer needed.
            </p>
            <Link
              href={SIGNUP_URL}
              className="bg-white text-black px-8 py-4 rounded-full text-base font-bold hover:bg-stone-100 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Start Free — 30 Days <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-stone-500 mt-4">
              No credit card required
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
