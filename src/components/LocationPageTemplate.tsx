import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getServiceSchema, getBreadcrumbSchema } from '@/utils/schemaMarkup';
import { motion } from 'framer-motion';
import { 
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Briefcase,
  Building2,
  Star
} from 'lucide-react';

interface LocationPageProps {
  state: string;
  stateAbbr: string;
  slug: string;
  tagline: string;
  description: string;
  cities: string[];
  industries: { name: string; description: string }[];
  services: string[];
  specialCompliance?: { title: string; items: string[] };
  metaDescription: string;
  metaKeywords: string;
}

const LocationPageTemplate = ({
  state,
  stateAbbr,
  slug,
  tagline,
  description,
  cities,
  industries,
  services,
  specialCompliance,
  metaDescription,
  metaKeywords
}: LocationPageProps) => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/services" },
    { name: `${state} Bookkeeping`, url: `/${slug}` }
  ];

  const whyChooseUs = [
    { icon: MapPin, title: `${stateAbbr}-Based Team`, description: `Local expertise with deep ${state} business knowledge` },
    { icon: Clock, title: 'Fast Response', description: 'Same-day turnaround on all requests' },
    { icon: TrendingUp, title: 'Growth Focused', description: `Strategic insights for ${state} business growth` },
    { icon: Users, title: 'Dedicated Team', description: 'Personal attention from your bookkeeping team' },
  ];

  return (
    <>
      <SEO 
        title={`${state} Bookkeeping Services | ClearLedger Solutions - Professional Financial Management`}
        description={metaDescription}
        keywords={metaKeywords}
        canonical={`/${slug}`}
        schema={[
          getServiceSchema(`${state} Bookkeeping Services`, description),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="location-hero pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-left"
                >
                  <div className="badge-premium mb-6">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{state} Bookkeeping</span>
                  </div>
                  
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Expert{' '}
                    <span className="text-gradient">
                      {state} Bookkeeping
                    </span>
                    {' '}Services
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                    {tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      `${stateAbbr} Tax Experts`,
                      'All Major Cities',
                      'Certified ProAdvisors',
                      'Same-Day Support'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button size="lg" className="btn-primary text-base px-8 py-5 w-full sm:w-auto">
                        Get Started Today
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <a href="tel:(903) 815-9488">
                      <Button size="lg" variant="outline" className="btn-secondary text-base px-8 py-5 w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        (903) 815-9488
                      </Button>
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="card-premium p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="icon-container-sm">
                        <Building2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{state} Cities We Serve</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {cities.map((city, index) => (
                        <div key={index} className="location-card flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                Complete Bookkeeping Services for{' '}
                <span className="text-gradient">{state} Businesses</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {services.map((service, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm">{service}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 lg:py-20 section-gradient">
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                Industry Expertise Across{' '}
                <span className="text-gradient">{state}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand the unique financial needs of {state}'s diverse economy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium group"
                >
                  <div className="icon-container-outline mb-4 group-hover:border-primary/40 group-hover:bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Compliance Section */}
        {specialCompliance && (
          <section className="py-16 lg:py-20 bg-background">
            <div className="container">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="card-premium text-center">
                  <div className="flex justify-center mb-6">
                    <div className="icon-container">
                      <Shield className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {specialCompliance.title}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    We ensure your business stays compliant with {state} tax requirements.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    {specialCompliance.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-accent/30">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section */}
        <section className="py-16 lg:py-20 section-gradient">
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
                Why {state} Businesses{' '}
                <span className="text-gradient">Choose ClearLedger</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 card-premium"
                >
                  <div className="flex justify-center mb-4">
                    <div className="icon-container">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cta-section text-center text-primary-foreground"
            >
              <div className="flex justify-center mb-6 relative z-10">
                <div className="flex -space-x-2">
                  {[Star, Star, Star, Star, Star].map((Icon, i) => (
                    <Icon key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4 relative z-10">
                Ready to Grow Your {state} Business?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto relative z-10">
                Join hundreds of {state} businesses who trust ClearLedger for their bookkeeping needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link to="/contact">
                  <Button size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold px-8 py-5 rounded-2xl shadow-lg">
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:(903) 815-9488">
                  <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-5 rounded-2xl">
                    Call (903) 815-9488
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LocationPageTemplate;
