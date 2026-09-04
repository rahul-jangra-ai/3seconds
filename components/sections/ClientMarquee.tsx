"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";

const row1 = [
  { name: "MYNTRA", sector: "FASHION & E-COMMERCE" },
  { name: "SPOTIFY", sector: "AUDIO STREAMING" },
  { name: "RED BULL", sector: "ENERGY & SPORTS" },
  { name: "AMAZON MINITV", sector: "FREE OTT & STREAMING" },
  { name: "CRED", sector: "FINTECH & REWARDS" },
  { name: "KFC", sector: "QSR & FOOD CULTURE" },
  { name: "NOISE", sector: "SMART TECH & AUDIO" },
  { name: "BALAJI WAFERS", sector: "FMCG SNACKS" },
];

const row2 = [
  { name: "JIOHOTSTAR", sector: "ENTERTAINMENT & CRICKET" },
  { name: "FLIPKART", sector: "ECOMMERCE MEGA-SALES" },
  { name: "NYKAA", sector: "BEAUTY & LIFESTYLE" },
  { name: "DREAM11", sector: "GAMING & SPORTS" },
  { name: "BRITANNIA TREAT", sector: "YOUTH FMCG" },
  { name: "SVISH", sector: "D2C HYGIENE DISRUPTOR" },
  { name: "OPPO", sector: "SMARTPHONES & CAMERA" },
  { name: "JUPITER", sector: "NEOBANKING" },
];

const row3 = [
  { name: "ZEE5", sector: "REGIONAL OTT" },
  { name: "CARATLANE", sector: "MODERN JEWELLERY" },
  { name: "VI-JOHN", sector: "PERSONAL CARE HERITAGE" },
  { name: "MY11CIRCLE", sector: "SPORTS GAMING" },
  { name: "MYNTRA FWD", sector: "GEN-Z TREND FASHION" },
  { name: "TINDER INDIA", sector: "DATING & DIPLOMACY" },
  { name: "BOMBAY SHAVING CO", sector: "GROOMING ESSENTIALS" },
  { name: "BOAT LIFESTYLE", sector: "AUDIO & WEARABLES" },
];

export function ClientMarquee() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAF6EE] text-[#121212] overflow-hidden border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-3">
          <Heart className="w-3.5 h-3.5 text-hook-orange fill-hook-orange/30" />
          <span>06 // OUR BESTIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-syne uppercase tracking-tight">
          THE BEST WORK ISN&apos;T MADE FOR CLIENTS. <br />
          <span className="gradient-text-hook">IT&apos;S MADE WITH PARTNERS.</span>
        </h2>
        <p className="font-sans text-sm md:text-base text-text-dark-secondary mt-3 max-w-xl mx-auto">
          Trusted by Fortune 500 giants, agile tech unicorns, and cultural challengers across India & global markets.
        </p>
      </div>

      {/* Marquee Container with side gradient fades */}
      <div className="relative w-full space-y-4">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FAF6EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FAF6EE] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee-left flex items-center space-x-4 pr-4">
            {[...row1, ...row1, ...row1].map((brand, i) => (
              <div
                key={i}
                data-cursor="PARTNER"
                className="flex-shrink-0 px-6 py-4 rounded-2xl bg-white border border-black/8 shadow-sm hover:border-hook-orange hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-w-[200px]"
              >
                <span className="font-syne font-black text-lg md:text-xl tracking-tight text-black/70 hover:text-hook-orange transition-colors">
                  {brand.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/40 mt-0.5">
                  {brand.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex overflow-hidden group">
          <div className="animate-marquee-right flex items-center space-x-4 pr-4">
            {[...row2, ...row2, ...row2].map((brand, i) => (
              <div
                key={i}
                data-cursor="PARTNER"
                className="flex-shrink-0 px-6 py-4 rounded-2xl bg-white border border-black/8 shadow-sm hover:border-electric-amber hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-w-[200px]"
              >
                <span className="font-syne font-black text-lg md:text-xl tracking-tight text-black/70 hover:text-electric-amber transition-colors">
                  {brand.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/40 mt-0.5">
                  {brand.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Scrolling Left */}
        <div className="hidden sm:flex overflow-hidden group">
          <div className="animate-marquee-left flex items-center space-x-4 pr-4">
            {[...row3, ...row3, ...row3].map((brand, i) => (
              <div
                key={i}
                data-cursor="PARTNER"
                className="flex-shrink-0 px-6 py-4 rounded-2xl bg-white border border-black/8 shadow-sm hover:border-hook-orange hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-w-[200px]"
              >
                <span className="font-syne font-black text-lg md:text-xl tracking-tight text-black/70 hover:text-hook-orange transition-colors">
                  {brand.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/40 mt-0.5">
                  {brand.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
