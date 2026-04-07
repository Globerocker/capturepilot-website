"use client";

import Link from "next/link";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { BookOpen, ArrowRight, Clock, Tag } from "lucide-react";

const POSTS = [
  { slug: "government-contracting-101", title: "Government Contracting 101: The Complete Beginner's Guide", category: "Getting Started", readTime: "15 min", description: "Everything you need to know about selling to the federal government. NAICS codes, SAM.gov, set-asides, contract types, and step-by-step instructions." },
  { slug: "naics-codes-explained", title: "NAICS Codes Explained: Find the Right Codes for Your Business", category: "Getting Started", readTime: "10 min", description: "What NAICS codes are, why they matter, how to find yours, and the top codes for small business government contractors." },
  { slug: "set-aside-programs", title: "Government Set-Aside Programs: Your Unfair Advantage", category: "Set-Asides", readTime: "12 min", description: "Complete guide to 8(a), SDVOSB, WOSB, EDWOSB, HUBZone, and SDB set-aside programs with eligibility requirements." },
  { slug: "capability-statement-guide", title: "How to Write a Capability Statement That Wins Contracts", category: "Marketing", readTime: "10 min", description: "The 6 essential sections, design tips, common mistakes, and how AI can build yours in minutes." },
  { slug: "sam-registration-guide", title: "SAM.gov Registration: Step-by-Step Guide (2026)", category: "Getting Started", readTime: "12 min", description: "Complete walkthrough of SAM.gov registration. Prerequisites, 8-step process, common issues, and renewal requirements." },
  { slug: "proposal-writing-tips", title: "10 Government Proposal Writing Tips That Actually Win Contracts", category: "Proposals", readTime: "14 min", description: "Proven tips from compliance matrices to pricing strategy. Plus how AI can help you draft faster." },
];

export default function BlogPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-6 bg-stone-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" /> GovCon Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Learn Government<br />Contracting
            </h1>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">
              Guides, strategies, and insights for small businesses breaking into federal contracting. Written by GovCon practitioners, not AI fluff.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6">
              {POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      <Tag className="w-3 h-3 inline mr-1" />{post.category}
                    </span>
                    <span className="text-xs text-stone-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime} read
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="text-sm font-bold text-emerald-600 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
