import LocationPageTemplate from '@/components/LocationPageTemplate';

const FriscoBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Frisco"
      stateAbbr="TX"
      slug="frisco-bookkeeping"
      tagline="Top-rated bookkeeping services for Frisco's booming business community. From The Star District to Frisco Square — expert QuickBooks management and financial reporting for one of America's fastest-growing cities."
      description="Frisco is among the fastest-growing cities in the nation, with a thriving ecosystem of startups, restaurants, and professional services. ClearLedger Solutions delivers the financial clarity Frisco businesses need to scale."
      cities={[
        'Frisco',
        'Prosper',
        'Little Elm',
        'The Colony',
        'Celina',
        'Aubrey',
        'Hackberry',
        'Cross Roads'
      ]}
      industries={[
        { name: 'Sports & Entertainment', description: 'Financial management for sports venues, entertainment businesses, and event companies around The Star' },
        { name: 'Technology Startups', description: 'Fast-paced bookkeeping for Frisco\'s growing tech and SaaS ecosystem' },
        { name: 'Medical & Dental', description: 'Healthcare practice bookkeeping serving Frisco\'s expanding medical corridor' },
        { name: 'Restaurants & Food', description: 'Restaurant accounting, food cost analysis, and multi-location management' },
        { name: 'Real Estate & Construction', description: 'New development financial tracking, property management, and builder accounting' },
        { name: 'Professional Services', description: 'Law firms, consulting, insurance, and financial advisory firm bookkeeping' }
      ]}
      services={[
        'QuickBooks Online & Desktop Setup',
        'Monthly Financial Reconciliation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Texas Franchise Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Forecasting',
        'New Business Financial Setup'
      ]}
      specialCompliance={{
        title: 'Frisco Business Tax Compliance',
        items: [
          'Texas franchise tax filing',
          'Sales tax compliance',
          'New business entity setup',
          'Quarterly tax planning',
          'Year-end financial preparation',
          'Growth-stage financial reporting'
        ]
      }}
      metaDescription="Professional bookkeeping services in Frisco, TX. Certified QuickBooks ProAdvisor serving Frisco businesses with expert financial management, tax compliance, and monthly reconciliation."
      metaKeywords="Frisco bookkeeping, Frisco TX bookkeeper, bookkeeping services Frisco Texas, QuickBooks Frisco, Frisco small business bookkeeping, bookkeeper near me Frisco TX, Frisco accountant"
    />
  );
};

export default FriscoBookkeeping;
