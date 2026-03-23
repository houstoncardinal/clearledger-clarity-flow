import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, Building2, DollarSign, Shield, Clock, BarChart3 } from 'lucide-react';

const RealEstateBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Real Estate Bookkeeping", url: "/real-estate-bookkeeping" }];
  const services = ['Trust Account Management', 'Rent Roll Reconciliation', 'Owner Distribution Calculations', 'Property Expense Tracking', '1099 Preparation for Owners', 'CAM Reconciliation', 'Security Deposit Tracking', 'Real Estate Tax Planning'];
  const challenges = [
    { title: 'Trust Accounting', description: 'Strict state regulations require accurate separation of trust funds from operating accounts.', icon: Shield },
    { title: 'Multi-Property Management', description: 'Track income, expenses, and profitability across dozens or hundreds of properties.', icon: BarChart3 },
    { title: 'Owner Reporting', description: 'Monthly owner statements, year-end 1099s, and distribution calculations for each property owner.', icon: DollarSign },
    { title: 'Tenant Turnover', description: 'Security deposits, move-in/move-out costs, and vacancy tracking impact cash flow planning.', icon: Clock }
  ];
  const process = [
    { name: 'Portfolio Review', text: 'Analyze your property portfolio, current accounting setup, and identify compliance gaps.' },
    { name: 'Trust Account Setup', text: 'Configure proper trust accounting in QuickBooks with separate tracking for each owner.' },
    { name: 'Automated Tracking', text: 'Set up automated rent collection tracking, expense categorization, and bank reconciliation.' },
    { name: 'Monthly Reporting', text: 'Detailed property P&L, owner statements, occupancy reports, and cash flow analysis.' }
  ];
  const reviews = [
    { author: 'Sarah Johnson', rating: 5, review: 'ClearLedger handles our trust accounting perfectly across 47 properties. Owner statements are always on time.', datePublished: '2025-02-28' },
    { author: 'Mark Williams', rating: 5, review: 'Finally found a bookkeeper who understands real estate. Their property-level reporting saved us during tax season.', datePublished: '2025-01-05' }
  ];

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do you handle trust accounting for property managers in Dallas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ClearLedger provides compliant trust accounting services for property management companies, ensuring proper separation of owner funds per Texas Real Estate Commission requirements." } },
      { "@type": "Question", "name": "Can you manage bookkeeping for multiple rental properties?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We track income, expenses, and profitability at the individual property level while providing consolidated portfolio reporting. We currently manage portfolios from 5 to 200+ properties." } },
      { "@type": "Question", "name": "Do you prepare 1099s for property owners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we prepare year-end 1099-MISC forms for all property owners and ensure proper reporting of rental income distributions." } }
    ]
  };

  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Real Estate Bookkeeping Services Dallas TX", description: "Trust accounting, rent tracking, and property management bookkeeping in Dallas TX.", url: "/real-estate-bookkeeping", category: "Real Estate Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Real Estate Bookkeeping", description: "ClearLedger's process for property management accounting.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Real Estate Bookkeeping Dallas TX | Trust Accounting & Property Management | ClearLedger" description="Expert real estate bookkeeping in Dallas TX. Trust accounting, rent roll management, owner distributions, 1099 preparation & CAM reconciliation. Call (903) 815-9488." keywords="real estate bookkeeping Dallas TX, property management accounting, trust accounting Texas, rent roll management, real estate 1099, landlord bookkeeping, property manager bookkeeper" canonical="/real-estate-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Real Estate & Property Management</span></div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Dallas TX{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Real Estate Bookkeeping</span>{' '}Experts</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">Trust accounting, rent roll management, and property-level financial reporting for real estate professionals across Dallas-Fort Worth.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Real Estate Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
          </div></div>
        </section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Real Estate Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Real Estate Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Real Estate Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Real Estate Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Simplify Your Property Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join Dallas real estate professionals who trust ClearLedger.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default RealEstateBookkeeping;
