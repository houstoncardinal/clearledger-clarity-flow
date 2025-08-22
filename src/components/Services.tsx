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
  Star,
  Calendar
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "QuickBooks Management",
      description: "Expert bookkeeping with QuickBooks Online and Desktop. We handle all your QB needs including setup, training, and ongoing maintenance.",
      icon: Calculator,
      features: [
        "QuickBooks setup & configuration",
        "Chart of accounts optimization",
        "Bank & credit card reconciliation",
        "Financial statement preparation",
        "User training & support",
        "Regular maintenance & updates"
      ],
      benefits: [
        "Save 10+ hours monthly on bookkeeping",
        "Real-time financial insights",
        "Professional QB expertise",
        "Ongoing support & maintenance"
      ],
      popular: true,
      idealFor: "Small businesses using QuickBooks"
    },
    {
      title: "Monthly Bookkeeping",
      description: "Comprehensive monthly bookkeeping services that keep your financial records organized and up-to-date.",
      icon: PieChart,
      features: [
        "Transaction categorization & coding",
        "Monthly bank reconciliation",
        "Accounts payable management",
        "Accounts receivable tracking",
        "Monthly financial reports",
        "Year-end preparation support"
      ],
      benefits: [
        "Always know your financial position",
        "Professional record keeping",
        "Tax-ready financial statements",
        "Monthly insights & analysis"
      ],
      popular: false,
      idealFor: "Growing businesses needing regular bookkeeping"
    },
    {
      title: "Payroll Processing",
      description: "Complete payroll services including processing, tax filing, and compliance management.",
      icon: Users,
      features: [
        "Bi-weekly or monthly payroll processing",
        "Federal & state tax filing",
        "Direct deposit setup",
        "Payroll tax deposits",
        "W-2 & 1099 preparation",
        "Compliance monitoring"
      ],
      benefits: [
        "Eliminate payroll headaches",
        "Ensure tax compliance",
        "Save time on payroll tasks",
        "Professional payroll expertise"
      ],
      popular: false,
      idealFor: "Businesses with employees"
    },
    {
      title: "Accounts Payable",
      description: "Streamlined accounts payable management to keep your vendor relationships and cash flow organized.",
      icon: FileText,
      features: [
        "Vendor invoice processing",
        "Payment scheduling & tracking",
        "Expense categorization",
        "Vendor relationship management",
        "Payment approval workflows",
        "Cash flow optimization"
      ],
      benefits: [
        "Never miss vendor payments",
        "Optimize cash flow timing",
        "Maintain vendor relationships",
        "Organized expense tracking"
      ],
      popular: false,
      idealFor: "Businesses with regular vendor payments"
    },
    {
      title: "Financial Cleanup & Advisory",
      description: "Get your books in order with our cleanup services and receive strategic financial guidance.",
      icon: TrendingUp,
      features: [
        "Historical transaction review",
        "Account reconciliation cleanup",
        "Financial statement preparation",
        "Cash flow analysis",
        "Financial strategy consulting",
        "Growth planning support"
      ],
      benefits: [
        "Clean, organized financial records",
        "Strategic financial insights",
        "Better decision making",
        "Growth-focused guidance"
      ],
      popular: false,
      idealFor: "Businesses needing financial organization"
    },
    {
      title: "Year-End Services",
      description: "Comprehensive year-end bookkeeping and preparation for tax season.",
      icon: Calendar,
      features: [
        "Year-end account reconciliation",
        "Financial statement preparation",
        "Tax preparation support",
        "1099 preparation & filing",
        "Year-end adjustments",
        "Tax planning consultation"
      ],
      benefits: [
        "Stress-free tax season",
        "Complete financial picture",
        "Tax optimization opportunities",
        "Professional year-end support"
      ],
      popular: false,
      idealFor: "All businesses needing year-end support"
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