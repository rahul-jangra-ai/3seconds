"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, PhoneCall } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 lg:px-12 bg-[#0A0A0A] text-white overflow-hidden border-t border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.18)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs uppercase tracking-widest text-hook-orange mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>YOUR TURN TO COMMAND ATTENTION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne uppercase tracking-tight leading-[0.95] max-w-5xl mx-auto">
          READY TO STOP <br />
          <span className="gradient-text-hook">THE SCROLL?</span>
        </h2>

        <p className="mt-8 font-sans text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Book a 15-minute Strategy Sprint with our creative directors. We will diagnose your brand&apos;s current drop-off curve and pitch 3 viral hook concepts for free.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            data-cursor="LAUNCH"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-hook-orange hover:bg-white hover:text-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_8px_30px_rgba(255,87,34,0.4)] flex items-center justify-center space-x-2"
          >
            <span>Launch Campaign Sprint</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            data-cursor="CALCULATOR"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border border-white/15 flex items-center justify-center space-x-2"
          >
            <span>Deliverables Calculator</span>
          </Link>
        </div>

        {/* Direct Hotline Badge */}
        <div className="mt-12 inline-flex items-center space-x-3 text-xs font-mono text-white/50">
          <PhoneCall className="w-3.5 h-3.5 text-hook-orange" />
          <span>Need immediate crisis trend response? Hotline:</span>
          <a
            href="tel:+15553003333"
            className="text-white hover:text-hook-orange font-bold transition-colors underline"
          >
            +1 (555) 300-3333
          </a>
        </div>
      </div>
    </section>
  );
}
