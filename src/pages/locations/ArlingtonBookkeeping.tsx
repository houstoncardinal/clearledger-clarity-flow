import LocationPageTemplate from '@/components/LocationPageTemplate';

const ArlingtonBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Arlington"
      stateAbbr="TX"
      slug="arlington-bookkeeping"
      tagline="Professional bookkeeping services for Arlington, TX businesses. Centrally located between Dallas and Fort Worth — expert QuickBooks management, financial reporting, and Texas tax compliance for the Entertainment Capital of Texas."
      description="Arlington is the 7th largest city in Texas and sits at the heart of the DFW metroplex. ClearLedger Solutions provides comprehensive bookkeeping services for Arlington's diverse business community, from the Entertainment District to industrial corridors."
      cities={[
        'Arlington',
        'Mansfield',
        'Grand Prairie',
        'Kennedale',
        'Dalworthington Gardens',
        'Pantego',
        'Forest Hill',
        'Crowley'
      ]}
      industries={[
        { name: 'Entertainment & Sports', description: 'Financial management for AT&T Stadium, Globe Life Field area businesses, and entertainment venues' },
        { name: 'Manufacturing', description: 'GM Assembly Plant suppliers, industrial manufacturing, and distribution center accounting' },
        { name: 'Education & Research', description: 'UT Arlington area businesses, education services, and research company bookkeeping' },
        { name: 'Healthcare', description: 'Medical practice, dental office, and healthcare facility bookkeeping' },
        { name: 'Retail & Dining', description: 'Entertainment District restaurants, retail chains, and multi-location business accounting' },
        { name: 'Construction & Trades', description: 'Residential and commercial construction bookkeeping, contractor payments, and compliance' }
      ]}
      services={[
        'QuickBooks Online & Desktop Setup',
        'Monthly Financial Reconciliation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Texas Franchise Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Multi-Location Bookkeeping'
      ]}
      specialCompliance={{
        title: 'Arlington Business Compliance',
        items: [
          'Texas franchise tax filing',
          'Sales tax management',
          'Mixed beverage tax compliance',
          'Quarterly estimated payments',
          'Year-end financial preparation',
          'Multi-entity reporting'
        ]
      }}
      metaDescription="Professional bookkeeping services in Arlington, TX. Certified QuickBooks ProAdvisor serving Arlington businesses with monthly reconciliation, tax compliance, and expert financial management."
      metaKeywords="Arlington bookkeeping, Arlington TX bookkeeper, bookkeeping services Arlington Texas, QuickBooks Arlington, Arlington small business bookkeeping, bookkeeper near me Arlington TX"
    />
  );
};

export default ArlingtonBookkeeping;
