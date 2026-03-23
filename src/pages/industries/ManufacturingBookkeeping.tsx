import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, Factory, DollarSign, Shield, Clock, BarChart3 } from 'lucide-react';

const ManufacturingBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Manufacturing Bookkeeping", url: "/manufacturing-bookkeeping" }];
  const services = ['Cost of Goods Sold (COGS) Tracking', 'Raw Material Inventory Valuation', 'Work-in-Progress Accounting', 'Bill of Materials Costing', 'Production Cost Analysis', 'Equipment Depreciation Schedules', 'Supply Chain Expense Tracking', 'Manufacturing Tax Incentives'];
  const challenges = [
    { title: 'Inventory Valuation', description: 'FIFO, LIFO, or weighted average — choosing and maintaining the right method for your raw materials and finished goods.', icon: DollarSign },
    { title: 'COGS Accuracy', description: 'Properly allocating direct labor, materials, and overhead to calculate true cost of goods sold.', icon: BarChart3 },
    { title: 'Production Costing', description: 'Tracking costs through raw materials → WIP → finished goods across multiple product lines.', icon: Clock },
    { title: 'Equipment Management', description: 'Complex depreciation schedules, maintenance costs, and capital expenditure planning.', icon: Shield }
  ];
  const process = [
    { name: 'Operations Review', text: 'Analyze production processes, inventory flow, and current accounting systems.' },
    { name: 'Cost Structure Setup', text: 'Configure QuickBooks for manufacturing with proper COGS, WIP, and inventory accounts.' },
    { name: 'Inventory Integration', text: 'Connect inventory management systems for real-time valuation and cost tracking.' },
    { name: 'Performance Reporting', text: 'Product profitability analysis, production cost reports, and margin optimization insights.' }
  ];
  const reviews = [
    { author: 'Greg Foster', rating: 5, review: 'ClearLedger finally gave us accurate COGS numbers. We discovered two product lines were actually unprofitable.', datePublished: '2025-02-20' },
    { author: 'Patricia Nguyen', rating: 5, review: 'Their inventory valuation expertise saved us from a major tax issue. Highly recommend for manufacturers.', datePublished: '2025-01-15' }
  ];

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do you track COGS for manufacturing in QuickBooks?", "acceptedAnswer": { "@type": "Answer", "text": "We configure QuickBooks with a manufacturing-specific chart of accounts that separates raw materials, direct labor, manufacturing overhead, WIP, and finished goods inventory for accurate COGS reporting." } },
      { "@type": "Question", "name": "Which inventory valuation method should manufacturers use?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your industry and tax strategy. ClearLedger helps Dallas manufacturers choose between FIFO, LIFO, or weighted average based on their specific operations and tax implications." } },
      { "@type": "Question", "name": "Do you handle manufacturing equipment depreciation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we maintain depreciation schedules for all manufacturing equipment, track maintenance costs, and advise on Section 179 deductions and bonus depreciation opportunities." } }
    ]
  };

  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Manufacturing Bookkeeping Services Dallas TX", description: "COGS tracking, inventory valuation, and production cost accounting for manufacturers in Dallas TX.", url: "/manufacturing-bookkeeping", category: "Manufacturing Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Manufacturing Bookkeeping", description: "ClearLedger's process for manufacturing financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Manufacturing Bookkeeping Dallas TX | COGS & Inventory Accounting | ClearLedger" description="Expert manufacturing bookkeeping in Dallas TX. COGS tracking, inventory valuation, WIP accounting, production costing & equipment depreciation. Call (903) 815-9488." keywords="manufacturing bookkeeping Dallas TX, COGS tracking, inventory valuation, production cost accounting, manufacturing QuickBooks, factory bookkeeping Texas" canonical="/manufacturing-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><Factory className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Manufacturing Bookkeeping</span></div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Dallas TX{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Manufacturing Bookkeeping</span>{' '}Experts</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">From raw materials to finished goods, ClearLedger provides the specialized accounting manufacturers need for accurate costing and profitability.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Manufacturing Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
          </div></div>
        </section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Manufacturing Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Manufacturing Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Manufacturing Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Manufacturing Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Optimize Your Manufacturing Costs?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join Dallas manufacturers who trust ClearLedger for accurate production accounting.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default ManufacturingBookkeeping;
