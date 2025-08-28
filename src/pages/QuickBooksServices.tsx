import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';
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
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "QuickBooks Services", url: "/quickbooks-services" }
  ];

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
            '2024 & 2025 Top 25 Up-N-Coming ProAdvisor'
  ];

  return (
    <>
      <SEO 
        title="QuickBooks Bookkeeping Services | ClearLedger Solutions - Expert QB Online & Desktop"
        description="Professional QuickBooks bookkeeping services for Online and Desktop. Expert transaction categorization, reconciliation, and financial reporting. Save 15+ hours monthly with our certified ProAdvisor team."
        keywords="QuickBooks bookkeeping, QuickBooks Online, QuickBooks Desktop, ProAdvisor, bookkeeping services, financial reconciliation, transaction categorization, QuickBooks setup, QuickBooks training"
        canonical="/quickbooks-services"
        schema={[
          getServiceSchema("QuickBooks Bookkeeping Services", "Professional QuickBooks Online and Desktop bookkeeping services including transaction categorization, account reconciliation, and financial statement preparation."),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Enhanced Hero Section */}
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-left">
                  {/* Service Badge */}
                  <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm">
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-accent-foreground whitespace-nowrap">
                      QuickBooks Services
                    </span>
                  </div>
                  
                  {/* Main Headline */}
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Expert{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                      QuickBooks Bookkeeping
                    </span>
                    <br />
                    Services
                  </h1>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl break-words">
                    Professional QuickBooks Online and Desktop bookkeeping services from certified ProAdvisors. 
                    Save 15+ hours monthly with accurate transaction categorization, reconciliation, and financial reporting.
                  </p>

                  {/* Key Benefits */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Certified ProAdvisors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">15+ Hours Saved Monthly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Online & Desktop</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Real-time Reporting</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

                {/* Right Content - Visual Elements */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-card rounded-xl p-4 shadow-card">
                        <Calculator className="w-8 h-8 text-primary mb-2" />
                                              <h3 className="font-semibold text-sm text-foreground break-words">Transaction Coding</h3>
                      <p className="text-xs text-muted-foreground break-words">Accurate categorization</p>
                      </div>
                                              <div className="bg-card rounded-xl p-4 shadow-card">
                          <BarChart3 className="w-8 h-8 text-primary mb-2" />
                          <h3 className="font-semibold text-sm text-foreground break-words">Reconciliation</h3>
                          <p className="text-xs text-muted-foreground break-words">Bank & credit cards</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 shadow-card">
                          <FileText className="w-8 h-8 text-primary mb-2" />
                          <h3 className="font-semibold text-sm text-foreground break-words">Financial Reports</h3>
                          <p className="text-xs text-muted-foreground break-words">P&L, Balance Sheet</p>
                        </div>
                        <div className="bg-card rounded-xl p-4 shadow-card">
                          <Shield className="w-8 h-8 text-primary mb-2" />
                          <h3 className="font-semibold text-sm text-foreground break-words">Compliance</h3>
                          <p className="text-xs text-muted-foreground break-words">Audit ready</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive QuickBooks Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From basic transaction entry to complex multi-entity management, we handle all aspects of your QuickBooks bookkeeping.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground text-sm leading-relaxed">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Our QuickBooks Services?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                    <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Platforms Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                QuickBooks Online & Desktop Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're certified experts in both QuickBooks Online and Desktop platforms, 
                ensuring you get the best solution for your business needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-premium hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {platform.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent p-3 rounded-lg">
                    <h4 className="font-semibold text-accent-foreground mb-1 text-sm">Ideal For:</h4>
                    <p className="text-xs text-accent-foreground">{platform.idealFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Certifications Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Certified QuickBooks ProAdvisors
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our team holds the highest QuickBooks certifications, ensuring you receive expert-level service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300">
                  {cert.includes('Top 25') ? (
                    <img 
                      src="/top25badge.jpg" 
                      alt="Top 25 Up-N-Coming ProAdvisor Badge" 
                      className="w-8 h-8 mx-auto mb-3 object-contain"
                    />
                  ) : (
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  )}
                  <h4 className="font-medium text-foreground text-xs leading-tight">{cert}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 shadow-premium text-center">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Optimize Your QuickBooks?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let our certified QuickBooks ProAdvisors handle your bookkeeping while you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-base px-6 py-3">
                    Start Your Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:(903) 815-9488">
                  <Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">
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