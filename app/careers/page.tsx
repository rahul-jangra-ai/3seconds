"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Flame, CheckCircle2, Laptop, Trophy, Video, MapPin, X, Send } from "lucide-react";
import { Footer } from "@/components/common/Footer";

interface CareerRole {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const roles: CareerRole[] = [
  {
    id: "senior-editor",
    title: "Senior Short-Form Video Editor & Motion Specialist",
    dept: "Creative Direction",
    location: "Mumbai / Hybrid",
    type: "Full-Time",
    description:
      "Master of Premiere, After Effects, and sound design pacing. You live and breathe micro-cuts, dynamic kinetic typography, and 1.2-second dopamine rhythm.",
    requirements: [
      "Extensive portfolio of short-form Reels/Shorts with >10M organic views",
      "Obsessive mastery of sound effects (wooshes, pops, acoustic interrupts)",
      "Speed demon: Can edit and polish 2-3 high-retention assets per day",
    ],
  },
  {
    id: "hook-scriptwriter",
    title: "Viral Hook Scriptwriter",
    dept: "Editorial & Strategy",
    location: "Bengaluru / Hybrid",
    type: "Full-Time",
    description:
      "Writes 50 punchy 3-second hooks a day for consumer brands. You understand psychology curiosity gaps, pattern interrupts, and conversational memes.",
    requirements: [
      "Fluent in Indian internet pop culture, meme vernacular, and regional banter",
      "Proven ability to reverse-engineer viral scripts from trending sounds",
      "Understands consumer psychology and high-converting direct response",
    ],
  },
  {
    id: "meme-strategist",
    title: "Meme Culture Strategist",
    dept: "War Room",
    location: "Mumbai / Remote",
    type: "Full-Time",
    description:
      "Monitors real-time Twitter/X, Reddit, and Reel trends. Turns cultural moments into high-impact brand memes within 45 minutes.",
    requirements: [
      "Active admin or contributor to high-traffic meme pages (>100k followers)",
      "Uncanny speed: Can create, caption, and distribute within under an hour",
      "Sharp comedic timing with zero corporate cringe",
    ],
  },
  {
    id: "partnerships-manager",
    title: "Creator Partnerships Manager",
    dept: "Syndicate Operations",
    location: "Mumbai / Hybrid",
    type: "Full-Time",
    description:
      "Coordinates talent briefs, contracts, SLA delivery, and relationships across our network of 250+ internet creators.",
    requirements: [
      "3+ years managing influencer campaigns and creator agreements in India",
      "Direct relationships with meme page admins and comedy creators",
      "Flawless project management and SLA delivery tracking",
    ],
  },
  {
    id: "ai-creative-technologist",
    title: "AI Creative Technologist",
    dept: "Innovation & Labs",
    location: "Bengaluru / Hybrid",
    type: "Full-Time",
    description:
      "Implements generative video tools (Runway, Kling, Midjourney, ComfyUI) and Antigravity IDE automated pipelines for high-speed creative experimentation.",
    requirements: [
      "Hands-on mastery of modern generative video and voice synthesis tooling",
      "Ability to build internal automated creative workflows and prompt databases",
      "Bridge between wild creative experimentation and scalable production",
    ],
  },
];

const perks = [
  {
    icon: Flame,
    title: "Experimental Viral Stunt Budget",
    desc: "Got a crazy idea that might break the internet? We fund creative bets with zero corporate bureaucracy.",
  },
  {
    icon: Laptop,
    title: "Top-Tier Gear & Studio Rig",
    desc: "Maxed-out Mac Studio M4 Max, Sony FX3 / RED cinema rigs, and full Antigravity IDE licenses.",
  },
  {
    icon: Trophy,
    title: "Viral Benchmark Cash Bonuses",
    desc: "Direct performance bonuses tied to video milestones. When a campaign hits 10M or 50M views, you win.",
  },
  {
    icon: MapPin,
    title: "Flexible Hubs in Mumbai & BLR",
    desc: "Vibrant creative hubs in Veera Desai (Mumbai) and Indiranagar (Bengaluru) with hybrid remote flexibility.",
  },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
  const [pitchSubmitted, setPitchSubmitted] = useState<boolean>(false);

  const handlePitchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPitchSubmitted(true);
    setTimeout(() => {
      setSelectedRole(null);
      setPitchSubmitted(false);
    }, 2500);
  };

  return (
    <div className="pt-28 md:pt-36 bg-[#FAF6EE] text-[#121212] min-h-screen">
      {/* Hero Header */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-20">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-hook-orange" />
          <span>JOIN THE SQUAD // CAREERS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne uppercase tracking-tight leading-[0.95] max-w-5xl">
          WE DON&apos;T MAKE BORING ADS. <br />
          <span className="gradient-text-hook">NEITHER SHOULD YOU.</span>
        </h1>

        <p className="mt-8 font-sans text-lg sm:text-2xl text-text-dark-secondary max-w-3xl leading-relaxed">
          We are hiring internet obsessives, meme connoisseurs, speed-demon video editors, and AI prompt engineers who live and breathe on social feeds.
        </p>
      </section>

      {/* Agency Perks Grid */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
            01 // WHY WORK AT 3SECONDS
          </span>
          <h3 className="font-syne font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#121212] mt-1">
            Built For People Who Hate Corporate Red Tape
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-black/10 hover:border-hook-orange shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-hook-orange flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-syne font-bold text-lg text-[#121212] uppercase tracking-tight mb-2">
                    {p.title}
                  </h4>
                  <p className="font-sans text-xs text-text-dark-secondary leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Roles Listing */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-28">
        <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
              02 // CURRENT OPENINGS
            </span>
            <h3 className="font-syne font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#121212] mt-1">
              Find Your Spot In The War Room
            </h3>
          </div>
          <span className="font-mono text-xs text-black/50 bg-white px-4 py-2 rounded-full border border-black/10">
            5 Open Creative Roles
          </span>
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <div
              key={role.id}
              className="p-6 md:p-8 rounded-3xl bg-white border border-black/10 hover:border-hook-orange shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/5 text-black/70 font-mono text-[10px] uppercase font-bold">
                    {role.dept}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-hook-orange font-mono text-[10px] uppercase font-bold">
                    {role.location}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/5 text-black/70 font-mono text-[10px] uppercase font-bold">
                    {role.type}
                  </span>
                </div>

                <h4 className="font-syne font-black text-xl sm:text-2xl uppercase tracking-tight text-[#121212]">
                  {role.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-text-dark-secondary mt-2 leading-relaxed">
                  {role.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-[11px] font-mono text-black/60 bg-[#FAF6EE] px-2.5 py-1 rounded-md border border-black/5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-hook-orange mr-1.5 flex-shrink-0" />
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedRole(role)}
                data-cursor="APPLY"
                className="px-6 py-3 rounded-full bg-hook-orange hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md flex-shrink-0 self-start lg:self-center flex items-center space-x-2"
              >
                <span>3-Min Video Pitch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 30-Second Video Pitch Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-[1100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 md:p-10 border border-black/20 shadow-2xl animate-fadeIn my-8">
            <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-6">
              <div>
                <span className="font-mono text-xs text-hook-orange uppercase tracking-widest font-bold">
                  Applying For Role
                </span>
                <h3 className="font-syne font-black text-xl md:text-2xl uppercase tracking-tight text-[#121212]">
                  {selectedRole.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedRole(null)}
                className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-hook-orange hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {pitchSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-syne font-black text-2xl uppercase text-[#121212]">
                  Pitch Received!
                </h4>
                <p className="font-sans text-sm text-text-dark-secondary max-w-sm mx-auto">
                  If your first 3 seconds hooked our attention, expect a direct WhatsApp invite to interview with our creative directors today.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePitchSubmit} className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                  <p className="font-sans text-xs text-hook-orange font-bold">
                    ⚡ The 3seconds Application Challenge:
                  </p>
                  <p className="font-sans text-xs text-text-dark-secondary mt-1">
                    Send a 30-second unlisted YouTube / Drive link answering: &quot;Hook our attention in the first 3 seconds of your video.&quot; No boring resumes required.
                  </p>
                </div>

                <div>
                  <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                    Full Name *
                  </label>
                  <input
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    />
                  </div>
                  <div>
                    <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                      WhatsApp Phone *
                    </label>
                    <input
                      required
                      placeholder="+91..."
                      className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                    30-Second Video Pitch Link *
                  </label>
                  <input
                    required
                    type="url"
                    placeholder="https://youtu.be/... or Google Drive link"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                  />
                </div>

                <div>
                  <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                    Portfolio / Social Link (Instagram / Behance / GitHub)
                  </label>
                  <input
                    placeholder="https://..."
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="SUBMIT"
                  className="w-full mt-4 py-4 rounded-full bg-hook-orange hover:bg-black text-white font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Transmit Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
