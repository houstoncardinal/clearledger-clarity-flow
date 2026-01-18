// Advanced Schema Markup for Enterprise SEO
// Complete structured data implementation for ClearLedger Solutions

// =============================================================================
// COMPANY INFORMATION - NAP (Name, Address, Phone) + Core Business Data
// =============================================================================
export const COMPANY_INFO = {
  name: "ClearLedger Solutions LLC",
  legalName: "ClearLedger Solutions LLC",
  alternateName: "ClearLedger",
  url: "https://yourclearledger.com",
  logo: "https://yourclearledger.com/logo.png",
  image: "https://yourclearledger.com/thumbnail.png",
  phone: "+1-903-815-9488",
  phoneLocal: "(903) 815-9488",
  email: "admin@yourclearledger.com",
  address: {
    streetAddress: "Whitewright",
    city: "Whitewright",
    state: "Texas",
    stateAbbr: "TX",
    postalCode: "75491",
    country: "US",
    countryName: "United States"
  },
  geo: {
    latitude: "33.4318",
    longitude: "-96.3953"
  },
  socialProfiles: [
    "https://www.linkedin.com/company/yourclearledger",
    "https://www.facebook.com/yourclearledger"
  ],
  foundingDate: "2014",
  foundingYear: 2014,
  priceRange: "$$",
  slogan: "Where Clarity Meets Compliance",
  description: "ClearLedger Solutions LLC provides expert bookkeeping services, QuickBooks training, and financial consulting for small businesses across the United States. Certified QuickBooks ProAdvisor with 10+ years experience.",
  openingHours: {
    weekdays: { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "16:30" },
    friday: { days: ["Friday"], opens: "07:30", closes: "13:00" }
  },
  founder: {
    name: "JJ Eldredge",
    jobTitle: "Owner & Certified QuickBooks ProAdvisor",
    description: "Certified QuickBooks ProAdvisor with over 10 years of experience in bookkeeping and financial management"
  },
  team: [
    { name: "JJ Eldredge", jobTitle: "Owner - Certified ProAdvisor" },
    { name: "Regan Eldredge", jobTitle: "Office Manager & Head of Marketing" }
  ],
  credentials: [
    "QuickBooks Online Advanced Certified ProAdvisor",
    "QuickBooks Desktop Certified ProAdvisor",
    "QuickBooks Desktop Enterprise Certified"
  ],
  awards: [
    "2024-2025 Top 25 Up-N-Coming ProAdvisor",
    "QuickBooks Online Advanced Certified ProAdvisor",
    "QuickBooks Desktop Certified ProAdvisor"
  ],
  languages: ["English", "Spanish", "Portuguese"],
  paymentAccepted: ["Credit Card", "Bank Transfer", "Check", "ACH"],
  currenciesAccepted: "USD"
};

// =============================================================================
// SERVICE CATALOG - All services offered by ClearLedger
// =============================================================================
export const SERVICE_CATALOG = {
  quickbooks: {
    name: "QuickBooks Bookkeeping Services",
    description: "Professional QuickBooks Online and Desktop bookkeeping services including transaction categorization, account reconciliation, and financial statement preparation.",
    url: "/quickbooks-services",
    category: "Bookkeeping",
    price: "Starting at $299/month"
  },
  monthlyManagement: {
    name: "Monthly Management & Reconciliation",
    description: "Comprehensive monthly bookkeeping and reconciliation services including bank reconciliation, financial reporting, and variance analysis.",
    url: "/monthly-management",
    category: "Bookkeeping",
    price: "Starting at $399/month"
  },
  billingAP: {
    name: "Billing & Accounts Payable",
    description: "Professional billing and accounts payable management services including invoice processing, payment tracking, and vendor management.",
    url: "/billing-accounts-payable",
    category: "Bookkeeping"
  },
  cleanupAdvisory: {
    name: "Cleanup & Advisory Services",
    description: "Professional financial cleanup and advisory services including historical data cleanup, process optimization, and strategic consulting.",
    url: "/cleanup-advisory",
    category: "Advisory"
  },
  checkOrdering: {
    name: "Business Check Ordering",
    description: "Secure business check ordering service with tamper-proof features, custom designs, and quick delivery for QuickBooks compatible checks.",
    url: "/check-ordering",
    category: "Business Supplies"
  }
};

// =============================================================================
// WEBSITE SCHEMA - Site-level structured data
// =============================================================================
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${COMPANY_INFO.url}/#website`,
  "url": COMPANY_INFO.url,
  "name": COMPANY_INFO.name,
  "description": "Professional bookkeeping and QuickBooks services for small businesses",
  "publisher": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${COMPANY_INFO.url}/blog?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["en-US", "es", "pt"]
});

// =============================================================================
// ORGANIZATION SCHEMA - Complete business entity data
// =============================================================================
export const getEnhancedOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${COMPANY_INFO.url}/#organization`,
  "name": COMPANY_INFO.name,
  "legalName": COMPANY_INFO.legalName,
  "alternateName": COMPANY_INFO.alternateName,
  "url": COMPANY_INFO.url,
  "logo": {
    "@type": "ImageObject",
    "@id": `${COMPANY_INFO.url}/#logo`,
    "url": COMPANY_INFO.logo,
    "contentUrl": COMPANY_INFO.logo,
    "width": 512,
    "height": 512,
    "caption": "ClearLedger Solutions Logo"
  },
  "image": {
    "@type": "ImageObject",
    "url": COMPANY_INFO.image,
    "width": 1200,
    "height": 630
  },
  "description": COMPANY_INFO.description,
  "slogan": COMPANY_INFO.slogan,
  "foundingDate": COMPANY_INFO.foundingDate,
  "founder": {
    "@type": "Person",
    "@id": `${COMPANY_INFO.url}/#founder`,
    "name": COMPANY_INFO.founder.name,
    "jobTitle": COMPANY_INFO.founder.jobTitle,
    "description": COMPANY_INFO.founder.description,
    "worksFor": {
      "@id": `${COMPANY_INFO.url}/#organization`
    }
  },
  "employee": COMPANY_INFO.team.map(member => ({
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.jobTitle
  })),
  "address": {
    "@type": "PostalAddress",
    "streetAddress": COMPANY_INFO.address.streetAddress,
    "addressLocality": COMPANY_INFO.address.city,
    "addressRegion": COMPANY_INFO.address.stateAbbr,
    "postalCode": COMPANY_INFO.address.postalCode,
    "addressCountry": COMPANY_INFO.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": COMPANY_INFO.geo.latitude,
    "longitude": COMPANY_INFO.geo.longitude
  },
  "telephone": COMPANY_INFO.phone,
  "email": COMPANY_INFO.email,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "customer service",
      "email": COMPANY_INFO.email,
      "availableLanguage": COMPANY_INFO.languages,
      "hoursAvailable": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": COMPANY_INFO.openingHours.weekdays.days,
          "opens": COMPANY_INFO.openingHours.weekdays.opens,
          "closes": COMPANY_INFO.openingHours.weekdays.closes
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": COMPANY_INFO.openingHours.friday.days,
          "opens": COMPANY_INFO.openingHours.friday.opens,
          "closes": COMPANY_INFO.openingHours.friday.closes
        }
      ]
    },
    {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "sales",
      "email": COMPANY_INFO.email,
      "availableLanguage": COMPANY_INFO.languages
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": COMPANY_INFO.openingHours.weekdays.days,
      "opens": COMPANY_INFO.openingHours.weekdays.opens,
      "closes": COMPANY_INFO.openingHours.weekdays.closes
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": COMPANY_INFO.openingHours.friday.days,
      "opens": COMPANY_INFO.openingHours.friday.opens,
      "closes": COMPANY_INFO.openingHours.friday.closes
    }
  ],
  "sameAs": COMPANY_INFO.socialProfiles,
  "priceRange": COMPANY_INFO.priceRange,
  "currenciesAccepted": COMPANY_INFO.currenciesAccepted,
  "paymentAccepted": COMPANY_INFO.paymentAccepted,
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Panama" },
    { "@type": "State", "name": "Texas" },
    { "@type": "State", "name": "Florida" },
    { "@type": "State", "name": "Louisiana" },
    { "@type": "State", "name": "Mississippi" },
    { "@type": "State", "name": "Oklahoma" },
    { "@type": "State", "name": "New Mexico" }
  ],
  "hasCredential": COMPANY_INFO.credentials.map(cred => ({
    "@type": "EducationalOccupationalCredential",
    "name": cred,
    "credentialCategory": "Professional Certification"
  })),
  "award": COMPANY_INFO.awards,
  "knowsAbout": [
    "Bookkeeping",
    "QuickBooks Online",
    "QuickBooks Desktop",
    "QuickBooks Enterprise",
    "Accounts Payable",
    "Accounts Receivable",
    "Financial Reporting",
    "Tax Preparation",
    "Bank Reconciliation",
    "Payroll Processing",
    "Cash Flow Management",
    "Financial Analysis",
    "Small Business Accounting"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ClearLedger Bookkeeping Services",
    "itemListElement": Object.values(SERVICE_CATALOG).map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": `${COMPANY_INFO.url}${service.url}`
      }
    }))
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
});

// =============================================================================
// LOCAL BUSINESS SCHEMA - For location pages
// =============================================================================
export const getLocalBusinessSchema = (location?: {
  name?: string;
  city?: string;
  state?: string;
  stateAbbr?: string;
  url?: string;
}) => {
  const locationName = location?.name || COMPANY_INFO.name;
  const locationCity = location?.city || COMPANY_INFO.address.city;
  const locationState = location?.state || COMPANY_INFO.address.state;
  const locationStateAbbr = location?.stateAbbr || COMPANY_INFO.address.stateAbbr;
  const locationUrl = location?.url ? `${COMPANY_INFO.url}${location.url}` : COMPANY_INFO.url;

  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${locationUrl}/#localbusiness`,
    "name": location ? `${COMPANY_INFO.name} - ${locationCity}, ${locationStateAbbr}` : COMPANY_INFO.name,
    "description": location 
      ? `Professional bookkeeping and QuickBooks services in ${locationCity}, ${locationState}`
      : COMPANY_INFO.description,
    "url": locationUrl,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "image": COMPANY_INFO.logo,
    "logo": COMPANY_INFO.logo,
    "priceRange": COMPANY_INFO.priceRange,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationCity,
      "addressRegion": locationStateAbbr,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": COMPANY_INFO.geo.latitude,
      "longitude": COMPANY_INFO.geo.longitude
    },
    "areaServed": location ? {
      "@type": "State",
      "name": locationState
    } : {
      "@type": "Country",
      "name": "United States"
    },
    "parentOrganization": {
      "@id": `${COMPANY_INFO.url}/#organization`
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": COMPANY_INFO.openingHours.weekdays.days,
        "opens": COMPANY_INFO.openingHours.weekdays.opens,
        "closes": COMPANY_INFO.openingHours.weekdays.closes
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": COMPANY_INFO.openingHours.friday.days,
        "opens": COMPANY_INFO.openingHours.friday.opens,
        "closes": COMPANY_INFO.openingHours.friday.closes
      }
    ],
    "sameAs": COMPANY_INFO.socialProfiles
  };
};

// =============================================================================
// SERVICE SCHEMA - For individual service pages
// =============================================================================
export const getProfessionalServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  duration?: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${COMPANY_INFO.url}${service.url}/#service`,
  "name": service.name,
  "description": service.description,
  "url": `${COMPANY_INFO.url}${service.url}`,
  "provider": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": service.category || "Bookkeeping Service",
  "category": "Financial Services",
  ...(service.price && {
    "offers": {
      "@type": "Offer",
      "price": service.price.replace(/[^0-9.]/g, ''),
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": service.price.replace(/[^0-9.]/g, ''),
        "priceCurrency": "USD",
        "unitText": "monthly"
      },
      "availability": "https://schema.org/InStock"
    }
  }),
  "termsOfService": `${COMPANY_INFO.url}/terms-of-service`,
  "providerMobility": "static"
});

// =============================================================================
// BREADCRUMB SCHEMA
// =============================================================================
export const getEnhancedBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": COMPANY_INFO.url
    },
    ...breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": crumb.name,
      "item": `${COMPANY_INFO.url}${crumb.url}`
    }))
  ]
});

// =============================================================================
// FAQ SCHEMA
// =============================================================================
export const getEnhancedFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${COMPANY_INFO.url}/#faq`,
  "mainEntity": faqs.map((faq, index) => ({
    "@type": "Question",
    "@id": `${COMPANY_INFO.url}/#faq-${index + 1}`,
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// =============================================================================
// BLOG SCHEMA
// =============================================================================
export const getBlogSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${COMPANY_INFO.url}/blog/#blog`,
  "name": "ClearLedger Solutions Blog",
  "description": "Expert insights, tips, and strategies for small business bookkeeping, QuickBooks optimization, and financial management",
  "url": `${COMPANY_INFO.url}/blog`,
  "publisher": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "inLanguage": "en-US",
  "mainEntityOfPage": `${COMPANY_INFO.url}/blog`
});

// =============================================================================
// BLOG POST SCHEMA
// =============================================================================
export const getBlogPostSchema = (post: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  category?: string;
  tags?: string[];
  wordCount?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${COMPANY_INFO.url}${post.url}/#article`,
  "headline": post.title,
  "description": post.description,
  "url": `${COMPANY_INFO.url}${post.url}`,
  "image": {
    "@type": "ImageObject",
    "url": post.image || COMPANY_INFO.image,
    "width": 1200,
    "height": 630
  },
  "datePublished": post.datePublished,
  "dateModified": post.dateModified || post.datePublished,
  "author": {
    "@type": "Person",
    "name": post.author || COMPANY_INFO.founder.name,
    "url": `${COMPANY_INFO.url}/about`
  },
  "publisher": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${COMPANY_INFO.url}${post.url}`
  },
  "articleSection": post.category || "Bookkeeping",
  "keywords": post.tags?.join(", ") || "",
  "wordCount": post.wordCount || 1000,
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "Blog",
    "@id": `${COMPANY_INFO.url}/blog/#blog`
  }
});

// =============================================================================
// REVIEW SCHEMA
// =============================================================================
export const getEnhancedReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  review: string;
  datePublished?: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${COMPANY_INFO.url}/#reviews`,
  "name": COMPANY_INFO.name,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": reviews.length > 0 
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : "4.9",
    "reviewCount": reviews.length.toString() || "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map((review, index) => ({
    "@type": "Review",
    "@id": `${COMPANY_INFO.url}/#review-${index + 1}`,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.review,
    "datePublished": review.datePublished || new Date().toISOString().split('T')[0],
    "itemReviewed": {
      "@id": `${COMPANY_INFO.url}/#organization`
    }
  }))
});

// =============================================================================
// CONTACT PAGE SCHEMA
// =============================================================================
export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${COMPANY_INFO.url}/contact/#contactpage`,
  "name": "Contact ClearLedger Solutions",
  "description": "Get in touch with ClearLedger Solutions for professional bookkeeping services. Free consultation available.",
  "url": `${COMPANY_INFO.url}/contact`,
  "mainEntity": {
    "@id": `${COMPANY_INFO.url}/#organization`
  }
});

// =============================================================================
// ABOUT PAGE SCHEMA
// =============================================================================
export const getAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${COMPANY_INFO.url}/about/#aboutpage`,
  "name": "About ClearLedger Solutions",
  "description": "Learn about ClearLedger Solutions, our team, and our commitment to providing professional bookkeeping services.",
  "url": `${COMPANY_INFO.url}/about`,
  "mainEntity": {
    "@id": `${COMPANY_INFO.url}/#organization`
  }
});

// =============================================================================
// HOW-TO SCHEMA
// =============================================================================
export const getHowToSchema = (howTo: {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string; image?: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": howTo.name,
  "description": howTo.description,
  ...(howTo.image && { "image": howTo.image }),
  ...(howTo.totalTime && { "totalTime": howTo.totalTime }),
  "step": howTo.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    ...(step.image && { "image": step.image })
  }))
});

// =============================================================================
// PRODUCT SCHEMA - For check ordering
// =============================================================================
export const getProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: string;
  sku?: string;
  availability?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image,
  "sku": product.sku,
  "brand": {
    "@type": "Brand",
    "name": COMPANY_INFO.name
  },
  "offers": {
    "@type": "Offer",
    "price": product.price.replace(/[^0-9.]/g, ''),
    "priceCurrency": "USD",
    "availability": product.availability || "https://schema.org/InStock",
    "seller": {
      "@id": `${COMPANY_INFO.url}/#organization`
    }
  }
});

// =============================================================================
// WEBPAGE SCHEMA - Generic page schema
// =============================================================================
export const getWebPageSchema = (page: {
  name: string;
  description: string;
  url: string;
  type?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": page.type || "WebPage",
  "@id": `${COMPANY_INFO.url}${page.url}/#webpage`,
  "name": page.name,
  "description": page.description,
  "url": `${COMPANY_INFO.url}${page.url}`,
  "isPartOf": {
    "@id": `${COMPANY_INFO.url}/#website`
  },
  "about": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "inLanguage": "en-US"
});

// =============================================================================
// COMBINED SCHEMA HELPER - Creates proper JSON-LD array
// =============================================================================
export const combineSchemas = (...schemas: object[]) => {
  return schemas.filter(Boolean);
};

// =============================================================================
// HOME PAGE SCHEMA - Complete schema for homepage
// =============================================================================
export const getHomePageSchema = () => combineSchemas(
  getWebsiteSchema(),
  getEnhancedOrganizationSchema(),
  getLocalBusinessSchema(),
  getWebPageSchema({
    name: "ClearLedger Solutions - Professional Bookkeeping Services",
    description: COMPANY_INFO.description,
    url: "/"
  })
);

// =============================================================================
// SERVICES PAGE SCHEMA
// =============================================================================
export const getServicesPageSchema = () => combineSchemas(
  getWebPageSchema({
    name: "Bookkeeping Services - ClearLedger Solutions",
    description: "Comprehensive bookkeeping services including QuickBooks setup, monthly reconciliation, accounts payable management, and tax preparation.",
    url: "/services"
  }),
  getEnhancedBreadcrumbSchema([{ name: "Services", url: "/services" }]),
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ClearLedger Bookkeeping Services",
    "description": "Complete list of professional bookkeeping services offered by ClearLedger Solutions",
    "itemListElement": Object.values(SERVICE_CATALOG).map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": `${COMPANY_INFO.url}${service.url}`,
        "provider": {
          "@id": `${COMPANY_INFO.url}/#organization`
        }
      }
    }))
  }
);
