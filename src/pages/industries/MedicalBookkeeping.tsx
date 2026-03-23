import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { getProfessionalServiceSchema, getEnhancedBreadcrumbSchema, getLocalBusinessSchema, getHowToSchema, getEnhancedReviewSchema, combineSchemas, COMPANY_INFO } from '@/utils/advancedSchemaMarkup';
import { CheckCircle, ArrowRight, Phone, Stethoscope, DollarSign, Shield, Clock, BarChart3, MapPin } from 'lucide-react';

const MedicalBookkeeping = () => {
  const breadcrumbs = [{ name: "Industries", url: "/industries" }, { name: "Medical Bookkeeping", url: "/medical-bookkeeping" }];
  const services = ['Insurance Payment Reconciliation', 'Patient Billing & Collections Tracking', 'Medical Payroll Processing', 'Equipment Lease & Purchase Tracking', 'Practice Expense Analysis', 'Multi-Provider Revenue Allocation', 'HIPAA-Compliant Record Keeping', 'Medical Tax Planning Support'];
  const serviceAreas = ['Dallas-Fort Worth', 'Texas', 'Oklahoma', 'Louisiana', 'Florida', 'Mississippi', 'New Mexico', 'Panama'];
  const challenges = [
    { title: 'Insurance Reconciliation', description: 'Matching insurance payments, adjustments, and write-offs across multiple payers and procedures.', icon: DollarSign },
    { title: 'Compliance Requirements', description: 'HIPAA-compliant financial record keeping and proper handling of patient payment data.', icon: Shield },
    { title: 'Revenue Cycle Complexity', description: 'Long collection cycles, denied claims, and patient responsibility portions create accounting complexity.', icon: BarChart3 },
    { title: 'Multi-Provider Practices', description: 'Tracking production, collections, and compensation by individual provider in group practices.', icon: Clock }
  ];
  const process = [
    { name: 'Practice Assessment', text: 'Review your practice management system, billing workflow, and current financial processes.' },
    { name: 'System Integration', text: 'Connect your practice management and billing systems to QuickBooks for automated data flow.' },
    { name: 'Reconciliation Setup', text: 'Establish insurance payment matching, patient collection tracking, and write-off categorization.' },
    { name: 'Performance Reporting', text: 'Monthly P&L by provider, collection rate analysis, overhead ratios, and cash flow forecasting.' }
  ];
  const reviews = [
    { author: 'Dr. James Park', rating: 5, review: 'ClearLedger finally got our multi-provider practice finances organized. We can see each provider\'s production and collections clearly.', datePublished: '2025-02-10' },
    { author: 'Lisa Chen, DDS', rating: 5, review: 'Their insurance reconciliation process is flawless. We no longer have mystery adjustments in our books.', datePublished: '2025-01-25' }
  ];
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do you provide HIPAA-compliant bookkeeping for medical practices?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ClearLedger follows strict data handling protocols for medical practice financial records. We work with de-identified financial data and maintain secure systems for all practice accounting across all states we serve." } },
      { "@type": "Question", "name": "Can you reconcile insurance payments in QuickBooks?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We match ERA/EOB payments to billed procedures, properly categorize adjustments and write-offs, and ensure your collections match what was actually deposited." } },
      { "@type": "Question", "name": "What states do you serve for medical bookkeeping?", "acceptedAnswer": { "@type": "Answer", "text": "ClearLedger serves medical and dental practices across Texas (including Dallas-Fort Worth), Oklahoma, Louisiana, Florida, Mississippi, New Mexico, and Panama." } }
    ]
  };
  const pageSchema = combineSchemas(
    getProfessionalServiceSchema({ name: "Medical & Dental Bookkeeping Services | ClearLedger Solutions", description: "HIPAA-aware bookkeeping for medical and dental practices. Serving Dallas TX & nationwide.", url: "/medical-bookkeeping", category: "Medical Bookkeeping" }),
    getEnhancedBreadcrumbSchema(breadcrumbs), getLocalBusinessSchema(), faqSchema,
    getHowToSchema({ name: "How to Set Up Medical Practice Bookkeeping", description: "ClearLedger's process for healthcare financial management.", steps: process }),
    getEnhancedReviewSchema(reviews)
  );

  return (
    <>
      <SEO title="Medical & Dental Bookkeeping | Healthcare Accounting | ClearLedger" description="Expert medical bookkeeping nationwide. Insurance reconciliation, patient billing, HIPAA-compliant records, medical payroll & multi-provider tracking. Serving Dallas TX & more. Call (903) 815-9488." keywords="medical bookkeeping, dental practice accounting, healthcare bookkeeping, doctor bookkeeper, dentist bookkeeper, medical practice financial management, insurance reconciliation, medical bookkeeping Texas" canonical="/medical-bookkeeping" schema={pageSchema} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-background via-accent/10 to-background"><div className="container mx-auto px-4 sm:px-6"><div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 border border-accent-foreground/20 shadow-sm"><Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground flex-shrink-0" /><span className="text-xs sm:text-sm font-semibold text-accent-foreground">Medical & Dental Bookkeeping</span></div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Expert{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Medical & Dental Bookkeeping</span>{' '}Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">Specialized financial management for doctors, dentists, clinics, and healthcare providers across Dallas-Fort Worth, Texas, and nationwide.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"><Link to="/consultation"><Button size="lg" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">Free Healthcare Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"><Phone className="w-4 h-4 mr-2" />{COMPANY_INFO.phoneLocal}</Button></a></div>
        </div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Medical Bookkeeping Services</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((s,i) => (<div key={i} className="flex items-start space-x-3 p-4 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow"><CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span className="font-medium text-foreground text-sm">{s}</span></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Healthcare Accounting Challenges We Solve</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{challenges.map((c,i) => { const Icon = c.icon; return (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><Icon className="w-8 h-8 text-primary mb-3" /><h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3><p className="text-sm text-muted-foreground">{c.description}</p></div>);})}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Medical Bookkeeping Process</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{process.map((step,i) => (<div key={i} className="text-center p-6 bg-card rounded-xl shadow-card"><div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-lg font-bold text-primary-foreground">{i+1}</span></div><h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.name}</h3><p className="text-sm text-muted-foreground">{step.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Serving Healthcare Providers Nationwide</h2><div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">{serviceAreas.map((area, i) => (<div key={i} className="flex items-center space-x-2 bg-card rounded-full px-4 py-2 shadow-card"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /><span className="text-sm font-medium text-foreground">{area}</span></div>))}</div></div></section>
        <section className="py-16 bg-background"><div className="container mx-auto px-4"><h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Medical Bookkeeping FAQs</h2><div className="max-w-3xl mx-auto space-y-6">{faqSchema.mainEntity.map((faq,i) => (<div key={i} className="bg-card rounded-xl p-6 shadow-card"><h3 className="font-heading text-lg font-bold text-foreground mb-2">{faq.name}</h3><p className="text-muted-foreground">{faq.acceptedAnswer.text}</p></div>))}</div></div></section>
        <section className="py-16 bg-gradient-subtle"><div className="container mx-auto px-4"><div className="bg-card rounded-2xl p-8 shadow-premium text-center"><h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">Ready to Streamline Your Practice Finances?</h2><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Join healthcare providers across the country who trust ClearLedger.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><Link to="/contact"><Button size="lg" className="btn-primary text-base px-6 py-3">Schedule Free Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button></Link><a href={`tel:${COMPANY_INFO.phone}`}><Button size="lg" variant="outline" className="btn-secondary text-base px-6 py-3">Call {COMPANY_INFO.phoneLocal}</Button></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
};

export default MedicalBookkeeping;
