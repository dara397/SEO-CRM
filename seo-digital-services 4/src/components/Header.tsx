import React from 'react';
import { ShieldCheck, Sparkles, Globe, BarChart3, HelpCircle, MessageSquare, Layers } from 'lucide-react';
import { ActiveTab } from '../types';
import { TAB_PATHS } from '../routes';

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
  // Nav items render as real <a href> elements so that crawlers can follow the
  // internal link graph and users can middle-click / open in a new tab. Plain
  // left-clicks are intercepted for an instant client-side transition.
  const navLinkProps = (tab: ActiveTab) => ({
    href: TAB_PATHS[tab],
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      setActiveTab(tab);
    },
  });

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dceaf3]">
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a 
            {...navLinkProps('preview')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#6aaed9] text-white flex items-center justify-center font-extrabold text-lg shadow-sm group-hover:bg-[#4f97c6] transition-colors">
              P
            </div>
            <div>
              <span className="text-xl font-black text-stone-900 tracking-tight block leading-none">
                PGBlueprint
              </span>
              <span className="text-[11px] font-bold text-[#6aaed9] tracking-widest uppercase block mt-1">
                Organic Search Visibility
              </span>
            </div>
          </a>

          {/* Navigation Links with Light Brown Bar Background */}
          <nav className="hidden md:flex items-center gap-1 bg-[#e6f3fa] p-1.5 rounded-2xl border border-[#cbe3f1] shadow-2xs">
            <a
              {...navLinkProps('preview')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'preview'
                  ? 'bg-white text-[#6aaed9] shadow-sm border border-[#bcd9ea]'
                  : 'text-[#3a6b87] hover:text-stone-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Home
            </a>

            <a
              {...navLinkProps('what-is-seo')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'what-is-seo'
                  ? 'bg-white text-[#6aaed9] shadow-sm border border-[#bcd9ea]'
                  : 'text-[#3a6b87] hover:text-stone-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#6aaed9]" />
              What is SEO?
            </a>

            <a
              {...navLinkProps('services')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'services'
                  ? 'bg-white text-[#6aaed9] shadow-sm border border-[#bcd9ea]'
                  : 'text-[#3a6b87] hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#6aaed9]" />
              Services
            </a>

            <a
              {...navLinkProps('pricing')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'pricing'
                  ? 'bg-white text-[#6aaed9] shadow-sm border border-[#bcd9ea]'
                  : 'text-[#3a6b87] hover:text-stone-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Service Packages
            </a>

            <a
              {...navLinkProps('seo-tools')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'seo-tools'
                  ? 'bg-white text-[#6aaed9] shadow-sm border border-[#bcd9ea]'
                  : 'text-[#3a6b87] hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#6aaed9]" />
              Tools & Tips
            </a>
          </nav>

          {/* Action Reach Out Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenReachOut('General Inquiry')}
              className="bg-[#6aaed9] hover:bg-[#4f97c6] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reach Out</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Tab Bar with Light Brown Background */}
      <div className="md:hidden flex border-t border-[#cbe3f1] bg-[#e6f3fa] p-1.5 overflow-x-auto gap-1">
        <a
          {...navLinkProps('preview')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'preview' ? 'bg-white text-[#6aaed9] shadow-xs' : 'text-[#3a6b87]'
          }`}
        >
          Home
        </a>
        <a
          {...navLinkProps('what-is-seo')}
          className={`flex-1 min-w-[85px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'what-is-seo' ? 'bg-white text-[#6aaed9] shadow-xs' : 'text-[#3a6b87]'
          }`}
        >
          What is SEO?
        </a>
        <a
          {...navLinkProps('services')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'services' ? 'bg-white text-[#6aaed9] shadow-xs' : 'text-[#3a6b87]'
          }`}
        >
          Services
        </a>
        <a
          {...navLinkProps('pricing')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'pricing' ? 'bg-white text-[#6aaed9] shadow-xs' : 'text-[#3a6b87]'
          }`}
        >
          Packages
        </a>
        <a
          {...navLinkProps('seo-tools')}
          className={`flex-1 min-w-[75px] py-2 text-center text-xs font-bold rounded-lg ${
            activeTab === 'seo-tools' ? 'bg-white text-[#6aaed9] shadow-xs' : 'text-[#3a6b87]'
          }`}
        >
          SEO Tools
        </a>
      </div>
    </header>
  );
};
