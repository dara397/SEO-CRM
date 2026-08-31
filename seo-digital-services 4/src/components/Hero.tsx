import React from 'react';
import { ArrowRight, Sparkles, Layers, ShieldCheck, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';

interface HeroProps {
  onGoToPackages: () => void;
  onGoToWhatIsSeo: () => void;
  onGoToServices: () => void;
  onOpenReachOut: () => void;
  domainName: string;
}

export const Hero: React.FC<HeroProps> = ({
  onGoToPackages,
  onGoToWhatIsSeo,
  onGoToServices,
  onOpenReachOut,
  domainName,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#f5fbfe] text-stone-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#dceaf3]">
      
      {/* Decorative Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e8f4fb] rounded-full filter blur-3xl opacity-40 pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#edf6fc] rounded-full filter blur-3xl opacity-40 pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Single Clean Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#e6f3fa] text-[#3a6b87] border border-[#cbe3f1] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#6aaed9]" />
              <span>PGBLUEPRINT AGENCY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.1]">
              Grow Your Search Rankings with Proven <span className="text-[#6aaed9]">SEO Services</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              Accelerate organic traffic and climb the rankings through high-intent keyword clustering, technical audits, and high-authority backlinks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onGoToPackages}
                className="bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 group"
              >
                <span>View Monthly Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onGoToServices}
                className="bg-[#e6f3fa] hover:bg-[#d8ecf7] border border-[#cbe3f1] text-[#3a6b87] font-extrabold text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-2xs"
              >
                <Layers className="w-4 h-4 text-[#6aaed9]" />
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-stone-600">
              <span className="flex items-center gap-1.5 text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Google Organic Health Compliant
              </span>
              <span className="text-stone-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-stone-800">
                <ShieldCheck className="w-4 h-4 text-[#6aaed9] shrink-0" />
                6-Month Minimum Commitment
              </span>
            </div>

          </div>

          {/* Right Hero Card: Clean Metric Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#dceaf3] rounded-3xl p-6 sm:p-7 shadow-lg space-y-6">
              
              <div className="border-b border-stone-100 pb-4">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#6aaed9]">
                  HOW WE WORK
                </div>
                <div className="text-lg font-black text-stone-900">What you get in the first 30 days</div>
              </div>

              {/*
                Replaced the "Live Client Impact Overview" tiles (25.4K traffic,
                +4.12% MoM, 2,200+ keywords, 85% health).

                Those numbers were presented as live client results with no
                client, no date range and no source tool attached. Performance
                claims in advertising have to be substantiable, and practically:
                any prospect can check this domain's own visibility in thirty
                seconds and the pitch is over.

                If they are real client figures, put them back WITH the client
                named, the date range, and the tool they came from — and with
                that client's written permission.
              */}
              <div className="space-y-3">
                <div className="bg-[#f5fbfe] p-3.5 rounded-2xl border border-[#dceaf3]">
                  <div className="text-[10px] font-bold text-stone-500 uppercase">Week 1</div>
                  <div className="text-sm font-black text-stone-900 mt-0.5">Measurement goes in first</div>
                  <div className="text-[11px] text-stone-600 mt-1">
                    Call tracking, form analytics and a rank baseline, before we change anything.
                  </div>
                </div>

                <div className="bg-[#f5fbfe] p-3.5 rounded-2xl border border-[#dceaf3]">
                  <div className="text-[10px] font-bold text-stone-500 uppercase">Week 2</div>
                  <div className="text-sm font-black text-stone-900 mt-0.5">Competitor and gap audit</div>
                  <div className="text-[11px] text-stone-600 mt-1">
                    Where you rank against your three closest competitors, and what is missing.
                  </div>
                </div>

                <div className="bg-[#f5fbfe] p-3.5 rounded-2xl border border-[#dceaf3]">
                  <div className="text-[10px] font-bold text-stone-500 uppercase">Day 30</div>
                  <div className="text-sm font-black text-stone-900 mt-0.5">Your real numbers, not ours</div>
                  <div className="text-[11px] text-stone-600 mt-1">
                    Calls received, calls missed, and where the inquiries actually came from.
                  </div>
                </div>
              </div>

              {/* Subtle Callout box */}
              <div className="bg-[#eef7fc] border border-[#d8ecf7] p-4 rounded-2xl flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-extrabold text-[#3a6b87] block">Ready to scale your organic presence?</span>
                  <span className="text-stone-600 text-[11px]">Request a complimentary search audit.</span>
                </div>
                <button
                  onClick={onOpenReachOut}
                  className="bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shrink-0 transition-all shadow-2xs"
                >
                  Reach Out
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

