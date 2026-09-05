"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus, CheckCircle2, Sparkles } from "lucide-react";

interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  metric: string;
}

const servicesData: ServiceItem[] = [
  {
    num: "01",
    title: "MEME MARKETING",
    subtitle: "Turning pop-culture relatability into organic brand equity.",
    description:
      "The effortless combination of internet humor and brand positioning that transforms passive scrollers into passionate advocates.",
    points: [
      "Access to 600M+ aggregate meme network and regional pages",
      "Dedicated rapid-response war room turning trending topics into memes within 45 minutes",
      "Over 1,200 successful meme campaigns executed across India & global feeds",
    ],
    metric: "4.8x Higher Organic Shareability",
  },
  {
    num: "02",
    title: "SHORT-FORM VIDEO",
    subtitle: "High-velocity vertical video engineered for algorithm completion.",
    description:
      "Engineered from the very first frame to beat platform drop-off curves. We script, cast, shoot, and sound-design high-energy vertical reels.",
    points: [
      "Proprietary 3-second hook testing methodology (A/B/C/D variants)",
      "Full-stack production crew in New York and Los Angeles delivering 50+ high-retention assets monthly",
      "Targeting 85%+ Average Percentage Viewed (APV) on Reels, TikTok & Shorts",
    ],
    metric: "94% 3-Second Hook Retention",
  },
  {
    num: "03",
    title: "TWITTER/X TREND JACKING",
    subtitle: "Strategic hashtag momentum and narrative amplification.",
    description:
      "We control digital conversations by deploying high-reputation accounts, quote-tweet cascades, and authentic grassroots discussions.",
    points: [
      "Delivered over 150 top-10 nationally trending campaigns",
      "Expertise in organic conversation seeding and crisis insulation",
      "Real-time sentiment monitoring and sentiment turning maneuvers",
    ],
    metric: "#1 National Trend Guaranteed",
  },
  {
    num: "04",
    title: "HIGH-VELOCITY AD ROAS",
    subtitle: "Direct-response performance video ads built to scale revenue.",
    description:
      "Eliminating creative fatigue with continuous algorithmic testing. We build direct-response assets built for Meta Ads, TikTok, and YouTube.",
    points: [
      "Iterative testing of 5+ distinct hooks per creative angle",
      "Consistently beats client benchmark CPAs by 30-50%",
      "Rapid turnaround time of 48 hours for fresh creative sprints",
    ],
    metric: "3.4x Average ROAS Multiplier",
  },
  {
    num: "05",
    title: "CREATOR SYNDICATE",
    subtitle: "Unsponsored-feeling cultural creator collaborations.",
    description:
      "Matchmaking modern brands with authentic internet storytellers for native, cultural skits that viewers actually respect.",
    points: [
      "Zero cringe, zero canned corporate scripts",
      "Guaranteed minimum reach and tangible engagement SLAs",
      "End-to-end management from brief to compliance and publishing",
    ],
    metric: "250+ Verified Syndicate Creators",
  },
  {
    num: "06",
    title: "YOUTUBE ECOSYSTEMS",
    subtitle: "High-CTR packaging and first-60-second retention editing.",
    description:
      "Transforming long-form YouTube channels into subscriber-printing machines through psychological hook editing and Shorts distribution.",
    points: [
      "Thumbnail A/B packaging achieving >10% Click-Through Rates",
      "Retention heat-map editing eliminating dead air and pauses",
      "Seamless short-to-long form funnel engineering",
    ],
    metric: "12% Avg. CTR & 70% Retention",
  },
];

export function ServicesAccordion() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIdx(activeIdx === index ? null : index);
  };

  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 lg:px-12 bg-[#FAF6EE] text-[#121212] border-t border-black/8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-hook-orange" />
              <span>05 // CAPABILITIES & OFFERINGS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-syne uppercase tracking-tight">
              WE DON&apos;T MAKE ADS. <br />
              <span className="gradient-text-hook">WE MAKE OBSESSIONS.</span>
            </h2>
          </div>

          <Link
            href="/services"
            data-cursor="ALL"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#121212] hover:bg-hook-orange text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 self-start md:self-auto"
          >
            <span>Explore All Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Hollow-to-Solid Accordion Matrix */}
        <div className="border-t border-black/15">
          {servicesData.map((service, index) => {
            const isOpen = activeIdx === index;
            return (
              <div
                key={service.num}
                className="border-b border-black/15 transition-all duration-300 group"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  data-cursor={isOpen ? "CLOSE" : "EXPAND"}
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-baseline space-x-4 md:space-x-8">
                    <span className="font-mono text-base md:text-xl font-bold text-black/40 group-hover:text-hook-orange transition-colors">
                      {service.num}
                    </span>

                    {/* Hollow-to-Solid Kinetic Title */}
                    <h3
                      className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-syne uppercase tracking-tight transition-all duration-300 ${
                        isOpen
                          ? "text-[#121212] translate-x-2"
                          : "text-hollow group-hover:text-[#121212]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Toggle Indicator */}
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-hook-orange border-hook-orange text-white rotate-180"
                        : "border-black/20 text-black/60 group-hover:border-black group-hover:text-black"
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Unfolding Accordion Drawer */}
                {isOpen && (
                  <div className="pb-10 md:pb-12 pl-8 md:pl-16 pr-4 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-black/8">
                      <div className="lg:col-span-6 space-y-4">
                        <p className="font-sans text-base md:text-lg text-text-dark-secondary font-medium">
                          {service.subtitle}
                        </p>
                        <p className="font-sans text-sm text-text-dark-muted leading-relaxed">
                          {service.description}
                        </p>

                        <div className="pt-2">
                          <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-100 text-hook-orange font-mono text-xs font-bold uppercase tracking-wider">
                            {service.metric}
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-6 space-y-4">
                        <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm space-y-3">
                          <p className="font-mono text-xs text-black/50 uppercase tracking-widest font-bold">
                            Strategic Highlights:
                          </p>
                          {service.points.map((pt, i) => (
                            <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-black/80">
                              <CheckCircle2 className="w-4 h-4 text-hook-orange flex-shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4 pt-2">
                          <Link
                            href="/contact"
                            data-cursor="BOOK"
                            className="px-5 py-2.5 rounded-full bg-hook-orange hover:bg-black text-white text-xs font-mono uppercase tracking-wider font-bold transition-colors shadow-md"
                          >
                            Book This Capability
                          </Link>
                          <Link
                            href="/services"
                            data-cursor="SPECS"
                            className="text-xs font-mono font-bold text-black/70 hover:text-hook-orange transition-colors uppercase underline decoration-1"
                          >
                            Full Scope Breakdown →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
