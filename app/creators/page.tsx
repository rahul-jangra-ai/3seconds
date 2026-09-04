"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Instagram, Youtube, Twitter, Users, Sparkles, Filter, X, Send } from "lucide-react";
import { Footer } from "@/components/common/Footer";

interface CreatorProfile {
  id: string;
  name: string;
  handle: string;
  niche: "memes" | "comedy" | "tech" | "fashion" | "regional";
  nicheLabel: string;
  followers: string;
  engagement: string;
  signatureStyle: string;
  platforms: string[];
  gradient: string;
}

const creators: CreatorProfile[] = [
  {
    id: "sarcastic-us",
    name: "Sarcastic Us Network",
    handle: "@sarcastic_us",
    niche: "memes",
    nicheLabel: "Meme Pages & Satire",
    followers: "14.7M",
    engagement: "6.8%",
    signatureStyle: "Dark Satire & Absurdist Text Hooks",
    platforms: ["Instagram", "Twitter"],
    gradient: "from-orange-500 to-amber-700",
  },
  {
    id: "ghantaa",
    name: "Ghantaa Viral Hub",
    handle: "@ghantaa",
    niche: "memes",
    nicheLabel: "Meme Pages & Satire",
    followers: "11.2M",
    engagement: "8.1%",
    signatureStyle: "Bollywood Spin & Acoustic Sound Remakes",
    platforms: ["Instagram", "YouTube"],
    gradient: "from-pink-600 to-purple-800",
  },
  {
    id: "aarav-skits",
    name: "Aarav Sharma",
    handle: "@aaravcomedy",
    niche: "comedy",
    nicheLabel: "Comedy & Skits",
    followers: "4.8M",
    engagement: "9.4%",
    signatureStyle: "Awkward POV & Split-Second Slapstick",
    platforms: ["Instagram", "YouTube"],
    gradient: "from-blue-500 to-indigo-700",
  },
  {
    id: "tech-rohit",
    name: "Rohit Tech Blitz",
    handle: "@rohittech",
    niche: "tech",
    nicheLabel: "Tech & Gadgets",
    followers: "3.6M",
    engagement: "7.9%",
    signatureStyle: "Speed Drop-Tests & 3s Spec Teasers",
    platforms: ["YouTube", "Instagram"],
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    id: "zoya-vibe",
    name: "Zoya Akhtar",
    handle: "@zoyavibes",
    niche: "fashion",
    nicheLabel: "Fashion & Aesthetics",
    followers: "3.2M",
    engagement: "11.2%",
    signatureStyle: "Chaotic GRWM & Unfiltered Wardrobe Meltdowns",
    platforms: ["Instagram", "YouTube"],
    gradient: "from-emerald-500 to-teal-800",
  },
  {
    id: "pendu-virals",
    name: "Pendu Virals",
    handle: "@penduvirals",
    niche: "regional",
    nicheLabel: "Regional (Punjabi/North)",
    followers: "5.4M",
    engagement: "10.5%",
    signatureStyle: "Punjabi Dialect Roasts & Desi Beats",
    platforms: ["Instagram", "YouTube"],
    gradient: "from-red-600 to-amber-600",
  },
  {
    id: "the-indian-idiot",
    name: "The Indian Idiot",
    handle: "@theindianidiot",
    niche: "memes",
    nicheLabel: "Meme Pages & Satire",
    followers: "8.9M",
    engagement: "7.3%",
    signatureStyle: "Relatable College & Corporate Trauma",
    platforms: ["Instagram", "Twitter"],
    gradient: "from-yellow-500 to-orange-700",
  },
  {
    id: "south-mass",
    name: "Mass Memes South",
    handle: "@mass_memes_south",
    niche: "regional",
    nicheLabel: "Regional (Tamil & Telugu)",
    followers: "7.2M",
    engagement: "9.1%",
    signatureStyle: "High-Energy Mass BGM & Cinema Tropes",
    platforms: ["Instagram", "Twitter"],
    gradient: "from-purple-700 to-pink-900",
  },
];

export default function CreatorsPage() {
  const [activeNiche, setActiveNiche] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const filteredCreators =
    activeNiche === "all"
      ? creators
      : creators.filter((c) => c.niche === activeNiche);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <div className="pt-28 md:pt-36 bg-[#FAF6EE] text-[#121212] min-h-screen">
      {/* Hero Header */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
              <Users className="w-3.5 h-3.5 text-hook-orange" />
              <span>THE 3SECONDS CREATOR SYNDICATE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne uppercase tracking-tight leading-[0.95] max-w-4xl">
              OUR BUDDIES. <br />
              <span className="gradient-text-hook">THE LIVING NETWORK.</span>
            </h1>

            <p className="mt-8 font-sans text-lg sm:text-2xl text-text-dark-secondary max-w-2xl leading-relaxed">
              We manage and collaborate with a private syndicate of 250+ internet creators and 100+ high-traffic meme pages with an aggregate reach exceeding <strong className="text-hook-orange">600+ Million followers</strong>.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            data-cursor="JOIN"
            className="px-8 py-4 rounded-full bg-hook-orange hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-xl self-start md:self-auto flex items-center space-x-2"
          >
            <span>Apply To Join Syndicate</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Audience Reach Demographics Infographic */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-[#0A0A0A] text-white border border-white/10 shadow-2xl">
          <div className="border-b border-white/10 pb-8 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
                Aggregate Audience Intelligence
              </span>
              <h3 className="font-syne font-black text-2xl md:text-4xl uppercase tracking-tight text-white mt-1">
                600M+ Social Attention Heatmap
              </h3>
            </div>
            <div className="font-mono text-xs text-white/50 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              Verified Across 250+ Partner Channels
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1: Gen-Z */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <span className="font-mono text-xs text-hook-orange uppercase tracking-wider">Demographic</span>
              <div className="font-mono font-black text-4xl text-white mt-2">62%</div>
              <p className="font-sans text-xs text-white/70 mt-1 font-semibold">Gen-Z (Ages 18 — 24)</p>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                <div className="w-[62%] h-full bg-hook-orange rounded-full" />
              </div>
            </div>

            {/* Stat 2: Millennials */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <span className="font-mono text-xs text-electric-amber uppercase tracking-wider">Demographic</span>
              <div className="font-mono font-black text-4xl text-white mt-2">31%</div>
              <p className="font-sans text-xs text-white/70 mt-1 font-semibold">Young Millennials (25 — 34)</p>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                <div className="w-[31%] h-full bg-electric-amber rounded-full" />
              </div>
            </div>

            {/* Stat 3: Gender Split */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <span className="font-mono text-xs text-white/50 uppercase tracking-wider">Audience Split</span>
              <div className="font-mono font-black text-4xl text-white mt-2">52 / 48</div>
              <p className="font-sans text-xs text-white/70 mt-1 font-semibold">Male 52% / Female 48%</p>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                <div className="w-[52%] h-full bg-white/80 rounded-full" />
              </div>
            </div>

            {/* Stat 4: Primary Platforms */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <span className="font-mono text-xs text-hook-orange uppercase tracking-wider">Top Surface</span>
              <div className="font-mono font-black text-4xl text-white mt-2">58%</div>
              <p className="font-sans text-xs text-white/70 mt-1 font-semibold">Instagram Reels (YT Shorts 24%)</p>
              <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                <div className="w-[58%] h-full bg-gradient-to-r from-hook-orange to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Creator Roster */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-28">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-black/10 gap-4">
          <div>
            <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#121212]">
              Verified Syndicate Roster
            </h3>
            <p className="font-mono text-xs text-black/50 mt-1">
              Showing {filteredCreators.length} of 250+ managed partner accounts
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 custom-scrollbar">
            {[
              { id: "all", label: "All Niches" },
              { id: "memes", label: "Meme Pages" },
              { id: "comedy", label: "Comedy & Skits" },
              { id: "tech", label: "Tech" },
              { id: "fashion", label: "Fashion" },
              { id: "regional", label: "Regional" },
            ].map((n) => (
              <button
                key={n.id}
                onClick={() => setActiveNiche(n.id)}
                data-cursor="FILTER"
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex-shrink-0 ${
                  activeNiche === n.id
                    ? "bg-[#121212] text-white font-bold shadow-sm"
                    : "bg-white border border-black/10 text-black/60 hover:text-black"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>

        {/* Creator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCreators.map((c) => (
            <div
              key={c.id}
              data-cursor="CREATOR"
              className="p-6 rounded-3xl bg-white border border-black/10 hover:border-hook-orange shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${c.gradient} flex items-center justify-center text-white font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform`}
                  >
                    {c.name.charAt(0)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-100 font-mono text-xs font-bold text-hook-orange">
                    {c.followers}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5">
                  <h4 className="font-syne font-black text-lg text-[#121212] group-hover:text-hook-orange transition-colors">
                    {c.name}
                  </h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-hook-orange fill-hook-orange/20" />
                </div>
                <p className="font-mono text-xs text-black/40">{c.handle}</p>

                <div className="mt-4 p-3 rounded-xl bg-[#FAF6EE] border border-black/5">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-black/40 block">
                    Signature Hook Method
                  </span>
                  <p className="font-sans text-xs text-text-dark-secondary font-medium mt-0.5">
                    {c.signatureStyle}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono">
                <span className="text-black/50">{c.platforms.join(", ")}</span>
                <span className="font-bold text-electric-amber">{c.engagement} Avg</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Intake Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 md:p-10 border border-black/20 shadow-2xl animate-fadeIn my-8">
            <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-6">
              <div>
                <span className="font-mono text-xs text-hook-orange uppercase tracking-widest font-bold">
                  Creators With &gt; 50k Followers
                </span>
                <h3 className="font-syne font-black text-2xl uppercase tracking-tight text-[#121212]">
                  Join The 3seconds Syndicate
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-hook-orange hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-syne font-black text-2xl uppercase text-[#121212]">
                  Application Received!
                </h4>
                <p className="font-sans text-sm text-text-dark-secondary max-w-sm mx-auto">
                  Our creator partnerships war room will review your profile metrics and reach out via Instagram / WhatsApp within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                    Primary Page / Creator Handle *
                  </label>
                  <input
                    required
                    placeholder="@yourhandle (e.g. Instagram / YouTube)"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                      Current Follower Count *
                    </label>
                    <input
                      required
                      placeholder="e.g. 150k Followers"
                      className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    />
                  </div>
                  <div>
                    <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                      Primary Niche *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    >
                      <option>Meme & Relatable Satire</option>
                      <option>Short-Form Comedy Skits</option>
                      <option>Tech & Gaming Reviews</option>
                      <option>Fashion & GRWM</option>
                      <option>Regional / Desi Humor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                    WhatsApp or Contact Email *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="email@domain.com or +91..."
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                  />
                </div>

                <div>
                  <label className="block text-black/60 uppercase tracking-wider mb-1.5 font-bold">
                    Link To Your Best-Performing Viral Reel / Video *
                  </label>
                  <input
                    required
                    type="url"
                    placeholder="https://www.instagram.com/reel/..."
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="SUBMIT"
                  className="w-full mt-4 py-4 rounded-full bg-hook-orange hover:bg-black text-white font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Submit Syndicate Intake</span>
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
