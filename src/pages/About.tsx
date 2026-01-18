import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  getAboutPageSchema,
  getEnhancedBreadcrumbSchema,
  getEnhancedOrganizationSchema,
  COMPANY_INFO 
} from '@/utils/advancedSchemaMarkup';

const AboutPage = () => {
  const schemas = [
    getAboutPageSchema(),
    getEnhancedBreadcrumbSchema([{ name: "About", url: "/about" }]),
    getEnhancedOrganizationSchema()
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="About ClearLedger Solutions - Our Team & Mission | Professional Bookkeeping"
        description={`Learn about ClearLedger Solutions, founded by ${COMPANY_INFO.founder.name}, a certified QuickBooks ProAdvisor with 10+ years experience. ${COMPANY_INFO.slogan}. Based in ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.stateAbbr}.`}
        keywords="about ClearLedger, bookkeeping team, QuickBooks ProAdvisor, JJ Eldredge, certified bookkeeper, professional bookkeeping services, small business accounting, Texas bookkeeper"
        canonical="/about"
        schema={schemas}
      />
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
