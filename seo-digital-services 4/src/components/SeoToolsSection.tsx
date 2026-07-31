import React, { useState } from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import { SEO_TIPS_DATA as SEO_TIPS } from '../data/seoContent';

interface SeoToolsSectionProps {
  onOpenReachOut: (topic?: string) => void;
}

export const SeoToolsSection: React.FC<SeoToolsSectionProps> = ({
  onOpenReachOut,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'SEO Strategies', 'SEO Tips', 'SEO Tools', 'Google Organic Health'];

  const filteredTips = selectedCategory === 'All'
    ? SEO_TIPS
    : SEO_TIPS.filter(t => t.category === selectedCategory);

  return (
    <section className="py-16 bg-[#faf8f5] text-stone-900 border-t border-[#e8e2d8]" id="seo-tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#f7efe3] text-[#6e4d2f] border border-[#e8dac8]">
            <Wrench className="w-3.5 h-3.5 text-[#a67c52]" />
            SEO TOOLS & STRATEGIC KNOWLEDGE
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            SEO Tools, Strategies & Best Practices
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Improve your organic search visibility with our curated repository of <strong className="text-stone-900">SEO strategies</strong>, <strong className="text-stone-900">SEO tips</strong>, and diagnostic <strong className="text-stone-900">SEO tools</strong>.
          </p>
        </div>

        {/* Categories Tabs & Tips List */}
        <div className="space-y-6">
          <div className="bg-[#f2e7d8] border border-[#e2d2bd] p-2 rounded-2xl flex flex-wrap items-center gap-1.5 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-[#a67c52] shadow-sm border border-[#d2c2b0]'
                    : 'text-[#503721] hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="bg-white border border-[#e8e2d8] rounded-2xl p-6 space-y-4 shadow-xs hover:border-[#a67c52] transition-all">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6e4d2f] bg-[#f7efe3] px-2.5 py-1 rounded-md border border-[#e8dac8]">
                    {tip.category}
                  </span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                    tip.impact === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {tip.impact} Priority
                  </span>
                </div>

                <h2 className="text-lg font-black text-stone-900">{tip.title}</h2>
                <p className="text-xs text-stone-600 leading-relaxed">{tip.summary}</p>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-bold text-stone-700 block">Recommended Action Steps:</span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {tip.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#a67c52] font-bold" aria-hidden="true">&bull;</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenReachOut('Question about ' + tip.title)}
                    className="text-xs font-extrabold text-[#a67c52] hover:underline flex items-center gap-1"
                  >
                    <span>Need help applying this? Reach out</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
