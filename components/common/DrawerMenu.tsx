"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import gsap from "gsap";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "HOME", num: "01" },
  { href: "/about", label: "ABOUT", num: "02" },
  { href: "/services", label: "SERVICES", num: "03" },
  { href: "/work", label: "WORK", num: "04" },
  { href: "/creators", label: "CREATORS", num: "05" },
  { href: "/careers", label: "CAREERS", num: "06", badge: "WE'RE HIRING" },
  { href: "/contact", label: "CONTACT", num: "07" },
];

export function DrawerMenu({ isOpen, onClose }: DrawerMenuProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!drawerRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.to(drawerRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: "expo.out",
      }).fromTo(
        ".drawer-nav-item",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.45, ease: "power3.out" },
        "-=0.3"
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(drawerRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "expo.in",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close when pathname changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  return (
    <div
      ref={drawerRef}
      className="fixed inset-0 z-[999] bg-[#FAF6EE] text-[#121212] flex flex-col justify-between p-6 md:p-12 lg:p-16 -translate-y-full will-change-transform overflow-y-auto"
      style={{ transform: "translate3d(0, -100%, 0)" }}
    >
      {/* Top Bar inside Drawer */}
      <div className="flex items-center justify-between border-b border-black/10 pb-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-black font-syne tracking-tighter">
            3seconds<span className="text-hook-orange">.</span>
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-black/5 rounded-full border border-black/10">
            Agency Navigation
          </span>
        </div>

        <button
          onClick={onClose}
          data-cursor="CLOSE"
          className="flex items-center space-x-2 px-4 py-2 rounded-full border border-black/15 hover:border-black/50 hover:bg-black/5 transition-all text-xs font-mono uppercase tracking-wider group"
        >
          <span>Close</span>
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Nav Links */}
      <div ref={linksRef} className="my-auto py-8">
        <div className="grid grid-cols-1 gap-2 max-w-4xl">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="drawer-nav-item overflow-hidden">
                <Link
                  href={item.href}
                  onClick={onClose}
                  data-cursor="GOTO"
                  className={`group flex items-baseline justify-between py-2 border-b border-black/5 transition-all duration-300 ${
                    isActive ? "text-hook-orange" : "text-[#121212] hover:text-hook-orange"
                  }`}
                >
                  <div className="flex items-baseline space-x-4 md:space-x-6">
                    <span className="font-mono text-sm md:text-base text-black/40 group-hover:text-hook-orange transition-colors">
                      {item.num}
                    </span>
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-syne tracking-tight transition-transform duration-300 group-hover:translate-x-3">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    {item.badge && (
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase bg-hook-orange text-white rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-hook-orange" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Information Row */}
      <div className="border-t border-black/10 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-end text-xs font-mono">
        <div>
          <p className="text-black/40 uppercase tracking-widest text-[10px] mb-1">Our Philosophy</p>
          <p className="font-sans font-bold text-sm text-[#121212]">
            &quot;3 seconds to stop the thumb. 30 seconds to build a legend.&quot;
          </p>
        </div>

        <div>
          <p className="text-black/40 uppercase tracking-widest text-[10px] mb-1">Direct Inquiries</p>
          <a
            href="mailto:hook@3seconds.media"
            className="text-hook-orange font-bold hover:underline"
          >
            hook@3seconds.media
          </a>
          <p className="text-black/60">+91 98200-33333 (Mumbai & BLR)</p>
        </div>

        <div className="flex items-center md:justify-end space-x-4 text-black/60">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full border border-black/10 hover:border-black hover:text-black transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="p-2 rounded-full border border-black/10 hover:border-black hover:text-black transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full border border-black/10 hover:border-black hover:text-black transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="p-2 rounded-full border border-black/10 hover:border-black hover:text-black transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
