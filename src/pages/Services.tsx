import Header from '@/components/Header';
import ServicesComponent from '@/components/Services';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  getServicesPageSchema,
  COMPANY_INFO 
} from '@/utils/advancedSchemaMarkup';

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Bookkeeping Services - QuickBooks, Monthly Reconciliation & More | ClearLedger"
        description={`Comprehensive bookkeeping services including QuickBooks setup, monthly reconciliation, accounts payable management, and tax preparation. Professional services for small businesses. Call ${COMPANY_INFO.phoneLocal}.`}
        keywords="bookkeeping services, QuickBooks services, monthly reconciliation, accounts payable, tax preparation, financial reporting, small business bookkeeping, outsourced bookkeeping, ClearLedger Solutions"
        canonical="/services"
        schema={getServicesPageSchema()}
      />
      <Header />
      <div className="pt-20">
        <ServicesComponent />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
