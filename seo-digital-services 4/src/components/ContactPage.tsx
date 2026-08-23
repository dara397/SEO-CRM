import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';
import { navLinkProps } from '../navLink';
import { BUSINESS, SERVICE_AREAS, REGION } from '../data/business';
import { SITE_ORIGIN } from '../routes';

interface ContactPageProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenReachOut: (subject?: string) => void;
}

/**
 * /contact
 *
 * This route did not exist — it returned 404 while every CTA on the site was a
 * button with no href, no crawlable contact URL, and no phone number anywhere
 * on the domain.
 *
 * The phone number is the primary action, above the fold and repeated at the
 * bottom. Contractors call; they do not fill in forms at 7pm with the AC out.
 * The form is the secondary path and reuses the existing BookingModal rather
 * than introducing a second, competing form implementation.
 */

const FAQS = [
  {
    q: 'What happens after I get in touch?',
    a: 'We run a free audit before any conversation about money: your Google Business Profile against your closest competitors, your Map Pack position across your service area, and your backlink gap. Then a short call where we tell you what we would do first and roughly what it is worth. If we do not think we can help, we say so.',
  },
  {
    q: 'How fast do you respond?',
    a: 'Calls during business hours are answered live. Form submissions and voicemails get a reply the same business day. If we cannot hit that, we have no business selling anyone lead response times.',
  },
  {
    q: 'What does it cost to start?',
    a: 'Packages are $997/month (Starter) and $1,497/month (Growth), with a $500 one-time setup fee and a 3-month minimum. The audit itself is free and carries no obligation.',
  },
  {
    q: 'Do you only work with local businesses?',
    a: `No. We lead with ${REGION} because that is where we know the competitive landscape well enough to be useful before you have paid us anything, but we take clients nationally.`,
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({ setActiveTab, onOpenReachOut }) => {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_ORIGIN}/contact`,
    name: 'Contact PGBlueprint',
    description:
      'Talk to PGBlueprint about SEO and lead generation. Call (949) 878-1316 or request a free search visibility audit.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.locality,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: `${city}, CA` })),
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const quickLinks: { tab: ActiveTab; label: string }[] = [
    { tab: 'services', label: 'All SEO services' },
    { tab: 'local-seo', label: 'Local SEO services' },
    { tab: 'lead-generation', label: 'SEO lead generation' },
    { tab: 'link-building', label: 'Link building services' },
    { tab: 'pricing', label: 'Package pricing' },
  ];

  return (
    <div className="bg-[#f5fbfe]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero — phone first */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-10 text-center">
        <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#4f97c6] bg-[#e6f3fa] border border-[#cbe3f1] rounded-full px-4 py-1.5 mb-5">
          Contact &mdash; {REGION}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-stone-900 leading-tight mb-5">
          Talk to us about your search visibility
        </h1>
        <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Free audit, no obligation, and a straight answer about whether we can help. Calling is
          fastest &mdash; we answer during business hours.
        </p>

        <div className="mt-8">
          <a
            href={BUSINESS.telephoneHref}
            className="inline-flex items-center gap-3 bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-black text-2xl sm:text-3xl px-8 py-5 rounded-2xl transition-colors shadow-sm"
          >
            <Phone className="w-6 h-6 shrink-0" />
            {BUSINESS.telephoneDisplay}
          </a>
          <p className="mt-3 text-sm text-stone-500">{BUSINESS.hours}</p>
        </div>

        <div className="mt-6">
          <button
            onClick={() => onOpenReachOut('Contact Page Inquiry')}
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Request a free audit
          </button>
        </div>
      </section>

      {/* NAP + service areas */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#cbe3f1] rounded-2xl p-6">
            <h2 className="text-lg font-black text-stone-900 mb-4">PGBlueprint</h2>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#6aaed9] mt-1 shrink-0" />
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-stone-500">Phone</div>
                  <a
                    href={BUSINESS.telephoneHref}
                    className="text-lg font-black text-[#4f97c6] hover:underline"
                  >
                    {BUSINESS.telephoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#6aaed9] mt-1 shrink-0" />
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-stone-500">Email</div>
                  <a href={`mailto:${BUSINESS.email}`} className="text-stone-700 hover:underline">
                    {BUSINESS.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#6aaed9] mt-1 shrink-0" />
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-stone-500">Based in</div>
                  <div className="text-stone-700">
                    {BUSINESS.locality}, {BUSINESS.region} {BUSINESS.postalCode}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#6aaed9] mt-1 shrink-0" />
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-stone-500">Hours</div>
                  <div className="text-stone-700">{BUSINESS.hours}</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#e6f3fa] border border-[#cbe3f1] rounded-2xl p-6">
            <h2 className="text-lg font-black text-stone-900 mb-3">Areas we serve</h2>
            <ul className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((city) => (
                <li
                  key={city}
                  className="bg-white border border-[#cbe3f1] rounded-lg px-2.5 py-1 text-xs font-semibold text-stone-700"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone-600">
              Outside the area? We still take clients nationally &mdash; tell us where you operate
              and we will say honestly whether we are the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Quick links — crawlable internal links out of the contact page */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-2xl font-black text-stone-900 mb-4">Looking for something specific?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickLinks.map((l) => (
            <a
              key={l.tab}
              {...navLinkProps(l.tab, setActiveTab)}
              className="group flex items-center justify-between gap-2 bg-white border border-[#cbe3f1] hover:border-[#6aaed9] rounded-xl px-4 py-3 text-sm font-bold text-[#4f97c6] transition-colors"
            >
              <span className="group-hover:underline">{l.label}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-black text-stone-900 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-white border border-[#cbe3f1] rounded-2xl p-6">
              <h3 className="font-bold text-stone-900 mb-2">{f.q}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1b2730] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Would rather just talk?</h2>
          <p className="text-stone-400 text-sm mb-6">
            No script, no pitch deck. Tell us what you do and where, and we will tell you what we
            would go after first.
          </p>
          <a
            href={BUSINESS.telephoneHref}
            className="inline-flex items-center gap-3 bg-[#6aaed9] hover:bg-[#4f97c6] text-white font-black text-xl px-7 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.telephoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};
