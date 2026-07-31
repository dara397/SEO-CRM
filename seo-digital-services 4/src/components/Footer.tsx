import React from 'react';
import { ShieldCheck, MessageSquare, ArrowUpRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReachOut: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenReachOut }) => {
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
              Delivering high-ranking organic search engine optimization campaigns. Compliant with Google's organic health requirements, Core Web Vitals, and mobile responsiveness. Minimum 3-month commitment.
            </p>

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
            <h4 className="text-xs font-black uppercase tracking-wider text-[#e0b589]">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('preview')}
                  className="hover:text-white transition-colors"
                >
                  Home / Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('what-is-seo')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#e0b589]"
                >
                  <span>What is SEO?</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('services')}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#e0b589]"
                >
                  <span>SEO Services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Monthly Service Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('local-seo')}
                  className="hover:text-white transition-colors"
                >
                  Local SEO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('link-building')}
                  className="hover:text-white transition-colors"
                >
                  Link Building Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('lead-generation')}
                  className="hover:text-white transition-colors"
                >
                  SEO Lead Generation
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('seo-tools')}
                  className="hover:text-white transition-colors"
                >
                  Tools & Tips
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Box */}
          <div className="md:col-span-4 space-y-3 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#e0b589]">Direct Client Support</h4>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              Have questions about our agency packages or need a custom strategy? Connect with an SEO strategist directly via our secure form.
            </p>

            <button
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
            © {new Date().getFullYear()} SEO Digital Services. All rights reserved.
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
