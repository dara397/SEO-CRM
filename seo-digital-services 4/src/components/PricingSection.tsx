import React, { useState } from 'react';
import { Check, ShieldCheck, HelpCircle, Phone, Mail, ArrowRight, MessageSquare, Info, Sparkles } from 'lucide-react';
import { PACKAGE_PLANS, ADD_ONS } from '../data/packages';
import { PackagePlan } from '../types';

interface PricingSectionProps {
  onOpenReachOut: (planName: string) => void;
  onGoToWhatIsSeo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenReachOut,
  onGoToWhatIsSeo,
}) => {
  const [billingCycle] = useState<'monthly'>('monthly');

  return (
    <section className="py-16 bg-[#faf8f5] text-stone-900 border-t border-[#e8e2d8]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#f7efe3] text-[#6e4d2f] border border-[#e8dac8]">
            <ShieldCheck className="w-3 h-3.5 text-[#a67c52]" />
            TRANSPARENT AGENCY PACKAGES
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            SEO Service Packages & Pricing
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            All our SEO packages require a <strong className="text-stone-900">minimum 3-month commitment</strong> so organic rankings have time to compound, with transparent pricing and custom enterprise plans available.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold">
            <span className="bg-white px-3.5 py-1.5 rounded-xl border border-[#e8e2d8] text-stone-700 shadow-2xs">
              ✓ 3-Month Minimum Contract
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-xl border border-[#e8e2d8] text-stone-700 shadow-2xs">
              ✓ Transparent One-Time Setup Fees
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-xl border border-[#e8e2d8] text-stone-700 shadow-2xs">
              ✓ Google Organic Health Compliant
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGE_PLANS.map((plan: PackagePlan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-200 ${
                  isPopular
                    ? 'border-[#a67c52] shadow-xl ring-2 ring-[#a67c52]/20'
                    : 'border-[#e8e2d8] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular / Recommended Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#a67c52] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-black text-stone-900">{plan.name}</h3>
                    {plan.badge && (
                      <span className="text-[10px] font-bold bg-[#f7efe3] text-[#6e4d2f] px-2.5 py-0.5 rounded-md border border-[#e8dac8]">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  {plan.isCustomPrice ? (
                    <div className="mb-4 pb-4 border-b border-stone-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-stone-900">Contact Us</span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1 font-medium">
                        Custom Setup Fee • Tailored Terms
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 pb-4 border-b border-stone-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl lg:text-4xl font-black text-stone-900">
                          ${typeof plan.price === 'number' ? plan.price.toLocaleString() : plan.price}
                        </span>
                        <span className="text-stone-500 font-bold text-sm">/month</span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1 font-medium">
                        +${typeof plan.setupFee === 'number' ? plan.setupFee.toLocaleString() : plan.setupFee} Setup Fee • Min. 3 Months
                      </div>
                    </div>
                  )}

                  {/* Core Features List */}
                  <div className="space-y-3 text-xs text-stone-700 font-medium mb-6">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                      <span><strong className="text-stone-900">{plan.pages}</strong> pages optimized</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                      <span><strong className="text-stone-900">{plan.websiteAudit}</strong> audit frequency</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                      <span><strong className="text-stone-900">{plan.keywordResearch}</strong> keyword scope</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                      <span>
                        {typeof plan.blogArticles === 'number' ? (
                          <><strong className="text-stone-900">{plan.blogArticles}</strong> blog articles / month</>
                        ) : (
                          <><strong className="text-stone-900">{plan.blogArticles}</strong> blog articles</>
                        )}
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                      <span>
                        {typeof plan.backlinks === 'number' ? (
                          <><strong className="text-stone-900">{plan.backlinks}</strong> high-authority backlinks / mo</>
                        ) : (
                          <><strong className="text-stone-900">{plan.backlinks}</strong> high-authority backlinks</>
                        )}
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                      <span>
                        {typeof plan.localCitations === 'number' ? (
                          <><strong className="text-stone-900">{plan.localCitations}</strong> local citation submissions</>
                        ) : (
                          <><strong className="text-stone-900">{plan.localCitations}</strong> local citation submissions</>
                        )}
                      </span>
                    </div>

                    {plan.businessProfile && (
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                        <span>Google Business Profile management</span>
                      </div>
                    )}

                    {plan.reviewFunnel && (
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                        <span>Google Review Generation Funnel</span>
                      </div>
                    )}

                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#a67c52] shrink-0 mt-0.5" />
                      <span>{plan.monthlyReporting}</span>
                    </div>
                  </div>
                </div>

                {/* Reach Out Button next to plan */}
                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <button
                    onClick={() =>
                      onOpenReachOut(
                        plan.isCustomPrice
                          ? 'Inquiry: Custom Package Request'
                          : `Inquiry: ${plan.name} Package ($${plan.price}/mo)`
                      )
                    }
                    className={`w-full font-extrabold text-sm py-3 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[#a67c52] hover:bg-[#8e653d] text-white'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{plan.isCustomPrice ? 'Contact Us' : 'Reach Out to Order'}</span>
                  </button>

                  <p className="text-[11px] text-center text-stone-500 font-medium">
                    Questions? Contact our team via our inquiry form.
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Add-On Services Block (Reach Out option instead of Add to Plan) */}
        <div className="bg-white border border-[#e8e2d8] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-100 pb-4">
            <div>
              <h3 className="text-xl font-black text-stone-900">Custom SEO Add-On Upgrades</h3>
              <p className="text-xs text-stone-600 mt-1">
                Enhance your monthly campaign with targeted extra blog content, citation bursts, or video SEO.
              </p>
            </div>
            <button
              onClick={() => onOpenReachOut('Custom Add-On Package Inquiry')}
              className="bg-[#f7efe3] hover:bg-[#ebdcc8] text-[#6e4d2f] font-bold text-xs px-4 py-2 rounded-xl border border-[#e8dac8] transition-colors shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Reach Out For Custom Add-Ons</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ONS.map((addon) => (
              <div key={addon.id} className="bg-[#faf8f5] border border-[#e8e2d8] p-4 rounded-2xl flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <span className="font-extrabold text-stone-900 text-sm">{addon.name}</span>
                    <span className="text-xs font-black text-[#a67c52] bg-white px-2 py-0.5 rounded border border-[#e8dac8]">
                      ${addon.price}/{addon.unit}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{addon.description}</p>
                </div>

                <button
                  onClick={() => onOpenReachOut(`Add-On Request: ${addon.name} ($${addon.price}/${addon.unit})`)}
                  className="w-full bg-white hover:bg-stone-50 border border-[#e8e2d8] text-stone-800 text-xs font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#a67c52]" />
                  <span>Reach Out About This</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Footer Banner */}
        <div className="bg-[#f7efe3] border border-[#e8dac8] p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-800">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-extrabold text-stone-900 text-sm">Need a custom enterprise quote or have specific questions?</div>
            <div className="text-xs text-stone-600">
              Our team responds within 1 business hour to online inquiries.
            </div>
          </div>

          <button
            onClick={() => onOpenReachOut('General Sales Inquiry')}
            className="bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-xs transition-colors shrink-0"
          >
            Contact Sales Team
          </button>
        </div>

      </div>
    </section>
  );
};
