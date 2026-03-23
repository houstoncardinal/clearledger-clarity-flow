import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, UtensilsCrossed, DollarSign, Users, Clock, BarChart3, Shield, MapPin } from 'lucide-react';

const RestaurantBookkeeping = () => {
  const breadcrumbs = [
    { name: "Industries", url: "/industries" },
    { name: "Restaurant Bookkeeping", url: "/restaurant-bookkeeping" }
  ];

  const services = [
    'POS System Integration & Reconciliation',
    'Daily Sales & Deposit Tracking',
    'Food & Beverage Cost Analysis',
    'Tip Reporting & Compliance',
    'Payroll for Tipped Employees',
    'Vendor Payment Management',
    'Sales Tax Tracking & Filing',
    'Menu Profitability Analysis'
  ];

  const challenges = [
    { title: 'High Transaction Volume', description: 'Hundreds of daily transactions from POS systems, delivery apps, and catering orders need accurate recording.', icon: BarChart3 },
    { title: 'Food Cost Management', description: 'Tracking food costs, waste, and inventory turnover to maintain target margins of 28-35%.', icon: DollarSign },
    { title: 'Tip Compliance', description: 'IRS tip reporting requirements, tip pooling calculations, and minimum wage compliance for tipped employees.', icon: Shield },
    { title: 'Multiple Revenue Streams', description: 'Dine-in, takeout, delivery apps (DoorDash, UberEats), catering, and merchandise all need separate tracking.', icon: Clock }
  ];

  const serviceAreas = ['Dallas-Fort Worth', 'Texas', 'Oklahoma', 'Louisiana', 'Florida', 'Mississippi', 'New Mexico', 'Panama'];

  const process = [
    { name: 'POS Audit', text: 'We review your current POS system, delivery app integrations, and identify gaps in financial tracking.' },
    { name: 'System Configuration', text: 'Set up QuickBooks with restaurant-specific chart of accounts, categories, and automated bank feeds.' },
    { name: 'Daily Reconciliation', text: 'Automated matching of POS sales reports with bank deposits to catch discrepancies immediately.' },
    { name: 'Monthly Reporting', text: 'Detailed P&L by location, food cost analysis, labor percentage reports, and cash flow forecasting.' }
  ];

  const reviews = [
    { author: 'Maria Santos', rating: 5, review: 'ClearLedger transformed our restaurant finances. We finally understand our true food costs and which menu items are most profitable.', datePublished: '2025-02-15' },
    { author: 'David Kim', rating: 5, review: 'Managing three locations was a nightmare until ClearLedger took over. Now I get consolidated reports that actually make sense.', datePublished: '2025-01-20' }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does restaurant bookkeeping cost?", "acceptedAnswer": { "@type": "Answer", "text": "Restaurant bookkeeping services typically range from $500-$2,000/month depending on transaction volume, number of locations, and complexity. ClearLedger serves restaurants across Dallas, Texas, Oklahoma, Louisiana, Florida, and more with competitive industry-specific pricing." } },
      { "@type": "Question", "name": "Do you integrate with restaurant POS systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ClearLedger integrates with all major POS systems including Toast, Square, Clover, Lightspeed, and Aloha. We also reconcile delivery app payments from DoorDash, UberEats, and Grubhub." } },
      { "@type": "Question", "name": "How do you handle tip reporting for restaurants?", "acceptedAnswer": { "@type": "Answer", "text": "We ensure full IRS compliance with tip reporting including Form 8027, tip allocation calculations, and proper payroll processing for tipped employees to avoid costly penalties." } },
      { "@type": "Question", "name": "What states do you serve for restaurant bookkeeping?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger provides restaurant bookkeeping services across Texas (including Dallas-Fort Worth), Oklahoma, Louisiana, Florida, Mississippi, New Mexico, and Panama. We handle state-specific sales tax and compliance requirements for each location." } }
    ]
  };

  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({
      name: "Restaurant & Food Service Bookkeeping | ClearLedger Solutions",
      description: "Specialized bookkeeping for restaurants, bars, cafes, and food service businesses. POS integration, food cost tracking, tip reporting, and payroll compliance. Serving Dallas TX & nationwide.",
      url: "/restaurant-bookkeeping",
      category: "Restaurant Bookkeeping"
    }),
    getEnhancedBreadcrumbSchema(breadcrumbs),
    getLocalBusinessSchema(),
    faqSchema,
    getHowToSchema({ name: "How to Set Up Restaurant Bookkeeping", description: "ClearLedger's process for implementing restaurant financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO
        title="Restaurant Bookkeeping Services | POS, Food Cost & Tips | ClearLedger"
        description="Expert restaurant bookkeeping nationwide. POS integration, food cost tracking, tip reporting, payroll compliance & multi-location management. Serving Dallas TX, Oklahoma, Louisiana, Florida & more. Call (903) 815-9488."
        keywords="restaurant bookkeeping, food service accounting, POS reconciliation, tip reporting, restaurant payroll, food cost tracking, bar bookkeeping, cafe accounting, restaurant bookkeeping Dallas, restaurant bookkeeping Texas"
        canonical="/restaurant-bookkeeping"
        schema={pageSchema}
      />
      <Header />

      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm">
                <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-accent-foreground">Restaurant & Food Service Bookkeeping</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Expert{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                  Restaurant Bookkeeping
                </span>
                {' '}Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                From POS reconciliation to tip compliance, ClearLedger handles the unique financial complexities of restaurants, 
                bars, cafes, food trucks, and catering companies across Dallas-Fort Worth, Texas, and nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Restaurant Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link>
                <a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" /> {COMPANY_INFO.phoneLocal}</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">Restaurant Bookkeeping Services</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">Comprehensive financial management built for the food service industry.</p><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s, i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>

        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Restaurant Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c, i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>

        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Restaurant Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step, i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i + 1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>

        {/* Service Areas */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Serving Restaurants Nationwide</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {serviceAreas.map((area, i) => (
                <div key={i} className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-card">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Restaurant Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq, i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>

        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Streamline Your Restaurant Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join restaurants across the country that trust ClearLedger for accurate, stress-free bookkeeping.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default RestaurantBookkeeping;
