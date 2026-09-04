"use client";

import React, { useRef, useEffect } from "react";
import { Clock, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TimelineMilestone {
  year: string;
  badge: string;
  title: string;
  examples: string;
  description: string;
  tag: string;
}

const milestones: TimelineMilestone[] = [
  {
    year: "2012",
    badge: "EPOCH 01",
    title: "The Dawn of Global Virality",
    examples: "Gangnam Style & Harlem Shake",
    description:
      "The first time algorithmic internet choreography shattered legacy broadcast TV records. The world learned that infectious hooks cross borders effortlessly.",
    tag: "30s+ Attention Window",
  },
  {
    year: "2015",
    badge: "EPOCH 02",
    title: "The 6-Second Vine Revolution",
    examples: "Vine & Peak Micro-Comedy",
    description:
      "Vine proved that an entire narrative arc—setup, conflict, and comedic payoff—could be delivered in under 6 seconds. Modern pacing was born.",
    tag: "6s Attention Window",
  },
  {
    year: "2018",
    badge: "EPOCH 03",
    title: "The Relatable Brown Boy & Meme Surge",
    examples: "Sacred Games & Zakir Khan ('Yahan Main Pighal Gaya')",
    description:
      "Local Indian pop culture transformed into universal meme templates. Screenshots and subtitle frames became brand currency.",
    tag: "Static Meme Dominance",
  },
  {
    year: "2020",
    badge: "EPOCH 04",
    title: "The Lockdown Hyper-Viral Era",
    examples: "Rasode Me Kaun Tha & Binod",
    description:
      "Sound-remixes and single-word comments dominating national news cycles. The algorithm rewarded high-tempo auditory repetition.",
    tag: "Sound Remix Wave",
  },
  {
    year: "2022",
    badge: "EPOCH 05",
    title: "The Absurdist Era",
    examples: "Puneet Superstar & Kacha Badam",
    description:
      "Raw, unpolished, user-generated eccentricity decisively out-performed multi-million dollar corporate brand commercials.",
    tag: "Anti-Aesthetic Win",
  },
  {
    year: "2024",
    badge: "EPOCH 06",
    title: "The Micro-Hook Renaissance",
    examples: "So Beautiful So Elegant, Chin Tapak, Chill Guy",
    description:
      "The 3-second audio hook became the ultimate algorithmic catalyst. The opening 3 seconds determined 95% of total reach.",
    tag: "3s Hook Window",
  },
  {
    year: "2026+",
    badge: "THE FUTURE",
    title: "The 3seconds Syndicate Era",
    examples: "AI-Synthesized Viral Engineering",
    description:
      "Predictive hook analytics, real-time cultural sentiment mapping, and zero-dropoff retention architecture engineered by 3seconds.",
    tag: "Sub-Second Neuromarketing",
  },
];

export function ViralEvolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Calculate total horizontal scroll distance
    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      return -(trackWidth - window.innerWidth + 120);
    };

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1.2,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`;
          }
        },
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#FAF6EE] text-[#121212] flex flex-col justify-between py-12 border-t border-black/8"
    >
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between z-10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-3">
            <Clock className="w-3.5 h-3.5 text-hook-orange" />
            <span>02 // CULTURAL ARCHEOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-syne uppercase tracking-tight">
            THE EVOLUTION OF THE <span className="gradient-text-hook">VIRAL HOOK</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-text-dark-secondary mt-2">
            How human attention contracted from 30 minutes to 3 seconds.
          </p>
        </div>

        <div className="hidden md:flex items-center space-x-3 text-xs font-mono text-black/50">
          <span>DRAG / SCROLL TO TRAVEL TIME</span>
          <div className="w-8 h-[2px] bg-black/20" />
        </div>
      </div>

      {/* Progress Rail */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 my-3">
        <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-hook-orange to-electric-amber w-0 transition-all duration-75"
          />
        </div>
      </div>

      {/* Horizontal Track of Milestone Cards */}
      <div className="relative w-full flex-1 flex items-center overflow-visible pl-6 md:pl-16">
        <div
          ref={trackRef}
          className="flex items-center space-x-6 md:space-x-8 will-change-transform pr-24"
        >
          {milestones.map((m) => {
            const isFuture = m.year.includes("2026");
            return (
              <div
                key={m.year}
                data-cursor={isFuture ? "FUTURE" : "HOOK"}
                className={`w-[320px] sm:w-[380px] md:w-[440px] flex-shrink-0 p-8 rounded-3xl transition-all duration-300 ${
                  isFuture
                    ? "bg-[#0A0A0A] text-white border-2 border-hook-orange shadow-[0_16px_50px_rgba(255,87,34,0.3)] scale-105"
                    : "bg-white text-[#121212] border border-black/10 shadow-md hover:border-black/30 hover:shadow-xl"
                }`}
              >
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`font-mono font-black text-3xl md:text-4xl tracking-tighter ${
                      isFuture ? "text-hook-orange" : "text-[#121212]"
                    }`}
                  >
                    {m.year}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold ${
                      isFuture
                        ? "bg-hook-orange text-white"
                        : "bg-black/5 text-black/70 border border-black/10"
                    }`}
                  >
                    {m.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-syne font-black text-xl md:text-2xl uppercase tracking-tight mb-2 ${
                    isFuture ? "text-white" : "text-[#121212]"
                  }`}
                >
                  {m.title}
                </h3>

                {/* Cultural Examples */}
                <div
                  className={`font-mono text-xs mb-4 flex items-center space-x-1.5 ${
                    isFuture ? "text-electric-amber" : "text-hook-orange"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="font-semibold">{m.examples}</span>
                </div>

                {/* Description */}
                <p
                  className={`font-sans text-sm leading-relaxed mb-6 ${
                    isFuture ? "text-white/80" : "text-text-dark-secondary"
                  }`}
                >
                  {m.description}
                </p>

                {/* Tag Pill */}
                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${
                      isFuture ? "text-hook-orange" : "text-black/50"
                    }`}
                  >
                    {m.tag}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isFuture ? "bg-hook-orange animate-ping" : "bg-black/20"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between text-xs font-mono text-black/40">
        <span>INTERNET CULTURE ARCHIVE</span>
        <span>THE NEXT 3 SECONDS ARE YOURS</span>
      </div>
    </section>
  );
}
