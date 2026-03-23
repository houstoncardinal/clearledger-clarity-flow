import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, Monitor, DollarSign, Shield, Clock, BarChart3 } from 'lucide-react';

const TechnologyBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Technology Bookkeeping", url: "/technology-bookkeeping" }];
  const services = ['SaaS Revenue Recognition (ASC 606)', 'R&D Tax Credit Documentation', 'Startup Financial Modeling', 'Investor & Board Reporting', 'Stock Option Expense Tracking', 'Deferred Revenue Management', 'Multi-Currency Accounting', 'Burn Rate & Runway Analysis'];
  const challenges = [
    { title: 'Revenue Recognition', description: 'ASC 606 compliance for SaaS, subscription, and contract-based revenue requires specialized expertise.', icon: DollarSign },
    { title: 'R&D Tax Credits', description: 'Proper documentation and tracking of qualifying R&D activities to maximize tax credit claims.', icon: Shield },
    { title: 'Rapid Scaling', description: 'Fast-growing startups need financial systems that scale with them without breaking.', icon: BarChart3 },
    { title: 'Investor Expectations', description: 'VCs and angel investors require GAAP-compliant financials, cap table management, and board-ready reporting.', icon: Clock }
  ];
  const process = [
    { name: 'Tech Stack Audit', text: 'Review your billing system (Stripe, Chargebee), expense tools, and current accounting setup.' },
    { name: 'Revenue Setup', text: 'Configure proper revenue recognition, deferred revenue tracking, and subscription metrics.' },
    { name: 'R&D Documentation', text: 'Establish systems for tracking qualifying R&D expenses for tax credit claims.' },
    { name: 'Growth Reporting', text: 'Monthly MRR/ARR reports, burn rate analysis, runway forecasting, and investor-ready financials.' }
  ];
  const reviews = [
    { author: 'Alex Rivera', rating: 5, review: 'ClearLedger set up our SaaS revenue recognition perfectly. Our Series A investors were impressed with the financial clarity.', datePublished: '2025-03-05' },
    { author: 'Priya Sharma', rating: 5, review: 'Their R&D tax credit documentation saved our startup over $50K. Worth every penny.', datePublished: '2025-02-01' }
  ];

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do you handle SaaS revenue recognition for Dallas startups?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ClearLedger implements ASC 606-compliant revenue recognition for SaaS companies, including deferred revenue, subscription billing, and multi-element arrangement accounting." } },
      { "@type": "Question", "name": "Can you help with R&D tax credits for tech companies?", "acceptedAnswer": { "@type": "Answer", "text": "We document and track qualifying R&D activities and expenses to support federal and state R&D tax credit claims, helping Dallas tech companies save significantly on taxes." } },
      { "@type": "Question", "name": "Do you provide investor-ready financial reports?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We prepare GAAP-compliant financial statements, MRR/ARR dashboards, burn rate analysis, and board presentation financials for VC-backed startups." } }
    ]
  };

  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Technology Company Bookkeeping Dallas TX", description: "SaaS revenue recognition, R&D tax credits, and startup bookkeeping in Dallas TX.", url: "/technology-bookkeeping", category: "Technology Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Tech Company Bookkeeping", description: "ClearLedger's process for technology company financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Technology & SaaS Bookkeeping Dallas TX | Startup Accounting | ClearLedger" description="Expert tech company bookkeeping in Dallas TX. SaaS revenue recognition, R&D tax credits, startup accounting, investor reporting & burn rate analysis. Call (903) 815-9488." keywords="technology bookkeeping Dallas TX, SaaS accounting, startup bookkeeping Dallas, R&D tax credits Texas, tech company bookkeeper, investor reporting, revenue recognition" canonical="/technology-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Technology & SaaS Bookkeeping</span></div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Dallas TX{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Tech & SaaS Bookkeeping</span>{' '}Experts</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">From seed-stage startups to scaling SaaS companies, ClearLedger provides the specialized financial management tech companies need to grow confidently.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Startup Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
          </div></div>
        </section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Technology Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Tech Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Tech Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Tech Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Level Up Your Startup Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join Dallas tech companies that trust ClearLedger for investor-ready financials.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default TechnologyBookkeeping;
