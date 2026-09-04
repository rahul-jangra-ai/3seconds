"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Instagram, Youtube, Twitter, Users, ArrowUpRight } from "lucide-react";

interface Creator {
  id: string;
  handle: string;
  name: string;
  category: string;
  followers: string;
  engagement: string;
  hookStyle: string;
  platforms: ("instagram" | "youtube" | "twitter")[];
  avatarBg: string;
}

const categories = [
  { id: "all", label: "All Syndicate", count: 250, angle: 0 },
  { id: "memes", label: "Premium Memes", count: 85, angle: 45 },
  { id: "genz", label: "Gen-Z Creators", count: 62, angle: 115 },
  { id: "regional", label: "Regional Voices", count: 48, angle: 185 },
  { id: "pop", label: "Pop Culture & Cinema", count: 32, angle: 255 },
  { id: "skits", label: "High-Energy Skits", count: 23, angle: 320 },
];

const creatorsList: Creator[] = [
  {
    id: "sarcastic-us",
    handle: "@sarcastic_us",
    name: "Sarcastic Us Network",
    category: "memes",
    followers: "14.7M",
    engagement: "6.8%",
    hookStyle: "Dark Satire & Absurdist Text Hooks",
    platforms: ["instagram", "twitter"],
    avatarBg: "from-orange-500 to-amber-700",
  },
  {
    id: "ghantaa",
    handle: "@ghantaa",
    name: "Ghantaa Viral Hub",
    category: "memes",
    followers: "11.2M",
    engagement: "8.1%",
    hookStyle: "Bollywood Spin & Sound Remakes",
    platforms: ["instagram", "youtube"],
    avatarBg: "from-pink-600 to-purple-800",
  },
  {
    id: "aarav-skits",
    handle: "@aaravcomedy",
    name: "Aarav Sharma",
    category: "skits",
    followers: "4.8M",
    engagement: "9.4%",
    hookStyle: "Awkward POV & Split-Second Slapstick",
    platforms: ["instagram", "youtube"],
    avatarBg: "from-blue-500 to-indigo-700",
  },
  {
    id: "zoya-genz",
    handle: "@zoyavibes",
    name: "Zoya Akhtar (Gen-Z)",
    category: "genz",
    followers: "3.2M",
    engagement: "11.2%",
    hookStyle: "Chaotic GRWM & Unfiltered Confessionals",
    platforms: ["instagram", "youtube", "twitter"],
    avatarBg: "from-emerald-500 to-teal-800",
  },
  {
    id: "desimeme-syndicate",
    handle: "@theindianidiot",
    name: "The Indian Idiot",
    category: "memes",
    followers: "8.9M",
    engagement: "7.3%",
    hookStyle: "Relatable College & Corporate Trauma",
    platforms: ["instagram", "twitter"],
    avatarBg: "from-yellow-500 to-orange-700",
  },
  {
    id: "punjab-express",
    handle: "@penduvirals",
    name: "Pendu Virals",
    category: "regional",
    followers: "5.4M",
    engagement: "10.5%",
    hookStyle: "Punjabi Dialect Roasts & Desi Beats",
    platforms: ["instagram", "youtube"],
    avatarBg: "from-red-600 to-amber-600",
  },
  {
    id: "cinema-keeda",
    handle: "@filmyflickers",
    name: "Filmy Flickers",
    category: "pop",
    followers: "6.1M",
    engagement: "8.7%",
    hookStyle: "Nostalgic Scene Redubs & Mashups",
    platforms: ["instagram", "youtube"],
    avatarBg: "from-purple-600 to-rose-700",
  },
  {
    id: "south-swag",
    handle: "@mass_memes_south",
    name: "Mass Memes South",
    category: "regional",
    followers: "7.2M",
    engagement: "9.1%",
    hookStyle: "Mass Cinematic Audio Drops & High BGM",
    platforms: ["instagram", "twitter"],
    avatarBg: "from-amber-700 to-red-900",
  },
];

export function CreatorConstellation() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCreators =
    selectedCategory === "all"
      ? creatorsList
      : creatorsList.filter((c) => c.category === selectedCategory);

  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 lg:px-12 bg-[#0A0A0A] text-white border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-hook-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs uppercase tracking-widest text-hook-orange mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>04 // CREATOR SYNDICATE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-syne uppercase tracking-tight">
              OUR BUDDIES. <span className="gradient-text-hook">THE SYNDICATE.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-white/60 mt-2 max-w-2xl">
              Brands don&apos;t just buy ad placements; they tap into our living network of 250+ creators commanding 600M+ active social attention.
            </p>
          </div>

          <Link
            href="/creators"
            data-cursor="JOIN"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-hook-orange text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border border-white/15 self-start md:self-auto"
          >
            <span>Join Our Syndicate</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Split Constellation & Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Orbital Interactive Constellation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-[#141414] border border-white/10">
            <div className="text-center mb-6">
              <span className="font-mono text-xs text-hook-orange uppercase tracking-widest font-bold">
                Orbital Network Radar
              </span>
              <p className="text-xs text-white/50 mt-1">
                Click any satellite node to filter syndicate channels
              </p>
            </div>

            {/* Circular Constellation SVG */}
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
              {/* Concentric orbital rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-spin-slower" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-dashed border-hook-orange/20" />

              {/* Center Core Node */}
              <button
                onClick={() => setSelectedCategory("all")}
                data-cursor="CORE"
                className={`relative z-20 w-20 h-20 rounded-full flex flex-col items-center justify-center font-mono font-black text-center text-[10px] tracking-tight uppercase transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-hook-orange text-white shadow-[0_0_30px_#FF5722] scale-110"
                    : "bg-[#222] text-white/80 hover:bg-hook-orange hover:text-white"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white mb-1 animate-ping" />
                <span>3SECONDS</span>
                <span className="text-[8px] text-white/70">CORE</span>
              </button>

              {/* Orbiting Category Nodes */}
              {categories.slice(1).map((cat, idx) => {
                const isSelected = selectedCategory === cat.id;
                // Calculate position along circular radius
                const angleRad = (cat.angle * Math.PI) / 180;
                const r = 115; // orbital radius in px
                const x = Math.cos(angleRad) * r;
                const y = Math.sin(angleRad) * r;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    data-cursor="FILTER"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-20 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 shadow-md ${
                      isSelected
                        ? "bg-electric-amber text-black font-bold scale-110 shadow-[0_0_20px_#FF9800]"
                        : "bg-[#1f1f1f] text-white/80 border border-white/15 hover:border-hook-orange hover:text-hook-orange"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Current Active Category Pill */}
            <div className="mt-6 flex items-center space-x-2 text-xs font-mono">
              <span className="text-white/50">Active Filter:</span>
              <span className="px-3 py-1 rounded-full bg-hook-orange/20 text-hook-orange border border-hook-orange/40 font-bold uppercase">
                {categories.find((c) => c.id === selectedCategory)?.label} (
                {categories.find((c) => c.id === selectedCategory)?.count}+ Accounts)
              </span>
            </div>
          </div>

          {/* Right: Filterable Creator Metric Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[560px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredCreators.map((creator) => (
                <div
                  key={creator.id}
                  data-cursor="CREATOR"
                  className="p-5 rounded-2xl bg-[#161616] border border-white/10 hover:border-hook-orange/60 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-4">
                    {/* Avatar with Status Ring */}
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-tr ${creator.avatarBg} flex items-center justify-center text-white font-mono font-bold text-sm shadow-md ring-2 ring-hook-orange/40 group-hover:ring-hook-orange transition-all`}
                      >
                        {creator.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <h4 className="font-syne font-bold text-sm text-white group-hover:text-hook-orange transition-colors">
                            {creator.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-hook-orange fill-hook-orange/20" />
                        </div>
                        <p className="font-mono text-xs text-white/50">{creator.handle}</p>
                      </div>
                    </div>

                    {/* Verified Follower Badge */}
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs font-bold text-hook-orange">
                      {creator.followers}
                    </span>
                  </div>

                  {/* Hook Genre */}
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 mb-4">
                    <p className="font-mono text-[10px] uppercase text-white/40 tracking-wider">
                      Signature Hook Technique
                    </p>
                    <p className="font-sans text-xs text-white/90 font-medium mt-0.5">
                      {creator.hookStyle}
                    </p>
                  </div>

                  {/* Platform Icons & Engagement */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono">
                    <div className="flex items-center space-x-2 text-white/60">
                      {creator.platforms.includes("instagram") && <Instagram className="w-3.5 h-3.5" />}
                      {creator.platforms.includes("youtube") && <Youtube className="w-3.5 h-3.5" />}
                      {creator.platforms.includes("twitter") && <Twitter className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-electric-amber font-semibold">
                      {creator.engagement} Avg. Eng.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
