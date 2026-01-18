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
        title="About ClearLedger | Meet Our Award-Winning QuickBooks ProAdvisor Team"
        description={`Meet JJ Eldredge & the ClearLedger team. 10+ years experience, 500+ clients, Top 25 ProAdvisor 2024-2025. ${COMPANY_INFO.slogan}. Call ${COMPANY_INFO.phoneLocal}.`}
        keywords="about ClearLedger Solutions, JJ Eldredge QuickBooks ProAdvisor, certified bookkeeper Texas, award-winning bookkeeping team, Top 25 ProAdvisor, professional bookkeeping services"
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
