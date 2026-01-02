// Advanced Schema Markup for Enterprise SEO

const COMPANY_INFO = {
  name: "ClearLedger Solutions LLC",
  url: "https://yourclearledger.com",
  logo: "https://yourclearledger.com/logo.png",
  phone: "+1-903-815-9488",
  email: "admin@yourclearledger.com",
  address: {
    city: "Whitewright",
    state: "TX",
    country: "US"
  },
  socialProfiles: [
    "https://www.linkedin.com/company/yourclearledger",
    "https://www.facebook.com/yourclearledger"
  ],
  foundingDate: "2020",
  priceRange: "$$"
};

// Website Schema - Sitelinks Search Box
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

// Enhanced Organization Schema
export const getEnhancedOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${COMPANY_INFO.url}/#organization`,
  "name": COMPANY_INFO.name,
  "alternateName": "ClearLedger",
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
    "url": `${COMPANY_INFO.url}/thumbnail.png`,
    "width": 1200,
    "height": 630
  },
  "description": "ClearLedger Solutions LLC provides expert bookkeeping services, QuickBooks training, and financial consulting for small businesses across the United States. Certified QuickBooks ProAdvisor with 10+ years experience.",
  "foundingDate": COMPANY_INFO.foundingDate,
  "founder": {
    "@type": "Person",
    "@id": `${COMPANY_INFO.url}/#founder`,
    "name": "JJ Eldredge",
    "jobTitle": "Owner & Certified QuickBooks ProAdvisor",
    "description": "Certified QuickBooks ProAdvisor with over 10 years of experience in bookkeeping and financial management",
    "image": `${COMPANY_INFO.url}/team/jj-eldredge.jpg`,
    "sameAs": [
      "https://www.linkedin.com/company/yourclearledger"
    ]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": COMPANY_INFO.address.city,
    "addressRegion": COMPANY_INFO.address.state,
    "addressCountry": COMPANY_INFO.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.4318",
    "longitude": "-96.3953"
  },
  "telephone": COMPANY_INFO.phone,
  "email": COMPANY_INFO.email,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "customer service",
      "email": COMPANY_INFO.email,
      "availableLanguage": ["English", "Spanish", "Portuguese"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "07:30",
        "closes": "16:30"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "customer service",
      "email": COMPANY_INFO.email,
      "availableLanguage": ["English", "Spanish", "Portuguese"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:30",
        "closes": "13:00"
      }
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "07:30",
      "closes": "16:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "07:30",
      "closes": "13:00"
    }
  ],
  "sameAs": COMPANY_INFO.socialProfiles,
  "priceRange": COMPANY_INFO.priceRange,
  "currenciesAccepted": "USD",
  "paymentAccepted": ["Credit Card", "Bank Transfer", "Check", "ACH"],
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country", 
      "name": "Panama"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "QuickBooks Online Advanced Certified ProAdvisor",
      "credentialCategory": "Professional Certification"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "QuickBooks Desktop Certified ProAdvisor",
      "credentialCategory": "Professional Certification"
    }
  ],
  "award": [
    "2024-2025 Top 25 Up-N-Coming ProAdvisor",
    "QuickBooks Online Advanced Certified ProAdvisor",
    "QuickBooks Desktop Certified ProAdvisor"
  ],
  "knowsAbout": [
    "Bookkeeping",
    "QuickBooks Online",
    "QuickBooks Desktop",
    "Accounts Payable",
    "Accounts Receivable",
    "Financial Reporting",
    "Tax Preparation",
    "Bank Reconciliation",
    "Payroll Processing"
  ],
  "slogan": "Accurate, reliable, and transparent bookkeeping services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
});

// Professional Service Schema (for service pages)
export const getProfessionalServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  duration?: string;
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
  "serviceType": "Bookkeeping Service",
  "category": "Financial Services",
  ...(service.price && {
    "offers": {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }),
  ...(service.duration && {
    "providerMobility": service.duration
  }),
  "termsOfService": `${COMPANY_INFO.url}/terms-of-service`,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bookkeeping Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Monthly Bookkeeping",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bank Reconciliation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Financial Reporting"
            }
          }
        ]
      }
    ]
  }
});

// Blog Article Schema
export const getBlogPostSchema = (post: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  category: string;
  tags: string[];
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
    "url": post.image,
    "width": 1200,
    "height": 630
  },
  "datePublished": post.datePublished,
  "dateModified": post.dateModified,
  "author": {
    "@type": "Person",
    "name": post.author,
    "url": `${COMPANY_INFO.url}/about`
  },
  "publisher": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${COMPANY_INFO.url}${post.url}`
  },
  "articleSection": post.category,
  "keywords": post.tags.join(", "),
  "wordCount": post.wordCount || 1000,
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "Blog",
    "@id": `${COMPANY_INFO.url}/blog/#blog`,
    "name": "ClearLedger Solutions Blog",
    "description": "Expert insights on bookkeeping, QuickBooks, and small business finance"
  }
});

// Blog List Schema
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

// Enhanced Breadcrumb Schema
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

// Enhanced FAQ Schema with rich content
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

// How-To Schema for tutorial content
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

// Local Business Schema for location pages
export const getLocalBusinessSchema = (location: {
  name: string;
  city: string;
  state: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${COMPANY_INFO.url}${location.url}/#localbusiness`,
  "name": `${COMPANY_INFO.name} - ${location.city}, ${location.state}`,
  "description": `Professional bookkeeping and QuickBooks services in ${location.city}, ${location.state}`,
  "url": `${COMPANY_INFO.url}${location.url}`,
  "telephone": COMPANY_INFO.phone,
  "email": COMPANY_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": location.city,
    "addressRegion": location.state,
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": location.state
  },
  "parentOrganization": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "priceRange": COMPANY_INFO.priceRange,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "07:30",
      "closes": "16:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "07:30",
      "closes": "13:00"
    }
  ]
});

// Review Schema with multiple reviews
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
    "ratingValue": (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
    "reviewCount": reviews.length.toString(),
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
    "datePublished": review.datePublished || new Date().toISOString().split('T')[0]
  }))
});

// Video Schema for embedded videos
export const getVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl?: string;
  embedUrl?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "duration": video.duration,
  ...(video.contentUrl && { "contentUrl": video.contentUrl }),
  ...(video.embedUrl && { "embedUrl": video.embedUrl })
});

// Event Schema for webinars/consultations
export const getEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  isOnline: boolean;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BusinessEvent",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  ...(event.endDate && { "endDate": event.endDate }),
  "eventAttendanceMode": event.isOnline 
    ? "https://schema.org/OnlineEventAttendanceMode"
    : "https://schema.org/OfflineEventAttendanceMode",
  "location": event.isOnline ? {
    "@type": "VirtualLocation",
    "url": event.url
  } : {
    "@type": "Place",
    "name": event.location || "ClearLedger Solutions Office"
  },
  "organizer": {
    "@id": `${COMPANY_INFO.url}/#organization`
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": event.url
  }
});

// Combined schema for home page
export const getHomePageSchema = () => [
  getWebsiteSchema(),
  getEnhancedOrganizationSchema()
];

// Export company info for reuse
export { COMPANY_INFO };
