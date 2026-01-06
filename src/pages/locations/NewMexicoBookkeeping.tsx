import LocationPageTemplate from '@/components/LocationPageTemplate';

const NewMexicoBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="New Mexico"
      stateAbbr="NM"
      slug="new-mexico-bookkeeping"
      tagline="Serving the Land of Enchantment with comprehensive bookkeeping, QuickBooks expertise, and New Mexico gross receipts tax compliance."
      description="From Albuquerque tech startups to Santa Fe tourism, we provide comprehensive financial management tailored to New Mexico's unique business landscape."
      cities={[
        'Albuquerque',
        'Las Cruces',
        'Santa Fe',
        'Rio Rancho',
        'Roswell',
        'Farmington',
        'Clovis',
        'Hobbs'
      ]}
      industries={[
        { name: 'Technology & Research', description: 'Tech startup, national laboratory, and R&D financial management' },
        { name: 'Tourism & Hospitality', description: 'Hotel, restaurant, and cultural tourism bookkeeping services' },
        { name: 'Energy & Mining', description: 'Oil, gas, uranium, and renewable energy accounting' },
        { name: 'Healthcare', description: 'Medical practice, hospital, and tribal healthcare bookkeeping' },
        { name: 'Agriculture & Ranching', description: 'Farm, ranch, and chile farming financial management' },
        { name: 'Arts & Culture', description: 'Gallery, artisan, and cultural institution accounting' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Gross Receipts Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Government Contractor Accounting'
      ]}
      specialCompliance={{
        title: 'New Mexico Gross Receipts Tax Compliance',
        items: [
          'Gross receipts tax filing',
          'Location-based tax rates',
          'Compensating tax compliance',
          'Quarterly estimated payments',
          'Annual report filing',
          'Multi-location tax reporting'
        ]
      }}
      metaDescription="Professional bookkeeping services for New Mexico businesses. Expert QuickBooks management, gross receipts tax compliance, and financial reporting for Albuquerque, Santa Fe, and statewide."
      metaKeywords="New Mexico bookkeeping, Albuquerque bookkeeper, Santa Fe bookkeeping services, QuickBooks New Mexico, gross receipts tax, small business bookkeeping NM"
    />
  );
};

export default NewMexicoBookkeeping;
