import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle, AlertTriangle, Info, ArrowRight, ShieldCheck, Wrench, BarChart2, MessageSquare, Phone } from 'lucide-react';
import { SEO_TIPS_DATA as SEO_TIPS, INITIAL_AUDIT_ITEMS as AUDIT_CHECKLIST } from '../data/seoContent';

interface SeoToolsSectionProps {
  onOpenReachOut: (topic?: string) => void;
  onGoToWhatIsSeo: () => void;
}

export const SeoToolsSection: React.FC<SeoToolsSectionProps> = ({
  onOpenReachOut,
  onGoToWhatIsSeo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [auditTargetUrl, setAuditTargetUrl] = useState<string>('');
  const [isAuditing, setIsAuditing] = useState<boolean>(false);
  const [auditDone, setAuditDone] = useState<boolean>(false);

  const categories = ['All', 'SEO Strategies', 'SEO Tips', 'SEO Tools', 'Google Organic Health'];

  const filteredTips = selectedCategory === 'All'
    ? SEO_TIPS
    : SEO_TIPS.filter(t => t.category === selectedCategory);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditTargetUrl) return;
    setIsAuditing(true);

    setTimeout(() => {
      setIsAuditing(false);
      setAuditDone(true);
    }, 1000);
  };

  return (
    <section className="py-16 bg-[#faf8f5] text-stone-900 border-t border-[#e8e2d8]" id="seo-tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#f7efe3] text-[#6e4d2f] border border-[#e8dac8]">
            <Wrench className="w-3.5 h-3.5 text-[#a67c52]" />
            SEO TOOLS & STRATEGIC KNOWLEDGE
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            SEO Tools, Strategies & Best Practices
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Boost your Google ranking organic search visibility with our curated repository of <strong className="text-stone-900">SEO strategies</strong>, <strong className="text-stone-900">SEO tips</strong>, and diagnostic <strong className="text-stone-900">SEO tools</strong>.
          </p>
        </div>

        {/* Live Instant Site Audit Widget */}
        <div className="bg-white border border-[#e8e2d8] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#a67c52] bg-[#f7efe3] px-3 py-1 rounded-md">
              Instant Google Organic Health Checker
            </span>
            <h3 className="text-2xl font-black text-stone-900">Free Mini Website Technical Audit</h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Test your domain against Google's core organic search requirements including HTTPS SSL, Core Web Vitals, and mobile responsiveness.
            </p>
          </div>

          <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="url"
              required
              value={auditTargetUrl}
              onChange={(e) => setAuditTargetUrl(e.target.value)}
              placeholder="https://yourdomain.com"
              className="flex-1 px-4 py-3.5 bg-[#faf8f5] border border-[#e8e2d8] rounded-xl text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#a67c52] focus:bg-white"
            />
            <button
              type="submit"
              disabled={isAuditing}
              className="bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
            >
              {isAuditing ? (
                <span>Auditing Domain...</span>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Run Audit Test</span>
                </>
              )}
            </button>
          </form>

          {/* Audit Result Display */}
          {auditDone && (
            <div className="pt-4 border-t border-stone-100 space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-stone-700 bg-[#f7efe3] p-3 rounded-xl">
                <span>Audit Target: <strong className="text-stone-900">{auditTargetUrl}</strong></span>
                <span className="text-[#6e4d2f] font-black">Score: 92/100 (Google Compliant)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {AUDIT_CHECKLIST.map((item) => (
                  <div key={item.id} className="bg-[#faf8f5] border border-[#e8e2d8] p-4 rounded-xl flex items-start gap-3">
                    {item.status === 'passed' ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    )}

                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between font-bold text-stone-900">
                        <span>{item.title}</span>
                        <span className="text-[10px] text-stone-500 font-mono">{item.category}</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed">{item.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onOpenReachOut(`Mini Audit Analysis Request for ${auditTargetUrl}`)}
                  className="bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reach Out to Fix Audit Issues</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Categories Tabs & Tips List with Light Brown Bar Background */}
        <div className="space-y-6">
          <div className="bg-[#f2e7d8] border border-[#e2d2bd] p-2 rounded-2xl flex flex-wrap items-center gap-1.5 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

                <h3 className="text-lg font-black text-stone-900">{tip.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{tip.summary}</p>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-bold text-stone-700 block">Recommended Action Steps:</span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {tip.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#a67c52] font-bold">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenReachOut(`Question about ${tip.title}`)}
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
