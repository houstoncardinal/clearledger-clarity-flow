import LocationPageTemplate from '@/components/LocationPageTemplate';

const LouisianaBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Louisiana"
      stateAbbr="LA"
      slug="louisiana-bookkeeping"
      tagline="Serving the Pelican State with comprehensive bookkeeping, QuickBooks expertise, and Louisiana tax compliance for businesses across the Gulf Coast."
      description="From New Orleans hospitality to Baton Rouge industry, we provide comprehensive financial management tailored to Louisiana's unique economy and business culture."
      cities={[
        'New Orleans',
        'Baton Rouge',
        'Shreveport',
        'Lafayette',
        'Lake Charles',
        'Metairie',
        'Houma',
        'Alexandria'
      ]}
      industries={[
        { name: 'Energy & Petrochemical', description: 'Oil refinery, petrochemical plant, and offshore drilling financial management' },
        { name: 'Hospitality & Tourism', description: 'Restaurant, hotel, and entertainment venue bookkeeping services' },
        { name: 'Maritime & Shipping', description: 'Port operations, shipping companies, and marine services accounting' },
        { name: 'Healthcare', description: 'Medical practice, dental office, and healthcare system bookkeeping' },
        { name: 'Construction', description: 'Commercial and residential construction project accounting' },
        { name: 'Food & Beverage', description: 'Restaurant, catering, and food manufacturing financial management' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Louisiana Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Multi-Parish Tax Reporting'
      ]}
      specialCompliance={{
        title: 'Louisiana Tax Compliance',
        items: [
          'Louisiana income tax preparation',
          'Parish sales tax compliance',
          'Severance tax tracking',
          'Quarterly estimated payments',
          'Annual report filing',
          'Multi-parish tax reporting'
        ]
      }}
      metaDescription="Professional bookkeeping services for Louisiana businesses. Expert QuickBooks management, Louisiana tax compliance, and financial reporting for New Orleans, Baton Rouge, and statewide."
      metaKeywords="Louisiana bookkeeping, New Orleans bookkeeper, Baton Rouge bookkeeping services, QuickBooks Louisiana, Louisiana tax compliance, small business bookkeeping LA"
    />
  );
};

export default LouisianaBookkeeping;
