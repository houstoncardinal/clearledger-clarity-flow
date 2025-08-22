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
  Award,
  Clock,
  Zap,
  Target,
  BarChart3,
  Lock,
  Globe,
  Star
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
        'Multi-entity management',
        'Real-time data synchronization',
        'Automated error detection'
      ],
      idealFor: 'Small to mid-sized businesses with 50-500+ transactions monthly',
      benefits: ['99.9% accuracy rate', '24-hour turnaround', 'Expert QB ProAdvisors'],
      popular: true
    },
    {
      icon: PieChart,
      title: 'Monthly Management & Reconciliation',
      description: 'Comprehensive monthly financial management to keep your business on track and compliant.',
      features: [
        'Bank & credit card reconciliation',
        'Monthly financial reporting',
        'Variance analysis',
        'Cash flow monitoring',
        'Budget vs. actual tracking',
        'KPI dashboard creation'
      ],
      idealFor: 'Growing businesses needing regular financial insights',
      benefits: ['Monthly insights', 'Proactive alerts', 'Strategic recommendations'],
      popular: false
    },
    {
      icon: Users,
      title: 'Payroll & HR Support',
      description: 'Complete payroll processing and HR support to manage your team efficiently and compliantly.',
      features: [
        'Bi-weekly/monthly payroll processing',
        'Tax filing & compliance',
        'Employee benefits administration',
        'HR documentation support',
        'Time tracking integration',
        'Compliance monitoring'
      ],
      idealFor: 'Companies with 5-50+ employees requiring reliable payroll',
      benefits: ['Zero compliance issues', 'Automated processing', '24/7 support'],
      popular: false
    },
    {
      icon: FileText,
      title: 'Billing & Accounts Receivable',
      description: 'Streamlined invoicing and A/R management to improve cash flow and customer relationships.',
      features: [
        'Automated invoice generation',
        'Payment tracking & follow-up',
        'Collections management',
        'Customer credit analysis',
        'Recurring billing setup',
        'Payment gateway integration'
      ],
      idealFor: 'Service-based businesses with recurring billing needs',
      benefits: ['Improved cash flow', 'Reduced DSO', 'Better customer relations'],
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'Cleanup & Advisory',
      description: 'Comprehensive financial cleanup and strategic advisory services to get your books pristine.',
      features: [
        'Historical data cleanup',
        'Process optimization',
        'Financial strategy consulting',
        'System implementation',
        'Audit preparation',
        'Best practices training'
      ],
      idealFor: 'Businesses transitioning or upgrading their financial systems',
      benefits: ['Clean financial records', 'Optimized processes', 'Strategic guidance'],
      popular: false
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Robust security measures and compliance expertise to protect your financial data.',
      features: [
        'SOC 2 Type II certified processes',
        'Bank-level encryption',
        'Regular compliance audits',
        'Data backup & recovery',
        'GDPR & CCPA compliance',
        'Security monitoring'
      ],
      idealFor: 'All businesses requiring secure, compliant financial management',
      benefits: ['Enterprise security', 'Full compliance', 'Peace of mind'],
      popular: false
    }
  ];

  const trustMetrics = [
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Businesses Served', icon: Users },
    { value: '99.9%', label: 'Accuracy Rate', icon: Award },
    { value: '24h', label: 'Response Time', icon: Zap },
    { value: 'SOC 2', label: 'Type II Certified', icon: Shield },
    { value: '4.9/5', label: 'Client Rating', icon: Star }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current financial processes and identify areas for improvement.',
      icon: Target
    },
    {
      step: '02',
      title: 'Custom Solution Design',
      description: 'We create a tailored plan that addresses your specific business needs and goals.',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Implementation & Training',
      description: 'We implement the solution and train your team on best practices.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'We provide continuous support and optimization to ensure long-term success.',
      icon: Shield
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-accent px-6 py-3 rounded-full mb-8">
            <PieChart className="w-5 h-5 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">
              Professional Services
            </span>
          </div>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Complete Financial{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Management
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From daily bookkeeping to strategic financial planning, we provide comprehensive 
            outsourced financial services that scale with your business growth.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-20">
          {trustMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="font-heading text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`card-service group relative overflow-hidden ${
                service.popular ? 'ring-2 ring-primary shadow-premium scale-105' : ''
              }`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
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

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-primary font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
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

        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Proven Process
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure your financial management is set up for success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-primary/10 to-primary-dark/10 p-16 rounded-3xl border border-primary/20">
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific financial management needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary text-lg px-8 py-4">
              Request Custom Quote
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Free 30-minute strategy session • No commitment required • Custom proposal within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;