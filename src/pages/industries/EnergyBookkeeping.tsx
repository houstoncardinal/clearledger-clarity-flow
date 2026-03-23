import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, Flame, DollarSign, Shield, Clock, BarChart3, MapPin } from 'lucide-react';

const EnergyBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Energy Bookkeeping", url: "/energy-bookkeeping" }];
  const services = ['Revenue Interest & Royalty Tracking', 'Joint Interest Billing (JIB)', 'Depletion & Depreciation Schedules', 'Lease Operating Expense Tracking', 'AFE (Authorization for Expenditure) Management', 'Severance Tax Calculations', 'Division Order Management', 'Regulatory Compliance Reporting'];
  const serviceAreas = ['Dallas-Fort Worth', 'Texas', 'Oklahoma', 'Louisiana', 'Florida', 'Mississippi', 'New Mexico', 'Panama'];
  const challenges = [
    { title: 'Revenue Interest Accounting', description: 'Tracking working interests, royalty interests, and overriding royalty interests across multiple wells and leases.', icon: DollarSign },
    { title: 'Joint Venture Complexity', description: 'JIB processing, partner billing, and cost allocation among multiple working interest owners.', icon: BarChart3 },
    { title: 'Regulatory Compliance', description: 'Severance taxes, environmental fees, and state/federal reporting requirements vary by jurisdiction.', icon: Shield },
    { title: 'Volatile Revenue', description: 'Commodity price fluctuations create forecasting challenges and require flexible financial management.', icon: Clock }
  ];
  const process = [
    { name: 'Asset Inventory', text: 'Catalog all wells, leases, and mineral interests with their associated working and royalty interests.' },
    { name: 'Revenue Configuration', text: 'Set up revenue distribution tracking, division orders, and automated royalty calculations.' },
    { name: 'Cost Allocation', text: 'Configure JIB processing, AFE tracking, and proper cost allocation across joint ventures.' },
    { name: 'Compliance Reporting', text: 'Monthly revenue reports, severance tax filings, and annual regulatory compliance documentation.' }
  ];
  const reviews = [
    { author: 'Bill Crawford', rating: 5, review: 'ClearLedger handles our JIB processing for 23 wells flawlessly. Partner billing is always accurate and on time.', datePublished: '2025-02-05' },
    { author: 'Teresa Hawkins', rating: 5, review: 'Their understanding of oil & gas accounting is exceptional. Revenue interest tracking across our properties is finally clean.', datePublished: '2025-01-18' }
  ];
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do you handle joint interest billing for oil and gas companies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ClearLedger processes JIBs for operators across Texas, Oklahoma, Louisiana, and New Mexico, properly allocating costs among working interest owners and managing partner billing for multiple wells and leases." } },
      { "@type": "Question", "name": "Can you track revenue interests across multiple wells?", "acceptedAnswer": { "@type": "Answer", "text": "We track working interests, royalty interests, and ORRI across all properties, ensuring accurate revenue distribution and division order compliance." } },
      { "@type": "Question", "name": "What states do you serve for energy bookkeeping?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger serves energy companies across Texas (including Dallas-Fort Worth and the Permian Basin), Oklahoma, Louisiana, New Mexico, Mississippi, and more. We handle state-specific severance taxes and regulatory requirements." } }
    ]
  };
  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Energy & Oil Company Bookkeeping | ClearLedger Solutions", description: "Revenue interest tracking, JIB processing, and oil & gas accounting. Serving Texas, Oklahoma, Louisiana & nationwide.", url: "/energy-bookkeeping", category: "Energy Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Energy Company Bookkeeping", description: "ClearLedger's process for oil & gas financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Energy & Oil Company Bookkeeping | JIB & Revenue Tracking | ClearLedger" description="Expert energy bookkeeping nationwide. Revenue interest tracking, JIB processing, depletion schedules, severance tax & regulatory compliance. Serving Texas, Oklahoma, Louisiana & more. Call (903) 815-9488." keywords="energy bookkeeping, oil gas accounting, JIB processing, revenue interest tracking, oil company bookkeeper, petrochemical accounting, severance tax, energy bookkeeping Texas, oil gas accounting Oklahoma" canonical="/energy-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background"><div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><Flame className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Energy & Oil Company Bookkeeping</span></div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Expert{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Energy & Oil Bookkeeping</span>{' '}Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">From revenue interest tracking to JIB processing, ClearLedger provides specialized accounting for energy companies across Texas, Oklahoma, Louisiana, and nationwide.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Energy Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
        </div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Energy Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Energy Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Energy Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Serving Energy Companies Nationwide</h2><div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">{serviceAreas.map((area, i) => (<div key={i} className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-card"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm font-medium text-foreground">{area}</span></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Energy Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Optimize Your Energy Company Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join energy companies across the country that trust ClearLedger for specialized oil & gas accounting.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default EnergyBookkeeping;
