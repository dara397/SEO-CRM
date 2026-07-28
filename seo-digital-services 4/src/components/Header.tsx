import React from 'react';
import { ShieldCheck, Sparkles, Globe, BarChart3, HelpCircle, MessageSquare, Layers } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReachOut: (subject?: string) => void;
  domainName: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenReachOut,
  domainName,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8e2d8]">
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <button 
            onClick={() => setActiveTab('preview')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#a67c52] text-white flex items-center justify-center font-extrabold text-lg shadow-sm group-hover:bg-[#8e653d] transition-colors">
              S
            </div>
            <div>
              <span className="text-xl font-black text-stone-900 tracking-tight block leading-none">
                SEO Digital Services
              </span>
              <span className="text-[11px] font-bold text-[#a67c52] tracking-widest uppercase block mt-1">
                Organic Search Visibility
              </span>
            </div>
          </button>

          {/* Navigation Links with Light Brown Bar Background */}
          <nav className="hidden md:flex items-center gap-1 bg-[#f2e7d8] p-1.5 rounded-2xl border border-[#e2d2bd] shadow-2xs">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'preview'
                  ? 'bg-white text-[#a67c52] shadow-sm border border-[#d6c3ae]'
                  : 'text-[#6e4d2f] hover:text-stone-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Home
            </button>

            <button
              onClick={() => setActiveTab('what-is-seo')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'what-is-seo'
                  ? 'bg-white text-[#a67c52] shadow-sm border border-[#d6c3ae]'
                  : 'text-[#6e4d2f] hover:text-stone-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#a67c52]" />
              What is SEO?
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'services'
                  ? 'bg-white text-[#a67c52] shadow-sm border border-[#d6c3ae]'
                  : 'text-[#6e4d2f] hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#a67c52]" />
              Services
            </button>

            <button
              onClick={() => setActiveTab('pricing')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'pricing'
                  ? 'bg-white text-[#a67c52] shadow-sm border border-[#d6c3ae]'
                  : 'text-[#6e4d2f] hover:text-stone-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Service Packages
            </button>

            <button
              onClick={() => setActiveTab('seo-tools')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'seo-tools'
                  ? 'bg-white text-[#a67c52] shadow-sm border border-[#d6c3ae]'
                  : 'text-[#6e4d2f] hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#a67c52]" />
              SEO Tools & Tips
            </button>
          </nav>

          {/* Action Reach Out Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenReachOut('General Inquiry')}
              className="bg-[#a67c52] hover:bg-[#8e653d] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reach Out</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Tab Bar with Light Brown Background */}
      <div className="md:hidden flex border-t border-[#e2d2bd] bg-[#f2e7d8] p-1.5 overflow-x-auto gap-1">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'preview' ? 'bg-white text-[#a67c52] shadow-xs' : 'text-[#6e4d2f]'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab('what-is-seo')}
          className={`flex-1 min-w-[85px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'what-is-seo' ? 'bg-white text-[#a67c52] shadow-xs' : 'text-[#6e4d2f]'
          }`}
        >
          What is SEO?
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'services' ? 'bg-white text-[#a67c52] shadow-xs' : 'text-[#6e4d2f]'
          }`}
        >
          Services
        </button>
        <button
          onClick={() => setActiveTab('pricing')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'pricing' ? 'bg-white text-[#a67c52] shadow-xs' : 'text-[#6e4d2f]'
          }`}
        >
          Packages
        </button>
        <button
          onClick={() => setActiveTab('seo-tools')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'seo-tools' ? 'bg-white text-[#a67c52] shadow-xs' : 'text-[#6e4d2f]'
          }`}
        >
          SEO Tools
        </button>
      </div>
    </header>
  );
};
