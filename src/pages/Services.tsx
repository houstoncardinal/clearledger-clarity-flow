import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  PieChart, 
  Users, 
  FileText, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const detailedServices = [
    {
      id: 'quickbooks',
      icon: Calculator,
      title: 'QuickBooks Online & Desktop',
      subtitle: 'Expert bookkeeping with both QB platforms',
      description: 'Comprehensive QuickBooks management ensuring your books are accurate, up-to-date, and compliant with accounting standards.',
      features: [
        'Daily transaction entry and categorization',
        'Bank and credit card reconciliation',
        'Monthly financial statement preparation',
        'Multi-entity and multi-location support',
        'Custom chart of accounts setup',
        'QuickBooks training and support'
      ],
      deliverables: [
        'Monthly Balance Sheet and P&L',
        'Cash flow statements',
        'General ledger maintenance',
        'Tax-ready financial reports',
        'Monthly variance analysis'
      ],
      pricing: 'Starting at $299/month',
      timeframe: '5-7 business days monthly close',
      idealFor: 'Small to mid-sized businesses with 50-500+ transactions monthly'
    },
    {
      id: 'reconciliation',
      icon: PieChart,
      title: 'Monthly Management & Reconciliation',
      subtitle: 'Comprehensive monthly financial oversight',
      description: 'Complete monthly financial management to keep your business on track with accurate reporting and insights.',
      features: [
        'Bank account reconciliation',
        'Credit card reconciliation',
        'Monthly financial reporting',
        'Variance analysis and insights',
        'Cash flow monitoring',
        'Budget vs. actual analysis'
      ],
      deliverables: [
        'Reconciled financial statements',
        'Monthly executive summary',
        'Key performance indicators',
        'Cash flow projections',
        'Financial trend analysis'
      ],
      pricing: 'Starting at $199/month',
      timeframe: '3-5 business days monthly close',
      idealFor: 'Growing businesses needing regular financial insights'
    },
    {
      id: 'payroll',
      icon: Users,
      title: 'Payroll & HR Support',
      subtitle: 'Complete payroll and HR management',
      description: 'Full-service payroll processing and HR support to manage your team efficiently and stay compliant.',
      features: [
        'Bi-weekly/monthly payroll processing',
        'Tax filing and compliance',
        'Employee benefits administration',
        'Time tracking integration',
        'Workers compensation management',
        'HR documentation support'
      ],
      deliverables: [
        'Payroll reports and summaries',
        'Tax filings and payments',
        'Employee pay stubs',
        'Quarterly and annual reports',
        'Compliance documentation'
      ],
      pricing: 'Starting at $25/employee/month',
      timeframe: 'Same-day payroll processing',
      idealFor: 'Companies with 5-50+ employees requiring reliable payroll'
    },
    {
      id: 'billing',
      icon: FileText,
      title: 'Billing & Accounts Receivable',
      subtitle: 'Streamlined invoicing and collections',
      description: 'Comprehensive A/R management to improve cash flow and maintain positive customer relationships.',
      features: [
        'Automated invoice generation',
        'Payment tracking and follow-up',
        'Collections management',
        'Customer credit analysis',
        'Aging reports and analysis',
        'Integration with payment processors'
      ],
      deliverables: [
        'Monthly A/R aging reports',
        'Collection status updates',
        'Payment trend analysis',
        'Customer credit assessments',
        'Cash flow improvements'
      ],
      pricing: 'Starting at $149/month',
      timeframe: 'Weekly A/R management',
      idealFor: 'Service-based businesses with recurring billing needs'
    },
    {
      id: 'cleanup',
      icon: TrendingUp,
      title: 'Cleanup & Advisory',
      subtitle: 'Financial cleanup and strategic guidance',
      description: 'Comprehensive cleanup services and strategic advisory to optimize your financial processes.',
      features: [
        'Historical data cleanup and correction',
        'Process optimization and automation',
        'Financial strategy consulting',
        'System implementation and training',
        'Compliance gap analysis',
        'Best practices implementation'
      ],
      deliverables: [
        'Clean, accurate historical records',
        'Optimized chart of accounts',
        'Process documentation',
        'Strategic recommendations',
        'Implementation roadmap'
      ],
      pricing: 'Project-based pricing',
      timeframe: '2-8 weeks depending on complexity',
      idealFor: 'Businesses transitioning or upgrading financial systems'
    },
    {
      id: 'compliance',
      icon: Shield,
      title: 'Compliance & Security',
      subtitle: 'Robust security and compliance management',
      description: 'Comprehensive security measures and compliance expertise to protect your financial data.',
      features: [
        'SOC 2 Type II certified processes',
        'Bank-level encryption and security',
        'Regular compliance audits',
        'Data backup and recovery',
        'Access control management',
        'Regulatory compliance monitoring'
      ],
      deliverables: [
        'Security compliance reports',
        'Regular backup confirmations',
        'Access audit logs',
        'Compliance documentation',
        'Security training materials'
      ],
      pricing: 'Included in all plans',
      timeframe: 'Ongoing monitoring',
      idealFor: 'All businesses requiring secure, compliant financial management'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <PieChart className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Our Services
              </span>
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Financial Management Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From daily bookkeeping to strategic financial planning, we provide comprehensive 
              outsourced financial services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {detailedServices.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeService === index
                    ? 'bg-primary text-primary-foreground shadow-button'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {detailedServices.map((service, index) => {
            if (index !== activeService) return null;
            
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Details */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      What's Included:
                    </h3>
                    <div className="grid gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="btn-primary">
                      Get Started Today
                    </Button>
                    <Button size="lg" variant="outline" className="btn-secondary">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>

                {/* Right Column - Details Card */}
                <div className="bg-card rounded-2xl p-8 shadow-premium space-y-8">
                  {/* Deliverables */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      Monthly Deliverables:
                    </h3>
                    <div className="space-y-3">
                      {service.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid gap-6">
                    <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-accent-foreground" />
                        <span className="font-medium text-accent-foreground">Pricing</span>
                      </div>
                      <span className="text-accent-foreground font-bold">{service.pricing}</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-foreground" />
                        <span className="font-medium text-foreground">Turnaround</span>
                      </div>
                      <span className="text-foreground font-medium">{service.timeframe}</span>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-gradient-subtle p-6 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Perfect For:</h4>
                    <p className="text-muted-foreground">{service.idealFor}</p>
                  </div>

                  {/* Contact CTA */}
                  <Button className="w-full btn-primary group">
                    Request Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;