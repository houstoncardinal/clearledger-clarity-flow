import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getAboutPageSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';

const AboutPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="About ClearLedger Solutions - Our Team & Mission | Professional Bookkeeping"
        description="Learn about ClearLedger Solutions, our certified QuickBooks ProAdvisor team, and our commitment to providing professional bookkeeping services for small businesses."
        keywords="about ClearLedger, bookkeeping team, QuickBooks ProAdvisor, JJ Eldredge, certified bookkeeper, professional bookkeeping services, small business accounting"
        canonical="/about"
        schema={[
          getAboutPageSchema(),
          getBreadcrumbSchema(breadcrumbs)
        ]}
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