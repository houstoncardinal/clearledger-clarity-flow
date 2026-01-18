import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  getContactPageSchema,
  getEnhancedBreadcrumbSchema,
  getLocalBusinessSchema,
  COMPANY_INFO 
} from '@/utils/advancedSchemaMarkup';

const ContactPage = () => {
  const schemas = [
    getContactPageSchema(),
    getEnhancedBreadcrumbSchema([{ name: "Contact", url: "/contact" }]),
    getLocalBusinessSchema()
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Contact ClearLedger | Free Bookkeeping Consultation | (903) 815-9488"
        description={`Get your FREE 30-minute bookkeeping consultation. Expert QuickBooks help, custom pricing. Call ${COMPANY_INFO.phoneLocal} or email ${COMPANY_INFO.email}. Response within 2 hours.`}
        keywords="contact ClearLedger, free bookkeeping consultation, QuickBooks help, bookkeeping quote, small business accounting consultation, Texas bookkeeping services"
        canonical="/contact"
        schema={schemas}
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
