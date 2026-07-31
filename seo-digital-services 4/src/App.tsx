import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsSeoSection } from './components/WhatIsSeoSection';
import { SeoServicesSection } from './components/SeoServicesSection';
import { SeoToolsSection } from './components/SeoToolsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ActiveTab } from './types';
import {
  TAB_PATHS,
  PAGE_TITLES,
  PAGE_DESCRIPTIONS,
  tabFromPath,
  canonicalUrl,
} from './routes';

/** Update an existing tag in the document head, if it is present. */
const setHeadAttr = (selector: string, attribute: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) {
    el.setAttribute(attribute, value);
  }
};

export default function App() {
  const [activeTab, setActiveTabState] = useState<ActiveTab>(tabFromPath);
  const [isReachOutOpen, setIsReachOutOpen] = useState(false);
  const [reachOutSubject, setReachOutSubject] = useState('General Inquiry');

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

  // Keep scroll position, title, description and canonical URL in sync with the route.
  // Without a per-route canonical, every page would declare the home page as its
  // canonical URL, telling search engines the other pages are duplicates.
  useEffect(() => {
    window.scrollTo(0, 0);

    const title = PAGE_TITLES[activeTab];
    const description = PAGE_DESCRIPTIONS[activeTab];
    const url = canonicalUrl(activeTab);

    document.title = title;
    setHeadAttr('meta[name="description"]', 'content', description);
    setHeadAttr('link[rel="canonical"]', 'href', url);
    setHeadAttr('meta[property="og:title"]', 'content', title);
    setHeadAttr('meta[property="og:description"]', 'content', description);
    setHeadAttr('meta[property="og:url"]', 'content', url);
  }, [activeTab]);

  const handleOpenReachOut = (subject: string = 'General Inquiry') => {
    setReachOutSubject(subject);
    setIsReachOutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-[#8c5e38] selection:text-white">

      {/* Top Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReachOut={handleOpenReachOut}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'preview' && (
          <Hero
            onGoToWhatIsSeo={() => setActiveTab('what-is-seo')}
            onGoToServices={() => setActiveTab('services')}
            onOpenReachOut={() => handleOpenReachOut('Hero Direct Inquiry')}
          />
        )}

        {activeTab === 'what-is-seo' && (
          <WhatIsSeoSection onOpenReachOut={handleOpenReachOut} />
        )}

        {activeTab === 'services' && (
          <SeoServicesSection onOpenReachOut={handleOpenReachOut} />
        )}

        {activeTab === 'seo-tools' && (
          <SeoToolsSection onOpenReachOut={handleOpenReachOut} />
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
