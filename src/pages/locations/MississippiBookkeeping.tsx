import LocationPageTemplate from '@/components/LocationPageTemplate';

const MississippiBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Mississippi"
      stateAbbr="MS"
      slug="mississippi-bookkeeping"
      tagline="Serving the Magnolia State with comprehensive bookkeeping, QuickBooks expertise, and Mississippi tax compliance for growing businesses."
      description="From Jackson to the Gulf Coast, we provide comprehensive financial management tailored to Mississippi's manufacturing, agriculture, and healthcare economy."
      cities={[
        'Jackson',
        'Gulfport',
        'Southaven',
        'Biloxi',
        'Hattiesburg',
        'Olive Branch',
        'Tupelo',
        'Meridian'
      ]}
      industries={[
        { name: 'Manufacturing', description: 'Automotive, furniture, and industrial manufacturing financial management' },
        { name: 'Agriculture', description: 'Farm operations, cotton, poultry, and catfish farming accounting' },
        { name: 'Healthcare', description: 'Medical practice, hospital, and healthcare system bookkeeping' },
        { name: 'Gaming & Hospitality', description: 'Casino, hotel, and tourism industry financial services' },
        { name: 'Shipbuilding', description: 'Naval shipyard and maritime manufacturing accounting' },
        { name: 'Retail & Distribution', description: 'Wholesale, retail, and distribution center bookkeeping' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Mississippi Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Manufacturing Cost Accounting'
      ]}
      specialCompliance={{
        title: 'Mississippi Tax Compliance',
        items: [
          'Mississippi income tax preparation',
          'Sales tax compliance',
          'Franchise tax filing',
          'Quarterly estimated payments',
          'Annual report filing',
          'Gaming tax reporting'
        ]
      }}
      metaDescription="Professional bookkeeping services for Mississippi businesses. Expert QuickBooks management, Mississippi tax compliance, and financial reporting for Jackson, Gulfport, and statewide."
      metaKeywords="Mississippi bookkeeping, Jackson bookkeeper, Gulfport bookkeeping services, QuickBooks Mississippi, Mississippi tax compliance, small business bookkeeping MS"
    />
  );
};

export default MississippiBookkeeping;
