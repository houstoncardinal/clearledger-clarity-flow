import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  PieChart, 
  Users, 
  FileText, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  CreditCard
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
      icon: FileText,
      title: 'Billing & Accounts Payable',
      description: 'Streamlined invoicing and A/P management to improve cash flow and vendor relationships.',
      features: [
        'Automated invoice generation',
        'Payment tracking & follow-up',
        'Vendor payment management',
        'Cash flow optimization'
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
      icon: CreditCard,
      title: 'Custom Business Checks',
      description: 'Professional custom business checks with built-in security features and complete personalization options.',
      features: [
        'QuickBooks & Sage 100 compatible',
        'Built-in security features',
        'Free personalization & logo',
        'Matching envelopes available'
      ],
      idealFor: 'Businesses needing professional, secure check printing solutions'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto">
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const anchorId = index === 0 ? 'quickbooks' : 
                           index === 1 ? 'monthly-management' : 
                           index === 2 ? 'billing-ap' : 
                           index === 3 ? 'cleanup-advisory' : 'check-ordering';
            return (
              <div key={index} id={anchorId} className="card-service group">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base break-words">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs lg:text-sm text-foreground break-words">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="bg-accent p-3 lg:p-4 rounded-lg mb-6">
                  <h4 className="font-medium text-accent-foreground mb-2 text-sm lg:text-base">Ideal For:</h4>
                  <p className="text-xs lg:text-sm text-accent-foreground break-words">{service.idealFor}</p>
                </div>

                {/* CTA */}
                <Link to={index === 0 ? '/quickbooks-services' : 
                         index === 1 ? '/monthly-management' : 
                         index === 2 ? '/billing-accounts-payable' : 
                         index === 3 ? '/cleanup-advisory' : '/check-ordering'}>
                  <Button variant="outline" className="w-full btn-secondary group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
            <Link to="/contact">
              <Button size="lg" className="btn-primary">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="btn-secondary">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;