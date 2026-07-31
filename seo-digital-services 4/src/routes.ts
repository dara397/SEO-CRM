import { ActiveTab } from './types';

// TEST <div> line to check auto-close behaviour
import { ActiveTab } from './types';

/**
 * Canonical origin for the production site.
 * Keep this in sync with index.html and public/sitemap.xml.
 */
export const CANONICAL_ORIGIN = 'https://seodigitalservices.com';

/** Every page has exactly one real, crawlable URL. */
export const TAB_PATHS: Record<ActiveTab, string> = {
  'preview': '/',
  'what-is-seo': '/what-is-seo',
  'services': '/services',
  'seo-tools': '/seo-tools',
};

export const PATH_TABS: Record<string, ActiveTab> = {
  '/': 'preview',
  '/what-is-seo': 'what-is-seo',
  '/services': 'services',
  '/seo-tools': 'seo-tools',
};

export const PAGE_TITLES: Record<ActiveTab, string> = {
  'preview': 'SEO Digital Services | Organic Search Visibility',
  'what-is-seo': 'What is SEO & Why Your Business Needs It | SEO Digital Services',
  'services': 'SEO Services & Search Engine Optimization | SEO Digital Services',
  'seo-tools': 'SEO Tools, Strategies & Best Practices | SEO Digital Services',
};

export const PAGE_DESCRIPTIONS: Record<ActiveTab, string> = {
  'preview': 'Organic SEO agency services: keyword strategy, technical audits and authority link building that grow qualified search traffic.',
  'what-is-seo': 'A plain-English guide to how search engine optimization works and why organic rankings compound business growth over time.',
  'services': 'Explore our SEO service modules: local search, technical SEO, link building, e-commerce SEO and AI search optimization.',
  'seo-tools': 'Practical SEO tools, strategies and best practices you can apply to improve crawlability, rankings and organic health.',
};

/** Resolve the current pathname to a tab, defaulting to the home page. */
export const tabFromPath = (): ActiveTab => {
  let path = window.location.pathname;
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return PATH_TABS[path] ?? 'preview';
};

/** Absolute canonical URL for a given tab. */
export const canonicalUrl = (tab: ActiveTab): string => {
  const path = TAB_PATHS[tab];
  return path === '/' ? CANONICAL_ORIGIN + '/' : CANONICAL_ORIGIN + path;
};
