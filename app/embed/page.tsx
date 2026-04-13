"use client";

import { ArrowRight } from "lucide-react";

const SIGNUP_URL = "https://app.capturepilot.com/signup";

export default function EmbedPage() {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col">
      {/* Walkthrough iframe */}
      <div className="flex-1 relative">
        <iframe
          src="/walkthrough"
          className="absolute inset-0 w-full h-full border-0"
          title="CapturePilot Product Walkthrough"
          allow="autoplay"
        />
      </div>

      {/* Powered by footer */}
      <div className="bg-stone-900 border-t border-stone-800 px-4 py-3 flex items-center justify-between">
        <a
          href="https://www.capturepilot.com"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors"
        >
          <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">CP</span>
          </div>
          <span className="text-xs font-medium">
            Powered by <span className="text-emerald-400">CapturePilot</span>
          </span>
        </a>
        <a
          href={SIGNUP_URL}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Start Free
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
