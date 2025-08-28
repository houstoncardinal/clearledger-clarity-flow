import Header from '@/components/Header';
import ServicesComponent from '@/components/Services';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';

const ServicesPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Bookkeeping Services - QuickBooks, Monthly Reconciliation & More | ClearLedger"
        description="Comprehensive bookkeeping services including QuickBooks setup, monthly reconciliation, accounts payable management, and tax preparation. Professional services for small businesses."
        keywords="bookkeeping services, QuickBooks services, monthly reconciliation, accounts payable, tax preparation, financial reporting, small business bookkeeping, outsourced bookkeeping"
        canonical="/services"
        schema={[
          getServiceSchema("Bookkeeping Services", "Comprehensive bookkeeping services for small businesses including QuickBooks setup, monthly reconciliation, accounts payable management, and tax preparation."),
          getBreadcrumbSchema(breadcrumbs)
        ]}
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