/**
 * Business identity / NAP.
 *
 * Single source of truth so the phone number can never drift between the
 * contact page, the footer and the structured data. NAP consistency is a real
 * local ranking factor: "(949) 878-1316" and "949.878.1316" are the same
 * number to a human and two different strings to a citation aggregator.
 */
export const BUSINESS = {
  name: 'PGBlueprint',
  url: 'https://www.pgblueprint.com',
  /** E.164 — the format structured data wants. */
  telephone: '+1-949-878-1316',
  /** Human-readable — the format every citation should use, verbatim. */
  telephoneDisplay: '(949) 878-1316',
  telephoneHref: 'tel:+19498781316',
  email: 'contact@pgblueprint.com',
  locality: 'Laguna Niguel',
  region: 'CA',
  postalCode: '92677',
  country: 'US',
  hours: 'Mon-Fri, 8am-6pm PT',
} as const;

/**
 * Cities we actually serve. Kept short on purpose — thin city pages for places
 * you do not serve are a liability, not an asset.
 */
export const SERVICE_AREAS = [
  'Laguna Niguel',
  'Dana Point',
  'San Juan Capistrano',
  'Mission Viejo',
  'Laguna Hills',
  'Aliso Viejo',
  'San Clemente',
  'Ladera Ranch',
  'Lake Forest',
  'Rancho Santa Margarita',
] as const;

export const REGION = 'South Orange County';
