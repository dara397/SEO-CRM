import React, { useState } from 'react';
import { Globe, MapPin, Cpu, Link, ShoppingCart, Sparkles, Search, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, BarChart2, HelpCircle, Layers, Activity, Database, AlertCircle } from 'lucide-react';
import { SEO_SERVICES_LIST, TOP_VOLUME_KEYWORDS, DASHBOARD_METRICS_EXPLANATIONS } from '../data/seoServices';
import { SeoServiceItem, DashboardMetricHighlight } from '../types';
import dashboardImg from '../assets/images/seo_analytics_dashboard_1785176774757.jpg';

interface SeoServicesSectionProps {
  onGoToPackages: () => void;
  onOpenReachOut: (serviceTitle?: string) => void;
}

export const SeoServicesSection: React.FC<SeoServicesSectionProps> = ({
  onGoToPackages,
  onOpenReachOut,
}) => {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('All');
  const [activeMetricId, setActiveMetricId] = useState<string>('organic-traffic');

  const categories = ['All', 'Core Service', 'Lead Gen', 'Local Search', 'Technical', 'Authority', 'E-Commerce', 'Next-Gen SEO'];

  const filteredServices = selectedServiceCategory === 'All'
    ? SEO_SERVICES_LIST
    : SEO_SERVICES_LIST.filter(s => s.category === selectedServiceCategory);

  const activeMetric = DASHBOARD_METRICS_EXPLANATIONS.find(m => m.id === activeMetricId) || DASHBOARD_METRICS_EXPLANATIONS[0];

  return (
    <section className="py-16 bg-[#f5fbfe] text-stone-900 border-t border-[#dceaf3]" id="seo-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#e6f3fa] text-[#3a6b87] border border-[#cbe3f1]">
            <Globe className="w-3.5 h-3.5 text-[#6aaed9]" />
            SEO & LEAD GENERATION SERVICES
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            <span className="text-[#6aaed9]">SEO</span> & Lead Generation Services
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
            We rank your business on Google, then turn that traffic into leads. Pick a single service or let us manage the whole engine.
          </p>

          {/* Volume-Weighted Keywords Banner Bar (Light Brown Bar Background) */}
          <div className="mt-6 bg-[#e6f3fa] border border-[#cbe3f1] p-4 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-extrabold text-[#3a6b87] px-1">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <BarChart2 className="w-4 h-4 text-[#6aaed9]" />
                Top Volume-Weighted Search Keywords in SEO Services:
              </span>
              <span className="hidden sm:inline text-[#3a6b87]">Average High Intent Search Demand</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {TOP_VOLUME_KEYWORDS.map((item, idx) => (
                <div key={idx} className="bg-white/90 hover:bg-white text-stone-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-[#d8ecf7] flex items-center gap-2 transition-all">
                  <span className="text-[#6aaed9] font-mono">{item.keyword}</span>
                  <span className="text-[10px] bg-[#eef7fc] text-[#3a6b87] px-2 py-0.5 rounded font-black border border-[#d8ecf7]">
                    {item.volume}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Dashboard Feature Section (User Requested Attached Photo Highlights) */}
        <div className="bg-white border border-[#dceaf3] rounded-3xl p-6 sm:p-10 shadow-md space-y-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-stone-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3a6b87] bg-[#e6f3fa] px-3 py-1 rounded-md border border-[#cbe3f1] mb-2">
                <Activity className="w-3.5 h-3.5 text-[#6aaed9]" />
                <span>SEO Analytics Dashboard & Key Metric Highlights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Understanding Key Organic Analytics & Performance Metrics
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Every client receives access to our comprehensive real-time SEO dashboard. Click any key metric below to see its exact business importance and how our SEO services optimize it.
              </p>
            </div>

            <button
              onClick={() => onOpenReachOut('Dashboard & Analytics Consultation')}
              className="bg-[#6aaed9] hover:bg-[#4f97c6] text-white text-xs font-extrabold px-5 py-3 rounded-xl shadow-xs transition-all flex items-center gap-2 shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Dashboard Consultation</span>
            </button>
          </div>

          {/* Generated Analytics Dashboard Image Showcase with Callouts */}
          <div className="relative rounded-2xl overflow-hidden border border-[#dceaf3] shadow-lg group bg-stone-900">
            <img
              src={dashboardImg}
              alt="PGBlueprint Analytics Dashboard showing Organic Traffic 25.4K and Key Organic Metrics"
              className="w-full h-auto object-cover max-h-[480px] opacity-95 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />

            {/* Overlay Badges on Image highlighting Key Importance */}
            <div className="absolute top-4 left-4 bg-stone-900/90 text-white p-3 rounded-xl backdrop-blur-md border border-stone-700 max-w-xs space-y-1 shadow-md hidden sm:block">
              <div className="text-[10px] font-mono text-[#b9dcf2] font-bold uppercase tracking-widest flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Key Metric #1
              </div>
              <div className="text-xs font-black text-white">Organic Traffic: 25.4K (+4.12%)</div>
              <div className="text-[11px] text-stone-300">Revenue-generating organic visitors from Google</div>
            </div>

            <div className="absolute bottom-4 right-4 bg-stone-900/90 text-white p-3 rounded-xl backdrop-blur-md border border-stone-700 max-w-xs space-y-1 shadow-md hidden sm:block">
              <div className="text-[10px] font-mono text-[#b9dcf2] font-bold uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> Key Metric #2
              </div>
              <div className="text-xs font-black text-white">Site Audit Health: 85% Health Score</div>
              <div className="text-[11px] text-stone-300">0 Critical errors • Full Core Web Vitals speed</div>
            </div>
          </div>

          {/* Interactive Metric Importance Selector */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">
              Select a Metric from the Dashboard to Inspect Its Strategic Importance:
            </h3>

            {/* Light Brown Bar for Category Metrics Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-[#e6f3fa] p-2 rounded-2xl border border-[#cbe3f1]">
              {DASHBOARD_METRICS_EXPLANATIONS.map((metric) => {
                const isActive = activeMetricId === metric.id;
                return (
                  <button
                    key={metric.id}
                    onClick={() => setActiveMetricId(metric.id)}
                    className={`p-3 rounded-xl text-left transition-all ${
                      isActive
                        ? 'bg-white text-stone-900 shadow-sm border border-[#bcd9ea] ring-2 ring-[#6aaed9]/20'
                        : 'bg-white/50 text-stone-800 hover:bg-white/80 hover:text-stone-900'
                    }`}
                  >
                    <div className="text-[10px] font-extrabold text-[#6aaed9] truncate">{metric.metricName}</div>
                    <div className="text-xs font-black text-stone-900 truncate mt-0.5">{metric.currentValue}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Metric Deep Dive Box */}
            {activeMetric && (
              <div className="bg-[#f5fbfe] border border-[#dceaf3] rounded-2xl p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-black text-stone-900">{activeMetric.metricName}</span>
                    <span className="text-xs font-mono font-bold text-[#6aaed9] bg-[#eef7fc] px-2.5 py-1 rounded-md border border-[#d8ecf7]">
                      {activeMetric.currentValue} ({activeMetric.change})
                    </span>
                  </div>

                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                    activeMetric.importanceRating === 'Critical Growth'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {activeMetric.importanceRating} Rating
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <span className="font-extrabold text-stone-900 block text-xs uppercase tracking-wider">
                      Why This Metric Matters to Your Business:
                    </span>
                    <p className="text-stone-600 leading-relaxed bg-white p-4 rounded-xl border border-[#dceaf3]">
                      {activeMetric.explanation}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-extrabold text-stone-900 block text-xs uppercase tracking-wider">
                      How PGBlueprint Optimizes It:
                    </span>
                    <p className="text-stone-600 leading-relaxed bg-white p-4 rounded-xl border border-[#dceaf3]">
                      {activeMetric.howWeOptimize}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-bold text-stone-500">Related SEO Keywords:</span>
                  {activeMetric.keywords.map((kw, idx) => (
                    <span key={idx} className="bg-white text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-[#dceaf3]">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* SEO Services Grid with Category Filter Bar */}
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Core SEO Service Offerings & Deliverables
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Choose a specialized service module or opt for our complete managed campaign package.
              </p>
            </div>

            <button
              onClick={onGoToPackages}
              className="bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <span>View Package Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Light Brown Bar for Category Filtering */}
          <div className="bg-[#e6f3fa] border border-[#cbe3f1] p-2 rounded-2xl flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedServiceCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  selectedServiceCategory === cat
                    ? 'bg-white text-[#6aaed9] shadow-xs border border-[#bcd9ea]'
                    : 'text-[#3a6b87] hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#dceaf3] rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xs hover:border-[#6aaed9] transition-all hover:shadow-md"
              >
                <div className="space-y-4">
                  
                  {/* Category & Search Volume Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#3a6b87] bg-[#eef7fc] px-2.5 py-1 rounded-md border border-[#d8ecf7]">
                      {service.category}
                    </span>
                    <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded font-mono">
                      Vol: {service.searchVolume}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef7fc] text-[#6aaed9] flex items-center justify-center font-bold text-lg shrink-0 border border-[#d8ecf7]">
                      {service.id === 'managed-seo' && <Globe className="w-5 h-5" />}
                      {service.id === 'local-seo' && <MapPin className="w-5 h-5" />}
                      {service.id === 'technical-seo' && <Cpu className="w-5 h-5" />}
                      {service.id === 'link-building' && <Link className="w-5 h-5" />}
                      {service.id === 'ecommerce-seo' && <ShoppingCart className="w-5 h-5" />}
                      {service.id === 'ai-seo' && <Sparkles className="w-5 h-5" />}
                    </div>

                    <h3 className="text-lg font-black text-stone-900 leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Keywords Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.primaryKeywords.map((kw, idx) => (
                      <span key={idx} className="bg-[#f5fbfe] text-stone-700 text-[11px] font-semibold px-2 py-0.5 rounded border border-[#dceaf3]">
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-stone-800 block uppercase tracking-wider">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Impact Box */}
                  <div className="bg-[#f5fbfe] p-3 rounded-xl border border-[#dceaf3] text-xs text-stone-700">
                    <strong className="text-stone-900 font-bold block mb-0.5">Expected ROI Impact:</strong>
                    {service.businessImpact}
                  </div>

                </div>

                {/* Reach Out Button specifically targeting this service */}
                <div className="pt-2 border-t border-stone-100">
                  <button
                    onClick={() => onOpenReachOut(`Inquiry for ${service.title}`)}
                    className="w-full bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-extrabold text-xs py-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Reach Out About {service.title}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Service Bottom CTA Banner */}
        <div className="bg-[#1b2730] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-[#b9dcf2] font-bold text-xs uppercase tracking-widest bg-[#9ccbe8]/10 px-3 py-1 rounded-md border border-[#9ccbe8]/20">
              CUSTOM ENTERPRISE & SMB ROADMAPS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Need a tailored SEO service package for your specific domain?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Our organic search specialists conduct a complimentary website audit and present a 3-month compounding rank strategy tailored to your exact industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenReachOut('Custom Services Consultation')}
              className="bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reach Out for Free Audit</span>
            </button>

            <button
              onClick={onGoToPackages}
              className="bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-stone-700 transition-all flex items-center justify-center gap-2"
            >
              <span>View Service Packages</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
