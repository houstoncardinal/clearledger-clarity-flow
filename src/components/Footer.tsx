import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'QuickBooks Services', href: '/quickbooks-services' },
        { name: 'Monthly Management', href: '/monthly-management' },
        { name: 'Billing & A/P', href: '/billing-accounts-payable' },
        { name: 'Cleanup & Advisory', href: '/cleanup-advisory' },
        { name: 'Custom Business Checks', href: '/check-ordering' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Team', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Consultation', href: '/consultation' },
        { name: 'Check Ordering', href: '/check-ordering' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/clearledger-solutions' },
    { name: 'Email', icon: Mail, href: 'mailto:jj@yourclearledger.com' },
    { name: 'Phone', icon: Phone, href: 'tel:(903) 815-9488' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(903) 815-9488',
      subtext: 'M-Th 7:30am-4:30pm, Fri 7:30am-1:00pm'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'jj@yourclearledger.com',
      subtext: '24-hour response commitment'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Whitewright, TX',
      subtext: 'Serving clients across 15+ industries'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'M-Th 7:30am-4:30pm, Fri 7:30am-1:00pm',
      subtext: 'Saturday & Sunday - Closed'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-heading text-2xl font-bold">ClearLedger Solutions LLC</div>
                <div className="text-sm text-background/70">Financial Solutions</div>
              </div>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-8 max-w-md">
              ClearLedger Solutions LLC specializes in providing accurate, reliable, and transparent
              bookkeeping services tailored to small businesses and entrepreneurs across 15+ industries.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-background">{info.value}</div>
                      <div className="text-sm text-background/70">{info.subtext}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-heading text-lg font-bold text-background mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith('#') ? (
                          <button
                            onClick={() => {
                              const element = document.querySelector(link.href);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            className="text-background/70 hover:text-background transition-colors duration-200 text-left"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            to={link.href}
                            className="text-background/70 hover:text-background transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-background/70">
              <span>&copy; {currentYear} ClearLedger Solutions LLC. All rights reserved.</span>
              <span>•</span>
              <span>QuickBooks ProAdvisor Certified</span>
              <span>•</span>
              <span>10+ Years Experience</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-background/70 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-background/70 hover:text-background transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          {/* Cardinal Consulting Fineprint */}
          <div className="text-center mt-4">
            <p className="text-xs text-background/50">
              Website created by{' '}
              <a 
                href="https://www.cardinalhtx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-background/70 transition-colors"
              >
                Cardinal Consulting
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;