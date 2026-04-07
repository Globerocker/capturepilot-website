import Link from "next/link";
import type { Metadata } from "next";
import {
  Building2, ArrowRight, CheckCircle2, Target, FileText,
  BarChart3, Users, Shield, Layers, Clock, Zap,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CALENDLY_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";

export const metadata: Metadata = {
  title: "CapturePilot for Government Contracting Agencies & Consultants",
  description: "Manage multiple clients' federal contracting pipelines from one dashboard. White-label consulting portal for GovCon agencies.",
};

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <Building2 className="w-4 h-4" /> For GovCon Consulting Firms
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Scale Your<br />
            Consulting <span className="gradient-text">Practice.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10">
            Manage multiple clients&apos; federal contracting pipelines from one platform.
            Client portal, admin CRM, automated matching, and AI proposals — all white-label ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={CALENDLY_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg" target="_blank" rel="noopener noreferrer">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">
            Everything You Need to Run a GovCon Practice
          </h2>
          <p className="text-lg text-stone-500 text-center mb-16 max-w-2xl mx-auto">
            Stop managing spreadsheets. Give your clients a branded portal while you manage everything from a single admin dashboard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Users, title: "Client Portal", desc: "Each client gets their own login with matched opportunities, deal pipeline, task list, and document uploads. They see what you want them to see." },
              { icon: Layers, title: "Admin CRM", desc: "Manage all clients from one dashboard. Create accounts, assign tasks, track activity, run enrichment, and monitor pipelines across your entire book." },
              { icon: Target, title: "Automated Matching", desc: "Set up a client's NAICS codes, certs, and target states once. Their portal automatically fills with scored, relevant opportunities." },
              { icon: FileText, title: "AI Proposal Writer", desc: "Generate proposal drafts for any client from their matched opportunities. Technical approach, past performance, compliance matrix." },
              { icon: BarChart3, title: "Market Intelligence", desc: "Pull spending trends, top agencies, and competitor analysis for each client's industry. Impress them with data they can't get elsewhere." },
              { icon: Shield, title: "Competitor Tracking", desc: "Track each client's competitors: their contract history, current awards, and where they're winning. Know the landscape." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-stone-200">
                <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">
            How It Works for Agencies
          </h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Onboard a Client", desc: "Enter their company info, NAICS codes, certifications, and target states. We enrich their profile automatically — SAM registration, capability keywords, industry classification." },
              { step: "2", title: "Opportunities Match Automatically", desc: "Our scoring engine runs daily. Your client's portal fills with ranked, scored opportunities. Hot matches surface first. Expired opps disappear." },
              { step: "3", title: "Manage from Admin Dashboard", desc: "Assign tasks, upload documents, track competitors, run market intelligence. Your client sees their portal — you see everything." },
              { step: "4", title: "Draft Proposals with AI", desc: "When a client wants to bid, click one button. AI generates a proposal first draft from the solicitation. Your team refines, polishes, and submits." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-stone-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Custom Pricing for Agencies</h2>
          <p className="text-lg text-stone-500 mb-8">
            Pricing depends on number of clients and features needed. Most agencies pay $500-2,000/month.
            We&apos;ll build a package that works for your practice.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-stone-200 mb-8">
            <p className="font-bold text-lg mb-4">What&apos;s included:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {[
                "Unlimited client portals",
                "Admin CRM dashboard",
                "Automated opportunity matching",
                "AI Proposal Writer",
                "Market intelligence & analytics",
                "Competitor tracking per client",
                "Document management",
                "Task management & activity log",
                "Email notifications",
                "Priority support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Link href={CALENDLY_URL} className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg" target="_blank" rel="noopener noreferrer">
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
