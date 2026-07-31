import React from 'react';
import { Sparkles, Globe, HelpCircle, MessageSquare, Layers } from 'lucide-react';
import { ActiveTab } from '../types';
import { TAB_PATHS } from '../routes';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReachOut: (subject?: string) => void;
}

interface NavItem {
  tab: ActiveTab;
  label: string;
  shortLabel: string;
  Icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { tab: 'preview', label: 'Home', shortLabel: 'Home', Icon: Globe },
  { tab: 'what-is-seo', label: 'What is SEO?', shortLabel: 'What is SEO?', Icon: HelpCircle },
  { tab: 'services', label: 'Services', shortLabel: 'Services', Icon: Layers },
  { tab: 'seo-tools', label: 'SEO Tools & Tips', shortLabel: 'SEO Tools', Icon: Sparkles },
];

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenReachOut,
}) => {
  /**
   * Navigation is rendered as real anchors with real hrefs so that crawlers can
   * discover and follow every page. The click handler keeps client-side routing
   * for plain left clicks, while modified clicks (open in new tab or window)
   * fall through to native browser behaviour.
   */
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8e2d8]">

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo / Brand */}
          <a
            href={TAB_PATHS['preview']}
            onClick={(event) => handleNavClick(event, 'preview')}
            aria-label="SEO Digital Services home"
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
          </a>

          {/* Navigation Links with Light Brown Bar Background */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 bg-[#f2e7d8] p-1.5 rounded-2xl border border-[#e2d2bd] shadow-2xs"
          >
            {NAV_ITEMS.map(({ tab, label, Icon }) => (
              <a
                key={tab}
                href={TAB_PATHS[tab]}
                onClick={(event) => handleNavClick(event, tab)}
                aria-current={activeTab === tab ? 'page' : undefined}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === tab
                    ? 'bg-white text-[#a67c52] shadow-sm border border-[#d6c3ae]'
                    : 'text-[#6e4d2f] hover:text-stone-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#a67c52]" />
                {label}
              </a>
            ))}
          </nav>

          {/* Action Reach Out Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
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
      <nav
        aria-label="Primary mobile"
        className="md:hidden flex border-t border-[#e2d2bd] bg-[#f2e7d8] p-1.5 overflow-x-auto gap-1"
      >
        {NAV_ITEMS.map(({ tab, shortLabel }) => (
          <a
            key={tab}
            href={TAB_PATHS[tab]}
            onClick={(event) => handleNavClick(event, tab)}
            aria-current={activeTab === tab ? 'page' : undefined}
            className={`flex-1 min-w-[85px] min-h-[44px] flex items-center justify-center text-center text-xs font-bold rounded-lg ${
              activeTab === tab ? 'bg-white text-[#a67c52] shadow-xs' : 'text-[#6e4d2f]'
            }`}
          >
            {shortLabel}
          </a>
        ))}
      </nav>
    </header>
  );
};
