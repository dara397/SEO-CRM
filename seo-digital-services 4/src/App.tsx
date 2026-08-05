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


// --- URL routing: each page gets a real URL ---
const TAB_PATHS: Record<ActiveTab, string> = {
  'preview': '/',
  'what-is-seo': '/what-is-seo',
  'services': '/services',
  'pricing': '/pricing',
  'seo-tools': '/seo-tools',
  'local-seo': '/local-seo-services',
  'link-building': '/link-building-services',
  'lead-generation': '/lead-generation-services',
};

const PATH_TABS: Record<string, ActiveTab> = {
  '/': 'preview',
  '/what-is-seo': 'what-is-seo',
  '/services': 'services',
  '/pricing': 'pricing',
  '/seo-tools': 'seo-tools',
  '/local-seo-services': 'local-seo',
  '/link-building-services': 'link-building',
  '/lead-generation-services': 'lead-generation',
};

const PAGE_TITLES: Record<ActiveTab, string> = {
  'preview': 'PGBlueprint | Organic Search Visibility & SEO Agency',
  'what-is-seo': 'What is SEO & Why Your Business Needs It | PGBlueprint',
  'services': 'SEO Services & Search Engine Optimization | PGBlueprint',
  'pricing': 'SEO Service Packages & Pricing | PGBlueprint',
  'seo-tools': 'SEO Tools, Strategies & Best Practices | PGBlueprint',
  'local-seo': 'Local SEO Services & Google Map Pack Optimization | PGBlueprint',
  'link-building': 'Link Building Services & High-Authority Backlinks | PGBlueprint',
  'lead-generation': 'SEO Lead Generation Services | PGBlueprint',
};


const PAGE_DESCRIPTIONS: Record<ActiveTab, string> = {
  'preview': 'PGBlueprint is an organic search engine optimization agency delivering keyword strategy, technical audits, high-authority backlinks, and Page 1 Google rankings.',
  'what-is-seo': 'Learn how search engine optimization works, why organic rankings drive continuous business growth, and how PGBlueprint maximizes your Google search visibility.',
  'services': 'High-impact SEO services: managed campaigns, local SEO, technical audits, high-authority backlinks, ecommerce SEO, and AI search visibility.',
  'pricing': 'Transparent SEO packages: Starter $997/mo, Growth $1,497/mo, or competitively priced custom plans. 3-month minimum commitment.',
  'seo-tools': 'Curated SEO strategies, tips, and diagnostic tools to boost your Google ranking and organic search visibility.',
  'local-seo': 'Local SEO services that rank your business in the Google Map Pack: Google Business Profile optimization, 150+ local citations, and review generation from $997/mo.',
  'link-building': 'White-hat link building services with DR 40+ editorial backlinks, competitor gap analysis, and transparent reporting. Build the authority page 1 rankings require.',
  'lead-generation': 'SEO lead generation services that turn organic search into exclusive, trackable leads with call tracking, conversion pages, and high-intent keyword targeting.',
};

const SITE_ORIGIN = 'https://www.pgblueprint.com';

const tabFromPath = (): ActiveTab => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return PATH_TABS[path] ?? 'preview';
};

export default function App() {
  const [activeTab, setActiveTabState] = useState<ActiveTab>(tabFromPath);
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
