import LocationPageTemplate from '@/components/LocationPageTemplate';

const FloridaBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Florida"
      stateAbbr="FL"
      slug="florida-bookkeeping"
      tagline="Serving the Sunshine State with comprehensive bookkeeping, QuickBooks expertise, and Florida business compliance for companies of all sizes."
      description="From Miami's international commerce to Orlando's tourism industry, we provide comprehensive financial management tailored to Florida's dynamic economy."
      cities={[
        'Miami',
        'Orlando',
        'Tampa',
        'Jacksonville',
        'Fort Lauderdale',
        'St. Petersburg',
        'Sarasota',
        'West Palm Beach'
      ]}
      industries={[
        { name: 'Tourism & Hospitality', description: 'Theme park, hotel, resort, and restaurant financial management' },
        { name: 'Real Estate', description: 'Property management, development, and investment portfolio accounting' },
        { name: 'Healthcare', description: 'Medical practice, senior care, and healthcare system bookkeeping' },
        { name: 'International Trade', description: 'Import/export, customs compliance, and multi-currency accounting' },
        { name: 'Construction', description: 'Commercial and residential development project accounting' },
        { name: 'Marine & Boating', description: 'Marina, yacht sales, and marine services financial management' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Florida Sales Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Multi-Currency Accounting'
      ]}
      specialCompliance={{
        title: 'Florida Business Compliance',
        items: [
          'Florida sales tax compliance',
          'Tourist development tax',
          'Annual report filing',
          'Commercial rent tax',
          'Reemployment tax (unemployment)',
          'Multi-county tax reporting'
        ]
      }}
      metaDescription="Professional bookkeeping services for Florida businesses. Expert QuickBooks management, Florida sales tax compliance, and financial reporting for Miami, Orlando, Tampa, and statewide."
      metaKeywords="Florida bookkeeping, Miami bookkeeper, Orlando bookkeeping services, Tampa bookkeeper, QuickBooks Florida, Florida sales tax, small business bookkeeping FL"
    />
  );
};

export default FloridaBookkeeping;
