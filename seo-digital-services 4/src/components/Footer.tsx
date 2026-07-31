import React from 'react';
import { ShieldCheck, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ActiveTab } from '../types';
import { TAB_PATHS } from '../routes';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReachOut: (subject?: string) => void;
}

interface FooterLink {
  tab: ActiveTab;
  label: string;
  highlighted?: boolean;
}

const FOOTER_LINKS: FooterLink[] = [
  { tab: 'preview', label: 'Home / Overview' },
  { tab: 'what-is-seo', label: 'What is SEO?', highlighted: true },
  { tab: 'services', label: 'SEO Services', highlighted: true },
  { tab: 'seo-tools', label: 'SEO Tools & Tips' },
];

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenReachOut }) => {
  // Real hrefs keep the footer navigation crawlable; plain clicks stay client-side.
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    tab: ActiveTab,
  ) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <footer className="bg-[#231e1a] text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-stone-800">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#a67c52] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                S
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                SEO Digital Services
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Delivering organic search engine optimization campaigns built around Google's organic health requirements, Core Web Vitals, and mobile responsiveness. Minimum 6-month commitment.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                HTTPS Protocol
              </span>
              <span className="text-stone-600">&bull;</span>
              <span className="text-stone-300">Organic Health Compliant</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-[#e0b589]">Navigation</h2>
            <nav aria-label="Footer">
              <ul className="space-y-2 text-xs">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.tab}>
                    <a
                      href={TAB_PATHS[link.tab]}
                      onClick={(event) => handleNavClick(event, link.tab)}
                      className={'hover:text-white transition-colors flex items-center gap-1 ' + (link.highlighted ? 'text-[#e0b589]' : '')}
                    >
                      <span>{link.label}</span>
                      {link.highlighted && <ArrowUpRight className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Direct Contact Box */}
          <div className="md:col-span-4 space-y-3 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
            <h2 className="text-xs font-black uppercase tracking-wider text-[#e0b589]">Direct Client Support</h2>

            <p className="text-xs text-stone-400 leading-relaxed">
              Have questions about our SEO services or need a custom strategy? Connect with an SEO strategist directly via our secure form.
            </p>

            <a
              href="tel:+19498781316"
              className="text-xs font-bold text-[#e0b589] hover:underline block"
            >
              (949) 878-1316
            </a>

            <button
              type="button"
              onClick={() => onOpenReachOut('Footer Direct Consultation')}
              className="w-full mt-2 bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Reach Out Form</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} SEO Digital Services. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
