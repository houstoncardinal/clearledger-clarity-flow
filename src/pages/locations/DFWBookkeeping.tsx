import LocationPageTemplate from '@/components/LocationPageTemplate';

const DFWBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Dallas-Fort Worth"
      stateAbbr="TX"
      slug="dfw-bookkeeping"
      tagline="Serving the entire Dallas-Fort Worth metroplex with expert bookkeeping, QuickBooks management, and Texas franchise tax compliance. From downtown Dallas to Fort Worth's Stockyards — we've got your books covered."
      description="The DFW metroplex is home to 7.6 million people and thousands of thriving businesses. ClearLedger Solutions provides enterprise-grade bookkeeping services tailored to the unique needs of North Texas businesses."
      cities={[
        'Dallas',
        'Fort Worth',
        'Arlington',
        'Plano',
        'Irving',
        'Frisco',
        'McKinney',
        'Denton',
        'Garland',
        'Richardson',
        'Grand Prairie',
        'Carrollton'
      ]}
      industries={[
        { name: 'Technology & Telecom', description: 'Financial management for DFW tech companies, telecom firms, and the Richardson Telecom Corridor ecosystem' },
        { name: 'Healthcare & Medical', description: 'Medical practice bookkeeping, dental office finances, and healthcare facility accounting across DFW' },
        { name: 'Real Estate & Development', description: 'Property management accounting, investor reporting, and real estate development financial tracking' },
        { name: 'Retail & E-Commerce', description: 'Multi-location retail bookkeeping, sales tax compliance, and e-commerce financial management' },
        { name: 'Construction & Trades', description: 'Job costing, contractor payments, lien compliance, and construction project accounting' },
        { name: 'Food & Hospitality', description: 'Restaurant bookkeeping, food cost analysis, tip reporting, and hospitality accounting' }
      ]}
      services={[
        'QuickBooks Online & Desktop Setup',
        'Monthly Financial Reconciliation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Texas Franchise Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Forecasting',
        'Multi-Location Consolidation'
      ]}
      specialCompliance={{
        title: 'DFW Tax & Compliance Services',
        items: [
          'Texas franchise tax preparation',
          'Sales tax compliance & filing',
          'Multi-entity consolidation',
          'Quarterly estimated tax planning',
          'Year-end financial preparation',
          'Audit-ready financial records'
        ]
      }}
      metaDescription="Professional bookkeeping services for Dallas-Fort Worth businesses. Expert QuickBooks management, monthly reconciliation, and TX franchise tax compliance serving the entire DFW metroplex."
      metaKeywords="DFW bookkeeping, Dallas Fort Worth bookkeeper, North Texas bookkeeping services, DFW QuickBooks ProAdvisor, metroplex bookkeeping, bookkeeper near me DFW, DFW small business bookkeeping, North Texas accountant"
    />
  );
};

export default DFWBookkeeping;
