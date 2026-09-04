"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DrawerMenu } from "./DrawerMenu";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-8 max-w-7xl mx-auto pointer-events-none">
        <div
          className={`pointer-events-auto w-full flex items-center justify-between px-5 md:px-7 py-3 md:py-3.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 dark:bg-[#121212]/80 backdrop-blur-xl border-black/10 dark:border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
              : "bg-white/40 dark:bg-[#121212]/40 backdrop-blur-md border-black/8 dark:border-white/10"
          }`}
        >
          {/* Logo Brandmark */}
          <Link
            href="/"
            data-cursor="HOME"
            className="flex items-center space-x-2.5 group"
          >
            <div className="w-3 h-3 rounded-full bg-hook-orange animate-pulse shadow-[0_0_10px_#FF5722]" />
            <span className="text-xl md:text-2xl font-black font-syne tracking-tighter text-[#121212] dark:text-white">
              3seconds<span className="text-hook-orange">.</span>
            </span>
          </Link>

          {/* Center Navigation Shortcuts (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono uppercase tracking-wider text-black/70 dark:text-white/70">
            <Link
              href="/work"
              data-cursor="WORK"
              className="hover:text-hook-orange transition-colors"
            >
              Work
            </Link>
            <Link
              href="/services"
              data-cursor="SERVICES"
              className="hover:text-hook-orange transition-colors"
            >
              Capabilities
            </Link>
            <Link
              href="/creators"
              data-cursor="CREATORS"
              className="hover:text-hook-orange transition-colors"
            >
              Creator Syndicate
            </Link>
            <Link
              href="/about"
              data-cursor="ABOUT"
              className="hover:text-hook-orange transition-colors"
            >
              The 3s Rule
            </Link>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center space-x-3">
            {/* Pill CTA Button */}
            <Link
              href="/contact"
              data-cursor="TALK"
              className="group relative flex items-center space-x-1.5 px-4 md:px-5 py-2 rounded-full bg-hook-orange hover:bg-black text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(255,87,34,0.35)] overflow-hidden"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* 4-Dot Matrix Menu Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              data-cursor="MENU"
              aria-label="Open Navigation Menu"
              className="w-10 h-10 rounded-full border border-black/15 dark:border-white/20 flex items-center justify-center hover:border-hook-orange hover:bg-hook-orange/10 transition-all duration-300 group focus:outline-none"
            >
              <div className="grid grid-cols-2 gap-1.5 transition-transform duration-500 ease-out group-hover:rotate-90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white group-hover:bg-hook-orange transition-colors" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white group-hover:bg-hook-orange transition-colors" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white group-hover:bg-hook-orange transition-colors" />
                <span className="w-1.5 h-1.5 rounded-full border border-[#121212] dark:border-white group-hover:border-hook-orange bg-transparent transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Drawer */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
