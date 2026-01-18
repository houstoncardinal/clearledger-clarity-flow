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
        title="Contact ClearLedger Solutions - Get Free Bookkeeping Consultation"
        description={`Contact ClearLedger Solutions for professional bookkeeping services. Get a free consultation and custom quote for your business. Call ${COMPANY_INFO.phoneLocal} or email ${COMPANY_INFO.email}. QuickBooks ProAdvisor certified team.`}
        keywords="contact ClearLedger, bookkeeping consultation, free consultation, QuickBooks ProAdvisor contact, bookkeeping services quote, small business accounting help"
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
