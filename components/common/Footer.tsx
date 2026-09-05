"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useLenis } from "@/components/providers/SmoothScrollProvider";

export function Footer() {
  const { lenis } = useLenis();

  const handleScrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white pt-24 pb-12 px-4 md:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Massive Dominating Kinetic Headline */}
        <div className="border-b border-white/10 pb-16 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-hook-orange font-bold block mb-4">
              // 3SECONDS CREATIVE MEDIA AGENCY
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black font-syne uppercase tracking-tight leading-[0.95]">
              YOUR BRAND&apos;S <br />
              <span className="gradient-text-hook">CREATIVE PARTNER.</span>
            </h2>
          </div>

          {/* Magnetic Back to Top Trigger */}
          <button
            onClick={handleScrollTop}
            data-cursor="TOP"
            className="w-24 h-24 rounded-full border border-white/20 hover:border-hook-orange hover:bg-hook-orange text-white flex flex-col items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-300 group self-start lg:self-auto"
          >
            <ArrowUp className="w-5 h-5 mb-1 group-hover:-translate-y-1 transition-transform" />
            <span>UP ↑</span>
          </button>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Studio Hubs */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
              Studio Coordinates
            </h4>

            <div className="space-y-4 text-xs font-sans text-white/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-hook-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase font-mono">New York Hub</p>
                  <p className="text-white/60">
                    594 Broadway, Suite 802, SoHo, New York, NY 10012
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-electric-amber flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase font-mono">Los Angeles Hub</p>
                  <p className="text-white/60">
                    1327 Abbot Kinney Blvd, Venice, Los Angeles, CA 90291
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Hotlines */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
              Direct Inquiries
            </h4>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-hook-orange" />
                <a
                  href="mailto:hook@3seconds.media"
                  className="text-white hover:text-hook-orange transition-colors"
                >
                  hook@3seconds.media
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/40" />
                <a
                  href="mailto:connect@3seconds.agency"
                  className="text-white/70 hover:text-hook-orange transition-colors"
                >
                  connect@3seconds.agency
                </a>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Phone className="w-4 h-4 text-hook-orange" />
                <a
                  href="tel:+15553003333"
                  className="text-white font-bold hover:text-hook-orange transition-colors"
                >
                  +1 (555) 300-3333 (Hotline)
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
              Quick Navigation
            </h4>

            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-white/70">
              <li>
                <Link href="/" className="hover:text-hook-orange transition-colors">
                  01. Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-hook-orange transition-colors">
                  02. The 3s Manifesto
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-hook-orange transition-colors">
                  03. Capabilities & Offerings
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-hook-orange transition-colors">
                  04. Case Studies
                </Link>
              </li>
              <li>
                <Link href="/creators" className="hover:text-hook-orange transition-colors">
                  05. Creator Syndicate
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-hook-orange transition-colors flex items-center space-x-2"
                >
                  <span>06. Careers</span>
                  <span className="px-1.5 py-0.5 rounded text-[8px] bg-hook-orange text-white font-bold">
                    HIRING
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hook-orange transition-colors">
                  07. Contact & Sprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 font-bold">
              Social Ecosystem
            </h4>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="INSTA"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-hook-orange hover:bg-hook-orange/20 text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="X"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-hook-orange hover:bg-hook-orange/20 text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="LINKEDIN"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-hook-orange hover:bg-hook-orange/20 text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="YOUTUBE"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-hook-orange hover:bg-hook-orange/20 text-white transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/60">
              <p className="font-mono uppercase text-[10px] text-hook-orange font-bold mb-1">
                Viral Guarantee SLA
              </p>
              <p>Every asset tested across live audience sample cohorts before full distribution.</p>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4">
          <p>© {new Date().getFullYear()} 3seconds Creative Media Agency. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/legal" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <span>Engineered for 60fps Attention</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
