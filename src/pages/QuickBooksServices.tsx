import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calculator, 
  CheckCircle, 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  FileText,
  ArrowRight,
  Star,
  Award,
  Zap,
  BarChart3
} from 'lucide-react';

const QuickBooksServices = () => {
  const features = [
    'Monthly transaction categorization and coding',
    'Account reconciliation and balancing',
    'Financial statement preparation (P&L, Balance Sheet, Cash Flow)',
    'Multi-entity management and consolidation',
    'Chart of accounts optimization',
    'Bank and credit card reconciliation',
    'Journal entry preparation and posting',
    'Year-end closing procedures',
    'QuickBooks file maintenance and optimization',
    'Real-time financial reporting'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save 15+ hours per month on bookkeeping tasks'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Ensure full regulatory compliance and audit readiness'
    },
    {
      icon: TrendingUp,
      title: 'Better Insights',
      description: 'Get clear financial insights for better decision making'
    },
    {
      icon: Zap,
      title: 'Real-time Access',
      description: 'Access your financial data anytime, anywhere'
    }
  ];

  const platforms = [
    {
      name: 'QuickBooks Online',
      features: ['Cloud-based access', 'Automatic bank feeds', 'Mobile app support', 'Real-time collaboration'],
      idealFor: 'Small to medium businesses, remote teams, multi-location companies'
    },
    {
      name: 'QuickBooks Desktop',
      features: ['Advanced inventory tracking', 'Industry-specific editions', 'Offline access', 'Advanced reporting'],
      idealFor: 'Larger businesses, inventory-heavy operations, specialized industries'
    }
  ];

  const certifications = [
    'QuickBooks Online Advanced Certified ProAdvisor',
    'QuickBooks Desktop Certified ProAdvisor',
    'QuickBooks Desktop Enterprise Certified',
    '2024-2025 Top 25 Up-N-Coming ProAdvisor'
  ];

  return (
    <>
      <Helmet>
        <title>QuickBooks Bookkeeping Services | ClearLedger Solutions - Expert QB Online & Desktop</title>
        <meta name="description" content="Professional QuickBooks bookkeeping services for Online and Desktop. Expert transaction categorization, reconciliation, and financial reporting. Save 15+ hours monthly with our certified ProAdvisor team." />
        <meta name="keywords" content="QuickBooks bookkeeping, QuickBooks Online, QuickBooks Desktop, ProAdvisor, bookkeeping services, financial reconciliation, transaction categorization" />
        
        {/* Open Graph */}
        <meta property="og:title" content="QuickBooks Bookkeeping Services | ClearLedger Solutions" />
        <meta property="og:description" content="Expert QuickBooks Online and Desktop bookkeeping services. Certified ProAdvisor team providing transaction categorization, reconciliation, and financial reporting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourclearledger.com/quickbooks-services" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QuickBooks Bookkeeping Services | ClearLedger Solutions" />
        <meta name="twitter:description" content="Expert QuickBooks Online and Desktop bookkeeping services. Certified ProAdvisor team." />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "QuickBooks Bookkeeping Services",
            "description": "Professional QuickBooks Online and Desktop bookkeeping services including transaction categorization, account reconciliation, and financial statement preparation.",
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
              "description": "QuickBooks Online and Desktop bookkeeping services"
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Service Badge */}
              <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-accent-foreground/20 shadow-sm">
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-accent-foreground whitespace-nowrap">
                  QuickBooks Services
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
                Expert{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  QuickBooks Bookkeeping
                </span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Services
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
                Professional QuickBooks Online and Desktop bookkeeping services from certified ProAdvisors. 
                Accurate transaction categorization, reconciliation, and financial reporting to keep your business compliant and informed.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Comprehensive QuickBooks Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From basic transaction entry to complex multi-entity management, we handle all aspects of your QuickBooks bookkeeping.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">{feature}</h3>
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
                Why Choose Our QuickBooks Services?
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

        {/* Platforms Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                QuickBooks Online & Desktop Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're certified experts in both QuickBooks Online and Desktop platforms, 
                ensuring you get the best solution for your business needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-premium">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                    {platform.name}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-semibold text-accent-foreground mb-2">Ideal For:</h4>
                    <p className="text-sm text-accent-foreground">{platform.idealFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Certified QuickBooks ProAdvisors
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our team holds the highest QuickBooks certifications, ensuring you receive expert-level service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card">
                  <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-medium text-foreground text-sm leading-tight">{cert}</h4>
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
                Ready to Optimize Your QuickBooks?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our certified QuickBooks ProAdvisors handle your bookkeeping while you focus on growing your business.
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

export default QuickBooksServices; 