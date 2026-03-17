import LocationPageTemplate from '@/components/LocationPageTemplate';

const PlanoBookkeeping = () => {
  return (
    <LocationPageTemplate
      state="Plano"
      stateAbbr="TX"
      slug="plano-bookkeeping"
      tagline="Expert bookkeeping and QuickBooks services for Plano businesses. From Legacy West startups to established enterprises along the Dallas North Tollway — we manage your finances so you can focus on growth."
      description="Plano is one of the fastest-growing business hubs in Texas, home to corporate headquarters like Toyota, FedEx Office, and JCPenney. ClearLedger Solutions provides tailored bookkeeping services for Plano's diverse business community."
      cities={[
        'Plano',
        'Allen',
        'Richardson',
        'Murphy',
        'Wylie',
        'Lucas',
        'Parker',
        'Fairview'
      ]}
      industries={[
        { name: 'Technology & SaaS', description: 'Financial management for Plano tech companies and software startups along the Telecom Corridor' },
        { name: 'Corporate Services', description: 'Bookkeeping for corporate headquarters and professional services firms in Legacy business parks' },
        { name: 'Healthcare & Dental', description: 'Medical practice and dental office bookkeeping serving Plano\'s healthcare community' },
        { name: 'Retail & Restaurants', description: 'Multi-location retail accounting and restaurant financial management across Plano' },
        { name: 'Real Estate', description: 'Property management bookkeeping, investor reporting, and real estate transaction tracking' },
        { name: 'Insurance & Finance', description: 'Financial services industry bookkeeping and compliance for Plano-based firms' }
      ]}
      services={[
        'QuickBooks Online & Desktop Management',
        'Monthly Financial Statement Preparation',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable',
        'Texas Franchise Tax Compliance',
        'Payroll Processing & Tax Filing',
        'Cash Flow Management',
        'Startup Financial Setup'
      ]}
      specialCompliance={{
        title: 'Plano Business Tax Compliance',
        items: [
          'Texas franchise tax filing',
          'Sales tax compliance',
          'Quarterly estimated payments',
          'Year-end financial prep',
          'Multi-entity bookkeeping',
          'Audit-ready record keeping'
        ]
      }}
      metaDescription="Professional bookkeeping services in Plano, TX. Certified QuickBooks ProAdvisor serving Plano businesses with monthly reconciliation, tax compliance, and financial reporting."
      metaKeywords="Plano bookkeeping, Plano TX bookkeeper, bookkeeping services Plano Texas, QuickBooks Plano, Plano small business bookkeeping, bookkeeper near me Plano TX, Plano accountant"
    />
  );
};

export default PlanoBookkeeping;
