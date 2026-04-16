"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (typeof window !== "undefined" && error?.digest) {
      console.error("Page error:", error.digest, error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Something broke</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6">
          We hit an unexpected error.
        </h1>
        <p className="text-lg text-stone-600 mb-8">
          The page couldn&apos;t load. Try again, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-stone-800 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-black underline underline-offset-4 hover:text-stone-700 transition"
          >
            Back to homepage
          </Link>
        </div>
        {error?.digest && (
          <p className="text-xs text-stone-400 mt-6">Ref: {error.digest}</p>
        )}
      </div>
    </div>
  );
}
