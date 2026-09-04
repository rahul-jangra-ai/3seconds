"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Eye, TrendingUp, Share2, Sparkles, Filter, X, Quote, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/common/Footer";

interface WorkProject {
  id: string;
  client: string;
  title: string;
  category: "memes" | "ecommerce" | "entertainment" | "tech";
  categoryLabel: string;
  heroImageGradient: string;
  hookHypothesis: string;
  views: string;
  retention: string;
  impact: string;
  brief: string;
  hookVariants: { name: string; desc: string; result: string }[];
  clientQuote: string;
  clientAuthor: string;
}

const projects: WorkProject[] = [
  {
    id: "myntra-wardrobe",
    client: "MYNTRA",
    title: "The 3-Second Wardrobe Meltdown",
    category: "ecommerce",
    categoryLabel: "E-COMMERCE & FASHION",
    heroImageGradient: "from-pink-600 via-purple-700 to-indigo-900",
    hookHypothesis: '"Don\'t wear this to a wedding unless you want to steal the spotlight." Reversed psychology pattern interrupt.',
    views: "48.2M",
    retention: "84.2%",
    impact: "3.4x Sales Spike",
    brief: "Myntra needed to drive unprecedented app installs and wedding collection purchases during festive season peak ad congestion.",
    hookVariants: [
      { name: "Hook A (Negative Curiosity)", desc: "Warning viewers not to purchase the outfit because of extreme jealousy.", result: "Winner (84% 3s retention)" },
      { name: "Hook B (Direct Showcase)", desc: "Standard 360 spinning model with price tag reveal.", result: "Average (42% retention)" },
      { name: "Hook C (Audio Remake)", desc: "Trending Bollywood audio beat drop synced with snap cuts.", result: "High viral reach (72% retention)" },
    ],
    clientQuote: "3seconds shattered our cost-per-acquisition benchmarks by 40% while driving over 48M authentic organic views.",
    clientAuthor: "VP of Growth & Brand, Myntra",
  },
  {
    id: "balaji-wafers",
    client: "BALAJI WAFERS",
    title: "The Crunch That Broke The Feed",
    category: "memes",
    categoryLabel: "VIRAL MEMES & FMCG",
    heroImageGradient: "from-amber-500 via-orange-600 to-red-800",
    hookHypothesis: "Hyper-isolated ASMR acoustic crunch sound interrupt occurring at exactly second 00:00.12.",
    views: "32.5M",
    retention: "92.0%",
    impact: "1.8M Shares",
    brief: "Reinforce brand dominance across regional snack categories by hijacking everyday food cravings without traditional celebrity endorsements.",
    hookVariants: [
      { name: "Hook A (Acoustic Interrupt)", desc: "High-decibel ASMR crunch paired with dead silence in preceding frame.", result: "Dominant Winner (92% completion)" },
      { name: "Hook B (Street Food Debate)", desc: "Questioning whether wafers belong inside roadside sandwiches.", result: "High comment volume" },
    ],
    clientQuote: "The organic comment section turned into an unprompted fan club. Best meme ROI we've ever witnessed.",
    clientAuthor: "Marketing Director, Balaji Wafers",
  },
  {
    id: "spotify-india",
    client: "SPOTIFY INDIA",
    title: "The 2AM Playlist Intervention",
    category: "entertainment",
    categoryLabel: "ENTERTAINMENT & AUDIO",
    heroImageGradient: "from-green-600 via-emerald-700 to-teal-950",
    hookHypothesis: "Melancholic late-night lyric prompt that sparked 800k quote tweets across Twitter/X in 18 hours.",
    views: "82.0M",
    retention: "91.5%",
    impact: "#1 National Trend",
    brief: "Convert casual music listeners into daily active Spotify playlist curators using relatable late-night emotional hooks.",
    hookVariants: [
      { name: "Hook A (Late-Night Confession)", desc: "What song makes you stare at your ceiling at 2:14 AM?", result: "Viral wildfire (800k tweets)" },
      { name: "Hook B (Genre Battle)", desc: "90s Bollywood vs Modern Indie lofi.", result: "Strong debate engagement" },
    ],
    clientQuote: "3seconds understands internet sentiment better than any media team we've collaborated with globally.",
    clientAuthor: "Head of Cultural Marketing, Spotify",
  },
  {
    id: "noise-clock",
    client: "NOISE",
    title: "Beat The Clock Filter Challenge",
    category: "tech",
    categoryLabel: "TECH & WEARABLES",
    heroImageGradient: "from-blue-600 via-cyan-700 to-slate-900",
    hookHypothesis: "Gamified high-tempo reaction test filter challenging users to tap precisely at 3.00 seconds.",
    views: "65.0M+",
    retention: "88.0%",
    impact: "450k UGC Remakes",
    brief: "Launch the flagship Noise ColorFit smartwatch by engaging Gen-Z consumers in participatory interactive gameplay.",
    hookVariants: [
      { name: "Hook A (Reaction Test)", desc: "Can you stop this timer exactly on 3 seconds?", result: "Global viral filter trend" },
      { name: "Hook B (Influencer Duel)", desc: "Creators battling each other with forfeit stakes.", result: "High completion" },
    ],
    clientQuote: "Over 450,000 user-generated remakes generated without spending a single dollar on traditional media buying.",
    clientAuthor: "Chief Marketing Officer, Noise",
  },
  {
    id: "svish-hygiene",
    client: "SVISH",
    title: "The Unfiltered Metro Stunt",
    category: "ecommerce",
    categoryLabel: "D2C PERSONAL CARE",
    heroImageGradient: "from-emerald-500 via-teal-600 to-slate-900",
    hookHypothesis: "Absurdist situational humor depicting awkward crowded metro morning sweat standoffs.",
    views: "19.8M",
    retention: "79.0%",
    impact: "4.2x ROAS Meta Ads",
    brief: "Break taboos around intimate hygiene and body odor for young metro commuters through disarming comedy.",
    hookVariants: [
      { name: "Hook A (Awkward Eye Contact)", desc: "Extreme close-up of metro commuter realizing their friend forgot deodorant.", result: "4.2x ROAS Multiplier" },
      { name: "Hook B (Product Demo)", desc: "Comparison test on fabric freshness.", result: "Standard conversion" },
    ],
    clientQuote: "We transformed a taboo hygiene topic into the most shared meme reel of the quarter.",
    clientAuthor: "Co-Founder, Svish",
  },
  {
    id: "redbull-parkour",
    client: "RED BULL",
    title: "Sub-Zero Urban Parkour",
    category: "entertainment",
    categoryLabel: "SPORTS & LIFESTYLE",
    heroImageGradient: "from-red-600 via-rose-700 to-neutral-950",
    hookHypothesis: "FPV drone camera dive starting only 0.2s before hitting concrete edge, inducing instant vertigo.",
    views: "54.1M",
    retention: "96.4%",
    impact: "2.1M Saves",
    brief: "Showcase extreme urban athletic culture with cutting-edge FPV cinematography engineered for repeat looping.",
    hookVariants: [
      { name: "Hook A (Vertigo Drop)", desc: "Instant camera dive with zero buildup.", result: "96% completion rate" },
      { name: "Hook B (Slow Motion Jump)", desc: "Cinematic 120fps jump over rail.", result: "High saves" },
    ],
    clientQuote: "Highest completion score recorded in our regional brand handle's entire history.",
    clientAuthor: "Senior Producer, Red Bull Media",
  },
];

const testimonials = [
  {
    quote: "3seconds changed the way our entire executive team thinks about short-form media. They don't just capture attention; they own it.",
    author: "Rohan Malhotra",
    title: "Chief Marketing Officer, D2C Unicorn",
  },
  {
    quote: "The 3-second hook philosophy turned our paid ad CPAs upside down. We slashed customer acquisition costs by 42% in 30 days.",
    author: "Pooja Hegde",
    title: "Head of Growth, FinTech Challenger",
  },
  {
    quote: "Their meme war room is scary fast. Trending topics become viral brand assets while competitors are still booking meetings.",
    author: "Vikram Singhania",
    title: "Brand Director, Consumer FMCG",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<WorkProject | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 md:pt-36 bg-[#FAF6EE] text-[#121212] min-h-screen">
      {/* Hero Header */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-hook-orange" />
          <span>CASE STUDIES & PROVEN REVENUE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne uppercase tracking-tight leading-[0.95] max-w-5xl">
          PROVING WILD CREATIVITY <br />
          <span className="gradient-text-hook">PRINTS REVENUE.</span>
        </h1>

        <p className="mt-8 font-sans text-lg sm:text-2xl text-text-dark-secondary max-w-3xl leading-relaxed">
          Every campaign we ship is engineered with a quantifiable 3-second hook hypothesis, algorithmic retention loops, and verified sales impact.
        </p>
      </section>

      {/* Filter Tabs Bar */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-12">
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 custom-scrollbar">
          {[
            { id: "all", label: "All Campaigns (24)" },
            { id: "memes", label: "Viral Memes (12)" },
            { id: "ecommerce", label: "E-Commerce Hooks (8)" },
            { id: "entertainment", label: "Entertainment (6)" },
            { id: "tech", label: "Tech & Fintech (5)" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              data-cursor="FILTER"
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex-shrink-0 whitespace-nowrap ${
                activeFilter === f.id
                  ? "bg-[#121212] text-white font-bold shadow-md"
                  : "bg-white border border-black/10 text-black/60 hover:text-black hover:border-black/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              data-cursor="CASE"
              className="rounded-3xl bg-white border border-black/10 hover:border-hook-orange shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Media Preview */}
              <div
                className={`relative h-64 w-full bg-gradient-to-tr ${project.heroImageGradient} p-6 flex flex-col justify-between text-white overflow-hidden`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md border border-white/20">
                    {project.client}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-hook-orange group-hover:scale-110 transition-all">
                    <Play className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="font-mono text-[10px] text-hook-orange uppercase tracking-wider">
                    Core Hook
                  </p>
                  <p className="font-sans text-xs font-semibold italic line-clamp-2 mt-0.5">
                    {project.hookHypothesis}
                  </p>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[11px] text-hook-orange uppercase tracking-widest font-bold">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-syne font-black text-xl uppercase tracking-tight text-[#121212] mt-1 group-hover:text-hook-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-text-dark-secondary mt-2 line-clamp-2">
                    {project.brief}
                  </p>
                </div>

                {/* KPI Badges */}
                <div className="mt-6 pt-4 border-t border-black/8 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-[#FAF6EE] border border-black/5">
                    <span className="font-mono text-[9px] uppercase text-black/40 block">Views</span>
                    <span className="font-mono font-bold text-sm text-[#121212]">{project.views}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF6EE] border border-black/5">
                    <span className="font-mono text-[9px] uppercase text-black/40 block">3s Hold</span>
                    <span className="font-mono font-bold text-sm text-hook-orange">{project.retention}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[#FAF6EE] border border-black/5">
                    <span className="font-mono text-[9px] uppercase text-black/40 block">Impact</span>
                    <span className="font-mono font-bold text-xs text-electric-amber truncate block">{project.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-white border-y border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
              VERIFIED FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-syne uppercase tracking-tight mt-1">
              WHAT BRAND LEADERS SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF6EE] border border-black/8 shadow-sm hover:border-hook-orange transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-hook-orange/40 mb-4" />
                  <p className="font-sans text-base text-text-dark-secondary italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10">
                  <p className="font-syne font-bold text-sm text-[#121212] uppercase">
                    {t.author}
                  </p>
                  <p className="font-mono text-xs text-black/50">
                    {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Case Study Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[1100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-black/20 animate-fadeIn">
            {/* Modal Top Header */}
            <div
              className={`relative h-64 bg-gradient-to-tr ${activeModalProject.heroImageGradient} p-8 flex flex-col justify-between text-white`}
            >
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md border border-white/20">
                  {activeModalProject.client} // {activeModalProject.categoryLabel}
                </span>

                <button
                  onClick={() => setActiveModalProject(null)}
                  data-cursor="CLOSE"
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-hook-orange transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h2 className="font-syne font-black text-3xl md:text-4xl uppercase tracking-tight">
                  {activeModalProject.title}
                </h2>
                <p className="font-mono text-xs text-white/80 mt-1">
                  Verified Case Study Breakdown & Retention Curve
                </p>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 md:p-10 space-y-8 max-h-[65vh] overflow-y-auto">
              {/* Executive Brief & Hook Strategy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold mb-2">
                    01 // Executive Challenge & Brief
                  </h4>
                  <p className="font-sans text-sm text-text-dark-secondary leading-relaxed">
                    {activeModalProject.brief}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold mb-2">
                    02 // The 3-Second Hook Hypothesis
                  </h4>
                  <p className="font-sans text-sm text-text-dark-secondary leading-relaxed italic bg-[#FAF6EE] p-4 rounded-xl border border-black/10">
                    &quot;{activeModalProject.hookHypothesis}&quot;
                  </p>
                </div>
              </div>

              {/* Hook Variants A/B Testing Matrix */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold mb-4">
                  03 // Hook Variation A/B Performance Testing
                </h4>
                <div className="space-y-3">
                  {activeModalProject.hookVariants.map((variant, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-black/10 bg-[#FAF6EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <span className="font-syne font-bold text-sm uppercase text-[#121212]">
                          {variant.name}
                        </span>
                        <p className="font-sans text-xs text-text-dark-secondary mt-0.5">
                          {variant.desc}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-white border border-black/10 text-hook-orange self-start sm:self-auto">
                        {variant.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Metrics Box */}
              <div className="p-6 rounded-2xl bg-[#121212] text-white grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-mono text-2xl md:text-3xl font-black text-hook-orange">
                    {activeModalProject.views}
                  </div>
                  <span className="font-mono text-[10px] uppercase text-white/50">Total Views</span>
                </div>
                <div>
                  <div className="font-mono text-2xl md:text-3xl font-black text-white">
                    {activeModalProject.retention}
                  </div>
                  <span className="font-mono text-[10px] uppercase text-white/50">3s Hook Retention</span>
                </div>
                <div>
                  <div className="font-mono text-2xl md:text-3xl font-black text-electric-amber">
                    {activeModalProject.impact}
                  </div>
                  <span className="font-mono text-[10px] uppercase text-white/50">Business ROAS</span>
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200">
                <p className="font-sans text-sm text-text-dark-secondary italic">
                  &quot;{activeModalProject.clientQuote}&quot;
                </p>
                <p className="font-mono text-xs font-bold text-[#121212] mt-2">
                  — {activeModalProject.clientAuthor}
                </p>
              </div>

              {/* CTA trigger inside modal */}
              <div className="flex items-center justify-between pt-4 border-t border-black/10">
                <span className="text-xs font-mono text-black/50">
                  Ready for this level of viral performance?
                </span>
                <Link
                  href="/contact"
                  data-cursor="TALK"
                  className="px-6 py-3 rounded-full bg-hook-orange hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors shadow-md"
                >
                  Book 15-Min Sprint
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
