"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Eye, Share2, TrendingUp, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  hookLine: string;
  views: string;
  retention: string;
  roas: string;
  gradient: string;
  videoPlaceholder: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "myntra-wardrobe",
    client: "MYNTRA",
    title: "The 3-Second Wardrobe Meltdown",
    category: "E-COMMERCE & FASHION",
    hookLine: '"Don\'t wear this to a wedding unless you want to steal the spotlight."',
    views: "48.2M",
    retention: "84%",
    roas: "3.4x Sales Spike",
    gradient: "from-pink-600/30 to-purple-800/40",
    videoPlaceholder: "Wedding outfit quick-cut transition hook",
  },
  {
    id: "balaji-crunch",
    client: "BALAJI WAFERS",
    title: "The Crunch That Broke the Feed",
    category: "FMCG & SNACKING",
    hookLine: "Sound-designed ASMR acoustic crunch pattern interrupt at 0.1s.",
    views: "32.5M",
    retention: "92%",
    roas: "1.8M Shares",
    gradient: "from-amber-600/30 to-orange-800/40",
    videoPlaceholder: "Micro-sound ASMR wafer snap audio spike",
  },
  {
    id: "svish-hygiene",
    client: "SVISH",
    title: "The Unfiltered Hygiene Stunt",
    category: "D2C PERSONAL CARE",
    hookLine: "Absurdist situational humor targeting packed metro morning commuters.",
    views: "19.8M",
    retention: "79%",
    roas: "4.2x ROAS",
    gradient: "from-emerald-600/30 to-teal-800/40",
    videoPlaceholder: "Awkward metro standoff comedic punchline",
  },
  {
    id: "noise-clock",
    client: "NOISE SMARTWATCHES",
    title: "Beat the Clock Challenge",
    category: "TECH & WEARABLES",
    hookLine: "High-tempo gamified interactive TikTok & Reel filter challenge.",
    views: "65.0M+",
    retention: "88%",
    roas: "450k UGC Remakes",
    gradient: "from-blue-600/30 to-cyan-800/40",
    videoPlaceholder: "Split-second tap reaction filter demo",
  },
  {
    id: "redbull-parkour",
    client: "RED BULL",
    title: "Sub-Zero Urban Parkour",
    category: "SPORTS & LIFESTYLE",
    hookLine: "FPV drone dive starting 0.2s from roof edge impact.",
    views: "54.1M",
    retention: "96%",
    roas: "2.1M Saves",
    gradient: "from-red-600/30 to-amber-700/40",
    videoPlaceholder: "FPV drone roof dive vertigo perspective",
  },
  {
    id: "spotify-2am",
    client: "SPOTIFY INDIA",
    title: "The 2AM Playlist Intervention",
    category: "ENTERTAINMENT & AUDIO",
    hookLine: "A melancholic late-night audio question that sparked 800k quote tweets.",
    views: "82.0M",
    retention: "91%",
    roas: "#1 Trending (18h)",
    gradient: "from-green-600/30 to-emerald-900/40",
    videoPlaceholder: "Neon late-night taxi lyric synchronizer",
  },
];

export function PinnedCaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 3D Particle Orb Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    // Particle Sphere generation
    const numParticles = 240;
    const particles: { x: number; y: number; z: number; origX: number; origY: number; origZ: number }[] = [];
    const radius = Math.min(width, height) * 0.38;

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      particles.push({ x, y, z, origX: x, origY: y, origZ: z });
    }

    let angleX = 0;
    let angleY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.0005;
      mouseY = (e.clientY - rect.top - height / 2) * 0.0005;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleX += 0.006 + mouseY * 0.05;
      angleY += 0.008 + mouseX * 0.05;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Render outer glow
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        radius * 0.2,
        width / 2,
        height / 2,
        radius * 1.2
      );
      grad.addColorStop(0, "rgba(255, 87, 34, 0.15)");
      grad.addColorStop(0.5, "rgba(255, 152, 0, 0.05)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render particles with 3D perspective
      const fov = 400;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Rotate Y
        let x1 = p.origX * cosY - p.origZ * sinY;
        let z1 = p.origZ * cosY + p.origX * sinY;

        // Rotate X
        let y1 = p.origY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.origY * sinX;

        const scale = fov / (fov + z2);
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y1 * scale;

        const alpha = Math.max(0.15, (z2 + radius) / (2 * radius));
        const size = Math.max(1, 2.8 * scale);

        ctx.beginPath();
        ctx.arc(projX, projY, size, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? `rgba(255, 152, 0, ${alpha})` : `rgba(255, 87, 34, ${alpha})`;
        ctx.fill();

        // Connect nearby points
        for (let j = i + 1; j < particles.length; j += 6) {
          const p2 = particles[j];
          let x2 = p2.origX * cosY - p2.origZ * sinY;
          let z1_2 = p2.origZ * cosY + p2.origX * sinY;
          let y2 = p2.origY * cosX - z1_2 * sinX;
          let z2_2 = z1_2 * cosX + p2.origY * sinX;

          const dist = Math.hypot(x1 - x2, y1 - y2, z2 - z2_2);
          if (dist < 45) {
            const scale2 = fov / (fov + z2_2);
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(width / 2 + x2 * scale2, height / 2 + y2 * scale2);
            ctx.strokeStyle = `rgba(255, 87, 34, ${0.15 * alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // GSAP Pinning & Theme Transition to Obsidian
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Background color switch to obsidian (#0A0A0A)
    const colorTween = gsap.to("body", {
      backgroundColor: "#0A0A0A",
      color: "#FFFFFF",
      scrollTrigger: {
        trigger: container,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Horizontal scroll pinning
    const scrollTween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 160),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1.2,
        start: "top top",
        end: () => `+=${track.scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      colorTween.scrollTrigger?.kill();
      colorTween.kill();
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#0A0A0A] text-white flex flex-col justify-between py-10"
    >
      {/* Background Interactive 3D Particle Orb Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
      />

      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between z-10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs uppercase tracking-widest text-hook-orange mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // SELECTED VIRAL CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-syne uppercase tracking-tight">
            EK KAHAANI HAI JO <span className="gradient-text-hook">SABKO SUNANI HAI.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-white/60 mt-1">
            Stories that hijacked algorithms, captured feeds, and converted millions into revenue.
          </p>
        </div>

        <Link
          href="/work"
          data-cursor="ALL"
          className="hidden md:inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-hook-orange hover:text-white transition-colors"
        >
          <span>View Archive (24+ Campaigns)</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Horizontal Slider of Cards */}
      <div className="relative w-full flex-1 flex items-center overflow-visible pl-6 md:pl-16 z-10">
        <div
          ref={trackRef}
          className="flex items-center space-x-8 will-change-transform pr-24"
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              data-cursor="CASE"
              className="w-[360px] sm:w-[460px] md:w-[540px] flex-shrink-0 rounded-3xl bg-[#161616] border border-white/12 hover:border-hook-orange/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 group flex flex-col"
            >
              {/* Media Preview Box */}
              <div
                className={`relative h-60 sm:h-72 w-full bg-gradient-to-br ${cs.gradient} flex flex-col justify-between p-6 overflow-hidden`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {cs.client}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-hook-orange transition-all">
                    <Play className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="font-mono text-xs text-white/50 uppercase tracking-wider mb-1">
                    The 3-Second Hook
                  </p>
                  <p className="font-sans text-sm font-semibold text-white italic">
                    {cs.hookLine}
                  </p>
                </div>
              </div>

              {/* Card Meta & Stats */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-[11px] text-hook-orange uppercase tracking-widest font-bold">
                    {cs.category}
                  </span>
                  <h3 className="font-syne font-black text-2xl md:text-3xl uppercase tracking-tight text-white mt-1 group-hover:text-hook-orange transition-colors">
                    {cs.title}
                  </h3>
                </div>

                {/* KPI Pill Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center space-x-1 text-white/50 text-[10px] font-mono uppercase">
                      <Eye className="w-3 h-3" />
                      <span>Views</span>
                    </div>
                    <div className="font-mono font-bold text-base md:text-lg text-white mt-0.5">
                      {cs.views}
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center space-x-1 text-white/50 text-[10px] font-mono uppercase">
                      <TrendingUp className="w-3 h-3" />
                      <span>3s Hold</span>
                    </div>
                    <div className="font-mono font-bold text-base md:text-lg text-hook-orange mt-0.5">
                      {cs.retention}
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center space-x-1 text-white/50 text-[10px] font-mono uppercase">
                      <Share2 className="w-3 h-3" />
                      <span>Impact</span>
                    </div>
                    <div className="font-mono font-bold text-xs md:text-sm text-white mt-1 truncate">
                      {cs.roas}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Indicators */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between text-xs font-mono text-white/40 z-10">
        <span>SWIPE / MOUSE WHEEL TO NAVIGATE CASE STUDIES</span>
        <span className="text-hook-orange">6 FLAGSHIP CAMPAIGNS</span>
      </div>
    </section>
  );
}
