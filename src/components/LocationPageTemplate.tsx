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
  Star,
  Sparkles,
  Award,
  Zap
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

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '10+', label: 'Years Experience' },
    { value: '99%', label: 'Client Retention' },
    { value: '24hr', label: 'Response Time' },
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
        {/* Hero Section - Enhanced Luxury */}
        <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 overflow-hidden">
          {/* Luxury Background Effects */}
          <div className="absolute inset-0 bg-gradient-subtle"></div>
          <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-left"
                >
                  {/* Luxury Badge */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary tracking-wide">Premium {state} Services</span>
                  </div>
                  
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.05]">
                    Expert{' '}
                    <span className="text-gradient">
                      {state}
                    </span>
                    <br />
                    Bookkeeping
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                    {tagline}
                  </p>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: Award, text: `${stateAbbr} Tax Experts` },
                      { icon: MapPin, text: 'All Major Cities' },
                      { icon: Shield, text: 'Certified ProAdvisors' },
                      { icon: Zap, text: 'Same-Day Support' }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/40"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button size="lg" className="btn-primary text-base px-10 py-6 w-full sm:w-auto group">
                        Get Started Today
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <a href="tel:(903) 815-9488">
                      <Button size="lg" variant="outline" className="btn-secondary text-base px-10 py-6 w-full sm:w-auto">
                        <Phone className="w-4 h-4 mr-2" />
                        (903) 815-9488
                      </Button>
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Cities Card - Enhanced */}
                  <div className="card-premium p-8 lg:p-10 relative overflow-hidden">
                    {/* Card Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="icon-container">
                        <Building2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">{state} Cities We Serve</h3>
                        <p className="text-sm text-muted-foreground">Premium service across the state</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {cities.map((city, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors duration-300"
                        >
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">{city}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Stats Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-5 shadow-xl hidden lg:block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">99%</div>
                        <div className="text-sm text-muted-foreground">Client Retention</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 border-y border-border bg-card">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Enhanced */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <span className="text-sm font-medium text-primary">Our Services</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                Complete Bookkeeping for{' '}
                <span className="text-gradient">{state} Businesses</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{service}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Section - Enhanced */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle"></div>
          <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
          
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <span className="text-sm font-medium text-primary">Industry Expertise</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                Specialized Solutions for{' '}
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
                  className="card-service group"
                >
                  <div className="icon-container-outline mb-6 group-hover:border-primary/40 group-hover:bg-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Compliance Section - Enhanced */}
        {specialCompliance && (
          <section className="py-20 lg:py-28 bg-background">
            <div className="container">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <div className="relative overflow-hidden rounded-4xl bg-card border border-border p-10 lg:p-14">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-primary"></div>
                  
                  <div className="text-center mb-10">
                    <div className="flex justify-center mb-6">
                      <div className="icon-container w-16 h-16">
                        <Shield className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h2 className="font-heading text-2xl lg:text-4xl font-bold text-foreground mb-4">
                      {specialCompliance.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We ensure your business stays compliant with {state} tax requirements.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {specialCompliance.items.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-accent/40 border border-border/50"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section - Enhanced */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle"></div>
          <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
          
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
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
                  className="text-center p-8 card-premium"
                >
                  <div className="flex justify-center mb-6">
                    <div className="icon-container">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Fixed Button & Enhanced */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-4xl bg-gradient-hero p-12 lg:p-20 text-center"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="flex -space-x-1">
                    {[Star, Star, Star, Star, Star].map((Icon, i) => (
                      <Icon key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                    ))}
                  </div>
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  Ready to Grow Your {state} Business?
                </h2>
                <p className="text-lg lg:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                  Join hundreds of {state} businesses who trust ClearLedger for their bookkeeping needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="bg-white text-foreground hover:bg-white/90 font-semibold px-10 py-6 rounded-2xl shadow-2xl text-base group"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="tel:(903) 815-9488">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-white/40 text-primary-foreground hover:bg-white/10 hover:border-white/60 font-semibold px-10 py-6 rounded-2xl backdrop-blur-sm"
                    >
                      Call (903) 815-9488
                    </Button>
                  </a>
                </div>
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
