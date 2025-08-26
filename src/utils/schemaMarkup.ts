// Schema markup templates for different page types

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClearLedger Solutions",
  "url": "https://clearledger.com",
  "logo": "https://clearledger.com/logo.png",
  "image": "https://clearledger.com/thumbnail.png",
  "description": "Professional bookkeeping services for small businesses and entrepreneurs. QuickBooks ProAdvisor certified with expertise in monthly reconciliation, accounts payable, and tax preparation.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "contact@clearledger.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/clearledger-solutions",
    "https://www.facebook.com/clearledgersolutions"
  ]
});

export const getServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "ClearLedger Solutions"
  },
  "areaServed": "United States",
  "serviceType": "Bookkeeping Service"
});

export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact ClearLedger Solutions",
  "description": "Get in touch with ClearLedger Solutions for professional bookkeeping services. Free consultation available.",
  "mainEntity": {
    "@type": "Organization",
    "name": "ClearLedger Solutions",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@clearledger.com",
      "availableLanguage": "English"
    }
  }
});

export const getAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About ClearLedger Solutions",
  "description": "Learn about ClearLedger Solutions, our team, and our commitment to providing professional bookkeeping services.",
  "mainEntity": {
    "@type": "Organization",
    "name": "ClearLedger Solutions",
    "founder": {
      "@type": "Person",
      "name": "JJ Eldredge",
      "jobTitle": "Owner - Certified ProAdvisor",
      "description": "Certified QuickBooks ProAdvisor with 10+ years of experience in bookkeeping and financial management"
    },
    "employee": [
      {
        "@type": "Person",
        "name": "JJ Eldredge",
        "jobTitle": "Owner - Certified ProAdvisor"
      },
      {
        "@type": "Person",
        "name": "Regan Eldredge",
        "jobTitle": "Office Manager & Head of Marketing"
      }
    ],
    "award": [
      "2024-2025 Top 25 Up-N-Coming ProAdvisor",
      "QuickBooks Online Advanced Certified ProAdvisor",
      "QuickBooks Desktop Certified ProAdvisor"
    ]
  }
});

export const getFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://clearledger.com${crumb.url}`
  }))
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ClearLedger Solutions",
  "description": "Professional bookkeeping services for small businesses",
  "url": "https://clearledger.com",
  "telephone": "+1-555-123-4567",
  "email": "contact@clearledger.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit Card, Bank Transfer, Check",
  "areaServed": "United States",
  "serviceType": [
    "Bookkeeping Services",
    "QuickBooks Setup and Training",
    "Monthly Reconciliation",
    "Accounts Payable Management",
    "Tax Preparation",
    "Financial Reporting"
  ]
});

export const getReviewSchema = (reviews: Array<{author: string, rating: number, review: string}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClearLedger Solutions",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": reviews.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.review
  }))
}); 