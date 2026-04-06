"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight, GripVertical, Paperclip, Bell, Users,
  TrendingUp, FileDown, CheckCircle2, ChevronRight,
  Search, ClipboardList, Send, Trophy, Eye,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;

/* ------------------------------------------------------------------ */
/*  Kanban mock data                                                   */
/* ------------------------------------------------------------------ */

interface KanbanCard {
  id: string;
  title: string;
  agency: string;
  value: string;
  days: number;
}

const columns: {
  name: string;
  color: string;
  bg: string;
  dot: string;
  cards: KanbanCard[];
}[] = [
  {
    name: "Discovered",
    color: "text-stone-600",
    bg: "bg-stone-100",
    dot: "bg-stone-400",
    cards: [
      { id: "d1", title: "IT Help Desk Support", agency: "Dept. of Veterans Affairs", value: "$4.2M", days: 38 },
      { id: "d2", title: "Janitorial Services — Bldg 9", agency: "GSA", value: "$890K", days: 25 },
      { id: "d3", title: "Cybersecurity Assessment", agency: "DHS", value: "$1.7M", days: 42 },
    ],
  },
  {
    name: "Reviewing",
    color: "text-blue-600",
    bg: "bg-blue-50",
    dot: "bg-blue-400",
    cards: [
      { id: "r1", title: "Cloud Migration Services", agency: "US Air Force", value: "$3.1M", days: 19 },
      { id: "r2", title: "Facilities Maintenance", agency: "US Army Corps", value: "$2.4M", days: 14 },
    ],
  },
  {
    name: "Bidding",
    color: "text-amber-600",
    bg: "bg-amber-50",
    dot: "bg-amber-400",
    cards: [
      { id: "b1", title: "Network Infrastructure", agency: "DISA", value: "$5.6M", days: 9 },
      { id: "b2", title: "Staff Augmentation", agency: "HHS", value: "$1.2M", days: 7 },
    ],
  },
  {
    name: "Submitted",
    color: "text-purple-600",
    bg: "bg-purple-50",
    dot: "bg-purple-400",
    cards: [
      { id: "s1", title: "Data Analytics Platform", agency: "Dept. of Commerce", value: "$2.8M", days: 3 },
    ],
  },
  {
    name: "Won",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    dot: "bg-emerald-500",
    cards: [
      { id: "w1", title: "Security Guard Services", agency: "Federal Protective Service", value: "$1.9M", days: 0 },
    ],
  },
];

/* The card that animates from Reviewing to Bidding */
const movingCard: KanbanCard = {
  id: "moving",
  title: "Cloud Migration Services",
  agency: "US Air Force",
  value: "$3.1M",
  days: 19,
};

/* ------------------------------------------------------------------ */
/*  Pipeline stages                                                    */
/* ------------------------------------------------------------------ */

const stages = [
  {
    icon: Search,
    title: "Discovery",
    desc: "New opportunities from SAM.gov are automatically matched to your NAICS codes, certifications, and past performance. Hot matches land here first.",
    color: "text-stone-600",
    bg: "bg-stone-100",
  },
  {
    icon: Eye,
    title: "Review",
    desc: "Dive into the details. Read the full solicitation, check incumbent data, assess competitive landscape, and decide if it is worth pursuing.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: ClipboardList,
    title: "Bid Preparation",
    desc: "Build your proposal with AI-assisted writing, attach your capability statement, assign team members, and track compliance requirements.",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    icon: Send,
    title: "Submitted",
    desc: "Track submitted proposals, set follow-up reminders, and monitor status updates. Never lose track of an active bid again.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Trophy,
    title: "Won / Lost",
    desc: "Record outcomes, capture lessons learned, and build your win/loss analytics. Every result makes your future scoring smarter.",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

/* ------------------------------------------------------------------ */
/*  Feature cards                                                      */
/* ------------------------------------------------------------------ */

const features = [
  { icon: GripVertical, title: "Drag & Drop", desc: "Move deals between stages with a simple drag. Update status instantly across your whole team." },
  { icon: Paperclip, title: "Notes & Attachments", desc: "Pin notes, upload documents, and link capability statements directly to each opportunity." },
  { icon: Bell, title: "Deadline Alerts", desc: "Automatic reminders at 30, 14, 7, and 1 day before every submission deadline. Never miss a bid." },
  { icon: Users, title: "Team Collaboration", desc: "Assign team members, leave comments, and see who is working on what in real time." },
  { icon: TrendingUp, title: "Win/Loss Tracking", desc: "Track outcomes over time. See your win rate by agency, NAICS code, contract size, and more." },
  { icon: FileDown, title: "Export & Reports", desc: "Export pipeline data to CSV. Generate weekly status reports for leadership and stakeholders." },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PipelinePage() {
  const [mounted, setMounted] = useState(false);
  const [cardMoved, setCardMoved] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setCardMoved(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ---------- Custom animations ---------- */}
      <style>{`
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wonGlow {
          0%, 100% { box-shadow: 0 0 12px 2px rgba(16,185,129,0.25); }
          50%      { box-shadow: 0 0 24px 6px rgba(16,185,129,0.45); }
        }
        @keyframes moveCard {
          0%   { opacity: 1; transform: translateX(0); }
          30%  { opacity: 0.7; transform: translateX(20px) scale(1.04); }
          50%  { opacity: 0; transform: translateX(60px) scale(1.06); }
          100% { opacity: 0; transform: translateX(60px) scale(1.06); }
        }
        @keyframes appearCard {
          0%   { opacity: 0; transform: translateX(-40px) scale(1.04); }
          60%  { opacity: 0; transform: translateX(-40px) scale(1.04); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .kanban-slide-in {
          animation: slideInFromLeft 0.5s ease-out forwards;
          opacity: 0;
        }
        .kanban-card-up {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }
        .won-glow {
          animation: wonGlow 2s ease-in-out infinite;
        }
        .card-moving-out {
          animation: moveCard 1.2s ease-in-out forwards;
        }
        .card-moving-in {
          animation: appearCard 1.2s ease-in-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* ==================== HERO ==================== */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in-up">
            <ClipboardList className="w-4 h-4" /> Deal Pipeline
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Track Every Deal From<br />
            Discovery to <span className="gradient-text">Award.</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            A visual Kanban board built for government contracting. Move opportunities
            through your pipeline, hit every deadline, and grow your win rate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== KANBAN MOCKUP ==================== */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-6 overflow-x-auto">
            <div className="flex gap-4 min-w-[900px]">
              {columns.map((col, colIdx) => (
                <div
                  key={col.name}
                  className={`flex-1 min-w-[170px] rounded-xl p-3 ${col.bg} ${mounted ? "kanban-slide-in" : "opacity-0"}`}
                  style={{ animationDelay: `${colIdx * 0.15}s` }}
                >
                  {/* Column header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
                    <span className={`text-xs font-bold uppercase tracking-wide ${col.color}`}>
                      {col.name}
                    </span>
                    <span className="text-[10px] text-stone-400 ml-auto font-medium">
                      {col.name === "Bidding" && cardMoved
                        ? col.cards.length + 1
                        : col.name === "Reviewing" && cardMoved
                          ? col.cards.length - 1
                          : col.cards.length}
                    </span>
                  </div>

                  {/* Cards */}
                  <div className="space-y-2">
                    {col.cards.map((card, cardIdx) => {
                      const isMoving = card.id === "r1" && col.name === "Reviewing";
                      const isWon = col.name === "Won";

                      return (
                        <div
                          key={card.id}
                          className={`
                            bg-white rounded-lg p-3 border border-stone-200/80 shadow-sm text-left
                            ${mounted ? "kanban-card-up" : "opacity-0"}
                            ${isWon ? "won-glow border-emerald-300" : ""}
                            ${isMoving && cardMoved ? "card-moving-out" : ""}
                          `}
                          style={{ animationDelay: `${colIdx * 0.15 + 0.3 + cardIdx * 0.12}s` }}
                        >
                          <p className="text-xs font-semibold text-stone-800 leading-tight mb-1">{card.title}</p>
                          <p className="text-[10px] text-stone-400 mb-2">{card.agency}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-stone-600">{card.value}</span>
                            {card.days > 0 ? (
                              <span className={`text-[10px] font-medium ${card.days <= 7 ? "text-red-500" : card.days <= 14 ? "text-amber-500" : "text-stone-400"}`}>
                                {card.days}d left
                              </span>
                            ) : isWon ? (
                              <span className="text-[10px] font-medium text-emerald-500">Awarded</span>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}

                    {/* Card appearing in Bidding column after move */}
                    {col.name === "Bidding" && cardMoved && (
                      <div
                        className="bg-white rounded-lg p-3 border border-blue-200 shadow-sm text-left card-moving-in"
                      >
                        <p className="text-xs font-semibold text-stone-800 leading-tight mb-1">{movingCard.title}</p>
                        <p className="text-[10px] text-stone-400 mb-2">{movingCard.agency}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-stone-600">{movingCard.value}</span>
                          <span className="text-[10px] font-medium text-amber-500">{movingCard.days}d left</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PIPELINE STAGES ==================== */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Pipeline Stages
          </h2>
          <p className="text-center text-stone-500 mb-16 max-w-xl mx-auto">
            Every opportunity follows a clear path. Know exactly where every deal stands at a glance.
          </p>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-stone-200" />

            <div className="space-y-10">
              {stages.map((stage, i) => (
                <div key={stage.title} className="relative flex items-start gap-6">
                  {/* Icon circle */}
                  <div className={`relative z-10 w-12 h-12 rounded-xl ${stage.bg} flex items-center justify-center flex-shrink-0`}>
                    <stage.icon className={`w-5 h-5 ${stage.color}`} />
                  </div>
                  {/* Text */}
                  <div className="pt-1">
                    <h3 className="text-lg font-bold mb-1">{stage.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{stage.desc}</p>
                  </div>
                  {/* Arrow to next */}
                  {i < stages.length - 1 && (
                    <ChevronRight className="absolute -bottom-7 left-[18px] w-5 h-5 text-stone-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES GRID ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Everything You Need to <span className="gradient-text">Close Deals</span>
          </h2>
          <p className="text-center text-stone-500 mb-16 max-w-xl mx-auto">
            Built-in tools designed specifically for government contract capture management.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="border border-stone-200 rounded-xl p-6 hover-lift">
                <div className="w-11 h-11 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-stone-700" />
                </div>
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
            <div>
              <p className="text-5xl font-black text-emerald-400">47</p>
              <p className="text-stone-400 mt-2">Average deals tracked per user</p>
            </div>
            <div>
              <p className="text-5xl font-black text-emerald-400">23%</p>
              <p className="text-stone-400 mt-2">Higher win rate with pipeline management</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Stop Losing Deals to Disorganization.
          </h2>
          <p className="text-lg text-stone-500 mb-8">
            Free for 30 days. See every opportunity in one visual pipeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={SIGNUP_URL}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-bold hover:bg-stone-800 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
