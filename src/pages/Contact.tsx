import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getContactPageSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';

const ContactPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Contact ClearLedger Solutions - Get Free Bookkeeping Consultation"
        description="Contact ClearLedger Solutions for professional bookkeeping services. Get a free consultation and custom quote for your business. QuickBooks ProAdvisor certified team."
        keywords="contact ClearLedger, bookkeeping consultation, free consultation, QuickBooks ProAdvisor contact, bookkeeping services quote, small business accounting help"
        canonical="/contact"
        schema={[
          getContactPageSchema(),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage; 