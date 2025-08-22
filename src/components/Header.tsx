import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, Calculator, PieChart, Users, FileText, TrendingUp, Shield, Zap, Target, BarChart3, CheckCircle, Star, Clock, Award } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const navItems = [
    { 
      name: 'Services', 
      href: '#services',
      hasMegaMenu: true
    },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  const megaMenuData = {
    services: {
      mainServices: [
        {
          icon: Calculator,
          title: 'QuickBooks Management',
          description: 'Expert bookkeeping with QB Online & Desktop',
          features: ['Monthly reconciliation', 'Transaction categorization', 'Financial statements'],
          popular: true
        },
        {
          icon: PieChart,
          title: 'Monthly Management',
          description: 'Comprehensive financial oversight',
          features: ['Bank reconciliation', 'Cash flow monitoring', 'Variance analysis'],
          popular: false
        },
        {
          icon: Users,
          title: 'Payroll & HR',
          description: 'Complete payroll processing & compliance',
          features: ['Bi-weekly processing', 'Tax filing', 'Benefits administration'],
          popular: false
        }
      ],
      additionalServices: [
        { name: 'Billing & A/R', icon: FileText, description: 'Streamlined invoicing & collections' },
        { name: 'Cleanup & Advisory', icon: TrendingUp, description: 'Financial cleanup & strategy' },
        { name: 'Compliance & Security', icon: Shield, description: 'SOC 2 certified security' }
      ],
      stats: [
        { value: '99.9%', label: 'Accuracy Rate', icon: Award },
        { value: '24h', label: 'Response Time', icon: Clock },
        { value: '500+', label: 'Businesses Served', icon: Star }
      ]
    }
  };

  const handleMouseEnter = (itemName: string) => {
    if (itemName === 'Services') {
      setActiveMegaMenu('services');
    }
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="ClearLedger Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-8 block"
                >
                  {item.name}
                </a>
                
                {/* Mega Menu for Services */}
                {item.hasMegaMenu && activeMegaMenu === 'services' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-card border border-border rounded-2xl shadow-2xl z-50 p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {/* Main Services */}
                      <div className="col-span-2 space-y-6">
                        <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                          Our Core Services
                        </h3>
                        <div className="space-y-4">
                          {megaMenuData.services.mainServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                              <div key={index} className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-lg ${
                                service.popular 
                                  ? 'border-primary bg-primary/5' 
                                  : 'border-border hover:border-primary/30'
                              }`}>
                                <div className="flex items-start space-x-3">
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                    service.popular 
                                      ? 'bg-primary text-primary-foreground' 
                                      : 'bg-primary/10 text-primary'
                                  }`}>
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                                      {service.popular && (
                                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                                    <div className="space-y-1">
                                      {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                                          <CheckCircle className="w-3 h-3 text-primary" />
                                          <span>{feature}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Additional Services & Stats */}
                      <div className="space-y-6">
                        {/* Additional Services */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Additional Services</h4>
                          <div className="space-y-3">
                            {megaMenuData.services.additionalServices.map((service, index) => {
                              const IconComponent = service.icon;
                              return (
                                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                                  <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-foreground text-sm">{service.name}</div>
                                    <div className="text-xs text-muted-foreground">{service.description}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-accent/50 rounded-xl p-4">
                          <h4 className="font-semibold text-accent-foreground mb-3">Why Choose Us</h4>
                          <div className="space-y-3">
                            {megaMenuData.services.stats.map((stat, index) => {
                              const IconComponent = stat.icon;
                              return (
                                <div key={index} className="flex items-center space-x-3">
                                  <IconComponent className="w-4 h-4 text-primary" />
                                  <div>
                                    <div className="font-bold text-foreground text-sm">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                          <Button className="w-full btn-primary">
                            View All Services
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Request Pricing
            </Button>
            <Button className="btn-primary">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="ghost" size="sm">
                  Request Pricing
                </Button>
                <Button className="btn-primary">
                  Book Free Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;