"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Shield, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/common/Footer";

export default function LegalPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#FAF6EE] text-[#121212] min-h-screen">
      <section className="px-4 md:px-8 lg:px-12 max-w-4xl mx-auto mb-28">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-black/60 hover:text-hook-orange uppercase tracking-wider mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 font-mono text-xs uppercase tracking-widest text-black/70 mb-4">
          <Shield className="w-3.5 h-3.5 text-hook-orange" />
          <span>LEGAL & COMPLIANCE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black font-syne uppercase tracking-tight mb-8">
          PRIVACY POLICY & TERMS OF ENGAGEMENT
        </h1>

        <div className="space-y-8 font-sans text-sm text-text-dark-secondary leading-relaxed bg-white p-8 md:p-12 rounded-3xl border border-black/10 shadow-sm">
          <div>
            <h3 className="font-syne font-bold text-lg text-[#121212] uppercase mb-2">
              1. Brand Privacy & NDA Commitment
            </h3>
            <p>
              At 3seconds Creative Media Agency (&quot;3seconds&quot;), we treat all creative briefs, unreleased product features, and marketing spend metrics with absolute confidentiality. All client campaign inquiries submitted through our portal are subject to mutual non-disclosure protections.
            </p>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg text-[#121212] uppercase mb-2">
              2. Intellectual Property & Creator Rights
            </h3>
            <p>
              All deliverables, video files, sound designs, and meme templates created during contracted client campaigns become the exclusive property of the respective brand upon final invoice clearance, adhering to creator syndicate licensing guidelines.
            </p>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg text-[#121212] uppercase mb-2">
              3. Service Level Agreements (SLA) & Performance Guarantees
            </h3>
            <p>
              Attention benchmarks, average percentage viewed (APV), and hook retention metrics are measured utilizing native platform analytics (Meta Business Suite, TikTok Ads Manager, YouTube Studio). We guarantee contracted impressions thresholds or deliver supplemental organic asset distribution.
            </p>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg text-[#121212] uppercase mb-2">
              4. Contact & Inquiries
            </h3>
            <p>
              For legal questions or specific agency vendor compliance verifications, contact our legal counsel directly at:{" "}
              <a href="mailto:legal@3seconds.media" className="text-hook-orange font-bold hover:underline">
                legal@3seconds.media
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
