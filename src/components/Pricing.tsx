import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, ArrowRight, Calculator, PieChart, Users } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      price: isAnnual ? 199 : 249,
      period: isAnnual ? "month" : "month",
      icon: Calculator,
      features: [
        "Monthly bookkeeping & reconciliation",
        "Basic financial reporting",
        "Email support",
        "QuickBooks setup assistance",
        "Tax preparation support",
        "Year-end closing"
      ],
      popular: false,
      idealFor: "Small businesses with <50 transactions/month"
    },
    {
      name: "Professional",
      description: "Comprehensive solution for growing businesses",
      price: isAnnual ? 399 : 499,
      period: isAnnual ? "month" : "month",
      icon: PieChart,
      features: [
        "Everything in Starter, plus:",
        "Advanced financial reporting",
        "Cash flow analysis",
        "Budget planning & monitoring",
        "Priority support",
        "Quarterly business reviews",
        "Strategic financial guidance"
      ],
      popular: true,
      idealFor: "Growing businesses with 50-200 transactions/month"
    },
    {
      name: "Enterprise",
      description: "Full-service financial management for established companies",
      price: isAnnual ? 799 : 999,
      period: isAnnual ? "month" : "month",
      icon: Users,
      features: [
        "Everything in Professional, plus:",
        "Dedicated account manager",
        "Custom reporting & dashboards",
        "Payroll processing",
        "Tax planning & strategy",
        "Multi-entity management",
        "24/7 priority support"
      ],
      popular: false,
      idealFor: "Established businesses with 200+ transactions/month"
    }
  ];

  const addOns = [
    {
      name: "Payroll Processing",
      price: 99,
      period: "month",
      description: "Complete payroll services including tax filing",
      features: ["Bi-weekly processing", "Tax deposits", "W-2 preparation", "Compliance monitoring"]
    },
    {
      name: "Accounts Payable Management",
      price: 149,
      period: "month",
      description: "Streamlined vendor payment management",
      features: ["Invoice processing", "Payment scheduling", "Vendor management", "Cash flow optimization"]
    },
    {
      name: "Financial Cleanup",
      price: 299,
      period: "one-time",
      description: "Get your books organized and up-to-date",
      features: ["Historical review", "Account reconciliation", "Process optimization", "Training & support"]
    },
    {
      name: "Tax Preparation",
      price: 199,
      period: "year",
      description: "Professional tax preparation and filing",
      features: ["Personal & business returns", "Tax planning", "IRS correspondence", "Audit support"]
    }
  ];

  const savings = isAnnual ? "Save 20% with annual billing" : "Monthly billing available";

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-semibold">Pricing</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core bookkeeping services with transparent pricing and no hidden fees.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-card border border-border rounded-full p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isAnnual 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAnnual 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">{savings}</p>
          </div>

          {/* Main Plans */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={index}
                  className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {plan.name}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Pricing */}
                    <div className="text-center">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.idealFor}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button 
                        className={`w-full group ${
                          plan.popular ? 'btn-primary' : 'border-2 hover:border-primary hover:bg-primary/5'
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Add-on Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Additional Services
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your bookkeeping package with specialized services tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-2">
                          {addon.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">
                          ${addon.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          /{addon.period}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {addon.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:border-primary group-hover:text-primary transition-all duration-300"
                    >
                      Add Service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific financial management needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-5">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-5 border-2">
                Request Custom Quote
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free 30-minute strategy session • No commitment required • Custom proposal within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;