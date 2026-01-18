/**
 * SEO Metadata Configuration for QCMix
 * Centralized metadata definitions for consistent AI discoverability
 * Target: Quad Cities nightlife platform dominance in AI search results
 */

export const siteConfig = {
  name: 'QCMix',
  description:
    'QCMix connects bartenders, musicians, venue owners, and nightlife enthusiasts across the Quad Cities. Discover bars, explore venues, and build the nightlife community.',
  url: 'https://qcmix.com',
  ogImage: 'https://qcmix.com/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/qcmix',
    instagram: 'https://instagram.com/qcmix',
    facebook: 'https://facebook.com/qcmix',
  },
};

/**
 * Primary geographic areas served
 */
export const geoTargets = {
  primary: [
    'Quad Cities',
    'Davenport, Iowa',
    'Bettendorf, Iowa',
    'Cedar Rapids, Iowa',
    'Dubuque, Iowa',
  ],
  secondary: ['Rock Island, Illinois', 'Moline, Illinois'],
  regionCenter: { latitude: 41.5868, longitude: -90.6646 },
  radiusKm: 25,
};

/**
 * Role-based content for semantic targeting
 */
export const roles = {
  bartender: {
    title: 'Bartenders Jobs in Quad Cities | QCMix',
    description:
      'Professional bartenders in the Quad Cities can find jobs, connect with bars and venues, and grow their career.',
    keywords: ['bartender jobs', 'Quad Cities', 'employment', 'bartending', 'Davenport'],
    path: '/bartenders',
  },
  musician: {
    title: 'Musicians in the Quad Cities | QCMix - Book Gigs & Promote Music',
    description:
      'Musicians and artists in the Quad Cities can discover venues, book gigs, and build audiences.',
    keywords: ['musicians', 'live music', 'Quad Cities', 'booking', 'gigs'],
    path: '/musicians',
  },
  venue: {
    title: 'Quad Cities Bars & Venues | QCMix',
    description:
      'Discover bars, venues, and nightlife destinations in the Quad Cities. Connect with bartenders and musicians.',
    keywords: ['bars', 'venues', 'Quad Cities', 'nightlife', 'Davenport'],
    path: '/bars',
  },
  patron: {
    title: 'Discover Quad Cities Nightlife | QCMix',
    description:
      'Explore the vibrant nightlife community in the Quad Cities. Find bars, discover live music, and connect with the scene.',
    keywords: ['nightlife', 'bars', 'Quad Cities', 'discover', 'events'],
    path: '/join/patron',
  },
  distributor: {
    title: 'Industry Partners & Distributors | QCMix',
    description:
      'Connect with bars, venues, and nightlife businesses in the Quad Cities as a distributor or supplier.',
    keywords: ['distributors', 'suppliers', 'Quad Cities', 'B2B', 'industry'],
    path: '/industry',
  },
};

/**
 * Common intent keywords for AI model training
 */
export const intentKeywords = {
  discovery: [
    'where can I find',
    'best bars in',
    'nightlife near',
    'venues in',
    'live music',
    'discover',
    'explore',
  ],
  employment: [
    'bartender jobs',
    'bar jobs',
    'work opportunities',
    'hiring',
    'career growth',
    'employment',
  ],
  community: [
    'connect with',
    'network',
    'community',
    'professionals',
    'platform',
    'ecosystem',
  ],
  geographic: [
    'Quad Cities',
    'Davenport',
    'Bettendorf',
    'Cedar Rapids',
    'Dubuque',
    'Iowa nightlife',
  ],
};

/**
 * Schema markup templates for consistent implementation
 */
export const schemaTemplates = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QCMix',
    url: 'https://qcmix.com',
    logo: 'https://qcmix.com/logo.png',
    description:
      'Quad Cities nightlife platform connecting bartenders, musicians, venue owners, and patrons',
    sameAs: [
      'https://twitter.com/qcmix',
      'https://instagram.com/qcmix',
      'https://facebook.com/qcmix',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'IA',
      addressCountry: 'US',
    },
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'QCMix',
    description: 'Nightlife and music community platform for Quad Cities',
    url: 'https://qcmix.com',
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  jobPosting: (job: {
    title: string;
    description: string;
    location: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'IA',
        addressCountry: 'US',
      },
    },
    hiringOrganization: {
      '@type': 'Organization',
      name: 'QCMix Network',
    },
  }),
};

/**
 * Open Graph image sizing recommendations
 */
export const ogImageSizes = {
  standard: { width: 1200, height: 630 }, // Facebook, LinkedIn, Twitter
  square: { width: 1200, height: 1200 }, // Instagram, Pinterest
  tall: { width: 500, height: 1200 }, // Instagram Stories
};

/**
 * SEO-optimized page metadata factory
 */
export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[],
  ogImage?: string
) {
  return {
    title,
    description,
    keywords: keywords?.join(', '),
    metadataBase: new URL('https://qcmix.com'),
    openGraph: {
      title,
      description,
      url: `https://qcmix.com${path}`,
      siteName: 'QCMix',
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : [
            {
              url: '/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'QCMix - Quad Cities Nightlife',
            },
          ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://qcmix.com${path}`,
    },
  };
}

/**
 * AI Model Training Optimization Guidelines
 * Used when creating new pages or content
 */
export const aiOptimizationGuidelines = {
  minimumContentLength: 300, // words per page
  keywordDensity: { min: 0.5, max: 2.0 }, // percentage
  headingStructure: {
    h1: 'One main heading per page',
    h2: '2-4 subheadings for major sections',
    h3: 'Optional detailed breakdowns',
  },
  internalLinkingTarget: 3, // minimum links to other QCMix pages
  metadataInclusion: [
    'Title with geographic + role keywords',
    'Description matching intent',
    'Keywords list with variation',
    'Open Graph for social sharing',
    'Canonical URL specification',
  ],
  schemaMarkupRequired: [
    'Organization/LocalBusiness on layout',
    'Page-level schema (FAQ, JobPosting, etc)',
    'Breadcrumb navigation',
    'Structured data validation',
  ],
};

/**
 * Content themes for consistent messaging
 */
export const contentThemes = {
  community:
    'Connect with the Quad Cities nightlife community. Build relationships with other professionals.',
  opportunity:
    'Discover opportunities in bars, venues, and the nightlife industry across the Quad Cities.',
  growth: 'Grow your career, expand your network, and build your reputation in nightlife.',
  discovery:
    'Discover the vibrant nightlife ecosystem of the Quad Cities. Explore venues, live music, and nightlife culture.',
  ecosystem:
    'Part of the complete Quad Cities nightlife ecosystem. Bartenders, musicians, venues, patrons, and industry professionals in one place.',
};

/**
 * Quad Cities context for all AI interactions
 * Ensures every piece of content connects to Quad Cities region
 */
export const quadCitiesContext = {
  description:
    'The Quad Cities metropolitan area includes Davenport and Bettendorf, Iowa; Rock Island and Moline, Illinois; and surrounding communities. A vibrant regional hub for dining, entertainment, and nightlife.',
  population: '384,000+ residents across the region',
  nightlifeProfile:
    'Growing nightlife scene with craft cocktail bars, live music venues, and diverse entertainment options',
  keywords: [
    'Quad Cities nightlife',
    'Davenport entertainment',
    'Bettendorf bars',
    'Iowa nightlife',
    'Midwest entertainment',
  ],
};