import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';
import { 
  Calculator, 
  CheckCircle, 
  MapPin,
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Briefcase,
  Globe,
  DollarSign
} from 'lucide-react';

const PanamaBookkeeping = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/services" },
    { name: "Panama Bookkeeping", url: "/panama-bookkeeping" }
  ];

  const regions = [
    'Panama City',
    'Colon',
    'David',
    'Bocas del Toro',
    'Chiriqui',
    'Panama Pacifico',
    'Colon Free Zone',
    'Tocumen'
  ];

  const industries = [
    { name: 'International Trade', description: 'Import/export, logistics, and Colon Free Zone business bookkeeping' },
    { name: 'Tourism & Hospitality', description: 'Hotels, resorts, tour operators, and vacation rental financial management' },
    { name: 'Real Estate', description: 'Property development, management, and international investment tracking' },
    { name: 'Banking & Finance', description: 'Financial services, investment firms, and multi-currency accounting' },
    { name: 'Maritime Services', description: 'Shipping companies, port services, and canal-related business bookkeeping' },
    { name: 'Expatriate Business', description: 'US expatriate businesses and cross-border financial management' }
  ];

  const services = [
    'QuickBooks Online Management',
    'Multi-Currency Bookkeeping',
    'US & Panama Tax Coordination',
    'Bank & Credit Card Reconciliation',
    'Accounts Payable & Receivable',
    'Financial Statement Preparation',
    'Cross-Border Transaction Tracking',
    'Expatriate Financial Compliance'
  ];

  return (
    <>
      <SEO 
        title="Panama Bookkeeping Services | ClearLedger Solutions - Panama City & Beyond"
        description="Professional bookkeeping services for Panama businesses and US expatriates. Expert multi-currency management, QuickBooks services, and cross-border financial compliance for Panama City and nationwide."
        keywords="Panama bookkeeping, Panama City bookkeeper, US expatriate bookkeeping Panama, QuickBooks Panama, multi-currency bookkeeping, Colon Free Zone bookkeeping"
        canonical="/panama-bookkeeping"
        schema={[
          getServiceSchema("Panama Bookkeeping Services", "Professional bookkeeping and financial management services for Panama businesses and US expatriates including multi-currency management and cross-border compliance."),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-accent-foreground whitespace-nowrap">
                      Panama Bookkeeping
                    </span>
                  </div>
                  
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Professional{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                      Panama Bookkeeping
                    </span>
                    {' '}Services
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    Serving Panama businesses and US expatriates with expert multi-currency bookkeeping, 
                    QuickBooks management, and cross-border financial compliance.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Multi-Currency</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">US Tax Compliance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Certified ProAdvisors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Expatriate Services</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                        Get Started Today
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href="tel:(903) 815-9488" className="w-full sm:w-auto">
                      <Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        (903) 815-9488
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">Panama Regions We Serve</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {regions.map((region, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-card rounded-lg p-3 shadow-sm">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">{region}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Complete Bookkeeping Services for Panama
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From international trade companies to US expatriate businesses, we provide comprehensive 
                financial management tailored to Panama's unique business environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Industry Expertise in Panama
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand the unique financial needs of Panama's international business hub.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300">
                  <Briefcase className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-Currency & Cross-Border Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-premium">
                <div className="text-center mb-8">
                  <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Multi-Currency & Cross-Border Expertise
                  </h2>
                  <p className="text-muted-foreground">
                    Specialized bookkeeping for international operations and expatriate businesses.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">USD/Balboa dual currency tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">International wire reconciliation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">FBAR compliance support</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">US tax coordination</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Foreign entity reporting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Cross-border transaction tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Panama Businesses Choose ClearLedger
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">International Expertise</h3>
                <p className="text-sm text-muted-foreground">Cross-border financial management specialists</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Time Zone Aligned</h3>
                <p className="text-sm text-muted-foreground">Convenient communication across time zones</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Growth Partner</h3>
                <p className="text-sm text-muted-foreground">Strategic insights for international expansion</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Bilingual Team</h3>
                <p className="text-sm text-muted-foreground">English and Spanish language support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 shadow-premium text-center">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Streamline Your Panama Business Finances?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join businesses across Panama who trust ClearLedger for their international bookkeeping needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-base px-6 py-3">
                    Schedule Free Consultation
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

export default PanamaBookkeeping;