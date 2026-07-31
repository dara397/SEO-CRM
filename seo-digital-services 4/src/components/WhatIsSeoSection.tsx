import React, { useState } from 'react';
import { Search, Compass, Wrench, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, MessageSquare, Phone, Mail, HelpCircle, Layers, Target, BarChart2 } from 'lucide-react';
import { WHAT_IS_SEO_TOPICS, BUSINESS_BENEFITS } from '../data/whatIsSeo';

interface WhatIsSeoSectionProps {
  onGoToPackages: () => void;
  onOpenReachOut: (subject?: string) => void;
}

export const WhatIsSeoSection: React.FC<WhatIsSeoSectionProps> = ({
  onGoToPackages,
  onOpenReachOut,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('fundamentals');

  const selectedTopic = WHAT_IS_SEO_TOPICS.find(t => t.id === selectedTopicId) || WHAT_IS_SEO_TOPICS[0];

  return (
    <section className="py-16 bg-[#faf8f5] text-stone-900 min-h-screen border-t border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#f7efe3] text-[#6e4d2f] border border-[#e8dac8]">
            <HelpCircle className="w-3.5 h-3.5 text-[#a67c52]" />
            ORGANIC SEARCH EDUCATIONAL HUB
          </span>
          
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            What is <span className="text-[#a67c52]">SEO</span> & Why Your Business Needs It
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Discover how search engine optimization works, why organic rankings drive continuous business growth, and how <strong className="text-stone-900">SEO Digital Services</strong> maximizes your Google search visibility.
          </p>
        </div>

        {/* Interactive Topic Tabs Grid with Light Brown Bar Background */}
        <div className="bg-[#f2e7d8] border border-[#e2d2bd] p-3 rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-3">
          {WHAT_IS_SEO_TOPICS.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`p-5 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'bg-white border-[#a67c52] shadow-md ring-2 ring-[#a67c52]/20'
                    : 'bg-white/70 border-[#d6c3ae] hover:bg-white hover:border-[#a67c52]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isSelected ? 'bg-[#a67c52] text-white' : 'bg-[#f7efe3] text-[#a67c52]'
                  }`}>
                    {topic.id === 'fundamentals' && <Search className="w-4 h-4" />}
                    {topic.id === 'strategies' && <Compass className="w-4 h-4" />}
                    {topic.id === 'tools' && <Wrench className="w-4 h-4" />}
                    {topic.id === 'tips' && <Sparkles className="w-4 h-4" />}
                  </div>
                  {isSelected && <span className="text-xs font-extrabold text-[#a67c52]">Active Topic</span>}
                </div>

                <div className="font-extrabold text-sm text-stone-900 line-clamp-1">
                  {topic.title}
                </div>
                <div className="text-xs text-stone-600 mt-1 line-clamp-2">
                  {topic.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Topic Feature Showcase */}
        <div className="bg-white border border-[#e8e2d8] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#a67c52] bg-[#f7efe3] px-3 py-1 rounded-md">
              {selectedTopic.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              {selectedTopic.title}
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              {selectedTopic.description}
            </p>
          </div>

          {/* Keywords Highlight Row */}
          <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#e8e2d8] flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Target Keywords:</span>
            {selectedTopic.keywords.map((kw, idx) => (
              <span key={idx} className="bg-white px-3 py-1 rounded-lg text-xs font-bold text-[#a67c52] border border-[#e8dac8]">
                #{kw}
              </span>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Key Organic Advantages:</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedTopic.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#fcfbf9] border border-[#e8e2d8] p-4 rounded-2xl text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                  <div className="text-[#a67c52] font-bold text-xs mb-1">Benefit #{idx + 1}</div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Why Business Benefits Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-stone-900">
              Why Your Business Needs <span className="text-[#a67c52]">SEO Digital Services</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Organic search isn't optional—it's the primary engine of sustainable online authority and buyer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_BENEFITS.map((item) => (
              <div key={item.number} className="bg-white border border-[#e8e2d8] rounded-2xl p-6 space-y-3 shadow-xs hover:border-[#a67c52] transition-colors">
                <div className="text-3xl font-black text-[#a67c52] opacity-80">{item.number}</div>
                <h3 className="text-base font-extrabold text-stone-900 leading-snug">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Terms Glossary / Tips & Tools Summary */}
        <div className="bg-[#231e1a] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#e0b589] text-xs font-bold uppercase tracking-wider bg-[#d4a373]/10 px-3 py-1 rounded-md border border-[#d4a373]/20">
              <ShieldCheck className="w-4 h-4 text-[#e0b589]" />
              <span>Full Service Organic Execution</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Ready to dominate your industry's search engine rankings?
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
              Our service packages provide transparent monthly pricing, a minimum 3-month commitment, $500 one-time setup fee, unlimited keyword research, and full technical audits.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-2">
              <a href="tel:9498781316" className="font-bold text-[#e0b589] hover:underline flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> (949)-878-1316
              </a>
              <span>•</span>
              <button
                onClick={() => onOpenReachOut('Inquiry from What is SEO Page')}
                className="font-semibold text-stone-200 hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[#e0b589]" /> Email Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={onGoToPackages}
              className="w-full bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Explore SEO Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenReachOut('Inquiry from What is SEO Page')}
              className="w-full bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold py-3.5 px-6 rounded-xl border border-stone-700 transition-all flex items-center justify-center gap-2 text-xs"
            >
              <MessageSquare className="w-4 h-4 text-[#e0b589]" />
              <span>Reach Out / Ask Questions</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
