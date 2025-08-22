import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Star, 
  ArrowRight,
  Calculator,
  Users,
  TrendingUp,
  Phone,
  Clock,
  Shield,
  HelpCircle
} from 'lucide-react';
import { useState } from 'react';

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const pricingTiers = [
    {
      name: 'Essentials',
      monthlyPrice: 299,
      annualPrice: 2990,
      description: 'Perfect for small businesses with basic bookkeeping needs',
      icon: Calculator,
      popular: false,
      features: [
        'Monthly QuickBooks reconciliation',
        'Basic financial statements (P&L, Balance Sheet)',
        'Transaction categorization (up to 100/month)',
        'Email support (24-hour response)',
        'Monthly financial summary report',
        'Bank account reconciliation (2 accounts)',
        'Basic tax preparation coordination'
      ],
      notIncluded: [
        'Payroll processing',
        'Phone support',
        'A/R management',
        'Advanced reporting'
      ],
      idealFor: 'Startups, sole proprietors, small service businesses',
      setupFee: 199
    },
    {
      name: 'Professional',
      monthlyPrice: 599,
      annualPrice: 5990,
      description: 'Comprehensive financial management for growing businesses',
      icon: TrendingUp,
      popular: true,
      features: [
        'Everything in Essentials',
        'Payroll processing (up to 10 employees)',
        'Accounts receivable management',
        'Advanced financial reporting & KPIs',
        'Phone & email support (same-day response)',
        'Transaction handling (up to 500/month)',
        'Quarterly business reviews',
        'Tax preparation coordination',
        'Cash flow forecasting',
        'Multiple entity support (up to 3)'
      ],
      notIncluded: [
        'Unlimited payroll',
        'Dedicated account manager',
        'Custom integrations'
      ],
      idealFor: 'Growing companies, service businesses, small manufacturers',
      setupFee: 299
    },
    {
      name: 'Enterprise',
      monthlyPrice: 1199,
      annualPrice: 11990,
      description: 'Full-service financial management for established businesses',
      icon: Users,
      popular: false,
      features: [
        'Everything in Professional',
        'Unlimited payroll processing',
        'Multi-entity management (unlimited)',
        'Custom financial reporting & dashboards',
        'Dedicated account manager',
        'Unlimited transactions',
        'Monthly strategy calls',
        'Priority support (2-hour response)',
        'Custom system integrations',
        'Audit support services',
        'Advanced analytics & insights',
        'White-label reporting options'
      ],
      notIncluded: [],
      idealFor: 'Established businesses, multi-location companies, complex entities',
      setupFee: 499
    }
  ];

  const addOnServices = [
    {
      category: 'Payroll & HR',
      services: [
        { name: 'Additional Payroll Employee', price: '$25/month per employee', description: 'Beyond plan limits' },
        { name: 'Workers Compensation Management', price: '$75/month', description: 'Full WC administration' },
        { name: 'Benefits Administration', price: '$15/employee/month', description: 'Health, dental, 401k support' },
        { name: 'HR Consulting', price: '$150/hour', description: 'Policy development, compliance' }
      ]
    },
    {
      category: 'Bookkeeping & Reporting',
      services: [
        { name: 'Extra Transaction Blocks (100)', price: '$50/month', description: 'Beyond plan limits' },
        { name: 'Expedited Monthly Close', price: '$150/month', description: '24-hour turnaround' },
        { name: 'Custom Reporting Package', price: '$200/month', description: 'Tailored dashboards & KPIs' },
        { name: 'Multi-Currency Support', price: '$100/month', description: 'Foreign exchange management' }
      ]
    },
    {
      category: 'Advisory & Strategy',
      services: [
        { name: 'Financial Planning & Analysis', price: '$300/month', description: 'Budgeting, forecasting, modeling' },
        { name: 'Business Advisory Consulting', price: '$200/hour', description: 'Strategic planning sessions' },
        { name: 'Merger & Acquisition Support', price: '$500/hour', description: 'Due diligence, valuations' },
        { name: 'Loan Package Preparation', price: '$750 one-time', description: 'Bank-ready financial packages' }
      ]
    },
    {
      category: 'Technology & Integration',
      services: [
        { name: 'Custom Integration Setup', price: '$500 one-time', description: 'CRM, e-commerce, POS systems' },
        { name: 'Data Migration Service', price: '$300 one-time', description: 'From other accounting systems' },
        { name: 'Training & Onboarding', price: '$150/hour', description: 'Staff training on systems' },
        { name: 'API Development', price: '$200/hour', description: 'Custom data connections' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the setup fee?',
      answer: 'Setup includes initial consultation, chart of accounts review/setup, historical data cleanup (up to 3 months), system configuration, team training, and onboarding support.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan with 30 days notice. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.'
    },
    {
      question: 'What if I exceed my transaction limits?',
      answer: 'We\'ll notify you before you reach your limit. Additional transaction blocks can be added for $50/100 transactions, or you can upgrade to the next tier.'
    },
    {
      question: 'Do you offer custom pricing for unique situations?',
      answer: 'Absolutely. For businesses with unique needs, multiple entities, or high complexity, we offer custom pricing packages. Contact us for a personalized quote.'
    },
    {
      question: 'What\'s your cancellation policy?',
      answer: 'No long-term contracts required. Cancel anytime with 30 days notice. We\'ll provide a complete handoff of your financial records and documentation.'
    },
    {
      question: 'Is there a satisfaction guarantee?',
      answer: 'Yes, we offer a 30-day satisfaction guarantee. If you\'re not completely satisfied, we\'ll refund your first month\'s payment (excluding setup fees).'
    }
  ];

  const calculateAnnualSavings = (monthly: number, annual: number) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
              <Calculator className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">
                Transparent Pricing
              </span>
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Clear, predictable pricing with no hidden fees. All plans include our 
              commitment to accuracy, security, and exceptional service.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-card rounded-lg p-1 shadow-card">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-primary text-primary-foreground shadow-button'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  billingPeriod === 'annual'
                    ? 'bg-primary text-primary-foreground shadow-button'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual <span className="text-sm">(Save up to 17%)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              const price = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.annualPrice;
              const displayPrice = billingPeriod === 'monthly' ? price : Math.round(price / 12);
              const { savings, percentage } = calculateAnnualSavings(tier.monthlyPrice, tier.annualPrice);
              
              return (
                <div 
                  key={index} 
                  className={`relative ${
                    tier.popular 
                      ? 'card-service ring-2 ring-primary shadow-premium scale-105' 
                      : 'card-service'
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline mb-2">
                      <span className="font-heading text-4xl font-bold text-foreground">
                        ${displayPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        /month
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <div className="text-sm text-primary font-medium">
                        Save ${savings} annually ({percentage}% off)
                      </div>
                    )}
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                      {tier.description}
                    </p>
                  </div>

                  {/* Setup Fee */}
                  <div className="bg-accent p-3 rounded-lg mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-accent-foreground">Setup Fee</span>
                      <span className="font-bold text-accent-foreground">${tier.setupFee}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included */}
                  {tier.notIncluded.length > 0 && (
                    <div className="space-y-2 mb-6 pb-6 border-b border-border">
                      <h4 className="text-sm font-medium text-muted-foreground">Not Included:</h4>
                      {tier.notIncluded.map((item, itemIndex) => (
                        <div key={itemIndex} className="text-sm text-muted-foreground">
                          • {item}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Ideal For */}
                  <div className="bg-secondary p-4 rounded-lg mb-8">
                    <h4 className="font-medium text-foreground mb-2">Ideal For:</h4>
                    <p className="text-sm text-muted-foreground">{tier.idealFor}</p>
                  </div>

                  {/* CTA */}
                  <Button 
                    className={`w-full ${tier.popular ? 'btn-primary' : 'btn-secondary'} group mb-4`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button variant="outline" className="w-full btn-ghost">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Add-On Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Extend your plan with additional services tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {addOnServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card rounded-2xl p-8 shadow-premium">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start justify-between p-4 bg-secondary rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{service.name}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-bold text-primary">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center bg-card p-12 rounded-2xl shadow-premium">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our team. We'll assess your needs and 
              recommend the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="btn-primary">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                Request Custom Quote
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>30-day satisfaction guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>No long-term contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;