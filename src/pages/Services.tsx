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
        title="Expert Bookkeeping Services | QuickBooks, A/P & Tax Prep | ClearLedger"
        description={`Full-service bookkeeping: QuickBooks setup, monthly reconciliation, accounts payable, tax prep & financial reporting. 500+ happy clients. Call ${COMPANY_INFO.phoneLocal}.`}
        keywords="bookkeeping services Texas, QuickBooks setup services, monthly reconciliation, accounts payable management, tax preparation, financial reporting, small business bookkeeping, outsourced bookkeeping, ClearLedger Solutions"
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
