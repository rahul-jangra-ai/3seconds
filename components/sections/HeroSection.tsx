"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, ArrowDown, Sparkles } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Reveal animation
    const words = headlineRef.current?.querySelectorAll(".hero-word");
    if (words) {
      gsap.fromTo(
        words,
        { y: 140, opacity: 0, rotate: 3 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.08,
          duration: 1.1,
          ease: "power4.out",
          delay: 0.2,
        }
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const node = heroRef.current;
    node?.addEventListener("mousemove", handleMouseMove);
    return () => node?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 md:pt-40 pb-20 px-4 md:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-[#FAF6EE] text-[#121212] transition-colors duration-500"
    >
      {/* Background Decorative Ambient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(18,18,18,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Floating Parallax Vector Doodles */}
      {/* 1. Rocket Doodle */}
      <div
        className="absolute top-28 right-8 md:top-36 md:right-24 pointer-events-none transition-transform duration-200 ease-out z-20"
        style={{
          transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0) rotate(${mousePos.x * 15 + 12}deg)`,
        }}
      >
        <svg
          className="w-14 h-14 md:w-20 md:h-20 text-hook-orange drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M50 15 C35 30 25 55 25 75 L35 75 L42 62 L58 62 L65 75 L75 75 C75 55 65 30 50 15 Z" fill="#FFEFEA" />
          <circle cx="50" cy="40" r="8" fill="#FF5722" stroke="none" />
          <path d="M35 75 C35 90 45 95 50 85 C55 95 65 90 65 75" fill="#FF9800" stroke="#FF5722" />
        </svg>
        <span className="inline-block mt-1 font-mono text-[9px] uppercase tracking-widest text-hook-orange bg-white/80 px-1.5 py-0.5 rounded border border-hook-orange/30">
          Viral Velocity
        </span>
      </div>

      {/* 2. Lightning Bolt Doodle */}
      <div
        className="absolute bottom-40 right-12 md:bottom-32 md:right-48 pointer-events-none transition-transform duration-200 ease-out z-20"
        style={{
          transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * -40}px, 0) rotate(-10deg)`,
        }}
      >
        <svg
          className="w-12 h-12 md:w-16 md:h-16 text-electric-amber drop-shadow-md"
          viewBox="0 0 100 100"
          fill="currentColor"
          stroke="#121212"
          strokeWidth="3"
        >
          <polygon points="55,10 20,55 45,55 35,90 80,45 52,45" />
        </svg>
      </div>

      {/* 3. Pixel Meme Sunglasses Doodle */}
      <div
        className="absolute top-48 left-6 md:top-60 md:left-20 pointer-events-none transition-transform duration-200 ease-out z-20 hidden sm:block"
        style={{
          transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0) rotate(${mousePos.x * -10}deg)`,
        }}
      >
        <svg
          className="w-20 h-10 md:w-28 md:h-14 text-black drop-shadow-lg"
          viewBox="0 0 120 50"
          fill="currentColor"
        >
          <rect x="10" y="10" width="40" height="25" rx="3" />
          <rect x="70" y="10" width="40" height="25" rx="3" />
          <rect x="50" y="18" width="20" height="6" />
          <line x1="20" y1="18" x2="35" y2="18" stroke="#CCFF00" strokeWidth="3" />
          <line x1="80" y1="18" x2="95" y2="18" stroke="#CCFF00" strokeWidth="3" />
        </svg>
        <span className="font-mono text-[9px] uppercase tracking-wider text-black/60 block text-center">
          Deal with it
        </span>
      </div>

      {/* Top Banner Tag */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10 mb-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-hook-orange animate-spin-slow" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-black/80">
            Engineered for Viral Dominance
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-black/50">
          <span>0.00s</span>
          <div className="w-12 h-[2px] bg-hook-orange animate-pulse" />
          <span className="text-hook-orange font-bold">3.00s (THE WINDOW)</span>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Rotating Stamp Badge */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center">
            <div
              ref={stampRef}
              data-cursor="PLAY"
              className="relative w-32 h-32 flex items-center justify-center group cursor-pointer"
            >
              {/* Rotating Circular SVG Text */}
              <svg
                className="w-full h-full animate-spin-slow group-hover:[animation-play-state:paused] transition-all"
                viewBox="0 0 160 160"
              >
                <path
                  id="circlePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="text-[11.5px] font-mono uppercase tracking-[0.24em] fill-[#121212] font-bold">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    * 3SECONDS * THE ATTENTION AGENCY * EST 2026 *
                  </textPath>
                </text>
              </svg>

              {/* Center Play Icon */}
              <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-hook-orange text-white flex items-center justify-center shadow-[0_4px_16px_rgba(255,87,34,0.4)] transition-transform duration-300 group-hover:scale-125">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>
            </div>
          </div>

          {/* Center Column: Massive Kinetic Typography */}
          <div className="lg:col-span-10">
            <h1
              ref={headlineRef}
              className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black font-syne uppercase tracking-[-0.04em] leading-[0.92] text-[#121212]"
            >
              <div className="overflow-hidden py-1">
                <span className="hero-word inline-block">WE CREATE</span>
              </div>

              <div className="overflow-hidden py-1">
                <span className="hero-word inline-block gradient-text-hook underline decoration-hook-orange/30 decoration-wavy decoration-2">
                  MEMORABLE HOOKS
                </span>
              </div>

              <div className="overflow-hidden py-1 flex items-baseline flex-wrap gap-x-4">
                <span className="hero-word inline-block">FOR BRANDS</span>
                <span className="hero-word inline-block font-mono text-xs md:text-sm normal-case font-normal text-black/50 tracking-normal max-w-xs self-center">
                  (Because nobody watches boring commercials anymore)
                </span>
              </div>

              <div className="overflow-hidden py-1">
                <span className="hero-word inline-block gradient-text-hook">
                  IN 3 SECONDS.
                </span>
              </div>
            </h1>

            {/* Sub-headline & CTAs */}
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-black/10">
              <p className="font-sans text-base md:text-lg text-text-dark-secondary max-w-xl leading-relaxed">
                The average human attention span is <strong className="text-[#121212]">8.25 seconds</strong>. 
                We engineer high-retention short-form videos, cultural meme campaigns, and creator syndication 
                that capture minds before they swipe.
              </p>

              <div className="flex items-center space-x-4">
                <Link
                  href="/work"
                  data-cursor="EXPLORE"
                  className="px-6 py-3.5 rounded-full bg-[#121212] hover:bg-hook-orange text-white text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  View Case Studies
                </Link>
                <Link
                  href="/contact"
                  data-cursor="CALL"
                  className="px-6 py-3.5 rounded-full border border-black/20 hover:border-black text-[#121212] text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300"
                >
                  Book 15-Min Sprint
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pt-8 border-t border-black/5 z-10 text-xs font-mono text-black/40">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-hook-orange animate-ping" />
          <span>VIRAL BENCHMARK: 94.2% COMPLETION</span>
        </div>

        <div className="flex items-center space-x-2 text-[#121212] hover:text-hook-orange transition-colors">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
