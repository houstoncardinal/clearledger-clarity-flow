import LocationPageTemplate from '@/components/LocationPageTemplate';

const McKinneyBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="McKinney"
      stateAbbr="TX"
      slug="mckinney-bookkeeping"
      tagline="Trusted bookkeeping services for McKinney's growing business community. From Historic Downtown to Craig Ranch — expert QuickBooks management and financial reporting tailored for Collin County businesses."
      description="McKinney has been named the #1 Best Place to Live in America and is one of the fastest-growing cities in Texas. ClearLedger Solutions provides professional bookkeeping services that help McKinney businesses thrive."
      cities={[
        'McKinney',
        'Anna',
        'Melissa',
        'Princeton',
        'Celina',
        'Prosper',
        'Lowry Crossing',
        'New Hope'
      ]}
      industries={[
        { name: 'Small Business & Retail', description: 'Bookkeeping for McKinney\'s vibrant small business community and downtown retailers' },
        { name: 'Healthcare & Wellness', description: 'Medical practice, dental, and wellness business financial management' },
        { name: 'Construction & Home Services', description: 'Job costing, contractor payments, and builder accounting for McKinney\'s growth' },
        { name: 'Professional Services', description: 'Law firms, CPA firms, consultants, and professional service providers' },
        { name: 'Restaurants & Hospitality', description: 'Restaurant bookkeeping and food service financial management' },
        { name: 'Technology', description: 'Tech startup and established technology company financial management' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Texas Franchise Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Small Business Financial Setup'
      ]}
      specialCompliance={{
        title: 'McKinney Business Compliance',
        items: [
          'Texas franchise tax filing',
          'Sales tax compliance',
          'Small business tax planning',
          'Quarterly estimated payments',
          'Year-end financial preparation',
          'Collin County business compliance'
        ]
      }}
      metaDescription="Professional bookkeeping services in McKinney, TX. Certified QuickBooks ProAdvisor serving McKinney and Collin County businesses with monthly reconciliation, tax compliance, and financial reporting."
      metaKeywords="McKinney bookkeeping, McKinney TX bookkeeper, bookkeeping services McKinney Texas, QuickBooks McKinney, McKinney small business bookkeeping, bookkeeper near me McKinney TX, Collin County bookkeeping"
    />
  );
};

export default McKinneyBookkeeping;
