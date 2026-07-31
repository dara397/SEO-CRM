import { SeoServiceItem, DashboardMetricHighlight } from '../types';

export const TOP_VOLUME_KEYWORDS = [
  { keyword: 'seo services', volume: '49,500/mo', intent: 'Commercial' },
  { keyword: 'local seo services', volume: '27,100/mo', intent: 'Commercial' },
  { keyword: 'link building services', volume: '22,200/mo', intent: 'Commercial' },
  { keyword: 'organic search engine optimization', volume: '18,100/mo', intent: 'Informational/Commercial' },
  { keyword: 'managed seo services', volume: '14,500/mo', intent: 'Commercial' },
  { keyword: 'ecommerce seo services', volume: '14,800/mo', intent: 'Commercial' },
  { keyword: 'technical seo audit', volume: '12,100/mo', intent: 'Transactional' },
  { keyword: 'on page seo services', volume: '9,900/mo', intent: 'Commercial' },
  { keyword: 'ai search visibility services', volume: '8,400/mo', intent: 'Commercial' },
  { keyword: 'google authority score optimization', volume: '6,600/mo', intent: 'Transactional' },
];

export const SEO_SERVICES_LIST: SeoServiceItem[] = [
  {
    id: 'managed-seo',
    title: 'Full-Service Managed SEO Campaigns',
    category: 'Core Service',
    searchVolume: '49,500/mo',
    keywordDifficulty: 'Medium-High',
    primaryKeywords: ['seo services', 'managed seo services', 'organic search engine optimization', 'best seo agency'],
    summary: 'End-to-end organic search management combining technical audits, high-intent keyword clustering, content publishing, and authority backlink acquisition under a guaranteed 3-month compounding roadmap.',
    deliverables: [
      'Dedicated Senior SEO Campaign Strategist',
      'Comprehensive competitor gap analysis & search intent mapping',
      'Monthly high-authority contextual backlink outreach',
      'Weekly keyword position tracking and executive reporting',
      'Full Google Organic Search Health compliance monitoring'
    ],
    businessImpact: 'Delivers a predictable, scalable inbound traffic engine that turns commercial search queries into high-value revenue leads.',
    iconName: 'Globe'
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Business Profile Optimization',
    category: 'Local Search',
    searchVolume: '27,100/mo',
    keywordDifficulty: 'Low-Medium',
    primaryKeywords: ['local seo services', 'google business profile optimization', 'local map pack ranking', 'citation building'],
    summary: 'Dominate your regional market and secure top 3 Google Map Pack positions. We optimize your Google Business Profile, synchronize 150+ local directory citations, and establish automated review funnels.',
    deliverables: [
      'Complete Google Business Profile optimization & verification',
      '100-150 localized directory citations (Yelp, YellowPages, Bing Places)',
      'Automated review generation funnel for continuous customer reviews',
      'Geo-targeted landing page creation & local schema markup'
    ],
    businessImpact: 'Captures high-intent local buyers searching for immediate service within your geographic territory.',
    iconName: 'MapPin'
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO Audits & Core Web Vitals Optimization',
    category: 'Technical',
    searchVolume: '12,100/mo',
    keywordDifficulty: 'High',
    primaryKeywords: ['technical seo audit', 'core web vitals optimization', 'schema json-ld', 'crawlability audit'],
    summary: 'Eliminate technical roadblocks preventing Google bots from crawling and indexing your site. We optimize LCP, FID, and CLS performance metrics, implement JSON-LD schema, and fix indexation errors.',
    deliverables: [
      'In-depth 100-point technical site health audit',
      'Core Web Vitals sub-second page speed acceleration',
      'JSON-LD Structured Data Schema implementation (Organization, LocalBusiness, Product)',
      'XML sitemap & robots.txt optimization with indexing fixes'
    ],
    businessImpact: 'Ensures 100% search engine indexation health and max page experience scores required for top rank eligibility.',
    iconName: 'Cpu'
  },
  {
    id: 'link-building',
    title: 'High-Authority Backlink Acquisition & Digital PR',
    category: 'Authority',
    searchVolume: '22,200/mo',
    keywordDifficulty: 'High',
    primaryKeywords: ['link building services', 'backlink acquisition', 'domain authority score', 'contextual backlinks'],
    summary: 'Build lasting Google trust with white-hat, editorially placed contextual backlinks from high-DR websites in your niche. Boost your Semrush Authority Score from 20s to 50+.',
    deliverables: [
      'Manual blogger outreach & editorial guest placement',
      'High Domain Rating (DR 40+) contextual links with relevant anchors',
      'Toxic backlink audit & Google Disavow management',
      'Transparent backlink reporting dashboard with live verification URLs'
    ],
    businessImpact: 'Directly elevates your domain authority score, enabling competitive keywords to jump from page 3 to top page 1 positions.',
    iconName: 'Link'
  },
  {
    id: 'ecommerce-seo',
    title: 'Ecommerce SEO Services & Product Schema',
    category: 'E-Commerce',
    searchVolume: '14,800/mo',
    keywordDifficulty: 'High',
    primaryKeywords: ['ecommerce seo services', 'shopify seo', 'woocommerce optimization', 'product category ranking'],
    summary: 'Drive high-converting shoppers directly to your product and category pages. Tailored for Shopify, WooCommerce, and custom ecommerce platforms seeking organic revenue growth.',
    deliverables: [
      'Ecommerce taxonomy & URL structure optimization',
      'Rich Product Schema (stars, pricing, stock availability in Google SERPs)',
      'Optimization for high-volume buyer category keywords',
      'Faceted navigation and duplicate content canonicalization'
    ],
    businessImpact: 'Unlocks organic shopping traffic, significantly lowering Customer Acquisition Cost (CAC) compared to Google Shopping Ads.',
    iconName: 'ShoppingCart'
  },
  {
    id: 'ai-seo',
    title: 'AI Search Visibility & GEO (Generative Engine Optimization)',
    category: 'Next-Gen SEO',
    searchVolume: '8,400/mo',
    keywordDifficulty: 'Emerging',
    primaryKeywords: ['ai search visibility services', 'chatgpt ranking', 'google ai overview seo', 'gemini search optimization'],
    summary: 'Position your brand as the cited answer in ChatGPT, Google AI Overviews, Gemini, and Claude. Optimize entity relationships and digital PR for generative search discovery.',
    deliverables: [
      'AI Visibility score & brand mention tracking (ChatGPT, Gemini, AI Overviews)',
      'Entity-focused knowledge graph optimization',
      'Authoritative citation placement across AI source repositories',
      'Structured Q&A content blocks for direct AI snippet extraction'
    ],
    businessImpact: 'Guarantees brand inclusion in AI-driven search answers as search behavior shifts toward conversational engines.',
    iconName: 'Sparkles'
  }
];

export const DASHBOARD_METRICS_EXPLANATIONS: DashboardMetricHighlight[] = [
  {
    id: 'organic-traffic',
    metricName: 'Organic Traffic',
    currentValue: '25.4K Visits',
    change: '+4.12% MoM',
    importanceRating: 'Critical Growth',
    explanation: 'Organic Traffic represents real human visitors reaching your website directly from unpaid Google search results. Unlike paid PPC ads that stop the second budget ends, organic traffic provides compounding, continuous customer leads without per-click cost.',
    howWeOptimize: 'We expand keyword coverage with targeted commercial blog articles, optimize title tags for high CTR, and rank primary category pages on Page 1.',
    keywords: ['organic traffic growth', 'google search traffic', 'inbound lead pipeline']
  },
  {
    id: 'organic-keywords',
    metricName: 'Organic Keywords',
    currentValue: '2.2K Keywords',
    change: '+9.8% MoM',
    importanceRating: 'Critical Growth',
    explanation: 'The total number of search terms for which Google ranks your website in its top 100 search results. Expanding keyword footprint directly expands your digital market share.',
    howWeOptimize: 'Through in-depth search intent clustering and strategic content siloing, we continuously target high-volume long-tail search queries in your industry.',
    keywords: ['organic keywords ranking', 'keyword position expansion', 'topical authority']
  },
  {
    id: 'authority-score',
    metricName: 'Authority Score & Referring Domains',
    currentValue: '28 AS (472 Ref. Domains)',
    change: '+2.16% Ref. Domains',
    importanceRating: 'Essential',
    explanation: 'Semrush Authority Score evaluates your domain’s total backlink trust and overall link popularity. Google uses backlink quality as one of its top 3 primary ranking signals.',
    howWeOptimize: 'We acquire high-DR contextual backlinks from authoritative niche publications, disavow toxic spam links, and build digital PR relationships.',
    keywords: ['authority score optimization', 'referring domains', 'high dr backlinks']
  },
  {
    id: 'ai-visibility',
    metricName: 'AI Search Visibility & Mentions',
    currentValue: '30 AI Visibility (111 Mentions)',
    change: 'Active Across ChatGPT, Gemini & AI Overviews',
    importanceRating: 'Critical Growth',
    explanation: 'Tracks how frequently conversational AI models (ChatGPT, Google AI Overview, Gemini, Claude) reference and cite your domain when answering user questions.',
    howWeOptimize: 'We structure site content into semantic Q&A schema blocks and establish brand mentions across high-trust index sources.',
    keywords: ['ai search visibility', 'chatgpt brand mentions', 'generative engine optimization']
  },
  {
    id: 'site-audit',
    metricName: 'Site Audit & Technical Site Health',
    currentValue: '85% Health Score (0 Critical Errors)',
    change: '2 Errors / 32 Warnings Addressed',
    importanceRating: 'Core Health',
    explanation: 'Site Audit measures technical crawler performance, broken links, Core Web Vitals speed scores, and mobile usability. A healthy site ensures Google bots crawl and index every page efficiently.',
    howWeOptimize: 'We resolve indexation blocks, implement XML sitemaps, optimize image weight, fix broken redirects, and inject JSON-LD schema.',
    keywords: ['site audit score', 'google organic health', 'technical site health']
  },
  {
    id: 'position-tracking',
    metricName: 'Position Tracking & SERP Rank',
    currentValue: 'Daily Top 100 SERP Audit',
    change: 'Real-time Rank Tracking',
    importanceRating: 'Essential',
    explanation: 'Monitors exact daily ranking positions for your core commercial target keywords across Google Desktop and Mobile search results.',
    howWeOptimize: 'We adjust on-page metadata, optimize internal linking structures, and deploy link bursts whenever competitive position changes occur.',
    keywords: ['position tracking', 'serp rank tracking', 'google page 1 rankings']
  }
];
