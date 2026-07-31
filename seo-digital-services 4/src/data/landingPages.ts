import { LandingPageData } from '../types';

export const LANDING_PAGES: Record<string, LandingPageData> = {
  'local-seo': {
    id: 'local-seo',
    kicker: 'Local Search Engine Optimization',
    h1: 'Local SEO Services That Put Your Business in the Google Map Pack',
    intro:
      'Our local SEO services help your business rank in the Google Map Pack and local organic results for the searches your customers actually make. Google Business Profile optimization, local citations, and review generation - managed for you every month.',
    ctaLabel: 'Get a Free Local SEO Audit',
    ctaSubject: 'Local SEO Services Inquiry',
    stats: [
      { value: '46%', label: 'of all Google searches have local intent' },
      { value: '76%', label: 'of local mobile searches lead to a business visit within 24 hours' },
      { value: 'Top 3', label: 'Map Pack positions capture the majority of local search clicks' },
    ],
    sections: [
      {
        heading: 'What Are Local SEO Services?',
        paragraphs: [
          'Local SEO is the process of optimizing your online presence so your business appears when nearby customers search for your products or services - searches like plumber near me, dentist in Irvine, or best coffee shop open now. Unlike traditional SEO, local SEO targets two result types at once: the Google Map Pack (the map with three business listings at the top of results) and localized organic listings below it.',
          'The three pillars of local ranking are relevance, distance, and prominence. We influence all three: relevance through Google Business Profile category and content optimization, and prominence through consistent local citations, genuine customer reviews, and locally relevant backlinks.',
        ],
      },
      {
        heading: 'Why Local SEO Beats Paid Local Ads',
        paragraphs: [
          'Local service ads and pay-per-click campaigns stop producing the moment you pause your budget. A Google Business Profile that ranks in the Map Pack keeps generating calls, direction requests, and website visits without a per-click cost. For most local businesses, the Map Pack is the single highest-converting placement on the internet - searchers there are ready to call or visit today.',
          'Local SEO also compounds. Every citation built, review earned, and month of consistent activity strengthens your profile against competitors who set up their listing once and forgot it.',
        ],
      },
    ],
    deliverablesHeading: 'What Our Local SEO Services Include',
    deliverables: [
      'Google Business Profile optimization and verification',
      '100-150 local directory citations (Yelp, YellowPages, Bing Places, Apple Maps)',
      'Automated review generation funnel for a steady flow of customer reviews',
      'Geo-targeted landing pages with LocalBusiness schema markup',
      'Local keyword tracking with Map Pack position monitoring',
      'Monthly reporting dashboard with calls, clicks, and direction requests',
    ],
    faqs: [
      {
        q: 'How much do local SEO services cost?',
        a: 'Our local SEO work is included in every package. The Starter plan is $997/month and covers Google Business Profile management, 100 citation submissions, and a review generation funnel. The Growth plan at $1,497/month expands citations to 150 and adds more content and backlinks. Both have a $500 one-time setup fee and a 3-month minimum.',
      },
      {
        q: 'How long does it take to rank in the Google Map Pack?',
        a: 'Most businesses see measurable movement within 60-90 days. Highly competitive markets and cities can take 6 months or longer. Timelines depend on your starting point, competition density, and review velocity - we set expectations honestly during your free audit.',
      },
      {
        q: 'Do I need a physical address to do local SEO?',
        a: 'You need either a physical storefront or a defined service area. Service-area businesses (plumbers, cleaners, mobile services) can hide their address and rank in the areas they serve. We configure this correctly during onboarding, because getting it wrong can suppress your listing.',
      },
      {
        q: 'What is the difference between local SEO and regular SEO?',
        a: 'Regular SEO targets organic rankings for any searcher regardless of location. Local SEO specifically targets the Map Pack and location-based searches, which depend heavily on your Google Business Profile, citations, and reviews. Most local businesses need both, which is why our packages combine them.',
      },
    ],
    bottomCtaHeading: 'Ready to own your local market?',
  },
  'link-building': {
    id: 'link-building',
    kicker: 'Backlink Acquisition & Digital PR',
    h1: 'Link Building Services: High-Authority Backlinks That Move Rankings',
    intro:
      'Our link building services earn white-hat, editorially placed backlinks from real websites with real traffic. No link farms, no PBNs - manual outreach that builds the domain authority competitive keywords require.',
    ctaLabel: 'Get a Free Backlink Audit',
    ctaSubject: 'Link Building Services Inquiry',
    stats: [
      { value: '3.8x', label: 'more backlinks point to the average #1 result than to positions 2-10' },
      { value: 'DR 40+', label: 'minimum domain rating for our editorial link placements' },
      { value: '100%', label: 'white-hat manual outreach - never automated or purchased from farms' },
    ],
    sections: [
      {
        heading: 'Why Backlinks Still Decide Rankings',
        paragraphs: [
          'Backlinks remain one of the strongest signals in Google ranking systems. Each editorial link from a relevant, authoritative website acts as a vote of confidence that raises your domain authority - and domain authority is usually the difference between page 3 and page 1 for competitive keywords. Content quality gets you into the race; backlinks win it.',
          'Not all links help. Links from spammy directories, link farms, and private blog networks can trigger penalties that take months to recover from. That is why every placement we build is manually vetted for domain rating, organic traffic, and topical relevance before outreach even begins.',
        ],
      },
      {
        heading: 'How Our Link Building Process Works',
        paragraphs: [
          'We start with a competitor gap analysis: which sites link to the pages outranking you, and which of those links can you realistically earn? From there we run manual blogger and publisher outreach, securing contextual placements inside relevant articles - not footer links or author bios. Anchor text is planned across your whole profile so it stays natural.',
          'You see every link. Our reporting dashboard lists each placement with its live URL, domain rating, and the page it points to, so you are never asked to take link quality on faith.',
        ],
      },
    ],
    deliverablesHeading: 'What Our Link Building Services Include',
    deliverables: [
      'Manual blogger and publisher outreach with editorial guest placements',
      'DR 40+ contextual backlinks with natural, planned anchor text',
      'Competitor backlink gap analysis and link target list',
      'Toxic backlink audit with Google Disavow file management',
      'Transparent reporting with live verification URLs for every link',
      'Anchor text distribution planning across your full link profile',
    ],
    faqs: [
      {
        q: 'How much do link building services cost?',
        a: 'Backlinks are included in every monthly package: 2 links/month on Starter ($997/mo) and 5 links/month on Growth ($1,497/mo). Additional links are $120 each as an add-on. Custom volume plans are available with competitive pricing for larger campaigns.',
      },
      {
        q: 'How many backlinks do I need to rank?',
        a: 'It depends entirely on your competition. We analyze the backlink profiles of the pages currently ranking for your target keywords and estimate the gap. For low-competition local keywords, a handful of quality links may be enough; national commercial terms can require dozens over many months.',
      },
      {
        q: 'Are your links safe from Google penalties?',
        a: 'Yes. We only place links through manual editorial outreach on real websites with verified organic traffic. We never use private blog networks, automated link software, or paid link farms - the tactics behind almost every link penalty. We also monitor your profile and disavow toxic links other sources may have created.',
      },
      {
        q: 'How long until backlinks affect my rankings?',
        a: 'Google typically takes 4-12 weeks to discover, crawl, and weigh new links. Rankings move gradually as authority accumulates - link building is a compounding investment, not an overnight switch. We track position changes weekly so you can see the trend line clearly.',
      },
    ],
    bottomCtaHeading: 'Ready to build the authority your rankings need?',
  },
  'lead-generation': {
    id: 'lead-generation',
    kicker: 'Inbound Lead Generation',
    h1: 'SEO Lead Generation Services: Turn Organic Search Into a Predictable Pipeline',
    intro:
      'Our SEO lead generation services turn your website into an inbound lead engine. We rank your pages for high-intent commercial searches, then convert that traffic into calls, form fills, and booked appointments you can track.',
    ctaLabel: 'Get a Free Lead Gen Audit',
    ctaSubject: 'SEO Lead Generation Inquiry',
    stats: [
      { value: '93%', label: 'of online experiences begin with a search engine' },
      { value: '14.6%', label: 'average close rate of inbound SEO leads, versus under 2% for cold outreach' },
      { value: '24/7', label: 'your rankings capture ready-to-buy searchers around the clock' },
    ],
    sections: [
      {
        heading: 'What Is SEO Lead Generation?',
        paragraphs: [
          'SEO lead generation is the practice of ranking your website for searches made by people actively looking to buy - queries like emergency electrician near me or best CRM for small business - and converting those visitors into leads. Unlike purchased lead lists or cold outreach, inbound leads come to you already interested, which is why they close at many times the rate of outbound prospects.',
          'The mechanics matter: ranking for high-intent commercial keywords brings the right visitors, and conversion-focused landing pages, clear calls to action, and fast page speed turn those visitors into inquiries. Most agencies do one or the other. Lead generation only works when both are engineered together.',
        ],
      },
      {
        heading: 'Why Inbound Beats Buying Leads',
        paragraphs: [
          'Purchased leads are shared with your competitors, go cold within minutes, and stop the moment you stop paying. Leads from your own rankings are exclusive to you, arrive pre-qualified by their own search intent, and keep coming month after month from the same investment. Over a year, the cost per lead from organic search typically falls far below any paid channel.',
          'Every lead is measured. We set up call tracking and form analytics so you know exactly which pages and keywords generate inquiries - no vanity traffic reports, just pipeline you can count.',
        ],
      },
    ],
    deliverablesHeading: 'What Our Lead Generation Services Include',
    deliverables: [
      'High-intent commercial keyword targeting and content strategy',
      'Conversion-optimized landing pages with clear calls to action',
      'Call tracking and form analytics tied to keywords and pages',
      'Review generation funnel to convert more visitors with social proof',
      'Google Business Profile optimization for call-ready local leads',
      'Monthly lead reporting dashboard - inquiries, calls, and sources',
    ],
    faqs: [
      {
        q: 'How much do lead generation services cost?',
        a: 'Lead generation is built into our SEO packages: Starter at $997/month and Growth at $1,497/month, each with a $500 setup fee and 3-month minimum. Unlike pay-per-lead services, every lead your rankings generate is yours exclusively at no additional per-lead cost.',
      },
      {
        q: 'How is SEO lead generation different from buying leads?',
        a: 'Purchased leads are typically sold to multiple competing businesses and decay within minutes. SEO leads found you through their own search, are exclusive to you, and convert at dramatically higher rates. SEO takes longer to start, but the cost per lead drops continuously while purchased leads stay expensive forever.',
      },
      {
        q: 'How quickly will I start getting leads?',
        a: 'It depends on your current rankings and competition. Businesses with an established site often see lead flow improve within 60-90 days as pages are optimized. Newer sites targeting competitive terms should expect 4-6 months before consistent lead volume. We report progress weekly so nothing is a black box.',
      },
      {
        q: 'How do you track the leads you generate?',
        a: 'We implement call tracking numbers, form submission analytics, and a reporting dashboard that ties every inquiry back to its source page and keyword. You see exactly how many leads organic search produced each month - not just traffic numbers.',
      },
    ],
    bottomCtaHeading: 'Ready for a pipeline that fills itself?',
  },
};
