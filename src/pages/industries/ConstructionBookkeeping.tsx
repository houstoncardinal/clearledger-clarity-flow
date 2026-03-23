import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, HardHat, DollarSign, Shield, Clock, BarChart3, MapPin } from 'lucide-react';

const ConstructionBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Construction Bookkeeping", url: "/construction-bookkeeping" }];
  const services = ['Job Costing & Project Tracking', 'Progress Billing & AIA Invoicing', 'Retainage Tracking', 'Subcontractor 1099 Management', 'Equipment Depreciation & Tracking', 'Workers Comp Insurance Audits', 'Change Order Accounting', 'Certified Payroll Reports'];
  const serviceAreas = ['Dallas-Fort Worth', 'Texas', 'Oklahoma', 'Louisiana', 'Florida', 'Mississippi', 'New Mexico', 'Panama'];
  const challenges = [
    { title: 'Job Costing Accuracy', description: 'Track costs across multiple active projects, phases, and cost codes to maintain profitability on every job.', icon: DollarSign },
    { title: 'Progress Billing', description: 'AIA-style billing, retainage tracking, and work-in-progress schedules require specialized accounting knowledge.', icon: BarChart3 },
    { title: 'Subcontractor Management', description: 'W-9 collection, 1099 preparation, lien waiver tracking, and insurance certificate management.', icon: Shield },
    { title: 'Cash Flow Timing', description: 'Long payment cycles, retainage holdbacks, and seasonal work create unique cash flow challenges.', icon: Clock }
  ];
  const process = [
    { name: 'Project Setup', text: 'Configure QuickBooks with job costing, cost codes, and project-specific tracking for every active job.' },
    { name: 'Billing Integration', text: 'Set up progress billing workflows, retainage schedules, and change order tracking.' },
    { name: 'Subcontractor Compliance', text: 'Manage W-9s, insurance certificates, lien waivers, and year-end 1099 preparation.' },
    { name: 'Financial Reporting', text: 'Job profitability reports, WIP schedules, cash flow forecasts, and bonding capacity analysis.' }
  ];
  const reviews = [
    { author: 'Robert Miller', rating: 5, review: 'ClearLedger saved us thousands by identifying cost overruns on two projects before they became serious problems.', datePublished: '2025-03-01' },
    { author: 'Steve Thompson', rating: 5, review: 'Their job costing setup in QuickBooks is the best we\'ve ever had. We can see profitability by project in real-time.', datePublished: '2025-01-10' }
  ];
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is job costing in construction bookkeeping?", "acceptedAnswer": { "@type": "Answer", "text": "Job costing tracks all expenses (labor, materials, subcontractors, equipment) by individual project so you know exactly how profitable each job is. ClearLedger sets this up in QuickBooks with custom cost codes for contractors across Texas, Oklahoma, Louisiana, and more." } },
      { "@type": "Question", "name": "Do you handle AIA billing for contractors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we prepare AIA G702/G703 billing applications, track retainage, and manage the entire progress billing cycle for general contractors and subcontractors nationwide." } },
      { "@type": "Question", "name": "What states do you serve for construction bookkeeping?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger serves contractors across Texas (including Dallas-Fort Worth), Oklahoma, Louisiana, Florida, Mississippi, New Mexico, and Panama. We handle state-specific compliance for each location." } }
    ]
  };
  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Construction Bookkeeping Services | ClearLedger Solutions", description: "Job costing, progress billing, and financial management for contractors. Serving Dallas TX & nationwide.", url: "/construction-bookkeeping", category: "Construction Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Construction Bookkeeping", description: "ClearLedger's process for contractor financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Construction Bookkeeping Services | Job Costing & AIA Billing | ClearLedger" description="Expert construction bookkeeping nationwide. Job costing, AIA progress billing, retainage tracking, subcontractor 1099s & certified payroll. Serving Dallas TX, Oklahoma, Louisiana, Florida & more. Call (903) 815-9488." keywords="construction bookkeeping, contractor accounting, job costing QuickBooks, AIA billing, retainage tracking, subcontractor management, construction payroll, construction bookkeeping Texas, contractor bookkeeper" canonical="/construction-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background">
          <div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><HardHat className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Construction & Contractor Bookkeeping</span></div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Expert{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Construction Bookkeeping</span>{' '}Services</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">From job costing to AIA billing, ClearLedger provides the specialized accounting contractors need to stay profitable and bonding-ready — serving businesses across Dallas-Fort Worth, Texas, and nationwide.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Contractor Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
          </div></div>
        </section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Construction Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Construction Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Construction Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Serving Contractors Nationwide</h2><div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">{serviceAreas.map((area, i) => (<div key={i} className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-card"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm font-medium text-foreground">{area}</span></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Construction Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Improve Your Construction Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join contractors across the country who trust ClearLedger for job costing and financial management.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default ConstructionBookkeeping;
