// config/roleConfigs.ts
export const roleConfigs = {
  'bar-owner': {
    title: 'Bar Owner & Management',
    subtitle: 'Ownership, management, and venue operations',
    icon: 'building-storefront',
    image: '/images/roles/Bars & Owners.jpg',
    color: 'amber',
    fields: {
      step1: ['venueName', 'ownerName', 'email', 'phone', 'venueType'],
      step2: ['yearsInBusiness', 'capacity', 'liquorLicense', 'entertainment'],
      step3: ['hiring', 'seekingDistributors', 'seekingBookings'],
      step4: ['bio', 'terms'],
    },
  },
  'musician': {
    title: 'Musician',
    subtitle: 'Performing artists and working musicians',
    icon: 'musical-note',
    image: '/images/roles/Musicians & Bands.jpg',
    color: 'rose',
    fields: {
      step1: ['artistName', 'email', 'phone', 'genre', 'city'],
      step2: ['yearsPerforming', 'bandSize', 'equipment', 'samples'],
      step3: ['seekingVenues', 'travelRadius', 'rateRange'],
      step4: ['bio', 'terms'],
    },
  },
  'distributor': {
    title: 'Distributor',
    subtitle: 'Beverage distribution and brand representation',
    icon: 'truck',
    image: '/images/roles/Distributors & Industry Partners.jpg',
    color: 'emerald',
    fields: {
      step1: ['companyName', 'contactName', 'email', 'phone', 'territory'],
      step2: ['brands', 'productTypes', 'minimumOrders'],
      step3: ['services', 'accountSupport'],
      step4: ['bio', 'terms'],
    },
  },
  'bar-worker': {
    title: 'Bar Worker',
    subtitle: 'Barback, BOH, security, and door staff',
    icon: 'wrench',
    image: '/images/roles/Bartenders & Bar Staff.jpg',
    color: 'slate',
    fields: {
      step1: ['name', 'email', 'phone', 'city', 'role'],
      step2: ['experience', 'certifications'],
      step3: ['seekingWork', 'availability', 'preferences'],
      step4: ['bio', 'terms'],
    },
  },
  'patron': {
    title: 'Patron',
    subtitle: 'Supporters and regular participants in the scene',
    icon: 'users',
    image: '/images/roles/The Community.jpg',
    color: 'sky',
    fields: {
      step1: ['name', 'email', 'city'],
      step2: ['interests', 'favoriteVenues'],
      step3: ['notifications'],
      step4: ['terms'],
    },
  },
};
