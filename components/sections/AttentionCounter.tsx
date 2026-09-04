"use client";

import React, { useRef, useEffect, useState } from "react";
import { Flame, Globe, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BenchmarkEntity {
  rank: string;
  name: string;
  category: string;
  targetCount: number;
  suffix?: string;
  flag: string;
  isSyndicate?: boolean;
}

const entities: BenchmarkEntity[] = [
  {
    rank: "#01",
    name: "India",
    category: "Sovereign Population",
    targetCount: 1428677135,
    flag: "🇮🇳",
  },
  {
    rank: "#02",
    name: "China",
    category: "Sovereign Population",
    targetCount: 1412365135,
    flag: "🇨🇳",
  },
  {
    rank: "#03",
    name: "3seconds Media Syndicate",
    category: "Monthly Active Hook Views",
    targetCount: 1350000000,
    suffix: "+",
    flag: "🔥",
    isSyndicate: true,
  },
  {
    rank: "#04",
    name: "United States",
    category: "Sovereign Population",
    targetCount: 331875135,
    flag: "🇺🇸",
  },
  {
    rank: "#05",
    name: "Indonesia",
    category: "Sovereign Population",
    targetCount: 273756135,
    flag: "🇮🇩",
  },
];

export function AttentionCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => {
        const dummy = { progress: 0 };
        gsap.to(dummy, {
          progress: 1,
          duration: 2.2,
          ease: "power3.out",
          onUpdate: () => {
            const nextCounts = entities.map((e) =>
              Math.floor(e.targetCount * dummy.progress)
            );
            setCounts(nextCounts);
          },
        });
      },
    });

    return () => trigger.kill();
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US");
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 px-4 md:px-8 lg:px-12 bg-[#FAF6EE] text-[#121212] border-t border-black/8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
              <Globe className="w-3.5 h-3.5 text-hook-orange" />
              <span>THE GLOBAL ATTENTION INDEX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-syne uppercase tracking-tight leading-[1.05]">
              DID YOU KNOW?
            </h2>
            <p className="mt-3 font-sans text-lg md:text-xl text-text-dark-secondary max-w-2xl">
              Our monthly attention syndication would rank as the{" "}
              <strong className="text-hook-orange">3rd most populous nation</strong> on Earth.
            </p>
          </div>

          <div className="flex items-center space-x-2 font-mono text-xs text-black/60 bg-white px-4 py-2 rounded-xl border border-black/10 shadow-sm">
            <TrendingUp className="w-4 h-4 text-hook-orange" />
            <span>Audited across IG Reels, YouTube Shorts & TikTok</span>
          </div>
        </div>

        {/* Benchmarking Leaderboard */}
        <div className="space-y-3.5">
          {entities.map((item, idx) => {
            const isSyndicate = item.isSyndicate;
            return (
              <div
                key={item.name}
                data-cursor={isSyndicate ? "LEADER" : undefined}
                className={`relative flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 rounded-2xl transition-all duration-300 ${
                  isSyndicate
                    ? "bg-[#121212] text-white border-2 border-hook-orange shadow-[0_12px_40px_rgba(255,87,34,0.25)] scale-[1.02] z-10"
                    : "bg-white text-[#121212] border border-black/10 hover:border-black/30 shadow-sm"
                }`}
              >
                {/* Left Cluster: Rank + Name */}
                <div className="flex items-center space-x-4 md:space-x-6 mb-3 md:mb-0">
                  <span
                    className={`font-mono text-base md:text-lg font-bold ${
                      isSyndicate ? "text-hook-orange" : "text-black/40"
                    }`}
                  >
                    {item.rank}
                  </span>

                  <span className="text-2xl md:text-3xl select-none">{item.flag}</span>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h3
                        className={`font-syne font-black text-lg md:text-2xl uppercase tracking-tight ${
                          isSyndicate ? "text-white flex items-center space-x-2" : "text-[#121212]"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isSyndicate && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-hook-orange text-white">
                            VERIFIED
                          </span>
                        )}
                      </h3>
                    </div>
                    <p
                      className={`font-mono text-xs uppercase tracking-wider ${
                        isSyndicate ? "text-white/60" : "text-black/50"
                      }`}
                    >
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Right Cluster: Live Counter */}
                <div className="text-left md:text-right">
                  <div
                    className={`font-mono font-black text-2xl md:text-3xl lg:text-4xl tracking-tighter ${
                      isSyndicate
                        ? "text-hook-orange drop-shadow-[0_0_12px_rgba(255,87,34,0.5)]"
                        : "text-[#121212]"
                    }`}
                  >
                    {formatNumber(counts[idx])}
                    {item.suffix}
                  </div>
                  <div
                    className={`font-mono text-[11px] uppercase tracking-widest ${
                      isSyndicate ? "text-white/40" : "text-black/40"
                    }`}
                  >
                    {isSyndicate ? "MONTHLY HOOK IMPRESSIONS" : "CITIZENS"}
                  </div>
                </div>

                {/* Pulse Ring for Syndicate */}
                {isSyndicate && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-hook-orange animate-ping" />
                )}
              </div>
            );
          })}
        </div>

        {/* Explanatory Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-black/50 gap-4">
          <p>Data source: UN Population Division & 3seconds Internal Media Analytics Engine.</p>
          <div className="flex items-center space-x-2 text-hook-orange font-bold">
            <Flame className="w-4 h-4" />
            <span>Average 3-second hook retention rate: 84.7%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
