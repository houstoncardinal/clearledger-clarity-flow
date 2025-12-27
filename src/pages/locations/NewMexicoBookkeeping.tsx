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
  Mountain
} from 'lucide-react';

const NewMexicoBookkeeping = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/services" },
    { name: "New Mexico Bookkeeping", url: "/new-mexico-bookkeeping" }
  ];

  const cities = [
    'Albuquerque',
    'Santa Fe',
    'Las Cruces',
    'Rio Rancho',
    'Roswell',
    'Farmington',
    'Clovis',
    'Los Alamos'
  ];

  const industries = [
    { name: 'Energy & Mining', description: 'Oil, gas, and mineral extraction bookkeeping and royalty tracking' },
    { name: 'Tourism & Hospitality', description: 'Hotels, restaurants, and cultural tourism business financial management' },
    { name: 'Agriculture & Ranching', description: 'Farm, ranch, and agricultural operation bookkeeping' },
    { name: 'Healthcare', description: 'Medical practices, clinics, and healthcare facility accounting' },
    { name: 'Technology & Research', description: 'Tech startups and research laboratory financial management' },
    { name: 'Arts & Culture', description: 'Galleries, artists, and cultural organization bookkeeping' }
  ];

  const services = [
    'QuickBooks Online & Desktop Management',
    'Monthly Financial Statement Preparation',
    'Bank & Credit Card Reconciliation',
    'Accounts Payable & Receivable',
    'New Mexico Gross Receipts Tax',
    'Payroll Processing & Tax Filing',
    'Cash Flow Management',
    'Multi-Location Financial Consolidation'
  ];

  return (
    <>
      <SEO 
        title="New Mexico Bookkeeping Services | ClearLedger Solutions - Albuquerque & Santa Fe"
        description="Professional bookkeeping services for New Mexico businesses. Expert QuickBooks management, gross receipts tax compliance, and financial reporting for Albuquerque, Santa Fe, and statewide."
        keywords="New Mexico bookkeeping, Albuquerque bookkeeper, Santa Fe bookkeeping services, QuickBooks New Mexico, gross receipts tax, small business bookkeeping NM"
        canonical="/new-mexico-bookkeeping"
        schema={[
          getServiceSchema("New Mexico Bookkeeping Services", "Professional bookkeeping and financial management services for New Mexico businesses including QuickBooks management, gross receipts tax compliance, and payroll processing."),
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
                    <Mountain className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-accent-foreground whitespace-nowrap">
                      New Mexico Bookkeeping
                    </span>
                  </div>
                  
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Expert{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                      New Mexico Bookkeeping
                    </span>
                    {' '}Services
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                    Serving the Land of Enchantment with comprehensive bookkeeping, QuickBooks expertise, 
                    and New Mexico gross receipts tax compliance for businesses statewide.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">GRT Tax Experts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Statewide Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Certified ProAdvisors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">Energy Sector</span>
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
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">New Mexico Cities We Serve</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {cities.map((city, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-card rounded-lg p-3 shadow-sm">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">{city}</span>
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
                Complete Bookkeeping Services for New Mexico
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From energy companies to tourism businesses, we provide comprehensive financial management 
                tailored to New Mexico's unique economy.
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
                Industry Expertise in New Mexico
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand the unique financial needs of New Mexico's diverse industries.
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

        {/* Gross Receipts Tax Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-premium">
                <div className="text-center mb-8">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    New Mexico Gross Receipts Tax Compliance
                  </h2>
                  <p className="text-muted-foreground">
                    We navigate New Mexico's unique gross receipts tax system for your business.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Monthly GRT filing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Location-specific tax rates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Deduction optimization</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">NTTC certificate management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">CRS registration assistance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Audit representation</span>
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
                Why New Mexico Businesses Choose ClearLedger
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">GRT Expertise</h3>
                <p className="text-sm text-muted-foreground">Deep knowledge of NM gross receipts tax</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Fast Response</h3>
                <p className="text-sm text-muted-foreground">Same-day turnaround on all requests</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Growth Partner</h3>
                <p className="text-sm text-muted-foreground">Strategic insights for New Mexico business growth</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-card">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Dedicated Team</h3>
                <p className="text-sm text-muted-foreground">Personal attention from your bookkeeping team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 shadow-premium text-center">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Ready to Streamline Your New Mexico Business Finances?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join New Mexico businesses who trust ClearLedger for their bookkeeping needs.
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

export default NewMexicoBookkeeping;