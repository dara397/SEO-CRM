import { ActiveTab } from './types';
import { TAB_PATHS, SITE_ORIGIN } from './routes';

/**
 * Single source of truth for per-page SEO metadata.
 *
 * Used in two places:
 *  1. scripts/prerender.mjs writes these into the static HTML of every route at
 *     build time, so crawlers that do not run JavaScript still see unique
 *     titles, descriptions and canonicals.
 *  2. App.tsx re-applies them on client-side tab changes, so the head stays
 *     correct during SPA navigation.
 */
export const PAGE_TITLES: Record<ActiveTab, string> = {
  'preview': 'PGBlueprint | Organic Search Visibility & SEO Agency',
  'what-is-seo': 'What is SEO & Why Your Business Needs It | PGBlueprint',
  'services': 'SEO Services & Search Engine Optimization | PGBlueprint',
  'pricing': 'SEO Service Packages & Pricing | PGBlueprint',
  'seo-tools': 'SEO Tools, Strategies & Best Practices | PGBlueprint',
  'local-seo': 'Local SEO Services & Google Map Pack Optimization | PGBlueprint',
  'link-building': 'Link Building Services & High-Authority Backlinks | PGBlueprint',
  'lead-generation': 'SEO Lead Generation Services | PGBlueprint',
};

export const PAGE_DESCRIPTIONS: Record<ActiveTab, string> = {
  'preview': 'PGBlueprint is an organic search engine optimization agency delivering keyword strategy, technical audits, high-authority backlinks, and Page 1 Google rankings.',
  'what-is-seo': 'Learn how search engine optimization works, why organic rankings drive continuous business growth, and how PGBlueprint maximizes your Google search visibility.',
  'services': 'High-impact SEO services: managed campaigns, local SEO, technical audits, high-authority backlinks, ecommerce SEO, and AI search visibility.',
  'pricing': 'Transparent SEO packages: Starter $997/mo, Growth $1,497/mo, or competitively priced custom plans. 3-month minimum commitment.',
  'seo-tools': 'Curated SEO strategies, tips, and diagnostic tools to boost your Google ranking and organic search visibility.',
  'local-seo': 'Local SEO services that rank your business in the Google Map Pack: Google Business Profile optimization, 150+ local citations, and review generation from $997/mo.',
  'link-building': 'White-hat link building services with DR 40+ editorial backlinks, competitor gap analysis, and transparent reporting. Build the authority page 1 rankings require.',
  'lead-generation': 'SEO lead generation services that turn organic search into exclusive, trackable leads with call tracking, conversion pages, and high-intent keyword targeting.',
};

/** Every route that gets its own prerendered HTML file. */
export const PRERENDER_ROUTES = (Object.keys(TAB_PATHS) as ActiveTab[]).map((tab) => ({
  tab,
  path: TAB_PATHS[tab],
  title: PAGE_TITLES[tab],
  description: PAGE_DESCRIPTIONS[tab],
  canonical: SITE_ORIGIN + TAB_PATHS[tab],
}));
