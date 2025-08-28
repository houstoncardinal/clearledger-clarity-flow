import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BadgesSection from '@/components/BadgesSection';
import ServicesComponent from '@/components/Services';
import CheckOrderingSection from '@/components/CheckOrderingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getOrganizationSchema, getReviewSchema } from '@/utils/schemaMarkup';

const Index = () => {
  const reviews = [
    {
      author: "Client A",
      rating: 5,
      review: "ClearLedger transformed our financial management. Their expertise in QuickBooks and attention to detail has saved us countless hours."
    },
    {
      author: "Client B", 
      rating: 5,
      review: "The bookkeeping and compliance support has been exceptional. ClearLedger handles everything from processing to compliance, giving us peace of mind."
    },
    {
      author: "Client C",
      rating: 5,
      review: "As a healthcare provider, compliance is critical. ClearLedger's expertise in regulatory requirements gives us confidence that our financial data is compliant."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="ClearLedger Solutions - Professional Bookkeeping Services | QuickBooks ProAdvisor"
        description="Expert bookkeeping services for small businesses. QuickBooks ProAdvisor certified with 10+ years experience. Monthly reconciliation, accounts payable, tax preparation. Free consultation available."
        keywords="bookkeeping services, QuickBooks ProAdvisor, small business bookkeeping, monthly reconciliation, accounts payable, tax preparation, financial reporting, QuickBooks Online, QuickBooks Desktop, outsourced bookkeeping, certified bookkeeper, business accounting"
        canonical="/"
        schema={[
          getOrganizationSchema(),
          getReviewSchema(reviews)
        ]}
      />
      <Header />
      <Hero />
      <BadgesSection />
      <ServicesComponent />
      <CheckOrderingSection />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
