import React from 'react';
import { ActiveTab } from './types';
import { TAB_PATHS } from './routes';

/**
 * Build props for an internal link.
 *
 * Renders as a real <a href> so crawlers can follow the internal link graph and
 * users can middle-click or open in a new tab; plain left-clicks are
 * intercepted for an instant client-side transition.
 *
 * Extracted from Header.tsx so Footer, LandingPage, SeoServicesSection and
 * ContactPage all produce identical, crawlable markup instead of each
 * reimplementing it (or, as before, rendering buttons that Google cannot follow
 * at all).
 */
export const navLinkProps = (tab: ActiveTab, setActiveTab: (tab: ActiveTab) => void) => ({
  href: TAB_PATHS[tab],
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setActiveTab(tab);
  },
});
