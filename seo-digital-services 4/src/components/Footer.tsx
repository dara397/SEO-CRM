import React from 'react';
import { ShieldCheck, MessageSquare, ArrowUpRight, Phone } from 'lucide-react';
import { ActiveTab } from '../types';
import { TAB_PATHS } from '../routes';
import { BUSINESS } from '../data/business';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReachOut: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenReachOut }) => {
  // Footer nav renders as real <a href> elements so the link-only landing pages
  // are reachable by crawlers instead of relying on the sitemap alone.
  const navLinkProps = (tab: ActiveTab) => ({
    href: TAB_PATHS[tab],
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      setActiveTab(tab);
    },
  });

  return (
    <footer className="bg-[#1b2730] text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6aaed9] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                P
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                PGBlueprint
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Delivering high-ranking organic search engine optimization campaigns. Compliant with Google's organic health requirements, Core Web Vitals, and mobile responsiveness. Minimum 3-month commitment.
            </p>

            {/* NAP — name, phone, locality. Local ranking systems cross-check
                this against the Google Business Profile and every citation, so
                it has to appear in exactly this format everywhere. */}
            <div className="pt-1 space-y-1.5">
              <a
                href={BUSINESS.telephoneHref}
                className="flex items-center gap-2 text-base font-black text-white hover:text-[#6aaed9] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#6aaed9]" />
                {BUSINESS.telephoneDisplay}
              </a>
              <p className="text-xs text-stone-400">
                {BUSINESS.locality}, {BUSINESS.region} {BUSINESS.postalCode} &middot; {BUSINESS.hours}
              </p>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                HTTPS Protocol
              </span>
              <span className="text-stone-600">•</span>
              <span className="text-stone-300">Organic Health Compliant</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#b9dcf2]">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  {...navLinkProps('preview')}
                  className="hover:text-white transition-colors"
                >
                  Home / Overview
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#b9dcf2]"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('what-is-seo')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#b9dcf2]"
                >
                  <span>What is SEO?</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('services')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#b9dcf2]"
                >
                  <span>SEO Services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Monthly Service Packages
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('local-seo')}
                  className="hover:text-white transition-colors"
                >
                  Local SEO Services
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('link-building')}
                  className="hover:text-white transition-colors"
                >
                  Link Building Services
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('lead-generation')}
                  className="hover:text-white transition-colors"
                >
                  SEO Lead Generation
                </a>
              </li>
              <li>
                <a
                  {...navLinkProps('seo-tools')}
                  className="hover:text-white transition-colors"
                >
                  Tools & Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Box */}
          <div className="md:col-span-4 space-y-3 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#b9dcf2]">Direct Client Support</h4>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              Have questions about our agency packages or need a custom strategy? Connect with an SEO strategist directly via our secure form.
            </p>

            <button
              onClick={() => onOpenReachOut('Footer Direct Consultation')}
              className="w-full mt-2 bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-extrabold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Reach Out Form</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} PGBlueprint. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-stone-400 cursor-pointer">Organic Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
