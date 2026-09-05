"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, Target, Flame, Sparkles, TrendingUp, Award, ShieldCheck, Check } from "lucide-react";
import { Footer } from "@/components/common/Footer";

const milestones = [
  {
    year: "2021",
    title: "The Cringe Ad Revolt",
    desc: "Founded in Mumbai by a crew of meme creators and rogue editors tired of watching brands spend millions on TV commercials that nobody watched.",
  },
  {
    year: "2023",
    title: "The 100M Attention Breakthrough",
    desc: "Our creator syndicate surpassed 100M monthly active views. Launched our dedicated 45-minute trend-jacking war room.",
  },
  {
    year: "2025",
    title: "Bengaluru Expansion & 1,000 Campaigns",
    desc: "Opened our second production hub in Indiranagar, Bengaluru. Reached 1,000 executed viral campaigns with 90%+ average completion.",
  },
  {
    year: "2026",
    title: "The AI Viral Engine Era",
    desc: "Scaled our attention reach to 1.35B+ monthly impressions, ranking our syndicate reach ahead of world superpowers.",
  },
];

const team = [
  {
    name: "Siddharth Roy",
    role: "Founder & Chief Viral Architect",
    bio: "Ex-meme page creator turned viral strategist. Has generated 3B+ views across consumer tech and D2C brands.",
    gradient: "from-orange-500 to-amber-700",
  },
  {
    name: "Maya Kapoor",
    role: "Head of Meme War Rooms",
    bio: "Manages a network of 100+ high-traffic meme channels. Turns breaking cultural moments into brand memes in under 45 minutes.",
    gradient: "from-pink-600 to-purple-800",
  },
  {
    name: "Kabir Nair",
    role: "Director of Short-Form Motion",
    bio: "Award-winning vertical video director. Pioneered sound-design acoustic hooks and rapid micro-cutting pacing.",
    gradient: "from-blue-600 to-indigo-800",
  },
  {
    name: "Ananya Sen",
    role: "VP of Creator Syndicate",
    bio: "Leads relationships with 250+ top creators across India. Expert in authentic, non-canned creator co-creation.",
    gradient: "from-emerald-600 to-teal-800",
  },
];

const rules = [
  "Never make an ad that looks, sounds, or smells like an ad.",
  "If the viewer doesn't smile, replay, or argue in the comments, rewrite the script.",
  "The first 3 seconds are 90% of the battle. Treat frame 00:01 like a billboard in Times Square.",
  "Memes are faster than press releases. Move at the speed of the feed.",
  "Sound is 50% of the hook. Acoustic pattern interrupts beat silent visuals every single time.",
  "Kill corporate approval committees. If a joke needs an explanation to senior management, it's already dead.",
  "Respect the algorithm; revere the human.",
  "A/B test five hooks minimum for every core video concept.",
  "Relatability beats high-budget CGI every day of the week.",
  "Stop the thumb. Hold the mind. Spark the legend.",
];

export default function AboutPage() {
  const [retentionTab, setRetentionTab] = useState<"3seconds" | "traditional">("3seconds");

  return (
    <div className="pt-28 md:pt-36 bg-[#FAF6EE] text-[#121212] min-h-screen">
      {/* Hero Manifesto */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-hook-orange" />
          <span>OUR MANIFESTO</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne uppercase tracking-tight leading-[0.95] max-w-5xl">
          MARKETING ISN&apos;T A FORMULA. <br />
          <span className="gradient-text-hook">IT&apos;S A PULSE.</span>
        </h1>

        <p className="mt-8 font-sans text-lg sm:text-2xl text-text-dark-secondary max-w-3xl leading-relaxed">
          &quot;3 seconds to stop the thumb. 30 seconds to build a legend.&quot;
        </p>
        <p className="mt-4 font-sans text-base md:text-lg text-text-dark-muted max-w-2xl leading-relaxed">
          Legacy agencies take six months and half a million dollars to produce a 60-second TV commercial that modern consumers immediately skip. 
          We engineer high-retention vertical videos and cultural memes tested on millions of real viewers in real time.
        </p>

        {/* Interactive Retention Split-Screen Comparison */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl bg-white border border-black/10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/10 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
                Audience Retention Benchmark
              </span>
              <h3 className="font-syne font-black text-xl md:text-2xl uppercase tracking-tight text-[#121212] mt-0.5">
                The 3-Second Retention Curve
              </h3>
            </div>

            <div className="flex items-center space-x-2 bg-black/5 p-1 rounded-full self-start">
              <button
                onClick={() => setRetentionTab("3seconds")}
                className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  retentionTab === "3seconds"
                    ? "bg-hook-orange text-white font-bold shadow-md"
                    : "text-black/60 hover:text-black"
                }`}
              >
                3seconds Hook Model
              </button>
              <button
                onClick={() => setRetentionTab("traditional")}
                className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  retentionTab === "traditional"
                    ? "bg-[#121212] text-white font-bold shadow-md"
                    : "text-black/60 hover:text-black"
                }`}
              >
                Traditional Ad Model
              </button>
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-black/5">
              <span className="font-mono text-xs text-black/50 uppercase">00s - 03s (The Hook)</span>
              <div className="font-mono font-black text-3xl mt-2 text-hook-orange">
                {retentionTab === "3seconds" ? "94.2%" : "38.0%"}
              </div>
              <p className="text-xs text-black/70 mt-1">
                {retentionTab === "3seconds"
                  ? "Acoustic interrupt holds viewers"
                  : "Rapid swipe-away drop-off"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/5">
              <span className="font-mono text-xs text-black/50 uppercase">03s - 15s (The Hold)</span>
              <div className="font-mono font-black text-3xl mt-2 text-electric-amber">
                {retentionTab === "3seconds" ? "88.6%" : "18.4%"}
              </div>
              <p className="text-xs text-black/70 mt-1">
                {retentionTab === "3seconds"
                  ? "Micro-cut dopamine pacing"
                  : "Slow logo intro causes boredom"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/5">
              <span className="font-mono text-xs text-black/50 uppercase">15s - 30s (The Payoff)</span>
              <div className="font-mono font-black text-3xl mt-2 text-[#121212]">
                {retentionTab === "3seconds" ? "81.4%" : "9.2%"}
              </div>
              <p className="text-xs text-black/70 mt-1">
                {retentionTab === "3seconds"
                  ? "Meme twist & emotional punch"
                  : "Viewer has long tuned out"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/5">
              <span className="font-mono text-xs text-black/50 uppercase">Engagement & Shares</span>
              <div className="font-mono font-black text-3xl mt-2 text-hook-orange">
                {retentionTab === "3seconds" ? "4.8x" : "1.0x"}
              </div>
              <p className="text-xs text-black/70 mt-1">
                {retentionTab === "3seconds"
                  ? "Organic comment section debates"
                  : "Zero unprompted shares"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Milestones */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
              02 // ORIGIN & CHRONOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-syne uppercase tracking-tight mt-1">
              THE VIRAL TRAJECTORY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-2xl bg-[#FAF6EE] border border-black/8 hover:border-hook-orange transition-all duration-300"
              >
                <span className="font-mono text-4xl font-black text-hook-orange">{m.year}</span>
                <h4 className="font-syne font-bold text-lg text-[#121212] uppercase tracking-tight mt-3 mb-2">
                  {m.title}
                </h4>
                <p className="font-sans text-xs text-text-dark-secondary leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 p-8 rounded-2xl bg-[#121212] text-white grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-mono text-3xl md:text-4xl font-black text-hook-orange">500M+</div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                Organic Views Generated
              </p>
            </div>
            <div>
              <div className="font-mono text-3xl md:text-4xl font-black text-white">1,200+</div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                Viral Campaigns Executed
              </p>
            </div>
            <div>
              <div className="font-mono text-3xl md:text-4xl font-black text-electric-amber">350+</div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                Creator Partnerships
              </p>
            </div>
            <div>
              <div className="font-mono text-3xl md:text-4xl font-black text-hook-orange">94.2%</div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">
                Avg 3s Hook Retention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Creative Disruptors */}
      <section className="py-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
            03 // LEADERSHIP & WAR ROOM DIRECTORS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-syne uppercase tracking-tight mt-1">
            THE MINDS BEHIND THE VIRAL STORM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              data-cursor="LEADER"
              className="p-6 rounded-2xl bg-white border border-black/10 hover:border-hook-orange shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-full h-48 rounded-xl bg-gradient-to-tr ${member.gradient} mb-6 flex items-center justify-center text-white font-syne font-black text-4xl shadow-inner group-hover:scale-[1.02] transition-transform`}
                >
                  {member.name.split(" ")[0][0]}
                  {member.name.split(" ")[1][0]}
                </div>

                <h3 className="font-syne font-black text-xl uppercase tracking-tight text-[#121212] group-hover:text-hook-orange transition-colors">
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-hook-orange uppercase tracking-wider font-semibold mt-0.5">
                  {member.role}
                </p>
                <p className="font-sans text-xs text-text-dark-secondary mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-black/50">
                <span>Verified Strategist</span>
                <ShieldCheck className="w-4 h-4 text-hook-orange" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 10 Anti-Boring Rules */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-[#0A0A0A] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
              04 // OUR CREATIVE POLICY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-syne uppercase tracking-tight mt-1">
              THE 10 ANTI-BORING RULES
            </h2>
            <p className="text-sm text-white/60 font-sans mt-3">
              The internal rules etched into our studio walls in New York and Los Angeles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-5 rounded-2xl bg-[#161616] border border-white/8 hover:border-hook-orange/60 transition-colors"
              >
                <span className="font-mono text-sm font-bold text-hook-orange flex-shrink-0 mt-0.5">
                  {(idx + 1).toString().padStart(2, "0")}.
                </span>
                <p className="font-sans text-sm text-white/90 font-medium leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              data-cursor="TALK"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-hook-orange hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg"
            >
              <span>Bring These Rules To Your Brand</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
