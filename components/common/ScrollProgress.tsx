"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { lenis } = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalScroll) * 100)));
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // SVG circular perimeter metrics
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="TOP"
      title="Scroll to Top"
      aria-label="Scroll to Top"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-14 h-14 rounded-full bg-obsidian/80 dark:bg-warm/80 text-white dark:text-obsidian backdrop-blur-md border border-white/20 dark:border-black/20 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group focus:outline-none"
    >
      <svg className="w-full h-full -rotate-90 pointer-events-none absolute inset-0">
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-20"
          fill="none"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="#FF5722"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>

      <div className="relative z-10 flex items-center justify-center font-mono text-xs font-bold">
        {isHovered ? (
          <ArrowUp className="w-4 h-4 text-hook-orange animate-bounce" />
        ) : (
          <span className="text-[11px] font-mono tracking-tighter text-white dark:text-obsidian group-hover:text-hook-orange transition-colors">
            {progress}%
          </span>
        )}
      </div>
    </button>
  );
}
