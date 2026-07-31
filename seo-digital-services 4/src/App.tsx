import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsSeoSection } from './components/WhatIsSeoSection';
import { SeoServicesSection } from './components/SeoServicesSection';
import { PricingSection } from './components/PricingSection';
import { SeoToolsSection } from './components/SeoToolsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ActiveTab } from './types';


// --- URL routing: each page gets a real URL ---
const TAB_PATHS: Record<ActiveTab, string> = {
  'preview': '/',
  'what-is-seo': '/what-is-seo',
  'services': '/services',
  'pricing': '/pricing',
  'seo-tools': '/seo-tools',
};

const PATH_TABS: Record<string, ActiveTab> = {
  '/': 'preview',
  '/what-is-seo': 'what-is-seo',
  '/services': 'services',
  '/pricing': 'pricing',
  '/seo-tools': 'seo-tools',
};

const PAGE_TITLES: Record<ActiveTab, string> = {
  'preview': 'SEO Digital Services | Organic Search Visibility & SEO Agency',
  'what-is-seo': 'What is SEO & Why Your Business Needs It | SEO Digital Services',
  'services': 'SEO Services & Search Engine Optimization | SEO Digital Services',
  'pricing': 'SEO Service Packages & Pricing | SEO Digital Services',
  'seo-tools': 'SEO Tools, Strategies & Best Practices | SEO Digital Services',
};

const tabFromPath = (): ActiveTab => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return PATH_TABS[path] ?? 'preview';
};

export default function App() {
  const [activeTab, setActiveTabState] = useState<ActiveTab>(tabFromPath);
  const [isReachOutOpen, setIsReachOutOpen] = useState(false);
  const [reachOutSubject, setReachOutSubject] = useState('General Inquiry');

  const domainName = 'seodigitalservices.com';

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

  // Scroll to top and set the page title whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[activeTab];
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
