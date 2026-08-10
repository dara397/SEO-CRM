import { ActiveTab } from './types';

/**
 * Single source of truth for the tab <-> URL mapping.
 *
 * Lives in its own module so that App, Header and Footer can all share it
 * without circular imports. Anything that renders a nav link should build its
 * href from TAB_PATHS so the crawlable URL and the SPA transition can never
 * drift apart.
 */
export const TAB_PATHS: Record<ActiveTab, string> = {
  'preview': '/',
  'what-is-seo': '/what-is-seo',
  'services': '/services',
  'pricing': '/pricing',
  'seo-tools': '/seo-tools',
  'local-seo': '/local-seo-services',
  'link-building': '/link-building-services',
  'lead-generation': '/lead-generation-services',
};

export const PATH_TABS: Record<string, ActiveTab> = {
  '/': 'preview',
  '/what-is-seo': 'what-is-seo',
  '/services': 'services',
  '/pricing': 'pricing',
  '/seo-tools': 'seo-tools',
  '/local-seo-services': 'local-seo',
  '/link-building-services': 'link-building',
  '/lead-generation-services': 'lead-generation',
};

export const SITE_ORIGIN = 'https://www.pgblueprint.com';
