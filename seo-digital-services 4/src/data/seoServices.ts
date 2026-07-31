import { SeoServiceItem, DashboardMetricHighlight } from '../types';

export const TOP_VOLUME_KEYWORDS = [
  { keyword: 'seo services', volume: '49,500/mo', intent: 'Commercial' },
  { keyword: 'lead generation services', volume: '33,100/mo', intent: 'Commercial' },
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
    title: 'Full-Service SEO & Lead Generation',
    category: 'Core Service',
    searchVolume: '49,500/mo',
    keywordDifficulty: 'Medium-High',
    primaryKeywords: ['seo services', 'managed seo services', 'lead generation services'],
    summary: 'SEO and lead capture managed end to end - keyword strategy, content, backlinks, and lead tracking under one monthly plan.',
    deliverables: [
      'Dedicated campaign strategist',
      'Keyword strategy, content, and monthly backlinks',
      'Weekly rank tracking and lead reporting'
    ],
    businessImpact: 'A predictable inbound pipeline from one monthly plan.',
    iconName: 'Globe'
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation & Conversion Tracking',
    category: 'Lead Gen',
    searchVolume: '33,100/mo',
    keywordDifficulty: 'Medium',
    primaryKeywords: ['lead generation services', 'seo lead generation', 'inbound leads'],
    summary: 'Conversion-focused landing pages plus call and form tracking, so every lead is counted and yours alone.',
    deliverables: [
      'Landing pages built to convert visitors',
      'Call tracking and form analytics',
      'Monthly lead report - calls, inquiries, sources'
    ],
    businessImpact: 'Exclusive, trackable leads - no per-lead cost.',
    iconName: 'TrendingUp'
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Business Profile',
    category: 'Local Search',
    searchVolume: '27,100/mo',
    keywordDifficulty: 'Low-Medium',
    primaryKeywords: ['local seo services', 'google business profile optimization', 'local map pack'],
    summary: 'Compete for the Google Map Pack where nearby customers are ready to call.',
    deliverables: [
      'Google Business Profile optimization',
      '100-150 local directory citations',
      'Automated review generation funnel'
    ],
    businessImpact: 'Puts you in front of local buyers searching right now.',
    iconName: 'MapPin'
  },
  {
    id: 'technical-seo',
    title: 'Technical SEO & Site Speed',
    category: 'Technical',
    searchVolume: '12,100/mo',
    keywordDifficulty: 'High',
    primaryKeywords: ['technical seo audit', 'core web vitals', 'site speed optimization'],
    summary: 'We fix the technical issues that keep Google from crawling, indexing, and ranking your site.',
    deliverables: [
      '100-point technical site audit',
      'Core Web Vitals speed optimization',
      'Schema markup and indexing fixes'
    ],
    businessImpact: 'A healthy, fast site eligible for top rankings.',
    iconName: 'Cpu'
  },
  {
    id: 'link-building',
    title: 'High-Authority Link Building',
    category: 'Authority',
    searchVolume: '22,200/mo',
    keywordDifficulty: 'High',
    primaryKeywords: ['link building services', 'backlink acquisition', 'domain authority'],
    summary: 'White-hat editorial backlinks from real websites that raise your domain authority.',
    deliverables: [
      'Manual outreach and editorial placements',
      'DR 40+ contextual backlinks',
      'Transparent reporting with live link URLs'
    ],
    businessImpact: 'Builds the authority competitive rankings are based on.',
    iconName: 'Link'
  },
  {
    id: 'ecommerce-seo',
    title: 'Ecommerce SEO',
    category: 'E-Commerce',
    searchVolume: '14,800/mo',
    keywordDifficulty: 'High',
    primaryKeywords: ['ecommerce seo services', 'shopify seo', 'product schema'],
    summary: 'Send ready-to-buy shoppers to your product pages on Shopify, WooCommerce, or custom stores.',
    deliverables: [
      'Category and product page optimization',
      'Rich product schema for Google results',
      'Site structure and duplicate content fixes'
    ],
    businessImpact: 'Organic shopping traffic without per-click ad costs.',
    iconName: 'ShoppingCart'
  },
  {
    id: 'ai-seo',
    title: 'AI Search Visibility (GEO)',
    category: 'Next-Gen SEO',
    searchVolume: '8,400/mo',
    keywordDifficulty: 'Emerging',
    primaryKeywords: ['ai search visibility', 'chatgpt ranking', 'ai overviews'],
    summary: 'Get your brand cited in ChatGPT, Gemini, and Google AI Overviews as search goes conversational.',
    deliverables: [
      'AI visibility and brand mention tracking',
      'Q&A content structured for AI citation',
      'Entity and knowledge graph optimization'
    ],
    businessImpact: 'Positions your brand to be cited in AI-driven answers.',
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
    howWeOptimize: 'We expand keyword coverage with targeted commercial blog articles, optimize title tags for high CTR, and push primary category pages up the rankings.',
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
