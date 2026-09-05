"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle, Calendar, Sparkles, CheckCircle2, Send, Clock } from "lucide-react";
import { Footer } from "@/components/common/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "$15,000 - $50,000 (Full Viral Campaign)",
    goal: "Viral Brand Awareness",
    details: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calendarBooked, setCalendarBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF5722", "#FF9800", "#CCFF00", "#121212"],
    });

    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 md:pt-36 bg-[#FAF6EE] text-[#121212] min-h-screen">
      {/* Hero Header */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-hook-orange" />
          <span>INITIALIZE ENGAGEMENT</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne uppercase tracking-tight leading-[0.95] max-w-5xl">
          LET&apos;S HOOK YOUR <br />
          <span className="gradient-text-hook">AUDIENCE TODAY.</span>
        </h1>

        <p className="mt-8 font-sans text-lg sm:text-2xl text-text-dark-secondary max-w-2xl leading-relaxed">
          Tell us about your brand&apos;s current retention bottlenecks or book a 15-minute Strategy Sprint with our creative directors.
        </p>
      </section>

      {/* Dual Column Layout */}
      <section className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Studio Hubs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Hotline Card */}
            <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
                  Direct War Room Hotlines
                </span>
                <h3 className="font-syne font-black text-2xl uppercase tracking-tight text-[#121212] mt-1">
                  Fastest Way To Reach Us
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#FAF6EE] border border-black/5">
                  <Phone className="w-4 h-4 text-hook-orange flex-shrink-0" />
                  <div>
                    <span className="text-black/40 uppercase text-[10px] block">National Hotline</span>
                    <a href="tel:+15553003333" className="font-bold text-[#121212] hover:text-hook-orange">
                      +1 (555) 300-3333
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-[#FAF6EE] border border-black/5">
                  <Mail className="w-4 h-4 text-hook-orange flex-shrink-0" />
                  <div>
                    <span className="text-black/40 uppercase text-[10px] block">Executive Pitch Email</span>
                    <a href="mailto:hook@3seconds.media" className="font-bold text-[#121212] hover:text-hook-orange">
                      hook@3seconds.media
                    </a>
                  </div>
                </div>

                {/* Instant WhatsApp */}
                <a
                  href="https://wa.me/15553003333?text=Hey%203seconds,%20we%20want%20to%20hook%20our%20audience!"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="WHATSAPP"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat Trigger</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 15-Minute Strategy Sprint Scheduler Box */}
            <div className="p-8 rounded-3xl bg-[#0A0A0A] text-white border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-hook-orange font-mono text-xs uppercase tracking-widest font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>Calendar Booking</span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs font-mono text-white/50">
                  <Clock className="w-3.5 h-3.5 text-hook-orange" />
                  <span>15 Mins</span>
                </div>
              </div>

              <div>
                <h3 className="font-syne font-black text-2xl uppercase tracking-tight text-white">
                  Schedule A 15-Min Strategy Sprint
                </h3>
                <p className="font-sans text-xs text-white/60 mt-1">
                  We audit your current video drop-off curve on live screen share and pitch 3 bespoke hooks for free.
                </p>
              </div>

              {calendarBooked ? (
                <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-center font-mono text-xs text-emerald-400">
                  Sprint reserved! Calendar invite dispatched to your email.
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {["Tomorrow 11:00 AM", "Tomorrow 3:30 PM", "Friday 2:00 PM", "Friday 5:00 PM"].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setCalendarBooked(true)}
                        className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:border-hook-orange hover:bg-hook-orange/20 text-white text-[11px] font-mono transition-all"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCalendarBooked(true)}
                    data-cursor="CALENDAR"
                    className="w-full py-3 rounded-full bg-white/10 hover:bg-hook-orange text-white font-mono text-xs uppercase tracking-wider font-bold transition-all border border-white/15"
                  >
                    View All Live Slots →
                  </button>
                </div>
              )}
            </div>

            {/* Studio Coordinates */}
            <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold block">
                Physical Studio Hubs
              </span>

              <div className="space-y-4 text-xs font-sans text-text-dark-secondary">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-hook-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#121212] uppercase font-mono block">New York Hub</strong>
                    <p className="text-black/60">
                      594 Broadway, Suite 802, SoHo, New York, NY 10012
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-electric-amber flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#121212] uppercase font-mono block">Los Angeles Hub</strong>
                    <p className="text-black/60">
                      1327 Abbot Kinney Blvd, Venice, Los Angeles, CA 90291
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 3-Second Brief Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-black/10 shadow-lg">
            <div className="border-b border-black/10 pb-6 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-hook-orange font-bold">
                Project Inquiry
              </span>
              <h2 className="font-syne font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#121212] mt-1">
                The 3-Second Campaign Brief
              </h2>
              <p className="font-sans text-xs text-black/50 mt-1">
                Fast-track intake for ambitious consumer brands, tech unicorns, and cultural challengers.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-orange-100 text-hook-orange flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="font-syne font-black text-3xl md:text-4xl uppercase tracking-tight text-[#121212]">
                  Hook Received!
                </h3>
                <p className="font-sans text-base text-text-dark-secondary max-w-md mx-auto leading-relaxed">
                  Our strategic directors in New York & Los Angeles have received your campaign parameters. Expect a preliminary hook diagnosis in your inbox within <strong className="text-hook-orange">3 hours</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-black/20 text-xs font-mono uppercase tracking-wider text-black/70 hover:border-black"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black/70 uppercase tracking-wider mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      required
                      placeholder="Kabir Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    />
                  </div>

                  <div>
                    <label className="block text-black/70 uppercase tracking-wider mb-2 font-bold">
                      Brand / Company Name *
                    </label>
                    <input
                      required
                      placeholder="Acme Consumer Tech"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black/70 uppercase tracking-wider mb-2 font-bold">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="kabir@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    />
                  </div>

                  <div>
                    <label className="block text-black/70 uppercase tracking-wider mb-2 font-bold">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      placeholder="+1 (555) 300-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                    />
                  </div>
                </div>

                {/* Budget Tier */}
                <div>
                  <label className="block text-black/70 uppercase tracking-wider mb-2 font-bold">
                    Monthly Marketing Budget Tier *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      "$5,000 - $15,000 (Testing the Waters)",
                      "$15,000 - $50,000 (Full Viral Campaign)",
                      "$50,000+ (Enterprise Omnichannel)",
                    ].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`p-3 rounded-xl border text-left transition-all text-[11px] leading-snug ${
                          formData.budget === b
                            ? "bg-hook-orange text-white font-bold border-hook-orange shadow-md"
                            : "bg-[#FAF6EE] border-black/10 text-black/70 hover:border-black/30"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Goal */}
                <div>
                  <label className="block text-black/70 uppercase tracking-wider mb-2 font-bold">
                    What is your primary goal? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      "Viral Brand Awareness",
                      "High-Converting Ads (ROAS)",
                      "Creator / Meme Takeover",
                    ].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setFormData({ ...formData, goal: g })}
                        className={`p-3 rounded-xl border text-center transition-all text-[11px] ${
                          formData.goal === g
                            ? "bg-[#121212] text-white font-bold border-[#121212] shadow-md"
                            : "bg-[#FAF6EE] border-black/10 text-black/70 hover:border-black/30"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tell us about project */}
                <div>
                  <label className="block text-black/70 uppercase tracking-wider mb-2 font-bold">
                    Tell us about your project & biggest attention bottleneck *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your target audience, upcoming launch timeline, and what current creative ads have failed to accomplish..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-black/15 focus:border-hook-orange focus:outline-none bg-[#FAF6EE] text-[#121212]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  data-cursor="LAUNCH"
                  className="w-full py-4 rounded-full bg-hook-orange hover:bg-black text-white font-bold uppercase tracking-wider transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 group text-sm"
                >
                  <span>LAUNCH CAMPAIGN →</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="font-mono text-[10px] text-black/40 text-center">
                  Confidential brief. We sign mutual NDAs before any campaign kickoff.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
