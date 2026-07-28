import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsSeoSection } from './components/WhatIsSeoSection';
import { SeoServicesSection } from './components/SeoServicesSection';
import { PricingSection } from './components/PricingSection';
import { SeoToolsSection } from './components/SeoToolsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('preview');
  const [isReachOutOpen, setIsReachOutOpen] = useState(false);
  const [reachOutSubject, setReachOutSubject] = useState('General Inquiry');

  const domainName = 'seodigitalservices.com';

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
          <>
            <Hero
              onGoToPackages={() => {
                const pricingEl = document.getElementById('pricing');
                if (pricingEl) {
                  pricingEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setActiveTab('pricing');
                }
              }}
              onGoToWhatIsSeo={() => setActiveTab('what-is-seo')}
              onGoToServices={() => setActiveTab('services')}
              onOpenReachOut={() => handleOpenReachOut('Hero Direct Inquiry')}
              domainName={domainName}
            />

            <WhatIsSeoSection
              onGoToPackages={() => setActiveTab('pricing')}
              onOpenReachOut={handleOpenReachOut}
            />

            <SeoServicesSection
              onGoToPackages={() => setActiveTab('pricing')}
              onOpenReachOut={handleOpenReachOut}
            />

            <PricingSection
              onOpenReachOut={handleOpenReachOut}
              onGoToWhatIsSeo={() => setActiveTab('what-is-seo')}
            />

            <SeoToolsSection
              onOpenReachOut={handleOpenReachOut}
              onGoToWhatIsSeo={() => setActiveTab('what-is-seo')}
            />
          </>
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
