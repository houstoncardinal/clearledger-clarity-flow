import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, Tractor, DollarSign, Shield, Clock, BarChart3, MapPin } from 'lucide-react';

const AgricultureBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Agriculture Bookkeeping", url: "/agriculture-bookkeeping" }];
  const services = ['Crop Cost Tracking & Analysis', 'Livestock Inventory Accounting', 'Farm Equipment Depreciation', 'Agricultural Tax Planning (Schedule F)', 'USDA Program Tracking', 'Seasonal Cash Flow Management', 'Land Lease Accounting', 'Cooperative Distribution Tracking'];
  const serviceAreas = ['Dallas-Fort Worth', 'Texas', 'Oklahoma', 'Louisiana', 'Florida', 'Mississippi', 'New Mexico', 'Panama'];
  const challenges = [
    { title: 'Seasonal Revenue', description: 'Harvest cycles create concentrated income periods with year-round expenses, requiring careful cash flow planning.', icon: Clock },
    { title: 'Crop Cost Allocation', description: 'Tracking costs per acre/per crop across seed, fertilizer, chemicals, labor, and equipment usage.', icon: DollarSign },
    { title: 'Tax Complexity', description: 'Schedule F filing, farm income averaging, conservation easements, and agricultural tax credits.', icon: Shield },
    { title: 'Equipment Management', description: 'Expensive farm equipment requires proper depreciation, Section 179, and maintenance tracking.', icon: BarChart3 }
  ];
  const process = [
    { name: 'Farm Assessment', text: 'Review your operation size, crop/livestock mix, equipment inventory, and current record-keeping.' },
    { name: 'Agricultural Setup', text: 'Configure QuickBooks with farm-specific accounts for crops, livestock, equipment, and land.' },
    { name: 'Cost Tracking', text: 'Set up per-crop and per-field cost tracking for inputs, labor, and equipment usage.' },
    { name: 'Tax & Reporting', text: 'Schedule F preparation, farm income analysis, and strategic tax planning for agricultural operations.' }
  ];
  const reviews = [
    { author: 'Tom Baker', rating: 5, review: 'ClearLedger understands farming. Their per-crop cost tracking showed us which fields were profitable and which were draining cash.', datePublished: '2025-02-12' },
    { author: 'Linda Hayes', rating: 5, review: 'Their farm tax planning saved us over $15K last year through proper depreciation and income averaging. Outstanding.', datePublished: '2025-01-08' }
  ];
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do you handle Schedule F tax preparation for farms?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger prepares all farm financial records needed for Schedule F filing, including crop income, livestock sales, farm expenses, and depreciation schedules. We serve farms and ranches across Texas, Oklahoma, Louisiana, Mississippi, and more." } },
      { "@type": "Question", "name": "Can you track costs per crop or per field?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we set up cost tracking by individual crop and field/pasture, including seed, fertilizer, chemicals, custom hire, and equipment costs, so you know exactly which operations are profitable." } },
      { "@type": "Question", "name": "What states do you serve for agriculture bookkeeping?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger serves farms and ranches across Texas (including Dallas-Fort Worth and rural communities), Oklahoma, Louisiana, Mississippi, Florida, New Mexico, and Panama." } }
    ]
  };
  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Agriculture & Farm Bookkeeping | ClearLedger Solutions", description: "Crop cost tracking, livestock accounting, and farm tax planning. Serving Texas & nationwide.", url: "/agriculture-bookkeeping", category: "Agriculture Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Farm Bookkeeping", description: "ClearLedger's process for agricultural financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Agriculture & Farm Bookkeeping | Crop & Livestock Accounting | ClearLedger" description="Expert farm bookkeeping nationwide. Crop cost tracking, livestock accounting, Schedule F, equipment depreciation & agricultural tax planning. Serving Texas, Oklahoma, Louisiana & more. Call (903) 815-9488." keywords="agriculture bookkeeping, farm accounting, crop cost tracking, livestock bookkeeping, Schedule F preparation, farm tax planning, ranch accounting, agricultural bookkeeper, farm bookkeeping Texas, agriculture accounting Oklahoma" canonical="/agriculture-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background"><div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><Tractor className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Agriculture & Farm Bookkeeping</span></div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Expert{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Farm & Agriculture Bookkeeping</span>{' '}Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">From crop cost tracking to livestock accounting, ClearLedger provides specialized financial management for farms and ranches across Texas, Oklahoma, Louisiana, and nationwide.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Farm Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
        </div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Agriculture Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Agriculture Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Farm Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Serving Farms & Ranches Nationwide</h2><div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">{serviceAreas.map((area, i) => (<div key={i} className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-card"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm font-medium text-foreground">{area}</span></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Farm Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Simplify Your Farm Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join farmers and ranchers across the country who trust ClearLedger for expert agricultural accounting.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default AgricultureBookkeeping;
