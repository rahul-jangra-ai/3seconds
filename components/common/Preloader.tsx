"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState<"03" | "02" | "01" | "HOOKED">("03");
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user already saw preloader in this session (optional, but keep it active for first impression)
    const hasSeen = sessionStorage.getItem("3seconds_preloader_seen");
    if (hasSeen) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const duration = 2600; // ~2.6 seconds total for punchy tempo
    const intervalTime = 26;
    let current = 0;

    const interval = setInterval(() => {
      current += intervalTime;
      const pct = Math.min(100, Math.round((current / duration) * 100));
      setProgress(pct);

      if (pct < 33) {
        setStage("03");
      } else if (pct < 66) {
        setStage("02");
      } else if (pct < 90) {
        setStage("01");
      } else {
        setStage("HOOKED");
      }

      if (current >= duration) {
        clearInterval(interval);
        sessionStorage.setItem("3seconds_preloader_seen", "true");
        triggerExitSequence();
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const triggerExitSequence = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        onComplete?.();
      },
    });

    tl.to(counterRef.current, {
      scale: 1.4,
      opacity: 0,
      duration: 0.35,
      ease: "power4.in",
    })
      .to(
        topPanelRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "expo.inOut",
        },
        "-=0.1"
      )
      .to(
        bottomPanelRef.current,
        {
          yPercent: 100,
          duration: 0.8,
          ease: "expo.inOut",
        },
        "<"
      );
  };

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1000] pointer-events-auto flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Top Split Curtain Panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0A0A0A] border-b border-white/10 flex items-end justify-center pb-8"
      >
        <div className="text-white/20 text-xs font-mono tracking-[0.3em] uppercase">
          3seconds media // viral hook engine
        </div>
      </div>

      {/* Bottom Split Curtain Panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0A0A0A] border-t border-white/10 flex items-start justify-center pt-8"
      >
        <div className="text-white/20 text-xs font-mono tracking-[0.3em] uppercase">
          est. 2026 // mumbai • bengaluru
        </div>
      </div>

      {/* Center Counter Content */}
      <div
        ref={counterRef}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="relative mb-6">
          <svg className="w-36 h-36 -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="60"
              stroke="#222"
              strokeWidth="4"
              fill="transparent"
            />
            <circle
              cx="72"
              cy="72"
              r="60"
              stroke="#FF5722"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 60}
              strokeDashoffset={2 * Math.PI * 60 - (progress / 100) * (2 * Math.PI * 60)}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-75"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`font-mono font-black tracking-tighter transition-all duration-150 ${
                stage === "HOOKED"
                  ? "text-3xl text-hook-orange animate-pulse"
                  : "text-5xl text-white"
              }`}
            >
              {stage}
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-hook-orange">
            {stage === "HOOKED" ? "CAPTURING AUDIENCE..." : "CALIBRATING ATTENTION SPAN..."}
          </p>
          <p className="font-mono text-[10px] text-white/40">{progress}% LOADED</p>
        </div>
      </div>
    </div>
  );
}
