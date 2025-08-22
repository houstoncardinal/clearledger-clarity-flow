import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  PieChart, 
  Users, 
  FileText, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "QuickBooks Management",
      description: "Expert setup, training, and ongoing maintenance",
      price: "From $199/month",
      icon: Calculator,
      features: [
        "Setup & configuration",
        "Monthly reconciliation",
        "User training",
        "Ongoing support"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      title: "Monthly Bookkeeping",
      description: "Complete monthly financial management",
      price: "From $299/month",
      icon: PieChart,
      features: [
        "Transaction categorization",
        "Bank reconciliation",
        "Monthly reports",
        "Year-end prep"
      ],
      popular: false,
      cta: "Learn More"
    },
    {
      title: "Payroll Processing",
      description: "Complete payroll and tax compliance",
      price: "From $99/month",
      icon: Users,
      features: [
        "Bi-weekly processing",
        "Tax filing",
        "Direct deposit",
        "Compliance monitoring"
      ],
      popular: false,
      cta: "Learn More"
    },
    {
      title: "Accounts Payable",
      description: "Streamlined vendor payment management",
      price: "From $149/month",
      icon: FileText,
      features: [
        "Invoice processing",
        "Payment scheduling",
        "Vendor management",
        "Cash flow optimization"
      ],
      popular: false,
      cta: "Learn More"
    },
    {
      title: "Financial Cleanup",
      description: "Get your books organized and up-to-date",
      price: "From $299",
      icon: TrendingUp,
      features: [
        "Historical review",
        "Account cleanup",
        "Process optimization",
        "Training & support"
      ],
      popular: false,
      cta: "Learn More"
    },
    {
      title: "Year-End Services",
      description: "Comprehensive year-end preparation",
      price: "From $199",
      icon: Calendar,
      features: [
        "Account reconciliation",
        "Financial statements",
        "Tax preparation support",
        "1099 filing"
      ],
      popular: false,
      cta: "Learn More"
    }
  ];

  const trustMetrics = [
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "24h", label: "Response Time" },
    { value: "500+", label: "Businesses Served" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple, Effective Bookkeeping
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the service that fits your needs. All plans include our commitment to accuracy and exceptional support.
            </p>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isHovered = hoveredService === index;
              
              return (
                <Card 
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    isHovered ? 'ring-2 ring-primary/20' : ''
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      {service.popular && (
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-primary mt-2">
                      {service.price}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button 
                        className={`w-full ${
                          service.popular ? 'btn-primary' : 'border-2 hover:border-primary hover:bg-primary/5'
                        }`}
                        variant={service.popular ? 'default' : 'outline'}
                      >
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Simple CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a free consultation and we'll recommend the perfect solution for your business.
            </p>
            <a href="#contact">
              <Button size="lg" className="btn-primary text-lg px-8 py-5">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;