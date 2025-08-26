import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { getBreadcrumbSchema } from '@/utils/schemaMarkup';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle,
  FileText,
  Calculator,
  Shield,
  Award,
  Calendar,
  BarChart3,
  Quote
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'techflow-saas',
      title: 'TechFlow Solutions: SaaS Growth Acceleration',
      subtitle: 'How a 25-person SaaS company achieved 300% growth with ClearLedger',
      industry: 'SaaS',
      companySize: '25 employees',
      challenge: 'TechFlow was experiencing rapid growth but struggling with manual financial processes, delayed month-end closes, and lack of real-time financial insights. Their in-house team was overwhelmed with transaction volume.',
      solution: 'Implemented comprehensive QuickBooks Online management with automated reconciliation, real-time reporting, and dedicated account management.',
      results: [
        { metric: '40%', label: 'Faster month-end close', icon: Clock },
        { metric: '300%', label: 'Revenue growth supported', icon: TrendingUp },
        { metric: '15h', label: 'Time saved monthly', icon: Clock },
        { metric: '100%', label: 'Compliance maintained', icon: Shield }
      ],
      testimonial: 'ClearLedger transformed our financial management. We can now focus on product development while having complete confidence in our financial operations.',
      client: 'Sarah Chen, CEO & Founder',
      featured: true,
      image: 'techflow-dashboard'
    },
    {
      id: 'greenbuild-construction',
      title: 'GreenBuild Construction: Operational Excellence',
      subtitle: 'Streamlined bookkeeping and compliance for a growing construction company',
      industry: 'Construction',
      companySize: '45 employees',
      challenge: 'GreenBuild was expanding rapidly but struggling with bookkeeping complexity, compliance requirements, and manual financial processes. They needed reliable, scalable financial management.',
      solution: 'Deployed comprehensive bookkeeping services, automated compliance monitoring, and multi-entity management for different project divisions.',
      results: [
        { metric: '0', label: 'Compliance issues', icon: Shield },
        { metric: '60%', label: 'Bookkeeping processing time reduced', icon: Clock },
        { metric: '3', label: 'Entities managed seamlessly', icon: Users },
        { metric: '24h', label: 'Response time commitment', icon: Clock }
      ],
      testimonial: 'The bookkeeping and compliance support has been exceptional. ClearLedger handles everything from processing to compliance, giving us peace of mind.',
      client: 'Michael Rodriguez, Operations Director',
      featured: false,
      image: 'construction-site'
    },
    {
      id: 'healthfirst-medical',
      title: 'HealthFirst Medical: Healthcare Compliance Excellence',
      subtitle: 'Maintaining 100% compliance while scaling operations',
      industry: 'Healthcare',
      companySize: '120 employees',
      challenge: 'As a healthcare provider, HealthFirst needed to maintain strict compliance standards while scaling operations. They required secure, auditable financial processes.',
      solution: 'Implemented comprehensive compliance monitoring and specialized healthcare industry expertise.',
      results: [
        { metric: '100%', label: 'Compliance maintained', icon: Award },
        { metric: '50%', label: 'Audit preparation time reduced', icon: Clock },
        { metric: '100%', label: 'Accuracy maintained', icon: Shield },
        { metric: '24h', label: 'Response time', icon: Clock }
      ],
      testimonial: 'ClearLedger\'s expertise in regulatory requirements gives us confidence that our financial data is compliant and well-managed.',
      client: 'Lisa Thompson, CFO',
      featured: false,
      image: 'medical-office'
    },
    {
      id: 'innovate-law',
      title: 'Innovate Law Group: Strategic Financial Planning',
      subtitle: 'From manual processes to data-driven decision making',
      industry: 'Legal Services',
      companySize: '18 employees',
      challenge: 'Innovate Law was using outdated financial processes and lacked visibility into their performance. They needed professional reporting and strategic insights.',
      solution: 'Implemented monthly reconciliation, advanced financial reporting, and strategic advisory services. Added cash flow monitoring and variance analysis.',
      results: [
        { metric: 'Real-time', label: 'Financial insights', icon: BarChart3 },
        { metric: '25%', label: 'Profitability improvement', icon: TrendingUp },
        { metric: 'Monthly', label: 'Strategic reviews', icon: Calendar },
        { metric: '100%', label: 'Process automation', icon: CheckCircle }
      ],
      testimonial: 'The monthly reconciliation and reporting has been game-changing. We now have clear insights into our financial performance and can make data-driven decisions.',
      client: 'David Kim, Managing Partner',
      featured: false,
      image: 'law-office'
    }
  ];

  const industries = ['All Industries', 'SaaS', 'Construction', 'Healthcare', 'Legal Services', 'Manufacturing', 'Retail'];
  const companySizes = ['All Sizes', '1-10', '11-50', '51-100', '100+'];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" }
  ];

  return (
    <>
      <SEO 
        title="Case Studies & Success Stories | ClearLedger Solutions"
        description="Real success stories from our clients. See how ClearLedger Solutions helped businesses achieve 300% growth, maintain 100% compliance, and streamline operations."
        keywords="case studies, success stories, client testimonials, business growth, financial management, bookkeeping success"
        canonical="/case-studies"
        schema={getBreadcrumbSchema(breadcrumbs)}
      />
      <main className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full mb-8">
              <FileText className="w-5 h-5 text-accent-foreground" />
              <span className="text-sm font-semibold text-accent-foreground">
                Success Stories
              </span>
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Real Results from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                Real Businesses
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12">
              Discover how ClearLedger has transformed financial management for businesses 
              across 15+ industries, helping them achieve clarity, compliance, and growth.
            </p>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                {companySizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`relative ${study.featured ? 'ring-2 ring-primary/20' : ''}`}>
                {study.featured && (
                  <div className="absolute -top-3 left-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold z-10">
                    Featured Case Study
                  </div>
                )}
                
                <div className="bg-card rounded-3xl p-12 shadow-2xl border border-border/50 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-primary-dark/5 rounded-full -translate-y-32 translate-x-32"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="grid lg:grid-cols-3 gap-12 mb-12">
                      <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {study.industry}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {study.companySize}
                          </span>
                        </div>
                        
                        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                          {study.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                          {study.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-2xl flex items-center justify-center">
                          <Calculator className="w-10 h-10 text-primary" />
                        </div>
                        <Button className="btn-primary group">
                          Download Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center space-x-3">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                            <span className="text-red-600 font-bold text-sm">!</span>
                          </div>
                          <span>The Challenge</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <span>Our Solution</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-12">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
                        The Results
                      </h3>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {study.results.map((result, resultIndex) => {
                          const IconComponent = result.icon;
                          return (
                            <div key={resultIndex} className="text-center p-6 bg-gradient-to-br from-accent/50 to-background rounded-2xl border border-accent-foreground/20">
                              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <div className="font-heading text-2xl font-bold text-foreground mb-2">
                                {result.metric}
                              </div>
                              <div className="text-sm text-muted-foreground font-medium">
                                {result.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl p-8 mb-8">
                      <div className="flex items-start space-x-4">
                        <Quote className="w-8 h-8 text-primary mt-1" />
                        <div>
                          <blockquote className="text-lg text-foreground italic mb-4">
                            "{study.testimonial}"
                          </blockquote>
                          <div className="font-medium text-foreground">
                            — {study.client}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <Button className="btn-primary group text-lg px-8 py-4">
                        Schedule Similar Consultation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-dark/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their financial management 
            with ClearLedger. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
};

export default CaseStudies; 