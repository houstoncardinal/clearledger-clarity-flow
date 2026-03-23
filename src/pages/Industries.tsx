import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  combineSchemas,
  getEnhancedBreadcrumbSchema,
  getLocalBusinessSchema,
  COMPANY_INFO 
} from '@/utils/advancedSchemaMarkup';
import { 
  ArrowRight, 
  Phone,
  UtensilsCrossed,
  HardHat,
  Building2,
  Stethoscope,
  Monitor,
  Factory,
  Flame,
  Hotel,
  Tractor,
  Landmark,
  CheckCircle
} from 'lucide-react';

const industries = [
  {
    title: 'Restaurant & Food Service',
    slug: '/restaurant-bookkeeping',
    icon: UtensilsCrossed,
    description: 'Specialized bookkeeping for restaurants, bars, cafes, food trucks, and catering companies nationwide.',
    features: ['POS Integration', 'Food Cost Tracking', 'Tip Reporting', 'Payroll Management']
  },
  {
    title: 'Construction & Contractors',
    slug: '/construction-bookkeeping',
    icon: HardHat,
    description: 'Job costing, progress billing, and financial management for general contractors and subcontractors.',
    features: ['Job Costing', 'Progress Billing', 'Lien Waiver Tracking', 'Equipment Depreciation']
  },
  {
    title: 'Real Estate & Property Management',
    slug: '/real-estate-bookkeeping',
    icon: Building2,
    description: 'Trust accounting, rent collection tracking, and financial reporting for real estate professionals.',
    features: ['Trust Accounting', 'Rent Roll Management', 'Owner Distributions', '1099 Preparation']
  },
  {
    title: 'Medical & Dental Practices',
    slug: '/medical-bookkeeping',
    icon: Stethoscope,
    description: 'HIPAA-aware financial management for doctors, dentists, clinics, and healthcare providers.',
    features: ['Insurance Reconciliation', 'Patient Billing', 'Payroll Compliance', 'Equipment Tracking']
  },
  {
    title: 'Technology Companies',
    slug: '/technology-bookkeeping',
    icon: Monitor,
    description: 'SaaS revenue recognition, R&D tracking, and startup financial management.',
    features: ['Revenue Recognition', 'R&D Tax Credits', 'SaaS Metrics', 'Investor Reporting']
  },
  {
    title: 'Manufacturing',
    slug: '/manufacturing-bookkeeping',
    icon: Factory,
    description: 'Inventory valuation, cost of goods sold tracking, and production cost analysis.',
    features: ['COGS Tracking', 'Inventory Valuation', 'Bill of Materials', 'Production Costing']
  },
  {
    title: 'Energy & Oil Companies',
    slug: '/energy-bookkeeping',
    icon: Flame,
    description: 'Revenue interest tracking, joint venture accounting, and regulatory compliance for energy companies.',
    features: ['Revenue Interest', 'Joint Venture Accounting', 'Depletion Tracking', 'Regulatory Compliance']
  },
  {
    title: 'Hospitality & Tourism',
    slug: '/hospitality-bookkeeping',
    icon: Hotel,
    description: 'Multi-revenue stream management for hotels, resorts, tour operators, and event venues.',
    features: ['Revenue Management', 'Seasonal Forecasting', 'Event Accounting', 'Occupancy Tracking']
  },
  {
    title: 'Agriculture',
    slug: '/agriculture-bookkeeping',
    icon: Tractor,
    description: 'Farm accounting, crop cost tracking, and agricultural tax planning for farms and ranches.',
    features: ['Crop Cost Tracking', 'Livestock Accounting', 'Farm Tax Planning', 'Equipment Depreciation']
  },
  {
    title: 'Golf Courses & Country Clubs',
    slug: '/golf-course-bookkeeping',
    icon: Landmark,
    description: 'Pro shop inventory, membership billing, tournament accounting, and seasonal cash flow planning.',
    features: ['Membership Billing', 'Pro Shop Inventory', 'Tournament Accounting', 'Seasonal Planning']
  }
];

const serviceAreas = [
  { region: 'Dallas-Fort Worth', cities: ['Dallas', 'Fort Worth', 'Plano', 'Frisco', 'McKinney', 'Arlington'] },
  { region: 'Texas', cities: ['Houston', 'San Antonio', 'Austin', 'El Paso'] },
  { region: 'South Central', cities: ['Oklahoma', 'Louisiana', 'Mississippi', 'New Mexico'] },
  { region: 'Southeast', cities: ['Florida', 'Panama'] }
];

const Industries = () => {
  const breadcrumbs = [
    { name: "Industries", url: "/industries" }
  ];

  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industry-Specific Bookkeeping Services | ClearLedger Solutions",
    "description": "ClearLedger Solutions provides specialized bookkeeping services for 10+ industries across Texas, Oklahoma, Louisiana, Florida, Mississippi, New Mexico, and nationwide.",
    "url": `${COMPANY_INFO.url}/industries`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": industries.map((ind, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": ind.title,
        "url": `${COMPANY_INFO.url}${ind.slug}`
      }))
    },
    "provider": {
      "@type": "ProfessionalService",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.url,
      "telephone": COMPANY_INFO.phone,
      "areaServed": [
        { "@type": "State", "name": "Texas" },
        { "@type": "State", "name": "Oklahoma" },
        { "@type": "State", "name": "Louisiana" },
        { "@type": "State", "name": "Florida" },
        { "@type": "State", "name": "Mississippi" },
        { "@type": "State", "name": "New Mexico" },
        { "@type": "Country", "name": "Panama" }
      ]
    }
  };

  const pageSchema = combineSchemas(
    industriesSchema,
    getEnhancedBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema()
  );

  return (
    <>
      <SEO
        title="Industry-Specific Bookkeeping Services | Dallas TX & Nationwide | ClearLedger"
        description="Specialized bookkeeping for restaurants, construction, real estate, medical, tech, manufacturing, energy, hospitality & agriculture. Serving Dallas, Texas & nationwide. Call (903) 815-9488."
        keywords="industry bookkeeping services, restaurant bookkeeping, construction bookkeeping, real estate bookkeeping, medical bookkeeping, manufacturing bookkeeping, oil gas bookkeeping, agriculture bookkeeping, Dallas bookkeeping, Texas bookkeeping, nationwide bookkeeping"
        canonical="/industries"
        schema={pageSchema}
      />
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-accent-foreground">Industry Expertise • Dallas TX & Nationwide</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Bookkeeping for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  Every Industry
                </span>
                {' '}Nationwide
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Every industry has unique financial challenges. ClearLedger Solutions provides specialized bookkeeping 
                tailored to your industry — serving businesses across Dallas-Fort Worth, Texas, Oklahoma, Louisiana, Florida, Mississippi, New Mexico, and Panama.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    Get Industry-Specific Help
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    <Phone className="w-4 h-4 mr-2" />
                    {COMPANY_INFO.phoneLocal}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link key={industry.slug} to={industry.slug} className="group">
                    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-premium transition-all duration-300 h-full border border-border/50 group-hover:border-primary/30">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h2 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {industry.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.features.map((f, i) => (
                          <div key={i} className="flex items-center space-x-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span className="text-xs text-foreground">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">Where We Serve</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Industry-specific bookkeeping across all our service areas</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceAreas.map((area, i) => (
                <div key={i} className="bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{area.region}</h3>
                  <ul className="space-y-2">
                    {area.cities.map((city, j) => (
                      <li key={j} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 shadow-premium text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-muted-foreground mb-6">
                We serve businesses in every industry across the United States. Contact us to discuss your specific bookkeeping needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary text-base px-6 py-3">
                    Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">
                    Call {COMPANY_INFO.phoneLocal}
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

export default Industries;
