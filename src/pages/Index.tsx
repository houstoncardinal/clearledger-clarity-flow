import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BadgesSection from '@/components/BadgesSection';
import ServicesComponent from '@/components/Services';
import CheckOrderingSection from '@/components/CheckOrderingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  getHomePageSchema,
  getEnhancedReviewSchema,
  getEnhancedFAQSchema,
  COMPANY_INFO
} from '@/utils/advancedSchemaMarkup';

const Index = () => {
  // Reviews for schema markup
  const reviews = [
    {
      author: "Sarah M.",
      rating: 5,
      review: "ClearLedger transformed our financial management. Their expertise in QuickBooks and attention to detail has saved us countless hours.",
      datePublished: "2024-11-15"
    },
    {
      author: "Michael T.", 
      rating: 5,
      review: "The bookkeeping and compliance support has been exceptional. ClearLedger handles everything from processing to compliance, giving us peace of mind.",
      datePublished: "2024-10-22"
    },
    {
      author: "Jennifer R.",
      rating: 5,
      review: "As a healthcare provider, compliance is critical. ClearLedger's expertise in regulatory requirements gives us confidence that our financial data is compliant.",
      datePublished: "2024-09-18"
    },
    {
      author: "David K.",
      rating: 5,
      review: "Outstanding service! JJ and the team are incredibly responsive and knowledgeable. They've helped us streamline our entire bookkeeping process.",
      datePublished: "2024-08-30"
    },
    {
      author: "Lisa P.",
      rating: 5,
      review: "Best decision we made for our small business. ClearLedger's monthly management services keep our books accurate and up-to-date.",
      datePublished: "2024-07-12"
    }
  ];

  // FAQs for schema markup
  const faqs = [
    {
      question: "What bookkeeping services does ClearLedger Solutions offer?",
      answer: "ClearLedger Solutions offers comprehensive bookkeeping services including QuickBooks Online and Desktop management, monthly reconciliation, accounts payable/receivable, financial reporting, payroll processing, and tax preparation coordination. We serve small businesses across the United States."
    },
    {
      question: "Is ClearLedger a certified QuickBooks ProAdvisor?",
      answer: "Yes, ClearLedger Solutions is a certified QuickBooks ProAdvisor with advanced certifications in both QuickBooks Online and QuickBooks Desktop. Our team has been recognized as a 2024-2025 Top 25 Up-N-Coming ProAdvisor."
    },
    {
      question: "What areas does ClearLedger Solutions serve?",
      answer: "ClearLedger Solutions provides remote bookkeeping services to businesses throughout the United States, with specialized expertise in Texas, Florida, Louisiana, Mississippi, Oklahoma, New Mexico, and Panama."
    },
    {
      question: "How much do ClearLedger's bookkeeping services cost?",
      answer: "Our pricing is customized based on your business needs, transaction volume, and complexity. We offer free consultations to assess your requirements and provide a tailored quote. Contact us for a personalized proposal."
    },
    {
      question: "How do I get started with ClearLedger Solutions?",
      answer: "Getting started is easy! Simply schedule a free 30-minute consultation through our website or call us at (903) 815-9488. We'll discuss your needs, assess your current situation, and create a custom solution for your business."
    }
  ];

  // Combine all homepage schemas
  const homePageSchemas = [
    ...getHomePageSchema(),
    getEnhancedReviewSchema(reviews),
    getEnhancedFAQSchema(faqs)
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="ClearLedger Solutions - Professional Bookkeeping Services | QuickBooks ProAdvisor"
        description={`${COMPANY_INFO.description} Free consultation available. Call ${COMPANY_INFO.phoneLocal} today.`}
        keywords="bookkeeping services, QuickBooks ProAdvisor, small business bookkeeping, monthly reconciliation, accounts payable, tax preparation, financial reporting, QuickBooks Online, QuickBooks Desktop, outsourced bookkeeping, certified bookkeeper, business accounting, Texas bookkeeping, ClearLedger Solutions"
        canonical="/"
        schema={homePageSchemas}
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
