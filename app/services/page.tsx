"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Calculator, Video, MessageSquare, TrendingUp, Users, Flame, Play } from "lucide-react";
import { Footer } from "@/components/common/Footer";

const serviceDetails = [
  {
    id: "short-form",
    num: "01",
    title: "Short-Form Viral Video (Reels, TikTok, Shorts)",
    tag: "94% Hook Retention",
    icon: Video,
    description:
      "High-energy vertical video engineered specifically for algorithm amplification. We script, cast, shoot, sound-design, and edit assets designed to stop thumb flicking in under 3 seconds.",
    deliverables: [
      "5 distinct 3-second hook variations per core concept (A/B testing)",
      "High-velocity micro-cutting pacing with professional sound design",
      "Dynamic stylized kinetic subtitles and graphical pattern interrupts",
      "Full native 9:16 vertical delivery with platform compliance",
    ],
    kpis: "Hook retention rate > 85%, APV (Average Percentage Viewed) > 90%",
  },
  {
    id: "meme-marketing",
    num: "02",
    title: "Meme Marketing & Cultural Seeding",
    tag: "600M+ Meme Syndicate",
    icon: MessageSquare,
    description:
      "Turning brands into viral conversation starters using authentic internet humor, cultural tropes, and relatable formats across hundreds of verified meme communities.",
    deliverables: [
      "45-minute rapid-response war room turning breaking trends into brand memes",
      "Custom bespoke meme templates designed for your brand's unique persona",
      "Guaranteed distribution across tier-1 meme channels with unprompted reach",
      "Crisis-safe moderation ensuring zero brand backlash",
    ],
    kpis: "Organic saves, shares, unprompted quote-tweets, earned media value (EMV)",
  },
  {
    id: "ad-production",
    num: "03",
    title: "High-Velocity Direct-Response Ads (ROAS)",
    tag: "3.4x Average ROAS",
    icon: TrendingUp,
    description:
      "Direct-response performance video ads built specifically for Meta Ads, TikTok Spark Ads, and YouTube Shorts Ads. Eliminates ad fatigue with high-frequency creative refreshes.",
    deliverables: [
      "Iterative testing of visual hooks, emotional angles, and problem-solution payoffs",
      "High-converting behavioral psychology triggers and low-friction CTAs",
      "Complete creative asset library: Hooks, Body variations, and Endcards",
      "Continuous creative iteration based on live ad performance metrics",
    ],
    kpis: "ROAS multiplier (3.0x - 5.0x), CTR > 3.5%, Cost Per Acquisition (CPA) drop",
  },
  {
    id: "creator-syndicate",
    num: "04",
    title: "Creator Syndicate & Cultural Co-Creation",
    tag: "250+ Verified Creators",
    icon: Users,
    description:
      "Partnering with authentic internet storytellers for unsponsored-feeling cultural skits, honest demonstrations, and comedic integration that audiences actually enjoy.",
    deliverables: [
      "Talent matchmaking and data-backed creator casting by audience demographic",
      "Creative concept briefs ensuring zero corporate cringe or robotic scripting",
      "End-to-end contract management, usage rights, and timely asset delivery",
      "Collaborative publishing and paid amplification via creator handles",
    ],
    kpis: "Engagement rate > 8.5%, positive sentiment ratio > 92%",
  },
  {
    id: "trend-jacking",
    num: "05",
    title: "Twitter/X Trend Engineering & Narrative Control",
    tag: "150+ Top-10 Trends",
    icon: Flame,
    description:
      "Strategic hashtag deployment, high-reputation quote-tweet momentum, and organic narrative control designed to dominate social discussion without feeling manufactured.",
    deliverables: [
      "Real-time social sentiment monitoring and conversational trend triggers",
      "Strategic influencer tweet cascades that ignite grassroots discussion",
      "Comprehensive crisis neutralization and narrative redirection",
      "Post-campaign sentiment analysis and reach audit reports",
    ],
    kpis: "National Top-5 Trending Topic, Impressions volume, Earned Press pickup",
  },
  {
    id: "youtube-ecosystems",
    num: "06",
    title: "YouTube Ecosystems & Retention Editing",
    tag: "12% Avg CTR",
    icon: Play,
    description:
      "Transforming YouTube channels into subscriber-converting engines through extreme thumbnail psychology, first-60-second retention editing, and vertical Shorts funnels.",
    deliverables: [
      "High-contrast thumbnail A/B package generation (tested on live viewers)",
      "Retention heat-map editing eliminating dead air, pauses, and lull moments",
      "Shorts-to-Longform conversion funnels and Community Tab syndication",
      "Channel metadata optimization for algorithmic search and browse surfaces",
    ],
    kpis: "First-60s retention > 75%, 24-hour Views Per Hour (VPH), CTR > 10%",
  },
];

export default function ServicesPage() {
  // Deliverables Estimator State
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "short-form",
    "meme-marketing",
  ]);
  const [duration, setDuration] = useState<"1-month" | "3-month" | "ongoing">("3-month");
  const [volume, setVolume] = useState<"starter" | "growth" | "domination">("growth");

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Dynamic calculations
  const calculateTier = () => {
    const serviceCount = selectedServices.length;
    let baseAssets = 12;
    let baseViews = "25M - 50M";
    let tierName = "Viral Growth Syndicate";

    if (volume === "starter") {
      baseAssets = serviceCount * 6;
      baseViews = "10M - 25M";
      tierName = "Sprint Launchpad";
    } else if (volume === "growth") {
      baseAssets = serviceCount * 14;
      baseViews = "50M - 120M";
      tierName = "Viral Dominance Engine";
    } else {
      baseAssets = serviceCount * 28;
      baseViews = "150M+ Guaranteed";
      tierName = "Omnichannel Superpower";
    }

    return { baseAssets, baseViews, tierName };
  };

  const { baseAssets, baseViews, tierName } = calculateTier();

  return (
    <div className="pt-28 md:pt-36 bg-[#FAF6EE] text-[#121212] min-h-screen">
      {/* Hero Header */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-hook-orange" />
          <span>CAPABILITIES & ARSENAL</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne uppercase tracking-tight leading-[0.95] max-w-5xl">
          ENGINEERED FOR <br />
          <span className="gradient-text-hook">CULTURAL DOMINANCE.</span>
        </h1>

        <p className="mt-8 font-sans text-lg sm:text-2xl text-text-dark-secondary max-w-3xl leading-relaxed">
          We don&apos;t sell generic agency retainers. We sell calibrated attention pipelines built to turn algorithms into your brand&apos;s personal distribution channel.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="space-y-8">
          {serviceDetails.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-8 md:p-12 rounded-3xl bg-white border border-black/10 shadow-sm hover:border-hook-orange hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  {/* Left Column: Number & Title */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="font-mono text-xl font-bold text-hook-orange">
                        {service.num}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-orange-50 text-hook-orange font-mono text-xs font-bold uppercase tracking-wider">
                        {service.tag}
                      </span>
                    </div>

                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-hook-orange flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-syne font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#121212]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="font-sans text-base text-text-dark-secondary leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 p-4 rounded-xl bg-black/5 font-mono text-xs text-black/80">
                      <strong className="text-hook-orange uppercase tracking-wider">Performance SLA: </strong>
                      {service.kpis}
                    </div>
                  </div>

                  {/* Right Column: Deliverables List */}
                  <div className="lg:w-1/2 bg-[#FAF6EE] p-6 md:p-8 rounded-2xl border border-black/8">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 font-bold mb-4">
                      Core Deliverables Included:
                    </h4>

                    <div className="space-y-3">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-4 h-4 text-hook-orange flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-text-dark-secondary font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
                      <Link
                        href="/contact"
                        data-cursor="BRIEF"
                        className="px-5 py-2.5 rounded-full bg-hook-orange hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-md inline-flex items-center space-x-2"
                      >
                        <span>Request Specific Proposal</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Campaign Deliverables Calculator */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-[#0A0A0A] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 font-mono text-xs uppercase tracking-widest text-hook-orange mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>INTERACTIVE ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-syne uppercase tracking-tight">
              CAMPAIGN DELIVERABLES CALCULATOR
            </h2>
            <p className="text-sm text-white/60 font-sans mt-3">
              Select your capabilities and volume to simulate your campaign output and attention benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
            {/* Left Column: Interactive Selectors */}
            <div className="lg:col-span-7 space-y-8 bg-[#161616] p-6 md:p-8 rounded-3xl border border-white/10">
              {/* Step 1: Select Services */}
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold block mb-3">
                  Step 1: Choose Capabilities
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceDetails.map((s) => {
                    const isSelected = selectedServices.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleService(s.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all text-xs font-mono flex items-center justify-between ${
                          isSelected
                            ? "bg-hook-orange/20 border-hook-orange text-white"
                            : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                        }`}
                      >
                        <span className="truncate pr-2">{s.title.split("(")[0]}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected
                              ? "bg-hook-orange border-hook-orange text-white"
                              : "border-white/30"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Scale & Volume */}
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold block mb-3">
                  Step 2: Campaign Velocity Tier
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "starter", label: "Sprint", desc: "Rapid Test" },
                    { id: "growth", label: "Scale", desc: "Heavy Organic" },
                    { id: "domination", label: "Syndicate", desc: "Omnichannel Takeover" },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVolume(v.id as any)}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        volume === v.id
                          ? "bg-electric-amber text-black font-bold border-electric-amber"
                          : "bg-white/5 border-white/10 text-white/70 hover:text-white"
                      }`}
                    >
                      <div className="font-syne uppercase text-sm font-bold">{v.label}</div>
                      <div className="font-mono text-[10px] opacity-75">{v.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Commitment Period */}
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold block mb-3">
                  Step 3: Campaign Duration
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "1-month", label: "30-Day Sprint" },
                    { id: "3-month", label: "Quarterly Scale" },
                    { id: "ongoing", label: "Annual Syndicate" },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDuration(d.id as any)}
                      className={`py-2.5 px-3 rounded-xl border text-center font-mono text-xs transition-all ${
                        duration === d.id
                          ? "bg-hook-orange text-white font-bold border-hook-orange"
                          : "bg-white/5 border-white/10 text-white/70 hover:text-white"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Campaign Summary */}
            <div className="lg:col-span-5 bg-[#1a1a1a] p-8 rounded-3xl border-2 border-hook-orange shadow-[0_12px_40px_rgba(255,87,34,0.2)]">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                Recommended Architecture
              </span>
              <h3 className="font-syne font-black text-2xl md:text-3xl uppercase tracking-tight text-white mt-1 mb-6">
                {tierName}
              </h3>

              <div className="space-y-4 py-6 border-y border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/60">Estimated Monthly Deliverables:</span>
                  <span className="font-mono font-bold text-xl text-hook-orange">
                    {baseAssets} Custom Assets
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/60">Target Attention Reach:</span>
                  <span className="font-mono font-bold text-xl text-electric-amber">
                    {baseViews}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/60">Selected Capabilities:</span>
                  <span className="font-mono font-bold text-sm text-white">
                    {selectedServices.length} Pillars
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/60">Turnaround Time:</span>
                  <span className="font-mono font-bold text-sm text-white">
                    48h Per Hook Variant
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={`/contact?tier=${encodeURIComponent(tierName)}&services=${selectedServices.join(",")}`}
                  data-cursor="PROCEED"
                  className="w-full py-4 rounded-full bg-hook-orange hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Lock In This Campaign Tier</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="font-mono text-[10px] text-white/40 text-center mt-3">
                  Zero setup lock-ins. SLA guaranteed performance metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
