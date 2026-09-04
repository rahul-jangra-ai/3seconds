"use client";

import React, { useEffect, useState } from "react";

export function VerticalScrollRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      setProgress((window.scrollY / maxScroll) * 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 right-1 w-[2px] h-full z-[90] pointer-events-none hidden lg:block">
      <div className="w-full h-full bg-black/5 dark:bg-white/10" />
      <div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-hook-orange to-electric-amber transition-all duration-75"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
