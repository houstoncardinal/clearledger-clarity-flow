import LocationPageTemplate from '@/components/LocationPageTemplate';

const TexasBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Texas"
      stateAbbr="TX"
      slug="texas-bookkeeping"
      tagline="Serving the Lone Star State with comprehensive bookkeeping, QuickBooks expertise, and Texas franchise tax compliance from our North Texas base."
      description="From startups to established enterprises, we provide comprehensive financial management tailored to Texas's thriving economy."
      cities={[
        'Dallas-Fort Worth',
        'Houston',
        'San Antonio',
        'Austin',
        'Plano',
        'Sherman',
        'Denison',
        'McKinney'
      ]}
      industries={[
        { name: 'Energy & Oil', description: 'Comprehensive bookkeeping for Texas energy sector and oilfield services' },
        { name: 'Technology', description: 'Fast-paced tech startup and enterprise financial management' },
        { name: 'Healthcare', description: 'Medical practice, dental office, and healthcare facility bookkeeping' },
        { name: 'Construction', description: 'Job costing, contractor payments, and Texas lien law compliance' },
        { name: 'Real Estate', description: 'Property management, rental income tracking, and investor reporting' },
        { name: 'Manufacturing', description: 'Inventory management, cost accounting, and supply chain finance' }
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
        title: 'Texas Franchise Tax Compliance',
        items: [
          'Annual report preparation',
          'Margin calculation optimization',
          'Filing deadline management',
          'EZ computation eligibility review',
          'Multi-state apportionment',
          'Extension filing assistance'
        ]
      }}
      metaDescription="Professional bookkeeping services for Texas businesses. Expert QuickBooks management, Texas franchise tax compliance, and financial reporting for Dallas, Houston, Austin, and statewide."
      metaKeywords="Texas bookkeeping, Dallas bookkeeper, Houston bookkeeping services, Austin bookkeeper, QuickBooks Texas, Texas franchise tax, small business bookkeeping TX"
    />
  );
};

export default TexasBookkeeping;
