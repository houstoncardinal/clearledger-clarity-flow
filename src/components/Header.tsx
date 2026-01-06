import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Calculator, 
  PieChart, 
  FileText, 
  TrendingUp,
  ChevronDown,
  Clock,
  Users,
  Shield,
  CreditCard,
  Sparkles,
  MapPin
} from 'lucide-react';

const Header = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  const servicesTriggerRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.consultation'), href: '/consultation' },
    { name: t('nav.checkOrdering'), href: '/check-ordering' }
  ];

  const servicesMenu = [
    {
      title: 'QuickBooks Services',
      description: 'Expert bookkeeping with both QB Online and Desktop platforms',
      icon: Calculator,
      href: '/quickbooks-services',
      features: ['Monthly reconciliation', 'Transaction categorization', 'Multi-entity management']
    },
    {
      title: 'Monthly Management',
      description: 'Comprehensive monthly financial management and reporting',
      icon: PieChart,
      href: '/monthly-management',
      features: ['Bank reconciliation', 'Financial reporting', 'Cash flow monitoring']
    },
    {
      title: 'Billing & Accounts Payable',
      description: 'Streamlined invoicing and accounts payable management',
      icon: FileText,
      href: '/billing-accounts-payable',
      features: ['Automated invoicing', 'Payment tracking', 'Vendor management']
    },
    {
      title: 'Cleanup & Advisory',
      description: 'Financial cleanup and strategic advisory services',
      icon: TrendingUp,
      href: '/cleanup-advisory',
      features: ['Historical cleanup', 'Process optimization', 'Strategic consulting']
    },
    {
      title: 'Custom Business Checks',
      description: 'Professional custom business checks with security features',
      icon: CreditCard,
      href: '/check-ordering',
      features: ['QuickBooks compatible', 'Built-in security', 'Free personalization']
    }
  ];

  const quickLinks = [
    { name: 'Free Consultation', href: '/consultation', icon: Clock },
    { name: 'Our Team', href: '/about', icon: Users },
    { name: 'Certifications', href: '/about', icon: Shield }
  ];

  const serviceAreas = [
    { name: 'Texas', href: '/texas-bookkeeping' },
    { name: 'Oklahoma', href: '/oklahoma-bookkeeping' },
    { name: 'Louisiana', href: '/louisiana-bookkeeping' },
    { name: 'Mississippi', href: '/mississippi-bookkeeping' },
    { name: 'New Mexico', href: '/new-mexico-bookkeeping' },
    { name: 'Florida', href: '/florida-bookkeeping' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' 
        : 'bg-background/80 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="ClearLedger Solutions Logo" 
              className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Home Navigation */}
            <Link to="/" className="relative text-foreground font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:bg-accent hover:text-primary group">
              <span className="relative z-10">{t('nav.home')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Services Mega Menu */}
            <div 
              ref={servicesTriggerRef}
              className="relative group"
              onMouseEnter={() => {
                if (servicesTimeout) {
                  clearTimeout(servicesTimeout);
                  setServicesTimeout(null);
                }
                setIsServicesOpen(true);
                // Calculate dropdown position
                if (servicesTriggerRef.current) {
                  const rect = servicesTriggerRef.current.getBoundingClientRect();
                  setDropdownPosition({
                    top: rect.bottom + window.scrollY,
                    left: rect.left + window.scrollX,
                    width: rect.width
                  });
                }
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setIsServicesOpen(false), 150);
                setServicesTimeout(timeout);
              }}
            >
              <div className="flex items-baseline space-x-1">
                <Link to="/services" className="relative text-foreground font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:bg-accent hover:text-primary group">
                  <span className="relative z-10">{t('nav.services')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Invisible Bridge for Smooth Hover */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-full h-2 bg-transparent" />
              )}
              
              {/* Mega Menu Dropdown */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[800px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
                  style={{ zIndex: 99999 }}
                  onMouseEnter={() => {
                    if (servicesTimeout) {
                      clearTimeout(servicesTimeout);
                      setServicesTimeout(null);
                    }
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setIsServicesOpen(false), 150);
                    setServicesTimeout(timeout);
                  }}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Services Column */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <Calculator className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-heading text-base font-bold text-foreground">Our Services</h3>
                            <p className="text-xs text-muted-foreground">Comprehensive financial solutions</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {servicesMenu.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={index}
                                to={service.href}
                                className="group block p-3 rounded-lg hover:bg-accent/50 transition-all duration-200"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="flex items-start space-x-2">
                                  <div className="w-6 h-6 bg-gradient-primary/20 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-3 h-3 text-primary" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-foreground group-hover:text-foreground transition-colors duration-200 text-sm">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {service.features.slice(0, 1).map((feature, featureIndex) => (
                                        <span 
                                          key={featureIndex}
                                          className="text-xs bg-accent px-1.5 py-0.5 rounded text-accent-foreground"
                                        >
                                          {feature}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Quick Links Column */}
                      <div className="border-l border-border pl-6">
                        <div className="mb-4">
                          <h3 className="font-heading text-base font-bold text-foreground mb-1">Quick Links</h3>
                          <p className="text-xs text-muted-foreground">Get started or learn more</p>
                        </div>
                        
                        <div className="space-y-2">
                          {quickLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                              <Link
                                key={index}
                                to={link.href}
                                className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent/50 transition-all duration-200 group"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                <div className="w-6 h-6 bg-gradient-primary/20 rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-3 h-3 text-primary" />
                                </div>
                                <span className="font-medium text-foreground group-hover:text-foreground transition-colors duration-200 text-sm">
                                  {link.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Service Areas */}
                        <div className="mt-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <h4 className="font-medium text-foreground text-sm">Service Areas</h4>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {serviceAreas.map((area, index) => (
                              <Link
                                key={index}
                                to={area.href}
                                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 py-1"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {area.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-6 p-3 bg-gradient-subtle rounded-lg border border-border/50">
                          <h4 className="font-medium text-foreground mb-1 text-sm">Ready to get started?</h4>
                          <p className="text-xs text-muted-foreground mb-3">
                            Schedule your free consultation today
                          </p>
                          <div className="space-y-2">
                            <Link to="/consultation">
                              <Button size="sm" className="btn-primary w-full text-xs py-1">
                                Book Free Consultation
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </Link>
                            <a href="https://calendly.com/jj-yourclearledger" target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="outline" className="btn-secondary w-full text-xs py-1">
                                📅 Book Directly
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-foreground font-medium px-3 py-2 rounded-xl transition-all duration-300 hover:bg-accent hover:text-primary group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Right Side: Language + CTAs */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <LanguageSwitcher variant="compact" />
            
            <div className="w-px h-6 bg-border"></div>
            
            <Link to="/contact">
              <Button className="btn-primary group">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t('nav.bookConsultation')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl transition-all duration-300 hover:bg-accent hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Professional Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-background animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              {/* Language Switcher for Mobile */}
              <div className="px-3 pb-3 border-b border-border">
                <LanguageSwitcher />
              </div>
              
              {/* Services Section */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-foreground font-semibold py-2 px-3">
                  <Calculator className="w-4 h-4 text-primary" />
                  <span className="text-sm">{t('nav.services')}</span>
                </div>
                <div className="space-y-1">
                  {servicesMenu.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.href}
                        className="relative flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 py-2 px-3 rounded-lg hover:bg-accent group"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className="w-4 h-4 text-primary group-hover:text-primary transition-colors duration-300" />
                        <span className="relative z-10">{service.title}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-border my-3"></div>

              {/* Other Navigation Items */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-accent block group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>

              {/* Quick Links */}
              <div className="border-t border-border pt-3">
                <div className="text-sm font-medium text-foreground mb-2">Quick Links</div>
                <div className="space-y-1">
                  {quickLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <Link
                        key={index}
                        to={link.href}
                        className="relative flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 py-2 px-3 rounded-lg hover:bg-accent group"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className="w-4 h-4 text-primary group-hover:text-primary transition-colors duration-300" />
                        <span className="relative z-10">{link.name}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>


            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;