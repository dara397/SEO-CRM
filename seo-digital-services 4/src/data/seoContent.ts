import { SeoTip, AuditItem } from '../types';

export const SEO_TIPS_DATA: SeoTip[] = [
  {
    id: 'google-organic-health',
    category: 'Google Organic Health',
    title: 'Google Core Web Vitals & Organic Search Health Standards',
    summary: 'Ensure your website meets Google’s strict Core Web Vitals requirements for top organic search visibility.',
    impact: 'Critical',
    steps: [
      'Enforce HTTPS/SSL encryption across all domain pathways with HSTS headers.',
      'Optimize Largest Contentful Paint (LCP) under 2.5 seconds using compressed WebP/AVIF media.',
      'Maintain Cumulative Layout Shift (CLS) near zero (<0.1) by reserving media dimensions.',
      'Ensure mobile-first responsive viewports with minimum touch targets of 44x44px.'
    ]
  },
  {
    id: 'seo-strategies',
    category: 'SEO Strategies',
    title: 'High-Impact SEO Strategies for Competitive Organic Rankings',
    summary: 'Tactical execution methods that build domain authority, top topical relevance, and sustained organic rank.',
    impact: 'High',
    steps: [
      'Build topic clusters around primary intent keywords ("seo strategies", "seo tips", "seo tools").',
      'Target long-tail commercial intent search queries with structured schema markup.',
      'Acquire contextual, high domain authority backlinks through original data & outreach.',
      'Set up Google Business Profile review funnels to maximize local map pack inclusion.'
    ]
  },
  {
    id: 'seo-tips',
    category: 'SEO Tips',
    title: 'Essential On-Page & Technical SEO Tips',
    summary: 'Quick-win optimizations that immediately improve Google bot crawling, indexing, and CTR.',
    impact: 'High',
    steps: [
      'Keep Title tags between 50-60 characters including target keywords.',
      'Write compelling meta descriptions (140-155 characters) with clear call-to-action.',
      'Use exact single H1 tag per page, followed by logical H2 and H3 topic hierarchy.',
      'Include Schema.org JSON-LD structured data for LocalBusiness, Service, and FAQPage.'
    ]
  },
  {
    id: 'seo-tools',
    category: 'SEO Tools',
    title: 'Modern SEO Tools & Audit Automation Stack',
    summary: 'Key tools and diagnostic instrumentation needed to monitor keyword rank and site performance.',
    impact: 'Medium',
    steps: [
      'Google Search Console for indexing diagnostic logs and click-through metrics.',
      'Google PageSpeed Insights & Lighthouse for Core Web Vitals profiling.',
      'JSON-LD Schema Validators for rich search results compliance.',
      'Rank tracking and backlink profile health monitoring platforms.'
    ]
  }
];

export const INITIAL_AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'https-check',
    title: 'HTTPS & SSL Security Protocol',
    category: 'Security & Protocol',
    status: 'passed',
    score: 100,
    recommendation: 'Active HTTPS protocol with 256-bit TLS encryption verified for pgblueprint.com.'
  },
  {
    id: 'mobile-check',
    title: 'Mobile-First Responsive Design',
    category: 'User Experience',
    status: 'passed',
    score: 98,
    recommendation: 'Viewport tags configured with touch-friendly elements for all mobile screen widths.'
  },
  {
    id: 'schema-check',
    title: 'Structured Data (Schema.org JSON-LD)',
    category: 'Semantic Markup',
    status: 'passed',
    score: 95,
    recommendation: 'LocalBusiness and Service schema embedded for rich snippet eligibility in Google search.'
  },
  {
    id: 'meta-check',
    title: 'Meta Tags & Open Graph Protocol',
    category: 'On-Page SEO',
    status: 'passed',
    score: 96,
    recommendation: 'Title tags, Meta descriptions, canonical links, and social card previews present.'
  },
  {
    id: 'speed-check',
    title: 'Core Web Vitals & PageSpeed Index',
    category: 'Performance',
    status: 'passed',
    score: 99,
    recommendation: 'LCP under 1.2s, FID under 10ms, CLS 0.00. High organic rank potential.'
  }
];
