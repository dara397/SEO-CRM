export type ActiveTab = 'preview' | 'what-is-seo' | 'services' | 'seo-tools';

export interface PackagePlan {
  id: string;
  name: string;
  price: number | string;
  setupFee: number | string;
  popular?: boolean;
  pages: string;
  websiteAudit: string;
  ongoingOptimization: boolean;
  keywordResearch: string;
  blogArticles: number | string;
  backlinks: number | string;
  localCitations: number | string;
  businessProfile: boolean;
  reviewFunnel: boolean;
  monthlyReporting: string;
  badge?: string;
  isCustomPrice?: boolean;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  selectedPlanOrAddon: string;
  message?: string;
}

export interface SeoTip {
  id: string;
  category: 'SEO Strategies' | 'SEO Tips' | 'SEO Tools' | 'Google Organic Health';
  title: string;
  summary: string;
  impact: 'Critical' | 'High' | 'Medium';
  steps: string[];
}

export interface AuditItem {
  id: string;
  title: string;
  category: string;
  status: 'passed' | 'warning' | 'info';
  score: number;
  recommendation: string;
}

export interface WhatIsSeoTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  benefits: string[];
  iconName: string;
}

export interface SeoServiceItem {
  id: string;
  title: string;
  category: string;
  searchVolume: string;
  keywordDifficulty: string;
  primaryKeywords: string[];
  summary: string;
  deliverables: string[];
  businessImpact: string;
  iconName: string;
}

export interface DashboardMetricHighlight {
  id: string;
  metricName: string;
  currentValue: string;
  change: string;
  importanceRating: 'Essential' | 'Critical Growth' | 'Core Health';
  explanation: string;
  howWeOptimize: string;
  keywords: string[];
}
