import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Linkedin,
  Facebook,
  ArrowUpRight
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
      title: 'Service Areas',
      links: [
        { name: 'Texas Bookkeeping', href: '/texas-bookkeeping' },
        { name: 'Oklahoma Bookkeeping', href: '/oklahoma-bookkeeping' },
        { name: 'Louisiana Bookkeeping', href: '/louisiana-bookkeeping' },
        { name: 'Mississippi Bookkeeping', href: '/mississippi-bookkeeping' },
        { name: 'New Mexico Bookkeeping', href: '/new-mexico-bookkeeping' },
        { name: 'Florida Bookkeeping', href: '/florida-bookkeeping' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Consultation', href: '/consultation' }
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
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/yourclearledger' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/yourclearledger' },
    { name: 'Email', icon: Mail, href: 'mailto:admin@yourclearledger.com' },
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
      value: 'admin@yourclearledger.com',
      subtext: '24-hour response commitment'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Whitewright, TX',
      subtext: 'Serving clients nationwide'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'M-Th 7:30am-4:30pm',
      subtext: 'Fri 7:30am-1:00pm'
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle Top Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-white">ClearLedger Solutions</div>
                <div className="text-sm text-white/50">Where Clarity Meets Compliance</div>
              </div>
            </div>
            
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">
              ClearLedger Solutions LLC specializes in providing accurate, reliable, and transparent
              bookkeeping services tailored to small businesses and entrepreneurs across 15+ industries.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {contactInfo.slice(0, 2).map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                    <IconComponent className="w-5 h-5 text-primary mb-2" />
                    <div className="text-sm font-medium text-white">{info.value}</div>
                    <div className="text-xs text-white/40 mt-1">{info.subtext}</div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-primary/50"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-heading text-sm font-semibold text-white mb-5 flex items-center gap-2">
                    {section.title}
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="group text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1"
                        >
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                        </Link>
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
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-white/40">
              <span>&copy; {currentYear} ClearLedger Solutions LLC</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">QuickBooks ProAdvisor Certified</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">10+ Years Experience</span>
            </div>
            
            <div className="flex items-center gap-6 text-xs">
              <Link to="/privacy-policy" className="text-white/40 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-white/40 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/cookie-policy" className="text-white/40 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
          
          {/* Cardinal Consulting Credit */}
          <div className="text-center mt-4 pt-4 border-t border-white/5">
            <p className="text-[11px] text-white/30">
              Website created by{' '}
              <a 
                href="https://www.cardinalhtx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/50 transition-colors"
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