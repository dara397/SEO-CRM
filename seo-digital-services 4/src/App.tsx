import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsSeoSection } from './components/WhatIsSeoSection';
import { SeoServicesSection } from './components/SeoServicesSection';
import { PricingSection } from './components/PricingSection';
import { SeoToolsSection } from './components/SeoToolsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { LANDING_PAGES } from './data/landingPages';
import { ActiveTab } from './types';
import { TAB_PATHS, PATH_TABS, SITE_ORIGIN } from './routes';
import { PAGE_TITLES, PAGE_DESCRIPTIONS } from './seo';

/**
 * Resolve the active tab from a pathname.
 *
 * Takes the path as an argument (instead of reading window.location directly)
 * so the same component can render on the server during prerendering, where
 * there is no window object.
 */
const tabFromPath = (pathname?: string): ActiveTab => {
  const raw = pathname ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const path = raw.replace(/\/+$/, '') || '/';
  return PATH_TABS[path] ?? 'preview';
};

interface AppProps {
  /** Set by the prerenderer; on the client the URL bar is the source of truth. */
  initialPath?: string;
}

export default function App({ initialPath }: AppProps = {}) {
  const [activeTab, setActiveTabState] = useState<ActiveTab>(() => tabFromPath(initialPath));
  const [isReachOutOpen, setIsReachOutOpen] = useState(false);
  const [reachOutSubject, setReachOutSubject] = useState('General Inquiry');

  const domainName = 'pgblueprint.com';

  // Navigate: update the URL and the visible page
  const setActiveTab = useCallback((tab: ActiveTab) => {
    if (window.location.pathname !== TAB_PATHS[tab]) {
      window.history.pushState({}, '', TAB_PATHS[tab]);
    }
    setActiveTabState(tab);
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const onPopState = () => setActiveTabState(tabFromPath());

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Scroll to top and update SEO tags (title, canonical, meta) per page
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[activeTab];

    const url = SITE_ORIGIN + TAB_PATHS[activeTab];
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('name', 'description', PAGE_DESCRIPTIONS[activeTab]);
    setMeta('property', 'og:title', PAGE_TITLES[activeTab]);
    setMeta('property', 'og:description', PAGE_DESCRIPTIONS[activeTab]);
    setMeta('property', 'og:url', url);
  }, [activeTab]);

  const handleOpenReachOut = (subject: string = 'General Inquiry') => {
    setReachOutSubject(subject);
    setIsReachOutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f5fbfe] text-stone-900 flex flex-col font-sans selection:bg-[#4f97c6] selection:text-white">
      
      {/* Top Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReachOut={handleOpenReachOut}
        domainName={domainName}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'preview' && (
          <Hero
            onGoToPackages={() => setActiveTab('pricing')}
            onGoToWhatIsSeo={() => setActiveTab('what-is-seo')}
            onGoToServices={() => setActiveTab('services')}
            onOpenReachOut={() => handleOpenReachOut('Hero Direct Inquiry')}
            domainName={domainName}
          />
        )}

        {activeTab === 'what-is-seo' && (
          <WhatIsSeoSection
            onGoToPackages={() => setActiveTab('pricing')}
            onOpenReachOut={handleOpenReachOut}
          />
        )}

        {activeTab === 'services' && (
          <SeoServicesSection
            onGoToPackages={() => setActiveTab('pricing')}
            onOpenReachOut={handleOpenReachOut}
          />
        )}

        {activeTab === 'pricing' && (
          <PricingSection
            onOpenReachOut={handleOpenReachOut}
            onGoToWhatIsSeo={() => setActiveTab('what-is-seo')}
          />
        )}

        {activeTab === 'seo-tools' && (
          <SeoToolsSection
            onOpenReachOut={handleOpenReachOut}
            onGoToWhatIsSeo={() => setActiveTab('what-is-seo')}
          />
        )}

        {activeTab === 'local-seo' && (
          <LandingPage
            data={LANDING_PAGES['local-seo']}
            onGoToPackages={() => setActiveTab('pricing')}
            onOpenReachOut={handleOpenReachOut}
          />
        )}

        {activeTab === 'link-building' && (
          <LandingPage
            data={LANDING_PAGES['link-building']}
            onGoToPackages={() => setActiveTab('pricing')}
            onOpenReachOut={handleOpenReachOut}
          />
        )}

        {activeTab === 'lead-generation' && (
          <LandingPage
            data={LANDING_PAGES['lead-generation']}
            onGoToPackages={() => setActiveTab('pricing')}
            onOpenReachOut={handleOpenReachOut}
          />
        )}
      </main>

      {/* Reach Out / Contact Form Modal */}
      <BookingModal
        isOpen={isReachOutOpen}
        onClose={() => setIsReachOutOpen(false)}
        initialSubject={reachOutSubject}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenReachOut={handleOpenReachOut}
      />

    </div>
  );
}
