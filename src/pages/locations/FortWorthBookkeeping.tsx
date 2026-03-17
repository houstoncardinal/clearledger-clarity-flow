import LocationPageTemplate from '@/components/LocationPageTemplate';

const FortWorthBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Fort Worth"
      stateAbbr="TX"
      slug="fort-worth-bookkeeping"
      tagline="Expert bookkeeping services for Fort Worth businesses. From the Stockyards to Sundance Square — comprehensive QuickBooks management, tax compliance, and financial reporting for Tarrant County's thriving economy."
      description="Fort Worth is the 13th largest city in the United States and a powerhouse of business activity. ClearLedger Solutions delivers premium bookkeeping services tailored to Fort Worth's unique blend of traditional and emerging industries."
      cities={[
        'Fort Worth',
        'Arlington',
        'Keller',
        'Southlake',
        'Colleyville',
        'Grapevine',
        'Hurst',
        'Bedford',
        'North Richland Hills',
        'Euless',
        'Mansfield',
        'Burleson'
      ]}
      industries={[
        { name: 'Aerospace & Defense', description: 'Financial management for Fort Worth aerospace, defense contractors, and Lockheed Martin suppliers' },
        { name: 'Oil & Energy', description: 'Oilfield services bookkeeping, energy sector accounting, and Permian Basin support operations' },
        { name: 'Healthcare & Hospitals', description: 'Medical practice, hospital system, and healthcare facility financial management' },
        { name: 'Ranching & Agriculture', description: 'Agricultural bookkeeping, ranch management accounting, and livestock operations' },
        { name: 'Construction & Real Estate', description: 'Commercial construction accounting, property management, and real estate development' },
        { name: 'Restaurants & Tourism', description: 'Stockyards District restaurants, tourism businesses, and hospitality accounting' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Texas Franchise Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Multi-Entity Consolidation'
      ]}
      specialCompliance={{
        title: 'Fort Worth Tax Compliance',
        items: [
          'Texas franchise tax filing',
          'Tarrant County business compliance',
          'Sales tax management',
          'Quarterly estimated tax planning',
          'Year-end financial preparation',
          'Defense contractor compliance'
        ]
      }}
      metaDescription="Professional bookkeeping services in Fort Worth, TX. Certified QuickBooks ProAdvisor serving Fort Worth and Tarrant County businesses with expert financial management, tax compliance, and reconciliation."
      metaKeywords="Fort Worth bookkeeping, Fort Worth TX bookkeeper, bookkeeping services Fort Worth Texas, QuickBooks Fort Worth, Fort Worth small business bookkeeping, bookkeeper near me Fort Worth TX, Tarrant County bookkeeping"
    />
  );
};

export default FortWorthBookkeeping;
