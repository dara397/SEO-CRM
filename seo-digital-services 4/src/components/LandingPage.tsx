import React from 'react';
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { LandingPageData } from '../types';

interface LandingPageProps {
  data: LandingPageData;
  onGoToPackages: () => void;
  onOpenReachOut: (subject?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ data, onGoToPackages, onOpenReachOut }) => {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="bg-[#faf8f5]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#8c5e38] bg-[#f2e7d8] border border-[#e2d2bd] rounded-full px-4 py-1.5 mb-5">
          {data.kicker}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-stone-900 leading-tight mb-5">{data.h1}</h1>
        <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">{data.intro}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onOpenReachOut(data.ctaSubject)}
            className="bg-[#a67c52] hover:bg-[#8c5e38] text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            {data.ctaLabel}
          </button>
          <button
            onClick={onGoToPackages}
            className="bg-stone-900 hover:bg-stone-700 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
          >
            View Monthly Packages
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.stats.map((s) => (
            <div key={s.label} className="bg-white border border-[#e2d2bd] rounded-2xl p-6 text-center shadow-sm">
              <div className="text-3xl font-black text-[#8c5e38]">{s.value}</div>
              <div className="text-xs text-stone-500 mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content sections */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 space-y-10">
        {data.sections.map((sec) => (
          <div key={sec.heading}>
            <h2 className="text-2xl font-black text-stone-900 mb-3">{sec.heading}</h2>
            {sec.paragraphs.map((p, i) => (
              <p key={i} className="text-stone-600 leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Deliverables */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-2xl font-black text-stone-900 mb-5">{data.deliverablesHeading}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 bg-white border border-[#e2d2bd] rounded-xl p-4 text-sm text-stone-700"
            >
              <CheckCircle2 className="w-4 h-4 text-[#a67c52] mt-0.5 shrink-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-black text-stone-900 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {data.faqs.map((f) => (
            <div key={f.q} className="bg-white border border-[#e2d2bd] rounded-2xl p-6">
              <h3 className="font-bold text-stone-900 mb-2">{f.q}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#231e1a] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{data.bottomCtaHeading}</h2>
          <p className="text-stone-400 text-sm mb-6">
            Transparent monthly pricing from $997/mo. 3-month minimum. Free initial audit.
          </p>
          <button
            onClick={() => onOpenReachOut(data.ctaSubject)}
            className="bg-[#a67c52] hover:bg-[#8c5e38] text-white font-bold px-7 py-3 rounded-xl transition-colors"
          >
            Request Free Audit
          </button>
        </div>
      </section>
    </div>
  );
};
