import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Shield, 
  BarChart3, 
  Calculator, 
  FileText,
  ArrowRight,
  Star,
  Award,
  Zap,
  Users,
  Calendar,
  DollarSign,
  Target
} from 'lucide-react';

const CleanupAdvisory = () => {
  const services = [
    'Historical data cleanup and correction',
    'Chart of accounts optimization',
    'Process improvement and automation',
    'Financial strategy consulting',
    'System implementation and migration',
    'Internal control assessment',
    'Financial analysis and reporting',
    'Budget planning and forecasting',
    'Tax preparation coordination',
    'Business performance optimization'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Clean Foundation',
      description: 'Start with accurate, organized financial records'
    },
    {
      icon: TrendingUp,
      title: 'Better Performance',
      description: 'Identify opportunities for growth and efficiency'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Streamlined processes save hours of manual work'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Eliminate inefficiencies and reduce operational costs'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We evaluate your current financial systems and identify areas for improvement'
    },
    {
      step: '02',
      title: 'Cleanup',
      description: 'We clean and organize your historical data to ensure accuracy'
    },
    {
      step: '03',
      title: 'Optimization',
      description: 'We implement improved processes and systems for better efficiency'
    },
    {
      step: '04',
      title: 'Advisory',
      description: 'We provide ongoing strategic guidance for continued improvement'
    }
  ];

  const advisoryServices = [
    {
      name: 'Financial Strategy Consulting',
      description: 'Strategic financial planning and analysis to support business growth and profitability'
    },
    {
      name: 'Process Optimization',
      description: 'Streamline financial processes to improve efficiency and reduce costs'
    },
    {
      name: 'System Implementation',
      description: 'Expert guidance on implementing and optimizing financial software systems'
    },
    {
      name: 'Performance Analysis',
      description: 'Comprehensive financial analysis to identify opportunities and risks'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cleanup & Advisory Services | ClearLedger Solutions - Financial Optimization</title>
        <meta name="description" content="Professional financial cleanup and advisory services. Historical data cleanup, process optimization, and strategic consulting. Transform your financial operations with expert guidance." />
        <meta name="keywords" content="financial cleanup, advisory services, process optimization, financial consulting, data cleanup, strategic planning" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cleanup & Advisory Services | ClearLedger Solutions" />
        <meta property="og:description" content="Professional financial cleanup and advisory services. Historical data cleanup, process optimization, and strategic consulting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourclearledger.com/cleanup-advisory" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cleanup & Advisory Services | ClearLedger Solutions" />
        <meta name="twitter:description" content="Professional financial cleanup and advisory services." />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cleanup & Advisory Services",
            "description": "Professional financial cleanup and advisory services including historical data cleanup, process optimization, and strategic consulting.",
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
              "description": "Financial cleanup and advisory services"
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
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm font-semibold text-accent-foreground">
                  Cleanup & Advisory
                </span>
              </div>
              
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Financial{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  Cleanup & Advisory
                </span>
                <br />
                Services
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                Transform your financial operations with our comprehensive cleanup and advisory services. 
                From historical data cleanup to strategic consulting, we help you build a solid financial foundation.
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
                Comprehensive Cleanup & Advisory Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From data cleanup to strategic consulting, we provide the expertise to transform your financial operations.
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
                Why Choose Our Cleanup & Advisory Services?
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
                Our Cleanup & Advisory Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to cleaning up your financial data and optimizing your processes.
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

        {/* Advisory Services Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Strategic Advisory Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guidance to help you make informed financial decisions and optimize your business performance.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {advisoryServices.map((service, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-premium">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
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
                Ready to Transform Your Financial Operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you clean up your financial data and implement strategies for better performance.
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

export default CleanupAdvisory; 