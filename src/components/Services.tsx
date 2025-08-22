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
  CheckCircle,
  Star,
  Shield,
  Clock,
  Award
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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
    { value: "99.9%", label: "Accuracy Rate", icon: Award, color: "text-green-500" },
    { value: "24h", label: "Response Time", icon: Clock, color: "text-blue-500" },
    { value: "500+", label: "Businesses Served", icon: Star, color: "text-purple-500" },
    { value: "15+", label: "Years Experience", icon: Shield, color: "text-orange-500" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free 30-minute strategy session to understand your needs",
      icon: Calculator
    },
    {
      step: "02",
      title: "Custom Proposal",
      description: "Tailored solution designed for your business requirements",
      icon: FileText
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamless setup and onboarding with dedicated support",
      icon: TrendingUp
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring, reporting, and optimization",
      icon: Clock
    }
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
              Comprehensive Bookkeeping Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional financial management services designed to keep your business organized, compliant, and positioned for growth.
            </p>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${metric.color} bg-primary/10`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              );
            })}
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
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Ideal for:</span> {service.idealFor}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="group-hover:border-primary group-hover:text-primary transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Proven Process */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                Our Proven Process
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to financial management that ensures accuracy, compliance, and peace of mind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that trust ClearLedger for their financial management needs. 
              Get a free consultation and custom proposal today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg" className="btn-primary text-lg px-8 py-5">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-5 border-2">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;