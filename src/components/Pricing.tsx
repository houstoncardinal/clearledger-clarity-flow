import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Star, 
  ArrowRight,
  Calculator,
  Users,
  TrendingUp
} from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Essentials',
      price: 'Starting at $299',
      period: '/month',
      description: 'Perfect for small businesses with basic bookkeeping needs',
      icon: Calculator,
      popular: false,
      features: [
        'Monthly QuickBooks reconciliation',
        'Basic financial statements',
        'Transaction categorization',
        'Email support',
        'Up to 100 transactions/month',
        'Monthly financial summary'
      ],
      idealFor: 'Startups, sole proprietors, small service businesses'
    },
    {
      name: 'Professional',
      price: 'Starting at $599',
      period: '/month',
      description: 'Comprehensive financial management for growing businesses',
      icon: TrendingUp,
      popular: true,
      features: [
        'Everything in Essentials',
        'Advanced QuickBooks support',
        'Accounts payable management',
        'Advanced financial reporting',
        'Phone & email support',
        'Up to 500 transactions/month',
        'Quarterly business reviews',
        'Tax preparation coordination'
      ],
      idealFor: 'Growing companies, service businesses, small manufacturers'
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      period: '',
      description: 'Full-service financial management for established businesses',
      icon: Users,
      popular: false,
      features: [
        'Everything in Professional',
        'Unlimited QuickBooks support',
        'Multi-entity management',
        'Custom financial reporting',
        'Dedicated account manager',
        'Unlimited transactions',
        'Monthly strategy calls',
        'Priority support',
        'Custom integrations'
      ],
      idealFor: 'Established businesses, multi-location companies, complex entities'
    }
  ];

  const addOns = [
    { name: 'Additional QuickBooks Company File', price: '$25/month per file' },
    { name: 'Extra Transaction Blocks (100)', price: '$50/month' },
    { name: 'Expedited Monthly Close', price: '$150/month' },
    { name: 'Custom Integration Setup', price: '$500 one-time' },
    { name: 'Financial Planning & Analysis', price: '$200/month' },
    { name: 'Audit Support Services', price: '$150/hour' }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clear, predictable pricing with no hidden fees. All plans include our 
            commitment to accuracy and exceptional service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
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
                  <div className="flex items-baseline mb-4">
                    <span className="font-heading text-3xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="bg-accent p-4 rounded-lg mb-8">
                  <h4 className="font-medium text-accent-foreground mb-2">Ideal For:</h4>
                  <p className="text-sm text-accent-foreground">{tier.idealFor}</p>
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full ${tier.popular ? 'btn-primary' : 'btn-secondary'} group`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="bg-gradient-subtle rounded-2xl p-12 mb-16">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Optional Add-On Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card">
                <h4 className="font-medium text-foreground mb-2">{addon.name}</h4>
                <p className="text-primary font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card p-12 rounded-2xl shadow-premium">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Not Sure Which Plan is Right for You?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our team. We'll assess your needs and 
            recommend the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary">
              Request Custom Quote
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All plans include a 30-day satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;