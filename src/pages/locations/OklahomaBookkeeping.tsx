import LocationPageTemplate from '@/components/LocationPageTemplate';

const OklahomaBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Oklahoma"
      stateAbbr="OK"
      slug="oklahoma-bookkeeping"
      tagline="Serving the Sooner State with comprehensive bookkeeping, QuickBooks expertise, and Oklahoma tax compliance for businesses of all sizes."
      description="From startups to established enterprises, we provide comprehensive financial management tailored to Oklahoma's thriving energy, agriculture, and aerospace economy."
      cities={[
        'Oklahoma City',
        'Tulsa',
        'Norman',
        'Broken Arrow',
        'Edmond',
        'Lawton',
        'Moore',
        'Stillwater'
      ]}
      industries={[
        { name: 'Energy & Oil', description: 'Comprehensive bookkeeping for Oklahoma energy sector and oilfield services' },
        { name: 'Agriculture', description: 'Farm and ranch financial management, crop accounting, and livestock tracking' },
        { name: 'Aerospace & Defense', description: 'Government contractor accounting and aerospace manufacturing finance' },
        { name: 'Healthcare', description: 'Medical practice, dental office, and healthcare facility bookkeeping' },
        { name: 'Manufacturing', description: 'Inventory management, cost accounting, and supply chain finance' },
        { name: 'Retail & Hospitality', description: 'Point of sale integration, inventory tracking, and multi-location management' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Oklahoma Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Oil & Gas Revenue Tracking'
      ]}
      specialCompliance={{
        title: 'Oklahoma Tax Compliance',
        items: [
          'Oklahoma income tax preparation',
          'Gross production tax tracking',
          'Sales tax compliance',
          'Quarterly estimated payments',
          'Annual report filing',
          'Multi-state apportionment'
        ]
      }}
      metaDescription="Professional bookkeeping services for Oklahoma businesses. Expert QuickBooks management, Oklahoma tax compliance, and financial reporting for Oklahoma City, Tulsa, and statewide."
      metaKeywords="Oklahoma bookkeeping, Oklahoma City bookkeeper, Tulsa bookkeeping services, QuickBooks Oklahoma, Oklahoma tax compliance, small business bookkeeping OK"
    />
  );
};

export default OklahomaBookkeeping;
