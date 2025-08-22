import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  PieChart, 
  Users, 
  FileText, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'QuickBooks Online & Desktop',
      description: 'Expert bookkeeping with both QB Online and Desktop platforms, ensuring your books are accurate and up-to-date.',
      features: [
        'Monthly transaction categorization',
        'Account reconciliation',
        'Financial statement preparation',
        'Multi-entity management'
      ],
      idealFor: 'Small to mid-sized businesses with 50-500+ transactions monthly'
    },
    {
      icon: PieChart,
      title: 'Monthly Management & Reconciliation',
      description: 'Comprehensive monthly financial management to keep your business on track and compliant.',
      features: [
        'Bank & credit card reconciliation',
        'Monthly financial reporting',
        'Variance analysis',
        'Cash flow monitoring'
      ],
      idealFor: 'Growing businesses needing regular financial insights'
    },
    {
      icon: Users,
      title: 'Payroll & HR Support',
      description: 'Complete payroll processing and HR support to manage your team efficiently and compliantly.',
      features: [
        'Bi-weekly/monthly payroll processing',
        'Tax filing & compliance',
        'Employee benefits administration',
        'HR documentation support'
      ],
      idealFor: 'Companies with 5-50+ employees requiring reliable payroll'
    },
    {
      icon: FileText,
      title: 'Billing & Accounts Receivable',
      description: 'Streamlined invoicing and A/R management to improve cash flow and customer relationships.',
      features: [
        'Automated invoice generation',
        'Payment tracking & follow-up',
        'Collections management',
        'Customer credit analysis'
      ],
      idealFor: 'Service-based businesses with recurring billing needs'
    },
    {
      icon: TrendingUp,
      title: 'Cleanup & Advisory',
      description: 'Comprehensive financial cleanup and strategic advisory services to get your books pristine.',
      features: [
        'Historical data cleanup',
        'Process optimization',
        'Financial strategy consulting',
        'System implementation'
      ],
      idealFor: 'Businesses transitioning or upgrading their financial systems'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Robust security measures and compliance expertise to protect your financial data.',
      features: [
        'SOC 2 Type II certified processes',
        'Bank-level encryption',
        'Regular compliance audits',
        'Data backup & recovery'
      ],
      idealFor: 'All businesses requiring secure, compliant financial management'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
            <PieChart className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Our Services
            </span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Financial Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From daily bookkeeping to strategic financial planning, we provide comprehensive 
            outsourced financial services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card-service group">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="bg-accent p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-accent-foreground mb-2">Ideal For:</h4>
                  <p className="text-sm text-accent-foreground">{service.idealFor}</p>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full btn-secondary group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-subtle p-12 rounded-2xl">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific financial management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;