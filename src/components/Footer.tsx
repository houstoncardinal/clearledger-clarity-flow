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
        { name: 'QuickBooks Management', href: '#services' },
        { name: 'Payroll & HR Support', href: '#services' },
        { name: 'Monthly Reconciliation', href: '#services' },
        { name: 'Billing & A/R', href: '#services' },
        { name: 'Cleanup & Advisory', href: '#services' },
        { name: 'Compliance & Security', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Team', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'News & Updates', href: '#' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Knowledge Center', href: '#resources' },
        { name: 'Whitepapers', href: '#resources' },
        { name: 'Webinars', href: '#resources' },
        { name: 'Free Tools', href: '#resources' },
        { name: 'Blog', href: '#' },
        { name: 'Support Center', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR Compliance', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Accessibility', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      subtext: 'Mon-Fri 8AM-6PM EST'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@clearledger.com',
      subtext: '24-hour response guarantee'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Toronto, ON',
      subtext: 'Serving clients across North America'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri 8AM-6PM EST',
      subtext: 'Emergency support available'
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
              <img 
                src="/logo.png" 
                alt="ClearLedger Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-heading text-2xl font-bold">ClearLedger</div>
                <div className="text-sm text-background/70">Financial Solutions</div>
              </div>
            </div>
            
            <p className="text-background/80 leading-relaxed mb-8 max-w-md">
              For over 15 years, ClearLedger has been providing exceptional financial 
              management services to growing businesses across North America.
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

      {/* Newsletter Signup */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-background mb-4">
              Stay Updated with Financial Insights
            </h3>
            <p className="text-background/80 mb-8 max-w-2xl mx-auto">
              Get the latest financial management tips, industry updates, and exclusive 
              content delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-background/20 rounded-lg bg-background/10 text-background placeholder-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-background/60 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-background/70">
              <span>&copy; {currentYear} ClearLedger Solutions. All rights reserved.</span>
              <span>•</span>
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <span>QuickBooks ProAdvisor</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;