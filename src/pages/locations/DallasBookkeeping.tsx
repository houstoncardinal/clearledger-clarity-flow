import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  getLocalBusinessSchema,
  getEnhancedBreadcrumbSchema,
  getProfessionalServiceSchema,
  COMPANY_INFO 
} from '@/utils/advancedSchemaMarkup';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MapPin, CheckCircle, ArrowRight, Phone, Shield, Clock, 
  TrendingUp, Users, Briefcase, Building2, Star, Sparkles, 
  Award, Zap, Calculator, FileText, BarChart3, DollarSign,
  BookOpen, Landmark, Scale
} from 'lucide-react';

const DallasBookkeeping = () => {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${COMPANY_INFO.url}/dallas-bookkeeping#service`,
      "name": "ClearLedger Solutions - Best Bookkeeping Company in Dallas, TX | Bookkeeping Dallas",
      "description": "ClearLedger Solutions is the best bookkeeping company in Dallas, TX. Certified QuickBooks ProAdvisor and CPA-level expertise serving Dallas-Fort Worth businesses with bookkeeping, monthly reconciliation, accounts payable, tax preparation, and financial reporting. Bookkeeping Dallas specialists.",
      "url": `${COMPANY_INFO.url}/dallas-bookkeeping`,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "image": COMPANY_INFO.image,
      "logo": COMPANY_INFO.logo,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.7767",
        "longitude": "-96.7970"
      },
      "areaServed": [
        { "@type": "City", "name": "Dallas", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Fort Worth", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Plano", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Irving", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Arlington", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Frisco", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "McKinney", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Garland", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Richardson", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Mesquite", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Denton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Carrollton", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Lewisville", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Allen", "containedInPlace": { "@type": "State", "name": "Texas" } }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dallas Bookkeeping Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "QuickBooks Setup & Training Dallas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly Bookkeeping Dallas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Reconciliation Dallas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tax Preparation Dallas TX" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accounts Payable Management Dallas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Financial Reporting Dallas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Services Dallas TX" } }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Dallas Business Owner" },
          "reviewBody": "ClearLedger transformed our bookkeeping. Their QuickBooks expertise saved us thousands in Dallas."
        }
      ],
      "sameAs": COMPANY_INFO.socialProfiles,
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday"], "opens": "07:30", "closes": "16:30" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "07:30", "closes": "13:00" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a bookkeeper cost in Dallas, TX?",
          "acceptedAnswer": { "@type": "Answer", "text": "Bookkeeping services in Dallas typically range from $299-$999/month depending on transaction volume and complexity. ClearLedger Solutions offers competitive pricing with packages starting at $299/month for small businesses." }
        },
        {
          "@type": "Question",
          "name": "Do I need a bookkeeper for my Dallas small business?",
          "acceptedAnswer": { "@type": "Answer", "text": "If your Dallas business has more than 20 transactions per month, operates in multiple revenue streams, or needs to comply with Texas franchise tax requirements, professional bookkeeping can save you time, money, and potential penalties." }
        },
        {
          "@type": "Question",
          "name": "What bookkeeping services does ClearLedger offer in Dallas?",
          "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger Solutions offers comprehensive bookkeeping services in Dallas including QuickBooks setup and training, monthly reconciliation, accounts payable/receivable, payroll processing, Texas franchise tax compliance, financial reporting, and cash flow management." }
        },
        {
          "@type": "Question",
          "name": "Can ClearLedger help with QuickBooks in Dallas?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! ClearLedger Solutions is a Certified QuickBooks ProAdvisor serving Dallas businesses. We offer QuickBooks Online and Desktop setup, training, troubleshooting, and ongoing management." }
        },
        {
          "@type": "Question",
          "name": "Does ClearLedger serve all of Dallas-Fort Worth?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, ClearLedger Solutions serves the entire Dallas-Fort Worth metroplex including Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, Irving, Richardson, Garland, Denton, Carrollton, Lewisville, Allen, and surrounding areas." }
        }
      ]
    },
    getEnhancedBreadcrumbSchema([
      { name: "Locations", url: "/services" },
      { name: "Texas", url: "/texas-bookkeeping" },
      { name: "Dallas Bookkeeping", url: "/dallas-bookkeeping" }
    ])
  ];

  const neighborhoods = [
    'Downtown Dallas', 'Uptown', 'Deep Ellum', 'Bishop Arts District',
    'Oak Lawn', 'Highland Park', 'University Park', 'Lakewood',
    'Preston Hollow', 'North Dallas', 'Far North Dallas', 'Lake Highlands'
  ];

  const dfwCities = [
    { name: 'Dallas', pop: '1.3M+' },
    { name: 'Fort Worth', pop: '950K+' },
    { name: 'Arlington', pop: '400K+' },
    { name: 'Plano', pop: '290K+' },
    { name: 'Irving', pop: '260K+' },
    { name: 'Frisco', pop: '220K+' },
    { name: 'McKinney', pop: '200K+' },
    { name: 'Garland', pop: '240K+' },
    { name: 'Richardson', pop: '120K+' },
    { name: 'Denton', pop: '150K+' },
    { name: 'Carrollton', pop: '140K+' },
    { name: 'Lewisville', pop: '115K+' },
    { name: 'Allen', pop: '110K+' },
    { name: 'Mesquite', pop: '150K+' },
    { name: 'Grand Prairie', pop: '200K+' },
    { name: 'Flower Mound', pop: '80K+' }
  ];

  const industries = [
    { icon: Building2, name: 'Real Estate & Property Management', desc: 'Rental income tracking, 1099 management, and investor reporting for Dallas real estate professionals and property managers.' },
    { icon: Briefcase, name: 'Technology & Startups', desc: 'Fast-paced financial management for Dallas tech companies, SaaS businesses, and startup ecosystems in the Telecom Corridor.' },
    { icon: Landmark, name: 'Professional Services', desc: 'Law firms, consulting agencies, medical practices, and professional service firms across Dallas-Fort Worth.' },
    { icon: DollarSign, name: 'Retail & E-Commerce', desc: 'Multi-channel inventory management, sales tax compliance, and POS integration for Dallas retailers.' },
    { icon: Scale, name: 'Construction & Contractors', desc: 'Job costing, contractor payments, lien waivers, and Texas construction compliance for DFW builders.' },
    { icon: BarChart3, name: 'Restaurants & Hospitality', desc: 'Food cost analysis, tip reporting, payroll compliance, and multi-location management for Dallas restaurants.' }
  ];

  const services = [
    { icon: Calculator, title: 'QuickBooks Setup & Training', desc: 'Expert QuickBooks Online & Desktop configuration tailored for Dallas businesses, with hands-on training for your team.' },
    { icon: FileText, title: 'Monthly Reconciliation', desc: 'Precise bank and credit card reconciliation ensuring your Dallas business books are always accurate and audit-ready.' },
    { icon: BarChart3, title: 'Financial Reporting', desc: 'Custom P&L statements, balance sheets, and cash flow reports giving you clear visibility into your Dallas operations.' },
    { icon: DollarSign, title: 'Accounts Payable & Receivable', desc: 'Streamlined invoice processing, bill payments, and collections management to optimize your cash flow.' },
    { icon: Shield, title: 'Texas Franchise Tax Compliance', desc: 'Expert preparation and filing of Texas franchise tax returns, margin calculations, and EZ computation analysis.' },
    { icon: BookOpen, title: 'Payroll Processing', desc: 'Full-service payroll including federal, state, and local tax filings, direct deposit, and W-2/1099 preparation.' },
    { icon: TrendingUp, title: 'Cash Flow Management', desc: 'Proactive cash flow forecasting and management strategies to keep your Dallas business financially healthy.' },
    { icon: Users, title: 'Financial Cleanup & Catch-Up', desc: 'Behind on your books? We\'ll get your Dallas business financials organized, reconciled, and current.' }
  ];

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '10+', label: 'Years Experience' },
    { value: '99%', label: 'Client Retention' },
    { value: '24hr', label: 'Response Time' },
  ];

  const faqs = [
    { q: 'How much does a bookkeeper cost in Dallas, TX?', a: 'Bookkeeping services in Dallas typically range from $299-$999/month depending on transaction volume and complexity. ClearLedger Solutions offers competitive pricing with packages starting at $299/month for small businesses, with custom quotes for larger operations.' },
    { q: 'Do I need a bookkeeper for my Dallas small business?', a: 'If your Dallas business has more than 20 transactions per month, operates in multiple revenue streams, or needs to comply with Texas franchise tax requirements, professional bookkeeping can save you time, money, and potential tax penalties. Most Dallas business owners find that outsourcing bookkeeping is more cost-effective than hiring in-house.' },
    { q: 'What QuickBooks services do you offer in Dallas?', a: 'We are Certified QuickBooks ProAdvisors serving Dallas and the entire DFW metroplex. We offer QuickBooks Online and Desktop setup, migration, training, troubleshooting, data cleanup, and ongoing monthly management. We can also integrate your QuickBooks with payroll, payment processors, and inventory systems.' },
    { q: 'Does ClearLedger serve all of Dallas-Fort Worth?', a: 'Yes! We serve the entire DFW metroplex including Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, Irving, Richardson, Garland, Denton, Carrollton, Lewisville, Allen, Mesquite, Grand Prairie, Flower Mound, and all surrounding areas.' },
    { q: 'Can you help with Texas franchise tax in Dallas?', a: 'Absolutely. Our Dallas bookkeeping team specializes in Texas franchise tax compliance including annual report preparation, margin calculation optimization, EZ computation eligibility review, multi-state apportionment, and extension filing.' },
    { q: 'How quickly can you start managing my Dallas business books?', a: 'We can typically onboard new Dallas clients within 1-2 business days. We\'ll review your current books, set up or optimize your QuickBooks, and begin managing your finances immediately. Most clients see their first reconciled month within 5 business days.' }
  ];

  return (
    <>
      <SEO 
        title="Best Bookkeeping Company in Dallas, TX | Bookkeeping Dallas | ClearLedger"
        description="Best bookkeeping company in Dallas, Texas. ClearLedger Solutions is the #1 rated bookkeeping company in Dallas TX — CPA-level expertise, QuickBooks ProAdvisor, 500+ clients. Bookkeeping Dallas specialists. Call (903) 815-9488."
        keywords="best bookkeeping company in dallas, bookkeeping dallas, bookkeeping company in dallas tx, CPA in Dallas TX, best bookkeeping company in dallas texas, top bookkeeping company in dallas texas, dallas bookkeeping, bookkeeping services dallas, bookkeeper dallas tx, bookkeeping company dallas, dallas tx bookkeeping firm, QuickBooks ProAdvisor Dallas, small business bookkeeper dallas, outsourced bookkeeping dallas, accounting bookkeeping dallas tx"
        canonical="/dallas-bookkeeping"
        schema={schemas}
      />
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 overflow-hidden">
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
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary tracking-wide">#1 Bookkeeping Company in Dallas TX</span>
                  </div>
                  
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.05]">
                    #1 Bookkeeping{' '}
                    <span className="text-gradient">Company</span>
                    <br />
                    in Dallas, TX
                  </h1>
                  
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl">
                    ClearLedger Solutions is the top-rated bookkeeping company in Dallas, Texas — trusted by 500+ businesses across Dallas-Fort Worth. Certified QuickBooks ProAdvisor providing full-service bookkeeping, tax compliance, and financial management.
                  </p>

                  <div className="flex items-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm font-medium text-muted-foreground ml-2">4.9/5 from 47+ reviews</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: Award, text: 'Top 25 ProAdvisor' },
                      { icon: MapPin, text: 'All DFW Cities' },
                      { icon: Shield, text: 'TX Tax Experts' },
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
                        Free Dallas Consultation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <a href="tel:+19038159488">
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
                  <div className="card-premium p-8 lg:p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="icon-container">
                        <Building2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">Dallas-Fort Worth Cities</h3>
                        <p className="text-sm text-muted-foreground">Serving 7.6M+ in the DFW Metroplex</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {dfwCities.slice(0, 12).map((city, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                          className="flex items-center justify-between gap-2 p-3 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground">{city.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{city.pop}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
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

        {/* Services Section */}
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
                <span className="text-sm font-medium text-primary">Dallas Bookkeeping Services</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
                Why Dallas Businesses Choose Our{' '}
                <span className="text-gradient">Bookkeeping Company</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From startups in Deep Ellum to enterprises in Uptown, we deliver comprehensive bookkeeping solutions tailored to Dallas's dynamic business landscape.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
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
                Dallas Industry{' '}
                <span className="text-gradient">Specializations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Deep expertise in the industries that drive the Dallas-Fort Worth economy.
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
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{industry.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dallas Neighborhoods */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Serving Every{' '}
                <span className="text-gradient">Dallas Neighborhood</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're in Uptown, Deep Ellum, or North Dallas — your books are in expert hands.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {neighborhoods.map((hood, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{hood}</span>
                </motion.div>
              ))}
            </div>

            {/* Additional DFW cities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                Also Serving Across the DFW Metroplex
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {dfwCities.map((city, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
                    <span className="text-sm font-medium text-foreground">{city.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Texas Franchise Tax Compliance */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle"></div>
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 lg:p-14">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-primary"></div>
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <div className="icon-container w-16 h-16">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl lg:text-4xl font-bold text-foreground mb-4">
                    Texas Franchise Tax Compliance for Dallas Businesses
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Don't risk penalties. Our Dallas team ensures your Texas franchise tax is filed accurately and on time.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Annual report preparation & filing',
                    'Margin calculation optimization',
                    'Filing deadline management',
                    'EZ computation eligibility review',
                    'Multi-state apportionment analysis',
                    'Extension filing assistance',
                    'Revenue threshold monitoring',
                    'Penalty avoidance strategies'
                  ].map((item, index) => (
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

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Dallas Bookkeeping{' '}
                <span className="text-gradient">FAQ</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Common questions from Dallas business owners about our bookkeeping services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose ClearLedger for Dallas */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle"></div>
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Dallas Businesses Choose{' '}
                <span className="text-gradient">ClearLedger</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: 'Award-Winning', desc: 'Top 25 Up-N-Coming QuickBooks ProAdvisor 2024-2025' },
                { icon: Clock, title: 'Fast Turnaround', desc: 'Same-day response and 24-hour turnaround on all requests' },
                { icon: MapPin, title: 'DFW Local Experts', desc: 'Deep understanding of Dallas business landscape and TX compliance' },
                { icon: Users, title: 'Dedicated Team', desc: 'Personal attention — never outsourced to overseas teams' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="card-premium p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-primary"></div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Ready to Simplify Your Dallas Business Finances?
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Join 500+ businesses across Dallas-Fort Worth who trust ClearLedger with their bookkeeping. Get your free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="btn-primary text-base px-12 py-6 group">
                      Get Free Dallas Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="tel:+19038159488">
                    <Button size="lg" variant="outline" className="btn-secondary text-base px-12 py-6">
                      <Phone className="w-4 h-4 mr-2" />
                      (903) 815-9488
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Internal Linking SEO Section */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
                Explore Our Bookkeeping Services
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/quickbooks-services" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">QuickBooks Services</span>
                </Link>
                <Link to="/monthly-management" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">Monthly Management</span>
                </Link>
                <Link to="/billing-accounts-payable" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">Accounts Payable</span>
                </Link>
                <Link to="/texas-bookkeeping" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">Texas Bookkeeping</span>
                </Link>
                <Link to="/cleanup-advisory" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">Cleanup & Advisory</span>
                </Link>
                <Link to="/bookkeeping" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">Bookkeeping Hub</span>
                </Link>
                <Link to="/consultation" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">Free Consultation</span>
                </Link>
                <Link to="/blog" className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all text-center">
                  <span className="text-sm font-medium text-foreground">Bookkeeping Blog</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DallasBookkeeping;
