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
  locality: 'Laguna Niguel',
  region: 'CA',
  postalCode: '92677',
  country: 'US',
  hours: 'Open 24/7',
} as const;

/**
 * Cities and communities we serve, ordered outward from Laguna Niguel.
 *
 * A service-area list is a claim, not a keyword dump: only list places you
 * would actually take a job in. Listing them here is low risk. Spinning each
 * one into its own thin city page is where it turns into a liability — do that
 * only for cities you have real content and real customers for.
 */
export const SERVICE_AREAS = [
  'Laguna Niguel',
  'Dana Point',
  'Laguna Beach',
  'San Juan Capistrano',
  'Mission Viejo',
  'Laguna Hills',
  'Aliso Viejo',
  'San Clemente',
  'Ladera Ranch',
  'Rancho Santa Margarita',
  'Lake Forest',
  'Coto de Caza',
  'Rancho Mission Viejo',
  'Trabuco Canyon',
  'Dove Canyon',
  'Irvine',
  'Newport Beach',
  'Costa Mesa',
  'Tustin',
  'Huntington Beach',
] as const;

export const REGION = 'South Orange County';
