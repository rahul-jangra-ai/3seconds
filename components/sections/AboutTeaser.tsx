"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, Target, Flame } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-fade-up", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 px-4 md:px-8 lg:px-12 bg-[#FAF6EE] text-[#121212] border-t border-black/8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Overline Badge */}
        <div className="about-fade-up flex items-center space-x-3 mb-8">
          <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] font-bold bg-black/5 text-black/80 rounded-full border border-black/10">
            01 // THE 3-SECOND HYPOTHESIS
          </span>
          <span className="w-12 h-[1px] bg-black/20" />
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <h2 className="about-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-syne uppercase tracking-tight leading-[1.05]">
              WHERE CONTENT ISN&apos;T NOISE —{" "}
              <span className="gradient-text-hook">IT&apos;S CULTURE.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="about-fade-up font-sans text-base md:text-lg text-text-dark-secondary leading-relaxed">
              Traditional advertising agencies spend 6 months planning a 60-second TV commercial that everyone skips. 
              We build cultural memes, lightning-fast vertical video hooks, and creator syndicates that people voluntarily watch, replay, and share with their friends.
            </p>

            <div className="about-fade-up">
              <Link
                href="/about"
                data-cursor="MANIFESTO"
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-hook-orange hover:text-black transition-colors"
              >
                <span>Read our Anti-Boring Manifesto</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars: Hook, Hold, Payoff */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: The Hook */}
          <div className="about-fade-up p-8 rounded-2xl bg-white border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-hook-orange/60 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-hook-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-black/40 uppercase tracking-widest mb-2">
              Second 00 — 03
            </div>
            <h3 className="font-syne text-2xl font-black uppercase tracking-tight mb-3 text-[#121212] group-hover:text-hook-orange transition-colors">
              The Pattern Interrupt
            </h3>
            <p className="font-sans text-sm text-text-dark-secondary leading-relaxed">
              Auditory disruptors, unexpected visual curiosity gaps, and surrealist framing that physically prevents the thumb from flicking upward.
            </p>
          </div>

          {/* Card 2: The Hold */}
          <div className="about-fade-up p-8 rounded-2xl bg-white border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-electric-amber/60 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-electric-amber flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-black/40 uppercase tracking-widest mb-2">
              Second 03 — 15
            </div>
            <h3 className="font-syne text-2xl font-black uppercase tracking-tight mb-3 text-[#121212] group-hover:text-electric-amber transition-colors">
              The Dopamine Loop
            </h3>
            <p className="font-sans text-sm text-text-dark-secondary leading-relaxed">
              Rhythmic micro-cuts every 1.4 seconds, dynamic kinetic subtitles, and continuous pacing engineered for algorithmic completion scores.
            </p>
          </div>

          {/* Card 3: The Payoff */}
          <div className="about-fade-up p-8 rounded-2xl bg-white border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-hook-orange/60 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-hook-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <div className="font-mono text-xs text-black/40 uppercase tracking-widest mb-2">
              Second 15 — 30+
            </div>
            <h3 className="font-syne text-2xl font-black uppercase tracking-tight mb-3 text-[#121212] group-hover:text-hook-orange transition-colors">
              The Viral Spark
            </h3>
            <p className="font-sans text-sm text-text-dark-secondary leading-relaxed">
              A high-relatability meme twist, brand punchline, or debate prompt in the comments that turns viewers into organic distribution channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
