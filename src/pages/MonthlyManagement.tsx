import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  PieChart, 
  CheckCircle, 
  Clock, 
  Shield, 
  TrendingUp, 
  BarChart3, 
  FileText,
  ArrowRight,
  Star,
  Award,
  Zap,
  Calculator,
  Calendar,
  DollarSign
} from 'lucide-react';

const MonthlyManagement = () => {
  const services = [
    'Bank account reconciliation',
    'Credit card reconciliation',
    'Monthly financial statement preparation',
    'Variance analysis and reporting',
    'Cash flow monitoring and analysis',
    'Account balance verification',
    'Journal entry preparation',
    'Month-end closing procedures',
    'Financial ratio analysis',
    'Budget vs. actual comparisons'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Timely Reporting',
      description: 'Get your financial reports within 5 business days of month-end'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Ensure your books are always audit-ready and compliant'
    },
    {
      icon: TrendingUp,
      title: 'Better Decisions',
      description: 'Make informed business decisions with accurate financial data'
    },
    {
      icon: Zap,
      title: 'Peace of Mind',
      description: 'Know your financial position is always current and accurate'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Data Collection',
      description: 'We gather all bank statements, credit card statements, and supporting documentation'
    },
    {
      step: '02',
      title: 'Reconciliation',
      description: 'We reconcile all accounts and identify any discrepancies or missing transactions'
    },
    {
      step: '03',
      title: 'Analysis',
      description: 'We analyze variances, trends, and prepare comprehensive financial reports'
    },
    {
      step: '04',
      title: 'Reporting',
      description: 'We deliver detailed financial statements and insights within 5 business days'
    }
  ];

  const reports = [
    {
      name: 'Profit & Loss Statement',
      description: 'Monthly income and expense analysis with year-to-date comparisons'
    },
    {
      name: 'Balance Sheet',
      description: 'Complete financial position including assets, liabilities, and equity'
    },
    {
      name: 'Cash Flow Statement',
      description: 'Detailed cash flow analysis showing operating, investing, and financing activities'
    },
    {
      name: 'Variance Analysis',
      description: 'Budget vs. actual comparisons with explanations for significant variances'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Monthly Management & Reconciliation Services | ClearLedger Solutions</title>
        <meta name="description" content="Professional monthly bookkeeping and reconciliation services. Bank reconciliation, financial reporting, and variance analysis. Get your financial reports within 5 business days." />
        <meta name="keywords" content="monthly reconciliation, bank reconciliation, financial reporting, bookkeeping services, variance analysis, cash flow monitoring" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Monthly Management & Reconciliation Services | ClearLedger Solutions" />
        <meta property="og:description" content="Professional monthly bookkeeping and reconciliation services. Bank reconciliation, financial reporting, and variance analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourclearledger.com/monthly-management" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monthly Management & Reconciliation Services | ClearLedger Solutions" />
        <meta name="twitter:description" content="Professional monthly bookkeeping and reconciliation services." />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Monthly Management & Reconciliation Services",
            "description": "Professional monthly bookkeeping and reconciliation services including bank reconciliation, financial reporting, and variance analysis.",
            "provider": {
              "@type": "Organization",
              "name": "ClearLedger Solutions LLC",
              "url": "https://yourclearledger.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Whitewright",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(903) 815-9488",
                "email": "jj@yourclearledger.com",
                "contactType": "customer service"
              }
            },
            "areaServed": "United States",
            "serviceType": "Bookkeeping Services",
            "offers": {
              "@type": "Offer",
              "description": "Monthly reconciliation and financial management services"
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full mb-8">
                <PieChart className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm font-semibold text-accent-foreground">
                  Monthly Management
                </span>
              </div>
              
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Monthly Management &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  Reconciliation
                </span>
                <br />
                Services
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                Comprehensive monthly financial management to keep your business on track and compliant. 
                Get accurate financial reports within 5 business days of month-end.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Comprehensive Monthly Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From bank reconciliation to financial reporting, we handle all aspects of your monthly financial management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">{service}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Our Monthly Management?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-card">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Monthly Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A streamlined process that ensures accuracy and timely delivery of your financial reports.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-card">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Monthly Financial Reports
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial reports delivered within 5 business days of month-end.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {reports.map((report, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-premium">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {report.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {report.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-3xl p-12 shadow-premium text-center">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready for Better Monthly Management?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get accurate, timely financial reports that help you make better business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    Start Your Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:(903) 815-9488">
                  <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
                    Call (903) 815-9488
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MonthlyManagement; 