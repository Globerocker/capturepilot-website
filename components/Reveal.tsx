"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Dir = "up" | "down" | "left" | "right" | "scale" | "none";

const OFFSET: Record<Dir, string> = {
  up: "translateY(34px)",
  down: "translateY(-34px)",
  left: "translateX(-46px)",
  right: "translateX(46px)",
  scale: "scale(0.94)",
  none: "none",
};

/**
 * Scroll-reveal wrapper. Fades + slides children in from a direction the first
 * time they enter the viewport. GPU-friendly (opacity + transform only),
 * respects prefers-reduced-motion, and never blocks content if JS is slow
 * (it starts hidden only when the observer is wired).
 */
export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  duration = 750,
  threshold = 0.15,
  className = "",
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : OFFSET[dir],
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(.16,.84,.44,1)`,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
