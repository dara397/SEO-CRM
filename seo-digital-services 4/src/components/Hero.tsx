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
    <section className="relative overflow-hidden bg-[#faf8f5] text-stone-900 pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#e8e2d8]">
      
      {/* Decorative Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0e6d6] rounded-full filter blur-3xl opacity-40 pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f4ece1] rounded-full filter blur-3xl opacity-40 pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Single Clean Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#f2e7d8] text-[#6e4d2f] border border-[#e2d2bd] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#a67c52]" />
              <span>PGBLUEPRINT AGENCY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.1]">
              Grow Your Search Rankings with Proven <span className="text-[#a67c52]">SEO Services</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              Accelerate organic traffic and climb the rankings through high-intent keyword clustering, technical audits, and high-authority backlinks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onGoToPackages}
                className="bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 group"
              >
                <span>View Monthly Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onGoToServices}
                className="bg-[#f2e7d8] hover:bg-[#e8dbc9] border border-[#e2d2bd] text-[#6e4d2f] font-extrabold text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-2xs"
              >
                <Layers className="w-4 h-4 text-[#a67c52]" />
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
                <ShieldCheck className="w-4 h-4 text-[#a67c52] shrink-0" />
                3-Month Minimum Commitment
              </span>
            </div>

          </div>

          {/* Right Hero Card: Clean Metric Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#e8e2d8] rounded-3xl p-6 sm:p-7 shadow-lg space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#a67c52]">ORGANIC PERFORMANCE</div>
                  <div className="text-lg font-black text-stone-900">Live Client Impact Overview</div>
                </div>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +25.4% Growth
                </span>
              </div>

              {/* 3 Metric Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#faf8f5] p-3.5 rounded-2xl border border-[#e8e2d8]">
                  <div className="text-[10px] font-bold text-stone-500 uppercase">Organic Traffic</div>
                  <div className="text-lg font-black text-stone-900 mt-0.5">25.4K</div>
                  <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+4.12% MoM</div>
                </div>

                <div className="bg-[#faf8f5] p-3.5 rounded-2xl border border-[#e8e2d8]">
                  <div className="text-[10px] font-bold text-stone-500 uppercase">Keywords</div>
                  <div className="text-lg font-black text-stone-900 mt-0.5">2,200+</div>
                  <div className="text-[10px] font-bold text-emerald-600 mt-0.5">+9.8% Top 10</div>
                </div>

                <div className="bg-[#faf8f5] p-3.5 rounded-2xl border border-[#e8e2d8]">
                  <div className="text-[10px] font-bold text-stone-500 uppercase">Site Health</div>
                  <div className="text-lg font-black text-stone-900 mt-0.5">85%</div>
                  <div className="text-[10px] font-bold text-stone-600 mt-0.5">0 Errors</div>
                </div>
              </div>

              {/* Subtle Callout box */}
              <div className="bg-[#f7efe3] border border-[#e8dac8] p-4 rounded-2xl flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-extrabold text-[#6e4d2f] block">Ready to scale your organic presence?</span>
                  <span className="text-stone-600 text-[11px]">Request a complimentary search audit.</span>
                </div>
                <button
                  onClick={onOpenReachOut}
                  className="bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shrink-0 transition-all shadow-2xs"
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

