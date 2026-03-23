import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, Hotel, DollarSign, Shield, Clock, BarChart3 } from 'lucide-react';

const HospitalityBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Hospitality Bookkeeping", url: "/hospitality-bookkeeping" }];
  const services = ['Hotel Revenue Management Accounting', 'Event & Banquet Financial Tracking', 'Occupancy Tax Compliance', 'Multi-Department P&L Reporting', 'Seasonal Cash Flow Forecasting', 'OTA Commission Reconciliation', 'F&B Cost Control', 'Group & Corporate Billing'];
  const challenges = [
    { title: 'Revenue Complexity', description: 'Rooms, F&B, events, spa, and ancillary revenue all need separate tracking and analysis.', icon: DollarSign },
    { title: 'OTA Reconciliation', description: 'Booking.com, Expedia, and Airbnb commissions and virtual card payments require careful matching.', icon: BarChart3 },
    { title: 'Seasonal Variations', description: 'Peak seasons, holidays, and events create dramatic revenue swings requiring flexible cash management.', icon: Clock },
    { title: 'Tax Compliance', description: 'Hotel occupancy taxes, mixed beverage taxes, and sales taxes vary by jurisdiction.', icon: Shield }
  ];
  const process = [
    { name: 'Property Audit', text: 'Review PMS system, OTA integrations, department structure, and current accounting workflow.' },
    { name: 'Revenue Integration', text: 'Connect PMS, OTA channels, and POS systems to QuickBooks for automated revenue tracking.' },
    { name: 'Department Setup', text: 'Configure departmental P&L tracking for rooms, F&B, events, and ancillary services.' },
    { name: 'Performance Analysis', text: 'RevPAR tracking, ADR analysis, occupancy reports, and cash flow forecasting by season.' }
  ];
  const reviews = [
    { author: 'Karen Mitchell', rating: 5, review: 'ClearLedger handles our boutique hotel accounting perfectly. OTA reconciliation alone saves us hours every week.', datePublished: '2025-03-10' },
    { author: 'James Park', rating: 5, review: 'Their seasonal cash flow forecasting helped us plan a major renovation during our slow season. Brilliant.', datePublished: '2025-02-01' }
  ];

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do you handle hotel occupancy tax in Texas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ClearLedger tracks and files state hotel occupancy tax (6%), local HOT, and any additional tourism taxes for hotels and short-term rentals across Texas." } },
      { "@type": "Question", "name": "Can you reconcile OTA payments from Booking.com and Expedia?", "acceptedAnswer": { "@type": "Answer", "text": "We reconcile virtual card payments, commission deductions, and rate differences from all major OTAs to ensure every dollar of revenue is properly accounted for." } },
      { "@type": "Question", "name": "Do you provide departmental P&L for hotels?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we set up USALI-aligned departmental P&L reporting so you can see profitability for rooms, F&B, events, spa, and other departments individually." } }
    ]
  };

  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Hospitality & Tourism Bookkeeping Dallas TX", description: "Hotel revenue management, OTA reconciliation, and hospitality accounting in Dallas TX.", url: "/hospitality-bookkeeping", category: "Hospitality Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Hospitality Bookkeeping", description: "ClearLedger's process for hotel and tourism financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Hospitality & Hotel Bookkeeping Dallas TX | Tourism Accounting | ClearLedger" description="Expert hospitality bookkeeping in Dallas TX. Hotel revenue management, OTA reconciliation, occupancy tax, event accounting & seasonal forecasting. Call (903) 815-9488." keywords="hospitality bookkeeping Dallas TX, hotel accounting, tourism bookkeeping, OTA reconciliation, hotel occupancy tax Texas, event venue bookkeeping, resort accounting" canonical="/hospitality-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><Hotel className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Hospitality & Tourism Bookkeeping</span></div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Dallas TX{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Hospitality Bookkeeping</span>{' '}Experts</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">Multi-revenue stream management for hotels, resorts, tour operators, and event venues across Dallas-Fort Worth.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Hospitality Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
          </div></div>
        </section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Hospitality Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Hospitality Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Hospitality Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Hospitality Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Streamline Your Hospitality Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join Dallas hotels and venues that trust ClearLedger for expert financial management.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default HospitalityBookkeeping;
